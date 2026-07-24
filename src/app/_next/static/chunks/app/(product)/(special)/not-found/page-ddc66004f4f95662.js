(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2717],
    {
        7748: (e, n, t) => {
            'use strict';
            t.r(n), t.d(n, { NotFound: () => j });
            var o = t(32290),
                a = t(63618),
                r = t(96103),
                i = t(39407),
                s = t(63423),
                c = t(82586),
                l = t(46049),
                d = t(71926),
                u = t(55178),
                p = t(16172),
                _ = t(52068),
                N = t(62376),
                g = t(27576),
                m = t(83920),
                F = t(20472),
                x = t(84062),
                v = t(27120),
                b = t(12894),
                h = t(57594),
                k = t(55365),
                y = t.n(k);
            let j = (0, r.PA)((e) => {
                let { className: n, title: t, description: r, iconVariant: k = 'musicLogo', iconClassName: j, iconSize: f } = e,
                    { contentRef: S, setContentScrollRef: A } = (0, m.g)(),
                    O = (0, x.Z)(F.Z.main.href);
                !(function () {
                    let e = (0, _.st)(),
                        { hash: n } = (0, _.gf)(),
                        t = (0, N.U)(),
                        o = (0, u.useRef)(void 0);
                    (0, u.useEffect)(() => {
                        if (!e || !n) return;
                        o.current = (0, g.A)();
                        let a = (0, p.Fx)({
                            params: {
                                hash: n,
                                pageId: p.QT.PageNotFoundScreen,
                                pageStyle: p.QL.Fullscreen,
                                pagePlacement: p.c4.Fullscreen,
                                mainObjectType: p.ky.NonApplicable,
                                mainObjectId: p.ky.NonApplicable,
                                viewUuid: o.current,
                            },
                            logger: t,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            a && (0, p.w5)(e.evgenInstance, a),
                            () => {
                                let a = (0, p.Fx)({
                                    params: {
                                        hash: n,
                                        pageId: p.QT.PageNotFoundScreen,
                                        pageStyle: p.QL.Fullscreen,
                                        pagePlacement: p.c4.Fullscreen,
                                        mainObjectType: p.ky.NonApplicable,
                                        mainObjectId: p.ky.NonApplicable,
                                        viewUuid: o.current,
                                    },
                                    logger: t,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                a && (0, p.XB)(e.evgenInstance, a);
                            }
                        );
                    }, [e, n, t]);
                })();
                let { handleNavigateToMain: w } = (function (e) {
                    let n = (0, _.st)(),
                        { hash: t } = (0, _.gf)(),
                        o = (0, N.U)();
                    return {
                        handleNavigateToMain: (0, u.useCallback)(() => {
                            if (!n || !t) return;
                            let a = (0, p.Fx)({
                                params: {
                                    hash: t,
                                    pageId: p.QT.PageNotFoundScreen,
                                    pageStyle: p.QL.Fullscreen,
                                    pagePlacement: p.c4.Fullscreen,
                                    mainObjectType: p.ky.NonApplicable,
                                    mainObjectId: p.ky.NonApplicable,
                                    from: p.QT.PageNotFoundScreen,
                                    to: p.QT.MainScreen,
                                    entityType: p.LA.Error,
                                    entityId: p.LA.Error,
                                },
                                logger: o,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            a && (0, p.Mu)(n.evgenInstance, a), e();
                        }, [n, t, o, e]),
                    };
                })(O);
                return (
                    (0, v.N)(!0),
                    !(function () {
                        let { location: e } = (0, h.g)();
                        (0, u.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, o.jsxs)(l.N, {
                        className: (0, a.$)(y().root, { [y().root_desktop]: !S }, n),
                        containerClassName: y().container,
                        ref: A,
                        children: [
                            (0, o.jsx)(b.L, { withBackwardFallback: '/', className: y().navigation, withForwardControl: !1 }),
                            (0, o.jsxs)('div', {
                                className: y().content,
                                children: [
                                    (0, o.jsx)(c.I, { className: (0, a.$)(y().icon, j), variant: k, size: f }),
                                    (0, o.jsx)(d.DZ, {
                                        className: (0, a.$)(y().title, y().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: t || (0, o.jsx)(i.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, o.jsx)(d.HL, {
                                        className: (0, a.$)(y().text, y().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: r || (0, o.jsx)(i.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, o.jsx)(s.$, {
                                        onClick: w,
                                        className: y().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(d.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, o.jsx)(i.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        55365: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                container: 'NotFound_container__h1XeE',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        82580: (e, n, t) => {
            Promise.resolve().then(t.bind(t, 18171)), Promise.resolve().then(t.bind(t, 7748));
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 5718, 3183, 7231, 7972, 6347, 6732, 8420, 9030, 6639, 6184, 9763, 6151, 6706, 1311, 5201, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 9755, 697,
                6477, 7275, 2586, 8347, 4522, 7702, 6874, 861, 782, 4668, 9740, 14, 8915, 6341, 4638, 6758, 5774, 1272, 1993, 7251, 6775, 4220, 9562, 7358,
            ],
            () => e((e.s = 82580)),
        ),
            (_N_E = e.O());
    },
]);
