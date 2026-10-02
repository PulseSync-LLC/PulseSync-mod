(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8336],
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
        400: (t) => {
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
        1466: (t, e, i) => {
            'use strict';
            i.d(e, { L: () => h });
            var s = i(25839),
                r = i(82298),
                o = i(74631),
                l = i(39004),
                a = i(8487),
                n = i(4071),
                c = i(66738),
                d = i(4254),
                u = i(51790),
                _ = i(12558),
                m = i.n(_);
            let h = (t) => {
                let { reloadBlocks: e, closeToast: i } = t,
                    _ = (0, o.useRef)(null),
                    { formatMessage: h } = (0, l.A)();
                (0, o.useEffect)(() => {
                    var t;
                    null == (t = _.current) || t.focus();
                }, []);
                let p = (0, o.useMemo)(
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
                                (0, s.jsx)(n.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: e,
                                    variant: 'text',
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [h, e],
                );
                return (0, s.jsx)(u.$, { className: (0, r.$)(m().root, m().important), message: p, closeToast: i });
            };
        },
        1797: (t, e, i) => {
            'use strict';
            i.d(e, { S: () => r });
            var s = i(40207);
            let r = (t) => {
                let { artist: e, callback: i, shouldHistoryBack: r } = t;
                return (0, s.l)({ entity: e, callback: i, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        6968: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => x });
            var s = i(25839),
                r = i(82298),
                o = i(28631),
                l = i(74631);
            let a = (t) => {
                    let { style: e, forwardRef: i, context: r, ...o } = t,
                        l = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        a = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: a, 'aria-label': l, style: { ...e }, ref: i, ...o });
                },
                n = (0, l.forwardRef)((t, e) => (0, s.jsx)(a, { forwardRef: e, ...t }));
            var c = i(45300),
                d = i.n(c);
            let u = (t) => {
                    let { style: e, forwardRef: i, withFooter: o, withHeader: l, withForceScroll: a, ...n } = t;
                    return (0, s.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: o, [d().scroller_withHeader]: l, [d().scroller_withForceScroll]: a }),
                        style: { ...e },
                        ref: i,
                        ...n,
                        tabIndex: -1,
                    });
                },
                _ = (0, l.forwardRef)((t, e) => (0, s.jsx)(u, { forwardRef: e, ...t }));
            var m = i(10508),
                h = i(63257);
            let p = (t) => {
                    let {
                            pageSize: e,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: o = 100,
                            totalCount: a = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = t,
                        [_, p] = (0, l.useState)(null),
                        x = (0, l.useMemo)(
                            () =>
                                (0, m.A)((t) => {
                                    if ((null == r || r(t), n.length > 0 && p(t), e && i)) {
                                        let s = Math.floor(t.endIndex / e) + 1,
                                            r = Math.floor(t.startIndex / e);
                                        for (let t = r; t < s; t++) i(t);
                                    }
                                }, o),
                            [o, r, e, i, n],
                        );
                    (0, l.useEffect)(() => {
                        n.length > 0 && _ && x(_);
                    }, n);
                    let v = (0, l.useMemo)(() => {
                        if (c)
                            return (0, m.A)((t) => {
                                c(t);
                            }, o);
                    }, [c, o]);
                    return (0, s.jsx)(h.sN, { ref: d, rangeChanged: x, totalCount: a, endReached: v, ...u });
                },
                x = (t) => {
                    let {
                            className: e,
                            customComponents: i,
                            onGetDataByPage: a,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: x = 700,
                            pageSize: v = 20,
                            totalCount: C,
                            totalRequests: A,
                            debounceDurationInMs: g,
                            initialItemCount: T,
                            minInitialItemCount: N = 20,
                            handleRef: E,
                            alwaysShowScrollbar: f = !1,
                            testId: y,
                            isMobileLayout: k = !1,
                            shouldTriggerRangeChangedOn: j,
                            ...b
                        } = t,
                        [R, O] = (0, l.useState)(!1),
                        S = (0, l.useMemo)(
                            () =>
                                (0, o.A)((t) => {
                                    O(t);
                                }, 100),
                            [],
                        ),
                        I = (0, l.useMemo)(() => {
                            var t, e;
                            return k
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
                        }, [i, A, k]),
                        P = T ? Math.min(T, N) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: R || f, [d().root_notScrolling]: !R && !f }, e),
                        'data-test-id': y,
                        children: [
                            k && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(p, {
                                overscan: x,
                                components: I,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: S,
                                itemContent: m,
                                scrollerRef: E,
                                totalCount: C,
                                pageSize: v,
                                onPageHandler: a,
                                onRangeHandler: c,
                                debounceDurationInMs: g,
                                initialItemCount: P,
                                shouldTriggerRangeChangedOn: j,
                                ...b,
                            }),
                            k && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        7361: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => m });
            var s = i(25839),
                r = i(33660),
                o = i(74631),
                l = i(39004),
                a = i(31860),
                n = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                _ = i(63149);
            let m = (t) => {
                let { user: e } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, h] = (0, o.useState)(!1),
                    { formatMessage: p } = (0, l.A)();
                return (0, o.useCallback)(async () => {
                    if (!t) return;
                    if (!e.isAuthorized) return void i((0, s.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (m) return;
                    let o = { ...(0, r.HO)(t), isLiked: !t.isLiked };
                    h(!0);
                    let l = await t.toggleLike();
                    (h(!1),
                        l === a.f.OK
                            ? i((0, s.jsx)(_.T, { artist: o }), { containerId: n.u.INFO })
                            : i((0, s.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [t, e.isAuthorized, m, p, i]);
            };
        },
        9080: (t) => {
            t.exports = {
                root: 'CollectionArtistsPage_root__EH25F',
                scrollContainer: 'CollectionArtistsPage_scrollContainer__tT6NQ',
                important: 'CollectionArtistsPage_important__MG_XV',
                footer: 'CollectionArtistsPage_footer__aZrx3',
                item: 'CollectionArtistsPage_item___cy_9',
                contentBlock: 'CollectionArtistsPage_contentBlock__5QDcr',
                contentBlock_withMarginTop: 'CollectionArtistsPage_contentBlock_withMarginTop__e4_VX',
                gridLayout: 'CollectionArtistsPage_gridLayout__00brJ',
                subTitle: 'CollectionArtistsPage_subTitle__My70z',
            };
        },
        10749: (t, e, i) => {
            'use strict';
            i.d(e, { t: () => h });
            var s = i(25839),
                r = i(82298),
                o = i(88204),
                l = i(74631),
                a = i(39004),
                n = i(61493),
                c = i(56629),
                d = i(66738),
                u = i(4254),
                _ = i(96569),
                m = i.n(_);
            let h = (0, o.PA)((t) => {
                let {
                        progress: e,
                        withIcon: i,
                        withCrownIcon: o,
                        position: _,
                        weight: h = 'normal',
                        isDisliked: p,
                        isDisabled: x,
                        className: v,
                        positionClassName: C,
                    } = t,
                    { formatMessage: A } = (0, a.A)(),
                    g = e || i,
                    T = (0, l.useMemo)(() => {
                        if (o) return 'crown';
                        switch (e) {
                            case c._.UP:
                                return 'chartUp';
                            case c._.DOWN:
                                return 'chartDown';
                            case c._.NEW:
                                return 'chartNew';
                            default:
                                return 'chartSame';
                        }
                    }, [e, o]),
                    N = (0, l.useMemo)(() => {
                        switch (e) {
                            case c._.UP:
                                return A({ id: 'entity-names.chart-up' });
                            case c._.DOWN:
                                return A({ id: 'entity-names.chart-down' });
                            case c._.NEW:
                                return A({ id: 'entity-names.chart-new' });
                            default:
                                return A({ id: 'entity-names.chart-same' });
                        }
                    }, [A, e]),
                    E = o ? 'crown' : e;
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(m().root, v),
                    'data-test-id': n.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, s.jsx)(u.HL, {
                            variant: 'div',
                            weight: h,
                            type: 'entity',
                            size: 'm',
                            className: (0, r.$)(m().position, C, { [m().position_disliked]: p, [m().position_disabled]: x }),
                            'data-test-id': n.OA.chart.CHART_PROGRESS_POSITION,
                            children: _,
                        }),
                        g &&
                            (0, s.jsx)(d.I, {
                                variant: T,
                                size: 'xxs',
                                'aria-label': N,
                                className: (0, r.$)(m().progress, m()['progress_'.concat(E)], { [m().progress_disliked]: p, [m().progress_disabled]: x }),
                                'data-test-id': n.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        10959: (t, e, i) => {
            'use strict';
            i.d(e, { v: () => r });
            var s = i(44806);
            let r = (t) => {
                let { checkExperiment: e, getDisclaimerContent: i, getExplicitContent: r, userRegion: o } = t;
                return 'ru' === o && e(s.z.WebNextFooterDisclaimer, 'on') ? i() : r();
            };
        },
        12558: (t) => {
            t.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
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
            i.d(e, { H: () => m });
            var s = i(25839),
                r = i(84059),
                o = i(8487),
                l = i(61493),
                a = i(71035),
                n = i(4071),
                c = i(4254),
                d = i(57024),
                u = i(36484),
                _ = i(62562);
            let m = (t) => {
                let { size: e = 'm', variant: i = 'default', color: m = 'primary', withRipple: h = !0, buttonText: p, isBlock: x, key: v, className: C } = t,
                    A = (0, r.useRouter)(),
                    g = (0, _.N)().get(u.QG),
                    T = (0, a.c)(() => {
                        g.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), A.push(g.authorizationUrl));
                    });
                return (0, s.jsx)(
                    n.$,
                    {
                        onClick: T,
                        className: C,
                        isBlock: x,
                        color: m,
                        variant: i,
                        size: e,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': l.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        18051: (t, e, i) => {
            'use strict';
            i.d(e, { U: () => s });
            let s = (t, e) => {
                let i = t / 60;
                return i <= 45 ? e({ id: 'time.minutes-left' }, { minutes: Math.round(i) }) : e({ id: 'time.hours' }, { hours: Math.round((i / 60) * 2) / 2 });
            };
        },
        19412: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => c });
            var s = i(25839),
                r = i(82298),
                o = i(61493),
                l = i(23976),
                a = i(40828),
                n = i.n(a);
            let c = (t) => {
                let {
                    isActive: e,
                    className: i,
                    shimmerClassName: a,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: _ = !0,
                    linesCount: m = 3,
                    withSubcover: h,
                    radius: p = 'l',
                } = t;
                return (0, s.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': e ? 'polite' : 'off',
                    'aria-busy': e,
                    className: (0, r.$)(n().root, i),
                    'data-test-id': o.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        h && (0, s.jsx)(l.W, { isActive: e, className: n().subcover, radius: 'l' }),
                        (0, s.jsx)(l.W, { isActive: e, className: (0, r.$)(n().cover, a, { [n().cover_round]: c, [n().cover_withSubcover]: h }), radius: p }),
                        _ &&
                            (0, s.jsx)('div', {
                                className: (0, r.$)(n().infoContainer, n()['content_linesCount_'.concat(m)], { [n().infoContainer_centered]: u }),
                                children: (0, s.jsx)(l.W, { isActive: e, className: (0, r.$)(n().title, { [n().title_withSubcover]: h }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        21971: (t, e, i) => {
            'use strict';
            i.d(e, { g: () => Z });
            var s = i(25839),
                r = i(88204),
                o = i(39004),
                l = i(36619),
                a = i(61493),
                n = i(22939),
                c = i(71035),
                d = i(66738),
                u = i(10820),
                _ = i(33660),
                m = i(74631),
                h = i(31860),
                p = i(91149),
                x = i(92942),
                v = i(27954),
                C = i(57549),
                A = i(86869),
                g = i(69084),
                T = i(4254),
                N = i(51790),
                E = i(6323),
                f = i(24596),
                y = i.n(f);
            let k = (t) => {
                let { coverUri: e, title: i, isDisliked: r, closeToast: l } = t,
                    { formatMessage: a } = (0, o.A)(),
                    n = a(r ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, s.jsx)(N.$, {
                    closeToast: l,
                    message: (0, s.jsxs)('div', {
                        className: y().message,
                        children: [
                            (0, s.jsx)(g.q, { children: (0, s.jsx)('p', { role: 'alert', 'aria-label': n }) }),
                            (0, s.jsx)(A.t, {
                                className: y().cover,
                                radius: 'round',
                                children: (0, s.jsx)(E.B, { className: y().image, src: e, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, s.jsx)(T.HL, { className: y().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: n }),
                        ],
                    }),
                });
            };
            var j = i(7361),
                b = i(90613),
                R = i(3210),
                O = i(11609),
                S = i(79367),
                I = i(40110),
                P = i(20258),
                L = i(34159),
                w = i(30290),
                D = i(29872),
                M = i(56120),
                z = i(87201),
                H = i(83014),
                B = i(44806),
                U = i(55491),
                F = i(44851),
                X = i(14240),
                Y = i(56615),
                K = i(16386),
                V = i(67303),
                $ = i(74682),
                G = i(59043),
                W = i(2144),
                q = i(6304);
            let Z = (0, r.PA)((t) => {
                var e, i, r;
                let { artist: A, onOpenChange: g, open: T, ...N } = t,
                    { shouldShowBuySubscriptionModal: E, showBuySubscriptionModal: f } = (0, D.q)(),
                    {
                        settings: { isMobile: y },
                        modals: { artistAboutModal: Z },
                        trailer: Q,
                        user: J,
                        experiments: tt,
                    } = (0, v.g)(),
                    te = (0, b.A)(A),
                    ti = (0, j.K)(A),
                    ts = ((t) => {
                        let { user: e } = (0, v.g)(),
                            { notify: i } = (0, x.l)(),
                            [r, l] = (0, m.useState)(!1),
                            { formatMessage: a } = (0, o.A)();
                        return (0, c.c)(async () => {
                            if (!t) return;
                            if (!e.isAuthorized)
                                return void i((0, s.jsx)(C.h, { error: a({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: p.u.ERROR });
                            if (r) return;
                            let o = { ...(0, _.HO)(t), isDisliked: !t.isDisliked };
                            l(!0);
                            let n = await t.toggleDislike();
                            (l(!1),
                                n === h.f.OK
                                    ? i((0, s.jsx)(k, { coverUri: o.coverUri, title: o.name, isDisliked: o.isDisliked }), { containerId: p.u.INFO })
                                    : i((0, s.jsx)(C.h, { error: a({ id: 'error-messages.error-during-action' }) }), { containerId: p.u.ERROR }));
                        });
                    })(A),
                    tr = (0, L.F)(),
                    to = ''.concat(I.U.ARTIST, '-').concat(null == A ? void 0 : A.id),
                    { formatMessage: tl } = (0, o.A)(),
                    { utmLink: ta } = (0, w.f)({ blockId: I.U.ARTIST, contextType: n.K.Artist, contextId: null == A ? void 0 : A.id }),
                    { shareLink: tn, pathname: tc } = (0, X.b)('/artist/:artistId', { params: { artistId: null != (i = null == A ? void 0 : A.id) ? i : '' } }),
                    td = (0, R.A)({ entityVariant: H.D.ARTIST, urlParams: { id: null == A ? void 0 : A.id } }),
                    { isPlaying: tu, togglePlay: t_ } = (0, z.B)({
                        seeds: null != (r = null == A ? void 0 : A.seeds) ? r : [],
                        pageIdForFrom: P._Q.RADIO,
                        blockIdForFrom: to,
                        parentContextId: null == A ? void 0 : A.id,
                    }),
                    tm = (0, S.P)(),
                    th = tl((null == A ? void 0 : A.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    tp = (0, c.c)(() => {
                        if (E && J.isAuthorized) return void f();
                        tu || t_();
                    }),
                    tx = (0, c.c)(() => {
                        if (!tm()) {
                            if (E) return void f();
                            (null == A ? void 0 : A.id) && (Q.setUtmLink(ta), Q.openArtistTrailer(A.id), tr(l.DomainObjectType.Artist, A.id));
                        }
                    }),
                    tv = (0, c.c)(() => {
                        Z.open(null == A ? void 0 : A.id);
                    });
                (0, M.N)(T);
                let tC = { variant: U.Y.ARTIST, id: null == A ? void 0 : A.id, title: null == A ? void 0 : A.name, path: tc },
                    tA = tt.checkExperiment(B.z.WebEditorsFeatures, 'on'),
                    tg = null == A || null == (e = A.trailer) ? void 0 : e.isAvailable,
                    tT = tt.checkExperiment(B.z.WebNextArtistInfo, 'on');
                return (0, s.jsxs)(u.W1, {
                    isMobile: y,
                    offsetOptions: 10,
                    open: T,
                    onOpenChange: g,
                    ariaLabel: tl({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: a.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...N,
                    children: [
                        tA && (0, s.jsx)(q.WithOffline, { fallback: (0, s.jsx)(O.d, { entityVariant: H.D.ARTIST, adminUrl: td }) }),
                        !y && (0, s.jsx)(q.WithOffline, { fallback: (0, s.jsx)(V.L, { onClick: te, isPinned: null == A ? void 0 : A.isPinned }) }),
                        (0, s.jsx)(q.WithOffline, {
                            fallback: (0, s.jsx)(K.T, {
                                onClick: ti,
                                isLiked: null == A ? void 0 : A.isLiked,
                                disabled: !J.isAuthorized || !(null == A ? void 0 : A.isAvailable),
                            }),
                        }),
                        tg && (0, s.jsx)(q.WithOffline, { fallback: (0, s.jsx)(G.N, { onClick: tx }) }),
                        (0, s.jsx)(q.WithOffline, {
                            fallback: (0, s.jsx)(W.C, { onClick: tp, disabled: !(null == A ? void 0 : A.isAvailable), variant: F.I.ARTIST, onOpenMenuChange: g }),
                        }),
                        (0, s.jsx)($.H, { disabled: !A, shareLink: tn, entityMeta: tC }),
                        tT &&
                            (0, s.jsx)(q.WithOffline, {
                                fallback: (0, s.jsx)(u.Dr, {
                                    onClick: tv,
                                    icon: (0, s.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': a.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: th,
                                }),
                            }),
                        (0, s.jsx)(q.WithOffline, {
                            fallback: (0, s.jsx)(Y.D, { onClick: ts, isDisliked: null == A ? void 0 : A.isDisliked, disabled: !(null == A ? void 0 : A.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        24596: (t) => {
            t.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        26076: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => l });
            var s = i(25839);
            i(93588);
            var r = i(400),
                o = i.n(r);
            let l = (t) => {
                let { children: e } = t;
                return (0, s.jsx)('footer', { className: o().empty });
            };
        },
        27954: (t, e, i) => {
            'use strict';
            i.d(e, { P: () => o, g: () => l });
            var s = i(74631),
                r = i(36432);
            let o = (0, s.createContext)(null);
            function l() {
                let t = (0, s.useContext)(o);
                if (null === t) throw new r.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return t;
            }
        },
        30871: (t, e, i) => {
            'use strict';
            i.d(e, { WithAuth: () => p });
            var s = i(25839),
                r = i(88204),
                o = i(84059),
                l = i(82298),
                a = i(8487),
                n = i(4254),
                c = i(16978),
                d = i(148),
                u = i.n(d);
            let _ = (0, r.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(n.DZ, {
                            className: (0, l.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(a.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(n.HL, {
                            className: (0, l.$)(u().text, u().important),
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
            var m = i(53712),
                h = i(27954);
            let p = (0, r.PA)((t) => {
                let { children: e, withRedirectToMainPage: i } = t,
                    { user: r } = (0, h.g)();
                return r.isAuthorized ? e : (i && (0, o.redirect)(m.Z.main.href), (0, s.jsx)(_, {}));
            });
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
        43354: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => r, P: () => o });
            var s = i(74631);
            let r = (0, s.createContext)(null),
                o = () => (0, s.useContext)(r);
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
        53712: (t, e, i) => {
            'use strict';
            i.d(e, { Z: () => r });
            var s = i(25895);
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
        56615: (t, e, i) => {
            'use strict';
            i.d(e, { D: () => d });
            var s = i(25839),
                r = i(88204),
                o = i(8487),
                l = i(61493),
                a = i(66738),
                n = i(10820),
                c = i(27954);
            let d = (0, r.PA)((t) => {
                let { isDisliked: e, onClick: i, disabled: r, className: d } = t,
                    { user: u } = (0, c.g)();
                return (0, s.jsx)(n.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, s.jsx)(a.I, { variant: e ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': e,
                    disabled: r || !u.isAuthorized,
                    'data-test-id': l.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, s.jsx)(o.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        56629: (t, e, i) => {
            'use strict';
            var s;
            (i.d(e, { _: () => s }),
                (function (t) {
                    ((t.UP = 'up'), (t.DOWN = 'down'), (t.SAME = 'same'), (t.NEW = 'new'));
                })(s || (s = {})));
        },
        57024: (t, e, i) => {
            'use strict';
            i.d(e, { C8: () => o, UC: () => l, dM: () => a, uV: () => n });
            var s = i(93690),
                r = i(58848);
            let o = (t) => {
                    if (void 0 === t || '' === t) return 'missing';
                    let e = Number(t);
                    return !Number.isFinite(e) || e < 0 ? 'invalid' : e < 86400 ? 'lt-1d' : e <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                l = (t) => (t.uid ? 'authorized' : 'no-uid'),
                a = (t) => {
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
        57138: (t, e, i) => {
            'use strict';
            i.d(e, { F: () => l });
            var s = i(25839),
                r = i(74631),
                o = i(14482);
            let l = (t) => {
                let {
                        blockId: e,
                        blockType: i,
                        blockIdForFrom: l,
                        blockPosX: a,
                        blockPosY: n,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: m,
                    } = t,
                    h = (0, r.useMemo)(
                        () => ({
                            blockId: e,
                            blockType: i,
                            blockIdForFrom: l,
                            blockPosX: a,
                            blockPosY: n,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: m,
                        }),
                        [e, i, l, a, n, c, d, u, m],
                    );
                return (0, s.jsx)(o.p.Provider, { value: h, children: _ });
            };
        },
        58848: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => s });
            let s = (t) => 'object' == typeof t && null !== t && 'request' in t && null !== t.request;
        },
        60678: (t, e, i) => {
            'use strict';
            i.d(e, { X: () => d });
            var s = i(25839),
                r = i(74631),
                o = i(71035),
                l = i(1466),
                a = i(91149),
                n = i(92942),
                c = i(36159);
            let d = (t, e) => {
                let { notify: i, dismiss: d } = (0, n.l)(),
                    u = (0, r.useRef)(void 0),
                    _ = (0, o.c)(() => {
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
                    t.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(l.L, { reloadBlocks: _ }), { containerId: a.u.ERROR, autoClose: !1 }));
                }, [d, _, i, t.rejectedPagesCount]);
            };
        },
        61561: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => o });
            var s = i(27954),
                r = i(44806);
            let o = () => {
                var t, e;
                let {
                    user: i,
                    settings: { browserInfo: o },
                    experiments: l,
                } = (0, s.g)();
                return (
                    !(null == o ? void 0 : o.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (e = l.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (t = e.value) ? void 0 : t.closeListening) === 'on'
                );
            };
        },
        63149: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => a });
            var s = i(25839),
                r = i(53712),
                o = i(35015),
                l = i(3163);
            let a = (t) => {
                let { artist: e, closeToast: i } = t;
                return (0, s.jsx)(l.O, {
                    closeToast: i,
                    entityVariant: o.c.ARTIST,
                    entityUrl: e.url,
                    collectionUrl: r.Z.collectionArtists.href,
                    coverUri: e.coverUri,
                    entityTitle: e.name,
                    isLiked: e.isLiked,
                });
            };
        },
        68062: (t) => {
            t.exports = {
                root: 'CollectionArtistsPageEmpty_root__D39tF',
                emptyContent: 'CollectionArtistsPageEmpty_emptyContent__oJc6T',
                emptyContentIcon: 'CollectionArtistsPageEmpty_emptyContentIcon__uZQwm',
                emptyContentTitle: 'CollectionArtistsPageEmpty_emptyContentTitle__Vqy_Q',
                footer: 'CollectionArtistsPageEmpty_footer__O_8aS',
            };
        },
        71996: (t, e, i) => {
            'use strict';
            i.d(e, { k: () => u });
            var s = i(25839),
                r = i(74631),
                o = i(39004),
                l = i(61493),
                a = i(4071),
                n = i(66738),
                c = i(49984);
            let d = (t) => {
                    let {
                            variant: e,
                            withRipple: i,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: h,
                            className: p,
                            forwardRef: x,
                            style: v,
                            children: C,
                        } = t,
                        { formatMessage: A } = (0, o.A)(),
                        g = A({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(a.$, {
                        className: p,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: e,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': g,
                        onClick: m,
                        ref: x,
                        icon: (0, s.jsx)(n.I, { variant: 'trailer', size: u, className: h }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': l.S7.TRAILER_BUTTON,
                        children: C,
                    });
                },
                u = (0, r.forwardRef)((t, e) => (0, s.jsx)(d, { forwardRef: e, ...t }));
        },
        73668: (t) => {
            t.exports = {
                subTitle: 'CollectionArtistsPageTopArtists_subTitle__xJdoJ',
                gridLayout: 'CollectionArtistsPageTopArtists_gridLayout__H2AR_',
                chart: 'CollectionArtistsPageTopArtists_chart__inbPE',
                position: 'CollectionArtistsPageTopArtists_position__YDoRC',
                listenTime: 'CollectionArtistsPageTopArtists_listenTime__NqxRf',
            };
        },
        76481: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => r });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(t, e = {}) {
                    let { code: i = 'E_INTERNAL', data: r = {}, ...o } = e,
                        l = t || 'Internal error';
                    (super(l, o), (this.message = l), (this.code = i), (this.data = r), (this.stack = Error(l).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class r extends s {
                name = 'HttpException';
                constructor(t = 'Http Client error', { code: e = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(t, { code: e, ...i }), Object.setPrototypeOf(this, r.prototype));
                }
            }
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
            i.d(e, { n: () => l });
            var s = i(25839),
                r = i(39004),
                o = i(3392);
            let l = (t) => {
                let { children: e } = t,
                    { formatMessage: i } = (0, r.A)();
                return (0, s.jsx)(o.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: e,
                });
            };
        },
        80477: (t, e, i) => {
            'use strict';
            i.d(e, { l: () => l });
            var s = i(25839),
                r = i(35015),
                o = i(10546);
            let l = (t) => {
                let { artist: e, closeToast: i } = t;
                return (0, s.jsx)(o.k, {
                    closeToast: i,
                    entityVariant: r.c.ARTIST,
                    coverUri: e.coverUri,
                    entityUrl: e.url,
                    entityTitle: e.name,
                    isPinned: e.isPinned,
                    radius: 'round',
                });
            };
        },
        84e3: (t, e, i) => {
            'use strict';
            i.d(e, { U: () => o });
            var s = i(36484),
                r = i(62562);
            let o = () => (0, r.N)().get(s.Zf);
        },
        84058: (t, e, i) => {
            'use strict';
            i.d(e, { a: () => U });
            var s = i(25839),
                r = i(82298),
                o = i(88204),
                l = i(74631),
                a = i(39004),
                n = i(36619),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                _ = i(49656),
                m = i(51246),
                h = i(66738),
                p = i(86869),
                x = i(4254),
                v = i(1797),
                C = i(7361),
                A = i(90613),
                g = i(79367),
                T = i(29481),
                N = i(47009),
                E = i(34159),
                f = i(52512),
                y = i(30290),
                k = i(61561),
                j = i(85686),
                b = i(85743),
                R = i(50209),
                O = i(27954),
                S = i(6323),
                I = i(64720),
                P = i(97522),
                L = i(41580),
                w = i(49438),
                D = i(71996),
                M = i(78437),
                z = i(21971),
                H = i(13936),
                B = i.n(H);
            let U = (0, o.PA)((t) => {
                let { artist: e, className: i, children: o, contentLinesCount: H, topTitleElement: U, bottomTitleElement: F } = t,
                    { ref: X, intersectionPropertyId: Y } = (0, f.n)(),
                    {
                        trailer: K,
                        user: V,
                        paywall: { modal: $ },
                    } = (0, O.g)(),
                    { from: G, utmLink: W } = (0, y.f)({ contextId: e.id, contextType: d.K.Artist }),
                    { formatMessage: q } = (0, a.A)(),
                    [Z, Q] = (0, l.useState)(!1),
                    [J, tt] = (0, l.useState)(!1),
                    [te, ti] = (0, l.useState)(!1),
                    { sendLikeSearchFeedback: ts, sendNavigateSearchFeedback: tr, sendPlaySearchFeedback: to } = (0, b.z)(),
                    tl = (0, T.N)(),
                    ta = (0, N.b)(),
                    tn = (0, C.K)(e),
                    tc = (0, A.A)(e),
                    { id: td, name: tu, coverUri: t_, isLiked: tm } = e,
                    th = (0, j.Z)(e.url),
                    [tp, tx] = (0, l.useState)(!1),
                    tv = (0, E.F)(),
                    tC = (0, g.P)(),
                    tA = (0, u.c)((t) => {
                        if ((t.stopPropagation(), tC())) return void t.preventDefault();
                        (K.openArtistTrailer(e.id), tv(n.DomainObjectType.Artist, e.id));
                    }),
                    tg = (0, l.useMemo)(() => {
                        let t = q({ id: 'entity-names.artist-name' }, { artistName: tu }),
                            e = tm ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(t, ' ').concat(e);
                    }, [tu, tm, q]),
                    { isPlaying: tT, togglePlay: tN } = (0, R.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(td) }, from: G, utmLink: W }, loadContextMeta: !0 },
                    }),
                    tE = (0, v.S)({ artist: e, callback: th }),
                    tf = (0, v.S)({ artist: e, callback: tN }),
                    ty = (0, u.c)((t) => {
                        (null == tr || tr(), tl({ to: n.AppScreen.ArtistScreen }), tE(t));
                    }),
                    tk = (0, k.N)(),
                    tj = (0, u.c)(() => {
                        if (!tC()) {
                            if (tk) return void $.open();
                            (Z || tT || (Q(!0), null == to || to()), tf(), ta(!tT));
                        }
                    }),
                    tb = (0, u.c)(() => {
                        (J || tm || (tt(!0), null == ts || ts()), tn());
                    }),
                    tR = (0, u.c)((t) => {
                        (t.preventDefault(), t.stopPropagation());
                    }),
                    tO = (0, u.c)((t) => {
                        (ti(t), tx(t));
                    }),
                    tS = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(
                                z.g,
                                {
                                    artist: e,
                                    onOpenChange: tO,
                                    open: te,
                                    onClick: tR,
                                    className: (0, r.$)(B().menuButton, B().control),
                                    size: 's',
                                    icon: (0, s.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                e.getKey('ArtistContextMenu'),
                            ),
                        [e, tR, tO, te],
                    ),
                    tI = (0, l.useMemo)(() => {
                        var t;
                        if (null == e || null == (t = e.trailer) ? void 0 : t.isAvailable)
                            return (0, s.jsx)(
                                M.n,
                                {
                                    children: (0, s.jsx)(D.k, {
                                        className: (0, r.$)(B().trailerButton, B().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: tA,
                                    }),
                                },
                                e.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [e, tA]),
                    tP = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(
                                L.O,
                                { onClick: tc, isPinned: e.isPinned, className: (0, r.$)(B().pinButton, B().control), withRipple: !1 },
                                e.getKey('PinButton'),
                            ),
                        [e, tc],
                    ),
                    tL = (0, _.L)(() => {
                        if (e.isAvailable)
                            return (0, s.jsx)(
                                m.hg,
                                {
                                    isVisible: te || tp,
                                    className: B().controls,
                                    radius: 'round',
                                    playControl: (0, s.jsx)(
                                        w.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, r.$)(B().playButton, B().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: tj,
                                            isPlaying: tT,
                                            disabled: !e.isAvailableForPlaying,
                                        },
                                        e.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, s.jsx)(
                                        I.c,
                                        {
                                            className: (0, r.$)(B().likeButton, B().control),
                                            isLiked: tm,
                                            onClick: tb,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !V.isAuthorized,
                                        },
                                        e.getKey('LikeButton'),
                                    ),
                                    menuControl: tS,
                                    pinControl: tP,
                                    trailerControl: tI,
                                },
                                e.getKey('ArtistCardControls'),
                            );
                    }),
                    tw = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(p.t, {
                                className: B().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: B().coverBlock,
                                    onClick: ty,
                                    children: [
                                        (0, s.jsx)(S.B, {
                                            className: B().image,
                                            src: t_,
                                            size: 200,
                                            fit: 'cover',
                                            alt: tg,
                                            withAvatarReplace: !0,
                                            isAvailable: e.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        tL,
                                    ],
                                }),
                            }),
                        [ty, t_, tg, e.isAvailable, tL],
                    );
                return (0, s.jsx)(m.MN, {
                    ref: X,
                    className: (0, r.$)(B().root, i),
                    textPosition: 'center',
                    'aria-label': tg,
                    title: (0, s.jsxs)(s.Fragment, {
                        children: [
                            U,
                            (0, s.jsx)(x.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, s.jsx)(P.N, {
                                    className: B().titleLink,
                                    href: e.url,
                                    tabIndex: -1,
                                    'aria-label': tg,
                                    onClick: ty,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: tu,
                                }),
                            }),
                            F,
                        ],
                    }),
                    srTitle: (0, s.jsx)(P.N, { className: B().srTitleLink, href: e.url, onClick: ty, children: tg }),
                    'data-intersection-property-id': Y,
                    contentLinesCount: H,
                    view: tw,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: o,
                });
            });
        },
        89514: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
        90069: (t, e, i) => {
            'use strict';
            i.d(e, { CollectionArtistsPage: () => U });
            var s = i(25839),
                r = i(82298),
                o = i(88204),
                l = i(74631),
                a = i(39004),
                n = i(8487),
                c = i(36619),
                d = i(61493),
                u = i(4254),
                _ = i(84058),
                m = i(1407),
                h = i(20258),
                p = i(57138),
                x = i(95858),
                v = i(95314),
                C = i(10322),
                A = i(21784),
                g = i(89192),
                T = i(30716),
                N = i(27954),
                E = i(60678),
                f = i(99401),
                y = i(26076),
                k = i(10603),
                j = i(19412),
                b = i(6968),
                R = i(9080),
                O = i.n(R),
                S = i(66738),
                I = i(68062),
                P = i.n(I);
            let L = (t) => {
                let { className: e } = t;
                return (0, s.jsxs)('div', {
                    className: P().root,
                    children: [
                        (0, s.jsxs)('div', {
                            className: (0, r.$)(P().emptyContent, e),
                            children: [
                                (0, s.jsx)(S.I, { className: P().emptyContentIcon, size: 'l', variant: 'album' }),
                                (0, s.jsx)(u.DZ, {
                                    className: P().emptyContentTitle,
                                    variant: 'h3',
                                    size: 'xs',
                                    children: (0, s.jsx)(n.A, { id: 'error-messages.empty-collection-artists-title' }),
                                }),
                            ],
                        }),
                        (0, s.jsx)(y.A, { children: (0, s.jsx)(f.w, { className: P().footer }) }),
                    ],
                });
            };
            var w = i(18051),
                D = i(10749),
                M = i(95772),
                z = i(73668),
                H = i.n(z);
            let B = (0, o.PA)(() => {
                    let { collection: t } = (0, N.g)(),
                        { formatMessage: e } = (0, a.A)(),
                        i = e({ id: 'loading-messages.entity-is-loading' }, { entityName: e({ id: 'entity-names.artist' }) }),
                        r = (0, l.useMemo)(
                            () =>
                                t.artists.topArtists.isResolved
                                    ? t.artists.topArtists.items.map((i, r) => {
                                          var o;
                                          let l = i.listenTimeSeconds ? (0, w.U)(i.listenTimeSeconds, e) : null;
                                          return (0, s.jsx)(
                                              v.B,
                                              {
                                                  objectType: c.DomainObjectType.Artist,
                                                  objectId: i.artist.id,
                                                  objectPosX: r + 1,
                                                  objectPosY: 1,
                                                  objectsCount: t.artists.topArtists.items.length,
                                                  children: (0, s.jsx)(
                                                      _.a,
                                                      {
                                                          topTitleElement:
                                                              i.top &&
                                                              (0, s.jsx)(
                                                                  D.t,
                                                                  {
                                                                      className: H().chart,
                                                                      position: i.top.position,
                                                                      progress: i.top.progress,
                                                                      weight: 'bold',
                                                                      positionClassName: H().position,
                                                                      withIcon: 0 === r,
                                                                      withCrownIcon: 0 === r,
                                                                  },
                                                                  i.getKey('ArtistTop'),
                                                              ),
                                                          bottomTitleElement: l
                                                              ? (0, s.jsx)(u.HL, {
                                                                    className: H().listenTime,
                                                                    variant: 'div',
                                                                    type: 'entity',
                                                                    size: 's',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    'data-test-id': d.Xk.collection.COLLECTION_TOP_ARTISTS_LISTEN_TIME,
                                                                    children: l,
                                                                })
                                                              : void 0,
                                                          artist: i.artist,
                                                          contentLinesCount: 4,
                                                      },
                                                      null == (o = i.artist) ? void 0 : o.id,
                                                  ),
                                              },
                                              i.artist.id,
                                          );
                                      })
                                    : (0, s.jsx)(M.e, { linesCount: 4, count: 3, isActive: !0, 'aria-label': i, round: !0, centered: !0 }),
                            [e, i, t.artists.topArtists.isResolved, t.artists.topArtists.items],
                        );
                    return (0, s.jsxs)(p.F, {
                        blockId: 'collection_artists_top',
                        blockType: 'ARTISTS_TOP',
                        blockPosX: 1,
                        blockPosY: 1,
                        blockIdForFrom: 'collection_artists_top',
                        objectsCount: t.artists.topArtists.items.length,
                        children: [
                            (0, s.jsx)(u.DZ, {
                                size: 's',
                                weight: 'bold',
                                variant: 'h2',
                                className: H().subTitle,
                                'data-test-id': d.Xk.collection.COLLECTION_TOP_ARTISTS_HEADING,
                                children: (0, s.jsx)(n.A, { id: 'entity-names.top-artists' }),
                            }),
                            (0, s.jsx)('div', { className: H().gridLayout, 'data-test-id': d.Xk.collection.COLLECTION_TOP_ARTISTS_GRID, children: r }),
                        ],
                    });
                }),
                U = (0, o.PA)(() => {
                    let {
                            user: t,
                            collection: e,
                            settings: { isMobile: i },
                            library: o,
                        } = (0, N.g)(),
                        { formatMessage: R } = (0, a.A)(),
                        { contentScrollRef: S, setContentScrollRef: I } = (0, g.g)(),
                        P = (0, A.W)();
                    ((0, T.J)(e.artists.isResolved),
                        (0, l.useEffect)(
                            () => () => {
                                e.artists.reset();
                            },
                            [e.artists],
                        ));
                    let w = (0, l.useCallback)(
                        (i) => {
                            t.account.data.uid && e.artists.getData({ userId: t.account.data.uid, page: i, pageSize: 20 });
                        },
                        [e.artists, t.account.data.uid],
                    );
                    (0, E.X)(e.artists.pagesLoader, w);
                    let D = R({ id: 'loading-messages.entity-is-loading' }, { entityName: R({ id: 'entity-names.artist' }) }),
                        M = (0, l.useCallback)(
                            (t) => {
                                var i;
                                let r = null == (i = e.artists.items) ? void 0 : i[t];
                                return r
                                    ? (0, s.jsx)(p.F, {
                                          blockId: 'collection_artist',
                                          blockType: 'ARTIST',
                                          blockPosX: t + 1,
                                          blockPosY: 1,
                                          blockIdForFrom: r.id,
                                          objectsCount: e.artists.items.length,
                                          children: (0, s.jsx)(v.B, {
                                              objectType: c.DomainObjectType.Artist,
                                              objectId: r.id,
                                              objectPosX: 1,
                                              objectPosY: 1,
                                              objectsCount: e.artists.items.length,
                                              children: (0, s.jsx)(_.a, { artist: r, contentLinesCount: 3 }, r.id),
                                          }),
                                      })
                                    : (0, s.jsx)(j.V, { isActive: !0, 'aria-label': D, round: !0, centered: !0 });
                            },
                            [e.artists.items, D],
                        ),
                        z = e.artists.topArtists.items.length || !e.artists.topArtists.isResolved,
                        H = (0, l.useMemo)(
                            () =>
                                z
                                    ? () =>
                                          (0, s.jsxs)('div', {
                                              className: (0, r.$)(O().contentBlock, O().contentBlock_withMarginTop),
                                              children: [
                                                  (0, s.jsx)(B, {}),
                                                  (e.artists.items.length > 0 || !e.artists.isResolved) &&
                                                      (0, s.jsx)(u.DZ, {
                                                          size: 's',
                                                          weight: 'bold',
                                                          variant: 'h2',
                                                          className: O().subTitle,
                                                          children: (0, s.jsx)(n.A, { id: 'entity-names.liked-artist' }),
                                                      }),
                                              ],
                                          })
                                    : null,
                            [z, e.artists.items.length, e.artists.isResolved],
                        ),
                        U = (0, l.useMemo)(() => ({ Header: H, Footer: () => (0, s.jsx)(y.A, { children: (0, s.jsx)(f.w, { className: O().footer }) }) }), [H]),
                        F = e.artists.isShimmerVisible ? 10 : e.artists.items.length,
                        X = (0, l.useMemo)(
                            () =>
                                0 === e.artists.items.length && 0 === e.artists.topArtists.items.length && e.artists.isResolved
                                    ? (0, s.jsx)(L, {})
                                    : (0, s.jsx)(b.$, {
                                          className: (0, r.$)(O().scrollContainer, O().important),
                                          customComponents: U,
                                          itemContentCallback: M,
                                          initialItemCount: F,
                                          totalCount: F,
                                          onGetDataByPage: w,
                                          pageSize: 20,
                                          totalRequests: e.artists.requestsCount,
                                          listClassName: (0, r.$)(O().contentBlock, O().gridLayout, { [O().contentBlock_withMarginTop]: !z }),
                                          itemClassName: O().item,
                                          handleRef: I,
                                          context: { listAriaLabel: R({ id: 'collection.liked-artists-list' }) },
                                          isMobileLayout: i,
                                          useWindowScroll: i,
                                      }),
                            [e.artists.items.length, e.artists.topArtists.items.length, e.artists.isResolved, e.artists.requestsCount, U, R, w, i, M, F, I, z],
                        );
                    if (t.account.data.uid && e.artists.isNeededToLoad) {
                        let i = [e.artists.getData({ userId: t.account.data.uid }), e.artists.getDataTopArtists(), o.getData()];
                        (0, l.use)(Promise.allSettled(i));
                    }
                    return (0, s.jsx)(C.n, {
                        pageId: h._Q.OWN_ARTISTS,
                        children: (0, s.jsx)(x.j, {
                            children: (0, s.jsx)(m.h, {
                                scrollElement: S,
                                outerTitle: R({ id: 'entity-names.artists' }),
                                children: (0, s.jsxs)('div', {
                                    className: O().root,
                                    'data-test-id': d.Xk.collection.COLLECTION_ARTISTS_PAGE,
                                    children: [
                                        (0, s.jsx)(k.Y, {
                                            variant: k.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: P.canBack,
                                            children: (0, s.jsx)(u.DZ, {
                                                id: 'collection-artists-header',
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, s.jsx)(n.A, { id: 'entity-names.artists' }),
                                            }),
                                        }),
                                        X,
                                    ],
                                }),
                            }),
                        }),
                    });
                });
        },
        90613: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => _ });
            var s = i(25839),
                r = i(33660),
                o = i(74631),
                l = i(39004),
                a = i(91149),
                n = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(80477);
            let _ = (t) => {
                let { user: e } = (0, c.g)(),
                    { notify: i } = (0, n.l)(),
                    { formatMessage: _ } = (0, l.A)(),
                    [m, h] = (0, o.useState)(!1);
                return (0, o.useCallback)(async () => {
                    if (!t) return;
                    if (!e.isAuthorized) return void i((0, s.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a.u.ERROR });
                    if (m) return;
                    let o = { ...(0, r.HO)(t), isPinned: !t.isPinned };
                    h(!0);
                    let l = await t.togglePin();
                    (h(!1),
                        l
                            ? i((0, s.jsx)(u.l, { artist: o }), { containerId: a.u.INFO })
                            : i((0, s.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: a.u.ERROR }));
                }, [t, e.isAuthorized, m, _, i]);
            };
        },
        91626: (t, e, i) => {
            'use strict';
            (i.d(e, { G: () => r }), i(77920));
            var s = i(76481);
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
        93690: (t, e, i) => {
            'use strict';
            i.d(e, { GX: () => o.G, X1: () => s.X, m5: () => r.m });
            var s = i(77920),
                r = i(76481),
                o = i(91626);
            i(95919);
        },
        95314: (t, e, i) => {
            'use strict';
            i.d(e, { B: () => l });
            var s = i(25839),
                r = i(74631),
                o = i(66192);
            let l = (t) => {
                let { objectId: e, objectPosX: i, objectPosY: l, objectPos: a, objectType: n, objectsCount: c, mainObjectId: d, mainObjectType: u, children: _ } = t,
                    m = (0, r.useMemo)(
                        () => ({ objectId: e, objectPosX: i, objectPosY: l, objectPos: a, objectType: n, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [e, i, l, a, n, c, d, u],
                    );
                return (0, s.jsx)(o.l.Provider, { value: m, children: _ });
            };
        },
        95772: (t, e, i) => {
            'use strict';
            i.d(e, { e: () => o });
            var s = i(25839),
                r = i(19412);
            let o = (t) => {
                let {
                    isActive: e,
                    itemClassName: i,
                    round: o,
                    centered: l,
                    withInfo: a,
                    count: n = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: _,
                } = t;
                return Array.from(Array(n).keys()).map((t) =>
                    (0, s.jsx)(
                        r.V,
                        { isActive: e, linesCount: d, className: i, round: o, centered: l, withInfo: a, withSubcover: _, 'aria-label': u, shimmerClassName: c },
                        t,
                    ),
                );
            };
        },
        95858: (t, e, i) => {
            'use strict';
            i.d(e, { j: () => n });
            var s = i(25839),
                r = i(74631),
                o = i(59342),
                l = i(91886),
                a = i(13232);
            let n = (t) => {
                let { children: e } = t,
                    i = (0, r.useRef)({}),
                    n = (0, r.useRef)(
                        (0, l.Gv)(
                            (t) => {
                                let e = (0, l.L5)(t.target),
                                    s = i.current[e];
                                if (s) {
                                    if (t.isIntersecting) {
                                        let t = window.setTimeout(() => {
                                            let t = String((0, o.A)());
                                            (s.callback(!0, t), (s.showed = !0), (s.viewUuid = t));
                                        }, 1e3);
                                        s.timerId = t;
                                    }
                                    (!t.isIntersecting && s.showed && (s.callback(!1, s.viewUuid), (s.showed = !1), (s.viewUuid = '')),
                                        t.isIntersecting || window.clearTimeout(s.timerId));
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, r.useCallback)((t) => {
                        var e;
                        !i.current[t.elementId] &&
                            t.elementRef.current &&
                            (null == (e = n.current) || e.observe(t.elementRef.current), (i.current[t.elementId] = { showed: !1, viewUuid: '', callback: t.callback }));
                    }, []),
                    d = (0, r.useCallback)((t) => {
                        let e = i.current[t];
                        e && (e.showed && e.callback(!1, e.viewUuid), delete i.current[t]);
                    }, []);
                (0, r.useEffect)(
                    () => () => {
                        var t;
                        return null == (t = n.current) ? void 0 : t.disconnect();
                    },
                    [],
                );
                let u = (0, r.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, s.jsx)(a.B.Provider, { value: u, children: e });
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
        96569: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'Chart_root__ODed_',
                position: 'Chart_position__7UNY9',
                position_disliked: 'Chart_position_disliked__HzjC7',
                position_disabled: 'Chart_position_disabled__poZzD',
                progress: 'Chart_progress__sGj4s',
                progress_up: 'Chart_progress_up__y083c',
                progress_same: 'Chart_progress_same__Cnbdb',
                progress_down: 'Chart_progress_down__lv_ae',
                progress_crown: 'Chart_progress_crown__o__Zm',
                progress_new: 'Chart_progress_new__7DobI',
                progress_disliked: 'Chart_progress_disliked__maVAk',
                progress_disabled: 'Chart_progress_disabled__JoFqG',
                positionShimmer: 'Chart_positionShimmer__6Abak',
            };
        },
        98310: (t, e, i) => {
            (Promise.resolve().then(i.bind(i, 30871)), Promise.resolve().then(i.bind(i, 90069)));
        },
        99401: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => y });
            var s = i(25839),
                r = i(82298),
                o = i(88204),
                l = i(39004),
                a = i(93588),
                n = i(43354),
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
            var _ = i(10959),
                m = i(89514);
            let h = (t) => t(new Date(), (0, m.m)());
            var p = i(96433),
                x = i(27954),
                v = i(400),
                C = i.n(v),
                A = i(61493),
                g = i(4254),
                T = i(97522);
            let N = (t) => {
                    let { className: e, data: i } = t;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(C().copyrights, e),
                        'data-test-id': A.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(g.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(T.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': A.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(g.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(T.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: C().copyrightLink,
                                'data-test-id': A.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                E = (t) => {
                    let { disclaimer: e, links: i } = t;
                    return (0, s.jsxs)('div', {
                        className: C().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: C().list,
                                'data-test-id': A.S7.FOOTER_LINKS_LIST,
                                children: i.map((t) => {
                                    let { id: e, title: i, url: r } = t;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: C().item,
                                            children: (0, s.jsx)(T.N, { target: '_blank', href: r, className: C().link, 'data-test-id': A.S7.FOOTER_LINK, children: i }),
                                        },
                                        e,
                                    );
                                }),
                            }),
                            (0, s.jsx)(g.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: C().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: e },
                                'data-test-id': A.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                f = (t) => {
                    let { className: e, data: i } = t;
                    return (0, s.jsxs)('footer', {
                        className: (0, r.$)(C().root, C().important, e),
                        'data-test-id': A.S7.FOOTER,
                        children: [(0, s.jsx)(E, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(N, { data: i.copyrights })],
                    });
                };
            (0, o.PA)((t) => {
                let { className: e } = t,
                    { location: i } = (0, x.g)(),
                    { formatDate: r, formatMessage: o } = (0, l.A)(),
                    { language: a } = (0, p.h)(),
                    n = u({ formatMessage: o, language: a, tld: i.tld, year: h(r) });
                return (0, s.jsx)(N, { className: e, data: n });
            });
            let y = (0, o.PA)((t) => {
                var e;
                let { className: i } = t,
                    { experiments: o, location: m, user: v } = (0, x.g)(),
                    { formatDate: A, formatMessage: g } = (0, l.A)(),
                    { isEnabled: T } = null != (e = (0, n.P)()) ? e : {},
                    { language: N } = (0, p.h)(),
                    E = ((t) => {
                        let { checkExperiment: e, formatMessage: i, isWebApplication: s, language: r, tld: o, userRegion: l, year: a } = t;
                        return {
                            links: ((t) => {
                                let { formatMessage: e, isWebApplication: i, tld: s, language: r, userRegion: o } = t,
                                    l = { id: c.COPYRIGHT_HOLDER, title: e({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, r) },
                                    a = { id: c.PRIVACY_POLICY, title: e({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, r) },
                                    n = { id: c.AGREEMENT, title: e({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: e({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, r) },
                                    _ = { id: c.HELP, title: e({ id: 'footer.links-help' }), url: d(c.HELP, s, r) },
                                    m = [l, n, u];
                                return (i && 'ru' === o && m.push(a), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: s, language: r, tld: o, userRegion: l }),
                            disclaimer: (0, _.v)({
                                checkExperiment: e,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: u({ formatMessage: i, language: r, tld: o, year: a }),
                        };
                    })({
                        checkExperiment: (t, e) => o.checkExperiment(t, e),
                        formatMessage: g,
                        isWebApplication: a.$3,
                        tld: m.tld,
                        language: N,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: h(A),
                    });
                return (0, s.jsx)(f, { className: (0, r.$)({ [C().root_withOffsetForDeeplink]: T }, i), data: E });
            });
        },
    },
    (t) => {
        (t.O(
            0,
            [
                1676, 3349, 7339, 6287, 3472, 2121, 1107, 7349, 9135, 6749, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 3269, 4163, 3246,
                3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 4475, 5056, 7358,
            ],
            () => t((t.s = 98310)),
        ),
            (_N_E = t.O()));
    },
]);
