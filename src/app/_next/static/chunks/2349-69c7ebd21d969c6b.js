(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2349],
    {
        2816: (e, t, i) => {
            'use strict';
            i.d(t, { useOnLikeClick: () => u });
            var s = i(62936),
                n = i(16264),
                r = i(44020),
                l = i(47480),
                o = i(21192),
                a = i(42561),
                d = i(85906);
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
        3122: (e, t, i) => {
            'use strict';
            i.d(t, { LabelPage: () => A });
            var s = i(62936),
                n = i(79950),
                r = i(19718),
                l = i(69526),
                o = i(44020),
                a = i(47480),
                d = i(26731),
                m = i(8669),
                u = i(59935),
                c = i(5099),
                b = i(85742),
                h = i(14501),
                v = i(20418),
                p = i(35085),
                g = i(65438),
                P = i(90914),
                _ = i(11334),
                x = i(92229),
                y = i(42561),
                f = i(85906),
                N = i(85075),
                S = i(88452),
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
        7932: (e, t, i) => {
            'use strict';
            i.d(t, { useVideoModal: () => l });
            var s = i(59935),
                n = i(42561),
                r = i(36887);
            let l = () => {
                let { fullscreenVideoPlayer: e } = (0, n.Pjs)(),
                    t = (0, n.pqZ)();
                return (0, s.c)(function (i) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    e.setIds(i), e.setClipIndex(s), t((0, r.J)(i, s)), e.modal.open();
                });
            };
        },
        9834: (e) => {
            e.exports = {
                root: 'LabelArtistsPage_root__smTJJ',
                scrollContainer: 'LabelArtistsPage_scrollContainer__alDjs',
                important: 'LabelArtistsPage_important__pOZpi',
                footer: 'LabelArtistsPage_footer__JU2P3',
                item: 'LabelArtistsPage_item__kol2m',
                content: 'LabelArtistsPage_content__4hjcX',
            };
        },
        10969: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => n });
            var s = i(42561);
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
        13093: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 50576)),
                Promise.resolve().then(i.bind(i, 59260)),
                Promise.resolve().then(i.bind(i, 54802)),
                Promise.resolve().then(i.bind(i, 70036)),
                Promise.resolve().then(i.bind(i, 62967)),
                Promise.resolve().then(i.bind(i, 91738)),
                Promise.resolve().then(i.bind(i, 25467)),
                Promise.resolve().then(i.bind(i, 87740)),
                Promise.resolve().then(i.bind(i, 89457)),
                Promise.resolve().then(i.bind(i, 70892)),
                Promise.resolve().then(i.bind(i, 90031)),
                Promise.resolve().then(i.bind(i, 90339)),
                Promise.resolve().then(i.bind(i, 57297)),
                Promise.resolve().then(i.bind(i, 14848)),
                Promise.resolve().then(i.bind(i, 82447)),
                Promise.resolve().then(i.bind(i, 61387)),
                Promise.resolve().then(i.bind(i, 31011)),
                Promise.resolve().then(i.bind(i, 1624)),
                Promise.resolve().then(i.bind(i, 41338)),
                Promise.resolve().then(i.bind(i, 18460)),
                Promise.resolve().then(i.bind(i, 79078)),
                Promise.resolve().then(i.bind(i, 89774)),
                Promise.resolve().then(i.bind(i, 462)),
                Promise.resolve().then(i.bind(i, 71851)),
                Promise.resolve().then(i.bind(i, 2545)),
                Promise.resolve().then(i.bind(i, 79438)),
                Promise.resolve().then(i.bind(i, 28751)),
                Promise.resolve().then(i.bind(i, 91441)),
                Promise.resolve().then(i.bind(i, 75481)),
                Promise.resolve().then(i.bind(i, 69546)),
                Promise.resolve().then(i.bind(i, 84038)),
                Promise.resolve().then(i.bind(i, 65471)),
                Promise.resolve().then(i.bind(i, 29276)),
                Promise.resolve().then(i.bind(i, 42724)),
                Promise.resolve().then(i.bind(i, 61831)),
                Promise.resolve().then(i.bind(i, 3122)),
                Promise.resolve().then(i.bind(i, 70900)),
                Promise.resolve().then(i.bind(i, 11182)),
                Promise.resolve().then(i.bind(i, 95368)),
                Promise.resolve().then(i.bind(i, 12331)),
                Promise.resolve().then(i.bind(i, 52589)),
                Promise.resolve().then(i.bind(i, 83132)),
                Promise.resolve().then(i.bind(i, 7670)),
                Promise.resolve().then(i.bind(i, 395)),
                Promise.resolve().then(i.bind(i, 83543)),
                Promise.resolve().then(i.bind(i, 99303)),
                Promise.resolve().then(i.bind(i, 45648)),
                Promise.resolve().then(i.bind(i, 35042)),
                Promise.resolve().then(i.bind(i, 94311)),
                Promise.resolve().then(i.bind(i, 46650)),
                Promise.resolve().then(i.bind(i, 33405)),
                Promise.resolve().then(i.bind(i, 32101)),
                Promise.resolve().then(i.bind(i, 63329)),
                Promise.resolve().then(i.bind(i, 941)),
                Promise.resolve().then(i.bind(i, 58991)),
                Promise.resolve().then(i.bind(i, 42297)),
                Promise.resolve().then(i.bind(i, 7551)),
                Promise.resolve().then(i.bind(i, 75695)),
                Promise.resolve().then(i.bind(i, 42323)),
                Promise.resolve().then(i.bind(i, 91135)),
                Promise.resolve().then(i.bind(i, 14878)),
                Promise.resolve().then(i.bind(i, 26467)),
                Promise.resolve().then(i.bind(i, 41970)),
                Promise.resolve().then(i.bind(i, 16847)),
                Promise.resolve().then(i.bind(i, 78780)),
                Promise.resolve().then(i.bind(i, 16782)),
                Promise.resolve().then(i.bind(i, 77966)),
                Promise.resolve().then(i.bind(i, 31148)),
                Promise.resolve().then(i.bind(i, 76532)),
                Promise.resolve().then(i.bind(i, 38076)),
                Promise.resolve().then(i.bind(i, 94158)),
                Promise.resolve().then(i.bind(i, 14124)),
                Promise.resolve().then(i.bind(i, 86100)),
                Promise.resolve().then(i.bind(i, 59736)),
                Promise.resolve().then(i.bind(i, 20532)),
                Promise.resolve().then(i.bind(i, 80222)),
                Promise.resolve().then(i.bind(i, 93148)),
                Promise.resolve().then(i.bind(i, 43898)),
                Promise.resolve().then(i.bind(i, 23164)),
                Promise.resolve().then(i.bind(i, 71637)),
                Promise.resolve().then(i.bind(i, 87894)),
                Promise.resolve().then(i.bind(i, 72964)),
                Promise.resolve().then(i.bind(i, 2760)),
                Promise.resolve().then(i.bind(i, 31927)),
                Promise.resolve().then(i.bind(i, 97248)),
                Promise.resolve().then(i.bind(i, 57612)),
                Promise.resolve().then(i.bind(i, 5670)),
                Promise.resolve().then(i.bind(i, 70915)),
                Promise.resolve().then(i.bind(i, 8148)),
                Promise.resolve().then(i.bind(i, 32634)),
                Promise.resolve().then(i.bind(i, 508)),
                Promise.resolve().then(i.bind(i, 36363)),
                Promise.resolve().then(i.bind(i, 15958)),
                Promise.resolve().then(i.bind(i, 78685)),
                Promise.resolve().then(i.bind(i, 34476)),
                Promise.resolve().then(i.bind(i, 60917)),
                Promise.resolve().then(i.bind(i, 62520)),
                Promise.resolve().then(i.bind(i, 21389)),
                Promise.resolve().then(i.bind(i, 85546)),
                Promise.resolve().then(i.bind(i, 80185)),
                Promise.resolve().then(i.bind(i, 38285)),
                Promise.resolve().then(i.bind(i, 792)),
                Promise.resolve().then(i.bind(i, 34291)),
                Promise.resolve().then(i.bind(i, 31299)),
                Promise.resolve().then(i.bind(i, 56209)),
                Promise.resolve().then(i.bind(i, 44162)),
                Promise.resolve().then(i.bind(i, 93427)),
                Promise.resolve().then(i.bind(i, 57861)),
                Promise.resolve().then(i.bind(i, 30615)),
                Promise.resolve().then(i.bind(i, 34990)),
                Promise.resolve().then(i.bind(i, 16395)),
                Promise.resolve().then(i.bind(i, 75020)),
                Promise.resolve().then(i.bind(i, 32746)),
                Promise.resolve().then(i.bind(i, 2552)),
                Promise.resolve().then(i.bind(i, 7323)),
                Promise.resolve().then(i.bind(i, 68270)),
                Promise.resolve().then(i.bind(i, 99525)),
                Promise.resolve().then(i.bind(i, 44276)),
                Promise.resolve().then(i.bind(i, 49452)),
                Promise.resolve().then(i.bind(i, 68834)),
                Promise.resolve().then(i.bind(i, 67484)),
                Promise.resolve().then(i.bind(i, 6987)),
                Promise.resolve().then(i.bind(i, 748)),
                Promise.resolve().then(i.bind(i, 94756)),
                Promise.resolve().then(i.bind(i, 5798)),
                Promise.resolve().then(i.bind(i, 44817)),
                Promise.resolve().then(i.bind(i, 6181)),
                Promise.resolve().then(i.bind(i, 40846)),
                Promise.resolve().then(i.bind(i, 43762));
        },
        25099: (e, t, i) => {
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
            var s = i(81940),
                n = i(43345),
                r = i(47893),
                l = i(91629),
                o = i(51606),
                a = i(42561);
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
            var u = i(36887),
                c = i(2816),
                b = i(7932),
                h = i(55959),
                v = i(54690);
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
        29276: (e, t, i) => {
            'use strict';
            i.d(t, { LabelAlbumsPage: () => y });
            var s = i(62936),
                n = i(79950),
                r = i(19718),
                l = i(69526),
                o = i(44020),
                a = i(47480),
                d = i(8669),
                m = i(59935),
                u = i(20418),
                c = i(65438),
                b = i(90914),
                h = i(92229),
                v = i(83881),
                p = i(42561),
                g = i(85906),
                P = i(85075),
                _ = i(90026),
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
        36118: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => p });
            var s = i(62936),
                n = i(79950),
                r = i(19718),
                l = i(44020),
                o = i(47480),
                a = i(26731),
                d = i(5099),
                m = i(85742),
                u = i(20418),
                c = i(42561),
                b = i(85906),
                h = i(52166),
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
        36887: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => n });
            var s = i(42561);
            let n = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: i } = (0, s.uvd)(s.Zyd.video.href, { query: { [s.K3F.IDS]: e.join(','), [s.K3F.ACTIVE_INDEX]: String(t) } });
                return i;
            };
        },
        42724: (e, t, i) => {
            'use strict';
            i.d(t, { LabelArtistsPage: () => x });
            var s = i(62936),
                n = i(79950),
                r = i(19718),
                l = i(69526),
                o = i(44020),
                a = i(47480),
                d = i(8669),
                m = i(59935),
                u = i(20418),
                c = i(65438),
                b = i(11334),
                h = i(92229),
                v = i(42561),
                p = i(85906),
                g = i(85075),
                P = i(9834),
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
        43345: (e, t, i) => {
            'use strict';
            i.d(t, { useSendEventOnClipNavigated: () => o });
            var s = i(23480),
                n = i(11584),
                r = i(59935),
                l = i(42561);
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
        43528: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => n });
            var s = i(43696);
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
        47893: (e, t, i) => {
            'use strict';
            i.d(t, { useSendEventOnClipOpened: () => o });
            var s = i(23480),
                n = i(11584),
                r = i(59935),
                l = i(42561);
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
        50502: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => n });
            var s = i(81959);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === s.K.Generative;
            }
        },
        52166: (e) => {
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
        54802: (e, t, i) => {
            'use strict';
            let s;
            i.d(t, { useMetrika: () => l });
            var n = i(44020),
                r = i(43528);
            let l = () => {
                let e = (s || (s = (0, r.a)()), s),
                    t = (0, n.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, n.useMemo)(() => ({ ...e, isLoaded: t }), [t]);
            };
        },
        55959: (e, t, i) => {
            'use strict';
            i.d(t, { useWithClips: () => n });
            var s = i(42561);
            let n = () => {
                let {
                    settings: { isMobile: e },
                } = (0, s.Pjs)();
                return !e;
            };
        },
        59189: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => n });
            var s = i(42561);
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
        61831: (e, t, i) => {
            'use strict';
            i.d(t, { LabelNotFoundPage: () => r });
            var s = i(62936),
                n = i(9939);
            let r = () => (0, s.jsx)(n.M, {});
        },
        62858: (e, t, i) => {
            'use strict';
            var s;
            i.d(t, { x: () => s }),
                (function (e) {
                    (e.ASC = 'asc'), (e.DESC = 'desc');
                })(s || (s = {}));
        },
        65438: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s.SomethingWentWrong });
            var s = i(36118);
        },
        65471: (e, t, i) => {
            'use strict';
            i.d(t, { SortDropdown: () => _ });
            var s = i(62936),
                n = i(19718),
                r = i(44020),
                l = i(26731),
                o = i(8669),
                a = i(28563),
                d = i(59935),
                m = i(5099),
                u = i(81002),
                c = i(85742),
                b = i(20418),
                h = i(42561),
                v = i(94331),
                p = i(90367),
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
        81940: (e, t, i) => {
            'use strict';
            i.d(t, { useSendEventOnClipClosed: () => o });
            var s = i(23480),
                n = i(11584),
                r = i(59935),
                l = i(42561);
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
        83881: (e, t, i) => {
            'use strict';
            i.d(t, { mi: () => m.SortDropdown, wY: () => d, WG: () => s.W, hl: () => r, y8: () => l.useSort });
            var s = i(94331),
                n = i(62858);
            let r = (e) => !!e && (e === n.x.ASC || e === n.x.DESC);
            var l = i(84038),
                o = i(51606),
                a = i(28563);
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
            var m = i(65471);
        },
        84038: (e, t, i) => {
            'use strict';
            i.d(t, { useSort: () => o });
            var s = i(44020),
                n = i(28563),
                r = i(42561),
                l = i(94331);
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
        85075: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => d, T: () => a });
            var s = i(44020),
                n = i(42561),
                r = i(10969),
                l = i(95453),
                o = i(59189),
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
        88452: (e) => {
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
        90026: (e) => {
            e.exports = {
                root: 'LabelAlbumsPage_root__xyWi4',
                scrollContainer: 'LabelAlbumsPage_scrollContainer__zRUlM',
                important: 'LabelAlbumsPage_important__s18oL',
                footer: 'LabelAlbumsPage_footer__dcXFk',
                item: 'LabelAlbumsPage_item__Qjz9F',
                content: 'LabelAlbumsPage_content__jOWKZ',
            };
        },
        90367: (e) => {
            e.exports = {
                root: 'SortDropdown_root__d1JmQ',
                button: 'SortDropdown_button__SjTI7',
                header: 'SortDropdown_header__kj8yV',
                container: 'SortDropdown_container__dyVF_',
            };
        },
        91629: (e, t, i) => {
            'use strict';
            i.d(t, { useSendEventOnClipShowedOrHidden: () => o });
            var s = i(23480),
                n = i(11584),
                r = i(59935),
                l = i(42561);
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
        94331: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => n });
            var s = i(28563);
            let n = (e) => !!e && (e === s.g.RATING || e === s.g.YEAR);
        },
        95453: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => n });
            var s = i(42561);
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
    },
]);
