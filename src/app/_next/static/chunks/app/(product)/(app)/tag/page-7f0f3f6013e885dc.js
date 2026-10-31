(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4905],
    {
        554: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(t, ':').concat(i);
            };
        },
        4044: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => a });
            var r = i(67174);
            let a = {
                main: (0, r.u)('/'),
                chart: (0, r.u)('/chart'),
                chartPodcasts: (0, r.u)('/chart/podcasts'),
                collection: (0, r.u)('/collection'),
                collectionAlbums: (0, r.u)('/collection/albums'),
                collectionArtists: (0, r.u)('/collection/artists'),
                collectionClips: (0, r.u)('/collection/clips'),
                collectionDislikes: (0, r.u)('/collection/dislikes'),
                collectionKids: (0, r.u)('/collection/kids'),
                collectionKidsAlbums: (0, r.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, r.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, r.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, r.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, r.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, r.u)('/collection/multivibes'),
                collectionPlaylists: (0, r.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, r.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, r.u)('/collection/playlists/liked'),
                collectionShelf: (0, r.u)('/collection/shelf'),
                collectionShelfLiked: (0, r.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, r.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, r.u)('/collection/shelf/recently-played'),
                concerts: (0, r.u)('/concerts'),
                kids: (0, r.u)('/kids'),
                mixes: (0, r.u)('/mixes'),
                musicHistory: (0, r.u)('/music-history'),
                muzmarket: (0, r.u)('/muzmarket'),
                mymusic: (0, r.u)('/mymusic'),
                mymusicDownloadsTracks: (0, r.u)('/mymusic/downloads/tracks'),
                multivibe: (0, r.u)('/multivibe'),
                nonMusic: (0, r.u)('/non-music'),
                pay: (0, r.u)('/pay'),
                userSlides: (0, r.u)('/slides/user'),
                search: (0, r.u)('/search'),
                searchHistory: (0, r.u)('/search/history'),
                settings: (0, r.u)('/settings'),
                video: (0, r.u)('/video'),
            };
        },
        4795: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => l });
            var r = i(72288),
                a = i(97956);
            let l = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: l },
                    experiments: s,
                } = (0, r.g)();
                return (
                    !(null == l ? void 0 : l.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = s.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        6322: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var r = i(88800),
                a = i(15077),
                l = i(33719);
            let s = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(l.k, {
                    closeToast: i,
                    entityVariant: a.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
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
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => m });
            var r = i(88800),
                a = i(65724),
                l = i(53548),
                s = i(2058),
                n = i(88969),
                o = i(96817),
                c = i(52300),
                u = i(29504),
                d = i(59304),
                g = i(4044),
                _ = i.n(g);
            let m = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    g = (0, l.useRef)(null),
                    { formatMessage: m } = (0, s.A)();
                (0, l.useEffect)(() => {
                    var e;
                    null == (e = g.current) || e.focus();
                }, []);
                let p = (0, l.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, r.jsx)(u.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(n.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(o.$, {
                                    ref: g,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': m({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [m, t],
                );
                return (0, r.jsx)(d.$, { className: (0, a.$)(_().root, _().important), message: p, closeToast: i });
            };
        },
        9590: (e) => {
            e.exports = {
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
        11006: (e) => {
            e.exports = {
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
        12906: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => l });
            var r = i(5120),
                a = i(57285);
            let l = (e) => {
                let t = (0, a.n)(e);
                return (0, r.wg)(t);
            };
        },
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => G });
            var r = i(88800),
                a = i(65724),
                l = i(84961),
                s = i(53548),
                n = i(79070),
                o = i(17610),
                c = i(24548),
                u = i(29993),
                d = i(72288),
                g = i(35994);
            let _ = (e, t) => {
                let { withLink: i, separator: r } = t,
                    a = i && !e.various ? (0, g.R)(e.id) : null;
                return { artist: e, name: e.name, separator: r, link: a };
            };
            var m = i(21010),
                p = i.n(m),
                h = i(17392),
                v = i(29504),
                y = i(91292),
                E = i(2058),
                S = i(92716),
                f = i(96527),
                C = i(78940),
                x = i(55693),
                T = i(58217);
            let L = (0, l.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: a, captionSize: l = 'm', allArtistsTitle: s, withCustomTooltip: n, hoverSettings: c } = e,
                        {
                            name: g,
                            link: _,
                            title: m,
                            ariaLabel: p,
                            tooltipText: L,
                            isTooltipEnabled: P,
                            handleNavigate: A,
                        } = ((e) => {
                            var t, i;
                            let { item: r, allArtistsTitle: a, withCustomTooltip: l } = e,
                                { formatMessage: s } = (0, E.A)(),
                                n = ((e, t) => {
                                    let { item: i, allArtistsTitle: r, withCustomTooltip: a } = e,
                                        l = r || i.name;
                                    return {
                                        ...i,
                                        title: a ? void 0 : l,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: l,
                                        isTooltipEnabled: !r && a,
                                    };
                                })({ item: r, allArtistsTitle: a, withCustomTooltip: l }, s),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, d.g)(),
                                g = (0, C.Z)(null != (i = null == (t = n.link) ? void 0 : t.href) ? i : n.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, x.z)(),
                                m = (0, f.N)(),
                                p = (0, u.c)((e) => {
                                    (c && o.isOpened && o.close(), g(e));
                                }),
                                h = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: r, fullscreenPlayer: a, fullscreenVideoPlayer: l } = (0, d.g)(),
                                        { modal: s } = r;
                                    return (0, T.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), s.isOpened && (r.reset(), s.close()), a.modal.isOpened && a.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            l.modal.isOpened && (l.modal.close(), l.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: n.artist, callback: p }),
                                v = (0, u.c)((e) => {
                                    (m({ to: S.AppScreen.ArtistScreen }), null == _ || _(), h(e));
                                });
                            return { ...n, handleNavigate: v };
                        })({ item: t, allArtistsTitle: s, withCustomTooltip: n });
                    return _
                        ? (0, r.jsx)(y.N, {
                              ..._,
                              'aria-label': p,
                              className: i,
                              onClick: A,
                              title: m,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(o.m_, {
                                  enabled: P,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: L,
                                  hoverSettings: c,
                                  children: (0, r.jsx)(v.HL, { variant: 'span', type: 'entity', size: l, weight: 'medium', className: a, children: g }),
                              }),
                          })
                        : (0, r.jsx)(o.m_, {
                              enabled: P,
                              offsetOptions: 4,
                              placement: 'top',
                              text: L,
                              hoverSettings: c,
                              children: (0, r.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: l,
                                  weight: 'medium',
                                  className: a,
                                  title: m,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: g,
                              }),
                          });
                }),
                P = (e) => {
                    let { group: t, linkClassName: i, captionClassName: a, captionSize: l, allArtistsTitle: n, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, r.jsx)(L, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: l,
                                allArtistsTitle: n,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, r.jsxs)(
                                    s.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, r.jsx)(L, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: l,
                                                allArtistsTitle: n,
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
            var A = i(88969),
                N = i(65453);
            let k = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: l } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(N.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(p().spoiler, i),
                            onClick: l,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(A.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var R = i(61013),
                b = i(87819),
                I = i(40634),
                O = i(48468),
                j = i.n(O);
            let w = (0, l.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, r.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, b.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: a, children: t }),
                            (0, r.jsx)(o.ZI, { className: j().tooltipContent, children: i.map((e) => (0, r.jsx)(I.V, { artist: e, className: j().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, s.forwardRef)((e, t) => (0, r.jsx)(w, { forwardRef: t, ...e }));
            var D = i(19934),
                K = i(70396),
                F = i.n(K);
            let U = (0, l.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: l } = (0, E.A)();
                    return (0, r.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, a.$)(F().root, F().important),
                        label: t,
                        ariaLabel: l({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(I.V, { artist: e }, e.id)),
                    });
                }),
                H = (0, l.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [l, o] = (0, s.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, d.g)(),
                        g = (0, u.c)(() => {
                            let e = a.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, n.L)(() =>
                            (0, R.A)(() => {
                                g();
                            }, 100),
                        );
                    if (
                        ((0, s.useEffect)(
                            () => (
                                window.addEventListener('resize', _),
                                g(),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [_, g],
                        ),
                        (0, s.useEffect)(() => {
                            g();
                        }, [t, g]),
                        0 !== t.length)
                    )
                        return (l || c) && (!c || 1 !== t.length) ? (c ? (0, r.jsx)(U, { artists: t, label: i }) : (0, r.jsx)(M, { artists: t, label: i })) : i;
                }),
                G = (0, l.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: l,
                            linkClassName: g,
                            captionClassName: m,
                            captionSize: h,
                            variant: v = 'breakAll',
                            spoilerComponent: y,
                            ...E
                        } = e,
                        S = ((e) => {
                            var t, i, r;
                            let { separator: a, visibleArtistsCount: l, withLink: n, withComposer: o, artistIdWithoutLink: c, withContextMenu: g } = e,
                                m = null != (t = e.artists) ? t : [],
                                p = null == (i = e.withAllArtistsTitle) || i,
                                h = null == (r = e.withCustomTooltip) || r,
                                v = (0, s.useRef)(null),
                                [y, E] = (0, s.useState)(!1),
                                {
                                    settings: { isMobile: S },
                                } = (0, d.g)(),
                                f = ((!S || 1 === m.length) && g) || !g,
                                C = ((e, t) => {
                                    var i, r, a;
                                    let l = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        s = null == (r = null == t ? void 0 : t.withLink) || r,
                                        n = null != (a = null == t ? void 0 : t.separator) ? a : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(n),
                                        { visibleArtists: c, hiddenArtistsCount: u } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: r } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => r || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: l, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: r, separator: a, isFirst: l } = t;
                                                return {
                                                    primary: _(e, { withLink: r, separator: l ? void 0 : a }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = a ? e.separator : '';
                                                        return _(e, { withLink: r, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: s && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: n, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: u,
                                    };
                                })(m, { separator: a, visibleArtistsCount: y ? void 0 : l, withComposer: o, withLink: !!f && n, artistIdWithoutLink: c }),
                                x = p ? C.allArtistsTitle : '',
                                T = (0, u.c)((e) => {
                                    (E(!0), e.preventDefault());
                                });
                            return {
                                artists: m,
                                groups: C.groups,
                                hiddenArtistsCount: C.hiddenArtistsCount,
                                allArtistsTitle: x,
                                withCustomTooltip: h,
                                withContextMenu: g,
                                labelRef: v,
                                handleOnSpoilerClick: T,
                                isTooltipEnabled: !!x && h && !g && !S,
                                title: !x || h || g ? void 0 : x,
                            };
                        })(E),
                        f = (0, n.L)(() =>
                            S.hiddenArtistsCount <= 0
                                ? null
                                : (0, s.isValidElement)(y)
                                  ? y
                                  : (0, r.jsx)(k, { spoilerClassName: l, spoilerArtistsCount: S.hiddenArtistsCount, handleOnSpoilerClick: S.handleOnSpoilerClick }),
                        ),
                        C = (0, r.jsx)(o.m_, {
                            referenceRef: S.labelRef,
                            enabled: S.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: S.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(p().root, p()['root_variant_'.concat(v)], { [p().root_clamp]: i && i > 0, [p().ellipsis]: !i }, t),
                                title: S.title,
                                children: [
                                    S.groups.map((e) =>
                                        (0, r.jsx)(
                                            P,
                                            {
                                                group: e,
                                                linkClassName: g,
                                                captionClassName: m,
                                                captionSize: h,
                                                allArtistsTitle: S.allArtistsTitle,
                                                withCustomTooltip: S.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    f,
                                ],
                            }),
                        });
                    return S.withContextMenu ? (0, r.jsx)(H, { labelRef: S.labelRef, artists: S.artists, label: C }) : C;
                });
        },
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        16818: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => o });
            var r = i(53647),
                a = i(4086),
                l = i(41928),
                s = i(65523),
                n = i(57448);
            let o = () => {
                let e = (0, l.N)(),
                    t = e.get(a.oo),
                    i = e.get(a.QG),
                    o = e.get(a.uM),
                    c = e.get(a.ff),
                    u = e.get(a.V4),
                    d = e.get(a.P0),
                    g = (0, n.f)(),
                    _ = (0, s.U)(),
                    m = (0, l.N)().get(a.TK),
                    p = e.get(a.ni),
                    h = e.get(a.RD),
                    v = new r.si(),
                    y = new r.fW();
                return {
                    ...g,
                    acqOffers: o,
                    disclaimerDictionary: c,
                    logger: _,
                    modelActionsLogger: m,
                    localStorage: v,
                    sessionStorage: y,
                    containerStorage: t,
                    authorization: i,
                    config: u,
                    clientSafeConfig: d,
                    landingSdk: p,
                    tagSandbox: h,
                };
            };
        },
        17017: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { Z: () => r }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(r || (r = {})));
        },
        17657: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
                srTitleLink: 'PlaylistCard_srTitleLink__Gg2Dy',
                controls: 'PlaylistCard_controls__Ej8Rz',
                cover: 'PlaylistCard_cover__tpK5L',
                coverBlock: 'PlaylistCard_coverBlock__1slsN',
                image: 'PlaylistCard_image__Li6oy',
                titleLink: 'PlaylistCard_titleLink__H8qEc',
                artists: 'PlaylistCard_artists__HtVIF',
                artistLink: 'PlaylistCard_artistLink__jx3KB',
                playButton: 'PlaylistCard_playButton__eaduk',
                likeButton: 'PlaylistCard_likeButton__RYXJz',
                menuButton: 'PlaylistCard_menuButton__jFcWr',
                pinButton: 'PlaylistCard_pinButton__jhWnL',
                trailerButton: 'PlaylistCard_trailerButton__Qjg_U',
                control: 'PlaylistCard_control__73YUq',
            };
        },
        18243: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            var r = i(42078);
            let a = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(r._.PLAYLIST_ITEM).concat(t, '_').concat(i);
            };
        },
        19840: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => a }), i(46606));
            var r = i(91136);
            class a extends r.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, a.prototype));
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
        23341: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            var r = i(5120);
            let a = r.gK.model('Pager', { page: r.gK.number, perPage: r.gK.number, total: r.gK.number, lastPage: r.gK.maybe(r.gK.boolean) });
        },
        23744: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => n });
            var r = i(5120),
                a = i(50633);
            let l = ['Safari', 'MobileSafari'],
                s = ['iOS', 'MacOS'],
                n = r.gK.model('DomainTrailerEntity', { available: r.gK.boolean }).views((e) => ({
                    get isAvailable() {
                        if (!(0, r._n)(e)) return !1;
                        let { settings: t } = (0, a.M)(e);
                        if (
                            !(null == t ? void 0 : t.browserInfo) ||
                            ((e) => {
                                let t = e.version ? Number(e.version.split('.')[0]) : void 0;
                                return !!(e.name && l.includes(e.name) && e.OSFamily && s.includes(e.OSFamily) && t && t < 18);
                            })(t.browserInfo)
                        )
                            return !1;
                        return e.available;
                    },
                }));
        },
        24460: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => g });
            var r = i(88800),
                a = i(96706),
                l = i(53548),
                s = i(2058),
                n = i(29595),
                o = i(74965),
                c = i(72288),
                u = i(66943),
                d = i(6322);
            let g = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: g } = (0, s.A)(),
                    [_, m] = (0, l.useState)(!1);
                return (0, l.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (_) return;
                    let l = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                    m(!0);
                    let s = await e.togglePin();
                    (m(!1),
                        s
                            ? i((0, r.jsx)(d.l, { playlist: l }), { containerId: n.u.INFO })
                            : i((0, r.jsx)(u.h, { error: g({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [t.isAuthorized, _, e, i, g]);
            };
        },
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        30832: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var r = i(88800),
                a = i(15077),
                l = i(42729);
            let s = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(l.O, {
                    entityVariant: a.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => b });
            var r = i(88800),
                a = i(65724),
                l = i(84961),
                s = i(53548),
                n = i(2058),
                o = i(88969);
            i(30282);
            var c = i(96817),
                u = i(52300),
                d = i(29504),
                g = i(78793),
                _ = i(92716),
                m = i(99984),
                p = i(90780),
                h = i(65523),
                v = i(14518),
                y = i(44230),
                E = i(4370),
                S = i(72288),
                f = i(97956),
                C = i(56248),
                x = i(90688),
                T = i(78940);
            let L = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var P = i(96856),
                A = i.n(P);
            let N = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: l } = e,
                    { slam: s } = (0, S.g)(),
                    { contentRef: n } = (0, y.g)(),
                    u = (0, T.Z)(E.Z.mymusicDownloadsTracks.href);
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(A().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(C.L, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(A().navigation, { [A().navigation_desktop]: !n }),
                                withForwardControl: !1,
                                onBackwardClick: l,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(A().content, { [A().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(x._V, { className: A().image, src: L.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, r.jsxs)('div', {
                                    className: A().message,
                                    children: [
                                        (0, r.jsx)(d.DZ, {
                                            className: A().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, r.jsx)(d.HL, {
                                            className: A().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                s.hasDownloadedTracks &&
                                    (0, r.jsx)(c.$, {
                                        className: A().button,
                                        onClick: u,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(d.HL, {
                                            className: A().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var k = i(9184),
                R = i.n(k);
            let b = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: l } = e,
                    { formatMessage: x } = (0, n.A)(),
                    T = (0, s.useContext)(S.P),
                    L = null == T ? void 0 : T.experiments.checkExperiment(f.z.WebNextUnstableMusicScreen, 'on'),
                    P = x(L ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: i } = (0, p.gf)(),
                        { pageId: r } = (0, v.$)(),
                        a = (0, h.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let l = (0, g.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: r,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        l && (0, m.z5)(t.evgenInstance, l);
                    }, [t, e, i, r, a]);
                })(P);
                let { sendRefreshEvent: A } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: i } = (0, v.$)(),
                            r = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let a = (0, g.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, m.bv)(e.evgenInstance, a);
                            }, [e, t, i, r]),
                        };
                    })(),
                    k = (0, s.useCallback)(() => {
                        (A(), (window.location.href = E.Z.main.href));
                    }, [A]),
                    { contentRef: b } = (0, y.g)();
                return L
                    ? (0, r.jsx)(N, { className: t, withBackwardControl: i, onBack: l })
                    : (0, r.jsxs)('div', {
                          className: (0, a.$)(R().root, t),
                          children: [
                              i &&
                                  (0, r.jsx)(C.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(R().navigation, { [R().navigation_desktop]: !b }),
                                      withForwardControl: !1,
                                      onBackwardClick: l,
                                  }),
                              (0, r.jsxs)('div', {
                                  className: (0, a.$)(R().content, { [R().content_shrink]: !i }),
                                  children: [
                                      (0, r.jsx)(u.I, { className: R().icon, variant: 'attention', size: 'xxl' }),
                                      (0, r.jsx)(d.DZ, { className: (0, a.$)(R().title, R().important), variant: 'h3', size: 'xs', children: P }),
                                      (0, r.jsxs)(d.HL, {
                                          className: (0, a.$)(R().text, R().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, r.jsx)(c.$, {
                                          onClick: k,
                                          className: R().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, r.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, r.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        33750: (e) => {
            e.exports = {
                root: 'TagPage_root__EWN9A',
                scrollContainer: 'TagPage_scrollContainer__lvG_1',
                important: 'TagPage_important__Jq37E',
                content: 'TagPage_content__rUC_l',
                shimmerTitle: 'TagPage_shimmerTitle__ge9m_',
                footer: 'TagPage_footer__W0mZr',
                item: 'TagPage_item__X_lW7',
            };
        },
        34407: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => r });
            let r = 100;
        },
        34473: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 34799));
        },
        34799: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => B }));
            var r = i(88800),
                a = i(53548),
                l = i(58390),
                s = i(34961),
                n = i(53892),
                o = i(5120),
                c = i(89916),
                u = i(99211),
                d = i(39339),
                g = i(27506),
                _ = i(74773),
                m = i(52440);
            let p = o.gK
                    .model('TagPage', {
                        title: o.gK.maybe(o.gK.string),
                        errorStatusCode: o.gK.maybeNull(o.gK.number),
                        tagLoadingState: o.gK.enumeration(Object.values(_.G)),
                        playlistsData: o.gK.array(o.gK.model({ uid: o.gK.number, kind: o.gK.number })),
                        pagesLoader: (0, m.I)(d.$),
                    })
                    .views((e) => {
                        let t = {
                            get isNeededToLoad() {
                                return e.tagLoadingState === _.G.IDLE;
                            },
                            get isResolved() {
                                return e.tagLoadingState === _.G.RESOLVE;
                            },
                            get isNotFound() {
                                let t = e.pagesLoader.isEmpty;
                                return (e.tagLoadingState === _.G.REJECT && (e.errorStatusCode === c.X1.NOT_FOUND || e.errorStatusCode === c.X1.BAD_REQUEST)) || t;
                            },
                            get isSomethingWrong() {
                                return e.tagLoadingState === _.G.REJECT && !t.isNotFound;
                            },
                            get isShimmerVisible() {
                                return !e.pagesLoader.pager && !e.pagesLoader.isInitialRequestRejected && e.tagLoadingState !== _.G.REJECT;
                            },
                            get totalCount() {
                                var i, r;
                                return null != (r = null == (i = e.pagesLoader.pager) ? void 0 : i.total) ? r : 0;
                            },
                            get playlists() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getPlaylists: (0, o.L3)(function* (t) {
                                let { page: i = 0, pageSize: r = 20 } = t,
                                    { playlistsResource: a, modelActionsLogger: l } = (0, o._$)(e);
                                if (e.tagLoadingState === _.G.RESOLVE && e.pagesLoader.isPageNeedToLoad(i))
                                    try {
                                        e.pagesLoader.setPageState(i, _.G.PENDING);
                                        let t = i * r,
                                            l = e.playlistsData.slice(t, t + r),
                                            s = yield a.getPlaylists({ playlistIds: l.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                            n = { page: i, perPage: r, total: e.playlistsData.length },
                                            o = s.playlists.map(u.j);
                                        e.pagesLoader.setItems(o, { page: i, pager: n });
                                    } catch (t) {
                                        (l.error(t),
                                            e.pagesLoader.setItems(null, { responseStatus: g.F.ERROR, page: i }),
                                            t instanceof c.GX &&
                                                (t.statusCode === c.X1.NOT_FOUND || t.statusCode === c.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = c.X1.NOT_FOUND));
                                    }
                            }),
                            reset() {
                                (e.pagesLoader.reset(),
                                    (e.tagLoadingState = _.G.IDLE),
                                    (e.title = void 0),
                                    (e.playlistsData = (0, o.wg)([])),
                                    (e.errorStatusCode = null));
                            },
                            getTag: (0, o.L3)(function* (i) {
                                let { id: r, page: a = 0, pageSize: l = 20 } = i,
                                    { tagResource: s, modelActionsLogger: n } = (0, o._$)(e);
                                if (e.tagLoadingState !== _.G.PENDING)
                                    try {
                                        var u;
                                        e.tagLoadingState = _.G.PENDING;
                                        let i = yield s.getPlaylistIds({ id: r });
                                        ((e.title = null == (u = i.tag) ? void 0 : u.name),
                                            (e.playlistsData = (0, o.wg)(i.ids.map((e) => ({ uid: e.uid, kind: e.kind })))),
                                            e.tagLoadingState !== _.G.IDLE && (e.tagLoadingState = _.G.RESOLVE),
                                            yield t.getPlaylists({ page: a, pageSize: l }));
                                    } catch (t) {
                                        (n.error(t),
                                            t instanceof c.GX &&
                                                (t.statusCode === c.X1.NOT_FOUND || t.statusCode === c.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = c.X1.NOT_FOUND),
                                            e.tagLoadingState !== _.G.IDLE && (e.tagLoadingState = _.G.REJECT));
                                    }
                            }),
                        };
                        return t;
                    }),
                h = { tagLoadingState: _.G.IDLE, playlistsData: [], pagesLoader: {} },
                { pageStoreProvider: v } = (0, s.W)({ createStore: (e) => p.create(h, e), patchKey: n.n.TAG });
            var y = i(65724),
                E = i(84961),
                S = i(2058),
                f = i(79070),
                C = i(19994),
                x = i(29504),
                T = i(32596),
                L = i(69630),
                P = i(41911),
                A = i(12816),
                N = i(59844),
                k = i(46422),
                R = i(44230),
                b = i(37670),
                I = i(72288),
                O = i(54320),
                j = i(86790),
                w = i(60266),
                M = i(93317),
                D = i(37770),
                K = i(79418),
                F = i(33750),
                U = i.n(F);
            let H = (0, E.PA)((e) => {
                    var t;
                    let { tagId: i } = e,
                        o = (0, s.s)(n.n.TAG),
                        {
                            settings: { isMobile: c },
                        } = (0, I.g)(),
                        { formatMessage: u } = (0, S.A)(),
                        { contentScrollRef: d, setContentScrollRef: g } = (0, R.g)(),
                        _ = (0, k.W)();
                    i || (0, l.notFound)();
                    let m = (0, a.useCallback)(
                        (e) => {
                            o.getPlaylists({ page: e, pageSize: 20 });
                        },
                        [o],
                    );
                    o.isNotFound && (0, l.notFound)();
                    let p = (0, a.useMemo)(() => ({ Footer: () => (0, r.jsx)(w.A, { children: (0, r.jsx)(j.w, { className: U().footer }) }) }), []);
                    ((0, b.J)(o.isResolved), (0, O.X)(o.pagesLoader, m));
                    let h = (0, f.L)(() =>
                        o.isShimmerVisible
                            ? (0, r.jsx)(C.W, { className: U().shimmerTitle, radius: 'l' })
                            : (0, r.jsx)(x.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: o.title }),
                    );
                    if ((o.isNeededToLoad && (0, a.use)(o.getTag({ id: i, page: 0, pageSize: 20 })), o.isSomethingWrong)) return (0, r.jsx)(T.SomethingWentWrong, {});
                    let v = o.isShimmerVisible ? 20 : o.totalCount;
                    return (0, r.jsx)(N.n, {
                        pageId: A._Q.TAG,
                        children: (0, r.jsx)(L.h, {
                            scrollElement: d,
                            outerTitle: o.title,
                            children: (0, r.jsxs)('div', {
                                className: U().root,
                                children: [
                                    (0, r.jsx)(M.Y, { variant: M.V.TEXT, withForwardControl: !1, withBackwardControl: _.canBack, children: h }),
                                    (0, r.jsx)(K.$, {
                                        className: (0, y.$)(U().scrollContainer, U().important),
                                        customComponents: p,
                                        itemContentCallback: (e) => {
                                            let t = o.playlists[e],
                                                i = u({ id: 'loading-messages.entity-is-loading' }, { entityName: u({ id: 'entity-names.playlist' }) });
                                            return !t || o.isShimmerVisible
                                                ? (0, r.jsx)(D.V, { isActive: !0, 'aria-label': i })
                                                : (0, r.jsx)(P.B, { playlist: t, contentLinesCount: 3 }, t.key);
                                        },
                                        totalCount: v,
                                        initialItemCount: v,
                                        onGetDataByPage: m,
                                        pageSize: 20,
                                        totalRequests: null != (t = null == o ? void 0 : o.pagesLoader.requestsCount) ? t : 0,
                                        listClassName: U().content,
                                        itemClassName: U().item,
                                        handleRef: g,
                                        context: { listAriaLabel: u({ id: 'mixes.albums-list' }, { genreName: o.title || '' }) },
                                        isMobileLayout: c,
                                        useWindowScroll: c,
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                G = () => {
                    let e = (0, k.W)(),
                        { formatMessage: t } = (0, S.A)(),
                        i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.playlist' }) }),
                        a = Array.from({ length: 20 }, (e, t) => {
                            let a = void 0 === e ? t : ''.concat(t, '-').concat(String(e));
                            return (0, r.jsx)('div', { className: U().item, children: (0, r.jsx)(D.V, { isActive: !0, 'aria-label': i }) }, a);
                        });
                    return (0, r.jsx)(L.h, {
                        scrollElement: null,
                        children: (0, r.jsxs)('div', {
                            className: U().root,
                            children: [
                                (0, r.jsx)(M.Y, {
                                    variant: M.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, r.jsx)(C.W, { className: U().shimmerTitle, radius: 'l' }),
                                }),
                                (0, r.jsx)('div', { className: U().content, children: a }),
                            ],
                        }),
                    });
                },
                B = () => {
                    let e = (0, l.useSearchParams)().get('tagId');
                    return (
                        e || (0, l.notFound)(),
                        (0, r.jsx)(v, { children: (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)(G, {}), children: (0, r.jsx)(H, { tagId: e }) }) })
                    );
                };
        },
        34961: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => h, s: () => v });
            var r = i(88800),
                a = i(84961),
                l = i(58390),
                s = i(53548),
                n = i(35412),
                o = i(39499),
                c = i(89108),
                u = i(70003),
                d = i(72288),
                g = i(16818);
            (0, a.eO)(!1);
            let _ = (0, s.createContext)(null),
                m = (e) => {
                    let { children: t, store: i, storeKey: a } = e,
                        l = (0, s.useMemo)(() => ({ store: i, storeKey: a }), [i, a]);
                    return (0, r.jsx)(_.Provider, { value: l, children: t });
                },
                p = (e) => {
                    let { nonce: t, patchKey: i, patchesRef: a } = e;
                    return (
                        (0, l.useServerInsertedHTML)(() => {
                            let e = a.current;
                            return ((a.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, n.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(i, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                h = (e) => {
                    let { createStore: t, patchKey: i } = e,
                        a = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[i]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[i], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: l, nonce: s } = e,
                                n = (0, g.Y)(),
                                o = (0, d.g)(),
                                { store: _, patchesRef: h } = (0, u.m)({
                                    createStore: () => t({ ...n, rootStore: o }),
                                    getPendingPatchBatches: a,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(p, { nonce: s, patchKey: i, patchesRef: h }), (0, r.jsx)(m, { store: _, storeKey: i, children: l })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, s.useContext)(_);
                if (!i || i.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == i ? void 0 : i.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return i.store;
            }
        },
        35994: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => a });
            var r = i(67174);
            let a = (e) => (0, r.u)('/artist/:artistId', { params: { artistId: e } });
        },
        36207: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => s });
            var r = i(88800),
                a = i(2058),
                l = i(17610);
            let s = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, a.A)();
                return (0, r.jsx)(l.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        37770: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => c });
            var r = i(88800),
                a = i(65724),
                l = i(17392),
                s = i(19994),
                n = i(9590),
                o = i.n(n);
            let c = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: n,
                    round: c,
                    'aria-label': u,
                    centered: d,
                    withInfo: g = !0,
                    linesCount: _ = 3,
                    withSubcover: m,
                    radius: p = 'l',
                } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': u,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(o().root, i),
                    'data-test-id': l.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        m && (0, r.jsx)(s.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, r.jsx)(s.W, { isActive: t, className: (0, a.$)(o().cover, n, { [o().cover_round]: c, [o().cover_withSubcover]: m }), radius: p }),
                        g &&
                            (0, r.jsx)('div', {
                                className: (0, a.$)(o().infoContainer, o()['content_linesCount_'.concat(_)], { [o().infoContainer_centered]: d }),
                                children: (0, r.jsx)(s.W, { isActive: t, className: (0, a.$)(o().title, { [o().title_withSubcover]: m }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        39339: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => v });
            var r = i(5120),
                a = i(89916),
                l = i(60385),
                s = i(79390),
                n = i(50633),
                o = i(27506),
                c = i(67174),
                u = i(23744),
                d = i(97335),
                g = i(67318),
                _ = i(34407),
                m = i(554),
                p = i(18243),
                h = i(99007);
            let v = r.gK
                .compose(
                    r.gK.model({
                        uuid: r.gK.string,
                        isAvailable: r.gK.boolean,
                        revision: r.gK.maybe(r.gK.number),
                        uid: r.gK.number,
                        kind: r.gK.number,
                        title: r.gK.maybe(r.gK.string),
                        coverUri: r.gK.maybe(r.gK.string),
                        tracksCount: r.gK.maybe(r.gK.number),
                        averageColor: r.gK.maybe(r.gK.string),
                        generatedPlaylistType: r.gK.maybe(r.gK.string),
                        personalColor: r.gK.maybeNull(r.gK.number),
                        visibility: r.gK.maybe(r.gK.string),
                        trailer: r.gK.maybe(u.a),
                    }),
                    d.t,
                )
                .views((e) => ({
                    get key() {
                        return ''.concat(e.uuid, '_').concat(e.uid, '_').concat(e.kind);
                    },
                    get url() {
                        let { href: t } = (0, c.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid } });
                        return t;
                    },
                    get isLikesCountHidden() {
                        return e.kind === h.j.LIKE || e.kind === h.j.CHART || e.generatedPlaylistType;
                    },
                    get isFavouritePlaylist() {
                        return e.kind === h.j.LIKE;
                    },
                    get isPublic() {
                        return e.visibility === l.L.PUBLIC;
                    },
                    get isLiked() {
                        if (!(0, r._n)(e)) return !1;
                        let { library: t } = (0, n.M)(e);
                        return t.isPlaylistLiked((0, m.m)(e));
                    },
                    get pinId() {
                        return (0, p.f)(e);
                    },
                    get id() {
                        return (0, m.m)(e);
                    },
                    get isPinned() {
                        if (!(0, r._n)(e)) return !1;
                        let { pinsCollection: t } = (0, n.M)(e);
                        return t.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: t } = (0, n.M)(e);
                        return !!(t.isAuthorized && e.uid && t.account.data.uid && e.uid === t.account.data.uid);
                    },
                    get canUserChange() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isOwnPlaylist && !this.isFavouritePlaylist;
                    },
                    get isOwnFavouritePlaylist() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isFavouritePlaylist && this.isOwnPlaylist;
                    },
                }))
                .actions((e) => ({
                    toggleLike: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { library: t, user: i } = (0, n.M)(e);
                        if (i.isAuthorized) {
                            let a = yield t.togglePlaylistLike({ userId: i.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return ((0, r._n)(e) && a === s.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), a);
                        }
                    }),
                    togglePin: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { pinsCollection: t, user: i } = (0, n.M)(e);
                        if (i.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return g.Y.ERROR;
                        let { usersResource: i, modelActionsLogger: l } = (0, r._$)(e);
                        try {
                            var s, n;
                            let r = yield i.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (s = e.revision) ? s : 0, playlistKind: e.kind });
                            return ((e.revision = r.revision), (e.isAvailable = null == (n = r.available) || n), g.Y.OK);
                        } catch (e) {
                            if ((l.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === a.X1.PRECONDITION_FAILED)) return g.Y.RELOAD;
                            return g.Y.ERROR;
                        }
                    }),
                    changeTitle: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return o.F.ERROR;
                        if (e.title === t) return o.F.OK;
                        let { usersResource: i, modelActionsLogger: a } = (0, r._$)(e);
                        if (e.canUserChange) {
                            if (t.length < 1 || t.length > _.k) return o.F.ERROR;
                            let r = e.title;
                            e.title = t;
                            try {
                                let a = yield i.changePlaylistTitle({ title: t, userId: e.uid, playlistKind: e.kind });
                                if (!(null == a ? void 0 : a.title)) return ((e.title = r), o.F.ERROR);
                                return ((e.title = a.title), o.F.OK);
                            } catch (t) {
                                ((e.title = r), a.error(t));
                            }
                        }
                        return o.F.ERROR;
                    }),
                    deletePlaylist: (0, r.L3)(function* () {
                        if (!(0, r._n)(e) || !e.canUserChange) return o.F.ERROR;
                        let { pinsCollection: t } = (0, n.M)(e),
                            { usersResource: i, modelActionsLogger: a } = (0, r._$)(e);
                        try {
                            return (yield i.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), t.isPinned(e.pinId) && t.deletePin(e.pinId), o.F.OK);
                        } catch (e) {
                            a.error(e);
                        }
                        return o.F.ERROR;
                    }),
                    toggleVisibility: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return o.F.ERROR;
                        let { usersResource: i, modelActionsLogger: a } = (0, r._$)(e),
                            { user: s } = (0, n.M)(e),
                            c = e.visibility,
                            u = e.isPublic ? l.L.PRIVATE : l.L.PUBLIC;
                        t && (u = t);
                        try {
                            return (
                                (e.visibility = u),
                                e.isOwnFavouritePlaylist
                                    ? yield s.setSettings({ userMusicVisibility: u })
                                    : yield i.togglePlaylistVisibility({ visibility: u, userId: e.uid, playlistKind: e.kind }),
                                o.F.OK
                            );
                        } catch (e) {
                            a.error(e);
                        }
                        return ((e.visibility = c), o.F.ERROR);
                    }),
                    getKey: (t) => ''.concat(t, '_').concat(e.id),
                }));
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => E });
            var r = i(88800),
                a = i(65724),
                l = i(84961),
                s = i(53548),
                n = i(92716),
                o = i(17392),
                c = i(29993),
                u = i(90688),
                d = i(19934),
                g = i(7555),
                _ = i(29504),
                m = i(96527),
                p = i(78940),
                h = i(72288),
                v = i(80932),
                y = i.n(v);
            let E = (0, l.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: l } = (0, h.g)(),
                    v = (0, p.Z)(t.url),
                    S = (0, m.N)(),
                    f = (0, s.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(E, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    C = (0, c.c)((e) => {
                        (l.modal.isOpened && l.modal.close(), S({ to: n.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(d.Dr, {
                            className: (0, a.$)(y().root, i),
                            onClick: C,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(g.t, {
                                    radius: 'round',
                                    className: y().cover,
                                    children: (0, r.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: y().image }),
                                }),
                                (0, r.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        f,
                    ],
                });
            });
        },
        41911: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => Z });
            var r = i(88800),
                a = i(65724),
                l = i(84961),
                s = i(53548),
                n = i(2058),
                o = i(92716),
                c = i(17392),
                u = i(18593),
                d = i(29993),
                g = i(79070),
                _ = i(29832),
                m = i(52300),
                p = i(7555),
                h = i(29504),
                v = i(13946),
                y = i(85902),
                E = i(24460),
                S = i(5407),
                f = i(96527),
                C = i(76675),
                x = i(25557),
                T = i(28830),
                L = i(84384),
                P = i(4795),
                A = i(78940),
                N = i(55693),
                k = i(39079),
                R = i(72288),
                b = i(86298),
                I = i(81877),
                O = i(49738),
                j = i(91292),
                w = i(56862),
                M = i(16704),
                D = i(56446),
                K = i(36207),
                F = i(47513),
                U = i(19934),
                H = i(48749),
                G = i(22505),
                B = i(9618),
                z = i(95210),
                W = i(46936),
                Y = i(97956),
                V = i(93091),
                X = i(27817),
                $ = i(15425);
            let q = (0, l.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: a, open: l, ...s } = e,
                    { shouldShowBuySubscriptionModal: u, showBuySubscriptionModal: g } = (0, B.q)(),
                    {
                        experiments: _,
                        settings: { isMobile: m },
                        trailer: p,
                        user: h,
                    } = (0, R.g)(),
                    v = (0, y.K)(i),
                    f = (0, E.A)(i),
                    C = (0, x.F)(),
                    { formatMessage: T } = (0, n.A)(),
                    L = (0, S.P)(),
                    P = _.checkExperiment(Y.z.WebEditorsFeatures, 'on'),
                    A = (0, H.A)({ entityVariant: W.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, z.N)(l);
                let N = (0, d.c)(() => {
                    if (u) return void g();
                    L() || (p.openPlaylistTrailer(i.id), C(o.DomainObjectType.Playlist, i.id));
                });
                return (0, r.jsxs)(U.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: l,
                    offsetOptions: 10,
                    isMobile: m,
                    ariaLabel: T({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...s,
                    children: [
                        P && (0, r.jsx)(G.d, { entityVariant: W.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : A }),
                        !m && (0, r.jsx)(X.L, { onClick: f, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(V.T, { onClick: v, isLiked: i.isLiked, disabled: !h.isAuthorized }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)($.N, { onClick: N, disabled: !i.isAvailable }),
                    ],
                });
            });
            var J = i(17657),
                Q = i.n(J);
            let Z = (0, l.PA)((e) => {
                let { className: t, playlist: i, children: l, contentLinesCount: U, customDescription: H, onCoverMouseDown: G } = e,
                    { ref: B, intersectionPropertyId: z } = (0, T.n)(),
                    {
                        trailer: W,
                        user: Y,
                        paywall: { modal: V },
                    } = (0, R.g)(),
                    { from: X, utmLink: $ } = (0, L.f)({ contextId: i.uuid, contextType: u.K.Playlist }),
                    { formatMessage: J } = (0, n.A)(),
                    { sendLikeSearchFeedback: Z, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, N.z)(),
                    [ei, er] = (0, s.useState)(!1),
                    [ea, el] = (0, s.useState)(!1),
                    [es, en] = (0, s.useState)(!1),
                    eo = (0, F.r)(i),
                    ec = (0, y.K)(i),
                    eu = (0, E.A)(i),
                    ed = (0, f.N)(),
                    eg = (0, C.b)(),
                    e_ = (0, A.Z)(i.url),
                    em = (0, x.F)(),
                    ep = (0, S.P)(),
                    eh = (0, d.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        (W.setUtmLink($), W.openPlaylistTrailer(i.id), em(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ev, ey] = (0, s.useState)(!1),
                    { isPlaying: eE, togglePlay: eS } = (0, k.D)({
                        playContextParams: { contextData: { type: u.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    ef = (0, d.c)(() => {
                        (ed({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eC = (0, d.c)((e) => {
                        (ef(), e_(e));
                    }),
                    ex = (0, P.N)(),
                    eT = (0, d.c)(() => {
                        if (!ep()) {
                            if (ex) return void V.open();
                            (ei || eE || (er(!0), null == et || et()), eS(), eg(!eE));
                        }
                    }),
                    eL = (0, d.c)(() => {
                        (ea || i.isLiked || (el(!0), null == Z || Z()), ec());
                    }),
                    eP = (0, d.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eA = (0, d.c)((e) => {
                        (en(e), ey(e));
                    }),
                    eN = (0, s.useMemo)(() => {
                        var e;
                        return H
                            ? (0, r.jsx)(h.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: H }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    v.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [H, i]),
                    ek = (0, g.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                O.c,
                                {
                                    className: (0, a.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: eL,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !Y.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eR = (0, s.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                K.n,
                                {
                                    children: (0, r.jsx)(
                                        D.k,
                                        { className: (0, a.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eh },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eh, i]),
                    eb = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                w.O,
                                { onClick: eu, isPinned: i.isPinned, className: (0, a.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [eu, i],
                    ),
                    eI = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: eC,
                                    onMouseDown: G,
                                    children: [
                                        (0, r.jsx)(I.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(_.hg, {
                                            isVisible: es || ev,
                                            className: Q().controls,
                                            playControl: (0, r.jsx)(
                                                M.D,
                                                {
                                                    className: (0, a.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eT,
                                                    isPlaying: eE,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: ek,
                                            menuControl: (0, r.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eA,
                                                    open: es,
                                                    onClick: eP,
                                                    className: (0, a.$)(Q().menuButton, Q().control),
                                                    icon: (0, r.jsx)(m.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eb,
                                            trailerControl: eR,
                                        }),
                                    ],
                                }),
                            }),
                        [eC, G, i, eo, es, ev, eT, eE, ek, eA, eP, eb, eR],
                    ),
                    eO = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(_.MN, {
                    ref: B,
                    'aria-label': eo,
                    className: (0, a.$)(Q().root, t),
                    title: (0, r.jsx)(h.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(j.N, { className: Q().titleLink, href: i.url, tabIndex: -1, onClick: ef, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(j.N, { className: Q().srTitleLink, href: i.url, onClick: ef, children: i.title }),
                    'data-intersection-property-id': z,
                    contentLinesCount: U,
                    view: eI,
                    description: eN,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eO &&
                            (0, r.jsx)(b.x, {
                                ariaLabel: J({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        l,
                    ],
                });
            });
        },
        42078: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(r || (r = {})));
        },
        46606: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { X: () => r }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(r || (r = {})));
        },
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => l });
            var r = i(53548),
                a = i(2058);
            let l = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let r = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(i);
                }, [t, e]);
            };
        },
        48109: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => r });
            let r = (e) => {
                var t, i;
                return 'string' == typeof (null == e ? void 0 : e.average)
                    ? null == e
                        ? void 0
                        : e.average
                    : 'object' == typeof (null == e ? void 0 : e.average) && 'string' == typeof (null == e || null == (t = e.average) ? void 0 : t.color)
                      ? null == e || null == (i = e.average)
                          ? void 0
                          : i.color
                      : '';
            };
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        50633: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => a });
            var r = i(5120);
            let a = (e) => {
                let t = (0, r.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: i } = (0, r._$)(e);
                return i || t;
            };
        },
        52440: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => c });
            var r = i(5120),
                a = i(27506),
                l = i(74773),
                s = i(66911),
                n = i(67311),
                o = i(23341);
            function c(e, t) {
                let { useAppendMode: i = !1 } = null != t ? t : {};
                return r.gK
                    .compose(
                        r.gK.model('PageLoader', {
                            items: r.gK.maybeNull(r.gK.array(r.gK.maybeNull(e))),
                            requestsCount: r.gK.optional(r.gK.number, 0),
                            initialRequestLoadingState: r.gK.optional(r.gK.enumeration(Object.values(l.G)), l.G.IDLE),
                            lastRejectedPagesList: r.gK.optional(r.gK.array(r.gK.number), []),
                            pager: r.gK.maybeNull(o.j),
                            pageStates: r.gK.maybeNull(r.gK.array(r.gK.enumeration(Object.values(l.G)))),
                        }),
                        n.p,
                    )
                    .views((e) => {
                        let t = {
                            isPageNeedToLoad: (t) => {
                                var i;
                                return null == (i = e.pageStates) || !i[t] || e.pageStates[t] === l.G.IDLE;
                            },
                            get isSomePageResolved() {
                                var r;
                                return !!((null == (r = e.pageStates) ? void 0 : r.length) && e.pageStates.some((e) => e === l.G.RESOLVE));
                            },
                            get isEmpty() {
                                var a;
                                return t.isSomePageResolved && !(null == (a = e.items) ? void 0 : a.length);
                            },
                            get isNeedToMakeInitialRequest() {
                                return e.initialRequestLoadingState === l.G.IDLE;
                            },
                            get isInitialRequestRejected() {
                                return e.initialRequestLoadingState === l.G.REJECT;
                            },
                            get hasMorePages() {
                                var s;
                                return !!i && !(null == (s = e.pager) ? void 0 : s.lastPage);
                            },
                            get rejectedPagesCount() {
                                var n;
                                if (t.isInitialRequestRejected || !(null == (n = e.pageStates) ? void 0 : n.length)) return 0;
                                return e.pageStates.filter((e) => e === l.G.REJECT).length;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setPageState: (r, a) => {
                                let s;
                                if (([l.G.IDLE, l.G.PENDING].includes(e.initialRequestLoadingState) && (e.initialRequestLoadingState = a), i)) s = r + 1;
                                else {
                                    var n, o, c, u;
                                    s = Math.ceil(
                                        (null != (c = null == (n = e.pager) ? void 0 : n.total) ? c : 0) /
                                            (null != (u = null == (o = e.pager) ? void 0 : o.perPage) ? u : 1),
                                    );
                                }
                                let d = Math.max(r + 1, s);
                                (t.ensurePageStatesInitialized(d), e.pageStates && (e.pageStates[r] = a), a === l.G.REJECT && t.addLastRejectedPageToList(r));
                            },
                            setItems: (n, o) => {
                                var c;
                                let { page: u, pager: d, responseStatus: g } = o;
                                if (((e.requestsCount = (null != (c = e.requestsCount) ? c : 0) + 1), g === a.F.ERROR || !n || !d))
                                    return void t.setPageState(u, l.G.REJECT);
                                (e.pager
                                    ? i && ((e.pager.lastPage = d.lastPage), (e.pager.perPage = d.perPage))
                                    : (e.pager = { page: d.page, perPage: d.perPage, total: d.total, lastPage: d.lastPage }),
                                    t.setPageState(u, l.G.RESOLVE),
                                    (e.pager.page = u),
                                    i
                                        ? (e.items || (e.items = (0, r.wg)([])), e.items && e.items.push(...n))
                                        : (e.items || (e.items = (0, r.wg)(Array.from({ length: e.pager.total }, () => null))),
                                          e.items && (0, s.I)({ items: e.items, mappedRawItems: n, page: u, pageSize: e.pager.perPage })));
                            },
                            resetRejectedPagesState() {
                                var t, i, r;
                                for (let a = 0; a < (null != (i = null == (t = e.pageStates) ? void 0 : t.length) ? i : 0); a++)
                                    (null == (r = e.pageStates) ? void 0 : r[a]) === l.G.REJECT && (e.pageStates[a] = l.G.IDLE);
                            },
                            addLastRejectedPageToList(t) {
                                var i, r, a;
                                for (e.lastRejectedPagesList.push(t); (null != (r = null == (i = e.lastRejectedPagesList) ? void 0 : i.length) ? r : 0) > 5;)
                                    null == (a = e.lastRejectedPagesList) || a.shift();
                            },
                            ensurePageStatesInitialized(t) {
                                if (t <= 0) return;
                                if (!e.pageStates) {
                                    let i = Array.from({ length: t }, () => l.G.IDLE);
                                    e.pageStates = (0, r.wg)(i);
                                    return;
                                }
                                let i = e.pageStates.length;
                                if (t > i) {
                                    let r = Array.from({ length: t - i }, () => l.G.IDLE);
                                    e.pageStates.push(...r);
                                }
                            },
                            reset() {
                                ((e.initialRequestLoadingState = l.G.IDLE),
                                    (e.requestsCount = 0),
                                    (e.lastRejectedPagesList = (0, r.wg)([])),
                                    e.destroyItems([e.items, e.pager, e.pageStates]));
                            },
                        };
                        return t;
                    });
            }
        },
        53647: (e, t, i) => {
            'use strict';
            i.d(t, { V8: () => l, si: () => n, fW: () => g, MJ: () => d, jU: () => m, Bx: () => _ });
            var r = i(77451);
            function a(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class l {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let s = (0, r.Jt)(e);
                        if (t) {
                            var i, l;
                            return null != (l = null == (i = a(s)) ? void 0 : i.value) ? l : null;
                        }
                        return null != s ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, i) {
                    let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let l = a ? JSON.stringify({ value: t }) : t;
                        (0, r.hZ)(e, l, i);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, r.TF)(e);
                    } catch (e) {}
                }
            }
            function s(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class n {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        i = s('localStorage');
                    if (!i) return null;
                    try {
                        var r;
                        let l = i.getItem(e) || void 0;
                        if (!t) return l;
                        let s = a(l);
                        if (!s) return null;
                        let n = null != (r = null == s ? void 0 : s.value) ? r : null;
                        if ((null == s ? void 0 : s.expires) && Date.now() > new Date(s.expires).getTime()) return (this.remove(e), null);
                        return n;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, i) {
                    if ('number' == typeof (null == i ? void 0 : i.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * i.expires), (i.expires = e));
                    }
                    let r = s('localStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t, ...i }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var o = i(9519),
                c = i(39499);
            class u extends c.t {
                constructor(e, t, { code: i = 'E_STORAGE', ...r } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: i, ...r }),
                        (0, o._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            class d {
                get(e) {
                    throw new u(this.platform, this.type);
                }
                set(e, t, i) {
                    throw new u(this.platform, this.type);
                }
                has(e) {
                    throw new u(this.platform, this.type);
                }
                remove(e) {
                    throw new u(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, o._)(this, 'platform', ''), (0, o._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class g {
                get(e) {
                    let t = s('sessionStorage');
                    if (!t) return null;
                    try {
                        var i, r, l;
                        let s = null != (r = t.getItem(e)) ? r : void 0;
                        return null != (l = null == (i = a(s)) ? void 0 : i.value) ? l : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let i = s('sessionStorage');
                    if (i)
                        try {
                            i.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let i = 'object' != typeof t ? t : t.name,
                            r = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            a = e.get(i);
                        null != a && e.set(i, a, r);
                    });
            }
            function m(e) {
                let { name: t, group: i, value: r } = e;
                return r && 0 !== Object.keys(r).length
                    ? r.title
                        ? { [t]: { group: i, value: { ...r, title: i } } }
                        : { [t]: { group: i, value: { title: i, value: r } } }
                    : { [t]: { group: i, value: { title: i } } };
            }
        },
        53892: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => r });
            let r = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        54320: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => u });
            var r = i(88800),
                a = i(53548),
                l = i(29993),
                s = i(9492),
                n = i(29595),
                o = i(74965),
                c = i(74773);
            let u = (e, t) => {
                let { notify: i, dismiss: u } = (0, o.l)(),
                    d = (0, a.useRef)(void 0),
                    g = (0, l.c)(() => {
                        var i;
                        (u({ notificationId: d.current }), (d.current = 0));
                        let r = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, a.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !d.current && (d.current = i((0, r.jsx)(s.L, { reloadBlocks: g }), { containerId: n.u.ERROR, autoClose: !1 }));
                }, [u, g, i, e.rejectedPagesCount]);
            };
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var r = i(88800),
                a = i(53548),
                l = i(2058),
                s = i(17392),
                n = i(96817),
                o = i(52300),
                c = i(39318);
            let u = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: u,
                            iconSize: d,
                            disabled: g,
                            onClick: _,
                            iconClassName: m,
                            className: p,
                            forwardRef: h,
                            style: v,
                            children: y,
                        } = e,
                        { formatMessage: E } = (0, l.A)(),
                        S = E({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(n.$, {
                        className: p,
                        color: 'secondary',
                        radius: u,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': S,
                        onClick: _,
                        ref: h,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: d, className: m }),
                        disabled: g,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: y,
                    });
                },
                d = (0, a.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
        },
        57285: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => r });
            let r = (e) => ({ available: !!(null == e ? void 0 : e.available) });
        },
        57448: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => l });
            var r = i(4086),
                a = i(41928);
            let l = () => {
                let e = (0, a.N)(),
                    t = e.get(r.$I),
                    i = e.get(r.EN),
                    l = e.get(r.N1),
                    s = e.get(r._1),
                    n = e.get(r.V3),
                    o = e.get(r.Lb),
                    c = e.get(r.wK),
                    u = e.get(r.tz),
                    d = e.get(r.$8),
                    g = e.get(r.Oo),
                    _ = e.get(r.X4),
                    m = e.get(r.O9),
                    p = e.get(r.E),
                    h = e.get(r.wH),
                    v = e.get(r.ok),
                    y = e.get(r.X8),
                    E = e.get(r.yq),
                    S = e.get(r.NN),
                    f = e.get(r.qN),
                    C = e.get(r.ro),
                    x = e.get(r.nM),
                    T = e.get(r.Ut),
                    L = e.get(r.K1),
                    P = e.get(r.eu),
                    A = e.get(r.SD),
                    N = e.get(r.aE),
                    k = e.get(r.ki),
                    R = e.get(r.c9),
                    b = e.get(r.en),
                    I = e.get(r.jQ),
                    O = e.get(r.cZ),
                    j = e.get(r.Zl),
                    w = e.get(r.CN),
                    M = e.get(r.P1),
                    D = e.get(r.zj),
                    K = e.get(r.re),
                    F = e.get(r.JM),
                    U = e.get(r.Lk),
                    H = e.get(r.$$),
                    G = e.get(r.sv),
                    B = e.get(r.gd),
                    z = e.get(r.Ez),
                    W = e.get(r.u2),
                    Y = e.get(r.TD),
                    V = e.get(r.dh),
                    X = e.get(r.LC),
                    $ = e.get(r.PL),
                    q = e.get(r.DT);
                return {
                    accountResource: t,
                    afterTrackResource: i,
                    disclaimersResource: l,
                    usersResource: s,
                    landingResource: n,
                    landing3Resource: o,
                    landingBlocksResource: c,
                    albumResource: u,
                    libraryResource: d,
                    tracksResource: g,
                    topResource: _,
                    artistsResource: m,
                    slidesResource: p,
                    redAlertResource: h,
                    rotorResource: v,
                    waveResource: y,
                    searchResource: E,
                    searchPlaylistResource: S,
                    playlistResource: f,
                    playlistsResource: C,
                    pinResource: x,
                    metatagsResource: T,
                    tagResource: L,
                    feedResource: P,
                    wizard3Resource: A,
                    pinsResource: N,
                    musicHistoryResource: k,
                    dynamicPagesResource: R,
                    chartResource: b,
                    clipsResource: I,
                    lyricViewsResource: O,
                    nonMusicResource: j,
                    donationResource: w,
                    loaderResource: M,
                    lumenResource: D,
                    prefixlessResource: K,
                    streamsResource: F,
                    filtersResource: U,
                    ugcResource: H,
                    collectionResource: G,
                    adsResource: B,
                    personalResource: z,
                    familyResource: W,
                    childrenLandingResource: Y,
                    promoResource: V,
                    telemetryResource: X,
                    labelsResource: $,
                    concertsResource: q,
                    wordsResource: e.get(r.dA),
                    wheelResource: e.get(r.$Y),
                };
            };
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => s });
            var r = i(88800);
            i(30282);
            var a = i(11006),
                l = i.n(a);
            let s = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: l().empty });
            };
        },
        60385: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { L: () => r }),
                (function (e) {
                    ((e.PUBLIC = 'public'), (e.PRIVATE = 'private'));
                })(r || (r = {})));
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var r = i(97956);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: a, userRegion: l } = e;
                return 'ru' === l && t(r.z.WebNextFooterDisclaimer, 'on') ? i() : a();
            };
        },
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => n });
            var r = i(4086),
                a = i(41928),
                l = i(44084);
            let s = new WeakMap(),
                n = () =>
                    ((e) => {
                        if (e instanceof l.r) return e;
                        let t = s.get(e);
                        if (t) return t;
                        let i = {
                            log: (t, i) => e.info(t, i),
                            trace: (t, i) => e.trace(t, i),
                            debug: (t, i) => e.debug(t, i),
                            info: (t, i) => e.info(t, i),
                            warn: (t, i) => e.warn(t, i),
                            error: (t, i) => e.error(t, i),
                            fatal: (t, i) => e.fatal(t, i),
                            child: (t) => e.child(t),
                        };
                        return (s.set(e, i), i);
                    })((0, a.N)().get(r.Zf));
        },
        66911: (e, t, i) => {
            'use strict';
            function r(e) {
                let { items: t, mappedRawItems: i, page: r, pageSize: a } = e,
                    l = r * a,
                    s = 0;
                for (let e = l; e < l + a; e++) (i[s] && (t[e] = i[s]), s++);
            }
            i.d(t, { I: () => r });
        },
        67311: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => a });
            var r = i(5120);
            let a = r.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    (e.forEach((e) => {
                        e && (0, r.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, r.zr)(e);
                            });
                        }));
                },
            }));
        },
        67318: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => r });
            var r = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e);
            })({});
        },
        70003: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => l });
            var r = i(5120),
                a = i(53548);
            let l = (e) => {
                let { createStore: t, getPendingPatchBatches: i, patchesUpdatedEventName: l } = e,
                    s = (0, a.useRef)([]),
                    [n] = (0, a.useState)(() => {
                        let e = t();
                        for (let t of i()) (0, r.X6)(e, t);
                        return e;
                    });
                return (
                    (0, a.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of i()) (0, r.X6)(n, e);
                        };
                        return (e(), window.addEventListener(l, e), () => window.removeEventListener(l, e));
                    }, [i, l, n]),
                    { store: n, patchesRef: s }
                );
            };
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        77451: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => l, TF: () => n, hZ: () => s });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, r = arguments.length; i < r; i++)
                            for (var a in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e;
                    }).apply(this, arguments);
            };
            function a(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function l(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], r = 0; r < i.length; r++) {
                        var a = i[r].split('='),
                            l = a.slice(1).join('=');
                        '"' === l[0] && (l = l.slice(1, -1));
                        try {
                            t[decodeURIComponent(a[0])] = l.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function s(e, t, i) {
                var l;
                document.cookie =
                    ((l = r({ path: '/' }, i)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                a('Expires', e.expires ? e.expires.toUTCString() : '') +
                                a('Domain', e.domain) +
                                a('Path', e.path) +
                                a('Secure', e.secure) +
                                a('SameSite', e.sameSite)
                            );
                        })(l));
            }
            function n(e, t) {
                s(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => h });
            var r = i(88800),
                a = i(65724),
                l = i(61013),
                s = i(53548);
            let n = (e) => {
                    let { style: t, forwardRef: i, context: a, ...l } = e,
                        s = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        n = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': s, style: { ...t }, ref: i, ...l });
                },
                o = (0, s.forwardRef)((e, t) => (0, r.jsx)(n, { forwardRef: t, ...e }));
            var c = i(16434),
                u = i.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: i, withFooter: l, withHeader: s, withForceScroll: n, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(u().scroller, { [u().scroller_withFooter]: l, [u().scroller_withHeader]: s, [u().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                g = (0, s.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
            var _ = i(55482),
                m = i(75151);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: l = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [g, p] = (0, s.useState)(null),
                        h = (0, s.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && p(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) i(e);
                                    }
                                }, l),
                            [l, a, t, i, o],
                        );
                    (0, s.useEffect)(() => {
                        o.length > 0 && g && h(g);
                    }, o);
                    let v = (0, s.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, r.jsx)(m.sN, { ref: u, rangeChanged: h, totalCount: n, endReached: v, ...d });
                },
                h = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: _,
                            listClassName: m,
                            overscan: h = 700,
                            pageSize: v = 20,
                            totalCount: y,
                            totalRequests: E,
                            debounceDurationInMs: S,
                            initialItemCount: f,
                            minInitialItemCount: C = 20,
                            handleRef: x,
                            alwaysShowScrollbar: T = !1,
                            testId: L,
                            isMobileLayout: P = !1,
                            shouldTriggerRangeChangedOn: A,
                            ...N
                        } = e,
                        [k, R] = (0, s.useState)(!1),
                        b = (0, s.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    R(e);
                                }, 100),
                            [],
                        ),
                        I = (0, s.useMemo)(() => {
                            var e, t;
                            return P
                                ? {
                                      Scroller: g,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: g,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, E, P]),
                        O = f ? Math.min(f, C) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(u().root, { [u().root_scrolling]: k || T, [u().root_notScrolling]: !k && !T }, t),
                        'data-test-id': L,
                        children: [
                            P && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(p, {
                                overscan: h,
                                components: I,
                                listClassName: m,
                                itemClassName: d,
                                isScrolling: b,
                                itemContent: _,
                                scrollerRef: x,
                                totalCount: y,
                                pageSize: v,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: S,
                                initialItemCount: O,
                                shouldTriggerRangeChangedOn: A,
                                ...N,
                            }),
                            P && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        84218: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        85902: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var r = i(88800),
                a = i(96706),
                l = i(53548),
                s = i(2058),
                n = i(79390),
                o = i(29595),
                c = i(74965),
                u = i(72288),
                d = i(66943),
                g = i(30832);
            let _ = (e) => {
                let { user: t } = (0, u.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, m] = (0, l.useState)(!1),
                    { formatMessage: p } = (0, s.A)();
                return (0, l.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let l = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                    m(!0);
                    let s = await e.toggleLike();
                    (m(!1),
                        s === n.f.OK
                            ? i((0, r.jsx)(g.T, { playlist: l }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(d.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, _, e, p, i]);
            };
        },
        86298: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => g });
            var r = i(88800),
                a = i(65724),
                l = i(2058),
                s = i(17392),
                n = i(96817),
                o = i(52300),
                c = i(29504),
                u = i(84218),
                d = i.n(u);
            let g = (e) => {
                let { className: t, isLiked: i, likesCount: u, handleLikeClick: g, ariaLabel: _ } = e,
                    { formatNumber: m } = (0, l.A)();
                return (0, r.jsx)(n.$, {
                    className: (0, a.$)(d().root, t),
                    onClick: g,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, r.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: d().icon }),
                    'aria-label': _,
                    'data-test-id': s.S7.CARD_LIKES,
                    children: (0, r.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: m(u) }),
                });
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => L });
            var r = i(88800),
                a = i(65724),
                l = i(84961),
                s = i(2058),
                n = i(30282),
                o = i(94144),
                c = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let u = (e, t, i) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: i, tld: r, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, r, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, r, i) },
                    };
                };
            var g = i(62293),
                _ = i(99839);
            let m = (e) => e(new Date(), (0, _.m)());
            var p = i(51611),
                h = i(72288),
                v = i(11006),
                y = i.n(v),
                E = i(17392),
                S = i(29504),
                f = i(91292);
            let C = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(y().copyrights, t),
                        'data-test-id': E.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(S.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, r.jsx)(f.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, a.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': E.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(S.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(f.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': E.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                x = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, r.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: y().list,
                                'data-test-id': E.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: a } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, r.jsx)(f.N, { target: '_blank', href: a, className: y().link, 'data-test-id': E.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(S.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': E.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(y().root, y().important, t),
                        'data-test-id': E.S7.FOOTER,
                        children: [(0, r.jsx)(x, { links: i.links, disclaimer: i.disclaimer }), (0, r.jsx)(C, { data: i.copyrights })],
                    });
                };
            (0, l.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, h.g)(),
                    { formatDate: a, formatMessage: l } = (0, s.A)(),
                    { language: n } = (0, p.h)(),
                    o = d({ formatMessage: l, language: n, tld: i.tld, year: m(a) });
                return (0, r.jsx)(C, { className: t, data: o });
            });
            let L = (0, l.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: l, location: _, user: v } = (0, h.g)(),
                    { formatDate: E, formatMessage: S } = (0, s.A)(),
                    { isEnabled: f } = null != (t = (0, o.P)()) ? t : {},
                    { language: C } = (0, p.h)(),
                    x = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: r, language: a, tld: l, userRegion: s, year: n } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: r, language: a, userRegion: l } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, r, a) },
                                    n = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, r, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, r, a) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, r, a) },
                                    g = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, r, a) },
                                    _ = [s, o, d];
                                return (i && 'ru' === l && _.push(n), _.push(g), _);
                            })({ formatMessage: i, isWebApplication: r, language: a, tld: l, userRegion: s }),
                            disclaimer: (0, g.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: d({ formatMessage: i, language: a, tld: l, year: n }),
                        };
                    })({
                        checkExperiment: (e, t) => l.checkExperiment(e, t),
                        formatMessage: S,
                        isWebApplication: n.$3,
                        tld: _.tld,
                        language: C,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: m(E),
                    });
                return (0, r.jsx)(T, { className: (0, a.$)({ [y().root_withOffsetForDeeplink]: f }, i), data: x });
            });
        },
        89108: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => a, s: () => r });
            let r = 'yMusicStatePatchesUpdated',
                a = 'yMusicPageStatePatchesUpdated';
        },
        89916: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => l.G, X1: () => r.X, m5: () => a.m });
            var r = i(46606),
                a = i(91136),
                l = i(19840);
            i(17017);
        },
        91136: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: a = {}, ...l } = t,
                        s = e || 'Internal error';
                    (super(s, l), (this.message = s), (this.code = i), (this.data = a), (this.stack = Error(s).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
            class a extends r {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a, P: () => l });
            var r = i(53548);
            let a = (0, r.createContext)(null),
                l = () => (0, r.useContext)(a);
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
        97335: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => a });
            var r = i(5120);
            let a = r.gK
                .model('LikesCount', { likesCount: r.gK.maybe(r.gK.number), pendingLikesCount: r.gK.optional(r.gK.number, 0) })
                .views((e) => ({
                    get actualLikesCount() {
                        if ('number' == typeof e.likesCount) {
                            var t;
                            return e.likesCount + (null != (t = e.pendingLikesCount) ? t : 0);
                        }
                        return 0;
                    },
                }))
                .actions((e) => ({
                    likePending() {
                        e.pendingLikesCount += 1;
                    },
                    unlikePending() {
                        e.pendingLikesCount -= 1;
                    },
                }));
        },
        99007: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => r });
            var r = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        99211: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => s });
            var r = i(5120),
                a = i(48109),
                l = i(12906);
            let s = (e) => {
                var t, i, s, n, o;
                e = e || {};
                let c = (0, l.m)(e.trailer);
                return (0, r.wg)({
                    isAvailable: null == (n = e.available) || n,
                    uid: e.uid,
                    uuid: null != (o = e.playlistUuid) ? o : '',
                    kind: e.kind,
                    title: e.title,
                    coverUri: (null == e || null == (t = e.cover) ? void 0 : t.uri) || (null == e || null == (s = e.cover) || null == (i = s.itemsUri) ? void 0 : i[0]),
                    tracksCount: e.trackCount,
                    likesCount: e.likesCount,
                    averageColor: (0, a.Q)(null == e ? void 0 : e.derivedColors),
                    revision: e.revision,
                    generatedPlaylistType: e.generatedPlaylistType,
                    personalColor: e.personalColor,
                    visibility: e.visibility,
                    trailer: c,
                });
            };
        },
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                8752, 7435, 5108, 127, 1931, 1191, 7617, 3637, 615, 6706, 4771, 1311, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 5151, 4732, 1195, 1598,
                1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 4613, 763, 2670, 7358,
            ],
            () => e((e.s = 34473)),
        ),
            (_N_E = e.O()));
    },
]);
