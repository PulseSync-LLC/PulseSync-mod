(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1528, 2837],
    {
        108: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            var s = i(2058),
                r = i(61691);
            let a = (e, t) => {
                let { formatMessage: i } = (0, s.A)();
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
        2955: (e) => {
            e.exports = {
                header: 'CollectionShelfRecentlyPlayed_header__Nx7Cc',
                shelfColumn: 'CollectionShelfRecentlyPlayed_shelfColumn__9xHhf',
                important: 'CollectionShelfRecentlyPlayed_important__HS0GM',
            };
        },
        4795: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => a });
            var s = i(72288),
                r = i(97956);
            let a = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: a },
                    experiments: l,
                } = (0, s.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = l.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5048: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            var s = i(61691),
                r = i(15077);
            let a = (e) => {
                switch (e) {
                    case s._.PODCAST:
                        return r.c.PODCAST;
                    case s._.AUDIOBOOK:
                        return r.c.AUDIOBOOK;
                    case s._.FAIRY_TALE:
                        return r.c.FAIRY_TALE;
                    default:
                        return r.c.ALBUM;
                }
            };
        },
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => G });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                l = i(53548),
                n = i(79070),
                o = i(17610),
                d = i(24548),
                c = i(29993),
                u = i(72288),
                m = i(35994);
            let p = (e, t) => {
                let { withLink: i, separator: s } = t,
                    r = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: r };
            };
            var h = i(21010),
                v = i.n(h),
                _ = i(17392),
                f = i(29504),
                A = i(91292),
                b = i(2058),
                C = i(92716),
                g = i(96527),
                x = i(78940),
                I = i(55693),
                y = i(58217);
            let O = (0, a.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: r, captionSize: a = 'm', allArtistsTitle: l, withCustomTooltip: n, hoverSettings: d } = e,
                        {
                            name: m,
                            link: p,
                            title: h,
                            ariaLabel: v,
                            tooltipText: O,
                            isTooltipEnabled: E,
                            handleNavigate: T,
                        } = ((e) => {
                            var t, i;
                            let { item: s, allArtistsTitle: r, withCustomTooltip: a } = e,
                                { formatMessage: l } = (0, b.A)(),
                                n = ((e, t) => {
                                    let { item: i, allArtistsTitle: s, withCustomTooltip: r } = e,
                                        a = s || i.name;
                                    return {
                                        ...i,
                                        title: r ? void 0 : a,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: a,
                                        isTooltipEnabled: !s && r,
                                    };
                                })({ item: s, allArtistsTitle: r, withCustomTooltip: a }, l),
                                {
                                    track: o,
                                    settings: { isMobile: d },
                                } = (0, u.g)(),
                                m = (0, x.Z)(null != (i = null == (t = n.link) ? void 0 : t.href) ? i : n.artist.url),
                                { sendNavigateSearchFeedback: p } = (0, I.z)(),
                                h = (0, g.N)(),
                                v = (0, c.c)((e) => {
                                    (d && o.isOpened && o.close(), m(e));
                                }),
                                _ = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: r, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: l } = s;
                                    return (0, y.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), l.isOpened && (s.reset(), l.close()), r.modal.isOpened && r.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: n.artist, callback: v }),
                                f = (0, c.c)((e) => {
                                    (h({ to: C.AppScreen.ArtistScreen }), null == p || p(), _(e));
                                });
                            return { ...n, handleNavigate: f };
                        })({ item: t, allArtistsTitle: l, withCustomTooltip: n });
                    return p
                        ? (0, s.jsx)(A.N, {
                              ...p,
                              'aria-label': v,
                              className: i,
                              onClick: T,
                              title: h,
                              'data-test-id': _.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: E,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: O,
                                  hoverSettings: d,
                                  children: (0, s.jsx)(f.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: r, children: m }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: E,
                              offsetOptions: 4,
                              placement: 'top',
                              text: O,
                              hoverSettings: d,
                              children: (0, s.jsx)(f.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: r,
                                  title: h,
                                  'data-test-id': _.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                E = (e) => {
                    let { group: t, linkClassName: i, captionClassName: r, captionSize: a, allArtistsTitle: n, withCustomTooltip: o, hoverSettings: d } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(O, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: r,
                                captionSize: a,
                                allArtistsTitle: n,
                                withCustomTooltip: o,
                                hoverSettings: d,
                            }),
                            t.decomposed.map((e) =>
                                (0, s.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, s.jsx)(O, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: r,
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
            var T = i(88969),
                N = i(65453);
            let L = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: a } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(N.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(v().spoiler, i),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': _.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(T.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var S = i(61013),
                k = i(87819),
                w = i(40634),
                j = i(48468),
                P = i.n(j);
            let R = (0, a.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, k.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: r, children: t }),
                            (0, s.jsx)(o.ZI, { className: P().tooltipContent, children: i.map((e) => (0, s.jsx)(w.V, { artist: e, className: P().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, l.forwardRef)((e, t) => (0, s.jsx)(R, { forwardRef: t, ...e }));
            var M = i(19934),
                B = i(70396),
                F = i.n(B);
            let V = (0, a.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: a } = (0, b.A)();
                    return (0, s.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, r.$)(F().root, F().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(w.V, { artist: e }, e.id)),
                    });
                }),
                U = (0, a.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [a, o] = (0, l.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, u.g)(),
                        m = (0, c.c)(() => {
                            let e = r.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, n.L)(() =>
                            (0, S.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, l.useEffect)(
                            () => (
                                window.addEventListener('resize', p),
                                m(),
                                () => {
                                    window.removeEventListener('resize', p);
                                }
                            ),
                            [p, m],
                        ),
                        (0, l.useEffect)(() => {
                            m();
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (a || d) && (!d || 1 !== t.length) ? (d ? (0, s.jsx)(V, { artists: t, label: i }) : (0, s.jsx)(D, { artists: t, label: i })) : i;
                }),
                G = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: a,
                            linkClassName: m,
                            captionClassName: h,
                            captionSize: _,
                            variant: f = 'breakAll',
                            spoilerComponent: A,
                            ...b
                        } = e,
                        C = ((e) => {
                            var t, i, s;
                            let { separator: r, visibleArtistsCount: a, withLink: n, withComposer: o, artistIdWithoutLink: d, withContextMenu: m } = e,
                                h = null != (t = e.artists) ? t : [],
                                v = null == (i = e.withAllArtistsTitle) || i,
                                _ = null == (s = e.withCustomTooltip) || s,
                                f = (0, l.useRef)(null),
                                [A, b] = (0, l.useState)(!1),
                                {
                                    settings: { isMobile: C },
                                } = (0, u.g)(),
                                g = ((!C || 1 === h.length) && m) || !m,
                                x = ((e, t) => {
                                    var i, s, r;
                                    let a = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        l = null == (s = null == t ? void 0 : t.withLink) || s,
                                        n = null != (r = null == t ? void 0 : t.separator) ? r : ', ',
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
                                                let { withLink: s, separator: r, isFirst: a } = t;
                                                return {
                                                    primary: p(e, { withLink: s, separator: a ? void 0 : r }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = r ? e.separator : '';
                                                        return p(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: l && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: n, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: c,
                                    };
                                })(h, { separator: r, visibleArtistsCount: A ? void 0 : a, withComposer: o, withLink: !!g && n, artistIdWithoutLink: d }),
                                I = v ? x.allArtistsTitle : '',
                                y = (0, c.c)((e) => {
                                    (b(!0), e.preventDefault());
                                });
                            return {
                                artists: h,
                                groups: x.groups,
                                hiddenArtistsCount: x.hiddenArtistsCount,
                                allArtistsTitle: I,
                                withCustomTooltip: _,
                                withContextMenu: m,
                                labelRef: f,
                                handleOnSpoilerClick: y,
                                isTooltipEnabled: !!I && _ && !m && !C,
                                title: !I || _ || m ? void 0 : I,
                            };
                        })(b),
                        g = (0, n.L)(() =>
                            C.hiddenArtistsCount <= 0
                                ? null
                                : (0, l.isValidElement)(A)
                                  ? A
                                  : (0, s.jsx)(L, { spoilerClassName: a, spoilerArtistsCount: C.hiddenArtistsCount, handleOnSpoilerClick: C.handleOnSpoilerClick }),
                        ),
                        x = (0, s.jsx)(o.m_, {
                            referenceRef: C.labelRef,
                            enabled: C.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: C.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, r.$)(v().root, v()['root_variant_'.concat(f)], { [v().root_clamp]: i && i > 0, [v().ellipsis]: !i }, t),
                                title: C.title,
                                children: [
                                    C.groups.map((e) =>
                                        (0, s.jsx)(
                                            E,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: h,
                                                captionSize: _,
                                                allArtistsTitle: C.allArtistsTitle,
                                                withCustomTooltip: C.withCustomTooltip,
                                                hoverSettings: d.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    g,
                                ],
                            }),
                        });
                    return C.withContextMenu ? (0, s.jsx)(U, { labelRef: C.labelRef, artists: C.artists, label: x }) : x;
                });
        },
        14965: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => s });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: r = {}, ...a } = t,
                        l = e || 'Internal error';
                    (super(l, a), (this.message = l), (this.code = i), (this.data = r), (this.stack = Error(l).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        15526: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        17332: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        18143: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { T: () => s }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(s || (s = {})));
        },
        18278: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => d });
            var s = i(88800),
                r = i(53548),
                a = i(17392),
                l = i(29504),
                n = i(15526),
                o = i.n(n);
            let d = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [n, d] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
                        t && t().then(d);
                    }, [t]),
                    n)
                )
                    return n.map((e, t) =>
                        (0, s.jsx)(
                            l.HL,
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
        21010: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        29008: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => l, r: () => n });
            var s = i(53548),
                r = i(2058),
                a = i(61691),
                l = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let n = (e, t) => {
                let { formatMessage: i } = (0, r.A)();
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
        33699: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionShelfPage: () => R });
            var s = i(88800),
                r = i(84961),
                a = i(53548),
                l = i(2058),
                n = i(88969),
                o = i(17392),
                d = i(66719),
                c = i(29504),
                u = i(32596),
                m = i(69630),
                p = i(46422),
                h = i(44230),
                v = i(37670),
                _ = i(72288),
                f = i(86790),
                A = i(60266),
                b = i(93317),
                C = i(51059),
                g = i(65724),
                x = i(79070),
                I = i(76843),
                y = i(4370),
                O = i(98644),
                E = i(67984),
                T = i(93015),
                N = i(95259),
                L = i(36623),
                S = i(2955),
                k = i.n(S);
            let w = (0, r.PA)((e) => {
                var t;
                let { className: i, itemsCount: r, headerClassName: l } = e,
                    {
                        sonataState: n,
                        collection: {
                            shelf: { recentlyPlayed: d },
                        },
                    } = (0, _.g)(),
                    c = (0, x.L)(() => {
                        var e;
                        return null == (e = d.entities)
                            ? void 0
                            : e.map((e, t) => {
                                  let i = (0, N.T)(e, d.typeForFrom);
                                  return (0, s.jsx)(
                                      I.K,
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
                          blockHeaderClassName: (0, g.$)(k().header, l),
                          className: i,
                          carouselItemClassName: (0, g.$)(k().shelfColumn, k().important),
                          shimmer: (0, s.jsx)(T.D, { variant: O.X.PLAYLIST, isActive: !0 }),
                          isShimmerVisible: d.isLoading,
                          isShimmerActive: !0,
                          maxColumnsCount: E.D.ONE,
                          blockHeaderTitle: d.title,
                          itemsCountPerColumn: null != r ? r : 0,
                          viewAllActionLink: y.Z.collectionShelfRecentlyPlayed.href,
                          'data-test-id': o.Xk.collection.COLLECTION_SHELF_PAGE_RECENTLY_PLAYED_BLOCK,
                          children: c,
                      })
                    : (0, s.jsx)(L.E, { className: i });
            });
            var j = i(38446),
                P = i.n(j);
            let R = (0, r.PA)(() => {
                let {
                        collection: { shelf: e },
                    } = (0, _.g)(),
                    { contentScrollRef: t, setContentScrollRef: i } = (0, h.g)(),
                    { formatMessage: r } = (0, l.A)(),
                    g = (0, p.W)();
                return ((0, a.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, v.J)(e.isResolved),
                e.isRejected)
                    ? (0, s.jsx)(u.SomethingWentWrong, {})
                    : (0, s.jsxs)(m.h, {
                          scrollElement: t,
                          outerTitle: r({ id: 'page.shelf' }),
                          children: [
                              (0, s.jsx)(b.Y, {
                                  variant: b.V.TEXT,
                                  withForwardControl: !1,
                                  withBackwardControl: g.canBack,
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
                                          e.hasRecentlyPlayed && (0, s.jsx)(w, { className: P().block, headerClassName: P().blockHeader, itemsCount: 5 }),
                                          e.hasLiked && (0, s.jsx)(C.m, { className: P().block, headerClassName: P().blockHeader, itemsCount: 5 }),
                                          (0, s.jsx)(A.A, { children: (0, s.jsx)(f.w, { className: P().footer }) }),
                                      ],
                                  }),
                              }),
                          ],
                      });
            });
        },
        35994: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => r });
            var s = i(67174);
            let r = (e) => (0, s.u)('/artist/:artistId', { params: { artistId: e } });
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37670: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => a });
            var s = i(53548);
            i(30282);
            var r = i(58390);
            let a = (e) => {
                let t = (0, r.usePathname)(),
                    [i, a] = (0, s.useState)(!1);
                ((0, s.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, s.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, i, t]));
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
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => b });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                l = i(53548),
                n = i(92716),
                o = i(17392),
                d = i(29993),
                c = i(90688),
                u = i(19934),
                m = i(7555),
                p = i(29504),
                h = i(96527),
                v = i(78940),
                _ = i(72288),
                f = i(80932),
                A = i.n(f);
            let b = (0, a.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: a } = (0, _.g)(),
                    f = (0, v.Z)(t.url),
                    C = (0, h.N)(),
                    g = (0, l.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(b, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    x = (0, d.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), C({ to: n.AppScreen.ArtistScreen }), f(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(u.Dr, {
                            className: (0, r.$)(A().root, i),
                            onClick: x,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(m.t, {
                                    radius: 'round',
                                    className: A().cover,
                                    children: (0, s.jsx)(c._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: A().image }),
                                }),
                                (0, s.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        g,
                    ],
                });
            });
        },
        44988: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var s = i(88800),
                r = i(84961),
                a = i(17392),
                l = i(52300),
                n = i(19934),
                o = i(108),
                d = i(72288);
            let c = (0, r.PA)((e) => {
                let { isLiked: t, onClick: i, className: r, iconClassName: c, albumType: u, disabled: m } = e,
                    { user: p } = (0, d.g)(),
                    h = t ? 'liked' : 'like',
                    v = (0, o.$)(t, u);
                return (0, s.jsx)(n.Dr, {
                    className: r,
                    onClick: i,
                    icon: (0, s.jsx)(l.I, { className: c, variant: h, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !p.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: v,
                });
            });
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        52150: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s });
            let s = (0, i(53548).createContext)({ pageAlbumId: void 0 });
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var s = i(88800),
                r = i(53548),
                a = i(2058),
                l = i(17392),
                n = i(96817),
                o = i(52300),
                d = i(39318);
            let c = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: r,
                            radius: c,
                            iconSize: u,
                            disabled: m,
                            onClick: p,
                            iconClassName: h,
                            className: v,
                            forwardRef: _,
                            style: f,
                            children: A,
                        } = e,
                        { formatMessage: b } = (0, a.A)(),
                        C = b({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(n.$, {
                        className: v,
                        color: 'secondary',
                        radius: c,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: p,
                        ref: _,
                        icon: (0, s.jsx)(o.I, { variant: 'trailer', size: u, className: h }),
                        disabled: m,
                        'data-intersection-property-id': d.N,
                        style: f,
                        'data-test-id': l.S7.TRAILER_BUTTON,
                        children: A,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, s.jsx)(c, { forwardRef: t, ...e }));
        },
        60757: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => r });
            var s = i(58217);
            let r = (e) => {
                let { album: t, callback: i, shouldHistoryBack: r } = e;
                return (0, s.l)({ entity: t, callback: i, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        62837: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => m, Yw: () => s, JU: () => r, DQ: () => v, Ve: () => _ });
            var s,
                r,
                a = i(43297),
                l = (function () {
                    function e(e) {
                        ((this.observableValue = (0, a.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var i = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var s = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (r) {
                                    if (r !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && s) {
                                            s = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, r), e(r));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, a.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var i = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var s = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (r) {
                                if (r !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && s) {
                                        s = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, r), e(r));
                                }
                            })
                        );
                    }));
            })();
            var n = i(14965);
            class o extends n.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, o.prototype));
                }
            }
            class d extends n.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, d.prototype));
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.MODAL = 'modal'),
                    (t.FOREIGN_AGENT = 'foreignAgent'),
                    (t.INFORMATIONAL = 'informational'),
                    (t.AGE_18 = 'age18'),
                    (t.EXPLICIT = 'explicit'),
                    (t.DESCRIPTION_TEXT = 'descriptionText'),
                    (t.AGE_12_ICON = 'age12Icon'),
                    (t.AGE_16_ICON = 'age16Icon'),
                    (t.AGE_18_ICON = 'age18Icon'),
                    (t.EXPLICIT_ICON = 'explicitIcon'),
                    ((t.EXCLAMATION_ICON = 'exclamationIcon'), (t.SUBSTITUTED_ICON = 'substitutedIcon')));
                // for PulseSync: END substituted-track enum extension
            })(s || (s = {}));
            let c = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, s] = i.split(':');
                        e && s && t.push({ type: e, id: s });
                    }
                    return t;
                },
                u = (e, t) => c(e).filter((e) => e.type === t);
            class m {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new l(null)),
                        (this.isLoadingObservable = new l(!1)),
                        (this.errorObservable = new l(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new o(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    ((this.loadingPromise = e), await e);
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new d(e, !0);
                }
                async resolveByType(e, t) {
                    let i = u(e, t);
                    return (await Promise.all(i.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = c(e),
                        i = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        s = {};
                    for (let e of i)
                        if (e) {
                            let t = s[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (s[e.disclaimerType] = t));
                        }
                    return s;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.E = 'e'), (t.AGE_12 = '12+'), (t.AGE_16 = '16+'), (t.AGE_18 = '18+'), ((t.EXCLAMATION = '!'), (t.SUBSTITUTED = 'substituted')));
                // for PulseSync: END substituted-track enum extension
            })(r || (r = {}));
            let p = new Map([
                    [s.EXPLICIT_ICON, r.E],
                    [s.AGE_18_ICON, r.AGE_18],
                    [s.AGE_16_ICON, r.AGE_16],
                    [s.AGE_12_ICON, r.AGE_12],
                    [s.EXCLAMATION_ICON, r.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [s.SUBSTITUTED_ICON, r.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                h = [s.EXPLICIT_ICON, s.AGE_18_ICON, s.AGE_16_ICON, s.AGE_12_ICON, s.SUBSTITUTED_ICON, s.EXCLAMATION_ICON],
                v = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = u(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, h);
                    if (null === t) return null;
                    let i = p.get(t.type);
                    return void 0 !== i ? i : null;
                },
                _ = (e, t) => u(e, t).length > 0;
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        87762: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var s = i(53548),
                r = i(52150);
            function a() {
                return (0, s.useContext)(r.H);
            }
        },
        90224: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => v });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(17392),
                d = i(52300),
                c = i(62837),
                u = i(72288),
                m = i(94398),
                p = i(17332),
                h = i.n(p);
            let v = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: a, containerClassName: p, variant: v, iconVariant: iconOverride, size: _ = 'xxxs', ...f } = e,
                    { formatMessage: A } = (0, n.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, u.g)(),
                    [C, g] = (0, l.useState)(null);
                (0, l.useEffect)(() => {
                    i && i().then(g);
                }, [i, a]);
                let {
                    iconVariant: x,
                    descriptionText: I,
                    isTooltipEnabled: y,
                    ariaLabel: O,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: s, isMobile: r } = e,
                        a = (null == s ? void 0 : s.join('\n')) || '';
                    return {
                        iconVariant: ((e) => {
                            switch (e) {
                                case c.JU.E:
                                    return 'explicit';
                                case c.JU.AGE_12:
                                case c.JU.AGE_16:
                                case c.JU.AGE_18:
                                    return 'adult';
                                case c.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(i),
                        descriptionText: a,
                        isTooltipEnabled: !!(null == s ? void 0 : s.length) && !r,
                        ariaLabel: a.length > 0 ? a : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: v, descriptionTexts: C, isMobile: b }, A);
                return (0, s.jsx)(m.k, {
                    description: I,
                    placement: 'bottom-start',
                    enabled: y,
                    children: (0, s.jsx)('span', {
                        className: p,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        v === c.JU.SUBSTITUTED ? (0, s.jsxs)('svg', {
                            className: (0, r.$)(h().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': O,
                            style: { width: 'var(--ym-icon-size-'.concat(_, ')'), height: 'var(--ym-icon-size-'.concat(_, ')') },
                            ...f,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, s.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, s.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, s.jsx)(d.I, {
                            className: (0, r.$)(h().explicitMark, t),
                            'aria-label': O,
                            variant: iconOverride ? d.resolveIcon(iconOverride)?.variant ?? 'exclamation' : x,
                            size: iconOverride ? d.resolveIcon(iconOverride)?.size ?? _ : _,
                            style: iconOverride ? { width: `var(--ym-icon-size-${_})`, height: `var(--ym-icon-size-${_})` } : undefined,
                            ...f,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
                    }),
                });
            });
        },
        92966: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => v });
            var s = i(88800),
                r = i(2058),
                a = i(29993),
                l = i(87762),
                n = i(29595),
                o = i(74965),
                d = i(72288),
                c = i(66943),
                u = i(96706),
                m = i(53548),
                p = i(79390),
                h = i(96295);
            let v = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: v },
                    } = (0, d.g)(),
                    { formatMessage: _ } = (0, r.A)(),
                    { notify: f } = (0, o.l)(),
                    A = (() => {
                        let { notify: e } = (0, o.l)(),
                            { fullscreenPlayer: t } = (0, d.g)(),
                            [i, l] = (0, m.useState)(!1),
                            { formatMessage: v } = (0, r.A)();
                        return (0, a.c)(async (r) => {
                            let { album: a, withLink: o = !0, withNotification: d = !0 } = r;
                            if (i) return;
                            let m = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                            l(!0);
                            let _ = await a.toggleLike();
                            if ((l(!1), !d)) return;
                            let f = t.modal.isOpened;
                            _ === p.f.OK
                                ? e((0, s.jsx)(h.T, { withLink: o, album: m }), { containerId: f ? n.u.FULLSCREEN_INFO : n.u.INFO })
                                : e((0, s.jsx)(c.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: f ? n.u.FULLSCREEN_ERROR : n.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: b } = (0, l.T)();
                return (0, a.c)(async () => {
                    if (e)
                        return v({ pageAlbumId: b, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? A({ album: e })
                              : void f((0, s.jsx)(c.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                });
            };
        },
        94398: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => c });
            var s = i(88800),
                r = i(17392),
                a = i(17610),
                l = i(29504),
                n = i(37438),
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
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
                                children: (0, s.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        n && (0, s.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: n }),
                                        (0, s.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        95259: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var s,
                r = i(18593);
            !(function (e) {
                ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'));
            })(s || (s = {}));
            let a = (e, t) => {
                var i, a;
                return e.type === s.ALBUM
                    ? { type: r.K.Album, meta: { id: (null == (a = e.album) ? void 0 : a.id) || 0 }, from: t || '' }
                    : { type: r.K.Playlist, meta: { id: (null == (i = e.playlist) ? void 0 : i.id) || '' }, from: t || '' };
            };
        },
        96295: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var s = i(88800),
                r = i(84961),
                a = i(42729),
                l = i(5048);
            let n = (0, r.PA)((e) => {
                let { album: t, closeToast: i, withLink: r } = e,
                    n = (0, l.b)(t.type);
                return (0, s.jsx)(a.O, {
                    closeToast: i,
                    entityVariant: n,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: r,
                });
            });
        },
        99371: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 33699)));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7435, 8752, 7617, 127, 1931, 8380, 4596, 5108, 1191, 3637, 3375, 3730, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 4732, 1195,
                1598, 6281, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 818, 7053, 9425, 9989, 763, 2670, 7358,
            ],
            () => e((e.s = 99371)),
        ),
            (_N_E = e.O()));
    },
]);
