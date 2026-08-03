(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4398],
    {
        1176: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => o });
            let o = (0, r(55178).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        1677: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => n });
            var o = r(16172),
                s = r(48922);
            let n = {
                [s._Q.HOME]: o.rW.MainScreen,
                [s._Q.NON_MUSIC]: o.rW.NonmusicLandingScreen,
                [s._Q.OWN_COLLECTION]: o.rW.CollectionLandingScreen,
                [s._Q.LANDING]: o.rW.DynamicScreen,
                [s._Q.OWN_ARTISTS]: o.rW.CollectionArtistsScreen,
                [s._Q.SEARCH]: o.rW.SearchScreen,
                [s._Q.ARTIST]: o.rW.ArtistScreen,
                [s._Q.CONCERTS]: o.rW.ConcertsLandingScreen,
                [s._Q.CONCERT]: o.rW.ConcertScreen,
                [s._Q.CONCERT_LOCATION_SELECTOR]: o.rW.ConcertLocationSelector,
                [s._Q.ALBUM]: o.rW.AlbumScreen,
                [s._Q.PLAYLIST]: o.rW.PlaylistScreen,
                [s._Q.SLIDES_SCREEN]: o.rW.SlidesScreen,
                [s._Q.PROMOLANDING_ALBUM]: o.rW.PromolandingAlbumScreen,
                [s._Q.WAVE_LANDING_SCREEN]: o.rW.WaveLandingScreen,
                [s._Q.FACT_SCREEN]: o.rW.FactScreen,
                [s._Q.COLLECTION_VIBE_ROOMS]: o.rW.MultivibeScreen,
                [s._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: o.rW.MultivibeSendingInvitationScreen,
                [s._Q.MULTIVIBE_ACCEPTING_INVITATION_SCREEN]: o.rW.MultivibeAcceptingInvitationScreen,
                [s._Q.MULTIVIBE_ACTION_SCREEN]: o.rW.MultivibeActionScreen,
                [s._Q.MULTIVIBE_ALONE_SCREEN]: o.rW.MultivibeAloneScreen,
                [s._Q.MULTIVIBE_INVALID_INVITATION_SCREEN]: o.rW.MultivibeInvalidInvitationScreen,
                [s._Q.MULTIVIBE_PENDING_INVITATION_SCREEN]: o.rW.MultivibePendingInvitationScreen,
                [s._Q.MULTIVIBE_ALREADY_EXIST_SCREEN]: o.rW.MultivibeAlreadyExistScreen,
            };
        },
        2792: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => n });
            var o = r(55178),
                s = r(10936);
            function n() {
                return (0, o.useContext)(s.l);
            }
        },
        3064: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => o });
            let o = (0, r(55178).createContext)({ skeleton: void 0 });
        },
        3435: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => F });
            var o = r(32290),
                s = r(63618),
                n = r(96103),
                i = r(55178),
                l = r(60900),
                a = r(39407),
                c = r(21732),
                d = r(54862),
                _ = r(63423),
                u = r(84638),
                m = r(15299),
                f = r(71926),
                p = r(54667),
                h = r(45477),
                C = r(75582),
                v = r(55332),
                x = r(95329),
                E = r(53022),
                b = r(57594),
                S = r(58008),
                A = r(49399),
                g = r(90357),
                N = r(28563),
                O = r(89020),
                L = r(45180),
                R = r(8946),
                I = r(45257),
                T = r(14934),
                y = r(82586),
                j = r(86269),
                M = r(23352),
                w = r(11323);
            let P = { src: '/_next/static/media/artist.c49b2bfa.png' };
            var D = r(22800),
                k = r.n(D);
            let W = (0, n.PA)((e) => {
                let { className: t, artist: r } = e,
                    { ref: n, intersectionPropertyId: l } = (0, M.n)(),
                    {
                        wizard: { likeArtist: a, isArtistLiked: d },
                    } = (0, b.g)(),
                    { id: u, name: m, coverUri: p } = r,
                    h = (0, i.useCallback)(() => {
                        a(u);
                    }, [a, u]),
                    C = d(u),
                    v = (0, i.useMemo)(
                        () =>
                            (0, o.jsx)(j.t, {
                                className: k().cover,
                                radius: 'round',
                                'data-test-id': c.e8.wizard.ARTIST_CARD,
                                children: (0, o.jsxs)(_.$, {
                                    radius: 'round',
                                    className: k().coverBlock,
                                    variant: 'default',
                                    onClick: h,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': C,
                                    'aria-label': m,
                                    'data-test-id': c.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, o.jsx)(w.B, { className: k().image, src: p || P.src, fit: 'cover', alt: m, withAvatarReplace: !!p, 'aria-hidden': !0 }),
                                        (0, o.jsx)('div', {
                                            className: (0, s.$)(k().like),
                                            children: (0, o.jsx)(y.I, { variant: 'likedVariant', size: 's', className: k().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [C, p, m, h],
                    );
                return (0, o.jsx)(T.MN, {
                    ref: n,
                    className: (0, s.$)(k().root, { [k().root_selected]: C }, t),
                    textPosition: 'center',
                    title: (0, o.jsx)(f.HL, {
                        'aria-hidden': !0,
                        className: k().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.e8.wizard.ARTIST_CARD_NAME,
                        children: m,
                    }),
                    'data-intersection-property-id': l,
                    view: v,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                });
            });
            var B = r(6680),
                z = r.n(B);
            let U = { [p.u.Desktop]: { start: 40, end: 40 }, [p.u.Mobile]: { start: 40, end: 40 } },
                F = (0, n.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: r } = (0, l.A)(),
                        {
                            wizard: n,
                            settings: { isMobile: p, isWindowsApplication: T, isLinuxApplication: y },
                            user: j,
                        } = (0, b.g)(),
                        { notify: M } = (0, C.l)(),
                        w = (0, E.z)(),
                        [P, D] = (0, d.d)(),
                        k = (0, m.zb)(0),
                        B = (0, i.useMemo)(
                            () => (e) => {
                                var t;
                                if (!k.onTabChange || e === k.value) return;
                                k.onTabChange(e);
                                let r = null == (t = n.genres[e]) ? void 0 : t.id;
                                n.setFilter(r), null == P || P.scrollTo({ top: 0 });
                            },
                            [n, k, P],
                        ),
                        F = (0, i.useMemo)(() => {
                            switch (n.selectedArtistsCounter) {
                                case 0:
                                    return r({ id: 'wizard.button-tune' });
                                case 1:
                                    return r({ id: 'wizard.button-little-more' });
                                case 2:
                                    return r({ id: 'wizard.button-one-more' });
                                default:
                                    return r({ id: 'wizard.button-done' });
                            }
                        }, [n.selectedArtistsCounter, r]),
                        H = (0, i.useMemo)(
                            () =>
                                (0, o.jsx)(R.wI, {
                                    className: z().tabCarousel,
                                    ...k,
                                    onTabChange: B,
                                    isShimmerVisible: n.loadingState === A.G.PENDING,
                                    shimmer: (0, o.jsx)(R.zr, { isActive: !0, className: z().tabCarousel, shimmerClassName: z().tabShimmer, count: p ? 2 : 3 }),
                                    children: n.genres.map((e, t) =>
                                        (0, o.jsx)(
                                            L.o,
                                            {
                                                className: (0, s.$)(z().filter, { [z().filter_selected]: t === k.value }),
                                                titleClassName: z().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [n.genres, k, B, n.loadingState, p],
                        ),
                        G = (0, i.useCallback)(() => {
                            n.getArtists(60);
                        }, [n]);
                    (0, i.useEffect)(() => {
                        n.filter && G();
                    }, [n.filter, G]);
                    let V = (0, i.useCallback)(async () => {
                        await n.getGenres(), G();
                    }, [n, G]);
                    (0, i.useEffect)(() => {
                        n.modal.isOpened && V();
                    }, [n, n.modal.isOpened, V]),
                        (0, i.useEffect)(() => {
                            n.loadingState === A.G.REJECT &&
                                (n.modal.close(), M((0, o.jsx)(g.h, { error: r({ id: 'error-messages.error-load-wizard' }) }), { containerId: h.u.ERROR }));
                        }, [n, n.getGenres, n.loadingState, r, M]);
                    let K = (0, i.useMemo)(
                            () =>
                                (0, o.jsx)(f.DZ, {
                                    className: z().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': c.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, o.jsx)(a.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        Y = (0, i.useCallback)(async () => {
                            n.selectedArtistsCounter < 3 ? n.getArtists() : (await n.finish()) === S.F.OK && (await j.getSettings(), await (null == t ? void 0 : t())),
                                n.modal.close();
                        }, [t, j, n]);
                    return (
                        (0, i.useEffect)(
                            () => (
                                null == w ||
                                    w.addShortcutsListener(x.M.MAIN, v.l.CLOSE, () => {
                                        n.modal.isOpened && Y();
                                    }),
                                () => {
                                    null == w || w.removeShortcutsListener(x.M.MAIN, v.l.CLOSE);
                                }
                            ),
                            [Y, n.modal.isOpened, w],
                        ),
                        (0, o.jsxs)(u.a, {
                            className: (0, s.$)(z().root, { [z().root_withCustomControls]: T || y }),
                            headerClassName: z().modalHeader,
                            contentClassName: z().modalContent,
                            open: n.modal.isOpened,
                            onOpenChange: n.modal.onOpenChange,
                            onClose: Y,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: r({ id: 'interface-actions.close' }),
                            closeButtonProps: { 'data-test-id': c.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON },
                            'data-test-id': c.e8.wizard.WIZARD_MODAL,
                            header: p && K,
                            escapeKey: !1,
                            children: [
                                (0, o.jsxs)('div', {
                                    className: z().wrapper,
                                    children: [
                                        !p && K,
                                        (0, o.jsx)(f.HL, {
                                            className: z().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, o.jsx)(a.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, o.jsx)(_.$, {
                                            className: z().button,
                                            size: p ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: Y,
                                            disabled: n.selectedArtistsCounter < 3,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, o.jsx)(f.HL, { variant: 'div', size: 'm', weight: 'medium', children: F }),
                                        }),
                                    ],
                                }),
                                (0, o.jsxs)('div', {
                                    className: z().mainContainer,
                                    children: [
                                        (0, o.jsx)(N.F, { className: z().carousel, carouselElement: H, scrollPadding: U }),
                                        (0, o.jsx)(I.$, {
                                            withFooter: !1,
                                            className: (0, s.$)(z().scrollContainer, z().important),
                                            itemContentCallback: (e) => {
                                                let t = n.artistsByGenre[e];
                                                if (!t) {
                                                    let e = r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.artist' }) });
                                                    return (0, o.jsx)(O.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, o.jsx)(W, { artist: t }, t.id);
                                            },
                                            data: n.artistsByGenre,
                                            endReached: G,
                                            listClassName: z().content,
                                            itemClassName: z().item,
                                            pageSize: 60,
                                            handleRef: D,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        4008: (e, t, r) => {
            'use strict';
            r.d(t, { WithOffline: () => a });
            var o = r(96103),
                s = r(70204),
                n = r(34186),
                i = r(11541),
                l = r(57594);
            let a = (0, o.PA)((e) => {
                let { fallback: t, children: r } = e,
                    o = (0, n.N)(),
                    { slam: a } = (0, l.g)(),
                    c = o.get(s.U2);
                return (0, i.g)(c) || a.isOfflineModeEnabled ? r : t;
            });
        },
        6680: (e) => {
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
        6752: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => s });
            var o = {};
            Object.defineProperty(o, '__esModule', { value: !0 }), (o.useReturnValue = void 0), (o.useReturnValue = (e) => e()), o.__esModule;
            var s = o.useReturnValue;
        },
        8626: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => o });
            let o = () => ({ year: 'numeric' });
        },
        9848: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => o });
            let o = (0, r(55178).createContext)({ tabId: void 0, tabPos: void 0, isTabSelectedByDefault: void 0 });
        },
        10936: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => o });
            let o = (0, r(55178).createContext)({
                objectType: void 0,
                objectId: void 0,
                objectPosX: void 0,
                objectPosY: void 0,
                objectPos: void 0,
                objectsCount: void 0,
                mainObjectId: void 0,
                mainObjectType: void 0,
            });
        },
        11323: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => a });
            var o = r(32290),
                s = r(55178),
                n = r(21732),
                i = r(50162);
            let l = (e) => {
                    let { isAvailable: t = !0, className: r, fallbackIconSize: s, forwardRef: l, ...a } = e;
                    return t
                        ? (0, o.jsx)(i._V, { ref: l, className: r, fallbackIconSize: s, ...a, 'data-test-id': n.S7.ENTITY_COVER_IMAGE })
                        : (0, o.jsx)(i.Ab, { className: r, iconSize: s, iconVariant: 'unavailable', 'data-test-id': n.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                a = (0, s.forwardRef)((e, t) => (0, o.jsx)(l, { forwardRef: t, ...e }));
        },
        11541: (e, t, r) => {
            'use strict';
            r.d(t, { g: () => s });
            var o = r(19379);
            let s = (e) => {
                let t = e.get(o.c.OfflineMode);
                return 'boolean' == typeof t && t;
            };
        },
        12989: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => C });
            var o = r(55178),
                s = r(16172),
                n = r(52068),
                i = r(6752),
                l = r(62376),
                a = r(1677),
                c = r(48922),
                d = r(84782),
                _ = r(30915),
                u = r(18746),
                m = r(2792),
                f = r(37240),
                p = r(51012),
                h = r(47498);
            let C = () => {
                let e = (0, l.U)(),
                    t = (0, n.st)(),
                    { hash: r } = (0, n.gf)(),
                    { pageId: C, displayReasonId: v } = (0, f.$)(),
                    { tabId: x, tabPos: E, isTabSelectedByDefault: b } = (0, h.R)(),
                    { offsetBlockPosY: S } = (0, _.u)(),
                    { blockType: A, blockId: g, blockPosX: N, blockPosY: O, mainObjectId: L, mainObjectType: R, displayReasonId: I } = (0, d.N)(),
                    { filterKey: T, filterValue: y, filterPos: j } = (0, u.G)(),
                    { objectType: M, objectsCount: w, objectId: P, objectPosX: D, objectPosY: k } = (0, m.J)(),
                    { skeleton: W } = (0, p.b)(),
                    B = null != I ? I : v,
                    z = (0, i.L)(() => (void 0 !== S && void 0 !== O ? S + O : O));
                return (0, o.useCallback)(
                    (o, n) => {
                        if (!t || !C || !c.xK.includes(C) || !c.fD.includes(C)) return;
                        let i = a.F[C];
                        if (!i) return;
                        let l = {
                            hash: r,
                            pageId: i,
                            entityType: A,
                            entityId: g,
                            entityPosX: N,
                            entityPosY: z,
                            objectsCount: w,
                            viewUuid: n,
                            objectType: M,
                            objectId: P,
                            objectPosX: D,
                            objectPosY: k,
                        };
                        void 0 !== T && ((l.filterKey = T), (l.filterValue = y), (l.filterPos = j)),
                            c.qG.includes(C) && ((l.tabId = x), (l.tabPos = E), (l.isTabSelectedByDefault = b)),
                            W && (l.skeletonId = W),
                            'string' == typeof L && 'string' == typeof R && ((l.mainObjectType = R), (l.mainObjectId = L)),
                            B && (l.displayReasonId = B);
                        let d = (0, s.Fx)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        d && (o ? (0, s.Pf)(t.evgenInstance, d) : (0, s.nv)(t.evgenInstance, d));
                    },
                    [t, B, g, N, z, A, T, j, y, r, b, e, L, R, P, D, k, M, w, C, W, x, E],
                );
            };
        },
        13616: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => s });
            var o = r(60754);
            let s = o.gK.model('CustomPlayerThumb', { href: o.gK.string, width: o.gK.number, height: o.gK.number });
        },
        14858: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => i });
            var o = r(60900),
                s = r(57594),
                n = r(79406);
            let i = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, o.A)(),
                    { user: r, experiments: i } = (0, s.g)(),
                    l = 'ru' === r.account.data.userSessionRegionIso && i.checkExperiment(n.z.WebNextFooterDisclaimer, 'on'),
                    a = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return l ? t({ id: 'footer.disclaimer-content' }) : a;
            };
        },
        14934: (e, t, r) => {
            'use strict';
            r.d(t, { MN: () => d, hg: () => c });
            var o,
                s = r(55178),
                n = {
                    5881: (e, t, r) => {
                        function o() {
                            for (var e, t, r = 0, o = ''; r < arguments.length; )
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            o,
                                            s = '';
                                        if ('string' == typeof t || 'number' == typeof t) s += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (o = e(t[r])) && (s && (s += ' '), (s += o));
                                            else for (r in t) t[r] && (s && (s += ' '), (s += r));
                                        return s;
                                    })(e)) &&
                                    (o && (o += ' '), (o += t));
                            return o;
                        }
                        r.r(t), r.d(t, { clsx: () => o, default: () => s });
                        let s = o;
                    },
                    4831: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => o });
                        let o = {
                            root: 'KL50tMDvfAdw_9MzcVht',
                            bottom: 'bL0wE1Bui8zpIZbvMVL3',
                            top: 'P6gOmyFtXyetUz0dqhF3',
                            bottom_left: 'RvWjZle1erRBXzJEF9Zj',
                            bottom_right: 'bBh7lvgdfF7bqNqlK78Q',
                            label: 'FgncHYHPDU14dLddn0wF',
                            controls: 'PBhQ1krUFiAybu_BS2YE',
                            controls_radius_default: 'cSCPJSa6Lx6OnpM4ljX9',
                            controls_radius_round: 'kHUOlGxOaBwL4P3jEBXU',
                            controls_visible: 'QZC5vQL9p11QsEkdkTtZ',
                        };
                    },
                    8346: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => o });
                        let o = {
                            root: 'laBJlJAaqEVS0i_4Ot3l',
                            titleContainer: 'LmhA6nlLyzxwYIX31gYa',
                            wrapper: 'IO4kvpDGNI2J0CHwcKSf',
                            content: 'l8SktNpJd30JWp1owp_b',
                            content_left: 'Mb33JzAWx9EjbQAeScFt',
                            description: 'kbcBH9meMfY6Du_xQNnI',
                            content_center: 'Dp41JRuLGzwV3MHBYHMC',
                            content_right: 'eOsuNCgUirwAw16iUKLu',
                            title: 'FAmeEGy52GX1k0xZuPDn',
                            content_linesCount_1: 'Cfj1Wkh1bvQMCfk1mZwK',
                            content_linesCount_2: 'lV4OXsCTURC5K1s9Q5mx',
                            content_linesCount_3: 'PVBDIXF2RTUThmbNT9sV',
                            content_linesCount_4: 'ND4XIwkIYtNoU89EOISr',
                        };
                    },
                    6132: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => o });
                        let o = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    4517: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => o });
                        let o = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    6951: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => o });
                        let o = {
                            root_controls_xxs: 'tRaaBpDMg9Qu8v6gKjtn',
                            root_entity_xxs: 'M9zvtlcpLUVn6DKdcHhj',
                            root_text_xxs: 'ln0PYYwDmFnfYxCDJsFU',
                            root_controls_xs: 'n5AeWEsJC3_AYXcbK4Lt',
                            root_entity_xs: '__hrMKGmNbw54T54IUyh',
                            root_text_xs: 'SehSa7OyRpC2nzYTVb2Q',
                            root_controls_s: '_oBLf5gprWsKjCw4Ce58',
                            root_entity_s: 'mxSPe5xpZnie9gpIqacd',
                            root_text_s: 'Ai2iRN9elHpk_u5splD6',
                            root_controls_m: 'tk7ahHRDYXJMMB879KUA',
                            root_entity_m: 'Z_WIr2W8JU4MPQek3hgR',
                            root_text_m: 'g3qWNP6xl__7qxNmtrvd',
                            root_controls_l: 'grvxapJE3vGArOKDWf6n',
                            root_entity_l: 'Esj5A1UeSi4xV4tZ839D',
                            root_text_l: 'V3WU123oO65AxsprotU9',
                            root_weight_normal: 'ZYV27jeWd30QDXu4GhaH',
                            root_weight_medium: '_3_Mxw7Si7j2g4kWjlpR',
                            root_weight_bold: 'Vi7Rd0SZWqD17F0872TB',
                        };
                    },
                    2223: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => o });
                        let o = {
                            root_size_xs: 'qJJ288377iHlWN_RXeEE',
                            root_size_s: '_sd8Q9d_Ttn0Ufe4ISWS',
                            root_size_m: 'Ctk8dbecq31Qh7isOJPQ',
                            root_size_l: 'M_Djh6ppIkCO3A2k_BTA',
                            root_size_xl: 'dtxlzGQMPAbM2MEndXWX',
                            root_size_xxl: 'IUb9XLplTAoZqne9rNUL',
                            root_size_xxxl: 'ZYZamUwql_rfFR4RpI2B',
                            root_size_xxxxl: 'ZBZyxow5njdq8z5dnRPY',
                            root_size_xxxxxl: 'WdvQQNwdDNCdRSwRkAtT',
                            root_weight_bold: 'nSU6fV9y80WrZEfafvww',
                            root_weight_black: 'KBeGPPK4DinQzAP41Y_N',
                        };
                    },
                    5882: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => o });
                        let o = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function o(e, t, o) {
                            var s = null;
                            if ((void 0 !== o && (s = '' + o), void 0 !== t.key && (s = '' + t.key), 'key' in t))
                                for (var n in ((o = {}), t)) 'key' !== n && (o[n] = t[n]);
                            else o = t;
                            return { $$typeof: r, type: e, key: s, ref: void 0 !== (t = o.ref) ? t : null, props: o };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = o), (t.jsxs = o);
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    5817: function (e, t, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0);
                        let s = r(4377),
                            n = r(5881),
                            i = r(9e3),
                            l = o(r(4831));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: r,
                                    likeControl: o,
                                    menuControl: a,
                                    pinControl: c,
                                    trailerControl: d,
                                    isVisible: _,
                                    radius: u = 'default',
                                    bottomContainerClassName: m,
                                    labelText: f,
                                } = e,
                                p = d || r,
                                h = a || o;
                            return (0, s.jsxs)('div', {
                                className: (0, n.clsx)(
                                    l.default.root,
                                    l.default.controls,
                                    { [l.default.controls_visible]: _ },
                                    l.default['controls_radius_'.concat(u)],
                                    t,
                                ),
                                children: [
                                    (0, s.jsx)('div', { className: l.default.top, children: c }),
                                    (0, s.jsxs)('div', {
                                        className: (0, n.clsx)(l.default.bottom, m),
                                        children: [
                                            p && (0, s.jsxs)('div', { className: l.default.bottom_left, children: [d, r] }),
                                            h && (0, s.jsxs)('div', { className: l.default.bottom_right, children: [a, o] }),
                                        ],
                                    }),
                                    !!f && (0, s.jsx)(i.Label, { className: l.default.label, children: f }),
                                ],
                            });
                        };
                    },
                    440: function (e, t, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0);
                        let s = r(4377),
                            n = r(810),
                            i = r(5881),
                            l = r(2582),
                            a = r(3758),
                            c = o(r(8346)),
                            d = (e) => {
                                let {
                                    forwardRef: t,
                                    view: r,
                                    className: o,
                                    textPosition: n = 'left',
                                    contentLinesCount: d = 2,
                                    title: _,
                                    description: u,
                                    explicitMarkComponent: m,
                                    chart: f,
                                    children: p,
                                    srTitle: h,
                                    wrapperClassName: C,
                                    ...v
                                } = e;
                                return (0, s.jsxs)('div', {
                                    className: (0, i.clsx)(c.default.root, o),
                                    ref: t,
                                    ...v,
                                    children: [
                                        (0, s.jsx)(a.SROnly, { tabIndex: -1, children: null != h ? h : _ }),
                                        (0, s.jsx)('div', { className: c.default.viewContainer, children: r }),
                                        (0, s.jsxs)('div', {
                                            className: (0, i.clsx)(c.default.wrapper, C),
                                            children: [
                                                f,
                                                (0, s.jsxs)('div', {
                                                    className: (0, i.clsx)(
                                                        c.default.content,
                                                        c.default['content_'.concat(n)],
                                                        c.default['content_linesCount_'.concat(d)],
                                                    ),
                                                    children: [
                                                        _ &&
                                                            (0, s.jsxs)('div', {
                                                                className: c.default.titleContainer,
                                                                children: [
                                                                    (0, s.jsx)(l.Caption, {
                                                                        className: c.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: _,
                                                                    }),
                                                                    m,
                                                                ],
                                                            }),
                                                        u,
                                                        p,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, n.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
                    },
                    2: function (e, t, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0);
                        let s = r(4377),
                            n = r(5881),
                            i = r(2582),
                            l = o(r(6132));
                        t.Label = (e) => {
                            let { children: t, className: r, size: o = 's', ...a } = e;
                            return (0, s.jsx)(i.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: o,
                                lineClamp: 1,
                                className: (0, n.clsx)(l.default.root, r),
                                ...a,
                                children: t,
                            });
                        };
                    },
                    9e3: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0);
                        var o = r(2);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return o.Label;
                            },
                        });
                    },
                    2865: function (e, t, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0);
                        let s = r(4377),
                            n = r(5881),
                            i = r(810),
                            l = o(r(4517));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: o, ...a } = e,
                                c = (0, n.clsx)(l.default.root, { [l.default.focusable]: r }, t);
                            return (0, i.isValidElement)(o)
                                ? (0, i.cloneElement)(o, { ...a, className: (0, n.clsx)(c, o.props.className) })
                                : (0, s.jsx)('span', { className: c, ...a, children: o });
                        };
                    },
                    3758: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0);
                        var o = r(2865);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return o.SROnly;
                            },
                        });
                    },
                    7743: function (e, t, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0);
                        let s = r(4377),
                            n = r(5881),
                            i = r(810),
                            l = r(4721),
                            a = o(r(6951));
                        (t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: o = 'text', size: i = 's', className: c, children: d, weight: _ = 'medium', ...u } = e;
                            return (0, s.jsx)(l.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, n.clsx)(a.default.root, a.default['root_'.concat(o, '_').concat(i)], a.default['root_weight_'.concat(_)], c),
                                ...u,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, i.forwardRef)((e, r) => (0, s.jsx)(t.CaptionComponent, { forwardRef: r, ...e })));
                    },
                    404: function (e, t, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0);
                        let s = r(4377),
                            n = r(5881),
                            i = r(810),
                            l = r(4721),
                            a = o(r(2223));
                        (t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: o = 'bold', size: i = 's', className: c, children: d, ..._ } = e;
                            return (0, s.jsx)(l.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, n.clsx)(a.default.root, a.default['root_size_'.concat(i)], a.default['root_weight_'.concat(o)], c),
                                ..._,
                                children: d,
                            });
                        }),
                            (t.Heading = (0, i.forwardRef)((e, r) => (0, s.jsx)(t.HeadingComponent, { forwardRef: r, ...e })));
                    },
                    4721: function (e, t, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0);
                        let s = r(4377),
                            n = r(5881),
                            i = r(810),
                            l = o(r(5882));
                        function a(e) {
                            let { forwardRef: t, style: r, className: o, children: i, variant: a, lineClamp: c, ...d } = e,
                                _ = c && 'string' == typeof i ? i : void 0;
                            return (0, s.jsx)(a, {
                                style: { ...r, WebkitLineClamp: c },
                                ref: t,
                                title: _,
                                className: (0, n.clsx)(
                                    l.default.root,
                                    { [l.default.root_clamp]: c && c > 0, [l.default.root_clamp_oneline]: c && 1 === c, [l.default.root_clamp_multiline]: c && c > 1 },
                                    o,
                                ),
                                ...d,
                                children: i,
                            });
                        }
                        (t.TypographyComponent = a), (t.Typography = (0, i.forwardRef)((e, t) => (0, s.jsx)(a, { forwardRef: t, ...e })));
                    },
                    2582: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0);
                        var o = r(7743);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return o.Caption;
                            },
                        });
                        var s = r(404);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return s.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = o || (o = r.t(s, 2));
                    },
                },
                i = {};
            function l(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return n[e].call(r.exports, r, r.exports, l), r.exports;
            }
            (l.d = (e, t) => {
                for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var a = {};
            (() => {
                Object.defineProperty(a, 'X$', { value: !0 }), (a.kk = a.m7 = void 0);
                var e = l(440);
                Object.defineProperty(a, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = l(5817);
                Object.defineProperty(a, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var c = a.kk,
                d = a.m7;
            a.X$;
        },
        17679: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        18746: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => n });
            var o = r(55178),
                s = r(70608);
            function n() {
                return (0, o.useContext)(s.S);
            }
        },
        19094: (e, t, r) => {
            'use strict';
            r.d(t, { SettingsPage: () => ej });
            var o = r(32290),
                s = r(96103),
                n = r(60900),
                i = r(39407),
                l = r(21732),
                a = r(46049),
                c = r(71926),
                d = r(55178),
                _ = r(26490),
                u = r(84638),
                m = r(78091),
                f = r(43705),
                p = r.n(f);
            let h = (0, s.PA)(() => {
                let { formatMessage: e } = (0, n.A)(),
                    t = (0, _.S)();
                return (0, o.jsx)(u.a, {
                    className: p().modal,
                    headerClassName: p().modalHeader,
                    contentClassName: p().modalContent,
                    title: e({ id: 'equalizer.title' }),
                    open: t.modal.isOpened,
                    onOpenChange: t.modal.onOpenChange,
                    onClose: t.modal.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: e({ id: 'interface-actions.close' }),
                    closeButtonProps: { 'data-test-id': l.Kq.equalizer.EQUALIZER_MODAL_CLOSE_BUTTON },
                    'data-test-id': l.Kq.equalizer.EQUALIZER_MODAL,
                    children: (0, o.jsx)(m.r, { title: e({ id: 'equalizer.enable' }), isExpanded: !0, isDisabled: !t.isEnabled }),
                });
            });
            var C = r(70204),
                v = r(34186),
                x = r(45477),
                E = r(75582),
                b = r(39472),
                S = r(81218),
                A = r(57594),
                g = r(58008),
                N = r(79406),
                O = r(53453),
                L = r(19379),
                R = r(90357),
                I = r(4008),
                T = r(14858),
                y = r(61945),
                j = r(61258),
                M = r(52898),
                w = r.n(M);
            let P = (0, s.PA)(() => {
                let { formatMessage: e } = (0, n.A)(),
                    {
                        location: t,
                        modals: { aboutAppModal: r },
                    } = (0, A.g)(),
                    s = (0, b.H)(),
                    l = window.BRANCH,
                    { language: a } = (0, y.h)(),
                    d = (0, T.w)();
                return (0, o.jsxs)(u.a, {
                    className: w().root,
                    headerClassName: w().modalHeader,
                    contentClassName: w().modalContent,
                    title: e({ id: 'settings.about-app' }),
                    open: r.isOpened,
                    onOpenChange: r.onOpenChange,
                    onClose: r.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: e({ id: 'interface-actions.close' }),
                    children: [
                        (0, o.jsxs)('ul', {
                            className: w().list,
                            children: [
                                (0, o.jsx)('li', {
                                    className: w().item,
                                    children: (0, o.jsx)(j.N, {
                                        className: w().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/support/music/performers-and-copyright-holders.html?lang=').concat(a),
                                        children: (0, o.jsx)(c.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, o.jsx)(i.A, { id: 'footer.links-copyright-holders' }),
                                        }),
                                    }),
                                }),
                                (0, o.jsx)('li', {
                                    className: w().item,
                                    children: (0, o.jsx)(j.N, {
                                        className: w().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/legal/music_mobile_agreement?lang=').concat(a),
                                        children: (0, o.jsx)(c.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, o.jsx)(i.A, { id: 'footer.links-terms' }),
                                        }),
                                    }),
                                }),
                                (0, o.jsx)('li', {
                                    className: w().item,
                                    children: (0, o.jsx)(j.N, {
                                        className: w().link,
                                        target: '_blank',
                                        href: 'https://music.yandex.'.concat(t.tld, '/legal/recommendations/ru/#music'),
                                        children: (0, o.jsx)(c.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, o.jsx)(i.A, { id: 'footer.links-recommendation-rules' }),
                                        }),
                                    }),
                                }),
                                (0, o.jsx)('li', {
                                    className: w().item,
                                    children: (0, o.jsx)(j.N, {
                                        className: w().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/support/music/index.html?lang=').concat(a),
                                        children: (0, o.jsx)(c.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, o.jsx)(i.A, { id: 'footer.links-help' }),
                                        }),
                                    }),
                                }),
                                (0, o.jsx)('li', {
                                    className: w().item,
                                    children: (0, o.jsx)(j.N, {
                                        className: w().link,
                                        target: '_blank',
                                        href: 'https://github.com/PulseSync-LLC/PulseSync-mod',
                                        children: (0, o.jsx)(c.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: 'Репозиторий PulseSync на GitHub',
                                        }),
                                    }),
                                }),
                                (0, o.jsx)('li', {
                                    className: w().item,
                                    children: (0, o.jsx)(j.N, {
                                        className: w().link,
                                        target: '_blank',
                                        href: 'https://pulsesync.dev/subscription',
                                        children: (0, o.jsx)(c.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: 'Поддержать проект оформив подписку',
                                        }),
                                    }),
                                }),
                                (0, o.jsx)('li', {
                                    className: w().item,
                                    children: (0, o.jsx)(j.N, {
                                        className: w().link,
                                        target: '_blank',
                                        href: 'https://pulsesync.dev',
                                        children: (0, o.jsx)(c.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: 'Сайт проекта PulseSync',
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, o.jsx)(c.HL, {
                            className: w().explicitText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            weight: 'medium',
                            dangerouslySetInnerHTML: { __html: d },
                        }),
                        (0, o.jsx)(c.HL, {
                            className: w().companyText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: (0, o.jsx)(i.A, { id: 'about-app.app-name' }),
                        }),
                        (0, o.jsx)(c.HL, {
                            className: w().versionText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: ''.concat(e({ id: 'desktop.app-version-short' }, { version: s }), ' · ').concat(e({ id: 'desktop.app-revision' }, { revision: l })),
                        }),
                        (0, o.jsx)(c.HL, {
                            className: w().versionText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: 'PulseSync '.concat(window.PULSE_VERSION, ' · Host ').concat(window.HOST_VERSION),
                        }),
                    ],
                });
            });
            var D = r(63423),
                k = r(50162),
                W = r(88964),
                B = r(58534),
                z = r(69582),
                U = r.n(z);
            let F = { src: '/_next/static/media/clearMemory.33a5df30.png' },
                H = (0, s.PA)(() => {
                    let { formatMessage: e } = (0, n.A)(),
                        {
                            modals: { clearMemoryModal: t },
                        } = (0, A.g)(),
                        { notify: r } = (0, E.l)(),
                        s = (0, W.j)(),
                        l = (0, d.useCallback)(() => {
                            s.clearAll().then(() => {
                                t.close();
                                window.onDownloadedTracksDeleted?.();
                                r(
                                    (0, o.jsx)(B.$, {
                                        message: (0, o.jsx)(c.HL, {
                                            className: U().message,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: (0, o.jsx)(i.A, { id: 'offline.memory-cleared' }),
                                        }),
                                    }),
                                    { containerId: x.u.INFO },
                                );
                            });
                        }, [t, r, s]);
                    return (0, o.jsxs)(u.a, {
                        className: U().root,
                        headerClassName: U().modalHeader,
                        contentClassName: U().modalContent,
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        overlayColor: 'full',
                        placement: 'center',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: [
                            (0, o.jsx)(k._V, { src: F.src, className: U().image, fit: 'contain', 'aria-hidden': !0 }),
                            (0, o.jsx)(c.HL, {
                                className: U().description,
                                type: 'text',
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                children: (0, o.jsx)(i.A, { id: 'offline.clear-memory-description' }),
                            }),
                            (0, o.jsx)(D.$, {
                                color: 'primary',
                                radius: 'xxxl',
                                size: 'default',
                                onClick: l,
                                children: (0, o.jsx)(i.A, { id: 'interface-actions.clear' }),
                            }),
                        ],
                    });
                });
            var G = r(99169),
                V = r(58723),
                K = r(70208),
                Y = r(42822),
                Q = r.n(Y),
                X = r(90040),
                $ = r(57249),
                Z = r(63618),
                q = r(65493),
                J = r(91027),
                ee = r(65497),
                et = r(49124);
            let er = q.default.default(
                () =>
                    Promise.resolve()
                        .then(r.bind(r, 90040))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = et.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, X.setWasmUrl)(new URL($, e).href);
            }
            let eo = (e) => {
                    let { thumbType: t } = e,
                        [r, s] = (0, d.useState)(null);
                    return ((0, d.useEffect)(() => {
                        let e = G.z[t];
                        e &&
                            e().then((e) => {
                                (0, ee.J)(e) ? s(e) : s(''.concat(window.location.origin).concat(e));
                            });
                    }, [t]),
                    r)
                        ? (0, o.jsx)(er, { src: r })
                        : null;
                },
                es = (0, s.PA)((e) => {
                    let { thumbId: t, isDefault: r = !1 } = e,
                        { settings: s, user: l, paywall: a } = (0, A.g)(),
                        { formatMessage: _ } = (0, n.A)(),
                        [u, m] = (0, d.useState)(!1);
                    (0, d.useEffect)(() => {
                        m(!0);
                    }, []);
                    let f = (0, J.c)((e) => {
                            if ((e.preventDefault(), !l.hasPlus && t !== s.selectedThumbId)) return void a.openModal();
                            s.setCustomPlayerThumb(t);
                        }),
                        p = !!u && s.selectedThumbId === t;
                    if (r)
                        return (0, o.jsxs)(D.$, {
                            className: (0, Z.$)(Q().button, { [Q().button_selected]: p }),
                            radius: 'xl',
                            onClick: f,
                            withRipple: !1,
                            'aria-pressed': p,
                            children: [
                                (0, o.jsxs)('div', {
                                    className: Q().thumbContent,
                                    children: [(0, o.jsx)('div', { className: Q().thumbLine }), (0, o.jsx)('div', { className: Q().thumbDefault })],
                                }),
                                (0, o.jsx)(c.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'm',
                                    weight: 'medium',
                                    className: Q().thumbName,
                                    lineClamp: 1,
                                    children: (0, o.jsx)(i.A, { id: 'branded-player.default' }),
                                }),
                            ],
                        });
                    let h = (0, G.r)(_).get(t);
                    if (!h) return;
                    let C = { '--thumb-height': ''.concat(h.thumb.height, 'px') };
                    return (0, o.jsxs)(D.$, {
                        className: (0, Z.$)(Q().button, { [Q().button_selected]: p }),
                        radius: 'xl',
                        onClick: f,
                        withRipple: !1,
                        'aria-pressed': p,
                        children: [
                            (0, o.jsx)('div', { style: C, className: (0, Z.$)(Q().thumbContent, Q().thumbContent_custom), children: (0, o.jsx)(eo, { thumbType: t }) }),
                            (0, o.jsx)(c.HL, { className: Q().thumbName, variant: 'div', size: 'm', weight: 'normal', lineClamp: 1, children: h.name }),
                        ],
                    });
                }),
                en = (0, s.PA)(() => {
                    let { formatMessage: e } = (0, n.A)(),
                        t = Array.from((0, G.r)(e).keys());
                    return (0, o.jsxs)('div', {
                        className: Q().root,
                        children: [
                            (0, o.jsx)(c.HL, {
                                className: Q().title,
                                variant: 'div',
                                size: 'l',
                                weight: 'bold',
                                lineClamp: 1,
                                children: (0, o.jsx)(i.A, { id: 'branded-player.player-type' }),
                            }),
                            (0, o.jsxs)(V.m, {
                                restrictionsClassName: Q().thumbsContainer,
                                children: [(0, o.jsx)(es, { thumbId: K.T.DEFAULT, isDefault: !0 }), t.map((e) => (0, o.jsx)(es, { thumbId: e }, e))],
                            }),
                        ],
                    });
                });
            var ei = r(82586),
                el = r(37528),
                ea = r.n(el);
            let ec = (e) => {
                let { title: t, description: r, onClick: s, descriptionProps: n, ...i } = e;
                return (0, o.jsx)(D.$, {
                    className: (0, Z.$)(ea().root, ea().important),
                    contentContainerClassName: ea().contentContainer,
                    icon: (0, o.jsx)(ei.I, { className: ea().icon, size: 'xs', variant: 'arrowRight' }),
                    iconPosition: 'right',
                    onClick: s,
                    isBlock: !0,
                    withRipple: !1,
                    withHover: !1,
                    variant: 'text',
                    size: 'xs',
                    ...i,
                    children: (0, o.jsxs)('div', {
                        className: ea().content,
                        children: [
                            (0, o.jsx)(c.HL, { className: ea().title, variant: 'div', size: 'l', weight: 'bold', lineClamp: 1, children: t }),
                            r && (0, o.jsx)(c.HL, { variant: 'div', type: 'text', size: 'xs', weight: 'medium', className: ea().description, ...n, children: r }),
                        ],
                    }),
                });
            };
            var ed = r(99311),
                e_ = r(85892),
                eu = r.n(e_);
            let em = (e) => {
                let { title: t, onChange: r, isChecked: s, description: n, dataTestId: i } = e,
                    l = (0, d.useId)();
                return (0, o.jsxs)('div', {
                    className: eu().root,
                    children: [
                        (0, o.jsxs)('div', {
                            className: eu().textContainer,
                            children: [
                                (0, o.jsx)(c.HL, {
                                    className: eu().title,
                                    id: l,
                                    variant: 'div',
                                    size: 'l',
                                    weight: 'bold',
                                    lineClamp: 1,
                                    'aria-hidden': !0,
                                    children: t,
                                }),
                                n && (0, o.jsx)(c.HL, { variant: 'div', type: 'text', size: 'xs', weight: 'medium', className: eu().description, children: n }),
                            ],
                        }),
                        (0, o.jsx)(ed.l, { isChecked: s, 'aria-describedby': l, onChange: r, ...i }),
                    ],
                });
            };
            var ef = r(55332);
            let ep = {
                    [ef.l.TOGGLE_PLAY]: ['K'],
                    [ef.l.TOGGLE_MUTE]: ['M'],
                    [ef.l.INCREASE_VOLUME]: ['↑'],
                    [ef.l.DECREASE_VOLUME]: ['↓'],
                    [ef.l.LIKE]: ['F'],
                    [ef.l.DISLIKE]: ['D'],
                    [ef.l.MOVE_FORWARD]: ['N'],
                    [ef.l.MOVE_BACKWARD]: ['P'],
                    [ef.l.SLIDE_FORWARD]: ['→', 'L'],
                    [ef.l.SLIDE_BACKWARD]: ['←', 'J'],
                    [ef.l.TOGGLE_REPEAT]: ['R'],
                    [ef.l.TOGGLE_SHUFFLE]: ['S'],
                    [ef.l.TOGGLE_FULLSCREEN_PLAYER]: ['W'],
                    [ef.l.CLOSE]: ['Escape'],
                },
                eh = [
                    { formattedMessage: (0, o.jsx)(i.A, { id: 'shortcuts.play-pause' }), shortcutsAction: ef.l.TOGGLE_PLAY },
                    { formattedMessage: (0, o.jsx)(i.A, { id: 'shortcuts.mute' }), shortcutsAction: ef.l.TOGGLE_MUTE },
                    { formattedMessage: (0, o.jsx)(i.A, { id: 'shortcuts.skip-forward' }), shortcutsAction: ef.l.SLIDE_FORWARD },
                    { formattedMessage: (0, o.jsx)(i.A, { id: 'shortcuts.rewind' }), shortcutsAction: ef.l.SLIDE_BACKWARD },
                    { formattedMessage: (0, o.jsx)(i.A, { id: 'shortcuts.volume-up' }), shortcutsAction: ef.l.INCREASE_VOLUME },
                    { formattedMessage: (0, o.jsx)(i.A, { id: 'shortcuts.volume-down' }), shortcutsAction: ef.l.DECREASE_VOLUME },
                    { formattedMessage: (0, o.jsx)(i.A, { id: 'shortcuts.like' }), shortcutsAction: ef.l.LIKE },
                    { formattedMessage: (0, o.jsx)(i.A, { id: 'shortcuts.unlike' }), shortcutsAction: ef.l.DISLIKE },
                    { formattedMessage: (0, o.jsx)(i.A, { id: 'shortcuts.switch-repeat-mode' }), shortcutsAction: ef.l.TOGGLE_REPEAT },
                    { formattedMessage: (0, o.jsx)(i.A, { id: 'shortcuts.switch-shuffle-mode' }), shortcutsAction: ef.l.TOGGLE_SHUFFLE },
                    { formattedMessage: (0, o.jsx)(i.A, { id: 'shortcuts.next-track' }), shortcutsAction: ef.l.MOVE_FORWARD },
                    { formattedMessage: (0, o.jsx)(i.A, { id: 'shortcuts.previous-track' }), shortcutsAction: ef.l.MOVE_BACKWARD },
                    { formattedMessage: (0, o.jsx)(i.A, { id: 'shortcuts.fullscreen-player' }), shortcutsAction: ef.l.TOGGLE_FULLSCREEN_PLAYER },
                ];
            var eC = r(49700),
                ev = r.n(eC);
            let ex = (0, s.PA)(() => {
                let {
                        modals: { shortcutsModal: e },
                    } = (0, A.g)(),
                    { formatMessage: t } = (0, n.A)(),
                    r = (0, d.useMemo)(() => {
                        let e = (0, o.jsx)(
                            c.HL,
                            { className: ev().text, variant: 'div', type: 'text', size: 'xs', weight: 'normal', children: (0, o.jsx)(i.A, { id: 'shortcuts.or' }) },
                            'or',
                        );
                        return eh.map((t) => {
                            let { shortcutsAction: r, formattedMessage: s } = t,
                                n = ep[r].map((e, t) =>
                                    (0, o.jsx)(
                                        'div',
                                        {
                                            className: ev().button,
                                            children: (0, o.jsx)(c.HL, { variant: 'div', type: 'text', size: 'xs', weight: 'normal', children: e }),
                                        },
                                        t,
                                    ),
                                );
                            return (
                                n.length > 1 && n.splice(1, 0, e),
                                (0, o.jsx)(
                                    'li',
                                    {
                                        children: (0, o.jsxs)('div', {
                                            className: ev().content,
                                            children: [
                                                (0, o.jsx)(c.HL, { className: ev().text, variant: 'div', type: 'text', size: 'xs', weight: 'normal', children: s }),
                                                (0, o.jsx)('div', { className: ev().buttons, children: n }),
                                            ],
                                        }),
                                    },
                                    r,
                                )
                            );
                        });
                    }, []);
                return (0, o.jsx)(u.a, {
                    className: ev().root,
                    headerClassName: ev().modalHeader,
                    contentClassName: ev().modalContent,
                    title: t({ id: 'settings.shortcuts' }),
                    open: e.isOpened,
                    onOpenChange: e.onOpenChange,
                    onClose: e.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: t({ id: 'interface-actions.close' }),
                    children: (0, o.jsx)('ul', { className: ev().list, children: r }),
                });
            });
            var eE = r(31658),
                eb = r.n(eE);
            let eS = (0, s.PA)(() => {
                let e = (0, b.H)(),
                    t = (0, v.N)().get(C.oo),
                    {
                        modals: { shortcutsModal: r, aboutAppModal: s, clearMemoryModal: i },
                        experiments: a,
                        wizard: c,
                        user: u,
                        slam: m,
                        settings: f,
                        sonataState: p,
                    } = (0, A.g)(),
                    T = (0, _.S)(),
                    { notify: y } = (0, E.l)(),
                    { formatMessage: j } = (0, n.A)(),
                    M = (0, S.g)(),
                    w = T.isAvailable && !f.isMobile,
                    D = a.checkExperiment(N.z.WebNextCrossMediaPlayer, 'on'),
                    k = u.hasPlus,
                    W = f.isLiteVersionModeAvailableForToggle && !0,
                    B = !f.isMobile,
                    z = T.isEnabled ? j({ id: 'equalizer.enabled' }) : j({ id: 'equalizer.disabled' }),
                    U = (0, d.useMemo)(
                        () =>
                            ''
                                .concat(j({ id: 'desktop.app-version-short' }, { version: e }), ' / Мод ')
                                .concat(window.PULSE_VERSION, ' / Хост ')
                                .concat(window.HOST_VERSION),
                        [!0, j, e],
                    ),
                    [downloadedTracksInfo, setDownloadedTracksInfo] = (0, d.useState)({ tracksCount: void 0, tracksSize: void 0 }),
                    F = (0, d.useCallback)(
                        async (e) => {
                            (await u.setSettings({ isChildModeEnabled: e })) === g.F.ERROR &&
                                y((0, o.jsx)(R.h, { error: j({ id: 'settings.failed-to-change-child-mode' }) }), { containerId: x.u.ERROR });
                        },
                        [u, j, y],
                    ),
                    G = (0, d.useCallback)(
                        (e) => {
                            m.setOfflineMode(e);
                        },
                        [m],
                    ),
                    V = (0, d.useCallback)(() => {
                        i.open();
                    }, [i]),
                    K = (0, d.useCallback)(
                        (e) => {
                            if (e) return void f.setLiteVersionMode(O.w.ENABLED, !0);
                            f.setLiteVersionMode(O.w.DISABLED, !0);
                        },
                        [f],
                    ),
                    openPulseSyncSettings = (0, d.useCallback)(() => {
                        window.dispatchEvent(new CustomEvent('pulsesync-open-settings'));
                    }, []);
                (0, d.useEffect)(() => {
                    let showRestartNotification = () => {
                        y((0, o.jsx)(R.h, { error: 'Для применения этой настройки требуется перезапуск приложения' }), { containerId: x.u.ERROR });
                    };
                    window.addEventListener('pulsesync-restart-required', showRestartNotification);
                    return () => window.removeEventListener('pulsesync-restart-required', showRestartNotification);
                }, [y]);
                (0, d.useEffect)(() => {
                    let readTracksDirectory = async (directory) => {
                            let result = { tracksCount: 0, tracksSize: 0 };
                            for await (let entry of directory.values())
                                if ('directory' === entry.kind) {
                                    let nestedResult = await readTracksDirectory(entry);
                                    (result.tracksCount += nestedResult.tracksCount), (result.tracksSize += nestedResult.tracksSize);
                                } else if ('file' === entry.kind && !entry.name.endsWith('.crswap'))
                                    try {
                                        let file = await entry.getFile();
                                        (result.tracksCount += 1), (result.tracksSize += file.size);
                                    } catch (error) {
                                        console.warn('Track file is in use. Skipping...', error);
                                    }
                            return result;
                        },
                        findTracksDirectory = async (rootDirectory) => {
                            for await (let entry of rootDirectory.values())
                                if ('directory' === entry.kind && 'tracks' === entry.name) return readTracksDirectory(entry);
                            return { tracksCount: 0, tracksSize: 0 };
                        },
                        updateDownloadedTracksInfo = async () => {
                            if (!window.navigator?.storage?.getDirectory) return;
                            let rootDirectory = await window.navigator.storage.getDirectory();
                            setDownloadedTracksInfo(await findTracksDirectory(rootDirectory));
                        };
                    window.onDownloadedTracksDeleted = () => {
                        setDownloadedTracksInfo({ tracksCount: 0, tracksSize: 0 });
                    };
                    updateDownloadedTracksInfo();
                    return () => {
                        window.onDownloadedTracksDeleted = null;
                    };
                }, []);
                (0, d.useLayoutEffect)(() => {
                    let e = t.get(L.c.CrossFadeMode);
                    'boolean' == typeof e && p.setCrossFadeMode(e);
                }, [p, t]);
                let Y = (0, d.useCallback)(
                    (e) => {
                        p.setCrossFadeMode(e), M && (M.isCrossfadeEnabled.value = e);
                    },
                    [p, M],
                ),
                    formatBytes = (value) => {
                        if ('number' != typeof value || value < 0) return '0 B';
                        let units = ['B', 'KB', 'MB', 'GB'],
                            unitIndex = 0;
                        for (; value >= 1024 && unitIndex < units.length - 1; ) (value /= 1024), unitIndex++;
                        return ''.concat(value.toFixed(2), ' ').concat(units[unitIndex]);
                    },
                    getTrackWordForm = (value) => {
                        if ('number' != typeof value || value < 0 || !Number.isInteger(value)) return 'треков';
                        let lastDigit = value % 10,
                            lastTwoDigits = value % 100;
                        return lastTwoDigits >= 11 && lastTwoDigits <= 19
                            ? 'треков'
                            : 1 === lastDigit
                              ? 'трек'
                              : lastDigit >= 2 && lastDigit <= 4
                                ? 'трека'
                                : 'треков';
                    };
                return (0, o.jsxs)('ul', {
                    className: eb().root,
                    'data-test-id': l.e8.settings.SETTINGS_LIST,
                    children: [
                        k &&
                            (0, o.jsx)('li', {
                                className: eb().item,
                                children: (0, o.jsx)(em, {
                                    title: j({ id: 'offline.offline-mode' }),
                                    description: j({ id: 'offline.offline-mode-description' }),
                                    onChange: G,
                                    isChecked: !!m.isOfflineModeEnabled,
                                    dataTestId: { 'data-test-id': l.e8.settings.OFFLINE_MODE_TOGGLE },
                                }),
                            }),
                        k &&
                            (0, o.jsxs)('li', {
                                className: eb().item,
                                children: [
                                    (0, o.jsx)(ec, {
                                        title: j({ id: 'offline.clear-memory' }),
                                        description: 'Скачан'
                                            .concat(downloadedTracksInfo.tracksCount % 10 === 1 && downloadedTracksInfo.tracksCount % 100 !== 11 ? '' : 'о', ' ')
                                            .concat(downloadedTracksInfo.tracksCount ?? 0, ' ')
                                            .concat(getTrackWordForm(downloadedTracksInfo.tracksCount ?? 0), ' (')
                                            .concat(formatBytes(downloadedTracksInfo.tracksSize), ')'),
                                        onClick: V,
                                    }),
                                    (0, o.jsx)(H, {}),
                                ],
                            }),
                        W &&
                            (0, o.jsx)('li', {
                                className: eb().item,
                                children: (0, o.jsx)(em, {
                                    title: j({ id: 'lite-version.title' }),
                                    description: j({ id: 'lite-version.description' }),
                                    onChange: K,
                                    isChecked: f.isLiteVersionModeEnabled,
                                }),
                            }),
                        w &&
                            (0, o.jsxs)('li', {
                                className: eb().item,
                                children: [
                                    (0, o.jsx)(ec, {
                                        title: j({ id: 'equalizer.title' }),
                                        description: z,
                                        onClick: T.modal.open,
                                        descriptionProps: { 'data-test-id': l.e8.settings.SETTINGS_EQUALIZER_BUTTON_DESCRIPTION },
                                        'data-test-id': l.e8.settings.SETTINGS_EQUALIZER_BUTTON,
                                    }),
                                    (0, o.jsx)(h, {}),
                                ],
                            }),
                        D &&
                            (0, o.jsx)('li', {
                                className: eb().item,
                                children: (0, o.jsx)(em, { title: j({ id: 'settings.crossfade' }), onChange: Y, isChecked: p.isCrossFadeEnabled }),
                            }),
                        (0, o.jsx)(I.WithOffline, {
                            fallback: (0, o.jsx)('li', {
                                className: eb().item,
                                children: (0, o.jsx)(ec, {
                                    title: j({ id: 'settings.preferences' }),
                                    description: j({ id: 'settings.preferences-description' }),
                                    onClick: c.modal.open,
                                }),
                            }),
                        }),
                        (0, o.jsx)(I.WithOffline, {
                            fallback:
                                !a.checkExperiment(N.z.WebNextDisableKids, 'on') &&
                                (0, o.jsx)('li', {
                                    className: eb().item,
                                    children: (0, o.jsx)(em, {
                                        title: j({ id: 'settings.show-child-section' }),
                                        onChange: F,
                                        isChecked: u.settings.isChildModeEnabled,
                                        dataTestId: { 'data-test-id': l.e8.settings.SETTINGS_KIDS_BUTTON },
                                    }),
                                }),
                        }),
                        (0, o.jsxs)('li', {
                            className: eb().item,
                            children: [(0, o.jsx)(ec, { title: j({ id: 'settings.shortcuts' }), onClick: r.open }), (0, o.jsx)(ex, {})],
                        }),
                        B && (0, o.jsx)('li', { className: eb().item, children: (0, o.jsx)(en, {}) }),
                        (0, o.jsx)('li', {
                            className: eb().item,
                            children: (0, o.jsx)(ec, { title: 'Настройки мода', onClick: openPulseSyncSettings }),
                        }),
                        U &&
                            (0, o.jsxs)('li', {
                                className: eb().item,
                                children: [(0, o.jsx)(ec, { title: j({ id: 'settings.about-app' }), description: U, onClick: s.open }), (0, o.jsx)(P, {})],
                            }),
                    ],
                });
            });
            var eA = r(3435),
                eg = r(7999),
                eN = r(83808),
                eO = r(83920),
                eL = r(58054),
                eR = r(32468),
                eI = r(74694),
                eT = r(37892),
                ey = r.n(eT);
            let ej = (0, s.PA)(() => {
                let { formatMessage: e } = (0, n.A)(),
                    { contentScrollRef: t, setContentScrollRef: r } = (0, eO.g)(),
                    s = (0, eN.W)();
                return (0, o.jsxs)(eg.h, {
                    scrollElement: t,
                    outerTitle: e({ id: 'page.settings' }),
                    children: [
                        (0, o.jsx)(eI.Y, {
                            variant: eI.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: s.canBack,
                            children: (0, o.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: (0, o.jsx)(i.A, { id: 'page.settings' }) }),
                        }),
                        (0, o.jsx)(a.N, {
                            ref: r,
                            className: ey().root,
                            containerClassName: ey().scrollableContainer,
                            'data-test-id': l.Xk.settings.SETTINGS_PAGE,
                            children: (0, o.jsxs)('div', {
                                className: ey().container,
                                children: [
                                    (0, o.jsx)('div', { className: ey().content, children: (0, o.jsx)(eS, {}) }),
                                    (0, o.jsx)(eA.p, {}),
                                    (0, o.jsx)(eR.A, { children: (0, o.jsx)(eL.w, { className: ey().footer }) }),
                                ],
                            }),
                        }),
                    ],
                });
            });
        },
        20599: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => o });
            let o = (0, r(55178).createContext)({ offsetBlockPosY: void 0 });
        },
        22800: (e) => {
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
        23352: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => i });
            var o = r(55178),
                s = r(12989),
                n = r(80536);
            let i = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = (0, o.useRef)(null),
                    l = (0, s.D)(),
                    a = (0, o.useId)(),
                    c = (0, o.useContext)(n.B),
                    d = (0, o.useCallback)(
                        (o, s) => {
                            e ? e(o, r ? s : void 0) : l(o, s), t && c.unobserveElement(a);
                        },
                        [e, c, a, l, t, r],
                    );
                return (
                    (0, o.useEffect)(
                        () => (
                            c.observeElement({ elementRef: i, elementId: a, callback: d }),
                            () => {
                                c.unobserveElement(a);
                            }
                        ),
                        [e, c, d, a, l],
                    ),
                    { ref: i, intersectionPropertyId: a }
                );
            };
        },
        23912: (e, t, r) => {
            'use strict';
            var o;
            r.d(t, { f: () => o }),
                (function (e) {
                    (e.CUSTOM = 'CUSTOM'),
                        (e.DEFAULT = 'DEFAULT'),
                        (e.CLASSICAL = 'CLASSICAL'),
                        (e.CLUB = 'CLUB'),
                        (e.DANCE = 'DANCE'),
                        (e.BASS_BOOST = 'BASS_BOOST'),
                        (e.BASS_AND_TREBLE_BOOST = 'BASS_AND_TREBLE_BOOST'),
                        (e.TREBLE_BOOST = 'TREBLE_BOOST'),
                        (e.SPEAKERS = 'SPEAKERS'),
                        (e.LARGE_HALL = 'LARGE_HALL'),
                        (e.CONCERT = 'CONCERT'),
                        (e.PARTY = 'PARTY'),
                        (e.POP = 'POP'),
                        (e.REGGAE = 'REGGAE'),
                        (e.ROCK = 'ROCK'),
                        (e.SKA = 'SKA'),
                        (e.SOFT = 'SOFT'),
                        (e.SOFT_ROCK = 'SOFT_ROCK'),
                        (e.TECHNO = 'TECHNO');
                })(o || (o = {}));
        },
        26490: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => i, i: () => n });
            var o = r(29222),
                s = r(55178);
            let n = (0, s.createContext)(null),
                i = () => {
                    let e = (0, s.useContext)(n);
                    if (!e) throw new o.t('Equalizer cannot be null, please add a context provider', { code: 'E_CONTEXT_EQUALIZER_NULL' });
                    return e;
                };
        },
        28563: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => S });
            var o = r(32290),
                s = r(63618),
                n = r(42157),
                i = r(96103),
                l = r(55178),
                a = r.t(l, 2),
                c = r(21732),
                d = r(45807),
                _ = {
                    810: (e) => {
                        e.exports = a;
                    },
                },
                u = {},
                m = {};
            (() => {
                Object.defineProperty(m, '__esModule', { value: !0 }), (m.useForwardRef = void 0);
                let e = (function e(t) {
                    var r = u[t];
                    if (void 0 !== r) return r.exports;
                    var o = (u[t] = { exports: {} });
                    return _[t](o, o.exports, e), o.exports;
                })(810);
                m.useForwardRef = function (t, r) {
                    let o = (0, e.useRef)(r);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(o.current) : (t.current = o.current));
                        }, [t]),
                        o
                    );
                };
            })(),
                m.__esModule;
            var f = m.useForwardRef,
                p = r(54667),
                h = r(57594),
                C = r(49522),
                v = r(61954),
                x = r.n(v);
            let E = { [p.u.Desktop]: { start: 40, end: 20 }, [p.u.Mobile]: { start: 40, end: 40 } },
                b = (0, i.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: r,
                            forwardRef: i,
                            scrollPadding: a,
                            isCarouselBetweenArrows: _ = !1,
                            controlsWrapperClassName: u,
                            buttonSize: m,
                            buttonVariant: v,
                            withSecondaryColor: b,
                        } = e,
                        {
                            settings: { isMobile: S },
                        } = (0, h.g)(),
                        A = f(i, null),
                        { shouldBackwardButtonBeDisabled: g, shouldForwardButtonBeDisabled: N, shouldHideControls: O } = (0, d.Y)(A),
                        [L, R] = (0, l.useMemo)(() => {
                            let e = (0, n.A)(E, a);
                            return [S ? e[p.u.Mobile].start : e[p.u.Desktop].start, S ? e[p.u.Mobile].end : e[p.u.Desktop].end];
                        }, [a, S]),
                        I = (0, l.useCallback)(
                            (e) => {
                                var t;
                                let r = null == (t = A.current) ? void 0 : t.children[e],
                                    { current: o } = A;
                                if (!o || !(r instanceof HTMLElement)) return;
                                if (r.offsetLeft - o.scrollLeft < L) {
                                    o.scrollLeft = r.offsetLeft - L;
                                    return;
                                }
                                let s = o.scrollLeft + o.clientWidth - r.offsetLeft - r.offsetWidth;
                                s < R && (o.scrollLeft -= s - R);
                            },
                            [A, R, L],
                        ),
                        T = (0, l.useCallback)(
                            (e) => {
                                var t, o;
                                I(e), null == (t = (o = r.props).onTabChange) || t.call(o, e);
                            },
                            [r, I],
                        ),
                        y = (0, l.cloneElement)(r, { forwardRef: A, className: (0, s.$)(x().wrapper, r.props.className, x().carousel, x().important), onTabChange: T });
                    return (0, o.jsxs)('div', {
                        className: (0, s.$)(
                            x().root,
                            {
                                [x().root_carouselBetweenArrows]: _,
                                [x().root_arrowLeft_hidden]: g,
                                [x().root_arrowRight_hidden]: N,
                                [x().root_arrow_hidden]: g && N && O,
                            },
                            t,
                        ),
                        'data-test-id': c.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, o.jsx)('div', { className: x().list, children: y }),
                            !S &&
                                (0, o.jsx)(C.X, {
                                    className: (0, s.$)(x().buttons, u),
                                    carouselRef: A,
                                    backwardControlClassName: x().control,
                                    forwardControlClassName: x().control,
                                    withSecondaryColor: b,
                                    buttonSize: m,
                                    buttonVariant: v,
                                }),
                        ],
                    });
                }),
                S = (0, l.forwardRef)((e, t) => (0, o.jsx)(b, { forwardRef: t, ...e }));
        },
        29098: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => o });
            let o = (0, r(55178).createContext)(null);
        },
        30915: (e, t, r) => {
            'use strict';
            r.d(t, { u: () => n });
            var o = r(55178),
                s = r(20599);
            function n() {
                return (0, o.useContext)(s.E);
            }
        },
        31010: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => s, P: () => n });
            var o = r(55178);
            let s = (0, o.createContext)(null),
                n = () => (0, o.useContext)(s);
        },
        31658: (e) => {
            e.exports = { root: 'Settings_root__FVVrn', item: 'Settings_item__Ksa9h' };
        },
        32468: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => i });
            var o = r(32290),
                s = r(77088),
                n = r.n(s);
            let i = (e) => {
                let { children: t } = e;
                return (0, o.jsx)('footer', { className: n().empty });
            };
        },
        37240: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => n });
            var o = r(55178),
                s = r(1176);
            function n() {
                return (0, o.useContext)(s.r);
            }
        },
        37528: (e) => {
            e.exports = {
                icon: 'SettingsListButtonItem_icon__WULZ1',
                root: 'SettingsListButtonItem_root__3dtV2',
                important: 'SettingsListButtonItem_important__AcEon',
                contentContainer: 'SettingsListButtonItem_contentContainer__jqoKg',
                content: 'SettingsListButtonItem_content___Opuo',
                title: 'SettingsListButtonItem_title__npCza',
                description: 'SettingsListButtonItem_description__g8_Ba',
            };
        },
        37892: (e) => {
            e.exports = {
                root: 'SettingsPage_root__BB4lC',
                scrollableContainer: 'SettingsPage_scrollableContainer__qD32i',
                container: 'SettingsPage_container__bIwea',
                content: 'SettingsPage_content__cR6Ra',
                footer: 'SettingsPage_footer__QIqyx',
            };
        },
        39472: (e, t, r) => {
            'use strict';
            function o() {
                return window.VERSION;
            }
            r.d(t, { H: () => o });
        },
        39684: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        42406: (e, t, r) => {
            'use strict';
            r.d(t, { BL: () => d, Gv: () => a, L5: () => c });
            var o,
                s = r(55178),
                n = {
                    5663: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0);
                        let o = r(810),
                            { innerWidth: s = 0, innerHeight: n = 0 } = window;
                        function i(e) {
                            let { top: t, right: r, bottom: o, left: i } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= n) || (o >= 0 && o <= n)) && ((i >= 0 && i <= s) || (r >= 0 && r <= s));
                        }
                        function l(e) {
                            var t, r;
                            let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, o)) ? r : e.attributes[0];
                        }
                        function a(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        (t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = i),
                            (t.getElementNameByDataAttribute = l),
                            (t.createIntersectionObserver = a),
                            (t.useIntersectionObserver = function (e, r, s) {
                                let [{ freezeOnceVisible: n, preflightCheck: c, ...d }, _ = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, s],
                                    [u, m] = (0, o.useState)({}),
                                    f = (0, o.useRef)(new Set()),
                                    p = (0, o.useMemo)(
                                        () =>
                                            _
                                                ? null
                                                : a((e) => {
                                                      let t = l(e.target);
                                                      if (t && p) {
                                                          if (f.current.has(t)) return;
                                                          m((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              n && e.isIntersecting && (f.current.add(t), p.unobserve(e.target));
                                                      }
                                                  }, d),
                                        [_],
                                    );
                                return (
                                    (0, o.useLayoutEffect)(
                                        () => (
                                            p &&
                                                !_ &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = i(e.current))) {
                                                            let t = l(e.current);
                                                            m((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || p.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                p && p.disconnect();
                                            }
                                        ),
                                        [_, p, e.length],
                                    ),
                                    u
                                );
                            });
                    },
                    810: (e) => {
                        e.exports = o || (o = r.t(s, 2));
                    },
                },
                i = {},
                l = (function e(t) {
                    var r = i[t];
                    if (void 0 !== r) return r.exports;
                    var o = (i[t] = { exports: {} });
                    return n[t](o, o.exports, e), o.exports;
                })(5663);
            l.__esModule;
            var a = l.createIntersectionObserver;
            l.defaultOptions;
            var c = l.getElementNameByDataAttribute;
            l.isInViewportNow;
            var d = l.useIntersectionObserver;
        },
        42822: (e) => {
            e.exports = {
                root: 'CustomPlayerThumbSelector_root__DQT1f',
                title: 'CustomPlayerThumbSelector_title__9Eai2',
                thumbsContainer: 'CustomPlayerThumbSelector_thumbsContainer__ywFZ1',
                button: 'CustomPlayerThumbSelector_button__JXiFX',
                button_selected: 'CustomPlayerThumbSelector_button_selected__5_mwm',
                thumbContent: 'CustomPlayerThumbSelector_thumbContent__lAM5O',
                thumbContent_custom: 'CustomPlayerThumbSelector_thumbContent_custom__ZcoKb',
                thumbLine: 'CustomPlayerThumbSelector_thumbLine__Iv4PY',
                thumbDefault: 'CustomPlayerThumbSelector_thumbDefault__3RlO1',
                thumbName: 'CustomPlayerThumbSelector_thumbName__SCX2s',
            };
        },
        45257: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => h });
            var o = r(32290),
                s = r(63618),
                n = r(8055),
                i = r(55178);
            let l = (e) => {
                    let { style: t, forwardRef: r, context: s, ...n } = e,
                        i = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        l = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, o.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': i, style: { ...t }, ref: r, ...n });
                },
                a = (0, i.forwardRef)((e, t) => (0, o.jsx)(l, { forwardRef: t, ...e }));
            var c = r(39684),
                d = r.n(c);
            let _ = (e) => {
                    let { style: t, forwardRef: r, withFooter: n, withHeader: i, withForceScroll: l, ...a } = e;
                    return (0, o.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: n, [d().scroller_withHeader]: i, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: r,
                        ...a,
                        tabIndex: -1,
                    });
                },
                u = (0, i.forwardRef)((e, t) => (0, o.jsx)(_, { forwardRef: t, ...e }));
            var m = r(62060),
                f = r(31417);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: s,
                            debounceDurationInMs: n = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            ...d
                        } = e,
                        [_, u] = (0, i.useState)(null),
                        p = (0, i.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == s || s(e), a.length > 0 && u(e), t && r)) {
                                        let o = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < o; e++) r(e);
                                    }
                                }, n),
                            [n, s, t, r, a],
                        );
                    (0, i.useEffect)(() => {
                        a.length > 0 && _ && p(_);
                    }, a);
                    let h = (0, i.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
                    return (0, o.jsx)(f.sN, { rangeChanged: p, totalCount: l, endReached: h, ...d });
                },
                h = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: _,
                            itemContentCallback: m,
                            listClassName: f,
                            overscan: h = 700,
                            pageSize: C = 20,
                            totalCount: v,
                            totalRequests: x,
                            debounceDurationInMs: E,
                            initialItemCount: b,
                            minInitialItemCount: S = 20,
                            handleRef: A,
                            alwaysShowScrollbar: g = !1,
                            testId: N,
                            isMobileLayout: O = !1,
                            shouldTriggerRangeChangedOn: L,
                            ...R
                        } = e,
                        [I, T] = (0, i.useState)(!1),
                        y = (0, i.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    T(e);
                                }, 100),
                            [],
                        ),
                        j = (0, i.useMemo)(() => {
                            var e, t;
                            return O
                                ? {
                                      Scroller: u,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : a,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: u,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : a,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, x, O]),
                        M = b ? Math.min(b, S) : void 0;
                    return (0, o.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: I || g, [d().root_notScrolling]: !I && !g }, t),
                        'data-test-id': N,
                        children: [
                            O && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, o.jsx)(p, {
                                overscan: h,
                                components: j,
                                listClassName: f,
                                itemClassName: _,
                                isScrolling: y,
                                itemContent: m,
                                scrollerRef: A,
                                totalCount: v,
                                pageSize: C,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: E,
                                initialItemCount: M,
                                shouldTriggerRangeChangedOn: L,
                                ...R,
                            }),
                            O && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        45807: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => d });
            var o,
                s = r(72812),
                n = r(55178),
                i = {
                    352: (e) => {
                        e.exports = s;
                    },
                    810: (e) => {
                        e.exports = o || (o = r.t(n, 2));
                    },
                },
                l = {};
            function a(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var r = (l[e] = { exports: {} });
                return i[e](r, r.exports, a), r.exports;
            }
            var c = {};
            (() => {
                Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0);
                let e = a(810),
                    t = a(352);
                c.l = (r) => {
                    let [o, s] = (0, e.useState)(!0),
                        [n, i] = (0, e.useState)(!0),
                        l = () => {
                            let e = null == r ? void 0 : r.current;
                            e && (s(0 === e.scrollLeft), i(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    (0, e.useEffect)(() => {
                        l();
                    }, [r, l]),
                        (0, e.useEffect)(() => {
                            let e = null == r ? void 0 : r.current;
                            return (
                                null == e || e.addEventListener('scroll', l),
                                window.addEventListener('resize', l),
                                () => {
                                    null == e || e.removeEventListener('scroll', l), window.removeEventListener('resize', l);
                                }
                            );
                        }, [r, l]);
                    let a = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    r && r.current && (r.current.scrollLeft += r.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [r],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        r && r.current && (r.current.scrollLeft -= r.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [r],
                        ),
                        swipeForward: a,
                        shouldBackwardButtonBeDisabled: o,
                        shouldForwardButtonBeDisabled: n,
                        shouldHideControls: o && n,
                    };
                };
            })(),
                c.X;
            var d = c.l;
        },
        47498: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => n });
            var o = r(55178),
                s = r(9848);
            function n() {
                return (0, o.useContext)(s.F);
            }
        },
        48922: (e, t, r) => {
            'use strict';
            r.d(t, { _Q: () => o, fD: () => n, qG: () => i, xK: () => s });
            var o = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.ARTIST_TRACKS = 'artist_tracks'),
                    (e.ARTIST_SIMILAR = 'artist_similar'),
                    (e.ARTIST_ALBUMS = 'artist_albums'),
                    (e.ARTIST_DISCOGRAPHY = 'artist_discography'),
                    (e.ARTIST_COMPILATIONS = 'artist_compilations'),
                    (e.ARTIST_CONCERTS = 'artist_concerts_screen'),
                    (e.ARTIST_CLIPS = 'artist_clips'),
                    (e.CHART = 'chart'),
                    (e.CHART_PODCASTS = 'chart_podcasts'),
                    (e.CHART_PODCASTS_CATEGORY = 'chart_podcasts_category'),
                    (e.HOME = 'home'),
                    (e.SEARCH = 'search'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.OWN_COLLECTION = 'own_collection'),
                    (e.OWN_ALBUMS = 'own_albums'),
                    (e.OWN_DISLIKES = 'own_dislikes'),
                    (e.OWN_PODCASTS = 'own_podcasts'),
                    (e.OWN_ARTISTS = 'own_artists'),
                    (e.OWN_PLAYLISTS = 'own_playlists'),
                    (e.OWN_TRACKS = 'own_tracks'),
                    (e.OWN_CLIPS = 'own_clips'),
                    (e.RADIO = 'radio'),
                    (e.GENRE = 'genre'),
                    (e.GENRE_ALBUMS = 'genre_albums'),
                    (e.GENRE_ARTISTS = 'genre_artists'),
                    (e.GENRE_PLAYLISTS = 'genre_playlists'),
                    (e.TAG = 'tag'),
                    (e.POST = 'post'),
                    (e.HISTORY = 'history'),
                    (e.FAMILIAR_YOU = 'familiar_you'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.NON_MUSIC = 'non_music'),
                    (e.NON_MUSIC_CATEGORY_PLAYLISTS = 'non_music_category_playlists'),
                    (e.NON_MUSIC_ALBUMS = 'non_music_albums'),
                    (e.LANDING = 'landing'),
                    (e.ENTITIES = 'entities'),
                    (e.TRAILER = 'trailer'),
                    (e.TRACK = 'track'),
                    (e.TRACK_SCREEN = 'track_screen'),
                    (e.PLAYER = 'player'),
                    (e.KIDS = 'kids'),
                    (e.KIDS_EDITORIAL_PLAYLISTS = 'kids_editorial_playlists'),
                    (e.KIDS_EDITORIAL_ALBUMS = 'kids_editorial_albums'),
                    (e.DOWNLOADS_TRACKS = 'downloads_tracks'),
                    (e.TRAILER_OF_THE_YEAR = 'trailer_of_the_year'),
                    (e.COLLECTION_KIDS = 'collection_kids'),
                    (e.COLLECTION_KIDS_ALBUMS = 'collection_kids_albums'),
                    (e.COLLECTION_KIDS_PLAYLISTS = 'collection_kids_playlists'),
                    (e.COLLECTION_KIDS_TRACKS = 'collection_kids_tracks'),
                    (e.COLLECTION_VIBE_ROOMS = 'multivibe_screen'),
                    (e.VIDEO_PLAYER = 'video_player'),
                    (e.LABEL = 'label'),
                    (e.LABEL_ALBUMS = 'label_albums'),
                    (e.LABEL_ARTISTS = 'label_artists'),
                    (e.PAYWALL = 'paywall'),
                    (e.CONCERTS = 'concerts'),
                    (e.CONCERT_LOCATION_SELECTOR = 'concert_location_selector'),
                    (e.PROMOLANDING_ALBUM = 'promolanding_album'),
                    (e.CONCERT = 'concert_screen'),
                    (e.PAGE_NOT_FOUND_SCREEN = 'page_not_found_screen'),
                    (e.SLIDES_SCREEN = 'slides_screen'),
                    (e.WAVE_LANDING_SCREEN = 'wave_landing_screen'),
                    (e.FACT_SCREEN = 'fact_screen'),
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACCEPTING_INVITATION_SCREEN = 'multivibe_accepting_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_ALONE_SCREEN = 'multivibe_alone_screen'),
                    (e.MULTIVIBE_INVALID_INVITATION_SCREEN = 'multivibe_invalid_invitation_screen'),
                    (e.MULTIVIBE_PENDING_INVITATION_SCREEN = 'multivibe_pending_invitation_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_ALREADY_EXIST_SCREEN = 'multivibe_already_exist_screen'),
                    e
                );
            })({});
            let s = [
                    'home',
                    'own_collection',
                    'landing',
                    'own_artists',
                    'artist',
                    'artist_concerts_screen',
                    'non_music',
                    'playlist',
                    'search',
                    'video_player',
                    'label',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_accepting_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_alone_screen',
                    'multivibe_invalid_invitation_screen',
                    'multivibe_pending_invitation_screen',
                    'multivibe_already_exist_screen',
                ],
                n = [
                    'home',
                    'landing',
                    'non_music',
                    'own_collection',
                    'own_artists',
                    'search',
                    'artist',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_accepting_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_alone_screen',
                    'multivibe_invalid_invitation_screen',
                    'multivibe_pending_invitation_screen',
                    'multivibe_already_exist_screen',
                ],
                i = ['home', 'landing', 'non_music', 'own_collection', 'search', 'artist', 'concerts', 'concert_screen', 'album', 'playlist'];
        },
        49522: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => u });
            var o = r(32290),
                s = r(63618),
                n = r(55178),
                i = r(21732),
                l = r(45807),
                a = r(63423),
                c = r(82586),
                d = r(60178),
                _ = r.n(d);
            let u = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: r,
                        forwardControlClassName: d,
                        className: u,
                        withSecondaryColor: m,
                        buttonSize: f = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: h, swipeForward: C, shouldBackwardButtonBeDisabled: v, shouldForwardButtonBeDisabled: x, shouldHideControls: E } = (0, l.Y)(t),
                    b = (0, n.useCallback)(
                        (e) => {
                            h(), e.stopPropagation();
                        },
                        [h],
                    ),
                    S = (0, n.useCallback)(
                        (e) => {
                            C(), e.stopPropagation();
                        },
                        [C],
                    );
                return (0, o.jsxs)('div', {
                    className: (0, s.$)(_().root, u),
                    'data-test-id': i.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, o.jsx)(a.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, s.$)(_().control, r, { [_().control_hidden]: E, [_().control_withSecondaryColor]: m }),
                            onClick: b,
                            size: f,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, o.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: v,
                            'data-test-id': i.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, o.jsx)(a.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, s.$)(_().control, d, { [_().control_hidden]: E, [_().control_withSecondaryColor]: m }),
                            onClick: S,
                            size: f,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, o.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: x,
                            'data-test-id': i.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        49700: (e) => {
            e.exports = {
                root: 'ShortcutsModal_root__ro7m4',
                modalHeader: 'ShortcutsModal_modalHeader__IYJ9m',
                modalContent: 'ShortcutsModal_modalContent__SCpYX',
                list: 'ShortcutsModal_list__eS4ox',
                text: 'ShortcutsModal_text__5JJ0j',
                content: 'ShortcutsModal_content__Li9Ip',
                buttons: 'ShortcutsModal_buttons__o_xlC',
                button: 'ShortcutsModal_button__cTIee',
            };
        },
        51012: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => n });
            var o = r(55178),
                s = r(3064);
            function n() {
                return (0, o.useContext)(s.D);
            }
        },
        52068: (e, t, r) => {
            'use strict';
            r.d(t, { vZ: () => m, st: () => n, gf: () => l });
            var o = r(55178);
            let s = (0, o.createContext)(null);
            function n() {
                return (0, o.useContext)(s);
            }
            let i = (0, o.createContext)({ hash: void 0 });
            function l() {
                return (0, o.useContext)(i);
            }
            var a = r(32290),
                c = r(27576);
            let d = (e) => {
                let { children: t } = e,
                    r = (0, o.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, a.jsx)(i.Provider, { value: r, children: t });
            };
            var _ = r(16172);
            let u = null,
                m = (e) => {
                    let { allowAnalyticsLogs: t, children: r, evgenUserParam: n, logger: i, metrika: l } = e,
                        c = (0, o.useMemo)(() => {
                            if (u) return u;
                            let e = (0, _.vD)((e) => l.count(e, n), i, t),
                                r = (0, _.xU)(),
                                o = (0, _.$N)();
                            return (u = new _.gK(e, r, o));
                        }, [i, l]);
                    return (0, a.jsx)(s.Provider, { value: c, children: (0, a.jsx)(d, { children: r }) });
                };
        },
        52898: (e) => {
            e.exports = {
                root: 'AboutAppModal_root__yBvgU',
                modalHeader: 'AboutAppModal_modalHeader__q1NPj',
                modalContent: 'AboutAppModal_modalContent__SHO_X',
                list: 'AboutAppModal_list__HfB82',
                link: 'AboutAppModal_link__i3P3P',
                explicitText: 'AboutAppModal_explicitText__29HUD',
                companyText: 'AboutAppModal_companyText__yroW0',
                versionText: 'AboutAppModal_versionText__iFb8L',
            };
        },
        53022: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => n });
            var o = r(55178),
                s = r(29098);
            let n = () => (0, o.useContext)(s.P);
        },
        53453: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => o });
            var o = (function (e) {
                return (e.DISABLED = 'DISABLED'), (e.ENABLED = 'ENABLED'), e;
            })({});
        },
        54667: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => o, u: () => s });
            var o = (function (e) {
                    return (e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e;
                })({}),
                s = (function (e) {
                    return (e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e;
                })({});
        },
        55332: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => o });
            var o = (function (e) {
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
        58008: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => o });
            var o = (function (e) {
                return (e.OK = 'ok'), (e.ERROR = 'error'), e;
            })({});
        },
        58054: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => b });
            var o = r(32290),
                s = r(63618),
                n = r(96103),
                i = r(60900),
                l = r(39407),
                a = r(21732),
                c = r(71926),
                d = r(14858),
                _ = r(8626),
                u = r(31010),
                m = r(61945),
                f = r(57594),
                p = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let h = (e, t, r) => {
                switch (e) {
                    case p.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case p.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                    case p.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                    case p.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                    case p.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case p.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                    case p.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                }
            };
            var C = r(61258),
                v = r(77088),
                x = r.n(v);
            let E = (0, n.PA)((e) => {
                    let { className: t } = e,
                        { location: r } = (0, f.g)(),
                        { formatDate: n } = (0, i.A)(),
                        { language: d } = (0, m.h)();
                    return (0, o.jsxs)('div', {
                        className: (0, s.$)(x().copyrights, t),
                        'data-test-id': a.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, o.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    n(new Date(), (0, _.m)()),
                                    ' \xa0',
                                    (0, o.jsx)(C.N, {
                                        target: '_blank',
                                        href: h(p.YANDEX, r.tld, d),
                                        className: (0, s.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': a.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, o.jsx)(l.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, o.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, o.jsx)(C.N, {
                                target: '_blank',
                                href: h(p.YANDEX_PROJECTS, r.tld, d),
                                className: x().copyrightLink,
                                'data-test-id': a.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, o.jsx)(l.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                b = (0, n.PA)((e) => {
                    var t;
                    let { className: r } = e,
                        { user: n, location: i } = (0, f.g)(),
                        { isEnabled: _ } = null != (t = (0, u.P)()) ? t : {},
                        { language: v } = (0, m.h)(),
                        b = (0, d.w)(!0),
                        S = ((e) => {
                            let { platform: t, tld: r, language: s, userRegion: n } = e,
                                i = { title: (0, o.jsx)(l.A, { id: 'footer.links-copyright-holders' }), url: h(p.COPYRIGHT_HOLDER, r, s) },
                                a = { title: (0, o.jsx)(l.A, { id: 'footer.links-privacy-policy' }), url: h(p.PRIVACY_POLICY, r, s) },
                                c = { title: (0, o.jsx)(l.A, { id: 'footer.links-terms' }), url: h(p.AGREEMENT, r, s) },
                                d = { title: (0, o.jsx)(l.A, { id: 'footer.links-recommendation-rules' }), url: h(p.RECOMMENDATION_RULES, r, s) },
                                _ = { title: (0, o.jsx)(l.A, { id: 'footer.links-help' }), url: h(p.HELP, r, s) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [i, c, d];
                                    return 'ru' === n && e.push(a), e.push(_), e;
                                }
                                case 'desktop':
                                    return [i, c, d, _];
                            }
                        })({ platform: 'desktop', tld: i.tld, language: v, userRegion: n.account.data.userSessionRegionIso });
                    return (0, o.jsxs)('footer', {
                        className: (0, s.$)(x().root, x().important, { [x().root_withOffsetForDeeplink]: _ }, r),
                        'data-test-id': a.S7.FOOTER,
                        children: [
                            (0, o.jsxs)('div', {
                                className: x().links,
                                children: [
                                    (0, o.jsx)('ol', {
                                        className: x().list,
                                        'data-test-id': a.S7.FOOTER_LINKS_LIST,
                                        children: S.map((e) => {
                                            let { title: t, url: r } = e;
                                            return (0, o.jsx)(
                                                'li',
                                                {
                                                    className: x().item,
                                                    children: (0, o.jsx)(C.N, {
                                                        target: '_blank',
                                                        href: r,
                                                        className: x().link,
                                                        'data-test-id': a.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                r,
                                            );
                                        }),
                                    }),
                                    (0, o.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: x().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: b },
                                        'data-test-id': a.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, o.jsx)(E, {}),
                        ],
                    });
                });
        },
        60178: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        61258: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => p });
            var o = r(32290),
                s = r(96103),
                n = r(59611),
                i = r.n(n),
                l = r(55178),
                a = r(91027),
                c = r(63887),
                d = r(57594),
                _ = r(79406),
                u = r(36477);
            let m = (e) => {
                    let [t, r] = (0, l.useState)(!1),
                        s = (0, a.c)(() => {
                            r(!0);
                        });
                    return (0, o.jsx)(i(), { prefetch: t, ...e, onMouseEnter: s });
                },
                f = (0, s.PA)((e) => {
                    let { forwardedRef: t, href: r, component: s, ...n } = e,
                        { experiments: a } = (0, d.g)(),
                        { href: f, target: p, rel: h } = (0, u.u)(null != r ? r : ''),
                        C = a.checkExperiment(_.z.WebNextDisablePrefetchRequests, 'on'),
                        v = a.checkExperiment(_.z.WebNextDisablePrefetchRequests, 'hover'),
                        x = (0, l.isValidElement)(s)
                            ? s
                            : (function (e, t, r) {
                                  return e ? (t ? (0, o.jsx)(i(), { prefetch: !1 }) : r ? (0, o.jsx)(m, { href: e }) : (0, o.jsx)(i(), {})) : (0, o.jsx)('a', {});
                              })(r, C, v);
                    return (0, o.jsx)(c.N, { ref: t, component: x, href: r ? f : void 0, target: p, rel: h, ...n });
                }),
                p = (0, l.forwardRef)((e, t) => (0, o.jsx)(f, { ...e, forwardedRef: t }));
        },
        61954: (e) => {
            e.exports = {
                control: 'CarouselWithArrows_control__3uyYB',
                list: 'CarouselWithArrows_list__2f6lz',
                buttons: 'CarouselWithArrows_buttons__fW_Dp',
                root: 'CarouselWithArrows_root__RreSk',
                root_arrowLeft_hidden: 'CarouselWithArrows_root_arrowLeft_hidden__WmoMn',
                root_arrowRight_hidden: 'CarouselWithArrows_root_arrowRight_hidden__sQTGA',
                root_arrow_hidden: 'CarouselWithArrows_root_arrow_hidden__sltkz',
                control_left: 'CarouselWithArrows_control_left__GrTcO',
                control_right: 'CarouselWithArrows_control_right__Si_BV',
                root_carouselBetweenArrows: 'CarouselWithArrows_root_carouselBetweenArrows___aN_d',
                wrapper: 'CarouselWithArrows_wrapper__Kezgl',
                carousel: 'CarouselWithArrows_carousel__gm5sM',
                important: 'CarouselWithArrows_important__ZFlvq',
            };
        },
        63887: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => c });
            var o,
                s = r(55178),
                n = {
                    5881: (e, t, r) => {
                        function o() {
                            for (var e, t, r = 0, o = ''; r < arguments.length; )
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            o,
                                            s = '';
                                        if ('string' == typeof t || 'number' == typeof t) s += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (o = e(t[r])) && (s && (s += ' '), (s += o));
                                            else for (r in t) t[r] && (s && (s += ' '), (s += r));
                                        return s;
                                    })(e)) &&
                                    (o && (o += ' '), (o += t));
                            return o;
                        }
                        r.r(t), r.d(t, { clsx: () => o, default: () => s });
                        let s = o;
                    },
                    9829: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => o });
                        let o = {
                            root: 'buOTZq_TKQOVyjMLrXvB',
                            block: 'BSPmaubc8UL2KHOMLV4A',
                            iconContainer: 'VUb2BxfgkGQhG1RDQGwF',
                            iconOnly: 'WhDaA5aAfZSjxalYb_Ex',
                            flexIcon: 'vIGeuYz4Cf60Cnuq3WKA',
                            icon_position_left: 'GoUQfg7mJlSkcbAZ28Rj',
                            icon_position_right: 'TXa2RKc_Hf0QPdmUDMwI',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function o(e, t, o) {
                            var s = null;
                            if ((void 0 !== o && (s = '' + o), void 0 !== t.key && (s = '' + t.key), 'key' in t))
                                for (var n in ((o = {}), t)) 'key' !== n && (o[n] = t[n]);
                            else o = t;
                            return { $$typeof: r, type: e, key: s, ref: void 0 !== (t = o.ref) ? t : null, props: o };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = o), (t.jsxs = o);
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    3937: function (e, t, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0);
                        let s = r(4377),
                            n = r(810),
                            i = r(5881),
                            l = o(r(9829)),
                            a = (e) => {
                                let {
                                        component: t = (0, s.jsx)('a', {}),
                                        block: r,
                                        target: o,
                                        rel: a,
                                        href: c,
                                        forwardRef: d,
                                        iconPosition: _ = 'left',
                                        flexIcon: u,
                                        icon: m,
                                        className: f,
                                        children: p,
                                        textClassName: h = '',
                                        containerClassName: C,
                                        ...v
                                    } = e,
                                    x = (0, n.useId)(),
                                    E = !n.Children.count(p),
                                    b = 'left' === _,
                                    S = null;
                                if (void 0 !== m) {
                                    var A;
                                    S = (0, n.cloneElement)(m, {
                                        className: (0, i.clsx)(
                                            l.default.icon,
                                            { [l.default['icon_position_'.concat(_)]]: !E && _ },
                                            null == (A = m.props) ? void 0 : A.className,
                                        ),
                                        key: x,
                                    });
                                }
                                let g = (0, n.useMemo)(
                                    () =>
                                        m
                                            ? (0, s.jsxs)('div', {
                                                  className: (0, i.clsx)(l.default.iconContainer, C),
                                                  children: [b && S, !E && (0, s.jsx)('span', { className: h, children: p }), !b && S],
                                              })
                                            : p,
                                    [p, C, m, b, E, S, h],
                                );
                                return (0, n.cloneElement)(
                                    t,
                                    {
                                        ref: d,
                                        target: o,
                                        rel: '_blank' === o && void 0 === a ? 'noopener noreferrer' : a,
                                        href: c,
                                        className: (0, i.clsx)(l.default.root, { [l.default.block]: r, [l.default.flexIcon]: m && u, [l.default.iconOnly]: m && E }, f),
                                        ...v,
                                        ...t.props,
                                    },
                                    g,
                                );
                            };
                        t.Link = (0, n.forwardRef)((e, t) => (0, s.jsx)(a, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = o || (o = r.t(s, 2));
                    },
                },
                i = {};
            function l(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return n[e].call(r.exports, r, r.exports, l), r.exports;
            }
            (l.d = (e, t) => {
                for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var a = {};
            (() => {
                Object.defineProperty(a, 'X', { value: !0 }), (a.r = void 0);
                var e = l(3937);
                Object.defineProperty(a, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var c = a.r;
            a.X;
        },
        65497: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => s });
            var o = r(53161);
            let s = (e) => e.startsWith(o.nl);
        },
        69582: (e) => {
            e.exports = {
                root: 'ClearMemoryModal_root__gKdij',
                modalHeader: 'ClearMemoryModal_modalHeader__veasf',
                modalContent: 'ClearMemoryModal_modalContent__b7yHr',
                image: 'ClearMemoryModal_image__evvTq',
                description: 'ClearMemoryModal_description__ue94L',
                message: 'ClearMemoryModal_message__mYQpM',
            };
        },
        70208: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => o });
            var o = (function (e) {
                return (e.BRANDED = 'branded'), (e.DEFAULT = 'default'), (e.DUCK = 'duck'), (e.CAR = 'car'), e;
            })({});
        },
        70608: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => o });
            let o = (0, r(55178).createContext)({ filterKey: void 0, filterValue: void 0, filterPos: void 0 });
        },
        73818: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => o });
            let o = (0, r(55178).createContext)({
                blockId: void 0,
                blockType: void 0,
                blockIdForFrom: void 0,
                blockPosX: void 0,
                blockPosY: void 0,
                objectsCount: void 0,
                mainObjectType: void 0,
                mainObjectId: void 0,
                displayReasonId: void 0,
            });
        },
        74196: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => c });
            var o,
                s = r(55178),
                n = {
                    5881: (e, t, r) => {
                        function o() {
                            for (var e, t, r = 0, o = ''; r < arguments.length; )
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            o,
                                            s = '';
                                        if ('string' == typeof t || 'number' == typeof t) s += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (o = e(t[r])) && (s && (s += ' '), (s += o));
                                            else for (r in t) t[r] && (s && (s += ' '), (s += r));
                                        return s;
                                    })(e)) &&
                                    (o && (o += ' '), (o += t));
                            return o;
                        }
                        r.r(t), r.d(t, { clsx: () => o, default: () => s });
                        let s = o;
                    },
                    4517: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => o });
                        let o = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function o(e, t, o) {
                            var s = null;
                            if ((void 0 !== o && (s = '' + o), void 0 !== t.key && (s = '' + t.key), 'key' in t))
                                for (var n in ((o = {}), t)) 'key' !== n && (o[n] = t[n]);
                            else o = t;
                            return { $$typeof: r, type: e, key: s, ref: void 0 !== (t = o.ref) ? t : null, props: o };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = o), (t.jsxs = o);
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    2865: function (e, t, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0);
                        let s = r(4377),
                            n = r(5881),
                            i = r(810),
                            l = o(r(4517));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: o, ...a } = e,
                                c = (0, n.clsx)(l.default.root, { [l.default.focusable]: r }, t);
                            return (0, i.isValidElement)(o)
                                ? (0, i.cloneElement)(o, { ...a, className: (0, n.clsx)(c, o.props.className) })
                                : (0, s.jsx)('span', { className: c, ...a, children: o });
                        };
                    },
                    810: (e) => {
                        e.exports = o || (o = r.t(s, 2));
                    },
                },
                i = {};
            function l(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return n[e].call(r.exports, r, r.exports, l), r.exports;
            }
            (l.d = (e, t) => {
                for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var a = {};
            (() => {
                Object.defineProperty(a, '__esModule', { value: !0 }), (a.SROnly = void 0);
                var e = l(2865);
                Object.defineProperty(a, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = a.SROnly;
            a.__esModule;
        },
        77088: (e) => {
            e.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        78010: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 19094));
        },
        80536: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => o });
            let o = (0, r(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        80556: (e) => {
            e.exports = {
                root: 'EntityCardShimmer_root__Sh7ah',
                subcover: 'EntityCardShimmer_subcover__ESt3R',
                cover: 'EntityCardShimmer_cover__BXtjT',
                cover_round: 'EntityCardShimmer_cover_round__Ci3zW',
                cover_withSubcover: 'EntityCardShimmer_cover_withSubcover__v9l5y',
                infoContainer: 'EntityCardShimmer_infoContainer__22kYk',
                infoContainer_centered: 'EntityCardShimmer_infoContainer_centered__cxlPO',
                title: 'EntityCardShimmer_title__GQ2jX',
                title_withSubcover: 'EntityCardShimmer_title_withSubcover__lBHBC',
                content_linesCount_1: 'EntityCardShimmer_content_linesCount_1__JHlue',
                content_linesCount_2: 'EntityCardShimmer_content_linesCount_2__CMvO5',
                content_linesCount_3: 'EntityCardShimmer_content_linesCount_3__mPzav',
                content_linesCount_4: 'EntityCardShimmer_content_linesCount_4__8KtHO',
            };
        },
        81218: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => s, g: () => n });
            var o = r(55178);
            let s = (0, o.createContext)(null);
            function n() {
                return (0, o.useContext)(s);
            }
        },
        84782: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => n });
            var o = r(55178),
                s = r(73818);
            function n() {
                return (0, o.useContext)(s.p);
            }
        },
        85892: (e) => {
            e.exports = {
                root: 'SettingsListToggleItem_root__yEEYT',
                textContainer: 'SettingsListToggleItem_textContainer__tRjyt',
                title: 'SettingsListToggleItem_title__Xz8_Q',
                description: 'SettingsListToggleItem_description__JBOzV',
            };
        },
        88964: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => n });
            var o = r(70204),
                s = r(34186);
            function n() {
                return (0, s.N)().get(o.y$);
            }
        },
        89020: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => a });
            var o = r(32290),
                s = r(63618),
                n = r(79856),
                i = r(80556),
                l = r.n(i);
            let a = (e) => {
                let {
                    isActive: t,
                    className: r,
                    shimmerClassName: i,
                    round: a,
                    'aria-label': c,
                    centered: d,
                    withInfo: _ = !0,
                    linesCount: u = 3,
                    withSubcover: m,
                    radius: f = 'l',
                } = e;
                return (0, o.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(l().root, r),
                    children: [
                        m && (0, o.jsx)(n.W, { isActive: t, className: l().subcover, radius: 'l' }),
                        (0, o.jsx)(n.W, { isActive: t, className: (0, s.$)(l().cover, i, { [l().cover_round]: a, [l().cover_withSubcover]: m }), radius: f }),
                        _ &&
                            (0, o.jsx)('div', {
                                className: (0, s.$)(l().infoContainer, l()['content_linesCount_'.concat(u)], { [l().infoContainer_centered]: d }),
                                children: (0, o.jsx)(n.W, { isActive: t, className: (0, s.$)(l().title, { [l().title_withSubcover]: m }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        90357: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => d });
            var o = r(32290),
                s = r(63618),
                n = r(74196),
                i = r(71926),
                l = r(58534),
                a = r(17679),
                c = r.n(a);
            let d = (e) => {
                let { error: t, closeToast: r, className: a } = e;
                return (0, o.jsx)(l.$, {
                    className: (0, s.$)(c().root, a),
                    message: (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(n.q, { children: (0, o.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, o.jsx)(i.HL, { className: c().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: r,
                });
            };
        },
        95329: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => o });
            var o = (function (e) {
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
        99169: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => l, r: () => a });
            var o = r(70208),
                s = r(60754),
                n = r(13616);
            let i = s.gK.model('CustomPlayerThumbItem', { id: s.gK.enumeration(Object.values(o.T)), name: s.gK.string, thumb: n.K }),
                l = {
                    [o.T.DUCK]: () =>
                        r
                            .e(8962)
                            .then(r.t.bind(r, 68962, 17))
                            .then((e) => e.default),
                    [o.T.CAR]: () =>
                        r
                            .e(8765)
                            .then(r.t.bind(r, 68765, 17))
                            .then((e) => e.default),
                },
                a = (e) =>
                    new Map([
                        [o.T.DUCK, i.create({ id: o.T.DUCK, name: e({ id: 'branded-player.duck' }), thumb: { href: o.T.DUCK, width: 50, height: 50 } })],
                        [o.T.CAR, i.create({ id: o.T.CAR, name: e({ id: 'branded-player.car' }), thumb: { href: o.T.CAR, width: 143, height: 38 } })],
                    ]);
        },
    },
    (e) => {
        e.O(
            0,
            [
                9030, 7034, 1157, 5718, 3879, 7258, 3379, 3647, 6639, 567, 6706, 1311, 5201, 8892, 2536, 66, 5835, 2812, 8035, 2732, 1410, 1417, 8624, 6477, 7275, 2586,
                8347, 4522, 7702, 861, 4668, 1175, 4797, 4638, 6758, 1993, 4220, 9562, 7358,
            ],
            () => e((e.s = 78010)),
        ),
            (_N_E = e.O());
    },
]);
