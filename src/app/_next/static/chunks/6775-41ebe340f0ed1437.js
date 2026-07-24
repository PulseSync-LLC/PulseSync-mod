(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6775],
    {
        50: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => n, W: () => r });
            var i = a(55178);
            let n = (0, i.createContext)({ theme: null, setTheme: () => {} }),
                r = () => (0, i.useContext)(n);
        },
        912: (e) => {
            e.exports = {
                collapseButton: 'NavbarDesktop_collapseButton__XQh9d',
                root: 'NavbarDesktop_root__scYzp',
                logoWrapper: 'NavbarDesktop_logoWrapper__89ce6',
                navigation: 'NavbarDesktop_navigation__dLUGW',
                navigation_new: 'NavbarDesktop_navigation_new__0j8W5',
                navigation_gapFill: 'NavbarDesktop_navigation_gapFill__SsWxA',
                navigationGroup: 'NavbarDesktop_navigationGroup__eexLF',
                logoLink: 'NavbarDesktop_logoLink__KR0Dk',
                logo: 'NavbarDesktop_logo__Z4jGx',
                collapseButtonTooltip_hidden: 'NavbarDesktop_collapseButtonTooltip_hidden__tFoZZ',
                subTitle: 'NavbarDesktop_subTitle__Fqvr4',
                subTitle_withCursorPointer: 'NavbarDesktop_subTitle_withCursorPointer__VYJOh',
                title: 'NavbarDesktop_title__OrnHN',
                title_animate: 'NavbarDesktop_title_animate__XLxaQ',
                animation_show: 'NavbarDesktop_animation_show__pRFj9',
                title_collapsed: 'NavbarDesktop_title_collapsed__IH9Bc',
                animation_hide: 'NavbarDesktop_animation_hide__8VxPs',
                pinsList: 'NavbarDesktop_pinsList___jXIM',
                scrollableContainer: 'NavbarDesktop_scrollableContainer__HLc9D',
                scrollableContent: 'NavbarDesktop_scrollableContent__OyU4P',
                disabledNavigationItem: 'NavbarDesktop_disabledNavigationItem__Qp_hs',
                bestRecommendationsModal: 'NavbarDesktop_bestRecommendationsModal__l7GD2',
                bestRecommendationsModalHeader: 'NavbarDesktop_bestRecommendationsModalHeader__VSi5Y',
                bestRecommendationsModalContent: 'NavbarDesktop_bestRecommendationsModalContent__WhwfK',
                bestRecommendationsModalLogo: 'NavbarDesktop_bestRecommendationsModalLogo__QnXgm',
                bestRecommendationsModalText: 'NavbarDesktop_bestRecommendationsModalText__05Z3M',
            };
        },
        1147: (e) => {
            e.exports = {
                root: 'PinsList_root__LN_2Z',
                root_withScroll: 'PinsList_root_withScroll__g8x3V',
                root_hasPins: 'PinsList_root_hasPins__3LXlo',
                content: 'PinsList_content__9RG7s',
                pin_enter: 'PinsList_pin_enter__2p2_6',
                pin_enter_active: 'PinsList_pin_enter_active__eNGlc',
                'enter-fade': 'PinsList_enter-fade__G_QY8',
                'enter-move': 'PinsList_enter-move__DSAXH',
                pin_exit: 'PinsList_pin_exit__y_gcM',
                pin_exit_active: 'PinsList_pin_exit_active__rF5Je',
                'exit-fade': 'PinsList_exit-fade__M6fYX',
                'exit-move': 'PinsList_exit-move__Jtgi0',
            };
        },
        1439: (e) => {
            e.exports = {
                shuffleIcon_off: 'ShuffleButton_shuffleIcon_off___oqrr',
                shuffleIcon_on: 'ShuffleButton_shuffleIcon_on__qFJqV',
                shuffleIcon_disabled: 'ShuffleButton_shuffleIcon_disabled__fQsOo',
            };
        },
        1456: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => S });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(55178),
                o = a(60900),
                l = a(39407),
                d = a(21732),
                c = a(70280),
                u = a(71926),
                _ = a(41677),
                m = a(58294),
                p = a(57594),
                h = a(53514),
                v = a(85017),
                x = a(13798),
                b = a(61258),
                f = a(25649),
                g = a(24760),
                A = a(84141),
                N = a(14960),
                C = a(5856),
                y = a.n(C),
                T = a(50918),
                E = a.n(T);
            let S = (0, r.PA)((e) => {
                var t, a, r, C;
                let {
                        track: T,
                        className: S,
                        withAuthor: B = !1,
                        withSecondaryColor: I = !1,
                        withListeningProgress: j = !1,
                        captionSize: k = 'm',
                        explicitSize: P = 'xs',
                        withExplicitMark: w = !0,
                        titleContainerClassName: L,
                        textClassName: O,
                        playContextParams: D,
                        withTimeLeftText: R = !0,
                        ignoreDislikedStyles: M,
                        albumArtists: F,
                        withCustomTooltip: U = !0,
                        hasLineClamp: z = !0,
                        withSavingQueryParams: W,
                        beforeTitle: V,
                        afterTitle: H,
                        withContextMenuArtists: K,
                        withArtistLink: G = !0,
                    } = e,
                    {
                        sonataState: Y,
                        settings: { isMobile: $ },
                    } = (0, p.g)(),
                    { formatMessage: q } = (0, o.A)(),
                    Z = (0, g.$)({ withCustomTooltip: U }),
                    Q = (0, A.O)({ track: T, withSavingQueryParams: W, entityType: v.n.AUDIOBOOK }),
                    X = !!(j && D && T.shouldRememberPosition && T.streamProgress && T.durationMs),
                    J =
                        T.id === (null == (t = Y.entityMeta) ? void 0 : t.id) &&
                        (null == (r = Y.entityMeta) || null == (a = r.streamProgress) ? void 0 : a.endPositionSec),
                    ee = (0, N.d)(X, T.streamProgress, J),
                    et = (0, s.useMemo)(() => (0, f.s)(T.artists, F), [T.artists, F, T.id]),
                    ea = et.length > 0 && B && !ee,
                    ei = (0, s.useCallback)(
                        (e) =>
                            (0, i.jsx)(c.m_, {
                                enabled: Z && !$,
                                offsetOptions: 4,
                                placement: 'top',
                                text: T.title,
                                hoverSettings: h.V,
                                children: (0, i.jsx)(u.HL, {
                                    className: y().title,
                                    type: 'entity',
                                    size: k,
                                    variant: 'span',
                                    title: Z ? void 0 : T.title,
                                    ...e,
                                    children: T.title,
                                }),
                            }),
                        [$, Z, k, T.title],
                    ),
                    en = (0, s.useMemo)(() => {
                        if (T.isRemoved) return (0, i.jsx)(l.A, { id: 'track-title.audiobook-not-found' });
                        if (T.hasTrackLink) {
                            var e;
                            return (0, i.jsx)(b.N, {
                                'aria-label': q({ id: 'entity-names.audiobook-name' }, { bookName: null == (e = T.mainAlbum) ? void 0 : e.title }),
                                className: y().albumLink,
                                href: T.url,
                                title: Z ? void 0 : T.title,
                                onClick: Q,
                                'data-test-id': d.Kq.track.TRACK_TITLE,
                                children: ei(),
                            });
                        }
                        return ei({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [T.isRemoved, T.hasTrackLink, null == (C = T.mainAlbum) ? void 0 : C.title, T.title, T.url, ei, q, Z, Q]),
                    er = (0, s.useMemo)(() => +!!z, [z]);
                return (0, i.jsx)('div', {
                    className: (0, n.$)(y().root, { [y().root_disabled]: !T.isAvailable, [y().root_disliked]: T.isDisliked && !M, [y().root_withSecondaryColor]: I }, S),
                    children: (0, i.jsxs)('div', {
                        className: (0, n.$)(y().metaContainer, E().metaContainer, { [E().metaContainer_oneLine]: !B }),
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, n.$)(y().titleContainer, L, E().titleContainer),
                                children: [
                                    (0, i.jsxs)(u.HL, {
                                        className: (0, n.$)(y().text, O),
                                        type: 'entity',
                                        size: k,
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            V,
                                            en,
                                            !T.isRemoved &&
                                                T.version &&
                                                (0, i.jsxs)(u.HL, {
                                                    className: (0, n.$)(y().text, y().version),
                                                    type: 'entity',
                                                    size: k,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Z ? void 0 : T.version,
                                                    children: ['\xa0', T.version],
                                                }),
                                        ],
                                    }),
                                    T.explicitDisclaimer &&
                                        w &&
                                        (0, i.jsx)(x.N, {
                                            containerClassName: y().explicitMarkContainer,
                                            getDescriptionTexts: T.getDescriptionTexts,
                                            variant: T.explicitDisclaimer,
                                            className: y().explicitMark,
                                            size: P,
                                            trackId: T.id,
                                        }),
                                    H,
                                ],
                            }),
                            ea &&
                                (0, i.jsx)(u.HL, {
                                    type: 'entity',
                                    size: k,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, n.$)(y().text, E().artists, O),
                                    children: (0, i.jsx)(_.i, {
                                        className: (0, n.$)(y().text, { [y().artists]: z }, O),
                                        linkClassName: (0, n.$)(y().text, y().link),
                                        captionClassName: (0, n.$)(y().text, y().artistCaption),
                                        artists: et,
                                        withLink: T.isNonUserGenerated && G,
                                        lineClamp: er,
                                        captionSize: k,
                                        withContextMenu: K,
                                    }),
                                }),
                            X &&
                                T.streamProgress &&
                                D &&
                                (0, i.jsx)(m.B, {
                                    className: (0, n.$)(E().progress, { [E().progress_withPreviousInfo]: ea, [E().progress_disabled]: !T.isAvailable || T.isDisliked }),
                                    id: T.id,
                                    albumId: T.albumId,
                                    streamProgress: T.streamProgress,
                                    durationMs: T.durationMs || 0,
                                    playContextParams: D,
                                    withTimeLeftText: R,
                                }),
                        ],
                    }),
                });
            });
        },
        2125: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => n });
            var i = a(37862),
                n = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(i.U.RUP, '_').concat(i.U.MAIN, '-').concat(i.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(i.U.DISCOGRAPHY, '_').concat(i.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(i.U.ALBUMS, '_').concat(i.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(i.U.COMPILATIONS, '_').concat(i.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(i.U.ARTISTS, '_').concat(i.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(i.U.CLIPS, '_').concat(i.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(i.U.DISCOVERY, '_').concat(i.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(i.U.SEARCH, '_').concat(i.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR, '_').concat(i.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        3237: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => s, RA: () => n, kz: () => r, m_: () => o, tn: () => l, w_: () => i });
            let i = { pp: 'g', ps: 'clni', p2: 'jjwl', puid1: '', puid2: '', puid3: '' },
                n = { pp: 'g', ps: 'clni', p2: 'jjzh', puid1: '', puid2: '', puid3: '' },
                r = { p1: 'dkreo', p2: 'jozm', puid1: '', puid2: '', puid3: '' },
                s = { p1: 'dlnfl', p2: 'jpzb', puid1: '', puid2: '', puid3: '' },
                o = 'adfox_176504636866914259',
                l = 'adfox_176053846725924259';
        },
        3646: (e) => {
            e.exports = {
                headingContainer: 'BuySubscriptionBenefitsContent_headingContainer__euBSr',
                heading: 'BuySubscriptionBenefitsContent_heading__xx64Z',
                offerHeading: 'BuySubscriptionBenefitsContent_offerHeading__58HWj',
                entityCover: 'BuySubscriptionBenefitsContent_entityCover__0zowc',
                entityTitle: 'BuySubscriptionBenefitsContent_entityTitle__gA8J2',
                benefits: 'BuySubscriptionBenefitsContent_benefits__HK41W',
                benefitItem: 'BuySubscriptionBenefitsContent_benefitItem__sYkCL',
                benefitIcon: 'BuySubscriptionBenefitsContent_benefitIcon__VczZK',
                benefitImage: 'BuySubscriptionBenefitsContent_benefitImage__LVU2a',
                benefitText: 'BuySubscriptionBenefitsContent_benefitText__stotu',
                benefitDivider: 'BuySubscriptionBenefitsContent_benefitDivider__uELk3',
                button: 'BuySubscriptionBenefitsContent_button__vNi8i',
                loginContainer: 'BuySubscriptionBenefitsContent_loginContainer__ov5gH',
                bonusText: 'BuySubscriptionBenefitsContent_bonusText__nzIej',
                giftIcon: 'BuySubscriptionBenefitsContent_giftIcon__1bL51',
                oneClickDisclaimerText: 'BuySubscriptionBenefitsContent_oneClickDisclaimerText__k5W_A',
            };
        },
        4820: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => d });
            var i = a(32290),
                n = a(55178),
                r = a(21732),
                s = a(71926),
                o = a(91624),
                l = a.n(o);
            let d = (e) => {
                let { getDescriptionTexts: t, entityId: a } = e,
                    [o, d] = (0, n.useState)(null);
                if (
                    ((0, n.useEffect)(() => {
                        t && t().then(d);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, i.jsx)(
                            s.HL,
                            {
                                className: l().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': r.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(a, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        4823: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => r });
            var i = a(55178),
                n = a(88763);
            let r = () => (0, i.useContext)(n.G);
        },
        5619: (e) => {
            e.exports = {
                root: 'VibeSettingsModal_root__oX6Av',
                modalContent: 'VibeSettingsModal_modalContent__KObkt',
                overlay: 'VibeSettingsModal_overlay__qKFx_',
                content: 'VibeSettingsModal_content__Uchn7',
                header: 'VibeSettingsModal_header__J4FUk',
                actions: 'VibeSettingsModal_actions__hCGT7',
                ripple: 'VibeSettingsModal_ripple__zQXGo',
            };
        },
        7050: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = (e) => 'object' == typeof e && null !== e && !Array.isArray(e) && 'source' in e && 'adfox' === e.source && 'type' in e && 'payload' in e;
        },
        7462: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => s, r: () => o });
            var i = a(55178),
                n = a(60900),
                r = a(64605),
                s = (function (e) {
                    return (e.PIN = 'pin'), e;
                })({});
            let o = (e, t) => {
                let { formatMessage: a } = (0, n.A)();
                return (0, i.useMemo)(() => {
                    switch (e) {
                        case r._.SINGLE:
                            return a({ id: 'entity-names.single' });
                        case r._.PODCAST:
                            return a({ id: 'entity-names.podcast' });
                        case r._.AUDIOBOOK:
                            if ('pin' === t) return a({ id: 'entity-names.book' });
                            return a({ id: 'entity-names.audio' });
                        case r._.FAIRY_TALE:
                            return a({ id: 'entity-names.fairy-tale' });
                        default:
                            return a({ id: 'entity-names.album' });
                    }
                }, [e, a, t]);
            };
        },
        7939: (e) => {
            e.exports = {
                root: 'NavbarDesktopPlusBar_root__QgKqJ',
                logos: 'NavbarDesktopPlusBar_logos__kKKEl',
                addition: 'NavbarDesktopPlusBar_addition__vluXf',
                title: 'NavbarDesktopPlusBar_title__mMdem',
                buttons: 'NavbarDesktopPlusBar_buttons__40_1A',
            };
        },
        8097: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => g });
            var i = a(32290),
                n = a(63618),
                r = a(55178),
                s = a(21732),
                o = a(50162),
                l = a(74196),
                d = a(71926),
                c = a(60900),
                u = a(39407),
                _ = a(91027),
                m = a(97647),
                p = a(57594),
                h = a(79406),
                v = a(61258),
                x = a(58534),
                b = a(70627),
                f = a.n(b);
            let g = (e) => {
                let {
                        closeToast: t,
                        className: a,
                        coverUri: b,
                        entityTitle: g,
                        entityDescription: A,
                        entityVariant: N,
                        entityUrl: C,
                        customCover: y,
                        radius: T,
                        isPinned: E,
                    } = e,
                    S = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((a) => {
                            let { entityVariant: n, values: r, entityTitle: s, entityDescription: o } = a;
                            switch (n) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.album-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.album-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.audiobook-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.fairytale-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.podcast-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.playlist-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.artist-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.artist-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(h.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, i.jsx)(u.A, { id: 'notifications-info.my-vibe-pinned-in-menu', values: r }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-pinned-in-menu' }, { entity: s }),
                                        };
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.entity-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.entity-pinned-in-menu' }, { entity: s, description: o }),
                                    };
                            }
                        });
                    })(),
                    B = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((a) => {
                            let { entityVariant: n, values: r, entityTitle: s, entityDescription: o } = a;
                            switch (n) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.album-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.album-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.audiobook-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.fairytale-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.podcast-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.playlist-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.artist-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.artist-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(h.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, i.jsx)(u.A, { id: 'notifications-info.my-vibe-unpinned-from-menu', values: r }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-unpinned-from-menu' }, { entity: s }),
                                        };
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.entity-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.entity-unpinned-from-menu' }, { entity: s, description: o }),
                                    };
                            }
                        });
                    })(),
                    I = (0, r.useMemo)(
                        () =>
                            C
                                ? (0, i.jsx)(v.N, {
                                      className: f().link,
                                      href: C,
                                      title: g,
                                      children: (0, i.jsxs)(d.HL, {
                                          className: f().title,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', g, '\xa0'],
                                      }),
                                  })
                                : (0, i.jsxs)(d.HL, {
                                      className: f().title,
                                      variant: 'span',
                                      type: 'controls',
                                      size: 'm',
                                      lineClamp: 1,
                                      title: g,
                                      children: ['\xa0', g, '\xa0'],
                                  }),
                        [g, C],
                    ),
                    j = (0, r.useMemo)(
                        () => y || (0, i.jsx)(o._V, { className: f().image, src: b, size: 100, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0 }),
                        [b, y],
                    ),
                    k = (0, r.useMemo)(() => {
                        let e = { entity: I, description: A };
                        return E
                            ? S({ entityVariant: N, values: e, entityTitle: g, entityDescription: A })
                            : B({ entityVariant: N, values: e, entityTitle: g, entityDescription: A });
                    }, [I, A, E, B, N, g, S]);
                return (0, i.jsx)(x.$, {
                    className: (0, n.$)(f().root, { [f().root_withLongText]: N === m.c.AUDIOBOOK }, a),
                    closeToast: t,
                    cover: j,
                    message: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(l.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': k.ariaLabel }) }),
                            (0, i.jsx)(d.HL, {
                                className: f().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': s.S7.BASE_NOTIFICATION_PIN_TEXT,
                                'aria-hidden': !0,
                                children: k.caption,
                            }),
                        ],
                    }),
                    coverRadius: T,
                });
            };
        },
        8484: (e) => {
            e.exports = {
                root: 'SonataFullscreenControlsMobile_root__H6MQ7',
                sonataButtons: 'SonataFullscreenControlsMobile_sonataButtons__hLf19',
                sonataButton: 'SonataFullscreenControlsMobile_sonataButton__UGQ_U',
                playPauseButtonIcon: 'SonataFullscreenControlsMobile_playPauseButtonIcon__e5ygU',
                buttonContainer: 'SonataFullscreenControlsMobile_buttonContainer__5ITqM',
            };
        },
        8950: (e) => {
            e.exports = { root: 'NavbarMobile_root__NhKBQ', user: 'NavbarMobile_user__vTEb2', disabledNavigationItem: 'NavbarMobile_disabledNavigationItem__PA3EE' };
        },
        9536: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(80451);
            let n = (e) => ({
                '--player-average-color-background': ((e) => {
                    if (!e) return;
                    let { h: t, s: a } = (0, i.hexToHsl)(e);
                    return 'hsl('.concat(t, ', ').concat(a, '%, 20%)');
                })(null == e ? void 0 : e.averageColor),
            });
        },
        11272: (e) => {
            e.exports = { root: 'TopAdvertBanner_root__aAZ0o', root_hidden: 'TopAdvertBanner_root_hidden__l3FTx', advert: 'TopAdvertBanner_advert__LjAj_' };
        },
        11805: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => W });
            var i = a(32290),
                n = a(96103),
                r = a(55178),
                s = a(91027),
                o = a(71735),
                l = a(78305),
                d = a(2125),
                c = a(48922),
                u = a(2969),
                _ = a(55332),
                m = a(95329),
                p = a(53022),
                h = a(43564),
                v = a(44128),
                x = a(57594),
                b = a(44782),
                f = a(77035),
                g = a(90326);
            let A = (e) => {
                let { disabled: t, isPlaying: a, onClickPlayPause: n, className: r } = e;
                return (0, i.jsx)(g.D, { className: r, size: 's', iconSize: 'xs', disabled: t, isPlaying: a, onClick: n });
            };
            var N = a(25936),
                C = a(63618),
                y = a(60900),
                T = a(21732),
                E = a(63423),
                S = a(82586),
                B = a(30839),
                I = a(73021),
                j = a(56315),
                k = a.n(j);
            let P = (0, n.PA)((e) => {
                let {
                        disabled: t,
                        isPlaying: a,
                        repeatMode: n,
                        canMoveForward: r,
                        canMoveBackward: s,
                        canRewind: o,
                        canShuffle: l,
                        onClickNext: d,
                        onClickPrev: c,
                        onRewindBackwardsClick: u,
                        onRewindForwardClick: _,
                        onClickPlayPause: m,
                        canChangeRepeatMode: p,
                        shuffle: h,
                        className: v,
                        onRepeatClick: x,
                        onShuffleClick: b,
                    } = e,
                    { formatMessage: f } = (0, y.A)();
                return (0, i.jsxs)('div', {
                    className: (0, C.$)(k().root, v),
                    children: [
                        (0, i.jsxs)('div', {
                            className: k().buttonContainer,
                            children: [
                                (t || l) &&
                                    (0, i.jsx)(I.u, {
                                        className: k().sonataButton,
                                        size: 's',
                                        iconSize: 'xxs',
                                        color: 'secondary',
                                        isDisabled: t,
                                        shuffle: h,
                                        onClick: b,
                                        'data-test-id': T.Kq.sonata.SHUFFLE_BUTTON,
                                    }),
                                !t &&
                                    o &&
                                    (0, i.jsx)(E.$, {
                                        className: (0, C.$)(k().sonataButton, k().rewind),
                                        color: 'secondary',
                                        size: 'm',
                                        radius: 'round',
                                        withRipple: !1,
                                        'aria-label': f({ id: 'player-actions.rewind-backwards' }),
                                        icon: (0, i.jsx)(S.I, { variant: 'rewindBackwards', size: 'xxs' }),
                                        onClick: u,
                                        'data-test-id': T.Kq.sonata.REWIND_BACKWARDS_BUTTON,
                                    }),
                            ],
                        }),
                        (0, i.jsxs)('div', {
                            className: k().sonataButtons,
                            children: [
                                (0, i.jsx)(E.$, {
                                    className: k().sonataButton,
                                    color: 'secondary',
                                    size: 'm',
                                    radius: 'round',
                                    disabled: !s,
                                    withRipple: !1,
                                    'aria-label': f({ id: 'player-actions.previous-track' }),
                                    icon: (0, i.jsx)(S.I, { variant: 'previous', size: 'xxs' }),
                                    onClick: c,
                                    'data-test-id': T.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                }),
                                (0, i.jsx)(g.D, {
                                    className: (0, C.$)(k().sonataButton, k().sonataPlayButton),
                                    iconSize: 'm',
                                    size: 'l',
                                    radius: 'round',
                                    color: 'secondary',
                                    buttonVariant: 'default',
                                    isPlaying: a,
                                    iconClassName: k().playPauseButtonIcon,
                                    onClick: m,
                                }),
                                (0, i.jsx)(E.$, {
                                    className: k().sonataButton,
                                    radius: 'round',
                                    size: 'm',
                                    color: 'secondary',
                                    disabled: !r,
                                    withRipple: !1,
                                    'aria-label': f({ id: 'player-actions.next-track' }),
                                    icon: (0, i.jsx)(S.I, { variant: 'next', size: 'xxs' }),
                                    onClick: d,
                                    'data-test-id': T.Kq.sonata.NEXT_TRACK_BUTTON,
                                }),
                            ],
                        }),
                        (0, i.jsxs)('div', {
                            className: k().buttonContainer,
                            children: [
                                !t &&
                                    o &&
                                    (0, i.jsx)(E.$, {
                                        className: (0, C.$)(k().sonataButton, k().rewind),
                                        color: 'secondary',
                                        size: 'm',
                                        radius: 'round',
                                        withRipple: !1,
                                        'aria-label': f({ id: 'player-actions.rewind-forward' }),
                                        icon: (0, i.jsx)(S.I, { variant: 'rewindForward', size: 'xxs' }),
                                        onClick: _,
                                        'data-test-id': T.Kq.sonata.REWIND_FORWARD_BUTTON,
                                    }),
                                (t || p) &&
                                    (0, i.jsx)(B.s, {
                                        className: k().sonataButton,
                                        size: 's',
                                        color: 'secondary',
                                        isDisabled: t,
                                        iconSize: 'xxs',
                                        repeatMode: n,
                                        onClick: x,
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var w = a(71483),
                L = a(75783),
                O = a(17705),
                D = a(41812),
                R = a(92744),
                M = a(4008),
                F = a(8484),
                U = a.n(F);
            let z = (0, n.PA)((e) => {
                    let {
                            isPlaying: t,
                            canMoveForward: a,
                            canMoveBackward: n,
                            canRewind: s,
                            onClickNext: o,
                            onClickPrev: l,
                            onRewindBackwardsClick: d,
                            onRewindForwardClick: c,
                            onClickPlayPause: u,
                            className: h,
                        } = e,
                        { formatMessage: v } = (0, y.A)(),
                        { user: b, sonataState: f } = (0, x.g)(),
                        A = (0, p.z)(),
                        N = f.entityMeta,
                        B = f.contextType === w.K.Generative,
                        I = b.isAuthorized && !B,
                        j = (0, O.K)(f.entityMeta),
                        k = (0, L.m)(f.entityMeta);
                    (0, r.useEffect)(() => {
                        if (!f.isGenerativeContext)
                            return (
                                null == A || A.addShortcutsListener(m.M.MAIN, _.l.LIKE, j),
                                null == A || A.addShortcutsListener(m.M.MAIN, _.l.DISLIKE, k),
                                () => {
                                    null == A || A.removeShortcutsListener(m.M.MAIN, _.l.LIKE), null == A || A.removeShortcutsListener(m.M.MAIN, _.l.DISLIKE);
                                }
                            );
                    }, [k, j, A, f.isGenerativeContext]);
                    let P = (0, r.useMemo)(
                            () =>
                                s
                                    ? (0, i.jsx)(E.$, {
                                          className: U().sonataButton,
                                          variant: 'text',
                                          color: 'secondary',
                                          size: 'm',
                                          radius: 'round',
                                          withRipple: !1,
                                          'aria-label': v({ id: 'player-actions.rewind-backwards' }),
                                          icon: (0, i.jsx)(S.I, { variant: 'rewindBackwards', size: 'xs' }),
                                          onClick: d,
                                          'data-test-id': T.Kq.sonata.MOBILE_REWIND_BACKWARDS_BUTTON,
                                      })
                                    : (0, i.jsx)(E.$, {
                                          className: U().sonataButton,
                                          variant: 'text',
                                          color: 'secondary',
                                          size: 'm',
                                          radius: 'round',
                                          disabled: !n,
                                          withRipple: !1,
                                          'aria-label': v({ id: 'player-actions.previous-track' }),
                                          icon: (0, i.jsx)(S.I, { variant: 'previous', size: 'xs' }),
                                          onClick: l,
                                          'data-test-id': T.Kq.sonata.MOBILE_PREVIOUS_TRACK_BUTTON,
                                      }),
                            [s, n, v, l, d],
                        ),
                        F = (0, r.useMemo)(
                            () =>
                                s
                                    ? (0, i.jsx)(E.$, {
                                          className: U().sonataButton,
                                          variant: 'text',
                                          radius: 'round',
                                          size: 'm',
                                          color: 'secondary',
                                          disabled: !a,
                                          withRipple: !1,
                                          'aria-label': v({ id: 'player-actions.rewind-forward' }),
                                          icon: (0, i.jsx)(S.I, { variant: 'rewindForward', size: 'xs' }),
                                          onClick: c,
                                          'data-test-id': T.Kq.sonata.MOBILE_REWIND_FORWARD_BUTTON,
                                      })
                                    : (0, i.jsx)(E.$, {
                                          className: U().sonataButton,
                                          variant: 'text',
                                          radius: 'round',
                                          size: 'm',
                                          color: 'secondary',
                                          disabled: !a,
                                          withRipple: !1,
                                          'aria-label': v({ id: 'player-actions.next-track' }),
                                          icon: (0, i.jsx)(S.I, { variant: 'next', size: 'xs' }),
                                          onClick: o,
                                          'data-test-id': T.Kq.sonata.MOBILE_NEXT_TRACK_BUTTON,
                                      }),
                            [s, a, v, o, c],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, C.$)(U().root, h),
                        children: [
                            (0, i.jsx)('div', {
                                className: U().buttonContainer,
                                children: N && I && (0, i.jsx)(M.WithOffline, { fallback: (0, i.jsx)(D._, { isDisliked: N.isDisliked, iconSize: 'xs', onClick: k }) }),
                            }),
                            (0, i.jsxs)('div', {
                                className: U().sonataButtons,
                                children: [
                                    P,
                                    (0, i.jsx)(g.D, {
                                        className: U().sonataButton,
                                        iconSize: 'xxl',
                                        variant: 'filled',
                                        color: 'secondary',
                                        isPlaying: t,
                                        iconClassName: U().playPauseButtonIcon,
                                        onClick: u,
                                    }),
                                    F,
                                ],
                            }),
                            (0, i.jsx)('div', {
                                className: U().buttonContainer,
                                children:
                                    N &&
                                    I &&
                                    (0, i.jsx)(M.WithOffline, {
                                        fallback: (0, i.jsx)(R.c, { isLiked: N.isLiked, iconSize: 'xs', onClick: j, disabled: !b.isAuthorized }),
                                    }),
                            }),
                        ],
                    });
                }),
                W = (0, n.PA)((e) => {
                    var t, a;
                    let { isMobile: n, entityMeta: g, isFullscreen: C, className: y, withShuffle: T, withRepeat: E } = e,
                        {
                            sonataState: S,
                            vibe: B,
                            advert: I,
                            modals: { popoverOverPlayer: j },
                        } = (0, x.g)(),
                        k = (0, p.z)(),
                        w = (0, v.e)(),
                        { rewindBackwards: L, rewindForward: O } = (() => {
                            let {
                                    sonataState: { entityMeta: e },
                                } = (0, x.g)(),
                                t = (0, v.e)();
                            return {
                                rewindBackwards: (0, r.useCallback)(() => {
                                    if (!t || !e || !e.durationMs) return;
                                    let a = t.state.playerState.progress.value.position - 15;
                                    t.setProgress(a < 0 ? 0 : a);
                                }, [e, t]),
                                rewindForward: (0, r.useCallback)(() => {
                                    if (!t || !e || !e.durationMs) return;
                                    let a = e.durationMs / 1e3,
                                        i = t.state.playerState.progress.value.position + 30;
                                    t.setProgress(i < a ? i : a);
                                }, [e, t]),
                            };
                        })(),
                        D = (0, l.r)(),
                        R = (0, u.b)(),
                        M = (null == g ? void 0 : g.isNonMusic) && !I.isAdvertShown,
                        F = (0, o.P)(),
                        { togglePlay: U } = (0, h.B)({
                            seeds: null != (a = null == (t = B.meta) ? void 0 : t.seeds) ? a : [],
                            pageIdForFrom: c._Q.HOME,
                            blockIdForFrom: d.h.RUP_MAIN_RADIO,
                            onPlayInterrupted: j.open,
                        }),
                        W = (0, r.useMemo)(() => (I.isAdvertShown ? I.isAdvertPlaying : S.isPlaying), [I.isAdvertShown, I.isAdvertPlaying, S.isPlaying]),
                        V = (0, s.c)(() => {
                            if (I.isAdvertShown) {
                                var e;
                                null == D || null == (e = D.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            g ? null == w || w.togglePause() : U();
                        }),
                        H = (0, s.c)(() => {
                            (C && F()) || (V(), R(!W));
                        }),
                        K = (0, s.c)(() => {
                            null == w || w.moveForward();
                        }),
                        G = (0, s.c)(() => {
                            null == w || w.moveBackward();
                        }),
                        Y = (0, f.e)(),
                        $ = (0, b.A)(),
                        q = (0, s.c)(() => {
                            $(S);
                        }),
                        Z = (0, s.c)(() => {
                            Y(S);
                        });
                    (0, r.useEffect)(() => {
                        if (!C && (null == k || k.addShortcutsListener(m.M.MAIN, _.l.TOGGLE_PLAY, V), !I.isAdvertShown))
                            return (
                                null == k || k.addShortcutsListener(m.M.MAIN, _.l.TOGGLE_REPEAT, q),
                                null == k || k.addShortcutsListener(m.M.MAIN, _.l.TOGGLE_SHUFFLE, Z),
                                () => {
                                    null == k || k.removeShortcutsListener(m.M.MAIN, _.l.TOGGLE_PLAY),
                                        I.isAdvertShown ||
                                            (null == k || k.removeShortcutsListener(m.M.MAIN, _.l.TOGGLE_SHUFFLE),
                                            null == k || k.removeShortcutsListener(m.M.MAIN, _.l.TOGGLE_REPEAT));
                                }
                            );
                    }, [C, V, q, Z, k, I.isAdvertShown]);
                    let Q = (0, r.useMemo)(() => (C ? (n ? z : P) : n ? A : N.Z), [n, C]);
                    return (0, i.jsx)(Q, {
                        className: y,
                        disabled: null === S.entityMeta || (I.isAdvertShown && !n),
                        isPlaying: W || !1,
                        canMoveBackward: S.canMoveBackward && !I.isAdvertShown,
                        canMoveForward: S.canMoveForward && !I.isAdvertShown,
                        withShuffle: T,
                        withRepeat: E,
                        canShuffle: S.canShuffle,
                        shuffle: S.shuffle,
                        onClickPlayPause: H,
                        onClickNext: K,
                        onClickPrev: G,
                        canRewind: M,
                        onRewindBackwardsClick: L,
                        onRewindForwardClick: O,
                        canChangeRepeatMode: S.canChangeRepeatMode,
                        repeatMode: S.repeatMode,
                        onRepeatClick: q,
                        onShuffleClick: Z,
                    });
                });
        },
        12528: (e) => {
            e.exports = {
                heading: 'BuySubscriptionBaseContent_heading__lQExw',
                buttons: 'BuySubscriptionBaseContent_buttons__1MZhL',
                button: 'BuySubscriptionBaseContent_button___DQII',
                buttonMainText: 'BuySubscriptionBaseContent_buttonMainText__kKEWL',
                buttonAdditionText: 'BuySubscriptionBaseContent_buttonAdditionText__lV_51',
            };
        },
        12623: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => u });
            var i = a(32290),
                n = a(63618),
                r = a(55178),
                s = a(21732),
                o = a(71926),
                l = a(38125),
                d = a.n(l);
            let c = (e) => {
                    let { value: t, variant: a, className: r, forwardRef: l, ...c } = e,
                        u = 'start' === a ? s.Kq.changeTimecode.TIMECODE_TIME_START : s.Kq.changeTimecode.TIMECODE_TIME_END;
                    return (0, i.jsx)(o.HL, {
                        ref: l,
                        tabIndex: 0,
                        className: (0, n.$)(d().root, d()['root_'.concat(a)], r),
                        variant: 'span',
                        size: 's',
                        type: 'entity',
                        weight: 'medium',
                        ...c,
                        'data-test-id': u,
                        children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: t }),
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
        },
        13166: (e) => {
            e.exports = {
                contextMenu: 'PinItem_contextMenu__VwiFp',
                contextMenu_visible: 'PinItem_contextMenu_visible__Zgwkh',
                root: 'PinItem_root__WSoCn',
                image: 'PinItem_image__Ow56U',
                cover: 'PinItem_cover__9TcjE',
                tooltip: 'PinItem_tooltip__BGwBw',
            };
        },
        13616: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(60754);
            let n = i.gK.model('CustomPlayerThumb', { href: i.gK.string, width: i.gK.number, height: i.gK.number });
        },
        13757: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => n, L: () => r });
            let i = (e, t) => e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
            var n = (function (e) {
                return (e.TODAY = 'today'), (e.YESTERDAY = 'yesterday'), (e.DATE = 'date'), (e.DATE_WITH_YEAR = 'date-with-year'), e;
            })({});
            let r = (e) => {
                let t = new Date();
                if (i(t, e)) return 'today';
                let a = new Date();
                return (a.setDate(a.getDate() - 1), i(a, e)) ? 'yesterday' : t.getFullYear() !== e.getFullYear() ? 'date-with-year' : 'date';
            };
        },
        13798: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => v });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(55178),
                o = a(60900),
                l = a(26252),
                d = a(21732),
                c = a(6752),
                u = a(82586),
                _ = a(57594),
                m = a(60244),
                p = a(90006),
                h = a.n(p);
            let v = (0, r.PA)((e) => {
                let { className: t, getDescriptionTexts: a, trackId: r, containerClassName: p, variant: v, size: x = 'xxxs', ...b } = e,
                    { formatMessage: f } = (0, o.A)(),
                    {
                        settings: { isMobile: g },
                    } = (0, _.g)(),
                    [A, N] = (0, s.useState)(null),
                    C = (0, c.L)(() => {
                        switch (v) {
                            case l.JU.E:
                                return 'explicit';
                            case l.JU.AGE_12:
                            case l.JU.AGE_16:
                            case l.JU.AGE_18:
                                return 'adult';
                            case l.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    y = (0, s.useMemo)(() => f({ id: 'extra-explicit.explicit-mark' }), [f]);
                (0, s.useEffect)(() => {
                    a && a().then(N);
                }, [a, r]);
                let T = (null == A ? void 0 : A.join('\n')) || '',
                    E = !!(null == A ? void 0 : A.length) && !g,
                    S = T.length > 0 ? T : y;
                return (0, i.jsx)(m.k, {
                    description: T,
                    placement: 'bottom-start',
                    enabled: E,
                    children: (0, i.jsx)('span', {
                        className: p,
                        children: (0, i.jsx)(u.I, {
                            className: (0, n.$)(h().explicitMark, t),
                            'aria-label': S,
                            variant: C,
                            size: x,
                            ...b,
                            'data-test-id': d.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        14135: (e) => {
            e.exports = {
                root: 'NavbarDesktopUnauthorizedBar_root__uQZ9L',
                title: 'NavbarDesktopUnauthorizedBar_title__vf0W7',
                subtitle: 'NavbarDesktopUnauthorizedBar_subtitle__anNNQ',
                userProfile: 'NavbarDesktopUnauthorizedBar_userProfile__hAABb',
                userId: 'NavbarDesktopUnauthorizedBar_userId__m0jC6',
                buttons: 'NavbarDesktopUnauthorizedBar_buttons__94Y3N',
            };
        },
        14257: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => i });
            var i = (function (e) {
                return (e.Dark = 'dark'), (e.Light = 'light'), e;
            })({});
        },
        14960: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => n });
            var i = a(57594);
            let n = (e, t, a) => {
                let {
                    settings: { isMobile: n },
                } = (0, i.g)();
                return !!(n && e && (((null == t ? void 0 : t.endPositionSec) && t.endPositionSec > 0) || (null == t ? void 0 : t.hasEverFinished) || (a && a > 0)));
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        18171: (e, t, a) => {
            'use strict';
            a.d(t, { DefaultLayout: () => rl });
            var i,
                n,
                r,
                s,
                o,
                l,
                d,
                c,
                u,
                _,
                m = a(32290),
                p = a(63618),
                h = a(96103),
                v = a(21916),
                x = a(53730),
                b = a(55178),
                f = a.t(b, 2),
                g = a(60900),
                A = a(39407),
                N = a(21732),
                C = a(91027),
                y = a(58359),
                T = a(63423),
                E = a(82586),
                S = a(84638),
                B = a(70280),
                I = a(71926),
                j = a(84782),
                k = a(37240),
                P = a(83920),
                w = a(43564),
                L = a(57594),
                O = a(58625),
                D = a(5619),
                R = a.n(D);
            let M = (0, h.PA)(() => {
                var e, t;
                let { formatMessage: a } = (0, g.A)(),
                    {
                        vibe: i,
                        settings: { isMobile: n },
                        vibeSettings: r,
                    } = (0, L.g)(),
                    { pageId: s } = (0, k.$)(),
                    { blockIdForFrom: o } = (0, j.N)(),
                    l = (0, b.useRef)(null),
                    d = (0, b.useRef)(null),
                    { resetContext: c } = (0, w.B)({ seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [], pageIdForFrom: s, blockIdForFrom: o }),
                    { contentRef: u } = (0, P.g)();
                (0, b.useEffect)(
                    () => () => {
                        r.reset();
                    },
                    [r],
                );
                let _ = !!(i.isApplying || i.isMyVibe),
                    p = (0, C.c)((e) => {
                        var t;
                        i.isApplying || (l.current && (0, y.P)(e, R().ripple, l.current), c(), null == (t = d.current) || t.focus());
                    });
                return (0, m.jsx)(S.a, {
                    size: 'fitContent',
                    placement: n ? 'default' : 'right',
                    open: r.modal.isOpened,
                    onOpenChange: r.modal.onOpenChange,
                    onClose: r.modal.close,
                    className: R().root,
                    contentClassName: R().modalContent,
                    overlayClassName: R().overlay,
                    portalNode: n ? null : u,
                    showHeader: !1,
                    restoreFocus: !0,
                    closeOnOutsidePress: !0,
                    containerProps: { 'data-test-id': N.Kq.vibeSettings.VIBE_SETTINGS_BLOCK },
                    children: (0, m.jsxs)('div', {
                        className: R().content,
                        children: [
                            (0, m.jsxs)('div', {
                                className: R().header,
                                children: [
                                    (0, m.jsx)(I.DZ, {
                                        variant: 'h3',
                                        size: 's',
                                        weight: 'bold',
                                        'data-test-id': N.Kq.vibeSettings.VIBE_SETTINGS_TITLE,
                                        children: (0, m.jsx)(A.A, { id: 'interface-actions.my-vibe-settings' }),
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: R().actions,
                                        children: [
                                            (0, m.jsx)(B.m_, {
                                                offsetOptions: 4,
                                                placement: 'left',
                                                text: a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                children: (0, m.jsx)(T.$, {
                                                    variant: 'outline',
                                                    radius: 'round',
                                                    size: 'xxxs',
                                                    icon: (0, m.jsx)(E.I, { variant: 'reset', size: 'xxxs' }),
                                                    onClick: p,
                                                    disabled: !!i.isMyVibe,
                                                    'aria-hidden': !!i.isMyVibe,
                                                    'aria-disabled': _,
                                                    'aria-label': a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                    ref: l,
                                                    'data-test-id': N.Kq.vibeSettings.VIBE_SETTINGS_RESET_BUTTON,
                                                }),
                                            }),
                                            (0, m.jsx)(T.$, {
                                                radius: 'round',
                                                color: 'secondary',
                                                size: 'xxs',
                                                icon: (0, m.jsx)(E.I, { variant: 'close', size: 'xxs' }),
                                                onClick: r.modal.close,
                                                'aria-label': a({ id: 'interface-actions.close-my-vibe-settings' }),
                                                ref: d,
                                                'data-test-id': N.Kq.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, m.jsx)(O.C, {}),
                        ],
                    }),
                });
            });
            var F = a(20472),
                U = a(14257),
                z = a(43352),
                W = a(75314),
                V = a(50);
            let H = function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    { theme: a } = (0, V.W)(),
                    i = (0, b.useRef)(a);
                (0, b.useLayoutEffect)(() => {
                    i.current = a;
                }, [a]),
                    (0, b.useLayoutEffect)(() => {
                        if (!t || 'undefined' == typeof document) return;
                        let a = (0, W.J)(e),
                            n = () => {
                                document.body.classList.contains(a) || (0, z.Z)(e);
                            };
                        n();
                        let r = new MutationObserver(() => {
                            n();
                        });
                        return (
                            r.observe(document.body, { attributes: !0, attributeFilter: ['class'] }),
                            () => {
                                r.disconnect(), (0, z.Z)(i.current);
                            }
                        );
                    }, [e, t]);
            };
            var K = a(79406),
                G = a(32675),
                Y = a.n(G),
                $ = a(6752),
                q = a(7697);
            let Z = () => {
                var e;
                let { isFreemium: t } = (0, q.X)(),
                    {
                        user: a,
                        settings: i,
                        advertBanners: {
                            banners: { sideAdvertBanner: n },
                        },
                    } = (0, L.g)();
                return !!n.isVisible && (null == (e = i.browserInfo) || !e.isTouch) && (!a.isAuthorized || t);
            };
            var Q = a(28015),
                X = a(80792);
            let J = { p1: 'bwvvu', p2: 'foom', puid1: '', puid2: '' };
            var ee = a(92854),
                et = a.n(ee);
            let ea = (0, h.PA)((e) => {
                    let { className: t, forwardRef: a, isWavePage: i } = e,
                        {
                            advertBanners: {
                                banners: { sideAdvertBanner: n },
                            },
                        } = (0, L.g)(),
                        { formatMessage: r } = (0, g.A)();
                    return (0, m.jsx)('section', {
                        className: (0, p.$)(et().root, t, { [et().root_vibePage]: i, [et().root_hidden]: !n.isVisible }),
                        'aria-label': r({ id: 'advert.banner' }),
                        role: 'banner',
                        ref: a,
                        children: (0, m.jsx)('div', {
                            className: et().contentWrapper,
                            children: (0, m.jsx)(X.N, {
                                className: et().content,
                                ownerId: Q.P,
                                containerId: 'adfox_173831489302952769',
                                params: J,
                                onLoad: n.setType,
                                onError: n.toggleHasErrorTrue,
                                onNoAds: n.toggleNoAdsTrue,
                            }),
                        }),
                    });
                }),
                ei = (0, b.forwardRef)((e, t) => (0, m.jsx)(ea, { forwardRef: t, ...e }));
            var en = a(26749),
                er = a(62376),
                es = a(59564),
                eo = a(77322);
            let el = (0, h.PA)((e) => {
                let { className: t, productionBlockId: a, testBlockId: i, onRender: n, onNoAds: r, onError: s, isAsync: o } = e,
                    { experiments: l } = (0, L.g)(),
                    { render: d } = (0, es.s)(),
                    c = (0, eo.D)(),
                    u = (0, b.useMemo)(() => {
                        let e = l.checkExperiment(K.z.WebNextAdvertTest, 'on'),
                            t = 'production' === c;
                        return e || !t ? i : a;
                    }, [c, l, a, i]),
                    _ = ''.concat(Q.l, '_').concat(u);
                return (
                    (0, b.useEffect)(() => {
                        d(
                            {
                                blockId: u,
                                renderTo: _,
                                async: o,
                                onRender: () => {
                                    null == n || n(en.h.DIRECT);
                                },
                                onError: s,
                            },
                            () => {
                                null == r || r();
                            },
                        );
                    }, [u, _, d, n, s, r, o]),
                    (0, m.jsx)('div', { id: _, className: t, tabIndex: -1, 'aria-hidden': !0 })
                );
            });
            var ed = a(8055);
            let ec = () => (30 * window.innerHeight) / 100,
                eu = (e, t) => e > 0 && t > 0;
            var e_ = a(49388),
                em = a.n(e_);
            let ep = (0, h.PA)((e) => {
                    let { className: t, children: a } = e,
                        i = (0, v.usePathname)(),
                        { formatMessage: n } = (0, g.A)(),
                        { setContentRef: r, setContentRootRef: s, setSideBannerRef: o, paywallRef: l, contentScrollRef: d } = (0, P.g)(),
                        c = (0, er.U)(),
                        {
                            experiments: u,
                            user: _,
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: h, topAdvertBanner: x },
                            },
                        } = (0, L.g)(),
                        f = Z(),
                        A = i === F.Z.main.href || i === F.Z.video.href,
                        N = h.isVisible && h.type === en.h.BRANDING,
                        y = x.isTouchTopAdvertEnabled && !l && !_.hasPlus && !N,
                        T = 'R-I-16641233-2',
                        E = ((e) => {
                            let [t, a] = (0, b.useState)(ec),
                                i = (0, b.useRef)(null),
                                n = (0, b.useRef)(!1),
                                r = (0, b.useRef)(ec()),
                                s = (0, b.useRef)(ec()),
                                o = (0, C.c)((e) => {
                                    let t = e.scrollTop,
                                        a = e.scrollHeight,
                                        i = e.clientHeight,
                                        n = s.current,
                                        r = t <= 5;
                                    if (!eu(a, i)) return n;
                                    let o = a - i;
                                    return o <= 0 ? n : o >= n ? (r ? n : 0) : r ? n : Math.max(0, n - o);
                                }),
                                l = (0, C.c)((e) => {
                                    a(Math.round(e)), (r.current = e);
                                }),
                                d = (0, C.c)(() => {
                                    s.current = ec();
                                }),
                                c = (0, C.c)((e) => {
                                    let t = i.current;
                                    null !== t && cancelAnimationFrame(t),
                                        (i.current = requestAnimationFrame(() => {
                                            i.current = null;
                                            let t = o(e),
                                                a = Math.abs(t - r.current),
                                                n = s.current;
                                            (0 === t || t >= n || a >= 2) && l(t);
                                        }));
                                });
                            (0, b.useLayoutEffect)(() => {
                                if (!e) {
                                    let e = ec();
                                    (s.current = e), l(e), (n.current = !1);
                                    return;
                                }
                                if (n.current) return;
                                n.current = !0;
                                let t = ec();
                                return ((s.current = t), e.scrollTop <= 50) ? void l(t) : eu(e.scrollHeight, e.clientHeight) ? void l(o(e)) : void l(t);
                            }, [e, l, o]);
                            let u = (0, b.useMemo)(
                                () =>
                                    e
                                        ? (0, ed.A)(() => {
                                              d(), c(e);
                                          }, 100)
                                        : null,
                                [e, c, d],
                            );
                            return (
                                (0, b.useEffect)(() => {
                                    if (!e || !u) return;
                                    c(e);
                                    let t = () => {
                                        c(e);
                                    };
                                    e.addEventListener('scroll', t, { passive: !0 });
                                    let a = new ResizeObserver(u);
                                    a.observe(e);
                                    let n = () => {
                                        d(), u();
                                    };
                                    return (
                                        window.addEventListener('resize', n, { passive: !0 }),
                                        () => {
                                            u.cancel();
                                            let o = i.current;
                                            null !== o && (cancelAnimationFrame(o), (i.current = null));
                                            let l = ec();
                                            (r.current = l), (s.current = l), e.removeEventListener('scroll', t), a.disconnect(), window.removeEventListener('resize', n);
                                        }
                                    );
                                }, [e, c, u, d]),
                                t
                            );
                        })(d),
                        S = (0, C.c)(() => {
                            c.error('Cannot render advert banner', { adBlockId: T });
                        }),
                        B = (0, $.L)(() => {
                            if (y)
                                return (0, m.jsx)('div', {
                                    className: em().adContainer,
                                    'aria-label': n({ id: 'advert.banner' }),
                                    role: 'banner',
                                    children: (0, m.jsx)(el, { isAsync: !1, onError: S, productionBlockId: T, testBlockId: T, className: em().adBanner }),
                                });
                        });
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(em().root, t, { [em().root_newVibe]: A }),
                        ref: s,
                        children: [
                            B,
                            (0, m.jsx)('main', {
                                className: (0, p.$)(em().main, { [em().main_newVibe]: A, [em().withBrandedBanner]: N }),
                                style: N ? { marginBlockStart: ''.concat(E, 'px') } : void 0,
                                ref: r,
                                children: (0, m.jsx)(b.Suspense, { children: a }),
                            }),
                            f && (0, m.jsx)(ei, { className: (0, p.$)(em().sideBanner, { [em().sideBanner_newVibe]: A }), isWavePage: A, ref: o }),
                        ],
                    });
                }),
                eh = (e) => window.innerWidth < (e ? 1920 : 1024),
                ev = () => {
                    let { sideBannerRef: e } = (0, P.g)(),
                        {
                            advertBanners: {
                                banners: { sideAdvertBanner: t },
                            },
                        } = (0, L.g)(),
                        a = Z(),
                        i = e ? !!(t.isVisible && e.clientWidth) : a,
                        [n, r] = (0, b.useState)(eh(i)),
                        s = (0, b.useMemo)(
                            () =>
                                (0, ed.A)(
                                    () => {
                                        r(eh(i));
                                    },
                                    100,
                                    { trailing: !1 },
                                ),
                            [r, i],
                        );
                    return (
                        (0, b.useEffect)(
                            () => (
                                window.addEventListener('resize', s),
                                s(),
                                () => {
                                    window.removeEventListener('resize', s);
                                }
                            ),
                            [s],
                        ),
                        n
                    );
                };
            var ex = a(70204),
                eb = a(34186),
                ef = a(19379),
                eg = a(16172),
                eA = a(52068),
                eN = a(83439),
                eC = a.n(eN),
                ey = a(54862),
                eT = a(7276),
                eE = a(80451),
                eS = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length; )
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (n && (n += ' '), (n += i));
                                            else for (a in t) t[a] && (n && (n += ' '), (n += a));
                                        return n;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        a.r(t), a.d(t, { clsx: () => i, default: () => n });
                        let n = i;
                    },
                    3980: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = {
                            root: 'NGdj0oZ2Bt8qdZhP2Tzt',
                            root_collapsed: 'rece5errcONnjJeX0YW8',
                            root_direction_vertical: 'QilmoKKJwk6f0BdkYgrA',
                            root_direction_horizontal: 'AO4rWY4RLVh48fwQw5Qs',
                        };
                    },
                    674: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = { root: 'yuyI2hMAT7qyL1N14MAQ', root_direction_vertical: 'xfFtKQpgAYvC2jI1tBtS', root_direction_horizontal: 'OGlYJO0lZgpSOhfU2Iru' };
                    },
                    7391: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = {
                            root: 'Bp1d3U6W8Nrbqi3MRQS_',
                            root_direction_vertical: 'hYfgO_Y8c4rrQsZJWTDZ',
                            ripple: 'UiZ4QyGEVzfvZ3QfQqqA',
                            root_direction_horizontal: 'X_Lr5kqrhzMO6kX8v92s',
                            root_collapsed: 'Q3gGGaIXiJ_oQTiVZBfl',
                            root_variant_main: 'H4trq_Zx2d9qOnQgxmxr',
                            root_animate: 'Kr9rXeXGlqHee2euqH0u',
                            animation_width: 'k8zKIZRDy6LmoaIcEpo8',
                            item: 'A4bDkbQHkwWNGqxO9qhW',
                            item_selected: 'mAd9pgMkWVX5ktCgYINQ',
                            item_direction_vertical: 'Xx9Tg5ugzg1pkf8Zh421',
                            item_direction_horizontal: 'fQVXazc9HwT3NQ8dywCh',
                            iconContainer: 'zpkgiiHgDpbBThy6gavq',
                            textContainer: 'ZrkG6gNYcr4h3hfkhyT1',
                            textContainer_selected: 'xENlRAFvRskKnt8LUObC',
                            textContainer_direction_horizontal: 'xE5fIMRnjd8oSm5BOhpI',
                        };
                    },
                    3162: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = {
                            root: 'HcfYy4VfnRHqgXzIdL7w',
                            root_direction_vertical: 'kRmUIkcHKD5AgtpPo8wT',
                            ripple: 'aHtf5XL4YejhYEJNUkYi',
                            root_direction_horizontal: 'ZxlCWb78gIBQ8izioAXa',
                            root_collapsed: 'e1KYSvMXXv0FD4s_yCuw',
                            item: 'ZfF8mQ3Iftpwu0aZgDtG',
                            item_selected: 'Eg3pt5lTL33sOlxorSbN',
                            item_direction_vertical: 'yWJHrpNsBvchs9Jjyokk',
                            item_direction_horizontal: 'bJ7YpssStK5UnpbuTtf2',
                            item_collapsed_vertical: 'uw57VJ37U4rAAHDs0zJR',
                            iconContainer: '_YzsXZGNK8KeaUFC4Ja1',
                            textContainer: 'nxMXCBiVfgH4oxds3f2y',
                            textContainer_selected: 'jhnLSZpmG69Hlxi8n6IO',
                            textContainer_direction_horizontal: 'FH36Kh9OP4VHc2Yv3bIc',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var n = null;
                            if ((void 0 !== i && (n = '' + i), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var r in ((i = {}), t)) 'key' !== r && (i[r] = t[r]);
                            else i = t;
                            return { $$typeof: a, type: e, key: n, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i);
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    7858: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.findColorBucketByLightness = t.findColorBucketByHue = t.findColorBucketByName = t.LIGHTNESS_COLOR_BUCKETS = t.COLOR_BUCKETS = void 0),
                            (t.COLOR_BUCKETS = [
                                { name: 'coral', start: 2, end: 19, primary: '#F53700', secondary: '#FFD7CC' },
                                { name: 'tangerine', start: 20, end: 64, primary: '#F56E00', secondary: '#FFE3CC' },
                                { name: 'clover', start: 65, end: 149, primary: '#34C03E', secondary: '#D7F4D9' },
                                { name: 'emerald', start: 150, end: 164, primary: '#00C789', secondary: '#CCFFEF' },
                                { name: 'turquoise', start: 165, end: 179, primary: '#00C7A6', secondary: '#CCFFF7' },
                                { name: 'aquamarine', start: 180, end: 189, primary: '#00B2CC', secondary: '#CCF9FF' },
                                { name: 'glacier', start: 190, end: 204, primary: '#5C8E9B', secondary: '#DFE9EC' },
                                { name: 'slate', start: 205, end: 219, primary: '#4F6C9B', secondary: '#DDE4EE' },
                                { name: 'sapphire', start: 220, end: 234, primary: '#0C41E8', secondary: '#CFDAFC' },
                                { name: 'indigo', start: 235, end: 249, primary: '#160CE8', secondary: '#D1CFFC' },
                                { name: 'amethyst', start: 250, end: 259, primary: '#5035C0', secondary: '#DDD7F4' },
                                { name: 'plum', start: 260, end: 269, primary: '#7C35C0', secondary: '#E6D7F4' },
                                { name: 'orchid', start: 270, end: 299, primary: '#BB1ADB', secondary: '#F3D1FA' },
                                { name: 'raspberry', start: 300, end: 329, primary: '#DB1A7D', secondary: '#FAD1E6' },
                                { name: 'fuchsia', start: 330, end: 339, primary: '#F5007C', secondary: '#FFCCE6' },
                                { name: 'carmine', start: 340, end: 1, primary: '#F5002E', secondary: '#FFCCD6' },
                            ]),
                            (t.LIGHTNESS_COLOR_BUCKETS = [
                                { name: 'amethyst', start: 0, end: 22 },
                                { name: 'indigo', start: 22, end: 32 },
                                { name: 'clover', start: 32, end: 42 },
                                { name: 'raspberry', start: 42, end: 51 },
                                { name: 'aquamarine', start: 51, end: 100 },
                            ]),
                            (t.findColorBucketByName = (e) => t.COLOR_BUCKETS.find((t) => t.name === e)),
                            (t.findColorBucketByHue = (e) =>
                                t.COLOR_BUCKETS.find((t) => ((e, t) => (e.start > e.end ? t >= e.start || t <= e.end : t >= e.start && t <= e.end))(t, e))),
                            (t.findColorBucketByLightness = (e) => {
                                let a = t.LIGHTNESS_COLOR_BUCKETS.find((a, i) =>
                                    ((e, a, i) => (i === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? a >= e.start && a <= e.end : a >= e.start && a < e.end))(a, e, i),
                                );
                                return (0, t.findColorBucketByName)(null == a ? void 0 : a.name);
                            });
                    },
                    8796: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, a) {
                                let i = null != a ? a : e.currentTarget,
                                    n = document.createElement('span'),
                                    r = Math.max(i.clientWidth, i.clientHeight),
                                    s = r / 2,
                                    o = i.getBoundingClientRect(),
                                    l = 0 === e.clientX ? Math.round(o.width / 2) : e.clientX - o.left,
                                    d = 0 === e.clientY ? Math.round(o.height / 2) : e.clientY - o.top;
                                (n.style.width = ''.concat(r, 'px')),
                                    (n.style.height = ''.concat(r, 'px')),
                                    (n.style.left = 0 === e.clientX ? '0px' : ''.concat(l - s, 'px')),
                                    (n.style.top = ''.concat(d - s, 'px')),
                                    n.classList.add(t);
                                let c = i.getElementsByClassName(t)[0];
                                c && c.remove(), i.insertBefore(n, i.firstChild);
                            });
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    768: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getVibePaletteColors =
                                t.getVibeColorBucketSelection =
                                t.getVibePaletteByBucketName =
                                t.FALLBACK_PALETTE =
                                t.FALLBACK_NAME =
                                t.SECONDARY_GRADIENT_STOPS =
                                t.PRIMARY_GRADIENT_STOPS =
                                t.PRIMARY_DARK_IDLE_STOPS =
                                    void 0);
                        let i = a(2660),
                            n = a(7858);
                        (t.PRIMARY_DARK_IDLE_STOPS = Array.from({ length: 16 }, () => '#000000')),
                            (t.PRIMARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#F5002E',
                                    '#CF0027',
                                    '#AF0021',
                                    '#94001C',
                                    '#7C0017',
                                    '#690014',
                                    '#590011',
                                    '#4B000E',
                                    '#40000C',
                                    '#36000A',
                                    '#2D0008',
                                    '#250007',
                                    '#1D0005',
                                    '#140004',
                                    '#0B0002',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#F5007C',
                                    '#CF0069',
                                    '#AF0059',
                                    '#94004B',
                                    '#7C003F',
                                    '#690035',
                                    '#59002D',
                                    '#4B0026',
                                    '#400020',
                                    '#36001B',
                                    '#2D0017',
                                    '#250013',
                                    '#1D000F',
                                    '#14000A',
                                    '#0B0006',
                                    '#000000',
                                ],
                                coral: [
                                    '#F53700',
                                    '#CF2F00',
                                    '#AF2700',
                                    '#942100',
                                    '#7C1C00',
                                    '#691800',
                                    '#591400',
                                    '#4B1100',
                                    '#400E00',
                                    '#360C00',
                                    '#2D0A00',
                                    '#250800',
                                    '#1D0700',
                                    '#140400',
                                    '#0B0200',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#F56E00',
                                    '#CF5D00',
                                    '#AF4F00',
                                    '#944200',
                                    '#7C3800',
                                    '#692F00',
                                    '#592800',
                                    '#4B2200',
                                    '#401D00',
                                    '#361800',
                                    '#2D1400',
                                    '#251100',
                                    '#1D0D00',
                                    '#140900',
                                    '#0B0500',
                                    '#000000',
                                ],
                                clover: [
                                    '#34C03E',
                                    '#2CA334',
                                    '#25892C',
                                    '#1F7425',
                                    '#1A621F',
                                    '#16521B',
                                    '#134516',
                                    '#103B13',
                                    '#0D3210',
                                    '#0B2A0E',
                                    '#0A230B',
                                    '#081D09',
                                    '#061707',
                                    '#041005',
                                    '#020903',
                                    '#000000',
                                ],
                                emerald: [
                                    '#00C789',
                                    '#00A874',
                                    '#008E62',
                                    '#007853',
                                    '#006545',
                                    '#00553B',
                                    '#004832',
                                    '#003D2A',
                                    '#003424',
                                    '#002C1E',
                                    '#002519',
                                    '#001E15',
                                    '#001810',
                                    '#00100B',
                                    '#000906',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#00C7A6',
                                    '#00A88C',
                                    '#008E77',
                                    '#007864',
                                    '#006554',
                                    '#005547',
                                    '#00483C',
                                    '#003D33',
                                    '#00342B',
                                    '#002C25',
                                    '#00251E',
                                    '#001E19',
                                    '#001814',
                                    '#00100E',
                                    '#000907',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#00B2CC',
                                    '#0096AC',
                                    '#007F92',
                                    '#006C7B',
                                    '#005A67',
                                    '#004C57',
                                    '#00414A',
                                    '#00363E',
                                    '#002E35',
                                    '#00272D',
                                    '#002125',
                                    '#001B1F',
                                    '#001518',
                                    '#000F11',
                                    '#000809',
                                    '#000000',
                                ],
                                glacier: [
                                    '#5C8E9B',
                                    '#4E7883',
                                    '#42666F',
                                    '#37565D',
                                    '#2F484F',
                                    '#273D42',
                                    '#213338',
                                    '#1C2B2F',
                                    '#182528',
                                    '#141F22',
                                    '#111A1C',
                                    '#0E1517',
                                    '#0B1112',
                                    '#080C0D',
                                    '#040607',
                                    '#000000',
                                ],
                                slate: [
                                    '#4F6C9B',
                                    '#435B83',
                                    '#384D6F',
                                    '#30415D',
                                    '#28374F',
                                    '#222E42',
                                    '#1D2738',
                                    '#18212F',
                                    '#141C28',
                                    '#111822',
                                    '#0F141C',
                                    '#0C1017',
                                    '#090D12',
                                    '#07090D',
                                    '#040507',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#0C41E8',
                                    '#0A37C4',
                                    '#092EA6',
                                    '#07278C',
                                    '#062176',
                                    '#051C63',
                                    '#041854',
                                    '#041447',
                                    '#03113C',
                                    '#030E33',
                                    '#020C2B',
                                    '#020A23',
                                    '#01081B',
                                    '#010513',
                                    '#01030A',
                                    '#000000',
                                ],
                                indigo: [
                                    '#160CE8',
                                    '#130AC4',
                                    '#1009A6',
                                    '#0D078C',
                                    '#0B0676',
                                    '#090563',
                                    '#080454',
                                    '#070447',
                                    '#06033C',
                                    '#050333',
                                    '#04022B',
                                    '#030223',
                                    '#03011B',
                                    '#020113',
                                    '#01010A',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#5035C0',
                                    '#442DA3',
                                    '#392689',
                                    '#302074',
                                    '#291B62',
                                    '#221752',
                                    '#1D1345',
                                    '#18103B',
                                    '#150E32',
                                    '#120C2A',
                                    '#0F0A23',
                                    '#0C081D',
                                    '#090617',
                                    '#070410',
                                    '#040209',
                                    '#000000',
                                ],
                                plum: [
                                    '#7C35C0',
                                    '#692DA3',
                                    '#592689',
                                    '#4B2074',
                                    '#3F1B62',
                                    '#351752',
                                    '#2D1345',
                                    '#26103B',
                                    '#200E32',
                                    '#1B0C2A',
                                    '#170A23',
                                    '#13081D',
                                    '#0F0617',
                                    '#0A0410',
                                    '#060209',
                                    '#000000',
                                ],
                                orchid: [
                                    '#BB1ADB',
                                    '#9E16B9',
                                    '#86139D',
                                    '#711084',
                                    '#5F0D6F',
                                    '#500B5E',
                                    '#44094F',
                                    '#390843',
                                    '#310739',
                                    '#290630',
                                    '#220528',
                                    '#1C0421',
                                    '#16031A',
                                    '#100212',
                                    '#08010A',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#DB1A7D',
                                    '#B9166A',
                                    '#9D1359',
                                    '#84104B',
                                    '#6F0D40',
                                    '#5E0B36',
                                    '#4F092D',
                                    '#430826',
                                    '#390720',
                                    '#30061B',
                                    '#280517',
                                    '#210413',
                                    '#1A030F',
                                    '#12020A',
                                    '#0A0106',
                                    '#000000',
                                ],
                            }),
                            (t.SECONDARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#FFCCD6',
                                    '#D8ADB5',
                                    '#B69299',
                                    '#9A7B81',
                                    '#82686D',
                                    '#6D575C',
                                    '#5C4A4D',
                                    '#4E3E42',
                                    '#423538',
                                    '#382D2F',
                                    '#2F2527',
                                    '#261F20',
                                    '#1E1819',
                                    '#151112',
                                    '#0B090A',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#FFCCE6',
                                    '#D8ADC3',
                                    '#B692A4',
                                    '#9A7B8B',
                                    '#826875',
                                    '#6D5763',
                                    '#5C4A53',
                                    '#4E3E46',
                                    '#42353C',
                                    '#382D32',
                                    '#2F252A',
                                    '#261F23',
                                    '#1E181B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                                coral: [
                                    '#FFD7CC',
                                    '#D8B6AD',
                                    '#B69A92',
                                    '#9A827B',
                                    '#826D68',
                                    '#6D5C57',
                                    '#5C4E4A',
                                    '#4E423E',
                                    '#423835',
                                    '#382F2D',
                                    '#2F2825',
                                    '#26201F',
                                    '#1E1918',
                                    '#151211',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#FFE3CC',
                                    '#D8C0AD',
                                    '#B6A292',
                                    '#9A897B',
                                    '#827368',
                                    '#6D6157',
                                    '#5C524A',
                                    '#4E463E',
                                    '#423B35',
                                    '#38322D',
                                    '#2F2A25',
                                    '#26221F',
                                    '#1E1B18',
                                    '#151311',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                clover: [
                                    '#D7F4D9',
                                    '#B6CFB8',
                                    '#9AAE9B',
                                    '#829383',
                                    '#6D7C6E',
                                    '#5C695D',
                                    '#4E584F',
                                    '#424B42',
                                    '#383F38',
                                    '#2F3630',
                                    '#282D28',
                                    '#202521',
                                    '#191D1A',
                                    '#121412',
                                    '#0A0B0A',
                                    '#000000',
                                ],
                                emerald: [
                                    '#CCFFEF',
                                    '#ADD8CA',
                                    '#92B6AB',
                                    '#7B9A90',
                                    '#688279',
                                    '#576D66',
                                    '#4A5C56',
                                    '#3E4E49',
                                    '#35423E',
                                    '#2D3834',
                                    '#252F2C',
                                    '#1F2624',
                                    '#181E1C',
                                    '#111514',
                                    '#090B0B',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#CCFFF7',
                                    '#ADD8D1',
                                    '#92B6B1',
                                    '#7B9A95',
                                    '#68827D',
                                    '#576D6A',
                                    '#4A5C59',
                                    '#3E4E4C',
                                    '#354240',
                                    '#2D3836',
                                    '#252F2D',
                                    '#1F2625',
                                    '#181E1D',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#CCF9FF',
                                    '#ADD3D8',
                                    '#92B2B6',
                                    '#7B969A',
                                    '#687F82',
                                    '#576B6D',
                                    '#4A5A5C',
                                    '#3E4C4E',
                                    '#354142',
                                    '#2D3738',
                                    '#252E2F',
                                    '#1F2626',
                                    '#181D1E',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                glacier: [
                                    '#DFE9EC',
                                    '#BDC5C8',
                                    '#9FA7A9',
                                    '#868C8E',
                                    '#717678',
                                    '#606465',
                                    '#515455',
                                    '#444748',
                                    '#3A3C3D',
                                    '#313334',
                                    '#292B2B',
                                    '#222324',
                                    '#1A1B1C',
                                    '#131314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                slate: [
                                    '#DDE4EE',
                                    '#BBC1CA',
                                    '#9EA3AA',
                                    '#85898F',
                                    '#707479',
                                    '#5F6266',
                                    '#505256',
                                    '#444649',
                                    '#393B3E',
                                    '#303234',
                                    '#292A2C',
                                    '#212224',
                                    '#1A1B1C',
                                    '#121314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#CFDAFC',
                                    '#AFB9D5',
                                    '#949CB4',
                                    '#7D8398',
                                    '#696F80',
                                    '#595D6C',
                                    '#4B4F5B',
                                    '#3F434D',
                                    '#363941',
                                    '#2D3037',
                                    '#26282E',
                                    '#1F2126',
                                    '#181A1E',
                                    '#111215',
                                    '#090A0B',
                                    '#000000',
                                ],
                                indigo: [
                                    '#D1CFFC',
                                    '#B1AFD5',
                                    '#9594B4',
                                    '#7E7D98',
                                    '#6A6980',
                                    '#5A596C',
                                    '#4C4B5B',
                                    '#403F4D',
                                    '#363641',
                                    '#2E2D37',
                                    '#26262E',
                                    '#1F1F26',
                                    '#19181E',
                                    '#111115',
                                    '#09090B',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#DDD7F4',
                                    '#BBB6CF',
                                    '#9E9AAE',
                                    '#858293',
                                    '#706D7C',
                                    '#5F5C69',
                                    '#504E58',
                                    '#44424B',
                                    '#39383F',
                                    '#302F36',
                                    '#29282D',
                                    '#212025',
                                    '#1A191D',
                                    '#121214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                plum: [
                                    '#E6D7F4',
                                    '#C3B6CF',
                                    '#A49AAE',
                                    '#8B8293',
                                    '#756D7C',
                                    '#635C69',
                                    '#534E58',
                                    '#46424B',
                                    '#3C383F',
                                    '#322F36',
                                    '#2A282D',
                                    '#232025',
                                    '#1B191D',
                                    '#131214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                orchid: [
                                    '#F3D1FA',
                                    '#CEB1D4',
                                    '#AE95B3',
                                    '#937E97',
                                    '#7B6A7F',
                                    '#685A6B',
                                    '#584C5A',
                                    '#4A404D',
                                    '#3F3641',
                                    '#352E37',
                                    '#2D262E',
                                    '#251F26',
                                    '#1D191D',
                                    '#141115',
                                    '#0B090B',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#FAD1E6',
                                    '#D4B1C3',
                                    '#B395A4',
                                    '#977E8B',
                                    '#7F6A75',
                                    '#6B5A63',
                                    '#5A4C53',
                                    '#4D4046',
                                    '#41363C',
                                    '#372E32',
                                    '#2E262A',
                                    '#261F23',
                                    '#1D191B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                            }),
                            (t.FALLBACK_NAME = 'slate'),
                            (t.FALLBACK_PALETTE = {
                                primary: '#4F6C9B',
                                secondary: '#DDE4EE',
                                primaryStops: t.PRIMARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                secondaryStops: t.SECONDARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                            });
                        let r = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        (t.getVibePaletteByBucketName = (e) => {
                            let a = (0, n.findColorBucketByName)(e);
                            return a ? r(a) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, i.hexToHsl)(e),
                                    a = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === a ? (0, n.findColorBucketByHue)(t.h) : (0, n.findColorBucketByLightness)(t.l), hsl: t, mode: a };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: a } = (0, t.getVibeColorBucketSelection)(e);
                                return a ? r(a) : t.FALLBACK_PALETTE;
                            });
                    },
                    8216: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.getVibePaletteColors = t.getElementFromRefOrElement = t.createRipple = void 0);
                        var i = a(8796);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return i.createRipple;
                            },
                        });
                        var n = a(361);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return n.getElementFromRefOrElement;
                            },
                        });
                        var r = a(768);
                        Object.defineProperty(t, 'getVibePaletteColors', {
                            enumerable: !0,
                            get: function () {
                                return r.getVibePaletteColors;
                            },
                        });
                    },
                    19: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Navigation = void 0);
                        let n = a(4377),
                            r = a(5881),
                            s = a(7786),
                            o = i(a(3980));
                        t.Navigation = function (e) {
                            let { className: t, children: a, collapsed: i = !1, direction: l = 'vertical', ...d } = e;
                            return (0, n.jsx)(s.NavigationProvider, {
                                collapsed: i,
                                direction: l,
                                children: (0, n.jsx)('nav', {
                                    className: (0, r.clsx)(o.default.root, o.default['root_direction_'.concat(l)], { [o.default.root_collapsed]: i }, t),
                                    'aria-label': d['aria-label'],
                                    ...d,
                                    children: a,
                                }),
                            });
                        };
                    },
                    7786: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationProvider = t.NavigationContext = void 0);
                        let i = a(4377),
                            n = a(810);
                        (t.NavigationContext = (0, n.createContext)({ collapsed: !1, direction: 'vertical' })),
                            (t.NavigationProvider = (e) => {
                                let { collapsed: a, direction: r, children: s } = e,
                                    o = (0, n.useMemo)(() => ({ collapsed: a, direction: r }), [a, r]);
                                return (0, i.jsx)(t.NavigationContext.Provider, { value: o, children: s });
                            });
                    },
                    8106: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationGroup = void 0);
                        let n = a(4377),
                            r = a(810),
                            s = a(5881),
                            o = a(7786),
                            l = i(a(674));
                        t.NavigationGroup = function (e) {
                            let { className: t, children: a, ...i } = e,
                                d = (0, r.createRef)(),
                                { direction: c } = (0, r.useContext)(o.NavigationContext);
                            return (0, n.jsx)('ol', { ref: d, className: (0, s.clsx)(l.default.root, l.default['root_direction_'.concat(c)], t), ...i, children: a });
                        };
                    },
                    3506: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationItem = t.NavigationItemComponent = void 0);
                        let n = a(4377),
                            r = a(810),
                            s = a(5881),
                            o = a(7786),
                            l = a(8216),
                            d = i(a(7391)),
                            c = i(a(3162));
                        function u(e) {
                            let {
                                    className: t = '',
                                    forwardRef: a,
                                    children: i,
                                    selected: u = !1,
                                    shownAnimation: _,
                                    withRipple: m = !1,
                                    variant: p = 'default',
                                    isNewVisualVersion: h,
                                    ...v
                                } = e,
                                { collapsed: x, direction: b } = (0, r.useContext)(o.NavigationContext),
                                f = h ? c.default : d.default,
                                g = (0, r.useCallback)(
                                    (e) => {
                                        m && (0, l.createRipple)(e, f.ripple);
                                    },
                                    [f.ripple, m],
                                ),
                                [A, N] = r.Children.toArray(i.props.children),
                                C = (0, r.useMemo)(
                                    () =>
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)('div', { className: f.iconContainer, children: A }),
                                                (0, n.jsx)('div', {
                                                    className: (0, s.clsx)(f.textContainer, f['textContainer_direction_'.concat(b)], { [f.textContainer_selected]: u }),
                                                    children: N,
                                                }),
                                            ],
                                        }),
                                    [f, A, b, u, N],
                                ),
                                y = (0, r.cloneElement)(i, {
                                    className: (0, s.clsx)(
                                        f.item,
                                        f['item_direction_'.concat(b)],
                                        { [f.item_selected]: u, [f['item_collapsed_'.concat(b)]]: x },
                                        i.props.className,
                                    ),
                                    children: C,
                                });
                            return (0, n.jsx)('li', {
                                ref: a,
                                className: (0, s.clsx)(
                                    f.root,
                                    f['root_direction_'.concat(b)],
                                    f['root_variant_'.concat(p)],
                                    { [f.root_animate]: _, [f.root_collapsed]: x },
                                    t,
                                ),
                                'aria-current': !!u && 'page',
                                onClick: g,
                                ...v,
                                children: y,
                            });
                        }
                        (t.NavigationItemComponent = u), (t.NavigationItem = (0, r.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e })));
                    },
                    2660: (e) => {
                        e.exports = eE;
                    },
                    810: (e) => {
                        e.exports = f;
                    },
                },
                eB = {};
            function eI(e) {
                var t = eB[e];
                if (void 0 !== t) return t.exports;
                var a = (eB[e] = { exports: {} });
                return eS[e].call(a.exports, a, a.exports, eI), a.exports;
            }
            (eI.d = (e, t) => {
                for (var a in t) eI.o(t, a) && !eI.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (eI.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (eI.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var ej = {};
            (() => {
                Object.defineProperty(ej, 'X$', { value: !0 }), (ej.Dx = ej.KB = ej.W_ = void 0);
                var e = eI(19);
                Object.defineProperty(ej, 'W_', {
                    enumerable: !0,
                    get: function () {
                        return e.Navigation;
                    },
                });
                var t = eI(8106);
                Object.defineProperty(ej, 'KB', {
                    enumerable: !0,
                    get: function () {
                        return t.NavigationGroup;
                    },
                });
                var a = eI(3506);
                Object.defineProperty(ej, 'Dx', {
                    enumerable: !0,
                    get: function () {
                        return a.NavigationItem;
                    },
                });
            })();
            var ek = ej.W_,
                eP = ej.KB,
                ew = ej.Dx;
            ej.X$;
            var eL = a(4823),
                eO = a(71768),
                eD = a(27246),
                eR = a(24116),
                eM = a(98740),
                eF = a(57197),
                eU = a(59576),
                ez = (function (e) {
                    return (
                        (e.SEARCH = 'SEARCH'),
                        (e.HOME = 'HOME'),
                        (e.FOR_YOU_AND_TRENDS = 'FOR_YOU_AND_TRENDS'),
                        (e.CONCERTS = 'CONCERTS'),
                        (e.NON_MUSIC = 'NON_MUSIC'),
                        (e.KIDS = 'KIDS'),
                        (e.COLLECTION = 'COLLECTION'),
                        (e.PLUS = 'PLUS'),
                        e
                    );
                })({}),
                eW = a(73474),
                eV = a(59518),
                eH = a(36477);
            let eK = () => {
                let { user: e, experiments: t, slam: a, settings: i } = (0, L.g)(),
                    { formatMessage: n } = (0, g.A)();
                return (0, b.useMemo)(() => {
                    let i = [];
                    if (
                        (t.checkExperiment(K.z.WebNextDisableSearch, 'on') ||
                            i.push({
                                icon: 'search',
                                iconSelected: 'search_selected',
                                iconNewVersion: 'navigationSearch',
                                iconNewVersionSelected: 'navigationSearch',
                                id: ez.SEARCH,
                                path: F.Z.search.href,
                                availablePaths: [F.Z.search.href],
                                isEnabled: !a.isOfflineModeEnabled,
                                analyticsParams: { to: eg.QT.SearchScreen, entityType: eg.LA.Search },
                            }),
                        !0)
                    ) {
                        i.push({
                            icon: 'home',
                            iconSelected: 'home_selected',
                            iconNewVersion: t.checkExperiment(K.z.WebNextNdaLabelOnWaveTab, 'on') ? 'navigationMyVibeNDA' : 'navigationMyVibe',
                            iconNewVersionSelected: t.checkExperiment(K.z.WebNextNdaLabelOnWaveTab, 'on') ? 'navigationMyVibeNDA' : 'navigationMyVibe',
                            id: ez.HOME,
                            path: F.Z.main.href,
                            availablePaths: [F.Z.main.href],
                            isEnabled: !a.isOfflineModeEnabled,
                            analyticsParams: { to: eg.QT.WaveLandingScreen, entityType: eg.LA.Home },
                        });
                        let n = e.isAuthorized ? eW.p.MAIN : eW.p.MAIN_NOLOGIN,
                            r = (0, eH.u)('/landing/:skeleton', { params: { skeleton: n } }).href;
                        i.push({
                            icon: 'home',
                            iconSelected: 'home_selected',
                            iconNewVersion: 'navigationForYouAndTrends',
                            iconNewVersionSelected: 'navigationForYouAndTrends_selected',
                            id: ez.FOR_YOU_AND_TRENDS,
                            path: r,
                            availablePaths: [r],
                            isEnabled: !a.isOfflineModeEnabled,
                            analyticsParams: { to: eg.QT.ForYouScreen, entityType: eg.LA.Home },
                        });
                    } else
                        i.push({
                            icon: 'home',
                            iconSelected: 'home_selected',
                            iconNewVersion: 'navigationForYouAndTrends',
                            iconNewVersionSelected: 'navigationForYouAndTrends_selected',
                            id: ez.HOME,
                            path: F.Z.main.href,
                            availablePaths: [F.Z.main.href],
                            isEnabled: !a.isOfflineModeEnabled,
                            analyticsParams: { to: eg.QT.MainScreen, entityType: eg.LA.Home },
                        });
                    return (
                        t.checkExperiment(K.z.WebNextConcertsTab, 'on') &&
                            !t.checkExperiment(K.z.WebNextDisableConcertsTab, 'on') &&
                            e.hasPlus &&
                            i.push({
                                icon: 'ticket',
                                iconSelected: 'ticket_selected',
                                iconNewVersion: 'navigationConcerts',
                                iconNewVersionSelected: 'navigationConcerts_selected',
                                id: ez.CONCERTS,
                                path: F.Z.concerts.href,
                                availablePaths: [F.Z.concerts.href],
                                isEnabled: !a.isOfflineModeEnabled,
                                analyticsParams: { to: eg.QT.ConcertsLandingScreen, entityType: eg.LA.Concerts },
                                onboardingConfig: {
                                    id: eV.h.CONCERTS_TAB,
                                    text: n({ id: 'concerts.onboarding' }, { nbsp: '\xa0' }),
                                    isEnabled: t.checkExperiment(K.z.WebNextConcertTabOnboarding, 'on'),
                                },
                            }),
                        t.checkExperiment(K.z.WebNextDisableNonMusic, 'on') ||
                            i.push({
                                icon: 'non_music',
                                iconSelected: 'non_music_selected',
                                iconNewVersion: 'navigationNonMusic',
                                iconNewVersionSelected: 'navigationNonMusic_selected',
                                id: ez.NON_MUSIC,
                                path: '/non-music',
                                availablePaths: ['/non-music'],
                                isEnabled: !a.isOfflineModeEnabled,
                                analyticsParams: { to: eg.QT.NonmusicLandingScreen, entityType: eg.LA.NonMusic },
                            }),
                        !t.checkExperiment(K.z.WebNextDisableKids, 'on') &&
                            e.settings.isChildModeEnabled &&
                            i.push({
                                icon: 'kids',
                                iconSelected: 'kids_selected',
                                iconNewVersion: 'navigationKids',
                                iconNewVersionSelected: 'navigationKids_selected',
                                id: ez.KIDS,
                                path: F.Z.kids.href,
                                availablePaths: [F.Z.kids.href],
                                isEnabled: !a.isOfflineModeEnabled,
                                analyticsParams: { to: eg.QT.KidsLandingScreen, entityType: eg.LA.Kids },
                            }),
                        !t.checkExperiment(K.z.WebNextDisableCollection, 'on') &&
                            e.isAuthorized &&
                            i.push({
                                icon: 'collections',
                                iconSelected: 'collections_selected',
                                iconNewVersion: 'navigationCollection',
                                iconNewVersionSelected: 'navigationCollection_selected',
                                id: ez.COLLECTION,
                                path: F.Z.collection.href,
                                availablePaths: [F.Z.collection.href, F.Z.mymusic.href],
                                isEnabled: !0,
                                analyticsParams: { to: eg.QT.CollectionLandingScreen, entityType: eg.LA.Collection },
                            }),
                        t.checkExperiment(K.z.WebNextDisablePlus, 'on') || t.checkExperiment(K.z.WebNextPlusOptionsMarketplace, 'on'),
                        i
                    );
                }, [t, a.isOfflineModeEnabled, e.settings.isChildModeEnabled, e.isAuthorized, e.hasPlus, i.isMobile, n]);
            };
            var eG = a(48322);
            let eY = () => {
                let e = (0, eG.D)(),
                    t = (0, v.usePathname)();
                return (0, b.useCallback)((a) => a.some((a) => (a === F.Z.main.href ? a === t : e.startsWith(a))), [e, t]);
            };
            var e$ = a(32156),
                eq = a(61258),
                eZ = a(4008);
            let eQ = () => {
                    let e = (0, eA.st)(),
                        { hash: t } = (0, eA.gf)(),
                        a = (0, er.U)(),
                        { location: i } = (0, L.g)();
                    return (0, b.useCallback)(
                        (n, r) => {
                            if (!e || !t) return;
                            let s = (0, eg.Fx)({
                                params: ((e) => {
                                    let { isNotFound: t, entityType: a, to: i, hash: n } = e;
                                    return t
                                        ? {
                                              entityType: eg.LA.Error,
                                              entityId: eg.LA.Error,
                                              hash: n,
                                              pageId: eg.QT.PageNotFoundScreen,
                                              pageStyle: eg.QL.Fullscreen,
                                              pagePlacement: eg.c4.Fullscreen,
                                              mainObjectType: eg.ky.NonApplicable,
                                              mainObjectId: eg.ky.NonApplicable,
                                              from: eg.QT.PageNotFoundScreen,
                                              to: i,
                                          }
                                        : {
                                              entityType: a,
                                              entityId: a,
                                              hash: n,
                                              pageId: eg.QT.Sidebar,
                                              pageStyle: eg.QL.Bar,
                                              pagePlacement: eg.c4.Left,
                                              from: eg.QT.Sidebar,
                                              to: i,
                                          };
                                })({ isNotFound: i.isNotFound, entityType: n, to: r, hash: t }),
                                logger: a,
                                context: 'useSendEventOnNavbarNavigated',
                            });
                            s && (0, eg.ID)(e.evgenInstance, s);
                        },
                        [e, t, a, i.isNotFound],
                    );
                },
                eX = {
                    [ez.SEARCH]: N.e8.navbar.NAVBAR_NAVIGATION_ITEM_SEARCH,
                    [ez.HOME]: N.e8.navbar.NAVBAR_NAVIGATION_ITEM_HOME,
                    [ez.FOR_YOU_AND_TRENDS]: N.e8.navbar.NAVBAR_NAVIGATION_ITEM_FOR_YOU_AND_TRENDS,
                    [ez.CONCERTS]: N.e8.navbar.NAVBAR_NAVIGATION_ITEM_CONCERTS,
                    [ez.NON_MUSIC]: N.e8.navbar.NAVBAR_NAVIGATION_ITEM_NON_MUSIC,
                    [ez.KIDS]: N.e8.navbar.NAVBAR_NAVIGATION_ITEM_KIDS,
                    [ez.COLLECTION]: N.e8.navbar.NAVBAR_NAVIGATION_ITEM_COLLECTION,
                    [ez.PLUS]: N.e8.navbar.NAVBAR_NAVIGATION_ITEM_PLUS,
                },
                eJ = (e) => {
                    let { padding: t, placement: a } = e;
                    return { shiftOptions: { padding: t }, offsetOptions: t, flipOptions: { fallbackAxisSideDirection: 'start', padding: t }, placement: a };
                },
                e0 = eJ({ placement: 'right', padding: 8 });
            var e1 = a(34284),
                e2 = a(46151),
                e5 = a(89053),
                e3 = a.n(e5);
            let e4 = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                e6 = (0, h.PA)((e) => {
                    let { config: t, children: a } = e,
                        { formatMessage: i } = (0, g.A)(),
                        {
                            settings: { isMobile: n },
                        } = (0, L.g)(),
                        { compositePlayerBarRef: r } = (0, P.g)(),
                        { setIsOnboardingOpened: s } = (0, e2.w)(),
                        [o, l] = (0, ey.d)(),
                        d = (0, e1.z)({ id: t.id, ref: o }),
                        [c, u] = (0, b.useState)(d && t.isEnabled),
                        _ = (0, C.c)((e) => {
                            null == e || e.stopPropagation(), u(!1), s(!1);
                        }),
                        p = (0, C.c)((e) => {
                            e || _();
                        });
                    return (0, m.jsxs)(B.m_, {
                        placement: n ? 'top' : 'right',
                        arrowProps: e4,
                        offsetOptions: n ? 15 : -10,
                        isHoverEnabled: !1,
                        open: c,
                        onOpenChange: p,
                        enableAriaDescribedby: !0,
                        referenceRef: l,
                        children: [
                            a,
                            (0, m.jsxs)(B.ZI, {
                                className: e3().tooltip,
                                rootNode: n ? r : void 0,
                                children: [
                                    (0, m.jsx)(T.$, {
                                        icon: (0, m.jsx)(E.I, { variant: 'close', size: 'xxs' }),
                                        onClick: _,
                                        variant: 'text',
                                        withRipple: !1,
                                        className: e3().button,
                                        'aria-label': i({ id: 'interface-actions.close' }),
                                    }),
                                    (0, m.jsx)(I.HL, { className: e3().text, variant: 'span', children: t.text }),
                                ],
                            }),
                        ],
                    });
                }),
                e7 = (e) => {
                    let { config: t, children: a } = e;
                    return t ? (0, m.jsx)(e6, { config: t, children: a }) : a;
                };
            var e9 = a(68905),
                e8 = a(28376),
                te = a(2783),
                tt = a(89562);
            function ta(e, t) {
                var a = Object.create(null);
                return (
                    e &&
                        b.Children.map(e, function (e) {
                            return e;
                        }).forEach(function (e) {
                            a[e.key] = t && (0, b.isValidElement)(e) ? t(e) : e;
                        }),
                    a
                );
            }
            function ti(e, t, a) {
                return null != a[t] ? a[t] : e.props[t];
            }
            var tn =
                    Object.values ||
                    function (e) {
                        return Object.keys(e).map(function (t) {
                            return e[t];
                        });
                    },
                tr = (function (e) {
                    function t(t, a) {
                        var i = e.call(this, t, a) || this,
                            n = i.handleExited.bind(
                                (function (e) {
                                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e;
                                })(i),
                            );
                        return (i.state = { contextValue: { isMounting: !0 }, handleExited: n, firstRender: !0 }), i;
                    }
                    (0, te.A)(t, e);
                    var a = t.prototype;
                    return (
                        (a.componentDidMount = function () {
                            (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
                        }),
                        (a.componentWillUnmount = function () {
                            this.mounted = !1;
                        }),
                        (t.getDerivedStateFromProps = function (e, t) {
                            var a,
                                i,
                                n = t.children,
                                r = t.handleExited;
                            return {
                                children: t.firstRender
                                    ? ta(e.children, function (t) {
                                          return (0, b.cloneElement)(t, {
                                              onExited: r.bind(null, t),
                                              in: !0,
                                              appear: ti(t, 'appear', e),
                                              enter: ti(t, 'enter', e),
                                              exit: ti(t, 'exit', e),
                                          });
                                      })
                                    : (Object.keys(
                                          (i = (function (e, t) {
                                              function a(a) {
                                                  return a in t ? t[a] : e[a];
                                              }
                                              (e = e || {}), (t = t || {});
                                              var i,
                                                  n = Object.create(null),
                                                  r = [];
                                              for (var s in e) s in t ? r.length && ((n[s] = r), (r = [])) : r.push(s);
                                              var o = {};
                                              for (var l in t) {
                                                  if (n[l])
                                                      for (i = 0; i < n[l].length; i++) {
                                                          var d = n[l][i];
                                                          o[n[l][i]] = a(d);
                                                      }
                                                  o[l] = a(l);
                                              }
                                              for (i = 0; i < r.length; i++) o[r[i]] = a(r[i]);
                                              return o;
                                          })(n, (a = ta(e.children)))),
                                      ).forEach(function (t) {
                                          var s = i[t];
                                          if ((0, b.isValidElement)(s)) {
                                              var o = t in n,
                                                  l = t in a,
                                                  d = n[t],
                                                  c = (0, b.isValidElement)(d) && !d.props.in;
                                              l && (!o || c)
                                                  ? (i[t] = (0, b.cloneElement)(s, {
                                                        onExited: r.bind(null, s),
                                                        in: !0,
                                                        exit: ti(s, 'exit', e),
                                                        enter: ti(s, 'enter', e),
                                                    }))
                                                  : l || !o || c
                                                    ? l &&
                                                      o &&
                                                      (0, b.isValidElement)(d) &&
                                                      (i[t] = (0, b.cloneElement)(s, {
                                                          onExited: r.bind(null, s),
                                                          in: d.props.in,
                                                          exit: ti(s, 'exit', e),
                                                          enter: ti(s, 'enter', e),
                                                      }))
                                                    : (i[t] = (0, b.cloneElement)(s, { in: !1 }));
                                          }
                                      }),
                                      i),
                                firstRender: !1,
                            };
                        }),
                        (a.handleExited = function (e, t) {
                            var a = ta(this.props.children);
                            e.key in a ||
                                (e.props.onExited && e.props.onExited(t),
                                this.mounted &&
                                    this.setState(function (t) {
                                        var a = (0, e8.A)({}, t.children);
                                        return delete a[e.key], { children: a };
                                    }));
                        }),
                        (a.render = function () {
                            var e = this.props,
                                t = e.component,
                                a = e.childFactory,
                                i = (0, e9.A)(e, ['component', 'childFactory']),
                                n = this.state.contextValue,
                                r = tn(this.state.children).map(a);
                            return (delete i.appear, delete i.enter, delete i.exit, null === t)
                                ? b.createElement(tt.A.Provider, { value: n }, r)
                                : b.createElement(tt.A.Provider, { value: n }, b.createElement(t, i, r));
                        }),
                        t
                    );
                })(b.Component);
            (tr.propTypes = {}),
                (tr.defaultProps = {
                    component: 'div',
                    childFactory: function (e) {
                        return e;
                    },
                });
            var ts = a(9612),
                to = a(90404),
                tl = a(50162),
                td = a(86269),
                tc = a(64605),
                tu = a(34883),
                t_ = a(7462),
                tm = a(65476),
                tp = a(28816),
                th = a(91253),
                tv = a(84062);
            let tx = () => {
                let e = (0, eA.st)(),
                    { hash: t } = (0, eA.gf)(),
                    a = (0, er.U)(),
                    {
                        settings: { isMobile: i },
                    } = (0, L.g)();
                return (0, b.useCallback)(
                    (n, r) => {
                        if (!e) return;
                        let s = (0, eg.Fx)({
                            params: { hash: t, pageId: eg.QT.Sidebar, sidebarSize: n || i ? eg.JQ.Small : eg.JQ.Medium, from: eg.QT.Sidebar, to: r },
                            logger: a,
                            context: 'useSendEventOnSidebarNavigated',
                        });
                        s && (0, eg.qi)(e.evgenInstance, s);
                    },
                    [e, t, i, a],
                );
            };
            var tb = a(1444),
                tf = a(97153),
                tg = a.n(tf);
            let tA = (e) => {
                    let { children: t, entityUrl: a, ariaLabel: i, ...n } = e;
                    return a ? (0, m.jsx)(eq.N, { href: a, className: tg().link, 'aria-label': i, ...n, children: t }) : t;
                },
                tN = (e) => {
                    let {
                            className: t,
                            cover: a,
                            title: i,
                            subtitle: n,
                            contextMenu: r,
                            isCollapsed: s,
                            withCollapseAnimation: o,
                            entityUrl: l,
                            onDoubleClick: d,
                            onClick: c,
                            forwardRef: u,
                            ariaLabel: _,
                        } = e,
                        h = eY(),
                        v = (0, b.useCallback)(
                            (e) => {
                                2 === e.detail
                                    ? null == d || d()
                                    : (e.target instanceof HTMLElement && 'IMG' !== e.target.tagName && (0, y.P)(e, tg().ripple), null == c || c(e));
                            },
                            [c, d],
                        ),
                        x = l && h([l]) ? void 0 : l;
                    return (0, m.jsxs)(tb.C, {
                        ref: u,
                        className: (0, p.$)(tg().root, { [tg().root_withoutLink]: !x }, t),
                        role: 'listitem',
                        'aria-label': x ? void 0 : _,
                        'data-test-id': N.e8.navbar.PIN_ITEM,
                        children: [
                            (0, m.jsxs)(tA, {
                                entityUrl: x,
                                ariaLabel: _,
                                onClick: v,
                                children: [
                                    (0, m.jsx)('div', { className: tg().cover, 'data-test-id': N.e8.navbar.PIN_COVER, children: a }),
                                    (0, m.jsx)('div', {
                                        className: tg().meta,
                                        children: (0, m.jsxs)('div', {
                                            className: (0, p.$)(tg().info, {
                                                [tg().info_collapsed]: s,
                                                [tg().info_animated]: o,
                                                [tg().info_withContextMenu]: (0, b.isValidElement)(r),
                                            }),
                                            children: [
                                                (0, m.jsx)(I.HL, {
                                                    'aria-hidden': !0,
                                                    className: tg().title,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    lineClamp: 1,
                                                    'data-test-id': N.e8.navbar.PIN_TITLE,
                                                    children: i,
                                                }),
                                                (0, m.jsx)(I.HL, {
                                                    'aria-hidden': !0,
                                                    className: tg().subtitle,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    lineClamp: 1,
                                                    'data-test-id': N.e8.navbar.PIN_SUBTITLE,
                                                    children: n,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, b.isValidElement)(r) &&
                                (0, m.jsx)('div', {
                                    className: (0, p.$)(tg().contextMenu, { [tg().contextMenu_hidden]: s }),
                                    'data-test-id': N.e8.navbar.PIN_CONTEXT_MENU_BUTTON,
                                    children: r,
                                }),
                        ],
                    });
                },
                tC = (0, b.forwardRef)((e, t) => (0, m.jsx)(tN, { forwardRef: t, ...e })),
                ty = (0, b.createContext)(null);
            var tT = a(13166),
                tE = a.n(tT),
                tS = a(19740),
                tB = a(27120),
                tI = a(56367);
            let tj = () => {
                    let e = (0, eA.st)(),
                        { hash: t } = (0, eA.gf)(),
                        a = (0, er.U)(),
                        {
                            settings: { isMobile: i },
                        } = (0, L.g)();
                    return (0, b.useCallback)(
                        (n) => {
                            let { actionType: r, isCollapsed: s, mainObjectType: o, mainObjectId: l } = n;
                            if (!e) return;
                            let d = { hash: t, actionType: r, user_interaction_type: eg.gi.Tap, pageId: eg.QT.Sidebar, sidebarSize: s || i ? eg.JQ.Small : eg.JQ.Medium };
                            o && (d.mainObjectType = o), l && (d.mainObjectId = l);
                            let c = (0, eg.Fx)({ params: d, logger: a, context: 'useSendEventOnSidebarActionPerformed' });
                            c && (0, eg.dL)(e.evgenInstance, c);
                        },
                        [e, t, i, a],
                    );
                },
                tk = (e) => {
                    let { onPinClick: t, isPinned: a } = e,
                        { formatMessage: i } = (0, g.A)(),
                        { isCollapsed: n } = (0, b.useContext)(ty) || {},
                        [r, s] = (0, b.useState)(!1),
                        o = tj(),
                        l = (0, b.useCallback)((e) => {
                            e.preventDefault(), e.stopPropagation();
                        }, []),
                        d = (0, b.useCallback)(() => {
                            t(), o({ actionType: eg.X2.Unpin, isCollapsed: null != n && n });
                        }, [n, t, o]);
                    return (
                        (0, tB.N)(r),
                        (0, m.jsx)(tS.W1, {
                            className: (0, p.$)(tE().contextMenu, { [tE().contextMenu_visible]: r }),
                            onClick: l,
                            icon: (0, m.jsx)(E.I, { size: 'xxs', variant: 'more' }),
                            tabIndex: n ? -1 : 0,
                            'aria-hidden': n,
                            variant: 'text',
                            offsetOptions: 3,
                            open: r,
                            onOpenChange: s,
                            ariaLabel: i({ id: 'interface-actions.context-menu' }),
                            containerProps: { 'data-test-id': N.e8.navbar.PIN_CONTEXT_MENU },
                            children: (0, m.jsx)(tI.L, { onClick: d, isPinned: a }),
                        })
                    );
                },
                tP = (0, h.PA)((e) => {
                    var t;
                    let { className: a, album: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: s } = (0, g.A)(),
                        { isCollapsed: o, withCollapseAnimation: l } = null != (t = (0, b.useContext)(ty)) ? t : {},
                        d = (0, th.A)(i),
                        c = (0, t_.r)(i.type, t_.c.PIN),
                        u = tx(),
                        _ = ((e) =>
                            (0, b.useMemo)(() => {
                                switch (e) {
                                    case tc._.PODCAST:
                                        return eg.QT.PodcastScreen;
                                    case tc._.AUDIOBOOK:
                                        return eg.QT.AudiobookScreen;
                                    default:
                                        return eg.QT.AlbumScreen;
                                }
                            }, [e]))(i.type),
                        h = (0, tv.Z)(i.url),
                        v = ((e) => {
                            let { albumId: t, albumUrl: a, callback: i } = e,
                                { getAlbumUrlWithSavedClid: n, checkIsCurrentAlbumPage: r } = (0, tm.I)(),
                                s = (0, tp.p)();
                            return (0, C.c)((e) => {
                                if (!t || !a) {
                                    null == i || i(e);
                                    return;
                                }
                                if (r(t)) {
                                    null == e || e.preventDefault(), s(n(t, a));
                                    return;
                                }
                                null == i || i(e);
                            });
                        })({ albumId: i.id, albumUrl: i.url, callback: h }),
                        x = (0, tu.c)({ album: i, callback: v }),
                        f = (0, C.c)((e) => {
                            u(null != o && o, _), x(e);
                        }),
                        A = (0, b.useMemo)(
                            () =>
                                (0, m.jsx)(td.t, {
                                    className: tE().cover,
                                    radius: 'xs',
                                    children: (0, m.jsxs)(B.m_, {
                                        ...r,
                                        enabled: o,
                                        children: [
                                            (0, m.jsx)(tl._V, {
                                                className: tE().image,
                                                'aria-hidden': !0,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, m.jsx)(B.ZI, {
                                                className: tE().tooltip,
                                                children: (0, m.jsx)(I.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.title,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [i.coverUri, i.title, o, r],
                        );
                    return (0, m.jsx)(tC, {
                        ref: n,
                        ariaLabel: s({ id: 'entity-names.album-name' }, { albumName: i.title }),
                        className: (0, p.$)(tE().root, a),
                        title: i.title,
                        entityUrl: i.url,
                        subtitle: c,
                        cover: A,
                        isCollapsed: !!o,
                        withCollapseAnimation: !!l,
                        contextMenu: (0, m.jsx)(tk, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: f,
                    });
                }),
                tw = (0, b.forwardRef)((e, t) => (0, m.jsx)(tP, { forwardRef: t, ...e }));
            var tL = a(91853),
                tO = a(70390);
            let tD = (0, h.PA)((e) => {
                    var t;
                    let { className: a, artist: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: s } = (0, g.A)(),
                        { isCollapsed: o, withCollapseAnimation: l } = null != (t = (0, b.useContext)(ty)) ? t : {},
                        d = (0, tO.A)(i),
                        c = tx(),
                        u = (0, tv.Z)(i.url),
                        _ = (0, tL.S)({ artist: i, callback: u }),
                        h = (0, C.c)((e) => {
                            c(null != o && o, eg.QT.ArtistScreen), _(e);
                        }),
                        v = (0, b.useMemo)(
                            () =>
                                (0, m.jsx)(td.t, {
                                    className: tE().cover,
                                    radius: 'round',
                                    children: (0, m.jsxs)(B.m_, {
                                        ...r,
                                        enabled: o,
                                        children: [
                                            (0, m.jsx)(tl._V, {
                                                className: tE().image,
                                                'aria-hidden': !0,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, m.jsx)(B.ZI, {
                                                className: tE().tooltip,
                                                children: (0, m.jsx)(I.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.name,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [i.coverUri, i.name, o, r],
                        );
                    return (0, m.jsx)(tC, {
                        ref: n,
                        ariaLabel: s({ id: 'entity-names.artist-name' }, { artistName: i.name }),
                        className: (0, p.$)(tE().root, a),
                        title: i.name,
                        entityUrl: i.url,
                        subtitle: (0, m.jsx)(A.A, { id: 'entity-names.artist' }),
                        cover: v,
                        isCollapsed: !!o,
                        withCollapseAnimation: !!l,
                        contextMenu: (0, m.jsx)(tk, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: h,
                    });
                }),
                tR = (0, b.forwardRef)((e, t) => (0, m.jsx)(tD, { forwardRef: t, ...e }));
            var tM = a(73192);
            let tF = (e) => {
                    var t;
                    let { className: a, playlist: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: s } = (0, g.A)(),
                        { isCollapsed: o, withCollapseAnimation: l } = null != (t = (0, b.useContext)(ty)) ? t : {},
                        d = (0, tM.A)(i),
                        c = tx(),
                        u = (0, C.c)(() => {
                            c(null != o && o, eg.QT.PlaylistScreen);
                        }),
                        _ = (0, b.useMemo)(
                            () =>
                                (0, m.jsx)(td.t, {
                                    className: tE().cover,
                                    radius: 'xs',
                                    children: (0, m.jsxs)(B.m_, {
                                        ...r,
                                        enabled: o,
                                        children: [
                                            (0, m.jsx)(tl._V, {
                                                'aria-hidden': !0,
                                                className: tE().image,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, m.jsx)(B.ZI, {
                                                className: tE().tooltip,
                                                children: (0, m.jsx)(I.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.title,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [o, i.coverUri, i.title, r],
                        );
                    return (0, m.jsx)(tC, {
                        ref: n,
                        ariaLabel: s({ id: 'entity-names.playlist-name' }, { playlistName: i.title }),
                        className: (0, p.$)(tE().root, a),
                        title: i.title,
                        entityUrl: i.url,
                        subtitle: (0, m.jsx)(A.A, { id: 'entity-names.playlist' }),
                        cover: _,
                        isCollapsed: !!o,
                        withCollapseAnimation: !!l,
                        contextMenu: (0, m.jsx)(tk, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: u,
                    });
                },
                tU = (0, b.forwardRef)((e, t) => (0, m.jsx)(tF, { forwardRef: t, ...e }));
            var tz = a(44989),
                tW = a(64089),
                tV = a(19529),
                tH = a(71735),
                tK = a(37862),
                tG = a(48922),
                tY = a(2969),
                t$ = a(40229);
            let tq = (0, h.PA)((e) => {
                    var t;
                    let { className: a, vibe: i, forwardRef: n, tooltipOptions: r } = e,
                        s = (0, b.useId)(),
                        { formatMessage: o } = (0, g.A)(),
                        { isCollapsed: l, withCollapseAnimation: d } = null != (t = (0, b.useContext)(ty)) ? t : {},
                        [c, u] = (0, b.useState)(!1),
                        _ = (0, tW.A)(i),
                        { withPlusPopoverWeb: h } = (0, q.X)(),
                        { state: v, setState: x } = (0, tz.e)(!1),
                        f = (() => {
                            let e = (0, eA.st)(),
                                { hash: t } = (0, eA.gf)(),
                                a = (0, er.U)(),
                                {
                                    settings: { isMobile: i },
                                } = (0, L.g)();
                            return (0, b.useCallback)(
                                (n) => {
                                    let { isCollapsed: r, mainObjectId: s } = n;
                                    if (!e) return;
                                    let o = (0, eg.Fx)({
                                        params: {
                                            hash: t,
                                            pageId: eg.QT.Sidebar,
                                            sidebarSize: r || i ? eg.JQ.Small : eg.JQ.Medium,
                                            mainObjectType: eg.ky.Wave,
                                            mainObjectId: s,
                                        },
                                        logger: a,
                                        context: 'useSendEventOnSidebarStarted',
                                    });
                                    o && (0, eg.cV)(e.evgenInstance, o);
                                },
                                [e, t, i, a],
                            );
                        })(),
                        A = tj(),
                        N = (0, tY.b)(),
                        y = (0, tH.P)(),
                        { isPlaying: T, togglePlay: E, isCurrent: S } = (0, w.B)({ seeds: i.seeds, pageIdForFrom: tG._Q.SIDEBAR, blockIdForFrom: tK.U.RADIO }),
                        j = (0, C.c)(async () => {
                            var e, t;
                            return h
                                ? void x(!0)
                                : (T
                                      ? A({
                                            actionType: eg.X2.Pause,
                                            isCollapsed: null != l && l,
                                            mainObjectType: eg.ky.Wave,
                                            mainObjectId: null != (e = i.seeds[0]) ? e : '',
                                        })
                                      : f({ isCollapsed: null != l && l, mainObjectId: null != (t = i.seeds[0]) ? t : '' }),
                                  E());
                        }),
                        k = (0, C.c)(() => {
                            y() ||
                                (u(!0),
                                j().finally(() => {
                                    u(!1);
                                }),
                                N(!T));
                        }),
                        P = (0, b.useMemo)(
                            () => (0, m.jsx)(I.HL, { id: s, variant: 'span', type: 'controls', size: 's', lineClamp: 1, children: i.title }),
                            [s, i.title],
                        ),
                        O = (0, $.L)(() => {
                            var e;
                            return i.shouldShowAgent && i.agent
                                ? (0, m.jsx)(tV.n, { agent: i.agent, isCurrent: S, isPlaying: T, onPlayButtonClick: k })
                                : (0, m.jsx)(t$.q, {
                                      isCurrent: S,
                                      isPlaying: T,
                                      isAvailable: !0,
                                      isPlayButtonLoading: c,
                                      onPlayButtonClick: k,
                                      title: i.title,
                                      entityCoverStyle: { backgroundColor: null == (e = i.colors) ? void 0 : e.average },
                                      ariaDescribedBy: s,
                                      coverUri: i.backgroundImageUrl,
                                      radius: 'round',
                                      withLoadingIndicator: !1,
                                  });
                        }),
                        D = (0, $.L)(() =>
                            (0, m.jsxs)(B.m_, {
                                ...r,
                                enabled: l,
                                children: [
                                    O,
                                    (0, m.jsx)(B.ZI, {
                                        className: tE().tooltip,
                                        children: (0, m.jsx)(I.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: i.title }),
                                    }),
                                ],
                            }),
                        ),
                        R = (0, b.useCallback)(
                            () =>
                                (0, m.jsx)(tC, {
                                    ref: n,
                                    ariaLabel: o({ id: 'entity-names.vibe-name' }, { vibeName: i.title }),
                                    onDoubleClick: j,
                                    className: (0, p.$)(tE().root, a),
                                    isCollapsed: !!l,
                                    contextMenu: (0, m.jsx)(tk, { onPinClick: _, isPinned: i.isPinned }),
                                    withCollapseAnimation: !!d,
                                    title: P,
                                    subtitle: i.getDescription(o({ id: 'entity-names.my-vibe' })),
                                    cover: D,
                                }),
                            [n, j, a, l, _, i, d, P, o, D],
                        );
                    return (0, m.jsx)(e$.S, {
                        isEnabled: h,
                        isOpened: v,
                        onOpenChange: x,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: i.stationType,
                        renderChildren: R,
                    });
                }),
                tZ = (0, b.forwardRef)((e, t) => (0, m.jsx)(tq, { forwardRef: t, ...e }));
            var tQ = a(1147),
                tX = a.n(tQ);
            let tJ = eJ({ placement: 'right', padding: 20 }),
                t0 = { enter: tX().pin_enter, enterActive: tX().pin_enter_active, exit: tX().pin_exit, exitActive: tX().pin_exit_active },
                t1 = (0, h.PA)((e) => {
                    var t, a;
                    let { className: i, withCollapseAnimation: n, isCollapsed: r, style: s } = e,
                        { formatMessage: o } = (0, g.A)(),
                        { pinsCollection: l } = (0, L.g)(),
                        d = null == (t = l.items) ? void 0 : t.map(() => (0, b.createRef)()),
                        c = (0, b.useMemo)(() => ({ withCollapseAnimation: n, isCollapsed: r }), [r, n]),
                        u = l.items && l.items.length > 0,
                        _ = l.items && l.items.length >= 3;
                    return (0, m.jsx)(ty.Provider, {
                        value: c,
                        children: (0, m.jsx)('div', {
                            className: (0, p.$)(tX().root, { [tX().root_withScroll]: _, [tX().root_hasPins]: u }, i),
                            style: s,
                            'data-test-id': N.e8.navbar.PIN_LIST,
                            children: (0, m.jsx)('div', {
                                role: 'list',
                                'aria-label': o({ id: 'navigation.pins-list' }),
                                className: tX().content,
                                children: (0, m.jsx)(tr, {
                                    component: null,
                                    children:
                                        null == (a = l.items)
                                            ? void 0
                                            : a.map((e, t) => {
                                                  switch (e.type) {
                                                      case to._.ALBUM_ITEM:
                                                          return (0, m.jsx)(
                                                              ts.A,
                                                              {
                                                                  classNames: t0,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(tw, {
                                                                      className: tX().pin,
                                                                      tooltipOptions: tJ,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      album: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case to._.ARTIST_ITEM:
                                                          return (0, m.jsx)(
                                                              ts.A,
                                                              {
                                                                  classNames: t0,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(tR, {
                                                                      className: tX().pin,
                                                                      tooltipOptions: tJ,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      artist: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case to._.PLAYLIST_ITEM:
                                                          return (0, m.jsx)(
                                                              ts.A,
                                                              {
                                                                  classNames: t0,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(tU, {
                                                                      className: tX().pin,
                                                                      tooltipOptions: tJ,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      playlist: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case to._.WAVE_ITEM:
                                                          return (0, m.jsx)(
                                                              ts.A,
                                                              {
                                                                  classNames: t0,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(tZ, {
                                                                      className: tX().pin,
                                                                      tooltipOptions: tJ,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      vibe: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                  }
                                              }),
                                }),
                            }),
                        }),
                    });
                }),
                t2 = { src: '/_next/static/media/ticket_dark.4e1b9044.png' },
                t5 = { src: '/_next/static/media/ticket_dark_selected.2b929060.png' },
                t3 = { src: '/_next/static/media/ticket_light.6b4bb4f7.png' },
                t4 = { src: '/_next/static/media/ticket_light_selected.648fa420.png' };
            var t6 = a(81501),
                t7 = a.n(t6);
            let t9 = (e) => {
                    let { isSelected: t, forwardRef: a } = e,
                        { theme: i } = (0, V.W)(),
                        n = (0, $.L)(() => {
                            switch (i) {
                                case U.S.Dark:
                                    if (t) return t5.src;
                                    return t2.src;
                                case U.S.Light:
                                    if (t) return t4.src;
                                    return t3.src;
                            }
                        });
                    return (0, m.jsx)(tl._V, { ref: a, className: t7().root, fit: 'contain', withLoadingIndicator: !1, src: n });
                },
                t8 = (0, b.forwardRef)((e, t) => (0, m.jsx)(t9, { forwardRef: t, ...e }));
            var ae = a(912),
                at = a.n(ae),
                aa = a(82273),
                ai = (function (e) {
                    return (e.WINDOWS = 'WINDOWS'), (e.MACOS = 'MACOS'), (e.UNKNOWN = 'UNKNOWN'), e;
                })({}),
                an = a(54773),
                ar = a.n(an);
            let as = { exit: ar().bar_exit, exitActive: ar().bar_exit_active, enter: ar().bar_enter, enterActive: ar().bar_enter_active },
                ao = { exit: ar().button_exit, exitActive: ar().button_exit_active, enter: ar().button_enter, enterActive: ar().button_enter_active },
                al = (e) => {
                    let { className: t, children: a, button: i, isCollapsed: n, barClassName: r } = e,
                        s = (0, b.useRef)(null),
                        o = (0, b.useRef)(null);
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(ar().root, t),
                        children: [
                            (0, m.jsx)(ts.A, {
                                nodeRef: o,
                                in: n,
                                timeout: 150,
                                classNames: ao,
                                unmountOnExit: !0,
                                children: (0, m.jsx)('div', { className: (0, p.$)(ar().button), ref: o, children: i }),
                            }),
                            (0, m.jsx)(ts.A, {
                                nodeRef: s,
                                in: !n,
                                timeout: 150,
                                classNames: as,
                                unmountOnExit: !0,
                                children: (0, m.jsx)('div', { className: (0, p.$)(ar().bar, r), ref: s, children: a }),
                            }),
                        ],
                    });
                },
                ad = (e) => {
                    switch (e) {
                        case ai.MACOS:
                            return 'macos';
                        case ai.WINDOWS:
                            return 'windows';
                        default:
                            return 'musicLogo';
                    }
                },
                ac = (e) => {
                    let { formatMessage: t } = (0, g.A)();
                    switch (e) {
                        case ai.MACOS:
                            return t({ id: 'sidebar.download-macos' });
                        case ai.WINDOWS:
                            return t({ id: 'sidebar.download-windows' });
                        default:
                            return t({ id: 'sidebar.download-app' });
                    }
                };
            var au = a(43334),
                a_ = a.n(au);
            let am = (e) => {
                    let { variant: t, forwardRef: a, onDownloadClick: i, onCloseClick: n } = e,
                        { formatMessage: r } = (0, g.A)(),
                        s = ac(t),
                        o = (0, b.useMemo)(() => {
                            let e = { span: (e) => (0, m.jsx)('span', { className: a_().textBright, children: e }) };
                            switch (t) {
                                case ai.MACOS:
                                    return r({ id: 'sidebar.download-macos-formatted' }, e);
                                case ai.WINDOWS:
                                    return r({ id: 'sidebar.download-windows-formatted' }, e);
                                default:
                                    return r({ id: 'sidebar.download-app-formatted' }, e);
                            }
                        }, [r, t]);
                    return (0, m.jsx)('section', {
                        ref: a,
                        'aria-label': s,
                        children: (0, m.jsxs)(td.t, {
                            radius: 'm',
                            className: a_().root,
                            children: [
                                (0, m.jsx)(T.$, {
                                    color: 'secondary',
                                    radius: 'round',
                                    variant: 'text',
                                    size: 'xxxs',
                                    className: a_().closeButton,
                                    icon: (0, m.jsx)(E.I, { variant: 'close', size: 'xxs', className: a_().closeButtonIcon }),
                                    withRipple: !1,
                                    onClick: n,
                                    'aria-label': r({ id: 'interface-actions.close' }),
                                }),
                                (0, m.jsx)(I.HL, { variant: 'div', className: a_().text, size: 'm', children: o }),
                                (0, m.jsx)(T.$, {
                                    color: 'secondary',
                                    radius: 'xxxl',
                                    size: 'xs',
                                    variant: 'default',
                                    role: 'link',
                                    withRipple: !0,
                                    flexIcon: !0,
                                    'aria-label': s,
                                    onClick: i,
                                    icon: (0, m.jsx)(E.I, { variant: ad(t), size: 'xxs', className: a_().downloadButtonIcon }),
                                    'data-test-id': N.e8.navbar.DOWNLOAD_APP_BUTTON_ENLARGED,
                                    children: (0, m.jsx)(I.HL, {
                                        variant: 'span',
                                        className: a_().downloadButtonText,
                                        size: 'm',
                                        children: (0, m.jsx)(A.A, { id: 'offline.download' }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                ap = (0, b.forwardRef)((e, t) => (0, m.jsx)(am, { forwardRef: t, ...e }));
            var ah = a(69200),
                av = a.n(ah);
            let ax = (e) => {
                    let { variant: t, onDownloadClick: a } = e,
                        i = ac(t),
                        n = (0, b.useMemo)(() => ad(t), [t]);
                    return (0, m.jsxs)(td.t, {
                        radius: 'm',
                        className: av().root,
                        children: [
                            (0, m.jsx)(E.I, { variant: n, className: av().icon }),
                            (0, m.jsxs)(B.m_, {
                                placement: 'left',
                                offsetOptions: 4,
                                children: [
                                    (0, m.jsx)(T.$, {
                                        className: av().button,
                                        color: 'secondary',
                                        radius: 'round',
                                        size: 'xs',
                                        variant: 'default',
                                        role: 'link',
                                        withRipple: !0,
                                        flexIcon: !0,
                                        onClick: a,
                                        icon: (0, m.jsx)(E.I, { variant: 'download', size: 'xxs', className: av().buttonIcon }),
                                        'aria-label': i,
                                        'data-test-id': N.e8.navbar.DOWNLOAD_APP_BUTTON_MINIMIZED,
                                    }),
                                    (0, m.jsx)(B.ZI, {
                                        children: (0, m.jsx)(I.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: i }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                ab = (0, h.PA)((e) => {
                    var t;
                    let { isCollapsed: a } = e,
                        { settings: i } = (0, L.g)(),
                        n = (0, eb.N)(),
                        r = n.get(ex.oo),
                        s = n.get(ex.tw),
                        [o, l] = (0, b.useState)(!1),
                        d = (() => {
                            let e = (0, eA.st)(),
                                { hash: t } = (0, eA.gf)(),
                                a = (0, er.U)();
                            return (0, b.useCallback)(() => {
                                if (!e || !t) return;
                                let i = (0, eg.Fx)({
                                    params: {
                                        entityType: eg.LA.Error,
                                        entityId: eg.LA.Error,
                                        hash: t,
                                        pageId: eg.QT.PageNotFoundScreen,
                                        pageStyle: eg.QL.Fullscreen,
                                        pagePlacement: eg.c4.Fullscreen,
                                        mainObjectType: eg.ky.NonApplicable,
                                        mainObjectId: eg.ky.NonApplicable,
                                        from: eg.QT.PageNotFoundScreen,
                                        to: eg.QT.AppDownloadScreen,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnDownloadScreenNavigated',
                                });
                                i && (0, eg.ID)(e.evgenInstance, i);
                            }, [e, t, a]);
                        })(),
                        c = (0, b.useMemo)(() => {
                            var e;
                            switch (null == (e = i.browserInfo) ? void 0 : e.OSFamily) {
                                case 'MacOS':
                                    return ai.MACOS;
                                case 'Windows':
                                    return ai.WINDOWS;
                                default:
                                    return ai.UNKNOWN;
                            }
                        }, [null == (t = i.browserInfo) ? void 0 : t.OSFamily]),
                        u = (0, aa._)(s.downloadDesktop.url),
                        _ = (0, b.useCallback)(() => {
                            d(), window.open(u, '_blank', 'noreferrer noopener');
                        }, [d, u]),
                        p = (0, b.useCallback)(() => {
                            r.set(ef.c.NavbarDownloadBarIsHidden, !0, { expires: 30 }), l(!0);
                        }, [r]);
                    return o
                        ? null
                        : (0, m.jsx)(al, {
                              isCollapsed: a,
                              button: (0, m.jsx)(ax, { variant: c, onDownloadClick: _ }),
                              children: (0, m.jsx)(ap, { variant: c, onDownloadClick: _, onCloseClick: p }),
                          });
                });
            var af = a(79856),
                ag = a(55475),
                aA = a.n(ag);
            let aN = 'PLUSBAR_BUTTON_INTERSECTION_PROPERTY_ID',
                aC = (0, h.PA)((e) => {
                    let { shouldFetchOffers: t, ...a } = e,
                        { user: i } = (0, L.g)(),
                        [n, r] = (0, ey.d)(),
                        { formatMessage: s } = (0, g.A)(),
                        {
                            mainText: o,
                            isShimmerVisible: l,
                            isShimmerActive: d,
                            openPaymentWidgetModal: c,
                            saveOfferAndAuthorize: u,
                        } = (0, eM.D)({ storeName: 'music', isEnabled: t, offerElement: { element: n, intersectionPropertyId: aN } }),
                        _ = (0, $.L)(() => o || s({ id: 'authorization.start-button' })),
                        p = (0, C.c)(() => {
                            if (!i.isAuthorized) return void u();
                            c();
                        });
                    return l
                        ? (0, m.jsx)(af.W, { className: aA().plusButtonShimmer, isActive: d, radius: 'xxxl' })
                        : (0, m.jsx)(T.$, {
                              className: aA().root,
                              isBlock: !0,
                              radius: 'xxxl',
                              size: 'm',
                              color: 'plus',
                              onClick: p,
                              ref: r,
                              'data-intersection-property-id': aN,
                              ...a,
                              children: (0, m.jsx)(I.HL, { variant: 'div', size: 's', lineClamp: 2, children: _ }),
                          });
                });
            function ay() {
                return (ay = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            aC.displayName = 'PlusNavbarButton';
            let aT = function (e) {
                return b.createElement(
                    'svg',
                    ay({ viewBox: '0 0 58 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    b.createElement(
                        'g',
                        { clipPath: 'url(#clip0_2521_25547)' },
                        b.createElement(
                            'g',
                            { clipPath: 'url(#clip1_2521_25547)' },
                            i || (i = b.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' })),
                            n ||
                                (n = b.createElement('path', {
                                    d: 'M40.4184 5.14279C41.6821 4.20644 43.1756 3.6404 44.7322 3.49976V6.07553C43.726 6.20598 42.765 6.59121 41.943 7.20031C40.9138 7.96298 40.1569 9.03624 39.7839 10.2618C39.411 11.4873 39.4419 12.8003 39.8719 14.007C40.3019 15.2137 41.1084 16.2502 42.1723 16.9637C43.2362 17.6773 44.5013 18.03 45.7809 17.9698C47.0605 17.9097 48.2869 17.4399 49.2792 16.6298C50.2716 15.8197 50.9773 14.712 51.2922 13.4703C51.5119 12.6042 51.5334 11.7049 51.3613 10.8378L53.5243 9.09892L53.5229 9.0849C54.1067 10.691 54.1959 12.4383 53.7744 14.1C53.3245 15.8738 52.3163 17.4561 50.8987 18.6135C49.4811 19.7708 47.7291 20.4419 45.9011 20.5278C44.0731 20.6137 42.2658 20.1099 40.7459 19.0906C39.2261 18.0713 38.074 16.5905 37.4597 14.8666C36.8453 13.1428 36.8013 11.2671 37.334 9.51633C37.8668 7.76555 38.948 6.23231 40.4184 5.14279Z',
                                    fill: '#FCCA00',
                                })),
                            r ||
                                (r = b.createElement('path', {
                                    d: 'M51.8934 6.34507L51.9025 6.36777L50.457 8.66347C49.9314 7.88453 49.227 7.23618 48.4027 6.77726V12.0016C48.4027 13.6044 47.1033 14.9038 45.5004 14.9038C43.8975 14.9038 42.5981 13.6044 42.5981 12.0016C42.5981 10.3987 43.8975 9.09931 45.5004 9.09931C46.1011 9.09931 46.6592 9.28181 47.1223 9.59441V3.61938C49.0065 3.98181 50.6703 4.96381 51.8934 6.34507Z',
                                    fill: '#FC3F1D',
                                })),
                            b.createElement(
                                'mask',
                                { id: 'mask0_2521_25547', style: { maskType: 'alpha' }, maskUnits: 'userSpaceOnUse', x: 33, y: 0, width: 25, height: 24 },
                                s || (s = b.createElement('circle', { cx: 45.5005, cy: 12, r: 12, fill: 'white' })),
                            ),
                            o || (o = b.createElement('g', { mask: 'url(#mask0_2521_25547)' })),
                            l ||
                                (l = b.createElement(
                                    'g',
                                    { clipPath: 'url(#clip2_2521_25547)' },
                                    b.createElement('rect', { width: 24, height: 24, transform: 'translate(33.5005)', fill: 'black' }),
                                    b.createElement('path', {
                                        d: 'M57.5002 3.59937L45.121 10.2255L51.5722 3.59937L47.9962 3.59937L43.6042 9.6956V3.59937L40.7002 3.59937V20.3994H43.6042V14.313L47.9962 20.3994H51.5722L45.2885 13.9815L57.5002 20.3994V17.2794L46.3623 12.811L57.5002 13.5594V10.4394L46.4328 11.1589L57.5002 6.71936V3.59937Z',
                                        fill: 'url(#paint0_radial_2521_25547)',
                                    }),
                                )),
                        ),
                    ),
                    d ||
                        (d = b.createElement(
                            'g',
                            { clipPath: 'url(#clip3_2521_25547)' },
                            b.createElement('rect', { x: 17.0005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            b.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M41.0005 12C41.0005 18.6274 35.6279 24 29.0005 24C22.3731 24 17.0005 18.6274 17.0005 12C17.0005 5.37258 22.3731 0 29.0005 0C30.2956 0 31.5427 0.205154 32.7112 0.584736L29.9763 9H21.9892L21.0132 12H29.0013L26.6613 19.2H29.9613L32.3013 12L41.0005 12ZM40.6224 9H33.2763L35.5662 1.95391C38.0324 3.56896 39.8677 6.06758 40.6224 9Z',
                                fill: 'url(#paint1_linear_2521_25547)',
                            }),
                        )),
                    c ||
                        (c = b.createElement('path', {
                            d: 'M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z',
                            fill: 'black',
                        })),
                    u ||
                        (u = b.createElement('path', {
                            d: 'M18.2943 10.6431C18.2943 10.6431 21.283 14.8271 21.2703 14.8639C21.2143 15.024 21.154 15.1821 21.0895 15.338C21.0747 15.3735 17.35 12.1585 17.35 12.1585C17.35 12.1585 18.3728 19.0145 18.3525 19.0314C18.2041 19.1531 18.0528 19.2706 17.8972 19.383C17.8757 19.3986 15.6594 12.6669 15.6594 12.6669C15.6594 12.6669 12.5603 21.1641 12.5342 21.1646C12.4861 21.1654 12.4376 21.1658 12.3896 21.1658C12.2277 21.1658 12.0671 21.1616 11.9069 21.1536C11.8828 21.1523 13.7581 12.101 13.7581 12.101C13.7581 12.101 4.94181 17.5004 4.92916 17.4839C4.80269 17.3199 4.68169 17.1517 4.56617 16.9789C4.55395 16.9607 12.2686 10.4711 12.2686 10.4711C12.269 10.4716 3.15343 9.90658 3.15723 9.88756C3.19601 9.69233 3.2407 9.49879 3.29129 9.30821C3.29593 9.29003 12.0532 8.60038 12.0532 8.60038C12.0532 8.60038 5.65977 5.13649 5.67495 5.12085C5.80606 4.98689 5.94139 4.85674 6.08052 4.73039C6.09738 4.71517 13.1383 7.06726 13.1383 7.06726C13.1383 7.06726 10.9718 2.40366 11.011 2.39774C11.1691 2.3745 11.328 2.35506 11.4886 2.33985C11.5224 2.33689 15.1704 6.63623 15.1704 6.63623C15.1704 6.63623 16.3365 3.16388 16.3711 3.18036C16.5363 3.25811 16.6991 3.34009 16.8588 3.42672C16.8888 3.44278 16.9891 7.20502 16.9891 7.20502C16.9891 7.20502 19.8066 5.92333 19.8133 5.93178C19.9116 6.05814 20.0068 6.18702 20.0987 6.31887C20.1046 6.32732 18.0401 8.74829 18.0401 8.74829C18.0401 8.74829 21.6506 10.0397 21.6565 10.0735C21.6835 10.2261 21.7071 10.3794 21.7265 10.5341C21.7303 10.5658 18.2943 10.6431 18.2943 10.6431Z',
                            fill: '#FED42B',
                        })),
                    _ ||
                        (_ = b.createElement(
                            'defs',
                            null,
                            b.createElement(
                                'radialGradient',
                                {
                                    id: 'paint0_radial_2521_25547',
                                    cx: 0,
                                    cy: 0,
                                    r: 1,
                                    gradientUnits: 'userSpaceOnUse',
                                    gradientTransform: 'translate(40.7002 3.59937) rotate(45) scale(23.7588)',
                                },
                                b.createElement('stop', { offset: 0.5, stopColor: '#FF5500' }),
                                b.createElement('stop', { offset: 1, stopColor: '#BBFF00' }),
                            ),
                            b.createElement(
                                'linearGradient',
                                { id: 'paint1_linear_2521_25547', x1: 17.0005, y1: 10.4, x2: 41.0005, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                b.createElement('stop', { stopColor: '#FF5C4D' }),
                                b.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                b.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            b.createElement(
                                'clipPath',
                                { id: 'clip0_2521_25547' },
                                b.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                            b.createElement(
                                'clipPath',
                                { id: 'clip1_2521_25547' },
                                b.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                            b.createElement(
                                'clipPath',
                                { id: 'clip2_2521_25547' },
                                b.createElement('rect', { width: 24, height: 24, fill: 'white', transform: 'translate(33.5005)' }),
                            ),
                            b.createElement(
                                'clipPath',
                                { id: 'clip3_2521_25547' },
                                b.createElement('rect', { x: 17.0005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                        )),
                );
            };
            var aE = a(7939),
                aS = a.n(aE);
            let aB = (e) => {
                    let { className: t, forwardRef: a, shouldFetchOffers: i } = e,
                        {
                            paywall: { modal: n },
                        } = (0, L.g)(),
                        { formatMessage: r } = (0, g.A)();
                    return (0, m.jsxs)('section', {
                        className: (0, p.$)(aS().root, t),
                        ref: a,
                        'aria-label': r({ id: 'plusbar.subscription-activation' }),
                        'data-test-id': N.e8.plusBar.PLUS_BAR,
                        children: [
                            (0, m.jsx)(aT, { className: aS().logos, 'aria-hidden': 'true' }),
                            (0, m.jsx)(I.HL, {
                                className: aS().title,
                                variant: 'div',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': N.e8.plusBar.PLUS_BAR_TITLE,
                                children: (0, m.jsx)(A.A, { id: 'plusbar.title', values: { br: '\n', nbsp: '\xa0' } }),
                            }),
                            (0, m.jsx)(I.HL, {
                                className: aS().addition,
                                variant: 'div',
                                size: 'xs',
                                weight: 'normal',
                                'data-test-id': N.e8.plusBar.PLUS_BAR_ADDITION,
                                children: (0, m.jsx)(A.A, { id: 'plusbar.text', values: { br: '\n', nbsp: '\xa0' } }),
                            }),
                            (0, m.jsxs)('div', {
                                className: aS().buttons,
                                children: [
                                    (0, m.jsx)(aC, { shouldFetchOffers: i, 'data-test-id': N.e8.plusBar.PLUS_BAR_OFFER_BUTTON }),
                                    (0, m.jsx)(T.$, {
                                        className: aS().button,
                                        isBlock: !0,
                                        radius: 'xxxl',
                                        size: 'm',
                                        variant: 'text',
                                        color: 'primary',
                                        withRipple: !1,
                                        onClick: n.open,
                                        'data-test-id': N.e8.plusBar.PLUS_BAR_PAYWALL_BUTTON,
                                        children: (0, m.jsx)(A.A, { id: 'interface-actions.more-details' }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                aI = (0, b.forwardRef)((e, t) =>
                    (0, m.jsx)(eO.r, { page: eD.l.SIDEBAR, places: [eR.R.SIDEBAR_BANNER], children: (0, m.jsx)(aB, { forwardRef: t, ...e }) }),
                );
            var aj = a(19349),
                ak = a.n(aj);
            let aP = (0, h.PA)((e) => {
                let { isCollapsed: t, shouldFetchOffers: a } = e,
                    { formatMessage: i } = (0, g.A)(),
                    {
                        paywall: { modal: n },
                    } = (0, L.g)();
                return (0, m.jsx)(al, {
                    className: ak().root,
                    isCollapsed: t,
                    button: (0, m.jsxs)(B.m_, {
                        ...e0,
                        enabled: t,
                        children: [
                            (0, m.jsx)(T.$, {
                                variant: 'text',
                                withRipple: !1,
                                size: 'xxs',
                                icon: (0, m.jsx)(E.I, { className: ak().icon, variant: 'plusOutlined' }),
                                className: (0, p.$)(ak().button, ak().important),
                                'aria-label': i({ id: 'plusbar.subscription-activation' }),
                                onClick: n.open,
                                'data-test-id': N.e8.navbar.PAYWALL_BUTTON_MINIMIZED,
                            }),
                            (0, m.jsx)(B.ZI, {
                                children: (0, m.jsx)(I.HL, {
                                    variant: 'span',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    children: (0, m.jsx)(A.A, { id: 'plusbar.subscription-activation' }),
                                }),
                            }),
                        ],
                    }),
                    children: (0, m.jsx)(aI, { shouldFetchOffers: a }),
                });
            });
            aP.displayName = 'NavbarDesktopAnimatedPlusBar';
            var aw = a(48454),
                aL = a(65215),
                aO = a.n(aL);
            let aD = (e) => {
                let { className: t, optionOffer: a } = e,
                    { formatMessage: i } = (0, g.A)(),
                    { subscriptionName: n, offerText: r, mainText: s, openPaymentWidgetModal: o } = a;
                return (0, m.jsxs)('section', {
                    className: (0, p.$)(aO().root, t),
                    'aria-label': i({ id: 'plusbar.subscription-activation' }),
                    'data-test-id': N.e8.plusBar.PLUS_BAR,
                    children: [
                        (0, m.jsx)(tl._V, {
                            src: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.693eab4a84d7e41b1102de79/orig',
                            alt: 'Option Icon',
                            className: aO().optionIcon,
                        }),
                        (0, m.jsx)(I.HL, {
                            className: aO().title,
                            variant: 'div',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': N.e8.plusBar.PLUS_BAR_TITLE,
                            children: n,
                        }),
                        (0, m.jsx)(I.HL, {
                            className: aO().addition,
                            variant: 'div',
                            size: 'xs',
                            weight: 'normal',
                            'data-test-id': N.e8.plusBar.PLUS_BAR_ADDITION,
                            children: r,
                        }),
                        (0, m.jsx)('div', {
                            className: aO().buttons,
                            children: (0, m.jsx)(T.$, {
                                className: aO().button,
                                isBlock: !0,
                                radius: 'xxxl',
                                size: 'm',
                                variant: 'default',
                                color: 'secondary',
                                withRipple: !1,
                                onClick: o,
                                'data-test-id': N.e8.plusBar.PLUS_BAR_PAYMENT_WIDGET_BUTTON,
                                children: s,
                            }),
                        }),
                    ],
                });
            };
            var aR = a(70583),
                aM = a.n(aR);
            let aF = (0, h.PA)((e) => {
                let { optionOffer: t, isCollapsed: a, setForceUpdateElement: i } = e,
                    [n, r] = (0, b.useState)(!1),
                    s = (0, C.c)(() => {
                        r(!0);
                    }),
                    o = (0, C.c)(() => {
                        r(!1);
                    });
                return (0, m.jsx)(al, {
                    className: aM().root,
                    isCollapsed: a,
                    button: (0, m.jsxs)(aw.AM, {
                        open: n,
                        onOpenChange: r,
                        placement: 'top',
                        offsetOptions: { mainAxis: -50, crossAxis: 0 },
                        children: [
                            (0, m.jsx)(T.$, {
                                type: 'button',
                                onMouseEnter: s,
                                onMouseLeave: o,
                                className: aM().button,
                                ref: i,
                                'data-intersection-property-id': 'PLUSBAR_OPTIONS_BUTTON_INTERSECTION_PROPERTY_ID',
                                children: (0, m.jsx)(tl._V, {
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.693eab4a84d7e41b1102de79/orig',
                                    alt: 'Option Icon',
                                    className: aM().optionIcon,
                                }),
                            }),
                            (0, m.jsx)(aw.hl, {
                                className: aM().popoverContent,
                                onMouseEnter: s,
                                onMouseLeave: o,
                                children: (0, m.jsx)(aD, { className: aM().popoverContent, optionOffer: t }),
                            }),
                        ],
                    }),
                    children: (0, m.jsx)(aD, { optionOffer: t }),
                });
            });
            aF.displayName = 'NavbarDesktopAnimatedPlusOptionsBar';
            var aU = a(89543),
                az = a.n(aU);
            let aW = (e) => {
                let { isCollapsed: t, isActive: a } = e;
                return (0, m.jsx)(al, {
                    className: az().root,
                    isCollapsed: t,
                    button: (0, m.jsx)(af.W, { className: az().buttonShimmer, isActive: a, radius: 'round' }),
                    children: (0, m.jsx)(af.W, { className: az().barShimmer, isActive: a, radius: 'xxxl' }),
                });
            };
            aW.displayName = 'NavbarDesktopAnimatedShimmerBar';
            var aV = a(14177),
                aH = a(94218),
                aK = a(14135),
                aG = a.n(aK);
            let aY = () => {
                let { formatMessage: e } = (0, g.A)(),
                    t = e({ id: 'authorization.enter-title' }),
                    a = e({ id: 'authorization.enter-subtitle' });
                return (0, m.jsxs)('div', {
                    className: aG().root,
                    'data-test-id': N.e8.unauthBar.UNAUTH_BAR,
                    children: [
                        (0, m.jsx)(b.Suspense, { children: (0, m.jsx)(aV.F, { className: aG().userProfile, userIdClassName: aG().userId, variant: 'desktop' }) }),
                        (0, m.jsx)(I.HL, {
                            className: aG().title,
                            size: 'm',
                            variant: 'div',
                            weight: 'bold',
                            'data-test-id': N.e8.unauthBar.UNAUTH_BAR_TITLE,
                            children: t,
                        }),
                        (0, m.jsx)(I.HL, {
                            className: aG().subtitle,
                            size: 'xs',
                            variant: 'div',
                            weight: 'medium',
                            'data-test-id': N.e8.unauthBar.UNAUTH_BAR_ADDITION,
                            children: a,
                        }),
                        (0, m.jsx)(aH.H, { size: 's', isBlock: !0 }),
                    ],
                });
            };
            var a$ = a(91819),
                aq = a.n(a$);
            let aZ = (0, h.PA)((e) => {
                let { isCollapsed: t, withUserProfileAnimation: a } = e,
                    { user: i } = (0, L.g)();
                return i.isAuthorized
                    ? (0, m.jsx)('div', {
                          className: aq().userProfileContainer,
                          children: (0, m.jsx)(aV.F, {
                              className: aq().userProfile,
                              userIdClassName: aq().userId,
                              metaClassName: (0, p.$)(aq().userMeta, { [aq().userMeta_withAnimation]: a, [aq().userMeta_collapsed]: t }),
                              withMeta: !0,
                          }),
                      })
                    : (0, m.jsx)(al, {
                          barClassName: aq().unauthorizedBar,
                          isCollapsed: t,
                          button: (0, m.jsxs)(B.m_, {
                              ...e0,
                              enabled: t,
                              children: [
                                  (0, m.jsx)('div', { className: aq().userProfileContainer, children: (0, m.jsx)(aV.F, { className: aq().userProfile }) }),
                                  (0, m.jsx)(B.ZI, {
                                      children: (0, m.jsx)(I.HL, {
                                          variant: 'span',
                                          type: 'text',
                                          size: 's',
                                          weight: 'medium',
                                          children: (0, m.jsx)(A.A, { id: 'authorization.enter-tooltip' }),
                                      }),
                                  }),
                              ],
                          }),
                          children: (0, m.jsx)(aY, {}),
                      });
            });
            aZ.displayName = 'NavbarDesktopUserWidget';
            let aQ = (0, h.PA)((e) => {
                    var t, a, i, n, r;
                    let { className: s, forwardRef: o, isCollapsed: l, shownAnimation: d, handleClick: c } = e,
                        u = ev(),
                        _ = eY(),
                        { formatMessage: h } = (0, g.A)(),
                        v = (0, eF.j)(),
                        {
                            user: x,
                            experiments: f,
                            settings: N,
                            modals: { bestRecommedationModal: y },
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: j },
                            },
                        } = (0, L.g)(),
                        [k, P] = (0, ey.d)(),
                        w = f.checkExperiment(K.z.WebNextPlusOptionsSidebar, 'on') && x.hasPlus,
                        O = (0, eM.D)({
                            storeName: 'music',
                            communicationId: 'mu-promo-kids-7d-web',
                            isEnabled: w,
                            offerElement: { element: k, intersectionPropertyId: 'PLUSBAR_OPTIONS_BUTTON_INTERSECTION_PROPERTY_ID' },
                        }),
                        D = eK(),
                        R = (0, eb.N)().get(ex.oo),
                        M = eQ(),
                        F = ((e) => {
                            let t = (0, eb.N)().get(ex.oo),
                                a = ev(),
                                [i, n] = (0, b.useState)(!1);
                            return (
                                (0, b.useEffect)(() => {
                                    !0 !== t.get(ef.c.NavbarCollapsed) && (((e || a) && !1 !== t.get(ef.c.NavbarCollapsed)) || n(!0));
                                }, [e, a, t]),
                                i
                            );
                        })(l),
                        U = x.isAuthorized && !x.hasPlus,
                        z = w && O.isShimmerVisible,
                        W = w && !O.isShimmerVisible && O.subscriptionName,
                        V = (0, eL.Q)(),
                        H = j.isVisible && j.type === en.h.BRANDING && V.isEnabled ? (null == (t = V.data) ? void 0 : t.style) : void 0,
                        G = f.checkExperiment(K.z.WebNextPromoVeryBestRecommendations, 'on'),
                        Y = f.checkExperiment(K.z.WebNextNavbarExplicit, 'on'),
                        $ = !l && Y,
                        q = (null == (a = N.browserInfo) || a.isTouch, R.get(ef.c.NavbarDownloadBarIsHidden)),
                        Z = !0,
                        Q =
                            !(null == (i = N.browserInfo) ? void 0 : i.isTouch) &&
                            x.isAuthorized &&
                            !x.hasPlus &&
                            (null == (r = f.getExperiment(K.z.WebNextDesktopWebFreemium)) || null == (n = r.value) ? void 0 : n.closeCollection) === 'on',
                        [X, J] = (0, b.useState)(!1),
                        [ee, et] = (0, b.useState)(null),
                        ea = (0, b.useMemo)(() => D.some((e) => e.id === ez.COLLECTION && e.isEnabled), [D]),
                        ei = Q && ea;
                    (0, b.useEffect)(() => {
                        Q || J(!1);
                    }, [Q]);
                    let er = (0, C.c)(() => (0, m.jsx)('span', { 'aria-hidden': !0 })),
                        es = (0, b.useMemo)(() => (l ? h({ id: 'sidebar.uncollapse' }) : h({ id: 'sidebar.collapse' })), [l, h]),
                        eo = (0, b.useCallback)(
                            (e, t) =>
                                e.id === ez.CONCERTS && f.checkExperiment(K.z.WebNextConcertsTicketIcon, 'on')
                                    ? (0, m.jsx)(t8, { isSelected: t })
                                    : Z
                                      ? (0, m.jsx)(E.I, { variant: t ? e.iconNewVersionSelected : e.iconNewVersion, size: 'xs' })
                                      : (0, m.jsx)(E.I, { variant: t ? e.iconSelected : e.icon, size: 'm' }),
                            [f, Z],
                        ),
                        el = (0, C.c)(() => {
                            $ && y.open();
                        }),
                        ed = (0, b.useMemo)(
                            () => ({
                                [ez.SEARCH]: h({ id: 'navigation.search' }),
                                [ez.HOME]: Z ? h({ id: 'navigation.page-my-vibe' }) : h({ id: 'navigation.page-main' }),
                                [ez.FOR_YOU_AND_TRENDS]: h({ id: 'navigation.page-for-you-and-trends' }),
                                [ez.COLLECTION]: h({ id: 'navigation.page-collection' }),
                                [ez.NON_MUSIC]: h({ id: 'entity-names.podcasts-and-books' }),
                                [ez.KIDS]: h({ id: 'kids.for-kids' }),
                                [ez.CONCERTS]: h({ id: 'entity-names.concerts' }),
                                [ez.PLUS]: h({ id: 'navigation.page-plus' }),
                            }),
                            [h, Z],
                        ),
                        ec = (0, C.c)((e, t) => () => {
                            M(e, t);
                        }),
                        eu = (0, b.useMemo)(
                            () =>
                                (0, m.jsx)(
                                    eP,
                                    {
                                        className: (0, p.$)({ [at().navigationGroup]: Z }),
                                        children: D.map((e) => {
                                            let t = _(e.availablePaths),
                                                a = e.id === ez.COLLECTION && !!Q && e.isEnabled,
                                                i = ec(e.analyticsParams.entityType, e.analyticsParams.to),
                                                n = !a && e.isEnabled && !t;
                                            return (0, m.jsx)(
                                                e7,
                                                {
                                                    config: e.onboardingConfig,
                                                    children: (0, m.jsx)(ew, {
                                                        'data-intersection-property-id': eU.N,
                                                        selected: t,
                                                        shownAnimation: d,
                                                        variant: 'main',
                                                        isNewVisualVersion: Z,
                                                        withRipple: Z && e.isEnabled && !t,
                                                        children: (0, m.jsxs)(eq.N, {
                                                            ref: a ? et : void 0,
                                                            href: n ? e.path : void 0,
                                                            role: 'link',
                                                            'aria-disabled': !e.isEnabled,
                                                            tabIndex: e.isEnabled ? 0 : -1,
                                                            className: (0, p.$)({ [at().disabledNavigationItem]: !e.isEnabled }),
                                                            onClick: a
                                                                ? (e) => {
                                                                      e.preventDefault(), i(), J((e) => !e);
                                                                  }
                                                                : i,
                                                            'data-test-id': eX[e.id],
                                                            children: [
                                                                (0, m.jsxs)(B.m_, {
                                                                    ...e0,
                                                                    enabled: l,
                                                                    children: [
                                                                        eo(e, t),
                                                                        (0, m.jsx)(B.ZI, {
                                                                            children: (0, m.jsx)(I.HL, {
                                                                                variant: 'span',
                                                                                type: 'text',
                                                                                size: 's',
                                                                                weight: 'medium',
                                                                                children: ed[e.id],
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, m.jsx)(I.HL, {
                                                                    variant: 'span',
                                                                    type: 'controls',
                                                                    size: 'm',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    className: (0, p.$)({ [at().title_animate]: d, [at().title_collapsed]: l }),
                                                                    children: ed[e.id],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                                    },
                                    'main',
                                ),
                            [_, l, f, f.loadingState, d, ed, D, ec, eo, Q, J],
                        ),
                        e_ = (0, b.useMemo)(
                            () =>
                                u
                                    ? null
                                    : (0, b.createElement)(B.m_, {
                                          ...e0,
                                          key: 'collapseTooltip',
                                          enabled: l,
                                          isFocusEnabled: !1,
                                          children: [
                                              (0, m.jsx)(T.$, {
                                                  className: at().collapseButton,
                                                  'aria-label': es,
                                                  radius: 'round',
                                                  color: 'secondary',
                                                  size: 'xs',
                                                  icon: (0, m.jsx)(E.I, { variant: l ? 'arrowRight' : 'arrowLeft', size: 'xxs' }),
                                                  onClick: c,
                                              }),
                                              (0, m.jsx)(B.ZI, { className: (0, p.$)({ [at().collapseButtonTooltip_hidden]: !l }), children: es }),
                                          ],
                                      }),
                            [l, es, c, u],
                        );
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(at().root, s),
                        style: H,
                        ref: o,
                        children: [
                            (0, m.jsxs)('div', {
                                className: at().logoWrapper,
                                children: [
                                    (0, m.jsx)(eq.N, {
                                        href: '/',
                                        className: at().logoLink,
                                        'aria-label': h({ id: 'navigation.page-main' }),
                                        children: (0, m.jsx)(eT.gu, { className: at().logo, collapsed: l, shownAnimation: d, lang: v }),
                                    }),
                                    e_,
                                ],
                            }),
                            G &&
                                (0, m.jsx)(I.HL, {
                                    variant: 'div',
                                    type: 'text',
                                    size: 'xs',
                                    weight: 'medium',
                                    className: (0, p.$)(at().subTitle, { [at().title_animate]: d, [at().title_collapsed]: l, [at().subTitle_withCursorPointer]: $ }),
                                    onClick: el,
                                    children: (0, m.jsx)(A.A, { id: 'navigation.best-recommendations' }),
                                }),
                            (0, m.jsx)('div', {
                                className: at().scrollableContainer,
                                children: (0, m.jsxs)('div', {
                                    className: at().scrollableContent,
                                    children: [
                                        (0, m.jsx)(ek, {
                                            className: (0, p.$)(at().navigation, { [at().navigation_new]: Z, [at().navigation_gapFill]: !1 }),
                                            collapsed: l,
                                            'aria-label': h({ id: 'navigation.main-menu' }),
                                            children: eu,
                                        }),
                                        (0, m.jsx)(eZ.WithOffline, {
                                            fallback: (0, m.jsx)(t1, { style: H, isCollapsed: l, withCollapseAnimation: !!d, className: at().pinsList }),
                                        }),
                                        U && (0, m.jsx)(aP, { shouldFetchOffers: F, isCollapsed: l }),
                                        !q && !1,
                                        z && (0, m.jsx)(aW, { isCollapsed: l, isActive: O.isShimmerActive }),
                                        W && (0, m.jsx)(aF, { optionOffer: O, isCollapsed: l, setForceUpdateElement: P }),
                                    ],
                                }),
                            }),
                            (0, m.jsx)(aZ, { withUserProfileAnimation: d, isCollapsed: l }),
                            ei &&
                                null !== ee &&
                                (0, m.jsx)(e$.S, {
                                    isOpened: X,
                                    onOpenChange: J,
                                    placement: 'right',
                                    positionElement: ee,
                                    textVariant: 'collectionFreemium',
                                    renderChildren: er,
                                }),
                            Y &&
                                (0, m.jsxs)(S.a, {
                                    className: at().bestRecommendationsModal,
                                    headerClassName: at().bestRecommendationsModalHeader,
                                    contentClassName: at().bestRecommendationsModalContent,
                                    open: y.isOpened,
                                    onOpenChange: y.onOpenChange,
                                    onClose: y.close,
                                    size: 'fitContent',
                                    placement: 'center',
                                    overlayColor: 'full',
                                    labelClose: h({ id: 'interface-actions.close' }),
                                    children: [
                                        (0, m.jsx)(E.I, { variant: 'musicLogo', className: at().bestRecommendationsModalLogo }),
                                        (0, m.jsx)(I.HL, {
                                            className: at().bestRecommendationsModalText,
                                            variant: 'div',
                                            size: 'm',
                                            weight: 'normal',
                                            dangerouslySetInnerHTML: { __html: h({ id: 'about-app.explicit-content' }) },
                                        }),
                                    ],
                                }),
                        ],
                    });
                }),
                aX = (0, b.forwardRef)((e, t) =>
                    (0, m.jsx)(eO.r, { page: eD.l.SIDEBAR, places: [eR.R.SIDEBAR_BANNER], children: (0, m.jsx)(aQ, { forwardRef: t, ...e }) }),
                );
            var aJ = a(8950),
                a0 = a.n(aJ);
            let a1 = (0, h.PA)((e) => {
                    let { className: t } = e,
                        { experiments: a } = (0, L.g)(),
                        i = eY(),
                        { formatMessage: n } = (0, g.A)(),
                        r = eK(),
                        s = n({ id: 'navigation.main-menu' }),
                        o = eQ(),
                        l = !0,
                        d = (0, b.useMemo)(
                            () => ({
                                [ez.SEARCH]: n({ id: 'navigation.search' }),
                                [ez.HOME]: l ? n({ id: 'navigation.page-my-vibe' }) : n({ id: 'navigation.page-main' }),
                                [ez.FOR_YOU_AND_TRENDS]: n({ id: 'navigation.page-for-you-and-trends' }),
                                [ez.COLLECTION]: n({ id: 'navigation.page-collection' }),
                                [ez.NON_MUSIC]: n({ id: 'entity-names.podcasts-and-books' }),
                                [ez.KIDS]: n({ id: 'kids.for-kids' }),
                                [ez.CONCERTS]: n({ id: 'entity-names.concerts' }),
                            }),
                            [n, l],
                        ),
                        c = (0, b.useCallback)(
                            (e, t) =>
                                e.id === ez.CONCERTS && a.checkExperiment(K.z.WebNextConcertsTicketIcon, 'on')
                                    ? (0, m.jsx)(t8, { isSelected: t || l })
                                    : l
                                      ? (0, m.jsx)(E.I, { variant: t ? e.iconNewVersionSelected : e.iconNewVersion, size: 'xs' })
                                      : (0, m.jsx)(E.I, { variant: t ? e.iconSelected : e.icon, size: 'm' }),
                            [a, l],
                        ),
                        u = (0, C.c)((e, t) => () => {
                            o(e, t);
                        });
                    return (0, m.jsx)('div', {
                        className: (0, p.$)(a0().root, t),
                        children: (0, m.jsx)(ek, {
                            collapsed: !0,
                            direction: 'horizontal',
                            'aria-label': s,
                            children: (0, m.jsx)(eP, {
                                children: (0, m.jsxs)(m.Fragment, {
                                    children: [
                                        r.map((e) => {
                                            let t = i(e.availablePaths);
                                            return (0, m.jsx)(
                                                e7,
                                                {
                                                    config: e.onboardingConfig,
                                                    children: (0, m.jsx)(ew, {
                                                        'data-intersection-property-id': eU.N,
                                                        selected: t,
                                                        isNewVisualVersion: l,
                                                        children: (0, m.jsxs)(eq.N, {
                                                            href: e.isEnabled && !t ? e.path : void 0,
                                                            role: 'link',
                                                            'aria-disabled': !e.isEnabled,
                                                            tabIndex: e.isEnabled ? 0 : -1,
                                                            className: (0, p.$)({ [a0().disabledNavigationItem]: !e.isEnabled }),
                                                            onClick: u(e.analyticsParams.entityType, e.analyticsParams.to),
                                                            'data-test-id': eX[e.id],
                                                            children: [
                                                                c(e, t),
                                                                (0, m.jsx)(I.HL, {
                                                                    variant: 'span',
                                                                    type: 'controls',
                                                                    size: 'm',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    children: d[e.id],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                                        !l && (0, m.jsx)(ew, { children: (0, m.jsx)(aV.F, { className: a0().user, variant: 'mobile' }) }),
                                    ],
                                }),
                            }),
                        }),
                    });
                }),
                a2 = (0, h.PA)((e) => {
                    var t;
                    let { className: a, externalIsCollapsed: i, externalSetIsCollapsed: n } = e,
                        r = (0, eb.N)().get(ex.oo),
                        s = ev(),
                        {
                            settings: { isMobile: o },
                        } = (0, L.g)(),
                        [l, d] = (0, b.useState)(null != (t = r.get(ef.c.NavbarCollapsed)) ? t : s),
                        [c, u] = (0, b.useState)(!1),
                        _ = (() => {
                            let e = (0, eA.st)(),
                                { hash: t } = (0, eA.gf)(),
                                a = (0, er.U)(),
                                {
                                    settings: { isMobile: i },
                                } = (0, L.g)();
                            return (0, b.useCallback)(
                                (n) => {
                                    if (!e) return;
                                    let r = (0, eg.Fx)({
                                        params: {
                                            hash: t,
                                            pageId: eg.QT.Sidebar,
                                            sidebarSize: n || i ? eg.JQ.Small : eg.JQ.Medium,
                                            sidebarPosition: i ? eg.Vw.Bottom : eg.Vw.Left,
                                        },
                                        logger: a,
                                        context: 'useSendEventOnSidebarOpened',
                                    });
                                    r && (0, eg.U0)(e.evgenInstance, r);
                                },
                                [e, t, i, a],
                            );
                        })(),
                        h = null != i ? i : l,
                        v = null != n ? n : d,
                        x = (0, b.useMemo)(() => (o ? a1 : aX), [o]),
                        f = (0, C.c)((e) => {
                            e.stopPropagation(), e.preventDefault();
                            let t = !h;
                            r.set(ef.c.NavbarCollapsed, t, { expires: 180 }), v(t), u(!0);
                        });
                    return (
                        (0, b.useEffect)(() => {
                            _(h || s);
                        }, [s, h, _]),
                        (0, m.jsx)('aside', {
                            className: (0, p.$)(eC().root, { [eC().root_collapsed]: h || s }, a),
                            'data-test-id': N.e8.navbar.NAVBAR,
                            children: (0, m.jsx)(x, { handleClick: f, isCollapsed: h || s, shownAnimation: c }),
                        })
                    );
                }),
                a5 = { pp: 'g', ps: 'clni', p2: 'joqc', puid1: '', puid2: '', puid3: '' };
            var a3 = a(7050),
                a4 = (function (e) {
                    return (e.PLAYER = 'branded_player'), e;
                })({});
            let a6 = (0, h.PA)(() => {
                let {
                        advertBanners: {
                            banners: { brandedPlayerBanner: e },
                        },
                    } = (0, L.g)(),
                    t = (0, C.c)(() => {
                        e.setType(en.h.BRANDING);
                    }),
                    a = (0, C.c)((t) => {
                        ((e) =>
                            (0, a3.m)(e) &&
                            e.type === a4.PLAYER &&
                            'object' == typeof e.payload &&
                            null !== e.payload &&
                            !Array.isArray(e.payload) &&
                            'thumb' in e.payload &&
                            ((e) =>
                                !!(
                                    'object' == typeof e &&
                                    null !== e &&
                                    'href' in e &&
                                    'string' == typeof e.href &&
                                    'width' in e &&
                                    'number' == typeof e.width &&
                                    'height' in e &&
                                    'number' == typeof e.height
                                ))(e.payload.thumb) &&
                            'modal' in e.payload &&
                            ((e) =>
                                null === e ||
                                !!(
                                    'object' == typeof e &&
                                    'imageUri' in e &&
                                    'string' == typeof e.imageUri &&
                                    'content' in e &&
                                    'string' == typeof e.content &&
                                    'primaryHref' in e &&
                                    'string' == typeof e.primaryHref &&
                                    'shouldShowSecondaryButton' in e &&
                                    'boolean' == typeof e.shouldShowSecondaryButton &&
                                    'secondaryText' in e &&
                                    'string' == typeof e.secondaryText
                                ))(e.payload.modal))(t.data) && e.setPayload(t.data.payload);
                    });
                return ((0, b.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, b.useEffect)(
                    () => (
                        window.addEventListener('message', a),
                        () => {
                            window.removeEventListener('message', a);
                        }
                    ),
                    [a],
                ),
                e.isVisible)
                    ? (0, m.jsx)(X.N, {
                          ownerId: Q.P,
                          containerId: 'adfox_175861261312993498',
                          params: a5,
                          onLoad: t,
                          onError: e.toggleHasErrorTrue,
                          onNoAds: e.toggleNoAdsTrue,
                      })
                    : null;
            });
            var a7 = a(55332),
                a9 = a(95329),
                a8 = a(53022),
                ie = a(30743),
                it = a(48955),
                ia = a(22266),
                ii = a(88386),
                ir = a.n(ii);
            let is = (0, h.PA)((e) => {
                    let { advertData: t } = e,
                        {
                            settings: { isMobile: a },
                        } = (0, L.g)(),
                        { formatMessage: i } = (0, g.A)(),
                        n = !!t.advertiserInfoUrl || !!t.clientLegalInfo,
                        r = (0, b.useCallback)(() => {
                            window.open(t.advertiserInfoUrl, '_blank', 'noreferrer noopener');
                        }, [t.advertiserInfoUrl]);
                    return n
                        ? (0, m.jsxs)(tS.W1, {
                              className: ir().contextMenuButton,
                              size: 'xxs',
                              icon: (0, m.jsx)(E.I, { size: 'xxs', variant: 'more', className: ir().contextMenuIcon }),
                              isMobile: a,
                              ariaLabel: i({ id: 'interface-actions.context-menu' }),
                              children: [
                                  t.clientLegalInfo && (0, m.jsx)(I.HL, { variant: 'div', size: 's', className: ir().contextMenuHeader, children: t.clientLegalInfo }),
                                  t.advertiserInfoUrl &&
                                      (0, m.jsx)(tS.Dr, {
                                          onClick: r,
                                          icon: (0, m.jsx)(E.I, { variant: 'info', size: 'xxs' }),
                                          children: (0, m.jsx)(A.A, { id: 'ads.about-advertiser' }),
                                      }),
                              ],
                          })
                        : null;
                }),
                io = (0, h.PA)((e) => {
                    var t, a, i;
                    let { className: n } = e,
                        { advert: r } = (0, L.g)();
                    return r.isAdvertDisabled(ia.f.AUDIO) || !(r.data && r.isAudioAdvert)
                        ? null
                        : (0, m.jsx)('div', {
                              className: n,
                              children: (0, m.jsx)(it.b, {
                                  data: r.data,
                                  mediaContent: (0, m.jsxs)('div', {
                                      className: ir().imageContainer,
                                      children: [
                                          (0, m.jsx)(tl._V, {
                                              className: (0, p.$)(ir().image, { [ir().image_fallback]: !(null == (t = r.data) ? void 0 : t.iconSrc) }),
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              src: null == (a = r.data) ? void 0 : a.iconSrc,
                                              fallbackIconVariant: 'picture',
                                              alt: '',
                                          }),
                                          (0, m.jsx)(tl._V, {
                                              className: ir().backgroundImage,
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              src: null == (i = r.data) ? void 0 : i.iconSrc,
                                              fallbackIconVariant: 'picture',
                                              alt: '',
                                          }),
                                          (0, m.jsx)(is, { advertData: r.data }),
                                      ],
                                  }),
                                  linkClassName: ir().linkButton,
                              }),
                          });
                });
            var il = a(45219),
                id = a(42498),
                ic = a.n(id),
                iu = a(74196),
                i_ = a(378),
                im = a(72676),
                ip = a(99169),
                ih = a(90040),
                iv = a(57249),
                ix = a(65493),
                ib = a(65497),
                ig = a(63919),
                iA = a.n(ig),
                iN = a(49124);
            let iC = ix.default.default(
                () =>
                    Promise.resolve()
                        .then(a.bind(a, 90040))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = iN.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, ih.setWasmUrl)(new URL(iv, e).href);
            }
            let iy = (0, h.PA)((e) => {
                let { className: t, thumbData: a, onThumbAction: i } = e,
                    { sonataState: n } = (0, L.g)(),
                    { formatMessage: r } = (0, g.A)(),
                    [s, o] = (0, b.useState)(null),
                    [l, d] = (0, b.useState)(null),
                    c = (0, b.useRef)(null),
                    u = (0, b.useRef)(null),
                    _ = (0, C.c)(() => {
                        n.status === im.MT.PLAYING ? null == s || s.play() : null == s || s.pause();
                    });
                (0, b.useEffect)(() => {
                    if (!a) return;
                    if ((0, ib.J)(a.href)) return void d(a.href);
                    let e = ip.z[a.href];
                    e
                        ? e().then((e) => {
                              (0, ib.J)(e) ? d(e) : d(''.concat(window.location.origin).concat(e));
                          })
                        : d(a.href);
                }, [a]),
                    (0, b.useEffect)(() => {
                        s && (s.setUseFrameInterpolation(!1), s.setRenderConfig({ devicePixelRatio: 0.1 }));
                    }, [s]),
                    (0, b.useEffect)(() => {
                        if (s)
                            return (
                                s.addEventListener('load', _),
                                () => {
                                    s.removeEventListener('load', _);
                                }
                            );
                    }, [s, _, n.status]),
                    (0, b.useEffect)(() => {
                        _();
                    }, [s, _, n.status]),
                    (0, b.useEffect)(
                        () => () => {
                            u.current && clearTimeout(u.current);
                        },
                        [],
                    );
                let h = (0, C.c)(() => {
                        u.current && (clearTimeout(u.current), (u.current = null)), null == i || i();
                    }),
                    v = (0, C.c)(() => {
                        i &&
                            (u.current && clearTimeout(u.current),
                            (u.current = setTimeout(() => {
                                null == i || i(), (u.current = null);
                            }, 800)));
                    }),
                    x = (0, C.c)(() => {
                        u.current && (clearTimeout(u.current), (u.current = null));
                    }),
                    f = (0, $.L)(() => {
                        if (a)
                            return { '--thumb-width': ''.concat(a.width, 'px'), '--thumb-height': ''.concat(a.height, 'px'), '--thumb-cursor': i ? 'pointer' : 'auto' };
                    });
                return l
                    ? i
                        ? (0, m.jsx)('div', {
                              className: iA().root,
                              style: f,
                              children: (0, m.jsx)(T.$, {
                                  ref: c,
                                  className: (0, p.$)(iA().container, t),
                                  onClick: h,
                                  onMouseEnter: v,
                                  onMouseLeave: x,
                                  withRipple: !1,
                                  'aria-label': r({ id: 'branded-player.branding-integration' }),
                                  children: (0, m.jsx)(iC, { src: l, loop: !0, dotLottieRefCallback: o, layout: { align: [0, 1] } }, l),
                              }),
                          })
                        : (0, m.jsx)('div', {
                              className: iA().root,
                              style: f,
                              children: (0, m.jsx)('div', {
                                  ref: c,
                                  className: (0, p.$)(iA().container, t),
                                  children: (0, m.jsx)(iC, { src: l, loop: !0, dotLottieRefCallback: o, layout: { align: [0, 1] } }, l),
                              }),
                          })
                    : null;
            });
            var iT = a(20213),
                iE = a(78648),
                iS = a.n(iE);
            let iB = (0, h.PA)((e) => {
                var t;
                let { modal: a } = e,
                    {
                        paywall: i,
                        advertBanners: {
                            banners: { brandedPlayerBanner: n },
                        },
                    } = (0, L.g)(),
                    { contentRootRef: r } = (0, P.g)(),
                    { formatMessage: s } = (0, g.A)(),
                    o = (0, tv.Z)(a.primaryHref),
                    l = (0, C.c)((e) => {
                        var t, a;
                        null == (t = (a = n.modal).onOpenChange) || t.call(a, e);
                    });
                (0, iT.s)({ enabled: n.modal.isOpened, onChange: n.modal.close });
                let d = { '--modal-bottom-offset': ''.concat(null == (t = n.payload) ? void 0 : t.thumb.height, 'px') };
                return (0, m.jsxs)(S.a, {
                    size: 'fitContent',
                    placement: 'default',
                    open: n.modal.isOpened,
                    onOpenChange: l,
                    className: iS().root,
                    contentClassName: iS().modalContent,
                    portalNode: r,
                    showHeader: !1,
                    closeOnOutsidePress: !1,
                    lockScroll: !1,
                    withOverlay: !1,
                    enableSwipe: !0,
                    style: d,
                    children: [
                        (0, m.jsxs)('header', {
                            children: [
                                a.imageUri && (0, m.jsx)(tl._V, { src: a.imageUri, className: iS().image }),
                                (0, m.jsx)(T.$, {
                                    className: iS().closeButton,
                                    color: 'primary',
                                    variant: 'text',
                                    radius: 'round',
                                    size: 'xxs',
                                    onClick: n.modal.close,
                                    icon: (0, m.jsx)(E.I, { variant: 'close', size: 'xs' }),
                                    'aria-label': s({ id: 'interface-actions.close' }),
                                }),
                            ],
                        }),
                        (0, m.jsx)(I.HL, { variant: 'span', className: iS().content, lineClamp: 2, children: a.content }),
                        (0, m.jsxs)('div', {
                            className: iS().actions,
                            children: [
                                (0, m.jsx)(T.$, {
                                    size: 's',
                                    color: 'primary',
                                    variant: 'default',
                                    radius: 'xxxl',
                                    onClick: o,
                                    className: iS().button,
                                    children: (0, m.jsx)(I.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        lineClamp: 1,
                                        children: (0, m.jsx)(A.A, { id: 'branded-player.to-website' }),
                                    }),
                                }),
                                a.shouldShowSecondaryButton &&
                                    (0, m.jsx)(T.$, {
                                        size: 's',
                                        color: 'secondary',
                                        variant: 'default',
                                        radius: 'xxxl',
                                        onClick: i.openModal,
                                        className: iS().button,
                                        children: (0, m.jsx)(I.HL, {
                                            variant: 'span',
                                            size: 'm',
                                            lineClamp: 1,
                                            children: a.secondaryText || (0, m.jsx)(A.A, { id: 'branded-player.hide' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var iI = a(78305),
                ij = a(22191),
                ik = a(44128),
                iP = a(70208),
                iw = a(64308),
                iL = a.n(iw),
                iO = a(52843),
                iD = a(12623),
                iR = a(95731),
                iM = a.n(iR);
            let iF = (e) => {
                    let { progress: t, position: a, duration: i, timecodeClassName: n, currentTimecodeClassName: r, progressElementWidth: s, shouldHoldTimecode: o } = e,
                        l = (0, ij.P)(a),
                        d = (0, ij.P)(i),
                        c = (0, b.useRef)(null),
                        [u, _] = (0, b.useState)(0),
                        h = (0, iO.E)(Math.round(i), Math.round(i));
                    (0, b.useEffect)(() => {
                        c.current && _(Math.round(c.current.getBoundingClientRect().width));
                    }, [h.length, s]);
                    let v = Math.round((t / 100) * s),
                        x = 0 !== s ? s - u : 0,
                        f = Math.min(Math.max(v - u / 2, 0), x),
                        g = (0, $.L)(() => {
                            if (!o) return { '--timecode-position': ''.concat(f, 'px') };
                        });
                    return (0, m.jsxs)(m.Fragment, {
                        children: [
                            (0, m.jsx)(iD.d, {
                                role: 'text',
                                'aria-label': d,
                                value: h,
                                variant: 'end',
                                className: (0, p.$)(iM().timecode, n, iM().timecode_end, { [iM().timecode_end_hidden]: !(v < x - u / 2) }),
                            }),
                            (0, m.jsx)(iD.d, {
                                role: 'text',
                                'aria-label': l,
                                style: g,
                                ref: c,
                                value: (0, iO.E)(Math.round(a), Math.round(i)),
                                variant: 'start',
                                className: (0, p.$)(iM().timecode, iM().timecode_current, n, r, {
                                    [iM().timecode_current_animation]: u > 0,
                                    [iM().timecode_current_hidden]: o && !(v > 2 * u),
                                }),
                            }),
                        ],
                    });
                },
                iU = (0, h.PA)((e) => {
                    var t, a, i;
                    let { sliderClassName: n, disabled: r, isMobile: s, progressbarClassName: o, showThumbVariant: l, withTimecode: d, sonataPlaybackId: c } = e,
                        u = (0, ik.e)(),
                        _ = null == u ? void 0 : u.getState(c),
                        h = (0, b.useRef)(!1),
                        {
                            advert: v,
                            sonataState: x,
                            settings: f,
                            advertBanners: {
                                banners: { brandedPlayerBanner: A },
                            },
                        } = (0, L.g)(),
                        { formatMessage: y } = (0, g.A)(),
                        T = (0, iI.r)(),
                        [E, S] = (0, b.useState)(x.position),
                        [B, I] = (0, b.useState)(x.duration),
                        j = (0, ij.P)(Math.round(null != E ? E : 0)),
                        k = E && B ? (100 * Math.min(E, B)) / B : 0,
                        P = (0, b.useRef)(null),
                        [w, O] = (0, b.useState)(0),
                        D = w > 0,
                        { state: R, toggleTrue: M, toggleFalse: F } = (0, tz.e)(!1),
                        { state: U, toggleTrue: z, toggleFalse: W } = (0, tz.e)(!1),
                        { isVisibilityRestored: V } = (() => {
                            let { state: e, toggleTrue: t, toggleFalse: a } = (0, tz.e)(!1);
                            return (
                                (0, b.useEffect)(() => {
                                    let e = new AbortController();
                                    return (
                                        document.addEventListener(
                                            'visibilitychange',
                                            () => {
                                                document.hidden || t();
                                            },
                                            { signal: e.signal },
                                        ),
                                        () => {
                                            e.abort();
                                        }
                                    );
                                }, [t]),
                                (0, b.useEffect)(() => {
                                    if (!e) return;
                                    let t = requestAnimationFrame(() => {
                                        a();
                                    });
                                    return () => {
                                        cancelAnimationFrame(t);
                                    };
                                }, [e, a]),
                                { isVisibilityRestored: e }
                            );
                        })(),
                        H = (0, $.L)(() => {
                            var e, t;
                            return A.isVisible && (null == (e = A.payload) ? void 0 : e.thumb)
                                ? { thumb: A.payload.thumb, onThumbAction: A.modal.open }
                                : f.selectedThumbId && f.selectedThumbId !== iP.T.DEFAULT
                                  ? { thumb: null == (t = (0, ip.r)(y).get(f.selectedThumbId)) ? void 0 : t.thumb }
                                  : void 0;
                        });
                    (0, b.useEffect)(() => {
                        (null == u ? void 0 : u.state.playerState.status.value) === im.MT.PLAYING && W();
                    }, [W, null == u ? void 0 : u.state.playerState.status.value]),
                        (0, b.useEffect)(() => {
                            let e = null == u ? void 0 : u.state.queueState.currentEntity.onChange(z);
                            return (
                                W(),
                                () => {
                                    null == e || e();
                                }
                            );
                        }, [z, W, null == u ? void 0 : u.state.queueState.currentEntity]);
                    let K = (0, C.c)((e, t) => {
                            v.isAdvertShown || ((h.current = !t), t ? null == u || u.setProgress(e, c) : S(e));
                        }),
                        G = (0, C.c)((e, t) => {
                            null !== e && null !== t && (e === 1 / 0 ? (I(0), S(0)) : (I(e), h.current || S(t)));
                        });
                    (0, b.useEffect)(() => {
                        c || G(x.duration, x.position);
                    }, [x.duration, x.position, G, c]),
                        (0, b.useEffect)(() => {
                            var e;
                            if (!c) return;
                            let t =
                                null == _ || null == (e = _.playerState)
                                    ? void 0
                                    : e.progress.onChange((e) => {
                                          e && G(e.duration, e.position);
                                      });
                            return () => {
                                null == t || t();
                            };
                        }, [c, null == _ || null == (t = _.playerState) ? void 0 : t.progress, G]),
                        (0, b.useEffect)(() => {
                            var e;
                            let t =
                                null == T || null == (e = T.audioAdvertPlayback)
                                    ? void 0
                                    : e.state.playerState.progress.onChange((e) => {
                                          e && v.isAdvertShown && G(e.duration, e.position);
                                      });
                            return () => {
                                null == t || t();
                            };
                        }, [null == T || null == (a = T.audioAdvertPlayback) ? void 0 : a.state.playerState.progress, G, v.isAdvertShown]);
                    let Y = (k / 100) * w - 6;
                    (0, b.useEffect)(() => {
                        let e = new ResizeObserver(() => {
                            var e, t;
                            O(Math.round(null != (t = null == (e = P.current) ? void 0 : e.clientWidth) ? t : 0));
                        });
                        return (
                            P.current && e.observe(P.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, []);
                    let q = {
                        '--size-thumb': ''.concat(12, 'px'),
                        '--track-progress': ''.concat(k, '%'),
                        '--thumb-position': ''.concat(Y, 'px'),
                        ...((U || V) && { '--transition-disabled': 'none' }),
                    };
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(iL().root, { [iL().root_focusVisible]: R, [iL().root_isPlayingTrack]: !v.isAdvertShown }),
                        style: q,
                        'data-test-id': N.Kq.changeTimecode.TIMECODE_WRAPPER,
                        children: [
                            !s &&
                                d &&
                                D &&
                                (0, m.jsx)(iF, {
                                    currentTimecodeClassName: H ? void 0 : (0, p.$)(iL().timecodeGroupCurrent, iL().important),
                                    timecodeClassName: iL().timecodeGroup,
                                    progress: k,
                                    position: null != E ? E : 0,
                                    duration: null != B ? B : 0,
                                    progressElementWidth: w,
                                    shouldHoldTimecode: !!H,
                                }),
                            (0, m.jsx)('div', { ref: P, className: (0, p.$)(iL().progressbar, o) }),
                            D && !H && (0, m.jsx)('div', { className: iL().thumb }),
                            H &&
                                (0, m.jsx)(iy, {
                                    className: iL().brandedThumb,
                                    thumbData: null == H ? void 0 : H.thumb,
                                    onThumbAction: null == H ? void 0 : H.onThumbAction,
                                }),
                            (null == (i = A.payload) ? void 0 : i.modal) && (0, m.jsx)(iB, { modal: A.payload.modal }),
                            (0, m.jsx)(i_.A, {
                                'aria-valuetext': j,
                                onClick: F,
                                onBlur: F,
                                onFocus: M,
                                className: (0, p.$)(iL().slider, iL().important, n),
                                disabled: r || v.isAdvertShown,
                                'aria-label': y({ id: 'player-actions.timecode-control' }),
                                showThumbVariant: l,
                                onChange: K,
                                maxValue: B ? Math.round(B) : 0,
                                mode: 'deferred',
                                value: Math.round(null != E ? E : 0),
                                trackSize: 's',
                                thumbSize: 's',
                                'data-test-id': N.Kq.changeTimecode.TIMECODE_SLIDER,
                            }),
                            (0, m.jsx)('div', { className: iL().backgroundProgressbar }),
                        ],
                    });
                });
            var iz = a(45303),
                iW = a(80346),
                iV = a(68535),
                iH = a(11805),
                iK = a(1456),
                iG = a(27616),
                iY = a(68912),
                i$ = a(39400),
                iq = a(41812),
                iZ = a(11323),
                iQ = a(92744),
                iX = a(90829),
                iJ = a(61748);
            let i0 = 'player-region';
            var i1 = a(9536),
                i2 = a(99622),
                i5 = a.n(i2);
            let i3 = (e) => {
                    let { className: t, ariaLabel: a, onClick: i, forwardRef: n } = e;
                    return (0, m.jsx)('div', {
                        ref: n,
                        className: (0, p.$)(i5().root, t),
                        children: (0, m.jsx)(T.$, {
                            className: i5().button,
                            radius: 'round',
                            size: 's',
                            color: 'secondary',
                            withRipple: !1,
                            'aria-label': a,
                            icon: (0, m.jsx)(E.I, { variant: 'fullscreen', size: 'xs' }),
                            onClick: i,
                            'data-test-id': N.e8.player.FULLSCREEN_PLAYER_BUTTON,
                        }),
                    });
                },
                i4 = (0, b.forwardRef)((e, t) => (0, m.jsx)(i3, { forwardRef: t, ...e }));
            var i6 = a(10910),
                i7 = a(55165),
                i9 = a.n(i7);
            let i8 = (0, h.PA)((e) => {
                var t;
                let {
                        className: a,
                        entityMeta: i,
                        isLiked: n,
                        isDisliked: r,
                        onLikeClick: s,
                        onDislikeClick: o,
                        renderSonataControls: l,
                        withLike: d,
                        withDislike: c,
                        withExtraControls: u,
                        withFullscreen: _,
                        withContextMenu: h = !0,
                        withTrackAndArtistLinks: v = !0,
                        sonataPlaybackId: x,
                        sonataVolume: f,
                    } = e,
                    {
                        user: S,
                        sonataState: j,
                        fullscreenPlayer: k,
                        settings: { isMobileLandscapeHeight: P },
                        advert: w,
                        track: O,
                        experiments: D,
                    } = (0, L.g)(),
                    [R, M] = (0, b.useState)(!1),
                    [F, U] = (0, b.useState)(!1),
                    { formatMessage: z } = (0, g.A)(),
                    W = _ && !j.isGenerativeContext,
                    V = j.canSpeed && (null == i ? void 0 : i.isNonMusic),
                    H = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (t = i.mainAlbum) ? void 0 : t.isPodcast),
                    G = null == i ? void 0 : i.isTrackAudiobook,
                    Y = (0, iV.d)(),
                    q = (0, i1.K)(i),
                    Z = (0, C.c)(() => {
                        O.open({ trackId: null == i ? void 0 : i.id, albumId: null == i ? void 0 : i.albumId });
                    }),
                    Q = (0, C.c)((e) => {
                        e.stopPropagation();
                    }),
                    X = (0, C.c)(async (e) => {
                        await Y(j, e, x);
                    }),
                    J = (0, C.c)((e) => {
                        let t = e.target,
                            a = t instanceof Element && ['DIV', 'SECTION', 'SPAN'].includes(t.tagName);
                        i && W && a && !w.isAdvertShown && k.showFullscreenPlayerModal();
                    }),
                    ee = (0, C.c)((e) => {
                        if (!j.isGenerativeContext && i) {
                            if (((0, y.P)(e, i9().ripple), 2 === e.detail)) {
                                O.close(), J(e);
                                return;
                            }
                            _ && 1 === e.detail && (null == i ? void 0 : i.hasTrackLink) && !k.modal.isOpened && Z();
                        }
                    }),
                    et = (0, b.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e,
                                a = ''.concat(z({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(z({ id: 'warning-messages.can-break-accessibility' })),
                                n = t ? void 0 : k.showSyncLyrics;
                            return (0, m.jsx)(T.$, {
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled: !(null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature) || P,
                                'aria-hidden': !(null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature),
                                withRipple: !1,
                                'aria-label': a,
                                icon: (0, m.jsx)(E.I, { variant: 'syncLyrics', size: 'xs' }),
                                onClick: n,
                                'data-test-id': N.e8.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON,
                            });
                        },
                        [z, k.showSyncLyrics, null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature, P],
                    ),
                    ea = (0, b.useMemo)(
                        () =>
                            (null == i ? void 0 : i.isNonMusic) || w.isAdvertShown
                                ? null
                                : S.isAuthorized && !S.hasPlus
                                  ? (0, m.jsx)(e$.S, { placement: 'top', textVariant: 'sync-lyrics', renderChildren: et })
                                  : (0, m.jsx)(iX.Z, { isEnabled: !S.isAuthorized, placement: 'top', textVariant: 'sync-lyrics', renderChildren: et }),
                        [null == i ? void 0 : i.isNonMusic, w.isAdvertShown, S.isAuthorized, et, S.hasPlus],
                    ),
                    ei = (0, b.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e,
                                a = t ? void 0 : k.showPlayQueue;
                            return (0, m.jsx)(T.$, {
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled: !i,
                                withRipple: !1,
                                'aria-label': z({ id: 'play-queue.title' }),
                                icon: (0, m.jsx)(E.I, { variant: 'playQueue', size: 'xs' }),
                                onClick: a,
                                'data-test-id': N.e8.player.PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON,
                            });
                        },
                        [i, k.showPlayQueue, z],
                    ),
                    en = (0, b.useMemo)(
                        () => (w.isAdvertShown ? null : (0, m.jsx)(iX.Z, { isEnabled: !S.isAuthorized, placement: 'top', textVariant: 'openQueue', renderChildren: ei })),
                        [w.isAdvertShown, S.isAuthorized, ei],
                    ),
                    er = (0, b.useMemo)(() => {
                        if (h && i && !j.isGenerativeContext && !w.isAdvertShown)
                            return (0, m.jsx)('div', {
                                onDoubleClick: Q,
                                children: (0, m.jsx)(i$._, {
                                    track: i,
                                    placement: 'top',
                                    className: i9().trackContextMenuIcon,
                                    open: R,
                                    onOpenChange: M,
                                    icon: (0, m.jsx)(E.I, { size: 'xxs', variant: 'more' }),
                                    size: 'xs',
                                    'data-test-id': N.e8.player.PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON,
                                }),
                            });
                    }, [w.isAdvertShown, i, Q, R, j.isGenerativeContext, h]),
                    es = (0, b.useMemo)(
                        () =>
                            i
                                ? G
                                    ? (0, m.jsx)(iK.Z, {
                                          afterTitle: er,
                                          explicitSize: 'xxxs',
                                          track: i,
                                          withAuthor: !0,
                                          withSecondaryColor: !0,
                                          withArtistLink: v,
                                          withContextMenuArtists: !0,
                                      })
                                    : H
                                      ? (0, m.jsx)(iG.w, {
                                            afterTitle: er,
                                            explicitSize: 'xxxs',
                                            track: i,
                                            withDate: !1,
                                            withSecondaryColor: !0,
                                            withPodcastName: !0,
                                            withAlbumTitleLink: v,
                                        })
                                      : (0, m.jsx)(iY.j, {
                                            afterTitle: er,
                                            track: i,
                                            withSecondaryColor: !0,
                                            withAlbumLink: !1,
                                            withTrackLink: v && !j.isGenerativeContext,
                                            withArtistLink: v,
                                            withContextMenuArtists: !0,
                                        })
                                : null,
                        [er, i, G, H, j.isGenerativeContext, v],
                    ),
                    eo = (0, $.L)(() =>
                        l
                            ? l({ isMobile: !1, entityMeta: i })
                            : (0, m.jsx)(iH.$, {
                                  className: (0, p.$)(i9().sonataControls, i9().important),
                                  withRepeat: !0,
                                  withShuffle: !0,
                                  isMobile: !1,
                                  entityMeta: i,
                              }),
                    ),
                    el = !0;
                return (0, m.jsx)('section', {
                    style: w.isAdvertShown ? void 0 : q,
                    className: (0, p.$)(i9().root, i9().important, a, { [i9().root_interactive]: _ }),
                    'data-test-id': N.e8.player.PLAYERBAR_DESKTOP,
                    'aria-labelledby': i0,
                    children: (0, m.jsxs)('div', {
                        className: i9().playerBar,
                        children: [
                            !j.isGenerativeContext &&
                                (0, m.jsx)(iU, {
                                    sliderClassName: i9().slider,
                                    progressbarClassName: i9().progressBar,
                                    disabled: !i,
                                    isMobile: !1,
                                    withTimecode: !0,
                                    sonataPlaybackId: x,
                                }),
                            (0, m.jsxs)('div', {
                                className: (0, p.$)(i9().player, { [i9().player_disabled]: !i }),
                                children: [
                                    _ && (0, m.jsx)('div', { onClick: ee, className: i9().triggerModal }),
                                    (0, m.jsx)(iu.q, { children: (0, m.jsx)(I.DZ, { variant: 'h3', id: i0, children: (0, m.jsx)(A.A, { id: 'a11y-regions.player' }) }) }),
                                    (0, m.jsx)('div', {
                                        className: i9().info,
                                        children: (0, m.jsx)('div', {
                                            className: i9().infoCard,
                                            children:
                                                i &&
                                                !w.isAdvertShown &&
                                                (0, m.jsxs)(m.Fragment, {
                                                    children: [
                                                        (0, m.jsxs)(td.t, {
                                                            radius: 's',
                                                            className: i9().coverContainer,
                                                            'data-test-id': N.e8.player.PLAYERBAR_DESKTOP_COVER_CONTAINER,
                                                            children: [
                                                                (0, m.jsx)(iZ.B, {
                                                                    className: i9().cover,
                                                                    src: i.coverUri,
                                                                    size: 100,
                                                                    fit: 'cover',
                                                                    withAvatarReplace: !0,
                                                                }),
                                                                W &&
                                                                    (0, m.jsxs)(B.m_, {
                                                                        placement: 'top',
                                                                        offsetOptions: 4,
                                                                        children: [
                                                                            (0, m.jsx)(i4, {
                                                                                ariaLabel: z({ id: 'player-actions.fullscreen-button' }),
                                                                                onClick: k.showFullscreenPlayerModal,
                                                                            }),
                                                                            (0, m.jsx)(B.ZI, { children: (0, m.jsx)(A.A, { id: 'player-actions.fullscreen' }) }),
                                                                        ],
                                                                    }),
                                                            ],
                                                        }),
                                                        (0, m.jsx)('div', { className: i9().description, children: es }),
                                                    ],
                                                }),
                                        }),
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: (0, p.$)(i9().sonata, { [i9().sonata_withReversedControls]: el }),
                                        children: [
                                            d &&
                                                (0, m.jsx)(eZ.WithOffline, {
                                                    fallback: (0, m.jsx)(iQ.c, { disabled: !i || w.isAdvertShown, isLiked: n, onClick: s, iconSize: 'xs' }),
                                                }),
                                            eo,
                                            c &&
                                                (0, m.jsx)(eZ.WithOffline, {
                                                    fallback: (0, m.jsx)(iq._, { disabled: !i || w.isAdvertShown, isDisliked: r, onClick: o, iconSize: 'xs' }),
                                                }),
                                        ],
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: i9().meta,
                                        children: [
                                            u &&
                                                !j.isGenerativeContext &&
                                                !w.isAdvertShown &&
                                                (0, m.jsxs)(m.Fragment, {
                                                    children: [
                                                        V && (0, m.jsx)(iJ.i, { iconSize: 'l' }),
                                                        ea,
                                                        en,
                                                        (0, m.jsx)(i6.p$, {
                                                            placement: 'bottom',
                                                            open: F,
                                                            onOpenChange: U,
                                                            icon: (0, m.jsx)(E.I, { variant: 'settings', size: 'xs' }),
                                                            size: 'xxxs',
                                                            referenceClassName: i9().settingsButton,
                                                        }),
                                                    ],
                                                }),
                                            (0, m.jsx)(iW.r, { variant: iz.q.VERTICAL, sonataVolume: null != f ? f : j.volume, onVolumeClick: X, playbackId: x }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var ne = a(41932),
                nt = a(65337),
                na = a.n(nt);
            let ni = (0, h.PA)((e) => {
                    var t;
                    let { className: a, entityMeta: i, isLiked: n, onLikeClick: r, renderSonataControls: s, withLike: o, withFullscreen: l, sonataPlaybackId: d } = e,
                        { user: c, sonataState: u, fullscreenPlayer: _, advert: h } = (0, L.g)(),
                        v = c.isAuthorized && i && !h.isAdvertShown,
                        x = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (t = i.mainAlbum) ? void 0 : t.isPodcast),
                        f = null == i ? void 0 : i.isTrackAudiobook,
                        g = (0, i1.K)(i),
                        C = (0, b.useCallback)(
                            (e) => {
                                if (h.isAdvertShown || !l) return;
                                let t = e.target,
                                    a = t instanceof Element && ['DIV', 'SECTION', 'IMG', 'SPAN'].includes(t.tagName);
                                i && a && !u.isGenerativeContext && _.showFullscreenPlayerModal();
                            },
                            [i, _, u.isGenerativeContext, h.isAdvertShown, l],
                        ),
                        y = (0, b.useMemo)(
                            () =>
                                h.isAdvertShown
                                    ? null
                                    : i
                                      ? f
                                          ? (0, m.jsx)(iK.Z, { explicitSize: 'xxxs', track: i, withAuthor: !0, withSecondaryColor: !0, withArtistLink: !1 })
                                          : x
                                            ? (0, m.jsx)(iG.w, {
                                                  explicitSize: 'xxxs',
                                                  track: i,
                                                  withDate: !1,
                                                  withSecondaryColor: !0,
                                                  withPodcastName: !0,
                                                  withAlbumTitleLink: !1,
                                              })
                                            : (0, m.jsx)(iY.j, { withArtistLink: !1, track: i, withSecondaryColor: !0, withAlbumLink: !1 })
                                      : (0, m.jsxs)('div', {
                                            className: na().shimmerMeta,
                                            children: [
                                                (0, m.jsx)(af.W, { className: na().shimmerMetaTitle }),
                                                (0, m.jsx)(af.W, { className: na().shimmerMetaDescription }),
                                            ],
                                        }),
                            [h.isAdvertShown, i, f, x],
                        ),
                        T = (0, $.L)(() =>
                            h.isAdvertShown
                                ? (0, m.jsx)('div', { className: na().infoCard })
                                : i
                                  ? (0, m.jsxs)('div', {
                                        className: na().infoCard,
                                        children: [
                                            (0, m.jsx)(td.t, {
                                                radius: 's',
                                                className: na().coverContainer,
                                                children: (0, m.jsx)(iZ.B, { className: na().cover, src: i.coverUri, size: 50, fit: 'cover', withAvatarReplace: !0 }),
                                            }),
                                            (0, m.jsx)('div', { className: na().description, children: y }),
                                        ],
                                    })
                                  : (0, m.jsxs)('div', {
                                        className: na().infoCard,
                                        children: [
                                            (0, m.jsx)(td.t, {
                                                radius: 's',
                                                className: na().coverContainer,
                                                children: (0, m.jsx)(af.W, { className: na().shimmerCover }),
                                            }),
                                            (0, m.jsx)('div', { className: na().description, children: y }),
                                        ],
                                    }),
                        ),
                        E = (0, $.L)(() => (s ? s({ isMobile: !0, entityMeta: i }) : (0, m.jsx)(iH.$, { isMobile: !0, entityMeta: i })));
                    return (0, m.jsxs)('section', {
                        style: h.isAdvertShown ? void 0 : g,
                        className: (0, p.$)(na().root, a),
                        onClick: C,
                        'data-test-id': N.e8.player.MOBILE_PLAYERBAR,
                        children: [
                            (0, m.jsx)(iu.q, { children: (0, m.jsx)(I.DZ, { variant: 'h3', id: i0, children: (0, m.jsx)(A.A, { id: 'a11y-regions.player' }) }) }),
                            !u.isGenerativeContext &&
                                (0, m.jsx)(ne.v, {
                                    className: na().backgroundProgress,
                                    sliderClassName: na().sliderChangeTimeCode,
                                    isMobile: !0,
                                    isFullscreen: !1,
                                    disabled: !i,
                                    sonataPlaybackId: d,
                                }),
                            (0, m.jsxs)('div', {
                                className: na().info,
                                children: [
                                    T,
                                    (0, m.jsxs)('div', {
                                        className: na().infoButtons,
                                        children: [
                                            o &&
                                                i &&
                                                v &&
                                                !h.isAdvertShown &&
                                                (0, m.jsx)(eZ.WithOffline, {
                                                    fallback: (0, m.jsx)(iQ.c, { isLiked: n, iconSize: 'xs', onClick: r, disabled: !c.isAuthorized }),
                                                }),
                                            E,
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                nn = (0, h.PA)((e) => {
                    let { className: t } = e,
                        {
                            settings: { isMobile: a },
                            sonataState: i,
                            fullscreenPlayer: n,
                        } = (0, L.g)(),
                        { isLiked: r, handleLike: s, isDisliked: o, handleDislike: l } = (0, ie.f)(),
                        d = (0, a8.z)(),
                        c = (0, C.c)(() => {
                            if (i.entityMeta) {
                                if (n.modal.isOpened) return void n.modal.close();
                                n.modal.open();
                            }
                        });
                    (0, b.useEffect)(() => {
                        if (!i.isGenerativeContext)
                            return (
                                null == d || d.addShortcutsListener(a9.M.MAIN, a7.l.TOGGLE_FULLSCREEN_PLAYER, c),
                                null == d || d.addShortcutsListener(a9.M.MAIN, a7.l.LIKE, s),
                                null == d || d.addShortcutsListener(a9.M.MAIN, a7.l.DISLIKE, l),
                                () => {
                                    null == d || d.removeShortcutsListener(a9.M.MAIN, a7.l.TOGGLE_FULLSCREEN_PLAYER),
                                        null == d || d.removeShortcutsListener(a9.M.MAIN, a7.l.LIKE),
                                        null == d || d.removeShortcutsListener(a9.M.MAIN, a7.l.DISLIKE);
                                }
                            );
                    }, [l, s, d, i.isGenerativeContext, i.entityMeta, c]);
                    let u = (0, $.L)(() =>
                        a
                            ? (0, m.jsx)(ni, {
                                  className: (0, p.$)(t, ic().root),
                                  entityMeta: i.entityMeta,
                                  isLiked: r,
                                  onLikeClick: s,
                                  withLike: !0,
                                  withFullscreen: !0,
                              })
                            : (0, m.jsx)(i8, {
                                  className: (0, p.$)(t, ic().root),
                                  entityMeta: i.entityMeta,
                                  isLiked: r,
                                  isDisliked: o,
                                  onDislikeClick: l,
                                  onLikeClick: s,
                                  withLike: !0,
                                  withDislike: !0,
                                  withExtraControls: !0,
                                  withFullscreen: !0,
                              }),
                    );
                    return (0, m.jsxs)(m.Fragment, { children: [u, (0, m.jsx)(io, { className: ic().adPopup }), (0, m.jsx)(a6, {}), (0, m.jsx)(il.e, {})] });
                });
            var nr = a(61251),
                ns = a.n(nr);
            let no = (0, h.PA)((e) => {
                let { className: t } = e,
                    {
                        redAlert: { text: a, buttonText: i, href: n },
                    } = (0, L.g)(),
                    r = (0, tv.Z)(n),
                    { theme: s } = (0, V.W)();
                return (0, m.jsx)('div', {
                    className: (0, p.$)(ns().wrapper, t),
                    'data-test-id': N.e8.redAlert.RED_ALERT,
                    children: (0, m.jsxs)('div', {
                        className: (0, p.$)(ns().root, { [ns().root_light]: s === U.S.Light }),
                        children: [
                            (0, m.jsx)(I.HL, {
                                className: ns().text,
                                type: 'controls',
                                variant: 'p',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': N.e8.redAlert.RED_ALERT_TEXT,
                                children: a,
                            }),
                            (0, m.jsx)(T.$, {
                                className: ns().button,
                                color: 'secondary',
                                size: 'm',
                                radius: 'xxxl',
                                onClick: r,
                                'data-test-id': N.e8.redAlert.RED_ALERT_BUTTON,
                                children: (0, m.jsx)(I.HL, { type: 'controls', variant: 'span', size: 'm', weight: 'medium', children: i }),
                            }),
                        ],
                    }),
                });
            });
            var nl = a(64170),
                nd = a(70314),
                nc = a(83278),
                nu = a.n(nc);
            let n_ = (0, h.PA)((e) => {
                var t, a, i, n, r;
                let { className: s, barBelow: o } = e,
                    { formatMessage: l } = (0, g.A)(),
                    { experiments: d } = (0, L.g)(),
                    [c, u] = (0, b.useState)(!1),
                    _ = null == (t = o.barBelowItem) ? void 0 : t.content.advDisclaimer,
                    h = d.checkExperiment(K.z.WebNextErids, 'on'),
                    v = (0, b.useMemo)(() => {
                        let e = { title: {}, text: {}, bg: {}, disclaimerTrigger: {} };
                        if (!o.barBelowItem) return e;
                        let { titleColor: t, textColor: a, bgColor: i, bgUrl: n } = o.barBelowItem.content;
                        t && (e.title.color = t), a && (e.text.color = a), i && (e.bg.backgroundColor = i), n && (e.bg.backgroundImage = 'url("'.concat(n, '")'));
                        let r = a || t;
                        return r && (e.disclaimerTrigger['--adv-disclaimer-color'] = r), e;
                    }, [o]),
                    x = (0, b.useMemo)(() => {
                        var e;
                        return null == (e = o.barBelowItem)
                            ? void 0
                            : e.content.buttons.map((e) => {
                                  var t, a;
                                  return (0, m.jsx)(
                                      nd.t,
                                      {
                                          anchorId: null == (t = o.barBelowItem) ? void 0 : t.anchorId,
                                          screenId: null == (a = o.barBelowItem) ? void 0 : a.screenId,
                                          button: e,
                                          buttonSize: 'l',
                                          hide: o.hide,
                                          feedbackToken: o.barBelowItem ? o.barBelowItem.feedbackToken : null,
                                      },
                                      e.text,
                                  );
                              });
                    }, [o]),
                    f = (0, b.useCallback)(
                        (e) => {
                            e.animationName.includes('show') ? o.setAnimationAlreadyBeenShown() : e.animationName.includes('hide') && o.setAnimationAlreadyBeenHidden();
                        },
                        [o],
                    ),
                    C = (0, b.useCallback)(
                        (e) => {
                            e.animationName.includes('show') && o.setAnimationAlreadyBeenStarted();
                        },
                        [o],
                    );
                return (0, m.jsx)(eO.r, {
                    page: eD.l.MUSIC_DEEPLINK_SCREEN,
                    places: [eR.R.TOP_BUTTON],
                    children: (0, m.jsxs)('section', {
                        className: (0, p.$)(
                            nu().root,
                            { [nu().root_hidden]: !o.isVisible && !o.hideWithAnimation, [nu().root_show]: o.showWithAnimation, [nu().root_hide]: o.hideWithAnimation },
                            s,
                        ),
                        style: v.bg,
                        onAnimationStart: C,
                        onAnimationEnd: f,
                        'aria-label': l({ id: 'bar-below.section-name' }),
                        'data-test-id': N.Kq.barBelow.BAR_BELOW,
                        children: [
                            (null == (a = o.barBelowItem) ? void 0 : a.content.imageUrl) &&
                                (0, m.jsx)(tl._V, {
                                    className: nu().image,
                                    'aria-hidden': !0,
                                    src: null == (i = o.barBelowItem) ? void 0 : i.content.imageUrl,
                                    fit: 'contain',
                                    withAvatarReplace: !0,
                                    withAspectRatio: !0,
                                    'data-test-id': N.Kq.barBelow.BAR_BELOW_IMAGE,
                                }),
                            (0, m.jsxs)('div', {
                                className: nu().content,
                                children: [
                                    (null == (n = o.barBelowItem) ? void 0 : n.content.title) &&
                                        (0, m.jsx)(I.DZ, {
                                            className: nu().title,
                                            variant: 'h3',
                                            style: v.title,
                                            lineClamp: 2,
                                            'data-test-id': N.Kq.barBelow.BAR_BELOW_TITLE_TEXT,
                                            children: o.barBelowItem.content.title,
                                        }),
                                    (null == (r = o.barBelowItem) ? void 0 : r.content.text) &&
                                        (0, m.jsx)(I.DZ, {
                                            className: nu().text,
                                            variant: 'h4',
                                            size: 'xs',
                                            style: v.text,
                                            lineClamp: 2,
                                            'data-test-id': N.Kq.barBelow.BAR_BELOW_SECONDARY_TEXT,
                                            children: o.barBelowItem.content.text,
                                        }),
                                ],
                            }),
                            (0, m.jsx)('div', { className: nu().buttons, children: x }),
                            _ &&
                                h &&
                                (0, m.jsx)('div', {
                                    className: nu().advDisclaimer,
                                    children: (0, m.jsxs)(aw.AM, {
                                        placement: 'left-end',
                                        open: c,
                                        onOpenChange: u,
                                        offsetOptions: { mainAxis: 8 },
                                        transform: !1,
                                        children: [
                                            (0, m.jsx)('button', {
                                                type: 'button',
                                                className: nu().advDisclaimerTrigger,
                                                style: v.disclaimerTrigger,
                                                'data-test-id': N.Kq.barBelow.BAR_BELOW_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                children: (0, m.jsx)(A.A, { id: 'ads.ad' }),
                                            }),
                                            (0, m.jsx)(aw.hl, {
                                                className: nu().advDisclaimerContent,
                                                children: (0, m.jsx)('div', {
                                                    className: nu().advDisclaimerInner,
                                                    children: (0, m.jsx)(I.HL, {
                                                        className: nu().advDisclaimerText,
                                                        type: 'text',
                                                        variant: 'p',
                                                        size: 'xs',
                                                        weight: 'medium',
                                                        'data-test-id': N.Kq.barBelow.BAR_BELOW_ADV_DISCLAIMER_TEXT,
                                                        children: _,
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                });
            });
            var nm = a(15509),
                np = a(12528),
                nh = a.n(np);
            let nv = 'buy-subscription-modal',
                nx = (0, h.PA)((e) => {
                    let { modal: t } = e,
                        a = (0, v.useRouter)(),
                        i = (0, eb.N)().get(ex.QG),
                        { user: n } = (0, L.g)(),
                        [r, s] = (0, ey.d)(),
                        {
                            openPaymentWidgetModal: o,
                            isShimmerActive: l,
                            isShimmerVisible: d,
                            mainText: c,
                            mainTextA11y: u,
                            additionText: _,
                            saveOfferAndAuthorize: p,
                        } = (0, eM.D)({ storeName: 'music', offerElement: { element: r, intersectionPropertyId: nv } }),
                        h = (0, C.c)(() => {
                            if ((t.close(), !n.isAuthorized)) return void p();
                            o();
                        }),
                        x = (0, C.c)(() => {
                            t.close(), i.authorizationUrl && a.push(i.authorizationUrl);
                        });
                    return (0, m.jsxs)(m.Fragment, {
                        children: [
                            (0, m.jsx)(I.HL, {
                                className: nh().heading,
                                variant: 'div',
                                weight: 'bold',
                                'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_TITLE,
                                children: (0, m.jsx)(A.A, { id: 'buy-subscription.listen-without-restrictions', values: { nbsp: ' ' } }),
                            }),
                            (0, m.jsxs)('div', {
                                className: nh().buttons,
                                children: [
                                    (0, m.jsx)(nm.b, {
                                        ref: s,
                                        'data-intersection-property-id': nv,
                                        mainText: c,
                                        ariaLabel: u,
                                        additionText: _,
                                        isShimmerActive: l,
                                        isShimmerVisible: d,
                                        onClick: h,
                                        className: nh().button,
                                        mainTextClassName: nh().buttonMainText,
                                        additionTextClassName: nh().buttonAdditionText,
                                        'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_SUBSCRIPTION_BUTTON,
                                    }),
                                    (0, m.jsx)(T.$, {
                                        onClick: x,
                                        className: nh().button,
                                        isBlock: !0,
                                        color: 'secondary',
                                        variant: 'default',
                                        size: 'l',
                                        radius: 'xxxl',
                                        'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ALREADY_IN_PLUS_BUTTON,
                                        children: (0, m.jsx)(I.HL, {
                                            className: nh().buttonMainText,
                                            variant: 'span',
                                            weight: 'bold',
                                            children: (0, m.jsx)(A.A, { id: 'buy-subscription.already-in-plus', values: { nbsp: '\xa0' } }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var nb = a(54578),
                nf = a(3646),
                ng = a.n(nf);
            let nA = 'buy-subscription-benefits-modal',
                nN = (0, h.PA)((e) => {
                    let { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: n, withRoundCover: r } = e,
                        { user: s } = (0, L.g)(),
                        [o, l] = (0, ey.d)(),
                        {
                            openPaymentWidgetModal: d,
                            isShimmerActive: c,
                            isShimmerVisible: u,
                            mainText: _,
                            mainTextA11y: p,
                            additionText: h,
                            oneClickAvailable: v,
                            oneClickDisclaimerText: x,
                            oneClickDisclaimerTextA11y: b,
                            buttonText: f,
                        } = (0, eM.D)({ storeName: 'music', offerElement: { element: o, intersectionPropertyId: nA } }),
                        g = (0, C.c)(() => {
                            t.close(), d();
                        });
                    return (0, m.jsxs)(m.Fragment, {
                        children: [
                            (0, m.jsx)(td.t, {
                                radius: r ? 'round' : 'm',
                                className: ng().entityCover,
                                children: (0, m.jsx)(iZ.B, {
                                    fit: 'cover',
                                    src: i || 'https://avatars.mds.yandex.net/get-music-misc/30221/img.69b3f718179e1659eceb7a5c/orig',
                                    size: 110,
                                    withAvatarReplace: !0,
                                    isAvailable: !i || n,
                                }),
                            }),
                            !!a &&
                                (0, m.jsx)(I.HL, {
                                    variant: 'span',
                                    className: ng().entityTitle,
                                    lineClamp: 2,
                                    'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ENTITY_TITLE,
                                    children: a,
                                }),
                            (0, m.jsxs)('div', {
                                className: ng().headingContainer,
                                children: [
                                    (0, m.jsx)(I.HL, {
                                        className: ng().heading,
                                        variant: 'div',
                                        weight: 'bold',
                                        size: 's',
                                        'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_TITLE,
                                        children: (0, m.jsx)(A.A, { id: 'buy-subscription.listen-without-restrictions', values: { nbsp: ' ' } }),
                                    }),
                                    !!f &&
                                        s.isAuthorized &&
                                        (0, m.jsx)(I.HL, {
                                            className: ng().offerHeading,
                                            variant: 'div',
                                            weight: 'bold',
                                            size: 's',
                                            'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_OFFER_TITLE,
                                            children: (0, m.jsx)(A.A, {
                                                id: 'buy-subscription.offer-for-you',
                                                values: { offerText: null == f ? void 0 : f.toLowerCase() },
                                            }),
                                        }),
                                ],
                            }),
                            (0, m.jsxs)('div', {
                                className: ng().benefits,
                                'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_BENEFITS,
                                children: [
                                    (0, m.jsxs)('div', {
                                        className: ng().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: ng().benefitIcon,
                                                children: (0, m.jsx)(tl._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.69a6b052d268e8685d597e08/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.69a6b0e4563d4e7d5eadc110/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: ng().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(I.HL, {
                                                variant: 'span',
                                                className: ng().benefitText,
                                                children: (0, m.jsx)(A.A, { id: 'buy-subscription.plus-benefit-recommendations' }),
                                            }),
                                        ],
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: ng().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: ng().benefitIcon,
                                                children: (0, m.jsx)(tl._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14722da017d15a4f2ec/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.69a6b14722da017d15a4f2eb/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: ng().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(I.HL, {
                                                variant: 'span',
                                                className: ng().benefitText,
                                                children: (0, m.jsx)(A.A, { id: 'buy-subscription.plus-benefit-non-music', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                    (0, m.jsx)(nb.c, { className: ng().benefitDivider }),
                                    (0, m.jsx)(nb.c, { className: ng().benefitDivider }),
                                    (0, m.jsxs)('div', {
                                        className: ng().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: ng().benefitIcon,
                                                children: (0, m.jsx)(tl._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14822da017d15a4f2ee/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14722da017d15a4f2ed/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: ng().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(I.HL, {
                                                variant: 'span',
                                                className: ng().benefitText,
                                                children: (0, m.jsx)(A.A, { id: 'buy-subscription.plus-benefit-offline', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: ng().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: ng().benefitIcon,
                                                children: (0, m.jsx)(tl._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b1510974f922f316a6df/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.69a6b1510974f922f316a6de/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: ng().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(I.HL, {
                                                variant: 'span',
                                                className: ng().benefitText,
                                                children: (0, m.jsx)(A.A, { id: 'buy-subscription.plus-benefit-other-services', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !s.isAuthorized &&
                                (0, m.jsxs)('div', {
                                    className: ng().loginContainer,
                                    children: [
                                        (0, m.jsx)(aH.H, {
                                            size: 'l',
                                            variant: 'default',
                                            buttonText: (0, m.jsx)(I.HL, {
                                                variant: 'span',
                                                size: 'l',
                                                children: (0, m.jsx)(A.A, { id: 'authorization.enter-and-listen-button' }),
                                            }),
                                            className: ng().button,
                                            'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ALREADY_IN_PLUS_BUTTON,
                                        }),
                                        (0, m.jsxs)(I.HL, {
                                            variant: 'div',
                                            size: 'm',
                                            weight: 'medium',
                                            className: ng().bonusText,
                                            'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_BONUS_TEXT,
                                            children: [
                                                (0, m.jsx)(E.I, { variant: 'gift', size: 'xxs', className: ng().giftIcon }),
                                                (0, m.jsx)(A.A, { id: 'payment.learn-personal-bonus' }),
                                            ],
                                        }),
                                    ],
                                }),
                            s.isAuthorized &&
                                !s.hasPlus &&
                                (0, m.jsxs)(m.Fragment, {
                                    children: [
                                        (0, m.jsx)(nm.b, {
                                            ref: l,
                                            'data-intersection-property-id': nA,
                                            mainText: _,
                                            ariaLabel: p,
                                            additionText: h,
                                            isShimmerActive: c,
                                            isShimmerVisible: u,
                                            onClick: g,
                                            className: ng().button,
                                            mainTextClassName: ng().buttonMainText,
                                            additionTextClassName: ng().buttonAdditionText,
                                            color: 'primary',
                                            'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_SUBSCRIPTION_BUTTON,
                                        }),
                                        v &&
                                            (0, m.jsx)(I.HL, {
                                                variant: 'div',
                                                size: 's',
                                                weight: 'normal',
                                                'aria-label': b,
                                                className: ng().oneClickDisclaimerText,
                                                'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_DISCLAIMER_TEXT,
                                                children: x,
                                            }),
                                    ],
                                }),
                        ],
                    });
                });
            var nC = a(34287),
                ny = a.n(nC);
            let nT = (0, h.PA)((e) => {
                let { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: n, isLegalRejected: r, withRoundCover: s } = e,
                    o = (0, $.L)(() =>
                        r ? (0, m.jsx)(nx, { modal: t }) : (0, m.jsx)(nN, { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: n, withRoundCover: s }),
                    );
                return (0, m.jsx)(S.a, {
                    className: ny().root,
                    headerClassName: ny().header,
                    contentClassName: ny().content,
                    size: 'fitContent',
                    placement: 'default',
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    lockScroll: !0,
                    closeButtonProps: { 'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_CLOSE_BUTTON },
                    'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET,
                    children: o,
                });
            });
            nT.displayName = 'BuySubscriptionModal';
            let nE = (0, b.createContext)(null);
            var nS = a(3237),
                nB = a(93192),
                nI = a(35508),
                nj = a.n(nI);
            let nk = (0, h.PA)((e) => {
                    var t, a;
                    let { children: i, className: n } = e,
                        { formatMessage: r } = (0, g.A)(),
                        {
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: s },
                            },
                        } = (0, L.g)(),
                        o = (0, eL.Q)(),
                        l = (0, b.useContext)(nE),
                        d = null != (a = null == l ? void 0 : l.isCollapsed) && a,
                        c = (0, C.c)(() => {
                            s.setType(en.h.BRANDING);
                        });
                    return ((0, b.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    s.isVisible)
                        ? (0, m.jsxs)('div', {
                              'aria-label': r({ id: 'advert.banner' }),
                              role: 'banner',
                              children: [
                                  (0, m.jsx)(X.N, {
                                      ownerId: Q.P,
                                      containerId: nS.m_,
                                      params: nS.$,
                                      onLoad: c,
                                      onError: s.toggleHasErrorTrue,
                                      onNoAds: s.toggleNoAdsTrue,
                                      className: (0, p.$)(nj().creative, { [nj().creative_withCollapsedNavbar]: d }),
                                  }),
                                  (0, m.jsx)(X.N, {
                                      ownerId: Q.P,
                                      containerId: nS.tn,
                                      params: nS.kz,
                                      onLoad: c,
                                      onError: s.toggleHasErrorTrue,
                                      onNoAds: s.toggleNoAdsTrue,
                                  }),
                                  (0, m.jsx)('div', {
                                      className: (0, p.$)(nj().root, n, { [nj().root_withCollapsedNavbar]: d }),
                                      style: null == (t = o.data) ? void 0 : t.style,
                                      children: i,
                                  }),
                              ],
                          })
                        : i;
                }),
                nP = (0, h.PA)((e) => {
                    let { children: t, className: a } = e;
                    return (0, m.jsx)(nB.A, { children: (0, m.jsx)(nk, { className: a, children: t }) });
                });
            var nw = a(22714),
                nL = a(58534),
                nO = a(44482),
                nD = a.n(nO);
            let nR = (e) => {
                let { refetchRequests: t, closeToast: a } = e,
                    { formatMessage: i } = (0, g.A)(),
                    n = (0, b.useMemo)(
                        () =>
                            (0, m.jsxs)('div', {
                                className: nD().message,
                                children: [
                                    (0, m.jsx)(I.HL, {
                                        className: nD().text,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        children: (0, m.jsx)(A.A, { id: 'error-messages.error-during-initial-loading' }),
                                    }),
                                    (0, m.jsx)(T.$, {
                                        className: nD().button,
                                        onClick: t,
                                        variant: 'text',
                                        'aria-label': i({ id: 'interface-actions.reload-part-page' }),
                                        icon: (0, m.jsx)(E.I, { variant: 'reset', size: 'xxs', className: nD().icon }),
                                    }),
                                ],
                            }),
                        [i, t],
                    );
                return (0, m.jsx)(nL.$, { className: (0, p.$)(nD().root, nD().important), message: n, closeToast: a });
            };
            var nM = a(45477),
                nF = a(75582),
                nU = a(11541),
                nz = a(49399),
                nW = a(72445),
                nV = a(31010),
                nH = a(67544),
                nK = a(74523),
                nG = a(97201),
                nY = a(72054),
                n$ = a.n(nY);
            let nq = 'noreferrer noopener',
                nZ = (0, h.PA)(() => {
                    var e;
                    let {
                            settings: { browserInfo: t },
                            user: { account: a },
                        } = (0, L.g)(),
                        { deeplink: i } = null != (e = (0, nV.P)()) ? e : {},
                        n = (0, nW.q)({ browserInfo: t, login: a.data.login }),
                        { shouldShow: r } = ((e) => {
                            let {
                                    enabled: t = !0,
                                    searchParamKey: a,
                                    storageKey: i,
                                    storageValue: n = 'true',
                                    storageMatcher: r = (e) => 'true' === e,
                                    useSessionStorage: s = !0,
                                    searchParamHideValue: o,
                                    shouldHideChecker: l,
                                } = e,
                                [d, c] = (0, b.useState)(!1),
                                [u, _] = (0, b.useState)(!1),
                                m = (0, v.useSearchParams)(),
                                p = (0, eb.N)(),
                                h = p.get(ex.vH),
                                x = p.get(ex.Zf),
                                f = (0, C.c)(l || (() => !1)),
                                g = ((e) => {
                                    switch (e.length) {
                                        case 0:
                                            return;
                                        case 1:
                                            return e[0];
                                        default:
                                            return e;
                                    }
                                })(m.getAll(a)),
                                A = (0, C.c)(() => {
                                    if (!s) return !1;
                                    try {
                                        let e = h.get(i);
                                        return r('string' == typeof e ? e : null);
                                    } catch (e) {
                                        return x.error('Failed to get sessionStorage', { type: 'useSearchParamVisibility', storageKey: i }), !1;
                                    }
                                }),
                                N = (0, C.c)(() => {
                                    if (s)
                                        try {
                                            h.set(i, n);
                                        } catch (e) {
                                            x.error('Failed to set sessionStorage', { type: 'useSearchParamVisibility', storageKey: i });
                                        }
                                });
                            return (
                                (0, b.useEffect)(() => {
                                    c(!0);
                                }, []),
                                (0, b.useEffect)(() => {
                                    if (!d || !t) return void _(!1);
                                    let e =
                                            (!!o &&
                                                ((e, t) => {
                                                    if (!e || !t) return !1;
                                                    let a = t.toLowerCase();
                                                    return Array.isArray(e) ? e.some((e) => e.toLowerCase() === a) : e.toLowerCase() === a;
                                                })(g, o)) ||
                                            f(g),
                                        a = A();
                                    e && N(), _(!(e || a));
                                }, [g, o, s, d, t, f, A, N]),
                                { shouldShow: !!d && u, searchParamValue: g }
                            );
                        })({ searchParamKey: nG.K.UTM_SOURCE, storageKey: ef.c.HideDeeplinkAndOnelink, searchParamHideValue: 'bottomsheet' }),
                        s = (0, $.L)(() =>
                            (null == t ? void 0 : t.hasHuaweiAppGallery) ? 'huaweiAppGallery' : (null == t ? void 0 : t.OSFamily) === nH.j.IOS ? 'macos' : 'googlePlay',
                        ),
                        o = (0, $.L)(() =>
                            (null == t ? void 0 : t.hasHuaweiAppGallery)
                                ? (0, m.jsx)(A.A, { id: 'deeplinks.download-from-app-gallery' })
                                : (null == t ? void 0 : t.OSFamily) === nH.j.IOS
                                  ? (0, m.jsx)(A.A, { id: 'deeplinks.download-from-app-store' })
                                  : (0, m.jsx)(A.A, { id: 'deeplinks.download-from-google-play' }),
                        ),
                        l = (0, C.c)(() => {
                            if (!i) return;
                            let e = new URLSearchParams(window.location.search);
                            window.open((0, nK.C)(i, e), '_self', nq);
                        }),
                        d = (0, C.c)(() => {
                            let e = new URLSearchParams(window.location.search),
                                t = n(i && (0, nK.C)(i, e));
                            window.open(t, '_blank', nq);
                        });
                    return r
                        ? (0, m.jsxs)('div', {
                              className: n$().root,
                              children: [
                                  (0, m.jsx)(T.$, {
                                      withRipple: !1,
                                      withHover: !1,
                                      onClick: l,
                                      radius: 'xxxl',
                                      className: n$().button,
                                      role: 'link',
                                      icon: (0, m.jsx)(E.I, { className: (0, p.$)(n$().buttonIcon, n$().musicIcon), variant: 'musicLogo' }),
                                      children: (0, m.jsx)(I.HL, {
                                          className: n$().buttonTitle,
                                          variant: 'div',
                                          type: 'text',
                                          size: 'm',
                                          weight: 'normal',
                                          children: (0, m.jsx)(A.A, { id: 'deeplinks.listen-in-app' }),
                                      }),
                                  }),
                                  (0, m.jsx)(T.$, {
                                      withRipple: !1,
                                      withHover: !1,
                                      onClick: d,
                                      radius: 'xxxl',
                                      className: n$().button,
                                      role: 'link',
                                      icon: (0, m.jsx)(E.I, { className: (0, p.$)(n$().buttonIcon, n$().onelinkIcon), variant: s }),
                                      children: (0, m.jsx)(I.HL, { className: n$().buttonTitle, variant: 'div', type: 'text', size: 'm', weight: 'normal', children: o }),
                                  }),
                              ],
                          })
                        : null;
                });
            var nQ = a(82237);
            let nX = (e) => {
                let { children: t, isEnabled: a } = e,
                    [i, n] = (0, b.useState)(nQ.Lz),
                    r = (0, C.c)((e) => {
                        let { href: t } = (0, eH.u)(null != e ? e : '', { options: { host: nQ.Lz } });
                        n(t);
                    }),
                    s = (0, b.useMemo)(() => ({ deeplink: i, setDeeplink: r, isEnabled: a }), [a, r, i]);
                return a ? (0, m.jsx)(nV.H.Provider, { value: s, children: t }) : t;
            };
            var nJ = a(38936),
                n0 = a(40996);
            let n1 = { p1: 'czmwt', p2: 'hsnu', puid1: '', puid2: '' };
            var n2 = a(11272),
                n5 = a.n(n2);
            let n3 = (0, h.PA)((e) => {
                    let { className: t, forwardRef: a, onAdvertChange: i, ...n } = e,
                        {
                            advertBanners: {
                                banners: { topAdvertBanner: r },
                            },
                        } = (0, L.g)(),
                        { formatMessage: s } = (0, g.A)(),
                        o = (0, C.c)((e) => {
                            void 0 !== e && r.setType(e), i();
                        });
                    return (0, m.jsx)('section', {
                        ref: a,
                        className: (0, p.$)(n5().root, t, { [n5().root_hidden]: !r.isVisible }),
                        'aria-label': s({ id: 'advert.banner' }),
                        role: 'banner',
                        ...n,
                        children: (0, m.jsx)(X.N, {
                            className: n5().advert,
                            ownerId: Q.P,
                            containerId: 'adfox_173831489272852769',
                            params: n1,
                            onLoad: r.setType,
                            onRender: o,
                            onError: r.toggleHasErrorTrue,
                            onNoAds: r.toggleNoAdsTrue,
                        }),
                    });
                }),
                n4 = (0, b.forwardRef)((e, t) => (0, m.jsx)(n3, { forwardRef: t, ...e }));
            var n6 = a(92881),
                n7 = a.n(n6);
            let n9 = (0, h.PA)((e) => {
                let { children: t } = e,
                    [a, i] = (0, b.useState)(!1),
                    [n, r] = (0, b.useState)(!0),
                    [s, o] = (0, b.useState)(!1),
                    { contentRef: l, contentScrollRef: d } = (0, P.g)(),
                    c = (0, b.useRef)(null),
                    { isFreemium: u } = (0, q.X)(),
                    {
                        user: _,
                        settings: { isMobile: h },
                        advertBanners: {
                            banners: { topAdvertBanner: v },
                        },
                    } = (0, L.g)(),
                    x = (!_.isAuthorized || u) && v.isVisible,
                    f = (0, b.useCallback)(() => {
                        r(!1), i(!0);
                    }, [r, i]),
                    g = (0, b.useCallback)(() => {
                        r(!0), i(!1);
                    }, [r, i]),
                    A = (0, b.useCallback)(() => {
                        o(!1);
                    }, [o]),
                    N = (0, b.useMemo)(
                        () =>
                            x
                                ? (0, m.jsx)(n4, { className: (0, p.$)(n7().banner, { [n7().banner_canShow]: a }), onFocus: f, onBlur: g, onAdvertChange: A, ref: c })
                                : null,
                        [x, a, f, g, A],
                    ),
                    C = (0, b.useCallback)(() => (h ? window.scrollY : null == d ? void 0 : d.scrollTop), [d, h]),
                    y = (0, b.useCallback)(() => {
                        if (!N) return;
                        let e = C();
                        if (void 0 === e) return void i(!0);
                        let t = e > 0;
                        if (!h && l && d) {
                            var a;
                            let e = l.clientHeight + ((null == (a = c.current) ? void 0 : a.offsetHeight) || 0) < d.scrollHeight;
                            e ? r(!0) : !e && t && r(!1);
                        }
                        if (!n || (!t && s)) return;
                        let u = !t;
                        i(u), u && o(!0);
                    }, [l, d, N, n, C, h, s, i, r, o]);
                (0, b.useEffect)(() => {
                    y();
                }, [y, d]);
                let T = (0, b.useMemo)(() => (0, ed.A)(y, 200), [y]);
                return (
                    (0, n0.L)(h ? { onScroll: T } : { onScroll: T, elementRef: d }),
                    (0, m.jsxs)('div', { className: n7().root, children: [N, (0, m.jsx)('div', { className: n7().content, children: t })] })
                );
            });
            var n8 = a(29680),
                re = a(99937),
                rt = a.n(re);
            let ra = [{ id: nM.u.INFO }, { id: nM.u.ERROR, limit: 1 }],
                ri = () =>
                    ra.map((e) => {
                        let { id: t, limit: a } = e;
                        return (0, m.jsx)(n8.Notification, { className: rt().root, enableMultiContainer: !0, containerId: t, position: 'bottom-center', limit: a }, t);
                    }),
                rn = ix.default.default(
                    () =>
                        Promise.all([
                            a.e(7258),
                            a.e(6139),
                            a.e(8868),
                            a.e(7972),
                            a.e(5718),
                            a.e(5367),
                            a.e(5108),
                            a.e(4545),
                            a.e(3183),
                            a.e(3931),
                            a.e(5784),
                            a.e(7034),
                            a.e(5976),
                            a.e(6347),
                            a.e(6639),
                            a.e(3266),
                            a.e(1561),
                            a.e(2551),
                            a.e(914),
                            a.e(3295),
                            a.e(1385),
                            a.e(3350),
                            a.e(4942),
                            a.e(627),
                            a.e(530),
                            a.e(7606),
                        ])
                            .then(a.bind(a, 69136))
                            .then((e) => e.ProductLayoutClientOnlyModalsContent),
                    { ssr: !1 },
                ),
                rr = (0, h.PA)((e) => {
                    var t, a, i;
                    let { children: n, isNewWaveMainTabActive: r, layoutChromeStyles: s, rootClassName: o, rootStyle: l } = e,
                        d = (0, v.usePathname)(),
                        { setCompositePlayerBarRef: c } = (0, P.g)(),
                        u = (0, eb.N)().get(ex.oo),
                        _ = ev(),
                        {
                            settings: { browserInfo: h, isMobile: x, isWindowsApplication: f, isMacOSApplication: g, isLinuxApplication: A },
                            experiments: N,
                            communication: C,
                            user: y,
                            redAlert: T,
                            album: E,
                            albumCPA: { isPlusCPAPlayerBarEnabled: S, isHidePlusModalEnabled: B },
                            modals: { buySubscriptionModal: I },
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: j },
                            },
                        } = (0, L.g)(),
                        { isFreemium: k } = (0, q.X)(),
                        [w, O] = (0, b.useState)(null != (i = u.get(ef.c.NavbarCollapsed)) ? i : _),
                        D = (0, b.useMemo)(() => ({ isCollapsed: w || _, setIsCollapsed: O }), [w, _]);
                    (() => {
                        let { notify: e, dismiss: t } = (0, nF.l)(),
                            a = (0, b.useRef)(void 0),
                            { library: i, user: n } = (0, L.g)(),
                            r = (0, eb.N)().get(ex.U2),
                            [s, o] = (0, b.useState)(!0),
                            l = (0, b.useCallback)(async () => {
                                o(!1);
                                let e = [];
                                n.settings.loadingState === nz.G.REJECT && e.push(n.getSettings()),
                                    i.loadingState === nz.G.REJECT && e.push(i.getData()),
                                    t({ notificationId: a.current, forceClose: !0 }),
                                    await Promise.allSettled(e),
                                    o(!0);
                            }, [t, i, n]);
                        (0, b.useEffect)(() => {
                            let t = [n.settings.loadingState];
                            (0, nU.g)(r) || t.push(i.loadingState);
                            let o = t.every((e) => e !== nz.G.PENDING);
                            s && o && t.includes(nz.G.REJECT) && (a.current = e((0, m.jsx)(nR, { refetchRequests: l }), { containerId: nM.u.IMPORTANT, autoClose: !1 }));
                        }, [e, l, s, i.loadingState, n.settings.loadingState, r]),
                            (0, b.useEffect)(
                                () => () => {
                                    t({ notificationId: a.current, forceClose: !0 });
                                },
                                [t],
                            );
                    })();
                    let R = (!y.isAuthorized || k) && (null == h ? void 0 : h.isTouch),
                        M = N.checkExperiment(K.z.WebNextDeeplinksToMobile, 'on') && y.hasPlus && !!(null == h ? void 0 : h.isMobile) && !1,
                        F = M && !r,
                        { setDefaultLayoutRef: U } = (0, P.g)(),
                        z = S(null == E ? void 0 : E.id, null == E || null == (t = E.meta) ? void 0 : t.isNonMusic),
                        W = B(null == E ? void 0 : E.id, null == E || null == (a = E.meta) ? void 0 : a.isNonMusic),
                        V = !R || z,
                        H = z && (null == h ? void 0 : h.isTouch);
                    return (
                        (0, b.useEffect)(() => {
                            W && I.close();
                        }, [W, I]),
                        (0, m.jsx)(nE.Provider, {
                            value: D,
                            children: (0, m.jsx)(n9, {
                                children: (0, m.jsx)(nX, {
                                    isEnabled: M,
                                    children: (0, m.jsx)(nP, {
                                        children: (0, m.jsxs)('div', {
                                            ref: U,
                                            className: o,
                                            style: l,
                                            children: [
                                                H && (0, m.jsx)(nT, { modal: I }),
                                                !x &&
                                                    V &&
                                                    (0, m.jsx)(a2, {
                                                        className: (0, p.$)(s.navbar, {
                                                            [s.navbar_application_windows]: f,
                                                            [s.navbar_application_macos]: g,
                                                            [s.navbar_application_linux]: A,
                                                        }),
                                                        externalIsCollapsed: w,
                                                        externalSetIsCollapsed: O,
                                                    }),
                                                (0, m.jsx)(ep, {
                                                    className: (0, p.$)(Y().content, { [Y().content_withPlayerBar]: x && !r, [Y().content_withAxeBanner]: j.isVisible }),
                                                    children: (0, m.jsxs)(nJ.ErrorBoundary, { fallback: nl.SomethingWentWrong, children: [n, (0, m.jsx)(ri, {})] }, d),
                                                }),
                                                !x && V && !r && (0, m.jsx)(nw.n, { pageId: tG._Q.PLAYER, children: (0, m.jsx)(nn, { className: Y().playerBar }) }),
                                                x &&
                                                    V &&
                                                    (0, m.jsxs)('div', {
                                                        ref: c,
                                                        className: (0, p.$)(Y().compositePlayerBar, { [Y().compositePlayerBar_withNewVibe]: r }),
                                                        children: [
                                                            F && (0, m.jsx)(nZ, {}),
                                                            !r && (0, m.jsx)(nw.n, { pageId: tG._Q.PLAYER, children: (0, m.jsx)(nn, { className: Y().playerBar }) }),
                                                            (0, m.jsx)(a2, {
                                                                className: (0, p.$)(s.navbar, {
                                                                    [s.navbar_application_windows]: f,
                                                                    [s.navbar_application_macos]: g,
                                                                    [s.navbar_application_linux]: A,
                                                                }),
                                                                externalIsCollapsed: w,
                                                                externalSetIsCollapsed: O,
                                                            }),
                                                        ],
                                                    }),
                                                T.isVisible && (0, m.jsx)(no, { className: s.barBelow }),
                                                !T.isVisible && !x && C.list && (0, m.jsx)(n_, { className: s.barBelow, barBelow: C.list.barBelow }),
                                                (0, m.jsx)(rn, {}),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        })
                    );
                });
            var rs = a(73017),
                ro = a.n(rs);
            let rl = (0, h.PA)((e) => {
                var t, a, i;
                let n,
                    { className: r, children: s } = e,
                    o = (0, v.usePathname)(),
                    {
                        settings: { isMobile: l, isWindowsApplication: d, isLinuxApplication: c },
                        redAlert: u,
                        communication: _,
                        advertBanners: {
                            banners: { brandedEntityAxeBanner: h },
                        },
                        sonataState: b,
                        experiments: f,
                        vibe: g,
                    } = (0, L.g)(),
                    A = o === F.Z.main.href || o === F.Z.video.href;
                H(U.S.Dark, A);
                let N =
                        u.isVisible ||
                        (!l && (null == (t = _.list) ? void 0 : t.barBelow.isVisible) && (null == (a = _.list) ? void 0 : a.barBelow.hasAnimationAlreadyBeenStarted)),
                    C = {
                        barBelow: ro().barBelow,
                        navbar: ro().navbar,
                        navbar_application_linux: ro().navbar_application_linux,
                        navbar_application_macos: ro().navbar_application_macos,
                        navbar_application_windows: ro().navbar_application_windows,
                    },
                    y = ro().root_withBarBelow,
                    T = ro().root;
                if (A) {
                    let e = g.isShuffleVibe && b.isVibeContext;
                    (n = ((e) => {
                        let { palette: t, isPlaying: a } = e;
                        return (a ? t.primaryStops : t.primaryDarkIdleStops).reduce((e, t, a) => ((e['--vibe-gradient-stop-'.concat(a)] = t), e), {});
                    })({ palette: (0, x.OH)(e || null == (i = b.entityMeta) ? void 0 : i.averageColor), isPlaying: b.isPlaying })),
                        (y = ro().rootNewVibe_withBarBelow),
                        (T = ro().rootNewVibe);
                }
                let E = (0, p.$)(Y().root, T, { [ro().root_applicationPreserveTitleBar]: d || c, [y]: N, [Y().root_withAxeBanner]: h.isVisible }, r);
                return (0, m.jsxs)(rr, { isNewWaveMainTabActive: A, layoutChromeStyles: C, rootClassName: E, rootStyle: n, children: [s, A && (0, m.jsx)(M, {})] });
            });
        },
        19349: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedPlusBar_root___wH9W',
                button: 'NavbarDesktopAnimatedPlusBar_button__IX7L4',
                important: 'NavbarDesktopAnimatedPlusBar_important__7R916',
                icon: 'NavbarDesktopAnimatedPlusBar_icon__9lTgJ',
            };
        },
        19529: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => c });
            var i = a(32290),
                n = a(63618),
                r = a(52138),
                s = a(6752),
                o = a(40229),
                l = a(75487),
                d = a.n(l);
            let c = (e) => {
                let {
                        agent: t,
                        isPlaying: a,
                        isCurrent: l,
                        onPlayButtonClick: c,
                        shouldShowControl: u = !0,
                        playButtonIconSize: _,
                        alt: m,
                        className: p,
                        coverClassName: h,
                        entityCoverClassName: v,
                        controlClassName: x,
                        fallbackIconSize: b,
                    } = e,
                    f = (0, s.L)(() => {
                        if (t.entityType) return t.entityType === r.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, i.jsx)(o.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, n.$)(d().root, d()['root_radius_'.concat(f)], { [d().root_withShadow]: !!t.entityType }, p),
                    radius: f,
                    onPlayButtonClick: c,
                    isPlaying: a,
                    isCurrent: l,
                    alt: m,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: _,
                    fallbackIconSize: b,
                    coverClassName: h,
                    entityCoverClassName: v,
                    controlClassName: x,
                });
            };
        },
        20136: (e) => {
            e.exports = {
                timecode: 'ChangeTimecode_timecode__UScFt',
                root: 'ChangeTimecode_root__QxEw_',
                root_withTimecode: 'ChangeTimecode_root_withTimecode__eJhYI',
                root_mobile: 'ChangeTimecode_root_mobile__SzOdx',
                root_fullscreen: 'ChangeTimecode_root_fullscreen__FA6r0',
                slider: 'ChangeTimecode_slider__P4qmT',
            };
        },
        20213: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => s });
            var i = a(21916),
                n = a(55178),
                r = a(91027);
            let s = (e) => {
                let { enabled: t, onChange: a } = e,
                    s = (0, i.usePathname)();
                (0, n.useRef)(s);
                let o = (0, r.c)(a);
                return (
                    (0, n.useEffect)(() => {}, [t, o, s]),
                    (0, n.useEffect)(() => {
                        if (!t) return;
                        let e = window.navigation;
                        if (e)
                            return (
                                e.addEventListener('navigate', o),
                                () => {
                                    e.removeEventListener('navigate', o);
                                }
                            );
                    }, [t, o]),
                    s
                );
            };
        },
        20669: (e) => {
            e.exports = {
                root: 'AdContainer_root__ti4rk',
                container: 'AdContainer_container__DLRij',
                title: 'AdContainer_title__AsPky',
                subtitle: 'AdContainer_subtitle__LIOif',
                info: 'AdContainer_info__EKKWS',
                favicon: 'AdContainer_favicon__ry_3I',
                buttonContainer: 'AdContainer_buttonContainer__SvDt3',
                button: 'AdContainer_button__nQcMg',
                linkButton: 'AdContainer_linkButton__rabLN',
            };
        },
        20982: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(55985);
            let n = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, i.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        21878: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                dateWithName: 'PodcastMeta_dateWithName__cKy0o',
                podcastMetaContainer: 'PodcastMeta_podcastMetaContainer__pFASj',
                podcastTitleContainer: 'PodcastMeta_podcastTitleContainer__p9Zja',
                podcastName: 'PodcastMeta_podcastName__iQeNK',
                progress: 'PodcastMeta_progress__5DqlO',
                progress_disabled: 'PodcastMeta_progress_disabled__KX04q',
                progress_withPreviousInfo: 'PodcastMeta_progress_withPreviousInfo__eOrCi',
                soonDate: 'PodcastMeta_soonDate__zGuG9',
                dateDisabled: 'PodcastMeta_dateDisabled__DxjtJ',
                dateDisliked: 'PodcastMeta_dateDisliked__95MlL',
            };
        },
        22266: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            var i = (function (e) {
                return (
                    (e.VIDEO = 'VIDEO'),
                    (e.AUDIO = 'AUDIO'),
                    (e.TOP_BANNER = 'TOP_BANNER'),
                    (e.SIDE_BANNER = 'SIDE_BANNER'),
                    (e.TOUCH_BANNER = 'TOUCH_BANNER'),
                    (e.PLAYLIST_BRANDING = 'PLAYLIST_BRANDING'),
                    (e.AXE_ENTITY_BRANDING = 'AXE_ENTITY_BRANDING'),
                    (e.PLAYER_BRANDING = 'PLAYER_BRANDING'),
                    e
                );
            })({});
        },
        22714: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => s });
            var i = a(32290),
                n = a(55178),
                r = a(1176);
            let s = (e) => {
                let { pageId: t, pageEntityId: a, displayReasonId: s, pageStyle: o, pagePlacement: l, children: d } = e,
                    c = (0, n.useMemo)(() => ({ pageId: t, pageEntityId: a, displayReasonId: s, pageStyle: o, pagePlacement: l }), [t, a, s, o, l]);
                return (0, i.jsx)(r.r.Provider, { value: c, children: d });
            };
        },
        25936: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => E });
            var i = a(32290),
                n = a(96103),
                r = a(55178),
                s = a(91027),
                o = a(6752),
                l = a(7697),
                d = a(57594),
                c = a(79406),
                u = a(32156),
                _ = a(90829),
                m = a(90326),
                p = a(35280),
                h = a(63618),
                v = a(60900),
                x = a(21732),
                b = a(63423),
                f = a(82586),
                g = a(30839),
                A = a(73021),
                N = a(45031),
                C = a.n(N);
            let y = (0, n.PA)((e) => {
                    let {
                            className: t,
                            withShuffle: a,
                            shuffle: n,
                            canMoveBackward: r,
                            canMoveForward: o,
                            onClickNext: l,
                            onClickPrev: d,
                            withRepeat: c,
                            repeatMode: u,
                            playButton: _,
                            isDisabledShuffle: m,
                            isDisabledRepeat: p,
                            onRepeatClick: N,
                            onShuffleClick: y,
                        } = e,
                        { formatMessage: T } = (0, v.A)(),
                        E = (0, s.c)(() => {
                            l();
                        }),
                        S = (0, s.c)(() => {
                            d();
                        });
                    return (0, i.jsxs)('div', {
                        className: (0, h.$)(C().root, t),
                        children: [
                            a &&
                                (0, i.jsx)('div', {
                                    className: C().buttonContainer,
                                    children: (0, i.jsx)(A.u, {
                                        className: C().sonataButton,
                                        size: 'xxxs',
                                        variant: 'text',
                                        iconSize: 'xs',
                                        isDisabled: m,
                                        shuffle: n,
                                        onClick: y,
                                        'data-test-id': x.Kq.sonata.SHUFFLE_BUTTON,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: C().sonataButtons,
                                children: [
                                    (0, i.jsx)(b.$, {
                                        className: C().sonataButton,
                                        variant: 'text',
                                        size: 'm',
                                        radius: 'round',
                                        'aria-hidden': !r,
                                        disabled: !r,
                                        withRipple: !1,
                                        'aria-label': T({ id: 'player-actions.previous-track' }),
                                        icon: (0, i.jsx)(f.I, { variant: 'previous', size: 'xxs' }),
                                        onClick: S,
                                        'data-test-id': x.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                    }),
                                    _,
                                    (0, i.jsx)(b.$, {
                                        className: C().sonataButton,
                                        radius: 'round',
                                        size: 'm',
                                        variant: 'text',
                                        disabled: !o,
                                        'aria-hidden': !o,
                                        withRipple: !1,
                                        'aria-label': T({ id: 'player-actions.next-track' }),
                                        icon: (0, i.jsx)(f.I, { variant: 'next', size: 'xxs' }),
                                        onClick: E,
                                        'data-test-id': x.Kq.sonata.NEXT_TRACK_BUTTON,
                                    }),
                                ],
                            }),
                            c &&
                                (0, i.jsx)('div', {
                                    className: C().buttonContainer,
                                    children: (0, i.jsx)(g.s, {
                                        className: C().sonataButton,
                                        size: 'xxxs',
                                        variant: 'text',
                                        isDisabled: p,
                                        iconSize: 'xs',
                                        repeatMode: u,
                                        onClick: N,
                                    }),
                                }),
                        ],
                    });
                }),
                T = { mainAxis: 44 },
                E = (0, n.PA)((e) => {
                    var t, a, n;
                    let {
                            disabled: h,
                            isPlaying: v,
                            repeatMode: x,
                            canMoveForward: b,
                            canMoveBackward: f,
                            canShuffle: g,
                            shuffle: A,
                            onClickNext: N,
                            onClickPrev: E,
                            onClickPlayPause: S,
                            canChangeRepeatMode: B,
                            className: I,
                            withShuffle: j,
                            withRepeat: k,
                            onRepeatClick: P,
                            onShuffleClick: w,
                        } = e,
                        {
                            advert: L,
                            modals: { popoverOverPlayer: O },
                            paymentWidgetModal: D,
                            user: R,
                            experiments: M,
                            settings: F,
                        } = (0, d.g)(),
                        { isFreemium: U, hasFreeUserAccess: z } = (0, l.X)(),
                        W =
                            !(null == (t = F.browserInfo) ? void 0 : t.isTouch) &&
                            R.isAuthorized &&
                            !R.hasPlus &&
                            (null == (n = M.getExperiment(c.z.WebNextDesktopWebFreemium)) || null == (a = n.value) ? void 0 : a.limitListening) === 'on';
                    (0, p.S)();
                    let V = (0, r.useCallback)(
                            () =>
                                (0, i.jsx)(m.D, {
                                    className: C().sonataButton,
                                    iconSize: 'l',
                                    variant: 'filled',
                                    isPlaying: v,
                                    iconClassName: C().playButtonIcon,
                                    onClick: S,
                                }),
                            [v, S],
                        ),
                        H = (0, s.c)((e) => {
                            e || O.close();
                        }),
                        K = (0, o.L)(() => {
                            let e = U && R.isAuthorized && !W ? 'vibe' : 'fullTracks';
                            return R.isAuthorized
                                ? D.modal.isOpened
                                    ? V()
                                    : (0, i.jsx)(u.S, {
                                          isEnabled: z,
                                          isOpened: O.isOpened,
                                          placement: 'top',
                                          onOpenChange: H,
                                          offsetOptions: T,
                                          textVariant: e,
                                          renderChildren: V,
                                      })
                                : (0, i.jsx)(_.Z, {
                                      isEnabled: !0,
                                      isOpened: O.isOpened,
                                      placement: 'top',
                                      onOpenChange: H,
                                      offsetOptions: T,
                                      textVariant: e,
                                      renderChildren: V,
                                  });
                        });
                    return (0, i.jsx)(y, {
                        isDisabledRepeat: !B || h,
                        isDisabledShuffle: !g || h,
                        withShuffle: ((h || g) && !(null == L ? void 0 : L.isAdvertShown)) || !!j,
                        shuffle: A,
                        canMoveBackward: f,
                        canMoveForward: b,
                        onClickNext: N,
                        onClickPrev: E,
                        withRepeat: ((h || B) && !(null == L ? void 0 : L.isAdvertShown)) || !!k,
                        repeatMode: x,
                        className: I,
                        playButton: K,
                        onRepeatClick: P,
                        onShuffleClick: w,
                    });
                });
        },
        26749: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return (e.EMPTY = 'empty'), (e.DIRECT = 'direct'), (e.CREATIVE = 'creative'), (e.BRANDING = 'branding'), e;
            })({});
        },
        27616: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => P });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(21916),
                o = a(55178),
                l = a(60900),
                d = a(39407),
                c = a(81354),
                u = a(21732),
                _ = a(91027),
                m = a(6752),
                p = a(70280),
                h = a(71926),
                v = a(58294),
                x = a(13757),
                b = a(19383),
                f = a(84062),
                g = a(57594),
                A = a(53514),
                N = a(85017),
                C = a(13798),
                y = a(61258),
                T = a(24760),
                E = a(84141),
                S = a(14960),
                B = a(5856),
                I = a.n(B),
                j = a(21878),
                k = a.n(j);
            let P = (0, r.PA)((e) => {
                var t, a, r, B, j, P;
                let {
                        track: w,
                        className: L,
                        withPodcastName: O = !1,
                        withDate: D = !0,
                        withSecondaryColor: R = !1,
                        withListeningProgress: M = !1,
                        captionSize: F = 'm',
                        explicitSize: U = 'xs',
                        withExplicitMark: z = !0,
                        titleContainerClassName: W,
                        textClassName: V,
                        playContextParams: H,
                        withTimeLeftText: K = !0,
                        ignoreDislikedStyles: G,
                        withCustomTooltip: Y = !0,
                        withSavingQueryParams: $,
                        beforeTitle: q,
                        afterTitle: Z,
                        titleLineClamp: Q = 1,
                        podcastMetaClassName: X,
                        progressClassName: J,
                        withAlbumTitleLink: ee = !0,
                    } = e,
                    {
                        fullscreenPlayer: et,
                        sonataState: ea,
                        settings: { isMobile: ei },
                    } = (0, g.g)(),
                    { formatMessage: en } = (0, l.A)(),
                    er = (0, T.$)({ withCustomTooltip: Y }),
                    es = (0, s.useSearchParams)(),
                    eo = w.getUrl($ ? Object.fromEntries(es) : void 0),
                    el = w.pubDate ? new Date(w.pubDate) : new Date(),
                    ed = (0, x.L)(el),
                    ec = !1,
                    eu = (0, f.Z)(null != (j = null == (t = w.mainAlbum) ? void 0 : t.url) ? j : ''),
                    e_ = (0, o.useMemo)(() => {
                        var e;
                        let t = en({ id: 'entity-names.podcast-name' }, { podcastName: w.title });
                        return ''.concat(t, ' ').concat(null != (e = w.version) ? e : '');
                    }, [en, w.title, w.version]),
                    em = !!(M && H && w.shouldRememberPosition && w.streamProgress && w.durationMs),
                    ep =
                        w.id === (null == (a = ea.entityMeta) ? void 0 : a.id) &&
                        (null == (B = ea.entityMeta) || null == (r = B.streamProgress) ? void 0 : r.endPositionSec),
                    eh = (0, S.d)(em, w.streamProgress, ep),
                    ev = w.mainAlbum && O && !eh,
                    ex = w.pubDate && D && !eh,
                    eb = (0, b.l)({ entity: null != (P = w.mainAlbum) ? P : null, entityType: N.n.PODCAST, callback: eu }),
                    ef = (0, _.c)((e) => {
                        et.modal.isOpened && et.modal.close(), eb(e);
                    }),
                    eg = (0, E.O)({ track: w, withSavingQueryParams: $, entityType: N.n.PODCAST }),
                    eA = (0, o.useCallback)(() => {
                        switch (ed) {
                            case x.r.TODAY:
                                return (0, i.jsx)(d.A, { id: 'interface-actions.date-today' });
                            case x.r.YESTERDAY:
                                return (0, i.jsx)(d.A, { id: 'interface-actions.date-yesterday' });
                            case x.r.DATE_WITH_YEAR:
                                return (0, i.jsx)(c.XU, { value: w.pubDate, month: 'long', day: 'numeric', year: 'numeric' });
                            default:
                                return (0, i.jsx)(c.XU, { value: w.pubDate, month: 'long', day: 'numeric' });
                        }
                    }, [w.pubDate, ed]);
                w.pubDate && D && (ec = [x.r.TODAY, x.r.YESTERDAY].includes(ed));
                let eN = (0, o.useCallback)(
                        (e) =>
                            (0, i.jsx)(p.m_, {
                                enabled: er && !ei,
                                offsetOptions: 4,
                                placement: 'top',
                                text: w.title,
                                hoverSettings: A.V,
                                children: (0, i.jsx)(h.HL, {
                                    className: I().title,
                                    type: 'entity',
                                    size: F,
                                    variant: 'span',
                                    title: er ? void 0 : w.title,
                                    ...e,
                                    children: w.title,
                                }),
                            }),
                        [ei, er, F, w.title],
                    ),
                    eC = (0, o.useMemo)(
                        () =>
                            w.isRemoved
                                ? (0, i.jsx)(p.m_, {
                                      enabled: er && !ei,
                                      offsetOptions: 4,
                                      placement: 'top',
                                      text: en({ id: 'track-title.podcast-not-found' }),
                                      hoverSettings: A.V,
                                      children: (0, i.jsx)('span', { children: (0, i.jsx)(d.A, { id: 'track-title.podcast-not-found' }) }),
                                  })
                                : w.hasTrackLink
                                  ? (0, i.jsx)(y.N, {
                                        onClick: eg,
                                        className: I().albumLink,
                                        href: eo,
                                        'aria-label': e_,
                                        title: er ? void 0 : w.title,
                                        'data-test-id': u.Kq.track.TRACK_TITLE,
                                        children: eN(),
                                    })
                                  : eN({ 'data-test-id': u.Kq.track.TRACK_TITLE }),
                        [ei, w.isRemoved, w.hasTrackLink, w.title, eN, er, en, eg, eo, e_],
                    ),
                    ey = (0, m.L)(() => {
                        var e;
                        if (!ev) return;
                        let t = (0, i.jsx)(p.m_, {
                            enabled: er && !ei,
                            offsetOptions: 4,
                            placement: 'top',
                            text: w.mainAlbum.title,
                            hoverSettings: A.V,
                            children: (0, i.jsx)(h.HL, { variant: 'span', type: 'entity', size: F, className: I().albumTitle, children: w.mainAlbum.title }),
                        });
                        return ee
                            ? (0, i.jsx)(y.N, {
                                  'aria-label': en({ id: 'entity-names.podcast-name' }, { podcastName: w.mainAlbum.title }),
                                  className: I().link,
                                  href: null == (e = w.mainAlbum) ? void 0 : e.url,
                                  title: er ? void 0 : w.mainAlbum.title,
                                  onClick: ef,
                                  'data-test-id': u.Kq.track.TRACK_PARENT_PODCAST_TITLE,
                                  children: t,
                              })
                            : (0, i.jsx)('span', { 'data-test-id': u.Kq.track.TRACK_PARENT_PODCAST_TITLE, children: t });
                    });
                return (0, i.jsx)('div', {
                    className: (0, n.$)(I().root, { [I().root_disabled]: !w.isAvailable, [I().root_disliked]: w.isDisliked && !G, [I().root_withSecondaryColor]: R }, L),
                    children: (0, i.jsxs)('div', {
                        className: (0, n.$)(I().metaContainer, k().podcastMetaContainer, X),
                        children: [
                            em &&
                                H &&
                                w.streamProgress &&
                                (0, i.jsx)(v.B, {
                                    className: (0, n.$)(k().progress, J, {
                                        [k().progress_withPreviousInfo]: ev || ex,
                                        [k().progress_disabled]: !w.isAvailable || w.isDisliked,
                                    }),
                                    id: w.id,
                                    albumId: w.albumId,
                                    streamProgress: w.streamProgress,
                                    durationMs: w.durationMs || 0,
                                    playContextParams: H,
                                    withTimeLeftText: K,
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, n.$)(I().titleContainer, W, k().podcastTitleContainer),
                                children: [
                                    (0, i.jsxs)(h.HL, {
                                        className: (0, n.$)(I().text, V),
                                        type: 'entity',
                                        size: F,
                                        variant: 'div',
                                        lineClamp: Q,
                                        children: [
                                            q,
                                            eC,
                                            !w.isRemoved &&
                                                w.version &&
                                                (0, i.jsxs)(h.HL, {
                                                    className: (0, n.$)(I().text, I().version),
                                                    type: 'entity',
                                                    size: F,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: er ? void 0 : w.version,
                                                    children: ['\xa0', w.version],
                                                }),
                                        ],
                                    }),
                                    w.explicitDisclaimer &&
                                        z &&
                                        (0, i.jsx)(C.N, {
                                            containerClassName: I().explicitMarkContainer,
                                            getDescriptionTexts: w.getDescriptionTexts,
                                            variant: w.explicitDisclaimer,
                                            className: I().explicitMark,
                                            size: U,
                                            trackId: w.id,
                                        }),
                                    Z,
                                ],
                            }),
                            (ev || ex) &&
                                (0, i.jsxs)(h.HL, {
                                    type: 'entity',
                                    size: F,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, n.$)(I().text, k().podcastName, V),
                                    children: [
                                        ey,
                                        ex &&
                                            (0, i.jsx)(h.HL, {
                                                variant: 'span',
                                                type: 'entity',
                                                size: F,
                                                className: (0, n.$)({
                                                    [k().dateWithName]: ev,
                                                    [k().soonDate]: ec,
                                                    [k().dateDisabled]: !w.isAvailable,
                                                    [k().dateDisliked]: w.isDisliked && !G,
                                                }),
                                                children: eA(),
                                            }),
                                    ],
                                }),
                        ],
                    }),
                });
            });
        },
        28015: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => n, l: () => i });
            let i = 'yandex_rtb',
                n = 256152;
        },
        30310: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        30542: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => r });
            var i = a(60900),
                n = a(64605);
            let r = (e, t) => {
                let { formatMessage: a } = (0, i.A)();
                if (e)
                    switch (t) {
                        case n._.AUDIOBOOK:
                            return a({ id: 'non-music.shelf-unsubscribe' });
                        case n._.FAIRY_TALE:
                            return a({ id: 'interface-actions.do-not-like' });
                        default:
                            return a({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case n._.AUDIOBOOK:
                        return a({ id: 'non-music.shelf-subscribe' });
                    case n._.FAIRY_TALE:
                        return a({ id: 'interface-actions.like' });
                    default:
                        return a({ id: 'interface-actions.subscribe' });
                }
            };
        },
        30839: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => p });
            var i = a(32290),
                n = a(63618),
                r = a(60900),
                s = a(6612),
                o = a(91027),
                l = a(63423),
                d = a(82586),
                c = a(21732),
                u = a(1613),
                _ = a(76219),
                m = a.n(_);
            let p = (e) => {
                let {
                        isDisabled: t,
                        repeatMode: a,
                        className: _,
                        iconClassName: p,
                        size: h = 'xxxs',
                        iconSize: v = 'xs',
                        color: x,
                        variant: b = 'default',
                        onClick: f,
                    } = e,
                    { formatMessage: g } = (0, r.A)(),
                    A = t || a !== s.pM.ONE ? 'repeat' : 'repeat_one',
                    N = (0, u.z)(a, g, t),
                    C = (0, o.c)((e) => {
                        null == f || f(), e.stopPropagation();
                    });
                return (0, i.jsx)(l.$, {
                    className: _,
                    radius: 'round',
                    size: h,
                    variant: b,
                    color: x,
                    disabled: t,
                    withRipple: !1,
                    'aria-hidden': t,
                    'aria-label': N,
                    'aria-pressed': !t && a !== s.pM.NONE,
                    onClick: C,
                    icon: (0, i.jsx)(d.I, {
                        size: v,
                        variant: A,
                        className: (0, n.$)(m().repeatIcon, m()['repeatIcon_'.concat(a)], { [m().repeatIcon_disabled]: t }, p),
                    }),
                    'data-test-id': ((e, t) =>
                        e === s.pM.NONE || t
                            ? c.Kq.sonata.REPEAT_BUTTON_NO_REPEAT
                            : e === s.pM.ONE
                              ? c.Kq.sonata.REPEAT_BUTTON_REPEAT_ONE
                              : c.Kq.sonata.REPEAT_BUTTON_REPEAT_CONTEXT)(a, t),
                });
            };
        },
        31010: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => n, P: () => r });
            var i = a(55178);
            let n = (0, i.createContext)(null),
                r = () => (0, i.useContext)(n);
        },
        31266: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => i });
            let i = (e, t) => {
                let a = new URL(window.location.href),
                    i = a.searchParams;
                return i.set(e, t), (a.search = i.toString()), a.toString();
            };
        },
        32675: (e) => {
            e.exports = {
                root: 'CommonLayout_root__WC_W1',
                root_withAxeBanner: 'CommonLayout_root_withAxeBanner__2_ep2',
                content: 'CommonLayout_content__zy_Ja',
                content_withPlayerBar: 'CommonLayout_content_withPlayerBar__wTpoS',
                content_withAxeBanner: 'CommonLayout_content_withAxeBanner__gmyVS',
                playerBar: 'CommonLayout_playerBar__zXRxq',
                compositePlayerBar: 'CommonLayout_compositePlayerBar__hjZRp',
                compositePlayerBar_withNewVibe: 'CommonLayout_compositePlayerBar_withNewVibe__taMVb',
            };
        },
        34284: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => d });
            var i = a(55178),
                n = a(42406),
                r = a(70204),
                s = a(34186),
                o = a(59576),
                l = a(46151);
            let d = (e) => {
                var t;
                let { id: a, ref: d } = e,
                    { config: c, isOnboardingOpened: u, setIsOnboardingOpened: _ } = (0, l.w)(),
                    m = (0, i.useRef)(!1),
                    p = (0, n.BL)([{ current: d }], !d),
                    { isIntersecting: h } = null != (t = p[o.N]) ? t : {},
                    v = (0, s.N)().get(r.U2);
                for (let { id: e, storageKey: t, enabled: n } of ((0, i.useEffect)(() => {
                    if (m.current && h) {
                        let e = c.find((e) => {
                            let { id: t } = e;
                            return t === a;
                        });
                        e && v.set(e.storageKey, !0, { expires: e.expires });
                    }
                }, [c, a, h, v, p, d]),
                c)) {
                    let i = v.get(t);
                    if (n) {
                        if (null == u ? void 0 : u.current) return !1;
                        if (a === e) {
                            if (i) return !1;
                            return (m.current = !0), _(!0), !0;
                        }
                        if (!i) break;
                    }
                }
                return !1;
            };
        },
        34287: (e) => {
            e.exports = { root: 'BuySubscriptionModal_root__5LvlX', content: 'BuySubscriptionModal_content__v06Ju', header: 'BuySubscriptionModal_header__ho5hr' };
        },
        34883: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => n });
            var i = a(19383);
            let n = (e) => {
                let { album: t, callback: a, shouldHistoryBack: n } = e;
                return (0, i.l)({ entity: t, callback: a, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        35508: (e) => {
            e.exports = {
                root: 'WithBrandedEntityAxeBanner_root__aXh91',
                root_withCollapsedNavbar: 'WithBrandedEntityAxeBanner_root_withCollapsedNavbar__msb7M',
                creative: 'WithBrandedEntityAxeBanner_creative__Fp6Vg',
            };
        },
        38125: (e) => {
            e.exports = { root: 'Timecode_root__TLT75', root_start: 'Timecode_root_start__pHG5N', root_end: 'Timecode_root_end__LLQsh' };
        },
        38819: (e) => {
            e.exports = { root: 'NotificationPin_root__DBEub', view: 'NotificationPin_view__daGc_', image: 'NotificationPin_image__o5F7B' };
        },
        38936: (e, t, a) => {
            'use strict';
            a.d(t, { ErrorBoundary: () => d });
            var i = a(91945),
                n = a(32290),
                r = a(55178),
                s = a(70204),
                o = a(34186);
            class l extends r.Component {
                static getDerivedStateFromError(e) {
                    return { hasError: !0, error: e };
                }
                componentDidCatch(e, t) {
                    this.props.logger.error(e, { additional: t, type: 'error-boundary' });
                }
                render() {
                    let { hasError: e } = this.state,
                        { fallback: t, children: a } = this.props;
                    return e ? (0, n.jsx)(t, {}) : a;
                }
                constructor(...e) {
                    super(...e), (0, i._)(this, 'state', { hasError: !1 });
                }
            }
            let d = (function (e) {
                let t = (t) => {
                    let a = (0, o.N)().get(s.Zf);
                    return (0, n.jsx)(e, { ...t, logger: a });
                };
                return (t.displayName = 'withContainer('.concat(e.displayName || e.name || 'Component', ')')), t;
            })(l);
        },
        39231: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => n });
            var i = a(80408);
            let n = (e) => {
                var t, a;
                return null != (a = null == (t = (0, i.j)()) ? void 0 : t.get(e)) ? a : null;
            };
        },
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        40996: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => c });
            var i,
                n = a(72812),
                r = a(55178),
                s = {
                    6699: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let i = a(352),
                            n = a(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: a, throttleTimeout: r } = e,
                                s = (0, n.useRef)(null),
                                [o, l] = (0, n.useState)(!!a),
                                d = (0, n.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            l(!a),
                                                s.current && window.clearTimeout(s.current),
                                                (s.current = window.setTimeout(() => {
                                                    l(!!a);
                                                }, t));
                                        }, r),
                                    [t, a, r],
                                ),
                                c = (0, n.useCallback)(() => {
                                    l(!!a), s.current && window.clearTimeout(s.current);
                                }, [a]);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        s.current && window.clearTimeout(s.current);
                                    },
                                    [],
                                ),
                                { state: o, handleDebouncedToggle: d, reset: c }
                            );
                        };
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    352: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(r, 2));
                    },
                },
                o = {};
            function l(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var a = (o[e] = { exports: {} });
                return s[e](a, a.exports, l), a.exports;
            }
            var d = {};
            (() => {
                Object.defineProperty(d, '__esModule', { value: !0 }), (d.useScroll = void 0);
                let e = l(810),
                    t = l(361),
                    a = l(6699);
                d.useScroll = (i) => {
                    let { onScroll: n, listenIsScrolling: r, elementRef: s } = i,
                        { state: o, handleDebouncedToggle: l } = (0, a.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                        d = (0, e.useCallback)(() => {
                            r && l(), null == n || n();
                        }, [r, l, n]);
                    return (
                        (0, e.useEffect)(() => {
                            let e = (0, t.getElementFromRefOrElement)(s);
                            if (null === e) return;
                            let a = null != e ? e : window,
                                i = { capture: !0, passive: !0 };
                            return a.addEventListener('scroll', d, i), () => a.removeEventListener('scroll', d, i);
                        }, [s, d]),
                        o
                    );
                };
            })(),
                d.__esModule;
            var c = d.useScroll;
        },
        41566: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => c });
            var i = a(32290),
                n = a(96103),
                r = a(21732),
                s = a(82586),
                o = a(19740),
                l = a(30542),
                d = a(57594);
            let c = (0, n.PA)((e) => {
                let { isLiked: t, onClick: a, className: n, albumType: c, disabled: u } = e,
                    { user: _ } = (0, d.g)(),
                    m = t ? 'liked' : 'like',
                    p = (0, l.$)(t, c);
                return (0, i.jsx)(o.Dr, {
                    className: n,
                    onClick: a,
                    icon: (0, i.jsx)(s.I, { variant: m, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !_.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: p,
                });
            });
        },
        41677: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => U });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(55178),
                o = a(70280),
                l = a(57594),
                d = a(53514),
                c = a(40484),
                u = a.n(c),
                _ = a(60900),
                m = a(16172),
                p = a(21732),
                h = a(91027),
                v = a(71926),
                x = a(47745),
                b = a(84062),
                f = a(28999),
                g = a(61258),
                A = a(19383);
            let N = (0, r.PA)((e) => {
                    let {
                            artist: t,
                            withLink: a = !0,
                            linkClassName: n,
                            captionClassName: r,
                            captionSize: s = 'm',
                            allArtistsTitle: d,
                            withCustomTooltip: c,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: N } = (0, _.A)(),
                        {
                            track: C,
                            settings: { isMobile: y },
                        } = (0, l.g)(),
                        T = (0, b.Z)(t.url),
                        { sendNavigateSearchFeedback: E } = (0, f.z)(),
                        S = (0, x.N)(),
                        B = ((e) => {
                            let { artist: t, callback: a } = e,
                                { currentTrackInfo: i, fullscreenPlayer: n, fullscreenVideoPlayer: r } = (0, l.g)(),
                                { modal: s } = i;
                            return (0, A.l)({
                                entity: t,
                                callback: a,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), s.isOpened && (i.reset(), s.close()), n.modal.isOpened && n.modal.close();
                                },
                                onAfterHandled: () => {
                                    r.modal.isOpened && (r.modal.close(), r.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, h.c)((e) => {
                                y && C.isOpened && C.close(), T(e);
                            }),
                        }),
                        I = (0, h.c)((e) => {
                            S({ to: m.QT.ArtistScreen }), null == E || E(), B(e);
                        });
                    return a && !t.various
                        ? (0, i.jsx)(g.N, {
                              'aria-label': N({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: n,
                              href: t.url,
                              onClick: I,
                              title: c ? void 0 : d || t.name,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(o.m_, {
                                  enabled: !d && c,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: d || t.name,
                                  hoverSettings: u,
                                  children: (0, i.jsx)(v.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: r, children: t.name }),
                              }),
                          })
                        : (0, i.jsx)(o.m_, {
                              enabled: !d && c,
                              offsetOptions: 4,
                              placement: 'top',
                              text: d || t.name,
                              hoverSettings: u,
                              children: (0, i.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: r,
                                  title: c ? void 0 : d || t.name,
                                  'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                C = (e) => {
                    let {
                            artist: t,
                            withLink: a = !0,
                            linkClassName: n,
                            captionClassName: r,
                            captionSize: o,
                            allArtistsTitle: l,
                            withCustomTooltip: d,
                            hoverSettings: c,
                            shouldUseSeparator: u = !0,
                        } = e,
                        _ = (0, s.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, i.jsx)(
                                                  N,
                                                  {
                                                      artist: t,
                                                      withLink: a,
                                                      linkClassName: n,
                                                      captionClassName: r,
                                                      captionSize: o,
                                                      allArtistsTitle: l,
                                                      withCustomTooltip: d,
                                                      hoverSettings: c,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, a, n, r, o, l, d, c]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(N, {
                                artist: t,
                                withLink: a,
                                linkClassName: n,
                                captionClassName: r,
                                captionSize: o,
                                allArtistsTitle: l,
                                withCustomTooltip: d,
                                hoverSettings: c,
                            }),
                            _,
                        ],
                    });
                };
            var y = a(39407),
                T = a(63887);
            let E = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: a, handleOnSpoilerClick: r } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(T.N, {
                            role: 'button',
                            href: '',
                            className: (0, n.$)(u().spoiler, a),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': p.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(y.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var S = a(8055),
                B = a(6752),
                I = a(78035),
                j = a(78176),
                k = a(83598),
                P = a.n(k);
            let w = (0, r.PA)((e) => {
                    let { label: t, artists: a, forwardRef: n } = e;
                    return (0, i.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, I.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: n, children: t }),
                            (0, i.jsx)(o.ZI, { className: P().tooltipContent, children: a.map((e) => (0, i.jsx)(j.V, { artist: e, className: P().artistItem }, e.id)) }),
                        ],
                    });
                }),
                L = (0, s.forwardRef)((e, t) => (0, i.jsx)(w, { forwardRef: t, ...e }));
            var O = a(19740),
                D = a(52598),
                R = a.n(D);
            let M = (0, r.PA)((e) => {
                    let { label: t, artists: a } = e,
                        { formatMessage: r } = (0, _.A)();
                    return (0, i.jsx)(O.W1, {
                        isMobile: !0,
                        className: (0, n.$)(R().root, R().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: a.map((e) => (0, i.jsx)(j.V, { artist: e }, e.id)),
                    });
                }),
                F = (0, r.PA)((e) => {
                    let { artists: t = [], label: a, labelRef: n } = e,
                        [r, o] = (0, s.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, l.g)(),
                        c = (0, h.c)(() => {
                            let e = n.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, B.L)(() =>
                            (0, S.A)(() => {
                                c();
                            }, 100),
                        );
                    if (
                        ((0, s.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                c(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, c],
                        ),
                        (0, s.useEffect)(() => {
                            c();
                        }, [t, c]),
                        0 !== t.length)
                    )
                        return (r || d) && (!d || 1 !== t.length) ? (d ? (0, i.jsx)(M, { artists: t, label: a }) : (0, i.jsx)(L, { artists: t, label: a })) : a;
                }),
                U = (0, r.PA)((e) => {
                    let {
                            className: t,
                            artists: a = [],
                            separator: r = ', ',
                            lineClamp: c,
                            visibleArtistsCount: _,
                            withLink: m = !0,
                            spoilerClassName: p,
                            linkClassName: h,
                            captionClassName: v,
                            captionSize: x,
                            variant: b = 'breakAll',
                            withAllArtistsTitle: f = !0,
                            withComposer: g = !0,
                            spoilerComponent: A,
                            withCustomTooltip: N = !0,
                            artistIdWithoutLink: y,
                            withContextMenu: T,
                        } = e,
                        S = (0, s.useRef)(null),
                        [B, I] = (0, s.useState)(!1),
                        j = f
                            ? a
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let a = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...a]) : [t.name, ...a];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(r)
                            : '',
                        {
                            settings: { isMobile: k },
                        } = (0, l.g)(),
                        P = 1 === a.length,
                        w = (0, s.useCallback)((e) => {
                            I(!0), e.preventDefault();
                        }, []),
                        L = (0, s.useMemo)(() => {
                            let e = a;
                            return (
                                _ && !B && (e = a.slice(0, _)),
                                e.reduce((e, t) => {
                                    if (!g && t.isComposer) return e.length ? e : [];
                                    let a = (0, i.jsx)(
                                        C,
                                        {
                                            artist: t,
                                            linkClassName: h,
                                            captionClassName: v,
                                            withLink: m && t.id !== y && (((!k || P) && T) || !T),
                                            captionSize: x,
                                            allArtistsTitle: j,
                                            withCustomTooltip: N,
                                            hoverSettings: d.V,
                                            shouldUseSeparator: !!r,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([r, a]) : [a];
                                }, [])
                            );
                        }, [a, _, B, g, k, P, T, h, v, m, y, x, j, N, r]),
                        O = (0, s.useMemo)(() => {
                            if (!B && _ && _ < a.length) {
                                let e = a.length - _;
                                return (0, s.isValidElement)(A) ? A : (0, i.jsx)(E, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: w });
                            }
                        }, [a.length, w, B, p, A, _]),
                        D = (0, s.useMemo)(() => {
                            if (c) return { WebkitLineClamp: c };
                        }, [c]),
                        R = (0, i.jsx)(o.m_, {
                            referenceRef: S,
                            enabled: !!(f && j) && N && !T && !k,
                            offsetOptions: 4,
                            placement: 'top',
                            text: j,
                            hoverSettings: d.V,
                            children: (0, i.jsxs)('div', {
                                style: D,
                                className: (0, n.$)(u().root, u()['root_variant_'.concat(b)], { [u().root_clamp]: c && c > 0 }, { [u().ellipsis]: !c }, t),
                                title: f && j && !N && !T ? j : void 0,
                                children: [L, O],
                            }),
                        });
                    return T ? (0, i.jsx)(F, { labelRef: S, artists: a, label: R }) : R;
                });
        },
        41932: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => f });
            var i = a(32290),
                n = a(63618),
                r = a(55178),
                s = a(60900),
                o = a(21732),
                l = a(91027),
                d = a(6752),
                c = a(378),
                u = a(78305),
                _ = a(52843),
                m = a(22191),
                p = a(44128),
                h = a(57594),
                v = a(20136),
                x = a.n(v),
                b = a(12623);
            let f = (e) => {
                var t, a, v, f;
                let {
                        className: g,
                        sliderClassName: A,
                        disabled: N,
                        isFullscreen: C,
                        isMobile: y,
                        showThumbVariant: T,
                        withTimecode: E = !0,
                        sonataPlaybackId: S,
                        customDuration: B,
                        canMoveForward: I,
                    } = e,
                    j = (0, p.e)(),
                    k = (C || !y) && E,
                    P = (0, r.useRef)(!1),
                    { sonataState: w } = (0, h.g)(),
                    [L, O] = (0, r.useState)(null != (v = w.position) ? v : 0),
                    [D, R] = (0, r.useState)(null != (f = w.duration) ? f : 0),
                    [M, F] = (0, r.useState)(0),
                    { formatMessage: U } = (0, s.A)(),
                    { advert: z } = (0, h.g)(),
                    W = (0, u.r)(),
                    V = L && D ? (100 * Math.min(L, D)) / D : 0,
                    H = null == j ? void 0 : j.getState(S),
                    K = (0, m.P)(L),
                    G = (0, _.E)(Math.round(L), Math.round(D)),
                    Y = (0, m.P)(D),
                    $ = B && L > B,
                    q = (0, l.c)((e, t) => {
                        z.isAdvertShown || ((P.current = !t), t ? null == j || j.setProgress(e, S) : O(e));
                    });
                (0, r.useEffect)(() => {
                    $ && (I ? null == j || j.moveForward(S) : (null == j || j.moveBackward(S), null == j || j.pause(S)));
                }, [I, $, j, S]);
                let Z = (0, r.useCallback)(
                    (e) => {
                        e &&
                            (e.duration === 1 / 0
                                ? (R(0), O(0), F(0))
                                : (R(B && !z.isAdvertShown ? B : e.duration), O((t) => (P.current ? t : e.position)), F(e.loaded)));
                    },
                    [B, z.isAdvertShown],
                );
                (0, r.useEffect)(() => {
                    var e, t;
                    let a = null == W || null == (e = W.audioAdvertPlayback) ? void 0 : e.state.playerState.progress.onChange(Z),
                        i = null == H || null == (t = H.playerState) ? void 0 : t.progress.onChange(Z);
                    return () => {
                        null == i || i(), null == a || a();
                    };
                }, [
                    null == W || null == (t = W.audioAdvertPlayback) ? void 0 : t.state.playerState.progress,
                    Z,
                    null == H || null == (a = H.playerState) ? void 0 : a.progress,
                ]);
                let Q = (0, d.L)(() => {
                    if (0 !== D) return B && B <= D ? Math.round(B) : Math.round(D);
                });
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(x().root, { [x().root_fullscreen]: C, [x().root_mobile]: y, [x().root_withTimecode]: E }, g),
                    style: { '--track-progress': ''.concat(V, '%') },
                    'data-test-id': o.Kq.changeTimecode.TIMECODE_WRAPPER,
                    children: [
                        k && (0, i.jsx)(b.d, { role: 'text', 'aria-label': K, value: G, variant: 'start', className: x().timecode }),
                        (0, i.jsx)(c.A, {
                            'aria-valuetext': K,
                            className: (0, n.$)(x().slider, { [x()['slider_thumbSize_'.concat(y ? 'xs' : 'm')]]: !0 }, A),
                            disabled: N,
                            thumbSize: y ? 'xs' : 's',
                            trackSize: y ? 'xs' : 's',
                            value: Math.round(L),
                            mode: 'deferred',
                            secondaryValue: Math.round(M),
                            maxValue: Q,
                            onChange: q,
                            'aria-label': U({ id: 'player-actions.timecode-control' }),
                            showThumbVariant: T,
                            'data-test-id': o.Kq.changeTimecode.TIMECODE_SLIDER,
                        }),
                        k && (0, i.jsx)(b.d, { role: 'text', 'aria-label': Y, value: (0, _.E)(Math.round(D), Math.round(D)), variant: 'end', className: x().timecode }),
                    ],
                });
            };
        },
        42498: (e) => {
            e.exports = { root: 'PlayerBar_root__cXUnU', adPopup: 'PlayerBar_adPopup__BrBC6' };
        },
        43334: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedDownloadBarEnlarged_root__5lnM0',
                closeButton: 'NavbarDesktopAnimatedDownloadBarEnlarged_closeButton__MSz9j',
                text: 'NavbarDesktopAnimatedDownloadBarEnlarged_text__fT36E',
                downloadButtonText: 'NavbarDesktopAnimatedDownloadBarEnlarged_downloadButtonText__3GqKa',
                textBright: 'NavbarDesktopAnimatedDownloadBarEnlarged_textBright__JA1nf',
                closeButtonIcon: 'NavbarDesktopAnimatedDownloadBarEnlarged_closeButtonIcon___xaoS',
                downloadButtonIcon: 'NavbarDesktopAnimatedDownloadBarEnlarged_downloadButtonIcon__oE_rc',
            };
        },
        43352: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => r });
            var i = a(75314),
                n = a(14257);
            let r = (e) => {
                document.body.classList.remove(...Object.values(i.o)), e && Object.values(n.S).includes(e) && document.body.classList.add(i.o[e]);
            };
        },
        44482: (e) => {
            e.exports = {
                root: 'NotificationReloadPrefetchedRequests_root__90_4R',
                important: 'NotificationReloadPrefetchedRequests_important__ews9K',
                text: 'NotificationReloadPrefetchedRequests_text__oXCop',
                icon: 'NotificationReloadPrefetchedRequests_icon__Pg1_X',
                button: 'NotificationReloadPrefetchedRequests_button__lSehi',
                message: 'NotificationReloadPrefetchedRequests_message__i9Tx6',
            };
        },
        44989: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var i,
                n = a(55178),
                r = {
                    810: (e) => {
                        e.exports = i || (i = a.t(n, 2));
                    },
                },
                s = {},
                o = {};
            (() => {
                Object.defineProperty(o, '__esModule', { value: !0 }), (o.useToggle = void 0);
                let e = (function e(t) {
                    var a = s[t];
                    if (void 0 !== a) return a.exports;
                    var i = (s[t] = { exports: {} });
                    return r[t](i, i.exports, e), i.exports;
                })(810);
                o.useToggle = (t) => {
                    let [a, i] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        i(t);
                    }, [t]);
                    let n = (0, e.useCallback)(() => {
                            i((e) => !e);
                        }, []),
                        r = (0, e.useCallback)(() => {
                            i(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            i(!1);
                        }, []);
                    return { state: a, toggle: n, setState: i, toggleTrue: r, toggleFalse: s };
                };
            })(),
                o.__esModule;
            var l = o.useToggle;
        },
        45031: (e) => {
            e.exports = {
                root: 'BaseSonataControlsDesktop_root__E6wjA',
                sonataButtons: 'BaseSonataControlsDesktop_sonataButtons__7vLtw',
                sonataButton: 'BaseSonataControlsDesktop_sonataButton__GbwFt',
                playButtonIcon: 'BaseSonataControlsDesktop_playButtonIcon__TlFqv',
                buttonContainer: 'BaseSonataControlsDesktop_buttonContainer__EB404',
            };
        },
        46151: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => n, w: () => r });
            var i = a(55178);
            let n = (0, i.createContext)({ config: [], isOnboardingOpened: null, setIsOnboardingOpened: () => {} }),
                r = () => (0, i.useContext)(n);
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        48955: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => v });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(55178),
                o = a(39407),
                l = a(63423),
                d = a(50162),
                c = a(71926),
                u = a(78305),
                _ = a(57594),
                m = a(61258),
                p = a(20669),
                h = a.n(p);
            let v = (0, r.PA)((e) => {
                let { className: t, data: a, mediaContent: r, linkClassName: p } = e,
                    {
                        settings: { isMobile: v },
                    } = (0, _.g)(),
                    x = (0, u.r)(),
                    b = (0, s.useMemo)(
                        () =>
                            (null == x ? void 0 : x.state.clickThrough)
                                ? (0, i.jsx)(l.$, {
                                      className: (0, n.$)(h().button, p),
                                      variant: 'default',
                                      radius: 'xxxl',
                                      onClick: x.state.clickThrough,
                                      children: (0, i.jsx)(o.A, { id: 'ads.learn-more' }),
                                  })
                                : (null == a ? void 0 : a.clickThroughUrl)
                                  ? (0, i.jsx)(m.N, {
                                        target: '_blank',
                                        href: a.clickThroughUrl,
                                        className: (0, n.$)(h().button, h().linkButton, p),
                                        children: (0, i.jsx)(o.A, { id: 'ads.learn-more' }),
                                    })
                                  : (0, i.jsx)(l.$, {
                                        className: (0, n.$)(h().button, p),
                                        variant: 'default',
                                        radius: 'xxxl',
                                        disabled: !0,
                                        children: (0, i.jsx)(o.A, { id: 'ads.learn-more' }),
                                    }),
                        [null == a ? void 0 : a.clickThroughUrl, null == x ? void 0 : x.state.clickThrough, p],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(h().root, t),
                    children: [
                        r,
                        (0, i.jsxs)('div', {
                            className: h().container,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: h().info,
                                    children: [
                                        (0, i.jsx)(d._V, {
                                            className: h().favicon,
                                            withAspectRatio: !0,
                                            'aria-hidden': !0,
                                            fit: 'cover',
                                            src: (null == a ? void 0 : a.iconSrc) || '',
                                            alt: '',
                                            fallbackIconVariant: 'picture',
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: h().text,
                                            children: [
                                                (0, i.jsx)(c.HL, {
                                                    variant: 'div',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    className: h().title,
                                                    lineClamp: v ? 5 : void 0,
                                                    children: null == a ? void 0 : a.adTitle,
                                                }),
                                                (0, i.jsx)(c.HL, {
                                                    variant: 'div',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: h().subtitle,
                                                    children: (0, i.jsx)(o.A, { id: 'ads.ad' }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)('div', { className: h().buttonContainer, children: b }),
                            ],
                        }),
                    ],
                });
            });
        },
        49388: (e) => {
            e.exports = {
                root: 'Content_root__IsH8s',
                root_newVibe: 'Content_root_newVibe__5S1qr',
                main: 'Content_main__8_wIa',
                main_newVibe: 'Content_main_newVibe__tfCx9',
                sideBanner_newVibe: 'Content_sideBanner_newVibe__VpnTX',
                sideBanner: 'Content_sideBanner__Na07D',
                adContainer: 'Content_adContainer__4t8fj',
                adBanner: 'Content_adBanner__hxXvf',
                withBrandedBanner: 'Content_withBrandedBanner__ipwOK',
            };
        },
        50918: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                explicitMark: 'AudiobookMeta_explicitMark__1rN7x',
                metaContainer: 'AudiobookMeta_metaContainer__F7d9X',
                metaContainer_oneLine: 'AudiobookMeta_metaContainer_oneLine__D9CQh',
                titleContainer: 'AudiobookMeta_titleContainer__GIY6Q',
                artists: 'AudiobookMeta_artists__ScMoq',
                progress: 'AudiobookMeta_progress__i3_kS',
                progress_disabled: 'AudiobookMeta_progress_disabled__D_7E9',
                progress_withPreviousInfo: 'AudiobookMeta_progress_withPreviousInfo__97Hxr',
            };
        },
        52138: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { h: () => i }),
                (function (e) {
                    (e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist');
                })(i || (i = {}));
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        54578: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => o });
            var i = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length; )
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (n && (n += ' '), (n += i));
                                            else for (a in t) t[a] && (n && (n += ' '), (n += a));
                                        return n;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        a.r(t), a.d(t, { clsx: () => i, default: () => n });
                        let n = i;
                    },
                    9201: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = { root: 'sLuudThzDxW_5ARYjgjx', horizontal: 'xd6ji7lvp0et4nirt0TL', hasLabel: 'abbPp8VtL2D_PdW0Q_Wc', vertical: 'sMz62rSqViFDkXAMfGeO' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var n = null;
                            if ((void 0 !== i && (n = '' + i), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var r in ((i = {}), t)) 'key' !== r && (i[r] = t[r]);
                            else i = t;
                            return { $$typeof: a, type: e, key: n, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i);
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    5455: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Divider = void 0);
                        let n = a(4377),
                            r = a(5881),
                            s = i(a(9201));
                        t.Divider = (e) => {
                            let { className: t, orientation: a = 'horizontal', children: i, ...o } = e,
                                l = i && (0, n.jsx)('span', { children: i });
                            return (0, n.jsx)('div', {
                                className: (0, r.clsx)(s.default.root, { [s.default[a]]: a, [s.default.hasLabel]: l }, t),
                                ...o,
                                role: 'separator',
                                'aria-orientation': a,
                                children: l,
                            });
                        };
                    },
                },
                n = {};
            function r(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var a = (n[e] = { exports: {} });
                return i[e].call(a.exports, a, a.exports, r), a.exports;
            }
            (r.d = (e, t) => {
                for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (r.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var s = {};
            (() => {
                Object.defineProperty(s, '__esModule', { value: !0 }), (s.Divider = void 0);
                var e = r(5455);
                Object.defineProperty(s, 'Divider', {
                    enumerable: !0,
                    get: function () {
                        return e.Divider;
                    },
                });
            })();
            var o = s.Divider;
            s.__esModule;
        },
        54773: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedBar_root__tTyvO',
                bar: 'NavbarDesktopAnimatedBar_bar__Wge_o',
                bar_enter: 'NavbarDesktopAnimatedBar_bar_enter__pUWOV',
                bar_enter_active: 'NavbarDesktopAnimatedBar_bar_enter_active__cYAzl',
                animation_show: 'NavbarDesktopAnimatedBar_animation_show__oAMq1',
                animation_scale: 'NavbarDesktopAnimatedBar_animation_scale__iOhup',
                bar_exit: 'NavbarDesktopAnimatedBar_bar_exit__Wq1AL',
                bar_exit_active: 'NavbarDesktopAnimatedBar_bar_exit_active__EZFDU',
                animation_hide: 'NavbarDesktopAnimatedBar_animation_hide__Eiu1e',
                animation_unscale: 'NavbarDesktopAnimatedBar_animation_unscale__gyZb6',
                button: 'NavbarDesktopAnimatedBar_button__T7n21',
                button_enter: 'NavbarDesktopAnimatedBar_button_enter__6v5a5',
                button_enter_active: 'NavbarDesktopAnimatedBar_button_enter_active__jZmtw',
                button_exit: 'NavbarDesktopAnimatedBar_button_exit__j8qXO',
                button_exit_active: 'NavbarDesktopAnimatedBar_button_exit_active__D5JJp',
            };
        },
        55165: (e) => {
            e.exports = {
                root: 'PlayerBarDesktopWithBackgroundProgressBar_root__bpmwN',
                important: 'PlayerBarDesktopWithBackgroundProgressBar_important__HzXrK',
                root_interactive: 'PlayerBarDesktopWithBackgroundProgressBar_root_interactive__GcrNw',
                ripple: 'PlayerBarDesktopWithBackgroundProgressBar_ripple__FcmrF',
                progressBar: 'PlayerBarDesktopWithBackgroundProgressBar_progressBar___Q6eK',
                slider: 'PlayerBarDesktopWithBackgroundProgressBar_slider__SezFn',
                player: 'PlayerBarDesktopWithBackgroundProgressBar_player__ASKKs',
                playerBar: 'PlayerBarDesktopWithBackgroundProgressBar_playerBar__mp0p9',
                info: 'PlayerBarDesktopWithBackgroundProgressBar_info__YnvZ_',
                infoCard: 'PlayerBarDesktopWithBackgroundProgressBar_infoCard__i0cbW',
                coverContainer: 'PlayerBarDesktopWithBackgroundProgressBar_coverContainer__dkNCG',
                cover: 'PlayerBarDesktopWithBackgroundProgressBar_cover__MKmEt',
                description: 'PlayerBarDesktopWithBackgroundProgressBar_description__5jHke',
                artists: 'PlayerBarDesktopWithBackgroundProgressBar_artists__wKsF6',
                artistLink: 'PlayerBarDesktopWithBackgroundProgressBar_artistLink__l9Bk_',
                infoButtons: 'PlayerBarDesktopWithBackgroundProgressBar_infoButtons__OxPBy',
                sonata: 'PlayerBarDesktopWithBackgroundProgressBar_sonata__mGFb_',
                sonata_withReversedControls: 'PlayerBarDesktopWithBackgroundProgressBar_sonata_withReversedControls__9TjDN',
                meta: 'PlayerBarDesktopWithBackgroundProgressBar_meta__FhKTC',
                sonataControls: 'PlayerBarDesktopWithBackgroundProgressBar_sonataControls__rSmXQ',
                settingsButton: 'PlayerBarDesktopWithBackgroundProgressBar_settingsButton__HnCgK',
                trackContextMenuIcon: 'PlayerBarDesktopWithBackgroundProgressBar_trackContextMenuIcon__xBJxI',
                triggerModal: 'PlayerBarDesktopWithBackgroundProgressBar_triggerModal__EVv5d',
            };
        },
        55475: (e) => {
            e.exports = { root: 'PlusNavbarButton_root__kdY04', plusButtonShimmer: 'PlusNavbarButton_plusButtonShimmer__6t1go' };
        },
        55985: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => n });
            var i = a(60754);
            let n = (e) => (0, i.wg)({ uri: e.uri, color: e.color });
        },
        56008: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            let i = (0, a(55178).createContext)({ pageAlbumId: void 0 });
        },
        56315: (e) => {
            e.exports = {
                root: 'SonataFullscreenControlsDesktop_root__ZCIGk',
                sonataButtons: 'SonataFullscreenControlsDesktop_sonataButtons__9y89g',
                sonataButton: 'SonataFullscreenControlsDesktop_sonataButton__69FFc',
                sonataPlayButton: 'SonataFullscreenControlsDesktop_sonataPlayButton__QXEEp',
                playPauseButtonIcon: 'SonataFullscreenControlsDesktop_playPauseButtonIcon__IkUNX',
                buttonContainer: 'SonataFullscreenControlsDesktop_buttonContainer__SpXWc',
            };
        },
        56367: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => u });
            var i = a(32290),
                n = a(96103),
                r = a(55178),
                s = a(39407),
                o = a(21732),
                l = a(82586),
                d = a(19740),
                c = a(57594);
            let u = (0, n.PA)((e) => {
                let { isPinned: t, onClick: a, disabled: n, className: u } = e,
                    { user: _ } = (0, c.g)(),
                    m = t ? 'unpin' : 'pin',
                    p = t ? o.S7.CONTEXT_MENU_UNPIN_BUTTON : o.S7.CONTEXT_MENU_PIN_BUTTON,
                    h = (0, r.useMemo)(() => (t ? (0, i.jsx)(s.A, { id: 'interface-actions.unpin' }) : (0, i.jsx)(s.A, { id: 'interface-actions.pin' })), [t]);
                return (0, i.jsx)(d.Dr, {
                    className: u,
                    onClick: a,
                    icon: (0, i.jsx)(l.I, { variant: m, size: 'xxs' }),
                    'data-test-id': p,
                    disabled: n || !_.isAuthorized,
                    children: h,
                });
            });
        },
        58294: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => g });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(55178),
                o = a(39407),
                l = a(21732),
                d = a(74924),
                c = a(82586),
                u = a(71926),
                _ = a(72676),
                m = a(90169),
                p = a(44128),
                h = a(57594),
                v = a(83557),
                x = a(66436),
                b = a(95082),
                f = a.n(b);
            let g = (0, r.PA)((e) => {
                var t, a, r, b, g, A, N, C, y;
                let { className: T, id: E, albumId: S, streamProgress: B, durationMs: I, playContextParams: j, withTimeLeftText: k = !0, isFinishedLabelHidden: P } = e,
                    w = (0, p.e)(),
                    { sonataState: L, album: O } = (0, h.g)(),
                    D = Math.floor(I / 1e3),
                    [R, M] = (0, s.useState)(!1),
                    F = (0, x.$)(),
                    { isPlaying: U, isCurrent: z } = (0, m.D)({ playContextParams: j, entityId: S ? ''.concat(E, ':').concat(S) : E });
                (0, s.useEffect)(() => {
                    if (!z) return void M(!1);
                    let e =
                        null == w
                            ? void 0
                            : w.state.playerState.status.onChange(() => {
                                  (null == w ? void 0 : w.state.playerState.status.value) === _.MT.BUFFERING && M(!0);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [w, B, z, U]),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == O || null == (e = O.meta) ? void 0 : e.listeningFinished)
                            ? (B.updateEndPositionSec(0), B.updateEverFinished(!0))
                            : (null == O ? void 0 : O.allTracksUnfinished) && B.updateEverFinished(!1);
                    }, [B, null == O ? void 0 : O.allTracksUnfinished, null == O || null == (t = O.meta) ? void 0 : t.listeningFinished]),
                    (0, s.useEffect)(() => {
                        var e, t;
                        z &&
                            (null == L || null == (e = L.entityMeta) ? void 0 : e.streamProgress) &&
                            B &&
                            L.entityMeta.streamProgress.hasEverFinished !== B.hasEverFinished &&
                            B.updateEverFinished(!!L.entityMeta.streamProgress.hasEverFinished),
                            D - ((null == B ? void 0 : B.endPositionSec) || 0) < 1 &&
                                ((null == L || null == (t = L.entityMeta) ? void 0 : t.streamProgress) &&
                                    z &&
                                    (L.entityMeta.streamProgress.updateEverFinished(!0), L.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == B || B.updateEverFinished(!0));
                    }, [
                        z,
                        null == L || null == (a = L.entityMeta) ? void 0 : a.streamProgress,
                        null == L || null == (b = L.entityMeta) || null == (r = b.streamProgress) ? void 0 : r.hasEverFinished,
                        B,
                        B.hasEverFinished,
                        B.endPositionSec,
                        D,
                    ]),
                    (0, s.useEffect)(() => {
                        if (!z) return;
                        let e =
                            null == w
                                ? void 0
                                : w.state.playerState.progress.onChange(() => {
                                      var e;
                                      let t = w.state.playerState.progress.value,
                                          a = null == L || null == (e = L.entityMeta) ? void 0 : e.streamProgress;
                                      0 !== t.position && R && B.updateEndPositionSec(t.position),
                                          z &&
                                              parseInt(''.concat(null == a ? void 0 : a.endPositionSec), 10) !== parseInt(''.concat(t.position), 10) &&
                                              (null == a || a.updateEndPositionSec(t.position));
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [w, B, z, U, R, E, null == L ? void 0 : L.entityMeta]);
                let W = (z && (null == L || null == (A = L.entityMeta) || null == (g = A.streamProgress) ? void 0 : g.endPositionSec)) || B.endPositionSec,
                    V = (0, v.m)(null != W ? W : 0, D),
                    H = (0, s.useMemo)(() => {
                        var e, t, a;
                        if (
                            ((z && (null == L || null == (t = L.entityMeta) || null == (e = t.streamProgress) ? void 0 : e.hasEverFinished)) ||
                                (null == B ? void 0 : B.hasEverFinished) ||
                                (null == O || null == (a = O.meta) ? void 0 : a.listeningFinished)) &&
                            !P
                        )
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(u.HL, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, n.$)(f().text, { [f().text_withoutTimeLeft]: !k }),
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_TEXT,
                                        children: (0, i.jsx)(o.A, { id: 'time.finished' }),
                                    }),
                                    (0, i.jsx)(c.I, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: f().checkIcon,
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_ICON,
                                    }),
                                ],
                            });
                        if (!W || 0 === W) return;
                        let r = D - W,
                            s = F(r);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(u.HL, {
                                    lineClamp: 1,
                                    variant: 'div',
                                    className: (0, n.$)(f().text, { [f().text_withoutTimeLeft]: !k }),
                                    'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT,
                                    children: s,
                                }),
                                r > 1 || P
                                    ? (0, i.jsx)(d.q, {
                                          'aria-valuetext': V,
                                          'aria-busy': z && U,
                                          value: W,
                                          max: D,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS,
                                      })
                                    : (0, i.jsx)(c.I, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: f().checkIcon,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_ICON,
                                      }),
                            ],
                        });
                    }, [
                        D,
                        null == B ? void 0 : B.hasEverFinished,
                        k,
                        F,
                        z,
                        U,
                        null == L || null == (C = L.entityMeta) || null == (N = C.streamProgress) ? void 0 : N.hasEverFinished,
                        null == O || null == (y = O.meta) ? void 0 : y.listeningFinished,
                        P,
                        W,
                        V,
                    ]);
                return (0, i.jsx)('div', { className: (0, n.$)(f().root, T), 'data-test-id': l.OA.track.LISTENING_PROGRESS, children: H });
            });
        },
        59518: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return (e.ARTIST_DONATION_BUTTON = 'artist_donation_button'), (e.TRAILER_BUTTON = 'trailer_button'), (e.CONCERTS_TAB = 'concerts_tab'), e;
            })({});
        },
        59564: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => _ });
            var i = a(55178),
                n = a(91027);
            let r = null,
                s = [],
                o = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void s.push((e) => {
                            e.context.AdvManager.render(...t);
                        });
                    r.context.AdvManager.render(...t);
                },
                l = function () {
                    for (var e, t = arguments.length, a = Array(t), i = 0; i < t; i++) a[i] = arguments[i];
                    let [n, ...o] = a;
                    if (null === r)
                        return void s.push((e) => {
                            var t;
                            e.code.create({ cspNonce: null != (t = null == r ? void 0 : r.cspNonce) ? t : void 0, ...n }, ...o);
                        });
                    r.code.create({ cspNonce: null != (e = r.cspNonce) ? e : void 0, ...n }, ...o);
                },
                d = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void s.push((e) => {
                            e.code.reload(...t);
                        });
                    r.code.reload(...t);
                },
                c = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void s.push((e) => {
                            e.code.destroy(...t);
                        });
                    r.code.destroy(...t);
                },
                u = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void s.push((e) => {
                            e.code.initialize(...t);
                        });
                    r.code.initialize(...t);
                },
                _ = () => {
                    let [e, t] = (0, i.useState)(null !== r),
                        a = (0, n.c)((a) => {
                            var i, n, o;
                            let { cspNonce: l } = a;
                            void 0 === (null == (i = window) ? void 0 : i.Ya.Context) ||
                                void 0 === (null == (n = window) ? void 0 : n.Ya.adfoxCode) ||
                                e ||
                                ((window.yaContextCb = window.yaContextCb || []),
                                (r = { context: window.Ya.Context, code: window.Ya.adfoxCode, cspNonce: l }),
                                t(!0),
                                (o = r),
                                s.forEach((e) => {
                                    e(o);
                                }),
                                (s = []));
                        });
                    return { isLoaded: e, init: a, render: o, create: l, reload: d, destroy: c, initialize: u };
                };
        },
        60244: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => c });
            var i = a(32290),
                n = a(21732),
                r = a(70280),
                s = a(71926),
                o = a(48736),
                l = a.n(o);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: a, title: o, placement: c = 'top', children: u } = e;
                    return (0, i.jsxs)(r.m_, {
                        enabled: a,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, i.jsx)(r.ZI, {
                                className: l().root,
                                'data-test-id': n.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, i.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, i.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61251: (e) => {
            e.exports = {
                wrapper: 'RedAlert_wrapper__rGvGN',
                root: 'RedAlert_root__1VZOr',
                root_light: 'RedAlert_root_light__j7Kr3',
                text: 'RedAlert_text__UB_Bq',
                button: 'RedAlert_button__Ho43z',
            };
        },
        61748: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => m });
            var i = a(32290),
                n = a(55178),
                r = a(60900),
                s = a(21732),
                o = a(91027),
                l = a(63423),
                d = a(82586),
                c = a(44128),
                u = a(86103);
            let _ = (e) => {
                    var t, a, _;
                    let {
                            className: m,
                            variant: p = 'text',
                            iconSize: h,
                            onClick: v,
                            iconClassName: x,
                            withRipple: b = !1,
                            size: f = 's',
                            forwardRef: g,
                            children: A,
                            color: N,
                            disabled: C = !1,
                            isIconCentered: y = !1,
                        } = e,
                        T = (0, c.e)(),
                        { formatMessage: E } = (0, r.A)(),
                        S = null != (t = null == T ? void 0 : T.state.playerState.speed.value) ? t : 1,
                        B = null != (a = u.f_[S]) ? a : 0,
                        [I, j] = (0, n.useState)(B),
                        k = null != (_ = u.pp[I]) ? _ : 1,
                        P = (0, o.c)(() => {
                            var e;
                            let t = (I + 1) % u.pp.length;
                            j(t), null == T || T.setSpeed(Number(null != (e = u.pp[t]) ? e : 1)), null == v || v();
                        });
                    return (
                        (0, n.useEffect)(() => {
                            let e =
                                null == T
                                    ? void 0
                                    : T.state.playerState.speed.onChange(() => {
                                          var e;
                                          let t = T.state.playerState.speed.value;
                                          j(null != (e = u.f_[t]) ? e : 0);
                                      });
                            return () => {
                                null == e || e();
                            };
                        }, [T]),
                        (0, i.jsx)(l.$, {
                            className: m,
                            color: N,
                            withRipple: b,
                            variant: p,
                            size: f,
                            radius: 'xxxl',
                            'aria-label': E({ id: 'interface-actions.speed' }, { speed: k }),
                            onClick: P,
                            icon: (0, i.jsx)(d.I, { size: h, className: x, variant: (0, u.CU)(k, y) }),
                            ref: g,
                            disabled: C,
                            'data-test-id': s.S7.SPEED_BUTTON,
                            children: A,
                        })
                    );
                },
                m = (0, n.forwardRef)((e, t) => (0, i.jsx)(_, { forwardRef: t, ...e }));
        },
        63363: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => b });
            var i = a(32290),
                n = a(60900),
                r = a(91027),
                s = a(67732),
                o = a(45477),
                l = a(75582),
                d = a(57594),
                c = a(90357),
                u = a(92708),
                _ = a(55178),
                m = a(63380),
                p = a(96103),
                h = a(97755),
                v = a(79238);
            let x = (0, p.PA)((e) => {
                    let { album: t, closeToast: a, withLink: n } = e,
                        r = (0, v.b)(t);
                    return (0, i.jsx)(h.O, {
                        closeToast: a,
                        entityVariant: r,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: n,
                    });
                }),
                b = (e) => {
                    let {
                            user: t,
                            paywall: a,
                            albumCPA: { isPlusCPAEnabled: p },
                        } = (0, d.g)(),
                        { formatMessage: h } = (0, n.A)(),
                        { notify: v } = (0, l.l)(),
                        b = (() => {
                            let { notify: e } = (0, l.l)(),
                                [t, a] = (0, _.useState)(!1),
                                { formatMessage: s } = (0, n.A)();
                            return (0, r.c)(async (n) => {
                                let { album: r, withLink: l = !0, withNotification: d = !0 } = n;
                                if (t) return;
                                let _ = { ...(0, u.HO)(r), url: r.url, isLiked: !r.isLiked };
                                a(!0);
                                let p = await r.toggleLike();
                                a(!1),
                                    d &&
                                        (p === m.f.OK
                                            ? e((0, i.jsx)(x, { withLink: l, album: _ }), { containerId: o.u.INFO })
                                            : e((0, i.jsx)(c.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                            });
                        })(),
                        { pageAlbumId: f } = (0, s.T)();
                    return (0, r.c)(async () => {
                        if (e)
                            return p({ pageAlbumId: f, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void a.openModal()
                                : t.isAuthorized
                                  ? b({ album: e })
                                  : void v((0, i.jsx)(c.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    });
                };
        },
        63919: (e) => {
            e.exports = { root: 'CustomPlayerThumb_root__hZTw6', container: 'CustomPlayerThumb_container__lBm2j' };
        },
        64089: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => y });
            var i = a(32290),
                n = a(92708),
                r = a(55178),
                s = a(60900),
                o = a(90404),
                l = a(45477),
                d = a(75582),
                c = a(57594),
                u = a(90357),
                _ = a(96103),
                m = a(21732),
                p = a(6752),
                h = a(50162),
                v = a(79406),
                x = a(97647),
                b = a(8097),
                f = a(19529),
                g = a(38819),
                A = a.n(g);
            let N = (0, _.PA)((e) => {
                let { vibe: t, closeToast: a } = e,
                    { experiments: n } = (0, c.g)(),
                    r = n.checkExperiment(v.z.WebNextWaveAgentExperiment, 'on'),
                    s = (0, p.L)(() => {
                        var e;
                        return r && t.agent
                            ? (0, i.jsx)(f.n, { agent: t.agent, shouldShowControl: !1, className: A().view })
                            : (0, i.jsx)(h._V, {
                                  className: A().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': m.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    o = r && t.agent ? void 0 : 'round';
                return (0, i.jsx)(b.k, {
                    closeToast: a,
                    entityVariant: x.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: s,
                    radius: o,
                    className: A().root,
                });
            });
            var C = a(20982);
            let y = (e) => {
                let { user: t, pinsCollection: a } = (0, c.g)(),
                    { notify: _ } = (0, d.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [p, h] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void _((0, i.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (p) return;
                    let r = { ...(0, n.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        s = a.get(e.pinId);
                    h(!0);
                    let d = await e.togglePin();
                    h(!1),
                        s &&
                            s.type === o._.WAVE_ITEM &&
                            s.data.backgroundImageUrl &&
                            ((r.backgroundImageUrl = s.data.backgroundImageUrl), (r.colors = s.data.colors), (r.agent = s.data.agent)),
                        d &&
                            'object' == typeof d &&
                            'data' in d &&
                            (d.data.backgroundImageUrl && (r.backgroundImageUrl = d.data.backgroundImageUrl),
                            d.data.colors && (r.colors = { average: d.data.colors.average, waveText: d.data.colors.waveText }),
                            d.data.agent && (r.agent = (0, C.K)(d.data.agent))),
                        d
                            ? _((0, i.jsx)(N, { vibe: r }), { containerId: l.u.INFO })
                            : _((0, i.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                }, [m, _, p, a, t.isAuthorized, e]);
            };
        },
        64170: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => A });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(55178),
                o = a(60900),
                l = a(39407),
                d = a(63423),
                c = a(82586),
                u = a(71926),
                _ = a(16172),
                m = a(52068),
                p = a(62376),
                h = a(37240),
                v = a(83920),
                x = a(20472),
                b = a(12894),
                f = a(30310),
                g = a.n(f);
            let A = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { formatMessage: r } = (0, o.A)(),
                    f = r({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, m.st)(),
                        { hash: a } = (0, m.gf)(),
                        { pageId: i } = (0, h.$)(),
                        n = (0, p.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !a || !i) return;
                        let r = (0, _.Fx)({
                            params: {
                                entityType: _.LA.Error,
                                entityId: _.LA.SomethingWrong,
                                errorMessage: e,
                                hash: a,
                                pageId: i,
                                pageStyle: _.QL.Fullscreen,
                                pagePlacement: _.c4.Fullscreen,
                                mainObjectType: _.ky.NonApplicable,
                                mainObjectId: _.ky.NonApplicable,
                            },
                            logger: n,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, _.z5)(t.evgenInstance, r);
                    }, [t, e, a, i, n]);
                })(f);
                let { sendRefreshEvent: A } = (function () {
                        let e = (0, m.st)(),
                            { hash: t } = (0, m.gf)(),
                            { pageId: a } = (0, h.$)(),
                            i = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !a) return;
                                let n = (0, _.Fx)({
                                    params: {
                                        actionType: _.X2.Refresh,
                                        userInteractionType: _.gi.Tap,
                                        entityType: _.LA.Error,
                                        entityId: _.LA.SomethingWrong,
                                        hash: t,
                                        pageId: a,
                                        pageStyle: _.QL.Fullscreen,
                                        pagePlacement: _.c4.Fullscreen,
                                        mainObjectType: _.ky.NonApplicable,
                                        mainObjectId: _.ky.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                n && (0, _.bv)(e.evgenInstance, n);
                            }, [e, t, a, i]),
                        };
                    })(),
                    N = (0, s.useCallback)(() => {
                        A(), (window.location.href = x.Z.main.href);
                    }, [A]),
                    { contentRef: C } = (0, v.g)();
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(g().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(b.L, { withBackwardFallback: '/', className: (0, n.$)(g().navigation, { [g().navigation_desktop]: !C }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, n.$)(g().content, { [g().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(c.I, { className: g().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.DZ, { className: (0, n.$)(g().title, g().important), variant: 'h3', size: 'xs', children: f }),
                                (0, i.jsxs)(u.HL, {
                                    className: (0, n.$)(g().text, g().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(d.$, {
                                    onClick: N,
                                    className: g().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        64308: (e) => {
            e.exports = {
                backgroundProgressbar: 'ChangeTimecodeBackground_backgroundProgressbar__hT_QP',
                progressbar: 'ChangeTimecodeBackground_progressbar__M93Ie',
                timecodeGroup: 'ChangeTimecodeBackground_timecodeGroup__2VQ1N',
                thumb: 'ChangeTimecodeBackground_thumb__vx6J0',
                timecodeGroupCurrent: 'ChangeTimecodeBackground_timecodeGroupCurrent__aGlrB',
                important: 'ChangeTimecodeBackground_important__OSzLR',
                root_focusVisible: 'ChangeTimecodeBackground_root_focusVisible__RLp5i',
                root: 'ChangeTimecodeBackground_root__B89FS',
                root_isPlayingTrack: 'ChangeTimecodeBackground_root_isPlayingTrack__2naHL',
                brandedThumb: 'ChangeTimecodeBackground_brandedThumb__igXsO',
                slider: 'ChangeTimecodeBackground_slider__Jdu3l',
            };
        },
        65215: (e) => {
            e.exports = {
                root: 'NavbarDesktopPlusOptionsBar_root__2WZsH',
                addition: 'NavbarDesktopPlusOptionsBar_addition__DJOlV',
                title: 'NavbarDesktopPlusOptionsBar_title__wGODi',
                buttons: 'NavbarDesktopPlusOptionsBar_buttons__lzCHr',
                optionIcon: 'NavbarDesktopPlusOptionsBar_optionIcon__O1ccD',
            };
        },
        65337: (e) => {
            e.exports = {
                root: 'PlayerBarMobile_root__cdKy_',
                progressBar: 'PlayerBarMobile_progressBar___DmH8',
                info: 'PlayerBarMobile_info__WmdhZ',
                infoCard: 'PlayerBarMobile_infoCard__DCATu',
                coverContainer: 'PlayerBarMobile_coverContainer__a3JDF',
                cover: 'PlayerBarMobile_cover__pnJd1',
                description: 'PlayerBarMobile_description__IxQ9L',
                artists: 'PlayerBarMobile_artists__XVSBV',
                artistLink: 'PlayerBarMobile_artistLink__pieMq',
                infoButtons: 'PlayerBarMobile_infoButtons__JXxfv',
                sliderChangeTimeCode: 'PlayerBarMobile_sliderChangeTimeCode___2Vpu',
                backgroundProgress: 'PlayerBarMobile_backgroundProgress__jevhK',
                shimmerCover: 'PlayerBarMobile_shimmerCover__q1eXc',
                shimmerMeta: 'PlayerBarMobile_shimmerMeta__4vDEK',
                shimmerMetaTitle: 'PlayerBarMobile_shimmerMetaTitle__TsIb2',
                shimmerMetaDescription: 'PlayerBarMobile_shimmerMetaDescription__pIeAr',
            };
        },
        65476: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => c });
            var i = a(55178),
                n = a(91027),
                r = a(57594);
            a(79406);
            var s = a(97201),
                o = a(36477),
                l = (a(39231), a(80408)),
                d = (a(31266), a(71670));
            let c = () => {
                let {
                        experiments: e,
                        user: {
                            account: {
                                data: { hasPlus: t },
                            },
                        },
                    } = (0, r.g)(),
                    a = (0, d.X)(),
                    c = (0, i.useCallback)(() => {}, [!1]),
                    u = (0, n.c)((e, t) => {}),
                    _ = (0, n.c)(() => {
                        let e = (0, l.j)();
                        if (null === e) return;
                        e.delete(s.K.CLID);
                        let t = new URL(window.location.href);
                        (t.search = e.toString()), a(t.toString());
                    }),
                    m = (0, n.c)((e, t) => {
                        if (!e || !t) return;
                        let a = c();
                        if (!a) return;
                        let { parsedClid: i } = a;
                        return t === i.albumId && e.clid === i.cpa.clid && e.artistId === i.cpa.artistId;
                    }),
                    p = (0, n.c)((e) => {
                        let t = c();
                        return (null == t ? void 0 : t.parsedClid.albumId) === e;
                    }),
                    h = (0, n.c)((e, t) => {
                        let a = c();
                        if (!a || a.parsedClid.albumId !== e) return t;
                        let { href: i } = (0, o.u)(t, { query: { [s.K.CLID]: a.queryClid } });
                        return i;
                    });
                return {
                    isCPAEnabled: !1,
                    getClidFromQuery: c,
                    setClidToQuery: u,
                    deleteClidFromQuery: _,
                    checkIsValidClid: m,
                    getAlbumUrlWithSavedClid: h,
                    checkIsCurrentAlbumPage: p,
                };
            };
        },
        65497: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => n });
            var i = a(53161);
            let n = (e) => e.startsWith(i.nl);
        },
        66436: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => r });
            var i = a(55178),
                n = a(60900);
            let r = () => {
                let { formatMessage: e } = (0, n.A)();
                return (0, i.useCallback)(
                    function (t) {
                        let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            i = Math.floor(t / 60),
                            n = function (t) {
                                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = e({ id: 'time.minutes-left' }, { minutes: t });
                                return a ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(i) : i;
                            };
                        if (t < 1) return e({ id: 'time.finished' });
                        if (t < 60)
                            return (function (t) {
                                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = e({ id: 'time.seconds-left' }, { seconds: t });
                                return a ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(i) : i;
                            })(Math.floor(t), a);
                        if (i < 60) return n(i, a);
                        let r = Math.floor(i / 60),
                            s = i % 60,
                            o = (function (t) {
                                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return a ? e({ id: 'time.hours-left' }, { hours: t }) : e({ id: 'time.hours' }, { hours: t });
                            })(r, a);
                        return s > 0 ? ''.concat(o, ' ').concat(n(s)) : o;
                    },
                    [e],
                );
            };
        },
        67544: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => i });
            var i = (function (e) {
                return (e.ANDROID = 'Android'), (e.IOS = 'iOS'), (e.MACOS = 'MacOS'), (e.WINDOWS = 'Windows'), e;
            })({});
        },
        67732: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => r });
            var i = a(55178),
                n = a(56008);
            function r() {
                return (0, i.useContext)(n.H);
            }
        },
        68912: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => T });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(21916),
                o = a(55178),
                l = a(60900),
                d = a(39407),
                c = a(21732),
                u = a(70280),
                _ = a(71926),
                m = a(41677),
                p = a(28999),
                h = a(57594),
                v = a(53514),
                x = a(85017),
                b = a(13798),
                f = a(61258),
                g = a(25649),
                A = a(24760),
                N = a(84141),
                C = a(5856),
                y = a.n(C);
            let T = (0, r.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: a,
                        track: r,
                        albumArtists: C,
                        withExplicitMark: T = !0,
                        withSecondaryColor: E,
                        captionSize: S = 'm',
                        explicitSize: B = 'xxxs',
                        withAllArtistsTitle: I,
                        textClassName: j,
                        artistsClassName: k,
                        ignoreDislikedStyles: P,
                        withCustomTooltip: w = !0,
                        hasLineClamp: L = !0,
                        withSavingQueryParams: O,
                        beforeTitle: D,
                        withArtistLink: R = !0,
                        withTrackLink: M = !0,
                        afterTitle: F,
                        withContextMenuArtists: U,
                    } = e,
                    { formatMessage: z } = (0, l.A)(),
                    { sendNavigateSearchFeedback: W } = (0, p.z)(),
                    {
                        settings: { isMobile: V },
                    } = (0, h.g)(),
                    H = (0, A.$)({ withCustomTooltip: w }),
                    K = (0, s.useSearchParams)(),
                    G = r.getUrl(O ? Object.fromEntries(K) : void 0),
                    Y = (0, o.useMemo)(() => {
                        var e;
                        let t = z({ id: 'entity-names.track-name' }, { trackName: r.title });
                        return ''.concat(t, ' ').concat(null != (e = r.version) ? e : '');
                    }, [z, r.title, r.version]),
                    $ = (0, N.O)({ track: r, onNavigate: W, withSavingQueryParams: O, entityType: x.n.TRACK }),
                    q = (0, o.useCallback)(
                        (e) => {
                            let t = ''.concat(r.title, ' ').concat(!r.isRemoved && r.version ? r.version : '');
                            return (0, i.jsx)(u.m_, {
                                enabled: H && !V,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: v.V,
                                children: (0, i.jsx)(_.HL, {
                                    className: (0, n.$)(y().text, y().title),
                                    type: 'entity',
                                    size: S,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: r.title,
                                }),
                            });
                        },
                        [V, H, S, r.isRemoved, r.title, r.version],
                    ),
                    Z = (0, o.useMemo)(() => {
                        let e = ''.concat(r.title, ' ').concat(!r.isRemoved && r.version ? r.version : '');
                        return r.isRemoved
                            ? (0, i.jsx)(u.m_, {
                                  enabled: H && !V,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: z({ id: 'track-title.error-not-found' }),
                                  hoverSettings: v.V,
                                  children: (0, i.jsx)(_.HL, {
                                      className: (0, n.$)(y().text, y().title),
                                      type: 'entity',
                                      size: S,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: H ? void 0 : z({ id: 'track-title.error-not-found' }),
                                      children: (0, i.jsx)(d.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : r.hasTrackLink && M
                              ? (0, i.jsx)(f.N, {
                                    onClick: $,
                                    className: y().albumLink,
                                    href: G,
                                    'aria-label': Y,
                                    title: H ? void 0 : e,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: q(),
                                })
                              : q({ 'data-test-id': c.Kq.track.TRACK_TITLE });
                    }, [V, r.title, r.isRemoved, r.version, r.hasTrackLink, q, H, z, S, Y, $, G, M]),
                    Q = (0, g.s)(r.artists, C),
                    X = (0, o.useMemo)(() => +!!L, [L]);
                return (0, i.jsx)('div', {
                    className: (0, n.$)(y().root, { [y().root_disabled]: !r.isAvailable, [y().root_disliked]: r.isDisliked && !P, [y().root_withSecondaryColor]: E }, t),
                    children: (0, i.jsxs)('div', {
                        className: y().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, n.$)(y().titleContainer, { [y().titleContainer_withVersion]: r.version }, a),
                                children: [
                                    (0, i.jsxs)(_.HL, {
                                        className: (0, n.$)(y().text, j),
                                        type: 'entity',
                                        size: S,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            D,
                                            Z,
                                            !r.isRemoved &&
                                                r.version &&
                                                (0, i.jsxs)(_.HL, {
                                                    className: (0, n.$)(y().text, y().version),
                                                    type: 'entity',
                                                    size: S,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: H ? void 0 : r.version,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', r.version],
                                                }),
                                        ],
                                    }),
                                    r.explicitDisclaimer &&
                                        T &&
                                        (0, i.jsx)(b.N, {
                                            containerClassName: y().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: B,
                                            variant: r.explicitDisclaimer,
                                            className: y().explicitMark,
                                            trackId: r.id,
                                        }),
                                    F,
                                ],
                            }),
                            Q.length > 0 &&
                                (0, i.jsx)(m.i, {
                                    className: (0, n.$)(y().text, { [y().artists]: L }, k, j),
                                    withAllArtistsTitle: I,
                                    linkClassName: (0, n.$)(y().text, y().link),
                                    captionClassName: (0, n.$)(y().text, y().artistCaption),
                                    artists: Q,
                                    withLink: r.isNonUserGenerated && R,
                                    lineClamp: X,
                                    captionSize: S,
                                    withContextMenu: U,
                                }),
                        ],
                    }),
                });
            });
        },
        69200: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedDownloadBarMinimized_root__nEPqZ',
                icon: 'NavbarDesktopAnimatedDownloadBarMinimized_icon__Y2hec',
                button: 'NavbarDesktopAnimatedDownloadBarMinimized_button__hesBw',
            };
        },
        70208: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => i });
            var i = (function (e) {
                return (e.BRANDED = 'branded'), (e.DEFAULT = 'default'), (e.DUCK = 'duck'), (e.CAR = 'car'), e;
            })({});
        },
        70314: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => f });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(55178),
                o = a(21732),
                l = a(96764),
                d = a(91027),
                c = a(54862),
                u = a(6752),
                _ = a(63423),
                m = a(71926),
                p = a(98740),
                h = a(84062),
                v = a(57594),
                x = a(71904),
                b = a.n(x);
            let f = (0, r.PA)((e) => {
                var t, a, r, x;
                let { anchorId: f, screenId: g, button: A, buttonSize: N, buttonClassName: C, textClassName: y, feedbackToken: T, hide: E } = e,
                    { communication: S } = (0, v.g)(),
                    [B] = (0, c.d)(),
                    { openPaymentWidgetModal: I } = (0, p.D)({
                        storeName: 'music',
                        communicationId: null != (x = null == (t = A.action) ? void 0 : t.communicationId) ? x : '',
                        offerElement: { element: B, intersectionPropertyId: 'barbellow' },
                        isEnabled: !!(null == (a = A.action) ? void 0 : a.communicationId),
                    }),
                    j = ((null == (r = A.action) ? void 0 : r.type) === l.T.LINK && A.action.value) || '',
                    k = (0, h.Z)(j),
                    P = (0, d.c)((e) => {
                        if (A.action)
                            switch ((f && g && A.action.id && S.action(f, g, A.action.id, T), A.action.type)) {
                                case l.T.PAYWALL:
                                    I(), null == E || E();
                                    return;
                                case l.T.LINK:
                                    A.action.value && (k(e), null == E || E());
                                    return;
                                case l.T.CLOSE:
                                    null == E || E();
                                    return;
                            }
                    }),
                    w = (0, s.useMemo)(() => {
                        if (A.textColor) return { color: A.textColor };
                    }, [A.textColor]),
                    L = (0, u.L)(() => {
                        var e;
                        switch (null == (e = A.action) ? void 0 : e.type) {
                            case l.T.LINK:
                                return o.OA.communicationButton.COMMUNICATION_BUTTON_LINK;
                            case l.T.CLOSE:
                                return o.OA.communicationButton.COMMUNICATION_BUTTON_CLOSE;
                            default:
                                return o.OA.communicationButton.COMMUNICATION_BUTTON_PAYWALL;
                        }
                    });
                return (0, i.jsx)(_.$, {
                    className: (0, n.$)(b().root, b()['root_'.concat(A.color)], C),
                    role: j ? 'link' : 'button',
                    color: A.color ? A.color : void 0,
                    radius: 'xxxl',
                    onClick: P,
                    size: N,
                    'data-test-id': L,
                    children: (0, i.jsx)(m.HL, { className: (0, n.$)(b().text, y), variant: 'div', type: 'text', size: 'm', style: w, children: A.text }),
                });
            });
        },
        70390: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => p });
            var i = a(32290),
                n = a(92708),
                r = a(55178),
                s = a(60900),
                o = a(45477),
                l = a(75582),
                d = a(57594),
                c = a(90357),
                u = a(97647),
                _ = a(8097);
            let m = (e) => {
                    let { artist: t, closeToast: a } = e;
                    return (0, i.jsx)(_.k, {
                        closeToast: a,
                        entityVariant: u.c.ARTIST,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        entityTitle: t.name,
                        isPinned: t.isPinned,
                        radius: 'round',
                    });
                },
                p = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: a } = (0, l.l)(),
                        { formatMessage: u } = (0, s.A)(),
                        [_, p] = (0, r.useState)(!1);
                    return (0, r.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void a((0, i.jsx)(c.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let r = { ...(0, n.HO)(e), isPinned: !e.isPinned };
                        p(!0);
                        let s = await e.togglePin();
                        p(!1),
                            s
                                ? a((0, i.jsx)(m, { artist: r }), { containerId: o.u.INFO })
                                : a((0, i.jsx)(c.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [e, t.isAuthorized, _, u, a]);
                };
        },
        70583: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedPlusOptionsBar_root__dOEU7',
                button: 'NavbarDesktopAnimatedPlusOptionsBar_button__NRXbJ',
                important: 'NavbarDesktopAnimatedPlusOptionsBar_important__mltBe',
                icon: 'NavbarDesktopAnimatedPlusOptionsBar_icon__EKWgb',
                optionIcon: 'NavbarDesktopAnimatedPlusOptionsBar_optionIcon__gPbRm',
                popoverContent: 'NavbarDesktopAnimatedPlusOptionsBar_popoverContent__wSXo7',
            };
        },
        70627: (e) => {
            e.exports = {
                root_withLongText: 'BaseNotificationPin_root_withLongText__BKqhi',
                title: 'BaseNotificationPin_title__46xmX',
                link: 'BaseNotificationPin_link__4EvPj',
                capitalizedEntity: 'BaseNotificationPin_capitalizedEntity__HePYm',
                text: 'BaseNotificationPin_text__LF3L_',
                image: 'BaseNotificationPin_image__O7ptT',
            };
        },
        71670: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => n });
            var i = a(55178);
            let n = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        71904: (e) => {
            e.exports = {
                root_primary: 'CommunicationButton_root_primary__rrmax',
                root_plus: 'CommunicationButton_root_plus__d48MV',
                root_secondary: 'CommunicationButton_root_secondary__YQujH',
                text: 'CommunicationButton_text__kObnq',
            };
        },
        72054: (e) => {
            e.exports = {
                root: 'DeeplinkAndOnelinkContainer_root__69SNc',
                button: 'DeeplinkAndOnelinkContainer_button__QzMwG',
                buttonTitle: 'DeeplinkAndOnelinkContainer_buttonTitle__KmdNV',
                buttonIcon: 'DeeplinkAndOnelinkContainer_buttonIcon__U6JJv',
                musicIcon: 'DeeplinkAndOnelinkContainer_musicIcon__jIu2m',
                onelinkIcon: 'DeeplinkAndOnelinkContainer_onelinkIcon__ELZLH',
            };
        },
        72445: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => c });
            var i = a(21916),
                n = a(91027),
                r = a(6752),
                s = a(67544),
                o = a(36477),
                l = a(82237);
            let d = /[^\w\-./:?=&[\]%]/gi,
                c = (e) => {
                    let { browserInfo: t, login: a } = e,
                        c = (0, i.useSearchParams)(),
                        u = (0, r.L)(() => {
                            var e;
                            let a = parseFloat(null != (e = null == t ? void 0 : t.version) ? e : '');
                            return (null == t ? void 0 : t.OSFamily) === s.j.IOS
                                ? a >= l.E
                                : (null == t ? void 0 : t.OSFamily) === s.j.ANDROID
                                  ? a >= l.o3
                                  : null == t
                                    ? void 0
                                    : t.inAppBrowser;
                        });
                    return (0, n.c)((e) =>
                        u && e
                            ? ((e, t, a) => {
                                  let i = e.get('deeplink_url'),
                                      n = e.get('channel'),
                                      r = e.get('tags'),
                                      s = { campaign: 'yamusicweb', channel: null != n ? n : 'musicmain', deep_link_value: t, af_dp: t };
                                  a && (s.login = a), i && ((s.deep_link_value = l.Lz + i), (s.af_dp = l.Lz + i), (s.deeplink_url = i)), r && (s.pid = r);
                                  let c = Object.keys(s).reduce((e, t) => {
                                          let a = s[t];
                                          if (void 0 !== a) {
                                              let i = ((e) => ('string' == typeof e ? e.replace(d, '') : ''))(a);
                                              i && (e[t] = i);
                                          }
                                          return e;
                                      }, {}),
                                      { href: u } = (0, o.u)('/', { query: c, options: { host: l.xR } });
                                  return u;
                              })(c, e, a)
                            : ((e) => {
                                  if (e === s.j.IOS) {
                                      let { href: e } = (0, o.u)('/ru/app/andeks.muzyka/id520797969', {
                                          query: { mt: 8, uo: 4, at: '1000lqjf', ct: 'music' },
                                          options: { host: 'https://itunes.apple.com' },
                                      });
                                      return e;
                                  }
                                  if (e === s.j.ANDROID) {
                                      let { href: e } = (0, o.u)('/store/apps/details', {
                                          query: { id: 'ru.yandex.music' },
                                          options: { host: 'https://play.google.com' },
                                      });
                                      return e;
                                  }
                                  let { href: t } = (0, o.u)('/apps', { options: { host: 'https://music.yandex.ru' } });
                                  return t;
                              })(null == t ? void 0 : t.OSFamily),
                    );
                };
        },
        73017: (e) => {
            e.exports = {
                root: 'DefaultLayout_root__7J0wo',
                root_applicationPreserveTitleBar: 'DefaultLayout_root_applicationPreserveTitleBar__ygJtq',
                root_withBarBelow: 'DefaultLayout_root_withBarBelow__jPsaV',
                rootNewVibe: 'DefaultLayout_rootNewVibe__MSDOn',
                rootNewVibe_withBarBelow: 'DefaultLayout_rootNewVibe_withBarBelow__82_qG',
                barBelow: 'DefaultLayout_barBelow__y6PFU',
                navbar: 'DefaultLayout_navbar__LIQWG',
                navbar_application_macos: 'DefaultLayout_navbar_application_macos__9dj3u',
                navbar_application_linux: 'DefaultLayout_navbar_application_linux__ejlGn',
                navbar_application_windows: 'DefaultLayout_navbar_application_windows__3hDQ_',
            };
        },
        73021: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => _ });
            var i = a(32290),
                n = a(63618),
                r = a(60900),
                s = a(91027),
                o = a(63423),
                l = a(82586),
                d = a(21732),
                c = a(1439),
                u = a.n(c);
            let _ = (e) => {
                let { isDisabled: t, shuffle: a, className: c, size: _ = 'xxxs', variant: m = 'default', iconSize: p = 'xs', color: h, onClick: v } = e,
                    { formatMessage: x } = (0, r.A)(),
                    b = (0, s.c)((e) => {
                        null == v || v(), e.stopPropagation();
                    });
                return (0, i.jsx)(o.$, {
                    className: c,
                    radius: 'round',
                    size: _,
                    variant: m,
                    color: h,
                    withRipple: !1,
                    disabled: t,
                    'aria-label': x({ id: 'player-actions.shuffle' }),
                    'aria-pressed': !t && a,
                    'aria-hidden': t,
                    icon: (0, i.jsx)(l.I, {
                        variant: 'shuffle',
                        size: p,
                        className: (0, n.$)(u().shuffleIcon, { [u().shuffleIcon_disabled]: t, [u().shuffleIcon_on]: !t && a, [u().shuffleIcon_off]: !t && !a }),
                    }),
                    onClick: b,
                    'data-test-id': !a || t ? d.Kq.sonata.SHUFFLE_BUTTON : d.Kq.sonata.SHUFFLE_BUTTON_ON,
                });
            };
        },
        73192: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => p });
            var i = a(32290),
                n = a(92708),
                r = a(55178),
                s = a(60900),
                o = a(45477),
                l = a(75582),
                d = a(57594),
                c = a(90357),
                u = a(97647),
                _ = a(8097);
            let m = (e) => {
                    let { playlist: t, closeToast: a } = e;
                    return (0, i.jsx)(_.k, {
                        closeToast: a,
                        entityVariant: u.c.PLAYLIST,
                        entityUrl: t.url,
                        coverUri: t.coverUri,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                },
                p = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: a } = (0, l.l)(),
                        { formatMessage: u } = (0, s.A)(),
                        [_, p] = (0, r.useState)(!1);
                    return (0, r.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void a((0, i.jsx)(c.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let r = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                        p(!0);
                        let s = await e.togglePin();
                        p(!1),
                            s
                                ? a((0, i.jsx)(m, { playlist: r }), { containerId: o.u.INFO })
                                : a((0, i.jsx)(c.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [t.isAuthorized, _, e, a, u]);
                };
        },
        73474: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { p: () => i }),
                (function (e) {
                    (e.WEB_MAIN = 'web_main'),
                        (e.MAIN = 'main'),
                        (e.WEB_COLLECTION = 'web_collection'),
                        (e.NON_MUSIC = 'non_music'),
                        (e.KIDS = 'kids'),
                        (e.MAIN_NOLOGIN = 'main_nologin'),
                        (e.SEARCH = 'Search'),
                        (e.ARTIST = 'artist_web'),
                        (e.CONCERTS = 'concerts'),
                        (e.CONCERT_PAGE = 'concert_page');
                })(i || (i = {}));
        },
        74523: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            let i = (e, t) => {
                let [a, i] = e.split('?'),
                    n = new URLSearchParams(i || '');
                for (let [e, a] of new URLSearchParams(t).entries()) n.set(e, a);
                let r = n.toString();
                return ''.concat(a).concat(r ? '?'.concat(r) : '');
            };
        },
        75314: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => r, o: () => n });
            var i = a(14257);
            let n = { [i.S.Dark]: 'ym-dark-theme', [i.S.Light]: 'ym-light-theme' },
                r = (e) => {
                    switch (e) {
                        case i.S.Light:
                        case i.S.Dark:
                            return n[e];
                        default:
                            return '';
                    }
                };
        },
        75487: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        76219: (e) => {
            e.exports = {
                repeatIcon_none: 'RepeatButton_repeatIcon_none__2nb1J',
                repeatIcon_context: 'RepeatButton_repeatIcon_context__QwVY9',
                repeatIcon_one: 'RepeatButton_repeatIcon_one___mSkU',
                repeatIcon_disabled: 'RepeatButton_repeatIcon_disabled__LwHV_',
            };
        },
        78176: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => f });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(55178),
                o = a(16172),
                l = a(21732),
                d = a(91027),
                c = a(50162),
                u = a(19740),
                _ = a(86269),
                m = a(71926),
                p = a(47745),
                h = a(84062),
                v = a(57594),
                x = a(16510),
                b = a.n(x);
            let f = (0, r.PA)((e) => {
                let { artist: t, className: a } = e,
                    { fullscreenPlayer: r } = (0, v.g)(),
                    x = (0, h.Z)(t.url),
                    g = (0, p.N)(),
                    A = (0, s.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(f, { artist: t, className: a }, t.id)), e), []))
                        );
                    }, [t, a]),
                    N = (0, d.c)((e) => {
                        r.modal.isOpened && r.modal.close(), g({ to: o.QT.ArtistScreen }), x(e);
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, n.$)(b().root, a),
                            onClick: N,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(_.t, {
                                    radius: 'round',
                                    className: b().cover,
                                    children: (0, i.jsx)(c._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: b().image }),
                                }),
                                (0, i.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        78648: (e) => {
            e.exports = {
                root: 'BrandedPlayerModal_root__hejJx',
                modalContent: 'BrandedPlayerModal_modalContent__xcXKK',
                image: 'BrandedPlayerModal_image__paBEA',
                closeButton: 'BrandedPlayerModal_closeButton__W3QRx',
                content: 'BrandedPlayerModal_content__b9e2P',
                actions: 'BrandedPlayerModal_actions__6aeD7',
                button: 'BrandedPlayerModal_button__WZTH7',
            };
        },
        79238: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => r });
            var i = a(64605),
                n = a(97647);
            let r = (e) => {
                switch (e.type) {
                    case i._.PODCAST:
                        return n.c.PODCAST;
                    case i._.AUDIOBOOK:
                        return n.c.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return n.c.FAIRY_TALE;
                    default:
                        return n.c.ALBUM;
                }
            };
        },
        80792: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => m });
            var i = a(32290),
                n = a(96103),
                r = a(21916),
                s = a(55178),
                o = a(26749),
                l = a(59564),
                d = a(62376),
                c = a(57594),
                u = a(14257),
                _ = a(50);
            let m = (0, n.PA)((e) => {
                let { className: t, ownerId: a, containerId: n, params: m, onLoad: p, onRender: h, onNoAds: v, onError: x } = e,
                    { user: b } = (0, c.g)(),
                    f = (0, r.usePathname)(),
                    g = (0, r.useSearchParams)(),
                    { create: A, destroy: N, initialize: C } = (0, l.s)(),
                    { theme: y } = (0, _.W)(),
                    T = (0, d.U)(),
                    E = (0, s.useRef)(!0),
                    S = { ...m };
                return (
                    (S.puid1 = b.advertRole),
                    (0, s.useEffect)(() => {
                        A({
                            ownerId: a,
                            containerId: n,
                            params: S,
                            insertionCodeParams: { darkTheme: y === u.S.Dark, additionalClasses: y ? [y] : [] },
                            onClose: () => {
                                T.log('[AdvertBanner] Close');
                            },
                            onLoad: (e) => {
                                if ((T.log('[AdvertBanner] Load', { data: e }), void 0 === e)) {
                                    null == p || p(o.h.EMPTY);
                                    return;
                                }
                                if ((null == e ? void 0 : e.bundleName) === 'banner.direct') {
                                    null == p || p(o.h.DIRECT);
                                    return;
                                }
                                null == p || p(o.h.CREATIVE);
                            },
                            onRender: () => {
                                T.log('[AdvertBanner] Render'), null == h || h();
                            },
                            onStub: () => {
                                T.log('[AdvertBanner] Stub'), null == v || v();
                            },
                            onError: (e) => {
                                T.log('[AdvertBanner] Error', { error: e }), null == x || x();
                            },
                        });
                    }, []),
                    (0, s.useEffect)(() => {
                        if (E.current) {
                            E.current = !1;
                            return;
                        }
                        T.log('[AdvertBanner] Destroy'), N(n), T.log('[AdvertBanner] Initialize'), C(n);
                    }, [f, g, n, N, C, T]),
                    (0, i.jsx)('div', { id: n, className: t, tabIndex: -1, 'aria-hidden': !0 })
                );
            });
        },
        81501: (e) => {
            e.exports = { root: 'TicketImage_root__vTgWd' };
        },
        82237: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => n, Lz: () => s, o3: () => r, xR: () => i });
            let i = 'https://music.onelink.me/VkDa',
                n = 16,
                r = 7,
                s = 'yandexmusic://';
        },
        83278: (e) => {
            e.exports = {
                root: 'BarBelow_root__KFexT',
                root_hidden: 'BarBelow_root_hidden__eTKvU',
                root_show: 'BarBelow_root_show__yIQBX',
                show: 'BarBelow_show__5GQBP',
                root_hide: 'BarBelow_root_hide__d1a_5',
                hide: 'BarBelow_hide__a0dwD',
                image: 'BarBelow_image__GfExj',
                content: 'BarBelow_content__GWWbR',
                title: 'BarBelow_title__hBNPY',
                text: 'BarBelow_text__tU_Rm',
                buttons: 'BarBelow_buttons__XGwDQ',
                advDisclaimer: 'BarBelow_advDisclaimer__ZbpQU',
                advDisclaimerTrigger: 'BarBelow_advDisclaimerTrigger___O0bh',
                advDisclaimerContent: 'BarBelow_advDisclaimerContent__lKKit',
                advDisclaimerInner: 'BarBelow_advDisclaimerInner__1CyNr',
                advDisclaimerText: 'BarBelow_advDisclaimerText__wJgZZ',
            };
        },
        83439: (e) => {
            e.exports = { root: 'Navbar_root__chF4R', root_collapsed: 'Navbar_root_collapsed__pozJX' };
        },
        83557: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => r });
            var i = a(60900),
                n = a(29913);
            let r = (e, t) => {
                let { formatMessage: a } = (0, i.A)(),
                    { hours: r, minutes: s, seconds: o } = (0, n.e)(e),
                    { hours: l, minutes: d, seconds: c } = (0, n.e)(t);
                return a(
                    { id: 'non-music.non-music-progress' },
                    { progress: Math.round((e / t) * 100), beginHours: r, beginMinutes: s, beginSeconds: o, endHours: l, endMinutes: d, endSeconds: c },
                );
            };
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        83920: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => n, g: () => r });
            var i = a(55178);
            let n = (0, i.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                r = () => (0, i.useContext)(n);
        },
        88386: (e) => {
            e.exports = {
                imageContainer: 'AudioAd_imageContainer__ZmZsg',
                image: 'AudioAd_image__f6DJR',
                image_fallback: 'AudioAd_image_fallback__7ufC3',
                backgroundImage: 'AudioAd_backgroundImage__aqvQd',
                contextMenuButton: 'AudioAd_contextMenuButton__fbb47',
                contextMenuIcon: 'AudioAd_contextMenuIcon__KTxE1',
                contextMenuHeader: 'AudioAd_contextMenuHeader__97XqU',
            };
        },
        88763: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => i });
            let i = (0, a(55178).createContext)({ data: null, isEnabled: !1 });
        },
        89053: (e) => {
            e.exports = { tooltip: 'NavigationOnboarding_tooltip___xZni', text: 'NavigationOnboarding_text__YW93F', button: 'NavigationOnboarding_button__Vc_Ka' };
        },
        89543: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedShimmerBar_root__o3xBB',
                barShimmer: 'NavbarDesktopAnimatedShimmerBar_barShimmer__ejAhM',
                buttonShimmer: 'NavbarDesktopAnimatedShimmerBar_buttonShimmer___3Vz2',
            };
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        90404: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { _: () => i }),
                (function (e) {
                    (e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item');
                })(i || (i = {}));
        },
        91253: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => h });
            var i = a(32290),
                n = a(92708),
                r = a(55178),
                s = a(60900),
                o = a(45477),
                l = a(75582),
                d = a(57594),
                c = a(90357),
                u = a(96103),
                _ = a(8097),
                m = a(79238);
            let p = (0, u.PA)((e) => {
                    let { album: t, closeToast: a } = e,
                        n = (0, m.b)(t);
                    return (0, i.jsx)(_.k, {
                        closeToast: a,
                        entityVariant: n,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                }),
                h = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: a } = (0, l.l)(),
                        { formatMessage: u } = (0, s.A)(),
                        [_, m] = (0, r.useState)(!1);
                    return (0, r.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void a((0, i.jsx)(c.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let r = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                        m(!0);
                        let s = await e.togglePin();
                        m(!1),
                            s
                                ? a((0, i.jsx)(p, { album: r }), { containerId: o.u.INFO })
                                : a((0, i.jsx)(c.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [e, u, a, _, t.isAuthorized]);
                };
        },
        91624: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        91819: (e) => {
            e.exports = {
                userProfileContainer: 'NavbarDesktopUserWidget_userProfileContainer__ha3Tm',
                userProfile: 'NavbarDesktopUserWidget_userProfile__vqeMC',
                userId: 'NavbarDesktopUserWidget_userId__ihL7U',
                userMeta_withAnimation: 'NavbarDesktopUserWidget_userMeta_withAnimation__rrz0Y',
                animation_show: 'NavbarDesktopUserWidget_animation_show__fadL3',
                userMeta_collapsed: 'NavbarDesktopUserWidget_userMeta_collapsed__cSARy',
                animation_hide: 'NavbarDesktopUserWidget_animation_hide__tO81o',
                unauthorizedBar: 'NavbarDesktopUserWidget_unauthorizedBar__HE5Yu',
            };
        },
        91853: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => n });
            var i = a(19383);
            let n = (e) => {
                let { artist: t, callback: a, shouldHistoryBack: n } = e;
                return (0, i.l)({ entity: t, callback: a, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        92013: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { T: () => i }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(i || (i = {}));
        },
        92854: (e) => {
            e.exports = {
                root: 'SideAdvertBanner_root__hT1jJ',
                root_vibePage: 'SideAdvertBanner_root_vibePage__PLY_P',
                root_hidden: 'SideAdvertBanner_root_hidden__Yg__R',
                contentWrapper: 'SideAdvertBanner_contentWrapper__5255E',
                content: 'SideAdvertBanner_content__nDGWG',
            };
        },
        92881: (e) => {
            e.exports = {
                root: 'WithTopBanner_root__P__x3',
                banner: 'WithTopBanner_banner__x1Ia2',
                banner_canShow: 'WithTopBanner_banner_canShow__5KA30',
                content: 'WithTopBanner_content__6Vh7a',
            };
        },
        93192: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => h });
            var i = a(32290),
                n = a(96103),
                r = a(55178),
                s = a(26749),
                o = a(57594),
                l = a(50),
                d = a(88763),
                c = a(14257);
            let u = (e, t) => (t === c.S.Dark ? Math.floor(0.8 * e) : Math.min(255, Math.floor(e + (255 - e) * 0.3))),
                _ = (e) => e.toString(16).padStart(2, '0');
            var m = a(7050),
                p = (function (e) {
                    return (e.PLAYLIST_GRADIENT = 'branded_playlist_gradient'), (e.AXE_GRADIENT = 'branded_axe_gradient'), e;
                })({});
            let h = (0, n.PA)((e) => {
                let { children: t } = e,
                    {
                        advertBanners: {
                            banners: { brandedPlaylistBanner: a, brandedEntityAxeBanner: n },
                        },
                    } = (0, o.g)(),
                    { theme: c } = (0, l.W)(),
                    [h, v] = (0, r.useState)(null),
                    x = (e) => {
                        ((e) =>
                            (0, m.m)(e) &&
                            (e.type === p.PLAYLIST_GRADIENT || e.type === p.AXE_GRADIENT) &&
                            'object' == typeof e.payload &&
                            null !== e.payload &&
                            !Array.isArray(e.payload) &&
                            'color' in e.payload)(e.data) && v(e.data);
                    };
                (0, r.useEffect)(
                    () => (
                        window.addEventListener('message', x),
                        () => {
                            window.removeEventListener('message', x);
                        }
                    ),
                    [],
                );
                let b = (0, r.useMemo)(() => {
                        if ((null == h ? void 0 : h.payload.color) === void 0) return {};
                        let e = {
                            '--entity-branding-gradient-color-from':
                                n.isVisible && n.type !== s.h.EMPTY && c
                                    ? ((e, t) => {
                                          let a = e.replace('#', '');
                                          if (
                                              (3 === a.length &&
                                                  (a = a
                                                      .split('')
                                                      .map((e) => e + e)
                                                      .join('')),
                                              6 !== a.length)
                                          )
                                              return e;
                                          let i = parseInt(a.substring(0, 2), 16),
                                              n = parseInt(a.substring(2, 4), 16),
                                              r = parseInt(a.substring(4, 6), 16),
                                              s = u(i, t),
                                              o = u(n, t),
                                              l = u(r, t);
                                          return '#'.concat(_(s)).concat(_(o)).concat(_(l));
                                      })(h.payload.color, c)
                                    : h.payload.color,
                            '--entity-branding-gradient-color-to': 'transparent',
                        };
                        return null === h.payload.button
                            ? e
                            : {
                                  ...e,
                                  '--entity-branding-button-background-color': h.payload.button.backgroundColor,
                                  '--entity-branding-button-text-color': h.payload.button.textColor,
                              };
                    }, [null == h ? void 0 : h.payload.color, null == h ? void 0 : h.payload.button, c, n.isVisible, n.type]),
                    f = (0, r.useMemo)(() => {
                        let e = a.isVisible && a.type !== s.h.EMPTY,
                            t = n.isVisible && n.type !== s.h.EMPTY,
                            i = e || t;
                        return i && null !== h ? { data: { type: h.type, style: b, button: h.payload.button }, isEnabled: i } : { data: null, isEnabled: !1 };
                    }, [h, b, a.isVisible, a.type, n.isVisible, n.type]);
                return (0, i.jsx)(d.G.Provider, { value: f, children: t });
            });
        },
        95082: (e) => {
            e.exports = {
                root: 'ListeningProgress_root__Rvlcn',
                text_withoutTimeLeft: 'ListeningProgress_text_withoutTimeLeft__eAmOF',
                checkIcon: 'ListeningProgress_checkIcon___yh49',
            };
        },
        95731: (e) => {
            e.exports = {
                timecode: 'TimecodeGroup_timecode__IJXpy',
                timecode_current: 'TimecodeGroup_timecode_current__wv9pb',
                timecode_current_animation: 'TimecodeGroup_timecode_current_animation__kZUW_',
                timecode_current_hidden: 'TimecodeGroup_timecode_current_hidden__D88_K',
                timecode_end: 'TimecodeGroup_timecode_end__kzP5g',
                timecode_end_hidden: 'TimecodeGroup_timecode_end_hidden__BxQ5h',
            };
        },
        96764: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { T: () => i }),
                (function (e) {
                    (e.CLOSE = 'close'), (e.LINK = 'link'), (e.PAYWALL = 'paywall');
                })(i || (i = {}));
        },
        97153: (e) => {
            e.exports = {
                root: 'Pin_root__UyplT',
                ripple: 'Pin_ripple__Vzpzs',
                link: 'Pin_link__nz6I7',
                root_withoutLink: 'Pin_root_withoutLink__fr1XH',
                info: 'Pin_info__x_7Zx',
                info_withContextMenu: 'Pin_info_withContextMenu__7HX5A',
                info_collapsed: 'Pin_info_collapsed__bF9ac',
                info_animated: 'Pin_info_animated__AQQZk',
                show: 'Pin_show__xSkOa',
                hide: 'Pin_hide__RCc9X',
                meta: 'Pin_meta__MzX_7',
                contextMenu: 'Pin_contextMenu__WGmhp',
                contextMenu_hidden: 'Pin_contextMenu_hidden__xksGY',
                title: 'Pin_title__Jw5WW',
                subtitle: 'Pin_subtitle__rb8Gq',
                cover: 'Pin_cover__7ofYY',
                cover_withAnimation: 'Pin_cover_withAnimation__2Z2n6',
                show_and_scale: 'Pin_show_and_scale__VdNfj',
            };
        },
        99169: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => o, r: () => l });
            var i = a(70208),
                n = a(60754),
                r = a(13616);
            let s = n.gK.model('CustomPlayerThumbItem', { id: n.gK.enumeration(Object.values(i.T)), name: n.gK.string, thumb: r.K }),
                o = {
                    [i.T.DUCK]: () =>
                        a
                            .e(8962)
                            .then(a.t.bind(a, 68962, 17))
                            .then((e) => e.default),
                    [i.T.CAR]: () =>
                        a
                            .e(8765)
                            .then(a.t.bind(a, 68765, 17))
                            .then((e) => e.default),
                },
                l = (e) =>
                    new Map([
                        [i.T.DUCK, s.create({ id: i.T.DUCK, name: e({ id: 'branded-player.duck' }), thumb: { href: i.T.DUCK, width: 50, height: 50 } })],
                        [i.T.CAR, s.create({ id: i.T.CAR, name: e({ id: 'branded-player.car' }), thumb: { href: i.T.CAR, width: 143, height: 38 } })],
                    ]);
        },
        99622: (e) => {
            e.exports = { root: 'FullscreenPlayerDesktopButton_root__qGgoC', button: 'FullscreenPlayerDesktopButton_button__7NEl6' };
        },
        99937: (e) => {
            e.exports = { root: 'LayoutNotificationContainers_root__5HClw' };
        },
    },
]);
