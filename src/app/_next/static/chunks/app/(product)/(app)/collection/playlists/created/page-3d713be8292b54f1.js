(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6696],
    {
        4044: (t) => {
            t.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        4370: (t, e, i) => {
            'use strict';
            i.d(e, { Z: () => r });
            var s = i(67174);
            let r = {
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
        4795: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => l });
            var s = i(72288),
                r = i(97956);
            let l = () => {
                var t, e;
                let {
                    user: i,
                    settings: { browserInfo: l },
                    experiments: a,
                } = (0, s.g)();
                return (
                    !(null == l ? void 0 : l.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (e = a.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (t = e.value) ? void 0 : t.closeListening) === 'on'
                );
            };
        },
        6322: (t, e, i) => {
            'use strict';
            i.d(e, { l: () => a });
            var s = i(88800),
                r = i(15077),
                l = i(33719);
            let a = (t) => {
                let { playlist: e, closeToast: i } = t;
                return (0, s.jsx)(l.k, {
                    closeToast: i,
                    entityVariant: r.c.PLAYLIST,
                    entityUrl: e.url,
                    coverUri: e.coverUri,
                    entityTitle: e.title,
                    isPinned: e.isPinned,
                    radius: 's',
                });
            };
        },
        7628: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => m });
            var s = i(88800),
                r = i(88969),
                l = i(58390),
                a = i(17392),
                o = i(29993),
                n = i(96817),
                c = i(29504),
                d = i(99890),
                u = i(4086),
                _ = i(41928);
            let m = (t) => {
                let { size: e = 'm', variant: i = 'default', color: m = 'primary', withRipple: p = !0, buttonText: h, isBlock: x, key: v, className: C } = t,
                    y = (0, l.useRouter)(),
                    E = (0, _.N)().get(u.QG),
                    g = (0, o.c)(() => {
                        E.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), y.push(E.authorizationUrl));
                    });
                return (0, s.jsx)(
                    n.$,
                    {
                        onClick: g,
                        className: C,
                        isBlock: x,
                        color: m,
                        variant: i,
                        size: e,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': a.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(r.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        9492: (t, e, i) => {
            'use strict';
            i.d(e, { L: () => p });
            var s = i(88800),
                r = i(65724),
                l = i(53548),
                a = i(2058),
                o = i(88969),
                n = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                _ = i(4044),
                m = i.n(_);
            let p = (t) => {
                let { reloadBlocks: e, closeToast: i } = t,
                    _ = (0, l.useRef)(null),
                    { formatMessage: p } = (0, a.A)();
                (0, l.useEffect)(() => {
                    var t;
                    null == (t = _.current) || t.focus();
                }, []);
                let h = (0, l.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(n.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: e,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [p, e],
                );
                return (0, s.jsx)(u.$, { className: (0, r.$)(m().root, m().important), message: h, closeToast: i });
            };
        },
        9590: (t) => {
            t.exports = {
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
        13946: (t, e, i) => {
            'use strict';
            i.d(e, { i: () => Y });
            var s = i(88800),
                r = i(65724),
                l = i(84961),
                a = i(53548),
                o = i(79070),
                n = i(17610),
                c = i(24548),
                d = i(29993),
                u = i(72288),
                _ = i(35994);
            let m = (t, e) => {
                let { withLink: i, separator: s } = e,
                    r = i && !t.various ? (0, _.R)(t.id) : null;
                return { artist: t, name: t.name, separator: s, link: r };
            };
            var p = i(21010),
                h = i.n(p),
                x = i(17392),
                v = i(29504),
                C = i(91292),
                y = i(2058),
                E = i(92716),
                g = i(96527),
                N = i(78940),
                f = i(55693),
                A = i(58217);
            let k = (0, l.PA)((t) => {
                    let { item: e, linkClassName: i, captionClassName: r, captionSize: l = 'm', allArtistsTitle: a, withCustomTooltip: o, hoverSettings: c } = t,
                        {
                            name: _,
                            link: m,
                            title: p,
                            ariaLabel: h,
                            tooltipText: k,
                            isTooltipEnabled: S,
                            handleNavigate: T,
                        } = ((t) => {
                            var e, i;
                            let { item: s, allArtistsTitle: r, withCustomTooltip: l } = t,
                                { formatMessage: a } = (0, y.A)(),
                                o = ((t, e) => {
                                    let { item: i, allArtistsTitle: s, withCustomTooltip: r } = t,
                                        l = s || i.name;
                                    return {
                                        ...i,
                                        title: r ? void 0 : l,
                                        ariaLabel: i.link ? e({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: l,
                                        isTooltipEnabled: !s && r,
                                    };
                                })({ item: s, allArtistsTitle: r, withCustomTooltip: l }, a),
                                {
                                    track: n,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                _ = (0, N.Z)(null != (i = null == (e = o.link) ? void 0 : e.href) ? i : o.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, f.z)(),
                                p = (0, g.N)(),
                                h = (0, d.c)((t) => {
                                    (c && n.isOpened && n.close(), _(t));
                                }),
                                x = ((t) => {
                                    let { artist: e, callback: i } = t,
                                        { currentTrackInfo: s, fullscreenPlayer: r, fullscreenVideoPlayer: l } = (0, u.g)(),
                                        { modal: a } = s;
                                    return (0, A.l)({
                                        entity: e,
                                        callback: i,
                                        onBeforeHandle: (t) => {
                                            (null == t || t.stopPropagation(), a.isOpened && (s.reset(), a.close()), r.modal.isOpened && r.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            l.modal.isOpened && (l.modal.close(), l.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: o.artist, callback: h }),
                                v = (0, d.c)((t) => {
                                    (p({ to: E.AppScreen.ArtistScreen }), null == m || m(), x(t));
                                });
                            return { ...o, handleNavigate: v };
                        })({ item: e, allArtistsTitle: a, withCustomTooltip: o });
                    return m
                        ? (0, s.jsx)(C.N, {
                              ...m,
                              'aria-label': h,
                              className: i,
                              onClick: T,
                              title: p,
                              'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(n.m_, {
                                  enabled: S,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: k,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(v.HL, { variant: 'span', type: 'entity', size: l, weight: 'medium', className: r, children: _ }),
                              }),
                          })
                        : (0, s.jsx)(n.m_, {
                              enabled: S,
                              offsetOptions: 4,
                              placement: 'top',
                              text: k,
                              hoverSettings: c,
                              children: (0, s.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: l,
                                  weight: 'medium',
                                  className: r,
                                  title: p,
                                  'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                S = (t) => {
                    let { group: e, linkClassName: i, captionClassName: r, captionSize: l, allArtistsTitle: o, withCustomTooltip: n, hoverSettings: c } = t;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            e.primary.separator,
                            (0, s.jsx)(k, {
                                item: e.primary,
                                linkClassName: i,
                                captionClassName: r,
                                captionSize: l,
                                allArtistsTitle: o,
                                withCustomTooltip: n,
                                hoverSettings: c,
                            }),
                            e.decomposed.map((t) =>
                                (0, s.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            t.separator,
                                            (0, s.jsx)(k, {
                                                item: t,
                                                linkClassName: i,
                                                captionClassName: r,
                                                captionSize: l,
                                                allArtistsTitle: o,
                                                withCustomTooltip: n,
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
                L = i(65453);
            let P = (t) => {
                let { spoilerArtistsCount: e, spoilerClassName: i, handleOnSpoilerClick: l } = t;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(L.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(h().spoiler, i),
                            onClick: l,
                            rel: 'nofollow',
                            'data-test-id': x.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(T.A, { id: 'entity-names.number-of-more-artists', values: { counter: e } }),
                        }),
                    ],
                });
            };
            var j = i(61013),
                R = i(87819),
                O = i(40634),
                b = i(48468),
                I = i.n(b);
            let w = (0, l.PA)((t) => {
                    let { label: e, artists: i, forwardRef: r } = t;
                    return (0, s.jsxs)(n.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, R.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: r, children: e }),
                            (0, s.jsx)(n.ZI, { className: I().tooltipContent, children: i.map((t) => (0, s.jsx)(O.V, { artist: t, className: I().artistItem }, t.id)) }),
                        ],
                    });
                }),
                D = (0, a.forwardRef)((t, e) => (0, s.jsx)(w, { forwardRef: e, ...t }));
            var M = i(19934),
                z = i(70396),
                H = i.n(z);
            let F = (0, l.PA)((t) => {
                    let { label: e, artists: i } = t,
                        { formatMessage: l } = (0, y.A)();
                    return (0, s.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, r.$)(H().root, H().important),
                        label: e,
                        ariaLabel: l({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((t) => (0, s.jsx)(O.V, { artist: t }, t.id)),
                    });
                }),
                B = (0, l.PA)((t) => {
                    let { artists: e = [], label: i, labelRef: r } = t,
                        [l, n] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        _ = (0, d.c)(() => {
                            let t = r.current;
                            t && n(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);
                        }),
                        m = (0, o.L)(() =>
                            (0, j.A)(() => {
                                _();
                            }, 100),
                        );
                    if (
                        ((0, a.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                _(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, _],
                        ),
                        (0, a.useEffect)(() => {
                            _();
                        }, [e, _]),
                        0 !== e.length)
                    )
                        return (l || c) && (!c || 1 !== e.length) ? (c ? (0, s.jsx)(F, { artists: e, label: i }) : (0, s.jsx)(D, { artists: e, label: i })) : i;
                }),
                Y = (0, l.PA)((t) => {
                    let {
                            className: e,
                            lineClamp: i,
                            spoilerClassName: l,
                            linkClassName: _,
                            captionClassName: p,
                            captionSize: x,
                            variant: v = 'breakAll',
                            spoilerComponent: C,
                            ...y
                        } = t,
                        E = ((t) => {
                            var e, i, s;
                            let { separator: r, visibleArtistsCount: l, withLink: o, withComposer: n, artistIdWithoutLink: c, withContextMenu: _ } = t,
                                p = null != (e = t.artists) ? e : [],
                                h = null == (i = t.withAllArtistsTitle) || i,
                                x = null == (s = t.withCustomTooltip) || s,
                                v = (0, a.useRef)(null),
                                [C, y] = (0, a.useState)(!1),
                                {
                                    settings: { isMobile: E },
                                } = (0, u.g)(),
                                g = ((!E || 1 === p.length) && _) || !_,
                                N = ((t, e) => {
                                    var i, s, r;
                                    let l = null == (i = null == e ? void 0 : e.withComposer) || i,
                                        a = null == (s = null == e ? void 0 : e.withLink) || s,
                                        o = null != (r = null == e ? void 0 : e.separator) ? r : ', ',
                                        n = t
                                            .flatMap((t) => {
                                                var e;
                                                let i = (null != (e = t.decomposed) ? e : []).map((t) => t.name);
                                                return [t.name, ...i];
                                            })
                                            .join(o),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((t, e) => {
                                            let { visibleArtistsCount: i, withComposer: s } = e;
                                            return {
                                                visibleArtists: (i ? t.slice(0, i) : t).filter((t) => s || !t.isComposer),
                                                hiddenArtistsCount: i && i < t.length ? t.length - i : 0,
                                            };
                                        })(t, { withComposer: l, visibleArtistsCount: null == e ? void 0 : e.visibleArtistsCount });
                                    return {
                                        groups: c.map((t, i) =>
                                            ((t, e) => {
                                                var i;
                                                let { withLink: s, separator: r, isFirst: l } = e;
                                                return {
                                                    primary: m(t, { withLink: s, separator: l ? void 0 : r }),
                                                    decomposed: (null != (i = t.decomposed) ? i : []).map((t) => {
                                                        let e = r ? t.separator : '';
                                                        return m(t, { withLink: s, separator: e });
                                                    }),
                                                };
                                            })(t, { withLink: a && t.id !== (null == e ? void 0 : e.artistIdWithoutLink), separator: o, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: n,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: r, visibleArtistsCount: C ? void 0 : l, withComposer: n, withLink: !!g && o, artistIdWithoutLink: c }),
                                f = h ? N.allArtistsTitle : '',
                                A = (0, d.c)((t) => {
                                    (y(!0), t.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: N.groups,
                                hiddenArtistsCount: N.hiddenArtistsCount,
                                allArtistsTitle: f,
                                withCustomTooltip: x,
                                withContextMenu: _,
                                labelRef: v,
                                handleOnSpoilerClick: A,
                                isTooltipEnabled: !!f && x && !_ && !E,
                                title: !f || x || _ ? void 0 : f,
                            };
                        })(y),
                        g = (0, o.L)(() =>
                            E.hiddenArtistsCount <= 0
                                ? null
                                : (0, a.isValidElement)(C)
                                  ? C
                                  : (0, s.jsx)(P, { spoilerClassName: l, spoilerArtistsCount: E.hiddenArtistsCount, handleOnSpoilerClick: E.handleOnSpoilerClick }),
                        ),
                        N = (0, s.jsx)(n.m_, {
                            referenceRef: E.labelRef,
                            enabled: E.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: E.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, r.$)(h().root, h()['root_variant_'.concat(v)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, e),
                                title: E.title,
                                children: [
                                    E.groups.map((t) =>
                                        (0, s.jsx)(
                                            S,
                                            {
                                                group: t,
                                                linkClassName: _,
                                                captionClassName: p,
                                                captionSize: x,
                                                allArtistsTitle: E.allArtistsTitle,
                                                withCustomTooltip: E.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            t.primary.artist.key,
                                        ),
                                    ),
                                    g,
                                ],
                            }),
                        });
                    return E.withContextMenu ? (0, s.jsx)(B, { labelRef: E.labelRef, artists: E.artists, label: N }) : N;
                });
        },
        16434: (t) => {
            t.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        17017: (t, e, i) => {
            'use strict';
            var s;
            (i.d(e, { Z: () => s }),
                (function (t) {
                    ((t.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (t.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (t.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (t.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (t.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
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
        19840: (t, e, i) => {
            'use strict';
            (i.d(e, { G: () => r }), i(46606));
            var s = i(91136);
            class r extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(t, e) {
                    (super(t, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: e.cause }),
                        (this.statusCode = e.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
                }
            }
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
            i.d(e, { A: () => _ });
            var s = i(88800),
                r = i(96706),
                l = i(53548),
                a = i(2058),
                o = i(29595),
                n = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(6322);
            let _ = (t) => {
                let { user: e } = (0, c.g)(),
                    { notify: i } = (0, n.l)(),
                    { formatMessage: _ } = (0, a.A)(),
                    [m, p] = (0, l.useState)(!1);
                return (0, l.useCallback)(async () => {
                    if (!e.isAuthorized) return void i((0, s.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let l = { ...(0, r.HO)(t), url: t.url, isPinned: !t.isPinned };
                    p(!0);
                    let a = await t.togglePin();
                    (p(!1),
                        a
                            ? i((0, s.jsx)(u.l, { playlist: l }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e.isAuthorized, m, t, i, _]);
            };
        },
        24548: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        30832: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => a });
            var s = i(88800),
                r = i(15077),
                l = i(42729);
            let a = (t) => {
                let { playlist: e, closeToast: i } = t;
                return (0, s.jsx)(l.O, {
                    entityVariant: r.c.PLAYLIST,
                    entityUrl: e.url,
                    collectionUrl: '/collection',
                    entityTitle: e.title,
                    isLiked: e.isLiked,
                    closeToast: i,
                    coverUri: e.coverUri,
                });
            };
        },
        32780: (t, e, i) => {
            'use strict';
            i.d(e, { CollectionPlaylistsCreatedPage: () => T });
            var s = i(88800),
                r = i(65724),
                l = i(84961),
                a = i(53548),
                o = i(2058),
                n = i(88969),
                c = i(17392),
                d = i(29504),
                u = i(69630),
                _ = i(41911),
                m = i(12816),
                p = i(59844),
                h = i(46422),
                x = i(44230),
                v = i(37670),
                C = i(72288),
                y = i(54320),
                E = i(86790),
                g = i(60266),
                N = i(93317),
                f = i(37770),
                A = i(79418),
                k = i(65343),
                S = i.n(k);
            let T = (0, l.PA)(() => {
                let {
                        user: t,
                        collection: {
                            playlists: { playlistsCreated: e },
                        },
                        settings: { isMobile: i },
                    } = (0, C.g)(),
                    { formatMessage: l } = (0, o.A)(),
                    { contentScrollRef: k, setContentScrollRef: T } = (0, x.g)(),
                    L = (0, h.W)(),
                    P = (0, a.useMemo)(() => ({ Footer: () => (0, s.jsx)(g.A, { children: (0, s.jsx)(E.w, { className: S().footer }) }) }), []);
                (0, v.J)(e.isResolved);
                let j = (0, a.useCallback)(
                    (i) => {
                        t.account.data.uid && e.getData({ userId: t.account.data.uid, page: i, pageSize: 20 });
                    },
                    [e, t.account.data.uid],
                );
                ((0, y.X)(e.pagesLoader, j),
                    (0, a.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    t.account.data.uid && e.isNeededToLoad && (0, a.use)(e.getData({ userId: t.account.data.uid, page: 0, pageSize: 20 })));
                let R = e.isShimmerVisible ? 20 : e.items.length;
                return (0, s.jsx)(p.n, {
                    pageId: m._Q.OWN_PLAYLISTS,
                    children: (0, s.jsx)(u.h, {
                        scrollElement: k,
                        outerTitle: l({ id: 'entity-names.my-playlists' }),
                        children: (0, s.jsxs)('div', {
                            className: S().root,
                            'data-test-id': c.Xk.collection.COLLECTION_PLAYLISTS_CREATED_PAGE,
                            children: [
                                (0, s.jsx)(N.Y, {
                                    variant: N.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: L.canBack,
                                    children: (0, s.jsx)(d.DZ, {
                                        id: 'collection-playlistsCreated-header',
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, s.jsx)(n.A, { id: 'entity-names.my-playlists' }),
                                    }),
                                }),
                                (0, s.jsx)(A.$, {
                                    className: (0, r.$)(S().scrollContainer, S().important),
                                    customComponents: P,
                                    itemContentCallback: (t) => {
                                        let i = e.items[t],
                                            r = l({ id: 'loading-messages.entity-is-loading' }, { entityName: l({ id: 'entity-names.playlist' }) });
                                        return i ? (0, s.jsx)(_.B, { playlist: i, contentLinesCount: 3 }, i.key) : (0, s.jsx)(f.V, { 'aria-label': r });
                                    },
                                    totalCount: R,
                                    onGetDataByPage: j,
                                    pageSize: 20,
                                    totalRequests: e.requestsCount,
                                    listClassName: S().content,
                                    itemClassName: S().item,
                                    handleRef: T,
                                    context: { listAriaLabel: l({ id: 'collection.created-playlists-list' }) },
                                    isMobileLayout: i,
                                    useWindowScroll: i,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        35994: (t, e, i) => {
            'use strict';
            i.d(e, { R: () => r });
            var s = i(67174);
            let r = (t) => (0, s.u)('/artist/:artistId', { params: { artistId: t } });
        },
        36207: (t, e, i) => {
            'use strict';
            i.d(e, { n: () => a });
            var s = i(88800),
                r = i(2058),
                l = i(17610);
            let a = (t) => {
                let { children: e } = t,
                    { formatMessage: i } = (0, r.A)();
                return (0, s.jsx)(l.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: e,
                });
            };
        },
        37770: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => c });
            var s = i(88800),
                r = i(65724),
                l = i(17392),
                a = i(19994),
                o = i(9590),
                n = i.n(o);
            let c = (t) => {
                let {
                    isActive: e,
                    className: i,
                    shimmerClassName: o,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: _ = !0,
                    linesCount: m = 3,
                    withSubcover: p,
                    radius: h = 'l',
                } = t;
                return (0, s.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': e ? 'polite' : 'off',
                    'aria-busy': e,
                    className: (0, r.$)(n().root, i),
                    'data-test-id': l.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        p && (0, s.jsx)(a.W, { isActive: e, className: n().subcover, radius: 'l' }),
                        (0, s.jsx)(a.W, { isActive: e, className: (0, r.$)(n().cover, o, { [n().cover_round]: c, [n().cover_withSubcover]: p }), radius: h }),
                        _ &&
                            (0, s.jsx)('div', {
                                className: (0, r.$)(n().infoContainer, n()['content_linesCount_'.concat(m)], { [n().infoContainer_centered]: u }),
                                children: (0, s.jsx)(a.W, { isActive: e, className: (0, r.$)(n().title, { [n().title_withSubcover]: p }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        40634: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => y });
            var s = i(88800),
                r = i(65724),
                l = i(84961),
                a = i(53548),
                o = i(92716),
                n = i(17392),
                c = i(29993),
                d = i(90688),
                u = i(19934),
                _ = i(7555),
                m = i(29504),
                p = i(96527),
                h = i(78940),
                x = i(72288),
                v = i(80932),
                C = i.n(v);
            let y = (0, l.PA)((t) => {
                let { artist: e, className: i } = t,
                    { fullscreenPlayer: l } = (0, x.g)(),
                    v = (0, h.Z)(e.url),
                    E = (0, p.N)(),
                    g = (0, a.useMemo)(() => {
                        var t;
                        return (
                            'decomposed' in e &&
                            (null == (t = e.decomposed) ? void 0 : t.reduce((t, e) => (t.push((0, s.jsx)(y, { artist: e, className: i }, e.id)), t), []))
                        );
                    }, [e, i]),
                    N = (0, c.c)((t) => {
                        (l.modal.isOpened && l.modal.close(), E({ to: o.AppScreen.ArtistScreen }), v(t));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(u.Dr, {
                            className: (0, r.$)(C().root, i),
                            onClick: N,
                            'data-test-id': n.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(_.t, {
                                    radius: 'round',
                                    className: C().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: e.coverUri, size: 100, fit: 'contain', className: C().image }),
                                }),
                                (0, s.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: e.name }),
                            ],
                        }),
                        g,
                    ],
                });
            });
        },
        41911: (t, e, i) => {
            'use strict';
            i.d(e, { B: () => J });
            var s = i(88800),
                r = i(65724),
                l = i(84961),
                a = i(53548),
                o = i(2058),
                n = i(92716),
                c = i(17392),
                d = i(18593),
                u = i(29993),
                _ = i(79070),
                m = i(29832),
                p = i(52300),
                h = i(7555),
                x = i(29504),
                v = i(13946),
                C = i(85902),
                y = i(24460),
                E = i(5407),
                g = i(96527),
                N = i(76675),
                f = i(25557),
                A = i(28830),
                k = i(84384),
                S = i(4795),
                T = i(78940),
                L = i(55693),
                P = i(39079),
                j = i(72288),
                R = i(86298),
                O = i(81877),
                b = i(49738),
                I = i(91292),
                w = i(56862),
                D = i(16704),
                M = i(56446),
                z = i(36207),
                H = i(47513),
                F = i(19934),
                B = i(48749),
                Y = i(22505),
                U = i(9618),
                V = i(95210),
                X = i(46936),
                K = i(97956),
                W = i(93091),
                $ = i(27817),
                G = i(15425);
            let q = (0, l.PA)((t) => {
                var e;
                let { playlist: i, onOpenChange: r, open: l, ...a } = t,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, U.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: p },
                        trailer: h,
                        user: x,
                    } = (0, j.g)(),
                    v = (0, C.K)(i),
                    g = (0, y.A)(i),
                    N = (0, f.F)(),
                    { formatMessage: A } = (0, o.A)(),
                    k = (0, E.P)(),
                    S = m.checkExperiment(K.z.WebEditorsFeatures, 'on'),
                    T = (0, B.A)({ entityVariant: X.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, V.N)(l);
                let L = (0, u.c)(() => {
                    if (d) return void _();
                    k() || (h.openPlaylistTrailer(i.id), N(n.DomainObjectType.Playlist, i.id));
                });
                return (0, s.jsxs)(F.W1, {
                    title: i.title,
                    onOpenChange: r,
                    open: l,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: A({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...a,
                    children: [
                        S && (0, s.jsx)(Y.d, { entityVariant: X.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : T }),
                        !p && (0, s.jsx)($.L, { onClick: g, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)(W.T, { onClick: v, isLiked: i.isLiked, disabled: !x.isAuthorized }),
                        (null == (e = i.trailer) ? void 0 : e.isAvailable) && (0, s.jsx)(G.N, { onClick: L, disabled: !i.isAvailable }),
                    ],
                });
            });
            var Q = i(17657),
                Z = i.n(Q);
            let J = (0, l.PA)((t) => {
                let { className: e, playlist: i, children: l, contentLinesCount: F, customDescription: B, onCoverMouseDown: Y } = t,
                    { ref: U, intersectionPropertyId: V } = (0, A.n)(),
                    {
                        trailer: X,
                        user: K,
                        paywall: { modal: W },
                    } = (0, j.g)(),
                    { from: $, utmLink: G } = (0, k.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Q } = (0, o.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: tt, sendPlaySearchFeedback: te } = (0, L.z)(),
                    [ti, ts] = (0, a.useState)(!1),
                    [tr, tl] = (0, a.useState)(!1),
                    [ta, to] = (0, a.useState)(!1),
                    tn = (0, H.r)(i),
                    tc = (0, C.K)(i),
                    td = (0, y.A)(i),
                    tu = (0, g.N)(),
                    t_ = (0, N.b)(),
                    tm = (0, T.Z)(i.url),
                    tp = (0, f.F)(),
                    th = (0, E.P)(),
                    tx = (0, u.c)((t) => {
                        if ((t.stopPropagation(), th())) return void t.preventDefault();
                        (X.setUtmLink(G), X.openPlaylistTrailer(i.id), tp(n.DomainObjectType.Playlist, i.id));
                    }),
                    [tv, tC] = (0, a.useState)(!1),
                    { isPlaying: ty, togglePlay: tE } = (0, P.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: $, utmLink: G }, loadContextMeta: !0 },
                    }),
                    tg = (0, u.c)(() => {
                        (tu({ to: n.AppScreen.PlaylistScreen }), null == tt || tt());
                    }),
                    tN = (0, u.c)((t) => {
                        (tg(), tm(t));
                    }),
                    tf = (0, S.N)(),
                    tA = (0, u.c)(() => {
                        if (!th()) {
                            if (tf) return void W.open();
                            (ti || ty || (ts(!0), null == te || te()), tE(), t_(!ty));
                        }
                    }),
                    tk = (0, u.c)(() => {
                        (tr || i.isLiked || (tl(!0), null == J || J()), tc());
                    }),
                    tS = (0, u.c)((t) => {
                        (t.preventDefault(), t.stopPropagation());
                    }),
                    tT = (0, u.c)((t) => {
                        (to(t), tC(t));
                    }),
                    tL = (0, a.useMemo)(() => {
                        var t;
                        return B
                            ? (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: B }, i.getKey('description'))
                            : (null == (t = i.artists) ? void 0 : t.length)
                              ? (0, s.jsx)(
                                    v.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [B, i]),
                    tP = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                b.c,
                                {
                                    className: (0, r.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: tk,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !K.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    tj = (0, a.useMemo)(() => {
                        var t;
                        if (null == i || null == (t = i.trailer) ? void 0 : t.isAvailable)
                            return (0, s.jsx)(
                                z.n,
                                {
                                    children: (0, s.jsx)(
                                        M.k,
                                        { className: (0, r.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: tx },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [tx, i]),
                    tR = (0, a.useMemo)(
                        () =>
                            (0, s.jsx)(
                                w.O,
                                { onClick: td, isPinned: i.isPinned, className: (0, r.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [td, i],
                    ),
                    tO = (0, a.useMemo)(
                        () =>
                            (0, s.jsx)(h.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: tN,
                                    onMouseDown: Y,
                                    children: [
                                        (0, s.jsx)(O.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: tn,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(m.hg, {
                                            isVisible: ta || tv,
                                            className: Z().controls,
                                            playControl: (0, s.jsx)(
                                                D.D,
                                                {
                                                    className: (0, r.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: tA,
                                                    isPlaying: ty,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: tP,
                                            menuControl: (0, s.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: tT,
                                                    open: ta,
                                                    onClick: tS,
                                                    className: (0, r.$)(Z().menuButton, Z().control),
                                                    icon: (0, s.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: tR,
                                            trailerControl: tj,
                                        }),
                                    ],
                                }),
                            }),
                        [tN, Y, i, tn, ta, tv, tA, ty, tP, tT, tS, tR, tj],
                    ),
                    tb = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(m.MN, {
                    ref: U,
                    'aria-label': tn,
                    className: (0, r.$)(Z().root, e),
                    title: (0, s.jsx)(x.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(I.N, { className: Z().titleLink, href: i.url, tabIndex: -1, onClick: tg, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(I.N, { className: Z().srTitleLink, href: i.url, onClick: tg, children: i.title }),
                    'data-intersection-property-id': V,
                    contentLinesCount: F,
                    view: tO,
                    description: tL,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        tb &&
                            (0, s.jsx)(R.x, {
                                ariaLabel: Q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: tc,
                            }),
                        l,
                    ],
                });
            });
        },
        42674: (t) => {
            t.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        46606: (t, e, i) => {
            'use strict';
            var s;
            (i.d(e, { X: () => s }),
                (function (t) {
                    ((t[(t.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (t[(t.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (t[(t.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (t[(t.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (t[(t.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (t[(t.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
        },
        47513: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => l });
            var s = i(53548),
                r = i(2058);
            let l = (t) => {
                let { formatMessage: e } = (0, r.A)();
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
        54320: (t, e, i) => {
            'use strict';
            i.d(e, { X: () => d });
            var s = i(88800),
                r = i(53548),
                l = i(29993),
                a = i(9492),
                o = i(29595),
                n = i(74965),
                c = i(74773);
            let d = (t, e) => {
                let { notify: i, dismiss: d } = (0, n.l)(),
                    u = (0, r.useRef)(void 0),
                    _ = (0, l.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let s = [...(null != (i = t.lastRejectedPagesList) ? i : [])].reverse().filter((e) => {
                            var i;
                            return (null == (i = t.pageStates) ? void 0 : i[e]) === c.G.REJECT;
                        });
                        (t.resetRejectedPagesState(),
                            s.forEach((t) => {
                                e(t);
                            }));
                    });
                (0, r.useEffect)(() => {
                    t.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(a.L, { reloadBlocks: _ }), { containerId: o.u.ERROR, autoClose: !1 }));
                }, [d, _, i, t.rejectedPagesCount]);
            };
        },
        56446: (t, e, i) => {
            'use strict';
            i.d(e, { k: () => u });
            var s = i(88800),
                r = i(53548),
                l = i(2058),
                a = i(17392),
                o = i(96817),
                n = i(52300),
                c = i(39318);
            let d = (t) => {
                    let {
                            variant: e,
                            withRipple: i,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: h,
                            forwardRef: x,
                            style: v,
                            children: C,
                        } = t,
                        { formatMessage: y } = (0, l.A)(),
                        E = y({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(o.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: e,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': E,
                        onClick: m,
                        ref: x,
                        icon: (0, s.jsx)(n.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': a.S7.TRAILER_BUTTON,
                        children: C,
                    });
                },
                u = (0, r.forwardRef)((t, e) => (0, s.jsx)(d, { forwardRef: e, ...t }));
        },
        57328: (t, e, i) => {
            'use strict';
            i.d(e, { WithAuth: () => h });
            var s = i(88800),
                r = i(84961),
                l = i(58390),
                a = i(65724),
                o = i(88969),
                n = i(29504),
                c = i(7628),
                d = i(42674),
                u = i.n(d);
            let _ = (0, r.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(n.DZ, {
                            className: (0, a.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(n.HL, {
                            className: (0, a.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(o.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = i(4370),
                p = i(72288);
            let h = (0, r.PA)((t) => {
                let { children: e, withRedirectToMainPage: i } = t,
                    { user: r } = (0, p.g)();
                return r.isAuthorized ? e : (i && (0, l.redirect)(m.Z.main.href), (0, s.jsx)(_, {}));
            });
        },
        60266: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => a });
            var s = i(88800);
            i(30282);
            var r = i(11006),
                l = i.n(r);
            let a = (t) => {
                let { children: e } = t;
                return (0, s.jsx)('footer', { className: l().empty });
            };
        },
        62293: (t, e, i) => {
            'use strict';
            i.d(e, { v: () => r });
            var s = i(97956);
            let r = (t) => {
                let { checkExperiment: e, getDisclaimerContent: i, getExplicitContent: r, userRegion: l } = t;
                return 'ru' === l && e(s.z.WebNextFooterDisclaimer, 'on') ? i() : r();
            };
        },
        65343: (t) => {
            t.exports = {
                root: 'CollectionPlaylistsCreatedPage_root__o77CF',
                scrollContainer: 'CollectionPlaylistsCreatedPage_scrollContainer__Spb2M',
                important: 'CollectionPlaylistsCreatedPage_important__DLkOq',
                content: 'CollectionPlaylistsCreatedPage_content___qalr',
                footer: 'CollectionPlaylistsCreatedPage_footer__I2jJa',
                item: 'CollectionPlaylistsCreatedPage_item__2RmBg',
            };
        },
        65523: (t, e, i) => {
            'use strict';
            i.d(e, { U: () => o });
            var s = i(4086),
                r = i(41928),
                l = i(44084);
            let a = new WeakMap(),
                o = () =>
                    ((t) => {
                        if (t instanceof l.r) return t;
                        let e = a.get(t);
                        if (e) return e;
                        let i = {
                            log: (e, i) => t.info(e, i),
                            trace: (e, i) => t.trace(e, i),
                            debug: (e, i) => t.debug(e, i),
                            info: (e, i) => t.info(e, i),
                            warn: (e, i) => t.warn(e, i),
                            error: (e, i) => t.error(e, i),
                            fatal: (e, i) => t.fatal(e, i),
                            child: (e) => t.child(e),
                        };
                        return (a.set(t, i), i);
                    })((0, r.N)().get(s.Zf));
        },
        67990: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => s });
            let s = (t) => 'object' == typeof t && null !== t && 'request' in t && null !== t.request;
        },
        70396: (t) => {
            t.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        79418: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => x });
            var s = i(88800),
                r = i(65724),
                l = i(61013),
                a = i(53548);
            let o = (t) => {
                    let { style: e, forwardRef: i, context: r, ...l } = t,
                        a = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        o = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': a, style: { ...e }, ref: i, ...l });
                },
                n = (0, a.forwardRef)((t, e) => (0, s.jsx)(o, { forwardRef: e, ...t }));
            var c = i(16434),
                d = i.n(c);
            let u = (t) => {
                    let { style: e, forwardRef: i, withFooter: l, withHeader: a, withForceScroll: o, ...n } = t;
                    return (0, s.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: l, [d().scroller_withHeader]: a, [d().scroller_withForceScroll]: o }),
                        style: { ...e },
                        ref: i,
                        ...n,
                        tabIndex: -1,
                    });
                },
                _ = (0, a.forwardRef)((t, e) => (0, s.jsx)(u, { forwardRef: e, ...t }));
            var m = i(55482),
                p = i(75151);
            let h = (t) => {
                    let {
                            pageSize: e,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: l = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = t,
                        [_, h] = (0, a.useState)(null),
                        x = (0, a.useMemo)(
                            () =>
                                (0, m.A)((t) => {
                                    if ((null == r || r(t), n.length > 0 && h(t), e && i)) {
                                        let s = Math.floor(t.endIndex / e) + 1,
                                            r = Math.floor(t.startIndex / e);
                                        for (let t = r; t < s; t++) i(t);
                                    }
                                }, l),
                            [l, r, e, i, n],
                        );
                    (0, a.useEffect)(() => {
                        n.length > 0 && _ && x(_);
                    }, n);
                    let v = (0, a.useMemo)(() => {
                        if (c)
                            return (0, m.A)((t) => {
                                c(t);
                            }, l);
                    }, [c, l]);
                    return (0, s.jsx)(p.sN, { ref: d, rangeChanged: x, totalCount: o, endReached: v, ...u });
                },
                x = (t) => {
                    let {
                            className: e,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: x = 700,
                            pageSize: v = 20,
                            totalCount: C,
                            totalRequests: y,
                            debounceDurationInMs: E,
                            initialItemCount: g,
                            minInitialItemCount: N = 20,
                            handleRef: f,
                            alwaysShowScrollbar: A = !1,
                            testId: k,
                            isMobileLayout: S = !1,
                            shouldTriggerRangeChangedOn: T,
                            ...L
                        } = t,
                        [P, j] = (0, a.useState)(!1),
                        R = (0, a.useMemo)(
                            () =>
                                (0, l.A)((t) => {
                                    j(t);
                                }, 100),
                            [],
                        ),
                        O = (0, a.useMemo)(() => {
                            var t, e;
                            return S
                                ? {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : n,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : n,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, y, S]),
                        b = g ? Math.min(g, N) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: P || A, [d().root_notScrolling]: !P && !A }, e),
                        'data-test-id': k,
                        children: [
                            S && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: x,
                                components: O,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: R,
                                itemContent: m,
                                scrollerRef: f,
                                totalCount: C,
                                pageSize: v,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: E,
                                initialItemCount: b,
                                shouldTriggerRangeChangedOn: T,
                                ...L,
                            }),
                            S && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        80932: (t) => {
            t.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        84218: (t) => {
            t.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        85902: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => m });
            var s = i(88800),
                r = i(96706),
                l = i(53548),
                a = i(2058),
                o = i(79390),
                n = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                _ = i(30832);
            let m = (t) => {
                let { user: e } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, p] = (0, l.useState)(!1),
                    { formatMessage: h } = (0, a.A)();
                return (0, l.useCallback)(async () => {
                    if (!e.isAuthorized) return void i((0, s.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (m) return;
                    let l = { ...(0, r.HO)(t), url: t.url, isLiked: !t.isLiked };
                    p(!0);
                    let a = await t.toggleLike();
                    (p(!1),
                        a === o.f.OK
                            ? i((0, s.jsx)(_.T, { playlist: l }), { containerId: n.u.INFO })
                            : i((0, s.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e.isAuthorized, m, t, h, i]);
            };
        },
        86298: (t, e, i) => {
            'use strict';
            i.d(e, { x: () => _ });
            var s = i(88800),
                r = i(65724),
                l = i(2058),
                a = i(17392),
                o = i(96817),
                n = i(52300),
                c = i(29504),
                d = i(84218),
                u = i.n(d);
            let _ = (t) => {
                let { className: e, isLiked: i, likesCount: d, handleLikeClick: _, ariaLabel: m } = t,
                    { formatNumber: p } = (0, l.A)();
                return (0, s.jsx)(o.$, {
                    className: (0, r.$)(u().root, e),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(n.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': a.S7.CARD_LIKES,
                    children: (0, s.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        86790: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => k });
            var s = i(88800),
                r = i(65724),
                l = i(84961),
                a = i(2058),
                o = i(30282),
                n = i(94144),
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
                    let { formatMessage: e, language: i, tld: s, year: r } = t;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: e({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: e({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var _ = i(62293),
                m = i(99839);
            let p = (t) => t(new Date(), (0, m.m)());
            var h = i(51611),
                x = i(72288),
                v = i(11006),
                C = i.n(v),
                y = i(17392),
                E = i(29504),
                g = i(91292);
            let N = (t) => {
                    let { className: e, data: i } = t;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(C().copyrights, e),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(g.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(E.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(g.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: C().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                f = (t) => {
                    let { disclaimer: e, links: i } = t;
                    return (0, s.jsxs)('div', {
                        className: C().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: C().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: i.map((t) => {
                                    let { id: e, title: i, url: r } = t;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: C().item,
                                            children: (0, s.jsx)(g.N, { target: '_blank', href: r, className: C().link, 'data-test-id': y.S7.FOOTER_LINK, children: i }),
                                        },
                                        e,
                                    );
                                }),
                            }),
                            (0, s.jsx)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: C().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: e },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                A = (t) => {
                    let { className: e, data: i } = t;
                    return (0, s.jsxs)('footer', {
                        className: (0, r.$)(C().root, C().important, e),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, s.jsx)(f, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(N, { data: i.copyrights })],
                    });
                };
            (0, l.PA)((t) => {
                let { className: e } = t,
                    { location: i } = (0, x.g)(),
                    { formatDate: r, formatMessage: l } = (0, a.A)(),
                    { language: o } = (0, h.h)(),
                    n = u({ formatMessage: l, language: o, tld: i.tld, year: p(r) });
                return (0, s.jsx)(N, { className: e, data: n });
            });
            let k = (0, l.PA)((t) => {
                var e;
                let { className: i } = t,
                    { experiments: l, location: m, user: v } = (0, x.g)(),
                    { formatDate: y, formatMessage: E } = (0, a.A)(),
                    { isEnabled: g } = null != (e = (0, n.P)()) ? e : {},
                    { language: N } = (0, h.h)(),
                    f = ((t) => {
                        let { checkExperiment: e, formatMessage: i, isWebApplication: s, language: r, tld: l, userRegion: a, year: o } = t;
                        return {
                            links: ((t) => {
                                let { formatMessage: e, isWebApplication: i, tld: s, language: r, userRegion: l } = t,
                                    a = { id: c.COPYRIGHT_HOLDER, title: e({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, r) },
                                    o = { id: c.PRIVACY_POLICY, title: e({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, r) },
                                    n = { id: c.AGREEMENT, title: e({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: e({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, r) },
                                    _ = { id: c.HELP, title: e({ id: 'footer.links-help' }), url: d(c.HELP, s, r) },
                                    m = [a, n, u];
                                return (i && 'ru' === l && m.push(o), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: s, language: r, tld: l, userRegion: a }),
                            disclaimer: (0, _.v)({
                                checkExperiment: e,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: a,
                            }),
                            copyrights: u({ formatMessage: i, language: r, tld: l, year: o }),
                        };
                    })({
                        checkExperiment: (t, e) => l.checkExperiment(t, e),
                        formatMessage: E,
                        isWebApplication: o.$3,
                        tld: m.tld,
                        language: N,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: p(y),
                    });
                return (0, s.jsx)(A, { className: (0, r.$)({ [C().root_withOffsetForDeeplink]: g }, i), data: f });
            });
        },
        89916: (t, e, i) => {
            'use strict';
            i.d(e, { GX: () => l.G, X1: () => s.X, m5: () => r.m });
            var s = i(46606),
                r = i(91136),
                l = i(19840);
            i(17017);
        },
        91136: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => r });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(t, e = {}) {
                    let { code: i = 'E_INTERNAL', data: r = {}, ...l } = e,
                        a = t || 'Internal error';
                    (super(a, l), (this.message = a), (this.code = i), (this.data = r), (this.stack = Error(a).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class r extends s {
                name = 'HttpException';
                constructor(t = 'Http Client error', { code: e = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(t, { code: e, ...i }), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        94144: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => r, P: () => l });
            var s = i(53548);
            let r = (0, s.createContext)(null),
                l = () => (0, s.useContext)(r);
        },
        94860: (t, e, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 32780)));
        },
        99839: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
        99890: (t, e, i) => {
            'use strict';
            i.d(e, { C8: () => l, UC: () => a, dM: () => o, uV: () => n });
            var s = i(89916),
                r = i(67990);
            let l = (t) => {
                    if (void 0 === t || '' === t) return 'missing';
                    let e = Number(t);
                    return !Number.isFinite(e) || e < 0 ? 'invalid' : e < 86400 ? 'lt-1d' : e <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                a = (t) => (t.uid ? 'authorized' : 'no-uid'),
                o = (t) => {
                    if (!(t instanceof s.m5) || !(0, r.N)(t.cause)) return 'unexpected';
                    let e = ((t) => {
                        if (!(0, r.N)(t.cause)) return;
                        let e = t.cause.response;
                        if ('object' == typeof e && null !== e) {
                            if ('statusCode' in e && 'number' == typeof e.statusCode) return e.statusCode;
                            if ('status' in e && 'number' == typeof e.status) return e.status;
                        }
                    })(t);
                    return void 0 === e ? 'transport' : 401 === e ? '401' : e >= 400 && e < 500 ? '4xx' : e >= 500 && e < 600 ? '5xx' : 'unexpected';
                },
                n = (t) => {
                    try {
                        var e;
                        null == (e = window.musicDesktop) || e.authorization.reportDiagnostic(t);
                    } catch (t) {}
                };
        },
    },
    (t) => {
        (t.O(
            0,
            [
                7435, 8752, 5108, 127, 1931, 1191, 7617, 3637, 3165, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 5151, 4732, 1195, 1598, 1928,
                7627, 9124, 7967, 900, 9934, 6387, 4561, 4613, 763, 2670, 7358,
            ],
            () => t((t.s = 94860)),
        ),
            (_N_E = t.O()));
    },
]);
