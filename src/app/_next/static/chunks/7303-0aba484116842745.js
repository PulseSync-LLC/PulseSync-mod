(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7303, 7307],
    {
        3435: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => H });
            var s = i(32290),
                l = i(63618),
                n = i(96103),
                r = i(55178),
                o = i(60900),
                a = i(39407),
                d = i(21732),
                h = i(54862),
                c = i(63423),
                u = i(84638),
                m = i(15299),
                f = i(71926),
                g = i(54667),
                p = i(45477),
                v = i(75582),
                _ = i(55332),
                b = i(95329),
                C = i(53022),
                w = i(57594),
                S = i(58008),
                x = i(49399),
                z = i(90357),
                M = i(28563),
                E = i(89020),
                I = i(45180),
                y = i(8946),
                O = i(45257),
                T = i(14934),
                A = i(82586),
                R = i(86269),
                j = i(23352),
                N = i(11323);
            let W = { src: '/_next/static/media/artist.c49b2bfa.png' };
            var D = i(22800),
                k = i.n(D);
            let F = (0, n.PA)((e) => {
                let { className: t, artist: i } = e,
                    { ref: n, intersectionPropertyId: o } = (0, j.n)(),
                    {
                        wizard: { likeArtist: a, isArtistLiked: h },
                    } = (0, w.g)(),
                    { id: u, name: m, coverUri: g } = i,
                    p = (0, r.useCallback)(() => {
                        a(u);
                    }, [a, u]),
                    v = h(u),
                    _ = (0, r.useMemo)(
                        () =>
                            (0, s.jsx)(R.t, {
                                className: k().cover,
                                radius: 'round',
                                'data-test-id': d.e8.wizard.ARTIST_CARD,
                                children: (0, s.jsxs)(c.$, {
                                    radius: 'round',
                                    className: k().coverBlock,
                                    variant: 'default',
                                    onClick: p,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': v,
                                    'aria-label': m,
                                    'data-test-id': d.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, s.jsx)(N.B, { className: k().image, src: g || W.src, fit: 'cover', alt: m, withAvatarReplace: !!g, 'aria-hidden': !0 }),
                                        (0, s.jsx)('div', {
                                            className: (0, l.$)(k().like),
                                            children: (0, s.jsx)(A.I, { variant: 'likedVariant', size: 's', className: k().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [v, g, m, p],
                    );
                return (0, s.jsx)(T.MN, {
                    ref: n,
                    className: (0, l.$)(k().root, { [k().root_selected]: v }, t),
                    textPosition: 'center',
                    title: (0, s.jsx)(f.HL, {
                        'aria-hidden': !0,
                        className: k().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': d.e8.wizard.ARTIST_CARD_NAME,
                        children: m,
                    }),
                    'data-intersection-property-id': o,
                    view: _,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                });
            });
            var L = i(6680),
                P = i.n(L);
            let B = { [g.u.Desktop]: { start: 40, end: 40 }, [g.u.Mobile]: { start: 40, end: 40 } },
                H = (0, n.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: i } = (0, o.A)(),
                        {
                            wizard: n,
                            settings: { isMobile: g, isWindowsApplication: T, isLinuxApplication: A },
                            user: R,
                        } = (0, w.g)(),
                        { notify: j } = (0, v.l)(),
                        N = (0, C.z)(),
                        [W, D] = (0, h.d)(),
                        k = (0, m.zb)(0),
                        L = (0, r.useMemo)(
                            () => (e) => {
                                var t;
                                if (!k.onTabChange || e === k.value) return;
                                k.onTabChange(e);
                                let i = null == (t = n.genres[e]) ? void 0 : t.id;
                                n.setFilter(i), null == W || W.scrollTo({ top: 0 });
                            },
                            [n, k, W],
                        ),
                        H = (0, r.useMemo)(() => {
                            switch (n.selectedArtistsCounter) {
                                case 0:
                                    return i({ id: 'wizard.button-tune' });
                                case 1:
                                    return i({ id: 'wizard.button-little-more' });
                                case 2:
                                    return i({ id: 'wizard.button-one-more' });
                                default:
                                    return i({ id: 'wizard.button-done' });
                            }
                        }, [n.selectedArtistsCounter, i]),
                        $ = (0, r.useMemo)(
                            () =>
                                (0, s.jsx)(y.wI, {
                                    className: P().tabCarousel,
                                    ...k,
                                    onTabChange: L,
                                    isShimmerVisible: n.loadingState === x.G.PENDING,
                                    shimmer: (0, s.jsx)(y.zr, { isActive: !0, className: P().tabCarousel, shimmerClassName: P().tabShimmer, count: g ? 2 : 3 }),
                                    children: n.genres.map((e, t) =>
                                        (0, s.jsx)(
                                            I.o,
                                            {
                                                className: (0, l.$)(P().filter, { [P().filter_selected]: t === k.value }),
                                                titleClassName: P().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [n.genres, k, L, n.loadingState, g],
                        ),
                        V = (0, r.useCallback)(() => {
                            n.getArtists(60);
                        }, [n]);
                    (0, r.useEffect)(() => {
                        n.filter && V();
                    }, [n.filter, V]);
                    let U = (0, r.useCallback)(async () => {
                        await n.getGenres(), V();
                    }, [n, V]);
                    (0, r.useEffect)(() => {
                        n.modal.isOpened && U();
                    }, [n, n.modal.isOpened, U]),
                        (0, r.useEffect)(() => {
                            n.loadingState === x.G.REJECT &&
                                (n.modal.close(), j((0, s.jsx)(z.h, { error: i({ id: 'error-messages.error-load-wizard' }) }), { containerId: p.u.ERROR }));
                        }, [n, n.getGenres, n.loadingState, i, j]);
                    let K = (0, r.useMemo)(
                            () =>
                                (0, s.jsx)(f.DZ, {
                                    className: P().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': d.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, s.jsx)(a.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        Z = (0, r.useCallback)(async () => {
                            n.selectedArtistsCounter < 3 ? n.getArtists() : (await n.finish()) === S.F.OK && (await R.getSettings(), await (null == t ? void 0 : t())),
                                n.modal.close();
                        }, [t, R, n]);
                    return (
                        (0, r.useEffect)(
                            () => (
                                null == N ||
                                    N.addShortcutsListener(b.M.MAIN, _.l.CLOSE, () => {
                                        n.modal.isOpened && Z();
                                    }),
                                () => {
                                    null == N || N.removeShortcutsListener(b.M.MAIN, _.l.CLOSE);
                                }
                            ),
                            [Z, n.modal.isOpened, N],
                        ),
                        (0, s.jsxs)(u.a, {
                            className: (0, l.$)(P().root, { [P().root_withCustomControls]: T || A }),
                            headerClassName: P().modalHeader,
                            contentClassName: P().modalContent,
                            open: n.modal.isOpened,
                            onOpenChange: n.modal.onOpenChange,
                            onClose: Z,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: i({ id: 'interface-actions.close' }),
                            closeButtonProps: { 'data-test-id': d.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON },
                            'data-test-id': d.e8.wizard.WIZARD_MODAL,
                            header: g && K,
                            escapeKey: !1,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: P().wrapper,
                                    children: [
                                        !g && K,
                                        (0, s.jsx)(f.HL, {
                                            className: P().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, s.jsx)(a.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, s.jsx)(c.$, {
                                            className: P().button,
                                            size: g ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: Z,
                                            disabled: n.selectedArtistsCounter < 3,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, s.jsx)(f.HL, { variant: 'div', size: 'm', weight: 'medium', children: H }),
                                        }),
                                    ],
                                }),
                                (0, s.jsxs)('div', {
                                    className: P().mainContainer,
                                    children: [
                                        (0, s.jsx)(M.F, { className: P().carousel, carouselElement: $, scrollPadding: B }),
                                        (0, s.jsx)(O.$, {
                                            withFooter: !1,
                                            className: (0, l.$)(P().scrollContainer, P().important),
                                            itemContentCallback: (e) => {
                                                let t = n.artistsByGenre[e];
                                                if (!t) {
                                                    let e = i({ id: 'loading-messages.entity-is-loading' }, { entityName: i({ id: 'entity-names.artist' }) });
                                                    return (0, s.jsx)(E.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, s.jsx)(F, { artist: t }, t.id);
                                            },
                                            data: n.artistsByGenre,
                                            endReached: V,
                                            listClassName: P().content,
                                            itemClassName: P().item,
                                            pageSize: 60,
                                            handleRef: D,
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
        10790: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => n, q: () => l });
            let s = new Set(),
                l = (e) => (
                    s.add(e),
                    () => {
                        s.delete(e);
                    }
                ),
                n = () => {
                    s.forEach((e) => {
                        e();
                    });
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
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => p });
            var s = i(32290),
                l = i(63618),
                n = i(8055),
                r = i(55178);
            let o = (e) => {
                    let { style: t, forwardRef: i, context: l, ...n } = e,
                        r = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        o = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': r, style: { ...t }, ref: i, ...n });
                },
                a = (0, r.forwardRef)((e, t) => (0, s.jsx)(o, { forwardRef: t, ...e }));
            var d = i(39684),
                h = i.n(d);
            let c = (e) => {
                    let { style: t, forwardRef: i, withFooter: n, withHeader: r, withForceScroll: o, ...a } = e;
                    return (0, s.jsx)('div', {
                        className: (0, l.$)(h().scroller, { [h().scroller_withFooter]: n, [h().scroller_withHeader]: r, [h().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: i,
                        ...a,
                        tabIndex: -1,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, s.jsx)(c, { forwardRef: t, ...e }));
            var m = i(62060),
                f = i(31417);
            let g = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: l,
                            debounceDurationInMs: n = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: d,
                            ...h
                        } = e,
                        [c, u] = (0, r.useState)(null),
                        g = (0, r.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == l || l(e), a.length > 0 && u(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < s; e++) i(e);
                                    }
                                }, n),
                            [n, l, t, i, a],
                        );
                    (0, r.useEffect)(() => {
                        a.length > 0 && c && g(c);
                    }, a);
                    let p = (0, r.useMemo)(() => {
                        if (d)
                            return (0, m.A)((e) => {
                                d(e);
                            }, n);
                    }, [d, n]);
                    return (0, s.jsx)(f.sN, { rangeChanged: g, totalCount: o, endReached: p, ...h });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: d,
                            itemClassName: c,
                            itemContentCallback: m,
                            listClassName: f,
                            overscan: p = 700,
                            pageSize: v = 20,
                            totalCount: _,
                            totalRequests: b,
                            debounceDurationInMs: C,
                            initialItemCount: w,
                            minInitialItemCount: S = 20,
                            handleRef: x,
                            alwaysShowScrollbar: z = !1,
                            testId: M,
                            isMobileLayout: E = !1,
                            shouldTriggerRangeChangedOn: I,
                            ...y
                        } = e,
                        [O, T] = (0, r.useState)(!1),
                        A = (0, r.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    T(e);
                                }, 100),
                            [],
                        ),
                        R = (0, r.useMemo)(() => {
                            var e, t;
                            return E
                                ? {
                                      Scroller: u,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : a,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: u,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : a,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, b, E]),
                        j = w ? Math.min(w, S) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(h().root, { [h().root_scrolling]: O || z, [h().root_notScrolling]: !O && !z }, t),
                        'data-test-id': M,
                        children: [
                            E && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(g, {
                                overscan: p,
                                components: R,
                                listClassName: f,
                                itemClassName: c,
                                isScrolling: A,
                                itemContent: m,
                                scrollerRef: x,
                                totalCount: _,
                                pageSize: v,
                                onPageHandler: o,
                                onRangeHandler: d,
                                debounceDurationInMs: C,
                                initialItemCount: j,
                                shouldTriggerRangeChangedOn: I,
                                ...y,
                            }),
                            E && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        77307: (e, t, i) => {
            'use strict';
            i.d(t, { Te: () => x, XW: () => z });
            var s = i(55178),
                l = i(51767);
            function n(e, t, i) {
                let s,
                    l = i.initialDeps ?? [];
                function n() {
                    var n, r, o, a;
                    let d, h;
                    i.key && (null == (n = i.debug) ? void 0 : n.call(i)) && (d = Date.now());
                    let c = e();
                    if (!(c.length !== l.length || c.some((e, t) => l[t] !== e))) return s;
                    if (
                        ((l = c),
                        i.key && (null == (r = i.debug) ? void 0 : r.call(i)) && (h = Date.now()),
                        (s = t(...c)),
                        i.key && (null == (o = i.debug) ? void 0 : o.call(i)))
                    ) {
                        let e = Math.round((Date.now() - d) * 100) / 100,
                            t = Math.round((Date.now() - h) * 100) / 100,
                            s = t / 16,
                            l = (e, t) => {
                                for (e = String(e); e.length < t; ) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${l(t, 5)} /${l(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * s, 120))}deg 100% 31%);`,
                            null == i ? void 0 : i.key,
                        );
                    }
                    return null == (a = null == i ? void 0 : i.onChange) || a.call(i, s), s;
                }
                return (
                    (n.updateDeps = (e) => {
                        l = e;
                    }),
                    n
                );
            }
            function r(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let o = (e, t, i) => {
                    let s;
                    return function (...l) {
                        e.clearTimeout(s), (s = e.setTimeout(() => t.apply(this, l), i));
                    };
                },
                a = (e) => e,
                d = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        i = Math.min(e.endIndex + e.overscan, e.count - 1),
                        s = [];
                    for (let e = t; e <= i; e++) s.push(e);
                    return s;
                },
                h = (e, t) => {
                    let i = e.scrollElement;
                    if (!i) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let l = (e) => {
                        let { width: i, height: s } = e;
                        t({ width: Math.round(i), height: Math.round(s) });
                    };
                    if ((l(i.getBoundingClientRect()), !s.ResizeObserver)) return () => {};
                    let n = new s.ResizeObserver((t) => {
                        let s = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void l({ width: t.inlineSize, height: t.blockSize });
                            }
                            l(i.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
                    });
                    return (
                        n.observe(i, { box: 'border-box' }),
                        () => {
                            n.unobserve(i);
                        }
                    );
                },
                c = { passive: !0 },
                u = (e, t) => {
                    let i = e.scrollElement;
                    if (!i) return;
                    let s = () => {
                        t({ width: i.innerWidth, height: i.innerHeight });
                    };
                    return (
                        s(),
                        i.addEventListener('resize', s, c),
                        () => {
                            i.removeEventListener('resize', s);
                        }
                    );
                },
                m = 'undefined' == typeof window || 'onscrollend' in window,
                f = (e, t) => {
                    let i = e.scrollElement;
                    if (!i) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let l = 0,
                        n =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : o(
                                      s,
                                      () => {
                                          t(l, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (s) => () => {
                            let { horizontal: r, isRtl: o } = e.options;
                            (l = r ? i.scrollLeft * ((o && -1) || 1) : i.scrollTop), n(), t(l, s);
                        },
                        a = r(!0),
                        d = r(!1);
                    d(), i.addEventListener('scroll', a, c);
                    let h = e.options.useScrollendEvent && m;
                    return (
                        h && i.addEventListener('scrollend', d, c),
                        () => {
                            i.removeEventListener('scroll', a), h && i.removeEventListener('scrollend', d);
                        }
                    );
                },
                g = (e, t) => {
                    let i = e.scrollElement;
                    if (!i) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let l = 0,
                        n =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : o(
                                      s,
                                      () => {
                                          t(l, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (s) => () => {
                            (l = i[e.options.horizontal ? 'scrollX' : 'scrollY']), n(), t(l, s);
                        },
                        a = r(!0),
                        d = r(!1);
                    d(), i.addEventListener('scroll', a, c);
                    let h = e.options.useScrollendEvent && m;
                    return (
                        h && i.addEventListener('scrollend', d, c),
                        () => {
                            i.removeEventListener('scroll', a), h && i.removeEventListener('scrollend', d);
                        }
                    );
                },
                p = (e, t, i) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[i.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[i.options.horizontal ? 'width' : 'height']);
                },
                v = (e, { adjustments: t = 0, behavior: i }, s) => {
                    var l, n;
                    null == (n = null == (l = s.scrollElement) ? void 0 : l.scrollTo) || n.call(l, { [s.options.horizontal ? 'left' : 'top']: e + t, behavior: i });
                },
                _ = (e, { adjustments: t = 0, behavior: i }, s) => {
                    var l, n;
                    null == (n = null == (l = s.scrollElement) ? void 0 : l.scrollTo) || n.call(l, { [s.options.horizontal ? 'left' : 'top']: e + t, behavior: i });
                };
            class b {
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
                                    var i;
                                    null == (i = t()) || i.disconnect(), (e = null);
                                },
                                observe: (e) => {
                                    var i;
                                    return null == (i = t()) ? void 0 : i.observe(e, { box: 'border-box' });
                                },
                                unobserve: (e) => {
                                    var i;
                                    return null == (i = t()) ? void 0 : i.unobserve(e);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (e) => {
                            Object.entries(e).forEach(([t, i]) => {
                                void 0 === i && delete e[t];
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
                                    measureElement: p,
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
                            var t, i;
                            null == (i = (t = this.options).onChange) || i.call(t, this, e);
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
                            let i = new Map(),
                                s = new Map();
                            for (let l = t - 1; l >= 0; l--) {
                                let t = e[l];
                                if (i.has(t.lane)) continue;
                                let n = s.get(t.lane);
                                if ((null == n || t.end > n.end ? s.set(t.lane, t) : t.end < n.end && i.set(t.lane, !0), i.size === this.options.lanes)) break;
                            }
                            return s.size === this.options.lanes
                                ? Array.from(s.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = n(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, i, s, l) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: i, getItemKey: s, enabled: l }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = n(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: i, getItemKey: s, enabled: l }, n) => {
                                if (!l) return (this.measurementsCache = []), this.itemSizeCache.clear(), [];
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let r = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let o = this.measurementsCache.slice(0, r);
                                for (let l = r; l < e; l++) {
                                    let e = s(l),
                                        r = 1 === this.options.lanes ? o[l - 1] : this.getFurthestMeasurement(o, l),
                                        a = r ? r.end + this.options.gap : t + i,
                                        d = n.get(e),
                                        h = 'number' == typeof d ? d : this.options.estimateSize(l),
                                        c = a + h,
                                        u = r ? r.lane : l % this.options.lanes;
                                    o[l] = { index: l, start: a, size: h, end: c, key: e, lane: u };
                                }
                                return (this.measurementsCache = o), o;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = n(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, i, s) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: i, lanes: s }) {
                                              let l = e.length - 1,
                                                  n = C(0, l, (t) => e[t].start, i),
                                                  r = n;
                                              if (1 === s) for (; r < l && e[r].end < i + t; ) r++;
                                              else if (s > 1) {
                                                  let o = Array(s).fill(0);
                                                  for (; r < l && o.some((e) => e < i + t); ) {
                                                      let t = e[r];
                                                      (o[t.lane] = t.end), r++;
                                                  }
                                                  let a = Array(s).fill(i + t);
                                                  for (; n > 0 && a.some((e) => e >= i); ) {
                                                      let t = e[n];
                                                      (a[t.lane] = t.start), n--;
                                                  }
                                                  (n = Math.max(0, n - (n % s))), (r = Math.min(l, r + (s - 1 - (r % s))));
                                              }
                                              return { startIndex: n, endIndex: r };
                                          })({ measurements: e, outerSize: t, scrollOffset: i, lanes: s })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = n(
                            () => {
                                let e = null,
                                    t = null,
                                    i = this.calculateRange();
                                return (
                                    i && ((e = i.startIndex), (t = i.endIndex)),
                                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                                    [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
                                );
                            },
                            (e, t, i, s, l) => (null === s || null === l ? [] : e({ startIndex: s, endIndex: l, overscan: t, count: i })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                i = e.getAttribute(t);
                            return i ? parseInt(i, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let i = this.indexFromElement(e),
                                s = this.measurementsCache[i];
                            if (!s) return;
                            let l = s.key,
                                n = this.elementsCache.get(l);
                            n !== e && (n && this.observer.unobserve(n), this.observer.observe(e), this.elementsCache.set(l, e)),
                                e.isConnected && this.resizeItem(i, this.options.measureElement(e, t, this));
                        }),
                        (this.resizeItem = (e, t) => {
                            let i = this.measurementsCache[e];
                            if (!i) return;
                            let s = t - (this.itemSizeCache.get(i.key) ?? i.size);
                            0 !== s &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(i, s, this)
                                    : i.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += s), behavior: void 0 }),
                                this.pendingMeasuredCacheIndexes.push(i.index),
                                (this.itemSizeCache = new Map(this.itemSizeCache.set(i.key, t))),
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
                                let i = [];
                                for (let s = 0, l = e.length; s < l; s++) {
                                    let l = t[e[s]];
                                    i.push(l);
                                }
                                return i;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return r(t[C(0, t.length - 1, (e) => r(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, i = 0) => {
                            let s = this.getSize(),
                                l = this.getScrollOffset();
                            'auto' === t && (t = e >= l + s ? 'end' : 'start'), 'center' === t ? (e += (i - s) / 2) : 'end' === t && (e -= s);
                            let n = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[n]
                                            : this.scrollElement[n]
                                        : 0) - s,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let i = this.measurementsCache[e];
                            if (!i) return;
                            let s = this.getSize(),
                                l = this.getScrollOffset();
                            if ('auto' === t)
                                if (i.end >= l + s - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(i.start <= l + this.options.scrollPaddingStart)) return [l, t];
                                    t = 'start';
                                }
                            let n = 'end' === t ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(n, t, i.size), t];
                        }),
                        (this.isDynamicMode = () => this.elementsCache.size > 0),
                        (this.cancelScrollToIndex = () => {
                            null !== this.scrollToIndexTimeoutId &&
                                this.targetWindow &&
                                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), (this.scrollToIndexTimeoutId = null));
                        }),
                        (this.scrollToOffset = (e, { align: t = 'start', behavior: i } = {}) => {
                            this.cancelScrollToIndex(),
                                'smooth' === i && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getOffsetForAlignment(e, t), { adjustments: void 0, behavior: i });
                        }),
                        (this.scrollToIndex = (e, { align: t = 'auto', behavior: i } = {}) => {
                            (e = Math.max(0, Math.min(e, this.options.count - 1))),
                                this.cancelScrollToIndex(),
                                'smooth' === i && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.');
                            let s = this.getOffsetForIndex(e, t);
                            if (!s) return;
                            let [l, n] = s;
                            this._scrollToOffset(l, { adjustments: void 0, behavior: i }),
                                'smooth' !== i &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = r(this.getOffsetForIndex(e, n));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: n, behavior: i });
                                        } else this.scrollToIndex(e, { align: n, behavior: i });
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
                                i = this.getMeasurements();
                            if (0 === i.length) t = this.options.paddingStart;
                            else if (1 === this.options.lanes) t = (null == (e = i[i.length - 1]) ? void 0 : e.end) ?? 0;
                            else {
                                let e = Array(this.options.lanes).fill(null),
                                    s = i.length - 1;
                                for (; s > 0 && e.some((e) => null === e); ) {
                                    let t = i[s];
                                    null === e[t.lane] && (e[t.lane] = t.end), s--;
                                }
                                t = Math.max(...e.filter((e) => null !== e));
                            }
                            return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
                        }),
                        (this._scrollToOffset = (e, { adjustments: t, behavior: i }) => {
                            this.options.scrollToFn(e, { behavior: i, adjustments: t }, this);
                        }),
                        (this.measure = () => {
                            (this.itemSizeCache = new Map()), this.notify(!1);
                        }),
                        this.setOptions(e);
                }
            }
            let C = (e, t, i, s) => {
                    for (; e <= t; ) {
                        let l = ((e + t) / 2) | 0,
                            n = i(l);
                        if (n < s) e = l + 1;
                        else {
                            if (!(n > s)) return l;
                            t = l - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                w = 'undefined' != typeof document ? s.useLayoutEffect : s.useEffect;
            function S(e) {
                let t = s.useReducer(() => ({}), {})[1],
                    i = {
                        ...e,
                        onChange: (i, s) => {
                            var n;
                            s ? (0, l.flushSync)(t) : t(), null == (n = e.onChange) || n.call(e, i, s);
                        },
                    },
                    [n] = s.useState(() => new b(i));
                return n.setOptions(i), w(() => n._didMount(), []), w(() => n._willUpdate()), n;
            }
            function x(e) {
                return S({ observeElementRect: h, observeElementOffset: f, scrollToFn: _, ...e });
            }
            function z(e) {
                return S({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: u,
                    observeElementOffset: g,
                    scrollToFn: v,
                    initialOffset: () => ('undefined' != typeof document ? window.scrollY : 0),
                    ...e,
                });
            }
        },
        91724: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => n });
            var s = i(55178),
                l = i(10790);
            let n = (e) => {
                (0, s.useEffect)(() => (0, l.q)(e), [e]);
            };
        },
        94218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => u });
            var s = i(32290),
                l = i(21916),
                n = i(39407),
                r = i(21732),
                o = i(91027),
                a = i(63423),
                d = i(71926),
                h = i(70204),
                c = i(34186);
            let u = (e) => {
                let { size: t = 'm', variant: i = 'default', withRipple: u = !0, buttonText: m, isBlock: f, key: g, className: p } = e,
                    v = (0, l.useRouter)(),
                    _ = (0, c.N)().get(h.QG),
                    b = (0, o.c)(() => {
                        _.authorizationUrl && v.push(_.authorizationUrl);
                    });
                return (0, s.jsx)(
                    a.$,
                    {
                        onClick: b,
                        className: p,
                        isBlock: f,
                        color: 'primary',
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: u,
                        'data-test-id': r.S7.UNAUTHORIZED_BUTTON,
                        children: m || (0, s.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(n.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
                );
            };
        },
    },
]);
