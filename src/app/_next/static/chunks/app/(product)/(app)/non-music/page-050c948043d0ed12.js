(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7307, 9556],
    {
        3435: (e, t, s) => {
            'use strict';
            s.d(t, { p: () => V });
            var i = s(32290),
                l = s(63618),
                n = s(96103),
                o = s(55178),
                r = s(60900),
                a = s(39407),
                d = s(21732),
                h = s(54862),
                c = s(63423),
                u = s(84638),
                m = s(15299),
                g = s(71926),
                f = s(54667),
                _ = s(45477),
                p = s(75582),
                v = s(55332),
                E = s(95329),
                b = s(53022),
                C = s(57594),
                S = s(58008),
                M = s(49399),
                w = s(90357),
                x = s(28563),
                O = s(89020),
                A = s(45180),
                z = s(8946),
                I = s(45257),
                R = s(14934),
                T = s(82586),
                y = s(86269),
                N = s(23352),
                L = s(11323);
            let D = { src: '/_next/static/media/artist.c49b2bfa.png' };
            var j = s(22800),
                W = s.n(j);
            let k = (0, n.PA)((e) => {
                let { className: t, artist: s } = e,
                    { ref: n, intersectionPropertyId: r } = (0, N.n)(),
                    {
                        wizard: { likeArtist: a, isArtistLiked: h },
                    } = (0, C.g)(),
                    { id: u, name: m, coverUri: f } = s,
                    _ = (0, o.useCallback)(() => {
                        a(u);
                    }, [a, u]),
                    p = h(u),
                    v = (0, o.useMemo)(
                        () =>
                            (0, i.jsx)(y.t, {
                                className: W().cover,
                                radius: 'round',
                                'data-test-id': d.e8.wizard.ARTIST_CARD,
                                children: (0, i.jsxs)(c.$, {
                                    radius: 'round',
                                    className: W().coverBlock,
                                    variant: 'default',
                                    onClick: _,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': p,
                                    'aria-label': m,
                                    'data-test-id': d.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, i.jsx)(L.B, { className: W().image, src: f || D.src, fit: 'cover', alt: m, withAvatarReplace: !!f, 'aria-hidden': !0 }),
                                        (0, i.jsx)('div', {
                                            className: (0, l.$)(W().like),
                                            children: (0, i.jsx)(T.I, { variant: 'likedVariant', size: 's', className: W().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [p, f, m, _],
                    );
                return (0, i.jsx)(R.MN, {
                    ref: n,
                    className: (0, l.$)(W().root, { [W().root_selected]: p }, t),
                    textPosition: 'center',
                    title: (0, i.jsx)(g.HL, {
                        'aria-hidden': !0,
                        className: W().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': d.e8.wizard.ARTIST_CARD_NAME,
                        children: m,
                    }),
                    'data-intersection-property-id': r,
                    view: v,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                });
            });
            var F = s(6680),
                P = s.n(F);
            let G = { [f.u.Desktop]: { start: 40, end: 40 }, [f.u.Mobile]: { start: 40, end: 40 } },
                V = (0, n.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: s } = (0, r.A)(),
                        {
                            wizard: n,
                            settings: { isMobile: f, isWindowsApplication: R, isLinuxApplication: T },
                            user: y,
                        } = (0, C.g)(),
                        { notify: N } = (0, p.l)(),
                        L = (0, b.z)(),
                        [D, j] = (0, h.d)(),
                        W = (0, m.zb)(0),
                        F = (0, o.useMemo)(
                            () => (e) => {
                                var t;
                                if (!W.onTabChange || e === W.value) return;
                                W.onTabChange(e);
                                let s = null == (t = n.genres[e]) ? void 0 : t.id;
                                n.setFilter(s), null == D || D.scrollTo({ top: 0 });
                            },
                            [n, W, D],
                        ),
                        V = (0, o.useMemo)(() => {
                            switch (n.selectedArtistsCounter) {
                                case 0:
                                    return s({ id: 'wizard.button-tune' });
                                case 1:
                                    return s({ id: 'wizard.button-little-more' });
                                case 2:
                                    return s({ id: 'wizard.button-one-more' });
                                default:
                                    return s({ id: 'wizard.button-done' });
                            }
                        }, [n.selectedArtistsCounter, s]),
                        B = (0, o.useMemo)(
                            () =>
                                (0, i.jsx)(z.wI, {
                                    className: P().tabCarousel,
                                    ...W,
                                    onTabChange: F,
                                    isShimmerVisible: n.loadingState === M.G.PENDING,
                                    shimmer: (0, i.jsx)(z.zr, { isActive: !0, className: P().tabCarousel, shimmerClassName: P().tabShimmer, count: f ? 2 : 3 }),
                                    children: n.genres.map((e, t) =>
                                        (0, i.jsx)(
                                            A.o,
                                            {
                                                className: (0, l.$)(P().filter, { [P().filter_selected]: t === W.value }),
                                                titleClassName: P().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [n.genres, W, F, n.loadingState, f],
                        ),
                        H = (0, o.useCallback)(() => {
                            n.getArtists(60);
                        }, [n]);
                    (0, o.useEffect)(() => {
                        n.filter && H();
                    }, [n.filter, H]);
                    let U = (0, o.useCallback)(async () => {
                        await n.getGenres(), H();
                    }, [n, H]);
                    (0, o.useEffect)(() => {
                        n.modal.isOpened && U();
                    }, [n, n.modal.isOpened, U]),
                        (0, o.useEffect)(() => {
                            n.loadingState === M.G.REJECT &&
                                (n.modal.close(), N((0, i.jsx)(w.h, { error: s({ id: 'error-messages.error-load-wizard' }) }), { containerId: _.u.ERROR }));
                        }, [n, n.getGenres, n.loadingState, s, N]);
                    let K = (0, o.useMemo)(
                            () =>
                                (0, i.jsx)(g.DZ, {
                                    className: P().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': d.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, i.jsx)(a.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        $ = (0, o.useCallback)(async () => {
                            n.selectedArtistsCounter < 3 ? n.getArtists() : (await n.finish()) === S.F.OK && (await y.getSettings(), await (null == t ? void 0 : t())),
                                n.modal.close();
                        }, [t, y, n]);
                    return (
                        (0, o.useEffect)(
                            () => (
                                null == L ||
                                    L.addShortcutsListener(E.M.MAIN, v.l.CLOSE, () => {
                                        n.modal.isOpened && $();
                                    }),
                                () => {
                                    null == L || L.removeShortcutsListener(E.M.MAIN, v.l.CLOSE);
                                }
                            ),
                            [$, n.modal.isOpened, L],
                        ),
                        (0, i.jsxs)(u.a, {
                            className: (0, l.$)(P().root, { [P().root_withCustomControls]: R || T }),
                            headerClassName: P().modalHeader,
                            contentClassName: P().modalContent,
                            open: n.modal.isOpened,
                            onOpenChange: n.modal.onOpenChange,
                            onClose: $,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: s({ id: 'interface-actions.close' }),
                            closeButtonProps: { 'data-test-id': d.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON },
                            'data-test-id': d.e8.wizard.WIZARD_MODAL,
                            header: f && K,
                            escapeKey: !1,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: P().wrapper,
                                    children: [
                                        !f && K,
                                        (0, i.jsx)(g.HL, {
                                            className: P().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, i.jsx)(a.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, i.jsx)(c.$, {
                                            className: P().button,
                                            size: f ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: $,
                                            disabled: n.selectedArtistsCounter < 3,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, i.jsx)(g.HL, { variant: 'div', size: 'm', weight: 'medium', children: V }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)('div', {
                                    className: P().mainContainer,
                                    children: [
                                        (0, i.jsx)(x.F, { className: P().carousel, carouselElement: B, scrollPadding: G }),
                                        (0, i.jsx)(I.$, {
                                            withFooter: !1,
                                            className: (0, l.$)(P().scrollContainer, P().important),
                                            itemContentCallback: (e) => {
                                                let t = n.artistsByGenre[e];
                                                if (!t) {
                                                    let e = s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.artist' }) });
                                                    return (0, i.jsx)(O.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, i.jsx)(k, { artist: t }, t.id);
                                            },
                                            data: n.artistsByGenre,
                                            endReached: H,
                                            listClassName: P().content,
                                            itemClassName: P().item,
                                            pageSize: 60,
                                            handleRef: j,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        6680: (e) => {
            e.exports = {
                content: 'WizardModal_content__mLcxg',
                modalHeader: 'WizardModal_modalHeader__BbNjx',
                root: 'WizardModal_root__mrF2y',
                root_withCustomControls: 'WizardModal_root_withCustomControls__t7Kjv',
                modalContent: 'WizardModal_modalContent__OifZs',
                wrapper: 'WizardModal_wrapper__2_8ft',
                title: 'WizardModal_title__fPGJr',
                text: 'WizardModal_text__ntEON',
                button: 'WizardModal_button__e8bCS',
                mainContainer: 'WizardModal_mainContainer__fbjpt',
                carousel: 'WizardModal_carousel__uVcYS',
                scrollContainer: 'WizardModal_scrollContainer__tDrP6',
                important: 'WizardModal_important__7uymQ',
                tabCarousel: 'WizardModal_tabCarousel__AclIV',
                tabShimmer: 'WizardModal_tabShimmer__36Qc7',
                tabTitle: 'WizardModal_tabTitle__7ZAaF',
                filter: 'WizardModal_filter__o2wpn',
                filter_selected: 'WizardModal_filter_selected__qdlMf',
                item: 'WizardModal_item__wUHVg',
            };
        },
        22800: (e) => {
            e.exports = {
                coverBlock: 'ArtistCard_coverBlock__YCSus',
                like: 'ArtistCard_like__jmlKc',
                root: 'ArtistCard_root__F4RfA',
                root_selected: 'ArtistCard_root_selected__9Djbq',
                cover: 'ArtistCard_cover__RSTvK',
                image: 'ArtistCard_image__Uab5w',
                name: 'ArtistCard_name__IF9yZ',
                icon: 'ArtistCard_icon__PjbJI',
            };
        },
        35609: (e, t, s) => {
            'use strict';
            s.d(t, { _: () => l });
            var i = s(96194);
            let l = (e) => {
                var t, s, l, n;
                return (
                    !!Array.isArray(e.tabs.data) &&
                    1 === e.tabs.data.length &&
                    (null == (s = e.tabs.data[0]) || null == (t = s.blocks) ? void 0 : t.length) === 1 &&
                    (null == (n = e.tabs.data[0]) || null == (l = n.blocks[0]) ? void 0 : l.type) === i.t.WIZARD
                );
            };
        },
        37996: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 83627));
        },
        39684: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        45257: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => _ });
            var i = s(32290),
                l = s(63618),
                n = s(8055),
                o = s(55178);
            let r = (e) => {
                    let { style: t, forwardRef: s, context: l, ...n } = e,
                        o = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        r = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: r, 'aria-label': o, style: { ...t }, ref: s, ...n });
                },
                a = (0, o.forwardRef)((e, t) => (0, i.jsx)(r, { forwardRef: t, ...e }));
            var d = s(39684),
                h = s.n(d);
            let c = (e) => {
                    let { style: t, forwardRef: s, withFooter: n, withHeader: o, withForceScroll: r, ...a } = e;
                    return (0, i.jsx)('div', {
                        className: (0, l.$)(h().scroller, { [h().scroller_withFooter]: n, [h().scroller_withHeader]: o, [h().scroller_withForceScroll]: r }),
                        style: { ...t },
                        ref: s,
                        ...a,
                        tabIndex: -1,
                    });
                },
                u = (0, o.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
            var m = s(62060),
                g = s(31417);
            let f = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: s,
                            onRangeHandler: l,
                            debounceDurationInMs: n = 100,
                            totalCount: r = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: d,
                            ...h
                        } = e,
                        [c, u] = (0, o.useState)(null),
                        f = (0, o.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == l || l(e), a.length > 0 && u(e), t && s)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < i; e++) s(e);
                                    }
                                }, n),
                            [n, l, t, s, a],
                        );
                    (0, o.useEffect)(() => {
                        a.length > 0 && c && f(c);
                    }, a);
                    let _ = (0, o.useMemo)(() => {
                        if (d)
                            return (0, m.A)((e) => {
                                d(e);
                            }, n);
                    }, [d, n]);
                    return (0, i.jsx)(g.sN, { rangeChanged: f, totalCount: r, endReached: _, ...h });
                },
                _ = (e) => {
                    let {
                            className: t,
                            customComponents: s,
                            onGetDataByPage: r,
                            onGetDataByRange: d,
                            itemClassName: c,
                            itemContentCallback: m,
                            listClassName: g,
                            overscan: _ = 700,
                            pageSize: p = 20,
                            totalCount: v,
                            totalRequests: E,
                            debounceDurationInMs: b,
                            initialItemCount: C,
                            minInitialItemCount: S = 20,
                            handleRef: M,
                            alwaysShowScrollbar: w = !1,
                            testId: x,
                            isMobileLayout: O = !1,
                            shouldTriggerRangeChangedOn: A,
                            ...z
                        } = e,
                        [I, R] = (0, o.useState)(!1),
                        T = (0, o.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    R(e);
                                }, 100),
                            [],
                        ),
                        y = (0, o.useMemo)(() => {
                            var e, t;
                            return O
                                ? {
                                      Scroller: u,
                                      List: null != (e = null == s ? void 0 : s.List) ? e : a,
                                      Item: null == s ? void 0 : s.Item,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: u,
                                      List: null != (t = null == s ? void 0 : s.List) ? t : a,
                                      Item: null == s ? void 0 : s.Item,
                                      Header: null == s ? void 0 : s.Header,
                                      Footer: null == s ? void 0 : s.Footer,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  };
                        }, [s, E, O]),
                        N = C ? Math.min(C, S) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(h().root, { [h().root_scrolling]: I || w, [h().root_notScrolling]: !I && !w }, t),
                        'data-test-id': x,
                        children: [
                            O && (null == s ? void 0 : s.Header) && s.Header(),
                            (0, i.jsx)(f, {
                                overscan: _,
                                components: y,
                                listClassName: g,
                                itemClassName: c,
                                isScrolling: T,
                                itemContent: m,
                                scrollerRef: M,
                                totalCount: v,
                                pageSize: p,
                                onPageHandler: r,
                                onRangeHandler: d,
                                debounceDurationInMs: b,
                                initialItemCount: N,
                                shouldTriggerRangeChangedOn: A,
                                ...z,
                            }),
                            O && (null == s ? void 0 : s.Footer) && s.Footer(),
                        ],
                    });
                };
        },
        55332: (e, t, s) => {
            'use strict';
            s.d(t, { l: () => i });
            var i = (function (e) {
                return (
                    (e.TOGGLE_PLAY = 'TOGGLE_PLAY'),
                    (e.TOGGLE_MUTE = 'TOGGLE_MUTE'),
                    (e.INCREASE_VOLUME = 'INCREASE_VOLUME'),
                    (e.DECREASE_VOLUME = 'DECREASE_VOLUME'),
                    (e.LIKE = 'LIKE'),
                    (e.DISLIKE = 'DISLIKE'),
                    (e.MOVE_FORWARD = 'MOVE_FORWARD'),
                    (e.MOVE_BACKWARD = 'MOVE_BACKWARD'),
                    (e.SLIDE_FORWARD = 'SLIDE_FORWARD'),
                    (e.SLIDE_BACKWARD = 'SLIDE_BACKWARD'),
                    (e.TOGGLE_REPEAT = 'TOGGLE_REPEAT'),
                    (e.TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE'),
                    (e.TOGGLE_FULLSCREEN_PLAYER = 'TOGGLE_FULLSCREEN_PLAYER'),
                    (e.CLOSE = 'CLOSE'),
                    e
                );
            })({});
        },
        77307: (e, t, s) => {
            'use strict';
            s.d(t, { Te: () => M, XW: () => w });
            var i = s(55178),
                l = s(51767);
            function n(e, t, s) {
                let i,
                    l = s.initialDeps ?? [];
                function n() {
                    var n, o, r, a;
                    let d, h;
                    s.key && (null == (n = s.debug) ? void 0 : n.call(s)) && (d = Date.now());
                    let c = e();
                    if (!(c.length !== l.length || c.some((e, t) => l[t] !== e))) return i;
                    if (
                        ((l = c),
                        s.key && (null == (o = s.debug) ? void 0 : o.call(s)) && (h = Date.now()),
                        (i = t(...c)),
                        s.key && (null == (r = s.debug) ? void 0 : r.call(s)))
                    ) {
                        let e = Math.round((Date.now() - d) * 100) / 100,
                            t = Math.round((Date.now() - h) * 100) / 100,
                            i = t / 16,
                            l = (e, t) => {
                                for (e = String(e); e.length < t; ) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${l(t, 5)} /${l(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * i, 120))}deg 100% 31%);`,
                            null == s ? void 0 : s.key,
                        );
                    }
                    return null == (a = null == s ? void 0 : s.onChange) || a.call(s, i), i;
                }
                return (
                    (n.updateDeps = (e) => {
                        l = e;
                    }),
                    n
                );
            }
            function o(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let r = (e, t, s) => {
                    let i;
                    return function (...l) {
                        e.clearTimeout(i), (i = e.setTimeout(() => t.apply(this, l), s));
                    };
                },
                a = (e) => e,
                d = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        s = Math.min(e.endIndex + e.overscan, e.count - 1),
                        i = [];
                    for (let e = t; e <= s; e++) i.push(e);
                    return i;
                },
                h = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let l = (e) => {
                        let { width: s, height: i } = e;
                        t({ width: Math.round(s), height: Math.round(i) });
                    };
                    if ((l(s.getBoundingClientRect()), !i.ResizeObserver)) return () => {};
                    let n = new i.ResizeObserver((t) => {
                        let i = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void l({ width: t.inlineSize, height: t.blockSize });
                            }
                            l(s.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
                    });
                    return (
                        n.observe(s, { box: 'border-box' }),
                        () => {
                            n.unobserve(s);
                        }
                    );
                },
                c = { passive: !0 },
                u = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = () => {
                        t({ width: s.innerWidth, height: s.innerHeight });
                    };
                    return (
                        i(),
                        s.addEventListener('resize', i, c),
                        () => {
                            s.removeEventListener('resize', i);
                        }
                    );
                },
                m = 'undefined' == typeof window || 'onscrollend' in window,
                g = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let l = 0,
                        n =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : r(
                                      i,
                                      () => {
                                          t(l, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        o = (i) => () => {
                            let { horizontal: o, isRtl: r } = e.options;
                            (l = o ? s.scrollLeft * ((r && -1) || 1) : s.scrollTop), n(), t(l, i);
                        },
                        a = o(!0),
                        d = o(!1);
                    d(), s.addEventListener('scroll', a, c);
                    let h = e.options.useScrollendEvent && m;
                    return (
                        h && s.addEventListener('scrollend', d, c),
                        () => {
                            s.removeEventListener('scroll', a), h && s.removeEventListener('scrollend', d);
                        }
                    );
                },
                f = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let l = 0,
                        n =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : r(
                                      i,
                                      () => {
                                          t(l, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        o = (i) => () => {
                            (l = s[e.options.horizontal ? 'scrollX' : 'scrollY']), n(), t(l, i);
                        },
                        a = o(!0),
                        d = o(!1);
                    d(), s.addEventListener('scroll', a, c);
                    let h = e.options.useScrollendEvent && m;
                    return (
                        h && s.addEventListener('scrollend', d, c),
                        () => {
                            s.removeEventListener('scroll', a), h && s.removeEventListener('scrollend', d);
                        }
                    );
                },
                _ = (e, t, s) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[s.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[s.options.horizontal ? 'width' : 'height']);
                },
                p = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var l, n;
                    null == (n = null == (l = i.scrollElement) ? void 0 : l.scrollTo) || n.call(l, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                },
                v = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var l, n;
                    null == (n = null == (l = i.scrollElement) ? void 0 : l.scrollTo) || n.call(l, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                };
            class E {
                constructor(e) {
                    (this.unsubs = []),
                        (this.scrollElement = null),
                        (this.targetWindow = null),
                        (this.isScrolling = !1),
                        (this.scrollToIndexTimeoutId = null),
                        (this.measurementsCache = []),
                        (this.itemSizeCache = new Map()),
                        (this.pendingMeasuredCacheIndexes = []),
                        (this.scrollRect = null),
                        (this.scrollOffset = null),
                        (this.scrollDirection = null),
                        (this.scrollAdjustments = 0),
                        (this.elementsCache = new Map()),
                        (this.observer = (() => {
                            let e = null,
                                t = () =>
                                    e ||
                                    (this.targetWindow && this.targetWindow.ResizeObserver
                                        ? (e = new this.targetWindow.ResizeObserver((e) => {
                                              e.forEach((e) => {
                                                  let t = () => {
                                                      this._measureElement(e.target, e);
                                                  };
                                                  this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t();
                                              });
                                          }))
                                        : null);
                            return {
                                disconnect: () => {
                                    var s;
                                    null == (s = t()) || s.disconnect(), (e = null);
                                },
                                observe: (e) => {
                                    var s;
                                    return null == (s = t()) ? void 0 : s.observe(e, { box: 'border-box' });
                                },
                                unobserve: (e) => {
                                    var s;
                                    return null == (s = t()) ? void 0 : s.unobserve(e);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (e) => {
                            Object.entries(e).forEach(([t, s]) => {
                                void 0 === s && delete e[t];
                            }),
                                (this.options = {
                                    debug: !1,
                                    initialOffset: 0,
                                    overscan: 1,
                                    paddingStart: 0,
                                    paddingEnd: 0,
                                    scrollPaddingStart: 0,
                                    scrollPaddingEnd: 0,
                                    horizontal: !1,
                                    getItemKey: a,
                                    rangeExtractor: d,
                                    onChange: () => {},
                                    measureElement: _,
                                    initialRect: { width: 0, height: 0 },
                                    scrollMargin: 0,
                                    gap: 0,
                                    indexAttribute: 'data-index',
                                    initialMeasurementsCache: [],
                                    lanes: 1,
                                    isScrollingResetDelay: 150,
                                    enabled: !0,
                                    isRtl: !1,
                                    useScrollendEvent: !1,
                                    useAnimationFrameWithResizeObserver: !1,
                                    ...e,
                                });
                        }),
                        (this.notify = (e) => {
                            var t, s;
                            null == (s = (t = this.options).onChange) || s.call(t, this, e);
                        }),
                        (this.maybeNotify = n(
                            () => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]),
                            (e) => {
                                this.notify(e);
                            },
                            {
                                key: !1,
                                debug: () => this.options.debug,
                                initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null],
                            },
                        )),
                        (this.cleanup = () => {
                            this.unsubs.filter(Boolean).forEach((e) => e()),
                                (this.unsubs = []),
                                this.observer.disconnect(),
                                (this.scrollElement = null),
                                (this.targetWindow = null);
                        }),
                        (this._didMount = () => () => {
                            this.cleanup();
                        }),
                        (this._willUpdate = () => {
                            var e;
                            let t = this.options.enabled ? this.options.getScrollElement() : null;
                            if (this.scrollElement !== t) {
                                if ((this.cleanup(), !t)) return void this.maybeNotify();
                                (this.scrollElement = t),
                                    this.scrollElement && 'ownerDocument' in this.scrollElement
                                        ? (this.targetWindow = this.scrollElement.ownerDocument.defaultView)
                                        : (this.targetWindow = (null == (e = this.scrollElement) ? void 0 : e.window) ?? null),
                                    this.elementsCache.forEach((e) => {
                                        this.observer.observe(e);
                                    }),
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 }),
                                    this.unsubs.push(
                                        this.options.observeElementRect(this, (e) => {
                                            (this.scrollRect = e), this.maybeNotify();
                                        }),
                                    ),
                                    this.unsubs.push(
                                        this.options.observeElementOffset(this, (e, t) => {
                                            (this.scrollAdjustments = 0),
                                                (this.scrollDirection = t ? (this.getScrollOffset() < e ? 'forward' : 'backward') : null),
                                                (this.scrollOffset = e),
                                                (this.isScrolling = t),
                                                this.maybeNotify();
                                        }),
                                    );
                            }
                        }),
                        (this.getSize = () =>
                            this.options.enabled
                                ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect), this.scrollRect[this.options.horizontal ? 'width' : 'height'])
                                : ((this.scrollRect = null), 0)),
                        (this.getScrollOffset = () =>
                            this.options.enabled
                                ? ((this.scrollOffset =
                                      this.scrollOffset ?? ('function' == typeof this.options.initialOffset ? this.options.initialOffset() : this.options.initialOffset)),
                                  this.scrollOffset)
                                : ((this.scrollOffset = null), 0)),
                        (this.getFurthestMeasurement = (e, t) => {
                            let s = new Map(),
                                i = new Map();
                            for (let l = t - 1; l >= 0; l--) {
                                let t = e[l];
                                if (s.has(t.lane)) continue;
                                let n = i.get(t.lane);
                                if ((null == n || t.end > n.end ? i.set(t.lane, t) : t.end < n.end && s.set(t.lane, !0), s.size === this.options.lanes)) break;
                            }
                            return i.size === this.options.lanes
                                ? Array.from(i.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = n(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, s, i, l) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: s, getItemKey: i, enabled: l }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = n(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: s, getItemKey: i, enabled: l }, n) => {
                                if (!l) return (this.measurementsCache = []), this.itemSizeCache.clear(), [];
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let o = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let r = this.measurementsCache.slice(0, o);
                                for (let l = o; l < e; l++) {
                                    let e = i(l),
                                        o = 1 === this.options.lanes ? r[l - 1] : this.getFurthestMeasurement(r, l),
                                        a = o ? o.end + this.options.gap : t + s,
                                        d = n.get(e),
                                        h = 'number' == typeof d ? d : this.options.estimateSize(l),
                                        c = a + h,
                                        u = o ? o.lane : l % this.options.lanes;
                                    r[l] = { index: l, start: a, size: h, end: c, key: e, lane: u };
                                }
                                return (this.measurementsCache = r), r;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = n(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, s, i) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: s, lanes: i }) {
                                              let l = e.length - 1,
                                                  n = b(0, l, (t) => e[t].start, s),
                                                  o = n;
                                              if (1 === i) for (; o < l && e[o].end < s + t; ) o++;
                                              else if (i > 1) {
                                                  let r = Array(i).fill(0);
                                                  for (; o < l && r.some((e) => e < s + t); ) {
                                                      let t = e[o];
                                                      (r[t.lane] = t.end), o++;
                                                  }
                                                  let a = Array(i).fill(s + t);
                                                  for (; n > 0 && a.some((e) => e >= s); ) {
                                                      let t = e[n];
                                                      (a[t.lane] = t.start), n--;
                                                  }
                                                  (n = Math.max(0, n - (n % i))), (o = Math.min(l, o + (i - 1 - (o % i))));
                                              }
                                              return { startIndex: n, endIndex: o };
                                          })({ measurements: e, outerSize: t, scrollOffset: s, lanes: i })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = n(
                            () => {
                                let e = null,
                                    t = null,
                                    s = this.calculateRange();
                                return (
                                    s && ((e = s.startIndex), (t = s.endIndex)),
                                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                                    [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
                                );
                            },
                            (e, t, s, i, l) => (null === i || null === l ? [] : e({ startIndex: i, endIndex: l, overscan: t, count: s })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                s = e.getAttribute(t);
                            return s ? parseInt(s, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let s = this.indexFromElement(e),
                                i = this.measurementsCache[s];
                            if (!i) return;
                            let l = i.key,
                                n = this.elementsCache.get(l);
                            n !== e && (n && this.observer.unobserve(n), this.observer.observe(e), this.elementsCache.set(l, e)),
                                e.isConnected && this.resizeItem(s, this.options.measureElement(e, t, this));
                        }),
                        (this.resizeItem = (e, t) => {
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let i = t - (this.itemSizeCache.get(s.key) ?? s.size);
                            0 !== i &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(s, i, this)
                                    : s.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += i), behavior: void 0 }),
                                this.pendingMeasuredCacheIndexes.push(s.index),
                                (this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, t))),
                                this.notify(!1));
                        }),
                        (this.measureElement = (e) => {
                            if (!e)
                                return void this.elementsCache.forEach((e, t) => {
                                    e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
                                });
                            this._measureElement(e, void 0);
                        }),
                        (this.getVirtualItems = n(
                            () => [this.getVirtualIndexes(), this.getMeasurements()],
                            (e, t) => {
                                let s = [];
                                for (let i = 0, l = e.length; i < l; i++) {
                                    let l = t[e[i]];
                                    s.push(l);
                                }
                                return s;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return o(t[b(0, t.length - 1, (e) => o(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, s = 0) => {
                            let i = this.getSize(),
                                l = this.getScrollOffset();
                            'auto' === t && (t = e >= l + i ? 'end' : 'start'), 'center' === t ? (e += (s - i) / 2) : 'end' === t && (e -= i);
                            let n = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[n]
                                            : this.scrollElement[n]
                                        : 0) - i,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let i = this.getSize(),
                                l = this.getScrollOffset();
                            if ('auto' === t)
                                if (s.end >= l + i - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(s.start <= l + this.options.scrollPaddingStart)) return [l, t];
                                    t = 'start';
                                }
                            let n = 'end' === t ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(n, t, s.size), t];
                        }),
                        (this.isDynamicMode = () => this.elementsCache.size > 0),
                        (this.cancelScrollToIndex = () => {
                            null !== this.scrollToIndexTimeoutId &&
                                this.targetWindow &&
                                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), (this.scrollToIndexTimeoutId = null));
                        }),
                        (this.scrollToOffset = (e, { align: t = 'start', behavior: s } = {}) => {
                            this.cancelScrollToIndex(),
                                'smooth' === s && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getOffsetForAlignment(e, t), { adjustments: void 0, behavior: s });
                        }),
                        (this.scrollToIndex = (e, { align: t = 'auto', behavior: s } = {}) => {
                            (e = Math.max(0, Math.min(e, this.options.count - 1))),
                                this.cancelScrollToIndex(),
                                'smooth' === s && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.');
                            let i = this.getOffsetForIndex(e, t);
                            if (!i) return;
                            let [l, n] = i;
                            this._scrollToOffset(l, { adjustments: void 0, behavior: s }),
                                'smooth' !== s &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = o(this.getOffsetForIndex(e, n));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: n, behavior: s });
                                        } else this.scrollToIndex(e, { align: n, behavior: s });
                                    }));
                        }),
                        (this.scrollBy = (e, { behavior: t } = {}) => {
                            this.cancelScrollToIndex(),
                                'smooth' === t && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getScrollOffset() + e, { adjustments: void 0, behavior: t });
                        }),
                        (this.getTotalSize = () => {
                            var e;
                            let t,
                                s = this.getMeasurements();
                            if (0 === s.length) t = this.options.paddingStart;
                            else if (1 === this.options.lanes) t = (null == (e = s[s.length - 1]) ? void 0 : e.end) ?? 0;
                            else {
                                let e = Array(this.options.lanes).fill(null),
                                    i = s.length - 1;
                                for (; i > 0 && e.some((e) => null === e); ) {
                                    let t = s[i];
                                    null === e[t.lane] && (e[t.lane] = t.end), i--;
                                }
                                t = Math.max(...e.filter((e) => null !== e));
                            }
                            return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
                        }),
                        (this._scrollToOffset = (e, { adjustments: t, behavior: s }) => {
                            this.options.scrollToFn(e, { behavior: s, adjustments: t }, this);
                        }),
                        (this.measure = () => {
                            (this.itemSizeCache = new Map()), this.notify(!1);
                        }),
                        this.setOptions(e);
                }
            }
            let b = (e, t, s, i) => {
                    for (; e <= t; ) {
                        let l = ((e + t) / 2) | 0,
                            n = s(l);
                        if (n < i) e = l + 1;
                        else {
                            if (!(n > i)) return l;
                            t = l - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                C = 'undefined' != typeof document ? i.useLayoutEffect : i.useEffect;
            function S(e) {
                let t = i.useReducer(() => ({}), {})[1],
                    s = {
                        ...e,
                        onChange: (s, i) => {
                            var n;
                            i ? (0, l.flushSync)(t) : t(), null == (n = e.onChange) || n.call(e, s, i);
                        },
                    },
                    [n] = i.useState(() => new E(s));
                return n.setOptions(s), C(() => n._didMount(), []), C(() => n._willUpdate()), n;
            }
            function M(e) {
                return S({ observeElementRect: h, observeElementOffset: g, scrollToFn: v, ...e });
            }
            function w(e) {
                return S({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: u,
                    observeElementOffset: f,
                    scrollToFn: p,
                    initialOffset: () => ('undefined' != typeof document ? window.scrollY : 0),
                    ...e,
                });
            }
        },
        83627: (e, t, s) => {
            'use strict';
            s.d(t, { NonMusicPage: () => R });
            var i = s(32290),
                l = s(63618),
                n = s(96103),
                o = s(55178),
                r = s(60900),
                a = s(39407),
                d = s(21732),
                h = s(73474),
                c = s(91027),
                u = s(54862),
                m = s(46049),
                g = s(71926),
                f = s(35609),
                _ = s(40959),
                p = s(64170),
                v = s(3435),
                E = s(7999),
                b = s(48922),
                C = s(22714),
                S = s(83920),
                M = s(3796),
                w = s(57594),
                x = s(58054),
                O = s(32468),
                A = s(74694),
                z = s(90341),
                I = s.n(z);
            let R = (0, n.PA)(() => {
                let { nonMusic: e, user: t } = (0, w.g)(),
                    { formatMessage: s } = (0, r.A)(),
                    { contentScrollRef: n, setContentScrollRef: z } = (0, S.g)(),
                    [R, T] = (0, u.d)();
                (0, o.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, M.J)(e.landing.isResolved);
                let y = (0, f._)(e.landing),
                    N = (0, c.c)(() => {
                        if (e.landing.isLoaded) return e.landing.getSkeleton({ id: h.p.NON_MUSIC, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 });
                    });
                return (
                    e.landing.isNeededToLoad && (0, o.use)(e.landing.getSkeleton({ id: h.p.NON_MUSIC, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 })),
                    (0, i.jsxs)(C.n, {
                        pageId: b._Q.NON_MUSIC,
                        children: [
                            (0, i.jsxs)(E.h, {
                                scrollElement: n,
                                outerTitle: s({ id: 'entity-names.podcasts-and-books' }),
                                headerElement: R,
                                shouldHideHeader: e.landing.hasUpperBlocks,
                                children: [
                                    (0, i.jsx)(A.Y, {
                                        variant: A.V.TEXT,
                                        showControls: !1,
                                        disableStickyVariant: !0,
                                        children: (0, i.jsx)('div', {
                                            className: I().header,
                                            children: (0, i.jsx)(g.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                children: (0, i.jsx)(a.A, { id: 'entity-names.podcasts-and-books' }),
                                            }),
                                        }),
                                    }),
                                    (0, i.jsxs)(m.N, {
                                        className: I().root,
                                        containerClassName: I().content,
                                        ref: z,
                                        'data-test-id': d.Xk.nonMusic.NON_MUSIC_PAGE,
                                        children: [
                                            (0, i.jsx)('div', {
                                                className: (0, l.$)(I().landing, { [I().landing_onlyWizard]: y }),
                                                children: (0, i.jsx)(_.E, {
                                                    landing: e.landing,
                                                    headerConcealerComponent: (0, i.jsx)('div', { ref: T }),
                                                    errorComponent: (0, i.jsx)(p.SomethingWentWrong, { className: I().error, withBackwardControl: !1 }),
                                                }),
                                            }),
                                            (0, i.jsx)(O.A, { children: (0, i.jsx)(x.w, { className: I().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(v.p, { onFinishSuccess: N }),
                        ],
                    })
                );
            });
        },
        90341: (e) => {
            e.exports = {
                root: 'NonMusicPage_root__IPKkH',
                content: 'NonMusicPage_content__7_TYy',
                header: 'NonMusicPage_header__dijgk',
                landing: 'NonMusicPage_landing__kGKTh',
                landing_onlyWizard: 'NonMusicPage_landing_onlyWizard__P9nN3',
                footer: 'NonMusicPage_footer__juz5v',
                error: 'NonMusicPage_error__oW0V3',
            };
        },
        95329: (e, t, s) => {
            'use strict';
            s.d(t, { M: () => i });
            var i = (function (e) {
                return (
                    (e.MAIN = 'MAIN'),
                    (e.TRAILER = 'TRAILER'),
                    (e.VIDEO_PLAYER = 'VIDEO_PLAYER'),
                    (e.IMAGE_SLIDER = 'IMAGE_SLIDER'),
                    (e.PROMO_LANDING = 'PROMO_LANDING'),
                    e
                );
            })({});
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 3379, 3647, 8497, 5718, 6347, 7258, 7680, 3183, 7972, 8868, 7231, 9763, 5108, 5583, 5976, 5367, 4413, 1914, 6723, 4761, 992, 3931, 6639, 6706, 1311,
                5201, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1417, 9755, 6477, 7275, 2586, 8347, 4522, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563,
                6341, 3759, 4797, 4638, 277, 8160, 1385, 9710, 4220, 9562, 7358,
            ],
            () => e((e.s = 37996)),
        ),
            (_N_E = e.O());
    },
]);
