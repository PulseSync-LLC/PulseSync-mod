(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [79],
    {
        108: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            var s = i(2058),
                r = i(61691);
            let a = (e, t) => {
                let { formatMessage: i } = (0, s.A)();
                if (e)
                    switch (t) {
                        case r._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case r._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case r._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case r._.FAIRY_TALE:
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
        5048: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            var s = i(61691),
                r = i(15077);
            let a = (e) => {
                switch (e) {
                    case s._.PODCAST:
                        return r.c.PODCAST;
                    case s._.AUDIOBOOK:
                        return r.c.AUDIOBOOK;
                    case s._.FAIRY_TALE:
                        return r.c.FAIRY_TALE;
                    default:
                        return r.c.ALBUM;
                }
            };
        },
        10079: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => Q });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(87999),
                d = i(62414),
                c = i(80643),
                u = i(33979),
                m = i(17392),
                p = i(18593),
                _ = i(61691),
                h = i(29993),
                A = i(79070),
                v = i(29832),
                x = i(52300),
                b = i(7555),
                C = i(29504),
                g = i(60757),
                k = i(29008),
                T = i(92966),
                N = i(56651),
                f = i(13946),
                L = i(43443),
                j = i(5407),
                y = i(57934),
                I = i(84384),
                S = i(4795),
                O = i(87762),
                E = i(32414),
                R = i(78940),
                M = i(55693),
                w = i(39079),
                P = i(72288),
                z = i(52726),
                B = i(86298),
                D = i(81877),
                U = i(90224),
                K = i(49738),
                F = i(91292),
                W = i(56862),
                H = i(16704),
                V = i(56446),
                $ = i(36207),
                G = i(41918);
            let Y = { mainAxis: -26, alignmentAxis: -16 },
                q = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' };
            var J = i(95756),
                X = i(28304),
                Z = i.n(X);
            let Q = (0, a.PA)((e) => {
                let {
                        className: t,
                        children: i,
                        album: a,
                        contentLinesCount: X,
                        withLikesCount: Q,
                        withChart: ee,
                        withAddition: et = !0,
                        withArtistName: ei = !0,
                        releaseDateFormatter: es = E.s,
                    } = e,
                    er = (0, d.D)(),
                    {
                        user: ea,
                        trailer: en,
                        settings: { isMobile: el },
                        albumCPA: { isPlusCPAEnabled: eo },
                        paywall: { modal: ed },
                    } = (0, P.g)(),
                    { from: ec, utmLink: eu } = (0, I.f)({ contextId: a.id, contextType: p.K.Album, utmForPageIds: a.artistIds }),
                    { formatMessage: em, formatDate: ep } = (0, l.A)(),
                    { sendLikeSearchFeedback: e_, sendNavigateSearchFeedback: eh, sendPlaySearchFeedback: eA } = (0, M.z)(),
                    [ev, ex] = (0, n.useState)(!1),
                    [eb, eC] = (0, n.useState)(!1),
                    [eg, ek] = (0, n.useState)(!1),
                    eT = (0, c.S)(),
                    eN = (0, u.g)(),
                    ef = (0, T.K)(a),
                    eL = (0, N.A)(a),
                    ej = (0, R.Z)(a.url),
                    [ey, eI] = (0, n.useState)(!1),
                    eS = (0, y.F)(),
                    [eO, eE] = (0, n.useState)(!1),
                    eR = (0, j.P)(),
                    { pageAlbumId: eM } = (0, O.T)(),
                    ew = eo({ pageAlbumId: eM, albumId: a.id, isNonMusic: a.isNonMusic }),
                    eP = (0, S.N)(),
                    ez = a.isAvailableOnlyForPlus && !a.isUnsafeLegal && !a.isLegalRejected,
                    eB = ez && !el,
                    eD = a.isAvailable || eB || a.isAudiobook,
                    eU = (0, h.c)((e) => {
                        if ((e.stopPropagation(), eR())) return void e.preventDefault();
                        (en.openAlbumTrailer(a.id), eS(o.DomainObjectType.Album, String(a.id)));
                    }),
                    eK = a.type === _._.SINGLE ? em({ id: 'entity-names.single' }) : void 0,
                    eF = a.releaseDate ? ep(a.releaseDate, es()) : void 0,
                    eW = ((e) => {
                        let t = e.filter((e) => !!e).join(' \xb7 ');
                        return 0 === t.length ? null : t;
                    })([null != eF ? eF : a.year, eK]),
                    eH = (0, k.r)(a.type),
                    eV = (0, n.useMemo)(() => {
                        var e;
                        let t = a.isLiked ? em({ id: 'entity-names.has-your-like' }) : '';
                        return ''
                            .concat(eH, ' ')
                            .concat(a.title, ' ')
                            .concat(null != (e = a.version) ? e : '', ' ')
                            .concat(t);
                    }, [eH, em, a.title, a.isLiked, a.version]),
                    { isPlaying: e$, togglePlay: eG } = (0, w.D)({
                        playContextParams: { contextData: { type: p.K.Album, meta: { id: a.id }, from: ec, utmLink: eu }, loadContextMeta: !0 },
                    }),
                    eY = (0, g.c)({ album: a, callback: ej }),
                    eq = (0, g.c)({ album: a, callback: eG }),
                    eJ = (0, h.c)((e) => {
                        (eT({ to: o.AppScreen.AlbumScreen }), null == eh || eh(), eY(e));
                    }),
                    eX = (0, h.c)(() => {
                        if (!eR()) {
                            if (eP) return void ed.open();
                            (eb || e$ || (eC(!0), null == eA || eA()), eq(), e$ || eN());
                        }
                    }),
                    eZ = (0, h.c)(() => {
                        (ev || a.isLiked || (ex(!0), null == e_ || e_()), ef());
                    }),
                    eQ = (0, h.c)((e) => {
                        (ek(e), eI(e));
                    }),
                    e0 = (0, n.useMemo)(() => {
                        var e;
                        return (0, s.jsxs)(C.HL, {
                            className: (0, r.$)(Z().title, { [Z().title_withVersion]: a.version, [Z().title_withChart]: ee }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'aria-hidden': !0,
                            'data-test-id': m.Kq.album.ALBUM_TITLE,
                            children: [
                                (0, s.jsx)(F.N, {
                                    'aria-label': ''.concat(a.title, ' ').concat(null != (e = a.version) ? e : ''),
                                    className: Z().titleLink,
                                    href: a.url,
                                    tabIndex: -1,
                                    onClick: eJ,
                                    'data-test-id': m.Kq.album.ALBUM_TITLE_LINK,
                                    children: a.title,
                                }),
                                a.version &&
                                    (0, s.jsx)(C.HL, {
                                        className: Z().version,
                                        variant: 'span',
                                        'data-test-id': m.Kq.album.ALBUM_VERSION,
                                        children: ' '.concat(a.version),
                                    }),
                            ],
                        });
                    }, [a.title, a.url, a.version, eJ, ee]),
                    e8 = (0, n.useMemo)(() => {
                        var e;
                        return (0, s.jsx)(F.N, {
                            className: Z().srTitleLink,
                            href: a.url,
                            onClick: eJ,
                            children: ''.concat(a.title, ' ').concat(null != (e = a.version) ? e : ''),
                        });
                    }, [a.title, a.url, a.version, eJ]),
                    e9 = (0, n.useMemo)(() => {
                        var e;
                        if (null == a || null == (e = a.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                $.n,
                                {
                                    children: (0, s.jsx)(
                                        V.k,
                                        { className: (0, r.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eU },
                                        a.getKey('TrailerButton'),
                                    ),
                                },
                                a.getKey('AlbumCardTrailerTooltip'),
                            );
                    }, [a, eU]),
                    e2 = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                J.x,
                                {
                                    album: a,
                                    onOpenChange: eQ,
                                    open: eg,
                                    className: (0, r.$)(Z().menuButton, Z().control),
                                    icon: (0, s.jsx)(x.I, { size: 'xxs', variant: 'more' }),
                                    size: 's',
                                    variant: G.z.CARD,
                                    'data-test-id': m.Kq.album.ALBUM_CONTEXT_MENU_BUTTON,
                                },
                                a.getKey('AlbumContextMenu'),
                            ),
                        [a, eQ, eg],
                    ),
                    e4 = (0, n.useCallback)(
                        () =>
                            (0, s.jsx)(
                                H.D,
                                {
                                    className: (0, r.$)(Z().playButton, Z().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: eX,
                                    isPlaying: e$,
                                    disabled: eB,
                                },
                                a.getKey('PlayButton'),
                            ),
                        [eB, a, e$, eX],
                    ),
                    e1 = (0, n.useMemo)(
                        () =>
                            eB
                                ? (0, s.jsx)(z.S, {
                                      className: Z().buyPlusPopover,
                                      buttonText: em({ id: 'interface-actions.more-details' }),
                                      isNested: !0,
                                      placement: 'top-start',
                                      isOpened: eO,
                                      onOpenChange: eE,
                                      textVariant: 'album',
                                      albumTextVariant: a.type,
                                      arrowProps: q,
                                      offsetOptions: Y,
                                      renderChildren: e4,
                                  })
                                : e4(),
                        [eB, eO, eE, em, e4, a.type],
                    ),
                    e5 = (0, A.L)(() => {
                        if (eB) return;
                        let e = !ew && !ea.isAuthorized;
                        return (0, s.jsx)(
                            K.c,
                            {
                                className: (0, r.$)(Z().likeButton, Z().control),
                                isLiked: a.isLiked,
                                onClick: eZ,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: e,
                            },
                            a.getKey('LikeButton'),
                        );
                    }),
                    e7 = (0, n.useMemo)(() => {
                        if (!eB)
                            return (0, s.jsx)(
                                W.O,
                                { onClick: eL, isPinned: a.isPinned, className: (0, r.$)(Z().pinButton, Z().control), withRipple: !1, isDisabled: eB },
                                a.getKey('PinButton'),
                            );
                    }, [a, eB, eL]),
                    e6 = (0, n.useMemo)(() => {
                        if (a.isAvailable || eB)
                            return (0, s.jsx)(v.hg, {
                                isVisible: eg || ey || eO,
                                className: Z().controls,
                                playControl: e1,
                                likeControl: e5,
                                menuControl: e2,
                                pinControl: e7,
                                trailerControl: e9,
                            });
                    }, [a, eg, ey, e2, e9, eO, e1, e5, e7, eB]),
                    e3 = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(b.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': m.Kq.album.ALBUM_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eJ,
                                    children: [
                                        (0, s.jsx)(D.B, {
                                            className: Z().image,
                                            src: a.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eV,
                                            withAvatarReplace: !0,
                                            isAvailable: eD,
                                            'aria-hidden': !0,
                                        }),
                                        ez && (0, s.jsx)(x.I, { variant: 'plusBadge', className: Z().plusBadge }),
                                        e6,
                                    ],
                                }),
                            }),
                        [eJ, a.coverUri, eD, eV, e6, ez],
                    );
                return (0, s.jsxs)(v.MN, {
                    ref: er,
                    className: (0, r.$)(Z().root, { [Z().root_withChart]: ee }, t),
                    'aria-label': eV,
                    explicitMarkComponent:
                        a.explicitDisclaimer &&
                        (0, s.jsx)(
                            U.N,
                            { className: Z().explicitMark, getDescriptionTexts: a.getDescriptionTexts, variant: a.explicitDisclaimer },
                            a.getKey('AlbumCardExplicitMarkIcon'),
                        ),
                    title: e0,
                    srTitle: e8,
                    contentLinesCount: X,
                    view: e3,
                    description:
                        ei &&
                        (0, s.jsx)(
                            f.i,
                            { className: Z().artists, artists: a.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                            a.getKey('description'),
                        ),
                    chart:
                        ee &&
                        a.chart &&
                        (0, s.jsx)(L.t, { withIcon: !0, className: Z().chart, position: a.chart.position, progress: a.chart.progress }, a.getKey('chart')),
                    'data-test-id': m.Kq.album.ALBUM_ITEM,
                    children: [
                        et &&
                            eW &&
                            (0, s.jsx)(C.HL, { className: Z().addition, variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: eW }),
                        Q &&
                            !!a.actualLikesCount &&
                            (0, s.jsx)(B.x, {
                                className: Z().likeTextButton,
                                ariaLabel: em({ id: 'entity-names.likes-counter' }, { counter: a.actualLikesCount }),
                                likesCount: a.actualLikesCount,
                                isLiked: a.isLiked,
                                handleLikeClick: ef,
                            }),
                        i,
                    ],
                });
            });
        },
        13607: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { _: () => s }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(s || (s = {})));
        },
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => F });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(79070),
                o = i(17610),
                d = i(24548),
                c = i(29993),
                u = i(72288),
                m = i(35994);
            let p = (e, t) => {
                let { withLink: i, separator: s } = t,
                    r = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: r };
            };
            var _ = i(21010),
                h = i.n(_),
                A = i(17392),
                v = i(29504),
                x = i(91292),
                b = i(2058),
                C = i(87999),
                g = i(80643),
                k = i(78940),
                T = i(55693),
                N = i(58217);
            let f = (0, a.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: r, captionSize: a = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: d } = e,
                        {
                            name: m,
                            link: p,
                            title: _,
                            ariaLabel: h,
                            tooltipText: f,
                            isTooltipEnabled: L,
                            handleNavigate: j,
                        } = ((e) => {
                            var t, i;
                            let { item: s, allArtistsTitle: r, withCustomTooltip: a } = e,
                                { formatMessage: n } = (0, b.A)(),
                                l = ((e, t) => {
                                    let { item: i, allArtistsTitle: s, withCustomTooltip: r } = e,
                                        a = s || i.name;
                                    return {
                                        ...i,
                                        title: r ? void 0 : a,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: a,
                                        isTooltipEnabled: !s && r,
                                    };
                                })({ item: s, allArtistsTitle: r, withCustomTooltip: a }, n),
                                {
                                    track: o,
                                    settings: { isMobile: d },
                                } = (0, u.g)(),
                                m = (0, k.Z)(null != (i = null == (t = l.link) ? void 0 : t.href) ? i : l.artist.url),
                                { sendNavigateSearchFeedback: p } = (0, T.z)(),
                                _ = (0, g.S)(),
                                h = (0, c.c)((e) => {
                                    (d && o.isOpened && o.close(), m(e));
                                }),
                                A = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: r, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: n } = s;
                                    return (0, N.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (s.reset(), n.close()), r.modal.isOpened && r.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: l.artist, callback: h }),
                                v = (0, c.c)((e) => {
                                    (_({ to: C.AppScreen.ArtistScreen }), null == p || p(), A(e));
                                });
                            return { ...l, handleNavigate: v };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: l });
                    return p
                        ? (0, s.jsx)(x.N, {
                              ...p,
                              'aria-label': h,
                              className: i,
                              onClick: j,
                              title: _,
                              'data-test-id': A.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: L,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: f,
                                  hoverSettings: d,
                                  children: (0, s.jsx)(v.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: r, children: m }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: L,
                              offsetOptions: 4,
                              placement: 'top',
                              text: f,
                              hoverSettings: d,
                              children: (0, s.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: r,
                                  title: _,
                                  'data-test-id': A.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                L = (e) => {
                    let { group: t, linkClassName: i, captionClassName: r, captionSize: a, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: d } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(f, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: r,
                                captionSize: a,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: d,
                            }),
                            t.decomposed.map((e) =>
                                (0, s.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, s.jsx)(f, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: r,
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
            var j = i(88969),
                y = i(65453);
            let I = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: a } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(y.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(h().spoiler, i),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': A.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(j.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var S = i(61013),
                O = i(87819),
                E = i(40634),
                R = i(48468),
                M = i.n(R);
            let w = (0, a.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, O.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: r, children: t }),
                            (0, s.jsx)(o.ZI, { className: M().tooltipContent, children: i.map((e) => (0, s.jsx)(E.V, { artist: e, className: M().artistItem }, e.id)) }),
                        ],
                    });
                }),
                P = (0, n.forwardRef)((e, t) => (0, s.jsx)(w, { forwardRef: t, ...e }));
            var z = i(19934),
                B = i(70396),
                D = i.n(B);
            let U = (0, a.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: a } = (0, b.A)();
                    return (0, s.jsx)(z.W1, {
                        isMobile: !0,
                        className: (0, r.$)(D().root, D().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(E.V, { artist: e }, e.id)),
                    });
                }),
                K = (0, a.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [a, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, u.g)(),
                        m = (0, c.c)(() => {
                            let e = r.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, l.L)(() =>
                            (0, S.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', p),
                                m(),
                                () => {
                                    window.removeEventListener('resize', p);
                                }
                            ),
                            [p, m],
                        ),
                        (0, n.useEffect)(() => {
                            m();
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (a || d) && (!d || 1 !== t.length) ? (d ? (0, s.jsx)(U, { artists: t, label: i }) : (0, s.jsx)(P, { artists: t, label: i })) : i;
                }),
                F = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: a,
                            linkClassName: m,
                            captionClassName: _,
                            captionSize: A,
                            variant: v = 'breakAll',
                            spoilerComponent: x,
                            ...b
                        } = e,
                        C = ((e) => {
                            var t, i, s;
                            let { separator: r, visibleArtistsCount: a, withLink: l, withComposer: o, artistIdWithoutLink: d, withContextMenu: m } = e,
                                _ = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                A = null == (s = e.withCustomTooltip) || s,
                                v = (0, n.useRef)(null),
                                [x, b] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: C },
                                } = (0, u.g)(),
                                g = ((!C || 1 === _.length) && m) || !m,
                                k = ((e, t) => {
                                    var i, s, r;
                                    let a = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        n = null == (s = null == t ? void 0 : t.withLink) || s,
                                        l = null != (r = null == t ? void 0 : t.separator) ? r : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(l),
                                        { visibleArtists: d, hiddenArtistsCount: c } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: s } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => s || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: d.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: s, separator: r, isFirst: a } = t;
                                                return {
                                                    primary: p(e, { withLink: s, separator: a ? void 0 : r }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = r ? e.separator : '';
                                                        return p(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: c,
                                    };
                                })(_, { separator: r, visibleArtistsCount: x ? void 0 : a, withComposer: o, withLink: !!g && l, artistIdWithoutLink: d }),
                                T = h ? k.allArtistsTitle : '',
                                N = (0, c.c)((e) => {
                                    (b(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: k.groups,
                                hiddenArtistsCount: k.hiddenArtistsCount,
                                allArtistsTitle: T,
                                withCustomTooltip: A,
                                withContextMenu: m,
                                labelRef: v,
                                handleOnSpoilerClick: N,
                                isTooltipEnabled: !!T && A && !m && !C,
                                title: !T || A || m ? void 0 : T,
                            };
                        })(b),
                        g = (0, l.L)(() =>
                            C.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(x)
                                  ? x
                                  : (0, s.jsx)(I, { spoilerClassName: a, spoilerArtistsCount: C.hiddenArtistsCount, handleOnSpoilerClick: C.handleOnSpoilerClick }),
                        ),
                        k = (0, s.jsx)(o.m_, {
                            referenceRef: C.labelRef,
                            enabled: C.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: C.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, r.$)(h().root, h()['root_variant_'.concat(v)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: C.title,
                                children: [
                                    C.groups.map((e) =>
                                        (0, s.jsx)(
                                            L,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: _,
                                                captionSize: A,
                                                allArtistsTitle: C.allArtistsTitle,
                                                withCustomTooltip: C.withCustomTooltip,
                                                hoverSettings: d.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    g,
                                ],
                            }),
                        });
                    return C.withContextMenu ? (0, s.jsx)(K, { labelRef: C.labelRef, artists: C.artists, label: k }) : k;
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
            var s;
            (i.d(t, { T: () => s }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(s || (s = {})));
        },
        18278: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => d });
            var s = i(88800),
                r = i(53548),
                a = i(17392),
                n = i(29504),
                l = i(15526),
                o = i.n(l);
            let d = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [l, d] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
                        t && t().then(d);
                    }, [t]),
                    l)
                )
                    return l.map((e, t) =>
                        (0, s.jsx)(
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
            i.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        25883: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var s = i(88800),
                r = i(84961),
                a = i(33719),
                n = i(5048);
            let l = (0, r.PA)((e) => {
                let { album: t, closeToast: i } = e,
                    r = (0, n.b)(t.type);
                return (0, s.jsx)(a.k, {
                    closeToast: i,
                    entityVariant: r,
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
            var s = i(53548),
                r = i(2058),
                a = i(61691),
                n = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let l = (e, t) => {
                let { formatMessage: i } = (0, r.A)();
                return (0, s.useMemo)(() => {
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
            i.d(t, { s: () => s });
            let s = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        35994: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => r });
            var s = i(67174);
            let r = (e) => (0, s.u)('/artist/:artistId', { params: { artistId: e } });
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => b });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(87999),
                o = i(80643),
                d = i(17392),
                c = i(29993),
                u = i(90688),
                m = i(19934),
                p = i(7555),
                _ = i(29504),
                h = i(78940),
                A = i(72288),
                v = i(80932),
                x = i.n(v);
            let b = (0, a.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: a } = (0, A.g)(),
                    v = (0, h.Z)(t.url),
                    C = (0, o.S)(),
                    g = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(b, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    k = (0, c.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), C({ to: l.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(m.Dr, {
                            className: (0, r.$)(x().root, i),
                            onClick: k,
                            'data-test-id': d.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(p.t, {
                                    radius: 'round',
                                    className: x().cover,
                                    children: (0, s.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: x().image }),
                                }),
                                (0, s.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        g,
                    ],
                });
            });
        },
        41918: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => s });
            var s = (function (e) {
                return ((e.PAGE = 'PAGE'), (e.CARD = 'CARD'), e);
            })({});
        },
        43443: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => _ });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(17392),
                d = i(13607),
                c = i(52300),
                u = i(29504),
                m = i(3099),
                p = i.n(m);
            let _ = (0, a.PA)((e) => {
                let {
                        progress: t,
                        withIcon: i,
                        withCrownIcon: a,
                        position: m,
                        weight: _ = 'normal',
                        isDisliked: h,
                        isDisabled: A,
                        className: v,
                        positionClassName: x,
                    } = e,
                    { formatMessage: b } = (0, l.A)(),
                    C = t || i,
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
                                return b({ id: 'entity-names.chart-up' });
                            case d._.DOWN:
                                return b({ id: 'entity-names.chart-down' });
                            case d._.NEW:
                                return b({ id: 'entity-names.chart-new' });
                            default:
                                return b({ id: 'entity-names.chart-same' });
                        }
                    }, [b, t]),
                    T = a ? 'crown' : t;
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(p().root, v),
                    'data-test-id': o.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, s.jsx)(u.HL, {
                            variant: 'div',
                            weight: _,
                            type: 'entity',
                            size: 'm',
                            className: (0, r.$)(p().position, x, { [p().position_disliked]: h, [p().position_disabled]: A }),
                            'data-test-id': o.OA.chart.CHART_PROGRESS_POSITION,
                            children: m,
                        }),
                        C &&
                            (0, s.jsx)(c.I, {
                                variant: g,
                                size: 'xxs',
                                'aria-label': k,
                                className: (0, r.$)(p().progress, p()['progress_'.concat(T)], { [p().progress_disliked]: h, [p().progress_disabled]: A }),
                                'data-test-id': o.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        44988: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var s = i(88800),
                r = i(84961),
                a = i(17392),
                n = i(52300),
                l = i(19934),
                o = i(108),
                d = i(72288);
            let c = (0, r.PA)((e) => {
                let { isLiked: t, onClick: i, className: r, iconClassName: c, albumType: u, disabled: m } = e,
                    { user: p } = (0, d.g)(),
                    _ = t ? 'liked' : 'like',
                    h = (0, o.$)(t, u);
                return (0, s.jsx)(l.Dr, {
                    className: r,
                    onClick: i,
                    icon: (0, s.jsx)(n.I, { className: c, variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !p.isAuthorized,
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
            i.d(t, { H: () => s });
            let s = (0, i(53548).createContext)({ pageAlbumId: void 0 });
        },
        56651: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var s = i(88800),
                r = i(96706),
                a = i(53548),
                n = i(2058),
                l = i(29595),
                o = i(74965),
                d = i(72288),
                c = i(66943),
                u = i(25883);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, n.A)(),
                    [p, _] = (0, a.useState)(!1);
                return (0, a.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(c.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (p) return;
                    let a = { ...(0, r.HO)(e), url: e.url, isPinned: !e.isPinned };
                    _(!0);
                    let n = await e.togglePin();
                    (_(!1),
                        n
                            ? i((0, s.jsx)(u.l, { album: a }), { containerId: l.u.INFO })
                            : i((0, s.jsx)(c.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, m, i, p, t.isAuthorized]);
            };
        },
        60757: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => r });
            var s = i(58217);
            let r = (e) => {
                let { album: t, callback: i, shouldHistoryBack: r } = e;
                return (0, s.l)({ entity: t, callback: i, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
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
            i.d(t, { x: () => m });
            var s = i(88800),
                r = i(65724),
                a = i(2058),
                n = i(17392),
                l = i(96817),
                o = i(52300),
                d = i(29504),
                c = i(84218),
                u = i.n(c);
            let m = (e) => {
                let { className: t, isLiked: i, likesCount: c, handleLikeClick: m, ariaLabel: p } = e,
                    { formatNumber: _ } = (0, a.A)();
                return (0, s.jsx)(l.$, {
                    className: (0, r.$)(u().root, t),
                    onClick: m,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': p,
                    'data-test-id': n.S7.CARD_LIKES,
                    children: (0, s.jsx)(d.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: _(c) }),
                });
            };
        },
        87762: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var s = i(53548),
                r = i(52150);
            function a() {
                return (0, s.useContext)(r.H);
            }
        },
        90224: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => h });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(17392),
                d = i(52300),
                c = i(62837),
                u = i(72288),
                m = i(94398),
                p = i(17332),
                _ = i.n(p);
            let h = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: a, containerClassName: p, variant: h, size: A = 'xxxs', ...v } = e,
                    { formatMessage: x } = (0, l.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, u.g)(),
                    [C, g] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    i && i().then(g);
                }, [i, a]);
                let {
                    iconVariant: k,
                    descriptionText: T,
                    isTooltipEnabled: N,
                    ariaLabel: f,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: s, isMobile: r } = e,
                        a = (null == s ? void 0 : s.join('\n')) || '';
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
                        isTooltipEnabled: !!(null == s ? void 0 : s.length) && !r,
                        ariaLabel: a.length > 0 ? a : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: C, isMobile: b }, x);
                return (0, s.jsx)(m.k, {
                    description: T,
                    placement: 'bottom-start',
                    enabled: N,
                    children: (0, s.jsx)('span', {
                        className: p,
                        children: (0, s.jsx)(d.I, {
                            className: (0, r.$)(_().explicitMark, t),
                            'aria-label': f,
                            variant: k,
                            size: A,
                            ...v,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        92966: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var s = i(88800),
                r = i(2058),
                a = i(29993),
                n = i(87762),
                l = i(29595),
                o = i(74965),
                d = i(72288),
                c = i(66943),
                u = i(96706),
                m = i(53548),
                p = i(79390),
                _ = i(96295);
            let h = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, d.g)(),
                    { formatMessage: A } = (0, r.A)(),
                    { notify: v } = (0, o.l)(),
                    x = (() => {
                        let { notify: e } = (0, o.l)(),
                            { fullscreenPlayer: t } = (0, d.g)(),
                            [i, n] = (0, m.useState)(!1),
                            { formatMessage: h } = (0, r.A)();
                        return (0, a.c)(async (r) => {
                            let { album: a, withLink: o = !0, withNotification: d = !0 } = r;
                            if (i) return;
                            let m = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                            n(!0);
                            let A = await a.toggleLike();
                            if ((n(!1), !d)) return;
                            let v = t.modal.isOpened;
                            A === p.f.OK
                                ? e((0, s.jsx)(_.T, { withLink: o, album: m }), { containerId: v ? l.u.FULLSCREEN_INFO : l.u.INFO })
                                : e((0, s.jsx)(c.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: v ? l.u.FULLSCREEN_ERROR : l.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: b } = (0, n.T)();
                return (0, a.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: b, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? x({ album: e })
                              : void v((0, s.jsx)(c.h, { error: A({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        94398: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => c });
            var s = i(88800),
                r = i(17392),
                a = i(17610),
                n = i(29504),
                l = i(37438),
                o = i.n(l);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: i, title: l, placement: c = 'top', children: u } = e;
                    return (0, s.jsxs)(a.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, s.jsx)(a.ZI, {
                                className: o().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
                                children: (0, s.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, s.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, s.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
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
            var s = i(88800),
                r = i(84961),
                a = i(53548),
                n = i(2058),
                l = i(87999),
                o = i(17392),
                d = i(18593),
                c = i(29993),
                u = i(19934),
                m = i(18143),
                p = i(29595),
                _ = i(74965),
                h = i(72288),
                A = i(66943),
                v = i(92966),
                x = i(56651),
                b = i(48749),
                C = i(22505),
                g = i(5407),
                k = i(64284),
                T = i(98427),
                N = i(57934),
                f = i(84384),
                L = i(9618),
                j = i(87762),
                y = i(95210),
                I = i(47964),
                S = i(46936),
                O = i(97956),
                E = i(98953),
                R = i(32721),
                M = i(18130),
                w = i(88969),
                P = i(52300);
            let z = (0, r.PA)((e) => {
                let { isFinished: t, onClick: i, className: r } = e,
                    { user: n } = (0, h.g)(),
                    l = (0, a.useMemo)(
                        () => (t ? (0, s.jsx)(w.A, { id: 'interface-actions.mark-all-non-listened' }) : (0, s.jsx)(w.A, { id: 'interface-actions.mark-all-listened' })),
                        [t],
                    );
                return (0, s.jsx)(u.Dr, {
                    className: r,
                    onClick: i,
                    icon: (0, s.jsx)(P.I, { variant: 'check', size: 'xxs' }),
                    disabled: !n.isAuthorized,
                    'data-test-id': o.S7.CONTEXT_MENU_MARK_ALL_LISTENED_BUTTON,
                    children: l,
                });
            });
            var B = i(93091),
                D = i(27817),
                U = i(74064),
                K = i(44988),
                F = i(15425),
                W = i(81066),
                H = i(18278),
                V = i(41918);
            let $ = (0, r.PA)((e) => {
                var t, i;
                let { album: r, children: w, onOpenChange: P, open: $, wrapperClassName: G, variant: Y, ...q } = e,
                    { shouldShowBuySubscriptionModal: J, showBuySubscriptionModal: X } = (0, L.q)(),
                    {
                        settings: { isMobile: Z },
                        trailer: Q,
                        user: ee,
                        experiments: et,
                        albumCPA: { isPlusCPAEnabled: ei, isPlusCPAPlayerBarEnabled: es },
                    } = (0, h.g)(),
                    er = (0, v.K)(r),
                    ea = (0, x.A)(r),
                    en = (0, N.F)(),
                    el = ''.concat(k.U.ALBUM, '-').concat(r.id),
                    eo = r.isNonMusic && Y === V.z.PAGE,
                    ed = et.checkExperiment(O.z.WebEditorsFeatures, 'on'),
                    ec = !r.isNonMusic && !et.checkExperiment(O.z.WebNextProductWithoutRecommendation, 'on'),
                    { formatMessage: eu } = (0, n.A)(),
                    em = (0, g.P)(),
                    { pageAlbumId: ep } = (0, j.T)(),
                    e_ = ei({ pageAlbumId: ep, albumId: r.id, isNonMusic: r.isNonMusic }),
                    eh = es(r.id, r.isNonMusic),
                    eA = (() => {
                        let { user: e, album: t, fullscreenPlayer: i } = (0, h.g)(),
                            { notify: r } = (0, _.l)(),
                            { formatMessage: l } = (0, n.A)();
                        return (0, a.useCallback)(async () => {
                            var a, n;
                            if (!t) return;
                            let o = i.modal.isOpened ? p.u.FULLSCREEN_ERROR : p.u.ERROR;
                            return e.isAuthorized
                                ? (await t.setListeningFinishedStatus()) !== m.T.OK
                                    ? void r((0, s.jsx)(A.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: o })
                                    : void (null == (n = t.meta) || n.updateFinished(!(null == (a = t.meta) ? void 0 : a.listeningFinished)))
                                : void r((0, s.jsx)(A.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o });
                        }, [l, r, t, e.isAuthorized, i.modal.isOpened]);
                    })(),
                    { shareLink: ev, pathname: ex } = (0, M.b)('/album/:albumId', { params: { albumId: r.id } }),
                    eb = (0, b.A)({ entityVariant: S.D.ALBUM, urlParams: { id: r.id } }),
                    { isPlaying: eC, togglePlay: eg } = (0, I.B)({
                        seeds: null != (i = null == r ? void 0 : r.seeds) ? i : [],
                        pageIdForFrom: T.b.RADIO,
                        blockIdForFrom: el,
                        parentContextId: r.id,
                    }),
                    { utmLink: ek } = (0, f.f)({ blockId: k.U.ALBUM, contextType: d.K.Album, contextId: null == r ? void 0 : r.id }),
                    eT = (0, c.c)(() => {
                        if (J && ee.isAuthorized) return void X();
                        !em() && (eC || eg());
                    }),
                    eN = (0, c.c)(() => {
                        if (J && !eh) return void X();
                        em() || (Q.setUtmLink(ek), Q.openAlbumTrailer(r.id), en(l.DomainObjectType.Album, String(r.id)));
                    });
                (0, y.N)($);
                let ef = (0, a.useMemo)(() => {
                        if (!Z) return (0, s.jsx)(D.L, { onClick: ea, isPinned: r.isPinned });
                    }, [r.isPinned, ea, Z]),
                    eL = (0, a.useMemo)(() => {
                        let e = !e_ && !ee.isAuthorized;
                        return r.isNonMusic
                            ? (0, s.jsx)(K.U, { onClick: er, isLiked: r.isLiked, albumType: r.type })
                            : (0, s.jsx)(B.T, { onClick: er, isLiked: r.isLiked, disabled: e });
                    }, [r.isLiked, r.type, er, r.isNonMusic, ee.isAuthorized, e_]),
                    ej = (0, a.useMemo)(() => {
                        var e;
                        if (!r.isNonMusic && (null == (e = r.trailer) ? void 0 : e.isAvailable)) return (0, s.jsx)(F.N, { onClick: eN, disabled: !r.isAvailable });
                    }, [r.isAvailable, null == (t = r.trailer) ? void 0 : t.isAvailable, r.isNonMusic, eN]),
                    ey = (0, a.useMemo)(() => {
                        if (ec) return (0, s.jsx)(W.C, { onClick: eT, disabled: !r.isAvailable || (eh && Z), variant: R.I.ALBUM, onOpenMenuChange: P });
                    }, [r.isAvailable, eT, ec, P, eh, Z]),
                    eI = { variant: E.Y.ALBUM, id: r.id, title: r.title, path: ex, albumArtistName: r.artistName, albumArtistId: r.artistId };
                return (0, s.jsxs)(u.W1, {
                    isMobile: Z,
                    offsetOptions: 10,
                    open: $,
                    onOpenChange: P,
                    ariaLabel: eu({ id: 'interface-actions.context-menu' }),
                    wrapperClassName: G,
                    containerDataTestId: o.Kq.album.ALBUM_CONTEXT_MENU,
                    ...q,
                    children: [
                        Z && (0, s.jsx)(H.C, { getDescriptionTexts: r.getDescriptionTexts, entityId: r.id }),
                        ed && (0, s.jsx)(C.d, { entityVariant: S.D.ARTIST, adminUrl: eb }),
                        ef,
                        eL,
                        ej,
                        ey,
                        w,
                        eo && (0, s.jsx)(z, { onClick: eA, isFinished: r.listeningFinished }),
                        (0, s.jsx)(U.H, { shareLink: ev, entityMeta: eI }),
                    ],
                });
            });
        },
        96295: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var s = i(88800),
                r = i(84961),
                a = i(42729),
                n = i(5048);
            let l = (0, r.PA)((e) => {
                let { album: t, closeToast: i, withLink: r } = e,
                    l = (0, n.b)(t.type);
                return (0, s.jsx)(a.O, {
                    closeToast: i,
                    entityVariant: l,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: r,
                });
            });
        },
    },
]);
