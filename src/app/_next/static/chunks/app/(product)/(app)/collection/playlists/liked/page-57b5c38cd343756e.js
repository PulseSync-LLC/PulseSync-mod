(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5233],
    {
        11262: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => d });
            var s = a(32290),
                i = a(55178),
                o = a(91027),
                l = a(71730),
                n = a(45477),
                r = a(75582),
                c = a(49399);
            let d = (e, t) => {
                let { notify: a, dismiss: d } = (0, r.l)(),
                    u = (0, i.useRef)(void 0),
                    _ = (0, o.c)(() => {
                        var a;
                        d({ notificationId: u.current }), (u.current = 0);
                        let s = [...(null != (a = e.lastRejectedPagesList) ? a : [])].reverse().filter((t) => {
                            var a;
                            return (null == (a = e.pageStates) ? void 0 : a[t]) === c.G.REJECT;
                        });
                        e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            });
                    });
                (0, i.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = a((0, s.jsx)(l.L, { reloadBlocks: _ }), { containerId: n.u.ERROR, autoClose: !1 }));
                }, [d, _, a, e.rejectedPagesCount]);
            };
        },
        14824: (e, t, a) => {
            'use strict';
            a.d(t, { CollectionPlaylistsLikedPage: () => S });
            var s = a(32290),
                i = a(63618),
                o = a(96103),
                l = a(55178),
                n = a(60900),
                r = a(39407),
                c = a(21732),
                d = a(8246),
                u = a(10398),
                _ = a(71926),
                m = a(7999),
                p = a(83460),
                C = a(48922),
                g = a(22714),
                x = a(83808),
                f = a(83920),
                y = a(3796),
                P = a(57594),
                k = a(11262),
                N = a(58054),
                h = a(32468),
                v = a(74694),
                L = a(89020),
                j = a(45257),
                E = a(50088),
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
                (0, k.X)(t.pagesLoader, I),
                    (0, l.useEffect)(
                        () => () => {
                            t.reset();
                        },
                        [t],
                    ),
                    e.account.data.uid &&
                        t.isNeededToLoad &&
                        (0, l.use)(t.getData({ userId: e.account.data.uid, sortOrder: d.x.DESC, playlistMetaType: u.S.MUSIC, page: 0, pageSize: 20 }));
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
        50088: (e) => {
            e.exports = {
                root: 'CollectionPlaylistsLikedPage_root__ZyIwA',
                scrollContainer: 'CollectionPlaylistsLikedPage_scrollContainer__H_vPA',
                important: 'CollectionPlaylistsLikedPage_important__GjYTU',
                content: 'CollectionPlaylistsLikedPage_content__WIxhp',
                footer: 'CollectionPlaylistsLikedPage_footer__A60Ui',
                item: 'CollectionPlaylistsLikedPage_item__PpCht',
            };
        },
        63393: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 3377)), Promise.resolve().then(a.bind(a, 14824));
        },
        70718: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        71730: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => p });
            var s = a(32290),
                i = a(63618),
                o = a(55178),
                l = a(60900),
                n = a(39407),
                r = a(63423),
                c = a(82586),
                d = a(71926),
                u = a(58534),
                _ = a(70718),
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
    },
    (e) => {
        e.O(
            0,
            [
                5718, 7034, 7231, 6347, 3183, 9763, 6639, 7258, 2163, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6477, 7275, 2586, 8347, 7702, 6874,
                861, 782, 4668, 9740, 1175, 14, 8816, 3695, 4220, 9562, 7358,
            ],
            () => e((e.s = 63393)),
        ),
            (_N_E = e.O());
    },
]);
