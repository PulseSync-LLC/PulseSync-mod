(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9923],
    {
        1344: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => l });
            let i = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                l = (e) =>
                    i.reduce((t, r) => {
                        let { queryKey: i, resultKey: l } = r;
                        return ('string' == typeof e[i] && (t[l] = e[i]), t);
                    }, {});
        },
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
        4476: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => a });
            var i = r(88800),
                l = r(53548),
                o = r(54020),
                n = r(8840),
                s = r(80566);
            let a = (e) => {
                let { children: t } = e,
                    r = (0, l.useRef)({}),
                    a = (0, l.useRef)(
                        (0, n.Gv)(
                            (e) => {
                                let t = (0, n.L5)(e.target),
                                    i = r.current[t];
                                if (i) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, o.A)());
                                            (i.callback(!0, e), (i.showed = !0), (i.viewUuid = e));
                                        }, 1e3);
                                        i.timerId = e;
                                    }
                                    (!e.isIntersecting && i.showed && (i.callback(!1, i.viewUuid), (i.showed = !1), (i.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(i.timerId));
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, l.useCallback)((e) => {
                        var t;
                        !r.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = a.current) || t.observe(e.elementRef.current), (r.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    d = (0, l.useCallback)((e) => {
                        let t = r.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete r.current[e]);
                    }, []);
                (0, l.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = a.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, l.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, i.jsx)(s.B.Provider, { value: u, children: t });
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
                let { size: t = 'm', variant: r = 'default', color: p = 'primary', withRipple: m = !0, buttonText: f, isBlock: v, key: x, className: h } = e,
                    C = (0, o.useRouter)(),
                    g = (0, _.N)().get(u.QG),
                    y = (0, s.c)(() => {
                        g.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), C.push(g.authorizationUrl));
                    });
                return (0, i.jsx)(
                    a.$,
                    {
                        onClick: y,
                        className: h,
                        isBlock: v,
                        color: p,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: f || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
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
        9630: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => l, e: () => o });
            var i = r(53548);
            let l = (0, i.createContext)(null);
            function o() {
                return (0, i.useContext)(l);
            }
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
                        v = {
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
                        x = (0, i.XW)(v),
                        h = (0, i.Te)({ ...v, getScrollElement: () => p, initialOffset: null == p ? void 0 : p.scrollTop }),
                        C = _ ? x : h,
                        g = (0, o.c)(() => {
                            C.measure();
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
                        { virtualizer: C, resizeObserver: f.current }
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
        13946: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => Y });
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
                v = r(17392),
                x = r(29504),
                h = r(91292),
                C = r(2058),
                g = r(92716),
                y = r(96527),
                S = r(78940),
                E = r(55693),
                A = r(58217);
            let I = (0, o.PA)((e) => {
                    let { item: t, linkClassName: r, captionClassName: l, captionSize: o = 'm', allArtistsTitle: n, withCustomTooltip: s, hoverSettings: c } = e,
                        {
                            name: _,
                            link: p,
                            title: m,
                            ariaLabel: f,
                            tooltipText: I,
                            isTooltipEnabled: T,
                            handleNavigate: b,
                        } = ((e) => {
                            var t, r;
                            let { item: i, allArtistsTitle: l, withCustomTooltip: o } = e,
                                { formatMessage: n } = (0, C.A)(),
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
                                { sendNavigateSearchFeedback: p } = (0, E.z)(),
                                m = (0, y.N)(),
                                f = (0, d.c)((e) => {
                                    (c && a.isOpened && a.close(), _(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: r } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: l, fullscreenVideoPlayer: o } = (0, u.g)(),
                                        { modal: n } = i;
                                    return (0, A.l)({
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
                                x = (0, d.c)((e) => {
                                    (m({ to: g.AppScreen.ArtistScreen }), null == p || p(), v(e));
                                });
                            return { ...s, handleNavigate: x };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: s });
                    return p
                        ? (0, i.jsx)(h.N, {
                              ...p,
                              'aria-label': f,
                              className: r,
                              onClick: b,
                              title: m,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(a.m_, {
                                  enabled: T,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: I,
                                  hoverSettings: c,
                                  children: (0, i.jsx)(x.HL, { variant: 'span', type: 'entity', size: o, weight: 'medium', className: l, children: _ }),
                              }),
                          })
                        : (0, i.jsx)(a.m_, {
                              enabled: T,
                              offsetOptions: 4,
                              placement: 'top',
                              text: I,
                              hoverSettings: c,
                              children: (0, i.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: o,
                                  weight: 'medium',
                                  className: l,
                                  title: m,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                T = (e) => {
                    let { group: t, linkClassName: r, captionClassName: l, captionSize: o, allArtistsTitle: s, withCustomTooltip: a, hoverSettings: c } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(I, {
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
                                            (0, i.jsx)(I, {
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
            var b = r(88969),
                O = r(65453);
            let R = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: o } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(O.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(f().spoiler, r),
                            onClick: o,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(b.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var L = r(61013),
                N = r(87819),
                P = r(40634),
                j = r(48468),
                k = r.n(j);
            let w = (0, o.PA)((e) => {
                    let { label: t, artists: r, forwardRef: l } = e;
                    return (0, i.jsxs)(a.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, N.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: l, children: t }),
                            (0, i.jsx)(a.ZI, { className: k().tooltipContent, children: r.map((e) => (0, i.jsx)(P.V, { artist: e, className: k().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, n.forwardRef)((e, t) => (0, i.jsx)(w, { forwardRef: t, ...e }));
            var D = r(19934),
                U = r(70396),
                B = r.n(U);
            let H = (0, o.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: o } = (0, C.A)();
                    return (0, i.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, l.$)(B().root, B().important),
                        label: t,
                        ariaLabel: o({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, i.jsx)(P.V, { artist: e }, e.id)),
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
                            (0, L.A)(() => {
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
                Y = (0, o.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: r,
                            spoilerClassName: o,
                            linkClassName: _,
                            captionClassName: m,
                            captionSize: v,
                            variant: x = 'breakAll',
                            spoilerComponent: h,
                            ...C
                        } = e,
                        g = ((e) => {
                            var t, r, i;
                            let { separator: l, visibleArtistsCount: o, withLink: s, withComposer: a, artistIdWithoutLink: c, withContextMenu: _ } = e,
                                m = null != (t = e.artists) ? t : [],
                                f = null == (r = e.withAllArtistsTitle) || r,
                                v = null == (i = e.withCustomTooltip) || i,
                                x = (0, n.useRef)(null),
                                [h, C] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: g },
                                } = (0, u.g)(),
                                y = ((!g || 1 === m.length) && _) || !_,
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
                                })(m, { separator: l, visibleArtistsCount: h ? void 0 : o, withComposer: a, withLink: !!y && s, artistIdWithoutLink: c }),
                                E = f ? S.allArtistsTitle : '',
                                A = (0, d.c)((e) => {
                                    (C(!0), e.preventDefault());
                                });
                            return {
                                artists: m,
                                groups: S.groups,
                                hiddenArtistsCount: S.hiddenArtistsCount,
                                allArtistsTitle: E,
                                withCustomTooltip: v,
                                withContextMenu: _,
                                labelRef: x,
                                handleOnSpoilerClick: A,
                                isTooltipEnabled: !!E && v && !_ && !g,
                                title: !E || v || _ ? void 0 : E,
                            };
                        })(C),
                        y = (0, s.L)(() =>
                            g.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(h)
                                  ? h
                                  : (0, i.jsx)(R, { spoilerClassName: o, spoilerArtistsCount: g.hiddenArtistsCount, handleOnSpoilerClick: g.handleOnSpoilerClick }),
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
                                className: (0, l.$)(f().root, f()['root_variant_'.concat(x)], { [f().root_clamp]: r && r > 0, [f().ellipsis]: !r }, t),
                                title: g.title,
                                children: [
                                    g.groups.map((e) =>
                                        (0, i.jsx)(
                                            T,
                                            {
                                                group: e,
                                                linkClassName: _,
                                                captionClassName: m,
                                                captionSize: v,
                                                allArtistsTitle: g.allArtistsTitle,
                                                withCustomTooltip: g.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    y,
                                ],
                            }),
                        });
                    return g.withContextMenu ? (0, i.jsx)(W, { labelRef: g.labelRef, artists: g.artists, label: S }) : S;
                });
        },
        16704: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => p });
            var i = r(88800),
                l = r(84961),
                o = r(53548),
                n = r(2058),
                s = r(17392),
                a = r(29993),
                c = r(96817),
                d = r(52300),
                u = r(76675);
            let _ = (0, l.PA)((e) => {
                    let {
                            iconSize: t,
                            className: r,
                            size: l,
                            variant: o = 'default',
                            isPlaying: _ = !1,
                            onClick: p,
                            iconClassName: m,
                            disabled: f,
                            color: v,
                            buttonVariant: x = 'text',
                            children: h,
                            radius: C = 'round',
                            withHover: g,
                            withRipple: y = !1,
                            ariaDescribedBy: S,
                            forwardRef: E,
                            tabIndex: A,
                            ariaHidden: I,
                            shouldSendAnalyticsOnPlayClick: T,
                        } = e,
                        b = (0, u.b)(),
                        { formatMessage: O } = (0, n.A)(),
                        R = ''.concat(_ ? 'pause' : 'play').concat('filled' === o ? '_filled' : ''),
                        L = _ ? s.S7.PAUSE_BUTTON : s.S7.PLAY_BUTTON,
                        N = O(_ ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        P = (0, a.c)((e) => {
                            (e.stopPropagation(), e.preventDefault(), null == p || p(e), T && b(!_));
                        });
                    return (0, i.jsx)(c.$, {
                        className: r,
                        variant: x,
                        color: v,
                        radius: C,
                        size: l,
                        flexIcon: !0,
                        withRipple: y,
                        'aria-label': N,
                        onClick: P,
                        icon: (0, i.jsx)(d.I, { variant: R, size: t, className: m }),
                        disabled: f,
                        withHover: g,
                        'aria-describedby': S,
                        ref: E,
                        tabIndex: A,
                        'aria-hidden': I,
                        'data-test-id': L,
                        children: h,
                    });
                }),
                p = (0, o.forwardRef)((e, t) => (0, i.jsx)(_, { forwardRef: t, ...e }));
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
        17017: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { Z: () => i }),
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
        17610: (e, t, r) => {
            'use strict';
            r.d(t, { ZI: () => _, m_: () => u });
            var i,
                l = r(87819),
                o = r(68211),
                n = r(53548),
                s = {
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
                    4295: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'QhR4J536RmNHBB5bZYwF', text: 'Fqg1VWCJUfasVVxqICeO' };
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
                    853: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Tooltip = void 0));
                        let i = r(4377),
                            l = r(810),
                            o = r(1964),
                            n = r(2660),
                            s = r(3343),
                            a = r(1229);
                        t.Tooltip = (e) => {
                            let { enableAriaDescribedby: t = !1, text: r, children: c, referenceRef: d, ...u } = e,
                                [_, p] = Array.isArray(c) ? c : [c],
                                m = (0, a.useTooltip)(u),
                                f = (0, l.useId)(),
                                v = (0, l.useId)(),
                                x = (0, l.useId)(),
                                h = (0, o.useMergeRefs)([m.refs.setReference, d]);
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, l.cloneElement)(_, {
                                        ref: h,
                                        ...(t ? { 'aria-describedby': f } : {}),
                                        ...m.getReferenceProps(),
                                        ...(0, n.getDataAttrFromProps)(u),
                                        key: v,
                                    }),
                                    m.context.open
                                        ? (0, l.cloneElement)(null != p ? p : (0, i.jsx)(s.TooltipContent, {}), {
                                              ref: m.refs.setFloating,
                                              style: { ...m.floatingStyles, visibility: m.referenceHidden ? 'hidden' : 'visible' },
                                              text: r,
                                              arrow: m.arrow,
                                              ...(t ? { id: f } : {}),
                                              ...m.getFloatingProps(),
                                              key: x,
                                          })
                                        : null,
                                ],
                            });
                        };
                    },
                    3343: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.TooltipContent = t.TooltipContentComponent = void 0));
                        let l = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = r(1964),
                            a = r(3412),
                            c = i(r(4295));
                        ((t.TooltipContentComponent = (e) => {
                            let { className: t, children: r, arrow: i, rootNode: d, forwardRef: u, text: _, ...p } = e;
                            return (0, l.jsx)(s.FloatingPortal, {
                                root: d,
                                children: (0, l.jsxs)('div', {
                                    className: (0, o.clsx)(c.default.root, t),
                                    ref: u,
                                    ...p,
                                    children: [
                                        (0, n.isValidElement)(i) && i,
                                        (0, l.jsx)(a.Caption, {
                                            variant: 'div',
                                            type: 'text',
                                            size: 's',
                                            weight: 'medium',
                                            className: c.default.text,
                                            children: null != r ? r : _,
                                        }),
                                    ],
                                }),
                            });
                        }),
                            (t.TooltipContent = (0, n.forwardRef)((e, r) => (0, l.jsx)(t.TooltipContentComponent, { forwardRef: r, ...e }))));
                    },
                    1229: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useTooltip = void 0));
                        let i = r(4377),
                            l = r(810),
                            o = r(1964),
                            n = { delay: { open: 200, close: 0 } };
                        t.useTooltip = function (e) {
                            let {
                                    initialOpen: t = !1,
                                    placement: r = 'top',
                                    open: s,
                                    onOpenChange: a,
                                    isHoverEnabled: c = !0,
                                    isFocusEnabled: d = !0,
                                    offsetOptions: u,
                                    flipOptions: _ = {},
                                    shiftOptions: p = {},
                                    hoverSettings: m = n,
                                    enabled: f = !0,
                                    arrowProps: v,
                                } = e,
                                [x, h] = (0, l.useState)(t),
                                C = (0, l.useRef)(null),
                                g = null != s ? s : x,
                                y = null != a ? a : h,
                                S = (0, o.useFloating)({
                                    placement: r,
                                    open: g,
                                    onOpenChange: y,
                                    whileElementsMounted: o.autoUpdate,
                                    middleware: [
                                        (0, o.offset)(u),
                                        (0, o.flip)({ crossAxis: r.includes('-'), ..._ }),
                                        (0, o.shift)(p),
                                        (0, o.arrow)({ element: C }),
                                        (0, o.hide)(),
                                    ],
                                }),
                                E = S.context,
                                A = (0, o.useHover)(E, { move: !1, enabled: c && f, ...m }),
                                I = (0, o.useFocus)(E, { enabled: d && f }),
                                T = (0, o.useDismiss)(E),
                                b = (0, o.useRole)(E, { role: 'tooltip' }),
                                O = (0, o.useInteractions)([A, I, T, b]),
                                R = (0, l.useMemo)(() => {
                                    if (v) return (0, i.jsx)(o.FloatingArrow, { ref: C, context: S.context, ...v });
                                }, [v, S.context]);
                            return (0, l.useMemo)(() => {
                                var e;
                                return { open: g, setOpen: y, arrow: R, referenceHidden: null == (e = S.middlewareData.hide) ? void 0 : e.referenceHidden, ...O, ...S };
                            }, [g, y, R, O, S]);
                        };
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
                    1964: (e) => {
                        e.exports = l;
                    },
                    2660: (e) => {
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(n, 2));
                    },
                },
                a = {};
            function c(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
                return (s[e].call(r.exports, r, r.exports, c), r.exports);
            }
            ((c.d = (e, t) => {
                for (var r in t) c.o(t, r) && !c.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (c.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var d = {};
            (() => {
                (Object.defineProperty(d, 'X$', { value: !0 }), (d._v = d.u = void 0));
                var e = c(853);
                Object.defineProperty(d, 'u', {
                    enumerable: !0,
                    get: function () {
                        return e.Tooltip;
                    },
                });
                var t = c(3343);
                Object.defineProperty(d, '_v', {
                    enumerable: !0,
                    get: function () {
                        return t.TooltipContent;
                    },
                });
            })();
            var u = d.u,
                _ = d._v;
            d.X$;
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
        19840: (e, t, r) => {
            'use strict';
            (r.d(t, { G: () => l }), r(46606));
            var i = r(91136);
            class l extends i.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
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
                                v = a || i;
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
                                            v && (0, l.jsxs)('div', { className: s.default.bottom_right, children: [a, i] }),
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
                                    srTitle: v,
                                    wrapperClassName: x,
                                    ...h
                                } = e;
                                return (0, l.jsxs)('div', {
                                    className: (0, n.clsx)(c.default.root, i),
                                    ref: t,
                                    ...h,
                                    children: [
                                        (0, l.jsx)(a.SROnly, { children: null != v ? v : u }),
                                        (0, l.jsx)('div', { className: c.default.viewContainer, children: r }),
                                        (0, l.jsxs)('div', {
                                            className: (0, n.clsx)(c.default.wrapper, x),
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
        32596: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => N });
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
                _ = r(78793),
                p = r(92716),
                m = r(99984),
                f = r(90780),
                v = r(65523),
                x = r(14518),
                h = r(44230),
                C = r(4370),
                g = r(72288),
                y = r(97956),
                S = r(56248),
                E = r(90688),
                A = r(78940);
            let I = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var T = r(96856),
                b = r.n(T);
            let O = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: o } = e,
                    { slam: n } = (0, g.g)(),
                    { contentRef: s } = (0, h.g)(),
                    d = (0, A.Z)(C.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(b().root, t),
                    children: [
                        r &&
                            (0, i.jsx)(S.L, {
                                withBackwardFallback: '/',
                                className: (0, l.$)(b().navigation, { [b().navigation_desktop]: !s }),
                                withForwardControl: !1,
                                onBackwardClick: o,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, l.$)(b().content, { [b().content_shrink]: !r }),
                            children: [
                                (0, i.jsx)(E._V, { className: b().image, src: I.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: b().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: b().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: b().text,
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
                                        className: b().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: b().buttonText,
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
            var R = r(9184),
                L = r.n(R);
            let N = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: o } = e,
                    { formatMessage: E } = (0, s.A)(),
                    A = (0, n.useContext)(g.P),
                    I = null == A ? void 0 : A.experiments.checkExperiment(y.z.WebNextUnstableMusicScreen, 'on'),
                    T = E(I ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, f.st)(),
                        { hash: r } = (0, f.gf)(),
                        { pageId: i } = (0, x.$)(),
                        l = (0, v.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !r || !i) return;
                        let o = (0, _.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: r,
                                pageId: i,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: l,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        o && (0, m.z5)(t.evgenInstance, o);
                    }, [t, e, r, i, l]);
                })(T);
                let { sendRefreshEvent: b } = (function () {
                        let e = (0, f.st)(),
                            { hash: t } = (0, f.gf)(),
                            { pageId: r } = (0, x.$)(),
                            i = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let l = (0, _.F)({
                                    params: {
                                        actionType: p.ActionType.Refresh,
                                        userInteractionType: p.UserInteractionType.Tap,
                                        entityType: p.EntityTypes.Error,
                                        entityId: p.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: r,
                                        pageStyle: p.PageStyles.Fullscreen,
                                        pagePlacement: p.PagePlacements.Fullscreen,
                                        mainObjectType: p.DomainObjectType.NonApplicable,
                                        mainObjectId: p.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                l && (0, m.bv)(e.evgenInstance, l);
                            }, [e, t, r, i]),
                        };
                    })(),
                    R = (0, n.useCallback)(() => {
                        (b(), (window.location.href = C.Z.main.href));
                    }, [b]),
                    { contentRef: N } = (0, h.g)();
                return I
                    ? (0, i.jsx)(O, { className: t, withBackwardControl: r, onBack: o })
                    : (0, i.jsxs)('div', {
                          className: (0, l.$)(L().root, t),
                          children: [
                              r &&
                                  (0, i.jsx)(S.L, {
                                      withBackwardFallback: '/',
                                      className: (0, l.$)(L().navigation, { [L().navigation_desktop]: !N }),
                                      withForwardControl: !1,
                                      onBackwardClick: o,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, l.$)(L().content, { [L().content_shrink]: !r }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: L().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, l.$)(L().title, L().important), variant: 'h3', size: 'xs', children: T }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, l.$)(L().text, L().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: R,
                                          className: L().button,
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
        39079: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => s });
            var i = r(29993),
                l = r(7123),
                o = r(72288),
                n = r(9630);
            let s = (e) => {
                let { playContextParams: t, entityId: r, playbackId: s, sonataState: a } = e,
                    c = (0, n.e)(),
                    { sonataState: d } = (0, o.g)(),
                    u = a || d,
                    _ = !1,
                    p = !1,
                    { contextData: m } = t,
                    {
                        type: f,
                        meta: { id: v },
                    } = m,
                    x = u.contextId === String(v) && f === u.contextType;
                if (r) {
                    var h;
                    _ = r === (null == (h = u.entityMeta) ? void 0 : h.idWithContext);
                } else _ = x;
                return (
                    (p = _ && u.status === l.MT.PLAYING),
                    {
                        isPlaying: p,
                        isCurrent: _,
                        togglePlay: (0, i.c)(() => {
                            var e;
                            if (!c) return Promise.resolve();
                            let i = null == (e = u.entityMeta) ? void 0 : e.idWithContext;
                            return void 0 !== r && r === i ? c.togglePause(s) : c.playContext(t, s);
                        }),
                        restartPlay: (0, i.c)(() => {
                            null == c || c.setProgress(0, s);
                        }),
                    }
                );
            };
        },
        40634: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => C });
            var i = r(88800),
                l = r(65724),
                o = r(84961),
                n = r(53548),
                s = r(92716),
                a = r(17392),
                c = r(29993),
                d = r(90688),
                u = r(19934),
                _ = r(7555),
                p = r(29504),
                m = r(96527),
                f = r(78940),
                v = r(72288),
                x = r(80932),
                h = r.n(x);
            let C = (0, o.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: o } = (0, v.g)(),
                    x = (0, f.Z)(t.url),
                    g = (0, m.N)(),
                    y = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(C, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    S = (0, c.c)((e) => {
                        (o.modal.isOpened && o.modal.close(), g({ to: s.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, l.$)(h().root, r),
                            onClick: S,
                            'data-test-id': a.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(_.t, {
                                    radius: 'round',
                                    className: h().cover,
                                    children: (0, i.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: h().image }),
                                }),
                                (0, i.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        y,
                    ],
                });
            });
        },
        41592: (e, t, r) => {
            (Promise.resolve().then(r.bind(r, 57328)), Promise.resolve().then(r.bind(r, 70938)));
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
            r.d(t, { _: () => v });
            var i = r(78793),
                l = r(92716),
                o = r(54577),
                n = r(90780),
                s = r(29993),
                a = r(37436),
                c = r(12816),
                d = r(34500),
                u = r(46166),
                _ = r(14518),
                p = r(73442),
                m = r(91248),
                f = r(65523);
            let v = (e) => {
                let t = (0, n.st)(),
                    { hash: r } = (0, n.gf)(),
                    { pageId: v } = (0, _.$)(),
                    { tabId: x, tabPos: h, isTabSelectedByDefault: C } = (0, m.R)(),
                    { skeleton: g } = (0, p.b)(),
                    { blockType: y, blockId: S, blockPosX: E, blockPosY: A, mainObjectType: I, mainObjectId: T } = (0, d.N)(),
                    { objectsCount: b, objectType: O, objectId: R, objectPosX: L, objectPosY: N } = (0, u.J)(),
                    P = (0, f.U)();
                return (0, s.c)(() => {
                    if (!t || !v || !c.xK.includes(v)) return;
                    let n = {
                        hash: r,
                        pageId: v,
                        entityType: y,
                        entityId: S,
                        entityPosX: E,
                        entityPosY: A,
                        objectId: R,
                        objectType: O,
                        objectPosX: L,
                        objectPosY: N,
                        objectsCount: b,
                        from: a.W[v],
                        to: l.AppScreen.VideoScreen,
                    };
                    (c.qG.includes(v) && ((n.tabId = x), (n.tabPos = h), (n.isTabSelectedByDefault = C)),
                        g && (n.skeletonId = g),
                        I && (n.mainObjectType = I),
                        T && (n.mainObjectId = T));
                    let s = (0, i.F)({ params: n, logger: P, context: 'useSendEventOnClipNavigated' });
                    s && e && (0, o.QS)(t.evgenInstance, s);
                });
            };
        },
        46606: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { X: () => i }),
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
        48987: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => i });
            let i = (e) => {
                let t = Math.round(e);
                return { hours: Math.floor(t / 3600), minutes: Math.floor((t % 3600) / 60), seconds: t % 60 };
            };
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
        55693: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => n });
            var i = r(53548),
                l = r(63765),
                o = r(91087);
            let n = () => {
                let { sendSearchFeedback: e, id: t, type: r, blockPosition: n, position: s } = (0, i.useContext)(o.N) || {};
                if (void 0 === t || void 0 === r || void 0 === n || void 0 === s) return {};
                let a = null == e ? void 0 : e.bind(null, { feedbackType: l.n.LIKE, id: t, type: r, blockPosition: n, position: s });
                return {
                    sendLikeSearchFeedback: a,
                    sendNavigateSearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: l.n.NAVIGATE, id: t, type: r, blockPosition: n, position: s }),
                    sendPlaySearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: l.n.PLAY, id: t, type: r, blockPosition: n, position: s }),
                };
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
        58217: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => u });
            var i = r(53548),
                l = r(54020),
                o = r(29993),
                n = r(4086),
                s = r(41928),
                a = r(72288),
                c = r(85587),
                d = r(15253);
            let u = (e) => {
                let {
                        entity: t,
                        entityType: r,
                        getStorageKey: u,
                        callback: _,
                        onAfterHandled: p,
                        onBeforeHandle: m,
                        onReject: f,
                        modalBehavior: v,
                        preventDefaultWhenSafe: x,
                    } = e,
                    {
                        disclaimerModalState: h,
                        modals: { disclaimerModal: C },
                    } = (0, a.g)(),
                    g = (0, i.useRef)(String((0, l.A)())),
                    y = (0, i.useRef)(!1),
                    S = (0, i.useRef)(!1),
                    E = (0, i.useRef)(0),
                    A = (0, i.useRef)(!0),
                    I = (0, s.N)().get(n.U2),
                    T = (0, o.c)((e) => {
                        (x && (null == e || e.preventDefault()), _ && _(e), p && p());
                    });
                return (
                    (0, i.useEffect)(() => {
                        h.isUnsafeDisclaimerConfirmed && h.id === g.current && !y.current && (T(), (y.current = !0));
                    }, [h.id, h.isUnsafeDisclaimerConfirmed, T]),
                    (0, i.useEffect)(() => {
                        h.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && h.setModalData(t.resolvedModalData);
                    }, [h, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, i.useEffect)(
                        () => () => {
                            A.current = !1;
                        },
                        [],
                    ),
                    (0, o.c)(async (e) => {
                        if (!S.current) {
                            S.current = !0;
                            try {
                                if ((null == m || m(e), t)) {
                                    var i, l, o;
                                    let n = t.getDisclaimerEntityRef(r),
                                        s = null != (i = null == u ? void 0 : u(t, n)) ? i : ''.concat(n.entityType, '_').concat(n.entityId),
                                        a = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = I.get(d.c.ExEx);
                                        if (null == t ? void 0 : t.includes(s)) return void T(e);
                                    }
                                    if (a) {
                                        (null == e || e.preventDefault(),
                                            t.isUnsafeLegal && h.setType(c.Z.UNSAFE),
                                            h.setDisclaimerRejectHandler(null != f ? f : null),
                                            h.setId(g.current),
                                            h.setEntityKey(s),
                                            h.setCurrentEntityRef(n.entityType, n.entityId),
                                            h.setShouldHistoryBack(!!(null == v ? void 0 : v.shouldHistoryBack)),
                                            h.setShouldCloseModalOnOutsidePress(null == (l = null == v ? void 0 : v.closeOnOutside) || l),
                                            h.setShouldCloseModalOnEscape(null == (o = null == v ? void 0 : v.closeOnEscape) || o),
                                            (E.current += 1));
                                        let r = E.current,
                                            i = await t.getModalDisclaimerData();
                                        if (E.current !== r || !1 === A.current) return;
                                        (h.setModalData(null != i ? i : null), (y.current = !1), C.open());
                                        return;
                                    }
                                    (x && (null == e || e.preventDefault()), T(e));
                                    return;
                                }
                                (x && (null == e || e.preventDefault()), T(e));
                            } finally {
                                S.current = !1;
                            }
                        }
                    })
                );
            };
        },
        59844: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            var i = r(88800),
                l = r(53548),
                o = r(90334);
            let n = (e) => {
                let { pageId: t, pageEntityId: r, displayReasonId: n, pageStyle: s, pagePlacement: a, children: c } = e,
                    d = (0, l.useMemo)(() => ({ pageId: t, pageEntityId: r, displayReasonId: n, pageStyle: s, pagePlacement: a }), [t, r, n, s, a]);
                return (0, i.jsx)(o.r.Provider, { value: d, children: c });
            };
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
        61931: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => m });
            var i = r(78793),
                l = r(54577),
                o = r(90780),
                n = r(29993),
                s = r(12816),
                a = r(34500),
                c = r(46166),
                d = r(14518),
                u = r(73442),
                _ = r(91248),
                p = r(65523);
            let m = (e) => {
                let t = (0, o.st)(),
                    { hash: r } = (0, o.gf)(),
                    { pageId: m } = (0, d.$)(),
                    { tabId: f, tabPos: v, isTabSelectedByDefault: x } = (0, _.R)(),
                    { blockType: h, blockId: C, blockPosX: g, blockPosY: y, mainObjectType: S, mainObjectId: E } = (0, a.N)(),
                    { objectsCount: A, objectType: I, objectId: T, objectPosX: b, objectPosY: O } = (0, c.J)(),
                    R = (0, p.U)(),
                    { skeleton: L } = (0, u.b)();
                return (0, n.c)((o) => {
                    if (!t || !m || !s.xK.includes(m)) return;
                    let n = {
                        hash: r,
                        pageId: m,
                        entityType: h,
                        entityId: C,
                        entityPosX: g,
                        entityPosY: y,
                        objectsCount: A,
                        viewUuid: e,
                        objectType: I,
                        objectId: T,
                        objectPosX: b,
                        objectPosY: O,
                    };
                    (s.qG.includes(m) && ((n.tabId = f), (n.tabPos = v), (n.isTabSelectedByDefault = x)),
                        L && (n.skeletonId = L),
                        S && (n.mainObjectType = S),
                        E && (n.mainObjectId = E));
                    let a = (0, i.F)({ params: n, logger: R, context: 'useSendEventOnClipShowedOrHidden' });
                    if (a) {
                        if (o) return void (0, l.Pf)(t.evgenInstance, a);
                        (0, l.nv)(t.evgenInstance, a);
                    }
                });
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
        63765: (e, t, r) => {
            'use strict';
            var i, l;
            (r.d(t, { n: () => l, o: () => i }),
                (function (e) {
                    ((e.ARTIST = 'artist'),
                        (e.ALBUM = 'album'),
                        (e.TRACK = 'track'),
                        (e.PLAYLIST = 'playlist'),
                        (e.USER = 'user'),
                        (e.VIDEO = 'video'),
                        (e.CLIP = 'clip'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.SEARCH_PAGE = 'search-page'));
                })(i || (i = {})),
                (function (e) {
                    ((e.PLAY = 'play'), (e.FRIDGE = 'fridge'), (e.NAVIGATE = 'navigate'), (e.LIKE = 'like'));
                })(l || (l = {})));
        },
        64284: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => i });
            var i = (function (e) {
                return (
                    (e.TRACK = 'track'),
                    (e.TRACK_LIST = 'track_list'),
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.RUP = 'rup'),
                    (e.MAIN = 'main'),
                    (e.RADIO = 'radio'),
                    (e.DISCOGRAPHY = 'discography'),
                    (e.CAROUSEL = 'carousel'),
                    (e.ALBUMS = 'albums'),
                    (e.COMPILATIONS = 'compilations'),
                    (e.PLAYLISTS = 'playlists'),
                    (e.ARTISTS = 'artists'),
                    (e.CLIPS = 'clips'),
                    (e.BLOCK = 'block'),
                    (e.DISCOVERY = 'discovery'),
                    (e.SIMILAR = 'similar'),
                    (e.SEARCH = 'search'),
                    (e.HISTORY = 'history'),
                    (e.DEFAULT = 'default'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.FILTERED = 'filtered'),
                    (e.SUGGESTED = 'suggested'),
                    (e.TRAILER = 'trailer'),
                    (e.DONATY = 'donaty'),
                    (e.BEST_RESULTS = 'best_results'),
                    (e.OPEN_BEST_RESULTS = 'open_best_results'),
                    (e.WHEEL = 'wheel'),
                    (e.Q2V = 'q2v'),
                    e
                );
            })({});
        },
        65523: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => s });
            var i = r(4086),
                l = r(41928),
                o = r(44084);
            let n = new WeakMap(),
                s = () =>
                    ((e) => {
                        if (e instanceof o.r) return e;
                        let t = n.get(e);
                        if (t) return t;
                        let r = {
                            log: (t, r) => e.info(t, r),
                            trace: (t, r) => e.trace(t, r),
                            debug: (t, r) => e.debug(t, r),
                            info: (t, r) => e.info(t, r),
                            warn: (t, r) => e.warn(t, r),
                            error: (t, r) => e.error(t, r),
                            fatal: (t, r) => e.fatal(t, r),
                            child: (t) => e.child(t),
                        };
                        return (n.set(e, r), r);
                    })((0, l.N)().get(i.Zf));
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
            r.d(t, { F: () => U });
            var i = r(88800),
                l = r(65724),
                o = r(55482),
                n = r(84961),
                s = r(53548),
                a = r(2058),
                c = r(35412),
                d = r(17392),
                u = r(18593),
                _ = r(29993),
                p = r(29832),
                m = r(90688),
                f = r(7555),
                v = r(29504),
                x = r(13946),
                h = r(44599),
                C = r(61931),
                g = r(16717),
                y = r(44318),
                S = r(64284),
                E = r(12816),
                A = r(28830),
                I = r(84384),
                T = r(54965),
                b = r(97361),
                O = r(99313),
                R = r(20585),
                L = r(39079),
                N = r(72288),
                P = r(90224),
                j = r(91292),
                k = r(16704),
                w = r(8299),
                M = r(90865),
                D = r.n(M);
            let U = (0, n.PA)((e) => {
                var t;
                let {
                        titleClassName: r,
                        artistLinkClassName: n,
                        clip: M,
                        withVideo: U = !0,
                        artistIdWithoutLink: B,
                        viewUuid: H,
                        shouldOpenModalOnCardClick: W = !0,
                    } = e,
                    { fullscreenVideoPlayer: Y } = (0, N.g)(),
                    { formatMessage: F } = (0, a.A)(),
                    z = (0, y.C)(),
                    { from: K } = (0, I.f)({ pageId: E._Q.VIDEO_PLAYER, contextId: Y.state.contextId, contextType: u.K.Various, blockId: S.U.CLIPS }),
                    V = (0, b.P)(null != (t = M.duration) ? t : 0),
                    Q = (0, C.M)(H),
                    X = (0, h._)(H),
                    { ref: G, intersectionPropertyId: Z } = (0, A.n)({ callback: Q }),
                    J = (0, s.useRef)(null),
                    $ = U && M.previewUrl,
                    q = (0, _.c)(() => {
                        J.current && ((J.current.currentTime = 0), J.current.play());
                    }),
                    ee = (0, s.useMemo)(() => (0, o.A)(q, 500), [q]),
                    et = (0, _.c)(() => {
                        var e;
                        null == (e = J.current) || e.pause();
                    }),
                    er = (0, s.useMemo)(() => Y.ids.indexOf(M.clipId), [Y, M.clipId]),
                    { isPlaying: ei, togglePlay: el } = (0, L.D)({
                        playContextParams: {
                            contextData: { type: u.K.Various, meta: { id: O.H.VARIOUS_CLIP_CONTEXT }, from: K },
                            queueParams: { index: er },
                            entitiesData: Y.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(M.clipId),
                        sonataState: Y.state,
                        playbackId: R.V.CLIP,
                    }),
                    eo = W ? M.url : (0, g.J)(Y.ids, er),
                    en = (0, _.c)(() => {
                        W ? (z([M.clipId]), X()) : ei || el();
                    }),
                    es = (0, w.X)({ clip: M, callback: en }),
                    ea = F({ id: 'entity-names.clip-name' }, { clipName: M.title }),
                    ec = (0, s.useMemo)(
                        () =>
                            M.isAvailable
                                ? (0, i.jsxs)(f.t, {
                                      radius: 'm',
                                      className: (0, l.$)(D().view, D().cover),
                                      onMouseEnter: ee,
                                      onMouseLeave: et,
                                      onClick: es,
                                      children: [
                                          $ &&
                                              (0, i.jsx)('video', {
                                                  className: D().media,
                                                  ref: J,
                                                  poster: M.thumbnail && (0, c.oZ)(M.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, i.jsx)('source', { src: M.previewUrl, type: 'video/mp4' }),
                                              }),
                                          M.thumbnail &&
                                              (0, i.jsx)(m._V, {
                                                  className: D().image,
                                                  'aria-hidden': !0,
                                                  src: M.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: c.oZ,
                                              }),
                                          void 0 !== M.duration &&
                                              (0, i.jsx)(v.HL, {
                                                  role: 'text',
                                                  'aria-label': V,
                                                  variant: 'span',
                                                  className: D().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: (0, T.E)(M.duration, M.duration) }),
                                              }),
                                          (0, i.jsx)(k.D, { variant: 'filled', className: D().playButton, onClick: es, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, i.jsx)(f.t, {
                                      radius: 'm',
                                      className: D().unavailableCover,
                                      children: (0, i.jsx)(m.Ab, { className: D().image, iconVariant: 'unavailable', 'data-test-id': d.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [V, M.isAvailable, M.thumbnail, M.previewUrl, M.duration, ee, et, es, $],
                    ),
                    ed = (0, s.useMemo)(
                        () =>
                            M.hasArtists
                                ? (0, i.jsx)(
                                      x.i,
                                      { linkClassName: (0, l.$)(D().artistLink, n), artists: M.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: B },
                                      M.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [B, M, n],
                    );
                return (0, i.jsx)(p.MN, {
                    ref: G,
                    className: D().root,
                    explicitMarkComponent:
                        M.explicitDisclaimer &&
                        (0, i.jsx)(P.N, { getDescriptionTexts: M.getDescriptionTexts, variant: M.explicitDisclaimer, size: 'xxs' }, M.getKey('ExplicitMarkIcon')),
                    'aria-label': ea,
                    srTitle: (0, i.jsx)(j.N, { className: D().srTitleLink, href: eo, onClick: es, children: ea }),
                    title: (0, i.jsxs)(
                        v.HL,
                        {
                            className: (0, l.$)(D().title, r),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            'aria-hidden': !0,
                            children: [
                                (0, i.jsx)(j.N, {
                                    className: D().titleLink,
                                    href: eo,
                                    tabIndex: -1,
                                    'aria-label': ea,
                                    onClick: es,
                                    'data-test-id': d.Kq.clip.CLIP_META_TITLE,
                                    children: M.title,
                                }),
                                M.version && (0, i.jsx)(v.HL, { className: D().version, variant: 'span', children: ' '.concat(M.version) }),
                            ],
                        },
                        M.getKey('Title'),
                    ),
                    'data-intersection-property-id': Z,
                    view: ec,
                    description: ed,
                    'data-test-id': d.Kq.clip.CLIP_CARD,
                });
            });
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        70938: (e, t, r) => {
            'use strict';
            r.d(t, { CollectionClipsPage: () => Z });
            var i = r(88800),
                l = r(84961),
                o = r(53548),
                n = r(2058),
                s = r(88969),
                a = r(58390),
                c = r(17392),
                d = r(44236),
                u = r(29504),
                _ = r(32596),
                p = r(69630),
                m = r(38501),
                f = r(12816),
                v = r(4476),
                x = r(59844),
                h = r(46422),
                C = r(44230),
                g = r(37670),
                y = r(4370),
                S = r(72288),
                E = r(86790),
                A = r(60266),
                I = r(93317),
                T = r(68142),
                b = r.n(T),
                O = r(65724),
                R = r(61013),
                L = r(29993),
                N = r(50408),
                P = r(69323),
                j = r(77605),
                k = r(10270);
            let w = () => (window.innerWidth > 1920 ? 4 : window.innerWidth > 1200 ? 3 : 2);
            var M = r(79939),
                D = r(86535),
                U = r(82204),
                B = r(56265),
                H = r.n(B);
            let W = (0, l.PA)((e) => {
                var t;
                let { className: r } = e,
                    { formatMessage: l } = (0, n.A)(),
                    { clipsWillLike: s } = (0, S.g)().collection.clips;
                return (
                    s.isNeededToLoad && (0, o.use)(s.getData()),
                    (0, i.jsx)(U.F, {
                        blockId: D.h.CLIPS_CAROUSEL,
                        blockType: D.h.CLIPS_CAROUSEL,
                        blockPosX: 1,
                        blockPosY: 7,
                        objectsCount: null == (t = s.clips) ? void 0 : t.length,
                        children: (0, i.jsx)(M.K, {
                            className: (0, O.$)(H().root, r),
                            containerClassName: H().carouselBlock,
                            carouselItemClassName: (0, O.$)(H().carouselItem, H().important),
                            headerClassName: (0, O.$)(H().carouselBlockHeader, H().carouselBlock),
                            isShimmerVisible: s.isLoading,
                            isShimmerActive: !0,
                            title: l({ id: 'entity-names.clips-will-like' }),
                            clips: s.clips || [],
                            headingVariant: 'h2',
                            'data-test-id': c.Kq.clip.CLIPS_CAROUSEL,
                        }),
                    })
                );
            });
            var Y = r(52300),
                F = r(71811),
                z = r.n(F);
            let K = (0, l.PA)(() => {
                let {
                        collection: {
                            clips: { clipsWillLike: e },
                        },
                    } = (0, S.g)(),
                    t = !e.isEmpty && !e.isRejected;
                return (0, i.jsxs)('div', {
                    className: z().root,
                    children: [
                        (0, i.jsxs)('div', {
                            className: z().content,
                            children: [
                                (0, i.jsx)(Y.I, { className: z().icon, size: 'xl', variant: 'clip' }),
                                (0, i.jsx)(u.DZ, {
                                    className: z().title,
                                    variant: 'h3',
                                    size: 'xs',
                                    'data-test-id': c.e8.landing.COLLECTION_CLIPS_BLOCK_LIKED_EMPTY_BLOCK_TITLE,
                                    children: (0, i.jsx)(s.A, { id: 'error-messages.empty-collection-clips-title' }),
                                }),
                                (0, i.jsx)(u.HL, {
                                    className: z().text,
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'l',
                                    weight: 'normal',
                                    'data-test-id': c.e8.landing.COLLECTION_CLIPS_BLOCK_LIKED_EMPTY_BLOCK_TEXT,
                                    children: (0, i.jsx)(s.A, { id: 'error-messages.empty-collection-clips-text' }),
                                }),
                            ],
                        }),
                        t && (0, i.jsx)(W, {}),
                    ],
                });
            });
            var V = r(23471),
                Q = r.n(V);
            let X = (0, l.PA)((e) => {
                    let { virtualItem: t, resizeObserver: r, columns: l } = e,
                        [s, a] = (0, N.d)(),
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
                            className: Q().virtualItem,
                            style: { transform: 'translateY('.concat(t.start, 'px)') },
                            children: [
                                (0, i.jsx)('div', {
                                    style: { gridTemplateColumns: 'repeat('.concat(l, ', minmax(0, 1fr))') },
                                    className: (0, O.$)(Q().virtualItemRow, {
                                        [Q().virtualItemRow_withTopBorder]: t.index === _ + 1 && p,
                                        [Q().virtualItemRow_withBottomBorder]: t.index === _ && p,
                                    }),
                                    children:
                                        null == u
                                            ? void 0
                                            : u.map((e, t) => {
                                                  if (!e) {
                                                      let e = c({ id: 'loading-messages.entity-is-loading' }, { entityName: c({ id: 'entity-names.clip' }) });
                                                      return (0, i.jsx)(j.k, { 'aria-label': e }, t);
                                                  }
                                                  return (0, i.jsx)(P.F, { clip: e }, e.clipId);
                                              }),
                                }),
                                t.index === _ && p && (0, i.jsx)(W, { className: Q().clipsWillLike }),
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
                        [d, u] = (0, N.d)(),
                        p = l.pager && l.pager.total <= s ? 0 : 1,
                        { virtualizer: m, resizeObserver: f } = (0, k.r)({
                            gap: 24,
                            count: l.pager ? Math.ceil((null == (t = l.pager) ? void 0 : t.total) / s) : 5,
                            getEstimateSize: (e) => (e === p ? 800 : 400),
                            containerRef: d,
                        }),
                        v = (0, L.c)((e) => {
                            n.account.data.uid && l.getData({ userId: n.account.data.uid, page: e, pageSize: 20 });
                        }),
                        x = m.getTotalSize(),
                        h = m.getVirtualItems(),
                        C = (0, L.c)((e) => {
                            let t = Math.floor((e.startIndex * s) / 20),
                                r = Math.ceil((e.endIndex * s) / 20);
                            for (let e = t; e <= r; e++) v(e);
                        });
                    ((0, o.useEffect)(() => {
                        l.isNeededToLoad && (null == r || r.scrollTo({ top: 0, behavior: 'instant' }), l.setInitialShimmer(), v());
                    }, [l, l.isNeededToLoad, v, r]),
                        (0, o.useEffect)(() => {
                            !m.isScrolling && m.range && C(m.range);
                        }, [C, m.range, m.isScrolling]));
                    let g = (0, R.A)(() => {
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
                        ? (0, i.jsx)(K, {})
                        : l.isRejected
                          ? (0, i.jsx)(_.SomethingWentWrong, {})
                          : (0, i.jsx)('div', {
                                className: Q().virtualScroll,
                                style: { height: ''.concat(x, 'px') },
                                ref: u,
                                'data-test-id': c.Kq.clip.COLLECTION_LIKED_CLIPS_BLOCK,
                                children: h.map((e) => (0, i.jsx)(X, { virtualItem: e, resizeObserver: f, columns: s }, e.index)),
                            });
                }),
                Z = (0, l.PA)(() => {
                    let {
                            collection: { clips: e },
                        } = (0, S.g)(),
                        { formatMessage: t } = (0, n.A)(),
                        r = (0, h.W)(),
                        l = (0, m.d)(),
                        { contentScrollRef: T, setContentScrollRef: O } = (0, C.g)();
                    return (!l && e.isLoaded && (0, a.redirect)(y.Z.collection.href),
                    (0, g.J)(e.isResolved),
                    (0, o.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    e.isRejected)
                        ? (0, i.jsx)(_.SomethingWentWrong, {})
                        : (0, i.jsx)(x.n, {
                              pageId: f._Q.OWN_CLIPS,
                              children: (0, i.jsx)(v.j, {
                                  children: (0, i.jsxs)(p.h, {
                                      scrollElement: T,
                                      outerTitle: t({ id: 'entity-names.clips' }),
                                      children: [
                                          (0, i.jsx)(I.Y, {
                                              variant: I.V.TEXT,
                                              withForwardControl: !1,
                                              withBackwardControl: r.canBack,
                                              children: (0, i.jsx)(u.DZ, {
                                                  id: 'collection-artists-header',
                                                  variant: 'h1',
                                                  weight: 'bold',
                                                  size: 'xl',
                                                  lineClamp: 1,
                                                  children: (0, i.jsx)(s.A, { id: 'entity-names.clips' }),
                                              }),
                                          }),
                                          (0, i.jsxs)(d.C, {
                                              scrollableContainerRef: O,
                                              className: b().root,
                                              containerClassName: b().content,
                                              scrollContentClassName: b().scrollContent,
                                              'data-test-id': c.Xk.collection.COLLECTION_CLIPS_PAGE,
                                              children: [
                                                  (0, i.jsx)(G, { contentScrollRef: T }),
                                                  (0, i.jsx)(A.A, { children: (0, i.jsx)(E.w, { className: b().footer }) }),
                                              ],
                                          }),
                                      ],
                                  }),
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
        76675: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => h });
            var i = r(53548),
                l = r(78793),
                o = r(54577),
                n = r(90780),
                s = r(79070),
                a = r(65523),
                c = r(42139),
                d = r(12816),
                u = r(34500),
                _ = r(57649),
                p = r(46166),
                m = r(14518),
                f = r(73442),
                v = r(91248);
            let x = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.CONCERTS,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                    d._Q.COLLECTION_VIBE_ROOMS,
                    d._Q.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    d._Q.MULTIVIBE_ACTION_SCREEN,
                    d._Q.MULTIVIBE_UNIFIED_SCREEN,
                ],
                h = () => {
                    let e = (0, n.st)(),
                        t = (0, a.U)(),
                        { hash: r } = (0, n.gf)(),
                        { pageId: h } = (0, m.$)(),
                        { tabId: C, tabPos: g, isTabSelectedByDefault: y } = (0, v.R)(),
                        { offsetBlockPosY: S } = (0, _.u)(),
                        { blockId: E, blockType: A, blockPosX: I, blockPosY: T, mainObjectId: b, mainObjectType: O } = (0, u.N)(),
                        { objectId: R, objectPosX: L, objectPosY: N, objectType: P, objectsCount: j } = (0, p.J)(),
                        { skeleton: k } = (0, f.b)(),
                        w = (0, s.L)(() => (void 0 !== S && void 0 !== T ? S + T : T));
                    return (0, i.useCallback)(
                        (i, n) => {
                            if (!e || !h || !d.xK.includes(h) || !i || !x.includes(h)) return;
                            let s = c.F[h];
                            if (!s) return;
                            let a = {
                                hash: r,
                                pageId: s,
                                entityType: A,
                                entityId: E,
                                entityPosX: I,
                                entityPosY: w,
                                objectId: null != n ? n : R,
                                objectType: P,
                                objectPosX: L,
                                objectPosY: N,
                                objectsCount: j,
                            };
                            (d.qG.includes(h) && ((a.tabId = C), (a.tabPos = g), (a.isTabSelectedByDefault = y)),
                                k && (a.skeletonId = k),
                                b && O && ((a.mainObjectType = O), (a.mainObjectId = b)));
                            let u = (0, l.F)({ params: a, logger: t, context: 'useSendEventOnBlockStarted' });
                            u && (0, o.er)(e.evgenInstance, u);
                        },
                        [e, h, r, A, E, I, w, R, P, L, N, j, k, b, O, t, C, g, y],
                    );
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
        77948: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => n });
            var i = r(88800),
                l = r(53548),
                o = r(90134);
            let n = (e) => {
                let { objectId: t, objectPosX: r, objectPosY: n, objectPos: s, objectType: a, objectsCount: c, mainObjectId: d, mainObjectType: u, children: _ } = e,
                    p = (0, l.useMemo)(
                        () => ({ objectId: t, objectPosX: r, objectPosY: n, objectPos: s, objectType: a, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, r, n, s, a, c, d, u],
                    );
                return (0, i.jsx)(o.l.Provider, { value: p, children: _ });
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
                            description: v,
                            containerClassName: x,
                            headerClassName: h,
                            viewAllActionLink: C,
                            artistIdWithoutLink: g,
                            withVideo: y = !0,
                            clips: S,
                            headingVariant: E,
                            className: A,
                            shouldOpenModalOnCardClick: I = !0,
                            itemCounter: T,
                            ...b
                        } = e,
                        O = (0, n.useId)(),
                        R = (0, n.useRef)(null);
                    return (0, i.jsxs)('section', {
                        className: (0, l.$)(u().root, A),
                        ref: d,
                        ...(0, s.OZ)(b),
                        children: [
                            (0, i.jsx)(a.T, {
                                className: h,
                                labeledForId: O,
                                title: f,
                                description: v,
                                viewAllActionLink: C,
                                controls: (0, i.jsx)(c.X, { className: u().controls, carouselRef: R }),
                                headingVariant: E,
                                withDescription: !!v,
                            }),
                            (0, i.jsx)(_.t, {
                                clipCardTitleClassName: t,
                                clipCardArtistLinkClassName: r,
                                carouselItemClassName: o,
                                isShimmerVisible: p,
                                isShimmerActive: m,
                                containerClassName: x,
                                artistIdWithoutLink: g,
                                withVideo: y,
                                clips: S,
                                shouldOpenModalOnCardClick: I,
                                itemCounter: T,
                                ref: R,
                                'aria-labelledby': O,
                            }),
                        ],
                    });
                }),
                m = (0, n.forwardRef)((e, t) => (0, i.jsx)(p, { forwardRef: t, ...e }));
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        82204: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => n });
            var i = r(88800),
                l = r(53548),
                o = r(43620);
            let n = (e) => {
                let {
                        blockId: t,
                        blockType: r,
                        blockIdForFrom: n,
                        blockPosX: s,
                        blockPosY: a,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: p,
                    } = e,
                    m = (0, l.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: r,
                            blockIdForFrom: n,
                            blockPosX: s,
                            blockPosY: a,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: p,
                        }),
                        [t, r, n, s, a, c, d, u, p],
                    );
                return (0, i.jsx)(o.p.Provider, { value: m, children: _ });
            };
        },
        84384: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => _ });
            var i = r(53548);
            r(30282);
            var l = r(34500),
                o = r(14518),
                n = r(58390),
                s = r(64284),
                a = r(18593),
                c = r(12816),
                d = r(1344);
            let u = [s.U.TRAILER],
                _ = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                r = null == e ? void 0 : e.blockId,
                                n = null == e ? void 0 : e.pageEntityId,
                                { pageId: s, pageEntityId: a } = (0, o.$)(),
                                { blockId: c } = (0, l.N)();
                            return (0, i.useMemo)(() => ({ pageId: null != t ? t : s, blockId: null != r ? r : c, pageEntityId: null != n ? n : a }), [r, c, t, n, s, a]);
                        })(e),
                        r = ((e) => {
                            let { pageId: t, blockId: r } = e;
                            return (0, i.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), r && e.push(r.toLowerCase()), e.push('default'), e.join('-'));
                            }, [r, t]);
                        })(t),
                        s = ((e) => {
                            let { pageId: t, blockId: r, pageEntityId: l, contextType: o, contextId: s, utmForPageIds: _ } = e,
                                p = (0, n.useSearchParams)();
                            return (0, i.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: r, pageEntityId: i, utmForPageIds: l, contextId: o, contextType: n, blockId: s } = e,
                                            _ = t && Object.fromEntries(t),
                                            p = ((e) => {
                                                switch (e) {
                                                    case c._Q.ALBUM:
                                                    case c._Q.PROMOLANDING_ALBUM:
                                                    case c._Q.AUDIOBOOK:
                                                    case c._Q.PODCAST:
                                                        return a.K.Album;
                                                    case c._Q.ARTIST:
                                                    case c._Q.ARTIST_TRACKS:
                                                    case c._Q.ARTIST_ALBUMS:
                                                    case c._Q.ARTIST_DISCOGRAPHY:
                                                        return a.K.Artist;
                                                    case c._Q.PLAYLIST:
                                                        return a.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(r);
                                        return !p || !_ || !i || u.includes(s)
                                            ? null
                                            : (Array.isArray(l) ? l.map((e) => String(e)).includes(String(i)) : !!o && p === n && String(o) === String(i)) && _
                                              ? (0, d.Z)(_)
                                              : null;
                                    })({ searchParams: p, pageId: t, pageEntityId: l, utmForPageIds: _, contextId: s, contextType: o, blockId: r }),
                                [p, t, l, s, o, r, _],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, i.useMemo)(() => ({ from: r, utmLink: s || void 0 }), [r, s]);
                };
        },
        85587: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => i, n: () => l });
            var i = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                l = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
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
            r.d(t, { w: () => I });
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
                v = r(72288),
                x = r(11006),
                h = r.n(x),
                C = r(17392),
                g = r(29504),
                y = r(91292);
            let S = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(h().copyrights, t),
                        'data-test-id': C.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(g.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: h().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, i.jsx)(y.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, l.$)(h().copyrightLink, h().yandexMusicLink),
                                        'data-test-id': C.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(g.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(y.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: h().copyrightLink,
                                'data-test-id': C.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, i.jsxs)('div', {
                        className: h().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: h().list,
                                'data-test-id': C.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: l } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: h().item,
                                            children: (0, i.jsx)(y.N, { target: '_blank', href: l, className: h().link, 'data-test-id': C.S7.FOOTER_LINK, children: r }),
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
                                className: h().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': C.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, l.$)(h().root, h().important, t),
                        'data-test-id': C.S7.FOOTER,
                        children: [(0, i.jsx)(E, { links: r.links, disclaimer: r.disclaimer }), (0, i.jsx)(S, { data: r.copyrights })],
                    });
                };
            (0, o.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, v.g)(),
                    { formatDate: l, formatMessage: o } = (0, n.A)(),
                    { language: s } = (0, f.h)(),
                    a = u({ formatMessage: o, language: s, tld: r.tld, year: m(l) });
                return (0, i.jsx)(S, { className: t, data: a });
            });
            let I = (0, o.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: o, location: p, user: x } = (0, v.g)(),
                    { formatDate: C, formatMessage: g } = (0, n.A)(),
                    { isEnabled: y } = null != (t = (0, a.P)()) ? t : {},
                    { language: S } = (0, f.h)(),
                    E = ((e) => {
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
                        userRegion: x.account.data.userSessionRegionIso,
                        year: m(C),
                    });
                return (0, i.jsx)(A, { className: (0, l.$)({ [h().root_withOffsetForDeeplink]: y }, r), data: E });
            });
        },
        89916: (e, t, r) => {
            'use strict';
            r.d(t, { GX: () => o.G, X1: () => i.X, m5: () => l.m });
            var i = r(46606),
                l = r(91136),
                o = r(19840);
            r(17017);
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
                let { className: t, getDescriptionTexts: r, trackId: o, containerClassName: p, variant: f, size: v = 'xxxs', ...x } = e,
                    { formatMessage: h } = (0, s.A)(),
                    {
                        settings: { isMobile: C },
                    } = (0, u.g)(),
                    [g, y] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    r && r().then(y);
                }, [r, o]);
                let {
                    iconVariant: S,
                    descriptionText: E,
                    isTooltipEnabled: A,
                    ariaLabel: I,
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
                })({ variant: f, descriptionTexts: g, isMobile: C }, h);
                return (0, i.jsx)(_.k, {
                    description: E,
                    placement: 'bottom-start',
                    enabled: A,
                    children: (0, i.jsx)('span', {
                        className: p,
                        children: (0, i.jsx)(c.I, {
                            className: (0, l.$)(m().explicitMark, t),
                            'aria-label': I,
                            variant: S,
                            size: v,
                            ...x,
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
        91087: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            let i = (0, r(53548).createContext)(null);
        },
        91136: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => l });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: l = {}, ...o } = t,
                        n = e || 'Internal error';
                    (super(n, o), (this.message = n), (this.code = r), (this.data = l), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class l extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    (super(e, { code: t, ...r }), Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        93671: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => v });
            var i = r(88800),
                l = r(65724),
                o = r(84961),
                n = r(53548),
                s = r(54020),
                a = r(92716),
                c = r(53323),
                d = r(77948),
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
                            isShimmerActive: v,
                            containerClassName: x,
                            artistIdWithoutLink: h,
                            withVideo: C = !0,
                            clips: g,
                            shouldOpenModalOnCardClick: y = !0,
                            itemCounter: S,
                        } = e,
                        E = (0, n.useId)(),
                        A = (0, n.useRef)(String((0, s.A)())),
                        I = (0, n.useMemo)(() => {
                            if (f) return Array.from({ length: 5 }, (e, t) => (0, i.jsx)(_.k, { isActive: v }, t));
                            return null == g
                                ? void 0
                                : g.map((e, t) =>
                                      (0, i.jsx)(
                                          d.B,
                                          {
                                              objectType: a.DomainObjectType.Video,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == g ? void 0 : g.length,
                                              objectId: String(e.clipId),
                                              children: (0, i.jsx)(u.F, {
                                                  titleClassName: r,
                                                  artistLinkClassName: o,
                                                  clip: e,
                                                  withVideo: C,
                                                  artistIdWithoutLink: h,
                                                  viewUuid: A.current,
                                                  shouldOpenModalOnCardClick: y,
                                              }),
                                          },
                                          e.clipId,
                                      ),
                                  );
                        }, [r, o, f, v, h, C, g, y]);
                    return (0, i.jsx)(c.F, {
                        className: (0, l.$)(m().itemCounter, { [m()['itemCounter_'.concat(S)]]: S }, x),
                        ref: t,
                        itemClassName: (0, l.$)(m().item, m().important, p),
                        'aria-labelledby': E,
                        children: I,
                    });
                }),
                v = (0, n.forwardRef)((e, t) => (0, i.jsx)(f, { forwardRef: t, ...e }));
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
                7435, 8752, 7617, 9967, 127, 8380, 100, 3637, 3266, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 2837, 6949, 4732, 1195, 1598,
                1928, 7627, 7967, 900, 9934, 6387, 9425, 2671, 763, 2670, 7358,
            ],
            () => e((e.s = 41592)),
        ),
            (_N_E = e.O()));
    },
]);
