(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8923],
    {
        15136: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        24188: (e, n, r) => {
            'use strict';
            r.d(n, { Q$: () => f, Ux: () => _, wj: () => S, LW: () => v, rA: () => h });
            var o = r(44282),
                i = r(27510),
                s = r(83252),
                t = r(4885),
                l = r(61910),
                d = r(8817);
            let m = { width: 400, height: 400 },
                h = (e) => {
                    let { count: n, getEstimateSize: r, gap: o, containerRef: i, overscan: h = 2 } = e,
                        {
                            settings: { isMobile: v },
                        } = (0, s.Pjs)(),
                        { contentScrollRef: b } = (0, s.gKY)(),
                        P = (0, l.useRef)(new Map()),
                        a = (0, l.useRef)(void 0),
                        c = {
                            count: n,
                            gap: o,
                            estimateSize: (e) => {
                                let n = P.current.get(String(e));
                                return null != n ? n : r(e);
                            },
                            overscan: h,
                            initialRect: m,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, n, r) => {
                                if (!n) return 0;
                                let o = n.getBoundingClientRect().top;
                                return e && 1 ? o + window.scrollY : !e && r ? o + r.scrollTop : 0;
                            })(v, i, b),
                        },
                        u = (0, t.XW)(c),
                        g = (0, t.Te)({ ...c, getScrollElement: () => b, initialOffset: null == b ? void 0 : b.scrollTop }),
                        _ = v ? u : g,
                        x = (0, d.c)(() => {
                            _.measure();
                        });
                    return (
                        (0, l.useEffect)(() => {
                            a.current ||
                                (a.current = new ResizeObserver((e) => {
                                    let n = !1;
                                    e.forEach((e) => {
                                        let r = e.target.getAttribute('data-index');
                                        if (e.target && r) {
                                            let o = e.contentRect.height;
                                            o && o !== P.current.get(r) && (P.current.set(r, e.contentRect.height), (n = !0));
                                        }
                                    }),
                                        n && x();
                                }));
                        }, [x]),
                        { virtualizer: _, resizeObserver: a.current }
                    );
                },
                v = (e) => {
                    let {
                            count: n,
                            getEstimateRowSize: r,
                            rowGap: t,
                            columnGap: l,
                            minColumnWidth: d,
                            maxColumnWidth: m,
                            minColumnCount: v,
                            maxColumnCount: b,
                            containerRef: P,
                        } = e,
                        { rowCount: a, columnCount: c } = (0, s.E11)({
                            totalCount: n,
                            columnGap: null != l ? l : 0,
                            minColumnCount: v,
                            maxColumnWidth: m,
                            minColumnWidth: d,
                            maxColumnCount: b,
                            containerRef: P,
                        }),
                        { virtualizer: u, resizeObserver: g } = h({ count: a, getEstimateSize: r, gap: t, containerRef: P }),
                        _ = (0, o.A)(
                            Array.from({ length: n }, (e, n) => n),
                            c,
                        ),
                        x = (0, i.L)(() => {
                            var e, n;
                            if (!u.range) return null;
                            let r = null == (e = _[u.range.startIndex]) ? void 0 : e.at(0),
                                o = null == (n = _[u.range.endIndex]) ? void 0 : n.at(-1);
                            return void 0 !== r && void 0 !== o ? { startIndex: r, endIndex: o } : null;
                        });
                    return { virtualizer: u, rowResizeObserver: g, indices: _, columnCount: c, visibleRange: x };
                };
            var b = r(54486),
                P = r(28303),
                a = r(67648),
                c = r(50420),
                u = r(15136),
                g = r.n(u);
            let _ = (0, P.PA)((e) => {
                let { indices: n, virtualItem: r, renderItemByIndex: o, columnClassName: i, className: s, resizeObserver: t, scrollMargin: d } = e,
                    m = (0, l.useRef)(null),
                    h = n[r.index],
                    v = { '--virtual-grid-row-vertical-offset': ''.concat(r.start - d, 'px') };
                return (
                    (0, l.useEffect)(() => {
                        let e = m.current;
                        if (e)
                            return (
                                null == t || t.observe(e),
                                () => {
                                    null == t || t.unobserve(e);
                                }
                            );
                    }, [t]),
                    (0, b.jsx)('div', {
                        'data-index': r.index,
                        ref: m,
                        style: v,
                        className: (0, c.$)(g().root, s),
                        children: null == h ? void 0 : h.map((e) => (0, b.jsx)('div', { className: i, children: o(e) }, ''.concat(r.key, '_').concat(e))),
                    })
                );
            });
            var x = r(97712),
                p = r.n(x);
            let f = (0, P.PA)((e) => {
                let {
                        count: n,
                        rowGap: r,
                        columnGap: o,
                        getEstimateRowSize: i,
                        minColumnCount: s = 2,
                        minColumnWidth: t,
                        maxColumnWidth: d,
                        maxColumnCount: m,
                        renderItemByIndex: h,
                        onChangeRange: P,
                    } = e,
                    [c, u] = (0, a.d)(),
                    {
                        virtualizer: g,
                        rowResizeObserver: x,
                        columnCount: f,
                        indices: N,
                    } = v({
                        count: n,
                        rowGap: r,
                        columnGap: o,
                        getEstimateRowSize: i,
                        minColumnCount: s,
                        minColumnWidth: t,
                        maxColumnWidth: d,
                        maxColumnCount: m,
                        containerRef: c,
                    });
                (0, l.useEffect)(() => {
                    !g.isScrolling && g.range && (null == P || P(g.range, f));
                }, [P, g.isScrolling, g.range, f]);
                let w = { '--virtual-grid-height': ''.concat(g.getTotalSize(), 'px'), '--virtual-grid-column-count': f };
                return (0, b.jsx)('div', {
                    ref: u,
                    style: w,
                    className: p().root,
                    children: g
                        .getVirtualItems()
                        .map((e) =>
                            (0, b.jsx)(
                                _,
                                {
                                    className: p().row,
                                    columnClassName: p().column,
                                    virtualItem: e,
                                    resizeObserver: x,
                                    indices: N,
                                    renderItemByIndex: h,
                                    scrollMargin: g.options.scrollMargin,
                                },
                                e.key,
                            ),
                        ),
                });
            });
            var N = r(85272),
                w = r.n(N);
            let j = (e) => {
                let { item: n, scrollMargin: r, resizeObserver: o, renderItemByIndex: i } = e,
                    [s, t] = (0, a.d)();
                (0, l.useEffect)(
                    () => (
                        s && o && o.observe(s),
                        () => {
                            s && o && o.unobserve(s);
                        }
                    ),
                    [s, o],
                );
                let d = { transform: 'translate3d(0, '.concat(n.start - r, 'px, 0)') };
                return (0, b.jsx)('div', { 'data-index': n.index, className: w().root, ref: t, style: d, children: i(n.index) }, n.key);
            };
            var k = r(30048),
                W = r.n(k);
            let S = (e) => {
                let { count: n, getEstimateRowSize: r, renderItemByIndex: o, onChangeRange: i } = e,
                    [s, t] = (0, a.d)(),
                    { virtualizer: d, resizeObserver: m } = h({ count: n, getEstimateSize: r, containerRef: s, overscan: 3 });
                (0, l.useEffect)(() => {
                    !d.isScrolling && d.range && i && i(d.range);
                }, [i, d.isScrolling, d.range]);
                let v = d.getTotalSize(),
                    P = d.getVirtualItems(),
                    c = d.options.scrollMargin;
                return (0, b.jsx)('div', {
                    className: W().root,
                    style: { height: ''.concat(v, 'px') },
                    ref: t,
                    children: P.map((e) => (0, b.jsx)(j, { item: e, scrollMargin: c, resizeObserver: m, renderItemByIndex: o }, e.key)),
                });
            };
        },
        30048: (e) => {
            e.exports = { root: 'VirtualList_root__kEvf_' };
        },
        42421: (e, n, r) => {
            'use strict';
            r.d(n, { M: () => o.NotFound });
            var o = r(65034);
        },
        42520: (e, n, r) => {
            'use strict';
            let o;
            r.d(n, { useMetrika: () => t });
            var i = r(61910),
                s = r(80506);
            let t = () => {
                let e = (o || (o = (0, s.a)()), o),
                    n = (0, i.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, i.useMemo)(() => ({ ...e, isLoaded: n }), [n]);
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
        53405: (e, n, r) => {
            Promise.resolve().then(r.bind(r, 58360)),
                Promise.resolve().then(r.bind(r, 14342)),
                Promise.resolve().then(r.bind(r, 62662)),
                Promise.resolve().then(r.bind(r, 6971)),
                Promise.resolve().then(r.bind(r, 22674)),
                Promise.resolve().then(r.bind(r, 51321)),
                Promise.resolve().then(r.bind(r, 97800)),
                Promise.resolve().then(r.bind(r, 42520)),
                Promise.resolve().then(r.bind(r, 30662)),
                Promise.resolve().then(r.bind(r, 31757)),
                Promise.resolve().then(r.bind(r, 51672)),
                Promise.resolve().then(r.bind(r, 63449)),
                Promise.resolve().then(r.bind(r, 65134)),
                Promise.resolve().then(r.bind(r, 96819)),
                Promise.resolve().then(r.bind(r, 38868)),
                Promise.resolve().then(r.bind(r, 77163)),
                Promise.resolve().then(r.bind(r, 96025)),
                Promise.resolve().then(r.bind(r, 51887)),
                Promise.resolve().then(r.bind(r, 25577)),
                Promise.resolve().then(r.bind(r, 65327)),
                Promise.resolve().then(r.bind(r, 3119)),
                Promise.resolve().then(r.bind(r, 74808)),
                Promise.resolve().then(r.bind(r, 92088)),
                Promise.resolve().then(r.bind(r, 83154)),
                Promise.resolve().then(r.bind(r, 14476)),
                Promise.resolve().then(r.bind(r, 88332)),
                Promise.resolve().then(r.bind(r, 16855)),
                Promise.resolve().then(r.bind(r, 28795)),
                Promise.resolve().then(r.bind(r, 93099)),
                Promise.resolve().then(r.bind(r, 15640)),
                Promise.resolve().then(r.bind(r, 82885)),
                Promise.resolve().then(r.bind(r, 99733)),
                Promise.resolve().then(r.bind(r, 18355)),
                Promise.resolve().then(r.bind(r, 42691)),
                Promise.resolve().then(r.bind(r, 37235)),
                Promise.resolve().then(r.bind(r, 3781)),
                Promise.resolve().then(r.bind(r, 33829)),
                Promise.resolve().then(r.bind(r, 39906)),
                Promise.resolve().then(r.bind(r, 50119)),
                Promise.resolve().then(r.bind(r, 21179)),
                Promise.resolve().then(r.bind(r, 17097)),
                Promise.resolve().then(r.bind(r, 50193)),
                Promise.resolve().then(r.bind(r, 83399)),
                Promise.resolve().then(r.bind(r, 11450)),
                Promise.resolve().then(r.bind(r, 62345)),
                Promise.resolve().then(r.bind(r, 37408)),
                Promise.resolve().then(r.bind(r, 48392)),
                Promise.resolve().then(r.bind(r, 42488)),
                Promise.resolve().then(r.bind(r, 33776)),
                Promise.resolve().then(r.bind(r, 5207)),
                Promise.resolve().then(r.bind(r, 69536)),
                Promise.resolve().then(r.bind(r, 45721)),
                Promise.resolve().then(r.bind(r, 80183)),
                Promise.resolve().then(r.bind(r, 2438)),
                Promise.resolve().then(r.bind(r, 46540)),
                Promise.resolve().then(r.bind(r, 72467)),
                Promise.resolve().then(r.bind(r, 66894)),
                Promise.resolve().then(r.bind(r, 45318)),
                Promise.resolve().then(r.bind(r, 3283)),
                Promise.resolve().then(r.bind(r, 49943)),
                Promise.resolve().then(r.bind(r, 73896)),
                Promise.resolve().then(r.bind(r, 51843)),
                Promise.resolve().then(r.bind(r, 38139)),
                Promise.resolve().then(r.bind(r, 93405)),
                Promise.resolve().then(r.bind(r, 8394)),
                Promise.resolve().then(r.bind(r, 3192)),
                Promise.resolve().then(r.bind(r, 7286)),
                Promise.resolve().then(r.bind(r, 60305)),
                Promise.resolve().then(r.bind(r, 47203)),
                Promise.resolve().then(r.bind(r, 34286)),
                Promise.resolve().then(r.bind(r, 224)),
                Promise.resolve().then(r.bind(r, 24449)),
                Promise.resolve().then(r.bind(r, 79893)),
                Promise.resolve().then(r.bind(r, 81789)),
                Promise.resolve().then(r.bind(r, 87466)),
                Promise.resolve().then(r.bind(r, 34028)),
                Promise.resolve().then(r.bind(r, 99564)),
                Promise.resolve().then(r.bind(r, 95348)),
                Promise.resolve().then(r.bind(r, 52347)),
                Promise.resolve().then(r.bind(r, 61015)),
                Promise.resolve().then(r.bind(r, 1771)),
                Promise.resolve().then(r.bind(r, 80043)),
                Promise.resolve().then(r.bind(r, 65729)),
                Promise.resolve().then(r.bind(r, 12235)),
                Promise.resolve().then(r.bind(r, 60793)),
                Promise.resolve().then(r.bind(r, 74565)),
                Promise.resolve().then(r.bind(r, 8941)),
                Promise.resolve().then(r.bind(r, 38433)),
                Promise.resolve().then(r.bind(r, 8732)),
                Promise.resolve().then(r.bind(r, 43369)),
                Promise.resolve().then(r.bind(r, 47564)),
                Promise.resolve().then(r.bind(r, 41017)),
                Promise.resolve().then(r.bind(r, 27252)),
                Promise.resolve().then(r.bind(r, 65286)),
                Promise.resolve().then(r.bind(r, 45198)),
                Promise.resolve().then(r.bind(r, 46814)),
                Promise.resolve().then(r.bind(r, 92508)),
                Promise.resolve().then(r.bind(r, 40126)),
                Promise.resolve().then(r.bind(r, 83726)),
                Promise.resolve().then(r.bind(r, 90410)),
                Promise.resolve().then(r.bind(r, 13246)),
                Promise.resolve().then(r.bind(r, 26040)),
                Promise.resolve().then(r.bind(r, 92446)),
                Promise.resolve().then(r.bind(r, 42593)),
                Promise.resolve().then(r.bind(r, 70570)),
                Promise.resolve().then(r.bind(r, 88416)),
                Promise.resolve().then(r.bind(r, 24174)),
                Promise.resolve().then(r.bind(r, 78458)),
                Promise.resolve().then(r.bind(r, 59457)),
                Promise.resolve().then(r.bind(r, 6690)),
                Promise.resolve().then(r.bind(r, 88370)),
                Promise.resolve().then(r.bind(r, 66904)),
                Promise.resolve().then(r.bind(r, 39937)),
                Promise.resolve().then(r.bind(r, 33019)),
                Promise.resolve().then(r.bind(r, 38808)),
                Promise.resolve().then(r.bind(r, 58094)),
                Promise.resolve().then(r.bind(r, 78009)),
                Promise.resolve().then(r.bind(r, 33427)),
                Promise.resolve().then(r.bind(r, 30878)),
                Promise.resolve().then(r.bind(r, 53115)),
                Promise.resolve().then(r.bind(r, 52398)),
                Promise.resolve().then(r.bind(r, 82327)),
                Promise.resolve().then(r.bind(r, 17012)),
                Promise.resolve().then(r.bind(r, 9275)),
                Promise.resolve().then(r.bind(r, 17658)),
                Promise.resolve().then(r.bind(r, 36578)),
                Promise.resolve().then(r.bind(r, 66989)),
                Promise.resolve().then(r.bind(r, 58863)),
                Promise.resolve().then(r.bind(r, 60899)),
                Promise.resolve().then(r.bind(r, 59437)),
                Promise.resolve().then(r.bind(r, 43367)),
                Promise.resolve().then(r.bind(r, 66446)),
                Promise.resolve().then(r.bind(r, 86840)),
                Promise.resolve().then(r.bind(r, 75181)),
                Promise.resolve().then(r.bind(r, 99538)),
                Promise.resolve().then(r.bind(r, 45252)),
                Promise.resolve().then(r.bind(r, 59226)),
                Promise.resolve().then(r.bind(r, 75961)),
                Promise.resolve().then(r.bind(r, 33964)),
                Promise.resolve().then(r.bind(r, 33967)),
                Promise.resolve().then(r.bind(r, 64410)),
                Promise.resolve().then(r.bind(r, 91350)),
                Promise.resolve().then(r.bind(r, 4500)),
                Promise.resolve().then(r.bind(r, 55846)),
                Promise.resolve().then(r.bind(r, 65689)),
                Promise.resolve().then(r.bind(r, 99386)),
                Promise.resolve().then(r.bind(r, 5222)),
                Promise.resolve().then(r.bind(r, 60440)),
                Promise.resolve().then(r.bind(r, 37271)),
                Promise.resolve().then(r.bind(r, 66688)),
                Promise.resolve().then(r.bind(r, 76472)),
                Promise.resolve().then(r.bind(r, 41682)),
                Promise.resolve().then(r.bind(r, 77666)),
                Promise.resolve().then(r.bind(r, 8765)),
                Promise.resolve().then(r.bind(r, 48670)),
                Promise.resolve().then(r.bind(r, 22096)),
                Promise.resolve().then(r.bind(r, 33655)),
                Promise.resolve().then(r.bind(r, 27754)),
                Promise.resolve().then(r.bind(r, 47347)),
                Promise.resolve().then(r.bind(r, 45591)),
                Promise.resolve().then(r.bind(r, 52862)),
                Promise.resolve().then(r.bind(r, 79326)),
                Promise.resolve().then(r.bind(r, 73922)),
                Promise.resolve().then(r.bind(r, 10790)),
                Promise.resolve().then(r.bind(r, 78684)),
                Promise.resolve().then(r.bind(r, 76877)),
                Promise.resolve().then(r.bind(r, 61176)),
                Promise.resolve().then(r.bind(r, 62108)),
                Promise.resolve().then(r.bind(r, 75053)),
                Promise.resolve().then(r.bind(r, 23035)),
                Promise.resolve().then(r.bind(r, 82315)),
                Promise.resolve().then(r.bind(r, 60673)),
                Promise.resolve().then(r.bind(r, 5048)),
                Promise.resolve().then(r.bind(r, 50215)),
                Promise.resolve().then(r.bind(r, 78308)),
                Promise.resolve().then(r.bind(r, 10084)),
                Promise.resolve().then(r.bind(r, 58681)),
                Promise.resolve().then(r.bind(r, 18658)),
                Promise.resolve().then(r.bind(r, 6323)),
                Promise.resolve().then(r.bind(r, 78817)),
                Promise.resolve().then(r.bind(r, 7230)),
                Promise.resolve().then(r.bind(r, 38378)),
                Promise.resolve().then(r.bind(r, 35609)),
                Promise.resolve().then(r.bind(r, 18606)),
                Promise.resolve().then(r.bind(r, 68014)),
                Promise.resolve().then(r.bind(r, 12126)),
                Promise.resolve().then(r.bind(r, 52742)),
                Promise.resolve().then(r.bind(r, 68098)),
                Promise.resolve().then(r.bind(r, 89190)),
                Promise.resolve().then(r.bind(r, 3270)),
                Promise.resolve().then(r.bind(r, 1220)),
                Promise.resolve().then(r.bind(r, 96584)),
                Promise.resolve().then(r.bind(r, 54598)),
                Promise.resolve().then(r.bind(r, 14196)),
                Promise.resolve().then(r.bind(r, 20576)),
                Promise.resolve().then(r.bind(r, 73976)),
                Promise.resolve().then(r.bind(r, 35203)),
                Promise.resolve().then(r.bind(r, 39450)),
                Promise.resolve().then(r.bind(r, 77607)),
                Promise.resolve().then(r.bind(r, 7430)),
                Promise.resolve().then(r.bind(r, 24786)),
                Promise.resolve().then(r.bind(r, 24036)),
                Promise.resolve().then(r.bind(r, 34932)),
                Promise.resolve().then(r.bind(r, 56204)),
                Promise.resolve().then(r.bind(r, 75450)),
                Promise.resolve().then(r.bind(r, 60608)),
                Promise.resolve().then(r.bind(r, 33648)),
                Promise.resolve().then(r.bind(r, 43548)),
                Promise.resolve().then(r.bind(r, 69672)),
                Promise.resolve().then(r.bind(r, 50711)),
                Promise.resolve().then(r.bind(r, 5185)),
                Promise.resolve().then(r.bind(r, 90555)),
                Promise.resolve().then(r.bind(r, 5602)),
                Promise.resolve().then(r.bind(r, 12390)),
                Promise.resolve().then(r.bind(r, 58376)),
                Promise.resolve().then(r.bind(r, 24491)),
                Promise.resolve().then(r.bind(r, 61993)),
                Promise.resolve().then(r.bind(r, 38644)),
                Promise.resolve().then(r.bind(r, 93668)),
                Promise.resolve().then(r.bind(r, 85949)),
                Promise.resolve().then(r.bind(r, 17519)),
                Promise.resolve().then(r.bind(r, 62010)),
                Promise.resolve().then(r.bind(r, 16372)),
                Promise.resolve().then(r.bind(r, 64434)),
                Promise.resolve().then(r.bind(r, 33158)),
                Promise.resolve().then(r.bind(r, 27314)),
                Promise.resolve().then(r.bind(r, 93206)),
                Promise.resolve().then(r.bind(r, 37226)),
                Promise.resolve().then(r.bind(r, 13811)),
                Promise.resolve().then(r.bind(r, 45645)),
                Promise.resolve().then(r.bind(r, 24126)),
                Promise.resolve().then(r.bind(r, 20406)),
                Promise.resolve().then(r.bind(r, 21940)),
                Promise.resolve().then(r.bind(r, 26086)),
                Promise.resolve().then(r.bind(r, 96838)),
                Promise.resolve().then(r.bind(r, 10358)),
                Promise.resolve().then(r.bind(r, 23143)),
                Promise.resolve().then(r.bind(r, 51828)),
                Promise.resolve().then(r.bind(r, 51725)),
                Promise.resolve().then(r.bind(r, 23834)),
                Promise.resolve().then(r.bind(r, 88343)),
                Promise.resolve().then(r.bind(r, 24624));
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
        65034: (e, n, r) => {
            'use strict';
            r.d(n, { NotFound: () => c });
            var o = r(54486),
                i = r(50420),
                s = r(28303),
                t = r(47713),
                l = r(77881),
                d = r(5956),
                m = r(97800),
                h = r(83252),
                v = r(80585),
                b = r(61910),
                P = r(46215),
                a = r.n(P);
            let c = (0, s.PA)((e) => {
                let { className: n, title: r, description: s, iconVariant: P = 'musicLogo', iconClassName: c, iconSize: u } = e,
                    { contentRef: g } = (0, h.gKY)(),
                    _ = (0, h.ZpR)(h.Zyd.main.href);
                (0, h.LZB)();
                let { handleNavigateToMain: x } = (0, h.D5F)(_);
                return (
                    (0, h.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, h.Pjs)();
                        (0, b.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, o.jsxs)('div', {
                        className: (0, i.$)(a().root, { [a().root_desktop]: !g }, n),
                        children: [
                            (0, o.jsx)(v.Lh, { withBackwardFallback: '/', className: a().navigation, withForwardControl: !1 }),
                            (0, o.jsxs)('div', {
                                className: a().content,
                                children: [
                                    (0, o.jsx)(d.Icon, { className: (0, i.$)(a().icon, c), variant: P, size: u }),
                                    (0, o.jsx)(m.Heading, {
                                        className: (0, i.$)(a().title, a().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: r || (0, o.jsx)(t.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, o.jsx)(m.Caption, {
                                        className: (0, i.$)(a().text, a().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: s || (0, o.jsx)(t.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, o.jsx)(l.$, {
                                        onClick: x,
                                        className: a().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(m.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, o.jsx)(t.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        75312: (e, n, r) => {
            'use strict';
            r.d(n, { SomethingWentWrong: () => u });
            var o = r(54486),
                i = r(50420),
                s = r(28303),
                t = r(61910),
                l = r(43426),
                d = r(47713),
                m = r(77881),
                h = r(5956),
                v = r(97800),
                b = r(83252),
                P = r(80585),
                a = r(63708),
                c = r.n(a);
            let u = (0, s.PA)((e) => {
                let { className: n, withBackwardControl: r = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    a = s({ id: 'error-messages.something-went-wrong' });
                (0, b.CgZ)(a);
                let { sendRefreshEvent: u } = (0, b.cYT)(),
                    g = (0, t.useCallback)(() => {
                        u(), (window.location.href = b.Zyd.main.href);
                    }, [u]),
                    { contentRef: _ } = (0, b.gKY)();
                return (0, o.jsxs)('div', {
                    className: (0, i.$)(c().root, n),
                    children: [
                        r &&
                            (0, o.jsx)(P.Lh, {
                                withBackwardFallback: '/',
                                className: (0, i.$)(c().navigation, { [c().navigation_desktop]: !_ }),
                                withForwardControl: !1,
                            }),
                        (0, o.jsxs)('div', {
                            className: (0, i.$)(c().content, { [c().content_shrink]: !r }),
                            children: [
                                (0, o.jsx)(h.Icon, { className: c().icon, variant: 'attention', size: 'xxl' }),
                                (0, o.jsx)(v.Heading, { className: (0, i.$)(c().title, c().important), variant: 'h3', size: 'xs', children: a }),
                                (0, o.jsxs)(v.Caption, {
                                    className: (0, i.$)(c().text, c().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, o.jsx)(d.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, o.jsx)(m.$, {
                                    onClick: g,
                                    className: c().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, o.jsxs)(v.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, o.jsx)(d.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        80506: (e, n, r) => {
            'use strict';
            r.d(n, { a: () => i });
            var o = r(87965);
            let i = () => {
                let e = null,
                    n = new o.cJ(!1),
                    r = [];
                return {
                    isLoaded: n,
                    init: (o) => {
                        var i, s;
                        if (void 0 !== (null == (i = window.Ya) ? void 0 : i.Metrika2) && !n.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...o })),
                                    (n.value = !0),
                                    (s = e),
                                    r.forEach((e) => {
                                        e(s);
                                    }),
                                    (r.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && o.logger.error(e);
                            }
                    },
                    count: function (n) {
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [o]: n })
                            : r.push((e) => {
                                  e.params({ [o]: n });
                              });
                    },
                    hit: (n) => {
                        e
                            ? e.hit(n)
                            : r.push((e) => {
                                  e.hit(n);
                              });
                    },
                    reachGoal: (n, o) => {
                        if (!e) return void r.push((e) => e.reachGoal(n, o));
                        e.reachGoal(n, o);
                    },
                };
            };
        },
        82644: (e, n, r) => {
            'use strict';
            r.d(n, { w: () => o.SomethingWentWrong });
            var o = r(75312);
        },
        85272: (e) => {
            e.exports = { root: 'VirtualListItem_root__j_Qqv' };
        },
        97712: (e) => {
            e.exports = { root: 'VirtualGrid_root__nSEzJ', column: 'VirtualGrid_column__P8hJp', row: 'VirtualGrid_row__PL5V_' };
        },
    },
]);
