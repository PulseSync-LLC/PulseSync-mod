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
        2096: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => P });
            var i = a(25839),
                r = a(82298),
                s = a(88204),
                n = a(74631),
                l = a(39004),
                o = a(44031),
                c = a(61493),
                d = a(71035),
                u = a(66738),
                m = a(3392),
                _ = a(4254),
                v = a(17545),
                p = a(4071);
            let h = (e) => {
                let { className: t, variant: a = 'text', onClick: r, iconClassName: s, iconSize: o, size: d = 's', ariaLabel: m } = e,
                    { formatMessage: _ } = (0, l.A)(),
                    v = null != m ? m : _({ id: 'play-queue.delete-from-queue' }),
                    h = (0, n.useCallback)(
                        (e) => {
                            (null == r || r(), e.stopPropagation());
                        },
                        [r],
                    );
                return (0, i.jsx)(p.$, {
                    className: t,
                    withRipple: !1,
                    variant: a,
                    size: d,
                    radius: 'round',
                    'aria-label': v,
                    onClick: h,
                    icon: (0, i.jsx)(u.I, { size: o, className: s, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var x = a(79367),
                g = a(34159),
                y = a(85743),
                b = a(27954),
                C = a(64720),
                A = a(71996),
                f = a(6304),
                T = a(65165),
                S = a(38097),
                k = a(91907),
                I = a(3407),
                E = a(34826),
                N = a.n(E),
                j = a(82684),
                R = a(85957),
                O = a.n(R);
            let L = (0, s.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: a } = (0, l.A)();
                    return t.isDownloaded
                        ? (0, i.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': a({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, i.jsx)(j.A, { value: t.downloadingProgress, size: 16, className: O().downloadingProgress, progressBarClassName: O().progress })
                          : null;
                }),
                P = (0, s.PA)((e) => {
                    var t;
                    let {
                            className: a,
                            track: s,
                            withLightning: p,
                            ignoreDislikedStyles: E,
                            onLikeClick: j,
                            utmLink: R,
                            withSecondaryColor: O,
                            handleRemove: P,
                            withTrailer: M = !0,
                            likeIconSize: w = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: B,
                        } = e,
                        { user: H, trailer: U } = (0, b.g)(),
                        { formatMessage: K } = (0, l.A)(),
                        { sendLikeSearchFeedback: V } = (0, y.z)(),
                        [Y, W] = (0, n.useState)(!1),
                        [z, G] = (0, n.useState)(!1),
                        F = (0, x.P)(),
                        $ = (0, v.K)(s),
                        {
                            duration: X,
                            lightning: q,
                            ugc: Q,
                        } = ((e, t, a) => {
                            var i;
                            let { withLightning: r, isUGC: s } = t,
                                n = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / S.k7);
                                              return (0, k.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== n ? { text: n, ariaLabel: (0, T.j)(Math.round((null != (i = e.durationMs) ? i : 0) / 1e3), a) } : null,
                                lightning: r ? { label: a({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: s ? { label: a({ id: 'ugc.track-description' }) } : null,
                            };
                        })(s, { withLightning: p, isUGC: s.isUGC }, K),
                        Z = (0, g.F)(),
                        J = H.hasPlus,
                        ee = !s.isRemoved && s.isAvailable && !B,
                        et = (0, d.c)(async () => {
                            (Y || s.isLiked || (W(!0), null == V || V()), await $(), null == j || j(s.isLiked));
                        }),
                        ea = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        ei = (0, d.c)((e) => {
                            if ((e.stopPropagation(), F())) return void e.preventDefault();
                            (U.openTrackTrailer(s.id), Z(o.DomainObjectType.Track, s.id));
                        }),
                        er = (0, n.useMemo)(() => {
                            if (ee)
                                return (0, i.jsx)('div', {
                                    onClick: ea,
                                    children: (0, i.jsx)(I._, {
                                        track: s,
                                        open: z,
                                        onOpenChange: G,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: R,
                                        className: (0, r.$)(N().contextMenu, { [N().contextMenu_visible]: z }),
                                        handleRemove: P,
                                        withTrailer: M,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ea, P, z, ee, M, s, R]);
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(N().root, N().controls, a, {
                            [N().controls_dislikedControls]: s.isDisliked,
                            [N().controls_dislikedColors]: s.isDisliked && !E,
                            [N().controls_disabled]: !s.isAvailable,
                            [N().root_withSecondaryColor]: O,
                        }),
                        children: [
                            q && (0, i.jsx)(u.I, { 'aria-label': q.label, size: 'xxs', className: N().lightning, variant: 'lightning' }),
                            Q &&
                                (0, i.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(u.I, {
                                            'aria-label': Q.label,
                                            size: 'xxs',
                                            className: N().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(m.ZI, { children: Q.label }),
                                    ],
                                }),
                            J && (0, i.jsx)('div', { className: (0, r.$)(N().item, N().downloadIcon), children: (0, i.jsx)(L, { track: s }) }),
                            P && !B && (0, i.jsx)(h, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(N().item, N().removeButton), onClick: P, ariaLabel: D }),
                            ee &&
                                (0, i.jsx)(f.WithOffline, {
                                    fallback: (0, i.jsx)(C.c, {
                                        size: 'xs',
                                        iconSize: w,
                                        className: (0, r.$)(N().item, N().likeIcon),
                                        isLiked: s.isLiked,
                                        onClick: et,
                                        disabled: !H.isAuthorized,
                                    }),
                                }),
                            (null == (t = s.trailer) ? void 0 : t.isAvailable) &&
                                s.isAvailable &&
                                (0, i.jsx)(f.WithOffline, {
                                    fallback: (0, i.jsx)(A.k, {
                                        className: (0, r.$)(N().item, N().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ei,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(N().item, N().contextMenuWrapper),
                                children: [
                                    null !== X &&
                                        (0, i.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(N().duration, { [N().duration_hidden]: z && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': X.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: X.text }),
                                        }),
                                    er,
                                ],
                            }),
                        ],
                    });
                });
        },
        3669: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => g });
            var i = a(74631),
                r = a(67379),
                s = a(20934),
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
                    { tabId: b, tabPos: C, isTabSelectedByDefault: A } = (0, x.R)(),
                    { offsetBlockPosY: f } = (0, m.u)(),
                    { blockType: T, blockId: S, blockPosX: k, blockPosY: I, mainObjectId: E, mainObjectType: N, displayReasonId: j } = (0, u.N)(),
                    { filterKey: R, filterValue: O, filterPos: L } = (0, _.G)(),
                    { objectType: P, objectsCount: M, objectId: w, objectPosX: D, objectPosY: B } = (0, v.J)(),
                    { skeleton: H } = (0, h.b)(),
                    U = null != j ? j : y,
                    K = (0, l.L)(() => (void 0 !== f && void 0 !== I ? f + I : I));
                return (0, i.useCallback)(
                    (i, n) => {
                        if (!t || !g || !d.xK.includes(g) || !d.fD.includes(g)) return;
                        let l = c.F[g];
                        if (!l) return;
                        let o = {
                            hash: a,
                            pageId: l,
                            entityType: T,
                            entityId: S,
                            entityPosX: k,
                            entityPosY: K,
                            objectsCount: M,
                            viewUuid: n,
                            objectType: P,
                            objectId: w,
                            objectPosX: D,
                            objectPosY: B,
                        };
                        (void 0 !== R && ((o.filterKey = R), (o.filterValue = O), (o.filterPos = L)),
                            d.qG.includes(g) && ((o.tabId = b), (o.tabPos = C), (o.isTabSelectedByDefault = A)),
                            H && (o.skeletonId = H),
                            'string' == typeof E && 'string' == typeof N && ((o.mainObjectType = N), (o.mainObjectId = E)),
                            U && (o.displayReasonId = U));
                        let u = (0, r.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (i ? (0, s.Pf)(t.evgenInstance, u) : (0, s.nv)(t.evgenInstance, u));
                    },
                    [t, U, S, k, K, T, R, L, O, a, A, e, E, N, w, D, B, P, M, g, H, b, C],
                );
            };
        },
        4111: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        4805: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => p });
            var i = a(25839),
                r = a(88204),
                s = a(74631),
                n = a(61493),
                l = a(50209),
                o = a(3718),
                c = a(2096),
                d = a(77737),
                u = a(61801),
                m = a(69730),
                _ = a(57963),
                v = a.n(_);
            let p = (0, r.PA)((e) => {
                let { track: t, albumArtists: a, position: r, playContextParams: _, withLightning: p } = e,
                    h = (0, l.D)({ playContextParams: _, entityId: t.entityId }),
                    x = (0, s.useCallback)((e) => (0, i.jsx)(u.G, { track: t, position: r, className: v().playButtonCell, ...e }), [t, r]);
                return (0, i.jsx)(m.C, {
                    track: t,
                    withLightning: p,
                    meta: (0, i.jsx)(d.j, { variant: o.X.ALBUM, albumArtists: a, track: t, withSavingQueryParams: !0 }),
                    playButtonCellRender: x,
                    controls: (0, i.jsx)(c.Q, { withLightning: p, track: t, className: v().controlsBarCell, utmLink: _.contextData.utmLink }),
                    ...h,
                    'data-test-id': n.Kq.track.TRACK_ALBUM,
                });
            });
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
        13232: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => i });
            let i = (0, a(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        13624: (e, t, a) => {
            'use strict';
            a.d(t, { default: () => r.a });
            var i = a(68545),
                r = a.n(i);
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
                    { canBack: g, canForward: y, moveBack: b, moveForward: C } = (0, m.J)(p),
                    A = (0, n.useRef)(null),
                    f = (0, c.c)((e) => {
                        (e.stopPropagation(), b());
                    }),
                    T = (0, c.c)((e) => {
                        (e.stopPropagation(), C());
                    });
                return (
                    (0, n.useEffect)(() => {
                        s && A.current && g && A.current.focus();
                    }, [g]),
                    (0, i.jsxs)('div', {
                        className: (0, r.$)(v().root, _),
                        'data-test-id': o.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, i.jsx)(d.$, {
                                    ref: A,
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
        18412: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => y });
            var i = a(25839),
                r = a(82298),
                s = a(74631),
                n = a(44031),
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
                            description: b,
                            viewAllActionLink: C,
                            controls: A,
                            titleSize: f = 'm',
                            coverBackgroundColor: T,
                            coverRadius: S = 's',
                            titleClassName: k,
                            titleLineClamp: I,
                            fallbackIconVariant: E,
                            available: N = !0,
                            onViewAllAction: j,
                            titleChildren: R,
                            children: O,
                            headingRef: L,
                            coverContainerClassName: P,
                            headingVariant: M = 'h3',
                            withDescriptionWidthLimit: w = !0,
                            isShimmerVisible: D,
                            isShimmerActive: B,
                            withCover: H,
                            withDescription: U,
                            forwardRef: K,
                            shimmerCoverClassName: V,
                            shouldSendAnalyticsOnLoaded: Y,
                            ...W
                        } = e,
                        z = (0, _.f)(),
                        G = (0, s.useRef)(null),
                        F = a || H,
                        $ = b || U,
                        X = (0, s.useCallback)(() => {
                            G.current && 'focus' in G.current && G.current.focus();
                        }, []),
                        q = (0, v.N)(),
                        Q = (0, s.useCallback)(() => {
                            j ? j() : q({ to: n.AppScreen.Link });
                        }, [q, j]);
                    (0, s.useEffect)(() => {
                        Y && z();
                    }, [Y, z]);
                    let Z = (0, s.useMemo)(
                            () =>
                                y && C && N
                                    ? (0, i.jsxs)(p.N, {
                                          className: x().title,
                                          containerClassName: x().linkContainer,
                                          textClassName: x().linkText,
                                          icon: (0, i.jsx)(o.I, { className: x().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: C,
                                          onClick: Q,
                                          'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(m.DZ, {
                                                  id: h,
                                                  className: (0, r.$)(x().heading, k),
                                                  variant: M,
                                                  size: f,
                                                  weight: 'bold',
                                                  lineClamp: I,
                                                  ref: L,
                                                  children: y,
                                              }),
                                              R,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: x().title,
                                          children: [
                                              (0, i.jsx)(m.DZ, {
                                                  id: h,
                                                  className: (0, r.$)(x().heading, k, { [x().heading_notAvailable]: !N }),
                                                  variant: M,
                                                  size: f,
                                                  weight: 'bold',
                                                  lineClamp: I,
                                                  ref: L,
                                                  'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                                  children: y,
                                              }),
                                              R,
                                          ],
                                      }),
                            [N, Q, L, M, h, y, k, I, f, C, R],
                        ),
                        J = (0, s.useMemo)(() => (U && D ? (0, i.jsx)(u.W, { isActive: B, className: x().shimmerDescription }) : b), [U, D, b, B]),
                        ee = (0, s.useMemo)(
                            () =>
                                H && D
                                    ? (0, i.jsx)(u.W, { isActive: B, className: (0, r.$)(x().shimmerCover, V), radius: 's' })
                                    : (0, i.jsx)(c._V, {
                                          src: a,
                                          fallbackIconVariant: E,
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
                            [T, a, E, X, B, D, V, H],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(x().root, t),
                        ref: K,
                        ...W,
                        'data-test-id': l.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: x().start,
                                children: [
                                    F && (0, i.jsx)(d.t, { radius: S, className: (0, r.$)(x().coverContainer, P), children: ee }),
                                    (0, i.jsxs)('div', {
                                        className: x().textContainer,
                                        children: [
                                            g,
                                            Z,
                                            $ &&
                                                (0, i.jsx)(m.HL, {
                                                    id: ''.concat(h, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: w ? 2 : void 0,
                                                    className: (0, r.$)(x().description, { [x().description_widthLimit]: w }),
                                                    'data-test-id': l.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            A || O,
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
        22413: (e, t, a) => {
            'use strict';
            a.d(t, { Jt: () => s, TF: () => l, hZ: () => n });
            var i = function () {
                return (i =
                    Object.assign ||
                    function (e) {
                        for (var t, a = 1, i = arguments.length; a < i; a++)
                            for (var r in (t = arguments[a])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e;
                    }).apply(this, arguments);
            };
            function r(e, t) {
                if (!t) return '';
                var a = '; ' + e;
                return !0 === t ? a : a + '=' + t;
            }
            function s(e) {
                return (function (e) {
                    for (var t = {}, a = e ? e.split('; ') : [], i = 0; i < a.length; i++) {
                        var r = a[i].split('='),
                            s = r.slice(1).join('=');
                        '"' === s[0] && (s = s.slice(1, -1));
                        try {
                            t[decodeURIComponent(r[0])] = s.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function n(e, t, a) {
                var s;
                document.cookie =
                    ((s = i({ path: '/' }, a)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                r('Expires', e.expires ? e.expires.toUTCString() : '') +
                                r('Domain', e.domain) +
                                r('Path', e.path) +
                                r('Secure', e.secure) +
                                r('SameSite', e.sameSite)
                            );
                        })(s));
            }
            function l(e, t) {
                n(e, '', i(i({}, t), { expires: -1 }));
            }
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
        32652: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => p });
            var i = a(25839),
                r = a(82298),
                s = a(88204),
                n = a(74631),
                l = a(39004),
                o = a(61493),
                c = a(66738),
                d = a(74245),
                u = a(27954),
                m = a(60924),
                _ = a(92870),
                v = a.n(_);
            let p = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: a, trackId: s, containerClassName: _, variant: p, size: h = 'xxxs', ...x } = e,
                    { formatMessage: g } = (0, l.A)(),
                    {
                        settings: { isMobile: y },
                    } = (0, u.g)(),
                    [b, C] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    a && a().then(C);
                }, [a, s]);
                let {
                    iconVariant: A,
                    descriptionText: f,
                    isTooltipEnabled: T,
                    ariaLabel: S,
                } = ((e, t) => {
                    let { variant: a, descriptionTexts: i, isMobile: r } = e,
                        s = (null == i ? void 0 : i.join('\n')) || '';
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
                        })(a),
                        descriptionText: s,
                        isTooltipEnabled: !!(null == i ? void 0 : i.length) && !r,
                        ariaLabel: s.length > 0 ? s : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: p, descriptionTexts: b, isMobile: y }, g);
                return (0, i.jsx)(m.k, {
                    description: f,
                    placement: 'bottom-start',
                    enabled: T,
                    children: (0, i.jsx)('span', {
                        className: _,
                        children: (0, i.jsx)(c.I, {
                            className: (0, r.$)(v().explicitMark, t),
                            'aria-label': S,
                            variant: A,
                            size: h,
                            ...x,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
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
        46450: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var a in t) Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
                })(t, {
                    bindSnapshot: function () {
                        return n;
                    },
                    createAsyncLocalStorage: function () {
                        return s;
                    },
                    createSnapshot: function () {
                        return l;
                    },
                }));
            let a = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class i {
                disable() {
                    throw a;
                }
                getStore() {}
                run() {
                    throw a;
                }
                exit() {
                    throw a;
                }
                enterWith() {
                    throw a;
                }
                static bind(e) {
                    return e;
                }
            }
            let r = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function s() {
                return r ? new r() : new i();
            }
            function n(e) {
                return r ? r.bind(e) : i.bind(e);
            }
            function l() {
                return r
                    ? r.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
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
        49971: (e, t, a) => {
            'use strict';
            function i(e) {
                let { moduleIds: t } = e;
                return null;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }),
                a(25839),
                a(71910),
                a(65780),
                a(4865));
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
            let b = (e) => e.data.itemId.seeds.sort().join(','),
                C = (e) => e.data.itemId.seeds.sort().join(','),
                A = (e) => {
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
                                                          id: C(e),
                                                          meta: {
                                                              ...(0, l.e)(r.wave),
                                                              imageUrl: r.simpleWaveForegroundImageUrl,
                                                              backgroundColor: r.simpleWaveBackgroundColor,
                                                          },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, s.wg)({ type: i, id: C(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
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
                                                          id: b(e),
                                                          meta: { ...(0, y.l)(i.wave, i.agent) },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, s.wg)({ type: n.D.QUERY_TO_VIBE, id: b(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
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
            let S = s.gK.compose(
                s.gK.model({
                    id: s.gK.string,
                    type: s.gK.enumeration(Object.values(n.D)),
                    tabIndex: s.gK.number,
                    blockIndex: s.gK.number,
                    trackIndex: s.gK.maybeNull(s.gK.number),
                }),
                T.X,
            );
            var k = a(55180),
                I = a(16886);
            let E = (e) => ({ type: I.z4.Unloaded, meta: { id: e.entityId } });
            var N = a(88148);
            let j = s.gK
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
                R = s.gK.compose(s.gK.model('MusicHistoryBaseBlock', { id: s.gK.string, tracks: s.gK.array(j) }), T.X).views((e) => ({
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
                        return e.tracks.map(E);
                    },
                })),
                O = R.props({ type: s.gK.literal(n.D.ALBUM), available: s.gK.boolean, meta: s.gK.maybeNull(k.J) })
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
            var L = a(69088);
            let P = R.props({ type: s.gK.literal(n.D.ARTIST), available: s.gK.boolean, meta: s.gK.maybeNull(L.P) })
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
                M = s.gK
                    .model('MusicHistoryCommon', { id: s.gK.string, type: s.gK.union(s.gK.literal(n.D.OTHER), s.gK.literal(n.D.SEARCH)), tracks: s.gK.array(j) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get contextId() {
                            return e.tracks.map((e) => e.id).join(',');
                        },
                        get entitiesData() {
                            return e.tracks.map(E);
                        },
                    }));
            var w = a(42546);
            let D = R.props({ type: s.gK.literal(n.D.PLAYLIST), meta: s.gK.maybeNull(w.I) })
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
            let U = R.props({
                    id: s.gK.string,
                    type: s.gK.union(s.gK.literal(n.D.WAVE), s.gK.literal(n.D.MULTIVIBE_WAVE), s.gK.literal(n.D.QUERY_TO_VIBE)),
                    meta: s.gK.maybeNull(B.G),
                }).views((e) => ({
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
                K = s.gK.union(O, P, D, U, M),
                V = s.gK.model('MusicHistoryTab', { date: s.gK.string, blocks: s.gK.maybeNull(s.gK.array(K)) }),
                Y = s.gK
                    .compose(
                        s.gK.model('MusicHistoryPage', {
                            indexesMap: s.gK.map(s.gK.number),
                            items: s.gK.maybeNull(s.gK.array(S)),
                            datesMap: s.gK.map(s.gK.boolean),
                            tabs: s.gK.maybeNull(s.gK.array(V)),
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
                                        ((e.tabs = (0, s.wg)(r.historyTabs.map(A))), t.fillItemsAndIndexes(), (e.loadingState = d.G.RESOLVE));
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
                                                                return ''.concat(e.type, '_').concat(C(e));
                                                            case n.D.MULTIVIBE_WAVE:
                                                                return ''.concat(e.type, '_').concat(h(e));
                                                            case n.D.PLAYLIST:
                                                                return ''.concat(e.type, '_').concat(g(e));
                                                            case n.D.ARTIST:
                                                                return ''.concat(e.type, '_').concat(e.data.itemId.id);
                                                            case n.D.QUERY_TO_VIBE:
                                                                return ''.concat(e.type, '_').concat(b(e));
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
                W = { loadingState: d.G.IDLE, indexesMap: {}, items: null, datesMap: {}, tabs: null },
                { pageStoreProvider: z } = (0, i.W)({ createStore: (e) => Y.create(W, e), patchKey: r.n.MUSIC_HISTORY }),
                G = z;
        },
        56348: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => V });
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
                b = a(44031),
                C = a(29481),
                A = a(85686),
                f = a(85743),
                T = a(40207);
            let S = (0, s.PA)((e) => {
                    let { item: t, linkClassName: a, captionClassName: r, captionSize: s = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: m,
                            link: _,
                            title: v,
                            ariaLabel: p,
                            tooltipText: S,
                            isTooltipEnabled: k,
                            handleNavigate: I,
                        } = ((e) => {
                            var t, a;
                            let { item: i, allArtistsTitle: r, withCustomTooltip: s } = e,
                                { formatMessage: n } = (0, y.A)(),
                                l = ((e, t) => {
                                    let { item: a, allArtistsTitle: i, withCustomTooltip: r } = e,
                                        s = i || a.name;
                                    return {
                                        ...a,
                                        title: r ? void 0 : s,
                                        ariaLabel: a.link ? t({ id: 'entity-names.artist-name' }, { artistName: a.name }) : void 0,
                                        tooltipText: s,
                                        isTooltipEnabled: !i && r,
                                    };
                                })({ item: i, allArtistsTitle: r, withCustomTooltip: s }, n),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                m = (0, A.Z)(null != (a = null == (t = l.link) ? void 0 : t.href) ? a : l.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, f.z)(),
                                v = (0, C.N)(),
                                p = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), m(e));
                                }),
                                h = ((e) => {
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
                                })({ artist: l.artist, callback: p }),
                                x = (0, d.c)((e) => {
                                    (v({ to: b.AppScreen.ArtistScreen }), null == _ || _(), h(e));
                                });
                            return { ...l, handleNavigate: x };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: l });
                    return _
                        ? (0, i.jsx)(g.N, {
                              ..._,
                              'aria-label': p,
                              className: a,
                              onClick: I,
                              title: v,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(o.m_, {
                                  enabled: k,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: S,
                                  hoverSettings: c,
                                  children: (0, i.jsx)(x.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: r, children: m }),
                              }),
                          })
                        : (0, i.jsx)(o.m_, {
                              enabled: k,
                              offsetOptions: 4,
                              placement: 'top',
                              text: S,
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
                k = (e) => {
                    let { group: t, linkClassName: a, captionClassName: r, captionSize: s, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(S, {
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
                                            (0, i.jsx)(S, {
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
            var I = a(8487),
                E = a(9079);
            let N = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: a, handleOnSpoilerClick: s } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(E.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(p().spoiler, a),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(I.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var j = a(28631),
                R = a(33049),
                O = a(61912),
                L = a(36286),
                P = a.n(L);
            let M = (0, s.PA)((e) => {
                    let { label: t, artists: a, forwardRef: r } = e;
                    return (0, i.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, R.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: r, children: t }),
                            (0, i.jsx)(o.ZI, { className: P().tooltipContent, children: a.map((e) => (0, i.jsx)(O.V, { artist: e, className: P().artistItem }, e.id)) }),
                        ],
                    });
                }),
                w = (0, n.forwardRef)((e, t) => (0, i.jsx)(M, { forwardRef: t, ...e }));
            var D = a(10820),
                B = a(93510),
                H = a.n(B);
            let U = (0, s.PA)((e) => {
                    let { label: t, artists: a } = e,
                        { formatMessage: s } = (0, y.A)();
                    return (0, i.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, r.$)(H().root, H().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: a.map((e) => (0, i.jsx)(O.V, { artist: e }, e.id)),
                    });
                }),
                K = (0, s.PA)((e) => {
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
                            (0, j.A)(() => {
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
                        return (s || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(U, { artists: t, label: a }) : (0, i.jsx)(w, { artists: t, label: a })) : a;
                }),
                V = (0, s.PA)((e) => {
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
                        b = ((e) => {
                            var t, a, i;
                            let { separator: r, visibleArtistsCount: s, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = e,
                                v = null != (t = e.artists) ? t : [],
                                p = null == (a = e.withAllArtistsTitle) || a,
                                h = null == (i = e.withCustomTooltip) || i,
                                x = (0, n.useRef)(null),
                                [g, y] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: b },
                                } = (0, u.g)(),
                                C = ((!b || 1 === v.length) && m) || !m,
                                A = ((e, t) => {
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
                                })(v, { separator: r, visibleArtistsCount: g ? void 0 : s, withComposer: o, withLink: !!C && l, artistIdWithoutLink: c }),
                                f = p ? A.allArtistsTitle : '',
                                T = (0, d.c)((e) => {
                                    (y(!0), e.preventDefault());
                                });
                            return {
                                artists: v,
                                groups: A.groups,
                                hiddenArtistsCount: A.hiddenArtistsCount,
                                allArtistsTitle: f,
                                withCustomTooltip: h,
                                withContextMenu: m,
                                labelRef: x,
                                handleOnSpoilerClick: T,
                                isTooltipEnabled: !!f && h && !m && !b,
                                title: !f || h || m ? void 0 : f,
                            };
                        })(y),
                        C = (0, l.L)(() =>
                            b.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(g)
                                  ? g
                                  : (0, i.jsx)(N, { spoilerClassName: s, spoilerArtistsCount: b.hiddenArtistsCount, handleOnSpoilerClick: b.handleOnSpoilerClick }),
                        ),
                        A = (0, i.jsx)(o.m_, {
                            referenceRef: b.labelRef,
                            enabled: b.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: b.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: a ? { WebkitLineClamp: a } : void 0,
                                className: (0, r.$)(p().root, p()['root_variant_'.concat(x)], { [p().root_clamp]: a && a > 0, [p().ellipsis]: !a }, t),
                                title: b.title,
                                children: [
                                    b.groups.map((e) =>
                                        (0, i.jsx)(
                                            k,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: v,
                                                captionSize: h,
                                                allArtistsTitle: b.allArtistsTitle,
                                                withCustomTooltip: b.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    C,
                                ],
                            }),
                        });
                    return b.withContextMenu ? (0, i.jsx)(K, { labelRef: b.labelRef, artists: b.artists, label: A }) : A;
                });
        },
        56480: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            let i = (0, a(74631).createContext)({ pageAlbumId: void 0 });
        },
        57249: (e, t, a) => {
            'use strict';
            e.exports = a.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
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
                s = a(20934),
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
                        { tabId: b, tabPos: C, isTabSelectedByDefault: A } = (0, h.R)(),
                        { offsetBlockPosY: f } = (0, m.u)(),
                        { blockId: T, blockType: S, blockPosX: k, blockPosY: I, mainObjectType: E, mainObjectId: N, objectsCount: j } = (0, u.N)(),
                        { filterKey: R, filterValue: O, filterPos: L } = (0, _.G)(),
                        { skeleton: P } = (0, p.b)(),
                        M = (0, l.L)(() => (void 0 !== f && void 0 !== I ? f + I : I));
                    return (0, i.useCallback)(() => {
                        if (!t || !y || !d.xK.includes(y) || !x.includes(y) || e.current) return;
                        let i = { hash: g, pageId: c.F[y], entityType: S, entityId: T, entityPosX: k, entityPosY: M, objectsCount: j };
                        (void 0 !== R && ((i.filterKey = R), (i.filterValue = O), (i.filterPos = L)),
                            d.qG.includes(y) && ((i.tabId = b), (i.tabPos = C), (i.isTabSelectedByDefault = A)),
                            P && (i.skeletonId = P),
                            N && E && ((i.mainObjectType = E), (i.mainObjectId = N)));
                        let n = (0, r.F)({ params: i, logger: a, context: 'useSendEventOnBlockLoaded' });
                        n && ((0, s.uY)(t.evgenInstance, n), (e.current = !0));
                    }, [t, y, g, S, T, k, M, R, O, L, j, P, N, E, a, b, C, A]);
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
                l = a(44031),
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
                    b = (0, v.N)(),
                    C = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(y, { artist: t, className: a }, t.id)), e), []))
                        );
                    }, [t, a]),
                    A = (0, c.c)((e) => {
                        (s.modal.isOpened && s.modal.close(), b({ to: l.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, r.$)(g().root, a),
                            onClick: A,
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
                        C,
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
        65780: (e, t, a) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return i.workAsyncStorageInstance;
                    },
                }));
            let i = a(90720);
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
        68545: (e, t, a) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }));
            let i = a(20567)._(a(89729));
            function r(e, t) {
                var a;
                let r = {};
                'function' == typeof e && (r.loader = e);
                let s = { ...r, ...t };
                return (0, i.default)({ ...s, modules: null == (a = s.loadableGenerated) ? void 0 : a.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        69730: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => f });
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
                y = a(34546),
                b = a(26115),
                C = a(51027),
                A = a.n(C);
            let f = (0, s.PA)((e) => {
                var t;
                let {
                        className: a,
                        track: s,
                        meta: C,
                        beforeBlock: f,
                        controls: T,
                        playButtonCellRender: S,
                        withLightning: k,
                        isPlaying: I,
                        isCurrent: E,
                        togglePlay: N,
                        restartPlay: j,
                        onPlayClick: R,
                        playButtonIconSize: O,
                        skipFreemiumCloseListeningPaywall: L = !1,
                        ...P
                    } = e,
                    { shouldShowBuySubscriptionModal: M, showBuySubscriptionModal: w } = (0, m.q)(),
                    {
                        track: D,
                        fullscreenPlayer: B,
                        settings: { isMobile: H },
                        album: U,
                        albumCPA: { isPlusCPAPlayerBarEnabled: K },
                        paywall: { modal: V },
                    } = (0, h.g)(),
                    { ref: Y, intersectionPropertyId: W } = (0, u.n)(),
                    z = (0, d.b)(),
                    G = (0, c.P)(),
                    F = ((e) => {
                        let { track: t, withLightning: a } = e,
                            { formatMessage: i } = (0, g.A)();
                        return ((e, t, a) => {
                            var i;
                            let { withLightning: r } = t,
                                s = (0, y.j)(null != (i = e.artists) ? i : []);
                            return e.isAvailable
                                ? [s, e.title, e.version, r && a({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(a({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(s, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: a }, i);
                    })({ withLightning: k, track: s }),
                    $ = ((e) => {
                        let { sonataState: t } = (0, h.g)(),
                            a = t.status === p.MT.LOADING_MEDIA_SOURCE || t.status === p.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let i = t.entityMeta.entityId;
                            return a && i === e;
                        }
                        return a;
                    })(s.entityId),
                    X = K(U.id, null == (t = U.meta) ? void 0 : t.isNonMusic),
                    q = s.isAvailable && M && !X,
                    Q = (0, _.N)(),
                    Z = s.isAvailable && Q && !X && !L,
                    J = (0, b.w)({ track: s, callback: N }),
                    ee = (0, l.c)(() => {
                        D.open({ trackId: s.id, albumId: s.albumId });
                    }),
                    et = (0, b.w)({ track: s, callback: ee }),
                    { sendPlaySearchFeedback: ea } = (0, v.z)(),
                    [ei, er] = (0, n.useState)(!1),
                    es = (0, l.c)(() => {
                        if (!G()) {
                            if (q) return void w();
                            if (Z) return void V.open();
                            (ei || I || (er(!0), null == ea || ea()), J(), z(!I), null == R || R(!I));
                        }
                    }),
                    en = (0, l.c)(() => {
                        if (I) return void j();
                        es();
                    }),
                    el = (0, l.c)((e) => {
                        if (!s.isAvailable && !s.hasModalAccess) {
                            (M && s.isAvailableOnlyForPlus && w(), Q && s.isAvailableOnlyForPlus && V.open());
                            return;
                        }
                        if (q) return void w();
                        let t = !H && (2 === e.detail || (1 === e.detail && s.hasTrackLink && !B.modal.isOpened));
                        return Z && !t
                            ? void V.open()
                            : ((0, o.P)(e, A().ripple), H)
                              ? void es()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && s.hasTrackLink && !B.modal.isOpened && (et(), Z && V.open()));
                    }),
                    eo = null == S ? void 0 : S({ onPlayButtonClick: es, isPlaying: I, isCurrent: E, isLoading: $, playButtonIconSize: O });
                return (0, i.jsxs)(x.C, {
                    ref: Y,
                    'aria-label': F,
                    'data-intersection-property-id': W,
                    onClick: el,
                    className: (0, r.$)(A().root, { [A().root_disabled]: !s.isAvailable, [A().root_current]: E && H }, a),
                    ...P,
                    children: [f, eo, C, T],
                });
            });
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
                        b = y({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(l.$, {
                        className: p,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: a,
                        flexIcon: !0,
                        'aria-label': b,
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
        76481: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => r });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: a = 'E_INTERNAL', data: r = {}, ...s } = t,
                        n = e || 'Internal error';
                    (super(n, s), (this.message = n), (this.code = a), (this.data = r), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class r extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...a } = {}) {
                    (super(e, { code: t, ...a }), Object.setPrototypeOf(this, r.prototype));
                }
            }
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
        77737: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => S });
            var i = a(25839),
                r = a(82298),
                s = a(88204),
                n = a(84059),
                l = a(74631),
                o = a(39004),
                c = a(61493),
                d = a(49656),
                u = a(3392),
                m = a(4254),
                _ = a(56348),
                v = a(85743),
                p = a(27954),
                h = a(19410),
                x = a(12929),
                g = a(32652),
                y = a(97522),
                b = a(40846),
                C = a(61755),
                A = a(87221),
                f = a(12752),
                T = a.n(f);
            let S = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: a,
                        track: s,
                        albumArtists: f,
                        withExplicitMark: S,
                        withSecondaryColor: k,
                        captionSize: I = 'm',
                        explicitSize: E = 'xxxs',
                        withAllArtistsTitle: N,
                        textClassName: j,
                        artistsClassName: R,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: L = !0,
                        hasLineClamp: P = !0,
                        withSavingQueryParams: M,
                        beforeTitle: w,
                        withArtistLink: D,
                        variant: B,
                        withTrackLink: H,
                        afterTitle: U,
                        withContextMenuArtists: K,
                    } = e,
                    { formatMessage: V } = (0, o.A)(),
                    { sendNavigateSearchFeedback: Y } = (0, v.z)(),
                    {
                        settings: { isMobile: W },
                        slam: z,
                    } = (0, p.g)(),
                    G = (0, C.$)({ withCustomTooltip: L }),
                    F = (0, n.useSearchParams)(),
                    $ = (0, b.B)(s, {
                        isMobile: W,
                        isOfflineModeEnabled: z.isOfflineModeEnabled,
                        albumArtists: f,
                        withTrackLink: H,
                        withArtistLink: D,
                        variant: B,
                        withExplicitMark: S,
                        query: M ? Object.fromEntries(F) : void 0,
                    }),
                    {
                        displayTitle: X,
                        ariaLabel: q,
                        tooltipText: Q,
                        titleAttribute: Z,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, a, i) => {
                        var r, s;
                        let { canEnableCustomTooltip: n, isMobile: l } = a,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, i),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (r = t.version) ? r : ''),
                            d = i({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (s = e.version) ? s : ''),
                            tooltipText: c,
                            isTooltipEnabled: n && !l,
                            titleAttribute: !n && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: n ? void 0 : t.version,
                        };
                    })(s, $, { canEnableCustomTooltip: G, isMobile: W }, V),
                    et = (0, A.O)({ track: s, onNavigate: Y, withSavingQueryParams: M, entityType: x.n.TRACK }),
                    ea = (0, l.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Q,
                                hoverSettings: h.V,
                                children: (0, i.jsx)(m.HL, {
                                    className: (0, r.$)(T().text, T().title),
                                    type: 'entity',
                                    size: I,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: X,
                                }),
                            }),
                        [I, X, Q, ee],
                    ),
                    ei = (0, d.L)(() =>
                        $.shouldShowRemovedTitle
                            ? (0, i.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Q,
                                  hoverSettings: h.V,
                                  children: (0, i.jsx)(m.HL, {
                                      className: (0, r.$)(T().text, T().title),
                                      type: 'entity',
                                      size: I,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Z,
                                      children: X,
                                  }),
                              })
                            : $.link
                              ? (0, i.jsx)(y.N, {
                                    onClick: et,
                                    className: T().albumLink,
                                    href: $.link.href,
                                    'aria-label': q,
                                    title: Z,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ea(),
                                })
                              : ea({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    er = (0, l.useMemo)(() => +!!P, [P]);
                return (0, i.jsx)('div', {
                    className: (0, r.$)(T().root, { [T().root_disabled]: !s.isAvailable, [T().root_disliked]: s.isDisliked && !O, [T().root_withSecondaryColor]: k }, t),
                    children: (0, i.jsxs)('div', {
                        className: T().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(T().titleContainer, { [T().titleContainer_withVersion]: s.version }, a),
                                children: [
                                    (0, i.jsxs)(m.HL, {
                                        className: (0, r.$)(T().text, j),
                                        type: 'entity',
                                        size: I,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            w,
                                            ei,
                                            $.version &&
                                                (0, i.jsxs)(m.HL, {
                                                    className: (0, r.$)(T().text, T().version),
                                                    type: 'entity',
                                                    size: I,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', $.version],
                                                }),
                                        ],
                                    }),
                                    $.explicitMark &&
                                        (0, i.jsx)(g.N, {
                                            containerClassName: T().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: E,
                                            variant: $.explicitMark,
                                            className: T().explicitMark,
                                            trackId: s.id,
                                        }),
                                    U,
                                ],
                            }),
                            $.artists.length > 0 &&
                                (0, i.jsx)(_.i, {
                                    className: (0, r.$)(T().text, { [T().artists]: P }, R, j),
                                    withAllArtistsTitle: N,
                                    linkClassName: (0, r.$)(T().text, T().link),
                                    captionClassName: (0, r.$)(T().text, T().artistCaption),
                                    artists: $.artists,
                                    withLink: $.withArtistLink,
                                    lineClamp: er,
                                    captionSize: I,
                                    withContextMenu: K,
                                }),
                        ],
                    }),
                });
            });
        },
        77920: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
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
                    { swipeBackward: h, swipeForward: x, shouldBackwardButtonBeDisabled: g, shouldForwardButtonBeDisabled: y, shouldHideControls: b } = (0, l.Y)(t),
                    C = (0, s.useCallback)(
                        (e) => {
                            (h(), e.stopPropagation());
                        },
                        [h],
                    ),
                    A = (0, s.useCallback)(
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
                            className: (0, r.$)(u().control, a, { [u().control_hidden]: b, [u().control_withSecondaryColor]: _ }),
                            onClick: C,
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
                            className: (0, r.$)(u().control, d, { [u().control_hidden]: b, [u().control_withSecondaryColor]: _ }),
                            onClick: A,
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
        83243: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => _ });
            var i = a(74631),
                r = a(67379),
                s = a(44031),
                n = a(87277),
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
                    { pageId: x, pageEntityId: g, pageStyle: y, pagePlacement: b } = (0, u.$)(),
                    { tabId: C, tabPos: A, isTabSelectedByDefault: f } = (0, m.R)();
                return (0, o.c)((e) => {
                    if (!v || !x || 'string' != typeof g) return;
                    let i = {
                        hash: h,
                        pageId: d.W[x],
                        pageStyle: y || s.PageStyles.Fullscreen,
                        pagePlacement: b || s.PagePlacements.Fullscreen,
                        mainObjectType: t,
                        mainObjectId: g,
                    };
                    void 0 !== C && ((i.tabId = C), (i.tabPos = A), (i.isTabSelectedByDefault = f));
                    let l = (0, r.F)({ params: i, logger: p, context: 'useSendEventOnScreenOpenedOrClosed' });
                    l && (e && !a.current && ((0, n.w5)(v.evgenInstance, l), (a.current = !0)), e || _.current || ((0, n.XB)(v.evgenInstance, l), (_.current = !0)));
                });
            };
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
        89729: (e, t, a) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }));
            let i = a(25839),
                r = a(74631),
                s = a(95102);
            function n(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            a(49971);
            let l = { loader: () => Promise.resolve(n(() => null)), loading: null, ssr: !0 },
                o = function (e) {
                    let t = { ...l, ...e },
                        a = (0, r.lazy)(() => t.loader().then(n)),
                        o = t.loading;
                    function c(e) {
                        let n = o ? (0, i.jsx)(o, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            l = !t.ssr || !!t.loading,
                            c = l ? r.Suspense : r.Fragment,
                            d = t.ssr
                                ? (0, i.jsxs)(i.Fragment, { children: [null, (0, i.jsx)(a, { ...e })] })
                                : (0, i.jsx)(s.BailoutToCSR, { reason: 'next/dynamic', children: (0, i.jsx)(a, { ...e }) });
                        return (0, i.jsx)(c, { ...(l ? { fallback: n } : {}), children: d });
                    }
                    return ((c.displayName = 'LoadableComponent'), c);
                };
        },
        90720: (e, t, a) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }));
            let i = (0, a(46450).createAsyncLocalStorage)();
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
        91626: (e, t, a) => {
            'use strict';
            (a.d(t, { G: () => r }), a(77920));
            var i = a(76481);
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
        93122: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryPage: () => ek });
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
            let b = (0, n.createContext)({ observeElement: () => {}, unobserveElement: () => {} });
            var C = a(22939),
                A = a(56348),
                f = a(30290),
                T = a(18412),
                S = a(16949);
            let k = (e) => {
                    let { entityId: t, from: a } = e;
                    return { contextData: { type: C.K.Various, meta: { id: t }, from: a }, queueParams: { index: 0 }, loadContextMeta: !0 };
                },
                I = (e) => {
                    let { id: t, tabIndex: a, blockIndex: i, trackIndex: r } = e,
                        s = (0, x.s)(g.n.MUSIC_HISTORY),
                        l = (0, n.useId)(),
                        o = (0, n.useRef)(null),
                        { observeElement: c, unobserveElement: d } = (0, n.useContext)(b);
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
            var E = a(4805),
                N = a(82967),
                j = a(3718),
                R = a(97805),
                O = a(49075),
                L = a.n(O);
            let P = (0, s.PA)((e) => {
                let { type: t, track: a, artists: r, tabIndex: s, blockIndex: n, trackIndex: l, playContextParams: o } = e,
                    { ref: c, intersectionPropertyId: d } = I({ id: a.id, tabIndex: s, blockIndex: n, trackIndex: l });
                return a.isShimmerVisible || !a.data
                    ? (0, i.jsx)('div', {
                          'data-intersection-property-id': d,
                          ref: c,
                          children: (0, i.jsx)(R.D, {
                              isActive: a.isShimmerActive,
                              'data-intersection-property-id': d,
                              className: L().trackShimmer,
                              variant: t === C.K.Album ? j.X.ALBUM : j.X.PLAYLIST,
                          }),
                      })
                    : t === C.K.Album
                      ? (0, i.jsx)(E.F, { track: a.data, position: a.data.index, albumArtists: r, playContextParams: o })
                      : (0, i.jsx)(N.K, { track: a.data, playContextParams: o });
            });
            var M = a(47797),
                w = a.n(M);
            let D = (0, s.PA)((e) => {
                    var t, a, s, c, d;
                    let { album: m, tabIndex: _, blockIndex: v } = e,
                        { ref: p, intersectionPropertyId: h } = I({ id: m.id, tabIndex: _, blockIndex: v }),
                        { from: x } = (0, f.f)({ blockId: 'album-'.concat(m.id) }),
                        g = (0, n.useMemo)(() => {
                            var e, t;
                            return m.available
                                ? (0, i.jsx)(A.i, {
                                      className: w().artists,
                                      linkClassName: w().artistLink,
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
                                ? (0, i.jsx)(S.M, { isActive: m.isShimmerActive, className: w().header, withDescription: !0 })
                                : (0, i.jsx)(T.T, {
                                      className: w().header,
                                      coverUrl: null == (e = m.meta) ? void 0 : e.coverUri,
                                      title: null == (t = m.meta) ? void 0 : t.title,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      description: g,
                                      titleClassName: w().headerTitle,
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
                        b = (0, n.useMemo)(
                            () =>
                                m.tracks.map((e, t) => {
                                    var a;
                                    let r = k({ entityId: e.entityId, from: x });
                                    return (0, i.jsx)(
                                        P,
                                        { type: C.K.Album, track: e, playContextParams: r, tabIndex: _, blockIndex: v, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [m.tracks, x, _, v],
                        );
                    return (0, i.jsxs)('section', {
                        className: w().root,
                        ref: p,
                        'data-intersection-property-id': h,
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_ALBUM_BLOCK,
                        children: [
                            (0, i.jsx)(u.DZ, {
                                className: (0, r.$)(w().header, w().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ALBUM,
                                children: (0, i.jsx)(l.A, { id: 'music-history.album' }),
                            }),
                            y,
                            (0, i.jsx)('div', { className: w().content, children: b }),
                        ],
                    });
                }),
                B = (0, s.PA)((e) => {
                    var t, a, s;
                    let { artist: c, tabIndex: d, blockIndex: m } = e,
                        { ref: _, intersectionPropertyId: v } = I({ id: c.id, tabIndex: d, blockIndex: m }),
                        { from: p } = (0, f.f)({ blockId: 'artist-'.concat(c.id) }),
                        h = (0, n.useMemo)(() => {
                            var e, t, a;
                            return c.isShimmerVisible
                                ? (0, i.jsx)(S.M, { isActive: c.isShimmerActive, className: w().header, coverRadius: 'round' })
                                : (0, i.jsx)(T.T, {
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      className: w().header,
                                      coverUrl: null == (e = c.meta) ? void 0 : e.coverUri,
                                      title: null == (t = c.meta) ? void 0 : t.name,
                                      titleClassName: w().headerTitle,
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
                                    let r = k({ entityId: e.entityId, from: p });
                                    return (0, i.jsx)(
                                        P,
                                        { type: C.K.Artist, track: e, playContextParams: r, tabIndex: d, blockIndex: m, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [c.tracks, p, d, m],
                        );
                    return (0, i.jsxs)('section', {
                        className: w().root,
                        ref: _,
                        'data-intersection-property-id': v,
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_ARTIST_BLOCK,
                        children: [
                            (0, i.jsx)(u.DZ, {
                                className: (0, r.$)(w().header, w().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ARTIST,
                                children: (0, i.jsx)(l.A, { id: 'music-history.artist' }),
                            }),
                            h,
                            (0, i.jsx)('div', { className: w().content, children: x }),
                        ],
                    });
                });
            var H = a(19e3),
                U = a(57954),
                K = a(70825);
            let V = (0, s.PA)((e) => {
                    let { common: t, tabIndex: a, blockIndex: s } = e,
                        { ref: c, intersectionPropertyId: d } = I({ id: t.id, tabIndex: a, blockIndex: s }),
                        { from: m } = (0, f.f)(),
                        _ = ((e) =>
                            (0, n.useMemo)(
                                () => (e === v.D.SEARCH ? (0, K.t)({ contextType: C.K.Various, contextId: '', entityContextType: U.h.MUSIC_HISTORY_SEARCH }) : null),
                                [e],
                            ))(t.type),
                        p = (0, n.useMemo)(
                            () =>
                                t.tracks.map((e, t) => {
                                    var r;
                                    let n = k({ entityId: e.entityId, from: m });
                                    return (0, i.jsx)(
                                        P,
                                        { playContextParams: n, type: C.K.Various, track: e, tabIndex: a, blockIndex: s, trackIndex: t },
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
                            className: w().root,
                            ref: c,
                            'data-intersection-property-id': d,
                            'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_COMMON_BLOCK,
                            children: [
                                (0, i.jsx)(u.DZ, {
                                    className: (0, r.$)(w().header, w().heading),
                                    variant: 'h3',
                                    'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_COMMON,
                                    children: h,
                                }),
                                (0, i.jsx)('div', { className: w().content, children: p }),
                            ],
                        }),
                    });
                }),
                Y = (0, s.PA)((e) => {
                    var t, a, s, c, d;
                    let { playlist: _, tabIndex: v, blockIndex: p } = e,
                        { ref: h, intersectionPropertyId: x } = I({ id: _.id, tabIndex: v, blockIndex: p }),
                        { from: g } = (0, f.f)({ blockId: _.isResolved ? 'playlist-'.concat(null == (t = _.meta) ? void 0 : t.id) : '' }),
                        { formatMessage: y } = (0, m.A)(),
                        b = (0, n.useMemo)(() => {
                            var e, t, a, r;
                            return _.isShimmerVisible
                                ? (0, i.jsx)(S.M, { isActive: _.isShimmerActive, className: w().header, withDescription: !0 })
                                : (0, i.jsx)(T.T, {
                                      className: w().header,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      coverUrl: null == (e = _.meta) ? void 0 : e.coverUri,
                                      title: null == (t = _.meta) ? void 0 : t.title,
                                      titleClassName: w().headerTitle,
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
                        A = (0, n.useMemo)(
                            () =>
                                _.tracks.map((e, t) => {
                                    var a;
                                    let r = k({ entityId: e.entityId, from: g });
                                    return (0, i.jsx)(
                                        P,
                                        { playContextParams: r, type: C.K.Playlist, track: e, tabIndex: v, blockIndex: p, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [_.tracks, g, v, p],
                        );
                    return (0, i.jsxs)('section', {
                        className: w().root,
                        ref: h,
                        'data-intersection-property-id': x,
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_PLAYLIST_BLOCK,
                        children: [
                            (0, i.jsx)(u.DZ, {
                                className: (0, r.$)(w().header, w().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_PLAYLIST,
                                children: (0, i.jsx)(l.A, { id: 'music-history.playlist' }),
                            }),
                            b,
                            (0, i.jsx)('div', { className: w().content, children: A }),
                        ],
                    });
                });
            var W = a(51707),
                z = a(40110);
            let G = (0, s.PA)((e) => {
                let { requestAwakeLumenModal: t, vibe: a, blockIndex: s, tabIndex: l } = e,
                    { ref: c, intersectionPropertyId: d } = I({ id: a.id, blockIndex: s, tabIndex: l }),
                    { from: u } = (0, f.f)({ blockId: ''.concat(z.U.RADIO, '-').concat(z.U.Q2V, '-').concat(a.id) }),
                    m = (0, n.useMemo)(
                        () =>
                            a.tracks.map((e, t) => {
                                var a;
                                let r = k({ entityId: e.entityId, from: u });
                                return (0, i.jsx)(
                                    P,
                                    { playContextParams: r, type: C.K.Vibe, track: e, blockIndex: s, tabIndex: l, trackIndex: t },
                                    null == (a = e.data) ? void 0 : a.getKey(t),
                                );
                            }),
                        [a.tracks, u, l, s],
                    );
                return a.meta
                    ? (0, i.jsxs)('section', {
                          className: w().root,
                          ref: c,
                          'data-intersection-property-id': d,
                          'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_QUERY_TO_VIBE_BLOCK,
                          children: [
                              (0, i.jsx)(W.K, { className: (0, r.$)(w().queryToVibeHeader, w().heading), requestAwakeLumenModal: t, vibe: a.meta }),
                              (0, i.jsx)('div', { className: w().content, children: m }),
                          ],
                      })
                    : null;
            });
            var F = a(71035),
                $ = a(49656),
                X = a(86209),
                q = a(79367),
                Q = a(26742),
                Z = a(97952),
                J = a(87201),
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
                    { pageId: b } = (0, Z.$)(),
                    { blockIdForFrom: A } = (0, Q.N)(),
                    E = (0, q.P)(),
                    [N, j] = (0, n.useState)(!1),
                    {
                        isPlaying: R,
                        togglePlay: O,
                        isCurrent: L,
                    } = (0, J.B)({ seeds: (null == (t = _.meta) ? void 0 : t.seeds) || [et.M1], pageIdForFrom: b, blockIdForFrom: A }),
                    M = (0, n.useId)(),
                    D = h.checkExperiment(ee.z.WebNextVibeDescription, 'on'),
                    B = _.isMultivibe,
                    H = B ? 'xs' : 'm',
                    { ref: U, intersectionPropertyId: K } = I({ id: _.id, blockIndex: v, tabIndex: p }),
                    { from: V } = (0, f.f)({ blockId: 'wave-'.concat(_.id) }),
                    Y = (0, F.c)(() => {
                        if (!E()) {
                            if (g.isVibeStartRestricted) return void j(!0);
                            O();
                        }
                    }),
                    W = (0, F.c)((e) => {
                        if (x || 2 === e.detail) return void Y();
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
                                  isPlaying: R,
                                  isCurrent: L,
                                  onPlayButtonClick: Y,
                                  className: (0, r.$)(w().vibeCover, { [w().multivibeContainer]: B }),
                                  playButtonIconSize: H,
                                  fallbackIconSize: H,
                                  coverClassName: (0, r.$)({ [w().multivibeCover]: B }),
                                  entityCoverClassName: (0, r.$)({ [w().multivibeAvatar]: B }),
                                  controlClassName: (0, r.$)({ [w().multivibeControl]: B }),
                              })
                            : (0, i.jsx)(er.q, {
                                  isCurrent: L,
                                  isPlaying: R,
                                  isAvailable: !0,
                                  onPlayButtonClick: Y,
                                  title: null == (a = _.meta) ? void 0 : a.title,
                                  entityCoverStyle: { backgroundColor: null == (s = _.meta) ? void 0 : s.backgroundColor },
                                  ariaDescribedBy: M,
                                  coverUri: null == (n = _.meta) ? void 0 : n.imageUrl,
                                  radius: 'round',
                                  withLoadingIndicator: !1,
                                  className: (0, r.$)(w().vibeCover, { [w().multivibeContainer]: B }),
                                  playButtonIconSize: H,
                                  fallbackIconSize: H,
                                  coverClassName: (0, r.$)({ [w().multivibeCover]: B }),
                                  entityCoverClassName: (0, r.$)({ [w().multivibeAvatar]: B }),
                                  controlClassName: (0, r.$)({ [w().multivibeControl]: B }),
                              });
                    }, [
                        Y,
                        L,
                        R,
                        M,
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
                            ? (0, i.jsx)(S.M, { isActive: _.isShimmerActive, className: w().header, coverRadius: 'round' })
                            : (0, i.jsxs)(ei.C, {
                                  className: (0, r.$)(w().header, w().vibeHeader),
                                  onClick: W,
                                  'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_HEADER,
                                  children: [
                                      (0, i.jsx)(ea.S, {
                                          isOpened: N,
                                          onOpenChange: j,
                                          isEnabled: g.isVibeStartRestricted,
                                          placement: 'bottom',
                                          textVariant: 'vibe',
                                          vibeTextVariant: null == (e = _.meta) ? void 0 : e.stationType,
                                          renderChildren: G,
                                      }),
                                      (0, i.jsx)(T.T, { titleSize: 'xs', titleLineClamp: 1, headingVariant: 'h4', labeledForId: M, className: w().vibeTextBlock, ...z }),
                                  ],
                              });
                    }),
                    en = (0, n.useMemo)(
                        () =>
                            _.tracks.map((e, t) => {
                                var a;
                                let r = k({ entityId: e.entityId, from: V });
                                return (0, i.jsx)(
                                    P,
                                    { playContextParams: r, type: C.K.Vibe, track: e, blockIndex: v, tabIndex: p, trackIndex: t },
                                    null == (a = e.data) ? void 0 : a.getKey(t),
                                );
                            }),
                        [_.tracks, V, p, v],
                    );
                return (0, i.jsxs)('section', {
                    className: w().root,
                    ref: U,
                    'data-intersection-property-id': K,
                    'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_VIBE_BLOCK,
                    children: [
                        !D &&
                            (0, i.jsx)(u.DZ, {
                                className: (0, r.$)(w().header, w().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_VIBE,
                                children: (0, i.jsx)(l.A, { id: 'music-history.my-vibe' }),
                            }),
                        es,
                        (0, i.jsx)('div', { className: w().content, children: en }),
                    ],
                });
            });
            var en = a(29131),
                el = a.n(en);
            let eo = (0, s.PA)((e) => {
                let { tab: t, tabIndex: a, onTabShowOrHide: r, shouldHideInactiveTab: s, ...l } = e,
                    { lumen: c } = (0, y.g)(),
                    d = (0, x.s)(g.n.MUSIC_HISTORY),
                    { awakeLumenModal: m, requestAwakeLumenModal: C } = (0, p.z)(),
                    A = (0, h.f)(),
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
                                              return (0, i.jsx)(Y, { playlist: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.MULTIVIBE_WAVE:
                                          case v.D.WAVE:
                                              return (0, i.jsx)(es, { vibe: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.ARTIST:
                                              return (0, i.jsx)(B, { artist: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.SEARCH:
                                          case v.D.OTHER:
                                              return (0, i.jsx)(V, { common: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.QUERY_TO_VIBE:
                                              return A
                                                  ? (0, i.jsx)(G, { requestAwakeLumenModal: C, vibe: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t))
                                                  : null;
                                          default:
                                              return null;
                                      }
                                  })
                                  .filter((e) => e);
                    }, [t.blocks, a, A, C]),
                    T = _(),
                    S = (0, n.useRef)(null),
                    { observeElement: k } = (0, n.useContext)(b),
                    I = d.datesMap.get(t.date);
                return (
                    (0, n.useEffect)(() => {
                        k({
                            elementId: t.date,
                            elementRef: S,
                            index: 0,
                            onShow: () => {
                                (d.setDatesMap(t.date, !0), r());
                            },
                            onHide: () => {
                                (d.setDatesMap(t.date, !1), r());
                            },
                        });
                    }, [d, d.datesMap, k, r, t.date]),
                    (0, n.useEffect)(() => {
                        c.isEnabled && c.getData();
                    }, [c]),
                    (0, i.jsxs)('div', {
                        'aria-hidden': !I && s,
                        ref: S,
                        'data-intersection-property-id': t.date,
                        className: el().root,
                        ...l,
                        ...{ inert: !!(!I && s) },
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
            var ec = a(64715),
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
                eb = a(91886);
            let eC = (e) => {
                    let { children: t } = e,
                        a = (0, n.useRef)({}),
                        r = (0, n.useMemo)(
                            () =>
                                (0, eb.Gv)((e) => {
                                    var t, i;
                                    let r = (0, eb.L5)(e.target),
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
                    return (0, i.jsx)(b.Provider, { value: o, children: t });
                },
                eA = async (e, t) =>
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
                eS = a(66834);
            let ek = (0, s.PA)(() => {
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
                            (n && ((h.current = s), await eA(n, h)), (p.current = !1));
                        },
                        [a.dates, v, s],
                    ),
                    b = (0, n.useCallback)(() => {
                        if (p.current) return;
                        let e = a.dates.findIndex((e) => a.datesMap.get(e));
                        if (e >= 0) {
                            var t;
                            null == (t = v.onTabChange) || t.call(v, e);
                        }
                    }, [a.dates, a.datesMap, v]);
                ((0, n.useEffect)(() => () => a.reset(), [a]), (0, e_.J)(a.isResolved));
                let C = (0, n.useMemo)(() => {
                        var t;
                        return a.isRejected
                            ? (0, i.jsx)(ec.SomethingWentWrong, { className: (0, r.$)(eT().error, eT().important), withBackwardControl: !1 })
                            : a.isShimmerVisible
                              ? (0, i.jsx)(eS.v, { isActive: a.isShimmerActive })
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
                                        (0, i.jsx)(eo, { onTabShowOrHide: b, 'data-intersection-property-id': t.date, tab: t, tabIndex: a, shouldHideInactiveTab: e }, a),
                                    );
                    }, [b, a.isEmpty, a.isRejected, a.isShimmerActive, a.isShimmerVisible, a.tabs, e]),
                    A = _(),
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
                                            'aria-label': A(e, !1),
                                            title: A(e, !1),
                                            value: t,
                                        },
                                        t,
                                    ),
                                ),
                            }),
                        [A, y, a.dates, a.isShimmerVisible, v],
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
                                        (0, i.jsx)(eC, { children: (0, i.jsx)('div', { className: eT().content, children: C }) }),
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
        93690: (e, t, a) => {
            'use strict';
            a.d(t, { GX: () => s.G, X1: () => i.X, m5: () => r.m });
            var i = a(77920),
                r = a(76481),
                s = a(91626);
            a(95919);
        },
        94484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        95089: (e, t, a) => {
            (Promise.resolve().then(a.bind(a, 54310)), Promise.resolve().then(a.bind(a, 93122)), Promise.resolve().then(a.bind(a, 18436)));
        },
        95102: (e, t, a) => {
            'use strict';
            function i(e) {
                let { reason: t, children: a } = e;
                return a;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }),
                a(29834));
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
        95919: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
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
            a.d(t, { w: () => S });
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
                b = a(4254),
                C = a(97522);
            let A = (e) => {
                    let { className: t, data: a } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(g().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(b.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: g().text,
                                children: [
                                    '\xa9 ',
                                    a.year,
                                    ' \xa0',
                                    (0, i.jsx)(C.N, {
                                        target: '_blank',
                                        href: a.yandexMusic.url,
                                        className: (0, r.$)(g().copyrightLink, g().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: a.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(b.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(C.N, {
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
                                            children: (0, i.jsx)(C.N, { target: '_blank', href: r, className: g().link, 'data-test-id': y.S7.FOOTER_LINK, children: a }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(b.HL, {
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
                        children: [(0, i.jsx)(f, { links: a.links, disclaimer: a.disclaimer }), (0, i.jsx)(A, { data: a.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: a } = (0, h.g)(),
                    { formatDate: r, formatMessage: s } = (0, n.A)(),
                    { language: l } = (0, p.h)(),
                    o = u({ formatMessage: s, language: l, tld: a.tld, year: v(r) });
                return (0, i.jsx)(A, { className: t, data: o });
            });
            let S = (0, s.PA)((e) => {
                var t;
                let { className: a } = e,
                    { experiments: s, location: _, user: x } = (0, h.g)(),
                    { formatDate: y, formatMessage: b } = (0, n.A)(),
                    { isEnabled: C } = null != (t = (0, o.P)()) ? t : {},
                    { language: A } = (0, p.h)(),
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
                        formatMessage: b,
                        isWebApplication: l.$3,
                        tld: _.tld,
                        language: A,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: v(y),
                    });
                return (0, i.jsx)(T, { className: (0, r.$)({ [g().root_withOffsetForDeeplink]: C }, a), data: f });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                364, 7055, 3112, 3349, 7339, 6287, 3472, 2121, 740, 5128, 3953, 2767, 8451, 1583, 7396, 6706, 4771, 1311, 5201, 8398, 260, 6702, 9004, 7511, 7839, 3595,
                9286, 1251, 6215, 2038, 4163, 3246, 7848, 3482, 6680, 2247, 7856, 820, 8649, 862, 1808, 4932, 5622, 2445, 9333, 3488, 4475, 5056, 7358,
            ],
            () => e((e.s = 95089)),
        ),
            (_N_E = e.O()));
    },
]);
