(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5233],
    {
        1466: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => p });
            var s = a(25839),
                i = a(82298),
                o = a(74631),
                l = a(39004),
                n = a(8487),
                r = a(4071),
                c = a(66738),
                d = a(4254),
                u = a(51790),
                _ = a(12558),
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
        4848: (e, t, a) => {
            'use strict';
            a.d(t, { CollectionPlaylistsLikedPage: () => S });
            var s = a(25839),
                i = a(82298),
                o = a(88204),
                l = a(74631),
                n = a(39004),
                r = a(8487),
                c = a(61493),
                d = a(99670),
                u = a(70238),
                _ = a(4254),
                m = a(1407),
                p = a(41707),
                C = a(20258),
                g = a(10322),
                x = a(21784),
                f = a(89192),
                y = a(30716),
                P = a(27954),
                k = a(60678),
                N = a(99401),
                h = a(26076),
                v = a(10603),
                L = a(19412),
                j = a(6968),
                E = a(76344),
                R = a.n(E);
            let S = (0, o.PA)(() => {
                let {
                        user: e,
                        collection: {
                            playlists: { playlistsLiked: t },
                        },
                        settings: { isMobile: a },
                    } = (0, P.g)(),
                    { formatMessage: o } = (0, n.A)(),
                    { contentScrollRef: E, setContentScrollRef: S } = (0, f.g)(),
                    b = (0, x.W)(),
                    A = (0, l.useMemo)(() => ({ Footer: () => (0, s.jsx)(h.A, { children: (0, s.jsx)(N.w, { className: R().footer }) }) }), []);
                (0, y.J)(t.isResolved);
                let I = (0, l.useCallback)(
                    (a) => {
                        e.account.data.uid && t.getData({ userId: e.account.data.uid, sortOrder: d.x.DESC, playlistMetaType: u.S.MUSIC, page: a, pageSize: 20 });
                    },
                    [t, e.account.data.uid],
                );
                ((0, k.X)(t.pagesLoader, I),
                    (0, l.useEffect)(
                        () => () => {
                            t.reset();
                        },
                        [t],
                    ),
                    e.account.data.uid &&
                        t.isNeededToLoad &&
                        (0, l.use)(t.getData({ userId: e.account.data.uid, sortOrder: d.x.DESC, playlistMetaType: u.S.MUSIC, page: 0, pageSize: 20 })));
                let T = t.isShimmerVisible ? 20 : t.items.length;
                return (0, s.jsx)(g.n, {
                    pageId: C._Q.OWN_PLAYLISTS,
                    children: (0, s.jsx)(m.h, {
                        scrollElement: E,
                        outerTitle: o({ id: 'entity-names.favourite-playlists' }),
                        children: (0, s.jsxs)('div', {
                            className: R().root,
                            'data-test-id': c.Xk.collection.COLLECTION_PLAYLISTS_LIKED_PAGE,
                            children: [
                                (0, s.jsx)(v.Y, {
                                    variant: v.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: b.canBack,
                                    children: (0, s.jsx)(_.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, s.jsx)(r.A, { id: 'entity-names.favourite-playlists' }),
                                    }),
                                }),
                                (0, s.jsx)(j.$, {
                                    className: (0, i.$)(R().scrollContainer, R().important),
                                    customComponents: A,
                                    itemContentCallback: (e) => {
                                        let a = t.items[e],
                                            i = o({ id: 'loading-messages.entity-is-loading' }, { entityName: o({ id: 'entity-names.playlist' }) });
                                        return a ? (0, s.jsx)(p.B, { playlist: a, contentLinesCount: 3 }, a.key) : (0, s.jsx)(L.V, { 'aria-label': i });
                                    },
                                    totalCount: T,
                                    onGetDataByPage: I,
                                    pageSize: 20,
                                    totalRequests: t.requestsCount,
                                    listClassName: R().content,
                                    itemClassName: R().item,
                                    handleRef: S,
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
        12558: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        60678: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => d });
            var s = a(25839),
                i = a(74631),
                o = a(71035),
                l = a(1466),
                n = a(91149),
                r = a(92942),
                c = a(36159);
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
        76344: (e) => {
            e.exports = {
                root: 'CollectionPlaylistsLikedPage_root__ZyIwA',
                scrollContainer: 'CollectionPlaylistsLikedPage_scrollContainer__H_vPA',
                important: 'CollectionPlaylistsLikedPage_important__GjYTU',
                content: 'CollectionPlaylistsLikedPage_content__WIxhp',
                footer: 'CollectionPlaylistsLikedPage_footer__A60Ui',
                item: 'CollectionPlaylistsLikedPage_item__PpCht',
            };
        },
        98888: (e, t, a) => {
            (Promise.resolve().then(a.bind(a, 30871)), Promise.resolve().then(a.bind(a, 4848)));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1676, 3349, 7339, 6287, 2121, 3472, 1107, 7349, 2099, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 3269, 4163, 3246, 3482,
                6680, 6504, 5329, 8836, 820, 4434, 48, 6361, 7707, 4475, 5056, 7358,
            ],
            () => e((e.s = 98888)),
        ),
            (_N_E = e.O()));
    },
]);
