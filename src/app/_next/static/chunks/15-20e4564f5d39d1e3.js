(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [15],
    {
        2576: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => n });
            var i = a(83252);
            let n = (e) => {
                let { albumId: t, deprecationTargetAlbumId: a, trackId: n, realId: l, searchParams: o } = e,
                    s = Number(t),
                    r = new URLSearchParams(o);
                r.delete('albumId'), r.delete('trackId');
                let d = Object.fromEntries(r);
                if ('number' == typeof a && a !== s) {
                    if (n) {
                        let { href: e } = (0, i.uvd)('/album/:albumId/track/:trackId', { params: { albumId: a, trackId: n }, query: d });
                        return { deprecationUrl: e, shouldRedirect: !0 };
                    }
                    let { href: e } = (0, i.uvd)('/album/:albumId', { params: { albumId: a }, query: d });
                    return { deprecationUrl: e, shouldRedirect: !0 };
                }
                if (n && l && l !== n) {
                    let { href: e } = (0, i.uvd)('/album/:albumId/track/:trackId', { params: { albumId: t, trackId: l }, query: d });
                    return { deprecationUrl: e, shouldRedirect: !0 };
                }
                return { deprecationUrl: '', shouldRedirect: !1 };
            };
        },
        3956: (e, t, a) => {
            'use strict';
            a.d(t, { AlbumPage: () => ex });
            var i = a(54486),
                n = a(28303),
                l = a(97396),
                o = a(61910),
                s = a(43350),
                r = a(31500),
                d = a(27510),
                c = a(85284),
                u = a(84262),
                m = a(80156),
                b = a(33276),
                p = a(46423),
                v = a(83252),
                g = a(80585),
                j = a(2576),
                h = a(56053),
                A = a(76048),
                x = a(15209);
            let k = (0, n.PA)((e) => {
                var t, a, n, l, o, s, r, d, c, u, m, b, p, j;
                let { album: h } = e;
                return (0, i.jsx)(g.Sj, {
                    value: {
                        '@type': 'MusicAlbum',
                        name: null != (u = null == (t = h.meta) ? void 0 : t.title) ? u : void 0,
                        description: null != (m = h.description) ? m : void 0,
                        url: null != (b = null == (a = h.meta) ? void 0 : a.url) ? b : void 0,
                        image: (null == (n = h.meta) ? void 0 : n.coverUri) ? (0, x.createAvatarUrl)(null == (l = h.meta) ? void 0 : l.coverUri, 'orig') : void 0,
                        genre: null != (p = null == (o = h.meta) ? void 0 : o.genre) ? p : void 0,
                        datePublished: null != (j = null == (r = h.meta) || null == (s = r.year) ? void 0 : s.toString()) ? j : void 0,
                        tracks:
                            null == (d = h.tracks)
                                ? void 0
                                : d.map((e) => {
                                      var t, a, i, n, l, o;
                                      return {
                                          '@type': 'MusicRecording',
                                          name: null != (n = null == (t = e.data) ? void 0 : t.title) ? n : void 0,
                                          duration: (0, v.FXG)(null != (l = null == (a = e.data) ? void 0 : a.durationMs) ? l : 0),
                                          url: null != (o = null == (i = e.data) ? void 0 : i.url) ? o : void 0,
                                      };
                                  }),
                        potentialAction: {
                            '@type': 'ListenAction',
                            expectsAcceptanceOf: {
                                '@type': 'Offer',
                                category: 'free',
                                target: { '@type': 'EntryPoint', actionPlatform: null == (c = h.meta) ? void 0 : c.url },
                            },
                        },
                    },
                });
            });
            var C = a(26273),
                y = a.n(C),
                _ = a(50420),
                f = a(43426),
                T = a(63585),
                I = a(89461),
                P = a(6664),
                L = a(17656),
                N = a(7981),
                O = a(21365),
                S = a(25326),
                E = a(26478),
                B = a(17930),
                M = a(8817);
            let R = (0, n.PA)((e) => {
                let { url: t } = e,
                    a = (0, N.cg)(),
                    n = (0, N.CC)(),
                    { ref: l, intersectionPropertyId: o } = (0, v.nMI)({ callback: n, withViewUuid: !0 }),
                    r = (0, v.ZpR)(t),
                    d = (0, M.c)((e) => {
                        a(s.QT.Link, t), r(e);
                    });
                return (0, i.jsx)(N.vK, { onClick: d, ref: l, 'data-intersection-property-id': o });
            });
            var U = a(63695);
            let D = (0, n.PA)((e) => {
                    let { donation: t } = e,
                        a = (0, N.cg)(),
                        n = (0, N.CC)(),
                        l = (0, N.Q$)()(t.url),
                        { ref: o, intersectionPropertyId: r } = (0, v.nMI)({ callback: n, withViewUuid: !0 }),
                        d = (0, v.ZpR)(l),
                        c = (0, v.ZpR)(t.artist.url),
                        u = (0, M.c)((e) => {
                            a(s.QT.ArtistScreen), c(e);
                        }),
                        m = (0, M.c)(() => {
                            a(s.QT.Link, l), d();
                        }),
                        b = (0, U.SA)({ artist: t.artist, callback: u });
                    return (0, i.jsx)(N.Xx, {
                        ref: o,
                        'data-intersection-property-id': r,
                        artist: t.artist,
                        goal: t.goal,
                        onNavigateToArtist: b,
                        onNavigateToDonation: m,
                    });
                }),
                X = (0, n.PA)((e) => {
                    var t, a, n;
                    let { className: l, headerClassName: r, containerClassName: d, headingVariant: c } = e,
                        { formatMessage: u } = (0, f.A)(),
                        { album: m } = (0, v.Pjs)(),
                        b = (0, o.useMemo)(() => {
                            var e, t;
                            return (null == (e = m.donations) ? void 0 : e.isLoading) || !(null == (t = m.donations) ? void 0 : t.items)
                                ? (0, N.kZ)(!0)
                                : m.donations.items.map((e, t) => {
                                      var a, n, l;
                                      return (0, i.jsx)(
                                          v.Bki,
                                          {
                                              objectType: s.ky.Donation,
                                              objectId: e.artist.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: Number(null == (n = m.donations) || null == (a = n.items) ? void 0 : a.length),
                                              mainObjectId: String(null == (l = m.meta) ? void 0 : l.id),
                                              mainObjectType: s.ky.Album,
                                              children: (0, i.jsx)(D, { donation: e }, e.artist.id),
                                          },
                                          e.artist.id,
                                      );
                                  });
                        }, [null == (t = m.donations) ? void 0 : t.isLoading, null == (a = m.donations) ? void 0 : a.items, null == (n = m.meta) ? void 0 : n.id]);
                    return (0, i.jsx)(N.x0, {
                        className: l,
                        headerClassName: r,
                        containerClassName: d,
                        title: u({ id: 'donation.support-text' }),
                        headingVariant: c,
                        children: b,
                    });
                });
            var K = a(5956),
                w = a(61958),
                F = a(9348),
                H = a(62395),
                Y = a(9897),
                V = a.n(Y),
                z = a(58360),
                Q = a(6971),
                $ = a(97800),
                G = a(40238),
                Z = a.n(G);
            let W = (0, n.PA)((e) => {
                    let { donation: t } = e,
                        a = (0, N.Q$)()(t.url),
                        n = (0, v.ZpR)(a),
                        l = (() => {
                            let { hash: e } = (0, H.gf)(),
                                t = (0, v.UlF)(),
                                a = (0, H.st)(),
                                { pageId: i } = (0, v.$au)(),
                                { blockId: n, blockType: l, blockPosX: o, blockPosY: r } = (0, v.N8n)(),
                                { objectType: d, objectId: c, objectPosX: u, objectPosY: m, objectsCount: b, mainObjectId: p, mainObjectType: g } = (0, v.Jfv)();
                            return (0, M.c)(() => {
                                if (!a || !i) return;
                                let j = v.Wft[i];
                                if (!j) return;
                                let h = {
                                        userInteractionType: s.gi.Tap,
                                        hash: e,
                                        pageId: j,
                                        pageStyle: s.QL.ContextMenu,
                                        pagePlacement: s.c4.Hover,
                                        mainObjectType: g,
                                        mainObjectId: p,
                                        objectType: d,
                                        objectId: c,
                                        objectPosX: u,
                                        objectPosY: m,
                                        entityType: l,
                                        entityId: n,
                                        entityPosX: o,
                                        entityPosY: r,
                                        objectsCount: b,
                                        actionType: s.N6.CLICK,
                                    },
                                    A = (0, s.Fx)({ params: h, logger: t, context: 'useSendEventOnDonationMenuItemActionPerformed' });
                                A && (0, s.l6)(a.evgenInstance, A);
                            });
                        })(),
                        o = (0, N.CC)(),
                        { ref: r, intersectionPropertyId: d } = (0, v.nMI)({ callback: o, withViewUuid: !0 }),
                        c = (0, M.c)(() => {
                            l(), n();
                        });
                    return (0, i.jsxs)(
                        w.Dr,
                        {
                            ref: r,
                            'data-intersection-property-id': d,
                            className: Z().root,
                            isBlock: !0,
                            onClick: c,
                            children: [
                                (0, i.jsx)(Q.Paper, {
                                    radius: 'round',
                                    className: Z().cover,
                                    children: (0, i.jsx)(z.Image, { withAvatarReplace: !0, src: t.artist.coverUri, size: 100, fit: 'contain', className: Z().image }),
                                }),
                                (0, i.jsx)($.Caption, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.artist.name }),
                            ],
                        },
                        a,
                    );
                }),
                q = (0, n.PA)(() => {
                    var e;
                    let {
                            settings: { isMobile: t },
                            album: { donations: a, meta: n },
                        } = (0, v.Pjs)(),
                        { formatMessage: l } = (0, f.A)(),
                        r = (() => {
                            let e = (0, H.st)(),
                                t = (0, v.UlF)(),
                                { hash: a } = (0, H.gf)(),
                                { pageId: i } = (0, v.$au)(),
                                { mainObjectId: n, mainObjectType: l } = (0, v.Jfv)();
                            return (0, M.c)((o) => {
                                if (!e || !i || !v.Wft[i]) return;
                                let r = { pageStyle: s.QL.ContextMenu, pagePlacement: s.c4.Hover, mainObjectType: l, mainObjectId: n, hash: a, pageId: i };
                                o && (r.viewUuid = String((0, F.A)()));
                                let d = (0, s.Fx)({ params: r, logger: t, context: 'useSendEventOnDonationMenuOpenedOrClosed' });
                                d && (o ? (0, s.Fn)(null == e ? void 0 : e.evgenInstance, d) : (0, s.Ig)(null == e ? void 0 : e.evgenInstance, d));
                            });
                        })(),
                        [d, c] = (0, o.useState)(!1),
                        u = (0, o.useRef)(!1);
                    return (
                        (0, o.useEffect)(() => {
                            d && (u.current = !0);
                        }, [d]),
                        (0, o.useEffect)(() => {
                            u.current && r(d);
                        }, [d, r]),
                        (0, i.jsx)(w.W1, {
                            ariaLabel: l({ id: 'donation.button-text' }),
                            size: 's',
                            variant: 'default',
                            radius: 'round',
                            color: 'secondary',
                            icon: (0, i.jsx)(K.Icon, { size: 'xxs', variant: 'ruble' }),
                            onOpenChange: c,
                            open: d,
                            isMobile: t,
                            placement: 'bottom',
                            offsetOptions: 8,
                            listClassName: V().popover,
                            children:
                                null == a || null == (e = a.items)
                                    ? void 0
                                    : e.map((e, t) => {
                                          var l;
                                          return (0, i.jsx)(
                                              v.Bki,
                                              {
                                                  objectType: s.ky.Donation,
                                                  objectId: e.artist.id,
                                                  objectPosX: 1,
                                                  objectPosY: t + 1,
                                                  objectsCount: Number(null == (l = a.items) ? void 0 : l.length),
                                                  mainObjectId: String(null == n ? void 0 : n.id),
                                                  mainObjectType: s.ky.Album,
                                                  children: (0, i.jsx)(W, { donation: e }),
                                              },
                                              e.artist.id,
                                          );
                                      }),
                        })
                    );
                });
            var J = a(10612);
            let ee = (e) => {
                    let { url: t, name: a } = e,
                        n = (0, v.NKK)(),
                        { ref: l, intersectionPropertyId: o } = (0, v.nMI)(),
                        d = (0, M.c)(() => {
                            n({ to: s.QT.LabelScreen, deepLink: t });
                        });
                    return (0, i.jsx)('span', {
                        ref: l,
                        'data-intersection-property-id': o,
                        className: y().labelLinkContainer,
                        children: (0, i.jsx)(g.N_, {
                            role: 'link',
                            'aria-label': a,
                            href: t,
                            className: (0, _.$)(y().labelLink, y().important),
                            onClick: d,
                            ...(0, r.Am)(r.Xk.album.ALBUM_LABEL_LINK),
                            children: (0, i.jsx)($.Caption, { variant: 'span', children: a }),
                        }),
                    });
                },
                et = (0, n.PA)((e) => {
                    var t, a, n;
                    let { album: l, size: r, weight: d, className: c } = e,
                        { formatMessage: u } = (0, f.A)(),
                        m = (0, v.fBs)();
                    (0, o.useEffect)(() => {
                        m();
                    }, [m]);
                    let b = null == (t = l.labels) ? void 0 : t.length,
                        p = u((null == (a = l.meta) ? void 0 : a.isPodcast) ? { id: 'page.album-publisher-title' } : { id: 'page.album-label-title' }, { count: b });
                    return (0, i.jsxs)('div', {
                        className: (0, _.$)(y().label, c),
                        children: [
                            (0, i.jsx)($.Caption, { variant: 'span', size: r, weight: d, children: p }),
                            '\xa0',
                            (0, i.jsx)($.Caption, {
                                variant: 'span',
                                size: r,
                                weight: d,
                                lineClamp: 1,
                                children:
                                    null == (n = l.labels)
                                        ? void 0
                                        : n.map((e, t) => {
                                              var a, n;
                                              let { id: o, name: r } = e;
                                              return (0, i.jsx)(
                                                  v.Bki,
                                                  {
                                                      objectType: s.ky.Link,
                                                      objectId: l.labelUrl(o),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: null == (a = l.labels) ? void 0 : a.length,
                                                      mainObjectType: s.ky.Link,
                                                      mainObjectId: String(null == (n = l.meta) ? void 0 : n.id),
                                                      children: (0, i.jsx)(ee, { url: l.labelUrl(o), name: r }),
                                                  },
                                                  o,
                                              );
                                          }),
                            }),
                        ],
                    });
                });
            var ea = a(47713),
                ei = a(11036),
                en = a(70140),
                el = a(97719),
                eo = a(54460),
                es = a(86552);
            let er = (0, n.PA)((e) => {
                var t;
                let { albumId: a, albumTitle: n, albumCoverUri: l } = e,
                    {
                        user: s,
                        experiments: d,
                        album: c,
                        sonataState: { entityMeta: u },
                    } = (0, v.Pjs)(),
                    m = (0, v.eGp)(),
                    b = d.checkExperiment(v.zal.WebNextInsertAlbumPlaylistIntoContext, 'on'),
                    p = d.checkExperiment(v.zal.WebNextUseWaveQueue, 'on'),
                    j = null == m ? void 0 : m.state.currentContext.value,
                    h = !!(!b || (0, ei.S)(j) || ((0, en.i)(j) && !p)),
                    A = (0, es._)(null == (t = c.meta) ? void 0 : t.id),
                    x = (0, o.useMemo)(() => (0, v.tW0)({ contextType: T.K.Album, contextId: String(a) }), [a]),
                    k = (0, el.m4)(c.tracks, eo.NM.NEXT, x, { entityVariant: g.cp.ALBUM, entityTitle: n, coverUri: l }, A),
                    C = (0, el.m4)(c.tracks, eo.NM.LAST, x, { entityVariant: g.cp.ALBUM, entityTitle: n, coverUri: l }, A);
                return u && !h
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(w.Dr, {
                                  onClick: k,
                                  icon: (0, i.jsx)(K.Icon, { variant: 'playNext', size: 'xxs' }),
                                  disabled: !s.isAuthorized,
                                  ...(0, r.Am)(r.Kq.album.ALBUM_CONTEXT_MENU_PLAY_NEXT_BUTTON),
                                  children: (0, i.jsx)(ea.A, { id: 'play-queue.play-next' }),
                              }),
                              (0, i.jsx)(w.Dr, {
                                  onClick: C,
                                  icon: (0, i.jsx)(K.Icon, { variant: 'playLast', size: 'xxs' }),
                                  disabled: !s.isAuthorized,
                                  ...(0, r.Am)(r.Kq.album.ALBUM_CONTEXT_MENU_PLAY_LAST_BUTTON),
                                  children: (0, i.jsx)(ea.A, { id: 'play-queue.play-last' }),
                              }),
                          ],
                      })
                    : null;
            });
            var ed = a(88762),
                ec = a.n(ed);
            let eu = (0, n.PA)(() => {
                var e, t, a, n, l, c, u, b;
                let j = (0, o.useRef)(null),
                    h = (0, o.useRef)(0),
                    A = (0, v.wZZ)(),
                    { notify: x } = (0, v.lkh)(),
                    k = (0, N.Q$)(),
                    {
                        album: C,
                        albumCPA: M,
                        experiments: U,
                        sonataState: D,
                        settings: { isMobile: K },
                        track: { isTrackPage: w },
                    } = (0, v.Pjs)(),
                    { from: F, utmLink: H } = (0, v.fyy)({ pageId: v._Q$.ALBUM, blockId: v.UfI.ALBUM, contextType: T.K.Album, contextId: C.id }),
                    { formatMessage: Y } = (0, f.A)(),
                    [V, z] = (0, o.useState)(!1),
                    Q = (0, E.c)({ album: C }),
                    $ = w ? 'div' : 'h2',
                    G = C.items.length || S.k,
                    { isCPAEnabled: Z } = (0, v.IQF)(),
                    W = !Z || (Z && !M.cpa),
                    ee = U.checkExperiment(v.zal.WebNextAlbumDonationButton, 'on') && C.hasDonations,
                    ea = ee && K,
                    { showBuySubscriptionModal: ei } = (0, v.qBP)(),
                    en = M.isPlusCPAPlayerBarEnabled(C.id, null == (e = C.meta) ? void 0 : e.isNonMusic) && K;
                (0, o.useEffect)(
                    () => () => {
                        h.current = 0;
                    },
                    [C],
                ),
                    (0, o.useEffect)(() => {
                        en && D.status === I.MT.ENDED && ei();
                    }, [D.status, ei, en]),
                    (0, o.useEffect)(() => {
                        var e, t;
                        if ((null == (e = C.otherArtistAlbums) ? void 0 : e.isRejected) || (null == (t = C.latestGenreAlbums) ? void 0 : t.isRejected)) {
                            if (!h || h.current > 0) return;
                            x((0, i.jsx)(g.hT, { error: Y({ id: 'album-errors.error-during-loading-similar-albums' }) }), { containerId: v.uQT.ERROR }), h.current++;
                        }
                    }, [null == (t = C.latestGenreAlbums) ? void 0 : t.isRejected, null == (a = C.otherArtistAlbums) ? void 0 : a.isRejected, Y, x]),
                    (0, o.useEffect)(() => {
                        C.isResolved && C.hasOtherAlbumVersions && z(!0);
                    }, [C.hasOtherAlbumVersions, C.isResolved]);
                let el = (0, o.useCallback)(() => {
                        let e = j.current;
                        null == e || e.scrollIntoView({ behavior: 'smooth' });
                    }, []),
                    eo = (0, d.L)(() => {
                        var e, t, a, n, l;
                        if (!ee || !(null == (e = C.donations) ? void 0 : e.items)) return;
                        if (Number(null == (a = C.meta) || null == (t = a.artists) ? void 0 : t.length) > 1)
                            return (0, i.jsx)(v.FoH, {
                                blockType: s.LA.Donations,
                                blockId: v.UfI.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, i.jsx)(v.Bki, {
                                    mainObjectId: String(null == (l = C.meta) ? void 0 : l.id),
                                    mainObjectType: s.ky.Album,
                                    children: (0, i.jsx)(q, {}),
                                }),
                            });
                        let [o] = C.donations.items;
                        if (o)
                            return (0, i.jsx)(v.FoH, {
                                blockType: s.LA.Donations,
                                blockId: v.UfI.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, i.jsx)(v.Bki, {
                                    objectType: s.ky.Donation,
                                    objectId: o.artist.id,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: 1,
                                    mainObjectId: String(null == (n = C.meta) ? void 0 : n.id),
                                    mainObjectType: s.ky.Album,
                                    children: (0, i.jsx)(R, { url: k(o.url) }),
                                }),
                            });
                    }),
                    es = (0, o.useMemo)(
                        () =>
                            C.isLoading || !C.meta || C.isRejected
                                ? (0, i.jsx)(L.c6, { className: y().header, isActive: !0 })
                                : (0, i.jsx)(L.c0, {
                                      album: C.meta,
                                      donationButton: eo,
                                      className: y().header,
                                      onVersionClick: V ? el : void 0,
                                      contextMenuChildren: (0, i.jsx)(er, { albumId: C.meta.id, albumTitle: C.meta.title, albumCoverUri: C.meta.coverUri }),
                                  }),
                        [C.isLoading, C.meta, C.isRejected, eo, V, el],
                    ),
                    ed = (0, B.j)({
                        element: (e, t) => {
                            var a;
                            if (e.data && e.type !== p.rU.TEXT)
                                return (0, i.jsx)(v.Bki, {
                                    objectType: s.ky.Track,
                                    objectId: String(e.data.id),
                                    objectPosX: 1,
                                    objectPosY: t + 1,
                                    objectsCount: G,
                                    children: (0, i.jsx)(O.FR, {
                                        withLightning: e.isBest && !e.data.isRemoved,
                                        track: e.data,
                                        position: e.position,
                                        albumArtists: null == C || null == (a = C.meta) ? void 0 : a.artists,
                                        playContextParams: A(t, {
                                            contextData: { type: T.K.Album, meta: C.contextMeta, from: F, utmLink: H },
                                            queueParams: { index: e.positionInContext, entityId: e.data.id },
                                            loadContextMeta: !0,
                                            entitiesData: D.unloadedEntitiesDataFromModels,
                                        }),
                                    }),
                                });
                        },
                        album: C,
                    }),
                    eu = (0, d.L)(() => {
                        var e, t, a, n, l, o, d, c, u, b, p, g;
                        let h = [],
                            A = 4;
                        return (
                            ea &&
                                (null == (e = C.donations) ? void 0 : e.items) &&
                                (h.push(
                                    (0, i.jsx)(
                                        v.FoH,
                                        {
                                            blockType: s.LA.Donations,
                                            blockId: v.UfI.DONATY,
                                            blockPosX: 1,
                                            blockPosY: A,
                                            children: (0, i.jsx)(X, {
                                                headingVariant: $,
                                                className: ec().carouselContainer,
                                                headerClassName: (0, _.$)(ec().carouselBlock, ec().carouselBlockHeader),
                                                containerClassName: ec().carouselBlock,
                                            }),
                                        },
                                        s.LA.Donations,
                                    ),
                                ),
                                A++),
                            C.hasSimilarEntities &&
                                (h.push(
                                    (0, i.jsx)(
                                        v.FoH,
                                        {
                                            blockType: s.LA.SimilarEntities,
                                            blockId: s.LA.SimilarEntities,
                                            blockPosX: 1,
                                            blockPosY: A,
                                            objectsCount: null == (a = C.similarEntities.data) ? void 0 : a.items.length,
                                            mainObjectId: String(null == (n = C.meta) ? void 0 : n.id),
                                            mainObjectType: s.ky.Album,
                                            children: (0, i.jsx)(P.Qh, {
                                                ...C.similarEntities,
                                                meta: { title: Y({ id: 'page.similar-entities-block-title' }) },
                                                headingVariant: $,
                                                className: ec().carouselContainer,
                                                headerClassName: (0, _.$)(ec().carouselBlock, ec().carouselBlockHeader),
                                                containerClassName: ec().carouselBlock,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                setHasSentAnalyticsOnLoaded: C.similarEntities.setHasSentAnalyticsOnLoaded,
                                            }),
                                        },
                                        s.LA.SimilarEntities,
                                    ),
                                ),
                                A++),
                            C.hasOtherAlbumVersions &&
                                (null == (t = C.otherAlbumVersions) ? void 0 : t.length) &&
                                (h.push(
                                    (0, i.jsx)(
                                        v.FoH,
                                        {
                                            blockType: s.LA.OtherAlbumVersions,
                                            blockId: s.LA.OtherAlbumVersions,
                                            blockPosX: 1,
                                            blockPosY: A,
                                            objectsCount: null == (l = C.otherAlbumVersions) ? void 0 : l.length,
                                            mainObjectId: String(null == (o = C.meta) ? void 0 : o.id),
                                            mainObjectType: s.ky.Album,
                                            children: (0, i.jsx)(m.pZ, {
                                                isShimmerVisible: C.isLoading,
                                                isShimmerActive: !0,
                                                className: ec().carouselContainer,
                                                headerClassName: (0, _.$)(ec().carouselBlock, ec().carouselBlockHeader),
                                                containerClassName: ec().carouselBlock,
                                                title: Y({ id: 'entity-names.other-album-versions' }),
                                                albums: C.otherAlbumVersions,
                                                headingRef: j,
                                                headingVariant: $,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                ...(0, r.Am)(r.Xk.album.OTHER_VERSIONS_CAROUSEL),
                                            }),
                                        },
                                        s.LA.OtherAlbumVersions,
                                    ),
                                ),
                                A++),
                            C.hasLatestGenreAlbums &&
                                W &&
                                (h.push(
                                    (0, i.jsx)(
                                        v.FoH,
                                        {
                                            blockType: s.LA.GenreAlbums,
                                            blockId: s.LA.GenreAlbums,
                                            blockPosX: 1,
                                            blockPosY: A,
                                            objectsCount: null == (d = C.latestGenreAlbums) ? void 0 : d.items.length,
                                            mainObjectId: String(null == (c = C.meta) ? void 0 : c.id),
                                            mainObjectType: s.ky.Album,
                                            children: (0, i.jsx)(m.pZ, {
                                                isShimmerVisible: C.isLatestGenreAlbumsLoading,
                                                isShimmerActive: !0,
                                                className: ec().carouselContainer,
                                                headerClassName: (0, _.$)(ec().carouselBlock, ec().carouselBlockHeader),
                                                containerClassName: ec().carouselBlock,
                                                title: Y({ id: 'entity-names.new-albums-in-genre' }),
                                                albums: null == (u = C.latestGenreAlbums) ? void 0 : u.items,
                                                headingVariant: $,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                ...(0, r.Am)(r.Xk.album.GENRE_ALBUMS_CAROUSEL),
                                            }),
                                        },
                                        s.LA.GenreAlbums,
                                    ),
                                ),
                                A++),
                            C.hasOtherArtistAlbums &&
                                (h.push(
                                    (0, i.jsx)(
                                        v.FoH,
                                        {
                                            blockType: s.LA.OtherAlbums,
                                            blockId: s.LA.OtherAlbums,
                                            blockPosX: 1,
                                            blockPosY: A,
                                            objectsCount: null == (b = C.otherArtistAlbums) ? void 0 : b.items.length,
                                            mainObjectId: String(null == (p = C.meta) ? void 0 : p.id),
                                            mainObjectType: s.ky.Album,
                                            children: (0, i.jsx)(m.pZ, {
                                                isShimmerVisible: C.isOtherArtistAlbumsLoading,
                                                isShimmerActive: !0,
                                                className: ec().carouselContainer,
                                                headerClassName: (0, _.$)(ec().carouselBlock, ec().carouselBlockHeader),
                                                containerClassName: ec().carouselBlock,
                                                title: Y({ id: 'entity-names.other-albums-of-artist' }),
                                                albums: null == (g = C.otherArtistAlbums) ? void 0 : g.items,
                                                headingVariant: $,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                ...(0, r.Am)(r.Xk.album.OTHER_ARTIST_ALBUMS_CAROUSEL),
                                            }),
                                        },
                                        s.LA.OtherAlbums,
                                    ),
                                ),
                                A++),
                            h
                        );
                    });
                return (
                    C.id && C.isResolved && C.similarEntities.isNeededToLoad && C.isSimilarEntitiesEnabled && (0, o.use)(C.getSimilarEntities({ albumId: C.id })),
                    (0, i.jsxs)(v.hjC, {
                        tabId: '',
                        tabPos: 0,
                        isTabSelectedByDefault: !1,
                        children: [
                            (0, i.jsx)(v.FoH, {
                                blockType: s.LA.Header,
                                blockId: s.LA.Header,
                                blockPosX: 1,
                                blockPosY: 1,
                                mainObjectId: String(null == (n = C.meta) ? void 0 : n.id),
                                mainObjectType: s.ky.Album,
                                objectsCount: 1,
                                children: es,
                            }),
                            (0, i.jsx)(v.FoH, {
                                blockType: s.LA.Tracks,
                                blockId: s.LA.Tracks,
                                blockPosX: 1,
                                blockPosY: 2,
                                objectsCount: G,
                                mainObjectId: String(null == (l = C.meta) ? void 0 : l.id),
                                mainObjectType: s.ky.Album,
                                children: (0, i.jsx)(J.F, {
                                    count: G,
                                    itemContentCallback: ed,
                                    getDataByRange: Q,
                                    ariaLabel: Y({ id: 'entity-names.albums-tracks-list' }, { albumName: (null == (c = C.meta) ? void 0 : c.title) || '' }),
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: y().footerContainer,
                                children: [
                                    C.shouldShowLabel &&
                                        (0, i.jsx)(v.FoH, {
                                            blockType: s.LA.Labels,
                                            blockId: s.LA.Labels,
                                            blockPosX: 1,
                                            blockPosY: 3,
                                            objectsCount: null == (u = C.labels) ? void 0 : u.length,
                                            mainObjectId: String(null == (b = C.meta) ? void 0 : b.id),
                                            mainObjectType: s.ky.Album,
                                            children: (0, i.jsx)(et, { album: C, size: 's', weight: 'normal', className: ec().label }),
                                        }),
                                    (0, i.jsxs)('div', { className: ec().carouselBlocks, children: [eu, ' '] }),
                                    (0, i.jsx)(g.A, { children: (0, i.jsx)(g.wi, { className: y().footer }) }),
                                ],
                            }),
                        ],
                    })
                );
            });
            var em = a(77881),
                eb = a(51321),
                ep = a(8593),
                ev = a(54672),
                eg = a(32600),
                ej = a.n(eg);
            let eh = (0, n.PA)(() => {
                    var e, t, a, n, r, c, u, m, b, j, h, A, k, C, _, I, P;
                    let N = (0, o.useRef)(0),
                        M = (0, o.useRef)(null),
                        R = (0, v.wZZ)(),
                        { album: U, experiments: D, sonataState: X, slides: K } = (0, v.Pjs)(),
                        w = (null == (e = U.meta) ? void 0 : e.isAudiobook) ? v._Q$.AUDIOBOOK : v._Q$.PODCAST,
                        F = (null == (t = U.meta) ? void 0 : t.isAudiobook) ? v.UfI.AUDIOBOOK : v.UfI.PODCAST,
                        { from: H, utmLink: Y } = (0, v.fyy)({ pageId: w, blockId: F, contextType: T.K.Album, contextId: U.id }),
                        { href: V } = (0, v.uvd)('/slides/podcast/:podcastId', { params: { podcastId: null != (P = U.id) ? P : '' } }),
                        z = (0, v.ZpR)(V),
                        Q = (0, o.useId)(),
                        { formatMessage: G } = (0, f.A)(),
                        Z = (0, l.useSearchParams)(),
                        W = (0, v.XJ9)(),
                        q = D.checkExperiment(v.zal.WebNextRewind2024, 'on') && (null == (a = U.meta) ? void 0 : a.isPodcast),
                        ee = (0, o.useMemo)(() => {
                            let e = Z.get(v.K3F.ACTIVE_TAB),
                                t = S.n.findIndex((t) => t === e);
                            return t >= 0 ? t : 0;
                        }, [Z]),
                        ei = (0, eb.useTabsState)(ee),
                        [en, el] = (0, o.useState)(S.n[ei.value]),
                        eo = (0, E.c)({ album: U });
                    (0, o.useEffect)(
                        () => () => {
                            (N.current = 0), K.resetPodcast();
                        },
                        [U, K],
                    );
                    let es = (0, o.useMemo)(() => {
                            var e, t;
                            let a = q && K.podcastSlidesLoadingState === v.GuX.RESOLVE && !!(null == (e = K.podcastItems) ? void 0 : e.length),
                                n = { '--action-button-color-background': (0, L.Wm)(null == (t = U.meta) ? void 0 : t.averageColor) };
                            return a
                                ? (0, i.jsx)(em.$, {
                                      className: ej().rewindControl,
                                      style: n,
                                      withRipple: !1,
                                      withHover: !1,
                                      radius: 'xxxl',
                                      size: 's',
                                      color: 'primary',
                                      onClick: z,
                                      variant: 'default',
                                      role: 'link',
                                      children: (0, i.jsx)($.Caption, { variant: 'span', lineClamp: 1, children: (0, i.jsx)(ea.A, { id: 'rewind.button-title' }) }),
                                  })
                                : null;
                        }, [null == (n = U.meta) ? void 0 : n.averageColor, q, z, null == (r = K.podcastItems) ? void 0 : r.length, K.podcastSlidesLoadingState]),
                        ed = (0, o.useMemo)(() => {
                            var e, t;
                            return (null == (e = U.meta) ? void 0 : e.isFairyTale)
                                ? { about: G({ id: 'non-music.fairytale-tab-about' }), 'track-list': G({ id: 'non-music.audiobook-tab-tracks' }) }
                                : (null == (t = U.meta) ? void 0 : t.isAudiobook)
                                  ? { about: G({ id: 'non-music.audiobook-tab-about' }), 'track-list': G({ id: 'non-music.audiobook-tab-tracks' }) }
                                  : { about: G({ id: 'podcast.tab-about' }), 'track-list': G({ id: 'podcast.tab-tracks' }, { value: U.tracks.length }) };
                        }, [null == (c = U.meta) ? void 0 : c.isAudiobook, null == (u = U.meta) ? void 0 : u.isFairyTale, U.tracks.length, G]),
                        ec = (0, o.useMemo)(
                            () => (e) => {
                                var t;
                                if (!ei.onTabChange || e === ei.value) return;
                                ei.onTabChange(e);
                                let a = null != (t = S.n[e]) ? t : ev.O.ABOUT;
                                el(a);
                                let i = (0, v.bJ)(v.K3F.ACTIVE_TAB, a);
                                i && W(i);
                            },
                            [ei, W],
                        ),
                        eu = (e, t) =>
                            (0, i.jsxs)('div', {
                                className: ej().infoBlock,
                                children: [
                                    (0, i.jsx)($.Caption, { variant: 'span', type: 'entity', size: 'm', className: ej().infoTitle, children: e }),
                                    (0, i.jsx)($.Caption, { variant: 'span', type: 'entity', size: 'm', children: t }),
                                ],
                            }),
                        eg = ((e) => {
                            let { formatMessage: t } = (0, f.A)(),
                                { minutes: a, hours: i } = (0, v.VEg)(e),
                                n = '';
                            return (
                                i > 0 && (n += t({ id: 'time.hours' }, { hours: i })),
                                a > 0 && ((n += n.length > 0 ? ' ' : ''), (n += t({ id: 'time.minutes-left' }, { minutes: a }))),
                                n
                            );
                        })((null == (m = U.meta) ? void 0 : m.durationSec) || 0),
                        eh = (0, o.useMemo)(() => {
                            var e, t, a, n, l, o, s, r, d, c, u, m, b, p, v;
                            let g = Number(null == (e = U.labels) ? void 0 : e.length) > 1 ? G({ id: 'podcast.publishers-title' }) : G({ id: 'podcast.publisher-title' }),
                                j = null == (t = U.labels) ? void 0 : t.map((e) => e.name).join(', '),
                                h = G({ id: 'podcast.age-limit' }),
                                A =
                                    Number(null == (n = U.meta) || null == (a = n.artists) ? void 0 : a.length) > 1
                                        ? G({ id: 'non-music.audiobook-artists' })
                                        : G({ id: 'non-music.audiobook-artist' }),
                                k = null == (o = U.meta) || null == (l = o.artists) ? void 0 : l.map((e) => e.name).join(', '),
                                C =
                                    (null == (r = U.meta) || null == (s = r.artists) ? void 0 : s.length) ||
                                    (null == (d = U.meta) ? void 0 : d.durationSec) ||
                                    (null == (c = U.labels) ? void 0 : c.length) ||
                                    U.isExplicit,
                                _ = k && eu(''.concat(A, ':'), String(k)),
                                f = (null == (u = U.meta) ? void 0 : u.durationSec) && eu(''.concat(G({ id: 'time.duration' }), ':'), eg),
                                T = j && eu(''.concat(g, ':'), String(j)),
                                I = eu(''.concat(h, ':'), '18+'),
                                P = U.shouldShowLabel ? (0, i.jsx)(et, { album: U, size: 'm', weight: 'medium', className: ej().label }) : T;
                            return (0, i.jsx)(eb.TabPanel, {
                                name: 0,
                                value: ei.value,
                                elementId: Q,
                                children: (0, i.jsxs)('div', {
                                    className: ej().contentAbout,
                                    children: [
                                        U.description &&
                                            !!(null == (m = U.description) ? void 0 : m.length) &&
                                            (0, i.jsx)($.Caption, {
                                                variant: 'div',
                                                type: 'entity',
                                                size: 'm',
                                                className: y().text,
                                                children: (0, i.jsx)('span', { dangerouslySetInnerHTML: { __html: (0, x.sanitizeDOM)(U.description) } }),
                                            }),
                                        C &&
                                            (0, i.jsxs)('div', {
                                                className: y().text,
                                                children: [
                                                    !!(null == (p = U.meta) || null == (b = p.artists) ? void 0 : b.length) && _,
                                                    (null == (v = U.meta) ? void 0 : v.durationSec) && f,
                                                    P,
                                                    U.isExplicit && I,
                                                ],
                                            }),
                                    ],
                                }),
                            });
                        }, [U, G, eg, ei.value, Q]),
                        eA = (0, d.L)(() =>
                            U.isLoading || !U.meta || U.isRejected
                                ? (0, i.jsx)(L.c6, { className: y().header, isActive: !0 })
                                : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(L.hW, {
                                              album: U.meta,
                                              actionButton: es,
                                              className: y().header,
                                              contextMenuChildren: (0, i.jsx)(er, { albumId: U.meta.id, albumTitle: U.meta.title, albumCoverUri: U.meta.coverUri }),
                                          }),
                                          (0, i.jsx)(g.wI, {
                                              className: ej().tabCarousel,
                                              ...ei,
                                              onTabChange: ec,
                                              ref: M,
                                              children: S.n.map((e, t) => (0, i.jsx)(g.oz, { className: ej().tab, title: ed[e], value: t }, e)),
                                          }),
                                          eh,
                                      ],
                                  }),
                        );
                    (0, o.useEffect)(() => {
                        U.isResolved && (U.loadLastEpisodes(), U.getRelatedContent());
                    }, [U, U.isResolved, U.loadLastEpisodes, U.getRelatedContent]);
                    let ex = en === ev.O.ABOUT && (null == (b = U.meta) ? void 0 : b.isPodcast) && U.lastEpisodes.length > 0,
                        ek = en === ev.O.ABOUT && U.relatedContent && U.relatedContent.items && U.relatedContent.items.length > 0,
                        eC = (0, B.j)({
                            element: (e, t) => {
                                if (e.data && e.type !== p.rU.TEXT)
                                    return (0, i.jsx)(v.Bki, {
                                        objectType: s.ky.Track,
                                        objectId: String(e.data.id),
                                        objectPosX: 1,
                                        objectPosY: t + 1,
                                        objectsCount: U.items.length,
                                        children: (0, i.jsx)(O.Kd, {
                                            track: e.data,
                                            viewType: O.Df.ALBUM,
                                            position: e.position,
                                            playContextParams: R(t, {
                                                contextData: { type: T.K.Album, meta: U.contextMeta, from: H, utmLink: Y },
                                                queueParams: { index: e.positionInContext, entityId: e.data.id },
                                                loadContextMeta: !0,
                                                entitiesData: X.unloadedEntitiesDataFromModels,
                                            }),
                                        }),
                                    });
                            },
                            isNonMusic: !0,
                            album: U,
                        }),
                        ey = en === ev.O.ABOUT ? 0 : U.items.length || S.k,
                        e_ = (0, d.L)(() => {
                            if (en === ev.O.TRACKS) {
                                var e, t, a;
                                return (null == (e = U.meta) ? void 0 : e.isAudiobook)
                                    ? G({ id: 'non-music.audiobook-list' }, { albumName: (null == (a = U.meta) ? void 0 : a.title) || '' })
                                    : G({ id: 'podcast.episodes-list' }, { albumName: (null == (t = U.meta) ? void 0 : t.title) || '' });
                            }
                        }),
                        ef = (0, d.L)(() => {
                            var e;
                            return en !== ev.O.TRACKS
                                ? null
                                : (0, i.jsx)(v.FoH, {
                                      blockType: s.LA.Episodes,
                                      blockId: s.LA.Episodes,
                                      blockPosX: 1,
                                      blockPosY: 2,
                                      objectsCount: ey,
                                      mainObjectId: String(null == (e = U.meta) ? void 0 : e.id),
                                      mainObjectType: s.ky.Album,
                                      children: (0, i.jsx)(J.F, { count: ey, getDataByRange: eo, itemContentCallback: eC, role: 'tabpanel', ariaLabel: e_ }),
                                  });
                        }),
                        eT = q && K.podcastSlidesLoadingState === v.GuX.IDLE;
                    return (
                        'number' == typeof U.id && eT && (0, o.use)(K.getPodcastSlides({ podcastId: U.id })),
                        (0, i.jsxs)(v.hjC, {
                            tabId: null != en ? en : ev.O.ABOUT,
                            tabPos: ei.value + 1,
                            isTabSelectedByDefault: !1,
                            children: [
                                (0, i.jsx)(v.FoH, {
                                    blockType: s.LA.Header,
                                    blockId: s.LA.Header,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    mainObjectId: String(null == (j = U.meta) ? void 0 : j.id),
                                    mainObjectType: s.ky.Podcast,
                                    objectsCount: 1,
                                    children: eA,
                                }),
                                ef,
                                (0, i.jsxs)('div', {
                                    className: y().footerContainer,
                                    children: [
                                        ex &&
                                            (0, i.jsx)(v.FoH, {
                                                blockType: s.LA.LatestEpisodes,
                                                blockId: s.LA.LatestEpisodes,
                                                blockPosX: 1,
                                                blockPosY: 2,
                                                objectsCount: U.lastEpisodes.length,
                                                mainObjectId: String(null == (h = U.meta) ? void 0 : h.id),
                                                mainObjectType: null == (A = U.meta) ? void 0 : A.mainObjectType,
                                                children: (0, i.jsx)(ep.ro, { className: ej().lastEpisodes }),
                                            }),
                                        ek &&
                                            (0, i.jsx)(v.FoH, {
                                                blockType: s.LA.Podcasts,
                                                blockId: s.LA.Podcasts,
                                                blockPosX: 1,
                                                blockPosY: 3,
                                                objectsCount: null == (C = U.relatedContent) || null == (k = C.items) ? void 0 : k.length,
                                                mainObjectId: String(null == (_ = U.meta) ? void 0 : _.id),
                                                mainObjectType: null == (I = U.meta) ? void 0 : I.mainObjectType,
                                                children: (0, i.jsx)(ep.ZM, { isShimmerVisible: U.isRelatedContentLoading, isShimmerActive: !0 }),
                                            }),
                                        (0, i.jsx)(g.A, { children: (0, i.jsx)(g.wi, { className: y().footer }) }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                eA = (0, n.PA)((e) => {
                    var t, a, n, x, C, _, f, T;
                    let { albumId: I, trackId: P, preloadedAlbum: L, preloadedCpa: N } = e,
                        { contentScrollRef: O, setContentScrollRef: S } = (0, v.gKY)(),
                        E = (0, l.useSearchParams)(),
                        B = (0, m.yb)({ searchParams: Object.fromEntries(E.entries()) }),
                        { album: M, disclaimerModalState: R, track: U, sonataState: D, albumCPA: X } = (0, v.Pjs)(),
                        { checkIsValidClid: K, setClidToQuery: w, deleteClidFromQuery: F } = (0, v.IQF)(),
                        H = (0, v.ytd)(null == (t = M.meta) ? void 0 : t.averageColor),
                        { headerStyle: Y } = (0, b.QZ)(H),
                        V = (0, v.l$t)({ mainObjectType: null != (T = null == (a = M.meta) ? void 0 : a.mainObjectType) ? T : s.ky.Album }),
                        { deprecationUrl: z, shouldRedirect: Q } = (0, j.W)({
                            albumId: I,
                            deprecationTargetAlbumId: M.deprecationTargetAlbumId,
                            trackId: P,
                            realId: (null == (n = U.meta) ? void 0 : n.id) === P ? (null == (x = U.meta) ? void 0 : x.realId) : void 0,
                            searchParams: E,
                        }),
                        $ = (0, p.cp)({ album: M.meta, shouldHistoryBack: !0 }),
                        G = !!(null == (C = M.meta) ? void 0 : C.isNonMusic);
                    (0, v.ACS)(),
                        ((e) => {
                            var t;
                            let { albumId: a, trackId: i, isNonMusic: n } = e,
                                { setDeeplink: l } = null != (t = (0, v.P7Q)()) ? t : {};
                            (0, o.useEffect)(() => {
                                if (i) {
                                    let e = n ? void 0 : { playTrack: i, openPlayer: !0, lyricsMode: !0 },
                                        { href: t } = (0, v.uvd)('/album/:albumId/track/:trackId', { params: { albumId: a, trackId: i }, query: e });
                                    null == l || l(t);
                                } else {
                                    let { href: e } = (0, v.uvd)('/album/:albumId', { params: { albumId: a } });
                                    null == l || l(e);
                                }
                                return () => {
                                    null == l || l(null);
                                };
                            }, [a, n, l, i]);
                        })({ albumId: I, trackId: P, isNonMusic: G }),
                        (0, o.useEffect)(() => {
                            var e;
                            (null == (e = M.meta) ? void 0 : e.isUnsafeLegal) && $();
                        }, [null == (_ = M.meta) ? void 0 : _.isUnsafeLegal, $]),
                        (0, o.useLayoutEffect)(
                            () => (
                                P && I && U.open({ trackId: P, albumId: Number(I) }),
                                () => {
                                    U.reset();
                                }
                            ),
                            [I, P, U],
                        ),
                        (0, o.useEffect)(() => {
                            K(X.cpa, Number(I)) || F();
                        }, [K, I, X.cpa, F]),
                        (0, o.useEffect)(
                            () => (
                                M.id && M.id !== Number(I) && (M.reset(D), F()),
                                () => {
                                    M.reset(D), F();
                                }
                            ),
                            [M, I, D, F, X],
                        ),
                        (0, v.Jzs)(M.isResolved),
                        (0, h.h)(M, U.isOpened, P),
                        (0, o.useEffect)(
                            () => (
                                V(!0),
                                () => {
                                    V(!1);
                                }
                            ),
                            [I, V],
                        );
                    let Z = (0, d.L)(() => (G ? (0, i.jsx)(eh, {}) : (0, i.jsx)(eu, {}))),
                        W = [];
                    return (I &&
                        M.isNeededToLoad &&
                        (W.push(M.getData({ albumId: Number(I), resumeStream: !1, preloadedAlbum: L, sonataState: D }), M.getDonations({ albumId: Number(I) })),
                        (B || N) && W.push(X.getCpa({ albumId: Number(I), preloadedCpa: N }))),
                    W.length && (0, o.use)(Promise.allSettled(W)),
                    (0, o.useEffect)(() => {
                        X.cpa && M.id && w(X.cpa, M.id);
                    }, [X.cpa, M.id, w]),
                    M.isNotFound && (0, l.notFound)(),
                    Q && (0, l.redirect)(z),
                    (0, A.Y)({ album: M }),
                    M.isCacheNotFound)
                        ? (0, i.jsx)(u.m, {})
                        : (null == (f = M.meta) ? void 0 : f.isLegalRejected)
                          ? (0, i.jsx)(g.MW, { modalState: R })
                          : (0, i.jsx)(v.pVJ, {
                                pageAlbumId: Number(I),
                                children: (0, i.jsx)(v.jPc, {
                                    children: (0, i.jsxs)(b.hO, {
                                        scrollElement: O,
                                        children: [
                                            (0, i.jsx)(g.Y9, {}),
                                            (0, i.jsxs)(c.C, {
                                                scrollableContainerRef: S,
                                                className: y().root,
                                                containerClassName: y().content,
                                                scrollContentClassName: y().scrollContent,
                                                ...(0, r.Am)(G ? r.Xk.album.NON_MUSIC_ALBUM_PAGE : r.Xk.album.ALBUM_PAGE),
                                                children: [(0, i.jsx)('div', { className: y().averageColorBackground, style: Y }), Z, (0, i.jsx)(k, { album: M })],
                                            }),
                                        ],
                                    }),
                                }),
                            });
                }),
                ex = (0, n.PA)((e) => (0, i.jsx)(v.nVz, { pageId: v._Q$.ALBUM, pageEntityId: e.albumId, children: (0, i.jsx)(eA, { ...e }) }));
        },
        8593: (e, t, a) => {
            'use strict';
            a.d(t, { ro: () => b.LastEpisodes, ZM: () => p.RelatedContent, N3: () => l, PX: () => m });
            var i = a(93064),
                n = a(80156);
            let l = i.gK.model('RelatedContentItem', { id: i.gK.string, type: i.gK.string, title: i.gK.string, albums: i.gK.array(n.JC) });
            var o = a(8075),
                s = a(21365),
                r = a(46423),
                d = a(26433);
            let c = i.gK
                    .compose(
                        i.gK.model('VolumeItemTrack', {
                            type: i.gK.maybe(i.gK.enumeration(Object.values(o.S))),
                            id: i.gK.union(i.gK.string, i.gK.number),
                            data: i.gK.maybeNull(s.vj),
                            position: i.gK.maybe(i.gK.number),
                            positionInContext: i.gK.number,
                            isBest: i.gK.maybe(i.gK.boolean),
                            hasEverFinished: i.gK.maybe(i.gK.boolean),
                        }),
                        d.XT,
                    )
                    .actions((e) => ({
                        updateEverFinished: (t) => {
                            e.hasEverFinished = t;
                        },
                    }))
                    .named('VolumeItemTrack'),
                u = i.gK.compose(i.gK.model('VolumeItemText', { type: i.gK.literal(r.rU.TEXT), data: i.gK.maybeNull(i.gK.number) }), d.XT),
                m = i.gK.union(u, c);
            var b = a(32928),
                p = a(80453);
        },
        9897: (e) => {
            e.exports = { popover: 'AlbumDonationMenu_popover__Fswfa' };
        },
        10612: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => b });
            var i = a(54486),
                n = a(28303),
                l = a(61910),
                o = a(31500),
                s = a(67648),
                r = a(24188),
                d = a(83252),
                c = a(26273),
                u = a.n(c);
            let m = (e) => {
                    let { item: t, itemContentCallback: a, resizeObserver: n, scrollMargin: o } = e,
                        [r, d] = (0, s.d)();
                    (0, l.useEffect)(
                        () => (
                            r && n && n.observe(r),
                            () => {
                                r && n && n.unobserve(r);
                            }
                        ),
                        [r, n],
                    );
                    let c = { transform: 'translate3d(0, '.concat(t.start - o, 'px, 0)') };
                    return (0, i.jsx)('div', { 'data-index': t.index, className: u().virtualItem, ref: d, style: c, children: a(t.index) }, t.key);
                },
                b = (0, n.PA)((e) => {
                    let { count: t, getDataByRange: a, itemContentCallback: n, role: c = 'region', ariaLabel: b } = e,
                        p = (0, d.fBs)(),
                        [v, g] = (0, s.d)(),
                        { virtualizer: j, resizeObserver: h } = (0, r.rA)({ count: t, getEstimateSize: () => 56, containerRef: v });
                    (0, l.useEffect)(() => {
                        p();
                    }, [p]),
                        (0, l.useEffect)(() => {
                            !j.isScrolling && j.range && a(j.range);
                        }, [a, j.isScrolling, j.range]);
                    let A = j.getTotalSize(),
                        x = j.getVirtualItems();
                    return (0, i.jsx)('div', {
                        className: u().virtualScroll,
                        style: { height: ''.concat(A, 'px') },
                        ref: g,
                        role: c,
                        'aria-label': b,
                        ...(0, o.Am)(o.S7.TRACK_LIST, !0),
                        children: x.map((e) => (0, i.jsx)(m, { item: e, itemContentCallback: n, resizeObserver: h, scrollMargin: j.options.scrollMargin }, e.key)),
                    });
                });
        },
        17930: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => x });
            var i = a(54486),
                n = a(43426),
                l = a(8075),
                o = a(46423),
                s = a(83252),
                r = a(50420),
                d = a(80585),
                c = (function (e) {
                    return (e.TRACK = 'TRACK'), (e.TEXT = 'TEXT'), e;
                })({}),
                u = a(22905),
                m = a.n(u);
            let b = (e) => {
                let { shimmerVariant: t, trackVariant: a = s.Xjt.ALBUM } = e;
                switch (t) {
                    case c.TRACK:
                        return (0, i.jsx)(d.DS, { isActive: !0, className: (0, r.$)({ [m().root]: a === s.Xjt.ALBUM }), variant: a });
                    case c.TEXT:
                        return (0, i.jsx)(d.nN, { className: m().root });
                }
            };
            var p = a(97800),
                v = a(26273),
                g = a.n(v),
                j = a(27073),
                h = a.n(j);
            let A = (e) => {
                    let { text: t } = e;
                    return (0, i.jsx)('div', { className: h().root, children: (0, i.jsx)(p.Heading, { variant: 'h2', className: g().text, children: t }) });
                },
                x = (e) => {
                    let { element: t, isNonMusic: a, album: r } = e,
                        { formatMessage: d } = (0, n.A)();
                    return (e) => {
                        var n;
                        let u = null == r || null == (n = r.items) ? void 0 : n[e];
                        if (
                            !u ||
                            !r.meta ||
                            r.isRejected ||
                            !((e) => !!e && 'object' == typeof e && (('type' in e && e.type === o.rU.TEXT) || ('id' in e && 'positionInContext' in e)))(u)
                        )
                            return (0, i.jsx)(b, { shimmerVariant: c.TRACK, trackVariant: s.Xjt.ALBUM });
                        if (!u.data && !u.isRejected)
                            switch (u.type) {
                                case o.rU.TEXT:
                                    return (0, i.jsx)(b, { shimmerVariant: c.TEXT });
                                case l.S.TRACK:
                                    return (0, i.jsx)(b, { shimmerVariant: c.TRACK, trackVariant: s.Xjt.ALBUM });
                                default:
                                    if (a) return (0, i.jsx)(b, { shimmerVariant: c.TRACK, trackVariant: s.Xjt.PLAYLIST });
                            }
                        return u.type !== o.rU.TEXT
                            ? t(u, e)
                            : a
                              ? (0, i.jsx)(A, { text: d({ id: 'entity-names.season-number' }, { number: u.data }) })
                              : (0, i.jsx)(A, { text: d({ id: 'entity-names.disk-number' }, { number: u.data }) });
                    };
                };
        },
        22905: (e) => {
            e.exports = { root: 'Shimmer_root__NvUMY' };
        },
        23970: (e) => {
            e.exports = {
                header: 'PromoLandingAlbumPageContent_header__olZnY',
                advert: 'PromoLandingAlbumPageContent_advert__V34EQ',
                footerContainer: 'PromoLandingAlbumPageContent_footerContainer__QiHrX',
                footer: 'PromoLandingAlbumPageContent_footer__ICBBF',
                contentBlocks: 'PromoLandingAlbumPageContent_contentBlocks__b18_R',
                donationBanner: 'PromoLandingAlbumPageContent_donationBanner__gvkEC',
                donationBannerTitle: 'PromoLandingAlbumPageContent_donationBannerTitle__FS9IZ',
                concertsBlockHeader: 'PromoLandingAlbumPageContent_concertsBlockHeader__RRhNC',
                concertsBlockContainer: 'PromoLandingAlbumPageContent_concertsBlockContainer__onkAq',
            };
        },
        25326: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => l, n: () => n });
            var i = a(54672);
            let n = [i.O.ABOUT, i.O.TRACKS],
                l = 10;
        },
        26273: (e) => {
            e.exports = {
                root: 'CommonAlbumPage_root__E8c_3',
                content: 'CommonAlbumPage_content__vRSnu',
                scrollContent: 'CommonAlbumPage_scrollContent__0XS83',
                header: 'CommonAlbumPage_header__jS_be',
                text: 'CommonAlbumPage_text__kqBSb',
                footerContainer: 'CommonAlbumPage_footerContainer__JvjKN',
                footer: 'CommonAlbumPage_footer__dBXP4',
                averageColorBackground: 'CommonAlbumPage_averageColorBackground__hs1_3',
                virtualScroll: 'CommonAlbumPage_virtualScroll__Sc_gs',
                virtualItem: 'CommonAlbumPage_virtualItem__yhvPB',
                label: 'CommonAlbumPage_label__TErtx',
                labelLinkContainer: 'CommonAlbumPage_labelLinkContainer__fk6OB',
                labelLink: 'CommonAlbumPage_labelLink__v4EnM',
                important: 'CommonAlbumPage_important__GXaZH',
            };
        },
        26478: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => o });
            var i = a(61910),
                n = a(8075),
                l = a(83252);
            let o = (e) => {
                let { album: t } = e;
                return (0, i.useCallback)(
                    (e) => {
                        let a = [];
                        for (let i = e.startIndex; i <= e.endIndex; i++) {
                            let e = t.items[i];
                            (null == e ? void 0 : e.type) === n.S.TRACK && (null == e ? void 0 : e.loadingState) === l.GuX.IDLE && a.push(e.id);
                        }
                        a.length && t.getTracks({ trackIds: a });
                    },
                    [t],
                );
            };
        },
        27073: (e) => {
            e.exports = { root: 'TextVolume_root__wxSaK' };
        },
        32600: (e) => {
            e.exports = {
                tabCarousel: 'NonMusicContent_tabCarousel__EBHWC',
                tab: 'NonMusicContent_tab__LIh_U',
                contentAbout: 'NonMusicContent_contentAbout__BMIP5',
                infoBlock: 'NonMusicContent_infoBlock__IyjXA',
                infoTitle: 'NonMusicContent_infoTitle__Wf9EC',
                lastEpisodes: 'NonMusicContent_lastEpisodes__Xa8Xp',
                rewindControl: 'NonMusicContent_rewindControl__7tncY',
                label: 'NonMusicContent_label__9GlIS',
            };
        },
        32928: (e, t, a) => {
            'use strict';
            a.d(t, { LastEpisodes: () => v });
            var i = a(54486),
                n = a(50420),
                l = a(28303),
                o = a(61910),
                s = a(43426),
                r = a(43350),
                d = a(63585),
                c = a(21365),
                u = a(83252),
                m = a(80585),
                b = a(51778),
                p = a.n(b);
            let v = (0, l.PA)((e) => {
                let { className: t, headingVariant: a = 'h2' } = e,
                    l = (0, u.fBs)(),
                    { formatMessage: b } = (0, s.A)(),
                    { album: v, sonataState: g } = (0, u.Pjs)();
                (0, o.useEffect)(() => {
                    l();
                }, [l]);
                let { from: j, utmLink: h } = (0, u.fyy)({ pageId: u._Q$.PODCAST, blockId: u.UfI.PODCAST, contextId: v.id, contextType: d.K.Album }),
                    A = (0, o.useMemo)(
                        () =>
                            v.lastEpisodes.map((e, t) =>
                                v.isResolved && e.data
                                    ? (0, i.jsx)(
                                          u.Bki,
                                          {
                                              objectType: r.ky.PodcastEpisode,
                                              objectId: String(e.data.id),
                                              objectPosX: 1,
                                              objectPosY: t + 1,
                                              objectsCount: v.lastEpisodes.length,
                                              children: (0, i.jsx)(c.Kd, {
                                                  track: e.data,
                                                  playContextParams: {
                                                      contextData: { type: d.K.Album, meta: v.contextMeta, from: j, utmLink: h },
                                                      queueParams: { index: e.positionInContext, entityId: e.data.id },
                                                      loadContextMeta: !0,
                                                      entitiesData: g.unloadedEntitiesDataFromModels,
                                                  },
                                              }),
                                          },
                                          e.data.id,
                                      )
                                    : (0, i.jsx)(m.DS, { isActive: !0, className: p().shimmerItem, variant: u.Xjt.ALBUM }, t),
                            ),
                        [v.lastEpisodes, v.isResolved, v.contextMeta, j, h, g.unloadedEntitiesDataFromModels],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(t, p().root),
                    children: [
                        (0, i.jsx)(m.Tw, { headingVariant: a, className: p().blockHeader, title: b({ id: 'entity-names.podcast-last-episodes' }) }),
                        (0, i.jsx)('div', { role: 'list', 'aria-label': b({ id: 'podcast.last-episodes-list' }), tabIndex: 0, children: A }),
                    ],
                });
            });
        },
        38981: (e) => {
            e.exports = { averageColorBackground: 'PromoLandingAlbumPage_averageColorBackground__QcQaQ' };
        },
        40238: (e) => {
            e.exports = { root: 'AlbumDonationMenuItem_root__Ajw_w', cover: 'AlbumDonationMenuItem_cover__Gg8_a', image: 'AlbumDonationMenuItem_image__AI5zU' };
        },
        44820: (e) => {
            e.exports = {
                root: 'PromoLandingExternalStreamings_root___QUMo',
                title: 'PromoLandingExternalStreamings_title__v6E19',
                list: 'PromoLandingExternalStreamings_list__zNDey',
            };
        },
        51778: (e) => {
            e.exports = { root: 'LastEpisodes_root__4JPKj', blockHeader: 'LastEpisodes_blockHeader__se7bd', shimmerItem: 'LastEpisodes_shimmerItem__Iirx5' };
        },
        54672: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => i });
            var i = (function (e) {
                return (e.ABOUT = 'about'), (e.TRACKS = 'track-list'), e;
            })({});
        },
        56053: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => s });
            var i = a(61910),
                n = a(80156),
                l = a(83252),
                o = a(70717);
            let s = (e, t, a) => {
                (0, i.useEffect)(() => {
                    let i = t && a;
                    if (!(null == e ? void 0 : e.meta) || e.isLoading || i) return;
                    let s = (0, n.fO)(e.meta);
                    t ||
                        (0, o.v)(s, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                            (0, l.jxB)(e);
                        });
                }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading, a, t]);
            };
        },
        57159: (e) => {
            e.exports = {
                root: 'ExternalStreamingCard_root__7XtH7',
                logo: 'ExternalStreamingCard_logo__NbEj3',
                logoImage: 'ExternalStreamingCard_logoImage__FCbdH',
                name: 'ExternalStreamingCard_name__QWiJe',
            };
        },
        64566: (e) => {
            e.exports = { root: 'RelatedContent_root__Dl1Nr', carousel: 'RelatedContent_carousel__pmv5c', header: 'RelatedContent_header__527S3' };
        },
        70717: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => s });
            var i = a(83252),
                n = a(15099);
            function l(e) {
                let { type: t, genre: a } = e;
                return [n._.AUDIOBOOK, n._.FAIRY_TALE].includes(null != t ? t : '') || ['audiobooksinenglish', 'fiction'].includes(null != a ? a : '');
            }
            function o(e) {
                let { albumType: t, messageFormatter: a } = e;
                switch (t) {
                    case n._.SINGLE:
                        return a({ id: 'metadata.single' });
                    case n._.PODCAST:
                        return a({ id: 'metadata.podcast' });
                    case n._.AUDIOBOOK:
                        return a({ id: 'metadata.audiobook' });
                    case n._.FAIRY_TALE:
                        return a({ id: 'metadata.fairy-tale' });
                    default:
                        return a({ id: 'metadata.album' });
                }
            }
            async function s(e, t) {
                var a, s, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let d = await (0, i.WGy)(t.locale),
                    c = (0, i.NsT)(e.title);
                return {
                    title: (function (e) {
                        let { albumMeta: t, messageFormatter: a } = e,
                            o = (0, i.j4K)(t.artists);
                        return l({ type: t.type, genre: t.genre })
                            ? o
                                ? a({ id: 'metadata.audiobook-title-with-artists' }, { albumTitle: t.title, artistsNames: o, artistsNamesCount: t.artists.length })
                                : a({ id: 'metadata.audiobook-title-without-artists' }, { albumTitle: t.title })
                            : t.type === n._.PODCAST
                              ? a({ id: 'metadata.podcast-title' }, { albumTitle: t.title })
                              : o
                                ? a({ id: 'metadata.album-title-with-artists' }, { albumTitle: t.title, artistsNames: o })
                                : a({ id: 'metadata.album-title-without-artists' }, { albumTitle: t.title });
                    })({ albumMeta: e, messageFormatter: d }),
                    description: (function (e) {
                        let { albumMeta: t, messageFormatter: a } = e,
                            o = (0, i.j4K)(t.artists);
                        return l({ type: t.type, genre: t.genre })
                            ? o
                                ? a({ id: 'metadata.audiobook-title-with-artists' }, { albumTitle: t.title, artistsNames: o, artistsNamesCount: t.artists.length })
                                : a({ id: 'metadata.audiobook-title-without-artists' }, { albumTitle: t.title })
                            : t.type === n._.PODCAST
                              ? a({ id: 'metadata.podcast-title' }, { albumTitle: t.title })
                              : o
                                ? a({ id: 'metadata.album-title-with-artists' }, { albumTitle: t.title, artistsNames: o })
                                : a({ id: 'metadata.album-title-without-artists' }, { albumTitle: t.title });
                    })({ albumMeta: e, messageFormatter: d }),
                    openGraph: (0, i.i$E)({
                        ogTitle: c,
                        ogDescription: (function (e) {
                            var t, a, s;
                            let { albumMeta: r, messageFormatter: d } = e,
                                c = (0, i.YFq)((0, i.j4K)(r.artists), 96, !1);
                            if (l({ type: r.type, genre: r.genre })) {
                                let { hours: e, minutes: a } = (0, i.VEg)(null != (t = r.durationSec) ? t : 0),
                                    n = d({ id: 'metadata.hours-and-minutes' }, { hours: e, minutes: a });
                                return [c, o({ albumType: r.type, messageFormatter: d }), n].join(' • ');
                            }
                            return r.type === n._.PODCAST
                                ? [
                                      (0, i.YFq)(null != (a = r.description) ? a : '', 96, !1),
                                      o({ albumType: r.type, messageFormatter: d }),
                                      d({ id: 'metadata.subscribers' }, { subscribers: null != (s = r.likesCount) ? s : 0 }),
                                  ].join(' • ')
                                : [c, o({ albumType: r.type, messageFormatter: d }), r.year].join(' • ');
                        })({ albumMeta: e, messageFormatter: d }),
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        ogImage: e.ogImage,
                        siteName: d({ id: 'metadata.yandex-music' }),
                        ogType: 'music.album',
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.APP, title: c, url: t.url, appName: d({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, i.X5i)({
                        additional: { ...t, url: null != (s = t.url) ? s : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: d({ id: 'metadata.yandex-music' }),
                    }),
                    other: { 'music:musician': (0, i.xdV)(e.artists, t.host) },
                    alternates: (0, i.SEs)('/album/:albumId', t.tld, { params: { albumId: e.id } }),
                };
            }
        },
        72880: (e, t, a) => {
            'use strict';
            a.d(t, { PromoLandingAlbumPage: () => ea });
            var i = a(54486),
                n = a(50420),
                l = a(28303),
                o = a(97396),
                s = a(61910),
                r = a(43350),
                d = a(31500),
                c = a(27510),
                u = a(85284),
                m = a(33276),
                b = a(91283),
                p = a(46423),
                v = a(83252),
                g = a(80585),
                j = a(56053),
                h = a(76048),
                A = a(26273),
                x = a.n(A),
                k = a(38981),
                C = a.n(k),
                y = a(43426),
                _ = a(63585),
                f = a(7981),
                T = a(21365),
                I = a(77217),
                P = a(25326),
                L = a(26478),
                N = a(17930),
                O = a(10612),
                S = a(23970),
                E = a.n(S),
                B = (function (e) {
                    return (e.TOP = 'TOP'), (e.BOTTOM = 'BOTTOM'), e;
                })({}),
                M = a(8817);
            let R = {
                    MOBILE: { TEST: { [B.BOTTOM]: 'R-A-14568769-4', [B.TOP]: 'R-A-14568769-3' }, PROD: { [B.BOTTOM]: 'R-A-14568769-2', [B.TOP]: 'R-A-14568769-1' } },
                    DESKTOP: { TEST: { [B.BOTTOM]: 'R-A-14568770-4', [B.TOP]: 'R-A-14568770-3' }, PROD: { [B.BOTTOM]: 'R-A-14568770-2', [B.TOP]: 'R-A-14568770-1' } },
                },
                U = (0, l.PA)((e) => {
                    let { variant: t, className: a } = e,
                        { formatMessage: n } = (0, y.A)(),
                        l = (0, v.UlF)(),
                        { productionBlockId: o, testBlockId: s } = ((e) => {
                            let {
                                settings: { isMobile: t },
                            } = (0, v.Pjs)();
                            return t
                                ? { productionBlockId: R.MOBILE.PROD[e], testBlockId: R.MOBILE.TEST[e] }
                                : { productionBlockId: R.DESKTOP.PROD[e], testBlockId: R.DESKTOP.TEST[e] };
                        })(t),
                        r = (0, M.c)(() => {
                            l.error('Cannot render promolanding advert banner', { productionBlockId: o, testBlockId: s });
                        });
                    return (0, i.jsx)('div', {
                        'aria-label': n({ id: 'advert.banner' }),
                        role: 'banner',
                        children: (0, i.jsx)(g.fJ, { isAsync: !1, onError: r, productionBlockId: o, testBlockId: s, className: a }),
                    });
                }),
                D = (e) => {
                    let { shouldPlaceAdvertOnBottom: t } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, n.$)(x().footerContainer, x().footer, E().footerContainer),
                        children: [t && (0, i.jsx)(U, { variant: B.BOTTOM, className: E().advert }), (0, i.jsx)(g.Z7, { className: E().footer })],
                    });
                };
            var X = a(17656);
            let K = (0, l.PA)(() => {
                    let { promolanding: e } = (0, v.Pjs)();
                    return e.isLoading || !e.meta || e.isRejected
                        ? (0, i.jsx)(X.c6, { isActive: !0 })
                        : (0, i.jsx)(v.FoH, {
                              blockType: r.LA.Header,
                              blockId: r.LA.Header,
                              blockPosX: 1,
                              blockPosY: 1,
                              mainObjectType: r.ky.Album,
                              mainObjectId: String(e.meta.id),
                              objectsCount: 1,
                              children: (0, i.jsx)(X.e4, { album: e.meta }),
                          });
                }),
                w = (e) => {
                    let { shouldPlaceAdvertOnTop: t } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, n.$)(x().header, E().header),
                        children: [t && (0, i.jsx)(U, { variant: B.TOP, className: E().advert }), (0, i.jsx)(K, {})],
                    });
                };
            var F = a(97800),
                H = a(58360),
                Y = a(57159),
                V = a.n(Y);
            let z = (e) => {
                let { link: t } = e,
                    a = (0, v.NKK)(),
                    { ref: n, intersectionPropertyId: l } = (0, v.nMI)(),
                    o = (0, M.c)(() => {
                        a({ to: r.QT.Link, deepLink: t.url });
                    });
                return (0, i.jsx)('div', {
                    ref: n,
                    'data-intersection-property-id': l,
                    children: (0, i.jsxs)(g.N_, {
                        href: t.url,
                        target: '_blank',
                        className: V().root,
                        'aria-label': t.service.name,
                        onClick: o,
                        children: [
                            (0, i.jsx)('div', {
                                className: V().logo,
                                children: (0, i.jsx)(H.Image, { src: t.service.logoUrl, alt: t.service.name, className: V().logoImage, size: 40 }),
                            }),
                            (0, i.jsx)('div', { className: V().name, children: t.service.name }),
                        ],
                    }),
                });
            };
            var Q = a(44820),
                $ = a.n(Q);
            let G = (e) => {
                let { links: t, albumId: a } = e,
                    { formatMessage: n } = (0, y.A)(),
                    l = (0, v.fBs)();
                return (
                    (0, s.useEffect)(() => {
                        l();
                    }, [l]),
                    (0, i.jsxs)('div', {
                        className: $().root,
                        children: [
                            (0, i.jsx)(F.Heading, {
                                variant: 'h3',
                                size: 'm',
                                weight: 'bold',
                                className: $().title,
                                children: n({ id: 'album.external-streamings-title' }),
                            }),
                            (0, i.jsx)('div', {
                                className: $().list,
                                children: t.map((e, n) =>
                                    (0, i.jsx)(
                                        v.Bki,
                                        {
                                            objectType: r.ky.Link,
                                            objectId: e.url,
                                            objectPosX: n + 1,
                                            objectPosY: 1,
                                            objectsCount: t.length,
                                            mainObjectType: r.ky.Link,
                                            mainObjectId: a,
                                            children: (0, i.jsx)(z, { link: e }),
                                        },
                                        e.url,
                                    ),
                                ),
                            }),
                        ],
                    })
                );
            };
            var Z = a(63695),
                W = a(85861),
                q = a.n(W);
            let J = (e) => {
                    let { links: t, artistName: a, albumId: n, shouldSendAnalyticsOnNavigate: l } = e,
                        { formatMessage: o } = (0, y.A)(),
                        r = (0, v.fBs)();
                    return (
                        (0, s.useEffect)(() => {
                            r();
                        }, [r]),
                        (0, i.jsxs)('div', {
                            className: q().root,
                            children: [
                                (0, i.jsx)(F.Heading, { variant: 'h3', size: 'm', weight: 'bold', className: q().title, children: o({ id: 'artist.official-pages' }) }),
                                (0, i.jsx)(Z.KH, { links: t, artistName: a, albumId: n, shouldSendAnalyticsOnNavigate: l }),
                            ],
                        })
                    );
                },
                ee = (0, l.PA)(() => {
                    var e;
                    let { user: t, promolanding: a, experiments: n, settings: l } = (0, v.Pjs)(),
                        o = n.checkExperiment(v.zal.WebNextConcertsIdentityFullRedesign, 'on'),
                        { isFreemium: d } = (0, v.XCI)(),
                        { formatMessage: u } = (0, y.A)(),
                        { from: m, utmLink: j } = (0, v.fyy)({ pageId: v._Q$.PROMOLANDING_ALBUM, blockId: v.UfI.ALBUM, contextType: _.K.Album, contextId: a.id }),
                        h = (0, L.c)({ album: a }),
                        A = (0, v.wZZ)(),
                        x = (0, f.Q$)(),
                        { contentElements: k } = (0, b.E8)(),
                        C = d || !t.isAuthorized,
                        S = C && n.checkExperiment(v.zal.WebNextPromoLandingAdvert, 'top'),
                        B = C && n.checkExperiment(v.zal.WebNextPromoLandingAdvert, 'bottom'),
                        M = a.items.length || P.k,
                        R = (0, N.j)({
                            element: (e, t) => {
                                var n;
                                if (e.data && e.type !== p.rU.TEXT)
                                    return (0, i.jsx)(v.Bki, {
                                        objectType: r.ky.Track,
                                        objectId: String(e.data.id),
                                        objectPosX: 1,
                                        objectPosY: t + 1,
                                        objectsCount: M,
                                        children: (0, i.jsx)(T.Pt, {
                                            withLightning: e.isBest && !e.data.isRemoved,
                                            track: e.data,
                                            position: e.position,
                                            albumArtists: null == a || null == (n = a.meta) ? void 0 : n.artists,
                                            playContextParams: A(t, {
                                                contextData: { type: _.K.Album, meta: a.contextMeta, from: m, utmLink: j, playDisliked: !0 },
                                                queueParams: { index: e.positionInContext },
                                                loadContextMeta: !0,
                                                entitiesData: a.state.unloadedEntitiesDataFromModels,
                                            }),
                                        }),
                                    });
                            },
                            album: a,
                        }),
                        U = !!((null == k ? void 0 : k.includes(b.Cq.Concerts)) && a.hasConcerts),
                        X = !!((null == k ? void 0 : k.includes(b.Cq.Donation)) && a.hasDonations),
                        K = !!((null == k ? void 0 : k.includes(b.Cq.SocialLinks)) && a.hasSocialLinks),
                        F = !!((null == k ? void 0 : k.includes(b.Cq.ExternalStreamings)) && a.hasExternalStreamings),
                        H = (0, c.L)(() => {
                            var e, t;
                            if (!l.isMobile || !X) return null;
                            let n = null == (t = a.donations) || null == (e = t.items) ? void 0 : e[0];
                            if (!n) return null;
                            let o = x(n.url);
                            return (0, i.jsx)(v.FoH, {
                                blockType: r.LA.Donations,
                                blockId: v.UfI.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                mainObjectType: r.ky.Album,
                                mainObjectId: String(a.id),
                                children: (0, i.jsx)(v.Bki, {
                                    objectType: r.ky.Donation,
                                    objectId: String(n.artist.id),
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    objectsCount: 1,
                                    mainObjectType: r.ky.Donation,
                                    mainObjectId: String(a.id),
                                    children: (0, i.jsx)(g.Tw, {
                                        className: E().donationBanner,
                                        titleClassName: E().donationBannerTitle,
                                        coverUrl: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68ee8413749d24738fe2013b/%%',
                                        title: u({ id: 'donation.support-artist' }, { count: 1 }),
                                        description: u({ id: 'donation.transfer-any-amount' }),
                                        viewAllActionLink: o,
                                        'aria-label': u({ id: 'donation.support-artist' }, { count: 1 }),
                                        titleSize: 'xs',
                                        shouldSendAnalyticsOnLoaded: !0,
                                    }),
                                }),
                            });
                        }),
                        Y = (0, c.L)(() => {
                            var e, t;
                            if (!U) return null;
                            let n = a.promoCampaign.artistId;
                            if (!n) return null;
                            let l = o ? I.MU : I.ZH;
                            return (0, i.jsx)(v.FoH, {
                                blockType: r.LA.Concerts,
                                blockId: r.LA.Concerts,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: null == (e = a.concerts.items) ? void 0 : e.length,
                                mainObjectType: r.ky.Album,
                                mainObjectId: String(a.id),
                                children: (0, i.jsx)(I.BD, {
                                    artistId: String(n),
                                    title: u({ id: 'entity-names.concerts' }),
                                    className: E().concertsBlock,
                                    headerClassName: E().concertsBlockHeader,
                                    containerClassName: E().concertsBlockContainer,
                                    isLoading: a.concerts.isLoading,
                                    children:
                                        null == (t = a.concerts.items)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  var n, s;
                                                  let {
                                                      objectPosX: d,
                                                      objectPosY: c,
                                                      objectsCount: u,
                                                  } = (0, v.$tp)({
                                                      index: t,
                                                      count: null != (s = null == (n = a.concerts.items) ? void 0 : n.length) ? s : 0,
                                                      itemsCountPerColumn: 2,
                                                  });
                                                  return (0, i.jsx)(
                                                      v.Bki,
                                                      {
                                                          objectType: r.ky.Concert,
                                                          objectId: String(e.id),
                                                          objectPosX: d,
                                                          objectPosY: c,
                                                          objectsCount: u,
                                                          mainObjectType: r.ky.Concert,
                                                          mainObjectId: String(a.id),
                                                          children: (0, i.jsx)(I.VN, {
                                                              artistId: null,
                                                              concert: e,
                                                              meta: (0, i.jsx)(l, { concert: e }),
                                                              forceAfishaWidget: !0,
                                                              shouldSendAnalyticsOnHide: !0,
                                                              shouldShowMask: o,
                                                          }),
                                                      },
                                                      e.id,
                                                  );
                                              }),
                                }),
                            });
                        }),
                        V = (0, c.L)(() => {
                            var e, t, n, l;
                            if (!K || !a.socialLinks.items) return null;
                            let o = null != (l = null == (n = a.meta) || null == (t = n.artists) || null == (e = t[0]) ? void 0 : e.name) ? l : '';
                            return (0, i.jsx)(v.FoH, {
                                blockType: r.LA.OfficialPages,
                                blockId: r.LA.OfficialPages,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: a.socialLinks.items.length,
                                mainObjectType: r.ky.Album,
                                mainObjectId: String(a.id),
                                children: (0, i.jsx)(J, { links: a.socialLinks.items, artistName: o, albumId: String(a.id), shouldSendAnalyticsOnNavigate: !0 }),
                            });
                        }),
                        z = (0, c.L)(() =>
                            F && a.externalStreamings.items
                                ? (0, i.jsx)(v.FoH, {
                                      blockType: r.LA.ReleaseLinks,
                                      blockId: r.LA.ReleaseLinks,
                                      blockPosX: 1,
                                      blockPosY: 1,
                                      objectsCount: a.externalStreamings.items.length,
                                      mainObjectType: r.ky.Album,
                                      mainObjectId: String(a.id),
                                      children: (0, i.jsx)(G, { links: a.externalStreamings.items, albumId: String(a.id) }),
                                  })
                                : null,
                        ),
                        Q = (0, s.useMemo)(() => {
                            if (!k) return [];
                            let e = { [b.Cq.Donation]: H, [b.Cq.Concerts]: Y, [b.Cq.PlusOffer]: null, [b.Cq.ExternalStreamings]: z, [b.Cq.SocialLinks]: V };
                            return k.map((t) => ({ type: t, block: e[t] }));
                        }, [k, H, Y, z, V]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(w, { shouldPlaceAdvertOnTop: S }),
                            (0, i.jsx)(v.FoH, {
                                blockType: r.LA.Tracks,
                                blockId: r.LA.Tracks,
                                blockPosX: 1,
                                blockPosY: 2,
                                objectsCount: M,
                                mainObjectType: r.ky.Album,
                                mainObjectId: String(a.id),
                                children: (0, i.jsx)(O.F, {
                                    count: M,
                                    itemContentCallback: R,
                                    getDataByRange: h,
                                    ariaLabel: u({ id: 'entity-names.albums-tracks-list' }, { albumName: (null == (e = a.meta) ? void 0 : e.title) || '' }),
                                }),
                            }),
                            Q.length > 0 &&
                                (0, i.jsx)('div', {
                                    className: E().contentBlocks,
                                    children: Q.map((e) => {
                                        let { type: t, block: a } = e;
                                        return (0, i.jsx)(s.Fragment, { children: a }, t);
                                    }),
                                }),
                            (0, i.jsx)(D, { shouldPlaceAdvertOnBottom: B }),
                        ],
                    });
                }),
                et = (0, l.PA)((e) => {
                    var t, a, l;
                    let { albumId: A, preloadedAlbum: k, preloadedCpa: y, isActive: _, artistId: f } = e,
                        { experiments: T, disclaimerModalState: I, promolanding: P, albumCPA: L } = (0, v.Pjs)(),
                        { contentScrollRef: N, setContentScrollRef: O } = (0, v.gKY)(),
                        { setClidToQuery: S, deleteClidFromQuery: E, checkIsValidClid: B } = (0, v.IQF)(),
                        { contentElements: M, headerElements: R } = (0, b.E8)(),
                        U = (0, v.l$t)({ mainObjectType: r.ky.Album }),
                        D = (0, v.qne)(v.K3F.UTM_CAMPAIGN) || void 0,
                        X = (0, c.L)(() => {
                            if (k) {
                                var e, t;
                                return (null == (e = k.deprecation) ? void 0 : e.targetAlbumId) && (null == (t = k.deprecation) ? void 0 : t.targetAlbumId) !== Number(A);
                            }
                            return P.deprecationTargetAlbumId && P.deprecationTargetAlbumId !== Number(A);
                        }),
                        K = (0, c.L)(() => {
                            var e;
                            if (k && (null == (e = k.deprecation) ? void 0 : e.targetAlbumId) && X) {
                                let { href: e } = (0, v.uvd)('/album/:albumId', { params: { albumId: k.deprecation.targetAlbumId } });
                                return e;
                            }
                            if (X && P.deprecationTargetAlbumId) {
                                let { href: e } = (0, v.uvd)('/album/:albumId', { params: { albumId: P.deprecationTargetAlbumId } });
                                return e;
                            }
                            let { href: t } = (0, v.uvd)('/album/:albumId', { params: { albumId: A } });
                            return t;
                        }),
                        w = (0, p.cp)({ album: P.meta, shouldHistoryBack: !0 }),
                        F = (0, v.ytd)(null == (t = P.meta) ? void 0 : t.averageColor),
                        { headerStyle: H } = (0, m.QZ)(F);
                    return ((0, h.Y)({ album: P }),
                    (0, v.Jzs)(P.isResolved),
                    (0, j.h)(P, !1),
                    (0, s.useEffect)(() => {
                        void 0 !== f && P.promoCampaign.setArtistId(f);
                    }, [f, P.promoCampaign]),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = P.meta) ? void 0 : e.isUnsafeLegal) && w();
                    }, [w, null == (a = P.meta) ? void 0 : a.isUnsafeLegal]),
                    (!T.checkExperiment(v.zal.WebNextPromoLanding, 'on') || X || P.promoCampaign.isPromoCampaignInactive) && (0, o.redirect)(K),
                    ((e) => {
                        let { redirectUrl: t } = e,
                            a = (0, o.useSearchParams)();
                        v.M3M.every((e) => {
                            let { queryKey: t } = e;
                            return a.has(t);
                        }) || (0, o.redirect)(t);
                    })({ redirectUrl: K }),
                    (0, s.useEffect)(
                        () => (
                            B(L.cpa, Number(A)) || E(),
                            L.cpa && P.id && S(L.cpa, P.id),
                            () => {
                                E();
                            }
                        ),
                        [A, L.cpa, P.id, S, E, B],
                    ),
                    (0, s.useEffect)(
                        () => (
                            U(!0),
                            () => {
                                U(!1);
                            }
                        ),
                        [A, U],
                    ),
                    A && P.promoCampaign.isNeededToLoad
                        ? (0, s.use)(P.getDataByCampaign({ albumId: Number(A), preloadedAlbum: k, preloadedCpa: y, isActive: _, campaignId: D }))
                        : (P.promoCampaign.artistId &&
                              P.donations.isNeededToLoad &&
                              ((null == M ? void 0 : M.includes(b.Cq.Donation)) || (null == R ? void 0 : R.includes(b._7.Donation))) &&
                              (0, s.use)(P.getArtistDonations({ artistId: P.promoCampaign.artistId })),
                          P.promoCampaign.artistId &&
                              P.concerts.isNeededToLoad &&
                              (null == M ? void 0 : M.includes(b.Cq.Concerts)) &&
                              (0, s.use)(P.getArtistConcerts({ artistId: P.promoCampaign.artistId })),
                          P.promoCampaign.artistId &&
                              P.socialLinks.isNeededToLoad &&
                              (null == M ? void 0 : M.includes(b.Cq.SocialLinks)) &&
                              (0, s.use)(P.getArtistSocialLinks({ artistId: P.promoCampaign.artistId })),
                          P.externalStreamings.isNeededToLoad &&
                              (null == M ? void 0 : M.includes(b.Cq.ExternalStreamings)) &&
                              (0, s.use)(P.getAlbumExternalStreamings({ albumId: Number(A) }))),
                    null == (l = P.meta) ? void 0 : l.isLegalRejected)
                        ? (0, i.jsx)(g.MW, { modalState: I })
                        : (0, i.jsx)(v.pVJ, {
                              pageAlbumId: Number(A),
                              children: (0, i.jsxs)(m.hO, {
                                  scrollElement: N,
                                  children: [
                                      (0, i.jsx)(g.Y9, { variant: g.Vw.PROMO_LANDING }),
                                      (0, i.jsxs)(u.C, {
                                          scrollableContainerRef: O,
                                          className: x().root,
                                          containerClassName: x().content,
                                          scrollContentClassName: x().scrollContent,
                                          ...(0, d.Am)(d.Xk.promolanding.PROMOLANDING_ALBUM_PAGE),
                                          children: [
                                              (0, i.jsx)('div', { className: (0, n.$)(x().averageColorBackground, C().averageColorBackground), style: H }),
                                              (0, i.jsx)(ee, {}),
                                          ],
                                      }),
                                  ],
                              }),
                          });
                }),
                ea = (0, l.PA)((e) =>
                    (0, i.jsx)(v.nVz, {
                        pageId: v._Q$.PROMOLANDING_ALBUM,
                        pageEntityId: e.albumId,
                        displayReasonId: e.campaignId,
                        children: (0, i.jsx)(v.jPc, { children: (0, i.jsx)(et, { ...e }) }),
                    }),
                );
        },
        75979: (e) => {
            e.exports = {
                root: 'Offline_root__IxjsY',
                container: 'Offline_container__2V5Vo',
                icon: 'Offline_icon__jDmpJ',
                title: 'Offline_title__Y2CtW',
                text: 'Offline_text__Nhult',
                buttons: 'Offline_buttons__ZOFI7',
                button: 'Offline_button__QSA_j',
            };
        },
        76048: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => r });
            var i = a(54486),
                n = a(61910),
                l = a(43426),
                o = a(83252),
                s = a(80585);
            let r = (e) => {
                let { album: t } = e,
                    a = (0, n.useRef)(0),
                    { notify: r } = (0, o.lkh)(),
                    { formatMessage: d } = (0, l.A)();
                (0, n.useMemo)(
                    () => () => {
                        if (!t.isNotFound && (t.isRejected || (!t.meta && !t.isLoading))) {
                            var e;
                            if (!a || a.current > 0) return;
                            let n = (null == (e = t.meta) ? void 0 : e.isPodcast)
                                ? d({ id: 'podcast-errors.error-during-loading-podcast' })
                                : d({ id: 'album-errors.error-during-loading-album' });
                            r((0, i.jsx)(s.hT, { error: n }), { containerId: o.uQT.ERROR }), a.current++;
                        }
                    },
                    [t.isLoading, t.isNotFound, t.isRejected, t.meta, d, r],
                )();
            };
        },
        79119: (e, t, a) => {
            'use strict';
            a.d(t, { AlbumNotFoundPage: () => d });
            var i = a(54486),
                n = a(28303),
                l = a(61910),
                o = a(42421),
                s = a(83252);
            let r = (0, n.PA)(() => {
                    let { album: e, sonataState: t } = (0, s.Pjs)();
                    return (
                        (0, s.ACS)(),
                        (0, l.useEffect)(() => {
                            e.reset(t);
                        }, []),
                        (0, i.jsx)(o.M, {})
                    );
                }),
                d = (0, n.PA)(() => (0, i.jsx)(s.nVz, { pageId: s._Q$.PAGE_NOT_FOUND_SCREEN, children: (0, i.jsx)(r, {}) }));
        },
        80453: (e, t, a) => {
            'use strict';
            a.d(t, { RelatedContent: () => v });
            var i = a(54486),
                n = a(50420),
                l = a(28303),
                o = a(61910),
                s = a(43350),
                r = a(31500),
                d = a(80156),
                c = a(83252),
                u = a(80585);
            let m = { AUTHORS_BOOKS: 'authors-books', CATEGORY_ALBUMS: 'category-albums', LABELS_ALBUMS: 'labels-albums', SIMILAR_ALBUMS: 'similar-albums' };
            var b = a(64566),
                p = a.n(b);
            let v = (0, l.PA)((e) => {
                var t, a;
                let { isShimmerVisible: l, isShimmerActive: b, className: v, headingVariant: g = 'h2' } = e,
                    { album: j } = (0, c.Pjs)(),
                    h = (0, c.fBs)();
                return (
                    (0, o.useEffect)(() => {
                        h();
                    }, [h]),
                    (0, i.jsx)('div', {
                        className: (0, n.$)(v, p().root),
                        children:
                            null == (a = j.relatedContent) || null == (t = a.items)
                                ? void 0
                                : t.map((e, t) => {
                                      let a = ((e) => {
                                          let t = Object.keys(m).find((t) => m[t] === e);
                                          return r.e8.album[t] || '';
                                      })(e.type);
                                      return (0, i.jsx)(
                                          u.OY,
                                          {
                                              headingVariant: g,
                                              title: e.title,
                                              isShimmerVisible: l,
                                              isShimmerActive: b,
                                              className: (0, n.$)(p().root, v),
                                              containerClassName: p().carousel,
                                              headerClassName: p().header,
                                              ...(a ? (0, r.Am)(a) : {}),
                                              children: e.albums.map((t, a) =>
                                                  (0, i.jsx)(
                                                      c.Bki,
                                                      {
                                                          objectType: s.ky.Podcast,
                                                          objectId: String(t.id),
                                                          objectPosX: a + 1,
                                                          objectPosY: 1,
                                                          objectsCount: e.albums.length,
                                                          children: (0, i.jsx)(d.aX, { album: t, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }),
                                                      },
                                                      t.id,
                                                  ),
                                              ),
                                          },
                                          ''.concat(e.type).concat(t),
                                      );
                                  }),
                    })
                );
            });
        },
        83224: (e) => {
            e.exports = { icon: 'NotificationDownloadError_icon__r2AWx', message: 'NotificationDownloadError_message__WwjsI' };
        },
        84262: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => d, m: () => h });
            var i = a(54486),
                n = a(5956),
                l = a(97800),
                o = a(80585),
                s = a(83224),
                r = a.n(s);
            let d = (e) => {
                let { message: t } = e;
                return (0, i.jsx)(o.$W, {
                    cover: (0, i.jsx)(n.Icon, { variant: 'unavailable', size: 'xs', className: r().icon }),
                    message: (0, i.jsx)(l.Caption, { className: r().message, variant: 'div', type: 'controls', size: 'm', children: t }),
                    coverRadius: 's',
                });
            };
            var c = a(28303),
                u = a(61910),
                m = a(47713),
                b = a(8817),
                p = a(77881),
                v = a(83252),
                g = a(75979),
                j = a.n(g);
            let h = (0, c.PA)(() => {
                let { slam: e } = (0, v.Pjs)(),
                    t = (0, v.ZpR)(v.Zyd.mymusicDownloadsTracks.href),
                    a = (0, v.ZpR)(v.Zyd.settings.href),
                    o = (0, b.c)(() => {
                        window.location.href = v.Zyd.main.href;
                    }),
                    s = (0, u.useMemo)(
                        () =>
                            e.isOfflineModeEnabled ? (0, i.jsx)(m.A, { id: 'offline.offline-mode-enabled' }) : (0, i.jsx)(m.A, { id: 'offline.no-internet-connection' }),
                        [e.isOfflineModeEnabled],
                    ),
                    r = (0, u.useMemo)(
                        () =>
                            e.isOfflineModeEnabled
                                ? (0, i.jsx)(p.$, {
                                      onClick: a,
                                      className: j().button,
                                      color: 'secondary',
                                      size: 'l',
                                      radius: 'xxxl',
                                      children: (0, i.jsx)(l.Caption, {
                                          type: 'controls',
                                          variant: 'span',
                                          size: 'm',
                                          children: (0, i.jsx)(m.A, { id: 'offline.disable-offline-mode' }),
                                      }),
                                  })
                                : (0, i.jsx)(p.$, {
                                      onClick: o,
                                      className: j().button,
                                      color: 'secondary',
                                      size: 'l',
                                      radius: 'xxxl',
                                      children: (0, i.jsx)(l.Caption, {
                                          type: 'controls',
                                          variant: 'span',
                                          size: 'm',
                                          children: (0, i.jsx)(m.A, { id: 'page-error.restart-app-button' }),
                                      }),
                                  }),
                        [o, a, e.isOfflineModeEnabled],
                    );
                return (0, i.jsx)('div', {
                    className: j().root,
                    children: (0, i.jsxs)('div', {
                        className: j().container,
                        children: [
                            (0, i.jsx)(n.Icon, { className: j().icon, variant: 'offline', size: 'xxl' }),
                            (0, i.jsx)(l.Heading, { className: j().title, variant: 'div', size: 'xs', children: s }),
                            (0, i.jsx)(l.Caption, {
                                className: j().text,
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'normal',
                                children: (0, i.jsx)(m.A, { id: 'offline.listen-downloaded-content' }),
                            }),
                            (0, i.jsxs)('div', {
                                className: j().buttons,
                                children: [
                                    r,
                                    (0, i.jsx)(p.$, {
                                        color: 'primary',
                                        onClick: t,
                                        role: 'link',
                                        size: 'l',
                                        radius: 'xxxl',
                                        className: j().button,
                                        children: (0, i.jsx)(m.A, { id: 'interface-actions.go-to-collection' }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
        },
        85861: (e) => {
            e.exports = { root: 'PromoLandingSocialLinks_root__mybk4', title: 'PromoLandingSocialLinks_title__xLYQv' };
        },
        86552: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => n });
            var i = a(8817);
            let n = (e) =>
                (0, i.c)((t) =>
                    t.data ? (!t.data.isRemoved && t.data.isAvailable ? t.data.entityId : void 0) : 'number' == typeof e ? ''.concat(t.id, ':').concat(e) : void 0,
                );
        },
        88762: (e) => {
            e.exports = {
                carouselBlocks: 'AlbumContent_carouselBlocks__bOsTV',
                carouselBlock: 'AlbumContent_carouselBlock__QhSlm',
                carouselBlockHeader: 'AlbumContent_carouselBlockHeader__Liibv',
                carouselContainer: 'AlbumContent_carouselContainer__Y1M_e',
                label: 'AlbumContent_label__2jz4j',
            };
        },
    },
]);
