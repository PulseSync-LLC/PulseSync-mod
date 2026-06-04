(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9088],
    {
        11563: (e, n, i) => {
            'use strict';
            i.d(n, { KidsEditorialPlaylistsPage: () => x });
            var o = i(32290),
                r = i(63618),
                s = i(96103),
                t = i(21916),
                l = i(55178),
                d = i(60900),
                a = i(59824),
                m = i(91027),
                h = i(6752),
                v = i(71926),
                P = i(32381),
                b = i(75645),
                c = i(50510),
                u = i(49574),
                g = i(44574),
                _ = i(78635),
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
        12119: (e, n, i) => {
            'use strict';
            i.d(n, { NotFound: () => c });
            var o = i(32290),
                r = i(63618),
                s = i(96103),
                t = i(39407),
                l = i(63423),
                d = i(82586),
                a = i(71926),
                m = i(49574),
                h = i(44574),
                v = i(55178),
                P = i(55365),
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
        16379: (e, n, i) => {
            Promise.resolve().then(i.bind(i, 75245)),
                Promise.resolve().then(i.bind(i, 82586)),
                Promise.resolve().then(i.bind(i, 50162)),
                Promise.resolve().then(i.bind(i, 7276)),
                Promise.resolve().then(i.bind(i, 29680)),
                Promise.resolve().then(i.bind(i, 86269)),
                Promise.resolve().then(i.bind(i, 79856)),
                Promise.resolve().then(i.bind(i, 15299)),
                Promise.resolve().then(i.bind(i, 71926)),
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
                Promise.resolve().then(i.bind(i, 78795)),
                Promise.resolve().then(i.bind(i, 56797)),
                Promise.resolve().then(i.bind(i, 96849)),
                Promise.resolve().then(i.bind(i, 26089)),
                Promise.resolve().then(i.bind(i, 46789)),
                Promise.resolve().then(i.bind(i, 99872)),
                Promise.resolve().then(i.bind(i, 84427)),
                Promise.resolve().then(i.bind(i, 19522)),
                Promise.resolve().then(i.bind(i, 42181)),
                Promise.resolve().then(i.bind(i, 61744)),
                Promise.resolve().then(i.bind(i, 17280)),
                Promise.resolve().then(i.bind(i, 47610)),
                Promise.resolve().then(i.bind(i, 53109)),
                Promise.resolve().then(i.bind(i, 61303)),
                Promise.resolve().then(i.bind(i, 96502)),
                Promise.resolve().then(i.bind(i, 69523)),
                Promise.resolve().then(i.bind(i, 17084)),
                Promise.resolve().then(i.bind(i, 60807)),
                Promise.resolve().then(i.bind(i, 88467)),
                Promise.resolve().then(i.bind(i, 73169)),
                Promise.resolve().then(i.t.bind(i, 75487, 23)),
                Promise.resolve().then(i.bind(i, 48104)),
                Promise.resolve().then(i.bind(i, 7474)),
                Promise.resolve().then(i.bind(i, 21564)),
                Promise.resolve().then(i.bind(i, 76238)),
                Promise.resolve().then(i.bind(i, 42383)),
                Promise.resolve().then(i.t.bind(i, 20541, 23)),
                Promise.resolve().then(i.t.bind(i, 64146, 23)),
                Promise.resolve().then(i.bind(i, 79589)),
                Promise.resolve().then(i.bind(i, 13819)),
                Promise.resolve().then(i.t.bind(i, 96871, 23)),
                Promise.resolve().then(i.bind(i, 8588)),
                Promise.resolve().then(i.bind(i, 83917)),
                Promise.resolve().then(i.bind(i, 73141)),
                Promise.resolve().then(i.bind(i, 73192)),
                Promise.resolve().then(i.bind(i, 11674)),
                Promise.resolve().then(i.bind(i, 10511)),
                Promise.resolve().then(i.bind(i, 44277)),
                Promise.resolve().then(i.bind(i, 47989)),
                Promise.resolve().then(i.bind(i, 54869)),
                Promise.resolve().then(i.bind(i, 39055)),
                Promise.resolve().then(i.bind(i, 12779)),
                Promise.resolve().then(i.bind(i, 96919)),
                Promise.resolve().then(i.bind(i, 8032)),
                Promise.resolve().then(i.bind(i, 85697)),
                Promise.resolve().then(i.bind(i, 52981)),
                Promise.resolve().then(i.bind(i, 2355)),
                Promise.resolve().then(i.bind(i, 10431)),
                Promise.resolve().then(i.bind(i, 83557)),
                Promise.resolve().then(i.bind(i, 66436)),
                Promise.resolve().then(i.bind(i, 54203)),
                Promise.resolve().then(i.bind(i, 58294)),
                Promise.resolve().then(i.bind(i, 23030)),
                Promise.resolve().then(i.bind(i, 74804)),
                Promise.resolve().then(i.bind(i, 60214)),
                Promise.resolve().then(i.bind(i, 66349)),
                Promise.resolve().then(i.bind(i, 64089)),
                Promise.resolve().then(i.bind(i, 10057)),
                Promise.resolve().then(i.bind(i, 2755)),
                Promise.resolve().then(i.bind(i, 20183)),
                Promise.resolve().then(i.bind(i, 85305)),
                Promise.resolve().then(i.bind(i, 58875)),
                Promise.resolve().then(i.bind(i, 17123)),
                Promise.resolve().then(i.bind(i, 48472)),
                Promise.resolve().then(i.bind(i, 10583)),
                Promise.resolve().then(i.bind(i, 77435)),
                Promise.resolve().then(i.bind(i, 89549)),
                Promise.resolve().then(i.bind(i, 88446)),
                Promise.resolve().then(i.bind(i, 40126)),
                Promise.resolve().then(i.bind(i, 73325)),
                Promise.resolve().then(i.bind(i, 12113)),
                Promise.resolve().then(i.bind(i, 57223)),
                Promise.resolve().then(i.bind(i, 19429)),
                Promise.resolve().then(i.bind(i, 29869)),
                Promise.resolve().then(i.bind(i, 69675)),
                Promise.resolve().then(i.bind(i, 5749)),
                Promise.resolve().then(i.bind(i, 48977)),
                Promise.resolve().then(i.bind(i, 60101)),
                Promise.resolve().then(i.t.bind(i, 90011, 23)),
                Promise.resolve().then(i.bind(i, 79897)),
                Promise.resolve().then(i.bind(i, 80097)),
                Promise.resolve().then(i.bind(i, 29001)),
                Promise.resolve().then(i.bind(i, 38009)),
                Promise.resolve().then(i.bind(i, 50476)),
                Promise.resolve().then(i.bind(i, 83460)),
                Promise.resolve().then(i.bind(i, 64538)),
                Promise.resolve().then(i.bind(i, 27594)),
                Promise.resolve().then(i.bind(i, 84141)),
                Promise.resolve().then(i.bind(i, 18729)),
                Promise.resolve().then(i.bind(i, 5420)),
                Promise.resolve().then(i.bind(i, 54171)),
                Promise.resolve().then(i.bind(i, 6647)),
                Promise.resolve().then(i.bind(i, 1456)),
                Promise.resolve().then(i.bind(i, 27616)),
                Promise.resolve().then(i.bind(i, 68912)),
                Promise.resolve().then(i.bind(i, 20477)),
                Promise.resolve().then(i.bind(i, 13486)),
                Promise.resolve().then(i.bind(i, 72732)),
                Promise.resolve().then(i.bind(i, 4664)),
                Promise.resolve().then(i.bind(i, 22762)),
                Promise.resolve().then(i.bind(i, 61113)),
                Promise.resolve().then(i.bind(i, 12326)),
                Promise.resolve().then(i.bind(i, 16710)),
                Promise.resolve().then(i.bind(i, 36916)),
                Promise.resolve().then(i.bind(i, 2413)),
                Promise.resolve().then(i.bind(i, 7902)),
                Promise.resolve().then(i.bind(i, 14631)),
                Promise.resolve().then(i.bind(i, 94631)),
                Promise.resolve().then(i.bind(i, 69951)),
                Promise.resolve().then(i.bind(i, 49464)),
                Promise.resolve().then(i.bind(i, 79727)),
                Promise.resolve().then(i.bind(i, 87155)),
                Promise.resolve().then(i.bind(i, 16834)),
                Promise.resolve().then(i.bind(i, 28821)),
                Promise.resolve().then(i.bind(i, 11563)),
                Promise.resolve().then(i.bind(i, 45941)),
                Promise.resolve().then(i.bind(i, 70063)),
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
                Promise.resolve().then(i.bind(i, 11262)),
                Promise.resolve().then(i.bind(i, 80792)),
                Promise.resolve().then(i.bind(i, 88424)),
                Promise.resolve().then(i.bind(i, 13528)),
                Promise.resolve().then(i.bind(i, 49932)),
                Promise.resolve().then(i.bind(i, 58534)),
                Promise.resolve().then(i.bind(i, 90357)),
                Promise.resolve().then(i.bind(i, 97755)),
                Promise.resolve().then(i.bind(i, 8097)),
                Promise.resolve().then(i.bind(i, 27373)),
                Promise.resolve().then(i.bind(i, 19620)),
                Promise.resolve().then(i.bind(i, 32156)),
                Promise.resolve().then(i.bind(i, 61376)),
                Promise.resolve().then(i.bind(i, 98148)),
                Promise.resolve().then(i.bind(i, 49522)),
                Promise.resolve().then(i.bind(i, 28563)),
                Promise.resolve().then(i.bind(i, 49518)),
                Promise.resolve().then(i.bind(i, 49346)),
                Promise.resolve().then(i.bind(i, 38223)),
                Promise.resolve().then(i.bind(i, 58237)),
                Promise.resolve().then(i.bind(i, 22369)),
                Promise.resolve().then(i.bind(i, 56367)),
                Promise.resolve().then(i.bind(i, 4914)),
                Promise.resolve().then(i.bind(i, 59833)),
                Promise.resolve().then(i.bind(i, 41566)),
                Promise.resolve().then(i.bind(i, 23042)),
                Promise.resolve().then(i.bind(i, 83755)),
                Promise.resolve().then(i.bind(i, 25160)),
                Promise.resolve().then(i.bind(i, 43679)),
                Promise.resolve().then(i.bind(i, 21027)),
                Promise.resolve().then(i.bind(i, 99752)),
                Promise.resolve().then(i.bind(i, 41972)),
                Promise.resolve().then(i.bind(i, 37711)),
                Promise.resolve().then(i.bind(i, 4820)),
                Promise.resolve().then(i.bind(i, 36011)),
                Promise.resolve().then(i.bind(i, 14388)),
                Promise.resolve().then(i.bind(i, 28724)),
                Promise.resolve().then(i.bind(i, 56664)),
                Promise.resolve().then(i.bind(i, 41812)),
                Promise.resolve().then(i.bind(i, 38420)),
                Promise.resolve().then(i.bind(i, 54290)),
                Promise.resolve().then(i.bind(i, 78570)),
                Promise.resolve().then(i.bind(i, 26452)),
                Promise.resolve().then(i.bind(i, 38936)),
                Promise.resolve().then(i.bind(i, 13798)),
                Promise.resolve().then(i.bind(i, 58054)),
                Promise.resolve().then(i.bind(i, 15509)),
                Promise.resolve().then(i.bind(i, 74694)),
                Promise.resolve().then(i.bind(i, 85377)),
                Promise.resolve().then(i.bind(i, 1444)),
                Promise.resolve().then(i.bind(i, 92744)),
                Promise.resolve().then(i.bind(i, 61258)),
                Promise.resolve().then(i.bind(i, 5592)),
                Promise.resolve().then(i.bind(i, 9634)),
                Promise.resolve().then(i.bind(i, 17584)),
                Promise.resolve().then(i.bind(i, 12894)),
                Promise.resolve().then(i.bind(i, 2694)),
                Promise.resolve().then(i.bind(i, 71730)),
                Promise.resolve().then(i.bind(i, 22734)),
                Promise.resolve().then(i.bind(i, 56037)),
                Promise.resolve().then(i.bind(i, 30584)),
                Promise.resolve().then(i.bind(i, 76385)),
                Promise.resolve().then(i.bind(i, 56059)),
                Promise.resolve().then(i.bind(i, 10180)),
                Promise.resolve().then(i.bind(i, 90326)),
                Promise.resolve().then(i.bind(i, 40229)),
                Promise.resolve().then(i.bind(i, 80195)),
                Promise.resolve().then(i.bind(i, 8264)),
                Promise.resolve().then(i.bind(i, 3630)),
                Promise.resolve().then(i.bind(i, 89363)),
                Promise.resolve().then(i.bind(i, 96677)),
                Promise.resolve().then(i.bind(i, 95432)),
                Promise.resolve().then(i.bind(i, 32562)),
                Promise.resolve().then(i.bind(i, 56568)),
                Promise.resolve().then(i.bind(i, 79884)),
                Promise.resolve().then(i.bind(i, 90048)),
                Promise.resolve().then(i.bind(i, 31236)),
                Promise.resolve().then(i.bind(i, 37340)),
                Promise.resolve().then(i.bind(i, 58345)),
                Promise.resolve().then(i.bind(i, 65755)),
                Promise.resolve().then(i.bind(i, 32152)),
                Promise.resolve().then(i.bind(i, 61748)),
                Promise.resolve().then(i.bind(i, 86844)),
                Promise.resolve().then(i.bind(i, 17106)),
                Promise.resolve().then(i.bind(i, 60244)),
                Promise.resolve().then(i.bind(i, 29268)),
                Promise.resolve().then(i.bind(i, 11260)),
                Promise.resolve().then(i.bind(i, 34925)),
                Promise.resolve().then(i.bind(i, 94218)),
                Promise.resolve().then(i.bind(i, 45257)),
                Promise.resolve().then(i.bind(i, 4008)),
                Promise.resolve().then(i.bind(i, 88523)),
                Promise.resolve().then(i.bind(i, 44390)),
                Promise.resolve().then(i.bind(i, 29926)),
                Promise.resolve().then(i.bind(i, 71079)),
                Promise.resolve().then(i.bind(i, 68009)),
                Promise.resolve().then(i.bind(i, 82219)),
                Promise.resolve().then(i.bind(i, 71913)),
                Promise.resolve().then(i.bind(i, 40609)),
                Promise.resolve().then(i.t.bind(i, 31906, 23));
        },
        16834: (e, n, i) => {
            'use strict';
            i.d(n, { KidsCategoryPage: () => j });
            var o = i(32290),
                r = i(63618),
                s = i(96103),
                t = i(21916),
                l = i(55178),
                d = i(59824),
                a = i(46049),
                m = i(71926),
                h = i(43557),
                v = i(32381),
                P = i(75645),
                b = i(49574),
                c = i(44574),
                u = i(75763),
                g = i.n(u),
                _ = i(6752),
                p = i(35188),
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
        28821: (e, n, i) => {
            'use strict';
            i.d(n, { KidsEditorialAlbumsPage: () => x });
            var o = i(32290),
                r = i(63618),
                s = i(96103),
                t = i(21916),
                l = i(55178),
                d = i(60900),
                a = i(59824),
                m = i(91027),
                h = i(6752),
                v = i(71926),
                P = i(32381),
                b = i(16486),
                c = i(75645),
                u = i(49574),
                g = i(44574),
                _ = i(72461),
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
        32381: (e, n, i) => {
            'use strict';
            i.d(n, { w: () => o.SomethingWentWrong });
            var o = i(60194);
        },
        35188: (e) => {
            e.exports = { root: 'KidsCategoryPageShimmer_root__0V_bC' };
        },
        43740: (e, n, i) => {
            'use strict';
            i.d(n, { a: () => r });
            var o = i(46862);
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
        45941: (e, n, i) => {
            'use strict';
            i.d(n, { KidsNotFoundPage: () => d });
            var o = i(32290),
                r = i(96103),
                s = i(55178),
                t = i(80719),
                l = i(49574);
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
        46456: (e, n, i) => {
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
                i(32290),
                i(51767),
                i(40199),
                i(15406);
        },
        55365: (e) => {
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
        57249: (e, n, i) => {
            'use strict';
            e.exports = i.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        60194: (e, n, i) => {
            'use strict';
            i.d(n, { SomethingWentWrong: () => u });
            var o = i(32290),
                r = i(63618),
                s = i(96103),
                t = i(55178),
                l = i(60900),
                d = i(39407),
                a = i(63423),
                m = i(82586),
                h = i(71926),
                v = i(49574),
                P = i(44574),
                b = i(30310),
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
        63397: (e, n, i) => {
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
                i(82105);
        },
        64910: (e, n, i) => {
            'use strict';
            Object.defineProperty(n, '__esModule', { value: !0 }),
                Object.defineProperty(n, 'default', {
                    enumerable: !0,
                    get: function () {
                        return d;
                    },
                });
            let o = i(32290),
                r = i(55178),
                s = i(63397);
            function t(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            i(46456);
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
        65493: (e, n, i) => {
            'use strict';
            i.d(n, { default: () => r.a });
            var o = i(95574),
                r = i.n(o);
        },
        70063: (e, n, i) => {
            'use strict';
            i.d(n, { KidsPage: () => x });
            var o = i(32290),
                r = i(63618),
                s = i(96103),
                t = i(55178),
                l = i(60900),
                d = i(39407),
                a = i(59824),
                m = i(73474),
                h = i(46049),
                v = i(71926),
                P = i(43557),
                b = i(32381),
                c = i(75645),
                u = i(49574),
                g = i(44574),
                _ = i(96471),
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
        72461: (e) => {
            e.exports = {
                root: 'KidsEditorialAlbumsPage_root__7rHF8',
                scrollContainer: 'KidsEditorialAlbumsPage_scrollContainer__nQVlt',
                important: 'KidsEditorialAlbumsPage_important__hmmxn',
                footer: 'KidsEditorialAlbumsPage_footer__6rwU1',
                item: 'KidsEditorialAlbumsPage_item__Wc243',
                content: 'KidsEditorialAlbumsPage_content__u3zcW',
            };
        },
        75763: (e) => {
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
        76822: (e, n, i) => {
            'use strict';
            let o;
            i.d(n, { useMetrika: () => t });
            var r = i(55178),
                s = i(43740);
            let t = () => {
                let e = (o || (o = (0, s.a)()), o),
                    n = (0, r.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, r.useMemo)(() => ({ ...e, isLoaded: n }), [n]);
            };
        },
        78635: (e) => {
            e.exports = {
                root: 'KidsEditorialPlaylistsPage_root__HeHqc',
                scrollContainer: 'KidsEditorialPlaylistsPage_scrollContainer__Hy6HY',
                important: 'KidsEditorialPlaylistsPage_important__283cd',
                footer: 'KidsEditorialPlaylistsPage_footer___UaP5',
                item: 'KidsEditorialPlaylistsPage_item__0wBk2',
                content: 'KidsEditorialPlaylistsPage_content__6wWkP',
            };
        },
        80719: (e, n, i) => {
            'use strict';
            i.d(n, { M: () => o.NotFound });
            var o = i(12119);
        },
        81354: (e, n, i) => {
            'use strict';
            i.d(n, { XU: () => h });
            var o,
                r,
                s = i(30782),
                t = i(55178),
                l = i(60900);
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
        95574: (e, n, i) => {
            'use strict';
            Object.defineProperty(n, '__esModule', { value: !0 }),
                Object.defineProperty(n, 'default', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                });
            let o = i(33399)._(i(64910));
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
        96471: (e) => {
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
    },
]);
