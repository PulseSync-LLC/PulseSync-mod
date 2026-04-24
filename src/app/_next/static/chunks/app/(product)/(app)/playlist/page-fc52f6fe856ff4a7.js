(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8209],
    {
        83: (t, e, a) => {
            'use strict';
            a.d(e, { PlaylistPersonalPage: () => d });
            var s = a(62936),
                i = a(19718),
                o = a(69526),
                l = a(44020),
                r = a(42561),
                n = a(3535);
            let d = (0, i.PA)((t) => {
                let { params: e, searchParams: a } = t,
                    { playlistPersonal: i } = (0, r.Pjs)(),
                    d = i.getUrl(a);
                if (
                    ((0, l.useEffect)(() => {
                        i.isNeededToLoad && i.getPlaylistPersonalDetails(e.playlistId);
                    }, [i.isNeededToLoad, e.playlistId, i]),
                    (0, l.useEffect)(
                        () => () => {
                            i.reset();
                        },
                        [i],
                    ),
                    (0, r.Jzs)(i.isResolved),
                    (i.isNotFound || i.isRejected) && (0, o.notFound)(),
                    i.isResolved && !i.isReady)
                )
                    return i.dummyDescription || (0, o.notFound)(), (0, s.jsx)(n.PlaylistPersonalDummyPage, {});
                i.isResolved && i.isReady && (0, o.redirect)(d);
            });
        },
        3535: (t, e, a) => {
            'use strict';
            a.d(e, { PlaylistPersonalDummyPage: () => m });
            var s = a(62936),
                i = a(79950),
                o = a(19718),
                l = a(20418),
                r = a(42561),
                n = a(85906),
                d = a(67341),
                u = a.n(d);
            let m = (0, o.PA)(() => {
                let {
                    playlistPersonal: { dummyCoverUrl: t, dummyDescription: e, title: a },
                } = (0, r.Pjs)();
                return (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(n.Y9, {}),
                        (0, s.jsx)(n.BW, { src: t, size: 200, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0, className: u().cover }),
                        a && (0, s.jsx)(l.Heading, { className: (0, i.$)(u().title, u().important), variant: 'h1', size: 'xs', children: a }),
                        e &&
                            (0, s.jsx)(l.Caption, {
                                className: (0, i.$)(u().text, u().important),
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'normal',
                                children: e,
                            }),
                    ],
                });
            });
        },
        9939: (t, e, a) => {
            'use strict';
            a.d(e, { M: () => s.NotFound });
            var s = a(91455);
        },
        25639: (t, e, a) => {
            'use strict';
            a.r(e), a.d(e, { default: () => l });
            var s = a(62936),
                i = a(69526),
                o = a(77806);
            let l = () => {
                let t = (0, i.useSearchParams)().get('playlistId');
                return t || (0, i.notFound)(), (0, s.jsx)(o.uA, { params: { playlistId: t } });
            };
        },
        52323: (t, e, a) => {
            Promise.resolve().then(a.bind(a, 25639));
        },
        67341: (t) => {
            t.exports = {
                root: 'PlaylistPersonalDummyPage_root__tGxHG',
                cover: 'PlaylistPersonalDummyPage_cover__XcCD1',
                title: 'PlaylistPersonalDummyPage_title__ZSf9O',
                important: 'PlaylistPersonalDummyPage_important__uEHGe',
                text: 'PlaylistPersonalDummyPage_text__ci30d',
            };
        },
        77806: (t, e, a) => {
            'use strict';
            a.d(e, { uA: () => n.PlaylistPersonalPage, Hj: () => r });
            var s = a(51606),
                i = a(14525),
                o = a(42561),
                l = a(54690);
            let r = s.gK
                .compose(
                    s.gK.model('PlaylistPersonalPage', {
                        errorStatusCode: s.gK.maybeNull(s.gK.number),
                        playlistUuid: s.gK.maybe(s.gK.string),
                        isReady: s.gK.optional(s.gK.boolean, !1),
                        dummyCoverUrl: s.gK.maybe(s.gK.string),
                        dummyDescription: s.gK.maybe(s.gK.string),
                        title: s.gK.maybe(s.gK.string),
                    }),
                    l.XT,
                )
                .views((t) => ({
                    getUrl(e) {
                        if (!t.playlistUuid) return '';
                        let { href: a } = (0, o.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: t.playlistUuid }, query: e });
                        return a;
                    },
                    get url() {
                        if (!t.playlistUuid) return '';
                        let { href: e } = (0, o.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: t.playlistUuid } });
                        return e;
                    },
                    get isNotFound() {
                        let e = t.errorStatusCode === i.X1.NOT_FOUND || t.errorStatusCode === i.X1.BAD_REQUEST;
                        return t.loadingState === o.GuX.REJECT && e;
                    },
                }))
                .actions((t) => ({
                    getPlaylistPersonalDetails: (0, s.L3)(function* (e) {
                        if (!(0, s._n)(t)) return;
                        let { playlistsResource: a, modelActionsLogger: l } = (0, s._$)(t);
                        if (t.loadingState !== o.GuX.PENDING)
                            try {
                                var r, n;
                                t.loadingState = o.GuX.PENDING;
                                let s = yield a.getPlaylistPersonal({ playlistId: e });
                                if ((null == (r = s.error) ? void 0 : r.name) === 'no-such-playlist') {
                                    (t.errorStatusCode = i.X1.NOT_FOUND), (t.loadingState = o.GuX.REJECT);
                                    return;
                                }
                                (t.isReady = s.ready),
                                    (t.playlistUuid = s.data.playlistUuid),
                                    (t.dummyCoverUrl = null == (n = s.data.dummyCover) ? void 0 : n.uri),
                                    (t.dummyDescription = s.data.dummyDescription),
                                    (t.title = s.data.title),
                                    t.loadingState !== o.GuX.IDLE && (t.loadingState = o.GuX.RESOLVE);
                            } catch (e) {
                                l.error(e),
                                    e instanceof i.GX && (e.statusCode === i.X1.NOT_FOUND || e.statusCode === i.X1.BAD_REQUEST) && (t.errorStatusCode = i.X1.NOT_FOUND),
                                    t.loadingState !== o.GuX.IDLE && (t.loadingState = o.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (t.loadingState = o.GuX.IDLE),
                            (t.errorStatusCode = null),
                            (t.isReady = !1),
                            (t.playlistUuid = void 0),
                            (t.dummyCoverUrl = void 0),
                            (t.dummyDescription = void 0),
                            (t.title = void 0);
                    },
                }));
            a(3535), a(62936), a(9939);
            var n = a(83);
        },
        88933: (t) => {
            t.exports = {
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
        91455: (t, e, a) => {
            'use strict';
            a.d(e, { NotFound: () => p });
            var s = a(62936),
                i = a(79950),
                o = a(19718),
                l = a(26731),
                r = a(5099),
                n = a(85742),
                d = a(20418),
                u = a(42561),
                m = a(85906),
                c = a(44020),
                y = a(88933),
                _ = a.n(y);
            let p = (0, o.PA)((t) => {
                let { className: e, title: a, description: o, iconVariant: y = 'musicLogo', iconClassName: p, iconSize: g } = t,
                    { contentRef: P } = (0, u.gKY)(),
                    N = (0, u.ZpR)(u.Zyd.main.href);
                (0, u.LZB)();
                let { handleNavigateToMain: v } = (0, u.D5F)(N);
                return (
                    (0, u.NBO)(!0),
                    !(function () {
                        let { location: t } = (0, u.Pjs)();
                        (0, c.useEffect)(
                            () => (
                                t.setNotFound(!0),
                                () => {
                                    t.setNotFound(!1);
                                }
                            ),
                            [t],
                        );
                    })(),
                    (0, s.jsxs)('div', {
                        className: (0, i.$)(_().root, { [_().root_desktop]: !P }, e),
                        children: [
                            (0, s.jsx)(m.Lh, { withBackwardFallback: '/', className: _().navigation, withForwardControl: !1 }),
                            (0, s.jsxs)('div', {
                                className: _().content,
                                children: [
                                    (0, s.jsx)(n.Icon, { className: (0, i.$)(_().icon, p), variant: y, size: g }),
                                    (0, s.jsx)(d.Heading, {
                                        className: (0, i.$)(_().title, _().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: a || (0, s.jsx)(l.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, s.jsx)(d.Caption, {
                                        className: (0, i.$)(_().text, _().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: o || (0, s.jsx)(l.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, s.jsx)(r.$, {
                                        onClick: v,
                                        className: _().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, s.jsx)(l.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
    },
    (t) => {
        t.O(0, [85, 260, 3196, 403, 4103, 1970, 1311, 7764, 6706, 2899, 5419, 2561, 5906, 4690, 1009, 4670, 7358], () => t((t.s = 52323))), (_N_E = t.O());
    },
]);
