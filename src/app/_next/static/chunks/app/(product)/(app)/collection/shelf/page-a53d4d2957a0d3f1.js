(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1528],
    {
        3796: (e, t, s) => {
            'use strict';
            s.d(t, { J: () => r });
            var i = s(21916),
                a = s(55178);
            let r = (e) => {
                let t = (0, i.usePathname)(),
                    [s, r] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t);
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !s && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), r(!0));
                    }, [e, s, t]);
            };
        },
        4820: (e, t, s) => {
            'use strict';
            s.d(t, { C: () => c });
            var i = s(32290),
                a = s(55178),
                r = s(21732),
                l = s(71926),
                n = s(91624),
                o = s.n(n);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: s } = e,
                    [n, c] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    n)
                )
                    return n.map((e, t) =>
                        (0, i.jsx)(
                            l.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': r.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(s, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        7462: (e, t, s) => {
            'use strict';
            s.d(t, { c: () => l, r: () => n });
            var i = s(55178),
                a = s(60900),
                r = s(64605),
                l = (function (e) {
                    return (e.PIN = 'pin'), e;
                })({});
            let n = (e, t) => {
                let { formatMessage: s } = (0, a.A)();
                return (0, i.useMemo)(() => {
                    switch (e) {
                        case r._.SINGLE:
                            return s({ id: 'entity-names.single' });
                        case r._.PODCAST:
                            return s({ id: 'entity-names.podcast' });
                        case r._.AUDIOBOOK:
                            if ('pin' === t) return s({ id: 'entity-names.book' });
                            return s({ id: 'entity-names.audio' });
                        case r._.FAIRY_TALE:
                            return s({ id: 'entity-names.fairy-tale' });
                        default:
                            return s({ id: 'entity-names.album' });
                    }
                }, [e, s, t]);
            };
        },
        12989: (e, t, s) => {
            'use strict';
            s.d(t, { D: () => x });
            var i = s(55178),
                a = s(16172),
                r = s(52068),
                l = s(6752),
                n = s(62376),
                o = s(1677),
                c = s(48922),
                d = s(84782),
                u = s(30915),
                m = s(18746),
                p = s(2792),
                h = s(37240),
                _ = s(51012),
                f = s(47498);
            let x = () => {
                let e = (0, n.U)(),
                    t = (0, r.st)(),
                    { hash: s } = (0, r.gf)(),
                    { pageId: x, displayReasonId: v } = (0, h.$)(),
                    { tabId: A, tabPos: b, isTabSelectedByDefault: g } = (0, f.R)(),
                    { offsetBlockPosY: C } = (0, u.u)(),
                    { blockType: S, blockId: T, blockPosX: k, blockPosY: j, mainObjectId: E, mainObjectType: I, displayReasonId: N } = (0, d.N)(),
                    { filterKey: y, filterValue: L, filterPos: O } = (0, m.G)(),
                    { objectType: P, objectsCount: R, objectId: w, objectPosX: D, objectPosY: M } = (0, p.J)(),
                    { skeleton: H } = (0, _.b)(),
                    U = null != N ? N : v,
                    z = (0, l.L)(() => (void 0 !== C && void 0 !== j ? C + j : j));
                return (0, i.useCallback)(
                    (i, r) => {
                        if (!t || !x || !c.xK.includes(x) || !c.fD.includes(x)) return;
                        let l = o.F[x];
                        if (!l) return;
                        let n = {
                            hash: s,
                            pageId: l,
                            entityType: S,
                            entityId: T,
                            entityPosX: k,
                            entityPosY: z,
                            objectsCount: R,
                            viewUuid: r,
                            objectType: P,
                            objectId: w,
                            objectPosX: D,
                            objectPosY: M,
                        };
                        void 0 !== y && ((n.filterKey = y), (n.filterValue = L), (n.filterPos = O)),
                            c.qG.includes(x) && ((n.tabId = A), (n.tabPos = b), (n.isTabSelectedByDefault = g)),
                            H && (n.skeletonId = H),
                            'string' == typeof E && 'string' == typeof I && ((n.mainObjectType = I), (n.mainObjectId = E)),
                            U && (n.displayReasonId = U);
                        let d = (0, a.Fx)({ params: n, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        d && (i ? (0, a.Pf)(t.evgenInstance, d) : (0, a.nv)(t.evgenInstance, d));
                    },
                    [t, U, T, k, z, S, y, O, L, s, g, e, E, I, w, D, M, P, R, x, H, A, b],
                );
            };
        },
        13798: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => f });
            var i = s(32290),
                a = s(63618),
                r = s(96103),
                l = s(55178),
                n = s(60900),
                o = s(26252),
                c = s(21732),
                d = s(6752),
                u = s(82586),
                m = s(57594),
                p = s(60244),
                h = s(90006),
                _ = s.n(h);
            let f = (0, r.PA)((e) => {
                let { className: t, getDescriptionTexts: s, trackId: r, containerClassName: h, variant: f, size: x = 'xxxs', ...v } = e,
                    { formatMessage: A } = (0, n.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, m.g)(),
                    [g, C] = (0, l.useState)(null),
                    S = (0, d.L)(() => {
                        switch (f) {
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
                    T = (0, l.useMemo)(() => A({ id: 'extra-explicit.explicit-mark' }), [A]);
                (0, l.useEffect)(() => {
                    s && s().then(C);
                }, [s, r]);
                let k = (null == g ? void 0 : g.join('\n')) || '',
                    j = !!(null == g ? void 0 : g.length) && !b,
                    E = k.length > 0 ? k : T;
                return (0, i.jsx)(p.k, {
                    description: k,
                    placement: 'bottom-start',
                    enabled: j,
                    children: (0, i.jsx)('span', {
                        className: h,
                        children:
                            f === o.JU.SUBSTITUTED
                                ? (0, i.jsxs)('svg', {
                                      className: (0, a.$)(_().explicitMark, t),
                                      viewBox: '0 0 16 16',
                                      role: 'img',
                                      'aria-label': E,
                                      style: {
                                          width: 'var(--ym-icon-size-'.concat(x, ')'),
                                          height: 'var(--ym-icon-size-'.concat(x, ')'),
                                      },
                                      ...v,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                      children: [
                                          (0, i.jsx)('circle', {
                                              cx: '8',
                                              cy: '8',
                                              r: '5.5',
                                              fill: 'none',
                                              stroke: 'currentColor',
                                              strokeWidth: '1.5',
                                          }),
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
                                      className: (0, a.$)(_().explicitMark, t),
                                      'aria-label': E,
                                      variant: S,
                                      size: x,
                                      ...v,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                  }),
                    }),
                });
            });
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        23352: (e, t, s) => {
            'use strict';
            s.d(t, { n: () => l });
            var i = s(55178),
                a = s(12989),
                r = s(80536);
            let l = function () {
                let { callback: e, singleEvent: t, withViewUuid: s } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    l = (0, i.useRef)(null),
                    n = (0, a.D)(),
                    o = (0, i.useId)(),
                    c = (0, i.useContext)(r.B),
                    d = (0, i.useCallback)(
                        (i, a) => {
                            e ? e(i, s ? a : void 0) : n(i, a), t && c.unobserveElement(o);
                        },
                        [e, c, o, n, t, s],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            c.observeElement({ elementRef: l, elementId: o, callback: d }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, d, o, n],
                    ),
                    { ref: l, intersectionPropertyId: o }
                );
            };
        },
        29268: (e, t, s) => {
            'use strict';
            s.d(t, { k: () => u });
            var i = s(32290),
                a = s(55178),
                r = s(60900),
                l = s(21732),
                n = s(63423),
                o = s(82586),
                c = s(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: s,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: p,
                            iconClassName: h,
                            className: _,
                            forwardRef: f,
                            style: x,
                            children: v,
                        } = e,
                        { formatMessage: A } = (0, r.A)(),
                        b = A({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(n.$, {
                        className: _,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: s,
                        flexIcon: !0,
                        'aria-label': b,
                        onClick: p,
                        ref: f,
                        icon: (0, i.jsx)(o.I, { variant: 'trailer', size: u, className: h }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': l.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        30542: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => r });
            var i = s(60900),
                a = s(64605);
            let r = (e, t) => {
                let { formatMessage: s } = (0, i.A)();
                if (e)
                    switch (t) {
                        case a._.AUDIOBOOK:
                            return s({ id: 'non-music.shelf-unsubscribe' });
                        case a._.FAIRY_TALE:
                            return s({ id: 'interface-actions.do-not-like' });
                        default:
                            return s({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case a._.AUDIOBOOK:
                        return s({ id: 'non-music.shelf-subscribe' });
                    case a._.FAIRY_TALE:
                        return s({ id: 'interface-actions.like' });
                    default:
                        return s({ id: 'interface-actions.subscribe' });
                }
            };
        },
        34883: (e, t, s) => {
            'use strict';
            s.d(t, { c: () => a });
            var i = s(19383);
            let a = (e) => {
                let { album: t, callback: s, shouldHistoryBack: a } = e;
                return (0, i.l)({ entity: t, callback: s, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        41566: (e, t, s) => {
            'use strict';
            s.d(t, { U: () => d });
            var i = s(32290),
                a = s(96103),
                r = s(21732),
                l = s(82586),
                n = s(19740),
                o = s(30542),
                c = s(57594);
            let d = (0, a.PA)((e) => {
                let { isLiked: t, onClick: s, className: a, albumType: d, disabled: u } = e,
                    { user: m } = (0, c.g)(),
                    p = t ? 'liked' : 'like',
                    h = (0, o.$)(t, d);
                return (0, i.jsx)(n.Dr, {
                    className: a,
                    onClick: s,
                    icon: (0, i.jsx)(l.I, { variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !m.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        41677: (e, t, s) => {
            'use strict';
            s.d(t, { i: () => z });
            var i = s(32290),
                a = s(63618),
                r = s(96103),
                l = s(55178),
                n = s(70280),
                o = s(57594),
                c = s(53514),
                d = s(40484),
                u = s.n(d),
                m = s(60900),
                p = s(16172),
                h = s(21732),
                _ = s(91027),
                f = s(71926),
                x = s(47745),
                v = s(84062),
                A = s(28999),
                b = s(61258),
                g = s(19383);
            let C = (0, r.PA)((e) => {
                    let {
                            artist: t,
                            withLink: s = !0,
                            linkClassName: a,
                            captionClassName: r,
                            captionSize: l = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: C } = (0, m.A)(),
                        {
                            track: S,
                            settings: { isMobile: T },
                        } = (0, o.g)(),
                        k = (0, v.Z)(t.url),
                        { sendNavigateSearchFeedback: j } = (0, A.z)(),
                        E = (0, x.N)(),
                        I = ((e) => {
                            let { artist: t, callback: s } = e,
                                { currentTrackInfo: i, fullscreenPlayer: a, fullscreenVideoPlayer: r } = (0, o.g)(),
                                { modal: l } = i;
                            return (0, g.l)({
                                entity: t,
                                callback: s,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), l.isOpened && (i.reset(), l.close()), a.modal.isOpened && a.modal.close();
                                },
                                onAfterHandled: () => {
                                    r.modal.isOpened && (r.modal.close(), r.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, _.c)((e) => {
                                T && S.isOpened && S.close(), k(e);
                            }),
                        }),
                        N = (0, _.c)((e) => {
                            E({ to: p.QT.ArtistScreen }), null == j || j(), I(e);
                        });
                    return s && !t.various
                        ? (0, i.jsx)(b.N, {
                              'aria-label': C({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: a,
                              href: t.url,
                              onClick: N,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(n.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, i.jsx)(f.HL, { variant: 'span', type: 'entity', size: l, weight: 'medium', className: r, children: t.name }),
                              }),
                          })
                        : (0, i.jsx)(n.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, i.jsx)(f.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: l,
                                  weight: 'medium',
                                  className: r,
                                  title: d ? void 0 : c || t.name,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                S = (e) => {
                    let {
                            artist: t,
                            withLink: s = !0,
                            linkClassName: a,
                            captionClassName: r,
                            captionSize: n,
                            allArtistsTitle: o,
                            withCustomTooltip: c,
                            hoverSettings: d,
                            shouldUseSeparator: u = !0,
                        } = e,
                        m = (0, l.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, i.jsx)(
                                                  C,
                                                  {
                                                      artist: t,
                                                      withLink: s,
                                                      linkClassName: a,
                                                      captionClassName: r,
                                                      captionSize: n,
                                                      allArtistsTitle: o,
                                                      withCustomTooltip: c,
                                                      hoverSettings: d,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, s, a, r, n, o, c, d]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(C, {
                                artist: t,
                                withLink: s,
                                linkClassName: a,
                                captionClassName: r,
                                captionSize: n,
                                allArtistsTitle: o,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            m,
                        ],
                    });
                };
            var T = s(39407),
                k = s(63887);
            let j = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: s, handleOnSpoilerClick: r } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(k.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(u().spoiler, s),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(T.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var E = s(8055),
                I = s(6752),
                N = s(78035),
                y = s(78176),
                L = s(83598),
                O = s.n(L);
            let P = (0, r.PA)((e) => {
                    let { label: t, artists: s, forwardRef: a } = e;
                    return (0, i.jsxs)(n.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, N.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: a, children: t }),
                            (0, i.jsx)(n.ZI, { className: O().tooltipContent, children: s.map((e) => (0, i.jsx)(y.V, { artist: e, className: O().artistItem }, e.id)) }),
                        ],
                    });
                }),
                R = (0, l.forwardRef)((e, t) => (0, i.jsx)(P, { forwardRef: t, ...e }));
            var w = s(19740),
                D = s(52598),
                M = s.n(D);
            let H = (0, r.PA)((e) => {
                    let { label: t, artists: s } = e,
                        { formatMessage: r } = (0, m.A)();
                    return (0, i.jsx)(w.W1, {
                        isMobile: !0,
                        className: (0, a.$)(M().root, M().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: s.map((e) => (0, i.jsx)(y.V, { artist: e }, e.id)),
                    });
                }),
                U = (0, r.PA)((e) => {
                    let { artists: t = [], label: s, labelRef: a } = e,
                        [r, n] = (0, l.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, o.g)(),
                        d = (0, _.c)(() => {
                            let e = a.current;
                            e && n(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, I.L)(() =>
                            (0, E.A)(() => {
                                d();
                            }, 100),
                        );
                    if (
                        ((0, l.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                d(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, d],
                        ),
                        (0, l.useEffect)(() => {
                            d();
                        }, [t, d]),
                        0 !== t.length)
                    )
                        return (r || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(H, { artists: t, label: s }) : (0, i.jsx)(R, { artists: t, label: s })) : s;
                }),
                z = (0, r.PA)((e) => {
                    let {
                            className: t,
                            artists: s = [],
                            separator: r = ', ',
                            lineClamp: d,
                            visibleArtistsCount: m,
                            withLink: p = !0,
                            spoilerClassName: h,
                            linkClassName: _,
                            captionClassName: f,
                            captionSize: x,
                            variant: v = 'breakAll',
                            withAllArtistsTitle: A = !0,
                            withComposer: b = !0,
                            spoilerComponent: g,
                            withCustomTooltip: C = !0,
                            artistIdWithoutLink: T,
                            withContextMenu: k,
                        } = e,
                        E = (0, l.useRef)(null),
                        [I, N] = (0, l.useState)(!1),
                        y = A
                            ? s
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let s = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...s]) : [t.name, ...s];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(r)
                            : '',
                        {
                            settings: { isMobile: L },
                        } = (0, o.g)(),
                        O = 1 === s.length,
                        P = (0, l.useCallback)((e) => {
                            N(!0), e.preventDefault();
                        }, []),
                        R = (0, l.useMemo)(() => {
                            let e = s;
                            return (
                                m && !I && (e = s.slice(0, m)),
                                e.reduce((e, t) => {
                                    if (!b && t.isComposer) return e.length ? e : [];
                                    let s = (0, i.jsx)(
                                        S,
                                        {
                                            artist: t,
                                            linkClassName: _,
                                            captionClassName: f,
                                            withLink: p && t.id !== T && (((!L || O) && k) || !k),
                                            captionSize: x,
                                            allArtistsTitle: y,
                                            withCustomTooltip: C,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!r,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([r, s]) : [s];
                                }, [])
                            );
                        }, [s, m, I, b, L, O, k, _, f, p, T, x, y, C, r]),
                        w = (0, l.useMemo)(() => {
                            if (!I && m && m < s.length) {
                                let e = s.length - m;
                                return (0, l.isValidElement)(g) ? g : (0, i.jsx)(j, { spoilerClassName: h, spoilerArtistsCount: e, handleOnSpoilerClick: P });
                            }
                        }, [s.length, P, I, h, g, m]),
                        D = (0, l.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        M = (0, i.jsx)(n.m_, {
                            referenceRef: E,
                            enabled: !!(A && y) && C && !k && !L,
                            offsetOptions: 4,
                            placement: 'top',
                            text: y,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: D,
                                className: (0, a.$)(u().root, u()['root_variant_'.concat(v)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: A && y && !C && !k ? y : void 0,
                                children: [R, w],
                            }),
                        });
                    return k ? (0, i.jsx)(U, { labelRef: E, artists: s, label: M }) : M;
                });
        },
        46977: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 3377)), Promise.resolve().then(s.bind(s, 57139));
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, s) => {
            'use strict';
            s.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        56008: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => i });
            let i = (0, s(55178).createContext)({ pageAlbumId: void 0 });
        },
        57139: (e, t, s) => {
            'use strict';
            s.d(t, { CollectionShelfPage: () => w });
            var i = s(32290),
                a = s(96103),
                r = s(55178),
                l = s(60900),
                n = s(39407),
                o = s(21732),
                c = s(46049),
                d = s(71926),
                u = s(64170),
                m = s(7999),
                p = s(83808),
                h = s(83920),
                _ = s(3796),
                f = s(57594),
                x = s(58054),
                v = s(32468),
                A = s(74694),
                b = s(2825),
                g = s(63618),
                C = s(6752),
                S = s(94631),
                T = s(20472),
                k = s(98350),
                j = s(49518),
                E = s(34223),
                I = s(73968),
                N = s(41549),
                y = s(92237),
                L = s.n(y);
            let O = (0, a.PA)((e) => {
                var t;
                let { className: s, itemsCount: a, headerClassName: l } = e,
                    {
                        sonataState: n,
                        collection: {
                            shelf: { recentlyPlayed: c },
                        },
                    } = (0, f.g)(),
                    d = (0, C.L)(() => {
                        var e;
                        return null == (e = c.entities)
                            ? void 0
                            : e.map((e, t) => {
                                  let s = (0, I.T)(e, c.typeForFrom);
                                  return (0, i.jsx)(
                                      S.K,
                                      {
                                          track: e.track,
                                          playContextParams: {
                                              contextData: s,
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
                return (c.isNeededToLoad && (0, r.use)(c.getData()), !c.isLoading && (null == (t = c.entities) ? void 0 : t.length))
                    ? (0, i.jsx)(j.$, {
                          blockHeaderClassName: (0, g.$)(L().header, l),
                          className: s,
                          carouselItemClassName: (0, g.$)(L().shelfColumn, L().important),
                          shimmer: (0, i.jsx)(E.D, { variant: k.X.PLAYLIST, isActive: !0 }),
                          isShimmerVisible: c.isLoading,
                          isShimmerActive: !0,
                          maxColumnsCount: j.D.ONE,
                          blockHeaderTitle: c.title,
                          itemsCountPerColumn: null != a ? a : 0,
                          viewAllActionLink: T.Z.collectionShelfRecentlyPlayed.href,
                          'data-test-id': o.Xk.collection.COLLECTION_SHELF_PAGE_RECENTLY_PLAYED_BLOCK,
                          children: d,
                      })
                    : (0, i.jsx)(N.E, { className: s });
            });
            var P = s(77592),
                R = s.n(P);
            let w = (0, a.PA)(() => {
                let {
                        collection: { shelf: e },
                    } = (0, f.g)(),
                    { contentScrollRef: t, setContentScrollRef: s } = (0, h.g)(),
                    { formatMessage: a } = (0, l.A)(),
                    g = (0, p.W)();
                return ((0, r.useEffect)(
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
                          outerTitle: a({ id: 'page.shelf' }),
                          children: [
                              (0, i.jsx)(A.Y, {
                                  variant: A.V.TEXT,
                                  withForwardControl: !1,
                                  withBackwardControl: g.canBack,
                                  children: (0, i.jsx)(d.DZ, {
                                      variant: 'h2',
                                      weight: 'bold',
                                      size: 'xl',
                                      lineClamp: 1,
                                      children: (0, i.jsx)(n.A, { id: 'page.shelf' }),
                                  }),
                              }),
                              (0, i.jsx)(c.N, {
                                  ref: s,
                                  containerClassName: R().scrollableContainer,
                                  className: R().root,
                                  'data-test-id': o.Xk.collection.COLLECTION_SHELF_PAGE,
                                  children: (0, i.jsxs)('div', {
                                      className: R().content,
                                      children: [
                                          e.hasRecentlyPlayed && (0, i.jsx)(O, { className: R().block, headerClassName: R().blockHeader, itemsCount: 5 }),
                                          e.hasLiked && (0, i.jsx)(b.m, { className: R().block, headerClassName: R().blockHeader, itemsCount: 5 }),
                                          (0, i.jsx)(v.A, { children: (0, i.jsx)(x.w, { className: R().footer }) }),
                                      ],
                                  }),
                              }),
                          ],
                      });
            });
        },
        60244: (e, t, s) => {
            'use strict';
            s.d(t, { k: () => d });
            var i = s(32290),
                a = s(21732),
                r = s(70280),
                l = s(71926),
                n = s(48736),
                o = s.n(n);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: s, title: n, placement: d = 'top', children: u } = e;
                    return (0, i.jsxs)(r.m_, {
                        enabled: s,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, i.jsx)(r.ZI, {
                                className: o().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        n && (0, i.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: n }),
                                        (0, i.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        63363: (e, t, s) => {
            'use strict';
            s.d(t, { K: () => v });
            var i = s(32290),
                a = s(60900),
                r = s(91027),
                l = s(67732),
                n = s(45477),
                o = s(75582),
                c = s(57594),
                d = s(90357),
                u = s(92708),
                m = s(55178),
                p = s(63380),
                h = s(96103),
                _ = s(97755),
                f = s(79238);
            let x = (0, h.PA)((e) => {
                    let { album: t, closeToast: s, withLink: a } = e,
                        r = (0, f.b)(t);
                    return (0, i.jsx)(_.O, {
                        closeToast: s,
                        entityVariant: r,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: a,
                    });
                }),
                v = (e) => {
                    let {
                            user: t,
                            paywall: s,
                            albumCPA: { isPlusCPAEnabled: h },
                        } = (0, c.g)(),
                        { formatMessage: _ } = (0, a.A)(),
                        { notify: f } = (0, o.l)(),
                        v = (() => {
                            let { notify: e } = (0, o.l)(),
                                [t, s] = (0, m.useState)(!1),
                                { formatMessage: l } = (0, a.A)();
                            return (0, r.c)(async (a) => {
                                let { album: r, withLink: o = !0, withNotification: c = !0 } = a;
                                if (t) return;
                                let m = { ...(0, u.HO)(r), url: r.url, isLiked: !r.isLiked };
                                s(!0);
                                let h = await r.toggleLike();
                                s(!1),
                                    c &&
                                        (h === p.f.OK
                                            ? e((0, i.jsx)(x, { withLink: o, album: m }), { containerId: n.u.INFO })
                                            : e((0, i.jsx)(d.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                            });
                        })(),
                        { pageAlbumId: A } = (0, l.T)();
                    return (0, r.c)(async () => {
                        if (e)
                            return h({ pageAlbumId: A, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void s.openModal()
                                : t.isAuthorized
                                  ? v({ album: e })
                                  : void f((0, i.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    });
                };
        },
        67732: (e, t, s) => {
            'use strict';
            s.d(t, { T: () => r });
            var i = s(55178),
                a = s(56008);
            function r() {
                return (0, i.useContext)(a.H);
            }
        },
        73968: (e, t, s) => {
            'use strict';
            s.d(t, { T: () => r });
            var i,
                a = s(71483);
            !(function (e) {
                (e.ALBUM = 'album'), (e.PLAYLIST = 'playlist');
            })(i || (i = {}));
            let r = (e, t) => {
                var s, r;
                return e.type === i.ALBUM
                    ? { type: a.K.Album, meta: { id: (null == (r = e.album) ? void 0 : r.id) || 0 }, from: t || '' }
                    : { type: a.K.Playlist, meta: { id: (null == (s = e.playlist) ? void 0 : s.id) || '' }, from: t || '' };
            };
        },
        77592: (e) => {
            e.exports = {
                root: 'CollectionShelfPage_root__S0__c',
                scrollableContainer: 'CollectionShelfPage_scrollableContainer__9f317',
                content: 'CollectionShelfPage_content__AG3r8',
                block: 'CollectionShelfPage_block__34jyy',
                blockHeader: 'CollectionShelfPage_blockHeader__Qjoln',
                footer: 'CollectionShelfPage_footer__pgWKV',
            };
        },
        78176: (e, t, s) => {
            'use strict';
            s.d(t, { V: () => A });
            var i = s(32290),
                a = s(63618),
                r = s(96103),
                l = s(55178),
                n = s(16172),
                o = s(21732),
                c = s(91027),
                d = s(50162),
                u = s(19740),
                m = s(86269),
                p = s(71926),
                h = s(47745),
                _ = s(84062),
                f = s(57594),
                x = s(16510),
                v = s.n(x);
            let A = (0, r.PA)((e) => {
                let { artist: t, className: s } = e,
                    { fullscreenPlayer: r } = (0, f.g)(),
                    x = (0, _.Z)(t.url),
                    b = (0, h.N)(),
                    g = (0, l.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(A, { artist: t, className: s }, t.id)), e), []))
                        );
                    }, [t, s]),
                    C = (0, c.c)((e) => {
                        r.modal.isOpened && r.modal.close(), b({ to: n.QT.ArtistScreen }), x(e);
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, a.$)(v().root, s),
                            onClick: C,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(m.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, i.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, i.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        g,
                    ],
                });
            });
        },
        79238: (e, t, s) => {
            'use strict';
            s.d(t, { b: () => r });
            var i = s(64605),
                a = s(97647);
            let r = (e) => {
                switch (e.type) {
                    case i._.PODCAST:
                        return a.c.PODCAST;
                    case i._.AUDIOBOOK:
                        return a.c.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return a.c.FAIRY_TALE;
                    default:
                        return a.c.ALBUM;
                }
            };
        },
        80536: (e, t, s) => {
            'use strict';
            s.d(t, { B: () => i });
            let i = (0, s(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        91624: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        92013: (e, t, s) => {
            'use strict';
            var i;
            s.d(t, { T: () => i }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(i || (i = {}));
        },
        92237: (e) => {
            e.exports = {
                header: 'CollectionShelfRecentlyPlayed_header__Nx7Cc',
                shelfColumn: 'CollectionShelfRecentlyPlayed_shelfColumn__9xHhf',
                important: 'CollectionShelfRecentlyPlayed_important__HS0GM',
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                5718, 7034, 6639, 6347, 3183, 3931, 7972, 7231, 8868, 9763, 7258, 963, 6054, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 6252, 6477, 7275,
                2586, 8347, 4522, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 6341, 3759, 4339, 4220, 9562, 7358,
            ],
            () => e((e.s = 46977)),
        ),
            (_N_E = e.O());
    },
]);
