(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5063],
    {
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
            i.d(t, { Z: () => l });
            var s = i(67174);
            let l = {
                main: (0, s.u)('/'),
                chart: (0, s.u)('/chart'),
                chartPodcasts: (0, s.u)('/chart/podcasts'),
                collection: (0, s.u)('/collection'),
                collectionAlbums: (0, s.u)('/collection/albums'),
                collectionArtists: (0, s.u)('/collection/artists'),
                collectionClips: (0, s.u)('/collection/clips'),
                collectionDislikes: (0, s.u)('/collection/dislikes'),
                collectionKids: (0, s.u)('/collection/kids'),
                collectionKidsAlbums: (0, s.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, s.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, s.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, s.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, s.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, s.u)('/collection/multivibes'),
                collectionPlaylists: (0, s.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, s.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, s.u)('/collection/playlists/liked'),
                collectionShelf: (0, s.u)('/collection/shelf'),
                collectionShelfLiked: (0, s.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, s.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, s.u)('/collection/shelf/recently-played'),
                concerts: (0, s.u)('/concerts'),
                kids: (0, s.u)('/kids'),
                mixes: (0, s.u)('/mixes'),
                musicHistory: (0, s.u)('/music-history'),
                muzmarket: (0, s.u)('/muzmarket'),
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                multivibe: (0, s.u)('/multivibe'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        6322: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => r });
            var s = i(88800),
                l = i(15077),
                n = i(33719);
            let r = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(n.k, {
                    closeToast: i,
                    entityVariant: l.c.PLAYLIST,
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
            i.d(t, { L: () => _ });
            var s = i(88800),
                l = i(65724),
                n = i(53548),
                r = i(2058),
                a = i(88969),
                o = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                p = i(4044),
                m = i.n(p);
            let _ = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    p = (0, n.useRef)(null),
                    { formatMessage: _ } = (0, r.A)();
                (0, n.useEffect)(() => {
                    var e;
                    null == (e = p.current) || e.focus();
                }, []);
                let h = (0, n.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(a.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(o.$, {
                                    ref: p,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': _({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [_, t],
                );
                return (0, s.jsx)(u.$, { className: (0, l.$)(m().root, m().important), message: h, closeToast: i });
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
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => B });
            var s = i(88800),
                l = i(65724),
                n = i(84961),
                r = i(53548),
                a = i(79070),
                o = i(17610),
                c = i(24548),
                d = i(29993),
                u = i(72288),
                p = i(35994);
            let m = (e, t) => {
                let { withLink: i, separator: s } = t,
                    l = i && !e.various ? (0, p.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: l };
            };
            var _ = i(21010),
                h = i.n(_),
                g = i(17392),
                x = i(29504),
                v = i(91292),
                y = i(2058),
                k = i(87999),
                C = i(80643),
                S = i(78940),
                j = i(55693),
                f = i(58217);
            let b = (0, n.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: l, captionSize: n = 'm', allArtistsTitle: r, withCustomTooltip: a, hoverSettings: c } = e,
                        {
                            name: p,
                            link: m,
                            title: _,
                            ariaLabel: h,
                            tooltipText: b,
                            isTooltipEnabled: A,
                            handleNavigate: P,
                        } = ((e) => {
                            var t, i;
                            let { item: s, allArtistsTitle: l, withCustomTooltip: n } = e,
                                { formatMessage: r } = (0, y.A)(),
                                a = ((e, t) => {
                                    let { item: i, allArtistsTitle: s, withCustomTooltip: l } = e,
                                        n = s || i.name;
                                    return {
                                        ...i,
                                        title: l ? void 0 : n,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: n,
                                        isTooltipEnabled: !s && l,
                                    };
                                })({ item: s, allArtistsTitle: l, withCustomTooltip: n }, r),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                p = (0, S.Z)(null != (i = null == (t = a.link) ? void 0 : t.href) ? i : a.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, j.z)(),
                                _ = (0, C.S)(),
                                h = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), p(e));
                                }),
                                g = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: l, fullscreenVideoPlayer: n } = (0, u.g)(),
                                        { modal: r } = s;
                                    return (0, f.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), r.isOpened && (s.reset(), r.close()), l.modal.isOpened && l.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            n.modal.isOpened && (n.modal.close(), n.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: a.artist, callback: h }),
                                x = (0, d.c)((e) => {
                                    (_({ to: k.AppScreen.ArtistScreen }), null == m || m(), g(e));
                                });
                            return { ...a, handleNavigate: x };
                        })({ item: t, allArtistsTitle: r, withCustomTooltip: a });
                    return m
                        ? (0, s.jsx)(v.N, {
                              ...m,
                              'aria-label': h,
                              className: i,
                              onClick: P,
                              title: _,
                              'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: A,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: b,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: l, children: p }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: A,
                              offsetOptions: 4,
                              placement: 'top',
                              text: b,
                              hoverSettings: c,
                              children: (0, s.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: l,
                                  title: _,
                                  'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: p,
                              }),
                          });
                }),
                A = (e) => {
                    let { group: t, linkClassName: i, captionClassName: l, captionSize: n, allArtistsTitle: a, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(b, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: l,
                                captionSize: n,
                                allArtistsTitle: a,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, s.jsxs)(
                                    r.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, s.jsx)(b, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: l,
                                                captionSize: n,
                                                allArtistsTitle: a,
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
            var P = i(88969),
                N = i(65453);
            let L = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: n } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(N.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(h().spoiler, i),
                            onClick: n,
                            rel: 'nofollow',
                            'data-test-id': g.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(P.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var T = i(61013),
                E = i(87819),
                I = i(40634),
                R = i(48468),
                O = i.n(R);
            let w = (0, n.PA)((e) => {
                    let { label: t, artists: i, forwardRef: l } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, E.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: l, children: t }),
                            (0, s.jsx)(o.ZI, { className: O().tooltipContent, children: i.map((e) => (0, s.jsx)(I.V, { artist: e, className: O().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, r.forwardRef)((e, t) => (0, s.jsx)(w, { forwardRef: t, ...e }));
            var D = i(19934),
                F = i(70396),
                z = i.n(F);
            let H = (0, n.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: n } = (0, y.A)();
                    return (0, s.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, l.$)(z().root, z().important),
                        label: t,
                        ariaLabel: n({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(I.V, { artist: e }, e.id)),
                    });
                }),
                W = (0, n.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: l } = e,
                        [n, o] = (0, r.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        p = (0, d.c)(() => {
                            let e = l.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, a.L)(() =>
                            (0, T.A)(() => {
                                p();
                            }, 100),
                        );
                    if (
                        ((0, r.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                p(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, p],
                        ),
                        (0, r.useEffect)(() => {
                            p();
                        }, [t, p]),
                        0 !== t.length)
                    )
                        return (n || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(H, { artists: t, label: i }) : (0, s.jsx)(M, { artists: t, label: i })) : i;
                }),
                B = (0, n.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: n,
                            linkClassName: p,
                            captionClassName: _,
                            captionSize: g,
                            variant: x = 'breakAll',
                            spoilerComponent: v,
                            ...y
                        } = e,
                        k = ((e) => {
                            var t, i, s;
                            let { separator: l, visibleArtistsCount: n, withLink: a, withComposer: o, artistIdWithoutLink: c, withContextMenu: p } = e,
                                _ = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                g = null == (s = e.withCustomTooltip) || s,
                                x = (0, r.useRef)(null),
                                [v, y] = (0, r.useState)(!1),
                                {
                                    settings: { isMobile: k },
                                } = (0, u.g)(),
                                C = ((!k || 1 === _.length) && p) || !p,
                                S = ((e, t) => {
                                    var i, s, l;
                                    let n = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        r = null == (s = null == t ? void 0 : t.withLink) || s,
                                        a = null != (l = null == t ? void 0 : t.separator) ? l : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(a),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: s } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => s || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: n, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: s, separator: l, isFirst: n } = t;
                                                return {
                                                    primary: m(e, { withLink: s, separator: n ? void 0 : l }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = l ? e.separator : '';
                                                        return m(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: r && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: a, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(_, { separator: l, visibleArtistsCount: v ? void 0 : n, withComposer: o, withLink: !!C && a, artistIdWithoutLink: c }),
                                j = h ? S.allArtistsTitle : '',
                                f = (0, d.c)((e) => {
                                    (y(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: S.groups,
                                hiddenArtistsCount: S.hiddenArtistsCount,
                                allArtistsTitle: j,
                                withCustomTooltip: g,
                                withContextMenu: p,
                                labelRef: x,
                                handleOnSpoilerClick: f,
                                isTooltipEnabled: !!j && g && !p && !k,
                                title: !j || g || p ? void 0 : j,
                            };
                        })(y),
                        C = (0, a.L)(() =>
                            k.hiddenArtistsCount <= 0
                                ? null
                                : (0, r.isValidElement)(v)
                                  ? v
                                  : (0, s.jsx)(L, { spoilerClassName: n, spoilerArtistsCount: k.hiddenArtistsCount, handleOnSpoilerClick: k.handleOnSpoilerClick }),
                        ),
                        S = (0, s.jsx)(o.m_, {
                            referenceRef: k.labelRef,
                            enabled: k.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: k.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, l.$)(h().root, h()['root_variant_'.concat(x)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: k.title,
                                children: [
                                    k.groups.map((e) =>
                                        (0, s.jsx)(
                                            A,
                                            {
                                                group: e,
                                                linkClassName: p,
                                                captionClassName: _,
                                                captionSize: g,
                                                allArtistsTitle: k.allArtistsTitle,
                                                withCustomTooltip: k.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    C,
                                ],
                            }),
                        });
                    return k.withContextMenu ? (0, s.jsx)(W, { labelRef: k.labelRef, artists: k.artists, label: S }) : S;
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
        20400: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => I }));
            var s = i(88800),
                l = i(58390),
                n = i(65724),
                r = i(84961),
                a = i(53548),
                o = i(2058),
                c = i(87999),
                d = i(76903),
                u = i(17392),
                p = i(29993),
                m = i(79070),
                _ = i(29504),
                h = i(32596),
                g = i(69630),
                x = i(41911),
                v = i(98427),
                y = i(46422),
                k = i(44230),
                C = i(37670),
                S = i(72288),
                j = i(54320),
                f = i(86790),
                b = i(60266),
                A = i(93317),
                P = i(37770),
                N = i(79418),
                L = i(77109),
                T = i.n(L);
            let E = (0, r.PA)((e) => {
                    var t, i, r;
                    let { id: L } = e,
                        {
                            kids: { kidsEditorialPlaylistSubpage: E },
                            settings: { isMobile: I },
                        } = (0, S.g)(),
                        R = (0, y.W)(),
                        { contentScrollRef: O, setContentScrollRef: w } = (0, k.g)(),
                        { formatMessage: M } = (0, o.A)(),
                        D = (0, p.c)((e) => {
                            E.getPlaylists({ page: e, pageSize: 20 });
                        });
                    (E.isNotFound && (0, l.notFound)(),
                        (0, a.useEffect)(
                            () => () => {
                                E.reset();
                            },
                            [E],
                        ));
                    let F = (0, m.L)(() => ({ Footer: () => (0, s.jsx)(b.A, { children: (0, s.jsx)(f.w, { className: T().footer }) }) }));
                    if (
                        ((0, C.J)(E.isResolved),
                        (0, j.X)(E.pagesLoader, D),
                        E.isNeededToLoad && (0, a.use)(E.getData({ id: L, page: 0, pageSize: 20 })),
                        E.isSomethingWrong)
                    )
                        return (0, s.jsx)(h.SomethingWentWrong, {});
                    let z = E.isLoading ? 20 : null != (i = null == (t = E.pagesLoader.pager) ? void 0 : t.total) ? i : 0;
                    return (0, s.jsx)(d.a, {
                        pageId: c.AppScreen.KidsEditorialPlaylists,
                        pageIdForFrom: v.b.KIDS_EDITORIAL_PLAYLISTS,
                        children: (0, s.jsx)(g.h, {
                            scrollElement: O,
                            outerTitle: E.title,
                            children: (0, s.jsxs)('div', {
                                className: T().root,
                                'data-test-id': u.Xk.kids.KIDS_EDITORIAL_PLAYLISTS,
                                children: [
                                    (0, s.jsx)(A.Y, {
                                        variant: A.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: R.canBack,
                                        children: (0, s.jsx)(_.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: E.title }),
                                    }),
                                    (0, s.jsx)(N.$, {
                                        context: { listAriaLabel: M({ id: 'mixes.playlists-list' }, { genreName: E.title || '' }) },
                                        className: (0, n.$)(T().scrollContainer, T().important),
                                        customComponents: F,
                                        itemContentCallback: (e) => {
                                            let t = E.playlists[e],
                                                i = M({ id: 'loading-messages.entity-is-loading' }, { entityName: M({ id: 'entity-names.playlist' }) });
                                            return t ? (0, s.jsx)(x.B, { playlist: t, contentLinesCount: 3 }, t.key) : (0, s.jsx)(P.V, { isActive: !0, 'aria-label': i });
                                        },
                                        totalCount: z,
                                        onGetDataByPage: D,
                                        pageSize: 20,
                                        totalRequests: null != (r = E.pagesLoader.requestsCount) ? r : 0,
                                        listClassName: T().content,
                                        itemClassName: T().item,
                                        handleRef: w,
                                        isMobileLayout: I,
                                        useWindowScroll: I,
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                I = () => {
                    let e = (0, l.useSearchParams)().get('id');
                    return (e || (0, l.notFound)(), (0, s.jsx)(E, { id: e }));
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
        24460: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => p });
            var s = i(88800),
                l = i(96706),
                n = i(53548),
                r = i(2058),
                a = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(6322);
            let p = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: p } = (0, r.A)(),
                    [m, _] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a.u.ERROR });
                    if (m) return;
                    let n = { ...(0, l.HO)(e), url: e.url, isPinned: !e.isPinned };
                    _(!0);
                    let r = await e.togglePin();
                    (_(!1),
                        r
                            ? i((0, s.jsx)(u.l, { playlist: n }), { containerId: a.u.INFO })
                            : i((0, s.jsx)(d.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: a.u.ERROR }));
                }, [t.isAuthorized, m, e, i, p]);
            };
        },
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        27473: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 20400));
        },
        30832: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => r });
            var s = i(88800),
                l = i(15077),
                n = i(42729);
            let r = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(n.O, {
                    entityVariant: l.c.PLAYLIST,
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
            i.d(t, { SomethingWentWrong: () => R });
            var s = i(88800),
                l = i(65724),
                n = i(84961),
                r = i(53548),
                a = i(2058),
                o = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                p = i(87999),
                m = i(47149),
                _ = i(84423),
                h = i(89846),
                g = i(64543),
                x = i(63582);
            let v = (0, x.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, _.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, h.g)(),
                        { screen: s } = (0, g.j)();
                    return {
                        sendRefreshEvent: (0, r.useCallback)(() => {
                            if (!t || !i || !(null == s ? void 0 : s.pageId)) return;
                            let e = {
                                actionType: p.ActionType.Refresh,
                                userInteractionType: p.UserInteractionType.Tap,
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: s.pageId,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, i, null == s ? void 0 : s.pageId]),
                    };
                }),
                y = (0, x.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, _.s)()) ? void 0 : t.evgenInstance,
                        { hash: s } = (0, h.g)(),
                        { screen: l } = (0, g.j)();
                    (0, r.useEffect)(() => {
                        if (!i || !s || !(null == l ? void 0 : l.pageId)) return;
                        let t = {
                            entityType: p.EntityTypes.Error,
                            entityId: p.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: s,
                            pageId: l.pageId,
                            pageStyle: p.PageStyles.Fullscreen,
                            pagePlacement: p.PagePlacements.Fullscreen,
                            mainObjectType: p.DomainObjectType.NonApplicable,
                            mainObjectId: p.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(i, t);
                    }, [i, e, s, null == l ? void 0 : l.pageId]);
                });
            var k = i(44230),
                C = i(4370),
                S = i(72288),
                j = i(97956),
                f = i(56248),
                b = i(90688),
                A = i(78940);
            let P = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var N = i(96856),
                L = i.n(N);
            let T = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { slam: r } = (0, S.g)(),
                    { contentRef: a } = (0, k.g)(),
                    d = (0, A.Z)(C.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, l.$)(L().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(f.L, {
                                withBackwardFallback: '/',
                                className: (0, l.$)(L().navigation, { [L().navigation_desktop]: !a }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, l.$)(L().content, { [L().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(b._V, { className: L().image, src: P.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: L().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: L().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: L().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                r.hasDownloadedTracks &&
                                    (0, s.jsx)(c.$, {
                                        className: L().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: L().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var E = i(9184),
                I = i.n(E);
            let R = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { formatMessage: p } = (0, a.A)(),
                    m = (0, r.useContext)(S.P),
                    _ = null == m ? void 0 : m.experiments.checkExperiment(j.z.WebNextUnstableMusicScreen, 'on'),
                    h = p(_ ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                y(h);
                let { sendRefreshEvent: g } = v(),
                    x = (0, r.useCallback)(() => {
                        (g(), (window.location.href = C.Z.main.href));
                    }, [g]),
                    { contentRef: b } = (0, k.g)();
                return _
                    ? (0, s.jsx)(T, { className: t, withBackwardControl: i, onBack: n })
                    : (0, s.jsxs)('div', {
                          className: (0, l.$)(I().root, t),
                          children: [
                              i &&
                                  (0, s.jsx)(f.L, {
                                      withBackwardFallback: '/',
                                      className: (0, l.$)(I().navigation, { [I().navigation_desktop]: !b }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, l.$)(I().content, { [I().content_shrink]: !i }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: I().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, l.$)(I().title, I().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, l.$)(I().text, I().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: x,
                                          className: I().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, s.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, s.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        35994: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => l });
            var s = i(67174);
            let l = (e) => (0, s.u)('/artist/:artistId', { params: { artistId: e } });
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => y });
            var s = i(88800),
                l = i(65724),
                n = i(84961),
                r = i(53548),
                a = i(87999),
                o = i(80643),
                c = i(17392),
                d = i(29993),
                u = i(90688),
                p = i(19934),
                m = i(7555),
                _ = i(29504),
                h = i(78940),
                g = i(72288),
                x = i(80932),
                v = i.n(x);
            let y = (0, n.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: n } = (0, g.g)(),
                    x = (0, h.Z)(t.url),
                    k = (0, o.S)(),
                    C = (0, r.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(y, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    S = (0, d.c)((e) => {
                        (n.modal.isOpened && n.modal.close(), k({ to: a.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(p.Dr, {
                            className: (0, l.$)(v().root, i),
                            onClick: S,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(m.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, s.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, s.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        C,
                    ],
                });
            });
        },
        41911: (e, t, i) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = i(52300);
// for PulseSync: END import the download icon for playlist menu actions
            i.d(t, { B: () => Q });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var s = i(88800),
                l = i(65724),
                n = i(84961),
                r = i(53548),
                a = i(2058),
                o = i(87999),
                c = i(62414),
                d = i(80643),
                u = i(33979),
                p = i(17392),
                m = i(18593),
                _ = i(29993),
                h = i(79070),
                g = i(29832),
                x = i(52300),
                v = i(7555),
                y = i(29504),
                k = i(13946),
                C = i(85902),
                S = i(24460),
                j = i(5407),
                f = i(57934),
                b = i(84384),
                A = i(4795),
                P = i(78940),
                N = i(55693),
                L = i(39079),
                T = i(72288),
                E = i(86298),
                I = i(81877),
                R = i(49738),
                O = i(91292),
                w = i(56862),
                M = i(16704),
                D = i(56446),
                F = i(36207),
                z = i(47513),
                H = i(19934),
                W = i(48749),
                B = i(22505),
                Y = i(9618),
                U = i(95210),
                K = i(46936),
                V = i(97956),
                $ = i(93091),
                q = i(27817),
                X = i(15425);
            let G = (0, n.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: l, open: n, ...r } = e,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: d } = (0, Y.q)(),
                    {
                        experiments: u,
                        settings: { isMobile: m },
                        trailer: h,
                        user: g,
                    } = (0, T.g)(),
                    x = (0, C.K)(i),
                    v = (0, S.A)(i),
                    y = (0, f.F)(),
                    { formatMessage: k } = (0, a.A)(),
                    b = (0, j.P)(),
                    A = u.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                    P = (0, W.A)({ entityVariant: K.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, U.N)(n);
                let N = (0, _.c)(() => {
                    if (c) return void d();
                    b() || (h.openPlaylistTrailer(i.id), y(o.DomainObjectType.Playlist, i.id));
                });
                // for PulseSync WebHost: BEGIN playlist context and native addon menu item rendering
                let pulseSyncInjectPlaylistMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                        eventDetail: {
                            id: String(i.kind ?? i.id),
                            uuid: String(i.uuid ?? ''),
                            url: String(i.url ?? ''),
                            ...(i.title
                                ? {
                                      title: String(i.title),
                                  }
                                : {}),
                        },
                        renderItem: ({ key, payload, activate }) => {
                            const label = String(payload?.label ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim();
                            if (!label || !icon) return null;
                            return (0, pulseSyncMenuJsx.jsx)(
                                pulseSyncMenuItems.Dr,
                                {
                                    icon: (0, pulseSyncMenuJsx.jsx)(pulseSyncMenuIcons.I, {
                                        variant: icon,
                                        size: 'xxs',
                                    }),
                                    onClick: () => {
                                        (activate(), l?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, s.jsxs)(H.W1, {
                    title: i.title,
                    onOpenChange: l,
                    open: n,
                    offsetOptions: 10,
                    isMobile: m,
                    ariaLabel: k({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: p.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...r,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        A && (0, s.jsx)(B.d, { entityVariant: K.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : P }),
                        !m && (0, s.jsx)(q.L, { onClick: v, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)($.T, { onClick: x, isLiked: i.isLiked, disabled: !g.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, s.jsx)(H.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, s.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, s.jsx)(X.N, { onClick: N, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var J = i(17657),
                Z = i.n(J);
            let Q = (0, n.PA)((e) => {
                let { className: t, playlist: i, children: n, contentLinesCount: H, customDescription: W, onCoverMouseDown: B } = e,
                    Y = (0, c.D)(),
                    {
                        trailer: U,
                        user: K,
                        paywall: { modal: V },
                    } = (0, T.g)(),
                    { from: $, utmLink: q } = (0, b.f)({ contextId: i.uuid, contextType: m.K.Playlist }),
                    { formatMessage: X } = (0, a.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: Q, sendPlaySearchFeedback: ee } = (0, N.z)(),
                    [et, ei] = (0, r.useState)(!1),
                    [es, el] = (0, r.useState)(!1),
                    [en, er] = (0, r.useState)(!1),
                    ea = (0, z.r)(i),
                    eo = (0, C.K)(i),
                    ec = (0, S.A)(i),
                    ed = (0, d.S)(),
                    eu = (0, u.g)(),
                    ep = (0, P.Z)(i.url),
                    em = (0, f.F)(),
                    e_ = (0, j.P)(),
                    eh = (0, _.c)((e) => {
                        if ((e.stopPropagation(), e_())) return void e.preventDefault();
                        (U.setUtmLink(q), U.openPlaylistTrailer(i.id), em(o.DomainObjectType.Playlist, i.id));
                    }),
                    [eg, ex] = (0, r.useState)(!1),
                    { isPlaying: ev, togglePlay: ey } = (0, L.D)({
                        playContextParams: { contextData: { type: m.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: $, utmLink: q }, loadContextMeta: !0 },
                    }),
                    ek = (0, _.c)(() => {
                        (ed({ to: o.AppScreen.PlaylistScreen }), null == Q || Q());
                    }),
                    eC = (0, _.c)((e) => {
                        (ek(), ep(e));
                    }),
                    eS = (0, A.N)(),
                    ej = (0, _.c)(() => {
                        if (!e_()) {
                            if (eS) return void V.open();
                            (et || ev || (ei(!0), null == ee || ee()), ey(), ev || eu());
                        }
                    }),
                    ef = (0, _.c)(() => {
                        (es || i.isLiked || (el(!0), null == J || J()), eo());
                    }),
                    eb = (0, _.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eA = (0, _.c)((e) => {
                        (er(e), ex(e));
                    }),
                    eP = (0, r.useMemo)(() => {
                        var e;
                        return W
                            ? (0, s.jsx)(y.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: W }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, s.jsx)(
                                    k.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [W, i]),
                    eN = (0, h.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                R.c,
                                {
                                    className: (0, l.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: ef,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !K.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eL = (0, r.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                F.n,
                                {
                                    children: (0, s.jsx)(
                                        D.k,
                                        { className: (0, l.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eh },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eh, i]),
                    eT = (0, r.useMemo)(
                        () =>
                            (0, s.jsx)(
                                w.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, l.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eE = (0, r.useMemo)(
                        () =>
                            (0, s.jsx)(v.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': p.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eC,
                                    onMouseDown: B,
                                    children: [
                                        (0, s.jsx)(I.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ea,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(g.hg, {
                                            isVisible: en || eg,
                                            className: Z().controls,
                                            playControl: (0, s.jsx)(
                                                M.D,
                                                {
                                                    className: (0, l.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ej,
                                                    isPlaying: ev,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eN,
                                            menuControl: (0, s.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eA,
                                                    open: en,
                                                    onClick: eb,
                                                    className: (0, l.$)(Z().menuButton, Z().control),
                                                    icon: (0, s.jsx)(x.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': p.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eT,
                                            trailerControl: eL,
                                        }),
                                    ],
                                }),
                            }),
                        [eC, B, i, ea, en, eg, ej, ev, eN, eA, eb, eT, eL],
                    ),
                    eI = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(g.MN, {
                    ref: Y,
                    'aria-label': ea,
                    className: (0, l.$)(Z().root, t),
                    title: (0, s.jsx)(y.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': p.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(O.N, { className: Z().titleLink, href: i.url, tabIndex: -1, onClick: ek, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(O.N, { className: Z().srTitleLink, href: i.url, onClick: ek, children: i.title }),
                    contentLinesCount: H,
                    view: eE,
                    description: eP,
                    'data-test-id': p.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eI &&
                            (0, s.jsx)(E.x, {
                                ariaLabel: X({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: eo,
                            }),
                        n,
                    ],
                });
            });
        },
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => n });
            var s = i(53548),
                l = i(2058);
            let n = (e) => {
                let { formatMessage: t } = (0, l.A)();
                return (0, s.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let s = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(s, ' ').concat(i);
                }, [t, e]);
            };
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        54320: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var s = i(88800),
                l = i(53548),
                n = i(29993),
                r = i(9492),
                a = i(29595),
                o = i(74965),
                c = i(74773);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, l.useRef)(void 0),
                    p = (0, n.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let s = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, l.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(r.L, { reloadBlocks: p }), { containerId: a.u.ERROR, autoClose: !1 }));
                }, [d, p, i, e.rejectedPagesCount]);
            };
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => r });
            var s = i(88800);
            i(30282);
            var l = i(11006),
                n = i.n(l);
            let r = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: n().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => l });
            var s = i(97956);
            let l = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: l, userRegion: n } = e;
                return 'ru' === n && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : l();
            };
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        70621: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => o });
            var s = i(53548),
                l = i(63582),
                n = i(245),
                r = i(22681),
                a = i(56374);
            let o = (0, l.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, n.N)(),
                    t = (0, r.w)(),
                    i = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        76903: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                l = i(53548),
                n = i(53534),
                r = i(63582),
                a = i(245);
            let o = new WeakMap();
            class c {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let i =
                        o.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                i = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                s = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                i();
                                            } finally {
                                                ((t = !1), e.length > 0 && s());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (i(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), s());
                                },
                            };
                        })();
                    (o.set(t, i), (this.queue = i));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var d = i(87999);
            let u = (0, r.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, a.N)(),
                        r = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [o, u] = (0, l.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: r, scope: r ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        o.client !== i ||
                        o.input.pageId !== t.pageId ||
                        o.input.skeletonId !== t.skeletonId ||
                        o.input.mainObjectType !== t.mainObjectType ||
                        o.input.mainObjectId !== t.mainObjectId
                    ) {
                        let l = new c(i.createScreenSession().screenViewUuid, i),
                            a = { client: i, input: t, isReady: r, scope: r ? i.createScreenScope(t, l) : null, session: l };
                        return (u(a), (0, s.jsx)(n.k, { value: a, children: e }));
                    }
                    if (
                        o.isReady !== r ||
                        o.input.displayReasonId !== t.displayReasonId ||
                        o.input.pageIdForFrom !== t.pageIdForFrom ||
                        o.input.pagePlacement !== t.pagePlacement ||
                        o.input.pageStyle !== t.pageStyle
                    ) {
                        let l = { ...o, input: t, isReady: r, scope: r ? i.createScreenScope(t, o.session) : null };
                        return (u(l), (0, s.jsx)(n.k, { value: l, children: e }));
                    }
                    return (0, s.jsx)(n.k, { value: o, children: e });
                },
            );
        },
        77109: (e) => {
            e.exports = {
                root: 'KidsEditorialPlaylistsPage_root__HeHqc',
                scrollContainer: 'KidsEditorialPlaylistsPage_scrollContainer__Hy6HY',
                important: 'KidsEditorialPlaylistsPage_important__283cd',
                footer: 'KidsEditorialPlaylistsPage_footer___UaP5',
                item: 'KidsEditorialPlaylistsPage_item__0wBk2',
                content: 'KidsEditorialPlaylistsPage_content__6wWkP',
            };
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var s = i(88800),
                l = i(65724),
                n = i(61013),
                r = i(53548);
            let a = (e) => {
                    let { style: t, forwardRef: i, context: l, ...n } = e,
                        r = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        a = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: a, 'aria-label': r, style: { ...t }, ref: i, ...n });
                },
                o = (0, r.forwardRef)((e, t) => (0, s.jsx)(a, { forwardRef: t, ...e }));
            var c = i(16434),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: n, withHeader: r, withForceScroll: a, ...o } = e;
                    return (0, s.jsx)('div', {
                        className: (0, l.$)(d().scroller, { [d().scroller_withFooter]: n, [d().scroller_withHeader]: r, [d().scroller_withForceScroll]: a }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                p = (0, r.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var m = i(55482),
                _ = i(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: l,
                            debounceDurationInMs: n = 100,
                            totalCount: a = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [p, h] = (0, r.useState)(null),
                        g = (0, r.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == l || l(e), o.length > 0 && h(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < s; e++) i(e);
                                    }
                                }, n),
                            [n, l, t, i, o],
                        );
                    (0, r.useEffect)(() => {
                        o.length > 0 && p && g(p);
                    }, o);
                    let x = (0, r.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
                    return (0, s.jsx)(_.sN, { ref: d, rangeChanged: g, totalCount: a, endReached: x, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: a,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: _,
                            overscan: g = 700,
                            pageSize: x = 20,
                            totalCount: v,
                            totalRequests: y,
                            debounceDurationInMs: k,
                            initialItemCount: C,
                            minInitialItemCount: S = 20,
                            handleRef: j,
                            alwaysShowScrollbar: f = !1,
                            testId: b,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: P,
                            ...N
                        } = e,
                        [L, T] = (0, r.useState)(!1),
                        E = (0, r.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    T(e);
                                }, 100),
                            [],
                        ),
                        I = (0, r.useMemo)(() => {
                            var e, t;
                            return A
                                ? {
                                      Scroller: p,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: p,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, y, A]),
                        R = C ? Math.min(C, S) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(d().root, { [d().root_scrolling]: L || f, [d().root_notScrolling]: !L && !f }, t),
                        'data-test-id': b,
                        children: [
                            A && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: g,
                                components: I,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: E,
                                itemContent: m,
                                scrollerRef: j,
                                totalCount: v,
                                pageSize: x,
                                onPageHandler: a,
                                onRangeHandler: c,
                                debounceDurationInMs: k,
                                initialItemCount: R,
                                shouldTriggerRangeChangedOn: P,
                                ...N,
                            }),
                            A && (null == i ? void 0 : i.Footer) && i.Footer(),
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
            var s = i(88800),
                l = i(96706),
                n = i(53548),
                r = i(2058),
                a = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                p = i(30832);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, _] = (0, n.useState)(!1),
                    { formatMessage: h } = (0, r.A)();
                return (0, n.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let n = { ...(0, l.HO)(e), url: e.url, isLiked: !e.isLiked };
                    _(!0);
                    let r = await e.toggleLike();
                    (_(!1),
                        r === a.f.OK
                            ? i((0, s.jsx)(p.T, { playlist: n }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, m, e, h, i]);
            };
        },
        86298: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => p });
            var s = i(88800),
                l = i(65724),
                n = i(2058),
                r = i(17392),
                a = i(96817),
                o = i(52300),
                c = i(29504),
                d = i(84218),
                u = i.n(d);
            let p = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: p, ariaLabel: m } = e,
                    { formatNumber: _ } = (0, n.A)();
                return (0, s.jsx)(a.$, {
                    className: (0, l.$)(u().root, t),
                    onClick: p,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': r.S7.CARD_LIKES,
                    children: (0, s.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: _(d) }),
                });
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => b });
            var s = i(88800),
                l = i(65724),
                n = i(84961),
                r = i(2058),
                a = i(30282),
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
            let d = (e, t, i) => {
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
                u = (e) => {
                    let { formatMessage: t, language: i, tld: s, year: l } = e;
                    return {
                        year: l,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var p = i(62293),
                m = i(99839);
            let _ = (e) => e(new Date(), (0, m.m)());
            var h = i(51611),
                g = i(72288),
                x = i(11006),
                v = i.n(x),
                y = i(17392),
                k = i(29504),
                C = i(91292);
            let S = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(v().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(k.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(C.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, l.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(k.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(C.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                j = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: v().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: l } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, s.jsx)(C.N, { target: '_blank', href: l, className: v().link, 'data-test-id': y.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(k.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, l.$)(v().root, v().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, s.jsx)(j, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(S, { data: i.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: l, formatMessage: n } = (0, r.A)(),
                    { language: a } = (0, h.h)(),
                    o = u({ formatMessage: n, language: a, tld: i.tld, year: _(l) });
                return (0, s.jsx)(S, { className: t, data: o });
            });
            let b = (0, n.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: n, location: m, user: x } = (0, g.g)(),
                    { formatDate: y, formatMessage: k } = (0, r.A)(),
                    { isEnabled: C } = null != (t = (0, o.P)()) ? t : {},
                    { language: S } = (0, h.h)(),
                    j = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: l, tld: n, userRegion: r, year: a } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: l, userRegion: n } = e,
                                    r = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, l) },
                                    a = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, l) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, l) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, l) },
                                    p = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, s, l) },
                                    m = [r, o, u];
                                return (i && 'ru' === n && m.push(a), m.push(p), m);
                            })({ formatMessage: i, isWebApplication: s, language: l, tld: n, userRegion: r }),
                            disclaimer: (0, p.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: r,
                            }),
                            copyrights: u({ formatMessage: i, language: l, tld: n, year: a }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: k,
                        isWebApplication: a.$3,
                        tld: m.tld,
                        language: S,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: _(y),
                    });
                return (0, s.jsx)(f, { className: (0, l.$)({ [v().root_withOffsetForDeeplink]: C }, i), data: j });
            });
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => l, P: () => n });
            var s = i(53548);
            let l = (0, s.createContext)(null),
                n = () => (0, s.useContext)(l);
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
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7437, 4814, 9079, 3469, 8194, 1191, 8655, 6812, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 4732, 9087, 3979, 1928,
                9091, 9124, 900, 9934, 2470, 7670, 4441, 2088, 763, 2670, 7358,
            ],
            () => e((e.s = 27473)),
        ),
            (_N_E = e.O()));
    },
]);
