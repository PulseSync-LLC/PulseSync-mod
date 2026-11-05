(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1528],
    {
        108: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => s });
            var i = r(2058),
                l = r(61691);
            let s = (e, t) => {
                let { formatMessage: r } = (0, i.A)();
                if (e)
                    switch (t) {
                        case l._.AUDIOBOOK:
                            return r({ id: 'non-music.shelf-unsubscribe' });
                        case l._.FAIRY_TALE:
                            return r({ id: 'interface-actions.do-not-like' });
                        default:
                            return r({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case l._.AUDIOBOOK:
                        return r({ id: 'non-music.shelf-subscribe' });
                    case l._.FAIRY_TALE:
                        return r({ id: 'interface-actions.like' });
                    default:
                        return r({ id: 'interface-actions.subscribe' });
                }
            };
        },
        2955: (e) => {
            e.exports = {
                header: 'CollectionShelfRecentlyPlayed_header__Nx7Cc',
                shelfColumn: 'CollectionShelfRecentlyPlayed_shelfColumn__9xHhf',
                important: 'CollectionShelfRecentlyPlayed_important__HS0GM',
            };
        },
        4795: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => s });
            var i = r(72288),
                l = r(97956);
            let s = () => {
                var e, t;
                let {
                    user: r,
                    settings: { browserInfo: s },
                    experiments: a,
                } = (0, i.g)();
                return (
                    !(null == s ? void 0 : s.isTouch) &&
                    r.isAuthorized &&
                    !r.hasPlus &&
                    (null == (t = a.getExperiment(l.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5048: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => s });
            var i = r(61691),
                l = r(15077);
            let s = (e) => {
                switch (e) {
                    case i._.PODCAST:
                        return l.c.PODCAST;
                    case i._.AUDIOBOOK:
                        return l.c.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return l.c.FAIRY_TALE;
                    default:
                        return l.c.ALBUM;
                }
            };
        },
        13946: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => z });
            var i = r(88800),
                l = r(65724),
                s = r(84961),
                a = r(53548),
                n = r(79070),
                o = r(17610),
                c = r(24548),
                d = r(29993),
                u = r(72288),
                m = r(35994);
            let p = (e, t) => {
                let { withLink: r, separator: i } = t,
                    l = r && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: l };
            };
            var f = r(21010),
                _ = r.n(f),
                h = r(17392),
                v = r(29504),
                g = r(91292),
                C = r(2058),
                x = r(87999),
                b = r(80643),
                A = r(78940),
                k = r(55693),
                S = r(58217);
            let T = (0, s.PA)((e) => {
                    let { item: t, linkClassName: r, captionClassName: l, captionSize: s = 'm', allArtistsTitle: a, withCustomTooltip: n, hoverSettings: c } = e,
                        {
                            name: m,
                            link: p,
                            title: f,
                            ariaLabel: _,
                            tooltipText: T,
                            isTooltipEnabled: E,
                            handleNavigate: y,
                        } = ((e) => {
                            var t, r;
                            let { item: i, allArtistsTitle: l, withCustomTooltip: s } = e,
                                { formatMessage: a } = (0, C.A)(),
                                n = ((e, t) => {
                                    let { item: r, allArtistsTitle: i, withCustomTooltip: l } = e,
                                        s = i || r.name;
                                    return {
                                        ...r,
                                        title: l ? void 0 : s,
                                        ariaLabel: r.link ? t({ id: 'entity-names.artist-name' }, { artistName: r.name }) : void 0,
                                        tooltipText: s,
                                        isTooltipEnabled: !i && l,
                                    };
                                })({ item: i, allArtistsTitle: l, withCustomTooltip: s }, a),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                m = (0, A.Z)(null != (r = null == (t = n.link) ? void 0 : t.href) ? r : n.artist.url),
                                { sendNavigateSearchFeedback: p } = (0, k.z)(),
                                f = (0, b.S)(),
                                _ = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), m(e));
                                }),
                                h = ((e) => {
                                    let { artist: t, callback: r } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: l, fullscreenVideoPlayer: s } = (0, u.g)(),
                                        { modal: a } = i;
                                    return (0, S.l)({
                                        entity: t,
                                        callback: r,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), a.isOpened && (i.reset(), a.close()), l.modal.isOpened && l.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            s.modal.isOpened && (s.modal.close(), s.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: n.artist, callback: _ }),
                                v = (0, d.c)((e) => {
                                    (f({ to: x.AppScreen.ArtistScreen }), null == p || p(), h(e));
                                });
                            return { ...n, handleNavigate: v };
                        })({ item: t, allArtistsTitle: a, withCustomTooltip: n });
                    return p
                        ? (0, i.jsx)(g.N, {
                              ...p,
                              'aria-label': _,
                              className: r,
                              onClick: y,
                              title: f,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(o.m_, {
                                  enabled: E,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: T,
                                  hoverSettings: c,
                                  children: (0, i.jsx)(v.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: l, children: m }),
                              }),
                          })
                        : (0, i.jsx)(o.m_, {
                              enabled: E,
                              offsetOptions: 4,
                              placement: 'top',
                              text: T,
                              hoverSettings: c,
                              children: (0, i.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: l,
                                  title: f,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                E = (e) => {
                    let { group: t, linkClassName: r, captionClassName: l, captionSize: s, allArtistsTitle: n, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(T, {
                                item: t.primary,
                                linkClassName: r,
                                captionClassName: l,
                                captionSize: s,
                                allArtistsTitle: n,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, i.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, i.jsx)(T, {
                                                item: e,
                                                linkClassName: r,
                                                captionClassName: l,
                                                captionSize: s,
                                                allArtistsTitle: n,
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
            var y = r(88969),
                j = r(65453);
            let R = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: s } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(j.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(_().spoiler, r),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(y.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var O = r(61013),
                L = r(87819),
                N = r(40634),
                w = r(48468),
                I = r.n(w);
            let P = (0, s.PA)((e) => {
                    let { label: t, artists: r, forwardRef: l } = e;
                    return (0, i.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, L.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: l, children: t }),
                            (0, i.jsx)(o.ZI, { className: I().tooltipContent, children: r.map((e) => (0, i.jsx)(N.V, { artist: e, className: I().artistItem }, e.id)) }),
                        ],
                    });
                }),
                B = (0, a.forwardRef)((e, t) => (0, i.jsx)(P, { forwardRef: t, ...e }));
            var M = r(19934),
                D = r(70396),
                H = r.n(D);
            let F = (0, s.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: s } = (0, C.A)();
                    return (0, i.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, l.$)(H().root, H().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, i.jsx)(N.V, { artist: e }, e.id)),
                    });
                }),
                W = (0, s.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: l } = e,
                        [s, o] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let e = l.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, n.L)(() =>
                            (0, O.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, a.useEffect)(
                            () => (
                                window.addEventListener('resize', p),
                                m(),
                                () => {
                                    window.removeEventListener('resize', p);
                                }
                            ),
                            [p, m],
                        ),
                        (0, a.useEffect)(() => {
                            m();
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (s || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(F, { artists: t, label: r }) : (0, i.jsx)(B, { artists: t, label: r })) : r;
                }),
                z = (0, s.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: r,
                            spoilerClassName: s,
                            linkClassName: m,
                            captionClassName: f,
                            captionSize: h,
                            variant: v = 'breakAll',
                            spoilerComponent: g,
                            ...C
                        } = e,
                        x = ((e) => {
                            var t, r, i;
                            let { separator: l, visibleArtistsCount: s, withLink: n, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = e,
                                f = null != (t = e.artists) ? t : [],
                                _ = null == (r = e.withAllArtistsTitle) || r,
                                h = null == (i = e.withCustomTooltip) || i,
                                v = (0, a.useRef)(null),
                                [g, C] = (0, a.useState)(!1),
                                {
                                    settings: { isMobile: x },
                                } = (0, u.g)(),
                                b = ((!x || 1 === f.length) && m) || !m,
                                A = ((e, t) => {
                                    var r, i, l;
                                    let s = null == (r = null == t ? void 0 : t.withComposer) || r,
                                        a = null == (i = null == t ? void 0 : t.withLink) || i,
                                        n = null != (l = null == t ? void 0 : t.separator) ? l : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let r = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...r];
                                            })
                                            .join(n),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: r, withComposer: i } = t;
                                            return {
                                                visibleArtists: (r ? e.slice(0, r) : e).filter((e) => i || !e.isComposer),
                                                hiddenArtistsCount: r && r < e.length ? e.length - r : 0,
                                            };
                                        })(e, { withComposer: s, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, r) =>
                                            ((e, t) => {
                                                var r;
                                                let { withLink: i, separator: l, isFirst: s } = t;
                                                return {
                                                    primary: p(e, { withLink: i, separator: s ? void 0 : l }),
                                                    decomposed: (null != (r = e.decomposed) ? r : []).map((e) => {
                                                        let t = l ? e.separator : '';
                                                        return p(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: a && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: n, isFirst: 0 === r }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(f, { separator: l, visibleArtistsCount: g ? void 0 : s, withComposer: o, withLink: !!b && n, artistIdWithoutLink: c }),
                                k = _ ? A.allArtistsTitle : '',
                                S = (0, d.c)((e) => {
                                    (C(!0), e.preventDefault());
                                });
                            return {
                                artists: f,
                                groups: A.groups,
                                hiddenArtistsCount: A.hiddenArtistsCount,
                                allArtistsTitle: k,
                                withCustomTooltip: h,
                                withContextMenu: m,
                                labelRef: v,
                                handleOnSpoilerClick: S,
                                isTooltipEnabled: !!k && h && !m && !x,
                                title: !k || h || m ? void 0 : k,
                            };
                        })(C),
                        b = (0, n.L)(() =>
                            x.hiddenArtistsCount <= 0
                                ? null
                                : (0, a.isValidElement)(g)
                                  ? g
                                  : (0, i.jsx)(R, { spoilerClassName: s, spoilerArtistsCount: x.hiddenArtistsCount, handleOnSpoilerClick: x.handleOnSpoilerClick }),
                        ),
                        A = (0, i.jsx)(o.m_, {
                            referenceRef: x.labelRef,
                            enabled: x.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: x.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: r ? { WebkitLineClamp: r } : void 0,
                                className: (0, l.$)(_().root, _()['root_variant_'.concat(v)], { [_().root_clamp]: r && r > 0, [_().ellipsis]: !r }, t),
                                title: x.title,
                                children: [
                                    x.groups.map((e) =>
                                        (0, i.jsx)(
                                            E,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: f,
                                                captionSize: h,
                                                allArtistsTitle: x.allArtistsTitle,
                                                withCustomTooltip: x.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    b,
                                ],
                            }),
                        });
                    return x.withContextMenu ? (0, i.jsx)(W, { labelRef: x.labelRef, artists: x.artists, label: A }) : A;
                });
        },
        15526: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        16782: (e) => {
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
        17332: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        18143: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { T: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        18278: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => c });
            var i = r(88800),
                l = r(53548),
                s = r(17392),
                a = r(29504),
                n = r(15526),
                o = r.n(n);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: r } = e,
                    [n, c] = (0, l.useState)(null);
                if (
                    ((0, l.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    n)
                )
                    return n.map((e, t) =>
                        (0, i.jsx)(
                            a.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': s.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(r, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        18486: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => C });
            var i = r(88800),
                l = r(65724),
                s = r(53548),
                a = r(87999),
                n = r(49784),
                o = r(80643),
                c = r(17392),
                d = r(52300),
                u = r(90688),
                m = r(7555),
                p = r(19994),
                f = r(29504),
                _ = r(91292),
                h = r(16782),
                v = r.n(h);
            let g = (e) => {
                    let {
                        className: t,
                        coverUrl: r,
                        labeledForId: h,
                        subTitle: g,
                        title: C,
                        description: x,
                        viewAllActionLink: b,
                        controls: A,
                        titleSize: k = 'm',
                        coverBackgroundColor: S,
                        coverRadius: T = 's',
                        titleClassName: E,
                        titleLineClamp: y,
                        fallbackIconVariant: j,
                        available: R = !0,
                        onViewAllAction: O,
                        titleChildren: L,
                        children: N,
                        headingRef: w,
                        coverContainerClassName: I,
                        headingVariant: P = 'h3',
                        withDescriptionWidthLimit: B = !0,
                        isShimmerVisible: M,
                        isShimmerActive: D,
                        withCover: H,
                        withDescription: F,
                        forwardRef: W,
                        shimmerCoverClassName: z,
                        shouldSendAnalyticsOnLoaded: U,
                        ...K
                    } = e;
                    (0, n.W)({ enabled: !!U });
                    let $ = (0, s.useRef)(null),
                        V = r || H,
                        Y = x || F,
                        X = (0, s.useCallback)(() => {
                            $.current && 'focus' in $.current && $.current.focus();
                        }, []),
                        G = (0, o.S)(),
                        J = (0, s.useCallback)(() => {
                            O ? O() : G({ to: a.AppScreen.Link });
                        }, [G, O]),
                        Z = (0, s.useMemo)(
                            () =>
                                C && b && R
                                    ? (0, i.jsxs)(_.N, {
                                          className: v().title,
                                          containerClassName: v().linkContainer,
                                          textClassName: v().linkText,
                                          icon: (0, i.jsx)(d.I, { className: v().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: b,
                                          onClick: J,
                                          'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(f.DZ, {
                                                  id: h,
                                                  className: (0, l.$)(v().heading, E),
                                                  variant: P,
                                                  size: k,
                                                  weight: 'bold',
                                                  lineClamp: y,
                                                  ref: w,
                                                  children: C,
                                              }),
                                              L,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: v().title,
                                          children: [
                                              (0, i.jsx)(f.DZ, {
                                                  id: h,
                                                  className: (0, l.$)(v().heading, E, { [v().heading_notAvailable]: !R }),
                                                  variant: P,
                                                  size: k,
                                                  weight: 'bold',
                                                  lineClamp: y,
                                                  ref: w,
                                                  'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                                  children: C,
                                              }),
                                              L,
                                          ],
                                      }),
                            [R, J, w, P, h, C, E, y, k, b, L],
                        ),
                        q = (0, s.useMemo)(() => (F && M ? (0, i.jsx)(p.W, { isActive: D, className: v().shimmerDescription }) : x), [F, M, x, D]),
                        Q = (0, s.useMemo)(
                            () =>
                                H && M
                                    ? (0, i.jsx)(p.W, { isActive: D, className: (0, l.$)(v().shimmerCover, z), radius: 's' })
                                    : (0, i.jsx)(u._V, {
                                          src: r,
                                          fallbackIconVariant: j,
                                          style: { backgroundColor: S },
                                          className: v().cover,
                                          ref: $,
                                          onClick: X,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': c.S7.BLOCK_HEADER_COVER,
                                      }),
                            [S, r, j, X, D, M, z, H],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(v().root, t),
                        ref: W,
                        ...K,
                        'data-test-id': c.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: v().start,
                                children: [
                                    V && (0, i.jsx)(m.t, { radius: T, className: (0, l.$)(v().coverContainer, I), children: Q }),
                                    (0, i.jsxs)('div', {
                                        className: v().textContainer,
                                        children: [
                                            g,
                                            Z,
                                            Y &&
                                                (0, i.jsx)(f.HL, {
                                                    id: ''.concat(h, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: B ? 2 : void 0,
                                                    className: (0, l.$)(v().description, { [v().description_widthLimit]: B }),
                                                    'data-test-id': c.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: q,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            A || N,
                        ],
                    });
                },
                C = (0, s.forwardRef)((e, t) => (0, i.jsx)(g, { forwardRef: t, ...e }));
        },
        21010: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        24548: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        29008: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => a, r: () => n });
            var i = r(53548),
                l = r(2058),
                s = r(61691),
                a = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let n = (e, t) => {
                let { formatMessage: r } = (0, l.A)();
                return (0, i.useMemo)(() => {
                    switch (e) {
                        case s._.SINGLE:
                            return r({ id: 'entity-names.single' });
                        case s._.PODCAST:
                            return r({ id: 'entity-names.podcast' });
                        case s._.AUDIOBOOK:
                            if ('pin' === t) return r({ id: 'entity-names.book' });
                            return r({ id: 'entity-names.audio' });
                        case s._.FAIRY_TALE:
                            return r({ id: 'entity-names.fairy-tale' });
                        default:
                            return r({ id: 'entity-names.album' });
                    }
                }, [e, r, t]);
            };
        },
        31764: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => m });
            var i = r(88800),
                l = r(65724),
                s = r(53548),
                a = r(17392),
                n = r(88021),
                o = r(96817),
                c = r(52300),
                d = r(89544),
                u = r.n(d);
            let m = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: r,
                        forwardControlClassName: d,
                        className: m,
                        withSecondaryColor: p,
                        buttonSize: f = 'xxxs',
                        buttonVariant: _ = 'outline',
                    } = e,
                    { swipeBackward: h, swipeForward: v, shouldBackwardButtonBeDisabled: g, shouldForwardButtonBeDisabled: C, shouldHideControls: x } = (0, n.Y)(t),
                    b = (0, s.useCallback)(
                        (e) => {
                            (h(), e.stopPropagation());
                        },
                        [h],
                    ),
                    A = (0, s.useCallback)(
                        (e) => {
                            (v(), e.stopPropagation());
                        },
                        [v],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(u().root, m),
                    'data-test-id': a.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, l.$)(u().control, r, { [u().control_hidden]: x, [u().control_withSecondaryColor]: p }),
                            onClick: b,
                            size: f,
                            radius: 'round',
                            variant: _,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: g,
                            'data-test-id': a.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, l.$)(u().control, d, { [u().control_hidden]: x, [u().control_withSecondaryColor]: p }),
                            onClick: A,
                            size: f,
                            radius: 'round',
                            variant: _,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: C,
                            'data-test-id': a.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        33699: (e, t, r) => {
            'use strict';
            r.d(t, { CollectionShelfPage: () => P });
            var i = r(88800),
                l = r(84961),
                s = r(53548),
                a = r(2058),
                n = r(88969),
                o = r(17392),
                c = r(66719),
                d = r(29504),
                u = r(32596),
                m = r(69630),
                p = r(46422),
                f = r(44230),
                _ = r(37670),
                h = r(72288),
                v = r(86790),
                g = r(60266),
                C = r(93317),
                x = r(51059),
                b = r(65724),
                A = r(79070),
                k = r(76843),
                S = r(4370),
                T = r(98644),
                E = r(67984),
                y = r(93015),
                j = r(95259),
                R = r(36623),
                O = r(2955),
                L = r.n(O);
            let N = (0, l.PA)((e) => {
                var t;
                let { className: r, itemsCount: l, headerClassName: a } = e,
                    {
                        sonataState: n,
                        collection: {
                            shelf: { recentlyPlayed: c },
                        },
                    } = (0, h.g)(),
                    d = (0, A.L)(() => {
                        var e;
                        return null == (e = c.entities)
                            ? void 0
                            : e.map((e, t) => {
                                  let r = (0, j.T)(e, c.typeForFrom);
                                  return (0, i.jsx)(
                                      k.K,
                                      {
                                          track: e.track,
                                          playContextParams: {
                                              contextData: r,
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
                return (c.isNeededToLoad && (0, s.use)(c.getData()), !c.isLoading && (null == (t = c.entities) ? void 0 : t.length))
                    ? (0, i.jsx)(E.$, {
                          blockHeaderClassName: (0, b.$)(L().header, a),
                          className: r,
                          carouselItemClassName: (0, b.$)(L().shelfColumn, L().important),
                          shimmer: (0, i.jsx)(y.D, { variant: T.X.PLAYLIST, isActive: !0 }),
                          isShimmerVisible: c.isLoading,
                          isShimmerActive: !0,
                          maxColumnsCount: E.D.ONE,
                          blockHeaderTitle: c.title,
                          itemsCountPerColumn: null != l ? l : 0,
                          viewAllActionLink: S.Z.collectionShelfRecentlyPlayed.href,
                          'data-test-id': o.Xk.collection.COLLECTION_SHELF_PAGE_RECENTLY_PLAYED_BLOCK,
                          children: d,
                      })
                    : (0, i.jsx)(R.E, { className: r });
            });
            var w = r(38446),
                I = r.n(w);
            let P = (0, l.PA)(() => {
                let {
                        collection: { shelf: e },
                    } = (0, h.g)(),
                    { contentScrollRef: t, setContentScrollRef: r } = (0, f.g)(),
                    { formatMessage: l } = (0, a.A)(),
                    b = (0, p.W)();
                return ((0, s.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, _.J)(e.isResolved),
                e.isRejected)
                    ? (0, i.jsx)(u.SomethingWentWrong, {})
                    : (0, i.jsxs)(m.h, {
                          scrollElement: t,
                          outerTitle: l({ id: 'page.shelf' }),
                          children: [
                              (0, i.jsx)(C.Y, {
                                  variant: C.V.TEXT,
                                  withForwardControl: !1,
                                  withBackwardControl: b.canBack,
                                  children: (0, i.jsx)(d.DZ, {
                                      variant: 'h2',
                                      weight: 'bold',
                                      size: 'xl',
                                      lineClamp: 1,
                                      children: (0, i.jsx)(n.A, { id: 'page.shelf' }),
                                  }),
                              }),
                              (0, i.jsx)(c.N, {
                                  ref: r,
                                  containerClassName: I().scrollableContainer,
                                  className: I().root,
                                  'data-test-id': o.Xk.collection.COLLECTION_SHELF_PAGE,
                                  children: (0, i.jsxs)('div', {
                                      className: I().content,
                                      children: [
                                          e.hasRecentlyPlayed && (0, i.jsx)(N, { className: I().block, headerClassName: I().blockHeader, itemsCount: 5 }),
                                          e.hasLiked && (0, i.jsx)(x.m, { className: I().block, headerClassName: I().blockHeader, itemsCount: 5 }),
                                          (0, i.jsx)(g.A, { children: (0, i.jsx)(v.w, { className: I().footer }) }),
                                      ],
                                  }),
                              }),
                          ],
                      });
            });
        },
        35994: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => l });
            var i = r(67174);
            let l = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37670: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => s });
            var i = r(53548);
            r(30282);
            var l = r(58390);
            let s = (e) => {
                let t = (0, l.usePathname)(),
                    [r, s] = (0, i.useState)(!1);
                ((0, i.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, i.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, r, t]));
            };
        },
        38446: (e) => {
            e.exports = {
                root: 'CollectionShelfPage_root__S0__c',
                scrollableContainer: 'CollectionShelfPage_scrollableContainer__9f317',
                content: 'CollectionShelfPage_content__AG3r8',
                block: 'CollectionShelfPage_block__34jyy',
                blockHeader: 'CollectionShelfPage_blockHeader__Qjoln',
                footer: 'CollectionShelfPage_footer__pgWKV',
            };
        },
        40634: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => C });
            var i = r(88800),
                l = r(65724),
                s = r(84961),
                a = r(53548),
                n = r(87999),
                o = r(80643),
                c = r(17392),
                d = r(29993),
                u = r(90688),
                m = r(19934),
                p = r(7555),
                f = r(29504),
                _ = r(78940),
                h = r(72288),
                v = r(80932),
                g = r.n(v);
            let C = (0, s.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: s } = (0, h.g)(),
                    v = (0, _.Z)(t.url),
                    x = (0, o.S)(),
                    b = (0, a.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(C, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    A = (0, d.c)((e) => {
                        (s.modal.isOpened && s.modal.close(), x({ to: n.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(m.Dr, {
                            className: (0, l.$)(g().root, r),
                            onClick: A,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(p.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, i.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, i.jsx)(f.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        b,
                    ],
                });
            });
        },
        44988: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => d });
            var i = r(88800),
                l = r(84961),
                s = r(17392),
                a = r(52300),
                n = r(19934),
                o = r(108),
                c = r(72288);
            let d = (0, l.PA)((e) => {
                let { isLiked: t, onClick: r, className: l, iconClassName: d, albumType: u, disabled: m } = e,
                    { user: p } = (0, c.g)(),
                    f = t ? 'liked' : 'like',
                    _ = (0, o.$)(t, u);
                return (0, i.jsx)(n.Dr, {
                    className: l,
                    onClick: r,
                    icon: (0, i.jsx)(a.I, { className: d, variant: f, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !p.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: _,
                });
            });
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        52150: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            let i = (0, r(53548).createContext)({ pageAlbumId: void 0 });
        },
        53323: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => d });
            var i,
                l = r(87819),
                s = r(53548),
                a = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (l && (l += ' '), (l += i));
                                            else for (r in t) t[r] && (l && (l += ' '), (l += r));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    2876: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var s in ((i = {}), t)) 'key' !== s && (i[s] = t[s]);
                            else i = t;
                            return { $$typeof: r, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    792: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let i = r(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, i.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                                    return t.current.callback(...r);
                                },
                                callback: e,
                            });
                            return (
                                (0, i.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    597: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let i = r(810),
                            { innerWidth: l = 0, innerHeight: s = 0 } = window;
                        function a(e) {
                            let { top: t, right: r, bottom: i, left: a } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= s) || (i >= 0 && i <= s)) && ((a >= 0 && a <= l) || (r >= 0 && r <= l));
                        }
                        function n(e) {
                            var t, r;
                            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, i)) ? r : e.attributes[0];
                        }
                        function o(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = a),
                            (t.getElementNameByDataAttribute = n),
                            (t.createIntersectionObserver = o),
                            (t.useIntersectionObserver = function (e, r, l) {
                                let [{ freezeOnceVisible: s, preflightCheck: c, ...d }, u = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, l],
                                    [m, p] = (0, i.useState)({}),
                                    f = (0, i.useRef)(new Set()),
                                    _ = (0, i.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : o((e) => {
                                                      let t = n(e.target);
                                                      if (t && _) {
                                                          if (f.current.has(t)) return;
                                                          (p((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              s && e.isIntersecting && (f.current.add(t), _.unobserve(e.target)));
                                                      }
                                                  }, d),
                                        [u],
                                    );
                                return (
                                    (0, i.useLayoutEffect)(
                                        () => (
                                            _ &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = a(e.current))) {
                                                            let t = n(e.current);
                                                            p((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || _.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                _ && _.disconnect();
                                            }
                                        ),
                                        [u, _, e.length],
                                    ),
                                    m
                                );
                            }));
                    },
                    4012: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useMergeRefs = void 0));
                        var i = r(1964);
                        Object.defineProperty(t, 'useMergeRefs', {
                            enumerable: !0,
                            get: function () {
                                return i.useMergeRefs;
                            },
                        });
                    },
                    1676: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let i = r(810);
                        t.useToggle = (e) => {
                            let [t, r] = (0, i.useState)(e);
                            (0, i.useEffect)(() => {
                                r(e);
                            }, [e]);
                            let l = (0, i.useCallback)(() => {
                                    r((e) => !e);
                                }, []),
                                s = (0, i.useCallback)(() => {
                                    r(!0);
                                }, []),
                                a = (0, i.useCallback)(() => {
                                    r(!1);
                                }, []);
                            return { state: t, toggle: l, setState: r, toggleTrue: s, toggleFalse: a };
                        };
                    },
                    1258: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.AutoScrollCarousel = void 0));
                        let i = r(4377),
                            l = r(810),
                            s = r(792),
                            a = r(597),
                            n = r(4012),
                            o = r(1676),
                            c = r(7962),
                            d = r(2134),
                            u = r(7262);
                        t.AutoScrollCarousel = (e) => {
                            let {
                                    ref: t,
                                    children: r,
                                    autoplay: { enabled: m, delay: p, stopOnMouseEnter: f, stopOnFocusIn: _, stopOnInteraction: h },
                                    onPointerEnter: v,
                                    onPointerLeave: g,
                                    onPointerDown: C,
                                    onPointerUp: x,
                                    onPointerCancel: b,
                                    onFocus: A,
                                    onBlur: k,
                                    onScroll: S,
                                    onScrollEnd: T,
                                    ...E
                                } = e,
                                { state: y, toggleTrue: j, toggleFalse: R } = (0, o.useToggle)(!1),
                                { state: O, toggleTrue: L, toggleFalse: N } = (0, o.useToggle)(!1),
                                { state: w, setState: I, toggleFalse: P } = (0, o.useToggle)(!1),
                                { state: B, setState: M } = (0, o.useToggle)(!1),
                                { state: D, setState: H } = (0, o.useToggle)(!1),
                                { state: F, toggleTrue: W, toggleFalse: z } = (0, o.useToggle)(!1),
                                { state: U, toggleTrue: K } = (0, o.useToggle)(!1),
                                { state: $, setState: V } = (0, o.useToggle)(!1),
                                Y = (0, l.useRef)(null),
                                X = (0, n.useMergeRefs)([Y, t]),
                                G = (0, u.useScrollEndFallback)(z),
                                J = l.Children.count(r),
                                Z = m && J > 1 && B && D && !$ && !((f && w) || (_ && y) || (h && U) || O || F),
                                q = (0, s.useCallbackRef)((e) => {
                                    (I('mouse' === e.pointerType), null == v || v(e));
                                }),
                                Q = (0, s.useCallbackRef)((e) => {
                                    (P(), N(), null == g || g(e));
                                }),
                                ee = (0, s.useCallbackRef)((e) => {
                                    (L(), K(), null == C || C(e));
                                }),
                                et = (0, s.useCallbackRef)((e) => {
                                    (N(), null == x || x(e));
                                }),
                                er = (0, s.useCallbackRef)((e) => {
                                    (N(), null == b || b(e));
                                }),
                                ei = (0, s.useCallbackRef)((e) => {
                                    (O || j(), null == A || A(e));
                                }),
                                el = (0, s.useCallbackRef)((e) => {
                                    (e.currentTarget.contains(e.relatedTarget) || R(), null == k || k(e));
                                }),
                                es = (0, s.useCallbackRef)((e) => {
                                    (W(), G(e.currentTarget), null == S || S(e));
                                }),
                                ea = (0, s.useCallbackRef)((e) => {
                                    (z(), null == T || T(e));
                                });
                            return (
                                (0, l.useEffect)(() => {
                                    let e = matchMedia('(prefers-reduced-motion: reduce)'),
                                        t = () => V(e.matches);
                                    return (t(), e.addEventListener('change', t), () => e.removeEventListener('change', t));
                                }, [V]),
                                (0, l.useEffect)(() => {
                                    let e = Y.current;
                                    if (!e) return;
                                    let t = (0, a.createIntersectionObserver)((e) => {
                                        M(e.isIntersecting && e.intersectionRatio > 0);
                                    });
                                    return (t.observe(e), () => t.disconnect());
                                }, [Y, M]),
                                (0, l.useEffect)(() => {
                                    let e = () => H('visible' === document.visibilityState);
                                    return (document.addEventListener('visibilitychange', e), e(), () => document.removeEventListener('visibilitychange', e));
                                }, [H]),
                                (0, l.useEffect)(() => {
                                    let e = Y.current;
                                    if (!e || !Z) return;
                                    let t = setInterval(() => {
                                        let r = (0, d.getNextCarouselScrollPosition)(e);
                                        void 0 !== r && (clearInterval(t), W(), e.scrollTo({ left: r, behavior: 'smooth' }));
                                    }, p);
                                    return () => clearInterval(t);
                                }, [Y, p, Z, J, W]),
                                (0, i.jsx)(c.CarouselBase, {
                                    ref: X,
                                    ...E,
                                    onPointerEnter: q,
                                    onPointerLeave: Q,
                                    onPointerDown: ee,
                                    onPointerUp: et,
                                    onPointerCancel: er,
                                    onFocus: ei,
                                    onBlur: el,
                                    onScroll: es,
                                    onScrollEnd: ea,
                                    children: r,
                                })
                            );
                        };
                    },
                    2134: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getNextCarouselScrollPosition = void 0),
                            (t.getNextCarouselScrollPosition = (e) => {
                                let t = e.scrollWidth - e.clientWidth;
                                if (t <= 1) return;
                                let r = getComputedStyle(e),
                                    i = parseFloat(r.scrollPaddingLeft) || 0,
                                    l = parseFloat(r.scrollPaddingRight) || 0,
                                    s = e.getBoundingClientRect().left + e.clientLeft,
                                    a = 0;
                                for (let r of e.children) {
                                    let n = r.getBoundingClientRect(),
                                        o = getComputedStyle(r).scrollSnapAlign,
                                        c = n.left - s + e.scrollLeft,
                                        d = Math.max(0, Math.min(t, 'center' === o ? c + n.width / 2 - (e.clientWidth + i - l) / 2 : c - i));
                                    if (d > e.scrollLeft + 1) {
                                        a = d;
                                        break;
                                    }
                                }
                                if (!(1 >= Math.abs(a - e.scrollLeft))) return a;
                            }));
                    },
                    7262: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScrollEndFallback = void 0));
                        let i = r(810),
                            l = r(792);
                        t.useScrollEndFallback = (e) => {
                            let t = (0, i.useRef)(void 0),
                                r = (0, l.useCallbackRef)(e);
                            return (
                                (0, i.useEffect)(() => () => clearTimeout(t.current), []),
                                (0, l.useCallbackRef)((e) => {
                                    'onscrollend' in e || (clearTimeout(t.current), (t.current = setTimeout(r, 200)));
                                })
                            );
                        };
                    },
                    4014: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let i = r(4377),
                            l = r(1258),
                            s = r(7962);
                        t.Carousel = (e) => {
                            let { autoplay: t, ...r } = e;
                            return t ? (0, i.jsx)(l.AutoScrollCarousel, { ...r, autoplay: t }) : (0, i.jsx)(s.CarouselBase, { ...r });
                        };
                    },
                    7962: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CarouselBase = void 0));
                        let l = r(4377),
                            s = r(5881),
                            a = r(810),
                            n = i(r(2876));
                        t.CarouselBase = (e) => {
                            let { className: t, itemClassName: r, children: i, ref: o, role: c, ...d } = e;
                            return (0, l.jsx)('ol', {
                                ref: o,
                                className: (0, s.clsx)(n.default.root, t),
                                ...d,
                                role: null != c ? c : 'list',
                                children: a.Children.map(i, (e) => (0, l.jsx)('li', { className: (0, s.clsx)(n.default.item, r), children: e })),
                            });
                        };
                    },
                    1964: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(s, 2));
                    },
                },
                n = {};
            function o(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (a[e].call(r.exports, r, r.exports, o), r.exports);
            }
            ((o.d = (e, t) => {
                for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var c = {};
            (() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                var e = o(4014);
                Object.defineProperty(c, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var d = c.l;
            c.X;
        },
        56446: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => u });
            var i = r(88800),
                l = r(53548),
                s = r(2058),
                a = r(17392),
                n = r(96817),
                o = r(52300),
                c = r(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: r,
                            size: l,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: p,
                            iconClassName: f,
                            className: _,
                            forwardRef: h,
                            style: v,
                            children: g,
                        } = e,
                        { formatMessage: C } = (0, s.A)(),
                        x = C({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(n.$, {
                        className: _,
                        color: 'secondary',
                        radius: d,
                        size: l,
                        variant: t,
                        withRipple: r,
                        flexIcon: !0,
                        'aria-label': x,
                        onClick: p,
                        ref: h,
                        icon: (0, i.jsx)(o.I, { variant: 'trailer', size: u, className: f }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': a.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, l.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        60757: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => l });
            var i = r(58217);
            let l = (e) => {
                let { album: t, callback: r, shouldHistoryBack: l } = e;
                return (0, i.l)({ entity: t, callback: r, modalBehavior: void 0 === l ? void 0 : { shouldHistoryBack: l }, preventDefaultWhenSafe: !0 });
            };
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        87762: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => s });
            var i = r(53548),
                l = r(52150);
            function s() {
                return (0, i.useContext)(l.H);
            }
        },
        88021: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => d });
            var i,
                l = r(14022),
                s = r(53548),
                a = {
                    352: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(s, 2));
                    },
                },
                n = {};
            function o(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (a[e](r, r.exports, o), r.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = o(810),
                    t = o(352);
                c.l = (r) => {
                    let [i, l] = (0, e.useState)(!0),
                        [s, a] = (0, e.useState)(!0),
                        n = () => {
                            let e = null == r ? void 0 : r.current;
                            e && (l(0 === e.scrollLeft), a(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        n();
                    }, [r, n]),
                        (0, e.useEffect)(() => {
                            let e = null == r ? void 0 : r.current;
                            return (
                                null == e || e.addEventListener('scroll', n),
                                window.addEventListener('resize', n),
                                () => {
                                    (null == e || e.removeEventListener('scroll', n), window.removeEventListener('resize', n));
                                }
                            );
                        }, [r, n]));
                    let o = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    r && r.current && (r.current.scrollLeft += r.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [r],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        r && r.current && (r.current.scrollLeft -= r.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [r],
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
        89544: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        90224: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => _ });
            var i = r(88800),
                l = r(65724),
                s = r(84961),
                a = r(53548),
                n = r(2058),
                o = r(17392),
                c = r(52300),
                d = r(62837),
                u = r(72288),
                m = r(94398),
                p = r(17332),
                f = r.n(p);
            let _ = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: s, containerClassName: p, variant: _, iconVariant: iconOverride, size: h = 'xxxs', ...v } = e,
                    { formatMessage: g } = (0, n.A)(),
                    {
                        settings: { isMobile: C },
                    } = (0, u.g)(),
                    [x, b] = (0, a.useState)(null);
                (0, a.useEffect)(() => {
                    r && r().then(b);
                }, [r, s]);
                let {
                    iconVariant: A,
                    descriptionText: k,
                    isTooltipEnabled: S,
                    ariaLabel: T,
                } = ((e, t) => {
                    let { variant: r, descriptionTexts: i, isMobile: l } = e,
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
                        })(r),
                        descriptionText: s,
                        isTooltipEnabled: !!(null == i ? void 0 : i.length) && !l,
                        ariaLabel: s.length > 0 ? s : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: _, descriptionTexts: x, isMobile: C }, g);
                return (0, i.jsx)(m.k, {
                    description: k,
                    placement: 'bottom-start',
                    enabled: S,
                    children: (0, i.jsx)('span', {
                        className: p,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        _ === d.JU.SUBSTITUTED ? (0, i.jsxs)('svg', {
                            className: (0, l.$)(f().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': T,
                            style: { width: 'var(--ym-icon-size-'.concat(h, ')'), height: 'var(--ym-icon-size-'.concat(h, ')') },
                            ...v,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, i.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, i.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, i.jsx)(c.I, {
                            className: (0, l.$)(f().explicitMark, t),
                            'aria-label': T,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : A,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? h : h,
                            style: iconOverride ? { width: `var(--ym-icon-size-${h})`, height: `var(--ym-icon-size-${h})` } : undefined,
                            ...v,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
                    }),
                });
            });
        },
        92966: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => _ });
            var i = r(88800),
                l = r(2058),
                s = r(29993),
                a = r(87762),
                n = r(29595),
                o = r(74965),
                c = r(72288),
                d = r(66943),
                u = r(96706),
                m = r(53548),
                p = r(79390),
                f = r(96295);
            let _ = (e) => {
                let {
                        user: t,
                        paywall: r,
                        albumCPA: { isPlusCPAEnabled: _ },
                    } = (0, c.g)(),
                    { formatMessage: h } = (0, l.A)(),
                    { notify: v } = (0, o.l)(),
                    g = (() => {
                        let { notify: e } = (0, o.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [r, a] = (0, m.useState)(!1),
                            { formatMessage: _ } = (0, l.A)();
                        return (0, s.c)(async (l) => {
                            let { album: s, withLink: o = !0, withNotification: c = !0 } = l;
                            if (r) return;
                            let m = { ...(0, u.HO)(s), url: s.url, isLiked: !s.isLiked };
                            a(!0);
                            let h = await s.toggleLike();
                            if ((a(!1), !c)) return;
                            let v = t.modal.isOpened;
                            h === p.f.OK
                                ? e((0, i.jsx)(f.T, { withLink: o, album: m }), { containerId: v ? n.u.FULLSCREEN_INFO : n.u.INFO })
                                : e((0, i.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: v ? n.u.FULLSCREEN_ERROR : n.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: C } = (0, a.T)();
                return (0, s.c)(async () => {
                    if (e)
                        return _({ pageAlbumId: C, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void r.openModal()
                            : t.isAuthorized
                              ? g({ album: e })
                              : void v((0, i.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                });
            };
        },
        94398: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => d });
            var i = r(88800),
                l = r(17392),
                s = r(17610),
                a = r(29504),
                n = r(37438),
                o = r.n(n);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: r, title: n, placement: d = 'top', children: u } = e;
                    return (0, i.jsxs)(s.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, i.jsx)(s.ZI, {
                                className: o().root,
                                'data-test-id': l.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        n && (0, i.jsx)(a.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: n }),
                                        (0, i.jsx)(a.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        95259: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => s });
            var i,
                l = r(18593);
            !(function (e) {
                ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'));
            })(i || (i = {}));
            let s = (e, t) => {
                var r, s;
                return e.type === i.ALBUM
                    ? { type: l.K.Album, meta: { id: (null == (s = e.album) ? void 0 : s.id) || 0 }, from: t || '' }
                    : { type: l.K.Playlist, meta: { id: (null == (r = e.playlist) ? void 0 : r.id) || '' }, from: t || '' };
            };
        },
        95827: (e, t, r) => {
            (Promise.resolve().then(r.bind(r, 57328)), Promise.resolve().then(r.bind(r, 33699)));
        },
        96295: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => n });
            var i = r(88800),
                l = r(84961),
                s = r(42729),
                a = r(5048);
            let n = (0, l.PA)((e) => {
                let { album: t, closeToast: r, withLink: l } = e,
                    n = (0, a.b)(t.type);
                return (0, i.jsx)(s.O, {
                    closeToast: r,
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
    },
    (e) => {
        (e.O(
            0,
            [
                4814, 7437, 8655, 3469, 8194, 1833, 918, 9079, 1191, 1041, 3375, 3730, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 7746, 4732,
                9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 818, 7053, 2391, 763, 2670, 7358,
            ],
            () => e((e.s = 95827)),
        ),
            (_N_E = e.O()));
    },
]);
