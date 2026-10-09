(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5507],
    {
        400: (e) => {
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
        3669: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => g });
            var i = a(74631),
                r = a(67379),
                s = a(17850),
                n = a(59450),
                l = a(49656),
                o = a(84e3),
                c = a(58069),
                d = a(20258),
                u = a(26742),
                m = a(25195),
                _ = a(37314),
                v = a(25488),
                p = a(97952),
                h = a(10764),
                x = a(72594);
            let g = () => {
                let e = (0, o.U)(),
                    t = (0, n.st)(),
                    { hash: a } = (0, n.gf)(),
                    { pageId: g, displayReasonId: y } = (0, p.$)(),
                    { tabId: C, tabPos: A, isTabSelectedByDefault: b } = (0, x.R)(),
                    { offsetBlockPosY: f } = (0, m.u)(),
                    { blockType: T, blockId: k, blockPosX: S, blockPosY: E, mainObjectId: I, mainObjectType: N, displayReasonId: L } = (0, u.N)(),
                    { filterKey: j, filterValue: w, filterPos: R } = (0, _.G)(),
                    { objectType: M, objectsCount: O, objectId: P, objectPosX: D, objectPosY: B } = (0, v.J)(),
                    { skeleton: H } = (0, h.b)(),
                    K = null != L ? L : y,
                    V = (0, l.L)(() => (void 0 !== f && void 0 !== E ? f + E : E));
                return (0, i.useCallback)(
                    (i, n) => {
                        if (!t || !g || !d.xK.includes(g) || !d.fD.includes(g)) return;
                        let l = c.F[g];
                        if (!l) return;
                        let o = {
                            hash: a,
                            pageId: l,
                            entityType: T,
                            entityId: k,
                            entityPosX: S,
                            entityPosY: V,
                            objectsCount: O,
                            viewUuid: n,
                            objectType: M,
                            objectId: P,
                            objectPosX: D,
                            objectPosY: B,
                        };
                        (void 0 !== j && ((o.filterKey = j), (o.filterValue = w), (o.filterPos = R)),
                            d.qG.includes(g) && ((o.tabId = C), (o.tabPos = A), (o.isTabSelectedByDefault = b)),
                            H && (o.skeletonId = H),
                            'string' == typeof I && 'string' == typeof N && ((o.mainObjectType = N), (o.mainObjectId = I)),
                            K && (o.displayReasonId = K));
                        let u = (0, r.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (i ? (0, s.Pf)(t.evgenInstance, u) : (0, s.nv)(t.evgenInstance, u));
                    },
                    [t, K, k, S, V, T, j, R, w, a, b, e, I, N, P, D, B, M, O, g, H, C, A],
                );
            };
        },
        3718: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => i });
            var i = (function (e) {
                return ((e.PLAYLIST = 'playlist'), (e.ALBUM = 'album'), e);
            })({});
        },
        4111: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        4331: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => W });
            var i = a(25839),
                r = a(82298),
                s = a(88204),
                n = a(74631),
                l = a(49656),
                o = a(3392),
                c = a(19410),
                d = a(71035),
                u = a(27954),
                m = a(39528);
            let _ = (e, t) => {
                let { withLink: a, separator: i } = t,
                    r = a && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: r };
            };
            var v = a(94484),
                p = a.n(v),
                h = a(61493),
                x = a(4254),
                g = a(97522),
                y = a(39004),
                C = a(36619),
                A = a(29481),
                b = a(85686),
                f = a(85743),
                T = a(40207);
            let k = (0, s.PA)((e) => {
                    let { item: t, linkClassName: a, captionClassName: r, captionSize: s = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: m,
                            link: _,
                            title: v,
                            ariaLabel: p,
                            tooltipText: k,
                            isTooltipEnabled: S,
                            handleNavigate: E,
                        } = ((e) => {
                            var t, a;
                            let { item: i, allArtistsTitle: r, withCustomTooltip: s } = e,
                                { formatMessage: n } = (0, y.A)(),
                                {
                                    track: l,
                                    settings: { isMobile: o },
                                } = (0, u.g)(),
                                c = (0, b.Z)(null != (a = null == (t = i.link) ? void 0 : t.href) ? a : i.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, f.z)(),
                                _ = (0, A.N)(),
                                v = (0, d.c)((e) => {
                                    (o && l.isOpened && l.close(), c(e));
                                }),
                                p = ((e) => {
                                    let { artist: t, callback: a } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: r, fullscreenVideoPlayer: s } = (0, u.g)(),
                                        { modal: n } = i;
                                    return (0, T.l)({
                                        entity: t,
                                        callback: a,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (i.reset(), n.close()), r.modal.isOpened && r.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            s.modal.isOpened && (s.modal.close(), s.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: i.artist, callback: v }),
                                h = (0, d.c)((e) => {
                                    (_({ to: C.AppScreen.ArtistScreen }), null == m || m(), p(e));
                                }),
                                x = r || i.name;
                            return {
                                name: i.name,
                                link: i.link,
                                title: s ? void 0 : x,
                                ariaLabel: i.link ? n({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                tooltipText: x,
                                isTooltipEnabled: !r && s,
                                handleNavigate: h,
                            };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: l });
                    return _
                        ? (0, i.jsx)(g.N, {
                              ..._,
                              'aria-label': p,
                              className: a,
                              onClick: E,
                              title: v,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(o.m_, {
                                  enabled: S,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: k,
                                  hoverSettings: c,
                                  children: (0, i.jsx)(x.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: r, children: m }),
                              }),
                          })
                        : (0, i.jsx)(o.m_, {
                              enabled: S,
                              offsetOptions: 4,
                              placement: 'top',
                              text: k,
                              hoverSettings: c,
                              children: (0, i.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: r,
                                  title: v,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                S = (e) => {
                    let { group: t, linkClassName: a, captionClassName: r, captionSize: s, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(k, {
                                item: t.primary,
                                linkClassName: a,
                                captionClassName: r,
                                captionSize: s,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, i.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, i.jsx)(k, {
                                                item: e,
                                                linkClassName: a,
                                                captionClassName: r,
                                                captionSize: s,
                                                allArtistsTitle: l,
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
            var E = a(8487),
                I = a(9079);
            let N = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: a, handleOnSpoilerClick: s } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(I.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(p().spoiler, a),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(E.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var L = a(28631),
                j = a(89761),
                w = a(61912),
                R = a(36286),
                M = a.n(R);
            let O = (0, s.PA)((e) => {
                    let { label: t, artists: a, forwardRef: r } = e;
                    return (0, i.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, j.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: r, children: t }),
                            (0, i.jsx)(o.ZI, { className: M().tooltipContent, children: a.map((e) => (0, i.jsx)(w.V, { artist: e, className: M().artistItem }, e.id)) }),
                        ],
                    });
                }),
                P = (0, n.forwardRef)((e, t) => (0, i.jsx)(O, { forwardRef: t, ...e }));
            var D = a(10820),
                B = a(93510),
                H = a.n(B);
            let K = (0, s.PA)((e) => {
                    let { label: t, artists: a } = e,
                        { formatMessage: s } = (0, y.A)();
                    return (0, i.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, r.$)(H().root, H().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: a.map((e) => (0, i.jsx)(w.V, { artist: e }, e.id)),
                    });
                }),
                V = (0, s.PA)((e) => {
                    let { artists: t = [], label: a, labelRef: r } = e,
                        [s, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let e = r.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, l.L)(() =>
                            (0, L.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', _),
                                m(),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [_, m],
                        ),
                        (0, n.useEffect)(() => {
                            m();
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (s || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(K, { artists: t, label: a }) : (0, i.jsx)(P, { artists: t, label: a })) : a;
                }),
                W = (0, s.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: a,
                            spoilerClassName: s,
                            linkClassName: m,
                            captionClassName: v,
                            captionSize: h,
                            variant: x = 'breakAll',
                            spoilerComponent: g,
                            ...y
                        } = e,
                        C = ((e) => {
                            var t, a, i;
                            let { separator: r, visibleArtistsCount: s, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = e,
                                v = null != (t = e.artists) ? t : [],
                                p = null == (a = e.withAllArtistsTitle) || a,
                                h = null == (i = e.withCustomTooltip) || i,
                                x = (0, n.useRef)(null),
                                [g, y] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: C },
                                } = (0, u.g)(),
                                A = ((!C || 1 === v.length) && m) || !m,
                                b = ((e, t) => {
                                    var a, i, r;
                                    let s = null == (a = null == t ? void 0 : t.withComposer) || a,
                                        n = null == (i = null == t ? void 0 : t.withLink) || i,
                                        l = null != (r = null == t ? void 0 : t.separator) ? r : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let a = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...a];
                                            })
                                            .join(l),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: a, withComposer: i } = t;
                                            return {
                                                visibleArtists: (a ? e.slice(0, a) : e).filter((e) => i || !e.isComposer),
                                                hiddenArtistsCount: a && a < e.length ? e.length - a : 0,
                                            };
                                        })(e, { withComposer: s, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, a) =>
                                            ((e, t) => {
                                                var a;
                                                let { withLink: i, separator: r, isFirst: s } = t;
                                                return {
                                                    primary: _(e, { withLink: i, separator: s ? void 0 : r }),
                                                    decomposed: (null != (a = e.decomposed) ? a : []).map((e) => {
                                                        let t = r ? e.separator : '';
                                                        return _(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === a }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(v, { separator: r, visibleArtistsCount: g ? void 0 : s, withComposer: o, withLink: !!A && l, artistIdWithoutLink: c }),
                                f = p ? b.allArtistsTitle : '',
                                T = (0, d.c)((e) => {
                                    (y(!0), e.preventDefault());
                                });
                            return {
                                artists: v,
                                groups: b.groups,
                                hiddenArtistsCount: b.hiddenArtistsCount,
                                allArtistsTitle: f,
                                withCustomTooltip: h,
                                withContextMenu: m,
                                labelRef: x,
                                handleOnSpoilerClick: T,
                                isTooltipEnabled: !!f && h && !m && !C,
                                title: !f || h || m ? void 0 : f,
                            };
                        })(y),
                        A = (0, l.L)(() =>
                            C.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(g)
                                  ? g
                                  : (0, i.jsx)(N, { spoilerClassName: s, spoilerArtistsCount: C.hiddenArtistsCount, handleOnSpoilerClick: C.handleOnSpoilerClick }),
                        ),
                        b = (0, i.jsx)(o.m_, {
                            referenceRef: C.labelRef,
                            enabled: C.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: C.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: a ? { WebkitLineClamp: a } : void 0,
                                className: (0, r.$)(p().root, p()['root_variant_'.concat(x)], { [p().root_clamp]: a && a > 0, [p().ellipsis]: !a }, t),
                                title: C.title,
                                children: [
                                    C.groups.map((e) =>
                                        (0, i.jsx)(
                                            S,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: v,
                                                captionSize: h,
                                                allArtistsTitle: C.allArtistsTitle,
                                                withCustomTooltip: C.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return C.withContextMenu ? (0, i.jsx)(V, { labelRef: C.labelRef, artists: C.artists, label: b }) : b;
                });
        },
        4805: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => p });
            var i = a(25839),
                r = a(88204),
                s = a(74631),
                n = a(61493),
                l = a(50209),
                o = a(27954),
                c = a(74756),
                d = a(41544),
                u = a(61801),
                m = a(39099),
                _ = a(57963),
                v = a.n(_);
            let p = (0, r.PA)((e) => {
                let { track: t, albumArtists: a, position: r, playContextParams: _, withLightning: p } = e,
                    h = (0, l.D)({ playContextParams: _, entityId: t.entityId }),
                    {
                        settings: { isMobile: x },
                    } = (0, o.g)(),
                    g = (0, s.useCallback)((e) => (0, i.jsx)(u.G, { track: t, position: r, className: v().playButtonCell, ...e }), [t, r]);
                return (0, i.jsx)(m.C, {
                    track: t,
                    withLightning: p,
                    meta: (0, i.jsx)(d.j, { withArtistLink: !x, albumArtists: a, track: t, withSavingQueryParams: !0 }),
                    playButtonCellRender: g,
                    controls: (0, i.jsx)(c.Q, { withLightning: p, track: t, className: v().controlsBarCell, utmLink: _.contextData.utmLink }),
                    ...h,
                    'data-test-id': n.Kq.track.TRACK_ALBUM,
                });
            });
        },
        7929: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        9911: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => d });
            var i,
                r = a(6274),
                s = a(74631),
                n = {
                    352: (e) => {
                        e.exports = r;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(s, 2));
                    },
                },
                l = {};
            function o(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var a = (l[e] = { exports: {} });
                return (n[e](a, a.exports, o), a.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = o(810),
                    t = o(352);
                c.l = (a) => {
                    let [i, r] = (0, e.useState)(!0),
                        [s, n] = (0, e.useState)(!0),
                        l = () => {
                            let e = null == a ? void 0 : a.current;
                            e && (r(0 === e.scrollLeft), n(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        l();
                    }, [a, l]),
                        (0, e.useEffect)(() => {
                            let e = null == a ? void 0 : a.current;
                            return (
                                null == e || e.addEventListener('scroll', l),
                                window.addEventListener('resize', l),
                                () => {
                                    (null == e || e.removeEventListener('scroll', l), window.removeEventListener('resize', l));
                                }
                            );
                        }, [a, l]));
                    let o = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    a && a.current && (a.current.scrollLeft += a.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [a],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        a && a.current && (a.current.scrollLeft -= a.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [a],
                        ),
                        swipeForward: o,
                        shouldBackwardButtonBeDisabled: i,
                        shouldForwardButtonBeDisabled: s,
                        shouldHideControls: i && s,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        10322: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => n });
            var i = a(25839),
                r = a(74631),
                s = a(82064);
            let n = (e) => {
                let { pageId: t, pageEntityId: a, displayReasonId: n, pageStyle: l, pagePlacement: o, children: c } = e,
                    d = (0, r.useMemo)(() => ({ pageId: t, pageEntityId: a, displayReasonId: n, pageStyle: l, pagePlacement: o }), [t, a, n, l, o]);
                return (0, i.jsx)(s.r.Provider, { value: d, children: c });
            };
        },
        10959: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => r });
            var i = a(44806);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: a, getExplicitContent: r, userRegion: s } = e;
                return 'ru' === s && t(i.z.WebNextFooterDisclaimer, 'on') ? a() : r();
            };
        },
        12714: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => s, o: () => r });
            var i = a(49337);
            let r = { [i.S.Dark]: 'ym-dark-theme', [i.S.Light]: 'ym-light-theme' },
                s = (e) => {
                    switch (e) {
                        case i.S.Light:
                        case i.S.Dark:
                            return r[e];
                        default:
                            return '';
                    }
                };
        },
        13232: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => i });
            let i = (0, a(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        14927: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'PlayButtonWithPosition_root__H5FYg',
                playButton: 'PlayButtonWithPosition_playButton__7cfDQ',
                playButtonIcon: 'PlayButtonWithPosition_playButtonIcon___cLAL',
                playingAnimation: 'PlayButtonWithPosition_playingAnimation__Hy5rC',
                position: 'PlayButtonWithPosition_position__wk3OT',
                root_current: 'PlayButtonWithPosition_root_current__FCDLJ',
                root_playing: 'PlayButtonWithPosition_root_playing__RpnYU',
                root_disabled: 'PlayButtonWithPosition_root_disabled__PMV24',
                root_disliked: 'PlayButtonWithPosition_root_disliked__NIZzA',
                spinner: 'PlayButtonWithPosition_spinner__jNaNf',
            };
        },
        15270: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => p });
            var i = a(25839),
                r = a(82298),
                s = a(88204),
                n = a(74631),
                l = a(39004),
                o = a(61493),
                c = a(71035),
                d = a(4071),
                u = a(66738),
                m = a(20583),
                _ = a(65610),
                v = a.n(_);
            let p = (0, s.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: a = !0,
                        shouldFocusOnMount: s = !0,
                        className: _,
                        withBackwardFallback: p,
                        buttonSize: h = 'xxs',
                    } = e,
                    { formatMessage: x } = (0, l.A)(),
                    { canBack: g, canForward: y, moveBack: C, moveForward: A } = (0, m.J)(p),
                    b = (0, n.useRef)(null),
                    f = (0, c.c)((e) => {
                        (e.stopPropagation(), C());
                    }),
                    T = (0, c.c)((e) => {
                        (e.stopPropagation(), A());
                    });
                return (
                    (0, n.useEffect)(() => {
                        s && b.current && g && b.current.focus();
                    }, [g]),
                    (0, i.jsxs)('div', {
                        className: (0, r.$)(v().root, _),
                        'data-test-id': o.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, i.jsx)(d.$, {
                                    ref: b,
                                    'aria-label': x({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !g,
                                    size: h,
                                    icon: (0, i.jsx)(u.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: f,
                                    'data-test-id': o.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            a &&
                                (0, i.jsx)(d.$, {
                                    'aria-label': x({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !y,
                                    size: h,
                                    icon: (0, i.jsx)(u.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: T,
                                    'data-test-id': o.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        16351: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => W });
            var i = a(25839),
                r = a(10648),
                s = a(57249),
                n = a(82298),
                l = a(88204),
                o = a(13624),
                c = a(84059),
                d = a(74631),
                u = a(39004),
                m = a(36619),
                _ = a(61493),
                v = a(71035),
                p = a(23818),
                h = a(4254),
                x = a(61777),
                g = a(29481),
                y = a(47009),
                C = a(26742),
                A = a(52512),
                b = a(97952),
                f = a(85743),
                T = a(87201),
                k = a(27954),
                S = a(49337),
                E = a(96618),
                I = a(17226),
                N = a(6969),
                L = a(63494),
                j = a(79856),
                w = a.n(j),
                R = a(77698),
                M = a(74987);
            let O = async (e, t) => {
                let { loop: a = !1, markerId: i, frameRange: r, mode: s = 'forward' } = t,
                    n = null,
                    l = null;
                if (i) {
                    let t = e.markers().find((e) => e.name === i);
                    if (!t) return;
                    ((n = t.time), (l = t.time + t.duration));
                } else if (r) {
                    var o;
                    ((n = r.start), (l = null != (o = r.end) ? o : e.totalFrames));
                }
                null !== n &&
                    null !== l &&
                    (await Promise.all([e.setLoop(a), e.setMode(s), e.setSegment(n, l), e.setFrame('reverse' === s ? l : n)]), n !== l && (await e.play()));
            };
            var P = a(42393),
                D = a.n(P),
                B = a(49124);
            let H = { align: [0, 0.5], fit: 'contain' },
                K = { autoResize: !0, freezeOnOffscreen: !1 },
                V = o.default.default(
                    () =>
                        Promise.resolve()
                            .then(a.bind(a, 10648))
                            .then((e) => e.DotLottieWorkerReact),
                    { ssr: !1 },
                );
            {
                let e = B.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, r.setWasmUrl)(new URL(s, e).href);
            }
            let W = (0, l.PA)((e) => {
                var t, a, r, s, l, o;
                let { animationByTheme: j, animationConfig: P, className: B, lumenImages: W, requestAwakeLumenModal: U, vibe: Y } = e,
                    { formatMessage: z } = (0, u.A)(),
                    G = (0, c.useSearchParams)(),
                    F = (0, L.z)(),
                    { pageId: $ } = (0, b.$)(),
                    { blockIdForFrom: X } = (0, C.N)(),
                    { sendPlaySearchFeedback: q } = (0, f.z)(),
                    Q = (0, y.b)(),
                    J = (0, g.N)(),
                    Z = (0, x.f)(),
                    { ref: ee, intersectionPropertyId: et } = (0, A.n)(),
                    ea = (0, E.W)(),
                    { lumen: ei } = (0, k.g)(),
                    er = 'true' === G.get(N.K.LUMEN_AWAKE_PARAM),
                    es = ei.isEnabled && !ei.isTriedToLoadData,
                    en = ei.isEnabled && !ei.isAwakened,
                    el = null != (a = ea.theme) ? a : S.S.Dark,
                    eo = ei.getFallbackImage(),
                    ec = (0, d.useRef)(!1),
                    ed = (0, d.useRef)(P[Y ? 'idle' : 'loading']),
                    eu = (0, d.useRef)(void 0),
                    [em, e_] = (0, d.useState)(null),
                    {
                        isPlaying: ev,
                        togglePlay: ep,
                        isCurrent: eh,
                    } = (0, T.B)({ blockIdForFrom: X, pageIdForFrom: $, seeds: null != (r = null == Y ? void 0 : Y.seeds) ? r : [] });
                ((0, d.useEffect)(() => Z(), [Z]),
                    (0, d.useEffect)(() => {
                        if (!em || ec.current) return;
                        let e = () => {
                            ((ec.current = !0), O(em, ed.current));
                        };
                        return (em.addEventListener('load', e), () => em.removeEventListener('load', e));
                    }, [em]),
                    (0, d.useEffect)(() => {
                        let e = ((e, t, a, i) =>
                            a || e === (null == i ? void 0 : i.loading)
                                ? t
                                    ? null == i
                                        ? void 0
                                        : i.playing
                                    : e === i.playing
                                      ? null == i
                                          ? void 0
                                          : i.paused
                                      : e === i.loading
                                        ? null == i
                                            ? void 0
                                            : i.idle
                                        : null
                                : null == i
                                  ? void 0
                                  : i.loading)(ed.current, ev, !!Y, P);
                        e && e !== ed.current && ((ed.current = e), em && ec.current && O(em, e));
                    }, [P, em, eh, ev, Y]));
                let ex = (0, v.c)(() => {
                    (eu.current === (null == Y ? void 0 : Y.seedsId) || ev || ((eu.current = null == Y ? void 0 : Y.seedsId), null == q || q()), ep(), Q(!0));
                });
                (0, d.useEffect)(() => {
                    er && !es && Y && (en && (null == U || U(ex)), F([N.K.LUMEN_AWAKE_PARAM]));
                }, [U, F, er, en, es, ex, Y]);
                let eg = (0, v.c)(() => {
                        if (Y) {
                            if (ev) {
                                (ep(), Q(!1));
                                return;
                            }
                            if (en) {
                                (J({ to: m.AppScreen.LumenAwakeningScreen }), null == U || U(ex));
                                return;
                            }
                            ex();
                        }
                    }),
                    ey = (0, v.c)((e) => {
                        (e.code === I.v.SPACE || e.code === I.v.ENTER) && (e.preventDefault(), eg());
                    }),
                    eC = null != (s = null == Y ? void 0 : Y.title) ? s : z({ id: 'entity-names.query-to-vibe-loading-title' }),
                    eA = null != (l = null == Y ? void 0 : Y.description) ? l : z({ id: 'entity-names.query-to-vibe-loading-description' }),
                    eb = !ei.isEnabled || ei.isTriedToLoadData,
                    ef = ei.isEnabled ? (null != (o = null == ei || null == (t = ei.themes) ? void 0 : t[el].uri) ? o : eo[el]) : (null != W ? W : eo)[el],
                    eT = Y ? _.OA.vibe.QUERY_TO_VIBE_BLOCK : _.OA.vibe.QUERY_TO_VIBE_LOADING_BLOCK,
                    ek = Y && (!ei.isEnabled || ei.isTriedToLoadData);
                return (0, i.jsxs)('div', {
                    'aria-label': eC,
                    'aria-description': eA,
                    className: (0, n.$)(w().root, D().root, { [D().root_loading]: !Y }, B),
                    tabIndex: 0,
                    onClick: eg,
                    onKeyDown: ey,
                    'data-test-id': eT,
                    children: [
                        (0, i.jsx)(V, { className: D().comet, layout: H, src: j[null != el ? el : S.S.Dark], renderConfig: K, dotLottieRefCallback: e_ }),
                        (0, i.jsxs)('div', {
                            className: D().iconContainer,
                            children: [
                                eh && (0, i.jsx)(M.P, { className: D().iconPulse, stopAnimation: !ev }),
                                eb && (0, i.jsx)(p._V, { className: D().icon, src: ef, fit: 'cover', withAvatarReplace: !0, withFallback: !1, withLoadingIndicator: !1 }),
                            ],
                        }),
                        (0, i.jsx)(R.r, {
                            className: D().meta,
                            title: (0, i.jsx)(h.HL, { className: (0, n.$)(w().text, w().titleText, D().caption), size: 'm', variant: 'div', type: 'text', children: eC }),
                            description: eA,
                            titleLineClamp: 2,
                        }),
                        ek && (0, i.jsx)('div', { ref: ee, 'data-intersection-property-id': et }),
                    ],
                });
            });
        },
        16949: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => c });
            var i = a(25839),
                r = a(82298),
                s = a(86869),
                n = a(23976),
                l = a(73208),
                o = a.n(l);
            let c = (e) => {
                let { isActive: t, coverRadius: a = 'm', withDescription: l, className: c } = e;
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(o().start, c),
                    children: [
                        (0, i.jsx)(s.t, {
                            className: o().coverContainer,
                            radius: a,
                            children: (0, i.jsx)(n.W, { isActive: t, className: o().shimmerCover, radius: 'xl' }),
                        }),
                        (0, i.jsxs)('div', {
                            className: o().textShimmerContainer,
                            children: [
                                (0, i.jsx)(n.W, { isActive: t, className: o().shimmerTitle, radius: 'xl' }),
                                l && (0, i.jsx)(n.W, { isActive: t, className: o().shimmerDescription }),
                            ],
                        }),
                    ],
                });
            };
        },
        17226: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => i });
            var i = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        18412: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => y });
            var i = a(25839),
                r = a(82298),
                s = a(74631),
                n = a(36619),
                l = a(61493),
                o = a(66738),
                c = a(23818),
                d = a(86869),
                u = a(23976),
                m = a(4254),
                _ = a(61777),
                v = a(29481),
                p = a(97522),
                h = a(73208),
                x = a.n(h);
            let g = (e) => {
                    let {
                            className: t,
                            coverUrl: a,
                            labeledForId: h,
                            subTitle: g,
                            title: y,
                            description: C,
                            viewAllActionLink: A,
                            controls: b,
                            titleSize: f = 'm',
                            coverBackgroundColor: T,
                            coverRadius: k = 's',
                            titleClassName: S,
                            titleLineClamp: E,
                            fallbackIconVariant: I,
                            available: N = !0,
                            onViewAllAction: L,
                            titleChildren: j,
                            children: w,
                            headingRef: R,
                            coverContainerClassName: M,
                            headingVariant: O = 'h3',
                            withDescriptionWidthLimit: P = !0,
                            isShimmerVisible: D,
                            isShimmerActive: B,
                            withCover: H,
                            withDescription: K,
                            forwardRef: V,
                            shimmerCoverClassName: W,
                            shouldSendAnalyticsOnLoaded: U,
                            ...Y
                        } = e,
                        z = (0, _.f)(),
                        G = (0, s.useRef)(null),
                        F = a || H,
                        $ = C || K,
                        X = (0, s.useCallback)(() => {
                            G.current && 'focus' in G.current && G.current.focus();
                        }, []),
                        q = (0, v.N)(),
                        Q = (0, s.useCallback)(() => {
                            L ? L() : q({ to: n.AppScreen.Link });
                        }, [q, L]);
                    (0, s.useEffect)(() => {
                        U && z();
                    }, [U, z]);
                    let J = (0, s.useMemo)(
                            () =>
                                y && A && N
                                    ? (0, i.jsxs)(p.N, {
                                          className: x().title,
                                          containerClassName: x().linkContainer,
                                          textClassName: x().linkText,
                                          icon: (0, i.jsx)(o.I, { className: x().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: A,
                                          onClick: Q,
                                          'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(m.DZ, {
                                                  id: h,
                                                  className: (0, r.$)(x().heading, S),
                                                  variant: O,
                                                  size: f,
                                                  weight: 'bold',
                                                  lineClamp: E,
                                                  ref: R,
                                                  children: y,
                                              }),
                                              j,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: x().title,
                                          children: [
                                              (0, i.jsx)(m.DZ, {
                                                  id: h,
                                                  className: (0, r.$)(x().heading, S, { [x().heading_notAvailable]: !N }),
                                                  variant: O,
                                                  size: f,
                                                  weight: 'bold',
                                                  lineClamp: E,
                                                  ref: R,
                                                  'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                                  children: y,
                                              }),
                                              j,
                                          ],
                                      }),
                            [N, Q, R, O, h, y, S, E, f, A, j],
                        ),
                        Z = (0, s.useMemo)(() => (K && D ? (0, i.jsx)(u.W, { isActive: B, className: x().shimmerDescription }) : C), [K, D, C, B]),
                        ee = (0, s.useMemo)(
                            () =>
                                H && D
                                    ? (0, i.jsx)(u.W, { isActive: B, className: (0, r.$)(x().shimmerCover, W), radius: 's' })
                                    : (0, i.jsx)(c._V, {
                                          src: a,
                                          fallbackIconVariant: I,
                                          style: { backgroundColor: T },
                                          className: x().cover,
                                          ref: G,
                                          onClick: X,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': l.S7.BLOCK_HEADER_COVER,
                                      }),
                            [T, a, I, X, B, D, W, H],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(x().root, t),
                        ref: V,
                        ...Y,
                        'data-test-id': l.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: x().start,
                                children: [
                                    F && (0, i.jsx)(d.t, { radius: k, className: (0, r.$)(x().coverContainer, M), children: ee }),
                                    (0, i.jsxs)('div', {
                                        className: x().textContainer,
                                        children: [
                                            g,
                                            J,
                                            $ &&
                                                (0, i.jsx)(m.HL, {
                                                    id: ''.concat(h, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: P ? 2 : void 0,
                                                    className: (0, r.$)(x().description, { [x().description_widthLimit]: P }),
                                                    'data-test-id': l.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: Z,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            b || w,
                        ],
                    });
                },
                y = (0, s.forwardRef)((e, t) => (0, i.jsx)(g, { forwardRef: t, ...e }));
        },
        18436: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryPageSuspenseLoader: () => p });
            var i = a(25839),
                r = a(8487),
                s = a(13833),
                n = a(4254),
                l = a(69041),
                o = a(99401),
                c = a(26076),
                d = a(15270),
                u = a(9931),
                m = a(31381),
                _ = a.n(m),
                v = a(66834);
            let p = () =>
                (0, i.jsxs)('div', {
                    className: _().root,
                    children: [
                        (0, i.jsxs)('div', {
                            className: _().headerContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: _().header,
                                    children: [
                                        (0, i.jsx)(d.L, { withForwardControl: !1 }),
                                        (0, i.jsx)(n.DZ, {
                                            variant: 'h1',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: (0, i.jsx)(r.A, { id: 'music-history.title' }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(l.F, {
                                    className: _().carousel,
                                    carouselElement: (0, i.jsx)(u.zr, { isActive: !0, className: _().tabs, shimmerClassName: _().tab, count: 5 }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(s.N, {
                            className: _().scroll,
                            containerClassName: _().scrollContainer,
                            children: [
                                (0, i.jsx)('div', { className: _().content, children: (0, i.jsx)(v.v, { isActive: !0 }) }),
                                (0, i.jsx)(c.A, { children: (0, i.jsx)(o.w, { className: _().footer }) }),
                            ],
                        }),
                    ],
                });
        },
        19e3: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => n });
            var i = a(25839),
                r = a(74631),
                s = a(10407);
            let n = (e) => {
                let { sourceContextData: t, children: a } = e,
                    n = (0, r.useMemo)(() => ({ sourceContextData: t }), [t]);
                return (0, i.jsx)(s.l.Provider, { value: n, children: a });
            };
        },
        19410: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        20583: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => n });
            var i = a(10508),
                r = a(74631),
                s = a(21784);
            let n = (e) => {
                let t = (0, s.W)(),
                    a = (0, r.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    n = (0, r.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: a, moveForward: n };
            };
        },
        21468: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => s });
            var i = a(74631),
                r = a(56480);
            function s() {
                return (0, i.useContext)(r.H);
            }
        },
        22034: (e) => {
            e.exports = {
                control: 'CarouselWithArrows_control__3uyYB',
                list: 'CarouselWithArrows_list__2f6lz',
                buttons: 'CarouselWithArrows_buttons__fW_Dp',
                root: 'CarouselWithArrows_root__RreSk',
                root_arrowLeft_hidden: 'CarouselWithArrows_root_arrowLeft_hidden__WmoMn',
                root_arrowRight_hidden: 'CarouselWithArrows_root_arrowRight_hidden__sQTGA',
                root_arrow_hidden: 'CarouselWithArrows_root_arrow_hidden__sltkz',
                control_left: 'CarouselWithArrows_control_left__GrTcO',
                control_right: 'CarouselWithArrows_control_right__Si_BV',
                root_carouselBetweenArrows: 'CarouselWithArrows_root_carouselBetweenArrows___aN_d',
                wrapper: 'CarouselWithArrows_wrapper__Kezgl',
                carousel: 'CarouselWithArrows_carousel__gm5sM',
                important: 'CarouselWithArrows_important__ZFlvq',
            };
        },
        23976: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => l });
            var i = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (r && (r += ' '), (r += i));
                                            else for (a in t) t[a] && (r && (r += ' '), (r += a));
                                        return r;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => r }));
                        let r = i;
                    },
                    7998: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'JD1RZC0EtdwegdYvGm6W',
                            root_active: 'K4G7ASZk9TWzXzAWMZKF',
                            'gradient-horizontal': 'GTZfWL5aq48rDurR2xQI',
                            root_radius_xs: 'PyJ4CgcZYC2CpTwW_q0e',
                            root_radius_s: 'Ig8cmdGxncIa4g0mjlzw',
                            root_radius_m: 'lJbeO5iovzBwUTpu7hFA',
                            root_radius_l: 'Gc3Wyk8uCohdTadkf7NR',
                            root_radius_xl: 'iKi9AOB1TOi3ZWzmbCkq',
                            root_radius_xxl: 'nYTL841hItMUZhvJq_ob',
                            root_radius_xxxl: 'LXGqiB6_V45plhG242mA',
                            root_radius_round: 'psTzstoF82tSOz1JHMB3',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var r = null;
                            if ((void 0 !== i && (r = '' + i), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var s in ((i = {}), t)) 'key' !== s && (i[s] = t[s]);
                            else i = t;
                            return { $$typeof: a, type: e, key: r, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    7141: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Shimmer = void 0));
                        let r = a(4377),
                            s = a(5881),
                            n = i(a(7998));
                        t.Shimmer = function (e) {
                            let { isActive: t, className: a, radius: i = 'm', width: l, height: o, children: c, ...d } = e,
                                u = {};
                            return (
                                void 0 !== l && (u.width = 'string' == typeof l ? l : ''.concat(l, 'px')),
                                void 0 !== o && (u.height = 'string' == typeof o ? o : ''.concat(o, 'px')),
                                (0, r.jsx)('div', {
                                    className: (0, s.clsx)(n.default.root, n.default['root_radius_'.concat(i)], { [n.default.root_active]: t }, a),
                                    'aria-live': t ? 'polite' : 'off',
                                    'aria-busy': t,
                                    ...d,
                                    style: u,
                                    children: c,
                                })
                            );
                        };
                    },
                },
                r = {};
            function s(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var a = (r[e] = { exports: {} });
                return (i[e].call(a.exports, a, a.exports, s), a.exports);
            }
            ((s.d = (e, t) => {
                for (var a in t) s.o(t, a) && !s.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var n = {};
            (() => {
                (Object.defineProperty(n, 'X', { value: !0 }), (n.q = void 0));
                var e = s(7141);
                Object.defineProperty(n, 'q', {
                    enumerable: !0,
                    get: function () {
                        return e.Shimmer;
                    },
                });
            })();
            var l = n.q;
            n.X;
        },
        24900: (e) => {
            e.exports = {
                shimmersContainer: 'MusicHistoryPageContentShimmer_shimmersContainer__82cj6',
                dateShimmer: 'MusicHistoryPageContentShimmer_dateShimmer__d4_te',
                contextNameShimmer: 'MusicHistoryPageContentShimmer_contextNameShimmer__Tzbqr',
                contextHeaderShimmer: 'MusicHistoryPageContentShimmer_contextHeaderShimmer__Tq0PZ',
                trackListShimmers: 'MusicHistoryPageContentShimmer_trackListShimmers__4GSp8',
            };
        },
        26076: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => n });
            var i = a(25839);
            a(93588);
            var r = a(400),
                s = a.n(r);
            let n = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: s().empty });
            };
        },
        26115: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => s });
            var i = a(40207),
                r = a(12929);
            let s = (e) => {
                let { track: t, callback: a, disclaimerRejectHandler: s } = e;
                return (0, i.l)({ entity: t, entityType: r.n.TRACK, callback: a, onReject: s, preventDefaultWhenSafe: !1 });
            };
        },
        26237: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => s });
            var i = a(27954),
                r = a(44806);
            let s = () => {
                let {
                        experiments: e,
                        user: { hasPlus: t, isLumenAvailable: a },
                    } = (0, i.g)(),
                    s = e.checkExperiment(r.z.WebNextQueryToVibeLumenOptionCheck, 'on');
                return t && e.checkExperiment(r.z.WebNextQueryToVibe, 'on') && (!s || !!a);
            };
        },
        28257: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        29131: (e) => {
            e.exports = { date: 'MusicHistoryTab_date__Fjy3P', content: 'MusicHistoryTab_content__Jt15j' };
        },
        29282: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => s });
            var i = a(36484),
                r = a(62562);
            let s = () => (0, r.N)().get(i.SX);
        },
        29877: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { D: () => i }),
                (function (e) {
                    ((e.TRACK = 'track'),
                        (e.WAVE = 'wave'),
                        (e.MULTIVIBE_WAVE = 'multivibe_wave'),
                        (e.QUERY_TO_VIBE = 'q2v_wave'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.ALBUM = 'album'),
                        (e.OTHER = 'other'),
                        (e.SEARCH = 'search'));
                })(i || (i = {})));
        },
        30716: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => s });
            var i = a(84059),
                r = a(74631);
            a(93588);
            let s = (e) => {
                let t = (0, i.usePathname)(),
                    [a, s] = (0, r.useState)(!1);
                ((0, r.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !a && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, a, t]));
            };
        },
        31381: (e) => {
            e.exports = {
                root: 'MusicHistoryPage_root__FYB2m',
                scroll: 'MusicHistoryPage_scroll__ykpDX',
                scrollContainer: 'MusicHistoryPage_scrollContainer__eemvg',
                headerContainer: 'MusicHistoryPage_headerContainer__QG0L3',
                header: 'MusicHistoryPage_header__dzEvD',
                content: 'MusicHistoryPage_content__j4evw',
                footer: 'MusicHistoryPage_footer__Vu7aC',
                empty: 'MusicHistoryPage_empty__fQRHA',
                carousel: 'MusicHistoryPage_carousel__jcl8l',
                tabs: 'MusicHistoryPage_tabs__v_5Zg',
                tab: 'MusicHistoryPage_tab__WDE1e',
                tab_isLoading: 'MusicHistoryPage_tab_isLoading__nNqd2',
                tab_selected: 'MusicHistoryPage_tab_selected__nmn8P',
                date: 'MusicHistoryPage_date__OV6rR',
                error: 'MusicHistoryPage_error__9f_8i',
                important: 'MusicHistoryPage_important__qNFO8',
            };
        },
        34826: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'CommonControlsBar_root__N8b0F',
                root_withSecondaryColor: 'CommonControlsBar_root_withSecondaryColor__4Y1P_',
                item: 'CommonControlsBar_item__qGErG',
                contextMenu: 'CommonControlsBar_contextMenu__EAq_c',
                contextMenu_visible: 'CommonControlsBar_contextMenu_visible__M0ry0',
                contextMenuWrapper: 'CommonControlsBar_contextMenuWrapper__XjkaL',
                lightning: 'CommonControlsBar_lightning__o7wrY',
                ugcIcon: 'CommonControlsBar_ugcIcon__OV0Cl',
                lightning_withOffset: 'CommonControlsBar_lightning_withOffset__LGvUS',
                duration: 'CommonControlsBar_duration__un38A',
                duration_hidden: 'CommonControlsBar_duration_hidden__noQ4S',
                alwaysVisibleDuration: 'CommonControlsBar_alwaysVisibleDuration__3V6gl',
                controls: 'CommonControlsBar_controls__QrogT',
                trailerIcon: 'CommonControlsBar_trailerIcon__ZHSBo',
                removeButton: 'CommonControlsBar_removeButton__35xHY',
                controls_disabled: 'CommonControlsBar_controls_disabled__0RmLo',
                explicitMark: 'CommonControlsBar_explicitMark__3I_Op',
                controls_dislikedControls: 'CommonControlsBar_controls_dislikedControls__mMjKC',
                likeIcon: 'CommonControlsBar_likeIcon__YqgZY',
                controls_dislikedColors: 'CommonControlsBar_controls_dislikedColors__h5lev',
                downloadIcon: 'CommonControlsBar_downloadIcon__2mM6m',
                popover: 'CommonControlsBar_popover__6bmNd',
            };
        },
        36286: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        37922: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        38726: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => d });
            var i = a(25839),
                r = a(88204),
                s = a(61493),
                n = a(66738),
                l = a(10820),
                o = a(77174),
                c = a(27954);
            let d = (0, r.PA)((e) => {
                let { isLiked: t, onClick: a, className: r, iconClassName: d, albumType: u, disabled: m } = e,
                    { user: _ } = (0, c.g)(),
                    v = t ? 'liked' : 'like',
                    p = (0, o.$)(t, u);
                return (0, i.jsx)(l.Dr, {
                    className: r,
                    onClick: a,
                    icon: (0, i.jsx)(n.I, { className: d, variant: v, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !_.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: p,
                });
            });
        },
        39099: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => b });
            var i = a(25839),
                r = a(82298),
                s = a(88204),
                n = a(74631),
                l = a(71035),
                o = a(11823),
                c = a(79367),
                d = a(47009),
                u = a(52512),
                m = a(29872),
                _ = a(61561),
                v = a(85743),
                p = a(16886),
                h = a(27954),
                x = a(18284),
                g = a(39004),
                y = a(26115),
                C = a(51027),
                A = a.n(C);
            let b = (0, s.PA)((e) => {
                var t;
                let {
                        className: a,
                        track: s,
                        meta: C,
                        beforeBlock: b,
                        controls: f,
                        playButtonCellRender: T,
                        withLightning: k,
                        isPlaying: S,
                        isCurrent: E,
                        togglePlay: I,
                        restartPlay: N,
                        onPlayClick: L,
                        playButtonIconSize: j,
                        skipFreemiumCloseListeningPaywall: w = !1,
                        ...R
                    } = e,
                    { shouldShowBuySubscriptionModal: M, showBuySubscriptionModal: O } = (0, m.q)(),
                    {
                        track: P,
                        fullscreenPlayer: D,
                        settings: { isMobile: B },
                        album: H,
                        albumCPA: { isPlusCPAPlayerBarEnabled: K },
                        paywall: { modal: V },
                    } = (0, h.g)(),
                    { ref: W, intersectionPropertyId: U } = (0, u.n)(),
                    Y = (0, d.b)(),
                    z = (0, c.P)(),
                    G = ((e) => {
                        let { track: t, withLightning: a } = e,
                            { formatMessage: i } = (0, g.A)();
                        return t.isAvailable
                            ? [t.artistsNames, t.title, t.version, a && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                            : ''
                                  .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                  .concat(t.artistsNames, ' ')
                                  .concat(t.title);
                    })({ withLightning: k, track: s }),
                    F = ((e) => {
                        let { sonataState: t } = (0, h.g)(),
                            a = t.status === p.MT.LOADING_MEDIA_SOURCE || t.status === p.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let i = t.entityMeta.entityId;
                            return a && i === e;
                        }
                        return a;
                    })(s.entityId),
                    $ = K(H.id, null == (t = H.meta) ? void 0 : t.isNonMusic),
                    X = s.isAvailable && M && !$,
                    q = (0, _.N)(),
                    Q = s.isAvailable && q && !$ && !w,
                    J = (0, y.w)({ track: s, callback: I }),
                    Z = (0, l.c)(() => {
                        P.open({ trackId: s.id, albumId: s.albumId });
                    }),
                    ee = (0, y.w)({ track: s, callback: Z }),
                    { sendPlaySearchFeedback: et } = (0, v.z)(),
                    [ea, ei] = (0, n.useState)(!1),
                    er = (0, l.c)(() => {
                        if (!z()) {
                            if (X) return void O();
                            if (Q) return void V.open();
                            (ea || S || (ei(!0), null == et || et()), J(), Y(!S), null == L || L(!S));
                        }
                    }),
                    es = (0, l.c)(() => {
                        if (S) return void N();
                        er();
                    }),
                    en = (0, l.c)((e) => {
                        if (!s.isAvailable && !s.hasModalAccess) {
                            (M && s.isAvailableOnlyForPlus && O(), q && s.isAvailableOnlyForPlus && V.open());
                            return;
                        }
                        if (X) return void O();
                        let t = !B && (2 === e.detail || (1 === e.detail && s.hasTrackLink && !D.modal.isOpened));
                        return Q && !t
                            ? void V.open()
                            : ((0, o.P)(e, A().ripple), B)
                              ? void er()
                              : 2 === e.detail
                                ? void es()
                                : void (1 === e.detail && s.hasTrackLink && !D.modal.isOpened && (ee(), Q && V.open()));
                    }),
                    el = null == T ? void 0 : T({ onPlayButtonClick: er, isPlaying: S, isCurrent: E, isLoading: F, playButtonIconSize: j });
                return (0, i.jsxs)(x.C, {
                    ref: W,
                    'aria-label': G,
                    'data-intersection-property-id': U,
                    onClick: en,
                    className: (0, r.$)(A().root, { [A().root_disabled]: !s.isAvailable, [A().root_current]: E && B }, a),
                    ...R,
                    children: [b, el, C, f],
                });
            });
        },
        40701: (e) => {
            e.exports = { root: 'QueryToVibeSimple_root__fOVFG' };
        },
        41544: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => S });
            var i = a(25839),
                r = a(82298),
                s = a(88204),
                n = a(84059),
                l = a(74631),
                o = a(39004),
                c = a(8487),
                d = a(61493),
                u = a(49656),
                m = a(3392),
                _ = a(4254),
                v = a(4331),
                p = a(85743),
                h = a(27954),
                x = a(19410),
                g = a(12929),
                y = a(62926),
                C = a(97522),
                A = a(40846),
                b = a(91171),
                f = a(87221),
                T = a(12752),
                k = a.n(T);
            let S = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: a,
                        track: s,
                        albumArtists: T,
                        withExplicitMark: S,
                        withSecondaryColor: E,
                        captionSize: I = 'm',
                        explicitSize: N = 'xxxs',
                        withAllArtistsTitle: L,
                        textClassName: j,
                        artistsClassName: w,
                        ignoreDislikedStyles: R,
                        withCustomTooltip: M = !0,
                        hasLineClamp: O = !0,
                        withSavingQueryParams: P,
                        beforeTitle: D,
                        withArtistLink: B,
                        withTrackLink: H,
                        afterTitle: K,
                        withContextMenuArtists: V,
                    } = e,
                    { formatMessage: W } = (0, o.A)(),
                    { sendNavigateSearchFeedback: U } = (0, p.z)(),
                    {
                        settings: { isMobile: Y },
                        slam: z,
                    } = (0, h.g)(),
                    G = (0, b.$)({ withCustomTooltip: M }),
                    F = (0, n.useSearchParams)(),
                    $ = (0, A.B)(s, {
                        isMobile: Y,
                        isOfflineModeEnabled: z.isOfflineModeEnabled,
                        albumArtists: T,
                        withTrackLink: H,
                        withArtistLink: B,
                        withExplicitMark: S,
                        query: P ? Object.fromEntries(F) : void 0,
                    }),
                    X = (0, l.useMemo)(() => {
                        var e;
                        let t = W({ id: 'entity-names.track-name' }, { trackName: s.title });
                        return ''.concat(t, ' ').concat(null != (e = s.version) ? e : '');
                    }, [W, s.title, s.version]),
                    q = (0, f.O)({ track: s, onNavigate: U, withSavingQueryParams: P, entityType: g.n.TRACK }),
                    Q = (0, l.useCallback)(
                        (e) => {
                            var t;
                            let a = ''.concat($.title, ' ').concat(null != (t = $.version) ? t : '');
                            return (0, i.jsx)(m.m_, {
                                enabled: G && !Y,
                                offsetOptions: 4,
                                placement: 'top',
                                text: a,
                                hoverSettings: x.V,
                                children: (0, i.jsx)(_.HL, {
                                    className: (0, r.$)(k().text, k().title),
                                    type: 'entity',
                                    size: I,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: $.title,
                                }),
                            });
                        },
                        [Y, G, I, $.title, $.version],
                    ),
                    J = (0, u.L)(() => {
                        var e;
                        let t = ''.concat($.title, ' ').concat(null != (e = $.version) ? e : '');
                        return $.shouldShowRemovedTitle
                            ? (0, i.jsx)(m.m_, {
                                  enabled: G && !Y,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: W({ id: 'track-title.error-not-found' }),
                                  hoverSettings: x.V,
                                  children: (0, i.jsx)(_.HL, {
                                      className: (0, r.$)(k().text, k().title),
                                      type: 'entity',
                                      size: I,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: G ? void 0 : W({ id: 'track-title.error-not-found' }),
                                      children: (0, i.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : $.link
                              ? (0, i.jsx)(C.N, {
                                    onClick: q,
                                    className: k().albumLink,
                                    href: $.link.href,
                                    'aria-label': X,
                                    title: G ? void 0 : t,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: Q(),
                                })
                              : Q({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }),
                    Z = (0, l.useMemo)(() => +!!O, [O]);
                return (0, i.jsx)('div', {
                    className: (0, r.$)(k().root, { [k().root_disabled]: !s.isAvailable, [k().root_disliked]: s.isDisliked && !R, [k().root_withSecondaryColor]: E }, t),
                    children: (0, i.jsxs)('div', {
                        className: k().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(k().titleContainer, { [k().titleContainer_withVersion]: s.version }, a),
                                children: [
                                    (0, i.jsxs)(_.HL, {
                                        className: (0, r.$)(k().text, j),
                                        type: 'entity',
                                        size: I,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            D,
                                            J,
                                            $.version &&
                                                (0, i.jsxs)(_.HL, {
                                                    className: (0, r.$)(k().text, k().version),
                                                    type: 'entity',
                                                    size: I,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: G ? void 0 : $.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', $.version],
                                                }),
                                        ],
                                    }),
                                    $.explicitMark &&
                                        (0, i.jsx)(y.N, {
                                            containerClassName: k().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: N,
                                            variant: $.explicitMark,
                                            className: k().explicitMark,
                                            trackId: s.id,
                                        }),
                                    K,
                                ],
                            }),
                            $.artists.length > 0 &&
                                (0, i.jsx)(v.i, {
                                    className: (0, r.$)(k().text, { [k().artists]: O }, w, j),
                                    withAllArtistsTitle: L,
                                    linkClassName: (0, r.$)(k().text, k().link),
                                    captionClassName: (0, r.$)(k().text, k().artistCaption),
                                    artists: $.artists,
                                    withLink: $.withArtistLink,
                                    lineClamp: Z,
                                    captionSize: I,
                                    withContextMenu: V,
                                }),
                        ],
                    }),
                });
            });
        },
        42393: (e) => {
            e.exports = {
                iconContainer: 'QueryToVibeBase_iconContainer__AM7_Y',
                comet: 'QueryToVibeBase_comet__TR7wA',
                root: 'QueryToVibeBase_root__YPyW_',
                root_loading: 'QueryToVibeBase_root_loading__ATBRE',
                caption: 'QueryToVibeBase_caption__QUrL9',
                'caption-pulse': 'QueryToVibeBase_caption-pulse__OYj1G',
                iconPulse: 'QueryToVibeBase_iconPulse__113Fc',
                icon: 'QueryToVibeBase_icon__GNNz8',
                meta: 'QueryToVibeBase_meta__hQX1A',
            };
        },
        43354: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r, P: () => s });
            var i = a(74631);
            let r = (0, i.createContext)(null),
                s = () => (0, i.useContext)(r);
        },
        44408: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        47399: (e) => {
            e.exports = {
                root: 'AlbumTrackShimmer_root__fBjbK',
                infoContainer: 'AlbumTrackShimmer_infoContainer__4fdAk',
                coverContainer: 'AlbumTrackShimmer_coverContainer__frW12',
                textContainer: 'AlbumTrackShimmer_textContainer__5wNPM',
                title: 'AlbumTrackShimmer_title__HC_Pa',
                cover: 'AlbumTrackShimmer_cover__36UkV',
                action: 'AlbumTrackShimmer_action__oI5t5',
            };
        },
        47797: (e) => {
            e.exports = {
                header: 'MusicHistoryBlock_header__sIFVC',
                queryToVibeHeader: 'MusicHistoryBlock_queryToVibeHeader__iRBjG',
                vibeHeader: 'MusicHistoryBlock_vibeHeader__HWzD5',
                vibeCover: 'MusicHistoryBlock_vibeCover__RnM_6',
                multivibeContainer: 'MusicHistoryBlock_multivibeContainer__GTbRL',
                multivibeCover: 'MusicHistoryBlock_multivibeCover__rzU94',
                multivibeAvatar: 'MusicHistoryBlock_multivibeAvatar__Tbme3',
                multivibeControl: 'MusicHistoryBlock_multivibeControl__J85EM',
                vibeTextBlock: 'MusicHistoryBlock_vibeTextBlock__nvhPk',
                heading: 'MusicHistoryBlock_heading__HEfmk',
                headerTitle: 'MusicHistoryBlock_headerTitle__Yhyst',
                content: 'MusicHistoryBlock_content__S9lfi',
                artists: 'MusicHistoryBlock_artists__AjuWP',
                artistLink: 'MusicHistoryBlock_artistLink__yFHPE',
                shimmerTitle: 'MusicHistoryBlock_shimmerTitle__Mx1IC',
            };
        },
        49075: (e) => {
            e.exports = { trackShimmer: 'MusicHistoryTrack_trackShimmer__yxcx9' };
        },
        50314: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { h: () => i }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(i || (i = {})));
        },
        51027: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        51707: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => m });
            var i = a(25839),
                r = a(82298),
                s = a(27954),
                n = a(49337),
                l = a(16351),
                o = a(40701),
                c = a.n(o);
            let d = {
                    [n.S.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_history.lottie',
                    [n.S.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_history.lottie',
                },
                u = {
                    loading: {},
                    idle: { frameRange: { start: 0, end: 0 } },
                    playing: { frameRange: { start: 0 } },
                    paused: { frameRange: { start: 0 }, mode: 'reverse' },
                },
                m = (e) => {
                    let { className: t, ...a } = e,
                        { lumen: n } = (0, s.g)();
                    return (0, i.jsx)(l.D, {
                        className: (0, r.$)(c().root, t),
                        lumenImages: n.getFallbackImage(a.vibe.seeds[0]),
                        animationByTheme: d,
                        animationConfig: u,
                        ...a,
                    });
                };
        },
        52512: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => n });
            var i = a(74631),
                r = a(3669),
                s = a(13232);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, i.useRef)(null),
                    l = (0, r.D)(),
                    o = (0, i.useId)(),
                    c = (0, i.useContext)(s.B),
                    d = (0, i.useCallback)(
                        (i, r) => {
                            (e ? e(i, a ? r : void 0) : l(i, r), t && c.unobserveElement(o));
                        },
                        [e, c, o, l, t, a],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            c.observeElement({ elementRef: n, elementId: o, callback: d }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, d, o, l],
                    ),
                    { ref: n, intersectionPropertyId: o }
                );
            };
        },
        53168: (e) => {
            e.exports = {
                root: 'AwakeLumenModal_root__KutgH',
                header: 'AwakeLumenModal_header__uptVv',
                content: 'AwakeLumenModal_content__IGhwx',
                iframe: 'AwakeLumenModal_iframe__VUNuR',
                playButton: 'AwakeLumenModal_playButton__n3HTQ',
                playButtonVisible: 'AwakeLumenModal_playButtonVisible__wA_ri',
            };
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        54310: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryPageStoreProvider: () => G });
            var i = a(80499),
                r = a(82706),
                s = a(28410),
                n = a(29877),
                l = a(85708);
            let o = (e) => {
                var t, a, i, r;
                let { wave: n, agent: o } = e;
                return (0, s.wg)({
                    ...(0, l.e)({
                        title: n.name,
                        header: n.description,
                        seeds: n.seeds,
                        stationId: null != (r = null != (i = n.stationId) ? i : n.seeds[0]) ? r : '',
                        type: n.type,
                        agent: o,
                        imageUrl: null == o || null == (t = o.cover) ? void 0 : t.uri,
                    }),
                    backgroundColor: null == o || null == (a = o.cover) ? void 0 : a.color,
                });
            };
            var c = a(6585),
                d = a(36159),
                u = a(24820);
            let m = (e) => {
                    let { albumId: t, trackId: a } = e.data.itemId;
                    return t ? ''.concat(a, ':').concat(t) : a;
                },
                _ = (e) => {
                    if ('fullModel' in e.data) {
                        let { fullModel: t } = e.data;
                        return (0, s.wg)({ type: n.D.TRACK, id: m(e), loadingState: d.G.RESOLVE, data: (0, u.v)(t) });
                    }
                    return (0, s.wg)({ type: n.D.TRACK, id: m(e), data: null, loadingState: d.G.IDLE });
                };
            var v = a(19225),
                p = a(59342);
            let h = (e) => e.data.itemId.seeds.sort().join(',');
            var x = a(9135);
            let g = (e) => {
                let { uid: t, kind: a } = e.data.itemId;
                return ''.concat(t, ':').concat(a);
            };
            var y = a(93610);
            let C = (e) => e.data.itemId.seeds.sort().join(','),
                A = (e) => e.data.itemId.seeds.sort().join(','),
                b = (e) => {
                    var t, a;
                    let i =
                        null == (t = e.items)
                            ? void 0
                            : t
                                  .map((e) => {
                                      switch (e.context.type) {
                                          case n.D.ALBUM:
                                              return ((e, t) => {
                                                  let { data: a } = e;
                                                  if ('fullModel' in a) {
                                                      let { fullModel: i } = a;
                                                      return (0, s.wg)({
                                                          type: n.D.ALBUM,
                                                          available: i.available,
                                                          id: e.data.itemId.id,
                                                          meta: (0, c.s)({ album: i.album, artists: i.artists }),
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, s.wg)({
                                                      type: n.D.ALBUM,
                                                      available: !0,
                                                      id: e.data.itemId.id,
                                                      meta: null,
                                                      loadingState: d.G.IDLE,
                                                      tracks: t.map(_),
                                                  });
                                              })(e.context, e.tracks);
                                          case n.D.PLAYLIST:
                                              return ((e, t) => {
                                                  let { data: a, type: i } = e;
                                                  if ('fullModel' in a) {
                                                      let { fullModel: r } = a;
                                                      return (0, s.wg)({
                                                          type: i,
                                                          id: g(e),
                                                          meta: { ...(0, x.b)({ playlist: r.playlist }), tracksCount: r.tracksCount },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, s.wg)({ type: n.D.PLAYLIST, id: g(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case n.D.ARTIST:
                                              return ((e, t) => {
                                                  let { data: a, type: i } = e;
                                                  if ('fullModel' in a) {
                                                      let { fullModel: r } = a;
                                                      return (0, s.wg)({
                                                          type: i,
                                                          available: r.available,
                                                          id: e.data.itemId.id,
                                                          meta: (0, v.a)({ artist: r.artist }),
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, s.wg)({
                                                      type: i,
                                                      available: !0,
                                                      id: e.data.itemId.id,
                                                      meta: null,
                                                      loadingState: d.G.IDLE,
                                                      tracks: t.map(_),
                                                  });
                                              })(e.context, e.tracks);
                                          case n.D.WAVE:
                                              return ((e, t) => {
                                                  let { data: a, type: i } = e;
                                                  if ('fullModel' in a) {
                                                      let { fullModel: r } = a;
                                                      return (0, s.wg)({
                                                          type: i,
                                                          id: A(e),
                                                          meta: {
                                                              ...(0, l.e)(r.wave),
                                                              imageUrl: r.simpleWaveForegroundImageUrl,
                                                              backgroundColor: r.simpleWaveBackgroundColor,
                                                          },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, s.wg)({ type: i, id: A(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case n.D.MULTIVIBE_WAVE:
                                              return ((e, t) => {
                                                  let { data: a } = e;
                                                  return 'fullModel' in a
                                                      ? (0, s.wg)({
                                                            type: n.D.MULTIVIBE_WAVE,
                                                            id: h(e),
                                                            meta: o(a.fullModel),
                                                            loadingState: d.G.RESOLVE,
                                                            tracks: t.map(_),
                                                        })
                                                      : (0, s.wg)({ type: n.D.MULTIVIBE_WAVE, id: h(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case n.D.SEARCH:
                                          case n.D.OTHER:
                                              return ((e, t) => {
                                                  let { type: a } = e;
                                                  return (0, s.wg)({ type: a, id: (0, p.A)(), tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case n.D.QUERY_TO_VIBE:
                                              return ((e, t) => {
                                                  let { data: a } = e;
                                                  if ('fullModel' in a) {
                                                      let { fullModel: i } = a;
                                                      return (0, s.wg)({
                                                          type: n.D.QUERY_TO_VIBE,
                                                          id: C(e),
                                                          meta: { ...(0, y.l)(i.wave, i.agent) },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, s.wg)({ type: n.D.QUERY_TO_VIBE, id: C(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          default:
                                              return null;
                                      }
                                  })
                                  .filter((e) => e);
                    return { date: e.date, blocks: null != (a = (0, s.wg)(i)) ? a : null };
                },
                f = (e) => (null == e ? void 0 : e.type) === n.D.WAVE || (null == e ? void 0 : e.type) === n.D.MULTIVIBE_WAVE;
            var T = a(19835);
            let k = s.gK.compose(
                s.gK.model({
                    id: s.gK.string,
                    type: s.gK.enumeration(Object.values(n.D)),
                    tabIndex: s.gK.number,
                    blockIndex: s.gK.number,
                    trackIndex: s.gK.maybeNull(s.gK.number),
                }),
                T.X,
            );
            var S = a(55180),
                E = a(16886);
            let I = (e) => ({ type: E.z4.Unloaded, meta: { id: e.entityId } });
            var N = a(88148);
            let L = s.gK
                    .compose(s.gK.model('MusicHistoryTrack', { type: s.gK.literal(n.D.TRACK), id: s.gK.string, data: s.gK.maybeNull(N.v) }), T.X)
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                        get entityId() {
                            var t;
                            if (!e.data) return e.id;
                            let { id: a, albums: i } = e.data,
                                r = null == (t = i[0]) ? void 0 : t.id;
                            return r ? ''.concat(a, ':').concat(r) : a;
                        },
                    }))
                    .named('MusicHistoryPlaylist'),
                j = s.gK.compose(s.gK.model('MusicHistoryBaseBlock', { id: s.gK.string, tracks: s.gK.array(L) }), T.X).views((e) => ({
                    get isShimmerVisible() {
                        return e.isNeededToLoad || e.isLoading || e.isRejected;
                    },
                    get isShimmerActive() {
                        return e.isLoading;
                    },
                    get contextId() {
                        return e.id;
                    },
                    get entitiesData() {
                        return e.tracks.map(I);
                    },
                })),
                w = j
                    .props({ type: s.gK.literal(n.D.ALBUM), available: s.gK.boolean, meta: s.gK.maybeNull(S.J) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get autoflowSeeds() {
                            var t;
                            return ['album:'.concat(null == (t = e.meta) ? void 0 : t.id)];
                        },
                    }))
                    .named('MusicHistoryAlbum');
            var R = a(69088);
            let M = j
                    .props({ type: s.gK.literal(n.D.ARTIST), available: s.gK.boolean, meta: s.gK.maybeNull(R.P) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get autoflowSeeds() {
                            var t;
                            return ['artist:'.concat(null == (t = e.meta) ? void 0 : t.id)];
                        },
                    }))
                    .named('MusicHistoryArtist'),
                O = s.gK
                    .model('MusicHistoryCommon', { id: s.gK.string, type: s.gK.union(s.gK.literal(n.D.OTHER), s.gK.literal(n.D.SEARCH)), tracks: s.gK.array(L) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get contextId() {
                            return e.tracks.map((e) => e.id).join(',');
                        },
                        get entitiesData() {
                            return e.tracks.map(I);
                        },
                    }));
            var P = a(42546);
            let D = j
                .props({ type: s.gK.literal(n.D.PLAYLIST), meta: s.gK.maybeNull(P.I) })
                .views((e) => ({
                    get key() {
                        return ''.concat(e.type, '_').concat(e.id);
                    },
                    get autoflowSeeds() {
                        var t, a;
                        return ['playlist:'.concat(null == (t = e.meta) ? void 0 : t.uid, '_').concat(null == (a = e.meta) ? void 0 : a.kind)];
                    },
                }))
                .named('MusicHistoryPlaylist');
            var B = a(71511),
                H = a(51514);
            let K = j
                    .props({
                        id: s.gK.string,
                        type: s.gK.union(s.gK.literal(n.D.WAVE), s.gK.literal(n.D.MULTIVIBE_WAVE), s.gK.literal(n.D.QUERY_TO_VIBE)),
                        meta: s.gK.maybeNull(B.G),
                    })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get contextId() {
                            var t, a;
                            return null != (a = null == (t = e.meta) ? void 0 : t.stationId) ? a : H.M1;
                        },
                        get autoflowSeeds() {
                            var i;
                            return null == (i = e.meta) ? void 0 : i.seeds;
                        },
                        get isMultivibe() {
                            return e.type === n.D.MULTIVIBE_WAVE;
                        },
                    })),
                V = s.gK.union(w, M, D, K, O),
                W = s.gK.model('MusicHistoryTab', { date: s.gK.string, blocks: s.gK.maybeNull(s.gK.array(V)) }),
                U = s.gK
                    .compose(
                        s.gK.model('MusicHistoryPage', {
                            indexesMap: s.gK.map(s.gK.number),
                            items: s.gK.maybeNull(s.gK.array(k)),
                            datesMap: s.gK.map(s.gK.boolean),
                            tabs: s.gK.maybeNull(s.gK.array(W)),
                        }),
                        T.X,
                    )
                    .views((e) => {
                        let t = {
                            get isEmpty() {
                                var a;
                                return (e.isResolved || e.isRejected) && (null == (a = e.tabs) ? void 0 : a.length) === 0;
                            },
                            get isShimmerVisible() {
                                return e.isNeededToLoad || e.isLoading || e.isRejected;
                            },
                            get isShimmerActive() {
                                return e.isLoading;
                            },
                            getStartAndEndIndexes(t) {
                                var a, i;
                                let r = t,
                                    s = t + 1;
                                return (
                                    (null == (a = e.items) ? void 0 : a.slice(t - 25 + 1, t).some((e) => !e.isResolved)) && (r = t - 25 + 1),
                                    (null == (i = e.items) ? void 0 : i.slice(t, t + 25).some((e) => !e.isResolved)) && (s = t + 25),
                                    [r, s]
                                );
                            },
                            getItemsToLoad(a) {
                                var i, r;
                                let [s, n] = t.getStartAndEndIndexes(a);
                                return null != (r = null == (i = e.items) ? void 0 : i.slice(s, n).filter((e) => !e.isResolved)) ? r : [];
                            },
                            isInObservationRange(t) {
                                var a;
                                return (0 !== t && t % 25 == 0) || (e.items && t === (null == (a = e.items) ? void 0 : a.length) - 1);
                            },
                            get dates() {
                                var i, r;
                                return null != (r = null == (i = e.tabs) ? void 0 : i.map((e) => e.date)) ? r : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            fillItemsAndIndexes() {
                                var t;
                                let a = 0;
                                ((e.items = (0, s.wg)([])),
                                    null == (t = e.tabs) ||
                                        t.forEach((t, i) => {
                                            var r;
                                            (e.datesMap.set(t.date, !1),
                                                null == (r = t.blocks) ||
                                                    r.forEach((t, r) => {
                                                        var s;
                                                        let n = t.id;
                                                        (e.indexesMap.set(''.concat(i, '_').concat(r, '_').concat(n), a),
                                                            null == (s = e.items) ||
                                                                s.push({
                                                                    id: n,
                                                                    type: t.type,
                                                                    tabIndex: i,
                                                                    blockIndex: r,
                                                                    trackIndex: null,
                                                                    loadingState: a < 25 ? d.G.RESOLVE : d.G.IDLE,
                                                                }),
                                                            ++a,
                                                            t.tracks.forEach((t, s) => {
                                                                var n;
                                                                (e.indexesMap.set(''.concat(i, '_').concat(r, '_').concat(s, '_').concat(t.id), a),
                                                                    null == (n = e.items) ||
                                                                        n.push({
                                                                            id: t.id,
                                                                            type: t.type,
                                                                            tabIndex: i,
                                                                            blockIndex: r,
                                                                            trackIndex: s,
                                                                            loadingState: a < 25 ? d.G.RESOLVE : d.G.IDLE,
                                                                        }),
                                                                    ++a);
                                                            }));
                                                    }));
                                        }));
                            },
                            setTrack(t, a) {
                                var i, r, s, n;
                                let { tabIndex: l, blockIndex: o, trackIndex: c } = t,
                                    { fullModel: m } = a.data;
                                if (null === c) return;
                                let _ = null == (n = e.tabs) || null == (s = n[l]) || null == (r = s.blocks) || null == (i = r[o]) ? void 0 : i.tracks[c];
                                _ && ((_.data = (0, u.v)(m)), (_.loadingState = d.G.RESOLVE));
                            },
                            setAlbum(t, a) {
                                var i, r, s;
                                let { tabIndex: l, blockIndex: o } = t,
                                    { fullModel: u } = a.data,
                                    m = null == (s = e.tabs) || null == (r = s[l]) || null == (i = r.blocks) ? void 0 : i[o];
                                (null == m ? void 0 : m.type) === n.D.ALBUM &&
                                    ((m.meta = (0, c.s)({ album: u.album, artists: u.artists })), (m.loadingState = d.G.RESOLVE));
                            },
                            setArtist(t, a) {
                                var i, r, s;
                                let { tabIndex: l, blockIndex: o } = t,
                                    { fullModel: c } = a.data,
                                    u = null == (s = e.tabs) || null == (r = s[l]) || null == (i = r.blocks) ? void 0 : i[o];
                                (null == u ? void 0 : u.type) === n.D.ARTIST && ((u.meta = (0, v.a)({ artist: c.artist })), (u.loadingState = d.G.RESOLVE));
                            },
                            setPlaylist(t, a) {
                                var i, r, s;
                                let { tabIndex: l, blockIndex: o } = t,
                                    { fullModel: c } = a.data,
                                    u = null == (s = e.tabs) || null == (r = s[l]) || null == (i = r.blocks) ? void 0 : i[o];
                                (null == u ? void 0 : u.type) === n.D.PLAYLIST &&
                                    ((u.meta = { ...(0, x.b)({ playlist: c.playlist }), tracksCount: c.tracksCount }), (u.loadingState = d.G.RESOLVE));
                            },
                            setVibe(t, a) {
                                var i, r, s;
                                let { tabIndex: n, blockIndex: o } = t,
                                    { fullModel: c } = a.data,
                                    u = null == (s = e.tabs) || null == (r = s[n]) || null == (i = r.blocks) ? void 0 : i[o];
                                f(u) &&
                                    ((u.meta = { ...(0, l.e)(c.wave), imageUrl: c.simpleWaveForegroundImageUrl, backgroundColor: c.simpleWaveBackgroundColor }),
                                    (u.loadingState = d.G.RESOLVE));
                            },
                            setMultivibe(t, a) {
                                var i, r, s;
                                let { tabIndex: n, blockIndex: l } = t,
                                    { fullModel: c } = a.data,
                                    u = null == (s = e.tabs) || null == (r = s[n]) || null == (i = r.blocks) ? void 0 : i[l];
                                f(u) && ((u.meta = o(c)), (u.loadingState = d.G.RESOLVE));
                            },
                            getMusicHistory: (0, s.L3)(function* () {
                                let { musicHistoryResource: a, modelActionsLogger: i } = (0, s._$)(e);
                                if (e.loadingState !== d.G.PENDING)
                                    try {
                                        e.loadingState = d.G.PENDING;
                                        let i = yield a.getMusicHistory({ fullModelsCount: 25 }),
                                            r = ((e) => {
                                                let t = { historyTabs: [] },
                                                    a = 0;
                                                for (let s of e.historyTabs) {
                                                    var i, r;
                                                    if (a > 1e3) break;
                                                    let e = { ...s, items: [] };
                                                    for (let t of null != (i = s.items) ? i : []) {
                                                        if (a > 1e3) break;
                                                        let i = { ...t, tracks: [] };
                                                        for (let e of t.tracks) {
                                                            if (a > 1e3) break;
                                                            (i.tracks.push(e), ++a);
                                                        }
                                                        null == (r = e.items) || r.push(i);
                                                    }
                                                    e.items && e.items.length > 0 && t.historyTabs.push(e);
                                                }
                                                return t;
                                            })(i);
                                        ((e.tabs = (0, s.wg)(r.historyTabs.map(b))), t.fillItemsAndIndexes(), (e.loadingState = d.G.RESOLVE));
                                    } catch (t) {
                                        (i.error(t), (e.loadingState = d.G.REJECT));
                                    }
                            }),
                            getItems: (0, s.L3)(function* (a) {
                                let { musicHistoryResource: i, modelActionsLogger: r } = (0, s._$)(e);
                                try {
                                    let r = e.getItemsToLoad(a);
                                    r.forEach((e) => {
                                        e.loadingState = d.G.RESOLVE;
                                    });
                                    let s = yield i.getMusicHistoryItems({
                                            items: r
                                                .map((e) => {
                                                    switch (e.type) {
                                                        case n.D.ARTIST:
                                                        case n.D.ALBUM:
                                                            return { type: e.type, data: { itemId: { id: e.id } } };
                                                        case n.D.PLAYLIST: {
                                                            let [t, a] = e.id.split(':');
                                                            return { type: e.type, data: { itemId: { uid: Number(t), kind: Number(a) } } };
                                                        }
                                                        case n.D.WAVE:
                                                        case n.D.MULTIVIBE_WAVE:
                                                            return { type: e.type, data: { itemId: { seeds: e.id.split(',') } } };
                                                        case n.D.TRACK: {
                                                            let [t, a] = e.id.split(':');
                                                            return { type: e.type, data: { itemId: { trackId: String(t), albumId: a } } };
                                                        }
                                                        default:
                                                            return null;
                                                    }
                                                })
                                                .filter((e) => e),
                                        }),
                                        l = r.reduce((e, t) => {
                                            let a = ''.concat(t.type, '_').concat(t.id);
                                            if (a in e) {
                                                var i;
                                                null == (i = e[a]) || i.push(t);
                                            } else e[a] = [t];
                                            return e;
                                        }, {});
                                    s.items.forEach((e) => {
                                        var a;
                                        null ==
                                            (a =
                                                l[
                                                    ((e) => {
                                                        switch (e.type) {
                                                            case n.D.ALBUM:
                                                                return ''.concat(e.type, '_').concat(e.data.itemId.id);
                                                            case n.D.TRACK:
                                                                return ''.concat(e.type, '_').concat(m(e));
                                                            case n.D.WAVE:
                                                                return ''.concat(e.type, '_').concat(A(e));
                                                            case n.D.MULTIVIBE_WAVE:
                                                                return ''.concat(e.type, '_').concat(h(e));
                                                            case n.D.PLAYLIST:
                                                                return ''.concat(e.type, '_').concat(g(e));
                                                            case n.D.ARTIST:
                                                                return ''.concat(e.type, '_').concat(e.data.itemId.id);
                                                            case n.D.QUERY_TO_VIBE:
                                                                return ''.concat(e.type, '_').concat(C(e));
                                                        }
                                                    })(e)
                                                ]) ||
                                            a.forEach((a) => {
                                                switch (e.type) {
                                                    case n.D.ALBUM:
                                                        t.setAlbum(a, e);
                                                        break;
                                                    case n.D.TRACK:
                                                        t.setTrack(a, e);
                                                        break;
                                                    case n.D.WAVE:
                                                        t.setVibe(a, e);
                                                        break;
                                                    case n.D.MULTIVIBE_WAVE:
                                                        t.setMultivibe(a, e);
                                                        break;
                                                    case n.D.PLAYLIST:
                                                        t.setPlaylist(a, e);
                                                        break;
                                                    case n.D.ARTIST:
                                                        t.setArtist(a, e);
                                                }
                                                a.loadingState = d.G.RESOLVE;
                                            });
                                    });
                                } catch (e) {
                                    r.error(e);
                                }
                            }),
                            setDatesMap(t, a) {
                                e.datesMap.set(t, a);
                            },
                            reset() {
                                ((e.items = null), (e.tabs = null), e.indexesMap.clear(), e.datesMap.clear(), (e.loadingState = d.G.IDLE));
                            },
                        };
                        return t;
                    }),
                Y = { loadingState: d.G.IDLE, indexesMap: {}, items: null, datesMap: {}, tabs: null },
                { pageStoreProvider: z } = (0, i.W)({ createStore: (e) => U.create(Y, e), patchKey: r.n.MUSIC_HISTORY }),
                G = z;
        },
        56480: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            let i = (0, a(74631).createContext)({ pageAlbumId: void 0 });
        },
        57963: (e) => {
            e.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        60924: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => d });
            var i = a(25839),
                r = a(61493),
                s = a(3392),
                n = a(4254),
                l = a(74672),
                o = a.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: a, title: l, placement: d = 'top', children: u } = e;
                    return (0, i.jsxs)(s.m_, {
                        enabled: a,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, i.jsx)(s.ZI, {
                                className: o().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61561: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => s });
            var i = a(27954),
                r = a(44806);
            let s = () => {
                var e, t;
                let {
                    user: a,
                    settings: { browserInfo: s },
                    experiments: n,
                } = (0, i.g)();
                return (
                    !(null == s ? void 0 : s.isTouch) &&
                    a.isAuthorized &&
                    !a.hasPlus &&
                    (null == (t = n.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61777: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => g });
            var i = a(74631),
                r = a(67379),
                s = a(17850),
                n = a(59450),
                l = a(49656),
                o = a(84e3),
                c = a(58069),
                d = a(20258),
                u = a(26742),
                m = a(25195),
                _ = a(37314),
                v = a(97952),
                p = a(10764),
                h = a(72594);
            let x = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.ARTIST,
                    d._Q.CONCERTS,
                    d._Q.CONCERT,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                ],
                g = () => {
                    let e = (0, i.useRef)(!1),
                        t = (0, n.st)(),
                        a = (0, o.U)(),
                        { hash: g } = (0, n.gf)(),
                        { pageId: y } = (0, v.$)(),
                        { tabId: C, tabPos: A, isTabSelectedByDefault: b } = (0, h.R)(),
                        { offsetBlockPosY: f } = (0, m.u)(),
                        { blockId: T, blockType: k, blockPosX: S, blockPosY: E, mainObjectType: I, mainObjectId: N, objectsCount: L } = (0, u.N)(),
                        { filterKey: j, filterValue: w, filterPos: R } = (0, _.G)(),
                        { skeleton: M } = (0, p.b)(),
                        O = (0, l.L)(() => (void 0 !== f && void 0 !== E ? f + E : E));
                    return (0, i.useCallback)(() => {
                        if (!t || !y || !d.xK.includes(y) || !x.includes(y) || e.current) return;
                        let i = { hash: g, pageId: c.F[y], entityType: k, entityId: T, entityPosX: S, entityPosY: O, objectsCount: L };
                        (void 0 !== j && ((i.filterKey = j), (i.filterValue = w), (i.filterPos = R)),
                            d.qG.includes(y) && ((i.tabId = C), (i.tabPos = A), (i.isTabSelectedByDefault = b)),
                            M && (i.skeletonId = M),
                            N && I && ((i.mainObjectType = I), (i.mainObjectId = N)));
                        let n = (0, r.F)({ params: i, logger: a, context: 'useSendEventOnBlockLoaded' });
                        n && ((0, s.uY)(t.evgenInstance, n), (e.current = !0));
                    }, [t, y, g, k, T, S, O, j, w, R, L, M, N, I, a, C, A, b]);
                };
        },
        61801: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => v });
            var i = a(25839),
                r = a(82298),
                s = a(88204),
                n = a(61493),
                l = a(4550),
                o = a(4254),
                c = a(27954),
                d = a(49438),
                u = a(74987),
                m = a(14927),
                _ = a.n(m);
            let v = (0, s.PA)((e) => {
                let { className: t, track: a, position: s, onPlayButtonClick: m, isPlaying: v, isCurrent: p, withDislikeStyles: h = !0, isLoading: x } = e,
                    {
                        settings: { isMobile: g },
                    } = (0, c.g)();
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(t, _().root, {
                        [_().root_disabled]: !a.isAvailable && !a.hasModalAccess,
                        [_().root_playing]: v,
                        [_().root_disliked]: a.isDisliked && h,
                        [_().root_current]: p,
                    }),
                    children: [
                        (a.isAvailable || a.hasModalAccess) &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    !x && (0, i.jsx)(u.P, { stopAnimation: !v, className: _().playingAnimation }),
                                    x && g && (0, i.jsx)(l.y, { size: 'xs', className: _().spinner }),
                                    !g &&
                                        (0, i.jsx)(d.D, {
                                            variant: 'filled',
                                            className: _().playButton,
                                            iconClassName: _().playButtonIcon,
                                            isPlaying: v,
                                            onClick: m,
                                            iconSize: 'xs',
                                        }),
                                ],
                            }),
                        s &&
                            (0, i.jsx)(o.HL, {
                                variant: 'div',
                                className: _().position,
                                weight: 'normal',
                                type: 'entity',
                                size: 'm',
                                'data-test-id': n.Kq.track.TRACK_POSITION,
                                children: s,
                            }),
                    ],
                });
            });
        },
        61912: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => y });
            var i = a(25839),
                r = a(82298),
                s = a(88204),
                n = a(74631),
                l = a(36619),
                o = a(61493),
                c = a(71035),
                d = a(23818),
                u = a(10820),
                m = a(86869),
                _ = a(4254),
                v = a(29481),
                p = a(85686),
                h = a(27954),
                x = a(53454),
                g = a.n(x);
            let y = (0, s.PA)((e) => {
                let { artist: t, className: a } = e,
                    { fullscreenPlayer: s } = (0, h.g)(),
                    x = (0, p.Z)(t.url),
                    C = (0, v.N)(),
                    A = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(y, { artist: t, className: a }, t.id)), e), []))
                        );
                    }, [t, a]),
                    b = (0, c.c)((e) => {
                        (s.modal.isOpened && s.modal.close(), C({ to: l.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, r.$)(g().root, a),
                            onClick: b,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, i.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, i.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        62661: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => o });
            var i = a(25839),
                r = a(82298),
                s = a(66738),
                n = a(28257),
                l = a.n(n);
            let o = (e) => {
                let { isDragging: t, className: a } = e;
                return (0, i.jsx)(s.I, { variant: 'dragDots', size: 'xxs', className: (0, r.$)(l().root, { [l().root_active]: t }, a), 'aria-hidden': !0 });
            };
        },
        62926: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => h });
            var i = a(25839),
                r = a(82298),
                s = a(88204),
                n = a(74631),
                l = a(39004),
                o = a(74245),
                c = a(61493),
                d = a(49656),
                u = a(66738),
                m = a(27954),
                _ = a(60924),
                v = a(92870),
                p = a.n(v);
            let h = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: a, trackId: s, containerClassName: v, variant: h, size: x = 'xxxs', ...g } = e,
                    { formatMessage: y } = (0, l.A)(),
                    {
                        settings: { isMobile: C },
                    } = (0, m.g)(),
                    [A, b] = (0, n.useState)(null),
                    f = (0, d.L)(() => {
                        switch (h) {
                            case o.JU.E:
                                return 'explicit';
                            case o.JU.AGE_12:
                            case o.JU.AGE_16:
                            case o.JU.AGE_18:
                                return 'adult';
                            case o.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    T = (0, n.useMemo)(() => y({ id: 'extra-explicit.explicit-mark' }), [y]);
                (0, n.useEffect)(() => {
                    a && a().then(b);
                }, [a, s]);
                let k = (null == A ? void 0 : A.join('\n')) || '',
                    S = !!(null == A ? void 0 : A.length) && !C,
                    E = k.length > 0 ? k : T;
                return (0, i.jsx)(_.k, {
                    description: k,
                    placement: 'bottom-start',
                    enabled: S,
                    children: (0, i.jsx)('span', {
                        className: v,
                        // for PulseSync: BEGIN render the S badge for substituted tracks
                        children:
                            h === o.JU.SUBSTITUTED
                                ? (0, i.jsxs)('svg', {
                                      className: (0, r.$)(p().explicitMark, t),
                                      viewBox: '0 0 16 16',
                                      role: 'img',
                                      'aria-label': E,
                                      style: { width: 'var(--ym-icon-size-'.concat(x, ')'), height: 'var(--ym-icon-size-'.concat(x, ')') },
                                      ...g,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                      children: [
                                          (0, i.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                          (0, i.jsx)('text', {
                                              x: '8',
                                              y: '9',
                                              fill: 'currentColor',
                                              fontSize: '7',
                                              fontWeight: '700',
                                              textAnchor: 'middle',
                                              dominantBaseline: 'middle',
                                              children: 'S',
                                          }),
                                      ],
                                  })
                                : (0, i.jsx)(u.I, {
                                      className: (0, r.$)(p().explicitMark, t),
                                      'aria-label': E,
                                      variant: f,
                                      size: x,
                                      ...g,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                  }),
                        // for PulseSync: END render the S badge for substituted tracks
                    }),
                });
            });
        },
        63494: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => n });
            var i = a(71035),
                r = a(27954),
                s = a(83918);
            let n = () => {
                let { location: e } = (0, r.g)(),
                    t = (0, s.X)();
                return (0, i.c)((a) => {
                    let i = new URL(window.location.href);
                    a.forEach((e) => i.searchParams.delete(e));
                    let r = i.toString();
                    (t(r), e.setHref(r), e.setSearchParams(i.searchParams.toString()));
                });
            };
        },
        64813: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        65610: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        66834: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => d });
            var i = a(25839),
                r = a(23976),
                s = a(3718),
                n = a(16949),
                l = a(97805),
                o = a(24900),
                c = a.n(o);
            let d = (e) => {
                let { isActive: t } = e,
                    a = (0, i.jsxs)('div', {
                        className: c().trackListShimmers,
                        children: [
                            (0, i.jsx)(l.D, { isActive: t, variant: s.X.PLAYLIST }),
                            (0, i.jsx)(l.D, { isActive: t, variant: s.X.PLAYLIST }),
                            (0, i.jsx)(l.D, { isActive: t, variant: s.X.PLAYLIST }),
                        ],
                    });
                return (0, i.jsxs)('div', {
                    className: c().shimmersContainer,
                    children: [
                        (0, i.jsx)(r.W, { isActive: t, className: c().dateShimmer }),
                        (0, i.jsx)(r.W, { isActive: t, className: c().contextNameShimmer }),
                        (0, i.jsx)(n.M, { withDescription: !0, className: c().contextHeaderShimmer }),
                        a,
                        (0, i.jsx)(r.W, { isActive: t, className: c().contextNameShimmer }),
                        (0, i.jsx)(n.M, { coverRadius: 'round', className: c().contextHeaderShimmer }),
                        a,
                    ],
                });
            };
        },
        68854: (e) => {
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
        69041: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => b });
            var i = a(25839),
                r = a(82298),
                s = a(46189),
                n = a(88204),
                l = a(74631),
                o = a.t(l, 2),
                c = a(61493),
                d = a(9911),
                u = {
                    810: (e) => {
                        e.exports = o;
                    },
                },
                m = {},
                _ = {};
            ((() => {
                (Object.defineProperty(_, '__esModule', { value: !0 }), (_.useForwardRef = void 0));
                let e = (function e(t) {
                    var a = m[t];
                    if (void 0 !== a) return a.exports;
                    var i = (m[t] = { exports: {} });
                    return (u[t](i, i.exports, e), i.exports);
                })(810);
                _.useForwardRef = function (t, a) {
                    let i = (0, e.useRef)(a);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(i.current) : (t.current = i.current));
                        }, [t]),
                        i
                    );
                };
            })(),
                _.__esModule);
            var v = _.useForwardRef,
                p = a(51859),
                h = a(27954),
                x = a(80986),
                g = a(22034),
                y = a.n(g);
            let C = { [p.u.Desktop]: { start: 40, end: 20 }, [p.u.Mobile]: { start: 40, end: 40 } },
                A = (0, n.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: a,
                            forwardRef: n,
                            scrollPadding: o,
                            isCarouselBetweenArrows: u = !1,
                            controlsWrapperClassName: m,
                            buttonSize: _,
                            buttonVariant: g,
                            withSecondaryColor: A,
                        } = e,
                        {
                            settings: { isMobile: b },
                        } = (0, h.g)(),
                        f = v(n, null),
                        { shouldBackwardButtonBeDisabled: T, shouldForwardButtonBeDisabled: k, shouldHideControls: S } = (0, d.Y)(f),
                        [E, I] = (0, l.useMemo)(() => {
                            let e = (0, s.A)(C, o);
                            return [b ? e[p.u.Mobile].start : e[p.u.Desktop].start, b ? e[p.u.Mobile].end : e[p.u.Desktop].end];
                        }, [o, b]),
                        N = (0, l.useCallback)(
                            (e) => {
                                var t;
                                let a = null == (t = f.current) ? void 0 : t.children[e],
                                    { current: i } = f;
                                if (!i || !(a instanceof HTMLElement)) return;
                                if (a.offsetLeft - i.scrollLeft < E) {
                                    i.scrollLeft = a.offsetLeft - E;
                                    return;
                                }
                                let r = i.scrollLeft + i.clientWidth - a.offsetLeft - a.offsetWidth;
                                r < I && (i.scrollLeft -= r - I);
                            },
                            [f, I, E],
                        ),
                        L = (0, l.useCallback)(
                            (e) => {
                                var t, i;
                                (N(e), null == (t = (i = a.props).onTabChange) || t.call(i, e));
                            },
                            [a, N],
                        ),
                        j = (0, l.cloneElement)(a, { forwardRef: f, className: (0, r.$)(y().wrapper, a.props.className, y().carousel, y().important), onTabChange: L });
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(
                            y().root,
                            {
                                [y().root_carouselBetweenArrows]: u,
                                [y().root_arrowLeft_hidden]: T,
                                [y().root_arrowRight_hidden]: k,
                                [y().root_arrow_hidden]: T && k && S,
                            },
                            t,
                        ),
                        'data-test-id': c.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, i.jsx)('div', { className: y().list, children: j }),
                            !b &&
                                (0, i.jsx)(x.X, {
                                    className: (0, r.$)(y().buttons, m),
                                    carouselRef: f,
                                    backwardControlClassName: y().control,
                                    forwardControlClassName: y().control,
                                    withSecondaryColor: A,
                                    buttonSize: _,
                                    buttonVariant: g,
                                }),
                        ],
                    });
                }),
                b = (0, l.forwardRef)((e, t) => (0, i.jsx)(A, { forwardRef: t, ...e }));
        },
        71705: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => p });
            var i = a(25839),
                r = a(39004),
                s = a(71035),
                n = a(21468),
                l = a(91149),
                o = a(92942),
                c = a(27954),
                d = a(57549),
                u = a(33660),
                m = a(74631),
                _ = a(31860),
                v = a(93297);
            let p = (e) => {
                let {
                        user: t,
                        paywall: a,
                        albumCPA: { isPlusCPAEnabled: p },
                    } = (0, c.g)(),
                    { formatMessage: h } = (0, r.A)(),
                    { notify: x } = (0, o.l)(),
                    g = (() => {
                        let { notify: e } = (0, o.l)(),
                            [t, a] = (0, m.useState)(!1),
                            { formatMessage: n } = (0, r.A)();
                        return (0, s.c)(async (r) => {
                            let { album: s, withLink: o = !0, withNotification: c = !0 } = r;
                            if (t) return;
                            let m = { ...(0, u.HO)(s), url: s.url, isLiked: !s.isLiked };
                            a(!0);
                            let p = await s.toggleLike();
                            (a(!1),
                                c &&
                                    (p === _.f.OK
                                        ? e((0, i.jsx)(v.T, { withLink: o, album: m }), { containerId: l.u.INFO })
                                        : e((0, i.jsx)(d.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR })));
                        });
                    })(),
                    { pageAlbumId: y } = (0, n.T)();
                return (0, s.c)(async () => {
                    if (e)
                        return p({ pageAlbumId: y, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void a.openModal()
                            : t.isAuthorized
                              ? g({ album: e })
                              : void x((0, i.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        71996: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => u });
            var i = a(25839),
                r = a(74631),
                s = a(39004),
                n = a(61493),
                l = a(4071),
                o = a(66738),
                c = a(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: a,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: v,
                            className: p,
                            forwardRef: h,
                            style: x,
                            children: g,
                        } = e,
                        { formatMessage: y } = (0, s.A)(),
                        C = y({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(l.$, {
                        className: p,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: a,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: _,
                        ref: h,
                        icon: (0, i.jsx)(o.I, { variant: 'trailer', size: u, className: v }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        72968: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'EntityMeta_root__Zn4Th',
                root_disabled: 'EntityMeta_root_disabled__u3DaR',
                albumLink: 'EntityMeta_albumLink__vxRG7',
                artistCaption: 'EntityMeta_artistCaption__3JqiO',
                artistLink: 'EntityMeta_artistLink__rMKgI',
                description: 'EntityMeta_description__cSa2I',
                explicitMark: 'EntityMeta_explicitMark__wOyns',
                likesCount: 'EntityMeta_likesCount__cw2GN',
                subtitle: 'EntityMeta_subtitle__yE1NK',
                title: 'EntityMeta_title__6_ChR',
                titleContainer: 'EntityMeta_titleContainer__WMe1r',
                version: 'EntityMeta_version__7Z948',
                root_disliked: 'EntityMeta_root_disliked__PhzHW',
                title_withVersion: 'EntityMeta_title_withVersion__rbXWv',
                text: 'EntityMeta_text___lB4k',
                icon: 'EntityMeta_icon__tTxs3',
            };
        },
        73182: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => s });
            var i = a(56829),
                r = a(35015);
            let s = (e) => {
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
        73208: (e) => {
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
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        74756: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => O });
            var i = a(25839),
                r = a(82298),
                s = a(88204),
                n = a(74631),
                l = a(39004),
                o = a(8487),
                c = a(36619),
                d = a(61493),
                u = a(71035),
                m = a(66738),
                _ = a(3392),
                v = a(4254),
                p = a(17545),
                h = a(4071);
            let x = (e) => {
                let { className: t, variant: a = 'text', onClick: r, iconClassName: s, iconSize: o, size: c = 's', ariaLabel: u } = e,
                    { formatMessage: _ } = (0, l.A)(),
                    v = null != u ? u : _({ id: 'play-queue.delete-from-queue' }),
                    p = (0, n.useCallback)(
                        (e) => {
                            (null == r || r(), e.stopPropagation());
                        },
                        [r],
                    );
                return (0, i.jsx)(h.$, {
                    className: t,
                    withRipple: !1,
                    variant: a,
                    size: c,
                    radius: 'round',
                    'aria-label': v,
                    onClick: p,
                    icon: (0, i.jsx)(m.I, { size: o, className: s, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var g = a(79367),
                y = a(34159),
                C = a(68215),
                A = a(85743),
                b = a(27954),
                f = a(64720),
                T = a(71996),
                k = a(6304),
                S = a(38097),
                E = a(91907),
                I = a(3407),
                N = a(34826),
                L = a.n(N),
                j = a(82684),
                w = a(85957),
                R = a.n(w);
            let M = (0, s.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: a } = (0, l.A)();
                    return t.isDownloaded
                        ? (0, i.jsx)(m.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': a({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, i.jsx)(j.A, { value: t.downloadingProgress, size: 16, className: R().downloadingProgress, progressBarClassName: R().progress })
                          : null;
                }),
                O = (0, s.PA)((e) => {
                    var t, a;
                    let {
                            className: s,
                            track: h,
                            withLightning: N,
                            ignoreDislikedStyles: j,
                            onLikeClick: w,
                            utmLink: R,
                            withSecondaryColor: O,
                            handleRemove: P,
                            withTrailer: D = !0,
                            likeIconSize: B = 'xxs',
                            removeButtonAriaLabel: H,
                            hideControls: K,
                        } = e,
                        { user: V, trailer: W } = (0, b.g)(),
                        { formatMessage: U } = (0, l.A)(),
                        { sendLikeSearchFeedback: Y } = (0, A.z)(),
                        [z, G] = (0, n.useState)(!1),
                        [F, $] = (0, n.useState)(!1),
                        X = (0, g.P)(),
                        q = (0, p.K)(h),
                        Q = ((e) =>
                            'number' != typeof e
                                ? null
                                : ((e) => {
                                      let t = Math.round((e || 0) / S.k7);
                                      return (0, E.E)(t);
                                  })(e))(h.durationMs),
                        J = (0, C.P)(Math.round((null != (a = h.durationMs) ? a : 0) / 1e3)),
                        Z = (0, y.F)(),
                        ee = V.hasPlus,
                        et = !h.isRemoved && h.isAvailable && !K,
                        ea = (0, u.c)(async () => {
                            (z || h.isLiked || (G(!0), null == Y || Y()), await q(), null == w || w(h.isLiked));
                        }),
                        ei = (0, u.c)((e) => {
                            e.stopPropagation();
                        }),
                        er = (0, u.c)((e) => {
                            if ((e.stopPropagation(), X())) return void e.preventDefault();
                            (W.openTrackTrailer(h.id), Z(c.DomainObjectType.Track, h.id));
                        }),
                        es = (0, n.useMemo)(() => {
                            if (et)
                                return (0, i.jsx)('div', {
                                    onClick: ei,
                                    children: (0, i.jsx)(I._, {
                                        track: h,
                                        open: F,
                                        onOpenChange: $,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(m.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: R,
                                        className: (0, r.$)(L().contextMenu, { [L().contextMenu_visible]: F }),
                                        handleRemove: P,
                                        withTrailer: D,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, P, F, et, D, h, R]);
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(L().root, L().controls, s, {
                            [L().controls_dislikedControls]: h.isDisliked,
                            [L().controls_dislikedColors]: h.isDisliked && !j,
                            [L().controls_disabled]: !h.isAvailable,
                            [L().root_withSecondaryColor]: O,
                        }),
                        children: [
                            N &&
                                (0, i.jsx)(m.I, {
                                    'aria-label': U({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: L().lightning,
                                    variant: 'lightning',
                                }),
                            h.isUGC &&
                                (0, i.jsxs)(_.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(m.I, {
                                            'aria-label': U({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: L().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(_.ZI, { children: (0, i.jsx)(o.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            ee && (0, i.jsx)('div', { className: (0, r.$)(L().item, L().downloadIcon), children: (0, i.jsx)(M, { track: h }) }),
                            P && !K && (0, i.jsx)(x, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(L().item, L().removeButton), onClick: P, ariaLabel: H }),
                            et &&
                                (0, i.jsx)(k.WithOffline, {
                                    fallback: (0, i.jsx)(f.c, {
                                        size: 'xs',
                                        iconSize: B,
                                        className: (0, r.$)(L().item, L().likeIcon),
                                        isLiked: h.isLiked,
                                        onClick: ea,
                                        disabled: !V.isAuthorized,
                                    }),
                                }),
                            (null == (t = h.trailer) ? void 0 : t.isAvailable) &&
                                h.isAvailable &&
                                (0, i.jsx)(k.WithOffline, {
                                    fallback: (0, i.jsx)(T.k, {
                                        className: (0, r.$)(L().item, L().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: er,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(L().item, L().contextMenuWrapper),
                                children: [
                                    null !== Q &&
                                        (0, i.jsx)(v.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(L().duration, { [L().duration_hidden]: F && et }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': J,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: Q }),
                                        }),
                                    es,
                                ],
                            }),
                        ],
                    });
                });
        },
        77174: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => s });
            var i = a(39004),
                r = a(56829);
            let s = (e, t) => {
                let { formatMessage: a } = (0, i.A)();
                if (e)
                    switch (t) {
                        case r._.AUDIOBOOK:
                            return a({ id: 'non-music.shelf-unsubscribe' });
                        case r._.FAIRY_TALE:
                            return a({ id: 'interface-actions.do-not-like' });
                        default:
                            return a({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case r._.AUDIOBOOK:
                        return a({ id: 'non-music.shelf-subscribe' });
                    case r._.FAIRY_TALE:
                        return a({ id: 'interface-actions.like' });
                    default:
                        return a({ id: 'interface-actions.subscribe' });
                }
            };
        },
        77698: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => _ });
            var i = a(25839),
                r = a(82298),
                s = a(39004),
                n = a(61493),
                l = a(49656),
                o = a(66738),
                c = a(4254),
                d = a(62926),
                u = a(72968),
                m = a.n(u);
            let _ = (e) => {
                let {
                        isDisliked: t,
                        isDisabled: a,
                        description: u,
                        getDescriptionTexts: _,
                        explicitMarkVariant: v,
                        className: p,
                        version: h,
                        title: x,
                        artistsComponent: g,
                        likesCount: y,
                        isLiked: C,
                        releaseYear: A,
                        titleLineClamp: b = 1,
                    } = e,
                    { formatMessage: f, formatNumber: T } = (0, s.A)(),
                    k = (0, l.L)(() => {
                        let e = null == g ? void 0 : g((0, r.$)(m().text, m().artistLink), (0, r.$)(m().text, m().artistCaption));
                        if (!e && !y) return;
                        let t = (0, i.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, i.jsxs)('div', {
                            className: m().subtitle,
                            'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof y &&
                                    y > 0 &&
                                    (0, i.jsxs)('div', {
                                        className: m().likesCount,
                                        'aria-label': f({ id: 'entity-names.likes-counter' }, { counter: y }),
                                        'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, i.jsx)(o.I, {
                                                className: m().icon,
                                                variant: C ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, i.jsx)(c.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: T(y),
                                            }),
                                        ],
                                    }),
                                !!y && e && t,
                                e,
                                !!A && e && t,
                                (0, i.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', children: A }),
                            ],
                        });
                    });
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(m().root, { [m().root_disabled]: a, [m().root_disliked]: t }, p),
                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, i.jsxs)('div', {
                            className: m().titleContainer,
                            children: [
                                (0, i.jsxs)(c.HL, {
                                    className: (0, r.$)(m().text, m().title, { [m().title_withVersion]: h }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: b,
                                    type: 'text',
                                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        x,
                                        h &&
                                            (0, i.jsx)(c.HL, {
                                                className: (0, r.$)(m().text, m().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(h),
                                            }),
                                    ],
                                }),
                                v && (0, i.jsx)(d.N, { className: m().explicitMark, getDescriptionTexts: _, variant: v }),
                            ],
                        }),
                        u &&
                            (0, i.jsx)(c.HL, {
                                className: (0, r.$)(m().text, m().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: u,
                            }),
                        k,
                    ],
                });
            };
        },
        78299: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => f });
            var i = a(25839),
                r = a(82298),
                s = a(88204),
                n = a(74631),
                l = a(39004),
                o = a(8487);
            a(93588);
            var c = a(4071),
                d = a(66738),
                u = a(4254),
                m = a(67379),
                _ = a(36619),
                v = a(76945),
                p = a(59450),
                h = a(84e3),
                x = a(97952),
                g = a(89192),
                y = a(53712),
                C = a(15270),
                A = a(68854),
                b = a.n(A);
            let f = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    A = s({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: a } = (0, p.gf)(),
                        { pageId: i } = (0, x.$)(),
                        r = (0, h.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !a || !i) return;
                        let s = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: a,
                                pageId: i,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, v.z5)(t.evgenInstance, s);
                    }, [t, e, a, i, r]);
                })(A);
                let { sendRefreshEvent: f } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: a } = (0, x.$)(),
                            i = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !a) return;
                                let r = (0, m.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: a,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, v.bv)(e.evgenInstance, r);
                            }, [e, t, a, i]),
                        };
                    })(),
                    T = (0, n.useCallback)(() => {
                        (f(), (window.location.href = y.Z.main.href));
                    }, [f]),
                    { contentRef: k } = (0, g.g)();
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(b().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(C.L, { withBackwardFallback: '/', className: (0, r.$)(b().navigation, { [b().navigation_desktop]: !k }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(b().content, { [b().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(d.I, { className: b().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.DZ, { className: (0, r.$)(b().title, b().important), variant: 'h3', size: 'xs', children: A }),
                                (0, i.jsxs)(u.HL, {
                                    className: (0, r.$)(b().text, b().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(c.$, {
                                    onClick: T,
                                    className: b().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        79856: (e) => {
            e.exports = {
                buttonArrow: 'EntityCard_buttonArrow__ussa7',
                titleLink: 'EntityCard_titleLink__3ucPa',
                titleText: 'EntityCard_titleText___EU9t',
                root: 'EntityCard_root__HNsWx',
                root_disabled: 'EntityCard_root_disabled__qdBaH',
                ripple: 'EntityCard_ripple__iMHNo',
                playButtonCell: 'EntityCard_playButtonCell__AYoR5',
                controlsBarCell: 'EntityCard_controlsBarCell__GpbEX',
                text: 'EntityCard_text__hChwj',
            };
        },
        80499: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => h, s: () => x });
            var i = a(25839),
                r = a(88204),
                s = a(84059),
                n = a(74631),
                l = a(89288),
                o = a(36432),
                c = a(94421),
                d = a(99989),
                u = a(27954),
                m = a(83382);
            (0, r.eO)(!1);
            let _ = (0, n.createContext)(null),
                v = (e) => {
                    let { children: t, store: a, storeKey: r } = e,
                        s = (0, n.useMemo)(() => ({ store: a, storeKey: r }), [a, r]);
                    return (0, i.jsx)(_.Provider, { value: s, children: t });
                },
                p = (e) => {
                    let { nonce: t, patchKey: a, patchesRef: r } = e;
                    return (
                        (0, s.useServerInsertedHTML)(() => {
                            let e = r.current;
                            return ((r.current = []), 0 === e.length)
                                ? null
                                : (0, i.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, l.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(a, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                h = (e) => {
                    let { createStore: t, patchKey: a } = e,
                        r = () => {
                            var e, t;
                            let i = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[a]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[a], i);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: s, nonce: n } = e,
                                l = (0, m.Y)(),
                                o = (0, u.g)(),
                                { store: _, patchesRef: h } = (0, d.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: r,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(p, { nonce: n, patchKey: a, patchesRef: h }), (0, i.jsx)(v, { store: _, storeKey: a, children: s })],
                            });
                        },
                    };
                };
            function x(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, n.useContext)(_);
                if (!a || a.storeKey !== e) {
                    var i;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (i = null == a ? void 0 : a.storeKey) ? i : 'null', expectedStoreKey: e },
                    });
                }
                return a.store;
            }
        },
        80986: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => m });
            var i = a(25839),
                r = a(82298),
                s = a(74631),
                n = a(61493),
                l = a(9911),
                o = a(4071),
                c = a(66738),
                d = a(37922),
                u = a.n(d);
            let m = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: a,
                        forwardControlClassName: d,
                        className: m,
                        withSecondaryColor: _,
                        buttonSize: v = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: h, swipeForward: x, shouldBackwardButtonBeDisabled: g, shouldForwardButtonBeDisabled: y, shouldHideControls: C } = (0, l.Y)(t),
                    A = (0, s.useCallback)(
                        (e) => {
                            (h(), e.stopPropagation());
                        },
                        [h],
                    ),
                    b = (0, s.useCallback)(
                        (e) => {
                            (x(), e.stopPropagation());
                        },
                        [x],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(u().root, m),
                    'data-test-id': n.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, a, { [u().control_hidden]: C, [u().control_withSecondaryColor]: _ }),
                            onClick: A,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: g,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, d, { [u().control_hidden]: C, [u().control_withSecondaryColor]: _ }),
                            onClick: b,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: y,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        82196: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => w });
            var i = a(25839),
                r = a(74631),
                s = a(36619),
                n = a(71035),
                l = a(49656),
                o = a(20258),
                c = a(95314),
                d = a(10322),
                u = a(27954),
                m = a(82298),
                _ = a(88204),
                v = a(39004),
                p = a(61493),
                h = a(4071),
                x = a(35622),
                g = a(67379),
                y = a(76945),
                C = a(59450),
                A = a(84e3),
                b = a(79670),
                f = a(25488),
                T = a(97952),
                k = a(83243),
                S = a(96433),
                E = a(12714),
                I = a(49337),
                N = a(53168),
                L = a.n(N);
            let j = (0, _.PA)((e) => {
                    let { requestAwakeLumenModalRef: t } = e,
                        {
                            lumen: a,
                            settings: { isMobile: l },
                        } = (0, u.g)(),
                        { formatMessage: c } = (0, v.A)(),
                        { language: d } = (0, S.h)(),
                        _ = (0, r.useRef)(null),
                        [N, j] = (0, r.useState)(!1),
                        [w, R] = (0, r.useState)(!1),
                        M = (() => {
                            let e = (0, C.st)(),
                                { hash: t } = (0, C.gf)(),
                                a = (0, A.U)(),
                                { pageId: i, pageStyle: r, pagePlacement: l } = (0, T.$)(),
                                { objectId: c = '', objectType: d } = (0, f.J)();
                            return (0, n.c)((n) => {
                                let { actionType: u, mainObjectType: m = d, mainObjectId: _ = c, userInteractionType: v = s.UserInteractionType.Tap } = n;
                                if (!e || !t || !i || !o.xK.includes(i) || !o.fD.includes(i)) return;
                                let p = b.W[i];
                                if (!p) return;
                                let h = (0, g.F)({
                                    params: {
                                        hash: t,
                                        pageId: p,
                                        pageStyle: r,
                                        pagePlacement: l,
                                        mainObjectType: m,
                                        mainObjectId: _,
                                        actionType: u,
                                        userInteractionType: v,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnScreenActionPerformed',
                                });
                                h && (0, y.bv)(e.evgenInstance, h);
                            });
                        })(),
                        O = (0, k.l)({ mainObjectType: s.DomainObjectType.Lumen }),
                        P = (0, n.c)(async (e) => {
                            let t = a.isAwakened;
                            try {
                                e || (await a.getData(!0));
                            } finally {
                                (e || (!t && a.isAwakened && M({ actionType: s.ActionType.LumenAwakened }), O(!1), (_.current = null)), j(e));
                            }
                        }),
                        D = (0, n.c)(() => P(!1)),
                        B = (0, n.c)(() => {
                            var e;
                            (null == (e = _.current) || e.call(_), P(!1));
                        });
                    return (
                        (0, r.useEffect)(() => {
                            t.current = (e) => {
                                ((_.current = e), O(!0), j(!0));
                            };
                        }, [t, O]),
                        (0, r.useEffect)(() => {
                            if (!N) return void R(!1);
                            let e = window.setTimeout(() => R(!0), a.playButtonShowDelay);
                            return () => window.clearTimeout(e);
                        }, [N, a.playButtonShowDelay]),
                        (0, i.jsxs)(x.a, {
                            open: N,
                            onOpenChange: P,
                            onClose: D,
                            placement: l ? 'default' : 'center',
                            size: 'fitContent',
                            overlayColor: 'full',
                            className: (0, m.$)(L().root, (0, E.J)(I.S.Dark)),
                            headerClassName: L().header,
                            contentClassName: L().content,
                            closeOnOutsidePress: !0,
                            closeButtonDataTestId: p.S7.AWAKE_LUMEN_MODAL_CLOSE_BUTTON,
                            escapeKey: !0,
                            'data-test-id': p.S7.AWAKE_LUMEN_MODAL,
                            children: [
                                (0, i.jsx)('iframe', {
                                    referrerPolicy: 'no-referrer',
                                    sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                                    className: L().iframe,
                                    src: ''.concat('https://lumen.yandex.ru/lumen/birth?utm_source=music&utm_medium=q2v', '&lang=').concat(d),
                                    'data-test-id': p.S7.AWAKE_LUMEN_MODAL_IFRAME,
                                }),
                                (0, i.jsx)(h.$, {
                                    className: (0, m.$)(L().playButton, w && L().playButtonVisible),
                                    radius: 'xxxl',
                                    size: 'default',
                                    variant: 'default',
                                    color: 'primary',
                                    onClick: B,
                                    'data-test-id': p.S7.AWAKE_LUMEN_MODAL_PLAY_BUTTON,
                                    children: c({ id: 'player-actions.listen' }),
                                }),
                            ],
                        })
                    );
                }),
                w = () => {
                    let { lumen: e } = (0, u.g)(),
                        t = (0, r.useRef)(() => void 0),
                        a = (0, n.c)((e) => t.current(e));
                    return {
                        awakeLumenModal: (0, l.L)(() => {
                            if (e.isEnabled)
                                return (0, i.jsx)(d.n, {
                                    pageEntityId: '',
                                    pageId: o._Q.LUMEN_AWAKENING_SCREEN,
                                    pageStyle: s.PageStyles.Sheet,
                                    pagePlacement: s.PagePlacements.Bottom,
                                    children: (0, i.jsx)(c.B, {
                                        objectId: '',
                                        objectType: s.DomainObjectType.Lumen,
                                        children: (0, i.jsx)(j, { requestAwakeLumenModalRef: t }),
                                    }),
                                });
                        }),
                        requestAwakeLumenModal: a,
                    };
                };
        },
        82706: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => i });
            let i = {
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
        82967: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => g });
            var i = a(25839),
                r = a(82298),
                s = a(88204),
                n = a(74631),
                l = a(61493),
                o = a(54880),
                c = a(50209),
                d = a(27954),
                u = a(6349),
                m = a(62661),
                _ = a(74756),
                v = a(41544),
                p = a(39099),
                h = a(7929),
                x = a.n(h);
            let g = (0, s.PA)((e) => {
                var t;
                let {
                        track: a,
                        playContextParams: s,
                        className: h,
                        withDNDBlock: g,
                        isDragging: y,
                        draggingClassName: C,
                        ignoreDislikedStyles: A,
                        withSecondaryColor: b,
                        handleRemove: f,
                        withDislike: T,
                        withTrailer: k = !0,
                        beforeTitle: S,
                        removeButtonAriaLabel: E,
                        hideControls: I,
                    } = e,
                    N = (0, c.D)({ playContextParams: s, entityId: a.entityId }),
                    {
                        settings: { isMobile: L },
                    } = (0, d.g)(),
                    j = (0, o.X)(a.trackSource, { isMobile: L }),
                    w = (0, n.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: x().playButtonCell,
                                ignoreDislikedStyles: A,
                                radius: 'xs',
                                ...e,
                            }),
                        [A, a.coverUri, a.isAvailable, a.isDisliked, a.title],
                    );
                return (0, i.jsx)(p.C, {
                    className: (0, r.$)(h, { [x().trackWithDots]: g, [x().important]: g }),
                    track: a,
                    beforeBlock: g ? (0, i.jsx)(m.O, { className: (0, r.$)(x().dots, C), isDragging: y }) : void 0,
                    meta: (0, i.jsx)(v.j, { withArtistLink: j, beforeTitle: S, track: a, ignoreDislikedStyles: A, withSecondaryColor: b }),
                    playButtonCellRender: w,
                    controls: (0, i.jsx)(_.Q, {
                        track: a,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: A,
                        utmLink: null == (t = s.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: b,
                        handleRemove: f,
                        withDislike: T,
                        withTrailer: k,
                        removeButtonAriaLabel: E,
                        hideControls: I,
                    }),
                    ...N,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        83243: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => _ });
            var i = a(74631),
                r = a(67379),
                s = a(36619),
                n = a(76945),
                l = a(59450),
                o = a(71035),
                c = a(84e3),
                d = a(79670),
                u = a(97952),
                m = a(72594);
            let _ = (e) => {
                let { mainObjectType: t } = e,
                    a = (0, i.useRef)(!1),
                    _ = (0, i.useRef)(!1),
                    v = (0, l.st)(),
                    p = (0, c.U)(),
                    { hash: h } = (0, l.gf)(),
                    { pageId: x, pageEntityId: g, pageStyle: y, pagePlacement: C } = (0, u.$)(),
                    { tabId: A, tabPos: b, isTabSelectedByDefault: f } = (0, m.R)();
                return (0, o.c)((e) => {
                    if (!v || !x || 'string' != typeof g) return;
                    let i = {
                        hash: h,
                        pageId: d.W[x],
                        pageStyle: y || s.PageStyles.Fullscreen,
                        pagePlacement: C || s.PagePlacements.Fullscreen,
                        mainObjectType: t,
                        mainObjectId: g,
                    };
                    void 0 !== A && ((i.tabId = A), (i.tabPos = b), (i.isTabSelectedByDefault = f));
                    let l = (0, r.F)({ params: i, logger: p, context: 'useSendEventOnScreenOpenedOrClosed' });
                    l && (e && !a.current && ((0, n.w5)(v.evgenInstance, l), (a.current = !0)), e || _.current || ((0, n.XB)(v.evgenInstance, l), (_.current = !0)));
                });
            };
        },
        83918: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => r });
            var i = a(74631);
            let r = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        84215: (e, t, a) => {
            (Promise.resolve().then(a.bind(a, 54310)), Promise.resolve().then(a.bind(a, 93122)), Promise.resolve().then(a.bind(a, 18436)));
        },
        85957: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        86209: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => d });
            var i = a(25839),
                r = a(82298),
                s = a(50314),
                n = a(49656),
                l = a(6349),
                o = a(4111),
                c = a.n(o);
            let d = (e) => {
                let {
                        agent: t,
                        isPlaying: a,
                        isCurrent: o,
                        onPlayButtonClick: d,
                        shouldShowControl: u = !0,
                        playButtonIconSize: m,
                        alt: _,
                        className: v,
                        coverClassName: p,
                        entityCoverClassName: h,
                        controlClassName: x,
                        fallbackIconSize: g,
                    } = e,
                    y = (0, n.L)(() => {
                        if (t.entityType) return t.entityType === s.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, i.jsx)(l.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, r.$)(c().root, c()['root_radius_'.concat(y)], { [c().root_withShadow]: !!t.entityType }, v),
                    radius: y,
                    onPlayButtonClick: d,
                    isPlaying: a,
                    isCurrent: o,
                    alt: _,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: m,
                    fallbackIconSize: g,
                    coverClassName: p,
                    entityCoverClassName: h,
                    controlClassName: x,
                });
            };
        },
        89192: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => r, g: () => s });
            var i = a(74631);
            let r = (0, i.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                s = () => (0, i.useContext)(r);
        },
        89514: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        90780: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => c });
            var i = a(25839),
                r = a(74631),
                s = a(61493),
                n = a(4254),
                l = a(44408),
                o = a.n(l);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: a } = e,
                    [l, c] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    l)
                )
                    return l.map((e, t) =>
                        (0, i.jsx)(
                            n.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': s.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(a, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        92870: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        93122: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryPage: () => eS });
            var i = a(25839),
                r = a(82298),
                s = a(88204),
                n = a(74631),
                l = a(8487),
                o = a(61493),
                c = a(13833),
                d = a(5867),
                u = a(4254),
                m = a(39004);
            let _ = () => {
                let { formatDate: e, formatRelativeTime: t } = (0, m.A)();
                return (0, n.useCallback)(
                    function (a) {
                        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            r = new Date(a),
                            s = new Date();
                        (r.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0));
                        let n = (r.getTime() - s.getTime()) / 864e5,
                            l = t(n, 'day', { numeric: 'auto' }),
                            o = e(a, { day: 'numeric', month: 'long' });
                        switch (n) {
                            case 0:
                            case -1:
                            case -2:
                                if (i) return ''.concat(l, ', ').concat(o);
                                return l;
                            default:
                                return o;
                        }
                    },
                    [e, t],
                );
            };
            var v = a(29877),
                p = a(82196),
                h = a(26237),
                x = a(80499),
                g = a(82706),
                y = a(27954);
            let C = (0, n.createContext)({ observeElement: () => {}, unobserveElement: () => {} });
            var A = a(22939),
                b = a(4331),
                f = a(30290),
                T = a(18412),
                k = a(16949);
            let S = (e) => {
                    let { entityId: t, from: a } = e;
                    return { contextData: { type: A.K.Various, meta: { id: t }, from: a }, queueParams: { index: 0 }, loadContextMeta: !0 };
                },
                E = (e) => {
                    let { id: t, tabIndex: a, blockIndex: i, trackIndex: r } = e,
                        s = (0, x.s)(g.n.MUSIC_HISTORY),
                        l = (0, n.useId)(),
                        o = (0, n.useRef)(null),
                        { observeElement: c, unobserveElement: d } = (0, n.useContext)(C);
                    return (
                        (0, n.useEffect)(() => {
                            let e = void 0 !== r ? ''.concat(a, '_').concat(i, '_').concat(r, '_').concat(t) : ''.concat(a, '_').concat(i, '_').concat(t),
                                n = s.indexesMap.get(e);
                            s.isInObservationRange(n) &&
                                c({
                                    elementRef: o,
                                    elementId: l,
                                    index: n,
                                    onShow() {
                                        (s.getItems(this.index), d(l));
                                    },
                                });
                        }, [i, t, l, s, c, a, r, d]),
                        { intersectionPropertyId: l, ref: o }
                    );
                };
            var I = a(4805),
                N = a(82967),
                L = a(3718),
                j = a(97805),
                w = a(49075),
                R = a.n(w);
            let M = (0, s.PA)((e) => {
                let { type: t, track: a, artists: r, tabIndex: s, blockIndex: n, trackIndex: l, playContextParams: o } = e,
                    { ref: c, intersectionPropertyId: d } = E({ id: a.id, tabIndex: s, blockIndex: n, trackIndex: l });
                return a.isShimmerVisible || !a.data
                    ? (0, i.jsx)('div', {
                          'data-intersection-property-id': d,
                          ref: c,
                          children: (0, i.jsx)(j.D, {
                              isActive: a.isShimmerActive,
                              'data-intersection-property-id': d,
                              className: R().trackShimmer,
                              variant: t === A.K.Album ? L.X.ALBUM : L.X.PLAYLIST,
                          }),
                      })
                    : t === A.K.Album
                      ? (0, i.jsx)(I.F, { track: a.data, position: a.data.index, albumArtists: r, playContextParams: o })
                      : (0, i.jsx)(N.K, { track: a.data, playContextParams: o });
            });
            var O = a(47797),
                P = a.n(O);
            let D = (0, s.PA)((e) => {
                    var t, a, s, c, d;
                    let { album: m, tabIndex: _, blockIndex: v } = e,
                        { ref: p, intersectionPropertyId: h } = E({ id: m.id, tabIndex: _, blockIndex: v }),
                        { from: x } = (0, f.f)({ blockId: 'album-'.concat(m.id) }),
                        g = (0, n.useMemo)(() => {
                            var e, t;
                            return m.available
                                ? (0, i.jsx)(b.i, {
                                      className: P().artists,
                                      linkClassName: P().artistLink,
                                      artists: null == (e = m.meta) ? void 0 : e.artists,
                                      lineClamp: 1,
                                  })
                                : null == (t = m.meta)
                                  ? void 0
                                  : t.artistNames;
                        }, [m.available, null == (t = m.meta) ? void 0 : t.artistNames, null == (a = m.meta) ? void 0 : a.artists]),
                        y = (0, n.useMemo)(() => {
                            var e, t, a;
                            return m.isShimmerVisible
                                ? (0, i.jsx)(k.M, { isActive: m.isShimmerActive, className: P().header, withDescription: !0 })
                                : (0, i.jsx)(T.T, {
                                      className: P().header,
                                      coverUrl: null == (e = m.meta) ? void 0 : e.coverUri,
                                      title: null == (t = m.meta) ? void 0 : t.title,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      description: g,
                                      titleClassName: P().headerTitle,
                                      viewAllActionLink: null == (a = m.meta) ? void 0 : a.url,
                                      available: m.available,
                                      fallbackIconVariant: 'album',
                                      headingVariant: 'h4',
                                      withCover: !0,
                                      withDescription: !!g,
                                  });
                        }, [
                            m.available,
                            m.isShimmerActive,
                            m.isShimmerVisible,
                            null == (s = m.meta) ? void 0 : s.coverUri,
                            null == (c = m.meta) ? void 0 : c.title,
                            null == (d = m.meta) ? void 0 : d.url,
                            g,
                        ]),
                        C = (0, n.useMemo)(
                            () =>
                                m.tracks.map((e, t) => {
                                    var a;
                                    let r = S({ entityId: e.entityId, from: x });
                                    return (0, i.jsx)(
                                        M,
                                        { type: A.K.Album, track: e, playContextParams: r, tabIndex: _, blockIndex: v, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [m.tracks, x, _, v],
                        );
                    return (0, i.jsxs)('section', {
                        className: P().root,
                        ref: p,
                        'data-intersection-property-id': h,
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_ALBUM_BLOCK,
                        children: [
                            (0, i.jsx)(u.DZ, {
                                className: (0, r.$)(P().header, P().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ALBUM,
                                children: (0, i.jsx)(l.A, { id: 'music-history.album' }),
                            }),
                            y,
                            (0, i.jsx)('div', { className: P().content, children: C }),
                        ],
                    });
                }),
                B = (0, s.PA)((e) => {
                    var t, a, s;
                    let { artist: c, tabIndex: d, blockIndex: m } = e,
                        { ref: _, intersectionPropertyId: v } = E({ id: c.id, tabIndex: d, blockIndex: m }),
                        { from: p } = (0, f.f)({ blockId: 'artist-'.concat(c.id) }),
                        h = (0, n.useMemo)(() => {
                            var e, t, a;
                            return c.isShimmerVisible
                                ? (0, i.jsx)(k.M, { isActive: c.isShimmerActive, className: P().header, coverRadius: 'round' })
                                : (0, i.jsx)(T.T, {
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      className: P().header,
                                      coverUrl: null == (e = c.meta) ? void 0 : e.coverUri,
                                      title: null == (t = c.meta) ? void 0 : t.name,
                                      titleClassName: P().headerTitle,
                                      viewAllActionLink: null == (a = c.meta) ? void 0 : a.url,
                                      available: c.available,
                                      withCover: !0,
                                      coverRadius: 'round',
                                      headingVariant: 'h4',
                                  });
                        }, [
                            c.available,
                            c.isShimmerActive,
                            c.isShimmerVisible,
                            null == (t = c.meta) ? void 0 : t.coverUri,
                            null == (a = c.meta) ? void 0 : a.name,
                            null == (s = c.meta) ? void 0 : s.url,
                        ]),
                        x = (0, n.useMemo)(
                            () =>
                                c.tracks.map((e, t) => {
                                    var a;
                                    let r = S({ entityId: e.entityId, from: p });
                                    return (0, i.jsx)(
                                        M,
                                        { type: A.K.Artist, track: e, playContextParams: r, tabIndex: d, blockIndex: m, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [c.tracks, p, d, m],
                        );
                    return (0, i.jsxs)('section', {
                        className: P().root,
                        ref: _,
                        'data-intersection-property-id': v,
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_ARTIST_BLOCK,
                        children: [
                            (0, i.jsx)(u.DZ, {
                                className: (0, r.$)(P().header, P().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ARTIST,
                                children: (0, i.jsx)(l.A, { id: 'music-history.artist' }),
                            }),
                            h,
                            (0, i.jsx)('div', { className: P().content, children: x }),
                        ],
                    });
                });
            var H = a(19e3),
                K = a(57954),
                V = a(70825);
            let W = (0, s.PA)((e) => {
                    let { common: t, tabIndex: a, blockIndex: s } = e,
                        { ref: c, intersectionPropertyId: d } = E({ id: t.id, tabIndex: a, blockIndex: s }),
                        { from: m } = (0, f.f)(),
                        _ = ((e) =>
                            (0, n.useMemo)(
                                () => (e === v.D.SEARCH ? (0, V.t)({ contextType: A.K.Various, contextId: '', entityContextType: K.h.MUSIC_HISTORY_SEARCH }) : null),
                                [e],
                            ))(t.type),
                        p = (0, n.useMemo)(
                            () =>
                                t.tracks.map((e, t) => {
                                    var r;
                                    let n = S({ entityId: e.entityId, from: m });
                                    return (0, i.jsx)(
                                        M,
                                        { playContextParams: n, type: A.K.Various, track: e, tabIndex: a, blockIndex: s, trackIndex: t },
                                        null == (r = e.data) ? void 0 : r.getKey(t),
                                    );
                                }),
                            [t.tracks, m, a, s],
                        ),
                        h = (0, n.useMemo)(() => {
                            switch (t.type) {
                                case v.D.OTHER:
                                    return (0, i.jsx)(l.A, { id: 'music-history.shuffle' });
                                case v.D.SEARCH:
                                    return (0, i.jsx)(l.A, { id: 'music-history.search' });
                            }
                        }, [t.type]);
                    return (0, i.jsx)(H._, {
                        sourceContextData: _,
                        children: (0, i.jsxs)('section', {
                            className: P().root,
                            ref: c,
                            'data-intersection-property-id': d,
                            'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_COMMON_BLOCK,
                            children: [
                                (0, i.jsx)(u.DZ, {
                                    className: (0, r.$)(P().header, P().heading),
                                    variant: 'h3',
                                    'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_COMMON,
                                    children: h,
                                }),
                                (0, i.jsx)('div', { className: P().content, children: p }),
                            ],
                        }),
                    });
                }),
                U = (0, s.PA)((e) => {
                    var t, a, s, c, d;
                    let { playlist: _, tabIndex: v, blockIndex: p } = e,
                        { ref: h, intersectionPropertyId: x } = E({ id: _.id, tabIndex: v, blockIndex: p }),
                        { from: g } = (0, f.f)({ blockId: _.isResolved ? 'playlist-'.concat(null == (t = _.meta) ? void 0 : t.id) : '' }),
                        { formatMessage: y } = (0, m.A)(),
                        C = (0, n.useMemo)(() => {
                            var e, t, a, r;
                            return _.isShimmerVisible
                                ? (0, i.jsx)(k.M, { isActive: _.isShimmerActive, className: P().header, withDescription: !0 })
                                : (0, i.jsx)(T.T, {
                                      className: P().header,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      coverUrl: null == (e = _.meta) ? void 0 : e.coverUri,
                                      title: null == (t = _.meta) ? void 0 : t.title,
                                      titleClassName: P().headerTitle,
                                      description: y({ id: 'entity-names.number-of-tracks' }, { counter: null == (a = _.meta) ? void 0 : a.tracksCount }),
                                      fallbackIconVariant: 'playlist',
                                      withCover: !0,
                                      viewAllActionLink: null == (r = _.meta) ? void 0 : r.url,
                                      headingVariant: 'h4',
                                      withDescription: !0,
                                  });
                        }, [
                            y,
                            _.isShimmerActive,
                            _.isShimmerVisible,
                            null == (a = _.meta) ? void 0 : a.coverUri,
                            null == (s = _.meta) ? void 0 : s.title,
                            null == (c = _.meta) ? void 0 : c.tracksCount,
                            null == (d = _.meta) ? void 0 : d.url,
                        ]),
                        b = (0, n.useMemo)(
                            () =>
                                _.tracks.map((e, t) => {
                                    var a;
                                    let r = S({ entityId: e.entityId, from: g });
                                    return (0, i.jsx)(
                                        M,
                                        { playContextParams: r, type: A.K.Playlist, track: e, tabIndex: v, blockIndex: p, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [_.tracks, g, v, p],
                        );
                    return (0, i.jsxs)('section', {
                        className: P().root,
                        ref: h,
                        'data-intersection-property-id': x,
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_PLAYLIST_BLOCK,
                        children: [
                            (0, i.jsx)(u.DZ, {
                                className: (0, r.$)(P().header, P().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_PLAYLIST,
                                children: (0, i.jsx)(l.A, { id: 'music-history.playlist' }),
                            }),
                            C,
                            (0, i.jsx)('div', { className: P().content, children: b }),
                        ],
                    });
                });
            var Y = a(51707),
                z = a(40110);
            let G = (0, s.PA)((e) => {
                let { requestAwakeLumenModal: t, vibe: a, blockIndex: s, tabIndex: l } = e,
                    { ref: c, intersectionPropertyId: d } = E({ id: a.id, blockIndex: s, tabIndex: l }),
                    { from: u } = (0, f.f)({ blockId: ''.concat(z.U.RADIO, '-').concat(z.U.Q2V, '-').concat(a.id) }),
                    m = (0, n.useMemo)(
                        () =>
                            a.tracks.map((e, t) => {
                                var a;
                                let r = S({ entityId: e.entityId, from: u });
                                return (0, i.jsx)(
                                    M,
                                    { playContextParams: r, type: A.K.Vibe, track: e, blockIndex: s, tabIndex: l, trackIndex: t },
                                    null == (a = e.data) ? void 0 : a.getKey(t),
                                );
                            }),
                        [a.tracks, u, l, s],
                    );
                return a.meta
                    ? (0, i.jsxs)('section', {
                          className: P().root,
                          ref: c,
                          'data-intersection-property-id': d,
                          'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_QUERY_TO_VIBE_BLOCK,
                          children: [
                              (0, i.jsx)(Y.K, { className: (0, r.$)(P().queryToVibeHeader, P().heading), requestAwakeLumenModal: t, vibe: a.meta }),
                              (0, i.jsx)('div', { className: P().content, children: m }),
                          ],
                      })
                    : null;
            });
            var F = a(71035),
                $ = a(49656),
                X = a(86209),
                q = a(79367),
                Q = a(26742),
                J = a(97952),
                Z = a(87201),
                ee = a(44806),
                et = a(51514),
                ea = a(5668),
                ei = a(18284),
                er = a(6349);
            let es = (0, s.PA)((e) => {
                var t, a, s, c, d, m;
                let { vibe: _, blockIndex: v, tabIndex: p } = e,
                    {
                        experiments: h,
                        settings: { isMobile: x },
                        freeAccess: g,
                    } = (0, y.g)(),
                    { pageId: C } = (0, J.$)(),
                    { blockIdForFrom: b } = (0, Q.N)(),
                    I = (0, q.P)(),
                    [N, L] = (0, n.useState)(!1),
                    {
                        isPlaying: j,
                        togglePlay: w,
                        isCurrent: R,
                    } = (0, Z.B)({ seeds: (null == (t = _.meta) ? void 0 : t.seeds) || [et.M1], pageIdForFrom: C, blockIdForFrom: b }),
                    O = (0, n.useId)(),
                    D = h.checkExperiment(ee.z.WebNextVibeDescription, 'on'),
                    B = _.isMultivibe,
                    H = B ? 'xs' : 'm',
                    { ref: K, intersectionPropertyId: V } = E({ id: _.id, blockIndex: v, tabIndex: p }),
                    { from: W } = (0, f.f)({ blockId: 'wave-'.concat(_.id) }),
                    U = (0, F.c)(() => {
                        if (!I()) {
                            if (g.isVibeStartRestricted) return void L(!0);
                            w();
                        }
                    }),
                    Y = (0, F.c)((e) => {
                        if (x || 2 === e.detail) return void U();
                    }),
                    z = (0, $.L)(() => {
                        var e, t, a, i, r, s, n, l;
                        return D
                            ? {
                                  title: null == (e = _.meta) ? void 0 : e.title,
                                  description:
                                      null == (i = _.meta)
                                          ? void 0
                                          : i.getDescription(null != (l = null == (t = _.meta) ? void 0 : t.title) ? l : null == (a = _.meta) ? void 0 : a.description),
                              }
                            : { title: null != (n = null == (r = _.meta) ? void 0 : r.title) ? n : null == (s = _.meta) ? void 0 : s.description };
                    }),
                    G = (0, n.useCallback)(() => {
                        var e, t, a, s, n;
                        return (null == (e = _.meta) ? void 0 : e.shouldShowAgent) && (null == (t = _.meta) ? void 0 : t.agent)
                            ? (0, i.jsx)(X.n, {
                                  agent: _.meta.agent,
                                  isPlaying: j,
                                  isCurrent: R,
                                  onPlayButtonClick: U,
                                  className: (0, r.$)(P().vibeCover, { [P().multivibeContainer]: B }),
                                  playButtonIconSize: H,
                                  fallbackIconSize: H,
                                  coverClassName: (0, r.$)({ [P().multivibeCover]: B }),
                                  entityCoverClassName: (0, r.$)({ [P().multivibeAvatar]: B }),
                                  controlClassName: (0, r.$)({ [P().multivibeControl]: B }),
                              })
                            : (0, i.jsx)(er.q, {
                                  isCurrent: R,
                                  isPlaying: j,
                                  isAvailable: !0,
                                  onPlayButtonClick: U,
                                  title: null == (a = _.meta) ? void 0 : a.title,
                                  entityCoverStyle: { backgroundColor: null == (s = _.meta) ? void 0 : s.backgroundColor },
                                  ariaDescribedBy: O,
                                  coverUri: null == (n = _.meta) ? void 0 : n.imageUrl,
                                  radius: 'round',
                                  withLoadingIndicator: !1,
                                  className: (0, r.$)(P().vibeCover, { [P().multivibeContainer]: B }),
                                  playButtonIconSize: H,
                                  fallbackIconSize: H,
                                  coverClassName: (0, r.$)({ [P().multivibeCover]: B }),
                                  entityCoverClassName: (0, r.$)({ [P().multivibeAvatar]: B }),
                                  controlClassName: (0, r.$)({ [P().multivibeControl]: B }),
                              });
                    }, [
                        U,
                        R,
                        j,
                        O,
                        null == (a = _.meta) ? void 0 : a.agent,
                        null == (s = _.meta) ? void 0 : s.backgroundColor,
                        null == (c = _.meta) ? void 0 : c.imageUrl,
                        null == (d = _.meta) ? void 0 : d.shouldShowAgent,
                        null == (m = _.meta) ? void 0 : m.title,
                        B,
                        H,
                    ]),
                    es = (0, $.L)(() => {
                        var e;
                        return _.isShimmerVisible
                            ? (0, i.jsx)(k.M, { isActive: _.isShimmerActive, className: P().header, coverRadius: 'round' })
                            : (0, i.jsxs)(ei.C, {
                                  className: (0, r.$)(P().header, P().vibeHeader),
                                  onClick: Y,
                                  'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_HEADER,
                                  children: [
                                      (0, i.jsx)(ea.S, {
                                          isOpened: N,
                                          onOpenChange: L,
                                          isEnabled: g.isVibeStartRestricted,
                                          placement: 'bottom',
                                          textVariant: 'vibe',
                                          vibeTextVariant: null == (e = _.meta) ? void 0 : e.stationType,
                                          renderChildren: G,
                                      }),
                                      (0, i.jsx)(T.T, { titleSize: 'xs', titleLineClamp: 1, headingVariant: 'h4', labeledForId: O, className: P().vibeTextBlock, ...z }),
                                  ],
                              });
                    }),
                    en = (0, n.useMemo)(
                        () =>
                            _.tracks.map((e, t) => {
                                var a;
                                let r = S({ entityId: e.entityId, from: W });
                                return (0, i.jsx)(
                                    M,
                                    { playContextParams: r, type: A.K.Vibe, track: e, blockIndex: v, tabIndex: p, trackIndex: t },
                                    null == (a = e.data) ? void 0 : a.getKey(t),
                                );
                            }),
                        [_.tracks, W, p, v],
                    );
                return (0, i.jsxs)('section', {
                    className: P().root,
                    ref: K,
                    'data-intersection-property-id': V,
                    'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_VIBE_BLOCK,
                    children: [
                        !D &&
                            (0, i.jsx)(u.DZ, {
                                className: (0, r.$)(P().header, P().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_VIBE,
                                children: (0, i.jsx)(l.A, { id: 'music-history.my-vibe' }),
                            }),
                        es,
                        (0, i.jsx)('div', { className: P().content, children: en }),
                    ],
                });
            });
            var en = a(29131),
                el = a.n(en);
            let eo = (0, s.PA)((e) => {
                let { tab: t, tabIndex: a, onTabShowOrHide: r, shouldHideInactiveTab: s, ...l } = e,
                    { lumen: c } = (0, y.g)(),
                    d = (0, x.s)(g.n.MUSIC_HISTORY),
                    { awakeLumenModal: m, requestAwakeLumenModal: A } = (0, p.z)(),
                    b = (0, h.f)(),
                    f = (0, n.useMemo)(() => {
                        var e;
                        return null == (e = t.blocks)
                            ? void 0
                            : e
                                  .map((e, t) => {
                                      switch (e.type) {
                                          case v.D.ALBUM:
                                              return (0, i.jsx)(D, { album: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.PLAYLIST:
                                              return (0, i.jsx)(U, { playlist: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.MULTIVIBE_WAVE:
                                          case v.D.WAVE:
                                              return (0, i.jsx)(es, { vibe: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.ARTIST:
                                              return (0, i.jsx)(B, { artist: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.SEARCH:
                                          case v.D.OTHER:
                                              return (0, i.jsx)(W, { common: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.QUERY_TO_VIBE:
                                              return b
                                                  ? (0, i.jsx)(G, { requestAwakeLumenModal: A, vibe: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t))
                                                  : null;
                                          default:
                                              return null;
                                      }
                                  })
                                  .filter((e) => e);
                    }, [t.blocks, a, b, A]),
                    T = _(),
                    k = (0, n.useRef)(null),
                    { observeElement: S } = (0, n.useContext)(C),
                    E = d.datesMap.get(t.date);
                return (
                    (0, n.useEffect)(() => {
                        S({
                            elementId: t.date,
                            elementRef: k,
                            index: 0,
                            onShow: () => {
                                (d.setDatesMap(t.date, !0), r());
                            },
                            onHide: () => {
                                (d.setDatesMap(t.date, !1), r());
                            },
                        });
                    }, [d, d.datesMap, S, r, t.date]),
                    (0, n.useEffect)(() => {
                        c.isEnabled && c.getData();
                    }, [c]),
                    (0, i.jsxs)('div', {
                        'aria-hidden': !E && s,
                        ref: k,
                        'data-intersection-property-id': t.date,
                        className: el().root,
                        ...l,
                        ...{ inert: !!(!E && s) },
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB,
                        children: [
                            m,
                            (0, i.jsx)(u.DZ, {
                                'data-date-anchor': t.date,
                                className: el().date,
                                variant: 'h2',
                                size: 'm',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_DATE,
                                children: T(t.date),
                            }),
                            (0, i.jsx)('div', { className: el().content, children: f }),
                        ],
                    })
                );
            });
            var ec = a(78299),
                ed = a(20258),
                eu = a(10322),
                em = a(89192),
                e_ = a(30716),
                ev = a(69041),
                ep = a(99401),
                eh = a(26076),
                ex = a(15270),
                eg = a(79396),
                ey = a(9931),
                eC = a(91886);
            let eA = (e) => {
                    let { children: t } = e,
                        a = (0, n.useRef)({}),
                        r = (0, n.useMemo)(
                            () =>
                                (0, eC.Gv)((e) => {
                                    var t, i;
                                    let r = (0, eC.L5)(e.target),
                                        s = a.current[r];
                                    e.isIntersecting ? null == s || null == (t = s.onShow) || t.call(s) : null == s || null == (i = s.onHide) || i.call(s);
                                }),
                            [],
                        );
                    (0, n.useEffect)(() => () => (null == r ? void 0 : r.disconnect()), [r]);
                    let s = (0, n.useCallback)(
                            (e) => {
                                !a.current[e.elementId] && e.elementRef.current && (null == r || r.observe(e.elementRef.current), (a.current[e.elementId] = e));
                            },
                            [r],
                        ),
                        l = (0, n.useCallback)(
                            (e) => {
                                let t = a.current[e];
                                t && t.elementRef.current && (null == r || r.unobserve(t.elementRef.current));
                            },
                            [r],
                        ),
                        o = (0, n.useMemo)(() => ({ observeElement: s, unobserveElement: l }), [s, l]);
                    return (0, i.jsx)(C.Provider, { value: o, children: t });
                },
                eb = async (e, t) =>
                    new Promise((a) => {
                        if ('onscrollend' in window) {
                            var i;
                            let r = () => {
                                var e;
                                (a(), null == (e = t.current) || e.removeEventListener('scrollend', r));
                            };
                            (null == (i = t.current) || i.addEventListener('scrollend', r), e.scrollIntoView({ behavior: 'smooth' }));
                        } else (e.scrollIntoView({ behavior: 'smooth' }), window.setTimeout(a, 1e3));
                    });
            var ef = a(31381),
                eT = a.n(ef),
                ek = a(66834);
            let eS = (0, s.PA)(() => {
                let [e, t] = (0, n.useState)(!1),
                    a = (0, x.s)(g.n.MUSIC_HISTORY),
                    { contentScrollRef: s, setContentScrollRef: m } = (0, em.g)(),
                    v = (0, d.zb)(0),
                    p = (0, n.useRef)(!1),
                    h = (0, n.useRef)(null),
                    y = (0, n.useCallback)(
                        async (e) => {
                            var i;
                            t(!0);
                            let r = a.dates[e];
                            if (!r) return;
                            (null == (i = v.onTabChange) || i.call(v, e), (p.current = !0));
                            let n = document.querySelector('[data-date-anchor="'.concat(r, '"]'));
                            (n && ((h.current = s), await eb(n, h)), (p.current = !1));
                        },
                        [a.dates, v, s],
                    ),
                    C = (0, n.useCallback)(() => {
                        if (p.current) return;
                        let e = a.dates.findIndex((e) => a.datesMap.get(e));
                        if (e >= 0) {
                            var t;
                            null == (t = v.onTabChange) || t.call(v, e);
                        }
                    }, [a.dates, a.datesMap, v]);
                ((0, n.useEffect)(() => () => a.reset(), [a]), (0, e_.J)(a.isResolved));
                let A = (0, n.useMemo)(() => {
                        var t;
                        return a.isRejected
                            ? (0, i.jsx)(ec.SomethingWentWrong, { className: (0, r.$)(eT().error, eT().important), withBackwardControl: !1 })
                            : a.isShimmerVisible
                              ? (0, i.jsx)(ek.v, { isActive: a.isShimmerActive })
                              : a.isEmpty
                                ? (0, i.jsx)('div', {
                                      className: eT().empty,
                                      children: (0, i.jsx)(u.HL, {
                                          variant: 'div',
                                          size: 'm',
                                          weight: 'normal',
                                          children: (0, i.jsx)(l.A, { id: 'music-history.empty-title' }),
                                      }),
                                  })
                                : null == (t = a.tabs)
                                  ? void 0
                                  : t.map((t, a) =>
                                        (0, i.jsx)(eo, { onTabShowOrHide: C, 'data-intersection-property-id': t.date, tab: t, tabIndex: a, shouldHideInactiveTab: e }, a),
                                    );
                    }, [C, a.isEmpty, a.isRejected, a.isShimmerActive, a.isShimmerVisible, a.tabs, e]),
                    b = _(),
                    f = (0, n.useMemo)(
                        () =>
                            (0, i.jsx)(ey.wI, {
                                isShimmerVisible: a.isShimmerVisible,
                                className: eT().tabs,
                                ...v,
                                onTabChange: y,
                                shimmer: (0, i.jsx)(ey.zr, {
                                    className: eT().tabs,
                                    shimmerClassName: (0, r.$)(eT().tab, { [eT().tab_isLoading]: a.isShimmerVisible }),
                                    count: 5,
                                }),
                                children: a.dates.map((e, t) =>
                                    (0, i.jsx)(
                                        eg.o,
                                        {
                                            className: (0, r.$)(eT().tab, { [eT().tab_selected]: t === v.value }),
                                            titleClassName: eT().date,
                                            'aria-label': b(e, !1),
                                            title: b(e, !1),
                                            value: t,
                                        },
                                        t,
                                    ),
                                ),
                            }),
                        [b, y, a.dates, a.isShimmerVisible, v],
                    );
                return (
                    a.isNeededToLoad && (0, n.use)(a.getMusicHistory()),
                    (0, i.jsx)(eu.n, {
                        pageId: ed._Q.HISTORY,
                        children: (0, i.jsxs)('div', {
                            className: eT().root,
                            'data-test-id': o.Xk.musicHistory.MUSIC_HISTORY_PAGE,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: eT().headerContainer,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: eT().header,
                                            children: [
                                                (0, i.jsx)(ex.L, { withForwardControl: !1 }),
                                                (0, i.jsx)(u.DZ, {
                                                    variant: 'h1',
                                                    weight: 'bold',
                                                    size: 'xl',
                                                    lineClamp: 1,
                                                    children: (0, i.jsx)(l.A, { id: 'music-history.title' }),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(ev.F, { className: eT().carousel, carouselElement: f }),
                                    ],
                                }),
                                (0, i.jsxs)(c.N, {
                                    ref: m,
                                    className: eT().scroll,
                                    containerClassName: eT().scrollContainer,
                                    children: [
                                        (0, i.jsx)(eA, { children: (0, i.jsx)('div', { className: eT().content, children: A }) }),
                                        (0, i.jsx)(eh.A, { children: (0, i.jsx)(ep.w, { className: eT().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            });
        },
        93297: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => l });
            var i = a(25839),
                r = a(88204),
                s = a(3163),
                n = a(73182);
            let l = (0, r.PA)((e) => {
                let { album: t, closeToast: a, withLink: r } = e,
                    l = (0, n.b)(t.type);
                return (0, i.jsx)(s.O, {
                    closeToast: a,
                    entityVariant: l,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: r,
                });
            });
        },
        93510: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        94484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        95314: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => n });
            var i = a(25839),
                r = a(74631),
                s = a(66192);
            let n = (e) => {
                let { objectId: t, objectPosX: a, objectPosY: n, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u, children: m } = e,
                    _ = (0, r.useMemo)(
                        () => ({ objectId: t, objectPosX: a, objectPosY: n, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, a, n, l, o, c, d, u],
                    );
                return (0, i.jsx)(s.l.Provider, { value: _, children: m });
            };
        },
        96433: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => n });
            var i = a(74631),
                r = a(36484),
                s = a(62562);
            let n = () => {
                let e = (0, s.N)().get(r.Xc),
                    t = e.getLanguage(),
                    a = e.getDefaultLanguage(),
                    n = e.getDictionary(),
                    l = e.getAvailableLanguages(),
                    o = (0, i.useCallback)(
                        (t) => {
                            e.setLanguage(t);
                        },
                        [t],
                    );
                return (0, i.useMemo)(() => ({ dictionary: n, language: t, defaultLanguage: a, availableLanguages: l, setLanguage: o }), [t, o]);
            };
        },
        96618: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => r, W: () => s });
            var i = a(74631);
            let r = (0, i.createContext)({ theme: null, setTheme: () => {} }),
                s = () => (0, i.useContext)(r);
        },
        97805: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => p });
            var i = a(25839),
                r = a(3718),
                s = a(82298),
                n = a(74631),
                l = a(39004),
                o = a(23976),
                c = a(47399),
                d = a.n(c);
            let u = (e) => {
                let { isActive: t, className: a } = e,
                    { formatMessage: r } = (0, l.A)(),
                    c = (0, n.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                return (0, i.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(d().root, a),
                    children: [
                        (0, i.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, i.jsx)('div', { className: d().coverContainer, children: (0, i.jsx)(o.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, i.jsx)('div', { className: d().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, i.jsx)(o.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var m = a(64813),
                _ = a.n(m);
            let v = (e) => {
                    let { isActive: t, className: a } = e,
                        { formatMessage: r } = (0, l.A)(),
                        c = (0, n.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                    return (0, i.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, s.$)(_().root, a),
                        children: [
                            (0, i.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, i.jsx)(o.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, i.jsx)('div', { className: _().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, i.jsx)(o.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                p = (e) => {
                    let { isActive: t, variant: a, className: s } = e;
                    switch (a) {
                        case r.X.PLAYLIST:
                            return (0, i.jsx)(v, { isActive: t, className: s });
                        case r.X.ALBUM:
                            return (0, i.jsx)(u, { isActive: t, className: s });
                    }
                };
        },
        99401: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => k });
            var i = a(25839),
                r = a(82298),
                s = a(88204),
                n = a(39004),
                l = a(93588),
                o = a(43354),
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
            let d = (e, t, a) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(a);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(a);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(a);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(a);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(a);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: a, tld: i, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, i, a) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, i, a) },
                    };
                };
            var m = a(10959),
                _ = a(89514);
            let v = (e) => e(new Date(), (0, _.m)());
            var p = a(96433),
                h = a(27954),
                x = a(400),
                g = a.n(x),
                y = a(61493),
                C = a(4254),
                A = a(97522);
            let b = (e) => {
                    let { className: t, data: a } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(g().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: g().text,
                                children: [
                                    '\xa9 ',
                                    a.year,
                                    ' \xa0',
                                    (0, i.jsx)(A.N, {
                                        target: '_blank',
                                        href: a.yandexMusic.url,
                                        className: (0, r.$)(g().copyrightLink, g().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: a.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(A.N, {
                                target: '_blank',
                                href: a.yandexProjects.url,
                                className: g().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: a.yandexProjects.title,
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { disclaimer: t, links: a } = e;
                    return (0, i.jsxs)('div', {
                        className: g().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: g().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: a.map((e) => {
                                    let { id: t, title: a, url: r } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: g().item,
                                            children: (0, i.jsx)(A.N, { target: '_blank', href: r, className: g().link, 'data-test-id': y.S7.FOOTER_LINK, children: a }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: g().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { className: t, data: a } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, r.$)(g().root, g().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, i.jsx)(f, { links: a.links, disclaimer: a.disclaimer }), (0, i.jsx)(b, { data: a.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: a } = (0, h.g)(),
                    { formatDate: r, formatMessage: s } = (0, n.A)(),
                    { language: l } = (0, p.h)(),
                    o = u({ formatMessage: s, language: l, tld: a.tld, year: v(r) });
                return (0, i.jsx)(b, { className: t, data: o });
            });
            let k = (0, s.PA)((e) => {
                var t;
                let { className: a } = e,
                    { experiments: s, location: _, user: x } = (0, h.g)(),
                    { formatDate: y, formatMessage: C } = (0, n.A)(),
                    { isEnabled: A } = null != (t = (0, o.P)()) ? t : {},
                    { language: b } = (0, p.h)(),
                    f = ((e) => {
                        let { checkExperiment: t, formatMessage: a, isWebApplication: i, language: r, tld: s, userRegion: n, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: a, tld: i, language: r, userRegion: s } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, r) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, r) },
                                    _ = [n, o, u];
                                return (a && 'ru' === s && _.push(l), _.push(m), _);
                            })({ formatMessage: a, isWebApplication: i, language: r, tld: s, userRegion: n }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => a({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => a({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: a, language: r, tld: s, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: C,
                        isWebApplication: l.$3,
                        tld: _.tld,
                        language: b,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: v(y),
                    });
                return (0, i.jsx)(T, { className: (0, r.$)({ [g().root_withOffsetForDeeplink]: A }, a), data: f });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                364, 1676, 7349, 3349, 7339, 6287, 3472, 2121, 6749, 3953, 1107, 8451, 1583, 7396, 6706, 1311, 5201, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479,
                6171, 3269, 4163, 3246, 4517, 3482, 6680, 6504, 5329, 820, 48, 862, 2533, 4932, 5622, 9333, 746, 4475, 5056, 7358,
            ],
            () => e((e.s = 84215)),
        ),
            (_N_E = e.O()));
    },
]);
