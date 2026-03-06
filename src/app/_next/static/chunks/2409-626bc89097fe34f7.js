(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2409],
    {
        2405: (e, t, i) => {
            'use strict';
            i.d(t, { SortDropdown: () => _ });
            var s = i(54486),
                n = i(28303),
                r = i(61910),
                l = i(47713),
                o = i(31500),
                a = i(11405),
                d = i(8817),
                m = i(77881),
                c = i(71656),
                u = i(5956),
                b = i(97800),
                h = i(83252),
                v = i(90229),
                p = i(46353),
                g = i.n(p);
            let P = { [a.g.RATING]: (0, s.jsx)(l.A, { id: 'sort.sort-by-rating' }), [a.g.YEAR]: (0, s.jsx)(l.A, { id: 'sort.sort-by-year' }) },
                _ = (0, n.PA)((e) => {
                    var t;
                    let { sortModel: i, onSort: n } = e,
                        {
                            settings: { isMobile: p },
                        } = (0, h.Pjs)(),
                        _ = (0, d.c)((e) => {
                            (0, v.W)(e.id) && i.sortBy !== e.id && (i.setSortBy(e.id), n());
                        }),
                        x = (0, r.useMemo)(
                            () =>
                                p
                                    ? (0, s.jsx)(m.$, { radius: 'xxxl', className: g().button, icon: (0, s.jsx)(u.Icon, { variant: 'filter', size: 'xs' }) })
                                    : (0, s.jsxs)(m.$, {
                                          radius: 'xxxl',
                                          className: g().button,
                                          ...(0, o.Am)(o.Kq.sort.SORT_DROPDOWN_BUTTON),
                                          children: [
                                              (0, s.jsx)(b.Caption, {
                                                  variant: 'span',
                                                  size: 'm',
                                                  weight: 'medium',
                                                  ...(0, o.Am)(o.Kq.sort.SORT_DROPDOWN_BUTTON_CAPTION),
                                                  children: i.sortBy ? P[i.sortBy] : (0, s.jsx)(l.A, { id: 'sort.select-filter' }),
                                              }),
                                              (0, s.jsx)(u.Icon, { size: 'xxs', variant: 'arrowDown', ...(0, o.Am)(o.Kq.sort.SORT_DROPDOWN_BUTTON_ICON) }),
                                          ],
                                      }),
                            [p, i.sortBy],
                        );
                    return (0, s.jsx)(c.ms, {
                        placement: p ? 'bottom' : 'top',
                        isMobile: p,
                        strategy: 'fixed',
                        className: g().root,
                        onSelect: _,
                        reference: x,
                        offsetOptions: { mainAxis: 10, crossAxis: -50 },
                        defaultValue: null != (t = i.sortBy) ? t : a.g.YEAR,
                        containerClassName: g().container,
                        header: p ? (0, s.jsx)('div', { className: g().header }) : void 0,
                        ...(0, o.Am)(o.Kq.sort.SORT_DROPDOWN),
                        children: Object.values(a.g).map((e) => (0, s.jsx)(c.c$, { id: e, label: P[e], ...(0, o.Am)(o.Kq.sort.SORT_DROPDOWN_ITEM) }, e)),
                    });
                });
        },
        4499: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => n });
            var s = i(83252);
            async function n(e, t) {
                var i, n, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, s.WGy)(t.locale),
                    o = l({ id: 'metadata.label-artists-title' }, { labelName: e.name, labelType: e.type }),
                    a = l({ id: 'metadata.label-artists-description' }, { labelName: e.name, labelType: e.type });
                return {
                    title: o,
                    description: a,
                    openGraph: (0, s.i$E)({
                        ogTitle: o,
                        ogDescription: a,
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        siteName: l({ id: 'metadata.yandex-music' }),
                        ogType: 'music.playlist',
                    }),
                    twitter: (0, s.HRN)({ cardType: s.WfF.APP, title: o, url: t.url, appName: l({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, s.X5i)({
                        additional: { ...t, url: null != (n = t.url) ? n : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, s.SEs)('/label/:labelId/artists', t.tld, { params: { labelId: e.id } }),
                };
            }
        },
        6094: (e, t, i) => {
            'use strict';
            i.d(t, { LabelAlbumsPage: () => y });
            var s = i(54486),
                n = i(50420),
                r = i(28303),
                l = i(97396),
                o = i(61910),
                a = i(43426),
                d = i(31500),
                m = i(8817),
                c = i(97800),
                u = i(82644),
                b = i(80156),
                h = i(33276),
                v = i(40502),
                p = i(83252),
                g = i(80585),
                P = i(18569),
                _ = i(52456),
                x = i.n(_);
            let y = (0, r.PA)((e) => {
                let { labelId: t, preloadedLabel: i, preloadedAlbums: r, sortBy: _ } = e,
                    {
                        label: { id: y, type: N, name: f, albumsSubpage: j, reset: S, isNeededToLoad: L, getData: A, isPublisher: C },
                        settings: { isMobile: k },
                        experiments: T,
                    } = (0, p.Pjs)(),
                    { formatMessage: w } = (0, a.A)(),
                    { contentScrollRef: O, setContentScrollRef: I } = (0, p.gKY)(),
                    E = (0, p.W6M)(),
                    R = C ? w({ id: 'page.label-podcast-header' }, { labelName: f }) : w({ id: 'page.label-albums-header' }, { labelName: f }),
                    B = (0, m.c)((e) => {
                        var i;
                        j.getData({ labelId: Number(t), page: e, pageSize: 20, sortBy: null != (i = j.sort.sortBy) ? i : _ });
                    }),
                    F = (0, m.c)(() => {
                        j.reset(), B(0);
                    });
                (0, v.y8)({ sortModel: j.sort }),
                    (0, p.XcE)(j.pagesLoader, B),
                    (0, o.useEffect)(
                        () => () => {
                            S(), j.reset();
                        },
                        [S, j],
                    ),
                    (j.isNotFound || !T.checkExperiment(p.zal.WebNextLabelPage, 'on')) && (0, l.notFound)(),
                    (0, P.Q)({ id: Number(y), name: null != f ? f : '', type: null != N ? N : '' }, P.T.ALBUMS),
                    (0, p.Jzs)(j.isResolved);
                let W = (0, o.useMemo)(() => ({ Footer: () => (0, s.jsx)(g.A, { children: (0, s.jsx)(g.wi, { className: x().footer }) }) }), []),
                    z = w({ id: 'entity-names.label-albums-list' }),
                    K = [];
                if (j.isNeededToLoad) {
                    var U;
                    let e = j.sort.sortBy === _ || void 0 === j.sort.sortBy;
                    K.push(j.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedAlbums: e ? r : void 0, sortBy: null != (U = j.sort.sortBy) ? U : _ }));
                }
                if (
                    (L && K.push(A({ labelId: Number(t), preloadedLabel: i, withLabelEntities: !1 })),
                    K.length && (0, o.use)(Promise.allSettled(K)),
                    j.isRejected && !j.isNotFound)
                )
                    return (0, s.jsx)(u.w, {});
                let D = j.isShimmerVisible ? 20 : j.items.length;
                return (0, s.jsx)(p.nVz, {
                    pageId: p._Q$.LABEL_ALBUMS,
                    children: (0, s.jsx)(h.hO, {
                        scrollElement: O,
                        outerTitle: R,
                        children: (0, s.jsxs)('div', {
                            className: x().root,
                            ...(0, d.Am)(d.Xk.label.LABEL_ALBUMS_PAGE),
                            children: [
                                (0, s.jsxs)(g.Y9, {
                                    variant: g.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: E.canBack,
                                    children: [
                                        (0, s.jsx)(c.Heading, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: R }),
                                        (0, s.jsx)(v.mi, { sortModel: j.sort, onSort: F }),
                                    ],
                                }),
                                (0, s.jsx)(g.$$, {
                                    className: (0, n.$)(x().scrollContainer, x().important),
                                    listClassName: x().content,
                                    itemClassName: x().item,
                                    customComponents: W,
                                    itemContentCallback: (e) => {
                                        let t = j.items[e],
                                            i = w({ id: 'loading-messages.entity-is-loading' }, { entityName: w({ id: 'entity-names.album' }) });
                                        return t
                                            ? (0, s.jsx)(b.aX, { album: t, contentLinesCount: 4, withAddition: !t.isNonMusic, withLikesCount: t.isNonMusic }, t.id)
                                            : (0, s.jsx)(g.Vt, { 'aria-label': i, linesCount: 4 });
                                    },
                                    totalCount: D,
                                    onGetDataByPage: B,
                                    pageSize: 20,
                                    totalRequests: j.requestsCount,
                                    handleRef: I,
                                    context: { listAriaLabel: z },
                                    isMobileLayout: k,
                                    useWindowScroll: k,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        11036: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => n });
            var s = i(63585);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === s.K.Generative;
            }
        },
        18569: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => d, T: () => a });
            var s = i(61910),
                n = i(83252),
                r = i(94687),
                l = i(4499),
                o = i(84227),
                a = (function (e) {
                    return (e.ROOT = 'root'), (e.ALBUMS = 'albums'), (e.ARTISTS = 'artists'), e;
                })({});
            let d = (e, t) => {
                (0, s.useEffect)(() => {
                    switch (t) {
                        case 'root':
                            (0, o.I)(e, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, n.jxB)(e);
                            });
                            break;
                        case 'albums':
                            (0, r._)(e, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, n.jxB)(e);
                            });
                            break;
                        case 'artists':
                            (0, l.M)(e, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, n.jxB)(e);
                            });
                    }
                }, [null == e ? void 0 : e.id, null == e ? void 0 : e.type, null == e ? void 0 : e.name, t, e]);
            };
        },
        29261: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 14342)),
                Promise.resolve().then(i.bind(i, 62662)),
                Promise.resolve().then(i.bind(i, 42520)),
                Promise.resolve().then(i.bind(i, 30662)),
                Promise.resolve().then(i.bind(i, 31757)),
                Promise.resolve().then(i.bind(i, 51672)),
                Promise.resolve().then(i.bind(i, 63449)),
                Promise.resolve().then(i.bind(i, 65134)),
                Promise.resolve().then(i.bind(i, 96819)),
                Promise.resolve().then(i.bind(i, 38868)),
                Promise.resolve().then(i.bind(i, 77163)),
                Promise.resolve().then(i.bind(i, 96025)),
                Promise.resolve().then(i.bind(i, 51887)),
                Promise.resolve().then(i.bind(i, 25577)),
                Promise.resolve().then(i.bind(i, 65327)),
                Promise.resolve().then(i.bind(i, 3119)),
                Promise.resolve().then(i.bind(i, 74808)),
                Promise.resolve().then(i.bind(i, 92088)),
                Promise.resolve().then(i.bind(i, 83154)),
                Promise.resolve().then(i.bind(i, 14476)),
                Promise.resolve().then(i.bind(i, 88332)),
                Promise.resolve().then(i.bind(i, 16855)),
                Promise.resolve().then(i.bind(i, 28795)),
                Promise.resolve().then(i.bind(i, 69536)),
                Promise.resolve().then(i.bind(i, 45721)),
                Promise.resolve().then(i.bind(i, 80183)),
                Promise.resolve().then(i.bind(i, 2438)),
                Promise.resolve().then(i.bind(i, 46540)),
                Promise.resolve().then(i.bind(i, 40188)),
                Promise.resolve().then(i.bind(i, 2405)),
                Promise.resolve().then(i.bind(i, 6094)),
                Promise.resolve().then(i.bind(i, 73910)),
                Promise.resolve().then(i.bind(i, 33265)),
                Promise.resolve().then(i.bind(i, 77120)),
                Promise.resolve().then(i.bind(i, 8394)),
                Promise.resolve().then(i.bind(i, 3192)),
                Promise.resolve().then(i.bind(i, 7286)),
                Promise.resolve().then(i.bind(i, 60305)),
                Promise.resolve().then(i.bind(i, 47203)),
                Promise.resolve().then(i.bind(i, 34286)),
                Promise.resolve().then(i.bind(i, 224)),
                Promise.resolve().then(i.bind(i, 24449)),
                Promise.resolve().then(i.bind(i, 79893)),
                Promise.resolve().then(i.bind(i, 81789)),
                Promise.resolve().then(i.bind(i, 87466)),
                Promise.resolve().then(i.bind(i, 34028)),
                Promise.resolve().then(i.bind(i, 99564)),
                Promise.resolve().then(i.bind(i, 95348)),
                Promise.resolve().then(i.bind(i, 52347)),
                Promise.resolve().then(i.bind(i, 61015)),
                Promise.resolve().then(i.bind(i, 1771)),
                Promise.resolve().then(i.bind(i, 80043)),
                Promise.resolve().then(i.bind(i, 65729)),
                Promise.resolve().then(i.bind(i, 12235)),
                Promise.resolve().then(i.bind(i, 60793)),
                Promise.resolve().then(i.bind(i, 74565)),
                Promise.resolve().then(i.bind(i, 8941)),
                Promise.resolve().then(i.bind(i, 38433)),
                Promise.resolve().then(i.bind(i, 8732)),
                Promise.resolve().then(i.bind(i, 43369)),
                Promise.resolve().then(i.bind(i, 47564)),
                Promise.resolve().then(i.bind(i, 41017)),
                Promise.resolve().then(i.bind(i, 27252)),
                Promise.resolve().then(i.bind(i, 65286)),
                Promise.resolve().then(i.bind(i, 45198)),
                Promise.resolve().then(i.bind(i, 46814)),
                Promise.resolve().then(i.bind(i, 92508)),
                Promise.resolve().then(i.bind(i, 40126)),
                Promise.resolve().then(i.bind(i, 83726)),
                Promise.resolve().then(i.bind(i, 90410)),
                Promise.resolve().then(i.bind(i, 13246)),
                Promise.resolve().then(i.bind(i, 26040)),
                Promise.resolve().then(i.bind(i, 92446)),
                Promise.resolve().then(i.bind(i, 42593)),
                Promise.resolve().then(i.bind(i, 70570)),
                Promise.resolve().then(i.bind(i, 88416)),
                Promise.resolve().then(i.bind(i, 24174)),
                Promise.resolve().then(i.bind(i, 78458)),
                Promise.resolve().then(i.bind(i, 59457)),
                Promise.resolve().then(i.bind(i, 6690)),
                Promise.resolve().then(i.bind(i, 88370)),
                Promise.resolve().then(i.bind(i, 66904)),
                Promise.resolve().then(i.bind(i, 39937)),
                Promise.resolve().then(i.bind(i, 33019)),
                Promise.resolve().then(i.bind(i, 38808)),
                Promise.resolve().then(i.bind(i, 58094)),
                Promise.resolve().then(i.bind(i, 78009)),
                Promise.resolve().then(i.bind(i, 33427)),
                Promise.resolve().then(i.bind(i, 30878)),
                Promise.resolve().then(i.bind(i, 53115)),
                Promise.resolve().then(i.bind(i, 52398)),
                Promise.resolve().then(i.bind(i, 82327)),
                Promise.resolve().then(i.bind(i, 17012)),
                Promise.resolve().then(i.bind(i, 9275)),
                Promise.resolve().then(i.bind(i, 17658)),
                Promise.resolve().then(i.bind(i, 36578)),
                Promise.resolve().then(i.bind(i, 66989)),
                Promise.resolve().then(i.bind(i, 58863)),
                Promise.resolve().then(i.bind(i, 60899)),
                Promise.resolve().then(i.bind(i, 59437)),
                Promise.resolve().then(i.bind(i, 43367)),
                Promise.resolve().then(i.bind(i, 66446)),
                Promise.resolve().then(i.bind(i, 86840)),
                Promise.resolve().then(i.bind(i, 75181)),
                Promise.resolve().then(i.bind(i, 99538)),
                Promise.resolve().then(i.bind(i, 45252)),
                Promise.resolve().then(i.bind(i, 59226)),
                Promise.resolve().then(i.bind(i, 75961)),
                Promise.resolve().then(i.bind(i, 33964)),
                Promise.resolve().then(i.bind(i, 33967)),
                Promise.resolve().then(i.bind(i, 64410)),
                Promise.resolve().then(i.bind(i, 91350)),
                Promise.resolve().then(i.bind(i, 4500)),
                Promise.resolve().then(i.bind(i, 55846)),
                Promise.resolve().then(i.bind(i, 65689)),
                Promise.resolve().then(i.bind(i, 99386)),
                Promise.resolve().then(i.bind(i, 5222)),
                Promise.resolve().then(i.bind(i, 60440)),
                Promise.resolve().then(i.bind(i, 37271)),
                Promise.resolve().then(i.bind(i, 66688)),
                Promise.resolve().then(i.bind(i, 76472));
        },
        33265: (e, t, i) => {
            'use strict';
            i.d(t, { LabelNotFoundPage: () => r });
            var s = i(54486),
                n = i(42421);
            let r = () => (0, s.jsx)(n.M, {});
        },
        39206: (e, t, i) => {
            'use strict';
            i.d(t, { useVideoModal: () => l });
            var s = i(8817),
                n = i(83252),
                r = i(83333);
            let l = () => {
                let { fullscreenVideoPlayer: e } = (0, n.Pjs)(),
                    t = (0, n.pqZ)();
                return (0, s.c)(function (i) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    e.setIds(i), e.setClipIndex(s), t((0, r.J)(i, s)), e.modal.open();
                });
            };
        },
        39656: (e) => {
            e.exports = {
                root: 'LabelArtistsPage_root__smTJJ',
                scrollContainer: 'LabelArtistsPage_scrollContainer__alDjs',
                important: 'LabelArtistsPage_important__pOZpi',
                footer: 'LabelArtistsPage_footer__JU2P3',
                item: 'LabelArtistsPage_item__kol2m',
                content: 'LabelArtistsPage_content__4hjcX',
            };
        },
        40188: (e, t, i) => {
            'use strict';
            i.d(t, { useSort: () => o });
            var s = i(61910),
                n = i(11405),
                r = i(83252),
                l = i(90229);
            let o = (e) => {
                let { sortModel: t } = e,
                    i = (0, r.XJ9)();
                (0, s.useLayoutEffect)(() => {
                    let e = new URL(window.location.href).searchParams.get(r.K3F.SORT);
                    e && (0, l.W)(e) ? t.setSortBy(e) : t.setSortBy(n.g.YEAR);
                }, [t]),
                    (0, s.useEffect)(() => {
                        if (t.sortBy) {
                            let e = (0, r.bJ)(r.K3F.SORT, t.sortBy);
                            e && i(e);
                        }
                    }, [i, t.sortBy]);
            };
        },
        40502: (e, t, i) => {
            'use strict';
            i.d(t, { mi: () => m.SortDropdown, wY: () => d, WG: () => s.W, hl: () => r, y8: () => l.useSort });
            var s = i(90229),
                n = i(61288);
            let r = (e) => !!e && (e === n.x.ASC || e === n.x.DESC);
            var l = i(40188),
                o = i(93064),
                a = i(11405);
            let d = o.gK
                .model('Sort', { sortBy: o.gK.maybe(o.gK.enumeration(Object.values(a.g))), sortOrder: o.gK.maybe(o.gK.enumeration(Object.values(n.x))) })
                .actions((e) => ({
                    setSortBy(t) {
                        e.sortBy = t;
                    },
                    setSortOrder(t) {
                        e.sortOrder = t;
                    },
                }));
            var m = i(2405);
        },
        40846: (e) => {
            e.exports = {
                root: 'LabelPage_root__jquyP',
                content: 'LabelPage_content__9st_X',
                header: 'LabelPage_header__G2xY_',
                title: 'LabelPage_title__BNxeX',
                button: 'LabelPage_button__JXw3C',
                carouselBlock: 'LabelPage_carouselBlock__zPJmW',
                carouselBlockHeader: 'LabelPage_carouselBlockHeader__dvYqJ',
                carouselContainer: 'LabelPage_carouselContainer__bRVMp',
                footer: 'LabelPage_footer__lvKmF',
            };
        },
        42061: (e, t, i) => {
            'use strict';
            i.d(t, { useWithClips: () => n });
            var s = i(83252);
            let n = () => {
                let {
                    settings: { isMobile: e },
                } = (0, s.Pjs)();
                return !e;
            };
        },
        42421: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => s.NotFound });
            var s = i(65034);
        },
        42520: (e, t, i) => {
            'use strict';
            let s;
            i.d(t, { useMetrika: () => l });
            var n = i(61910),
                r = i(80506);
            let l = () => {
                let e = (s || (s = (0, r.a)()), s),
                    t = (0, n.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, n.useMemo)(() => ({ ...e, isLoaded: t }), [t]);
            };
        },
        46215: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        46353: (e) => {
            e.exports = {
                root: 'SortDropdown_root__d1JmQ',
                button: 'SortDropdown_button__SjTI7',
                header: 'SortDropdown_header__kj8yV',
                container: 'SortDropdown_container__dyVF_',
            };
        },
        52456: (e) => {
            e.exports = {
                root: 'LabelAlbumsPage_root__xyWi4',
                scrollContainer: 'LabelAlbumsPage_scrollContainer__zRUlM',
                important: 'LabelAlbumsPage_important__s18oL',
                footer: 'LabelAlbumsPage_footer__dcXFk',
                item: 'LabelAlbumsPage_item__Qjz9F',
                content: 'LabelAlbumsPage_content__jOWKZ',
            };
        },
        54830: (e, t, i) => {
            'use strict';
            i.d(t, {
                z8: () => p,
                l6: () => d,
                z4: () => m,
                JL: () => c.J,
                KX: () => u.useOnLikeClick,
                Hx: () => s.useSendEventOnClipClosed,
                _7: () => n.useSendEventOnClipNavigated,
                QV: () => r.useSendEventOnClipOpened,
                Mn: () => l.useSendEventOnClipShowedOrHidden,
                Cc: () => b.useVideoModal,
                df: () => h.useWithClips,
            });
            var s = i(64782),
                n = i(59839),
                r = i(60339),
                l = i(58435),
                o = i(93064),
                a = i(83252);
            let d = (e) => {
                    let { available: t, disclaimers: i } = (0, a.fyr)(e);
                    return (0, o.wg)({
                        clipId: e.clipId,
                        title: e.title,
                        thumbnail: e.thumbnail,
                        duration: e.duration,
                        previewUrl: e.previewUrl,
                        isAvailable: t,
                        version: e.version,
                        disclaimers: i,
                    });
                },
                m = (e, t) => {
                    let i = Number(t);
                    return !Number.isNaN(i) && i > 0 && i < e.length ? i : 0;
                };
            var c = i(83333),
                u = i(60272),
                b = i(39206),
                h = i(42061),
                v = i(26433);
            let p = o.gK
                .compose(
                    o.gK.model('BaseClip', {
                        clipId: o.gK.number,
                        title: o.gK.maybe(o.gK.string),
                        thumbnail: o.gK.maybe(o.gK.string),
                        previewUrl: o.gK.maybe(o.gK.string),
                        duration: o.gK.maybe(o.gK.number),
                        isAvailable: o.gK.boolean,
                        version: o.gK.maybe(o.gK.string),
                    }),
                    v.Ec,
                )
                .views((e) => ({
                    get url() {
                        let { href: t } = (0, a.uvd)(a.Zyd.video.href, { query: { ids: String(e.clipId) } });
                        return t;
                    },
                    get isLiked() {
                        if (!(0, o._n)(e)) return !1;
                        let { library: t } = (0, o.Zn)(e);
                        return t.isClipLiked(e.clipId);
                    },
                    get isLegalRejected() {
                        return e.getIsLegalRejected(e.isAvailable);
                    },
                    get isUnsafeLegal() {
                        return e.getIsUnsafeLegal(e.isAvailable);
                    },
                    getDisclaimerEntityRef: (t) => ({ entityType: null != t ? t : a.nPY.CLIP, entityId: e.clipId }),
                }))
                .actions((e) => ({
                    getKey: (t) => ''.concat(t, '_').concat(e.clipId),
                    toggleLike() {
                        if (!(0, o._n)(e)) return;
                        let { library: t, user: i } = (0, o.Zn)(e);
                        if (i.isAuthorized) return t.toggleClipLike({ entityId: e.clipId, userId: i.account.data.uid });
                    },
                }));
        },
        58435: (e, t, i) => {
            'use strict';
            i.d(t, { useSendEventOnClipShowedOrHidden: () => o });
            var s = i(43350),
                n = i(62395),
                r = i(8817),
                l = i(83252);
            let o = (e) => {
                let t = (0, n.st)(),
                    { hash: i } = (0, n.gf)(),
                    { pageId: o } = (0, l.$au)(),
                    { tabId: a, tabPos: d, isTabSelectedByDefault: m } = (0, l.Rro)(),
                    { blockType: c, blockId: u, blockPosX: b, blockPosY: h, mainObjectType: v, mainObjectId: p } = (0, l.N8n)(),
                    { objectsCount: g, objectType: P, objectId: _, objectPosX: x, objectPosY: y } = (0, l.Jfv)(),
                    N = (0, l.UlF)(),
                    { skeleton: f } = (0, l.bCF)();
                return (0, r.c)((n) => {
                    if (!t || !o || !l.xKB.includes(o)) return;
                    let r = {
                        hash: i,
                        pageId: o,
                        entityType: c,
                        entityId: u,
                        entityPosX: b,
                        entityPosY: h,
                        objectsCount: g,
                        viewUuid: e,
                        objectType: P,
                        objectId: _,
                        objectPosX: x,
                        objectPosY: y,
                    };
                    l.qG9.includes(o) && ((r.tabId = a), (r.tabPos = d), (r.isTabSelectedByDefault = m)),
                        f && (r.skeletonId = f),
                        v && (r.mainObjectType = v),
                        p && (r.mainObjectId = p);
                    let j = (0, s.Fx)({ params: r, logger: N, context: 'useSendEventOnClipShowedOrHidden' });
                    if (j) {
                        if (n) return void (0, s.Pf)(t.evgenInstance, j);
                        (0, s.nv)(t.evgenInstance, j);
                    }
                });
            };
        },
        59839: (e, t, i) => {
            'use strict';
            i.d(t, { useSendEventOnClipNavigated: () => o });
            var s = i(43350),
                n = i(62395),
                r = i(8817),
                l = i(83252);
            let o = (e) => {
                let t = (0, n.st)(),
                    { hash: i } = (0, n.gf)(),
                    { pageId: o } = (0, l.$au)(),
                    { tabId: a, tabPos: d, isTabSelectedByDefault: m } = (0, l.Rro)(),
                    { skeleton: c } = (0, l.bCF)(),
                    { blockType: u, blockId: b, blockPosX: h, blockPosY: v, mainObjectType: p, mainObjectId: g } = (0, l.N8n)(),
                    { objectsCount: P, objectType: _, objectId: x, objectPosX: y, objectPosY: N } = (0, l.Jfv)(),
                    f = (0, l.UlF)();
                return (0, r.c)(() => {
                    if (!t || !o || !l.xKB.includes(o)) return;
                    let n = {
                        hash: i,
                        pageId: o,
                        entityType: u,
                        entityId: b,
                        entityPosX: h,
                        entityPosY: v,
                        objectId: x,
                        objectType: _,
                        objectPosX: y,
                        objectPosY: N,
                        objectsCount: P,
                        from: l.Wft[o],
                        to: s.QT.VideoScreen,
                    };
                    l.qG9.includes(o) && ((n.tabId = a), (n.tabPos = d), (n.isTabSelectedByDefault = m)),
                        c && (n.skeletonId = c),
                        p && (n.mainObjectType = p),
                        g && (n.mainObjectId = g);
                    let r = (0, s.Fx)({ params: n, logger: f, context: 'useSendEventOnClipNavigated' });
                    r && e && (0, s.QS)(t.evgenInstance, r);
                });
            };
        },
        60272: (e, t, i) => {
            'use strict';
            i.d(t, { useOnLikeClick: () => c });
            var s = i(54486),
                n = i(63930),
                r = i(61910),
                l = i(43426),
                o = i(77534),
                a = i(83252),
                d = i(80585);
            let m = (e) => {
                    let { clip: t, closeToast: i } = e;
                    return (0, s.jsx)(d.OM, {
                        entityVariant: d.cp.CLIP,
                        entityTitle: t.title,
                        collectionUrl: a.Zyd.collectionClips.href,
                        isLiked: t.isLiked,
                        closeToast: i,
                        coverUri: t.thumbnail,
                    });
                },
                c = (e) => {
                    let { user: t, fullscreenVideoPlayer: i, collection: c } = (0, a.Pjs)(),
                        { notify: u } = (0, a.lkh)(),
                        [b, h] = (0, r.useState)(!1),
                        { formatMessage: v } = (0, l.A)();
                    return (0, r.useCallback)(async () => {
                        if (!e) return;
                        let r = i.modal.isOpened ? a.uQT.FULLSCREEN_INFO : a.uQT.INFO,
                            l = i.modal.isOpened ? a.uQT.FULLSCREEN_ERROR : a.uQT.ERROR;
                        if (!t.isAuthorized) return void u((0, s.jsx)(d.hT, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l });
                        if (b) return;
                        let p = { ...(0, n.HO)(e), isLiked: !e.isLiked };
                        h(!0);
                        let g = await e.toggleLike();
                        h(!1),
                            c.clips.reset(),
                            g === o.f.OK
                                ? u((0, s.jsx)(m, { clip: p }), { containerId: r })
                                : u((0, s.jsx)(d.hT, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: l });
                    }, [e, t.isAuthorized, b, v, u, i.modal.isOpened, c.clips]);
                };
        },
        60339: (e, t, i) => {
            'use strict';
            i.d(t, { useSendEventOnClipOpened: () => o });
            var s = i(43350),
                n = i(62395),
                r = i(8817),
                l = i(83252);
            let o = () => {
                let e = (0, n.st)(),
                    { hash: t } = (0, n.gf)(),
                    i = (0, l.UlF)();
                return (0, r.c)((n) => {
                    if (!e) return;
                    let r = { hash: t, pageId: s.QT.VideoScreen, mainObjectType: s.ky.Video, mainObjectId: n },
                        l = (0, s.Fx)({ params: r, logger: i, context: 'useSendEventOnClipOpened' });
                    l && (0, s.w5)(e.evgenInstance, l);
                });
            };
        },
        61288: (e, t, i) => {
            'use strict';
            var s;
            i.d(t, { x: () => s }),
                (function (e) {
                    (e.ASC = 'asc'), (e.DESC = 'desc');
                })(s || (s = {}));
        },
        63708: (e) => {
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
        64782: (e, t, i) => {
            'use strict';
            i.d(t, { useSendEventOnClipClosed: () => o });
            var s = i(43350),
                n = i(62395),
                r = i(8817),
                l = i(83252);
            let o = () => {
                let e = (0, n.st)(),
                    { hash: t } = (0, n.gf)(),
                    i = (0, l.UlF)();
                return (0, r.c)((n) => {
                    if (!e) return;
                    let r = { hash: t, pageId: s.QT.VideoScreen, mainObjectType: s.ky.Video, mainObjectId: n },
                        l = (0, s.Fx)({ params: r, logger: i, context: 'useSendEventOnClipClosed' });
                    l && (0, s.XB)(e.evgenInstance, l);
                });
            };
        },
        65034: (e, t, i) => {
            'use strict';
            i.d(t, { NotFound: () => v });
            var s = i(54486),
                n = i(50420),
                r = i(28303),
                l = i(47713),
                o = i(77881),
                a = i(5956),
                d = i(97800),
                m = i(83252),
                c = i(80585),
                u = i(61910),
                b = i(46215),
                h = i.n(b);
            let v = (0, r.PA)((e) => {
                let { className: t, title: i, description: r, iconVariant: b = 'musicLogo', iconClassName: v, iconSize: p } = e,
                    { contentRef: g } = (0, m.gKY)(),
                    P = (0, m.ZpR)(m.Zyd.main.href);
                (0, m.LZB)();
                let { handleNavigateToMain: _ } = (0, m.D5F)(P);
                return (
                    (0, m.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, m.Pjs)();
                        (0, u.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, s.jsxs)('div', {
                        className: (0, n.$)(h().root, { [h().root_desktop]: !g }, t),
                        children: [
                            (0, s.jsx)(c.Lh, { withBackwardFallback: '/', className: h().navigation, withForwardControl: !1 }),
                            (0, s.jsxs)('div', {
                                className: h().content,
                                children: [
                                    (0, s.jsx)(a.Icon, { className: (0, n.$)(h().icon, v), variant: b, size: p }),
                                    (0, s.jsx)(d.Heading, {
                                        className: (0, n.$)(h().title, h().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: i || (0, s.jsx)(l.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, s.jsx)(d.Caption, {
                                        className: (0, n.$)(h().text, h().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: r || (0, s.jsx)(l.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, s.jsx)(o.$, {
                                        onClick: _,
                                        className: h().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, s.jsx)(l.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        73910: (e, t, i) => {
            'use strict';
            i.d(t, { LabelArtistsPage: () => x });
            var s = i(54486),
                n = i(50420),
                r = i(28303),
                l = i(97396),
                o = i(61910),
                a = i(43426),
                d = i(31500),
                m = i(8817),
                c = i(97800),
                u = i(82644),
                b = i(55616),
                h = i(33276),
                v = i(83252),
                p = i(80585),
                g = i(18569),
                P = i(39656),
                _ = i.n(P);
            let x = (0, r.PA)((e) => {
                let { labelId: t, preloadedLabel: i, preloadedArtists: r } = e,
                    {
                        label: { id: P, name: x, type: y, artistsSubpage: N, reset: f, isNeededToLoad: j, getData: S },
                        settings: { isMobile: L },
                        experiments: A,
                    } = (0, v.Pjs)(),
                    { formatMessage: C } = (0, a.A)(),
                    { contentScrollRef: k, setContentScrollRef: T } = (0, v.gKY)(),
                    w = (0, v.W6M)(),
                    O = C({ id: 'page.label-artists-header' }, { labelName: x }),
                    I = (0, m.c)((e) => {
                        N.getData({ labelId: Number(t), page: e, pageSize: 20 });
                    });
                (0, v.XcE)(N.pagesLoader, I),
                    (0, o.useEffect)(
                        () => () => {
                            f(), N.reset();
                        },
                        [f, N],
                    ),
                    (N.isNotFound || !A.checkExperiment(v.zal.WebNextLabelPage, 'on')) && (0, l.notFound)(),
                    (0, g.Q)({ id: Number(P), name: null != x ? x : '', type: null != y ? y : '' }, g.T.ARTISTS),
                    (0, v.Jzs)(N.isResolved);
                let E = (0, o.useMemo)(() => ({ Footer: () => (0, s.jsx)(p.A, { children: (0, s.jsx)(p.wi, { className: _().footer }) }) }), []),
                    R = C({ id: 'entity-names.label-artists-list' }),
                    B = [];
                if (
                    (N.isNeededToLoad && B.push(N.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedArtists: r })),
                    j && B.push(S({ labelId: Number(t), preloadedLabel: i, withLabelEntities: !1 })),
                    B.length && (0, o.use)(Promise.allSettled(B)),
                    N.isRejected && !N.isNotFound)
                )
                    return (0, s.jsx)(u.w, {});
                let F = N.isShimmerVisible ? 20 : N.items.length;
                return (0, s.jsx)(v.nVz, {
                    pageId: v._Q$.LABEL_ARTISTS,
                    children: (0, s.jsx)(h.hO, {
                        scrollElement: k,
                        outerTitle: O,
                        children: (0, s.jsxs)('div', {
                            className: _().root,
                            ...(0, d.Am)(d.Xk.label.LABEL_ARTISTS_PAGE),
                            children: [
                                (0, s.jsx)(p.Y9, {
                                    variant: p.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: w.canBack,
                                    className: _().header,
                                    children: (0, s.jsx)(c.Heading, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: O }),
                                }),
                                (0, s.jsx)(p.$$, {
                                    className: (0, n.$)(_().scrollContainer, _().important),
                                    listClassName: _().content,
                                    itemClassName: _().item,
                                    customComponents: E,
                                    itemContentCallback: (e) => {
                                        let t = N.items[e],
                                            i = C({ id: 'loading-messages.entity-is-loading' }, { entityName: C({ id: 'entity-names.artist' }) });
                                        return t
                                            ? (0, s.jsx)(b.ao, { artist: t, contentLinesCount: 4 }, t.id)
                                            : (0, s.jsx)(p.Vt, { 'aria-label': i, round: !0, centered: !0, linesCount: 4 });
                                    },
                                    totalCount: F,
                                    onGetDataByPage: I,
                                    pageSize: 20,
                                    totalRequests: N.requestsCount,
                                    handleRef: T,
                                    context: { listAriaLabel: R },
                                    isMobileLayout: L,
                                    useWindowScroll: L,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        75312: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => p });
            var s = i(54486),
                n = i(50420),
                r = i(28303),
                l = i(61910),
                o = i(43426),
                a = i(47713),
                d = i(77881),
                m = i(5956),
                c = i(97800),
                u = i(83252),
                b = i(80585),
                h = i(63708),
                v = i.n(h);
            let p = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: r } = (0, o.A)(),
                    h = r({ id: 'error-messages.something-went-wrong' });
                (0, u.CgZ)(h);
                let { sendRefreshEvent: p } = (0, u.cYT)(),
                    g = (0, l.useCallback)(() => {
                        p(), (window.location.href = u.Zyd.main.href);
                    }, [p]),
                    { contentRef: P } = (0, u.gKY)();
                return (0, s.jsxs)('div', {
                    className: (0, n.$)(v().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(b.Lh, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(v().navigation, { [v().navigation_desktop]: !P }),
                                withForwardControl: !1,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, n.$)(v().content, { [v().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(m.Icon, { className: v().icon, variant: 'attention', size: 'xxl' }),
                                (0, s.jsx)(c.Heading, { className: (0, n.$)(v().title, v().important), variant: 'h3', size: 'xs', children: h }),
                                (0, s.jsxs)(c.Caption, {
                                    className: (0, n.$)(v().text, v().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, s.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, s.jsx)(d.$, {
                                    onClick: g,
                                    className: v().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, s.jsxs)(c.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, s.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        77120: (e, t, i) => {
            'use strict';
            i.d(t, { LabelPage: () => L });
            var s = i(54486),
                n = i(50420),
                r = i(28303),
                l = i(97396),
                o = i(61910),
                a = i(43426),
                d = i(47713),
                m = i(31500),
                c = i(8817),
                u = i(77881),
                b = i(5956),
                h = i(56231),
                v = i(97800),
                p = i(17656),
                g = i(82644),
                P = i(80156),
                _ = i(55616),
                x = i(33276),
                y = i(83252),
                N = i(80585),
                f = i(18569),
                j = i(40846),
                S = i.n(j);
            let L = (0, r.PA)((e) => {
                var t, i, r, j;
                let { labelId: L, preloadedLabel: A } = e,
                    {
                        label: C,
                        settings: { isMobile: k },
                        experiments: T,
                    } = (0, y.Pjs)(),
                    { formatMessage: w } = (0, a.A)(),
                    { contentScrollRef: O, setContentScrollRef: I } = (0, y.gKY)(),
                    { notify: E } = (0, y.lkh)(),
                    { shareLink: R } = (0, y.bNS)('/label/:labelId', { params: { labelId: null != (i = C.id) ? i : '' } }),
                    B = (0, o.useRef)(null),
                    F = (0, o.useRef)(0);
                (0, f.Q)({ id: Number(C.id), name: null != (r = C.name) ? r : '', type: null != (j = C.type) ? j : '' }, f.T.ROOT);
                let W = (0, c.c)(async () => {
                        await window.navigator.clipboard.writeText(R),
                            E((0, s.jsx)(N.Do, { entityVariant: y.Yxq.LABEL, entityTitle: C.name || '' }), { containerId: y.uQT.INFO });
                    }),
                    z = (0, o.useMemo)(
                        () =>
                            k
                                ? (0, s.jsx)(u.$, {
                                      className: S().button,
                                      onClick: W,
                                      icon: (0, s.jsx)(b.Icon, { variant: 'share', size: 'xxs' }),
                                      size: 'l',
                                      radius: 'xxxl',
                                      ...(0, m.Am)(m.Xk.label.SHARE_COPY_LINK_BUTTON),
                                  })
                                : (0, s.jsx)(u.$, {
                                      className: S().button,
                                      onClick: W,
                                      icon: (0, s.jsx)(b.Icon, { variant: 'share', size: 'xxs' }),
                                      size: 'l',
                                      radius: 'xxxl',
                                      ...(0, m.Am)(m.Xk.label.SHARE_COPY_LINK_BUTTON),
                                      children: (0, s.jsx)(d.A, { id: 'interface-actions.share' }),
                                  }),
                        [k, W],
                    ),
                    K = C.isPublisher ? w({ id: 'entity-names.publisher' }) : w({ id: 'entity-names.label' }),
                    U = C.isPublisher ? w({ id: 'entity-names.non-music-releases' }) : w({ id: 'entity-names.releases' });
                return ((0, o.useEffect)(
                    () => () => {
                        C.reset();
                    },
                    [C],
                ),
                (C.isNotFound || !T.checkExperiment(y.zal.WebNextLabelPage, 'on')) && (0, l.notFound)(),
                (0, o.useEffect)(
                    () => () => {
                        F.current = 0;
                    },
                    [C],
                ),
                (0, o.useEffect)(() => {
                    C.isRejected &&
                        F &&
                        !(F.current > 0) &&
                        (E((0, s.jsx)(N.hT, { error: w({ id: 'error-messages.error-load-part-page' }) }), { containerId: y.uQT.ERROR }), F.current++);
                }, [C.isRejected, E, w]),
                (0, y.Jzs)(C.isResolved),
                C.isNeededToLoad && (0, o.use)(C.getData({ labelId: Number(L), preloadedLabel: A })),
                C.isRejected && !C.isNotFound)
                    ? (0, s.jsx)(g.w, {})
                    : (0, s.jsx)(y.nVz, {
                          pageId: y._Q$.LABEL,
                          children: (0, s.jsxs)(x.hO, {
                              scrollElement: O,
                              children: [
                                  (0, s.jsx)(N.Y9, { innerHeaderRef: B }),
                                  (0, s.jsxs)(h.N, {
                                      className: S().root,
                                      containerClassName: S().content,
                                      ref: I,
                                      ...(0, m.Am)(m.Xk.label.LABEL_PAGE),
                                      children: [
                                          (0, s.jsxs)('div', {
                                              className: S().header,
                                              children: [
                                                  (0, s.jsx)(v.Caption, { variant: 'div', type: 'text', size: 'm', weight: 'medium', children: K }),
                                                  (0, s.jsx)(p.RR, { className: S().title, title: C.name || '', headingVariant: 'h1' }),
                                                  z,
                                              ],
                                          }),
                                          C.hasAlbums &&
                                              C.albums &&
                                              (0, s.jsx)(P.pZ, {
                                                  isShimmerVisible: C.isLoading,
                                                  isShimmerActive: !0,
                                                  className: S().carouselContainer,
                                                  headerClassName: (0, n.$)(S().carouselBlock, S().carouselBlockHeader),
                                                  containerClassName: S().carouselBlock,
                                                  title: U,
                                                  viewAllActionLink: C.albumsUrl,
                                                  albums: C.albums,
                                                  headingVariant: 'h2',
                                                  ...(0, m.Am)(m.Xk.label.RELEASES_CAROUSEL),
                                              }),
                                          C.hasArtists &&
                                              (0, s.jsx)(N.OY, {
                                                  isShimmerVisible: C.isLoading,
                                                  isShimmerActive: !0,
                                                  headerClassName: (0, n.$)(S().carouselBlockHeader, S().carouselBlock),
                                                  containerClassName: S().carouselBlock,
                                                  viewAllActionLink: C.artistsUrl,
                                                  title: w({ id: 'entity-names.artists' }),
                                                  headingVariant: 'h2',
                                                  ...(0, m.Am)(m.Xk.label.ARTISTS_CAROUSEL),
                                                  children: null == (t = C.artists) ? void 0 : t.map((e) => (0, s.jsx)(_.ao, { artist: e, contentLinesCount: 3 }, e.id)),
                                              }),
                                          (0, s.jsx)(N.A, { children: (0, s.jsx)(N.wi, { className: S().footer }) }),
                                      ],
                                  }),
                              ],
                          }),
                      });
            });
        },
        80506: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => n });
            var s = i(87965);
            let n = () => {
                let e = null,
                    t = new s.cJ(!1),
                    i = [];
                return {
                    isLoaded: t,
                    init: (s) => {
                        var n, r;
                        if (void 0 !== (null == (n = window.Ya) ? void 0 : n.Metrika2) && !t.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...s })),
                                    (t.value = !0),
                                    (r = e),
                                    i.forEach((e) => {
                                        e(r);
                                    }),
                                    (i.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && s.logger.error(e);
                            }
                    },
                    count: function (t) {
                        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [s]: t })
                            : i.push((e) => {
                                  e.params({ [s]: t });
                              });
                    },
                    hit: (t) => {
                        e
                            ? e.hit(t)
                            : i.push((e) => {
                                  e.hit(t);
                              });
                    },
                    reachGoal: (t, s) => {
                        if (!e) return void i.push((e) => e.reachGoal(t, s));
                        e.reachGoal(t, s);
                    },
                };
            };
        },
        82644: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s.SomethingWentWrong });
            var s = i(75312);
        },
        83333: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => n });
            var s = i(83252);
            let n = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: i } = (0, s.uvd)(s.Zyd.video.href, { query: { [s.K3F.IDS]: e.join(','), [s.K3F.ACTIVE_INDEX]: String(t) } });
                return i;
            };
        },
        84227: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => n });
            var s = i(83252);
            async function n(e, t) {
                var i, n, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, s.WGy)(t.locale),
                    o = l({ id: 'metadata.label-title' }, { labelTitle: e.name, labelType: e.type }),
                    a = l({ id: 'metadata.label-description' }, { labelTitle: e.name, labelType: e.type });
                return {
                    title: o,
                    description: a,
                    openGraph: (0, s.i$E)({
                        ogTitle: o,
                        ogDescription: a,
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        siteName: l({ id: 'metadata.yandex-music' }),
                        ogType: 'music.playlist',
                    }),
                    twitter: (0, s.HRN)({ cardType: s.WfF.APP, title: o, url: t.url, appName: l({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, s.X5i)({
                        additional: { ...t, url: null != (n = t.url) ? n : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, s.SEs)('/label/:labelId', t.tld, { params: { labelId: e.id } }),
                };
            }
        },
        90229: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => n });
            var s = i(11405);
            let n = (e) => !!e && (e === s.g.RATING || e === s.g.YEAR);
        },
        94687: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => n });
            var s = i(83252);
            async function n(e, t) {
                var i, n, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, s.WGy)(t.locale),
                    o = l({ id: 'metadata.label-albums-title' }, { labelName: e.name, labelType: e.type }),
                    a = l({ id: 'metadata.label-albums-description' }, { labelName: e.name, labelType: e.type });
                return {
                    title: o,
                    description: a,
                    openGraph: (0, s.i$E)({
                        ogTitle: o,
                        ogDescription: a,
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        siteName: l({ id: 'metadata.yandex-music' }),
                        ogType: 'music.playlist',
                    }),
                    twitter: (0, s.HRN)({ cardType: s.WfF.APP, title: o, url: t.url, appName: l({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, s.X5i)({
                        additional: { ...t, url: null != (n = t.url) ? n : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, s.SEs)('/label/:labelId/albums', t.tld, { params: { labelId: e.id } }),
                };
            }
        },
    },
]);
