(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6271],
    {
        5311: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => x });
            var i = r(25839),
                o = r(88204),
                s = r(39004),
                a = r(8487),
                l = r(61493),
                n = r(71035),
                c = r(66738),
                d = r(10820),
                u = r(76457),
                _ = r(53712),
                m = r(56120),
                C = r(27954),
                p = r(55491),
                h = r(14240),
                v = r(16386),
                f = r(74682);
            let x = (0, o.PA)((e) => {
                let { onOpenChange: t, open: r, placement: o, isFullscreenMobile: x = !1, icon: k, size: b, clip: A, ...w } = e,
                    { currentClipInfo: j, settings: N, user: L } = (0, C.g)(),
                    { formatMessage: I } = (0, s.A)(),
                    { shareLink: T, pathname: y } = (0, h.b)(_.Z.video.href, { query: { ids: String(A.clipId) } }),
                    R = x || N.isMobile;
                (0, m.N)(r);
                let S = (0, u.K)(A),
                    g = (0, n.c)(() => {
                        (j.setClipId(A.clipId), j.modal.open());
                    }),
                    O = { variant: p.Y.CLIP, id: A.clipId, title: A.title, path: y };
                return (0, i.jsxs)(d.W1, {
                    isMobile: R,
                    placement: o,
                    offsetOptions: -10,
                    open: r,
                    onOpenChange: t,
                    icon: k,
                    size: b,
                    containerDataTestId: l.Kq.clip.CLIP_CONTEXT_MENU,
                    ariaLabel: I({ id: 'interface-actions.context-menu' }),
                    variant: 'text',
                    ...w,
                    children: [
                        (0, i.jsx)(v.T, { onClick: S, isLiked: A.isLiked, disabled: !L.isAuthorized }),
                        (0, i.jsx)(f.H, { shareLink: T, entityMeta: O }),
                        (0, i.jsx)(d.Dr, {
                            onClick: g,
                            icon: (0, i.jsx)(c.I, { variant: 'info', size: 'xxs' }),
                            'data-test-id': l.Kq.clip.CLIP_CONTEXT_MENU_ABOUT_TRACK_BUTTON,
                            children: (0, i.jsx)(a.A, { id: 'track-modal.clip-title' }),
                        }),
                    ],
                });
            });
        },
        7429: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => h });
            var i = r(25839),
                o = r(82298),
                s = r(88204),
                a = r(74631),
                l = r(59342),
                n = r(36619),
                c = r(5365),
                d = r(95314),
                u = r(15049),
                _ = r(56859),
                m = r(7987),
                C = r.n(m);
            let p = (0, s.PA)((e) => {
                    let {
                            forwardRef: t,
                            clipCardTitleClassName: r,
                            clipCardArtistLinkClassName: s,
                            carouselItemClassName: m,
                            isShimmerVisible: p,
                            isShimmerActive: h,
                            containerClassName: v,
                            artistIdWithoutLink: f,
                            withVideo: x = !0,
                            clips: k,
                            shouldOpenModalOnCardClick: b = !0,
                            itemCounter: A,
                        } = e,
                        w = (0, a.useId)(),
                        j = (0, a.useRef)(String((0, l.A)())),
                        N = (0, a.useMemo)(() => {
                            if (p) return Array.from({ length: 5 }, (e, t) => (0, i.jsx)(_.k, { isActive: h }, t));
                            return null == k
                                ? void 0
                                : k.map((e, t) =>
                                      (0, i.jsx)(
                                          d.B,
                                          {
                                              objectType: n.DomainObjectType.Video,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == k ? void 0 : k.length,
                                              objectId: String(e.clipId),
                                              children: (0, i.jsx)(u.F, {
                                                  titleClassName: r,
                                                  artistLinkClassName: s,
                                                  clip: e,
                                                  withVideo: x,
                                                  artistIdWithoutLink: f,
                                                  viewUuid: j.current,
                                                  shouldOpenModalOnCardClick: b,
                                              }),
                                          },
                                          e.clipId,
                                      ),
                                  );
                        }, [r, s, p, h, f, x, k, b]);
                    return (0, i.jsx)(c.F, {
                        className: (0, o.$)(C().itemCounter, { [C()['itemCounter_'.concat(A)]]: A }, v),
                        ref: t,
                        itemClassName: (0, o.$)(C().item, C().important, m),
                        'aria-labelledby': w,
                        children: N,
                    });
                }),
                h = (0, a.forwardRef)((e, t) => (0, i.jsx)(p, { forwardRef: t, ...e }));
        },
        7929: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        7987: (e) => {
            e.exports = {
                itemCounter_3: 'ClipsCarouselContent_itemCounter_3__c_H3V',
                item: 'ClipsCarouselContent_item__Yy7_P',
                important: 'ClipsCarouselContent_important__nZYA0',
                itemCounter_5: 'ClipsCarouselContent_itemCounter_5__QeQd_',
            };
        },
        14892: (e) => {
            e.exports = { root: 'TextBlockShimmer_root__og5Bj', shimmer: 'TextBlockShimmer_shimmer__TpDdq' };
        },
        15049: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => W });
            var i = r(25839),
                o = r(82298),
                s = r(10508),
                a = r(88204),
                l = r(74631),
                n = r(39004),
                c = r(89288),
                d = r(61493),
                u = r(22939),
                _ = r(71035),
                m = r(51246),
                C = r(23818),
                p = r(86869),
                h = r(4254),
                v = r(4331),
                f = r(65189),
                x = r(63905),
                k = r(28003),
                b = r(67560),
                A = r(40110),
                w = r(20258),
                j = r(52512),
                N = r(30290),
                L = r(91907),
                I = r(68215),
                T = r(18639),
                y = r(77179),
                R = r(50209),
                S = r(27954),
                g = r(62926),
                O = r(97522),
                E = r(49438),
                M = r(87605),
                D = r(68891),
                P = r.n(D);
            let W = (0, a.PA)((e) => {
                var t;
                let {
                        titleClassName: r,
                        artistLinkClassName: a,
                        clip: D,
                        withVideo: W = !0,
                        artistIdWithoutLink: B,
                        viewUuid: U,
                        shouldOpenModalOnCardClick: z = !0,
                    } = e,
                    { fullscreenVideoPlayer: K } = (0, S.g)(),
                    { formatMessage: V } = (0, n.A)(),
                    $ = (0, b.C)(),
                    { from: F } = (0, N.f)({ pageId: w._Q.VIDEO_PLAYER, contextId: K.state.contextId, contextType: u.K.Various, blockId: A.U.CLIPS }),
                    q = (0, I.P)(null != (t = D.duration) ? t : 0),
                    H = (0, x.M)(U),
                    Y = (0, f._)(U),
                    { ref: X, intersectionPropertyId: Z } = (0, j.n)({ callback: H }),
                    G = (0, l.useRef)(null),
                    Q = W && D.previewUrl,
                    J = (0, _.c)(() => {
                        G.current && ((G.current.currentTime = 0), G.current.play());
                    }),
                    ee = (0, l.useMemo)(() => (0, s.A)(J, 500), [J]),
                    et = (0, _.c)(() => {
                        var e;
                        null == (e = G.current) || e.pause();
                    }),
                    er = (0, l.useMemo)(() => K.ids.indexOf(D.clipId), [K, D.clipId]),
                    { isPlaying: ei, togglePlay: eo } = (0, R.D)({
                        playContextParams: {
                            contextData: { type: u.K.Various, meta: { id: T.H.VARIOUS_CLIP_CONTEXT }, from: F },
                            queueParams: { index: er },
                            entitiesData: K.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(D.clipId),
                        sonataState: K.state,
                        playbackId: y.V.CLIP,
                    }),
                    es = z ? D.url : (0, k.J)(K.ids, er),
                    ea = (0, _.c)(() => {
                        z ? ($([D.clipId]), Y()) : ei || eo();
                    }),
                    el = (0, M.X)({ clip: D, callback: ea }),
                    en = V({ id: 'entity-names.clip-name' }, { clipName: D.title }),
                    ec = (0, l.useMemo)(
                        () =>
                            D.isAvailable
                                ? (0, i.jsxs)(p.t, {
                                      radius: 'm',
                                      className: (0, o.$)(P().view, P().cover),
                                      onMouseEnter: ee,
                                      onMouseLeave: et,
                                      onClick: el,
                                      children: [
                                          Q &&
                                              (0, i.jsx)('video', {
                                                  className: P().media,
                                                  ref: G,
                                                  poster: D.thumbnail && (0, c.oZ)(D.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, i.jsx)('source', { src: D.previewUrl, type: 'video/mp4' }),
                                              }),
                                          D.thumbnail &&
                                              (0, i.jsx)(C._V, {
                                                  className: P().image,
                                                  'aria-hidden': !0,
                                                  src: D.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: c.oZ,
                                              }),
                                          void 0 !== D.duration &&
                                              (0, i.jsx)(h.HL, {
                                                  role: 'text',
                                                  'aria-label': q,
                                                  variant: 'span',
                                                  className: P().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: (0, L.E)(D.duration, D.duration) }),
                                              }),
                                          (0, i.jsx)(E.D, { variant: 'filled', className: P().playButton, onClick: el, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, i.jsx)(p.t, {
                                      radius: 'm',
                                      className: P().unavailableCover,
                                      children: (0, i.jsx)(C.Ab, { className: P().image, iconVariant: 'unavailable', 'data-test-id': d.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [q, D.isAvailable, D.thumbnail, D.previewUrl, D.duration, ee, et, el, Q],
                    ),
                    ed = (0, l.useMemo)(
                        () =>
                            D.hasArtists
                                ? (0, i.jsx)(
                                      v.i,
                                      { linkClassName: (0, o.$)(P().artistLink, a), artists: D.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: B },
                                      D.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [B, D, a],
                    );
                return (0, i.jsx)(m.MN, {
                    ref: X,
                    className: P().root,
                    explicitMarkComponent:
                        D.explicitDisclaimer &&
                        (0, i.jsx)(g.N, { getDescriptionTexts: D.getDescriptionTexts, variant: D.explicitDisclaimer, size: 'xxs' }, D.getKey('ExplicitMarkIcon')),
                    'aria-label': en,
                    srTitle: (0, i.jsx)(O.N, { className: P().srTitleLink, href: es, onClick: el, children: en }),
                    title: (0, i.jsxs)(
                        h.HL,
                        {
                            className: (0, o.$)(P().title, r),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            'aria-hidden': !0,
                            children: [
                                (0, i.jsx)(O.N, {
                                    className: P().titleLink,
                                    href: es,
                                    tabIndex: -1,
                                    'aria-label': en,
                                    onClick: el,
                                    'data-test-id': d.Kq.clip.CLIP_META_TITLE,
                                    children: D.title,
                                }),
                                D.version && (0, i.jsx)(h.HL, { className: P().version, variant: 'span', children: ' '.concat(D.version) }),
                            ],
                        },
                        D.getKey('Title'),
                    ),
                    'data-intersection-property-id': Z,
                    view: ec,
                    description: ed,
                    'data-test-id': d.Kq.clip.CLIP_CARD,
                });
            });
        },
        17226: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => i });
            var i = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        18639: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.VARIOUS_CLIP_CONTEXT = 'various-clip-context'), e);
            })({});
        },
        21978: (e) => {
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
        22034: (e) => {
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
        28777: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => x, D: () => v });
            var i = r(25839),
                o = r(82298),
                s = r(26508),
                a = r(74631),
                l = r(89288),
                n = r(36619),
                c = r(61493),
                d = r(5365),
                u = r(26742),
                _ = r(95314),
                m = r(18412),
                C = r(80986),
                p = r(21978),
                h = r.n(p),
                v = (function (e) {
                    return ((e.ONE = 'one'), (e.TWO = 'two'), e);
                })({});
            let f = (e) => {
                    let {
                            className: t,
                            forwardRef: r,
                            isShimmerVisible: p,
                            isColumnsShimmerVisible: v,
                            isHeaderWithoutControls: f,
                            maxColumnsCount: x,
                            carouselItemClassName: k,
                            carouselClassName: b,
                            children: A,
                            itemsCountPerColumn: w,
                            shimmer: j,
                            viewAllActionLink: N,
                            blockHeaderClassName: L,
                            additionalControl: I,
                            blockHeaderDescription: T,
                            blockHeaderTitle: y,
                            blockHeaderCoverUrl: R,
                            withBlockHeaderDescription: S,
                            withBlockHeaderCover: g,
                            blockHeaderHeadingVariant: O,
                            isShimmerActive: E,
                            shouldResetCarouselScroll: M,
                            beforeCarousel: D,
                            ...P
                        } = e,
                        { objectsCount: W } = (0, u.N)(),
                        [B, U] = (0, a.useState)(),
                        z = (0, a.useId)(),
                        K = (0, a.useRef)(null),
                        V = 'two' === x,
                        $ = 'string' == typeof N ? String(N) : void 0,
                        F = null != v ? v : p,
                        q = (0, a.useCallback)(
                            (e) => {
                                let t = (0, s.A)(e, w).slice(0, V ? 2 : 1);
                                return (
                                    1 === t.length ? U('one') : U('two'),
                                    t.map((e, t) => (0, i.jsx)('div', { className: h().column, 'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: e }, t))
                                );
                            },
                            [w, V],
                        ),
                        H = (0, a.useMemo)(() => {
                            if (F) return q(Array.from({ length: 2 * w }, (e, t) => (0, a.cloneElement)(j, { key: t })));
                            return q(A);
                        }, [A, q, F, w, j]),
                        Y = (0, a.useMemo)(
                            () =>
                                f
                                    ? null
                                    : (0, i.jsxs)('div', {
                                          className: h().controlsContainer,
                                          children: [I, (0, i.jsx)(C.X, { carouselRef: K, className: h().controls, backwardControlClassName: h().backwardControl })],
                                      }),
                            [I, f],
                        );
                    return (
                        (0, a.useEffect)(() => {
                            K.current && M && K.current.scrollTo(0, 0);
                        }, [M]),
                        (0, i.jsxs)('section', {
                            ref: r,
                            className: (0, o.$)(h().root, t),
                            ...(0, l.OZ)(P),
                            children: [
                                (0, i.jsx)(_.B, {
                                    objectType: n.DomainObjectType.Shortcut,
                                    objectId: $,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: null != W ? W : 0,
                                    children: (0, i.jsx)(m.T, {
                                        coverUrl: R,
                                        title: y,
                                        description: T,
                                        className: L,
                                        labeledForId: z,
                                        viewAllActionLink: N,
                                        controls: Y,
                                        isShimmerVisible: p,
                                        isShimmerActive: E,
                                        withDescription: S,
                                        withCover: g,
                                        headingVariant: O,
                                    }),
                                }),
                                D,
                                (0, i.jsx)(d.F, {
                                    itemClassName: (0, o.$)(h().item, h()['item_columns_'.concat(F && V ? 'two' : B)], k),
                                    className: b,
                                    ref: K,
                                    'aria-labelledby': z,
                                    'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: H,
                                }),
                            ],
                        })
                    );
                },
                x = (0, a.forwardRef)((e, t) => (0, i.jsx)(f, { forwardRef: t, ...e }));
        },
        36648: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            var i = r(25839),
                o = r(82298),
                s = r(23976),
                a = r(89728),
                l = r.n(a);
            let n = (e) => {
                let { className: t, textClassName: r, isActive: a } = e;
                return (0, i.jsx)('div', { className: (0, o.$)(l().root, t), children: (0, i.jsx)(s.W, { className: (0, o.$)(l().text, r), isActive: a, radius: 's' }) });
            };
        },
        44288: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => n });
            var i = r(25839),
                o = r(82298),
                s = r(23976),
                a = r(14892),
                l = r.n(a);
            let n = (e) => {
                let { className: t, shimmerClassName: r, isActive: a = !1, count: n = 10, minWidth: c = 50, maxWidth: d = 90, multiplicity: u = 1 } = e;
                return (0, i.jsx)('div', {
                    className: (0, o.$)(l().root, t),
                    children: Array.from({ length: n }, (e, t) => {
                        let n = ''.concat(((e, t, r) => Math.floor((Math.floor(Math.random() * (t - e + 1)) + e) / r) * r)(c, d, u), '%');
                        return (0, i.jsx)(s.W, { width: n, className: (0, o.$)(l().shimmer, r), isActive: a, radius: 's' }, t);
                    }),
                });
            };
        },
        51859: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => i, u: () => o });
            var i = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                o = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        56859: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => n });
            var i = r(25839),
                o = r(23976),
                s = r(36648),
                a = r(60205),
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
        60205: (e) => {
            e.exports = {
                root: 'ClipCardShimmer_root__sIvNr',
                cover: 'ClipCardShimmer_cover__yA4jz',
                title: 'ClipCardShimmer_title__MCApK',
                text: 'ClipCardShimmer_text__ajZGv',
            };
        },
        63905: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => C });
            var i = r(67379),
                o = r(17850),
                s = r(59450),
                a = r(71035),
                l = r(20258),
                n = r(26742),
                c = r(25488),
                d = r(97952),
                u = r(10764),
                _ = r(72594),
                m = r(84e3);
            let C = (e) => {
                let t = (0, s.st)(),
                    { hash: r } = (0, s.gf)(),
                    { pageId: C } = (0, d.$)(),
                    { tabId: p, tabPos: h, isTabSelectedByDefault: v } = (0, _.R)(),
                    { blockType: f, blockId: x, blockPosX: k, blockPosY: b, mainObjectType: A, mainObjectId: w } = (0, n.N)(),
                    { objectsCount: j, objectType: N, objectId: L, objectPosX: I, objectPosY: T } = (0, c.J)(),
                    y = (0, m.U)(),
                    { skeleton: R } = (0, u.b)();
                return (0, a.c)((s) => {
                    if (!t || !C || !l.xK.includes(C)) return;
                    let a = {
                        hash: r,
                        pageId: C,
                        entityType: f,
                        entityId: x,
                        entityPosX: k,
                        entityPosY: b,
                        objectsCount: j,
                        viewUuid: e,
                        objectType: N,
                        objectId: L,
                        objectPosX: I,
                        objectPosY: T,
                    };
                    (l.qG.includes(C) && ((a.tabId = p), (a.tabPos = h), (a.isTabSelectedByDefault = v)),
                        R && (a.skeletonId = R),
                        A && (a.mainObjectType = A),
                        w && (a.mainObjectId = w));
                    let n = (0, i.F)({ params: a, logger: y, context: 'useSendEventOnClipShowedOrHidden' });
                    if (n) {
                        if (s) return void (0, o.Pf)(t.evgenInstance, n);
                        (0, o.nv)(t.evgenInstance, n);
                    }
                });
            };
        },
        65189: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => h });
            var i = r(67379),
                o = r(36619),
                s = r(17850),
                a = r(59450),
                l = r(71035),
                n = r(79670),
                c = r(20258),
                d = r(26742),
                u = r(25488),
                _ = r(97952),
                m = r(10764),
                C = r(72594),
                p = r(84e3);
            let h = (e) => {
                let t = (0, a.st)(),
                    { hash: r } = (0, a.gf)(),
                    { pageId: h } = (0, _.$)(),
                    { tabId: v, tabPos: f, isTabSelectedByDefault: x } = (0, C.R)(),
                    { skeleton: k } = (0, m.b)(),
                    { blockType: b, blockId: A, blockPosX: w, blockPosY: j, mainObjectType: N, mainObjectId: L } = (0, d.N)(),
                    { objectsCount: I, objectType: T, objectId: y, objectPosX: R, objectPosY: S } = (0, u.J)(),
                    g = (0, p.U)();
                return (0, l.c)(() => {
                    if (!t || !h || !c.xK.includes(h)) return;
                    let a = {
                        hash: r,
                        pageId: h,
                        entityType: b,
                        entityId: A,
                        entityPosX: w,
                        entityPosY: j,
                        objectId: y,
                        objectType: T,
                        objectPosX: R,
                        objectPosY: S,
                        objectsCount: I,
                        from: n.W[h],
                        to: o.AppScreen.VideoScreen,
                    };
                    (c.qG.includes(h) && ((a.tabId = v), (a.tabPos = f), (a.isTabSelectedByDefault = x)),
                        k && (a.skeletonId = k),
                        N && (a.mainObjectType = N),
                        L && (a.mainObjectId = L));
                    let l = (0, i.F)({ params: a, logger: g, context: 'useSendEventOnClipNavigated' });
                    l && e && (0, s.QS)(t.evgenInstance, l);
                });
            };
        },
        68466: (e) => {
            e.exports = { root: 'MultivibeNDA_root__Xmby8', text: 'MultivibeNDA_text__szNv7' };
        },
        68891: (e) => {
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
        69041: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => A });
            var i = r(25839),
                o = r(82298),
                s = r(46189),
                a = r(88204),
                l = r(74631),
                n = r.t(l, 2),
                c = r(61493),
                d = r(9911),
                u = {
                    810: (e) => {
                        e.exports = n;
                    },
                },
                _ = {},
                m = {};
            ((() => {
                (Object.defineProperty(m, '__esModule', { value: !0 }), (m.useForwardRef = void 0));
                let e = (function e(t) {
                    var r = _[t];
                    if (void 0 !== r) return r.exports;
                    var i = (_[t] = { exports: {} });
                    return (u[t](i, i.exports, e), i.exports);
                })(810);
                m.useForwardRef = function (t, r) {
                    let i = (0, e.useRef)(r);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(i.current) : (t.current = i.current));
                        }, [t]),
                        i
                    );
                };
            })(),
                m.__esModule);
            var C = m.useForwardRef,
                p = r(51859),
                h = r(27954),
                v = r(80986),
                f = r(22034),
                x = r.n(f);
            let k = { [p.u.Desktop]: { start: 40, end: 20 }, [p.u.Mobile]: { start: 40, end: 40 } },
                b = (0, a.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: r,
                            forwardRef: a,
                            scrollPadding: n,
                            isCarouselBetweenArrows: u = !1,
                            controlsWrapperClassName: _,
                            buttonSize: m,
                            buttonVariant: f,
                            withSecondaryColor: b,
                        } = e,
                        {
                            settings: { isMobile: A },
                        } = (0, h.g)(),
                        w = C(a, null),
                        { shouldBackwardButtonBeDisabled: j, shouldForwardButtonBeDisabled: N, shouldHideControls: L } = (0, d.Y)(w),
                        [I, T] = (0, l.useMemo)(() => {
                            let e = (0, s.A)(k, n);
                            return [A ? e[p.u.Mobile].start : e[p.u.Desktop].start, A ? e[p.u.Mobile].end : e[p.u.Desktop].end];
                        }, [n, A]),
                        y = (0, l.useCallback)(
                            (e) => {
                                var t;
                                let r = null == (t = w.current) ? void 0 : t.children[e],
                                    { current: i } = w;
                                if (!i || !(r instanceof HTMLElement)) return;
                                if (r.offsetLeft - i.scrollLeft < I) {
                                    i.scrollLeft = r.offsetLeft - I;
                                    return;
                                }
                                let o = i.scrollLeft + i.clientWidth - r.offsetLeft - r.offsetWidth;
                                o < T && (i.scrollLeft -= o - T);
                            },
                            [w, T, I],
                        ),
                        R = (0, l.useCallback)(
                            (e) => {
                                var t, i;
                                (y(e), null == (t = (i = r.props).onTabChange) || t.call(i, e));
                            },
                            [r, y],
                        ),
                        S = (0, l.cloneElement)(r, { forwardRef: w, className: (0, o.$)(x().wrapper, r.props.className, x().carousel, x().important), onTabChange: R });
                    return (0, i.jsxs)('div', {
                        className: (0, o.$)(
                            x().root,
                            {
                                [x().root_carouselBetweenArrows]: u,
                                [x().root_arrowLeft_hidden]: j,
                                [x().root_arrowRight_hidden]: N,
                                [x().root_arrow_hidden]: j && N && L,
                            },
                            t,
                        ),
                        'data-test-id': c.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, i.jsx)('div', { className: x().list, children: S }),
                            !A &&
                                (0, i.jsx)(v.X, {
                                    className: (0, o.$)(x().buttons, _),
                                    carouselRef: w,
                                    backwardControlClassName: x().control,
                                    forwardControlClassName: x().control,
                                    withSecondaryColor: b,
                                    buttonSize: m,
                                    buttonVariant: f,
                                }),
                        ],
                    });
                }),
                A = (0, l.forwardRef)((e, t) => (0, i.jsx)(b, { forwardRef: t, ...e }));
        },
        70154: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => c });
            var i = r(25839),
                o = r(82298),
                s = r(8487),
                a = r(4254),
                l = r(68466),
                n = r.n(l);
            let c = (e) => {
                let { className: t } = e;
                return (0, i.jsx)('span', {
                    className: (0, o.$)(n().root, t),
                    children: (0, i.jsx)(a.HL, { variant: 'span', size: 'm', weight: 'bold', className: n().text, children: (0, i.jsx)(s.A, { id: 'multivibe.nda' }) }),
                });
            };
        },
        76457: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => h });
            var i = r(25839),
                o = r(33660),
                s = r(74631),
                a = r(39004),
                l = r(31860),
                n = r(91149),
                c = r(92942),
                d = r(27954),
                u = r(57549),
                _ = r(53712),
                m = r(35015),
                C = r(3163);
            let p = (e) => {
                    let { clip: t, closeToast: r } = e;
                    return (0, i.jsx)(C.O, {
                        entityVariant: m.c.CLIP,
                        entityTitle: t.title,
                        collectionUrl: _.Z.collectionClips.href,
                        isLiked: t.isLiked,
                        closeToast: r,
                        coverUri: t.thumbnail,
                    });
                },
                h = (e) => {
                    let { user: t, fullscreenVideoPlayer: r, collection: _ } = (0, d.g)(),
                        { notify: m } = (0, c.l)(),
                        [C, h] = (0, s.useState)(!1),
                        { formatMessage: v } = (0, a.A)();
                    return (0, s.useCallback)(async () => {
                        if (!e) return;
                        let s = r.modal.isOpened ? n.u.FULLSCREEN_INFO : n.u.INFO,
                            a = r.modal.isOpened ? n.u.FULLSCREEN_ERROR : n.u.ERROR;
                        if (!t.isAuthorized) return void m((0, i.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a });
                        if (C) return;
                        let c = { ...(0, o.HO)(e), isLiked: !e.isLiked };
                        h(!0);
                        let d = await e.toggleLike();
                        (h(!1),
                            _.clips.reset(),
                            d === l.f.OK
                                ? m((0, i.jsx)(p, { clip: c }), { containerId: s })
                                : m((0, i.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: a }));
                    }, [e, t.isAuthorized, C, v, m, r.modal.isOpened, _.clips]);
                };
        },
        77179: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            var i = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
        },
        82967: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => f });
            var i = r(25839),
                o = r(82298),
                s = r(88204),
                a = r(74631),
                l = r(61493),
                n = r(54880),
                c = r(50209),
                d = r(27954),
                u = r(6349),
                _ = r(62661),
                m = r(74756),
                C = r(41544),
                p = r(39099),
                h = r(7929),
                v = r.n(h);
            let f = (0, s.PA)((e) => {
                var t;
                let {
                        track: r,
                        playContextParams: s,
                        className: h,
                        withDNDBlock: f,
                        isDragging: x,
                        draggingClassName: k,
                        ignoreDislikedStyles: b,
                        withSecondaryColor: A,
                        handleRemove: w,
                        withDislike: j,
                        withTrailer: N = !0,
                        beforeTitle: L,
                        removeButtonAriaLabel: I,
                        hideControls: T,
                    } = e,
                    y = (0, c.D)({ playContextParams: s, entityId: r.entityId }),
                    {
                        settings: { isMobile: R },
                    } = (0, d.g)(),
                    S = (0, n.X)(r.trackSource, { isMobile: R }),
                    g = (0, a.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.q, {
                                isAvailable: r.isAvailable,
                                isDisliked: r.isDisliked,
                                coverUri: r.coverUri,
                                title: r.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: b,
                                radius: 'xs',
                                ...e,
                            }),
                        [b, r.coverUri, r.isAvailable, r.isDisliked, r.title],
                    );
                return (0, i.jsx)(p.C, {
                    className: (0, o.$)(h, { [v().trackWithDots]: f, [v().important]: f }),
                    track: r,
                    beforeBlock: f ? (0, i.jsx)(_.O, { className: (0, o.$)(v().dots, k), isDragging: x }) : void 0,
                    meta: (0, i.jsx)(C.j, { withArtistLink: S, beforeTitle: L, track: r, ignoreDislikedStyles: b, withSecondaryColor: A }),
                    playButtonCellRender: g,
                    controls: (0, i.jsx)(m.Q, {
                        track: r,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: b,
                        utmLink: null == (t = s.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: A,
                        handleRemove: w,
                        withDislike: j,
                        withTrailer: N,
                        removeButtonAriaLabel: I,
                        hideControls: T,
                    }),
                    ...y,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        87605: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => o });
            var i = r(40207);
            let o = (e) => {
                let { clip: t, callback: r, disclaimerRejectHandler: o } = e;
                return (0, i.l)({ entity: t, callback: r, onReject: o, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
            };
        },
        89728: (e) => {
            e.exports = { root: 'TextShimmer_root__qqWug', text: 'TextShimmer_text__z8oN9' };
        },
    },
]);
