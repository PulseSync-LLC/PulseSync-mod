(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5646],
    {
        148: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        3669: (e, t, s) => {
            'use strict';
            s.d(t, { D: () => f });
            var i = s(74631),
                r = s(67379),
                a = s(17850),
                n = s(59450),
                o = s(49656),
                l = s(84e3),
                c = s(58069),
                d = s(20258),
                u = s(26742),
                m = s(25195),
                p = s(37314),
                _ = s(25488),
                h = s(97952),
                x = s(10764),
                v = s(72594);
            let f = () => {
                let e = (0, l.U)(),
                    t = (0, n.st)(),
                    { hash: s } = (0, n.gf)(),
                    { pageId: f, displayReasonId: g } = (0, h.$)(),
                    { tabId: E, tabPos: A, isTabSelectedByDefault: T } = (0, v.R)(),
                    { offsetBlockPosY: N } = (0, m.u)(),
                    { blockType: b, blockId: y, blockPosX: S, blockPosY: j, mainObjectId: O, mainObjectType: C, displayReasonId: I } = (0, u.N)(),
                    { filterKey: k, filterValue: w, filterPos: L } = (0, p.G)(),
                    { objectType: P, objectsCount: R, objectId: D, objectPosX: W, objectPosY: F } = (0, _.J)(),
                    { skeleton: z } = (0, x.b)(),
                    U = null != I ? I : g,
                    M = (0, o.L)(() => (void 0 !== N && void 0 !== j ? N + j : j));
                return (0, i.useCallback)(
                    (i, n) => {
                        if (!t || !f || !d.xK.includes(f) || !d.fD.includes(f)) return;
                        let o = c.F[f];
                        if (!o) return;
                        let l = {
                            hash: s,
                            pageId: o,
                            entityType: b,
                            entityId: y,
                            entityPosX: S,
                            entityPosY: M,
                            objectsCount: R,
                            viewUuid: n,
                            objectType: P,
                            objectId: D,
                            objectPosX: W,
                            objectPosY: F,
                        };
                        (void 0 !== k && ((l.filterKey = k), (l.filterValue = w), (l.filterPos = L)),
                            d.qG.includes(f) && ((l.tabId = E), (l.tabPos = A), (l.isTabSelectedByDefault = T)),
                            z && (l.skeletonId = z),
                            'string' == typeof O && 'string' == typeof C && ((l.mainObjectType = C), (l.mainObjectId = O)),
                            U && (l.displayReasonId = U));
                        let u = (0, r.F)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (i ? (0, a.Pf)(t.evgenInstance, u) : (0, a.nv)(t.evgenInstance, u));
                    },
                    [t, U, y, S, M, b, k, L, w, s, T, e, O, C, D, W, F, P, R, f, z, E, A],
                );
            };
        },
        4331: (e, t, s) => {
            'use strict';
            s.d(t, { i: () => B });
            var i = s(25839),
                r = s(82298),
                a = s(88204),
                n = s(74631),
                o = s(49656),
                l = s(3392),
                c = s(19410),
                d = s(71035),
                u = s(27954),
                m = s(39528);
            let p = (e, t) => {
                let { withLink: s, separator: i } = t,
                    r = s && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: r };
            };
            var _ = s(94484),
                h = s.n(_),
                x = s(61493),
                v = s(4254),
                f = s(97522),
                g = s(39004),
                E = s(36619),
                A = s(29481),
                T = s(85686),
                N = s(85743),
                b = s(40207);
            let y = (0, a.PA)((e) => {
                    let { item: t, linkClassName: s, captionClassName: r, captionSize: a = 'm', allArtistsTitle: n, withCustomTooltip: o, hoverSettings: c } = e,
                        {
                            name: m,
                            link: p,
                            title: _,
                            ariaLabel: h,
                            tooltipText: y,
                            isTooltipEnabled: S,
                            handleNavigate: j,
                        } = ((e) => {
                            var t, s;
                            let { item: i, allArtistsTitle: r, withCustomTooltip: a } = e,
                                { formatMessage: n } = (0, g.A)(),
                                {
                                    track: o,
                                    settings: { isMobile: l },
                                } = (0, u.g)(),
                                c = (0, T.Z)(null != (s = null == (t = i.link) ? void 0 : t.href) ? s : i.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, N.z)(),
                                p = (0, A.N)(),
                                _ = (0, d.c)((e) => {
                                    (l && o.isOpened && o.close(), c(e));
                                }),
                                h = ((e) => {
                                    let { artist: t, callback: s } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: r, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: n } = i;
                                    return (0, b.l)({
                                        entity: t,
                                        callback: s,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (i.reset(), n.close()), r.modal.isOpened && r.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: i.artist, callback: _ }),
                                x = (0, d.c)((e) => {
                                    (p({ to: E.AppScreen.ArtistScreen }), null == m || m(), h(e));
                                }),
                                v = r || i.name;
                            return {
                                name: i.name,
                                link: i.link,
                                title: a ? void 0 : v,
                                ariaLabel: i.link ? n({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                tooltipText: v,
                                isTooltipEnabled: !r && a,
                                handleNavigate: x,
                            };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: o });
                    return p
                        ? (0, i.jsx)(f.N, {
                              ...p,
                              'aria-label': h,
                              className: s,
                              onClick: j,
                              title: _,
                              'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(l.m_, {
                                  enabled: S,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: y,
                                  hoverSettings: c,
                                  children: (0, i.jsx)(v.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: r, children: m }),
                              }),
                          })
                        : (0, i.jsx)(l.m_, {
                              enabled: S,
                              offsetOptions: 4,
                              placement: 'top',
                              text: y,
                              hoverSettings: c,
                              children: (0, i.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: r,
                                  title: _,
                                  'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                S = (e) => {
                    let { group: t, linkClassName: s, captionClassName: r, captionSize: a, allArtistsTitle: o, withCustomTooltip: l, hoverSettings: c } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(y, {
                                item: t.primary,
                                linkClassName: s,
                                captionClassName: r,
                                captionSize: a,
                                allArtistsTitle: o,
                                withCustomTooltip: l,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, i.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, i.jsx)(y, {
                                                item: e,
                                                linkClassName: s,
                                                captionClassName: r,
                                                captionSize: a,
                                                allArtistsTitle: o,
                                                withCustomTooltip: l,
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
            var j = s(8487),
                O = s(9079);
            let C = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: s, handleOnSpoilerClick: a } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(O.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(h().spoiler, s),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': x.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(j.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var I = s(28631),
                k = s(89761),
                w = s(61912),
                L = s(36286),
                P = s.n(L);
            let R = (0, a.PA)((e) => {
                    let { label: t, artists: s, forwardRef: r } = e;
                    return (0, i.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, k.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: r, children: t }),
                            (0, i.jsx)(l.ZI, { className: P().tooltipContent, children: s.map((e) => (0, i.jsx)(w.V, { artist: e, className: P().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, n.forwardRef)((e, t) => (0, i.jsx)(R, { forwardRef: t, ...e }));
            var W = s(10820),
                F = s(93510),
                z = s.n(F);
            let U = (0, a.PA)((e) => {
                    let { label: t, artists: s } = e,
                        { formatMessage: a } = (0, g.A)();
                    return (0, i.jsx)(W.W1, {
                        isMobile: !0,
                        className: (0, r.$)(z().root, z().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: s.map((e) => (0, i.jsx)(w.V, { artist: e }, e.id)),
                    });
                }),
                M = (0, a.PA)((e) => {
                    let { artists: t = [], label: s, labelRef: r } = e,
                        [a, l] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let e = r.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, o.L)(() =>
                            (0, I.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', p),
                                m(),
                                () => {
                                    window.removeEventListener('resize', p);
                                }
                            ),
                            [p, m],
                        ),
                        (0, n.useEffect)(() => {
                            m();
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (a || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(U, { artists: t, label: s }) : (0, i.jsx)(D, { artists: t, label: s })) : s;
                }),
                B = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: s,
                            spoilerClassName: a,
                            linkClassName: m,
                            captionClassName: _,
                            captionSize: x,
                            variant: v = 'breakAll',
                            spoilerComponent: f,
                            ...g
                        } = e,
                        E = ((e) => {
                            var t, s, i;
                            let { separator: r, visibleArtistsCount: a, withLink: o, withComposer: l, artistIdWithoutLink: c, withContextMenu: m } = e,
                                _ = null != (t = e.artists) ? t : [],
                                h = null == (s = e.withAllArtistsTitle) || s,
                                x = null == (i = e.withCustomTooltip) || i,
                                v = (0, n.useRef)(null),
                                [f, g] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: E },
                                } = (0, u.g)(),
                                A = ((!E || 1 === _.length) && m) || !m,
                                T = ((e, t) => {
                                    var s, i, r;
                                    let a = null == (s = null == t ? void 0 : t.withComposer) || s,
                                        n = null == (i = null == t ? void 0 : t.withLink) || i,
                                        o = null != (r = null == t ? void 0 : t.separator) ? r : ', ',
                                        l = e
                                            .flatMap((e) => {
                                                var t;
                                                let s = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...s];
                                            })
                                            .join(o),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: s, withComposer: i } = t;
                                            return {
                                                visibleArtists: (s ? e.slice(0, s) : e).filter((e) => i || !e.isComposer),
                                                hiddenArtistsCount: s && s < e.length ? e.length - s : 0,
                                            };
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, s) =>
                                            ((e, t) => {
                                                var s;
                                                let { withLink: i, separator: r, isFirst: a } = t;
                                                return {
                                                    primary: p(e, { withLink: i, separator: a ? void 0 : r }),
                                                    decomposed: (null != (s = e.decomposed) ? s : []).map((e) => {
                                                        let t = r ? e.separator : '';
                                                        return p(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: o, isFirst: 0 === s }),
                                        ),
                                        allArtistsTitle: l,
                                        hiddenArtistsCount: d,
                                    };
                                })(_, { separator: r, visibleArtistsCount: f ? void 0 : a, withComposer: l, withLink: !!A && o, artistIdWithoutLink: c }),
                                N = h ? T.allArtistsTitle : '',
                                b = (0, d.c)((e) => {
                                    (g(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: T.groups,
                                hiddenArtistsCount: T.hiddenArtistsCount,
                                allArtistsTitle: N,
                                withCustomTooltip: x,
                                withContextMenu: m,
                                labelRef: v,
                                handleOnSpoilerClick: b,
                                isTooltipEnabled: !!N && x && !m && !E,
                                title: !N || x || m ? void 0 : N,
                            };
                        })(g),
                        A = (0, o.L)(() =>
                            E.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(f)
                                  ? f
                                  : (0, i.jsx)(C, { spoilerClassName: a, spoilerArtistsCount: E.hiddenArtistsCount, handleOnSpoilerClick: E.handleOnSpoilerClick }),
                        ),
                        T = (0, i.jsx)(l.m_, {
                            referenceRef: E.labelRef,
                            enabled: E.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: E.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: s ? { WebkitLineClamp: s } : void 0,
                                className: (0, r.$)(h().root, h()['root_variant_'.concat(v)], { [h().root_clamp]: s && s > 0, [h().ellipsis]: !s }, t),
                                title: E.title,
                                children: [
                                    E.groups.map((e) =>
                                        (0, i.jsx)(
                                            S,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: _,
                                                captionSize: x,
                                                allArtistsTitle: E.allArtistsTitle,
                                                withCustomTooltip: E.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return E.withContextMenu ? (0, i.jsx)(M, { labelRef: E.labelRef, artists: E.artists, label: T }) : T;
                });
        },
        11639: (e) => {
            e.exports = {
                title: 'CollectionShelfNewEpisodes_title__y_SoT',
                root: 'CollectionShelfNewEpisodes_root__VojSS',
                root_emptyList: 'CollectionShelfNewEpisodes_root_emptyList__jsjSW',
                wrapper: 'CollectionShelfNewEpisodes_wrapper__Z2EOe',
                iconBackground: 'CollectionShelfNewEpisodes_iconBackground__K4Xui',
                button: 'CollectionShelfNewEpisodes_button__3DALk',
            };
        },
        13232: (e, t, s) => {
            'use strict';
            s.d(t, { B: () => i });
            let i = (0, s(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        16978: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => p });
            var i = s(25839),
                r = s(84059),
                a = s(8487),
                n = s(61493),
                o = s(71035),
                l = s(4071),
                c = s(4254),
                d = s(57024),
                u = s(36484),
                m = s(62562);
            let p = (e) => {
                let { size: t = 'm', variant: s = 'default', color: p = 'primary', withRipple: _ = !0, buttonText: h, isBlock: x, key: v, className: f } = e,
                    g = (0, r.useRouter)(),
                    E = (0, m.N)().get(u.QG),
                    A = (0, o.c)(() => {
                        E.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), g.push(E.authorizationUrl));
                    });
                return (0, i.jsx)(
                    l.$,
                    {
                        onClick: A,
                        className: f,
                        isBlock: x,
                        color: p,
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        19410: (e, t, s) => {
            'use strict';
            s.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        21468: (e, t, s) => {
            'use strict';
            s.d(t, { T: () => a });
            var i = s(74631),
                r = s(56480);
            function a() {
                return (0, i.useContext)(r.H);
            }
        },
        30716: (e, t, s) => {
            'use strict';
            s.d(t, { J: () => a });
            var i = s(84059),
                r = s(74631);
            s(93588);
            let a = (e) => {
                let t = (0, i.usePathname)(),
                    [s, a] = (0, r.useState)(!1);
                ((0, r.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !s && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, s, t]));
            };
        },
        30871: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => h });
            var i = s(25839),
                r = s(88204),
                a = s(84059),
                n = s(82298),
                o = s(8487),
                l = s(4254),
                c = s(16978),
                d = s(148),
                u = s.n(d);
            let m = (0, r.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(l.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(l.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(o.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var p = s(53712),
                _ = s(27954);
            let h = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: s } = e,
                    { user: r } = (0, _.g)();
                return r.isAuthorized ? t : (s && (0, a.redirect)(p.Z.main.href), (0, i.jsx)(m, {}));
            });
        },
        36286: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        38726: (e, t, s) => {
            'use strict';
            s.d(t, { U: () => d });
            var i = s(25839),
                r = s(88204),
                a = s(61493),
                n = s(66738),
                o = s(10820),
                l = s(77174),
                c = s(27954);
            let d = (0, r.PA)((e) => {
                let { isLiked: t, onClick: s, className: r, iconClassName: d, albumType: u, disabled: m } = e,
                    { user: p } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    h = (0, l.$)(t, u);
                return (0, i.jsx)(o.Dr, {
                    className: r,
                    onClick: s,
                    icon: (0, i.jsx)(n.I, { className: d, variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !p.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        39528: (e, t, s) => {
            'use strict';
            s.d(t, { R: () => r });
            var i = s(25895);
            let r = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        44408: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        52512: (e, t, s) => {
            'use strict';
            s.d(t, { n: () => n });
            var i = s(74631),
                r = s(3669),
                a = s(13232);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: s } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, i.useRef)(null),
                    o = (0, r.D)(),
                    l = (0, i.useId)(),
                    c = (0, i.useContext)(a.B),
                    d = (0, i.useCallback)(
                        (i, r) => {
                            (e ? e(i, s ? r : void 0) : o(i, r), t && c.unobserveElement(l));
                        },
                        [e, c, l, o, t, s],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            c.observeElement({ elementRef: n, elementId: l, callback: d }),
                            () => {
                                c.unobserveElement(l);
                            }
                        ),
                        [e, c, d, l, o],
                    ),
                    { ref: n, intersectionPropertyId: l }
                );
            };
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        56027: (e, t, s) => {
            'use strict';
            s.d(t, { CollectionShelfNewEpisodesPage: () => R });
            var i = s(25839),
                r = s(88204),
                a = s(84059),
                n = s(74631),
                o = s(61493),
                l = s(71035),
                c = s(13833),
                d = s(4254),
                u = s(78299),
                m = s(1407),
                p = s(21784),
                _ = s(89192),
                h = s(30716),
                x = s(27954),
                v = s(99401),
                f = s(26076),
                g = s(10603),
                E = s(82298),
                A = s(8487),
                T = s(22939),
                N = s(4071),
                b = s(66738),
                y = s(51549),
                S = s(53712),
                j = s(85686),
                O = s(3718),
                C = s(97805),
                I = s(11639),
                k = s.n(I);
            let w = (0, r.PA)(() => {
                let {
                        sonataState: e,
                        collection: {
                            shelf: { newEpisodes: t },
                        },
                    } = (0, x.g)(),
                    s = (0, j.Z)(S.Z.nonMusic.href),
                    r = (0, n.useMemo)(() => {
                        var s;
                        return null == (s = t.tracks)
                            ? void 0
                            : s.map((s, r) =>
                                  (0, i.jsx)(
                                      y.K,
                                      {
                                          track: s,
                                          playContextParams: {
                                              contextData: { type: T.K.Album, meta: { id: s.entityId }, from: t.typeForFrom || '' },
                                              queueParams: { index: r, entityId: s.id },
                                              loadContextMeta: !0,
                                              entitiesData: e.unloadedEntitiesDataFromModels,
                                          },
                                          withPodcastName: !0,
                                      },
                                      s.entityId,
                                  ),
                              );
                    }, [t.tracks, t.typeForFrom, e.unloadedEntitiesDataFromModels]),
                    a = (0, n.useMemo)(
                        () =>
                            t.isEmpty
                                ? (0, i.jsx)(A.A, { id: 'error-messages.empty-shelf-new-episodes-title-no-tracks' })
                                : (0, i.jsx)(A.A, { id: 'error-messages.empty-shelf-new-episodes-title' }),
                        [t.isEmpty],
                    );
                return (t.isNeededToLoad && (0, n.use)(t.getData()), t.isLoading)
                    ? (0, i.jsx)(C.D, { variant: O.X.PLAYLIST, isActive: !0 })
                    : (0, i.jsxs)('div', {
                          className: (0, E.$)(k().root, { [k().root_emptyList]: t.isEmpty }),
                          children: [
                              r,
                              (0, i.jsxs)('div', {
                                  className: k().wrapper,
                                  children: [
                                      (0, i.jsx)('div', { className: k().iconBackground, children: (0, i.jsx)(b.I, { variant: 'like', size: 'l' }) }),
                                      (0, i.jsx)(d.DZ, { className: k().title, variant: 'h3', size: 'xs', children: a }),
                                      !t.isEmpty &&
                                          (0, i.jsx)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'l',
                                              weight: 'normal',
                                              children: (0, i.jsx)(A.A, { id: 'error-messages.empty-shelf-new-episodes-text' }),
                                          }),
                                      (0, i.jsx)(N.$, {
                                          onClick: s,
                                          className: k().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 's',
                                          radius: 'xxxl',
                                          children: (0, i.jsx)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: (0, i.jsx)(A.A, { id: 'error-messages.empty-shelf-liked-page-link' }),
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
            var L = s(94520),
                P = s.n(L);
            let R = (0, r.PA)(() => {
                let {
                        collection: {
                            shelf: { newEpisodes: e },
                        },
                    } = (0, x.g)(),
                    { contentScrollRef: t, setContentScrollRef: s } = (0, _.g)(),
                    r = (0, p.W)(),
                    E = (0, a.useRouter)(),
                    A = (0, l.c)(() => {
                        var t;
                        (null == (t = e.playlist) ? void 0 : t.uuid) && E.replace(e.playlist.url);
                    });
                return ((0, n.useEffect)(() => {
                    e.isResolved && e.withPlaylist && A();
                }, [e.isResolved, e.withPlaylist, A]),
                (0, n.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, h.J)(e.isResolved),
                e.isRejected)
                    ? (0, i.jsx)(u.SomethingWentWrong, {})
                    : (0, i.jsxs)(m.h, {
                          scrollElement: t,
                          outerTitle: e.title,
                          children: [
                              (0, i.jsx)(g.Y, {
                                  variant: g.V.TEXT,
                                  withForwardControl: !1,
                                  withBackwardControl: r.canBack,
                                  children: (0, i.jsx)(d.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: e.title }),
                              }),
                              (0, i.jsxs)(c.N, {
                                  ref: s,
                                  containerClassName: P().scrollableContainer,
                                  className: P().root,
                                  'data-test-id': o.Xk.collection.COLLECTION_SHELF_NEW_EPISODES_PAGE,
                                  children: [(0, i.jsx)(w, {}), (0, i.jsx)(f.A, { children: (0, i.jsx)(v.w, { className: P().footer }) })],
                              }),
                          ],
                      });
            });
        },
        56480: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => i });
            let i = (0, s(74631).createContext)({ pageAlbumId: void 0 });
        },
        57024: (e, t, s) => {
            'use strict';
            s.d(t, { C8: () => a, UC: () => n, dM: () => o, uV: () => l });
            var i = s(93690),
                r = s(58848);
            let a = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                o = (e) => {
                    if (!(e instanceof i.m5) || !(0, r.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, r.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                l = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        57896: (e, t, s) => {
            (Promise.resolve().then(s.bind(s, 30871)), Promise.resolve().then(s.bind(s, 56027)));
        },
        58848: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        59981: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { T: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        60924: (e, t, s) => {
            'use strict';
            s.d(t, { k: () => d });
            var i = s(25839),
                r = s(61493),
                a = s(3392),
                n = s(4254),
                o = s(74672),
                l = s.n(o);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: s, title: o, placement: d = 'top', children: u } = e;
                    return (0, i.jsxs)(a.m_, {
                        enabled: s,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, i.jsx)(a.ZI, {
                                className: l().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61561: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => a });
            var i = s(27954),
                r = s(44806);
            let a = () => {
                var e, t;
                let {
                    user: s,
                    settings: { browserInfo: a },
                    experiments: n,
                } = (0, i.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    s.isAuthorized &&
                    !s.hasPlus &&
                    (null == (t = n.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, s) => {
            'use strict';
            s.d(t, { V: () => g });
            var i = s(25839),
                r = s(82298),
                a = s(88204),
                n = s(74631),
                o = s(36619),
                l = s(61493),
                c = s(71035),
                d = s(23818),
                u = s(10820),
                m = s(86869),
                p = s(4254),
                _ = s(29481),
                h = s(85686),
                x = s(27954),
                v = s(53454),
                f = s.n(v);
            let g = (0, a.PA)((e) => {
                let { artist: t, className: s } = e,
                    { fullscreenPlayer: a } = (0, x.g)(),
                    v = (0, h.Z)(t.url),
                    E = (0, _.N)(),
                    A = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(g, { artist: t, className: s }, t.id)), e), []))
                        );
                    }, [t, s]),
                    T = (0, c.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), E({ to: o.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, r.$)(f().root, s),
                            onClick: T,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(m.t, {
                                    radius: 'round',
                                    className: f().cover,
                                    children: (0, i.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: f().image }),
                                }),
                                (0, i.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        62926: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => x });
            var i = s(25839),
                r = s(82298),
                a = s(88204),
                n = s(74631),
                o = s(39004),
                l = s(74245),
                c = s(61493),
                d = s(49656),
                u = s(66738),
                m = s(27954),
                p = s(60924),
                _ = s(92870),
                h = s.n(_);
            let x = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: s, trackId: a, containerClassName: _, variant: x, size: v = 'xxxs', ...f } = e,
                    { formatMessage: g } = (0, o.A)(),
                    {
                        settings: { isMobile: E },
                    } = (0, m.g)(),
                    [A, T] = (0, n.useState)(null),
                    N = (0, d.L)(() => {
                        switch (x) {
                            case l.JU.E:
                                return 'explicit';
                            case l.JU.AGE_12:
                            case l.JU.AGE_16:
                            case l.JU.AGE_18:
                                return 'adult';
                            case l.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    b = (0, n.useMemo)(() => g({ id: 'extra-explicit.explicit-mark' }), [g]);
                (0, n.useEffect)(() => {
                    s && s().then(T);
                }, [s, a]);
                let y = (null == A ? void 0 : A.join('\n')) || '',
                    S = !!(null == A ? void 0 : A.length) && !E,
                    j = y.length > 0 ? y : b;
                return (0, i.jsx)(p.k, {
                    description: y,
                    placement: 'bottom-start',
                    enabled: S,
                    children: (0, i.jsx)('span', {
                        className: _,
                        children:
                            x === l.JU.SUBSTITUTED
                                ? (0, i.jsxs)('svg', {
                                      className: (0, r.$)(h().explicitMark, t),
                                      viewBox: '0 0 16 16',
                                      role: 'img',
                                      'aria-label': j,
                                      style: { width: 'var(--ym-icon-size-'.concat(v, ')'), height: 'var(--ym-icon-size-'.concat(v, ')') },
                                      ...f,
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
                                      className: (0, r.$)(h().explicitMark, t),
                                      'aria-label': j,
                                      variant: N,
                                      size: v,
                                      ...f,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                  }),
                    }),
                });
            });
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
        71705: (e, t, s) => {
            'use strict';
            s.d(t, { K: () => h });
            var i = s(25839),
                r = s(39004),
                a = s(71035),
                n = s(21468),
                o = s(91149),
                l = s(92942),
                c = s(27954),
                d = s(57549),
                u = s(33660),
                m = s(74631),
                p = s(31860),
                _ = s(93297);
            let h = (e) => {
                let {
                        user: t,
                        paywall: s,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, c.g)(),
                    { formatMessage: x } = (0, r.A)(),
                    { notify: v } = (0, l.l)(),
                    f = (() => {
                        let { notify: e } = (0, l.l)(),
                            [t, s] = (0, m.useState)(!1),
                            { formatMessage: n } = (0, r.A)();
                        return (0, a.c)(async (r) => {
                            let { album: a, withLink: l = !0, withNotification: c = !0 } = r;
                            if (t) return;
                            let m = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                            s(!0);
                            let h = await a.toggleLike();
                            (s(!1),
                                c &&
                                    (h === p.f.OK
                                        ? e((0, i.jsx)(_.T, { withLink: l, album: m }), { containerId: o.u.INFO })
                                        : e((0, i.jsx)(d.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR })));
                        });
                    })(),
                    { pageAlbumId: g } = (0, n.T)();
                return (0, a.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: g, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void s.openModal()
                            : t.isAuthorized
                              ? f({ album: e })
                              : void v((0, i.jsx)(d.h, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                });
            };
        },
        71996: (e, t, s) => {
            'use strict';
            s.d(t, { k: () => u });
            var i = s(25839),
                r = s(74631),
                a = s(39004),
                n = s(61493),
                o = s(4071),
                l = s(66738),
                c = s(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: s,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: p,
                            iconClassName: _,
                            className: h,
                            forwardRef: x,
                            style: v,
                            children: f,
                        } = e,
                        { formatMessage: g } = (0, a.A)(),
                        E = g({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(o.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: s,
                        flexIcon: !0,
                        'aria-label': E,
                        onClick: p,
                        ref: x,
                        icon: (0, i.jsx)(l.I, { variant: 'trailer', size: u, className: _ }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: f,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        73182: (e, t, s) => {
            'use strict';
            s.d(t, { b: () => a });
            var i = s(56829),
                r = s(35015);
            let a = (e) => {
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
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        76481: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => r });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: r = {}, ...a } = t,
                        n = e || 'Internal error';
                    (super(n, a), (this.message = n), (this.code = s), (this.data = r), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class r extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...s } = {}) {
                    (super(e, { code: t, ...s }), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        77174: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => a });
            var i = s(39004),
                r = s(56829);
            let a = (e, t) => {
                let { formatMessage: s } = (0, i.A)();
                if (e)
                    switch (t) {
                        case r._.AUDIOBOOK:
                            return s({ id: 'non-music.shelf-unsubscribe' });
                        case r._.FAIRY_TALE:
                            return s({ id: 'interface-actions.do-not-like' });
                        default:
                            return s({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case r._.AUDIOBOOK:
                        return s({ id: 'non-music.shelf-subscribe' });
                    case r._.FAIRY_TALE:
                        return s({ id: 'interface-actions.like' });
                    default:
                        return s({ id: 'interface-actions.subscribe' });
                }
            };
        },
        77920: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        78299: (e, t, s) => {
            'use strict';
            s.d(t, { SomethingWentWrong: () => N });
            var i = s(25839),
                r = s(82298),
                a = s(88204),
                n = s(74631),
                o = s(39004),
                l = s(8487);
            s(93588);
            var c = s(4071),
                d = s(66738),
                u = s(4254),
                m = s(67379),
                p = s(36619),
                _ = s(76945),
                h = s(59450),
                x = s(84e3),
                v = s(97952),
                f = s(89192),
                g = s(53712),
                E = s(15270),
                A = s(68854),
                T = s.n(A);
            let N = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: s = !0 } = e,
                    { formatMessage: a } = (0, o.A)(),
                    A = a({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: s } = (0, h.gf)(),
                        { pageId: i } = (0, v.$)(),
                        r = (0, x.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !s || !i) return;
                        let a = (0, m.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: s,
                                pageId: i,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, _.z5)(t.evgenInstance, a);
                    }, [t, e, s, i, r]);
                })(A);
                let { sendRefreshEvent: N } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: s } = (0, v.$)(),
                            i = (0, x.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !s) return;
                                let r = (0, m.F)({
                                    params: {
                                        actionType: p.ActionType.Refresh,
                                        userInteractionType: p.UserInteractionType.Tap,
                                        entityType: p.EntityTypes.Error,
                                        entityId: p.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: s,
                                        pageStyle: p.PageStyles.Fullscreen,
                                        pagePlacement: p.PagePlacements.Fullscreen,
                                        mainObjectType: p.DomainObjectType.NonApplicable,
                                        mainObjectId: p.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, _.bv)(e.evgenInstance, r);
                            }, [e, t, s, i]),
                        };
                    })(),
                    b = (0, n.useCallback)(() => {
                        (N(), (window.location.href = g.Z.main.href));
                    }, [N]),
                    { contentRef: y } = (0, f.g)();
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(T().root, t),
                    children: [
                        s &&
                            (0, i.jsx)(E.L, { withBackwardFallback: '/', className: (0, r.$)(T().navigation, { [T().navigation_desktop]: !y }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(T().content, { [T().content_shrink]: !s }),
                            children: [
                                (0, i.jsx)(d.I, { className: T().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.DZ, { className: (0, r.$)(T().title, T().important), variant: 'h3', size: 'xs', children: A }),
                                (0, i.jsxs)(u.HL, {
                                    className: (0, r.$)(T().text, T().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(c.$, {
                                    onClick: b,
                                    className: T().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        87138: (e, t, s) => {
            'use strict';
            s.d(t, { XU: () => m, YK: () => u });
            var i,
                r,
                a = s(23198),
                n = s(74631),
                o = s(39004);
            (!(function (e) {
                ((e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName'));
            })(i || (i = {})),
                (function (e) {
                    ((e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts'));
                })(r || (r = {})));
            var l = function (e) {
                var t = (0, o.A)(),
                    s = e.value,
                    i = e.children,
                    r = (0, a.__rest)(e, ['value', 'children']);
                return i(t.formatNumberToParts(s, r));
            };
            function c(e) {
                var t = function (t) {
                    var s = (0, o.A)(),
                        i = t.value,
                        r = t.children,
                        n = (0, a.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof i ? new Date(i || 0) : i;
                    return r('formatDate' === e ? s.formatDateToParts(l, n) : s.formatTimeToParts(l, n));
                };
                return ((t.displayName = r[e]), t);
            }
            function d(e) {
                var t = function (t) {
                    var s = (0, o.A)(),
                        i = t.value,
                        r = t.children,
                        l = (0, a.__rest)(t, ['value', 'children']),
                        c = s[e](i, l);
                    if ('function' == typeof r) return r(c);
                    var d = s.textComponent || n.Fragment;
                    return n.createElement(d, null, c);
                };
                return ((t.displayName = i[e]), t);
            }
            function u(e) {
                return e;
            }
            ((l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts'));
            var m = d('formatDate');
            (d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), c('formatDate'), c('formatTime'));
        },
        90780: (e, t, s) => {
            'use strict';
            s.d(t, { C: () => c });
            var i = s(25839),
                r = s(74631),
                a = s(61493),
                n = s(4254),
                o = s(44408),
                l = s.n(o);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: s } = e,
                    [o, c] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, i.jsx)(
                            n.HL,
                            {
                                className: l().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': a.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(s, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        91626: (e, t, s) => {
            'use strict';
            (s.d(t, { G: () => r }), s(77920));
            var i = s(76481);
            class r extends i.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        92870: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        93297: (e, t, s) => {
            'use strict';
            s.d(t, { T: () => o });
            var i = s(25839),
                r = s(88204),
                a = s(3163),
                n = s(73182);
            let o = (0, r.PA)((e) => {
                let { album: t, closeToast: s, withLink: r } = e,
                    o = (0, n.b)(t.type);
                return (0, i.jsx)(a.O, {
                    closeToast: s,
                    entityVariant: o,
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
        93690: (e, t, s) => {
            'use strict';
            s.d(t, { GX: () => a.G, X1: () => i.X, m5: () => r.m });
            var i = s(77920),
                r = s(76481),
                a = s(91626);
            s(95919);
        },
        94484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        94520: (e) => {
            e.exports = {
                root: 'CollectionShelfNewEpisodesPage_root__HTWkS',
                scrollableContainer: 'CollectionShelfNewEpisodesPage_scrollableContainer__xGZcJ',
                footer: 'CollectionShelfNewEpisodesPage_footer__0i466',
            };
        },
        95919: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1676, 3349, 1107, 6749, 7339, 6287, 3472, 2121, 7349, 3920, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 4245, 3269, 4163, 3246,
                4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 2533, 8222, 4475, 5056, 7358,
            ],
            () => e((e.s = 57896)),
        ),
            (_N_E = e.O()));
    },
]);
