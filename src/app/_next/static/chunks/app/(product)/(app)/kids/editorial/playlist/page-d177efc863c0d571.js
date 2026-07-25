(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5063],
    {
        8626: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
        11262: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var s = i(32290),
                l = i(55178),
                r = i(91027),
                n = i(71730),
                a = i(45477),
                o = i(75582),
                c = i(49399);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, l.useRef)(void 0),
                    _ = (0, r.c)(() => {
                        var i;
                        d({ notificationId: u.current }), (u.current = 0);
                        let s = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            });
                    });
                (0, l.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(n.L, { reloadBlocks: _ }), { containerId: a.u.ERROR, autoClose: !1 }));
                }, [d, _, i, e.rejectedPagesCount]);
            };
        },
        11675: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
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
        13931: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r });
            var s = i(55178),
                l = i(60900);
            let r = (e) => {
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
        14858: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => n });
            var s = i(60900),
                l = i(57594),
                r = i(79406);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, s.A)(),
                    { user: i, experiments: n } = (0, l.g)(),
                    a = 'ru' === i.account.data.userSessionRegionIso && n.checkExperiment(r.z.WebNextFooterDisclaimer, 'on'),
                    o = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return a ? t({ id: 'footer.disclaimer-content' }) : o;
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        20472: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => l });
            var s = i(36477);
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
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        22492: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var s = i(32290),
                l = i(55178),
                r = i(60900),
                n = i(21732),
                a = i(63423),
                o = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: l,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: h,
                            forwardRef: x,
                            style: g,
                            children: v,
                        } = e,
                        { formatMessage: y } = (0, r.A)(),
                        C = y({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(a.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: l,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: m,
                        ref: x,
                        icon: (0, s.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: g,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, l.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
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
        31010: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => l, P: () => r });
            var s = i(55178);
            let l = (0, s.createContext)(null),
                r = () => (0, s.useContext)(l);
        },
        32468: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var s = i(32290),
                l = i(77088),
                r = i.n(l);
            let n = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: r().empty });
            };
        },
        34925: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var s = i(32290),
                l = i(60900),
                r = i(70280);
            let n = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, l.A)();
                return (0, s.jsx)(r.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        39684: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        41677: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => D });
            var s = i(32290),
                l = i(63618),
                r = i(96103),
                n = i(55178),
                a = i(70280),
                o = i(57594),
                c = i(53514),
                d = i(40484),
                u = i.n(d),
                _ = i(60900),
                m = i(16172),
                p = i(21732),
                h = i(91027),
                x = i(71926),
                g = i(47745),
                v = i(84062),
                y = i(28999),
                C = i(61258),
                f = i(19383);
            let k = (0, r.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: l,
                            captionClassName: r,
                            captionSize: n = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: k } = (0, _.A)(),
                        {
                            track: S,
                            settings: { isMobile: A },
                        } = (0, o.g)(),
                        L = (0, v.Z)(t.url),
                        { sendNavigateSearchFeedback: N } = (0, y.z)(),
                        j = (0, g.N)(),
                        P = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: s, fullscreenPlayer: l, fullscreenVideoPlayer: r } = (0, o.g)(),
                                { modal: n } = s;
                            return (0, f.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), n.isOpened && (s.reset(), n.close()), l.modal.isOpened && l.modal.close();
                                },
                                onAfterHandled: () => {
                                    r.modal.isOpened && (r.modal.close(), r.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, h.c)((e) => {
                                A && S.isOpened && S.close(), L(e);
                            }),
                        }),
                        E = (0, h.c)((e) => {
                            j({ to: m.QT.ArtistScreen }), null == N || N(), P(e);
                        });
                    return i && !t.various
                        ? (0, s.jsx)(C.N, {
                              'aria-label': k({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: l,
                              href: t.url,
                              onClick: E,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(a.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: r, children: t.name }),
                              }),
                          })
                        : (0, s.jsx)(a.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, s.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: r,
                                  title: d ? void 0 : c || t.name,
                                  'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                S = (e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: l,
                            captionClassName: r,
                            captionSize: a,
                            allArtistsTitle: o,
                            withCustomTooltip: c,
                            hoverSettings: d,
                            shouldUseSeparator: u = !0,
                        } = e,
                        _ = (0, n.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, s.jsx)(
                                                  k,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: l,
                                                      captionClassName: r,
                                                      captionSize: a,
                                                      allArtistsTitle: o,
                                                      withCustomTooltip: c,
                                                      hoverSettings: d,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, i, l, r, a, o, c, d]);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(k, {
                                artist: t,
                                withLink: i,
                                linkClassName: l,
                                captionClassName: r,
                                captionSize: a,
                                allArtistsTitle: o,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            _,
                        ],
                    });
                };
            var A = i(39407),
                L = i(63887);
            let N = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: r } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(L.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(u().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': p.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(A.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var j = i(8055),
                P = i(6752),
                E = i(78035),
                R = i(78176),
                b = i(83598),
                T = i.n(b);
            let I = (0, r.PA)((e) => {
                    let { label: t, artists: i, forwardRef: l } = e;
                    return (0, s.jsxs)(a.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, E.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: l, children: t }),
                            (0, s.jsx)(a.ZI, { className: T().tooltipContent, children: i.map((e) => (0, s.jsx)(R.V, { artist: e, className: T().artistItem }, e.id)) }),
                        ],
                    });
                }),
                w = (0, n.forwardRef)((e, t) => (0, s.jsx)(I, { forwardRef: t, ...e }));
            var O = i(19740),
                F = i(52598),
                z = i.n(F);
            let M = (0, r.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: r } = (0, _.A)();
                    return (0, s.jsx)(O.W1, {
                        isMobile: !0,
                        className: (0, l.$)(z().root, z().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(R.V, { artist: e }, e.id)),
                    });
                }),
                W = (0, r.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: l } = e,
                        [r, a] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, o.g)(),
                        d = (0, h.c)(() => {
                            let e = l.current;
                            e && a(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, P.L)(() =>
                            (0, j.A)(() => {
                                d();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                d(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, d],
                        ),
                        (0, n.useEffect)(() => {
                            d();
                        }, [t, d]),
                        0 !== t.length)
                    )
                        return (r || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(M, { artists: t, label: i }) : (0, s.jsx)(w, { artists: t, label: i })) : i;
                }),
                D = (0, r.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: r = ', ',
                            lineClamp: d,
                            visibleArtistsCount: _,
                            withLink: m = !0,
                            spoilerClassName: p,
                            linkClassName: h,
                            captionClassName: x,
                            captionSize: g,
                            variant: v = 'breakAll',
                            withAllArtistsTitle: y = !0,
                            withComposer: C = !0,
                            spoilerComponent: f,
                            withCustomTooltip: k = !0,
                            artistIdWithoutLink: A,
                            withContextMenu: L,
                        } = e,
                        j = (0, n.useRef)(null),
                        [P, E] = (0, n.useState)(!1),
                        R = y
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
                                  .join(r)
                            : '',
                        {
                            settings: { isMobile: b },
                        } = (0, o.g)(),
                        T = 1 === i.length,
                        I = (0, n.useCallback)((e) => {
                            E(!0), e.preventDefault();
                        }, []),
                        w = (0, n.useMemo)(() => {
                            let e = i;
                            return (
                                _ && !P && (e = i.slice(0, _)),
                                e.reduce((e, t) => {
                                    if (!C && t.isComposer) return e.length ? e : [];
                                    let i = (0, s.jsx)(
                                        S,
                                        {
                                            artist: t,
                                            linkClassName: h,
                                            captionClassName: x,
                                            withLink: m && t.id !== A && (((!b || T) && L) || !L),
                                            captionSize: g,
                                            allArtistsTitle: R,
                                            withCustomTooltip: k,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!r,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([r, i]) : [i];
                                }, [])
                            );
                        }, [i, _, P, C, b, T, L, h, x, m, A, g, R, k, r]),
                        O = (0, n.useMemo)(() => {
                            if (!P && _ && _ < i.length) {
                                let e = i.length - _;
                                return (0, n.isValidElement)(f) ? f : (0, s.jsx)(N, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: I });
                            }
                        }, [i.length, I, P, p, f, _]),
                        F = (0, n.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        z = (0, s.jsx)(a.m_, {
                            referenceRef: j,
                            enabled: !!(y && R) && k && !L && !b,
                            offsetOptions: 4,
                            placement: 'top',
                            text: R,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: F,
                                className: (0, l.$)(u().root, u()['root_variant_'.concat(v)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: y && R && !k && !L ? R : void 0,
                                children: [w, O],
                            }),
                        });
                    return L ? (0, s.jsx)(W, { labelRef: j, artists: i, label: z }) : z;
                });
        },
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x });
            var s = i(32290),
                l = i(63618),
                r = i(8055),
                n = i(55178);
            let a = (e) => {
                    let { style: t, forwardRef: i, context: l, ...r } = e,
                        n = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        a = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: a, 'aria-label': n, style: { ...t }, ref: i, ...r });
                },
                o = (0, n.forwardRef)((e, t) => (0, s.jsx)(a, { forwardRef: t, ...e }));
            var c = i(39684),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: r, withHeader: n, withForceScroll: a, ...o } = e;
                    return (0, s.jsx)('div', {
                        className: (0, l.$)(d().scroller, { [d().scroller_withFooter]: r, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: a }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var m = i(62060),
                p = i(31417);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: l,
                            debounceDurationInMs: r = 100,
                            totalCount: a = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            ...d
                        } = e,
                        [u, _] = (0, n.useState)(null),
                        h = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == l || l(e), o.length > 0 && _(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < s; e++) i(e);
                                    }
                                }, r),
                            [r, l, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && u && h(u);
                    }, o);
                    let x = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, r);
                    }, [c, r]);
                    return (0, s.jsx)(p.sN, { rangeChanged: h, totalCount: a, endReached: x, ...d });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: a,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: x = 700,
                            pageSize: g = 20,
                            totalCount: v,
                            totalRequests: y,
                            debounceDurationInMs: C,
                            initialItemCount: f,
                            minInitialItemCount: k = 20,
                            handleRef: S,
                            alwaysShowScrollbar: A = !1,
                            testId: L,
                            isMobileLayout: N = !1,
                            shouldTriggerRangeChangedOn: j,
                            ...P
                        } = e,
                        [E, R] = (0, n.useState)(!1),
                        b = (0, n.useMemo)(
                            () =>
                                (0, r.A)((e) => {
                                    R(e);
                                }, 100),
                            [],
                        ),
                        T = (0, n.useMemo)(() => {
                            var e, t;
                            return N
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, y, N]),
                        I = f ? Math.min(f, k) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(d().root, { [d().root_scrolling]: E || A, [d().root_notScrolling]: !E && !A }, t),
                        'data-test-id': L,
                        children: [
                            N && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: x,
                                components: T,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: b,
                                itemContent: m,
                                scrollerRef: S,
                                totalCount: v,
                                pageSize: g,
                                onPageHandler: a,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: j,
                                ...P,
                            }),
                            N && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        57594: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => r, g: () => n });
            var s = i(29222),
                l = i(55178);
            let r = (0, l.createContext)(null);
            function n() {
                let e = (0, l.useContext)(r);
                if (null === e) throw new s.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        58054: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => f });
            var s = i(32290),
                l = i(63618),
                r = i(96103),
                n = i(60900),
                a = i(39407),
                o = i(21732),
                c = i(71926),
                d = i(14858),
                u = i(8626),
                _ = i(31010),
                m = i(61945),
                p = i(57594),
                h = (function (e) {
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
            let x = (e, t, i) => {
                switch (e) {
                    case h.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case h.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                    case h.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                    case h.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                    case h.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case h.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                    case h.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                }
            };
            var g = i(61258),
                v = i(77088),
                y = i.n(v);
            let C = (0, r.PA)((e) => {
                    let { className: t } = e,
                        { location: i } = (0, p.g)(),
                        { formatDate: r } = (0, n.A)(),
                        { language: d } = (0, m.h)();
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(y().copyrights, t),
                        'data-test-id': o.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    r(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, s.jsx)(g.N, {
                                        target: '_blank',
                                        href: x(h.YANDEX, i.tld, d),
                                        className: (0, l.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': o.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, s.jsx)(a.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(g.N, {
                                target: '_blank',
                                href: x(h.YANDEX_PROJECTS, i.tld, d),
                                className: y().copyrightLink,
                                'data-test-id': o.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, s.jsx)(a.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                f = (0, r.PA)((e) => {
                    var t;
                    let { className: i } = e,
                        { user: r, location: n } = (0, p.g)(),
                        { isEnabled: u } = null != (t = (0, _.P)()) ? t : {},
                        { language: v } = (0, m.h)(),
                        f = (0, d.w)(!0),
                        k = ((e) => {
                            let { platform: t, tld: i, language: l, userRegion: r } = e,
                                n = { title: (0, s.jsx)(a.A, { id: 'footer.links-copyright-holders' }), url: x(h.COPYRIGHT_HOLDER, i, l) },
                                o = { title: (0, s.jsx)(a.A, { id: 'footer.links-privacy-policy' }), url: x(h.PRIVACY_POLICY, i, l) },
                                c = { title: (0, s.jsx)(a.A, { id: 'footer.links-terms' }), url: x(h.AGREEMENT, i, l) },
                                d = { title: (0, s.jsx)(a.A, { id: 'footer.links-recommendation-rules' }), url: x(h.RECOMMENDATION_RULES, i, l) },
                                u = { title: (0, s.jsx)(a.A, { id: 'footer.links-help' }), url: x(h.HELP, i, l) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [n, c, d];
                                    return 'ru' === r && e.push(o), e.push(u), e;
                                }
                                case 'desktop':
                                    return [n, c, d, u];
                            }
                        })({ platform: 'desktop', tld: n.tld, language: v, userRegion: r.account.data.userSessionRegionIso });
                    return (0, s.jsxs)('footer', {
                        className: (0, l.$)(y().root, y().important, { [y().root_withOffsetForDeeplink]: u }, i),
                        'data-test-id': o.S7.FOOTER,
                        children: [
                            (0, s.jsxs)('div', {
                                className: y().links,
                                children: [
                                    (0, s.jsx)('ol', {
                                        className: y().list,
                                        'data-test-id': o.S7.FOOTER_LINKS_LIST,
                                        children: k.map((e) => {
                                            let { title: t, url: i } = e;
                                            return (0, s.jsx)(
                                                'li',
                                                {
                                                    className: y().item,
                                                    children: (0, s.jsx)(g.N, {
                                                        target: '_blank',
                                                        href: i,
                                                        className: y().link,
                                                        'data-test-id': o.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                i,
                                            );
                                        }),
                                    }),
                                    (0, s.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: y().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: f },
                                        'data-test-id': o.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(C, {}),
                        ],
                    });
                });
        },
        61376: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => _ });
            var s = i(32290),
                l = i(63618),
                r = i(60900),
                n = i(21732),
                a = i(63423),
                o = i(82586),
                c = i(71926),
                d = i(22492),
                u = i.n(d);
            let _ = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: _, ariaLabel: m } = e,
                    { formatNumber: p } = (0, r.A)();
                return (0, s.jsx)(a.$, {
                    className: (0, l.$)(u().root, t),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': n.S7.CARD_LIKES,
                    children: (0, s.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => f });
            var s = i(32290),
                l = i(63618),
                r = i(96103),
                n = i(55178),
                a = i(60900),
                o = i(39407),
                c = i(63423),
                d = i(82586),
                u = i(71926),
                _ = i(16172),
                m = i(52068),
                p = i(62376),
                h = i(37240),
                x = i(83920),
                g = i(20472),
                v = i(12894),
                y = i(30310),
                C = i.n(y);
            let f = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: r } = (0, a.A)(),
                    y = r({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, m.st)(),
                        { hash: i } = (0, m.gf)(),
                        { pageId: s } = (0, h.$)(),
                        l = (0, p.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !s) return;
                        let r = (0, _.Fx)({
                            params: {
                                entityType: _.LA.Error,
                                entityId: _.LA.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: s,
                                pageStyle: _.QL.Fullscreen,
                                pagePlacement: _.c4.Fullscreen,
                                mainObjectType: _.ky.NonApplicable,
                                mainObjectId: _.ky.NonApplicable,
                            },
                            logger: l,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, _.z5)(t.evgenInstance, r);
                    }, [t, e, i, s, l]);
                })(y);
                let { sendRefreshEvent: f } = (function () {
                        let e = (0, m.st)(),
                            { hash: t } = (0, m.gf)(),
                            { pageId: i } = (0, h.$)(),
                            s = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let l = (0, _.Fx)({
                                    params: {
                                        actionType: _.X2.Refresh,
                                        userInteractionType: _.gi.Tap,
                                        entityType: _.LA.Error,
                                        entityId: _.LA.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: _.QL.Fullscreen,
                                        pagePlacement: _.c4.Fullscreen,
                                        mainObjectType: _.ky.NonApplicable,
                                        mainObjectId: _.ky.NonApplicable,
                                    },
                                    logger: s,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                l && (0, _.bv)(e.evgenInstance, l);
                            }, [e, t, i, s]),
                        };
                    })(),
                    k = (0, n.useCallback)(() => {
                        f(), (window.location.href = g.Z.main.href);
                    }, [f]),
                    { contentRef: S } = (0, x.g)();
                return (0, s.jsxs)('div', {
                    className: (0, l.$)(C().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(v.L, { withBackwardFallback: '/', className: (0, l.$)(C().navigation, { [C().navigation_desktop]: !S }), withForwardControl: !1 }),
                        (0, s.jsxs)('div', {
                            className: (0, l.$)(C().content, { [C().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(d.I, { className: C().icon, variant: 'attention', size: 'xxl' }),
                                (0, s.jsx)(u.DZ, { className: (0, l.$)(C().title, C().important), variant: 'h3', size: 'xs', children: y }),
                                (0, s.jsxs)(u.HL, {
                                    className: (0, l.$)(C().text, C().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, s.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, s.jsx)(c.$, {
                                    onClick: k,
                                    className: C().button,
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
        70718: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        71730: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => p });
            var s = i(32290),
                l = i(63618),
                r = i(55178),
                n = i(60900),
                a = i(39407),
                o = i(63423),
                c = i(82586),
                d = i(71926),
                u = i(58534),
                _ = i(70718),
                m = i.n(_);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, r.useRef)(null),
                    { formatMessage: p } = (0, n.A)();
                (0, r.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let h = (0, r.useMemo)(
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
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, s.jsx)(u.$, { className: (0, l.$)(m().root, m().important), message: h, closeToast: i });
            };
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var s = i(32290),
                l = i(92708),
                r = i(55178),
                n = i(60900),
                a = i(63380),
                o = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                _ = i(97647),
                m = i(97755);
            let p = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, s.jsx)(m.O, {
                        entityVariant: _.c.PLAYLIST,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        closeToast: i,
                        coverUri: t.coverUri,
                    });
                },
                h = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [_, m] = (0, r.useState)(!1),
                        { formatMessage: h } = (0, n.A)();
                    return (0, r.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, s.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let r = { ...(0, l.HO)(e), url: e.url, isLiked: !e.isLiked };
                        m(!0);
                        let n = await e.toggleLike();
                        m(!1),
                            n === a.f.OK
                                ? i((0, s.jsx)(p, { playlist: r }), { containerId: o.u.INFO })
                                : i((0, s.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [t.isAuthorized, _, e, h, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => p });
            var s = i(32290),
                l = i(92708),
                r = i(55178),
                n = i(60900),
                a = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                _ = i(8097);
            let m = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, s.jsx)(_.k, {
                        closeToast: i,
                        entityVariant: u.c.PLAYLIST,
                        entityUrl: t.url,
                        coverUri: t.coverUri,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                },
                p = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: u } = (0, n.A)(),
                        [_, p] = (0, r.useState)(!1);
                    return (0, r.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, s.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a.u.ERROR });
                        if (_) return;
                        let r = { ...(0, l.HO)(e), url: e.url, isPinned: !e.isPinned };
                        p(!0);
                        let n = await e.togglePin();
                        p(!1),
                            n
                                ? i((0, s.jsx)(m, { playlist: r }), { containerId: a.u.INFO })
                                : i((0, s.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: a.u.ERROR });
                    }, [t.isAuthorized, _, e, i, u]);
                };
        },
        77088: (e) => {
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
        78176: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => y });
            var s = i(32290),
                l = i(63618),
                r = i(96103),
                n = i(55178),
                a = i(16172),
                o = i(21732),
                c = i(91027),
                d = i(50162),
                u = i(19740),
                _ = i(86269),
                m = i(71926),
                p = i(47745),
                h = i(84062),
                x = i(57594),
                g = i(16510),
                v = i.n(g);
            let y = (0, r.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: r } = (0, x.g)(),
                    g = (0, h.Z)(t.url),
                    C = (0, p.N)(),
                    f = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(y, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    k = (0, c.c)((e) => {
                        r.modal.isOpened && r.modal.close(), C({ to: a.QT.ArtistScreen }), g(e);
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(u.Dr, {
                            className: (0, l.$)(v().root, i),
                            onClick: k,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(_.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, s.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        f,
                    ],
                });
            });
        },
        78635: (e) => {
            e.exports = {
                root: 'KidsEditorialPlaylistsPage_root__HeHqc',
                scrollContainer: 'KidsEditorialPlaylistsPage_scrollContainer__Hy6HY',
                important: 'KidsEditorialPlaylistsPage_important__283cd',
                footer: 'KidsEditorialPlaylistsPage_footer___UaP5',
                item: 'KidsEditorialPlaylistsPage_item__0wBk2',
                content: 'KidsEditorialPlaylistsPage_content__6wWkP',
            };
        },
        80556: (e) => {
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
        83460: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => Z });
            var s = i(32290),
                l = i(63618),
                r = i(96103),
                n = i(55178),
                a = i(60900),
                o = i(16172),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                p = i(82586),
                pulseSyncPlaylistDownloadIcons = i(82586),
                h = i(86269),
                x = i(71926),
                g = i(41677),
                v = i(73141),
                y = i(73192),
                C = i(71735),
                f = i(47745),
                k = i(2969),
                S = i(54391),
                A = i(23352),
                L = i(72396),
                N = i(5537),
                j = i(84062),
                P = i(28999),
                E = i(90169),
                R = i(57594),
                b = i(61376),
                T = i(11323),
                I = i(92744),
                w = i(61258),
                O = i(10180),
                F = i(90326),
                z = i(29268),
                M = i(34925),
                W = i(13931),
                D = i(19740),
                H = i(9017),
                B = i(65477),
                K = i(46200),
                Y = i(27120),
                $ = i(95134),
                V = i(79406),
                U = i(58237),
                X = i(56367),
                G = i(83755);
            let q = (0, r.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: l, open: r, ...n } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, K.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: p },
                        trailer: h,
                        user: x,
                    } = (0, R.g)(),
                    g = (0, v.K)(i),
                    f = (0, y.A)(i),
                    k = (0, S.F)(),
                    { formatMessage: A } = (0, a.A)(),
                    L = (0, C.P)(),
                    N = m.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                    j = (0, H.A)({ entityVariant: $.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, Y.N)(r);
                let P = (0, u.c)(() => {
                    if (d) return void _();
                    L() || (h.openPlaylistTrailer(i.id), k(o.ky.Playlist, i.id));
                });
                return (0, s.jsxs)(D.W1, {
                    title: i.title,
                    onOpenChange: l,
                    open: r,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: A({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU },
                    ...n,
                    children: [
                        N && (0, s.jsx)(B.d, { entityVariant: $.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : j }),
                        !p && (0, s.jsx)(X.L, { onClick: f, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)(U.T, { onClick: g, isLiked: i.isLiked, disabled: !x.isAuthorized }),
                        (i.tracksCount ?? 1) > 0 &&
                            (0, s.jsx)(D.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, s.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, s.jsx)(G.N, { onClick: P, disabled: !i.isAvailable }),
                    ],
                });
            });
            var J = i(11675),
                Q = i.n(J);
            let Z = (0, r.PA)((e) => {
                let { className: t, playlist: i, children: r, contentLinesCount: D, customDescription: H } = e,
                    { ref: B, intersectionPropertyId: K } = (0, A.n)(),
                    {
                        trailer: Y,
                        user: $,
                        paywall: { modal: V },
                    } = (0, R.g)(),
                    { from: U, utmLink: X } = (0, L.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: G } = (0, a.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: Z, sendPlaySearchFeedback: ee } = (0, P.z)(),
                    [et, ei] = (0, n.useState)(!1),
                    [es, el] = (0, n.useState)(!1),
                    [er, en] = (0, n.useState)(!1),
                    ea = (0, W.r)(i),
                    eo = (0, v.K)(i),
                    ec = (0, y.A)(i),
                    ed = (0, f.N)(),
                    eu = (0, k.b)(),
                    e_ = (0, j.Z)(i.url),
                    em = (0, S.F)(),
                    ep = (0, C.P)(),
                    eh = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        Y.setUtmLink(X), Y.openPlaylistTrailer(i.id), em(o.ky.Playlist, i.id);
                    }),
                    [ex, eg] = (0, n.useState)(!1),
                    { isPlaying: ev, togglePlay: ey } = (0, E.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: U, utmLink: X }, loadContextMeta: !0 },
                    }),
                    eC = (0, u.c)(() => {
                        ed({ to: o.QT.PlaylistScreen }), null == Z || Z();
                    }),
                    ef = (0, u.c)((e) => {
                        eC(), e_(e);
                    }),
                    ek = (0, N.N)(),
                    eS = (0, u.c)(() => {
                        if (!ep()) {
                            if (ek) return void V.open();
                            et || ev || (ei(!0), null == ee || ee()), ey(), eu(!ev);
                        }
                    }),
                    eA = (0, u.c)(() => {
                        es || i.isLiked || (el(!0), null == J || J()), eo();
                    }),
                    eL = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    eN = (0, u.c)((e) => {
                        en(e), eg(e);
                    }),
                    ej = (0, n.useMemo)(() => {
                        var e;
                        return H
                            ? (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: H }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, s.jsx)(
                                    g.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [H, i]),
                    eP = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                I.c,
                                {
                                    className: (0, l.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: eA,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !$.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eE = (0, n.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                M.n,
                                {
                                    children: (0, s.jsx)(
                                        z.k,
                                        { className: (0, l.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eh },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eh, i]),
                    eR = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                O.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, l.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eb = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(h.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: ef,
                                    children: [
                                        (0, s.jsx)(T.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ea,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(m.hg, {
                                            isVisible: er || ex,
                                            className: Q().controls,
                                            playControl: (0, s.jsx)(
                                                F.D,
                                                {
                                                    className: (0, l.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eS,
                                                    isPlaying: ev,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eP,
                                            menuControl: (0, s.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eN,
                                                    open: er,
                                                    onClick: eL,
                                                    className: (0, l.$)(Q().menuButton, Q().control),
                                                    icon: (0, s.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eR,
                                            trailerControl: eE,
                                        }),
                                    ],
                                }),
                            }),
                        [ef, i, ea, er, ex, eS, ev, eP, eN, eL, eR, eE],
                    ),
                    eT = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(m.MN, {
                    ref: B,
                    'aria-label': ea,
                    className: (0, l.$)(Q().root, t),
                    title: (0, s.jsx)(x.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(w.N, { className: Q().titleLink, href: i.url, onClick: eC, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(w.N, { href: i.url, onClick: eC, children: i.title }),
                    'data-intersection-property-id': K,
                    contentLinesCount: D,
                    view: eb,
                    description: ej,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eT &&
                            (0, s.jsx)(b.x, {
                                ariaLabel: G({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: eo,
                            }),
                        r,
                    ],
                });
            });
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        85495: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 86159));
        },
        86159: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { default: () => b });
            var s = i(32290),
                l = i(21916),
                r = i(63618),
                n = i(96103),
                a = i(55178),
                o = i(60900),
                c = i(21732),
                d = i(91027),
                u = i(6752),
                _ = i(71926),
                m = i(64170),
                p = i(7999),
                h = i(83460),
                x = i(48922),
                g = i(22714),
                v = i(83808),
                y = i(83920),
                C = i(3796),
                f = i(57594),
                k = i(11262),
                S = i(58054),
                A = i(32468),
                L = i(74694),
                N = i(89020),
                j = i(45257),
                P = i(78635),
                E = i.n(P);
            let R = (0, n.PA)((e) => {
                    var t, i, n;
                    let { id: P } = e,
                        {
                            kids: { kidsEditorialPlaylistSubpage: R },
                            settings: { isMobile: b },
                        } = (0, f.g)(),
                        T = (0, v.W)(),
                        { contentScrollRef: I, setContentScrollRef: w } = (0, y.g)(),
                        { formatMessage: O } = (0, o.A)(),
                        F = (0, d.c)((e) => {
                            R.getPlaylists({ page: e, pageSize: 20 });
                        });
                    R.isNotFound && (0, l.notFound)(),
                        (0, a.useEffect)(
                            () => () => {
                                R.reset();
                            },
                            [R],
                        );
                    let z = (0, u.L)(() => ({ Footer: () => (0, s.jsx)(A.A, { children: (0, s.jsx)(S.w, { className: E().footer }) }) }));
                    if (
                        ((0, C.J)(R.isResolved),
                        (0, k.X)(R.pagesLoader, F),
                        R.isNeededToLoad && (0, a.use)(R.getData({ id: P, page: 0, pageSize: 20 })),
                        R.isSomethingWrong)
                    )
                        return (0, s.jsx)(m.SomethingWentWrong, {});
                    let M = R.isLoading ? 20 : null != (i = null == (t = R.pagesLoader.pager) ? void 0 : t.total) ? i : 0;
                    return (0, s.jsx)(g.n, {
                        pageId: x._Q.KIDS_EDITORIAL_PLAYLISTS,
                        children: (0, s.jsx)(p.h, {
                            scrollElement: I,
                            outerTitle: R.title,
                            children: (0, s.jsxs)('div', {
                                className: E().root,
                                'data-test-id': c.Xk.kids.KIDS_EDITORIAL_PLAYLISTS,
                                children: [
                                    (0, s.jsx)(L.Y, {
                                        variant: L.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: T.canBack,
                                        children: (0, s.jsx)(_.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: R.title }),
                                    }),
                                    (0, s.jsx)(j.$, {
                                        context: { listAriaLabel: O({ id: 'mixes.playlists-list' }, { genreName: R.title || '' }) },
                                        className: (0, r.$)(E().scrollContainer, E().important),
                                        customComponents: z,
                                        itemContentCallback: (e) => {
                                            let t = R.playlists[e],
                                                i = O({ id: 'loading-messages.entity-is-loading' }, { entityName: O({ id: 'entity-names.playlist' }) });
                                            return t ? (0, s.jsx)(h.B, { playlist: t, contentLinesCount: 3 }, t.key) : (0, s.jsx)(N.V, { isActive: !0, 'aria-label': i });
                                        },
                                        totalCount: M,
                                        onGetDataByPage: F,
                                        pageSize: 20,
                                        totalRequests: null != (n = R.pagesLoader.requestsCount) ? n : 0,
                                        listClassName: E().content,
                                        itemClassName: E().item,
                                        handleRef: w,
                                        isMobileLayout: b,
                                        useWindowScroll: b,
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                b = () => {
                    let e = (0, l.useSearchParams)().get('id');
                    return e || (0, l.notFound)(), (0, s.jsx)(R, { id: e });
                };
        },
        89020: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => o });
            var s = i(32290),
                l = i(63618),
                r = i(79856),
                n = i(80556),
                a = i.n(n);
            let o = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: n,
                    round: o,
                    'aria-label': c,
                    centered: d,
                    withInfo: u = !0,
                    linesCount: _ = 3,
                    withSubcover: m,
                    radius: p = 'l',
                } = e;
                return (0, s.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, l.$)(a().root, i),
                    children: [
                        m && (0, s.jsx)(r.W, { isActive: t, className: a().subcover, radius: 'l' }),
                        (0, s.jsx)(r.W, { isActive: t, className: (0, l.$)(a().cover, n, { [a().cover_round]: o, [a().cover_withSubcover]: m }), radius: p }),
                        u &&
                            (0, s.jsx)('div', {
                                className: (0, l.$)(a().infoContainer, a()['content_linesCount_'.concat(_)], { [a().infoContainer_centered]: d }),
                                children: (0, s.jsx)(r.W, { isActive: t, className: (0, l.$)(a().title, { [a().title_withSubcover]: m }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 5718, 7231, 6347, 3183, 9763, 6639, 7258, 5904, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6477, 7275, 2586, 8347, 7702, 6874,
                861, 782, 4668, 9740, 1175, 14, 8816, 4220, 9562, 7358,
            ],
            () => e((e.s = 85495)),
        ),
            (_N_E = e.O());
    },
]);
