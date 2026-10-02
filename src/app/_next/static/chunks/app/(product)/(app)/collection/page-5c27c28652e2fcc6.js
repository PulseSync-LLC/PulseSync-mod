(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8143],
    {
        3488: (e) => {
            e.exports = {
                root: 'CollectionPage_root__CZAxL',
                root_withCollectionColor: 'CollectionPage_root_withCollectionColor__4kV02',
                content: 'CollectionPage_content__c3f8z',
                header: 'CollectionPage_header__z193s',
                description: 'CollectionPage_description__A3dny',
                collectionColor: 'CollectionPage_collectionColor__M5l1f',
                landing: 'CollectionPage_landing__B4jW_',
                landing_onlyWizard: 'CollectionPage_landing_onlyWizard__umeEK',
                footer: 'CollectionPage_footer__9kzD0',
                footer_onlyWizard: 'CollectionPage_footer_onlyWizard__FxCwa',
                error: 'CollectionPage_error__xs4ZH',
            };
        },
        6206: (e, o, l) => {
            (Promise.resolve().then(l.bind(l, 30871)),
                Promise.resolve().then(l.bind(l, 20366)),
                Promise.resolve().then(l.bind(l, 25464)),
                Promise.resolve().then(l.bind(l, 29340)),
                Promise.resolve().then(l.bind(l, 6304)));
        },
        19425: (e, o, l) => {
            'use strict';
            l.d(o, { _: () => t });
            var n = l(35522);
            let t = (e) => {
                var o, l, t, i;
                return (
                    !!Array.isArray(e.tabs.data) &&
                    1 === e.tabs.data.length &&
                    (null == (l = e.tabs.data[0]) || null == (o = l.blocks) ? void 0 : o.length) === 1 &&
                    (null == (i = e.tabs.data[0]) || null == (t = i.blocks[0]) ? void 0 : t.type) === n.t.WIZARD
                );
            };
        },
        20366: (e, o, l) => {
            'use strict';
            l.d(o, { CollectionPage: () => v });
            var n = l(25839),
                t = l(82298),
                i = l(88204),
                r = l(74631),
                a = l(39004),
                s = l(8487),
                c = l(61493),
                d = l(97762),
                _ = l(71035),
                E = l(13833),
                L = l(4254),
                C = l(19425),
                g = l(32113),
                A = l(78299),
                h = l(89257),
                O = l(24004),
                u = l(1407),
                R = l(20258),
                I = l(10322),
                P = l(21213),
                N = l(89192),
                D = l(30716),
                G = l(27954),
                T = l(99401),
                m = l(26076),
                W = l(10603),
                M = l(60924),
                S = l(3488),
                x = l.n(S);
            let v = (0, i.PA)(() => {
                let { collection: e, user: o, library: l } = (0, G.g)(),
                    { contentScrollRef: i, setContentScrollRef: S } = (0, N.g)(),
                    { formatMessage: v } = (0, a.A)(),
                    j = !e.landing.isRejected && !!o.collectionHue;
                ((0, r.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, D.J)(e.landing.isResolved));
                let p = (0, C._)(e.landing),
                    f = (0, r.useMemo)(() => {
                        if (j && o.collectionHue) return { '--collection-color': (0, P.e)(o.collectionHue) };
                    }, [j, o.collectionHue]),
                    b = (0, r.useMemo)(
                        () => ({
                            color: (e) =>
                                (0, n.jsx)(M.k, {
                                    title: v({ id: 'collection.collection-color-title' }),
                                    description: v({ id: 'collection.collection-color-description' }),
                                    placement: 'right',
                                    children: (0, n.jsx)('span', { className: x().collectionColor, style: f, children: e }),
                                }),
                        }),
                        [f, v],
                    ),
                    w = (0, _.c)(() => {
                        if (e.landing.isLoaded) return e.landing.getSkeleton({ id: d.p.WEB_COLLECTION, showWizard: o.settings.showWizard }, { preloadBlocksCount: 2 });
                    });
                if (((0, O.y)(w), e.landing.isNeededToLoad)) {
                    let n = [e.landing.getSkeleton({ id: d.p.WEB_COLLECTION, showWizard: o.settings.showWizard }, { preloadBlocksCount: 2 }), l.getData()];
                    (0, r.use)(Promise.allSettled(n));
                }
                return (0, n.jsxs)(I.n, {
                    pageId: R._Q.OWN_COLLECTION,
                    children: [
                        (0, n.jsxs)(u.h, {
                            scrollElement: i,
                            outerTitle: v({ id: 'entity-names.collection' }),
                            children: [
                                (0, n.jsx)(W.Y, {
                                    variant: W.V.TEXT,
                                    showControls: !1,
                                    children: (0, n.jsxs)('div', {
                                        className: x().header,
                                        children: [
                                            (0, n.jsx)(L.DZ, { variant: 'h1', weight: 'bold', size: 'xl', children: (0, n.jsx)(s.A, { id: 'entity-names.collection' }) }),
                                            j &&
                                                (0, n.jsx)(L.HL, {
                                                    className: x().description,
                                                    variant: 'div',
                                                    size: 'm',
                                                    children: (0, n.jsx)(s.A, { id: 'collection.collection-color', values: b }),
                                                }),
                                        ],
                                    }),
                                }),
                                (0, n.jsxs)(E.N, {
                                    className: (0, t.$)(x().root, { [x().root_withCollectionColor]: j }),
                                    containerClassName: x().content,
                                    ref: S,
                                    children: [
                                        (0, n.jsx)('div', {
                                            className: (0, t.$)(x().landing, { [x().landing_onlyWizard]: p }),
                                            'data-test-id': c.Xk.collection.COLLECTION_PAGE,
                                            children: (0, n.jsx)(g.E, {
                                                landing: e.landing,
                                                errorComponent: (0, n.jsx)(A.SomethingWentWrong, { className: x().error, withBackwardControl: !1 }),
                                            }),
                                        }),
                                        (0, n.jsx)(m.A, { children: (0, n.jsx)(T.w, { className: x().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)(h.p, { onFinishSuccess: w }),
                    ],
                });
            });
        },
        21213: (e, o, l) => {
            'use strict';
            l.d(o, { e: () => t });
            var n = l(36095);
            let t = (e, o, l) => {
                let t = null != o ? o : n.wT,
                    i = null != l ? l : n.by,
                    r = (0, n.de)((0, n.aq)(e), t, i),
                    a = Math.round(255 * r[0]),
                    s = Math.round(255 * r[1]),
                    c = Math.round(255 * r[2]);
                return 'rgb('.concat(a, ', ').concat(s, ', ').concat(c, ')');
            };
        },
        65343: (e, o, l) => {
            'use strict';
            l.d(o, { l: () => n });
            var n = (function (e) {
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
        89209: (e, o, l) => {
            'use strict';
            l.d(o, { M: () => n });
            var n = (function (e) {
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
    },
    (e) => {
        (e.O(
            0,
            [
                1676, 3349, 8451, 1583, 8561, 6287, 7349, 2e3, 6749, 7339, 3472, 2121, 1632, 5743, 3084, 3021, 5058, 3789, 9468, 364, 1107, 6706, 1311, 5201, 546, 9212,
                260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 3257, 4305, 8234, 2917, 8421, 3269, 4163, 3246, 4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48,
                862, 6361, 5898, 2533, 8222, 4932, 5622, 9973, 6095, 5853, 6271, 7804, 9333, 2010, 1022, 9797, 4475, 5056, 7358,
            ],
            () => e((e.s = 6206)),
        ),
            (_N_E = e.O()));
    },
]);
