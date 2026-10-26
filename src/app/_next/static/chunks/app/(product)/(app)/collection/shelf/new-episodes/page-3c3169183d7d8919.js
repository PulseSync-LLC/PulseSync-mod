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
        16978: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => m });
            var i = s(25839),
                r = s(8487),
                a = s(84059),
                n = s(61493),
                o = s(71035),
                l = s(4071),
                c = s(4254),
                d = s(57024),
                u = s(36484),
                p = s(62562);
            let m = (e) => {
                let { size: t = 'm', variant: s = 'default', color: m = 'primary', withRipple: _ = !0, buttonText: h, isBlock: x, key: g, className: v } = e,
                    E = (0, a.useRouter)(),
                    A = (0, p.N)().get(u.QG),
                    T = (0, o.c)(() => {
                        A.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), E.push(A.authorizationUrl));
                    });
                return (0, i.jsx)(
                    l.$,
                    {
                        onClick: T,
                        className: v,
                        isBlock: x,
                        color: m,
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(r.A, { id: 'authorization.enter-button' }) }),
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
            s.d(t, { T: () => a });
            var i = s(74631),
                r = s(56480);
            function a() {
                return (0, i.useContext)(r.H);
            }
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
            s.d(t, { J: () => a });
            var i = s(74631);
            s(93588);
            var r = s(84059);
            let a = (e) => {
                let t = (0, r.usePathname)(),
                    [s, a] = (0, i.useState)(!1);
                ((0, i.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, i.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !s && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, s, t]));
            };
        },
        30871: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => h });
            var i = s(25839),
                r = s(88204),
                a = s(84059),
                n = s(82298),
                o = s(8487),
                l = s(4254),
                c = s(16978),
                d = s(148),
                u = s.n(d);
            let p = (0, r.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(l.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(l.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(o.A, { id: 'authorization.enter-text' }),
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
                return r.isAuthorized ? t : (s && (0, a.redirect)(m.Z.main.href), (0, i.jsx)(p, {}));
            });
        },
        32652: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => h });
            var i = s(25839),
                r = s(82298),
                a = s(88204),
                n = s(74631),
                o = s(39004),
                l = s(61493),
                c = s(66738),
                d = s(74245),
                u = s(27954),
                p = s(60924),
                m = s(92870),
                _ = s.n(m);
            let h = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: s, trackId: a, containerClassName: m, variant: h, iconVariant: iconOverride, size: x = 'xxxs', ...g } = e,
                    { formatMessage: v } = (0, o.A)(),
                    {
                        settings: { isMobile: E },
                    } = (0, u.g)(),
                    [A, T] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    s && s().then(T);
                }, [s, a]);
                let {
                    iconVariant: f,
                    descriptionText: N,
                    isTooltipEnabled: b,
                    ariaLabel: S,
                } = ((e, t) => {
                    let { variant: s, descriptionTexts: i, isMobile: r } = e,
                        a = (null == i ? void 0 : i.join('\n')) || '';
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
                        descriptionText: a,
                        isTooltipEnabled: !!(null == i ? void 0 : i.length) && !r,
                        ariaLabel: a.length > 0 ? a : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: A, isMobile: E }, v);
                return (0, i.jsx)(p.k, {
                    description: N,
                    placement: 'bottom-start',
                    enabled: b,
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
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, i.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, i.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, i.jsx)(c.I, {
                            className: (0, r.$)(_().explicitMark, t),
                            'aria-label': S,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : f,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? x : x,
                            style: iconOverride ? { width: `var(--ym-icon-size-${x})`, height: `var(--ym-icon-size-${x})` } : undefined,
                            ...g,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
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
                a = s(61493),
                n = s(66738),
                o = s(10820),
                l = s(77174),
                c = s(27954);
            let d = (0, r.PA)((e) => {
                let { isLiked: t, onClick: s, className: r, iconClassName: d, albumType: u, disabled: p } = e,
                    { user: m } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    h = (0, l.$)(t, u);
                return (0, i.jsx)(o.Dr, {
                    className: r,
                    onClick: s,
                    icon: (0, i.jsx)(n.I, { className: d, variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: p || !m.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
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
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        56027: (e, t, s) => {
            'use strict';
            s.d(t, { CollectionShelfNewEpisodesPage: () => P });
            var i = s(25839),
                r = s(88204),
                a = s(74631),
                n = s(84059),
                o = s(61493),
                l = s(71035),
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
                A = s(82298),
                T = s(8487),
                f = s(22939),
                N = s(4071),
                b = s(66738),
                S = s(51549),
                j = s(53712),
                O = s(85686),
                C = s(3718),
                y = s(97805),
                k = s(11639),
                w = s.n(k);
            let I = (0, r.PA)(() => {
                let {
                        sonataState: e,
                        collection: {
                            shelf: { newEpisodes: t },
                        },
                    } = (0, x.g)(),
                    s = (0, O.Z)(j.Z.nonMusic.href),
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
                                              contextData: { type: f.K.Album, meta: { id: s.entityId }, from: t.typeForFrom || '' },
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
                                ? (0, i.jsx)(T.A, { id: 'error-messages.empty-shelf-new-episodes-title-no-tracks' })
                                : (0, i.jsx)(T.A, { id: 'error-messages.empty-shelf-new-episodes-title' }),
                        [t.isEmpty],
                    );
                return (t.isNeededToLoad && (0, a.use)(t.getData()), t.isLoading)
                    ? (0, i.jsx)(y.D, { variant: C.X.PLAYLIST, isActive: !0 })
                    : (0, i.jsxs)('div', {
                          className: (0, A.$)(w().root, { [w().root_emptyList]: t.isEmpty }),
                          children: [
                              r,
                              (0, i.jsxs)('div', {
                                  className: w().wrapper,
                                  children: [
                                      (0, i.jsx)('div', { className: w().iconBackground, children: (0, i.jsx)(b.I, { variant: 'like', size: 'l' }) }),
                                      (0, i.jsx)(d.DZ, { className: w().title, variant: 'h3', size: 'xs', children: n }),
                                      !t.isEmpty &&
                                          (0, i.jsx)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'l',
                                              weight: 'normal',
                                              children: (0, i.jsx)(T.A, { id: 'error-messages.empty-shelf-new-episodes-text' }),
                                          }),
                                      (0, i.jsx)(N.$, {
                                          onClick: s,
                                          className: w().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 's',
                                          radius: 'xxxl',
                                          children: (0, i.jsx)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: (0, i.jsx)(T.A, { id: 'error-messages.empty-shelf-liked-page-link' }),
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
                    A = (0, n.useRouter)(),
                    T = (0, l.c)(() => {
                        var t;
                        (null == (t = e.playlist) ? void 0 : t.uuid) && A.replace(e.playlist.url);
                    });
                return ((0, a.useEffect)(() => {
                    e.isResolved && e.withPlaylist && T();
                }, [e.isResolved, e.withPlaylist, T]),
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
                                  'data-test-id': o.Xk.collection.COLLECTION_SHELF_NEW_EPISODES_PAGE,
                                  children: [(0, i.jsx)(I, {}), (0, i.jsx)(v.A, { children: (0, i.jsx)(g.w, { className: R().footer }) })],
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
                a = s(88204),
                n = s(74631),
                o = s(49656),
                l = s(3392),
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
                A = s(44031),
                T = s(29481),
                f = s(85686),
                N = s(85743),
                b = s(40207);
            let S = (0, a.PA)((e) => {
                    let { item: t, linkClassName: s, captionClassName: r, captionSize: a = 'm', allArtistsTitle: n, withCustomTooltip: o, hoverSettings: c } = e,
                        {
                            name: p,
                            link: m,
                            title: _,
                            ariaLabel: h,
                            tooltipText: S,
                            isTooltipEnabled: j,
                            handleNavigate: O,
                        } = ((e) => {
                            var t, s;
                            let { item: i, allArtistsTitle: r, withCustomTooltip: a } = e,
                                { formatMessage: n } = (0, E.A)(),
                                o = ((e, t) => {
                                    let { item: s, allArtistsTitle: i, withCustomTooltip: r } = e,
                                        a = i || s.name;
                                    return {
                                        ...s,
                                        title: r ? void 0 : a,
                                        ariaLabel: s.link ? t({ id: 'entity-names.artist-name' }, { artistName: s.name }) : void 0,
                                        tooltipText: a,
                                        isTooltipEnabled: !i && r,
                                    };
                                })({ item: i, allArtistsTitle: r, withCustomTooltip: a }, n),
                                {
                                    track: l,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                p = (0, f.Z)(null != (s = null == (t = o.link) ? void 0 : t.href) ? s : o.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, N.z)(),
                                _ = (0, T.N)(),
                                h = (0, d.c)((e) => {
                                    (c && l.isOpened && l.close(), p(e));
                                }),
                                x = ((e) => {
                                    let { artist: t, callback: s } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: r, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: n } = i;
                                    return (0, b.l)({
                                        entity: t,
                                        callback: s,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (i.reset(), n.close()), r.modal.isOpened && r.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: o.artist, callback: h }),
                                g = (0, d.c)((e) => {
                                    (_({ to: A.AppScreen.ArtistScreen }), null == m || m(), x(e));
                                });
                            return { ...o, handleNavigate: g };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: o });
                    return m
                        ? (0, i.jsx)(v.N, {
                              ...m,
                              'aria-label': h,
                              className: s,
                              onClick: O,
                              title: _,
                              'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(l.m_, {
                                  enabled: j,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: S,
                                  hoverSettings: c,
                                  children: (0, i.jsx)(g.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: r, children: p }),
                              }),
                          })
                        : (0, i.jsx)(l.m_, {
                              enabled: j,
                              offsetOptions: 4,
                              placement: 'top',
                              text: S,
                              hoverSettings: c,
                              children: (0, i.jsx)(g.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: r,
                                  title: _,
                                  'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: p,
                              }),
                          });
                }),
                j = (e) => {
                    let { group: t, linkClassName: s, captionClassName: r, captionSize: a, allArtistsTitle: o, withCustomTooltip: l, hoverSettings: c } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(S, {
                                item: t.primary,
                                linkClassName: s,
                                captionClassName: r,
                                captionSize: a,
                                allArtistsTitle: o,
                                withCustomTooltip: l,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, i.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, i.jsx)(S, {
                                                item: e,
                                                linkClassName: s,
                                                captionClassName: r,
                                                captionSize: a,
                                                allArtistsTitle: o,
                                                withCustomTooltip: l,
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
            var O = s(8487),
                C = s(9079);
            let y = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: s, handleOnSpoilerClick: a } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(C.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(h().spoiler, s),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': x.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(O.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var k = s(28631),
                w = s(33049),
                I = s(61912),
                L = s(36286),
                R = s.n(L);
            let P = (0, a.PA)((e) => {
                    let { label: t, artists: s, forwardRef: r } = e;
                    return (0, i.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, w.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: r, children: t }),
                            (0, i.jsx)(l.ZI, { className: R().tooltipContent, children: s.map((e) => (0, i.jsx)(I.V, { artist: e, className: R().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, n.forwardRef)((e, t) => (0, i.jsx)(P, { forwardRef: t, ...e }));
            var U = s(10820),
                W = s(93510),
                z = s.n(W);
            let M = (0, a.PA)((e) => {
                    let { label: t, artists: s } = e,
                        { formatMessage: a } = (0, E.A)();
                    return (0, i.jsx)(U.W1, {
                        isMobile: !0,
                        className: (0, r.$)(z().root, z().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: s.map((e) => (0, i.jsx)(I.V, { artist: e }, e.id)),
                    });
                }),
                F = (0, a.PA)((e) => {
                    let { artists: t = [], label: s, labelRef: r } = e,
                        [a, l] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        p = (0, d.c)(() => {
                            let e = r.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, o.L)(() =>
                            (0, k.A)(() => {
                                p();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                p(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, p],
                        ),
                        (0, n.useEffect)(() => {
                            p();
                        }, [t, p]),
                        0 !== t.length)
                    )
                        return (a || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(M, { artists: t, label: s }) : (0, i.jsx)(D, { artists: t, label: s })) : s;
                }),
                H = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: s,
                            spoilerClassName: a,
                            linkClassName: p,
                            captionClassName: _,
                            captionSize: x,
                            variant: g = 'breakAll',
                            spoilerComponent: v,
                            ...E
                        } = e,
                        A = ((e) => {
                            var t, s, i;
                            let { separator: r, visibleArtistsCount: a, withLink: o, withComposer: l, artistIdWithoutLink: c, withContextMenu: p } = e,
                                _ = null != (t = e.artists) ? t : [],
                                h = null == (s = e.withAllArtistsTitle) || s,
                                x = null == (i = e.withCustomTooltip) || i,
                                g = (0, n.useRef)(null),
                                [v, E] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: A },
                                } = (0, u.g)(),
                                T = ((!A || 1 === _.length) && p) || !p,
                                f = ((e, t) => {
                                    var s, i, r;
                                    let a = null == (s = null == t ? void 0 : t.withComposer) || s,
                                        n = null == (i = null == t ? void 0 : t.withLink) || i,
                                        o = null != (r = null == t ? void 0 : t.separator) ? r : ', ',
                                        l = e
                                            .flatMap((e) => {
                                                var t;
                                                let s = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...s];
                                            })
                                            .join(o),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: s, withComposer: i } = t;
                                            return {
                                                visibleArtists: (s ? e.slice(0, s) : e).filter((e) => i || !e.isComposer),
                                                hiddenArtistsCount: s && s < e.length ? e.length - s : 0,
                                            };
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, s) =>
                                            ((e, t) => {
                                                var s;
                                                let { withLink: i, separator: r, isFirst: a } = t;
                                                return {
                                                    primary: m(e, { withLink: i, separator: a ? void 0 : r }),
                                                    decomposed: (null != (s = e.decomposed) ? s : []).map((e) => {
                                                        let t = r ? e.separator : '';
                                                        return m(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: o, isFirst: 0 === s }),
                                        ),
                                        allArtistsTitle: l,
                                        hiddenArtistsCount: d,
                                    };
                                })(_, { separator: r, visibleArtistsCount: v ? void 0 : a, withComposer: l, withLink: !!T && o, artistIdWithoutLink: c }),
                                N = h ? f.allArtistsTitle : '',
                                b = (0, d.c)((e) => {
                                    (E(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: f.groups,
                                hiddenArtistsCount: f.hiddenArtistsCount,
                                allArtistsTitle: N,
                                withCustomTooltip: x,
                                withContextMenu: p,
                                labelRef: g,
                                handleOnSpoilerClick: b,
                                isTooltipEnabled: !!N && x && !p && !A,
                                title: !N || x || p ? void 0 : N,
                            };
                        })(E),
                        T = (0, o.L)(() =>
                            A.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(v)
                                  ? v
                                  : (0, i.jsx)(y, { spoilerClassName: a, spoilerArtistsCount: A.hiddenArtistsCount, handleOnSpoilerClick: A.handleOnSpoilerClick }),
                        ),
                        f = (0, i.jsx)(l.m_, {
                            referenceRef: A.labelRef,
                            enabled: A.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: A.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: s ? { WebkitLineClamp: s } : void 0,
                                className: (0, r.$)(h().root, h()['root_variant_'.concat(g)], { [h().root_clamp]: s && s > 0, [h().ellipsis]: !s }, t),
                                title: A.title,
                                children: [
                                    A.groups.map((e) =>
                                        (0, i.jsx)(
                                            j,
                                            {
                                                group: e,
                                                linkClassName: p,
                                                captionClassName: _,
                                                captionSize: x,
                                                allArtistsTitle: A.allArtistsTitle,
                                                withCustomTooltip: A.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    T,
                                ],
                            }),
                        });
                    return A.withContextMenu ? (0, i.jsx)(F, { labelRef: A.labelRef, artists: A.artists, label: f }) : f;
                });
        },
        56480: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => i });
            let i = (0, s(74631).createContext)({ pageAlbumId: void 0 });
        },
        57024: (e, t, s) => {
            'use strict';
            s.d(t, { C8: () => a, UC: () => n, dM: () => o, uV: () => l });
            var i = s(93690),
                r = s(58848);
            let a = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                o = (e) => {
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
                l = (e) => {
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
                a = s(3392),
                n = s(4254),
                o = s(74672),
                l = s.n(o);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: s, title: o, placement: d = 'top', children: u } = e;
                    return (0, i.jsxs)(a.m_, {
                        enabled: s,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, i.jsx)(a.ZI, {
                                className: l().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61561: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => a });
            var i = s(27954),
                r = s(44806);
            let a = () => {
                var e, t;
                let {
                    user: s,
                    settings: { browserInfo: a },
                    experiments: n,
                } = (0, i.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    s.isAuthorized &&
                    !s.hasPlus &&
                    (null == (t = n.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, s) => {
            'use strict';
            s.d(t, { V: () => E });
            var i = s(25839),
                r = s(82298),
                a = s(88204),
                n = s(74631),
                o = s(44031),
                l = s(61493),
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
            let E = (0, a.PA)((e) => {
                let { artist: t, className: s } = e,
                    { fullscreenPlayer: a } = (0, x.g)(),
                    g = (0, h.Z)(t.url),
                    A = (0, _.N)(),
                    T = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(E, { artist: t, className: s }, t.id)), e), []))
                        );
                    }, [t, s]),
                    f = (0, c.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), A({ to: o.AppScreen.ArtistScreen }), g(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, r.$)(v().root, s),
                            onClick: f,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(p.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, i.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, i.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        T,
                    ],
                });
            });
        },
        64715: (e, t, s) => {
            'use strict';
            s.d(t, { SomethingWentWrong: () => w });
            var i = s(25839),
                r = s(82298),
                a = s(88204),
                n = s(74631),
                o = s(39004),
                l = s(8487);
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
                A = s(27954),
                T = s(44806),
                f = s(15270),
                N = s(23818),
                b = s(85686);
            let S = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var j = s(27990),
                O = s.n(j);
            let C = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: s = !0 } = e,
                    { slam: a } = (0, A.g)(),
                    { contentRef: n } = (0, v.g)(),
                    o = (0, b.Z)(E.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(O().root, t),
                    children: [
                        s &&
                            (0, i.jsx)(f.L, { withBackwardFallback: '/', className: (0, r.$)(O().navigation, { [O().navigation_desktop]: !n }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(O().content, { [O().content_shrink]: !s }),
                            children: [
                                (0, i.jsx)(N._V, { className: O().image, src: S.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: O().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: O().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: O().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                a.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: O().button,
                                        onClick: o,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: O().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var y = s(68854),
                k = s.n(y);
            let w = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: s = !0 } = e,
                    { formatMessage: a } = (0, o.A)(),
                    N = (0, n.useContext)(A.P),
                    b = null == N ? void 0 : N.experiments.checkExperiment(T.z.WebNextUnstableMusicScreen, 'on'),
                    S = a(b ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: s } = (0, h.gf)(),
                        { pageId: i } = (0, g.$)(),
                        r = (0, x.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !s || !i) return;
                        let a = (0, p.F)({
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
                        a && (0, _.z5)(t.evgenInstance, a);
                    }, [t, e, s, i, r]);
                })(S);
                let { sendRefreshEvent: j } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: s } = (0, g.$)(),
                            i = (0, x.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
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
                    O = (0, n.useCallback)(() => {
                        (j(), (window.location.href = E.Z.main.href));
                    }, [j]),
                    { contentRef: y } = (0, v.g)();
                return b
                    ? (0, i.jsx)(C, { className: t, withBackwardControl: s })
                    : (0, i.jsxs)('div', {
                          className: (0, r.$)(k().root, t),
                          children: [
                              s &&
                                  (0, i.jsx)(f.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(k().navigation, { [k().navigation_desktop]: !y }),
                                      withForwardControl: !1,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, r.$)(k().content, { [k().content_shrink]: !s }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: k().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, r.$)(k().title, k().important), variant: 'h3', size: 'xs', children: S }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, r.$)(k().text, k().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: O,
                                          className: k().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(l.A, { id: 'page-error.restart-app-button' })],
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
                a = s(71035),
                n = s(21468),
                o = s(91149),
                l = s(92942),
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
                    { notify: g } = (0, l.l)(),
                    v = (() => {
                        let { notify: e } = (0, l.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [s, n] = (0, p.useState)(!1),
                            { formatMessage: h } = (0, r.A)();
                        return (0, a.c)(async (r) => {
                            let { album: a, withLink: l = !0, withNotification: c = !0 } = r;
                            if (s) return;
                            let p = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                            n(!0);
                            let x = await a.toggleLike();
                            if ((n(!1), !c)) return;
                            let g = t.modal.isOpened;
                            x === m.f.OK
                                ? e((0, i.jsx)(_.T, { withLink: l, album: p }), { containerId: g ? o.u.FULLSCREEN_INFO : o.u.INFO })
                                : e((0, i.jsx)(d.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: g ? o.u.FULLSCREEN_ERROR : o.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: E } = (0, n.T)();
                return (0, a.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: E, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void s.openModal()
                            : t.isAuthorized
                              ? v({ album: e })
                              : void g((0, i.jsx)(d.h, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                });
            };
        },
        71996: (e, t, s) => {
            'use strict';
            s.d(t, { k: () => u });
            var i = s(25839),
                r = s(74631),
                a = s(39004),
                n = s(61493),
                o = s(4071),
                l = s(66738),
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
                        { formatMessage: E } = (0, a.A)(),
                        A = E({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(o.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: s,
                        flexIcon: !0,
                        'aria-label': A,
                        onClick: m,
                        ref: x,
                        icon: (0, i.jsx)(l.I, { variant: 'trailer', size: u, className: _ }),
                        disabled: p,
                        'data-intersection-property-id': c.N,
                        style: g,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        73182: (e, t, s) => {
            'use strict';
            s.d(t, { b: () => a });
            var i = s(56829),
                r = s(35015);
            let a = (e) => {
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
                    let { code: s = 'E_INTERNAL', data: r = {}, ...a } = t,
                        n = e || 'Internal error';
                    (super(n, a), (this.message = n), (this.code = s), (this.data = r), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
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
            s.d(t, { $: () => a });
            var i = s(39004),
                r = s(56829);
            let a = (e, t) => {
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
                a = s(61493),
                n = s(4254),
                o = s(44408),
                l = s.n(o);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: s } = e,
                    [o, c] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, i.jsx)(
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
            s.d(t, { T: () => o });
            var i = s(25839),
                r = s(88204),
                a = s(3163),
                n = s(73182);
            let o = (0, r.PA)((e) => {
                let { album: t, closeToast: s, withLink: r } = e,
                    o = (0, n.b)(t.type);
                return (0, i.jsx)(a.O, {
                    closeToast: s,
                    entityVariant: o,
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
            s.d(t, { GX: () => a.G, X1: () => i.X, m5: () => r.m });
            var i = s(77920),
                r = s(76481),
                a = s(91626);
            s(95919);
        },
        94312: (e, t, s) => {
            (Promise.resolve().then(s.bind(s, 30871)), Promise.resolve().then(s.bind(s, 56027)));
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
                8803, 3349, 9122, 6749, 6392, 6287, 3472, 2121, 3112, 3920, 6706, 4771, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1251, 1817, 6215, 2038, 4163, 3246, 7848,
                3482, 6680, 2247, 4345, 8836, 820, 4434, 48, 862, 1808, 8222, 4475, 5056, 7358,
            ],
            () => e((e.s = 94312)),
        ),
            (_N_E = e.O()));
    },
]);
