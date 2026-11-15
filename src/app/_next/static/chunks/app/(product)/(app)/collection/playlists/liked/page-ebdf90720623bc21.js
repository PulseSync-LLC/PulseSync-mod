(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5233],
    {
        4044: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        9492: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => p });
            var s = a(88800),
                i = a(65724),
                o = a(53548),
                l = a(2058),
                n = a(88969),
                r = a(96817),
                c = a(52300),
                d = a(29504),
                u = a(59304),
                _ = a(4044),
                m = a.n(_);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: a } = e,
                    _ = (0, o.useRef)(null),
                    { formatMessage: p } = (0, l.A)();
                (0, o.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let C = (0, o.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(n.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(r.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, s.jsx)(u.$, { className: (0, i.$)(m().root, m().important), message: C, closeToast: a });
            };
        },
        11886: (e) => {
            e.exports = {
                root: 'CollectionPlaylistsLikedPage_root__ZyIwA',
                scrollContainer: 'CollectionPlaylistsLikedPage_scrollContainer__H_vPA',
                important: 'CollectionPlaylistsLikedPage_important__GjYTU',
                content: 'CollectionPlaylistsLikedPage_content__WIxhp',
                footer: 'CollectionPlaylistsLikedPage_footer__A60Ui',
                item: 'CollectionPlaylistsLikedPage_item__PpCht',
            };
        },
        54320: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => d });
            var s = a(88800),
                i = a(53548),
                o = a(29993),
                l = a(9492),
                n = a(29595),
                r = a(74965),
                c = a(74773);
            let d = (e, t) => {
                let { notify: a, dismiss: d } = (0, r.l)(),
                    u = (0, i.useRef)(void 0),
                    _ = (0, o.c)(() => {
                        var a;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let s = [...(null != (a = e.lastRejectedPagesList) ? a : [])].reverse().filter((t) => {
                            var a;
                            return (null == (a = e.pageStates) ? void 0 : a[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, i.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = a((0, s.jsx)(l.L, { reloadBlocks: _ }), { containerId: n.u.ERROR, autoClose: !1 }));
                }, [d, _, a, e.rejectedPagesCount]);
            };
        },
        89442: (e, t, a) => {
            'use strict';
            a.d(t, { CollectionPlaylistsLikedPage: () => R });
            var s = a(88800),
                i = a(65724),
                o = a(84961),
                l = a(53548),
                n = a(2058),
                r = a(88969),
                c = a(87999),
                d = a(76903),
                u = a(17392),
                _ = a(15656),
                m = a(6688),
                p = a(29504),
                C = a(69630),
                g = a(41911),
                x = a(98427),
                f = a(46422),
                y = a(44230),
                P = a(37670),
                k = a(72288),
                N = a(54320),
                h = a(86790),
                v = a(60266),
                L = a(93317),
                j = a(37770),
                S = a(79418),
                b = a(11886),
                E = a.n(b);
            let R = (0, o.PA)(() => {
                let {
                        user: e,
                        collection: {
                            playlists: { playlistsLiked: t },
                        },
                        settings: { isMobile: a },
                    } = (0, k.g)(),
                    { formatMessage: o } = (0, n.A)(),
                    { contentScrollRef: b, setContentScrollRef: R } = (0, y.g)(),
                    A = (0, f.W)(),
                    I = (0, l.useMemo)(() => ({ Footer: () => (0, s.jsx)(v.A, { children: (0, s.jsx)(h.w, { className: E().footer }) }) }), []);
                (0, P.J)(t.isResolved);
                let T = (0, l.useCallback)(
                    (a) => {
                        e.account.data.uid && t.getData({ userId: e.account.data.uid, sortOrder: _.x.DESC, playlistMetaType: m.S.MUSIC, page: a, pageSize: 20 });
                    },
                    [t, e.account.data.uid],
                );
                ((0, N.X)(t.pagesLoader, T),
                    (0, l.useEffect)(
                        () => () => {
                            t.reset();
                        },
                        [t],
                    ),
                    e.account.data.uid &&
                        t.isNeededToLoad &&
                        (0, l.use)(t.getData({ userId: e.account.data.uid, sortOrder: _.x.DESC, playlistMetaType: m.S.MUSIC, page: 0, pageSize: 20 })));
                let B = t.isShimmerVisible ? 20 : t.items.length;
                return (0, s.jsx)(d.a, {
                    pageId: c.AppScreen.CollectionPlaylistsScreen,
                    pageIdForFrom: x.b.OWN_PLAYLISTS,
                    children: (0, s.jsx)(C.h, {
                        scrollElement: b,
                        outerTitle: o({ id: 'entity-names.favourite-playlists' }),
                        children: (0, s.jsxs)('div', {
                            className: E().root,
                            'data-test-id': u.Xk.collection.COLLECTION_PLAYLISTS_LIKED_PAGE,
                            children: [
                                (0, s.jsx)(L.Y, {
                                    variant: L.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: A.canBack,
                                    children: (0, s.jsx)(p.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, s.jsx)(r.A, { id: 'entity-names.favourite-playlists' }),
                                    }),
                                }),
                                (0, s.jsx)(S.$, {
                                    className: (0, i.$)(E().scrollContainer, E().important),
                                    customComponents: I,
                                    itemContentCallback: (e) => {
                                        let a = t.items[e],
                                            i = o({ id: 'loading-messages.entity-is-loading' }, { entityName: o({ id: 'entity-names.playlist' }) });
                                        return a ? (0, s.jsx)(g.B, { playlist: a, contentLinesCount: 3 }, a.key) : (0, s.jsx)(j.V, { 'aria-label': i });
                                    },
                                    totalCount: B,
                                    onGetDataByPage: T,
                                    pageSize: 20,
                                    totalRequests: t.requestsCount,
                                    listClassName: E().content,
                                    itemClassName: E().item,
                                    handleRef: R,
                                    context: { listAriaLabel: o({ id: 'collection.liked-playlists-list' }) },
                                    isMobileLayout: a,
                                    useWindowScroll: a,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        93965: (e, t, a) => {
            (Promise.resolve().then(a.bind(a, 57328)), Promise.resolve().then(a.bind(a, 89442)));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7908, 4700, 3248, 5038, 1147, 1191, 8655, 2691, 2031, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 4732, 9087, 3979,
                1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 2088, 1617, 763, 2670, 7358,
            ],
            () => e((e.s = 93965)),
        ),
            (_N_E = e.O()));
    },
]);
