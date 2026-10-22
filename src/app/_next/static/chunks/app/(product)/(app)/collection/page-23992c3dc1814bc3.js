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
        19425: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => l });
            var i = a(35522);
            let l = (e) => {
                var t, a, l, o;
                return (
                    !!Array.isArray(e.tabs.data) &&
                    1 === e.tabs.data.length &&
                    (null == (a = e.tabs.data[0]) || null == (t = a.blocks) ? void 0 : t.length) === 1 &&
                    (null == (o = e.tabs.data[0]) || null == (l = o.blocks[0]) ? void 0 : l.type) === i.t.WIZARD
                );
            };
        },
        20366: (e, t, a) => {
            'use strict';
            a.d(t, { CollectionPage: () => f });
            var i = a(25839),
                l = a(82298),
                o = a(88204),
                r = a(74631),
                s = a(39004),
                n = a(8487),
                d = a(61493),
                c = a(97762),
                _ = a(71035),
                m = a(13833),
                u = a(4254),
                C = a(19425),
                E = a(32113),
                h = a(64715),
                A = a(89257),
                g = a(24004),
                L = a(1407),
                N = a(20258),
                O = a(10322),
                M = a(21213),
                z = a(89192),
                R = a(30716),
                w = a(27954),
                x = a(99401),
                v = a(26076),
                p = a(10603),
                T = a(60924),
                b = a(3488),
                I = a.n(b);
            let f = (0, o.PA)(() => {
                let { collection: e, user: t, library: a } = (0, w.g)(),
                    { contentScrollRef: o, setContentScrollRef: b } = (0, z.g)(),
                    { formatMessage: f } = (0, s.A)(),
                    j = !e.landing.isRejected && !!t.collectionHue;
                ((0, r.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, R.J)(e.landing.isResolved));
                let S = (0, C._)(e.landing),
                    W = (0, r.useMemo)(() => {
                        if (j && t.collectionHue) return { '--collection-color': (0, M.e)(t.collectionHue) };
                    }, [j, t.collectionHue]),
                    D = (0, r.useMemo)(
                        () => ({
                            color: (e) =>
                                (0, i.jsx)(T.k, {
                                    title: f({ id: 'collection.collection-color-title' }),
                                    description: f({ id: 'collection.collection-color-description' }),
                                    placement: 'right',
                                    children: (0, i.jsx)('span', { className: I().collectionColor, style: W, children: e }),
                                }),
                        }),
                        [W, f],
                    ),
                    P = (0, _.c)(() => {
                        if (e.landing.isLoaded) return e.landing.getSkeleton({ id: c.p.WEB_COLLECTION, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 });
                    });
                if (((0, g.y)(P), e.landing.isNeededToLoad)) {
                    let i = [e.landing.getSkeleton({ id: c.p.WEB_COLLECTION, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 }), a.getData()];
                    (0, r.use)(Promise.allSettled(i));
                }
                return (0, i.jsxs)(O.n, {
                    pageId: N._Q.OWN_COLLECTION,
                    children: [
                        (0, i.jsxs)(L.h, {
                            scrollElement: o,
                            outerTitle: f({ id: 'entity-names.collection' }),
                            children: [
                                (0, i.jsx)(p.Y, {
                                    variant: p.V.TEXT,
                                    showControls: !1,
                                    children: (0, i.jsxs)('div', {
                                        className: I().header,
                                        children: [
                                            (0, i.jsx)(u.DZ, { variant: 'h1', weight: 'bold', size: 'xl', children: (0, i.jsx)(n.A, { id: 'entity-names.collection' }) }),
                                            j &&
                                                (0, i.jsx)(u.HL, {
                                                    className: I().description,
                                                    variant: 'div',
                                                    size: 'm',
                                                    children: (0, i.jsx)(n.A, { id: 'collection.collection-color', values: D }),
                                                }),
                                        ],
                                    }),
                                }),
                                (0, i.jsxs)(m.N, {
                                    className: (0, l.$)(I().root, { [I().root_withCollectionColor]: j }),
                                    containerClassName: I().content,
                                    ref: b,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: (0, l.$)(I().landing, { [I().landing_onlyWizard]: S }),
                                            'data-test-id': d.Xk.collection.COLLECTION_PAGE,
                                            children: (0, i.jsx)(E.E, {
                                                landing: e.landing,
                                                errorComponent: (0, i.jsx)(h.SomethingWentWrong, { className: I().error, withBackwardControl: !1 }),
                                            }),
                                        }),
                                        (0, i.jsx)(v.A, { children: (0, i.jsx)(x.w, { className: I().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(A.p, { onFinishSuccess: P }),
                    ],
                });
            });
        },
        21213: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var i = a(36095);
            let l = (e, t, a) => {
                let l = null != t ? t : i.wT,
                    o = null != a ? a : i.by,
                    r = (0, i.de)((0, i.aq)(e), l, o),
                    s = Math.round(255 * r[0]),
                    n = Math.round(255 * r[1]),
                    d = Math.round(255 * r[2]);
                return 'rgb('.concat(s, ', ').concat(n, ', ').concat(d, ')');
            };
        },
        22984: (e) => {
            e.exports = {
                content: 'WizardModal_content__mLcxg',
                modalHeader: 'WizardModal_modalHeader__BbNjx',
                root: 'WizardModal_root__mrF2y',
                root_withCustomControls: 'WizardModal_root_withCustomControls__t7Kjv',
                modalContent: 'WizardModal_modalContent__OifZs',
                wrapper: 'WizardModal_wrapper__2_8ft',
                title: 'WizardModal_title__fPGJr',
                text: 'WizardModal_text__ntEON',
                button: 'WizardModal_button__e8bCS',
                mainContainer: 'WizardModal_mainContainer__fbjpt',
                carousel: 'WizardModal_carousel__uVcYS',
                scrollContainer: 'WizardModal_scrollContainer__tDrP6',
                important: 'WizardModal_important__7uymQ',
                tabCarousel: 'WizardModal_tabCarousel__AclIV',
                tabShimmer: 'WizardModal_tabShimmer__36Qc7',
                tabTitle: 'WizardModal_tabTitle__7ZAaF',
                filter: 'WizardModal_filter__o2wpn',
                filter_selected: 'WizardModal_filter_selected__qdlMf',
                item: 'WizardModal_item__wUHVg',
            };
        },
        24004: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => o });
            var i = a(74631);
            a(93588);
            var l = a(44478);
            let o = (e) => {
                (0, i.useEffect)(() => (0, l.q)(e), [e]);
            };
        },
        44478: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => o, q: () => l });
            let i = new Set(),
                l = (e) => (
                    i.add(e),
                    () => {
                        i.delete(e);
                    }
                ),
                o = () => {
                    i.forEach((e) => {
                        e();
                    });
                };
        },
        50994: (e, t, a) => {
            (Promise.resolve().then(a.bind(a, 30871)),
                Promise.resolve().then(a.bind(a, 20366)),
                Promise.resolve().then(a.bind(a, 25464)),
                Promise.resolve().then(a.bind(a, 29340)),
                Promise.resolve().then(a.bind(a, 6304)));
        },
        65343: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => i });
            var i = (function (e) {
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
        86432: (e) => {
            e.exports = {
                coverBlock: 'ArtistCard_coverBlock__YCSus',
                like: 'ArtistCard_like__jmlKc',
                root: 'ArtistCard_root__F4RfA',
                root_selected: 'ArtistCard_root_selected__9Djbq',
                cover: 'ArtistCard_cover__RSTvK',
                image: 'ArtistCard_image__Uab5w',
                name: 'ArtistCard_name__IF9yZ',
                icon: 'ArtistCard_icon__PjbJI',
            };
        },
        89209: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => i });
            var i = (function (e) {
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
        89257: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => B });
            var i = a(25839),
                l = a(82298),
                o = a(88204),
                r = a(74631),
                s = a(39004),
                n = a(8487),
                d = a(61493),
                c = a(68934),
                _ = a(4071),
                m = a(35622),
                u = a(5867),
                C = a(4254),
                E = a(51859),
                h = a(91149),
                A = a(92942),
                g = a(65343),
                L = a(89209),
                N = a(20790),
                O = a(27954),
                M = a(31488),
                z = a(36159),
                R = a(57549),
                w = a(69041),
                x = a(19412),
                v = a(79396),
                p = a(9931),
                T = a(6968),
                b = a(51246),
                I = a(66738),
                f = a(86869),
                j = a(52512),
                S = a(6323),
                W = a(27819),
                D = a(86432),
                P = a.n(D);
            let G = (0, o.PA)((e) => {
                let { className: t, artist: a } = e,
                    { ref: o, intersectionPropertyId: s } = (0, j.n)(),
                    {
                        wizard: { likeArtist: n, isArtistLiked: c },
                    } = (0, O.g)(),
                    { id: m, name: u, coverUri: E } = a,
                    h = (0, r.useCallback)(() => {
                        n(m);
                    }, [n, m]),
                    A = c(m),
                    g = (0, r.useMemo)(
                        () =>
                            (0, i.jsx)(f.t, {
                                className: P().cover,
                                radius: 'round',
                                'data-test-id': d.e8.wizard.ARTIST_CARD,
                                children: (0, i.jsxs)(_.$, {
                                    radius: 'round',
                                    className: P().coverBlock,
                                    variant: 'default',
                                    onClick: h,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': A,
                                    'aria-label': u,
                                    'data-test-id': d.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, i.jsx)(S.B, { className: P().image, src: E || W.A.src, fit: 'cover', alt: u, withAvatarReplace: !!E, 'aria-hidden': !0 }),
                                        (0, i.jsx)('div', {
                                            className: (0, l.$)(P().like),
                                            children: (0, i.jsx)(I.I, { variant: 'likedVariant', size: 's', className: P().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [A, E, u, h],
                    );
                return (0, i.jsx)(b.MN, {
                    ref: o,
                    className: (0, l.$)(P().root, { [P().root_selected]: A }, t),
                    textPosition: 'center',
                    title: (0, i.jsx)(C.HL, {
                        'aria-hidden': !0,
                        className: P().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': d.e8.wizard.ARTIST_CARD_NAME,
                        children: u,
                    }),
                    'data-intersection-property-id': s,
                    view: g,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                });
            });
            var y = a(22984),
                k = a.n(y);
            let F = { [E.u.Desktop]: { start: 40, end: 40 }, [E.u.Mobile]: { start: 40, end: 40 } },
                B = (0, o.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: a } = (0, s.A)(),
                        {
                            wizard: o,
                            settings: { isMobile: E, isWindowsApplication: b, isLinuxApplication: I },
                            user: f,
                        } = (0, O.g)(),
                        { notify: j } = (0, A.l)(),
                        S = (0, N.z)(),
                        [W, D] = (0, c.d)(),
                        P = (0, u.zb)(0),
                        y = (0, r.useMemo)(
                            () => (e) => {
                                var t;
                                if (!P.onTabChange || e === P.value) return;
                                P.onTabChange(e);
                                let a = null == (t = o.genres[e]) ? void 0 : t.id;
                                (o.setFilter(a), null == W || W.scrollTo({ top: 0 }));
                            },
                            [o, P, W],
                        ),
                        B = (0, r.useMemo)(() => {
                            switch (o.selectedArtistsQuantity) {
                                case 0:
                                    return a({ id: 'wizard.button-tune' });
                                case 1:
                                    return a({ id: 'wizard.button-little-more' });
                                case 2:
                                    return a({ id: 'wizard.button-one-more' });
                                default:
                                    return a({ id: 'wizard.button-done' });
                            }
                        }, [o.selectedArtistsQuantity, a]),
                        V = (0, r.useMemo)(
                            () =>
                                (0, i.jsx)(p.wI, {
                                    className: k().tabCarousel,
                                    ...P,
                                    onTabChange: y,
                                    isShimmerVisible: o.loadingState === z.G.PENDING,
                                    shimmer: (0, i.jsx)(p.zr, { isActive: !0, className: k().tabCarousel, shimmerClassName: k().tabShimmer, count: E ? 2 : 3 }),
                                    children: o.genres.map((e, t) =>
                                        (0, i.jsx)(
                                            v.o,
                                            {
                                                className: (0, l.$)(k().filter, { [k().filter_selected]: t === P.value }),
                                                titleClassName: k().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [o.genres, P, y, o.loadingState, E],
                        ),
                        H = (0, r.useCallback)(() => {
                            o.loadArtists(60);
                        }, [o]);
                    (0, r.useEffect)(() => {
                        o.filter && H();
                    }, [o.filter, H]);
                    let K = (0, r.useCallback)(async () => {
                        (await o.loadGenres(), H());
                    }, [o, H]);
                    ((0, r.useEffect)(() => {
                        o.modal.isOpened && K();
                    }, [o, o.modal.isOpened, K]),
                        (0, r.useEffect)(() => {
                            o.loadingState === z.G.REJECT &&
                                (o.modal.close(), j((0, i.jsx)(R.h, { error: a({ id: 'error-messages.error-load-wizard' }) }), { containerId: h.u.ERROR }));
                        }, [o, o.loadGenres, o.loadingState, a, j]));
                    let U = (0, r.useMemo)(
                            () =>
                                (0, i.jsx)(C.DZ, {
                                    className: k().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': d.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, i.jsx)(n.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        Z = (0, r.useCallback)(async () => {
                            (o.canFinish ? (await o.finish()) === M.F.OK && (await f.getSettings(), await (null == t ? void 0 : t())) : o.loadArtists(), o.modal.close());
                        }, [t, f, o]);
                    return (
                        (0, r.useEffect)(
                            () => (
                                null == S ||
                                    S.addShortcutsListener(L.M.MAIN, g.l.CLOSE, () => {
                                        o.modal.isOpened && Z();
                                    }),
                                () => {
                                    null == S || S.removeShortcutsListener(L.M.MAIN, g.l.CLOSE);
                                }
                            ),
                            [Z, o.modal.isOpened, S],
                        ),
                        (0, i.jsxs)(m.a, {
                            className: (0, l.$)(k().root, { [k().root_withCustomControls]: b || I }),
                            headerClassName: k().modalHeader,
                            contentClassName: k().modalContent,
                            open: o.modal.isOpened,
                            onOpenChange: o.modal.onOpenChange,
                            onClose: Z,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: a({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: d.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': d.e8.wizard.WIZARD_MODAL,
                            header: E && U,
                            escapeKey: !1,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: k().wrapper,
                                    children: [
                                        !E && U,
                                        (0, i.jsx)(C.HL, {
                                            className: k().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, i.jsx)(n.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, i.jsx)(_.$, {
                                            className: k().button,
                                            size: E ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: Z,
                                            disabled: !o.canFinish,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, i.jsx)(C.HL, { variant: 'div', size: 'm', weight: 'medium', children: B }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)('div', {
                                    className: k().mainContainer,
                                    children: [
                                        (0, i.jsx)(w.F, { className: k().carousel, carouselElement: V, scrollPadding: F }),
                                        (0, i.jsx)(T.$, {
                                            withFooter: !1,
                                            className: (0, l.$)(k().scrollContainer, k().important),
                                            itemContentCallback: (e) => {
                                                let t = o.artistsByGenre[e];
                                                if (!t) {
                                                    let e = a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.artist' }) });
                                                    return (0, i.jsx)(x.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, i.jsx)(G, { artist: t }, t.id);
                                            },
                                            data: o.artistsByGenre,
                                            endReached: H,
                                            listClassName: k().content,
                                            itemClassName: k().item,
                                            pageSize: 60,
                                            handleRef: D,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                8803, 3349, 8451, 1583, 8561, 6287, 3112, 2e3, 6749, 6392, 3472, 2121, 7170, 1632, 5743, 3084, 3021, 5058, 3789, 9468, 364, 9122, 5275, 6706, 4771, 1311,
                5201, 546, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1251, 1817, 6215, 3257, 8234, 2917, 8421, 3453, 2038, 4163, 3246, 7848, 3482, 6680, 2247, 4345, 8836,
                820, 4434, 48, 862, 8372, 5898, 1808, 8222, 8892, 4932, 5622, 3268, 6095, 2445, 5853, 4018, 9333, 9616, 4041, 4475, 5056, 7358,
            ],
            () => e((e.s = 50994)),
        ),
            (_N_E = e.O()));
    },
]);
