(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8510],
    {
        1019: (e, n, i) => {
            'use strict';
            i.d(n, { KidsEditorialAlbumsPage: () => x });
            var o = i(54486),
                r = i(50420),
                s = i(28303),
                t = i(97396),
                l = i(61910),
                d = i(43426),
                a = i(31500),
                m = i(8817),
                h = i(27510),
                v = i(97800),
                P = i(82644),
                b = i(80156),
                c = i(33276),
                u = i(83252),
                g = i(80585),
                _ = i(22603),
                p = i.n(_);
            let x = (0, s.PA)((e) => {
                var n, i, s, _;
                let { id: x } = e,
                    {
                        kids: { kidsEditorialAlbumSubpage: f },
                        settings: { isMobile: j },
                    } = (0, u.Pjs)(),
                    N = (0, u.W6M)(),
                    { contentScrollRef: y, setContentScrollRef: C } = (0, u.gKY)(),
                    { formatMessage: k } = (0, d.A)(),
                    w = (0, m.c)((e) => {
                        f.getAlbums({ page: e, pageSize: 20 });
                    });
                f.isNotFound && (0, t.notFound)(),
                    (0, l.useEffect)(
                        () => () => {
                            f.reset();
                        },
                        [f],
                    );
                let A = (0, h.L)(() => ({ Footer: () => (0, o.jsx)(g.A, { children: (0, o.jsx)(g.wi, { className: p().footer }) }) }));
                if (
                    ((0, u.Jzs)(f.isResolved),
                    (0, u.XcE)(f.pagesLoader, w),
                    f.isNeededToLoad && (0, l.use)(f.getData({ id: x, page: 0, pageSize: 20 })),
                    f.isSomethingWrong)
                )
                    return (0, o.jsx)(P.w, {});
                let S = f.isLoading ? 20 : null != (s = null == (i = f.pagesLoader) || null == (n = i.pager) ? void 0 : n.total) ? s : 0;
                return (0, o.jsx)(u.nVz, {
                    pageId: u._Q$.KIDS_EDITORIAL_ALBUMS,
                    children: (0, o.jsx)(c.hO, {
                        scrollElement: y,
                        outerTitle: f.title,
                        children: (0, o.jsxs)('div', {
                            className: p().root,
                            ...(0, a.Am)(a.Xk.kids.KIDS_EDITORIAL_ALBUMS),
                            children: [
                                (0, o.jsx)(g.Y9, {
                                    variant: g.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: N.canBack,
                                    children: (0, o.jsx)(v.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: f.title }),
                                }),
                                (0, o.jsx)(g.$$, {
                                    context: { listAriaLabel: k({ id: 'mixes.albums-list' }, { genreName: f.title || '' }) },
                                    className: (0, r.$)(p().scrollContainer, p().important),
                                    customComponents: A,
                                    itemContentCallback: (e) => {
                                        let n = f.albums[e],
                                            i = k({ id: 'loading-messages.entity-is-loading' }, { entityName: k({ id: 'entity-names.album' }) });
                                        return n
                                            ? (0, o.jsx)(b.aX, { withLikesCount: !0, album: n, contentLinesCount: 3 }, n.id)
                                            : (0, o.jsx)(g.Vt, { isActive: !0, 'aria-label': i });
                                    },
                                    totalCount: S,
                                    onGetDataByPage: w,
                                    pageSize: 20,
                                    totalRequests: null != (_ = f.pagesLoader.requestsCount) ? _ : 0,
                                    listClassName: p().content,
                                    itemClassName: p().item,
                                    handleRef: C,
                                    isMobileLayout: j,
                                    useWindowScroll: j,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        22603: (e) => {
            e.exports = {
                root: 'KidsEditorialAlbumsPage_root__7rHF8',
                scrollContainer: 'KidsEditorialAlbumsPage_scrollContainer__nQVlt',
                important: 'KidsEditorialAlbumsPage_important__hmmxn',
                footer: 'KidsEditorialAlbumsPage_footer__6rwU1',
                item: 'KidsEditorialAlbumsPage_item__Wc243',
                content: 'KidsEditorialAlbumsPage_content__u3zcW',
            };
        },
        24993: (e) => {
            e.exports = {
                root: 'KidsEditorialPlaylistsPage_root__HeHqc',
                scrollContainer: 'KidsEditorialPlaylistsPage_scrollContainer__Hy6HY',
                important: 'KidsEditorialPlaylistsPage_important__283cd',
                footer: 'KidsEditorialPlaylistsPage_footer___UaP5',
                item: 'KidsEditorialPlaylistsPage_item__0wBk2',
                content: 'KidsEditorialPlaylistsPage_content__6wWkP',
            };
        },
        25406: (e, n, i) => {
            Promise.resolve().then(i.bind(i, 81203)),
                Promise.resolve().then(i.bind(i, 5956)),
                Promise.resolve().then(i.bind(i, 58360)),
                Promise.resolve().then(i.bind(i, 14342)),
                Promise.resolve().then(i.bind(i, 62662)),
                Promise.resolve().then(i.bind(i, 6971)),
                Promise.resolve().then(i.bind(i, 22674)),
                Promise.resolve().then(i.bind(i, 51321)),
                Promise.resolve().then(i.bind(i, 97800)),
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
                Promise.resolve().then(i.bind(i, 64782)),
                Promise.resolve().then(i.bind(i, 59839)),
                Promise.resolve().then(i.bind(i, 60339)),
                Promise.resolve().then(i.bind(i, 58435)),
                Promise.resolve().then(i.bind(i, 60272)),
                Promise.resolve().then(i.bind(i, 39206)),
                Promise.resolve().then(i.bind(i, 42061)),
                Promise.resolve().then(i.bind(i, 31820)),
                Promise.resolve().then(i.bind(i, 10351)),
                Promise.resolve().then(i.bind(i, 86778)),
                Promise.resolve().then(i.bind(i, 27654)),
                Promise.resolve().then(i.bind(i, 83952)),
                Promise.resolve().then(i.bind(i, 81217)),
                Promise.resolve().then(i.bind(i, 56689)),
                Promise.resolve().then(i.bind(i, 73219)),
                Promise.resolve().then(i.bind(i, 25045)),
                Promise.resolve().then(i.bind(i, 29468)),
                Promise.resolve().then(i.bind(i, 69573)),
                Promise.resolve().then(i.bind(i, 64409)),
                Promise.resolve().then(i.bind(i, 15091)),
                Promise.resolve().then(i.bind(i, 93099)),
                Promise.resolve().then(i.bind(i, 15640)),
                Promise.resolve().then(i.bind(i, 82885)),
                Promise.resolve().then(i.bind(i, 99733)),
                Promise.resolve().then(i.bind(i, 18355)),
                Promise.resolve().then(i.bind(i, 42691)),
                Promise.resolve().then(i.bind(i, 37235)),
                Promise.resolve().then(i.bind(i, 3781)),
                Promise.resolve().then(i.bind(i, 33829)),
                Promise.resolve().then(i.bind(i, 39906)),
                Promise.resolve().then(i.t.bind(i, 46121, 23)),
                Promise.resolve().then(i.bind(i, 26923)),
                Promise.resolve().then(i.bind(i, 23504)),
                Promise.resolve().then(i.bind(i, 99182)),
                Promise.resolve().then(i.bind(i, 83580)),
                Promise.resolve().then(i.bind(i, 19633)),
                Promise.resolve().then(i.t.bind(i, 37863, 23)),
                Promise.resolve().then(i.t.bind(i, 61484, 23)),
                Promise.resolve().then(i.bind(i, 87184)),
                Promise.resolve().then(i.bind(i, 32949)),
                Promise.resolve().then(i.t.bind(i, 20065, 23)),
                Promise.resolve().then(i.bind(i, 27574)),
                Promise.resolve().then(i.bind(i, 50119)),
                Promise.resolve().then(i.bind(i, 21179)),
                Promise.resolve().then(i.bind(i, 17097)),
                Promise.resolve().then(i.bind(i, 50193)),
                Promise.resolve().then(i.bind(i, 83399)),
                Promise.resolve().then(i.bind(i, 11450)),
                Promise.resolve().then(i.bind(i, 62345)),
                Promise.resolve().then(i.bind(i, 37408)),
                Promise.resolve().then(i.bind(i, 48392)),
                Promise.resolve().then(i.bind(i, 42488)),
                Promise.resolve().then(i.bind(i, 33776)),
                Promise.resolve().then(i.bind(i, 5207)),
                Promise.resolve().then(i.bind(i, 20875)),
                Promise.resolve().then(i.bind(i, 5065)),
                Promise.resolve().then(i.bind(i, 29443)),
                Promise.resolve().then(i.bind(i, 29717)),
                Promise.resolve().then(i.bind(i, 85693)),
                Promise.resolve().then(i.bind(i, 55639)),
                Promise.resolve().then(i.bind(i, 69536)),
                Promise.resolve().then(i.bind(i, 45721)),
                Promise.resolve().then(i.bind(i, 80183)),
                Promise.resolve().then(i.bind(i, 2438)),
                Promise.resolve().then(i.bind(i, 46540)),
                Promise.resolve().then(i.bind(i, 84883)),
                Promise.resolve().then(i.bind(i, 57923)),
                Promise.resolve().then(i.bind(i, 22017)),
                Promise.resolve().then(i.bind(i, 50795)),
                Promise.resolve().then(i.bind(i, 32159)),
                Promise.resolve().then(i.bind(i, 70901)),
                Promise.resolve().then(i.bind(i, 18139)),
                Promise.resolve().then(i.bind(i, 31135)),
                Promise.resolve().then(i.bind(i, 74627)),
                Promise.resolve().then(i.t.bind(i, 3809, 23)),
                Promise.resolve().then(i.bind(i, 30623)),
                Promise.resolve().then(i.bind(i, 5631)),
                Promise.resolve().then(i.bind(i, 9283)),
                Promise.resolve().then(i.bind(i, 72467)),
                Promise.resolve().then(i.bind(i, 66894)),
                Promise.resolve().then(i.bind(i, 45318)),
                Promise.resolve().then(i.bind(i, 3283)),
                Promise.resolve().then(i.bind(i, 48284)),
                Promise.resolve().then(i.bind(i, 69151)),
                Promise.resolve().then(i.bind(i, 8871)),
                Promise.resolve().then(i.bind(i, 86062)),
                Promise.resolve().then(i.bind(i, 47937)),
                Promise.resolve().then(i.bind(i, 76130)),
                Promise.resolve().then(i.bind(i, 76858)),
                Promise.resolve().then(i.bind(i, 54586)),
                Promise.resolve().then(i.bind(i, 12938)),
                Promise.resolve().then(i.bind(i, 62065)),
                Promise.resolve().then(i.bind(i, 39194)),
                Promise.resolve().then(i.bind(i, 97778)),
                Promise.resolve().then(i.bind(i, 23728)),
                Promise.resolve().then(i.bind(i, 9821)),
                Promise.resolve().then(i.bind(i, 13868)),
                Promise.resolve().then(i.bind(i, 43616)),
                Promise.resolve().then(i.bind(i, 92810)),
                Promise.resolve().then(i.bind(i, 79971)),
                Promise.resolve().then(i.bind(i, 61920)),
                Promise.resolve().then(i.bind(i, 93549)),
                Promise.resolve().then(i.bind(i, 4242)),
                Promise.resolve().then(i.bind(i, 79045)),
                Promise.resolve().then(i.bind(i, 72850)),
                Promise.resolve().then(i.bind(i, 26853)),
                Promise.resolve().then(i.bind(i, 85905)),
                Promise.resolve().then(i.bind(i, 25945)),
                Promise.resolve().then(i.bind(i, 1019)),
                Promise.resolve().then(i.bind(i, 49841)),
                Promise.resolve().then(i.bind(i, 67923)),
                Promise.resolve().then(i.bind(i, 75669)),
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
                Promise.resolve().then(i.bind(i, 76472)),
                Promise.resolve().then(i.bind(i, 41682)),
                Promise.resolve().then(i.bind(i, 77666)),
                Promise.resolve().then(i.bind(i, 8765)),
                Promise.resolve().then(i.bind(i, 48670)),
                Promise.resolve().then(i.bind(i, 22096)),
                Promise.resolve().then(i.bind(i, 33655)),
                Promise.resolve().then(i.bind(i, 27754)),
                Promise.resolve().then(i.bind(i, 47347)),
                Promise.resolve().then(i.bind(i, 45591)),
                Promise.resolve().then(i.bind(i, 52862)),
                Promise.resolve().then(i.bind(i, 79326)),
                Promise.resolve().then(i.bind(i, 73922)),
                Promise.resolve().then(i.bind(i, 10790)),
                Promise.resolve().then(i.bind(i, 78684)),
                Promise.resolve().then(i.bind(i, 76877)),
                Promise.resolve().then(i.bind(i, 61176)),
                Promise.resolve().then(i.bind(i, 62108)),
                Promise.resolve().then(i.bind(i, 75053)),
                Promise.resolve().then(i.bind(i, 23035)),
                Promise.resolve().then(i.bind(i, 82315)),
                Promise.resolve().then(i.bind(i, 60673)),
                Promise.resolve().then(i.bind(i, 5048)),
                Promise.resolve().then(i.bind(i, 50215)),
                Promise.resolve().then(i.bind(i, 78308)),
                Promise.resolve().then(i.bind(i, 10084)),
                Promise.resolve().then(i.bind(i, 58681)),
                Promise.resolve().then(i.bind(i, 18658)),
                Promise.resolve().then(i.bind(i, 6323)),
                Promise.resolve().then(i.bind(i, 78817)),
                Promise.resolve().then(i.bind(i, 7230)),
                Promise.resolve().then(i.bind(i, 38378)),
                Promise.resolve().then(i.bind(i, 35609)),
                Promise.resolve().then(i.bind(i, 18606)),
                Promise.resolve().then(i.bind(i, 68014)),
                Promise.resolve().then(i.bind(i, 12126)),
                Promise.resolve().then(i.bind(i, 52742)),
                Promise.resolve().then(i.bind(i, 68098)),
                Promise.resolve().then(i.bind(i, 89190)),
                Promise.resolve().then(i.bind(i, 3270)),
                Promise.resolve().then(i.bind(i, 1220)),
                Promise.resolve().then(i.bind(i, 96584)),
                Promise.resolve().then(i.bind(i, 54598)),
                Promise.resolve().then(i.bind(i, 14196)),
                Promise.resolve().then(i.bind(i, 20576)),
                Promise.resolve().then(i.bind(i, 73976)),
                Promise.resolve().then(i.bind(i, 35203)),
                Promise.resolve().then(i.bind(i, 39450)),
                Promise.resolve().then(i.bind(i, 77607)),
                Promise.resolve().then(i.bind(i, 7430)),
                Promise.resolve().then(i.bind(i, 24786)),
                Promise.resolve().then(i.bind(i, 24036)),
                Promise.resolve().then(i.bind(i, 34932)),
                Promise.resolve().then(i.bind(i, 56204)),
                Promise.resolve().then(i.bind(i, 75450)),
                Promise.resolve().then(i.bind(i, 60608)),
                Promise.resolve().then(i.bind(i, 33648)),
                Promise.resolve().then(i.bind(i, 43548)),
                Promise.resolve().then(i.bind(i, 69672)),
                Promise.resolve().then(i.bind(i, 50711)),
                Promise.resolve().then(i.bind(i, 5185)),
                Promise.resolve().then(i.bind(i, 90555)),
                Promise.resolve().then(i.bind(i, 5602)),
                Promise.resolve().then(i.bind(i, 12390)),
                Promise.resolve().then(i.bind(i, 58376)),
                Promise.resolve().then(i.bind(i, 24491)),
                Promise.resolve().then(i.bind(i, 61993)),
                Promise.resolve().then(i.bind(i, 38644)),
                Promise.resolve().then(i.bind(i, 93668)),
                Promise.resolve().then(i.bind(i, 85949)),
                Promise.resolve().then(i.bind(i, 17519)),
                Promise.resolve().then(i.bind(i, 62010)),
                Promise.resolve().then(i.bind(i, 16372)),
                Promise.resolve().then(i.bind(i, 64434)),
                Promise.resolve().then(i.bind(i, 33158)),
                Promise.resolve().then(i.bind(i, 27314)),
                Promise.resolve().then(i.bind(i, 93206)),
                Promise.resolve().then(i.bind(i, 37226)),
                Promise.resolve().then(i.bind(i, 13811)),
                Promise.resolve().then(i.bind(i, 45645)),
                Promise.resolve().then(i.bind(i, 24126)),
                Promise.resolve().then(i.bind(i, 20406)),
                Promise.resolve().then(i.bind(i, 21940)),
                Promise.resolve().then(i.bind(i, 26086)),
                Promise.resolve().then(i.bind(i, 96838)),
                Promise.resolve().then(i.bind(i, 10358)),
                Promise.resolve().then(i.bind(i, 23143)),
                Promise.resolve().then(i.bind(i, 51828)),
                Promise.resolve().then(i.bind(i, 51725)),
                Promise.resolve().then(i.bind(i, 23834)),
                Promise.resolve().then(i.bind(i, 88343)),
                Promise.resolve().then(i.bind(i, 24624)),
                Promise.resolve().then(i.bind(i, 14170)),
                Promise.resolve().then(i.bind(i, 62277)),
                Promise.resolve().then(i.bind(i, 84359)),
                Promise.resolve().then(i.bind(i, 25743)),
                Promise.resolve().then(i.bind(i, 4111)),
                Promise.resolve().then(i.bind(i, 99057)),
                Promise.resolve().then(i.t.bind(i, 90372, 23));
        },
        25945: (e, n, i) => {
            'use strict';
            i.d(n, { KidsCategoryPage: () => j });
            var o = i(54486),
                r = i(50420),
                s = i(28303),
                t = i(97396),
                l = i(61910),
                d = i(31500),
                a = i(56231),
                m = i(97800),
                h = i(6664),
                v = i(82644),
                P = i(33276),
                b = i(83252),
                c = i(80585),
                u = i(44193),
                g = i.n(u),
                _ = i(27510),
                p = i(91582),
                x = i.n(p);
            let f = (0, s.PA)(() => {
                    let { experiments: e } = (0, b.Pjs)(),
                        n = e.checkExperiment(b.zal.WebNextWaveAgentExperiment, 'on'),
                        i = (0, _.L)(() =>
                            n ? (0, o.jsx)(c.OY, { isShimmerVisible: !0, isShimmerActive: !0, isShimmerCentered: !0 }) : (0, o.jsx)(h.Rj, { isActive: !0, length: 4 }),
                        );
                    return (0, o.jsxs)('div', {
                        className: x().root,
                        children: [
                            (0, o.jsx)('div', { children: i }),
                            (0, o.jsx)(c.OY, { isShimmerVisible: !0, isShimmerActive: !0 }),
                            (0, o.jsx)(c.OY, { isShimmerVisible: !0, isShimmerActive: !0 }),
                        ],
                    });
                }),
                j = (0, s.PA)((e) => {
                    let { categoryId: n } = e,
                        { kids: i, experiments: s } = (0, b.Pjs)(),
                        { contentScrollRef: u, setContentScrollRef: _ } = (0, b.gKY)(),
                        p = (0, b.W6M)(),
                        x = s.checkExperiment(b.zal.WebNextNewNestedNonMusicLandings, 'on');
                    if (((0, l.useEffect)(() => () => i.landing.reset(), [i.landing]), (0, b.Jzs)(i.landing.isResolved), x)) {
                        let { href: e } = (0, b.uvd)('/landing/:skeleton', { params: { skeleton: 'category_kids_'.concat(n) } });
                        (0, t.redirect)(e);
                    }
                    i.landing.isLoadedAndEmpty && (0, t.notFound)();
                    let j = (0, h._9)(i.landing),
                        N = (0, l.useMemo)(
                            () =>
                                i.landing.isLoading || i.landing.isNeededToLoad
                                    ? (0, o.jsx)(f, {})
                                    : (0, o.jsx)(h.EA, { landing: i.landing, errorComponent: (0, o.jsx)(v.w, { className: g().error, withBackwardControl: !1 }) }),
                            [i.landing.loadingState, i.landing],
                        );
                    return (
                        i.landing.isNeededToLoad && (0, l.use)(i.landing.getChildrenSkeleton({ categoryId: n })),
                        (0, o.jsx)(b.nVz, {
                            pageId: b._Q$.KIDS_CATEGORY,
                            children: (0, o.jsxs)(P.hO, {
                                scrollElement: u,
                                outerTitle: i.landing.title,
                                children: [
                                    (0, o.jsx)(c.Y9, {
                                        variant: c.Vw.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: p.canBack,
                                        children: (0, o.jsx)('div', {
                                            className: g().header,
                                            children: (0, o.jsx)(m.Heading, { variant: 'h1', weight: 'bold', size: 'xl', children: i.landing.title }),
                                        }),
                                    }),
                                    (0, o.jsxs)(a.N, {
                                        className: g().root,
                                        containerClassName: g().content,
                                        ref: _,
                                        ...(0, d.Am)(d.Xk.kids.KIDS_CATEGORY_PAGE),
                                        children: [
                                            (0, o.jsx)('div', { className: (0, r.$)(g().landing, { [g().landing_onlyWizard]: j }), children: N }),
                                            (0, o.jsx)(c.A, { children: (0, o.jsx)(c.wi, { className: g().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                        })
                    );
                });
        },
        27005: (e) => {
            e.exports = {
                root: 'KidsPage_root__yycsJ',
                content: 'KidsPage_content__08pPR',
                header: 'KidsPage_header__2Gk2l',
                landing: 'KidsPage_landing__3QZZj',
                landing_onlyWizard: 'KidsPage_landing_onlyWizard__xKyDo',
                footer: 'KidsPage_footer__p7SVD',
                error: 'KidsPage_error__qa7Qo',
            };
        },
        31622: (e, n, i) => {
            'use strict';
            Object.defineProperty(n, '__esModule', { value: !0 }),
                Object.defineProperty(n, 'default', {
                    enumerable: !0,
                    get: function () {
                        return d;
                    },
                });
            let o = i(54486),
                r = i(61910),
                s = i(91165);
            function t(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            i(98944);
            let l = { loader: () => Promise.resolve(t(() => null)), loading: null, ssr: !0 },
                d = function (e) {
                    let n = { ...l, ...e },
                        i = (0, r.lazy)(() => n.loader().then(t)),
                        d = n.loading;
                    function a(e) {
                        let t = d ? (0, o.jsx)(d, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            l = !n.ssr || !!n.loading,
                            a = l ? r.Suspense : r.Fragment,
                            m = n.ssr
                                ? (0, o.jsxs)(o.Fragment, { children: [null, (0, o.jsx)(i, { ...e })] })
                                : (0, o.jsx)(s.BailoutToCSR, { reason: 'next/dynamic', children: (0, o.jsx)(i, { ...e }) });
                        return (0, o.jsx)(a, { ...(l ? { fallback: t } : {}), children: m });
                    }
                    return (a.displayName = 'LoadableComponent'), a;
                };
        },
        36446: (e, n, i) => {
            'use strict';
            Object.defineProperty(n, '__esModule', { value: !0 }),
                Object.defineProperty(n, 'default', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                });
            let o = i(45221)._(i(31622));
            function r(e, n) {
                var i;
                let r = {};
                'function' == typeof e && (r.loader = e);
                let s = { ...r, ...n };
                return (0, o.default)({ ...s, modules: null == (i = s.loadableGenerated) ? void 0 : i.modules });
            }
            ('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
                void 0 === n.default.__esModule &&
                (Object.defineProperty(n.default, '__esModule', { value: !0 }), Object.assign(n.default, n), (e.exports = n.default));
        },
        42421: (e, n, i) => {
            'use strict';
            i.d(n, { M: () => o.NotFound });
            var o = i(65034);
        },
        42520: (e, n, i) => {
            'use strict';
            let o;
            i.d(n, { useMetrika: () => t });
            var r = i(61910),
                s = i(80506);
            let t = () => {
                let e = (o || (o = (0, s.a)()), o),
                    n = (0, r.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, r.useMemo)(() => ({ ...e, isLoaded: n }), [n]);
            };
        },
        44193: (e) => {
            e.exports = {
                root: 'KidsCategoryPage_root__bk7_R',
                content: 'KidsCategoryPage_content__LN0NB',
                header: 'KidsCategoryPage_header__Agys3',
                landing: 'KidsCategoryPage_landing__aSDYw',
                landing_onlyWizard: 'KidsCategoryPage_landing_onlyWizard__3EC9N',
                footer: 'KidsCategoryPage_footer__BQhqi',
                error: 'KidsCategoryPage_error__tSXF7',
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
        49841: (e, n, i) => {
            'use strict';
            i.d(n, { KidsEditorialPlaylistsPage: () => x });
            var o = i(54486),
                r = i(50420),
                s = i(28303),
                t = i(97396),
                l = i(61910),
                d = i(43426),
                a = i(31500),
                m = i(8817),
                h = i(27510),
                v = i(97800),
                P = i(82644),
                b = i(33276),
                c = i(83909),
                u = i(83252),
                g = i(80585),
                _ = i(24993),
                p = i.n(_);
            let x = (0, s.PA)((e) => {
                var n, i, s;
                let { id: _ } = e,
                    {
                        kids: { kidsEditorialPlaylistSubpage: x },
                        settings: { isMobile: f },
                    } = (0, u.Pjs)(),
                    j = (0, u.W6M)(),
                    { contentScrollRef: N, setContentScrollRef: y } = (0, u.gKY)(),
                    { formatMessage: C } = (0, d.A)(),
                    k = (0, m.c)((e) => {
                        x.getPlaylists({ page: e, pageSize: 20 });
                    });
                x.isNotFound && (0, t.notFound)(),
                    (0, l.useEffect)(
                        () => () => {
                            x.reset();
                        },
                        [x],
                    );
                let w = (0, h.L)(() => ({ Footer: () => (0, o.jsx)(g.A, { children: (0, o.jsx)(g.wi, { className: p().footer }) }) }));
                if (
                    ((0, u.Jzs)(x.isResolved),
                    (0, u.XcE)(x.pagesLoader, k),
                    x.isNeededToLoad && (0, l.use)(x.getData({ id: _, page: 0, pageSize: 20 })),
                    x.isSomethingWrong)
                )
                    return (0, o.jsx)(P.w, {});
                let A = x.isLoading ? 20 : null != (i = null == (n = x.pagesLoader.pager) ? void 0 : n.total) ? i : 0;
                return (0, o.jsx)(u.nVz, {
                    pageId: u._Q$.KIDS_EDITORIAL_PLAYLISTS,
                    children: (0, o.jsx)(b.hO, {
                        scrollElement: N,
                        outerTitle: x.title,
                        children: (0, o.jsxs)('div', {
                            className: p().root,
                            ...(0, a.Am)(a.Xk.kids.KIDS_EDITORIAL_PLAYLISTS),
                            children: [
                                (0, o.jsx)(g.Y9, {
                                    variant: g.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: j.canBack,
                                    children: (0, o.jsx)(v.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: x.title }),
                                }),
                                (0, o.jsx)(g.$$, {
                                    context: { listAriaLabel: C({ id: 'mixes.playlists-list' }, { genreName: x.title || '' }) },
                                    className: (0, r.$)(p().scrollContainer, p().important),
                                    customComponents: w,
                                    itemContentCallback: (e) => {
                                        let n = x.playlists[e],
                                            i = C({ id: 'loading-messages.entity-is-loading' }, { entityName: C({ id: 'entity-names.playlist' }) });
                                        return n ? (0, o.jsx)(c.B6, { playlist: n, contentLinesCount: 3 }, n.key) : (0, o.jsx)(g.Vt, { isActive: !0, 'aria-label': i });
                                    },
                                    totalCount: A,
                                    onGetDataByPage: k,
                                    pageSize: 20,
                                    totalRequests: null != (s = x.pagesLoader.requestsCount) ? s : 0,
                                    listClassName: p().content,
                                    itemClassName: p().item,
                                    handleRef: y,
                                    isMobileLayout: f,
                                    useWindowScroll: f,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        57249: (e, n, i) => {
            'use strict';
            e.exports = i.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
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
        65034: (e, n, i) => {
            'use strict';
            i.d(n, { NotFound: () => c });
            var o = i(54486),
                r = i(50420),
                s = i(28303),
                t = i(47713),
                l = i(77881),
                d = i(5956),
                a = i(97800),
                m = i(83252),
                h = i(80585),
                v = i(61910),
                P = i(46215),
                b = i.n(P);
            let c = (0, s.PA)((e) => {
                let { className: n, title: i, description: s, iconVariant: P = 'musicLogo', iconClassName: c, iconSize: u } = e,
                    { contentRef: g } = (0, m.gKY)(),
                    _ = (0, m.ZpR)(m.Zyd.main.href);
                (0, m.LZB)();
                let { handleNavigateToMain: p } = (0, m.D5F)(_);
                return (
                    (0, m.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, m.Pjs)();
                        (0, v.useEffect)(
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
                        className: (0, r.$)(b().root, { [b().root_desktop]: !g }, n),
                        children: [
                            (0, o.jsx)(h.Lh, { withBackwardFallback: '/', className: b().navigation, withForwardControl: !1 }),
                            (0, o.jsxs)('div', {
                                className: b().content,
                                children: [
                                    (0, o.jsx)(d.Icon, { className: (0, r.$)(b().icon, c), variant: P, size: u }),
                                    (0, o.jsx)(a.Heading, {
                                        className: (0, r.$)(b().title, b().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: i || (0, o.jsx)(t.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, o.jsx)(a.Caption, {
                                        className: (0, r.$)(b().text, b().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: s || (0, o.jsx)(t.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, o.jsx)(l.$, {
                                        onClick: p,
                                        className: b().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(a.Caption, {
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
        67923: (e, n, i) => {
            'use strict';
            i.d(n, { KidsNotFoundPage: () => d });
            var o = i(54486),
                r = i(28303),
                s = i(61910),
                t = i(42421),
                l = i(83252);
            let d = (0, r.PA)(() => {
                let { kids: e } = (0, l.Pjs)();
                return (
                    (0, s.useEffect)(
                        () => () => {
                            e.landing.reset();
                        },
                        [e.landing],
                    ),
                    (0, o.jsx)(t.M, {})
                );
            });
        },
        75312: (e, n, i) => {
            'use strict';
            i.d(n, { SomethingWentWrong: () => u });
            var o = i(54486),
                r = i(50420),
                s = i(28303),
                t = i(61910),
                l = i(43426),
                d = i(47713),
                a = i(77881),
                m = i(5956),
                h = i(97800),
                v = i(83252),
                P = i(80585),
                b = i(63708),
                c = i.n(b);
            let u = (0, s.PA)((e) => {
                let { className: n, withBackwardControl: i = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    b = s({ id: 'error-messages.something-went-wrong' });
                (0, v.CgZ)(b);
                let { sendRefreshEvent: u } = (0, v.cYT)(),
                    g = (0, t.useCallback)(() => {
                        u(), (window.location.href = v.Zyd.main.href);
                    }, [u]),
                    { contentRef: _ } = (0, v.gKY)();
                return (0, o.jsxs)('div', {
                    className: (0, r.$)(c().root, n),
                    children: [
                        i &&
                            (0, o.jsx)(P.Lh, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(c().navigation, { [c().navigation_desktop]: !_ }),
                                withForwardControl: !1,
                            }),
                        (0, o.jsxs)('div', {
                            className: (0, r.$)(c().content, { [c().content_shrink]: !i }),
                            children: [
                                (0, o.jsx)(m.Icon, { className: c().icon, variant: 'attention', size: 'xxl' }),
                                (0, o.jsx)(h.Heading, { className: (0, r.$)(c().title, c().important), variant: 'h3', size: 'xs', children: b }),
                                (0, o.jsxs)(h.Caption, {
                                    className: (0, r.$)(c().text, c().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, o.jsx)(d.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, o.jsx)(a.$, {
                                    onClick: g,
                                    className: c().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, o.jsxs)(h.Caption, {
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
        75669: (e, n, i) => {
            'use strict';
            i.d(n, { KidsPage: () => x });
            var o = i(54486),
                r = i(50420),
                s = i(28303),
                t = i(61910),
                l = i(43426),
                d = i(47713),
                a = i(31500),
                m = i(6024),
                h = i(56231),
                v = i(97800),
                P = i(6664),
                b = i(82644),
                c = i(33276),
                u = i(83252),
                g = i(80585),
                _ = i(27005),
                p = i.n(_);
            let x = (0, s.PA)(() => {
                let { kids: e, user: n } = (0, u.Pjs)(),
                    { formatMessage: i } = (0, l.A)(),
                    { contentScrollRef: s, setContentScrollRef: _ } = (0, u.gKY)();
                (0, t.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, u.Jzs)(e.landing.isResolved);
                let x = (0, P._9)(e.landing);
                return (
                    e.landing.isNeededToLoad && (0, t.use)(e.landing.getSkeleton({ id: m.p.KIDS, showWizard: n.settings.showWizard }, { preloadBlocksCount: 2 })),
                    (0, o.jsx)(u.nVz, {
                        pageId: u._Q$.KIDS,
                        children: (0, o.jsxs)(c.hO, {
                            scrollElement: s,
                            outerTitle: i({ id: 'kids.for-kids' }),
                            children: [
                                (0, o.jsx)(g.Y9, {
                                    variant: g.Vw.TEXT,
                                    showControls: !1,
                                    children: (0, o.jsx)('div', {
                                        className: p().header,
                                        children: (0, o.jsx)(v.Heading, {
                                            variant: 'h1',
                                            weight: 'bold',
                                            size: 'xl',
                                            children: (0, o.jsx)(d.A, { id: 'kids.for-kids' }),
                                        }),
                                    }),
                                }),
                                (0, o.jsxs)(h.N, {
                                    className: p().root,
                                    containerClassName: p().content,
                                    ref: _,
                                    ...(0, a.Am)(a.Xk.kids.KIDS_PAGE),
                                    children: [
                                        (0, o.jsx)('div', {
                                            className: (0, r.$)(p().landing, { [p().landing_onlyWizard]: x }),
                                            children: (0, o.jsx)(P.EA, {
                                                landing: e.landing,
                                                errorComponent: (0, o.jsx)(b.w, { className: p().error, withBackwardControl: !1 }),
                                            }),
                                        }),
                                        (0, o.jsx)(g.A, { children: (0, o.jsx)(g.wi, { className: p().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            });
        },
        80506: (e, n, i) => {
            'use strict';
            i.d(n, { a: () => r });
            var o = i(87965);
            let r = () => {
                let e = null,
                    n = new o.cJ(!1),
                    i = [];
                return {
                    isLoaded: n,
                    init: (o) => {
                        var r, s;
                        if (void 0 !== (null == (r = window.Ya) ? void 0 : r.Metrika2) && !n.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...o })),
                                    (n.value = !0),
                                    (s = e),
                                    i.forEach((e) => {
                                        e(s);
                                    }),
                                    (i.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && o.logger.error(e);
                            }
                    },
                    count: function (n) {
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [o]: n })
                            : i.push((e) => {
                                  e.params({ [o]: n });
                              });
                    },
                    hit: (n) => {
                        e
                            ? e.hit(n)
                            : i.push((e) => {
                                  e.hit(n);
                              });
                    },
                    reachGoal: (n, o) => {
                        if (!e) return void i.push((e) => e.reachGoal(n, o));
                        e.reachGoal(n, o);
                    },
                };
            };
        },
        82644: (e, n, i) => {
            'use strict';
            i.d(n, { w: () => o.SomethingWentWrong });
            var o = i(75312);
        },
        83645: (e, n, i) => {
            'use strict';
            i.d(n, { default: () => r.a });
            var o = i(36446),
                r = i.n(o);
        },
        91165: (e, n, i) => {
            'use strict';
            function o(e) {
                let { reason: n, children: i } = e;
                return i;
            }
            Object.defineProperty(n, '__esModule', { value: !0 }),
                Object.defineProperty(n, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }),
                i(39201);
        },
        91582: (e) => {
            e.exports = { root: 'KidsCategoryPageShimmer_root__0V_bC' };
        },
        97151: (e, n, i) => {
            'use strict';
            i.d(n, { XU: () => h });
            var o,
                r,
                s = i(41500),
                t = i(61910),
                l = i(43426);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(o || (o = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(r || (r = {}));
            var d = function (e) {
                var n = (0, l.A)(),
                    i = e.value,
                    o = e.children,
                    r = (0, s.__rest)(e, ['value', 'children']);
                return o(n.formatNumberToParts(i, r));
            };
            function a(e) {
                var n = function (n) {
                    var i = (0, l.A)(),
                        o = n.value,
                        r = n.children,
                        t = (0, s.__rest)(n, ['value', 'children']),
                        d = 'string' == typeof o ? new Date(o || 0) : o;
                    return r('formatDate' === e ? i.formatDateToParts(d, t) : i.formatTimeToParts(d, t));
                };
                return (n.displayName = r[e]), n;
            }
            function m(e) {
                var n = function (n) {
                    var i = (0, l.A)(),
                        o = n.value,
                        r = n.children,
                        d = (0, s.__rest)(n, ['value', 'children']),
                        a = i[e](o, d);
                    if ('function' == typeof r) return r(a);
                    var m = i.textComponent || t.Fragment;
                    return t.createElement(m, null, a);
                };
                return (n.displayName = o[e]), n;
            }
            (d.displayName = 'FormattedNumberParts'), (d.displayName = 'FormattedNumberParts');
            var h = m('formatDate');
            m('formatTime'), m('formatNumber'), m('formatList'), m('formatDisplayName'), a('formatDate'), a('formatTime');
        },
        98944: (e, n, i) => {
            'use strict';
            function o(e) {
                let { moduleIds: n } = e;
                return null;
            }
            Object.defineProperty(n, '__esModule', { value: !0 }),
                Object.defineProperty(n, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }),
                i(54486),
                i(92803),
                i(14367),
                i(32038);
        },
    },
]);
