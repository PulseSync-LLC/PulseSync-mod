(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4394],
    {
        777: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => N });
            var i = r(88800),
                o = r(84961),
                s = r(2058),
                a = r(88969),
                l = r(17392),
                n = r(29993),
                c = r(52300),
                d = r(19934),
                _ = r(38769),
                u = r(4370),
                C = r(95210),
                m = r(72288),
                p = r(98953),
                b = r(18130),
                h = r(93091),
                v = r(74064);
            let N = (0, o.PA)((e) => {
                let { onOpenChange: t, open: r, placement: o, isFullscreenMobile: N = !1, icon: A, size: f, clip: I, ...x } = e,
                    { currentClipInfo: L, settings: k, user: T } = (0, m.g)(),
                    { formatMessage: j } = (0, s.A)(),
                    { shareLink: E, pathname: O } = (0, b.b)(u.Z.video.href, { query: { ids: String(I.clipId) } }),
                    S = N || k.isMobile;
                (0, C.N)(r);
                let w = (0, _.K)(I),
                    R = (0, n.c)(() => {
                        (L.setClipId(I.clipId), L.modal.open());
                    }),
                    y = { variant: p.Y.CLIP, id: I.clipId, title: I.title, path: O };
                return (0, i.jsxs)(d.W1, {
                    isMobile: S,
                    placement: o,
                    offsetOptions: -10,
                    open: r,
                    onOpenChange: t,
                    icon: A,
                    size: f,
                    containerDataTestId: l.Kq.clip.CLIP_CONTEXT_MENU,
                    ariaLabel: j({ id: 'interface-actions.context-menu' }),
                    variant: 'text',
                    ...x,
                    children: [
                        (0, i.jsx)(h.T, { onClick: w, isLiked: I.isLiked, disabled: !T.isAuthorized }),
                        (0, i.jsx)(v.H, { shareLink: E, entityMeta: y }),
                        (0, i.jsx)(d.Dr, {
                            onClick: R,
                            icon: (0, i.jsx)(c.I, { variant: 'info', size: 'xxs' }),
                            'data-test-id': l.Kq.clip.CLIP_CONTEXT_MENU_ABOUT_TRACK_BUTTON,
                            children: (0, i.jsx)(a.A, { id: 'track-modal.clip-title' }),
                        }),
                    ],
                });
            });
        },
        8299: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => o });
            var i = r(58217);
            let o = (e) => {
                let { clip: t, callback: r, disclaimerRejectHandler: o } = e;
                return (0, i.l)({ entity: t, callback: r, onReject: o, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
            };
        },
        10829: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => v });
            var i = r(88800),
                o = r(65724),
                s = r(84961),
                a = r(53548),
                l = r(17392),
                n = r(34126),
                c = r(39079),
                d = r(72288),
                _ = r(39267),
                u = r(13619),
                C = r(73805),
                m = r(15232),
                p = r(56712),
                b = r(26243),
                h = r.n(b);
            let v = (0, s.PA)((e) => {
                var t;
                let {
                        track: r,
                        playContextParams: s,
                        className: b,
                        withDNDBlock: v,
                        isDragging: N,
                        draggingClassName: A,
                        ignoreDislikedStyles: f,
                        withSecondaryColor: I,
                        handleRemove: x,
                        withDislike: L,
                        withTrailer: k = !0,
                        beforeTitle: T,
                        removeButtonAriaLabel: j,
                        hideControls: E,
                    } = e,
                    O = (0, c.D)({ playContextParams: s, entityId: r.entityId }),
                    {
                        settings: { isMobile: S },
                    } = (0, d.g)(),
                    w = (0, n.X)(r.trackSource, { isMobile: S }),
                    R = (0, a.useCallback)(
                        (e) =>
                            (0, i.jsx)(_.q, {
                                isAvailable: r.isAvailable,
                                isDisliked: r.isDisliked,
                                coverUri: r.coverUri,
                                title: r.title,
                                className: h().playButtonCell,
                                ignoreDislikedStyles: f,
                                radius: 'xs',
                                ...e,
                            }),
                        [f, r.coverUri, r.isAvailable, r.isDisliked, r.title],
                    );
                return (0, i.jsx)(p.C, {
                    className: (0, o.$)(b, { [h().trackWithDots]: v, [h().important]: v }),
                    track: r,
                    beforeBlock: v ? (0, i.jsx)(u.O, { className: (0, o.$)(h().dots, A), isDragging: N }) : void 0,
                    meta: (0, i.jsx)(m.j, { withArtistLink: w, beforeTitle: T, track: r, ignoreDislikedStyles: f, withSecondaryColor: I }),
                    playButtonCellRender: R,
                    controls: (0, i.jsx)(C.Q, {
                        track: r,
                        className: h().controlsBarCell,
                        ignoreDislikedStyles: f,
                        utmLink: null == (t = s.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: I,
                        handleRemove: x,
                        withDislike: L,
                        withTrailer: k,
                        removeButtonAriaLabel: j,
                        hideControls: E,
                    }),
                    ...O,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        12816: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => s, x: () => o });
            var i = r(98427);
            let o = [
                    i.b.HOME,
                    i.b.SIDEBAR,
                    i.b.OWN_COLLECTION,
                    i.b.LANDING,
                    i.b.OWN_ARTISTS,
                    i.b.ARTIST,
                    i.b.ARTIST_CONCERTS,
                    i.b.NON_MUSIC,
                    i.b.PLAYLIST,
                    i.b.SEARCH,
                    i.b.VIDEO_PLAYER,
                    i.b.LABEL,
                    i.b.CONCERTS,
                    i.b.CONCERT,
                    i.b.CONCERT_LOCATION_SELECTOR,
                    i.b.ALBUM,
                    i.b.PLAYLIST,
                    i.b.SLIDES_SCREEN,
                    i.b.PROMOLANDING_ALBUM,
                    i.b.WAVE_LANDING_SCREEN,
                    i.b.FACT_SCREEN,
                    i.b.LUMEN_FACT_SCREEN,
                    i.b.LUMEN_AWAKENING_SCREEN,
                    i.b.COLLECTION_VIBE_ROOMS,
                    i.b.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    i.b.MULTIVIBE_ACTION_SCREEN,
                    i.b.MULTIVIBE_UNIFIED_SCREEN,
                ],
                s = [i.b.HOME, i.b.LANDING, i.b.NON_MUSIC, i.b.OWN_COLLECTION, i.b.SEARCH, i.b.ARTIST, i.b.CONCERTS, i.b.CONCERT, i.b.ALBUM, i.b.PLAYLIST];
        },
        20585: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            var i = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
        },
        26243: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        32353: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => i, u: () => o });
            var i = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                o = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        38769: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => b });
            var i = r(88800),
                o = r(96706),
                s = r(53548),
                a = r(2058),
                l = r(79390),
                n = r(29595),
                c = r(74965),
                d = r(72288),
                _ = r(66943),
                u = r(4370),
                C = r(15077),
                m = r(42729);
            let p = (e) => {
                    let { clip: t, closeToast: r } = e;
                    return (0, i.jsx)(m.O, {
                        entityVariant: C.c.CLIP,
                        entityTitle: t.title,
                        collectionUrl: u.Z.collectionClips.href,
                        isLiked: t.isLiked,
                        closeToast: r,
                        coverUri: t.thumbnail,
                    });
                },
                b = (e) => {
                    let { user: t, fullscreenVideoPlayer: r, collection: u } = (0, d.g)(),
                        { notify: C } = (0, c.l)(),
                        [m, b] = (0, s.useState)(!1),
                        { formatMessage: h } = (0, a.A)();
                    return (0, s.useCallback)(async () => {
                        if (!e) return;
                        let s = r.modal.isOpened ? n.u.FULLSCREEN_INFO : n.u.INFO,
                            a = r.modal.isOpened ? n.u.FULLSCREEN_ERROR : n.u.ERROR;
                        if (!t.isAuthorized) return void C((0, i.jsx)(_.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a });
                        if (m) return;
                        let c = { ...(0, o.HO)(e), isLiked: !e.isLiked };
                        b(!0);
                        let d = await e.toggleLike();
                        (b(!1),
                            u.clips.reset(),
                            d === l.f.OK
                                ? C((0, i.jsx)(p, { clip: c }), { containerId: s })
                                : C((0, i.jsx)(_.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: a }));
                    }, [e, t.isAuthorized, m, h, C, r.modal.isOpened, u.clips]);
                };
        },
        44599: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => _ });
            var i = r(87999),
                o = r(38982),
                s = r(84423),
                a = r(89846),
                l = r(64543),
                n = r(63582),
                c = r(29993),
                d = r(12816);
            let _ = (0, n.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e) => {
                let t = (0, s.s)(),
                    { hash: r } = (0, a.g)(),
                    { screen: n, block: _, object: u, tab: C } = (0, l.j)();
                return (0, c.c)(() => {
                    let s = null == n ? void 0 : n.pageIdForFrom;
                    if (!t || !n || !_ || !u || void 0 === u.objectId || !s || !d.x.includes(s) || void 0 === r || !e) return;
                    let a = n.pageId;
                    if (void 0 === a) return;
                    let l = {
                        hash: r,
                        pageId: s,
                        entityType: _.blockType,
                        entityId: _.blockId,
                        entityPosX: _.blockPosX,
                        entityPosY: _.blockPosY,
                        objectId: u.objectId,
                        objectType: u.objectType,
                        objectPosX: u.objectPosX,
                        objectPosY: u.objectPosY,
                        objectsCount: _.objectsCount,
                        from: a,
                        to: i.AppScreen.VideoScreen,
                    };
                    (d.q.some((e) => e === s) &&
                        ((l.tabId = null == C ? void 0 : C.tabId),
                        (l.tabPos = null == C ? void 0 : C.tabPos),
                        (l.isTabSelectedByDefault = null == C ? void 0 : C.isTabSelectedByDefault)),
                        n.skeletonId && (l.skeletonId = n.skeletonId),
                        n.mainObjectType && (l.mainObjectType = n.mainObjectType),
                        n.mainObjectId && (l.mainObjectId = n.mainObjectId),
                        Object.values(l).some((e) => void 0 === e) || (0, o.QS)(t.evgenInstance, l));
                });
            });
        },
        44616: (e) => {
            e.exports = {
                root: 'CarouselWithColumnsBlock_root__v_qoo',
                controls: 'CarouselWithColumnsBlock_controls__yCSFo',
                item: 'CarouselWithColumnsBlock_item__RBGs4',
                item_columns_one: 'CarouselWithColumnsBlock_item_columns_one__GuhDB',
                item_columns_two: 'CarouselWithColumnsBlock_item_columns_two__46rgZ',
                column: 'CarouselWithColumnsBlock_column__oMRES',
                backwardControl: 'CarouselWithColumnsBlock_backwardControl__b_uKR',
                controlsContainer: 'CarouselWithColumnsBlock_controlsContainer__4_1Ao',
            };
        },
        48082: (e) => {
            e.exports = { root: 'TextShimmer_root__qqWug', text: 'TextShimmer_text__z8oN9' };
        },
        55737: (e) => {
            e.exports = {
                itemCounter_3: 'ClipsCarouselContent_itemCounter_3__c_H3V',
                item: 'ClipsCarouselContent_item__Yy7_P',
                important: 'ClipsCarouselContent_important__nZYA0',
                itemCounter_5: 'ClipsCarouselContent_itemCounter_5__QeQd_',
            };
        },
        64310: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            var i = r(88800),
                o = r(65724),
                s = r(19994),
                a = r(48082),
                l = r.n(a);
            let n = (e) => {
                let { className: t, textClassName: r, isActive: a } = e;
                return (0, i.jsx)('div', { className: (0, o.$)(l().root, t), children: (0, i.jsx)(s.W, { className: (0, o.$)(l().text, r), isActive: a, radius: 's' }) });
            };
        },
        67984: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => v, D: () => b });
            var i = r(88800),
                o = r(65724),
                s = r(35802),
                a = r(53548),
                l = r(35412),
                n = r(87999),
                c = r(7833),
                d = r(17392),
                _ = r(53323),
                u = r(18486),
                C = r(31764),
                m = r(44616),
                p = r.n(m),
                b = (function (e) {
                    return ((e.ONE = 'one'), (e.TWO = 'two'), e);
                })({});
            let h = (e) => {
                    let {
                            className: t,
                            forwardRef: r,
                            isShimmerVisible: m,
                            isColumnsShimmerVisible: b,
                            isHeaderWithoutControls: h,
                            maxColumnsCount: v,
                            carouselItemClassName: N,
                            carouselClassName: A,
                            children: f,
                            itemsCountPerColumn: I,
                            shimmer: x,
                            viewAllActionLink: L,
                            blockHeaderClassName: k,
                            additionalControl: T,
                            blockHeaderDescription: j,
                            blockHeaderTitle: E,
                            blockHeaderCoverUrl: O,
                            withBlockHeaderDescription: S,
                            withBlockHeaderCover: w,
                            blockHeaderHeadingVariant: R,
                            isShimmerActive: y,
                            shouldResetCarouselScroll: M,
                            beforeCarousel: g,
                            ...D
                        } = e,
                        [P, B] = (0, a.useState)(),
                        W = (0, a.useId)(),
                        U = (0, a.useRef)(null),
                        V = 'two' === v,
                        z = 'string' == typeof L ? String(L) : '',
                        K = null != b ? b : m,
                        Y = (0, a.useCallback)(
                            (e) => {
                                let t = (0, s.A)(e, I).slice(0, V ? 2 : 1);
                                return (
                                    1 === t.length ? B('one') : B('two'),
                                    t.map((e, t) => (0, i.jsx)('div', { className: p().column, 'data-test-id': d.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: e }, t))
                                );
                            },
                            [I, V],
                        ),
                        F = (0, a.useMemo)(() => {
                            if (K) return Y(Array.from({ length: 2 * I }, (e, t) => (0, a.cloneElement)(x, { key: t })));
                            return Y(f);
                        }, [f, Y, K, I, x]),
                        H = (0, a.useMemo)(
                            () =>
                                h
                                    ? null
                                    : (0, i.jsxs)('div', {
                                          className: p().controlsContainer,
                                          children: [T, (0, i.jsx)(C.X, { carouselRef: U, className: p().controls, backwardControlClassName: p().backwardControl })],
                                      }),
                            [T, h],
                        );
                    return (
                        (0, a.useEffect)(() => {
                            U.current && M && U.current.scrollTo(0, 0);
                        }, [M]),
                        (0, i.jsxs)('section', {
                            ref: r,
                            className: (0, o.$)(p().root, t),
                            ...(0, l.OZ)(D),
                            children: [
                                (0, i.jsx)(c.B, {
                                    objectType: n.DomainObjectType.Shortcut,
                                    objectId: z,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    children: (0, i.jsx)(u.T, {
                                        coverUrl: O,
                                        title: E,
                                        description: j,
                                        className: k,
                                        labeledForId: W,
                                        viewAllActionLink: L,
                                        controls: H,
                                        isShimmerVisible: m,
                                        isShimmerActive: y,
                                        withDescription: S,
                                        withCover: w,
                                        headingVariant: R,
                                    }),
                                }),
                                g,
                                (0, i.jsx)(_.F, {
                                    itemClassName: (0, o.$)(p().item, p()['item_columns_'.concat(K && V ? 'two' : P)], N),
                                    className: A,
                                    ref: U,
                                    'aria-labelledby': W,
                                    'data-test-id': d.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: F,
                                }),
                            ],
                        })
                    );
                },
                v = (0, a.forwardRef)((e, t) => (0, i.jsx)(h, { forwardRef: t, ...e }));
        },
        69323: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => P });
            var i = r(88800),
                o = r(65724),
                s = r(55482),
                a = r(84961),
                l = r(53548),
                n = r(2058),
                c = r(35412),
                d = r(62414),
                _ = r(17392),
                u = r(18593),
                C = r(29993),
                m = r(29832),
                p = r(90688),
                b = r(7555),
                h = r(29504),
                v = r(13946),
                N = r(44599),
                A = r(16717),
                f = r(44318),
                I = r(64284),
                x = r(98427),
                L = r(84384),
                k = r(54965),
                T = r(97361),
                j = r(99313),
                E = r(20585),
                O = r(39079),
                S = r(72288),
                w = r(90224),
                R = r(91292),
                y = r(16704),
                M = r(8299),
                g = r(90865),
                D = r.n(g);
            let P = (0, a.PA)((e) => {
                var t;
                let {
                        titleClassName: r,
                        artistLinkClassName: a,
                        clip: g,
                        withVideo: P = !0,
                        artistIdWithoutLink: B,
                        viewUuid: W,
                        shouldOpenModalOnCardClick: U = !0,
                    } = e,
                    { fullscreenVideoPlayer: V } = (0, S.g)(),
                    { formatMessage: z } = (0, n.A)(),
                    K = (0, f.C)(),
                    { from: Y } = (0, L.f)({ pageId: x.b.VIDEO_PLAYER, contextId: V.state.contextId, contextType: u.K.Various, blockId: I.U.CLIPS }),
                    F = (0, T.P)(null != (t = g.duration) ? t : 0),
                    H = (0, N._)(W),
                    q = (0, d.D)(),
                    $ = (0, l.useRef)(null),
                    X = P && g.previewUrl,
                    G = (0, C.c)(() => {
                        $.current && (($.current.currentTime = 0), $.current.play());
                    }),
                    Z = (0, l.useMemo)(() => (0, s.A)(G, 500), [G]),
                    Q = (0, C.c)(() => {
                        var e;
                        null == (e = $.current) || e.pause();
                    }),
                    J = (0, l.useMemo)(() => V.ids.indexOf(g.clipId), [V, g.clipId]),
                    { isPlaying: ee, togglePlay: et } = (0, O.D)({
                        playContextParams: {
                            contextData: { type: u.K.Various, meta: { id: j.H.VARIOUS_CLIP_CONTEXT }, from: Y },
                            queueParams: { index: J },
                            entitiesData: V.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(g.clipId),
                        sonataState: V.state,
                        playbackId: E.V.CLIP,
                    }),
                    er = U ? g.url : (0, A.J)(V.ids, J),
                    ei = (0, C.c)(() => {
                        U ? (K([g.clipId]), H()) : ee || et();
                    }),
                    eo = (0, M.X)({ clip: g, callback: ei }),
                    es = z({ id: 'entity-names.clip-name' }, { clipName: g.title }),
                    ea = (0, l.useMemo)(
                        () =>
                            g.isAvailable
                                ? (0, i.jsxs)(b.t, {
                                      radius: 'm',
                                      className: (0, o.$)(D().view, D().cover),
                                      onMouseEnter: Z,
                                      onMouseLeave: Q,
                                      onClick: eo,
                                      children: [
                                          X &&
                                              (0, i.jsx)('video', {
                                                  className: D().media,
                                                  ref: $,
                                                  poster: g.thumbnail && (0, c.oZ)(g.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, i.jsx)('source', { src: g.previewUrl, type: 'video/mp4' }),
                                              }),
                                          g.thumbnail &&
                                              (0, i.jsx)(p._V, {
                                                  className: D().image,
                                                  'aria-hidden': !0,
                                                  src: g.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: c.oZ,
                                              }),
                                          void 0 !== g.duration &&
                                              (0, i.jsx)(h.HL, {
                                                  role: 'text',
                                                  'aria-label': F,
                                                  variant: 'span',
                                                  className: D().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: (0, k.E)(g.duration, g.duration) }),
                                              }),
                                          (0, i.jsx)(y.D, { variant: 'filled', className: D().playButton, onClick: eo, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, i.jsx)(b.t, {
                                      radius: 'm',
                                      className: D().unavailableCover,
                                      children: (0, i.jsx)(p.Ab, { className: D().image, iconVariant: 'unavailable', 'data-test-id': _.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [F, g.isAvailable, g.thumbnail, g.previewUrl, g.duration, Z, Q, eo, X],
                    ),
                    el = (0, l.useMemo)(
                        () =>
                            g.hasArtists
                                ? (0, i.jsx)(
                                      v.i,
                                      { linkClassName: (0, o.$)(D().artistLink, a), artists: g.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: B },
                                      g.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [B, g, a],
                    );
                return (0, i.jsx)(m.MN, {
                    ref: q,
                    className: D().root,
                    explicitMarkComponent:
                        g.explicitDisclaimer &&
                        (0, i.jsx)(w.N, { getDescriptionTexts: g.getDescriptionTexts, variant: g.explicitDisclaimer, size: 'xxs' }, g.getKey('ExplicitMarkIcon')),
                    'aria-label': es,
                    srTitle: (0, i.jsx)(R.N, { className: D().srTitleLink, href: er, onClick: eo, children: es }),
                    title: (0, i.jsxs)(
                        h.HL,
                        {
                            className: (0, o.$)(D().title, r),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            'aria-hidden': !0,
                            children: [
                                (0, i.jsx)(R.N, {
                                    className: D().titleLink,
                                    href: er,
                                    tabIndex: -1,
                                    'aria-label': es,
                                    onClick: eo,
                                    'data-test-id': _.Kq.clip.CLIP_META_TITLE,
                                    children: g.title,
                                }),
                                g.version && (0, i.jsx)(h.HL, { className: D().version, variant: 'span', children: ' '.concat(g.version) }),
                            ],
                        },
                        g.getKey('Title'),
                    ),
                    view: ea,
                    description: el,
                    'data-test-id': _.Kq.clip.CLIP_CARD,
                });
            });
        },
        70558: (e) => {
            e.exports = { root: 'TextBlockShimmer_root__og5Bj', shimmer: 'TextBlockShimmer_shimmer__TpDdq' };
        },
        76827: (e) => {
            e.exports = {
                root: 'ClipCardShimmer_root__sIvNr',
                cover: 'ClipCardShimmer_cover__yA4jz',
                title: 'ClipCardShimmer_title__MCApK',
                text: 'ClipCardShimmer_text__ajZGv',
            };
        },
        77605: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => n });
            var i = r(88800),
                o = r(19994),
                s = r(64310),
                a = r(76827),
                l = r.n(a);
            let n = (e) => {
                let { isActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: l().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, i.jsx)(o.W, { isActive: t, className: l().cover, radius: 'l' }),
                        (0, i.jsx)(s.n, { isActive: t, className: l().title }),
                        (0, i.jsx)(s.n, { isActive: t, className: l().text }),
                    ],
                });
            };
        },
        81192: (e) => {
            e.exports = {
                control: 'CarouselWithArrows_control__3uyYB',
                list: 'CarouselWithArrows_list__2f6lz',
                buttons: 'CarouselWithArrows_buttons__fW_Dp',
                root: 'CarouselWithArrows_root__RreSk',
                root_arrowLeft_hidden: 'CarouselWithArrows_root_arrowLeft_hidden__WmoMn',
                root_arrowRight_hidden: 'CarouselWithArrows_root_arrowRight_hidden__sQTGA',
                root_arrow_hidden: 'CarouselWithArrows_root_arrow_hidden__sltkz',
                control_left: 'CarouselWithArrows_control_left__GrTcO',
                control_right: 'CarouselWithArrows_control_right__Si_BV',
                root_carouselBetweenArrows: 'CarouselWithArrows_root_carouselBetweenArrows___aN_d',
                wrapper: 'CarouselWithArrows_wrapper__Kezgl',
                carousel: 'CarouselWithArrows_carousel__gm5sM',
                important: 'CarouselWithArrows_important__ZFlvq',
            };
        },
        85614: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => n });
            var i = r(88800),
                o = r(65724),
                s = r(19994),
                a = r(70558),
                l = r.n(a);
            let n = (e) => {
                let { className: t, shimmerClassName: r, isActive: a = !1, count: n = 10, minWidth: c = 50, maxWidth: d = 90, multiplicity: _ = 1 } = e;
                return (0, i.jsx)('div', {
                    className: (0, o.$)(l().root, t),
                    children: Array.from({ length: n }, (e, t) => {
                        let n = ''.concat(((e, t, r) => Math.floor((Math.floor(Math.random() * (t - e + 1)) + e) / r) * r)(c, d, _), '%');
                        return (0, i.jsx)(s.W, { width: n, className: (0, o.$)(l().shimmer, r), isActive: a, radius: 's' }, t);
                    }),
                });
            };
        },
        90865: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                view: 'ClipCard_view__MYSwA',
                playButton: 'ClipCard_playButton__0Wyss',
                duration: 'ClipCard_duration__89ZCx',
                image: 'ClipCard_image__hSUud',
                media: 'ClipCard_media__dU4RM',
                unavailableCover: 'ClipCard_unavailableCover__Zd9jl',
                cover: 'ClipCard_cover__ztEok',
                cover_withoutOffset: 'ClipCard_cover_withoutOffset__aasE2',
                root: 'ClipCard_root__kzWjg',
                srTitleLink: 'ClipCard_srTitleLink__0tQdz',
                title: 'ClipCard_title__I1s7Q',
                artistLink: 'ClipCard_artistLink__t6oPP',
                titleLink: 'ClipCard_titleLink__g3HDM',
                version: 'ClipCard_version__w9PM7',
            };
        },
        93671: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => b });
            var i = r(88800),
                o = r(65724),
                s = r(84961),
                a = r(53548),
                l = r(54020),
                n = r(87999),
                c = r(7833),
                d = r(53323),
                _ = r(69323),
                u = r(77605),
                C = r(55737),
                m = r.n(C);
            let p = (0, s.PA)((e) => {
                    let {
                            forwardRef: t,
                            clipCardTitleClassName: r,
                            clipCardArtistLinkClassName: s,
                            carouselItemClassName: C,
                            isShimmerVisible: p,
                            isShimmerActive: b,
                            containerClassName: h,
                            artistIdWithoutLink: v,
                            withVideo: N = !0,
                            clips: A,
                            shouldOpenModalOnCardClick: f = !0,
                            itemCounter: I,
                        } = e,
                        x = (0, a.useId)(),
                        L = (0, a.useRef)(String((0, l.A)())),
                        k = (0, a.useMemo)(() => {
                            if (p) return Array.from({ length: 5 }, (e, t) => (0, i.jsx)(u.k, { isActive: b }, t));
                            return null == A
                                ? void 0
                                : A.map((e, t) =>
                                      (0, i.jsx)(
                                          c.B,
                                          {
                                              objectType: n.DomainObjectType.Video,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectId: String(e.clipId),
                                              children: (0, i.jsx)(_.F, {
                                                  titleClassName: r,
                                                  artistLinkClassName: s,
                                                  clip: e,
                                                  withVideo: N,
                                                  artistIdWithoutLink: v,
                                                  viewUuid: L.current,
                                                  shouldOpenModalOnCardClick: f,
                                              }),
                                          },
                                          e.clipId,
                                      ),
                                  );
                        }, [r, s, p, b, v, N, A, f]);
                    return (0, i.jsx)(d.F, {
                        className: (0, o.$)(m().itemCounter, { [m()['itemCounter_'.concat(I)]]: I }, h),
                        ref: t,
                        itemClassName: (0, o.$)(m().item, m().important, C),
                        'aria-labelledby': x,
                        children: k,
                    });
                }),
                b = (0, a.forwardRef)((e, t) => (0, i.jsx)(p, { forwardRef: t, ...e }));
        },
        94058: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => I });
            var i = r(88800),
                o = r(65724),
                s = r(14231),
                a = r(84961),
                l = r(53548),
                n = r.t(l, 2),
                c = r(17392),
                d = r(88021),
                _ = {
                    810: (e) => {
                        e.exports = n;
                    },
                },
                u = {},
                C = {};
            ((() => {
                (Object.defineProperty(C, '__esModule', { value: !0 }), (C.useForwardRef = void 0));
                let e = (function e(t) {
                    var r = u[t];
                    if (void 0 !== r) return r.exports;
                    var i = (u[t] = { exports: {} });
                    return (_[t](i, i.exports, e), i.exports);
                })(810);
                C.useForwardRef = function (t, r) {
                    let i = (0, e.useRef)(r);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(i.current) : (t.current = i.current));
                        }, [t]),
                        i
                    );
                };
            })(),
                C.__esModule);
            var m = C.useForwardRef,
                p = r(32353),
                b = r(72288),
                h = r(31764),
                v = r(81192),
                N = r.n(v);
            let A = { [p.u.Desktop]: { start: 40, end: 20 }, [p.u.Mobile]: { start: 40, end: 40 } },
                f = (0, a.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: r,
                            forwardRef: a,
                            scrollPadding: n,
                            isCarouselBetweenArrows: _ = !1,
                            controlsWrapperClassName: u,
                            buttonSize: C,
                            buttonVariant: v,
                            withSecondaryColor: f,
                        } = e,
                        {
                            settings: { isMobile: I },
                        } = (0, b.g)(),
                        x = m(a, null),
                        { shouldBackwardButtonBeDisabled: L, shouldForwardButtonBeDisabled: k, shouldHideControls: T } = (0, d.Y)(x),
                        [j, E] = (0, l.useMemo)(() => {
                            let e = (0, s.A)(A, n);
                            return [I ? e[p.u.Mobile].start : e[p.u.Desktop].start, I ? e[p.u.Mobile].end : e[p.u.Desktop].end];
                        }, [n, I]),
                        O = (0, l.useCallback)(
                            (e) => {
                                var t;
                                let r = null == (t = x.current) ? void 0 : t.children[e],
                                    { current: i } = x;
                                if (!i || !(r instanceof HTMLElement)) return;
                                if (r.offsetLeft - i.scrollLeft < j) {
                                    i.scrollLeft = r.offsetLeft - j;
                                    return;
                                }
                                let o = i.scrollLeft + i.clientWidth - r.offsetLeft - r.offsetWidth;
                                o < E && (i.scrollLeft -= o - E);
                            },
                            [x, E, j],
                        ),
                        S = (0, l.useCallback)(
                            (e) => {
                                var t, i;
                                (O(e), null == (t = (i = r.props).onTabChange) || t.call(i, e));
                            },
                            [r, O],
                        ),
                        w = (0, l.cloneElement)(r, { forwardRef: x, className: (0, o.$)(N().wrapper, r.props.className, N().carousel, N().important), onTabChange: S });
                    return (0, i.jsxs)('div', {
                        className: (0, o.$)(
                            N().root,
                            {
                                [N().root_carouselBetweenArrows]: _,
                                [N().root_arrowLeft_hidden]: L,
                                [N().root_arrowRight_hidden]: k,
                                [N().root_arrow_hidden]: L && k && T,
                            },
                            t,
                        ),
                        'data-test-id': c.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, i.jsx)('div', { className: N().list, children: w }),
                            !I &&
                                (0, i.jsx)(h.X, {
                                    className: (0, o.$)(N().buttons, u),
                                    carouselRef: x,
                                    backwardControlClassName: N().control,
                                    forwardControlClassName: N().control,
                                    withSecondaryColor: f,
                                    buttonSize: C,
                                    buttonVariant: v,
                                }),
                        ],
                    });
                }),
                I = (0, l.forwardRef)((e, t) => (0, i.jsx)(f, { forwardRef: t, ...e }));
        },
        99313: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.VARIOUS_CLIP_CONTEXT = 'various-clip-context'), e);
            })({});
        },
    },
]);
