(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7679],
    {
        5001: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => n });
            var s = i(49574);
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
        8246: (e, t, i) => {
            'use strict';
            var s;
            i.d(t, { x: () => s }),
                (function (e) {
                    (e.ASC = 'asc'), (e.DESC = 'desc');
                })(s || (s = {}));
        },
        8777: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => n });
            var s = i(49574);
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
        15498: (e) => {
            e.exports = {
                root: 'LabelArtistsPage_root__smTJJ',
                scrollContainer: 'LabelArtistsPage_scrollContainer__alDjs',
                important: 'LabelArtistsPage_important__pOZpi',
                footer: 'LabelArtistsPage_footer__JU2P3',
                item: 'LabelArtistsPage_item__kol2m',
                content: 'LabelArtistsPage_content__4hjcX',
            };
        },
        24159: (e) => {
            e.exports = {
                root: 'SortDropdown_root__d1JmQ',
                button: 'SortDropdown_button__SjTI7',
                header: 'SortDropdown_header__kj8yV',
                container: 'SortDropdown_container__dyVF_',
            };
        },
        26089: (e, t, i) => {
            'use strict';
            i.d(t, { useSendEventOnClipShowedOrHidden: () => o });
            var s = i(16172),
                n = i(52068),
                r = i(91027),
                l = i(49574);
            let o = (e) => {
                let t = (0, n.st)(),
                    { hash: i } = (0, n.gf)(),
                    { pageId: o } = (0, l.$au)(),
                    { tabId: a, tabPos: d, isTabSelectedByDefault: m } = (0, l.Rro)(),
                    { blockType: u, blockId: c, blockPosX: b, blockPosY: h, mainObjectType: v, mainObjectId: p } = (0, l.N8n)(),
                    { objectsCount: g, objectType: P, objectId: _, objectPosX: x, objectPosY: y } = (0, l.Jfv)(),
                    f = (0, l.UlF)(),
                    { skeleton: N } = (0, l.bCF)();
                return (0, r.c)((n) => {
                    if (!t || !o || !l.xKB.includes(o)) return;
                    let r = {
                        hash: i,
                        pageId: o,
                        entityType: u,
                        entityId: c,
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
                        N && (r.skeletonId = N),
                        v && (r.mainObjectType = v),
                        p && (r.mainObjectId = p);
                    let S = (0, s.Fx)({ params: r, logger: f, context: 'useSendEventOnClipShowedOrHidden' });
                    if (S) {
                        if (n) return void (0, s.Pf)(t.evgenInstance, S);
                        (0, s.nv)(t.evgenInstance, S);
                    }
                });
            };
        },
        26740: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => n });
            var s = i(37215);
            let n = (e) => !!e && (e === s.g.RATING || e === s.g.YEAR);
        },
        30310: (e) => {
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
        32381: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s.SomethingWentWrong });
            var s = i(60194);
        },
        43740: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => n });
            var s = i(46862);
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
        44726: (e, t, i) => {
            'use strict';
            i.d(t, { LabelPage: () => A });
            var s = i(32290),
                n = i(63618),
                r = i(96103),
                l = i(21916),
                o = i(55178),
                a = i(60900),
                d = i(39407),
                m = i(59824),
                u = i(91027),
                c = i(63423),
                b = i(82586),
                h = i(46049),
                v = i(71926),
                p = i(30039),
                g = i(32381),
                P = i(16486),
                _ = i(58634),
                x = i(75645),
                y = i(49574),
                f = i(44574),
                N = i(89615),
                S = i(95204),
                j = i.n(S);
            let A = (0, r.PA)((e) => {
                var t, i, r, S;
                let { labelId: A, preloadedLabel: L } = e,
                    {
                        label: C,
                        settings: { isMobile: T },
                    } = (0, y.Pjs)(),
                    { formatMessage: k } = (0, a.A)(),
                    { contentScrollRef: O, setContentScrollRef: I } = (0, y.gKY)(),
                    { notify: w } = (0, y.lkh)(),
                    { shareLink: E } = (0, y.bNS)('/label/:labelId', { params: { labelId: null != (i = C.id) ? i : '' } }),
                    R = (0, o.useRef)(null),
                    B = (0, o.useRef)(0);
                (0, N.Q)({ id: Number(C.id), name: null != (r = C.name) ? r : '', type: null != (S = C.type) ? S : '' }, N.T.ROOT);
                let W = (0, u.c)(async () => {
                        await window.navigator.clipboard.writeText(E),
                            w((0, s.jsx)(f.Do, { entityVariant: y.Yxq.LABEL, entityTitle: C.name || '' }), { containerId: y.uQT.INFO });
                    }),
                    K = (0, o.useMemo)(
                        () =>
                            T
                                ? (0, s.jsx)(c.$, {
                                      className: j().button,
                                      onClick: W,
                                      icon: (0, s.jsx)(b.Icon, { variant: 'share', size: 'xxs' }),
                                      size: 'l',
                                      radius: 'xxxl',
                                      ...(0, m.Am)(m.Xk.label.SHARE_COPY_LINK_BUTTON),
                                  })
                                : (0, s.jsx)(c.$, {
                                      className: j().button,
                                      onClick: W,
                                      icon: (0, s.jsx)(b.Icon, { variant: 'share', size: 'xxs' }),
                                      size: 'l',
                                      radius: 'xxxl',
                                      ...(0, m.Am)(m.Xk.label.SHARE_COPY_LINK_BUTTON),
                                      children: (0, s.jsx)(d.A, { id: 'interface-actions.share' }),
                                  }),
                        [T, W],
                    ),
                    U = C.isPublisher ? k({ id: 'entity-names.publisher' }) : k({ id: 'entity-names.label' }),
                    F = C.isPublisher ? k({ id: 'entity-names.non-music-releases' }) : k({ id: 'entity-names.releases' });
                return ((0, o.useEffect)(
                    () => () => {
                        C.reset();
                    },
                    [C],
                ),
                C.isNotFound && (0, l.notFound)(),
                (0, o.useEffect)(
                    () => () => {
                        B.current = 0;
                    },
                    [C],
                ),
                (0, o.useEffect)(() => {
                    C.isRejected &&
                        B &&
                        !(B.current > 0) &&
                        (w((0, s.jsx)(f.hT, { error: k({ id: 'error-messages.error-load-part-page' }) }), { containerId: y.uQT.ERROR }), B.current++);
                }, [C.isRejected, w, k]),
                (0, y.Jzs)(C.isResolved),
                C.isNeededToLoad && (0, o.use)(C.getData({ labelId: Number(A), preloadedLabel: L })),
                C.isRejected && !C.isNotFound)
                    ? (0, s.jsx)(g.w, {})
                    : (0, s.jsx)(y.nVz, {
                          pageId: y._Q$.LABEL,
                          children: (0, s.jsxs)(x.hO, {
                              scrollElement: O,
                              children: [
                                  (0, s.jsx)(f.Y9, { innerHeaderRef: R }),
                                  (0, s.jsxs)(h.N, {
                                      className: j().root,
                                      containerClassName: j().content,
                                      ref: I,
                                      ...(0, m.Am)(m.Xk.label.LABEL_PAGE),
                                      children: [
                                          (0, s.jsxs)('div', {
                                              className: j().header,
                                              children: [
                                                  (0, s.jsx)(v.Caption, { variant: 'div', type: 'text', size: 'm', weight: 'medium', children: U }),
                                                  (0, s.jsx)(p.RR, { className: j().title, title: C.name || '', headingVariant: 'h1' }),
                                                  K,
                                              ],
                                          }),
                                          C.hasAlbums &&
                                              C.albums &&
                                              (0, s.jsx)(P.pZ, {
                                                  isShimmerVisible: C.isLoading,
                                                  isShimmerActive: !0,
                                                  className: j().carouselContainer,
                                                  headerClassName: (0, n.$)(j().carouselBlock, j().carouselBlockHeader),
                                                  containerClassName: j().carouselBlock,
                                                  title: F,
                                                  viewAllActionLink: C.albumsUrl,
                                                  albums: C.albums,
                                                  headingVariant: 'h2',
                                                  ...(0, m.Am)(m.Xk.label.RELEASES_CAROUSEL),
                                              }),
                                          C.hasArtists &&
                                              (0, s.jsx)(f.OY, {
                                                  isShimmerVisible: C.isLoading,
                                                  isShimmerActive: !0,
                                                  headerClassName: (0, n.$)(j().carouselBlockHeader, j().carouselBlock),
                                                  containerClassName: j().carouselBlock,
                                                  viewAllActionLink: C.artistsUrl,
                                                  title: k({ id: 'entity-names.artists' }),
                                                  headingVariant: 'h2',
                                                  ...(0, m.Am)(m.Xk.label.ARTISTS_CAROUSEL),
                                                  children: null == (t = C.artists) ? void 0 : t.map((e) => (0, s.jsx)(_.ao, { artist: e, contentLinesCount: 3 }, e.id)),
                                              }),
                                          (0, s.jsx)(f.A, { children: (0, s.jsx)(f.wi, { className: j().footer }) }),
                                      ],
                                  }),
                              ],
                          }),
                      });
            });
        },
        46789: (e, t, i) => {
            'use strict';
            i.d(t, { useOnLikeClick: () => u });
            var s = i(32290),
                n = i(92708),
                r = i(55178),
                l = i(60900),
                o = i(63380),
                a = i(49574),
                d = i(44574);
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
                u = (e) => {
                    let { user: t, fullscreenVideoPlayer: i, collection: u } = (0, a.Pjs)(),
                        { notify: c } = (0, a.lkh)(),
                        [b, h] = (0, r.useState)(!1),
                        { formatMessage: v } = (0, l.A)();
                    return (0, r.useCallback)(async () => {
                        if (!e) return;
                        let r = i.modal.isOpened ? a.uQT.FULLSCREEN_INFO : a.uQT.INFO,
                            l = i.modal.isOpened ? a.uQT.FULLSCREEN_ERROR : a.uQT.ERROR;
                        if (!t.isAuthorized) return void c((0, s.jsx)(d.hT, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l });
                        if (b) return;
                        let p = { ...(0, n.HO)(e), isLiked: !e.isLiked };
                        h(!0);
                        let g = await e.toggleLike();
                        h(!1),
                            u.clips.reset(),
                            g === o.f.OK
                                ? c((0, s.jsx)(m, { clip: p }), { containerId: r })
                                : c((0, s.jsx)(d.hT, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: l });
                    }, [e, t.isAuthorized, b, v, c, i.modal.isOpened, u.clips]);
                };
        },
        52923: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 7276)),
                Promise.resolve().then(i.bind(i, 29680)),
                Promise.resolve().then(i.bind(i, 76822)),
                Promise.resolve().then(i.bind(i, 520)),
                Promise.resolve().then(i.bind(i, 34883)),
                Promise.resolve().then(i.bind(i, 7462)),
                Promise.resolve().then(i.bind(i, 18583)),
                Promise.resolve().then(i.bind(i, 16472)),
                Promise.resolve().then(i.bind(i, 83861)),
                Promise.resolve().then(i.bind(i, 91253)),
                Promise.resolve().then(i.bind(i, 63371)),
                Promise.resolve().then(i.bind(i, 15807)),
                Promise.resolve().then(i.bind(i, 91853)),
                Promise.resolve().then(i.bind(i, 96036)),
                Promise.resolve().then(i.bind(i, 86955)),
                Promise.resolve().then(i.bind(i, 11067)),
                Promise.resolve().then(i.bind(i, 5942)),
                Promise.resolve().then(i.bind(i, 70390)),
                Promise.resolve().then(i.bind(i, 43742)),
                Promise.resolve().then(i.bind(i, 78176)),
                Promise.resolve().then(i.bind(i, 45754)),
                Promise.resolve().then(i.bind(i, 22370)),
                Promise.resolve().then(i.bind(i, 10466)),
                Promise.resolve().then(i.bind(i, 41677)),
                Promise.resolve().then(i.bind(i, 73749)),
                Promise.resolve().then(i.bind(i, 10583)),
                Promise.resolve().then(i.bind(i, 77435)),
                Promise.resolve().then(i.bind(i, 89549)),
                Promise.resolve().then(i.bind(i, 88446)),
                Promise.resolve().then(i.bind(i, 40126)),
                Promise.resolve().then(i.bind(i, 62066)),
                Promise.resolve().then(i.bind(i, 69555)),
                Promise.resolve().then(i.bind(i, 97920)),
                Promise.resolve().then(i.bind(i, 94872)),
                Promise.resolve().then(i.bind(i, 65563)),
                Promise.resolve().then(i.bind(i, 44726)),
                Promise.resolve().then(i.bind(i, 71768)),
                Promise.resolve().then(i.bind(i, 65650)),
                Promise.resolve().then(i.bind(i, 59564)),
                Promise.resolve().then(i.bind(i, 9471)),
                Promise.resolve().then(i.bind(i, 78305)),
                Promise.resolve().then(i.bind(i, 70632)),
                Promise.resolve().then(i.bind(i, 35058)),
                Promise.resolve().then(i.bind(i, 85743)),
                Promise.resolve().then(i.bind(i, 90923)),
                Promise.resolve().then(i.bind(i, 17595)),
                Promise.resolve().then(i.bind(i, 41540)),
                Promise.resolve().then(i.bind(i, 48462)),
                Promise.resolve().then(i.bind(i, 8868)),
                Promise.resolve().then(i.bind(i, 12350)),
                Promise.resolve().then(i.bind(i, 95481)),
                Promise.resolve().then(i.bind(i, 47745)),
                Promise.resolve().then(i.bind(i, 12989)),
                Promise.resolve().then(i.bind(i, 2969)),
                Promise.resolve().then(i.bind(i, 84051)),
                Promise.resolve().then(i.bind(i, 27789)),
                Promise.resolve().then(i.bind(i, 70435)),
                Promise.resolve().then(i.bind(i, 19875)),
                Promise.resolve().then(i.bind(i, 54391)),
                Promise.resolve().then(i.bind(i, 63529)),
                Promise.resolve().then(i.bind(i, 73818)),
                Promise.resolve().then(i.bind(i, 20599)),
                Promise.resolve().then(i.bind(i, 84782)),
                Promise.resolve().then(i.bind(i, 30915)),
                Promise.resolve().then(i.bind(i, 70608)),
                Promise.resolve().then(i.bind(i, 18746)),
                Promise.resolve().then(i.bind(i, 71610)),
                Promise.resolve().then(i.bind(i, 23352)),
                Promise.resolve().then(i.bind(i, 10936)),
                Promise.resolve().then(i.bind(i, 2792)),
                Promise.resolve().then(i.bind(i, 22714)),
                Promise.resolve().then(i.bind(i, 37240)),
                Promise.resolve().then(i.bind(i, 3064)),
                Promise.resolve().then(i.bind(i, 51012)),
                Promise.resolve().then(i.bind(i, 9848)),
                Promise.resolve().then(i.bind(i, 47498)),
                Promise.resolve().then(i.bind(i, 8152)),
                Promise.resolve().then(i.bind(i, 43474)),
                Promise.resolve().then(i.bind(i, 46200)),
                Promise.resolve().then(i.bind(i, 5537)),
                Promise.resolve().then(i.bind(i, 34186)),
                Promise.resolve().then(i.bind(i, 56008)),
                Promise.resolve().then(i.bind(i, 67732)),
                Promise.resolve().then(i.bind(i, 30787)),
                Promise.resolve().then(i.bind(i, 65476)),
                Promise.resolve().then(i.bind(i, 83416)),
                Promise.resolve().then(i.bind(i, 31010)),
                Promise.resolve().then(i.bind(i, 19383)),
                Promise.resolve().then(i.bind(i, 3313)),
                Promise.resolve().then(i.bind(i, 81619)),
                Promise.resolve().then(i.bind(i, 83808)),
                Promise.resolve().then(i.bind(i, 22191)),
                Promise.resolve().then(i.bind(i, 14858)),
                Promise.resolve().then(i.bind(i, 61945)),
                Promise.resolve().then(i.bind(i, 83920)),
                Promise.resolve().then(i.bind(i, 49545)),
                Promise.resolve().then(i.bind(i, 3796)),
                Promise.resolve().then(i.bind(i, 40953)),
                Promise.resolve().then(i.bind(i, 30542)),
                Promise.resolve().then(i.bind(i, 59121)),
                Promise.resolve().then(i.bind(i, 71773)),
                Promise.resolve().then(i.bind(i, 34284)),
                Promise.resolve().then(i.bind(i, 46151)),
                Promise.resolve().then(i.bind(i, 32087)),
                Promise.resolve().then(i.bind(i, 5701)),
                Promise.resolve().then(i.bind(i, 10659)),
                Promise.resolve().then(i.bind(i, 68135)),
                Promise.resolve().then(i.bind(i, 75265)),
                Promise.resolve().then(i.bind(i, 36321)),
                Promise.resolve().then(i.bind(i, 29098)),
                Promise.resolve().then(i.bind(i, 92191)),
                Promise.resolve().then(i.bind(i, 27120)),
                Promise.resolve().then(i.bind(i, 53022)),
                Promise.resolve().then(i.bind(i, 22748)),
                Promise.resolve().then(i.bind(i, 84199)),
                Promise.resolve().then(i.bind(i, 81218)),
                Promise.resolve().then(i.bind(i, 90169)),
                Promise.resolve().then(i.bind(i, 6429)),
                Promise.resolve().then(i.bind(i, 44128)),
                Promise.resolve().then(i.bind(i, 31286)),
                Promise.resolve().then(i.bind(i, 92496)),
                Promise.resolve().then(i.bind(i, 21183)),
                Promise.resolve().then(i.bind(i, 59888)),
                Promise.resolve().then(i.bind(i, 95112)),
                Promise.resolve().then(i.bind(i, 57594)),
                Promise.resolve().then(i.bind(i, 26069)),
                Promise.resolve().then(i.bind(i, 4433)),
                Promise.resolve().then(i.bind(i, 50)),
                Promise.resolve().then(i.bind(i, 11262));
        },
        56797: (e, t, i) => {
            'use strict';
            i.d(t, { useSendEventOnClipNavigated: () => o });
            var s = i(16172),
                n = i(52068),
                r = i(91027),
                l = i(49574);
            let o = (e) => {
                let t = (0, n.st)(),
                    { hash: i } = (0, n.gf)(),
                    { pageId: o } = (0, l.$au)(),
                    { tabId: a, tabPos: d, isTabSelectedByDefault: m } = (0, l.Rro)(),
                    { skeleton: u } = (0, l.bCF)(),
                    { blockType: c, blockId: b, blockPosX: h, blockPosY: v, mainObjectType: p, mainObjectId: g } = (0, l.N8n)(),
                    { objectsCount: P, objectType: _, objectId: x, objectPosX: y, objectPosY: f } = (0, l.Jfv)(),
                    N = (0, l.UlF)();
                return (0, r.c)(() => {
                    if (!t || !o || !l.xKB.includes(o)) return;
                    let n = {
                        hash: i,
                        pageId: o,
                        entityType: c,
                        entityId: b,
                        entityPosX: h,
                        entityPosY: v,
                        objectId: x,
                        objectType: _,
                        objectPosX: y,
                        objectPosY: f,
                        objectsCount: P,
                        from: l.Wft[o],
                        to: s.QT.VideoScreen,
                    };
                    l.qG9.includes(o) && ((n.tabId = a), (n.tabPos = d), (n.isTabSelectedByDefault = m)),
                        u && (n.skeletonId = u),
                        p && (n.mainObjectType = p),
                        g && (n.mainObjectId = g);
                    let r = (0, s.Fx)({ params: n, logger: N, context: 'useSendEventOnClipNavigated' });
                    r && e && (0, s.QS)(t.evgenInstance, r);
                });
            };
        },
        60194: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => p });
            var s = i(32290),
                n = i(63618),
                r = i(96103),
                l = i(55178),
                o = i(60900),
                a = i(39407),
                d = i(63423),
                m = i(82586),
                u = i(71926),
                c = i(49574),
                b = i(44574),
                h = i(30310),
                v = i.n(h);
            let p = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: r } = (0, o.A)(),
                    h = r({ id: 'error-messages.something-went-wrong' });
                (0, c.CgZ)(h);
                let { sendRefreshEvent: p } = (0, c.cYT)(),
                    g = (0, l.useCallback)(() => {
                        p(), (window.location.href = c.Zyd.main.href);
                    }, [p]),
                    { contentRef: P } = (0, c.gKY)();
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
                                (0, s.jsx)(u.Heading, { className: (0, n.$)(v().title, v().important), variant: 'h3', size: 'xs', children: h }),
                                (0, s.jsxs)(u.Caption, {
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
                                    children: (0, s.jsxs)(u.Caption, {
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
        62066: (e, t, i) => {
            'use strict';
            i.d(t, { useSort: () => o });
            var s = i(55178),
                n = i(37215),
                r = i(49574),
                l = i(26740);
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
        65563: (e, t, i) => {
            'use strict';
            i.d(t, { LabelNotFoundPage: () => r });
            var s = i(32290),
                n = i(80719);
            let r = () => (0, s.jsx)(n.M, {});
        },
        69555: (e, t, i) => {
            'use strict';
            i.d(t, { SortDropdown: () => _ });
            var s = i(32290),
                n = i(96103),
                r = i(55178),
                l = i(39407),
                o = i(59824),
                a = i(37215),
                d = i(91027),
                m = i(63423),
                u = i(56758),
                c = i(82586),
                b = i(71926),
                h = i(49574),
                v = i(26740),
                p = i(24159),
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
                                    ? (0, s.jsx)(m.$, { radius: 'xxxl', className: g().button, icon: (0, s.jsx)(c.Icon, { variant: 'filter', size: 'xs' }) })
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
                                              (0, s.jsx)(c.Icon, { size: 'xxs', variant: 'arrowDown', ...(0, o.Am)(o.Kq.sort.SORT_DROPDOWN_BUTTON_ICON) }),
                                          ],
                                      }),
                            [p, i.sortBy],
                        );
                    return (0, s.jsx)(u.ms, {
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
                        children: Object.values(a.g).map((e) => (0, s.jsx)(u.c$, { id: e, label: P[e], ...(0, o.Am)(o.Kq.sort.SORT_DROPDOWN_ITEM) }, e)),
                    });
                });
        },
        72480: (e, t, i) => {
            'use strict';
            i.d(t, {
                z8: () => p,
                l6: () => d,
                z4: () => m,
                JL: () => u.J,
                KX: () => c.useOnLikeClick,
                Hx: () => s.useSendEventOnClipClosed,
                _7: () => n.useSendEventOnClipNavigated,
                QV: () => r.useSendEventOnClipOpened,
                Mn: () => l.useSendEventOnClipShowedOrHidden,
                Cc: () => b.useVideoModal,
                df: () => h.useWithClips,
            });
            var s = i(78795),
                n = i(56797),
                r = i(96849),
                l = i(26089),
                o = i(60754),
                a = i(49574);
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
            var u = i(94315),
                c = i(46789),
                b = i(99872),
                h = i(84427),
                v = i(95428);
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
        76822: (e, t, i) => {
            'use strict';
            let s;
            i.d(t, { useMetrika: () => l });
            var n = i(55178),
                r = i(43740);
            let l = () => {
                let e = (s || (s = (0, r.a)()), s),
                    t = (0, n.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, n.useMemo)(() => ({ ...e, isLoaded: t }), [t]);
            };
        },
        77546: (e) => {
            e.exports = {
                root: 'LabelAlbumsPage_root__xyWi4',
                scrollContainer: 'LabelAlbumsPage_scrollContainer__zRUlM',
                important: 'LabelAlbumsPage_important__s18oL',
                footer: 'LabelAlbumsPage_footer__dcXFk',
                item: 'LabelAlbumsPage_item__Qjz9F',
                content: 'LabelAlbumsPage_content__jOWKZ',
            };
        },
        78795: (e, t, i) => {
            'use strict';
            i.d(t, { useSendEventOnClipClosed: () => o });
            var s = i(16172),
                n = i(52068),
                r = i(91027),
                l = i(49574);
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
        79490: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => n });
            var s = i(71483);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === s.K.Generative;
            }
        },
        84427: (e, t, i) => {
            'use strict';
            i.d(t, { useWithClips: () => n });
            var s = i(49574);
            let n = () => {
                let {
                    settings: { isMobile: e },
                } = (0, s.Pjs)();
                return !e;
            };
        },
        86519: (e, t, i) => {
            'use strict';
            i.d(t, { mi: () => m.SortDropdown, wY: () => d, WG: () => s.W, hl: () => r, y8: () => l.useSort });
            var s = i(26740),
                n = i(8246);
            let r = (e) => !!e && (e === n.x.ASC || e === n.x.DESC);
            var l = i(62066),
                o = i(60754),
                a = i(37215);
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
            var m = i(69555);
        },
        88949: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => n });
            var s = i(49574);
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
        89615: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => d, T: () => a });
            var s = i(55178),
                n = i(49574),
                r = i(88949),
                l = i(8777),
                o = i(5001),
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
        94315: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => n });
            var s = i(49574);
            let n = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: i } = (0, s.uvd)(s.Zyd.video.href, { query: { [s.K3F.IDS]: e.join(','), [s.K3F.ACTIVE_INDEX]: String(t) } });
                return i;
            };
        },
        94872: (e, t, i) => {
            'use strict';
            i.d(t, { LabelArtistsPage: () => x });
            var s = i(32290),
                n = i(63618),
                r = i(96103),
                l = i(21916),
                o = i(55178),
                a = i(60900),
                d = i(59824),
                m = i(91027),
                u = i(71926),
                c = i(32381),
                b = i(58634),
                h = i(75645),
                v = i(49574),
                p = i(44574),
                g = i(89615),
                P = i(15498),
                _ = i.n(P);
            let x = (0, r.PA)((e) => {
                let { labelId: t, preloadedLabel: i, preloadedArtists: r } = e,
                    {
                        label: { id: P, name: x, type: y, artistsSubpage: f, reset: N, isNeededToLoad: S, getData: j },
                        settings: { isMobile: A },
                    } = (0, v.Pjs)(),
                    { formatMessage: L } = (0, a.A)(),
                    { contentScrollRef: C, setContentScrollRef: T } = (0, v.gKY)(),
                    k = (0, v.W6M)(),
                    O = L({ id: 'page.label-artists-header' }, { labelName: x }),
                    I = (0, m.c)((e) => {
                        f.getData({ labelId: Number(t), page: e, pageSize: 20 });
                    });
                (0, v.XcE)(f.pagesLoader, I),
                    (0, o.useEffect)(
                        () => () => {
                            N(), f.reset();
                        },
                        [N, f],
                    ),
                    f.isNotFound && (0, l.notFound)(),
                    (0, g.Q)({ id: Number(P), name: null != x ? x : '', type: null != y ? y : '' }, g.T.ARTISTS),
                    (0, v.Jzs)(f.isResolved);
                let w = (0, o.useMemo)(() => ({ Footer: () => (0, s.jsx)(p.A, { children: (0, s.jsx)(p.wi, { className: _().footer }) }) }), []),
                    E = L({ id: 'entity-names.label-artists-list' }),
                    R = [];
                if (
                    (f.isNeededToLoad && R.push(f.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedArtists: r })),
                    S && R.push(j({ labelId: Number(t), preloadedLabel: i, withLabelEntities: !1 })),
                    R.length && (0, o.use)(Promise.allSettled(R)),
                    f.isRejected && !f.isNotFound)
                )
                    return (0, s.jsx)(c.w, {});
                let B = f.isShimmerVisible ? 20 : f.items.length;
                return (0, s.jsx)(v.nVz, {
                    pageId: v._Q$.LABEL_ARTISTS,
                    children: (0, s.jsx)(h.hO, {
                        scrollElement: C,
                        outerTitle: O,
                        children: (0, s.jsxs)('div', {
                            className: _().root,
                            ...(0, d.Am)(d.Xk.label.LABEL_ARTISTS_PAGE),
                            children: [
                                (0, s.jsx)(p.Y9, {
                                    variant: p.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: k.canBack,
                                    className: _().header,
                                    children: (0, s.jsx)(u.Heading, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: O }),
                                }),
                                (0, s.jsx)(p.$$, {
                                    className: (0, n.$)(_().scrollContainer, _().important),
                                    listClassName: _().content,
                                    itemClassName: _().item,
                                    customComponents: w,
                                    itemContentCallback: (e) => {
                                        let t = f.items[e],
                                            i = L({ id: 'loading-messages.entity-is-loading' }, { entityName: L({ id: 'entity-names.artist' }) });
                                        return t
                                            ? (0, s.jsx)(b.ao, { artist: t, contentLinesCount: 4 }, t.id)
                                            : (0, s.jsx)(p.Vt, { 'aria-label': i, round: !0, centered: !0, linesCount: 4 });
                                    },
                                    totalCount: B,
                                    onGetDataByPage: I,
                                    pageSize: 20,
                                    totalRequests: f.requestsCount,
                                    handleRef: T,
                                    context: { listAriaLabel: E },
                                    isMobileLayout: A,
                                    useWindowScroll: A,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        95204: (e) => {
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
        96849: (e, t, i) => {
            'use strict';
            i.d(t, { useSendEventOnClipOpened: () => o });
            var s = i(16172),
                n = i(52068),
                r = i(91027),
                l = i(49574);
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
        97920: (e, t, i) => {
            'use strict';
            i.d(t, { LabelAlbumsPage: () => y });
            var s = i(32290),
                n = i(63618),
                r = i(96103),
                l = i(21916),
                o = i(55178),
                a = i(60900),
                d = i(59824),
                m = i(91027),
                u = i(71926),
                c = i(32381),
                b = i(16486),
                h = i(75645),
                v = i(86519),
                p = i(49574),
                g = i(44574),
                P = i(89615),
                _ = i(77546),
                x = i.n(_);
            let y = (0, r.PA)((e) => {
                let { labelId: t, preloadedLabel: i, preloadedAlbums: r, sortBy: _ } = e,
                    {
                        label: { id: y, type: f, name: N, albumsSubpage: S, reset: j, isNeededToLoad: A, getData: L, isPublisher: C },
                        settings: { isMobile: T },
                    } = (0, p.Pjs)(),
                    { formatMessage: k } = (0, a.A)(),
                    { contentScrollRef: O, setContentScrollRef: I } = (0, p.gKY)(),
                    w = (0, p.W6M)(),
                    E = C ? k({ id: 'page.label-podcast-header' }, { labelName: N }) : k({ id: 'page.label-albums-header' }, { labelName: N }),
                    R = (0, m.c)((e) => {
                        var i;
                        S.getData({ labelId: Number(t), page: e, pageSize: 20, sortBy: null != (i = S.sort.sortBy) ? i : _ });
                    }),
                    B = (0, m.c)(() => {
                        S.reset(), R(0);
                    });
                (0, v.y8)({ sortModel: S.sort }),
                    (0, p.XcE)(S.pagesLoader, R),
                    (0, o.useEffect)(
                        () => () => {
                            j(), S.reset();
                        },
                        [j, S],
                    ),
                    S.isNotFound && (0, l.notFound)(),
                    (0, P.Q)({ id: Number(y), name: null != N ? N : '', type: null != f ? f : '' }, P.T.ALBUMS),
                    (0, p.Jzs)(S.isResolved);
                let W = (0, o.useMemo)(() => ({ Footer: () => (0, s.jsx)(g.A, { children: (0, s.jsx)(g.wi, { className: x().footer }) }) }), []),
                    K = k({ id: 'entity-names.label-albums-list' }),
                    U = [];
                if (S.isNeededToLoad) {
                    var F;
                    let e = S.sort.sortBy === _ || void 0 === S.sort.sortBy;
                    U.push(S.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedAlbums: e ? r : void 0, sortBy: null != (F = S.sort.sortBy) ? F : _ }));
                }
                if (
                    (A && U.push(L({ labelId: Number(t), preloadedLabel: i, withLabelEntities: !1 })),
                    U.length && (0, o.use)(Promise.allSettled(U)),
                    S.isRejected && !S.isNotFound)
                )
                    return (0, s.jsx)(c.w, {});
                let z = S.isShimmerVisible ? 20 : S.items.length;
                return (0, s.jsx)(p.nVz, {
                    pageId: p._Q$.LABEL_ALBUMS,
                    children: (0, s.jsx)(h.hO, {
                        scrollElement: O,
                        outerTitle: E,
                        children: (0, s.jsxs)('div', {
                            className: x().root,
                            ...(0, d.Am)(d.Xk.label.LABEL_ALBUMS_PAGE),
                            children: [
                                (0, s.jsxs)(g.Y9, {
                                    variant: g.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: w.canBack,
                                    children: [
                                        (0, s.jsx)(u.Heading, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: E }),
                                        (0, s.jsx)(v.mi, { sortModel: S.sort, onSort: B }),
                                    ],
                                }),
                                (0, s.jsx)(g.$$, {
                                    className: (0, n.$)(x().scrollContainer, x().important),
                                    listClassName: x().content,
                                    itemClassName: x().item,
                                    customComponents: W,
                                    itemContentCallback: (e) => {
                                        let t = S.items[e],
                                            i = k({ id: 'loading-messages.entity-is-loading' }, { entityName: k({ id: 'entity-names.album' }) });
                                        return t
                                            ? (0, s.jsx)(b.aX, { album: t, contentLinesCount: 4, withAddition: !t.isNonMusic, withLikesCount: t.isNonMusic }, t.id)
                                            : (0, s.jsx)(g.Vt, { 'aria-label': i, linesCount: 4 });
                                    },
                                    totalCount: z,
                                    onGetDataByPage: R,
                                    pageSize: 20,
                                    totalRequests: S.requestsCount,
                                    handleRef: I,
                                    context: { listAriaLabel: K },
                                    isMobileLayout: T,
                                    useWindowScroll: T,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        99872: (e, t, i) => {
            'use strict';
            i.d(t, { useVideoModal: () => l });
            var s = i(91027),
                n = i(49574),
                r = i(94315);
            let l = () => {
                let { fullscreenVideoPlayer: e } = (0, n.Pjs)(),
                    t = (0, n.pqZ)();
                return (0, s.c)(function (i) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    e.setIds(i), e.setClipIndex(s), t((0, r.J)(i, s)), e.modal.open();
                });
            };
        },
    },
]);
