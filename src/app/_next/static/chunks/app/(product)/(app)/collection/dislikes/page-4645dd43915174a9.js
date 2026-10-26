(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2232],
    {
        148: (t) => {
            t.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        1797: (t, e, i) => {
            'use strict';
            i.d(e, { S: () => a });
            var s = i(40207);
            let a = (t) => {
                let { artist: e, callback: i, shouldHistoryBack: a } = t;
                return (0, s.l)({ entity: e, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        1856: (t) => {
            t.exports = { root: 'CollectionDislikesPage_root__Qnohu' };
        },
        6968: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => x });
            var s = i(25839),
                a = i(82298),
                r = i(28631),
                n = i(74631);
            let l = (t) => {
                    let { style: e, forwardRef: i, context: a, ...r } = t,
                        n = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        l = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...e }, ref: i, ...r });
                },
                o = (0, n.forwardRef)((t, e) => (0, s.jsx)(l, { forwardRef: e, ...t }));
            var c = i(45300),
                d = i.n(c);
            let u = (t) => {
                    let { style: e, forwardRef: i, withFooter: r, withHeader: n, withForceScroll: l, ...o } = t;
                    return (0, s.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: r, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: l }),
                        style: { ...e },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, n.forwardRef)((t, e) => (0, s.jsx)(u, { forwardRef: e, ...t }));
            var _ = i(10508),
                h = i(63257);
            let p = (t) => {
                    let {
                            pageSize: e,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: r = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = t,
                        [m, p] = (0, n.useState)(null),
                        x = (0, n.useMemo)(
                            () =>
                                (0, _.A)((t) => {
                                    if ((null == a || a(t), o.length > 0 && p(t), e && i)) {
                                        let s = Math.floor(t.endIndex / e) + 1,
                                            a = Math.floor(t.startIndex / e);
                                        for (let t = a; t < s; t++) i(t);
                                    }
                                }, r),
                            [r, a, e, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && m && x(m);
                    }, o);
                    let v = (0, n.useMemo)(() => {
                        if (c)
                            return (0, _.A)((t) => {
                                c(t);
                            }, r);
                    }, [c, r]);
                    return (0, s.jsx)(h.sN, { ref: d, rangeChanged: x, totalCount: l, endReached: v, ...u });
                },
                x = (t) => {
                    let {
                            className: e,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: h,
                            overscan: x = 700,
                            pageSize: v = 20,
                            totalCount: g,
                            totalRequests: C,
                            debounceDurationInMs: A,
                            initialItemCount: T,
                            minInitialItemCount: k = 20,
                            handleRef: b,
                            alwaysShowScrollbar: S = !1,
                            testId: f,
                            isMobileLayout: j = !1,
                            shouldTriggerRangeChangedOn: N,
                            ...E
                        } = t,
                        [y, I] = (0, n.useState)(!1),
                        O = (0, n.useMemo)(
                            () =>
                                (0, r.A)((t) => {
                                    I(t);
                                }, 100),
                            [],
                        ),
                        R = (0, n.useMemo)(() => {
                            var t, e;
                            return j
                                ? {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, C, j]),
                        L = T ? Math.min(T, k) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: y || S, [d().root_notScrolling]: !y && !S }, e),
                        'data-test-id': f,
                        children: [
                            j && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(p, {
                                overscan: x,
                                components: R,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: O,
                                itemContent: _,
                                scrollerRef: b,
                                totalCount: g,
                                pageSize: v,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: A,
                                initialItemCount: L,
                                shouldTriggerRangeChangedOn: N,
                                ...E,
                            }),
                            j && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        7361: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => _ });
            var s = i(25839),
                a = i(33660),
                r = i(74631),
                n = i(39004),
                l = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                m = i(63149);
            let _ = (t) => {
                let { user: e } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, h] = (0, r.useState)(!1),
                    { formatMessage: p } = (0, n.A)();
                return (0, r.useCallback)(async () => {
                    if (!t) return;
                    if (!e.isAuthorized) return void i((0, s.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let r = { ...(0, a.HO)(t), isLiked: !t.isLiked };
                    h(!0);
                    let n = await t.toggleLike();
                    (h(!1),
                        n === l.f.OK
                            ? i((0, s.jsx)(m.T, { artist: r }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t, e.isAuthorized, _, p, i]);
            };
        },
        7929: (t) => {
            t.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        9162: (t) => {
            t.exports = {
                root: 'CollectionDislikesPageHeader_root__lZ6LT',
                container: 'CollectionDislikesPageHeader_container__ACUbW',
                title: 'CollectionDislikesPageHeader_title__6h9Km',
                tabs: 'CollectionDislikesPageHeader_tabs__gt5AJ',
                tab: 'CollectionDislikesPageHeader_tab__bxN5I',
                tabsShimmer: 'CollectionDislikesPageHeader_tabsShimmer__akKoq',
                tabShimmer: 'CollectionDislikesPageHeader_tabShimmer__0QLuH',
                staticHeader: 'CollectionDislikesPageHeader_staticHeader__75rsF',
                important: 'CollectionDislikesPageHeader_important__5ZM6D',
                stickyHeader: 'CollectionDislikesPageHeader_stickyHeader__cAkxR',
            };
        },
        13936: (t) => {
            t.exports = {
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                root: 'ArtistCard_root__x67BK',
                srTitleLink: 'ArtistCard_srTitleLink__jzfOW',
                coverBlock: 'ArtistCard_coverBlock__dBL4x',
                image: 'ArtistCard_image__pONJx',
                titleLink: 'ArtistCard_titleLink__G8Puz',
                playButton: 'ArtistCard_playButton__XZoTr',
                likeButton: 'ArtistCard_likeButton__LU9TL',
                menuButton: 'ArtistCard_menuButton__EynXG',
                pinButton: 'ArtistCard_pinButton__G_VOi',
                trailerButton: 'ArtistCard_trailerButton__a2NHm',
                control: 'ArtistCard_control___qv5j',
            };
        },
        16978: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => _ });
            var s = i(25839),
                a = i(8487),
                r = i(84059),
                n = i(61493),
                l = i(71035),
                o = i(4071),
                c = i(4254),
                d = i(57024),
                u = i(36484),
                m = i(62562);
            let _ = (t) => {
                let { size: e = 'm', variant: i = 'default', color: _ = 'primary', withRipple: h = !0, buttonText: p, isBlock: x, key: v, className: g } = t,
                    C = (0, r.useRouter)(),
                    A = (0, m.N)().get(u.QG),
                    T = (0, l.c)(() => {
                        A.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), C.push(A.authorizationUrl));
                    });
                return (0, s.jsx)(
                    o.$,
                    {
                        onClick: T,
                        className: g,
                        isBlock: x,
                        color: _,
                        variant: i,
                        size: e,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        19410: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        19412: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => c });
            var s = i(25839),
                a = i(82298),
                r = i(61493),
                n = i(23976),
                l = i(40828),
                o = i.n(l);
            let c = (t) => {
                let {
                    isActive: e,
                    className: i,
                    shimmerClassName: l,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: m = !0,
                    linesCount: _ = 3,
                    withSubcover: h,
                    radius: p = 'l',
                } = t;
                return (0, s.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': e ? 'polite' : 'off',
                    'aria-busy': e,
                    className: (0, a.$)(o().root, i),
                    'data-test-id': r.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        h && (0, s.jsx)(n.W, { isActive: e, className: o().subcover, radius: 'l' }),
                        (0, s.jsx)(n.W, { isActive: e, className: (0, a.$)(o().cover, l, { [o().cover_round]: c, [o().cover_withSubcover]: h }), radius: p }),
                        m &&
                            (0, s.jsx)('div', {
                                className: (0, a.$)(o().infoContainer, o()['content_linesCount_'.concat(_)], { [o().infoContainer_centered]: u }),
                                children: (0, s.jsx)(n.W, { isActive: e, className: (0, a.$)(o().title, { [o().title_withSubcover]: h }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        21468: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => r });
            var s = i(74631),
                a = i(56480);
            function r() {
                return (0, s.useContext)(a.H);
            }
        },
        21971: (t, e, i) => {
            'use strict';
            i.d(e, { g: () => Y });
            var s = i(25839),
                a = i(88204),
                r = i(39004),
                n = i(44031),
                l = i(61493),
                o = i(22939),
                c = i(71035),
                d = i(66738),
                u = i(10820),
                m = i(33660),
                _ = i(74631),
                h = i(31860),
                p = i(91149),
                x = i(92942),
                v = i(27954),
                g = i(57549),
                C = i(86869),
                A = i(69084),
                T = i(4254),
                k = i(51790),
                b = i(6323),
                S = i(24596),
                f = i.n(S);
            let j = (t) => {
                let { coverUri: e, title: i, isDisliked: a, closeToast: n } = t,
                    { formatMessage: l } = (0, r.A)(),
                    o = l(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, s.jsx)(k.$, {
                    closeToast: n,
                    message: (0, s.jsxs)('div', {
                        className: f().message,
                        children: [
                            (0, s.jsx)(A.q, { children: (0, s.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, s.jsx)(C.t, {
                                className: f().cover,
                                radius: 'round',
                                children: (0, s.jsx)(b.B, { className: f().image, src: e, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, s.jsx)(T.HL, { className: f().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var N = i(7361),
                E = i(90613),
                y = i(3210),
                I = i(11609),
                O = i(79367),
                R = i(40110),
                L = i(20258),
                D = i(34159),
                P = i(30290),
                w = i(29872),
                z = i(56120),
                M = i(87201),
                U = i(83014),
                H = i(44806),
                B = i(55491),
                W = i(44851),
                K = i(14240),
                F = i(56615),
                $ = i(16386),
                V = i(67303),
                X = i(74682),
                G = i(59043),
                q = i(2144),
                Z = i(6304);
            let Y = (0, a.PA)((t) => {
                var e, i, a;
                let { artist: C, onOpenChange: A, open: T, ...k } = t,
                    { shouldShowBuySubscriptionModal: b, showBuySubscriptionModal: S } = (0, w.q)(),
                    {
                        settings: { isMobile: f },
                        modals: { artistAboutModal: Y },
                        trailer: Q,
                        user: J,
                        experiments: tt,
                    } = (0, v.g)(),
                    te = (0, E.A)(C),
                    ti = (0, N.K)(C),
                    ts = ((t) => {
                        let { user: e } = (0, v.g)(),
                            { notify: i } = (0, x.l)(),
                            [a, n] = (0, _.useState)(!1),
                            { formatMessage: l } = (0, r.A)();
                        return (0, c.c)(async () => {
                            if (!t) return;
                            if (!e.isAuthorized)
                                return void i((0, s.jsx)(g.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: p.u.ERROR });
                            if (a) return;
                            let r = { ...(0, m.HO)(t), isDisliked: !t.isDisliked };
                            n(!0);
                            let o = await t.toggleDislike();
                            (n(!1),
                                o === h.f.OK
                                    ? i((0, s.jsx)(j, { coverUri: r.coverUri, title: r.name, isDisliked: r.isDisliked }), { containerId: p.u.INFO })
                                    : i((0, s.jsx)(g.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: p.u.ERROR }));
                        });
                    })(C),
                    ta = (0, D.F)(),
                    tr = ''.concat(R.U.ARTIST, '-').concat(null == C ? void 0 : C.id),
                    { formatMessage: tn } = (0, r.A)(),
                    { utmLink: tl } = (0, P.f)({ blockId: R.U.ARTIST, contextType: o.K.Artist, contextId: null == C ? void 0 : C.id }),
                    { shareLink: to, pathname: tc } = (0, K.b)('/artist/:artistId', { params: { artistId: null != (i = null == C ? void 0 : C.id) ? i : '' } }),
                    td = (0, y.A)({ entityVariant: U.D.ARTIST, urlParams: { id: null == C ? void 0 : C.id } }),
                    { isPlaying: tu, togglePlay: tm } = (0, M.B)({
                        seeds: null != (a = null == C ? void 0 : C.seeds) ? a : [],
                        pageIdForFrom: L._Q.RADIO,
                        blockIdForFrom: tr,
                        parentContextId: null == C ? void 0 : C.id,
                    }),
                    t_ = (0, O.P)(),
                    th = tn((null == C ? void 0 : C.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    tp = (0, c.c)(() => {
                        if (b && J.isAuthorized) return void S();
                        tu || tm();
                    }),
                    tx = (0, c.c)(() => {
                        if (!t_()) {
                            if (b) return void S();
                            (null == C ? void 0 : C.id) && (Q.setUtmLink(tl), Q.openArtistTrailer(C.id), ta(n.DomainObjectType.Artist, C.id));
                        }
                    }),
                    tv = (0, c.c)(() => {
                        Y.open(null == C ? void 0 : C.id);
                    });
                (0, z.N)(T);
                let tg = { variant: B.Y.ARTIST, id: null == C ? void 0 : C.id, title: null == C ? void 0 : C.name, path: tc },
                    tC = tt.checkExperiment(H.z.WebEditorsFeatures, 'on'),
                    tA = null == C || null == (e = C.trailer) ? void 0 : e.isAvailable,
                    tT = tt.checkExperiment(H.z.WebNextArtistInfo, 'on'),
                    tk = !tt.checkExperiment(H.z.WebNextProductWithoutRecommendation, 'on');
                return (0, s.jsxs)(u.W1, {
                    isMobile: f,
                    offsetOptions: 10,
                    open: T,
                    onOpenChange: A,
                    ariaLabel: tn({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...k,
                    children: [
                        tC && (0, s.jsx)(Z.WithOffline, { fallback: (0, s.jsx)(I.d, { entityVariant: U.D.ARTIST, adminUrl: td }) }),
                        !f && (0, s.jsx)(Z.WithOffline, { fallback: (0, s.jsx)(V.L, { onClick: te, isPinned: null == C ? void 0 : C.isPinned }) }),
                        (0, s.jsx)(Z.WithOffline, {
                            fallback: (0, s.jsx)($.T, {
                                onClick: ti,
                                isLiked: null == C ? void 0 : C.isLiked,
                                disabled: !J.isAuthorized || !(null == C ? void 0 : C.isAvailable),
                            }),
                        }),
                        tA && (0, s.jsx)(Z.WithOffline, { fallback: (0, s.jsx)(G.N, { onClick: tx }) }),
                        tk &&
                            (0, s.jsx)(Z.WithOffline, {
                                fallback: (0, s.jsx)(q.C, { onClick: tp, disabled: !(null == C ? void 0 : C.isAvailable), variant: W.I.ARTIST, onOpenMenuChange: A }),
                            }),
                        (0, s.jsx)(X.H, { disabled: !C, shareLink: to, entityMeta: tg }),
                        tT &&
                            (0, s.jsx)(Z.WithOffline, {
                                fallback: (0, s.jsx)(u.Dr, {
                                    onClick: tv,
                                    icon: (0, s.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: th,
                                }),
                            }),
                        (0, s.jsx)(Z.WithOffline, {
                            fallback: (0, s.jsx)(F.D, { onClick: ts, isDisliked: null == C ? void 0 : C.isDisliked, disabled: !(null == C ? void 0 : C.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        23288: (t, e, i) => {
            'use strict';
            i.d(e, { CollectionDislikesPage: () => tl });
            var s = i(25839),
                a = i(88204),
                r = i(74631),
                n = i(84059),
                l = i(61493),
                o = i(5867),
                c = i(1407),
                d = i(20258),
                u = i(10322),
                m = i(89192),
                _ = i(30716),
                h = i(27954),
                p = i(6969),
                x = (function (t) {
                    return ((t.TRACKS = 'tracks'), (t.ARTISTS = 'artists'), t);
                })({}),
                v = (function (t) {
                    return ((t[(t.TRACKS = 0)] = 'TRACKS'), (t[(t.ARTISTS = 1)] = 'ARTISTS'), t);
                })({}),
                g = i(1856),
                C = i.n(g),
                A = i(82298),
                T = i(39004),
                k = i(64715),
                b = i(84058),
                S = i(99401),
                f = i(26076),
                j = i(19412),
                N = i(6968),
                E = i(8487),
                y = i(4254),
                I = i(21784),
                O = i(27625),
                R = i(15270),
                L = i(9162),
                D = i.n(L),
                P = i(79396),
                w = i(9931),
                z = i(53712),
                M = i(25895),
                U = i(83918),
                H = i(23976);
            let B = () =>
                    (0, s.jsxs)('div', {
                        className: D().tabsShimmer,
                        children: [(0, s.jsx)(H.W, { className: D().tabShimmer }), (0, s.jsx)(H.W, { className: D().tabShimmer })],
                    }),
                W = (0, a.PA)((t) => {
                    var e, i, a, n, l, o, c, d, u, m;
                    let { tabsState: _, tabElementId: p, isStickyHeader: g = !1 } = t,
                        {
                            collection: { dislikes: C },
                        } = (0, h.g)(),
                        { formatMessage: A } = (0, T.A)(),
                        { isScrolling: k } = (0, r.useContext)(O.B),
                        b = ((t) => {
                            let e = (0, U.X)();
                            return (0, r.useCallback)(
                                (i) => {
                                    var s;
                                    switch ((null == (s = t.onTabChange) || s.call(t, i), i)) {
                                        case v.TRACKS: {
                                            let { href: t } = (0, M.u)(z.Z.collectionDislikes.href, { query: { tab: x.TRACKS } });
                                            e(t);
                                            break;
                                        }
                                        case v.ARTISTS: {
                                            let { href: t } = (0, M.u)(z.Z.collectionDislikes.href, { query: { tab: x.ARTISTS } });
                                            e(t);
                                        }
                                    }
                                },
                                [e, t],
                            );
                        })(_),
                        S = k ? -1 : 0;
                    g && (S = k ? 0 : -1);
                    let f = (0, r.useMemo)(() => {
                            var t, e;
                            return (null == (e = C.tracks) || null == (t = e.items) ? void 0 : t.length)
                                ? ''.concat(A({ id: 'entity-names.tracks' }), ' • ').concat(C.tracks.items.length)
                                : A({ id: 'entity-names.tracks' });
                        }, [null == (i = C.tracks) || null == (e = i.items) ? void 0 : e.length, A]),
                        j = (0, r.useMemo)(() => {
                            var t, e;
                            return (null == (e = C.artists) || null == (t = e.items) ? void 0 : t.length)
                                ? ''.concat(A({ id: 'entity-names.artists' }), ' • ').concat(C.artists.items.length)
                                : A({ id: 'entity-names.artists' });
                        }, [null == (n = C.artists) || null == (a = n.items) ? void 0 : a.length, A]);
                    return (0, s.jsxs)(w.wI, {
                        isShimmerVisible: C.isLoading,
                        shimmer: (0, s.jsx)(B, {}),
                        className: D().tabs,
                        elementId: p,
                        ..._,
                        onTabChange: b,
                        children: [
                            (0, s.jsx)(P.o, {
                                className: D().tab,
                                value: v.TRACKS,
                                title: f,
                                'aria-label': A(
                                    { id: 'entity-names.tracks-count' },
                                    { value: null != (u = null == (o = C.tracks) || null == (l = o.items) ? void 0 : l.length) ? u : 0 },
                                ),
                                'aria-hidden': k,
                                tabIndex: S,
                            }),
                            (0, s.jsx)(P.o, {
                                className: D().tab,
                                value: v.ARTISTS,
                                title: j,
                                'aria-label': A(
                                    { id: 'entity-names.artists-count' },
                                    { value: null != (m = null == (d = C.artists) || null == (c = d.items) ? void 0 : c.length) ? m : 0 },
                                ),
                                'aria-hidden': k,
                                tabIndex: S,
                            }),
                        ],
                    });
                }),
                K = (0, a.PA)((t) => {
                    let { tabsState: e, tabElementId: i } = t,
                        a = (0, I.W)(),
                        { isScrolling: n } = (0, r.useContext)(O.B);
                    return (0, s.jsxs)('header', {
                        className: D().root,
                        'aria-hidden': n,
                        'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_STATIC_HEADER,
                        children: [
                            (0, s.jsxs)('div', {
                                className: D().container,
                                children: [
                                    a.canBack && (0, s.jsx)(R.L, { withForwardControl: !1, withBackwardControl: a.canBack, shouldFocusOnMount: !n }),
                                    (0, s.jsx)(y.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: D().title,
                                        'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_STATIC_HEADER_TITLE,
                                        children: (0, s.jsx)(E.A, { id: 'collection.my-dislikes' }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(W, { tabsState: e, tabElementId: i }),
                        ],
                    });
                });
            var F = i(24508),
                $ = i.n(F);
            let V = (0, a.PA)((t) => {
                var e, i, a;
                let { forwardRef: n, tabsState: l, tabElementId: c } = t,
                    {
                        collection: { dislikes: d },
                        settings: { isMobile: u },
                    } = (0, h.g)(),
                    { formatMessage: m } = (0, T.A)(),
                    _ = d.artists.isLoading ? 10 : null != (a = null == (i = d.artists) || null == (e = i.items) ? void 0 : e.length) ? a : 0,
                    p = (0, r.useMemo)(
                        () => ({
                            Header: () => (0, s.jsx)(K, { tabsState: l, tabElementId: c }),
                            Footer: () => (0, s.jsx)(f.A, { children: (0, s.jsx)(S.w, { className: $().footer }) }),
                        }),
                        [c, l],
                    );
                return d.artists.isRejected
                    ? (0, s.jsx)(k.SomethingWentWrong, {})
                    : (0, s.jsx)('div', {
                          className: $().root,
                          children: (0, s.jsx)(o.Kp, {
                              value: l.value,
                              name: v.ARTISTS,
                              elementId: c,
                              className: $().tabPanel,
                              children: (0, s.jsx)(N.$, {
                                  className: (0, A.$)($().scrollContainer, $().important),
                                  listClassName: (0, A.$)($().content, $().content_withGrid),
                                  customComponents: p,
                                  initialItemCount: _,
                                  totalCount: _,
                                  itemContentCallback: (t) => {
                                      var e, i;
                                      let a = null == (i = d.artists) || null == (e = i.items) ? void 0 : e[t];
                                      if (!a) {
                                          let t = m({ id: 'loading-messages.entity-is-loading' }, { entityName: m({ id: 'entity-names.artist' }) });
                                          return (0, s.jsx)(j.V, { 'aria-label': t, round: !0, centered: !0 });
                                      }
                                      return (0, s.jsx)(b.a, { artist: a, contentLinesCount: 3, className: $().item }, a.id);
                                  },
                                  handleRef: n,
                                  context: { listAriaLabel: m({ id: 'entity-names.artists' }) },
                                  isMobileLayout: u,
                                  useWindowScroll: u,
                              }),
                          }),
                      });
            });
            var X = i(22939),
                G = i(51549),
                q = i(82967),
                Z = i(30290),
                Y = i(79422),
                Q = i(3718),
                J = i(97805);
            let tt = (0, a.PA)((t) => {
                var e, i, a;
                let { forwardRef: n, tabsState: l, tabElementId: c } = t,
                    { from: d } = (0, Z.f)(),
                    {
                        collection: { dislikes: u },
                        settings: { isMobile: m },
                    } = (0, h.g)(),
                    { formatMessage: _ } = (0, T.A)(),
                    p = (0, Y.w)(),
                    x = u.tracks.isLoading ? 10 : null != (a = null == (i = u.tracks) || null == (e = i.items) ? void 0 : e.length) ? a : 0,
                    g = (0, r.useCallback)(
                        (t) => {
                            var e;
                            null == (e = u.tracks) || e.getTracksByRange(t.startIndex, t.endIndex);
                        },
                        [u.tracks],
                    ),
                    C = (0, r.useMemo)(
                        () => ({
                            Header: () => (0, s.jsx)(K, { tabsState: l, tabElementId: c }),
                            Footer: () => (0, s.jsx)(f.A, { children: (0, s.jsx)(S.w, { className: $().footer }) }),
                        }),
                        [c, l],
                    );
                return u.tracks.isRejected
                    ? (0, s.jsx)(k.SomethingWentWrong, {})
                    : (0, s.jsx)('div', {
                          className: $().root,
                          children: (0, s.jsx)(o.Kp, {
                              value: l.value,
                              name: v.TRACKS,
                              elementId: c,
                              className: $().tabPanel,
                              children: (0, s.jsx)(N.$, {
                                  className: (0, A.$)($().scrollContainer, $().important),
                                  listClassName: (0, A.$)($().content, $().content_tracks),
                                  customComponents: C,
                                  totalCount: x,
                                  itemContentCallback: (t) => {
                                      var e, i, a;
                                      let r = null == (a = u.tracks) || null == (i = a.items) || null == (e = i[t]) ? void 0 : e.data;
                                      if (!r) return (0, s.jsx)(J.D, { isActive: !0, className: $().shimmerItem, variant: Q.X.PLAYLIST });
                                      let n = p(t, {
                                          contextData: { type: X.K.Various, meta: { id: 'disliked-tracks' }, from: d, playDisliked: !0 },
                                          entitiesData: u.tracks.sonataEntitiesData,
                                          queueParams: { index: t },
                                          loadContextMeta: !1,
                                      });
                                      return r.isTrackNonMusic
                                          ? (0, s.jsx)(G.K, { track: r, playContextParams: n, ignoreDislikedStyles: !0, withPodcastName: !0 })
                                          : (0, s.jsx)(q.K, { track: r, playContextParams: n, ignoreDislikedStyles: !0 });
                                  },
                                  onGetDataByRange: g,
                                  debounceDurationInMs: 300,
                                  handleRef: n,
                                  context: { listAriaLabel: _({ id: 'entity-names.tracks' }) },
                                  isMobileLayout: m,
                                  useWindowScroll: m,
                              }),
                          }),
                      });
            });
            var te = i(66738),
                ti = i(81596),
                ts = i.n(ti);
            let ta = (0, a.PA)((t) => {
                let { tabsState: e, tabElementId: i } = t;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(K, { tabsState: e, tabElementId: i }),
                        (0, s.jsxs)(o.Kp, {
                            value: e.value,
                            name: e.value,
                            elementId: i,
                            className: ts().root,
                            'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_EMPTY_ROOT,
                            children: [
                                (0, s.jsx)(te.I, {
                                    className: ts().icon,
                                    size: 'l',
                                    variant: 'album',
                                    'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_EMPTY_ICON,
                                }),
                                (0, s.jsx)(y.DZ, {
                                    className: ts().title,
                                    variant: 'h3',
                                    size: 'xs',
                                    'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_EMPTY_HEAD,
                                    children: (0, s.jsx)(E.A, { id: 'entity-names.list-is-empty' }),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var tr = i(10603);
            let tn = (0, a.PA)((t) => {
                    let { tabsState: e, tabElementId: i } = t,
                        { isScrolling: a } = (0, r.useContext)(O.B),
                        n = (0, I.W)();
                    return (0, s.jsx)(tr.Y, {
                        variant: tr.V.COMPOSITE,
                        staticClassName: (0, A.$)(D().staticHeader, D().important),
                        'aria-hidden': !a,
                        stickyClassName: (0, A.$)(D().stickyHeader, D().important),
                        stickyChild: (0, s.jsxs)('div', {
                            className: D().container,
                            'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_STICKY_HEADER,
                            children: [
                                n.canBack && (0, s.jsx)(R.L, { withForwardControl: !1, withBackwardControl: n.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, s.jsx)(W, { tabsState: e, tabElementId: i, isStickyHeader: !0 }),
                            ],
                        }),
                    });
                }),
                tl = (0, a.PA)(() => {
                    let t = (0, n.useSearchParams)(),
                        {
                            user: e,
                            collection: { dislikes: i },
                            library: a,
                        } = (0, h.g)(),
                        { contentScrollRef: g, setContentScrollRef: A } = (0, m.g)(),
                        T = (0, r.useId)(),
                        k = (0, r.useMemo)(() => {
                            switch (t.get(p.K.TAB)) {
                                case x.TRACKS:
                                    break;
                                case x.ARTISTS:
                                    return v.ARTISTS;
                            }
                            return v.TRACKS;
                        }, [t]),
                        b = (0, o.zb)(k);
                    (e.account.data.uid || (0, n.notFound)(),
                        (0, _.J)(i.isResolved),
                        (0, r.useEffect)(
                            () => () => {
                                i.reset();
                            },
                            [i],
                        ));
                    let S = (0, r.useMemo)(() => {
                        switch (b.value) {
                            case v.TRACKS:
                                if (i.tracks.isEmpty) return (0, s.jsx)(ta, { tabsState: b, tabElementId: T });
                                return (0, s.jsx)(tt, { forwardRef: A, tabsState: b, tabElementId: T });
                            case v.ARTISTS:
                                if (i.artists.isEmpty) return (0, s.jsx)(ta, { tabsState: b, tabElementId: T });
                                return (0, s.jsx)(V, { forwardRef: A, tabsState: b, tabElementId: T });
                        }
                    }, [i.artists.isEmpty, i.tracks.isEmpty, A, T, b]);
                    if (i.isNeededToLoad) {
                        let t = [i.tracks.getData(), i.artists.getData(), a.getData()];
                        (0, r.use)(Promise.allSettled(t));
                    }
                    return (0, s.jsx)(u.n, {
                        pageId: d._Q.OWN_DISLIKES,
                        children: (0, s.jsx)(c.h, {
                            scrollElement: g,
                            headerThreshold: 148,
                            children: (0, s.jsxs)('div', {
                                className: C().root,
                                'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE,
                                children: [(0, s.jsx)(tn, { tabsState: b, tabElementId: T }), S],
                            }),
                        }),
                    });
                });
        },
        24508: (t) => {
            t.exports = {
                root: 'CollectionDislikesPageContent_root__3AoS5',
                scrollContainer: 'CollectionDislikesPageContent_scrollContainer__px7Vr',
                important: 'CollectionDislikesPageContent_important__Oz6io',
                content: 'CollectionDislikesPageContent_content__fScA9',
                content_withGrid: 'CollectionDislikesPageContent_content_withGrid__wcx80',
                content_tracks: 'CollectionDislikesPageContent_content_tracks__Hyiz_',
                footer: 'CollectionDislikesPageContent_footer__E6nZG',
                item: 'CollectionDislikesPageContent_item__aty4k',
                tabPanel: 'CollectionDislikesPageContent_tabPanel__5L5T_',
                shimmerItem: 'CollectionDislikesPageContent_shimmerItem__FMFR5',
            };
        },
        24596: (t) => {
            t.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        27990: (t) => {
            t.exports = {
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
        30871: (t, e, i) => {
            'use strict';
            i.d(e, { WithAuth: () => p });
            var s = i(25839),
                a = i(88204),
                r = i(84059),
                n = i(82298),
                l = i(8487),
                o = i(4254),
                c = i(16978),
                d = i(148),
                u = i.n(d);
            let m = (0, a.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(o.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(o.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var _ = i(53712),
                h = i(27954);
            let p = (0, a.PA)((t) => {
                let { children: e, withRedirectToMainPage: i } = t,
                    { user: a } = (0, h.g)();
                return a.isAuthorized ? e : (i && (0, r.redirect)(_.Z.main.href), (0, s.jsx)(m, {}));
            });
        },
        32652: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => p });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(61493),
                c = i(66738),
                d = i(74245),
                u = i(27954),
                m = i(60924),
                _ = i(92870),
                h = i.n(_);
            let p = (0, r.PA)((t) => {
                let { className: e, getDescriptionTexts: i, trackId: r, containerClassName: _, variant: p, iconVariant: iconOverride, size: x = 'xxxs', ...v } = t,
                    { formatMessage: g } = (0, l.A)(),
                    {
                        settings: { isMobile: C },
                    } = (0, u.g)(),
                    [A, T] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    i && i().then(T);
                }, [i, r]);
                let {
                    iconVariant: k,
                    descriptionText: b,
                    isTooltipEnabled: S,
                    ariaLabel: f,
                } = ((t, e) => {
                    let { variant: i, descriptionTexts: s, isMobile: a } = t,
                        r = (null == s ? void 0 : s.join('\n')) || '';
                    return {
                        iconVariant: ((t) => {
                            switch (t) {
                                case d.JU.E:
                                    return 'explicit';
                                case d.JU.AGE_12:
                                case d.JU.AGE_16:
                                case d.JU.AGE_18:
                                    return 'adult';
                                case d.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(i),
                        descriptionText: r,
                        isTooltipEnabled: !!(null == s ? void 0 : s.length) && !a,
                        ariaLabel: r.length > 0 ? r : e({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: p, descriptionTexts: A, isMobile: C }, g);
                return (0, s.jsx)(m.k, {
                    description: b,
                    placement: 'bottom-start',
                    enabled: S,
                    children: (0, s.jsx)('span', {
                        className: _,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        p === d.JU.SUBSTITUTED ? (0, s.jsxs)('svg', {
                            className: (0, a.$)(h().explicitMark, e),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': f,
                            style: { width: 'var(--ym-icon-size-'.concat(x, ')'), height: 'var(--ym-icon-size-'.concat(x, ')') },
                            ...v,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, s.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, s.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, s.jsx)(c.I, {
                            className: (0, a.$)(h().explicitMark, e),
                            'aria-label': f,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : k,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? x : x,
                            style: iconOverride ? { width: `var(--ym-icon-size-${x})`, height: `var(--ym-icon-size-${x})` } : undefined,
                            ...v,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
                    }),
                });
            });
        },
        36286: (t) => {
            t.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        38726: (t, e, i) => {
            'use strict';
            i.d(e, { U: () => d });
            var s = i(25839),
                a = i(88204),
                r = i(61493),
                n = i(66738),
                l = i(10820),
                o = i(77174),
                c = i(27954);
            let d = (0, a.PA)((t) => {
                let { isLiked: e, onClick: i, className: a, iconClassName: d, albumType: u, disabled: m } = t,
                    { user: _ } = (0, c.g)(),
                    h = e ? 'liked' : 'like',
                    p = (0, o.$)(e, u);
                return (0, s.jsx)(l.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, s.jsx)(n.I, { className: d, variant: h, size: 'xxs' }),
                    'aria-pressed': e,
                    disabled: m || !_.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: p,
                });
            });
        },
        39528: (t, e, i) => {
            'use strict';
            i.d(e, { R: () => a });
            var s = i(25895);
            let a = (t) => (0, s.u)('/artist/:artistId', { params: { artistId: t } });
        },
        40828: (t) => {
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
        44408: (t) => {
            t.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        45300: (t) => {
            t.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        53454: (t) => {
            t.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        56348: (t, e, i) => {
            'use strict';
            i.d(e, { i: () => W });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(74631),
                l = i(49656),
                o = i(3392),
                c = i(19410),
                d = i(71035),
                u = i(27954),
                m = i(39528);
            let _ = (t, e) => {
                let { withLink: i, separator: s } = e,
                    a = i && !t.various ? (0, m.R)(t.id) : null;
                return { artist: t, name: t.name, separator: s, link: a };
            };
            var h = i(94484),
                p = i.n(h),
                x = i(61493),
                v = i(4254),
                g = i(97522),
                C = i(39004),
                A = i(44031),
                T = i(29481),
                k = i(85686),
                b = i(85743),
                S = i(40207);
            let f = (0, r.PA)((t) => {
                    let { item: e, linkClassName: i, captionClassName: a, captionSize: r = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: c } = t,
                        {
                            name: m,
                            link: _,
                            title: h,
                            ariaLabel: p,
                            tooltipText: f,
                            isTooltipEnabled: j,
                            handleNavigate: N,
                        } = ((t) => {
                            var e, i;
                            let { item: s, allArtistsTitle: a, withCustomTooltip: r } = t,
                                { formatMessage: n } = (0, C.A)(),
                                l = ((t, e) => {
                                    let { item: i, allArtistsTitle: s, withCustomTooltip: a } = t,
                                        r = s || i.name;
                                    return {
                                        ...i,
                                        title: a ? void 0 : r,
                                        ariaLabel: i.link ? e({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: r,
                                        isTooltipEnabled: !s && a,
                                    };
                                })({ item: s, allArtistsTitle: a, withCustomTooltip: r }, n),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                m = (0, k.Z)(null != (i = null == (e = l.link) ? void 0 : e.href) ? i : l.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, b.z)(),
                                h = (0, T.N)(),
                                p = (0, d.c)((t) => {
                                    (c && o.isOpened && o.close(), m(t));
                                }),
                                x = ((t) => {
                                    let { artist: e, callback: i } = t,
                                        { currentTrackInfo: s, fullscreenPlayer: a, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: n } = s;
                                    return (0, S.l)({
                                        entity: e,
                                        callback: i,
                                        onBeforeHandle: (t) => {
                                            (null == t || t.stopPropagation(), n.isOpened && (s.reset(), n.close()), a.modal.isOpened && a.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: l.artist, callback: p }),
                                v = (0, d.c)((t) => {
                                    (h({ to: A.AppScreen.ArtistScreen }), null == _ || _(), x(t));
                                });
                            return { ...l, handleNavigate: v };
                        })({ item: e, allArtistsTitle: n, withCustomTooltip: l });
                    return _
                        ? (0, s.jsx)(g.N, {
                              ..._,
                              'aria-label': p,
                              className: i,
                              onClick: N,
                              title: h,
                              'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: j,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: f,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(v.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: a, children: m }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: j,
                              offsetOptions: 4,
                              placement: 'top',
                              text: f,
                              hoverSettings: c,
                              children: (0, s.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: a,
                                  title: h,
                                  'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                j = (t) => {
                    let { group: e, linkClassName: i, captionClassName: a, captionSize: r, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = t;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            e.primary.separator,
                            (0, s.jsx)(f, {
                                item: e.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: r,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            e.decomposed.map((t) =>
                                (0, s.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            t.separator,
                                            (0, s.jsx)(f, {
                                                item: t,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: r,
                                                allArtistsTitle: l,
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
            var N = i(8487),
                E = i(9079);
            let y = (t) => {
                let { spoilerArtistsCount: e, spoilerClassName: i, handleOnSpoilerClick: r } = t;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(E.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(p().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': x.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(N.A, { id: 'entity-names.number-of-more-artists', values: { counter: e } }),
                        }),
                    ],
                });
            };
            var I = i(28631),
                O = i(33049),
                R = i(61912),
                L = i(36286),
                D = i.n(L);
            let P = (0, r.PA)((t) => {
                    let { label: e, artists: i, forwardRef: a } = t;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, O.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: a, children: e }),
                            (0, s.jsx)(o.ZI, { className: D().tooltipContent, children: i.map((t) => (0, s.jsx)(R.V, { artist: t, className: D().artistItem }, t.id)) }),
                        ],
                    });
                }),
                w = (0, n.forwardRef)((t, e) => (0, s.jsx)(P, { forwardRef: e, ...t }));
            var z = i(10820),
                M = i(93510),
                U = i.n(M);
            let H = (0, r.PA)((t) => {
                    let { label: e, artists: i } = t,
                        { formatMessage: r } = (0, C.A)();
                    return (0, s.jsx)(z.W1, {
                        isMobile: !0,
                        className: (0, a.$)(U().root, U().important),
                        label: e,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((t) => (0, s.jsx)(R.V, { artist: t }, t.id)),
                    });
                }),
                B = (0, r.PA)((t) => {
                    let { artists: e = [], label: i, labelRef: a } = t,
                        [r, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let t = a.current;
                            t && o(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);
                        }),
                        _ = (0, l.L)(() =>
                            (0, I.A)(() => {
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
                        }, [e, m]),
                        0 !== e.length)
                    )
                        return (r || c) && (!c || 1 !== e.length) ? (c ? (0, s.jsx)(H, { artists: e, label: i }) : (0, s.jsx)(w, { artists: e, label: i })) : i;
                }),
                W = (0, r.PA)((t) => {
                    let {
                            className: e,
                            lineClamp: i,
                            spoilerClassName: r,
                            linkClassName: m,
                            captionClassName: h,
                            captionSize: x,
                            variant: v = 'breakAll',
                            spoilerComponent: g,
                            ...C
                        } = t,
                        A = ((t) => {
                            var e, i, s;
                            let { separator: a, visibleArtistsCount: r, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = t,
                                h = null != (e = t.artists) ? e : [],
                                p = null == (i = t.withAllArtistsTitle) || i,
                                x = null == (s = t.withCustomTooltip) || s,
                                v = (0, n.useRef)(null),
                                [g, C] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: A },
                                } = (0, u.g)(),
                                T = ((!A || 1 === h.length) && m) || !m,
                                k = ((t, e) => {
                                    var i, s, a;
                                    let r = null == (i = null == e ? void 0 : e.withComposer) || i,
                                        n = null == (s = null == e ? void 0 : e.withLink) || s,
                                        l = null != (a = null == e ? void 0 : e.separator) ? a : ', ',
                                        o = t
                                            .flatMap((t) => {
                                                var e;
                                                let i = (null != (e = t.decomposed) ? e : []).map((t) => t.name);
                                                return [t.name, ...i];
                                            })
                                            .join(l),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((t, e) => {
                                            let { visibleArtistsCount: i, withComposer: s } = e;
                                            return {
                                                visibleArtists: (i ? t.slice(0, i) : t).filter((t) => s || !t.isComposer),
                                                hiddenArtistsCount: i && i < t.length ? t.length - i : 0,
                                            };
                                        })(t, { withComposer: r, visibleArtistsCount: null == e ? void 0 : e.visibleArtistsCount });
                                    return {
                                        groups: c.map((t, i) =>
                                            ((t, e) => {
                                                var i;
                                                let { withLink: s, separator: a, isFirst: r } = e;
                                                return {
                                                    primary: _(t, { withLink: s, separator: r ? void 0 : a }),
                                                    decomposed: (null != (i = t.decomposed) ? i : []).map((t) => {
                                                        let e = a ? t.separator : '';
                                                        return _(t, { withLink: s, separator: e });
                                                    }),
                                                };
                                            })(t, { withLink: n && t.id !== (null == e ? void 0 : e.artistIdWithoutLink), separator: l, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(h, { separator: a, visibleArtistsCount: g ? void 0 : r, withComposer: o, withLink: !!T && l, artistIdWithoutLink: c }),
                                b = p ? k.allArtistsTitle : '',
                                S = (0, d.c)((t) => {
                                    (C(!0), t.preventDefault());
                                });
                            return {
                                artists: h,
                                groups: k.groups,
                                hiddenArtistsCount: k.hiddenArtistsCount,
                                allArtistsTitle: b,
                                withCustomTooltip: x,
                                withContextMenu: m,
                                labelRef: v,
                                handleOnSpoilerClick: S,
                                isTooltipEnabled: !!b && x && !m && !A,
                                title: !b || x || m ? void 0 : b,
                            };
                        })(C),
                        T = (0, l.L)(() =>
                            A.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(g)
                                  ? g
                                  : (0, s.jsx)(y, { spoilerClassName: r, spoilerArtistsCount: A.hiddenArtistsCount, handleOnSpoilerClick: A.handleOnSpoilerClick }),
                        ),
                        k = (0, s.jsx)(o.m_, {
                            referenceRef: A.labelRef,
                            enabled: A.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: A.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(p().root, p()['root_variant_'.concat(v)], { [p().root_clamp]: i && i > 0, [p().ellipsis]: !i }, e),
                                title: A.title,
                                children: [
                                    A.groups.map((t) =>
                                        (0, s.jsx)(
                                            j,
                                            {
                                                group: t,
                                                linkClassName: m,
                                                captionClassName: h,
                                                captionSize: x,
                                                allArtistsTitle: A.allArtistsTitle,
                                                withCustomTooltip: A.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            t.primary.artist.key,
                                        ),
                                    ),
                                    T,
                                ],
                            }),
                        });
                    return A.withContextMenu ? (0, s.jsx)(B, { labelRef: A.labelRef, artists: A.artists, label: k }) : k;
                });
        },
        56480: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => s });
            let s = (0, i(74631).createContext)({ pageAlbumId: void 0 });
        },
        57024: (t, e, i) => {
            'use strict';
            i.d(e, { C8: () => r, UC: () => n, dM: () => l, uV: () => o });
            var s = i(93690),
                a = i(58848);
            let r = (t) => {
                    if (void 0 === t || '' === t) return 'missing';
                    let e = Number(t);
                    return !Number.isFinite(e) || e < 0 ? 'invalid' : e < 86400 ? 'lt-1d' : e <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (t) => (t.uid ? 'authorized' : 'no-uid'),
                l = (t) => {
                    if (!(t instanceof s.m5) || !(0, a.N)(t.cause)) return 'unexpected';
                    let e = ((t) => {
                        if (!(0, a.N)(t.cause)) return;
                        let e = t.cause.response;
                        if ('object' == typeof e && null !== e) {
                            if ('statusCode' in e && 'number' == typeof e.statusCode) return e.statusCode;
                            if ('status' in e && 'number' == typeof e.status) return e.status;
                        }
                    })(t);
                    return void 0 === e ? 'transport' : 401 === e ? '401' : e >= 400 && e < 500 ? '4xx' : e >= 500 && e < 600 ? '5xx' : 'unexpected';
                },
                o = (t) => {
                    try {
                        var e;
                        null == (e = window.musicDesktop) || e.authorization.reportDiagnostic(t);
                    } catch (t) {}
                };
        },
        58848: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => s });
            let s = (t) => 'object' == typeof t && null !== t && 'request' in t && null !== t.request;
        },
        59981: (t, e, i) => {
            'use strict';
            var s;
            (i.d(e, { T: () => s }),
                (function (t) {
                    ((t.OK = 'ok'), (t.ERROR = 'error'));
                })(s || (s = {})));
        },
        60924: (t, e, i) => {
            'use strict';
            i.d(e, { k: () => d });
            var s = i(25839),
                a = i(61493),
                r = i(3392),
                n = i(4254),
                l = i(74672),
                o = i.n(l);
            let c = { padding: 8 },
                d = (t) => {
                    let { description: e, enabled: i, title: l, placement: d = 'top', children: u } = t;
                    return (0, s.jsxs)(r.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, s.jsx)(r.ZI, {
                                className: o().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, s.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, s.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, s.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: e }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61561: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => r });
            var s = i(27954),
                a = i(44806);
            let r = () => {
                var t, e;
                let {
                    user: i,
                    settings: { browserInfo: r },
                    experiments: n,
                } = (0, s.g)();
                return (
                    !(null == r ? void 0 : r.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (e = n.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (t = e.value) ? void 0 : t.closeListening) === 'on'
                );
            };
        },
        61912: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => C });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(74631),
                l = i(44031),
                o = i(61493),
                c = i(71035),
                d = i(23818),
                u = i(10820),
                m = i(86869),
                _ = i(4254),
                h = i(29481),
                p = i(85686),
                x = i(27954),
                v = i(53454),
                g = i.n(v);
            let C = (0, r.PA)((t) => {
                let { artist: e, className: i } = t,
                    { fullscreenPlayer: r } = (0, x.g)(),
                    v = (0, p.Z)(e.url),
                    A = (0, h.N)(),
                    T = (0, n.useMemo)(() => {
                        var t;
                        return (
                            'decomposed' in e &&
                            (null == (t = e.decomposed) ? void 0 : t.reduce((t, e) => (t.push((0, s.jsx)(C, { artist: e, className: i }, e.id)), t), []))
                        );
                    }, [e, i]),
                    k = (0, c.c)((t) => {
                        (r.modal.isOpened && r.modal.close(), A({ to: l.AppScreen.ArtistScreen }), v(t));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(u.Dr, {
                            className: (0, a.$)(g().root, i),
                            onClick: k,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: e.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, s.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: e.name }),
                            ],
                        }),
                        T,
                    ],
                });
            });
        },
        63149: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => l });
            var s = i(25839),
                a = i(53712),
                r = i(35015),
                n = i(3163);
            let l = (t) => {
                let { artist: e, closeToast: i } = t;
                return (0, s.jsx)(n.O, {
                    closeToast: i,
                    entityVariant: r.c.ARTIST,
                    entityUrl: e.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: e.coverUri,
                    entityTitle: e.name,
                    isLiked: e.isLiked,
                });
            };
        },
        64715: (t, e, i) => {
            'use strict';
            i.d(e, { SomethingWentWrong: () => O });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(8487);
            i(93588);
            var c = i(4071),
                d = i(66738),
                u = i(4254),
                m = i(67379),
                _ = i(44031),
                h = i(87277),
                p = i(59450),
                x = i(84e3),
                v = i(97952),
                g = i(89192),
                C = i(53712),
                A = i(27954),
                T = i(44806),
                k = i(15270),
                b = i(23818),
                S = i(85686);
            let f = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var j = i(27990),
                N = i.n(j);
            let E = (0, r.PA)((t) => {
                let { className: e, withBackwardControl: i = !0 } = t,
                    { slam: r } = (0, A.g)(),
                    { contentRef: n } = (0, g.g)(),
                    l = (0, S.Z)(C.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(N().root, e),
                    children: [
                        i &&
                            (0, s.jsx)(k.L, { withBackwardFallback: '/', className: (0, a.$)(N().navigation, { [N().navigation_desktop]: !n }), withForwardControl: !1 }),
                        (0, s.jsxs)('div', {
                            className: (0, a.$)(N().content, { [N().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(b._V, { className: N().image, src: f.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: N().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: N().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: N().text,
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
                                        className: N().button,
                                        onClick: l,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: N().buttonText,
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
            var y = i(68854),
                I = i.n(y);
            let O = (0, r.PA)((t) => {
                let { className: e, withBackwardControl: i = !0 } = t,
                    { formatMessage: r } = (0, l.A)(),
                    b = (0, n.useContext)(A.P),
                    S = null == b ? void 0 : b.experiments.checkExperiment(T.z.WebNextUnstableMusicScreen, 'on'),
                    f = r(S ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (t) {
                    let e = (0, p.st)(),
                        { hash: i } = (0, p.gf)(),
                        { pageId: s } = (0, v.$)(),
                        a = (0, x.U)();
                    (0, n.useEffect)(() => {
                        if (!e || !i || !s) return;
                        let r = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: t,
                                hash: i,
                                pageId: s,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, h.z5)(e.evgenInstance, r);
                    }, [e, t, i, s, a]);
                })(f);
                let { sendRefreshEvent: j } = (function () {
                        let t = (0, p.st)(),
                            { hash: e } = (0, p.gf)(),
                            { pageId: i } = (0, v.$)(),
                            s = (0, x.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!t || !e || !i) return;
                                let a = (0, m.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: e,
                                        pageId: i,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: s,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, h.bv)(t.evgenInstance, a);
                            }, [t, e, i, s]),
                        };
                    })(),
                    N = (0, n.useCallback)(() => {
                        (j(), (window.location.href = C.Z.main.href));
                    }, [j]),
                    { contentRef: y } = (0, g.g)();
                return S
                    ? (0, s.jsx)(E, { className: e, withBackwardControl: i })
                    : (0, s.jsxs)('div', {
                          className: (0, a.$)(I().root, e),
                          children: [
                              i &&
                                  (0, s.jsx)(k.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(I().navigation, { [I().navigation_desktop]: !y }),
                                      withForwardControl: !1,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, a.$)(I().content, { [I().content_shrink]: !i }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: I().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, a.$)(I().title, I().important), variant: 'h3', size: 'xs', children: f }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, a.$)(I().text, I().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: N,
                                          className: I().button,
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
        68854: (t) => {
            t.exports = {
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
        70736: (t, e, i) => {
            (Promise.resolve().then(i.bind(i, 30871)), Promise.resolve().then(i.bind(i, 23288)));
        },
        71705: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => p });
            var s = i(25839),
                a = i(39004),
                r = i(71035),
                n = i(21468),
                l = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(33660),
                m = i(74631),
                _ = i(31860),
                h = i(93297);
            let p = (t) => {
                let {
                        user: e,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: p },
                    } = (0, c.g)(),
                    { formatMessage: x } = (0, a.A)(),
                    { notify: v } = (0, o.l)(),
                    g = (() => {
                        let { notify: t } = (0, o.l)(),
                            { fullscreenPlayer: e } = (0, c.g)(),
                            [i, n] = (0, m.useState)(!1),
                            { formatMessage: p } = (0, a.A)();
                        return (0, r.c)(async (a) => {
                            let { album: r, withLink: o = !0, withNotification: c = !0 } = a;
                            if (i) return;
                            let m = { ...(0, u.HO)(r), url: r.url, isLiked: !r.isLiked };
                            n(!0);
                            let x = await r.toggleLike();
                            if ((n(!1), !c)) return;
                            let v = e.modal.isOpened;
                            x === _.f.OK
                                ? t((0, s.jsx)(h.T, { withLink: o, album: m }), { containerId: v ? l.u.FULLSCREEN_INFO : l.u.INFO })
                                : t((0, s.jsx)(d.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: v ? l.u.FULLSCREEN_ERROR : l.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: C } = (0, n.T)();
                return (0, r.c)(async () => {
                    if (t)
                        return p({ pageAlbumId: C, albumId: t.id, isNonMusic: t.isNonMusic })
                            ? void i.openModal()
                            : e.isAuthorized
                              ? g({ album: t })
                              : void v((0, s.jsx)(d.h, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        71996: (t, e, i) => {
            'use strict';
            i.d(e, { k: () => u });
            var s = i(25839),
                a = i(74631),
                r = i(39004),
                n = i(61493),
                l = i(4071),
                o = i(66738),
                c = i(49984);
            let d = (t) => {
                    let {
                            variant: e,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: h,
                            className: p,
                            forwardRef: x,
                            style: v,
                            children: g,
                        } = t,
                        { formatMessage: C } = (0, r.A)(),
                        A = C({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(l.$, {
                        className: p,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: e,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': A,
                        onClick: _,
                        ref: x,
                        icon: (0, s.jsx)(o.I, { variant: 'trailer', size: u, className: h }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, a.forwardRef)((t, e) => (0, s.jsx)(d, { forwardRef: e, ...t }));
        },
        73182: (t, e, i) => {
            'use strict';
            i.d(e, { b: () => r });
            var s = i(56829),
                a = i(35015);
            let r = (t) => {
                switch (t) {
                    case s._.PODCAST:
                        return a.c.PODCAST;
                    case s._.AUDIOBOOK:
                        return a.c.AUDIOBOOK;
                    case s._.FAIRY_TALE:
                        return a.c.FAIRY_TALE;
                    default:
                        return a.c.ALBUM;
                }
            };
        },
        74672: (t) => {
            t.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        76481: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => a });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(t, e = {}) {
                    let { code: i = 'E_INTERNAL', data: a = {}, ...r } = e,
                        n = t || 'Internal error';
                    (super(n, r), (this.message = n), (this.code = i), (this.data = a), (this.stack = Error(n).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class a extends s {
                name = 'HttpException';
                constructor(t = 'Http Client error', { code: e = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(t, { code: e, ...i }), Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        77174: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => r });
            var s = i(39004),
                a = i(56829);
            let r = (t, e) => {
                let { formatMessage: i } = (0, s.A)();
                if (t)
                    switch (e) {
                        case a._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case a._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (e) {
                    case a._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case a._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        77737: (t, e, i) => {
            'use strict';
            i.d(e, { j: () => f });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(84059),
                c = i(61493),
                d = i(49656),
                u = i(3392),
                m = i(4254),
                _ = i(56348),
                h = i(85743),
                p = i(27954),
                x = i(19410),
                v = i(12929),
                g = i(32652),
                C = i(97522),
                A = i(40846),
                T = i(61755),
                k = i(87221),
                b = i(12752),
                S = i.n(b);
            let f = (0, r.PA)((t) => {
                let {
                        className: e,
                        titleContainerClassName: i,
                        track: r,
                        albumArtists: b,
                        withExplicitMark: f,
                        withSecondaryColor: j,
                        captionSize: N = 'm',
                        explicitSize: E = 'xxxs',
                        withAllArtistsTitle: y,
                        textClassName: I,
                        artistsClassName: O,
                        ignoreDislikedStyles: R,
                        withCustomTooltip: L = !0,
                        hasLineClamp: D = !0,
                        withSavingQueryParams: P,
                        beforeTitle: w,
                        withArtistLink: z,
                        variant: M,
                        withTrackLink: U,
                        afterTitle: H,
                        withContextMenuArtists: B,
                    } = t,
                    { formatMessage: W } = (0, l.A)(),
                    { sendNavigateSearchFeedback: K } = (0, h.z)(),
                    {
                        settings: { isMobile: F },
                        slam: $,
                    } = (0, p.g)(),
                    V = (0, T.$)({ withCustomTooltip: L }),
                    X = (0, o.useSearchParams)(),
                    G = (0, A.B)(r, {
                        isMobile: F,
                        isOfflineModeEnabled: $.isOfflineModeEnabled,
                        albumArtists: b,
                        withTrackLink: U,
                        withArtistLink: z,
                        variant: M,
                        withExplicitMark: f,
                        query: P ? Object.fromEntries(X) : void 0,
                    }),
                    {
                        displayTitle: q,
                        ariaLabel: Z,
                        tooltipText: Y,
                        titleAttribute: Q,
                        versionTitleAttribute: J,
                        isTooltipEnabled: tt,
                    } = ((t, e, i, s) => {
                        var a, r;
                        let { canEnableCustomTooltip: n, isMobile: l } = i,
                            o = ((t, e) => (t.shouldShowRemovedTitle ? e({ id: 'track-title.error-not-found' }) : t.title))(e, s),
                            c = e.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (a = e.version) ? a : ''),
                            d = s({ id: 'entity-names.track-name' }, { trackName: t.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (r = t.version) ? r : ''),
                            tooltipText: c,
                            isTooltipEnabled: n && !l,
                            titleAttribute: !n && (e.shouldShowRemovedTitle || e.link) ? c : void 0,
                            versionTitleAttribute: n ? void 0 : e.version,
                        };
                    })(r, G, { canEnableCustomTooltip: V, isMobile: F }, W),
                    te = (0, k.O)({ track: r, onNavigate: K, withSavingQueryParams: P, entityType: v.n.TRACK }),
                    ti = (0, n.useCallback)(
                        (t) =>
                            (0, s.jsx)(u.m_, {
                                enabled: tt,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Y,
                                hoverSettings: x.V,
                                children: (0, s.jsx)(m.HL, {
                                    className: (0, a.$)(S().text, S().title),
                                    type: 'entity',
                                    size: N,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...t,
                                    children: q,
                                }),
                            }),
                        [N, q, Y, tt],
                    ),
                    ts = (0, d.L)(() =>
                        G.shouldShowRemovedTitle
                            ? (0, s.jsx)(u.m_, {
                                  enabled: tt,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Y,
                                  hoverSettings: x.V,
                                  children: (0, s.jsx)(m.HL, {
                                      className: (0, a.$)(S().text, S().title),
                                      type: 'entity',
                                      size: N,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Q,
                                      children: q,
                                  }),
                              })
                            : G.link
                              ? (0, s.jsx)(C.N, {
                                    onClick: te,
                                    className: S().albumLink,
                                    href: G.link.href,
                                    'aria-label': Z,
                                    title: Q,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ti(),
                                })
                              : ti({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    ta = (0, n.useMemo)(() => +!!D, [D]);
                return (0, s.jsx)('div', {
                    className: (0, a.$)(S().root, { [S().root_disabled]: !r.isAvailable, [S().root_disliked]: r.isDisliked && !R, [S().root_withSecondaryColor]: j }, e),
                    children: (0, s.jsxs)('div', {
                        className: S().metaContainer,
                        children: [
                            (0, s.jsxs)('div', {
                                className: (0, a.$)(S().titleContainer, { [S().titleContainer_withVersion]: r.version }, i),
                                children: [
                                    (0, s.jsxs)(m.HL, {
                                        className: (0, a.$)(S().text, I),
                                        type: 'entity',
                                        size: N,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            w,
                                            ts,
                                            G.version &&
                                                (0, s.jsxs)(m.HL, {
                                                    className: (0, a.$)(S().text, S().version),
                                                    type: 'entity',
                                                    size: N,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', G.version],
                                                }),
                                        ],
                                    }),
                                    G.explicitMark &&
                                        (0, s.jsx)(g.N, {
                                            containerClassName: S().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: E,
                                            variant: G.explicitMark,
                                            className: S().explicitMark,
                                            trackId: r.id,
                                        }),
                                    H,
                                ],
                            }),
                            G.artists.length > 0 &&
                                (0, s.jsx)(_.i, {
                                    className: (0, a.$)(S().text, { [S().artists]: D }, O, I),
                                    withAllArtistsTitle: y,
                                    linkClassName: (0, a.$)(S().text, S().link),
                                    captionClassName: (0, a.$)(S().text, S().artistCaption),
                                    artists: G.artists,
                                    withLink: G.withArtistLink,
                                    lineClamp: ta,
                                    captionSize: N,
                                    withContextMenu: B,
                                }),
                        ],
                    }),
                });
            });
        },
        77920: (t, e, i) => {
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
        78437: (t, e, i) => {
            'use strict';
            i.d(e, { n: () => n });
            var s = i(25839),
                a = i(39004),
                r = i(3392);
            let n = (t) => {
                let { children: e } = t,
                    { formatMessage: i } = (0, a.A)();
                return (0, s.jsx)(r.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: e,
                });
            };
        },
        79422: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => r });
            var s = i(74631),
                a = i(71035);
            let r = () => {
                let t = (0, s.useRef)(new Map());
                return (
                    (0, s.useLayoutEffect)(
                        () => (
                            t.current.size > 0 && t.current.clear(),
                            () => {
                                t.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, a.c)((e, i) => (t.current.has(e) ? t.current.get(e) : (t.current.set(e, i), i)))
                );
            };
        },
        80477: (t, e, i) => {
            'use strict';
            i.d(e, { l: () => n });
            var s = i(25839),
                a = i(35015),
                r = i(10546);
            let n = (t) => {
                let { artist: e, closeToast: i } = t;
                return (0, s.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: a.c.ARTIST,
                    coverUri: e.coverUri,
                    entityUrl: e.url,
                    entityTitle: e.name,
                    isPinned: e.isPinned,
                    radius: 'round',
                });
            };
        },
        81596: (t) => {
            t.exports = {
                root: 'CollectionDislikesPageEmpty_root__F9g35',
                icon: 'CollectionDislikesPageEmpty_icon__hbz5L',
                title: 'CollectionDislikesPageEmpty_title__AqUTM',
            };
        },
        82967: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => g });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(74631),
                l = i(61493),
                o = i(54880),
                c = i(50209),
                d = i(27954),
                u = i(6349),
                m = i(62661),
                _ = i(2096),
                h = i(77737),
                p = i(69730),
                x = i(7929),
                v = i.n(x);
            let g = (0, r.PA)((t) => {
                var e;
                let {
                        track: i,
                        playContextParams: r,
                        className: x,
                        withDNDBlock: g,
                        isDragging: C,
                        draggingClassName: A,
                        ignoreDislikedStyles: T,
                        withSecondaryColor: k,
                        handleRemove: b,
                        withDislike: S,
                        withTrailer: f = !0,
                        beforeTitle: j,
                        removeButtonAriaLabel: N,
                        hideControls: E,
                    } = t,
                    y = (0, c.D)({ playContextParams: r, entityId: i.entityId }),
                    {
                        settings: { isMobile: I },
                    } = (0, d.g)(),
                    O = (0, o.X)(i.trackSource, { isMobile: I }),
                    R = (0, n.useCallback)(
                        (t) =>
                            (0, s.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: T,
                                radius: 'xs',
                                ...t,
                            }),
                        [T, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, s.jsx)(p.C, {
                    className: (0, a.$)(x, { [v().trackWithDots]: g, [v().important]: g }),
                    track: i,
                    beforeBlock: g ? (0, s.jsx)(m.O, { className: (0, a.$)(v().dots, A), isDragging: C }) : void 0,
                    meta: (0, s.jsx)(h.j, { withArtistLink: O, beforeTitle: j, track: i, ignoreDislikedStyles: T, withSecondaryColor: k }),
                    playButtonCellRender: R,
                    controls: (0, s.jsx)(_.Q, {
                        track: i,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: T,
                        utmLink: null == (e = r.contextData) ? void 0 : e.utmLink,
                        withSecondaryColor: k,
                        handleRemove: b,
                        withDislike: S,
                        withTrailer: f,
                        removeButtonAriaLabel: N,
                        hideControls: E,
                    }),
                    ...y,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        83918: (t, e, i) => {
            'use strict';
            i.d(e, { X: () => a });
            var s = i(74631);
            let a = () =>
                (0, s.useCallback)((t) => {
                    {
                        let e = window.history.state;
                        window.history.replaceState(e, '', t);
                    }
                }, []);
        },
        84e3: (t, e, i) => {
            'use strict';
            i.d(e, { U: () => r });
            var s = i(36484),
                a = i(62562);
            let r = () => (0, a.N)().get(s.Zf);
        },
        84058: (t, e, i) => {
            'use strict';
            i.d(e, { a: () => B });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(44031),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                m = i(49656),
                _ = i(51246),
                h = i(66738),
                p = i(86869),
                x = i(4254),
                v = i(1797),
                g = i(7361),
                C = i(90613),
                A = i(79367),
                T = i(29481),
                k = i(47009),
                b = i(34159),
                S = i(52512),
                f = i(30290),
                j = i(61561),
                N = i(85686),
                E = i(85743),
                y = i(50209),
                I = i(27954),
                O = i(6323),
                R = i(64720),
                L = i(97522),
                D = i(41580),
                P = i(49438),
                w = i(71996),
                z = i(78437),
                M = i(21971),
                U = i(13936),
                H = i.n(U);
            let B = (0, r.PA)((t) => {
                let { artist: e, className: i, children: r, contentLinesCount: U, topTitleElement: B, bottomTitleElement: W } = t,
                    { ref: K, intersectionPropertyId: F } = (0, S.n)(),
                    {
                        trailer: $,
                        user: V,
                        paywall: { modal: X },
                    } = (0, I.g)(),
                    { from: G, utmLink: q } = (0, f.f)({ contextId: e.id, contextType: d.K.Artist }),
                    { formatMessage: Z } = (0, l.A)(),
                    [Y, Q] = (0, n.useState)(!1),
                    [J, tt] = (0, n.useState)(!1),
                    [te, ti] = (0, n.useState)(!1),
                    { sendLikeSearchFeedback: ts, sendNavigateSearchFeedback: ta, sendPlaySearchFeedback: tr } = (0, E.z)(),
                    tn = (0, T.N)(),
                    tl = (0, k.b)(),
                    to = (0, g.K)(e),
                    tc = (0, C.A)(e),
                    { id: td, name: tu, coverUri: tm, isLiked: t_ } = e,
                    th = (0, N.Z)(e.url),
                    [tp, tx] = (0, n.useState)(!1),
                    tv = (0, b.F)(),
                    tg = (0, A.P)(),
                    tC = (0, u.c)((t) => {
                        if ((t.stopPropagation(), tg())) return void t.preventDefault();
                        ($.openArtistTrailer(e.id), tv(o.DomainObjectType.Artist, e.id));
                    }),
                    tA = (0, n.useMemo)(() => {
                        let t = Z({ id: 'entity-names.artist-name' }, { artistName: tu }),
                            e = t_ ? Z({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(t, ' ').concat(e);
                    }, [tu, t_, Z]),
                    { isPlaying: tT, togglePlay: tk } = (0, y.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(td) }, from: G, utmLink: q }, loadContextMeta: !0 },
                    }),
                    tb = (0, v.S)({ artist: e, callback: th }),
                    tS = (0, v.S)({ artist: e, callback: tk }),
                    tf = (0, u.c)((t) => {
                        (null == ta || ta(), tn({ to: o.AppScreen.ArtistScreen }), tb(t));
                    }),
                    tj = (0, j.N)(),
                    tN = (0, u.c)(() => {
                        if (!tg()) {
                            if (tj) return void X.open();
                            (Y || tT || (Q(!0), null == tr || tr()), tS(), tl(!tT));
                        }
                    }),
                    tE = (0, u.c)(() => {
                        (J || t_ || (tt(!0), null == ts || ts()), to());
                    }),
                    ty = (0, u.c)((t) => {
                        (t.preventDefault(), t.stopPropagation());
                    }),
                    tI = (0, u.c)((t) => {
                        (ti(t), tx(t));
                    }),
                    tO = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                M.g,
                                {
                                    artist: e,
                                    onOpenChange: tI,
                                    open: te,
                                    onClick: ty,
                                    className: (0, a.$)(H().menuButton, H().control),
                                    size: 's',
                                    icon: (0, s.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                e.getKey('ArtistContextMenu'),
                            ),
                        [e, ty, tI, te],
                    ),
                    tR = (0, n.useMemo)(() => {
                        var t;
                        if (null == e || null == (t = e.trailer) ? void 0 : t.isAvailable)
                            return (0, s.jsx)(
                                z.n,
                                {
                                    children: (0, s.jsx)(w.k, {
                                        className: (0, a.$)(H().trailerButton, H().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: tC,
                                    }),
                                },
                                e.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [e, tC]),
                    tL = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                D.O,
                                { onClick: tc, isPinned: e.isPinned, className: (0, a.$)(H().pinButton, H().control), withRipple: !1 },
                                e.getKey('PinButton'),
                            ),
                        [e, tc],
                    ),
                    tD = (0, m.L)(() => {
                        if (e.isAvailable)
                            return (0, s.jsx)(
                                _.hg,
                                {
                                    isVisible: te || tp,
                                    className: H().controls,
                                    radius: 'round',
                                    playControl: (0, s.jsx)(
                                        P.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(H().playButton, H().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: tN,
                                            isPlaying: tT,
                                            disabled: !e.isAvailableForPlaying,
                                        },
                                        e.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, s.jsx)(
                                        R.c,
                                        {
                                            className: (0, a.$)(H().likeButton, H().control),
                                            isLiked: t_,
                                            onClick: tE,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !V.isAuthorized,
                                        },
                                        e.getKey('LikeButton'),
                                    ),
                                    menuControl: tO,
                                    pinControl: tL,
                                    trailerControl: tR,
                                },
                                e.getKey('ArtistCardControls'),
                            );
                    }),
                    tP = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(p.t, {
                                className: H().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: H().coverBlock,
                                    onClick: tf,
                                    children: [
                                        (0, s.jsx)(O.B, {
                                            className: H().image,
                                            src: tm,
                                            size: 200,
                                            fit: 'cover',
                                            alt: tA,
                                            withAvatarReplace: !0,
                                            isAvailable: e.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        tD,
                                    ],
                                }),
                            }),
                        [tf, tm, tA, e.isAvailable, tD],
                    );
                return (0, s.jsx)(_.MN, {
                    ref: K,
                    className: (0, a.$)(H().root, i),
                    textPosition: 'center',
                    'aria-label': tA,
                    title: (0, s.jsxs)(s.Fragment, {
                        children: [
                            B,
                            (0, s.jsx)(x.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, s.jsx)(L.N, {
                                    className: H().titleLink,
                                    href: e.url,
                                    tabIndex: -1,
                                    'aria-label': tA,
                                    onClick: tf,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: tu,
                                }),
                            }),
                            W,
                        ],
                    }),
                    srTitle: (0, s.jsx)(L.N, { className: H().srTitleLink, href: e.url, onClick: tf, children: tA }),
                    'data-intersection-property-id': F,
                    contentLinesCount: U,
                    view: tP,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: r,
                });
            });
        },
        90613: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => m });
            var s = i(25839),
                a = i(33660),
                r = i(74631),
                n = i(39004),
                l = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(80477);
            let m = (t) => {
                let { user: e } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, n.A)(),
                    [_, h] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t) return;
                    if (!e.isAuthorized) return void i((0, s.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let r = { ...(0, a.HO)(t), isPinned: !t.isPinned };
                    h(!0);
                    let n = await t.togglePin();
                    (h(!1),
                        n
                            ? i((0, s.jsx)(u.l, { artist: r }), { containerId: l.u.INFO })
                            : i((0, s.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t, e.isAuthorized, _, m, i]);
            };
        },
        90780: (t, e, i) => {
            'use strict';
            i.d(e, { C: () => c });
            var s = i(25839),
                a = i(74631),
                r = i(61493),
                n = i(4254),
                l = i(44408),
                o = i.n(l);
            let c = (t) => {
                let { getDescriptionTexts: e, entityId: i } = t,
                    [l, c] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
                        e && e().then(c);
                    }, [e]),
                    l)
                )
                    return l.map((t, e) =>
                        (0, s.jsx)(
                            n.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': r.S7.DESCRIPTION_TEXT,
                                children: t,
                            },
                            ''.concat(i, '-descpription-text-').concat(e),
                        ),
                    );
            };
        },
        91626: (t, e, i) => {
            'use strict';
            (i.d(e, { G: () => a }), i(77920));
            var s = i(76481);
            class a extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(t, e) {
                    (super(t, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: e.cause }),
                        (this.statusCode = e.statusCode),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        92870: (t) => {
            t.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        93297: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => l });
            var s = i(25839),
                a = i(88204),
                r = i(3163),
                n = i(73182);
            let l = (0, a.PA)((t) => {
                let { album: e, closeToast: i, withLink: a } = t,
                    l = (0, n.b)(e.type);
                return (0, s.jsx)(r.O, {
                    closeToast: i,
                    entityVariant: l,
                    coverUri: e.coverUri,
                    entityUrl: e.url,
                    collectionUrl: '/collection',
                    entityTitle: e.title,
                    isLiked: e.isLiked,
                    withLink: a,
                });
            });
        },
        93510: (t) => {
            t.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        93690: (t, e, i) => {
            'use strict';
            i.d(e, { GX: () => r.G, X1: () => s.X, m5: () => a.m });
            var s = i(77920),
                a = i(76481),
                r = i(91626);
            i(95919);
        },
        94484: (t) => {
            t.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        95919: (t, e, i) => {
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
    },
    (t) => {
        (t.O(
            0,
            [
                8803, 3349, 6392, 7170, 6287, 3472, 2121, 9122, 3112, 9505, 8451, 1583, 6749, 3291, 6706, 4771, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1251, 1817, 6215,
                3257, 2038, 4163, 3246, 3482, 6680, 2247, 4345, 8836, 820, 4434, 48, 862, 8372, 1808, 8222, 4932, 4475, 5056, 7358,
            ],
            () => t((t.s = 70736)),
        ),
            (_N_E = t.O()));
    },
]);
