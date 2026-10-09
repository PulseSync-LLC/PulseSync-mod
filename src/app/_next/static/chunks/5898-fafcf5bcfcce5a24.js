(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5898],
    {
        4331: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => W });
            var r = i(25839),
                s = i(82298),
                a = i(88204),
                n = i(74631),
                l = i(49656),
                o = i(3392),
                d = i(19410),
                c = i(71035),
                u = i(27954),
                _ = i(39528);
            let m = (e, t) => {
                let { withLink: i, separator: r } = t,
                    s = i && !e.various ? (0, _.R)(e.id) : null;
                return { artist: e, name: e.name, separator: r, link: s };
            };
            var p = i(94484),
                h = i.n(p),
                v = i(61493),
                A = i(4254),
                x = i(97522),
                C = i(39004),
                b = i(36619),
                g = i(29481),
                k = i(85686),
                N = i(85743),
                T = i(40207);
            let f = (0, a.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: s, captionSize: a = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: d } = e,
                        {
                            name: _,
                            link: m,
                            title: p,
                            ariaLabel: h,
                            tooltipText: f,
                            isTooltipEnabled: y,
                            handleNavigate: j,
                        } = ((e) => {
                            var t, i;
                            let { item: r, allArtistsTitle: s, withCustomTooltip: a } = e,
                                { formatMessage: n } = (0, C.A)(),
                                {
                                    track: l,
                                    settings: { isMobile: o },
                                } = (0, u.g)(),
                                d = (0, k.Z)(null != (i = null == (t = r.link) ? void 0 : t.href) ? i : r.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, N.z)(),
                                m = (0, g.N)(),
                                p = (0, c.c)((e) => {
                                    (o && l.isOpened && l.close(), d(e));
                                }),
                                h = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: r, fullscreenPlayer: s, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: n } = r;
                                    return (0, T.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (r.reset(), n.close()), s.modal.isOpened && s.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: r.artist, callback: p }),
                                v = (0, c.c)((e) => {
                                    (m({ to: b.AppScreen.ArtistScreen }), null == _ || _(), h(e));
                                }),
                                A = s || r.name;
                            return {
                                name: r.name,
                                link: r.link,
                                title: a ? void 0 : A,
                                ariaLabel: r.link ? n({ id: 'entity-names.artist-name' }, { artistName: r.name }) : void 0,
                                tooltipText: A,
                                isTooltipEnabled: !s && a,
                                handleNavigate: v,
                            };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: l });
                    return m
                        ? (0, r.jsx)(x.N, {
                              ...m,
                              'aria-label': h,
                              className: i,
                              onClick: j,
                              title: p,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(o.m_, {
                                  enabled: y,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: f,
                                  hoverSettings: d,
                                  children: (0, r.jsx)(A.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: s, children: _ }),
                              }),
                          })
                        : (0, r.jsx)(o.m_, {
                              enabled: y,
                              offsetOptions: 4,
                              placement: 'top',
                              text: f,
                              hoverSettings: d,
                              children: (0, r.jsx)(A.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: s,
                                  title: p,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                y = (e) => {
                    let { group: t, linkClassName: i, captionClassName: s, captionSize: a, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: d } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, r.jsx)(f, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: s,
                                captionSize: a,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: d,
                            }),
                            t.decomposed.map((e) =>
                                (0, r.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, r.jsx)(f, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: s,
                                                captionSize: a,
                                                allArtistsTitle: l,
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
                S = i(9079);
            let L = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: a } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(S.N, {
                            role: 'button',
                            href: '',
                            className: (0, s.$)(h().spoiler, i),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(j.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var E = i(28631),
                I = i(89761),
                O = i(61912),
                w = i(36286),
                M = i.n(w);
            let R = (0, a.PA)((e) => {
                    let { label: t, artists: i, forwardRef: s } = e;
                    return (0, r.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, I.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: s, children: t }),
                            (0, r.jsx)(o.ZI, { className: M().tooltipContent, children: i.map((e) => (0, r.jsx)(O.V, { artist: e, className: M().artistItem }, e.id)) }),
                        ],
                    });
                }),
                P = (0, n.forwardRef)((e, t) => (0, r.jsx)(R, { forwardRef: t, ...e }));
            var z = i(10820),
                B = i(93510),
                D = i.n(B);
            let U = (0, a.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: a } = (0, C.A)();
                    return (0, r.jsx)(z.W1, {
                        isMobile: !0,
                        className: (0, s.$)(D().root, D().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(O.V, { artist: e }, e.id)),
                    });
                }),
                K = (0, a.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: s } = e,
                        [a, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, u.g)(),
                        _ = (0, c.c)(() => {
                            let e = s.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, l.L)(() =>
                            (0, E.A)(() => {
                                _();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                _(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, _],
                        ),
                        (0, n.useEffect)(() => {
                            _();
                        }, [t, _]),
                        0 !== t.length)
                    )
                        return (a || d) && (!d || 1 !== t.length) ? (d ? (0, r.jsx)(U, { artists: t, label: i }) : (0, r.jsx)(P, { artists: t, label: i })) : i;
                }),
                W = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: a,
                            linkClassName: _,
                            captionClassName: p,
                            captionSize: v,
                            variant: A = 'breakAll',
                            spoilerComponent: x,
                            ...C
                        } = e,
                        b = ((e) => {
                            var t, i, r;
                            let { separator: s, visibleArtistsCount: a, withLink: l, withComposer: o, artistIdWithoutLink: d, withContextMenu: _ } = e,
                                p = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                v = null == (r = e.withCustomTooltip) || r,
                                A = (0, n.useRef)(null),
                                [x, C] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: b },
                                } = (0, u.g)(),
                                g = ((!b || 1 === p.length) && _) || !_,
                                k = ((e, t) => {
                                    var i, r, s;
                                    let a = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        n = null == (r = null == t ? void 0 : t.withLink) || r,
                                        l = null != (s = null == t ? void 0 : t.separator) ? s : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(l),
                                        { visibleArtists: d, hiddenArtistsCount: c } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: r } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => r || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: d.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: r, separator: s, isFirst: a } = t;
                                                return {
                                                    primary: m(e, { withLink: r, separator: a ? void 0 : s }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = s ? e.separator : '';
                                                        return m(e, { withLink: r, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: c,
                                    };
                                })(p, { separator: s, visibleArtistsCount: x ? void 0 : a, withComposer: o, withLink: !!g && l, artistIdWithoutLink: d }),
                                N = h ? k.allArtistsTitle : '',
                                T = (0, c.c)((e) => {
                                    (C(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: k.groups,
                                hiddenArtistsCount: k.hiddenArtistsCount,
                                allArtistsTitle: N,
                                withCustomTooltip: v,
                                withContextMenu: _,
                                labelRef: A,
                                handleOnSpoilerClick: T,
                                isTooltipEnabled: !!N && v && !_ && !b,
                                title: !N || v || _ ? void 0 : N,
                            };
                        })(C),
                        g = (0, l.L)(() =>
                            b.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(x)
                                  ? x
                                  : (0, r.jsx)(L, { spoilerClassName: a, spoilerArtistsCount: b.hiddenArtistsCount, handleOnSpoilerClick: b.handleOnSpoilerClick }),
                        ),
                        k = (0, r.jsx)(o.m_, {
                            referenceRef: b.labelRef,
                            enabled: b.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: b.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, r.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, s.$)(h().root, h()['root_variant_'.concat(A)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: b.title,
                                children: [
                                    b.groups.map((e) =>
                                        (0, r.jsx)(
                                            y,
                                            {
                                                group: e,
                                                linkClassName: _,
                                                captionClassName: p,
                                                captionSize: v,
                                                allArtistsTitle: b.allArtistsTitle,
                                                withCustomTooltip: b.withCustomTooltip,
                                                hoverSettings: d.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    g,
                                ],
                            }),
                        });
                    return b.withContextMenu ? (0, r.jsx)(K, { labelRef: b.labelRef, artists: b.artists, label: k }) : k;
                });
        },
        10749: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => p });
            var r = i(25839),
                s = i(82298),
                a = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(61493),
                d = i(56629),
                c = i(66738),
                u = i(4254),
                _ = i(96569),
                m = i.n(_);
            let p = (0, a.PA)((e) => {
                let {
                        progress: t,
                        withIcon: i,
                        withCrownIcon: a,
                        position: _,
                        weight: p = 'normal',
                        isDisliked: h,
                        isDisabled: v,
                        className: A,
                        positionClassName: x,
                    } = e,
                    { formatMessage: C } = (0, l.A)(),
                    b = t || i,
                    g = (0, n.useMemo)(() => {
                        if (a) return 'crown';
                        switch (t) {
                            case d._.UP:
                                return 'chartUp';
                            case d._.DOWN:
                                return 'chartDown';
                            case d._.NEW:
                                return 'chartNew';
                            default:
                                return 'chartSame';
                        }
                    }, [t, a]),
                    k = (0, n.useMemo)(() => {
                        switch (t) {
                            case d._.UP:
                                return C({ id: 'entity-names.chart-up' });
                            case d._.DOWN:
                                return C({ id: 'entity-names.chart-down' });
                            case d._.NEW:
                                return C({ id: 'entity-names.chart-new' });
                            default:
                                return C({ id: 'entity-names.chart-same' });
                        }
                    }, [C, t]),
                    N = a ? 'crown' : t;
                return (0, r.jsxs)('div', {
                    className: (0, s.$)(m().root, A),
                    'data-test-id': o.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, r.jsx)(u.HL, {
                            variant: 'div',
                            weight: p,
                            type: 'entity',
                            size: 'm',
                            className: (0, s.$)(m().position, x, { [m().position_disliked]: h, [m().position_disabled]: v }),
                            'data-test-id': o.OA.chart.CHART_PROGRESS_POSITION,
                            children: _,
                        }),
                        b &&
                            (0, r.jsx)(c.I, {
                                variant: g,
                                size: 'xxs',
                                'aria-label': k,
                                className: (0, s.$)(m().progress, m()['progress_'.concat(N)], { [m().progress_disliked]: h, [m().progress_disabled]: v }),
                                'data-test-id': o.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        16573: (e, t, i) => {
            'use strict';

            i.d(t, { x: () => $ });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(25839),
                pulseSyncMenuItems = i(10820),
                pulseSyncMenuIcons = i(66738);
            // for PulseSync WebHost: END imports for native addon context menu items
            var r = i(25839),
                s = i(88204),
                a = i(74631),
                n = i(39004),
                l = i(36619),
                o = i(61493),
                d = i(22939),
                c = i(71035),
                u = i(10820),
                _ = i(59981),
                m = i(91149),
                p = i(92942),
                h = i(27954),
                v = i(57549),
                A = i(71705),
                x = i(36577),
                C = i(3210),
                b = i(11609),
                g = i(79367),
                k = i(40110),
                N = i(20258),
                T = i(34159),
                f = i(30290),
                y = i(29872),
                j = i(21468),
                S = i(56120),
                L = i(87201),
                E = i(83014),
                I = i(44806),
                O = i(55491),
                w = i(44851),
                M = i(14240),
                R = i(8487),
                P = i(66738);
            let z = (0, s.PA)((e) => {
                let { isFinished: t, onClick: i, className: s } = e,
                    { user: n } = (0, h.g)(),
                    l = (0, a.useMemo)(
                        () => (t ? (0, r.jsx)(R.A, { id: 'interface-actions.mark-all-non-listened' }) : (0, r.jsx)(R.A, { id: 'interface-actions.mark-all-listened' })),
                        [t],
                    );
                return (0, r.jsx)(u.Dr, {
                    className: s,
                    onClick: i,
                    icon: (0, r.jsx)(P.I, { variant: 'check', size: 'xxs' }),
                    disabled: !n.isAuthorized,
                    'data-test-id': o.S7.CONTEXT_MENU_MARK_ALL_LISTENED_BUTTON,
                    children: l,
                });
            });
            var B = i(16386),
                D = i(67303),
                U = i(74682),
                K = i(38726),
                W = i(59043),
                H = i(2144),
                F = i(90780),
                V = i(75160);
            // for PulseSync: BEGIN download-to-file action in the album context menu
            var pulseSyncMst = i(28410);
            let pulseSyncDownloadAlbumToFile = (0, s.PA)((e) => {
                let { album: t } = e,
                    i = (0, a.useCallback)(async () => {
                        try {
                            let { albumResource: e, modelActionsLogger: i } = (0, pulseSyncMst._$)(t),
                                r = await e.getAlbumWithTracksIds({
                                    albumId: t.id,
                                    resumeStream: !1,
                                }),
                                s = (r?.volumes || [])
                                    .flat()
                                    .map((e) => (e?.id ? ''.concat(e.id, ':').concat(t.id) : null))
                                    .filter(Boolean),
                                a = Array.isArray(t.artists)
                                    ? t.artists
                                          .map((e) => e.name)
                                          .filter(Boolean)
                                          .join(', ')
                                    : t.artistName,
                                n = [t.title];
                            (['album', 'single'].includes(t.type ?? 'album') && a && n.unshift(a),
                                s.length && window.desktopEvents?.send?.('DOWNLOAD_TRACKS', s, t.type ?? 'album', n.join(' — ')));
                        } catch (e) {
                            try {
                                (0, pulseSyncMst._$)(t).modelActionsLogger.error(e);
                            } catch {}
                        }
                    }, [t]);
                return (0, r.jsx)(u.Dr, {
                    onClick: i,
                    disabled: !t?.id,
                    icon: (0, r.jsx)(P.I, {
                        variant: 'download',
                        size: 'xxs',
                    }),
                    children: 'Скачать в файл',
                });
            });
            // for PulseSync: END download-to-file action in the album context menu
            let $ = (0, s.PA)((e) => {
                // for PulseSync WebHost: BEGIN refresh the album menu when native addon slots change
                let [, pulseSyncSetAlbumMenuRevision] = (0, a.useState)(0);
                (0, a.useEffect)(() => {
                    const onNativeSlotChange = (event) => {
                        if (event.detail === 'albumContextMenu') pulseSyncSetAlbumMenuRevision((revision) => revision + 1);
                    };
                    document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    pulseSyncSetAlbumMenuRevision((revision) => revision + 1);
                    return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                }, []);
                // for PulseSync WebHost: END refresh the album menu when native addon slots change
                var t, i;
                let { album: s, children: R, onOpenChange: P, open: $, wrapperClassName: G, variant: Y, ...J } = e,
                    { shouldShowBuySubscriptionModal: X, showBuySubscriptionModal: q } = (0, y.q)(),
                    {
                        settings: { isMobile: Z },
                        trailer: Q,
                        user: ee,
                        experiments: et,
                        albumCPA: { isPlusCPAEnabled: ei, isPlusCPAPlayerBarEnabled: er },
                    } = (0, h.g)(),
                    es = (0, A.K)(s),
                    ea = (0, x.A)(s),
                    en = (0, T.F)(),
                    el = ''.concat(k.U.ALBUM, '-').concat(s.id),
                    eo = s.isNonMusic && Y === V.z.PAGE,
                    ed = et.checkExperiment(I.z.WebEditorsFeatures, 'on'),
                    { formatMessage: ec } = (0, n.A)(),
                    eu = (0, g.P)(),
                    { pageAlbumId: e_ } = (0, j.T)(),
                    em = ei({ pageAlbumId: e_, albumId: s.id, isNonMusic: s.isNonMusic }),
                    ep = er(s.id, s.isNonMusic),
                    eh = (() => {
                        let { user: e, album: t, fullscreenPlayer: i } = (0, h.g)(),
                            { notify: s } = (0, p.l)(),
                            { formatMessage: l } = (0, n.A)();
                        return (0, a.useCallback)(async () => {
                            var a, n;
                            if (!t) return;
                            let o = i.modal.isOpened ? m.u.FULLSCREEN_ERROR : m.u.ERROR;
                            return e.isAuthorized
                                ? (await t.setListeningFinishedStatus()) !== _.T.OK
                                    ? void s((0, r.jsx)(v.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: o })
                                    : void (null == (n = t.meta) || n.updateFinished(!(null == (a = t.meta) ? void 0 : a.listeningFinished)))
                                : void s((0, r.jsx)(v.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o });
                        }, [l, s, t, e.isAuthorized, i.modal.isOpened]);
                    })(),
                    { shareLink: ev, pathname: eA } = (0, M.b)('/album/:albumId', { params: { albumId: s.id } }),
                    ex = (0, C.A)({ entityVariant: E.D.ALBUM, urlParams: { id: s.id } }),
                    { isPlaying: eC, togglePlay: eb } = (0, L.B)({
                        seeds: null != (i = null == s ? void 0 : s.seeds) ? i : [],
                        pageIdForFrom: N._Q.RADIO,
                        blockIdForFrom: el,
                        parentContextId: s.id,
                    }),
                    { utmLink: eg } = (0, f.f)({ blockId: k.U.ALBUM, contextType: d.K.Album, contextId: null == s ? void 0 : s.id }),
                    ek = (0, c.c)(() => {
                        if (X && ee.isAuthorized) return void q();
                        !eu() && (eC || eb());
                    }),
                    eN = (0, c.c)(() => {
                        if (X && !ep) return void q();
                        eu() || (Q.setUtmLink(eg), Q.openAlbumTrailer(s.id), en(l.DomainObjectType.Album, String(s.id)));
                    });
                (0, S.N)($);
                let eT = (0, a.useMemo)(() => {
                        if (!Z) return (0, r.jsx)(D.L, { onClick: ea, isPinned: s.isPinned });
                    }, [s.isPinned, ea, Z]),
                    ef = (0, a.useMemo)(() => {
                        let e = !em && !ee.isAuthorized;
                        return s.isNonMusic
                            ? (0, r.jsx)(K.U, { onClick: es, isLiked: s.isLiked, albumType: s.type })
                            : (0, r.jsx)(B.T, { onClick: es, isLiked: s.isLiked, disabled: e });
                    }, [s.isLiked, s.type, es, s.isNonMusic, ee.isAuthorized, em]),
                    ey = (0, a.useMemo)(() => {
                        var e;
                        if (!s.isNonMusic && (null == (e = s.trailer) ? void 0 : e.isAvailable)) return (0, r.jsx)(W.N, { onClick: eN, disabled: !s.isAvailable });
                    }, [s.isAvailable, null == (t = s.trailer) ? void 0 : t.isAvailable, s.isNonMusic, eN]),
                    ej = (0, a.useMemo)(() => {
                        if (!s.isNonMusic) return (0, r.jsx)(H.C, { onClick: ek, disabled: !s.isAvailable || (ep && Z), variant: w.I.ALBUM, onOpenMenuChange: P });
                    }, [s.isAvailable, ek, s.isNonMusic, P, ep, Z]),
                    eS = { variant: O.Y.ALBUM, id: s.id, title: s.title, path: eA, albumArtistName: s.artistName, albumArtistId: s.artistId };
                // for PulseSync WebHost: BEGIN album context and native addon menu item rendering
                let pulseSyncInjectAlbumMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('albumContextMenu', items, {
                        eventDetail: {
                            id: String(s.id),
                            url: eA,
                            ...(s.title
                                ? {
                                      title: String(s.title),
                                  }
                                : {}),
                        },
                        renderItem: ({ key, payload, activate }) => {
                            const label = String(payload?.label ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim();
                            if (!label || !icon) return null;
                            return (0, pulseSyncMenuJsx.jsx)(
                                pulseSyncMenuItems.Dr,
                                {
                                    icon: (0, pulseSyncMenuJsx.jsx)(pulseSyncMenuIcons.I, {
                                        variant: icon,
                                        size: 'xxs',
                                    }),
                                    onClick: () => {
                                        (activate(), P(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END album context and native addon menu item rendering
                return (0, r.jsxs)(u.W1, {
                    isMobile: Z,
                    offsetOptions: 10,
                    open: $,
                    onOpenChange: P,
                    ariaLabel: ec({ id: 'interface-actions.context-menu' }),
                    wrapperClassName: G,
                    containerDataTestId: o.Kq.album.ALBUM_CONTEXT_MENU,
                    ...J,
                    // for PulseSync WebHost: BEGIN inject native addon items into the album context menu
                    children: pulseSyncInjectAlbumMenuItems([
                        Z && (0, r.jsx)(F.C, { getDescriptionTexts: s.getDescriptionTexts, entityId: s.id }),
                        ed && (0, r.jsx)(b.d, { entityVariant: E.D.ARTIST, adminUrl: ex }),
                        eT,
                        ef,
                        ey,
                        ej,
                        // for PulseSync: BEGIN insert the album download-to-file menu action
                        (0, r.jsx)(pulseSyncDownloadAlbumToFile, { album: s }),
                        // for PulseSync: END insert the album download-to-file menu action
                        R,
                        eo && (0, r.jsx)(z, { onClick: eh, isFinished: s.listeningFinished }),
                        (0, r.jsx)(U.H, { shareLink: ev, entityMeta: eS }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the album context menu
                });
            });
        },
        19410: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        19412: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => d });
            var r = i(25839),
                s = i(82298),
                a = i(61493),
                n = i(23976),
                l = i(40828),
                o = i.n(l);
            let d = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: l,
                    round: d,
                    'aria-label': c,
                    centered: u,
                    withInfo: _ = !0,
                    linesCount: m = 3,
                    withSubcover: p,
                    radius: h = 'l',
                } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(o().root, i),
                    'data-test-id': a.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        p && (0, r.jsx)(n.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, r.jsx)(n.W, { isActive: t, className: (0, s.$)(o().cover, l, { [o().cover_round]: d, [o().cover_withSubcover]: p }), radius: h }),
                        _ &&
                            (0, r.jsx)('div', {
                                className: (0, s.$)(o().infoContainer, o()['content_linesCount_'.concat(m)], { [o().infoContainer_centered]: u }),
                                children: (0, r.jsx)(n.W, { isActive: t, className: (0, s.$)(o().title, { [o().title_withSubcover]: p }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        21468: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var r = i(74631),
                s = i(56480);
            function a() {
                return (0, r.useContext)(s.H);
            }
        },
        36286: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        36577: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var r = i(25839),
                s = i(33660),
                a = i(74631),
                n = i(39004),
                l = i(91149),
                o = i(92942),
                d = i(27954),
                c = i(57549),
                u = i(92657);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, n.A)(),
                    [m, p] = (0, a.useState)(!1);
                return (0, a.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(c.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (m) return;
                    let a = { ...(0, s.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let n = await e.togglePin();
                    (p(!1),
                        n
                            ? i((0, r.jsx)(u.l, { album: a }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(c.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, _, i, m, t.isAuthorized]);
            };
        },
        38726: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var r = i(25839),
                s = i(88204),
                a = i(61493),
                n = i(66738),
                l = i(10820),
                o = i(77174),
                d = i(27954);
            let c = (0, s.PA)((e) => {
                let { isLiked: t, onClick: i, className: s, iconClassName: c, albumType: u, disabled: _ } = e,
                    { user: m } = (0, d.g)(),
                    p = t ? 'liked' : 'like',
                    h = (0, o.$)(t, u);
                return (0, r.jsx)(l.Dr, {
                    className: s,
                    onClick: i,
                    icon: (0, r.jsx)(n.I, { className: c, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: _ || !m.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        39528: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => s });
            var r = i(25895);
            let s = (e) => (0, r.u)('/artist/:artistId', { params: { artistId: e } });
        },
        40828: (e) => {
            e.exports = {
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
        44408: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        56480: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            let r = (0, i(74631).createContext)({ pageAlbumId: void 0 });
        },
        56629: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(r || (r = {})));
        },
        59981: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { T: () => r }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(r || (r = {})));
        },
        60054: (e) => {
            e.exports = {
                controls: 'AlbumCard_controls__yuO40',
                cover: 'AlbumCard_cover__zXmdl',
                root: 'AlbumCard_root__vP6k4',
                srTitleLink: 'AlbumCard_srTitleLink__TxBNz',
                root_withChart: 'AlbumCard_root_withChart__J2SZv',
                artists: 'AlbumCard_artists__phKco',
                likeTextButton: 'AlbumCard_likeTextButton__2AQd9',
                coverBlock: 'AlbumCard_coverBlock__94ZzY',
                image: 'AlbumCard_image__Mm55s',
                titleLink: 'AlbumCard_titleLink__u_WLG',
                title: 'AlbumCard_title__8YvhT',
                title_withVersion: 'AlbumCard_title_withVersion__NClAp',
                title_withChart: 'AlbumCard_title_withChart__PVOiJ',
                chart: 'AlbumCard_chart__gASdj',
                version: 'AlbumCard_version__h2aJz',
                artistLink: 'AlbumCard_artistLink__uPR_2',
                playButton: 'AlbumCard_playButton__mYK9R',
                likeButton: 'AlbumCard_likeButton__9B9C0',
                menuButton: 'AlbumCard_menuButton__pxkA6',
                pinButton: 'AlbumCard_pinButton__Mdi_E',
                trailerButton: 'AlbumCard_trailerButton__typHh',
                control: 'AlbumCard_control__qx7Xh',
                plusBadge: 'AlbumCard_plusBadge__i0FkP',
                buyPlusPopover: 'AlbumCard_buyPlusPopover__Kb79C',
            };
        },
        60924: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => c });
            var r = i(25839),
                s = i(61493),
                a = i(3392),
                n = i(4254),
                l = i(74672),
                o = i.n(l);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: i, title: l, placement: c = 'top', children: u } = e;
                    return (0, r.jsxs)(a.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, r.jsx)(a.ZI, {
                                className: o().root,
                                'data-test-id': s.S7.TOOLTIP_WITH_TITLE,
                                children: (0, r.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
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
            var r = i(27954),
                s = i(44806);
            let a = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: a },
                    experiments: n,
                } = (0, r.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = n.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => C });
            var r = i(25839),
                s = i(82298),
                a = i(88204),
                n = i(74631),
                l = i(36619),
                o = i(61493),
                d = i(71035),
                c = i(23818),
                u = i(10820),
                _ = i(86869),
                m = i(4254),
                p = i(29481),
                h = i(85686),
                v = i(27954),
                A = i(53454),
                x = i.n(A);
            let C = (0, a.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: a } = (0, v.g)(),
                    A = (0, h.Z)(t.url),
                    b = (0, p.N)(),
                    g = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(C, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    k = (0, d.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), b({ to: l.AppScreen.ArtistScreen }), A(e));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, s.$)(x().root, i),
                            onClick: k,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(_.t, {
                                    radius: 'round',
                                    className: x().cover,
                                    children: (0, r.jsx)(c._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: x().image }),
                                }),
                                (0, r.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        g,
                    ],
                });
            });
        },
        // for PulseSync: BEGIN separate the disclaimer module to allow a custom icon component
        62926: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => i(9958926).N });
        },
        9958926: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => v });
            var r = i(25839),
                s = i(82298),
                a = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(74245),
                d = i(61493),
                c = i(49656),
                u = i(66738),
                _ = i(27954),
                m = i(60924),
                p = i(92870),
                h = i.n(p);
            let v = (0, a.PA)((e) => {
                // for PulseSync: BEGIN accept a custom disclaimer icon override
                let { className: t, getDescriptionTexts: i, trackId: a, containerClassName: p, variant: v, iconVariant: iconOverride, size: A = 'xxxs', ...x } = e,
                // for PulseSync: END accept a custom disclaimer icon override
                    { formatMessage: C } = (0, l.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, _.g)(),
                    [g, k] = (0, n.useState)(null),
                    N = (0, c.L)(() => {
                        // for PulseSync: BEGIN resolve the custom disclaimer icon from the native catalog
                        if (iconOverride) return u.resolveIcon(iconOverride)?.variant ?? 'exclamation';
                        // for PulseSync: END resolve the custom disclaimer icon from the native catalog
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
                    T = (0, n.useMemo)(() => C({ id: 'extra-explicit.explicit-mark' }), [C]);
                (0, n.useEffect)(() => {
                    i && i().then(k);
                }, [i, a]);
                let f = (null == g ? void 0 : g.join('\n')) || '',
                    y = !!(null == g ? void 0 : g.length) && !b,
                    j = f.length > 0 ? f : T;
                return (0, r.jsx)(m.k, {
                    description: f,
                    placement: 'bottom-start',
                    enabled: y,
                    children: (0, r.jsx)('span', {
                        className: p,
                        // for PulseSync: BEGIN render the S badge for substituted tracks
                        children:
                            v === o.JU.SUBSTITUTED
                                ? (0, r.jsxs)('svg', {
                                      className: (0, s.$)(h().explicitMark, t),
                                      viewBox: '0 0 16 16',
                                      role: 'img',
                                      'aria-label': j,
                                      style: { width: 'var(--ym-icon-size-'.concat(A, ')'), height: 'var(--ym-icon-size-'.concat(A, ')') },
                                      ...x,
                                      'data-test-id': d.S7.EXPLICIT_MARK_ICON,
                                      children: [
                                          (0, r.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                          (0, r.jsx)('text', {
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
                                : (0, r.jsx)(u.I, {
                                      className: (0, s.$)(h().explicitMark, t),
                                      'aria-label': j,
                                      variant: N,
                                      // for PulseSync: BEGIN apply custom disclaimer icon size and dimensions
                                      size: iconOverride ? u.resolveIcon(iconOverride)?.size ?? A : A,
                                      style: iconOverride ? { width: `var(--ym-icon-size-${A})`, height: `var(--ym-icon-size-${A})` } : undefined,
                                      // for PulseSync: END apply custom disclaimer icon size and dimensions
                                      ...x,
                                      'data-test-id': d.S7.EXPLICIT_MARK_ICON,
                                  }),
                        // for PulseSync: END render the S badge for substituted tracks
                    }),
                });
            });
        },
        // for PulseSync: END separate the disclaimer module to allow a custom icon component
        69292: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        71705: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var r = i(25839),
                s = i(39004),
                a = i(71035),
                n = i(21468),
                l = i(91149),
                o = i(92942),
                d = i(27954),
                c = i(57549),
                u = i(33660),
                _ = i(74631),
                m = i(31860),
                p = i(93297);
            let h = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, d.g)(),
                    { formatMessage: v } = (0, s.A)(),
                    { notify: A } = (0, o.l)(),
                    x = (() => {
                        let { notify: e } = (0, o.l)(),
                            [t, i] = (0, _.useState)(!1),
                            { formatMessage: n } = (0, s.A)();
                        return (0, a.c)(async (s) => {
                            let { album: a, withLink: o = !0, withNotification: d = !0 } = s;
                            if (t) return;
                            let _ = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                            i(!0);
                            let h = await a.toggleLike();
                            (i(!1),
                                d &&
                                    (h === m.f.OK
                                        ? e((0, r.jsx)(p.T, { withLink: o, album: _ }), { containerId: l.u.INFO })
                                        : e((0, r.jsx)(c.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR })));
                        });
                    })(),
                    { pageAlbumId: C } = (0, n.T)();
                return (0, a.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: C, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? x({ album: e })
                              : void A((0, r.jsx)(c.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        71996: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(25839),
                s = i(74631),
                a = i(39004),
                n = i(61493),
                l = i(4071),
                o = i(66738),
                d = i(49984);
            let c = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: s,
                            radius: c,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: h,
                            forwardRef: v,
                            style: A,
                            children: x,
                        } = e,
                        { formatMessage: C } = (0, a.A)(),
                        b = C({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: c,
                        size: s,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': b,
                        onClick: m,
                        ref: v,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': d.N,
                        style: A,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: x,
                    });
                },
                u = (0, s.forwardRef)((e, t) => (0, r.jsx)(c, { forwardRef: t, ...e }));
        },
        73182: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            var r = i(56829),
                s = i(35015);
            let a = (e) => {
                switch (e) {
                    case r._.PODCAST:
                        return s.c.PODCAST;
                    case r._.AUDIOBOOK:
                        return s.c.AUDIOBOOK;
                    case r._.FAIRY_TALE:
                        return s.c.FAIRY_TALE;
                    default:
                        return s.c.ALBUM;
                }
            };
        },
        73614: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => n, r: () => l });
            var r = i(74631),
                s = i(39004),
                a = i(56829),
                n = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let l = (e, t) => {
                let { formatMessage: i } = (0, s.A)();
                return (0, r.useMemo)(() => {
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
        74760: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => _ });
            var r = i(25839),
                s = i(82298),
                a = i(39004),
                n = i(61493),
                l = i(4071),
                o = i(66738),
                d = i(4254),
                c = i(69292),
                u = i.n(c);
            let _ = (e) => {
                let { className: t, isLiked: i, likesCount: c, handleLikeClick: _, ariaLabel: m } = e,
                    { formatNumber: p } = (0, a.A)();
                return (0, r.jsx)(l.$, {
                    className: (0, s.$)(u().root, t),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, r.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': n.S7.CARD_LIKES,
                    children: (0, r.jsx)(d.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(c) }),
                });
            };
        },
        75160: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => r });
            var r = (function (e) {
                return ((e.PAGE = 'PAGE'), (e.CARD = 'CARD'), e);
            })({});
        },
        76939: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => Q });
            var r = i(25839),
                s = i(82298),
                a = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(36619),
                d = i(61493),
                c = i(22939),
                u = i(56829),
                _ = i(71035),
                m = i(49656),
                p = i(51246),
                h = i(66738),
                v = i(86869),
                A = i(4254),
                x = i(99835),
                C = i(73614),
                b = i(71705),
                g = i(36577),
                k = i(4331),
                N = i(10749),
                T = i(79367),
                f = i(29481),
                y = i(47009),
                j = i(34159),
                S = i(52512),
                L = i(30290),
                E = i(61561),
                I = i(21468),
                O = i(98288),
                w = i(85686),
                M = i(85743),
                R = i(50209),
                P = i(27954),
                z = i(5668),
                B = i(74760),
                D = i(6323),
                U = i(62926),
                K = i(64720),
                W = i(97522),
                H = i(41580),
                F = i(49438),
                V = i(71996),
                $ = i(78437),
                G = i(75160);
            let Y = { mainAxis: -26, alignmentAxis: -16 },
                J = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' };
            var X = i(16573),
                q = i(60054),
                Z = i.n(q);
            let Q = (0, a.PA)((e) => {
                let {
                        className: t,
                        children: i,
                        album: a,
                        contentLinesCount: q,
                        withLikesCount: Q,
                        withChart: ee,
                        withAddition: et = !0,
                        withArtistName: ei = !0,
                        releaseDateFormatter: er = O.s,
                    } = e,
                    { ref: es, intersectionPropertyId: ea } = (0, S.n)(),
                    {
                        user: en,
                        trailer: el,
                        settings: { isMobile: eo },
                        albumCPA: { isPlusCPAEnabled: ed },
                        paywall: { modal: ec },
                    } = (0, P.g)(),
                    { from: eu, utmLink: e_ } = (0, L.f)({ contextId: a.id, contextType: c.K.Album, utmForPageIds: a.artistIds }),
                    { formatMessage: em, formatDate: ep } = (0, l.A)(),
                    { sendLikeSearchFeedback: eh, sendNavigateSearchFeedback: ev, sendPlaySearchFeedback: eA } = (0, M.z)(),
                    [ex, eC] = (0, n.useState)(!1),
                    [eb, eg] = (0, n.useState)(!1),
                    [ek, eN] = (0, n.useState)(!1),
                    eT = (0, f.N)(),
                    ef = (0, y.b)(),
                    ey = (0, b.K)(a),
                    ej = (0, g.A)(a),
                    eS = (0, w.Z)(a.url),
                    [eL, eE] = (0, n.useState)(!1),
                    eI = (0, j.F)(),
                    [eO, ew] = (0, n.useState)(!1),
                    eM = (0, T.P)(),
                    { pageAlbumId: eR } = (0, I.T)(),
                    eP = ed({ pageAlbumId: eR, albumId: a.id, isNonMusic: a.isNonMusic }),
                    ez = (0, E.N)(),
                    eB = a.isAvailableOnlyForPlus && !a.isUnsafeLegal && !a.isLegalRejected,
                    eD = eB && !eo,
                    eU = a.isAvailable || eD || a.isAudiobook,
                    eK = (0, _.c)((e) => {
                        if ((e.stopPropagation(), eM())) return void e.preventDefault();
                        (el.openAlbumTrailer(a.id), eI(o.DomainObjectType.Album, String(a.id)));
                    }),
                    eW = a.type === u._.SINGLE ? em({ id: 'entity-names.single' }) : void 0,
                    eH = a.releaseDate ? ep(a.releaseDate, er()) : void 0,
                    eF = ((e) => {
                        let t = e.filter((e) => !!e).join(' \xb7 ');
                        return 0 === t.length ? null : t;
                    })([null != eH ? eH : a.year, eW]),
                    eV = (0, C.r)(a.type),
                    e$ = (0, n.useMemo)(() => {
                        var e;
                        let t = a.isLiked ? em({ id: 'entity-names.has-your-like' }) : '';
                        return ''
                            .concat(eV, ' ')
                            .concat(a.title, ' ')
                            .concat(null != (e = a.version) ? e : '', ' ')
                            .concat(t);
                    }, [eV, em, a.title, a.isLiked, a.version]),
                    { isPlaying: eG, togglePlay: eY } = (0, R.D)({
                        playContextParams: { contextData: { type: c.K.Album, meta: { id: a.id }, from: eu, utmLink: e_ }, loadContextMeta: !0 },
                    }),
                    eJ = (0, x.c)({ album: a, callback: eS }),
                    eX = (0, x.c)({ album: a, callback: eY }),
                    eq = (0, _.c)((e) => {
                        (eT({ to: o.AppScreen.AlbumScreen }), null == ev || ev(), eJ(e));
                    }),
                    eZ = (0, _.c)(() => {
                        if (!eM()) {
                            if (ez) return void ec.open();
                            (eb || eG || (eg(!0), null == eA || eA()), eX(), ef(!eG));
                        }
                    }),
                    eQ = (0, _.c)(() => {
                        (ex || a.isLiked || (eC(!0), null == eh || eh()), ey());
                    }),
                    e0 = (0, _.c)((e) => {
                        (eN(e), eE(e));
                    }),
                    e9 = (0, n.useMemo)(() => {
                        var e;
                        return (0, r.jsxs)(A.HL, {
                            className: (0, s.$)(Z().title, { [Z().title_withVersion]: a.version, [Z().title_withChart]: ee }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'aria-hidden': !0,
                            'data-test-id': d.Kq.album.ALBUM_TITLE,
                            children: [
                                (0, r.jsx)(W.N, {
                                    'aria-label': ''.concat(a.title, ' ').concat(null != (e = a.version) ? e : ''),
                                    className: Z().titleLink,
                                    href: a.url,
                                    tabIndex: -1,
                                    onClick: eq,
                                    'data-test-id': d.Kq.album.ALBUM_TITLE_LINK,
                                    children: a.title,
                                }),
                                a.version &&
                                    (0, r.jsx)(A.HL, {
                                        className: Z().version,
                                        variant: 'span',
                                        'data-test-id': d.Kq.album.ALBUM_VERSION,
                                        children: ' '.concat(a.version),
                                    }),
                            ],
                        });
                    }, [a.title, a.url, a.version, eq, ee]),
                    e4 = (0, n.useMemo)(() => {
                        var e;
                        return (0, r.jsx)(W.N, {
                            className: Z().srTitleLink,
                            href: a.url,
                            onClick: eq,
                            children: ''.concat(a.title, ' ').concat(null != (e = a.version) ? e : ''),
                        });
                    }, [a.title, a.url, a.version, eq]),
                    e2 = (0, n.useMemo)(() => {
                        var e;
                        if (null == a || null == (e = a.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                $.n,
                                {
                                    children: (0, r.jsx)(
                                        V.k,
                                        { className: (0, s.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eK },
                                        a.getKey('TrailerButton'),
                                    ),
                                },
                                a.getKey('AlbumCardTrailerTooltip'),
                            );
                    }, [a, eK]),
                    e1 = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(
                                X.x,
                                {
                                    album: a,
                                    onOpenChange: e0,
                                    open: ek,
                                    className: (0, s.$)(Z().menuButton, Z().control),
                                    icon: (0, r.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                    size: 's',
                                    variant: G.z.CARD,
                                    'data-test-id': d.Kq.album.ALBUM_CONTEXT_MENU_BUTTON,
                                },
                                a.getKey('AlbumContextMenu'),
                            ),
                        [a, e0, ek],
                    ),
                    e6 = (0, n.useCallback)(
                        () =>
                            (0, r.jsx)(
                                F.D,
                                {
                                    className: (0, s.$)(Z().playButton, Z().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: eZ,
                                    isPlaying: eG,
                                    disabled: eD,
                                },
                                a.getKey('PlayButton'),
                            ),
                        [eD, a, eG, eZ],
                    ),
                    e8 = (0, n.useMemo)(
                        () =>
                            eD
                                ? (0, r.jsx)(z.S, {
                                      className: Z().buyPlusPopover,
                                      buttonText: em({ id: 'interface-actions.more-details' }),
                                      isNested: !0,
                                      placement: 'top-start',
                                      isOpened: eO,
                                      onOpenChange: ew,
                                      textVariant: 'album',
                                      albumTextVariant: a.type,
                                      arrowProps: J,
                                      offsetOptions: Y,
                                      renderChildren: e6,
                                  })
                                : e6(),
                        [eD, eO, ew, em, e6, a.type],
                    ),
                    e3 = (0, m.L)(() => {
                        if (eD) return;
                        let e = !eP && !en.isAuthorized;
                        return (0, r.jsx)(
                            K.c,
                            {
                                className: (0, s.$)(Z().likeButton, Z().control),
                                isLiked: a.isLiked,
                                onClick: eQ,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: e,
                            },
                            a.getKey('LikeButton'),
                        );
                    }),
                    e7 = (0, n.useMemo)(() => {
                        if (!eD)
                            return (0, r.jsx)(
                                H.O,
                                { onClick: ej, isPinned: a.isPinned, className: (0, s.$)(Z().pinButton, Z().control), withRipple: !1, isDisabled: eD },
                                a.getKey('PinButton'),
                            );
                    }, [a, eD, ej]),
                    e5 = (0, n.useMemo)(() => {
                        if (a.isAvailable || eD)
                            return (0, r.jsx)(p.hg, {
                                isVisible: ek || eL || eO,
                                className: Z().controls,
                                playControl: e8,
                                likeControl: e3,
                                menuControl: e1,
                                pinControl: e7,
                                trailerControl: e2,
                            });
                    }, [a, ek, eL, e1, e2, eO, e8, e3, e7, eD]),
                    te = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(v.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': d.Kq.album.ALBUM_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eq,
                                    children: [
                                        (0, r.jsx)(D.B, {
                                            className: Z().image,
                                            src: a.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: e$,
                                            withAvatarReplace: !0,
                                            isAvailable: eU,
                                            'aria-hidden': !0,
                                        }),
                                        eB && (0, r.jsx)(h.I, { variant: 'plusBadge', className: Z().plusBadge }),
                                        e5,
                                    ],
                                }),
                            }),
                        [eq, a.coverUri, eU, e$, e5, eB],
                    );
                return (0, r.jsxs)(p.MN, {
                    ref: es,
                    className: (0, s.$)(Z().root, { [Z().root_withChart]: ee }, t),
                    'aria-label': e$,
                    explicitMarkComponent:
                        a.explicitDisclaimer &&
                        (0, r.jsx)(
                            U.N,
                            { className: Z().explicitMark, getDescriptionTexts: a.getDescriptionTexts, variant: a.explicitDisclaimer },
                            a.getKey('AlbumCardExplicitMarkIcon'),
                        ),
                    title: e9,
                    srTitle: e4,
                    'data-intersection-property-id': ea,
                    contentLinesCount: q,
                    view: te,
                    description:
                        ei &&
                        (0, r.jsx)(
                            k.i,
                            { className: Z().artists, artists: a.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                            a.getKey('description'),
                        ),
                    chart:
                        ee &&
                        a.chart &&
                        (0, r.jsx)(N.t, { withIcon: !0, className: Z().chart, position: a.chart.position, progress: a.chart.progress }, a.getKey('chart')),
                    'data-test-id': d.Kq.album.ALBUM_ITEM,
                    children: [
                        et &&
                            eF &&
                            (0, r.jsx)(A.HL, { className: Z().addition, variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: eF }),
                        Q &&
                            !!a.actualLikesCount &&
                            (0, r.jsx)(B.x, {
                                className: Z().likeTextButton,
                                ariaLabel: em({ id: 'entity-names.likes-counter' }, { counter: a.actualLikesCount }),
                                likesCount: a.actualLikesCount,
                                isLiked: a.isLiked,
                                handleLikeClick: ey,
                            }),
                        i,
                    ],
                });
            });
        },
        77174: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            var r = i(39004),
                s = i(56829);
            let a = (e, t) => {
                let { formatMessage: i } = (0, r.A)();
                if (e)
                    switch (t) {
                        case s._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case s._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case s._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case s._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        78437: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(25839),
                s = i(39004),
                a = i(3392);
            let n = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, s.A)();
                return (0, r.jsx)(a.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        90780: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => d });
            var r = i(25839),
                s = i(74631),
                a = i(61493),
                n = i(4254),
                l = i(44408),
                o = i.n(l);
            let d = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [l, d] = (0, s.useState)(null);
                if (
                    ((0, s.useEffect)(() => {
                        t && t().then(d);
                    }, [t]),
                    l)
                )
                    return l.map((e, t) =>
                        (0, r.jsx)(
                            n.HL,
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
        92657: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var r = i(25839),
                s = i(88204),
                a = i(10546),
                n = i(73182);
            let l = (0, s.PA)((e) => {
                let { album: t, closeToast: i } = e,
                    s = (0, n.b)(t.type);
                return (0, r.jsx)(a.k, {
                    closeToast: i,
                    entityVariant: s,
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
        93297: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var r = i(25839),
                s = i(88204),
                a = i(3163),
                n = i(73182);
            let l = (0, s.PA)((e) => {
                let { album: t, closeToast: i, withLink: s } = e,
                    l = (0, n.b)(t.type);
                return (0, r.jsx)(a.O, {
                    closeToast: i,
                    entityVariant: l,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: s,
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
        96569: (e) => {
            e.exports = {
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
        98288: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => r });
            let r = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        99835: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => s });
            var r = i(40207);
            let s = (e) => {
                let { album: t, callback: i, shouldHistoryBack: s } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === s ? void 0 : { shouldHistoryBack: s }, preventDefaultWhenSafe: !0 });
            };
        },
    },
]);
