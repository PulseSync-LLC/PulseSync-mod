(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3724],
    {
        108: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            var r = i(2058),
                s = i(61691);
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
        3099: (e) => {
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
        4795: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => a });
            var r = i(72288),
                s = i(97956);
            let a = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: a },
                    experiments: n,
                } = (0, r.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = n.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5048: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            var r = i(61691),
                s = i(15077);
            let a = (e) => {
                switch (e) {
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
        10079: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => Q });
            var r = i(88800),
                s = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(92716),
                d = i(17392),
                c = i(18593),
                u = i(61691),
                _ = i(29993),
                m = i(79070),
                p = i(29832),
                h = i(52300),
                v = i(7555),
                A = i(29504),
                x = i(60757),
                C = i(29008),
                b = i(92966),
                g = i(56651),
                k = i(13946),
                N = i(43443),
                T = i(5407),
                f = i(96527),
                y = i(76675),
                S = i(25557),
                j = i(28830),
                L = i(84384),
                E = i(4795),
                I = i(87762),
                O = i(32414),
                R = i(78940),
                w = i(55693),
                M = i(39079),
                P = i(72288),
                z = i(52726),
                B = i(86298),
                D = i(81877),
                U = i(90224),
                K = i(49738),
                W = i(91292),
                F = i(56862),
                H = i(16704),
                V = i(56446),
                $ = i(36207),
                G = i(41918);
            let Y = { mainAxis: -26, alignmentAxis: -16 },
                J = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' };
            var X = i(95756),
                q = i(28304),
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
                    { ref: es, intersectionPropertyId: ea } = (0, j.n)(),
                    {
                        user: en,
                        trailer: el,
                        settings: { isMobile: eo },
                        albumCPA: { isPlusCPAEnabled: ed },
                        paywall: { modal: ec },
                    } = (0, P.g)(),
                    { from: eu, utmLink: e_ } = (0, L.f)({ contextId: a.id, contextType: c.K.Album, utmForPageIds: a.artistIds }),
                    { formatMessage: em, formatDate: ep } = (0, l.A)(),
                    { sendLikeSearchFeedback: eh, sendNavigateSearchFeedback: ev, sendPlaySearchFeedback: eA } = (0, w.z)(),
                    [ex, eC] = (0, n.useState)(!1),
                    [eb, eg] = (0, n.useState)(!1),
                    [ek, eN] = (0, n.useState)(!1),
                    eT = (0, f.N)(),
                    ef = (0, y.b)(),
                    ey = (0, b.K)(a),
                    eS = (0, g.A)(a),
                    ej = (0, R.Z)(a.url),
                    [eL, eE] = (0, n.useState)(!1),
                    eI = (0, S.F)(),
                    [eO, eR] = (0, n.useState)(!1),
                    ew = (0, T.P)(),
                    { pageAlbumId: eM } = (0, I.T)(),
                    eP = ed({ pageAlbumId: eM, albumId: a.id, isNonMusic: a.isNonMusic }),
                    ez = (0, E.N)(),
                    eB = a.isAvailableOnlyForPlus && !a.isUnsafeLegal && !a.isLegalRejected,
                    eD = eB && !eo,
                    eU = a.isAvailable || eD || a.isAudiobook,
                    eK = (0, _.c)((e) => {
                        if ((e.stopPropagation(), ew())) return void e.preventDefault();
                        (el.openAlbumTrailer(a.id), eI(o.DomainObjectType.Album, String(a.id)));
                    }),
                    eW = a.type === u._.SINGLE ? em({ id: 'entity-names.single' }) : void 0,
                    eF = a.releaseDate ? ep(a.releaseDate, er()) : void 0,
                    eH = ((e) => {
                        let t = e.filter((e) => !!e).join(' \xb7 ');
                        return 0 === t.length ? null : t;
                    })([null != eF ? eF : a.year, eW]),
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
                    { isPlaying: eG, togglePlay: eY } = (0, M.D)({
                        playContextParams: { contextData: { type: c.K.Album, meta: { id: a.id }, from: eu, utmLink: e_ }, loadContextMeta: !0 },
                    }),
                    eJ = (0, x.c)({ album: a, callback: ej }),
                    eX = (0, x.c)({ album: a, callback: eY }),
                    eq = (0, _.c)((e) => {
                        (eT({ to: o.AppScreen.AlbumScreen }), null == ev || ev(), eJ(e));
                    }),
                    eZ = (0, _.c)(() => {
                        if (!ew()) {
                            if (ez) return void ec.open();
                            (eb || eG || (eg(!0), null == eA || eA()), eX(), ef(!eG));
                        }
                    }),
                    eQ = (0, _.c)(() => {
                        (ex || a.isLiked || (eC(!0), null == eh || eh()), ey());
                    }),
                    e0 = (0, _.c)((e) => {
                        (eN(e), eE(e));
                    }),
                    e8 = (0, n.useMemo)(() => {
                        var e;
                        return (0, r.jsxs)(A.HL, {
                            className: (0, s.$)(Z().title, { [Z().title_withVersion]: a.version, [Z().title_withChart]: ee }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'aria-hidden': !0,
                            'data-test-id': d.Kq.album.ALBUM_TITLE,
                            children: [
                                (0, r.jsx)(W.N, {
                                    'aria-label': ''.concat(a.title, ' ').concat(null != (e = a.version) ? e : ''),
                                    className: Z().titleLink,
                                    href: a.url,
                                    tabIndex: -1,
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
                    e9 = (0, n.useMemo)(() => {
                        var e;
                        return (0, r.jsx)(W.N, {
                            className: Z().srTitleLink,
                            href: a.url,
                            onClick: eq,
                            children: ''.concat(a.title, ' ').concat(null != (e = a.version) ? e : ''),
                        });
                    }, [a.title, a.url, a.version, eq]),
                    e2 = (0, n.useMemo)(() => {
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
                    e5 = (0, n.useMemo)(
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
                    e1 = (0, n.useCallback)(
                        () =>
                            (0, r.jsx)(
                                H.D,
                                {
                                    className: (0, s.$)(Z().playButton, Z().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: eZ,
                                    isPlaying: eG,
                                    disabled: eD,
                                },
                                a.getKey('PlayButton'),
                            ),
                        [eD, a, eG, eZ],
                    ),
                    e4 = (0, n.useMemo)(
                        () =>
                            eD
                                ? (0, r.jsx)(z.S, {
                                      className: Z().buyPlusPopover,
                                      buttonText: em({ id: 'interface-actions.more-details' }),
                                      isNested: !0,
                                      placement: 'top-start',
                                      isOpened: eO,
                                      onOpenChange: eR,
                                      textVariant: 'album',
                                      albumTextVariant: a.type,
                                      arrowProps: J,
                                      offsetOptions: Y,
                                      renderChildren: e1,
                                  })
                                : e1(),
                        [eD, eO, eR, em, e1, a.type],
                    ),
                    e7 = (0, m.L)(() => {
                        if (eD) return;
                        let e = !eP && !en.isAuthorized;
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
                    e6 = (0, n.useMemo)(() => {
                        if (!eD)
                            return (0, r.jsx)(
                                F.O,
                                { onClick: eS, isPinned: a.isPinned, className: (0, s.$)(Z().pinButton, Z().control), withRipple: !1, isDisabled: eD },
                                a.getKey('PinButton'),
                            );
                    }, [a, eD, eS]),
                    e3 = (0, n.useMemo)(() => {
                        if (a.isAvailable || eD)
                            return (0, r.jsx)(p.hg, {
                                isVisible: ek || eL || eO,
                                className: Z().controls,
                                playControl: e4,
                                likeControl: e7,
                                menuControl: e5,
                                pinControl: e6,
                                trailerControl: e2,
                            });
                    }, [a, ek, eL, e5, e2, eO, e4, e7, e6, eD]),
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
                                        (0, r.jsx)(D.B, {
                                            className: Z().image,
                                            src: a.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: e$,
                                            withAvatarReplace: !0,
                                            isAvailable: eU,
                                            'aria-hidden': !0,
                                        }),
                                        eB && (0, r.jsx)(h.I, { variant: 'plusBadge', className: Z().plusBadge }),
                                        e3,
                                    ],
                                }),
                            }),
                        [eq, a.coverUri, eU, e$, e3, eB],
                    );
                return (0, r.jsxs)(p.MN, {
                    ref: es,
                    className: (0, s.$)(Z().root, { [Z().root_withChart]: ee }, t),
                    'aria-label': e$,
                    explicitMarkComponent:
                        a.explicitDisclaimer &&
                        (0, r.jsx)(
                            U.N,
                            { className: Z().explicitMark, getDescriptionTexts: a.getDescriptionTexts, variant: a.explicitDisclaimer },
                            a.getKey('AlbumCardExplicitMarkIcon'),
                        ),
                    title: e8,
                    srTitle: e9,
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
                        (0, r.jsx)(N.t, { withIcon: !0, className: Z().chart, position: a.chart.position, progress: a.chart.progress }, a.getKey('chart')),
                    'data-test-id': d.Kq.album.ALBUM_ITEM,
                    children: [
                        et &&
                            eH &&
                            (0, r.jsx)(A.HL, { className: Z().addition, variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: eH }),
                        Q &&
                            !!a.actualLikesCount &&
                            (0, r.jsx)(B.x, {
                                className: Z().likeTextButton,
                                ariaLabel: em({ id: 'entity-names.likes-counter' }, { counter: a.actualLikesCount }),
                                likesCount: a.actualLikesCount,
                                isLiked: a.isLiked,
                                handleLikeClick: ey,
                            }),
                        i,
                    ],
                });
            });
        },
        13607: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(r || (r = {})));
        },
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => W });
            var r = i(88800),
                s = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(79070),
                o = i(17610),
                d = i(24548),
                c = i(29993),
                u = i(72288),
                _ = i(35994);
            let m = (e, t) => {
                let { withLink: i, separator: r } = t,
                    s = i && !e.various ? (0, _.R)(e.id) : null;
                return { artist: e, name: e.name, separator: r, link: s };
            };
            var p = i(21010),
                h = i.n(p),
                v = i(17392),
                A = i(29504),
                x = i(91292),
                C = i(2058),
                b = i(92716),
                g = i(96527),
                k = i(78940),
                N = i(55693),
                T = i(58217);
            let f = (0, a.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: s, captionSize: a = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: d } = e,
                        {
                            name: _,
                            link: m,
                            title: p,
                            ariaLabel: h,
                            tooltipText: f,
                            isTooltipEnabled: y,
                            handleNavigate: S,
                        } = ((e) => {
                            var t, i;
                            let { item: r, allArtistsTitle: s, withCustomTooltip: a } = e,
                                { formatMessage: n } = (0, C.A)(),
                                l = ((e, t) => {
                                    let { item: i, allArtistsTitle: r, withCustomTooltip: s } = e,
                                        a = r || i.name;
                                    return {
                                        ...i,
                                        title: s ? void 0 : a,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: a,
                                        isTooltipEnabled: !r && s,
                                    };
                                })({ item: r, allArtistsTitle: s, withCustomTooltip: a }, n),
                                {
                                    track: o,
                                    settings: { isMobile: d },
                                } = (0, u.g)(),
                                _ = (0, k.Z)(null != (i = null == (t = l.link) ? void 0 : t.href) ? i : l.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, N.z)(),
                                p = (0, g.N)(),
                                h = (0, c.c)((e) => {
                                    (d && o.isOpened && o.close(), _(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: r, fullscreenPlayer: s, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: n } = r;
                                    return (0, T.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (r.reset(), n.close()), s.modal.isOpened && s.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: l.artist, callback: h }),
                                A = (0, c.c)((e) => {
                                    (p({ to: b.AppScreen.ArtistScreen }), null == m || m(), v(e));
                                });
                            return { ...l, handleNavigate: A };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: l });
                    return m
                        ? (0, r.jsx)(x.N, {
                              ...m,
                              'aria-label': h,
                              className: i,
                              onClick: S,
                              title: p,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(o.m_, {
                                  enabled: y,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: f,
                                  hoverSettings: d,
                                  children: (0, r.jsx)(A.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: s, children: _ }),
                              }),
                          })
                        : (0, r.jsx)(o.m_, {
                              enabled: y,
                              offsetOptions: 4,
                              placement: 'top',
                              text: f,
                              hoverSettings: d,
                              children: (0, r.jsx)(A.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: s,
                                  title: p,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                y = (e) => {
                    let { group: t, linkClassName: i, captionClassName: s, captionSize: a, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: d } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, r.jsx)(f, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: s,
                                captionSize: a,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: d,
                            }),
                            t.decomposed.map((e) =>
                                (0, r.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, r.jsx)(f, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: s,
                                                captionSize: a,
                                                allArtistsTitle: l,
                                                withCustomTooltip: o,
                                                hoverSettings: d,
                                            }),
                                        ],
                                    },
                                    e.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var S = i(88969),
                j = i(65453);
            let L = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: a } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(j.N, {
                            role: 'button',
                            href: '',
                            className: (0, s.$)(h().spoiler, i),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(S.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var E = i(61013),
                I = i(87819),
                O = i(40634),
                R = i(48468),
                w = i.n(R);
            let M = (0, a.PA)((e) => {
                    let { label: t, artists: i, forwardRef: s } = e;
                    return (0, r.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, I.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: s, children: t }),
                            (0, r.jsx)(o.ZI, { className: w().tooltipContent, children: i.map((e) => (0, r.jsx)(O.V, { artist: e, className: w().artistItem }, e.id)) }),
                        ],
                    });
                }),
                P = (0, n.forwardRef)((e, t) => (0, r.jsx)(M, { forwardRef: t, ...e }));
            var z = i(19934),
                B = i(70396),
                D = i.n(B);
            let U = (0, a.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: a } = (0, C.A)();
                    return (0, r.jsx)(z.W1, {
                        isMobile: !0,
                        className: (0, s.$)(D().root, D().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(O.V, { artist: e }, e.id)),
                    });
                }),
                K = (0, a.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: s } = e,
                        [a, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, u.g)(),
                        _ = (0, c.c)(() => {
                            let e = s.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, l.L)(() =>
                            (0, E.A)(() => {
                                _();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                _(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, _],
                        ),
                        (0, n.useEffect)(() => {
                            _();
                        }, [t, _]),
                        0 !== t.length)
                    )
                        return (a || d) && (!d || 1 !== t.length) ? (d ? (0, r.jsx)(U, { artists: t, label: i }) : (0, r.jsx)(P, { artists: t, label: i })) : i;
                }),
                W = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: a,
                            linkClassName: _,
                            captionClassName: p,
                            captionSize: v,
                            variant: A = 'breakAll',
                            spoilerComponent: x,
                            ...C
                        } = e,
                        b = ((e) => {
                            var t, i, r;
                            let { separator: s, visibleArtistsCount: a, withLink: l, withComposer: o, artistIdWithoutLink: d, withContextMenu: _ } = e,
                                p = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                v = null == (r = e.withCustomTooltip) || r,
                                A = (0, n.useRef)(null),
                                [x, C] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: b },
                                } = (0, u.g)(),
                                g = ((!b || 1 === p.length) && _) || !_,
                                k = ((e, t) => {
                                    var i, r, s;
                                    let a = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        n = null == (r = null == t ? void 0 : t.withLink) || r,
                                        l = null != (s = null == t ? void 0 : t.separator) ? s : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(l),
                                        { visibleArtists: d, hiddenArtistsCount: c } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: r } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => r || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: d.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: r, separator: s, isFirst: a } = t;
                                                return {
                                                    primary: m(e, { withLink: r, separator: a ? void 0 : s }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = s ? e.separator : '';
                                                        return m(e, { withLink: r, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: c,
                                    };
                                })(p, { separator: s, visibleArtistsCount: x ? void 0 : a, withComposer: o, withLink: !!g && l, artistIdWithoutLink: d }),
                                N = h ? k.allArtistsTitle : '',
                                T = (0, c.c)((e) => {
                                    (C(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: k.groups,
                                hiddenArtistsCount: k.hiddenArtistsCount,
                                allArtistsTitle: N,
                                withCustomTooltip: v,
                                withContextMenu: _,
                                labelRef: A,
                                handleOnSpoilerClick: T,
                                isTooltipEnabled: !!N && v && !_ && !b,
                                title: !N || v || _ ? void 0 : N,
                            };
                        })(C),
                        g = (0, l.L)(() =>
                            b.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(x)
                                  ? x
                                  : (0, r.jsx)(L, { spoilerClassName: a, spoilerArtistsCount: b.hiddenArtistsCount, handleOnSpoilerClick: b.handleOnSpoilerClick }),
                        ),
                        k = (0, r.jsx)(o.m_, {
                            referenceRef: b.labelRef,
                            enabled: b.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: b.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, r.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, s.$)(h().root, h()['root_variant_'.concat(A)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: b.title,
                                children: [
                                    b.groups.map((e) =>
                                        (0, r.jsx)(
                                            y,
                                            {
                                                group: e,
                                                linkClassName: _,
                                                captionClassName: p,
                                                captionSize: v,
                                                allArtistsTitle: b.allArtistsTitle,
                                                withCustomTooltip: b.withCustomTooltip,
                                                hoverSettings: d.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    g,
                                ],
                            }),
                        });
                    return b.withContextMenu ? (0, r.jsx)(K, { labelRef: b.labelRef, artists: b.artists, label: k }) : k;
                });
        },
        15526: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        17332: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        18143: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { T: () => r }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(r || (r = {})));
        },
        18278: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => d });
            var r = i(88800),
                s = i(53548),
                a = i(17392),
                n = i(29504),
                l = i(15526),
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
        21010: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        25883: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var r = i(88800),
                s = i(84961),
                a = i(33719),
                n = i(5048);
            let l = (0, s.PA)((e) => {
                let { album: t, closeToast: i } = e,
                    s = (0, n.b)(t.type);
                return (0, r.jsx)(a.k, {
                    closeToast: i,
                    entityVariant: s,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            });
        },
        28304: (e) => {
            e.exports = {
                controls: 'AlbumCard_controls__yuO40',
                cover: 'AlbumCard_cover__zXmdl',
                root: 'AlbumCard_root__vP6k4',
                srTitleLink: 'AlbumCard_srTitleLink__TxBNz',
                root_withChart: 'AlbumCard_root_withChart__J2SZv',
                artists: 'AlbumCard_artists__phKco',
                likeTextButton: 'AlbumCard_likeTextButton__2AQd9',
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
        29008: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => n, r: () => l });
            var r = i(53548),
                s = i(2058),
                a = i(61691),
                n = (function (e) {
                    return ((e.PIN = 'pin'), e);
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
        32414: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => r });
            let r = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        35994: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => s });
            var r = i(67174);
            let s = (e) => (0, r.u)('/artist/:artistId', { params: { artistId: e } });
        },
        36207: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(88800),
                s = i(2058),
                a = i(17610);
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
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37770: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => d });
            var r = i(88800),
                s = i(65724),
                a = i(17392),
                n = i(19994),
                l = i(9590),
                o = i.n(l);
            let d = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: l,
                    round: d,
                    'aria-label': c,
                    centered: u,
                    withInfo: _ = !0,
                    linesCount: m = 3,
                    withSubcover: p,
                    radius: h = 'l',
                } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(o().root, i),
                    'data-test-id': a.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        p && (0, r.jsx)(n.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, r.jsx)(n.W, { isActive: t, className: (0, s.$)(o().cover, l, { [o().cover_round]: d, [o().cover_withSubcover]: p }), radius: h }),
                        _ &&
                            (0, r.jsx)('div', {
                                className: (0, s.$)(o().infoContainer, o()['content_linesCount_'.concat(m)], { [o().infoContainer_centered]: u }),
                                children: (0, r.jsx)(n.W, { isActive: t, className: (0, s.$)(o().title, { [o().title_withSubcover]: p }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => C });
            var r = i(88800),
                s = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(92716),
                o = i(17392),
                d = i(29993),
                c = i(90688),
                u = i(19934),
                _ = i(7555),
                m = i(29504),
                p = i(96527),
                h = i(78940),
                v = i(72288),
                A = i(80932),
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
                        (a.modal.isOpened && a.modal.close(), b({ to: l.AppScreen.ArtistScreen }), A(e));
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
        41918: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => r });
            var r = (function (e) {
                return ((e.PAGE = 'PAGE'), (e.CARD = 'CARD'), e);
            })({});
        },
        43443: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => p });
            var r = i(88800),
                s = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(17392),
                d = i(13607),
                c = i(52300),
                u = i(29504),
                _ = i(3099),
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
                    N = a ? 'crown' : t;
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
                                className: (0, s.$)(m().progress, m()['progress_'.concat(N)], { [m().progress_disliked]: h, [m().progress_disabled]: v }),
                                'data-test-id': o.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        44988: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var r = i(88800),
                s = i(84961),
                a = i(17392),
                n = i(52300),
                l = i(19934),
                o = i(108),
                d = i(72288);
            let c = (0, s.PA)((e) => {
                let { isLiked: t, onClick: i, className: s, iconClassName: c, albumType: u, disabled: _ } = e,
                    { user: m } = (0, d.g)(),
                    p = t ? 'liked' : 'like',
                    h = (0, o.$)(t, u);
                return (0, r.jsx)(l.Dr, {
                    className: s,
                    onClick: i,
                    icon: (0, r.jsx)(n.I, { className: c, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: _ || !m.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        52150: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            let r = (0, i(53548).createContext)({ pageAlbumId: void 0 });
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(88800),
                s = i(53548),
                a = i(2058),
                n = i(17392),
                l = i(96817),
                o = i(52300),
                d = i(39318);
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
        56651: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var r = i(88800),
                s = i(96706),
                a = i(53548),
                n = i(2058),
                l = i(29595),
                o = i(74965),
                d = i(72288),
                c = i(66943),
                u = i(25883);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, n.A)(),
                    [m, p] = (0, a.useState)(!1);
                return (0, a.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(c.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (m) return;
                    let a = { ...(0, s.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let n = await e.togglePin();
                    (p(!1),
                        n
                            ? i((0, r.jsx)(u.l, { album: a }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(c.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, _, i, m, t.isAuthorized]);
            };
        },
        60757: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => s });
            var r = i(58217);
            let s = (e) => {
                let { album: t, callback: i, shouldHistoryBack: s } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === s ? void 0 : { shouldHistoryBack: s }, preventDefaultWhenSafe: !0 });
            };
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        84218: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        86298: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => _ });
            var r = i(88800),
                s = i(65724),
                a = i(2058),
                n = i(17392),
                l = i(96817),
                o = i(52300),
                d = i(29504),
                c = i(84218),
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
        87762: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var r = i(53548),
                s = i(52150);
            function a() {
                return (0, r.useContext)(s.H);
            }
        },
        90224: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => h });
            var r = i(88800),
                s = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(17392),
                d = i(52300),
                c = i(62837),
                u = i(72288),
                _ = i(94398),
                m = i(17332),
                p = i.n(m);
            let h = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: a, containerClassName: m, variant: h, size: v = 'xxxs', ...A } = e,
                    { formatMessage: x } = (0, l.A)(),
                    {
                        settings: { isMobile: C },
                    } = (0, u.g)(),
                    [b, g] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    i && i().then(g);
                }, [i, a]);
                let {
                    iconVariant: k,
                    descriptionText: N,
                    isTooltipEnabled: T,
                    ariaLabel: f,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: r, isMobile: s } = e,
                        a = (null == r ? void 0 : r.join('\n')) || '';
                    return {
                        iconVariant: ((e) => {
                            switch (e) {
                                case c.JU.E:
                                    return 'explicit';
                                case c.JU.AGE_12:
                                case c.JU.AGE_16:
                                case c.JU.AGE_18:
                                    return 'adult';
                                case c.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(i),
                        descriptionText: a,
                        isTooltipEnabled: !!(null == r ? void 0 : r.length) && !s,
                        ariaLabel: a.length > 0 ? a : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: b, isMobile: C }, x);
                return (0, r.jsx)(_.k, {
                    description: N,
                    placement: 'bottom-start',
                    enabled: T,
                    children: (0, r.jsx)('span', {
                        className: m,
                        children: (0, r.jsx)(d.I, {
                            className: (0, s.$)(p().explicitMark, t),
                            'aria-label': f,
                            variant: k,
                            size: v,
                            ...A,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        92966: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var r = i(88800),
                s = i(2058),
                a = i(29993),
                n = i(87762),
                l = i(29595),
                o = i(74965),
                d = i(72288),
                c = i(66943),
                u = i(96706),
                _ = i(53548),
                m = i(79390),
                p = i(96295);
            let h = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, d.g)(),
                    { formatMessage: v } = (0, s.A)(),
                    { notify: A } = (0, o.l)(),
                    x = (() => {
                        let { notify: e } = (0, o.l)(),
                            { fullscreenPlayer: t } = (0, d.g)(),
                            [i, n] = (0, _.useState)(!1),
                            { formatMessage: h } = (0, s.A)();
                        return (0, a.c)(async (s) => {
                            let { album: a, withLink: o = !0, withNotification: d = !0 } = s;
                            if (i) return;
                            let _ = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                            n(!0);
                            let v = await a.toggleLike();
                            if ((n(!1), !d)) return;
                            let A = t.modal.isOpened;
                            v === m.f.OK
                                ? e((0, r.jsx)(p.T, { withLink: o, album: _ }), { containerId: A ? l.u.FULLSCREEN_INFO : l.u.INFO })
                                : e((0, r.jsx)(c.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: A ? l.u.FULLSCREEN_ERROR : l.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: C } = (0, n.T)();
                return (0, a.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: C, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? x({ album: e })
                              : void A((0, r.jsx)(c.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        94398: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => c });
            var r = i(88800),
                s = i(17392),
                a = i(17610),
                n = i(29504),
                l = i(37438),
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
        95756: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => $ });
            var r = i(88800),
                s = i(84961),
                a = i(53548),
                n = i(2058),
                l = i(92716),
                o = i(17392),
                d = i(18593),
                c = i(29993),
                u = i(19934),
                _ = i(18143),
                m = i(29595),
                p = i(74965),
                h = i(72288),
                v = i(66943),
                A = i(92966),
                x = i(56651),
                C = i(48749),
                b = i(22505),
                g = i(5407),
                k = i(64284),
                N = i(12816),
                T = i(25557),
                f = i(84384),
                y = i(9618),
                S = i(87762),
                j = i(95210),
                L = i(47964),
                E = i(46936),
                I = i(97956),
                O = i(98953),
                R = i(32721),
                w = i(18130),
                M = i(88969),
                P = i(52300);
            let z = (0, s.PA)((e) => {
                let { isFinished: t, onClick: i, className: s } = e,
                    { user: n } = (0, h.g)(),
                    l = (0, a.useMemo)(
                        () => (t ? (0, r.jsx)(M.A, { id: 'interface-actions.mark-all-non-listened' }) : (0, r.jsx)(M.A, { id: 'interface-actions.mark-all-listened' })),
                        [t],
                    );
                return (0, r.jsx)(u.Dr, {
                    className: s,
                    onClick: i,
                    icon: (0, r.jsx)(P.I, { variant: 'check', size: 'xxs' }),
                    disabled: !n.isAuthorized,
                    'data-test-id': o.S7.CONTEXT_MENU_MARK_ALL_LISTENED_BUTTON,
                    children: l,
                });
            });
            var B = i(93091),
                D = i(27817),
                U = i(74064),
                K = i(44988),
                W = i(15425),
                F = i(81066),
                H = i(18278),
                V = i(41918);
            let $ = (0, s.PA)((e) => {
                var t, i;
                let { album: s, children: M, onOpenChange: P, open: $, wrapperClassName: G, variant: Y, ...J } = e,
                    { shouldShowBuySubscriptionModal: X, showBuySubscriptionModal: q } = (0, y.q)(),
                    {
                        settings: { isMobile: Z },
                        trailer: Q,
                        user: ee,
                        experiments: et,
                        albumCPA: { isPlusCPAEnabled: ei, isPlusCPAPlayerBarEnabled: er },
                    } = (0, h.g)(),
                    es = (0, A.K)(s),
                    ea = (0, x.A)(s),
                    en = (0, T.F)(),
                    el = ''.concat(k.U.ALBUM, '-').concat(s.id),
                    eo = s.isNonMusic && Y === V.z.PAGE,
                    ed = et.checkExperiment(I.z.WebEditorsFeatures, 'on'),
                    ec = !s.isNonMusic && !et.checkExperiment(I.z.WebNextProductWithoutRecommendation, 'on'),
                    { formatMessage: eu } = (0, n.A)(),
                    e_ = (0, g.P)(),
                    { pageAlbumId: em } = (0, S.T)(),
                    ep = ei({ pageAlbumId: em, albumId: s.id, isNonMusic: s.isNonMusic }),
                    eh = er(s.id, s.isNonMusic),
                    ev = (() => {
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
                    { shareLink: eA, pathname: ex } = (0, w.b)('/album/:albumId', { params: { albumId: s.id } }),
                    eC = (0, C.A)({ entityVariant: E.D.ALBUM, urlParams: { id: s.id } }),
                    { isPlaying: eb, togglePlay: eg } = (0, L.B)({
                        seeds: null != (i = null == s ? void 0 : s.seeds) ? i : [],
                        pageIdForFrom: N._Q.RADIO,
                        blockIdForFrom: el,
                        parentContextId: s.id,
                    }),
                    { utmLink: ek } = (0, f.f)({ blockId: k.U.ALBUM, contextType: d.K.Album, contextId: null == s ? void 0 : s.id }),
                    eN = (0, c.c)(() => {
                        if (X && ee.isAuthorized) return void q();
                        !e_() && (eb || eg());
                    }),
                    eT = (0, c.c)(() => {
                        if (X && !eh) return void q();
                        e_() || (Q.setUtmLink(ek), Q.openAlbumTrailer(s.id), en(l.DomainObjectType.Album, String(s.id)));
                    });
                (0, j.N)($);
                let ef = (0, a.useMemo)(() => {
                        if (!Z) return (0, r.jsx)(D.L, { onClick: ea, isPinned: s.isPinned });
                    }, [s.isPinned, ea, Z]),
                    ey = (0, a.useMemo)(() => {
                        let e = !ep && !ee.isAuthorized;
                        return s.isNonMusic
                            ? (0, r.jsx)(K.U, { onClick: es, isLiked: s.isLiked, albumType: s.type })
                            : (0, r.jsx)(B.T, { onClick: es, isLiked: s.isLiked, disabled: e });
                    }, [s.isLiked, s.type, es, s.isNonMusic, ee.isAuthorized, ep]),
                    eS = (0, a.useMemo)(() => {
                        var e;
                        if (!s.isNonMusic && (null == (e = s.trailer) ? void 0 : e.isAvailable)) return (0, r.jsx)(W.N, { onClick: eT, disabled: !s.isAvailable });
                    }, [s.isAvailable, null == (t = s.trailer) ? void 0 : t.isAvailable, s.isNonMusic, eT]),
                    ej = (0, a.useMemo)(() => {
                        if (ec) return (0, r.jsx)(F.C, { onClick: eN, disabled: !s.isAvailable || (eh && Z), variant: R.I.ALBUM, onOpenMenuChange: P });
                    }, [s.isAvailable, eN, ec, P, eh, Z]),
                    eL = { variant: O.Y.ALBUM, id: s.id, title: s.title, path: ex, albumArtistName: s.artistName, albumArtistId: s.artistId };
                return (0, r.jsxs)(u.W1, {
                    isMobile: Z,
                    offsetOptions: 10,
                    open: $,
                    onOpenChange: P,
                    ariaLabel: eu({ id: 'interface-actions.context-menu' }),
                    wrapperClassName: G,
                    containerDataTestId: o.Kq.album.ALBUM_CONTEXT_MENU,
                    ...J,
                    children: [
                        Z && (0, r.jsx)(H.C, { getDescriptionTexts: s.getDescriptionTexts, entityId: s.id }),
                        ed && (0, r.jsx)(b.d, { entityVariant: E.D.ARTIST, adminUrl: eC }),
                        ef,
                        ey,
                        eS,
                        ej,
                        M,
                        eo && (0, r.jsx)(z, { onClick: ev, isFinished: s.listeningFinished }),
                        (0, r.jsx)(U.H, { shareLink: eA, entityMeta: eL }),
                    ],
                });
            });
        },
        96295: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var r = i(88800),
                s = i(84961),
                a = i(42729),
                n = i(5048);
            let l = (0, s.PA)((e) => {
                let { album: t, closeToast: i, withLink: s } = e,
                    l = (0, n.b)(t.type);
                return (0, r.jsx)(a.O, {
                    closeToast: i,
                    entityVariant: l,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: s,
                });
            });
        },
    },
]);
