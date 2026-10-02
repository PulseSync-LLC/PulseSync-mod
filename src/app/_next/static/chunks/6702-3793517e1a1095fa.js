(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6702],
    {
        4: (e) => {
            e.exports = {
                backgroundProgressbar: 'ChangeTimecodeBackground_backgroundProgressbar__hT_QP',
                progressbar: 'ChangeTimecodeBackground_progressbar__M93Ie',
                timecodeGroup: 'ChangeTimecodeBackground_timecodeGroup__2VQ1N',
                thumb: 'ChangeTimecodeBackground_thumb__vx6J0',
                timecodeGroupCurrent: 'ChangeTimecodeBackground_timecodeGroupCurrent__aGlrB',
                important: 'ChangeTimecodeBackground_important__OSzLR',
                root_focusVisible: 'ChangeTimecodeBackground_root_focusVisible__RLp5i',
                root: 'ChangeTimecodeBackground_root__B89FS',
                root_isPlayingTrack: 'ChangeTimecodeBackground_root_isPlayingTrack__2naHL',
                brandedThumb: 'ChangeTimecodeBackground_brandedThumb__igXsO',
                slider: 'ChangeTimecodeBackground_slider__Jdu3l',
            };
        },
        1134: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => _ });
            var i = a(25839),
                n = a(33660),
                r = a(74631),
                s = a(39004),
                o = a(91149),
                l = a(92942),
                d = a(27954),
                c = a(57549),
                u = a(27892);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: a } = (0, l.l)(),
                    { formatMessage: _ } = (0, s.A)(),
                    [m, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void a((0, i.jsx)(c.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let s = await e.togglePin();
                    (p(!1),
                        s
                            ? a((0, i.jsx)(u.l, { playlist: r }), { containerId: o.u.INFO })
                            : a((0, i.jsx)(c.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, m, e, a, _]);
            };
        },
        1316: (e) => {
            e.exports = {
                root: 'WithBrandedEntityAxeBanner_root__aXh91',
                root_withCollapsedNavbar: 'WithBrandedEntityAxeBanner_root_withCollapsedNavbar__msb7M',
                creative: 'WithBrandedEntityAxeBanner_creative__Fp6Vg',
            };
        },
        1323: (e) => {
            e.exports = {
                repeatIcon_none: 'RepeatButton_repeatIcon_none__2nb1J',
                repeatIcon_context: 'RepeatButton_repeatIcon_context__QwVY9',
                repeatIcon_one: 'RepeatButton_repeatIcon_one___mSkU',
                repeatIcon_disabled: 'RepeatButton_repeatIcon_disabled__LwHV_',
            };
        },
        1797: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => n });
            var i = a(40207);
            let n = (e) => {
                let { artist: t, callback: a, shouldHistoryBack: n } = e;
                return (0, i.l)({ entity: t, callback: a, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        2493: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => r });
            var i = a(39004),
                n = a(38977);
            let r = (e, t) => {
                let { formatMessage: a } = (0, i.A)(),
                    { hours: r, minutes: s, seconds: o } = (0, n.e)(e),
                    { hours: l, minutes: d, seconds: c } = (0, n.e)(t);
                return a(
                    { id: 'non-music.non-music-progress' },
                    { progress: Math.round((e / t) * 100), beginHours: r, beginMinutes: s, beginSeconds: o, endHours: l, endMinutes: d, endSeconds: c },
                );
            };
        },
        3109: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedBar_root__tTyvO',
                bar: 'NavbarDesktopAnimatedBar_bar__Wge_o',
                bar_enter: 'NavbarDesktopAnimatedBar_bar_enter__pUWOV',
                bar_enter_active: 'NavbarDesktopAnimatedBar_bar_enter_active__cYAzl',
                animation_show: 'NavbarDesktopAnimatedBar_animation_show__oAMq1',
                animation_scale: 'NavbarDesktopAnimatedBar_animation_scale__iOhup',
                bar_exit: 'NavbarDesktopAnimatedBar_bar_exit__Wq1AL',
                bar_exit_active: 'NavbarDesktopAnimatedBar_bar_exit_active__EZFDU',
                animation_hide: 'NavbarDesktopAnimatedBar_animation_hide__Eiu1e',
                animation_unscale: 'NavbarDesktopAnimatedBar_animation_unscale__gyZb6',
                button: 'NavbarDesktopAnimatedBar_button__T7n21',
                button_enter: 'NavbarDesktopAnimatedBar_button_enter__6v5a5',
                button_enter_active: 'NavbarDesktopAnimatedBar_button_enter_active__jZmtw',
                button_exit: 'NavbarDesktopAnimatedBar_button_exit__j8qXO',
                button_exit_active: 'NavbarDesktopAnimatedBar_button_exit_active__D5JJp',
            };
        },
        3487: (e) => {
            e.exports = { root: 'Navbar_root__chF4R', root_collapsed: 'Navbar_root_collapsed__pozJX' };
        },
        3912: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => O });
            var i = a(25839),
                n = a(82298),
                r = a(88204),
                s = a(84059),
                o = a(74631),
                l = a(39004),
                d = a(8487),
                c = a(87138),
                u = a(61493),
                _ = a(71035),
                m = a(49656),
                p = a(3392),
                v = a(4254),
                h = a(24574),
                b = a(79276),
                x = a(40207),
                f = a(85686),
                g = a(27954),
                A = a(19410),
                C = a(12929),
                N = a(62926),
                y = a(97522),
                T = a(74245),
                S = a(81024),
                E = a(85251),
                B = a(91171),
                I = a(87221),
                j = a(30408),
                P = a(12752),
                k = a.n(P),
                w = a(43910),
                L = a.n(w);
            let O = (0, r.PA)((e) => {
                var t, a, r, P, w, O, D;
                let {
                        track: R,
                        className: M,
                        withPodcastName: F,
                        withDate: U,
                        withSecondaryColor: z = !1,
                        withListeningProgress: W = !1,
                        captionSize: V = 'm',
                        explicitSize: H = 'xs',
                        withExplicitMark: K,
                        titleContainerClassName: G,
                        textClassName: $,
                        playContextParams: Y,
                        withTimeLeftText: q = !0,
                        ignoreDislikedStyles: Z,
                        withCustomTooltip: X = !0,
                        withSavingQueryParams: Q,
                        beforeTitle: J,
                        afterTitle: ee,
                        titleLineClamp: et = 1,
                        podcastMetaClassName: ea,
                        progressClassName: ei,
                        withAlbumTitleLink: en,
                    } = e,
                    {
                        fullscreenPlayer: er,
                        sonataState: es,
                        slam: eo,
                        settings: { isMobile: el },
                    } = (0, g.g)(),
                    { formatMessage: ed } = (0, l.A)(),
                    ec = (0, B.$)({ withCustomTooltip: X }),
                    eu = (0, s.useSearchParams)(),
                    e_ = (0, f.Z)(null != (O = null == (t = R.mainAlbum) ? void 0 : t.url) ? O : ''),
                    em = (0, o.useMemo)(() => {
                        var e;
                        let t = ed({ id: 'entity-names.podcast-name' }, { podcastName: R.title });
                        return ''.concat(t, ' ').concat(null != (e = R.version) ? e : '');
                    }, [ed, R.title, R.version]),
                    ep = !!(W && Y && R.shouldRememberPosition && R.streamProgress && R.durationMs),
                    ev =
                        R.id === (null == (a = es.entityMeta) ? void 0 : a.id) &&
                        (null == (P = es.entityMeta) || null == (r = P.streamProgress) ? void 0 : r.endPositionSec),
                    eh = (0, j.d)(ep, R.streamProgress, ev),
                    eb = ((e, t) => {
                        let {
                                isMobile: a,
                                isOfflineModeEnabled: i,
                                mainAlbum: n,
                                shouldHidePodcastInfo: r,
                                withPodcastName: s,
                                withDate: o,
                                withExplicitMark: l,
                                withAlbumTitleLink: d,
                                query: c,
                            } = t,
                            u = (0, E.q)(e, { isMobile: a, isOfflineModeEnabled: i, query: c }),
                            _ = (null == l || l) && e.disclaimers ? (0, T.DQ)(e.disclaimers) : null,
                            m = null != s && s && !r ? n : null,
                            p = m && (null == d || d) ? (0, S.L)(m.id) : null,
                            v = (null == o || o) && !r ? e.pubDate : void 0,
                            h = e.pubDate ? new Date(e.pubDate) : new Date(),
                            x = (0, b.L)(h),
                            f = !!(v && [b.r.TODAY, b.r.YESTERDAY].includes(x));
                        return { ...u, explicitMark: _, album: m, albumLink: p, pubDate: v, dateType: x, isSoonDate: f };
                    })(R, {
                        isMobile: el,
                        isOfflineModeEnabled: eo.isOfflineModeEnabled,
                        mainAlbum: R.mainAlbum,
                        shouldHidePodcastInfo: eh,
                        withPodcastName: F,
                        withDate: U,
                        withExplicitMark: K,
                        withAlbumTitleLink: en,
                        query: Q ? Object.fromEntries(eu) : void 0,
                    }),
                    ex = (0, x.l)({ entity: null != (D = R.mainAlbum) ? D : null, entityType: C.n.PODCAST, callback: e_ }),
                    ef = (0, _.c)((e) => {
                        (er.modal.isOpened && er.modal.close(), ex(e));
                    }),
                    eg = (0, I.O)({ track: R, withSavingQueryParams: Q, entityType: C.n.PODCAST }),
                    eA = (0, o.useCallback)(() => {
                        switch (eb.dateType) {
                            case b.r.TODAY:
                                return (0, i.jsx)(d.A, { id: 'interface-actions.date-today' });
                            case b.r.YESTERDAY:
                                return (0, i.jsx)(d.A, { id: 'interface-actions.date-yesterday' });
                            case b.r.DATE_WITH_YEAR:
                                return (0, i.jsx)(c.XU, { value: eb.pubDate, month: 'long', day: 'numeric', year: 'numeric' });
                            default:
                                return (0, i.jsx)(c.XU, { value: eb.pubDate, month: 'long', day: 'numeric' });
                        }
                    }, [eb.pubDate, eb.dateType]),
                    eC = (0, o.useCallback)(
                        (e) =>
                            (0, i.jsx)(p.m_, {
                                enabled: ec && !el,
                                offsetOptions: 4,
                                placement: 'top',
                                text: R.title,
                                hoverSettings: A.V,
                                children: (0, i.jsx)(v.HL, {
                                    className: k().title,
                                    type: 'entity',
                                    size: V,
                                    variant: 'span',
                                    title: ec ? void 0 : R.title,
                                    ...e,
                                    children: R.title,
                                }),
                            }),
                        [el, ec, V, R.title],
                    ),
                    eN = null == (w = eb.link) ? void 0 : w.href,
                    ey = (0, o.useMemo)(
                        () =>
                            eb.shouldShowRemovedTitle
                                ? (0, i.jsx)(p.m_, {
                                      enabled: ec && !el,
                                      offsetOptions: 4,
                                      placement: 'top',
                                      text: ed({ id: 'track-title.podcast-not-found' }),
                                      hoverSettings: A.V,
                                      children: (0, i.jsx)('span', { children: (0, i.jsx)(d.A, { id: 'track-title.podcast-not-found' }) }),
                                  })
                                : void 0 !== eN
                                  ? (0, i.jsx)(y.N, {
                                        onClick: eg,
                                        className: k().albumLink,
                                        href: eN,
                                        'aria-label': em,
                                        title: ec ? void 0 : R.title,
                                        'data-test-id': u.Kq.track.TRACK_TITLE,
                                        children: eC(),
                                    })
                                  : eC({ 'data-test-id': u.Kq.track.TRACK_TITLE }),
                        [el, eb.shouldShowRemovedTitle, eN, R.title, eC, ec, ed, eg, em],
                    ),
                    eT = (0, m.L)(() => {
                        let e = eb.album;
                        if (!e) return;
                        let t = (0, i.jsx)(p.m_, {
                            enabled: ec && !el,
                            offsetOptions: 4,
                            placement: 'top',
                            text: e.title,
                            hoverSettings: A.V,
                            children: (0, i.jsx)(v.HL, { variant: 'span', type: 'entity', size: V, className: k().albumTitle, children: e.title }),
                        });
                        return eb.albumLink
                            ? (0, i.jsx)(y.N, {
                                  'aria-label': ed({ id: 'entity-names.podcast-name' }, { podcastName: e.title }),
                                  className: k().link,
                                  href: eb.albumLink.href,
                                  title: ec ? void 0 : e.title,
                                  onClick: ef,
                                  'data-test-id': u.Kq.track.TRACK_PARENT_PODCAST_TITLE,
                                  children: t,
                              })
                            : (0, i.jsx)('span', { 'data-test-id': u.Kq.track.TRACK_PARENT_PODCAST_TITLE, children: t });
                    });
                return (0, i.jsx)('div', {
                    className: (0, n.$)(k().root, { [k().root_disabled]: !R.isAvailable, [k().root_disliked]: R.isDisliked && !Z, [k().root_withSecondaryColor]: z }, M),
                    children: (0, i.jsxs)('div', {
                        className: (0, n.$)(k().metaContainer, L().podcastMetaContainer, ea),
                        children: [
                            ep &&
                                Y &&
                                R.streamProgress &&
                                (0, i.jsx)(h.B, {
                                    className: (0, n.$)(L().progress, ei, {
                                        [L().progress_withPreviousInfo]: eb.album || eb.pubDate,
                                        [L().progress_disabled]: !R.isAvailable || R.isDisliked,
                                    }),
                                    id: R.id,
                                    albumId: R.albumId,
                                    streamProgress: R.streamProgress,
                                    durationMs: R.durationMs || 0,
                                    playContextParams: Y,
                                    withTimeLeftText: q,
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, n.$)(k().titleContainer, G, L().podcastTitleContainer),
                                children: [
                                    (0, i.jsxs)(v.HL, {
                                        className: (0, n.$)(k().text, $),
                                        type: 'entity',
                                        size: V,
                                        variant: 'div',
                                        lineClamp: et,
                                        children: [
                                            J,
                                            ey,
                                            eb.version &&
                                                (0, i.jsxs)(v.HL, {
                                                    className: (0, n.$)(k().text, k().version),
                                                    type: 'entity',
                                                    size: V,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: ec ? void 0 : eb.version,
                                                    children: ['\xa0', eb.version],
                                                }),
                                        ],
                                    }),
                                    eb.explicitMark &&
                                        (0, i.jsx)(N.N, {
                                            containerClassName: k().explicitMarkContainer,
                                            getDescriptionTexts: R.getDescriptionTexts,
                                            variant: eb.explicitMark,
                                            className: k().explicitMark,
                                            size: H,
                                            trackId: R.id,
                                        }),
                                    ee,
                                ],
                            }),
                            (eb.album || eb.pubDate) &&
                                (0, i.jsxs)(v.HL, {
                                    type: 'entity',
                                    size: V,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, n.$)(k().text, L().podcastName, $),
                                    children: [
                                        eT,
                                        eb.pubDate &&
                                            (0, i.jsx)(v.HL, {
                                                variant: 'span',
                                                type: 'entity',
                                                size: V,
                                                className: (0, n.$)({
                                                    [L().dateWithName]: !!eb.album,
                                                    [L().soonDate]: eb.isSoonDate,
                                                    [L().dateDisabled]: !R.isAvailable,
                                                    [L().dateDisliked]: R.isDisliked && !Z,
                                                }),
                                                children: eA(),
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
        4331: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => W });
            var i = a(25839),
                n = a(82298),
                r = a(88204),
                s = a(74631),
                o = a(49656),
                l = a(3392),
                d = a(19410),
                c = a(71035),
                u = a(27954),
                _ = a(39528);
            let m = (e, t) => {
                let { withLink: a, separator: i } = t,
                    n = a && !e.various ? (0, _.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: n };
            };
            var p = a(94484),
                v = a.n(p),
                h = a(61493),
                b = a(4254),
                x = a(97522),
                f = a(39004),
                g = a(36619),
                A = a(29481),
                C = a(85686),
                N = a(85743),
                y = a(40207);
            let T = (0, r.PA)((e) => {
                    let { item: t, linkClassName: a, captionClassName: n, captionSize: r = 'm', allArtistsTitle: s, withCustomTooltip: o, hoverSettings: d } = e,
                        {
                            name: _,
                            link: m,
                            title: p,
                            ariaLabel: v,
                            tooltipText: T,
                            isTooltipEnabled: S,
                            handleNavigate: E,
                        } = ((e) => {
                            var t, a;
                            let { item: i, allArtistsTitle: n, withCustomTooltip: r } = e,
                                { formatMessage: s } = (0, f.A)(),
                                {
                                    track: o,
                                    settings: { isMobile: l },
                                } = (0, u.g)(),
                                d = (0, C.Z)(null != (a = null == (t = i.link) ? void 0 : t.href) ? a : i.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, N.z)(),
                                m = (0, A.N)(),
                                p = (0, c.c)((e) => {
                                    (l && o.isOpened && o.close(), d(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: a } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: n, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: s } = i;
                                    return (0, y.l)({
                                        entity: t,
                                        callback: a,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), s.isOpened && (i.reset(), s.close()), n.modal.isOpened && n.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: i.artist, callback: p }),
                                h = (0, c.c)((e) => {
                                    (m({ to: g.AppScreen.ArtistScreen }), null == _ || _(), v(e));
                                }),
                                b = n || i.name;
                            return {
                                name: i.name,
                                link: i.link,
                                title: r ? void 0 : b,
                                ariaLabel: i.link ? s({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                tooltipText: b,
                                isTooltipEnabled: !n && r,
                                handleNavigate: h,
                            };
                        })({ item: t, allArtistsTitle: s, withCustomTooltip: o });
                    return m
                        ? (0, i.jsx)(x.N, {
                              ...m,
                              'aria-label': v,
                              className: a,
                              onClick: E,
                              title: p,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(l.m_, {
                                  enabled: S,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: T,
                                  hoverSettings: d,
                                  children: (0, i.jsx)(b.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: n, children: _ }),
                              }),
                          })
                        : (0, i.jsx)(l.m_, {
                              enabled: S,
                              offsetOptions: 4,
                              placement: 'top',
                              text: T,
                              hoverSettings: d,
                              children: (0, i.jsx)(b.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: n,
                                  title: p,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                S = (e) => {
                    let { group: t, linkClassName: a, captionClassName: n, captionSize: r, allArtistsTitle: o, withCustomTooltip: l, hoverSettings: d } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(T, {
                                item: t.primary,
                                linkClassName: a,
                                captionClassName: n,
                                captionSize: r,
                                allArtistsTitle: o,
                                withCustomTooltip: l,
                                hoverSettings: d,
                            }),
                            t.decomposed.map((e) =>
                                (0, i.jsxs)(
                                    s.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, i.jsx)(T, {
                                                item: e,
                                                linkClassName: a,
                                                captionClassName: n,
                                                captionSize: r,
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
            var E = a(8487),
                B = a(9079);
            let I = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: a, handleOnSpoilerClick: r } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(B.N, {
                            role: 'button',
                            href: '',
                            className: (0, n.$)(v().spoiler, a),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(E.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var j = a(28631),
                P = a(89761),
                k = a(61912),
                w = a(36286),
                L = a.n(w);
            let O = (0, r.PA)((e) => {
                    let { label: t, artists: a, forwardRef: n } = e;
                    return (0, i.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, P.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: n, children: t }),
                            (0, i.jsx)(l.ZI, { className: L().tooltipContent, children: a.map((e) => (0, i.jsx)(k.V, { artist: e, className: L().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, s.forwardRef)((e, t) => (0, i.jsx)(O, { forwardRef: t, ...e }));
            var R = a(10820),
                M = a(93510),
                F = a.n(M);
            let U = (0, r.PA)((e) => {
                    let { label: t, artists: a } = e,
                        { formatMessage: r } = (0, f.A)();
                    return (0, i.jsx)(R.W1, {
                        isMobile: !0,
                        className: (0, n.$)(F().root, F().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: a.map((e) => (0, i.jsx)(k.V, { artist: e }, e.id)),
                    });
                }),
                z = (0, r.PA)((e) => {
                    let { artists: t = [], label: a, labelRef: n } = e,
                        [r, l] = (0, s.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, u.g)(),
                        _ = (0, c.c)(() => {
                            let e = n.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, o.L)(() =>
                            (0, j.A)(() => {
                                _();
                            }, 100),
                        );
                    if (
                        ((0, s.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                _(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, _],
                        ),
                        (0, s.useEffect)(() => {
                            _();
                        }, [t, _]),
                        0 !== t.length)
                    )
                        return (r || d) && (!d || 1 !== t.length) ? (d ? (0, i.jsx)(U, { artists: t, label: a }) : (0, i.jsx)(D, { artists: t, label: a })) : a;
                }),
                W = (0, r.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: a,
                            spoilerClassName: r,
                            linkClassName: _,
                            captionClassName: p,
                            captionSize: h,
                            variant: b = 'breakAll',
                            spoilerComponent: x,
                            ...f
                        } = e,
                        g = ((e) => {
                            var t, a, i;
                            let { separator: n, visibleArtistsCount: r, withLink: o, withComposer: l, artistIdWithoutLink: d, withContextMenu: _ } = e,
                                p = null != (t = e.artists) ? t : [],
                                v = null == (a = e.withAllArtistsTitle) || a,
                                h = null == (i = e.withCustomTooltip) || i,
                                b = (0, s.useRef)(null),
                                [x, f] = (0, s.useState)(!1),
                                {
                                    settings: { isMobile: g },
                                } = (0, u.g)(),
                                A = ((!g || 1 === p.length) && _) || !_,
                                C = ((e, t) => {
                                    var a, i, n;
                                    let r = null == (a = null == t ? void 0 : t.withComposer) || a,
                                        s = null == (i = null == t ? void 0 : t.withLink) || i,
                                        o = null != (n = null == t ? void 0 : t.separator) ? n : ', ',
                                        l = e
                                            .flatMap((e) => {
                                                var t;
                                                let a = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...a];
                                            })
                                            .join(o),
                                        { visibleArtists: d, hiddenArtistsCount: c } = ((e, t) => {
                                            let { visibleArtistsCount: a, withComposer: i } = t;
                                            return {
                                                visibleArtists: (a ? e.slice(0, a) : e).filter((e) => i || !e.isComposer),
                                                hiddenArtistsCount: a && a < e.length ? e.length - a : 0,
                                            };
                                        })(e, { withComposer: r, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: d.map((e, a) =>
                                            ((e, t) => {
                                                var a;
                                                let { withLink: i, separator: n, isFirst: r } = t;
                                                return {
                                                    primary: m(e, { withLink: i, separator: r ? void 0 : n }),
                                                    decomposed: (null != (a = e.decomposed) ? a : []).map((e) => {
                                                        let t = n ? e.separator : '';
                                                        return m(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: s && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: o, isFirst: 0 === a }),
                                        ),
                                        allArtistsTitle: l,
                                        hiddenArtistsCount: c,
                                    };
                                })(p, { separator: n, visibleArtistsCount: x ? void 0 : r, withComposer: l, withLink: !!A && o, artistIdWithoutLink: d }),
                                N = v ? C.allArtistsTitle : '',
                                y = (0, c.c)((e) => {
                                    (f(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: C.groups,
                                hiddenArtistsCount: C.hiddenArtistsCount,
                                allArtistsTitle: N,
                                withCustomTooltip: h,
                                withContextMenu: _,
                                labelRef: b,
                                handleOnSpoilerClick: y,
                                isTooltipEnabled: !!N && h && !_ && !g,
                                title: !N || h || _ ? void 0 : N,
                            };
                        })(f),
                        A = (0, o.L)(() =>
                            g.hiddenArtistsCount <= 0
                                ? null
                                : (0, s.isValidElement)(x)
                                  ? x
                                  : (0, i.jsx)(I, { spoilerClassName: r, spoilerArtistsCount: g.hiddenArtistsCount, handleOnSpoilerClick: g.handleOnSpoilerClick }),
                        ),
                        C = (0, i.jsx)(l.m_, {
                            referenceRef: g.labelRef,
                            enabled: g.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: g.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, i.jsxs)('div', {
                                style: a ? { WebkitLineClamp: a } : void 0,
                                className: (0, n.$)(v().root, v()['root_variant_'.concat(b)], { [v().root_clamp]: a && a > 0, [v().ellipsis]: !a }, t),
                                title: g.title,
                                children: [
                                    g.groups.map((e) =>
                                        (0, i.jsx)(
                                            S,
                                            {
                                                group: e,
                                                linkClassName: _,
                                                captionClassName: p,
                                                captionSize: h,
                                                allArtistsTitle: g.allArtistsTitle,
                                                withCustomTooltip: g.withCustomTooltip,
                                                hoverSettings: d.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return g.withContextMenu ? (0, i.jsx)(z, { labelRef: g.labelRef, artists: g.artists, label: C }) : C;
                });
        },
        5520: (e) => {
            e.exports = {
                root_primary: 'CommunicationButton_root_primary__rrmax',
                root_plus: 'CommunicationButton_root_plus__d48MV',
                root_secondary: 'CommunicationButton_root_secondary__YQujH',
                text: 'CommunicationButton_text__kObnq',
            };
        },
        8266: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => i });
            let i = (e, t) => {
                let a = new URL(window.location.href),
                    i = a.searchParams;
                return (i.set(e, t), (a.search = i.toString()), a.toString());
            };
        },
        8900: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => d });
            var i = a(74631),
                n = a(91886),
                r = a(36484),
                s = a(62562),
                o = a(49984),
                l = a(75167);
            let d = (e) => {
                var t;
                let { id: a, ref: d } = e,
                    { config: c, isOnboardingOpened: u, setIsOnboardingOpened: _ } = (0, l.w)(),
                    m = (0, i.useRef)(!1),
                    p = (0, n.BL)([{ current: d }], !d),
                    { isIntersecting: v } = null != (t = p[o.N]) ? t : {},
                    h = (0, s.N)().get(r.U2);
                for (let { id: e, storageKey: t, enabled: n } of ((0, i.useEffect)(() => {
                    if (m.current && v) {
                        let e = c.find((e) => {
                            let { id: t } = e;
                            return t === a;
                        });
                        e && h.set(e.storageKey, !0, { expires: e.expires });
                    }
                }, [c, a, v, h, p, d]),
                c)) {
                    let i = h.get(t);
                    if (n) {
                        if (null == u ? void 0 : u.current) return !1;
                        if (a === e) {
                            if (i) return !1;
                            return ((m.current = !0), _(!0), !0);
                        }
                        if (!i) break;
                    }
                }
                return !1;
            };
        },
        10322: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => s });
            var i = a(25839),
                n = a(74631),
                r = a(82064);
            let s = (e) => {
                let { pageId: t, pageEntityId: a, displayReasonId: s, pageStyle: o, pagePlacement: l, children: d } = e,
                    c = (0, n.useMemo)(() => ({ pageId: t, pageEntityId: a, displayReasonId: s, pageStyle: o, pagePlacement: l }), [t, a, s, o, l]);
                return (0, i.jsx)(r.r.Provider, { value: c, children: d });
            };
        },
        10491: (e) => {
            e.exports = {
                userProfileContainer: 'NavbarDesktopUserWidget_userProfileContainer__ha3Tm',
                userProfile: 'NavbarDesktopUserWidget_userProfile__vqeMC',
                userId: 'NavbarDesktopUserWidget_userId__ihL7U',
                userMeta_withAnimation: 'NavbarDesktopUserWidget_userMeta_withAnimation__rrz0Y',
                animation_show: 'NavbarDesktopUserWidget_animation_show__fadL3',
                userMeta_collapsed: 'NavbarDesktopUserWidget_userMeta_collapsed__cSARy',
                animation_hide: 'NavbarDesktopUserWidget_animation_hide__tO81o',
                unauthorizedBar: 'NavbarDesktopUserWidget_unauthorizedBar__HE5Yu',
            };
        },
        10546: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => g });
            var i = a(25839),
                n = a(82298),
                r = a(74631),
                s = a(61493),
                o = a(23818),
                l = a(69084),
                d = a(4254),
                c = a(39004),
                u = a(8487),
                _ = a(71035),
                m = a(35015),
                p = a(27954),
                v = a(44806),
                h = a(97522),
                b = a(51790),
                x = a(24915),
                f = a.n(x);
            let g = (e) => {
                let {
                        closeToast: t,
                        className: a,
                        coverUri: x,
                        entityTitle: g,
                        entityDescription: A,
                        entityVariant: C,
                        entityUrl: N,
                        customCover: y,
                        radius: T,
                        isPinned: S,
                    } = e,
                    E = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((a) => {
                            let { entityVariant: n, values: r, entityTitle: s, entityDescription: o } = a;
                            switch (n) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.album-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.album-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.audiobook-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.fairytale-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.podcast-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.playlist-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.artist-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.artist-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(v.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, i.jsx)(u.A, { id: 'notifications-info.my-vibe-pinned-in-menu', values: r }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-pinned-in-menu' }, { entity: s }),
                                        };
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.entity-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.entity-pinned-in-menu' }, { entity: s, description: o }),
                                    };
                            }
                        });
                    })(),
                    B = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((a) => {
                            let { entityVariant: n, values: r, entityTitle: s, entityDescription: o } = a;
                            switch (n) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.album-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.album-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.audiobook-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.fairytale-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.podcast-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.playlist-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.artist-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.artist-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(v.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, i.jsx)(u.A, { id: 'notifications-info.my-vibe-unpinned-from-menu', values: r }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-unpinned-from-menu' }, { entity: s }),
                                        };
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.entity-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.entity-unpinned-from-menu' }, { entity: s, description: o }),
                                    };
                            }
                        });
                    })(),
                    I = (0, r.useMemo)(
                        () =>
                            N
                                ? (0, i.jsx)(h.N, {
                                      className: f().link,
                                      href: N,
                                      title: g,
                                      children: (0, i.jsxs)(d.HL, {
                                          className: f().title,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', g, '\xa0'],
                                      }),
                                  })
                                : (0, i.jsxs)(d.HL, {
                                      className: f().title,
                                      variant: 'span',
                                      type: 'controls',
                                      size: 'm',
                                      lineClamp: 1,
                                      title: g,
                                      children: ['\xa0', g, '\xa0'],
                                  }),
                        [g, N],
                    ),
                    j = (0, r.useMemo)(
                        () => y || (0, i.jsx)(o._V, { className: f().image, src: x, size: 100, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0 }),
                        [x, y],
                    ),
                    P = (0, r.useMemo)(() => {
                        let e = { entity: I, description: A };
                        return S
                            ? E({ entityVariant: C, values: e, entityTitle: g, entityDescription: A })
                            : B({ entityVariant: C, values: e, entityTitle: g, entityDescription: A });
                    }, [I, A, S, B, C, g, E]);
                return (0, i.jsx)(b.$, {
                    className: (0, n.$)(f().root, { [f().root_withLongText]: C === m.c.AUDIOBOOK }, a),
                    closeToast: t,
                    cover: j,
                    message: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(l.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': P.ariaLabel }) }),
                            (0, i.jsx)(d.HL, {
                                className: f().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': s.S7.BASE_NOTIFICATION_PIN_TEXT,
                                'aria-hidden': !0,
                                children: P.caption,
                            }),
                        ],
                    }),
                    coverRadius: T,
                });
            };
        },
        11708: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => r });
            var i = a(74631),
                n = a(39004);
            let r = () => {
                let { formatMessage: e } = (0, n.A)();
                return (0, i.useCallback)(
                    function (t) {
                        let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            i = Math.floor(t / 60),
                            n = function (t) {
                                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = e({ id: 'time.minutes-left' }, { minutes: t });
                                return a ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(i) : i;
                            };
                        if (t < 1) return e({ id: 'time.finished' });
                        if (t < 60)
                            return (function (t) {
                                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = e({ id: 'time.seconds-left' }, { seconds: t });
                                return a ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(i) : i;
                            })(Math.floor(t), a);
                        if (i < 60) return n(i, a);
                        let r = Math.floor(i / 60),
                            s = i % 60,
                            o = (function (t) {
                                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return a ? e({ id: 'time.hours-left' }, { hours: t }) : e({ id: 'time.hours' }, { hours: t });
                            })(r, a);
                        return s > 0 ? ''.concat(o, ' ').concat(n(s)) : o;
                    },
                    [e],
                );
            };
        },
        11799: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedShimmerBar_root__o3xBB',
                barShimmer: 'NavbarDesktopAnimatedShimmerBar_barShimmer__ejAhM',
                buttonShimmer: 'NavbarDesktopAnimatedShimmerBar_buttonShimmer___3Vz2',
            };
        },
        12714: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => r, o: () => n });
            var i = a(49337);
            let n = { [i.S.Dark]: 'ym-dark-theme', [i.S.Light]: 'ym-light-theme' },
                r = (e) => {
                    switch (e) {
                        case i.S.Light:
                        case i.S.Dark:
                            return n[e];
                        default:
                            return '';
                    }
                };
        },
        12799: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(89288);
            let n = (e) => ({
                '--player-average-color-background': ((e) => {
                    if (!e) return;
                    let { h: t, s: a } = (0, i.g8)(e);
                    return 'hsl('.concat(t, ', ').concat(a, '%, 20%)');
                })(null == e || (window.DISABLE_PER_TRACK_COLORS?.() ?? false) ? void 0 : e.averageColor),
            });
        },
        13287: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedPlusOptionsBar_root__dOEU7',
                button: 'NavbarDesktopAnimatedPlusOptionsBar_button__NRXbJ',
                important: 'NavbarDesktopAnimatedPlusOptionsBar_important__mltBe',
                icon: 'NavbarDesktopAnimatedPlusOptionsBar_icon__EKWgb',
                optionIcon: 'NavbarDesktopAnimatedPlusOptionsBar_optionIcon__gPbRm',
                popoverContent: 'NavbarDesktopAnimatedPlusOptionsBar_popoverContent__wSXo7',
            };
        },
        14405: (e) => {
            e.exports = { root: 'PlayerBar_root__cXUnU', adPopup: 'PlayerBar_adPopup__BrBC6' };
        },
        14693: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var i,
                n = a(74631),
                r = {
                    810: (e) => {
                        e.exports = i || (i = a.t(n, 2));
                    },
                },
                s = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useToggle = void 0));
                let e = (function e(t) {
                    var a = s[t];
                    if (void 0 !== a) return a.exports;
                    var i = (s[t] = { exports: {} });
                    return (r[t](i, i.exports, e), i.exports);
                })(810);
                o.useToggle = (t) => {
                    let [a, i] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        i(t);
                    }, [t]);
                    let n = (0, e.useCallback)(() => {
                            i((e) => !e);
                        }, []),
                        r = (0, e.useCallback)(() => {
                            i(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            i(!1);
                        }, []);
                    return { state: a, toggle: n, setState: i, toggleTrue: r, toggleFalse: s };
                };
            })(),
                o.__esModule);
            var l = o.useToggle;
        },
        14930: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => p });
            var i = a(25839),
                n = a(82298),
                r = a(39004),
                s = a(39498),
                o = a(71035),
                l = a(4071),
                d = a(66738),
                c = a(61493),
                u = a(33717),
                _ = a(1323),
                m = a.n(_);
            let p = (e) => {
                let {
                        isDisabled: t,
                        repeatMode: a,
                        className: _,
                        iconClassName: p,
                        size: v = 'xxxs',
                        iconSize: h = 'xs',
                        color: b,
                        variant: x = 'default',
                        onClick: f,
                    } = e,
                    { formatMessage: g } = (0, r.A)(),
                    A = t || a !== s.pM.ONE ? 'repeat' : 'repeat_one',
                    C = (0, u.z)(a, g, t),
                    N = (0, o.c)((e) => {
                        (null == f || f(), e.stopPropagation());
                    });
                return (0, i.jsx)(l.$, {
                    className: _,
                    radius: 'round',
                    size: v,
                    variant: x,
                    color: b,
                    disabled: t,
                    withRipple: !1,
                    'aria-hidden': t,
                    'aria-label': C,
                    'aria-pressed': !t && a !== s.pM.NONE,
                    onClick: N,
                    icon: (0, i.jsx)(d.I, {
                        size: h,
                        variant: A,
                        className: (0, n.$)(m().repeatIcon, m()['repeatIcon_'.concat(a)], { [m().repeatIcon_disabled]: t }, p),
                    }),
                    'data-test-id': ((e, t) =>
                        e === s.pM.NONE || t
                            ? c.Kq.sonata.REPEAT_BUTTON_NO_REPEAT
                            : e === s.pM.ONE
                              ? c.Kq.sonata.REPEAT_BUTTON_REPEAT_ONE
                              : c.Kq.sonata.REPEAT_BUTTON_REPEAT_CONTEXT)(a, t),
                });
            };
        },
        15053: (e) => {
            e.exports = { tooltip: 'NavigationOnboarding_tooltip___xZni', text: 'NavigationOnboarding_text__YW93F', button: 'NavigationOnboarding_button__Vc_Ka' };
        },
        15538: (e) => {
            e.exports = {
                imageContainer: 'AudioAd_imageContainer__ZmZsg',
                image: 'AudioAd_image__f6DJR',
                image_fallback: 'AudioAd_image_fallback__7ufC3',
                backgroundImage: 'AudioAd_backgroundImage__aqvQd',
                contextMenuButton: 'AudioAd_contextMenuButton__fbb47',
                contextMenuIcon: 'AudioAd_contextMenuIcon__KTxE1',
                contextMenuHeader: 'AudioAd_contextMenuHeader__97XqU',
            };
        },
        16017: (e) => {
            e.exports = { root: 'LayoutNotificationContainers_root__5HClw' };
        },
        17421: (e) => {
            e.exports = {
                root: 'AdContainer_root__ti4rk',
                container: 'AdContainer_container__DLRij',
                title: 'AdContainer_title__AsPky',
                subtitle: 'AdContainer_subtitle__LIOif',
                info: 'AdContainer_info__EKKWS',
                favicon: 'AdContainer_favicon__ry_3I',
                buttonContainer: 'AdContainer_buttonContainer__SvDt3',
                button: 'AdContainer_button__nQcMg',
                linkButton: 'AdContainer_linkButton__rabLN',
            };
        },
        18748: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => c });
            var i,
                n = a(6274),
                r = a(74631),
                s = {
                    8612: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let i = a(352),
                            n = a(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: a, throttleTimeout: r } = e,
                                s = (0, n.useRef)(null),
                                [o, l] = (0, n.useState)(!!a),
                                d = (0, n.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            (l(!a),
                                                s.current && window.clearTimeout(s.current),
                                                (s.current = window.setTimeout(() => {
                                                    l(!!a);
                                                }, t)));
                                        }, r),
                                    [t, a, r],
                                ),
                                c = (0, n.useCallback)(() => {
                                    (l(!!a), s.current && window.clearTimeout(s.current));
                                }, [a]);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        s.current && window.clearTimeout(s.current);
                                    },
                                    [],
                                ),
                                { state: o, handleDebouncedToggle: d, reset: c }
                            );
                        };
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    352: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(r, 2));
                    },
                },
                o = {};
            function l(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var a = (o[e] = { exports: {} });
                return (s[e](a, a.exports, l), a.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, '__esModule', { value: !0 }), (d.useScroll = void 0));
                let e = l(810),
                    t = l(1848),
                    a = l(8612);
                d.useScroll = (i) => {
                    let { onScroll: n, listenIsScrolling: r, elementRef: s } = i,
                        { state: o, handleDebouncedToggle: l } = (0, a.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                        d = (0, e.useCallback)(() => {
                            (r && l(), null == n || n());
                        }, [r, l, n]);
                    return (
                        (0, e.useEffect)(() => {
                            let e = (0, t.getElementFromRefOrElement)(s);
                            if (null === e) return;
                            let a = null != e ? e : window,
                                i = { capture: !0, passive: !0 };
                            return (a.addEventListener('scroll', d, i), () => a.removeEventListener('scroll', d, i));
                        }, [s, d]),
                        o
                    );
                };
            })(),
                d.__esModule);
            var c = d.useScroll;
        },
        18760: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => i });
            var i = (function (e) {
                return ((e.BRANDED = 'branded'), (e.DEFAULT = 'default'), (e.DUCK = 'duck'), (e.CAR = 'car'), e);
            })({});
        },
        19410: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        19966: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(79497);
            let n = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, i.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        21468: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => r });
            var i = a(74631),
                n = a(56480);
            function r() {
                return (0, i.useContext)(n.H);
            }
        },
        22106: (e) => {
            e.exports = {
                root: 'ListeningProgress_root__Rvlcn',
                text_withoutTimeLeft: 'ListeningProgress_text_withoutTimeLeft__eAmOF',
                checkIcon: 'ListeningProgress_checkIcon___yh49',
            };
        },
        23766: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedDownloadBarEnlarged_root__5lnM0',
                closeButton: 'NavbarDesktopAnimatedDownloadBarEnlarged_closeButton__MSz9j',
                text: 'NavbarDesktopAnimatedDownloadBarEnlarged_text__fT36E',
                downloadButtonText: 'NavbarDesktopAnimatedDownloadBarEnlarged_downloadButtonText__3GqKa',
                textBright: 'NavbarDesktopAnimatedDownloadBarEnlarged_textBright__JA1nf',
                closeButtonIcon: 'NavbarDesktopAnimatedDownloadBarEnlarged_closeButtonIcon___xaoS',
                downloadButtonIcon: 'NavbarDesktopAnimatedDownloadBarEnlarged_downloadButtonIcon__oE_rc',
            };
        },
        24237: (e) => {
            e.exports = {
                root: 'PlayerBarDesktopWithBackgroundProgressBar_root__bpmwN',
                important: 'PlayerBarDesktopWithBackgroundProgressBar_important__HzXrK',
                root_interactive: 'PlayerBarDesktopWithBackgroundProgressBar_root_interactive__GcrNw',
                ripple: 'PlayerBarDesktopWithBackgroundProgressBar_ripple__FcmrF',
                progressBar: 'PlayerBarDesktopWithBackgroundProgressBar_progressBar___Q6eK',
                slider: 'PlayerBarDesktopWithBackgroundProgressBar_slider__SezFn',
                thumb: 'PlayerBarDesktopWithBackgroundProgressBar_thumb__LHPFo',
                player: 'PlayerBarDesktopWithBackgroundProgressBar_player__ASKKs',
                playerBar: 'PlayerBarDesktopWithBackgroundProgressBar_playerBar__mp0p9',
                info: 'PlayerBarDesktopWithBackgroundProgressBar_info__YnvZ_',
                infoCard: 'PlayerBarDesktopWithBackgroundProgressBar_infoCard__i0cbW',
                coverContainer: 'PlayerBarDesktopWithBackgroundProgressBar_coverContainer__dkNCG',
                cover: 'PlayerBarDesktopWithBackgroundProgressBar_cover__MKmEt',
                description: 'PlayerBarDesktopWithBackgroundProgressBar_description__5jHke',
                artists: 'PlayerBarDesktopWithBackgroundProgressBar_artists__wKsF6',
                artistLink: 'PlayerBarDesktopWithBackgroundProgressBar_artistLink__l9Bk_',
                infoButtons: 'PlayerBarDesktopWithBackgroundProgressBar_infoButtons__OxPBy',
                sonata: 'PlayerBarDesktopWithBackgroundProgressBar_sonata__mGFb_',
                sonata_withReversedControls: 'PlayerBarDesktopWithBackgroundProgressBar_sonata_withReversedControls__9TjDN',
                meta: 'PlayerBarDesktopWithBackgroundProgressBar_meta__FhKTC',
                sonataControls: 'PlayerBarDesktopWithBackgroundProgressBar_sonataControls__rSmXQ',
                settingsButton: 'PlayerBarDesktopWithBackgroundProgressBar_settingsButton__HnCgK',
                trackContextMenuIcon: 'PlayerBarDesktopWithBackgroundProgressBar_trackContextMenuIcon__xBJxI',
                triggerModal: 'PlayerBarDesktopWithBackgroundProgressBar_triggerModal__EVv5d',
            };
        },
        24574: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => g });
            var i = a(25839),
                n = a(82298),
                r = a(88204),
                s = a(74631),
                o = a(8487),
                l = a(61493),
                d = a(28068),
                c = a(66738),
                u = a(4254),
                _ = a(16886),
                m = a(50209),
                p = a(30296),
                v = a(27954),
                h = a(2493),
                b = a(11708),
                x = a(22106),
                f = a.n(x);
            let g = (0, r.PA)((e) => {
                var t, a, r, x, g, A, C, N, y;
                let { className: T, id: S, albumId: E, streamProgress: B, durationMs: I, playContextParams: j, withTimeLeftText: P = !0, isFinishedLabelHidden: k } = e,
                    w = (0, p.e)(),
                    { sonataState: L, album: O } = (0, v.g)(),
                    D = Math.floor(I / 1e3),
                    [R, M] = (0, s.useState)(!1),
                    F = (0, b.$)(),
                    { isPlaying: U, isCurrent: z } = (0, m.D)({ playContextParams: j, entityId: E ? ''.concat(S, ':').concat(E) : S });
                ((0, s.useEffect)(() => {
                    if (!z) return void M(!1);
                    let e =
                        null == w
                            ? void 0
                            : w.state.playerState.status.onChange(() => {
                                  (null == w ? void 0 : w.state.playerState.status.value) === _.MT.BUFFERING && M(!0);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [w, B, z, U]),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == O || null == (e = O.meta) ? void 0 : e.listeningFinished)
                            ? (B.updateEndPositionSec(0), B.updateEverFinished(!0))
                            : (null == O ? void 0 : O.allTracksUnfinished) && B.updateEverFinished(!1);
                    }, [B, null == O ? void 0 : O.allTracksUnfinished, null == O || null == (t = O.meta) ? void 0 : t.listeningFinished]),
                    (0, s.useEffect)(() => {
                        var e, t;
                        (z &&
                            (null == L || null == (e = L.entityMeta) ? void 0 : e.streamProgress) &&
                            B &&
                            L.entityMeta.streamProgress.hasEverFinished !== B.hasEverFinished &&
                            B.updateEverFinished(!!L.entityMeta.streamProgress.hasEverFinished),
                            D - ((null == B ? void 0 : B.endPositionSec) || 0) < 1 &&
                                ((null == L || null == (t = L.entityMeta) ? void 0 : t.streamProgress) &&
                                    z &&
                                    (L.entityMeta.streamProgress.updateEverFinished(!0), L.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == B || B.updateEverFinished(!0)));
                    }, [
                        z,
                        null == L || null == (a = L.entityMeta) ? void 0 : a.streamProgress,
                        null == L || null == (x = L.entityMeta) || null == (r = x.streamProgress) ? void 0 : r.hasEverFinished,
                        B,
                        B.hasEverFinished,
                        B.endPositionSec,
                        D,
                    ]),
                    (0, s.useEffect)(() => {
                        if (!z) return;
                        let e =
                            null == w
                                ? void 0
                                : w.state.playerState.progress.onChange(() => {
                                      var e;
                                      let t = w.state.playerState.progress.value,
                                          a = null == L || null == (e = L.entityMeta) ? void 0 : e.streamProgress;
                                      (0 !== t.position && R && B.updateEndPositionSec(t.position),
                                          z &&
                                              parseInt(''.concat(null == a ? void 0 : a.endPositionSec), 10) !== parseInt(''.concat(t.position), 10) &&
                                              (null == a || a.updateEndPositionSec(t.position)));
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [w, B, z, U, R, S, null == L ? void 0 : L.entityMeta]));
                let W = (z && (null == L || null == (A = L.entityMeta) || null == (g = A.streamProgress) ? void 0 : g.endPositionSec)) || B.endPositionSec,
                    V = (0, h.m)(null != W ? W : 0, D),
                    H = (0, s.useMemo)(() => {
                        var e, t, a;
                        if (
                            ((z && (null == L || null == (t = L.entityMeta) || null == (e = t.streamProgress) ? void 0 : e.hasEverFinished)) ||
                                (null == B ? void 0 : B.hasEverFinished) ||
                                (null == O || null == (a = O.meta) ? void 0 : a.listeningFinished)) &&
                            !k
                        )
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(u.HL, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, n.$)(f().text, { [f().text_withoutTimeLeft]: !P }),
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_TEXT,
                                        children: (0, i.jsx)(o.A, { id: 'time.finished' }),
                                    }),
                                    (0, i.jsx)(c.I, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: f().checkIcon,
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_ICON,
                                    }),
                                ],
                            });
                        if (!W || 0 === W) return;
                        let r = D - W,
                            s = F(r);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(u.HL, {
                                    lineClamp: 1,
                                    variant: 'div',
                                    className: (0, n.$)(f().text, { [f().text_withoutTimeLeft]: !P }),
                                    'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT,
                                    children: s,
                                }),
                                r > 1 || k
                                    ? (0, i.jsx)(d.q, {
                                          'aria-valuetext': V,
                                          'aria-busy': z && U,
                                          value: W,
                                          max: D,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS,
                                      })
                                    : (0, i.jsx)(c.I, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: f().checkIcon,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_ICON,
                                      }),
                            ],
                        });
                    }, [
                        D,
                        null == B ? void 0 : B.hasEverFinished,
                        P,
                        F,
                        z,
                        U,
                        null == L || null == (N = L.entityMeta) || null == (C = N.streamProgress) ? void 0 : C.hasEverFinished,
                        null == O || null == (y = O.meta) ? void 0 : y.listeningFinished,
                        k,
                        W,
                        V,
                    ]);
                return (0, i.jsx)('div', { className: (0, n.$)(f().root, T), 'data-test-id': l.OA.track.LISTENING_PROGRESS, children: H });
            });
        },
        24907: (e) => {
            e.exports = {
                root: 'SonataFullscreenControlsDesktop_root__ZCIGk',
                sonataButtons: 'SonataFullscreenControlsDesktop_sonataButtons__9y89g',
                sonataButton: 'SonataFullscreenControlsDesktop_sonataButton__69FFc',
                sonataPlayButton: 'SonataFullscreenControlsDesktop_sonataPlayButton__QXEEp',
                playPauseButtonIcon: 'SonataFullscreenControlsDesktop_playPauseButtonIcon__IkUNX',
                playPauseButtonIcon_withYellowPlayButton: 'SonataFullscreenControlsDesktop_playPauseButtonIcon_withYellowPlayButton__osz8_',
                buttonContainer: 'SonataFullscreenControlsDesktop_buttonContainer__SpXWc',
            };
        },
        24915: (e) => {
            e.exports = {
                root_withLongText: 'BaseNotificationPin_root_withLongText__BKqhi',
                title: 'BaseNotificationPin_title__46xmX',
                link: 'BaseNotificationPin_link__4EvPj',
                capitalizedEntity: 'BaseNotificationPin_capitalizedEntity__HePYm',
                text: 'BaseNotificationPin_text__LF3L_',
                image: 'BaseNotificationPin_image__O7ptT',
            };
        },
        25469: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => x });
            var i = a(25839),
                n = a(88204),
                r = a(74631),
                s = a(71035),
                o = a(26417),
                l = a(97109),
                d = a(27954),
                c = a(96618),
                u = a(33971),
                _ = a(49337);
            let m = (e, t) => (t === _.S.Dark ? Math.floor(0.8 * e) : Math.min(255, Math.floor(e + (255 - e) * 0.3))),
                p = (e) => e.toString(16).padStart(2, '0');
            var v = a(78978),
                h = a(27669);
            let b = (e) =>
                    (0, v.m)(e) &&
                    (e.type === h.k.PLAYLIST_GRADIENT || e.type === h.k.AXE_GRADIENT) &&
                    'object' == typeof e.payload &&
                    null !== e.payload &&
                    !Array.isArray(e.payload) &&
                    'color' in e.payload,
                x = (0, n.PA)((e) => {
                    let { children: t, containerId: a, expectedType: n } = e,
                        {
                            advertBanners: {
                                banners: { brandedPlaylistBanner: _, brandedEntityAxeBanner: v },
                            },
                        } = (0, d.g)(),
                        { theme: x } = (0, c.W)(),
                        f = (0, r.useContext)(u.G),
                        [g, A] = (0, r.useState)(null),
                        C = (0, s.c)((e) => {
                            (0, o.f)(e, a, b) && e.data.type === n && A(e.data);
                        });
                    (0, r.useEffect)(
                        () => (
                            window.addEventListener('message', C),
                            () => {
                                window.removeEventListener('message', C);
                            }
                        ),
                        [C],
                    );
                    let N = n === h.k.PLAYLIST_GRADIENT && _.isVisible && _.type !== l.h.EMPTY,
                        y = n === h.k.AXE_GRADIENT && v.isVisible && v.type !== l.h.EMPTY,
                        T = N || y,
                        S = (0, r.useMemo)(() => {
                            if ((null == g ? void 0 : g.payload.color) === void 0) return {};
                            let e = {
                                '--entity-branding-gradient-color-from':
                                    v.isVisible && v.type !== l.h.EMPTY && x
                                        ? ((e, t) => {
                                              let a = e.replace('#', '');
                                              if (
                                                  (3 === a.length &&
                                                      (a = a
                                                          .split('')
                                                          .map((e) => e + e)
                                                          .join('')),
                                                  6 !== a.length)
                                              )
                                                  return e;
                                              let i = parseInt(a.substring(0, 2), 16),
                                                  n = parseInt(a.substring(2, 4), 16),
                                                  r = parseInt(a.substring(4, 6), 16),
                                                  s = m(i, t),
                                                  o = m(n, t),
                                                  l = m(r, t);
                                              return '#'.concat(p(s)).concat(p(o)).concat(p(l));
                                          })(g.payload.color, x)
                                        : g.payload.color,
                                '--entity-branding-gradient-color-to': 'transparent',
                            };
                            return null === g.payload.button
                                ? e
                                : {
                                      ...e,
                                      '--entity-branding-button-background-color': g.payload.button.backgroundColor,
                                      '--entity-branding-button-text-color': g.payload.button.textColor,
                                  };
                        }, [null == g ? void 0 : g.payload.color, null == g ? void 0 : g.payload.button, x, v.isVisible, v.type]),
                        E = (0, r.useMemo)(() => (T && null !== g ? { data: { type: g.type, style: S, button: g.payload.button }, isEnabled: T } : f), [g, S, T, f]);
                    return (0, i.jsx)(u.G.Provider, { value: E, children: t });
                });
        },
        25734: (e) => {
            e.exports = {
                root: 'SideAdvertBanner_root__hT1jJ',
                root_vibePage: 'SideAdvertBanner_root_vibePage__PLY_P',
                root_hidden: 'SideAdvertBanner_root_hidden__Yg__R',
                contentWrapper: 'SideAdvertBanner_contentWrapper__5255E',
                content: 'SideAdvertBanner_content__nDGWG',
            };
        },
        26417: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            let i = (e, t, a) => {
                var i, n, r;
                let s = null != (r = null == (n = document.getElementById(t)) || null == (i = n.querySelector('iframe')) ? void 0 : i.contentWindow) ? r : null;
                return null !== s && e.source === s && ('null' === window.location.origin || e.origin === window.location.origin) && a(e.data);
            };
        },
        26669: (e) => {
            e.exports = { root: 'TicketImage_root__vTgWd' };
        },
        27243: (e, t, a) => {
            'use strict';
            a.d(t, { ErrorBoundary: () => d });
            var i = a(58025),
                n = a(25839),
                r = a(74631),
                s = a(36484),
                o = a(62562);
            class l extends r.Component {
                static getDerivedStateFromError(e) {
                    return { hasError: !0, error: e };
                }
                componentDidCatch(e, t) {
                    this.props.logger.error(e, { additional: t, type: 'error-boundary' });
                }
                render() {
                    let { hasError: e } = this.state,
                        { fallback: t, children: a } = this.props;
                    return e ? (0, n.jsx)(t, {}) : a;
                }
                constructor(...e) {
                    (super(...e), (0, i._)(this, 'state', { hasError: !1 }));
                }
            }
            let d = (function (e) {
                let t = (t) => {
                    let a = (0, o.N)().get(s.Zf);
                    return (0, n.jsx)(e, { ...t, logger: a });
                };
                return ((t.displayName = 'withContainer('.concat(e.displayName || e.name || 'Component', ')')), t);
            })(l);
        },
        27559: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => E });
            var i = a(25839),
                n = a(82298),
                r = a(88204),
                s = a(74631),
                o = a(39004),
                l = a(8487),
                d = a(61493),
                c = a(3392),
                u = a(4254),
                _ = a(4331),
                m = a(24574),
                p = a(27954),
                v = a(19410),
                h = a(12929),
                b = a(62926),
                x = a(97522),
                f = a(40846),
                g = a(91171),
                A = a(87221),
                C = a(30408),
                N = a(12752),
                y = a.n(N),
                T = a(40150),
                S = a.n(T);
            let E = (0, r.PA)((e) => {
                var t, a, r, N, T;
                let {
                        track: E,
                        className: B,
                        withAuthor: I,
                        withSecondaryColor: j = !1,
                        withListeningProgress: P = !1,
                        captionSize: k = 'm',
                        explicitSize: w = 'xs',
                        withExplicitMark: L,
                        titleContainerClassName: O,
                        textClassName: D,
                        playContextParams: R,
                        withTimeLeftText: M = !0,
                        ignoreDislikedStyles: F,
                        albumArtists: U,
                        withCustomTooltip: z = !0,
                        hasLineClamp: W = !0,
                        withSavingQueryParams: V,
                        beforeTitle: H,
                        afterTitle: K,
                        withContextMenuArtists: G,
                        withArtistLink: $,
                    } = e,
                    {
                        sonataState: Y,
                        slam: q,
                        settings: { isMobile: Z },
                    } = (0, p.g)(),
                    { formatMessage: X } = (0, o.A)(),
                    Q = (0, g.$)({ withCustomTooltip: z }),
                    J = (0, A.O)({ track: E, withSavingQueryParams: V, entityType: h.n.AUDIOBOOK }),
                    ee = !!(P && R && E.shouldRememberPosition && E.streamProgress && E.durationMs),
                    et =
                        E.id === (null == (t = Y.entityMeta) ? void 0 : t.id) &&
                        (null == (r = Y.entityMeta) || null == (a = r.streamProgress) ? void 0 : a.endPositionSec),
                    ea = (0, C.d)(ee, E.streamProgress, et),
                    ei = ((e, t) => {
                        let {
                                isMobile: a,
                                isOfflineModeEnabled: i,
                                shouldHideAudiobookInfo: n,
                                albumArtists: r,
                                withAuthor: s,
                                withArtistLink: o,
                                withExplicitMark: l,
                            } = t,
                            d = (0, f.B)(e, { isMobile: a, isOfflineModeEnabled: i, albumArtists: r, withArtistLink: o, withExplicitMark: l }),
                            c = !!(s && d.artists.length > 0 && !n);
                        return { ...d, hasAuthor: c };
                    })(E, {
                        isMobile: Z,
                        isOfflineModeEnabled: q.isOfflineModeEnabled,
                        shouldHideAudiobookInfo: ea,
                        albumArtists: U,
                        withAuthor: I,
                        withArtistLink: $,
                        withExplicitMark: L,
                    }),
                    en = (0, s.useCallback)(
                        (e) =>
                            (0, i.jsx)(c.m_, {
                                enabled: Q && !Z,
                                offsetOptions: 4,
                                placement: 'top',
                                text: E.title,
                                hoverSettings: v.V,
                                children: (0, i.jsx)(u.HL, {
                                    className: y().title,
                                    type: 'entity',
                                    size: k,
                                    variant: 'span',
                                    title: Q ? void 0 : E.title,
                                    ...e,
                                    children: E.title,
                                }),
                            }),
                        [Z, Q, k, E.title],
                    ),
                    er = null == (N = ei.link) ? void 0 : N.href,
                    es = (0, s.useMemo)(() => {
                        if (ei.shouldShowRemovedTitle) return (0, i.jsx)(l.A, { id: 'track-title.audiobook-not-found' });
                        if (void 0 !== er) {
                            var e;
                            return (0, i.jsx)(x.N, {
                                'aria-label': X({ id: 'entity-names.audiobook-name' }, { bookName: null == (e = E.mainAlbum) ? void 0 : e.title }),
                                className: y().albumLink,
                                href: er,
                                title: Q ? void 0 : E.title,
                                onClick: J,
                                'data-test-id': d.Kq.track.TRACK_TITLE,
                                children: en(),
                            });
                        }
                        return en({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [ei.shouldShowRemovedTitle, er, null == (T = E.mainAlbum) ? void 0 : T.title, E.title, en, X, Q, J]),
                    eo = (0, s.useMemo)(() => +!!W, [W]);
                return (0, i.jsx)('div', {
                    className: (0, n.$)(y().root, { [y().root_disabled]: !E.isAvailable, [y().root_disliked]: E.isDisliked && !F, [y().root_withSecondaryColor]: j }, B),
                    children: (0, i.jsxs)('div', {
                        className: (0, n.$)(y().metaContainer, S().metaContainer, { [S().metaContainer_oneLine]: !I }),
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, n.$)(y().titleContainer, O, S().titleContainer),
                                children: [
                                    (0, i.jsxs)(u.HL, {
                                        className: (0, n.$)(y().text, D),
                                        type: 'entity',
                                        size: k,
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            H,
                                            es,
                                            ei.version &&
                                                (0, i.jsxs)(u.HL, {
                                                    className: (0, n.$)(y().text, y().version),
                                                    type: 'entity',
                                                    size: k,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Q ? void 0 : ei.version,
                                                    children: ['\xa0', ei.version],
                                                }),
                                        ],
                                    }),
                                    ei.explicitMark &&
                                        (0, i.jsx)(b.N, {
                                            containerClassName: y().explicitMarkContainer,
                                            getDescriptionTexts: E.getDescriptionTexts,
                                            variant: ei.explicitMark,
                                            className: y().explicitMark,
                                            size: w,
                                            trackId: E.id,
                                        }),
                                    K,
                                ],
                            }),
                            ei.hasAuthor &&
                                (0, i.jsx)(u.HL, {
                                    type: 'entity',
                                    size: k,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, n.$)(y().text, S().artists, D),
                                    children: (0, i.jsx)(_.i, {
                                        className: (0, n.$)(y().text, { [y().artists]: W }, D),
                                        linkClassName: (0, n.$)(y().text, y().link),
                                        captionClassName: (0, n.$)(y().text, y().artistCaption),
                                        artists: ei.artists,
                                        withLink: ei.withArtistLink,
                                        lineClamp: eo,
                                        captionSize: k,
                                        withContextMenu: G,
                                    }),
                                }),
                            ee &&
                                E.streamProgress &&
                                R &&
                                (0, i.jsx)(m.B, {
                                    className: (0, n.$)(S().progress, {
                                        [S().progress_withPreviousInfo]: ei.hasAuthor,
                                        [S().progress_disabled]: !E.isAvailable || E.isDisliked,
                                    }),
                                    id: E.id,
                                    albumId: E.albumId,
                                    streamProgress: E.streamProgress,
                                    durationMs: E.durationMs || 0,
                                    playContextParams: R,
                                    withTimeLeftText: M,
                                }),
                        ],
                    }),
                });
            });
        },
        27669: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => i });
            var i = (function (e) {
                return ((e.PLAYLIST_GRADIENT = 'branded_playlist_gradient'), (e.AXE_GRADIENT = 'branded_axe_gradient'), e);
            })({});
        },
        27892: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => s });
            var i = a(25839),
                n = a(35015),
                r = a(10546);
            let s = (e) => {
                let { playlist: t, closeToast: a } = e;
                return (0, i.jsx)(r.k, {
                    closeToast: a,
                    entityVariant: n.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        28087: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => n });
            var i = a(38832);
            let n = (e) => {
                var t, a;
                return null != (a = null == (t = (0, i.j)()) ? void 0 : t.get(e)) ? a : null;
            };
        },
        28764: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => c });
            var i = a(74631),
                n = a(71035),
                r = a(27954);
            a(44806);
            var s = a(6969),
                o = a(25895),
                l = (a(28087), a(38832)),
                d = (a(8266), a(83918));
            let c = () => {
                let {
                        experiments: e,
                        user: {
                            account: {
                                data: { hasPlus: t },
                            },
                        },
                    } = (0, r.g)(),
                    a = (0, d.X)(),
                    c = (0, i.useCallback)(() => {}, [!1]),
                    u = (0, n.c)((e, t) => {}),
                    _ = (0, n.c)(() => {
                        let e = (0, l.j)();
                        if (null === e) return;
                        e.delete(s.K.CLID);
                        let t = new URL(window.location.href);
                        ((t.search = e.toString()), a(t.toString()));
                    }),
                    m = (0, n.c)((e, t) => {
                        if (!e || !t) return;
                        let a = c();
                        if (!a) return;
                        let { parsedClid: i } = a;
                        return t === i.albumId && e.clid === i.cpa.clid && e.artistId === i.cpa.artistId;
                    }),
                    p = (0, n.c)((e) => {
                        let t = c();
                        return (null == t ? void 0 : t.parsedClid.albumId) === e;
                    }),
                    v = (0, n.c)((e, t) => {
                        let a = c();
                        if (!a || a.parsedClid.albumId !== e) return t;
                        let { href: i } = (0, o.u)(t, { query: { [s.K.CLID]: a.queryClid } });
                        return i;
                    });
                return {
                    isCPAEnabled: !1,
                    getClidFromQuery: c,
                    setClidToQuery: u,
                    deleteClidFromQuery: _,
                    checkIsValidClid: m,
                    getAlbumUrlWithSavedClid: v,
                    checkIsCurrentAlbumPage: p,
                };
            };
        },
        28903: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => u });
            var i = a(25839),
                n = a(82298),
                r = a(74631),
                s = a(61493),
                o = a(4254),
                l = a(77501),
                d = a.n(l),
                pulseSyncTimestampReact = r;
            let c = (e) => {
                    let { value: t, variant: a, className: r, forwardRef: l, ...c } = e,
                        u = 'start' === a ? s.Kq.changeTimecode.TIMECODE_TIME_START : s.Kq.changeTimecode.TIMECODE_TIME_END,
                        [pulseSyncShowTimestamps, setPulseSyncShowTimestamps] = (0, pulseSyncTimestampReact.useState)(() =>
                            Boolean(window.ALWAYS_SHOW_PLAYER_TIMESTAMPS?.()),
                        );
                    (0, pulseSyncTimestampReact.useEffect)(() => {
                        const unsubscribe = window.desktopEvents?.on?.('NATIVE_STORE_UPDATE', (event, key, value) => {
                            if (key === 'modSettings.playerBarEnhancement.alwaysShowTimestamps') setPulseSyncShowTimestamps(Boolean(value));
                        });
                        return () => {
                            if (typeof unsubscribe === 'function') unsubscribe();
                        };
                    }, []);
                    return (0, i.jsx)(o.HL, {
                        ref: l,
                        tabIndex: 0,
                        className: (0, n.$)(d().root, d()['root_'.concat(a)], r),
                        variant: 'span',
                        size: 's',
                        type: 'entity',
                        weight: 'medium',
                        ...c,
                        style: pulseSyncShowTimestamps ? { ...c.style, opacity: 1 } : c.style,
                        'data-test-id': u,
                        children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: t }),
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
        },
        30408: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => n });
            var i = a(27954);
            let n = (e, t, a) => {
                let {
                    settings: { isMobile: n },
                } = (0, i.g)();
                return !!(n && e && (((null == t ? void 0 : t.endPositionSec) && t.endPositionSec > 0) || (null == t ? void 0 : t.hasEverFinished) || (a && a > 0)));
            };
        },
        30787: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            let i = (e, t) => {
                let [a, i] = e.split('?'),
                    n = new URLSearchParams(i || '');
                for (let [e, a] of new URLSearchParams(t).entries()) n.set(e, a);
                let r = n.toString();
                return ''.concat(a).concat(r ? '?'.concat(r) : '');
            };
        },
        30883: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => h });
            var i = a(25839),
                n = a(82298),
                r = a(88204),
                s = a(74631),
                o = a(8487),
                l = a(4071),
                d = a(23818),
                c = a(4254),
                u = a(94041),
                _ = a(27954),
                m = a(97522),
                p = a(17421),
                v = a.n(p);
            let h = (0, r.PA)((e) => {
                let { className: t, data: a, mediaContent: r, linkClassName: p } = e,
                    {
                        settings: { isMobile: h },
                    } = (0, _.g)(),
                    b = (0, u.r)(),
                    x = (0, s.useMemo)(
                        () =>
                            (null == b ? void 0 : b.state.clickThrough)
                                ? (0, i.jsx)(l.$, {
                                      className: (0, n.$)(v().button, p),
                                      variant: 'default',
                                      radius: 'xxxl',
                                      onClick: b.state.clickThrough,
                                      children: (0, i.jsx)(o.A, { id: 'ads.learn-more' }),
                                  })
                                : (null == a ? void 0 : a.clickThroughUrl)
                                  ? (0, i.jsx)(m.N, {
                                        target: '_blank',
                                        href: a.clickThroughUrl,
                                        className: (0, n.$)(v().button, v().linkButton, p),
                                        children: (0, i.jsx)(o.A, { id: 'ads.learn-more' }),
                                    })
                                  : (0, i.jsx)(l.$, {
                                        className: (0, n.$)(v().button, p),
                                        variant: 'default',
                                        radius: 'xxxl',
                                        disabled: !0,
                                        children: (0, i.jsx)(o.A, { id: 'ads.learn-more' }),
                                    }),
                        [null == a ? void 0 : a.clickThroughUrl, null == b ? void 0 : b.state.clickThrough, p],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(v().root, t),
                    children: [
                        r,
                        (0, i.jsxs)('div', {
                            className: v().container,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: v().info,
                                    children: [
                                        (0, i.jsx)(d._V, {
                                            className: v().favicon,
                                            withAspectRatio: !0,
                                            'aria-hidden': !0,
                                            fit: 'cover',
                                            src: (null == a ? void 0 : a.iconSrc) || '',
                                            alt: '',
                                            fallbackIconVariant: 'picture',
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: v().text,
                                            children: [
                                                (0, i.jsx)(c.HL, {
                                                    variant: 'div',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    className: v().title,
                                                    lineClamp: h ? 5 : void 0,
                                                    children: null == a ? void 0 : a.adTitle,
                                                }),
                                                (0, i.jsx)(c.HL, {
                                                    variant: 'div',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: v().subtitle,
                                                    children: (0, i.jsx)(o.A, { id: 'ads.ad' }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)('div', { className: v().buttonContainer, children: x }),
                            ],
                        }),
                    ],
                });
            });
        },
        32299: (e) => {
            e.exports = {
                root: 'PinsList_root__LN_2Z',
                root_withScroll: 'PinsList_root_withScroll__g8x3V',
                root_hasPins: 'PinsList_root_hasPins__3LXlo',
                content: 'PinsList_content__9RG7s',
                pin_enter: 'PinsList_pin_enter__2p2_6',
                pin_enter_active: 'PinsList_pin_enter_active__eNGlc',
                'enter-fade': 'PinsList_enter-fade__G_QY8',
                'enter-move': 'PinsList_enter-move__DSAXH',
                pin_exit: 'PinsList_pin_exit__y_gcM',
                pin_exit_active: 'PinsList_pin_exit_active__rF5Je',
                'exit-fade': 'PinsList_exit-fade__M6fYX',
                'exit-move': 'PinsList_exit-move__Jtgi0',
            };
        },
        33074: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => T });
            var i = a(25839),
                n = a(88204),
                r = a(74631),
                s = a(71035),
                o = a(49656),
                l = a(94860),
                d = a(27954),
                c = a(5668),
                u = a(18197),
                _ = a(49438),
                m = a(56530),
                p = a(82298),
                v = a(39004),
                h = a(61493),
                b = a(4071),
                x = a(66738),
                f = a(14930),
                g = a(45503),
                A = a(97975),
                C = a.n(A);
            let N = (0, n.PA)((e) => {
                    let {
                            className: t,
                            withShuffle: a,
                            shuffle: n,
                            canMoveBackward: r,
                            canMoveForward: o,
                            onClickNext: l,
                            onClickPrev: d,
                            withRepeat: c,
                            repeatMode: u,
                            playButton: _,
                            isDisabledShuffle: m,
                            isDisabledRepeat: A,
                            onRepeatClick: N,
                            onShuffleClick: y,
                        } = e,
                        { formatMessage: T } = (0, v.A)(),
                        S = (0, s.c)(() => {
                            l();
                        }),
                        E = (0, s.c)(() => {
                            d();
                        });
                    return (0, i.jsxs)('div', {
                        className: (0, p.$)(C().root, t),
                        children: [
                            a &&
                                (0, i.jsx)('div', {
                                    className: C().buttonContainer,
                                    children: (0, i.jsx)(g.u, {
                                        className: C().sonataButton,
                                        size: 'xxxs',
                                        variant: 'text',
                                        iconSize: 'xs',
                                        isDisabled: m,
                                        shuffle: n,
                                        onClick: y,
                                        'data-test-id': h.Kq.sonata.SHUFFLE_BUTTON,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: C().sonataButtons,
                                children: [
                                    (0, i.jsx)(b.$, {
                                        className: C().sonataButton,
                                        variant: 'text',
                                        size: 'm',
                                        radius: 'round',
                                        disabled: !r,
                                        focusableWhenDisabled: !0,
                                        withRipple: !1,
                                        'aria-label': T({ id: 'player-actions.previous-track' }),
                                        icon: (0, i.jsx)(x.I, { variant: 'previous', size: 'xxs' }),
                                        onClick: E,
                                        'data-test-id': h.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                    }),
                                    _,
                                    (0, i.jsx)(b.$, {
                                        className: C().sonataButton,
                                        radius: 'round',
                                        size: 'm',
                                        variant: 'text',
                                        disabled: !o,
                                        focusableWhenDisabled: !0,
                                        withRipple: !1,
                                        'aria-label': T({ id: 'player-actions.next-track' }),
                                        icon: (0, i.jsx)(x.I, { variant: 'next', size: 'xxs' }),
                                        onClick: S,
                                        'data-test-id': h.Kq.sonata.NEXT_TRACK_BUTTON,
                                    }),
                                ],
                            }),
                            c &&
                                (0, i.jsx)('div', {
                                    className: C().buttonContainer,
                                    children: (0, i.jsx)(f.s, {
                                        className: C().sonataButton,
                                        size: 'xxxs',
                                        variant: 'text',
                                        isDisabled: A,
                                        iconSize: 'xs',
                                        repeatMode: u,
                                        onClick: N,
                                    }),
                                }),
                        ],
                    });
                }),
                y = { mainAxis: 44 },
                T = (0, n.PA)((e) => {
                    let {
                            disabled: t,
                            isPlaying: a,
                            repeatMode: n,
                            canMoveForward: p,
                            canMoveBackward: v,
                            canShuffle: h,
                            shuffle: b,
                            onClickNext: x,
                            onClickPrev: f,
                            onClickPlayPause: g,
                            canChangeRepeatMode: A,
                            className: T,
                            withShuffle: S,
                            withRepeat: E,
                            onRepeatClick: B,
                            onShuffleClick: I,
                        } = e,
                        { advert: j, freePlayerAccess: P, freeAccess: k, user: w, paymentWidgetModal: L } = (0, d.g)();
                    (0, m.e)();
                    let O = (0, r.useCallback)(
                            () =>
                                (0, i.jsx)(_.D, {
                                    className: C().sonataButton,
                                    iconSize: 'l',
                                    variant: 'filled',
                                    isPlaying: a,
                                    iconClassName: C().playButtonIcon,
                                    onClick: g,
                                }),
                            [a, g],
                        ),
                        D = (0, s.c)((e) => {
                            e || P.hideRestrictionModal();
                        }),
                        R = (0, o.L)(() => {
                            let e = k.isFreeWebUser && w.isAuthorized && !k.limitedFreePlayback ? 'vibe' : 'fullTracks';
                            return P.shownRestrictionModal === l.h.PlayerAuthorization
                                ? (0, i.jsx)(u.Z, { isOpened: !0, placement: 'top', onOpenChange: D, offsetOptions: y, textVariant: e, renderChildren: O })
                                : L.modal.isOpened || P.shownRestrictionModal !== l.h.PlayerSubscription
                                  ? O()
                                  : (0, i.jsx)(c.S, { isOpened: !0, placement: 'top', onOpenChange: D, offsetOptions: y, textVariant: e, renderChildren: O });
                        });
                    return (0, i.jsx)(N, {
                        isDisabledRepeat: !A || t,
                        isDisabledShuffle: !h || t,
                        withShuffle: ((t || h) && !(null == j ? void 0 : j.isAdvertShown)) || !!S,
                        shuffle: b,
                        canMoveBackward: v,
                        canMoveForward: p,
                        onClickNext: x,
                        onClickPrev: f,
                        withRepeat: ((t || A) && !(null == j ? void 0 : j.isAdvertShown)) || !!E,
                        repeatMode: n,
                        className: T,
                        playButton: R,
                        onRepeatClick: B,
                        onShuffleClick: I,
                    });
                });
        },
        33180: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => m });
            var i = a(25839),
                n = a(74631),
                r = a(39004),
                s = a(61493),
                o = a(71035),
                l = a(4071),
                d = a(66738),
                c = a(30296),
                u = a(73519);
            let _ = (e) => {
                    var t, a, _;
                    let {
                            className: m,
                            variant: p = 'text',
                            iconSize: v,
                            onClick: h,
                            iconClassName: b,
                            withRipple: x = !1,
                            size: f = 's',
                            forwardRef: g,
                            children: A,
                            color: C,
                            disabled: N = !1,
                            isIconCentered: y = !1,
                        } = e,
                        T = (0, c.e)(),
                        { formatMessage: S } = (0, r.A)(),
                        E = null != (t = null == T ? void 0 : T.state.playerState.speed.value) ? t : 1,
                        B = null != (a = u.f_[E]) ? a : 0,
                        [I, j] = (0, n.useState)(B),
                        P = null != (_ = u.pp[I]) ? _ : 1,
                        k = (0, o.c)(() => {
                            var e;
                            let t = (I + 1) % u.pp.length;
                            (j(t), null == T || T.setSpeed(Number(null != (e = u.pp[t]) ? e : 1)), null == h || h());
                        });
                    return (
                        (0, n.useEffect)(() => {
                            let e =
                                null == T
                                    ? void 0
                                    : T.state.playerState.speed.onChange(() => {
                                          var e;
                                          let t = T.state.playerState.speed.value;
                                          j(null != (e = u.f_[t]) ? e : 0);
                                      });
                            return () => {
                                null == e || e();
                            };
                        }, [T]),
                        (0, i.jsx)(l.$, {
                            className: m,
                            color: C,
                            withRipple: x,
                            variant: p,
                            size: f,
                            radius: 'xxxl',
                            'aria-label': S({ id: 'interface-actions.speed' }, { speed: P }),
                            onClick: k,
                            icon: (0, i.jsx)(d.I, { size: v, className: b, variant: (0, u.CU)(P, y) }),
                            ref: g,
                            disabled: N,
                            'data-test-id': s.S7.SPEED_BUTTON,
                            children: A,
                        })
                    );
                },
                m = (0, n.forwardRef)((e, t) => (0, i.jsx)(_, { forwardRef: t, ...e }));
        },
        33971: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => i });
            let i = (0, a(74631).createContext)({ data: null, isEnabled: !1 });
        },
        34656: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => r });
            var i = a(12714),
                n = a(49337);
            let r = (e) => {
                (document.body.classList.remove(...Object.values(i.o)), e && Object.values(n.S).includes(e) && document.body.classList.add(i.o[e]));
            };
        },
        36286: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        36577: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => _ });
            var i = a(25839),
                n = a(33660),
                r = a(74631),
                s = a(39004),
                o = a(91149),
                l = a(92942),
                d = a(27954),
                c = a(57549),
                u = a(92657);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: a } = (0, l.l)(),
                    { formatMessage: _ } = (0, s.A)(),
                    [m, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void a((0, i.jsx)(c.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let s = await e.togglePin();
                    (p(!1),
                        s
                            ? a((0, i.jsx)(u.l, { album: r }), { containerId: o.u.INFO })
                            : a((0, i.jsx)(c.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, _, a, m, t.isAuthorized]);
            };
        },
        38726: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => c });
            var i = a(25839),
                n = a(88204),
                r = a(61493),
                s = a(66738),
                o = a(10820),
                l = a(77174),
                d = a(27954);
            let c = (0, n.PA)((e) => {
                let { isLiked: t, onClick: a, className: n, iconClassName: c, albumType: u, disabled: _ } = e,
                    { user: m } = (0, d.g)(),
                    p = t ? 'liked' : 'like',
                    v = (0, l.$)(t, u);
                return (0, i.jsx)(o.Dr, {
                    className: n,
                    onClick: a,
                    icon: (0, i.jsx)(s.I, { className: c, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: _ || !m.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: v,
                });
            });
        },
        38787: (e) => {
            e.exports = { root: 'PlusNavbarButton_root__kdY04', plusButtonShimmer: 'PlusNavbarButton_plusButtonShimmer__6t1go' };
        },
        39528: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => n });
            var i = a(25895);
            let n = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        40039: (e) => {
            e.exports = {
                root: 'SonataFullscreenControlsMobile_root__H6MQ7',
                sonataButtons: 'SonataFullscreenControlsMobile_sonataButtons__hLf19',
                sonataButton: 'SonataFullscreenControlsMobile_sonataButton__UGQ_U',
                playPauseButtonIcon: 'SonataFullscreenControlsMobile_playPauseButtonIcon__e5ygU',
                buttonContainer: 'SonataFullscreenControlsMobile_buttonContainer__5ITqM',
            };
        },
        40150: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                explicitMark: 'AudiobookMeta_explicitMark__1rN7x',
                metaContainer: 'AudiobookMeta_metaContainer__F7d9X',
                metaContainer_oneLine: 'AudiobookMeta_metaContainer_oneLine__D9CQh',
                titleContainer: 'AudiobookMeta_titleContainer__GIY6Q',
                artists: 'AudiobookMeta_artists__ScMoq',
                progress: 'AudiobookMeta_progress__i3_kS',
                progress_disabled: 'AudiobookMeta_progress_disabled__D_7E9',
                progress_withPreviousInfo: 'AudiobookMeta_progress_withPreviousInfo__97Hxr',
            };
        },
        41199: (e) => {
            e.exports = {
                shuffleIcon_off: 'ShuffleButton_shuffleIcon_off___oqrr',
                shuffleIcon_on: 'ShuffleButton_shuffleIcon_on__qFJqV',
                shuffleIcon_disabled: 'ShuffleButton_shuffleIcon_disabled__fQsOo',
            };
        },
        41544: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => S });
            var i = a(25839),
                n = a(82298),
                r = a(88204),
                s = a(84059),
                o = a(74631),
                l = a(39004),
                d = a(8487),
                c = a(61493),
                u = a(49656),
                _ = a(3392),
                m = a(4254),
                p = a(4331),
                v = a(85743),
                h = a(27954),
                b = a(19410),
                x = a(12929),
                f = a(62926),
                g = a(97522),
                A = a(40846),
                C = a(91171),
                N = a(87221),
                y = a(12752),
                T = a.n(y);
            let S = (0, r.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: a,
                        track: r,
                        albumArtists: y,
                        withExplicitMark: S,
                        withSecondaryColor: E,
                        captionSize: B = 'm',
                        explicitSize: I = 'xxxs',
                        withAllArtistsTitle: j,
                        textClassName: P,
                        artistsClassName: k,
                        ignoreDislikedStyles: w,
                        withCustomTooltip: L = !0,
                        hasLineClamp: O = !0,
                        withSavingQueryParams: D,
                        beforeTitle: R,
                        withArtistLink: M,
                        withTrackLink: F,
                        afterTitle: U,
                        withContextMenuArtists: z,
                    } = e,
                    { formatMessage: W } = (0, l.A)(),
                    { sendNavigateSearchFeedback: V } = (0, v.z)(),
                    {
                        settings: { isMobile: H },
                        slam: K,
                    } = (0, h.g)(),
                    G = (0, C.$)({ withCustomTooltip: L }),
                    $ = (0, s.useSearchParams)(),
                    Y = (0, A.B)(r, {
                        isMobile: H,
                        isOfflineModeEnabled: K.isOfflineModeEnabled,
                        albumArtists: y,
                        withTrackLink: F,
                        withArtistLink: M,
                        withExplicitMark: S,
                        query: D ? Object.fromEntries($) : void 0,
                    }),
                    q = (0, o.useMemo)(() => {
                        var e;
                        let t = W({ id: 'entity-names.track-name' }, { trackName: r.title });
                        return ''.concat(t, ' ').concat(null != (e = r.version) ? e : '');
                    }, [W, r.title, r.version]),
                    Z = (0, N.O)({ track: r, onNavigate: V, withSavingQueryParams: D, entityType: x.n.TRACK }),
                    X = (0, o.useCallback)(
                        (e) => {
                            var t;
                            let a = ''.concat(Y.title, ' ').concat(null != (t = Y.version) ? t : '');
                            return (0, i.jsx)(_.m_, {
                                enabled: G && !H,
                                offsetOptions: 4,
                                placement: 'top',
                                text: a,
                                hoverSettings: b.V,
                                children: (0, i.jsx)(m.HL, {
                                    className: (0, n.$)(T().text, T().title),
                                    type: 'entity',
                                    size: B,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: Y.title,
                                }),
                            });
                        },
                        [H, G, B, Y.title, Y.version],
                    ),
                    Q = (0, u.L)(() => {
                        var e;
                        let t = ''.concat(Y.title, ' ').concat(null != (e = Y.version) ? e : '');
                        return Y.shouldShowRemovedTitle
                            ? (0, i.jsx)(_.m_, {
                                  enabled: G && !H,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: W({ id: 'track-title.error-not-found' }),
                                  hoverSettings: b.V,
                                  children: (0, i.jsx)(m.HL, {
                                      className: (0, n.$)(T().text, T().title),
                                      type: 'entity',
                                      size: B,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: G ? void 0 : W({ id: 'track-title.error-not-found' }),
                                      children: (0, i.jsx)(d.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : Y.link
                              ? (0, i.jsx)(g.N, {
                                    onClick: Z,
                                    className: T().albumLink,
                                    href: Y.link.href,
                                    'aria-label': q,
                                    title: G ? void 0 : t,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: X(),
                                })
                              : X({ 'data-test-id': c.Kq.track.TRACK_TITLE });
                    }),
                    J = (0, o.useMemo)(() => +!!O, [O]);
                return (0, i.jsx)('div', {
                    className: (0, n.$)(T().root, { [T().root_disabled]: !r.isAvailable, [T().root_disliked]: r.isDisliked && !w, [T().root_withSecondaryColor]: E }, t),
                    children: (0, i.jsxs)('div', {
                        className: T().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, n.$)(T().titleContainer, { [T().titleContainer_withVersion]: r.version }, a),
                                children: [
                                    (0, i.jsxs)(m.HL, {
                                        className: (0, n.$)(T().text, P),
                                        type: 'entity',
                                        size: B,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            R,
                                            Q,
                                            Y.version &&
                                                (0, i.jsxs)(m.HL, {
                                                    className: (0, n.$)(T().text, T().version),
                                                    type: 'entity',
                                                    size: B,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: G ? void 0 : Y.version,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', Y.version],
                                                }),
                                        ],
                                    }),
                                    Y.explicitMark &&
                                        (0, i.jsx)(f.N, {
                                            containerClassName: T().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: I,
                                            variant: Y.explicitMark,
                                            className: T().explicitMark,
                                            trackId: r.id,
                                        }),
                                    U,
                                ],
                            }),
                            Y.artists.length > 0 &&
                                (0, i.jsx)(p.i, {
                                    className: (0, n.$)(T().text, { [T().artists]: O }, k, P),
                                    withAllArtistsTitle: j,
                                    linkClassName: (0, n.$)(T().text, T().link),
                                    captionClassName: (0, n.$)(T().text, T().artistCaption),
                                    artists: Y.artists,
                                    withLink: Y.withArtistLink,
                                    lineClamp: J,
                                    captionSize: B,
                                    withContextMenu: z,
                                }),
                        ],
                    }),
                });
            });
        },
        41919: (e) => {
            e.exports = { root: 'CustomPlayerThumb_root__hZTw6', container: 'CustomPlayerThumb_container__lBm2j' };
        },
        42853: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => n });
            var i = a(40110),
                n = (function (e) {
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
        43354: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => n, P: () => r });
            var i = a(74631);
            let n = (0, i.createContext)(null),
                r = () => (0, i.useContext)(n);
        },
        43465: (e) => {
            e.exports = {
                root: 'DefaultLayout_root__7J0wo',
                root_applicationPreserveTitleBar: 'DefaultLayout_root_applicationPreserveTitleBar__ygJtq',
                root_withBarBelow: 'DefaultLayout_root_withBarBelow__jPsaV',
                rootNewVibe: 'DefaultLayout_rootNewVibe__MSDOn',
                rootNewVibe_withBarBelow: 'DefaultLayout_rootNewVibe_withBarBelow__82_qG',
                barBelow: 'DefaultLayout_barBelow__y6PFU',
                navbar: 'DefaultLayout_navbar__LIQWG',
                navbar_application_macos: 'DefaultLayout_navbar_application_macos__9dj3u',
                navbar_application_linux: 'DefaultLayout_navbar_application_linux__ejlGn',
                navbar_application_windows: 'DefaultLayout_navbar_application_windows__3hDQ_',
            };
        },
        43878: (e) => {
            e.exports = { root: 'NavbarMobile_root__NhKBQ', user: 'NavbarMobile_user__vTEb2', disabledNavigationItem: 'NavbarMobile_disabledNavigationItem__PA3EE' };
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
        45503: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => _ });
            var i = a(25839),
                n = a(82298),
                r = a(39004),
                s = a(71035),
                o = a(4071),
                l = a(66738),
                d = a(61493),
                c = a(41199),
                u = a.n(c);
            let _ = (e) => {
                let { isDisabled: t, shuffle: a, className: c, size: _ = 'xxxs', variant: m = 'default', iconSize: p = 'xs', color: v, onClick: h } = e,
                    { formatMessage: b } = (0, r.A)(),
                    x = (0, s.c)((e) => {
                        (null == h || h(), e.stopPropagation());
                    });
                return (0, i.jsx)(o.$, {
                    className: c,
                    radius: 'round',
                    size: _,
                    variant: m,
                    color: v,
                    withRipple: !1,
                    disabled: t,
                    'aria-label': b({ id: 'player-actions.shuffle' }),
                    'aria-pressed': !t && a,
                    'aria-hidden': t,
                    icon: (0, i.jsx)(l.I, {
                        variant: 'shuffle',
                        size: p,
                        className: (0, n.$)(u().shuffleIcon, { [u().shuffleIcon_disabled]: t, [u().shuffleIcon_on]: !t && a, [u().shuffleIcon_off]: !t && !a }),
                    }),
                    onClick: x,
                    'data-test-id': !a || t ? d.Kq.sonata.SHUFFLE_BUTTON : d.Kq.sonata.SHUFFLE_BUTTON_ON,
                });
            };
        },
        46767: (e) => {
            e.exports = {
                root: 'NavbarDesktopPlusOptionsBar_root__2WZsH',
                addition: 'NavbarDesktopPlusOptionsBar_addition__DJOlV',
                title: 'NavbarDesktopPlusOptionsBar_title__wGODi',
                buttons: 'NavbarDesktopPlusOptionsBar_buttons__lzCHr',
                optionIcon: 'NavbarDesktopPlusOptionsBar_optionIcon__O1ccD',
            };
        },
        47249: (e) => {
            e.exports = {
                root: 'Pin_root__UyplT',
                ripple: 'Pin_ripple__Vzpzs',
                link: 'Pin_link__nz6I7',
                root_withoutLink: 'Pin_root_withoutLink__fr1XH',
                info: 'Pin_info__x_7Zx',
                info_withContextMenu: 'Pin_info_withContextMenu__7HX5A',
                info_collapsed: 'Pin_info_collapsed__bF9ac',
                info_animated: 'Pin_info_animated__AQQZk',
                show: 'Pin_show__xSkOa',
                hide: 'Pin_hide__RCc9X',
                meta: 'Pin_meta__MzX_7',
                contextMenu: 'Pin_contextMenu__WGmhp',
                contextMenu_hidden: 'Pin_contextMenu_hidden__xksGY',
                title: 'Pin_title__Jw5WW',
                subtitle: 'Pin_subtitle__rb8Gq',
                cover: 'Pin_cover__7ofYY',
                cover_withAnimation: 'Pin_cover_withAnimation__2Z2n6',
                show_and_scale: 'Pin_show_and_scale__VdNfj',
            };
        },
        48552: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(28410);
            let n = i.gK.model('CustomPlayerThumb', { href: i.gK.string, width: i.gK.number, height: i.gK.number });
        },
        48596: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => f });
            var i = a(25839),
                n = a(82298),
                r = a(74631),
                s = a(39004),
                o = a(61493),
                l = a(71035),
                d = a(49656),
                c = a(9794),
                u = a(94041),
                _ = a(91907),
                m = a(68215),
                p = a(30296),
                v = a(27954),
                h = a(49688),
                b = a.n(h),
                x = a(28903);
            let f = (e) => {
                var t, a, h, f;
                let {
                        className: g,
                        sliderClassName: A,
                        disabled: C,
                        isFullscreen: N,
                        isMobile: y,
                        showThumbVariant: T,
                        withTimecode: S = !0,
                        sonataPlaybackId: E,
                        customDuration: B,
                        canMoveForward: I,
                    } = e,
                    j = (0, p.e)(),
                    P = (N || !y) && S,
                    k = (0, r.useRef)(!1),
                    { sonataState: w } = (0, v.g)(),
                    [L, O] = (0, r.useState)(null != (h = w.position) ? h : 0),
                    [D, R] = (0, r.useState)(null != (f = w.duration) ? f : 0),
                    [M, F] = (0, r.useState)(0),
                    { formatMessage: U } = (0, s.A)(),
                    { advert: z } = (0, v.g)(),
                    W = (0, u.r)(),
                    V = L && D ? (100 * Math.min(L, D)) / D : 0,
                    H = null == j ? void 0 : j.getState(E),
                    K = (0, m.P)(L),
                    G = (0, _.E)(Math.round(L), Math.round(D)),
                    $ = (0, m.P)(D),
                    Y = B && L > B,
                    q = (0, l.c)((e, t) => {
                        z.isAdvertShown || ((k.current = !t), t ? null == j || j.setProgress(e, E) : O(e));
                    });
                (0, r.useEffect)(() => {
                    Y && (I ? null == j || j.moveForward(E) : (null == j || j.moveBackward(E), null == j || j.pause(E)));
                }, [I, Y, j, E]);
                let Z = (0, r.useCallback)(
                    (e) => {
                        e &&
                            (e.duration === 1 / 0
                                ? (R(0), O(0), F(0))
                                : (R(B && !z.isAdvertShown ? B : e.duration), O((t) => (k.current ? t : e.position)), F(e.loaded)));
                    },
                    [B, z.isAdvertShown],
                );
                (0, r.useEffect)(() => {
                    var e, t;
                    let a = null == W || null == (e = W.audioAdvertPlayback) ? void 0 : e.state.playerState.progress.onChange(Z),
                        i = null == H || null == (t = H.playerState) ? void 0 : t.progress.onChange(Z);
                    return () => {
                        (null == i || i(), null == a || a());
                    };
                }, [
                    null == W || null == (t = W.audioAdvertPlayback) ? void 0 : t.state.playerState.progress,
                    Z,
                    null == H || null == (a = H.playerState) ? void 0 : a.progress,
                ]);
                let X = (0, d.L)(() => {
                    if (0 !== D) return B && B <= D ? Math.round(B) : Math.round(D);
                });
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(b().root, { [b().root_fullscreen]: N, [b().root_mobile]: y, [b().root_withTimecode]: S }, g),
                    style: { '--track-progress': ''.concat(V, '%') },
                    'data-test-id': o.Kq.changeTimecode.TIMECODE_WRAPPER,
                    children: [
                        P && (0, i.jsx)(x.d, { role: 'text', 'aria-label': K, value: G, variant: 'start', className: b().timecode }),
                        (0, i.jsx)(c.A, {
                            'aria-valuetext': K,
                            className: (0, n.$)(b().slider, { [b()['slider_thumbSize_'.concat(y ? 'xs' : 'm')]]: !0 }, A),
                            disabled: C,
                            thumbSize: y ? 'xs' : 's',
                            trackSize: y ? 'xs' : 's',
                            value: Math.round(L),
                            mode: 'deferred',
                            secondaryValue: Math.round(M),
                            maxValue: X,
                            onChange: q,
                            'aria-label': U({ id: 'player-actions.timecode-control' }),
                            showThumbVariant: T,
                            'data-test-id': o.Kq.changeTimecode.TIMECODE_SLIDER,
                        }),
                        P && (0, i.jsx)(x.d, { role: 'text', 'aria-label': $, value: (0, _.E)(Math.round(D), Math.round(D)), variant: 'end', className: b().timecode }),
                    ],
                });
            };
        },
        49337: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => i });
            var i = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        49688: (e) => {
            e.exports = {
                timecode: 'ChangeTimecode_timecode__UScFt',
                root: 'ChangeTimecode_root__QxEw_',
                root_withTimecode: 'ChangeTimecode_root_withTimecode__eJhYI',
                root_mobile: 'ChangeTimecode_root_mobile__SzOdx',
                root_fullscreen: 'ChangeTimecode_root_fullscreen__FA6r0',
                slider: 'ChangeTimecode_slider__P4qmT',
            };
        },
        50314: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { h: () => i }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(i || (i = {})));
        },
        50587: (e) => {
            e.exports = {
                root: 'BrandedPlayerModal_root__hejJx',
                modalContent: 'BrandedPlayerModal_modalContent__xcXKK',
                image: 'BrandedPlayerModal_image__paBEA',
                closeButton: 'BrandedPlayerModal_closeButton__W3QRx',
                content: 'BrandedPlayerModal_content__b9e2P',
                actions: 'BrandedPlayerModal_actions__6aeD7',
                button: 'BrandedPlayerModal_button__WZTH7',
            };
        },
        51008: (e) => {
            e.exports = {
                collapseButton: 'NavbarDesktop_collapseButton__XQh9d',
                root: 'NavbarDesktop_root__scYzp',
                logoWrapper: 'NavbarDesktop_logoWrapper__89ce6',
                navigation: 'NavbarDesktop_navigation__dLUGW',
                navigation_new: 'NavbarDesktop_navigation_new__0j8W5',
                navigation_gapFill: 'NavbarDesktop_navigation_gapFill__SsWxA',
                navigationGroup: 'NavbarDesktop_navigationGroup__eexLF',
                logoLink: 'NavbarDesktop_logoLink__KR0Dk',
                logo: 'NavbarDesktop_logo__Z4jGx',
                collapseButtonTooltip_hidden: 'NavbarDesktop_collapseButtonTooltip_hidden__tFoZZ',
                subTitle: 'NavbarDesktop_subTitle__Fqvr4',
                subTitle_withCursorPointer: 'NavbarDesktop_subTitle_withCursorPointer__VYJOh',
                title: 'NavbarDesktop_title__OrnHN',
                title_animate: 'NavbarDesktop_title_animate__XLxaQ',
                animation_show: 'NavbarDesktop_animation_show__pRFj9',
                title_collapsed: 'NavbarDesktop_title_collapsed__IH9Bc',
                animation_hide: 'NavbarDesktop_animation_hide__8VxPs',
                pinsList: 'NavbarDesktop_pinsList___jXIM',
                scrollableContainer: 'NavbarDesktop_scrollableContainer__HLc9D',
                scrollableContent: 'NavbarDesktop_scrollableContent__OyU4P',
                disabledNavigationItem: 'NavbarDesktop_disabledNavigationItem__Qp_hs',
                bestRecommendationsModal: 'NavbarDesktop_bestRecommendationsModal__l7GD2',
                bestRecommendationsModalHeader: 'NavbarDesktop_bestRecommendationsModalHeader__VSi5Y',
                bestRecommendationsModalContent: 'NavbarDesktop_bestRecommendationsModalContent__WhwfK',
                bestRecommendationsModalLogo: 'NavbarDesktop_bestRecommendationsModalLogo__QnXgm',
                bestRecommendationsModalText: 'NavbarDesktop_bestRecommendationsModalText__05Z3M',
            };
        },
        51150: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => c });
            var i,
                n = a(6274),
                r = a(74631),
                s = {
                    352: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(r, 2));
                    },
                },
                o = {};
            function l(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var a = (o[e] = { exports: {} });
                return (s[e](a, a.exports, l), a.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, '__esModule', { value: !0 }), (d.useDebouncedToggle = void 0));
                let e = l(352),
                    t = l(810);
                d.useDebouncedToggle = (a) => {
                    let { delay: i, initialState: n, throttleTimeout: r } = a,
                        s = (0, t.useRef)(null),
                        [o, l] = (0, t.useState)(!!n),
                        d = (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(() => {
                                    (l(!n),
                                        s.current && window.clearTimeout(s.current),
                                        (s.current = window.setTimeout(() => {
                                            l(!!n);
                                        }, i)));
                                }, r),
                            [i, n, r],
                        ),
                        c = (0, t.useCallback)(() => {
                            (l(!!n), s.current && window.clearTimeout(s.current));
                        }, [n]);
                    return (
                        (0, t.useEffect)(
                            () => () => {
                                s.current && window.clearTimeout(s.current);
                            },
                            [],
                        ),
                        { state: o, handleDebouncedToggle: d, reset: c }
                    );
                };
            })(),
                d.__esModule);
            var c = d.useDebouncedToggle;
        },
        52970: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => o });
            var i = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (n && (n += ' '), (n += i));
                                            else for (a in t) t[a] && (n && (n += ' '), (n += a));
                                        return n;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => n }));
                        let n = i;
                    },
                    6927: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'sLuudThzDxW_5ARYjgjx', horizontal: 'xd6ji7lvp0et4nirt0TL', hasLabel: 'abbPp8VtL2D_PdW0Q_Wc', vertical: 'sMz62rSqViFDkXAMfGeO' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var n = null;
                            if ((void 0 !== i && (n = '' + i), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var r in ((i = {}), t)) 'key' !== r && (i[r] = t[r]);
                            else i = t;
                            return { $$typeof: a, type: e, key: n, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    9791: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Divider = void 0));
                        let n = a(4377),
                            r = a(5881),
                            s = i(a(6927));
                        t.Divider = (e) => {
                            let { className: t, orientation: a = 'horizontal', children: i, ...o } = e,
                                l = i && (0, n.jsx)('span', { children: i });
                            return (0, n.jsx)('div', {
                                className: (0, r.clsx)(s.default.root, { [s.default[a]]: a, [s.default.hasLabel]: l }, t),
                                ...o,
                                role: 'separator',
                                'aria-orientation': a,
                                children: l,
                            });
                        };
                    },
                },
                n = {};
            function r(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var a = (n[e] = { exports: {} });
                return (i[e].call(a.exports, a, a.exports, r), a.exports);
            }
            ((r.d = (e, t) => {
                for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (r.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var s = {};
            (() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.Divider = void 0));
                var e = r(9791);
                Object.defineProperty(s, 'Divider', {
                    enumerable: !0,
                    get: function () {
                        return e.Divider;
                    },
                });
            })();
            var o = s.Divider;
            s.__esModule;
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        54147: (e) => {
            e.exports = {
                root: 'VibeSettingsModal_root__oX6Av',
                modalContent: 'VibeSettingsModal_modalContent__KObkt',
                overlay: 'VibeSettingsModal_overlay__qKFx_',
                content: 'VibeSettingsModal_content__Uchn7',
                header: 'VibeSettingsModal_header__J4FUk',
                actions: 'VibeSettingsModal_actions__hCGT7',
                ripple: 'VibeSettingsModal_ripple__zQXGo',
            };
        },
        55804: (e) => {
            e.exports = {
                root: 'Content_root__IsH8s',
                root_newVibe: 'Content_root_newVibe__5S1qr',
                main: 'Content_main__8_wIa',
                main_newVibe: 'Content_main_newVibe__tfCx9',
                sideBanner_newVibe: 'Content_sideBanner_newVibe__VpnTX',
                sideBanner: 'Content_sideBanner__Na07D',
                adContainer: 'Content_adContainer__4t8fj',
                adBanner: 'Content_adBanner__hxXvf',
                withBrandedBanner: 'Content_withBrandedBanner__ipwOK',
            };
        },
        56480: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            let i = (0, a(74631).createContext)({ pageAlbumId: void 0 });
        },
        59981: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { T: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        60924: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => c });
            var i = a(25839),
                n = a(61493),
                r = a(3392),
                s = a(4254),
                o = a(74672),
                l = a.n(o);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: a, title: o, placement: c = 'top', children: u } = e;
                    return (0, i.jsxs)(r.m_, {
                        enabled: a,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, i.jsx)(r.ZI, {
                                className: l().root,
                                'data-test-id': n.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, i.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, i.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61183: (e, t, a) => {
            'use strict';
            a.d(t, { DefaultLayout: () => rx });
            var i,
                n,
                r,
                s,
                o,
                l,
                d,
                c,
                u,
                _,
                m = a(25839),
                p = a(82298),
                v = a(88204),
                h = a(84059),
                b = a(28010),
                x = a(74631),
                f = a.t(x, 2),
                g = a(39004),
                A = a(8487),
                C = a(61493),
                N = a(71035),
                y = a(11823),
                T = a(4071),
                S = a(66738),
                E = a(35622),
                B = a(3392),
                I = a(4254),
                j = a(26742),
                P = a(97952),
                k = a(89192),
                w = a(87201),
                L = a(27954),
                O = a(22892),
                D = a(54147),
                R = a.n(D);
            let M = (0, v.PA)(() => {
                var e, t;
                let { formatMessage: a } = (0, g.A)(),
                    {
                        vibe: i,
                        settings: { isMobile: n },
                        vibeSettings: r,
                    } = (0, L.g)(),
                    { pageId: s } = (0, P.$)(),
                    { blockIdForFrom: o } = (0, j.N)(),
                    l = (0, x.useRef)(null),
                    d = (0, x.useRef)(null),
                    { resetContext: c } = (0, w.B)({ seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [], pageIdForFrom: s, blockIdForFrom: o }),
                    { contentRef: u } = (0, k.g)();
                (0, x.useEffect)(
                    () => () => {
                        r.reset();
                    },
                    [r],
                );
                let _ = !!(i.isApplying || i.isMyVibe),
                    p = (0, N.c)((e) => {
                        var t;
                        i.isApplying || (l.current && (0, y.P)(e, R().ripple, l.current), c(), null == (t = d.current) || t.focus());
                    });
                return (0, m.jsx)(E.a, {
                    size: 'fitContent',
                    placement: n ? 'default' : 'right',
                    open: r.modal.isOpened,
                    onOpenChange: r.modal.onOpenChange,
                    onClose: r.modal.close,
                    className: R().root,
                    contentClassName: R().modalContent,
                    overlayClassName: R().overlay,
                    portalNode: n ? null : u,
                    showHeader: !1,
                    restoreFocus: !0,
                    closeOnOutsidePress: !0,
                    'data-test-id': C.Kq.vibeSettings.VIBE_SETTINGS_BLOCK,
                    children: (0, m.jsxs)('div', {
                        className: R().content,
                        children: [
                            (0, m.jsxs)('div', {
                                className: R().header,
                                children: [
                                    (0, m.jsx)(I.DZ, {
                                        variant: 'h3',
                                        size: 's',
                                        weight: 'bold',
                                        'data-test-id': C.Kq.vibeSettings.VIBE_SETTINGS_TITLE,
                                        children: (0, m.jsx)(A.A, { id: 'interface-actions.my-vibe-settings' }),
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: R().actions,
                                        children: [
                                            (0, m.jsx)(B.m_, {
                                                offsetOptions: 4,
                                                placement: 'left',
                                                text: a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                children: (0, m.jsx)(T.$, {
                                                    variant: 'outline',
                                                    radius: 'round',
                                                    size: 'xxxs',
                                                    icon: (0, m.jsx)(S.I, { variant: 'reset', size: 'xxxs' }),
                                                    onClick: p,
                                                    disabled: !!i.isMyVibe,
                                                    'aria-hidden': !!i.isMyVibe,
                                                    'aria-disabled': _,
                                                    'aria-label': a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                    ref: l,
                                                    'data-test-id': C.Kq.vibeSettings.VIBE_SETTINGS_RESET_BUTTON,
                                                }),
                                            }),
                                            (0, m.jsx)(T.$, {
                                                radius: 'round',
                                                color: 'secondary',
                                                size: 'xxs',
                                                icon: (0, m.jsx)(S.I, { variant: 'close', size: 'xxs' }),
                                                onClick: r.modal.close,
                                                'aria-label': a({ id: 'interface-actions.close-my-vibe-settings' }),
                                                ref: d,
                                                'data-test-id': C.Kq.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, m.jsx)(O.C, {}),
                        ],
                    }),
                });
            });
            var F = a(53712),
                U = a(49337),
                z = a(34656),
                W = a(12714),
                V = a(96618);
            let H = function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    { theme: a } = (0, V.W)(),
                    i = (0, x.useRef)(a);
                ((0, x.useLayoutEffect)(() => {
                    i.current = a;
                }, [a]),
                    (0, x.useLayoutEffect)(() => {
                        if (!t || 'undefined' == typeof document) return;
                        let a = (0, W.J)(e),
                            n = () => {
                                document.body.classList.contains(a) || (0, z.Z)(e);
                            };
                        n();
                        let r = new MutationObserver(() => {
                            n();
                        });
                        return (
                            r.observe(document.body, { attributes: !0, attributeFilter: ['class'] }),
                            () => {
                                (r.disconnect(), (0, z.Z)(i.current));
                            }
                        );
                    }, [e, t]));
            };
            var K = a(44806),
                G = a(85011),
                $ = a.n(G),
                Y = a(49656);
            let q = () => {
                var e;
                let {
                    user: t,
                    settings: a,
                    advertBanners: {
                        banners: { sideAdvertBanner: i },
                    },
                    freeAccess: n,
                } = (0, L.g)();
                return !!i.isVisible && (null == (e = a.browserInfo) || !e.isTouch) && (!t.isAuthorized || n.isFreeWebUser);
            };
            var Z = a(98948),
                X = a(66784);
            let Q = { p1: 'bwvvu', p2: 'foom', puid1: '', puid2: '' };
            var J = a(25734),
                ee = a.n(J);
            let et = (0, v.PA)((e) => {
                    let { className: t, forwardRef: a, isWavePage: i } = e,
                        {
                            advertBanners: {
                                banners: { sideAdvertBanner: n },
                            },
                        } = (0, L.g)(),
                        { formatMessage: r } = (0, g.A)();
                    return (0, m.jsx)('section', {
                        className: (0, p.$)(ee().root, t, { [ee().root_vibePage]: i, [ee().root_hidden]: !n.isVisible }),
                        'aria-label': r({ id: 'advert.banner' }),
                        role: 'banner',
                        ref: a,
                        children: (0, m.jsx)('div', {
                            className: ee().contentWrapper,
                            children: (0, m.jsx)(X.N, {
                                className: ee().content,
                                ownerId: Z.P,
                                containerId: 'adfox_173831489302952769',
                                params: Q,
                                onLoad: n.setType,
                                onError: n.toggleHasErrorTrue,
                                onNoAds: n.toggleNoAdsTrue,
                            }),
                        }),
                    });
                }),
                ea = (0, x.forwardRef)((e, t) => (0, m.jsx)(et, { forwardRef: t, ...e }));
            var ei = a(97109),
                en = a(84e3),
                er = a(74068),
                es = a(29282);
            let eo = (0, v.PA)((e) => {
                let { className: t, productionBlockId: a, testBlockId: i, onRender: n, onNoAds: r, onError: s, isAsync: o } = e,
                    { experiments: l } = (0, L.g)(),
                    { render: d } = (0, er.s)(),
                    c = (0, es.D)(),
                    u = (0, x.useMemo)(() => {
                        let e = l.checkExperiment(K.z.WebNextAdvertTest, 'on'),
                            t = 'production' === c;
                        return e || !t ? i : a;
                    }, [c, l, a, i]),
                    _ = ''.concat(Z.l, '_').concat(u);
                return (
                    (0, x.useEffect)(() => {
                        d(
                            {
                                blockId: u,
                                renderTo: _,
                                async: o,
                                onRender: () => {
                                    null == n || n(ei.h.DIRECT);
                                },
                                onError: s,
                            },
                            () => {
                                null == r || r();
                            },
                        );
                    }, [u, _, d, n, s, r, o]),
                    (0, m.jsx)('div', { id: _, className: t, tabIndex: -1, 'aria-hidden': !0 })
                );
            });
            var el = a(28631);
            let ed = () => (30 * window.innerHeight) / 100,
                ec = (e, t) => e > 0 && t > 0;
            var eu = a(55804),
                e_ = a.n(eu);
            let em = (0, v.PA)((e) => {
                    let { className: t, children: a } = e,
                        i = (0, h.usePathname)(),
                        { formatMessage: n } = (0, g.A)(),
                        { setContentRef: r, setContentRootRef: s, setSideBannerRef: o, paywallRef: l, contentScrollRef: d } = (0, k.g)(),
                        c = (0, en.U)(),
                        {
                            experiments: u,
                            user: _,
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: v, topAdvertBanner: b },
                            },
                        } = (0, L.g)(),
                        f = q(),
                        A =
                            (i === F.Z.main.href || i === F.Z.video.href) &&
                            (u.checkExperiment(K.z.WebNextNewWaveTab, 'on') || u.checkExperiment(K.z.WebNextNewWaveTab, 'on1')),
                        C = v.isVisible && v.type === ei.h.BRANDING,
                        y = b.isTouchTopAdvertEnabled && !l && !_.hasPlus && !C,
                        T = 'R-I-16641233-2',
                        S = ((e) => {
                            let [t, a] = (0, x.useState)(ed),
                                i = (0, x.useRef)(null),
                                n = (0, x.useRef)(!1),
                                r = (0, x.useRef)(ed()),
                                s = (0, x.useRef)(ed()),
                                o = (0, N.c)((e) => {
                                    let t = e.scrollTop,
                                        a = e.scrollHeight,
                                        i = e.clientHeight,
                                        n = s.current,
                                        r = t <= 5;
                                    if (!ec(a, i)) return n;
                                    let o = a - i;
                                    return o <= 0 ? n : o >= n ? (r ? n : 0) : r ? n : Math.max(0, n - o);
                                }),
                                l = (0, N.c)((e) => {
                                    (a(Math.round(e)), (r.current = e));
                                }),
                                d = (0, N.c)(() => {
                                    s.current = ed();
                                }),
                                c = (0, N.c)((e) => {
                                    let t = i.current;
                                    (null !== t && cancelAnimationFrame(t),
                                        (i.current = requestAnimationFrame(() => {
                                            i.current = null;
                                            let t = o(e),
                                                a = Math.abs(t - r.current),
                                                n = s.current;
                                            (0 === t || t >= n || a >= 2) && l(t);
                                        })));
                                });
                            (0, x.useLayoutEffect)(() => {
                                if (!e) {
                                    let e = ed();
                                    ((s.current = e), l(e), (n.current = !1));
                                    return;
                                }
                                if (n.current) return;
                                n.current = !0;
                                let t = ed();
                                return ((s.current = t), e.scrollTop <= 50) ? void l(t) : ec(e.scrollHeight, e.clientHeight) ? void l(o(e)) : void l(t);
                            }, [e, l, o]);
                            let u = (0, x.useMemo)(
                                () =>
                                    e
                                        ? (0, el.A)(() => {
                                              (d(), c(e));
                                          }, 100)
                                        : null,
                                [e, c, d],
                            );
                            return (
                                (0, x.useEffect)(() => {
                                    if (!e || !u) return;
                                    c(e);
                                    let t = () => {
                                        c(e);
                                    };
                                    e.addEventListener('scroll', t, { passive: !0 });
                                    let a = new ResizeObserver(u);
                                    a.observe(e);
                                    let n = () => {
                                        (d(), u());
                                    };
                                    return (
                                        window.addEventListener('resize', n, { passive: !0 }),
                                        () => {
                                            u.cancel();
                                            let o = i.current;
                                            null !== o && (cancelAnimationFrame(o), (i.current = null));
                                            let l = ed();
                                            ((r.current = l),
                                                (s.current = l),
                                                e.removeEventListener('scroll', t),
                                                a.disconnect(),
                                                window.removeEventListener('resize', n));
                                        }
                                    );
                                }, [e, c, u, d]),
                                t
                            );
                        })(d),
                        E = (0, N.c)(() => {
                            c.error('Cannot render advert banner', { adBlockId: T });
                        }),
                        B = (0, Y.L)(() => {
                            if (y)
                                return (0, m.jsx)('div', {
                                    className: e_().adContainer,
                                    'aria-label': n({ id: 'advert.banner' }),
                                    role: 'banner',
                                    children: (0, m.jsx)(eo, { isAsync: !1, onError: E, productionBlockId: T, testBlockId: T, className: e_().adBanner }),
                                });
                        });
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(e_().root, t, { [e_().root_newVibe]: A }),
                        ref: s,
                        children: [
                            B,
                            (0, m.jsx)('main', {
                                className: (0, p.$)(e_().main, { [e_().main_newVibe]: A, [e_().withBrandedBanner]: C }),
                                style: C ? { marginBlockStart: ''.concat(S, 'px') } : void 0,
                                ref: r,
                                children: (0, m.jsx)(x.Suspense, { children: a }),
                            }),
                            f && (0, m.jsx)(ea, { className: (0, p.$)(e_().sideBanner, { [e_().sideBanner_newVibe]: A }), isWavePage: A, ref: o }),
                        ],
                    });
                }),
                ep = (e) => window.innerWidth < (e ? 1920 : 1024),
                ev = () => {
                    let { sideBannerRef: e } = (0, k.g)(),
                        {
                            advertBanners: {
                                banners: { sideAdvertBanner: t },
                            },
                        } = (0, L.g)(),
                        a = q(),
                        i = e ? !!(t.isVisible && e.clientWidth) : a,
                        [n, r] = (0, x.useState)(ep(i)),
                        s = (0, x.useMemo)(
                            () =>
                                (0, el.A)(
                                    () => {
                                        r(ep(i));
                                    },
                                    100,
                                    { trailing: !1 },
                                ),
                            [r, i],
                        );
                    return (
                        (0, x.useEffect)(
                            () => (
                                window.addEventListener('resize', s),
                                s(),
                                () => {
                                    window.removeEventListener('resize', s);
                                }
                            ),
                            [s],
                        ),
                        n
                    );
                };
            var eh = a(36484),
                eb = a(62562),
                ex = a(95067),
                ef = a(67379),
                eg = a(36619),
                eA = a(93011),
                eC = a(59450),
                eN = a(3487),
                ey = a.n(eN),
                eT = a(93588),
                eS = a(68934),
                eE = a(70628),
                eB = a(95759),
                eI = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (n && (n += ' '), (n += i));
                                            else for (a in t) t[a] && (n && (n += ' '), (n += a));
                                        return n;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => n }));
                        let n = i;
                    },
                    2678: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'NGdj0oZ2Bt8qdZhP2Tzt',
                            root_collapsed: 'rece5errcONnjJeX0YW8',
                            root_direction_vertical: 'QilmoKKJwk6f0BdkYgrA',
                            root_direction_horizontal: 'AO4rWY4RLVh48fwQw5Qs',
                        };
                    },
                    8946: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'yuyI2hMAT7qyL1N14MAQ', root_direction_vertical: 'xfFtKQpgAYvC2jI1tBtS', root_direction_horizontal: 'OGlYJO0lZgpSOhfU2Iru' };
                    },
                    450: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'Bp1d3U6W8Nrbqi3MRQS_',
                            root_direction_vertical: 'hYfgO_Y8c4rrQsZJWTDZ',
                            ripple: 'UiZ4QyGEVzfvZ3QfQqqA',
                            root_direction_horizontal: 'X_Lr5kqrhzMO6kX8v92s',
                            root_collapsed: 'Q3gGGaIXiJ_oQTiVZBfl',
                            root_variant_main: 'H4trq_Zx2d9qOnQgxmxr',
                            root_animate: 'Kr9rXeXGlqHee2euqH0u',
                            animation_width: 'k8zKIZRDy6LmoaIcEpo8',
                            item: 'A4bDkbQHkwWNGqxO9qhW',
                            item_selected: 'mAd9pgMkWVX5ktCgYINQ',
                            item_direction_vertical: 'Xx9Tg5ugzg1pkf8Zh421',
                            item_direction_horizontal: 'fQVXazc9HwT3NQ8dywCh',
                            iconContainer: 'zpkgiiHgDpbBThy6gavq',
                            textContainer: 'ZrkG6gNYcr4h3hfkhyT1',
                            textContainer_selected: 'xENlRAFvRskKnt8LUObC',
                            textContainer_direction_horizontal: 'xE5fIMRnjd8oSm5BOhpI',
                        };
                    },
                    9432: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'HcfYy4VfnRHqgXzIdL7w',
                            root_direction_vertical: 'kRmUIkcHKD5AgtpPo8wT',
                            ripple: 'aHtf5XL4YejhYEJNUkYi',
                            root_direction_horizontal: 'ZxlCWb78gIBQ8izioAXa',
                            root_collapsed: 'e1KYSvMXXv0FD4s_yCuw',
                            item: 'ZfF8mQ3Iftpwu0aZgDtG',
                            item_selected: 'Eg3pt5lTL33sOlxorSbN',
                            item_direction_vertical: 'yWJHrpNsBvchs9Jjyokk',
                            item_direction_horizontal: 'bJ7YpssStK5UnpbuTtf2',
                            item_collapsed_vertical: 'uw57VJ37U4rAAHDs0zJR',
                            iconContainer: '_YzsXZGNK8KeaUFC4Ja1',
                            textContainer: 'nxMXCBiVfgH4oxds3f2y',
                            textContainer_selected: 'jhnLSZpmG69Hlxi8n6IO',
                            textContainer_direction_horizontal: 'FH36Kh9OP4VHc2Yv3bIc',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var n = null;
                            if ((void 0 !== i && (n = '' + i), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var r in ((i = {}), t)) 'key' !== r && (i[r] = t[r]);
                            else i = t;
                            return { $$typeof: a, type: e, key: n, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    6384: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.findColorBucketByLightness = t.findColorBucketByHue = t.findColorBucketByName = t.LIGHTNESS_COLOR_BUCKETS = t.COLOR_BUCKETS = void 0),
                            (t.COLOR_BUCKETS = [
                                { name: 'coral', start: 2, end: 19, primary: '#F53700', secondary: '#FFD7CC' },
                                { name: 'tangerine', start: 20, end: 64, primary: '#F56E00', secondary: '#FFE3CC' },
                                { name: 'clover', start: 65, end: 149, primary: '#34C03E', secondary: '#D7F4D9' },
                                { name: 'emerald', start: 150, end: 164, primary: '#00C789', secondary: '#CCFFEF' },
                                { name: 'turquoise', start: 165, end: 179, primary: '#00C7A6', secondary: '#CCFFF7' },
                                { name: 'aquamarine', start: 180, end: 189, primary: '#00B2CC', secondary: '#CCF9FF' },
                                { name: 'glacier', start: 190, end: 204, primary: '#5C8E9B', secondary: '#DFE9EC' },
                                { name: 'slate', start: 205, end: 219, primary: '#4F6C9B', secondary: '#DDE4EE' },
                                { name: 'sapphire', start: 220, end: 234, primary: '#0C41E8', secondary: '#CFDAFC' },
                                { name: 'indigo', start: 235, end: 249, primary: '#160CE8', secondary: '#D1CFFC' },
                                { name: 'amethyst', start: 250, end: 259, primary: '#5035C0', secondary: '#DDD7F4' },
                                { name: 'plum', start: 260, end: 269, primary: '#7C35C0', secondary: '#E6D7F4' },
                                { name: 'orchid', start: 270, end: 299, primary: '#BB1ADB', secondary: '#F3D1FA' },
                                { name: 'raspberry', start: 300, end: 329, primary: '#DB1A7D', secondary: '#FAD1E6' },
                                { name: 'fuchsia', start: 330, end: 339, primary: '#F5007C', secondary: '#FFCCE6' },
                                { name: 'carmine', start: 340, end: 1, primary: '#F5002E', secondary: '#FFCCD6' },
                            ]),
                            (t.LIGHTNESS_COLOR_BUCKETS = [
                                { name: 'amethyst', start: 0, end: 22 },
                                { name: 'indigo', start: 22, end: 32 },
                                { name: 'clover', start: 32, end: 42 },
                                { name: 'raspberry', start: 42, end: 51 },
                                { name: 'aquamarine', start: 51, end: 100 },
                            ]),
                            (t.findColorBucketByName = (e) => t.COLOR_BUCKETS.find((t) => t.name === e)),
                            (t.findColorBucketByHue = (e) =>
                                t.COLOR_BUCKETS.find((t) => ((e, t) => (e.start > e.end ? t >= e.start || t <= e.end : t >= e.start && t <= e.end))(t, e))),
                            (t.findColorBucketByLightness = (e) => {
                                let a = t.LIGHTNESS_COLOR_BUCKETS.find((a, i) =>
                                    ((e, a, i) => (i === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? a >= e.start && a <= e.end : a >= e.start && a < e.end))(a, e, i),
                                );
                                return (0, t.findColorBucketByName)(null == a ? void 0 : a.name);
                            }));
                    },
                    2633: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, a) {
                                let i = null != a ? a : e.currentTarget,
                                    n = document.createElement('span'),
                                    r = Math.max(i.clientWidth, i.clientHeight),
                                    s = r / 2,
                                    o = i.getBoundingClientRect(),
                                    l = 0 === e.clientX ? Math.round(o.width / 2) : e.clientX - o.left,
                                    d = 0 === e.clientY ? Math.round(o.height / 2) : e.clientY - o.top;
                                ((n.style.width = ''.concat(r, 'px')),
                                    (n.style.height = ''.concat(r, 'px')),
                                    (n.style.left = 0 === e.clientX ? '0px' : ''.concat(l - s, 'px')),
                                    (n.style.top = ''.concat(d - s, 'px')),
                                    n.classList.add(t));
                                let c = i.getElementsByClassName(t)[0];
                                (c && c.remove(), i.insertBefore(n, i.firstChild));
                            }));
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    1888: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getVibePaletteColors =
                                t.getVibeColorBucketSelection =
                                t.getVibePaletteByBucketName =
                                t.FALLBACK_PALETTE =
                                t.FALLBACK_NAME =
                                t.SECONDARY_GRADIENT_STOPS =
                                t.PRIMARY_GRADIENT_STOPS =
                                t.PRIMARY_DARK_IDLE_STOPS =
                                    void 0));
                        let i = a(2660),
                            n = a(6384);
                        ((t.PRIMARY_DARK_IDLE_STOPS = Array.from({ length: 16 }, () => '#000000')),
                            (t.PRIMARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#F5002E',
                                    '#CF0027',
                                    '#AF0021',
                                    '#94001C',
                                    '#7C0017',
                                    '#690014',
                                    '#590011',
                                    '#4B000E',
                                    '#40000C',
                                    '#36000A',
                                    '#2D0008',
                                    '#250007',
                                    '#1D0005',
                                    '#140004',
                                    '#0B0002',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#F5007C',
                                    '#CF0069',
                                    '#AF0059',
                                    '#94004B',
                                    '#7C003F',
                                    '#690035',
                                    '#59002D',
                                    '#4B0026',
                                    '#400020',
                                    '#36001B',
                                    '#2D0017',
                                    '#250013',
                                    '#1D000F',
                                    '#14000A',
                                    '#0B0006',
                                    '#000000',
                                ],
                                coral: [
                                    '#F53700',
                                    '#CF2F00',
                                    '#AF2700',
                                    '#942100',
                                    '#7C1C00',
                                    '#691800',
                                    '#591400',
                                    '#4B1100',
                                    '#400E00',
                                    '#360C00',
                                    '#2D0A00',
                                    '#250800',
                                    '#1D0700',
                                    '#140400',
                                    '#0B0200',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#F56E00',
                                    '#CF5D00',
                                    '#AF4F00',
                                    '#944200',
                                    '#7C3800',
                                    '#692F00',
                                    '#592800',
                                    '#4B2200',
                                    '#401D00',
                                    '#361800',
                                    '#2D1400',
                                    '#251100',
                                    '#1D0D00',
                                    '#140900',
                                    '#0B0500',
                                    '#000000',
                                ],
                                clover: [
                                    '#34C03E',
                                    '#2CA334',
                                    '#25892C',
                                    '#1F7425',
                                    '#1A621F',
                                    '#16521B',
                                    '#134516',
                                    '#103B13',
                                    '#0D3210',
                                    '#0B2A0E',
                                    '#0A230B',
                                    '#081D09',
                                    '#061707',
                                    '#041005',
                                    '#020903',
                                    '#000000',
                                ],
                                emerald: [
                                    '#00C789',
                                    '#00A874',
                                    '#008E62',
                                    '#007853',
                                    '#006545',
                                    '#00553B',
                                    '#004832',
                                    '#003D2A',
                                    '#003424',
                                    '#002C1E',
                                    '#002519',
                                    '#001E15',
                                    '#001810',
                                    '#00100B',
                                    '#000906',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#00C7A6',
                                    '#00A88C',
                                    '#008E77',
                                    '#007864',
                                    '#006554',
                                    '#005547',
                                    '#00483C',
                                    '#003D33',
                                    '#00342B',
                                    '#002C25',
                                    '#00251E',
                                    '#001E19',
                                    '#001814',
                                    '#00100E',
                                    '#000907',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#00B2CC',
                                    '#0096AC',
                                    '#007F92',
                                    '#006C7B',
                                    '#005A67',
                                    '#004C57',
                                    '#00414A',
                                    '#00363E',
                                    '#002E35',
                                    '#00272D',
                                    '#002125',
                                    '#001B1F',
                                    '#001518',
                                    '#000F11',
                                    '#000809',
                                    '#000000',
                                ],
                                glacier: [
                                    '#5C8E9B',
                                    '#4E7883',
                                    '#42666F',
                                    '#37565D',
                                    '#2F484F',
                                    '#273D42',
                                    '#213338',
                                    '#1C2B2F',
                                    '#182528',
                                    '#141F22',
                                    '#111A1C',
                                    '#0E1517',
                                    '#0B1112',
                                    '#080C0D',
                                    '#040607',
                                    '#000000',
                                ],
                                slate: [
                                    '#4F6C9B',
                                    '#435B83',
                                    '#384D6F',
                                    '#30415D',
                                    '#28374F',
                                    '#222E42',
                                    '#1D2738',
                                    '#18212F',
                                    '#141C28',
                                    '#111822',
                                    '#0F141C',
                                    '#0C1017',
                                    '#090D12',
                                    '#07090D',
                                    '#040507',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#0C41E8',
                                    '#0A37C4',
                                    '#092EA6',
                                    '#07278C',
                                    '#062176',
                                    '#051C63',
                                    '#041854',
                                    '#041447',
                                    '#03113C',
                                    '#030E33',
                                    '#020C2B',
                                    '#020A23',
                                    '#01081B',
                                    '#010513',
                                    '#01030A',
                                    '#000000',
                                ],
                                indigo: [
                                    '#160CE8',
                                    '#130AC4',
                                    '#1009A6',
                                    '#0D078C',
                                    '#0B0676',
                                    '#090563',
                                    '#080454',
                                    '#070447',
                                    '#06033C',
                                    '#050333',
                                    '#04022B',
                                    '#030223',
                                    '#03011B',
                                    '#020113',
                                    '#01010A',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#5035C0',
                                    '#442DA3',
                                    '#392689',
                                    '#302074',
                                    '#291B62',
                                    '#221752',
                                    '#1D1345',
                                    '#18103B',
                                    '#150E32',
                                    '#120C2A',
                                    '#0F0A23',
                                    '#0C081D',
                                    '#090617',
                                    '#070410',
                                    '#040209',
                                    '#000000',
                                ],
                                plum: [
                                    '#7C35C0',
                                    '#692DA3',
                                    '#592689',
                                    '#4B2074',
                                    '#3F1B62',
                                    '#351752',
                                    '#2D1345',
                                    '#26103B',
                                    '#200E32',
                                    '#1B0C2A',
                                    '#170A23',
                                    '#13081D',
                                    '#0F0617',
                                    '#0A0410',
                                    '#060209',
                                    '#000000',
                                ],
                                orchid: [
                                    '#BB1ADB',
                                    '#9E16B9',
                                    '#86139D',
                                    '#711084',
                                    '#5F0D6F',
                                    '#500B5E',
                                    '#44094F',
                                    '#390843',
                                    '#310739',
                                    '#290630',
                                    '#220528',
                                    '#1C0421',
                                    '#16031A',
                                    '#100212',
                                    '#08010A',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#DB1A7D',
                                    '#B9166A',
                                    '#9D1359',
                                    '#84104B',
                                    '#6F0D40',
                                    '#5E0B36',
                                    '#4F092D',
                                    '#430826',
                                    '#390720',
                                    '#30061B',
                                    '#280517',
                                    '#210413',
                                    '#1A030F',
                                    '#12020A',
                                    '#0A0106',
                                    '#000000',
                                ],
                            }),
                            (t.SECONDARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#FFCCD6',
                                    '#D8ADB5',
                                    '#B69299',
                                    '#9A7B81',
                                    '#82686D',
                                    '#6D575C',
                                    '#5C4A4D',
                                    '#4E3E42',
                                    '#423538',
                                    '#382D2F',
                                    '#2F2527',
                                    '#261F20',
                                    '#1E1819',
                                    '#151112',
                                    '#0B090A',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#FFCCE6',
                                    '#D8ADC3',
                                    '#B692A4',
                                    '#9A7B8B',
                                    '#826875',
                                    '#6D5763',
                                    '#5C4A53',
                                    '#4E3E46',
                                    '#42353C',
                                    '#382D32',
                                    '#2F252A',
                                    '#261F23',
                                    '#1E181B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                                coral: [
                                    '#FFD7CC',
                                    '#D8B6AD',
                                    '#B69A92',
                                    '#9A827B',
                                    '#826D68',
                                    '#6D5C57',
                                    '#5C4E4A',
                                    '#4E423E',
                                    '#423835',
                                    '#382F2D',
                                    '#2F2825',
                                    '#26201F',
                                    '#1E1918',
                                    '#151211',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#FFE3CC',
                                    '#D8C0AD',
                                    '#B6A292',
                                    '#9A897B',
                                    '#827368',
                                    '#6D6157',
                                    '#5C524A',
                                    '#4E463E',
                                    '#423B35',
                                    '#38322D',
                                    '#2F2A25',
                                    '#26221F',
                                    '#1E1B18',
                                    '#151311',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                clover: [
                                    '#D7F4D9',
                                    '#B6CFB8',
                                    '#9AAE9B',
                                    '#829383',
                                    '#6D7C6E',
                                    '#5C695D',
                                    '#4E584F',
                                    '#424B42',
                                    '#383F38',
                                    '#2F3630',
                                    '#282D28',
                                    '#202521',
                                    '#191D1A',
                                    '#121412',
                                    '#0A0B0A',
                                    '#000000',
                                ],
                                emerald: [
                                    '#CCFFEF',
                                    '#ADD8CA',
                                    '#92B6AB',
                                    '#7B9A90',
                                    '#688279',
                                    '#576D66',
                                    '#4A5C56',
                                    '#3E4E49',
                                    '#35423E',
                                    '#2D3834',
                                    '#252F2C',
                                    '#1F2624',
                                    '#181E1C',
                                    '#111514',
                                    '#090B0B',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#CCFFF7',
                                    '#ADD8D1',
                                    '#92B6B1',
                                    '#7B9A95',
                                    '#68827D',
                                    '#576D6A',
                                    '#4A5C59',
                                    '#3E4E4C',
                                    '#354240',
                                    '#2D3836',
                                    '#252F2D',
                                    '#1F2625',
                                    '#181E1D',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#CCF9FF',
                                    '#ADD3D8',
                                    '#92B2B6',
                                    '#7B969A',
                                    '#687F82',
                                    '#576B6D',
                                    '#4A5A5C',
                                    '#3E4C4E',
                                    '#354142',
                                    '#2D3738',
                                    '#252E2F',
                                    '#1F2626',
                                    '#181D1E',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                glacier: [
                                    '#DFE9EC',
                                    '#BDC5C8',
                                    '#9FA7A9',
                                    '#868C8E',
                                    '#717678',
                                    '#606465',
                                    '#515455',
                                    '#444748',
                                    '#3A3C3D',
                                    '#313334',
                                    '#292B2B',
                                    '#222324',
                                    '#1A1B1C',
                                    '#131314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                slate: [
                                    '#DDE4EE',
                                    '#BBC1CA',
                                    '#9EA3AA',
                                    '#85898F',
                                    '#707479',
                                    '#5F6266',
                                    '#505256',
                                    '#444649',
                                    '#393B3E',
                                    '#303234',
                                    '#292A2C',
                                    '#212224',
                                    '#1A1B1C',
                                    '#121314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#CFDAFC',
                                    '#AFB9D5',
                                    '#949CB4',
                                    '#7D8398',
                                    '#696F80',
                                    '#595D6C',
                                    '#4B4F5B',
                                    '#3F434D',
                                    '#363941',
                                    '#2D3037',
                                    '#26282E',
                                    '#1F2126',
                                    '#181A1E',
                                    '#111215',
                                    '#090A0B',
                                    '#000000',
                                ],
                                indigo: [
                                    '#D1CFFC',
                                    '#B1AFD5',
                                    '#9594B4',
                                    '#7E7D98',
                                    '#6A6980',
                                    '#5A596C',
                                    '#4C4B5B',
                                    '#403F4D',
                                    '#363641',
                                    '#2E2D37',
                                    '#26262E',
                                    '#1F1F26',
                                    '#19181E',
                                    '#111115',
                                    '#09090B',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#DDD7F4',
                                    '#BBB6CF',
                                    '#9E9AAE',
                                    '#858293',
                                    '#706D7C',
                                    '#5F5C69',
                                    '#504E58',
                                    '#44424B',
                                    '#39383F',
                                    '#302F36',
                                    '#29282D',
                                    '#212025',
                                    '#1A191D',
                                    '#121214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                plum: [
                                    '#E6D7F4',
                                    '#C3B6CF',
                                    '#A49AAE',
                                    '#8B8293',
                                    '#756D7C',
                                    '#635C69',
                                    '#534E58',
                                    '#46424B',
                                    '#3C383F',
                                    '#322F36',
                                    '#2A282D',
                                    '#232025',
                                    '#1B191D',
                                    '#131214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                orchid: [
                                    '#F3D1FA',
                                    '#CEB1D4',
                                    '#AE95B3',
                                    '#937E97',
                                    '#7B6A7F',
                                    '#685A6B',
                                    '#584C5A',
                                    '#4A404D',
                                    '#3F3641',
                                    '#352E37',
                                    '#2D262E',
                                    '#251F26',
                                    '#1D191D',
                                    '#141115',
                                    '#0B090B',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#FAD1E6',
                                    '#D4B1C3',
                                    '#B395A4',
                                    '#977E8B',
                                    '#7F6A75',
                                    '#6B5A63',
                                    '#5A4C53',
                                    '#4D4046',
                                    '#41363C',
                                    '#372E32',
                                    '#2E262A',
                                    '#261F23',
                                    '#1D191B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                            }),
                            (t.FALLBACK_NAME = 'slate'),
                            (t.FALLBACK_PALETTE = {
                                primary: '#4F6C9B',
                                secondary: '#DDE4EE',
                                primaryStops: t.PRIMARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                secondaryStops: t.SECONDARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                            }));
                        let r = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        ((t.getVibePaletteByBucketName = (e) => {
                            let a = (0, n.findColorBucketByName)(e);
                            return a ? r(a) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, i.hexToHsl)(e),
                                    a = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === a ? (0, n.findColorBucketByHue)(t.h) : (0, n.findColorBucketByLightness)(t.l), hsl: t, mode: a };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: a } = (0, t.getVibeColorBucketSelection)(e);
                                return a ? r(a) : t.FALLBACK_PALETTE;
                            }));
                    },
                    6882: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.getVibePaletteColors = t.getElementFromRefOrElement = t.createRipple = void 0));
                        var i = a(2633);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return i.createRipple;
                            },
                        });
                        var n = a(1848);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return n.getElementFromRefOrElement;
                            },
                        });
                        var r = a(1888);
                        Object.defineProperty(t, 'getVibePaletteColors', {
                            enumerable: !0,
                            get: function () {
                                return r.getVibePaletteColors;
                            },
                        });
                    },
                    8122: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Navigation = void 0));
                        let n = a(4377),
                            r = a(5881),
                            s = a(9779),
                            o = i(a(2678));
                        t.Navigation = function (e) {
                            let { className: t, children: a, collapsed: i = !1, direction: l = 'vertical', ...d } = e;
                            return (0, n.jsx)(s.NavigationProvider, {
                                collapsed: i,
                                direction: l,
                                children: (0, n.jsx)('nav', {
                                    className: (0, r.clsx)(o.default.root, o.default['root_direction_'.concat(l)], { [o.default.root_collapsed]: i }, t),
                                    'aria-label': d['aria-label'],
                                    ...d,
                                    children: a,
                                }),
                            });
                        };
                    },
                    9779: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationProvider = t.NavigationContext = void 0));
                        let i = a(4377),
                            n = a(810);
                        ((t.NavigationContext = (0, n.createContext)({ collapsed: !1, direction: 'vertical' })),
                            (t.NavigationProvider = (e) => {
                                let { collapsed: a, direction: r, children: s } = e,
                                    o = (0, n.useMemo)(() => ({ collapsed: a, direction: r }), [a, r]);
                                return (0, i.jsx)(t.NavigationContext.Provider, { value: o, children: s });
                            }));
                    },
                    2676: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationGroup = void 0));
                        let n = a(4377),
                            r = a(810),
                            s = a(5881),
                            o = a(9779),
                            l = i(a(8946));
                        t.NavigationGroup = function (e) {
                            let { className: t, children: a, ...i } = e,
                                d = (0, r.createRef)(),
                                { direction: c } = (0, r.useContext)(o.NavigationContext);
                            return (0, n.jsx)('ol', { ref: d, className: (0, s.clsx)(l.default.root, l.default['root_direction_'.concat(c)], t), ...i, children: a });
                        };
                    },
                    9699: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationItem = t.NavigationItemComponent = void 0));
                        let n = a(4377),
                            r = a(810),
                            s = a(5881),
                            o = a(9779),
                            l = a(6882),
                            d = i(a(450)),
                            c = i(a(9432));
                        function u(e) {
                            let {
                                    className: t = '',
                                    forwardRef: a,
                                    children: i,
                                    selected: u = !1,
                                    shownAnimation: _,
                                    withRipple: m = !1,
                                    variant: p = 'default',
                                    isNewVisualVersion: v,
                                    ...h
                                } = e,
                                { collapsed: b, direction: x } = (0, r.useContext)(o.NavigationContext),
                                f = v ? c.default : d.default,
                                g = (0, r.useCallback)(
                                    (e) => {
                                        m && (0, l.createRipple)(e, f.ripple);
                                    },
                                    [f.ripple, m],
                                ),
                                [A, C] = r.Children.toArray(i.props.children),
                                N = (0, r.useMemo)(
                                    () =>
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)('div', { className: f.iconContainer, children: A }),
                                                (0, n.jsx)('div', {
                                                    className: (0, s.clsx)(f.textContainer, f['textContainer_direction_'.concat(x)], { [f.textContainer_selected]: u }),
                                                    children: C,
                                                }),
                                            ],
                                        }),
                                    [f, A, x, u, C],
                                ),
                                y = (0, r.cloneElement)(i, {
                                    className: (0, s.clsx)(
                                        f.item,
                                        f['item_direction_'.concat(x)],
                                        { [f.item_selected]: u, [f['item_collapsed_'.concat(x)]]: b },
                                        i.props.className,
                                    ),
                                    children: N,
                                });
                            return (0, n.jsx)('li', {
                                ref: a,
                                className: (0, s.clsx)(
                                    f.root,
                                    f['root_direction_'.concat(x)],
                                    f['root_variant_'.concat(p)],
                                    { [f.root_animate]: _, [f.root_collapsed]: b },
                                    t,
                                ),
                                'aria-current': !!u && 'page',
                                onClick: g,
                                ...h,
                                children: y,
                            });
                        }
                        ((t.NavigationItemComponent = u), (t.NavigationItem = (0, r.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e }))));
                    },
                    2660: (e) => {
                        e.exports = eB;
                    },
                    810: (e) => {
                        e.exports = f;
                    },
                },
                ej = {};
            function eP(e) {
                var t = ej[e];
                if (void 0 !== t) return t.exports;
                var a = (ej[e] = { exports: {} });
                return (eI[e].call(a.exports, a, a.exports, eP), a.exports);
            }
            ((eP.d = (e, t) => {
                for (var a in t) eP.o(t, a) && !eP.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (eP.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (eP.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var ek = {};
            (() => {
                (Object.defineProperty(ek, 'X$', { value: !0 }), (ek.Dx = ek.KB = ek.W_ = void 0));
                var e = eP(8122);
                Object.defineProperty(ek, 'W_', {
                    enumerable: !0,
                    get: function () {
                        return e.Navigation;
                    },
                });
                var t = eP(2676);
                Object.defineProperty(ek, 'KB', {
                    enumerable: !0,
                    get: function () {
                        return t.NavigationGroup;
                    },
                });
                var a = eP(9699);
                Object.defineProperty(ek, 'Dx', {
                    enumerable: !0,
                    get: function () {
                        return a.NavigationItem;
                    },
                });
            })();
            var ew = ek.W_,
                eL = ek.KB,
                eO = ek.Dx;
            ek.X$;
            var eD = a(92511),
                eR = a(38656),
                eM = a(68406),
                eF = a(5180),
                eU = a(97828),
                ez = a(22101),
                eW = a(49984),
                eV = (function (e) {
                    return (
                        (e.SEARCH = 'SEARCH'),
                        (e.HOME = 'HOME'),
                        (e.FOR_YOU_AND_TRENDS = 'FOR_YOU_AND_TRENDS'),
                        (e.CONCERTS = 'CONCERTS'),
                        (e.NON_MUSIC = 'NON_MUSIC'),
                        (e.KIDS = 'KIDS'),
                        (e.COLLECTION = 'COLLECTION'),
                        (e.PLUS = 'PLUS'),
                        (e.MUZMARKET = 'MUZMARKET'),
                        (e.SETTINGS = 'SETTINGS'),
                        e
                    );
                })({}),
                eH = a(91062),
                eK = a(97762),
                eG = a(25895);
            let e$ = () => {
                let { user: e, experiments: t, location: a, slam: i, settings: n } = (0, L.g)(),
                    { formatMessage: r } = (0, g.A)(),
                    s = ((e) => {
                        let {
                                checkExperiment: t,
                                formatMessage: a,
                                hasPlus: i,
                                isAuthorized: n,
                                isChildModeEnabled: r,
                                isMobile: s,
                                isOfflineModeEnabled: o,
                                isWebApplication: l,
                                tld: d,
                            } = e,
                            c = [],
                            u = t(K.z.WebNextNewWaveTab, 'on') || t(K.z.WebNextNewWaveTab, 'on1');
                        if (
                            (t(K.z.WebNextDisableSearch, 'on') ||
                                c.push({ id: eV.SEARCH, path: F.Z.search.href, availablePaths: [F.Z.search.href], title: a({ id: 'navigation.search' }), isEnabled: !o }),
                            c.push({
                                id: eV.HOME,
                                path: F.Z.main.href,
                                availablePaths: [F.Z.main.href],
                                title: a(u ? { id: 'navigation.page-my-vibe' } : { id: 'navigation.page-main' }),
                                isEnabled: !o,
                            }),
                            u)
                        ) {
                            let e = n ? eK.p.MAIN : eK.p.MAIN_NOLOGIN,
                                t = (0, eG.u)('/landing/:skeleton', { params: { skeleton: e } }).href;
                            c.push({ id: eV.FOR_YOU_AND_TRENDS, path: t, availablePaths: [t], title: a({ id: 'navigation.page-for-you-and-trends' }), isEnabled: !o });
                        }
                        return (
                            t(K.z.WebNextConcertsTab, 'on') &&
                                !t(K.z.WebNextDisableConcertsTab, 'on') &&
                                i &&
                                c.push({
                                    id: eV.CONCERTS,
                                    path: F.Z.concerts.href,
                                    availablePaths: [F.Z.concerts.href],
                                    title: a({ id: 'entity-names.concerts' }),
                                    isEnabled: !o,
                                }),
                            t(K.z.WebNextDisableNonMusic, 'on') ||
                                c.push({
                                    id: eV.NON_MUSIC,
                                    path: '/non-music',
                                    availablePaths: ['/non-music'],
                                    title: a({ id: 'entity-names.podcasts-and-books' }),
                                    isEnabled: !o,
                                }),
                            !t(K.z.WebNextDisableKids, 'on') &&
                                r &&
                                c.push({ id: eV.KIDS, path: F.Z.kids.href, availablePaths: [F.Z.kids.href], title: a({ id: 'kids.for-kids' }), isEnabled: !o }),
                            !t(K.z.WebNextDisableCollection, 'on') &&
                                n &&
                                c.push({
                                    id: eV.COLLECTION,
                                    path: F.Z.collection.href,
                                    availablePaths: [F.Z.collection.href, F.Z.mymusic.href],
                                    title: a({ id: 'navigation.page-collection' }),
                                    isEnabled: !0,
                                }),
                            n &&
                                c.push({
                                    id: eV.SETTINGS,
                                    path: F.Z.settings.href,
                                    availablePaths: [F.Z.settings.href],
                                    title: a({ id: 'page.settings' }),
                                    isEnabled: !0,
                                }),
                            !t(K.z.WebNextDisablePlus, 'on') &&
                                t(K.z.WebNextPlusOptionsMarketplace, 'on') &&
                                l &&
                                !s &&
                                i &&
                                c.push({ id: eV.PLUS, path: '/plus', availablePaths: ['/plus'], title: a({ id: 'navigation.page-plus' }), isEnabled: !0 }),
                            t(K.z.WebNextMarketLanding, 'on') &&
                                'ru' === d &&
                                !s &&
                                n &&
                                c.push({
                                    id: eV.MUZMARKET,
                                    path: F.Z.muzmarket.href,
                                    availablePaths: [F.Z.muzmarket.href],
                                    title: a({ id: 'navigation.page-muzmarket' }),
                                    isEnabled: !o,
                                }),
                            c
                        );
                    })({
                        checkExperiment: (e, a) => t.checkExperiment(e, a),
                        formatMessage: r,
                        hasPlus: e.hasPlus,
                        isAuthorized: e.isAuthorized,
                        isChildModeEnabled: e.settings.isChildModeEnabled,
                        isMobile: !!n.isMobile,
                        isOfflineModeEnabled: !!i.isOfflineModeEnabled,
                        isWebApplication: eT.$3,
                        tld: a.tld,
                    }),
                    o = t.checkExperiment(K.z.WebNextNewWaveTab, 'on') || t.checkExperiment(K.z.WebNextNewWaveTab, 'on1'),
                    l = {
                        [eV.SEARCH]: () => ({
                            icon: 'search',
                            iconSelected: 'search_selected',
                            iconNewVersion: 'navigationSearch',
                            iconNewVersionSelected: 'navigationSearch',
                            analyticsParams: { to: eg.AppScreen.SearchScreen, entityType: eg.EntityTypes.Search },
                        }),
                        [eV.HOME]: () => {
                            let e = o && t.checkExperiment(K.z.WebNextNdaLabelOnWaveTab, 'on') ? 'navigationMyVibeNDA' : 'navigationMyVibe';
                            return {
                                icon: 'home',
                                iconSelected: 'home_selected',
                                iconNewVersion: o ? e : 'navigationForYouAndTrends',
                                iconNewVersionSelected: o ? e : 'navigationForYouAndTrends_selected',
                                analyticsParams: { to: o ? eg.AppScreen.WaveLandingScreen : eg.AppScreen.MainScreen, entityType: eg.EntityTypes.Home },
                            };
                        },
                        [eV.FOR_YOU_AND_TRENDS]: () => ({
                            icon: 'home',
                            iconSelected: 'home_selected',
                            iconNewVersion: 'navigationForYouAndTrends',
                            iconNewVersionSelected: 'navigationForYouAndTrends_selected',
                            analyticsParams: { to: eg.AppScreen.ForYouScreen, entityType: eg.EntityTypes.Home },
                        }),
                        [eV.CONCERTS]: () => ({
                            icon: 'ticket',
                            iconSelected: 'ticket_selected',
                            iconNewVersion: 'navigationConcerts',
                            iconNewVersionSelected: 'navigationConcerts_selected',
                            analyticsParams: { to: eg.AppScreen.ConcertsLandingScreen, entityType: eg.EntityTypes.Concerts },
                            onboardingConfig: {
                                id: eH.h.CONCERTS_TAB,
                                text: r({ id: 'concerts.onboarding' }, { nbsp: '\xa0' }),
                                isEnabled: t.checkExperiment(K.z.WebNextConcertTabOnboarding, 'on'),
                            },
                        }),
                        [eV.NON_MUSIC]: () => ({
                            icon: 'non_music',
                            iconSelected: 'non_music_selected',
                            iconNewVersion: 'navigationNonMusic',
                            iconNewVersionSelected: 'navigationNonMusic_selected',
                            analyticsParams: { to: eg.AppScreen.NonmusicLandingScreen, entityType: eg.EntityTypes.NonMusic },
                        }),
                        [eV.KIDS]: () => ({
                            icon: 'kids',
                            iconSelected: 'kids_selected',
                            iconNewVersion: 'navigationKids',
                            iconNewVersionSelected: 'navigationKids_selected',
                            analyticsParams: { to: eg.AppScreen.KidsLandingScreen, entityType: eg.EntityTypes.Kids },
                        }),
                        [eV.COLLECTION]: () => ({
                            icon: 'collections',
                            iconSelected: 'collections_selected',
                            iconNewVersion: 'navigationCollection',
                            iconNewVersionSelected: 'navigationCollection_selected',
                            analyticsParams: { to: eg.AppScreen.CollectionLandingScreen, entityType: eg.EntityTypes.Collection },
                        }),
                        [eV.SETTINGS]: () => ({
                            icon: 'settingsGear',
                            iconSelected: 'settingsGear',
                            iconNewVersion: 'settingsGear',
                            iconNewVersionSelected: 'settingsGear',
                            analyticsParams: { to: eg.AppScreen.SettingsScreen, entityType: eg.EntityTypes.Profile },
                        }),
                        [eV.PLUS]: () => ({
                            icon: 'plusOutlined',
                            iconSelected: 'plusOutlined',
                            iconNewVersion: 'navigationPlus',
                            iconNewVersionSelected: 'navigationPlus',
                            analyticsParams: { to: eg.AppScreen.PlusScreen, entityType: eg.EntityTypes.Plus },
                        }),
                        [eV.MUZMARKET]: () => ({
                            icon: 'navigationMuzmarket',
                            iconSelected: 'navigationMuzmarket',
                            iconNewVersion: 'navigationMuzmarket',
                            iconNewVersionSelected: 'navigationMuzmarket',
                            analyticsParams: { to: eg.AppScreen.MuzmarketScreen, entityType: eg.EntityTypes.Muzmarket },
                        }),
                    };
                return s.map((e) => ({ ...e, ...l[e.id]() }));
            };
            var eY = a(30746);
            let eq = () => {
                let e = (0, eY.D)(),
                    t = (0, h.usePathname)();
                return (0, x.useCallback)((a) => a.some((a) => (a === F.Z.main.href ? a === t : e.startsWith(a))), [e, t]);
            };
            var eZ = a(5668),
                eX = a(97522),
                eQ = a(6304),
                eJ = a(76945);
            let e0 = () => {
                    let e = (0, eC.st)(),
                        { hash: t } = (0, eC.gf)(),
                        a = (0, en.U)(),
                        { location: i } = (0, L.g)();
                    return (0, x.useCallback)(
                        (n, r) => {
                            if (!e || !t) return;
                            let s = (0, ef.F)({
                                params: ((e) => {
                                    let { isNotFound: t, entityType: a, to: i, hash: n } = e;
                                    return t
                                        ? {
                                              entityType: eg.EntityTypes.Error,
                                              entityId: eg.EntityTypes.Error,
                                              hash: n,
                                              pageId: eg.AppScreen.PageNotFoundScreen,
                                              pageStyle: eg.PageStyles.Fullscreen,
                                              pagePlacement: eg.PagePlacements.Fullscreen,
                                              mainObjectType: eg.DomainObjectType.NonApplicable,
                                              mainObjectId: eg.DomainObjectType.NonApplicable,
                                              from: eg.AppScreen.PageNotFoundScreen,
                                              to: i,
                                          }
                                        : {
                                              entityType: a,
                                              entityId: a,
                                              hash: n,
                                              pageId: eg.AppScreen.Sidebar,
                                              pageStyle: eg.PageStyles.Bar,
                                              pagePlacement: eg.PagePlacements.Left,
                                              from: eg.AppScreen.Sidebar,
                                              to: i,
                                          };
                                })({ isNotFound: i.isNotFound, entityType: n, to: r, hash: t }),
                                logger: a,
                                context: 'useSendEventOnNavbarNavigated',
                            });
                            s && (0, eJ.ID)(e.evgenInstance, s);
                        },
                        [e, t, a, i.isNotFound],
                    );
                },
                e1 = {
                    [eV.SEARCH]: C.e8.navbar.NAVBAR_NAVIGATION_ITEM_SEARCH,
                    [eV.HOME]: C.e8.navbar.NAVBAR_NAVIGATION_ITEM_HOME,
                    [eV.FOR_YOU_AND_TRENDS]: C.e8.navbar.NAVBAR_NAVIGATION_ITEM_FOR_YOU_AND_TRENDS,
                    [eV.CONCERTS]: C.e8.navbar.NAVBAR_NAVIGATION_ITEM_CONCERTS,
                    [eV.NON_MUSIC]: C.e8.navbar.NAVBAR_NAVIGATION_ITEM_NON_MUSIC,
                    [eV.KIDS]: C.e8.navbar.NAVBAR_NAVIGATION_ITEM_KIDS,
                    [eV.COLLECTION]: C.e8.navbar.NAVBAR_NAVIGATION_ITEM_COLLECTION,
                    [eV.PLUS]: C.e8.navbar.NAVBAR_NAVIGATION_ITEM_PLUS,
                    [eV.MUZMARKET]: C.e8.navbar.NAVBAR_NAVIGATION_ITEM_MUZMARKET,
                },
                e2 = (e) => {
                    let { padding: t, placement: a } = e;
                    return { shiftOptions: { padding: t }, offsetOptions: t, flipOptions: { fallbackAxisSideDirection: 'start', padding: t }, placement: a };
                },
                e4 = e2({ placement: 'right', padding: 8 });
            var e9 = a(93935),
                e3 = a.n(e9);
            let e8 = (e) => {
                let { children: t } = e;
                return (0, m.jsxs)('span', {
                    className: e3().root,
                    children: [t, (0, m.jsx)(I.HL, { variant: 'span', type: 'controls', size: 'xxs', weight: 'medium', className: e3().badge, children: 'BETA' })],
                });
            };
            var e5 = a(8900),
                e6 = a(75167),
                e7 = a(15053),
                te = a.n(e7);
            let tt = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                ta = (0, v.PA)((e) => {
                    let { config: t, children: a } = e,
                        { formatMessage: i } = (0, g.A)(),
                        {
                            settings: { isMobile: n },
                        } = (0, L.g)(),
                        { compositePlayerBarRef: r } = (0, k.g)(),
                        { setIsOnboardingOpened: s } = (0, e6.w)(),
                        [o, l] = (0, eS.d)(),
                        d = (0, e5.z)({ id: t.id, ref: o }),
                        [c, u] = (0, x.useState)(d && t.isEnabled),
                        _ = (0, N.c)((e) => {
                            (null == e || e.stopPropagation(), u(!1), s(!1));
                        }),
                        p = (0, N.c)((e) => {
                            e || _();
                        });
                    return (0, m.jsxs)(B.m_, {
                        placement: n ? 'top' : 'right',
                        arrowProps: tt,
                        offsetOptions: n ? 15 : -10,
                        isHoverEnabled: !1,
                        open: c,
                        onOpenChange: p,
                        enableAriaDescribedby: !0,
                        referenceRef: l,
                        children: [
                            a,
                            (0, m.jsxs)(B.ZI, {
                                className: te().tooltip,
                                rootNode: n ? r : void 0,
                                children: [
                                    (0, m.jsx)(T.$, {
                                        icon: (0, m.jsx)(S.I, { variant: 'close', size: 'xxs' }),
                                        onClick: _,
                                        variant: 'text',
                                        withRipple: !1,
                                        className: te().button,
                                        'aria-label': i({ id: 'interface-actions.close' }),
                                    }),
                                    (0, m.jsx)(I.HL, { className: te().text, variant: 'span', children: t.text }),
                                ],
                            }),
                        ],
                    });
                }),
                ti = (e) => {
                    let { config: t, children: a } = e;
                    return t ? (0, m.jsx)(ta, { config: t, children: a }) : a;
                };
            var tn = a(81257),
                tr = a(67608),
                ts = a(87895),
                to = a(83218);
            function tl(e, t) {
                var a = Object.create(null);
                return (
                    e &&
                        x.Children.map(e, function (e) {
                            return e;
                        }).forEach(function (e) {
                            a[e.key] = t && (0, x.isValidElement)(e) ? t(e) : e;
                        }),
                    a
                );
            }
            function td(e, t, a) {
                return null != a[t] ? a[t] : e.props[t];
            }
            var tc =
                    Object.values ||
                    function (e) {
                        return Object.keys(e).map(function (t) {
                            return e[t];
                        });
                    },
                tu = (function (e) {
                    function t(t, a) {
                        var i = e.call(this, t, a) || this,
                            n = i.handleExited.bind(
                                (function (e) {
                                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e;
                                })(i),
                            );
                        return ((i.state = { contextValue: { isMounting: !0 }, handleExited: n, firstRender: !0 }), i);
                    }
                    (0, ts.A)(t, e);
                    var a = t.prototype;
                    return (
                        (a.componentDidMount = function () {
                            ((this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } }));
                        }),
                        (a.componentWillUnmount = function () {
                            this.mounted = !1;
                        }),
                        (t.getDerivedStateFromProps = function (e, t) {
                            var a,
                                i,
                                n = t.children,
                                r = t.handleExited;
                            return {
                                children: t.firstRender
                                    ? tl(e.children, function (t) {
                                          return (0, x.cloneElement)(t, {
                                              onExited: r.bind(null, t),
                                              in: !0,
                                              appear: td(t, 'appear', e),
                                              enter: td(t, 'enter', e),
                                              exit: td(t, 'exit', e),
                                          });
                                      })
                                    : (Object.keys(
                                          (i = (function (e, t) {
                                              function a(a) {
                                                  return a in t ? t[a] : e[a];
                                              }
                                              ((e = e || {}), (t = t || {}));
                                              var i,
                                                  n = Object.create(null),
                                                  r = [];
                                              for (var s in e) s in t ? r.length && ((n[s] = r), (r = [])) : r.push(s);
                                              var o = {};
                                              for (var l in t) {
                                                  if (n[l])
                                                      for (i = 0; i < n[l].length; i++) {
                                                          var d = n[l][i];
                                                          o[n[l][i]] = a(d);
                                                      }
                                                  o[l] = a(l);
                                              }
                                              for (i = 0; i < r.length; i++) o[r[i]] = a(r[i]);
                                              return o;
                                          })(n, (a = tl(e.children)))),
                                      ).forEach(function (t) {
                                          var s = i[t];
                                          if ((0, x.isValidElement)(s)) {
                                              var o = t in n,
                                                  l = t in a,
                                                  d = n[t],
                                                  c = (0, x.isValidElement)(d) && !d.props.in;
                                              l && (!o || c)
                                                  ? (i[t] = (0, x.cloneElement)(s, {
                                                        onExited: r.bind(null, s),
                                                        in: !0,
                                                        exit: td(s, 'exit', e),
                                                        enter: td(s, 'enter', e),
                                                    }))
                                                  : l || !o || c
                                                    ? l &&
                                                      o &&
                                                      (0, x.isValidElement)(d) &&
                                                      (i[t] = (0, x.cloneElement)(s, {
                                                          onExited: r.bind(null, s),
                                                          in: d.props.in,
                                                          exit: td(s, 'exit', e),
                                                          enter: td(s, 'enter', e),
                                                      }))
                                                    : (i[t] = (0, x.cloneElement)(s, { in: !1 }));
                                          }
                                      }),
                                      i),
                                firstRender: !1,
                            };
                        }),
                        (a.handleExited = function (e, t) {
                            var a = tl(this.props.children);
                            e.key in a ||
                                (e.props.onExited && e.props.onExited(t),
                                this.mounted &&
                                    this.setState(function (t) {
                                        var a = (0, tr.A)({}, t.children);
                                        return (delete a[e.key], { children: a });
                                    }));
                        }),
                        (a.render = function () {
                            var e = this.props,
                                t = e.component,
                                a = e.childFactory,
                                i = (0, tn.A)(e, ['component', 'childFactory']),
                                n = this.state.contextValue,
                                r = tc(this.state.children).map(a);
                            return (delete i.appear, delete i.enter, delete i.exit, null === t)
                                ? x.createElement(to.A.Provider, { value: n }, r)
                                : x.createElement(to.A.Provider, { value: n }, x.createElement(t, i, r));
                        }),
                        t
                    );
                })(x.Component);
            ((tu.propTypes = {}),
                (tu.defaultProps = {
                    component: 'div',
                    childFactory: function (e) {
                        return e;
                    },
                }));
            var t_ = a(45705),
                tm = a(98436),
                tp = a(23818),
                tv = a(86869),
                th = a(56829),
                tb = a(99835),
                tx = a(73614),
                tf = a(28764),
                tg = a(63896),
                tA = a(36577),
                tC = a(85686);
            let tN = () => {
                let e = (0, eC.st)(),
                    { hash: t } = (0, eC.gf)(),
                    a = (0, en.U)(),
                    {
                        settings: { isMobile: i },
                    } = (0, L.g)();
                return (0, x.useCallback)(
                    (n, r) => {
                        if (!e) return;
                        let s = (0, ef.F)({
                            params: {
                                hash: t,
                                pageId: eg.AppScreen.Sidebar,
                                sidebarSize: n || i ? eg.UIElementSizes.Small : eg.UIElementSizes.Medium,
                                from: eg.AppScreen.Sidebar,
                                to: r,
                            },
                            logger: a,
                            context: 'useSendEventOnSidebarNavigated',
                        });
                        s && (0, eA.qi)(e.evgenInstance, s);
                    },
                    [e, t, i, a],
                );
            };
            var ty = a(18284),
                tT = a(47249),
                tS = a.n(tT);
            let tE = (e) => {
                    let { children: t, entityUrl: a, ariaLabel: i, ...n } = e;
                    return a ? (0, m.jsx)(eX.N, { href: a, className: tS().link, 'aria-label': i, ...n, children: t }) : t;
                },
                tB = (e) => {
                    let {
                            className: t,
                            cover: a,
                            title: i,
                            subtitle: n,
                            contextMenu: r,
                            isCollapsed: s,
                            withCollapseAnimation: o,
                            entityUrl: l,
                            onDoubleClick: d,
                            onClick: c,
                            forwardRef: u,
                            ariaLabel: _,
                        } = e,
                        v = eq(),
                        h = (0, x.useCallback)(
                            (e) => {
                                2 === e.detail
                                    ? null == d || d()
                                    : (e.target instanceof HTMLElement && 'IMG' !== e.target.tagName && (0, y.P)(e, tS().ripple), null == c || c(e));
                            },
                            [c, d],
                        ),
                        b = l && v([l]) ? void 0 : l;
                    return (0, m.jsxs)(ty.C, {
                        ref: u,
                        className: (0, p.$)(tS().root, { [tS().root_withoutLink]: !b }, t),
                        role: 'listitem',
                        'aria-label': b ? void 0 : _,
                        'data-test-id': C.e8.navbar.PIN_ITEM,
                        children: [
                            (0, m.jsxs)(tE, {
                                entityUrl: b,
                                ariaLabel: _,
                                onClick: h,
                                children: [
                                    (0, m.jsx)('div', { className: tS().cover, 'data-test-id': C.e8.navbar.PIN_COVER, children: a }),
                                    (0, m.jsx)('div', {
                                        className: tS().meta,
                                        children: (0, m.jsxs)('div', {
                                            className: (0, p.$)(tS().info, {
                                                [tS().info_collapsed]: s,
                                                [tS().info_animated]: o,
                                                [tS().info_withContextMenu]: (0, x.isValidElement)(r),
                                            }),
                                            children: [
                                                (0, m.jsx)(I.HL, {
                                                    'aria-hidden': !0,
                                                    className: tS().title,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    lineClamp: 1,
                                                    'data-test-id': C.e8.navbar.PIN_TITLE,
                                                    children: i,
                                                }),
                                                (0, m.jsx)(I.HL, {
                                                    'aria-hidden': !0,
                                                    className: tS().subtitle,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    lineClamp: 1,
                                                    'data-test-id': C.e8.navbar.PIN_SUBTITLE,
                                                    children: n,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, x.isValidElement)(r) &&
                                (0, m.jsx)('div', {
                                    className: (0, p.$)(tS().contextMenu, { [tS().contextMenu_hidden]: s }),
                                    'data-test-id': C.e8.navbar.PIN_CONTEXT_MENU_BUTTON,
                                    children: r,
                                }),
                        ],
                    });
                },
                tI = (0, x.forwardRef)((e, t) => (0, m.jsx)(tB, { forwardRef: t, ...e })),
                tj = (0, x.createContext)(null);
            var tP = a(90750),
                tk = a.n(tP),
                tw = a(10820),
                tL = a(56120),
                tO = a(67303);
            let tD = () => {
                    let e = (0, eC.st)(),
                        { hash: t } = (0, eC.gf)(),
                        a = (0, en.U)(),
                        {
                            settings: { isMobile: i },
                        } = (0, L.g)();
                    return (0, x.useCallback)(
                        (n) => {
                            let { actionType: r, isCollapsed: s, mainObjectType: o, mainObjectId: l } = n;
                            if (!e) return;
                            let d = {
                                hash: t,
                                actionType: r,
                                user_interaction_type: eg.UserInteractionType.Tap,
                                pageId: eg.AppScreen.Sidebar,
                                sidebarSize: s || i ? eg.UIElementSizes.Small : eg.UIElementSizes.Medium,
                            };
                            (o && (d.mainObjectType = o), l && (d.mainObjectId = l));
                            let c = (0, ef.F)({ params: d, logger: a, context: 'useSendEventOnSidebarActionPerformed' });
                            c && (0, eA.dL)(e.evgenInstance, c);
                        },
                        [e, t, i, a],
                    );
                },
                tR = (e) => {
                    let { onPinClick: t, isPinned: a } = e,
                        { formatMessage: i } = (0, g.A)(),
                        { isCollapsed: n } = (0, x.useContext)(tj) || {},
                        [r, s] = (0, x.useState)(!1),
                        o = tD(),
                        l = (0, x.useCallback)((e) => {
                            (e.preventDefault(), e.stopPropagation());
                        }, []),
                        d = (0, x.useCallback)(() => {
                            (t(), o({ actionType: eg.ActionType.Unpin, isCollapsed: null != n && n }));
                        }, [n, t, o]);
                    return (
                        (0, tL.N)(r),
                        (0, m.jsx)(tw.W1, {
                            className: (0, p.$)(tk().contextMenu, { [tk().contextMenu_visible]: r }),
                            onClick: l,
                            icon: (0, m.jsx)(S.I, { size: 'xxs', variant: 'more' }),
                            tabIndex: n ? -1 : 0,
                            'aria-hidden': n,
                            variant: 'text',
                            offsetOptions: 3,
                            open: r,
                            onOpenChange: s,
                            ariaLabel: i({ id: 'interface-actions.context-menu' }),
                            containerDataTestId: C.e8.navbar.PIN_CONTEXT_MENU,
                            children: (0, m.jsx)(tO.L, { onClick: d, isPinned: a }),
                        })
                    );
                },
                tM = (0, v.PA)((e) => {
                    var t;
                    let { className: a, album: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: s } = (0, g.A)(),
                        { isCollapsed: o, withCollapseAnimation: l } = null != (t = (0, x.useContext)(tj)) ? t : {},
                        d = (0, tA.A)(i),
                        c = (0, tx.r)(i.type, tx.c.PIN),
                        u = tN(),
                        _ = ((e) =>
                            (0, x.useMemo)(() => {
                                switch (e) {
                                    case th._.PODCAST:
                                        return eg.AppScreen.PodcastScreen;
                                    case th._.AUDIOBOOK:
                                        return eg.AppScreen.AudiobookScreen;
                                    default:
                                        return eg.AppScreen.AlbumScreen;
                                }
                            }, [e]))(i.type),
                        v = (0, tC.Z)(i.url),
                        h = ((e) => {
                            let { albumId: t, albumUrl: a, callback: i } = e,
                                { getAlbumUrlWithSavedClid: n, checkIsCurrentAlbumPage: r } = (0, tf.I)(),
                                s = (0, tg.p)();
                            return (0, N.c)((e) => {
                                if (!t || !a) {
                                    null == i || i(e);
                                    return;
                                }
                                if (r(t)) {
                                    (null == e || e.preventDefault(), s(n(t, a)));
                                    return;
                                }
                                null == i || i(e);
                            });
                        })({ albumId: i.id, albumUrl: i.url, callback: v }),
                        b = (0, tb.c)({ album: i, callback: h }),
                        f = (0, N.c)((e) => {
                            (u(null != o && o, _), b(e));
                        }),
                        A = (0, x.useMemo)(
                            () =>
                                (0, m.jsx)(tv.t, {
                                    className: tk().cover,
                                    radius: 'xs',
                                    children: (0, m.jsxs)(B.m_, {
                                        ...r,
                                        enabled: o,
                                        children: [
                                            (0, m.jsx)(tp._V, {
                                                className: tk().image,
                                                'aria-hidden': !0,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, m.jsx)(B.ZI, {
                                                className: tk().tooltip,
                                                children: (0, m.jsx)(I.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.title,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [i.coverUri, i.title, o, r],
                        );
                    return (0, m.jsx)(tI, {
                        ref: n,
                        ariaLabel: s({ id: 'entity-names.album-name' }, { albumName: i.title }),
                        className: (0, p.$)(tk().root, a),
                        title: i.title,
                        entityUrl: i.url,
                        subtitle: c,
                        cover: A,
                        isCollapsed: !!o,
                        withCollapseAnimation: !!l,
                        contextMenu: (0, m.jsx)(tR, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: f,
                    });
                }),
                tF = (0, x.forwardRef)((e, t) => (0, m.jsx)(tM, { forwardRef: t, ...e }));
            var tU = a(1797),
                tz = a(90613);
            let tW = (0, v.PA)((e) => {
                    var t;
                    let { className: a, artist: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: s } = (0, g.A)(),
                        { isCollapsed: o, withCollapseAnimation: l } = null != (t = (0, x.useContext)(tj)) ? t : {},
                        d = (0, tz.A)(i),
                        c = tN(),
                        u = (0, tC.Z)(i.url),
                        _ = (0, tU.S)({ artist: i, callback: u }),
                        v = (0, N.c)((e) => {
                            (c(null != o && o, eg.AppScreen.ArtistScreen), _(e));
                        }),
                        h = (0, x.useMemo)(
                            () =>
                                (0, m.jsx)(tv.t, {
                                    className: tk().cover,
                                    radius: 'round',
                                    children: (0, m.jsxs)(B.m_, {
                                        ...r,
                                        enabled: o,
                                        children: [
                                            (0, m.jsx)(tp._V, {
                                                className: tk().image,
                                                'aria-hidden': !0,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, m.jsx)(B.ZI, {
                                                className: tk().tooltip,
                                                children: (0, m.jsx)(I.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.name,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [i.coverUri, i.name, o, r],
                        );
                    return (0, m.jsx)(tI, {
                        ref: n,
                        ariaLabel: s({ id: 'entity-names.artist-name' }, { artistName: i.name }),
                        className: (0, p.$)(tk().root, a),
                        title: i.name,
                        entityUrl: i.url,
                        subtitle: (0, m.jsx)(A.A, { id: 'entity-names.artist' }),
                        cover: h,
                        isCollapsed: !!o,
                        withCollapseAnimation: !!l,
                        contextMenu: (0, m.jsx)(tR, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: v,
                    });
                }),
                tV = (0, x.forwardRef)((e, t) => (0, m.jsx)(tW, { forwardRef: t, ...e }));
            var tH = a(1134);
            let tK = (e) => {
                    var t;
                    let { className: a, playlist: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: s } = (0, g.A)(),
                        { isCollapsed: o, withCollapseAnimation: l } = null != (t = (0, x.useContext)(tj)) ? t : {},
                        d = (0, tH.A)(i),
                        c = tN(),
                        u = (0, N.c)(() => {
                            c(null != o && o, eg.AppScreen.PlaylistScreen);
                        }),
                        _ = (0, x.useMemo)(
                            () =>
                                (0, m.jsx)(tv.t, {
                                    className: tk().cover,
                                    radius: 'xs',
                                    children: (0, m.jsxs)(B.m_, {
                                        ...r,
                                        enabled: o,
                                        children: [
                                            (0, m.jsx)(tp._V, {
                                                'aria-hidden': !0,
                                                className: tk().image,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, m.jsx)(B.ZI, {
                                                className: tk().tooltip,
                                                children: (0, m.jsx)(I.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.title,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [o, i.coverUri, i.title, r],
                        );
                    return (0, m.jsx)(tI, {
                        ref: n,
                        ariaLabel: s({ id: 'entity-names.playlist-name' }, { playlistName: i.title }),
                        className: (0, p.$)(tk().root, a),
                        title: i.title,
                        entityUrl: i.url,
                        subtitle: (0, m.jsx)(A.A, { id: 'entity-names.playlist' }),
                        cover: _,
                        isCollapsed: !!o,
                        withCollapseAnimation: !!l,
                        contextMenu: (0, m.jsx)(tR, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: u,
                    });
                },
                tG = (0, x.forwardRef)((e, t) => (0, m.jsx)(tK, { forwardRef: t, ...e }));
            var t$ = a(14693),
                tY = a(75159),
                tq = a(86209),
                tZ = a(79367),
                tX = a(40110),
                tQ = a(20258),
                tJ = a(47009),
                t0 = a(51514),
                t1 = a(6349);
            let t2 = (0, v.PA)((e) => {
                    var t;
                    let { className: a, vibe: i, forwardRef: n, tooltipOptions: r } = e,
                        s = (0, x.useId)(),
                        { formatMessage: o } = (0, g.A)(),
                        { isCollapsed: l, withCollapseAnimation: d } = null != (t = (0, x.useContext)(tj)) ? t : {},
                        [c, u] = (0, x.useState)(!1),
                        _ = (0, tY.A)(i),
                        { freeAccess: v } = (0, L.g)(),
                        { state: h, setState: b } = (0, t$.e)(!1),
                        f = (() => {
                            let e = (0, eC.st)(),
                                { hash: t } = (0, eC.gf)(),
                                a = (0, en.U)(),
                                {
                                    settings: { isMobile: i },
                                } = (0, L.g)();
                            return (0, x.useCallback)(
                                (n) => {
                                    let { isCollapsed: r, mainObjectId: s } = n;
                                    if (!e) return;
                                    let o = (0, ef.F)({
                                        params: {
                                            hash: t,
                                            pageId: eg.AppScreen.Sidebar,
                                            sidebarSize: r || i ? eg.UIElementSizes.Small : eg.UIElementSizes.Medium,
                                            mainObjectType: eg.DomainObjectType.Wave,
                                            mainObjectId: s,
                                        },
                                        logger: a,
                                        context: 'useSendEventOnSidebarStarted',
                                    });
                                    o && (0, eA.cV)(e.evgenInstance, o);
                                },
                                [e, t, i, a],
                            );
                        })(),
                        A = tD(),
                        C = (0, tJ.b)(),
                        y = (0, tZ.P)(),
                        T = i.stationType === t0.q7,
                        { isPlaying: S, togglePlay: E, isCurrent: j } = (0, w.B)({ seeds: i.seeds, pageIdForFrom: tQ._Q.SIDEBAR, blockIdForFrom: tX.U.RADIO }),
                        P = (0, N.c)(async () => {
                            var e, t;
                            return v.isVibeStartRestricted
                                ? void b(!0)
                                : (S
                                      ? A({
                                            actionType: eg.ActionType.Pause,
                                            isCollapsed: null != l && l,
                                            mainObjectType: eg.DomainObjectType.Wave,
                                            mainObjectId: null != (e = i.seeds[0]) ? e : '',
                                        })
                                      : f({ isCollapsed: null != l && l, mainObjectId: null != (t = i.seeds[0]) ? t : '' }),
                                  E());
                        }),
                        k = (0, N.c)(() => {
                            y() ||
                                (u(!0),
                                P().finally(() => {
                                    u(!1);
                                }),
                                C(!S));
                        }),
                        O = (0, x.useMemo)(
                            () => (0, m.jsx)(I.HL, { id: s, variant: 'span', type: 'controls', size: 's', lineClamp: 1, children: i.title }),
                            [s, i.title],
                        ),
                        D = (0, Y.L)(() => {
                            var e;
                            return i.shouldShowAgent && i.agent
                                ? (0, m.jsx)(tq.n, {
                                      agent: i.agent,
                                      isCurrent: j,
                                      isPlaying: S,
                                      onPlayButtonClick: k,
                                      className: (0, p.$)({ [tk().multivibeContainer]: T }),
                                      coverClassName: (0, p.$)({ [tk().multivibeCover]: T }),
                                      entityCoverClassName: (0, p.$)({ [tk().multivibeAvatar]: T }),
                                      controlClassName: (0, p.$)({ [tk().multivibeControl]: T }),
                                  })
                                : (0, m.jsx)(t1.q, {
                                      isCurrent: j,
                                      isPlaying: S,
                                      isAvailable: !0,
                                      isPlayButtonLoading: c,
                                      onPlayButtonClick: k,
                                      title: i.title,
                                      entityCoverStyle: { backgroundColor: null == (e = i.colors) ? void 0 : e.average },
                                      ariaDescribedBy: s,
                                      coverUri: i.backgroundImageUrl,
                                      radius: 'round',
                                      className: (0, p.$)({ [tk().multivibeContainer]: T }),
                                      withLoadingIndicator: !1,
                                      coverClassName: (0, p.$)({ [tk().multivibeCover]: T }),
                                      entityCoverClassName: (0, p.$)({ [tk().multivibeAvatar]: T }),
                                      controlClassName: (0, p.$)({ [tk().multivibeControl]: T }),
                                  });
                        }),
                        R = (0, Y.L)(() =>
                            (0, m.jsxs)(B.m_, {
                                ...r,
                                enabled: l,
                                children: [
                                    D,
                                    (0, m.jsx)(B.ZI, {
                                        className: tk().tooltip,
                                        children: (0, m.jsx)(I.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: i.title }),
                                    }),
                                ],
                            }),
                        ),
                        M = (0, x.useCallback)(
                            () =>
                                (0, m.jsx)(tI, {
                                    ref: n,
                                    ariaLabel: o({ id: 'entity-names.vibe-name' }, { vibeName: i.title }),
                                    onDoubleClick: P,
                                    className: (0, p.$)(tk().root, a),
                                    isCollapsed: !!l,
                                    contextMenu: (0, m.jsx)(tR, { onPinClick: _, isPinned: i.isPinned }),
                                    withCollapseAnimation: !!d,
                                    title: O,
                                    subtitle: i.getDescription(o({ id: 'entity-names.my-vibe' })),
                                    cover: R,
                                }),
                            [n, P, a, l, _, i, d, O, o, R],
                        );
                    return (0, m.jsx)(eZ.S, {
                        isEnabled: v.isVibeStartRestricted,
                        isOpened: h,
                        onOpenChange: b,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: i.stationType,
                        renderChildren: M,
                    });
                }),
                t4 = (0, x.forwardRef)((e, t) => (0, m.jsx)(t2, { forwardRef: t, ...e }));
            var t9 = a(32299),
                t3 = a.n(t9);
            let t8 = e2({ placement: 'right', padding: 20 }),
                t5 = { enter: t3().pin_enter, enterActive: t3().pin_enter_active, exit: t3().pin_exit, exitActive: t3().pin_exit_active },
                t6 = (0, v.PA)((e) => {
                    var t, a;
                    let { className: i, withCollapseAnimation: n, isCollapsed: r, style: s } = e,
                        { formatMessage: o } = (0, g.A)(),
                        { pinsCollection: l } = (0, L.g)(),
                        d = null == (t = l.items) ? void 0 : t.map(() => (0, x.createRef)()),
                        c = (0, x.useMemo)(() => ({ withCollapseAnimation: n, isCollapsed: r }), [r, n]),
                        u = l.items && l.items.length > 0,
                        _ = l.items && l.items.length >= 3;
                    return (0, m.jsx)(tj.Provider, {
                        value: c,
                        children: (0, m.jsx)('div', {
                            className: (0, p.$)(t3().root, { [t3().root_withScroll]: _, [t3().root_hasPins]: u }, i),
                            style: s,
                            'data-test-id': C.e8.navbar.PIN_LIST,
                            children: (0, m.jsx)('div', {
                                role: 'list',
                                'aria-label': o({ id: 'navigation.pins-list' }),
                                className: t3().content,
                                children: (0, m.jsx)(tu, {
                                    component: null,
                                    children:
                                        null == (a = l.items)
                                            ? void 0
                                            : a.map((e, t) => {
                                                  switch (e.type) {
                                                      case tm._.ALBUM_ITEM:
                                                          return (0, m.jsx)(
                                                              t_.A,
                                                              {
                                                                  classNames: t5,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(tF, {
                                                                      className: t3().pin,
                                                                      tooltipOptions: t8,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      album: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case tm._.ARTIST_ITEM:
                                                          return (0, m.jsx)(
                                                              t_.A,
                                                              {
                                                                  classNames: t5,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(tV, {
                                                                      className: t3().pin,
                                                                      tooltipOptions: t8,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      artist: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case tm._.PLAYLIST_ITEM:
                                                          return (0, m.jsx)(
                                                              t_.A,
                                                              {
                                                                  classNames: t5,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(tG, {
                                                                      className: t3().pin,
                                                                      tooltipOptions: t8,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      playlist: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case tm._.WAVE_ITEM:
                                                          return (0, m.jsx)(
                                                              t_.A,
                                                              {
                                                                  classNames: t5,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(t4, {
                                                                      className: t3().pin,
                                                                      tooltipOptions: t8,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      vibe: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                  }
                                              }),
                                }),
                            }),
                        }),
                    });
                }),
                t7 = { src: '/_next/static/media/ticket_dark.4e1b9044.png' },
                ae = { src: '/_next/static/media/ticket_dark_selected.2b929060.png' },
                at = { src: '/_next/static/media/ticket_light.6b4bb4f7.png' },
                aa = { src: '/_next/static/media/ticket_light_selected.648fa420.png' };
            var ai = a(26669),
                an = a.n(ai);
            let ar = (e) => {
                    let { isSelected: t, forwardRef: a } = e,
                        { theme: i } = (0, V.W)(),
                        n = (0, Y.L)(() => {
                            switch (i) {
                                case U.S.Dark:
                                    if (t) return ae.src;
                                    return t7.src;
                                case U.S.Light:
                                    if (t) return aa.src;
                                    return at.src;
                            }
                        });
                    return (0, m.jsx)(tp._V, { ref: a, className: an().root, fit: 'contain', withLoadingIndicator: !1, src: n });
                },
                as = (0, x.forwardRef)((e, t) => (0, m.jsx)(ar, { forwardRef: t, ...e }));
            var ao = a(51008),
                al = a.n(ao),
                ad = a(83065),
                ac = (function (e) {
                    return ((e.WINDOWS = 'WINDOWS'), (e.MACOS = 'MACOS'), (e.UNKNOWN = 'UNKNOWN'), e);
                })({}),
                au = a(3109),
                a_ = a.n(au);
            let am = { exit: a_().bar_exit, exitActive: a_().bar_exit_active, enter: a_().bar_enter, enterActive: a_().bar_enter_active },
                ap = { exit: a_().button_exit, exitActive: a_().button_exit_active, enter: a_().button_enter, enterActive: a_().button_enter_active },
                av = (e) => {
                    let { className: t, children: a, button: i, isCollapsed: n, barClassName: r } = e,
                        s = (0, x.useRef)(null),
                        o = (0, x.useRef)(null);
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(a_().root, t),
                        children: [
                            (0, m.jsx)(t_.A, {
                                nodeRef: o,
                                in: n,
                                timeout: 150,
                                classNames: ap,
                                unmountOnExit: !0,
                                children: (0, m.jsx)('div', { className: (0, p.$)(a_().button), ref: o, children: i }),
                            }),
                            (0, m.jsx)(t_.A, {
                                nodeRef: s,
                                in: !n,
                                timeout: 150,
                                classNames: am,
                                unmountOnExit: !0,
                                children: (0, m.jsx)('div', { className: (0, p.$)(a_().bar, r), ref: s, children: a }),
                            }),
                        ],
                    });
                },
                ah = (e) => {
                    switch (e) {
                        case ac.MACOS:
                            return 'macos';
                        case ac.WINDOWS:
                            return 'windows';
                        default:
                            return 'musicLogo';
                    }
                },
                ab = (e) => {
                    let { formatMessage: t } = (0, g.A)();
                    switch (e) {
                        case ac.MACOS:
                            return t({ id: 'sidebar.download-macos' });
                        case ac.WINDOWS:
                            return t({ id: 'sidebar.download-windows' });
                        default:
                            return t({ id: 'sidebar.download-app' });
                    }
                };
            var ax = a(23766),
                af = a.n(ax);
            let ag = (e) => {
                    let { variant: t, forwardRef: a, onDownloadClick: i, onCloseClick: n } = e,
                        { formatMessage: r } = (0, g.A)(),
                        s = ab(t),
                        o = (0, x.useMemo)(() => {
                            let e = { span: (e) => (0, m.jsx)('span', { className: af().textBright, children: e }) };
                            switch (t) {
                                case ac.MACOS:
                                    return r({ id: 'sidebar.download-macos-formatted' }, e);
                                case ac.WINDOWS:
                                    return r({ id: 'sidebar.download-windows-formatted' }, e);
                                default:
                                    return r({ id: 'sidebar.download-app-formatted' }, e);
                            }
                        }, [r, t]);
                    return (0, m.jsx)('section', {
                        ref: a,
                        'aria-label': s,
                        children: (0, m.jsxs)(tv.t, {
                            radius: 'm',
                            className: af().root,
                            children: [
                                (0, m.jsx)(T.$, {
                                    color: 'secondary',
                                    radius: 'round',
                                    variant: 'text',
                                    size: 'xxxs',
                                    className: af().closeButton,
                                    icon: (0, m.jsx)(S.I, { variant: 'close', size: 'xxs', className: af().closeButtonIcon }),
                                    withRipple: !1,
                                    onClick: n,
                                    'aria-label': r({ id: 'interface-actions.close' }),
                                }),
                                (0, m.jsx)(I.HL, { variant: 'div', className: af().text, size: 'm', children: o }),
                                (0, m.jsx)(T.$, {
                                    color: 'secondary',
                                    radius: 'xxxl',
                                    size: 'xs',
                                    variant: 'default',
                                    role: 'link',
                                    withRipple: !0,
                                    flexIcon: !0,
                                    'aria-label': s,
                                    onClick: i,
                                    icon: (0, m.jsx)(S.I, { variant: ah(t), size: 'xxs', className: af().downloadButtonIcon }),
                                    'data-test-id': C.e8.navbar.DOWNLOAD_APP_BUTTON_ENLARGED,
                                    children: (0, m.jsx)(I.HL, {
                                        variant: 'span',
                                        className: af().downloadButtonText,
                                        size: 'm',
                                        children: (0, m.jsx)(A.A, { id: 'offline.download' }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                aA = (0, x.forwardRef)((e, t) => (0, m.jsx)(ag, { forwardRef: t, ...e }));
            var aC = a(99200),
                aN = a.n(aC);
            let ay = (e) => {
                    let { variant: t, onDownloadClick: a } = e,
                        i = ab(t),
                        n = (0, x.useMemo)(() => ah(t), [t]);
                    return (0, m.jsxs)(tv.t, {
                        radius: 'm',
                        className: aN().root,
                        children: [
                            (0, m.jsx)(S.I, { variant: n, className: aN().icon }),
                            (0, m.jsxs)(B.m_, {
                                placement: 'left',
                                offsetOptions: 4,
                                children: [
                                    (0, m.jsx)(T.$, {
                                        className: aN().button,
                                        color: 'secondary',
                                        radius: 'round',
                                        size: 'xs',
                                        variant: 'default',
                                        role: 'link',
                                        withRipple: !0,
                                        flexIcon: !0,
                                        onClick: a,
                                        icon: (0, m.jsx)(S.I, { variant: 'download', size: 'xxs', className: aN().buttonIcon }),
                                        'aria-label': i,
                                        'data-test-id': C.e8.navbar.DOWNLOAD_APP_BUTTON_MINIMIZED,
                                    }),
                                    (0, m.jsx)(B.ZI, {
                                        children: (0, m.jsx)(I.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: i }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                aT = (0, v.PA)((e) => {
                    var t;
                    let { isCollapsed: a } = e,
                        { settings: i } = (0, L.g)(),
                        n = (0, eb.N)(),
                        r = n.get(eh.oo),
                        s = n.get(eh.V4),
                        [o, l] = (0, x.useState)(!1),
                        d = (() => {
                            let e = (0, eC.st)(),
                                { hash: t } = (0, eC.gf)(),
                                a = (0, en.U)();
                            return (0, x.useCallback)(() => {
                                if (!e || !t) return;
                                let i = (0, ef.F)({
                                    params: {
                                        entityType: eg.EntityTypes.Error,
                                        entityId: eg.EntityTypes.Error,
                                        hash: t,
                                        pageId: eg.AppScreen.PageNotFoundScreen,
                                        pageStyle: eg.PageStyles.Fullscreen,
                                        pagePlacement: eg.PagePlacements.Fullscreen,
                                        mainObjectType: eg.DomainObjectType.NonApplicable,
                                        mainObjectId: eg.DomainObjectType.NonApplicable,
                                        from: eg.AppScreen.PageNotFoundScreen,
                                        to: eg.AppScreen.AppDownloadScreen,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnDownloadScreenNavigated',
                                });
                                i && (0, eJ.ID)(e.evgenInstance, i);
                            }, [e, t, a]);
                        })(),
                        c = (0, x.useMemo)(() => {
                            var e;
                            switch (null == (e = i.browserInfo) ? void 0 : e.OSFamily) {
                                case 'MacOS':
                                    return ac.MACOS;
                                case 'Windows':
                                    return ac.WINDOWS;
                                default:
                                    return ac.UNKNOWN;
                            }
                        }, [null == (t = i.browserInfo) ? void 0 : t.OSFamily]),
                        u = (0, ad._)(s.downloadDesktop.url),
                        _ = (0, x.useCallback)(() => {
                            (d(), window.open(u, '_blank', 'noreferrer noopener'));
                        }, [d, u]),
                        p = (0, x.useCallback)(() => {
                            (r.set(ex.c.NavbarDownloadBarIsHidden, !0, { expires: 30 }), l(!0));
                        }, [r]);
                    return o
                        ? null
                        : (0, m.jsx)(av, {
                              isCollapsed: a,
                              button: (0, m.jsx)(ay, { variant: c, onDownloadClick: _ }),
                              children: (0, m.jsx)(aA, { variant: c, onDownloadClick: _, onCloseClick: p }),
                          });
                });
            var aS = a(23976),
                aE = a(38787),
                aB = a.n(aE);
            let aI = 'PLUSBAR_BUTTON_INTERSECTION_PROPERTY_ID',
                aj = (0, v.PA)((e) => {
                    let { shouldFetchOffers: t, ...a } = e,
                        { user: i } = (0, L.g)(),
                        [n, r] = (0, eS.d)(),
                        { formatMessage: s } = (0, g.A)(),
                        {
                            mainText: o,
                            isShimmerVisible: l,
                            isShimmerActive: d,
                            openPaymentWidgetModal: c,
                            saveOfferAndAuthorize: u,
                        } = (0, eU.D)({ storeName: 'music', isEnabled: t, offerElement: { element: n, intersectionPropertyId: aI } }),
                        _ = (0, Y.L)(() => o || s({ id: 'authorization.start-button' })),
                        p = (0, N.c)(() => {
                            if (!i.isAuthorized) return void u();
                            c();
                        });
                    return l
                        ? (0, m.jsx)(aS.W, { className: aB().plusButtonShimmer, isActive: d, radius: 'xxxl' })
                        : (0, m.jsx)(T.$, {
                              className: aB().root,
                              isBlock: !0,
                              radius: 'xxxl',
                              size: 'm',
                              color: 'plus',
                              onClick: p,
                              ref: r,
                              'data-intersection-property-id': aI,
                              ...a,
                              children: (0, m.jsx)(I.HL, { variant: 'div', size: 's', lineClamp: 2, children: _ }),
                          });
                });
            function aP() {
                return (aP = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            aj.displayName = 'PlusNavbarButton';
            let ak = function (e) {
                return x.createElement(
                    'svg',
                    aP({ viewBox: '0 0 58 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    x.createElement(
                        'g',
                        { clipPath: 'url(#clip0_2521_25547)' },
                        x.createElement(
                            'g',
                            { clipPath: 'url(#clip1_2521_25547)' },
                            i || (i = x.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' })),
                            n ||
                                (n = x.createElement('path', {
                                    d: 'M40.4184 5.14279C41.6821 4.20644 43.1756 3.6404 44.7322 3.49976V6.07553C43.726 6.20598 42.765 6.59121 41.943 7.20031C40.9138 7.96298 40.1569 9.03624 39.7839 10.2618C39.411 11.4873 39.4419 12.8003 39.8719 14.007C40.3019 15.2137 41.1084 16.2502 42.1723 16.9637C43.2362 17.6773 44.5013 18.03 45.7809 17.9698C47.0605 17.9097 48.2869 17.4399 49.2792 16.6298C50.2716 15.8197 50.9773 14.712 51.2922 13.4703C51.5119 12.6042 51.5334 11.7049 51.3613 10.8378L53.5243 9.09892L53.5229 9.0849C54.1067 10.691 54.1959 12.4383 53.7744 14.1C53.3245 15.8738 52.3163 17.4561 50.8987 18.6135C49.4811 19.7708 47.7291 20.4419 45.9011 20.5278C44.0731 20.6137 42.2658 20.1099 40.7459 19.0906C39.2261 18.0713 38.074 16.5905 37.4597 14.8666C36.8453 13.1428 36.8013 11.2671 37.334 9.51633C37.8668 7.76555 38.948 6.23231 40.4184 5.14279Z',
                                    fill: '#FCCA00',
                                })),
                            r ||
                                (r = x.createElement('path', {
                                    d: 'M51.8934 6.34507L51.9025 6.36777L50.457 8.66347C49.9314 7.88453 49.227 7.23618 48.4027 6.77726V12.0016C48.4027 13.6044 47.1033 14.9038 45.5004 14.9038C43.8975 14.9038 42.5981 13.6044 42.5981 12.0016C42.5981 10.3987 43.8975 9.09931 45.5004 9.09931C46.1011 9.09931 46.6592 9.28181 47.1223 9.59441V3.61938C49.0065 3.98181 50.6703 4.96381 51.8934 6.34507Z',
                                    fill: '#FC3F1D',
                                })),
                            x.createElement(
                                'mask',
                                { id: 'mask0_2521_25547', style: { maskType: 'alpha' }, maskUnits: 'userSpaceOnUse', x: 33, y: 0, width: 25, height: 24 },
                                s || (s = x.createElement('circle', { cx: 45.5005, cy: 12, r: 12, fill: 'white' })),
                            ),
                            o || (o = x.createElement('g', { mask: 'url(#mask0_2521_25547)' })),
                            l ||
                                (l = x.createElement(
                                    'g',
                                    { clipPath: 'url(#clip2_2521_25547)' },
                                    x.createElement('rect', { width: 24, height: 24, transform: 'translate(33.5005)', fill: 'black' }),
                                    x.createElement('path', {
                                        d: 'M57.5002 3.59937L45.121 10.2255L51.5722 3.59937L47.9962 3.59937L43.6042 9.6956V3.59937L40.7002 3.59937V20.3994H43.6042V14.313L47.9962 20.3994H51.5722L45.2885 13.9815L57.5002 20.3994V17.2794L46.3623 12.811L57.5002 13.5594V10.4394L46.4328 11.1589L57.5002 6.71936V3.59937Z',
                                        fill: 'url(#paint0_radial_2521_25547)',
                                    }),
                                )),
                        ),
                    ),
                    d ||
                        (d = x.createElement(
                            'g',
                            { clipPath: 'url(#clip3_2521_25547)' },
                            x.createElement('rect', { x: 17.0005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            x.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M41.0005 12C41.0005 18.6274 35.6279 24 29.0005 24C22.3731 24 17.0005 18.6274 17.0005 12C17.0005 5.37258 22.3731 0 29.0005 0C30.2956 0 31.5427 0.205154 32.7112 0.584736L29.9763 9H21.9892L21.0132 12H29.0013L26.6613 19.2H29.9613L32.3013 12L41.0005 12ZM40.6224 9H33.2763L35.5662 1.95391C38.0324 3.56896 39.8677 6.06758 40.6224 9Z',
                                fill: 'url(#paint1_linear_2521_25547)',
                            }),
                        )),
                    c ||
                        (c = x.createElement('path', {
                            d: 'M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z',
                            fill: 'black',
                        })),
                    u ||
                        (u = x.createElement('path', {
                            d: 'M18.2943 10.6431C18.2943 10.6431 21.283 14.8271 21.2703 14.8639C21.2143 15.024 21.154 15.1821 21.0895 15.338C21.0747 15.3735 17.35 12.1585 17.35 12.1585C17.35 12.1585 18.3728 19.0145 18.3525 19.0314C18.2041 19.1531 18.0528 19.2706 17.8972 19.383C17.8757 19.3986 15.6594 12.6669 15.6594 12.6669C15.6594 12.6669 12.5603 21.1641 12.5342 21.1646C12.4861 21.1654 12.4376 21.1658 12.3896 21.1658C12.2277 21.1658 12.0671 21.1616 11.9069 21.1536C11.8828 21.1523 13.7581 12.101 13.7581 12.101C13.7581 12.101 4.94181 17.5004 4.92916 17.4839C4.80269 17.3199 4.68169 17.1517 4.56617 16.9789C4.55395 16.9607 12.2686 10.4711 12.2686 10.4711C12.269 10.4716 3.15343 9.90658 3.15723 9.88756C3.19601 9.69233 3.2407 9.49879 3.29129 9.30821C3.29593 9.29003 12.0532 8.60038 12.0532 8.60038C12.0532 8.60038 5.65977 5.13649 5.67495 5.12085C5.80606 4.98689 5.94139 4.85674 6.08052 4.73039C6.09738 4.71517 13.1383 7.06726 13.1383 7.06726C13.1383 7.06726 10.9718 2.40366 11.011 2.39774C11.1691 2.3745 11.328 2.35506 11.4886 2.33985C11.5224 2.33689 15.1704 6.63623 15.1704 6.63623C15.1704 6.63623 16.3365 3.16388 16.3711 3.18036C16.5363 3.25811 16.6991 3.34009 16.8588 3.42672C16.8888 3.44278 16.9891 7.20502 16.9891 7.20502C16.9891 7.20502 19.8066 5.92333 19.8133 5.93178C19.9116 6.05814 20.0068 6.18702 20.0987 6.31887C20.1046 6.32732 18.0401 8.74829 18.0401 8.74829C18.0401 8.74829 21.6506 10.0397 21.6565 10.0735C21.6835 10.2261 21.7071 10.3794 21.7265 10.5341C21.7303 10.5658 18.2943 10.6431 18.2943 10.6431Z',
                            fill: '#FED42B',
                        })),
                    _ ||
                        (_ = x.createElement(
                            'defs',
                            null,
                            x.createElement(
                                'radialGradient',
                                {
                                    id: 'paint0_radial_2521_25547',
                                    cx: 0,
                                    cy: 0,
                                    r: 1,
                                    gradientUnits: 'userSpaceOnUse',
                                    gradientTransform: 'translate(40.7002 3.59937) rotate(45) scale(23.7588)',
                                },
                                x.createElement('stop', { offset: 0.5, stopColor: '#FF5500' }),
                                x.createElement('stop', { offset: 1, stopColor: '#BBFF00' }),
                            ),
                            x.createElement(
                                'linearGradient',
                                { id: 'paint1_linear_2521_25547', x1: 17.0005, y1: 10.4, x2: 41.0005, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                x.createElement('stop', { stopColor: '#FF5C4D' }),
                                x.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                x.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            x.createElement(
                                'clipPath',
                                { id: 'clip0_2521_25547' },
                                x.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                            x.createElement(
                                'clipPath',
                                { id: 'clip1_2521_25547' },
                                x.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                            x.createElement(
                                'clipPath',
                                { id: 'clip2_2521_25547' },
                                x.createElement('rect', { width: 24, height: 24, fill: 'white', transform: 'translate(33.5005)' }),
                            ),
                            x.createElement(
                                'clipPath',
                                { id: 'clip3_2521_25547' },
                                x.createElement('rect', { x: 17.0005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                        )),
                );
            };
            var aw = a(95827),
                aL = a.n(aw);
            let aO = (e) => {
                    let { className: t, forwardRef: a, shouldFetchOffers: i } = e,
                        {
                            paywall: { modal: n },
                        } = (0, L.g)(),
                        { formatMessage: r } = (0, g.A)();
                    return (0, m.jsxs)('section', {
                        className: (0, p.$)(aL().root, t),
                        ref: a,
                        'aria-label': r({ id: 'plusbar.subscription-activation' }),
                        'data-test-id': C.e8.plusBar.PLUS_BAR,
                        children: [
                            (0, m.jsx)(ak, { className: aL().logos, 'aria-hidden': 'true' }),
                            (0, m.jsx)(I.HL, {
                                className: aL().title,
                                variant: 'div',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': C.e8.plusBar.PLUS_BAR_TITLE,
                                children: (0, m.jsx)(A.A, { id: 'plusbar.title', values: { br: '\n', nbsp: '\xa0' } }),
                            }),
                            (0, m.jsx)(I.HL, {
                                className: aL().addition,
                                variant: 'div',
                                size: 'xs',
                                weight: 'normal',
                                'data-test-id': C.e8.plusBar.PLUS_BAR_ADDITION,
                                children: (0, m.jsx)(A.A, { id: 'plusbar.text', values: { br: '\n', nbsp: '\xa0' } }),
                            }),
                            (0, m.jsxs)('div', {
                                className: aL().buttons,
                                children: [
                                    (0, m.jsx)(aj, { shouldFetchOffers: i, 'data-test-id': C.e8.plusBar.PLUS_BAR_OFFER_BUTTON }),
                                    (0, m.jsx)(T.$, {
                                        className: aL().button,
                                        isBlock: !0,
                                        radius: 'xxxl',
                                        size: 'm',
                                        variant: 'text',
                                        color: 'primary',
                                        withRipple: !1,
                                        onClick: n.open,
                                        'data-test-id': C.e8.plusBar.PLUS_BAR_PAYWALL_BUTTON,
                                        children: (0, m.jsx)(A.A, { id: 'interface-actions.more-details' }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                aD = (0, x.forwardRef)((e, t) =>
                    (0, m.jsx)(eR.r, { page: eM.l.SIDEBAR, places: [eF.R.SIDEBAR_BANNER], children: (0, m.jsx)(aO, { forwardRef: t, ...e }) }),
                );
            var aR = a(85925),
                aM = a.n(aR);
            let aF = (0, v.PA)((e) => {
                let { isCollapsed: t, shouldFetchOffers: a } = e,
                    { formatMessage: i } = (0, g.A)(),
                    {
                        paywall: { modal: n },
                    } = (0, L.g)();
                return (0, m.jsx)(av, {
                    className: aM().root,
                    isCollapsed: t,
                    button: (0, m.jsxs)(B.m_, {
                        ...e4,
                        enabled: t,
                        children: [
                            (0, m.jsx)(T.$, {
                                variant: 'text',
                                withRipple: !1,
                                size: 'xxs',
                                icon: (0, m.jsx)(S.I, { className: aM().icon, variant: 'plusOutlined' }),
                                className: (0, p.$)(aM().button, aM().important),
                                'aria-label': i({ id: 'plusbar.subscription-activation' }),
                                onClick: n.open,
                                'data-test-id': C.e8.navbar.PAYWALL_BUTTON_MINIMIZED,
                            }),
                            (0, m.jsx)(B.ZI, {
                                children: (0, m.jsx)(I.HL, {
                                    variant: 'span',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    children: (0, m.jsx)(A.A, { id: 'plusbar.subscription-activation' }),
                                }),
                            }),
                        ],
                    }),
                    children: (0, m.jsx)(aD, { shouldFetchOffers: a }),
                });
            });
            aF.displayName = 'NavbarDesktopAnimatedPlusBar';
            var aU = a(35262),
                az = a(46767),
                aW = a.n(az);
            let aV = (e) => {
                let { className: t, optionOffer: a } = e,
                    { formatMessage: i } = (0, g.A)(),
                    { subscriptionName: n, offerText: r, mainText: s, openPaymentWidgetModal: o } = a;
                return (0, m.jsxs)('section', {
                    className: (0, p.$)(aW().root, t),
                    'aria-label': i({ id: 'plusbar.subscription-activation' }),
                    'data-test-id': C.e8.plusBar.PLUS_BAR,
                    children: [
                        (0, m.jsx)(tp._V, {
                            src: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.693eab4a84d7e41b1102de79/orig',
                            alt: 'Option Icon',
                            className: aW().optionIcon,
                        }),
                        (0, m.jsx)(I.HL, {
                            className: aW().title,
                            variant: 'div',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': C.e8.plusBar.PLUS_BAR_TITLE,
                            children: n,
                        }),
                        (0, m.jsx)(I.HL, {
                            className: aW().addition,
                            variant: 'div',
                            size: 'xs',
                            weight: 'normal',
                            'data-test-id': C.e8.plusBar.PLUS_BAR_ADDITION,
                            children: r,
                        }),
                        (0, m.jsx)('div', {
                            className: aW().buttons,
                            children: (0, m.jsx)(T.$, {
                                className: aW().button,
                                isBlock: !0,
                                radius: 'xxxl',
                                size: 'm',
                                variant: 'default',
                                color: 'secondary',
                                withRipple: !1,
                                onClick: o,
                                'data-test-id': C.e8.plusBar.PLUS_BAR_PAYMENT_WIDGET_BUTTON,
                                children: s,
                            }),
                        }),
                    ],
                });
            };
            var aH = a(13287),
                aK = a.n(aH);
            let aG = (0, v.PA)((e) => {
                let { optionOffer: t, isCollapsed: a, setForceUpdateElement: i } = e,
                    [n, r] = (0, x.useState)(!1),
                    s = (0, N.c)(() => {
                        r(!0);
                    }),
                    o = (0, N.c)(() => {
                        r(!1);
                    });
                return (0, m.jsx)(av, {
                    className: aK().root,
                    isCollapsed: a,
                    button: (0, m.jsxs)(aU.AM, {
                        open: n,
                        onOpenChange: r,
                        placement: 'top',
                        offsetOptions: { mainAxis: -50, crossAxis: 0 },
                        children: [
                            (0, m.jsx)(T.$, {
                                type: 'button',
                                onMouseEnter: s,
                                onMouseLeave: o,
                                className: aK().button,
                                ref: i,
                                'data-intersection-property-id': 'PLUSBAR_OPTIONS_BUTTON_INTERSECTION_PROPERTY_ID',
                                children: (0, m.jsx)(tp._V, {
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.693eab4a84d7e41b1102de79/orig',
                                    alt: 'Option Icon',
                                    className: aK().optionIcon,
                                }),
                            }),
                            (0, m.jsx)(aU.hl, {
                                className: aK().popoverContent,
                                onMouseEnter: s,
                                onMouseLeave: o,
                                children: (0, m.jsx)(aV, { className: aK().popoverContent, optionOffer: t }),
                            }),
                        ],
                    }),
                    children: (0, m.jsx)(aV, { optionOffer: t }),
                });
            });
            aG.displayName = 'NavbarDesktopAnimatedPlusOptionsBar';
            var a$ = a(11799),
                aY = a.n(a$);
            let aq = (e) => {
                let { isCollapsed: t, isActive: a } = e;
                return (0, m.jsx)(av, {
                    className: aY().root,
                    isCollapsed: t,
                    button: (0, m.jsx)(aS.W, { className: aY().buttonShimmer, isActive: a, radius: 'round' }),
                    children: (0, m.jsx)(aS.W, { className: aY().barShimmer, isActive: a, radius: 'xxxl' }),
                });
            };
            aq.displayName = 'NavbarDesktopAnimatedShimmerBar';
            var aZ = a(73393),
                aX = a(16978),
                aQ = a(74247),
                aJ = a.n(aQ);
            let a0 = () => {
                let { formatMessage: e } = (0, g.A)(),
                    t = e({ id: 'authorization.enter-title' }),
                    a = e({ id: 'authorization.enter-subtitle' });
                return (0, m.jsxs)('div', {
                    className: aJ().root,
                    'data-test-id': C.e8.unauthBar.UNAUTH_BAR,
                    children: [
                        (0, m.jsx)(x.Suspense, { children: (0, m.jsx)(aZ.F, { className: aJ().userProfile, userIdClassName: aJ().userId, variant: 'desktop' }) }),
                        (0, m.jsx)(I.HL, {
                            className: aJ().title,
                            size: 'm',
                            variant: 'div',
                            weight: 'bold',
                            'data-test-id': C.e8.unauthBar.UNAUTH_BAR_TITLE,
                            children: t,
                        }),
                        (0, m.jsx)(I.HL, {
                            className: aJ().subtitle,
                            size: 'xs',
                            variant: 'div',
                            weight: 'medium',
                            'data-test-id': C.e8.unauthBar.UNAUTH_BAR_ADDITION,
                            children: a,
                        }),
                        (0, m.jsx)(aX.H, { size: 's', isBlock: !0 }),
                    ],
                });
            };
            var a1 = a(10491),
                a2 = a.n(a1);
            let a4 = (0, v.PA)((e) => {
                let { isCollapsed: t, withUserProfileAnimation: a } = e,
                    { user: i } = (0, L.g)();
                return i.isAuthorized
                    ? (0, m.jsx)('div', {
                          className: a2().userProfileContainer,
                          children: (0, m.jsx)(aZ.F, {
                              className: a2().userProfile,
                              userIdClassName: a2().userId,
                              metaClassName: (0, p.$)(a2().userMeta, { [a2().userMeta_withAnimation]: a, [a2().userMeta_collapsed]: t }),
                              withMeta: !0,
                          }),
                      })
                    : (0, m.jsx)(av, {
                          barClassName: a2().unauthorizedBar,
                          isCollapsed: t,
                          button: (0, m.jsxs)(B.m_, {
                              ...e4,
                              enabled: t,
                              children: [
                                  (0, m.jsx)('div', { className: a2().userProfileContainer, children: (0, m.jsx)(aZ.F, { className: a2().userProfile }) }),
                                  (0, m.jsx)(B.ZI, {
                                      children: (0, m.jsx)(I.HL, {
                                          variant: 'span',
                                          type: 'text',
                                          size: 's',
                                          weight: 'medium',
                                          children: (0, m.jsx)(A.A, { id: 'authorization.enter-tooltip' }),
                                      }),
                                  }),
                              ],
                          }),
                          children: (0, m.jsx)(a0, {}),
                      });
            });
            a4.displayName = 'NavbarDesktopUserWidget';
            let a9 = (0, v.PA)((e) => {
                    var t, a, i, n, r;
                    let { className: s, forwardRef: o, isCollapsed: l, shownAnimation: d, handleClick: c } = e,
                        u = ev(),
                        _ = eq(),
                        { formatMessage: v } = (0, g.A)(),
                        h = (0, ez.j)(),
                        {
                            user: b,
                            experiments: f,
                            settings: C,
                            modals: { bestRecommedationModal: y },
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: j },
                            },
                        } = (0, L.g)(),
                        [P, k] = (0, eS.d)(),
                        w = f.checkExperiment(K.z.WebNextPlusOptionsSidebar, 'on') && b.hasPlus,
                        O = (0, eU.D)({
                            storeName: 'music',
                            communicationId: 'mu-promo-kids-7d-web',
                            isEnabled: w,
                            offerElement: { element: P, intersectionPropertyId: 'PLUSBAR_OPTIONS_BUTTON_INTERSECTION_PROPERTY_ID' },
                        }),
                        D = e$(),
                        R = (0, eb.N)().get(eh.oo),
                        M = e0(),
                        F = ((e) => {
                            let t = (0, eb.N)().get(eh.oo),
                                a = ev(),
                                [i, n] = (0, x.useState)(!1);
                            return (
                                (0, x.useEffect)(() => {
                                    !0 !== t.get(ex.c.NavbarCollapsed) && (((e || a) && !1 !== t.get(ex.c.NavbarCollapsed)) || n(!0));
                                }, [e, a, t]),
                                i
                            );
                        })(l),
                        U = b.isAuthorized && !b.hasPlus,
                        z = w && O.isShimmerVisible,
                        W = w && !O.isShimmerVisible && O.subscriptionName,
                        V = (0, eD.Q)(),
                        H = j.isVisible && j.type === ei.h.BRANDING && V.isEnabled ? (null == (t = V.data) ? void 0 : t.style) : void 0,
                        G = f.checkExperiment(K.z.WebNextPromoVeryBestRecommendations, 'on'),
                        $ = f.checkExperiment(K.z.WebNextNavbarExplicit, 'on'),
                        Y = !l && $;
                    null == (a = C.browserInfo) || a.isTouch;
                    let q = R.get(ex.c.NavbarDownloadBarIsHidden),
                        Z = f.checkExperiment(K.z.WebNextNewWaveTab, 'on') || f.checkExperiment(K.z.WebNextNewWaveTab, 'on1'),
                        X =
                            !(null == (i = C.browserInfo) ? void 0 : i.isTouch) &&
                            b.isAuthorized &&
                            !b.hasPlus &&
                            (null == (r = f.getExperiment(K.z.WebNextDesktopWebFreemium)) || null == (n = r.value) ? void 0 : n.closeCollection) === 'on',
                        [Q, J] = (0, x.useState)(!1),
                        [ee, et] = (0, x.useState)(null),
                        ea = (0, x.useMemo)(() => D.some((e) => e.id === eV.COLLECTION && e.isEnabled), [D]),
                        en = X && ea;
                    (0, x.useEffect)(() => {
                        X || J(!1);
                    }, [X]);
                    let er = (0, N.c)(() => (0, m.jsx)('span', { 'aria-hidden': !0 })),
                        es = !q && eT.$3 && 0,
                        eo = (0, x.useMemo)(() => (l ? v({ id: 'sidebar.uncollapse' }) : v({ id: 'sidebar.collapse' })), [l, v]),
                        el = (0, x.useCallback)(
                            (e, t) =>
                                e.id === eV.SETTINGS
                                    ? (0, m.jsx)(S.I, { variant: 'settingsGear', size: 'xs' })
                                    : e.id === eV.CONCERTS && f.checkExperiment(K.z.WebNextConcertsTicketIcon, 'on')
                                      ? (0, m.jsx)(as, { isSelected: t })
                                      : Z
                                        ? (0, m.jsx)(S.I, { variant: t ? e.iconNewVersionSelected : e.iconNewVersion, size: 'xs' })
                                        : (0, m.jsx)(S.I, { variant: t ? e.iconSelected : e.icon, size: 'm' }),
                            [f, Z],
                        ),
                        ed = (0, N.c)(() => {
                            Y && y.open();
                        }),
                        ec = (0, N.c)((e, t) => () => {
                            M(e, t);
                        }),
                        eu = (0, x.useMemo)(
                            () =>
                                (0, m.jsx)(
                                    eL,
                                    {
                                        className: (0, p.$)({ [al().navigationGroup]: Z }),
                                        children: D.map((e) => {
                                            let t = _(e.availablePaths),
                                                a = ((e) => (e.id === eV.MUZMARKET ? (0, m.jsx)(e8, { children: e.title }) : e.title))(e),
                                                i = e.id === eV.COLLECTION && !!X && e.isEnabled,
                                                n = ec(e.analyticsParams.entityType, e.analyticsParams.to),
                                                r = !i && e.isEnabled && !t;
                                            return (0, m.jsx)(
                                                ti,
                                                {
                                                    config: e.onboardingConfig,
                                                    children: (0, m.jsx)(eO, {
                                                        'data-intersection-property-id': eW.N,
                                                        selected: t,
                                                        shownAnimation: d,
                                                        variant: 'main',
                                                        isNewVisualVersion: Z,
                                                        withRipple: Z && e.isEnabled && !t,
                                                        children: (0, m.jsxs)(eX.N, {
                                                            ref: i ? et : void 0,
                                                            href: r ? e.path : void 0,
                                                            role: 'link',
                                                            'aria-disabled': !e.isEnabled,
                                                            tabIndex: e.isEnabled ? 0 : -1,
                                                            className: (0, p.$)({ [al().disabledNavigationItem]: !e.isEnabled }),
                                                            onClick: i
                                                                ? (e) => {
                                                                      (e.preventDefault(), n(), J((e) => !e));
                                                                  }
                                                                : n,
                                                            'data-test-id': e1[e.id],
                                                            children: [
                                                                (0, m.jsxs)(B.m_, {
                                                                    ...e4,
                                                                    enabled: l,
                                                                    children: [
                                                                        el(e, t),
                                                                        (0, m.jsx)(B.ZI, {
                                                                            children: (0, m.jsx)(I.HL, {
                                                                                variant: 'span',
                                                                                type: 'text',
                                                                                size: 's',
                                                                                weight: 'medium',
                                                                                children: a,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, m.jsx)(I.HL, {
                                                                    variant: 'span',
                                                                    type: 'controls',
                                                                    size: 'm',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    className: (0, p.$)({ [al().title_animate]: d, [al().title_collapsed]: l }),
                                                                    children: a,
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                                    },
                                    'main',
                                ),
                            [_, l, f, f.loadingState, d, D, ec, el, X, J],
                        ),
                        e_ = (0, x.useMemo)(
                            () =>
                                u
                                    ? null
                                    : (0, x.createElement)(B.m_, {
                                          ...e4,
                                          key: 'collapseTooltip',
                                          enabled: l,
                                          isFocusEnabled: !1,
                                          children: [
                                              (0, m.jsx)(T.$, {
                                                  className: al().collapseButton,
                                                  'aria-label': eo,
                                                  radius: 'round',
                                                  color: 'secondary',
                                                  size: 'xs',
                                                  icon: (0, m.jsx)(S.I, { variant: l ? 'arrowRight' : 'arrowLeft', size: 'xxs' }),
                                                  onClick: c,
                                              }),
                                              (0, m.jsx)(B.ZI, { className: (0, p.$)({ [al().collapseButtonTooltip_hidden]: !l }), children: eo }),
                                          ],
                                      }),
                            [l, eo, c, u],
                        );
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(al().root, s),
                        style: H,
                        ref: o,
                        children: [
                            (0, m.jsxs)('div', {
                                className: al().logoWrapper,
                                children: [
                                    (0, m.jsx)(eX.N, {
                                        href: '/',
                                        className: al().logoLink,
                                        'aria-label': v({ id: 'navigation.page-main' }),
                                        children: (0, m.jsx)(eE.gu, { className: al().logo, collapsed: l, shownAnimation: d, lang: h }),
                                    }),
                                    e_,
                                ],
                            }),
                            G &&
                                (0, m.jsx)(I.HL, {
                                    variant: 'div',
                                    type: 'text',
                                    size: 'xs',
                                    weight: 'medium',
                                    className: (0, p.$)(al().subTitle, { [al().title_animate]: d, [al().title_collapsed]: l, [al().subTitle_withCursorPointer]: Y }),
                                    onClick: ed,
                                    children: (0, m.jsx)(A.A, { id: 'navigation.best-recommendations' }),
                                }),
                            (0, m.jsx)('div', {
                                className: al().scrollableContainer,
                                children: (0, m.jsxs)('div', {
                                    className: al().scrollableContent,
                                    children: [
                                        (0, m.jsx)(ew, {
                                            className: (0, p.$)(al().navigation, { [al().navigation_new]: Z, [al().navigation_gapFill]: !1 }),
                                            collapsed: l,
                                            'aria-label': v({ id: 'navigation.main-menu' }),
                                            children: eu,
                                        }),
                                        (0, m.jsx)(eQ.WithOffline, {
                                            fallback: (0, m.jsx)(t6, { style: H, isCollapsed: l, withCollapseAnimation: !!d, className: al().pinsList }),
                                        }),
                                        U && (0, m.jsx)(aF, { shouldFetchOffers: F, isCollapsed: l }),
                                        es && (0, m.jsx)(aT, { isCollapsed: l }),
                                        z && (0, m.jsx)(aq, { isCollapsed: l, isActive: O.isShimmerActive }),
                                        W && (0, m.jsx)(aG, { optionOffer: O, isCollapsed: l, setForceUpdateElement: k }),
                                    ],
                                }),
                            }),
                            (0, m.jsx)(a4, { withUserProfileAnimation: d, isCollapsed: l }),
                            en &&
                                null !== ee &&
                                (0, m.jsx)(eZ.S, {
                                    isOpened: Q,
                                    onOpenChange: J,
                                    placement: 'right',
                                    positionElement: ee,
                                    textVariant: 'collectionFreemium',
                                    renderChildren: er,
                                }),
                            $ &&
                                (0, m.jsxs)(E.a, {
                                    className: al().bestRecommendationsModal,
                                    headerClassName: al().bestRecommendationsModalHeader,
                                    contentClassName: al().bestRecommendationsModalContent,
                                    open: y.isOpened,
                                    onOpenChange: y.onOpenChange,
                                    onClose: y.close,
                                    size: 'fitContent',
                                    placement: 'center',
                                    overlayColor: 'full',
                                    labelClose: v({ id: 'interface-actions.close' }),
                                    children: [
                                        (0, m.jsx)(S.I, { variant: 'musicLogo', className: al().bestRecommendationsModalLogo }),
                                        (0, m.jsx)(I.HL, {
                                            className: al().bestRecommendationsModalText,
                                            variant: 'div',
                                            size: 'm',
                                            weight: 'normal',
                                            dangerouslySetInnerHTML: { __html: v({ id: 'about-app.explicit-content' }) },
                                        }),
                                    ],
                                }),
                        ],
                    });
                }),
                a3 = (0, x.forwardRef)((e, t) =>
                    (0, m.jsx)(eR.r, { page: eM.l.SIDEBAR, places: [eF.R.SIDEBAR_BANNER], children: (0, m.jsx)(a9, { forwardRef: t, ...e }) }),
                );
            var a8 = a(43878),
                a5 = a.n(a8);
            let a6 = (0, v.PA)((e) => {
                    let { className: t } = e,
                        { experiments: a } = (0, L.g)(),
                        i = eq(),
                        { formatMessage: n } = (0, g.A)(),
                        r = e$(),
                        s = n({ id: 'navigation.main-menu' }),
                        o = e0(),
                        l = a.checkExperiment(K.z.WebNextNewWaveTab, 'on') || a.checkExperiment(K.z.WebNextNewWaveTab, 'on1'),
                        d = (0, x.useCallback)(
                            (e, t) =>
                                e.id === eV.SETTINGS
                                    ? (0, m.jsx)(S.I, { variant: 'settingsGear', size: 'xs' })
                                    : e.id === eV.CONCERTS && a.checkExperiment(K.z.WebNextConcertsTicketIcon, 'on')
                                      ? (0, m.jsx)(as, { isSelected: t || l })
                                      : l
                                        ? (0, m.jsx)(S.I, { variant: t ? e.iconNewVersionSelected : e.iconNewVersion, size: 'xs' })
                                        : (0, m.jsx)(S.I, { variant: t ? e.iconSelected : e.icon, size: 'm' }),
                            [a, l],
                        ),
                        c = (0, N.c)((e, t) => () => {
                            o(e, t);
                        });
                    return (0, m.jsx)('div', {
                        className: (0, p.$)(a5().root, t),
                        children: (0, m.jsx)(ew, {
                            collapsed: !0,
                            direction: 'horizontal',
                            'aria-label': s,
                            children: (0, m.jsx)(eL, {
                                children: (0, m.jsxs)(m.Fragment, {
                                    children: [
                                        r.map((e) => {
                                            let t = i(e.availablePaths);
                                            return (0, m.jsx)(
                                                ti,
                                                {
                                                    config: e.onboardingConfig,
                                                    children: (0, m.jsx)(eO, {
                                                        'data-intersection-property-id': eW.N,
                                                        selected: t,
                                                        isNewVisualVersion: l,
                                                        children: (0, m.jsxs)(eX.N, {
                                                            href: e.isEnabled && !t ? e.path : void 0,
                                                            role: 'link',
                                                            'aria-disabled': !e.isEnabled,
                                                            tabIndex: e.isEnabled ? 0 : -1,
                                                            className: (0, p.$)({ [a5().disabledNavigationItem]: !e.isEnabled }),
                                                            onClick: c(e.analyticsParams.entityType, e.analyticsParams.to),
                                                            'data-test-id': e1[e.id],
                                                            children: [
                                                                d(e, t),
                                                                (0, m.jsx)(I.HL, {
                                                                    variant: 'span',
                                                                    type: 'controls',
                                                                    size: 'm',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    children: e.title,
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                                        !l && (0, m.jsx)(eO, { children: (0, m.jsx)(aZ.F, { className: a5().user, variant: 'mobile' }) }),
                                    ],
                                }),
                            }),
                        }),
                    });
                }),
                a7 = (0, v.PA)((e) => {
                    var t;
                    let { className: a, externalIsCollapsed: i, externalSetIsCollapsed: n } = e,
                        r = (0, eb.N)().get(eh.oo),
                        s = ev(),
                        {
                            settings: { isMobile: o },
                        } = (0, L.g)(),
                        [l, d] = (0, x.useState)(null != (t = r.get(ex.c.NavbarCollapsed)) ? t : s),
                        [c, u] = (0, x.useState)(!1),
                        _ = (() => {
                            let e = (0, eC.st)(),
                                { hash: t } = (0, eC.gf)(),
                                a = (0, en.U)(),
                                {
                                    settings: { isMobile: i },
                                } = (0, L.g)();
                            return (0, x.useCallback)(
                                (n) => {
                                    if (!e) return;
                                    let r = (0, ef.F)({
                                        params: {
                                            hash: t,
                                            pageId: eg.AppScreen.Sidebar,
                                            sidebarSize: n || i ? eg.UIElementSizes.Small : eg.UIElementSizes.Medium,
                                            sidebarPosition: i ? eg.UIPositions.Bottom : eg.UIPositions.Left,
                                        },
                                        logger: a,
                                        context: 'useSendEventOnSidebarOpened',
                                    });
                                    r && (0, eA.U0)(e.evgenInstance, r);
                                },
                                [e, t, i, a],
                            );
                        })(),
                        v = null != i ? i : l,
                        h = null != n ? n : d,
                        b = (0, x.useMemo)(() => (o ? a6 : a3), [o]),
                        f = (0, N.c)((e) => {
                            (e.stopPropagation(), e.preventDefault());
                            let t = !v;
                            (r.set(ex.c.NavbarCollapsed, t, { expires: 180 }), h(t), u(!0));
                        });
                    return (
                        (0, x.useEffect)(() => {
                            _(v || s);
                        }, [s, v, _]),
                        (0, m.jsx)('aside', {
                            className: (0, p.$)(ey().root, { [ey().root_collapsed]: v || s }, a),
                            'data-test-id': C.e8.navbar.NAVBAR,
                            children: (0, m.jsx)(b, { handleClick: f, isCollapsed: v || s, shownAnimation: c }),
                        })
                    );
                });
            var ie = a(26417);
            let it = { pp: 'g', ps: 'clni', p2: 'joqc', puid1: '', puid2: '', puid3: '' },
                ia = 'adfox_175861261312993498';
            var ii = a(78978),
                ir = (function (e) {
                    return ((e.PLAYER = 'branded_player'), e);
                })({});
            let is = (e) =>
                    (0, ii.m)(e) &&
                    e.type === ir.PLAYER &&
                    'object' == typeof e.payload &&
                    null !== e.payload &&
                    !Array.isArray(e.payload) &&
                    'thumb' in e.payload &&
                    ((e) =>
                        !!(
                            'object' == typeof e &&
                            null !== e &&
                            'href' in e &&
                            'string' == typeof e.href &&
                            'width' in e &&
                            'number' == typeof e.width &&
                            'height' in e &&
                            'number' == typeof e.height
                        ))(e.payload.thumb) &&
                    'modal' in e.payload &&
                    ((e) =>
                        null === e ||
                        !!(
                            'object' == typeof e &&
                            'imageUri' in e &&
                            'string' == typeof e.imageUri &&
                            'content' in e &&
                            'string' == typeof e.content &&
                            'primaryHref' in e &&
                            'string' == typeof e.primaryHref &&
                            'shouldShowSecondaryButton' in e &&
                            'boolean' == typeof e.shouldShowSecondaryButton &&
                            'secondaryText' in e &&
                            'string' == typeof e.secondaryText
                        ))(e.payload.modal),
                io = (0, v.PA)(() => {
                    let {
                            advertBanners: {
                                banners: { brandedPlayerBanner: e },
                            },
                        } = (0, L.g)(),
                        t = (0, N.c)(() => {
                            e.setType(ei.h.BRANDING);
                        }),
                        a = (0, N.c)((t) => {
                            (0, ie.f)(t, ia, is) && e.setPayload(t.data.payload);
                        });
                    return ((0, x.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    (0, x.useEffect)(
                        () => (
                            window.addEventListener('message', a),
                            () => {
                                window.removeEventListener('message', a);
                            }
                        ),
                        [a],
                    ),
                    e.isVisible)
                        ? (0, m.jsx)(X.N, { ownerId: Z.P, containerId: ia, params: it, onLoad: t, onError: e.toggleHasErrorTrue, onNoAds: e.toggleNoAdsTrue })
                        : null;
                });
            var il = a(65343),
                id = a(89209),
                ic = a(20790),
                iu = a(4509),
                i_ = a(30883),
                im = a(84146),
                ip = a(15538),
                iv = a.n(ip);
            let ih = (0, v.PA)((e) => {
                    let { advertData: t } = e,
                        {
                            settings: { isMobile: a },
                        } = (0, L.g)(),
                        { formatMessage: i } = (0, g.A)(),
                        n = !!t.advertiserInfoUrl || !!t.clientLegalInfo,
                        r = (0, x.useCallback)(() => {
                            window.open(t.advertiserInfoUrl, '_blank', 'noreferrer noopener');
                        }, [t.advertiserInfoUrl]);
                    return n
                        ? (0, m.jsxs)(tw.W1, {
                              className: iv().contextMenuButton,
                              size: 'xxs',
                              icon: (0, m.jsx)(S.I, { size: 'xxs', variant: 'more', className: iv().contextMenuIcon }),
                              isMobile: a,
                              ariaLabel: i({ id: 'interface-actions.context-menu' }),
                              children: [
                                  t.clientLegalInfo && (0, m.jsx)(I.HL, { variant: 'div', size: 's', className: iv().contextMenuHeader, children: t.clientLegalInfo }),
                                  t.advertiserInfoUrl &&
                                      (0, m.jsx)(tw.Dr, {
                                          onClick: r,
                                          icon: (0, m.jsx)(S.I, { variant: 'info', size: 'xxs' }),
                                          children: (0, m.jsx)(A.A, { id: 'ads.about-advertiser' }),
                                      }),
                              ],
                          })
                        : null;
                }),
                ib = (0, v.PA)((e) => {
                    var t, a, i;
                    let { className: n } = e,
                        { advert: r } = (0, L.g)();
                    return r.isAdvertDisabled(im.f.AUDIO) || !(r.data && r.isAudioAdvert)
                        ? null
                        : (0, m.jsx)('div', {
                              className: n,
                              children: (0, m.jsx)(i_.b, {
                                  data: r.data,
                                  mediaContent: (0, m.jsxs)('div', {
                                      className: iv().imageContainer,
                                      children: [
                                          (0, m.jsx)(tp._V, {
                                              className: (0, p.$)(iv().image, { [iv().image_fallback]: !(null == (t = r.data) ? void 0 : t.iconSrc) }),
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              src: null == (a = r.data) ? void 0 : a.iconSrc,
                                              fallbackIconVariant: 'picture',
                                              alt: '',
                                          }),
                                          (0, m.jsx)(tp._V, {
                                              className: iv().backgroundImage,
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              src: null == (i = r.data) ? void 0 : i.iconSrc,
                                              fallbackIconVariant: 'picture',
                                              alt: '',
                                          }),
                                          (0, m.jsx)(ih, { advertData: r.data }),
                                      ],
                                  }),
                                  linkClassName: iv().linkButton,
                              }),
                          });
                });
            var ix = a(84219),
                ig = a(14405),
                iA = a.n(ig),
                iC = a(69084),
                iN = a(9794),
                iy = a(16886),
                iT = a(92057),
                iS = a(10648),
                iE = a(57249),
                iB = a(13624),
                iI = a(82289),
                ij = a(41919),
                iP = a.n(ij),
                ik = a(49124);
            let iw = iB.default.default(
                () =>
                    Promise.resolve()
                        .then(a.bind(a, 10648))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = ik.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, iS.setWasmUrl)(new URL(iE, e).href);
            }
            let iL = (0, v.PA)((e) => {
                let { className: t, thumbData: a, onThumbAction: i } = e,
                    { sonataState: n } = (0, L.g)(),
                    { formatMessage: r } = (0, g.A)(),
                    [s, o] = (0, x.useState)(null),
                    [l, d] = (0, x.useState)(null),
                    c = (0, x.useRef)(null),
                    u = (0, x.useRef)(null),
                    _ = (0, N.c)(() => {
                        n.status === iy.MT.PLAYING ? null == s || s.play() : null == s || s.pause();
                    });
                ((0, x.useEffect)(() => {
                    if (!a) return;
                    if ((0, iI.J)(a.href)) return void d(a.href);
                    let e = iT.z[a.href];
                    e
                        ? e().then((e) => {
                              (0, iI.J)(e) ? d(e) : d(''.concat(window.location.origin).concat(e));
                          })
                        : d(a.href);
                }, [a]),
                    (0, x.useEffect)(() => {
                        s && (s.setUseFrameInterpolation(!1), s.setRenderConfig({ devicePixelRatio: 0.1 }));
                    }, [s]),
                    (0, x.useEffect)(() => {
                        if (s)
                            return (
                                s.addEventListener('load', _),
                                () => {
                                    s.removeEventListener('load', _);
                                }
                            );
                    }, [s, _, n.status]),
                    (0, x.useEffect)(() => {
                        _();
                    }, [s, _, n.status]),
                    (0, x.useEffect)(
                        () => () => {
                            u.current && clearTimeout(u.current);
                        },
                        [],
                    ));
                let v = (0, N.c)(() => {
                        (u.current && (clearTimeout(u.current), (u.current = null)), null == i || i());
                    }),
                    h = (0, N.c)(() => {
                        i &&
                            (u.current && clearTimeout(u.current),
                            (u.current = setTimeout(() => {
                                (null == i || i(), (u.current = null));
                            }, 800)));
                    }),
                    b = (0, N.c)(() => {
                        u.current && (clearTimeout(u.current), (u.current = null));
                    }),
                    f = (0, Y.L)(() => {
                        if (a)
                            return { '--thumb-width': ''.concat(a.width, 'px'), '--thumb-height': ''.concat(a.height, 'px'), '--thumb-cursor': i ? 'pointer' : 'auto' };
                    });
                return l
                    ? i
                        ? (0, m.jsx)('div', {
                              className: iP().root,
                              style: f,
                              children: (0, m.jsx)(T.$, {
                                  ref: c,
                                  className: (0, p.$)(iP().container, t),
                                  onClick: v,
                                  onMouseEnter: h,
                                  onMouseLeave: b,
                                  withRipple: !1,
                                  'aria-label': r({ id: 'branded-player.branding-integration' }),
                                  children: (0, m.jsx)(iw, { src: l, loop: !0, dotLottieRefCallback: o, layout: { align: [0, 1] } }, l),
                              }),
                          })
                        : (0, m.jsx)('div', {
                              className: iP().root,
                              style: f,
                              children: (0, m.jsx)('div', {
                                  ref: c,
                                  className: (0, p.$)(iP().container, t),
                                  children: (0, m.jsx)(iw, { src: l, loop: !0, dotLottieRefCallback: o, layout: { align: [0, 1] } }, l),
                              }),
                          })
                    : null;
            });
            var iO = a(50587),
                iD = a.n(iO);
            let iR = (0, v.PA)((e) => {
                var t;
                let { modal: a } = e,
                    {
                        paywall: i,
                        advertBanners: {
                            banners: { brandedPlayerBanner: n },
                        },
                    } = (0, L.g)(),
                    { contentRootRef: r } = (0, k.g)(),
                    { formatMessage: s } = (0, g.A)(),
                    o = (0, tC.Z)(a.primaryHref),
                    l = (0, N.c)((e) => {
                        var t, a;
                        null == (t = (a = n.modal).onOpenChange) || t.call(a, e);
                    });
                ((e) => {
                    let { enabled: t, onChange: a } = e,
                        i = (0, h.usePathname)();
                    (0, x.useRef)(i);
                    let n = (0, N.c)(a);
                    return (
                        (0, x.useEffect)(() => {}, [t, n, i]),
                        (0, x.useEffect)(() => {
                            if (!t || !eT.NN) return;
                            let e = window.navigation;
                            if (e)
                                return (
                                    e.addEventListener('navigate', n),
                                    () => {
                                        e.removeEventListener('navigate', n);
                                    }
                                );
                        }, [t, n])
                    );
                })({ enabled: n.modal.isOpened, onChange: n.modal.close });
                let d = { '--modal-bottom-offset': ''.concat(null == (t = n.payload) ? void 0 : t.thumb.height, 'px') };
                return (0, m.jsxs)(E.a, {
                    size: 'fitContent',
                    placement: 'default',
                    open: n.modal.isOpened,
                    onOpenChange: l,
                    className: iD().root,
                    contentClassName: iD().modalContent,
                    portalNode: r,
                    showHeader: !1,
                    closeOnOutsidePress: !1,
                    lockScroll: !1,
                    withOverlay: !1,
                    enableSwipe: !0,
                    style: d,
                    children: [
                        (0, m.jsxs)('header', {
                            children: [
                                a.imageUri && (0, m.jsx)(tp._V, { src: a.imageUri, className: iD().image }),
                                (0, m.jsx)(T.$, {
                                    className: iD().closeButton,
                                    color: 'primary',
                                    variant: 'text',
                                    radius: 'round',
                                    size: 'xxs',
                                    onClick: n.modal.close,
                                    icon: (0, m.jsx)(S.I, { variant: 'close', size: 'xs' }),
                                    'aria-label': s({ id: 'interface-actions.close' }),
                                }),
                            ],
                        }),
                        (0, m.jsx)(I.HL, { variant: 'span', className: iD().content, lineClamp: 2, children: a.content }),
                        (0, m.jsxs)('div', {
                            className: iD().actions,
                            children: [
                                (0, m.jsx)(T.$, {
                                    size: 's',
                                    color: 'primary',
                                    variant: 'default',
                                    radius: 'xxxl',
                                    onClick: o,
                                    className: iD().button,
                                    children: (0, m.jsx)(I.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        lineClamp: 1,
                                        children: (0, m.jsx)(A.A, { id: 'branded-player.to-website' }),
                                    }),
                                }),
                                a.shouldShowSecondaryButton &&
                                    (0, m.jsx)(T.$, {
                                        size: 's',
                                        color: 'secondary',
                                        variant: 'default',
                                        radius: 'xxxl',
                                        onClick: i.openModal,
                                        className: iD().button,
                                        children: (0, m.jsx)(I.HL, {
                                            variant: 'span',
                                            size: 'm',
                                            lineClamp: 1,
                                            children: a.secondaryText || (0, m.jsx)(A.A, { id: 'branded-player.hide' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var iM = a(94041),
                iF = a(68215),
                iU = a(30296),
                iz = a(18760),
                iW = a(4),
                iV = a.n(iW),
                iH = a(91907),
                iK = a(28903),
                iG = a(95107),
                i$ = a.n(iG);
            let iY = (e) => {
                    let { progress: t, position: a, duration: i, timecodeClassName: n, currentTimecodeClassName: r, progressElementWidth: s, shouldHoldTimecode: o } = e,
                        l = (0, iF.P)(a),
                        d = (0, iF.P)(i),
                        c = (0, x.useRef)(null),
                        [u, _] = (0, x.useState)(0),
                        v = (0, iH.E)(Math.round(i), Math.round(i));
                    (0, x.useEffect)(() => {
                        c.current && _(Math.round(c.current.getBoundingClientRect().width));
                    }, [v.length, s]);
                    let h = Math.round((t / 100) * s),
                        b = 0 !== s ? s - u : 0,
                        f = Math.min(Math.max(h - u / 2, 0), b),
                        g = (0, Y.L)(() => {
                            if (!o) return { '--timecode-position': ''.concat(f, 'px') };
                        });
                    return (0, m.jsxs)(m.Fragment, {
                        children: [
                            (0, m.jsx)(iK.d, {
                                role: 'text',
                                'aria-label': d,
                                value: v,
                                variant: 'end',
                                className: (0, p.$)(i$().timecode, n, i$().timecode_end, { [i$().timecode_end_hidden]: !(h < b - u / 2) }),
                            }),
                            (0, m.jsx)(iK.d, {
                                role: 'text',
                                'aria-label': l,
                                style: g,
                                ref: c,
                                value: (0, iH.E)(Math.round(a), Math.round(i)),
                                variant: 'start',
                                className: (0, p.$)(i$().timecode, i$().timecode_current, n, r, {
                                    [i$().timecode_current_animation]: u > 0,
                                    [i$().timecode_current_hidden]: o && !(h > 2 * u),
                                }),
                            }),
                        ],
                    });
                },
                iq = (0, v.PA)((e) => {
                    var t, a, i;
                    let {
                            sliderClassName: n,
                            disabled: r,
                            isMobile: s,
                            progressbarClassName: o,
                            thumbClassName: l,
                            showThumbVariant: d,
                            withTimecode: c,
                            sonataPlaybackId: u,
                        } = e,
                        _ = (0, iU.e)(),
                        v = null == _ ? void 0 : _.getState(u),
                        h = (0, x.useRef)(!1),
                        {
                            advert: b,
                            sonataState: f,
                            settings: A,
                            advertBanners: {
                                banners: { brandedPlayerBanner: y },
                            },
                        } = (0, L.g)(),
                        { formatMessage: T } = (0, g.A)(),
                        S = (0, iM.r)(),
                        [E, B] = (0, x.useState)(f.position),
                        [I, j] = (0, x.useState)(f.duration),
                        P = (0, iF.P)(Math.round(null != E ? E : 0)),
                        k = E && I ? (100 * Math.min(E, I)) / I : 0,
                        w = (0, x.useRef)(null),
                        [O, D] = (0, x.useState)(0),
                        R = O > 0,
                        { state: M, toggleTrue: F, toggleFalse: U } = (0, t$.e)(!1),
                        { state: z, toggleTrue: W, toggleFalse: V } = (0, t$.e)(!1),
                        { isVisibilityRestored: H } = (() => {
                            let { state: e, toggleTrue: t, toggleFalse: a } = (0, t$.e)(!1);
                            return (
                                (0, x.useEffect)(() => {
                                    let e = new AbortController();
                                    return (
                                        document.addEventListener(
                                            'visibilitychange',
                                            () => {
                                                document.hidden || t();
                                            },
                                            { signal: e.signal },
                                        ),
                                        () => {
                                            e.abort();
                                        }
                                    );
                                }, [t]),
                                (0, x.useEffect)(() => {
                                    if (!e) return;
                                    let t = requestAnimationFrame(() => {
                                        a();
                                    });
                                    return () => {
                                        cancelAnimationFrame(t);
                                    };
                                }, [e, a]),
                                { isVisibilityRestored: e }
                            );
                        })(),
                        K = (0, Y.L)(() => {
                            var e, t;
                            return y.isVisible && (null == (e = y.payload) ? void 0 : e.thumb)
                                ? { thumb: y.payload.thumb, onThumbAction: y.modal.open }
                                : A.selectedThumbId && A.selectedThumbId !== iz.T.DEFAULT
                                  ? { thumb: null == (t = (0, iT.r)(T).get(A.selectedThumbId)) ? void 0 : t.thumb }
                                  : void 0;
                        });
                    ((0, x.useEffect)(() => {
                        (null == _ ? void 0 : _.state.playerState.status.value) === iy.MT.PLAYING && V();
                    }, [V, null == _ ? void 0 : _.state.playerState.status.value]),
                        (0, x.useEffect)(() => {
                            let e = null == _ ? void 0 : _.state.queueState.currentEntity.onChange(W);
                            return (
                                V(),
                                () => {
                                    null == e || e();
                                }
                            );
                        }, [W, V, null == _ ? void 0 : _.state.queueState.currentEntity]));
                    let G = (0, N.c)((e, t) => {
                            b.isAdvertShown || ((h.current = !t), t ? null == _ || _.setProgress(e, u) : B(e));
                        }),
                        $ = (0, N.c)((e, t) => {
                            null !== e && null !== t && (e === 1 / 0 ? (j(0), B(0)) : (j(e), h.current || B(t)));
                        });
                    ((0, x.useEffect)(() => {
                        u || $(f.duration, f.position);
                    }, [f.duration, f.position, $, u]),
                        (0, x.useEffect)(() => {
                            var e;
                            if (!u) return;
                            let t =
                                null == v || null == (e = v.playerState)
                                    ? void 0
                                    : e.progress.onChange((e) => {
                                          e && $(e.duration, e.position);
                                      });
                            return () => {
                                null == t || t();
                            };
                        }, [u, null == v || null == (t = v.playerState) ? void 0 : t.progress, $]),
                        (0, x.useEffect)(() => {
                            var e;
                            let t =
                                null == S || null == (e = S.audioAdvertPlayback)
                                    ? void 0
                                    : e.state.playerState.progress.onChange((e) => {
                                          e && b.isAdvertShown && $(e.duration, e.position);
                                      });
                            return () => {
                                null == t || t();
                            };
                        }, [null == S || null == (a = S.audioAdvertPlayback) ? void 0 : a.state.playerState.progress, $, b.isAdvertShown]));
                    let q = (k / 100) * O - 6;
                    (0, x.useEffect)(() => {
                        let e = new ResizeObserver(() => {
                            var e, t;
                            D(Math.round(null != (t = null == (e = w.current) ? void 0 : e.clientWidth) ? t : 0));
                        });
                        return (
                            w.current && e.observe(w.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, []);
                    let Z = {
                        '--size-thumb': ''.concat(12, 'px'),
                        '--track-progress': ''.concat(k, '%'),
                        '--thumb-position': ''.concat(q, 'px'),
                        ...((z || H) && { '--transition-disabled': 'none' }),
                    };
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(iV().root, { [iV().root_focusVisible]: M, [iV().root_isPlayingTrack]: !b.isAdvertShown }),
                        style: Z,
                        'data-test-id': C.Kq.changeTimecode.TIMECODE_WRAPPER,
                        children: [
                            !s &&
                                c &&
                                R &&
                                (0, m.jsx)(iY, {
                                    currentTimecodeClassName: K ? void 0 : (0, p.$)(iV().timecodeGroupCurrent, iV().important),
                                    timecodeClassName: iV().timecodeGroup,
                                    progress: k,
                                    position: null != E ? E : 0,
                                    duration: null != I ? I : 0,
                                    progressElementWidth: O,
                                    shouldHoldTimecode: !!K,
                                }),
                            (0, m.jsx)('div', { ref: w, className: (0, p.$)(iV().progressbar, o) }),
                            R && !K && (0, m.jsx)('div', { className: (0, p.$)(iV().thumb, l) }),
                            K &&
                                (0, m.jsx)(iL, {
                                    className: iV().brandedThumb,
                                    thumbData: null == K ? void 0 : K.thumb,
                                    onThumbAction: null == K ? void 0 : K.onThumbAction,
                                }),
                            (null == (i = y.payload) ? void 0 : i.modal) && (0, m.jsx)(iR, { modal: y.payload.modal }),
                            (0, m.jsx)(iN.A, {
                                'aria-valuetext': P,
                                onClick: U,
                                onBlur: U,
                                onFocus: F,
                                className: (0, p.$)(iV().slider, iV().important, n),
                                disabled: r || b.isAdvertShown,
                                'aria-label': T({ id: 'player-actions.timecode-control' }),
                                showThumbVariant: d,
                                onChange: G,
                                maxValue: I ? Math.round(I) : 0,
                                mode: 'deferred',
                                value: Math.round(null != E ? E : 0),
                                trackSize: 's',
                                thumbSize: 's',
                                'data-test-id': C.Kq.changeTimecode.TIMECODE_SLIDER,
                            }),
                            (0, m.jsx)('div', { className: iV().backgroundProgressbar }),
                        ],
                    });
                });
            var iZ = a(28447),
                iX = a(7010),
                iQ = a(27663),
                iJ = a(84925),
                i0 = a(27559),
                i1 = a(3912),
                i2 = a(41544),
                i4 = a(3407),
                i9 = a(2204),
                i3 = a(6323),
                i8 = a(64720),
                i5 = a(18197),
                i6 = a(33180);
            let i7 = 'player-region';
            var ne = a(12799),
                nt = a(86966),
                na = a.n(nt);
            let ni = (e) => {
                    let { className: t, ariaLabel: a, onClick: i, forwardRef: n } = e;
                    return (0, m.jsx)('div', {
                        ref: n,
                        className: (0, p.$)(na().root, t),
                        children: (0, m.jsx)(T.$, {
                            className: na().button,
                            radius: 'round',
                            size: 's',
                            color: 'secondary',
                            withRipple: !1,
                            'aria-label': a,
                            icon: (0, m.jsx)(S.I, { variant: 'fullscreen', size: 'xs' }),
                            onClick: i,
                            'data-test-id': C.e8.player.FULLSCREEN_PLAYER_BUTTON,
                        }),
                    });
                },
                nn = (0, x.forwardRef)((e, t) => (0, m.jsx)(ni, { forwardRef: t, ...e }));
            var pulseSyncPlayerTooltip = a(60924),
                nr = a(28118),
                ns = a(24237),
                no = a.n(ns);
            const pulseSyncPlayerReact = x,
                pulseSyncPlayerJsx = m,
                pulseSyncPlayerIntl = g,
                pulseSyncPlayerButton = T,
                pulseSyncNormalizeStationText = (e) =>
                    String(e ?? '')
                        .trim()
                        .toLowerCase()
                        .replace(/\s+/g, ' '),
                pulseSyncStationNamesMatch = (e, t) => {
                    const a = pulseSyncNormalizeStationText(e),
                        i = pulseSyncNormalizeStationText(t);
                    return !!a && !!i && (a.includes(i) || i.includes(a));
                },
                pulseSyncFindLocalStation = (e, t, a) => {
                    const i = pulseSyncNormalizeStationText(e?.configuration?.glagolDeviceId);
                    if (i) {
                        const e = t.find((e) => !a.has(e) && pulseSyncNormalizeStationText(e?.deviceId) === i);
                        if (e) return e;
                    }
                    const n = pulseSyncNormalizeStationText(e?.configuration?.platform);
                    return n
                        ? (t.find(
                              (t) => !a.has(t) && pulseSyncNormalizeStationText(t?.platform) === n && pulseSyncStationNamesMatch(e?.name, t?.name ?? t?.instanceName),
                          ) ?? null)
                        : null;
                },
                pulseSyncBuildCastDeviceRows = (e = [], t = []) => {
                    const a = new Set();
                    return e.map((e) => {
                        const i = pulseSyncFindLocalStation(e, t, a);
                        return (
                            i && a.add(i),
                            {
                                accountSpeaker: e,
                                localSpeaker: i ?? void 0,
                                canUseLocal: !!i,
                            }
                        );
                    });
                },
                pulseSyncGetCastDevicePlatform = (e) =>
                    pulseSyncNormalizeStationText(
                        e?.accountSpeaker?.configuration?.platform ??
                            e?.accountSpeaker?.configuration?.quasarInfo?.platform ??
                            e?.localSpeaker?.platform ??
                            e?.localSpeaker?.txt?.platform,
                    ),
                pulseSyncGetCastDeviceIconKind = (e) => {
                    if (e?.isThisDevice) return 'computer';
                    const t = pulseSyncGetCastDevicePlatform(e);
                    const a = {
                        yandexstation: 'station',
                        yandexstation_2: 'station',
                        yandexmidi: 'station2',
                        yandexmini: 'mini',
                        yandexmini_2: 'mini',
                        yandexmicro: 'mini',
                        yandexmodule: 'module',
                        yandexmodule_2: 'module',
                        yandex_tv: 'tv',
                        saturn: 'chiron',
                        cucumber: 'cucumber',
                        bergamot: 'mini',
                        plum: 'mini',
                        orion: 'station',
                        monet: 'tv',
                        magritte: 'tv',
                        goya: 'tv',
                    };
                    if (a[t]) return a[t];
                    if (/computer|desktop|windows|win32|darwin|mac|linux|electron/.test(t)) return 'computer';
                    if (/chiron/.test(t)) return 'chiron';
                    if (/cucumber/.test(t)) return 'cucumber';
                    if (/mini/.test(t)) return 'mini';
                    if (/station[_-]?2|station2|yandexstation[_-]?2|yandex_station[_-]?2/.test(t)) return 'station2';
                    return 'station';
                },
                pulseSyncCastDeviceIconPath = {
                    computer:
                        'm14.6,5c1.1024,0 2.01,-0.0016 2.7373,0.0772 0.7461,0.0808 1.4215,0.2556 2.0147,0.6865 0.3394,0.2466 0.6381,0.5453 0.8847,0.8848 0.431,0.5931 0.6057,1.2686 0.6866,2.0146 0.0787,0.7273 0.0771,1.6349 0.0771,2.7373v0.1992c0,1.1024 0.0016,2.01 -0.0771,2.7373 -0.0809,0.7461 -0.2556,1.4215 -0.6866,2.0147 -0.1727,0.2377 -0.3718,0.4545 -0.5918,0.6484h3.3555v2h-22v-2h3.3555c-0.2199,-0.1939 -0.419,-0.4107 -0.5918,-0.6484 -0.4309,-0.5932 -0.6057,-1.2686 -0.6865,-2.0147 -0.0787,-0.7273 -0.0772,-1.6349 -0.0772,-2.7373v-0.1992c0,-1.1024 -0.0016,-2.01 0.0772,-2.7373 0.0808,-0.7461 0.2556,-1.4215 0.6865,-2.0146 0.2466,-0.3394 0.5453,-0.6381 0.8848,-0.8848 0.5932,-0.4309 1.2686,-0.6057 2.0146,-0.6865 0.7273,-0.0787 1.6349,-0.0772 2.7373,-0.0772h5.1992zM9.4008,7c-1.1472,0 -1.9278,0.001 -2.5225,0.0654 -0.5758,0.0624 -0.8583,0.1744 -1.0537,0.3164 -0.1697,0.1233 -0.3191,0.2727 -0.4424,0.4424 -0.142,0.1954 -0.254,0.4779 -0.3164,1.0537 -0.0644,0.5946 -0.0654,1.3754 -0.0654,2.5225v0.1992c0,1.1471 0.001,1.9278 0.0654,2.5225 0.0624,0.5758 0.1744,0.8583 0.3164,1.0537 0.1233,0.1697 0.2727,0.3191 0.4424,0.4424 0.1954,0.1419 0.4779,0.254 1.0537,0.3164 0.5947,0.0644 1.3753,0.0654 2.5225,0.0654h5.1992c1.1472,0 1.9278,-0.001 2.5225,-0.0654 0.5758,-0.0624 0.8583,-0.1745 1.0537,-0.3164 0.1697,-0.1234 0.3191,-0.2727 0.4424,-0.4424 0.1419,-0.1954 0.254,-0.4779 0.3164,-1.0537 0.0644,-0.5947 0.0654,-1.3754 0.0654,-2.5225v-0.1992c0,-1.1471 -0.001,-1.9278 -0.0654,-2.5225 -0.0624,-0.5758 -0.1745,-0.8583 -0.3164,-1.0537 -0.1233,-0.1697 -0.2727,-0.3191 -0.4424,-0.4424 -0.1954,-0.142 -0.4779,-0.254 -1.0537,-0.3164 -0.5947,-0.0644 -1.3753,-0.0654 -2.5225,-0.0654h-5.1992z',
                    module: 'M15.16 3.75L1 11.3l7.84 4.25L23 8l-7.84-4.25zM1 12.95v3.3l7.84 4.25L23 12.95v-3.3L8.84 17.2l-2.6-1.41V17L3.44 15.5v-1.22L1 12.95z',
                    tv: 'M19.6 6.4v7.2H4.4V6.4h15.2zM2 4h2.4h15.2H22v2.4v7.2V16h-2.4H4.4H2v-2.4v-7.2V4zm5 16.2h10v-2.4H7v2.4z',
                    hub: 'M12 5.13l6.6 4.4v9.07h-4.35v-6.1h-4.5v6.1H5.4V9.53l6.6-4.4zM9.75 21H5.4H3v-2.4V8.25l9-6l9 6V18.6V21h-2.4h-4.35h-4.5z',
                    station:
                        'm16.454,3.4996c0,1.23 -1.9942,2.2271 -4.4542,2.2271 -2.46,0 -4.4542,-0.9971 -4.4542,-2.2271s1.9942,-2.2271 4.4542,-2.2271c2.46,0 4.4542,0.9971 4.4542,2.2271zM18.7659,18.3616c0.2514,-0.4236 0.2331,-1.0072 0.2331,-2.236v-10.066c0,-0.1388 -0.0361,-0.2752 -0.1048,-0.3958s-0.1675,-0.2213 -0.2868,-0.2921c-0.1194,-0.0708 -0.2551,-0.1094 -0.3939,-0.112 -0.1387,-0.0025 -0.2758,0.0311 -0.3976,0.0975l-0.0704,0.0384c-3.0073,1.6403 -4.3768,2.4605 -5.7462,2.4605 -1.3695,0 -2.739,-0.8202 -5.7463,-2.4605l-0.0704,-0.0384c-0.1218,-0.0665 -0.2589,-0.1001 -0.3976,-0.0975 -0.1388,0.0025 -0.2745,0.0411 -0.3938,0.112 -0.1193,0.0708 -0.2182,0.1715 -0.2869,0.2921 -0.0687,0.1206 -0.1048,0.257 -0.1048,0.3958v10.066c0,1.229 -0.0183,1.8126 0.2331,2.2361 0.2514,0.4235 0.7725,0.6869 1.8514,1.2754 2.5725,1.4032 3.7439,2.1048 4.9153,2.1047 1.1712,0 2.3425,-0.7015 4.9142,-2.1043 1.0795,-0.5888 1.6008,-0.8523 1.8523,-1.2759z',
                    station2:
                        'm8.4897,3.8078c-0.4164,0.1864 -0.7401,0.3313 -0.9898,0.4862 -0.5817,0.3609 -0.0566,0.6464 0.2313,0.7626 3.6409,1.4686 5.111,2.0123 6.4594,1.7962 0.7603,-0.1218 1.4819,-0.4853 2.5322,-1.0608 0.6573,-0.3602 0.9884,-0.5985 0.1269,-1.0421 -0.312,-0.1607 -0.7566,-0.3262 -1.3895,-0.5574 -4.3376,-1.5844 -4.807,-1.3701 -6.4444,-0.6224 -0.1744,0.0796 -0.3623,0.1644 -0.5261,0.2377h-0zM16.7201,20.8098c1.8489,-0.8276 2.2799,-1.0205 2.2799,-3.2928v-10.022c0,-0.1382 -0.0473,-0.274 -0.1373,-0.3941s-0.2195,-0.2203 -0.3759,-0.2908c-0.1564,-0.0705 -0.3343,-0.1089 -0.5161,-0.1115 -0.1819,-0.0025 -0.3614,0.031 -0.5211,0.0971l-0.0923,0.0382c-1.502,0.842 -2.3794,1.3667 -3.3171,1.5181 -1.4591,0.2356 -3.0642,-0.433 -7.3956,-2.2173l-0.0923,-0.0382c-0.1597,-0.0662 -0.3392,-0.0996 -0.5211,-0.0971 -0.1819,0.0025 -0.3597,0.0409 -0.5161,0.1115 -0.1564,0.0705 -0.2859,0.1708 -0.3759,0.2909 -0.09,0.1201 -0.1373,0.2559 -0.1373,0.3941v10.022c0,0.1362 -0.0005,0.2648 -0.001,0.3863 -0.0085,2.0629 -0.0087,2.1084 2.7328,3.1098 5.5921,2.0427 6.1973,1.7663 8.3082,0.8024 0.0732,-0.0334 0.1483,-0.0677 0.2254,-0.1027 0.1597,-0.0725 0.3105,-0.14 0.4529,-0.2038z',
                    chiron: 'm8.4,3h-0.0557c-1.0775,-0 -1.9665,-0 -2.6817,0.0774 -0.7461,0.0808 -1.4206,0.2555 -2.0138,0.6865 -0.3396,0.2467 -0.6382,0.5454 -0.8849,0.8849 -0.431,0.5932 -0.6057,1.2677 -0.6865,2.0138 -0.0775,0.7151 -0.0775,1.6041 -0.0774,2.6817v1.3114c-0,1.0775 -0,1.9665 0.0774,2.6817 0.0808,0.7461 0.2555,1.4206 0.6865,2.0137 0.2467,0.3396 0.5454,0.6383 0.8849,0.885 0.4135,0.3004 0.8665,0.4763 1.3557,0.5826 0.0183,1.4667 0.1098,2.3134 0.5684,2.9447 0.185,0.2546 0.409,0.4786 0.6637,0.6637 0.7886,0.5729 1.9135,0.5729 4.1634,0.5729h3.2c2.2498,0 3.3748,0 4.1634,-0.5729 0.2546,-0.1851 0.4786,-0.4091 0.6637,-0.6637 0.4586,-0.6313 0.5501,-1.478 0.5683,-2.9447 0.4893,-0.1063 0.9423,-0.2822 1.3557,-0.5826 0.3396,-0.2467 0.6383,-0.5454 0.885,-0.885 0.4309,-0.5931 0.6056,-1.2676 0.6865,-2.0137 0.0774,-0.7152 0.0774,-1.6042 0.0774,-2.6817v-1.3114c0,-1.0775 0,-1.9665 -0.0774,-2.6817 -0.0809,-0.7461 -0.2556,-1.4206 -0.6865,-2.0138 -0.2467,-0.3396 -0.5454,-0.6382 -0.885,-0.8849 -0.5931,-0.431 -1.2676,-0.6057 -2.0137,-0.6865 -0.7152,-0.0775 -1.6042,-0.0775 -2.6817,-0.0774h-7.2557zM15.665,15c1.1118,-0.0001 1.8736,-0.0026 2.4569,-0.0658 0.576,-0.0624 0.8583,-0.1742 1.0537,-0.3162 0.1698,-0.1233 0.3191,-0.2726 0.4424,-0.4424 0.142,-0.1954 0.2538,-0.4777 0.3162,-1.0537 0.0644,-0.5946 0.0658,-1.3747 0.0658,-2.5219v-1.2c0,-1.1472 -0.0014,-1.9273 -0.0658,-2.5219 -0.0624,-0.576 -0.1742,-0.8582 -0.3162,-1.0536 -0.1233,-0.1698 -0.2726,-0.3191 -0.4424,-0.4425 -0.1954,-0.142 -0.4777,-0.2538 -1.0537,-0.3162 -0.5946,-0.0644 -1.3747,-0.0658 -2.5219,-0.0658h-7.2c-1.1472,0 -1.9273,0.0014 -2.5219,0.0658 -0.576,0.0624 -0.8582,0.1742 -1.0536,0.3162 -0.1698,0.1234 -0.3191,0.2727 -0.4425,0.4425 -0.142,0.1954 -0.2538,0.4777 -0.3162,1.0536 -0.0644,0.5947 -0.0658,1.3747 -0.0658,2.5219v1.2c0,1.1472 0.0014,1.9273 0.0658,2.5219 0.0624,0.576 0.1742,0.8583 0.3162,1.0537 0.1234,0.1698 0.2727,0.3191 0.4425,0.4424 0.1954,0.142 0.4777,0.2538 1.0536,0.3162 0.5834,0.0632 1.3452,0.0657 2.457,0.0658h7.33z',
                    cucumber:
                        'm8.2522,6.6265 l2.4062,1.2031c0.8445,0.4223 1.8387,0.4223 2.6832,0l2.4062,-1.2031c0.5159,-0.258 0.5159,-0.9942 0,-1.2522l-2.4062,-1.2031c-0.8445,-0.4223 -1.8387,-0.4223 -2.6832,0l-2.4062,1.2031c-0.5159,0.258 -0.5159,0.9942 0,1.2522zM12,10.2496c-1.4143,0 -3.3087,-0.7801 -5.6832,-2.3403 -0.1386,-0.0911 -0.3009,-0.1396 -0.4668,-0.1396 -0.4694,0 -0.85,0.3806 -0.85,0.85v6.6321c0,0.8018 0.3845,1.5549 1.0339,2.025 2.5073,1.8153 4.4961,2.7229 5.9661,2.7229s3.4587,-0.9076 5.9661,-2.7229c0.6494,-0.4701 1.0339,-1.2232 1.0339,-2.025v-6.632c0,-0.1659 -0.0485,-0.3282 -0.1396,-0.4668 -0.2578,-0.3923 -0.7849,-0.5014 -1.1772,-0.2436 -2.3745,1.5602 -4.2689,2.3403 -5.6832,2.3403z',
                    mini: 'm17.939,8.0749c0,1.64 -2.659,2.9695 -5.939,2.9695 -3.2799,0 -5.9389,-1.3295 -5.9389,-2.9695s2.6589,-2.9695 5.9389,-2.9695c3.28,0 5.939,1.3295 5.939,2.9695zM19.8807,11.0635c0.0781,0.1264 0.1194,0.272 0.1194,0.4206v4.3451c0,2.2093 -3.5817,4 -7.9999,4 -4.4183,0 -8.0001,-1.7908 -8.0001,-4v-4.3451c-0.0002,-0.1486 0.0411,-0.2944 0.1191,-0.4208 0.0781,-0.1265 0.1898,-0.2287 0.3227,-0.2952s0.2817,-0.0946 0.4298,-0.0813c0.148,0.0134 0.2894,0.0678 0.4082,0.1571 2.005,1.2692 4.3492,1.8975 6.7203,1.8011 2.371,0.0964 4.7151,-0.5319 6.7201,-1.8011 0.1189,-0.0891 0.2602,-0.1433 0.4081,-0.1566 0.148,-0.0133 0.2967,0.0148 0.4296,0.0813 0.1329,0.0664 0.2446,0.1686 0.3227,0.2949z',
                },
                pulseSyncRenderCastDeviceIcon = (e, t = '') =>
                    (0, pulseSyncPlayerJsx.jsx)('span', {
                        className: 'PulseSync_castPopoverItemIcon'.concat(t ? ' '.concat(t) : ''),
                        'aria-hidden': !0,
                        children: (0, pulseSyncPlayerJsx.jsx)('svg', {
                            width: '32',
                            height: '32',
                            viewBox: '0 0 24 24',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: (0, pulseSyncPlayerJsx.jsx)('path', {
                                d: pulseSyncCastDeviceIconPath[pulseSyncGetCastDeviceIconKind(e)] ?? pulseSyncCastDeviceIconPath.station,
                                fill: 'currentColor',
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                            }),
                        }),
                    }),
                pulseSyncGetActiveCastDeviceRow = (e, t) => (t ? e.find((e) => !e.isThisDevice && e.accountSpeaker?.id === t) : null),
                pulseSyncCastConnectDelay = (e) => new Promise((t) => setTimeout(t, e)),
                pulseSyncSelectYandexStationSpeaker = async (e) => {
                    let t = null;
                    for (let a = 0; a <= 3; a += 1) {
                        try {
                            if (
                                ((t = window.pulseSyncYandexStationCast?.activate
                                    ? await window.pulseSyncYandexStationCast.activate(e)
                                    : await window.desktopEvents?.invoke?.('YANDEX_STATION_SELECT_SPEAKER', e)),
                                t?.ok)
                            )
                                return t;
                        } catch (e) {
                            t = {
                                ok: !1,
                                error: e,
                            };
                        }
                        a < 3 && (await pulseSyncCastConnectDelay(600));
                    }
                    return (
                        t ?? {
                            ok: !1,
                        }
                    );
                },
                pulseSyncIsYandexStationCastEnabled = () => {
                    try {
                        return window.__pulseSyncYandexStationCastEnabled ?? window.ENABLE_YANDEX_STATION_CAST?.() ?? !0;
                    } catch (e) {
                        return !0;
                    }
                },
                pulseSyncApplyYandexStationState = (e, t) => {
                    const a = Array.isArray(e?.accountSpeakers) ? e.accountSpeakers : [],
                        i = Array.isArray(e?.localSpeakers) ? e.localSpeakers : [];
                    t.setActiveSpeakerId(e?.activeSpeaker?.accountSpeaker?.id ?? window.pulseSyncYandexStationCast?.activeSpeakerId ?? null);
                    t.setDeviceRows([
                        {
                            isThisDevice: !0,
                        },
                        ...pulseSyncBuildCastDeviceRows(a, i),
                    ]);
                    t.setDevicesLoaded(Boolean(e?.firstFlowCompleted));
                    t.setDevicesLoading(Boolean(e?.refreshing));
                },
                pulseSyncGetCastPopoverShift = (e) => {
                    const t = e?.getBoundingClientRect?.();
                    if (!t) return 0;
                    const a = 320,
                        i = 12,
                        n = window.innerWidth || document.documentElement?.clientWidth || a,
                        r = t.left + t.width / 2,
                        l = r - a / 2,
                        s = r + a / 2;
                    if (l < i) return i - l;
                    if (s > n - i) return n - i - s;
                    return 0;
                },
                pulseSyncYandexStationCastControl = (0, v.PA)((e) => {
                    let { buttonClassName: t, disabled: a } = e,
                        { formatMessage: i } = (0, pulseSyncPlayerIntl.A)(),
                        [r, l] = (0, pulseSyncPlayerReact.useState)(!1),
                        [s, d] = (0, pulseSyncPlayerReact.useState)(!1),
                        [_, m] = (0, pulseSyncPlayerReact.useState)(0),
                        [v, y] = (0, pulseSyncPlayerReact.useState)([]),
                        [g, b] = (0, pulseSyncPlayerReact.useState)(window.pulseSyncYandexStationCast?.activeSpeakerId ?? null),
                        [x, A] = (0, pulseSyncPlayerReact.useState)(null),
                        [f, C] = (0, pulseSyncPlayerReact.useState)(null),
                        [k, P] = (0, pulseSyncPlayerReact.useState)(!1),
                        [j, S] = (0, pulseSyncPlayerReact.useState)(!1),
                        [castHoveredDeviceKey, setCastHoveredDeviceKey] = (0, pulseSyncPlayerReact.useState)(null),
                        [castEnabled, setCastEnabled] = (0, pulseSyncPlayerReact.useState)(pulseSyncIsYandexStationCastEnabled()),
                        I = (0, pulseSyncPlayerReact.useRef)(null),
                        w = (0, pulseSyncPlayerReact.useRef)(null),
                        L = (0, pulseSyncPlayerReact.useCallback)(async () => {
                            if (!castEnabled) {
                                y([]);
                                S(!1);
                                P(!1);
                                return;
                            }
                            try {
                                P(!0);
                                const e = await (window.desktopEvents?.invoke?.('YANDEX_STATION_STATE') ?? Promise.resolve(null));
                                pulseSyncApplyYandexStationState(e, {
                                    setActiveSpeakerId: b,
                                    setDeviceRows: y,
                                    setDevicesLoaded: S,
                                    setDevicesLoading: P,
                                });
                            } catch (e) {
                                (console.warn('Failed to load Yandex Station cast devices', e), y([]), S(!1), P(!1));
                            }
                        }, [castEnabled]),
                        M = (0, pulseSyncPlayerReact.useCallback)(() => {
                            l(!1);
                            clearTimeout(w.current);
                            w.current = setTimeout(() => {
                                d(!1);
                                setCastHoveredDeviceKey(null);
                            }, 160);
                        }, []),
                        B = (0, pulseSyncPlayerReact.useCallback)(() => {
                            m(pulseSyncGetCastPopoverShift(I.current));
                        }, []),
                        O = (0, pulseSyncPlayerReact.useCallback)(() => {
                            clearTimeout(w.current);
                            d(!0);
                            requestAnimationFrame(() => {
                                B();
                                l(!0);
                            });
                        }, [B]),
                        V = (0, pulseSyncPlayerReact.useCallback)(() => {
                            r ? M() : O();
                        }, [r, M, O]);
                    (0, pulseSyncPlayerReact.useEffect)(() => {
                        void L();
                    }, [L]);
                    (0, pulseSyncPlayerReact.useEffect)(() => {
                        const e = (e, t) => {
                            pulseSyncApplyYandexStationState(t, {
                                setActiveSpeakerId: b,
                                setDeviceRows: y,
                                setDevicesLoaded: S,
                                setDevicesLoading: P,
                            });
                        };
                        return window.desktopEvents?.on?.('YANDEX_STATION_STATE', e);
                    }, []);
                    (0, pulseSyncPlayerReact.useEffect)(() => {
                        const e = (e) => {
                            b(e.detail?.activeSpeakerId ?? null);
                        };
                        return (
                            window.addEventListener('pulse-sync-yandex-station-cast-change', e),
                            () => {
                                window.removeEventListener('pulse-sync-yandex-station-cast-change', e);
                            }
                        );
                    }, []);
                    (0, pulseSyncPlayerReact.useEffect)(() => {
                        const e = (e) => {
                            const t = e.detail?.enabled ?? pulseSyncIsYandexStationCastEnabled();
                            setCastEnabled(t);
                            t ? (S(!1), void L()) : (M(), y([]), b(null), S(!1), P(!1));
                        };
                        return (
                            window.addEventListener('pulse-sync-yandex-station-cast-setting-change', e),
                            () => {
                                window.removeEventListener('pulse-sync-yandex-station-cast-setting-change', e);
                            }
                        );
                    }, [M, L]);
                    (0, pulseSyncPlayerReact.useEffect)(() => () => clearTimeout(w.current), []);
                    (0, pulseSyncPlayerReact.useEffect)(() => {
                        if (!s) return;
                        const e = (e) => {
                            I.current?.contains?.(e.target) || M();
                        };
                        return (
                            document.addEventListener('pointerdown', e, !0),
                            () => {
                                document.removeEventListener('pointerdown', e, !0);
                            }
                        );
                    }, [s, M]);
                    (0, pulseSyncPlayerReact.useEffect)(() => {
                        if (!s) return;
                        const e = () => B();
                        return (
                            B(),
                            window.addEventListener('resize', e),
                            () => {
                                window.removeEventListener('resize', e);
                            }
                        );
                    }, [s, B]);
                    return a || !castEnabled
                        ? null
                        : (0, pulseSyncPlayerJsx.jsxs)('div', {
                              ref: I,
                              style: {
                                  position: 'relative',
                                  display: 'flex',
                                  alignItems: 'center',
                              },
                              children: [
                                  (0, pulseSyncPlayerJsx.jsx)(pulseSyncPlayerButton.$, {
                                      className: t,
                                      radius: 'round',
                                      size: 'xxxs',
                                      variant: 'text',
                                      withRipple: !1,
                                      'aria-label': i({
                                          id: 'player-actions.cast',
                                      }),
                                      icon: g
                                          ? pulseSyncRenderCastDeviceIcon(pulseSyncGetActiveCastDeviceRow(v, g), 'PulseSync_castPlayerButtonIcon')
                                          : (0, pulseSyncPlayerJsx.jsx)(S.I, {
                                                variant: 'cast',
                                                size: 'xs',
                                            }),
                                      onClick: V,
                                      style: g
                                          ? {
                                                color: 'var(--ym-controls-color-primary-text-hovered)',
                                            }
                                          : void 0,
                                  }),
                                  s &&
                                      (0, pulseSyncPlayerJsx.jsx)('div', {
                                          className: 'PulseSync_castPopover',
                                          style: {
                                              opacity: r ? 1 : 0,
                                              transform: 'translateX('.concat(_, 'px) ').concat(r ? 'translateY(0)' : 'translateY(10px)'),
                                              pointerEvents: r ? 'auto' : 'none',
                                          },
                                          children: !j
                                              ? (0, pulseSyncPlayerJsx.jsx)('div', {
                                                    className: 'PulseSync_castPopoverStatus PulseSync_castPopoverStatus_shimmer',
                                                    children: 'Поиск устройств...',
                                                })
                                              : (0, pulseSyncPlayerJsx.jsxs)(
                                                    'div',
                                                    {
                                                        className: 'PulseSync_castPopoverContent',
                                                        children: [
                                                            (0, pulseSyncPlayerJsx.jsx)(
                                                                'div',
                                                                {
                                                                    className: 'PulseSync_castPopoverStatus PulseSync_castPopoverStatus_refreshing'.concat(
                                                                        k ? ' PulseSync_castPopoverStatus_visible' : '',
                                                                    ),
                                                                    children: 'Обновляем список устройств...',
                                                                },
                                                                'cast-refreshing',
                                                            ),
                                                            v.length
                                                                ? v.map((e) => {
                                                                      const t = !e.isThisDevice && !e.canUseLocal,
                                                                          a = e.isThisDevice ? void 0 : (e.accountSpeaker?.roomName ?? e.accountSpeaker?.householdName),
                                                                          r = e.accountSpeaker?.id,
                                                                          isConnecting = !e.isThisDevice && x === r && g !== r,
                                                                          hasConnectionError = !e.isThisDevice && f === r && g !== r,
                                                                          isDisabled = t || !!x,
                                                                          isConnected = (e.isThisDevice && !g) || (!e.isThisDevice && g === r),
                                                                          i = e.isThisDevice
                                                                              ? g
                                                                                  ? 'Отключить колонку'
                                                                                  : 'Сейчас выбрано'
                                                                              : isConnecting
                                                                                ? 'Подключение...'
                                                                                : hasConnectionError
                                                                                  ? 'Ошибка подключения'
                                                                                  : g === r
                                                                                    ? 'Подключено'
                                                                                    : e.canUseLocal
                                                                                      ? 'В сети'
                                                                                      : 'Вне локальной сети',
                                                                          n = e.isThisDevice
                                                                              ? 'pulse-sync-this-device'
                                                                              : (e.accountSpeaker?.id ?? e.accountSpeaker?.name ?? e.localSpeaker?.deviceId);
                                                                      return (0, pulseSyncPlayerJsx.jsxs)('button', {
                                                                          key: n,
                                                                          type: 'button',
                                                                          className: 'PulseSync_castPopoverItem'.concat(
                                                                              isConnected || (!isDisabled && castHoveredDeviceKey === n)
                                                                                  ? ' PulseSync_castPopoverItem_active'
                                                                                  : '',
                                                                          ),
                                                                          disabled: isDisabled,
                                                                          onClick: isDisabled
                                                                              ? void 0
                                                                              : async () => {
                                                                                    if (e.isThisDevice) {
                                                                                        window.pulseSyncYandexStationCast?.clear
                                                                                            ? await window.pulseSyncYandexStationCast.clear()
                                                                                            : await window.desktopEvents?.invoke?.('YANDEX_STATION_CLEAR_SPEAKER');
                                                                                        b(null);
                                                                                        A(null);
                                                                                        C(null);
                                                                                        M();
                                                                                        return;
                                                                                    }
                                                                                    const t = e.accountSpeaker?.id;
                                                                                    if (!t) return;
                                                                                    A(t);
                                                                                    C(null);
                                                                                    try {
                                                                                        const e = await pulseSyncSelectYandexStationSpeaker(t);
                                                                                        e?.ok
                                                                                            ? (b(t), C(null), M())
                                                                                            : (C(t), console.warn('Failed to select Yandex Station cast device', e));
                                                                                    } catch (e) {
                                                                                        C(t);
                                                                                        console.warn('Failed to select Yandex Station cast device', e);
                                                                                    } finally {
                                                                                        A(null);
                                                                                    }
                                                                                },
                                                                          onMouseEnter: isDisabled ? void 0 : () => setCastHoveredDeviceKey(n),
                                                                          onMouseLeave: isDisabled ? void 0 : () => setCastHoveredDeviceKey(null),
                                                                          children: [
                                                                              pulseSyncRenderCastDeviceIcon(e),
                                                                              (0, pulseSyncPlayerJsx.jsx)('div', {
                                                                                  style: {
                                                                                      display: 'flex',
                                                                                      alignItems: 'flex-start',
                                                                                      flexDirection: 'column',
                                                                                      minWidth: 0,
                                                                                      flex: '1 1 auto',
                                                                                  },
                                                                                  children: [
                                                                                      (0, pulseSyncPlayerJsx.jsx)('span', {
                                                                                          style: {
                                                                                              display: 'flex',
                                                                                              gap: '5px',
                                                                                              alignItems: 'baseline',
                                                                                              minWidth: 0,
                                                                                              maxWidth: '100%',
                                                                                          },
                                                                                          children: [
                                                                                              (0, pulseSyncPlayerJsx.jsx)('span', {
                                                                                                  className: 'PulseSync_castPopoverItemTitle',
                                                                                                  children: e.isThisDevice
                                                                                                      ? 'Это устройство'
                                                                                                      : (e.accountSpeaker?.name ??
                                                                                                        e.accountSpeaker?.id ??
                                                                                                        'Yandex Station'),
                                                                                              }),
                                                                                              a &&
                                                                                                  (0, pulseSyncPlayerJsx.jsx)('span', {
                                                                                                      className:
                                                                                                          'PulseSync_castPopoverItemMeta PulseSync_castPopoverItemRoom',
                                                                                                      children: (0, pulseSyncPlayerJsx.jsx)('span', {
                                                                                                          className: 'PulseSync_castPopoverItemRoomText',
                                                                                                          children: a,
                                                                                                      }),
                                                                                                  }),
                                                                                          ],
                                                                                      }),
                                                                                      (0, pulseSyncPlayerJsx.jsx)('span', {
                                                                                          className: 'PulseSync_castPopoverItemMeta'
                                                                                              .concat(isConnecting ? ' PulseSync_castPopoverItemMeta_shimmer' : '')
                                                                                              .concat(hasConnectionError ? ' PulseSync_castPopoverItemMeta_error' : ''),
                                                                                          children: i,
                                                                                      }),
                                                                                  ],
                                                                              }),
                                                                              isConnected &&
                                                                                  (0, pulseSyncPlayerJsx.jsx)('span', {
                                                                                      children: (0, pulseSyncPlayerJsx.jsx)('svg', {
                                                                                          width: '16',
                                                                                          height: '16',
                                                                                          fill: 'currentColor',
                                                                                          xmlns: 'http://www.w3.org/2000/svg',
                                                                                          children: (0, pulseSyncPlayerJsx.jsx)('path', {
                                                                                              d: 'M6.5 11.5l-3.5-3.5 1.4-1.4L6.5 8.7l5.1-5.1 1.4 1.4z',
                                                                                          }),
                                                                                      }),
                                                                                  }),
                                                                          ],
                                                                      });
                                                                  })
                                                                : (0, pulseSyncPlayerJsx.jsx)(
                                                                      'div',
                                                                      {
                                                                          className: 'PulseSync_castPopoverStatus',
                                                                          children: 'Устройства не найдены',
                                                                      },
                                                                      'cast-empty',
                                                                  ),
                                                        ],
                                                    },
                                                    'cast-content',
                                                ),
                                      }),
                              ],
                          });
                });
            const pulseSyncPlayerBarRefreshers = new Set();
            const pulseSyncRefreshPlayerBars = () => pulseSyncPlayerBarRefreshers.forEach((refresh) => refresh());
            let nl = (0, v.PA)((e) => {
                var t;
                const [, forcePlayerBarRerender] = (0, x.useReducer)((revision) => revision + 1, 0);
                (0, x.useEffect)(() => {
                    pulseSyncPlayerBarRefreshers.add(forcePlayerBarRerender);
                    window.forcePlayerBarRerender = pulseSyncRefreshPlayerBars;
                    return () => {
                        pulseSyncPlayerBarRefreshers.delete(forcePlayerBarRerender);
                        if (!pulseSyncPlayerBarRefreshers.size && window.forcePlayerBarRerender === pulseSyncRefreshPlayerBars) delete window.forcePlayerBarRerender;
                    };
                }, [forcePlayerBarRerender]);
                let {
                        className: a,
                        entityMeta: i,
                        isLiked: n,
                        isDisliked: r,
                        onLikeClick: s,
                        onDislikeClick: o,
                        renderSonataControls: l,
                        withLike: d,
                        withDislike: c,
                        withExtraControls: u,
                        withFullscreen: _,
                        withContextMenu: v = !0,
                        withTrackAndArtistLinks: h = !0,
                        sonataPlaybackId: b,
                        sonataVolume: f,
                    } = e,
                    {
                        user: E,
                        sonataState: j,
                        fullscreenPlayer: P,
                        settings: { isMobileLandscapeHeight: k },
                        advert: w,
                        track: O,
                        experiments: D,
                    } = (0, L.g)(),
                    [R, M] = (0, x.useState)(!1),
                    [F, U] = (0, x.useState)(!1),
                    [downloadProgress, setDownloadProgress] = (0, x.useState)(0),
                    trackDownloadName = (0, x.useMemo)(() => {
                        const artists = (i?.artists ?? [])
                            .map((artist) => artist.name)
                            .filter(Boolean)
                            .join(', ');
                        return [artists, i?.title].filter(Boolean).join(' — ');
                    }, [i]),
                    onDownloadClick = (0, x.useCallback)(() => {
                        i?.id && window.desktopEvents?.send?.('DOWNLOAD_TRACK', i.id, trackDownloadName);
                    }, [i, trackDownloadName]),
                    { formatMessage: z } = (0, g.A)(),
                    W = _ && !j.isGenerativeContext,
                    V = j.canSpeed && (null == i ? void 0 : i.isNonMusic),
                    H = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (t = i.mainAlbum) ? void 0 : t.isPodcast),
                    G = null == i ? void 0 : i.isTrackAudiobook,
                    $ = (0, iQ.d)(),
                    q = (0, ne.K)(i),
                    Z = (0, N.c)(() => {
                        O.open({ trackId: null == i ? void 0 : i.id, albumId: null == i ? void 0 : i.albumId });
                    }),
                    X = (0, N.c)((e) => {
                        e.stopPropagation();
                    }),
                    Q = (0, N.c)(async (e) => {
                        await $(j, e, b);
                    }),
                    J = (0, N.c)((e) => {
                        let t = e.target,
                            a = t instanceof Element && ['DIV', 'SECTION', 'SPAN'].includes(t.tagName);
                        i && W && a && !w.isAdvertShown && P.showFullscreenPlayerModal();
                    }),
                    ee = (0, N.c)((e) => {
                        if (!j.isGenerativeContext && i) {
                            if (((0, y.P)(e, no().ripple), 2 === e.detail)) {
                                (O.close(), J(e));
                                return;
                            }
                            _ && 1 === e.detail && (null == i ? void 0 : i.hasTrackLink) && !P.modal.isOpened && Z();
                        }
                    }),
                    et = (0, x.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e,
                                a = ''.concat(z({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(z({ id: 'warning-messages.can-break-accessibility' })),
                                n = t ? void 0 : P.showSyncLyrics;
                            return (0, m.jsx)(T.$, {
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled: !(null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature) || k,
                                'aria-hidden': !(null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature),
                                withRipple: !1,
                                'aria-label': a,
                                icon: (0, m.jsx)(S.I, { variant: 'syncLyrics', size: 'xs' }),
                                onClick: n,
                                'data-test-id': C.e8.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON,
                            });
                        },
                        [z, P.showSyncLyrics, null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature, k],
                    ),
                    ea = (0, x.useMemo)(
                        () =>
                            (null == i ? void 0 : i.isNonMusic) || w.isAdvertShown
                                ? null
                                : E.isAuthorized && !E.hasPlus
                                  ? (0, m.jsx)(eZ.S, { placement: 'top', textVariant: 'sync-lyrics', renderChildren: et })
                                  : (0, m.jsx)(i5.Z, { isEnabled: !E.isAuthorized, placement: 'top', textVariant: 'sync-lyrics', renderChildren: et }),
                        [null == i ? void 0 : i.isNonMusic, w.isAdvertShown, E.isAuthorized, et, E.hasPlus],
                    ),
                    ei = (0, x.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e,
                                a = t ? void 0 : P.showPlayQueue;
                            return (0, m.jsx)(T.$, {
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled: !i,
                                withRipple: !1,
                                'aria-label': z({ id: 'play-queue.title' }),
                                icon: (0, m.jsx)(S.I, { variant: 'playQueue', size: 'xs' }),
                                onClick: a,
                                'data-test-id': C.e8.player.PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON,
                            });
                        },
                        [i, P.showPlayQueue, z],
                    ),
                    en = (0, x.useMemo)(
                        () => (w.isAdvertShown ? null : (0, m.jsx)(i5.Z, { isEnabled: !E.isAuthorized, placement: 'top', textVariant: 'openQueue', renderChildren: ei })),
                        [w.isAdvertShown, E.isAuthorized, ei],
                    ),
                    er = (0, x.useMemo)(() => {
                        if (v && i && !j.isGenerativeContext && !w.isAdvertShown)
                            return (0, m.jsx)('div', {
                                onDoubleClick: X,
                                children: (0, m.jsx)(i4._, {
                                    track: i,
                                    placement: 'top',
                                    className: no().trackContextMenuIcon,
                                    open: R,
                                    onOpenChange: M,
                                    icon: (0, m.jsx)(S.I, { size: 'xxs', variant: 'more' }),
                                    size: 'xs',
                                    'data-test-id': C.e8.player.PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON,
                                }),
                            });
                    }, [w.isAdvertShown, i, X, R, j.isGenerativeContext, v]),
                    es = (0, x.useMemo)(
                        () =>
                            i
                                ? G
                                    ? (0, m.jsx)(i0.Z, {
                                          afterTitle: er,
                                          explicitSize: 'xxxs',
                                          track: i,
                                          withAuthor: !0,
                                          withSecondaryColor: !0,
                                          withArtistLink: h,
                                          withContextMenuArtists: !0,
                                      })
                                    : H
                                      ? (0, m.jsx)(i1.w, {
                                            afterTitle: er,
                                            explicitSize: 'xxxs',
                                            track: i,
                                            withDate: !1,
                                            withSecondaryColor: !0,
                                            withPodcastName: !0,
                                            withAlbumTitleLink: h,
                                        })
                                      : (0, m.jsx)(i2.j, {
                                            afterTitle: er,
                                            track: i,
                                            withSecondaryColor: !0,
                                            withAlbumLink: !1,
                                            withTrackLink: h && !j.isGenerativeContext,
                                            withArtistLink: h,
                                            withContextMenuArtists: !0,
                                        })
                                : null,
                        [er, i, G, H, j.isGenerativeContext, h],
                    ),
                    eo = (0, Y.L)(() =>
                        l
                            ? l({ isMobile: !1, entityMeta: i })
                            : (0, m.jsx)(iJ.$, {
                                  className: (0, p.$)(no().sonataControls, no().important),
                                  withRepeat: !0,
                                  withShuffle: !0,
                                  isMobile: !1,
                                  entityMeta: i,
                              }),
                    ),
                    el = window.CHANGE_DISLIKE_BUTTON_POS?.() ?? true;
                const pulseSyncInjectPlayerBarButtons = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playerBarButtons', items, {
                        eventDetail: null,
                        renderItem: ({ key, payload, activate }) => {
                            const label = String(payload?.label ?? '').trim(),
                                description = String(payload?.description ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim();
                            if (!label || !icon) return null;
                            return (0, m.jsx)(
                                pulseSyncPlayerTooltip.k,
                                {
                                    title: label,
                                    ...(description
                                        ? {
                                              description,
                                          }
                                        : {}),
                                    children: (0, m.jsx)(T.$, {
                                        className: no().settingsButton,
                                        radius: 'round',
                                        size: 'xxxs',
                                        variant: 'text',
                                        withRipple: !1,
                                        'aria-label': label,
                                        icon: (0, m.jsx)(S.I, {
                                            variant: icon,
                                            size: 'xs',
                                        }),
                                        onClick: activate,
                                        'data-pulsesync-addon-player-button': '',
                                    }),
                                },
                                key,
                            );
                        },
                    }) ?? items;
                (0, x.useEffect)(() => {
                    setDownloadProgress(0);
                    const unsubscribe = window.desktopEvents?.on?.('PROGRESS_BAR_CHANGE', (_event, progressId, progress) => {
                        if (i?.id && progressId === `trackDownload|${i.id}`) setDownloadProgress(progress);
                    });
                    return () => {
                        if (typeof unsubscribe === 'function') unsubscribe();
                    };
                }, [i?.id]);
                let qualityMap = {
                        lq: 'LQ',
                        nq: 'NQ',
                        hq: 'HQ',
                        lossless: 'HQ+',
                    },
                    codecMap = {
                        mp3: 'MP3',
                        'he-aac': 'HE-AAC',
                        aac: 'AAC',
                        flac: 'FLAC',
                        'aac-mp4': 'AAC',
                        'he-aac-mp4': 'HE-AAC',
                        'flac-mp4': 'FLAC',
                    },
                    theState = (0, iU.e)(),
                    [downloadInfo, setDownloadInfo] = (0, x.useState)(theState?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data),
                    [parsedTrackQualityInfo, setParsedTrackQualityInfo] = (0, x.useState)(null),
                    updateParsedTrackQualityInfo = (0, x.useCallback)(
                        (e, t = !0) => {
                            setParsedTrackQualityInfo(window?.PulseSyncTrackQuality?.updateFromFormat?.(e, t ? downloadInfo : null) ?? null);
                        },
                        [downloadInfo, setParsedTrackQualityInfo],
                    );
                (0, x.useEffect)(() => {
                    let e = window?.PulseSyncTrackQuality?.getLastInfo?.();
                    (e ? setParsedTrackQualityInfo(e) : updateParsedTrackQualityInfo(null, !0),
                        window?.nativeAudioOutput
                            ?.getYaspAudioFormat?.()
                            ?.then?.((e) => {
                                updateParsedTrackQualityInfo(e, !0);
                            })
                            ?.catch?.(() => {}));
                    let t = window.desktopEvents?.on?.('NATIVE_AUDIO_OUTPUT_YASP_AUDIO_FORMAT_CHANGED', (e, t) => {
                        updateParsedTrackQualityInfo(t, Boolean(t));
                    });
                    return () => {
                        'function' == typeof t && t();
                    };
                }, [updateParsedTrackQualityInfo]);
                (0, x.useEffect)(() => {
                    let timer;
                    const refresh = () => {
                        clearInterval(timer);
                        const read = () => theState?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data;
                        const current = read();
                        setDownloadInfo(current);
                        if (current !== undefined) return;
                        let attempts = 5;
                        timer = setInterval(() => {
                            const next = read();
                            if (next !== undefined || --attempts <= 0) {
                                setDownloadInfo(next);
                                clearInterval(timer);
                            }
                        }, 200);
                    };
                    const unsubscribe = theState?.state?.queueState?.currentEntity?.onChange?.(refresh);
                    refresh();
                    return () => {
                        clearInterval(timer);
                        if (typeof unsubscribe === 'function') unsubscribe();
                    };
                }, [theState]);
                return (0, m.jsx)('section', {
                    style: w.isAdvertShown ? void 0 : q,
                    className: (0, p.$)(no().root, no().important, a, { [no().root_interactive]: _ }),
                    'data-test-id': C.e8.player.PLAYERBAR_DESKTOP,
                    'aria-labelledby': i7,
                    children: (0, m.jsxs)('div', {
                        className: no().playerBar,
                        children: [
                            !j.isGenerativeContext &&
                                (0, m.jsx)(iq, {
                                    sliderClassName: no().slider,
                                    progressbarClassName: no().progressBar,
                                    thumbClassName: no().thumb,
                                    disabled: !i,
                                    isMobile: !1,
                                    withTimecode: !0,
                                    sonataPlaybackId: b,
                                }),
                            (0, m.jsxs)('div', {
                                className: (0, p.$)(no().player, { [no().player_disabled]: !i }),
                                children: [
                                    _ && (0, m.jsx)('div', { onClick: ee, className: no().triggerModal }),
                                    (0, m.jsx)(iC.q, { children: (0, m.jsx)(I.DZ, { variant: 'h3', id: i7, children: (0, m.jsx)(A.A, { id: 'a11y-regions.player' }) }) }),
                                    (0, m.jsx)('div', {
                                        className: no().info,
                                        children: (0, m.jsx)('div', {
                                            className: no().infoCard,
                                            children:
                                                i &&
                                                !w.isAdvertShown &&
                                                (0, m.jsxs)(m.Fragment, {
                                                    children: [
                                                        (0, m.jsxs)(tv.t, {
                                                            radius: 's',
                                                            className: no().coverContainer,
                                                            'data-test-id': C.e8.player.PLAYERBAR_DESKTOP_COVER_CONTAINER,
                                                            children: [
                                                                (0, m.jsx)(i3.B, {
                                                                    className: no().cover,
                                                                    src: i.coverUri,
                                                                    size: 100,
                                                                    fit: 'cover',
                                                                    withAvatarReplace: !0,
                                                                }),
                                                                W &&
                                                                    (0, m.jsxs)(B.m_, {
                                                                        placement: 'top',
                                                                        offsetOptions: 4,
                                                                        children: [
                                                                            (0, m.jsx)(nn, {
                                                                                ariaLabel: z({ id: 'player-actions.fullscreen-button' }),
                                                                                onClick: P.showFullscreenPlayerModal,
                                                                            }),
                                                                            (0, m.jsx)(B.ZI, { children: (0, m.jsx)(A.A, { id: 'player-actions.fullscreen' }) }),
                                                                        ],
                                                                    }),
                                                            ],
                                                        }),
                                                        (0, m.jsx)('div', { className: no().description, children: es }),
                                                    ],
                                                }),
                                        }),
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: (0, p.$)(no().sonata, { [no().sonata_withReversedControls]: el }),
                                        children: [
                                            d &&
                                                (0, m.jsx)(eQ.WithOffline, {
                                                    fallback: (0, m.jsx)(i8.c, { disabled: !i || w.isAdvertShown, isLiked: n, onClick: s, iconSize: 'xs' }),
                                                }),
                                            eo,
                                            c &&
                                                (0, m.jsx)(eQ.WithOffline, {
                                                    fallback: (0, m.jsx)(i9._, { disabled: !i || w.isAdvertShown, isDisliked: r, onClick: o, iconSize: 'xs' }),
                                                }),
                                        ],
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: no().meta,
                                        children: [
                                            u &&
                                                !j.isGenerativeContext &&
                                                !w.isAdvertShown &&
                                                (0, m.jsxs)(m.Fragment, {
                                                    children: pulseSyncInjectPlayerBarButtons([
                                                        V && (0, m.jsx)(i6.i, { iconSize: 'l' }),
                                                        ea,
                                                        en,
                                                        (0, m.jsx)(pulseSyncYandexStationCastControl, {
                                                            buttonClassName: no().settingsButton,
                                                            disabled: w.isAdvertShown,
                                                        }),
                                                        (0, m.jsx)(pulseSyncPlayerTooltip.k, {
                                                            title: 'Скачать трек в файл',
                                                            description: (null == i ? void 0 : i.id)
                                                                ? 'Скачать трек в читаемый файл на вашем ПК'
                                                                : 'Не удалось получить данные о треке',
                                                            children: (0, m.jsxs)('button', {
                                                                disabled: !(null == i ? void 0 : i.id),
                                                                className: 'cpeagBA1_PblpJn8Xgtv UDMYhpDjiAFT3xUx268O '.concat(
                                                                    (null == i ? void 0 : i.id) ? 'HbaqudSqu7Q3mv3zMPGr' : '',
                                                                    ' qU2apWBO1yyEK0lZ3lPO',
                                                                ),
                                                                style: {
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    gap: '2px',
                                                                    alignSelf: 'center',
                                                                    paddingTop: '5px',
                                                                    paddingInline: '2px',
                                                                },
                                                                children: [
                                                                    (0, m.jsx)('span', {
                                                                        className: 'JjlbHZ4FaP9EAcR_1DxF',
                                                                        children: (0, m.jsx)(S.I, {
                                                                            variant: 'download',
                                                                            size: 'xxs',
                                                                            style: {
                                                                                width: '24px',
                                                                                height: '24px',
                                                                            },
                                                                        }),
                                                                    }),
                                                                    (0, m.jsx)('div', {
                                                                        style: {
                                                                            backgroundColor: 'var(--ym-controls-color-secondary-text-enabled)',
                                                                            width: ''.concat(-100 === downloadProgress ? 0 : downloadProgress, '%'),
                                                                            transition:
                                                                                downloadProgress >= 0 && downloadProgress < 100
                                                                                    ? 'width 0.3s'
                                                                                    : 'width 0.3s, opacity 0.3s linear 0.5s',
                                                                            opacity: downloadProgress >= 0 && downloadProgress < 100 ? '1' : '0',
                                                                            height: '2px',
                                                                            borderRadius: '10px',
                                                                        },
                                                                    }),
                                                                ],
                                                                onClick: onDownloadClick,
                                                            }),
                                                        }),
                                                        (0, m.jsx)(pulseSyncPlayerTooltip.k, {
                                                            title: 'Качество трека',
                                                            description:
                                                                (null == parsedTrackQualityInfo ? void 0 : parsedTrackQualityInfo.label) ??
                                                                'Не удалось получить качество трека',
                                                            children: (0, m.jsx)('div', {
                                                                className: 'cpeagBA1_PblpJn8Xgtv HbaqudSqu7Q3mv3zMPGr',
                                                                children: (0, m.jsx)(nr.p$, {
                                                                    placement: 'bottom',
                                                                    open: F,
                                                                    onOpenChange: U,
                                                                    icon: (
                                                                        window?.SHOW_CODEC_INSTEAD_OF_QUALITY_MARK?.()
                                                                            ? ((null == parsedTrackQualityInfo ? void 0 : parsedTrackQualityInfo.codec) ??
                                                                              (null == downloadInfo ? void 0 : codecMap[downloadInfo.codec]))
                                                                            : ((null == parsedTrackQualityInfo ? void 0 : parsedTrackQualityInfo.quality) ??
                                                                              (null == downloadInfo ? void 0 : qualityMap[downloadInfo.quality]))
                                                                    )
                                                                        ? (0, m.jsxs)('span', {
                                                                              className: no().settingsButton,
                                                                              style: {
                                                                                  width: 'auto',
                                                                                  height: 'auto',
                                                                                  'align-content': 'center',
                                                                              },
                                                                              children:
                                                                                  (window?.SHOW_CODEC_INSTEAD_OF_QUALITY_MARK?.()
                                                                                      ? ((null == parsedTrackQualityInfo ? void 0 : parsedTrackQualityInfo.codec) ??
                                                                                        (null == downloadInfo ? void 0 : codecMap[downloadInfo.codec]))
                                                                                      : ((null == parsedTrackQualityInfo ? void 0 : parsedTrackQualityInfo.quality) ??
                                                                                        (null == downloadInfo ? void 0 : qualityMap[downloadInfo.quality]))) ?? 'NONE',
                                                                          })
                                                                        : (0, m.jsx)(S.I, {
                                                                              variant: 'settings',
                                                                              size: 'xs',
                                                                          }),
                                                                    size: 'xxxs',
                                                                    referenceClassName: no().settingsButton,
                                                                }),
                                                            }),
                                                        }),
                                                    ]),
                                                }),
                                            (0, m.jsx)(iX.r, { variant: iZ.q.VERTICAL, sonataVolume: null != f ? f : j.volume, onVolumeClick: Q, playbackId: b }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var nd = a(48596),
                nc = a(66825),
                nu = a.n(nc);
            let n_ = (0, v.PA)((e) => {
                    var t;
                    let { className: a, entityMeta: i, isLiked: n, onLikeClick: r, renderSonataControls: s, withLike: o, withFullscreen: l, sonataPlaybackId: d } = e,
                        { user: c, sonataState: u, fullscreenPlayer: _, advert: v } = (0, L.g)(),
                        h = c.isAuthorized && i && !v.isAdvertShown,
                        b = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (t = i.mainAlbum) ? void 0 : t.isPodcast),
                        f = null == i ? void 0 : i.isTrackAudiobook,
                        g = (0, ne.K)(i),
                        N = (0, x.useCallback)(
                            (e) => {
                                if (v.isAdvertShown || !l) return;
                                let t = e.target,
                                    a = t instanceof Element && ['DIV', 'SECTION', 'IMG', 'SPAN'].includes(t.tagName);
                                i && a && !u.isGenerativeContext && _.showFullscreenPlayerModal();
                            },
                            [i, _, u.isGenerativeContext, v.isAdvertShown, l],
                        ),
                        y = (0, x.useMemo)(
                            () =>
                                v.isAdvertShown
                                    ? null
                                    : i
                                      ? f
                                          ? (0, m.jsx)(i0.Z, { explicitSize: 'xxxs', track: i, withAuthor: !0, withSecondaryColor: !0, withArtistLink: !1 })
                                          : b
                                            ? (0, m.jsx)(i1.w, {
                                                  explicitSize: 'xxxs',
                                                  track: i,
                                                  withDate: !1,
                                                  withSecondaryColor: !0,
                                                  withPodcastName: !0,
                                                  withAlbumTitleLink: !1,
                                              })
                                            : (0, m.jsx)(i2.j, { withArtistLink: !1, track: i, withSecondaryColor: !0, withAlbumLink: !1 })
                                      : (0, m.jsxs)('div', {
                                            className: nu().shimmerMeta,
                                            children: [
                                                (0, m.jsx)(aS.W, { className: nu().shimmerMetaTitle }),
                                                (0, m.jsx)(aS.W, { className: nu().shimmerMetaDescription }),
                                            ],
                                        }),
                            [v.isAdvertShown, i, f, b],
                        ),
                        T = (0, Y.L)(() =>
                            v.isAdvertShown
                                ? (0, m.jsx)('div', { className: nu().infoCard })
                                : i
                                  ? (0, m.jsxs)('div', {
                                        className: nu().infoCard,
                                        children: [
                                            (0, m.jsx)(tv.t, {
                                                radius: 's',
                                                className: nu().coverContainer,
                                                children: (0, m.jsx)(i3.B, { className: nu().cover, src: i.coverUri, size: 50, fit: 'cover', withAvatarReplace: !0 }),
                                            }),
                                            (0, m.jsx)('div', { className: nu().description, children: y }),
                                        ],
                                    })
                                  : (0, m.jsxs)('div', {
                                        className: nu().infoCard,
                                        children: [
                                            (0, m.jsx)(tv.t, {
                                                radius: 's',
                                                className: nu().coverContainer,
                                                children: (0, m.jsx)(aS.W, { className: nu().shimmerCover }),
                                            }),
                                            (0, m.jsx)('div', { className: nu().description, children: y }),
                                        ],
                                    }),
                        ),
                        S = (0, Y.L)(() => (s ? s({ isMobile: !0, entityMeta: i }) : (0, m.jsx)(iJ.$, { isMobile: !0, entityMeta: i })));
                    return (0, m.jsxs)('section', {
                        style: v.isAdvertShown ? void 0 : g,
                        className: (0, p.$)(nu().root, a),
                        onClick: N,
                        'data-test-id': C.e8.player.MOBILE_PLAYERBAR,
                        children: [
                            (0, m.jsx)(iC.q, { children: (0, m.jsx)(I.DZ, { variant: 'h3', id: i7, children: (0, m.jsx)(A.A, { id: 'a11y-regions.player' }) }) }),
                            !u.isGenerativeContext &&
                                (0, m.jsx)(nd.v, {
                                    className: nu().backgroundProgress,
                                    sliderClassName: nu().sliderChangeTimeCode,
                                    isMobile: !0,
                                    isFullscreen: !1,
                                    disabled: !i,
                                    sonataPlaybackId: d,
                                }),
                            (0, m.jsxs)('div', {
                                className: nu().info,
                                children: [
                                    T,
                                    (0, m.jsxs)('div', {
                                        className: nu().infoButtons,
                                        children: [
                                            o &&
                                                i &&
                                                h &&
                                                !v.isAdvertShown &&
                                                (0, m.jsx)(eQ.WithOffline, {
                                                    fallback: (0, m.jsx)(i8.c, { isLiked: n, iconSize: 'xs', onClick: r, disabled: !c.isAuthorized }),
                                                }),
                                            S,
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                nm = (0, v.PA)((e) => {
                    let { className: t } = e,
                        {
                            settings: { isMobile: a },
                            sonataState: i,
                            fullscreenPlayer: n,
                        } = (0, L.g)(),
                        { isLiked: r, handleLike: s, isDisliked: o, handleDislike: l } = (0, iu.f)(),
                        d = (0, ic.z)(),
                        c = (0, N.c)(() => {
                            if (i.entityMeta) {
                                if (n.modal.isOpened) return void n.modal.close();
                                n.modal.open();
                            }
                        });
                    (0, x.useEffect)(() => {
                        if (!i.isGenerativeContext)
                            return (
                                null == d || d.addShortcutsListener(id.M.MAIN, il.l.TOGGLE_FULLSCREEN_PLAYER, c),
                                null == d || d.addShortcutsListener(id.M.MAIN, il.l.LIKE, s),
                                null == d || d.addShortcutsListener(id.M.MAIN, il.l.DISLIKE, l),
                                () => {
                                    (null == d || d.removeShortcutsListener(id.M.MAIN, il.l.TOGGLE_FULLSCREEN_PLAYER),
                                        null == d || d.removeShortcutsListener(id.M.MAIN, il.l.LIKE),
                                        null == d || d.removeShortcutsListener(id.M.MAIN, il.l.DISLIKE));
                                }
                            );
                    }, [l, s, d, i.isGenerativeContext, i.entityMeta, c]);
                    let u = (0, Y.L)(() =>
                        a
                            ? (0, m.jsx)(n_, {
                                  className: (0, p.$)(t, iA().root),
                                  entityMeta: i.entityMeta,
                                  isLiked: r,
                                  onLikeClick: s,
                                  withLike: !0,
                                  withFullscreen: !0,
                              })
                            : (0, m.jsx)(nl, {
                                  className: (0, p.$)(t, iA().root),
                                  entityMeta: i.entityMeta,
                                  isLiked: r,
                                  isDisliked: o,
                                  onDislikeClick: l,
                                  onLikeClick: s,
                                  withLike: !0,
                                  withDislike: !0,
                                  withExtraControls: !0,
                                  withFullscreen: !0,
                              }),
                    );
                    return (0, m.jsxs)(m.Fragment, { children: [u, (0, m.jsx)(ib, { className: iA().adPopup }), (0, m.jsx)(io, {}), (0, m.jsx)(ix.e, {})] });
                });
            var np = a(89779),
                nv = a.n(np);
            let nh = (0, v.PA)((e) => {
                let { className: t } = e,
                    {
                        redAlert: { text: a, buttonText: i, href: n },
                    } = (0, L.g)(),
                    r = (0, tC.Z)(n),
                    { theme: s } = (0, V.W)();
                return (0, m.jsx)('div', {
                    className: (0, p.$)(nv().wrapper, t),
                    'data-test-id': C.e8.redAlert.RED_ALERT,
                    children: (0, m.jsxs)('div', {
                        className: (0, p.$)(nv().root, { [nv().root_light]: s === U.S.Light }),
                        children: [
                            (0, m.jsx)(I.HL, {
                                className: nv().text,
                                type: 'controls',
                                variant: 'p',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': C.e8.redAlert.RED_ALERT_TEXT,
                                children: a,
                            }),
                            (0, m.jsx)(T.$, {
                                className: nv().button,
                                color: 'secondary',
                                size: 'm',
                                radius: 'xxxl',
                                onClick: r,
                                'data-test-id': C.e8.redAlert.RED_ALERT_BUTTON,
                                children: (0, m.jsx)(I.HL, { type: 'controls', variant: 'span', size: 'm', weight: 'medium', children: i }),
                            }),
                        ],
                    }),
                });
            });
            var nb = a(78299),
                nx = a(91842),
                nf = a(86590),
                ng = a.n(nf);
            let nA = (0, v.PA)((e) => {
                var t, a, i, n, r;
                let { className: s, barBelow: o } = e,
                    { formatMessage: l } = (0, g.A)(),
                    [d, c] = (0, x.useState)(!1),
                    u = null == (t = o.barBelowItem) ? void 0 : t.content.advDisclaimer,
                    _ = (0, x.useMemo)(() => {
                        let e = { title: {}, text: {}, bg: {}, disclaimerTrigger: {} };
                        if (!o.barBelowItem) return e;
                        let { titleColor: t, textColor: a, bgColor: i, bgUrl: n } = o.barBelowItem.content;
                        (t && (e.title.color = t), a && (e.text.color = a), i && (e.bg.backgroundColor = i), n && (e.bg.backgroundImage = 'url("'.concat(n, '")')));
                        let r = a || t;
                        return (r && (e.disclaimerTrigger['--adv-disclaimer-color'] = r), e);
                    }, [o]),
                    v = (0, x.useMemo)(() => {
                        var e;
                        return null == (e = o.barBelowItem)
                            ? void 0
                            : e.content.buttons.map((e) => {
                                  var t, a;
                                  return (0, m.jsx)(
                                      nx.t,
                                      {
                                          anchorId: null == (t = o.barBelowItem) ? void 0 : t.anchorId,
                                          screenId: null == (a = o.barBelowItem) ? void 0 : a.screenId,
                                          button: e,
                                          buttonSize: 'l',
                                          hide: o.hide,
                                          feedbackToken: o.barBelowItem ? o.barBelowItem.feedbackToken : null,
                                      },
                                      e.text,
                                  );
                              });
                    }, [o]),
                    h = (0, x.useCallback)(
                        (e) => {
                            e.animationName.includes('show') ? o.setAnimationAlreadyBeenShown() : e.animationName.includes('hide') && o.setAnimationAlreadyBeenHidden();
                        },
                        [o],
                    ),
                    b = (0, x.useCallback)(
                        (e) => {
                            e.animationName.includes('show') && o.setAnimationAlreadyBeenStarted();
                        },
                        [o],
                    );
                return (0, m.jsx)(eR.r, {
                    page: eM.l.MUSIC_DEEPLINK_SCREEN,
                    places: [eF.R.TOP_BUTTON],
                    children: (0, m.jsxs)('section', {
                        className: (0, p.$)(
                            ng().root,
                            { [ng().root_hidden]: !o.isVisible && !o.hideWithAnimation, [ng().root_show]: o.showWithAnimation, [ng().root_hide]: o.hideWithAnimation },
                            s,
                        ),
                        style: _.bg,
                        onAnimationStart: b,
                        onAnimationEnd: h,
                        'aria-label': l({ id: 'bar-below.section-name' }),
                        'data-test-id': C.Kq.barBelow.BAR_BELOW,
                        children: [
                            (null == (a = o.barBelowItem) ? void 0 : a.content.imageUrl) &&
                                (0, m.jsx)(tp._V, {
                                    className: ng().image,
                                    'aria-hidden': !0,
                                    src: null == (i = o.barBelowItem) ? void 0 : i.content.imageUrl,
                                    fit: 'contain',
                                    withAvatarReplace: !0,
                                    withAspectRatio: !0,
                                    'data-test-id': C.Kq.barBelow.BAR_BELOW_IMAGE,
                                }),
                            (0, m.jsxs)('div', {
                                className: ng().content,
                                children: [
                                    (null == (n = o.barBelowItem) ? void 0 : n.content.title) &&
                                        (0, m.jsx)(I.DZ, {
                                            className: ng().title,
                                            variant: 'h3',
                                            style: _.title,
                                            lineClamp: 2,
                                            'data-test-id': C.Kq.barBelow.BAR_BELOW_TITLE_TEXT,
                                            children: o.barBelowItem.content.title,
                                        }),
                                    (null == (r = o.barBelowItem) ? void 0 : r.content.text) &&
                                        (0, m.jsx)(I.DZ, {
                                            className: ng().text,
                                            variant: 'h4',
                                            size: 'xs',
                                            style: _.text,
                                            lineClamp: 2,
                                            'data-test-id': C.Kq.barBelow.BAR_BELOW_SECONDARY_TEXT,
                                            children: o.barBelowItem.content.text,
                                        }),
                                ],
                            }),
                            (0, m.jsx)('div', { className: ng().buttons, children: v }),
                            u &&
                                (0, m.jsx)('div', {
                                    className: ng().advDisclaimer,
                                    children: (0, m.jsxs)(aU.AM, {
                                        placement: 'left-end',
                                        open: d,
                                        onOpenChange: c,
                                        offsetOptions: { mainAxis: 8 },
                                        transform: !1,
                                        children: [
                                            (0, m.jsx)('button', {
                                                type: 'button',
                                                className: ng().advDisclaimerTrigger,
                                                style: _.disclaimerTrigger,
                                                'data-test-id': C.Kq.barBelow.BAR_BELOW_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                children: (0, m.jsx)(A.A, { id: 'ads.ad' }),
                                            }),
                                            (0, m.jsx)(aU.hl, {
                                                className: ng().advDisclaimerContent,
                                                children: (0, m.jsx)('div', {
                                                    className: ng().advDisclaimerInner,
                                                    children: (0, m.jsx)(I.HL, {
                                                        className: ng().advDisclaimerText,
                                                        type: 'text',
                                                        variant: 'p',
                                                        size: 'xs',
                                                        weight: 'medium',
                                                        'data-test-id': C.Kq.barBelow.BAR_BELOW_ADV_DISCLAIMER_TEXT,
                                                        children: u,
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                });
            });
            var nC = a(14797),
                nN = a(66464),
                ny = a.n(nN);
            let nT = 'buy-subscription-modal',
                nS = (0, v.PA)((e) => {
                    let { modal: t } = e,
                        a = (0, h.useRouter)(),
                        i = (0, eb.N)().get(eh.QG),
                        { user: n } = (0, L.g)(),
                        [r, s] = (0, eS.d)(),
                        {
                            openPaymentWidgetModal: o,
                            isShimmerActive: l,
                            isShimmerVisible: d,
                            mainText: c,
                            mainTextA11y: u,
                            additionText: _,
                            saveOfferAndAuthorize: p,
                        } = (0, eU.D)({ storeName: 'music', offerElement: { element: r, intersectionPropertyId: nT } }),
                        v = (0, N.c)(() => {
                            if ((t.close(), !n.isAuthorized)) return void p();
                            o();
                        }),
                        b = (0, N.c)(() => {
                            (t.close(), i.authorizationUrl && a.push(i.authorizationUrl));
                        });
                    return (0, m.jsxs)(m.Fragment, {
                        children: [
                            (0, m.jsx)(I.HL, {
                                className: ny().heading,
                                variant: 'div',
                                weight: 'bold',
                                'data-test-id': C.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_TITLE,
                                children: (0, m.jsx)(A.A, { id: 'buy-subscription.listen-without-restrictions', values: { nbsp: ' ' } }),
                            }),
                            (0, m.jsxs)('div', {
                                className: ny().buttons,
                                children: [
                                    (0, m.jsx)(nC.b, {
                                        ref: s,
                                        'data-intersection-property-id': nT,
                                        mainText: c,
                                        ariaLabel: u,
                                        additionText: _,
                                        isShimmerActive: l,
                                        isShimmerVisible: d,
                                        onClick: v,
                                        className: ny().button,
                                        mainTextClassName: ny().buttonMainText,
                                        additionTextClassName: ny().buttonAdditionText,
                                        'data-test-id': C.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_SUBSCRIPTION_BUTTON,
                                    }),
                                    (0, m.jsx)(T.$, {
                                        onClick: b,
                                        className: ny().button,
                                        isBlock: !0,
                                        color: 'secondary',
                                        variant: 'default',
                                        size: 'l',
                                        radius: 'xxxl',
                                        'data-test-id': C.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ALREADY_IN_PLUS_BUTTON,
                                        children: (0, m.jsx)(I.HL, {
                                            className: ny().buttonMainText,
                                            variant: 'span',
                                            weight: 'bold',
                                            children: (0, m.jsx)(A.A, { id: 'buy-subscription.already-in-plus', values: { nbsp: '\xa0' } }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var nE = a(52970),
                nB = a(87118),
                nI = a.n(nB);
            let nj = 'buy-subscription-benefits-modal',
                nP = (0, v.PA)((e) => {
                    let { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: n, withRoundCover: r } = e,
                        { user: s } = (0, L.g)(),
                        [o, l] = (0, eS.d)(),
                        {
                            openPaymentWidgetModal: d,
                            isShimmerActive: c,
                            isShimmerVisible: u,
                            mainText: _,
                            mainTextA11y: p,
                            additionText: v,
                            oneClickAvailable: h,
                            oneClickDisclaimerText: b,
                            oneClickDisclaimerTextA11y: x,
                            buttonText: f,
                        } = (0, eU.D)({ storeName: 'music', offerElement: { element: o, intersectionPropertyId: nj } }),
                        g = !!f && s.isAuthorized,
                        y = !s.isAuthorized,
                        T = s.isAuthorized && !s.hasPlus,
                        E = (0, N.c)(() => {
                            (t.close(), d());
                        });
                    return (0, m.jsxs)(m.Fragment, {
                        children: [
                            (0, m.jsx)(tv.t, {
                                radius: r ? 'round' : 'm',
                                className: nI().entityCover,
                                children: (0, m.jsx)(i3.B, {
                                    fit: 'cover',
                                    src: i || 'https://avatars.mds.yandex.net/get-music-misc/30221/img.69b3f718179e1659eceb7a5c/orig',
                                    size: 110,
                                    withAvatarReplace: !0,
                                    isAvailable: !i || n,
                                }),
                            }),
                            !!a &&
                                (0, m.jsx)(I.HL, {
                                    variant: 'span',
                                    className: nI().entityTitle,
                                    lineClamp: 2,
                                    'data-test-id': C.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ENTITY_TITLE,
                                    children: a,
                                }),
                            (0, m.jsxs)('div', {
                                className: nI().headingContainer,
                                children: [
                                    (0, m.jsx)(I.HL, {
                                        className: nI().heading,
                                        variant: 'div',
                                        weight: 'bold',
                                        size: 's',
                                        'data-test-id': C.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_TITLE,
                                        children: (0, m.jsx)(A.A, { id: 'buy-subscription.listen-without-restrictions', values: { nbsp: '\xa0' } }),
                                    }),
                                    g &&
                                        (0, m.jsx)(I.HL, {
                                            className: nI().offerHeading,
                                            variant: 'div',
                                            weight: 'bold',
                                            size: 's',
                                            'data-test-id': C.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_OFFER_TITLE,
                                            children: (0, m.jsx)(A.A, {
                                                id: 'buy-subscription.offer-for-you',
                                                values: { offerText: null == f ? void 0 : f.toLowerCase() },
                                            }),
                                        }),
                                ],
                            }),
                            (0, m.jsxs)('div', {
                                className: nI().benefits,
                                'data-test-id': C.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_BENEFITS,
                                children: [
                                    (0, m.jsxs)('div', {
                                        className: nI().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: nI().benefitIcon,
                                                children: (0, m.jsx)(tp._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.69a6b052d268e8685d597e08/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.69a6b0e4563d4e7d5eadc110/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: nI().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(I.HL, {
                                                variant: 'span',
                                                className: nI().benefitText,
                                                children: (0, m.jsx)(A.A, { id: 'buy-subscription.plus-benefit-recommendations' }),
                                            }),
                                        ],
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: nI().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: nI().benefitIcon,
                                                children: (0, m.jsx)(tp._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14722da017d15a4f2ec/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.69a6b14722da017d15a4f2eb/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: nI().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(I.HL, {
                                                variant: 'span',
                                                className: nI().benefitText,
                                                children: (0, m.jsx)(A.A, { id: 'buy-subscription.plus-benefit-non-music', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                    (0, m.jsx)(nE.c, { className: nI().benefitDivider }),
                                    (0, m.jsx)(nE.c, { className: nI().benefitDivider }),
                                    (0, m.jsxs)('div', {
                                        className: nI().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: nI().benefitIcon,
                                                children: (0, m.jsx)(tp._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14822da017d15a4f2ee/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14722da017d15a4f2ed/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: nI().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(I.HL, {
                                                variant: 'span',
                                                className: nI().benefitText,
                                                children: (0, m.jsx)(A.A, { id: 'buy-subscription.plus-benefit-offline', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: nI().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: nI().benefitIcon,
                                                children: (0, m.jsx)(tp._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b1510974f922f316a6df/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.69a6b1510974f922f316a6de/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: nI().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(I.HL, {
                                                variant: 'span',
                                                className: nI().benefitText,
                                                children: (0, m.jsx)(A.A, { id: 'buy-subscription.plus-benefit-other-services', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            y &&
                                (0, m.jsxs)('div', {
                                    className: nI().loginContainer,
                                    children: [
                                        (0, m.jsx)(aX.H, {
                                            size: 'l',
                                            variant: 'default',
                                            buttonText: (0, m.jsx)(I.HL, {
                                                variant: 'span',
                                                size: 'l',
                                                children: (0, m.jsx)(A.A, { id: 'authorization.enter-and-listen-button' }),
                                            }),
                                            className: nI().button,
                                            'data-test-id': C.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ALREADY_IN_PLUS_BUTTON,
                                        }),
                                        (0, m.jsxs)(I.HL, {
                                            variant: 'div',
                                            size: 'm',
                                            weight: 'medium',
                                            className: nI().bonusText,
                                            'data-test-id': C.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_BONUS_TEXT,
                                            children: [
                                                (0, m.jsx)(S.I, { variant: 'gift', size: 'xxs', className: nI().giftIcon }),
                                                (0, m.jsx)(A.A, { id: 'payment.learn-personal-bonus' }),
                                            ],
                                        }),
                                    ],
                                }),
                            T &&
                                (0, m.jsxs)(m.Fragment, {
                                    children: [
                                        (0, m.jsx)(nC.b, {
                                            ref: l,
                                            'data-intersection-property-id': nj,
                                            mainText: _,
                                            ariaLabel: p,
                                            additionText: v,
                                            isShimmerActive: c,
                                            isShimmerVisible: u,
                                            onClick: E,
                                            className: nI().button,
                                            mainTextClassName: nI().buttonMainText,
                                            additionTextClassName: nI().buttonAdditionText,
                                            color: 'primary',
                                            'data-test-id': C.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_SUBSCRIPTION_BUTTON,
                                        }),
                                        h &&
                                            (0, m.jsx)(I.HL, {
                                                variant: 'div',
                                                size: 's',
                                                weight: 'normal',
                                                'aria-label': x,
                                                className: nI().oneClickDisclaimerText,
                                                'data-test-id': C.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_DISCLAIMER_TEXT,
                                                children: b,
                                            }),
                                    ],
                                }),
                        ],
                    });
                });
            var nk = a(64511),
                nw = a.n(nk);
            let nL = (0, v.PA)((e) => {
                let { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: n, isLegalRejected: r, withRoundCover: s } = e,
                    o = (0, Y.L)(() =>
                        r ? (0, m.jsx)(nS, { modal: t }) : (0, m.jsx)(nP, { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: n, withRoundCover: s }),
                    );
                return (0, m.jsx)(E.a, {
                    className: nw().root,
                    headerClassName: nw().header,
                    contentClassName: nw().content,
                    size: 'fitContent',
                    placement: 'default',
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    lockScroll: !0,
                    closeButtonDataTestId: C.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_CLOSE_BUTTON,
                    'data-test-id': C.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET,
                    children: o,
                });
            });
            nL.displayName = 'BuySubscriptionModal';
            let nO = (0, x.createContext)(null);
            var nD = a(89725),
                nR = a(27669),
                nM = a(25469),
                nF = a(1316),
                nU = a.n(nF);
            let nz = (0, v.PA)((e) => {
                    var t, a;
                    let { children: i, className: n } = e,
                        { formatMessage: r } = (0, g.A)(),
                        {
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: s },
                            },
                        } = (0, L.g)(),
                        o = (0, eD.Q)(),
                        l = (0, x.useContext)(nO),
                        d = null != (a = null == l ? void 0 : l.isCollapsed) && a,
                        c = (0, N.c)(() => {
                            s.setType(ei.h.BRANDING);
                        });
                    return ((0, x.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    s.isVisible)
                        ? (0, m.jsxs)('div', {
                              'aria-label': r({ id: 'advert.banner' }),
                              role: 'banner',
                              children: [
                                  (0, m.jsx)(X.N, {
                                      ownerId: Z.P,
                                      containerId: nD.E9,
                                      params: nD.$,
                                      onLoad: c,
                                      onError: s.toggleHasErrorTrue,
                                      onNoAds: s.toggleNoAdsTrue,
                                      className: (0, p.$)(nU().creative, { [nU().creative_withCollapsedNavbar]: d }),
                                  }),
                                  (0, m.jsx)(X.N, {
                                      ownerId: Z.P,
                                      containerId: nD.r_,
                                      params: nD.kz,
                                      onLoad: c,
                                      onError: s.toggleHasErrorTrue,
                                      onNoAds: s.toggleNoAdsTrue,
                                  }),
                                  (0, m.jsx)('div', {
                                      className: (0, p.$)(nU().root, n, { [nU().root_withCollapsedNavbar]: d }),
                                      style: null == (t = o.data) ? void 0 : t.style,
                                      children: i,
                                  }),
                              ],
                          })
                        : i;
                }),
                nW = (0, v.PA)((e) => {
                    let { children: t, className: a } = e;
                    return (0, m.jsx)(nM.A, { containerId: nD.r_, expectedType: nR.k.AXE_GRADIENT, children: (0, m.jsx)(nz, { className: a, children: t }) });
                });
            var nV = a(10322),
                nH = a(51790),
                nK = a(69522),
                nG = a.n(nK);
            let n$ = (e) => {
                let { refetchRequests: t, closeToast: a } = e,
                    { formatMessage: i } = (0, g.A)(),
                    n = (0, x.useMemo)(
                        () =>
                            (0, m.jsxs)('div', {
                                className: nG().message,
                                children: [
                                    (0, m.jsx)(I.HL, {
                                        className: nG().text,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        children: (0, m.jsx)(A.A, { id: 'error-messages.error-during-initial-loading' }),
                                    }),
                                    (0, m.jsx)(T.$, {
                                        className: nG().button,
                                        onClick: t,
                                        variant: 'text',
                                        'aria-label': i({ id: 'interface-actions.reload-part-page' }),
                                        icon: (0, m.jsx)(S.I, { variant: 'reset', size: 'xxs', className: nG().icon }),
                                    }),
                                ],
                            }),
                        [i, t],
                    );
                return (0, m.jsx)(nH.$, { className: (0, p.$)(nG().root, nG().important), message: n, closeToast: a });
            };
            var nY = a(91149),
                nq = a(92942),
                nZ = a(79645),
                nX = a(36159),
                nQ = a(94837),
                nJ = a(43354),
                n0 = a(92496),
                n1 = a(30787),
                n2 = a(6969),
                n4 = a(87206),
                n9 = a.n(n4);
            let n3 = 'noreferrer noopener',
                n8 = (0, v.PA)(() => {
                    var e;
                    let {
                            settings: { browserInfo: t },
                            user: { account: a },
                        } = (0, L.g)(),
                        { deeplink: i } = null != (e = (0, nJ.P)()) ? e : {},
                        n = (0, nQ.q)({ browserInfo: t, login: a.data.login }),
                        { shouldShow: r } = ((e) => {
                            let {
                                    enabled: t = !0,
                                    searchParamKey: a,
                                    storageKey: i,
                                    storageValue: n = 'true',
                                    storageMatcher: r = (e) => 'true' === e,
                                    useSessionStorage: s = !0,
                                    searchParamHideValue: o,
                                    shouldHideChecker: l,
                                } = e,
                                [d, c] = (0, x.useState)(!1),
                                [u, _] = (0, x.useState)(!1),
                                m = (0, h.useSearchParams)(),
                                p = (0, eb.N)(),
                                v = p.get(eh.vH),
                                b = p.get(eh.Zf),
                                f = (0, N.c)(l || (() => !1)),
                                g = ((e) => {
                                    switch (e.length) {
                                        case 0:
                                            return;
                                        case 1:
                                            return e[0];
                                        default:
                                            return e;
                                    }
                                })(m.getAll(a)),
                                A = (0, N.c)(() => {
                                    if (!s) return !1;
                                    try {
                                        let e = v.get(i);
                                        return r('string' == typeof e ? e : null);
                                    } catch (e) {
                                        return (b.error('Failed to get sessionStorage', { type: 'useSearchParamVisibility', storageKey: i }), !1);
                                    }
                                }),
                                C = (0, N.c)(() => {
                                    if (s)
                                        try {
                                            v.set(i, n);
                                        } catch (e) {
                                            b.error('Failed to set sessionStorage', { type: 'useSearchParamVisibility', storageKey: i });
                                        }
                                });
                            return (
                                (0, x.useEffect)(() => {
                                    c(!0);
                                }, []),
                                (0, x.useEffect)(() => {
                                    if (!d || !t) return void _(!1);
                                    let e =
                                            (!!o &&
                                                ((e, t) => {
                                                    if (!e || !t) return !1;
                                                    let a = t.toLowerCase();
                                                    return Array.isArray(e) ? e.some((e) => e.toLowerCase() === a) : e.toLowerCase() === a;
                                                })(g, o)) ||
                                            f(g),
                                        a = A();
                                    (e && C(), _(!(e || a)));
                                }, [g, o, s, d, t, f, A, C]),
                                { shouldShow: !!d && u, searchParamValue: g }
                            );
                        })({ searchParamKey: n2.K.UTM_SOURCE, storageKey: ex.c.HideDeeplinkAndOnelink, searchParamHideValue: 'bottomsheet' }),
                        s = (0, Y.L)(() =>
                            (null == t ? void 0 : t.hasHuaweiAppGallery) ? 'huaweiAppGallery' : (null == t ? void 0 : t.OSFamily) === n0.j.IOS ? 'macos' : 'googlePlay',
                        ),
                        o = (0, Y.L)(() =>
                            (null == t ? void 0 : t.hasHuaweiAppGallery)
                                ? (0, m.jsx)(A.A, { id: 'deeplinks.download-from-app-gallery' })
                                : (null == t ? void 0 : t.OSFamily) === n0.j.IOS
                                  ? (0, m.jsx)(A.A, { id: 'deeplinks.download-from-app-store' })
                                  : (0, m.jsx)(A.A, { id: 'deeplinks.download-from-google-play' }),
                        ),
                        l = (0, N.c)(() => {
                            if (!i) return;
                            let e = new URLSearchParams(window.location.search);
                            window.open((0, n1.C)(i, e), '_self', n3);
                        }),
                        d = (0, N.c)(() => {
                            let e = new URLSearchParams(window.location.search),
                                t = n(i && (0, n1.C)(i, e));
                            window.open(t, '_blank', n3);
                        });
                    return r
                        ? (0, m.jsxs)('div', {
                              className: n9().root,
                              children: [
                                  (0, m.jsx)(T.$, {
                                      withRipple: !1,
                                      withHover: !1,
                                      onClick: l,
                                      radius: 'xxxl',
                                      className: n9().button,
                                      role: 'link',
                                      icon: (0, m.jsx)(S.I, { className: (0, p.$)(n9().buttonIcon, n9().musicIcon), variant: 'musicLogo' }),
                                      children: (0, m.jsx)(I.HL, {
                                          className: n9().buttonTitle,
                                          variant: 'div',
                                          type: 'text',
                                          size: 'm',
                                          weight: 'normal',
                                          children: (0, m.jsx)(A.A, { id: 'deeplinks.listen-in-app' }),
                                      }),
                                  }),
                                  (0, m.jsx)(T.$, {
                                      withRipple: !1,
                                      withHover: !1,
                                      onClick: d,
                                      radius: 'xxxl',
                                      className: n9().button,
                                      role: 'link',
                                      icon: (0, m.jsx)(S.I, { className: (0, p.$)(n9().buttonIcon, n9().onelinkIcon), variant: s }),
                                      children: (0, m.jsx)(I.HL, { className: n9().buttonTitle, variant: 'div', type: 'text', size: 'm', weight: 'normal', children: o }),
                                  }),
                              ],
                          })
                        : null;
                });
            var n5 = a(71872);
            let n6 = (e) => {
                let { children: t, isEnabled: a } = e,
                    [i, n] = (0, x.useState)(n5.ov),
                    r = (0, N.c)((e) => {
                        let { href: t } = (0, eG.u)(null != e ? e : '', { options: { host: n5.ov } });
                        n(t);
                    }),
                    s = (0, x.useMemo)(() => ({ deeplink: i, setDeeplink: r, isEnabled: a }), [a, r, i]);
                return a ? (0, m.jsx)(nJ.H.Provider, { value: s, children: t }) : t;
            };
            var n7 = a(27243),
                re = a(18748);
            let rt = { p1: 'czmwt', p2: 'hsnu', puid1: '', puid2: '' };
            var ra = a(88280),
                ri = a.n(ra);
            let rn = (0, v.PA)((e) => {
                    let { className: t, forwardRef: a, onAdvertChange: i, ...n } = e,
                        {
                            advertBanners: {
                                banners: { topAdvertBanner: r },
                            },
                        } = (0, L.g)(),
                        { formatMessage: s } = (0, g.A)(),
                        o = (0, N.c)((e) => {
                            (void 0 !== e && r.setType(e), i());
                        });
                    return (0, m.jsx)('section', {
                        ref: a,
                        className: (0, p.$)(ri().root, t, { [ri().root_hidden]: !r.isVisible }),
                        'aria-label': s({ id: 'advert.banner' }),
                        role: 'banner',
                        ...n,
                        children: (0, m.jsx)(X.N, {
                            className: ri().advert,
                            ownerId: Z.P,
                            containerId: 'adfox_173831489272852769',
                            params: rt,
                            onLoad: r.setType,
                            onRender: o,
                            onError: r.toggleHasErrorTrue,
                            onNoAds: r.toggleNoAdsTrue,
                        }),
                    });
                }),
                rr = (0, x.forwardRef)((e, t) => (0, m.jsx)(rn, { forwardRef: t, ...e }));
            var rs = a(78401),
                ro = a.n(rs);
            let rl = (0, v.PA)((e) => {
                let { children: t } = e,
                    [a, i] = (0, x.useState)(!1),
                    [n, r] = (0, x.useState)(!0),
                    [s, o] = (0, x.useState)(!1),
                    { contentRef: l, contentScrollRef: d } = (0, k.g)(),
                    c = (0, x.useRef)(null),
                    {
                        user: u,
                        settings: { isMobile: _ },
                        advertBanners: {
                            banners: { topAdvertBanner: v },
                        },
                        freeAccess: h,
                    } = (0, L.g)(),
                    b = (!u.isAuthorized || h.isFreeWebUser) && v.isVisible,
                    f = (0, x.useCallback)(() => {
                        (r(!1), i(!0));
                    }, [r, i]),
                    g = (0, x.useCallback)(() => {
                        (r(!0), i(!1));
                    }, [r, i]),
                    A = (0, x.useCallback)(() => {
                        o(!1);
                    }, [o]),
                    C = (0, x.useMemo)(
                        () =>
                            b
                                ? (0, m.jsx)(rr, { className: (0, p.$)(ro().banner, { [ro().banner_canShow]: a }), onFocus: f, onBlur: g, onAdvertChange: A, ref: c })
                                : null,
                        [b, a, f, g, A],
                    ),
                    N = (0, x.useCallback)(() => (_ ? window.scrollY : null == d ? void 0 : d.scrollTop), [d, _]),
                    y = (0, x.useCallback)(() => {
                        if (!C) return;
                        let e = N();
                        if (void 0 === e) return void i(!0);
                        let t = e > 0;
                        if (!_ && l && d) {
                            var a;
                            let e = l.clientHeight + ((null == (a = c.current) ? void 0 : a.offsetHeight) || 0) < d.scrollHeight;
                            e ? r(!0) : !e && t && r(!1);
                        }
                        if (!n || (!t && s)) return;
                        let u = !t;
                        (i(u), u && o(!0));
                    }, [l, d, C, n, N, _, s, i, r, o]);
                (0, x.useEffect)(() => {
                    y();
                }, [y, d]);
                let T = (0, x.useMemo)(() => (0, el.A)(y, 200), [y]);
                return (
                    (0, re.L)(_ ? { onScroll: T } : { onScroll: T, elementRef: d }),
                    (0, m.jsxs)('div', { className: ro().root, children: [C, (0, m.jsx)('div', { className: ro().content, children: t })] })
                );
            });
            var rd = a(4296),
                rc = a(16017),
                ru = a.n(rc);
            const NativeAddonNotification = ({ notification, iconProps, closeToast }) => {
                const { message, kind, coverUrl, link, isActive } = notification;
                if (kind === 'error' && !iconProps && !coverUrl && !link)
                    return (0, m.jsx)(a(57549).h, {
                        error: message,
                        closeToast,
                    });
                const caption = (0, m.jsxs)(a(4254).HL, {
                    className: kind === 'error' ? a(23775).message : undefined,
                    variant: 'div',
                    type: 'controls',
                    size: 'm',
                    role: kind === 'error' ? 'alert' : 'status',
                    children: [
                        message,
                        link && ' ',
                        link &&
                            (0, m.jsx)(a(97522).N, {
                                href: link.href,
                                className: a(24915).link,
                                onClick: (event) => {
                                    if (!isActive()) return event.preventDefault();
                                    closeToast?.();
                                },
                                children: (0, m.jsx)(a(4254).HL, {
                                    className: a(24915).title,
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'm',
                                    children: link.label,
                                }),
                            }),
                    ],
                });
                return (0, m.jsx)(a(51790).$, {
                    className: kind === 'error' ? a(23775).root : undefined,
                    message: caption,
                    cover: coverUrl
                        ? (0, m.jsx)(a(23818)._V, {
                              src: coverUrl,
                              size: 100,
                              fit: 'cover',
                              className: a(24915).image,
                              'aria-hidden': true,
                          })
                        : iconProps
                          ? (0, m.jsx)(a(66738).I, iconProps)
                          : undefined,
                    coverRadius: 's',
                    closeToast,
                });
            };
            let r_ = [{ id: nY.u.INFO }, { id: nY.u.ERROR, limit: 1 }],
                rm = () => {
                    const { notify, dismiss } = (0, nq.l)();
                    (0, x.useEffect)(() => {
                        let unregister;
                        const register = () => {
                            const api = window.pulsesyncApi;
                            if (unregister || !api?.registerNativeNotifications) return;
                            unregister = api.registerNativeNotifications({
                                show: (notification) => {
                                    const { id, icon, kind, durationMs, onClose } = notification;
                                    const iconProps = icon ? a(66738).resolveIcon(icon) : undefined;
                                    if (icon && !iconProps) throw new TypeError('Notification icon is not in the native catalog');
                                    const content = (0, m.jsx)(NativeAddonNotification, {
                                        notification,
                                        iconProps,
                                    });
                                    notify(content, {
                                        containerId: kind === 'error' ? nY.u.ERROR : nY.u.INFO,
                                        toastId: id,
                                        autoClose: durationMs,
                                        single: false,
                                        onClose,
                                    });
                                },
                                dismiss: (id) =>
                                    dismiss({
                                        notificationId: id,
                                        forceClose: true,
                                    }),
                            });
                        };
                        document.addEventListener('pulsesync:runtime-ready', register);
                        register();
                        return () => {
                            document.removeEventListener('pulsesync:runtime-ready', register);
                            unregister?.();
                        };
                    }, [notify, dismiss]);
                    return r_.map((e) => {
                        let { id: t, limit: a } = e;
                        return (0, m.jsx)(rd.Notification, { className: ru().root, enableMultiContainer: !0, containerId: t, position: 'bottom-center', limit: a }, t);
                    });
                },
                rp = iB.default.default(
                    () =>
                        Promise.all([
                            a.e(7349),
                            a.e(6715),
                            a.e(6749),
                            a.e(1676),
                            a.e(1632),
                            a.e(7593),
                            a.e(3),
                            a.e(3349),
                            a.e(8198),
                            a.e(6287),
                            a.e(1107),
                            a.e(8234),
                            a.e(3580),
                            a.e(6002),
                            a.e(4268),
                            a.e(6095),
                            a.e(6271),
                            a.e(7198),
                            a.e(9430),
                            a.e(5531),
                            a.e(3224),
                            a.e(382),
                        ])
                            .then(a.bind(a, 31532))
                            .then((e) => e.ProductLayoutClientOnlyModalsContent),
                    { ssr: !1 },
                ),
                rv = (0, v.PA)((e) => {
                    var t, a, i;
                    let { children: n, isNewWaveMainTabActive: r, layoutChromeStyles: s, rootClassName: o, rootStyle: l } = e,
                        d = (0, h.usePathname)(),
                        { setCompositePlayerBarRef: c } = (0, k.g)(),
                        u = (0, eb.N)().get(eh.oo),
                        _ = ev(),
                        {
                            settings: { browserInfo: v, isMobile: b, isWindowsApplication: f, isMacOSApplication: g, isLinuxApplication: A },
                            experiments: C,
                            communication: N,
                            user: y,
                            redAlert: T,
                            album: S,
                            albumCPA: { isPlusCPAPlayerBarEnabled: E, isHidePlusModalEnabled: B },
                            modals: { buySubscriptionModal: I },
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: j },
                            },
                            freeAccess: P,
                        } = (0, L.g)(),
                        [w, O] = (0, x.useState)(null != (i = u.get(ex.c.NavbarCollapsed)) ? i : _),
                        D = (0, x.useMemo)(() => ({ isCollapsed: w || _, setIsCollapsed: O }), [w, _]);
                    (() => {
                        let { notify: e, dismiss: t } = (0, nq.l)(),
                            a = (0, x.useRef)(void 0),
                            { library: i, user: n } = (0, L.g)(),
                            r = (0, eb.N)().get(eh.U2),
                            [s, o] = (0, x.useState)(!0),
                            l = (0, x.useCallback)(async () => {
                                o(!1);
                                let e = [];
                                (n.settings.loadingState === nX.G.REJECT && e.push(n.getSettings()),
                                    i.loadingState === nX.G.REJECT && e.push(i.getData()),
                                    t({ notificationId: a.current, forceClose: !0 }),
                                    await Promise.allSettled(e),
                                    o(!0));
                            }, [t, i, n]);
                        ((0, x.useEffect)(() => {
                            let t = [n.settings.loadingState];
                            (0, nZ.g)(r) || t.push(i.loadingState);
                            let o = t.every((e) => e !== nX.G.PENDING);
                            s && o && t.includes(nX.G.REJECT) && (a.current = e((0, m.jsx)(n$, { refetchRequests: l }), { containerId: nY.u.IMPORTANT, autoClose: !1 }));
                        }, [e, l, s, i.loadingState, n.settings.loadingState, r]),
                            (0, x.useEffect)(
                                () => () => {
                                    t({ notificationId: a.current, forceClose: !0 });
                                },
                                [t],
                            ));
                    })();
                    let R = (!y.isAuthorized || P.isFreeWebUser) && (null == v ? void 0 : v.isTouch),
                        M = C.checkExperiment(K.z.WebNextDeeplinksToMobile, 'on') && y.hasPlus && !!(null == v ? void 0 : v.isMobile) && !1,
                        F = M && !r,
                        { setDefaultLayoutRef: U } = (0, k.g)(),
                        z = E(null == S ? void 0 : S.id, null == S || null == (t = S.meta) ? void 0 : t.isNonMusic),
                        W = B(null == S ? void 0 : S.id, null == S || null == (a = S.meta) ? void 0 : a.isNonMusic),
                        V = !R || z,
                        H = z && (null == v ? void 0 : v.isTouch);
                    return (
                        (0, x.useEffect)(() => {
                            W && I.close();
                        }, [W, I]),
                        (0, m.jsx)(nO.Provider, {
                            value: D,
                            children: (0, m.jsx)(rl, {
                                children: (0, m.jsx)(n6, {
                                    isEnabled: M,
                                    children: (0, m.jsx)(nW, {
                                        children: (0, m.jsxs)('div', {
                                            ref: U,
                                            className: o,
                                            style: l,
                                            children: [
                                                H && (0, m.jsx)(nL, { modal: I }),
                                                !b &&
                                                    V &&
                                                    (0, m.jsx)(a7, {
                                                        className: (0, p.$)(s.navbar, {
                                                            [s.navbar_application_windows]: f,
                                                            [s.navbar_application_macos]: g,
                                                            [s.navbar_application_linux]: A,
                                                        }),
                                                        externalIsCollapsed: w,
                                                        externalSetIsCollapsed: O,
                                                    }),
                                                (0, m.jsx)(em, {
                                                    className: (0, p.$)($().content, {
                                                        [$().content_withPlayerBar]: b && (!r || window.SHOW_OLD_PLAYER_BAR_ON_NEW_WAVE?.()),
                                                        [$().content_withAxeBanner]: j.isVisible,
                                                    }),
                                                    children: (0, m.jsxs)(n7.ErrorBoundary, { fallback: nb.SomethingWentWrong, children: [n, (0, m.jsx)(rm, {})] }, d),
                                                }),
                                                !b &&
                                                    V &&
                                                    (!r || window.SHOW_OLD_PLAYER_BAR_ON_NEW_WAVE?.()) &&
                                                    (0, m.jsx)(nV.n, { pageId: tQ._Q.PLAYER, children: (0, m.jsx)(nm, { className: $().playerBar }) }),
                                                b &&
                                                    V &&
                                                    (0, m.jsxs)('div', {
                                                        ref: c,
                                                        className: (0, p.$)($().compositePlayerBar, { [$().compositePlayerBar_withNewVibe]: r }),
                                                        children: [
                                                            F && (0, m.jsx)(n8, {}),
                                                            (!r || window.SHOW_OLD_PLAYER_BAR_ON_NEW_WAVE?.()) &&
                                                                (0, m.jsx)(nV.n, { pageId: tQ._Q.PLAYER, children: (0, m.jsx)(nm, { className: $().playerBar }) }),
                                                            (0, m.jsx)(a7, {
                                                                className: (0, p.$)(s.navbar, {
                                                                    [s.navbar_application_windows]: f,
                                                                    [s.navbar_application_macos]: g,
                                                                    [s.navbar_application_linux]: A,
                                                                }),
                                                                externalIsCollapsed: w,
                                                                externalSetIsCollapsed: O,
                                                            }),
                                                        ],
                                                    }),
                                                T.isVisible && (0, m.jsx)(nh, { className: s.barBelow }),
                                                !T.isVisible && !b && N.list && (0, m.jsx)(nA, { className: s.barBelow, barBelow: N.list.barBelow }),
                                                (0, m.jsx)(rp, {}),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        })
                    );
                });
            var rh = a(43465),
                rb = a.n(rh);
            let rx = (0, v.PA)((e) => {
                var t, a, i;
                let n,
                    { className: r, children: s } = e,
                    o = (0, h.usePathname)(),
                    {
                        settings: { isMobile: l, isWindowsApplication: d, isLinuxApplication: c, isMacOSApplication: isMacOS },
                        redAlert: u,
                        communication: _,
                        advertBanners: {
                            banners: { brandedEntityAxeBanner: v },
                        },
                        sonataState: x,
                        experiments: f,
                        vibe: g,
                        words: A,
                    } = (0, L.g)(),
                    C = o === F.Z.main.href || o === F.Z.video.href;
                H(U.S.Dark, C);
                let N =
                        u.isVisible ||
                        (!l && (null == (t = _.list) ? void 0 : t.barBelow.isVisible) && (null == (a = _.list) ? void 0 : a.barBelow.hasAnimationAlreadyBeenStarted)),
                    y = {
                        barBelow: rb().barBelow,
                        navbar: rb().navbar,
                        navbar_application_linux: rb().navbar_application_linux,
                        navbar_application_macos: rb().navbar_application_macos,
                        navbar_application_windows: rb().navbar_application_windows,
                    },
                    T = rb().root_withBarBelow,
                    S = rb().root;
                if (C) {
                    let e = g.isShuffleVibe && x.isVibeContext;
                    ((n = ((e) => {
                        let { palette: t, isPlaying: a } = e;
                        return (a ? t.primaryStops : t.primaryDarkIdleStops).reduce((e, t, a) => ((e['--vibe-gradient-stop-'.concat(a)] = t), e), {});
                    })({ palette: (0, b.OH)(e || null == (i = x.entityMeta) ? void 0 : i.averageColor), isPlaying: x.isPlaying && !A.bigCardPanel.isOpened })),
                        (T = rb().rootNewVibe_withBarBelow),
                        (S = rb().rootNewVibe));
                }
                let E = (0, p.$)(
                    $().root,
                    S,
                    {
                        [rb().root_applicationPreserveTitleBar]: d || c || isMacOS,
                        [T]: N,
                        [$().root_withAxeBanner]: v.isVisible,
                        modSettings_alwaysWideBar: window.ALWAYS_WIDE_BAR?.(),
                        modSettings_showOldPlayerBarOnNewWave: window.SHOW_OLD_PLAYER_BAR_ON_NEW_WAVE?.(),
                    },
                    r,
                );
                return (0, m.jsxs)(rv, { isNewWaveMainTabActive: C, layoutChromeStyles: y, rootClassName: E, rootStyle: n, children: [s, C && (0, m.jsx)(M, {})] });
            });
        },
        61912: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => f });
            var i = a(25839),
                n = a(82298),
                r = a(88204),
                s = a(74631),
                o = a(36619),
                l = a(61493),
                d = a(71035),
                c = a(23818),
                u = a(10820),
                _ = a(86869),
                m = a(4254),
                p = a(29481),
                v = a(85686),
                h = a(27954),
                b = a(53454),
                x = a.n(b);
            let f = (0, r.PA)((e) => {
                let { artist: t, className: a } = e,
                    { fullscreenPlayer: r } = (0, h.g)(),
                    b = (0, v.Z)(t.url),
                    g = (0, p.N)(),
                    A = (0, s.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(f, { artist: t, className: a }, t.id)), e), []))
                        );
                    }, [t, a]),
                    C = (0, d.c)((e) => {
                        (r.modal.isOpened && r.modal.close(), g({ to: o.AppScreen.ArtistScreen }), b(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, n.$)(x().root, a),
                            onClick: C,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(_.t, {
                                    radius: 'round',
                                    className: x().cover,
                                    children: (0, i.jsx)(c._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: x().image }),
                                }),
                                (0, i.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        62926: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => h });
            var i = a(25839),
                n = a(82298),
                r = a(88204),
                s = a(74631),
                o = a(39004),
                l = a(74245),
                d = a(61493),
                c = a(49656),
                u = a(66738),
                _ = a(27954),
                m = a(60924),
                p = a(92870),
                v = a.n(p);
            let h = (0, r.PA)((e) => {
                let { className: t, getDescriptionTexts: a, trackId: r, containerClassName: p, variant: h, size: b = 'xxxs', ...x } = e,
                    { formatMessage: f } = (0, o.A)(),
                    {
                        settings: { isMobile: g },
                    } = (0, _.g)(),
                    [A, C] = (0, s.useState)(null),
                    N = (0, c.L)(() => {
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
                    y = (0, s.useMemo)(() => f({ id: 'extra-explicit.explicit-mark' }), [f]);
                (0, s.useEffect)(() => {
                    a && a().then(C);
                }, [a, r]);
                let T = (null == A ? void 0 : A.join('\n')) || '',
                    S = !!(null == A ? void 0 : A.length) && !g,
                    E = T.length > 0 ? T : y;
                return (0, i.jsx)(m.k, {
                    description: T,
                    placement: 'bottom-start',
                    enabled: S,
                    children: (0, i.jsx)('span', {
                        className: p,
                        children:
                            h === l.JU.SUBSTITUTED
                                ? (0, i.jsxs)('svg', {
                                      className: (0, n.$)(v().explicitMark, t),
                                      viewBox: '0 0 16 16',
                                      role: 'img',
                                      'aria-label': E,
                                      style: { width: 'var(--ym-icon-size-'.concat(b, ')'), height: 'var(--ym-icon-size-'.concat(b, ')') },
                                      ...x,
                                      'data-test-id': d.S7.EXPLICIT_MARK_ICON,
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
                                      className: (0, n.$)(v().explicitMark, t),
                                      'aria-label': E,
                                      variant: N,
                                      size: b,
                                      ...x,
                                      'data-test-id': d.S7.EXPLICIT_MARK_ICON,
                                  }),
                    }),
                });
            });
        },
        64511: (e) => {
            e.exports = { root: 'BuySubscriptionModal_root__5LvlX', content: 'BuySubscriptionModal_content__v06Ju', header: 'BuySubscriptionModal_header__ho5hr' };
        },
        66464: (e) => {
            e.exports = {
                heading: 'BuySubscriptionBaseContent_heading__lQExw',
                buttons: 'BuySubscriptionBaseContent_buttons__1MZhL',
                button: 'BuySubscriptionBaseContent_button___DQII',
                buttonMainText: 'BuySubscriptionBaseContent_buttonMainText__kKEWL',
                buttonAdditionText: 'BuySubscriptionBaseContent_buttonAdditionText__lV_51',
            };
        },
        66784: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => m });
            var i = a(25839),
                n = a(88204),
                r = a(84059),
                s = a(74631),
                o = a(97109),
                l = a(74068),
                d = a(84e3),
                c = a(27954),
                u = a(49337),
                _ = a(96618);
            let m = (0, n.PA)((e) => {
                let { className: t, ownerId: a, containerId: n, params: m, onLoad: p, onRender: v, onNoAds: h, onError: b } = e,
                    { user: x } = (0, c.g)(),
                    f = (0, r.usePathname)(),
                    g = (0, r.useSearchParams)(),
                    { create: A, destroy: C, initialize: N } = (0, l.s)(),
                    { theme: y } = (0, _.W)(),
                    T = (0, d.U)(),
                    S = (0, s.useRef)(!0),
                    E = { ...m };
                return (
                    (E.puid1 = x.advertRole),
                    (0, s.useEffect)(() => {
                        A({
                            ownerId: a,
                            containerId: n,
                            params: E,
                            insertionCodeParams: { darkTheme: y === u.S.Dark, additionalClasses: y ? [y] : [] },
                            onClose: () => {
                                T.log('[AdvertBanner] Close');
                            },
                            onLoad: (e) => {
                                if ((T.log('[AdvertBanner] Load', { data: e }), void 0 === e)) {
                                    null == p || p(o.h.EMPTY);
                                    return;
                                }
                                if ((null == e ? void 0 : e.bundleName) === 'banner.direct') {
                                    null == p || p(o.h.DIRECT);
                                    return;
                                }
                                null == p || p(o.h.CREATIVE);
                            },
                            onRender: () => {
                                (T.log('[AdvertBanner] Render'), null == v || v());
                            },
                            onStub: () => {
                                (T.log('[AdvertBanner] Stub'), null == h || h());
                            },
                            onError: (e) => {
                                (T.log('[AdvertBanner] Error', { error: e }), null == b || b());
                            },
                        });
                    }, []),
                    (0, s.useEffect)(() => {
                        if (S.current) {
                            S.current = !1;
                            return;
                        }
                        (T.log('[AdvertBanner] Destroy'), C(n), T.log('[AdvertBanner] Initialize'), N(n));
                    }, [f, g, n, C, N, T]),
                    (0, i.jsx)('div', { id: n, className: t, tabIndex: -1, 'aria-hidden': !0 })
                );
            });
        },
        66825: (e) => {
            e.exports = {
                root: 'PlayerBarMobile_root__cdKy_',
                progressBar: 'PlayerBarMobile_progressBar___DmH8',
                info: 'PlayerBarMobile_info__WmdhZ',
                infoCard: 'PlayerBarMobile_infoCard__DCATu',
                coverContainer: 'PlayerBarMobile_coverContainer__a3JDF',
                cover: 'PlayerBarMobile_cover__pnJd1',
                description: 'PlayerBarMobile_description__IxQ9L',
                artists: 'PlayerBarMobile_artists__XVSBV',
                artistLink: 'PlayerBarMobile_artistLink__pieMq',
                infoButtons: 'PlayerBarMobile_infoButtons__JXxfv',
                sliderChangeTimeCode: 'PlayerBarMobile_sliderChangeTimeCode___2Vpu',
                backgroundProgress: 'PlayerBarMobile_backgroundProgress__jevhK',
                shimmerCover: 'PlayerBarMobile_shimmerCover__q1eXc',
                shimmerMeta: 'PlayerBarMobile_shimmerMeta__4vDEK',
                shimmerMetaTitle: 'PlayerBarMobile_shimmerMetaTitle__TsIb2',
                shimmerMetaDescription: 'PlayerBarMobile_shimmerMetaDescription__pIeAr',
            };
        },
        67303: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => u });
            var i = a(25839),
                n = a(88204),
                r = a(74631),
                s = a(8487),
                o = a(61493),
                l = a(66738),
                d = a(10820),
                c = a(27954);
            let u = (0, n.PA)((e) => {
                let { isPinned: t, onClick: a, disabled: n, className: u, iconClassName: _ } = e,
                    { user: m } = (0, c.g)(),
                    p = t ? 'unpin' : 'pin',
                    v = t ? o.S7.CONTEXT_MENU_UNPIN_BUTTON : o.S7.CONTEXT_MENU_PIN_BUTTON,
                    h = (0, r.useMemo)(() => (t ? (0, i.jsx)(s.A, { id: 'interface-actions.unpin' }) : (0, i.jsx)(s.A, { id: 'interface-actions.pin' })), [t]);
                return (0, i.jsx)(d.Dr, {
                    className: u,
                    onClick: a,
                    icon: (0, i.jsx)(l.I, { className: _, variant: p, size: 'xxs' }),
                    'data-test-id': v,
                    disabled: n || !m.isAuthorized,
                    children: h,
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
        69522: (e) => {
            e.exports = {
                root: 'NotificationReloadPrefetchedRequests_root__90_4R',
                important: 'NotificationReloadPrefetchedRequests_important__ews9K',
                text: 'NotificationReloadPrefetchedRequests_text__oXCop',
                icon: 'NotificationReloadPrefetchedRequests_icon__Pg1_X',
                button: 'NotificationReloadPrefetchedRequests_button__lSehi',
                message: 'NotificationReloadPrefetchedRequests_message__i9Tx6',
            };
        },
        71705: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => v });
            var i = a(25839),
                n = a(39004),
                r = a(71035),
                s = a(21468),
                o = a(91149),
                l = a(92942),
                d = a(27954),
                c = a(57549),
                u = a(33660),
                _ = a(74631),
                m = a(31860),
                p = a(93297);
            let v = (e) => {
                let {
                        user: t,
                        paywall: a,
                        albumCPA: { isPlusCPAEnabled: v },
                    } = (0, d.g)(),
                    { formatMessage: h } = (0, n.A)(),
                    { notify: b } = (0, l.l)(),
                    x = (() => {
                        let { notify: e } = (0, l.l)(),
                            [t, a] = (0, _.useState)(!1),
                            { formatMessage: s } = (0, n.A)();
                        return (0, r.c)(async (n) => {
                            let { album: r, withLink: l = !0, withNotification: d = !0 } = n;
                            if (t) return;
                            let _ = { ...(0, u.HO)(r), url: r.url, isLiked: !r.isLiked };
                            a(!0);
                            let v = await r.toggleLike();
                            (a(!1),
                                d &&
                                    (v === m.f.OK
                                        ? e((0, i.jsx)(p.T, { withLink: l, album: _ }), { containerId: o.u.INFO })
                                        : e((0, i.jsx)(c.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR })));
                        });
                    })(),
                    { pageAlbumId: f } = (0, s.T)();
                return (0, r.c)(async () => {
                    if (e)
                        return v({ pageAlbumId: f, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void a.openModal()
                            : t.isAuthorized
                              ? x({ album: e })
                              : void b((0, i.jsx)(c.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                });
            };
        },
        73182: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => r });
            var i = a(56829),
                n = a(35015);
            let r = (e) => {
                switch (e) {
                    case i._.PODCAST:
                        return n.c.PODCAST;
                    case i._.AUDIOBOOK:
                        return n.c.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return n.c.FAIRY_TALE;
                    default:
                        return n.c.ALBUM;
                }
            };
        },
        73544: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => i });
            let i = (e) => ({ uri: e.uri, color: e.color });
        },
        73614: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => s, r: () => o });
            var i = a(74631),
                n = a(39004),
                r = a(56829),
                s = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let o = (e, t) => {
                let { formatMessage: a } = (0, n.A)();
                return (0, i.useMemo)(() => {
                    switch (e) {
                        case r._.SINGLE:
                            return a({ id: 'entity-names.single' });
                        case r._.PODCAST:
                            return a({ id: 'entity-names.podcast' });
                        case r._.AUDIOBOOK:
                            if ('pin' === t) return a({ id: 'entity-names.book' });
                            return a({ id: 'entity-names.audio' });
                        case r._.FAIRY_TALE:
                            return a({ id: 'entity-names.fairy-tale' });
                        default:
                            return a({ id: 'entity-names.album' });
                    }
                }, [e, a, t]);
            };
        },
        74068: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => _ });
            var i = a(74631),
                n = a(71035);
            let r = null,
                s = [],
                o = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void s.push((e) => {
                            e.context.AdvManager.render(...t);
                        });
                    r.context.AdvManager.render(...t);
                },
                l = function () {
                    for (var e, t = arguments.length, a = Array(t), i = 0; i < t; i++) a[i] = arguments[i];
                    let [n, ...o] = a;
                    if (null === r)
                        return void s.push((e) => {
                            var t;
                            e.code.create({ cspNonce: null != (t = null == r ? void 0 : r.cspNonce) ? t : void 0, ...n }, ...o);
                        });
                    r.code.create({ cspNonce: null != (e = r.cspNonce) ? e : void 0, ...n }, ...o);
                },
                d = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void s.push((e) => {
                            e.code.reload(...t);
                        });
                    r.code.reload(...t);
                },
                c = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void s.push((e) => {
                            e.code.destroy(...t);
                        });
                    r.code.destroy(...t);
                },
                u = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void s.push((e) => {
                            e.code.initialize(...t);
                        });
                    r.code.initialize(...t);
                },
                _ = () => {
                    let [e, t] = (0, i.useState)(null !== r),
                        a = (0, n.c)((a) => {
                            var i, n, o;
                            let { cspNonce: l } = a;
                            void 0 === (null == (i = window) ? void 0 : i.Ya.Context) ||
                                void 0 === (null == (n = window) ? void 0 : n.Ya.adfoxCode) ||
                                e ||
                                ((window.yaContextCb = window.yaContextCb || []),
                                (r = { context: window.Ya.Context, code: window.Ya.adfoxCode, cspNonce: l }),
                                t(!0),
                                (o = r),
                                s.forEach((e) => {
                                    e(o);
                                }),
                                (s = []));
                        });
                    return { isLoaded: e, init: a, render: o, create: l, reload: d, destroy: c, initialize: u };
                };
        },
        74247: (e) => {
            e.exports = {
                root: 'NavbarDesktopUnauthorizedBar_root__uQZ9L',
                title: 'NavbarDesktopUnauthorizedBar_title__vf0W7',
                subtitle: 'NavbarDesktopUnauthorizedBar_subtitle__anNNQ',
                userProfile: 'NavbarDesktopUnauthorizedBar_userProfile__hAABb',
                userId: 'NavbarDesktopUnauthorizedBar_userId__m0jC6',
                buttons: 'NavbarDesktopUnauthorizedBar_buttons__94Y3N',
            };
        },
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        75159: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => S });
            var i = a(25839),
                n = a(33660),
                r = a(74631),
                s = a(39004),
                o = a(98436),
                l = a(91149),
                d = a(92942),
                c = a(27954),
                u = a(57549),
                _ = a(82298),
                m = a(88204),
                p = a(61493),
                v = a(49656),
                h = a(23818),
                b = a(44806),
                x = a(51514),
                f = a(35015),
                g = a(10546),
                A = a(86209),
                C = a(97779),
                N = a.n(C);
            let y = (0, m.PA)((e) => {
                let { vibe: t, closeToast: a } = e,
                    { experiments: n } = (0, c.g)(),
                    r = n.checkExperiment(b.z.WebNextWaveAgentExperiment, 'on'),
                    s = t.type === x.q7,
                    o = (0, v.L)(() => {
                        var e;
                        return r && t.agent
                            ? (0, i.jsx)(A.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: (0, _.$)(N().view, { [N().multivibeContainer]: s }),
                                  coverClassName: (0, _.$)({ [N().multivibeCover]: s }),
                                  entityCoverClassName: (0, _.$)({ [N().multivibeAvatar]: s }),
                                  controlClassName: (0, _.$)({ [N().multivibeControl]: s }),
                              })
                            : (0, i.jsx)(h._V, {
                                  className: N().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': p.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    l = r && t.agent ? void 0 : 'round';
                return (0, i.jsx)(g.k, {
                    closeToast: a,
                    entityVariant: f.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: o,
                    radius: l,
                    className: N().root,
                });
            });
            var T = a(19966);
            let S = (e) => {
                let { user: t, pinsCollection: a } = (0, c.g)(),
                    { notify: _ } = (0, d.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [p, v] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void _((0, i.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (p) return;
                    let r = { ...(0, n.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        s = a.get(e.pinId);
                    v(!0);
                    let d = await e.togglePin();
                    (v(!1),
                        s &&
                            s.type === o._.WAVE_ITEM &&
                            s.data.backgroundImageUrl &&
                            ((r.backgroundImageUrl = s.data.backgroundImageUrl), (r.colors = s.data.colors), (r.agent = s.data.agent)),
                        d &&
                            'object' == typeof d &&
                            'data' in d &&
                            (d.data.backgroundImageUrl && (r.backgroundImageUrl = d.data.backgroundImageUrl),
                            d.data.colors && (r.colors = { average: d.data.colors.average, waveText: d.data.colors.waveText }),
                            d.data.agent && (r.agent = (0, T.K)(d.data.agent))),
                        d
                            ? _((0, i.jsx)(y, { vibe: r }), { containerId: l.u.INFO })
                            : _((0, i.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [m, _, p, a, t.isAuthorized, e]);
            };
        },
        75167: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => n, w: () => r });
            var i = a(74631);
            let n = (0, i.createContext)({ config: [], isOnboardingOpened: null, setIsOnboardingOpened: () => {} }),
                r = () => (0, i.useContext)(n);
        },
        77174: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => r });
            var i = a(39004),
                n = a(56829);
            let r = (e, t) => {
                let { formatMessage: a } = (0, i.A)();
                if (e)
                    switch (t) {
                        case n._.AUDIOBOOK:
                            return a({ id: 'non-music.shelf-unsubscribe' });
                        case n._.FAIRY_TALE:
                            return a({ id: 'interface-actions.do-not-like' });
                        default:
                            return a({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case n._.AUDIOBOOK:
                        return a({ id: 'non-music.shelf-subscribe' });
                    case n._.FAIRY_TALE:
                        return a({ id: 'interface-actions.like' });
                    default:
                        return a({ id: 'interface-actions.subscribe' });
                }
            };
        },
        77501: (e) => {
            e.exports = { root: 'Timecode_root__TLT75', root_start: 'Timecode_root_start__pHG5N', root_end: 'Timecode_root_end__LLQsh' };
        },
        78299: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => N });
            var i = a(25839),
                n = a(82298),
                r = a(88204),
                s = a(74631),
                o = a(39004),
                l = a(8487);
            a(93588);
            var d = a(4071),
                c = a(66738),
                u = a(4254),
                _ = a(67379),
                m = a(36619),
                p = a(76945),
                v = a(59450),
                h = a(84e3),
                b = a(97952),
                x = a(89192),
                f = a(53712),
                g = a(15270),
                A = a(68854),
                C = a.n(A);
            let N = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { formatMessage: r } = (0, o.A)(),
                    A = r({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, v.st)(),
                        { hash: a } = (0, v.gf)(),
                        { pageId: i } = (0, b.$)(),
                        n = (0, h.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !a || !i) return;
                        let r = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: a,
                                pageId: i,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: n,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, p.z5)(t.evgenInstance, r);
                    }, [t, e, a, i, n]);
                })(A);
                let { sendRefreshEvent: N } = (function () {
                        let e = (0, v.st)(),
                            { hash: t } = (0, v.gf)(),
                            { pageId: a } = (0, b.$)(),
                            i = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !a) return;
                                let n = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: a,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                n && (0, p.bv)(e.evgenInstance, n);
                            }, [e, t, a, i]),
                        };
                    })(),
                    y = (0, s.useCallback)(() => {
                        (N(), (window.location.href = f.Z.main.href));
                    }, [N]),
                    { contentRef: T } = (0, x.g)();
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(C().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(g.L, { withBackwardFallback: '/', className: (0, n.$)(C().navigation, { [C().navigation_desktop]: !T }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, n.$)(C().content, { [C().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(c.I, { className: C().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.DZ, { className: (0, n.$)(C().title, C().important), variant: 'h3', size: 'xs', children: A }),
                                (0, i.jsxs)(u.HL, {
                                    className: (0, n.$)(C().text, C().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(d.$, {
                                    onClick: y,
                                    className: C().button,
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
        78401: (e) => {
            e.exports = {
                root: 'WithTopBanner_root__P__x3',
                banner: 'WithTopBanner_banner__x1Ia2',
                banner_canShow: 'WithTopBanner_banner_canShow__5KA30',
                content: 'WithTopBanner_content__6Vh7a',
            };
        },
        78978: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = (e) => 'object' == typeof e && null !== e && !Array.isArray(e) && 'source' in e && 'adfox' === e.source && 'type' in e && 'payload' in e;
        },
        79276: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => n, L: () => r });
            let i = (e, t) => e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
            var n = (function (e) {
                return ((e.TODAY = 'today'), (e.YESTERDAY = 'yesterday'), (e.DATE = 'date'), (e.DATE_WITH_YEAR = 'date-with-year'), e);
            })({});
            let r = (e) => {
                let t = new Date();
                if (i(t, e)) return 'today';
                let a = new Date();
                return (a.setDate(a.getDate() - 1), i(a, e)) ? 'yesterday' : t.getFullYear() !== e.getFullYear() ? 'date-with-year' : 'date';
            };
        },
        79497: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => r });
            var i = a(28410),
                n = a(73544);
            let r = (e) => {
                let t = (0, n.e)(e);
                return (0, i.wg)(t);
            };
        },
        80477: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => s });
            var i = a(25839),
                n = a(35015),
                r = a(10546);
            let s = (e) => {
                let { artist: t, closeToast: a } = e;
                return (0, i.jsx)(r.k, {
                    closeToast: a,
                    entityVariant: n.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        81024: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => n });
            var i = a(25895);
            let n = (e) => (0, i.u)('/album/:albumId', { params: { albumId: e } });
        },
        82289: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => n });
            var i = a(38097);
            let n = (e) => e.startsWith(i.nl);
        },
        83918: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => n });
            var i = a(74631);
            let n = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        84146: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            var i = (function (e) {
                return (
                    (e.VIDEO = 'VIDEO'),
                    (e.AUDIO = 'AUDIO'),
                    (e.TOP_BANNER = 'TOP_BANNER'),
                    (e.SIDE_BANNER = 'SIDE_BANNER'),
                    (e.TOUCH_BANNER = 'TOUCH_BANNER'),
                    (e.PLAYLIST_BRANDING = 'PLAYLIST_BRANDING'),
                    (e.AXE_ENTITY_BRANDING = 'AXE_ENTITY_BRANDING'),
                    (e.PLAYER_BRANDING = 'PLAYER_BRANDING'),
                    e
                );
            })({});
        },
        84925: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => V });
            var i = a(25839),
                n = a(88204),
                r = a(74631),
                s = a(71035),
                o = a(31927),
                l = a(79367),
                d = a(94041),
                c = a(42853),
                u = a(20258),
                _ = a(47009),
                m = a(65343),
                p = a(89209),
                v = a(20790),
                h = a(87201),
                b = a(30296),
                x = a(27954),
                f = a(76327),
                g = a(60025),
                A = a(49438),
                pulseSyncPlayerStore = a(27954),
                yellowExperimentIds = a(44806);
            let C = (e) => {
                let { disabled: t, isPlaying: a, onClickPlayPause: n, className: r } = e;
                return (0, i.jsx)(A.D, { className: r, size: 's', iconSize: 'xs', disabled: t, isPlaying: a, onClick: n });
            };
            var N = a(33074),
                y = a(82298),
                T = a(39004),
                S = a(61493),
                E = a(4071),
                B = a(66738),
                I = a(14930),
                j = a(45503),
                P = a(24907),
                k = a.n(P);
            let w = (0, n.PA)((e) => {
                let {
                        disabled: t,
                        isPlaying: a,
                        repeatMode: n,
                        canMoveForward: r,
                        canMoveBackward: s,
                        canRewind: o,
                        canShuffle: l,
                        onClickNext: d,
                        onClickPrev: c,
                        onRewindBackwardsClick: u,
                        onRewindForwardClick: _,
                        onClickPlayPause: m,
                        canChangeRepeatMode: p,
                        shuffle: v,
                        className: h,
                        onRepeatClick: b,
                        onShuffleClick: x,
                    } = e,
                    { formatMessage: f } = (0, T.A)(),
                    { experiments: pulseSyncExperiments } = (0, pulseSyncPlayerStore.g)(),
                    pulseSyncYellowButtonEnabled = pulseSyncExperiments.checkExperiment(yellowExperimentIds.z.WebNextPlayerBarYellowButton, 'on');
                return (0, i.jsxs)('div', {
                    className: (0, y.$)(k().root, h),
                    children: [
                        (0, i.jsxs)('div', {
                            className: k().buttonContainer,
                            children: [
                                (t || l) &&
                                    (0, i.jsx)(j.u, {
                                        className: k().sonataButton,
                                        size: 's',
                                        iconSize: 'xxs',
                                        color: 'secondary',
                                        isDisabled: t,
                                        shuffle: v,
                                        onClick: x,
                                        'data-test-id': S.Kq.sonata.SHUFFLE_BUTTON,
                                    }),
                                !t &&
                                    o &&
                                    (0, i.jsx)(E.$, {
                                        className: (0, y.$)(k().sonataButton, k().rewind),
                                        color: 'secondary',
                                        size: 'm',
                                        radius: 'round',
                                        withRipple: !1,
                                        'aria-label': f({ id: 'player-actions.rewind-backwards' }),
                                        icon: (0, i.jsx)(B.I, { variant: 'rewindBackwards', size: 'xxs' }),
                                        onClick: u,
                                        'data-test-id': S.Kq.sonata.REWIND_BACKWARDS_BUTTON,
                                    }),
                            ],
                        }),
                        (0, i.jsxs)('div', {
                            className: k().sonataButtons,
                            children: [
                                (0, i.jsx)(E.$, {
                                    className: k().sonataButton,
                                    color: 'secondary',
                                    size: 'm',
                                    radius: 'round',
                                    disabled: !s,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': f({ id: 'player-actions.previous-track' }),
                                    icon: (0, i.jsx)(B.I, { variant: 'previous', size: 'xxs' }),
                                    onClick: c,
                                    'data-test-id': S.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                }),
                                (0, i.jsx)(A.D, {
                                    className: (0, y.$)(k().sonataButton, k().sonataPlayButton),
                                    iconSize: 'm',
                                    size: 'l',
                                    radius: 'round',
                                    color: 'secondary',
                                    buttonVariant: 'default',
                                    isPlaying: a,
                                    iconClassName: (0, y.$)(k().playPauseButtonIcon, { [k().playPauseButtonIcon_withYellowPlayButton]: pulseSyncYellowButtonEnabled }),
                                    onClick: m,
                                }),
                                (0, i.jsx)(E.$, {
                                    className: k().sonataButton,
                                    radius: 'round',
                                    size: 'm',
                                    color: 'secondary',
                                    disabled: !r,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': f({ id: 'player-actions.next-track' }),
                                    icon: (0, i.jsx)(B.I, { variant: 'next', size: 'xxs' }),
                                    onClick: d,
                                    'data-test-id': S.Kq.sonata.NEXT_TRACK_BUTTON,
                                }),
                            ],
                        }),
                        (0, i.jsxs)('div', {
                            className: k().buttonContainer,
                            children: [
                                !t &&
                                    o &&
                                    (0, i.jsx)(E.$, {
                                        className: (0, y.$)(k().sonataButton, k().rewind),
                                        color: 'secondary',
                                        size: 'm',
                                        radius: 'round',
                                        withRipple: !1,
                                        'aria-label': f({ id: 'player-actions.rewind-forward' }),
                                        icon: (0, i.jsx)(B.I, { variant: 'rewindForward', size: 'xxs' }),
                                        onClick: _,
                                        'data-test-id': S.Kq.sonata.REWIND_FORWARD_BUTTON,
                                    }),
                                (t || p) &&
                                    (0, i.jsx)(I.s, {
                                        className: k().sonataButton,
                                        size: 's',
                                        color: 'secondary',
                                        isDisabled: t,
                                        iconSize: 'xxs',
                                        repeatMode: n,
                                        onClick: b,
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var L = a(22939),
                O = a(91472),
                D = a(17545),
                R = a(2204),
                M = a(64720),
                F = a(6304),
                U = a(40039),
                z = a.n(U);
            let W = (0, n.PA)((e) => {
                    let {
                            isPlaying: t,
                            canMoveForward: a,
                            canMoveBackward: n,
                            canRewind: s,
                            onClickNext: o,
                            onClickPrev: l,
                            onRewindBackwardsClick: d,
                            onRewindForwardClick: c,
                            onClickPlayPause: u,
                            className: _,
                        } = e,
                        { formatMessage: h } = (0, T.A)(),
                        { user: b, sonataState: f } = (0, x.g)(),
                        g = (0, v.z)(),
                        C = f.entityMeta,
                        N = f.contextType === L.K.Generative,
                        I = b.isAuthorized && !N,
                        j = (0, D.K)(f.entityMeta),
                        P = (0, O.m)(f.entityMeta);
                    (0, r.useEffect)(() => {
                        if (!f.isGenerativeContext)
                            return (
                                null == g || g.addShortcutsListener(p.M.MAIN, m.l.LIKE, j),
                                null == g || g.addShortcutsListener(p.M.MAIN, m.l.DISLIKE, P),
                                () => {
                                    (null == g || g.removeShortcutsListener(p.M.MAIN, m.l.LIKE), null == g || g.removeShortcutsListener(p.M.MAIN, m.l.DISLIKE));
                                }
                            );
                    }, [P, j, g, f.isGenerativeContext]);
                    let k = (0, r.useMemo)(
                            () =>
                                s
                                    ? (0, i.jsx)(E.$, {
                                          className: z().sonataButton,
                                          variant: 'text',
                                          color: 'secondary',
                                          size: 'm',
                                          radius: 'round',
                                          withRipple: !1,
                                          'aria-label': h({ id: 'player-actions.rewind-backwards' }),
                                          icon: (0, i.jsx)(B.I, { variant: 'rewindBackwards', size: 'xs' }),
                                          onClick: d,
                                          'data-test-id': S.Kq.sonata.MOBILE_REWIND_BACKWARDS_BUTTON,
                                      })
                                    : (0, i.jsx)(E.$, {
                                          className: z().sonataButton,
                                          variant: 'text',
                                          color: 'secondary',
                                          size: 'm',
                                          radius: 'round',
                                          disabled: !n,
                                          focusableWhenDisabled: !0,
                                          withRipple: !1,
                                          'aria-label': h({ id: 'player-actions.previous-track' }),
                                          icon: (0, i.jsx)(B.I, { variant: 'previous', size: 'xs' }),
                                          onClick: l,
                                          'data-test-id': S.Kq.sonata.MOBILE_PREVIOUS_TRACK_BUTTON,
                                      }),
                            [s, n, h, l, d],
                        ),
                        w = (0, r.useMemo)(
                            () =>
                                s
                                    ? (0, i.jsx)(E.$, {
                                          className: z().sonataButton,
                                          variant: 'text',
                                          radius: 'round',
                                          size: 'm',
                                          color: 'secondary',
                                          disabled: !a,
                                          focusableWhenDisabled: !0,
                                          withRipple: !1,
                                          'aria-label': h({ id: 'player-actions.rewind-forward' }),
                                          icon: (0, i.jsx)(B.I, { variant: 'rewindForward', size: 'xs' }),
                                          onClick: c,
                                          'data-test-id': S.Kq.sonata.MOBILE_REWIND_FORWARD_BUTTON,
                                      })
                                    : (0, i.jsx)(E.$, {
                                          className: z().sonataButton,
                                          variant: 'text',
                                          radius: 'round',
                                          size: 'm',
                                          color: 'secondary',
                                          disabled: !a,
                                          focusableWhenDisabled: !0,
                                          withRipple: !1,
                                          'aria-label': h({ id: 'player-actions.next-track' }),
                                          icon: (0, i.jsx)(B.I, { variant: 'next', size: 'xs' }),
                                          onClick: o,
                                          'data-test-id': S.Kq.sonata.MOBILE_NEXT_TRACK_BUTTON,
                                      }),
                            [s, a, h, o, c],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, y.$)(z().root, _),
                        children: [
                            (0, i.jsx)('div', {
                                className: z().buttonContainer,
                                children: C && I && (0, i.jsx)(F.WithOffline, { fallback: (0, i.jsx)(R._, { isDisliked: C.isDisliked, iconSize: 'xs', onClick: P }) }),
                            }),
                            (0, i.jsxs)('div', {
                                className: z().sonataButtons,
                                children: [
                                    k,
                                    (0, i.jsx)(A.D, {
                                        className: z().sonataButton,
                                        iconSize: 'xxl',
                                        variant: 'filled',
                                        color: 'secondary',
                                        isPlaying: t,
                                        iconClassName: z().playPauseButtonIcon,
                                        onClick: u,
                                    }),
                                    w,
                                ],
                            }),
                            (0, i.jsx)('div', {
                                className: z().buttonContainer,
                                children:
                                    C &&
                                    I &&
                                    (0, i.jsx)(F.WithOffline, {
                                        fallback: (0, i.jsx)(M.c, { isLiked: C.isLiked, iconSize: 'xs', onClick: j, disabled: !b.isAuthorized }),
                                    }),
                            }),
                        ],
                    });
                }),
                V = (0, n.PA)((e) => {
                    var t, a;
                    let { isMobile: n, entityMeta: A, isFullscreen: pulseSyncIsFullscreen, className: T, withShuffle: S, withRepeat: E } = e,
                        { sonataState: B, vibe: I, advert: j, freePlayerAccess: P, experiments: pulseSyncExperiments } = (0, x.g)(),
                        pulseSyncYellowButtonEnabled = pulseSyncExperiments.checkExperiment(yellowExperimentIds.z.WebNextPlayerBarYellowButton, 'on'),
                        k = (0, v.z)(),
                        L = (0, b.e)(),
                        { rewindBackwards: O, rewindForward: D } = (() => {
                            let {
                                    sonataState: { entityMeta: e },
                                } = (0, x.g)(),
                                t = (0, b.e)();
                            return {
                                rewindBackwards: (0, r.useCallback)(() => {
                                    if (!t || !e || !e.durationMs) return;
                                    let a = t.state.playerState.progress.value.position - 15;
                                    t.setProgress(a < 0 ? 0 : a);
                                }, [e, t]),
                                rewindForward: (0, r.useCallback)(() => {
                                    if (!t || !e || !e.durationMs) return;
                                    let a = e.durationMs / 1e3,
                                        i = t.state.playerState.progress.value.position + 30;
                                    t.setProgress(i < a ? i : a);
                                }, [e, t]),
                            };
                        })(),
                        R = (0, d.r)(),
                        M = (0, _.b)(),
                        F = (null == A ? void 0 : A.isNonMusic) && !j.isAdvertShown,
                        U = (0, l.P)(),
                        { togglePlay: z } = (0, h.B)({
                            seeds: null != (a = null == (t = I.meta) ? void 0 : t.seeds) ? a : [],
                            pageIdForFrom: u._Q.HOME,
                            blockIdForFrom: c.h.RUP_MAIN_RADIO,
                            onPlayInterrupted: () => P.showRestrictionModal(o.W.Interrupted),
                        }),
                        V = (0, r.useMemo)(() => (j.isAdvertShown ? j.isAdvertPlaying : B.isPlaying), [j.isAdvertShown, j.isAdvertPlaying, B.isPlaying]),
                        H = (0, s.c)(() => {
                            if (j.isAdvertShown) {
                                var e;
                                null == R || null == (e = R.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            A ? null == L || L.togglePause() : z();
                        }),
                        K = (0, s.c)(() => {
                            (pulseSyncIsFullscreen && U()) || (H(), M(!V));
                        }),
                        G = (0, s.c)(() => {
                            null == L || L.moveForward();
                        }),
                        $ = (0, s.c)(() => {
                            null == L || L.moveBackward();
                        }),
                        Y = (0, g.e)(),
                        q = (0, f.A)(),
                        Z = (0, s.c)(() => {
                            q(B);
                        }),
                        X = (0, s.c)(() => {
                            Y(B);
                        });
                    (0, r.useEffect)(() => {
                        if (!pulseSyncIsFullscreen && (null == k || k.addShortcutsListener(p.M.MAIN, m.l.TOGGLE_PLAY, H), !j.isAdvertShown))
                            return (
                                null == k || k.addShortcutsListener(p.M.MAIN, m.l.TOGGLE_REPEAT, Z),
                                null == k || k.addShortcutsListener(p.M.MAIN, m.l.TOGGLE_SHUFFLE, X),
                                () => {
                                    (null == k || k.removeShortcutsListener(p.M.MAIN, m.l.TOGGLE_PLAY),
                                        j.isAdvertShown ||
                                            (null == k || k.removeShortcutsListener(p.M.MAIN, m.l.TOGGLE_SHUFFLE),
                                            null == k || k.removeShortcutsListener(p.M.MAIN, m.l.TOGGLE_REPEAT)));
                                }
                            );
                    }, [pulseSyncIsFullscreen, H, Z, X, k, j.isAdvertShown]);
                    let Q = (0, r.useMemo)(() => (pulseSyncIsFullscreen ? (n ? W : w) : n ? C : N.Z), [n, pulseSyncIsFullscreen]);
                    return (0, i.jsx)(Q, {
                        className: (0, y.$)(T, { SonataControls_root__w8uqu: pulseSyncYellowButtonEnabled }),
                        disabled: null === B.entityMeta || (j.isAdvertShown && !n),
                        isPlaying: V || !1,
                        canMoveBackward: B.canMoveBackward && !j.isAdvertShown,
                        canMoveForward: B.canMoveForward && !j.isAdvertShown,
                        withShuffle: S,
                        withRepeat: E,
                        canShuffle: B.canShuffle,
                        shuffle: B.shuffle,
                        onClickPlayPause: K,
                        onClickNext: G,
                        onClickPrev: $,
                        canRewind: F,
                        onRewindBackwardsClick: O,
                        onRewindForwardClick: D,
                        canChangeRepeatMode: B.canChangeRepeatMode,
                        repeatMode: B.repeatMode,
                        onRepeatClick: Z,
                        onShuffleClick: X,
                    });
                });
        },
        85011: (e) => {
            e.exports = {
                root: 'CommonLayout_root__WC_W1',
                root_withAxeBanner: 'CommonLayout_root_withAxeBanner__2_ep2',
                content: 'CommonLayout_content__zy_Ja',
                content_withPlayerBar: 'CommonLayout_content_withPlayerBar__wTpoS',
                content_withAxeBanner: 'CommonLayout_content_withAxeBanner__gmyVS',
                playerBar: 'CommonLayout_playerBar__zXRxq',
                compositePlayerBar: 'CommonLayout_compositePlayerBar__hjZRp',
                compositePlayerBar_withNewVibe: 'CommonLayout_compositePlayerBar_withNewVibe__taMVb',
            };
        },
        85925: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedPlusBar_root___wH9W',
                button: 'NavbarDesktopAnimatedPlusBar_button__IX7L4',
                important: 'NavbarDesktopAnimatedPlusBar_important__7R916',
                icon: 'NavbarDesktopAnimatedPlusBar_icon__9lTgJ',
            };
        },
        86209: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => c });
            var i = a(25839),
                n = a(82298),
                r = a(50314),
                s = a(49656),
                o = a(6349),
                l = a(4111),
                d = a.n(l);
            let c = (e) => {
                let {
                        agent: t,
                        isPlaying: a,
                        isCurrent: l,
                        onPlayButtonClick: c,
                        shouldShowControl: u = !0,
                        playButtonIconSize: _,
                        alt: m,
                        className: p,
                        coverClassName: v,
                        entityCoverClassName: h,
                        controlClassName: b,
                        fallbackIconSize: x,
                    } = e,
                    f = (0, s.L)(() => {
                        if (t.entityType) return t.entityType === r.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, i.jsx)(o.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, n.$)(d().root, d()['root_radius_'.concat(f)], { [d().root_withShadow]: !!t.entityType }, p),
                    radius: f,
                    onPlayButtonClick: c,
                    isPlaying: a,
                    isCurrent: l,
                    alt: m,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: _,
                    fallbackIconSize: x,
                    coverClassName: v,
                    entityCoverClassName: h,
                    controlClassName: b,
                });
            };
        },
        86590: (e) => {
            e.exports = {
                root: 'BarBelow_root__KFexT',
                root_hidden: 'BarBelow_root_hidden__eTKvU',
                root_show: 'BarBelow_root_show__yIQBX',
                show: 'BarBelow_show__5GQBP',
                root_hide: 'BarBelow_root_hide__d1a_5',
                hide: 'BarBelow_hide__a0dwD',
                image: 'BarBelow_image__GfExj',
                content: 'BarBelow_content__GWWbR',
                title: 'BarBelow_title__hBNPY',
                text: 'BarBelow_text__tU_Rm',
                buttons: 'BarBelow_buttons__XGwDQ',
                advDisclaimer: 'BarBelow_advDisclaimer__ZbpQU',
                advDisclaimerTrigger: 'BarBelow_advDisclaimerTrigger___O0bh',
                advDisclaimerContent: 'BarBelow_advDisclaimerContent__lKKit',
                advDisclaimerInner: 'BarBelow_advDisclaimerInner__1CyNr',
                advDisclaimerText: 'BarBelow_advDisclaimerText__wJgZZ',
            };
        },
        86966: (e) => {
            e.exports = { root: 'FullscreenPlayerDesktopButton_root__qGgoC', button: 'FullscreenPlayerDesktopButton_button__7NEl6' };
        },
        87118: (e) => {
            e.exports = {
                headingContainer: 'BuySubscriptionBenefitsContent_headingContainer__euBSr',
                heading: 'BuySubscriptionBenefitsContent_heading__xx64Z',
                offerHeading: 'BuySubscriptionBenefitsContent_offerHeading__58HWj',
                entityCover: 'BuySubscriptionBenefitsContent_entityCover__0zowc',
                entityTitle: 'BuySubscriptionBenefitsContent_entityTitle__gA8J2',
                benefits: 'BuySubscriptionBenefitsContent_benefits__HK41W',
                benefitItem: 'BuySubscriptionBenefitsContent_benefitItem__sYkCL',
                benefitIcon: 'BuySubscriptionBenefitsContent_benefitIcon__VczZK',
                benefitImage: 'BuySubscriptionBenefitsContent_benefitImage__LVU2a',
                benefitText: 'BuySubscriptionBenefitsContent_benefitText__stotu',
                benefitDivider: 'BuySubscriptionBenefitsContent_benefitDivider__uELk3',
                button: 'BuySubscriptionBenefitsContent_button__vNi8i',
                loginContainer: 'BuySubscriptionBenefitsContent_loginContainer__ov5gH',
                bonusText: 'BuySubscriptionBenefitsContent_bonusText__nzIej',
                giftIcon: 'BuySubscriptionBenefitsContent_giftIcon__1bL51',
                oneClickDisclaimerText: 'BuySubscriptionBenefitsContent_oneClickDisclaimerText__k5W_A',
            };
        },
        87206: (e) => {
            e.exports = {
                root: 'DeeplinkAndOnelinkContainer_root__69SNc',
                button: 'DeeplinkAndOnelinkContainer_button__QzMwG',
                buttonTitle: 'DeeplinkAndOnelinkContainer_buttonTitle__KmdNV',
                buttonIcon: 'DeeplinkAndOnelinkContainer_buttonIcon__U6JJv',
                musicIcon: 'DeeplinkAndOnelinkContainer_musicIcon__jIu2m',
                onelinkIcon: 'DeeplinkAndOnelinkContainer_onelinkIcon__ELZLH',
            };
        },
        88280: (e) => {
            e.exports = { root: 'TopAdvertBanner_root__aAZ0o', root_hidden: 'TopAdvertBanner_root_hidden__l3FTx', advert: 'TopAdvertBanner_advert__LjAj_' };
        },
        89192: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => n, g: () => r });
            var i = a(74631);
            let n = (0, i.createContext)({
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
                r = () => (0, i.useContext)(n);
        },
        89725: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => s, E9: () => d, KZ: () => l, LB: () => o, RA: () => n, kz: () => r, r_: () => c, w_: () => i });
            let i = { pp: 'g', ps: 'clni', p2: 'jjwl', puid1: '', puid2: '', puid3: '' },
                n = { pp: 'g', ps: 'clni', p2: 'jjzh', puid1: '', puid2: '', puid3: '' },
                r = { p1: 'dkreo', p2: 'jozm', puid1: '', puid2: '', puid3: '' },
                s = { p1: 'dlnfl', p2: 'jpzb', puid1: '', puid2: '', puid3: '' },
                o = 'adfox_173998931315812570',
                l = 'adfox_174043316511852570',
                d = 'adfox_176504636866914259',
                c = 'adfox_176053846725924259';
        },
        89779: (e) => {
            e.exports = {
                wrapper: 'RedAlert_wrapper__rGvGN',
                root: 'RedAlert_root__1VZOr',
                root_light: 'RedAlert_root_light__j7Kr3',
                text: 'RedAlert_text__UB_Bq',
                button: 'RedAlert_button__Ho43z',
            };
        },
        90613: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => _ });
            var i = a(25839),
                n = a(33660),
                r = a(74631),
                s = a(39004),
                o = a(91149),
                l = a(92942),
                d = a(27954),
                c = a(57549),
                u = a(80477);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: a } = (0, l.l)(),
                    { formatMessage: _ } = (0, s.A)(),
                    [m, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void a((0, i.jsx)(c.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, n.HO)(e), isPinned: !e.isPinned };
                    p(!0);
                    let s = await e.togglePin();
                    (p(!1),
                        s
                            ? a((0, i.jsx)(u.l, { artist: r }), { containerId: o.u.INFO })
                            : a((0, i.jsx)(c.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, m, _, a]);
            };
        },
        90750: (e) => {
            e.exports = {
                contextMenu: 'PinItem_contextMenu__VwiFp',
                contextMenu_visible: 'PinItem_contextMenu_visible__Zgwkh',
                root: 'PinItem_root__WSoCn',
                image: 'PinItem_image__Ow56U',
                cover: 'PinItem_cover__9TcjE',
                tooltip: 'PinItem_tooltip__BGwBw',
                multivibeContainer: 'PinItem_multivibeContainer__M3tj_',
                multivibeCover: 'PinItem_multivibeCover__QykrX',
                multivibeAvatar: 'PinItem_multivibeAvatar__2WWq4',
                multivibeControl: 'PinItem_multivibeControl__uw80u',
            };
        },
        90780: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => d });
            var i = a(25839),
                n = a(74631),
                r = a(61493),
                s = a(4254),
                o = a(44408),
                l = a.n(o);
            let d = (e) => {
                let { getDescriptionTexts: t, entityId: a } = e,
                    [o, d] = (0, n.useState)(null);
                if (
                    ((0, n.useEffect)(() => {
                        t && t().then(d);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, i.jsx)(
                            s.HL,
                            {
                                className: l().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': r.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(a, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        91062: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return ((e.ARTIST_DONATION_BUTTON = 'artist_donation_button'), (e.TRAILER_BUTTON = 'trailer_button'), (e.CONCERTS_TAB = 'concerts_tab'), e);
            })({});
        },
        91842: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => f });
            var i = a(25839),
                n = a(82298),
                r = a(88204),
                s = a(74631),
                o = a(61493),
                l = a(92892),
                d = a(71035),
                c = a(68934),
                u = a(49656),
                _ = a(4071),
                m = a(4254),
                p = a(97828),
                v = a(85686),
                h = a(27954),
                b = a(5520),
                x = a.n(b);
            let f = (0, r.PA)((e) => {
                var t, a, r, b;
                let { anchorId: f, screenId: g, button: A, buttonSize: C, buttonClassName: N, textClassName: y, feedbackToken: T, hide: S } = e,
                    { communication: E } = (0, h.g)(),
                    [B] = (0, c.d)(),
                    { openPaymentWidgetModal: I } = (0, p.D)({
                        storeName: 'music',
                        communicationId: null != (b = null == (t = A.action) ? void 0 : t.communicationId) ? b : '',
                        offerElement: { element: B, intersectionPropertyId: 'barbellow' },
                        isEnabled: !!(null == (a = A.action) ? void 0 : a.communicationId),
                    }),
                    j = ((null == (r = A.action) ? void 0 : r.type) === l.T.LINK && A.action.value) || '',
                    P = (0, v.Z)(j),
                    k = (0, d.c)((e) => {
                        if (A.action)
                            switch ((f && g && A.action.id && E.action(f, g, A.action.id, T), A.action.type)) {
                                case l.T.PAYWALL:
                                    (I(), null == S || S());
                                    return;
                                case l.T.LINK:
                                    A.action.value && (P(e), null == S || S());
                                    return;
                                case l.T.CLOSE:
                                    null == S || S();
                                    return;
                            }
                    }),
                    w = (0, s.useMemo)(() => {
                        if (A.textColor) return { color: A.textColor };
                    }, [A.textColor]),
                    L = (0, u.L)(() => {
                        var e;
                        switch (null == (e = A.action) ? void 0 : e.type) {
                            case l.T.LINK:
                                return o.OA.communicationButton.COMMUNICATION_BUTTON_LINK;
                            case l.T.CLOSE:
                                return o.OA.communicationButton.COMMUNICATION_BUTTON_CLOSE;
                            default:
                                return o.OA.communicationButton.COMMUNICATION_BUTTON_PAYWALL;
                        }
                    });
                return (0, i.jsx)(_.$, {
                    className: (0, n.$)(x().root, x()['root_'.concat(A.color)], N),
                    role: j ? 'link' : 'button',
                    color: A.color ? A.color : void 0,
                    radius: 'xxxl',
                    onClick: k,
                    size: C,
                    'data-test-id': L,
                    children: (0, i.jsx)(m.HL, { className: (0, n.$)(x().text, y), variant: 'div', type: 'text', size: 'm', style: w, children: A.text }),
                });
            });
        },
        92057: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => o, r: () => l });
            var i = a(18760),
                n = a(28410),
                r = a(48552);
            let s = n.gK.model('CustomPlayerThumbItem', { id: n.gK.enumeration(Object.values(i.T)), name: n.gK.string, thumb: r.K }),
                o = {
                    [i.T.DUCK]: () =>
                        a
                            .e(8962)
                            .then(a.t.bind(a, 68962, 17))
                            .then((e) => e.default),
                    [i.T.CAR]: () =>
                        a
                            .e(8765)
                            .then(a.t.bind(a, 68765, 17))
                            .then((e) => e.default),
                },
                l = (e) =>
                    new Map([
                        [i.T.DUCK, s.create({ id: i.T.DUCK, name: e({ id: 'branded-player.duck' }), thumb: { href: i.T.DUCK, width: 50, height: 50 } })],
                        [i.T.CAR, s.create({ id: i.T.CAR, name: e({ id: 'branded-player.car' }), thumb: { href: i.T.CAR, width: 143, height: 38 } })],
                    ]);
        },
        92496: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => i });
            var i = (function (e) {
                return ((e.ANDROID = 'Android'), (e.IOS = 'iOS'), (e.MACOS = 'MacOS'), (e.WINDOWS = 'Windows'), e);
            })({});
        },
        92511: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => r });
            var i = a(74631),
                n = a(33971);
            let r = () => (0, i.useContext)(n.G);
        },
        92657: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => o });
            var i = a(25839),
                n = a(88204),
                r = a(10546),
                s = a(73182);
            let o = (0, n.PA)((e) => {
                let { album: t, closeToast: a } = e,
                    n = (0, s.b)(t.type);
                return (0, i.jsx)(r.k, {
                    closeToast: a,
                    entityVariant: n,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            });
        },
        92870: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        92892: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { T: () => i }),
                (function (e) {
                    ((e.CLOSE = 'close'), (e.LINK = 'link'), (e.PAYWALL = 'paywall'));
                })(i || (i = {})));
        },
        93011: (e, t, a) => {
            'use strict';
            ((t.U0 = function (e, t) {
                let { skeletonId: a = '', mainObjectType: r = n.DomainObjectType.NonApplicable, mainObjectId: s = '' } = t,
                    o = (0, i.makeMetaParams)(2),
                    l = { ...t, skeletonId: a, mainObjectType: r, mainObjectId: s, _meta: o };
                e.trackEvent('Sidebar.Opened', l);
            }),
                (t.dL = function (e, t) {
                    let { skeletonId: a = '', mainObjectType: r = n.DomainObjectType.NonApplicable, mainObjectId: s = '' } = t,
                        o = (0, i.makeMetaParams)(1),
                        l = { ...t, skeletonId: a, mainObjectType: r, mainObjectId: s, _meta: o };
                    e.trackEvent('Sidebar.ActionPerformed', l);
                }),
                (t.qi = function (e, t) {
                    let { skeletonId: a = '', mainObjectType: r = n.DomainObjectType.NonApplicable, mainObjectId: s = '' } = t,
                        o = (0, i.makeMetaParams)(1),
                        l = { ...t, skeletonId: a, mainObjectType: r, mainObjectId: s, _meta: o };
                    e.trackEvent('Sidebar.Navigated', l);
                }),
                (t.cV = function (e, t) {
                    let { skeletonId: a = '', mainObjectType: r = n.DomainObjectType.NonApplicable, mainObjectId: s = '' } = t,
                        o = (0, i.makeMetaParams)(1),
                        l = { ...t, skeletonId: a, mainObjectType: r, mainObjectId: s, _meta: o };
                    e.trackEvent('Sidebar.Started', l);
                }));
            let i = a(26895),
                n = a(36619);
        },
        93297: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => o });
            var i = a(25839),
                n = a(88204),
                r = a(3163),
                s = a(73182);
            let o = (0, n.PA)((e) => {
                let { album: t, closeToast: a, withLink: n } = e,
                    o = (0, s.b)(t.type);
                return (0, i.jsx)(r.O, {
                    closeToast: a,
                    entityVariant: o,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: n,
                });
            });
        },
        93510: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        93935: (e) => {
            e.exports = { root: 'MuzmarketTitle_root___tr35', badge: 'MuzmarketTitle_badge__d3Xuz' };
        },
        94484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        94837: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => c });
            var i = a(84059),
                n = a(71872),
                r = a(71035),
                s = a(49656),
                o = a(92496),
                l = a(25895);
            let d = /[^\w\-./:?=&[\]%]/gi,
                c = (e) => {
                    let { browserInfo: t, login: a } = e,
                        c = (0, i.useSearchParams)(),
                        u = (0, s.L)(() => {
                            var e;
                            let a = parseFloat(null != (e = null == t ? void 0 : t.version) ? e : '');
                            return (null == t ? void 0 : t.OSFamily) === o.j.IOS
                                ? a >= 16
                                : (null == t ? void 0 : t.OSFamily) === o.j.ANDROID
                                  ? a >= 7
                                  : null == t
                                    ? void 0
                                    : t.inAppBrowser;
                        });
                    return (0, r.c)((e) =>
                        u && e
                            ? ((e, t, a) => {
                                  let i = e.get('deeplink_url'),
                                      r = e.get('channel'),
                                      s = e.get('tags'),
                                      o = { campaign: 'yamusicweb', channel: null != r ? r : 'musicmain', deep_link_value: t, af_dp: t };
                                  if ((a && (o.login = a), i)) {
                                      let e = ''.concat(n.ov).concat(i);
                                      ((o.deep_link_value = e), (o.af_dp = e), (o.deeplink_url = i));
                                  }
                                  s && (o.pid = s);
                                  let c = Object.keys(o).reduce((e, t) => {
                                          let a = o[t];
                                          if (void 0 !== a) {
                                              let i = ((e) => ('string' == typeof e ? e.replace(d, '') : ''))(a);
                                              i && (e[t] = i);
                                          }
                                          return e;
                                      }, {}),
                                      { href: u } = (0, l.u)('/', { query: c, options: { host: 'https://music.onelink.me/VkDa' } });
                                  return u;
                              })(c, e, a)
                            : ((e) => {
                                  if (e === o.j.IOS) {
                                      let { href: e } = (0, l.u)('/ru/app/andeks.muzyka/id520797969', {
                                          query: { mt: 8, uo: 4, at: '1000lqjf', ct: 'music' },
                                          options: { host: 'https://itunes.apple.com' },
                                      });
                                      return e;
                                  }
                                  if (e === o.j.ANDROID) {
                                      let { href: e } = (0, l.u)('/store/apps/details', {
                                          query: { id: 'ru.yandex.music' },
                                          options: { host: 'https://play.google.com' },
                                      });
                                      return e;
                                  }
                                  let { href: t } = (0, l.u)('/apps', { options: { host: 'https://music.yandex.ru' } });
                                  return t;
                              })(null == t ? void 0 : t.OSFamily),
                    );
                };
        },
        95107: (e) => {
            e.exports = {
                timecode: 'TimecodeGroup_timecode__IJXpy',
                timecode_current: 'TimecodeGroup_timecode_current__wv9pb',
                timecode_current_animation: 'TimecodeGroup_timecode_current_animation__kZUW_',
                timecode_current_hidden: 'TimecodeGroup_timecode_current_hidden__D88_K',
                timecode_end: 'TimecodeGroup_timecode_end__kzP5g',
                timecode_end_hidden: 'TimecodeGroup_timecode_end_hidden__BxQ5h',
            };
        },
        95827: (e) => {
            e.exports = {
                root: 'NavbarDesktopPlusBar_root__QgKqJ',
                logos: 'NavbarDesktopPlusBar_logos__kKKEl',
                addition: 'NavbarDesktopPlusBar_addition__vluXf',
                title: 'NavbarDesktopPlusBar_title__mMdem',
                buttons: 'NavbarDesktopPlusBar_buttons__40_1A',
            };
        },
        96618: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => n, W: () => r });
            var i = a(74631);
            let n = (0, i.createContext)({ theme: null, setTheme: () => {} }),
                r = () => (0, i.useContext)(n);
        },
        97109: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return ((e.EMPTY = 'empty'), (e.DIRECT = 'direct'), (e.CREATIVE = 'creative'), (e.BRANDING = 'branding'), e);
            })({});
        },
        97762: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { p: () => i }),
                (function (e) {
                    ((e.WEB_MAIN = 'web_main'),
                        (e.MAIN = 'main'),
                        (e.WEB_COLLECTION = 'web_collection'),
                        (e.NON_MUSIC = 'non_music'),
                        (e.KIDS = 'kids'),
                        (e.MAIN_NOLOGIN = 'main_nologin'),
                        (e.SEARCH = 'Search'),
                        (e.ARTIST = 'artist_web'),
                        (e.CONCERTS = 'concerts'),
                        (e.CONCERT_PAGE = 'concert_page'));
                })(i || (i = {})));
        },
        97779: (e) => {
            e.exports = {
                root: 'NotificationPin_root__DBEub',
                view: 'NotificationPin_view__daGc_',
                image: 'NotificationPin_image__o5F7B',
                multivibeContainer: 'NotificationPin_multivibeContainer__ZbXhn',
                multivibeCover: 'NotificationPin_multivibeCover__n_5EZ',
                multivibeAvatar: 'NotificationPin_multivibeAvatar__4P5gm',
                multivibeControl: 'NotificationPin_multivibeControl__iOOyQ',
            };
        },
        97975: (e) => {
            e.exports = {
                root: 'BaseSonataControlsDesktop_root__E6wjA',
                sonataButtons: 'BaseSonataControlsDesktop_sonataButtons__7vLtw',
                sonataButton: 'BaseSonataControlsDesktop_sonataButton__GbwFt',
                playButtonIcon: 'BaseSonataControlsDesktop_playButtonIcon__TlFqv',
                buttonContainer: 'BaseSonataControlsDesktop_buttonContainer__EB404',
            };
        },
        98436: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { _: () => i }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(i || (i = {})));
        },
        98948: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => n, l: () => i });
            let i = 'yandex_rtb',
                n = 256152;
        },
        99200: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedDownloadBarMinimized_root__nEPqZ',
                icon: 'NavbarDesktopAnimatedDownloadBarMinimized_icon__Y2hec',
                button: 'NavbarDesktopAnimatedDownloadBarMinimized_button__hesBw',
            };
        },
        99835: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => n });
            var i = a(40207);
            let n = (e) => {
                let { album: t, callback: a, shouldHistoryBack: n } = e;
                return (0, i.l)({ entity: t, callback: a, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
    },
]);
