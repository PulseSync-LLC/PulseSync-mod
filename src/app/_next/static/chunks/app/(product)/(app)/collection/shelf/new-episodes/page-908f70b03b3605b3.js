(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5646],
    {
        108: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => a });
            var i = s(2058),
                r = s(61691);
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
        4364: (e, t, s) => {
            'use strict';
            s.d(t, { CollectionShelfNewEpisodesPage: () => P });
            var i = s(88800),
                r = s(84961),
                a = s(53548),
                n = s(58390),
                o = s(17392),
                l = s(29993),
                c = s(66719),
                d = s(29504),
                u = s(32596),
                p = s(69630),
                m = s(46422),
                _ = s(44230),
                h = s(37670),
                x = s(72288),
                g = s(86790),
                v = s(60266),
                E = s(93317),
                A = s(65724),
                T = s(88969),
                f = s(18593),
                N = s(96817),
                b = s(52300),
                S = s(76843),
                j = s(4370),
                O = s(78940),
                C = s(98644),
                k = s(93015),
                y = s(81013),
                w = s.n(y);
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
                    ? (0, i.jsx)(k.D, { variant: C.X.PLAYLIST, isActive: !0 })
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
            var L = s(43470),
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
        4795: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => a });
            var i = s(72288),
                r = s(97956);
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
        5048: (e, t, s) => {
            'use strict';
            s.d(t, { b: () => a });
            var i = s(61691),
                r = s(15077);
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
        7628: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => m });
            var i = s(88800),
                r = s(88969),
                a = s(58390),
                n = s(17392),
                o = s(29993),
                l = s(96817),
                c = s(29504),
                d = s(99890),
                u = s(4086),
                p = s(41928);
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
        9184: (e) => {
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
        13946: (e, t, s) => {
            'use strict';
            s.d(t, { i: () => H });
            var i = s(88800),
                r = s(65724),
                a = s(84961),
                n = s(53548),
                o = s(79070),
                l = s(17610),
                c = s(24548),
                d = s(29993),
                u = s(72288),
                p = s(35994);
            let m = (e, t) => {
                let { withLink: s, separator: i } = t,
                    r = s && !e.various ? (0, p.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: r };
            };
            var _ = s(21010),
                h = s.n(_),
                x = s(17392),
                g = s(29504),
                v = s(91292),
                E = s(2058),
                A = s(92716),
                T = s(96527),
                f = s(78940),
                N = s(55693),
                b = s(58217);
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
            var O = s(88969),
                C = s(65453);
            let k = (e) => {
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
            var y = s(61013),
                w = s(87819),
                I = s(40634),
                L = s(48468),
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
            var U = s(19934),
                W = s(70396),
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
                            (0, y.A)(() => {
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
                                  : (0, i.jsx)(k, { spoilerClassName: a, spoilerArtistsCount: A.hiddenArtistsCount, handleOnSpoilerClick: A.handleOnSpoilerClick }),
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
        15526: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        17017: (e, t, s) => {
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
        17332: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        18143: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { T: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        18278: (e, t, s) => {
            'use strict';
            s.d(t, { C: () => c });
            var i = s(88800),
                r = s(53548),
                a = s(17392),
                n = s(29504),
                o = s(15526),
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
        19840: (e, t, s) => {
            'use strict';
            (s.d(t, { G: () => r }), s(46606));
            var i = s(91136);
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
        21010: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        24548: (e, t, s) => {
            'use strict';
            s.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        32596: (e, t, s) => {
            'use strict';
            s.d(t, { SomethingWentWrong: () => w });
            var i = s(88800),
                r = s(65724),
                a = s(84961),
                n = s(53548),
                o = s(2058),
                l = s(88969);
            s(30282);
            var c = s(96817),
                d = s(52300),
                u = s(29504),
                p = s(78793),
                m = s(92716),
                _ = s(99984),
                h = s(90780),
                x = s(65523),
                g = s(14518),
                v = s(44230),
                E = s(4370),
                A = s(72288),
                T = s(97956),
                f = s(56248),
                N = s(90688),
                b = s(78940);
            let S = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var j = s(96856),
                O = s.n(j);
            let C = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: s = !0, onBack: a } = e,
                    { slam: n } = (0, A.g)(),
                    { contentRef: o } = (0, v.g)(),
                    d = (0, b.Z)(E.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(O().root, t),
                    children: [
                        s &&
                            (0, i.jsx)(f.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(O().navigation, { [O().navigation_desktop]: !o }),
                                withForwardControl: !1,
                                onBackwardClick: a,
                            }),
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
                                n.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: O().button,
                                        onClick: d,
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
            var k = s(9184),
                y = s.n(k);
            let w = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: s = !0, onBack: a } = e,
                    { formatMessage: N } = (0, o.A)(),
                    b = (0, n.useContext)(A.P),
                    S = null == b ? void 0 : b.experiments.checkExperiment(T.z.WebNextUnstableMusicScreen, 'on'),
                    j = N(S ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
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
                })(j);
                let { sendRefreshEvent: O } = (function () {
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
                    k = (0, n.useCallback)(() => {
                        (O(), (window.location.href = E.Z.main.href));
                    }, [O]),
                    { contentRef: w } = (0, v.g)();
                return S
                    ? (0, i.jsx)(C, { className: t, withBackwardControl: s, onBack: a })
                    : (0, i.jsxs)('div', {
                          className: (0, r.$)(y().root, t),
                          children: [
                              s &&
                                  (0, i.jsx)(f.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(y().navigation, { [y().navigation_desktop]: !w }),
                                      withForwardControl: !1,
                                      onBackwardClick: a,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, r.$)(y().content, { [y().content_shrink]: !s }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: y().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, r.$)(y().title, y().important), variant: 'h3', size: 'xs', children: j }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, r.$)(y().text, y().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: k,
                                          className: y().button,
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
        35994: (e, t, s) => {
            'use strict';
            s.d(t, { R: () => r });
            var i = s(67174);
            let r = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37670: (e, t, s) => {
            'use strict';
            s.d(t, { J: () => a });
            var i = s(53548);
            s(30282);
            var r = s(58390);
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
        40634: (e, t, s) => {
            'use strict';
            s.d(t, { V: () => E });
            var i = s(88800),
                r = s(65724),
                a = s(84961),
                n = s(53548),
                o = s(92716),
                l = s(17392),
                c = s(29993),
                d = s(90688),
                u = s(19934),
                p = s(7555),
                m = s(29504),
                _ = s(96527),
                h = s(78940),
                x = s(72288),
                g = s(80932),
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
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        42863: (e, t, s) => {
            (Promise.resolve().then(s.bind(s, 57328)), Promise.resolve().then(s.bind(s, 4364)));
        },
        43470: (e) => {
            e.exports = {
                root: 'CollectionShelfNewEpisodesPage_root__HTWkS',
                scrollableContainer: 'CollectionShelfNewEpisodesPage_scrollableContainer__xGZcJ',
                footer: 'CollectionShelfNewEpisodesPage_footer__0i466',
            };
        },
        44988: (e, t, s) => {
            'use strict';
            s.d(t, { U: () => d });
            var i = s(88800),
                r = s(84961),
                a = s(17392),
                n = s(52300),
                o = s(19934),
                l = s(108),
                c = s(72288);
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
        46606: (e, t, s) => {
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
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        52150: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => i });
            let i = (0, s(53548).createContext)({ pageAlbumId: void 0 });
        },
        56446: (e, t, s) => {
            'use strict';
            s.d(t, { k: () => u });
            var i = s(88800),
                r = s(53548),
                a = s(2058),
                n = s(17392),
                o = s(96817),
                l = s(52300),
                c = s(39318);
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
        57328: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => h });
            var i = s(88800),
                r = s(84961),
                a = s(58390),
                n = s(65724),
                o = s(88969),
                l = s(29504),
                c = s(7628),
                d = s(42674),
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
            var m = s(4370),
                _ = s(72288);
            let h = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: s } = e,
                    { user: r } = (0, _.g)();
                return r.isAuthorized ? t : (s && (0, a.redirect)(m.Z.main.href), (0, i.jsx)(p, {}));
            });
        },
        67990: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        81013: (e) => {
            e.exports = {
                title: 'CollectionShelfNewEpisodes_title__y_SoT',
                root: 'CollectionShelfNewEpisodes_root__VojSS',
                root_emptyList: 'CollectionShelfNewEpisodes_root_emptyList__jsjSW',
                wrapper: 'CollectionShelfNewEpisodes_wrapper__Z2EOe',
                iconBackground: 'CollectionShelfNewEpisodes_iconBackground__K4Xui',
                button: 'CollectionShelfNewEpisodes_button__3DALk',
            };
        },
        87762: (e, t, s) => {
            'use strict';
            s.d(t, { T: () => a });
            var i = s(53548),
                r = s(52150);
            function a() {
                return (0, i.useContext)(r.H);
            }
        },
        89916: (e, t, s) => {
            'use strict';
            s.d(t, { GX: () => a.G, X1: () => i.X, m5: () => r.m });
            var i = s(46606),
                r = s(91136),
                a = s(19840);
            s(17017);
        },
        90224: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => h });
            var i = s(88800),
                r = s(65724),
                a = s(84961),
                n = s(53548),
                o = s(2058),
                l = s(17392),
                c = s(52300),
                d = s(62837),
                u = s(72288),
                p = s(94398),
                m = s(17332),
                _ = s.n(m);
            let h = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: s, trackId: a, containerClassName: m, variant: h, size: x = 'xxxs', ...g } = e,
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
                        children: (0, i.jsx)(c.I, {
                            className: (0, r.$)(_().explicitMark, t),
                            'aria-label': S,
                            variant: f,
                            size: x,
                            ...g,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        91136: (e, t, s) => {
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
        92966: (e, t, s) => {
            'use strict';
            s.d(t, { K: () => h });
            var i = s(88800),
                r = s(2058),
                a = s(29993),
                n = s(87762),
                o = s(29595),
                l = s(74965),
                c = s(72288),
                d = s(66943),
                u = s(96706),
                p = s(53548),
                m = s(79390),
                _ = s(96295);
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
        94398: (e, t, s) => {
            'use strict';
            s.d(t, { k: () => d });
            var i = s(88800),
                r = s(17392),
                a = s(17610),
                n = s(29504),
                o = s(37438),
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
        96295: (e, t, s) => {
            'use strict';
            s.d(t, { T: () => o });
            var i = s(88800),
                r = s(84961),
                a = s(42729),
                n = s(5048);
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
        96856: (e) => {
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
        99890: (e, t, s) => {
            'use strict';
            s.d(t, { C8: () => a, UC: () => n, dM: () => o, uV: () => l });
            var i = s(89916),
                r = s(67990);
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
    },
    (e) => {
        (e.O(
            0,
            [
                7435, 8752, 7617, 4596, 8380, 5108, 127, 1191, 1931, 3637, 1296, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 2837, 4732, 1195,
                1598, 6281, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 818, 7053, 763, 2670, 7358,
            ],
            () => e((e.s = 42863)),
        ),
            (_N_E = e.O()));
    },
]);
