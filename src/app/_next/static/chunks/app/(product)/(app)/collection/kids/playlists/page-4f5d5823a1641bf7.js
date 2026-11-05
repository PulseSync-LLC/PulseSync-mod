(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [453],
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
        7628: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var s = i(88800),
                l = i(88969),
                n = i(58390),
                r = i(17392),
                a = i(29993),
                o = i(96817),
                c = i(29504),
                d = i(99890),
                u = i(4086),
                p = i(41928);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: _ = !0, buttonText: h, isBlock: g, key: x, className: y } = e,
                    v = (0, n.useRouter)(),
                    C = (0, p.N)().get(u.QG),
                    k = (0, a.c)(() => {
                        C.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), v.push(C.authorizationUrl));
                    });
                return (0, s.jsx)(
                    o.$,
                    {
                        onClick: k,
                        className: y,
                        isBlock: g,
                        color: m,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': r.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
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
        11882: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsPlaylistsPage: () => L });
            var s = i(88800),
                l = i(65724),
                n = i(84961),
                r = i(53548),
                a = i(2058),
                o = i(88969),
                c = i(87999),
                d = i(76903),
                u = i(17392),
                p = i(29504),
                m = i(32596),
                _ = i(69630),
                h = i(41911),
                g = i(98427),
                x = i(46422),
                y = i(44230),
                v = i(37670),
                C = i(72288),
                k = i(54320),
                j = i(86790),
                N = i(60266),
                E = i(93317),
                S = i(37770),
                A = i(79418),
                b = i(71104),
                f = i(45654),
                T = i(87110),
                P = i.n(T);
            let L = (0, n.PA)(() => {
                let {
                        settings: { isMobile: e },
                        collection: {
                            kids: { playlists: t },
                        },
                    } = (0, C.g)(),
                    { contentScrollRef: i, setContentScrollRef: n } = (0, y.g)(),
                    T = (0, x.W)(),
                    { formatMessage: L } = (0, a.A)(),
                    O = (0, r.useCallback)(
                        (e) => {
                            t.getData({ page: e, pageSize: b.c });
                        },
                        [t],
                    );
                (0, k.X)(t.pagesLoader, O);
                let I = (0, r.useMemo)(() => ({ Footer: () => (0, s.jsx)(N.A, { children: (0, s.jsx)(j.w, { className: P().footer }) }) }), []),
                    R = t.isShimmerVisible ? 20 : t.items.length;
                return ((0, r.useEffect)(
                    () => () => {
                        t.reset();
                    },
                    [t],
                ),
                (0, v.J)(t.isResolved),
                t.isNeededToLoad && (0, r.use)(t.getData({ pageSize: b.c })),
                t.isRejected)
                    ? (0, s.jsx)(m.SomethingWentWrong, {})
                    : t.isEmpty
                      ? (0, s.jsx)(f.i, { title: L({ id: 'entity-names.artist-playlist' }) })
                      : (0, s.jsx)(d.a, {
                            pageId: c.AppScreen.CollectionKidsPlaylists,
                            pageIdForFrom: g.b.COLLECTION_KIDS_PLAYLISTS,
                            children: (0, s.jsx)(_.h, {
                                scrollElement: i,
                                outerTitle: L({ id: 'entity-names.artist-playlist' }),
                                children: (0, s.jsxs)('div', {
                                    className: P().root,
                                    'data-test-id': u.Xk.collection.COLLECTION_KIDS_PLAYLISTS_PAGE,
                                    children: [
                                        (0, s.jsx)(E.Y, {
                                            variant: E.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: T.canBack,
                                            children: (0, s.jsx)(p.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, s.jsx)(o.A, { id: 'entity-names.artist-playlist' }),
                                            }),
                                        }),
                                        (0, s.jsx)(A.$, {
                                            className: (0, l.$)(P().scrollContainer, P().important),
                                            customComponents: I,
                                            itemContentCallback: (e) => {
                                                let i = t.items[e],
                                                    l = L({ id: 'loading-messages.entity-is-loading' }, { entityName: L({ id: 'entity-names.album' }) });
                                                return i
                                                    ? (0, s.jsx)(h.B, { playlist: i, contentLinesCount: 3 }, i.id)
                                                    : (0, s.jsx)(S.V, { 'aria-label': l, linesCount: 3 });
                                            },
                                            initialItemCount: R,
                                            totalCount: R,
                                            onGetDataByPage: O,
                                            totalRequests: t.requestsCount,
                                            pageSize: b.c,
                                            listClassName: P().content,
                                            itemClassName: P().item,
                                            handleRef: n,
                                            context: { listAriaLabel: L({ id: 'entity-names.albums' }) },
                                            isMobileLayout: e,
                                            useWindowScroll: e,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
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
                y = i(91292),
                v = i(2058),
                C = i(87999),
                k = i(80643),
                j = i(78940),
                N = i(55693),
                E = i(58217);
            let S = (0, n.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: l, captionSize: n = 'm', allArtistsTitle: r, withCustomTooltip: a, hoverSettings: c } = e,
                        {
                            name: p,
                            link: m,
                            title: _,
                            ariaLabel: h,
                            tooltipText: S,
                            isTooltipEnabled: A,
                            handleNavigate: b,
                        } = ((e) => {
                            var t, i;
                            let { item: s, allArtistsTitle: l, withCustomTooltip: n } = e,
                                { formatMessage: r } = (0, v.A)(),
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
                                p = (0, j.Z)(null != (i = null == (t = a.link) ? void 0 : t.href) ? i : a.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, N.z)(),
                                _ = (0, k.S)(),
                                h = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), p(e));
                                }),
                                g = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: l, fullscreenVideoPlayer: n } = (0, u.g)(),
                                        { modal: r } = s;
                                    return (0, E.l)({
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
                                    (_({ to: C.AppScreen.ArtistScreen }), null == m || m(), g(e));
                                });
                            return { ...a, handleNavigate: x };
                        })({ item: t, allArtistsTitle: r, withCustomTooltip: a });
                    return m
                        ? (0, s.jsx)(y.N, {
                              ...m,
                              'aria-label': h,
                              className: i,
                              onClick: b,
                              title: _,
                              'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: A,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: S,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: l, children: p }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: A,
                              offsetOptions: 4,
                              placement: 'top',
                              text: S,
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
                            (0, s.jsx)(S, {
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
                                            (0, s.jsx)(S, {
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
            var b = i(88969),
                f = i(65453);
            let T = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: n } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(f.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(h().spoiler, i),
                            onClick: n,
                            rel: 'nofollow',
                            'data-test-id': g.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(b.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var P = i(61013),
                L = i(87819),
                O = i(40634),
                I = i(48468),
                R = i.n(I);
            let w = (0, n.PA)((e) => {
                    let { label: t, artists: i, forwardRef: l } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, L.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: l, children: t }),
                            (0, s.jsx)(o.ZI, { className: R().tooltipContent, children: i.map((e) => (0, s.jsx)(O.V, { artist: e, className: R().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, r.forwardRef)((e, t) => (0, s.jsx)(w, { forwardRef: t, ...e }));
            var M = i(19934),
                z = i(70396),
                F = i.n(z);
            let H = (0, n.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: n } = (0, v.A)();
                    return (0, s.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, l.$)(F().root, F().important),
                        label: t,
                        ariaLabel: n({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(O.V, { artist: e }, e.id)),
                    });
                }),
                U = (0, n.PA)((e) => {
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
                            (0, P.A)(() => {
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
                        return (n || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(H, { artists: t, label: i }) : (0, s.jsx)(D, { artists: t, label: i })) : i;
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
                            spoilerComponent: y,
                            ...v
                        } = e,
                        C = ((e) => {
                            var t, i, s;
                            let { separator: l, visibleArtistsCount: n, withLink: a, withComposer: o, artistIdWithoutLink: c, withContextMenu: p } = e,
                                _ = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                g = null == (s = e.withCustomTooltip) || s,
                                x = (0, r.useRef)(null),
                                [y, v] = (0, r.useState)(!1),
                                {
                                    settings: { isMobile: C },
                                } = (0, u.g)(),
                                k = ((!C || 1 === _.length) && p) || !p,
                                j = ((e, t) => {
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
                                })(_, { separator: l, visibleArtistsCount: y ? void 0 : n, withComposer: o, withLink: !!k && a, artistIdWithoutLink: c }),
                                N = h ? j.allArtistsTitle : '',
                                E = (0, d.c)((e) => {
                                    (v(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: j.groups,
                                hiddenArtistsCount: j.hiddenArtistsCount,
                                allArtistsTitle: N,
                                withCustomTooltip: g,
                                withContextMenu: p,
                                labelRef: x,
                                handleOnSpoilerClick: E,
                                isTooltipEnabled: !!N && g && !p && !C,
                                title: !N || g || p ? void 0 : N,
                            };
                        })(v),
                        k = (0, a.L)(() =>
                            C.hiddenArtistsCount <= 0
                                ? null
                                : (0, r.isValidElement)(y)
                                  ? y
                                  : (0, s.jsx)(T, { spoilerClassName: n, spoilerArtistsCount: C.hiddenArtistsCount, handleOnSpoilerClick: C.handleOnSpoilerClick }),
                        ),
                        j = (0, s.jsx)(o.m_, {
                            referenceRef: C.labelRef,
                            enabled: C.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: C.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, l.$)(h().root, h()['root_variant_'.concat(x)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: C.title,
                                children: [
                                    C.groups.map((e) =>
                                        (0, s.jsx)(
                                            A,
                                            {
                                                group: e,
                                                linkClassName: p,
                                                captionClassName: _,
                                                captionSize: g,
                                                allArtistsTitle: C.allArtistsTitle,
                                                withCustomTooltip: C.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    k,
                                ],
                            }),
                        });
                    return C.withContextMenu ? (0, s.jsx)(U, { labelRef: C.labelRef, artists: C.artists, label: j }) : j;
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
        17017: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Z: () => s }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
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
        19840: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => l }), i(46606));
            var s = i(91136);
            class l extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, l.prototype));
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
            i.d(t, { SomethingWentWrong: () => I });
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
            let y = (0, x.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
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
                v = (0, x.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
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
            var C = i(44230),
                k = i(4370),
                j = i(72288),
                N = i(97956),
                E = i(56248),
                S = i(90688),
                A = i(78940);
            let b = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var f = i(96856),
                T = i.n(f);
            let P = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { slam: r } = (0, j.g)(),
                    { contentRef: a } = (0, C.g)(),
                    d = (0, A.Z)(k.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, l.$)(T().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(E.L, {
                                withBackwardFallback: '/',
                                className: (0, l.$)(T().navigation, { [T().navigation_desktop]: !a }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, l.$)(T().content, { [T().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(S._V, { className: T().image, src: b.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: T().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: T().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: T().text,
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
                                        className: T().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: T().buttonText,
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
            var L = i(9184),
                O = i.n(L);
            let I = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { formatMessage: p } = (0, a.A)(),
                    m = (0, r.useContext)(j.P),
                    _ = null == m ? void 0 : m.experiments.checkExperiment(N.z.WebNextUnstableMusicScreen, 'on'),
                    h = p(_ ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                v(h);
                let { sendRefreshEvent: g } = y(),
                    x = (0, r.useCallback)(() => {
                        (g(), (window.location.href = k.Z.main.href));
                    }, [g]),
                    { contentRef: S } = (0, C.g)();
                return _
                    ? (0, s.jsx)(P, { className: t, withBackwardControl: i, onBack: n })
                    : (0, s.jsxs)('div', {
                          className: (0, l.$)(O().root, t),
                          children: [
                              i &&
                                  (0, s.jsx)(E.L, {
                                      withBackwardFallback: '/',
                                      className: (0, l.$)(O().navigation, { [O().navigation_desktop]: !S }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, l.$)(O().content, { [O().content_shrink]: !i }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: O().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, l.$)(O().title, O().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, l.$)(O().text, O().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: x,
                                          className: O().button,
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
            i.d(t, { V: () => v });
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
                y = i.n(x);
            let v = (0, n.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: n } = (0, g.g)(),
                    x = (0, h.Z)(t.url),
                    C = (0, o.S)(),
                    k = (0, r.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(v, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    j = (0, d.c)((e) => {
                        (n.modal.isOpened && n.modal.close(), C({ to: a.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(p.Dr, {
                            className: (0, l.$)(y().root, i),
                            onClick: j,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(m.t, {
                                    radius: 'round',
                                    className: y().cover,
                                    children: (0, s.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: y().image }),
                                }),
                                (0, s.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        k,
                    ],
                });
            });
        },
        41911: (e, t, i) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = i(52300);
// for PulseSync: END import the download icon for playlist menu actions
            i.d(t, { B: () => J });
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
                y = i(7555),
                v = i(29504),
                C = i(13946),
                k = i(85902),
                j = i(24460),
                N = i(5407),
                E = i(57934),
                S = i(84384),
                A = i(4795),
                b = i(78940),
                f = i(55693),
                T = i(39079),
                P = i(72288),
                L = i(86298),
                O = i(81877),
                I = i(49738),
                R = i(91292),
                w = i(56862),
                D = i(16704),
                M = i(56446),
                z = i(36207),
                F = i(47513),
                H = i(19934),
                U = i(48749),
                B = i(22505),
                W = i(9618),
                Y = i(95210),
                K = i(46936),
                V = i(97956),
                $ = i(93091),
                X = i(27817),
                q = i(15425);
            let G = (0, n.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: l, open: n, ...r } = e,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: d } = (0, W.q)(),
                    {
                        experiments: u,
                        settings: { isMobile: m },
                        trailer: h,
                        user: g,
                    } = (0, P.g)(),
                    x = (0, k.K)(i),
                    y = (0, j.A)(i),
                    v = (0, E.F)(),
                    { formatMessage: C } = (0, a.A)(),
                    S = (0, N.P)(),
                    A = u.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                    b = (0, U.A)({ entityVariant: K.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, Y.N)(n);
                let f = (0, _.c)(() => {
                    if (c) return void d();
                    S() || (h.openPlaylistTrailer(i.id), v(o.DomainObjectType.Playlist, i.id));
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
                    ariaLabel: C({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: p.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...r,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        A && (0, s.jsx)(B.d, { entityVariant: K.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : b }),
                        !m && (0, s.jsx)(X.L, { onClick: y, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)($.T, { onClick: x, isLiked: i.isLiked, disabled: !g.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, s.jsx)(H.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, s.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, s.jsx)(q.N, { onClick: f, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var Z = i(17657),
                Q = i.n(Z);
            let J = (0, n.PA)((e) => {
                let { className: t, playlist: i, children: n, contentLinesCount: H, customDescription: U, onCoverMouseDown: B } = e,
                    W = (0, c.D)(),
                    {
                        trailer: Y,
                        user: K,
                        paywall: { modal: V },
                    } = (0, P.g)(),
                    { from: $, utmLink: X } = (0, S.f)({ contextId: i.uuid, contextType: m.K.Playlist }),
                    { formatMessage: q } = (0, a.A)(),
                    { sendLikeSearchFeedback: Z, sendNavigateSearchFeedback: J, sendPlaySearchFeedback: ee } = (0, f.z)(),
                    [et, ei] = (0, r.useState)(!1),
                    [es, el] = (0, r.useState)(!1),
                    [en, er] = (0, r.useState)(!1),
                    ea = (0, F.r)(i),
                    eo = (0, k.K)(i),
                    ec = (0, j.A)(i),
                    ed = (0, d.S)(),
                    eu = (0, u.g)(),
                    ep = (0, b.Z)(i.url),
                    em = (0, E.F)(),
                    e_ = (0, N.P)(),
                    eh = (0, _.c)((e) => {
                        if ((e.stopPropagation(), e_())) return void e.preventDefault();
                        (Y.setUtmLink(X), Y.openPlaylistTrailer(i.id), em(o.DomainObjectType.Playlist, i.id));
                    }),
                    [eg, ex] = (0, r.useState)(!1),
                    { isPlaying: ey, togglePlay: ev } = (0, T.D)({
                        playContextParams: { contextData: { type: m.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: $, utmLink: X }, loadContextMeta: !0 },
                    }),
                    eC = (0, _.c)(() => {
                        (ed({ to: o.AppScreen.PlaylistScreen }), null == J || J());
                    }),
                    ek = (0, _.c)((e) => {
                        (eC(), ep(e));
                    }),
                    ej = (0, A.N)(),
                    eN = (0, _.c)(() => {
                        if (!e_()) {
                            if (ej) return void V.open();
                            (et || ey || (ei(!0), null == ee || ee()), ev(), ey || eu());
                        }
                    }),
                    eE = (0, _.c)(() => {
                        (es || i.isLiked || (el(!0), null == Z || Z()), eo());
                    }),
                    eS = (0, _.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eA = (0, _.c)((e) => {
                        (er(e), ex(e));
                    }),
                    eb = (0, r.useMemo)(() => {
                        var e;
                        return U
                            ? (0, s.jsx)(v.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: U }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, s.jsx)(
                                    C.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [U, i]),
                    ef = (0, h.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                I.c,
                                {
                                    className: (0, l.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: eE,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !K.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eT = (0, r.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                z.n,
                                {
                                    children: (0, s.jsx)(
                                        M.k,
                                        { className: (0, l.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eh },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eh, i]),
                    eP = (0, r.useMemo)(
                        () =>
                            (0, s.jsx)(
                                w.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, l.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eL = (0, r.useMemo)(
                        () =>
                            (0, s.jsx)(y.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': p.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: ek,
                                    onMouseDown: B,
                                    children: [
                                        (0, s.jsx)(O.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ea,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(g.hg, {
                                            isVisible: en || eg,
                                            className: Q().controls,
                                            playControl: (0, s.jsx)(
                                                D.D,
                                                {
                                                    className: (0, l.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eN,
                                                    isPlaying: ey,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: ef,
                                            menuControl: (0, s.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eA,
                                                    open: en,
                                                    onClick: eS,
                                                    className: (0, l.$)(Q().menuButton, Q().control),
                                                    icon: (0, s.jsx)(x.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': p.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eP,
                                            trailerControl: eT,
                                        }),
                                    ],
                                }),
                            }),
                        [ek, B, i, ea, en, eg, eN, ey, ef, eA, eS, eP, eT],
                    ),
                    eO = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(g.MN, {
                    ref: W,
                    'aria-label': ea,
                    className: (0, l.$)(Q().root, t),
                    title: (0, s.jsx)(v.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': p.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(R.N, { className: Q().titleLink, href: i.url, tabIndex: -1, onClick: eC, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(R.N, { className: Q().srTitleLink, href: i.url, onClick: eC, children: i.title }),
                    contentLinesCount: H,
                    view: eL,
                    description: eb,
                    'data-test-id': p.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eO &&
                            (0, s.jsx)(L.x, {
                                ariaLabel: q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: eo,
                            }),
                        n,
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
        45654: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => k });
            var s = i(88800),
                l = i(84961),
                n = i(88969),
                r = i(96817),
                a = i(52300),
                o = i(66719),
                c = i(29504),
                d = i(69630),
                u = i(46422),
                p = i(44230),
                m = i(4370),
                _ = i(78940),
                h = i(72288),
                g = i(86790),
                x = i(60266),
                y = i(93317),
                v = i(92270),
                C = i.n(v);
            let k = (0, l.PA)((e) => {
                let { title: t } = e,
                    {
                        settings: { isMobile: i },
                    } = (0, h.g)(),
                    { contentScrollRef: l, setContentScrollRef: v } = (0, p.g)(),
                    k = (0, u.W)(),
                    j = (0, _.Z)(m.Z.collectionKids.href);
                return (0, s.jsxs)(d.h, {
                    scrollElement: l,
                    outerTitle: t,
                    children: [
                        (0, s.jsx)(y.Y, {
                            variant: y.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: k.canBack,
                            children: (0, s.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: i ? 'm' : 'xl', lineClamp: 2, children: t }),
                        }),
                        (0, s.jsxs)(o.N, {
                            ref: v,
                            containerClassName: C().scrollableContainer,
                            className: C().root,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: C().content,
                                    children: [
                                        (0, s.jsx)('div', { className: C().icon, children: (0, s.jsx)(a.I, { variant: 'like', size: 'l' }) }),
                                        (0, s.jsx)(c.DZ, {
                                            className: C().title,
                                            variant: 'h3',
                                            size: 'xs',
                                            children: (0, s.jsx)(n.A, { id: 'error-messages.empty-collection-kids-sub-page-title' }),
                                        }),
                                        (0, s.jsx)(r.$, {
                                            onClick: j,
                                            className: C().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 's',
                                            radius: 'xxxl',
                                            children: (0, s.jsx)(c.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, s.jsx)(n.A, { id: 'error-messages.empty-collection-kids-sub-page-link' }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(x.A, { children: (0, s.jsx)(g.w, { className: C().footer }) }),
                            ],
                        }),
                    ],
                });
            });
        },
        46606: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { X: () => s }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
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
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var s = i(88800),
                l = i(84961),
                n = i(58390),
                r = i(65724),
                a = i(88969),
                o = i(29504),
                c = i(7628),
                d = i(42674),
                u = i.n(d);
            let p = (0, l.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(o.DZ, {
                            className: (0, r.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(a.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(o.HL, {
                            className: (0, r.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(a.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = i(4370),
                _ = i(72288);
            let h = (0, l.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: l } = (0, _.g)();
                return l.isAuthorized ? t : (i && (0, n.redirect)(m.Z.main.href), (0, s.jsx)(p, {}));
            });
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
        67990: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
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
        71104: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => s });
            let s = 20;
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
                            totalCount: y,
                            totalRequests: v,
                            debounceDurationInMs: C,
                            initialItemCount: k,
                            minInitialItemCount: j = 20,
                            handleRef: N,
                            alwaysShowScrollbar: E = !1,
                            testId: S,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: b,
                            ...f
                        } = e,
                        [T, P] = (0, r.useState)(!1),
                        L = (0, r.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        O = (0, r.useMemo)(() => {
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
                        }, [i, v, A]),
                        I = k ? Math.min(k, j) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(d().root, { [d().root_scrolling]: T || E, [d().root_notScrolling]: !T && !E }, t),
                        'data-test-id': S,
                        children: [
                            A && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: g,
                                components: O,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: L,
                                itemContent: m,
                                scrollerRef: N,
                                totalCount: y,
                                pageSize: x,
                                onPageHandler: a,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: b,
                                ...f,
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
            i.d(t, { w: () => S });
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
                y = i.n(x),
                v = i(17392),
                C = i(29504),
                k = i(91292);
            let j = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(y().copyrights, t),
                        'data-test-id': v.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(k.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, l.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': v.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(k.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': v.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: y().list,
                                'data-test-id': v.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: l } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, s.jsx)(k.N, { target: '_blank', href: l, className: y().link, 'data-test-id': v.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': v.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, l.$)(y().root, y().important, t),
                        'data-test-id': v.S7.FOOTER,
                        children: [(0, s.jsx)(N, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(j, { data: i.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: l, formatMessage: n } = (0, r.A)(),
                    { language: a } = (0, h.h)(),
                    o = u({ formatMessage: n, language: a, tld: i.tld, year: _(l) });
                return (0, s.jsx)(j, { className: t, data: o });
            });
            let S = (0, n.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: n, location: m, user: x } = (0, g.g)(),
                    { formatDate: v, formatMessage: C } = (0, r.A)(),
                    { isEnabled: k } = null != (t = (0, o.P)()) ? t : {},
                    { language: j } = (0, h.h)(),
                    N = ((e) => {
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
                        formatMessage: C,
                        isWebApplication: a.$3,
                        tld: m.tld,
                        language: j,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: _(v),
                    });
                return (0, s.jsx)(E, { className: (0, l.$)({ [y().root_withOffsetForDeeplink]: k }, i), data: N });
            });
        },
        87110: (e) => {
            e.exports = {
                root: 'CollectionKidsPlaylistsPage_root__RXH06',
                scrollContainer: 'CollectionKidsPlaylistsPage_scrollContainer__F_oj2',
                important: 'CollectionKidsPlaylistsPage_important__5V_zc',
                footer: 'CollectionKidsPlaylistsPage_footer__R41Ol',
                item: 'CollectionKidsPlaylistsPage_item__ht83l',
                content: 'CollectionKidsPlaylistsPage_content__6Oo1m',
            };
        },
        89916: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => n.G, X1: () => s.X, m5: () => l.m });
            var s = i(46606),
                l = i(91136),
                n = i(19840);
            i(17017);
        },
        91136: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => l });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: l = {}, ...n } = t,
                        r = e || 'Internal error';
                    (super(r, n), (this.message = r), (this.code = i), (this.data = l), (this.stack = Error(r).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class l extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        92270: (e) => {
            e.exports = {
                root: 'CollectionKidsSubPageEmpty_root__53xVY',
                scrollableContainer: 'CollectionKidsSubPageEmpty_scrollableContainer__Dh6Sp',
                content: 'CollectionKidsSubPageEmpty_content__VZZg5',
                icon: 'CollectionKidsSubPageEmpty_icon__IQAON',
                title: 'CollectionKidsSubPageEmpty_title__t9H4h',
                button: 'CollectionKidsSubPageEmpty_button__26EKY',
                footer: 'CollectionKidsSubPageEmpty_footer__XQnAw',
            };
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
        97015: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 11882)));
        },
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
        99890: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => n, UC: () => r, dM: () => a, uV: () => o });
            var s = i(89916),
                l = i(67990);
            let n = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                r = (e) => (e.uid ? 'authorized' : 'no-uid'),
                a = (e) => {
                    if (!(e instanceof s.m5) || !(0, l.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, l.N)(e.cause)) return;
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
    },
    (e) => {
        (e.O(
            0,
            [
                4814, 7437, 9079, 3469, 8194, 1191, 8655, 8767, 983, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 4732, 9087, 3979, 6719,
                1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 2088, 763, 2670, 7358,
            ],
            () => e((e.s = 97015)),
        ),
            (_N_E = e.O()));
    },
]);
