(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5570],
    {
        7021: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ClipCard_root__kzWjg',
                view: 'ClipCard_view__MYSwA',
                playButton: 'ClipCard_playButton__0Wyss',
                duration: 'ClipCard_duration__89ZCx',
                image: 'ClipCard_image__hSUud',
                media: 'ClipCard_media__dU4RM',
                cover: 'ClipCard_cover__ztEok',
                unavailableCover: 'ClipCard_unavailableCover__Zd9jl',
                cover_withoutOffset: 'ClipCard_cover_withoutOffset__aasE2',
                title: 'ClipCard_title__I1s7Q',
                artistLink: 'ClipCard_artistLink__t6oPP',
                titleLink: 'ClipCard_titleLink__g3HDM',
                version: 'ClipCard_version__w9PM7',
            };
        },
        15091: (e, t, i) => {
            'use strict';
            i.d(t, { useGenerativeActions: () => p });
            var a = i(54486),
                r = i(61910),
                l = i(43426),
                s = i(11036),
                n = i(59553),
                o = i(8817),
                c = i(95424),
                d = i(83252),
                u = i(80585);
            let p = () => {
                let {
                        sonataState: { entityMeta: e },
                        user: t,
                        fullscreenPlayer: i,
                    } = (0, d.Pjs)(),
                    p = (0, d.eGp)(),
                    { notify: m } = (0, d.lkh)(),
                    { formatMessage: C } = (0, l.A)(),
                    [v, _] = (0, r.useState)(!1),
                    { state: x, handleDebouncedToggle: g, reset: h } = (0, c.F)({ delay: 1e4, throttleTimeout: 0 }),
                    { state: I, handleDebouncedToggle: b, reset: f } = (0, c.F)({ delay: 1e4, throttleTimeout: 0 }),
                    N = (0, o.c)(() => {
                        h(), f();
                    });
                (0, r.useEffect)(() => {
                    (null == e ? void 0 : e.id) && N();
                }, [null == e ? void 0 : e.id, N]);
                let k = (0, o.c)(async (r) => {
                    if (v || !e || !p) return;
                    if (!t.isAuthorized) {
                        let e = i.modal.isOpened ? d.uQT.FULLSCREEN_ERROR : d.uQT.ERROR;
                        m((0, a.jsx)(u.hT, { error: C({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: e });
                        return;
                    }
                    let l = p.getState(),
                        o = p.playbackController.getPlayback();
                    if (l && o && (0, s.S)(l.currentContext.value)) {
                        _(!0);
                        try {
                            switch (r) {
                                case n.Q.TimestampLike:
                                    f(), g();
                                    break;
                                case n.Q.TimestampDislike:
                                    h(), b();
                            }
                            let t = l.currentContext.value.restartsCount;
                            l.queueState.entityList.value.find((t) => {
                                var i, a;
                                let { entity: r } = t;
                                return (null == (a = r.data) || null == (i = a.meta) ? void 0 : i.id) === e.id;
                            }) && (await l.currentContext.value.sendFeedback(r, o)),
                                l.currentContext.value.restartsCount > t && N();
                        } catch (t) {
                            N();
                            let e = i.modal.isOpened ? d.uQT.FULLSCREEN_ERROR : d.uQT.ERROR;
                            m((0, a.jsx)(u.hT, { error: C({ id: 'error-messages.error-during-action' }) }), { containerId: e });
                        } finally {
                            _(!1);
                        }
                    }
                });
                return {
                    isGenerativeLiked: x,
                    isGenerativeDisliked: I,
                    onGenerativeLikeClick: (0, o.c)(() => k(n.Q.TimestampLike)),
                    onGenerativeDislikeClick: (0, o.c)(() => k(n.Q.TimestampDislike)),
                };
            };
        },
        22017: (e, t, i) => {
            'use strict';
            i.d(t, { ClipContextMenu: () => C });
            var a = i(54486),
                r = i(28303),
                l = i(43426),
                s = i(47713),
                n = i(31500),
                o = i(8817),
                c = i(5956),
                d = i(61958),
                u = i(54830),
                p = i(83252),
                m = i(80585);
            let C = (0, r.PA)((e) => {
                let { onOpenChange: t, open: i, placement: r, isFullscreenMobile: C = !1, icon: v, size: _, clip: x, ...g } = e,
                    { currentClipInfo: h, settings: I, user: b } = (0, p.Pjs)(),
                    { formatMessage: f } = (0, l.A)(),
                    { shareLink: N, pathname: k } = (0, p.bNS)(p.Zyd.video.href, { query: { ids: String(x.clipId) } }),
                    L = C || I.isMobile;
                (0, p.NBO)(i);
                let y = (0, u.KX)(x),
                    j = (0, o.c)(() => {
                        h.setClipId(x.clipId), h.modal.open();
                    }),
                    A = { variant: p.Yxq.CLIP, id: x.clipId, title: x.title, path: k };
                return (0, a.jsxs)(d.W1, {
                    isMobile: L,
                    placement: r,
                    offsetOptions: -10,
                    open: i,
                    onOpenChange: t,
                    icon: v,
                    size: _,
                    containerProps: (0, n.Am)(n.Kq.clip.CLIP_CONTEXT_MENU),
                    ariaLabel: f({ id: 'interface-actions.context-menu' }),
                    variant: 'text',
                    ...g,
                    children: [
                        (0, a.jsx)(m.TW, { onClick: y, isLiked: x.isLiked, disabled: !b.isAuthorized }),
                        (0, a.jsx)(m.Ht, { shareLink: N, entityMeta: A }),
                        (0, a.jsx)(d.Dr, {
                            onClick: j,
                            icon: (0, a.jsx)(c.Icon, { variant: 'info', size: 'xxs' }),
                            ...(0, n.Am)(n.Kq.clip.CLIP_CONTEXT_MENU_ABOUT_TRACK_BUTTON),
                            children: (0, a.jsx)(s.A, { id: 'track-modal.clip-title' }),
                        }),
                    ],
                });
            });
        },
        26245: (e) => {
            e.exports = {
                root: 'HorizontalClipCard_root__B_6yA',
                cover: 'HorizontalClipCard_cover__vpEvl',
                unavailable: 'HorizontalClipCard_unavailable__SILaB',
                duration: 'HorizontalClipCard_duration__r1UFp',
            };
        },
        32159: (e, t, i) => {
            'use strict';
            i.d(t, { ClipsCarouselContent: () => _ });
            var a = i(54486),
                r = i(50420),
                l = i(28303),
                s = i(61910),
                n = i(9348),
                o = i(43350),
                c = i(81203),
                d = i(83252),
                u = i(57923),
                p = i(69597),
                m = i(73717),
                C = i.n(m);
            let v = (0, l.PA)((e) => {
                    let {
                            forwardRef: t,
                            clipCardTitleClassName: i,
                            clipCardArtistLinkClassName: l,
                            carouselItemClassName: m,
                            isShimmerVisible: v,
                            isShimmerActive: _,
                            containerClassName: x,
                            artistIdWithoutLink: g,
                            withVideo: h = !0,
                            clips: I,
                            shouldOpenModalOnCardClick: b = !0,
                            itemCounter: f,
                        } = e,
                        N = (0, s.useId)(),
                        k = (0, s.useRef)(String((0, n.A)())),
                        L = (0, s.useMemo)(() => {
                            if (v) return Array.from({ length: 5 }, (e, t) => (0, a.jsx)(p.k, { isActive: _ }, t));
                            return null == I
                                ? void 0
                                : I.map((e, t) =>
                                      (0, a.jsx)(
                                          d.Bki,
                                          {
                                              objectType: o.ky.Video,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == I ? void 0 : I.length,
                                              objectId: String(e.clipId),
                                              children: (0, a.jsx)(u.ClipCard, {
                                                  titleClassName: i,
                                                  artistLinkClassName: l,
                                                  clip: e,
                                                  withVideo: h,
                                                  artistIdWithoutLink: g,
                                                  viewUuid: k.current,
                                                  shouldOpenModalOnCardClick: b,
                                              }),
                                          },
                                          e.clipId,
                                      ),
                                  );
                        }, [i, l, v, _, g, h, I, b]);
                    return (0, a.jsx)(c.Carousel, {
                        className: (0, r.$)(C().itemCounter, { [C()['itemCounter_'.concat(f)]]: f }, x),
                        ref: t,
                        itemClassName: (0, r.$)(C().item, C().important, m),
                        'aria-labelledby': N,
                        children: L,
                    });
                }),
                _ = (0, s.forwardRef)((e, t) => (0, a.jsx)(v, { forwardRef: t, ...e }));
        },
        34960: (e, t, i) => {
            'use strict';
            i.d(t, { R6: () => s, xf: () => r, nD: () => l.useGenerativeActions });
            var a = i(93064);
            let r = (e) => {
                var t, i;
                return (0, a.wg)({
                    title: e.title,
                    stationId: e.stationId,
                    imageUrl: e.imageUrl,
                    style: { backgroundColor: null == (t = e.style) ? void 0 : t.backgroundColor, titleColor: null == (i = e.style) ? void 0 : i.titleColor },
                });
            };
            var l = i(15091);
            let s = a.gK.model('NeuromusicItem', {
                title: a.gK.string,
                stationId: a.gK.string,
                imageUrl: a.gK.maybe(a.gK.string),
                style: a.gK.maybe(a.gK.model({ backgroundColor: a.gK.maybe(a.gK.string), titleColor: a.gK.maybe(a.gK.string) })),
            });
        },
        37863: (e) => {
            e.exports = {
                root: 'ClipCardShimmer_root__sIvNr',
                cover: 'ClipCardShimmer_cover__yA4jz',
                title: 'ClipCardShimmer_title__MCApK',
                text: 'ClipCardShimmer_text__ajZGv',
            };
        },
        50795: (e, t, i) => {
            'use strict';
            i.d(t, { ClipsCarousel: () => m });
            var a = i(54486),
                r = i(50420),
                l = i(28303),
                s = i(61910),
                n = i(15209),
                o = i(80585),
                c = i(63325),
                d = i.n(c),
                u = i(32159);
            let p = (0, l.PA)((e) => {
                    let {
                            clipCardTitleClassName: t,
                            clipCardArtistLinkClassName: i,
                            carouselItemClassName: l,
                            forwardRef: c,
                            isShimmerVisible: p,
                            isShimmerActive: m,
                            title: C,
                            description: v,
                            containerClassName: _,
                            headerClassName: x,
                            viewAllActionLink: g,
                            artistIdWithoutLink: h,
                            withVideo: I = !0,
                            clips: b,
                            headingVariant: f,
                            className: N,
                            shouldOpenModalOnCardClick: k = !0,
                            itemCounter: L,
                            ...y
                        } = e,
                        j = (0, s.useId)(),
                        A = (0, s.useRef)(null);
                    return (0, a.jsxs)('section', {
                        className: (0, r.$)(d().root, N),
                        ref: c,
                        ...(0, n.getDataAttrFromProps)(y),
                        children: [
                            (0, a.jsx)(o.Tw, {
                                className: x,
                                labeledForId: j,
                                title: C,
                                description: v,
                                viewAllActionLink: g,
                                controls: (0, a.jsx)(o.X9, { className: d().controls, carouselRef: A }),
                                headingVariant: f,
                                withDescription: !!v,
                            }),
                            (0, a.jsx)(u.ClipsCarouselContent, {
                                clipCardTitleClassName: t,
                                clipCardArtistLinkClassName: i,
                                carouselItemClassName: l,
                                isShimmerVisible: p,
                                isShimmerActive: m,
                                containerClassName: _,
                                artistIdWithoutLink: h,
                                withVideo: I,
                                clips: b,
                                shouldOpenModalOnCardClick: k,
                                itemCounter: L,
                                ref: A,
                                'aria-labelledby': j,
                            }),
                        ],
                    });
                }),
                m = (0, s.forwardRef)((e, t) => (0, a.jsx)(p, { forwardRef: t, ...e }));
        },
        57923: (e, t, i) => {
            'use strict';
            i.d(t, { ClipCard: () => k });
            var a = i(54486),
                r = i(50420),
                l = i(12186),
                s = i(28303),
                n = i(61910),
                o = i(43426),
                c = i(15209),
                d = i(31500),
                u = i(63585),
                p = i(8817),
                m = i(71712),
                C = i(58360),
                v = i(6971),
                _ = i(97800),
                x = i(63695),
                g = i(54830),
                h = i(83252),
                I = i(80585),
                b = i(84883),
                f = i(7021),
                N = i.n(f);
            let k = (0, s.PA)((e) => {
                var t;
                let {
                        titleClassName: i,
                        artistLinkClassName: s,
                        clip: f,
                        withVideo: k = !0,
                        artistIdWithoutLink: L,
                        viewUuid: y,
                        shouldOpenModalOnCardClick: j = !0,
                    } = e,
                    { fullscreenVideoPlayer: A } = (0, h.Pjs)(),
                    { formatMessage: E } = (0, o.A)(),
                    S = (0, g.Cc)(),
                    { from: T } = (0, h.fyy)({ pageId: h._Q$.VIDEO_PLAYER, contextId: A.state.contextId, contextType: u.K.Various, blockId: h.UfI.CLIPS }),
                    P = (0, h.PMf)(null != (t = f.duration) ? t : 0),
                    w = (0, g.Mn)(y),
                    M = (0, g._7)(y),
                    { ref: R, intersectionPropertyId: D } = (0, h.nMI)({ callback: w }),
                    K = (0, n.useRef)(null),
                    O = k && f.previewUrl,
                    z = (0, p.c)(() => {
                        K.current && ((K.current.currentTime = 0), K.current.play());
                    }),
                    U = (0, n.useMemo)(() => (0, l.A)(z, 500), [z]),
                    G = (0, p.c)(() => {
                        var e;
                        null == (e = K.current) || e.pause();
                    }),
                    X = (0, n.useMemo)(() => A.ids.indexOf(f.clipId), [A, f.clipId]),
                    { isPlaying: V, togglePlay: B } = (0, h.Dx4)({
                        playContextParams: {
                            contextData: { type: u.K.Various, meta: { id: h.H7u.VARIOUS_CLIP_CONTEXT }, from: T },
                            queueParams: { index: X },
                            entitiesData: A.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(f.clipId),
                        sonataState: A.state,
                        playbackId: h.V_r.CLIP,
                    }),
                    $ = j ? f.url : (0, g.JL)(A.ids, X),
                    Q = (0, p.c)(() => {
                        j ? (S([f.clipId]), M()) : V || B();
                    }),
                    F = (0, b.useClipDisclaimer)({ clip: f, callback: Q }),
                    H = E({ id: 'entity-names.clip-name' }, { clipName: f.title }),
                    q = (0, n.useMemo)(
                        () =>
                            f.isAvailable
                                ? (0, a.jsxs)(v.Paper, {
                                      radius: 'm',
                                      className: (0, r.$)(N().view, N().cover),
                                      onMouseEnter: U,
                                      onMouseLeave: G,
                                      onClick: F,
                                      children: [
                                          O &&
                                              (0, a.jsx)('video', {
                                                  className: N().media,
                                                  ref: K,
                                                  poster: f.thumbnail && (0, c.createAvatarVideoUrl)(f.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, a.jsx)('source', { src: f.previewUrl, type: 'video/mp4' }),
                                              }),
                                          f.thumbnail &&
                                              (0, a.jsx)(C.Image, {
                                                  className: N().image,
                                                  'aria-hidden': !0,
                                                  src: f.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: c.createAvatarVideoUrl,
                                              }),
                                          void 0 !== f.duration &&
                                              (0, a.jsx)(_.Caption, {
                                                  role: 'text',
                                                  'aria-label': P,
                                                  variant: 'span',
                                                  className: N().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: (0, h.E4p)(f.duration, f.duration) }),
                                              }),
                                          (0, a.jsx)(I.DM, { variant: 'filled', className: N().playButton, onClick: F, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, a.jsx)(v.Paper, {
                                      radius: 'm',
                                      className: N().unavailableCover,
                                      children: (0, a.jsx)(C.FallbackImage, {
                                          className: N().image,
                                          iconVariant: 'unavailable',
                                          ...(0, d.Am)(d.S7.ENTITY_COVER_FALLBACK_IMAGE),
                                      }),
                                  }),
                        [P, f.isAvailable, f.thumbnail, f.previewUrl, f.duration, U, G, F, O],
                    ),
                    Y = (0, n.useMemo)(
                        () =>
                            f.hasArtists
                                ? (0, a.jsx)(
                                      x.iQ,
                                      { linkClassName: (0, r.$)(N().artistLink, s), artists: f.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: L },
                                      f.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [L, f, s],
                    );
                return (0, a.jsx)(m.MN, {
                    ref: R,
                    className: N().root,
                    explicitMarkComponent:
                        f.explicitDisclaimer &&
                        (0, a.jsx)(I.Nq, { getDescriptionTexts: f.getDescriptionTexts, variant: f.explicitDisclaimer, size: 'xxs' }, f.getKey('ExplicitMarkIcon')),
                    'aria-label': H,
                    srTitle: (0, a.jsx)(I.N_, { href: $, onClick: F, children: H }),
                    title: (0, a.jsxs)(
                        _.Caption,
                        {
                            className: (0, r.$)(N().title, i),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            children: [
                                (0, a.jsx)(I.N_, {
                                    className: N().titleLink,
                                    href: $,
                                    'aria-label': H,
                                    onClick: F,
                                    ...(0, d.Am)(d.Kq.clip.CLIP_META_TITLE),
                                    children: f.title,
                                }),
                                f.version && (0, a.jsx)(_.Caption, { className: N().version, variant: 'span', children: ' '.concat(f.version) }),
                            ],
                        },
                        f.getKey('Title'),
                    ),
                    'data-intersection-property-id': D,
                    view: q,
                    description: Y,
                    ...(0, d.Am)(d.Kq.clip.CLIP_CARD),
                });
            });
        },
        59553: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { Q: () => a }),
                (function (e) {
                    (e.StreamPause = 'streamPause'), (e.StreamPlay = 'streamPlay'), (e.TimestampLike = 'timestampLike'), (e.TimestampDislike = 'timestampDislike');
                })(a || (a = {}));
        },
        59767: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__l6Fg6',
                item: 'ControlsBar_item__tEQvM',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__3aZyp',
                contextMenu: 'ControlsBar_contextMenu__1Sj5f',
                contextMenu_visible: 'ControlsBar_contextMenu_visible__FMTw4',
                controls_disabled: 'ControlsBar_controls_disabled__xR0_N',
                controls: 'ControlsBar_controls__PEMXx',
                likeIcon: 'ControlsBar_likeIcon__UBXQm',
            };
        },
        63325: (e) => {
            e.exports = { root: 'ClipsCarousel_root__r1mGp', controls: 'ClipsCarousel_controls__nZB6r' };
        },
        65779: (e, t, i) => {
            'use strict';
            i.d(t, {
                FC: () => x.ClipCard,
                kV: () => g.k,
                zb: () => h.ClipContextMenu,
                kv: () => m,
                KR: () => I.ClipsCarousel,
                tD: () => b.ClipsCarouselContent,
                $d: () => _,
                Nk: () => f.HorizontalClipCard,
                wS: () => l,
                i$: () => o,
                SZ: () => d,
                V1: () => u,
                XP: () => p.useClipDisclaimer,
            });
            var a = i(73975),
                r = i(63695);
            let l = (e) => {
                var t;
                if (!e) return { clipId: 0, title: '', artists: [], thumbnail: '', previewUrl: '', duration: 0, disclaimers: [], trackIds: [] };
                let i = [];
                return (
                    (null == (t = e.disclaimers) ? void 0 : t.every((e) => Object.values(a.M).includes(e))) && (i = e.disclaimers),
                    {
                        clipId: e.clipId,
                        title: e.title,
                        thumbnail: e.thumbnail,
                        previewUrl: e.previewUrl,
                        duration: e.duration,
                        disclaimers: i,
                        version: e.version,
                        artists: e.artists.map((e) => {
                            let t = (0, r.NE)(e),
                                i = Number(t.id);
                            return { ...t, id: isNaN(i) ? 0 : i };
                        }),
                        trackIds: [],
                    }
                );
            };
            var s = i(93064),
                n = i(54830);
            let o = (e) => {
                var t;
                let i = null == (t = e.artists) ? void 0 : t.map((e) => (0, r.as)({ artist: e }));
                return (0, s.wg)({ ...(0, n.l6)(e), artists: i });
            };
            var c = i(83252);
            let d = (e) => {
                    var t, i;
                    let { clip: a, artists: l } = e,
                        { available: n, disclaimers: o } = (0, c.fyr)(a);
                    return (0, s.wg)({
                        clipId: a.id,
                        title: a.title,
                        thumbnail: null == (t = a.cover) ? void 0 : t.uri,
                        previewUrl: null == (i = a.cover) ? void 0 : i.videoUrl,
                        duration: a.duration,
                        artists: null == l ? void 0 : l.map((e) => (0, r.as)({ artist: e })),
                        isAvailable: n,
                        disclaimers: o,
                    });
                },
                u = (e, t) => {
                    if (!e) return { clipIds: [], activeClipIndex: 0 };
                    let i = e
                            .split(',')
                            .map(Number)
                            .filter((e) => e >= 0),
                        a = (0, n.z4)(i, t);
                    return { clipIds: i, activeClipIndex: a };
                };
            (0, i(61910).cache)(async (e) => {
                try {
                    let { container: t, backendHostTld: i, locale: a, host: r, fullUrl: l, isRSC: s, requestUrl: n } = await (0, c.IhE)();
                    if (s || !e) return { clips: void 0, backendHostTld: i, locale: a, host: r, fullUrl: l, requestUrl: n };
                    let o = t.get(c.jQD),
                        d = await o.getClip({ clipIds: [e] }),
                        u = l ? new URL(l) : void 0;
                    u && ((u.search = ''), u.searchParams.set(c.K3F.IDS, String(null != e ? e : '')));
                    let p = null == u ? void 0 : u.toString();
                    return { clip: null == d ? void 0 : d[0], backendHostTld: i, locale: a, host: r, fullUrl: l, requestUrl: n, canonical: p };
                } catch (e) {
                    return { clips: void 0, backendHostTld: '', locale: null, host: '', fullUrl: null, requestUrl: null };
                }
            });
            var p = i(84883);
            let m = n.z8.props({ artists: s.gK.array(r.PK) }).views((e) => ({
                get hasArtists() {
                    return e.artists.length > 0;
                },
            }));
            var C = i(26433);
            let v = s.gK.model('Credit', { title: s.gK.string, value: s.gK.string }),
                _ = s.gK
                    .model('CurrentClipInfo', {
                        id: s.gK.maybeNull(s.gK.number),
                        clip: s.gK.maybeNull(m),
                        clipLoadingState: s.gK.enumeration(Object.values(c.GuX)),
                        creditsLoadingState: s.gK.enumeration(Object.values(c.GuX)),
                        credits: s.gK.maybeNull(s.gK.array(v)),
                        modal: C.qt,
                    })
                    .views((e) => ({
                        get isClipIdle() {
                            return e.clipLoadingState === c.GuX.IDLE;
                        },
                        get isClipLoading() {
                            return e.clipLoadingState === c.GuX.PENDING;
                        },
                        get isClipRejected() {
                            return e.clipLoadingState === c.GuX.REJECT;
                        },
                        get isCreditsIdle() {
                            return e.creditsLoadingState === c.GuX.IDLE;
                        },
                        get isCreditsLoading() {
                            return e.creditsLoadingState === c.GuX.PENDING;
                        },
                        get isCreditsRejected() {
                            return e.creditsLoadingState === c.GuX.REJECT;
                        },
                        get isRejected() {
                            return e.creditsLoadingState === c.GuX.REJECT && e.clipLoadingState === c.GuX.REJECT;
                        },
                    }))
                    .actions((e) => ({
                        setClipId(t) {
                            e.id = t;
                        },
                        getClip: (0, s.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: i } = (0, s._$)(e);
                            if (e.id && e.clipLoadingState !== c.GuX.PENDING)
                                try {
                                    e.clipLoadingState = c.GuX.PENDING;
                                    let [i] = yield t.getClip({ clipIds: [e.id] });
                                    if (!i) return;
                                    (e.clip = o(i)), (e.clipLoadingState = c.GuX.RESOLVE);
                                } catch (t) {
                                    i.error(t), (e.clipLoadingState = c.GuX.REJECT);
                                }
                        }),
                        getCreditsInfo: (0, s.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: i } = (0, s._$)(e);
                            if (!e.id || e.creditsLoadingState === c.GuX.PENDING) return null;
                            try {
                                e.creditsLoadingState = c.GuX.PENDING;
                                let i = yield t.getCredits({ clipId: e.id });
                                (e.credits = (0, s.wg)(null == i ? void 0 : i.credits)), (e.creditsLoadingState = c.GuX.RESOLVE);
                            } catch (t) {
                                i.error(t), (e.creditsLoadingState = c.GuX.REJECT);
                            }
                            return null;
                        }),
                        reset() {
                            (e.id = null), (e.clip = null), (e.clipLoadingState = c.GuX.IDLE), (e.creditsLoadingState = c.GuX.IDLE), (e.credits = null);
                        },
                    }));
            var x = i(57923),
                g = i(69597),
                h = i(22017),
                I = i(50795),
                b = i(32159),
                f = i(70901);
        },
        69597: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => o });
            var a = i(54486),
                r = i(22674),
                l = i(80585),
                s = i(37863),
                n = i.n(s);
            let o = (e) => {
                let { isActive: t } = e;
                return (0, a.jsxs)('div', {
                    className: n().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, a.jsx)(r.Shimmer, { isActive: t, className: n().cover, radius: 'l' }),
                        (0, a.jsx)(l.nN, { isActive: t, className: n().title }),
                        (0, a.jsx)(l.nN, { isActive: t, className: n().text }),
                    ],
                });
            };
        },
        70901: (e, t, i) => {
            'use strict';
            i.d(t, { HorizontalClipCard: () => P });
            var a = i(54486),
                r = i(50420),
                l = i(12186),
                s = i(28303),
                n = i(61910),
                o = i(43426),
                c = i(15209),
                d = i(31500),
                u = i(63585),
                p = i(8817),
                m = i(27510),
                C = i(73633),
                v = i(58360),
                _ = i(6971),
                x = i(97800),
                g = i(63695),
                h = i(54830),
                I = i(83252),
                b = i(80585),
                f = i(84883),
                N = i(7021),
                k = i.n(N),
                L = i(5956),
                y = i(22017),
                j = i(59767),
                A = i.n(j);
            let E = (0, s.PA)((e) => {
                let { className: t, clip: i, likeIconSize: l = 'xxs' } = e,
                    { user: s } = (0, I.Pjs)(),
                    { sendLikeSearchFeedback: o } = (0, I.zEv)(),
                    c = (0, h.KX)(i),
                    [u, m] = (0, n.useState)(!1),
                    [C, v] = (0, n.useState)(!1),
                    _ = (0, p.c)(() => {
                        u || i.isLiked || (m(!0), null == o || o()), c();
                    });
                return (0, a.jsx)('div', {
                    className: (0, r.$)(A().root, A().controls, t, { [A().controls_disabled]: !i.isAvailable }),
                    children:
                        i.isAvailable &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(b.aQ, {
                                    fallback: (0, a.jsx)(b.cy, {
                                        size: 'xs',
                                        iconSize: l,
                                        className: (0, r.$)(A().item, A().likeIcon),
                                        isLiked: i.isLiked,
                                        onClick: _,
                                        disabled: !s.isAuthorized,
                                    }),
                                }),
                                (0, a.jsx)(y.ClipContextMenu, {
                                    placement: 'top-start',
                                    icon: (0, a.jsx)(L.Icon, { variant: 'more', size: 'xs' }),
                                    size: 'xs',
                                    clip: i,
                                    className: (0, r.$)(A().contextMenu, { [A().contextMenu_visible]: C }),
                                    onOpenChange: v,
                                    open: C,
                                    ...(0, d.Am)(d.Kq.clip.CLIP_CONTEXT_MENU_BUTTON),
                                }),
                            ],
                        }),
                });
            });
            var S = i(26245),
                T = i.n(S);
            let P = (0, s.PA)((e) => {
                var t;
                let { clip: i, className: s, coverClassName: N, playButtonIconSize: L = 'xs', likeIconSize: y, viewUuid: j, shouldShowTimecode: A = !1 } = e,
                    { fullscreenVideoPlayer: S } = (0, I.Pjs)(),
                    { formatMessage: P } = (0, o.A)(),
                    w = (0, I.PMf)(null != (t = i.duration) ? t : 0),
                    M = (0, h._7)(j),
                    R = (0, h.Mn)(j),
                    { ref: D, intersectionPropertyId: K } = (0, I.nMI)({ callback: R }),
                    { from: O } = (0, I.fyy)({ pageId: I._Q$.VIDEO_PLAYER, contextId: S.state.contextId, contextType: u.K.Various, blockId: I.UfI.CLIPS }),
                    [z, U] = (0, n.useState)(!1),
                    { sendNavigateSearchFeedback: G, sendPlaySearchFeedback: X } = (0, I.zEv)(),
                    V = (0, h.Cc)(),
                    B = (0, n.useRef)(null),
                    $ = (0, p.c)(() => {
                        B.current && ((B.current.currentTime = 0), B.current.play());
                    }),
                    Q = (0, n.useMemo)(() => (0, l.A)($, 500), [$]),
                    F = (0, p.c)(() => {
                        var e;
                        null == (e = B.current) || e.pause();
                    }),
                    H = (0, n.useMemo)(() => S.ids.indexOf(i.clipId), [S, i.clipId]),
                    { isPlaying: q } = (0, I.Dx4)({
                        playContextParams: {
                            contextData: { type: u.K.Various, meta: { id: I.H7u.VARIOUS_CLIP_CONTEXT }, from: O },
                            queueParams: { index: H },
                            entitiesData: S.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(i.clipId),
                        sonataState: S.state,
                        playbackId: I.V_r.CLIP,
                    }),
                    Y = (0, p.c)(() => {
                        V([i.clipId]), z || q || (U(!0), null == X || X()), null == G || G(), M();
                    }),
                    Z = (0, f.useClipDisclaimer)({ clip: i, callback: Y }),
                    W = (0, p.c)((e) => {
                        (0, C.P)(e, b.$f.ripple), Z(e);
                    }),
                    J = (0, m.L)(() =>
                        (0, a.jsx)(x.Caption, {
                            className: (0, r.$)(b.$f.text, b.$f.titleText),
                            'aria-hidden': !0,
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            children: i.title,
                        }),
                    ),
                    ee = (0, n.useCallback)(
                        (e, t) => {
                            var r;
                            return (null == (r = i.artists) ? void 0 : r.length)
                                ? (0, a.jsx)(g.iQ, { linkClassName: e, captionClassName: t, artists: i.artists, lineClamp: 1 })
                                : null;
                        },
                        [i.artists],
                    ),
                    et = P({ id: 'entity-names.clip-name' }, { clipName: i.title }),
                    ei = (0, m.L)(() =>
                        i.isAvailable
                            ? (0, a.jsxs)(_.Paper, {
                                  className: (0, r.$)(T().cover, k().cover, k().cover_withoutOffset, N),
                                  radius: 'xs',
                                  onMouseEnter: Q,
                                  onMouseLeave: F,
                                  children: [
                                      i.previewUrl &&
                                          (0, a.jsx)('video', {
                                              className: k().media,
                                              ref: B,
                                              poster: i.thumbnail && (0, c.createAvatarVideoUrl)(i.thumbnail, 80),
                                              playsInline: !0,
                                              muted: !0,
                                              loop: !0,
                                              'aria-hidden': !0,
                                              children: (0, a.jsx)('source', { src: i.previewUrl, type: 'video/mp4' }),
                                          }),
                                      i.thumbnail &&
                                          (0, a.jsx)(v.Image, {
                                              className: k().image,
                                              src: i.thumbnail,
                                              fit: 'cover',
                                              withAvatarReplace: !0,
                                              size: 80,
                                              createUrlReplacer: c.createAvatarVideoUrl,
                                              alt: et,
                                          }),
                                      void 0 !== i.duration &&
                                          A &&
                                          (0, a.jsx)(x.Caption, {
                                              variant: 'span',
                                              className: (0, r.$)(k().duration, T().duration),
                                              type: 'entity',
                                              size: 'xs',
                                              weight: 'medium',
                                              role: 'text',
                                              'aria-label': w,
                                              children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: (0, I.E4p)(i.duration, i.duration) }),
                                          }),
                                      (0, a.jsx)(b.DM, { variant: 'filled', className: k().playButton, onClick: Z, iconSize: L }),
                                  ],
                              })
                            : (0, a.jsxs)(_.Paper, {
                                  className: (0, r.$)(T().cover, T().unavailable, N),
                                  radius: 'xs',
                                  children: [
                                      (0, a.jsx)(v.FallbackImage, {
                                          className: k().image,
                                          iconVariant: 'unavailable',
                                          iconSize: 'xs',
                                          ...(0, d.Am)(d.S7.ENTITY_COVER_FALLBACK_IMAGE),
                                      }),
                                      (0, a.jsx)(b.DM, { variant: 'filled', className: k().playButton, iconSize: L, disabled: !0 }),
                                  ],
                              }),
                    );
                return (0, a.jsxs)(b.Cj, {
                    ref: D,
                    'data-intersection-property-id': K,
                    className: (0, r.$)(b.$f.root, { [b.$f.root_disabled]: !i.isAvailable }, T().root, s),
                    onClick: W,
                    ...(0, d.Am)(d.Kq.clip.HORIZONTAL_CLIP_CARD),
                    children: [
                        ei,
                        (0, a.jsx)(b.ro, {
                            isDisabled: !i.isAvailable,
                            title: J,
                            artistsComponent: ee,
                            getDescriptionTexts: i.getDescriptionTexts,
                            explicitMarkVariant: i.explicitDisclaimer,
                            isLiked: i.isLiked,
                        }),
                        (0, a.jsx)(E, { className: b.$f.controlsBar, clip: i, likeIconSize: y }),
                    ],
                });
            });
        },
        73717: (e) => {
            e.exports = {
                itemCounter_3: 'ClipsCarouselContent_itemCounter_3__c_H3V',
                item: 'ClipsCarouselContent_item__Yy7_P',
                important: 'ClipsCarouselContent_important__nZYA0',
                itemCounter_5: 'ClipsCarouselContent_itemCounter_5__QeQd_',
            };
        },
        84883: (e, t, i) => {
            'use strict';
            i.d(t, { useClipDisclaimer: () => r });
            var a = i(83252);
            let r = (e) => {
                let { clip: t, callback: i, disclaimerRejectHandler: r } = e;
                return (0, a.lVe)({ entity: t, callback: i, onReject: r, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
            };
        },
        95424: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => d });
            var a,
                r = i(94377),
                l = i(61910),
                s = {
                    352: (e) => {
                        e.exports = r;
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(l, 2));
                    },
                },
                n = {};
            function o(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var i = (n[e] = { exports: {} });
                return s[e](i, i.exports, o), i.exports;
            }
            var c = {};
            (() => {
                Object.defineProperty(c, '__esModule', { value: !0 }), (c.useDebouncedToggle = void 0);
                let e = o(352),
                    t = o(810);
                c.useDebouncedToggle = (i) => {
                    let { delay: a, initialState: r, throttleTimeout: l } = i,
                        s = (0, t.useRef)(null),
                        [n, o] = (0, t.useState)(!!r),
                        c = (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(() => {
                                    o(!r),
                                        s.current && window.clearTimeout(s.current),
                                        (s.current = window.setTimeout(() => {
                                            o(!!r);
                                        }, a));
                                }, l),
                            [a, r, l],
                        ),
                        d = (0, t.useCallback)(() => {
                            o(!!r), s.current && window.clearTimeout(s.current);
                        }, [r]);
                    return (
                        (0, t.useEffect)(
                            () => () => {
                                s.current && window.clearTimeout(s.current);
                            },
                            [],
                        ),
                        { state: n, handleDebouncedToggle: c, reset: d }
                    );
                };
            })(),
                c.__esModule;
            var d = c.useDebouncedToggle;
        },
    },
]);
