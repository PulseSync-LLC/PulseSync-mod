(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5646],
    {
        3377: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => _ });
            var s = i(32290),
                r = i(96103),
                a = i(21916),
                n = i(63618),
                o = i(39407),
                l = i(71926),
                c = i(94218),
                d = i(55556),
                m = i.n(d);
            let u = (0, r.PA)(() =>
                (0, s.jsxs)('div', {
                    className: m().root,
                    children: [
                        (0, s.jsx)(l.DZ, {
                            className: (0, n.$)(m().title, m().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(l.HL, {
                            className: (0, n.$)(m().text, m().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(o.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: m().button }),
                    ],
                }),
            );
            var p = i(20472),
                h = i(57594);
            let _ = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: r } = (0, h.g)();
                return r.isAuthorized ? t : (i && (0, a.redirect)(p.Z.main.href), (0, s.jsx)(u, {}));
            });
        },
        3796: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => a });
            var s = i(21916),
                r = i(55178);
            let a = (e) => {
                let t = (0, s.usePathname)(),
                    [i, a] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t);
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, i, t]);
            };
        },
        4820: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var s = i(32290),
                r = i(55178),
                a = i(21732),
                n = i(71926),
                o = i(91624),
                l = i.n(o);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [o, c] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, s.jsx)(
                            n.HL,
                            {
                                className: l().descriptionTextItem,
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
        7944: (e) => {
            e.exports = {
                root: 'CollectionShelfNewEpisodesPage_root__HTWkS',
                scrollableContainer: 'CollectionShelfNewEpisodesPage_scrollableContainer__xGZcJ',
                footer: 'CollectionShelfNewEpisodesPage_footer__0i466',
            };
        },
        12989: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => f });
            var s = i(55178),
                r = i(16172),
                a = i(52068),
                n = i(6752),
                o = i(62376),
                l = i(1677),
                c = i(48922),
                d = i(84782),
                m = i(30915),
                u = i(18746),
                p = i(2792),
                h = i(37240),
                _ = i(51012),
                x = i(47498);
            let f = () => {
                let e = (0, o.U)(),
                    t = (0, a.st)(),
                    { hash: i } = (0, a.gf)(),
                    { pageId: f, displayReasonId: v } = (0, h.$)(),
                    { tabId: g, tabPos: A, isTabSelectedByDefault: b } = (0, x.R)(),
                    { offsetBlockPosY: j } = (0, m.u)(),
                    { blockType: N, blockId: S, blockPosX: k, blockPosY: T, mainObjectId: y, mainObjectType: E, displayReasonId: w } = (0, d.N)(),
                    { filterKey: I, filterValue: C, filterPos: L } = (0, u.G)(),
                    { objectType: O, objectsCount: R, objectId: P, objectPosX: W, objectPosY: D } = (0, p.J)(),
                    { skeleton: z } = (0, _.b)(),
                    F = null != w ? w : v,
                    M = (0, n.L)(() => (void 0 !== j && void 0 !== T ? j + T : T));
                return (0, s.useCallback)(
                    (s, a) => {
                        if (!t || !f || !c.xK.includes(f) || !c.fD.includes(f)) return;
                        let n = l.F[f];
                        if (!n) return;
                        let o = {
                            hash: i,
                            pageId: n,
                            entityType: N,
                            entityId: S,
                            entityPosX: k,
                            entityPosY: M,
                            objectsCount: R,
                            viewUuid: a,
                            objectType: O,
                            objectId: P,
                            objectPosX: W,
                            objectPosY: D,
                        };
                        void 0 !== I && ((o.filterKey = I), (o.filterValue = C), (o.filterPos = L)),
                            c.qG.includes(f) && ((o.tabId = g), (o.tabPos = A), (o.isTabSelectedByDefault = b)),
                            z && (o.skeletonId = z),
                            'string' == typeof y && 'string' == typeof E && ((o.mainObjectType = E), (o.mainObjectId = y)),
                            F && (o.displayReasonId = F);
                        let d = (0, r.Fx)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        d && (s ? (0, r.Pf)(t.evgenInstance, d) : (0, r.nv)(t.evgenInstance, d));
                    },
                    [t, F, S, k, M, N, I, L, C, i, b, e, y, E, P, W, D, O, R, f, z, g, A],
                );
            };
        },
        13798: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => x });
            var s = i(32290),
                r = i(63618),
                a = i(96103),
                n = i(55178),
                o = i(60900),
                l = i(26252),
                c = i(21732),
                d = i(6752),
                m = i(82586),
                u = i(57594),
                p = i(60244),
                h = i(90006),
                _ = i.n(h);
            let x = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: a, containerClassName: h, variant: x, size: f = 'xxxs', ...v } = e,
                    { formatMessage: g } = (0, o.A)(),
                    {
                        settings: { isMobile: A },
                    } = (0, u.g)(),
                    [b, j] = (0, n.useState)(null),
                    N = (0, d.L)(() => {
                        switch (x) {
                            case l.JU.E:
                                return 'explicit';
                            case l.JU.AGE_12:
                            case l.JU.AGE_16:
                            case l.JU.AGE_18:
                                return 'adult';
                            case l.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    S = (0, n.useMemo)(() => g({ id: 'extra-explicit.explicit-mark' }), [g]);
                (0, n.useEffect)(() => {
                    i && i().then(j);
                }, [i, a]);
                let k = (null == b ? void 0 : b.join('\n')) || '',
                    T = !!(null == b ? void 0 : b.length) && !A,
                    y = k.length > 0 ? k : S;
                return (0, s.jsx)(p.k, {
                    description: k,
                    placement: 'bottom-start',
                    enabled: T,
                    children: (0, s.jsx)('span', {
                        className: h,
                        children:
                            x === l.JU.SUBSTITUTED
                                ? (0, s.jsxs)('svg', {
                                    className: (0, r.$)(_().explicitMark, t),
                                    viewBox: '0 0 16 16',
                                    role: 'img',
                                    'aria-label': y,
                                    style: {
                                        width: 'var(--ym-icon-size-'.concat(f, ')'),
                                        height: 'var(--ym-icon-size-'.concat(f, ')'),
                                    },
                                    ...v,
                                    'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                    children: [
                                        (0, s.jsx)('circle', {
                                            cx: '8',
                                            cy: '8',
                                            r: '5.5',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '1.5',
                                        }),
                                        (0, s.jsx)('text', {
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
                                : (0, s.jsx)(m.I, {
                                    className: (0, r.$)(_().explicitMark, t),
                                    'aria-label': y,
                                    variant: N,
                                    size: f,
                                    ...v,
                                    'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                }),
                    }),
                });
            });
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        23352: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var s = i(55178),
                r = i(12989),
                a = i(80536);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, s.useRef)(null),
                    o = (0, r.D)(),
                    l = (0, s.useId)(),
                    c = (0, s.useContext)(a.B),
                    d = (0, s.useCallback)(
                        (s, r) => {
                            e ? e(s, i ? r : void 0) : o(s, r), t && c.unobserveElement(l);
                        },
                        [e, c, l, o, t, i],
                    );
                return (
                    (0, s.useEffect)(
                        () => (
                            c.observeElement({ elementRef: n, elementId: l, callback: d }),
                            () => {
                                c.unobserveElement(l);
                            }
                        ),
                        [e, c, d, l, o],
                    ),
                    { ref: n, intersectionPropertyId: l }
                );
            };
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => m });
            var s = i(32290),
                r = i(55178),
                a = i(60900),
                n = i(21732),
                o = i(63423),
                l = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: r,
                            radius: d,
                            iconSize: m,
                            disabled: u,
                            onClick: p,
                            iconClassName: h,
                            className: _,
                            forwardRef: x,
                            style: f,
                            children: v,
                        } = e,
                        { formatMessage: g } = (0, a.A)(),
                        A = g({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(o.$, {
                        className: _,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': A,
                        onClick: p,
                        ref: x,
                        icon: (0, s.jsx)(l.I, { variant: 'trailer', size: m, className: h }),
                        disabled: u,
                        'data-intersection-property-id': c.N,
                        style: f,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                m = (0, r.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
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
        30542: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            var s = i(60900),
                r = i(64605);
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
        39597: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 3377)), Promise.resolve().then(i.bind(i, 40942));
        },
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        40942: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionShelfNewEpisodesPage: () => P });
            var s = i(32290),
                r = i(96103),
                a = i(21916),
                n = i(55178),
                o = i(21732),
                l = i(91027),
                c = i(46049),
                d = i(71926),
                m = i(64170),
                u = i(7999),
                p = i(83808),
                h = i(83920),
                _ = i(3796),
                x = i(57594),
                f = i(58054),
                v = i(32468),
                g = i(74694),
                A = i(63618),
                b = i(39407),
                j = i(71483),
                N = i(63423),
                S = i(82586),
                k = i(94631),
                T = i(20472),
                y = i(84062),
                E = i(98350),
                w = i(34223),
                I = i(82535),
                C = i.n(I);
            let L = (0, r.PA)(() => {
                let {
                        sonataState: e,
                        collection: {
                            shelf: { newEpisodes: t },
                        },
                    } = (0, x.g)(),
                    i = (0, y.Z)(T.Z.nonMusic.href),
                    r = (0, n.useMemo)(() => {
                        var i;
                        return null == (i = t.tracks)
                            ? void 0
                            : i.map((i, r) =>
                                  (0, s.jsx)(
                                      k.K,
                                      {
                                          track: i,
                                          playContextParams: {
                                              contextData: { type: j.K.Album, meta: { id: i.entityId }, from: t.typeForFrom || '' },
                                              queueParams: { index: r, entityId: i.id },
                                              loadContextMeta: !0,
                                              entitiesData: e.unloadedEntitiesDataFromModels,
                                          },
                                          withPodcastName: !0,
                                      },
                                      i.entityId,
                                  ),
                              );
                    }, [t.tracks, t.typeForFrom, e.unloadedEntitiesDataFromModels]),
                    a = (0, n.useMemo)(
                        () =>
                            t.isEmpty
                                ? (0, s.jsx)(b.A, { id: 'error-messages.empty-shelf-new-episodes-title-no-tracks' })
                                : (0, s.jsx)(b.A, { id: 'error-messages.empty-shelf-new-episodes-title' }),
                        [t.isEmpty],
                    );
                return (t.isNeededToLoad && (0, n.use)(t.getData()), t.isLoading)
                    ? (0, s.jsx)(w.D, { variant: E.X.PLAYLIST, isActive: !0 })
                    : (0, s.jsxs)('div', {
                          className: (0, A.$)(C().root, { [C().root_emptyList]: t.isEmpty }),
                          children: [
                              r,
                              (0, s.jsxs)('div', {
                                  className: C().wrapper,
                                  children: [
                                      (0, s.jsx)('div', { className: C().iconBackground, children: (0, s.jsx)(S.I, { variant: 'like', size: 'l' }) }),
                                      (0, s.jsx)(d.DZ, { className: C().title, variant: 'h3', size: 'xs', children: a }),
                                      !t.isEmpty &&
                                          (0, s.jsx)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'l',
                                              weight: 'normal',
                                              children: (0, s.jsx)(b.A, { id: 'error-messages.empty-shelf-new-episodes-text' }),
                                          }),
                                      (0, s.jsx)(N.$, {
                                          onClick: i,
                                          className: C().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 's',
                                          radius: 'xxxl',
                                          children: (0, s.jsx)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: (0, s.jsx)(b.A, { id: 'error-messages.empty-shelf-liked-page-link' }),
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
            var O = i(7944),
                R = i.n(O);
            let P = (0, r.PA)(() => {
                let {
                        collection: {
                            shelf: { newEpisodes: e },
                        },
                    } = (0, x.g)(),
                    { contentScrollRef: t, setContentScrollRef: i } = (0, h.g)(),
                    r = (0, p.W)(),
                    A = (0, a.useRouter)(),
                    b = (0, l.c)(() => {
                        var t;
                        (null == (t = e.playlist) ? void 0 : t.uuid) && A.replace(e.playlist.url);
                    });
                return ((0, n.useEffect)(() => {
                    e.isResolved && e.withPlaylist && b();
                }, [e.isResolved, e.withPlaylist, b]),
                (0, n.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, _.J)(e.isResolved),
                e.isRejected)
                    ? (0, s.jsx)(m.SomethingWentWrong, {})
                    : (0, s.jsxs)(u.h, {
                          scrollElement: t,
                          outerTitle: e.title,
                          children: [
                              (0, s.jsx)(g.Y, {
                                  variant: g.V.TEXT,
                                  withForwardControl: !1,
                                  withBackwardControl: r.canBack,
                                  children: (0, s.jsx)(d.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: e.title }),
                              }),
                              (0, s.jsxs)(c.N, {
                                  ref: i,
                                  containerClassName: R().scrollableContainer,
                                  className: R().root,
                                  'data-test-id': o.Xk.collection.COLLECTION_SHELF_NEW_EPISODES_PAGE,
                                  children: [(0, s.jsx)(L, {}), (0, s.jsx)(v.A, { children: (0, s.jsx)(f.w, { className: R().footer }) })],
                              }),
                          ],
                      });
            });
        },
        41566: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => d });
            var s = i(32290),
                r = i(96103),
                a = i(21732),
                n = i(82586),
                o = i(19740),
                l = i(30542),
                c = i(57594);
            let d = (0, r.PA)((e) => {
                let { isLiked: t, onClick: i, className: r, albumType: d, disabled: m } = e,
                    { user: u } = (0, c.g)(),
                    p = t ? 'liked' : 'like',
                    h = (0, l.$)(t, d);
                return (0, s.jsx)(o.Dr, {
                    className: r,
                    onClick: i,
                    icon: (0, s.jsx)(n.I, { variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !u.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        41677: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => M });
            var s = i(32290),
                r = i(63618),
                a = i(96103),
                n = i(55178),
                o = i(70280),
                l = i(57594),
                c = i(53514),
                d = i(40484),
                m = i.n(d),
                u = i(60900),
                p = i(16172),
                h = i(21732),
                _ = i(91027),
                x = i(71926),
                f = i(47745),
                v = i(84062),
                g = i(28999),
                A = i(61258),
                b = i(19383);
            let j = (0, a.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: r,
                            captionClassName: a,
                            captionSize: n = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: m,
                        } = e,
                        { formatMessage: j } = (0, u.A)(),
                        {
                            track: N,
                            settings: { isMobile: S },
                        } = (0, l.g)(),
                        k = (0, v.Z)(t.url),
                        { sendNavigateSearchFeedback: T } = (0, g.z)(),
                        y = (0, f.N)(),
                        E = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: s, fullscreenPlayer: r, fullscreenVideoPlayer: a } = (0, l.g)(),
                                { modal: n } = s;
                            return (0, b.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), n.isOpened && (s.reset(), n.close()), r.modal.isOpened && r.modal.close();
                                },
                                onAfterHandled: () => {
                                    a.modal.isOpened && (a.modal.close(), a.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, _.c)((e) => {
                                S && N.isOpened && N.close(), k(e);
                            }),
                        }),
                        w = (0, _.c)((e) => {
                            y({ to: p.QT.ArtistScreen }), null == T || T(), E(e);
                        });
                    return i && !t.various
                        ? (0, s.jsx)(A.N, {
                              'aria-label': j({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: r,
                              href: t.url,
                              onClick: w,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: m,
                                  children: (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: a, children: t.name }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: m,
                              children: (0, s.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: a,
                                  title: d ? void 0 : c || t.name,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                N = (e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: r,
                            captionClassName: a,
                            captionSize: o,
                            allArtistsTitle: l,
                            withCustomTooltip: c,
                            hoverSettings: d,
                            shouldUseSeparator: m = !0,
                        } = e,
                        u = (0, n.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              m ? t.separator : '',
                                              (0, s.jsx)(
                                                  j,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: r,
                                                      captionClassName: a,
                                                      captionSize: o,
                                                      allArtistsTitle: l,
                                                      withCustomTooltip: c,
                                                      hoverSettings: d,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, m, i, r, a, o, l, c, d]);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(j, {
                                artist: t,
                                withLink: i,
                                linkClassName: r,
                                captionClassName: a,
                                captionSize: o,
                                allArtistsTitle: l,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            u,
                        ],
                    });
                };
            var S = i(39407),
                k = i(63887);
            let T = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: a } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(k.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(m().spoiler, i),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(S.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var y = i(8055),
                E = i(6752),
                w = i(78035),
                I = i(78176),
                C = i(83598),
                L = i.n(C);
            let O = (0, a.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, w.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: r, children: t }),
                            (0, s.jsx)(o.ZI, { className: L().tooltipContent, children: i.map((e) => (0, s.jsx)(I.V, { artist: e, className: L().artistItem }, e.id)) }),
                        ],
                    });
                }),
                R = (0, n.forwardRef)((e, t) => (0, s.jsx)(O, { forwardRef: t, ...e }));
            var P = i(19740),
                W = i(52598),
                D = i.n(W);
            let z = (0, a.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: a } = (0, u.A)();
                    return (0, s.jsx)(P.W1, {
                        isMobile: !0,
                        className: (0, r.$)(D().root, D().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(I.V, { artist: e }, e.id)),
                    });
                }),
                F = (0, a.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [a, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, l.g)(),
                        d = (0, _.c)(() => {
                            let e = r.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, E.L)(() =>
                            (0, y.A)(() => {
                                d();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                d(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, d],
                        ),
                        (0, n.useEffect)(() => {
                            d();
                        }, [t, d]),
                        0 !== t.length)
                    )
                        return (a || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(z, { artists: t, label: i }) : (0, s.jsx)(R, { artists: t, label: i })) : i;
                }),
                M = (0, a.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: a = ', ',
                            lineClamp: d,
                            visibleArtistsCount: u,
                            withLink: p = !0,
                            spoilerClassName: h,
                            linkClassName: _,
                            captionClassName: x,
                            captionSize: f,
                            variant: v = 'breakAll',
                            withAllArtistsTitle: g = !0,
                            withComposer: A = !0,
                            spoilerComponent: b,
                            withCustomTooltip: j = !0,
                            artistIdWithoutLink: S,
                            withContextMenu: k,
                        } = e,
                        y = (0, n.useRef)(null),
                        [E, w] = (0, n.useState)(!1),
                        I = g
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
                            settings: { isMobile: C },
                        } = (0, l.g)(),
                        L = 1 === i.length,
                        O = (0, n.useCallback)((e) => {
                            w(!0), e.preventDefault();
                        }, []),
                        R = (0, n.useMemo)(() => {
                            let e = i;
                            return (
                                u && !E && (e = i.slice(0, u)),
                                e.reduce((e, t) => {
                                    if (!A && t.isComposer) return e.length ? e : [];
                                    let i = (0, s.jsx)(
                                        N,
                                        {
                                            artist: t,
                                            linkClassName: _,
                                            captionClassName: x,
                                            withLink: p && t.id !== S && (((!C || L) && k) || !k),
                                            captionSize: f,
                                            allArtistsTitle: I,
                                            withCustomTooltip: j,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!a,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([a, i]) : [i];
                                }, [])
                            );
                        }, [i, u, E, A, C, L, k, _, x, p, S, f, I, j, a]),
                        P = (0, n.useMemo)(() => {
                            if (!E && u && u < i.length) {
                                let e = i.length - u;
                                return (0, n.isValidElement)(b) ? b : (0, s.jsx)(T, { spoilerClassName: h, spoilerArtistsCount: e, handleOnSpoilerClick: O });
                            }
                        }, [i.length, O, E, h, b, u]),
                        W = (0, n.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        D = (0, s.jsx)(o.m_, {
                            referenceRef: y,
                            enabled: !!(g && I) && j && !k && !C,
                            offsetOptions: 4,
                            placement: 'top',
                            text: I,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: W,
                                className: (0, r.$)(m().root, m()['root_variant_'.concat(v)], { [m().root_clamp]: d && d > 0 }, { [m().ellipsis]: !d }, t),
                                title: g && I && !j && !k ? I : void 0,
                                children: [R, P],
                            }),
                        });
                    return k ? (0, s.jsx)(F, { labelRef: y, artists: i, label: D }) : D;
                });
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        55556: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        56008: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s });
            let s = (0, i(55178).createContext)({ pageAlbumId: void 0 });
        },
        60244: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var s = i(32290),
                r = i(21732),
                a = i(70280),
                n = i(71926),
                o = i(48736),
                l = i.n(o);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: o, placement: d = 'top', children: m } = e;
                    return (0, s.jsxs)(a.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            m,
                            (0, s.jsx)(a.ZI, {
                                className: l().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
                                children: (0, s.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, s.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, s.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        63363: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => v });
            var s = i(32290),
                r = i(60900),
                a = i(91027),
                n = i(67732),
                o = i(45477),
                l = i(75582),
                c = i(57594),
                d = i(90357),
                m = i(92708),
                u = i(55178),
                p = i(63380),
                h = i(96103),
                _ = i(97755),
                x = i(79238);
            let f = (0, h.PA)((e) => {
                    let { album: t, closeToast: i, withLink: r } = e,
                        a = (0, x.b)(t);
                    return (0, s.jsx)(_.O, {
                        closeToast: i,
                        entityVariant: a,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: r,
                    });
                }),
                v = (e) => {
                    let {
                            user: t,
                            paywall: i,
                            albumCPA: { isPlusCPAEnabled: h },
                        } = (0, c.g)(),
                        { formatMessage: _ } = (0, r.A)(),
                        { notify: x } = (0, l.l)(),
                        v = (() => {
                            let { notify: e } = (0, l.l)(),
                                [t, i] = (0, u.useState)(!1),
                                { formatMessage: n } = (0, r.A)();
                            return (0, a.c)(async (r) => {
                                let { album: a, withLink: l = !0, withNotification: c = !0 } = r;
                                if (t) return;
                                let u = { ...(0, m.HO)(a), url: a.url, isLiked: !a.isLiked };
                                i(!0);
                                let h = await a.toggleLike();
                                i(!1),
                                    c &&
                                        (h === p.f.OK
                                            ? e((0, s.jsx)(f, { withLink: l, album: u }), { containerId: o.u.INFO })
                                            : e((0, s.jsx)(d.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                            });
                        })(),
                        { pageAlbumId: g } = (0, n.T)();
                    return (0, a.c)(async () => {
                        if (e)
                            return h({ pageAlbumId: g, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void i.openModal()
                                : t.isAuthorized
                                  ? v({ album: e })
                                  : void x((0, s.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    });
                };
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => b });
            var s = i(32290),
                r = i(63618),
                a = i(96103),
                n = i(55178),
                o = i(60900),
                l = i(39407),
                c = i(63423),
                d = i(82586),
                m = i(71926),
                u = i(16172),
                p = i(52068),
                h = i(62376),
                _ = i(37240),
                x = i(83920),
                f = i(20472),
                v = i(12894),
                g = i(30310),
                A = i.n(g);
            let b = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: a } = (0, o.A)(),
                    g = a({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: i } = (0, p.gf)(),
                        { pageId: s } = (0, _.$)(),
                        r = (0, h.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !s) return;
                        let a = (0, u.Fx)({
                            params: {
                                entityType: u.LA.Error,
                                entityId: u.LA.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: s,
                                pageStyle: u.QL.Fullscreen,
                                pagePlacement: u.c4.Fullscreen,
                                mainObjectType: u.ky.NonApplicable,
                                mainObjectId: u.ky.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, u.z5)(t.evgenInstance, a);
                    }, [t, e, i, s, r]);
                })(g);
                let { sendRefreshEvent: b } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: i } = (0, _.$)(),
                            s = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let r = (0, u.Fx)({
                                    params: {
                                        actionType: u.X2.Refresh,
                                        userInteractionType: u.gi.Tap,
                                        entityType: u.LA.Error,
                                        entityId: u.LA.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: u.QL.Fullscreen,
                                        pagePlacement: u.c4.Fullscreen,
                                        mainObjectType: u.ky.NonApplicable,
                                        mainObjectId: u.ky.NonApplicable,
                                    },
                                    logger: s,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, u.bv)(e.evgenInstance, r);
                            }, [e, t, i, s]),
                        };
                    })(),
                    j = (0, n.useCallback)(() => {
                        b(), (window.location.href = f.Z.main.href);
                    }, [b]),
                    { contentRef: N } = (0, x.g)();
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(A().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(v.L, { withBackwardFallback: '/', className: (0, r.$)(A().navigation, { [A().navigation_desktop]: !N }), withForwardControl: !1 }),
                        (0, s.jsxs)('div', {
                            className: (0, r.$)(A().content, { [A().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(d.I, { className: A().icon, variant: 'attention', size: 'xxl' }),
                                (0, s.jsx)(m.DZ, { className: (0, r.$)(A().title, A().important), variant: 'h3', size: 'xs', children: g }),
                                (0, s.jsxs)(m.HL, {
                                    className: (0, r.$)(A().text, A().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, s.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, s.jsx)(c.$, {
                                    onClick: j,
                                    className: A().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, s.jsxs)(m.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, s.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        67732: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var s = i(55178),
                r = i(56008);
            function a() {
                return (0, s.useContext)(r.H);
            }
        },
        78176: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => g });
            var s = i(32290),
                r = i(63618),
                a = i(96103),
                n = i(55178),
                o = i(16172),
                l = i(21732),
                c = i(91027),
                d = i(50162),
                m = i(19740),
                u = i(86269),
                p = i(71926),
                h = i(47745),
                _ = i(84062),
                x = i(57594),
                f = i(16510),
                v = i.n(f);
            let g = (0, a.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: a } = (0, x.g)(),
                    f = (0, _.Z)(t.url),
                    A = (0, h.N)(),
                    b = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(g, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    j = (0, c.c)((e) => {
                        a.modal.isOpened && a.modal.close(), A({ to: o.QT.ArtistScreen }), f(e);
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(m.Dr, {
                            className: (0, r.$)(v().root, i),
                            onClick: j,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(u.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, s.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        b,
                    ],
                });
            });
        },
        79238: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            var s = i(64605),
                r = i(97647);
            let a = (e) => {
                switch (e.type) {
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
        80536: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => s });
            let s = (0, i(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        81354: (e, t, i) => {
            'use strict';
            i.d(t, { XU: () => m });
            var s,
                r,
                a = i(30782),
                n = i(55178),
                o = i(60900);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(s || (s = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(r || (r = {}));
            var l = function (e) {
                var t = (0, o.A)(),
                    i = e.value,
                    s = e.children,
                    r = (0, a.__rest)(e, ['value', 'children']);
                return s(t.formatNumberToParts(i, r));
            };
            function c(e) {
                var t = function (t) {
                    var i = (0, o.A)(),
                        s = t.value,
                        r = t.children,
                        n = (0, a.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof s ? new Date(s || 0) : s;
                    return r('formatDate' === e ? i.formatDateToParts(l, n) : i.formatTimeToParts(l, n));
                };
                return (t.displayName = r[e]), t;
            }
            function d(e) {
                var t = function (t) {
                    var i = (0, o.A)(),
                        s = t.value,
                        r = t.children,
                        l = (0, a.__rest)(t, ['value', 'children']),
                        c = i[e](s, l);
                    if ('function' == typeof r) return r(c);
                    var d = i.textComponent || n.Fragment;
                    return n.createElement(d, null, c);
                };
                return (t.displayName = s[e]), t;
            }
            (l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts');
            var m = d('formatDate');
            d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), c('formatDate'), c('formatTime');
        },
        82535: (e) => {
            e.exports = {
                title: 'CollectionShelfNewEpisodes_title__y_SoT',
                root: 'CollectionShelfNewEpisodes_root__VojSS',
                root_emptyList: 'CollectionShelfNewEpisodes_root_emptyList__jsjSW',
                wrapper: 'CollectionShelfNewEpisodes_wrapper__Z2EOe',
                iconBackground: 'CollectionShelfNewEpisodes_iconBackground__K4Xui',
                button: 'CollectionShelfNewEpisodes_button__3DALk',
            };
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        91624: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        92013: (e, t, i) => {
            'use strict';
            var s;
            i.d(t, { T: () => s }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(s || (s = {}));
        },
        94218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => u });
            var s = i(32290),
                r = i(21916),
                a = i(39407),
                n = i(21732),
                o = i(91027),
                l = i(63423),
                c = i(71926),
                d = i(70204),
                m = i(34186);
            let u = (e) => {
                let { size: t = 'm', variant: i = 'default', withRipple: u = !0, buttonText: p, isBlock: h, key: _, className: x } = e,
                    f = (0, r.useRouter)(),
                    v = (0, m.N)().get(d.QG),
                    g = (0, o.c)(() => {
                        v.authorizationUrl && f.push(v.authorizationUrl);
                    });
                return (0, s.jsx)(
                    l.$,
                    {
                        onClick: g,
                        className: x,
                        isBlock: h,
                        color: 'primary',
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: u,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    _,
                );
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                5718, 7034, 6639, 3183, 7972, 8868, 7231, 6347, 9763, 7258, 3244, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 6252, 6477, 7275, 2586, 8347,
                4522, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 6341, 3759, 4220, 9562, 7358,
            ],
            () => e((e.s = 39597)),
        ),
            (_N_E = e.O());
    },
]);
