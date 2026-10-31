(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8143],
    {
        5295: (e, t, o) => {
            'use strict';
            o.d(t, { e: () => i });
            var l = o(54683);
            let i = (e, t, o) => {
                let i = null != t ? t : l.wT,
                    n = null != o ? o : l.by,
                    a = (0, l.de)((0, l.aq)(e), i, n),
                    r = Math.round(255 * a[0]),
                    s = Math.round(255 * a[1]),
                    c = Math.round(255 * a[2]);
                return 'rgb('.concat(r, ', ').concat(s, ', ').concat(c, ')');
            };
        },
        13705: (e, t, o) => {
            (Promise.resolve().then(o.bind(o, 57328)),
                Promise.resolve().then(o.bind(o, 29681)),
                Promise.resolve().then(o.bind(o, 20551)),
                Promise.resolve().then(o.bind(o, 8679)),
                Promise.resolve().then(o.bind(o, 64546)));
        },
        17071: (e, t, o) => {
            'use strict';
            o.d(t, { M: () => l });
            var l = (function (e) {
                return (
                    (e.MAIN = 'MAIN'),
                    (e.TRAILER = 'TRAILER'),
                    (e.VIDEO_PLAYER = 'VIDEO_PLAYER'),
                    (e.IMAGE_SLIDER = 'IMAGE_SLIDER'),
                    (e.PROMO_LANDING = 'PROMO_LANDING'),
                    e
                );
            })({});
        },
        29681: (e, t, o) => {
            'use strict';
            o.d(t, { CollectionPage: () => ee });
            var l = o(88800),
                i = o(65724),
                n = o(84961),
                a = o(53548),
                r = o(2058),
                s = o(17392),
                c = o(46312),
                d = o(29993),
                _ = o(66719),
                E = o(53779),
                C = o(25772),
                u = o(32596),
                h = o(20129),
                L = o(67858),
                g = o(69630),
                m = o(12816),
                A = o(59844),
                P = o(44230),
                x = o(37670),
                O = o(72288),
                N = o(86790),
                j = o(60266),
                y = o(34726),
                p = o.n(y),
                T = o(92716),
                k = o(82204),
                R = o(77948),
                I = o(99564),
                v = o(38003),
                b = o(35412),
                w = o(97956),
                D = o(88969),
                H = o(29504),
                f = o(5295),
                S = o(63807),
                M = o(94398),
                W = o(96817),
                G = o(90688),
                U = o(96527),
                V = o(81438),
                F = o(78940),
                z = o(90286),
                B = o.n(z);
            let Y = (0, n.PA)((e) => {
                let { chatUrl: t, className: o } = e,
                    { user: n, paywall: c, lumen: _ } = (0, O.g)(),
                    { formatMessage: E } = (0, r.A)(),
                    { faceCover: C } = (0, V.x)(),
                    u = (0, F.Z)(t),
                    h = (0, U.N)(),
                    L = E({ id: 'collection.lumen-chat' });
                (0, a.useEffect)(() => {
                    _.isNeededToLoad && _.getData();
                }, [_, _.isNeededToLoad]);
                let g = (0, d.c)((e) => {
                    if ((e.stopPropagation(), h({ to: T.AppScreen.LumenChat, deepLink: t }), !n.hasPlus)) return void c.openModal();
                    u(e);
                });
                return (0, l.jsx)(W.$, {
                    className: (0, i.$)(B().root, o),
                    variant: 'text',
                    withRipple: !1,
                    onClick: g,
                    'aria-label': L,
                    'data-test-id': s.Xk.collection.COLLECTION_LUMEN_BUTTON,
                    children:
                        C &&
                        (0, l.jsx)(G._V, {
                            src: C,
                            size: 'orig',
                            withAvatarReplace: !0,
                            withFallback: !1,
                            withLoadingIndicator: !1,
                            className: B().image,
                            alt: '',
                            fit: 'contain',
                        }),
                });
            });
            var K = o(42044),
                $ = o.n(K);
            let Z = (0, n.PA)((e) => {
                let { chatUrl: t, isCollectionColorVisible: o } = e,
                    { user: n } = (0, O.g)(),
                    { formatMessage: s } = (0, r.A)(),
                    { isScrolling: c, isHeaderHidden: d } = (0, a.useContext)(S.B),
                    _ = !c && !d,
                    E = (0, a.useMemo)(() => {
                        if (o && n.collectionHue) return { '--collection-color': (0, f.e)(n.collectionHue) };
                    }, [o, n.collectionHue]),
                    C = (0, a.useMemo)(
                        () => ({
                            color: (e) =>
                                (0, l.jsx)(M.k, {
                                    title: s({ id: 'collection.collection-color-title' }),
                                    description: s({ id: 'collection.collection-color-description' }),
                                    placement: 'right',
                                    children: (0, l.jsx)('span', { className: $().collectionColor, style: E, children: e }),
                                }),
                        }),
                        [E, s],
                    );
                return (0, l.jsx)('header', {
                    className: (0, i.$)($().root, $().staticHeader),
                    children: (0, l.jsxs)('div', {
                        className: (0, i.$)($().staticContent, { [$().staticContent_hidden]: !_ }),
                        children: [
                            (0, l.jsxs)('div', {
                                className: $().title,
                                children: [
                                    (0, l.jsx)(H.DZ, { variant: 'h1', weight: 'bold', size: 'xl', children: (0, l.jsx)(D.A, { id: 'entity-names.collection' }) }),
                                    o &&
                                        (0, l.jsx)(H.HL, {
                                            className: $().description,
                                            variant: 'div',
                                            size: 'm',
                                            children: (0, l.jsx)(D.A, { id: 'collection.collection-color', values: C }),
                                        }),
                                ],
                            }),
                            t && _ && (0, l.jsx)(Y, { chatUrl: t }),
                        ],
                    }),
                });
            });
            var X = o(93317);
            let q = (e) => {
                    let { chatUrl: t } = e,
                        { isScrolling: o, scrollElement: n, title: r } = (0, a.useContext)(S.B),
                        s = (0, d.c)(() => {
                            (null != n ? n : window).scrollTo({ top: 0, behavior: 'smooth' });
                        });
                    return (0, l.jsx)('div', {
                        className: $().root,
                        onClick: s,
                        children: (0, l.jsx)(X.Y, {
                            variant: X.V.STICKY,
                            'aria-hidden': !o,
                            stickyClassName: (0, i.$)($().stickyHeader, $().important, { [$().stickyHeader_withLumen]: t }),
                            stickyChild: (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(H.DZ, {
                                        className: $().stickyTitle,
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 's',
                                        lineClamp: 1,
                                        'aria-hidden': !0,
                                        children: r,
                                    }),
                                    t && o && (0, l.jsx)(Y, { chatUrl: t, className: $().stickyLumen }),
                                ],
                            }),
                        }),
                    });
                },
                J = (0, n.PA)((e) => {
                    let { isCollectionColorVisible: t } = e,
                        o = (0, v.D)(),
                        i = (() => {
                            var e, t;
                            let { experiments: o } = (0, O.g)(),
                                l = o.getExperiment(w.z.WebNextLumenCollectionEntryPoint),
                                i = (null == l || null == (e = l.value) ? void 0 : e.title) === 'on',
                                n = null == l || null == (t = l.value) ? void 0 : t.chat_url;
                            if (!i || 'string' != typeof n) return;
                            let a = (0, b.Rj)(n, { allowedProtocols: new Set([b.cy.HTTPS]) });
                            if (a.isAllowed) return a.url.href;
                        })();
                    return (
                        (0, a.useEffect)(() => {
                            i && o(!0, '');
                        }, [i, o]),
                        (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(Z, { chatUrl: i, isCollectionColorVisible: t }), (0, l.jsx)(q, { chatUrl: i })] })
                    );
                }),
                Q = (e) =>
                    (0, l.jsx)(I.h, {
                        tabId: '',
                        tabPos: 0,
                        isTabSelectedByDefault: !1,
                        children: (0, l.jsx)(k.F, {
                            blockId: T.EntityTypes.LumenEntryPoint,
                            blockType: T.EntityTypes.LumenEntryPoint,
                            blockPosX: 1,
                            blockPosY: 1,
                            children: (0, l.jsx)(R.B, {
                                objectType: T.DomainObjectType.Lumen,
                                objectId: '',
                                objectPosX: 1,
                                objectPosY: 1,
                                objectsCount: 1,
                                children: (0, l.jsx)(J, { ...e }),
                            }),
                        }),
                    }),
                ee = (0, n.PA)(() => {
                    let { collection: e, user: t, library: o } = (0, O.g)(),
                        { contentScrollRef: n, setContentScrollRef: y } = (0, P.g)(),
                        { formatMessage: T } = (0, r.A)(),
                        k = !e.landing.isRejected && !!t.collectionHue;
                    ((0, a.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, x.J)(e.landing.isResolved));
                    let R = (0, E._)(e.landing),
                        I = (0, d.c)(() => {
                            if (e.landing.isLoaded)
                                return e.landing.getSkeleton({ id: c.p.WEB_COLLECTION, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 });
                        });
                    if (((0, L.y)(I), e.landing.isNeededToLoad)) {
                        let l = [e.landing.getSkeleton({ id: c.p.WEB_COLLECTION, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 }), o.getData()];
                        (0, a.use)(Promise.allSettled(l));
                    }
                    return (0, l.jsxs)(A.n, {
                        pageId: m._Q.OWN_COLLECTION,
                        children: [
                            (0, l.jsxs)(g.h, {
                                scrollElement: n,
                                outerTitle: T({ id: 'entity-names.collection' }),
                                children: [
                                    (0, l.jsx)(Q, { isCollectionColorVisible: k }),
                                    (0, l.jsxs)(_.N, {
                                        className: (0, i.$)(p().root, { [p().root_withCollectionColor]: k }),
                                        containerClassName: p().content,
                                        ref: y,
                                        children: [
                                            (0, l.jsx)('div', {
                                                className: (0, i.$)(p().landing, { [p().landing_onlyWizard]: R }),
                                                'data-test-id': s.Xk.collection.COLLECTION_PAGE,
                                                children: (0, l.jsx)(C.E, {
                                                    landing: e.landing,
                                                    errorComponent: (0, l.jsx)(u.SomethingWentWrong, { className: p().error, withBackwardControl: !1 }),
                                                }),
                                            }),
                                            (0, l.jsx)(j.A, { children: (0, l.jsx)(N.w, { className: p().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, l.jsx)(h.p, { onFinishSuccess: I }),
                        ],
                    });
                });
        },
        34726: (e) => {
            e.exports = {
                root: 'CollectionPage_root__CZAxL',
                root_withCollectionColor: 'CollectionPage_root_withCollectionColor__4kV02',
                content: 'CollectionPage_content__c3f8z',
                landing: 'CollectionPage_landing__B4jW_',
                landing_onlyWizard: 'CollectionPage_landing_onlyWizard__umeEK',
                footer: 'CollectionPage_footer__9kzD0',
                footer_onlyWizard: 'CollectionPage_footer_onlyWizard__FxCwa',
                error: 'CollectionPage_error__xs4ZH',
            };
        },
        42044: (e) => {
            e.exports = {
                root: 'CollectionPageHeader_root__w7O2V',
                staticHeader: 'CollectionPageHeader_staticHeader__AySwR',
                staticContent: 'CollectionPageHeader_staticContent__hw1c8',
                staticContent_hidden: 'CollectionPageHeader_staticContent_hidden__xwfkN',
                stickyHeader: 'CollectionPageHeader_stickyHeader__sRA5m',
                important: 'CollectionPageHeader_important__vAeIM',
                stickyHeader_withLumen: 'CollectionPageHeader_stickyHeader_withLumen__I0vVu',
                stickyTitle: 'CollectionPageHeader_stickyTitle__E8CFd',
                title: 'CollectionPageHeader_title__7jMY7',
                description: 'CollectionPageHeader_description__HkJfi',
                collectionColor: 'CollectionPageHeader_collectionColor__gwUiT',
                stickyLumen: 'CollectionPageHeader_stickyLumen__5BWAu',
            };
        },
        51318: (e, t, o) => {
            'use strict';
            o.d(t, { l: () => l });
            var l = (function (e) {
                return (
                    (e.TOGGLE_PLAY = 'TOGGLE_PLAY'),
                    (e.TOGGLE_MUTE = 'TOGGLE_MUTE'),
                    (e.INCREASE_VOLUME = 'INCREASE_VOLUME'),
                    (e.DECREASE_VOLUME = 'DECREASE_VOLUME'),
                    (e.LIKE = 'LIKE'),
                    (e.DISLIKE = 'DISLIKE'),
                    (e.MOVE_FORWARD = 'MOVE_FORWARD'),
                    (e.MOVE_BACKWARD = 'MOVE_BACKWARD'),
                    (e.SLIDE_FORWARD = 'SLIDE_FORWARD'),
                    (e.SLIDE_BACKWARD = 'SLIDE_BACKWARD'),
                    (e.TOGGLE_REPEAT = 'TOGGLE_REPEAT'),
                    (e.TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE'),
                    (e.TOGGLE_FULLSCREEN_PLAYER = 'TOGGLE_FULLSCREEN_PLAYER'),
                    (e.CLOSE = 'CLOSE'),
                    e
                );
            })({});
        },
        53779: (e, t, o) => {
            'use strict';
            o.d(t, { _: () => i });
            var l = o(82212);
            let i = (e) => {
                var t, o, i, n;
                return (
                    !!Array.isArray(e.tabs.data) &&
                    1 === e.tabs.data.length &&
                    (null == (o = e.tabs.data[0]) || null == (t = o.blocks) ? void 0 : t.length) === 1 &&
                    (null == (n = e.tabs.data[0]) || null == (i = n.blocks[0]) ? void 0 : i.type) === l.t.WIZARD
                );
            };
        },
        90286: (e) => {
            e.exports = { root: 'CollectionLumenEntry_root__cVdqM', image: 'CollectionLumenEntry_image___EUNM' };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7435, 8752, 7759, 5083, 8797, 127, 3637, 4316, 4596, 8380, 5108, 1191, 1931, 100, 4863, 7456, 1445, 1138, 893, 6252, 3076, 7617, 9613, 6706, 4771, 1311,
                5201, 3075, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 5151, 1714, 9380, 1223, 8335, 4732, 1195, 1598, 6281, 1928, 7627, 9124, 7967, 900, 9934,
                6387, 4561, 9337, 4613, 3724, 818, 7053, 9425, 4322, 1372, 3547, 4683, 8835, 7555, 9667, 5277, 6820, 3979, 9306, 763, 2670, 7358,
            ],
            () => e((e.s = 13705)),
        ),
            (_N_E = e.O()));
    },
]);
