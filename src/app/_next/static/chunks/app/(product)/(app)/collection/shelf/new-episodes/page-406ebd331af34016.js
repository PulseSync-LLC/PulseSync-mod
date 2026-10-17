(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5646],
    {
        148: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        3669: (e, t, s) => {
            'use strict';
            s.d(t, { D: () => v });
            var i = s(74631),
                r = s(67379),
                n = s(20934),
                a = s(59450),
                l = s(49656),
                o = s(84e3),
                c = s(58069),
                d = s(20258),
                u = s(26742),
                p = s(25195),
                m = s(37314),
                _ = s(25488),
                h = s(97952),
                x = s(10764),
                g = s(72594);
            let v = () => {
                let e = (0, o.U)(),
                    t = (0, a.st)(),
                    { hash: s } = (0, a.gf)(),
                    { pageId: v, displayReasonId: E } = (0, h.$)(),
                    { tabId: f, tabPos: A, isTabSelectedByDefault: b } = (0, g.R)(),
                    { offsetBlockPosY: T } = (0, p.u)(),
                    { blockType: N, blockId: S, blockPosX: j, blockPosY: y, mainObjectId: O, mainObjectType: k, displayReasonId: C } = (0, u.N)(),
                    { filterKey: I, filterValue: w, filterPos: L } = (0, m.G)(),
                    { objectType: R, objectsCount: P, objectId: D, objectPosX: U, objectPosY: W } = (0, _.J)(),
                    { skeleton: z } = (0, x.b)(),
                    M = null != C ? C : E,
                    F = (0, l.L)(() => (void 0 !== T && void 0 !== y ? T + y : y));
                return (0, i.useCallback)(
                    (i, a) => {
                        if (!t || !v || !d.xK.includes(v) || !d.fD.includes(v)) return;
                        let l = c.F[v];
                        if (!l) return;
                        let o = {
                            hash: s,
                            pageId: l,
                            entityType: N,
                            entityId: S,
                            entityPosX: j,
                            entityPosY: F,
                            objectsCount: P,
                            viewUuid: a,
                            objectType: R,
                            objectId: D,
                            objectPosX: U,
                            objectPosY: W,
                        };
                        (void 0 !== I && ((o.filterKey = I), (o.filterValue = w), (o.filterPos = L)),
                            d.qG.includes(v) && ((o.tabId = f), (o.tabPos = A), (o.isTabSelectedByDefault = b)),
                            z && (o.skeletonId = z),
                            'string' == typeof O && 'string' == typeof k && ((o.mainObjectType = k), (o.mainObjectId = O)),
                            M && (o.displayReasonId = M));
                        let u = (0, r.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (i ? (0, n.Pf)(t.evgenInstance, u) : (0, n.nv)(t.evgenInstance, u));
                    },
                    [t, M, S, j, F, N, I, L, w, s, b, e, O, k, D, U, W, R, P, v, z, f, A],
                );
            };
        },
        11639: (e) => {
            e.exports = {
                title: 'CollectionShelfNewEpisodes_title__y_SoT',
                root: 'CollectionShelfNewEpisodes_root__VojSS',
                root_emptyList: 'CollectionShelfNewEpisodes_root_emptyList__jsjSW',
                wrapper: 'CollectionShelfNewEpisodes_wrapper__Z2EOe',
                iconBackground: 'CollectionShelfNewEpisodes_iconBackground__K4Xui',
                button: 'CollectionShelfNewEpisodes_button__3DALk',
            };
        },
        13232: (e, t, s) => {
            'use strict';
            s.d(t, { B: () => i });
            let i = (0, s(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        16978: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => m });
            var i = s(25839),
                r = s(84059),
                n = s(8487),
                a = s(61493),
                l = s(71035),
                o = s(4071),
                c = s(4254),
                d = s(57024),
                u = s(36484),
                p = s(62562);
            let m = (e) => {
                let { size: t = 'm', variant: s = 'default', color: m = 'primary', withRipple: _ = !0, buttonText: h, isBlock: x, key: g, className: v } = e,
                    E = (0, r.useRouter)(),
                    f = (0, p.N)().get(u.QG),
                    A = (0, l.c)(() => {
                        f.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), E.push(f.authorizationUrl));
                    });
                return (0, i.jsx)(
                    o.$,
                    {
                        onClick: A,
                        className: v,
                        isBlock: x,
                        color: m,
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': a.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(n.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
                );
            };
        },
        19410: (e, t, s) => {
            'use strict';
            s.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        21468: (e, t, s) => {
            'use strict';
            s.d(t, { T: () => n });
            var i = s(74631),
                r = s(56480);
            function n() {
                return (0, i.useContext)(r.H);
            }
        },
        27140: (e, t, s) => {
            (Promise.resolve().then(s.bind(s, 30871)), Promise.resolve().then(s.bind(s, 56027)));
        },
        27990: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        30716: (e, t, s) => {
            'use strict';
            s.d(t, { J: () => n });
            var i = s(84059),
                r = s(74631);
            s(93588);
            let n = (e) => {
                let t = (0, i.usePathname)(),
                    [s, n] = (0, r.useState)(!1);
                ((0, r.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !s && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), n(!0));
                    }, [e, s, t]));
            };
        },
        30871: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => h });
            var i = s(25839),
                r = s(88204),
                n = s(84059),
                a = s(82298),
                l = s(8487),
                o = s(4254),
                c = s(16978),
                d = s(148),
                u = s.n(d);
            let p = (0, r.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(o.DZ, {
                            className: (0, a.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(o.HL, {
                            className: (0, a.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = s(53712),
                _ = s(27954);
            let h = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: s } = e,
                    { user: r } = (0, _.g)();
                return r.isAuthorized ? t : (s && (0, n.redirect)(m.Z.main.href), (0, i.jsx)(p, {}));
            });
        },
        32652: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => h });
            var i = s(25839),
                r = s(82298),
                n = s(88204),
                a = s(74631),
                l = s(39004),
                o = s(61493),
                c = s(66738),
                d = s(74245),
                u = s(27954),
                p = s(60924),
                m = s(92870),
                _ = s.n(m);
            let h = (0, n.PA)((e) => {
                let { className: t, getDescriptionTexts: s, trackId: n, containerClassName: m, variant: h, iconVariant: iconOverride, size: x = 'xxxs', ...g } = e,
                    { formatMessage: v } = (0, l.A)(),
                    {
                        settings: { isMobile: E },
                    } = (0, u.g)(),
                    [f, A] = (0, a.useState)(null);
                (0, a.useEffect)(() => {
                    s && s().then(A);
                }, [s, n]);
                let {
                    iconVariant: b,
                    descriptionText: T,
                    isTooltipEnabled: N,
                    ariaLabel: S,
                } = ((e, t) => {
                    let { variant: s, descriptionTexts: i, isMobile: r } = e,
                        n = (null == i ? void 0 : i.join('\n')) || '';
                    return {
                        iconVariant: ((e) => {
                            switch (e) {
                                case d.JU.E:
                                    return 'explicit';
                                case d.JU.AGE_12:
                                case d.JU.AGE_16:
                                case d.JU.AGE_18:
                                    return 'adult';
                                case d.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(s),
                        descriptionText: n,
                        isTooltipEnabled: !!(null == i ? void 0 : i.length) && !r,
                        ariaLabel: n.length > 0 ? n : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: f, isMobile: E }, v);
                return (0, i.jsx)(p.k, {
                    description: T,
                    placement: 'bottom-start',
                    enabled: N,
                    children: (0, i.jsx)('span', {
                        className: m,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        h === d.JU.SUBSTITUTED ? (0, i.jsxs)('svg', {
                            className: (0, r.$)(_().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': S,
                            style: { width: 'var(--ym-icon-size-'.concat(x, ')'), height: 'var(--ym-icon-size-'.concat(x, ')') },
                            ...g,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, i.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, i.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, i.jsx)(c.I, {
                            className: (0, r.$)(_().explicitMark, t),
                            'aria-label': S,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : b,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? x : x,
                            style: iconOverride ? { width: `var(--ym-icon-size-${x})`, height: `var(--ym-icon-size-${x})` } : undefined,
                            ...g,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
                    }),
                });
            });
        },
        36286: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        38726: (e, t, s) => {
            'use strict';
            s.d(t, { U: () => d });
            var i = s(25839),
                r = s(88204),
                n = s(61493),
                a = s(66738),
                l = s(10820),
                o = s(77174),
                c = s(27954);
            let d = (0, r.PA)((e) => {
                let { isLiked: t, onClick: s, className: r, iconClassName: d, albumType: u, disabled: p } = e,
                    { user: m } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    h = (0, o.$)(t, u);
                return (0, i.jsx)(l.Dr, {
                    className: r,
                    onClick: s,
                    icon: (0, i.jsx)(a.I, { className: d, variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: p || !m.isAuthorized,
                    'data-test-id': n.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        39528: (e, t, s) => {
            'use strict';
            s.d(t, { R: () => r });
            var i = s(25895);
            let r = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        44408: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        52512: (e, t, s) => {
            'use strict';
            s.d(t, { n: () => a });
            var i = s(74631),
                r = s(3669),
                n = s(13232);
            let a = function () {
                let { callback: e, singleEvent: t, withViewUuid: s } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = (0, i.useRef)(null),
                    l = (0, r.D)(),
                    o = (0, i.useId)(),
                    c = (0, i.useContext)(n.B),
                    d = (0, i.useCallback)(
                        (i, r) => {
                            (e ? e(i, s ? r : void 0) : l(i, r), t && c.unobserveElement(o));
                        },
                        [e, c, o, l, t, s],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            c.observeElement({ elementRef: a, elementId: o, callback: d }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, d, o, l],
                    ),
                    { ref: a, intersectionPropertyId: o }
                );
            };
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        56027: (e, t, s) => {
            'use strict';
            s.d(t, { CollectionShelfNewEpisodesPage: () => P });
            var i = s(25839),
                r = s(88204),
                n = s(84059),
                a = s(74631),
                l = s(61493),
                o = s(71035),
                c = s(13833),
                d = s(4254),
                u = s(64715),
                p = s(1407),
                m = s(21784),
                _ = s(89192),
                h = s(30716),
                x = s(27954),
                g = s(99401),
                v = s(26076),
                E = s(10603),
                f = s(82298),
                A = s(8487),
                b = s(22939),
                T = s(4071),
                N = s(66738),
                S = s(51549),
                j = s(53712),
                y = s(85686),
                O = s(3718),
                k = s(97805),
                C = s(11639),
                I = s.n(C);
            let w = (0, r.PA)(() => {
                let {
                        sonataState: e,
                        collection: {
                            shelf: { newEpisodes: t },
                        },
                    } = (0, x.g)(),
                    s = (0, y.Z)(j.Z.nonMusic.href),
                    r = (0, a.useMemo)(() => {
                        var s;
                        return null == (s = t.tracks)
                            ? void 0
                            : s.map((s, r) =>
                                  (0, i.jsx)(
                                      S.K,
                                      {
                                          track: s,
                                          playContextParams: {
                                              contextData: { type: b.K.Album, meta: { id: s.entityId }, from: t.typeForFrom || '' },
                                              queueParams: { index: r, entityId: s.id },
                                              loadContextMeta: !0,
                                              entitiesData: e.unloadedEntitiesDataFromModels,
                                          },
                                          withPodcastName: !0,
                                      },
                                      s.entityId,
                                  ),
                              );
                    }, [t.tracks, t.typeForFrom, e.unloadedEntitiesDataFromModels]),
                    n = (0, a.useMemo)(
                        () =>
                            t.isEmpty
                                ? (0, i.jsx)(A.A, { id: 'error-messages.empty-shelf-new-episodes-title-no-tracks' })
                                : (0, i.jsx)(A.A, { id: 'error-messages.empty-shelf-new-episodes-title' }),
                        [t.isEmpty],
                    );
                return (t.isNeededToLoad && (0, a.use)(t.getData()), t.isLoading)
                    ? (0, i.jsx)(k.D, { variant: O.X.PLAYLIST, isActive: !0 })
                    : (0, i.jsxs)('div', {
                          className: (0, f.$)(I().root, { [I().root_emptyList]: t.isEmpty }),
                          children: [
                              r,
                              (0, i.jsxs)('div', {
                                  className: I().wrapper,
                                  children: [
                                      (0, i.jsx)('div', { className: I().iconBackground, children: (0, i.jsx)(N.I, { variant: 'like', size: 'l' }) }),
                                      (0, i.jsx)(d.DZ, { className: I().title, variant: 'h3', size: 'xs', children: n }),
                                      !t.isEmpty &&
                                          (0, i.jsx)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'l',
                                              weight: 'normal',
                                              children: (0, i.jsx)(A.A, { id: 'error-messages.empty-shelf-new-episodes-text' }),
                                          }),
                                      (0, i.jsx)(T.$, {
                                          onClick: s,
                                          className: I().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 's',
                                          radius: 'xxxl',
                                          children: (0, i.jsx)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: (0, i.jsx)(A.A, { id: 'error-messages.empty-shelf-liked-page-link' }),
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
            var L = s(94520),
                R = s.n(L);
            let P = (0, r.PA)(() => {
                let {
                        collection: {
                            shelf: { newEpisodes: e },
                        },
                    } = (0, x.g)(),
                    { contentScrollRef: t, setContentScrollRef: s } = (0, _.g)(),
                    r = (0, m.W)(),
                    f = (0, n.useRouter)(),
                    A = (0, o.c)(() => {
                        var t;
                        (null == (t = e.playlist) ? void 0 : t.uuid) && f.replace(e.playlist.url);
                    });
                return ((0, a.useEffect)(() => {
                    e.isResolved && e.withPlaylist && A();
                }, [e.isResolved, e.withPlaylist, A]),
                (0, a.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, h.J)(e.isResolved),
                e.isRejected)
                    ? (0, i.jsx)(u.SomethingWentWrong, {})
                    : (0, i.jsxs)(p.h, {
                          scrollElement: t,
                          outerTitle: e.title,
                          children: [
                              (0, i.jsx)(E.Y, {
                                  variant: E.V.TEXT,
                                  withForwardControl: !1,
                                  withBackwardControl: r.canBack,
                                  children: (0, i.jsx)(d.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: e.title }),
                              }),
                              (0, i.jsxs)(c.N, {
                                  ref: s,
                                  containerClassName: R().scrollableContainer,
                                  className: R().root,
                                  'data-test-id': l.Xk.collection.COLLECTION_SHELF_NEW_EPISODES_PAGE,
                                  children: [(0, i.jsx)(w, {}), (0, i.jsx)(v.A, { children: (0, i.jsx)(g.w, { className: R().footer }) })],
                              }),
                          ],
                      });
            });
        },
        56348: (e, t, s) => {
            'use strict';
            s.d(t, { i: () => H });
            var i = s(25839),
                r = s(82298),
                n = s(88204),
                a = s(74631),
                l = s(49656),
                o = s(3392),
                c = s(19410),
                d = s(71035),
                u = s(27954),
                p = s(39528);
            let m = (e, t) => {
                let { withLink: s, separator: i } = t,
                    r = s && !e.various ? (0, p.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: r };
            };
            var _ = s(94484),
                h = s.n(_),
                x = s(61493),
                g = s(4254),
                v = s(97522),
                E = s(39004),
                f = s(44031),
                A = s(29481),
                b = s(85686),
                T = s(85743),
                N = s(40207);
            let S = (0, n.PA)((e) => {
                    let { item: t, linkClassName: s, captionClassName: r, captionSize: n = 'm', allArtistsTitle: a, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: p,
                            link: m,
                            title: _,
                            ariaLabel: h,
                            tooltipText: S,
                            isTooltipEnabled: j,
                            handleNavigate: y,
                        } = ((e) => {
                            var t, s;
                            let { item: i, allArtistsTitle: r, withCustomTooltip: n } = e,
                                { formatMessage: a } = (0, E.A)(),
                                l = ((e, t) => {
                                    let { item: s, allArtistsTitle: i, withCustomTooltip: r } = e,
                                        n = i || s.name;
                                    return {
                                        ...s,
                                        title: r ? void 0 : n,
                                        ariaLabel: s.link ? t({ id: 'entity-names.artist-name' }, { artistName: s.name }) : void 0,
                                        tooltipText: n,
                                        isTooltipEnabled: !i && r,
                                    };
                                })({ item: i, allArtistsTitle: r, withCustomTooltip: n }, a),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                p = (0, b.Z)(null != (s = null == (t = l.link) ? void 0 : t.href) ? s : l.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, T.z)(),
                                _ = (0, A.N)(),
                                h = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), p(e));
                                }),
                                x = ((e) => {
                                    let { artist: t, callback: s } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: r, fullscreenVideoPlayer: n } = (0, u.g)(),
                                        { modal: a } = i;
                                    return (0, N.l)({
                                        entity: t,
                                        callback: s,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), a.isOpened && (i.reset(), a.close()), r.modal.isOpened && r.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            n.modal.isOpened && (n.modal.close(), n.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: l.artist, callback: h }),
                                g = (0, d.c)((e) => {
                                    (_({ to: f.AppScreen.ArtistScreen }), null == m || m(), x(e));
                                });
                            return { ...l, handleNavigate: g };
                        })({ item: t, allArtistsTitle: a, withCustomTooltip: l });
                    return m
                        ? (0, i.jsx)(v.N, {
                              ...m,
                              'aria-label': h,
                              className: s,
                              onClick: y,
                              title: _,
                              'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(o.m_, {
                                  enabled: j,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: S,
                                  hoverSettings: c,
                                  children: (0, i.jsx)(g.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: r, children: p }),
                              }),
                          })
                        : (0, i.jsx)(o.m_, {
                              enabled: j,
                              offsetOptions: 4,
                              placement: 'top',
                              text: S,
                              hoverSettings: c,
                              children: (0, i.jsx)(g.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: r,
                                  title: _,
                                  'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: p,
                              }),
                          });
                }),
                j = (e) => {
                    let { group: t, linkClassName: s, captionClassName: r, captionSize: n, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(S, {
                                item: t.primary,
                                linkClassName: s,
                                captionClassName: r,
                                captionSize: n,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, i.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, i.jsx)(S, {
                                                item: e,
                                                linkClassName: s,
                                                captionClassName: r,
                                                captionSize: n,
                                                allArtistsTitle: l,
                                                withCustomTooltip: o,
                                                hoverSettings: c,
                                            }),
                                        ],
                                    },
                                    e.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var y = s(8487),
                O = s(9079);
            let k = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: s, handleOnSpoilerClick: n } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(O.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(h().spoiler, s),
                            onClick: n,
                            rel: 'nofollow',
                            'data-test-id': x.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(y.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var C = s(28631),
                I = s(33049),
                w = s(61912),
                L = s(36286),
                R = s.n(L);
            let P = (0, n.PA)((e) => {
                    let { label: t, artists: s, forwardRef: r } = e;
                    return (0, i.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, I.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: r, children: t }),
                            (0, i.jsx)(o.ZI, { className: R().tooltipContent, children: s.map((e) => (0, i.jsx)(w.V, { artist: e, className: R().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, a.forwardRef)((e, t) => (0, i.jsx)(P, { forwardRef: t, ...e }));
            var U = s(10820),
                W = s(93510),
                z = s.n(W);
            let M = (0, n.PA)((e) => {
                    let { label: t, artists: s } = e,
                        { formatMessage: n } = (0, E.A)();
                    return (0, i.jsx)(U.W1, {
                        isMobile: !0,
                        className: (0, r.$)(z().root, z().important),
                        label: t,
                        ariaLabel: n({ id: 'interface-actions.context-menu-artists' }),
                        children: s.map((e) => (0, i.jsx)(w.V, { artist: e }, e.id)),
                    });
                }),
                F = (0, n.PA)((e) => {
                    let { artists: t = [], label: s, labelRef: r } = e,
                        [n, o] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        p = (0, d.c)(() => {
                            let e = r.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, l.L)(() =>
                            (0, C.A)(() => {
                                p();
                            }, 100),
                        );
                    if (
                        ((0, a.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                p(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, p],
                        ),
                        (0, a.useEffect)(() => {
                            p();
                        }, [t, p]),
                        0 !== t.length)
                    )
                        return (n || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(M, { artists: t, label: s }) : (0, i.jsx)(D, { artists: t, label: s })) : s;
                }),
                H = (0, n.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: s,
                            spoilerClassName: n,
                            linkClassName: p,
                            captionClassName: _,
                            captionSize: x,
                            variant: g = 'breakAll',
                            spoilerComponent: v,
                            ...E
                        } = e,
                        f = ((e) => {
                            var t, s, i;
                            let { separator: r, visibleArtistsCount: n, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: p } = e,
                                _ = null != (t = e.artists) ? t : [],
                                h = null == (s = e.withAllArtistsTitle) || s,
                                x = null == (i = e.withCustomTooltip) || i,
                                g = (0, a.useRef)(null),
                                [v, E] = (0, a.useState)(!1),
                                {
                                    settings: { isMobile: f },
                                } = (0, u.g)(),
                                A = ((!f || 1 === _.length) && p) || !p,
                                b = ((e, t) => {
                                    var s, i, r;
                                    let n = null == (s = null == t ? void 0 : t.withComposer) || s,
                                        a = null == (i = null == t ? void 0 : t.withLink) || i,
                                        l = null != (r = null == t ? void 0 : t.separator) ? r : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let s = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...s];
                                            })
                                            .join(l),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: s, withComposer: i } = t;
                                            return {
                                                visibleArtists: (s ? e.slice(0, s) : e).filter((e) => i || !e.isComposer),
                                                hiddenArtistsCount: s && s < e.length ? e.length - s : 0,
                                            };
                                        })(e, { withComposer: n, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, s) =>
                                            ((e, t) => {
                                                var s;
                                                let { withLink: i, separator: r, isFirst: n } = t;
                                                return {
                                                    primary: m(e, { withLink: i, separator: n ? void 0 : r }),
                                                    decomposed: (null != (s = e.decomposed) ? s : []).map((e) => {
                                                        let t = r ? e.separator : '';
                                                        return m(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: a && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === s }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(_, { separator: r, visibleArtistsCount: v ? void 0 : n, withComposer: o, withLink: !!A && l, artistIdWithoutLink: c }),
                                T = h ? b.allArtistsTitle : '',
                                N = (0, d.c)((e) => {
                                    (E(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: b.groups,
                                hiddenArtistsCount: b.hiddenArtistsCount,
                                allArtistsTitle: T,
                                withCustomTooltip: x,
                                withContextMenu: p,
                                labelRef: g,
                                handleOnSpoilerClick: N,
                                isTooltipEnabled: !!T && x && !p && !f,
                                title: !T || x || p ? void 0 : T,
                            };
                        })(E),
                        A = (0, l.L)(() =>
                            f.hiddenArtistsCount <= 0
                                ? null
                                : (0, a.isValidElement)(v)
                                  ? v
                                  : (0, i.jsx)(k, { spoilerClassName: n, spoilerArtistsCount: f.hiddenArtistsCount, handleOnSpoilerClick: f.handleOnSpoilerClick }),
                        ),
                        b = (0, i.jsx)(o.m_, {
                            referenceRef: f.labelRef,
                            enabled: f.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: f.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: s ? { WebkitLineClamp: s } : void 0,
                                className: (0, r.$)(h().root, h()['root_variant_'.concat(g)], { [h().root_clamp]: s && s > 0, [h().ellipsis]: !s }, t),
                                title: f.title,
                                children: [
                                    f.groups.map((e) =>
                                        (0, i.jsx)(
                                            j,
                                            {
                                                group: e,
                                                linkClassName: p,
                                                captionClassName: _,
                                                captionSize: x,
                                                allArtistsTitle: f.allArtistsTitle,
                                                withCustomTooltip: f.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return f.withContextMenu ? (0, i.jsx)(F, { labelRef: f.labelRef, artists: f.artists, label: b }) : b;
                });
        },
        56480: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => i });
            let i = (0, s(74631).createContext)({ pageAlbumId: void 0 });
        },
        57024: (e, t, s) => {
            'use strict';
            s.d(t, { C8: () => n, UC: () => a, dM: () => l, uV: () => o });
            var i = s(93690),
                r = s(58848);
            let n = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                a = (e) => (e.uid ? 'authorized' : 'no-uid'),
                l = (e) => {
                    if (!(e instanceof i.m5) || !(0, r.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, r.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                o = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        58848: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        59981: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { T: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        60924: (e, t, s) => {
            'use strict';
            s.d(t, { k: () => d });
            var i = s(25839),
                r = s(61493),
                n = s(3392),
                a = s(4254),
                l = s(74672),
                o = s.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: s, title: l, placement: d = 'top', children: u } = e;
                    return (0, i.jsxs)(n.m_, {
                        enabled: s,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, i.jsx)(n.ZI, {
                                className: o().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, i.jsx)(a.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, i.jsx)(a.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61561: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => n });
            var i = s(27954),
                r = s(44806);
            let n = () => {
                var e, t;
                let {
                    user: s,
                    settings: { browserInfo: n },
                    experiments: a,
                } = (0, i.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    s.isAuthorized &&
                    !s.hasPlus &&
                    (null == (t = a.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, s) => {
            'use strict';
            s.d(t, { V: () => E });
            var i = s(25839),
                r = s(82298),
                n = s(88204),
                a = s(74631),
                l = s(44031),
                o = s(61493),
                c = s(71035),
                d = s(23818),
                u = s(10820),
                p = s(86869),
                m = s(4254),
                _ = s(29481),
                h = s(85686),
                x = s(27954),
                g = s(53454),
                v = s.n(g);
            let E = (0, n.PA)((e) => {
                let { artist: t, className: s } = e,
                    { fullscreenPlayer: n } = (0, x.g)(),
                    g = (0, h.Z)(t.url),
                    f = (0, _.N)(),
                    A = (0, a.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(E, { artist: t, className: s }, t.id)), e), []))
                        );
                    }, [t, s]),
                    b = (0, c.c)((e) => {
                        (n.modal.isOpened && n.modal.close(), f({ to: l.AppScreen.ArtistScreen }), g(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, r.$)(v().root, s),
                            onClick: b,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(p.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, i.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, i.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        64715: (e, t, s) => {
            'use strict';
            s.d(t, { SomethingWentWrong: () => I });
            var i = s(25839),
                r = s(82298),
                n = s(88204),
                a = s(74631),
                l = s(39004),
                o = s(8487);
            s(93588);
            var c = s(4071),
                d = s(66738),
                u = s(4254),
                p = s(67379),
                m = s(44031),
                _ = s(87277),
                h = s(59450),
                x = s(84e3),
                g = s(97952),
                v = s(89192),
                E = s(53712),
                f = s(27954),
                A = s(44806),
                b = s(15270),
                T = s(23818),
                N = s(85686);
            let S = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var j = s(27990),
                y = s.n(j);
            let O = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: s = !0 } = e,
                    { slam: n } = (0, f.g)(),
                    { contentRef: a } = (0, v.g)(),
                    l = (0, N.Z)(E.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(y().root, t),
                    children: [
                        s &&
                            (0, i.jsx)(b.L, { withBackwardFallback: '/', className: (0, r.$)(y().navigation, { [y().navigation_desktop]: !a }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(y().content, { [y().content_shrink]: !s }),
                            children: [
                                (0, i.jsx)(T._V, { className: y().image, src: S.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: y().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: y().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: y().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: y().button,
                                        onClick: l,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: y().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var k = s(68854),
                C = s.n(k);
            let I = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: s = !0 } = e,
                    { formatMessage: n } = (0, l.A)(),
                    T = (0, a.useContext)(f.P),
                    N = null == T ? void 0 : T.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    S = n(N ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: s } = (0, h.gf)(),
                        { pageId: i } = (0, g.$)(),
                        r = (0, x.U)();
                    (0, a.useEffect)(() => {
                        if (!t || !s || !i) return;
                        let n = (0, p.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: s,
                                pageId: i,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        n && (0, _.z5)(t.evgenInstance, n);
                    }, [t, e, s, i, r]);
                })(S);
                let { sendRefreshEvent: j } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: s } = (0, g.$)(),
                            i = (0, x.U)();
                        return {
                            sendRefreshEvent: (0, a.useCallback)(() => {
                                if (!e || !t || !s) return;
                                let r = (0, p.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: s,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, _.bv)(e.evgenInstance, r);
                            }, [e, t, s, i]),
                        };
                    })(),
                    y = (0, a.useCallback)(() => {
                        (j(), (window.location.href = E.Z.main.href));
                    }, [j]),
                    { contentRef: k } = (0, v.g)();
                return N
                    ? (0, i.jsx)(O, { className: t, withBackwardControl: s })
                    : (0, i.jsxs)('div', {
                          className: (0, r.$)(C().root, t),
                          children: [
                              s &&
                                  (0, i.jsx)(b.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(C().navigation, { [C().navigation_desktop]: !k }),
                                      withForwardControl: !1,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, r.$)(C().content, { [C().content_shrink]: !s }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: C().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, r.$)(C().title, C().important), variant: 'h3', size: 'xs', children: S }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, r.$)(C().text, C().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: y,
                                          className: C().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        68854: (e) => {
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
        71705: (e, t, s) => {
            'use strict';
            s.d(t, { K: () => h });
            var i = s(25839),
                r = s(39004),
                n = s(71035),
                a = s(21468),
                l = s(91149),
                o = s(92942),
                c = s(27954),
                d = s(57549),
                u = s(33660),
                p = s(74631),
                m = s(31860),
                _ = s(93297);
            let h = (e) => {
                let {
                        user: t,
                        paywall: s,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, c.g)(),
                    { formatMessage: x } = (0, r.A)(),
                    { notify: g } = (0, o.l)(),
                    v = (() => {
                        let { notify: e } = (0, o.l)(),
                            [t, s] = (0, p.useState)(!1),
                            { formatMessage: a } = (0, r.A)();
                        return (0, n.c)(async (r) => {
                            let { album: n, withLink: o = !0, withNotification: c = !0 } = r;
                            if (t) return;
                            let p = { ...(0, u.HO)(n), url: n.url, isLiked: !n.isLiked };
                            s(!0);
                            let h = await n.toggleLike();
                            (s(!1),
                                c &&
                                    (h === m.f.OK
                                        ? e((0, i.jsx)(_.T, { withLink: o, album: p }), { containerId: l.u.INFO })
                                        : e((0, i.jsx)(d.h, { error: a({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR })));
                        });
                    })(),
                    { pageAlbumId: E } = (0, a.T)();
                return (0, n.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: E, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void s.openModal()
                            : t.isAuthorized
                              ? v({ album: e })
                              : void g((0, i.jsx)(d.h, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        71996: (e, t, s) => {
            'use strict';
            s.d(t, { k: () => u });
            var i = s(25839),
                r = s(74631),
                n = s(39004),
                a = s(61493),
                l = s(4071),
                o = s(66738),
                c = s(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: s,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: p,
                            onClick: m,
                            iconClassName: _,
                            className: h,
                            forwardRef: x,
                            style: g,
                            children: v,
                        } = e,
                        { formatMessage: E } = (0, n.A)(),
                        f = E({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: s,
                        flexIcon: !0,
                        'aria-label': f,
                        onClick: m,
                        ref: x,
                        icon: (0, i.jsx)(o.I, { variant: 'trailer', size: u, className: _ }),
                        disabled: p,
                        'data-intersection-property-id': c.N,
                        style: g,
                        'data-test-id': a.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        73182: (e, t, s) => {
            'use strict';
            s.d(t, { b: () => n });
            var i = s(56829),
                r = s(35015);
            let n = (e) => {
                switch (e) {
                    case i._.PODCAST:
                        return r.c.PODCAST;
                    case i._.AUDIOBOOK:
                        return r.c.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return r.c.FAIRY_TALE;
                    default:
                        return r.c.ALBUM;
                }
            };
        },
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        76481: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => r });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: r = {}, ...n } = t,
                        a = e || 'Internal error';
                    (super(a, n), (this.message = a), (this.code = s), (this.data = r), (this.stack = Error(a).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class r extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...s } = {}) {
                    (super(e, { code: t, ...s }), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        77174: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => n });
            var i = s(39004),
                r = s(56829);
            let n = (e, t) => {
                let { formatMessage: s } = (0, i.A)();
                if (e)
                    switch (t) {
                        case r._.AUDIOBOOK:
                            return s({ id: 'non-music.shelf-unsubscribe' });
                        case r._.FAIRY_TALE:
                            return s({ id: 'interface-actions.do-not-like' });
                        default:
                            return s({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case r._.AUDIOBOOK:
                        return s({ id: 'non-music.shelf-subscribe' });
                    case r._.FAIRY_TALE:
                        return s({ id: 'interface-actions.like' });
                    default:
                        return s({ id: 'interface-actions.subscribe' });
                }
            };
        },
        77920: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        90780: (e, t, s) => {
            'use strict';
            s.d(t, { C: () => c });
            var i = s(25839),
                r = s(74631),
                n = s(61493),
                a = s(4254),
                l = s(44408),
                o = s.n(l);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: s } = e,
                    [l, c] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    l)
                )
                    return l.map((e, t) =>
                        (0, i.jsx)(
                            a.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': n.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(s, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        91626: (e, t, s) => {
            'use strict';
            (s.d(t, { G: () => r }), s(77920));
            var i = s(76481);
            class r extends i.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        92870: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        93297: (e, t, s) => {
            'use strict';
            s.d(t, { T: () => l });
            var i = s(25839),
                r = s(88204),
                n = s(3163),
                a = s(73182);
            let l = (0, r.PA)((e) => {
                let { album: t, closeToast: s, withLink: r } = e,
                    l = (0, a.b)(t.type);
                return (0, i.jsx)(n.O, {
                    closeToast: s,
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
        93510: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        93690: (e, t, s) => {
            'use strict';
            s.d(t, { GX: () => n.G, X1: () => i.X, m5: () => r.m });
            var i = s(77920),
                r = s(76481),
                n = s(91626);
            s(95919);
        },
        94484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        94520: (e) => {
            e.exports = {
                root: 'CollectionShelfNewEpisodesPage_root__HTWkS',
                scrollableContainer: 'CollectionShelfNewEpisodesPage_scrollableContainer__xGZcJ',
                footer: 'CollectionShelfNewEpisodesPage_footer__0i466',
            };
        },
        95919: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7055, 3349, 2767, 5128, 740, 7339, 6287, 3472, 2121, 3112, 3920, 6706, 4771, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 1817, 6215, 2038, 4163,
                3246, 7848, 3482, 6680, 2247, 7856, 8836, 820, 4434, 8649, 862, 1808, 8222, 4475, 5056, 7358,
            ],
            () => e((e.s = 27140)),
        ),
            (_N_E = e.O()));
    },
]);
