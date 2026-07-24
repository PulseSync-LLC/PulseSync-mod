(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8143],
    {
        10032: (e) => {
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
        34598: (e, o, l) => {
            'use strict';
            l.d(o, { CollectionPage: () => v });
            var n = l(32290),
                t = l(63618),
                i = l(96103),
                r = l(55178),
                a = l(60900),
                s = l(39407),
                c = l(21732),
                d = l(73474),
                _ = l(91027),
                E = l(46049),
                L = l(71926),
                C = l(35609),
                g = l(40959),
                A = l(64170),
                h = l(3435),
                O = l(91724),
                u = l(7999),
                R = l(48922),
                I = l(22714),
                P = l(55509),
                N = l(83920),
                D = l(3796),
                G = l(57594),
                T = l(58054),
                m = l(32468),
                W = l(74694),
                M = l(60244),
                S = l(10032),
                x = l.n(S);
            let v = (0, i.PA)(() => {
                let { collection: e, user: o, library: l } = (0, G.g)(),
                    { contentScrollRef: i, setContentScrollRef: S } = (0, N.g)(),
                    { formatMessage: v } = (0, a.A)(),
                    j = !e.landing.isRejected && !!o.collectionHue;
                (0, r.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, D.J)(e.landing.isResolved);
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
        35609: (e, o, l) => {
            'use strict';
            l.d(o, { _: () => t });
            var n = l(96194);
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
        54257: (e, o, l) => {
            Promise.resolve().then(l.bind(l, 3377)),
                Promise.resolve().then(l.bind(l, 34598)),
                Promise.resolve().then(l.bind(l, 11044)),
                Promise.resolve().then(l.bind(l, 92498)),
                Promise.resolve().then(l.bind(l, 4008));
        },
        55332: (e, o, l) => {
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
        55509: (e, o, l) => {
            'use strict';
            l.d(o, { e: () => t });
            var n = l(73295);
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
        95329: (e, o, l) => {
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
        e.O(
            0,
            [
                5718, 7034, 3379, 3647, 8497, 6347, 7258, 7680, 3183, 7972, 8868, 7231, 9763, 5108, 5583, 5976, 5367, 4413, 1914, 6723, 4761, 992, 3931, 6639, 6706, 1311,
                5201, 1588, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1417, 9755, 1561, 1330, 6477, 7275, 2586, 8347, 4522, 7702, 6874, 861, 782, 4668, 9740, 1175, 14,
                8915, 8816, 2563, 6341, 3759, 4797, 4638, 277, 3295, 8160, 1385, 9710, 1647, 4547, 7303, 6881, 4220, 9562, 7358,
            ],
            () => e((e.s = 54257)),
        ),
            (_N_E = e.O());
    },
]);
