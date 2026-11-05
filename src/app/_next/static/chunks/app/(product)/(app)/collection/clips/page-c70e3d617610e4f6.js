(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9923],
    {
        4370: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => l });
            var i = r(67174);
            let l = {
                main: (0, i.u)('/'),
                chart: (0, i.u)('/chart'),
                chartPodcasts: (0, i.u)('/chart/podcasts'),
                collection: (0, i.u)('/collection'),
                collectionAlbums: (0, i.u)('/collection/albums'),
                collectionArtists: (0, i.u)('/collection/artists'),
                collectionClips: (0, i.u)('/collection/clips'),
                collectionDislikes: (0, i.u)('/collection/dislikes'),
                collectionKids: (0, i.u)('/collection/kids'),
                collectionKidsAlbums: (0, i.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, i.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, i.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, i.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, i.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, i.u)('/collection/multivibes'),
                collectionPlaylists: (0, i.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, i.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, i.u)('/collection/playlists/liked'),
                collectionShelf: (0, i.u)('/collection/shelf'),
                collectionShelfLiked: (0, i.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, i.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, i.u)('/collection/shelf/recently-played'),
                concerts: (0, i.u)('/concerts'),
                kids: (0, i.u)('/kids'),
                mixes: (0, i.u)('/mixes'),
                musicHistory: (0, i.u)('/music-history'),
                muzmarket: (0, i.u)('/muzmarket'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                multivibe: (0, i.u)('/multivibe'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        7555: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => c });
            var i,
                l = r(53548),
                o = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (l && (l += ' '), (l += i));
                                            else for (r in t) t[r] && (l && (l += ' '), (l += r));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    2095: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root: 'qaIScXjx1qyXuaIHXQIo',
                            root_radius_xs: 'wdE2qVRIlWUesuBfzCis',
                            root_radius_s: '_7gw1qGE6BeUAdSMbhRx',
                            root_radius_m: 'emVxQKB1wJc9FwuIBG8o',
                            root_radius_l: 'NFJAa_h_EAjwQVY7bU5J',
                            root_radius_xl: 'SRpgu5IgfEGM_VHllm_6',
                            root_radius_round: 'QIWoHHDozGGG5w2JYImt',
                            root_withShadow: 'gtfPudKIIbfkwmuOBzwI',
                            root_variant_default: 'ZcpulvHgF_wsgzB8Hye9',
                            root_variant_outline: 'kPFFrHHxF3SOjiETAE6Q',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var o in ((i = {}), t)) 'key' !== o && (i[o] = t[o]);
                            else i = t;
                            return { $$typeof: r, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    6009: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Paper = void 0));
                        let l = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = i(r(2095)),
                            a = (e) => {
                                let { forwardRef: t, radius: r, variant: i = 'default', children: n, className: a, withShadow: c, style: d, ...u } = e;
                                return (0, l.jsx)('div', {
                                    className: (0, o.clsx)(
                                        s.default.root,
                                        s.default['root_radius_'.concat(r)],
                                        s.default['root_variant_'.concat(i)],
                                        { [s.default.root_withShadow]: c },
                                        a,
                                    ),
                                    style: d,
                                    ref: t,
                                    ...u,
                                    children: n,
                                });
                            };
                        t.Paper = (0, n.forwardRef)((e, t) => (0, l.jsx)(a, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(l, 2));
                    },
                },
                n = {};
            function s(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (o[e].call(r.exports, r, r.exports, s), r.exports);
            }
            ((s.d = (e, t) => {
                for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var a = {};
            (() => {
                (Object.defineProperty(a, 'U', { value: !0 }), (a.X = void 0));
                var e = s(6009);
                Object.defineProperty(a, 'X', {
                    enumerable: !0,
                    get: function () {
                        return e.Paper;
                    },
                });
            })();
            var c = a.X;
            a.U;
        },
        7628: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => p });
            var i = r(88800),
                l = r(88969),
                o = r(58390),
                n = r(17392),
                s = r(29993),
                a = r(96817),
                c = r(29504),
                d = r(99890),
                u = r(4086),
                _ = r(41928);
            let p = (e) => {
                let { size: t = 'm', variant: r = 'default', color: p = 'primary', withRipple: m = !0, buttonText: f, isBlock: h, key: C, className: v } = e,
                    x = (0, o.useRouter)(),
                    g = (0, _.N)().get(u.QG),
                    b = (0, s.c)(() => {
                        g.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), x.push(g.authorizationUrl));
                    });
                return (0, i.jsx)(
                    a.$,
                    {
                        onClick: b,
                        className: v,
                        isBlock: h,
                        color: p,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: f || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    C,
                );
            };
        },
        7857: (e) => {
            e.exports = { root: 'ClipsCarousel_root__r1mGp', controls: 'ClipsCarousel_controls__nZB6r' };
        },
        8299: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => l });
            var i = r(58217);
            let l = (e) => {
                let { clip: t, callback: r, disclaimerRejectHandler: l } = e;
                return (0, i.l)({ entity: t, callback: r, onReject: l, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
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
        10270: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => c });
            var i = r(56949),
                l = r(53548),
                o = r(29993),
                n = r(44230),
                s = r(72288);
            let a = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: r, gap: c, containerRef: d, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: _ },
                        } = (0, s.g)(),
                        { contentScrollRef: p } = (0, n.g)(),
                        m = (0, l.useRef)(new Map()),
                        f = (0, l.useRef)(void 0),
                        h = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = m.current.get(String(e));
                                return null != t ? t : r(e);
                            },
                            overscan: u,
                            initialRect: a,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, r) => {
                                if (!t) return 0;
                                let i = t.getBoundingClientRect().top;
                                return e && 1 ? i + window.scrollY : !e && r ? i + r.scrollTop : 0;
                            })(_, d, p),
                        },
                        C = (0, i.XW)(h),
                        v = (0, i.Te)({ ...h, getScrollElement: () => p, initialOffset: null == p ? void 0 : p.scrollTop }),
                        x = _ ? C : v,
                        g = (0, o.c)(() => {
                            x.measure();
                        });
                    return (
                        (0, l.useEffect)(() => {
                            f.current ||
                                (f.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let r = e.target.getAttribute('data-index');
                                        if (e.target && r) {
                                            let i = e.contentRect.height;
                                            i && i !== m.current.get(r) && (m.current.set(r, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && g());
                                }));
                        }, [g]),
                        { virtualizer: x, resizeObserver: f.current }
                    );
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
        12816: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => o, x: () => l });
            var i = r(98427);
            let l = [
                    i.b.HOME,
                    i.b.SIDEBAR,
                    i.b.OWN_COLLECTION,
                    i.b.LANDING,
                    i.b.OWN_ARTISTS,
                    i.b.ARTIST,
                    i.b.ARTIST_CONCERTS,
                    i.b.NON_MUSIC,
                    i.b.PLAYLIST,
                    i.b.SEARCH,
                    i.b.VIDEO_PLAYER,
                    i.b.LABEL,
                    i.b.CONCERTS,
                    i.b.CONCERT,
                    i.b.CONCERT_LOCATION_SELECTOR,
                    i.b.ALBUM,
                    i.b.PLAYLIST,
                    i.b.SLIDES_SCREEN,
                    i.b.PROMOLANDING_ALBUM,
                    i.b.WAVE_LANDING_SCREEN,
                    i.b.FACT_SCREEN,
                    i.b.LUMEN_FACT_SCREEN,
                    i.b.LUMEN_AWAKENING_SCREEN,
                    i.b.COLLECTION_VIBE_ROOMS,
                    i.b.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    i.b.MULTIVIBE_ACTION_SCREEN,
                    i.b.MULTIVIBE_UNIFIED_SCREEN,
                ],
                o = [i.b.HOME, i.b.LANDING, i.b.NON_MUSIC, i.b.OWN_COLLECTION, i.b.SEARCH, i.b.ARTIST, i.b.CONCERTS, i.b.CONCERT, i.b.ALBUM, i.b.PLAYLIST];
        },
        13946: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => z });
            var i = r(88800),
                l = r(65724),
                o = r(84961),
                n = r(53548),
                s = r(79070),
                a = r(17610),
                c = r(24548),
                d = r(29993),
                u = r(72288),
                _ = r(35994);
            let p = (e, t) => {
                let { withLink: r, separator: i } = t,
                    l = r && !e.various ? (0, _.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: l };
            };
            var m = r(21010),
                f = r.n(m),
                h = r(17392),
                C = r(29504),
                v = r(91292),
                x = r(2058),
                g = r(87999),
                b = r(80643),
                S = r(78940),
                y = r(55693),
                E = r(58217);
            let A = (0, o.PA)((e) => {
                    let { item: t, linkClassName: r, captionClassName: l, captionSize: o = 'm', allArtistsTitle: n, withCustomTooltip: s, hoverSettings: c } = e,
                        {
                            name: _,
                            link: p,
                            title: m,
                            ariaLabel: f,
                            tooltipText: A,
                            isTooltipEnabled: I,
                            handleNavigate: L,
                        } = ((e) => {
                            var t, r;
                            let { item: i, allArtistsTitle: l, withCustomTooltip: o } = e,
                                { formatMessage: n } = (0, x.A)(),
                                s = ((e, t) => {
                                    let { item: r, allArtistsTitle: i, withCustomTooltip: l } = e,
                                        o = i || r.name;
                                    return {
                                        ...r,
                                        title: l ? void 0 : o,
                                        ariaLabel: r.link ? t({ id: 'entity-names.artist-name' }, { artistName: r.name }) : void 0,
                                        tooltipText: o,
                                        isTooltipEnabled: !i && l,
                                    };
                                })({ item: i, allArtistsTitle: l, withCustomTooltip: o }, n),
                                {
                                    track: a,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                _ = (0, S.Z)(null != (r = null == (t = s.link) ? void 0 : t.href) ? r : s.artist.url),
                                { sendNavigateSearchFeedback: p } = (0, y.z)(),
                                m = (0, b.S)(),
                                f = (0, d.c)((e) => {
                                    (c && a.isOpened && a.close(), _(e));
                                }),
                                h = ((e) => {
                                    let { artist: t, callback: r } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: l, fullscreenVideoPlayer: o } = (0, u.g)(),
                                        { modal: n } = i;
                                    return (0, E.l)({
                                        entity: t,
                                        callback: r,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (i.reset(), n.close()), l.modal.isOpened && l.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            o.modal.isOpened && (o.modal.close(), o.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: s.artist, callback: f }),
                                C = (0, d.c)((e) => {
                                    (m({ to: g.AppScreen.ArtistScreen }), null == p || p(), h(e));
                                });
                            return { ...s, handleNavigate: C };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: s });
                    return p
                        ? (0, i.jsx)(v.N, {
                              ...p,
                              'aria-label': f,
                              className: r,
                              onClick: L,
                              title: m,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(a.m_, {
                                  enabled: I,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: A,
                                  hoverSettings: c,
                                  children: (0, i.jsx)(C.HL, { variant: 'span', type: 'entity', size: o, weight: 'medium', className: l, children: _ }),
                              }),
                          })
                        : (0, i.jsx)(a.m_, {
                              enabled: I,
                              offsetOptions: 4,
                              placement: 'top',
                              text: A,
                              hoverSettings: c,
                              children: (0, i.jsx)(C.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: o,
                                  weight: 'medium',
                                  className: l,
                                  title: m,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                I = (e) => {
                    let { group: t, linkClassName: r, captionClassName: l, captionSize: o, allArtistsTitle: s, withCustomTooltip: a, hoverSettings: c } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(A, {
                                item: t.primary,
                                linkClassName: r,
                                captionClassName: l,
                                captionSize: o,
                                allArtistsTitle: s,
                                withCustomTooltip: a,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, i.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, i.jsx)(A, {
                                                item: e,
                                                linkClassName: r,
                                                captionClassName: l,
                                                captionSize: o,
                                                allArtistsTitle: s,
                                                withCustomTooltip: a,
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
            var L = r(88969),
                j = r(65453);
            let N = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: o } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(j.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(f().spoiler, r),
                            onClick: o,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(L.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var R = r(61013),
                T = r(87819),
                O = r(40634),
                k = r(48468),
                P = r.n(k);
            let w = (0, o.PA)((e) => {
                    let { label: t, artists: r, forwardRef: l } = e;
                    return (0, i.jsxs)(a.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, T.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: l, children: t }),
                            (0, i.jsx)(a.ZI, { className: P().tooltipContent, children: r.map((e) => (0, i.jsx)(O.V, { artist: e, className: P().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, n.forwardRef)((e, t) => (0, i.jsx)(w, { forwardRef: t, ...e }));
            var D = r(19934),
                U = r(70396),
                B = r.n(U);
            let H = (0, o.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: o } = (0, x.A)();
                    return (0, i.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, l.$)(B().root, B().important),
                        label: t,
                        ariaLabel: o({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, i.jsx)(O.V, { artist: e }, e.id)),
                    });
                }),
                W = (0, o.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: l } = e,
                        [o, a] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        _ = (0, d.c)(() => {
                            let e = l.current;
                            e && a(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, s.L)(() =>
                            (0, R.A)(() => {
                                _();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', p),
                                _(),
                                () => {
                                    window.removeEventListener('resize', p);
                                }
                            ),
                            [p, _],
                        ),
                        (0, n.useEffect)(() => {
                            _();
                        }, [t, _]),
                        0 !== t.length)
                    )
                        return (o || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(H, { artists: t, label: r }) : (0, i.jsx)(M, { artists: t, label: r })) : r;
                }),
                z = (0, o.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: r,
                            spoilerClassName: o,
                            linkClassName: _,
                            captionClassName: m,
                            captionSize: h,
                            variant: C = 'breakAll',
                            spoilerComponent: v,
                            ...x
                        } = e,
                        g = ((e) => {
                            var t, r, i;
                            let { separator: l, visibleArtistsCount: o, withLink: s, withComposer: a, artistIdWithoutLink: c, withContextMenu: _ } = e,
                                m = null != (t = e.artists) ? t : [],
                                f = null == (r = e.withAllArtistsTitle) || r,
                                h = null == (i = e.withCustomTooltip) || i,
                                C = (0, n.useRef)(null),
                                [v, x] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: g },
                                } = (0, u.g)(),
                                b = ((!g || 1 === m.length) && _) || !_,
                                S = ((e, t) => {
                                    var r, i, l;
                                    let o = null == (r = null == t ? void 0 : t.withComposer) || r,
                                        n = null == (i = null == t ? void 0 : t.withLink) || i,
                                        s = null != (l = null == t ? void 0 : t.separator) ? l : ', ',
                                        a = e
                                            .flatMap((e) => {
                                                var t;
                                                let r = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...r];
                                            })
                                            .join(s),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: r, withComposer: i } = t;
                                            return {
                                                visibleArtists: (r ? e.slice(0, r) : e).filter((e) => i || !e.isComposer),
                                                hiddenArtistsCount: r && r < e.length ? e.length - r : 0,
                                            };
                                        })(e, { withComposer: o, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, r) =>
                                            ((e, t) => {
                                                var r;
                                                let { withLink: i, separator: l, isFirst: o } = t;
                                                return {
                                                    primary: p(e, { withLink: i, separator: o ? void 0 : l }),
                                                    decomposed: (null != (r = e.decomposed) ? r : []).map((e) => {
                                                        let t = l ? e.separator : '';
                                                        return p(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: s, isFirst: 0 === r }),
                                        ),
                                        allArtistsTitle: a,
                                        hiddenArtistsCount: d,
                                    };
                                })(m, { separator: l, visibleArtistsCount: v ? void 0 : o, withComposer: a, withLink: !!b && s, artistIdWithoutLink: c }),
                                y = f ? S.allArtistsTitle : '',
                                E = (0, d.c)((e) => {
                                    (x(!0), e.preventDefault());
                                });
                            return {
                                artists: m,
                                groups: S.groups,
                                hiddenArtistsCount: S.hiddenArtistsCount,
                                allArtistsTitle: y,
                                withCustomTooltip: h,
                                withContextMenu: _,
                                labelRef: C,
                                handleOnSpoilerClick: E,
                                isTooltipEnabled: !!y && h && !_ && !g,
                                title: !y || h || _ ? void 0 : y,
                            };
                        })(x),
                        b = (0, s.L)(() =>
                            g.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(v)
                                  ? v
                                  : (0, i.jsx)(N, { spoilerClassName: o, spoilerArtistsCount: g.hiddenArtistsCount, handleOnSpoilerClick: g.handleOnSpoilerClick }),
                        ),
                        S = (0, i.jsx)(a.m_, {
                            referenceRef: g.labelRef,
                            enabled: g.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: g.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: r ? { WebkitLineClamp: r } : void 0,
                                className: (0, l.$)(f().root, f()['root_variant_'.concat(C)], { [f().root_clamp]: r && r > 0, [f().ellipsis]: !r }, t),
                                title: g.title,
                                children: [
                                    g.groups.map((e) =>
                                        (0, i.jsx)(
                                            I,
                                            {
                                                group: e,
                                                linkClassName: _,
                                                captionClassName: m,
                                                captionSize: h,
                                                allArtistsTitle: g.allArtistsTitle,
                                                withCustomTooltip: g.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    b,
                                ],
                            }),
                        });
                    return g.withContextMenu ? (0, i.jsx)(W, { labelRef: g.labelRef, artists: g.artists, label: S }) : S;
                });
        },
        16717: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => n });
            var i = r(4370),
                l = r(34303),
                o = r(67174);
            let n = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: r } = (0, o.u)(i.Z.video.href, { query: { [l.K.IDS]: e.join(','), [l.K.ACTIVE_INDEX]: String(t) } });
                return r;
            };
        },
        16782: (e) => {
            e.exports = {
                root: 'BlockHeader_root__j3mbg',
                titleIcon: 'BlockHeader_titleIcon__GQFEK',
                start: 'BlockHeader_start__ZrGP5',
                coverContainer: 'BlockHeader_coverContainer__lATZT',
                cover: 'BlockHeader_cover__koOXq',
                textContainer: 'BlockHeader_textContainer___2wn9',
                title: 'BlockHeader_title__5xlx6',
                description: 'BlockHeader_description__hAk9D',
                description_widthLimit: 'BlockHeader_description_widthLimit__CXxK1',
                linkContainer: 'BlockHeader_linkContainer__EuW_L',
                linkText: 'BlockHeader_linkText__Or6VB',
                heading: 'BlockHeader_heading__4iqvS',
                heading_notAvailable: 'BlockHeader_heading_notAvailable__r_dm1',
                shimmerCover: 'BlockHeader_shimmerCover__m2PJl',
                textShimmerContainer: 'BlockHeader_textShimmerContainer__hT_Zo',
                shimmerTitle: 'BlockHeader_shimmerTitle__kAkgm',
                shimmerDescription: 'BlockHeader_shimmerDescription__Bya4z',
            };
        },
        17332: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        18486: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => x });
            var i = r(88800),
                l = r(65724),
                o = r(53548),
                n = r(87999),
                s = r(49784),
                a = r(80643),
                c = r(17392),
                d = r(52300),
                u = r(90688),
                _ = r(7555),
                p = r(19994),
                m = r(29504),
                f = r(91292),
                h = r(16782),
                C = r.n(h);
            let v = (e) => {
                    let {
                        className: t,
                        coverUrl: r,
                        labeledForId: h,
                        subTitle: v,
                        title: x,
                        description: g,
                        viewAllActionLink: b,
                        controls: S,
                        titleSize: y = 'm',
                        coverBackgroundColor: E,
                        coverRadius: A = 's',
                        titleClassName: I,
                        titleLineClamp: L,
                        fallbackIconVariant: j,
                        available: N = !0,
                        onViewAllAction: R,
                        titleChildren: T,
                        children: O,
                        headingRef: k,
                        coverContainerClassName: P,
                        headingVariant: w = 'h3',
                        withDescriptionWidthLimit: M = !0,
                        isShimmerVisible: D,
                        isShimmerActive: U,
                        withCover: B,
                        withDescription: H,
                        forwardRef: W,
                        shimmerCoverClassName: z,
                        shouldSendAnalyticsOnLoaded: Y,
                        ...F
                    } = e;
                    (0, s.W)({ enabled: !!Y });
                    let V = (0, o.useRef)(null),
                        K = r || B,
                        X = g || H,
                        Z = (0, o.useCallback)(() => {
                            V.current && 'focus' in V.current && V.current.focus();
                        }, []),
                        G = (0, a.S)(),
                        J = (0, o.useCallback)(() => {
                            R ? R() : G({ to: n.AppScreen.Link });
                        }, [G, R]),
                        $ = (0, o.useMemo)(
                            () =>
                                x && b && N
                                    ? (0, i.jsxs)(f.N, {
                                          className: C().title,
                                          containerClassName: C().linkContainer,
                                          textClassName: C().linkText,
                                          icon: (0, i.jsx)(d.I, { className: C().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: b,
                                          onClick: J,
                                          'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(m.DZ, {
                                                  id: h,
                                                  className: (0, l.$)(C().heading, I),
                                                  variant: w,
                                                  size: y,
                                                  weight: 'bold',
                                                  lineClamp: L,
                                                  ref: k,
                                                  children: x,
                                              }),
                                              T,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: C().title,
                                          children: [
                                              (0, i.jsx)(m.DZ, {
                                                  id: h,
                                                  className: (0, l.$)(C().heading, I, { [C().heading_notAvailable]: !N }),
                                                  variant: w,
                                                  size: y,
                                                  weight: 'bold',
                                                  lineClamp: L,
                                                  ref: k,
                                                  'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                                  children: x,
                                              }),
                                              T,
                                          ],
                                      }),
                            [N, J, k, w, h, x, I, L, y, b, T],
                        ),
                        Q = (0, o.useMemo)(() => (H && D ? (0, i.jsx)(p.W, { isActive: U, className: C().shimmerDescription }) : g), [H, D, g, U]),
                        q = (0, o.useMemo)(
                            () =>
                                B && D
                                    ? (0, i.jsx)(p.W, { isActive: U, className: (0, l.$)(C().shimmerCover, z), radius: 's' })
                                    : (0, i.jsx)(u._V, {
                                          src: r,
                                          fallbackIconVariant: j,
                                          style: { backgroundColor: E },
                                          className: C().cover,
                                          ref: V,
                                          onClick: Z,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': c.S7.BLOCK_HEADER_COVER,
                                      }),
                            [E, r, j, Z, U, D, z, B],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(C().root, t),
                        ref: W,
                        ...F,
                        'data-test-id': c.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: C().start,
                                children: [
                                    K && (0, i.jsx)(_.t, { radius: A, className: (0, l.$)(C().coverContainer, P), children: q }),
                                    (0, i.jsxs)('div', {
                                        className: C().textContainer,
                                        children: [
                                            v,
                                            $,
                                            X &&
                                                (0, i.jsx)(m.HL, {
                                                    id: ''.concat(h, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: M ? 2 : void 0,
                                                    className: (0, l.$)(C().description, { [C().description_widthLimit]: M }),
                                                    'data-test-id': c.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: Q,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            S || O,
                        ],
                    });
                },
                x = (0, o.forwardRef)((e, t) => (0, i.jsx)(v, { forwardRef: t, ...e }));
        },
        18610: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => l });
            var i = r(53548);
            let l = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.pushState(t, '', e);
                    }
                }, []);
        },
        20585: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            var i = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
        },
        21010: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        23471: (e) => {
            e.exports = {
                root: 'CollectionClipsPageClips_root__uB8s_',
                virtualScroll: 'CollectionClipsPageClips_virtualScroll__o3uWm',
                virtualItem: 'CollectionClipsPageClips_virtualItem__UDzx8',
                virtualItemRow: 'CollectionClipsPageClips_virtualItemRow__RPIOY',
                virtualItemRow_withTopBorder: 'CollectionClipsPageClips_virtualItemRow_withTopBorder__Q6k2l',
                virtualItemRow_withBottomBorder: 'CollectionClipsPageClips_virtualItemRow_withBottomBorder__D5Dep',
                clipsWillLike: 'CollectionClipsPageClips_clipsWillLike__IhK8Q',
            };
        },
        24548: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        29831: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => l });
            var i = r(48987);
            let l = (e, t) => {
                let { seconds: r, hours: l, minutes: o } = (0, i.e)(e);
                return t({ id: 'time.hours-minutes-seconds' }, { hours: l, minutes: o, seconds: r });
            };
        },
        29832: (e, t, r) => {
            'use strict';
            r.d(t, { MN: () => d, hg: () => c });
            var i,
                l = r(53548),
                o = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (l && (l += ' '), (l += i));
                                            else for (r in t) t[r] && (l && (l += ' '), (l += r));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    8765: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root: 'KL50tMDvfAdw_9MzcVht',
                            bottom: 'bL0wE1Bui8zpIZbvMVL3',
                            top: 'P6gOmyFtXyetUz0dqhF3',
                            bottom_left: 'RvWjZle1erRBXzJEF9Zj',
                            bottom_right: 'bBh7lvgdfF7bqNqlK78Q',
                            label: 'FgncHYHPDU14dLddn0wF',
                            controls: 'PBhQ1krUFiAybu_BS2YE',
                            controls_radius_default: 'cSCPJSa6Lx6OnpM4ljX9',
                            controls_radius_round: 'kHUOlGxOaBwL4P3jEBXU',
                            controls_visible: 'QZC5vQL9p11QsEkdkTtZ',
                        };
                    },
                    3550: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root: 'laBJlJAaqEVS0i_4Ot3l',
                            titleContainer: 'LmhA6nlLyzxwYIX31gYa',
                            wrapper: 'IO4kvpDGNI2J0CHwcKSf',
                            content: 'l8SktNpJd30JWp1owp_b',
                            content_left: 'Mb33JzAWx9EjbQAeScFt',
                            description: 'kbcBH9meMfY6Du_xQNnI',
                            content_center: 'Dp41JRuLGzwV3MHBYHMC',
                            content_right: 'eOsuNCgUirwAw16iUKLu',
                            title: 'FAmeEGy52GX1k0xZuPDn',
                            content_linesCount_1: 'Cfj1Wkh1bvQMCfk1mZwK',
                            content_linesCount_2: 'lV4OXsCTURC5K1s9Q5mx',
                            content_linesCount_3: 'PVBDIXF2RTUThmbNT9sV',
                            content_linesCount_4: 'ND4XIwkIYtNoU89EOISr',
                        };
                    },
                    4353: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root_controls_xxs: 'tRaaBpDMg9Qu8v6gKjtn',
                            root_entity_xxs: 'M9zvtlcpLUVn6DKdcHhj',
                            root_text_xxs: 'ln0PYYwDmFnfYxCDJsFU',
                            root_controls_xs: 'n5AeWEsJC3_AYXcbK4Lt',
                            root_entity_xs: '__hrMKGmNbw54T54IUyh',
                            root_text_xs: 'SehSa7OyRpC2nzYTVb2Q',
                            root_controls_s: '_oBLf5gprWsKjCw4Ce58',
                            root_entity_s: 'mxSPe5xpZnie9gpIqacd',
                            root_text_s: 'Ai2iRN9elHpk_u5splD6',
                            root_controls_m: 'tk7ahHRDYXJMMB879KUA',
                            root_entity_m: 'Z_WIr2W8JU4MPQek3hgR',
                            root_text_m: 'g3qWNP6xl__7qxNmtrvd',
                            root_controls_l: 'grvxapJE3vGArOKDWf6n',
                            root_entity_l: 'Esj5A1UeSi4xV4tZ839D',
                            root_text_l: 'V3WU123oO65AxsprotU9',
                            root_weight_normal: 'ZYV27jeWd30QDXu4GhaH',
                            root_weight_medium: '_3_Mxw7Si7j2g4kWjlpR',
                            root_weight_bold: 'Vi7Rd0SZWqD17F0872TB',
                        };
                    },
                    2445: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root_size_xs: 'qJJ288377iHlWN_RXeEE',
                            root_size_s: '_sd8Q9d_Ttn0Ufe4ISWS',
                            root_size_m: 'Ctk8dbecq31Qh7isOJPQ',
                            root_size_l: 'M_Djh6ppIkCO3A2k_BTA',
                            root_size_xl: 'dtxlzGQMPAbM2MEndXWX',
                            root_size_xxl: 'IUb9XLplTAoZqne9rNUL',
                            root_size_xxxl: 'ZYZamUwql_rfFR4RpI2B',
                            root_size_xxxxl: 'ZBZyxow5njdq8z5dnRPY',
                            root_size_xxxxxl: 'WdvQQNwdDNCdRSwRkAtT',
                            root_weight_bold: 'nSU6fV9y80WrZEfafvww',
                            root_weight_black: 'KBeGPPK4DinQzAP41Y_N',
                        };
                    },
                    61: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var o in ((i = {}), t)) 'key' !== o && (i[o] = t[o]);
                            else i = t;
                            return { $$typeof: r, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    7742: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let l = r(4377),
                            o = r(5881),
                            n = r(8532),
                            s = i(r(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: r,
                                    likeControl: i,
                                    menuControl: a,
                                    pinControl: c,
                                    trailerControl: d,
                                    isVisible: u,
                                    radius: _ = 'default',
                                    bottomContainerClassName: p,
                                    labelText: m,
                                } = e,
                                f = d || r,
                                h = a || i;
                            return (0, l.jsxs)('div', {
                                className: (0, o.clsx)(
                                    s.default.root,
                                    s.default.controls,
                                    { [s.default.controls_visible]: u },
                                    s.default['controls_radius_'.concat(_)],
                                    t,
                                ),
                                children: [
                                    (0, l.jsx)('div', { className: s.default.top, children: c }),
                                    (0, l.jsxs)('div', {
                                        className: (0, o.clsx)(s.default.bottom, p),
                                        children: [
                                            f && (0, l.jsxs)('div', { className: s.default.bottom_left, children: [d, r] }),
                                            h && (0, l.jsxs)('div', { className: s.default.bottom_right, children: [a, i] }),
                                        ],
                                    }),
                                    !!m && (0, l.jsx)(n.Label, { className: s.default.label, children: m }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let l = r(4377),
                            o = r(810),
                            n = r(5881),
                            s = r(8903),
                            a = r(6530),
                            c = i(r(3550)),
                            d = (e) => {
                                let {
                                    forwardRef: t,
                                    view: r,
                                    className: i,
                                    textPosition: o = 'left',
                                    contentLinesCount: d = 2,
                                    title: u,
                                    description: _,
                                    explicitMarkComponent: p,
                                    chart: m,
                                    children: f,
                                    srTitle: h,
                                    wrapperClassName: C,
                                    ...v
                                } = e;
                                return (0, l.jsxs)('div', {
                                    className: (0, n.clsx)(c.default.root, i),
                                    ref: t,
                                    ...v,
                                    children: [
                                        (0, l.jsx)(a.SROnly, { children: null != h ? h : u }),
                                        (0, l.jsx)('div', { className: c.default.viewContainer, children: r }),
                                        (0, l.jsxs)('div', {
                                            className: (0, n.clsx)(c.default.wrapper, C),
                                            children: [
                                                m,
                                                (0, l.jsxs)('div', {
                                                    className: (0, n.clsx)(
                                                        c.default.content,
                                                        c.default['content_'.concat(o)],
                                                        c.default['content_linesCount_'.concat(d)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, l.jsxs)('div', {
                                                                className: c.default.titleContainer,
                                                                children: [
                                                                    (0, l.jsx)(s.Caption, {
                                                                        className: c.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    p,
                                                                ],
                                                            }),
                                                        _,
                                                        f,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, o.forwardRef)((e, t) => (0, l.jsx)(d, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let l = r(4377),
                            o = r(5881),
                            n = r(8903),
                            s = i(r(4353));
                        t.Label = (e) => {
                            let { children: t, className: r, size: i = 's', ...a } = e;
                            return (0, l.jsx)(n.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: i,
                                lineClamp: 1,
                                className: (0, o.clsx)(s.default.root, r),
                                ...a,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var i = r(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return i.Label;
                            },
                        });
                    },
                    5531: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let l = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = i(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: i, ...a } = e,
                                c = (0, o.clsx)(s.default.root, { [s.default.focusable]: r }, t);
                            return (0, n.isValidElement)(i)
                                ? (0, n.cloneElement)(i, { ...a, className: (0, o.clsx)(c, i.props.className) })
                                : (0, l.jsx)('span', { className: c, ...a, children: i });
                        };
                    },
                    6530: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var i = r(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return i.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let l = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = r(5987),
                            a = i(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: i = 'text', size: n = 's', className: c, children: d, weight: u = 'medium', ..._ } = e;
                            return (0, l.jsx)(s.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, o.clsx)(a.default.root, a.default['root_'.concat(i, '_').concat(n)], a.default['root_weight_'.concat(u)], c),
                                ..._,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, n.forwardRef)((e, r) => (0, l.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    1641: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let l = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = r(5987),
                            a = i(r(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: i = 'bold', size: n = 's', className: c, children: d, ...u } = e;
                            return (0, l.jsx)(s.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, o.clsx)(a.default.root, a.default['root_size_'.concat(n)], a.default['root_weight_'.concat(i)], c),
                                ...u,
                                children: d,
                            });
                        }),
                            (t.Heading = (0, n.forwardRef)((e, r) => (0, l.jsx)(t.HeadingComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let l = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = i(r(61));
                        function a(e) {
                            let { forwardRef: t, style: r, className: i, children: n, variant: a, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof n ? n : void 0;
                            return (0, l.jsx)(a, {
                                style: { ...r, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, o.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: c && c > 0, [s.default.root_clamp_oneline]: c && 1 === c, [s.default.root_clamp_multiline]: c && c > 1 },
                                    i,
                                ),
                                ...d,
                                children: n,
                            });
                        }
                        ((t.TypographyComponent = a), (t.Typography = (0, n.forwardRef)((e, t) => (0, l.jsx)(a, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var i = r(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return i.Caption;
                            },
                        });
                        var l = r(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return l.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(l, 2));
                    },
                },
                n = {};
            function s(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (o[e].call(r.exports, r, r.exports, s), r.exports);
            }
            ((s.d = (e, t) => {
                for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var a = {};
            (() => {
                (Object.defineProperty(a, 'X$', { value: !0 }), (a.kk = a.m7 = void 0));
                var e = s(7093);
                Object.defineProperty(a, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = s(7742);
                Object.defineProperty(a, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var c = a.kk,
                d = a.m7;
            a.X$;
        },
        31764: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => _ });
            var i = r(88800),
                l = r(65724),
                o = r(53548),
                n = r(17392),
                s = r(88021),
                a = r(96817),
                c = r(52300),
                d = r(89544),
                u = r.n(d);
            let _ = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: r,
                        forwardControlClassName: d,
                        className: _,
                        withSecondaryColor: p,
                        buttonSize: m = 'xxxs',
                        buttonVariant: f = 'outline',
                    } = e,
                    { swipeBackward: h, swipeForward: C, shouldBackwardButtonBeDisabled: v, shouldForwardButtonBeDisabled: x, shouldHideControls: g } = (0, s.Y)(t),
                    b = (0, o.useCallback)(
                        (e) => {
                            (h(), e.stopPropagation());
                        },
                        [h],
                    ),
                    S = (0, o.useCallback)(
                        (e) => {
                            (C(), e.stopPropagation());
                        },
                        [C],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(u().root, _),
                    'data-test-id': n.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, i.jsx)(a.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, l.$)(u().control, r, { [u().control_hidden]: g, [u().control_withSecondaryColor]: p }),
                            onClick: b,
                            size: m,
                            radius: 'round',
                            variant: f,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: v,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, i.jsx)(a.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, l.$)(u().control, d, { [u().control_hidden]: g, [u().control_withSecondaryColor]: p }),
                            onClick: S,
                            size: m,
                            radius: 'round',
                            variant: f,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: x,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        32596: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => k });
            var i = r(88800),
                l = r(65724),
                o = r(84961),
                n = r(53548),
                s = r(2058),
                a = r(88969);
            r(30282);
            var c = r(96817),
                d = r(52300),
                u = r(29504),
                _ = r(87999),
                p = r(47149),
                m = r(84423),
                f = r(89846),
                h = r(64543),
                C = r(63582);
            let v = (0, C.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, m.s)()) ? void 0 : e.evgenInstance,
                        { hash: r } = (0, f.g)(),
                        { screen: i } = (0, h.j)();
                    return {
                        sendRefreshEvent: (0, n.useCallback)(() => {
                            if (!t || !r || !(null == i ? void 0 : i.pageId)) return;
                            let e = {
                                actionType: _.ActionType.Refresh,
                                userInteractionType: _.UserInteractionType.Tap,
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                hash: r,
                                pageId: i.pageId,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, p.bv)(t, e);
                        }, [t, r, null == i ? void 0 : i.pageId]),
                    };
                }),
                x = (0, C.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let r = null == (t = (0, m.s)()) ? void 0 : t.evgenInstance,
                        { hash: i } = (0, f.g)(),
                        { screen: l } = (0, h.j)();
                    (0, n.useEffect)(() => {
                        if (!r || !i || !(null == l ? void 0 : l.pageId)) return;
                        let t = {
                            entityType: _.EntityTypes.Error,
                            entityId: _.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: i,
                            pageId: l.pageId,
                            pageStyle: _.PageStyles.Fullscreen,
                            pagePlacement: _.PagePlacements.Fullscreen,
                            mainObjectType: _.DomainObjectType.NonApplicable,
                            mainObjectId: _.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, p.z5)(r, t);
                    }, [r, e, i, null == l ? void 0 : l.pageId]);
                });
            var g = r(44230),
                b = r(4370),
                S = r(72288),
                y = r(97956),
                E = r(56248),
                A = r(90688),
                I = r(78940);
            let L = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var j = r(96856),
                N = r.n(j);
            let R = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: o } = e,
                    { slam: n } = (0, S.g)(),
                    { contentRef: s } = (0, g.g)(),
                    d = (0, I.Z)(b.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(N().root, t),
                    children: [
                        r &&
                            (0, i.jsx)(E.L, {
                                withBackwardFallback: '/',
                                className: (0, l.$)(N().navigation, { [N().navigation_desktop]: !s }),
                                withForwardControl: !1,
                                onBackwardClick: o,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, l.$)(N().content, { [N().content_shrink]: !r }),
                            children: [
                                (0, i.jsx)(A._V, { className: N().image, src: L.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: N().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: N().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: N().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: N().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: N().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var T = r(9184),
                O = r.n(T);
            let k = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: o } = e,
                    { formatMessage: _ } = (0, s.A)(),
                    p = (0, n.useContext)(S.P),
                    m = null == p ? void 0 : p.experiments.checkExperiment(y.z.WebNextUnstableMusicScreen, 'on'),
                    f = _(m ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                x(f);
                let { sendRefreshEvent: h } = v(),
                    C = (0, n.useCallback)(() => {
                        (h(), (window.location.href = b.Z.main.href));
                    }, [h]),
                    { contentRef: A } = (0, g.g)();
                return m
                    ? (0, i.jsx)(R, { className: t, withBackwardControl: r, onBack: o })
                    : (0, i.jsxs)('div', {
                          className: (0, l.$)(O().root, t),
                          children: [
                              r &&
                                  (0, i.jsx)(E.L, {
                                      withBackwardFallback: '/',
                                      className: (0, l.$)(O().navigation, { [O().navigation_desktop]: !A }),
                                      withForwardControl: !1,
                                      onBackwardClick: o,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, l.$)(O().content, { [O().content_shrink]: !r }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: O().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, l.$)(O().title, O().important), variant: 'h3', size: 'xs', children: f }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, l.$)(O().text, O().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: C,
                                          className: O().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        34303: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => i });
            var i = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.URL = 'url'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        35994: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => l });
            var i = r(67174);
            let l = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37670: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => o });
            var i = r(53548);
            r(30282);
            var l = r(58390);
            let o = (e) => {
                let t = (0, l.usePathname)(),
                    [r, o] = (0, i.useState)(!1);
                ((0, i.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, i.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), o(!0));
                    }, [e, r, t]));
            };
        },
        38501: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => l });
            var i = r(72288);
            let l = () => {
                let {
                    settings: { isMobile: e },
                } = (0, i.g)();
                return !e;
            };
        },
        40634: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => x });
            var i = r(88800),
                l = r(65724),
                o = r(84961),
                n = r(53548),
                s = r(87999),
                a = r(80643),
                c = r(17392),
                d = r(29993),
                u = r(90688),
                _ = r(19934),
                p = r(7555),
                m = r(29504),
                f = r(78940),
                h = r(72288),
                C = r(80932),
                v = r.n(C);
            let x = (0, o.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: o } = (0, h.g)(),
                    C = (0, f.Z)(t.url),
                    g = (0, a.S)(),
                    b = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(x, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    S = (0, d.c)((e) => {
                        (o.modal.isOpened && o.modal.close(), g({ to: s.AppScreen.ArtistScreen }), C(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(_.Dr, {
                            className: (0, l.$)(v().root, r),
                            onClick: S,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(p.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, i.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, i.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        b,
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
        44318: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => s });
            var i = r(29993),
                l = r(72288),
                o = r(18610),
                n = r(16717);
            let s = () => {
                let { fullscreenVideoPlayer: e } = (0, l.g)(),
                    t = (0, o.p)();
                return (0, i.c)(function (r) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    (e.setIds(r), e.setClipIndex(i), t((0, n.J)(r, i)), e.modal.open());
                });
            };
        },
        44599: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => u });
            var i = r(87999),
                l = r(38982),
                o = r(84423),
                n = r(89846),
                s = r(64543),
                a = r(63582),
                c = r(29993),
                d = r(12816);
            let u = (0, a.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e) => {
                let t = (0, o.s)(),
                    { hash: r } = (0, n.g)(),
                    { screen: a, block: u, object: _, tab: p } = (0, s.j)();
                return (0, c.c)(() => {
                    let o = null == a ? void 0 : a.pageIdForFrom;
                    if (!t || !a || !u || !_ || void 0 === _.objectId || !o || !d.x.includes(o) || void 0 === r || !e) return;
                    let n = a.pageId;
                    if (void 0 === n) return;
                    let s = {
                        hash: r,
                        pageId: o,
                        entityType: u.blockType,
                        entityId: u.blockId,
                        entityPosX: u.blockPosX,
                        entityPosY: u.blockPosY,
                        objectId: _.objectId,
                        objectType: _.objectType,
                        objectPosX: _.objectPosX,
                        objectPosY: _.objectPosY,
                        objectsCount: u.objectsCount,
                        from: n,
                        to: i.AppScreen.VideoScreen,
                    };
                    (d.q.some((e) => e === o) &&
                        ((s.tabId = null == p ? void 0 : p.tabId),
                        (s.tabPos = null == p ? void 0 : p.tabPos),
                        (s.isTabSelectedByDefault = null == p ? void 0 : p.isTabSelectedByDefault)),
                        a.skeletonId && (s.skeletonId = a.skeletonId),
                        a.mainObjectType && (s.mainObjectType = a.mainObjectType),
                        a.mainObjectId && (s.mainObjectId = a.mainObjectId),
                        Object.values(s).some((e) => void 0 === e) || (0, l.QS)(t.evgenInstance, s));
                });
            });
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        48704: (e, t, r) => {
            (Promise.resolve().then(r.bind(r, 57328)), Promise.resolve().then(r.bind(r, 70938)));
        },
        48987: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => i });
            let i = (e) => {
                let t = Math.round(e);
                return { hours: Math.floor(t / 3600), minutes: Math.floor((t % 3600) / 60), seconds: t % 60 };
            };
        },
        53323: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => d });
            var i,
                l = r(87819),
                o = r(53548),
                n = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (l && (l += ' '), (l += i));
                                            else for (r in t) t[r] && (l && (l += ' '), (l += r));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    2876: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var o in ((i = {}), t)) 'key' !== o && (i[o] = t[o]);
                            else i = t;
                            return { $$typeof: r, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    792: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let i = r(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, i.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                                    return t.current.callback(...r);
                                },
                                callback: e,
                            });
                            return (
                                (0, i.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    597: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let i = r(810),
                            { innerWidth: l = 0, innerHeight: o = 0 } = window;
                        function n(e) {
                            let { top: t, right: r, bottom: i, left: n } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= o) || (i >= 0 && i <= o)) && ((n >= 0 && n <= l) || (r >= 0 && r <= l));
                        }
                        function s(e) {
                            var t, r;
                            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, i)) ? r : e.attributes[0];
                        }
                        function a(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = n),
                            (t.getElementNameByDataAttribute = s),
                            (t.createIntersectionObserver = a),
                            (t.useIntersectionObserver = function (e, r, l) {
                                let [{ freezeOnceVisible: o, preflightCheck: c, ...d }, u = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, l],
                                    [_, p] = (0, i.useState)({}),
                                    m = (0, i.useRef)(new Set()),
                                    f = (0, i.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : a((e) => {
                                                      let t = s(e.target);
                                                      if (t && f) {
                                                          if (m.current.has(t)) return;
                                                          (p((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              o && e.isIntersecting && (m.current.add(t), f.unobserve(e.target)));
                                                      }
                                                  }, d),
                                        [u],
                                    );
                                return (
                                    (0, i.useLayoutEffect)(
                                        () => (
                                            f &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = n(e.current))) {
                                                            let t = s(e.current);
                                                            p((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || f.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                f && f.disconnect();
                                            }
                                        ),
                                        [u, f, e.length],
                                    ),
                                    _
                                );
                            }));
                    },
                    4012: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useMergeRefs = void 0));
                        var i = r(1964);
                        Object.defineProperty(t, 'useMergeRefs', {
                            enumerable: !0,
                            get: function () {
                                return i.useMergeRefs;
                            },
                        });
                    },
                    1676: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let i = r(810);
                        t.useToggle = (e) => {
                            let [t, r] = (0, i.useState)(e);
                            (0, i.useEffect)(() => {
                                r(e);
                            }, [e]);
                            let l = (0, i.useCallback)(() => {
                                    r((e) => !e);
                                }, []),
                                o = (0, i.useCallback)(() => {
                                    r(!0);
                                }, []),
                                n = (0, i.useCallback)(() => {
                                    r(!1);
                                }, []);
                            return { state: t, toggle: l, setState: r, toggleTrue: o, toggleFalse: n };
                        };
                    },
                    1258: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.AutoScrollCarousel = void 0));
                        let i = r(4377),
                            l = r(810),
                            o = r(792),
                            n = r(597),
                            s = r(4012),
                            a = r(1676),
                            c = r(7962),
                            d = r(2134),
                            u = r(7262);
                        t.AutoScrollCarousel = (e) => {
                            let {
                                    ref: t,
                                    children: r,
                                    autoplay: { enabled: _, delay: p, stopOnMouseEnter: m, stopOnFocusIn: f, stopOnInteraction: h },
                                    onPointerEnter: C,
                                    onPointerLeave: v,
                                    onPointerDown: x,
                                    onPointerUp: g,
                                    onPointerCancel: b,
                                    onFocus: S,
                                    onBlur: y,
                                    onScroll: E,
                                    onScrollEnd: A,
                                    ...I
                                } = e,
                                { state: L, toggleTrue: j, toggleFalse: N } = (0, a.useToggle)(!1),
                                { state: R, toggleTrue: T, toggleFalse: O } = (0, a.useToggle)(!1),
                                { state: k, setState: P, toggleFalse: w } = (0, a.useToggle)(!1),
                                { state: M, setState: D } = (0, a.useToggle)(!1),
                                { state: U, setState: B } = (0, a.useToggle)(!1),
                                { state: H, toggleTrue: W, toggleFalse: z } = (0, a.useToggle)(!1),
                                { state: Y, toggleTrue: F } = (0, a.useToggle)(!1),
                                { state: V, setState: K } = (0, a.useToggle)(!1),
                                X = (0, l.useRef)(null),
                                Z = (0, s.useMergeRefs)([X, t]),
                                G = (0, u.useScrollEndFallback)(z),
                                J = l.Children.count(r),
                                $ = _ && J > 1 && M && U && !V && !((m && k) || (f && L) || (h && Y) || R || H),
                                Q = (0, o.useCallbackRef)((e) => {
                                    (P('mouse' === e.pointerType), null == C || C(e));
                                }),
                                q = (0, o.useCallbackRef)((e) => {
                                    (w(), O(), null == v || v(e));
                                }),
                                ee = (0, o.useCallbackRef)((e) => {
                                    (T(), F(), null == x || x(e));
                                }),
                                et = (0, o.useCallbackRef)((e) => {
                                    (O(), null == g || g(e));
                                }),
                                er = (0, o.useCallbackRef)((e) => {
                                    (O(), null == b || b(e));
                                }),
                                ei = (0, o.useCallbackRef)((e) => {
                                    (R || j(), null == S || S(e));
                                }),
                                el = (0, o.useCallbackRef)((e) => {
                                    (e.currentTarget.contains(e.relatedTarget) || N(), null == y || y(e));
                                }),
                                eo = (0, o.useCallbackRef)((e) => {
                                    (W(), G(e.currentTarget), null == E || E(e));
                                }),
                                en = (0, o.useCallbackRef)((e) => {
                                    (z(), null == A || A(e));
                                });
                            return (
                                (0, l.useEffect)(() => {
                                    let e = matchMedia('(prefers-reduced-motion: reduce)'),
                                        t = () => K(e.matches);
                                    return (t(), e.addEventListener('change', t), () => e.removeEventListener('change', t));
                                }, [K]),
                                (0, l.useEffect)(() => {
                                    let e = X.current;
                                    if (!e) return;
                                    let t = (0, n.createIntersectionObserver)((e) => {
                                        D(e.isIntersecting && e.intersectionRatio > 0);
                                    });
                                    return (t.observe(e), () => t.disconnect());
                                }, [X, D]),
                                (0, l.useEffect)(() => {
                                    let e = () => B('visible' === document.visibilityState);
                                    return (document.addEventListener('visibilitychange', e), e(), () => document.removeEventListener('visibilitychange', e));
                                }, [B]),
                                (0, l.useEffect)(() => {
                                    let e = X.current;
                                    if (!e || !$) return;
                                    let t = setInterval(() => {
                                        let r = (0, d.getNextCarouselScrollPosition)(e);
                                        void 0 !== r && (clearInterval(t), W(), e.scrollTo({ left: r, behavior: 'smooth' }));
                                    }, p);
                                    return () => clearInterval(t);
                                }, [X, p, $, J, W]),
                                (0, i.jsx)(c.CarouselBase, {
                                    ref: Z,
                                    ...I,
                                    onPointerEnter: Q,
                                    onPointerLeave: q,
                                    onPointerDown: ee,
                                    onPointerUp: et,
                                    onPointerCancel: er,
                                    onFocus: ei,
                                    onBlur: el,
                                    onScroll: eo,
                                    onScrollEnd: en,
                                    children: r,
                                })
                            );
                        };
                    },
                    2134: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getNextCarouselScrollPosition = void 0),
                            (t.getNextCarouselScrollPosition = (e) => {
                                let t = e.scrollWidth - e.clientWidth;
                                if (t <= 1) return;
                                let r = getComputedStyle(e),
                                    i = parseFloat(r.scrollPaddingLeft) || 0,
                                    l = parseFloat(r.scrollPaddingRight) || 0,
                                    o = e.getBoundingClientRect().left + e.clientLeft,
                                    n = 0;
                                for (let r of e.children) {
                                    let s = r.getBoundingClientRect(),
                                        a = getComputedStyle(r).scrollSnapAlign,
                                        c = s.left - o + e.scrollLeft,
                                        d = Math.max(0, Math.min(t, 'center' === a ? c + s.width / 2 - (e.clientWidth + i - l) / 2 : c - i));
                                    if (d > e.scrollLeft + 1) {
                                        n = d;
                                        break;
                                    }
                                }
                                if (!(1 >= Math.abs(n - e.scrollLeft))) return n;
                            }));
                    },
                    7262: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScrollEndFallback = void 0));
                        let i = r(810),
                            l = r(792);
                        t.useScrollEndFallback = (e) => {
                            let t = (0, i.useRef)(void 0),
                                r = (0, l.useCallbackRef)(e);
                            return (
                                (0, i.useEffect)(() => () => clearTimeout(t.current), []),
                                (0, l.useCallbackRef)((e) => {
                                    'onscrollend' in e || (clearTimeout(t.current), (t.current = setTimeout(r, 200)));
                                })
                            );
                        };
                    },
                    4014: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let i = r(4377),
                            l = r(1258),
                            o = r(7962);
                        t.Carousel = (e) => {
                            let { autoplay: t, ...r } = e;
                            return t ? (0, i.jsx)(l.AutoScrollCarousel, { ...r, autoplay: t }) : (0, i.jsx)(o.CarouselBase, { ...r });
                        };
                    },
                    7962: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CarouselBase = void 0));
                        let l = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = i(r(2876));
                        t.CarouselBase = (e) => {
                            let { className: t, itemClassName: r, children: i, ref: a, role: c, ...d } = e;
                            return (0, l.jsx)('ol', {
                                ref: a,
                                className: (0, o.clsx)(s.default.root, t),
                                ...d,
                                role: null != c ? c : 'list',
                                children: n.Children.map(i, (e) => (0, l.jsx)('li', { className: (0, o.clsx)(s.default.item, r), children: e })),
                            });
                        };
                    },
                    1964: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(o, 2));
                    },
                },
                s = {};
            function a(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return (n[e].call(r.exports, r, r.exports, a), r.exports);
            }
            ((a.d = (e, t) => {
                for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var c = {};
            (() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                var e = a(4014);
                Object.defineProperty(c, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var d = c.l;
            c.X;
        },
        54965: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => l });
            let i = (e, t) => (t > 0 ? Math.floor(e / t) : 0),
                l = (e, t) => {
                    let r = i(e, 3600),
                        l = i(e - 3600 * r, 60),
                        o = e - 3600 * r - 60 * l,
                        n = i(t || e, 3600) > 0,
                        s = [l, o];
                    return (n && s.unshift(r), s.map((e) => String(e).padStart(2, '0')).join(':'));
                };
        },
        55737: (e) => {
            e.exports = {
                itemCounter_3: 'ClipsCarouselContent_itemCounter_3__c_H3V',
                item: 'ClipsCarouselContent_item__Yy7_P',
                important: 'ClipsCarouselContent_important__nZYA0',
                itemCounter_5: 'ClipsCarouselContent_itemCounter_5__QeQd_',
            };
        },
        56265: (e) => {
            e.exports = {
                root: 'CollectionClipsPageClipsWillLike_root__uS0_8',
                carouselItem: 'CollectionClipsPageClipsWillLike_carouselItem__0C0_W',
                important: 'CollectionClipsPageClipsWillLike_important__U_2ET',
                carouselBlockHeader: 'CollectionClipsPageClipsWillLike_carouselBlockHeader__wDnJp',
                carouselBlock: 'CollectionClipsPageClipsWillLike_carouselBlock__La_8Q',
            };
        },
        57328: (e, t, r) => {
            'use strict';
            r.d(t, { WithAuth: () => f });
            var i = r(88800),
                l = r(84961),
                o = r(58390),
                n = r(65724),
                s = r(88969),
                a = r(29504),
                c = r(7628),
                d = r(42674),
                u = r.n(d);
            let _ = (0, l.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(a.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(s.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(a.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(s.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var p = r(4370),
                m = r(72288);
            let f = (0, l.PA)((e) => {
                let { children: t, withRedirectToMainPage: r } = e,
                    { user: l } = (0, m.g)();
                return l.isAuthorized ? t : (r && (0, o.redirect)(p.Z.main.href), (0, i.jsx)(_, {}));
            });
        },
        60266: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            var i = r(88800);
            r(30282);
            var l = r(11006),
                o = r.n(l);
            let n = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: o().empty });
            };
        },
        62293: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => l });
            var i = r(97956);
            let l = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: l, userRegion: o } = e;
                return 'ru' === o && t(i.z.WebNextFooterDisclaimer, 'on') ? r() : l();
            };
        },
        67990: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        68142: (e) => {
            e.exports = {
                root: 'CollectionClipsPage_root__Z1yh9',
                content: 'CollectionClipsPage_content__68gZ1',
                scrollContent: 'CollectionClipsPage_scrollContent__6F_37',
                header: 'CollectionClipsPage_header__L_hq2',
                footer: 'CollectionClipsPage_footer__0IfmB',
            };
        },
        69323: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => D });
            var i = r(88800),
                l = r(65724),
                o = r(55482),
                n = r(84961),
                s = r(53548),
                a = r(2058),
                c = r(35412),
                d = r(62414),
                u = r(17392),
                _ = r(18593),
                p = r(29993),
                m = r(29832),
                f = r(90688),
                h = r(7555),
                C = r(29504),
                v = r(13946),
                x = r(44599),
                g = r(16717),
                b = r(44318),
                S = r(64284),
                y = r(98427),
                E = r(84384),
                A = r(54965),
                I = r(97361),
                L = r(99313),
                j = r(20585),
                N = r(39079),
                R = r(72288),
                T = r(90224),
                O = r(91292),
                k = r(16704),
                P = r(8299),
                w = r(90865),
                M = r.n(w);
            let D = (0, n.PA)((e) => {
                var t;
                let {
                        titleClassName: r,
                        artistLinkClassName: n,
                        clip: w,
                        withVideo: D = !0,
                        artistIdWithoutLink: U,
                        viewUuid: B,
                        shouldOpenModalOnCardClick: H = !0,
                    } = e,
                    { fullscreenVideoPlayer: W } = (0, R.g)(),
                    { formatMessage: z } = (0, a.A)(),
                    Y = (0, b.C)(),
                    { from: F } = (0, E.f)({ pageId: y.b.VIDEO_PLAYER, contextId: W.state.contextId, contextType: _.K.Various, blockId: S.U.CLIPS }),
                    V = (0, I.P)(null != (t = w.duration) ? t : 0),
                    K = (0, x._)(B),
                    X = (0, d.D)(),
                    Z = (0, s.useRef)(null),
                    G = D && w.previewUrl,
                    J = (0, p.c)(() => {
                        Z.current && ((Z.current.currentTime = 0), Z.current.play());
                    }),
                    $ = (0, s.useMemo)(() => (0, o.A)(J, 500), [J]),
                    Q = (0, p.c)(() => {
                        var e;
                        null == (e = Z.current) || e.pause();
                    }),
                    q = (0, s.useMemo)(() => W.ids.indexOf(w.clipId), [W, w.clipId]),
                    { isPlaying: ee, togglePlay: et } = (0, N.D)({
                        playContextParams: {
                            contextData: { type: _.K.Various, meta: { id: L.H.VARIOUS_CLIP_CONTEXT }, from: F },
                            queueParams: { index: q },
                            entitiesData: W.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(w.clipId),
                        sonataState: W.state,
                        playbackId: j.V.CLIP,
                    }),
                    er = H ? w.url : (0, g.J)(W.ids, q),
                    ei = (0, p.c)(() => {
                        H ? (Y([w.clipId]), K()) : ee || et();
                    }),
                    el = (0, P.X)({ clip: w, callback: ei }),
                    eo = z({ id: 'entity-names.clip-name' }, { clipName: w.title }),
                    en = (0, s.useMemo)(
                        () =>
                            w.isAvailable
                                ? (0, i.jsxs)(h.t, {
                                      radius: 'm',
                                      className: (0, l.$)(M().view, M().cover),
                                      onMouseEnter: $,
                                      onMouseLeave: Q,
                                      onClick: el,
                                      children: [
                                          G &&
                                              (0, i.jsx)('video', {
                                                  className: M().media,
                                                  ref: Z,
                                                  poster: w.thumbnail && (0, c.oZ)(w.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, i.jsx)('source', { src: w.previewUrl, type: 'video/mp4' }),
                                              }),
                                          w.thumbnail &&
                                              (0, i.jsx)(f._V, {
                                                  className: M().image,
                                                  'aria-hidden': !0,
                                                  src: w.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: c.oZ,
                                              }),
                                          void 0 !== w.duration &&
                                              (0, i.jsx)(C.HL, {
                                                  role: 'text',
                                                  'aria-label': V,
                                                  variant: 'span',
                                                  className: M().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: (0, A.E)(w.duration, w.duration) }),
                                              }),
                                          (0, i.jsx)(k.D, { variant: 'filled', className: M().playButton, onClick: el, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, i.jsx)(h.t, {
                                      radius: 'm',
                                      className: M().unavailableCover,
                                      children: (0, i.jsx)(f.Ab, { className: M().image, iconVariant: 'unavailable', 'data-test-id': u.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [V, w.isAvailable, w.thumbnail, w.previewUrl, w.duration, $, Q, el, G],
                    ),
                    es = (0, s.useMemo)(
                        () =>
                            w.hasArtists
                                ? (0, i.jsx)(
                                      v.i,
                                      { linkClassName: (0, l.$)(M().artistLink, n), artists: w.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: U },
                                      w.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [U, w, n],
                    );
                return (0, i.jsx)(m.MN, {
                    ref: X,
                    className: M().root,
                    explicitMarkComponent:
                        w.explicitDisclaimer &&
                        (0, i.jsx)(T.N, { getDescriptionTexts: w.getDescriptionTexts, variant: w.explicitDisclaimer, size: 'xxs' }, w.getKey('ExplicitMarkIcon')),
                    'aria-label': eo,
                    srTitle: (0, i.jsx)(O.N, { className: M().srTitleLink, href: er, onClick: el, children: eo }),
                    title: (0, i.jsxs)(
                        C.HL,
                        {
                            className: (0, l.$)(M().title, r),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            'aria-hidden': !0,
                            children: [
                                (0, i.jsx)(O.N, {
                                    className: M().titleLink,
                                    href: er,
                                    tabIndex: -1,
                                    'aria-label': eo,
                                    onClick: el,
                                    'data-test-id': u.Kq.clip.CLIP_META_TITLE,
                                    children: w.title,
                                }),
                                w.version && (0, i.jsx)(C.HL, { className: M().version, variant: 'span', children: ' '.concat(w.version) }),
                            ],
                        },
                        w.getKey('Title'),
                    ),
                    view: en,
                    description: es,
                    'data-test-id': u.Kq.clip.CLIP_CARD,
                });
            });
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        70938: (e, t, r) => {
            'use strict';
            r.d(t, { CollectionClipsPage: () => J });
            var i = r(88800),
                l = r(84961),
                o = r(53548),
                n = r(2058),
                s = r(88969),
                a = r(58390),
                c = r(87999),
                d = r(76903),
                u = r(17392),
                _ = r(44236),
                p = r(29504),
                m = r(32596),
                f = r(69630),
                h = r(38501),
                C = r(98427),
                v = r(46422),
                x = r(44230),
                g = r(37670),
                b = r(4370),
                S = r(72288),
                y = r(86790),
                E = r(60266),
                A = r(93317),
                I = r(68142),
                L = r.n(I),
                j = r(65724),
                N = r(61013),
                R = r(29993),
                T = r(50408),
                O = r(69323),
                k = r(77605),
                P = r(10270);
            let w = () => (window.innerWidth > 1920 ? 4 : window.innerWidth > 1200 ? 3 : 2);
            var M = r(37523),
                D = r(79939),
                U = r(86535),
                B = r(56265),
                H = r.n(B);
            let W = (0, l.PA)((e) => {
                var t, r;
                let { className: l } = e,
                    { formatMessage: s } = (0, n.A)(),
                    { clipsWillLike: a } = (0, S.g)().collection.clips;
                return (
                    a.isNeededToLoad && (0, o.use)(a.getData()),
                    (0, i.jsx)(M.F, {
                        blockId: U.h.CLIPS_CAROUSEL,
                        blockType: U.h.CLIPS_CAROUSEL,
                        blockPosX: 1,
                        blockPosY: 7,
                        objectsCount: null != (r = null == (t = a.clips) ? void 0 : t.length) ? r : 0,
                        children: (0, i.jsx)(D.K, {
                            className: (0, j.$)(H().root, l),
                            containerClassName: H().carouselBlock,
                            carouselItemClassName: (0, j.$)(H().carouselItem, H().important),
                            headerClassName: (0, j.$)(H().carouselBlockHeader, H().carouselBlock),
                            isShimmerVisible: a.isLoading,
                            isShimmerActive: !0,
                            title: s({ id: 'entity-names.clips-will-like' }),
                            clips: a.clips || [],
                            headingVariant: 'h2',
                            'data-test-id': u.Kq.clip.CLIPS_CAROUSEL,
                        }),
                    })
                );
            });
            var z = r(52300),
                Y = r(71811),
                F = r.n(Y);
            let V = (0, l.PA)(() => {
                let {
                        collection: {
                            clips: { clipsWillLike: e },
                        },
                    } = (0, S.g)(),
                    t = !e.isEmpty && !e.isRejected;
                return (0, i.jsxs)('div', {
                    className: F().root,
                    children: [
                        (0, i.jsxs)('div', {
                            className: F().content,
                            children: [
                                (0, i.jsx)(z.I, { className: F().icon, size: 'xl', variant: 'clip' }),
                                (0, i.jsx)(p.DZ, {
                                    className: F().title,
                                    variant: 'h3',
                                    size: 'xs',
                                    'data-test-id': u.e8.landing.COLLECTION_CLIPS_BLOCK_LIKED_EMPTY_BLOCK_TITLE,
                                    children: (0, i.jsx)(s.A, { id: 'error-messages.empty-collection-clips-title' }),
                                }),
                                (0, i.jsx)(p.HL, {
                                    className: F().text,
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'l',
                                    weight: 'normal',
                                    'data-test-id': u.e8.landing.COLLECTION_CLIPS_BLOCK_LIKED_EMPTY_BLOCK_TEXT,
                                    children: (0, i.jsx)(s.A, { id: 'error-messages.empty-collection-clips-text' }),
                                }),
                            ],
                        }),
                        t && (0, i.jsx)(W, {}),
                    ],
                });
            });
            var K = r(23471),
                X = r.n(K);
            let Z = (0, l.PA)((e) => {
                    let { virtualItem: t, resizeObserver: r, columns: l } = e,
                        [s, a] = (0, T.d)(),
                        { formatMessage: c } = (0, n.A)(),
                        {
                            collection: { clips: d },
                        } = (0, S.g)();
                    (0, o.useEffect)(
                        () => (
                            s && r && r.observe(s),
                            () => {
                                s && r && r.unobserve(s);
                            }
                        ),
                        [s, r],
                    );
                    let u = d.items.slice(t.index * l, t.index * l + l),
                        _ = d.pager && d.pager.total <= l ? 0 : 1,
                        p = !d.clipsWillLike.isEmpty && !d.clipsWillLike.isRejected;
                    return (0, i.jsxs)(
                        'div',
                        {
                            ref: a,
                            'data-index': t.index,
                            className: X().virtualItem,
                            style: { transform: 'translateY('.concat(t.start, 'px)') },
                            children: [
                                (0, i.jsx)('div', {
                                    style: { gridTemplateColumns: 'repeat('.concat(l, ', minmax(0, 1fr))') },
                                    className: (0, j.$)(X().virtualItemRow, {
                                        [X().virtualItemRow_withTopBorder]: t.index === _ + 1 && p,
                                        [X().virtualItemRow_withBottomBorder]: t.index === _ && p,
                                    }),
                                    children:
                                        null == u
                                            ? void 0
                                            : u.map((e, t) => {
                                                  if (!e) {
                                                      let e = c({ id: 'loading-messages.entity-is-loading' }, { entityName: c({ id: 'entity-names.clip' }) });
                                                      return (0, i.jsx)(k.k, { 'aria-label': e }, t);
                                                  }
                                                  return (0, i.jsx)(O.F, { clip: e }, e.clipId);
                                              }),
                                }),
                                t.index === _ && p && (0, i.jsx)(W, { className: X().clipsWillLike }),
                            ],
                        },
                        t.key,
                    );
                }),
                G = (0, l.PA)((e) => {
                    var t;
                    let { contentScrollRef: r } = e,
                        {
                            collection: { clips: l },
                            user: n,
                        } = (0, S.g)(),
                        [s, a] = (0, o.useState)(w),
                        [c, d] = (0, T.d)(),
                        _ = l.pager && l.pager.total <= s ? 0 : 1,
                        { virtualizer: p, resizeObserver: f } = (0, P.r)({
                            gap: 24,
                            count: l.pager ? Math.ceil((null == (t = l.pager) ? void 0 : t.total) / s) : 5,
                            getEstimateSize: (e) => (e === _ ? 800 : 400),
                            containerRef: c,
                        }),
                        h = (0, R.c)((e) => {
                            n.account.data.uid && l.getData({ userId: n.account.data.uid, page: e, pageSize: 20 });
                        }),
                        C = p.getTotalSize(),
                        v = p.getVirtualItems(),
                        x = (0, R.c)((e) => {
                            let t = Math.floor((e.startIndex * s) / 20),
                                r = Math.ceil((e.endIndex * s) / 20);
                            for (let e = t; e <= r; e++) h(e);
                        });
                    ((0, o.useEffect)(() => {
                        l.isNeededToLoad && (null == r || r.scrollTo({ top: 0, behavior: 'instant' }), l.setInitialShimmer(), h());
                    }, [l, l.isNeededToLoad, h, r]),
                        (0, o.useEffect)(() => {
                            !p.isScrolling && p.range && x(p.range);
                        }, [x, p.range, p.isScrolling]));
                    let g = (0, N.A)(() => {
                        a(w);
                    }, 100);
                    return ((0, o.useEffect)(
                        () => (
                            g(),
                            window.addEventListener('resize', g),
                            () => {
                                window.removeEventListener('resize', g);
                            }
                        ),
                        [g],
                    ),
                    l.isEmpty)
                        ? (0, i.jsx)(V, {})
                        : l.isRejected
                          ? (0, i.jsx)(m.SomethingWentWrong, {})
                          : (0, i.jsx)('div', {
                                className: X().virtualScroll,
                                style: { height: ''.concat(C, 'px') },
                                ref: d,
                                'data-test-id': u.Kq.clip.COLLECTION_LIKED_CLIPS_BLOCK,
                                children: v.map((e) => (0, i.jsx)(Z, { virtualItem: e, resizeObserver: f, columns: s }, e.index)),
                            });
                }),
                J = (0, l.PA)(() => {
                    let {
                            collection: { clips: e },
                        } = (0, S.g)(),
                        { formatMessage: t } = (0, n.A)(),
                        r = (0, v.W)(),
                        l = (0, h.d)(),
                        { contentScrollRef: I, setContentScrollRef: j } = (0, x.g)();
                    return (!l && e.isLoaded && (0, a.redirect)(b.Z.collection.href),
                    (0, g.J)(e.isResolved),
                    (0, o.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    e.isRejected)
                        ? (0, i.jsx)(m.SomethingWentWrong, {})
                        : (0, i.jsx)(d.a, {
                              pageId: c.AppScreen.OwnClips,
                              pageIdForFrom: C.b.OWN_CLIPS,
                              children: (0, i.jsxs)(f.h, {
                                  scrollElement: I,
                                  outerTitle: t({ id: 'entity-names.clips' }),
                                  children: [
                                      (0, i.jsx)(A.Y, {
                                          variant: A.V.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: r.canBack,
                                          children: (0, i.jsx)(p.DZ, {
                                              id: 'collection-artists-header',
                                              variant: 'h1',
                                              weight: 'bold',
                                              size: 'xl',
                                              lineClamp: 1,
                                              children: (0, i.jsx)(s.A, { id: 'entity-names.clips' }),
                                          }),
                                      }),
                                      (0, i.jsxs)(_.C, {
                                          scrollableContainerRef: j,
                                          className: L().root,
                                          containerClassName: L().content,
                                          scrollContentClassName: L().scrollContent,
                                          'data-test-id': u.Xk.collection.COLLECTION_CLIPS_PAGE,
                                          children: [(0, i.jsx)(G, { contentScrollRef: I }), (0, i.jsx)(E.A, { children: (0, i.jsx)(y.w, { className: L().footer }) })],
                                      }),
                                  ],
                              }),
                          });
                });
        },
        71811: (e) => {
            e.exports = {
                root: 'CollectionClipsPageEmpty_root__P29ns',
                content: 'CollectionClipsPageEmpty_content__gIM_C',
                icon: 'CollectionClipsPageEmpty_icon__jDAZP',
                title: 'CollectionClipsPageEmpty_title__DKJ_3',
                text: 'CollectionClipsPageEmpty_text__F_Too',
            };
        },
        76827: (e) => {
            e.exports = {
                root: 'ClipCardShimmer_root__sIvNr',
                cover: 'ClipCardShimmer_cover__yA4jz',
                title: 'ClipCardShimmer_title__MCApK',
                text: 'ClipCardShimmer_text__ajZGv',
            };
        },
        77605: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => a });
            var i = r(88800),
                l = r(19994),
                o = r(64310),
                n = r(76827),
                s = r.n(n);
            let a = (e) => {
                let { isActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: s().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, i.jsx)(l.W, { isActive: t, className: s().cover, radius: 'l' }),
                        (0, i.jsx)(o.n, { isActive: t, className: s().title }),
                        (0, i.jsx)(o.n, { isActive: t, className: s().text }),
                    ],
                });
            };
        },
        79939: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => m });
            var i = r(88800),
                l = r(65724),
                o = r(84961),
                n = r(53548),
                s = r(35412),
                a = r(18486),
                c = r(31764),
                d = r(7857),
                u = r.n(d),
                _ = r(93671);
            let p = (0, o.PA)((e) => {
                    let {
                            clipCardTitleClassName: t,
                            clipCardArtistLinkClassName: r,
                            carouselItemClassName: o,
                            forwardRef: d,
                            isShimmerVisible: p,
                            isShimmerActive: m,
                            title: f,
                            description: h,
                            containerClassName: C,
                            headerClassName: v,
                            viewAllActionLink: x,
                            artistIdWithoutLink: g,
                            withVideo: b = !0,
                            clips: S,
                            headingVariant: y,
                            className: E,
                            shouldOpenModalOnCardClick: A = !0,
                            itemCounter: I,
                            ...L
                        } = e,
                        j = (0, n.useId)(),
                        N = (0, n.useRef)(null);
                    return (0, i.jsxs)('section', {
                        className: (0, l.$)(u().root, E),
                        ref: d,
                        ...(0, s.OZ)(L),
                        children: [
                            (0, i.jsx)(a.T, {
                                className: v,
                                labeledForId: j,
                                title: f,
                                description: h,
                                viewAllActionLink: x,
                                controls: (0, i.jsx)(c.X, { className: u().controls, carouselRef: N }),
                                headingVariant: y,
                                withDescription: !!h,
                            }),
                            (0, i.jsx)(_.t, {
                                clipCardTitleClassName: t,
                                clipCardArtistLinkClassName: r,
                                carouselItemClassName: o,
                                isShimmerVisible: p,
                                isShimmerActive: m,
                                containerClassName: C,
                                artistIdWithoutLink: g,
                                withVideo: b,
                                clips: S,
                                shouldOpenModalOnCardClick: A,
                                itemCounter: I,
                                ref: N,
                                'aria-labelledby': j,
                            }),
                        ],
                    });
                }),
                m = (0, n.forwardRef)((e, t) => (0, i.jsx)(p, { forwardRef: t, ...e }));
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        86535: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => l });
            var i = r(64284),
                l = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(i.U.RUP, '_').concat(i.U.MAIN, '-').concat(i.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(i.U.DISCOGRAPHY, '_').concat(i.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(i.U.ALBUMS, '_').concat(i.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(i.U.COMPILATIONS, '_').concat(i.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(i.U.ARTISTS, '_').concat(i.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(i.U.CLIPS, '_').concat(i.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(i.U.DISCOVERY, '_').concat(i.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(i.U.SEARCH, '_').concat(i.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR, '_').concat(i.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        86790: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => A });
            var i = r(88800),
                l = r(65724),
                o = r(84961),
                n = r(2058),
                s = r(30282),
                a = r(94144),
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
            let d = (e, t, r) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: r, tld: i, year: l } = e;
                    return {
                        year: l,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, i, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, i, r) },
                    };
                };
            var _ = r(62293),
                p = r(99839);
            let m = (e) => e(new Date(), (0, p.m)());
            var f = r(51611),
                h = r(72288),
                C = r(11006),
                v = r.n(C),
                x = r(17392),
                g = r(29504),
                b = r(91292);
            let S = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(v().copyrights, t),
                        'data-test-id': x.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(g.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, i.jsx)(b.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, l.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': x.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(g.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(b.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': x.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                y = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, i.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: v().list,
                                'data-test-id': x.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: l } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, i.jsx)(b.N, { target: '_blank', href: l, className: v().link, 'data-test-id': x.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(g.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': x.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, l.$)(v().root, v().important, t),
                        'data-test-id': x.S7.FOOTER,
                        children: [(0, i.jsx)(y, { links: r.links, disclaimer: r.disclaimer }), (0, i.jsx)(S, { data: r.copyrights })],
                    });
                };
            (0, o.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, h.g)(),
                    { formatDate: l, formatMessage: o } = (0, n.A)(),
                    { language: s } = (0, f.h)(),
                    a = u({ formatMessage: o, language: s, tld: r.tld, year: m(l) });
                return (0, i.jsx)(S, { className: t, data: a });
            });
            let A = (0, o.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: o, location: p, user: C } = (0, h.g)(),
                    { formatDate: x, formatMessage: g } = (0, n.A)(),
                    { isEnabled: b } = null != (t = (0, a.P)()) ? t : {},
                    { language: S } = (0, f.h)(),
                    y = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: i, language: l, tld: o, userRegion: n, year: s } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: i, language: l, userRegion: o } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, l) },
                                    s = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, l) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, l) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, l) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, l) },
                                    p = [n, a, u];
                                return (r && 'ru' === o && p.push(s), p.push(_), p);
                            })({ formatMessage: r, isWebApplication: i, language: l, tld: o, userRegion: n }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: r, language: l, tld: o, year: s }),
                        };
                    })({
                        checkExperiment: (e, t) => o.checkExperiment(e, t),
                        formatMessage: g,
                        isWebApplication: s.$3,
                        tld: p.tld,
                        language: S,
                        userRegion: C.account.data.userSessionRegionIso,
                        year: m(x),
                    });
                return (0, i.jsx)(E, { className: (0, l.$)({ [v().root_withOffsetForDeeplink]: b }, r), data: y });
            });
        },
        88021: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => d });
            var i,
                l = r(14022),
                o = r(53548),
                n = {
                    352: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(o, 2));
                    },
                },
                s = {};
            function a(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return (n[e](r, r.exports, a), r.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = a(810),
                    t = a(352);
                c.l = (r) => {
                    let [i, l] = (0, e.useState)(!0),
                        [o, n] = (0, e.useState)(!0),
                        s = () => {
                            let e = null == r ? void 0 : r.current;
                            e && (l(0 === e.scrollLeft), n(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        s();
                    }, [r, s]),
                        (0, e.useEffect)(() => {
                            let e = null == r ? void 0 : r.current;
                            return (
                                null == e || e.addEventListener('scroll', s),
                                window.addEventListener('resize', s),
                                () => {
                                    (null == e || e.removeEventListener('scroll', s), window.removeEventListener('resize', s));
                                }
                            );
                        }, [r, s]));
                    let a = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    r && r.current && (r.current.scrollLeft += r.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [r],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        r && r.current && (r.current.scrollLeft -= r.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [r],
                        ),
                        swipeForward: a,
                        shouldBackwardButtonBeDisabled: i,
                        shouldForwardButtonBeDisabled: o,
                        shouldHideControls: i && o,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        89544: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        90224: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => f });
            var i = r(88800),
                l = r(65724),
                o = r(84961),
                n = r(53548),
                s = r(2058),
                a = r(17392),
                c = r(52300),
                d = r(62837),
                u = r(72288),
                _ = r(94398),
                p = r(17332),
                m = r.n(p);
            let f = (0, o.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: o, containerClassName: p, variant: f, size: h = 'xxxs', ...C } = e,
                    { formatMessage: v } = (0, s.A)(),
                    {
                        settings: { isMobile: x },
                    } = (0, u.g)(),
                    [g, b] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    r && r().then(b);
                }, [r, o]);
                let {
                    iconVariant: S,
                    descriptionText: y,
                    isTooltipEnabled: E,
                    ariaLabel: A,
                } = ((e, t) => {
                    let { variant: r, descriptionTexts: i, isMobile: l } = e,
                        o = (null == i ? void 0 : i.join('\n')) || '';
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
                        })(r),
                        descriptionText: o,
                        isTooltipEnabled: !!(null == i ? void 0 : i.length) && !l,
                        ariaLabel: o.length > 0 ? o : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: f, descriptionTexts: g, isMobile: x }, v);
                return (0, i.jsx)(_.k, {
                    description: y,
                    placement: 'bottom-start',
                    enabled: E,
                    children: (0, i.jsx)('span', {
                        className: p,
                        children: (0, i.jsx)(c.I, {
                            className: (0, l.$)(m().explicitMark, t),
                            'aria-label': A,
                            variant: S,
                            size: h,
                            ...C,
                            'data-test-id': a.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        90865: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                view: 'ClipCard_view__MYSwA',
                playButton: 'ClipCard_playButton__0Wyss',
                duration: 'ClipCard_duration__89ZCx',
                image: 'ClipCard_image__hSUud',
                media: 'ClipCard_media__dU4RM',
                unavailableCover: 'ClipCard_unavailableCover__Zd9jl',
                cover: 'ClipCard_cover__ztEok',
                cover_withoutOffset: 'ClipCard_cover_withoutOffset__aasE2',
                root: 'ClipCard_root__kzWjg',
                srTitleLink: 'ClipCard_srTitleLink__0tQdz',
                title: 'ClipCard_title__I1s7Q',
                artistLink: 'ClipCard_artistLink__t6oPP',
                titleLink: 'ClipCard_titleLink__g3HDM',
                version: 'ClipCard_version__w9PM7',
            };
        },
        93671: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => h });
            var i = r(88800),
                l = r(65724),
                o = r(84961),
                n = r(53548),
                s = r(54020),
                a = r(87999),
                c = r(7833),
                d = r(53323),
                u = r(69323),
                _ = r(77605),
                p = r(55737),
                m = r.n(p);
            let f = (0, o.PA)((e) => {
                    let {
                            forwardRef: t,
                            clipCardTitleClassName: r,
                            clipCardArtistLinkClassName: o,
                            carouselItemClassName: p,
                            isShimmerVisible: f,
                            isShimmerActive: h,
                            containerClassName: C,
                            artistIdWithoutLink: v,
                            withVideo: x = !0,
                            clips: g,
                            shouldOpenModalOnCardClick: b = !0,
                            itemCounter: S,
                        } = e,
                        y = (0, n.useId)(),
                        E = (0, n.useRef)(String((0, s.A)())),
                        A = (0, n.useMemo)(() => {
                            if (f) return Array.from({ length: 5 }, (e, t) => (0, i.jsx)(_.k, { isActive: h }, t));
                            return null == g
                                ? void 0
                                : g.map((e, t) =>
                                      (0, i.jsx)(
                                          c.B,
                                          {
                                              objectType: a.DomainObjectType.Video,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectId: String(e.clipId),
                                              children: (0, i.jsx)(u.F, {
                                                  titleClassName: r,
                                                  artistLinkClassName: o,
                                                  clip: e,
                                                  withVideo: x,
                                                  artistIdWithoutLink: v,
                                                  viewUuid: E.current,
                                                  shouldOpenModalOnCardClick: b,
                                              }),
                                          },
                                          e.clipId,
                                      ),
                                  );
                        }, [r, o, f, h, v, x, g, b]);
                    return (0, i.jsx)(d.F, {
                        className: (0, l.$)(m().itemCounter, { [m()['itemCounter_'.concat(S)]]: S }, C),
                        ref: t,
                        itemClassName: (0, l.$)(m().item, m().important, p),
                        'aria-labelledby': y,
                        children: A,
                    });
                }),
                h = (0, n.forwardRef)((e, t) => (0, i.jsx)(f, { forwardRef: t, ...e }));
        },
        94144: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => l, P: () => o });
            var i = r(53548);
            let l = (0, i.createContext)(null),
                o = () => (0, i.useContext)(l);
        },
        94398: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => d });
            var i = r(88800),
                l = r(17392),
                o = r(17610),
                n = r(29504),
                s = r(37438),
                a = r.n(s);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: r, title: s, placement: d = 'top', children: u } = e;
                    return (0, i.jsxs)(o.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, i.jsx)(o.ZI, {
                                className: a().root,
                                'data-test-id': l.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: a().text,
                                    children: [
                                        s && (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: s }),
                                        (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: a().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
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
        97361: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => o });
            var i = r(2058),
                l = r(29831);
            let o = (e) => {
                let { formatMessage: t } = (0, i.A)();
                return (0, l.j)(e, t);
            };
        },
        99313: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.VARIOUS_CLIP_CONTEXT = 'various-clip-context'), e);
            })({});
        },
        99839: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        99890: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => o, UC: () => n, dM: () => s, uV: () => a });
            var i = r(89916),
                l = r(67990);
            let o = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                s = (e) => {
                    if (!(e instanceof i.m5) || !(0, l.N)(e.cause)) return 'unexpected';
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
                a = (e) => {
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
                4814, 7437, 8655, 9967, 3469, 1833, 917, 3266, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 3802, 4732, 9087, 3979, 1928, 9091,
                900, 9934, 2470, 7670, 2671, 763, 2670, 7358,
            ],
            () => e((e.s = 48704)),
        ),
            (_N_E = e.O()));
    },
]);
