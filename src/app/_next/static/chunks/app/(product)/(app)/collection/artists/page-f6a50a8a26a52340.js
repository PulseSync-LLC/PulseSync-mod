(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8336],
    {
        356: (t) => {
            t.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        3377: (t, e, i) => {
            'use strict';
            i.d(e, { WithAuth: () => p });
            var s = i(32290),
                r = i(96103),
                o = i(21916),
                l = i(63618),
                a = i(39407),
                n = i(71926),
                c = i(94218),
                d = i(55556),
                u = i.n(d);
            let _ = (0, r.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(n.DZ, {
                            className: (0, l.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(a.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(n.HL, {
                            className: (0, l.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(a.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = i(20472),
                h = i(57594);
            let p = (0, r.PA)((t) => {
                let { children: e, withRedirectToMainPage: i } = t,
                    { user: r } = (0, h.g)();
                return r.isAuthorized ? e : (i && (0, o.redirect)(m.Z.main.href), (0, s.jsx)(_, {}));
            });
        },
        5541: (t, e, i) => {
            Promise.resolve().then(i.bind(i, 3377)), Promise.resolve().then(i.bind(i, 14619));
        },
        5942: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => x });
            var s = i(32290),
                r = i(92708),
                o = i(55178),
                l = i(60900),
                a = i(63380),
                n = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                _ = i(20472),
                m = i(97647),
                h = i(97755);
            let p = (t) => {
                    let { artist: e, closeToast: i } = t;
                    return (0, s.jsx)(h.O, {
                        closeToast: i,
                        entityVariant: m.c.ARTIST,
                        entityUrl: e.url,
                        collectionUrl: _.Z.collectionArtists.href,
                        coverUri: e.coverUri,
                        entityTitle: e.name,
                        isLiked: e.isLiked,
                    });
                },
                x = (t) => {
                    let { user: e } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [_, m] = (0, o.useState)(!1),
                        { formatMessage: h } = (0, l.A)();
                    return (0, o.useCallback)(async () => {
                        if (!t) return;
                        if (!e.isAuthorized)
                            return void i((0, s.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (_) return;
                        let o = { ...(0, r.HO)(t), isLiked: !t.isLiked };
                        m(!0);
                        let l = await t.toggleLike();
                        m(!1),
                            l === a.f.OK
                                ? i((0, s.jsx)(p, { artist: o }), { containerId: n.u.INFO })
                                : i((0, s.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR });
                    }, [t, e.isAuthorized, _, h, i]);
                };
        },
        7474: (t, e, i) => {
            'use strict';
            i.d(e, { a: () => F });
            var s = i(32290),
                r = i(63618),
                o = i(96103),
                l = i(55178),
                a = i(60900),
                n = i(16172),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                h = i(82586),
                p = i(86269),
                x = i(71926),
                v = i(91853),
                g = i(5942),
                C = i(70390),
                A = i(71735),
                f = i(47745),
                k = i(2969),
                y = i(54391),
                T = i(23352),
                N = i(72396),
                j = i(5537),
                b = i(84062),
                R = i(28999),
                S = i(90169),
                E = i(57594),
                I = i(11323),
                P = i(92744),
                O = i(61258),
                w = i(10180),
                L = i(90326),
                D = i(29268),
                z = i(34925),
                M = i(80528),
                B = i(42048),
                H = i.n(B);
            let F = (0, o.PA)((t) => {
                let { artist: e, className: i, children: o, contentLinesCount: B, topTitleElement: F, bottomTitleElement: U } = t,
                    { ref: Y, intersectionPropertyId: X } = (0, T.n)(),
                    {
                        trailer: K,
                        user: $,
                        paywall: { modal: V },
                    } = (0, E.g)(),
                    { from: G, utmLink: W } = (0, N.f)({ contextId: e.id, contextType: d.K.Artist }),
                    { formatMessage: q } = (0, a.A)(),
                    [Z, J] = (0, l.useState)(!1),
                    [Q, tt] = (0, l.useState)(!1),
                    [te, ti] = (0, l.useState)(!1),
                    { sendLikeSearchFeedback: ts, sendNavigateSearchFeedback: tr, sendPlaySearchFeedback: to } = (0, R.z)(),
                    tl = (0, f.N)(),
                    ta = (0, k.b)(),
                    tn = (0, g.K)(e),
                    tc = (0, C.A)(e),
                    { id: td, name: tu, coverUri: t_, isLiked: tm } = e,
                    th = (0, b.Z)(e.url),
                    [tp, tx] = (0, l.useState)(!1),
                    tv = (0, y.F)(),
                    tg = (0, A.P)(),
                    tC = (0, u.c)((t) => {
                        if ((t.stopPropagation(), tg())) return void t.preventDefault();
                        K.openArtistTrailer(e.id), tv(n.ky.Artist, e.id);
                    }),
                    tA = (0, l.useMemo)(() => {
                        let t = q({ id: 'entity-names.artist-name' }, { artistName: tu }),
                            e = tm ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(t, ' ').concat(e);
                    }, [tu, tm, q]),
                    { isPlaying: tf, togglePlay: tk } = (0, S.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(td) }, from: G, utmLink: W }, loadContextMeta: !0 },
                    }),
                    ty = (0, v.S)({ artist: e, callback: th }),
                    tT = (0, v.S)({ artist: e, callback: tk }),
                    tN = (0, u.c)((t) => {
                        null == tr || tr(), tl({ to: n.QT.ArtistScreen }), ty(t);
                    }),
                    tj = (0, j.N)(),
                    tb = (0, u.c)(() => {
                        if (!tg()) {
                            if (tj) return void V.open();
                            Z || tf || (J(!0), null == to || to()), tT(), ta(!tf);
                        }
                    }),
                    tR = (0, u.c)(() => {
                        Q || tm || (tt(!0), null == ts || ts()), tn();
                    }),
                    tS = (0, u.c)((t) => {
                        t.preventDefault(), t.stopPropagation();
                    }),
                    tE = (0, u.c)((t) => {
                        ti(t), tx(t);
                    }),
                    tI = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(
                                M.g,
                                {
                                    artist: e,
                                    onOpenChange: tE,
                                    open: te,
                                    onClick: tS,
                                    className: (0, r.$)(H().menuButton, H().control),
                                    size: 's',
                                    icon: (0, s.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                e.getKey('ArtistContextMenu'),
                            ),
                        [e, tS, tE, te],
                    ),
                    tP = (0, l.useMemo)(() => {
                        var t;
                        if (null == e || null == (t = e.trailer) ? void 0 : t.isAvailable)
                            return (0, s.jsx)(
                                z.n,
                                {
                                    children: (0, s.jsx)(D.k, {
                                        className: (0, r.$)(H().trailerButton, H().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: tC,
                                    }),
                                },
                                e.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [e, tC]),
                    tO = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(
                                w.O,
                                { onClick: tc, isPinned: e.isPinned, className: (0, r.$)(H().pinButton, H().control), withRipple: !1 },
                                e.getKey('PinButton'),
                            ),
                        [e, tc],
                    ),
                    tw = (0, _.L)(() => {
                        if (e.isAvailable)
                            return (0, s.jsx)(
                                m.hg,
                                {
                                    isVisible: te || tp,
                                    className: H().controls,
                                    radius: 'round',
                                    playControl: (0, s.jsx)(
                                        L.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, r.$)(H().playButton, H().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: tb,
                                            isPlaying: tf,
                                            disabled: !e.isAvailableForPlaying,
                                        },
                                        e.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, s.jsx)(
                                        P.c,
                                        {
                                            className: (0, r.$)(H().likeButton, H().control),
                                            isLiked: tm,
                                            onClick: tR,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !$.isAuthorized,
                                        },
                                        e.getKey('LikeButton'),
                                    ),
                                    menuControl: tI,
                                    pinControl: tO,
                                    trailerControl: tP,
                                },
                                e.getKey('ArtistCardControls'),
                            );
                    }),
                    tL = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(p.t, {
                                className: H().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: H().coverBlock,
                                    onClick: tN,
                                    children: [
                                        (0, s.jsx)(I.B, {
                                            className: H().image,
                                            src: t_,
                                            size: 200,
                                            fit: 'cover',
                                            alt: tA,
                                            withAvatarReplace: !0,
                                            isAvailable: e.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        tw,
                                    ],
                                }),
                            }),
                        [tN, t_, tA, e.isAvailable, tw],
                    );
                return (0, s.jsx)(m.MN, {
                    ref: Y,
                    className: (0, r.$)(H().root, i),
                    textPosition: 'center',
                    'aria-label': tA,
                    title: (0, s.jsxs)(s.Fragment, {
                        children: [
                            F,
                            (0, s.jsx)(x.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                children: (0, s.jsx)(O.N, {
                                    className: H().titleLink,
                                    href: e.url,
                                    'aria-label': tA,
                                    onClick: tN,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: tu,
                                }),
                            }),
                            U,
                        ],
                    }),
                    srTitle: (0, s.jsx)(O.N, { href: e.url, onClick: tN, children: tA }),
                    'data-intersection-property-id': X,
                    contentLinesCount: B,
                    view: tL,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: o,
                });
            });
        },
        8626: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
        11262: (t, e, i) => {
            'use strict';
            i.d(e, { X: () => d });
            var s = i(32290),
                r = i(55178),
                o = i(91027),
                l = i(71730),
                a = i(45477),
                n = i(75582),
                c = i(49399);
            let d = (t, e) => {
                let { notify: i, dismiss: d } = (0, n.l)(),
                    u = (0, r.useRef)(void 0),
                    _ = (0, o.c)(() => {
                        var i;
                        d({ notificationId: u.current }), (u.current = 0);
                        let s = [...(null != (i = t.lastRejectedPagesList) ? i : [])].reverse().filter((e) => {
                            var i;
                            return (null == (i = t.pageStates) ? void 0 : i[e]) === c.G.REJECT;
                        });
                        t.resetRejectedPagesState(),
                            s.forEach((t) => {
                                e(t);
                            });
                    });
                (0, r.useEffect)(() => {
                    t.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(l.L, { reloadBlocks: _ }), { containerId: a.u.ERROR, autoClose: !1 }));
                }, [d, _, i, t.rejectedPagesCount]);
            };
        },
        13365: (t, e, i) => {
            'use strict';
            var s;
            i.d(e, { _: () => s }),
                (function (t) {
                    (t.UP = 'up'), (t.DOWN = 'down'), (t.SAME = 'same'), (t.NEW = 'new');
                })(s || (s = {}));
        },
        14619: (t, e, i) => {
            'use strict';
            i.d(e, { CollectionArtistsPage: () => F });
            var s = i(32290),
                r = i(63618),
                o = i(96103),
                l = i(55178),
                a = i(60900),
                n = i(39407),
                c = i(16172),
                d = i(21732),
                u = i(71926),
                _ = i(7474),
                m = i(7999),
                h = i(48922),
                p = i(95226),
                x = i(71610),
                v = i(26042),
                g = i(22714),
                C = i(83808),
                A = i(83920),
                f = i(3796),
                k = i(57594),
                y = i(11262),
                T = i(58054),
                N = i(32468),
                j = i(74694),
                b = i(89020),
                R = i(45257),
                S = i(29128),
                E = i.n(S),
                I = i(82586),
                P = i(88814),
                O = i.n(P);
            let w = (t) => {
                let { className: e } = t;
                return (0, s.jsxs)('div', {
                    className: O().root,
                    children: [
                        (0, s.jsxs)('div', {
                            className: (0, r.$)(O().emptyContent, e),
                            children: [
                                (0, s.jsx)(I.I, { className: O().emptyContentIcon, size: 'l', variant: 'album' }),
                                (0, s.jsx)(u.DZ, {
                                    className: O().emptyContentTitle,
                                    variant: 'h3',
                                    size: 'xs',
                                    children: (0, s.jsx)(n.A, { id: 'error-messages.empty-collection-artists-title' }),
                                }),
                            ],
                        }),
                        (0, s.jsx)(N.A, { children: (0, s.jsx)(T.w, { className: O().footer }) }),
                    ],
                });
            };
            var L = i(82219),
                D = i(73749),
                z = i(50308),
                M = i(21012),
                B = i.n(M);
            let H = (0, o.PA)(() => {
                    let { collection: t } = (0, k.g)(),
                        { formatMessage: e } = (0, a.A)(),
                        i = e({ id: 'loading-messages.entity-is-loading' }, { entityName: e({ id: 'entity-names.artist' }) }),
                        r = (0, l.useMemo)(
                            () =>
                                t.artists.topArtists.isResolved
                                    ? t.artists.topArtists.items.map((i, r) => {
                                          var o;
                                          let l = i.listenTimeSeconds ? (0, L.U)(i.listenTimeSeconds, e) : null;
                                          return (0, s.jsx)(
                                              v.B,
                                              {
                                                  objectType: c.ky.Artist,
                                                  objectId: i.artist.id,
                                                  objectPosX: r + 1,
                                                  objectPosY: 1,
                                                  objectsCount: t.artists.topArtists.items.length,
                                                  children: (0, s.jsx)(
                                                      _.a,
                                                      {
                                                          topTitleElement:
                                                              i.top &&
                                                              (0, s.jsx)(
                                                                  D.t,
                                                                  {
                                                                      className: B().chart,
                                                                      position: i.top.position,
                                                                      progress: i.top.progress,
                                                                      weight: 'bold',
                                                                      positionClassName: B().position,
                                                                      withIcon: 0 === r,
                                                                      withCrownIcon: 0 === r,
                                                                  },
                                                                  i.getKey('ArtistTop'),
                                                              ),
                                                          bottomTitleElement: l
                                                              ? (0, s.jsx)(u.HL, {
                                                                    className: B().listenTime,
                                                                    variant: 'div',
                                                                    type: 'entity',
                                                                    size: 's',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    'data-test-id': d.Xk.collection.COLLECTION_TOP_ARTISTS_LISTEN_TIME,
                                                                    children: l,
                                                                })
                                                              : void 0,
                                                          artist: i.artist,
                                                          contentLinesCount: 4,
                                                      },
                                                      null == (o = i.artist) ? void 0 : o.id,
                                                  ),
                                              },
                                              i.artist.id,
                                          );
                                      })
                                    : (0, s.jsx)(z.e, { linesCount: 4, count: 3, isActive: !0, 'aria-label': i, round: !0, centered: !0 }),
                            [e, i, t.artists.topArtists.isResolved, t.artists.topArtists.items],
                        );
                    return (0, s.jsxs)(p.F, {
                        blockId: 'collection_artists_top',
                        blockType: 'ARTISTS_TOP',
                        blockPosX: 1,
                        blockPosY: 1,
                        blockIdForFrom: 'collection_artists_top',
                        objectsCount: t.artists.topArtists.items.length,
                        children: [
                            (0, s.jsx)(u.DZ, {
                                size: 's',
                                weight: 'bold',
                                variant: 'h2',
                                className: B().subTitle,
                                'data-test-id': d.Xk.collection.COLLECTION_TOP_ARTISTS_HEADING,
                                children: (0, s.jsx)(n.A, { id: 'entity-names.top-artists' }),
                            }),
                            (0, s.jsx)('div', { className: B().gridLayout, 'data-test-id': d.Xk.collection.COLLECTION_TOP_ARTISTS_GRID, children: r }),
                        ],
                    });
                }),
                F = (0, o.PA)(() => {
                    let {
                            user: t,
                            collection: e,
                            settings: { isMobile: i },
                            library: o,
                        } = (0, k.g)(),
                        { formatMessage: S } = (0, a.A)(),
                        { contentScrollRef: I, setContentScrollRef: P } = (0, A.g)(),
                        O = (0, C.W)();
                    (0, f.J)(e.artists.isResolved),
                        (0, l.useEffect)(
                            () => () => {
                                e.artists.reset();
                            },
                            [e.artists],
                        );
                    let L = (0, l.useCallback)(
                        (i) => {
                            t.account.data.uid && e.artists.getData({ userId: t.account.data.uid, page: i, pageSize: 20 });
                        },
                        [e.artists, t.account.data.uid],
                    );
                    (0, y.X)(e.artists.pagesLoader, L);
                    let D = S({ id: 'loading-messages.entity-is-loading' }, { entityName: S({ id: 'entity-names.artist' }) }),
                        z = (0, l.useCallback)(
                            (t) => {
                                var i;
                                let r = null == (i = e.artists.items) ? void 0 : i[t];
                                return r
                                    ? (0, s.jsx)(p.F, {
                                          blockId: 'collection_artist',
                                          blockType: 'ARTIST',
                                          blockPosX: t + 1,
                                          blockPosY: 1,
                                          blockIdForFrom: r.id,
                                          objectsCount: e.artists.items.length,
                                          children: (0, s.jsx)(v.B, {
                                              objectType: c.ky.Artist,
                                              objectId: r.id,
                                              objectPosX: 1,
                                              objectPosY: 1,
                                              objectsCount: e.artists.items.length,
                                              children: (0, s.jsx)(_.a, { artist: r, contentLinesCount: 3 }, r.id),
                                          }),
                                      })
                                    : (0, s.jsx)(b.V, { isActive: !0, 'aria-label': D, round: !0, centered: !0 });
                            },
                            [e.artists.items, D],
                        ),
                        M = e.artists.topArtists.items.length || !e.artists.topArtists.isResolved,
                        B = (0, l.useMemo)(
                            () =>
                                M
                                    ? () =>
                                          (0, s.jsxs)('div', {
                                              className: (0, r.$)(E().contentBlock, E().contentBlock_withMarginTop),
                                              children: [
                                                  (0, s.jsx)(H, {}),
                                                  (e.artists.items.length > 0 || !e.artists.isResolved) &&
                                                      (0, s.jsx)(u.DZ, {
                                                          size: 's',
                                                          weight: 'bold',
                                                          variant: 'h2',
                                                          className: E().subTitle,
                                                          children: (0, s.jsx)(n.A, { id: 'entity-names.liked-artist' }),
                                                      }),
                                              ],
                                          })
                                    : null,
                            [M, e.artists.items.length, e.artists.isResolved],
                        ),
                        F = (0, l.useMemo)(() => ({ Header: B, Footer: () => (0, s.jsx)(N.A, { children: (0, s.jsx)(T.w, { className: E().footer }) }) }), [B]),
                        U = e.artists.isShimmerVisible ? 10 : e.artists.items.length,
                        Y = (0, l.useMemo)(
                            () =>
                                0 === e.artists.items.length && 0 === e.artists.topArtists.items.length && e.artists.isResolved
                                    ? (0, s.jsx)(w, {})
                                    : (0, s.jsx)(R.$, {
                                          className: (0, r.$)(E().scrollContainer, E().important),
                                          customComponents: F,
                                          itemContentCallback: z,
                                          initialItemCount: U,
                                          totalCount: U,
                                          onGetDataByPage: L,
                                          pageSize: 20,
                                          totalRequests: e.artists.requestsCount,
                                          listClassName: (0, r.$)(E().contentBlock, E().gridLayout, { [E().contentBlock_withMarginTop]: !M }),
                                          itemClassName: E().item,
                                          handleRef: P,
                                          context: { listAriaLabel: S({ id: 'collection.liked-artists-list' }) },
                                          isMobileLayout: i,
                                          useWindowScroll: i,
                                      }),
                            [e.artists.items.length, e.artists.topArtists.items.length, e.artists.isResolved, e.artists.requestsCount, F, S, L, i, z, U, P, M],
                        );
                    if (t.account.data.uid && e.artists.isNeededToLoad) {
                        let i = [e.artists.getData({ userId: t.account.data.uid }), e.artists.getDataTopArtists(), o.getData()];
                        (0, l.use)(Promise.allSettled(i));
                    }
                    return (0, s.jsx)(g.n, {
                        pageId: h._Q.OWN_ARTISTS,
                        children: (0, s.jsx)(x.j, {
                            children: (0, s.jsx)(m.h, {
                                scrollElement: I,
                                outerTitle: S({ id: 'entity-names.artists' }),
                                children: (0, s.jsxs)('div', {
                                    className: E().root,
                                    'data-test-id': d.Xk.collection.COLLECTION_ARTISTS_PAGE,
                                    children: [
                                        (0, s.jsx)(j.Y, {
                                            variant: j.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: O.canBack,
                                            children: (0, s.jsx)(u.DZ, {
                                                id: 'collection-artists-header',
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, s.jsx)(n.A, { id: 'entity-names.artists' }),
                                            }),
                                        }),
                                        Y,
                                    ],
                                }),
                            }),
                        }),
                    });
                });
        },
        14858: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => l });
            var s = i(60900),
                r = i(57594),
                o = i(79406);
            let l = function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: e } = (0, s.A)(),
                    { user: i, experiments: l } = (0, r.g)(),
                    a = 'ru' === i.account.data.userSessionRegionIso && l.checkExperiment(o.z.WebNextFooterDisclaimer, 'on'),
                    n = e(t ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return a ? e({ id: 'footer.disclaimer-content' }) : n;
            };
        },
        20472: (t, e, i) => {
            'use strict';
            i.d(e, { Z: () => r });
            var s = i(36477);
            let r = {
                main: (0, s.u)('/'),
                chart: (0, s.u)('/chart'),
                chartPodcasts: (0, s.u)('/chart/podcasts'),
                collection: (0, s.u)('/collection'),
                collectionAlbums: (0, s.u)('/collection/albums'),
                collectionArtists: (0, s.u)('/collection/artists'),
                collectionClips: (0, s.u)('/collection/clips'),
                collectionDislikes: (0, s.u)('/collection/dislikes'),
                collectionKids: (0, s.u)('/collection/kids'),
                collectionKidsAlbums: (0, s.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, s.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, s.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, s.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, s.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, s.u)('/collection/multivibes'),
                collectionPlaylists: (0, s.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, s.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, s.u)('/collection/playlists/liked'),
                collectionShelf: (0, s.u)('/collection/shelf'),
                collectionShelfLiked: (0, s.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, s.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, s.u)('/collection/shelf/recently-played'),
                concerts: (0, s.u)('/concerts'),
                kids: (0, s.u)('/kids'),
                mixes: (0, s.u)('/mixes'),
                musicHistory: (0, s.u)('/music-history'),
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        21012: (t) => {
            t.exports = {
                subTitle: 'CollectionArtistsPageTopArtists_subTitle__xJdoJ',
                gridLayout: 'CollectionArtistsPageTopArtists_gridLayout__H2AR_',
                chart: 'CollectionArtistsPageTopArtists_chart__inbPE',
                position: 'CollectionArtistsPageTopArtists_position__YDoRC',
                listenTime: 'CollectionArtistsPageTopArtists_listenTime__NqxRf',
            };
        },
        26042: (t, e, i) => {
            'use strict';
            i.d(e, { B: () => l });
            var s = i(32290),
                r = i(55178),
                o = i(10936);
            let l = (t) => {
                let { objectId: e, objectPosX: i, objectPosY: l, objectPos: a, objectType: n, objectsCount: c, mainObjectId: d, mainObjectType: u, children: _ } = t,
                    m = (0, r.useMemo)(
                        () => ({ objectId: e, objectPosX: i, objectPosY: l, objectPos: a, objectType: n, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [e, i, l, a, n, c, d, u],
                    );
                return (0, s.jsx)(o.l.Provider, { value: m, children: _ });
            };
        },
        29128: (t) => {
            t.exports = {
                root: 'CollectionArtistsPage_root__EH25F',
                scrollContainer: 'CollectionArtistsPage_scrollContainer__tT6NQ',
                important: 'CollectionArtistsPage_important__MG_XV',
                footer: 'CollectionArtistsPage_footer__aZrx3',
                item: 'CollectionArtistsPage_item___cy_9',
                contentBlock: 'CollectionArtistsPage_contentBlock__5QDcr',
                contentBlock_withMarginTop: 'CollectionArtistsPage_contentBlock_withMarginTop__e4_VX',
                gridLayout: 'CollectionArtistsPage_gridLayout__00brJ',
                subTitle: 'CollectionArtistsPage_subTitle__My70z',
            };
        },
        29268: (t, e, i) => {
            'use strict';
            i.d(e, { k: () => u });
            var s = i(32290),
                r = i(55178),
                o = i(60900),
                l = i(21732),
                a = i(63423),
                n = i(82586),
                c = i(59576);
            let d = (t) => {
                    let {
                            variant: e,
                            withRipple: i,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: h,
                            className: p,
                            forwardRef: x,
                            style: v,
                            children: g,
                        } = t,
                        { formatMessage: C } = (0, o.A)(),
                        A = C({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(a.$, {
                        className: p,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: e,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': A,
                        onClick: m,
                        ref: x,
                        icon: (0, s.jsx)(n.I, { variant: 'trailer', size: u, className: h }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': l.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, r.forwardRef)((t, e) => (0, s.jsx)(d, { forwardRef: e, ...t }));
        },
        31010: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => r, P: () => o });
            var s = i(55178);
            let r = (0, s.createContext)(null),
                o = () => (0, s.useContext)(r);
        },
        32468: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => l });
            var s = i(32290),
                r = i(77088),
                o = i.n(r);
            let l = (t) => {
                let { children: e } = t;
                return (0, s.jsx)('footer', { className: o().empty });
            };
        },
        34925: (t, e, i) => {
            'use strict';
            i.d(e, { n: () => l });
            var s = i(32290),
                r = i(60900),
                o = i(70280);
            let l = (t) => {
                let { children: e } = t,
                    { formatMessage: i } = (0, r.A)();
                return (0, s.jsx)(o.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: e,
                });
            };
        },
        38223: (t, e, i) => {
            'use strict';
            i.d(e, { D: () => d });
            var s = i(32290),
                r = i(96103),
                o = i(39407),
                l = i(21732),
                a = i(82586),
                n = i(19740),
                c = i(57594);
            let d = (0, r.PA)((t) => {
                let { isDisliked: e, onClick: i, disabled: r, className: d } = t,
                    { user: u } = (0, c.g)();
                return (0, s.jsx)(n.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, s.jsx)(a.I, { variant: e ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': e,
                    disabled: r || !u.isAuthorized,
                    'data-test-id': l.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, s.jsx)(o.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        39684: (t) => {
            t.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        42048: (t) => {
            t.exports = {
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
        45257: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => x });
            var s = i(32290),
                r = i(63618),
                o = i(8055),
                l = i(55178);
            let a = (t) => {
                    let { style: e, forwardRef: i, context: r, ...o } = t,
                        l = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        a = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: a, 'aria-label': l, style: { ...e }, ref: i, ...o });
                },
                n = (0, l.forwardRef)((t, e) => (0, s.jsx)(a, { forwardRef: e, ...t }));
            var c = i(39684),
                d = i.n(c);
            let u = (t) => {
                    let { style: e, forwardRef: i, withFooter: o, withHeader: l, withForceScroll: a, ...n } = t;
                    return (0, s.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: o, [d().scroller_withHeader]: l, [d().scroller_withForceScroll]: a }),
                        style: { ...e },
                        ref: i,
                        ...n,
                        tabIndex: -1,
                    });
                },
                _ = (0, l.forwardRef)((t, e) => (0, s.jsx)(u, { forwardRef: e, ...t }));
            var m = i(62060),
                h = i(31417);
            let p = (t) => {
                    let {
                            pageSize: e,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: o = 100,
                            totalCount: a = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            ...d
                        } = t,
                        [u, _] = (0, l.useState)(null),
                        p = (0, l.useMemo)(
                            () =>
                                (0, m.A)((t) => {
                                    if ((null == r || r(t), n.length > 0 && _(t), e && i)) {
                                        let s = Math.floor(t.endIndex / e) + 1,
                                            r = Math.floor(t.startIndex / e);
                                        for (let t = r; t < s; t++) i(t);
                                    }
                                }, o),
                            [o, r, e, i, n],
                        );
                    (0, l.useEffect)(() => {
                        n.length > 0 && u && p(u);
                    }, n);
                    let x = (0, l.useMemo)(() => {
                        if (c)
                            return (0, m.A)((t) => {
                                c(t);
                            }, o);
                    }, [c, o]);
                    return (0, s.jsx)(h.sN, { rangeChanged: p, totalCount: a, endReached: x, ...d });
                },
                x = (t) => {
                    let {
                            className: e,
                            customComponents: i,
                            onGetDataByPage: a,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: x = 700,
                            pageSize: v = 20,
                            totalCount: g,
                            totalRequests: C,
                            debounceDurationInMs: A,
                            initialItemCount: f,
                            minInitialItemCount: k = 20,
                            handleRef: y,
                            alwaysShowScrollbar: T = !1,
                            testId: N,
                            isMobileLayout: j = !1,
                            shouldTriggerRangeChangedOn: b,
                            ...R
                        } = t,
                        [S, E] = (0, l.useState)(!1),
                        I = (0, l.useMemo)(
                            () =>
                                (0, o.A)((t) => {
                                    E(t);
                                }, 100),
                            [],
                        ),
                        P = (0, l.useMemo)(() => {
                            var t, e;
                            return j
                                ? {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : n,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : n,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, C, j]),
                        O = f ? Math.min(f, k) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: S || T, [d().root_notScrolling]: !S && !T }, e),
                        'data-test-id': N,
                        children: [
                            j && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(p, {
                                overscan: x,
                                components: P,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: I,
                                itemContent: m,
                                scrollerRef: y,
                                totalCount: g,
                                pageSize: v,
                                onPageHandler: a,
                                onRangeHandler: c,
                                debounceDurationInMs: A,
                                initialItemCount: O,
                                shouldTriggerRangeChangedOn: b,
                                ...R,
                            }),
                            j && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        47977: (t) => {
            t.exports = {
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
        50308: (t, e, i) => {
            'use strict';
            i.d(e, { e: () => o });
            var s = i(32290),
                r = i(89020);
            let o = (t) => {
                let {
                    isActive: e,
                    itemClassName: i,
                    round: o,
                    centered: l,
                    withInfo: a,
                    count: n = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: _,
                } = t;
                return Array.from(Array(n).keys()).map((t) =>
                    (0, s.jsx)(
                        r.V,
                        { isActive: e, linesCount: d, className: i, round: o, centered: l, withInfo: a, withSubcover: _, 'aria-label': u, shimmerClassName: c },
                        t,
                    ),
                );
            };
        },
        55556: (t) => {
            t.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        57594: (t, e, i) => {
            'use strict';
            i.d(e, { P: () => o, g: () => l });
            var s = i(29222),
                r = i(55178);
            let o = (0, r.createContext)(null);
            function l() {
                let t = (0, r.useContext)(o);
                if (null === t) throw new s.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return t;
            }
        },
        58054: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => f });
            var s = i(32290),
                r = i(63618),
                o = i(96103),
                l = i(60900),
                a = i(39407),
                n = i(21732),
                c = i(71926),
                d = i(14858),
                u = i(8626),
                _ = i(31010),
                m = i(61945),
                h = i(57594),
                p = (function (t) {
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
            let x = (t, e, i) => {
                switch (t) {
                    case p.YANDEX:
                        if ('ru' === e) return 'https://ya.ru';
                        return;
                    case p.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(e, '/all?lang=').concat(i);
                    case p.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(e, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                    case p.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                    case p.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case p.HELP:
                        return 'https://yandex.'.concat(e, '/support/music/index.html?lang=').concat(i);
                    case p.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(e, '/legal/confidential/').concat(i);
                }
            };
            var v = i(61258),
                g = i(77088),
                C = i.n(g);
            let A = (0, o.PA)((t) => {
                    let { className: e } = t,
                        { location: i } = (0, h.g)(),
                        { formatDate: o } = (0, l.A)(),
                        { language: d } = (0, m.h)();
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(C().copyrights, e),
                        'data-test-id': n.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    o(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, s.jsx)(v.N, {
                                        target: '_blank',
                                        href: x(p.YANDEX, i.tld, d),
                                        className: (0, r.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': n.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, s.jsx)(a.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(v.N, {
                                target: '_blank',
                                href: x(p.YANDEX_PROJECTS, i.tld, d),
                                className: C().copyrightLink,
                                'data-test-id': n.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, s.jsx)(a.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                f = (0, o.PA)((t) => {
                    var e;
                    let { className: i } = t,
                        { user: o, location: l } = (0, h.g)(),
                        { isEnabled: u } = null != (e = (0, _.P)()) ? e : {},
                        { language: g } = (0, m.h)(),
                        f = (0, d.w)(!0),
                        k = ((t) => {
                            let { platform: e, tld: i, language: r, userRegion: o } = t,
                                l = { title: (0, s.jsx)(a.A, { id: 'footer.links-copyright-holders' }), url: x(p.COPYRIGHT_HOLDER, i, r) },
                                n = { title: (0, s.jsx)(a.A, { id: 'footer.links-privacy-policy' }), url: x(p.PRIVACY_POLICY, i, r) },
                                c = { title: (0, s.jsx)(a.A, { id: 'footer.links-terms' }), url: x(p.AGREEMENT, i, r) },
                                d = { title: (0, s.jsx)(a.A, { id: 'footer.links-recommendation-rules' }), url: x(p.RECOMMENDATION_RULES, i, r) },
                                u = { title: (0, s.jsx)(a.A, { id: 'footer.links-help' }), url: x(p.HELP, i, r) };
                            switch (e) {
                                case 'spa':
                                case 'web': {
                                    let t = [l, c, d];
                                    return 'ru' === o && t.push(n), t.push(u), t;
                                }
                                case 'desktop':
                                    return [l, c, d, u];
                            }
                        })({ platform: 'desktop', tld: l.tld, language: g, userRegion: o.account.data.userSessionRegionIso });
                    return (0, s.jsxs)('footer', {
                        className: (0, r.$)(C().root, C().important, { [C().root_withOffsetForDeeplink]: u }, i),
                        'data-test-id': n.S7.FOOTER,
                        children: [
                            (0, s.jsxs)('div', {
                                className: C().links,
                                children: [
                                    (0, s.jsx)('ol', {
                                        className: C().list,
                                        'data-test-id': n.S7.FOOTER_LINKS_LIST,
                                        children: k.map((t) => {
                                            let { title: e, url: i } = t;
                                            return (0, s.jsx)(
                                                'li',
                                                {
                                                    className: C().item,
                                                    children: (0, s.jsx)(v.N, {
                                                        target: '_blank',
                                                        href: i,
                                                        className: C().link,
                                                        'data-test-id': n.S7.FOOTER_LINK,
                                                        children: e,
                                                    }),
                                                },
                                                i,
                                            );
                                        }),
                                    }),
                                    (0, s.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: C().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: f },
                                        'data-test-id': n.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(A, {}),
                        ],
                    });
                });
        },
        70390: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => h });
            var s = i(32290),
                r = i(92708),
                o = i(55178),
                l = i(60900),
                a = i(45477),
                n = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                _ = i(8097);
            let m = (t) => {
                    let { artist: e, closeToast: i } = t;
                    return (0, s.jsx)(_.k, {
                        closeToast: i,
                        entityVariant: u.c.ARTIST,
                        coverUri: e.coverUri,
                        entityUrl: e.url,
                        entityTitle: e.name,
                        isPinned: e.isPinned,
                        radius: 'round',
                    });
                },
                h = (t) => {
                    let { user: e } = (0, c.g)(),
                        { notify: i } = (0, n.l)(),
                        { formatMessage: u } = (0, l.A)(),
                        [_, h] = (0, o.useState)(!1);
                    return (0, o.useCallback)(async () => {
                        if (!t) return;
                        if (!e.isAuthorized)
                            return void i((0, s.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a.u.ERROR });
                        if (_) return;
                        let o = { ...(0, r.HO)(t), isPinned: !t.isPinned };
                        h(!0);
                        let l = await t.togglePin();
                        h(!1),
                            l
                                ? i((0, s.jsx)(m, { artist: o }), { containerId: a.u.INFO })
                                : i((0, s.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: a.u.ERROR });
                    }, [t, e.isAuthorized, _, u, i]);
                };
        },
        70718: (t) => {
            t.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        71610: (t, e, i) => {
            'use strict';
            i.d(e, { j: () => n });
            var s = i(32290),
                r = i(55178),
                o = i(27576),
                l = i(42406),
                a = i(80536);
            let n = (t) => {
                let { children: e } = t,
                    i = (0, r.useRef)({}),
                    n = (0, r.useRef)(
                        (0, l.Gv)(
                            (t) => {
                                let e = (0, l.L5)(t.target),
                                    s = i.current[e];
                                if (s) {
                                    if (t.isIntersecting) {
                                        let t = window.setTimeout(() => {
                                            let t = String((0, o.A)());
                                            s.callback(!0, t), (s.showed = !0), (s.viewUuid = t);
                                        }, 1e3);
                                        s.timerId = t;
                                    }
                                    !t.isIntersecting && s.showed && (s.callback(!1, s.viewUuid), (s.showed = !1), (s.viewUuid = '')),
                                        t.isIntersecting || window.clearTimeout(s.timerId);
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, r.useCallback)((t) => {
                        var e;
                        !i.current[t.elementId] &&
                            t.elementRef.current &&
                            (null == (e = n.current) || e.observe(t.elementRef.current), (i.current[t.elementId] = { showed: !1, viewUuid: '', callback: t.callback }));
                    }, []),
                    d = (0, r.useCallback)((t) => {
                        let e = i.current[t];
                        e && (e.showed && e.callback(!1, e.viewUuid), delete i.current[t]);
                    }, []);
                (0, r.useEffect)(
                    () => () => {
                        var t;
                        return null == (t = n.current) ? void 0 : t.disconnect();
                    },
                    [],
                );
                let u = (0, r.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, s.jsx)(a.B.Provider, { value: u, children: e });
            };
        },
        71730: (t, e, i) => {
            'use strict';
            i.d(e, { L: () => h });
            var s = i(32290),
                r = i(63618),
                o = i(55178),
                l = i(60900),
                a = i(39407),
                n = i(63423),
                c = i(82586),
                d = i(71926),
                u = i(58534),
                _ = i(70718),
                m = i.n(_);
            let h = (t) => {
                let { reloadBlocks: e, closeToast: i } = t,
                    _ = (0, o.useRef)(null),
                    { formatMessage: h } = (0, l.A)();
                (0, o.useEffect)(() => {
                    var t;
                    null == (t = _.current) || t.focus();
                }, []);
                let p = (0, o.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(a.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(n.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: e,
                                    variant: 'text',
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [h, e],
                );
                return (0, s.jsx)(u.$, { className: (0, r.$)(m().root, m().important), message: p, closeToast: i });
            };
        },
        73749: (t, e, i) => {
            'use strict';
            i.d(e, { t: () => h });
            var s = i(32290),
                r = i(63618),
                o = i(96103),
                l = i(55178),
                a = i(60900),
                n = i(21732),
                c = i(13365),
                d = i(82586),
                u = i(71926),
                _ = i(47977),
                m = i.n(_);
            let h = (0, o.PA)((t) => {
                let {
                        progress: e,
                        withIcon: i,
                        withCrownIcon: o,
                        position: _,
                        weight: h = 'normal',
                        isDisliked: p,
                        isDisabled: x,
                        className: v,
                        positionClassName: g,
                    } = t,
                    { formatMessage: C } = (0, a.A)(),
                    A = e || i,
                    f = (0, l.useMemo)(() => {
                        if (o) return 'crown';
                        switch (e) {
                            case c._.UP:
                                return 'chartUp';
                            case c._.DOWN:
                                return 'chartDown';
                            case c._.NEW:
                                return 'chartNew';
                            default:
                                return 'chartSame';
                        }
                    }, [e, o]),
                    k = (0, l.useMemo)(() => {
                        switch (e) {
                            case c._.UP:
                                return C({ id: 'entity-names.chart-up' });
                            case c._.DOWN:
                                return C({ id: 'entity-names.chart-down' });
                            case c._.NEW:
                                return C({ id: 'entity-names.chart-new' });
                            default:
                                return C({ id: 'entity-names.chart-same' });
                        }
                    }, [C, e]),
                    y = o ? 'crown' : e;
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(m().root, v),
                    'data-test-id': n.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, s.jsx)(u.HL, {
                            variant: 'div',
                            weight: h,
                            type: 'entity',
                            size: 'm',
                            className: (0, r.$)(m().position, g, { [m().position_disliked]: p, [m().position_disabled]: x }),
                            'data-test-id': n.OA.chart.CHART_PROGRESS_POSITION,
                            children: _,
                        }),
                        A &&
                            (0, s.jsx)(d.I, {
                                variant: f,
                                size: 'xxs',
                                'aria-label': k,
                                className: (0, r.$)(m().progress, m()['progress_'.concat(y)], { [m().progress_disliked]: p, [m().progress_disabled]: x }),
                                'data-test-id': n.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        77088: (t) => {
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
        80528: (t, e, i) => {
            'use strict';
            i.d(e, { g: () => Z });
            var s = i(32290),
                r = i(96103),
                o = i(60900),
                l = i(16172),
                a = i(21732),
                n = i(71483),
                c = i(91027),
                d = i(82586),
                u = i(19740),
                _ = i(92708),
                m = i(55178),
                h = i(63380),
                p = i(45477),
                x = i(75582),
                v = i(57594),
                g = i(90357),
                C = i(86269),
                A = i(74196),
                f = i(71926),
                k = i(58534),
                y = i(11323),
                T = i(356),
                N = i.n(T);
            let j = (t) => {
                let { coverUri: e, title: i, isDisliked: r, closeToast: l } = t,
                    { formatMessage: a } = (0, o.A)(),
                    n = a(r ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, s.jsx)(k.$, {
                    closeToast: l,
                    message: (0, s.jsxs)('div', {
                        className: N().message,
                        children: [
                            (0, s.jsx)(A.q, { children: (0, s.jsx)('p', { role: 'alert', 'aria-label': n }) }),
                            (0, s.jsx)(C.t, {
                                className: N().cover,
                                radius: 'round',
                                children: (0, s.jsx)(y.B, { className: N().image, src: e, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, s.jsx)(f.HL, { className: N().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: n }),
                        ],
                    }),
                });
            };
            var b = i(5942),
                R = i(70390),
                S = i(9017),
                E = i(65477),
                I = i(71735),
                P = i(37862),
                O = i(48922),
                w = i(54391),
                L = i(72396),
                D = i(46200),
                z = i(27120),
                M = i(43564),
                B = i(95134),
                H = i(79406),
                F = i(51675),
                U = i(48027),
                Y = i(89384),
                X = i(38223),
                K = i(58237),
                $ = i(56367),
                V = i(4914),
                G = i(83755),
                W = i(25160),
                q = i(4008);
            let Z = (0, r.PA)((t) => {
                var e, i, r;
                let { artist: C, onOpenChange: A, open: f, ...k } = t,
                    { shouldShowBuySubscriptionModal: y, showBuySubscriptionModal: T } = (0, D.q)(),
                    {
                        settings: { isMobile: N },
                        modals: { artistAboutModal: Z },
                        trailer: J,
                        user: Q,
                        experiments: tt,
                    } = (0, v.g)(),
                    te = (0, R.A)(C),
                    ti = (0, b.K)(C),
                    ts = ((t) => {
                        let { user: e } = (0, v.g)(),
                            { notify: i } = (0, x.l)(),
                            [r, l] = (0, m.useState)(!1),
                            { formatMessage: a } = (0, o.A)();
                        return (0, c.c)(async () => {
                            if (!t) return;
                            if (!e.isAuthorized)
                                return void i((0, s.jsx)(g.h, { error: a({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: p.u.ERROR });
                            if (r) return;
                            let o = { ...(0, _.HO)(t), isDisliked: !t.isDisliked };
                            l(!0);
                            let n = await t.toggleDislike();
                            l(!1),
                                n === h.f.OK
                                    ? i((0, s.jsx)(j, { coverUri: o.coverUri, title: o.name, isDisliked: o.isDisliked }), { containerId: p.u.INFO })
                                    : i((0, s.jsx)(g.h, { error: a({ id: 'error-messages.error-during-action' }) }), { containerId: p.u.ERROR });
                        });
                    })(C),
                    tr = (0, w.F)(),
                    to = ''.concat(P.U.ARTIST, '-').concat(null == C ? void 0 : C.id),
                    { formatMessage: tl } = (0, o.A)(),
                    { utmLink: ta } = (0, L.f)({ blockId: P.U.ARTIST, contextType: n.K.Artist, contextId: null == C ? void 0 : C.id }),
                    { shareLink: tn, pathname: tc } = (0, Y.b)('/artist/:artistId', { params: { artistId: null != (i = null == C ? void 0 : C.id) ? i : '' } }),
                    td = (0, S.A)({ entityVariant: B.D.ARTIST, urlParams: { id: null == C ? void 0 : C.id } }),
                    { isPlaying: tu, togglePlay: t_ } = (0, M.B)({
                        seeds: null != (r = null == C ? void 0 : C.seeds) ? r : [],
                        pageIdForFrom: O._Q.RADIO,
                        blockIdForFrom: to,
                        parentContextId: null == C ? void 0 : C.id,
                    }),
                    tm = (0, I.P)(),
                    th = tl((null == C ? void 0 : C.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    tp = (0, c.c)(() => {
                        if (y && Q.isAuthorized) return void T();
                        tu || t_();
                    }),
                    tx = (0, c.c)(() => {
                        if (!tm()) {
                            if (y) return void T();
                            (null == C ? void 0 : C.id) && (J.setUtmLink(ta), J.openArtistTrailer(C.id), tr(l.ky.Artist, C.id));
                        }
                    }),
                    tv = (0, c.c)(() => {
                        Z.open(null == C ? void 0 : C.id);
                    });
                (0, z.N)(f);
                let tg = { variant: F.Y.ARTIST, id: null == C ? void 0 : C.id, title: null == C ? void 0 : C.name, path: tc },
                    tC = tt.checkExperiment(H.z.WebEditorsFeatures, 'on'),
                    tA = null == C || null == (e = C.trailer) ? void 0 : e.isAvailable,
                    tf = tt.checkExperiment(H.z.WebNextArtistInfo, 'on');
                return (0, s.jsxs)(u.W1, {
                    isMobile: N,
                    offsetOptions: 10,
                    open: f,
                    onOpenChange: A,
                    ariaLabel: tl({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': a.Kq.artist.ARTIST_CONTEXT_MENU },
                    ...k,
                    children: [
                        tC && (0, s.jsx)(q.WithOffline, { fallback: (0, s.jsx)(E.d, { entityVariant: B.D.ARTIST, adminUrl: td }) }),
                        !N && (0, s.jsx)(q.WithOffline, { fallback: (0, s.jsx)($.L, { onClick: te, isPinned: null == C ? void 0 : C.isPinned }) }),
                        (0, s.jsx)(q.WithOffline, {
                            fallback: (0, s.jsx)(K.T, {
                                onClick: ti,
                                isLiked: null == C ? void 0 : C.isLiked,
                                disabled: !Q.isAuthorized || !(null == C ? void 0 : C.isAvailable),
                            }),
                        }),
                        tA && (0, s.jsx)(q.WithOffline, { fallback: (0, s.jsx)(G.N, { onClick: tx }) }),
                        (0, s.jsx)(q.WithOffline, {
                            fallback: (0, s.jsx)(W.C, { onClick: tp, disabled: !(null == C ? void 0 : C.isAvailable), variant: U.I.ARTIST, onOpenMenuChange: A }),
                        }),
                        (0, s.jsx)(V.H, { disabled: !C, shareLink: tn, entityMeta: tg }),
                        tf &&
                            (0, s.jsx)(q.WithOffline, {
                                fallback: (0, s.jsx)(u.Dr, {
                                    onClick: tv,
                                    icon: (0, s.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': a.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: th,
                                }),
                            }),
                        (0, s.jsx)(q.WithOffline, {
                            fallback: (0, s.jsx)(X.D, { onClick: ts, isDisliked: null == C ? void 0 : C.isDisliked, disabled: !(null == C ? void 0 : C.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        80556: (t) => {
            t.exports = {
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
        82219: (t, e, i) => {
            'use strict';
            i.d(e, { U: () => s });
            let s = (t, e) => {
                let i = t / 60;
                return i <= 45 ? e({ id: 'time.minutes-left' }, { minutes: Math.round(i) }) : e({ id: 'time.hours' }, { hours: Math.round((i / 60) * 2) / 2 });
            };
        },
        88814: (t) => {
            t.exports = {
                root: 'CollectionArtistsPageEmpty_root__D39tF',
                emptyContent: 'CollectionArtistsPageEmpty_emptyContent__oJc6T',
                emptyContentIcon: 'CollectionArtistsPageEmpty_emptyContentIcon__uZQwm',
                emptyContentTitle: 'CollectionArtistsPageEmpty_emptyContentTitle__Vqy_Q',
                footer: 'CollectionArtistsPageEmpty_footer__O_8aS',
            };
        },
        89020: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => n });
            var s = i(32290),
                r = i(63618),
                o = i(79856),
                l = i(80556),
                a = i.n(l);
            let n = (t) => {
                let {
                    isActive: e,
                    className: i,
                    shimmerClassName: l,
                    round: n,
                    'aria-label': c,
                    centered: d,
                    withInfo: u = !0,
                    linesCount: _ = 3,
                    withSubcover: m,
                    radius: h = 'l',
                } = t;
                return (0, s.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': e ? 'polite' : 'off',
                    'aria-busy': e,
                    className: (0, r.$)(a().root, i),
                    children: [
                        m && (0, s.jsx)(o.W, { isActive: e, className: a().subcover, radius: 'l' }),
                        (0, s.jsx)(o.W, { isActive: e, className: (0, r.$)(a().cover, l, { [a().cover_round]: n, [a().cover_withSubcover]: m }), radius: h }),
                        u &&
                            (0, s.jsx)('div', {
                                className: (0, r.$)(a().infoContainer, a()['content_linesCount_'.concat(_)], { [a().infoContainer_centered]: d }),
                                children: (0, s.jsx)(o.W, { isActive: e, className: (0, r.$)(a().title, { [a().title_withSubcover]: m }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        91853: (t, e, i) => {
            'use strict';
            i.d(e, { S: () => r });
            var s = i(19383);
            let r = (t) => {
                let { artist: e, callback: i, shouldHistoryBack: r } = t;
                return (0, s.l)({ entity: e, callback: i, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        94218: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => _ });
            var s = i(32290),
                r = i(21916),
                o = i(39407),
                l = i(21732),
                a = i(91027),
                n = i(63423),
                c = i(71926),
                d = i(70204),
                u = i(34186);
            let _ = (t) => {
                let { size: e = 'm', variant: i = 'default', withRipple: _ = !0, buttonText: m, isBlock: h, key: p, className: x } = t,
                    v = (0, r.useRouter)(),
                    g = (0, u.N)().get(d.QG),
                    C = (0, a.c)(() => {
                        g.authorizationUrl && v.push(g.authorizationUrl);
                    });
                return (0, s.jsx)(
                    n.$,
                    {
                        onClick: C,
                        className: x,
                        isBlock: h,
                        color: 'primary',
                        variant: i,
                        size: e,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': l.S7.UNAUTHORIZED_BUTTON,
                        children: m || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    p,
                );
            };
        },
        95226: (t, e, i) => {
            'use strict';
            i.d(e, { F: () => l });
            var s = i(32290),
                r = i(55178),
                o = i(73818);
            let l = (t) => {
                let {
                        blockId: e,
                        blockType: i,
                        blockIdForFrom: l,
                        blockPosX: a,
                        blockPosY: n,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: m,
                    } = t,
                    h = (0, r.useMemo)(
                        () => ({
                            blockId: e,
                            blockType: i,
                            blockIdForFrom: l,
                            blockPosX: a,
                            blockPosY: n,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: m,
                        }),
                        [e, i, l, a, n, c, d, u, m],
                    );
                return (0, s.jsx)(o.p.Provider, { value: h, children: _ });
            };
        },
    },
    (t) => {
        t.O(
            0,
            [
                5718, 7034, 7231, 6347, 9763, 3183, 6639, 7258, 7972, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6477, 7275, 2586, 8347, 7702, 6874,
                861, 782, 4668, 9740, 1175, 14, 8915, 8816, 4220, 9562, 7358,
            ],
            () => t((t.s = 5541)),
        ),
            (_N_E = t.O());
    },
]);
