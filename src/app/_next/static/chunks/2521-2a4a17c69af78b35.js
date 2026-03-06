(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2521],
    {
        1146: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryIntersectionObserverContext: () => i });
            let i = (0, a(61910).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        22685: (e) => {
            e.exports = { date: 'MusicHistoryTab_date__Fjy3P', content: 'MusicHistoryTab_content__Jt15j' };
        },
        26303: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { D: () => i }),
                (function (e) {
                    (e.TRACK = 'track'),
                        (e.WAVE = 'wave'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.ALBUM = 'album'),
                        (e.OTHER = 'other'),
                        (e.SEARCH = 'search');
                })(i || (i = {}));
        },
        37363: (e) => {
            e.exports = {
                header: 'MusicHistoryBlock_header__sIFVC',
                vibeHeader: 'MusicHistoryBlock_vibeHeader__HWzD5',
                vibeCover: 'MusicHistoryBlock_vibeCover__RnM_6',
                vibeTextBlock: 'MusicHistoryBlock_vibeTextBlock__nvhPk',
                heading: 'MusicHistoryBlock_heading__HEfmk',
                headerTitle: 'MusicHistoryBlock_headerTitle__Yhyst',
                content: 'MusicHistoryBlock_content__S9lfi',
                artists: 'MusicHistoryBlock_artists__AjuWP',
                artistLink: 'MusicHistoryBlock_artistLink__yFHPE',
                shimmerTitle: 'MusicHistoryBlock_shimmerTitle__Mx1IC',
            };
        },
        61019: (e) => {
            e.exports = {
                root: 'MusicHistoryPage_root__FYB2m',
                scroll: 'MusicHistoryPage_scroll__ykpDX',
                scrollContainer: 'MusicHistoryPage_scrollContainer__eemvg',
                headerContainer: 'MusicHistoryPage_headerContainer__QG0L3',
                header: 'MusicHistoryPage_header__dzEvD',
                content: 'MusicHistoryPage_content__j4evw',
                footer: 'MusicHistoryPage_footer__Vu7aC',
                empty: 'MusicHistoryPage_empty__fQRHA',
                carousel: 'MusicHistoryPage_carousel__jcl8l',
                tabs: 'MusicHistoryPage_tabs__v_5Zg',
                tab: 'MusicHistoryPage_tab__WDE1e',
                tab_isLoading: 'MusicHistoryPage_tab_isLoading__nNqd2',
                tab_selected: 'MusicHistoryPage_tab_selected__nmn8P',
                date: 'MusicHistoryPage_date__OV6rR',
                error: 'MusicHistoryPage_error__9f_8i',
                important: 'MusicHistoryPage_important__qNFO8',
            };
        },
        72645: (e, t, a) => {
            'use strict';
            a.d(t, {
                cY: () => b.MusicHistoryIntersectionObserverContext,
                UN: () => R,
                ln: () => E.MusicHistoryTab,
                WW: () => D,
                tM: () => i,
                Hp: () => r,
                uZ: () => s,
                QF: () => l,
                u: () => n,
                z: () => p,
                bg: () => S,
                kU: () => I,
                sr: () => A,
                Sv: () => x,
                lT: () => k.useFormatDate,
            });
            let i = (e) => e.data.itemId.id,
                r = (e) => e.data.itemId.id,
                s = (e) => {
                    let { uid: t, kind: a } = e.data.itemId;
                    return ''.concat(t, ':').concat(a);
                },
                l = (e) => {
                    let { albumId: t, trackId: a } = e.data.itemId;
                    return t ? ''.concat(a, ':').concat(t) : a;
                },
                n = (e) => e.data.itemId.seeds.sort().join(',');
            var o = a(93064),
                c = a(26303),
                d = a(80156),
                m = a(83252),
                u = a(21365);
            let v = (e) => {
                if ('fullModel' in e.data) {
                    let { fullModel: t } = e.data;
                    return (0, o.wg)({ type: c.D.TRACK, id: l(e), loadingState: m.GuX.RESOLVE, data: (0, u.vU)(t) });
                }
                return (0, o.wg)({ type: c.D.TRACK, id: l(e), data: null, loadingState: m.GuX.IDLE });
            };
            var y = a(63695),
                h = a(9348),
                _ = a(83909),
                g = a(76866);
            let x = (e) => {
                var t, a;
                let l =
                    null == (t = e.items)
                        ? void 0
                        : t
                              .map((e) => {
                                  switch (e.context.type) {
                                      case c.D.ALBUM:
                                          return ((e, t) => {
                                              let { data: a } = e;
                                              if ('fullModel' in a) {
                                                  let { fullModel: r } = a;
                                                  return (0, o.wg)({
                                                      type: c.D.ALBUM,
                                                      available: r.available,
                                                      id: i(e),
                                                      meta: (0, d.sK)({ album: r.album, artists: r.artists }),
                                                      loadingState: m.GuX.RESOLVE,
                                                      tracks: t.map(v),
                                                  });
                                              }
                                              return (0, o.wg)({ type: c.D.ALBUM, available: !0, id: i(e), meta: null, loadingState: m.GuX.IDLE, tracks: t.map(v) });
                                          })(e.context, e.tracks);
                                      case c.D.PLAYLIST:
                                          return ((e, t) => {
                                              let { data: a, type: i } = e;
                                              if ('fullModel' in a) {
                                                  let { fullModel: r } = a;
                                                  return (0, o.wg)({
                                                      type: i,
                                                      id: s(e),
                                                      meta: { ...(0, _.bk)({ playlist: r.playlist }), tracksCount: r.tracksCount },
                                                      loadingState: m.GuX.RESOLVE,
                                                      tracks: t.map(v),
                                                  });
                                              }
                                              return (0, o.wg)({ type: c.D.PLAYLIST, id: s(e), meta: null, loadingState: m.GuX.IDLE, tracks: t.map(v) });
                                          })(e.context, e.tracks);
                                      case c.D.ARTIST:
                                          return ((e, t) => {
                                              let { data: a, type: i } = e;
                                              if ('fullModel' in a) {
                                                  let { fullModel: s } = a;
                                                  return (0, o.wg)({
                                                      type: i,
                                                      available: s.available,
                                                      id: r(e),
                                                      meta: (0, y.as)({ artist: s.artist }),
                                                      loadingState: m.GuX.RESOLVE,
                                                      tracks: t.map(v),
                                                  });
                                              }
                                              return (0, o.wg)({ type: i, available: !0, id: r(e), meta: null, loadingState: m.GuX.IDLE, tracks: t.map(v) });
                                          })(e.context, e.tracks);
                                      case c.D.WAVE:
                                          return ((e, t) => {
                                              let { data: a, type: i } = e;
                                              if ('fullModel' in a) {
                                                  let { fullModel: r } = a;
                                                  return (0, o.wg)({
                                                      type: i,
                                                      id: n(e),
                                                      meta: {
                                                          ...(0, g.er)(r.wave),
                                                          imageUrl: r.simpleWaveForegroundImageUrl,
                                                          backgroundColor: r.simpleWaveBackgroundColor,
                                                      },
                                                      loadingState: m.GuX.RESOLVE,
                                                      tracks: t.map(v),
                                                  });
                                              }
                                              return (0, o.wg)({ type: i, id: n(e), meta: null, loadingState: m.GuX.IDLE, tracks: t.map(v) });
                                          })(e.context, e.tracks);
                                      case c.D.SEARCH:
                                      case c.D.OTHER:
                                          return ((e, t) => {
                                              let { type: a } = e;
                                              return (0, o.wg)({ type: a, id: (0, h.A)(), tracks: t.map(v) });
                                          })(e.context, e.tracks);
                                      default:
                                          return null;
                                  }
                              })
                              .filter((e) => e);
                return { date: e.date, blocks: null != (a = (0, o.wg)(l)) ? a : null };
            };
            var b = a(1146);
            let p = (e) => (null == e ? void 0 : e.type) === c.D.ALBUM,
                S = (e) => (null == e ? void 0 : e.type) === c.D.ARTIST,
                I = (e) => (null == e ? void 0 : e.type) === c.D.PLAYLIST,
                A = (e) => (null == e ? void 0 : e.type) === c.D.WAVE;
            var k = a(87803),
                C = a(26433),
                M = a(89461);
            let H = (e) => ({ type: M.z4.Unloaded, meta: { id: e.entityId } }),
                T = o.gK
                    .compose(o.gK.model('MusicHistoryTrack', { type: o.gK.literal(c.D.TRACK), id: o.gK.string, data: o.gK.maybeNull(u.vj) }), C.XT)
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                        get entityId() {
                            var t;
                            if (!e.data) return e.id;
                            let { id: a, albums: i } = e.data,
                                r = null == (t = i[0]) ? void 0 : t.id;
                            return r ? ''.concat(a, ':').concat(r) : a;
                        },
                    }))
                    .named('MusicHistoryPlaylist'),
                j = o.gK.compose(o.gK.model('MusicHistoryBaseBlock', { id: o.gK.string, tracks: o.gK.array(T) }), C.XT).views((e) => ({
                    get isShimmerVisible() {
                        return e.isNeededToLoad || e.isLoading || e.isRejected;
                    },
                    get isShimmerActive() {
                        return e.isLoading;
                    },
                    get contextId() {
                        return e.id;
                    },
                    get entitiesData() {
                        return e.tracks.map(H);
                    },
                })),
                L = j
                    .props({ type: o.gK.literal(c.D.ALBUM), available: o.gK.boolean, meta: o.gK.maybeNull(d.JC) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get autoflowSeeds() {
                            var t;
                            return ['album:'.concat(null == (t = e.meta) ? void 0 : t.id)];
                        },
                    }))
                    .named('MusicHistoryAlbum'),
                N = j
                    .props({ type: o.gK.literal(c.D.ARTIST), available: o.gK.boolean, meta: o.gK.maybeNull(y.PK) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get autoflowSeeds() {
                            var t;
                            return ['artist:'.concat(null == (t = e.meta) ? void 0 : t.id)];
                        },
                    }))
                    .named('MusicHistoryArtist'),
                P = o.gK
                    .model('MusicHistoryCommon', { id: o.gK.string, type: o.gK.union(o.gK.literal(c.D.OTHER), o.gK.literal(c.D.SEARCH)), tracks: o.gK.array(T) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get contextId() {
                            return e.tracks.map((e) => e.id).join(',');
                        },
                        get entitiesData() {
                            return e.tracks.map(H);
                        },
                    })),
                f = j
                    .props({ type: o.gK.literal(c.D.PLAYLIST), meta: o.gK.maybeNull(_.IP) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get autoflowSeeds() {
                            var t, a;
                            return ['playlist:'.concat(null == (t = e.meta) ? void 0 : t.uid, '_').concat(null == (a = e.meta) ? void 0 : a.kind)];
                        },
                    }))
                    .named('MusicHistoryPlaylist'),
                w = j.props({ id: o.gK.string, type: o.gK.literal(c.D.WAVE), meta: o.gK.maybeNull(g.Gh) }).views((e) => ({
                    get key() {
                        return ''.concat(e.type, '_').concat(e.id);
                    },
                    get contextId() {
                        var t, a;
                        return null != (a = null == (t = e.meta) ? void 0 : t.stationId) ? a : m.M19;
                    },
                    get autoflowSeeds() {
                        var i;
                        return null == (i = e.meta) ? void 0 : i.seeds;
                    },
                })),
                K = o.gK.union(L, N, f, w, P),
                R = o.gK.compose(
                    o.gK.model({
                        id: o.gK.string,
                        type: o.gK.enumeration(Object.values(c.D)),
                        tabIndex: o.gK.number,
                        blockIndex: o.gK.number,
                        trackIndex: o.gK.maybeNull(o.gK.number),
                    }),
                    C.XT,
                ),
                D = o.gK.model('MusicHistoryTab', { date: o.gK.string, blocks: o.gK.maybeNull(o.gK.array(K)) });
            var E = a(93724);
        },
        75237: (e) => {
            e.exports = { trackShimmer: 'MusicHistoryTrack_trackShimmer__yxcx9' };
        },
        87803: (e, t, a) => {
            'use strict';
            a.d(t, { useFormatDate: () => s });
            var i = a(61910),
                r = a(43426);
            let s = () => {
                let { formatDate: e, formatRelativeTime: t } = (0, r.A)();
                return (0, i.useCallback)(
                    function (a) {
                        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            r = new Date(a),
                            s = new Date();
                        r.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0);
                        let l = (r.getTime() - s.getTime()) / 864e5,
                            n = t(l, 'day', { numeric: 'auto' }),
                            o = e(a, { day: 'numeric', month: 'long' });
                        switch (l) {
                            case 0:
                            case -1:
                            case -2:
                                if (i) return ''.concat(n, ', ').concat(o);
                                return n;
                            default:
                                return o;
                        }
                    },
                    [e, t],
                );
            };
        },
        92346: (e) => {
            e.exports = {
                shimmersContainer: 'MusicHistoryPageContentShimmer_shimmersContainer__82cj6',
                dateShimmer: 'MusicHistoryPageContentShimmer_dateShimmer__d4_te',
                contextNameShimmer: 'MusicHistoryPageContentShimmer_contextNameShimmer__Tzbqr',
                contextHeaderShimmer: 'MusicHistoryPageContentShimmer_contextHeaderShimmer__Tq0PZ',
                trackListShimmers: 'MusicHistoryPageContentShimmer_trackListShimmers__4GSp8',
            };
        },
        92521: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryPage: () => C });
            var i = a(54486),
                r = a(50420),
                s = a(28303),
                l = a(61910),
                n = a(47713),
                o = a(31500),
                c = a(56231),
                d = a(51321),
                m = a(97800),
                u = a(72645),
                v = a(82644),
                y = a(83252),
                h = a(80585),
                _ = a(85360);
            let g = (e) => {
                    let { children: t } = e,
                        a = (0, l.useRef)({}),
                        r = (0, l.useMemo)(
                            () =>
                                (0, _.Gv)((e) => {
                                    var t, i;
                                    let r = (0, _.L5)(e.target),
                                        s = a.current[r];
                                    e.isIntersecting ? null == s || null == (t = s.onShow) || t.call(s) : null == s || null == (i = s.onHide) || i.call(s);
                                }),
                            [],
                        );
                    (0, l.useEffect)(() => () => (null == r ? void 0 : r.disconnect()), [r]);
                    let s = (0, l.useCallback)(
                            (e) => {
                                !a.current[e.elementId] && e.elementRef.current && (null == r || r.observe(e.elementRef.current), (a.current[e.elementId] = e));
                            },
                            [r],
                        ),
                        n = (0, l.useCallback)(
                            (e) => {
                                let t = a.current[e];
                                t && t.elementRef.current && (null == r || r.unobserve(t.elementRef.current));
                            },
                            [r],
                        ),
                        o = (0, l.useMemo)(() => ({ observeElement: s, unobserveElement: n }), [s, n]);
                    return (0, i.jsx)(u.cY.Provider, { value: o, children: t });
                },
                x = async (e, t) =>
                    new Promise((a) => {
                        if ('onscrollend' in window) {
                            var i;
                            let r = () => {
                                var e;
                                a(), null == (e = t.current) || e.removeEventListener('scrollend', r);
                            };
                            null == (i = t.current) || i.addEventListener('scrollend', r), e.scrollIntoView({ behavior: 'smooth' });
                        } else e.scrollIntoView({ behavior: 'smooth' }), window.setTimeout(a, 1e3);
                    });
            var b = a(61019),
                p = a.n(b),
                S = a(22674),
                I = a(92346),
                A = a.n(I);
            let k = (e) => {
                    let { isActive: t } = e,
                        a = (0, i.jsxs)('div', {
                            className: A().trackListShimmers,
                            children: [
                                (0, i.jsx)(h.DS, { isActive: t, variant: y.Xjt.PLAYLIST }),
                                (0, i.jsx)(h.DS, { isActive: t, variant: y.Xjt.PLAYLIST }),
                                (0, i.jsx)(h.DS, { isActive: t, variant: y.Xjt.PLAYLIST }),
                            ],
                        });
                    return (0, i.jsxs)('div', {
                        className: A().shimmersContainer,
                        children: [
                            (0, i.jsx)(S.Shimmer, { isActive: t, className: A().dateShimmer }),
                            (0, i.jsx)(S.Shimmer, { isActive: t, className: A().contextNameShimmer }),
                            (0, i.jsx)(h.Mo, { withDescription: !0, className: A().contextHeaderShimmer }),
                            a,
                            (0, i.jsx)(S.Shimmer, { isActive: t, className: A().contextNameShimmer }),
                            (0, i.jsx)(h.Mo, { coverRadius: 'round', className: A().contextHeaderShimmer }),
                            a,
                        ],
                    });
                },
                C = (0, s.PA)(() => {
                    let [e, t] = (0, l.useState)(!1),
                        { musicHistory: a } = (0, y.Pjs)(),
                        { contentScrollRef: s, setContentScrollRef: _ } = (0, y.gKY)(),
                        b = (0, d.useTabsState)(0),
                        S = (0, l.useRef)(!1),
                        I = (0, l.useRef)(null),
                        A = (0, l.useCallback)(
                            async (e) => {
                                var i;
                                t(!0);
                                let r = a.dates[e];
                                if (!r) return;
                                null == (i = b.onTabChange) || i.call(b, e), (S.current = !0);
                                let l = document.querySelector('[data-date-anchor="'.concat(r, '"]'));
                                l && ((I.current = s), await x(l, I)), (S.current = !1);
                            },
                            [a.dates, b, s],
                        ),
                        C = (0, l.useCallback)(() => {
                            if (S.current) return;
                            let e = a.dates.findIndex((e) => a.datesMap.get(e));
                            if (e >= 0) {
                                var t;
                                null == (t = b.onTabChange) || t.call(b, e);
                            }
                        }, [a.dates, a.datesMap, b]);
                    (0, l.useEffect)(() => () => a.reset(), [a]), (0, y.Jzs)(a.isResolved);
                    let M = (0, l.useMemo)(() => {
                            var t;
                            return a.isRejected
                                ? (0, i.jsx)(v.w, { className: (0, r.$)(p().error, p().important), withBackwardControl: !1 })
                                : a.isShimmerVisible
                                  ? (0, i.jsx)(k, { isActive: a.isShimmerActive })
                                  : a.isEmpty
                                    ? (0, i.jsx)('div', {
                                          className: p().empty,
                                          children: (0, i.jsx)(m.Caption, {
                                              variant: 'div',
                                              size: 'm',
                                              weight: 'normal',
                                              children: (0, i.jsx)(n.A, { id: 'music-history.empty-title' }),
                                          }),
                                      })
                                    : null == (t = a.tabs)
                                      ? void 0
                                      : t.map((t, a) =>
                                            (0, i.jsx)(
                                                u.ln,
                                                { onTabShowOrHide: C, 'data-intersection-property-id': t.date, tab: t, tabIndex: a, shouldHideInactiveTab: e },
                                                a,
                                            ),
                                        );
                        }, [C, a.isEmpty, a.isRejected, a.isShimmerActive, a.isShimmerVisible, a.tabs, e]),
                        H = (0, u.lT)(),
                        T = (0, l.useMemo)(
                            () =>
                                (0, i.jsx)(h.wI, {
                                    isShimmerVisible: a.isShimmerVisible,
                                    className: p().tabs,
                                    ...b,
                                    onTabChange: A,
                                    shimmer: (0, i.jsx)(h.zr, {
                                        className: p().tabs,
                                        shimmerClassName: (0, r.$)(p().tab, { [p().tab_isLoading]: a.isShimmerVisible }),
                                        count: 5,
                                    }),
                                    children: a.dates.map((e, t) =>
                                        (0, i.jsx)(
                                            h.oz,
                                            {
                                                className: (0, r.$)(p().tab, { [p().tab_selected]: t === b.value }),
                                                titleClassName: p().date,
                                                'aria-label': H(e, !1),
                                                title: H(e, !1),
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [H, A, a.dates, a.isShimmerVisible, b],
                        );
                    return (
                        a.isNeededToLoad && (0, l.use)(a.getMusicHistory()),
                        (0, i.jsx)(y.nVz, {
                            pageId: y._Q$.HISTORY,
                            children: (0, i.jsxs)('div', {
                                className: p().root,
                                ...(0, o.Am)(o.Xk.musicHistory.MUSIC_HISTORY_PAGE),
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: p().headerContainer,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: p().header,
                                                children: [
                                                    (0, i.jsx)(h.Lh, { withForwardControl: !1 }),
                                                    (0, i.jsx)(m.Heading, {
                                                        variant: 'h1',
                                                        weight: 'bold',
                                                        size: 'xl',
                                                        lineClamp: 1,
                                                        children: (0, i.jsx)(n.A, { id: 'music-history.title' }),
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsx)(h.FY, { className: p().carousel, carouselElement: T }),
                                        ],
                                    }),
                                    (0, i.jsxs)(c.N, {
                                        ref: _,
                                        className: p().scroll,
                                        containerClassName: p().scrollContainer,
                                        children: [
                                            (0, i.jsx)(g, { children: (0, i.jsx)('div', { className: p().content, children: M }) }),
                                            (0, i.jsx)(h.A, { children: (0, i.jsx)(h.wi, { className: p().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                        })
                    );
                });
        },
        93724: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryTab: () => D });
            var i = a(54486),
                r = a(28303),
                s = a(61910),
                l = a(31500),
                n = a(26303),
                o = a(97800),
                c = a(83252),
                d = a(1146),
                m = a(87803),
                u = a(50420),
                v = a(47713),
                y = a(63585),
                h = a(63695),
                _ = a(80585);
            let g = (e) => {
                    let { entityId: t, from: a } = e;
                    return { contextData: { type: y.K.Various, meta: { id: t }, from: a }, queueParams: { index: 0 }, loadContextMeta: !0 };
                },
                x = (e) => {
                    let { id: t, tabIndex: a, blockIndex: i, trackIndex: r } = e,
                        { musicHistory: l } = (0, c.Pjs)(),
                        n = (0, s.useId)(),
                        o = (0, s.useRef)(null),
                        { observeElement: m, unobserveElement: u } = (0, s.useContext)(d.MusicHistoryIntersectionObserverContext);
                    return (
                        (0, s.useEffect)(() => {
                            let e = void 0 !== r ? ''.concat(a, '_').concat(i, '_').concat(r, '_').concat(t) : ''.concat(a, '_').concat(i, '_').concat(t),
                                s = l.indexesMap.get(e);
                            l.isInObservationRange(s) &&
                                m({
                                    elementRef: o,
                                    elementId: n,
                                    index: s,
                                    onShow() {
                                        l.getItems(this.index), u(n);
                                    },
                                });
                        }, [i, t, n, l, m, a, r, u]),
                        { intersectionPropertyId: n, ref: o }
                    );
                };
            var b = a(21365),
                p = a(75237),
                S = a.n(p);
            let I = (0, r.PA)((e) => {
                let { type: t, track: a, artists: r, tabIndex: s, blockIndex: l, trackIndex: n, playContextParams: o } = e,
                    { ref: d, intersectionPropertyId: m } = x({ id: a.id, tabIndex: s, blockIndex: l, trackIndex: n });
                return a.isShimmerVisible || !a.data
                    ? (0, i.jsx)('div', {
                          'data-intersection-property-id': m,
                          ref: d,
                          children: (0, i.jsx)(_.DS, {
                              isActive: a.isShimmerActive,
                              'data-intersection-property-id': m,
                              className: S().trackShimmer,
                              variant: t === y.K.Album ? c.Xjt.ALBUM : c.Xjt.PLAYLIST,
                          }),
                      })
                    : t === y.K.Album
                      ? (0, i.jsx)(b.FR, { track: a.data, position: a.data.index, albumArtists: r, playContextParams: o })
                      : (0, i.jsx)(b.Kt, { track: a.data, playContextParams: o });
            });
            var A = a(37363),
                k = a.n(A);
            let C = (0, r.PA)((e) => {
                    var t, a, r, n, d;
                    let { album: m, tabIndex: b, blockIndex: p } = e,
                        { ref: S, intersectionPropertyId: A } = x({ id: m.id, tabIndex: b, blockIndex: p }),
                        { from: C } = (0, c.fyy)({ blockId: 'album-'.concat(m.id) }),
                        M = (0, s.useMemo)(() => {
                            var e, t;
                            return m.available
                                ? (0, i.jsx)(h.iQ, {
                                      className: k().artists,
                                      linkClassName: k().artistLink,
                                      artists: null == (e = m.meta) ? void 0 : e.artists,
                                      lineClamp: 1,
                                  })
                                : null == (t = m.meta)
                                  ? void 0
                                  : t.artistNames;
                        }, [m.available, null == (t = m.meta) ? void 0 : t.artistNames, null == (a = m.meta) ? void 0 : a.artists]),
                        H = (0, s.useMemo)(() => {
                            var e, t, a;
                            return m.isShimmerVisible
                                ? (0, i.jsx)(_.Mo, { isActive: m.isShimmerActive, className: k().header, withDescription: !0 })
                                : (0, i.jsx)(_.Tw, {
                                      className: k().header,
                                      coverUrl: null == (e = m.meta) ? void 0 : e.coverUri,
                                      title: null == (t = m.meta) ? void 0 : t.title,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      description: M,
                                      titleClassName: k().headerTitle,
                                      viewAllActionLink: null == (a = m.meta) ? void 0 : a.url,
                                      available: m.available,
                                      fallbackIconVariant: 'album',
                                      headingVariant: 'h4',
                                      withCover: !0,
                                      withDescription: !!M,
                                  });
                        }, [
                            m.available,
                            m.isShimmerActive,
                            m.isShimmerVisible,
                            null == (r = m.meta) ? void 0 : r.coverUri,
                            null == (n = m.meta) ? void 0 : n.title,
                            null == (d = m.meta) ? void 0 : d.url,
                            M,
                        ]),
                        T = (0, s.useMemo)(
                            () =>
                                m.tracks.map((e, t) => {
                                    var a;
                                    let r = g({ entityId: e.entityId, from: C });
                                    return (0, i.jsx)(
                                        I,
                                        { type: y.K.Album, track: e, playContextParams: r, tabIndex: b, blockIndex: p, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [m.tracks, C, b, p],
                        );
                    return (0, i.jsxs)('section', {
                        className: k().root,
                        ref: S,
                        'data-intersection-property-id': A,
                        ...(0, l.Am)(l.e8.musicHistory.MUSIC_HISTORY_TAB_ALBUM_BLOCK),
                        children: [
                            (0, i.jsx)(o.Heading, {
                                className: (0, u.$)(k().header, k().heading),
                                variant: 'h3',
                                ...(0, l.Am)(l.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ALBUM),
                                children: (0, i.jsx)(v.A, { id: 'music-history.album' }),
                            }),
                            H,
                            (0, i.jsx)('div', { className: k().content, children: T }),
                        ],
                    });
                }),
                M = (0, r.PA)((e) => {
                    var t, a, r;
                    let { artist: n, tabIndex: d, blockIndex: m } = e,
                        { ref: h, intersectionPropertyId: b } = x({ id: n.id, tabIndex: d, blockIndex: m }),
                        { from: p } = (0, c.fyy)({ blockId: 'artist-'.concat(n.id) }),
                        S = (0, s.useMemo)(() => {
                            var e, t, a;
                            return n.isShimmerVisible
                                ? (0, i.jsx)(_.Mo, { isActive: n.isShimmerActive, className: k().header, coverRadius: 'round' })
                                : (0, i.jsx)(_.Tw, {
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      className: k().header,
                                      coverUrl: null == (e = n.meta) ? void 0 : e.coverUri,
                                      title: null == (t = n.meta) ? void 0 : t.name,
                                      titleClassName: k().headerTitle,
                                      viewAllActionLink: null == (a = n.meta) ? void 0 : a.url,
                                      available: n.available,
                                      withCover: !0,
                                      coverRadius: 'round',
                                      headingVariant: 'h4',
                                  });
                        }, [
                            n.available,
                            n.isShimmerActive,
                            n.isShimmerVisible,
                            null == (t = n.meta) ? void 0 : t.coverUri,
                            null == (a = n.meta) ? void 0 : a.name,
                            null == (r = n.meta) ? void 0 : r.url,
                        ]),
                        A = (0, s.useMemo)(
                            () =>
                                n.tracks.map((e, t) => {
                                    var a;
                                    let r = g({ entityId: e.entityId, from: p });
                                    return (0, i.jsx)(
                                        I,
                                        { type: y.K.Artist, track: e, playContextParams: r, tabIndex: d, blockIndex: m, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [n.tracks, p, d, m],
                        );
                    return (0, i.jsxs)('section', {
                        className: k().root,
                        ref: h,
                        'data-intersection-property-id': b,
                        ...(0, l.Am)(l.e8.musicHistory.MUSIC_HISTORY_TAB_ARTIST_BLOCK),
                        children: [
                            (0, i.jsx)(o.Heading, {
                                className: (0, u.$)(k().header, k().heading),
                                variant: 'h3',
                                ...(0, l.Am)(l.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ARTIST),
                                children: (0, i.jsx)(v.A, { id: 'music-history.artist' }),
                            }),
                            S,
                            (0, i.jsx)('div', { className: k().content, children: A }),
                        ],
                    });
                });
            var H = a(29064);
            let T = (0, r.PA)((e) => {
                let { common: t, tabIndex: a, blockIndex: r } = e,
                    { ref: d, intersectionPropertyId: m } = x({ id: t.id, tabIndex: a, blockIndex: r }),
                    { from: h } = (0, c.fyy)(),
                    _ = ((e) =>
                        (0, s.useMemo)(
                            () => (e === n.D.SEARCH ? (0, c.tW0)({ contextType: y.K.Various, contextId: '', entityContextType: H.h.MUSIC_HISTORY_SEARCH }) : null),
                            [e],
                        ))(t.type),
                    b = (0, s.useMemo)(
                        () =>
                            t.tracks.map((e, t) => {
                                var s;
                                let l = g({ entityId: e.entityId, from: h });
                                return (0, i.jsx)(
                                    I,
                                    { playContextParams: l, type: y.K.Various, track: e, tabIndex: a, blockIndex: r, trackIndex: t },
                                    null == (s = e.data) ? void 0 : s.getKey(t),
                                );
                            }),
                        [t.tracks, h, a, r],
                    ),
                    p = (0, s.useMemo)(() => {
                        switch (t.type) {
                            case n.D.OTHER:
                                return (0, i.jsx)(v.A, { id: 'music-history.shuffle' });
                            case n.D.SEARCH:
                                return (0, i.jsx)(v.A, { id: 'music-history.search' });
                        }
                    }, [t.type]);
                return (0, i.jsx)(c._Fn, {
                    sourceContextData: _,
                    children: (0, i.jsxs)('section', {
                        className: k().root,
                        ref: d,
                        'data-intersection-property-id': m,
                        ...(0, l.Am)(l.e8.musicHistory.MUSIC_HISTORY_TAB_COMMON_BLOCK),
                        children: [
                            (0, i.jsx)(o.Heading, {
                                className: (0, u.$)(k().header, k().heading),
                                variant: 'h3',
                                ...(0, l.Am)(l.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_COMMON),
                                children: p,
                            }),
                            (0, i.jsx)('div', { className: k().content, children: b }),
                        ],
                    }),
                });
            });
            var j = a(43426);
            let L = (0, r.PA)((e) => {
                var t, a, r, n, d;
                let { playlist: m, tabIndex: h, blockIndex: b } = e,
                    { ref: p, intersectionPropertyId: S } = x({ id: m.id, tabIndex: h, blockIndex: b }),
                    { from: A } = (0, c.fyy)({ blockId: m.isResolved ? 'playlist-'.concat(null == (t = m.meta) ? void 0 : t.id) : '' }),
                    { formatMessage: C } = (0, j.A)(),
                    M = (0, s.useMemo)(() => {
                        var e, t, a, r;
                        return m.isShimmerVisible
                            ? (0, i.jsx)(_.Mo, { isActive: m.isShimmerActive, className: k().header, withDescription: !0 })
                            : (0, i.jsx)(_.Tw, {
                                  className: k().header,
                                  titleSize: 'xs',
                                  titleLineClamp: 1,
                                  coverUrl: null == (e = m.meta) ? void 0 : e.coverUri,
                                  title: null == (t = m.meta) ? void 0 : t.title,
                                  titleClassName: k().headerTitle,
                                  description: C({ id: 'entity-names.number-of-tracks' }, { counter: null == (a = m.meta) ? void 0 : a.tracksCount }),
                                  fallbackIconVariant: 'playlist',
                                  withCover: !0,
                                  viewAllActionLink: null == (r = m.meta) ? void 0 : r.url,
                                  headingVariant: 'h4',
                                  withDescription: !0,
                              });
                    }, [
                        C,
                        m.isShimmerActive,
                        m.isShimmerVisible,
                        null == (a = m.meta) ? void 0 : a.coverUri,
                        null == (r = m.meta) ? void 0 : r.title,
                        null == (n = m.meta) ? void 0 : n.tracksCount,
                        null == (d = m.meta) ? void 0 : d.url,
                    ]),
                    H = (0, s.useMemo)(
                        () =>
                            m.tracks.map((e, t) => {
                                var a;
                                let r = g({ entityId: e.entityId, from: A });
                                return (0, i.jsx)(
                                    I,
                                    { playContextParams: r, type: y.K.Playlist, track: e, tabIndex: h, blockIndex: b, trackIndex: t },
                                    null == (a = e.data) ? void 0 : a.getKey(t),
                                );
                            }),
                        [m.tracks, A, h, b],
                    );
                return (0, i.jsxs)('section', {
                    className: k().root,
                    ref: p,
                    'data-intersection-property-id': S,
                    ...(0, l.Am)(l.e8.musicHistory.MUSIC_HISTORY_TAB_PLAYLIST_BLOCK),
                    children: [
                        (0, i.jsx)(o.Heading, {
                            className: (0, u.$)(k().header, k().heading),
                            variant: 'h3',
                            ...(0, l.Am)(l.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_PLAYLIST),
                            children: (0, i.jsx)(v.A, { id: 'music-history.playlist' }),
                        }),
                        M,
                        (0, i.jsx)('div', { className: k().content, children: H }),
                    ],
                });
            });
            var N = a(8817),
                P = a(27510),
                f = a(76866);
            let w = (0, r.PA)((e) => {
                var t, a, r, n, d, m;
                let { vibe: h, blockIndex: b, tabIndex: p } = e,
                    {
                        experiments: S,
                        settings: { isMobile: A },
                    } = (0, c.Pjs)(),
                    { pageId: C } = (0, c.$au)(),
                    { blockIdForFrom: M } = (0, c.N8n)(),
                    H = (0, c.PT7)(),
                    { isFreemium: T } = (0, c.XCI)(),
                    [j, L] = (0, s.useState)(!1),
                    {
                        isPlaying: w,
                        togglePlay: K,
                        isCurrent: R,
                    } = (0, c.B0S)({ seeds: (null == (t = h.meta) ? void 0 : t.seeds) || [c.M19], pageIdForFrom: C, blockIdForFrom: M }),
                    D = (0, s.useId)(),
                    E = S.checkExperiment(c.zal.WebNextVibeDescription, 'on'),
                    { ref: B, intersectionPropertyId: O } = x({ id: h.id, blockIndex: b, tabIndex: p }),
                    { from: V } = (0, c.fyy)({ blockId: 'wave-'.concat(h.id) }),
                    U = (0, N.c)(() => {
                        if (!H()) {
                            if (T) return void L(!0);
                            K();
                        }
                    }),
                    Y = (0, N.c)((e) => {
                        if (A || 2 === e.detail) return void U();
                    }),
                    X = (0, P.L)(() => {
                        var e, t, a, i, r, s, l, n;
                        return E
                            ? {
                                  title: null == (e = h.meta) ? void 0 : e.title,
                                  description:
                                      null == (i = h.meta)
                                          ? void 0
                                          : i.getDescription(null != (n = null == (t = h.meta) ? void 0 : t.title) ? n : null == (a = h.meta) ? void 0 : a.description),
                              }
                            : { title: null != (l = null == (r = h.meta) ? void 0 : r.title) ? l : null == (s = h.meta) ? void 0 : s.description };
                    }),
                    z = (0, s.useCallback)(() => {
                        var e, t, a, r, s;
                        return (null == (e = h.meta) ? void 0 : e.shouldShowAgent) && (null == (t = h.meta) ? void 0 : t.agent)
                            ? (0, i.jsx)(f.nr, {
                                  agent: h.meta.agent,
                                  isPlaying: w,
                                  isCurrent: R,
                                  onPlayButtonClick: U,
                                  className: k().vibeCover,
                                  playButtonIconSize: 'm',
                              })
                            : (0, i.jsx)(_.q1, {
                                  isCurrent: R,
                                  isPlaying: w,
                                  isAvailable: !0,
                                  onPlayButtonClick: U,
                                  title: null == (a = h.meta) ? void 0 : a.title,
                                  entityCoverStyle: { backgroundColor: null == (r = h.meta) ? void 0 : r.backgroundColor },
                                  ariaDescribedBy: D,
                                  coverUri: null == (s = h.meta) ? void 0 : s.imageUrl,
                                  radius: 'round',
                                  withLoadingIndicator: !1,
                                  className: k().vibeCover,
                                  playButtonIconSize: 'm',
                              });
                    }, [
                        U,
                        R,
                        w,
                        D,
                        null == (a = h.meta) ? void 0 : a.agent,
                        null == (r = h.meta) ? void 0 : r.backgroundColor,
                        null == (n = h.meta) ? void 0 : n.imageUrl,
                        null == (d = h.meta) ? void 0 : d.shouldShowAgent,
                        null == (m = h.meta) ? void 0 : m.title,
                    ]),
                    F = (0, P.L)(() => {
                        var e;
                        return h.isShimmerVisible
                            ? (0, i.jsx)(_.Mo, { isActive: h.isShimmerActive, className: k().header, coverRadius: 'round' })
                            : (0, i.jsxs)(_.Cj, {
                                  className: (0, u.$)(k().header, k().vibeHeader),
                                  onClick: Y,
                                  ...(0, l.Am)(l.e8.musicHistory.MUSIC_HISTORY_TAB_HEADER),
                                  children: [
                                      (0, i.jsx)(_.SU, {
                                          isOpened: j,
                                          onOpenChange: L,
                                          isEnabled: T,
                                          placement: 'bottom',
                                          textVariant: 'vibe',
                                          vibeTextVariant: null == (e = h.meta) ? void 0 : e.stationType,
                                          renderChildren: z,
                                      }),
                                      (0, i.jsx)(_.Tw, { titleSize: 'xs', titleLineClamp: 1, headingVariant: 'h4', labeledForId: D, className: k().vibeTextBlock, ...X }),
                                  ],
                              });
                    }),
                    G = (0, s.useMemo)(
                        () =>
                            h.tracks.map((e, t) => {
                                var a;
                                let r = g({ entityId: e.entityId, from: V });
                                return (0, i.jsx)(
                                    I,
                                    { playContextParams: r, type: y.K.Vibe, track: e, blockIndex: b, tabIndex: p, trackIndex: t },
                                    null == (a = e.data) ? void 0 : a.getKey(t),
                                );
                            }),
                        [h.tracks, V, p, b],
                    );
                return (0, i.jsxs)('section', {
                    className: k().root,
                    ref: B,
                    'data-intersection-property-id': O,
                    ...(0, l.Am)(l.e8.musicHistory.MUSIC_HISTORY_TAB_VIBE_BLOCK),
                    children: [
                        !E &&
                            (0, i.jsx)(o.Heading, {
                                className: (0, u.$)(k().header, k().heading),
                                variant: 'h3',
                                ...(0, l.Am)(l.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_VIBE),
                                children: (0, i.jsx)(v.A, { id: 'music-history.my-vibe' }),
                            }),
                        F,
                        (0, i.jsx)('div', { className: k().content, children: G }),
                    ],
                });
            });
            var K = a(22685),
                R = a.n(K);
            let D = (0, r.PA)((e) => {
                let { tab: t, tabIndex: a, onTabShowOrHide: r, shouldHideInactiveTab: u, ...v } = e,
                    { musicHistory: y } = (0, c.Pjs)(),
                    h = (0, s.useMemo)(() => {
                        var e;
                        return null == (e = t.blocks)
                            ? void 0
                            : e
                                  .map((e, t) => {
                                      switch (e.type) {
                                          case n.D.ALBUM:
                                              return (0, i.jsx)(C, { album: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case n.D.PLAYLIST:
                                              return (0, i.jsx)(L, { playlist: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case n.D.WAVE:
                                              return (0, i.jsx)(w, { vibe: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case n.D.ARTIST:
                                              return (0, i.jsx)(M, { artist: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case n.D.SEARCH:
                                          case n.D.OTHER:
                                              return (0, i.jsx)(T, { common: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          default:
                                              return null;
                                      }
                                  })
                                  .filter((e) => e);
                    }, [t.blocks, a]),
                    _ = (0, m.useFormatDate)(),
                    g = (0, s.useRef)(null),
                    { observeElement: x } = (0, s.useContext)(d.MusicHistoryIntersectionObserverContext),
                    b = y.datesMap.get(t.date);
                return (
                    (0, s.useEffect)(() => {
                        x({
                            elementId: t.date,
                            elementRef: g,
                            index: 0,
                            onShow: () => {
                                y.setDatesMap(t.date, !0), r();
                            },
                            onHide: () => {
                                y.setDatesMap(t.date, !1), r();
                            },
                        });
                    }, [y, y.datesMap, x, r, t.date]),
                    (0, i.jsxs)('div', {
                        'aria-hidden': !b && u,
                        ref: g,
                        'data-intersection-property-id': t.date,
                        className: R().root,
                        ...v,
                        ...{ inert: !!(!b && u) },
                        ...(0, l.Am)(l.e8.musicHistory.MUSIC_HISTORY_TAB),
                        children: [
                            (0, i.jsx)(o.Heading, {
                                'data-date-anchor': t.date,
                                className: R().date,
                                variant: 'h2',
                                size: 'm',
                                ...(0, l.Am)(l.e8.musicHistory.MUSIC_HISTORY_TAB_DATE),
                                children: _(t.date),
                            }),
                            (0, i.jsx)('div', { className: R().content, children: h }),
                        ],
                    })
                );
            });
        },
    },
]);
