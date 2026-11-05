(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4905],
    {
        554: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => l });
            let l = (e) => {
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
            i.d(t, { Z: () => r });
            var l = i(67174);
            let r = {
                main: (0, l.u)('/'),
                chart: (0, l.u)('/chart'),
                chartPodcasts: (0, l.u)('/chart/podcasts'),
                collection: (0, l.u)('/collection'),
                collectionAlbums: (0, l.u)('/collection/albums'),
                collectionArtists: (0, l.u)('/collection/artists'),
                collectionClips: (0, l.u)('/collection/clips'),
                collectionDislikes: (0, l.u)('/collection/dislikes'),
                collectionKids: (0, l.u)('/collection/kids'),
                collectionKidsAlbums: (0, l.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, l.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, l.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, l.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, l.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, l.u)('/collection/multivibes'),
                collectionPlaylists: (0, l.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, l.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, l.u)('/collection/playlists/liked'),
                collectionShelf: (0, l.u)('/collection/shelf'),
                collectionShelfLiked: (0, l.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, l.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, l.u)('/collection/shelf/recently-played'),
                concerts: (0, l.u)('/concerts'),
                kids: (0, l.u)('/kids'),
                mixes: (0, l.u)('/mixes'),
                musicHistory: (0, l.u)('/music-history'),
                muzmarket: (0, l.u)('/muzmarket'),
                mymusic: (0, l.u)('/mymusic'),
                mymusicDownloadsTracks: (0, l.u)('/mymusic/downloads/tracks'),
                multivibe: (0, l.u)('/multivibe'),
                nonMusic: (0, l.u)('/non-music'),
                pay: (0, l.u)('/pay'),
                userSlides: (0, l.u)('/slides/user'),
                search: (0, l.u)('/search'),
                searchHistory: (0, l.u)('/search/history'),
                settings: (0, l.u)('/settings'),
                video: (0, l.u)('/video'),
            };
        },
        6322: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var l = i(88800),
                r = i(15077),
                a = i(33719);
            let s = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, l.jsx)(a.k, {
                    closeToast: i,
                    entityVariant: r.c.PLAYLIST,
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
            i.d(t, { L: () => p });
            var l = i(88800),
                r = i(65724),
                a = i(53548),
                s = i(2058),
                n = i(88969),
                o = i(96817),
                c = i(52300),
                u = i(29504),
                d = i(59304),
                g = i(4044),
                m = i.n(g);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    g = (0, a.useRef)(null),
                    { formatMessage: p } = (0, s.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = g.current) || e.focus();
                }, []);
                let _ = (0, a.useMemo)(
                    () =>
                        (0, l.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, l.jsx)(u.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, l.jsx)(n.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, l.jsx)(o.$, {
                                    ref: g,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, l.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, l.jsx)(d.$, { className: (0, r.$)(m().root, m().important), message: _, closeToast: i });
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
            i.d(t, { m: () => a });
            var l = i(5120),
                r = i(57285);
            let a = (e) => {
                let t = (0, r.n)(e);
                return (0, l.wg)(t);
            };
        },
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => H });
            var l = i(88800),
                r = i(65724),
                a = i(84961),
                s = i(53548),
                n = i(79070),
                o = i(17610),
                c = i(24548),
                u = i(29993),
                d = i(72288),
                g = i(35994);
            let m = (e, t) => {
                let { withLink: i, separator: l } = t,
                    r = i && !e.various ? (0, g.R)(e.id) : null;
                return { artist: e, name: e.name, separator: l, link: r };
            };
            var p = i(21010),
                _ = i.n(p),
                h = i(17392),
                v = i(29504),
                y = i(91292),
                S = i(2058),
                E = i(87999),
                f = i(80643),
                x = i(78940),
                L = i(55693),
                C = i(58217);
            let P = (0, a.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: r, captionSize: a = 'm', allArtistsTitle: s, withCustomTooltip: n, hoverSettings: c } = e,
                        {
                            name: g,
                            link: m,
                            title: p,
                            ariaLabel: _,
                            tooltipText: P,
                            isTooltipEnabled: T,
                            handleNavigate: k,
                        } = ((e) => {
                            var t, i;
                            let { item: l, allArtistsTitle: r, withCustomTooltip: a } = e,
                                { formatMessage: s } = (0, S.A)(),
                                n = ((e, t) => {
                                    let { item: i, allArtistsTitle: l, withCustomTooltip: r } = e,
                                        a = l || i.name;
                                    return {
                                        ...i,
                                        title: r ? void 0 : a,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: a,
                                        isTooltipEnabled: !l && r,
                                    };
                                })({ item: l, allArtistsTitle: r, withCustomTooltip: a }, s),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, d.g)(),
                                g = (0, x.Z)(null != (i = null == (t = n.link) ? void 0 : t.href) ? i : n.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, L.z)(),
                                p = (0, f.S)(),
                                _ = (0, u.c)((e) => {
                                    (c && o.isOpened && o.close(), g(e));
                                }),
                                h = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: l, fullscreenPlayer: r, fullscreenVideoPlayer: a } = (0, d.g)(),
                                        { modal: s } = l;
                                    return (0, C.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), s.isOpened && (l.reset(), s.close()), r.modal.isOpened && r.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: n.artist, callback: _ }),
                                v = (0, u.c)((e) => {
                                    (p({ to: E.AppScreen.ArtistScreen }), null == m || m(), h(e));
                                });
                            return { ...n, handleNavigate: v };
                        })({ item: t, allArtistsTitle: s, withCustomTooltip: n });
                    return m
                        ? (0, l.jsx)(y.N, {
                              ...m,
                              'aria-label': _,
                              className: i,
                              onClick: k,
                              title: p,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, l.jsx)(o.m_, {
                                  enabled: T,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: P,
                                  hoverSettings: c,
                                  children: (0, l.jsx)(v.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: r, children: g }),
                              }),
                          })
                        : (0, l.jsx)(o.m_, {
                              enabled: T,
                              offsetOptions: 4,
                              placement: 'top',
                              text: P,
                              hoverSettings: c,
                              children: (0, l.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: r,
                                  title: p,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: g,
                              }),
                          });
                }),
                T = (e) => {
                    let { group: t, linkClassName: i, captionClassName: r, captionSize: a, allArtistsTitle: n, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, l.jsx)(P, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: r,
                                captionSize: a,
                                allArtistsTitle: n,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, l.jsxs)(
                                    s.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, l.jsx)(P, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: r,
                                                captionSize: a,
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
            var k = i(88969),
                A = i(65453);
            let R = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: a } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        ' ',
                        (0, l.jsx)(A.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(_().spoiler, i),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, l.jsx)(k.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var b = i(61013),
                N = i(87819),
                I = i(40634),
                j = i(48468),
                O = i.n(j);
            let w = (0, a.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, l.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, N.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, l.jsx)('div', { ref: r, children: t }),
                            (0, l.jsx)(o.ZI, { className: O().tooltipContent, children: i.map((e) => (0, l.jsx)(I.V, { artist: e, className: O().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, s.forwardRef)((e, t) => (0, l.jsx)(w, { forwardRef: t, ...e }));
            var K = i(19934),
                D = i(70396),
                F = i.n(D);
            let G = (0, a.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: a } = (0, S.A)();
                    return (0, l.jsx)(K.W1, {
                        isMobile: !0,
                        className: (0, r.$)(F().root, F().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, l.jsx)(I.V, { artist: e }, e.id)),
                    });
                }),
                U = (0, a.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [a, o] = (0, s.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, d.g)(),
                        g = (0, u.c)(() => {
                            let e = r.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, n.L)(() =>
                            (0, b.A)(() => {
                                g();
                            }, 100),
                        );
                    if (
                        ((0, s.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                g(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, g],
                        ),
                        (0, s.useEffect)(() => {
                            g();
                        }, [t, g]),
                        0 !== t.length)
                    )
                        return (a || c) && (!c || 1 !== t.length) ? (c ? (0, l.jsx)(G, { artists: t, label: i }) : (0, l.jsx)(M, { artists: t, label: i })) : i;
                }),
                H = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: a,
                            linkClassName: g,
                            captionClassName: p,
                            captionSize: h,
                            variant: v = 'breakAll',
                            spoilerComponent: y,
                            ...S
                        } = e,
                        E = ((e) => {
                            var t, i, l;
                            let { separator: r, visibleArtistsCount: a, withLink: n, withComposer: o, artistIdWithoutLink: c, withContextMenu: g } = e,
                                p = null != (t = e.artists) ? t : [],
                                _ = null == (i = e.withAllArtistsTitle) || i,
                                h = null == (l = e.withCustomTooltip) || l,
                                v = (0, s.useRef)(null),
                                [y, S] = (0, s.useState)(!1),
                                {
                                    settings: { isMobile: E },
                                } = (0, d.g)(),
                                f = ((!E || 1 === p.length) && g) || !g,
                                x = ((e, t) => {
                                    var i, l, r;
                                    let a = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        s = null == (l = null == t ? void 0 : t.withLink) || l,
                                        n = null != (r = null == t ? void 0 : t.separator) ? r : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(n),
                                        { visibleArtists: c, hiddenArtistsCount: u } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: l } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => l || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: l, separator: r, isFirst: a } = t;
                                                return {
                                                    primary: m(e, { withLink: l, separator: a ? void 0 : r }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = r ? e.separator : '';
                                                        return m(e, { withLink: l, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: s && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: n, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: u,
                                    };
                                })(p, { separator: r, visibleArtistsCount: y ? void 0 : a, withComposer: o, withLink: !!f && n, artistIdWithoutLink: c }),
                                L = _ ? x.allArtistsTitle : '',
                                C = (0, u.c)((e) => {
                                    (S(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: x.groups,
                                hiddenArtistsCount: x.hiddenArtistsCount,
                                allArtistsTitle: L,
                                withCustomTooltip: h,
                                withContextMenu: g,
                                labelRef: v,
                                handleOnSpoilerClick: C,
                                isTooltipEnabled: !!L && h && !g && !E,
                                title: !L || h || g ? void 0 : L,
                            };
                        })(S),
                        f = (0, n.L)(() =>
                            E.hiddenArtistsCount <= 0
                                ? null
                                : (0, s.isValidElement)(y)
                                  ? y
                                  : (0, l.jsx)(R, { spoilerClassName: a, spoilerArtistsCount: E.hiddenArtistsCount, handleOnSpoilerClick: E.handleOnSpoilerClick }),
                        ),
                        x = (0, l.jsx)(o.m_, {
                            referenceRef: E.labelRef,
                            enabled: E.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: E.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, l.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, r.$)(_().root, _()['root_variant_'.concat(v)], { [_().root_clamp]: i && i > 0, [_().ellipsis]: !i }, t),
                                title: E.title,
                                children: [
                                    E.groups.map((e) =>
                                        (0, l.jsx)(
                                            T,
                                            {
                                                group: e,
                                                linkClassName: g,
                                                captionClassName: p,
                                                captionSize: h,
                                                allArtistsTitle: E.allArtistsTitle,
                                                withCustomTooltip: E.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    f,
                                ],
                            }),
                        });
                    return E.withContextMenu ? (0, l.jsx)(U, { labelRef: E.labelRef, artists: E.artists, label: x }) : x;
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
            var l = i(53647),
                r = i(4086),
                a = i(41928),
                s = i(65523),
                n = i(57448);
            let o = () => {
                let e = (0, a.N)(),
                    t = e.get(r.oo),
                    i = e.get(r.QG),
                    o = e.get(r.uM),
                    c = e.get(r.ff),
                    u = e.get(r.V4),
                    d = e.get(r.P0),
                    g = (0, n.f)(),
                    m = (0, s.U)(),
                    p = (0, a.N)().get(r.TK),
                    _ = e.get(r.ni),
                    h = e.get(r.RD),
                    v = new l.si(),
                    y = new l.fW();
                return {
                    ...g,
                    acqOffers: o,
                    disclaimerDictionary: c,
                    logger: m,
                    modelActionsLogger: p,
                    localStorage: v,
                    sessionStorage: y,
                    containerStorage: t,
                    authorization: i,
                    config: u,
                    clientSafeConfig: d,
                    landingSdk: _,
                    tagSandbox: h,
                };
            };
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
            i.d(t, { f: () => r });
            var l = i(42078);
            let r = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(l._.PLAYLIST_ITEM).concat(t, '_').concat(i);
            };
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
            i.d(t, { j: () => r });
            var l = i(5120);
            let r = l.gK.model('Pager', { page: l.gK.number, perPage: l.gK.number, total: l.gK.number, lastPage: l.gK.maybe(l.gK.boolean) });
        },
        23744: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => n });
            var l = i(5120),
                r = i(50633);
            let a = ['Safari', 'MobileSafari'],
                s = ['iOS', 'MacOS'],
                n = l.gK.model('DomainTrailerEntity', { available: l.gK.boolean }).views((e) => ({
                    get isAvailable() {
                        if (!(0, l._n)(e)) return !1;
                        let { settings: t } = (0, r.M)(e);
                        if (
                            !(null == t ? void 0 : t.browserInfo) ||
                            ((e) => {
                                let t = e.version ? Number(e.version.split('.')[0]) : void 0;
                                return !!(e.name && a.includes(e.name) && e.OSFamily && s.includes(e.OSFamily) && t && t < 18);
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
            var l = i(88800),
                r = i(96706),
                a = i(53548),
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
                    [m, p] = (0, a.useState)(!1);
                return (0, a.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, l.jsx)(u.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (m) return;
                    let a = { ...(0, r.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let s = await e.togglePin();
                    (p(!1),
                        s
                            ? i((0, l.jsx)(d.l, { playlist: a }), { containerId: n.u.INFO })
                            : i((0, l.jsx)(u.h, { error: g({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [t.isAuthorized, m, e, i, g]);
            };
        },
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => l });
            let l = { delay: { open: 1e3, close: 0 } };
        },
        30832: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var l = i(88800),
                r = i(15077),
                a = i(42729);
            let s = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, l.jsx)(a.O, {
                    entityVariant: r.c.PLAYLIST,
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
            i.d(t, { SomethingWentWrong: () => j });
            var l = i(88800),
                r = i(65724),
                a = i(84961),
                s = i(53548),
                n = i(2058),
                o = i(88969);
            i(30282);
            var c = i(96817),
                u = i(52300),
                d = i(29504),
                g = i(87999),
                m = i(47149),
                p = i(84423),
                _ = i(89846),
                h = i(64543),
                v = i(63582);
            let y = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, _.g)(),
                        { screen: l } = (0, h.j)();
                    return {
                        sendRefreshEvent: (0, s.useCallback)(() => {
                            if (!t || !i || !(null == l ? void 0 : l.pageId)) return;
                            let e = {
                                actionType: g.ActionType.Refresh,
                                userInteractionType: g.UserInteractionType.Tap,
                                entityType: g.EntityTypes.Error,
                                entityId: g.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: l.pageId,
                                pageStyle: g.PageStyles.Fullscreen,
                                pagePlacement: g.PagePlacements.Fullscreen,
                                mainObjectType: g.DomainObjectType.NonApplicable,
                                mainObjectId: g.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, i, null == l ? void 0 : l.pageId]),
                    };
                }),
                S = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: l } = (0, _.g)(),
                        { screen: r } = (0, h.j)();
                    (0, s.useEffect)(() => {
                        if (!i || !l || !(null == r ? void 0 : r.pageId)) return;
                        let t = {
                            entityType: g.EntityTypes.Error,
                            entityId: g.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: l,
                            pageId: r.pageId,
                            pageStyle: g.PageStyles.Fullscreen,
                            pagePlacement: g.PagePlacements.Fullscreen,
                            mainObjectType: g.DomainObjectType.NonApplicable,
                            mainObjectId: g.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(i, t);
                    }, [i, e, l, null == r ? void 0 : r.pageId]);
                });
            var E = i(44230),
                f = i(4370),
                x = i(72288),
                L = i(97956),
                C = i(56248),
                P = i(90688),
                T = i(78940);
            let k = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var A = i(96856),
                R = i.n(A);
            let b = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: a } = e,
                    { slam: s } = (0, x.g)(),
                    { contentRef: n } = (0, E.g)(),
                    u = (0, T.Z)(f.Z.mymusicDownloadsTracks.href);
                return (0, l.jsxs)('div', {
                    className: (0, r.$)(R().root, t),
                    children: [
                        i &&
                            (0, l.jsx)(C.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(R().navigation, { [R().navigation_desktop]: !n }),
                                withForwardControl: !1,
                                onBackwardClick: a,
                            }),
                        (0, l.jsxs)('div', {
                            className: (0, r.$)(R().content, { [R().content_shrink]: !i }),
                            children: [
                                (0, l.jsx)(P._V, { className: R().image, src: k.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, l.jsxs)('div', {
                                    className: R().message,
                                    children: [
                                        (0, l.jsx)(d.DZ, {
                                            className: R().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, l.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, l.jsx)(d.HL, {
                                            className: R().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, l.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                s.hasDownloadedTracks &&
                                    (0, l.jsx)(c.$, {
                                        className: R().button,
                                        onClick: u,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, l.jsx)(d.HL, {
                                            className: R().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, l.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var N = i(9184),
                I = i.n(N);
            let j = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: a } = e,
                    { formatMessage: g } = (0, n.A)(),
                    m = (0, s.useContext)(x.P),
                    p = null == m ? void 0 : m.experiments.checkExperiment(L.z.WebNextUnstableMusicScreen, 'on'),
                    _ = g(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                S(_);
                let { sendRefreshEvent: h } = y(),
                    v = (0, s.useCallback)(() => {
                        (h(), (window.location.href = f.Z.main.href));
                    }, [h]),
                    { contentRef: P } = (0, E.g)();
                return p
                    ? (0, l.jsx)(b, { className: t, withBackwardControl: i, onBack: a })
                    : (0, l.jsxs)('div', {
                          className: (0, r.$)(I().root, t),
                          children: [
                              i &&
                                  (0, l.jsx)(C.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(I().navigation, { [I().navigation_desktop]: !P }),
                                      withForwardControl: !1,
                                      onBackwardClick: a,
                                  }),
                              (0, l.jsxs)('div', {
                                  className: (0, r.$)(I().content, { [I().content_shrink]: !i }),
                                  children: [
                                      (0, l.jsx)(u.I, { className: I().icon, variant: 'attention', size: 'xxl' }),
                                      (0, l.jsx)(d.DZ, { className: (0, r.$)(I().title, I().important), variant: 'h3', size: 'xs', children: _ }),
                                      (0, l.jsxs)(d.HL, {
                                          className: (0, r.$)(I().text, I().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, l.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, l.jsx)(c.$, {
                                          onClick: v,
                                          className: I().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, l.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, l.jsx)(o.A, { id: 'page-error.restart-app-button' })],
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
            i.d(t, { k: () => l });
            let l = 100;
        },
        34799: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => W }));
            var l = i(88800),
                r = i(53548),
                a = i(58390),
                s = i(34961),
                n = i(53892),
                o = i(5120),
                c = i(89916),
                u = i(99211),
                d = i(39339),
                g = i(27506),
                m = i(74773),
                p = i(52440);
            let _ = o.gK
                    .model('TagPage', {
                        title: o.gK.maybe(o.gK.string),
                        errorStatusCode: o.gK.maybeNull(o.gK.number),
                        tagLoadingState: o.gK.enumeration(Object.values(m.G)),
                        playlistsData: o.gK.array(o.gK.model({ uid: o.gK.number, kind: o.gK.number })),
                        pagesLoader: (0, p.I)(d.$),
                    })
                    .views((e) => {
                        let t = {
                            get isNeededToLoad() {
                                return e.tagLoadingState === m.G.IDLE;
                            },
                            get isResolved() {
                                return e.tagLoadingState === m.G.RESOLVE;
                            },
                            get isNotFound() {
                                let t = e.pagesLoader.isEmpty;
                                return (e.tagLoadingState === m.G.REJECT && (e.errorStatusCode === c.X1.NOT_FOUND || e.errorStatusCode === c.X1.BAD_REQUEST)) || t;
                            },
                            get isSomethingWrong() {
                                return e.tagLoadingState === m.G.REJECT && !t.isNotFound;
                            },
                            get isShimmerVisible() {
                                return !e.pagesLoader.pager && !e.pagesLoader.isInitialRequestRejected && e.tagLoadingState !== m.G.REJECT;
                            },
                            get totalCount() {
                                var i, l;
                                return null != (l = null == (i = e.pagesLoader.pager) ? void 0 : i.total) ? l : 0;
                            },
                            get playlists() {
                                var r;
                                return null != (r = e.pagesLoader.items) ? r : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getPlaylists: (0, o.L3)(function* (t) {
                                let { page: i = 0, pageSize: l = 20 } = t,
                                    { playlistsResource: r, modelActionsLogger: a } = (0, o._$)(e);
                                if (e.tagLoadingState === m.G.RESOLVE && e.pagesLoader.isPageNeedToLoad(i))
                                    try {
                                        e.pagesLoader.setPageState(i, m.G.PENDING);
                                        let t = i * l,
                                            a = e.playlistsData.slice(t, t + l),
                                            s = yield r.getPlaylists({ playlistIds: a.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                            n = { page: i, perPage: l, total: e.playlistsData.length },
                                            o = s.playlists.map(u.j);
                                        e.pagesLoader.setItems(o, { page: i, pager: n });
                                    } catch (t) {
                                        (a.error(t),
                                            e.pagesLoader.setItems(null, { responseStatus: g.F.ERROR, page: i }),
                                            t instanceof c.GX &&
                                                (t.statusCode === c.X1.NOT_FOUND || t.statusCode === c.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = c.X1.NOT_FOUND));
                                    }
                            }),
                            reset() {
                                (e.pagesLoader.reset(),
                                    (e.tagLoadingState = m.G.IDLE),
                                    (e.title = void 0),
                                    (e.playlistsData = (0, o.wg)([])),
                                    (e.errorStatusCode = null));
                            },
                            getTag: (0, o.L3)(function* (i) {
                                let { id: l, page: r = 0, pageSize: a = 20 } = i,
                                    { tagResource: s, modelActionsLogger: n } = (0, o._$)(e);
                                if (e.tagLoadingState !== m.G.PENDING)
                                    try {
                                        var u;
                                        e.tagLoadingState = m.G.PENDING;
                                        let i = yield s.getPlaylistIds({ id: l });
                                        ((e.title = null == (u = i.tag) ? void 0 : u.name),
                                            (e.playlistsData = (0, o.wg)(i.ids.map((e) => ({ uid: e.uid, kind: e.kind })))),
                                            e.tagLoadingState !== m.G.IDLE && (e.tagLoadingState = m.G.RESOLVE),
                                            yield t.getPlaylists({ page: r, pageSize: a }));
                                    } catch (t) {
                                        (n.error(t),
                                            t instanceof c.GX &&
                                                (t.statusCode === c.X1.NOT_FOUND || t.statusCode === c.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = c.X1.NOT_FOUND),
                                            e.tagLoadingState !== m.G.IDLE && (e.tagLoadingState = m.G.REJECT));
                                    }
                            }),
                        };
                        return t;
                    }),
                h = { tagLoadingState: m.G.IDLE, playlistsData: [], pagesLoader: {} },
                { pageStoreProvider: v } = (0, s.W)({ createStore: (e) => _.create(h, e), patchKey: n.n.TAG });
            var y = i(65724),
                S = i(84961),
                E = i(2058),
                f = i(87999),
                x = i(76903),
                L = i(79070),
                C = i(19994),
                P = i(29504),
                T = i(32596),
                k = i(69630),
                A = i(41911),
                R = i(98427),
                b = i(46422),
                N = i(44230),
                I = i(37670),
                j = i(72288),
                O = i(54320),
                w = i(86790),
                M = i(60266),
                K = i(93317),
                D = i(37770),
                F = i(79418),
                G = i(33750),
                U = i.n(G);
            let H = (0, S.PA)((e) => {
                    var t;
                    let { tagId: i } = e,
                        o = (0, s.s)(n.n.TAG),
                        {
                            settings: { isMobile: c },
                        } = (0, j.g)(),
                        { formatMessage: u } = (0, E.A)(),
                        { contentScrollRef: d, setContentScrollRef: g } = (0, N.g)(),
                        m = (0, b.W)();
                    i || (0, a.notFound)();
                    let p = (0, r.useCallback)(
                        (e) => {
                            o.getPlaylists({ page: e, pageSize: 20 });
                        },
                        [o],
                    );
                    o.isNotFound && (0, a.notFound)();
                    let _ = (0, r.useMemo)(() => ({ Footer: () => (0, l.jsx)(M.A, { children: (0, l.jsx)(w.w, { className: U().footer }) }) }), []);
                    ((0, I.J)(o.isResolved), (0, O.X)(o.pagesLoader, p));
                    let h = (0, L.L)(() =>
                        o.isShimmerVisible
                            ? (0, l.jsx)(C.W, { className: U().shimmerTitle, radius: 'l' })
                            : (0, l.jsx)(P.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: o.title }),
                    );
                    if ((o.isNeededToLoad && (0, r.use)(o.getTag({ id: i, page: 0, pageSize: 20 })), o.isSomethingWrong)) return (0, l.jsx)(T.SomethingWentWrong, {});
                    let v = o.isShimmerVisible ? 20 : o.totalCount;
                    return (0, l.jsx)(x.a, {
                        pageId: f.AppScreen.Tag,
                        pageIdForFrom: R.b.TAG,
                        children: (0, l.jsx)(k.h, {
                            scrollElement: d,
                            outerTitle: o.title,
                            children: (0, l.jsxs)('div', {
                                className: U().root,
                                children: [
                                    (0, l.jsx)(K.Y, { variant: K.V.TEXT, withForwardControl: !1, withBackwardControl: m.canBack, children: h }),
                                    (0, l.jsx)(F.$, {
                                        className: (0, y.$)(U().scrollContainer, U().important),
                                        customComponents: _,
                                        itemContentCallback: (e) => {
                                            let t = o.playlists[e],
                                                i = u({ id: 'loading-messages.entity-is-loading' }, { entityName: u({ id: 'entity-names.playlist' }) });
                                            return !t || o.isShimmerVisible
                                                ? (0, l.jsx)(D.V, { isActive: !0, 'aria-label': i })
                                                : (0, l.jsx)(A.B, { playlist: t, contentLinesCount: 3 }, t.key);
                                        },
                                        totalCount: v,
                                        initialItemCount: v,
                                        onGetDataByPage: p,
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
                z = () => {
                    let e = (0, b.W)(),
                        { formatMessage: t } = (0, E.A)(),
                        i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.playlist' }) }),
                        r = Array.from({ length: 20 }, (e, t) => {
                            let r = void 0 === e ? t : ''.concat(t, '-').concat(String(e));
                            return (0, l.jsx)('div', { className: U().item, children: (0, l.jsx)(D.V, { isActive: !0, 'aria-label': i }) }, r);
                        });
                    return (0, l.jsx)(k.h, {
                        scrollElement: null,
                        children: (0, l.jsxs)('div', {
                            className: U().root,
                            children: [
                                (0, l.jsx)(K.Y, {
                                    variant: K.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, l.jsx)(C.W, { className: U().shimmerTitle, radius: 'l' }),
                                }),
                                (0, l.jsx)('div', { className: U().content, children: r }),
                            ],
                        }),
                    });
                },
                W = () => {
                    let e = (0, a.useSearchParams)().get('tagId');
                    return (
                        e || (0, a.notFound)(),
                        (0, l.jsx)(v, { children: (0, l.jsx)(r.Suspense, { fallback: (0, l.jsx)(z, {}), children: (0, l.jsx)(H, { tagId: e }) }) })
                    );
                };
        },
        34961: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => h, s: () => v });
            var l = i(88800),
                r = i(84961),
                a = i(58390),
                s = i(53548),
                n = i(35412),
                o = i(39499),
                c = i(89108),
                u = i(70003),
                d = i(72288),
                g = i(16818);
            (0, r.eO)(!1);
            let m = (0, s.createContext)(null),
                p = (e) => {
                    let { children: t, store: i, storeKey: r } = e,
                        a = (0, s.useMemo)(() => ({ store: i, storeKey: r }), [i, r]);
                    return (0, l.jsx)(m.Provider, { value: a, children: t });
                },
                _ = (e) => {
                    let { nonce: t, patchKey: i, patchesRef: r } = e;
                    return (
                        (0, a.useServerInsertedHTML)(() => {
                            let e = r.current;
                            return ((r.current = []), 0 === e.length)
                                ? null
                                : (0, l.jsx)('script', {
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
                        r = () => {
                            var e, t;
                            let l = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[i]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[i], l);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: a, nonce: s } = e,
                                n = (0, g.Y)(),
                                o = (0, d.g)(),
                                { store: m, patchesRef: h } = (0, u.m)({
                                    createStore: () => t({ ...n, rootStore: o }),
                                    getPendingPatchBatches: r,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(_, { nonce: s, patchKey: i, patchesRef: h }), (0, l.jsx)(p, { store: m, storeKey: i, children: a })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, s.useContext)(m);
                if (!i || i.storeKey !== e) {
                    var l;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (l = null == i ? void 0 : i.storeKey) ? l : 'null', expectedStoreKey: e },
                    });
                }
                return i.store;
            }
        },
        35994: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => r });
            var l = i(67174);
            let r = (e) => (0, l.u)('/artist/:artistId', { params: { artistId: e } });
        },
        37127: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 34799));
        },
        39339: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => v });
            var l = i(5120),
                r = i(89916),
                a = i(60385),
                s = i(79390),
                n = i(50633),
                o = i(27506),
                c = i(67174),
                u = i(23744),
                d = i(97335),
                g = i(67318),
                m = i(34407),
                p = i(554),
                _ = i(18243),
                h = i(99007);
            let v = l.gK
                .compose(
                    l.gK.model({
                        uuid: l.gK.string,
                        isAvailable: l.gK.boolean,
                        revision: l.gK.maybe(l.gK.number),
                        uid: l.gK.number,
                        kind: l.gK.number,
                        title: l.gK.maybe(l.gK.string),
                        coverUri: l.gK.maybe(l.gK.string),
                        tracksCount: l.gK.maybe(l.gK.number),
                        averageColor: l.gK.maybe(l.gK.string),
                        generatedPlaylistType: l.gK.maybe(l.gK.string),
                        personalColor: l.gK.maybeNull(l.gK.number),
                        visibility: l.gK.maybe(l.gK.string),
                        trailer: l.gK.maybe(u.a),
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
                        return e.visibility === a.L.PUBLIC;
                    },
                    get isLiked() {
                        if (!(0, l._n)(e)) return !1;
                        let { library: t } = (0, n.M)(e);
                        return t.isPlaylistLiked((0, p.m)(e));
                    },
                    get pinId() {
                        return (0, _.f)(e);
                    },
                    get id() {
                        return (0, p.m)(e);
                    },
                    get isPinned() {
                        if (!(0, l._n)(e)) return !1;
                        let { pinsCollection: t } = (0, n.M)(e);
                        return t.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: t } = (0, n.M)(e);
                        return !!(t.isAuthorized && e.uid && t.account.data.uid && e.uid === t.account.data.uid);
                    },
                    get canUserChange() {
                        if (!(0, l._n)(e)) return !1;
                        return this.isOwnPlaylist && !this.isFavouritePlaylist;
                    },
                    get isOwnFavouritePlaylist() {
                        if (!(0, l._n)(e)) return !1;
                        return this.isFavouritePlaylist && this.isOwnPlaylist;
                    },
                }))
                .actions((e) => ({
                    toggleLike: (0, l.L3)(function* () {
                        if (!(0, l._n)(e)) return;
                        let { library: t, user: i } = (0, n.M)(e);
                        if (i.isAuthorized) {
                            let r = yield t.togglePlaylistLike({ userId: i.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return ((0, l._n)(e) && r === s.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), r);
                        }
                    }),
                    togglePin: (0, l.L3)(function* () {
                        if (!(0, l._n)(e)) return;
                        let { pinsCollection: t, user: i } = (0, n.M)(e);
                        if (i.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, l.L3)(function* (t) {
                        if (!(0, l._n)(e)) return g.Y.ERROR;
                        let { usersResource: i, modelActionsLogger: a } = (0, l._$)(e);
                        try {
                            var s, n;
                            let l = yield i.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (s = e.revision) ? s : 0, playlistKind: e.kind });
                            return ((e.revision = l.revision), (e.isAvailable = null == (n = l.available) || n), g.Y.OK);
                        } catch (e) {
                            if ((a.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === r.X1.PRECONDITION_FAILED)) return g.Y.RELOAD;
                            return g.Y.ERROR;
                        }
                    }),
                    changeTitle: (0, l.L3)(function* (t) {
                        if (!(0, l._n)(e)) return o.F.ERROR;
                        if (e.title === t) return o.F.OK;
                        let { usersResource: i, modelActionsLogger: r } = (0, l._$)(e);
                        if (e.canUserChange) {
                            if (t.length < 1 || t.length > m.k) return o.F.ERROR;
                            let l = e.title;
                            e.title = t;
                            try {
                                let r = yield i.changePlaylistTitle({ title: t, userId: e.uid, playlistKind: e.kind });
                                if (!(null == r ? void 0 : r.title)) return ((e.title = l), o.F.ERROR);
                                return ((e.title = r.title), o.F.OK);
                            } catch (t) {
                                ((e.title = l), r.error(t));
                            }
                        }
                        return o.F.ERROR;
                    }),
                    deletePlaylist: (0, l.L3)(function* () {
                        if (!(0, l._n)(e) || !e.canUserChange) return o.F.ERROR;
                        let { pinsCollection: t } = (0, n.M)(e),
                            { usersResource: i, modelActionsLogger: r } = (0, l._$)(e);
                        try {
                            return (yield i.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), t.isPinned(e.pinId) && t.deletePin(e.pinId), o.F.OK);
                        } catch (e) {
                            r.error(e);
                        }
                        return o.F.ERROR;
                    }),
                    toggleVisibility: (0, l.L3)(function* (t) {
                        if (!(0, l._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return o.F.ERROR;
                        let { usersResource: i, modelActionsLogger: r } = (0, l._$)(e),
                            { user: s } = (0, n.M)(e),
                            c = e.visibility,
                            u = e.isPublic ? a.L.PRIVATE : a.L.PUBLIC;
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
                            r.error(e);
                        }
                        return ((e.visibility = c), o.F.ERROR);
                    }),
                    getKey: (t) => ''.concat(t, '_').concat(e.id),
                }));
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => S });
            var l = i(88800),
                r = i(65724),
                a = i(84961),
                s = i(53548),
                n = i(87999),
                o = i(80643),
                c = i(17392),
                u = i(29993),
                d = i(90688),
                g = i(19934),
                m = i(7555),
                p = i(29504),
                _ = i(78940),
                h = i(72288),
                v = i(80932),
                y = i.n(v);
            let S = (0, a.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: a } = (0, h.g)(),
                    v = (0, _.Z)(t.url),
                    E = (0, o.S)(),
                    f = (0, s.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, l.jsx)(S, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    x = (0, u.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), E({ to: n.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)(g.Dr, {
                            className: (0, r.$)(y().root, i),
                            onClick: x,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, l.jsx)(m.t, {
                                    radius: 'round',
                                    className: y().cover,
                                    children: (0, l.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: y().image }),
                                }),
                                (0, l.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        f,
                    ],
                });
            });
        },
        41911: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => Q });
            var l = i(88800),
                r = i(65724),
                a = i(84961),
                s = i(53548),
                n = i(2058),
                o = i(87999),
                c = i(62414),
                u = i(80643),
                d = i(33979),
                g = i(17392),
                m = i(18593),
                p = i(29993),
                _ = i(79070),
                h = i(29832),
                v = i(52300),
                y = i(7555),
                S = i(29504),
                E = i(13946),
                f = i(85902),
                x = i(24460),
                L = i(5407),
                C = i(57934),
                P = i(84384),
                T = i(4795),
                k = i(78940),
                A = i(55693),
                R = i(39079),
                b = i(72288),
                N = i(86298),
                I = i(81877),
                j = i(49738),
                O = i(91292),
                w = i(56862),
                M = i(16704),
                K = i(56446),
                D = i(36207),
                F = i(47513),
                G = i(19934),
                U = i(48749),
                H = i(22505),
                z = i(9618),
                W = i(95210),
                B = i(46936),
                Y = i(97956),
                V = i(93091),
                $ = i(27817),
                X = i(15425);
            let q = (0, a.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: r, open: a, ...s } = e,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: u } = (0, z.q)(),
                    {
                        experiments: d,
                        settings: { isMobile: m },
                        trailer: _,
                        user: h,
                    } = (0, b.g)(),
                    v = (0, f.K)(i),
                    y = (0, x.A)(i),
                    S = (0, C.F)(),
                    { formatMessage: E } = (0, n.A)(),
                    P = (0, L.P)(),
                    T = d.checkExperiment(Y.z.WebEditorsFeatures, 'on'),
                    k = (0, U.A)({ entityVariant: B.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, W.N)(a);
                let A = (0, p.c)(() => {
                    if (c) return void u();
                    P() || (_.openPlaylistTrailer(i.id), S(o.DomainObjectType.Playlist, i.id));
                });
                return (0, l.jsxs)(G.W1, {
                    title: i.title,
                    onOpenChange: r,
                    open: a,
                    offsetOptions: 10,
                    isMobile: m,
                    ariaLabel: E({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: g.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...s,
                    children: [
                        T && (0, l.jsx)(H.d, { entityVariant: B.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : k }),
                        !m && (0, l.jsx)($.L, { onClick: y, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, l.jsx)(V.T, { onClick: v, isLiked: i.isLiked, disabled: !h.isAuthorized }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, l.jsx)(X.N, { onClick: A, disabled: !i.isAvailable }),
                    ],
                });
            });
            var J = i(17657),
                Z = i.n(J);
            let Q = (0, a.PA)((e) => {
                let { className: t, playlist: i, children: a, contentLinesCount: G, customDescription: U, onCoverMouseDown: H } = e,
                    z = (0, c.D)(),
                    {
                        trailer: W,
                        user: B,
                        paywall: { modal: Y },
                    } = (0, b.g)(),
                    { from: V, utmLink: $ } = (0, P.f)({ contextId: i.uuid, contextType: m.K.Playlist }),
                    { formatMessage: X } = (0, n.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: Q, sendPlaySearchFeedback: ee } = (0, A.z)(),
                    [et, ei] = (0, s.useState)(!1),
                    [el, er] = (0, s.useState)(!1),
                    [ea, es] = (0, s.useState)(!1),
                    en = (0, F.r)(i),
                    eo = (0, f.K)(i),
                    ec = (0, x.A)(i),
                    eu = (0, u.S)(),
                    ed = (0, d.g)(),
                    eg = (0, k.Z)(i.url),
                    em = (0, C.F)(),
                    ep = (0, L.P)(),
                    e_ = (0, p.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        (W.setUtmLink($), W.openPlaylistTrailer(i.id), em(o.DomainObjectType.Playlist, i.id));
                    }),
                    [eh, ev] = (0, s.useState)(!1),
                    { isPlaying: ey, togglePlay: eS } = (0, R.D)({
                        playContextParams: { contextData: { type: m.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: V, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    eE = (0, p.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == Q || Q());
                    }),
                    ef = (0, p.c)((e) => {
                        (eE(), eg(e));
                    }),
                    ex = (0, T.N)(),
                    eL = (0, p.c)(() => {
                        if (!ep()) {
                            if (ex) return void Y.open();
                            (et || ey || (ei(!0), null == ee || ee()), eS(), ey || ed());
                        }
                    }),
                    eC = (0, p.c)(() => {
                        (el || i.isLiked || (er(!0), null == J || J()), eo());
                    }),
                    eP = (0, p.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eT = (0, p.c)((e) => {
                        (es(e), ev(e));
                    }),
                    ek = (0, s.useMemo)(() => {
                        var e;
                        return U
                            ? (0, l.jsx)(S.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: U }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, l.jsx)(
                                    E.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [U, i]),
                    eA = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, l.jsx)(
                                j.c,
                                {
                                    className: (0, r.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: eC,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !B.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eR = (0, s.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, l.jsx)(
                                D.n,
                                {
                                    children: (0, l.jsx)(
                                        K.k,
                                        { className: (0, r.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: e_ },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [e_, i]),
                    eb = (0, s.useMemo)(
                        () =>
                            (0, l.jsx)(
                                w.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, r.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eN = (0, s.useMemo)(
                        () =>
                            (0, l.jsx)(y.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': g.Kq.playlist.PLAYLIST_CARD,
                                children: (0, l.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: ef,
                                    onMouseDown: H,
                                    children: [
                                        (0, l.jsx)(I.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: en,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, l.jsx)(h.hg, {
                                            isVisible: ea || eh,
                                            className: Z().controls,
                                            playControl: (0, l.jsx)(
                                                M.D,
                                                {
                                                    className: (0, r.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eL,
                                                    isPlaying: ey,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eA,
                                            menuControl: (0, l.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eT,
                                                    open: ea,
                                                    onClick: eP,
                                                    className: (0, r.$)(Z().menuButton, Z().control),
                                                    icon: (0, l.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': g.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eb,
                                            trailerControl: eR,
                                        }),
                                    ],
                                }),
                            }),
                        [ef, H, i, en, ea, eh, eL, ey, eA, eT, eP, eb, eR],
                    ),
                    eI = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, l.jsxs)(h.MN, {
                    ref: z,
                    'aria-label': en,
                    className: (0, r.$)(Z().root, t),
                    title: (0, l.jsx)(S.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': g.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, l.jsx)(O.N, { className: Z().titleLink, href: i.url, tabIndex: -1, onClick: eE, children: i.title }),
                    }),
                    srTitle: (0, l.jsx)(O.N, { className: Z().srTitleLink, href: i.url, onClick: eE, children: i.title }),
                    contentLinesCount: G,
                    view: eN,
                    description: ek,
                    'data-test-id': g.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eI &&
                            (0, l.jsx)(N.x, {
                                ariaLabel: X({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: eo,
                            }),
                        a,
                    ],
                });
            });
        },
        42078: (e, t, i) => {
            'use strict';
            var l;
            (i.d(t, { _: () => l }),
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
                })(l || (l = {})));
        },
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => a });
            var l = i(53548),
                r = i(2058);
            let a = (e) => {
                let { formatMessage: t } = (0, r.A)();
                return (0, l.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let l = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(l, ' ').concat(i);
                }, [t, e]);
            };
        },
        48109: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => l });
            let l = (e) => {
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
            i.d(t, { M: () => r });
            var l = i(5120);
            let r = (e) => {
                let t = (0, l.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: i } = (0, l._$)(e);
                return i || t;
            };
        },
        52440: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => c });
            var l = i(5120),
                r = i(27506),
                a = i(74773),
                s = i(66911),
                n = i(67311),
                o = i(23341);
            function c(e, t) {
                let { useAppendMode: i = !1 } = null != t ? t : {};
                return l.gK
                    .compose(
                        l.gK.model('PageLoader', {
                            items: l.gK.maybeNull(l.gK.array(l.gK.maybeNull(e))),
                            requestsCount: l.gK.optional(l.gK.number, 0),
                            initialRequestLoadingState: l.gK.optional(l.gK.enumeration(Object.values(a.G)), a.G.IDLE),
                            lastRejectedPagesList: l.gK.optional(l.gK.array(l.gK.number), []),
                            pager: l.gK.maybeNull(o.j),
                            pageStates: l.gK.maybeNull(l.gK.array(l.gK.enumeration(Object.values(a.G)))),
                        }),
                        n.p,
                    )
                    .views((e) => {
                        let t = {
                            isPageNeedToLoad: (t) => {
                                var i;
                                return null == (i = e.pageStates) || !i[t] || e.pageStates[t] === a.G.IDLE;
                            },
                            get isSomePageResolved() {
                                var l;
                                return !!((null == (l = e.pageStates) ? void 0 : l.length) && e.pageStates.some((e) => e === a.G.RESOLVE));
                            },
                            get isEmpty() {
                                var r;
                                return t.isSomePageResolved && !(null == (r = e.items) ? void 0 : r.length);
                            },
                            get isNeedToMakeInitialRequest() {
                                return e.initialRequestLoadingState === a.G.IDLE;
                            },
                            get isInitialRequestRejected() {
                                return e.initialRequestLoadingState === a.G.REJECT;
                            },
                            get hasMorePages() {
                                var s;
                                return !!i && !(null == (s = e.pager) ? void 0 : s.lastPage);
                            },
                            get rejectedPagesCount() {
                                var n;
                                if (t.isInitialRequestRejected || !(null == (n = e.pageStates) ? void 0 : n.length)) return 0;
                                return e.pageStates.filter((e) => e === a.G.REJECT).length;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setPageState: (l, r) => {
                                let s;
                                if (([a.G.IDLE, a.G.PENDING].includes(e.initialRequestLoadingState) && (e.initialRequestLoadingState = r), i)) s = l + 1;
                                else {
                                    var n, o, c, u;
                                    s = Math.ceil(
                                        (null != (c = null == (n = e.pager) ? void 0 : n.total) ? c : 0) /
                                            (null != (u = null == (o = e.pager) ? void 0 : o.perPage) ? u : 1),
                                    );
                                }
                                let d = Math.max(l + 1, s);
                                (t.ensurePageStatesInitialized(d), e.pageStates && (e.pageStates[l] = r), r === a.G.REJECT && t.addLastRejectedPageToList(l));
                            },
                            setItems: (n, o) => {
                                var c;
                                let { page: u, pager: d, responseStatus: g } = o;
                                if (((e.requestsCount = (null != (c = e.requestsCount) ? c : 0) + 1), g === r.F.ERROR || !n || !d))
                                    return void t.setPageState(u, a.G.REJECT);
                                (e.pager
                                    ? i && ((e.pager.lastPage = d.lastPage), (e.pager.perPage = d.perPage))
                                    : (e.pager = { page: d.page, perPage: d.perPage, total: d.total, lastPage: d.lastPage }),
                                    t.setPageState(u, a.G.RESOLVE),
                                    (e.pager.page = u),
                                    i
                                        ? (e.items || (e.items = (0, l.wg)([])), e.items && e.items.push(...n))
                                        : (e.items || (e.items = (0, l.wg)(Array.from({ length: e.pager.total }, () => null))),
                                          e.items && (0, s.I)({ items: e.items, mappedRawItems: n, page: u, pageSize: e.pager.perPage })));
                            },
                            resetRejectedPagesState() {
                                var t, i, l;
                                for (let r = 0; r < (null != (i = null == (t = e.pageStates) ? void 0 : t.length) ? i : 0); r++)
                                    (null == (l = e.pageStates) ? void 0 : l[r]) === a.G.REJECT && (e.pageStates[r] = a.G.IDLE);
                            },
                            addLastRejectedPageToList(t) {
                                var i, l, r;
                                for (e.lastRejectedPagesList.push(t); (null != (l = null == (i = e.lastRejectedPagesList) ? void 0 : i.length) ? l : 0) > 5;)
                                    null == (r = e.lastRejectedPagesList) || r.shift();
                            },
                            ensurePageStatesInitialized(t) {
                                if (t <= 0) return;
                                if (!e.pageStates) {
                                    let i = Array.from({ length: t }, () => a.G.IDLE);
                                    e.pageStates = (0, l.wg)(i);
                                    return;
                                }
                                let i = e.pageStates.length;
                                if (t > i) {
                                    let l = Array.from({ length: t - i }, () => a.G.IDLE);
                                    e.pageStates.push(...l);
                                }
                            },
                            reset() {
                                ((e.initialRequestLoadingState = a.G.IDLE),
                                    (e.requestsCount = 0),
                                    (e.lastRejectedPagesList = (0, l.wg)([])),
                                    e.destroyItems([e.items, e.pager, e.pageStates]));
                            },
                        };
                        return t;
                    });
            }
        },
        53647: (e, t, i) => {
            'use strict';
            i.d(t, { V8: () => a, si: () => n, fW: () => g, MJ: () => d, jU: () => p, Bx: () => m });
            var l = i(77451);
            function r(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class a {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let s = (0, l.Jt)(e);
                        if (t) {
                            var i, a;
                            return null != (a = null == (i = r(s)) ? void 0 : i.value) ? a : null;
                        }
                        return null != s ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, i) {
                    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let a = r ? JSON.stringify({ value: t }) : t;
                        (0, l.hZ)(e, a, i);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, l.TF)(e);
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
                        var l;
                        let a = i.getItem(e) || void 0;
                        if (!t) return a;
                        let s = r(a);
                        if (!s) return null;
                        let n = null != (l = null == s ? void 0 : s.value) ? l : null;
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
                    let l = s('localStorage');
                    if (l)
                        try {
                            l.setItem(e, JSON.stringify({ value: t, ...i }));
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
                constructor(e, t, { code: i = 'E_STORAGE', ...l } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: i, ...l }),
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
                        var i, l, a;
                        let s = null != (l = t.getItem(e)) ? l : void 0;
                        return null != (a = null == (i = r(s)) ? void 0 : i.value) ? a : null;
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
            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let i = 'object' != typeof t ? t : t.name,
                            l = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            r = e.get(i);
                        null != r && e.set(i, r, l);
                    });
            }
            function p(e) {
                let { name: t, group: i, value: l } = e;
                return l && 0 !== Object.keys(l).length
                    ? l.title
                        ? { [t]: { group: i, value: { ...l, title: i } } }
                        : { [t]: { group: i, value: { title: i, value: l } } }
                    : { [t]: { group: i, value: { title: i } } };
            }
        },
        53892: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => l });
            let l = {
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
            var l = i(88800),
                r = i(53548),
                a = i(29993),
                s = i(9492),
                n = i(29595),
                o = i(74965),
                c = i(74773);
            let u = (e, t) => {
                let { notify: i, dismiss: u } = (0, o.l)(),
                    d = (0, r.useRef)(void 0),
                    g = (0, a.c)(() => {
                        var i;
                        (u({ notificationId: d.current }), (d.current = 0));
                        let l = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            l.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, r.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !d.current && (d.current = i((0, l.jsx)(s.L, { reloadBlocks: g }), { containerId: n.u.ERROR, autoClose: !1 }));
                }, [u, g, i, e.rejectedPagesCount]);
            };
        },
        57285: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => l });
            let l = (e) => ({ available: !!(null == e ? void 0 : e.available) });
        },
        57448: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            var l = i(4086),
                r = i(41928);
            let a = () => {
                let e = (0, r.N)(),
                    t = e.get(l.$I),
                    i = e.get(l.EN),
                    a = e.get(l.N1),
                    s = e.get(l._1),
                    n = e.get(l.V3),
                    o = e.get(l.Lb),
                    c = e.get(l.wK),
                    u = e.get(l.tz),
                    d = e.get(l.$8),
                    g = e.get(l.Oo),
                    m = e.get(l.X4),
                    p = e.get(l.O9),
                    _ = e.get(l.E),
                    h = e.get(l.wH),
                    v = e.get(l.ok),
                    y = e.get(l.X8),
                    S = e.get(l.yq),
                    E = e.get(l.NN),
                    f = e.get(l.qN),
                    x = e.get(l.ro),
                    L = e.get(l.nM),
                    C = e.get(l.Ut),
                    P = e.get(l.K1),
                    T = e.get(l.eu),
                    k = e.get(l.SD),
                    A = e.get(l.aE),
                    R = e.get(l.ki),
                    b = e.get(l.c9),
                    N = e.get(l.en),
                    I = e.get(l.jQ),
                    j = e.get(l.cZ),
                    O = e.get(l.Zl),
                    w = e.get(l.CN),
                    M = e.get(l.P1),
                    K = e.get(l.zj),
                    D = e.get(l.re),
                    F = e.get(l.JM),
                    G = e.get(l.Lk),
                    U = e.get(l.$$),
                    H = e.get(l.sv),
                    z = e.get(l.gd),
                    W = e.get(l.Ez),
                    B = e.get(l.u2),
                    Y = e.get(l.TD),
                    V = e.get(l.dh),
                    $ = e.get(l.LC),
                    X = e.get(l.PL),
                    q = e.get(l.DT);
                return {
                    accountResource: t,
                    afterTrackResource: i,
                    disclaimersResource: a,
                    usersResource: s,
                    landingResource: n,
                    landing3Resource: o,
                    landingBlocksResource: c,
                    albumResource: u,
                    libraryResource: d,
                    tracksResource: g,
                    topResource: m,
                    artistsResource: p,
                    slidesResource: _,
                    redAlertResource: h,
                    rotorResource: v,
                    waveResource: y,
                    searchResource: S,
                    searchPlaylistResource: E,
                    playlistResource: f,
                    playlistsResource: x,
                    pinResource: L,
                    metatagsResource: C,
                    tagResource: P,
                    feedResource: T,
                    wizard3Resource: k,
                    pinsResource: A,
                    musicHistoryResource: R,
                    dynamicPagesResource: b,
                    chartResource: N,
                    clipsResource: I,
                    lyricViewsResource: j,
                    nonMusicResource: O,
                    donationResource: w,
                    loaderResource: M,
                    lumenResource: K,
                    prefixlessResource: D,
                    streamsResource: F,
                    filtersResource: G,
                    ugcResource: U,
                    collectionResource: H,
                    adsResource: z,
                    personalResource: W,
                    familyResource: B,
                    childrenLandingResource: Y,
                    promoResource: V,
                    telemetryResource: $,
                    labelsResource: X,
                    concertsResource: q,
                    wordsResource: e.get(l.dA),
                    wheelResource: e.get(l.$Y),
                };
            };
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => s });
            var l = i(88800);
            i(30282);
            var r = i(11006),
                a = i.n(r);
            let s = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: a().empty });
            };
        },
        60385: (e, t, i) => {
            'use strict';
            var l;
            (i.d(t, { L: () => l }),
                (function (e) {
                    ((e.PUBLIC = 'public'), (e.PRIVATE = 'private'));
                })(l || (l = {})));
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => r });
            var l = i(97956);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: r, userRegion: a } = e;
                return 'ru' === a && t(l.z.WebNextFooterDisclaimer, 'on') ? i() : r();
            };
        },
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => n });
            var l = i(4086),
                r = i(41928),
                a = i(44084);
            let s = new WeakMap(),
                n = () =>
                    ((e) => {
                        if (e instanceof a.r) return e;
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
                    })((0, r.N)().get(l.Zf));
        },
        66911: (e, t, i) => {
            'use strict';
            function l(e) {
                let { items: t, mappedRawItems: i, page: l, pageSize: r } = e,
                    a = l * r,
                    s = 0;
                for (let e = a; e < a + r; e++) (i[s] && (t[e] = i[s]), s++);
            }
            i.d(t, { I: () => l });
        },
        67311: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => r });
            var l = i(5120);
            let r = l.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    (e.forEach((e) => {
                        e && (0, l.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, l.zr)(e);
                            });
                        }));
                },
            }));
        },
        67318: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => l });
            var l = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e);
            })({});
        },
        70003: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            var l = i(5120),
                r = i(53548);
            let a = (e) => {
                let { createStore: t, getPendingPatchBatches: i, patchesUpdatedEventName: a } = e,
                    s = (0, r.useRef)([]),
                    [n] = (0, r.useState)(() => {
                        let e = t();
                        for (let t of i()) (0, l.X6)(e, t);
                        return e;
                    });
                return (
                    (0, r.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of i()) (0, l.X6)(n, e);
                        };
                        return (e(), window.addEventListener(a, e), () => window.removeEventListener(a, e));
                    }, [i, a, n]),
                    { store: n, patchesRef: s }
                );
            };
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => h });
            var l = i(88800),
                r = i(65724),
                a = i(61013),
                s = i(53548);
            let n = (e) => {
                    let { style: t, forwardRef: i, context: r, ...a } = e,
                        s = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        n = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': s, style: { ...t }, ref: i, ...a });
                },
                o = (0, s.forwardRef)((e, t) => (0, l.jsx)(n, { forwardRef: t, ...e }));
            var c = i(16434),
                u = i.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: i, withFooter: a, withHeader: s, withForceScroll: n, ...o } = e;
                    return (0, l.jsx)('div', {
                        className: (0, r.$)(u().scroller, { [u().scroller_withFooter]: a, [u().scroller_withHeader]: s, [u().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                g = (0, s.forwardRef)((e, t) => (0, l.jsx)(d, { forwardRef: t, ...e }));
            var m = i(55482),
                p = i(75151);
            let _ = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: a = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [g, _] = (0, s.useState)(null),
                        h = (0, s.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == r || r(e), o.length > 0 && _(e), t && i)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < l; e++) i(e);
                                    }
                                }, a),
                            [a, r, t, i, o],
                        );
                    (0, s.useEffect)(() => {
                        o.length > 0 && g && h(g);
                    }, o);
                    let v = (0, s.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, a);
                    }, [c, a]);
                    return (0, l.jsx)(p.sN, { ref: u, rangeChanged: h, totalCount: n, endReached: v, ...d });
                },
                h = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: h = 700,
                            pageSize: v = 20,
                            totalCount: y,
                            totalRequests: S,
                            debounceDurationInMs: E,
                            initialItemCount: f,
                            minInitialItemCount: x = 20,
                            handleRef: L,
                            alwaysShowScrollbar: C = !1,
                            testId: P,
                            isMobileLayout: T = !1,
                            shouldTriggerRangeChangedOn: k,
                            ...A
                        } = e,
                        [R, b] = (0, s.useState)(!1),
                        N = (0, s.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    b(e);
                                }, 100),
                            [],
                        ),
                        I = (0, s.useMemo)(() => {
                            var e, t;
                            return T
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
                        }, [i, S, T]),
                        j = f ? Math.min(f, x) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, r.$)(u().root, { [u().root_scrolling]: R || C, [u().root_notScrolling]: !R && !C }, t),
                        'data-test-id': P,
                        children: [
                            T && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, l.jsx)(_, {
                                overscan: h,
                                components: I,
                                listClassName: p,
                                itemClassName: d,
                                isScrolling: N,
                                itemContent: m,
                                scrollerRef: L,
                                totalCount: y,
                                pageSize: v,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: E,
                                initialItemCount: j,
                                shouldTriggerRangeChangedOn: k,
                                ...A,
                            }),
                            T && (null == i ? void 0 : i.Footer) && i.Footer(),
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
            i.d(t, { K: () => m });
            var l = i(88800),
                r = i(96706),
                a = i(53548),
                s = i(2058),
                n = i(79390),
                o = i(29595),
                c = i(74965),
                u = i(72288),
                d = i(66943),
                g = i(30832);
            let m = (e) => {
                let { user: t } = (0, u.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, p] = (0, a.useState)(!1),
                    { formatMessage: _ } = (0, s.A)();
                return (0, a.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, l.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let a = { ...(0, r.HO)(e), url: e.url, isLiked: !e.isLiked };
                    p(!0);
                    let s = await e.toggleLike();
                    (p(!1),
                        s === n.f.OK
                            ? i((0, l.jsx)(g.T, { playlist: a }), { containerId: o.u.INFO })
                            : i((0, l.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, m, e, _, i]);
            };
        },
        86298: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => g });
            var l = i(88800),
                r = i(65724),
                a = i(2058),
                s = i(17392),
                n = i(96817),
                o = i(52300),
                c = i(29504),
                u = i(84218),
                d = i.n(u);
            let g = (e) => {
                let { className: t, isLiked: i, likesCount: u, handleLikeClick: g, ariaLabel: m } = e,
                    { formatNumber: p } = (0, a.A)();
                return (0, l.jsx)(n.$, {
                    className: (0, r.$)(d().root, t),
                    onClick: g,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, l.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: d().icon }),
                    'aria-label': m,
                    'data-test-id': s.S7.CARD_LIKES,
                    children: (0, l.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(u) }),
                });
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => P });
            var l = i(88800),
                r = i(65724),
                a = i(84961),
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
                    let { formatMessage: t, language: i, tld: l, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, l, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, l, i) },
                    };
                };
            var g = i(62293),
                m = i(99839);
            let p = (e) => e(new Date(), (0, m.m)());
            var _ = i(51611),
                h = i(72288),
                v = i(11006),
                y = i.n(v),
                S = i(17392),
                E = i(29504),
                f = i(91292);
            let x = (e) => {
                    let { className: t, data: i } = e;
                    return (0, l.jsxs)('div', {
                        className: (0, r.$)(y().copyrights, t),
                        'data-test-id': S.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, l.jsxs)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, l.jsx)(f.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': S.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(E.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(f.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': S.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                L = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, l.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, l.jsx)('ol', {
                                className: y().list,
                                'data-test-id': S.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: r } = e;
                                    return (0, l.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, l.jsx)(f.N, { target: '_blank', href: r, className: y().link, 'data-test-id': S.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, l.jsx)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': S.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                C = (e) => {
                    let { className: t, data: i } = e;
                    return (0, l.jsxs)('footer', {
                        className: (0, r.$)(y().root, y().important, t),
                        'data-test-id': S.S7.FOOTER,
                        children: [(0, l.jsx)(L, { links: i.links, disclaimer: i.disclaimer }), (0, l.jsx)(x, { data: i.copyrights })],
                    });
                };
            (0, a.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, h.g)(),
                    { formatDate: r, formatMessage: a } = (0, s.A)(),
                    { language: n } = (0, _.h)(),
                    o = d({ formatMessage: a, language: n, tld: i.tld, year: p(r) });
                return (0, l.jsx)(x, { className: t, data: o });
            });
            let P = (0, a.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: a, location: m, user: v } = (0, h.g)(),
                    { formatDate: S, formatMessage: E } = (0, s.A)(),
                    { isEnabled: f } = null != (t = (0, o.P)()) ? t : {},
                    { language: x } = (0, _.h)(),
                    L = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: l, language: r, tld: a, userRegion: s, year: n } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: l, language: r, userRegion: a } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, l, r) },
                                    n = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, l, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, l, r) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, l, r) },
                                    g = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, l, r) },
                                    m = [s, o, d];
                                return (i && 'ru' === a && m.push(n), m.push(g), m);
                            })({ formatMessage: i, isWebApplication: l, language: r, tld: a, userRegion: s }),
                            disclaimer: (0, g.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: d({ formatMessage: i, language: r, tld: a, year: n }),
                        };
                    })({
                        checkExperiment: (e, t) => a.checkExperiment(e, t),
                        formatMessage: E,
                        isWebApplication: n.$3,
                        tld: m.tld,
                        language: x,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: p(S),
                    });
                return (0, l.jsx)(C, { className: (0, r.$)({ [y().root_withOffsetForDeeplink]: f }, i), data: L });
            });
        },
        89108: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => r, s: () => l });
            let l = 'yMusicStatePatchesUpdated',
                r = 'yMusicPageStatePatchesUpdated';
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r, P: () => a });
            var l = i(53548);
            let r = (0, l.createContext)(null),
                a = () => (0, l.useContext)(r);
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
            i.d(t, { t: () => r });
            var l = i(5120);
            let r = l.gK
                .model('LikesCount', { likesCount: l.gK.maybe(l.gK.number), pendingLikesCount: l.gK.optional(l.gK.number, 0) })
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
            i.d(t, { j: () => l });
            var l = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        99211: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => s });
            var l = i(5120),
                r = i(48109),
                a = i(12906);
            let s = (e) => {
                var t, i, s, n, o;
                e = e || {};
                let c = (0, a.m)(e.trailer);
                return (0, l.wg)({
                    isAvailable: null == (n = e.available) || n,
                    uid: e.uid,
                    uuid: null != (o = e.playlistUuid) ? o : '',
                    kind: e.kind,
                    title: e.title,
                    coverUri: (null == e || null == (t = e.cover) ? void 0 : t.uri) || (null == e || null == (s = e.cover) || null == (i = s.itemsUri) ? void 0 : i[0]),
                    tracksCount: e.trackCount,
                    likesCount: e.likesCount,
                    averageColor: (0, r.Q)(null == e ? void 0 : e.derivedColors),
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
            i.d(t, { m: () => l });
            let l = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7437, 4814, 9079, 3469, 8194, 1191, 8655, 615, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 3513, 4732, 9087, 3979,
                1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 2088, 763, 2670, 7358,
            ],
            () => e((e.s = 37127)),
        ),
            (_N_E = e.O()));
    },
]);
