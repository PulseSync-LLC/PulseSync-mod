(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1528],
    {
        3669: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => x });
            var s = i(74631),
                l = i(67379),
                a = i(17850),
                r = i(59450),
                n = i(49656),
                o = i(84e3),
                d = i(58069),
                c = i(20258),
                u = i(26742),
                m = i(25195),
                p = i(37314),
                h = i(25488),
                _ = i(97952),
                v = i(10764),
                f = i(72594);
            let x = () => {
                let e = (0, o.U)(),
                    t = (0, r.st)(),
                    { hash: i } = (0, r.gf)(),
                    { pageId: x, displayReasonId: A } = (0, _.$)(),
                    { tabId: b, tabPos: C, isTabSelectedByDefault: g } = (0, f.R)(),
                    { offsetBlockPosY: T } = (0, m.u)(),
                    { blockType: k, blockId: S, blockPosX: E, blockPosY: j, mainObjectId: I, mainObjectType: N, displayReasonId: y } = (0, u.N)(),
                    { filterKey: L, filterValue: O, filterPos: R } = (0, p.G)(),
                    { objectType: P, objectsCount: w, objectId: D, objectPosX: M, objectPosY: H } = (0, h.J)(),
                    { skeleton: z } = (0, v.b)(),
                    U = null != y ? y : A,
                    W = (0, n.L)(() => (void 0 !== T && void 0 !== j ? T + j : j));
                return (0, s.useCallback)(
                    (s, r) => {
                        if (!t || !x || !c.xK.includes(x) || !c.fD.includes(x)) return;
                        let n = d.F[x];
                        if (!n) return;
                        let o = {
                            hash: i,
                            pageId: n,
                            entityType: k,
                            entityId: S,
                            entityPosX: E,
                            entityPosY: W,
                            objectsCount: w,
                            viewUuid: r,
                            objectType: P,
                            objectId: D,
                            objectPosX: M,
                            objectPosY: H,
                        };
                        (void 0 !== L && ((o.filterKey = L), (o.filterValue = O), (o.filterPos = R)),
                            c.qG.includes(x) && ((o.tabId = b), (o.tabPos = C), (o.isTabSelectedByDefault = g)),
                            z && (o.skeletonId = z),
                            'string' == typeof I && 'string' == typeof N && ((o.mainObjectType = N), (o.mainObjectId = I)),
                            U && (o.displayReasonId = U));
                        let u = (0, l.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (s ? (0, a.Pf)(t.evgenInstance, u) : (0, a.nv)(t.evgenInstance, u));
                    },
                    [t, U, S, E, W, k, L, R, O, i, g, e, I, N, D, M, H, P, w, x, z, b, C],
                );
            };
        },
        4331: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => B });
            var s = i(25839),
                l = i(82298),
                a = i(88204),
                r = i(74631),
                n = i(49656),
                o = i(3392),
                d = i(19410),
                c = i(71035),
                u = i(27954),
                m = i(39528);
            let p = (e, t) => {
                let { withLink: i, separator: s } = t,
                    l = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: l };
            };
            var h = i(94484),
                _ = i.n(h),
                v = i(61493),
                f = i(4254),
                x = i(97522),
                A = i(39004),
                b = i(36619),
                C = i(29481),
                g = i(85686),
                T = i(85743),
                k = i(40207);
            let S = (0, a.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: l, captionSize: a = 'm', allArtistsTitle: r, withCustomTooltip: n, hoverSettings: d } = e,
                        {
                            name: m,
                            link: p,
                            title: h,
                            ariaLabel: _,
                            tooltipText: S,
                            isTooltipEnabled: E,
                            handleNavigate: j,
                        } = ((e) => {
                            var t, i;
                            let { item: s, allArtistsTitle: l, withCustomTooltip: a } = e,
                                { formatMessage: r } = (0, A.A)(),
                                {
                                    track: n,
                                    settings: { isMobile: o },
                                } = (0, u.g)(),
                                d = (0, g.Z)(null != (i = null == (t = s.link) ? void 0 : t.href) ? i : s.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, T.z)(),
                                p = (0, C.N)(),
                                h = (0, c.c)((e) => {
                                    (o && n.isOpened && n.close(), d(e));
                                }),
                                _ = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: l, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: r } = s;
                                    return (0, k.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), r.isOpened && (s.reset(), r.close()), l.modal.isOpened && l.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: s.artist, callback: h }),
                                v = (0, c.c)((e) => {
                                    (p({ to: b.AppScreen.ArtistScreen }), null == m || m(), _(e));
                                }),
                                f = l || s.name;
                            return {
                                name: s.name,
                                link: s.link,
                                title: a ? void 0 : f,
                                ariaLabel: s.link ? r({ id: 'entity-names.artist-name' }, { artistName: s.name }) : void 0,
                                tooltipText: f,
                                isTooltipEnabled: !l && a,
                                handleNavigate: v,
                            };
                        })({ item: t, allArtistsTitle: r, withCustomTooltip: n });
                    return p
                        ? (0, s.jsx)(x.N, {
                              ...p,
                              'aria-label': _,
                              className: i,
                              onClick: j,
                              title: h,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: E,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: S,
                                  hoverSettings: d,
                                  children: (0, s.jsx)(f.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: l, children: m }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: E,
                              offsetOptions: 4,
                              placement: 'top',
                              text: S,
                              hoverSettings: d,
                              children: (0, s.jsx)(f.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: l,
                                  title: h,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                E = (e) => {
                    let { group: t, linkClassName: i, captionClassName: l, captionSize: a, allArtistsTitle: n, withCustomTooltip: o, hoverSettings: d } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(S, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: l,
                                captionSize: a,
                                allArtistsTitle: n,
                                withCustomTooltip: o,
                                hoverSettings: d,
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
                                                captionSize: a,
                                                allArtistsTitle: n,
                                                withCustomTooltip: o,
                                                hoverSettings: d,
                                            }),
                                        ],
                                    },
                                    e.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var j = i(8487),
                I = i(9079);
            let N = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: a } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(I.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(_().spoiler, i),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(j.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var y = i(28631),
                L = i(89761),
                O = i(61912),
                R = i(36286),
                P = i.n(R);
            let w = (0, a.PA)((e) => {
                    let { label: t, artists: i, forwardRef: l } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, L.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: l, children: t }),
                            (0, s.jsx)(o.ZI, { className: P().tooltipContent, children: i.map((e) => (0, s.jsx)(O.V, { artist: e, className: P().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, r.forwardRef)((e, t) => (0, s.jsx)(w, { forwardRef: t, ...e }));
            var M = i(10820),
                H = i(93510),
                z = i.n(H);
            let U = (0, a.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: a } = (0, A.A)();
                    return (0, s.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, l.$)(z().root, z().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(O.V, { artist: e }, e.id)),
                    });
                }),
                W = (0, a.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: l } = e,
                        [a, o] = (0, r.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, u.g)(),
                        m = (0, c.c)(() => {
                            let e = l.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, n.L)(() =>
                            (0, y.A)(() => {
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
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (a || d) && (!d || 1 !== t.length) ? (d ? (0, s.jsx)(U, { artists: t, label: i }) : (0, s.jsx)(D, { artists: t, label: i })) : i;
                }),
                B = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: a,
                            linkClassName: m,
                            captionClassName: h,
                            captionSize: v,
                            variant: f = 'breakAll',
                            spoilerComponent: x,
                            ...A
                        } = e,
                        b = ((e) => {
                            var t, i, s;
                            let { separator: l, visibleArtistsCount: a, withLink: n, withComposer: o, artistIdWithoutLink: d, withContextMenu: m } = e,
                                h = null != (t = e.artists) ? t : [],
                                _ = null == (i = e.withAllArtistsTitle) || i,
                                v = null == (s = e.withCustomTooltip) || s,
                                f = (0, r.useRef)(null),
                                [x, A] = (0, r.useState)(!1),
                                {
                                    settings: { isMobile: b },
                                } = (0, u.g)(),
                                C = ((!b || 1 === h.length) && m) || !m,
                                g = ((e, t) => {
                                    var i, s, l;
                                    let a = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        r = null == (s = null == t ? void 0 : t.withLink) || s,
                                        n = null != (l = null == t ? void 0 : t.separator) ? l : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(n),
                                        { visibleArtists: d, hiddenArtistsCount: c } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: s } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => s || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: d.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: s, separator: l, isFirst: a } = t;
                                                return {
                                                    primary: p(e, { withLink: s, separator: a ? void 0 : l }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = l ? e.separator : '';
                                                        return p(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: r && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: n, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: c,
                                    };
                                })(h, { separator: l, visibleArtistsCount: x ? void 0 : a, withComposer: o, withLink: !!C && n, artistIdWithoutLink: d }),
                                T = _ ? g.allArtistsTitle : '',
                                k = (0, c.c)((e) => {
                                    (A(!0), e.preventDefault());
                                });
                            return {
                                artists: h,
                                groups: g.groups,
                                hiddenArtistsCount: g.hiddenArtistsCount,
                                allArtistsTitle: T,
                                withCustomTooltip: v,
                                withContextMenu: m,
                                labelRef: f,
                                handleOnSpoilerClick: k,
                                isTooltipEnabled: !!T && v && !m && !b,
                                title: !T || v || m ? void 0 : T,
                            };
                        })(A),
                        C = (0, n.L)(() =>
                            b.hiddenArtistsCount <= 0
                                ? null
                                : (0, r.isValidElement)(x)
                                  ? x
                                  : (0, s.jsx)(N, { spoilerClassName: a, spoilerArtistsCount: b.hiddenArtistsCount, handleOnSpoilerClick: b.handleOnSpoilerClick }),
                        ),
                        g = (0, s.jsx)(o.m_, {
                            referenceRef: b.labelRef,
                            enabled: b.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: b.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, l.$)(_().root, _()['root_variant_'.concat(f)], { [_().root_clamp]: i && i > 0, [_().ellipsis]: !i }, t),
                                title: b.title,
                                children: [
                                    b.groups.map((e) =>
                                        (0, s.jsx)(
                                            E,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: h,
                                                captionSize: v,
                                                allArtistsTitle: b.allArtistsTitle,
                                                withCustomTooltip: b.withCustomTooltip,
                                                hoverSettings: d.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    C,
                                ],
                            }),
                        });
                    return b.withContextMenu ? (0, s.jsx)(W, { labelRef: b.labelRef, artists: b.artists, label: g }) : g;
                });
        },
        5821: (e) => {
            e.exports = {
                header: 'CollectionShelfRecentlyPlayed_header__Nx7Cc',
                shelfColumn: 'CollectionShelfRecentlyPlayed_shelfColumn__9xHhf',
                important: 'CollectionShelfRecentlyPlayed_important__HS0GM',
            };
        },
        7912: (e) => {
            e.exports = {
                root: 'CollectionShelfPage_root__S0__c',
                scrollableContainer: 'CollectionShelfPage_scrollableContainer__9f317',
                content: 'CollectionShelfPage_content__AG3r8',
                block: 'CollectionShelfPage_block__34jyy',
                blockHeader: 'CollectionShelfPage_blockHeader__Qjoln',
                footer: 'CollectionShelfPage_footer__pgWKV',
            };
        },
        13232: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => s });
            let s = (0, i(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        19410: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        21468: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var s = i(74631),
                l = i(56480);
            function a() {
                return (0, s.useContext)(l.H);
            }
        },
        22815: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var s,
                l = i(22939);
            !(function (e) {
                ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'));
            })(s || (s = {}));
            let a = (e, t) => {
                var i, a;
                return e.type === s.ALBUM
                    ? { type: l.K.Album, meta: { id: (null == (a = e.album) ? void 0 : a.id) || 0 }, from: t || '' }
                    : { type: l.K.Playlist, meta: { id: (null == (i = e.playlist) ? void 0 : i.id) || '' }, from: t || '' };
            };
        },
        30716: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => a });
            var s = i(84059),
                l = i(74631);
            i(93588);
            let a = (e) => {
                let t = (0, s.usePathname)(),
                    [i, a] = (0, l.useState)(!1);
                ((0, l.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, l.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, i, t]));
            };
        },
        36286: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        38726: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var s = i(25839),
                l = i(88204),
                a = i(61493),
                r = i(66738),
                n = i(10820),
                o = i(77174),
                d = i(27954);
            let c = (0, l.PA)((e) => {
                let { isLiked: t, onClick: i, className: l, iconClassName: c, albumType: u, disabled: m } = e,
                    { user: p } = (0, d.g)(),
                    h = t ? 'liked' : 'like',
                    _ = (0, o.$)(t, u);
                return (0, s.jsx)(n.Dr, {
                    className: l,
                    onClick: i,
                    icon: (0, s.jsx)(r.I, { className: c, variant: h, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !p.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: _,
                });
            });
        },
        39499: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionShelfPage: () => w });
            var s = i(25839),
                l = i(88204),
                a = i(74631),
                r = i(39004),
                n = i(8487),
                o = i(61493),
                d = i(13833),
                c = i(4254),
                u = i(78299),
                m = i(1407),
                p = i(21784),
                h = i(89192),
                _ = i(30716),
                v = i(27954),
                f = i(99401),
                x = i(26076),
                A = i(10603),
                b = i(99057),
                C = i(82298),
                g = i(49656),
                T = i(51549),
                k = i(53712),
                S = i(3718),
                E = i(28777),
                j = i(97805),
                I = i(22815),
                N = i(98485),
                y = i(5821),
                L = i.n(y);
            let O = (0, l.PA)((e) => {
                var t;
                let { className: i, itemsCount: l, headerClassName: r } = e,
                    {
                        sonataState: n,
                        collection: {
                            shelf: { recentlyPlayed: d },
                        },
                    } = (0, v.g)(),
                    c = (0, g.L)(() => {
                        var e;
                        return null == (e = d.entities)
                            ? void 0
                            : e.map((e, t) => {
                                  let i = (0, I.T)(e, d.typeForFrom);
                                  return (0, s.jsx)(
                                      T.K,
                                      {
                                          track: e.track,
                                          playContextParams: {
                                              contextData: i,
                                              queueParams: { index: t, entityId: e.track.id },
                                              loadContextMeta: !1,
                                              entitiesData: n.unloadedEntitiesDataFromModels,
                                          },
                                          withPodcastName: !0,
                                      },
                                      e.track.id,
                                  );
                              });
                    });
                return (d.isNeededToLoad && (0, a.use)(d.getData()), !d.isLoading && (null == (t = d.entities) ? void 0 : t.length))
                    ? (0, s.jsx)(E.$, {
                          blockHeaderClassName: (0, C.$)(L().header, r),
                          className: i,
                          carouselItemClassName: (0, C.$)(L().shelfColumn, L().important),
                          shimmer: (0, s.jsx)(j.D, { variant: S.X.PLAYLIST, isActive: !0 }),
                          isShimmerVisible: d.isLoading,
                          isShimmerActive: !0,
                          maxColumnsCount: E.D.ONE,
                          blockHeaderTitle: d.title,
                          itemsCountPerColumn: null != l ? l : 0,
                          viewAllActionLink: k.Z.collectionShelfRecentlyPlayed.href,
                          'data-test-id': o.Xk.collection.COLLECTION_SHELF_PAGE_RECENTLY_PLAYED_BLOCK,
                          children: c,
                      })
                    : (0, s.jsx)(N.E, { className: i });
            });
            var R = i(7912),
                P = i.n(R);
            let w = (0, l.PA)(() => {
                let {
                        collection: { shelf: e },
                    } = (0, v.g)(),
                    { contentScrollRef: t, setContentScrollRef: i } = (0, h.g)(),
                    { formatMessage: l } = (0, r.A)(),
                    C = (0, p.W)();
                return ((0, a.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, _.J)(e.isResolved),
                e.isRejected)
                    ? (0, s.jsx)(u.SomethingWentWrong, {})
                    : (0, s.jsxs)(m.h, {
                          scrollElement: t,
                          outerTitle: l({ id: 'page.shelf' }),
                          children: [
                              (0, s.jsx)(A.Y, {
                                  variant: A.V.TEXT,
                                  withForwardControl: !1,
                                  withBackwardControl: C.canBack,
                                  children: (0, s.jsx)(c.DZ, {
                                      variant: 'h2',
                                      weight: 'bold',
                                      size: 'xl',
                                      lineClamp: 1,
                                      children: (0, s.jsx)(n.A, { id: 'page.shelf' }),
                                  }),
                              }),
                              (0, s.jsx)(d.N, {
                                  ref: i,
                                  containerClassName: P().scrollableContainer,
                                  className: P().root,
                                  'data-test-id': o.Xk.collection.COLLECTION_SHELF_PAGE,
                                  children: (0, s.jsxs)('div', {
                                      className: P().content,
                                      children: [
                                          e.hasRecentlyPlayed && (0, s.jsx)(O, { className: P().block, headerClassName: P().blockHeader, itemsCount: 5 }),
                                          e.hasLiked && (0, s.jsx)(b.m, { className: P().block, headerClassName: P().blockHeader, itemsCount: 5 }),
                                          (0, s.jsx)(x.A, { children: (0, s.jsx)(f.w, { className: P().footer }) }),
                                      ],
                                  }),
                              }),
                          ],
                      });
            });
        },
        39528: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => l });
            var s = i(25895);
            let l = (e) => (0, s.u)('/artist/:artistId', { params: { artistId: e } });
        },
        44408: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        52512: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => r });
            var s = i(74631),
                l = i(3669),
                a = i(13232);
            let r = function () {
                let { callback: e, singleEvent: t, withViewUuid: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = (0, s.useRef)(null),
                    n = (0, l.D)(),
                    o = (0, s.useId)(),
                    d = (0, s.useContext)(a.B),
                    c = (0, s.useCallback)(
                        (s, l) => {
                            (e ? e(s, i ? l : void 0) : n(s, l), t && d.unobserveElement(o));
                        },
                        [e, d, o, n, t, i],
                    );
                return (
                    (0, s.useEffect)(
                        () => (
                            d.observeElement({ elementRef: r, elementId: o, callback: c }),
                            () => {
                                d.unobserveElement(o);
                            }
                        ),
                        [e, d, c, o, n],
                    ),
                    { ref: r, intersectionPropertyId: o }
                );
            };
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        56480: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s });
            let s = (0, i(74631).createContext)({ pageAlbumId: void 0 });
        },
        59981: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { T: () => s }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(s || (s = {})));
        },
        60924: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => c });
            var s = i(25839),
                l = i(61493),
                a = i(3392),
                r = i(4254),
                n = i(74672),
                o = i.n(n);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: i, title: n, placement: c = 'top', children: u } = e;
                    return (0, s.jsxs)(a.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, s.jsx)(a.ZI, {
                                className: o().root,
                                'data-test-id': l.S7.TOOLTIP_WITH_TITLE,
                                children: (0, s.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        n && (0, s.jsx)(r.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: n }),
                                        (0, s.jsx)(r.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61561: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => a });
            var s = i(27954),
                l = i(44806);
            let a = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: a },
                    experiments: r,
                } = (0, s.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = r.getExperiment(l.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => A });
            var s = i(25839),
                l = i(82298),
                a = i(88204),
                r = i(74631),
                n = i(36619),
                o = i(61493),
                d = i(71035),
                c = i(23818),
                u = i(10820),
                m = i(86869),
                p = i(4254),
                h = i(29481),
                _ = i(85686),
                v = i(27954),
                f = i(53454),
                x = i.n(f);
            let A = (0, a.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: a } = (0, v.g)(),
                    f = (0, _.Z)(t.url),
                    b = (0, h.N)(),
                    C = (0, r.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(A, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    g = (0, d.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), b({ to: n.AppScreen.ArtistScreen }), f(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(u.Dr, {
                            className: (0, l.$)(x().root, i),
                            onClick: g,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(m.t, {
                                    radius: 'round',
                                    className: x().cover,
                                    children: (0, s.jsx)(c._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: x().image }),
                                }),
                                (0, s.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        C,
                    ],
                });
            });
        },
        62926: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => v });
            var s = i(25839),
                l = i(82298),
                a = i(88204),
                r = i(74631),
                n = i(39004),
                o = i(74245),
                d = i(61493),
                c = i(49656),
                u = i(66738),
                m = i(27954),
                p = i(60924),
                h = i(92870),
                _ = i.n(h);
            let v = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: a, containerClassName: h, variant: v, size: f = 'xxxs', ...x } = e,
                    { formatMessage: A } = (0, n.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, m.g)(),
                    [C, g] = (0, r.useState)(null),
                    T = (0, c.L)(() => {
                        switch (v) {
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
                    k = (0, r.useMemo)(() => A({ id: 'extra-explicit.explicit-mark' }), [A]);
                (0, r.useEffect)(() => {
                    i && i().then(g);
                }, [i, a]);
                let S = (null == C ? void 0 : C.join('\n')) || '',
                    E = !!(null == C ? void 0 : C.length) && !b,
                    j = S.length > 0 ? S : k;
                return (0, s.jsx)(p.k, {
                    description: S,
                    placement: 'bottom-start',
                    enabled: E,
                    children: (0, s.jsx)('span', {
                        className: h,
                        children:
                            v === o.JU.SUBSTITUTED
                                ? (0, s.jsxs)('svg', {
                                      className: (0, l.$)(_().explicitMark, t),
                                      viewBox: '0 0 16 16',
                                      role: 'img',
                                      'aria-label': j,
                                      style: { width: 'var(--ym-icon-size-'.concat(f, ')'), height: 'var(--ym-icon-size-'.concat(f, ')') },
                                      ...x,
                                      'data-test-id': d.S7.EXPLICIT_MARK_ICON,
                                      children: [
                                          (0, s.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                          (0, s.jsx)('text', {
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
                                : (0, s.jsx)(u.I, {
                                      className: (0, l.$)(_().explicitMark, t),
                                      'aria-label': j,
                                      variant: T,
                                      size: f,
                                      ...x,
                                      'data-test-id': d.S7.EXPLICIT_MARK_ICON,
                                  }),
                    }),
                });
            });
        },
        71705: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var s = i(25839),
                l = i(39004),
                a = i(71035),
                r = i(21468),
                n = i(91149),
                o = i(92942),
                d = i(27954),
                c = i(57549),
                u = i(33660),
                m = i(74631),
                p = i(31860),
                h = i(93297);
            let _ = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: _ },
                    } = (0, d.g)(),
                    { formatMessage: v } = (0, l.A)(),
                    { notify: f } = (0, o.l)(),
                    x = (() => {
                        let { notify: e } = (0, o.l)(),
                            [t, i] = (0, m.useState)(!1),
                            { formatMessage: r } = (0, l.A)();
                        return (0, a.c)(async (l) => {
                            let { album: a, withLink: o = !0, withNotification: d = !0 } = l;
                            if (t) return;
                            let m = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                            i(!0);
                            let _ = await a.toggleLike();
                            (i(!1),
                                d &&
                                    (_ === p.f.OK
                                        ? e((0, s.jsx)(h.T, { withLink: o, album: m }), { containerId: n.u.INFO })
                                        : e((0, s.jsx)(c.h, { error: r({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR })));
                        });
                    })(),
                    { pageAlbumId: A } = (0, r.T)();
                return (0, a.c)(async () => {
                    if (e)
                        return _({ pageAlbumId: A, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? x({ album: e })
                              : void f((0, s.jsx)(c.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                });
            };
        },
        71898: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 30871)), Promise.resolve().then(i.bind(i, 39499)));
        },
        71996: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var s = i(25839),
                l = i(74631),
                a = i(39004),
                r = i(61493),
                n = i(4071),
                o = i(66738),
                d = i(49984);
            let c = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: l,
                            radius: c,
                            iconSize: u,
                            disabled: m,
                            onClick: p,
                            iconClassName: h,
                            className: _,
                            forwardRef: v,
                            style: f,
                            children: x,
                        } = e,
                        { formatMessage: A } = (0, a.A)(),
                        b = A({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(n.$, {
                        className: _,
                        color: 'secondary',
                        radius: c,
                        size: l,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': b,
                        onClick: p,
                        ref: v,
                        icon: (0, s.jsx)(o.I, { variant: 'trailer', size: u, className: h }),
                        disabled: m,
                        'data-intersection-property-id': d.N,
                        style: f,
                        'data-test-id': r.S7.TRAILER_BUTTON,
                        children: x,
                    });
                },
                u = (0, l.forwardRef)((e, t) => (0, s.jsx)(c, { forwardRef: t, ...e }));
        },
        73182: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            var s = i(56829),
                l = i(35015);
            let a = (e) => {
                switch (e) {
                    case s._.PODCAST:
                        return l.c.PODCAST;
                    case s._.AUDIOBOOK:
                        return l.c.AUDIOBOOK;
                    case s._.FAIRY_TALE:
                        return l.c.FAIRY_TALE;
                    default:
                        return l.c.ALBUM;
                }
            };
        },
        73614: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => r, r: () => n });
            var s = i(74631),
                l = i(39004),
                a = i(56829),
                r = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let n = (e, t) => {
                let { formatMessage: i } = (0, l.A)();
                return (0, s.useMemo)(() => {
                    switch (e) {
                        case a._.SINGLE:
                            return i({ id: 'entity-names.single' });
                        case a._.PODCAST:
                            return i({ id: 'entity-names.podcast' });
                        case a._.AUDIOBOOK:
                            if ('pin' === t) return i({ id: 'entity-names.book' });
                            return i({ id: 'entity-names.audio' });
                        case a._.FAIRY_TALE:
                            return i({ id: 'entity-names.fairy-tale' });
                        default:
                            return i({ id: 'entity-names.album' });
                    }
                }, [e, i, t]);
            };
        },
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        77174: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            var s = i(39004),
                l = i(56829);
            let a = (e, t) => {
                let { formatMessage: i } = (0, s.A)();
                if (e)
                    switch (t) {
                        case l._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case l._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case l._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case l._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        90780: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => d });
            var s = i(25839),
                l = i(74631),
                a = i(61493),
                r = i(4254),
                n = i(44408),
                o = i.n(n);
            let d = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [n, d] = (0, l.useState)(null);
                if (
                    ((0, l.useEffect)(() => {
                        t && t().then(d);
                    }, [t]),
                    n)
                )
                    return n.map((e, t) =>
                        (0, s.jsx)(
                            r.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': a.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        92870: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        93297: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var s = i(25839),
                l = i(88204),
                a = i(3163),
                r = i(73182);
            let n = (0, l.PA)((e) => {
                let { album: t, closeToast: i, withLink: l } = e,
                    n = (0, r.b)(t.type);
                return (0, s.jsx)(a.O, {
                    closeToast: i,
                    entityVariant: n,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: l,
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
        99835: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => l });
            var s = i(40207);
            let l = (e) => {
                let { album: t, callback: i, shouldHistoryBack: l } = e;
                return (0, s.l)({ entity: t, callback: i, modalBehavior: void 0 === l ? void 0 : { shouldHistoryBack: l }, preventDefaultWhenSafe: !0 });
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1676, 3349, 1107, 6287, 2121, 6749, 7339, 3472, 7349, 7615, 978, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 4245, 3269, 4163,
                3246, 4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 2533, 8222, 2464, 4475, 5056, 7358,
            ],
            () => e((e.s = 71898)),
        ),
            (_N_E = e.O()));
    },
]);
