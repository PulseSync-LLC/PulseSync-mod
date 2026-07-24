(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1091],
    {
        2047: (e, t, a) => {
            'use strict';
            var l;
            a.d(t, { L: () => l }),
                (function (e) {
                    (e.PUBLIC = 'public'), (e.PRIVATE = 'private');
                })(l || (l = {}));
        },
        9813: (e) => {
            e.exports = {
                root: 'CollectionPlaylistsPageHeader_root__GfGIl',
                container: 'CollectionPlaylistsPageHeader_container__oh7C2',
                title: 'CollectionPlaylistsPageHeader_title__2D23I',
                staticTabs: 'CollectionPlaylistsPageHeader_staticTabs__9c9yq',
                stickyTabs: 'CollectionPlaylistsPageHeader_stickyTabs__Iot6U',
                tab: 'CollectionPlaylistsPageHeader_tab__aNTOB',
                tabsShimmer: 'CollectionPlaylistsPageHeader_tabsShimmer__u9JIN',
                tabShimmer: 'CollectionPlaylistsPageHeader_tabShimmer__ekXeT',
                staticHeader: 'CollectionPlaylistsPageHeader_staticHeader__lzc4l',
                important: 'CollectionPlaylistsPageHeader_important__uR36G',
                stickyHeader: 'CollectionPlaylistsPageHeader_stickyHeader__ojvbQ',
            };
        },
        20567: (e) => {
            e.exports = {
                root: 'CreatePlaylistCard_root__pMDua',
                button: 'CreatePlaylistCard_button__ZaAtb',
                icon: 'CreatePlaylistCard_icon__09K9N',
                text: 'CreatePlaylistCard_text__dd9Q6',
            };
        },
        27496: (e) => {
            e.exports = {
                root: 'CollectionPlaylistsPage_root__1QnBw',
                content: 'CollectionPlaylistsPage_content__P3Br2',
                content_withGridLayout: 'CollectionPlaylistsPage_content_withGridLayout__ytZKv',
                footer: 'CollectionPlaylistsPage_footer__8nXuA',
                item: 'CollectionPlaylistsPage_item__SvtpO',
                scrollContainer: 'CollectionPlaylistsPage_scrollContainer__ECphU',
                important: 'CollectionPlaylistsPage_important__YtxxZ',
            };
        },
        38769: (e, t, a) => {
            'use strict';
            a.d(t, { a: () => l });
            var l = (function (e) {
                return (e[(e.CREATED = 0)] = 'CREATED'), (e[(e.LIKED = 1)] = 'LIKED'), e;
            })({});
        },
        44277: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => b });
            var l = a(32290),
                s = a(63618),
                i = a(96103),
                n = a(21916),
                o = a(55178),
                r = a(60900),
                c = a(39407),
                d = a(21732),
                u = a(2047),
                m = a(63423),
                _ = a(82586),
                y = a(71926),
                C = a(45477),
                h = a(75582),
                E = a(57594),
                P = a(36477),
                I = a(90357),
                p = a(20567),
                g = a.n(p);
            let b = (0, i.PA)((e) => {
                let { className: t } = e,
                    { formatMessage: a } = (0, r.A)(),
                    { createPlaylist: i } = (0, E.g)(),
                    { notify: p } = (0, h.l)(),
                    b = (0, n.useRouter)(),
                    T = (0, o.useRef)(!1),
                    x = (0, o.useCallback)(async () => {
                        if (T.current) return;
                        T.current = !0;
                        let e = await i.create({ title: a({ id: 'entity-names.new-playlist' }), visibility: u.L.PUBLIC });
                        if (e) {
                            let { href: t } = (0, P.u)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                            b.push(t);
                        } else p((0, l.jsx)(I.h, { error: a({ id: 'playlist-errors.failed-to-create-playlist' }) }), { containerId: C.u.ERROR }), (T.current = !1);
                    }, [i, a, b, p]);
                return (
                    (0, o.useEffect)(
                        () => () => {
                            i.reset();
                        },
                        [i],
                    ),
                    (0, l.jsxs)('div', {
                        className: (0, s.$)(g().root, t),
                        'data-test-id': d.OA.playlist.CREATE_PLAYLIST_CARD,
                        children: [
                            (0, l.jsx)(m.$, {
                                className: g().button,
                                icon: (0, l.jsx)(_.I, { className: g().icon, variant: 'add', size: 'l' }),
                                radius: 's',
                                'aria-label': a({ id: 'playlist-actions.create-playlist' }),
                                onClick: x,
                                flexIcon: !0,
                                isBlock: !0,
                                'data-test-id': d.OA.playlist.CREATE_PLAYLIST_BUTTON,
                            }),
                            (0, l.jsx)(y.HL, {
                                weight: 'medium',
                                size: 's',
                                variant: 'div',
                                className: g().text,
                                'data-test-id': d.OA.playlist.CREATE_PLAYLIST_TITLE,
                                children: (0, l.jsx)(c.A, { id: 'collection.new-playlist' }),
                            }),
                        ],
                    })
                );
            });
        },
        52302: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 3377)), Promise.resolve().then(a.bind(a, 67671));
        },
        67081: (e) => {
            e.exports = {
                root: 'CollectionPlaylistsPageEmpty_root__mKZt2',
                icon: 'CollectionPlaylistsPageEmpty_icon__x9v_P',
                title: 'CollectionPlaylistsPageEmpty_title__8RfSi',
            };
        },
        67671: (e, t, a) => {
            'use strict';
            a.d(t, { CollectionPlaylistsPage: () => ea });
            var l = a(32290),
                s = a(63618),
                i = a(96103),
                n = a(21916),
                o = a(55178),
                r = a(60900),
                c = a(21732),
                d = a(8246),
                u = a(10398),
                m = a(91027),
                _ = a(6752),
                y = a(7999),
                C = a(83460),
                h = a(44277),
                E = a(48922),
                P = a(22714),
                I = a(83920),
                p = a(3796),
                g = a(57594),
                b = (function (e) {
                    return (e.CREATED = 'created'), (e.LIKED = 'liked'), e;
                })({}),
                T = a(97201),
                x = a(58054),
                A = a(32468),
                L = a(89020),
                v = a(45257),
                S = a(38769),
                D = a(15299);
            let N = (0, i.PA)((e) => {
                    let { style: t, forwardRef: a, context: s, ...i } = e,
                        {
                            collection: {
                                playlists: { activeTabIndex: n, tabIndexElement: o },
                            },
                        } = (0, g.g)(),
                        r = (0, D.zb)(n),
                        c = null == s ? void 0 : s.listAriaLabel;
                    return (0, l.jsx)(D.Kp, { value: r.value, name: r.value, elementId: o, 'aria-label': c, style: t, ref: a, ...i });
                }),
                j = (0, o.forwardRef)((e, t) => (0, l.jsx)(N, { forwardRef: t, ...e }));
            var k = a(27496),
                f = a.n(k),
                R = a(39407),
                w = a(82586),
                O = a(71926),
                B = a(67081),
                H = a.n(B);
            let M = (0, i.PA)((e) => {
                let { activeTabIndex: t, tabElementId: a } = e;
                return (0, l.jsxs)(D.Kp, {
                    value: t,
                    name: t,
                    elementId: a,
                    className: H().root,
                    children: [
                        (0, l.jsx)(w.I, { className: H().icon, size: 'l', variant: 'album' }),
                        (0, l.jsx)(O.DZ, {
                            className: H().title,
                            variant: 'h3',
                            size: 'xs',
                            children: (0, l.jsx)(R.A, { id: 'error-messages.empty-collection-liked-playlists' }),
                        }),
                    ],
                });
            });
            var K = a(83808),
                U = a(85377),
                Y = a(12894),
                z = a(45180),
                G = a(8946),
                V = a(20472),
                X = a(36477),
                Z = a(71670);
            let F = () => {
                let e = (0, Z.X)(),
                    {
                        collection: { playlists: t },
                    } = (0, g.g)();
                return (0, o.useCallback)(
                    (a) => {
                        switch ((t.setActiveTabIndex(a), a)) {
                            case S.a.CREATED: {
                                let { href: t } = (0, X.u)(V.Z.collectionPlaylists.href, { query: { tab: b.CREATED } });
                                e(t);
                                break;
                            }
                            case S.a.LIKED: {
                                let { href: t } = (0, X.u)(V.Z.collectionPlaylists.href, { query: { tab: b.LIKED } });
                                e(t);
                            }
                        }
                    },
                    [e, t],
                );
            };
            var $ = a(9813),
                W = a.n($),
                q = a(79856);
            let Q = () =>
                    (0, l.jsxs)('div', {
                        className: W().tabsShimmer,
                        children: [(0, l.jsx)(q.W, { className: W().tabShimmer }), (0, l.jsx)(q.W, { className: W().tabShimmer })],
                    }),
                J = (0, i.PA)(() => {
                    let {
                            collection: {
                                playlists: { playlistsCreated: e, playlistsLiked: t, tabIndexElement: a, activeTabIndex: s },
                            },
                        } = (0, g.g)(),
                        { formatMessage: i } = (0, r.A)(),
                        n = (0, K.W)(),
                        { isScrolling: d } = (0, o.useContext)(U.B),
                        u = F(),
                        m = (0, o.useMemo)(
                            () =>
                                e.items.length
                                    ? ''.concat(i({ id: 'collection.your-created-playlists' }), ' • ').concat(e.items.length)
                                    : i({ id: 'collection.your-created-playlists' }),
                            [i, e.items.length],
                        ),
                        _ = (0, o.useMemo)(
                            () =>
                                t.items.length
                                    ? ''.concat(i({ id: 'collection.your-liked-playlists' }), ' • ').concat(t.items.length)
                                    : i({ id: 'collection.your-liked-playlists' }),
                            [i, t.items.length],
                        );
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)('header', {
                                className: W().root,
                                'aria-hidden': d,
                                'data-test-id': c.Xk.collection.COLLECTION_PLAYLISTS_PAGE_STATIC_HEADER,
                                children: (0, l.jsxs)('div', {
                                    className: W().container,
                                    children: [
                                        n.canBack && (0, l.jsx)(Y.L, { withForwardControl: !1, withBackwardControl: n.canBack, shouldFocusOnMount: !d }),
                                        (0, l.jsx)(O.DZ, {
                                            variant: 'h2',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            className: W().title,
                                            'data-test-id': c.Xk.collection.COLLECTION_PLAYLISTS_PAGE_STATIC_HEADER_TITLE,
                                            children: (0, l.jsx)(R.A, { id: 'entity-names.artist-playlist' }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, l.jsxs)(G.wI, {
                                isShimmerVisible: e.isShimmerVisible,
                                shimmer: (0, l.jsx)(Q, {}),
                                className: W().staticTabs,
                                elementId: a,
                                value: s,
                                onTabChange: u,
                                children: [
                                    (0, l.jsx)(z.o, {
                                        className: W().tab,
                                        value: S.a.CREATED,
                                        title: m,
                                        'aria-label': i({ id: 'entity-names.created-playlists-count' }, { value: e.items.length }),
                                        'aria-hidden': d,
                                        tabIndex: d ? -1 : 0,
                                    }),
                                    (0, l.jsx)(z.o, {
                                        className: W().tab,
                                        value: S.a.LIKED,
                                        title: _,
                                        'aria-label': i({ id: 'entity-names.liked-playlists-count' }, { value: t.items.length }),
                                        'aria-hidden': d,
                                        tabIndex: d ? -1 : 0,
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var ee = a(74694);
            let et = (0, i.PA)((e) => {
                    let { tabElementId: t } = e,
                        {
                            collection: {
                                playlists: { playlistsCreated: a, playlistsLiked: i, activeTabIndex: n },
                            },
                        } = (0, g.g)(),
                        { formatMessage: d } = (0, r.A)(),
                        { isScrolling: u } = (0, o.useContext)(U.B),
                        m = (0, K.W)(),
                        _ = F(),
                        y = (0, o.useMemo)(
                            () =>
                                a.items.length
                                    ? ''.concat(d({ id: 'collection.your-created-playlists' }), ' • ').concat(a.items.length)
                                    : d({ id: 'collection.your-created-playlists' }),
                            [d, a.items.length],
                        ),
                        C = (0, o.useMemo)(
                            () =>
                                i.items.length
                                    ? ''.concat(d({ id: 'collection.your-liked-playlists' }), ' • ').concat(i.items.length)
                                    : d({ id: 'collection.your-liked-playlists' }),
                            [d, i.items.length],
                        );
                    return (0, l.jsx)(ee.Y, {
                        variant: ee.V.COMPOSITE,
                        staticClassName: (0, s.$)(W().staticHeader, W().important),
                        'aria-hidden': !u,
                        stickyClassName: (0, s.$)(W().stickyHeader, W().important),
                        containerProps: { 'data-test-id': c.Xk.collection.COLLECTION_PLAYLISTS_PAGE_STICKY_HEADER },
                        stickyChild: (0, l.jsxs)('div', {
                            className: W().container,
                            children: [
                                m.canBack && (0, l.jsx)(Y.L, { withForwardControl: !1, withBackwardControl: m.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, l.jsxs)(G.wI, {
                                    isShimmerVisible: a.isShimmerVisible,
                                    shimmer: (0, l.jsx)(Q, {}),
                                    className: W().stickyTabs,
                                    elementId: t,
                                    value: n,
                                    onTabChange: _,
                                    children: [
                                        (0, l.jsx)(z.o, {
                                            className: W().tab,
                                            value: S.a.CREATED,
                                            title: y,
                                            'aria-label': d({ id: 'entity-names.created-playlists-count' }, { value: a.items.length }),
                                            'aria-hidden': !u,
                                            tabIndex: u ? 0 : -1,
                                        }),
                                        (0, l.jsx)(z.o, {
                                            className: W().tab,
                                            value: S.a.LIKED,
                                            title: C,
                                            'aria-label': d({ id: 'entity-names.liked-playlists-count' }, { value: i.items.length }),
                                            'aria-hidden': !u,
                                            tabIndex: u ? 0 : -1,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                ea = (0, i.PA)(() => {
                    let e = (0, n.useSearchParams)(),
                        {
                            user: t,
                            collection: {
                                playlists: {
                                    playlistsCreated: a,
                                    playlistsLiked: i,
                                    setTabIndexElement: D,
                                    reset: N,
                                    setActiveTabIndex: k,
                                    isCreatedTabActive: R,
                                    isLikedTabActive: w,
                                    activeTabIndex: O,
                                    activePlaylistsModel: B,
                                    isEmptyLikedTab: H,
                                },
                            },
                            library: K,
                            settings: { isMobile: U },
                        } = (0, g.g)(),
                        { contentScrollRef: Y, setContentScrollRef: z } = (0, I.g)(),
                        G = (0, o.useId)();
                    (0, o.useEffect)(() => {
                        D(G);
                    }, [G, D]);
                    let { formatMessage: V } = (0, r.A)();
                    if (
                        ((0, o.useLayoutEffect)(() => {
                            switch (e.get(T.K.TAB)) {
                                case b.CREATED:
                                    k(S.a.CREATED);
                                    break;
                                case b.LIKED:
                                    k(S.a.LIKED);
                                    break;
                                default:
                                    k(S.a.CREATED);
                            }
                        }, [e, k]),
                        (0, p.J)(a.isResolved),
                        (0, o.useEffect)(
                            () => () => {
                                N();
                            },
                            [N],
                        ),
                        t.account.data.uid && a.isNeededToLoad)
                    ) {
                        let e = [
                            a.getData({ userId: t.account.data.uid, page: 0, pageSize: 20 }),
                            i.getData({ userId: t.account.data.uid, sortOrder: d.x.DESC, playlistMetaType: u.S.MUSIC, page: 0, pageSize: 20 }),
                            K.getData(),
                        ];
                        (0, o.use)(Promise.allSettled(e));
                    }
                    let X = (0, o.useMemo)(
                            () => ({ Header: () => (0, l.jsx)(J, {}), Footer: () => (0, l.jsx)(A.A, { children: (0, l.jsx)(x.w, { className: f().footer }) }), List: j }),
                            [],
                        ),
                        Z = (0, m.c)((e) => {
                            if (!t.account.data.uid) return;
                            let l = { userId: t.account.data.uid, page: e, pageSize: 20 };
                            switch (O) {
                                case S.a.CREATED:
                                    a.getData({ ...l });
                                    break;
                                case S.a.LIKED:
                                    i.getData({ sortOrder: d.x.DESC, playlistMetaType: u.S.MUSIC, ...l });
                            }
                        }),
                        F = (0, _.L)(() => {
                            switch (O) {
                                case S.a.CREATED:
                                    return a.items.length + 1;
                                case S.a.LIKED:
                                    var e;
                                    return H ? 1 : null != (e = i.items.length) ? e : 1;
                                default:
                                    return 1;
                            }
                        });
                    return (0, l.jsx)(P.n, {
                        pageId: E._Q.OWN_PLAYLISTS,
                        children: (0, l.jsx)(y.h, {
                            scrollElement: Y,
                            headerThreshold: 148,
                            children: (0, l.jsxs)('div', {
                                className: f().root,
                                'data-test-id': c.Xk.collection.COLLECTION_PLAYLISTS_PAGE,
                                children: [
                                    (0, l.jsx)(et, { tabElementId: G }),
                                    (0, l.jsx)(v.$, {
                                        className: (0, s.$)(f().scrollContainer, f().important),
                                        customComponents: X,
                                        itemContentCallback: (e) => {
                                            var t;
                                            if (R && 0 === e) return (0, l.jsx)(h.B, {});
                                            if (w && H) return (0, l.jsx)(M, { activeTabIndex: O, tabElementId: G });
                                            let a = R ? e - 1 : e,
                                                s = null == B || null == (t = B.items) ? void 0 : t[a],
                                                i = V({ id: 'loading-messages.entity-is-loading' }, { entityName: V({ id: 'entity-names.playlist' }) });
                                            return s ? (0, l.jsx)(C.B, { playlist: s, contentLinesCount: 3 }, s.key) : (0, l.jsx)(L.V, { 'aria-label': i });
                                        },
                                        totalCount: F,
                                        onGetDataByPage: Z,
                                        pageSize: 20,
                                        totalRequests: B.pagesLoader.requestsCount,
                                        listClassName: (0, s.$)(f().content, { [f().content_withGridLayout]: R || !H }, f().important),
                                        itemClassName: f().item,
                                        handleRef: z,
                                        context: { listAriaLabel: V({ id: 'collection.liked-playlists-list' }) },
                                        isMobileLayout: U,
                                        useWindowScroll: U,
                                    }),
                                ],
                            }),
                        }),
                    });
                });
        },
        71670: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => s });
            var l = a(55178);
            let s = () =>
                (0, l.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        97201: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => l });
            var l = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.MULTIVIBE_INVITE_ROOM_ID = 'multivibeInviteRoomId'),
                    e
                );
            })({});
        },
    },
    (e) => {
        e.O(
            0,
            [
                5718, 7034, 7231, 6347, 3183, 9763, 6639, 7258, 808, 3379, 3647, 1722, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6477, 7275, 2586,
                8347, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8816, 4797, 3695, 4220, 9562, 7358,
            ],
            () => e((e.s = 52302)),
        ),
            (_N_E = e.O());
    },
]);
