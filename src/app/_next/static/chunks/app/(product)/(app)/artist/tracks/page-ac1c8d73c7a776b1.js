(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9689],
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
        1797: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var a = i(40207);
            let r = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: r } = e;
                return (0, a.l)({ entity: t, callback: i, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        2096: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => R });
            var a = i(25839),
                r = i(82298),
                s = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(44031),
                c = i(61493),
                d = i(71035),
                u = i(66738),
                m = i(3392),
                _ = i(4254),
                p = i(17545),
                h = i(4071);
            let g = (e) => {
                let { className: t, variant: i = 'text', onClick: r, iconClassName: s, iconSize: o, size: d = 's', ariaLabel: m } = e,
                    { formatMessage: _ } = (0, l.A)(),
                    p = null != m ? m : _({ id: 'play-queue.delete-from-queue' }),
                    g = (0, n.useCallback)(
                        (e) => {
                            (null == r || r(), e.stopPropagation());
                        },
                        [r],
                    );
                return (0, a.jsx)(h.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: d,
                    radius: 'round',
                    'aria-label': p,
                    onClick: g,
                    icon: (0, a.jsx)(u.I, { size: o, className: s, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var x = i(79367),
                v = i(34159),
                f = i(85743),
                k = i(27954),
                A = i(64720),
                C = i(71996),
                y = i(6304),
                T = i(65165),
                b = i(38097),
                N = i(91907),
                S = i(3407),
                j = i(34826),
                L = i.n(j),
                E = i(82684),
                I = i(85957),
                w = i.n(I);
            let O = (0, s.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, l.A)();
                    return t.isDownloaded
                        ? (0, a.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, a.jsx)(E.A, { value: t.downloadingProgress, size: 16, className: w().downloadingProgress, progressBarClassName: w().progress })
                          : null;
                }),
                R = (0, s.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: s,
                            withLightning: h,
                            ignoreDislikedStyles: j,
                            onLikeClick: E,
                            utmLink: I,
                            withSecondaryColor: w,
                            handleRemove: R,
                            withTrailer: M = !0,
                            likeIconSize: D = 'xxs',
                            removeButtonAriaLabel: P,
                            hideControls: U,
                        } = e,
                        { user: z, trailer: W } = (0, k.g)(),
                        { formatMessage: B } = (0, l.A)(),
                        { sendLikeSearchFeedback: H } = (0, f.z)(),
                        [F, $] = (0, n.useState)(!1),
                        [K, Y] = (0, n.useState)(!1),
                        G = (0, x.P)(),
                        X = (0, p.K)(s),
                        {
                            duration: V,
                            lightning: Z,
                            ugc: q,
                        } = ((e, t, i) => {
                            var a;
                            let { withLightning: r, isUGC: s } = t,
                                n = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / b.k7);
                                              return (0, N.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== n ? { text: n, ariaLabel: (0, T.j)(Math.round((null != (a = e.durationMs) ? a : 0) / 1e3), i) } : null,
                                lightning: r ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: s ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(s, { withLightning: h, isUGC: s.isUGC }, B),
                        J = (0, v.F)(),
                        Q = z.hasPlus,
                        ee = !s.isRemoved && s.isAvailable && !U,
                        et = (0, d.c)(async () => {
                            (F || s.isLiked || ($(!0), null == H || H()), await X(), null == E || E(s.isLiked));
                        }),
                        ei = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        ea = (0, d.c)((e) => {
                            if ((e.stopPropagation(), G())) return void e.preventDefault();
                            (W.openTrackTrailer(s.id), J(o.DomainObjectType.Track, s.id));
                        }),
                        er = (0, n.useMemo)(() => {
                            if (ee)
                                return (0, a.jsx)('div', {
                                    onClick: ei,
                                    children: (0, a.jsx)(S._, {
                                        track: s,
                                        open: K,
                                        onOpenChange: Y,
                                        placement: 'bottom',
                                        icon: (0, a.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: I,
                                        className: (0, r.$)(L().contextMenu, { [L().contextMenu_visible]: K }),
                                        handleRemove: R,
                                        withTrailer: M,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, R, K, ee, M, s, I]);
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(L().root, L().controls, i, {
                            [L().controls_dislikedControls]: s.isDisliked,
                            [L().controls_dislikedColors]: s.isDisliked && !j,
                            [L().controls_disabled]: !s.isAvailable,
                            [L().root_withSecondaryColor]: w,
                        }),
                        children: [
                            Z && (0, a.jsx)(u.I, { 'aria-label': Z.label, size: 'xxs', className: L().lightning, variant: 'lightning' }),
                            q &&
                                (0, a.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, a.jsx)(u.I, {
                                            'aria-label': q.label,
                                            size: 'xxs',
                                            className: L().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, a.jsx)(m.ZI, { children: q.label }),
                                    ],
                                }),
                            Q && (0, a.jsx)('div', { className: (0, r.$)(L().item, L().downloadIcon), children: (0, a.jsx)(O, { track: s }) }),
                            R && !U && (0, a.jsx)(g, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(L().item, L().removeButton), onClick: R, ariaLabel: P }),
                            ee &&
                                (0, a.jsx)(y.WithOffline, {
                                    fallback: (0, a.jsx)(A.c, {
                                        size: 'xs',
                                        iconSize: D,
                                        className: (0, r.$)(L().item, L().likeIcon),
                                        isLiked: s.isLiked,
                                        onClick: et,
                                        disabled: !z.isAuthorized,
                                    }),
                                }),
                            (null == (t = s.trailer) ? void 0 : t.isAvailable) &&
                                s.isAvailable &&
                                (0, a.jsx)(y.WithOffline, {
                                    fallback: (0, a.jsx)(C.k, {
                                        className: (0, r.$)(L().item, L().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ea,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(L().item, L().contextMenuWrapper),
                                children: [
                                    null !== V &&
                                        (0, a.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(L().duration, { [L().duration_hidden]: K && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': V.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: V.text }),
                                        }),
                                    er,
                                ],
                            }),
                        ],
                    });
                });
        },
        6630: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 16380));
        },
        6968: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var a = i(25839),
                r = i(82298),
                s = i(28631),
                n = i(74631);
            let l = (e) => {
                    let { style: t, forwardRef: i, context: r, ...s } = e,
                        n = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        l = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, a.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...t }, ref: i, ...s });
                },
                o = (0, n.forwardRef)((e, t) => (0, a.jsx)(l, { forwardRef: t, ...e }));
            var c = i(45300),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: s, withHeader: n, withForceScroll: l, ...o } = e;
                    return (0, a.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, n.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
            var _ = i(10508),
                p = i(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: s = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, h] = (0, n.useState)(null),
                        g = (0, n.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == r || r(e), o.length > 0 && h(e), t && i)) {
                                        let a = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < a; e++) i(e);
                                    }
                                }, s),
                            [s, r, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && m && g(m);
                    }, o);
                    let x = (0, n.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, a.jsx)(p.sN, { ref: d, rangeChanged: g, totalCount: l, endReached: x, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: g = 700,
                            pageSize: x = 20,
                            totalCount: v,
                            totalRequests: f,
                            debounceDurationInMs: k,
                            initialItemCount: A,
                            minInitialItemCount: C = 20,
                            handleRef: y,
                            alwaysShowScrollbar: T = !1,
                            testId: b,
                            isMobileLayout: N = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...j
                        } = e,
                        [L, E] = (0, n.useState)(!1),
                        I = (0, n.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    E(e);
                                }, 100),
                            [],
                        ),
                        w = (0, n.useMemo)(() => {
                            var e, t;
                            return N
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, f, N]),
                        O = A ? Math.min(A, C) : void 0;
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: L || T, [d().root_notScrolling]: !L && !T }, t),
                        'data-test-id': b,
                        children: [
                            N && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, a.jsx)(h, {
                                overscan: g,
                                components: w,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: I,
                                itemContent: _,
                                scrollerRef: y,
                                totalCount: v,
                                pageSize: x,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: k,
                                initialItemCount: O,
                                shouldTriggerRangeChangedOn: S,
                                ...j,
                            }),
                            N && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
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
        10322: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var a = i(25839),
                r = i(74631),
                s = i(82064);
            let n = (e) => {
                let { pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: l, pagePlacement: o, children: c } = e,
                    d = (0, r.useMemo)(() => ({ pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: l, pagePlacement: o }), [t, i, n, l, o]);
                return (0, a.jsx)(s.r.Provider, { value: d, children: c });
            };
        },
        10959: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => r });
            var a = i(44806);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: r, userRegion: s } = e;
                return 'ru' === s && t(a.z.WebNextFooterDisclaimer, 'on') ? i() : r();
            };
        },
        12234: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => r });
            var a = i(71872);
            function r(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(a.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        12526: (e, t, i) => {
            var a = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 9088] };
            function r(e) {
                if (!i.o(a, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = a[e],
                    r = t[0];
                return i.e(t[1]).then(() => i.t(r, 19));
            }
            ((r.keys = () => Object.keys(a)), (r.id = 12526), (e.exports = r));
        },
        14514: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => a });
            let a = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        16380: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => Z }));
            var a = i(25839),
                r = i(84059),
                s = i(82298),
                n = i(88204),
                l = i(74631),
                o = i(39004),
                c = i(8487),
                d = i(61493),
                u = i(22939),
                m = i(71035),
                _ = i(4254),
                p = i(64715),
                h = i(1407),
                g = i(82967),
                x = i(1797),
                v = i(20258),
                f = i(10322),
                k = i(30290),
                A = i(21784),
                C = i(89192),
                y = i(30716),
                T = i(79422),
                b = i(27954),
                N = i(3718),
                S = i(56412),
                j = i(99401),
                L = i(26076),
                E = i(10603),
                I = i(97805),
                w = i(6968),
                O = i(17951),
                R = i(61732),
                M = i(12234),
                D = i(64595),
                P = i(26208),
                U = i(89221),
                z = i(27935),
                W = i(41016),
                B = i(80461),
                H = i(95445);
            async function F(e, t) {
                var i, a, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let s = await (0, U.W)(t.locale),
                    n = s({ id: 'metadata.artist-tracks-title' }, { artistName: e.artist.name }),
                    l = s({ id: 'metadata.artist-tracks-description' }, { artistName: e.artist.name });
                return {
                    title: n,
                    description: l,
                    openGraph: (0, z.i)({
                        ogTitle: n,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        customImage: (0, P.v)({ host: t.host }),
                        siteName: s({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, W.H)({ cardType: B.W.SUMMARY_LARGE_IMAGE, title: n, description: l }),
                    facebook: (0, D.k)(),
                    appLinks: (0, M.X)({
                        additional: { ...t, url: null != (a = t.url) ? a : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: s({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, H.S)('/artist/:artistId/tracks', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var $ = i(28604),
                K = i(19386),
                Y = i(87018),
                G = i.n(Y);
            let X = (0, n.PA)((e) => {
                var t, i, n, M, D, P;
                let { artistId: U, preloadedArtist: z } = e,
                    {
                        artist: W,
                        sonataState: B,
                        disclaimerModalState: H,
                        settings: { isMobile: Y },
                    } = (0, b.g)(),
                    { formatMessage: X } = (0, o.A)(),
                    { from: V, utmLink: Z } = (0, k.f)({ pageId: v._Q.ARTIST_TRACKS, pageEntityId: U, contextType: u.K.Artist, contextId: U }),
                    { contentScrollRef: q, setContentScrollRef: J } = (0, C.g)(),
                    Q = (0, A.W)(),
                    ee = (0, T.w)(),
                    et = (0, x.S)({ artist: null == (t = W.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, K.G)(U),
                    (0, l.useEffect)(() => {
                        var e;
                        (null == (e = W.meta) ? void 0 : e.artist.isUnsafeLegal) && et();
                    }, [null == (i = W.meta) ? void 0 : i.artist.isUnsafeLegal, et]),
                    (0, $._)(W, U),
                    (0, l.useEffect)(
                        () => () => {
                            W.fullTracksListSubpage.reset();
                        },
                        [W],
                    ),
                    W.fullTracksListSubpage.isNotFound && (0, r.notFound)(),
                    (0, y.J)(W.fullTracksListSubpage.isResolved));
                let ei = (0, l.useMemo)(() => ({ Footer: () => (0, a.jsx)(L.A, { children: (0, a.jsx)(j.w, { className: G().footer }) }) }), []),
                    ea = (0, m.c)((e) => {
                        let t = [];
                        for (let a = e.startIndex; a <= e.endIndex; a++) {
                            var i;
                            let e = null == (i = W.fullTracksListSubpage.ids) ? void 0 : i[a];
                            !W.fullTracksListSubpage.getTrackByIndex(a) && e && t.push(e);
                        }
                        t.length && W.fullTracksListSubpage.getTracks({ trackIds: t });
                    }),
                    er = [];
                return (W.fullTracksListSubpage.isNeededToLoad && er.push(W.fullTracksListSubpage.getTracksIds({ artistId: U })),
                W.infoLoadingState.isNeededToLoad && er.push(W.getInfo({ artistId: U, preloadedArtist: z })),
                ((e) => {
                    var t;
                    (0, l.useEffect)(() => {
                        (null == e ? void 0 : e.meta) &&
                            !e.infoLoadingState.isLoading &&
                            e.meta.artist &&
                            F({ artist: (0, O.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, R.j)(e);
                            });
                    }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                })(W),
                er.length && (0, l.use)(Promise.allSettled(er)),
                W.fullTracksListSubpage.isRejected && !W.fullTracksListSubpage.isNotFound)
                    ? (0, a.jsx)(p.SomethingWentWrong, {})
                    : (null == (n = W.meta) ? void 0 : n.artist.isLegalRejected)
                      ? (0, a.jsx)(S.M, { modalState: H })
                      : (0, a.jsx)(f.n, {
                            pageId: v._Q.ARTIST_TRACKS,
                            pageEntityId: U,
                            children: (0, a.jsx)(h.h, {
                                scrollElement: q,
                                outerTitle: X({ id: 'page.artist-tracks-header' }, { artistName: W.commonSubPage.artistName }),
                                children: (0, a.jsxs)('div', {
                                    className: G().root,
                                    'data-test-id': d.Xk.artist.ARTIST_TRACKS_PAGE,
                                    children: [
                                        (0, a.jsx)(E.Y, {
                                            variant: E.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: Q.canBack,
                                            children: (0, a.jsx)(_.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, a.jsx)(c.A, {
                                                    id: 'page.artist-tracks-header',
                                                    values: { artistName: null == (M = W.meta) ? void 0 : M.artist.name },
                                                }),
                                            }),
                                        }),
                                        (0, a.jsx)(w.$, {
                                            className: (0, s.$)(G().scrollContainer, G().important),
                                            customComponents: ei,
                                            itemContentCallback: (e) => {
                                                let t = W.fullTracksListSubpage.getTrackByIndex(e),
                                                    i = X({ id: 'loading-messages.entity-is-loading' }, { entityName: X({ id: 'search-filters.track' }) });
                                                return t
                                                    ? (0, a.jsx)(g.K, {
                                                          track: t,
                                                          playContextParams: ee(e, {
                                                              contextData: { type: u.K.Artist, meta: { id: Number(U) }, from: V, utmLink: Z },
                                                              queueParams: { index: e, entityId: t.id },
                                                              loadContextMeta: !0,
                                                              entitiesData: B.unloadedEntitiesDataFromModels,
                                                          }),
                                                      })
                                                    : (0, a.jsx)(I.D, { isActive: !0, 'aria-label': i, variant: N.X.PLAYLIST, className: G().shimmerItem });
                                            },
                                            totalCount: null != (P = null == (D = W.fullTracksListSubpage.ids) ? void 0 : D.length) ? P : 0,
                                            onGetDataByRange: ea,
                                            pageSize: 20,
                                            listClassName: G().content,
                                            itemClassName: G().item,
                                            totalRequests: W.fullTracksListSubpage.tracks.size,
                                            handleRef: J,
                                            context: { listAriaLabel: X({ id: 'entity-names.artist-tracks-list' }) },
                                            isMobileLayout: Y,
                                            useWindowScroll: Y,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var V = i(61288);
            let Z = () => {
                let e = (0, r.useSearchParams)().get('artistId');
                return ((e && (0, V.L)(e)) || (0, r.notFound)(), (0, a.jsx)(X, { artistId: e }));
            };
        },
        17951: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => r });
            var a = i(61399);
            let r = (e) => {
                var t, i;
                return e
                    ? {
                          id: Number(e.id),
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, a.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (i = e.isAvailable) || i, disclaimers: (0, a.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        18421: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { C: () => s }),
                (function (e) {
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon'));
                })(a || (a = {})));
            let r = new Set(Object.values(a)),
                s = (e) => 'string' == typeof e && r.has(e);
        },
        19386: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => n });
            var a = i(74631),
                r = i(43354),
                s = i(25895);
            let n = (e) => {
                var t;
                let { setDeeplink: i } = null != (t = (0, r.P)()) ? t : {};
                (0, a.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, s.u)('/artist/:artistId', { params: { artistId: e } });
                        null == i || i(t);
                    }
                    return () => {
                        null == i || i(null);
                    };
                }, [e, i]);
            };
        },
        19410: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => a });
            let a = { delay: { open: 1e3, close: 0 } };
        },
        21468: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var a = i(74631),
                r = i(56480);
            function s() {
                return (0, a.useContext)(r.H);
            }
        },
        26076: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var a = i(25839);
            i(93588);
            var r = i(400),
                s = i.n(r);
            let n = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: s().empty });
            };
        },
        26115: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s });
            var a = i(40207),
                r = i(12929);
            let s = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: s } = e;
                return (0, a.l)({ entity: t, entityType: r.n.TRACK, callback: i, onReject: s, preventDefaultWhenSafe: !1 });
            };
        },
        26208: (e, t, i) => {
            'use strict';
            function a(e) {
                let { host: t, url: i } = e;
                return i || (t ? 'https://'.concat(t, '/meta/home.png') : '');
            }
            i.d(t, { v: () => a });
        },
        27935: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => s });
            var a = i(89288),
                r = i(28869);
            function s(e) {
                let { ogTitle: t, ogDescription: i, fullUrl: s, locale: n, ogImage: l, siteName: o, ogType: c, customImage: d } = e,
                    u = l ? { url: (0, a.lU)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: i,
                    url: s,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (n || r.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
        },
        27990: (e) => {
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
        28257: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        28604: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => r });
            var a = i(74631);
            let r = (e, t) => {
                (0, a.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        28869: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => u });
            var a = i(58025),
                r = i(78773),
                s = i(14514),
                n = i(56107);
            let l = (e) => n.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = i(86166);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var d = i(55040);
            class u {
                static getDefaultLocale() {
                    return new Intl.Locale(r.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = u.getDefaultLocale().region;
                    }
                    return new Intl.Locale(this.language, { region: e });
                }
                getDefaultLanguage() {
                    return c((0, s.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, s.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, i, a;
                    let r = (0, s.k)(this.config, e);
                    r !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (i = this.storage) || i.set(r), null == (a = this.changeLanguageHandler) || a.onChangeLanguage(r));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, s.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, s.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, d.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: i, changeLanguageHandler: o, logger: c }) {
                    let d;
                    if (
                        ((0, a._)(this, 'language', void 0),
                        (0, a._)(this, 'storage', void 0),
                        (0, a._)(this, 'dictionary', void 0),
                        (0, a._)(this, 'config', void 0),
                        (0, a._)(this, 'logger', void 0),
                        (0, a._)(this, 'changeLanguageHandler', void 0),
                        (0, a._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = i),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = r.pE[r.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var u;
                            let e;
                            d = ((e = this.config), new n.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (u = this.storage) ? void 0 : u.get()) || void 0,
                                acceptLangs: l(navigator.languages.join()),
                            });
                        }
                    } else [d] = l(e) || [];
                    this.language = (0, s.k)(this.config, d);
                }
            }
        },
        30716: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => s });
            var a = i(74631);
            i(93588);
            var r = i(84059);
            let s = (e) => {
                let t = (0, r.usePathname)(),
                    [i, s] = (0, a.useState)(!1);
                ((0, a.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, i, t]));
            };
        },
        32652: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => h });
            var a = i(25839),
                r = i(82298),
                s = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(61493),
                c = i(66738),
                d = i(74245),
                u = i(27954),
                m = i(60924),
                _ = i(92870),
                p = i.n(_);
            let h = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: s, containerClassName: _, variant: h, size: g = 'xxxs', ...x } = e,
                    { formatMessage: v } = (0, l.A)(),
                    {
                        settings: { isMobile: f },
                    } = (0, u.g)(),
                    [k, A] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    i && i().then(A);
                }, [i, s]);
                let {
                    iconVariant: C,
                    descriptionText: y,
                    isTooltipEnabled: T,
                    ariaLabel: b,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: a, isMobile: r } = e,
                        s = (null == a ? void 0 : a.join('\n')) || '';
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
                        })(i),
                        descriptionText: s,
                        isTooltipEnabled: !!(null == a ? void 0 : a.length) && !r,
                        ariaLabel: s.length > 0 ? s : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: k, isMobile: f }, v);
                return (0, a.jsx)(m.k, {
                    description: y,
                    placement: 'bottom-start',
                    enabled: T,
                    children: (0, a.jsx)('span', {
                        className: _,
                        children: (0, a.jsx)(c.I, {
                            className: (0, r.$)(p().explicitMark, t),
                            'aria-label': b,
                            variant: C,
                            size: g,
                            ...x,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        34546: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            let a = (e) => e.map((e) => e.name).join(', ');
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
        38726: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => d });
            var a = i(25839),
                r = i(88204),
                s = i(61493),
                n = i(66738),
                l = i(10820),
                o = i(77174),
                c = i(27954);
            let d = (0, r.PA)((e) => {
                let { isLiked: t, onClick: i, className: r, iconClassName: d, albumType: u, disabled: m } = e,
                    { user: _ } = (0, c.g)(),
                    p = t ? 'liked' : 'like',
                    h = (0, o.$)(t, u);
                return (0, a.jsx)(l.Dr, {
                    className: r,
                    onClick: i,
                    icon: (0, a.jsx)(n.I, { className: d, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !_.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        39528: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => r });
            var a = i(25895);
            let r = (e) => (0, a.u)('/artist/:artistId', { params: { artistId: e } });
        },
        41016: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n });
            var a = i(71872),
                r = i(80461);
            let s = '@yandexmusic';
            function n(e) {
                return e.cardType === r.W.SUMMARY_LARGE_IMAGE
                    ? { card: r.W.SUMMARY_LARGE_IMAGE, site: s, title: e.title, description: e.description }
                    : {
                          card: r.W.APP,
                          site: s,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(a.Lz, '/').concat(e.url) } },
                      };
            }
        },
        43354: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r, P: () => s });
            var a = i(74631);
            let r = (0, a.createContext)(null),
                s = () => (0, a.useContext)(r);
        },
        44408: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        45300: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        46646: (e, t, i) => {
            var a = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function r(e) {
                if (!i.o(a, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = a[e],
                    r = t[0];
                return i.e(t[1]).then(() => i.t(r, 19));
            }
            ((r.keys = () => Object.keys(a)), (r.id = 46646), (e.exports = r));
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
        51027: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        55040: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => c, X: () => o });
            var a = i(36432),
                r = i(78773);
            let s = async (e) => e.then((e) => e.default),
                n = r.pE[r.cy],
                l = n.langs.reduce((e, t) => (e.set(t, async () => s(i(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = n.langs.reduce((e, t) => (e.set(t, async () => s(i(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        i = t.get(e),
                        r = t.get('ru');
                    if (i) return i();
                    if (r) return r();
                    throw new a.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        56348: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => H });
            var a = i(25839),
                r = i(82298),
                s = i(88204),
                n = i(74631),
                l = i(49656),
                o = i(3392),
                c = i(19410),
                d = i(71035),
                u = i(27954),
                m = i(39528);
            let _ = (e, t) => {
                let { withLink: i, separator: a } = t,
                    r = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: a, link: r };
            };
            var p = i(94484),
                h = i.n(p),
                g = i(61493),
                x = i(4254),
                v = i(97522),
                f = i(39004),
                k = i(44031),
                A = i(29481),
                C = i(85686),
                y = i(85743),
                T = i(40207);
            let b = (0, s.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: r, captionSize: s = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: m,
                            link: _,
                            title: p,
                            ariaLabel: h,
                            tooltipText: b,
                            isTooltipEnabled: N,
                            handleNavigate: S,
                        } = ((e) => {
                            var t, i;
                            let { item: a, allArtistsTitle: r, withCustomTooltip: s } = e,
                                { formatMessage: n } = (0, f.A)(),
                                l = ((e, t) => {
                                    let { item: i, allArtistsTitle: a, withCustomTooltip: r } = e,
                                        s = a || i.name;
                                    return {
                                        ...i,
                                        title: r ? void 0 : s,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: s,
                                        isTooltipEnabled: !a && r,
                                    };
                                })({ item: a, allArtistsTitle: r, withCustomTooltip: s }, n),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                m = (0, C.Z)(null != (i = null == (t = l.link) ? void 0 : t.href) ? i : l.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, y.z)(),
                                p = (0, A.N)(),
                                h = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), m(e));
                                }),
                                g = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: a, fullscreenPlayer: r, fullscreenVideoPlayer: s } = (0, u.g)(),
                                        { modal: n } = a;
                                    return (0, T.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (a.reset(), n.close()), r.modal.isOpened && r.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            s.modal.isOpened && (s.modal.close(), s.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: l.artist, callback: h }),
                                x = (0, d.c)((e) => {
                                    (p({ to: k.AppScreen.ArtistScreen }), null == _ || _(), g(e));
                                });
                            return { ...l, handleNavigate: x };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: l });
                    return _
                        ? (0, a.jsx)(v.N, {
                              ..._,
                              'aria-label': h,
                              className: i,
                              onClick: S,
                              title: p,
                              'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, a.jsx)(o.m_, {
                                  enabled: N,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: b,
                                  hoverSettings: c,
                                  children: (0, a.jsx)(x.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: r, children: m }),
                              }),
                          })
                        : (0, a.jsx)(o.m_, {
                              enabled: N,
                              offsetOptions: 4,
                              placement: 'top',
                              text: b,
                              hoverSettings: c,
                              children: (0, a.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: r,
                                  title: p,
                                  'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                N = (e) => {
                    let { group: t, linkClassName: i, captionClassName: r, captionSize: s, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, a.jsx)(b, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: r,
                                captionSize: s,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, a.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, a.jsx)(b, {
                                                item: e,
                                                linkClassName: i,
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
            var S = i(8487),
                j = i(9079);
            let L = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: s } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        ' ',
                        (0, a.jsx)(j.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(h().spoiler, i),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': g.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, a.jsx)(S.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var E = i(28631),
                I = i(33049),
                w = i(61912),
                O = i(36286),
                R = i.n(O);
            let M = (0, s.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, a.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, I.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, a.jsx)('div', { ref: r, children: t }),
                            (0, a.jsx)(o.ZI, { className: R().tooltipContent, children: i.map((e) => (0, a.jsx)(w.V, { artist: e, className: R().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, n.forwardRef)((e, t) => (0, a.jsx)(M, { forwardRef: t, ...e }));
            var P = i(10820),
                U = i(93510),
                z = i.n(U);
            let W = (0, s.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: s } = (0, f.A)();
                    return (0, a.jsx)(P.W1, {
                        isMobile: !0,
                        className: (0, r.$)(z().root, z().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, a.jsx)(w.V, { artist: e }, e.id)),
                    });
                }),
                B = (0, s.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [s, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let e = r.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, l.L)(() =>
                            (0, E.A)(() => {
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
                        return (s || c) && (!c || 1 !== t.length) ? (c ? (0, a.jsx)(W, { artists: t, label: i }) : (0, a.jsx)(D, { artists: t, label: i })) : i;
                }),
                H = (0, s.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: s,
                            linkClassName: m,
                            captionClassName: p,
                            captionSize: g,
                            variant: x = 'breakAll',
                            spoilerComponent: v,
                            ...f
                        } = e,
                        k = ((e) => {
                            var t, i, a;
                            let { separator: r, visibleArtistsCount: s, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = e,
                                p = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                g = null == (a = e.withCustomTooltip) || a,
                                x = (0, n.useRef)(null),
                                [v, f] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: k },
                                } = (0, u.g)(),
                                A = ((!k || 1 === p.length) && m) || !m,
                                C = ((e, t) => {
                                    var i, a, r;
                                    let s = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        n = null == (a = null == t ? void 0 : t.withLink) || a,
                                        l = null != (r = null == t ? void 0 : t.separator) ? r : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(l),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: a } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => a || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: s, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: a, separator: r, isFirst: s } = t;
                                                return {
                                                    primary: _(e, { withLink: a, separator: s ? void 0 : r }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = r ? e.separator : '';
                                                        return _(e, { withLink: a, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: r, visibleArtistsCount: v ? void 0 : s, withComposer: o, withLink: !!A && l, artistIdWithoutLink: c }),
                                y = h ? C.allArtistsTitle : '',
                                T = (0, d.c)((e) => {
                                    (f(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: C.groups,
                                hiddenArtistsCount: C.hiddenArtistsCount,
                                allArtistsTitle: y,
                                withCustomTooltip: g,
                                withContextMenu: m,
                                labelRef: x,
                                handleOnSpoilerClick: T,
                                isTooltipEnabled: !!y && g && !m && !k,
                                title: !y || g || m ? void 0 : y,
                            };
                        })(f),
                        A = (0, l.L)(() =>
                            k.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(v)
                                  ? v
                                  : (0, a.jsx)(L, { spoilerClassName: s, spoilerArtistsCount: k.hiddenArtistsCount, handleOnSpoilerClick: k.handleOnSpoilerClick }),
                        ),
                        C = (0, a.jsx)(o.m_, {
                            referenceRef: k.labelRef,
                            enabled: k.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: k.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, a.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, r.$)(h().root, h()['root_variant_'.concat(x)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: k.title,
                                children: [
                                    k.groups.map((e) =>
                                        (0, a.jsx)(
                                            N,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: p,
                                                captionSize: g,
                                                allArtistsTitle: k.allArtistsTitle,
                                                withCustomTooltip: k.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return k.withContextMenu ? (0, a.jsx)(B, { labelRef: k.labelRef, artists: k.artists, label: C }) : C;
                });
        },
        56412: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => y });
            var a = i(25839),
                r = i(82298),
                s = i(88204),
                n = i(74631),
                l = i(8487),
                o = i(61493),
                c = i(71035),
                d = i(4071),
                u = i(4254),
                m = i(36484),
                _ = i(62562),
                p = i(21784),
                h = i(53712),
                g = i(85686),
                x = i(12929),
                v = i(95067),
                f = i(97522),
                k = i(71472),
                A = i.n(k);
            let C = {
                    [x.n.ALBUM]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [x.n.PODCAST]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [x.n.ARTIST]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [x.n.TRACK]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [x.n.AUDIOBOOK]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [x.n.CLIP]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                y = (0, s.PA)((e) => {
                    var t;
                    let { modalState: i, data: s, onClose: k, className: y } = e,
                        T = null != s ? s : null == i ? void 0 : i.modalData,
                        b = (0, p.W)(),
                        N = (0, g.Z)(h.Z.main.href),
                        S = (0, _.N)().get(m.U2),
                        j = (0, c.c)(() => {
                            if (k) return k();
                            (b.canBack && b.back(), N());
                        }),
                        L = (null == T || null == (t = T.details) ? void 0 : t.url) && T.details.text,
                        E = (0, c.c)(() => {
                            var e;
                            null == i || i.setConfirmUnsafeDisclaimer(!0);
                            let t = S.get(v.c.ExEx),
                                a = new Date(),
                                r = a.setMinutes(a.getMinutes() + 15),
                                s =
                                    null != (e = null == i ? void 0 : i.entityKey)
                                        ? e
                                        : ''.concat(null == i ? void 0 : i.entityType, '_').concat(null == i ? void 0 : i.entityId);
                            (t ? S.set(v.c.ExEx, [...t, s], { expires: new Date(r) }) : S.set(v.c.ExEx, [s], { expires: new Date(r) }),
                                null == k || k(),
                                (null == i ? void 0 : i.onDisclaimerConfirmHandler) && i.onDisclaimerConfirmHandler());
                        }),
                        I = (0, c.c)(() => {
                            ((null == i ? void 0 : i.shouldHistoryBack) ? (null == k || k(), b.canBack && b.back(), N()) : null == k || k(),
                                (null == i ? void 0 : i.onDisclaimerRejectHandler) && i.onDisclaimerRejectHandler());
                        });
                    (0, n.useEffect)(
                        () => () => {
                            null == i || i.reset();
                        },
                        [i],
                    );
                    let w = (0, n.useMemo)(() => {
                            if (T) {
                                var e, t;
                                return (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, r.$)(A().title, A().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: T.title,
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: A().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: T.description,
                                        }),
                                        L &&
                                            (0, a.jsx)(f.N, {
                                                href: null == (e = T.details) ? void 0 : e.url,
                                                className: A().link,
                                                children: (0, a.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = T.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [T, L]),
                        O = (0, n.useMemo)(
                            () =>
                                (null == i ? void 0 : i.type) === x.Z.UNSAFE
                                    ? (0, a.jsxs)('div', {
                                          className: A().buttons,
                                          children: [
                                              (0, a.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: I,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, a.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, a.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: E,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: i.entityType && C[i.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)('div', {
                                          className: A().buttons,
                                          children: (0, a.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: j,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: A().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, a.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [E, null == i ? void 0 : i.entityType, null == i ? void 0 : i.type, j, I],
                        );
                    return (0, a.jsx)('div', {
                        className: (0, r.$)(A().root, y),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, a.jsxs)('div', { className: A().container, children: [w, O] }),
                    });
                });
        },
        56480: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            let a = (0, i(74631).createContext)({ pageAlbumId: void 0 });
        },
        59981: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { T: () => a }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(a || (a = {})));
        },
        60924: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var a = i(25839),
                r = i(61493),
                s = i(3392),
                n = i(4254),
                l = i(74672),
                o = i.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: l, placement: d = 'top', children: u } = e;
                    return (0, a.jsxs)(s.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, a.jsx)(s.ZI, {
                                className: o().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
                                children: (0, a.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, a.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, a.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61288: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => r });
            let a = /^(0|[1-9]\d*)$/;
            function r(e) {
                return void 0 !== e && !(e.length > 40) && a.test(e);
            }
        },
        61399: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            var a = i(18421);
            let r = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, a.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        61561: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            var a = i(27954),
                r = i(44806);
            let s = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: s },
                    experiments: n,
                } = (0, a.g)();
                return (
                    !(null == s ? void 0 : s.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = n.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61732: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => r });
            let a = (e, t) => {
                    let i = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (i) return i;
                    let a = window.document.createElement('meta');
                    return (a.setAttribute(e, t), a);
                },
                r = (e) => {
                    let { title: t, description: i, openGraph: r } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof i)) {
                        let e = a('name', 'description');
                        (e.setAttribute('content', i), window.document.head.appendChild(e));
                    }
                    let s = '';
                    if (r) {
                        let e = 'string' == typeof r.title ? r.title : '',
                            t = 'string' == typeof r.description ? r.description : '',
                            i = Array.isArray(r.images) ? r.images[0] : null;
                        s = i && 'object' == typeof i && 'url' in i ? String(i.url) : '';
                        let n = a('property', 'og:title'),
                            l = a('property', 'og:description'),
                            o = a('property', 'og:image');
                        (n.setAttribute('content', e),
                            l.setAttribute('content', t),
                            o.setAttribute('content', s),
                            window.document.head.appendChild(n),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(o));
                    }
                };
        },
        61912: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => f });
            var a = i(25839),
                r = i(82298),
                s = i(88204),
                n = i(74631),
                l = i(44031),
                o = i(61493),
                c = i(71035),
                d = i(23818),
                u = i(10820),
                m = i(86869),
                _ = i(4254),
                p = i(29481),
                h = i(85686),
                g = i(27954),
                x = i(53454),
                v = i.n(x);
            let f = (0, s.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: s } = (0, g.g)(),
                    x = (0, h.Z)(t.url),
                    k = (0, p.N)(),
                    A = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, a.jsx)(f, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    C = (0, c.c)((e) => {
                        (s.modal.isOpened && s.modal.close(), k({ to: l.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(u.Dr, {
                            className: (0, r.$)(v().root, i),
                            onClick: C,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, a.jsx)(m.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, a.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, a.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        62661: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => o });
            var a = i(25839),
                r = i(82298),
                s = i(66738),
                n = i(28257),
                l = i.n(n);
            let o = (e) => {
                let { isDragging: t, className: i } = e;
                return (0, a.jsx)(s.I, { variant: 'dragDots', size: 'xxs', className: (0, r.$)(l().root, { [l().root_active]: t }, i), 'aria-hidden': !0 });
            };
        },
        64595: (e, t, i) => {
            'use strict';
            function a() {
                return { appId: '117328825040925' };
            }
            i.d(t, { k: () => a });
        },
        64715: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => I });
            var a = i(25839),
                r = i(82298),
                s = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(8487);
            i(93588);
            var c = i(4071),
                d = i(66738),
                u = i(4254),
                m = i(67379),
                _ = i(44031),
                p = i(87277),
                h = i(59450),
                g = i(84e3),
                x = i(97952),
                v = i(89192),
                f = i(53712),
                k = i(27954),
                A = i(44806),
                C = i(15270),
                y = i(23818),
                T = i(85686);
            let b = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var N = i(27990),
                S = i.n(N);
            let j = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { slam: s } = (0, k.g)(),
                    { contentRef: n } = (0, v.g)(),
                    l = (0, T.Z)(f.Z.mymusicDownloadsTracks.href);
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(S().root, t),
                    children: [
                        i &&
                            (0, a.jsx)(C.L, { withBackwardFallback: '/', className: (0, r.$)(S().navigation, { [S().navigation_desktop]: !n }), withForwardControl: !1 }),
                        (0, a.jsxs)('div', {
                            className: (0, r.$)(S().content, { [S().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(y._V, { className: S().image, src: b.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, a.jsxs)('div', {
                                    className: S().message,
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            className: S().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, a.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            className: S().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, a.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                s.hasDownloadedTracks &&
                                    (0, a.jsx)(c.$, {
                                        className: S().button,
                                        onClick: l,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(u.HL, {
                                            className: S().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, a.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var L = i(68854),
                E = i.n(L);
            let I = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    y = (0, n.useContext)(k.P),
                    T = null == y ? void 0 : y.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    b = s(T ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: a } = (0, x.$)(),
                        r = (0, g.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !a) return;
                        let s = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: a,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, p.z5)(t.evgenInstance, s);
                    }, [t, e, i, a, r]);
                })(b);
                let { sendRefreshEvent: N } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: i } = (0, x.$)(),
                            a = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let r = (0, m.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, p.bv)(e.evgenInstance, r);
                            }, [e, t, i, a]),
                        };
                    })(),
                    S = (0, n.useCallback)(() => {
                        (N(), (window.location.href = f.Z.main.href));
                    }, [N]),
                    { contentRef: L } = (0, v.g)();
                return T
                    ? (0, a.jsx)(j, { className: t, withBackwardControl: i })
                    : (0, a.jsxs)('div', {
                          className: (0, r.$)(E().root, t),
                          children: [
                              i &&
                                  (0, a.jsx)(C.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(E().navigation, { [E().navigation_desktop]: !L }),
                                      withForwardControl: !1,
                                  }),
                              (0, a.jsxs)('div', {
                                  className: (0, r.$)(E().content, { [E().content_shrink]: !i }),
                                  children: [
                                      (0, a.jsx)(d.I, { className: E().icon, variant: 'attention', size: 'xxl' }),
                                      (0, a.jsx)(u.DZ, { className: (0, r.$)(E().title, E().important), variant: 'h3', size: 'xs', children: b }),
                                      (0, a.jsxs)(u.HL, {
                                          className: (0, r.$)(E().text, E().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, a.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, a.jsx)(c.$, {
                                          onClick: S,
                                          className: E().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, a.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, a.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
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
        69730: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => y });
            var a = i(25839),
                r = i(82298),
                s = i(88204),
                n = i(74631),
                l = i(71035),
                o = i(11823),
                c = i(79367),
                d = i(47009),
                u = i(52512),
                m = i(29872),
                _ = i(61561),
                p = i(85743),
                h = i(16886),
                g = i(27954),
                x = i(18284),
                v = i(39004),
                f = i(34546),
                k = i(26115),
                A = i(51027),
                C = i.n(A);
            let y = (0, s.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: s,
                        meta: A,
                        beforeBlock: y,
                        controls: T,
                        playButtonCellRender: b,
                        withLightning: N,
                        isPlaying: S,
                        isCurrent: j,
                        togglePlay: L,
                        restartPlay: E,
                        onPlayClick: I,
                        playButtonIconSize: w,
                        skipFreemiumCloseListeningPaywall: O = !1,
                        ...R
                    } = e,
                    { shouldShowBuySubscriptionModal: M, showBuySubscriptionModal: D } = (0, m.q)(),
                    {
                        track: P,
                        fullscreenPlayer: U,
                        settings: { isMobile: z },
                        album: W,
                        albumCPA: { isPlusCPAPlayerBarEnabled: B },
                        paywall: { modal: H },
                    } = (0, g.g)(),
                    { ref: F, intersectionPropertyId: $ } = (0, u.n)(),
                    K = (0, d.b)(),
                    Y = (0, c.P)(),
                    G = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: a } = (0, v.A)();
                        return ((e, t, i) => {
                            var a;
                            let { withLightning: r } = t,
                                s = (0, f.j)(null != (a = e.artists) ? a : []);
                            return e.isAvailable
                                ? [s, e.title, e.version, r && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(s, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: i }, a);
                    })({ withLightning: N, track: s }),
                    X = ((e) => {
                        let { sonataState: t } = (0, g.g)(),
                            i = t.status === h.MT.LOADING_MEDIA_SOURCE || t.status === h.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let a = t.entityMeta.entityId;
                            return i && a === e;
                        }
                        return i;
                    })(s.entityId),
                    V = B(W.id, null == (t = W.meta) ? void 0 : t.isNonMusic),
                    Z = s.isAvailable && M && !V,
                    q = (0, _.N)(),
                    J = s.isAvailable && q && !V && !O,
                    Q = (0, k.w)({ track: s, callback: L }),
                    ee = (0, l.c)(() => {
                        P.open({ trackId: s.id, albumId: s.albumId });
                    }),
                    et = (0, k.w)({ track: s, callback: ee }),
                    { sendPlaySearchFeedback: ei } = (0, p.z)(),
                    [ea, er] = (0, n.useState)(!1),
                    es = (0, l.c)(() => {
                        if (!Y()) {
                            if (Z) return void D();
                            if (J) return void H.open();
                            (ea || S || (er(!0), null == ei || ei()), Q(), K(!S), null == I || I(!S));
                        }
                    }),
                    en = (0, l.c)(() => {
                        if (S) return void E();
                        es();
                    }),
                    el = (0, l.c)((e) => {
                        if (!s.isAvailable && !s.hasModalAccess) {
                            (M && s.isAvailableOnlyForPlus && D(), q && s.isAvailableOnlyForPlus && H.open());
                            return;
                        }
                        if (Z) return void D();
                        let t = !z && (2 === e.detail || (1 === e.detail && s.hasTrackLink && !U.modal.isOpened));
                        return J && !t
                            ? void H.open()
                            : ((0, o.P)(e, C().ripple), z)
                              ? void es()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && s.hasTrackLink && !U.modal.isOpened && (et(), J && H.open()));
                    }),
                    eo = null == b ? void 0 : b({ onPlayButtonClick: es, isPlaying: S, isCurrent: j, isLoading: X, playButtonIconSize: w });
                return (0, a.jsxs)(x.C, {
                    ref: F,
                    'aria-label': G,
                    'data-intersection-property-id': $,
                    onClick: el,
                    className: (0, r.$)(C().root, { [C().root_disabled]: !s.isAvailable, [C().root_current]: j && z }, i),
                    ...R,
                    children: [y, eo, A, T],
                });
            });
        },
        71472: (e) => {
            e.exports = {
                root: 'Disclaimer_root__ciLA2',
                container: 'Disclaimer_container__cB_wK',
                title: 'Disclaimer_title__I5hOj',
                text: 'Disclaimer_text__2Yo3R',
                link: 'Disclaimer_link__4UMOz',
                buttons: 'Disclaimer_buttons__mpL9o',
                button: 'Disclaimer_button__qIuMB',
                shimmer: 'Disclaimer_shimmer__Bg0HE',
            };
        },
        71705: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var a = i(25839),
                r = i(39004),
                s = i(71035),
                n = i(21468),
                l = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(33660),
                m = i(74631),
                _ = i(31860),
                p = i(93297);
            let h = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, c.g)(),
                    { formatMessage: g } = (0, r.A)(),
                    { notify: x } = (0, o.l)(),
                    v = (() => {
                        let { notify: e } = (0, o.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [i, n] = (0, m.useState)(!1),
                            { formatMessage: h } = (0, r.A)();
                        return (0, s.c)(async (r) => {
                            let { album: s, withLink: o = !0, withNotification: c = !0 } = r;
                            if (i) return;
                            let m = { ...(0, u.HO)(s), url: s.url, isLiked: !s.isLiked };
                            n(!0);
                            let g = await s.toggleLike();
                            if ((n(!1), !c)) return;
                            let x = t.modal.isOpened;
                            g === _.f.OK
                                ? e((0, a.jsx)(p.T, { withLink: o, album: m }), { containerId: x ? l.u.FULLSCREEN_INFO : l.u.INFO })
                                : e((0, a.jsx)(d.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: x ? l.u.FULLSCREEN_ERROR : l.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: f } = (0, n.T)();
                return (0, s.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: f, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? v({ album: e })
                              : void x((0, a.jsx)(d.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        71996: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var a = i(25839),
                r = i(74631),
                s = i(39004),
                n = i(61493),
                l = i(4071),
                o = i(66738),
                c = i(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: p,
                            className: h,
                            forwardRef: g,
                            style: x,
                            children: v,
                        } = e,
                        { formatMessage: f } = (0, s.A)(),
                        k = f({ id: 'trailer.button-aria-label' });
                    return (0, a.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': k,
                        onClick: _,
                        ref: g,
                        icon: (0, a.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        73182: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => s });
            var a = i(56829),
                r = i(35015);
            let s = (e) => {
                switch (e) {
                    case a._.PODCAST:
                        return r.c.PODCAST;
                    case a._.AUDIOBOOK:
                        return r.c.AUDIOBOOK;
                    case a._.FAIRY_TALE:
                        return r.c.FAIRY_TALE;
                    default:
                        return r.c.ALBUM;
                }
            };
        },
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        77174: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => s });
            var a = i(39004),
                r = i(56829);
            let s = (e, t) => {
                let { formatMessage: i } = (0, a.A)();
                if (e)
                    switch (t) {
                        case r._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case r._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case r._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case r._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        77737: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => b });
            var a = i(25839),
                r = i(82298),
                s = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(84059),
                c = i(61493),
                d = i(49656),
                u = i(3392),
                m = i(4254),
                _ = i(56348),
                p = i(85743),
                h = i(27954),
                g = i(19410),
                x = i(12929),
                v = i(32652),
                f = i(97522),
                k = i(40846),
                A = i(61755),
                C = i(87221),
                y = i(12752),
                T = i.n(y);
            let b = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: s,
                        albumArtists: y,
                        withExplicitMark: b,
                        withSecondaryColor: N,
                        captionSize: S = 'm',
                        explicitSize: j = 'xxxs',
                        withAllArtistsTitle: L,
                        textClassName: E,
                        artistsClassName: I,
                        ignoreDislikedStyles: w,
                        withCustomTooltip: O = !0,
                        hasLineClamp: R = !0,
                        withSavingQueryParams: M,
                        beforeTitle: D,
                        withArtistLink: P,
                        variant: U,
                        withTrackLink: z,
                        afterTitle: W,
                        withContextMenuArtists: B,
                    } = e,
                    { formatMessage: H } = (0, l.A)(),
                    { sendNavigateSearchFeedback: F } = (0, p.z)(),
                    {
                        settings: { isMobile: $ },
                        slam: K,
                    } = (0, h.g)(),
                    Y = (0, A.$)({ withCustomTooltip: O }),
                    G = (0, o.useSearchParams)(),
                    X = (0, k.B)(s, {
                        isMobile: $,
                        isOfflineModeEnabled: K.isOfflineModeEnabled,
                        albumArtists: y,
                        withTrackLink: z,
                        withArtistLink: P,
                        variant: U,
                        withExplicitMark: b,
                        query: M ? Object.fromEntries(G) : void 0,
                    }),
                    {
                        displayTitle: V,
                        ariaLabel: Z,
                        tooltipText: q,
                        titleAttribute: J,
                        versionTitleAttribute: Q,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, a) => {
                        var r, s;
                        let { canEnableCustomTooltip: n, isMobile: l } = i,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, a),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (r = t.version) ? r : ''),
                            d = a({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (s = e.version) ? s : ''),
                            tooltipText: c,
                            isTooltipEnabled: n && !l,
                            titleAttribute: !n && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: n ? void 0 : t.version,
                        };
                    })(s, X, { canEnableCustomTooltip: Y, isMobile: $ }, H),
                    et = (0, C.O)({ track: s, onNavigate: F, withSavingQueryParams: M, entityType: x.n.TRACK }),
                    ei = (0, n.useCallback)(
                        (e) =>
                            (0, a.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: q,
                                hoverSettings: g.V,
                                children: (0, a.jsx)(m.HL, {
                                    className: (0, r.$)(T().text, T().title),
                                    type: 'entity',
                                    size: S,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: V,
                                }),
                            }),
                        [S, V, q, ee],
                    ),
                    ea = (0, d.L)(() =>
                        X.shouldShowRemovedTitle
                            ? (0, a.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: q,
                                  hoverSettings: g.V,
                                  children: (0, a.jsx)(m.HL, {
                                      className: (0, r.$)(T().text, T().title),
                                      type: 'entity',
                                      size: S,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: J,
                                      children: V,
                                  }),
                              })
                            : X.link
                              ? (0, a.jsx)(f.N, {
                                    onClick: et,
                                    className: T().albumLink,
                                    href: X.link.href,
                                    'aria-label': Z,
                                    title: J,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    er = (0, n.useMemo)(() => +!!R, [R]);
                return (0, a.jsx)('div', {
                    className: (0, r.$)(T().root, { [T().root_disabled]: !s.isAvailable, [T().root_disliked]: s.isDisliked && !w, [T().root_withSecondaryColor]: N }, t),
                    children: (0, a.jsxs)('div', {
                        className: T().metaContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(T().titleContainer, { [T().titleContainer_withVersion]: s.version }, i),
                                children: [
                                    (0, a.jsxs)(m.HL, {
                                        className: (0, r.$)(T().text, E),
                                        type: 'entity',
                                        size: S,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            D,
                                            ea,
                                            X.version &&
                                                (0, a.jsxs)(m.HL, {
                                                    className: (0, r.$)(T().text, T().version),
                                                    type: 'entity',
                                                    size: S,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Q,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', X.version],
                                                }),
                                        ],
                                    }),
                                    X.explicitMark &&
                                        (0, a.jsx)(v.N, {
                                            containerClassName: T().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: j,
                                            variant: X.explicitMark,
                                            className: T().explicitMark,
                                            trackId: s.id,
                                        }),
                                    W,
                                ],
                            }),
                            X.artists.length > 0 &&
                                (0, a.jsx)(_.i, {
                                    className: (0, r.$)(T().text, { [T().artists]: R }, I, E),
                                    withAllArtistsTitle: L,
                                    linkClassName: (0, r.$)(T().text, T().link),
                                    captionClassName: (0, r.$)(T().text, T().artistCaption),
                                    artists: X.artists,
                                    withLink: X.withArtistLink,
                                    lineClamp: er,
                                    captionSize: S,
                                    withContextMenu: B,
                                }),
                        ],
                    }),
                });
            });
        },
        78773: (e, t, i) => {
            'use strict';
            i.d(t, { Xn: () => s, cy: () => r, pE: () => a });
            let a = {
                    yandex: {
                        regions: ['RU', 'BY', 'KZ', 'UZ'],
                        regionLangs: {
                            RU: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            BY: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            KZ: { langs: ['kk', 'en', 'ru', 'uz'], defaultLang: 'kk' },
                            UZ: { langs: ['uz', 'en', 'ru', 'kk'], defaultLang: 'uz' },
                        },
                        langs: ['ru', 'en', 'uz', 'kk'],
                        defaultLang: 'ru',
                    },
                    yango: {
                        regions: ['AE', 'BH', 'EG', 'IQ', 'JO', 'KW', 'OM', 'QA', 'SA'],
                        regionLangs: {
                            AE: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            BH: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            EG: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            IQ: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            JO: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            KW: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            OM: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            QA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            SA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                        },
                        langs: ['en', 'ar'],
                        defaultLang: 'en',
                    },
                },
                r = 'yandex',
                s = 'ru-RU';
        },
        79422: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s });
            var a = i(74631),
                r = i(71035);
            let s = () => {
                let e = (0, a.useRef)(new Map());
                return (
                    (0, a.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, r.c)((t, i) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, i), i)))
                );
            };
        },
        80461: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => a });
            var a = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        82967: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => v });
            var a = i(25839),
                r = i(82298),
                s = i(88204),
                n = i(74631),
                l = i(61493),
                o = i(54880),
                c = i(50209),
                d = i(27954),
                u = i(6349),
                m = i(62661),
                _ = i(2096),
                p = i(77737),
                h = i(69730),
                g = i(7929),
                x = i.n(g);
            let v = (0, s.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: s,
                        className: g,
                        withDNDBlock: v,
                        isDragging: f,
                        draggingClassName: k,
                        ignoreDislikedStyles: A,
                        withSecondaryColor: C,
                        handleRemove: y,
                        withDislike: T,
                        withTrailer: b = !0,
                        beforeTitle: N,
                        removeButtonAriaLabel: S,
                        hideControls: j,
                    } = e,
                    L = (0, c.D)({ playContextParams: s, entityId: i.entityId }),
                    {
                        settings: { isMobile: E },
                    } = (0, d.g)(),
                    I = (0, o.X)(i.trackSource, { isMobile: E }),
                    w = (0, n.useCallback)(
                        (e) =>
                            (0, a.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: x().playButtonCell,
                                ignoreDislikedStyles: A,
                                radius: 'xs',
                                ...e,
                            }),
                        [A, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, a.jsx)(h.C, {
                    className: (0, r.$)(g, { [x().trackWithDots]: v, [x().important]: v }),
                    track: i,
                    beforeBlock: v ? (0, a.jsx)(m.O, { className: (0, r.$)(x().dots, k), isDragging: f }) : void 0,
                    meta: (0, a.jsx)(p.j, { withArtistLink: I, beforeTitle: N, track: i, ignoreDislikedStyles: A, withSecondaryColor: C }),
                    playButtonCellRender: w,
                    controls: (0, a.jsx)(_.Q, {
                        track: i,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: A,
                        utmLink: null == (t = s.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: C,
                        handleRemove: y,
                        withDislike: T,
                        withTrailer: b,
                        removeButtonAriaLabel: S,
                        hideControls: j,
                    }),
                    ...L,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        84e3: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => s });
            var a = i(36484),
                r = i(62562);
            let s = () => (0, r.N)().get(a.Zf);
        },
        85957: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        86166: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { $: () => a }),
                (function (e) {
                    ((e.RU = 'ru'),
                        (e.EN = 'en'),
                        (e.UK = 'uk'),
                        (e.BE = 'be'),
                        (e.KK = 'kk'),
                        (e.HY = 'hy'),
                        (e.AZ = 'az'),
                        (e.KA = 'ka'),
                        (e.HE = 'he'),
                        (e.UZ = 'uz'),
                        (e.TG = 'tg'),
                        (e.TR = 'tr'),
                        (e.JA = 'ja'),
                        (e.ZH = 'zh'),
                        (e.KO = 'ko'),
                        (e.TH = 'th'),
                        (e.ID = 'id'),
                        (e.DE = 'de'),
                        (e.EL = 'el'),
                        (e.RO = 'ro'),
                        (e.MO = 'mo'),
                        (e.AR = 'ar'));
                })(a || (a = {})));
        },
        87018: (e) => {
            e.exports = {
                root: 'ArtistTracksPage_root__ad3rI',
                footer: 'ArtistTracksPage_footer__KN2i_',
                scrollContainer: 'ArtistTracksPage_scrollContainer__9iO2g',
                important: 'ArtistTracksPage_important__iulth',
                content: 'ArtistTracksPage_content__6LJJd',
                shimmerItem: 'ArtistTracksPage_shimmerItem__136_r',
            };
        },
        89221: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => d });
            var a = i(13580),
                r = i(74631),
                s = i(78773),
                n = i(28869),
                l = i(14514),
                o = i(55040);
            let c = (0, r.cache)(async (e) => (0, o.M)(e, o.X)),
                d = async (e) => {
                    let t = (e || n.E.getDefaultLocale()).language,
                        i = (0, l.k)(s.pE[s.cy], t),
                        r = await c(i);
                    return (e, t) => {
                        let s = null == r ? void 0 : r[e.id],
                            n = '';
                        return ((Array.isArray(s) || 'string' == typeof s) && (n = new a.S(s, i).format(t)), Array.isArray(n) ? n.join('') : n);
                    };
                };
        },
        89514: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
        90780: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var a = i(25839),
                r = i(74631),
                s = i(61493),
                n = i(4254),
                l = i(44408),
                o = i.n(l);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [l, c] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    l)
                )
                    return l.map((e, t) =>
                        (0, a.jsx)(
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
            i.d(t, { T: () => l });
            var a = i(25839),
                r = i(88204),
                s = i(3163),
                n = i(73182);
            let l = (0, r.PA)((e) => {
                let { album: t, closeToast: i, withLink: r } = e,
                    l = (0, n.b)(t.type);
                return (0, a.jsx)(s.O, {
                    closeToast: i,
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
        95445: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => s });
            var a = i(25895);
            let r = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                s = function (e, t) {
                    for (var i = arguments.length, s = Array(i > 2 ? i - 2 : 0), n = 2; n < i; n++) s[n - 2] = arguments[n];
                    let [l] = s,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != l ? l : {}), options: e }),
                        d = {},
                        { href: u } = (0, a.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(r)) {
                        let { href: i } = (0, a.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        d[e] = i;
                    }
                    return { canonical: u, languages: d };
                };
        },
        97805: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => h });
            var a = i(25839),
                r = i(3718),
                s = i(82298),
                n = i(74631),
                l = i(39004),
                o = i(23976),
                c = i(47399),
                d = i.n(c);
            let u = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: r } = (0, l.A)(),
                    c = (0, n.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                return (0, a.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(d().root, i),
                    children: [
                        (0, a.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, a.jsx)('div', { className: d().coverContainer, children: (0, a.jsx)(o.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, a.jsx)('div', { className: d().textContainer, children: (0, a.jsx)(o.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, a.jsx)(o.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var m = i(64813),
                _ = i.n(m);
            let p = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: r } = (0, l.A)(),
                        c = (0, n.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                    return (0, a.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, s.$)(_().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, a.jsx)(o.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, a.jsx)('div', { className: _().textContainer, children: (0, a.jsx)(o.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, a.jsx)(o.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                h = (e) => {
                    let { isActive: t, variant: i, className: s } = e;
                    switch (i) {
                        case r.X.PLAYLIST:
                            return (0, a.jsx)(p, { isActive: t, className: s });
                        case r.X.ALBUM:
                            return (0, a.jsx)(u, { isActive: t, className: s });
                    }
                };
        },
        99401: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => b });
            var a = i(25839),
                r = i(82298),
                s = i(88204),
                n = i(39004),
                l = i(93588),
                o = i(43354),
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
            let d = (e, t, i) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: i, tld: a, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, a, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, a, i) },
                    };
                };
            var m = i(10959),
                _ = i(89514);
            let p = (e) => e(new Date(), (0, _.m)());
            var h = i(96433),
                g = i(27954),
                x = i(400),
                v = i.n(x),
                f = i(61493),
                k = i(4254),
                A = i(97522);
            let C = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(v().copyrights, t),
                        'data-test-id': f.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(k.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, a.jsx)(A.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': f.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(k.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(A.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': f.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                y = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, a.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: v().list,
                                'data-test-id': f.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: r } = e;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, a.jsx)(A.N, { target: '_blank', href: r, className: v().link, 'data-test-id': f.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, a.jsx)(k.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': f.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('footer', {
                        className: (0, r.$)(v().root, v().important, t),
                        'data-test-id': f.S7.FOOTER,
                        children: [(0, a.jsx)(y, { links: i.links, disclaimer: i.disclaimer }), (0, a.jsx)(C, { data: i.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: r, formatMessage: s } = (0, n.A)(),
                    { language: l } = (0, h.h)(),
                    o = u({ formatMessage: s, language: l, tld: i.tld, year: p(r) });
                return (0, a.jsx)(C, { className: t, data: o });
            });
            let b = (0, s.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: s, location: _, user: x } = (0, g.g)(),
                    { formatDate: f, formatMessage: k } = (0, n.A)(),
                    { isEnabled: A } = null != (t = (0, o.P)()) ? t : {},
                    { language: C } = (0, h.h)(),
                    y = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: a, language: r, tld: s, userRegion: n, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: a, language: r, userRegion: s } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, a, r) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, a, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, a, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, a, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, a, r) },
                                    _ = [n, o, u];
                                return (i && 'ru' === s && _.push(l), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: a, language: r, tld: s, userRegion: n }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: i, language: r, tld: s, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: k,
                        isWebApplication: l.$3,
                        tld: _.tld,
                        language: C,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(f),
                    });
                return (0, a.jsx)(T, { className: (0, r.$)({ [v().root_withOffsetForDeeplink]: A }, i), data: y });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 8803, 6749, 6392, 6287, 3472, 2121, 9122, 3112, 3146, 6706, 4771, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1251, 1817, 6215, 3257, 3580, 2038, 4163,
                3246, 3482, 6680, 2247, 4345, 8836, 820, 4434, 48, 862, 1808, 4475, 5056, 7358,
            ],
            () => e((e.s = 6630)),
        ),
            (_N_E = e.O()));
    },
]);
