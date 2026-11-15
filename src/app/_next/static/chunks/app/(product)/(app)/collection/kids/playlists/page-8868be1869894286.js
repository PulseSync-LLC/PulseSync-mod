(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [453],
    {
        4370: (t, e, i) => {
            'use strict';
            i.d(e, { Z: () => l });
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
        6322: (t, e, i) => {
            'use strict';
            i.d(e, { l: () => r });
            var s = i(88800),
                l = i(15077),
                a = i(33719);
            let r = (t) => {
                let { playlist: e, closeToast: i } = t;
                return (0, s.jsx)(a.k, {
                    closeToast: i,
                    entityVariant: l.c.PLAYLIST,
                    entityUrl: e.url,
                    coverUri: e.coverUri,
                    entityTitle: e.title,
                    isPinned: e.isPinned,
                    radius: 's',
                });
            };
        },
        9473: (t, e, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 11882)));
        },
        11006: (t) => {
            t.exports = {
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
        11882: (t, e, i) => {
            'use strict';
            i.d(e, { CollectionKidsPlaylistsPage: () => R });
            var s = i(88800),
                l = i(65724),
                a = i(84961),
                r = i(53548),
                n = i(2058),
                o = i(88969),
                c = i(87999),
                d = i(76903),
                u = i(17392),
                m = i(29504),
                p = i(32596),
                _ = i(69630),
                h = i(41911),
                y = i(98427),
                x = i(46422),
                C = i(44230),
                k = i(37670),
                v = i(72288),
                A = i(54320),
                g = i(86790),
                L = i(60266),
                P = i(93317),
                N = i(37770),
                E = i(79418),
                T = i(71104),
                j = i(45654),
                S = i(87110),
                f = i.n(S);
            let R = (0, a.PA)(() => {
                let {
                        settings: { isMobile: t },
                        collection: {
                            kids: { playlists: e },
                        },
                    } = (0, v.g)(),
                    { contentScrollRef: i, setContentScrollRef: a } = (0, C.g)(),
                    S = (0, x.W)(),
                    { formatMessage: R } = (0, n.A)(),
                    b = (0, r.useCallback)(
                        (t) => {
                            e.getData({ page: t, pageSize: T.c });
                        },
                        [e],
                    );
                (0, A.X)(e.pagesLoader, b);
                let O = (0, r.useMemo)(() => ({ Footer: () => (0, s.jsx)(L.A, { children: (0, s.jsx)(g.w, { className: f().footer }) }) }), []),
                    I = e.isShimmerVisible ? 20 : e.items.length;
                return ((0, r.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, k.J)(e.isResolved),
                e.isNeededToLoad && (0, r.use)(e.getData({ pageSize: T.c })),
                e.isRejected)
                    ? (0, s.jsx)(p.SomethingWentWrong, {})
                    : e.isEmpty
                      ? (0, s.jsx)(j.i, { title: R({ id: 'entity-names.artist-playlist' }) })
                      : (0, s.jsx)(d.a, {
                            pageId: c.AppScreen.CollectionKidsPlaylists,
                            pageIdForFrom: y.b.COLLECTION_KIDS_PLAYLISTS,
                            children: (0, s.jsx)(_.h, {
                                scrollElement: i,
                                outerTitle: R({ id: 'entity-names.artist-playlist' }),
                                children: (0, s.jsxs)('div', {
                                    className: f().root,
                                    'data-test-id': u.Xk.collection.COLLECTION_KIDS_PLAYLISTS_PAGE,
                                    children: [
                                        (0, s.jsx)(P.Y, {
                                            variant: P.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: S.canBack,
                                            children: (0, s.jsx)(m.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, s.jsx)(o.A, { id: 'entity-names.artist-playlist' }),
                                            }),
                                        }),
                                        (0, s.jsx)(E.$, {
                                            className: (0, l.$)(f().scrollContainer, f().important),
                                            customComponents: O,
                                            itemContentCallback: (t) => {
                                                let i = e.items[t],
                                                    l = R({ id: 'loading-messages.entity-is-loading' }, { entityName: R({ id: 'entity-names.album' }) });
                                                return i
                                                    ? (0, s.jsx)(h.B, { playlist: i, contentLinesCount: 3 }, i.id)
                                                    : (0, s.jsx)(N.V, { 'aria-label': l, linesCount: 3 });
                                            },
                                            initialItemCount: I,
                                            totalCount: I,
                                            onGetDataByPage: b,
                                            totalRequests: e.requestsCount,
                                            pageSize: T.c,
                                            listClassName: f().content,
                                            itemClassName: f().item,
                                            handleRef: a,
                                            context: { listAriaLabel: R({ id: 'entity-names.albums' }) },
                                            isMobileLayout: t,
                                            useWindowScroll: t,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        13946: (t, e, i) => {
            'use strict';
            i.d(e, { i: () => K });
            var s = i(88800),
                l = i(65724),
                a = i(84961),
                r = i(53548),
                n = i(79070),
                o = i(17610),
                c = i(24548),
                d = i(29993),
                u = i(72288),
                m = i(35994);
            let p = (t, e) => {
                let { withLink: i, separator: s } = e,
                    l = i && !t.various ? (0, m.R)(t.id) : null;
                return { artist: t, name: t.name, separator: s, link: l };
            };
            var _ = i(21010),
                h = i.n(_),
                y = i(17392),
                x = i(29504),
                C = i(91292),
                k = i(2058),
                v = i(87999),
                A = i(80643),
                g = i(78940),
                L = i(55693),
                P = i(58217);
            let N = (0, a.PA)((t) => {
                    let { item: e, linkClassName: i, captionClassName: l, captionSize: a = 'm', allArtistsTitle: r, withCustomTooltip: n, hoverSettings: c } = t,
                        {
                            name: m,
                            link: p,
                            title: _,
                            ariaLabel: h,
                            tooltipText: N,
                            isTooltipEnabled: E,
                            handleNavigate: T,
                        } = ((t) => {
                            var e, i;
                            let { item: s, allArtistsTitle: l, withCustomTooltip: a } = t,
                                { formatMessage: r } = (0, k.A)(),
                                n = ((t, e) => {
                                    let { item: i, allArtistsTitle: s, withCustomTooltip: l } = t,
                                        a = s || i.name;
                                    return {
                                        ...i,
                                        title: l ? void 0 : a,
                                        ariaLabel: i.link ? e({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: a,
                                        isTooltipEnabled: !s && l,
                                    };
                                })({ item: s, allArtistsTitle: l, withCustomTooltip: a }, r),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                m = (0, g.Z)(null != (i = null == (e = n.link) ? void 0 : e.href) ? i : n.artist.url),
                                { sendNavigateSearchFeedback: p } = (0, L.z)(),
                                _ = (0, A.S)(),
                                h = (0, d.c)((t) => {
                                    (c && o.isOpened && o.close(), m(t));
                                }),
                                y = ((t) => {
                                    let { artist: e, callback: i } = t,
                                        { currentTrackInfo: s, fullscreenPlayer: l, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: r } = s;
                                    return (0, P.l)({
                                        entity: e,
                                        callback: i,
                                        onBeforeHandle: (t) => {
                                            (null == t || t.stopPropagation(), r.isOpened && (s.reset(), r.close()), l.modal.isOpened && l.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: n.artist, callback: h }),
                                x = (0, d.c)((t) => {
                                    (_({ to: v.AppScreen.ArtistScreen }), null == p || p(), y(t));
                                });
                            return { ...n, handleNavigate: x };
                        })({ item: e, allArtistsTitle: r, withCustomTooltip: n });
                    return p
                        ? (0, s.jsx)(C.N, {
                              ...p,
                              'aria-label': h,
                              className: i,
                              onClick: T,
                              title: _,
                              'data-test-id': y.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: E,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: N,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: l, children: m }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: E,
                              offsetOptions: 4,
                              placement: 'top',
                              text: N,
                              hoverSettings: c,
                              children: (0, s.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: l,
                                  title: _,
                                  'data-test-id': y.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                E = (t) => {
                    let { group: e, linkClassName: i, captionClassName: l, captionSize: a, allArtistsTitle: n, withCustomTooltip: o, hoverSettings: c } = t;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            e.primary.separator,
                            (0, s.jsx)(N, {
                                item: e.primary,
                                linkClassName: i,
                                captionClassName: l,
                                captionSize: a,
                                allArtistsTitle: n,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            e.decomposed.map((t) =>
                                (0, s.jsxs)(
                                    r.Fragment,
                                    {
                                        children: [
                                            t.separator,
                                            (0, s.jsx)(N, {
                                                item: t,
                                                linkClassName: i,
                                                captionClassName: l,
                                                captionSize: a,
                                                allArtistsTitle: n,
                                                withCustomTooltip: o,
                                                hoverSettings: c,
                                            }),
                                        ],
                                    },
                                    t.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var T = i(88969),
                j = i(65453);
            let S = (t) => {
                let { spoilerArtistsCount: e, spoilerClassName: i, handleOnSpoilerClick: a } = t;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(j.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(h().spoiler, i),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': y.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(T.A, { id: 'entity-names.number-of-more-artists', values: { counter: e } }),
                        }),
                    ],
                });
            };
            var f = i(61013),
                R = i(87819),
                b = i(40634),
                O = i(48468),
                I = i.n(O);
            let w = (0, a.PA)((t) => {
                    let { label: e, artists: i, forwardRef: l } = t;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, R.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: l, children: e }),
                            (0, s.jsx)(o.ZI, { className: I().tooltipContent, children: i.map((t) => (0, s.jsx)(b.V, { artist: t, className: I().artistItem }, t.id)) }),
                        ],
                    });
                }),
                D = (0, r.forwardRef)((t, e) => (0, s.jsx)(w, { forwardRef: e, ...t }));
            var M = i(19934),
                z = i(70396),
                F = i.n(z);
            let Y = (0, a.PA)((t) => {
                    let { label: e, artists: i } = t,
                        { formatMessage: a } = (0, k.A)();
                    return (0, s.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, l.$)(F().root, F().important),
                        label: e,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((t) => (0, s.jsx)(b.V, { artist: t }, t.id)),
                    });
                }),
                H = (0, a.PA)((t) => {
                    let { artists: e = [], label: i, labelRef: l } = t,
                        [a, o] = (0, r.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let t = l.current;
                            t && o(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);
                        }),
                        p = (0, n.L)(() =>
                            (0, f.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, r.useEffect)(
                            () => (
                                window.addEventListener('resize', p),
                                m(),
                                () => {
                                    window.removeEventListener('resize', p);
                                }
                            ),
                            [p, m],
                        ),
                        (0, r.useEffect)(() => {
                            m();
                        }, [e, m]),
                        0 !== e.length)
                    )
                        return (a || c) && (!c || 1 !== e.length) ? (c ? (0, s.jsx)(Y, { artists: e, label: i }) : (0, s.jsx)(D, { artists: e, label: i })) : i;
                }),
                K = (0, a.PA)((t) => {
                    let {
                            className: e,
                            lineClamp: i,
                            spoilerClassName: a,
                            linkClassName: m,
                            captionClassName: _,
                            captionSize: y,
                            variant: x = 'breakAll',
                            spoilerComponent: C,
                            ...k
                        } = t,
                        v = ((t) => {
                            var e, i, s;
                            let { separator: l, visibleArtistsCount: a, withLink: n, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = t,
                                _ = null != (e = t.artists) ? e : [],
                                h = null == (i = t.withAllArtistsTitle) || i,
                                y = null == (s = t.withCustomTooltip) || s,
                                x = (0, r.useRef)(null),
                                [C, k] = (0, r.useState)(!1),
                                {
                                    settings: { isMobile: v },
                                } = (0, u.g)(),
                                A = ((!v || 1 === _.length) && m) || !m,
                                g = ((t, e) => {
                                    var i, s, l;
                                    let a = null == (i = null == e ? void 0 : e.withComposer) || i,
                                        r = null == (s = null == e ? void 0 : e.withLink) || s,
                                        n = null != (l = null == e ? void 0 : e.separator) ? l : ', ',
                                        o = t
                                            .flatMap((t) => {
                                                var e;
                                                let i = (null != (e = t.decomposed) ? e : []).map((t) => t.name);
                                                return [t.name, ...i];
                                            })
                                            .join(n),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((t, e) => {
                                            let { visibleArtistsCount: i, withComposer: s } = e;
                                            return {
                                                visibleArtists: (i ? t.slice(0, i) : t).filter((t) => s || !t.isComposer),
                                                hiddenArtistsCount: i && i < t.length ? t.length - i : 0,
                                            };
                                        })(t, { withComposer: a, visibleArtistsCount: null == e ? void 0 : e.visibleArtistsCount });
                                    return {
                                        groups: c.map((t, i) =>
                                            ((t, e) => {
                                                var i;
                                                let { withLink: s, separator: l, isFirst: a } = e;
                                                return {
                                                    primary: p(t, { withLink: s, separator: a ? void 0 : l }),
                                                    decomposed: (null != (i = t.decomposed) ? i : []).map((t) => {
                                                        let e = l ? t.separator : '';
                                                        return p(t, { withLink: s, separator: e });
                                                    }),
                                                };
                                            })(t, { withLink: r && t.id !== (null == e ? void 0 : e.artistIdWithoutLink), separator: n, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(_, { separator: l, visibleArtistsCount: C ? void 0 : a, withComposer: o, withLink: !!A && n, artistIdWithoutLink: c }),
                                L = h ? g.allArtistsTitle : '',
                                P = (0, d.c)((t) => {
                                    (k(!0), t.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: g.groups,
                                hiddenArtistsCount: g.hiddenArtistsCount,
                                allArtistsTitle: L,
                                withCustomTooltip: y,
                                withContextMenu: m,
                                labelRef: x,
                                handleOnSpoilerClick: P,
                                isTooltipEnabled: !!L && y && !m && !v,
                                title: !L || y || m ? void 0 : L,
                            };
                        })(k),
                        A = (0, n.L)(() =>
                            v.hiddenArtistsCount <= 0
                                ? null
                                : (0, r.isValidElement)(C)
                                  ? C
                                  : (0, s.jsx)(S, { spoilerClassName: a, spoilerArtistsCount: v.hiddenArtistsCount, handleOnSpoilerClick: v.handleOnSpoilerClick }),
                        ),
                        g = (0, s.jsx)(o.m_, {
                            referenceRef: v.labelRef,
                            enabled: v.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: v.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, l.$)(h().root, h()['root_variant_'.concat(x)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, e),
                                title: v.title,
                                children: [
                                    v.groups.map((t) =>
                                        (0, s.jsx)(
                                            E,
                                            {
                                                group: t,
                                                linkClassName: m,
                                                captionClassName: _,
                                                captionSize: y,
                                                allArtistsTitle: v.allArtistsTitle,
                                                withCustomTooltip: v.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            t.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return v.withContextMenu ? (0, s.jsx)(H, { labelRef: v.labelRef, artists: v.artists, label: g }) : g;
                });
        },
        17657: (t) => {
            t.exports = {
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
        21010: (t) => {
            t.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        24460: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => m });
            var s = i(88800),
                l = i(96706),
                a = i(53548),
                r = i(2058),
                n = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(6322);
            let m = (t) => {
                let { user: e } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, r.A)(),
                    [p, _] = (0, a.useState)(!1);
                return (0, a.useCallback)(async () => {
                    if (!e.isAuthorized) return void i((0, s.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (p) return;
                    let a = { ...(0, l.HO)(t), url: t.url, isPinned: !t.isPinned };
                    _(!0);
                    let r = await t.togglePin();
                    (_(!1),
                        r
                            ? i((0, s.jsx)(u.l, { playlist: a }), { containerId: n.u.INFO })
                            : i((0, s.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e.isAuthorized, p, t, i, m]);
            };
        },
        24548: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        30832: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => r });
            var s = i(88800),
                l = i(15077),
                a = i(42729);
            let r = (t) => {
                let { playlist: e, closeToast: i } = t;
                return (0, s.jsx)(a.O, {
                    entityVariant: l.c.PLAYLIST,
                    entityUrl: e.url,
                    collectionUrl: '/collection',
                    entityTitle: e.title,
                    isLiked: e.isLiked,
                    closeToast: i,
                    coverUri: e.coverUri,
                });
            };
        },
        35994: (t, e, i) => {
            'use strict';
            i.d(e, { R: () => l });
            var s = i(67174);
            let l = (t) => (0, s.u)('/artist/:artistId', { params: { artistId: t } });
        },
        40634: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => k });
            var s = i(88800),
                l = i(65724),
                a = i(84961),
                r = i(53548),
                n = i(87999),
                o = i(80643),
                c = i(17392),
                d = i(29993),
                u = i(90688),
                m = i(19934),
                p = i(7555),
                _ = i(29504),
                h = i(78940),
                y = i(72288),
                x = i(80932),
                C = i.n(x);
            let k = (0, a.PA)((t) => {
                let { artist: e, className: i } = t,
                    { fullscreenPlayer: a } = (0, y.g)(),
                    x = (0, h.Z)(e.url),
                    v = (0, o.S)(),
                    A = (0, r.useMemo)(() => {
                        var t;
                        return (
                            'decomposed' in e &&
                            (null == (t = e.decomposed) ? void 0 : t.reduce((t, e) => (t.push((0, s.jsx)(k, { artist: e, className: i }, e.id)), t), []))
                        );
                    }, [e, i]),
                    g = (0, d.c)((t) => {
                        (a.modal.isOpened && a.modal.close(), v({ to: n.AppScreen.ArtistScreen }), x(t));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(m.Dr, {
                            className: (0, l.$)(C().root, i),
                            onClick: g,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(p.t, {
                                    radius: 'round',
                                    className: C().cover,
                                    children: (0, s.jsx)(u._V, { withAvatarReplace: !0, src: e.coverUri, size: 100, fit: 'contain', className: C().image }),
                                }),
                                (0, s.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: e.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        41911: (t, e, i) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = i(52300);
// for PulseSync: END import the download icon for playlist menu actions
            i.d(e, { B: () => Q });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var s = i(88800),
                l = i(65724),
                a = i(84961),
                r = i(53548),
                n = i(2058),
                o = i(87999),
                c = i(62414),
                d = i(80643),
                u = i(33979),
                m = i(17392),
                p = i(18593),
                _ = i(29993),
                h = i(79070),
                y = i(29832),
                x = i(52300),
                C = i(7555),
                k = i(29504),
                v = i(13946),
                A = i(85902),
                g = i(24460),
                L = i(5407),
                P = i(57934),
                N = i(84384),
                E = i(4795),
                T = i(78940),
                j = i(55693),
                S = i(39079),
                f = i(72288),
                R = i(86298),
                b = i(81877),
                O = i(49738),
                I = i(91292),
                w = i(56862),
                D = i(16704),
                M = i(56446),
                z = i(36207),
                F = i(47513),
                Y = i(19934),
                H = i(48749),
                K = i(22505),
                B = i(9618),
                V = i(95210),
                W = i(46936),
                U = i(97956),
                X = i(93091),
                $ = i(27817),
                G = i(15425);
            let q = (0, a.PA)((t) => {
                var e;
                let { playlist: i, onOpenChange: l, open: a, ...r } = t,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: d } = (0, B.q)(),
                    {
                        experiments: u,
                        settings: { isMobile: p },
                        trailer: h,
                        user: y,
                    } = (0, f.g)(),
                    x = (0, A.K)(i),
                    C = (0, g.A)(i),
                    k = (0, P.F)(),
                    { formatMessage: v } = (0, n.A)(),
                    N = (0, L.P)(),
                    E = u.checkExperiment(U.z.WebEditorsFeatures, 'on'),
                    T = (0, H.A)({ entityVariant: W.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, V.N)(a);
                let j = (0, _.c)(() => {
                    if (c) return void d();
                    N() || (h.openPlaylistTrailer(i.id), k(o.DomainObjectType.Playlist, i.id));
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
                return (0, s.jsxs)(Y.W1, {
                    title: i.title,
                    onOpenChange: l,
                    open: a,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: v({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: m.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...r,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        E && (0, s.jsx)(K.d, { entityVariant: W.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : T }),
                        !p && (0, s.jsx)($.L, { onClick: C, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)(X.T, { onClick: x, isLiked: i.isLiked, disabled: !y.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, s.jsx)(Y.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, s.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (e = i.trailer) ? void 0 : e.isAvailable) && (0, s.jsx)(G.N, { onClick: j, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var J = i(17657),
                Z = i.n(J);
            let Q = (0, a.PA)((t) => {
                let { className: e, playlist: i, children: a, contentLinesCount: Y, customDescription: H, onCoverMouseDown: K } = t,
                    B = (0, c.D)(),
                    {
                        trailer: V,
                        user: W,
                        paywall: { modal: U },
                    } = (0, f.g)(),
                    { from: X, utmLink: $ } = (0, N.f)({ contextId: i.uuid, contextType: p.K.Playlist }),
                    { formatMessage: G } = (0, n.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: Q, sendPlaySearchFeedback: tt } = (0, j.z)(),
                    [te, ti] = (0, r.useState)(!1),
                    [ts, tl] = (0, r.useState)(!1),
                    [ta, tr] = (0, r.useState)(!1),
                    tn = (0, F.r)(i),
                    to = (0, A.K)(i),
                    tc = (0, g.A)(i),
                    td = (0, d.S)(),
                    tu = (0, u.g)(),
                    tm = (0, T.Z)(i.url),
                    tp = (0, P.F)(),
                    t_ = (0, L.P)(),
                    th = (0, _.c)((t) => {
                        if ((t.stopPropagation(), t_())) return void t.preventDefault();
                        (V.setUtmLink($), V.openPlaylistTrailer(i.id), tp(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ty, tx] = (0, r.useState)(!1),
                    { isPlaying: tC, togglePlay: tk } = (0, S.D)({
                        playContextParams: { contextData: { type: p.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    tv = (0, _.c)(() => {
                        (td({ to: o.AppScreen.PlaylistScreen }), null == Q || Q());
                    }),
                    tA = (0, _.c)((t) => {
                        (tv(), tm(t));
                    }),
                    tg = (0, E.N)(),
                    tL = (0, _.c)(() => {
                        if (!t_()) {
                            if (tg) return void U.open();
                            (te || tC || (ti(!0), null == tt || tt()), tk(), tC || tu());
                        }
                    }),
                    tP = (0, _.c)(() => {
                        (ts || i.isLiked || (tl(!0), null == J || J()), to());
                    }),
                    tN = (0, _.c)((t) => {
                        (t.preventDefault(), t.stopPropagation());
                    }),
                    tE = (0, _.c)((t) => {
                        (tr(t), tx(t));
                    }),
                    tT = (0, r.useMemo)(() => {
                        var t;
                        return H
                            ? (0, s.jsx)(k.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: H }, i.getKey('description'))
                            : (null == (t = i.artists) ? void 0 : t.length)
                              ? (0, s.jsx)(
                                    v.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [H, i]),
                    tj = (0, h.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                O.c,
                                {
                                    className: (0, l.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: tP,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !W.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    tS = (0, r.useMemo)(() => {
                        var t;
                        if (null == i || null == (t = i.trailer) ? void 0 : t.isAvailable)
                            return (0, s.jsx)(
                                z.n,
                                {
                                    children: (0, s.jsx)(
                                        M.k,
                                        { className: (0, l.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: th },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [th, i]),
                    tf = (0, r.useMemo)(
                        () =>
                            (0, s.jsx)(
                                w.O,
                                { onClick: tc, isPinned: i.isPinned, className: (0, l.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [tc, i],
                    ),
                    tR = (0, r.useMemo)(
                        () =>
                            (0, s.jsx)(C.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': m.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: tA,
                                    onMouseDown: K,
                                    children: [
                                        (0, s.jsx)(b.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: tn,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(y.hg, {
                                            isVisible: ta || ty,
                                            className: Z().controls,
                                            playControl: (0, s.jsx)(
                                                D.D,
                                                {
                                                    className: (0, l.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: tL,
                                                    isPlaying: tC,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: tj,
                                            menuControl: (0, s.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: tE,
                                                    open: ta,
                                                    onClick: tN,
                                                    className: (0, l.$)(Z().menuButton, Z().control),
                                                    icon: (0, s.jsx)(x.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': m.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: tf,
                                            trailerControl: tS,
                                        }),
                                    ],
                                }),
                            }),
                        [tA, K, i, tn, ta, ty, tL, tC, tj, tE, tN, tf, tS],
                    ),
                    tb = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(y.MN, {
                    ref: B,
                    'aria-label': tn,
                    className: (0, l.$)(Z().root, e),
                    title: (0, s.jsx)(k.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': m.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(I.N, { className: Z().titleLink, href: i.url, tabIndex: -1, onClick: tv, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(I.N, { className: Z().srTitleLink, href: i.url, onClick: tv, children: i.title }),
                    contentLinesCount: Y,
                    view: tR,
                    description: tT,
                    'data-test-id': m.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        tb &&
                            (0, s.jsx)(R.x, {
                                ariaLabel: G({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: to,
                            }),
                        a,
                    ],
                });
            });
        },
        47513: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => a });
            var s = i(53548),
                l = i(2058);
            let a = (t) => {
                let { formatMessage: e } = (0, l.A)();
                return (0, s.useMemo)(() => {
                    let i = '';
                    t.isLiked && !t.actualLikesCount
                        ? (i = e({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof t.actualLikesCount &&
                          (i =
                              t.actualLikesCount > 0
                                  ? e({ id: 'entity-names.likes-counter' }, { counter: t.actualLikesCount })
                                  : e({ id: 'entity-names.likes-counter-empty' }));
                    let s = e({ id: 'entity-names.playlist-name' }, { playlistName: t.title });
                    return ''.concat(s, ' ').concat(i);
                }, [e, t]);
            };
        },
        48468: (t) => {
            t.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        60266: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => r });
            var s = i(88800);
            i(30282);
            var l = i(11006),
                a = i.n(l);
            let r = (t) => {
                let { children: e } = t;
                return (0, s.jsx)('footer', { className: a().empty });
            };
        },
        62293: (t, e, i) => {
            'use strict';
            i.d(e, { v: () => l });
            var s = i(97956);
            let l = (t) => {
                let { checkExperiment: e, getDisclaimerContent: i, getExplicitContent: l, userRegion: a } = t;
                return 'ru' === a && e(s.z.WebNextFooterDisclaimer, 'on') ? i() : l();
            };
        },
        70396: (t) => {
            t.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        70621: (t, e, i) => {
            'use strict';
            i.d(e, { D: () => o });
            var s = i(53548),
                l = i(63582),
                a = i(245),
                r = i(22681),
                n = i(56374);
            let o = (0, l.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let t = (0, a.N)(),
                    e = (0, r.w)(),
                    i = (0, s.useMemo)(() => (e ? t.createBlockReporter(e.snapshot) : null), [t, e]);
                return (0, n.c)((t) => {
                    e?.object && i && i.actionPerformed({ ...t, viewUuid: (e.object.activeViewSession ?? e.object.viewSession).start() });
                });
            });
        },
        80932: (t) => {
            t.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        84218: (t) => {
            t.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        85902: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => p });
            var s = i(88800),
                l = i(96706),
                a = i(53548),
                r = i(2058),
                n = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(30832);
            let p = (t) => {
                let { user: e } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [p, _] = (0, a.useState)(!1),
                    { formatMessage: h } = (0, r.A)();
                return (0, a.useCallback)(async () => {
                    if (!e.isAuthorized) return void i((0, s.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (p) return;
                    let a = { ...(0, l.HO)(t), url: t.url, isLiked: !t.isLiked };
                    _(!0);
                    let r = await t.toggleLike();
                    (_(!1),
                        r === n.f.OK
                            ? i((0, s.jsx)(m.T, { playlist: a }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e.isAuthorized, p, t, h, i]);
            };
        },
        86298: (t, e, i) => {
            'use strict';
            i.d(e, { x: () => m });
            var s = i(88800),
                l = i(65724),
                a = i(2058),
                r = i(17392),
                n = i(96817),
                o = i(52300),
                c = i(29504),
                d = i(84218),
                u = i.n(d);
            let m = (t) => {
                let { className: e, isLiked: i, likesCount: d, handleLikeClick: m, ariaLabel: p } = t,
                    { formatNumber: _ } = (0, a.A)();
                return (0, s.jsx)(n.$, {
                    className: (0, l.$)(u().root, e),
                    onClick: m,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': p,
                    'data-test-id': r.S7.CARD_LIKES,
                    children: (0, s.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: _(d) }),
                });
            };
        },
        86790: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => N });
            var s = i(88800),
                l = i(65724),
                a = i(84961),
                r = i(2058),
                n = i(30282),
                o = i(94144),
                c = (function (t) {
                    return (
                        (t.YANDEX = 'YANDEX'),
                        (t.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (t.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (t.AGREEMENT = 'AGREEMENT'),
                        (t.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (t.HELP = 'HELP'),
                        (t.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        t
                    );
                })({});
            let d = (t, e, i) => {
                    switch (t) {
                        case c.YANDEX:
                            if ('ru' === e) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(e, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(e, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(e, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(e, '/legal/confidential/').concat(i);
                    }
                },
                u = (t) => {
                    let { formatMessage: e, language: i, tld: s, year: l } = t;
                    return {
                        year: l,
                        yandexMusic: { id: c.YANDEX, title: e({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: e({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var m = i(62293),
                p = i(99839);
            let _ = (t) => t(new Date(), (0, p.m)());
            var h = i(51611),
                y = i(72288),
                x = i(11006),
                C = i.n(x),
                k = i(17392),
                v = i(29504),
                A = i(91292);
            let g = (t) => {
                    let { className: e, data: i } = t;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(C().copyrights, e),
                        'data-test-id': k.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(A.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, l.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': k.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(v.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(A.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: C().copyrightLink,
                                'data-test-id': k.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                L = (t) => {
                    let { disclaimer: e, links: i } = t;
                    return (0, s.jsxs)('div', {
                        className: C().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: C().list,
                                'data-test-id': k.S7.FOOTER_LINKS_LIST,
                                children: i.map((t) => {
                                    let { id: e, title: i, url: l } = t;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: C().item,
                                            children: (0, s.jsx)(A.N, { target: '_blank', href: l, className: C().link, 'data-test-id': k.S7.FOOTER_LINK, children: i }),
                                        },
                                        e,
                                    );
                                }),
                            }),
                            (0, s.jsx)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: C().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: e },
                                'data-test-id': k.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                P = (t) => {
                    let { className: e, data: i } = t;
                    return (0, s.jsxs)('footer', {
                        className: (0, l.$)(C().root, C().important, e),
                        'data-test-id': k.S7.FOOTER,
                        children: [(0, s.jsx)(L, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(g, { data: i.copyrights })],
                    });
                };
            (0, a.PA)((t) => {
                let { className: e } = t,
                    { location: i } = (0, y.g)(),
                    { formatDate: l, formatMessage: a } = (0, r.A)(),
                    { language: n } = (0, h.h)(),
                    o = u({ formatMessage: a, language: n, tld: i.tld, year: _(l) });
                return (0, s.jsx)(g, { className: e, data: o });
            });
            let N = (0, a.PA)((t) => {
                var e;
                let { className: i } = t,
                    { experiments: a, location: p, user: x } = (0, y.g)(),
                    { formatDate: k, formatMessage: v } = (0, r.A)(),
                    { isEnabled: A } = null != (e = (0, o.P)()) ? e : {},
                    { language: g } = (0, h.h)(),
                    L = ((t) => {
                        let { checkExperiment: e, formatMessage: i, isWebApplication: s, language: l, tld: a, userRegion: r, year: n } = t;
                        return {
                            links: ((t) => {
                                let { formatMessage: e, isWebApplication: i, tld: s, language: l, userRegion: a } = t,
                                    r = { id: c.COPYRIGHT_HOLDER, title: e({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, l) },
                                    n = { id: c.PRIVACY_POLICY, title: e({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, l) },
                                    o = { id: c.AGREEMENT, title: e({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, l) },
                                    u = { id: c.RECOMMENDATION_RULES, title: e({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, l) },
                                    m = { id: c.HELP, title: e({ id: 'footer.links-help' }), url: d(c.HELP, s, l) },
                                    p = [r, o, u];
                                return (i && 'ru' === a && p.push(n), p.push(m), p);
                            })({ formatMessage: i, isWebApplication: s, language: l, tld: a, userRegion: r }),
                            disclaimer: (0, m.v)({
                                checkExperiment: e,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: r,
                            }),
                            copyrights: u({ formatMessage: i, language: l, tld: a, year: n }),
                        };
                    })({
                        checkExperiment: (t, e) => a.checkExperiment(t, e),
                        formatMessage: v,
                        isWebApplication: n.$3,
                        tld: p.tld,
                        language: g,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: _(k),
                    });
                return (0, s.jsx)(P, { className: (0, l.$)({ [C().root_withOffsetForDeeplink]: A }, i), data: L });
            });
        },
        87110: (t) => {
            t.exports = {
                root: 'CollectionKidsPlaylistsPage_root__RXH06',
                scrollContainer: 'CollectionKidsPlaylistsPage_scrollContainer__F_oj2',
                important: 'CollectionKidsPlaylistsPage_important__5V_zc',
                footer: 'CollectionKidsPlaylistsPage_footer__R41Ol',
                item: 'CollectionKidsPlaylistsPage_item__ht83l',
                content: 'CollectionKidsPlaylistsPage_content__6Oo1m',
            };
        },
        94144: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => l, P: () => a });
            var s = i(53548);
            let l = (0, s.createContext)(null),
                a = () => (0, s.useContext)(l);
        },
        99839: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
    },
    (t) => {
        (t.O(
            0,
            [
                7908, 4700, 3248, 5038, 1147, 1191, 8655, 2691, 8767, 983, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 4732, 9087, 3979,
                6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 2088, 9755, 763, 2670, 7358,
            ],
            () => t((t.s = 9473)),
        ),
            (_N_E = t.O()));
    },
]);
