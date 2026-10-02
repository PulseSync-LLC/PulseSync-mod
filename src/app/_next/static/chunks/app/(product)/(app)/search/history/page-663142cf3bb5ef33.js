(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5160],
    {
        1797: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var r = i(40207);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        2493: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            var r = i(39004),
                a = i(38977);
            let s = (e, t) => {
                let { formatMessage: i } = (0, r.A)(),
                    { hours: s, minutes: n, seconds: o } = (0, a.e)(e),
                    { hours: l, minutes: d, seconds: c } = (0, a.e)(t);
                return i(
                    { id: 'non-music.non-music-progress' },
                    { progress: Math.round((e / t) * 100), beginHours: s, beginMinutes: n, beginSeconds: o, endHours: l, endMinutes: d, endSeconds: c },
                );
            };
        },
        3669: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => x });
            var r = i(74631),
                a = i(67379),
                s = i(17850),
                n = i(59450),
                o = i(49656),
                l = i(84e3),
                d = i(58069),
                c = i(20258),
                u = i(26742),
                m = i(25195),
                p = i(37314),
                _ = i(25488),
                v = i(97952),
                h = i(10764),
                f = i(72594);
            let x = () => {
                let e = (0, l.U)(),
                    t = (0, n.st)(),
                    { hash: i } = (0, n.gf)(),
                    { pageId: x, displayReasonId: y } = (0, v.$)(),
                    { tabId: g, tabPos: b, isTabSelectedByDefault: C } = (0, f.R)(),
                    { offsetBlockPosY: T } = (0, m.u)(),
                    { blockType: A, blockId: j, blockPosX: S, blockPosY: k, mainObjectId: P, mainObjectType: I, displayReasonId: N } = (0, u.N)(),
                    { filterKey: O, filterValue: E, filterPos: R } = (0, p.G)(),
                    { objectType: L, objectsCount: w, objectId: M, objectPosX: D, objectPosY: B } = (0, _.J)(),
                    { skeleton: z } = (0, h.b)(),
                    F = null != N ? N : y,
                    H = (0, o.L)(() => (void 0 !== T && void 0 !== k ? T + k : k));
                return (0, r.useCallback)(
                    (r, n) => {
                        if (!t || !x || !c.xK.includes(x) || !c.fD.includes(x)) return;
                        let o = d.F[x];
                        if (!o) return;
                        let l = {
                            hash: i,
                            pageId: o,
                            entityType: A,
                            entityId: j,
                            entityPosX: S,
                            entityPosY: H,
                            objectsCount: w,
                            viewUuid: n,
                            objectType: L,
                            objectId: M,
                            objectPosX: D,
                            objectPosY: B,
                        };
                        (void 0 !== O && ((l.filterKey = O), (l.filterValue = E), (l.filterPos = R)),
                            c.qG.includes(x) && ((l.tabId = g), (l.tabPos = b), (l.isTabSelectedByDefault = C)),
                            z && (l.skeletonId = z),
                            'string' == typeof P && 'string' == typeof I && ((l.mainObjectType = I), (l.mainObjectId = P)),
                            F && (l.displayReasonId = F));
                        let u = (0, a.F)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (r ? (0, s.Pf)(t.evgenInstance, u) : (0, s.nv)(t.evgenInstance, u));
                    },
                    [t, F, j, S, H, A, O, R, E, i, C, e, P, I, M, D, B, L, w, x, z, g, b],
                );
            };
        },
        3912: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => w });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(84059),
                o = i(74631),
                l = i(39004),
                d = i(8487),
                c = i(87138),
                u = i(61493),
                m = i(71035),
                p = i(49656),
                _ = i(3392),
                v = i(4254),
                h = i(24574),
                f = i(79276),
                x = i(40207),
                y = i(85686),
                g = i(27954),
                b = i(19410),
                C = i(12929),
                T = i(62926),
                A = i(97522),
                j = i(74245),
                S = i(81024),
                k = i(85251),
                P = i(91171),
                I = i(87221),
                N = i(30408),
                O = i(12752),
                E = i.n(O),
                R = i(43910),
                L = i.n(R);
            let w = (0, s.PA)((e) => {
                var t, i, s, O, R, w, M;
                let {
                        track: D,
                        className: B,
                        withPodcastName: z,
                        withDate: F,
                        withSecondaryColor: H = !1,
                        withListeningProgress: U = !1,
                        captionSize: V = 'm',
                        explicitSize: Y = 'xs',
                        withExplicitMark: K,
                        titleContainerClassName: W,
                        textClassName: $,
                        playContextParams: G,
                        withTimeLeftText: q = !0,
                        ignoreDislikedStyles: X,
                        withCustomTooltip: Z = !0,
                        withSavingQueryParams: J,
                        beforeTitle: Q,
                        afterTitle: ee,
                        titleLineClamp: et = 1,
                        podcastMetaClassName: ei,
                        progressClassName: er,
                        withAlbumTitleLink: ea,
                    } = e,
                    {
                        fullscreenPlayer: es,
                        sonataState: en,
                        slam: eo,
                        settings: { isMobile: el },
                    } = (0, g.g)(),
                    { formatMessage: ed } = (0, l.A)(),
                    ec = (0, P.$)({ withCustomTooltip: Z }),
                    eu = (0, n.useSearchParams)(),
                    em = (0, y.Z)(null != (w = null == (t = D.mainAlbum) ? void 0 : t.url) ? w : ''),
                    ep = (0, o.useMemo)(() => {
                        var e;
                        let t = ed({ id: 'entity-names.podcast-name' }, { podcastName: D.title });
                        return ''.concat(t, ' ').concat(null != (e = D.version) ? e : '');
                    }, [ed, D.title, D.version]),
                    e_ = !!(U && G && D.shouldRememberPosition && D.streamProgress && D.durationMs),
                    ev =
                        D.id === (null == (i = en.entityMeta) ? void 0 : i.id) &&
                        (null == (O = en.entityMeta) || null == (s = O.streamProgress) ? void 0 : s.endPositionSec),
                    eh = (0, N.d)(e_, D.streamProgress, ev),
                    ef = ((e, t) => {
                        let {
                                isMobile: i,
                                isOfflineModeEnabled: r,
                                mainAlbum: a,
                                shouldHidePodcastInfo: s,
                                withPodcastName: n,
                                withDate: o,
                                withExplicitMark: l,
                                withAlbumTitleLink: d,
                                query: c,
                            } = t,
                            u = (0, k.q)(e, { isMobile: i, isOfflineModeEnabled: r, query: c }),
                            m = (null == l || l) && e.disclaimers ? (0, j.DQ)(e.disclaimers) : null,
                            p = null != n && n && !s ? a : null,
                            _ = p && (null == d || d) ? (0, S.L)(p.id) : null,
                            v = (null == o || o) && !s ? e.pubDate : void 0,
                            h = e.pubDate ? new Date(e.pubDate) : new Date(),
                            x = (0, f.L)(h),
                            y = !!(v && [f.r.TODAY, f.r.YESTERDAY].includes(x));
                        return { ...u, explicitMark: m, album: p, albumLink: _, pubDate: v, dateType: x, isSoonDate: y };
                    })(D, {
                        isMobile: el,
                        isOfflineModeEnabled: eo.isOfflineModeEnabled,
                        mainAlbum: D.mainAlbum,
                        shouldHidePodcastInfo: eh,
                        withPodcastName: z,
                        withDate: F,
                        withExplicitMark: K,
                        withAlbumTitleLink: ea,
                        query: J ? Object.fromEntries(eu) : void 0,
                    }),
                    ex = (0, x.l)({ entity: null != (M = D.mainAlbum) ? M : null, entityType: C.n.PODCAST, callback: em }),
                    ey = (0, m.c)((e) => {
                        (es.modal.isOpened && es.modal.close(), ex(e));
                    }),
                    eg = (0, I.O)({ track: D, withSavingQueryParams: J, entityType: C.n.PODCAST }),
                    eb = (0, o.useCallback)(() => {
                        switch (ef.dateType) {
                            case f.r.TODAY:
                                return (0, r.jsx)(d.A, { id: 'interface-actions.date-today' });
                            case f.r.YESTERDAY:
                                return (0, r.jsx)(d.A, { id: 'interface-actions.date-yesterday' });
                            case f.r.DATE_WITH_YEAR:
                                return (0, r.jsx)(c.XU, { value: ef.pubDate, month: 'long', day: 'numeric', year: 'numeric' });
                            default:
                                return (0, r.jsx)(c.XU, { value: ef.pubDate, month: 'long', day: 'numeric' });
                        }
                    }, [ef.pubDate, ef.dateType]),
                    eC = (0, o.useCallback)(
                        (e) =>
                            (0, r.jsx)(_.m_, {
                                enabled: ec && !el,
                                offsetOptions: 4,
                                placement: 'top',
                                text: D.title,
                                hoverSettings: b.V,
                                children: (0, r.jsx)(v.HL, {
                                    className: E().title,
                                    type: 'entity',
                                    size: V,
                                    variant: 'span',
                                    title: ec ? void 0 : D.title,
                                    ...e,
                                    children: D.title,
                                }),
                            }),
                        [el, ec, V, D.title],
                    ),
                    eT = null == (R = ef.link) ? void 0 : R.href,
                    eA = (0, o.useMemo)(
                        () =>
                            ef.shouldShowRemovedTitle
                                ? (0, r.jsx)(_.m_, {
                                      enabled: ec && !el,
                                      offsetOptions: 4,
                                      placement: 'top',
                                      text: ed({ id: 'track-title.podcast-not-found' }),
                                      hoverSettings: b.V,
                                      children: (0, r.jsx)('span', { children: (0, r.jsx)(d.A, { id: 'track-title.podcast-not-found' }) }),
                                  })
                                : void 0 !== eT
                                  ? (0, r.jsx)(A.N, {
                                        onClick: eg,
                                        className: E().albumLink,
                                        href: eT,
                                        'aria-label': ep,
                                        title: ec ? void 0 : D.title,
                                        'data-test-id': u.Kq.track.TRACK_TITLE,
                                        children: eC(),
                                    })
                                  : eC({ 'data-test-id': u.Kq.track.TRACK_TITLE }),
                        [el, ef.shouldShowRemovedTitle, eT, D.title, eC, ec, ed, eg, ep],
                    ),
                    ej = (0, p.L)(() => {
                        let e = ef.album;
                        if (!e) return;
                        let t = (0, r.jsx)(_.m_, {
                            enabled: ec && !el,
                            offsetOptions: 4,
                            placement: 'top',
                            text: e.title,
                            hoverSettings: b.V,
                            children: (0, r.jsx)(v.HL, { variant: 'span', type: 'entity', size: V, className: E().albumTitle, children: e.title }),
                        });
                        return ef.albumLink
                            ? (0, r.jsx)(A.N, {
                                  'aria-label': ed({ id: 'entity-names.podcast-name' }, { podcastName: e.title }),
                                  className: E().link,
                                  href: ef.albumLink.href,
                                  title: ec ? void 0 : e.title,
                                  onClick: ey,
                                  'data-test-id': u.Kq.track.TRACK_PARENT_PODCAST_TITLE,
                                  children: t,
                              })
                            : (0, r.jsx)('span', { 'data-test-id': u.Kq.track.TRACK_PARENT_PODCAST_TITLE, children: t });
                    });
                return (0, r.jsx)('div', {
                    className: (0, a.$)(E().root, { [E().root_disabled]: !D.isAvailable, [E().root_disliked]: D.isDisliked && !X, [E().root_withSecondaryColor]: H }, B),
                    children: (0, r.jsxs)('div', {
                        className: (0, a.$)(E().metaContainer, L().podcastMetaContainer, ei),
                        children: [
                            e_ &&
                                G &&
                                D.streamProgress &&
                                (0, r.jsx)(h.B, {
                                    className: (0, a.$)(L().progress, er, {
                                        [L().progress_withPreviousInfo]: ef.album || ef.pubDate,
                                        [L().progress_disabled]: !D.isAvailable || D.isDisliked,
                                    }),
                                    id: D.id,
                                    albumId: D.albumId,
                                    streamProgress: D.streamProgress,
                                    durationMs: D.durationMs || 0,
                                    playContextParams: G,
                                    withTimeLeftText: q,
                                }),
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(E().titleContainer, W, L().podcastTitleContainer),
                                children: [
                                    (0, r.jsxs)(v.HL, {
                                        className: (0, a.$)(E().text, $),
                                        type: 'entity',
                                        size: V,
                                        variant: 'div',
                                        lineClamp: et,
                                        children: [
                                            Q,
                                            eA,
                                            ef.version &&
                                                (0, r.jsxs)(v.HL, {
                                                    className: (0, a.$)(E().text, E().version),
                                                    type: 'entity',
                                                    size: V,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: ec ? void 0 : ef.version,
                                                    children: ['\xa0', ef.version],
                                                }),
                                        ],
                                    }),
                                    ef.explicitMark &&
                                        (0, r.jsx)(T.N, {
                                            containerClassName: E().explicitMarkContainer,
                                            getDescriptionTexts: D.getDescriptionTexts,
                                            variant: ef.explicitMark,
                                            className: E().explicitMark,
                                            size: Y,
                                            trackId: D.id,
                                        }),
                                    ee,
                                ],
                            }),
                            (ef.album || ef.pubDate) &&
                                (0, r.jsxs)(v.HL, {
                                    type: 'entity',
                                    size: V,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, a.$)(E().text, L().podcastName, $),
                                    children: [
                                        ej,
                                        ef.pubDate &&
                                            (0, r.jsx)(v.HL, {
                                                variant: 'span',
                                                type: 'entity',
                                                size: V,
                                                className: (0, a.$)({
                                                    [L().dateWithName]: !!ef.album,
                                                    [L().soonDate]: ef.isSoonDate,
                                                    [L().dateDisabled]: !D.isAvailable,
                                                    [L().dateDisliked]: D.isDisliked && !X,
                                                }),
                                                children: eb(),
                                            }),
                                    ],
                                }),
                        ],
                    }),
                });
            });
        },
        4111: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        4331: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => U });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(74631),
                o = i(49656),
                l = i(3392),
                d = i(19410),
                c = i(71035),
                u = i(27954),
                m = i(39528);
            let p = (e, t) => {
                let { withLink: i, separator: r } = t,
                    a = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: r, link: a };
            };
            var _ = i(94484),
                v = i.n(_),
                h = i(61493),
                f = i(4254),
                x = i(97522),
                y = i(39004),
                g = i(36619),
                b = i(29481),
                C = i(85686),
                T = i(85743),
                A = i(40207);
            let j = (0, s.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: a, captionSize: s = 'm', allArtistsTitle: n, withCustomTooltip: o, hoverSettings: d } = e,
                        {
                            name: m,
                            link: p,
                            title: _,
                            ariaLabel: v,
                            tooltipText: j,
                            isTooltipEnabled: S,
                            handleNavigate: k,
                        } = ((e) => {
                            var t, i;
                            let { item: r, allArtistsTitle: a, withCustomTooltip: s } = e,
                                { formatMessage: n } = (0, y.A)(),
                                {
                                    track: o,
                                    settings: { isMobile: l },
                                } = (0, u.g)(),
                                d = (0, C.Z)(null != (i = null == (t = r.link) ? void 0 : t.href) ? i : r.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, T.z)(),
                                p = (0, b.N)(),
                                _ = (0, c.c)((e) => {
                                    (l && o.isOpened && o.close(), d(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: r, fullscreenPlayer: a, fullscreenVideoPlayer: s } = (0, u.g)(),
                                        { modal: n } = r;
                                    return (0, A.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (r.reset(), n.close()), a.modal.isOpened && a.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            s.modal.isOpened && (s.modal.close(), s.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: r.artist, callback: _ }),
                                h = (0, c.c)((e) => {
                                    (p({ to: g.AppScreen.ArtistScreen }), null == m || m(), v(e));
                                }),
                                f = a || r.name;
                            return {
                                name: r.name,
                                link: r.link,
                                title: s ? void 0 : f,
                                ariaLabel: r.link ? n({ id: 'entity-names.artist-name' }, { artistName: r.name }) : void 0,
                                tooltipText: f,
                                isTooltipEnabled: !a && s,
                                handleNavigate: h,
                            };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: o });
                    return p
                        ? (0, r.jsx)(x.N, {
                              ...p,
                              'aria-label': v,
                              className: i,
                              onClick: k,
                              title: _,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(l.m_, {
                                  enabled: S,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: j,
                                  hoverSettings: d,
                                  children: (0, r.jsx)(f.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: a, children: m }),
                              }),
                          })
                        : (0, r.jsx)(l.m_, {
                              enabled: S,
                              offsetOptions: 4,
                              placement: 'top',
                              text: j,
                              hoverSettings: d,
                              children: (0, r.jsx)(f.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: a,
                                  title: _,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                S = (e) => {
                    let { group: t, linkClassName: i, captionClassName: a, captionSize: s, allArtistsTitle: o, withCustomTooltip: l, hoverSettings: d } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, r.jsx)(j, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: s,
                                allArtistsTitle: o,
                                withCustomTooltip: l,
                                hoverSettings: d,
                            }),
                            t.decomposed.map((e) =>
                                (0, r.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, r.jsx)(j, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: s,
                                                allArtistsTitle: o,
                                                withCustomTooltip: l,
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
            var k = i(8487),
                P = i(9079);
            let I = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: s } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(P.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(v().spoiler, i),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(k.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var N = i(28631),
                O = i(89761),
                E = i(61912),
                R = i(36286),
                L = i.n(R);
            let w = (0, s.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, r.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, O.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: a, children: t }),
                            (0, r.jsx)(l.ZI, { className: L().tooltipContent, children: i.map((e) => (0, r.jsx)(E.V, { artist: e, className: L().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, n.forwardRef)((e, t) => (0, r.jsx)(w, { forwardRef: t, ...e }));
            var D = i(10820),
                B = i(93510),
                z = i.n(B);
            let F = (0, s.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: s } = (0, y.A)();
                    return (0, r.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, a.$)(z().root, z().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(E.V, { artist: e }, e.id)),
                    });
                }),
                H = (0, s.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [s, l] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, u.g)(),
                        m = (0, c.c)(() => {
                            let e = a.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, o.L)(() =>
                            (0, N.A)(() => {
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
                        return (s || d) && (!d || 1 !== t.length) ? (d ? (0, r.jsx)(F, { artists: t, label: i }) : (0, r.jsx)(M, { artists: t, label: i })) : i;
                }),
                U = (0, s.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: s,
                            linkClassName: m,
                            captionClassName: _,
                            captionSize: h,
                            variant: f = 'breakAll',
                            spoilerComponent: x,
                            ...y
                        } = e,
                        g = ((e) => {
                            var t, i, r;
                            let { separator: a, visibleArtistsCount: s, withLink: o, withComposer: l, artistIdWithoutLink: d, withContextMenu: m } = e,
                                _ = null != (t = e.artists) ? t : [],
                                v = null == (i = e.withAllArtistsTitle) || i,
                                h = null == (r = e.withCustomTooltip) || r,
                                f = (0, n.useRef)(null),
                                [x, y] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: g },
                                } = (0, u.g)(),
                                b = ((!g || 1 === _.length) && m) || !m,
                                C = ((e, t) => {
                                    var i, r, a;
                                    let s = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        n = null == (r = null == t ? void 0 : t.withLink) || r,
                                        o = null != (a = null == t ? void 0 : t.separator) ? a : ', ',
                                        l = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(o),
                                        { visibleArtists: d, hiddenArtistsCount: c } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: r } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => r || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: s, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: d.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: r, separator: a, isFirst: s } = t;
                                                return {
                                                    primary: p(e, { withLink: r, separator: s ? void 0 : a }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = a ? e.separator : '';
                                                        return p(e, { withLink: r, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: o, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: l,
                                        hiddenArtistsCount: c,
                                    };
                                })(_, { separator: a, visibleArtistsCount: x ? void 0 : s, withComposer: l, withLink: !!b && o, artistIdWithoutLink: d }),
                                T = v ? C.allArtistsTitle : '',
                                A = (0, c.c)((e) => {
                                    (y(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: C.groups,
                                hiddenArtistsCount: C.hiddenArtistsCount,
                                allArtistsTitle: T,
                                withCustomTooltip: h,
                                withContextMenu: m,
                                labelRef: f,
                                handleOnSpoilerClick: A,
                                isTooltipEnabled: !!T && h && !m && !g,
                                title: !T || h || m ? void 0 : T,
                            };
                        })(y),
                        b = (0, o.L)(() =>
                            g.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(x)
                                  ? x
                                  : (0, r.jsx)(I, { spoilerClassName: s, spoilerArtistsCount: g.hiddenArtistsCount, handleOnSpoilerClick: g.handleOnSpoilerClick }),
                        ),
                        C = (0, r.jsx)(l.m_, {
                            referenceRef: g.labelRef,
                            enabled: g.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: g.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, r.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(v().root, v()['root_variant_'.concat(f)], { [v().root_clamp]: i && i > 0, [v().ellipsis]: !i }, t),
                                title: g.title,
                                children: [
                                    g.groups.map((e) =>
                                        (0, r.jsx)(
                                            S,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: _,
                                                captionSize: h,
                                                allArtistsTitle: g.allArtistsTitle,
                                                withCustomTooltip: g.withCustomTooltip,
                                                hoverSettings: d.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    b,
                                ],
                            }),
                        });
                    return g.withContextMenu ? (0, r.jsx)(H, { labelRef: g.labelRef, artists: g.artists, label: C }) : C;
                });
        },
        7361: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var r = i(25839),
                a = i(33660),
                s = i(74631),
                n = i(39004),
                o = i(31860),
                l = i(91149),
                d = i(92942),
                c = i(27954),
                u = i(57549),
                m = i(63149);
            let p = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, d.l)(),
                    [p, _] = (0, s.useState)(!1),
                    { formatMessage: v } = (0, n.A)();
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (p) return;
                    let s = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    _(!0);
                    let n = await e.toggleLike();
                    (_(!1),
                        n === o.f.OK
                            ? i((0, r.jsx)(m.T, { artist: s }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, p, v, i]);
            };
        },
        10557: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => S });
            var r = i(25839),
                a = i(10648),
                s = i(57249),
                n = i(82298),
                o = i(88204),
                l = i(13624),
                d = i(74631),
                c = i(61493),
                u = i(50314),
                m = i(71035),
                p = i(49656),
                _ = i(14693),
                v = i(23818),
                h = i(23976),
                f = i(96618),
                x = i(89288);
            let y = (e, t, i) => {
                let r = (r) => {
                    let a = (r + e / 30) % 12,
                        s = t * Math.min(i, 1 - i);
                    return i - s * Math.max(-1, Math.min(a - 3, 9 - a, 1));
                };
                return [r(0), r(8), r(4)];
            };
            var g = i(49337);
            let b = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                return Math.min(i, Math.max(t, e)) / 100;
            };
            var C = i(15283),
                T = i.n(C),
                A = i(49124);
            let j = l.default.default(
                () =>
                    Promise.resolve()
                        .then(i.bind(i, 10648))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = A.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, a.setWasmUrl)(new URL(s, e).href);
            }
            let S = (0, o.PA)((e) => {
                let { agent: t, isPlaying: i } = e,
                    [a, s] = (0, d.useState)(null),
                    { state: o, toggleTrue: l } = (0, _.e)(!1),
                    { state: C, toggleTrue: A, toggleFalse: S } = (0, _.e)(!1),
                    { theme: k } = (0, f.W)(),
                    P = (0, d.useRef)(null),
                    I = t.entityType === u.h.ARTIST,
                    N = t.entityType === u.h.ALBUM || t.entityType === u.h.TRACK || t.entityType === u.h.PLAYLIST,
                    O = t.cover.color,
                    E = t.cover.uri,
                    R = (0, m.c)(async () => {
                        if (o && O && k) {
                            S();
                            let {
                                    color: e,
                                    glow1: i,
                                    glow2: r,
                                } = ((e) => {
                                    let { averageColor: t, theme: i, custom: r } = e,
                                        { h: a, s, l: n } = (0, x.g8)(t);
                                    if (r) {
                                        if (i === g.S.Dark) {
                                            let e = b(s + 5, 50, 100);
                                            return { color: y(a, e, b(n - 40, 12, 25)), glow1: y(a, e, b(n - 5, 45, 60)), glow2: y(a, e, b(n + 35, 80, 90)) };
                                        }
                                        let e = b(s - 2, 50, 100);
                                        return { color: y(a, e, b(n + 43, 80, 95)), glow1: y(a, e, b(n + 5, 45, 75)), glow2: y(a, e, b(n, 35, 55)) };
                                    }
                                    return { color: y(a, (s > 25 ? Math.min(s + 25, 60) : s) / 100, (n > 20 ? Math.min(n + 15, 60) : n) / 100) };
                                })({ averageColor: O, theme: k, custom: !t.entityType }),
                                s = JSON.stringify({
                                    rules: [
                                        { id: 'color', type: 'Color', value: e },
                                        { id: 'glow_1', type: 'Color', value: i },
                                        { id: 'glow_2', type: 'Color', value: r },
                                    ],
                                });
                            (await (null == a ? void 0 : a.setThemeData(s)), A());
                        }
                    }),
                    L = (0, m.c)(() => {
                        (l(), R());
                    });
                ((0, d.useEffect)(() => {
                    i ? null == a || a.play() : null == a || a.pause();
                }, [a, i]),
                    (0, d.useEffect)(() => {
                        R();
                    }, [O, R, k, o]),
                    (0, d.useEffect)(() => {
                        if (a)
                            return (
                                a.setUseFrameInterpolation(!1),
                                a.setRenderConfig({ devicePixelRatio: 0.1 }),
                                a.addEventListener('load', L),
                                () => {
                                    a.removeEventListener('load', L);
                                }
                            );
                    }, [a, L]));
                let w = !o || !C,
                    M = (0, p.L)(() => {
                        if (!P.current) return;
                        let e = I ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(P.current.clientWidth * e, 'px') };
                    });
                return (0, r.jsxs)('div', {
                    ref: P,
                    className: (0, n.$)(T().root, { [T().root_loading]: w }),
                    style: M,
                    'data-test-id': w ? c.OA.vibe.VIBE_AGENT_LOADING_CARD : void 0,
                    children: [
                        (0, r.jsxs)('div', {
                            className: (0, n.$)(T().cover, { [T().cover_round]: I, [T().cover_square]: N, [T().cover_loading]: w }),
                            children: [
                                t.entityType &&
                                    E &&
                                    (0, r.jsx)(v._V, { src: E, size: 200, fit: 'cover', withAvatarReplace: !0, className: T().image, withLoadingIndicator: !1 }),
                                (0, r.jsx)(j, { src: t.animationUri, loop: !0, dotLottieRefCallback: s, className: T().animation }),
                            ],
                        }),
                        (0, r.jsx)(h.W, { className: (0, n.$)(T().shimmer, { [T().shimmer_loading]: w }), isActive: !0, radius: I ? 'round' : 'm' }),
                    ],
                });
            });
        },
        11708: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => s });
            var r = i(74631),
                a = i(39004);
            let s = () => {
                let { formatMessage: e } = (0, a.A)();
                return (0, r.useCallback)(
                    function (t) {
                        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            r = Math.floor(t / 60),
                            a = function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    r = e({ id: 'time.minutes-left' }, { minutes: t });
                                return i ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(r) : r;
                            };
                        if (t < 1) return e({ id: 'time.finished' });
                        if (t < 60)
                            return (function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    r = e({ id: 'time.seconds-left' }, { seconds: t });
                                return i ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(r) : r;
                            })(Math.floor(t), i);
                        if (r < 60) return a(r, i);
                        let s = Math.floor(r / 60),
                            n = r % 60,
                            o = (function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return i ? e({ id: 'time.hours-left' }, { hours: t }) : e({ id: 'time.hours' }, { hours: t });
                            })(s, i);
                        return n > 0 ? ''.concat(o, ' ').concat(a(n)) : o;
                    },
                    [e],
                );
            };
        },
        13232: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => r });
            let r = (0, i(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        13624: (e, t, i) => {
            'use strict';
            i.d(t, { default: () => a.a });
            var r = i(68545),
                a = i.n(r);
        },
        14693: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var r,
                a = i(74631),
                s = {
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                n = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useToggle = void 0));
                let e = (function e(t) {
                    var i = n[t];
                    if (void 0 !== i) return i.exports;
                    var r = (n[t] = { exports: {} });
                    return (s[t](r, r.exports, e), r.exports);
                })(810);
                o.useToggle = (t) => {
                    let [i, r] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        r(t);
                    }, [t]);
                    let a = (0, e.useCallback)(() => {
                            r((e) => !e);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            r(!0);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            r(!1);
                        }, []);
                    return { state: i, toggle: a, setState: r, toggleTrue: s, toggleFalse: n };
                };
            })(),
                o.__esModule);
            var l = o.useToggle;
        },
        15283: (e) => {
            e.exports = {
                root: 'VibeCardView_root__bt_Xt',
                root_loading: 'VibeCardView_root_loading__J8fOe',
                cover: 'VibeCardView_cover__fBDH_',
                cover_round: 'VibeCardView_cover_round__LPs63',
                cover_square: 'VibeCardView_cover_square__C45qF',
                cover_loading: 'VibeCardView_cover_loading__kpdrp',
                shimmer: 'VibeCardView_shimmer__Rp6yh',
                shimmer_loading: 'VibeCardView_shimmer_loading__74dZm',
                animation: 'VibeCardView_animation__x3VEI',
                image: 'VibeCardView_image__5fXOh',
            };
        },
        19410: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        21468: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var r = i(74631),
                a = i(56480);
            function s() {
                return (0, r.useContext)(a.H);
            }
        },
        22106: (e) => {
            e.exports = {
                root: 'ListeningProgress_root__Rvlcn',
                text_withoutTimeLeft: 'ListeningProgress_text_withoutTimeLeft__eAmOF',
                checkIcon: 'ListeningProgress_checkIcon___yh49',
            };
        },
        23976: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => o });
            var r = {
                    5881: (e, t, i) => {
                        function r() {
                            for (var e, t, i = 0, r = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            r,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (r = e(t[i])) && (a && (a += ' '), (a += r));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (i.r(t), i.d(t, { clsx: () => r, default: () => a }));
                        let a = r;
                    },
                    7998: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => r }));
                        let r = {
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
                        var i = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var a = null;
                            if ((void 0 !== r && (a = '' + r), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var s in ((r = {}), t)) 'key' !== s && (r[s] = t[s]);
                            else r = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7141: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Shimmer = void 0));
                        let a = i(4377),
                            s = i(5881),
                            n = r(i(7998));
                        t.Shimmer = function (e) {
                            let { isActive: t, className: i, radius: r = 'm', width: o, height: l, children: d, ...c } = e,
                                u = {};
                            return (
                                void 0 !== o && (u.width = 'string' == typeof o ? o : ''.concat(o, 'px')),
                                void 0 !== l && (u.height = 'string' == typeof l ? l : ''.concat(l, 'px')),
                                (0, a.jsx)('div', {
                                    className: (0, s.clsx)(n.default.root, n.default['root_radius_'.concat(r)], { [n.default.root_active]: t }, i),
                                    'aria-live': t ? 'polite' : 'off',
                                    'aria-busy': t,
                                    ...c,
                                    style: u,
                                    children: d,
                                })
                            );
                        };
                    },
                },
                a = {};
            function s(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var i = (a[e] = { exports: {} });
                return (r[e].call(i.exports, i, i.exports, s), i.exports);
            }
            ((s.d = (e, t) => {
                for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
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
            var o = n.q;
            n.X;
        },
        24574: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => g });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(74631),
                o = i(8487),
                l = i(61493),
                d = i(28068),
                c = i(66738),
                u = i(4254),
                m = i(16886),
                p = i(50209),
                _ = i(30296),
                v = i(27954),
                h = i(2493),
                f = i(11708),
                x = i(22106),
                y = i.n(x);
            let g = (0, s.PA)((e) => {
                var t, i, s, x, g, b, C, T, A;
                let { className: j, id: S, albumId: k, streamProgress: P, durationMs: I, playContextParams: N, withTimeLeftText: O = !0, isFinishedLabelHidden: E } = e,
                    R = (0, _.e)(),
                    { sonataState: L, album: w } = (0, v.g)(),
                    M = Math.floor(I / 1e3),
                    [D, B] = (0, n.useState)(!1),
                    z = (0, f.$)(),
                    { isPlaying: F, isCurrent: H } = (0, p.D)({ playContextParams: N, entityId: k ? ''.concat(S, ':').concat(k) : S });
                ((0, n.useEffect)(() => {
                    if (!H) return void B(!1);
                    let e =
                        null == R
                            ? void 0
                            : R.state.playerState.status.onChange(() => {
                                  (null == R ? void 0 : R.state.playerState.status.value) === m.MT.BUFFERING && B(!0);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [R, P, H, F]),
                    (0, n.useEffect)(() => {
                        var e;
                        (null == w || null == (e = w.meta) ? void 0 : e.listeningFinished)
                            ? (P.updateEndPositionSec(0), P.updateEverFinished(!0))
                            : (null == w ? void 0 : w.allTracksUnfinished) && P.updateEverFinished(!1);
                    }, [P, null == w ? void 0 : w.allTracksUnfinished, null == w || null == (t = w.meta) ? void 0 : t.listeningFinished]),
                    (0, n.useEffect)(() => {
                        var e, t;
                        (H &&
                            (null == L || null == (e = L.entityMeta) ? void 0 : e.streamProgress) &&
                            P &&
                            L.entityMeta.streamProgress.hasEverFinished !== P.hasEverFinished &&
                            P.updateEverFinished(!!L.entityMeta.streamProgress.hasEverFinished),
                            M - ((null == P ? void 0 : P.endPositionSec) || 0) < 1 &&
                                ((null == L || null == (t = L.entityMeta) ? void 0 : t.streamProgress) &&
                                    H &&
                                    (L.entityMeta.streamProgress.updateEverFinished(!0), L.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == P || P.updateEverFinished(!0)));
                    }, [
                        H,
                        null == L || null == (i = L.entityMeta) ? void 0 : i.streamProgress,
                        null == L || null == (x = L.entityMeta) || null == (s = x.streamProgress) ? void 0 : s.hasEverFinished,
                        P,
                        P.hasEverFinished,
                        P.endPositionSec,
                        M,
                    ]),
                    (0, n.useEffect)(() => {
                        if (!H) return;
                        let e =
                            null == R
                                ? void 0
                                : R.state.playerState.progress.onChange(() => {
                                      var e;
                                      let t = R.state.playerState.progress.value,
                                          i = null == L || null == (e = L.entityMeta) ? void 0 : e.streamProgress;
                                      (0 !== t.position && D && P.updateEndPositionSec(t.position),
                                          H &&
                                              parseInt(''.concat(null == i ? void 0 : i.endPositionSec), 10) !== parseInt(''.concat(t.position), 10) &&
                                              (null == i || i.updateEndPositionSec(t.position)));
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [R, P, H, F, D, S, null == L ? void 0 : L.entityMeta]));
                let U = (H && (null == L || null == (b = L.entityMeta) || null == (g = b.streamProgress) ? void 0 : g.endPositionSec)) || P.endPositionSec,
                    V = (0, h.m)(null != U ? U : 0, M),
                    Y = (0, n.useMemo)(() => {
                        var e, t, i;
                        if (
                            ((H && (null == L || null == (t = L.entityMeta) || null == (e = t.streamProgress) ? void 0 : e.hasEverFinished)) ||
                                (null == P ? void 0 : P.hasEverFinished) ||
                                (null == w || null == (i = w.meta) ? void 0 : i.listeningFinished)) &&
                            !E
                        )
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(u.HL, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, a.$)(y().text, { [y().text_withoutTimeLeft]: !O }),
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_TEXT,
                                        children: (0, r.jsx)(o.A, { id: 'time.finished' }),
                                    }),
                                    (0, r.jsx)(c.I, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: y().checkIcon,
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_ICON,
                                    }),
                                ],
                            });
                        if (!U || 0 === U) return;
                        let s = M - U,
                            n = z(s);
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(u.HL, {
                                    lineClamp: 1,
                                    variant: 'div',
                                    className: (0, a.$)(y().text, { [y().text_withoutTimeLeft]: !O }),
                                    'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT,
                                    children: n,
                                }),
                                s > 1 || E
                                    ? (0, r.jsx)(d.q, {
                                          'aria-valuetext': V,
                                          'aria-busy': H && F,
                                          value: U,
                                          max: M,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS,
                                      })
                                    : (0, r.jsx)(c.I, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: y().checkIcon,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_ICON,
                                      }),
                            ],
                        });
                    }, [
                        M,
                        null == P ? void 0 : P.hasEverFinished,
                        O,
                        z,
                        H,
                        F,
                        null == L || null == (T = L.entityMeta) || null == (C = T.streamProgress) ? void 0 : C.hasEverFinished,
                        null == w || null == (A = w.meta) ? void 0 : A.listeningFinished,
                        E,
                        U,
                        V,
                    ]);
                return (0, r.jsx)('div', { className: (0, a.$)(y().root, j), 'data-test-id': l.OA.track.LISTENING_PROGRESS, children: Y });
            });
        },
        26115: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s });
            var r = i(40207),
                a = i(12929);
            let s = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: s } = e;
                return (0, r.l)({ entity: t, entityType: a.n.TRACK, callback: i, onReject: s, preventDefaultWhenSafe: !1 });
            };
        },
        28152: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 85680));
        },
        29282: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => s });
            var r = i(36484),
                a = i(62562);
            let s = () => (0, a.N)().get(r.SX);
        },
        30408: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => a });
            var r = i(27954);
            let a = (e, t, i) => {
                let {
                    settings: { isMobile: a },
                } = (0, r.g)();
                return !!(a && e && (((null == t ? void 0 : t.endPositionSec) && t.endPositionSec > 0) || (null == t ? void 0 : t.hasEverFinished) || (i && i > 0)));
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
        38726: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var r = i(25839),
                a = i(88204),
                s = i(61493),
                n = i(66738),
                o = i(10820),
                l = i(77174),
                d = i(27954);
            let c = (0, a.PA)((e) => {
                let { isLiked: t, onClick: i, className: a, iconClassName: c, albumType: u, disabled: m } = e,
                    { user: p } = (0, d.g)(),
                    _ = t ? 'liked' : 'like',
                    v = (0, l.$)(t, u);
                return (0, r.jsx)(o.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, r.jsx)(n.I, { className: c, variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !p.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: v,
                });
            });
        },
        39528: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => a });
            var r = i(25895);
            let a = (e) => (0, r.u)('/artist/:artistId', { params: { artistId: e } });
        },
        41459: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => s });
            var r = i(74631),
                a = i(39004);
            let s = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let r = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(i);
                }, [t, e]);
            };
        },
        41544: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => S });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(84059),
                o = i(74631),
                l = i(39004),
                d = i(8487),
                c = i(61493),
                u = i(49656),
                m = i(3392),
                p = i(4254),
                _ = i(4331),
                v = i(85743),
                h = i(27954),
                f = i(19410),
                x = i(12929),
                y = i(62926),
                g = i(97522),
                b = i(40846),
                C = i(91171),
                T = i(87221),
                A = i(12752),
                j = i.n(A);
            let S = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: s,
                        albumArtists: A,
                        withExplicitMark: S,
                        withSecondaryColor: k,
                        captionSize: P = 'm',
                        explicitSize: I = 'xxxs',
                        withAllArtistsTitle: N,
                        textClassName: O,
                        artistsClassName: E,
                        ignoreDislikedStyles: R,
                        withCustomTooltip: L = !0,
                        hasLineClamp: w = !0,
                        withSavingQueryParams: M,
                        beforeTitle: D,
                        withArtistLink: B,
                        withTrackLink: z,
                        afterTitle: F,
                        withContextMenuArtists: H,
                    } = e,
                    { formatMessage: U } = (0, l.A)(),
                    { sendNavigateSearchFeedback: V } = (0, v.z)(),
                    {
                        settings: { isMobile: Y },
                        slam: K,
                    } = (0, h.g)(),
                    W = (0, C.$)({ withCustomTooltip: L }),
                    $ = (0, n.useSearchParams)(),
                    G = (0, b.B)(s, {
                        isMobile: Y,
                        isOfflineModeEnabled: K.isOfflineModeEnabled,
                        albumArtists: A,
                        withTrackLink: z,
                        withArtistLink: B,
                        withExplicitMark: S,
                        query: M ? Object.fromEntries($) : void 0,
                    }),
                    q = (0, o.useMemo)(() => {
                        var e;
                        let t = U({ id: 'entity-names.track-name' }, { trackName: s.title });
                        return ''.concat(t, ' ').concat(null != (e = s.version) ? e : '');
                    }, [U, s.title, s.version]),
                    X = (0, T.O)({ track: s, onNavigate: V, withSavingQueryParams: M, entityType: x.n.TRACK }),
                    Z = (0, o.useCallback)(
                        (e) => {
                            var t;
                            let i = ''.concat(G.title, ' ').concat(null != (t = G.version) ? t : '');
                            return (0, r.jsx)(m.m_, {
                                enabled: W && !Y,
                                offsetOptions: 4,
                                placement: 'top',
                                text: i,
                                hoverSettings: f.V,
                                children: (0, r.jsx)(p.HL, {
                                    className: (0, a.$)(j().text, j().title),
                                    type: 'entity',
                                    size: P,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: G.title,
                                }),
                            });
                        },
                        [Y, W, P, G.title, G.version],
                    ),
                    J = (0, u.L)(() => {
                        var e;
                        let t = ''.concat(G.title, ' ').concat(null != (e = G.version) ? e : '');
                        return G.shouldShowRemovedTitle
                            ? (0, r.jsx)(m.m_, {
                                  enabled: W && !Y,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: U({ id: 'track-title.error-not-found' }),
                                  hoverSettings: f.V,
                                  children: (0, r.jsx)(p.HL, {
                                      className: (0, a.$)(j().text, j().title),
                                      type: 'entity',
                                      size: P,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: W ? void 0 : U({ id: 'track-title.error-not-found' }),
                                      children: (0, r.jsx)(d.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : G.link
                              ? (0, r.jsx)(g.N, {
                                    onClick: X,
                                    className: j().albumLink,
                                    href: G.link.href,
                                    'aria-label': q,
                                    title: W ? void 0 : t,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: Z(),
                                })
                              : Z({ 'data-test-id': c.Kq.track.TRACK_TITLE });
                    }),
                    Q = (0, o.useMemo)(() => +!!w, [w]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(j().root, { [j().root_disabled]: !s.isAvailable, [j().root_disliked]: s.isDisliked && !R, [j().root_withSecondaryColor]: k }, t),
                    children: (0, r.jsxs)('div', {
                        className: j().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(j().titleContainer, { [j().titleContainer_withVersion]: s.version }, i),
                                children: [
                                    (0, r.jsxs)(p.HL, {
                                        className: (0, a.$)(j().text, O),
                                        type: 'entity',
                                        size: P,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            D,
                                            J,
                                            G.version &&
                                                (0, r.jsxs)(p.HL, {
                                                    className: (0, a.$)(j().text, j().version),
                                                    type: 'entity',
                                                    size: P,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: W ? void 0 : G.version,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', G.version],
                                                }),
                                        ],
                                    }),
                                    G.explicitMark &&
                                        (0, r.jsx)(y.N, {
                                            containerClassName: j().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: I,
                                            variant: G.explicitMark,
                                            className: j().explicitMark,
                                            trackId: s.id,
                                        }),
                                    F,
                                ],
                            }),
                            G.artists.length > 0 &&
                                (0, r.jsx)(_.i, {
                                    className: (0, a.$)(j().text, { [j().artists]: w }, E, O),
                                    withAllArtistsTitle: N,
                                    linkClassName: (0, a.$)(j().text, j().link),
                                    captionClassName: (0, a.$)(j().text, j().artistCaption),
                                    artists: G.artists,
                                    withLink: G.withArtistLink,
                                    lineClamp: Q,
                                    captionSize: P,
                                    withContextMenu: H,
                                }),
                        ],
                    }),
                });
            });
        },
        42190: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var r = i(25839),
                a = i(35015),
                s = i(3163);
            let n = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(s.O, {
                    entityVariant: a.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        43910: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                dateWithName: 'PodcastMeta_dateWithName__cKy0o',
                podcastMetaContainer: 'PodcastMeta_podcastMetaContainer__pFASj',
                podcastTitleContainer: 'PodcastMeta_podcastTitleContainer__p9Zja',
                podcastName: 'PodcastMeta_podcastName__iQeNK',
                progress: 'PodcastMeta_progress__5DqlO',
                progress_disabled: 'PodcastMeta_progress_disabled__KX04q',
                progress_withPreviousInfo: 'PodcastMeta_progress_withPreviousInfo__eOrCi',
                soonDate: 'PodcastMeta_soonDate__zGuG9',
                dateDisabled: 'PodcastMeta_dateDisabled__DxjtJ',
                dateDisliked: 'PodcastMeta_dateDisliked__95MlL',
            };
        },
        44408: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        46450: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var i in t) Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
                })(t, {
                    bindSnapshot: function () {
                        return n;
                    },
                    createAsyncLocalStorage: function () {
                        return s;
                    },
                    createSnapshot: function () {
                        return o;
                    },
                }));
            let i = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class r {
                disable() {
                    throw i;
                }
                getStore() {}
                run() {
                    throw i;
                }
                exit() {
                    throw i;
                }
                enterWith() {
                    throw i;
                }
                static bind(e) {
                    return e;
                }
            }
            let a = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function s() {
                return a ? new a() : new r();
            }
            function n(e) {
                return a ? a.bind(e) : r.bind(e);
            }
            function o() {
                return a
                    ? a.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        49337: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var r = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        49971: (e, t, i) => {
            'use strict';
            function r(e) {
                let { moduleIds: t } = e;
                return null;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }),
                i(25839),
                i(71910),
                i(65780),
                i(4865));
        },
        50314: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { h: () => r }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(r || (r = {})));
        },
        52512: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(74631),
                a = i(3669),
                s = i(13232);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, r.useRef)(null),
                    o = (0, a.D)(),
                    l = (0, r.useId)(),
                    d = (0, r.useContext)(s.B),
                    c = (0, r.useCallback)(
                        (r, a) => {
                            (e ? e(r, i ? a : void 0) : o(r, a), t && d.unobserveElement(l));
                        },
                        [e, d, l, o, t, i],
                    );
                return (
                    (0, r.useEffect)(
                        () => (
                            d.observeElement({ elementRef: n, elementId: l, callback: c }),
                            () => {
                                d.unobserveElement(l);
                            }
                        ),
                        [e, d, c, l, o],
                    ),
                    { ref: n, intersectionPropertyId: l }
                );
            };
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        56480: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            let r = (0, i(74631).createContext)({ pageAlbumId: void 0 });
        },
        57249: (e, t, i) => {
            'use strict';
            e.exports = i.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        58954: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => v });
            var r = i(25839),
                a = i(36619),
                s = i(68103),
                n = i(91879),
                o = i(28045),
                l = i(51011),
                d = i(18608),
                c = i(68224),
                u = i(32911),
                m = i(98031),
                p = i(95314),
                _ = i(32953);
            let v = (e) => {
                let { item: t, index: i, pageId: v, sendSearchFeedback: h, blockPosition: f = 0, objectPosX: x, objectPosY: y, objectsCount: g } = e;
                switch (t.type) {
                    case s.n.PODCAST_EPISODE:
                        return (0, r.jsx)(
                            p.B,
                            {
                                objectType: a.DomainObjectType.PodcastEpisode,
                                objectId: t.data.id,
                                objectPosX: x,
                                objectPosY: y,
                                objectsCount: g,
                                children: (0, r.jsx)(c.c, { pageId: v, track: t.data }),
                            },
                            t.data.id,
                        );
                    case s.n.UGC_TRACK:
                        return (0, r.jsx)(c.c, { pageId: v, track: t.data });
                    case s.n.TRACK:
                        return (0, r.jsx)(
                            p.B,
                            {
                                objectType: a.DomainObjectType.Track,
                                objectId: t.data.id,
                                objectPosX: x,
                                objectPosY: y,
                                objectsCount: g,
                                children: (0, r.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: h, id: t.data.entityId, type: n.o.TRACK, blockPosition: f, position: i },
                                    children: (0, r.jsx)(c.c, { pageId: v, track: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case s.n.ARTIST:
                        return (0, r.jsx)(
                            p.B,
                            {
                                objectType: a.DomainObjectType.Artist,
                                objectId: t.data.id,
                                objectPosX: x,
                                objectPosY: y,
                                objectsCount: g,
                                children: (0, r.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: h, id: t.data.id, type: n.o.ARTIST, blockPosition: f, position: i },
                                    children: (0, r.jsx)(l.c, { pageId: v, artist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case s.n.PLAYLIST:
                        return (0, r.jsx)(
                            p.B,
                            {
                                objectType: a.DomainObjectType.Playlist,
                                objectId: t.data.id,
                                objectPosX: x,
                                objectPosY: y,
                                objectsCount: g,
                                children: (0, r.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: h, id: t.data.id, type: n.o.PLAYLIST, blockPosition: f, position: i },
                                    children: (0, r.jsx)(d.v, { pageId: v, playlist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case s.n.PODCAST:
                        return (0, r.jsx)(
                            p.B,
                            {
                                objectType: a.DomainObjectType.Podcast,
                                objectId: String(t.data.id),
                                objectPosX: x,
                                objectPosY: y,
                                objectsCount: g,
                                children: (0, r.jsx)(
                                    _.N.Provider,
                                    {
                                        value: { sendSearchFeedback: h, id: t.data.id, type: n.o.PODCAST, blockPosition: f, position: i },
                                        children: (0, r.jsx)(o.M, { pageId: v, album: t.data }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case s.n.ALBUM:
                        return (0, r.jsx)(
                            p.B,
                            {
                                objectType: a.DomainObjectType.Album,
                                objectId: String(t.data.id),
                                objectPosX: x,
                                objectPosY: y,
                                objectsCount: g,
                                children: (0, r.jsx)(
                                    _.N.Provider,
                                    {
                                        value: { sendSearchFeedback: h, id: t.data.id, type: n.o.ALBUM, blockPosition: f, position: i },
                                        children: (0, r.jsx)(o.M, { pageId: v, album: t.data }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case s.n.WAVE: {
                        let e = t.data;
                        return (0, r.jsx)(
                            p.B,
                            {
                                objectType: a.DomainObjectType.Wave,
                                objectId: e.stationId,
                                objectPosX: x,
                                objectPosY: y,
                                objectsCount: g,
                                children: (0, r.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: h, id: e.seedsId, type: n.o.WAVE, blockPosition: f, position: i },
                                    children: (0, r.jsx)(m.H, { vibe: e, cover: e.cover, description: e.description, agentVariant: u.h.SMALL }),
                                }),
                            },
                            e.stationId,
                        );
                    }
                    default:
                        return null;
                }
            };
        },
        59981: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { T: () => r }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(r || (r = {})));
        },
        60924: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => c });
            var r = i(25839),
                a = i(61493),
                s = i(3392),
                n = i(4254),
                o = i(74672),
                l = i.n(o);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: i, title: o, placement: c = 'top', children: u } = e;
                    return (0, r.jsxs)(s.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, r.jsx)(s.ZI, {
                                className: l().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, r.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61561: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            var r = i(27954),
                a = i(44806);
            let s = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: s },
                    experiments: n,
                } = (0, r.g)();
                return (
                    !(null == s ? void 0 : s.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = n.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => y });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(74631),
                o = i(36619),
                l = i(61493),
                d = i(71035),
                c = i(23818),
                u = i(10820),
                m = i(86869),
                p = i(4254),
                _ = i(29481),
                v = i(85686),
                h = i(27954),
                f = i(53454),
                x = i.n(f);
            let y = (0, s.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: s } = (0, h.g)(),
                    f = (0, v.Z)(t.url),
                    g = (0, _.N)(),
                    b = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(y, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    C = (0, d.c)((e) => {
                        (s.modal.isOpened && s.modal.close(), g({ to: o.AppScreen.ArtistScreen }), f(e));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, a.$)(x().root, i),
                            onClick: C,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(m.t, {
                                    radius: 'round',
                                    className: x().cover,
                                    children: (0, r.jsx)(c._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: x().image }),
                                }),
                                (0, r.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        b,
                    ],
                });
            });
        },
        62926: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => h });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(74631),
                o = i(39004),
                l = i(74245),
                d = i(61493),
                c = i(49656),
                u = i(66738),
                m = i(27954),
                p = i(60924),
                _ = i(92870),
                v = i.n(_);
            let h = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: s, containerClassName: _, variant: h, size: f = 'xxxs', ...x } = e,
                    { formatMessage: y } = (0, o.A)(),
                    {
                        settings: { isMobile: g },
                    } = (0, m.g)(),
                    [b, C] = (0, n.useState)(null),
                    T = (0, c.L)(() => {
                        switch (h) {
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
                    A = (0, n.useMemo)(() => y({ id: 'extra-explicit.explicit-mark' }), [y]);
                (0, n.useEffect)(() => {
                    i && i().then(C);
                }, [i, s]);
                let j = (null == b ? void 0 : b.join('\n')) || '',
                    S = !!(null == b ? void 0 : b.length) && !g,
                    k = j.length > 0 ? j : A;
                return (0, r.jsx)(p.k, {
                    description: j,
                    placement: 'bottom-start',
                    enabled: S,
                    children: (0, r.jsx)('span', {
                        className: _,
                        children: (0, r.jsx)(u.I, {
                            className: (0, a.$)(v().explicitMark, t),
                            'aria-label': k,
                            variant: T,
                            size: f,
                            ...x,
                            'data-test-id': d.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        62948: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var r = i(25839),
                a = i(33660),
                s = i(74631),
                n = i(39004),
                o = i(31860),
                l = i(91149),
                d = i(92942),
                c = i(27954),
                u = i(57549),
                m = i(42190);
            let p = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, d.l)(),
                    [p, _] = (0, s.useState)(!1),
                    { formatMessage: v } = (0, n.A)();
                return (0, s.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (p) return;
                    let s = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                    _(!0);
                    let n = await e.toggleLike();
                    (_(!1),
                        n === o.f.OK
                            ? i((0, r.jsx)(m.T, { playlist: s }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t.isAuthorized, p, e, v, i]);
            };
        },
        63149: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => o });
            var r = i(25839),
                a = i(53712),
                s = i(35015),
                n = i(3163);
            let o = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(n.O, {
                    closeToast: i,
                    entityVariant: s.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        65780: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return r.workAsyncStorageInstance;
                    },
                }));
            let r = i(90720);
        },
        68103: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { n: () => r }),
                (function (e) {
                    ((e.ALL = 'all'),
                        (e.TRACK = 'track'),
                        (e.ALBUM = 'album'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.USER = 'user'),
                        (e.UGC_TRACK = 'ugc_track'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.VIDEO = 'video'),
                        (e.LYRICS = 'lyrics'),
                        (e.CLIP = 'clip'),
                        (e.BOOK = 'book'),
                        (e.CONCERT = 'concert'));
                })(r || (r = {})));
        },
        68545: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }));
            let r = i(20567)._(i(89729));
            function a(e, t) {
                var i;
                let a = {};
                'function' == typeof e && (a.loader = e);
                let s = { ...a, ...t };
                return (0, r.default)({ ...s, modules: null == (i = s.loadableGenerated) ? void 0 : i.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        71705: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => v });
            var r = i(25839),
                a = i(39004),
                s = i(71035),
                n = i(21468),
                o = i(91149),
                l = i(92942),
                d = i(27954),
                c = i(57549),
                u = i(33660),
                m = i(74631),
                p = i(31860),
                _ = i(93297);
            let v = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: v },
                    } = (0, d.g)(),
                    { formatMessage: h } = (0, a.A)(),
                    { notify: f } = (0, l.l)(),
                    x = (() => {
                        let { notify: e } = (0, l.l)(),
                            [t, i] = (0, m.useState)(!1),
                            { formatMessage: n } = (0, a.A)();
                        return (0, s.c)(async (a) => {
                            let { album: s, withLink: l = !0, withNotification: d = !0 } = a;
                            if (t) return;
                            let m = { ...(0, u.HO)(s), url: s.url, isLiked: !s.isLiked };
                            i(!0);
                            let v = await s.toggleLike();
                            (i(!1),
                                d &&
                                    (v === p.f.OK
                                        ? e((0, r.jsx)(_.T, { withLink: l, album: m }), { containerId: o.u.INFO })
                                        : e((0, r.jsx)(c.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR })));
                        });
                    })(),
                    { pageAlbumId: y } = (0, n.T)();
                return (0, s.c)(async () => {
                    if (e)
                        return v({ pageAlbumId: y, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? x({ album: e })
                              : void f((0, r.jsx)(c.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                });
            };
        },
        71996: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(25839),
                a = i(74631),
                s = i(39004),
                n = i(61493),
                o = i(4071),
                l = i(66738),
                d = i(49984);
            let c = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: c,
                            iconSize: u,
                            disabled: m,
                            onClick: p,
                            iconClassName: _,
                            className: v,
                            forwardRef: h,
                            style: f,
                            children: x,
                        } = e,
                        { formatMessage: y } = (0, s.A)(),
                        g = y({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(o.$, {
                        className: v,
                        color: 'secondary',
                        radius: c,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': g,
                        onClick: p,
                        ref: h,
                        icon: (0, r.jsx)(l.I, { variant: 'trailer', size: u, className: _ }),
                        disabled: m,
                        'data-intersection-property-id': d.N,
                        style: f,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: x,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(c, { forwardRef: t, ...e }));
        },
        73182: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => s });
            var r = i(56829),
                a = i(35015);
            let s = (e) => {
                switch (e) {
                    case r._.PODCAST:
                        return a.c.PODCAST;
                    case r._.AUDIOBOOK:
                        return a.c.AUDIOBOOK;
                    case r._.FAIRY_TALE:
                        return a.c.FAIRY_TALE;
                    default:
                        return a.c.ALBUM;
                }
            };
        },
        73614: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => n, r: () => o });
            var r = i(74631),
                a = i(39004),
                s = i(56829),
                n = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let o = (e, t) => {
                let { formatMessage: i } = (0, a.A)();
                return (0, r.useMemo)(() => {
                    switch (e) {
                        case s._.SINGLE:
                            return i({ id: 'entity-names.single' });
                        case s._.PODCAST:
                            return i({ id: 'entity-names.podcast' });
                        case s._.AUDIOBOOK:
                            if ('pin' === t) return i({ id: 'entity-names.book' });
                            return i({ id: 'entity-names.audio' });
                        case s._.FAIRY_TALE:
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
        74756: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => w });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(74631),
                o = i(39004),
                l = i(8487),
                d = i(36619),
                c = i(61493),
                u = i(71035),
                m = i(66738),
                p = i(3392),
                _ = i(4254),
                v = i(17545),
                h = i(4071);
            let f = (e) => {
                let { className: t, variant: i = 'text', onClick: a, iconClassName: s, iconSize: l, size: d = 's', ariaLabel: u } = e,
                    { formatMessage: p } = (0, o.A)(),
                    _ = null != u ? u : p({ id: 'play-queue.delete-from-queue' }),
                    v = (0, n.useCallback)(
                        (e) => {
                            (null == a || a(), e.stopPropagation());
                        },
                        [a],
                    );
                return (0, r.jsx)(h.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: d,
                    radius: 'round',
                    'aria-label': _,
                    onClick: v,
                    icon: (0, r.jsx)(m.I, { size: l, className: s, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var x = i(79367),
                y = i(34159),
                g = i(68215),
                b = i(85743),
                C = i(27954),
                T = i(64720),
                A = i(71996),
                j = i(6304),
                S = i(38097),
                k = i(91907),
                P = i(3407),
                I = i(34826),
                N = i.n(I),
                O = i(82684),
                E = i(85957),
                R = i.n(E);
            let L = (0, s.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, o.A)();
                    return t.isDownloaded
                        ? (0, r.jsx)(m.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, r.jsx)(O.A, { value: t.downloadingProgress, size: 16, className: R().downloadingProgress, progressBarClassName: R().progress })
                          : null;
                }),
                w = (0, s.PA)((e) => {
                    var t, i;
                    let {
                            className: s,
                            track: h,
                            withLightning: I,
                            ignoreDislikedStyles: O,
                            onLikeClick: E,
                            utmLink: R,
                            withSecondaryColor: w,
                            handleRemove: M,
                            withTrailer: D = !0,
                            likeIconSize: B = 'xxs',
                            removeButtonAriaLabel: z,
                            hideControls: F,
                        } = e,
                        { user: H, trailer: U } = (0, C.g)(),
                        { formatMessage: V } = (0, o.A)(),
                        { sendLikeSearchFeedback: Y } = (0, b.z)(),
                        [K, W] = (0, n.useState)(!1),
                        [$, G] = (0, n.useState)(!1),
                        q = (0, x.P)(),
                        X = (0, v.K)(h),
                        Z = ((e) =>
                            'number' != typeof e
                                ? null
                                : ((e) => {
                                      let t = Math.round((e || 0) / S.k7);
                                      return (0, k.E)(t);
                                  })(e))(h.durationMs),
                        J = (0, g.P)(Math.round((null != (i = h.durationMs) ? i : 0) / 1e3)),
                        Q = (0, y.F)(),
                        ee = H.hasPlus,
                        et = !h.isRemoved && h.isAvailable && !F,
                        ei = (0, u.c)(async () => {
                            (K || h.isLiked || (W(!0), null == Y || Y()), await X(), null == E || E(h.isLiked));
                        }),
                        er = (0, u.c)((e) => {
                            e.stopPropagation();
                        }),
                        ea = (0, u.c)((e) => {
                            if ((e.stopPropagation(), q())) return void e.preventDefault();
                            (U.openTrackTrailer(h.id), Q(d.DomainObjectType.Track, h.id));
                        }),
                        es = (0, n.useMemo)(() => {
                            if (et)
                                return (0, r.jsx)('div', {
                                    onClick: er,
                                    children: (0, r.jsx)(P._, {
                                        track: h,
                                        open: $,
                                        onOpenChange: G,
                                        placement: 'bottom',
                                        icon: (0, r.jsx)(m.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: R,
                                        className: (0, a.$)(N().contextMenu, { [N().contextMenu_visible]: $ }),
                                        handleRemove: M,
                                        withTrailer: D,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [er, M, $, et, D, h, R]);
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(N().root, N().controls, s, {
                            [N().controls_dislikedControls]: h.isDisliked,
                            [N().controls_dislikedColors]: h.isDisliked && !O,
                            [N().controls_disabled]: !h.isAvailable,
                            [N().root_withSecondaryColor]: w,
                        }),
                        children: [
                            I &&
                                (0, r.jsx)(m.I, {
                                    'aria-label': V({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: N().lightning,
                                    variant: 'lightning',
                                }),
                            h.isUGC &&
                                (0, r.jsxs)(p.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, r.jsx)(m.I, {
                                            'aria-label': V({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: N().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, r.jsx)(p.ZI, { children: (0, r.jsx)(l.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            ee && (0, r.jsx)('div', { className: (0, a.$)(N().item, N().downloadIcon), children: (0, r.jsx)(L, { track: h }) }),
                            M && !F && (0, r.jsx)(f, { size: 'xs', iconSize: 'xxs', className: (0, a.$)(N().item, N().removeButton), onClick: M, ariaLabel: z }),
                            et &&
                                (0, r.jsx)(j.WithOffline, {
                                    fallback: (0, r.jsx)(T.c, {
                                        size: 'xs',
                                        iconSize: B,
                                        className: (0, a.$)(N().item, N().likeIcon),
                                        isLiked: h.isLiked,
                                        onClick: ei,
                                        disabled: !H.isAuthorized,
                                    }),
                                }),
                            (null == (t = h.trailer) ? void 0 : t.isAvailable) &&
                                h.isAvailable &&
                                (0, r.jsx)(j.WithOffline, {
                                    fallback: (0, r.jsx)(A.k, {
                                        className: (0, a.$)(N().item, N().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ea,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(N().item, N().contextMenuWrapper),
                                children: [
                                    null !== Z &&
                                        (0, r.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, a.$)(N().duration, { [N().duration_hidden]: $ && et }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': J,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, r.jsx)('span', { 'aria-hidden': 'true', children: Z }),
                                        }),
                                    es,
                                ],
                            }),
                        ],
                    });
                });
        },
        77174: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => s });
            var r = i(39004),
                a = i(56829);
            let s = (e, t) => {
                let { formatMessage: i } = (0, r.A)();
                if (e)
                    switch (t) {
                        case a._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case a._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case a._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case a._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        77435: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => v });
            var r = i(25839),
                a = i(84059),
                s = i(74631),
                n = i(39004),
                o = i(8487),
                l = i(71035),
                d = i(91149),
                c = i(92942),
                u = i(53712),
                m = i(27954),
                p = i(51790),
                _ = i(57549);
            let v = (e) => {
                let { user: t, search: i } = (0, m.g)(),
                    { formatMessage: v } = (0, n.A)(),
                    { notify: h } = (0, c.l)(),
                    f = (0, a.useRouter)();
                return (
                    (0, s.useEffect)(() => {
                        i.isEmptyHistory && f.push(u.Z.search.href);
                    }, [i.isEmptyHistory, f]),
                    (0, l.c)(() => {
                        try {
                            (t.account.data.uid && i.clearHistory({ userId: t.account.data.uid }),
                                h((0, r.jsx)(p.$, { message: (0, r.jsx)(o.A, { id: 'search.cleared-history' }) }), { containerId: d.u.INFO }),
                                e && e(),
                                f.push(u.Z.search.href));
                        } catch (e) {
                            h((0, r.jsx)(_.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: d.u.ERROR });
                        }
                    })
                );
            };
        },
        79276: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => a, L: () => s });
            let r = (e, t) => e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
            var a = (function (e) {
                return ((e.TODAY = 'today'), (e.YESTERDAY = 'yesterday'), (e.DATE = 'date'), (e.DATE_WITH_YEAR = 'date-with-year'), e);
            })({});
            let s = (e) => {
                let t = new Date();
                if (r(t, e)) return 'today';
                let i = new Date();
                return (i.setDate(i.getDate() - 1), r(i, e)) ? 'yesterday' : t.getFullYear() !== e.getFullYear() ? 'date-with-year' : 'date';
            };
        },
        81024: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => a });
            var r = i(25895);
            let a = (e) => (0, r.u)('/album/:albumId', { params: { albumId: e } });
        },
        85680: (e, t, i) => {
            'use strict';
            i.d(t, { SearchHistoryPage: () => T });
            var r = i(25839),
                a = i(10508),
                s = i(88204),
                n = i(84059),
                o = i(74631),
                l = i(39004),
                d = i(8487),
                c = i(61493),
                u = i(4071),
                m = i(66738),
                p = i(13833),
                _ = i(4254),
                v = i(58954),
                h = i(77435),
                f = i(20258),
                x = i(21784),
                y = i(89192),
                g = i(27954),
                b = i(99256),
                C = i.n(b);
            let T = (0, s.PA)(() => {
                let {
                        search: e,
                        user: t,
                        settings: { isMobile: i },
                    } = (0, g.g)(),
                    { setContentScrollRef: s } = (0, y.g)(),
                    { formatMessage: b } = (0, l.A)(),
                    T = (0, x.W)(),
                    A = (0, o.useRef)(!1),
                    j = (0, o.useRef)(null),
                    S = (0, h.t)(() => {
                        A.current = !0;
                    }),
                    k = e.historyPage.items.length;
                (t.isAuthorized && (0, n.notFound)(),
                    (0, o.useEffect)(() => {
                        j.current && T.canBack && j.current.focus();
                    }, [T.canBack]),
                    (0, o.useEffect)(
                        () => () => {
                            (null == A ? void 0 : A.current) ? (e.resetHistoryItems(), (A.current = !1)) : e.resetHistoryStateRequest();
                        },
                        [e],
                    ));
                let P = (0, o.useMemo)(
                        () =>
                            (0, a.A)(() => {
                                null == T || T.back();
                            }, 200),
                        [T],
                    ),
                    I = (0, o.useMemo)(
                        () =>
                            k
                                ? (0, r.jsx)('div', {
                                      className: C().items,
                                      children: e.historyPage.items.map((e, t) => (0, v.G)({ item: e, index: t, pageId: f._Q.SEARCH })).filter((e) => !!e),
                                  })
                                : (0, r.jsx)(_.HL, {
                                      className: C().emptyHistory,
                                      variant: 'div',
                                      size: 'm',
                                      type: 'text',
                                      children: (0, r.jsx)(d.A, { id: 'search.history-empty' }),
                                  }),
                        [e.historyPage.items, k],
                    );
                return (
                    e.isHistoryReady && t.account.data.uid && (0, o.use)(e.getHistory({ userId: t.account.data.uid })),
                    (0, r.jsx)('div', {
                        className: C().root,
                        'data-test-id': c.Xk.search.SEARCH_HISTORY_PAGE,
                        children: (0, r.jsxs)(p.N, {
                            className: C().scrollContent,
                            containerClassName: C().scrollContainer,
                            ref: s,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: C().header,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: C().title,
                                            children: [
                                                T.canBack &&
                                                    (0, r.jsx)(u.$, {
                                                        ref: j,
                                                        'aria-label': b({ id: 'navigation.go-back' }),
                                                        radius: 'round',
                                                        disabled: !T.canBack,
                                                        size: 's',
                                                        icon: (0, r.jsx)(m.I, { size: 'xxs', variant: 'arrowLeft' }),
                                                        onClick: P,
                                                    }),
                                                (0, r.jsx)(_.DZ, { variant: 'h2', size: i ? 'm' : 'xl', children: (0, r.jsx)(d.A, { id: 'search.history' }) }),
                                            ],
                                        }),
                                        (0, r.jsx)(u.$, {
                                            'aria-label': b({ id: 'search.clear-history' }),
                                            radius: 'xxxl',
                                            variant: 'outline',
                                            disabled: !k,
                                            size: i ? 's' : 'default',
                                            onClick: S,
                                            children: (0, r.jsx)(_.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                type: 'text',
                                                children: (0, r.jsx)(d.A, { id: 'search.clear-history' }),
                                            }),
                                        }),
                                    ],
                                }),
                                !e.isHistoryLoading && I,
                            ],
                        }),
                    })
                );
            });
        },
        85957: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        86209: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => c });
            var r = i(25839),
                a = i(82298),
                s = i(50314),
                n = i(49656),
                o = i(6349),
                l = i(4111),
                d = i.n(l);
            let c = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: l,
                        onPlayButtonClick: c,
                        shouldShowControl: u = !0,
                        playButtonIconSize: m,
                        alt: p,
                        className: _,
                        coverClassName: v,
                        entityCoverClassName: h,
                        controlClassName: f,
                        fallbackIconSize: x,
                    } = e,
                    y = (0, n.L)(() => {
                        if (t.entityType) return t.entityType === s.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, r.jsx)(o.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, a.$)(d().root, d()['root_radius_'.concat(y)], { [d().root_withShadow]: !!t.entityType }, _),
                    radius: y,
                    onPlayButtonClick: c,
                    isPlaying: i,
                    isCurrent: l,
                    alt: p,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: m,
                    fallbackIconSize: x,
                    coverClassName: v,
                    entityCoverClassName: h,
                    controlClassName: f,
                });
            };
        },
        87138: (e, t, i) => {
            'use strict';
            i.d(t, { XU: () => m, YK: () => u });
            var r,
                a,
                s = i(23198),
                n = i(74631),
                o = i(39004);
            (!(function (e) {
                ((e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName'));
            })(r || (r = {})),
                (function (e) {
                    ((e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts'));
                })(a || (a = {})));
            var l = function (e) {
                var t = (0, o.A)(),
                    i = e.value,
                    r = e.children,
                    a = (0, s.__rest)(e, ['value', 'children']);
                return r(t.formatNumberToParts(i, a));
            };
            function d(e) {
                var t = function (t) {
                    var i = (0, o.A)(),
                        r = t.value,
                        a = t.children,
                        n = (0, s.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof r ? new Date(r || 0) : r;
                    return a('formatDate' === e ? i.formatDateToParts(l, n) : i.formatTimeToParts(l, n));
                };
                return ((t.displayName = a[e]), t);
            }
            function c(e) {
                var t = function (t) {
                    var i = (0, o.A)(),
                        r = t.value,
                        a = t.children,
                        l = (0, s.__rest)(t, ['value', 'children']),
                        d = i[e](r, l);
                    if ('function' == typeof a) return a(d);
                    var c = i.textComponent || n.Fragment;
                    return n.createElement(c, null, d);
                };
                return ((t.displayName = r[e]), t);
            }
            function u(e) {
                return e;
            }
            ((l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts'));
            var m = c('formatDate');
            (c('formatTime'), c('formatNumber'), c('formatList'), c('formatDisplayName'), d('formatDate'), d('formatTime'));
        },
        89192: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => a, g: () => s });
            var r = i(74631);
            let a = (0, r.createContext)({
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
                s = () => (0, r.useContext)(a);
        },
        89729: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                }));
            let r = i(25839),
                a = i(74631),
                s = i(95102);
            function n(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            i(49971);
            let o = { loader: () => Promise.resolve(n(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...o, ...e },
                        i = (0, a.lazy)(() => t.loader().then(n)),
                        l = t.loading;
                    function d(e) {
                        let n = l ? (0, r.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            o = !t.ssr || !!t.loading,
                            d = o ? a.Suspense : a.Fragment,
                            c = t.ssr
                                ? (0, r.jsxs)(r.Fragment, { children: [null, (0, r.jsx)(i, { ...e })] })
                                : (0, r.jsx)(s.BailoutToCSR, { reason: 'next/dynamic', children: (0, r.jsx)(i, { ...e }) });
                        return (0, r.jsx)(d, { ...(o ? { fallback: n } : {}), children: c });
                    }
                    return ((d.displayName = 'LoadableComponent'), d);
                };
        },
        90720: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }));
            let r = (0, i(46450).createAsyncLocalStorage)();
        },
        90780: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => d });
            var r = i(25839),
                a = i(74631),
                s = i(61493),
                n = i(4254),
                o = i(44408),
                l = i.n(o);
            let d = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [o, d] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
                        t && t().then(d);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, r.jsx)(
                            n.HL,
                            {
                                className: l().descriptionTextItem,
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
            i.d(t, { T: () => o });
            var r = i(25839),
                a = i(88204),
                s = i(3163),
                n = i(73182);
            let o = (0, a.PA)((e) => {
                let { album: t, closeToast: i, withLink: a } = e,
                    o = (0, n.b)(t.type);
                return (0, r.jsx)(s.O, {
                    closeToast: i,
                    entityVariant: o,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: a,
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
        95067: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => a });
            var r = i(61943),
                a = (function (e) {
                    return (
                        (e.Theme = 'theme'),
                        (e.AllowAnalyticsLogs = 'AllowAnalyticsLogs'),
                        (e.NavbarCollapsed = 'navbarCollapsed'),
                        (e.SessionHistoryState = 'sessionHistoryState'),
                        (e.SessionId = 'Session_id'),
                        (e.YmPlayerRepeatMode = 'ymPlayerRepeatMode'),
                        (e.YmPlayerVolume = 'ymPlayerVolume'),
                        (e.YmPlayerPrevVolume = 'ymPlayerPrevVolume'),
                        (e.YmPlayerShuffle = 'ymPlayerShuffle'),
                        (e.YmPlayerQuality = 'ymPlayerQuality'),
                        (e.YmUid = 'ymUid'),
                        (e.YandexLogin = 'yandex_login'),
                        (e.YandexUid = 'yandexuid'),
                        (e.Oauth = 'oauth'),
                        (e.OauthState = 'oauthState'),
                        (e.ArtistDonationButtonOnbordingShowed = 'ArtistDonationButtonOnbordingShowed'),
                        (e.TrailerButtonOnbordingShowed = 'TrailerButtonOnbordingShowed'),
                        (e.ConcertsTabOnboardingShowed = 'ConcertsTabOnboardingShowed'),
                        (e[(e.SavedUserLanguage = r.s)] = 'SavedUserLanguage'),
                        (e.ExEx = 'ExEx'),
                        (e.EqualizerConfig = 'EqualizerConfig'),
                        (e.EnableMetricsPluginDebugMode = 'EnableMetricsPluginDebugMode'),
                        (e.EnableYnisonMetricsDebugMode = 'EnableYnisonMetricsDebugMode'),
                        (e.OverwrittenExperiments = 'overwrittenExperiments'),
                        (e.Offer = 'offer'),
                        (e.OfflineMode = 'offlineMode'),
                        (e.NavbarDownloadBarIsHidden = 'navbarDownloadBarIsHidden'),
                        (e.OfflineDegradation = 'offlineDegradation'),
                        (e.DesktopPaywall = 'desktopPaywall'),
                        (e.LiteVersionMode = 'liteVersionMode'),
                        (e.DownloadMobileApp = 'downloadMobileApp'),
                        (e.HideDeeplinkAndOnelink = 'hideDeeplinkAndOnelink'),
                        (e.YnisonDeviceId = 'ynisonDeviceId'),
                        (e.CrossFadeMode = 'crossFadeMode'),
                        (e.CustomPlayerThumbConfig = 'CustomPlayerThumbConfig'),
                        (e.BuySubscriptionParams = 'buySubscriptionParams'),
                        (e.EnableCrossfadeDebugMode = 'EnableCrossfadeDebugMode'),
                        (e.EnableBurstDebounceDebugMode = 'EnableBurstDebounceDebugMode'),
                        (e.ConcertLocation = 'concertLocation'),
                        e
                    );
                })({});
        },
        95102: (e, t, i) => {
            'use strict';
            function r(e) {
                let { reason: t, children: i } = e;
                return i;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }),
                i(29834));
        },
        95314: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => n });
            var r = i(25839),
                a = i(74631),
                s = i(66192);
            let n = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: n, objectPos: o, objectType: l, objectsCount: d, mainObjectId: c, mainObjectType: u, children: m } = e,
                    p = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: n, objectPos: o, objectType: l, objectsCount: d, mainObjectId: c, mainObjectType: u }),
                        [t, i, n, o, l, d, c, u],
                    );
                return (0, r.jsx)(s.l.Provider, { value: p, children: m });
            };
        },
        96618: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => a, W: () => s });
            var r = i(74631);
            let a = (0, r.createContext)({ theme: null, setTheme: () => {} }),
                s = () => (0, r.useContext)(a);
        },
        99256: (e) => {
            e.exports = {
                root: 'SearchHistoryPage_root__Wbvyf',
                title: 'SearchHistoryPage_title__gnJuo',
                header: 'SearchHistoryPage_header__YdTG5',
                scrollContainer: 'SearchHistoryPage_scrollContainer__ScAez',
                scrollContent: 'SearchHistoryPage_scrollContent__5AXWC',
                content: 'SearchHistoryPage_content__iPgVO',
                desktopItem: 'SearchHistoryPage_desktopItem__Xv9C_',
                items: 'SearchHistoryPage_items___okS8',
                emptyHistory: 'SearchHistoryPage_emptyHistory__gzfUu',
            };
        },
        99835: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => a });
            var r = i(40207);
            let a = (e) => {
                let { album: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1676, 3349, 6287, 2121, 6749, 7339, 3472, 7931, 6706, 5201, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1943, 4245, 3269, 4163, 3246, 4517, 3482,
                6680, 6504, 5329, 820, 48, 862, 2533, 5853, 4475, 5056, 7358,
            ],
            () => e((e.s = 28152)),
        ),
            (_N_E = e.O()));
    },
]);
