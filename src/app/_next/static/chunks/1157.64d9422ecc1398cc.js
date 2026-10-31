(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1157],
    {
        408: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => c });
            var i = a(45144),
                l = a(47618),
                n = a(53548),
                r = a(49176),
                s = a(9519);
            class o extends i.uN {}
            (0, s._)(o, 'activators', [
                {
                    eventName: 'onKeyDown',
                    handler: (e) => {
                        let { nativeEvent: t } = e;
                        return (!(t.target instanceof HTMLElement) || 'button' !== t.target.tagName.toLowerCase()) && t.code === r.v.ENTER;
                    },
                },
            ]);
            let c = () => {
                let [e, t] = (0, n.useState)(null),
                    a = (0, n.useCallback)((e) => {
                        let { active: a } = e;
                        t(a.id);
                    }, []);
                return {
                    activeId: e,
                    handleDragStart: a,
                    handleDragCancel: (0, n.useCallback)(() => {
                        t(null);
                    }, []),
                    sensors: (0, i.FR)(
                        (0, i.MS)(i.cA, { activationConstraint: { distance: { y: 1 }, tolerance: 5 } }),
                        (0, i.MS)(i.IG, { activationConstraint: { delay: 250, tolerance: 5 } }),
                        (0, i.MS)(o, { coordinateGetter: l.JR, keyboardCodes: { start: [r.v.ENTER], cancel: [r.v.ESCAPE], end: [r.v.ENTER] } }),
                    ),
                };
            };
        },
        639: (e) => {
            e.exports = { icon: 'NotificationHtmlCodeCopied_icon__qJMbi', message: 'NotificationHtmlCodeCopied_message__ivRvX' };
        },
        776: (e) => {
            e.exports = {
                root: 'TrackModalLyrics_root__JABJp',
                title: 'TrackModalLyrics_title__zjWl_',
                button: 'TrackModalLyrics_button__YqxIm',
                lyrics: 'TrackModalLyrics_lyrics__naoEF',
            };
        },
        777: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => C });
            var i = a(88800),
                l = a(84961),
                n = a(2058),
                r = a(88969),
                s = a(17392),
                o = a(29993),
                c = a(52300),
                d = a(19934),
                u = a(38769),
                _ = a(4370),
                m = a(95210),
                p = a(72288),
                v = a(98953),
                x = a(18130),
                h = a(93091),
                y = a(74064);
            let C = (0, l.PA)((e) => {
                let { onOpenChange: t, open: a, placement: l, isFullscreenMobile: C = !1, icon: g, size: b, clip: A, ...f } = e,
                    { currentClipInfo: j, settings: T, user: N } = (0, p.g)(),
                    { formatMessage: I } = (0, n.A)(),
                    { shareLink: k, pathname: S } = (0, x.b)(_.Z.video.href, { query: { ids: String(A.clipId) } }),
                    L = C || T.isMobile;
                (0, m.N)(a);
                let E = (0, u.K)(A),
                    M = (0, o.c)(() => {
                        (j.setClipId(A.clipId), j.modal.open());
                    }),
                    P = { variant: v.Y.CLIP, id: A.clipId, title: A.title, path: S };
                return (0, i.jsxs)(d.W1, {
                    isMobile: L,
                    placement: l,
                    offsetOptions: -10,
                    open: a,
                    onOpenChange: t,
                    icon: g,
                    size: b,
                    containerDataTestId: s.Kq.clip.CLIP_CONTEXT_MENU,
                    ariaLabel: I({ id: 'interface-actions.context-menu' }),
                    variant: 'text',
                    ...f,
                    children: [
                        (0, i.jsx)(h.T, { onClick: E, isLiked: A.isLiked, disabled: !N.isAuthorized }),
                        (0, i.jsx)(y.H, { shareLink: k, entityMeta: P }),
                        (0, i.jsx)(d.Dr, {
                            onClick: M,
                            icon: (0, i.jsx)(c.I, { variant: 'info', size: 'xxs' }),
                            'data-test-id': s.Kq.clip.CLIP_CONTEXT_MENU_ABOUT_TRACK_BUTTON,
                            children: (0, i.jsx)(r.A, { id: 'track-modal.clip-title' }),
                        }),
                    ],
                });
            });
        },
        1401: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => c });
            var i = a(88800),
                l = a(52300),
                n = a(15077),
                r = a(42729),
                s = a(14307),
                o = a.n(s);
            let c = (e) => {
                let { vibe: t, closeToast: a } = e;
                return (0, i.jsx)(r.O, {
                    className: o().root,
                    closeToast: a,
                    entityVariant: n.c.VIBE,
                    customCover: (0, i.jsx)(l.I, { variant: 'vibe', size: 'xxs' }),
                    collectionUrl: '/collection',
                    isLiked: t.isLiked,
                });
            };
        },
        1425: (e) => {
            e.exports = { image: 'FamilyInviteStepSuccess_image__kDBnc', image_mobile: 'FamilyInviteStepSuccess_image_mobile__PyiXK' };
        },
        3005: (e) => {
            e.exports = {
                root: 'Paywall_root__XE_NC',
                section: 'Paywall_section__Y30nd',
                section_faq: 'Paywall_section_faq__43qaB',
                overlayScroll_desktop: 'Paywall_overlayScroll_desktop__P46WF',
            };
        },
        3146: (e) => {
            e.exports = {
                root: 'TopSectionRUFamilyOffer_root__ttMJK',
                main: 'TopSectionRUFamilyOffer_main___eUj8',
                logo: 'TopSectionRUFamilyOffer_logo__p5tOO',
                logoWrap: 'TopSectionRUFamilyOffer_logoWrap__6UZ9F',
                moreInfoChildren: 'TopSectionRUFamilyOffer_moreInfoChildren__R1KUC',
                title: 'TopSectionRUFamilyOffer_title__ZQb6e',
                subtitle: 'TopSectionRUFamilyOffer_subtitle__kADi2',
                video: 'TopSectionRUFamilyOffer_video__qI7Fa',
                buySubscriptionBlock: 'TopSectionRUFamilyOffer_buySubscriptionBlock___9pDB',
                textBlock: 'TopSectionRUFamilyOffer_textBlock__O_tTl',
                goHomeLink: 'TopSectionRUFamilyOffer_goHomeLink__dMPtg',
            };
        },
        4795: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => n });
            var i = a(72288),
                l = a(97956);
            let n = () => {
                var e, t;
                let {
                    user: a,
                    settings: { browserInfo: n },
                    experiments: r,
                } = (0, i.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    a.isAuthorized &&
                    !a.hasPlus &&
                    (null == (t = r.getExperiment(l.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        4826: (e) => {
            e.exports = { root: 'DisclaimerModal_root__l96Bq', overlay: 'DisclaimerModal_overlay__5w3NO', content: 'DisclaimerModal_content__rPx5x' };
        },
        5045: (e) => {
            e.exports = {
                root: 'MainSectionDesktop_root__MjgTL',
                headingContainer: 'MainSectionDesktop_headingContainer__IaoRT',
                contentContainer: 'MainSectionDesktop_contentContainer__L4OlR',
            };
        },
        5276: (e) => {
            e.exports = { root: 'SyncLyrics_root__6KZg4', content: 'SyncLyrics_content__lbkWP' };
        },
        5295: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var i = a(54683);
            let l = (e, t, a) => {
                let l = null != t ? t : i.wT,
                    n = null != a ? a : i.by,
                    r = (0, i.de)((0, i.aq)(e), l, n),
                    s = Math.round(255 * r[0]),
                    o = Math.round(255 * r[1]),
                    c = Math.round(255 * r[2]);
                return 'rgb('.concat(s, ', ').concat(o, ', ').concat(c, ')');
            };
        },
        5706: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => l });
            var i = a(54667);
            let l = (e) => e === i.S.TRACK || e === i.S.MUSIC;
        },
        6133: (e) => {
            e.exports = {
                content: 'MusicSectionDesktop_content__uCWAp',
                card: 'MusicSectionDesktop_card__YurZs',
                logo_ru: 'MusicSectionDesktop_logo_ru__Tiwfx',
                logo_en: 'MusicSectionDesktop_logo_en__dbYCi',
            };
        },
        6252: (e) => {
            e.exports = {
                icon: 'SyncLyricsButton_icon__m0Gdk',
                icon_active: 'SyncLyricsButton_icon_active__6WcWG',
                animation_scaled: 'SyncLyricsButton_animation_scaled__vwsc_',
                scale: 'SyncLyricsButton_scale__FGAYV',
                animation_unscaled: 'SyncLyricsButton_animation_unscaled__eM1Wb',
                unscale: 'SyncLyricsButton_unscale__ceLQu',
            };
        },
        6489: (e) => {
            e.exports = {
                root: 'MultivibeModalTextBlock_root__6narg',
                title: 'MultivibeModalTextBlock_title___y6xs',
                title_withSubtitle: 'MultivibeModalTextBlock_title_withSubtitle__LrAqj',
                subtitle: 'MultivibeModalTextBlock_subtitle__IAqG4',
                description: 'MultivibeModalTextBlock_description__ffMAv',
            };
        },
        6554: (e) => {
            e.exports = { root: 'MainCardMobile_root__AXTwk', image: 'MainCardMobile_image__DZHrE', text: 'MainCardMobile_text__rli4d' };
        },
        6858: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => l });
            var i = a(18593);
            function l(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Album;
            }
        },
        6930: (e) => {
            e.exports = { root: 'DownloadMobileAppModal_root__nD7fo', content: 'DownloadMobileAppModal_content__4ZW2F' };
        },
        8299: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => l });
            var i = a(58217);
            let l = (e) => {
                let { clip: t, callback: a, disclaimerRejectHandler: l } = e;
                return (0, i.l)({ entity: t, callback: a, onReject: l, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
            };
        },
        9219: (e) => {
            e.exports = {
                root: 'MainSectionMobile_root__l2R5l',
                headingContainer: 'MainSectionMobile_headingContainer__6mJvx',
                contentContainer: 'MainSectionMobile_contentContainer__vmaD5',
            };
        },
        10782: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                artistCaption: 'ClipMeta_artistCaption__8RrCD',
                link: 'ClipMeta_link__6QadT',
                root: 'ClipMeta_root__pqZ6s',
                root_withSecondaryColor: 'ClipMeta_root_withSecondaryColor__va_JM',
                explicitMark: 'ClipMeta_explicitMark__TmCzw',
                metaContainer: 'ClipMeta_metaContainer__023Bj',
                titleContainer: 'ClipMeta_titleContainer__dtIm1',
                title: 'ClipMeta_title__L6Nwk',
            };
        },
        10829: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => y });
            var i = a(88800),
                l = a(65724),
                n = a(84961),
                r = a(53548),
                s = a(17392),
                o = a(34126),
                c = a(39079),
                d = a(72288),
                u = a(39267),
                _ = a(13619),
                m = a(73805),
                p = a(15232),
                v = a(56712),
                x = a(26243),
                h = a.n(x);
            let y = (0, n.PA)((e) => {
                var t;
                let {
                        track: a,
                        playContextParams: n,
                        className: x,
                        withDNDBlock: y,
                        isDragging: C,
                        draggingClassName: g,
                        ignoreDislikedStyles: b,
                        withSecondaryColor: A,
                        handleRemove: f,
                        withDislike: j,
                        withTrailer: T = !0,
                        beforeTitle: N,
                        removeButtonAriaLabel: I,
                        hideControls: k,
                    } = e,
                    S = (0, c.D)({ playContextParams: n, entityId: a.entityId }),
                    {
                        settings: { isMobile: L },
                    } = (0, d.g)(),
                    E = (0, o.X)(a.trackSource, { isMobile: L }),
                    M = (0, r.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: h().playButtonCell,
                                ignoreDislikedStyles: b,
                                radius: 'xs',
                                ...e,
                            }),
                        [b, a.coverUri, a.isAvailable, a.isDisliked, a.title],
                    );
                return (0, i.jsx)(v.C, {
                    className: (0, l.$)(x, { [h().trackWithDots]: y, [h().important]: y }),
                    track: a,
                    beforeBlock: y ? (0, i.jsx)(_.O, { className: (0, l.$)(h().dots, g), isDragging: C }) : void 0,
                    meta: (0, i.jsx)(p.j, { withArtistLink: E, beforeTitle: N, track: a, ignoreDislikedStyles: b, withSecondaryColor: A }),
                    playButtonCellRender: M,
                    controls: (0, i.jsx)(m.Q, {
                        track: a,
                        className: h().controlsBarCell,
                        ignoreDislikedStyles: b,
                        utmLink: null == (t = n.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: A,
                        handleRemove: f,
                        withDislike: j,
                        withTrailer: T,
                        removeButtonAriaLabel: I,
                        hideControls: k,
                    }),
                    ...S,
                    'data-test-id': s.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        10935: (e) => {
            e.exports = {
                content_ru: 'KinopoiskSectionMobile_content_ru__CCtkX',
                content_by: 'KinopoiskSectionMobile_content_by__XjQaB',
                card1: 'KinopoiskSectionMobile_card1__JCIyK',
                card2: 'KinopoiskSectionMobile_card2__jTtnr',
                card3: 'KinopoiskSectionMobile_card3__wTJCh',
                card4: 'KinopoiskSectionMobile_card4__wi_RO',
                card4_by: 'KinopoiskSectionMobile_card4_by__8ehWE',
                logo_ru: 'KinopoiskSectionMobile_logo_ru__8alc5',
                logo_en: 'KinopoiskSectionMobile_logo_en__A673z',
            };
        },
        11028: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            var i = (function (e) {
                return (
                    (e.SUBSCRIPTION_IS_NOT_AVAILABLE = 'SUBSCRIPTION_IS_NOT_AVAILABLE'), (e.INVITATION_IS_INVALID = 'INVITATION_IS_INVALID'), (e.UNKNOWN = 'UNKNOWN'), e
                );
            })({});
        },
        11114: (e) => {
            e.exports = {
                root: 'PlayingNow_root__0lQa8',
                textBlock: 'PlayingNow_textBlock___CfRh',
                title: 'PlayingNow_title__82csz',
                subTitle: 'PlayingNow_subTitle__JNJfh',
                link: 'PlayingNow_link__4gLK9',
            };
        },
        11146: (e) => {
            e.exports = { root: 'TrailerTrack_root__0UIP4', root_active: 'TrailerTrack_root_active__F_8Iw' };
        },
        11451: (e) => {
            e.exports = {
                root: 'VideoPlayerBarContainerDesktop_root__Aw4GO',
                root_visible: 'VideoPlayerBarContainerDesktop_root_visible__F_7vs',
                root_withHoveredCarousel: 'VideoPlayerBarContainerDesktop_root_withHoveredCarousel__2gzlW',
                carouselWrapper: 'VideoPlayerBarContainerDesktop_carouselWrapper__HN1rc',
                carousel: 'VideoPlayerBarContainerDesktop_carousel__15RwT',
                carouselBlock: 'VideoPlayerBarContainerDesktop_carouselBlock__8prtL',
                carouselControls: 'VideoPlayerBarContainerDesktop_carouselControls__OwWar',
                clipCardTitle: 'VideoPlayerBarContainerDesktop_clipCardTitle__4wJ1A',
                important: 'VideoPlayerBarContainerDesktop_important__PBP47',
                clipCardArtist: 'VideoPlayerBarContainerDesktop_clipCardArtist__XegP0',
            };
        },
        11888: (e) => {
            e.exports = {
                root: 'PlayQueueDnDDraggableTrack_root__ysTVY',
                dots: 'PlayQueueDnDDraggableTrack_dots__enjOX',
                noHoverItem: 'PlayQueueDnDDraggableTrack_noHoverItem__uHRh1',
            };
        },
        11899: (e, t, a) => {
            'use strict';
            a.d(t, { DQ: () => n, em: () => i, l8: () => l });
            let i = 'WCvtCKnr84oYEPnRuvUo',
                l = 'PAYMENT_COMPLETED',
                n = 500;
        },
        11940: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => s });
            var i = a(88800),
                l = a(35412);
            let n = /\[([^([\])]+)\]\(((?:https?:\/)?\/[^(()\s)]+)\)/g,
                r = /\[[^([\])]+\]\((?:https?:\/)?\/[^(()\s)]+\)/,
                s = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!e || !t) return [];
                    let s = (0, l.ky)(e).toString(),
                        o = [...s.matchAll(n)];
                    return s.split(r).reduce((e, l, n) => {
                        e.push(l);
                        let { 1: r, 2: s } = o[n] || [];
                        return (r && s && e.push((0, i.jsx)(t, { href: s, ...a, children: r })), e);
                    }, []);
                };
        },
        12479: (e) => {
            e.exports = { root: 'InfoBlock_root__2D2Mj', infoTitle: 'InfoBlock_infoTitle___At72', link: 'InfoBlock_link__iA21Q' };
        },
        12708: (e) => {
            e.exports = {
                root: 'Trailer_root__c8eG3',
                header: 'Trailer_header__FBFMi',
                trackShimmer: 'Trailer_trackShimmer__qmCN3',
                albumShimmer: 'Trailer_albumShimmer__8RxuC',
                footer: 'Trailer_footer__POMTS',
            };
        },
        13012: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => l });
            var i = a(19049);
            function l(e, t) {
                var a;
                return (0, i.Y)(e, null != (a = null == t ? void 0 : t.maxLength) ? a : 48, !!(null == t ? void 0 : t.truncateByLastSpace));
            }
        },
        13068: (e) => {
            e.exports = {
                root: 'TrailerHeader_root__n8XkZ',
                coverContainer: 'TrailerHeader_coverContainer__4R_jG',
                cover: 'TrailerHeader_cover__G6BRb',
                iconContainer: 'TrailerHeader_iconContainer__QXR64',
                icon: 'TrailerHeader_icon__5T0JT',
                textContainer: 'TrailerHeader_textContainer__LR03v',
                text: 'TrailerHeader_text__BWMLw',
                link: 'TrailerHeader_link__kObd5',
                title: 'TrailerHeader_title__GuIe0',
                playButton: 'TrailerHeader_playButton__MGmhZ',
                playButtonIcon: 'TrailerHeader_playButtonIcon__JFbl_',
                shimmerContainer: 'TrailerHeader_shimmerContainer__cOsas',
                titleShimmer: 'TrailerHeader_titleShimmer__KKn7b',
                descriptionShimmer: 'TrailerHeader_descriptionShimmer__WOlY5',
                share: 'TrailerHeader_share__5lxh7',
            };
        },
        13619: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => o });
            var i = a(88800),
                l = a(65724),
                n = a(52300),
                r = a(30907),
                s = a.n(r);
            let o = (e) => {
                let { isDragging: t, className: a } = e;
                return (0, i.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, l.$)(s().root, { [s().root_active]: t }, a), 'aria-hidden': !0 });
            };
        },
        13797: (e) => {
            e.exports = {
                root: 'AlbumTrackShimmer_root__fBjbK',
                infoContainer: 'AlbumTrackShimmer_infoContainer__4fdAk',
                coverContainer: 'AlbumTrackShimmer_coverContainer__frW12',
                textContainer: 'AlbumTrackShimmer_textContainer__5wNPM',
                title: 'AlbumTrackShimmer_title__HC_Pa',
                cover: 'AlbumTrackShimmer_cover__36UkV',
                action: 'AlbumTrackShimmer_action__oI5t5',
            };
        },
        14307: (e) => {
            e.exports = { root: 'NotificationLike_root__DM13k' };
        },
        15230: (e) => {
            e.exports = {
                root: 'TopSectionRU_root__DP9u2',
                main: 'TopSectionRU_main__PbltM',
                logo: 'TopSectionRU_logo__LgT8M',
                moreInfoChildren: 'TopSectionRU_moreInfoChildren__d82Ha',
                title: 'TopSectionRU_title__csPE2',
                services: 'TopSectionRU_services__cmjFp',
                service: 'TopSectionRU_service__Q0dCS',
                serviceLogo: 'TopSectionRU_serviceLogo___Xpo_',
                serviceLabel: 'TopSectionRU_serviceLabel__Q3O8n',
                buySubscriptionBlock: 'TopSectionRU_buySubscriptionBlock__VBGT5',
                goHomeLink: 'TopSectionRU_goHomeLink__zWv2w',
            };
        },
        15426: (e) => {
            e.exports = { root: 'TrackModalAlbum_root__ux7J4', title: 'TrackModalAlbum_title__CtM2_' };
        },
        16521: (e) => {
            e.exports = { topSection: 'PaywallOtherMobile_topSection__Pscnw' };
        },
        18340: (e) => {
            e.exports = {
                root: 'FullscreenPlayerDesktopContent_root__tKNGK',
                fullscreenContent: 'FullscreenPlayerDesktopContent_fullscreenContent__Nvety',
                fullscreenContent_enter: 'FullscreenPlayerDesktopContent_fullscreenContent_enter__xMN2Y',
                'enter-fade-fullscreen-content': 'FullscreenPlayerDesktopContent_enter-fade-fullscreen-content__eOCyM',
                fullscreenContent_leave: 'FullscreenPlayerDesktopContent_fullscreenContent_leave__6HeZ_',
                'leave-fade-fullscreen-content': 'FullscreenPlayerDesktopContent_leave-fade-fullscreen-content__kswW5',
                fullscreenContent_withDisabledInsetTransition: 'FullscreenPlayerDesktopContent_fullscreenContent_withDisabledInsetTransition___gd__',
                additionalContent: 'FullscreenPlayerDesktopContent_additionalContent__tuuy7',
                additionalContent_enter: 'FullscreenPlayerDesktopContent_additionalContent_enter__WQmXC',
                additionalContent_enter_active: 'FullscreenPlayerDesktopContent_additionalContent_enter_active__a3nOf',
                'enter-fade-additional-content': 'FullscreenPlayerDesktopContent_enter-fade-additional-content__awk7_',
                additionalContent_exit: 'FullscreenPlayerDesktopContent_additionalContent_exit__aM4Or',
                additionalContent_exit_active: 'FullscreenPlayerDesktopContent_additionalContent_exit_active__vokVE',
                'leave-fade-additional-content': 'FullscreenPlayerDesktopContent_leave-fade-additional-content__dlFhp',
                additionalContent_withDisabledInsetTransition: 'FullscreenPlayerDesktopContent_additionalContent_withDisabledInsetTransition__kvSmh',
                info: 'FullscreenPlayerDesktopContent_info__Dq69p',
                artists: 'FullscreenPlayerDesktopContent_artists__a_2G3',
                nonMusicAuthors: 'FullscreenPlayerDesktopContent_nonMusicAuthors__JhhPY',
                meta: 'FullscreenPlayerDesktopContent_meta__3jDTy',
                title: 'FullscreenPlayerDesktopContent_title__I2JrP',
                meta_isSplitMode: 'FullscreenPlayerDesktopContent_meta_isSplitMode__zPC2S',
                ellipsis: 'FullscreenPlayerDesktopContent_ellipsis__2Qk2b',
                sliderContainer: 'FullscreenPlayerDesktopContent_sliderContainer__FtBZ7',
                slider: 'FullscreenPlayerDesktopContent_slider__FJscl',
                syncLyrics: 'FullscreenPlayerDesktopContent_syncLyrics__6dTfH',
                syncLyricsContent: 'FullscreenPlayerDesktopContent_syncLyricsContent__H_enX',
                syncLyricsLoader: 'FullscreenPlayerDesktopContent_syncLyricsLoader__EQ8o9',
                syncLyricsScroller: 'FullscreenPlayerDesktopContent_syncLyricsScroller__JslVK',
                syncLyricsFooter: 'FullscreenPlayerDesktopContent_syncLyricsFooter__HS8JZ',
                syncLyricsCounter: 'FullscreenPlayerDesktopContent_syncLyricsCounter__CnB_k',
            };
        },
        18888: (e) => {
            e.exports = {
                bottomRightButtonsWrapper: 'FullscreenPlayerDesktopControls_bottomRightButtonsWrapper__EvGiZ',
                root: 'FullscreenPlayerDesktopControls_root__tviu4',
                root_visible: 'FullscreenPlayerDesktopControls_root_visible__1b9xD',
                sonataControls: 'FullscreenPlayerDesktopControls_sonataControls__9AIki',
                menuWrapper: 'FullscreenPlayerDesktopControls_menuWrapper__ifxNx',
                syncLyricsButton: 'FullscreenPlayerDesktopControls_syncLyricsButton__g6E6g',
                playQueueButton: 'FullscreenPlayerDesktopControls_playQueueButton__reNOW',
                speedButton: 'FullscreenPlayerDesktopControls_speedButton__uTbyy',
                likeButton: 'FullscreenPlayerDesktopControls_likeButton__vpJ7S',
                menuButton: 'FullscreenPlayerDesktopControls_menuButton__R4cXl',
                likeButton_active: 'FullscreenPlayerDesktopControls_likeButton_active__XltBK',
                menuButton_active: 'FullscreenPlayerDesktopControls_menuButton_active__YZ8M8',
                playQueueButton_active: 'FullscreenPlayerDesktopControls_playQueueButton_active___SA85',
                speedButton_active: 'FullscreenPlayerDesktopControls_speedButton_active__H_EXl',
                syncLyricsButton_active: 'FullscreenPlayerDesktopControls_syncLyricsButton_active__VMvEH',
                fullscreenPlayerButton: 'FullscreenPlayerDesktopControls_fullscreenPlayerButton__0UjpS',
                fullscreenPlayerButton_visible: 'FullscreenPlayerDesktopControls_fullscreenPlayerButton_visible__qjQ0X',
            };
        },
        19038: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => g });
            var i = a(88800),
                l = a(84961),
                n = a(53548),
                r = a(2058),
                s = a(88969),
                o = a(50408),
                c = a(96817),
                d = a(52300),
                u = a(17610),
                _ = a(29504),
                m = a(44230),
                p = a(77356),
                v = a(49034),
                x = a(26645),
                h = a(20150),
                y = a.n(h);
            let C = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                g = (0, l.PA)((e) => {
                    let { children: t, customMessage: a, shouldForceOpenTooltip: l } = e,
                        { formatMessage: h } = (0, r.A)(),
                        { contentRef: g } = (0, m.g)(),
                        { setIsOnboardingOpened: b } = (0, x.w)(),
                        [A, f] = (0, o.d)(),
                        j = (0, v.z)({ id: p.h.TRAILER_BUTTON, ref: A }) || !!l,
                        [T, N] = (0, n.useState)(j),
                        I = (0, n.useCallback)(
                            (e) => {
                                (null == e || e.stopPropagation(), N(!1), b(!1));
                            },
                            [b],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                e || I();
                            },
                            [I],
                        );
                    return (0, i.jsxs)(u.m_, {
                        placement: 'bottom',
                        arrowProps: C,
                        offsetOptions: 14,
                        isHoverEnabled: !1,
                        open: T,
                        onOpenChange: k,
                        enableAriaDescribedby: !0,
                        referenceRef: f,
                        children: [
                            t,
                            (0, i.jsxs)(u.ZI, {
                                className: y().root,
                                rootNode: g,
                                children: [
                                    (0, i.jsx)(c.$, {
                                        icon: (0, i.jsx)(d.I, { variant: 'close', size: 'xxs' }),
                                        onClick: I,
                                        variant: 'text',
                                        className: y().close,
                                        withRipple: !1,
                                        'aria-label': h({ id: 'interface-actions.close' }),
                                    }),
                                    (0, i.jsx)(_.HL, {
                                        variant: 'span',
                                        className: y().text,
                                        children: a || (0, i.jsx)(s.A, { id: 'onboarding.trailer', values: { br: (0, i.jsx)('br', {}) } }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
        },
        19051: (e) => {
            e.exports = {
                root: 'ShareIframeEditor_root__LALvp',
                controls: 'ShareIframeEditor_controls__k8vT_',
                iframeCodeInputContainer: 'ShareIframeEditor_iframeCodeInputContainer__b4Klq',
                settings: 'ShareIframeEditor_settings__UWt51',
                copyButton: 'ShareIframeEditor_copyButton___jOz_',
                sizeInputContainer: 'ShareIframeEditor_sizeInputContainer__s6PMW',
                iframeCodeInput: 'ShareIframeEditor_iframeCodeInput__M9w6E',
                iframeContainer: 'ShareIframeEditor_iframeContainer__pgdr5',
                iframe: 'ShareIframeEditor_iframe__ky5_o',
            };
        },
        19722: (e) => {
            e.exports = {
                root: 'TrackModalSimilarTracks_root__EAOmg',
                title: 'TrackModalSimilarTracks_title__0WPaJ',
                item: 'TrackModalSimilarTracks_item__BGQWd',
                important: 'TrackModalSimilarTracks_important__mGqEv',
                tracksContainer: 'TrackModalSimilarTracks_tracksContainer__E55ep',
            };
        },
        19922: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => l });
            var i = a(59918);
            let l = (e) => {
                var t;
                if (!e)
                    return {
                        id: 0,
                        title: '',
                        availableForOptions: [],
                        availableForPremiumUsers: !0,
                        artists: [],
                        volumes: [],
                        ogImage: '',
                        availablePartially: !1,
                        trackCount: 0,
                        recent: !1,
                        veryImportant: !1,
                        labels: [],
                        metaType: '',
                        availableForMobile: !0,
                    };
                let a = (null == (t = e.artists) ? void 0 : t.map((e) => (0, i.N)(e))) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: a,
                    volumes: [],
                    ogImage: e.coverUri || '',
                    availablePartially: !1,
                    trackCount: e.trackCount || 0,
                    recent: !1,
                    veryImportant: !1,
                    labels: [],
                    metaType: '',
                    availableForMobile: !0,
                };
            };
        },
        19998: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => f });
            var i = a(88800),
                l = a(65724),
                n = a(84961),
                r = a(53548),
                s = a(88969),
                o = a(17392),
                c = a(29993),
                d = a(96817),
                u = a(29504),
                _ = a(4086),
                m = a(41928),
                p = a(46422),
                v = a(4370),
                x = a(78940),
                h = a(85587),
                y = a(15253),
                C = a(91292),
                g = a(28806),
                b = a.n(g);
            let A = {
                    [h.n.ALBUM]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [h.n.PODCAST]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [h.n.ARTIST]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [h.n.TRACK]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [h.n.AUDIOBOOK]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [h.n.CLIP]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                f = (0, n.PA)((e) => {
                    var t;
                    let { modalState: a, data: n, onClose: g, className: f } = e,
                        j = null != n ? n : null == a ? void 0 : a.modalData,
                        T = (0, p.W)(),
                        N = (0, x.Z)(v.Z.main.href),
                        I = (0, m.N)().get(_.U2),
                        k = (0, c.c)(() => {
                            if (g) return g();
                            (T.canBack && T.back(), N());
                        }),
                        S = (null == j || null == (t = j.details) ? void 0 : t.url) && j.details.text,
                        L = (0, c.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = I.get(y.c.ExEx),
                                i = new Date(),
                                l = i.setMinutes(i.getMinutes() + 15),
                                n =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? I.set(y.c.ExEx, [...t, n], { expires: new Date(l) }) : I.set(y.c.ExEx, [n], { expires: new Date(l) }),
                                null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        E = (0, c.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == g || g(), T.canBack && T.back(), N()) : null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, r.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let M = (0, r.useMemo)(() => {
                            if (j) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, l.$)(b().title, b().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: j.title,
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: b().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: j.description,
                                        }),
                                        S &&
                                            (0, i.jsx)(C.N, {
                                                href: null == (e = j.details) ? void 0 : e.url,
                                                className: b().link,
                                                children: (0, i.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = j.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [j, S]),
                        P = (0, r.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === h.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: b().buttons,
                                          children: [
                                              (0, i.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: E,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: b().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(s.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: L,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: b().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && A[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: b().buttons,
                                          children: (0, i.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: k,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: b().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(s.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [L, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, k, E],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, l.$)(b().root, f),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: b().container, children: [M, P] }),
                    });
                });
        },
        20150: (e) => {
            e.exports = { root: 'TrailerOnboarding_root__I3fd0', text: 'TrailerOnboarding_text__HU4RO', close: 'TrailerOnboarding_close__ywMIK' };
        },
        20585: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => i });
            var i = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
        },
        20924: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => r });
            var i = a(8655),
                l = a(69704),
                n = a(5295);
            let r = (e) => {
                let { theme: t } = (0, l.W)(),
                    a = t === i.S.Light ? 0.6 : 0.35;
                return { '--trailer-color': (0, n.e)(e, 0.8, a) };
            };
        },
        21867: () => {},
        21944: (e, t, a) => {
            'use strict';
            a.d(t, { IR: () => l, JQ: () => i, bL: () => r, ew: () => n });
            let i = 220,
                l = 88,
                n = 'px',
                r = '{lang}';
        },
        22666: (e) => {
            e.exports = {
                root: 'SyncLyricsLoader_root__I2hTe',
                element: 'SyncLyricsLoader_element___Luwv',
                pulse: 'SyncLyricsLoader_pulse__5AqRf',
                'change-opacity': 'SyncLyricsLoader_change-opacity__vscya',
                element_withIcon: 'SyncLyricsLoader_element_withIcon__iiSBo',
                element_withDefaultElement: 'SyncLyricsLoader_element_withDefaultElement__WmP80',
                element_paused: 'SyncLyricsLoader_element_paused__LFpD0',
            };
        },
        23192: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => i });
            let i = '#b239f3';
        },
        23474: (e) => {
            e.exports = { root: 'SyncLyricsFooter_root__STCKQ', major: 'SyncLyricsFooter_major__QMZmT', writers: 'SyncLyricsFooter_writers__c7zhj' };
        },
        23577: (e, t, a) => {
            'use strict';
            (a.d(t, { FN: () => l, gj: () => i }), a(13687));
            let i = (e) => {
                    let { containerNodeRect: t, draggingNodeRect: a, transform: i } = e;
                    return a && t
                        ? (function (e, t, a) {
                              let i = { ...e };
                              return (
                                  t.top + e.y <= a.top ? (i.y = a.top - t.top) : t.bottom + e.y >= a.top + a.height && (i.y = a.top + a.height - t.bottom),
                                  t.left + e.x <= a.left ? (i.x = a.left - t.left) : t.right + e.x >= a.left + a.width && (i.x = a.left + a.width - t.right),
                                  i
                              );
                          })(i, a, t)
                        : i;
                },
                l = (e) => {
                    let { transform: t } = e;
                    return { ...t, x: 0 };
                };
        },
        24352: (e) => {
            e.exports = {
                root: 'ArtistAboutModalShimmer_root__RWCDi',
                entityName: 'ArtistAboutModalShimmer_entityName__eBJym',
                title: 'ArtistAboutModalShimmer_title__0uj5d',
            };
        },
        24586: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => n });
            var i = a(88800),
                l = a(35412);
            let n = (e) => {
                let { value: t } = e,
                    a = { '@context': 'https://schema.org', ...t };
                return (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: (0, l.Gr)(a) } });
            };
        },
        25196: (e) => {
            e.exports = {
                root: 'TrackModalControls_root__alpd3',
                controlsContainer: 'TrackModalControls_controlsContainer__UeQb4',
                menuWrapper: 'TrackModalControls_menuWrapper__tDLID',
                menuButton: 'TrackModalControls_menuButton__V6L4c',
                disabledButtonByDisclaimer: 'TrackModalControls_disabledButtonByDisclaimer__qfCvg',
            };
        },
        25378: (e) => {
            e.exports = { root: 'TrailerModal_root__T4ZJ8', modalContent: 'TrailerModal_modalContent__ZSNFe', header: 'TrailerModal_header__0h1zj' };
        },
        25555: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => u });
            var i = a(88800),
                l = a(53548),
                n = a(2058),
                r = a(29993),
                s = a(66943),
                o = a(29595),
                c = a(74965),
                d = a(72288);
            let u = (e) => {
                let { action: t, notification: a } = e,
                    {
                        user: u,
                        settings: { isMobile: _ },
                    } = (0, d.g)(),
                    { formatMessage: m } = (0, n.A)(),
                    { notify: p } = (0, c.l)(),
                    v = (0, l.useRef)(!1);
                return (0, r.c)(async () => {
                    if (!u.isAuthorized) return void p((0, i.jsx)(s.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (!v.current) {
                        v.current = !0;
                        try {
                            (await t())
                                ? _ || p(a, { containerId: o.u.INFO })
                                : p((0, i.jsx)(s.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                        } finally {
                            v.current = !1;
                        }
                    }
                });
            };
        },
        26243: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        26404: (e) => {
            e.exports = {
                root: 'PlusModalLogoBlock_root__cKh28',
                icon: 'PlusModalLogoBlock_icon__fMixB',
                icon_ru: 'PlusModalLogoBlock_icon_ru__JAn4U',
                icon_en: 'PlusModalLogoBlock_icon_en__OmrOY',
            };
        },
        26756: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => d });
            var i = a(88800),
                l = a(84961),
                n = a(29504),
                r = a(72288),
                s = a(91292),
                o = a(12479),
                c = a.n(o);
            let d = (0, l.PA)((e) => {
                let { children: t, href: a, className: l } = e,
                    {
                        currentTrackInfo: { modal: o },
                    } = (0, r.g)();
                return a
                    ? (0, i.jsx)(s.N, {
                          className: c().link,
                          href: a,
                          onClick: o.close,
                          children: (0, i.jsx)(n.HL, { className: l, variant: 'div', size: 'l', children: t }),
                      })
                    : (0, i.jsx)(n.HL, { className: l, variant: 'div', size: 'l', children: t });
            });
        },
        26835: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        27157: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        27169: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { Q: () => i }),
                (function (e) {
                    ((e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic'));
                })(i || (i = {})));
        },
        27294: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => l });
            var i = a(18593);
            function l(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Various;
            }
        },
        27344: (e) => {
            e.exports = {
                root: 'TrackModalAlbumShimmer_root__iGoUU',
                title: 'TrackModalAlbumShimmer_title__2jt8z',
                coverBlock: 'TrackModalAlbumShimmer_coverBlock__PQFDQ',
                cover: 'TrackModalAlbumShimmer_cover__AI0zt',
                linkBlock: 'TrackModalAlbumShimmer_linkBlock__yBLL4',
                link: 'TrackModalAlbumShimmer_link__7_gHs',
                description: 'TrackModalAlbumShimmer_description__63Pnt',
            };
        },
        27533: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => i });
            let i = (e) => {
                let t = Math.floor(e / 1e3),
                    a = Math.floor(t / 3600),
                    i = Math.floor((t % 3600) / 60),
                    l = t % 60,
                    n = 'PT';
                return (a > 0 && (n += ''.concat(a, 'H')), i > 0 && (n += ''.concat(i, 'M')), (l > 0 || 'PT' === n) && (n += ''.concat(l, 'S')), n);
            };
        },
        27984: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.ALBUM = 'album'), (e.ARTIST = 'artist'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), e);
            })({});
        },
        28806: (e) => {
            e.exports = {
                root: 'Disclaimer_root__ciLA2',
                container: 'Disclaimer_container__cB_wK',
                title: 'Disclaimer_title__I5hOj',
                text: 'Disclaimer_text__2Yo3R',
                link: 'Disclaimer_link__4UMOz',
                buttons: 'Disclaimer_buttons__mpL9o',
                button: 'Disclaimer_button__qIuMB',
                shimmer: 'Disclaimer_shimmer__Bg0HE',
            };
        },
        29201: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => l });
            var i = a(35396);
            let l = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, i.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        29832: (e, t, a) => {
            'use strict';
            a.d(t, { MN: () => d, hg: () => c });
            var i,
                l = a(53548),
                n = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (l && (l += ' '), (l += i));
                                            else for (a in t) t[a] && (l && (l += ' '), (l += a));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    8765: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
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
                    3550: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
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
                    4353: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
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
                    2445: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
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
                    61: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var n in ((i = {}), t)) 'key' !== n && (i[n] = t[n]);
                            else i = t;
                            return { $$typeof: a, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    7742: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let l = a(4377),
                            n = a(5881),
                            r = a(8532),
                            s = i(a(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: a,
                                    likeControl: i,
                                    menuControl: o,
                                    pinControl: c,
                                    trailerControl: d,
                                    isVisible: u,
                                    radius: _ = 'default',
                                    bottomContainerClassName: m,
                                    labelText: p,
                                } = e,
                                v = d || a,
                                x = o || i;
                            return (0, l.jsxs)('div', {
                                className: (0, n.clsx)(
                                    s.default.root,
                                    s.default.controls,
                                    { [s.default.controls_visible]: u },
                                    s.default['controls_radius_'.concat(_)],
                                    t,
                                ),
                                children: [
                                    (0, l.jsx)('div', { className: s.default.top, children: c }),
                                    (0, l.jsxs)('div', {
                                        className: (0, n.clsx)(s.default.bottom, m),
                                        children: [
                                            v && (0, l.jsxs)('div', { className: s.default.bottom_left, children: [d, a] }),
                                            x && (0, l.jsxs)('div', { className: s.default.bottom_right, children: [o, i] }),
                                        ],
                                    }),
                                    !!p && (0, l.jsx)(r.Label, { className: s.default.label, children: p }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let l = a(4377),
                            n = a(810),
                            r = a(5881),
                            s = a(8903),
                            o = a(6530),
                            c = i(a(3550)),
                            d = (e) => {
                                let {
                                    forwardRef: t,
                                    view: a,
                                    className: i,
                                    textPosition: n = 'left',
                                    contentLinesCount: d = 2,
                                    title: u,
                                    description: _,
                                    explicitMarkComponent: m,
                                    chart: p,
                                    children: v,
                                    srTitle: x,
                                    wrapperClassName: h,
                                    ...y
                                } = e;
                                return (0, l.jsxs)('div', {
                                    className: (0, r.clsx)(c.default.root, i),
                                    ref: t,
                                    ...y,
                                    children: [
                                        (0, l.jsx)(o.SROnly, { children: null != x ? x : u }),
                                        (0, l.jsx)('div', { className: c.default.viewContainer, children: a }),
                                        (0, l.jsxs)('div', {
                                            className: (0, r.clsx)(c.default.wrapper, h),
                                            children: [
                                                p,
                                                (0, l.jsxs)('div', {
                                                    className: (0, r.clsx)(
                                                        c.default.content,
                                                        c.default['content_'.concat(n)],
                                                        c.default['content_linesCount_'.concat(d)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, l.jsxs)('div', {
                                                                className: c.default.titleContainer,
                                                                children: [
                                                                    (0, l.jsx)(s.Caption, {
                                                                        className: c.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    m,
                                                                ],
                                                            }),
                                                        _,
                                                        v,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, n.forwardRef)((e, t) => (0, l.jsx)(d, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let l = a(4377),
                            n = a(5881),
                            r = a(8903),
                            s = i(a(4353));
                        t.Label = (e) => {
                            let { children: t, className: a, size: i = 's', ...o } = e;
                            return (0, l.jsx)(r.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: i,
                                lineClamp: 1,
                                className: (0, n.clsx)(s.default.root, a),
                                ...o,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var i = a(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return i.Label;
                            },
                        });
                    },
                    5531: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let l = a(4377),
                            n = a(5881),
                            r = a(810),
                            s = i(a(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: a, children: i, ...o } = e,
                                c = (0, n.clsx)(s.default.root, { [s.default.focusable]: a }, t);
                            return (0, r.isValidElement)(i)
                                ? (0, r.cloneElement)(i, { ...o, className: (0, n.clsx)(c, i.props.className) })
                                : (0, l.jsx)('span', { className: c, ...o, children: i });
                        };
                    },
                    6530: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var i = a(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return i.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let l = a(4377),
                            n = a(5881),
                            r = a(810),
                            s = a(5987),
                            o = i(a(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: a, type: i = 'text', size: r = 's', className: c, children: d, weight: u = 'medium', ..._ } = e;
                            return (0, l.jsx)(s.Typography, {
                                variant: a,
                                ref: t,
                                className: (0, n.clsx)(o.default.root, o.default['root_'.concat(i, '_').concat(r)], o.default['root_weight_'.concat(u)], c),
                                ..._,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, r.forwardRef)((e, a) => (0, l.jsx)(t.CaptionComponent, { forwardRef: a, ...e }))));
                    },
                    1641: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let l = a(4377),
                            n = a(5881),
                            r = a(810),
                            s = a(5987),
                            o = i(a(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: a, weight: i = 'bold', size: r = 's', className: c, children: d, ...u } = e;
                            return (0, l.jsx)(s.Typography, {
                                variant: a,
                                ref: t,
                                className: (0, n.clsx)(o.default.root, o.default['root_size_'.concat(r)], o.default['root_weight_'.concat(i)], c),
                                ...u,
                                children: d,
                            });
                        }),
                            (t.Heading = (0, r.forwardRef)((e, a) => (0, l.jsx)(t.HeadingComponent, { forwardRef: a, ...e }))));
                    },
                    5987: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let l = a(4377),
                            n = a(5881),
                            r = a(810),
                            s = i(a(61));
                        function o(e) {
                            let { forwardRef: t, style: a, className: i, children: r, variant: o, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof r ? r : void 0;
                            return (0, l.jsx)(o, {
                                style: { ...a, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, n.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: c && c > 0, [s.default.root_clamp_oneline]: c && 1 === c, [s.default.root_clamp_multiline]: c && c > 1 },
                                    i,
                                ),
                                ...d,
                                children: r,
                            });
                        }
                        ((t.TypographyComponent = o), (t.Typography = (0, r.forwardRef)((e, t) => (0, l.jsx)(o, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var i = a(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return i.Caption;
                            },
                        });
                        var l = a(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return l.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(l, 2));
                    },
                },
                r = {};
            function s(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var a = (r[e] = { exports: {} });
                return (n[e].call(a.exports, a, a.exports, s), a.exports);
            }
            ((s.d = (e, t) => {
                for (var a in t) s.o(t, a) && !s.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'X$', { value: !0 }), (o.kk = o.m7 = void 0));
                var e = s(7093);
                Object.defineProperty(o, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = s(7742);
                Object.defineProperty(o, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var c = o.kk,
                d = o.m7;
            o.X$;
        },
        29955: (e) => {
            e.exports = {
                root: 'TrackModal_root__QrFg6',
                header: 'TrackModal_header__hjfRd',
                closeButton: 'TrackModal_closeButton__VLm_R',
                modalContent: 'TrackModal_modalContent__AzQPF',
                content: 'TrackModal_content__9qH7W',
                container: 'TrackModal_container__JaG86',
            };
        },
        30907: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        31142: (e) => {
            e.exports = {
                root: 'ArtistAboutModal_root__bmUo9',
                modalContent: 'ArtistAboutModal_modalContent__RGkJk',
                header: 'ArtistAboutModal_header__yLnAj',
                overlay: 'ArtistAboutModal_overlay__6hToT',
                closeButton: 'ArtistAboutModal_closeButton__Gnz25',
            };
        },
        32021: (e) => {
            e.exports = { topSection: 'PaywallBYMobile_topSection__sQ_sw' };
        },
        32353: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => i, u: () => l });
            var i = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                l = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        32468: (e) => {
            e.exports = { root: 'FullscreenPlayerDesktopPoster_root__d__YD', cover: 'FullscreenPlayerDesktopPoster_cover__CDmhM' };
        },
        33133: (e) => {
            e.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        33884: (e) => {
            e.exports = {
                root: 'TrailerError_root__GwuKR',
                textContainer: 'TrailerError_textContainer__lF7RZ',
                title: 'TrailerError_title__Q52Pa',
                description: 'TrailerError_description__60UJ6',
            };
        },
        34232: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => i });
            let i = (e) => (e ? e.replace('-', '_') : null);
        },
        34816: (e) => {
            e.exports = {
                root: 'FullscreenPlayerMobileContent_root__RITqv',
                wrapper: 'FullscreenPlayerMobileContent_wrapper__JPmBe',
                syncLyrics: 'FullscreenPlayerMobileContent_syncLyrics__HKUm0',
                trackInfoCoverContainer: 'FullscreenPlayerMobileContent_trackInfoCoverContainer__Y2hly',
                trackInfoCover: 'FullscreenPlayerMobileContent_trackInfoCover__zsEEq',
                contentContainer: 'FullscreenPlayerMobileContent_contentContainer__ILyg5',
                contentContainer_withSplitMode: 'FullscreenPlayerMobileContent_contentContainer_withSplitMode__Rdv5T',
                trackInfo: 'FullscreenPlayerMobileContent_trackInfo__IPGjo',
                metaContainer: 'FullscreenPlayerMobileContent_metaContainer__B2vTr',
                infoBlock: 'FullscreenPlayerMobileContent_infoBlock__ZcRdn',
                infoBlock_withExpandedSyncLyrics: 'FullscreenPlayerMobileContent_infoBlock_withExpandedSyncLyrics__qlbKX',
                coverWrapper: 'FullscreenPlayerMobileContent_coverWrapper___Y6ll',
                coverWrapper_enter: 'FullscreenPlayerMobileContent_coverWrapper_enter__oFtHh',
                coverWrapper_enter_active: 'FullscreenPlayerMobileContent_coverWrapper_enter_active__GM_of',
                'enter-fade': 'FullscreenPlayerMobileContent_enter-fade__Q0KNn',
                coverWrapper_exit: 'FullscreenPlayerMobileContent_coverWrapper_exit__QDk1i',
                coverWrapper_exit_active: 'FullscreenPlayerMobileContent_coverWrapper_exit_active__9S_wE',
                'exit-fade': 'FullscreenPlayerMobileContent_exit-fade__uS0jT',
                cover: 'FullscreenPlayerMobileContent_cover__W6pz2',
                metaText: 'FullscreenPlayerMobileContent_metaText__Fr74D',
                timeline: 'FullscreenPlayerMobileContent_timeline__Pta9W',
                content: 'FullscreenPlayerMobileContent_content__EAteH',
                syncLyricsContent: 'FullscreenPlayerMobileContent_syncLyricsContent__qhWG_',
                syncLyricsLoader: 'FullscreenPlayerMobileContent_syncLyricsLoader__0_W2j',
                syncLyricsScroller: 'FullscreenPlayerMobileContent_syncLyricsScroller__EqiCL',
                syncLyricsFooter: 'FullscreenPlayerMobileContent_syncLyricsFooter__bi9vY',
                syncLyricsCounter: 'FullscreenPlayerMobileContent_syncLyricsCounter___wm5g',
            };
        },
        35232: (e) => {
            e.exports = {
                root: 'TrailerFooter_root__LKXby',
                playButtonShimmer: 'TrailerFooter_playButtonShimmer__5QwPi',
                linkButtonShimmer: 'TrailerFooter_linkButtonShimmer__ZV1s1',
            };
        },
        35396: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { C: () => n }),
                (function (e) {
                    // for PulseSync: BEGIN substituted-track enum extension
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
                    // for PulseSync: END substituted-track enum extension
                })(i || (i = {})));
            let l = new Set(Object.values(i)),
                n = (e) => 'string' == typeof e && l.has(e);
        },
        35765: (e) => {
            e.exports = {
                root: 'FamilyInviteInviter_root__2XR_p',
                icon: 'FamilyInviteInviter_icon__e5pZe',
                important: 'FamilyInviteInviter_important__wl_l1',
                iconShimmer: 'FamilyInviteInviter_iconShimmer__Dbxw_',
                root_mobile: 'FamilyInviteInviter_root_mobile__LRDAo',
                name: 'FamilyInviteInviter_name__0E0QC',
                nameShimmer: 'FamilyInviteInviter_nameShimmer__Zzoa1',
            };
        },
        37003: (e) => {
            e.exports = {
                content: 'MusicSectionMobile_content__lAARM',
                card: 'MusicSectionMobile_card__f5Xnr',
                logo_ru: 'MusicSectionMobile_logo_ru__itG4j',
                logo_en: 'MusicSectionMobile_logo_en__Tv2yd',
            };
        },
        37076: (e) => {
            e.exports = { root: 'SyncLyricsLine_root__r62BN' };
        },
        37821: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => r });
            var i = a(8655),
                l = a(69704),
                n = a(5295);
            let r = (e) => {
                let { theme: t } = (0, l.W)(),
                    a = t === i.S.Light ? 0.48 : 0.4;
                return { '--cover-color': (0, n.e)(e, 0.8, a) };
            };
        },
        38053: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => c });
            var i = a(88800),
                l = a(65724),
                n = a(35412),
                r = a(29504),
                s = a(12479),
                o = a.n(s);
            let c = (e) => {
                let { title: t, className: a, titleClassName: s, infoDescription: c, ...d } = e;
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(o().root, a),
                    ...(0, n.OZ)(d),
                    children: [t && (0, i.jsx)(r.DZ, { variant: 'h4', className: (0, l.$)(o().infoTitle, s), children: t }), c],
                });
            };
        },
        38709: (e) => {
            e.exports = { root: 'PaywallFAQCollapse_root___gwrQ', root_collapsed: 'PaywallFAQCollapse_root_collapsed__gx8IK' };
        },
        38769: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => x });
            var i = a(88800),
                l = a(96706),
                n = a(53548),
                r = a(2058),
                s = a(79390),
                o = a(29595),
                c = a(74965),
                d = a(72288),
                u = a(66943),
                _ = a(4370),
                m = a(15077),
                p = a(42729);
            let v = (e) => {
                    let { clip: t, closeToast: a } = e;
                    return (0, i.jsx)(p.O, {
                        entityVariant: m.c.CLIP,
                        entityTitle: t.title,
                        collectionUrl: _.Z.collectionClips.href,
                        isLiked: t.isLiked,
                        closeToast: a,
                        coverUri: t.thumbnail,
                    });
                },
                x = (e) => {
                    let { user: t, fullscreenVideoPlayer: a, collection: _ } = (0, d.g)(),
                        { notify: m } = (0, c.l)(),
                        [p, x] = (0, n.useState)(!1),
                        { formatMessage: h } = (0, r.A)();
                    return (0, n.useCallback)(async () => {
                        if (!e) return;
                        let n = a.modal.isOpened ? o.u.FULLSCREEN_INFO : o.u.INFO,
                            r = a.modal.isOpened ? o.u.FULLSCREEN_ERROR : o.u.ERROR;
                        if (!t.isAuthorized) return void m((0, i.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: r });
                        if (p) return;
                        let c = { ...(0, l.HO)(e), isLiked: !e.isLiked };
                        x(!0);
                        let d = await e.toggleLike();
                        (x(!1),
                            _.clips.reset(),
                            d === s.f.OK
                                ? m((0, i.jsx)(v, { clip: c }), { containerId: n })
                                : m((0, i.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: r }));
                    }, [e, t.isAuthorized, p, h, m, a.modal.isOpened, _.clips]);
                };
        },
        39270: (e) => {
            e.exports = {
                cover: 'FreePlayerPlusNotification_cover__UiPL1',
                important: 'FreePlayerPlusNotification_important__ybkIx',
                icon: 'FreePlayerPlusNotification_icon__8kTww',
                text: 'FreePlayerPlusNotification_text__BMu7d',
                tryButton: 'FreePlayerPlusNotification_tryButton__DNc4D',
            };
        },
        39947: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => i });
            var i = (function (e) {
                return (
                    (e.KEY_P = 'KeyP'),
                    (e.KEY_F = 'KeyF'),
                    (e.KEY_D = 'KeyD'),
                    (e.KEY_L = 'KeyL'),
                    (e.KEY_J = 'KeyJ'),
                    (e.KEY_K = 'KeyK'),
                    (e.KEY_H = 'KeyH'),
                    (e.KEY_M = 'KeyM'),
                    (e.KEY_N = 'KeyN'),
                    (e.KEY_S = 'KeyS'),
                    (e.KEY_R = 'KeyR'),
                    (e.KEY_W = 'KeyW'),
                    (e.ESC = 'Escape'),
                    (e.SPACE = 'Space'),
                    (e.ARROW_LEFT = 'ArrowLeft'),
                    (e.ARROW_RIGHT = 'ArrowRight'),
                    (e.ARROW_UP = 'ArrowUp'),
                    (e.ARROW_DOWN = 'ArrowDown'),
                    (e.COMMA = 'Comma'),
                    (e.PERIOD = 'Period'),
                    (e.MINUS = 'Minus'),
                    (e.EQUAL = 'Equal'),
                    (e.DIGIT_0 = 'Digit0'),
                    e
                );
            })({});
        },
        40258: (e) => {
            e.exports = {
                root: 'PlayQueueBeforePlayingBlock_root__QIIfB',
                prevTrack: 'PlayQueueBeforePlayingBlock_prevTrack__5b6o4',
                animatedContent: 'PlayQueueBeforePlayingBlock_animatedContent__C04_K',
                animatedContent_moveToBottom: 'PlayQueueBeforePlayingBlock_animatedContent_moveToBottom__2gKF7',
                'move-to-bottom': 'PlayQueueBeforePlayingBlock_move-to-bottom__7EZIY',
                animatedContent_moveFromBottom: 'PlayQueueBeforePlayingBlock_animatedContent_moveFromBottom__0kTuW',
                'move-from-bottom': 'PlayQueueBeforePlayingBlock_move-from-bottom__8mDwi',
                'move-prev-track-from-bottom': 'PlayQueueBeforePlayingBlock_move-prev-track-from-bottom__mFqMq',
                animatedContent_moveFromBottomSingleTrack: 'PlayQueueBeforePlayingBlock_animatedContent_moveFromBottomSingleTrack__MIEIc',
                'move-from-bottom-single-track': 'PlayQueueBeforePlayingBlock_move-from-bottom-single-track__YhsMT',
                'move-prev-track-from-bottom-single-track': 'PlayQueueBeforePlayingBlock_move-prev-track-from-bottom-single-track__NGI9j',
            };
        },
        40512: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => l });
            var i = a(7123);
            let l = (e) => ({ type: i.z4.Unloaded, meta: { id: e.entityId } });
        },
        41792: (e) => {
            e.exports = {
                root: 'ImageSliderModal_root__AZO_D',
                root_mobile: 'ImageSliderModal_root_mobile__lBg8o',
                modalContent: 'ImageSliderModal_modalContent__R7c_w',
                closeButton: 'ImageSliderModal_closeButton__mabus',
                content: 'ImageSliderModal_content__Gjm6N',
                image: 'ImageSliderModal_image__ZUYEL',
                image_loading: 'ImageSliderModal_image_loading__1Fyyn',
                leftArrowWrapper: 'ImageSliderModal_leftArrowWrapper__2d5RO',
                rightArrowWrapper: 'ImageSliderModal_rightArrowWrapper__vSPiO',
                slider: 'ImageSliderModal_slider__gDVWR',
                wrapper: 'ImageSliderModal_wrapper__s31SU',
                slide: 'ImageSliderModal_slide__4VnYF',
                loadingIndicator: 'ImageSliderModal_loadingIndicator__3yfbk',
                loadingIndicator_showed: 'ImageSliderModal_loadingIndicator_showed__Ec0yW',
            };
        },
        41867: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        41907: (e) => {
            e.exports = {
                modalHeader: 'CommunicationModal_modalHeader__TnzU6',
                modalContent: 'CommunicationModal_modalContent__d8REH',
                container: 'CommunicationModal_container__BIgb7',
                wrapper: 'CommunicationModal_wrapper__SRy17',
                imageWrapper: 'CommunicationModal_imageWrapper__LOr5C',
                imageWrapper_content: 'CommunicationModal_imageWrapper_content__PfjQl',
                imageWrapper_header: 'CommunicationModal_imageWrapper_header__8wsRZ',
                image: 'CommunicationModal_image__qzXK8',
                title: 'CommunicationModal_title__yvFAn',
                text: 'CommunicationModal_text__gGaLU',
                buttons: 'CommunicationModal_buttons__MDmp2',
                disclaimerWrapper: 'CommunicationModal_disclaimerWrapper__pMRYf',
                disclaimer: 'CommunicationModal_disclaimer__NJJSA',
                disclaimerLink: 'CommunicationModal_disclaimerLink__8yuBO',
                root: 'CommunicationModal_root__1dOYE',
                root_modal: 'CommunicationModal_root_modal__u_igG',
                button: 'CommunicationModal_button__qysqU',
                root_fullscreen: 'CommunicationModal_root_fullscreen__41Y5Y',
                gradientOverlay: 'CommunicationModal_gradientOverlay__MOg5g',
                buttonText: 'CommunicationModal_buttonText__2XS8u',
                closeButton: 'CommunicationModal_closeButton__EP7ay',
                closeButtonIcon: 'CommunicationModal_closeButtonIcon__ujXug',
                advDisclaimerTrigger: 'CommunicationModal_advDisclaimerTrigger__otvUP',
                advDisclaimerTrigger_modal: 'CommunicationModal_advDisclaimerTrigger_modal__osiyy',
                advDisclaimerTrigger_fullscreen: 'CommunicationModal_advDisclaimerTrigger_fullscreen__F4N7r',
                advDisclaimerPopover: 'CommunicationModal_advDisclaimerPopover__gu0oV',
                advDisclaimerText: 'CommunicationModal_advDisclaimerText__hiNjI',
            };
        },
        42205: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => i });
            let i = (e, t) => {
                let a = Number(t);
                return !Number.isNaN(a) && a > 0 && a < e.length ? a : 0;
            };
        },
        43002: (e) => {
            e.exports = { topSection: 'PaywallBYDesktop_topSection__AS3Pv' };
        },
        43453: (e) => {
            e.exports = {
                root: 'PaywallFAQItem_root__008Hj',
                questionCollapse: 'PaywallFAQItem_questionCollapse__dN7g9',
                questionContainer: 'PaywallFAQItem_questionContainer__gOalt',
                answer: 'PaywallFAQItem_answer__mgvr2',
                answerContainer: 'PaywallFAQItem_answerContainer__z_P3g',
                answerContainer_enter: 'PaywallFAQItem_answerContainer_enter__zAisZ',
                answerContainer_enter_active: 'PaywallFAQItem_answerContainer_enter_active__N5iad',
                'animation-show': 'PaywallFAQItem_animation-show__YWHaS',
                answerContainer_exit: 'PaywallFAQItem_answerContainer_exit__y_3_j',
                answerContainer_exit_active: 'PaywallFAQItem_answerContainer_exit_active__IUs7C',
                'animation-hide': 'PaywallFAQItem_animation-hide__Eqrf5',
            };
        },
        43557: (e) => {
            e.exports = {
                root: 'TrackModalTitleShimmer_root__woixY',
                entityName: 'TrackModalTitleShimmer_entityName__9NMYB',
                title: 'TrackModalTitleShimmer_title__PXJfS',
                artists: 'TrackModalTitleShimmer_artists__mz6q9',
                important: 'TrackModalTitleShimmer_important__uBJ8_',
                artist: 'TrackModalTitleShimmer_artist__fre6F',
                controls: 'TrackModalTitleShimmer_controls__0kNh8',
                playButton: 'TrackModalTitleShimmer_playButton__PYklv',
                button: 'TrackModalTitleShimmer_button__j5_GI',
            };
        },
        44057: (e) => {
            e.exports = {
                content_ru: 'KinopoiskSectionDesktop_content_ru__gILD5',
                content_by: 'KinopoiskSectionDesktop_content_by__31QvZ',
                card1: 'KinopoiskSectionDesktop_card1__nlqOH',
                card2: 'KinopoiskSectionDesktop_card2__ZMW4Z',
                card3: 'KinopoiskSectionDesktop_card3__n9_1i',
                card4: 'KinopoiskSectionDesktop_card4__TpOZ7',
                logo_ru: 'KinopoiskSectionDesktop_logo_ru__f6OLB',
                logo_en: 'KinopoiskSectionDesktop_logo_en__2oXnD',
            };
        },
        44502: (e) => {
            e.exports = {
                root: 'ArtistBandlinkScanner_root__D3cAC',
                descriptionTitleButton: 'ArtistBandlinkScanner_descriptionTitleButton__0M8Ag',
                icon: 'ArtistBandlinkScanner_icon__n5ntO',
                description: 'ArtistBandlinkScanner_description__n8ypX',
                descriptionTitle: 'ArtistBandlinkScanner_descriptionTitle__9Z1MT',
                descriptionTitleText: 'ArtistBandlinkScanner_descriptionTitleText__xWvIS',
                descriptionArtist: 'ArtistBandlinkScanner_descriptionArtist__7ZvJo',
            };
        },
        44599: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => x });
            var i = a(78793),
                l = a(92716),
                n = a(54577),
                r = a(90780),
                s = a(29993),
                o = a(37436),
                c = a(12816),
                d = a(34500),
                u = a(46166),
                _ = a(14518),
                m = a(73442),
                p = a(91248),
                v = a(65523);
            let x = (e) => {
                let t = (0, r.st)(),
                    { hash: a } = (0, r.gf)(),
                    { pageId: x } = (0, _.$)(),
                    { tabId: h, tabPos: y, isTabSelectedByDefault: C } = (0, p.R)(),
                    { skeleton: g } = (0, m.b)(),
                    { blockType: b, blockId: A, blockPosX: f, blockPosY: j, mainObjectType: T, mainObjectId: N } = (0, d.N)(),
                    { objectsCount: I, objectType: k, objectId: S, objectPosX: L, objectPosY: E } = (0, u.J)(),
                    M = (0, v.U)();
                return (0, s.c)(() => {
                    if (!t || !x || !c.xK.includes(x)) return;
                    let r = {
                        hash: a,
                        pageId: x,
                        entityType: b,
                        entityId: A,
                        entityPosX: f,
                        entityPosY: j,
                        objectId: S,
                        objectType: k,
                        objectPosX: L,
                        objectPosY: E,
                        objectsCount: I,
                        from: o.W[x],
                        to: l.AppScreen.VideoScreen,
                    };
                    (c.qG.includes(x) && ((r.tabId = h), (r.tabPos = y), (r.isTabSelectedByDefault = C)),
                        g && (r.skeletonId = g),
                        T && (r.mainObjectType = T),
                        N && (r.mainObjectId = N));
                    let s = (0, i.F)({ params: r, logger: M, context: 'useSendEventOnClipNavigated' });
                    s && e && (0, n.QS)(t.evgenInstance, s);
                });
            };
        },
        44616: (e) => {
            e.exports = {
                root: 'CarouselWithColumnsBlock_root__v_qoo',
                controls: 'CarouselWithColumnsBlock_controls__yCSFo',
                item: 'CarouselWithColumnsBlock_item__RBGs4',
                item_columns_one: 'CarouselWithColumnsBlock_item_columns_one__GuhDB',
                item_columns_two: 'CarouselWithColumnsBlock_item_columns_two__46rgZ',
                column: 'CarouselWithColumnsBlock_column__oMRES',
                backwardControl: 'CarouselWithColumnsBlock_backwardControl__b_uKR',
                controlsContainer: 'CarouselWithColumnsBlock_controlsContainer__4_1Ao',
            };
        },
        44924: (e) => {
            e.exports = {
                title: 'OtherServicesSectionDesktop_title__TmiIR',
                content_ru: 'OtherServicesSectionDesktop_content_ru__tShm1',
                content_by: 'OtherServicesSectionDesktop_content_by__GAt4T',
                card: 'OtherServicesSectionDesktop_card__HqmGz',
                logo_ru: 'OtherServicesSectionDesktop_logo_ru__tox8Q',
                logo_en: 'OtherServicesSectionDesktop_logo_en__xuJro',
            };
        },
        45347: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => N });
            var i = a(88800),
                l = a(13758),
                n = a(57249),
                r = a(65724),
                s = a(84961),
                o = a(6087),
                c = a(53548),
                d = a(17392),
                u = a(21284),
                _ = a(29993),
                m = a(79070),
                p = a(78275),
                v = a(90688),
                x = a(19994),
                h = a(69704),
                y = a(35412);
            let C = (e, t, a) => {
                let i = (i) => {
                    let l = (i + e / 30) % 12,
                        n = t * Math.min(a, 1 - a);
                    return a - n * Math.max(-1, Math.min(l - 3, 9 - l, 1));
                };
                return [i(0), i(8), i(4)];
            };
            var g = a(8655);
            let b = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                return Math.min(a, Math.max(t, e)) / 100;
            };
            var A = a(68817),
                f = a.n(A),
                j = a(49124);
            let T = o.default.default(
                () =>
                    Promise.resolve()
                        .then(a.bind(a, 13758))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = j.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/undefined/music/vundefined' : window.location.origin;
                (0, l.setWasmUrl)(new URL(n, e).href);
            }
            let N = (0, s.PA)((e) => {
                let { agent: t, isPlaying: a, className: l } = e,
                    [n, s] = (0, c.useState)(null),
                    { state: o, toggleTrue: A } = (0, p.e)(!1),
                    { state: j, toggleTrue: N, toggleFalse: I } = (0, p.e)(!1),
                    { theme: k } = (0, h.W)(),
                    S = (0, c.useRef)(null),
                    L = t.entityType === u.h.ARTIST,
                    E = t.entityType === u.h.ALBUM || t.entityType === u.h.TRACK || t.entityType === u.h.PLAYLIST,
                    M = t.cover.color,
                    P = t.cover.uri,
                    O = (0, _.c)(async () => {
                        if (o) {
                            if (!M) return void N();
                            if (k) {
                                I();
                                let {
                                        color: e,
                                        glow1: a,
                                        glow2: i,
                                    } = ((e) => {
                                        let { averageColor: t, theme: a, custom: i } = e,
                                            { h: l, s: n, l: r } = (0, y.g8)(t);
                                        if (i) {
                                            if (a === g.S.Dark) {
                                                let e = b(n + 5, 50, 100);
                                                return { color: C(l, e, b(r - 40, 12, 25)), glow1: C(l, e, b(r - 5, 45, 60)), glow2: C(l, e, b(r + 35, 80, 90)) };
                                            }
                                            let e = b(n - 2, 50, 100);
                                            return { color: C(l, e, b(r + 43, 80, 95)), glow1: C(l, e, b(r + 5, 45, 75)), glow2: C(l, e, b(r, 35, 55)) };
                                        }
                                        return { color: C(l, (n > 25 ? Math.min(n + 25, 60) : n) / 100, (r > 20 ? Math.min(r + 15, 60) : r) / 100) };
                                    })({ averageColor: M, theme: k, custom: !t.entityType }),
                                    l = JSON.stringify({
                                        rules: [
                                            { id: 'color', type: 'Color', value: e },
                                            { id: 'glow_1', type: 'Color', value: a },
                                            { id: 'glow_2', type: 'Color', value: i },
                                        ],
                                    });
                                (await (null == n ? void 0 : n.setThemeData(l)), N());
                            }
                        }
                    }),
                    w = (0, _.c)(() => {
                        (A(), O());
                    });
                ((0, c.useEffect)(() => {
                    a ? null == n || n.play() : null == n || n.pause();
                }, [n, a]),
                    (0, c.useEffect)(() => {
                        O();
                    }, [M, O, k, o]),
                    (0, c.useEffect)(() => {
                        if (n)
                            return (
                                n.setUseFrameInterpolation(!1),
                                n.setRenderConfig({ devicePixelRatio: 0.1 }),
                                n.addEventListener('load', w),
                                () => {
                                    n.removeEventListener('load', w);
                                }
                            );
                    }, [n, w]));
                let R = !o || !j,
                    D = (0, m.L)(() => {
                        if (!S.current) return;
                        let e = L ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(S.current.clientWidth * e, 'px') };
                    });
                return (0, i.jsxs)('div', {
                    ref: S,
                    className: (0, r.$)(f().root, l, { [f().root_loading]: R }),
                    style: D,
                    'data-test-id': R ? d.OA.vibe.VIBE_AGENT_LOADING_CARD : void 0,
                    children: [
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(f().cover, { [f().cover_round]: L, [f().cover_square]: E, [f().cover_loading]: R }),
                            children: [
                                t.entityType &&
                                    P &&
                                    (0, i.jsx)(v._V, { src: P, size: 200, fit: 'cover', withAvatarReplace: !0, className: f().image, withLoadingIndicator: !1 }),
                                (0, i.jsx)(T, { src: t.animationUri, loop: !0, dotLottieRefCallback: s, className: f().animation }),
                            ],
                        }),
                        (0, i.jsx)(x.W, { className: (0, r.$)(f().shimmer, { [f().shimmer_loading]: R }), isActive: !0, radius: L ? 'round' : 'm' }),
                    ],
                });
            });
        },
        45873: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'PlayButtonWithPosition_root__H5FYg',
                playButton: 'PlayButtonWithPosition_playButton__7cfDQ',
                playButtonIcon: 'PlayButtonWithPosition_playButtonIcon___cLAL',
                playingAnimation: 'PlayButtonWithPosition_playingAnimation__Hy5rC',
                position: 'PlayButtonWithPosition_position__wk3OT',
                root_current: 'PlayButtonWithPosition_root_current__FCDLJ',
                root_playing: 'PlayButtonWithPosition_root_playing__RpnYU',
                root_disabled: 'PlayButtonWithPosition_root_disabled__PMV24',
                root_disliked: 'PlayButtonWithPosition_root_disliked__NIZzA',
                spinner: 'PlayButtonWithPosition_spinner__jNaNf',
            };
        },
        45958: (e) => {
            e.exports = { imageWrapper: 'MultivibePromoModal_imageWrapper___P4Nx', button: 'MultivibePromoModal_button__8vUYb' };
        },
        46200: (e) => {
            e.exports = {
                content_ru: 'BooksSectionDesktop_content_ru__Yauyu',
                content_by: 'BooksSectionDesktop_content_by___eqCQ',
                card: 'BooksSectionDesktop_card__blMRo',
                logo_ru: 'BooksSectionDesktop_logo_ru__SRY4d',
                logo_en: 'BooksSectionDesktop_logo_en__Szpr_',
            };
        },
        47225: (e) => {
            e.exports = { root: 'VibeModal_root__GAPMW', header: 'VibeModal_header__iF72V', content: 'VibeModal_content__loGj6' };
        },
        47580: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => i });
            let i = (e) => e.map((e) => e.name).join(', ');
        },
        47998: (e) => {
            e.exports = { root: 'MoreInfoLink_root___TgXc', content: 'MoreInfoLink_content__Rjqj_' };
        },
        48627: (e) => {
            e.exports = { image: 'SharedVibeModalLumen_image__jpStc', image_blurred: 'SharedVibeModalLumen_image_blurred__C5OaN' };
        },
        49333: (e) => {
            e.exports = { image: 'FamilyInviteErrorView_image__OyVA_', image_small: 'FamilyInviteErrorView_image_small__uczsu' };
        },
        49556: (e) => {
            e.exports = {
                root: 'DownloadMobileApp_root__RU7VS',
                closeButton: 'DownloadMobileApp_closeButton__t38Rw',
                text: 'DownloadMobileApp_text__bCbs3',
                subtitle: 'DownloadMobileApp_subtitle__vPtiS',
                buttons: 'DownloadMobileApp_buttons__mL4w1',
                button: 'DownloadMobileApp_button__r0E7Z',
                stayButton: 'DownloadMobileApp_stayButton__k3Ot8',
            };
        },
        49602: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => l });
            var i = a(18593);
            function l(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Artist;
            }
        },
        49873: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = (e) => {
                var t, a;
                return (null == e || null == (t = e[0]) ? void 0 : t.various) ? null : null != (a = null == e ? void 0 : e[0]) ? a : null;
            };
        },
        50180: (e) => {
            e.exports = { root: 'PaywallFAQ_root__lDVk4', title: 'PaywallFAQ_title__G44Rp', content: 'PaywallFAQ_content__QJL9h' };
        },
        50550: (e) => {
            e.exports = {
                imageContainer: 'MultivibeInviteModal_imageContainer__PYWbp',
                multivibeCover: 'MultivibeInviteModal_multivibeCover__CCkS0',
                multivibeAvatar: 'MultivibeInviteModal_multivibeAvatar__kBvGN',
                multivibeControl: 'MultivibeInviteModal_multivibeControl__hoO93',
                guestAvatar: 'MultivibeInviteModal_guestAvatar__pIobb',
                spinnerWrapper: 'MultivibeInviteModal_spinnerWrapper__KyeNf',
            };
        },
        51190: (e) => {
            e.exports = {
                root: 'PlusModal_root__RA4rI',
                root_error: 'PlusModal_root_error__BYJfM',
                root_mobile: 'PlusModal_root_mobile__pEOEu',
                header: 'PlusModal_header__Xj_1a',
                content: 'PlusModal_content__QHgFY',
                contentWrapper: 'PlusModal_contentWrapper__dYFpI',
                growContainer: 'PlusModal_growContainer__eDnbY',
                growContainer_withoutPaddings: 'PlusModal_growContainer_withoutPaddings__H4fPH',
                buttons: 'PlusModal_buttons___Gy1Y',
                text: 'PlusModal_text__ioQgs',
                title: 'PlusModal_title__znUSU',
                description: 'PlusModal_description__PjqMm',
                link: 'PlusModal_link__va_hh',
                linkContainer: 'PlusModal_linkContainer__5NaN1',
                linkArrow: 'PlusModal_linkArrow__xDKKi',
            };
        },
        52048: (e) => {
            e.exports = {
                button: 'PlusModalButton_button__Ayw3M',
                shimmer: 'PlusModalButton_shimmer__JDPqE',
                button_mobile: 'PlusModalButton_button_mobile__V2Et4',
                shimmer_mobile: 'PlusModalButton_shimmer_mobile__ndcfv',
                text: 'PlusModalButton_text__GRAK7',
            };
        },
        53073: (e, t, a) => {
            'use strict';
            function i() {
                return { appId: '117328825040925' };
            }
            a.d(t, { k: () => i });
        },
        53281: (e) => {
            e.exports = {
                root: 'FullscreenPlayerDesktop_root___8vo1',
                important: 'FullscreenPlayerDesktop_important__dGfiL',
                header: 'FullscreenPlayerDesktop_header__OBhzq',
                modalContent: 'FullscreenPlayerDesktop_modalContent__Zs_LC',
                notification: 'FullscreenPlayerDesktop_notification__luD_J',
                closeButton: 'FullscreenPlayerDesktop_closeButton__MQ64s',
            };
        },
        53301: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => l });
            var i = a(42205);
            let l = (e, t) => {
                if (!e) return { clipIds: [], activeClipIndex: 0 };
                let a = e
                        .split(',')
                        .map(Number)
                        .filter((e) => e >= 0),
                    l = (0, i.z)(a, t);
                return { clipIds: a, activeClipIndex: l };
            };
        },
        55737: (e) => {
            e.exports = {
                itemCounter_3: 'ClipsCarouselContent_itemCounter_3__c_H3V',
                item: 'ClipsCarouselContent_item__Yy7_P',
                important: 'ClipsCarouselContent_important__nZYA0',
                itemCounter_5: 'ClipsCarouselContent_itemCounter_5__QeQd_',
            };
        },
        56386: (e) => {
            e.exports = {
                root: 'TopSectionRUWithBenefits_root__wF1_n',
                main: 'TopSectionRUWithBenefits_main__0igzf',
                logo: 'TopSectionRUWithBenefits_logo__PbF2i',
                moreInfoChildren: 'TopSectionRUWithBenefits_moreInfoChildren__9OEAu',
                title: 'TopSectionRUWithBenefits_title__pXmdX',
                benefits: 'TopSectionRUWithBenefits_benefits__GweJJ',
                benefit: 'TopSectionRUWithBenefits_benefit__12ENa',
                benefit_recommendation: 'TopSectionRUWithBenefits_benefit_recommendation__PMApk',
                benefitLogo: 'TopSectionRUWithBenefits_benefitLogo__ntii8',
                benefitLabelDesktop: 'TopSectionRUWithBenefits_benefitLabelDesktop__eITJ5',
                benefitLabelMobile: 'TopSectionRUWithBenefits_benefitLabelMobile__ndVcr',
                buySubscriptionBlock: 'TopSectionRUWithBenefits_buySubscriptionBlock___AM6p',
                goHomeLink: 'TopSectionRUWithBenefits_goHomeLink__EJjJD',
            };
        },
        56446: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => u });
            var i = a(88800),
                l = a(53548),
                n = a(2058),
                r = a(17392),
                s = a(96817),
                o = a(52300),
                c = a(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: a,
                            size: l,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: v,
                            forwardRef: x,
                            style: h,
                            children: y,
                        } = e,
                        { formatMessage: C } = (0, n.A)(),
                        g = C({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(s.$, {
                        className: v,
                        color: 'secondary',
                        radius: d,
                        size: l,
                        variant: t,
                        withRipple: a,
                        flexIcon: !0,
                        'aria-label': g,
                        onClick: m,
                        ref: x,
                        icon: (0, i.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: h,
                        'data-test-id': r.S7.TRAILER_BUTTON,
                        children: y,
                    });
                },
                u = (0, l.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        56712: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => f });
            var i = a(88800),
                l = a(65724),
                n = a(84961),
                r = a(53548),
                s = a(29993),
                o = a(52073),
                c = a(5407),
                d = a(76675),
                u = a(28830),
                _ = a(9618),
                m = a(4795),
                p = a(55693),
                v = a(7123),
                x = a(72288),
                h = a(8990),
                y = a(2058),
                C = a(47580),
                g = a(95993),
                b = a(27157),
                A = a.n(b);
            let f = (0, n.PA)((e) => {
                var t;
                let {
                        className: a,
                        track: n,
                        meta: b,
                        beforeBlock: f,
                        controls: j,
                        playButtonCellRender: T,
                        withLightning: N,
                        isPlaying: I,
                        isCurrent: k,
                        togglePlay: S,
                        restartPlay: L,
                        onPlayClick: E,
                        playButtonIconSize: M,
                        skipFreemiumCloseListeningPaywall: P = !1,
                        ...O
                    } = e,
                    { shouldShowBuySubscriptionModal: w, showBuySubscriptionModal: R } = (0, _.q)(),
                    {
                        track: D,
                        fullscreenPlayer: B,
                        settings: { isMobile: F },
                        album: U,
                        albumCPA: { isPlusCPAPlayerBarEnabled: z },
                        paywall: { modal: W },
                    } = (0, x.g)(),
                    { ref: V, intersectionPropertyId: K } = (0, u.n)(),
                    Y = (0, d.b)(),
                    H = (0, c.P)(),
                    q = ((e) => {
                        let { track: t, withLightning: a } = e,
                            { formatMessage: i } = (0, y.A)();
                        return ((e, t, a) => {
                            var i;
                            let { withLightning: l } = t,
                                n = (0, C.j)(null != (i = e.artists) ? i : []);
                            return e.isAvailable
                                ? [n, e.title, e.version, l && a({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(a({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(n, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: a }, i);
                    })({ withLightning: N, track: n }),
                    Q = ((e) => {
                        let { sonataState: t } = (0, x.g)(),
                            a = t.status === v.MT.LOADING_MEDIA_SOURCE || t.status === v.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let i = t.entityMeta.entityId;
                            return a && i === e;
                        }
                        return a;
                    })(n.entityId),
                    $ = z(U.id, null == (t = U.meta) ? void 0 : t.isNonMusic),
                    G = n.isAvailable && w && !$,
                    Z = (0, m.N)(),
                    X = n.isAvailable && Z && !$ && !P,
                    J = (0, g.w)({ track: n, callback: S }),
                    ee = (0, s.c)(() => {
                        D.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    et = (0, g.w)({ track: n, callback: ee }),
                    { sendPlaySearchFeedback: ea } = (0, p.z)(),
                    [ei, el] = (0, r.useState)(!1),
                    en = (0, s.c)(() => {
                        if (!H()) {
                            if (G) return void R();
                            if (X) return void W.open();
                            (ei || I || (el(!0), null == ea || ea()), J(), Y(!I), null == E || E(!I));
                        }
                    }),
                    er = (0, s.c)(() => {
                        if (I) return void L();
                        en();
                    }),
                    es = (0, s.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            (w && n.isAvailableOnlyForPlus && R(), Z && n.isAvailableOnlyForPlus && W.open());
                            return;
                        }
                        if (G) return void R();
                        let t = !F && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !B.modal.isOpened));
                        return X && !t
                            ? void W.open()
                            : ((0, o.P)(e, A().ripple), F)
                              ? void en()
                              : 2 === e.detail
                                ? void er()
                                : void (1 === e.detail && n.hasTrackLink && !B.modal.isOpened && (et(), X && W.open()));
                    }),
                    eo = null == T ? void 0 : T({ onPlayButtonClick: en, isPlaying: I, isCurrent: k, isLoading: Q, playButtonIconSize: M });
                return (0, i.jsxs)(h.C, {
                    ref: V,
                    'aria-label': q,
                    // for PulseSync WebHost: BEGIN publish the track ID on the native track DOM element for addons
                    'data-pulsesync-track-id': n.id,
                    // for PulseSync WebHost: END publish the track ID on the native track DOM element for addons
                    'data-intersection-property-id': K,
                    onClick: es,
                    className: (0, l.$)(A().root, { [A().root_disabled]: !n.isAvailable, [A().root_current]: k && F }, a),
                    ...O,
                    children: [f, eo, b, j],
                });
            });
        },
        58660: (e) => {
            e.exports = {
                root: 'EditContentModal_root__spGT4',
                modalContent: 'EditContentModal_modalContent__uk5Di',
                header: 'EditContentModal_header__F6BJQ',
                title: 'EditContentModal_title__OFu19',
                content: 'EditContentModal_content__6yEGM',
                field: 'EditContentModal_field__rexIL',
                label: 'EditContentModal_label__Cf3Kp',
                input: 'EditContentModal_input__8O8GH',
                input_error: 'EditContentModal_input_error__fxTOr',
                buttons: 'EditContentModal_buttons__bHzfS',
                button: 'EditContentModal_button__usS1Z',
            };
        },
        59918: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => n });
            var i = a(27169),
                l = a(29201);
            let n = (e) => {
                var t, a, n, r, s;
                return e
                    ? {
                          id: e.id,
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, l.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: i.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, l.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (a = e.counts) ? void 0 : a.albums) || 0,
                              alsoAlbums: (null == (n = e.counts) ? void 0 : n.compilations) || 0,
                              tracks: (null == (r = e.counts) ? void 0 : r.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (s = e.trailer) ? void 0 : s.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
        },
        60413: (e) => {
            e.exports = {
                root: 'TopSectionDesktop_root__lDNkV',
                wrapper: 'TopSectionDesktop_wrapper__sEPZr',
                content: 'TopSectionDesktop_content__356Uk',
                title: 'TopSectionDesktop_title__JFo6R',
                label: 'TopSectionDesktop_label__JmilG',
                buySubscriptionBlock: 'TopSectionDesktop_buySubscriptionBlock__dhv3Z',
            };
        },
        60906: (e) => {
            e.exports = {
                root: 'TrackComplaintModal_root__vMG5q',
                root_mobile: 'TrackComplaintModal_root_mobile__B470z',
                content: 'TrackComplaintModal_content__kFsQz',
                iframe: 'TrackComplaintModal_iframe__qp1Jv',
            };
        },
        61304: (e) => {
            e.exports = {
                root: 'BuySubscriptionBlock_root__vcGLK',
                text_main: 'BuySubscriptionBlock_text_main__fU5RA',
                text_addition: 'BuySubscriptionBlock_text_addition__bbHYT',
                text_secondary: 'BuySubscriptionBlock_text_secondary__ZT9ke',
                buttonContainer: 'BuySubscriptionBlock_buttonContainer__Tu2hm',
                buttonContainer_columnLayout: 'BuySubscriptionBlock_buttonContainer_columnLayout__MH7PE',
                root_withSecondButton: 'BuySubscriptionBlock_root_withSecondButton___v2dL',
                button: 'BuySubscriptionBlock_button__EqUAg',
                stickyContainer: 'BuySubscriptionBlock_stickyContainer__yA50y',
                stickyContainer_enter: 'BuySubscriptionBlock_stickyContainer_enter__50hEo',
                stickyContainer_enter_active: 'BuySubscriptionBlock_stickyContainer_enter_active__4vFVC',
                'animation-show': 'BuySubscriptionBlock_animation-show__xlvuU',
                stickyContainer_exit: 'BuySubscriptionBlock_stickyContainer_exit__9Axef',
                stickyContainer_exit_active: 'BuySubscriptionBlock_stickyContainer_exit_active__HjXVn',
                'animation-hide': 'BuySubscriptionBlock_animation-hide__gnUki',
            };
        },
        61386: (e) => {
            e.exports = {
                root: 'MainCardDesktop_root__qa00U',
                root_horizontal: 'MainCardDesktop_root_horizontal__Fy_E0',
                textContainer: 'MainCardDesktop_textContainer__mzWGu',
                imageContainer: 'MainCardDesktop_imageContainer__81MQy',
                image: 'MainCardDesktop_image__nUJz3',
                root_vertical: 'MainCardDesktop_root_vertical__KGeJ2',
                imageContainer_align_center: 'MainCardDesktop_imageContainer_align_center__kEU_O',
                imageContainer_align_right: 'MainCardDesktop_imageContainer_align_right__T12Qo',
                text: 'MainCardDesktop_text__omw7l',
            };
        },
        61898: (e) => {
            e.exports = {
                title: 'ArtistStats_title__Yxyh1',
                count: 'ArtistStats_count__8h5zM',
                stats: 'ArtistStats_stats__Hammf',
                statsNumber_positive: 'ArtistStats_statsNumber_positive__GlukF',
                statsNumber_negative: 'ArtistStats_statsNumber_negative__C0bH5',
            };
        },
        61931: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => p });
            var i = a(78793),
                l = a(54577),
                n = a(90780),
                r = a(29993),
                s = a(12816),
                o = a(34500),
                c = a(46166),
                d = a(14518),
                u = a(73442),
                _ = a(91248),
                m = a(65523);
            let p = (e) => {
                let t = (0, n.st)(),
                    { hash: a } = (0, n.gf)(),
                    { pageId: p } = (0, d.$)(),
                    { tabId: v, tabPos: x, isTabSelectedByDefault: h } = (0, _.R)(),
                    { blockType: y, blockId: C, blockPosX: g, blockPosY: b, mainObjectType: A, mainObjectId: f } = (0, o.N)(),
                    { objectsCount: j, objectType: T, objectId: N, objectPosX: I, objectPosY: k } = (0, c.J)(),
                    S = (0, m.U)(),
                    { skeleton: L } = (0, u.b)();
                return (0, r.c)((n) => {
                    if (!t || !p || !s.xK.includes(p)) return;
                    let r = {
                        hash: a,
                        pageId: p,
                        entityType: y,
                        entityId: C,
                        entityPosX: g,
                        entityPosY: b,
                        objectsCount: j,
                        viewUuid: e,
                        objectType: T,
                        objectId: N,
                        objectPosX: I,
                        objectPosY: k,
                    };
                    (s.qG.includes(p) && ((r.tabId = v), (r.tabPos = x), (r.isTabSelectedByDefault = h)),
                        L && (r.skeletonId = L),
                        A && (r.mainObjectType = A),
                        f && (r.mainObjectId = f));
                    let o = (0, i.F)({ params: r, logger: S, context: 'useSendEventOnClipShowedOrHidden' });
                    if (o) {
                        if (n) return void (0, l.Pf)(t.evgenInstance, o);
                        (0, l.nv)(t.evgenInstance, o);
                    }
                });
            };
        },
        62214: (e) => {
            e.exports = {
                root: 'PlayQueueTitle_root__E2XOW',
                root_withDnD: 'PlayQueueTitle_root_withDnD__8kctq',
                linkContainer: 'PlayQueueTitle_linkContainer__xqLIj',
                titleIcon: 'PlayQueueTitle_titleIcon__z1B_p',
                title: 'PlayQueueTitle_title__q3ppG',
                linkText: 'PlayQueueTitle_linkText__9mgvM',
                heading: 'PlayQueueTitle_heading__JrzQq',
                heading_withOffset: 'PlayQueueTitle_heading_withOffset__ZRyEr',
                subTitle: 'PlayQueueTitle_subTitle__RzrJA',
                modeTitle: 'PlayQueueTitle_modeTitle__KixWV',
            };
        },
        63028: (e) => {
            e.exports = {
                root: 'ArtistAboutModalImageSlider_root__L18Xb',
                button: 'ArtistAboutModalImageSlider_button__GPXyc',
                image: 'ArtistAboutModalImageSlider_image__3CTLr',
                moreCovers: 'ArtistAboutModalImageSlider_moreCovers__7oDPM',
                moreCoversText: 'ArtistAboutModalImageSlider_moreCoversText__W_P8L',
            };
        },
        63807: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => i });
            let i = (0, a(53548).createContext)({
                title: null,
                setTitle: () => {},
                titleElement: null,
                scrollElement: null,
                setTitleElement: () => {},
                child: null,
                setChild: () => {},
                childElement: null,
                setChildElement: () => {},
                isScrolledChild: !1,
                isScrolledTitle: !1,
                isScrolling: !1,
                isHeaderHidden: !1,
            });
        },
        63983: (e) => {
            e.exports = {
                root: 'FullscreenPlayerMobile_root__Sqyh0',
                important: 'FullscreenPlayerMobile_important__1lAN3',
                header: 'FullscreenPlayerMobile_header__8KH28',
                headerCenter: 'FullscreenPlayerMobile_headerCenter___EqSP',
                modalContent: 'FullscreenPlayerMobile_modalContent__m2cbB',
                castButton: 'FullscreenPlayerMobile_castButton__3ZgER',
                footer: 'FullscreenPlayerMobile_footer__LRvhK',
                footerContainer: 'FullscreenPlayerMobile_footerContainer__aupK1',
                playQueueButton_active: 'FullscreenPlayerMobile_playQueueButton_active__CG2s8',
                syncLyricsButton_active: 'FullscreenPlayerMobile_syncLyricsButton_active__6L4YF',
                notification: 'FullscreenPlayerMobile_notification__V1cxP',
            };
        },
        64184: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => i });
            var i = (function (e) {
                return ((e.INFO = 'INFO'), (e.SUCCESS = 'SUCCESS'), e);
            })({});
        },
        65480: (e) => {
            e.exports = {
                content_ru: 'BooksSectionMobile_content_ru__xiiQh',
                content_by: 'BooksSectionMobile_content_by__t_UNK',
                card: 'BooksSectionMobile_card__t6bb7',
                logo_ru: 'BooksSectionMobile_logo_ru__cnYJJ',
                logo_en: 'BooksSectionMobile_logo_en__wcgiD',
            };
        },
        66022: (e) => {
            e.exports = {
                icon: 'PlayQueueButton_icon__7fc0G',
                icon_active: 'PlayQueueButton_icon_active__4A8H2',
                animation_scaled: 'PlayQueueButton_animation_scaled__w_Wir',
                scale: 'PlayQueueButton_scale__dXShR',
                animation_unscaled: 'PlayQueueButton_animation_unscaled__Lt_j9',
                unscale: 'PlayQueueButton_unscale__BlmKQ',
            };
        },
        67542: (e) => {
            e.exports = { root: 'PaywallRU_root__X8j2f' };
        },
        67984: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => C, D: () => h });
            var i = a(88800),
                l = a(65724),
                n = a(35802),
                r = a(53548),
                s = a(35412),
                o = a(92716),
                c = a(17392),
                d = a(53323),
                u = a(34500),
                _ = a(77948),
                m = a(18486),
                p = a(31764),
                v = a(44616),
                x = a.n(v),
                h = (function (e) {
                    return ((e.ONE = 'one'), (e.TWO = 'two'), e);
                })({});
            let y = (e) => {
                    let {
                            className: t,
                            forwardRef: a,
                            isShimmerVisible: v,
                            isColumnsShimmerVisible: h,
                            isHeaderWithoutControls: y,
                            maxColumnsCount: C,
                            carouselItemClassName: g,
                            carouselClassName: b,
                            children: A,
                            itemsCountPerColumn: f,
                            shimmer: j,
                            viewAllActionLink: T,
                            blockHeaderClassName: N,
                            additionalControl: I,
                            blockHeaderDescription: k,
                            blockHeaderTitle: S,
                            blockHeaderCoverUrl: L,
                            withBlockHeaderDescription: E,
                            withBlockHeaderCover: M,
                            blockHeaderHeadingVariant: P,
                            isShimmerActive: O,
                            shouldResetCarouselScroll: w,
                            beforeCarousel: R,
                            ...D
                        } = e,
                        { objectsCount: B } = (0, u.N)(),
                        [F, U] = (0, r.useState)(),
                        z = (0, r.useId)(),
                        W = (0, r.useRef)(null),
                        V = 'two' === C,
                        K = 'string' == typeof T ? String(T) : void 0,
                        Y = null != h ? h : v,
                        H = (0, r.useCallback)(
                            (e) => {
                                let t = (0, n.A)(e, f).slice(0, V ? 2 : 1);
                                return (
                                    1 === t.length ? U('one') : U('two'),
                                    t.map((e, t) => (0, i.jsx)('div', { className: x().column, 'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: e }, t))
                                );
                            },
                            [f, V],
                        ),
                        q = (0, r.useMemo)(() => {
                            if (Y) return H(Array.from({ length: 2 * f }, (e, t) => (0, r.cloneElement)(j, { key: t })));
                            return H(A);
                        }, [A, H, Y, f, j]),
                        Q = (0, r.useMemo)(
                            () =>
                                y
                                    ? null
                                    : (0, i.jsxs)('div', {
                                          className: x().controlsContainer,
                                          children: [I, (0, i.jsx)(p.X, { carouselRef: W, className: x().controls, backwardControlClassName: x().backwardControl })],
                                      }),
                            [I, y],
                        );
                    return (
                        (0, r.useEffect)(() => {
                            W.current && w && W.current.scrollTo(0, 0);
                        }, [w]),
                        (0, i.jsxs)('section', {
                            ref: a,
                            className: (0, l.$)(x().root, t),
                            ...(0, s.OZ)(D),
                            children: [
                                (0, i.jsx)(_.B, {
                                    objectType: o.DomainObjectType.Shortcut,
                                    objectId: K,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: null != B ? B : 0,
                                    children: (0, i.jsx)(m.T, {
                                        coverUrl: L,
                                        title: S,
                                        description: k,
                                        className: N,
                                        labeledForId: z,
                                        viewAllActionLink: T,
                                        controls: Q,
                                        isShimmerVisible: v,
                                        isShimmerActive: O,
                                        withDescription: E,
                                        withCover: M,
                                        headingVariant: P,
                                    }),
                                }),
                                R,
                                (0, i.jsx)(d.F, {
                                    itemClassName: (0, l.$)(x().item, x()['item_columns_'.concat(Y && V ? 'two' : F)], g),
                                    className: b,
                                    ref: W,
                                    'aria-labelledby': z,
                                    'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: q,
                                }),
                            ],
                        })
                    );
                },
                C = (0, r.forwardRef)((e, t) => (0, i.jsx)(y, { forwardRef: t, ...e }));
        },
        68164: (e) => {
            e.exports = {
                line: 'SyncLyricsScroller_line__Vh6WN',
                counter: 'SyncLyricsScroller_counter__B2E7K',
                counterLine: 'SyncLyricsScroller_counterLine__NpBT4',
                root: 'SyncLyricsScroller_root__amiLm',
                root_withVisibleUpperLyrics: 'SyncLyricsScroller_root_withVisibleUpperLyrics__d7noO',
                root_withVisibleScrolledLyrics: 'SyncLyricsScroller_root_withVisibleScrolledLyrics__lowGE',
                root_intro: 'SyncLyricsScroller_root_intro__13gls',
                root_outro: 'SyncLyricsScroller_root_outro__XlDH5',
                line_last: 'SyncLyricsScroller_line_last__liS_1',
                root_prepare: 'SyncLyricsScroller_root_prepare__h0Gf1',
                line_active: 'SyncLyricsScroller_line_active__6lLvH',
            };
        },
        68817: (e) => {
            e.exports = {
                root: 'VibeCardView_root__bt_Xt',
                root_loading: 'VibeCardView_root_loading__J8fOe',
                cover: 'VibeCardView_cover__fBDH_',
                cover_round: 'VibeCardView_cover_round__LPs63',
                cover_square: 'VibeCardView_cover_square__C45qF',
                cover_loading: 'VibeCardView_cover_loading__kpdrp',
                shimmer: 'VibeCardView_shimmer__Rp6yh',
                shimmer_loading: 'VibeCardView_shimmer_loading__74dZm',
                animation: 'VibeCardView_animation__x3VEI',
                image: 'VibeCardView_image__5fXOh',
            };
        },
        69323: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => B });
            var i = a(88800),
                l = a(65724),
                n = a(55482),
                r = a(84961),
                s = a(53548),
                o = a(2058),
                c = a(35412),
                d = a(17392),
                u = a(18593),
                _ = a(29993),
                m = a(29832),
                p = a(90688),
                v = a(7555),
                x = a(29504),
                h = a(13946),
                y = a(44599),
                C = a(61931),
                g = a(16717),
                b = a(44318),
                A = a(64284),
                f = a(12816),
                j = a(28830),
                T = a(84384),
                N = a(54965),
                I = a(97361),
                k = a(99313),
                S = a(20585),
                L = a(39079),
                E = a(72288),
                M = a(90224),
                P = a(91292),
                O = a(16704),
                w = a(8299),
                R = a(90865),
                D = a.n(R);
            let B = (0, r.PA)((e) => {
                var t;
                let {
                        titleClassName: a,
                        artistLinkClassName: r,
                        clip: R,
                        withVideo: B = !0,
                        artistIdWithoutLink: F,
                        viewUuid: U,
                        shouldOpenModalOnCardClick: z = !0,
                    } = e,
                    { fullscreenVideoPlayer: W } = (0, E.g)(),
                    { formatMessage: V } = (0, o.A)(),
                    K = (0, b.C)(),
                    { from: Y } = (0, T.f)({ pageId: f._Q.VIDEO_PLAYER, contextId: W.state.contextId, contextType: u.K.Various, blockId: A.U.CLIPS }),
                    H = (0, I.P)(null != (t = R.duration) ? t : 0),
                    q = (0, C.M)(U),
                    Q = (0, y._)(U),
                    { ref: $, intersectionPropertyId: G } = (0, j.n)({ callback: q }),
                    Z = (0, s.useRef)(null),
                    X = B && R.previewUrl,
                    J = (0, _.c)(() => {
                        Z.current && ((Z.current.currentTime = 0), Z.current.play());
                    }),
                    ee = (0, s.useMemo)(() => (0, n.A)(J, 500), [J]),
                    et = (0, _.c)(() => {
                        var e;
                        null == (e = Z.current) || e.pause();
                    }),
                    ea = (0, s.useMemo)(() => W.ids.indexOf(R.clipId), [W, R.clipId]),
                    { isPlaying: ei, togglePlay: el } = (0, L.D)({
                        playContextParams: {
                            contextData: { type: u.K.Various, meta: { id: k.H.VARIOUS_CLIP_CONTEXT }, from: Y },
                            queueParams: { index: ea },
                            entitiesData: W.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(R.clipId),
                        sonataState: W.state,
                        playbackId: S.V.CLIP,
                    }),
                    en = z ? R.url : (0, g.J)(W.ids, ea),
                    er = (0, _.c)(() => {
                        z ? (K([R.clipId]), Q()) : ei || el();
                    }),
                    es = (0, w.X)({ clip: R, callback: er }),
                    eo = V({ id: 'entity-names.clip-name' }, { clipName: R.title }),
                    ec = (0, s.useMemo)(
                        () =>
                            R.isAvailable
                                ? (0, i.jsxs)(v.t, {
                                      radius: 'm',
                                      className: (0, l.$)(D().view, D().cover),
                                      onMouseEnter: ee,
                                      onMouseLeave: et,
                                      onClick: es,
                                      children: [
                                          X &&
                                              (0, i.jsx)('video', {
                                                  className: D().media,
                                                  ref: Z,
                                                  poster: R.thumbnail && (0, c.oZ)(R.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, i.jsx)('source', { src: R.previewUrl, type: 'video/mp4' }),
                                              }),
                                          R.thumbnail &&
                                              (0, i.jsx)(p._V, {
                                                  className: D().image,
                                                  'aria-hidden': !0,
                                                  src: R.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: c.oZ,
                                              }),
                                          void 0 !== R.duration &&
                                              (0, i.jsx)(x.HL, {
                                                  role: 'text',
                                                  'aria-label': H,
                                                  variant: 'span',
                                                  className: D().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: (0, N.E)(R.duration, R.duration) }),
                                              }),
                                          (0, i.jsx)(O.D, { variant: 'filled', className: D().playButton, onClick: es, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, i.jsx)(v.t, {
                                      radius: 'm',
                                      className: D().unavailableCover,
                                      children: (0, i.jsx)(p.Ab, { className: D().image, iconVariant: 'unavailable', 'data-test-id': d.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [H, R.isAvailable, R.thumbnail, R.previewUrl, R.duration, ee, et, es, X],
                    ),
                    ed = (0, s.useMemo)(
                        () =>
                            R.hasArtists
                                ? (0, i.jsx)(
                                      h.i,
                                      { linkClassName: (0, l.$)(D().artistLink, r), artists: R.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: F },
                                      R.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [F, R, r],
                    );
                return (0, i.jsx)(m.MN, {
                    ref: $,
                    className: D().root,
                    explicitMarkComponent:
                        R.explicitDisclaimer &&
                        (0, i.jsx)(M.N, { getDescriptionTexts: R.getDescriptionTexts, variant: R.explicitDisclaimer, size: 'xxs' }, R.getKey('ExplicitMarkIcon')),
                    'aria-label': eo,
                    srTitle: (0, i.jsx)(P.N, { className: D().srTitleLink, href: en, onClick: es, children: eo }),
                    title: (0, i.jsxs)(
                        x.HL,
                        {
                            className: (0, l.$)(D().title, a),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            'aria-hidden': !0,
                            children: [
                                (0, i.jsx)(P.N, {
                                    className: D().titleLink,
                                    href: en,
                                    tabIndex: -1,
                                    'aria-label': eo,
                                    onClick: es,
                                    'data-test-id': d.Kq.clip.CLIP_META_TITLE,
                                    children: R.title,
                                }),
                                R.version && (0, i.jsx)(x.HL, { className: D().version, variant: 'span', children: ' '.concat(R.version) }),
                            ],
                        },
                        R.getKey('Title'),
                    ),
                    'data-intersection-property-id': G,
                    view: ec,
                    description: ed,
                    'data-test-id': d.Kq.clip.CLIP_CARD,
                });
            });
        },
        69824: (e) => {
            e.exports = {
                root: 'ArtistAboutModalContent_root__XGW1F',
                header: 'ArtistAboutModalContent_header__ws7Ap',
                title: 'ArtistAboutModalContent_title__hMO2k',
                subtitle: 'ArtistAboutModalContent_subtitle__OpssN',
                descriptionWrapper: 'ArtistAboutModalContent_descriptionWrapper__jNL4G',
                description: 'ArtistAboutModalContent_description__KlWvL',
                readMoreButton: 'ArtistAboutModalContent_readMoreButton__1ageU',
                bandlinkScanner: 'ArtistAboutModalContent_bandlinkScanner__Fwv2x',
            };
        },
        70558: (e) => {
            e.exports = { root: 'TextBlockShimmer_root__og5Bj', shimmer: 'TextBlockShimmer_shimmer__TpDdq' };
        },
        70810: (e) => {
            e.exports = { root: 'ArtistSocialLinks_root__9wQxA', link: 'ArtistSocialLinks_link__UFvCL', icon: 'ArtistSocialLinks_icon__Y9VLu' };
        },
        71335: (e) => {
            e.exports = {
                root: 'TrackModalLyricsShimmer_root__t88sX',
                title: 'TrackModalLyricsShimmer_title__lIyk4',
                lyrics: 'TrackModalLyricsShimmer_lyrics__BSM_Q',
                important: 'TrackModalLyricsShimmer_important__U1BbD',
                button: 'TrackModalLyricsShimmer_button__uAG_w',
            };
        },
        71594: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => i });
            let i = RegExp('(px|%)$');
        },
        71660: (e) => {
            e.exports = { text: 'FreePlayerLoginNotification_text__u7Wr5', loginButton: 'FreePlayerLoginNotification_loginButton__ogYTA' };
        },
        71716: (e) => {
            e.exports = {
                root: 'PlayQueueAfterPlayingBlock_root__A7_wI',
                title: 'PlayQueueAfterPlayingBlock_title__nS_nG',
                title_withDnD: 'PlayQueueAfterPlayingBlock_title_withDnD__jsVTk',
                prevTrack: 'PlayQueueAfterPlayingBlock_prevTrack__wDAPP',
                animatedContent: 'PlayQueueAfterPlayingBlock_animatedContent__6rvOT',
                animatedContent_moveToTop: 'PlayQueueAfterPlayingBlock_animatedContent_moveToTop__bW549',
                'move-to-top': 'PlayQueueAfterPlayingBlock_move-to-top__c_AzJ',
                animatedContent_moveFromTop: 'PlayQueueAfterPlayingBlock_animatedContent_moveFromTop__ZLgMV',
                'move-from-top': 'PlayQueueAfterPlayingBlock_move-from-top___8bwu',
                'move-prev-track-from-top': 'PlayQueueAfterPlayingBlock_move-prev-track-from-top__XY1VA',
                animatedContent_moveFromTopSingleTrack: 'PlayQueueAfterPlayingBlock_animatedContent_moveFromTopSingleTrack__rrewW',
                'move-from-top-single-track': 'PlayQueueAfterPlayingBlock_move-from-top-single-track__8po97',
                'move-prev-track-from-top-single-track': 'PlayQueueAfterPlayingBlock_move-prev-track-from-top-single-track__ySSca',
            };
        },
        71880: (e) => {
            e.exports = {
                root: 'TrackLyricsModal_root__KsVRf',
                header: 'TrackLyricsModal_header__nWar3',
                modalContent: 'TrackLyricsModal_modalContent__uYdL2',
                content: 'TrackLyricsModal_content__Cstzi',
                explicitMark: 'TrackLyricsModal_explicitMark__eL04d',
                important: 'TrackLyricsModal_important__0Ie9h',
                version: 'TrackLyricsModal_version__l9sxZ',
                overlay: 'TrackLyricsModal_overlay__0Ehwu',
            };
        },
        72110: (e) => {
            e.exports = { root: 'PaywallBY_root__XMtUB' };
        },
        72806: (e) => {
            e.exports = {
                root: 'VideoPlayerBarDesktop_root__OxypO',
                info: 'VideoPlayerBarDesktop_info__ulYvU',
                infoCard: 'VideoPlayerBarDesktop_infoCard__mE___',
                coverContainer: 'VideoPlayerBarDesktop_coverContainer__xV_VP',
                cover: 'VideoPlayerBarDesktop_cover__Nf4WW',
                description: 'VideoPlayerBarDesktop_description__sAiwG',
                artists: 'VideoPlayerBarDesktop_artists__PNY62',
                artistLink: 'VideoPlayerBarDesktop_artistLink__FgFZ8',
                infoButtons: 'VideoPlayerBarDesktop_infoButtons__9xWZ3',
                sonata: 'VideoPlayerBarDesktop_sonata__VrtGS',
                meta: 'VideoPlayerBarDesktop_meta__KlPBv',
                slider: 'VideoPlayerBarDesktop_slider__xULTh',
                important: 'VideoPlayerBarDesktop_important__HR9Xf',
            };
        },
        72858: (e) => {
            e.exports = { root: 'PlusPaywallButton_root__ftsxl', title: 'PlusPaywallButton_title__8PpX0', subtitle: 'PlusPaywallButton_subtitle__brC59' };
        },
        73240: (e) => {
            e.exports = {
                root: 'FullscreenVideoPlayerDesktop_root__a69Pd',
                important: 'FullscreenVideoPlayerDesktop_important__NvXzL',
                header: 'FullscreenVideoPlayerDesktop_header__oiftJ',
                modalContent: 'FullscreenVideoPlayerDesktop_modalContent__YeGCV',
                closeButton: 'FullscreenVideoPlayerDesktop_closeButton__OqSFs',
                logoLink: 'FullscreenVideoPlayerDesktop_logoLink__o92zi',
                logo_ru: 'FullscreenVideoPlayerDesktop_logo_ru__uRbpz',
                logo_en: 'FullscreenVideoPlayerDesktop_logo_en__mBcdF',
            };
        },
        73441: (e) => {
            e.exports = { button: 'CrackdownModal_button__IWTpu', important: 'CrackdownModal_important__eKBtD', buttonMainText: 'CrackdownModal_buttonMainText__pAlET' };
        },
        73805: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => O });
            var i = a(88800),
                l = a(65724),
                n = a(84961),
                r = a(53548),
                s = a(2058),
                o = a(92716),
                c = a(17392),
                d = a(29993),
                u = a(52300),
                _ = a(17610),
                m = a(29504),
                p = a(42174),
                v = a(96817);
            let x = (e) => {
                let { className: t, variant: a = 'text', onClick: l, iconClassName: n, iconSize: o, size: d = 's', ariaLabel: _ } = e,
                    { formatMessage: m } = (0, s.A)(),
                    p = null != _ ? _ : m({ id: 'play-queue.delete-from-queue' }),
                    x = (0, r.useCallback)(
                        (e) => {
                            (null == l || l(), e.stopPropagation());
                        },
                        [l],
                    );
                return (0, i.jsx)(v.$, {
                    className: t,
                    withRipple: !1,
                    variant: a,
                    size: d,
                    radius: 'round',
                    'aria-label': p,
                    onClick: x,
                    icon: (0, i.jsx)(u.I, { size: o, className: n, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var h = a(5407),
                y = a(25557),
                C = a(55693),
                g = a(72288),
                b = a(49738),
                A = a(56446),
                f = a(64546),
                j = a(29831),
                T = a(30123),
                N = a(54965),
                I = a(1829),
                k = a(82092),
                S = a.n(k),
                L = a(79262),
                E = a(41867),
                M = a.n(E);
            let P = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: a } = (0, s.A)();
                    return t.isDownloaded
                        ? (0, i.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': a({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, i.jsx)(L.A, { value: t.downloadingProgress, size: 16, className: M().downloadingProgress, progressBarClassName: M().progress })
                          : null;
                }),
                O = (0, n.PA)((e) => {
                    var t;
                    let {
                            className: a,
                            track: n,
                            withLightning: v,
                            ignoreDislikedStyles: k,
                            onLikeClick: L,
                            utmLink: E,
                            withSecondaryColor: M,
                            handleRemove: O,
                            withTrailer: w = !0,
                            likeIconSize: R = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: B,
                        } = e,
                        { user: F, trailer: U } = (0, g.g)(),
                        { formatMessage: z } = (0, s.A)(),
                        { sendLikeSearchFeedback: W } = (0, C.z)(),
                        [V, K] = (0, r.useState)(!1),
                        [Y, H] = (0, r.useState)(!1),
                        q = (0, h.P)(),
                        Q = (0, p.K)(n),
                        {
                            duration: $,
                            lightning: G,
                            ugc: Z,
                        } = ((e, t, a) => {
                            var i;
                            let { withLightning: l, isUGC: n } = t,
                                r = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / T.k7);
                                              return (0, N.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== r ? { text: r, ariaLabel: (0, j.j)(Math.round((null != (i = e.durationMs) ? i : 0) / 1e3), a) } : null,
                                lightning: l ? { label: a({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: n ? { label: a({ id: 'ugc.track-description' }) } : null,
                            };
                        })(n, { withLightning: v, isUGC: n.isUGC }, z),
                        X = (0, y.F)(),
                        J = F.hasPlus,
                        ee = !n.isRemoved && n.isAvailable && !B,
                        et = (0, d.c)(async () => {
                            (V || n.isLiked || (K(!0), null == W || W()), await Q(), null == L || L(n.isLiked));
                        }),
                        ea = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        ei = (0, d.c)((e) => {
                            if ((e.stopPropagation(), q())) return void e.preventDefault();
                            (U.openTrackTrailer(n.id), X(o.DomainObjectType.Track, n.id));
                        }),
                        el = (0, r.useMemo)(() => {
                            if (ee)
                                return (0, i.jsx)('div', {
                                    onClick: ea,
                                    children: (0, i.jsx)(I._, {
                                        track: n,
                                        open: Y,
                                        onOpenChange: H,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: E,
                                        className: (0, l.$)(S().contextMenu, { [S().contextMenu_visible]: Y }),
                                        handleRemove: O,
                                        withTrailer: w,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ea, O, Y, ee, w, n, E]);
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(S().root, S().controls, a, {
                            [S().controls_dislikedControls]: n.isDisliked,
                            [S().controls_dislikedColors]: n.isDisliked && !k,
                            [S().controls_disabled]: !n.isAvailable,
                            [S().root_withSecondaryColor]: M,
                        }),
                        children: [
                            G && (0, i.jsx)(u.I, { 'aria-label': G.label, size: 'xxs', className: S().lightning, variant: 'lightning' }),
                            Z &&
                                (0, i.jsxs)(_.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(u.I, {
                                            'aria-label': Z.label,
                                            size: 'xxs',
                                            className: S().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(_.ZI, { children: Z.label }),
                                    ],
                                }),
                            J && (0, i.jsx)('div', { className: (0, l.$)(S().item, S().downloadIcon), children: (0, i.jsx)(P, { track: n }) }),
                            O && !B && (0, i.jsx)(x, { size: 'xs', iconSize: 'xxs', className: (0, l.$)(S().item, S().removeButton), onClick: O, ariaLabel: D }),
                            ee &&
                                (0, i.jsx)(f.WithOffline, {
                                    fallback: (0, i.jsx)(b.c, {
                                        size: 'xs',
                                        iconSize: R,
                                        className: (0, l.$)(S().item, S().likeIcon),
                                        isLiked: n.isLiked,
                                        onClick: et,
                                        disabled: !F.isAuthorized,
                                    }),
                                }),
                            (null == (t = n.trailer) ? void 0 : t.isAvailable) &&
                                n.isAvailable &&
                                (0, i.jsx)(f.WithOffline, {
                                    fallback: (0, i.jsx)(A.k, {
                                        className: (0, l.$)(S().item, S().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ei,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, l.$)(S().item, S().contextMenuWrapper),
                                children: [
                                    null !== $ &&
                                        (0, i.jsx)(m.HL, {
                                            variant: 'span',
                                            className: (0, l.$)(S().duration, { [S().duration_hidden]: Y && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': $.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: $.text }),
                                        }),
                                    el,
                                ],
                            }),
                        ],
                    });
                });
        },
        74591: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => i });
            var i = (function (e) {
                return ((e.IDLE = 'idle'), (e.SUCCESS = 'success'), (e.ERROR = 'error'), e);
            })({});
        },
        74743: (e) => {
            e.exports = {
                root: 'PaywallFAQAnswer_root__IGMDE',
                list: 'PaywallFAQAnswer_list__rPZmm',
                listItem: 'PaywallFAQAnswer_listItem__5UQmO',
                link: 'PaywallFAQAnswer_link__WM9Xr',
            };
        },
        76252: (e) => {
            e.exports = {
                root: 'PlayQueueNowPlayingBlock_root__aJSb8',
                important: 'PlayQueueNowPlayingBlock_important__sxxvA',
                track: 'PlayQueueNowPlayingBlock_track__ClZLs',
                track_withDnD: 'PlayQueueNowPlayingBlock_track_withDnD__D8h0r',
                track_moveFromTop: 'PlayQueueNowPlayingBlock_track_moveFromTop__pBBJt',
                'move-from-top': 'PlayQueueNowPlayingBlock_move-from-top__O5e0S',
                track_moveFromBottom: 'PlayQueueNowPlayingBlock_track_moveFromBottom__Jj2UO',
                'move-from-bottom': 'PlayQueueNowPlayingBlock_move-from-bottom__Cz7lV',
            };
        },
        76827: (e) => {
            e.exports = {
                root: 'ClipCardShimmer_root__sIvNr',
                cover: 'ClipCardShimmer_cover__yA4jz',
                title: 'ClipCardShimmer_title__MCApK',
                text: 'ClipCardShimmer_text__ajZGv',
            };
        },
        77605: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => o });
            var i = a(88800),
                l = a(19994),
                n = a(64310),
                r = a(76827),
                s = a.n(r);
            let o = (e) => {
                let { isActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: s().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, i.jsx)(l.W, { isActive: t, className: s().cover, radius: 'l' }),
                        (0, i.jsx)(n.n, { isActive: t, className: s().title }),
                        (0, i.jsx)(n.n, { isActive: t, className: s().text }),
                    ],
                });
            };
        },
        78826: (e) => {
            e.exports = {
                content_ru: 'PlusSectionDesktop_content_ru__85q1P',
                content_by: 'PlusSectionDesktop_content_by__UBg10',
                card: 'PlusSectionDesktop_card__h8LmR',
                logo_ru: 'PlusSectionDesktop_logo_ru__G2AkZ',
                logo_en: 'PlusSectionDesktop_logo_en__gn4qE',
            };
        },
        80336: (e) => {
            e.exports = {
                root: 'PlayQueueDnDTrackWrapper_root__CithE',
                inner: 'PlayQueueDnDTrackWrapper_inner__xq3xM',
                dragging: 'PlayQueueDnDTrackWrapper_dragging__Tk9uP',
                dragOverlay: 'PlayQueueDnDTrackWrapper_dragOverlay__ulF2W',
            };
        },
        80380: (e) => {
            e.exports = { root: 'PlayQueue_root__ponhw', content: 'PlayQueue_content__zIUvd', scrollContent: 'PlayQueue_scrollContent__2dI0v' };
        },
        81192: (e) => {
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
        81223: (e) => {
            e.exports = {
                root: 'ClipAboutModalDesktop_root__F8UU5',
                root_withFullscreen: 'ClipAboutModalDesktop_root_withFullscreen__nTO1X',
                root_withWindows: 'ClipAboutModalDesktop_root_withWindows__kl4sc',
                header: 'ClipAboutModalDesktop_header__at6X6',
                modalContent: 'ClipAboutModalDesktop_modalContent__Rp_ON',
                explicitMark: 'ClipAboutModalDesktop_explicitMark__SLwRj',
                important: 'ClipAboutModalDesktop_important__LkqWo',
                content: 'ClipAboutModalDesktop_content__0dUY1',
                titleShimmer: 'ClipAboutModalDesktop_titleShimmer__zTtu_',
            };
        },
        81438: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => r });
            var i = a(72288),
                l = a(8655),
                n = a(69704);
            let r = () => {
                var e, t, a, r, s, o;
                let { lumen: c } = (0, i.g)(),
                    { theme: d } = (0, n.W)(),
                    u = null != d ? d : l.S.Dark,
                    _ = null == (e = c.themes) ? void 0 : e[u],
                    m = c.getFallbackImage()[u],
                    p = null != (r = null == _ ? void 0 : _.cover.uri) ? r : m;
                return {
                    cover: p,
                    fullCover: null != (s = null == _ || null == (t = _.fullCover) ? void 0 : t.uri) ? s : p,
                    faceCover: null != (o = null == _ || null == (a = _.faceCover) ? void 0 : a.uri) ? o : p,
                    solidColor: null == _ ? void 0 : _.solidColor,
                    fallbackImage: m,
                };
            };
        },
        81472: (e) => {
            e.exports = { root: 'ShareIframeModal_root__t_NbK', content: 'ShareIframeModal_content__jcq_o' };
        },
        82092: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'CommonControlsBar_root__N8b0F',
                root_withSecondaryColor: 'CommonControlsBar_root_withSecondaryColor__4Y1P_',
                item: 'CommonControlsBar_item__qGErG',
                contextMenu: 'CommonControlsBar_contextMenu__EAq_c',
                contextMenu_visible: 'CommonControlsBar_contextMenu_visible__M0ry0',
                contextMenuWrapper: 'CommonControlsBar_contextMenuWrapper__XjkaL',
                lightning: 'CommonControlsBar_lightning__o7wrY',
                ugcIcon: 'CommonControlsBar_ugcIcon__OV0Cl',
                lightning_withOffset: 'CommonControlsBar_lightning_withOffset__LGvUS',
                duration: 'CommonControlsBar_duration__un38A',
                duration_hidden: 'CommonControlsBar_duration_hidden__noQ4S',
                alwaysVisibleDuration: 'CommonControlsBar_alwaysVisibleDuration__3V6gl',
                controls: 'CommonControlsBar_controls__QrogT',
                trailerIcon: 'CommonControlsBar_trailerIcon__ZHSBo',
                removeButton: 'CommonControlsBar_removeButton__35xHY',
                controls_disabled: 'CommonControlsBar_controls_disabled__0RmLo',
                explicitMark: 'CommonControlsBar_explicitMark__3I_Op',
                controls_dislikedControls: 'CommonControlsBar_controls_dislikedControls__mMjKC',
                likeIcon: 'CommonControlsBar_likeIcon__YqgZY',
                controls_dislikedColors: 'CommonControlsBar_controls_dislikedColors__h5lev',
                downloadIcon: 'CommonControlsBar_downloadIcon__2mM6m',
                popover: 'CommonControlsBar_popover__6bmNd',
            };
        },
        82787: (e) => {
            e.exports = {
                root: 'PlayQueueVibeBlock_root__cVjcM',
                ripple: 'PlayQueueVibeBlock_ripple__Ig_pb',
                vibeCover: 'PlayQueueVibeBlock_vibeCover__THxKz',
                title: 'PlayQueueVibeBlock_title__G3kir',
                vibeTitle: 'PlayQueueVibeBlock_vibeTitle__C5fWp',
            };
        },
        83418: (e, t, a) => {
            'use strict';
            function i(e) {
                let { host: t, url: a } = e;
                return a || (t ? 'https://'.concat(t, '/meta/home.png') : '');
            }
            a.d(t, { v: () => i });
        },
        83547: (e) => {
            e.exports = {
                root: 'TopSectionMobile_root__bl_XJ',
                image: 'TopSectionMobile_image__t_hCH',
                content: 'TopSectionMobile_content__sqstr',
                title: 'TopSectionMobile_title__O_Zx0',
                buySubscriptionBlock: 'TopSectionMobile_buySubscriptionBlock__NSVnY',
                moreInfoLink: 'TopSectionMobile_moreInfoLink__zjcOO',
            };
        },
        83690: (e) => {
            e.exports = {
                content_ru: 'PlusSectionMobile_content_ru__OvJV0',
                content_by: 'PlusSectionMobile_content_by__d5iGm',
                card: 'PlusSectionMobile_card__QbwGe',
                logo_ru: 'PlusSectionMobile_logo_ru___FFew',
                logo_en: 'PlusSectionMobile_logo_en__u_HSO',
            };
        },
        84403: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { o: () => i }),
                (function (e) {
                    ((e.ARTIST = 'artist'), (e.COMPOSER = 'composer'));
                })(i || (i = {})));
        },
        85585: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => i });
            var i = (function (e) {
                return ((e.SYNC_LYRICS = 'syncLyrics'), (e.PLAY_QUEUE = 'playQueue'), e);
            })({});
        },
        85614: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => o });
            var i = a(88800),
                l = a(65724),
                n = a(19994),
                r = a(70558),
                s = a.n(r);
            let o = (e) => {
                let { className: t, shimmerClassName: a, isActive: r = !1, count: o = 10, minWidth: c = 50, maxWidth: d = 90, multiplicity: u = 1 } = e;
                return (0, i.jsx)('div', {
                    className: (0, l.$)(s().root, t),
                    children: Array.from({ length: o }, (e, t) => {
                        let o = ''.concat(((e, t, a) => Math.floor((Math.floor(Math.random() * (t - e + 1)) + e) / a) * a)(c, d, u), '%');
                        return (0, i.jsx)(n.W, { width: o, className: (0, l.$)(s().shimmer, a), isActive: r, radius: 's' }, t);
                    }),
                });
            };
        },
        86696: (e) => {
            e.exports = {
                root: 'TrackAboutModalDesktop_root__NHeeO',
                root_withFullscreen: 'TrackAboutModalDesktop_root_withFullscreen__jOu4X',
                root_withCustomControls: 'TrackAboutModalDesktop_root_withCustomControls__b2JDR',
                header: 'TrackAboutModalDesktop_header__7Zl2n',
                modalContent: 'TrackAboutModalDesktop_modalContent__yf4i5',
                explicitMark: 'TrackAboutModalDesktop_explicitMark__tgVyh',
                important: 'TrackAboutModalDesktop_important__tCPvh',
                version: 'TrackAboutModalDesktop_version__m0z2v',
                explicit: 'TrackAboutModalDesktop_explicit__FGMHf',
                content: 'TrackAboutModalDesktop_content__eEGZu',
                artistLink: 'TrackAboutModalDesktop_artistLink__ao_zU',
                artists: 'TrackAboutModalDesktop_artists__2SlTA',
                overlay: 'TrackAboutModalDesktop_overlay__7cEGE',
                textShimmer: 'TrackAboutModalDesktop_textShimmer__r5_AA',
                text: 'TrackAboutModalDesktop_text__zcpo0',
            };
        },
        86889: (e) => {
            e.exports = {
                root: 'PaywallModal_root__HIYOy',
                header: 'PaywallModal_header__3oCYF',
                closeButton: 'PaywallModal_closeButton__rkLNM',
                content: 'PaywallModal_content__mVxnz',
            };
        },
        87587: (e) => {
            e.exports = {
                root: 'SharedVibeModal_root__gpHus',
                header: 'SharedVibeModal_header__kx58_',
                content: 'SharedVibeModal_content__30LBm',
                agent: 'SharedVibeModal_agent__py1rB',
                agentView: 'SharedVibeModal_agentView__83YaM',
                text: 'SharedVibeModal_text__u_TnV',
                actions: 'SharedVibeModal_actions__iZ1r9',
            };
        },
        88178: (e) => {
            e.exports = {
                root: 'PaywallFooter_root__L_WxQ',
                link: 'PaywallFooter_link__rbIbe',
                important: 'PaywallFooter_important__bAbYb',
                list: 'PaywallFooter_list__WeuCr',
                list_primary: 'PaywallFooter_list_primary__A6hNR',
                list_secondary: 'PaywallFooter_list_secondary__QH2qi',
                item: 'PaywallFooter_item__4rY_9',
                ageRestriction: 'PaywallFooter_ageRestriction__bOKoH',
            };
        },
        90503: (e) => {
            e.exports = { root: 'PaywallFAQQuestion_root__pS9KT' };
        },
        90865: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                view: 'ClipCard_view__MYSwA',
                playButton: 'ClipCard_playButton__0Wyss',
                duration: 'ClipCard_duration__89ZCx',
                image: 'ClipCard_image__hSUud',
                media: 'ClipCard_media__dU4RM',
                unavailableCover: 'ClipCard_unavailableCover__Zd9jl',
                cover: 'ClipCard_cover__ztEok',
                cover_withoutOffset: 'ClipCard_cover_withoutOffset__aasE2',
                root: 'ClipCard_root__kzWjg',
                srTitleLink: 'ClipCard_srTitleLink__0tQdz',
                title: 'ClipCard_title__I1s7Q',
                artistLink: 'ClipCard_artistLink__t6oPP',
                titleLink: 'ClipCard_titleLink__g3HDM',
                version: 'ClipCard_version__w9PM7',
            };
        },
        91086: (e) => {
            e.exports = {
                title: 'TrackModalTitle_title__3zfNn',
                important: 'TrackModalTitle_important__qNVlq',
                content: 'TrackModalTitle_content__mtQKw',
                explicitMark: 'TrackModalTitle_explicitMark__aRT_I',
                text: 'TrackModalTitle_text__3iWX4',
                artistCaption: 'TrackModalTitle_artistCaption__Sj1CR',
                link: 'TrackModalTitle_link__kzVsl',
                meta: 'TrackModalTitle_meta__xlEgt',
                entityName: 'TrackModalTitle_entityName__BRnTV',
            };
        },
        93015: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => v });
            var i = a(88800),
                l = a(98644),
                n = a(65724),
                r = a(53548),
                s = a(2058),
                o = a(19994),
                c = a(13797),
                d = a.n(c);
            let u = (e) => {
                let { isActive: t, className: a } = e,
                    { formatMessage: l } = (0, s.A)(),
                    c = (0, r.useMemo)(() => l({ id: 'loading-messages.entity-is-loading' }, { entityName: l({ id: 'entity-names.track' }) }), [l]);
                return (0, i.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(d().root, a),
                    children: [
                        (0, i.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, i.jsx)('div', { className: d().coverContainer, children: (0, i.jsx)(o.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, i.jsx)('div', { className: d().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, i.jsx)(o.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var _ = a(26835),
                m = a.n(_);
            let p = (e) => {
                    let { isActive: t, className: a } = e,
                        { formatMessage: l } = (0, s.A)(),
                        c = (0, r.useMemo)(() => l({ id: 'loading-messages.entity-is-loading' }, { entityName: l({ id: 'entity-names.track' }) }), [l]);
                    return (0, i.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(m().root, a),
                        children: [
                            (0, i.jsxs)('div', {
                                className: m().infoContainer,
                                children: [
                                    (0, i.jsx)(o.W, { isActive: t, className: m().cover, radius: 's' }),
                                    (0, i.jsx)('div', { className: m().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: m().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, i.jsx)(o.W, { isActive: t, className: m().action, radius: 'l' }),
                        ],
                    });
                },
                v = (e) => {
                    let { isActive: t, variant: a, className: n } = e;
                    switch (a) {
                        case l.X.PLAYLIST:
                            return (0, i.jsx)(p, { isActive: t, className: n });
                        case l.X.ALBUM:
                            return (0, i.jsx)(u, { isActive: t, className: n });
                    }
                };
        },
        93346: (e) => {
            e.exports = {
                root: 'VideoPlayerContainer_root__GHDoi',
                container: 'VideoPlayerContainer_container__pZe41',
                container_adaptiveAspectRatio: 'VideoPlayerContainer_container_adaptiveAspectRatio__mBFoR',
                loadingIndicator: 'VideoPlayerContainer_loadingIndicator__qDxPV',
                loadingIndicator_showed: 'VideoPlayerContainer_loadingIndicator_showed__KQCNf',
            };
        },
        93671: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => x });
            var i = a(88800),
                l = a(65724),
                n = a(84961),
                r = a(53548),
                s = a(54020),
                o = a(92716),
                c = a(53323),
                d = a(77948),
                u = a(69323),
                _ = a(77605),
                m = a(55737),
                p = a.n(m);
            let v = (0, n.PA)((e) => {
                    let {
                            forwardRef: t,
                            clipCardTitleClassName: a,
                            clipCardArtistLinkClassName: n,
                            carouselItemClassName: m,
                            isShimmerVisible: v,
                            isShimmerActive: x,
                            containerClassName: h,
                            artistIdWithoutLink: y,
                            withVideo: C = !0,
                            clips: g,
                            shouldOpenModalOnCardClick: b = !0,
                            itemCounter: A,
                        } = e,
                        f = (0, r.useId)(),
                        j = (0, r.useRef)(String((0, s.A)())),
                        T = (0, r.useMemo)(() => {
                            if (v) return Array.from({ length: 5 }, (e, t) => (0, i.jsx)(_.k, { isActive: x }, t));
                            return null == g
                                ? void 0
                                : g.map((e, t) =>
                                      (0, i.jsx)(
                                          d.B,
                                          {
                                              objectType: o.DomainObjectType.Video,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == g ? void 0 : g.length,
                                              objectId: String(e.clipId),
                                              children: (0, i.jsx)(u.F, {
                                                  titleClassName: a,
                                                  artistLinkClassName: n,
                                                  clip: e,
                                                  withVideo: C,
                                                  artistIdWithoutLink: y,
                                                  viewUuid: j.current,
                                                  shouldOpenModalOnCardClick: b,
                                              }),
                                          },
                                          e.clipId,
                                      ),
                                  );
                        }, [a, n, v, x, y, C, g, b]);
                    return (0, i.jsx)(c.F, {
                        className: (0, l.$)(p().itemCounter, { [p()['itemCounter_'.concat(A)]]: A }, h),
                        ref: t,
                        itemClassName: (0, l.$)(p().item, p().important, m),
                        'aria-labelledby': f,
                        children: T,
                    });
                }),
                x = (0, r.forwardRef)((e, t) => (0, i.jsx)(v, { forwardRef: t, ...e }));
        },
        94058: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => A });
            var i = a(88800),
                l = a(65724),
                n = a(14231),
                r = a(84961),
                s = a(53548),
                o = a.t(s, 2),
                c = a(17392),
                d = a(88021),
                u = {
                    810: (e) => {
                        e.exports = o;
                    },
                },
                _ = {},
                m = {};
            ((() => {
                (Object.defineProperty(m, '__esModule', { value: !0 }), (m.useForwardRef = void 0));
                let e = (function e(t) {
                    var a = _[t];
                    if (void 0 !== a) return a.exports;
                    var i = (_[t] = { exports: {} });
                    return (u[t](i, i.exports, e), i.exports);
                })(810);
                m.useForwardRef = function (t, a) {
                    let i = (0, e.useRef)(a);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(i.current) : (t.current = i.current));
                        }, [t]),
                        i
                    );
                };
            })(),
                m.__esModule);
            var p = m.useForwardRef,
                v = a(32353),
                x = a(72288),
                h = a(31764),
                y = a(81192),
                C = a.n(y);
            let g = { [v.u.Desktop]: { start: 40, end: 20 }, [v.u.Mobile]: { start: 40, end: 40 } },
                b = (0, r.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: a,
                            forwardRef: r,
                            scrollPadding: o,
                            isCarouselBetweenArrows: u = !1,
                            controlsWrapperClassName: _,
                            buttonSize: m,
                            buttonVariant: y,
                            withSecondaryColor: b,
                        } = e,
                        {
                            settings: { isMobile: A },
                        } = (0, x.g)(),
                        f = p(r, null),
                        { shouldBackwardButtonBeDisabled: j, shouldForwardButtonBeDisabled: T, shouldHideControls: N } = (0, d.Y)(f),
                        [I, k] = (0, s.useMemo)(() => {
                            let e = (0, n.A)(g, o);
                            return [A ? e[v.u.Mobile].start : e[v.u.Desktop].start, A ? e[v.u.Mobile].end : e[v.u.Desktop].end];
                        }, [o, A]),
                        S = (0, s.useCallback)(
                            (e) => {
                                var t;
                                let a = null == (t = f.current) ? void 0 : t.children[e],
                                    { current: i } = f;
                                if (!i || !(a instanceof HTMLElement)) return;
                                if (a.offsetLeft - i.scrollLeft < I) {
                                    i.scrollLeft = a.offsetLeft - I;
                                    return;
                                }
                                let l = i.scrollLeft + i.clientWidth - a.offsetLeft - a.offsetWidth;
                                l < k && (i.scrollLeft -= l - k);
                            },
                            [f, k, I],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                var t, i;
                                (S(e), null == (t = (i = a.props).onTabChange) || t.call(i, e));
                            },
                            [a, S],
                        ),
                        E = (0, s.cloneElement)(a, { forwardRef: f, className: (0, l.$)(C().wrapper, a.props.className, C().carousel, C().important), onTabChange: L });
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(
                            C().root,
                            {
                                [C().root_carouselBetweenArrows]: u,
                                [C().root_arrowLeft_hidden]: j,
                                [C().root_arrowRight_hidden]: T,
                                [C().root_arrow_hidden]: j && T && N,
                            },
                            t,
                        ),
                        'data-test-id': c.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, i.jsx)('div', { className: C().list, children: E }),
                            !A &&
                                (0, i.jsx)(h.X, {
                                    className: (0, l.$)(C().buttons, _),
                                    carouselRef: f,
                                    backwardControlClassName: C().control,
                                    forwardControlClassName: C().control,
                                    withSecondaryColor: b,
                                    buttonSize: m,
                                    buttonVariant: y,
                                }),
                        ],
                    });
                }),
                A = (0, s.forwardRef)((e, t) => (0, i.jsx)(b, { forwardRef: t, ...e }));
        },
        94770: (e) => {
            e.exports = { writers: 'Lyrics_writers__xvrNp' };
        },
        95993: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => n });
            var i = a(58217),
                l = a(85587);
            let n = (e) => {
                let { track: t, callback: a, disclaimerRejectHandler: n } = e;
                return (0, i.l)({ entity: t, entityType: l.n.TRACK, callback: a, onReject: n, preventDefaultWhenSafe: !1 });
            };
        },
        96353: (e) => {
            e.exports = { growContainer: 'FamilyInviteStepInfo_growContainer__y0xmo', important: 'FamilyInviteStepInfo_important__YvkpI' };
        },
        96555: (e) => {
            e.exports = { root: 'PaywallOtherDesktop_root__c19Ht', topSection: 'PaywallOtherDesktop_topSection__d1CVV' };
        },
        96579: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { ProductLayoutClientOnlyModalsContent: () => dW }));
            var i,
                l,
                n,
                r,
                s,
                o,
                c,
                d,
                u,
                _,
                m,
                p,
                v,
                x,
                h = a(88800),
                y = a(84961),
                C = a(92716),
                g = a(53548),
                b = a.t(g, 2),
                A = a(29993),
                f = a(11372),
                j = a(44230),
                T = a(72288),
                N = a(97956),
                I = a(19922),
                k = a(54667),
                S = a(59918),
                L = a(30144),
                E = a(324),
                M = a(46511),
                P = a(97826),
                O = a(13012),
                w = a(57297),
                R = a(2218),
                D = a(77863),
                B = a(45383),
                F = a(30123),
                U = a(54965),
                z = a(47580),
                W = a(19049);
            async function V(e, t, a) {
                var i, l, n, r, s, o, c;
                if (!e || !t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let d = await (0, M.W)(a.locale),
                    u = (0, O.N)(null != (i = e.title) ? i : '');
                return a.isNotFound
                    ? { robots: { index: !1 } }
                    : {
                          title:
                              null != (l = a.disclaimerTitle)
                                  ? l
                                  : (function (e) {
                                        var t;
                                        let { trackMeta: a, messageFormatter: i } = e,
                                            l = (0, z.j)(null != (t = a.artists) ? t : []);
                                        return i({ id: 'metadata.track-title' }, { trackTitle: a.title, artistsNames: l });
                                    })({ trackMeta: e, messageFormatter: d }),
                          description: (function (e) {
                              var t, a;
                              let { trackMeta: i, albumMeta: l, messageFormatter: n } = e,
                                  r = (0, z.j)(null != (a = i.artists) ? a : []),
                                  s = Math.round((i.durationMs || 0) / F.k7);
                              return n(
                                  { id: 'metadata.track-description' },
                                  {
                                      type: (null == (t = i.type) ? void 0 : t.replace('-', '_')) || null,
                                      artistsNames: r || null,
                                      trackTitle: i.title,
                                      albumTitle: (null == l ? void 0 : l.title) || null,
                                      duration: (0, U.E)(s),
                                      year: (null == l ? void 0 : l.year) || null,
                                  },
                              );
                          })({ trackMeta: e, albumMeta: t, messageFormatter: d }),
                          openGraph: (0, w.i)({
                              ogTitle: u,
                              ogDescription: (function (e) {
                                  var t, a;
                                  let { trackMeta: i, albumMeta: l, messageFormatter: n } = e,
                                      r = (0, W.Y)((0, z.j)(null != (a = i.artists) ? a : []), 96, !1);
                                  return n(
                                      { id: 'metadata.track-og-description' },
                                      {
                                          type: (null == (t = i.type) ? void 0 : t.replace('-', '_')) || null,
                                          artistsNames: r || null,
                                          year: (null == l ? void 0 : l.year) || null,
                                      },
                                  );
                              })({ trackMeta: e, albumMeta: t, messageFormatter: d }),
                              fullUrl: null != (n = a.fullUrl) ? n : '',
                              locale: a.locale,
                              ogImage: null != (r = e.ogImage) ? r : '',
                              siteName: d({ id: 'metadata.yandex-music' }),
                          }),
                          twitter: (0, R.H)({ cardType: D.W.APP, title: u, url: a.url, appName: d({ id: 'metadata.yandex-music' }) }),
                          appLinks: (0, E.X)({
                              additional: { ...a, url: null != (s = a.url) ? s : '', fullUrl: null != (o = a.fullUrl) ? o : '', host: a.host },
                              appName: d({ id: 'metadata.yandex-music' }),
                          }),
                          other: { 'music:musician': (0, P.x)(null != (c = null == e ? void 0 : e.artists) ? c : [], a.host) },
                          alternates: (0, B.S)('/album/:albumId/track/:trackId', a.tld, { params: { albumId: t.id, trackId: e.id } }),
                      };
            }
            var K = a(29955),
                Y = a.n(K),
                H = a(2058),
                q = a(17392),
                Q = a(96817),
                $ = a(52300),
                G = a(5706),
                Z = a(95993),
                X = a(4086),
                J = a(41928),
                ee = a(72131),
                et = a(24586),
                ea = a(35412),
                ei = a(27533),
                el = a(49873);
            let en = (0, y.PA)((e) => {
                var t;
                let { user: a, track: i } = e,
                    l = (0, J.N)().get(X.V4),
                    n = (0, ee._)(l.webHost);
                return a.isAuthorized
                    ? null
                    : (0, h.jsx)(et.S, {
                          value: ((e) => {
                              var t, a;
                              let { host: i, track: l, album: n } = e,
                                  r = (0, el.m)(l.artists),
                                  s = { host: 'https://'.concat(i) },
                                  { href: o } = (null == n ? void 0 : n.id)
                                      ? (0, ea.no)('/album/:albumId/track/:trackId', { params: { albumId: n.id, trackId: l.id }, options: s })
                                      : (0, ea.no)('/track/:trackId', { params: { trackId: l.id }, options: s });
                              return {
                                  '@type': 'MusicRecording',
                                  name: l.title,
                                  url: o,
                                  thumbnailUrl: l.coverUri ? (0, ea.lU)(l.coverUri, 'orig') : void 0,
                                  duration: (0, ei.F)(null != (t = l.durationMs) ? t : 0),
                                  genre: null != (a = l.genre) ? a : void 0,
                                  datePublished: l.pubDate,
                                  description: l.shortDescription,
                                  byArtist: r
                                      ? { '@type': 'MusicGroup', name: r.name, url: (0, ea.no)('/artist/:artistId', { params: { artistId: r.id }, options: s }).href }
                                      : void 0,
                                  inAlbum: n
                                      ? {
                                            '@type': 'MusicAlbum',
                                            name: n.title,
                                            url: (0, ea.no)('/album/:albumId', { params: { albumId: n.id }, options: s }).href,
                                            thumbnailUrl: n.coverUri ? (0, ea.lU)(n.coverUri, 'orig') : void 0,
                                        }
                                      : void 0,
                                  potentialAction: {
                                      '@type': 'ListenAction',
                                      expectsAcceptanceOf: { '@type': 'Offer', category: 'free', target: { '@type': 'EntryPoint', actionPlatform: o } },
                                  },
                              };
                          })({ host: n, track: i, album: null != (t = i.mainAlbum) ? t : void 0 }),
                      });
            });
            var er = a(29595),
                es = a(74965),
                eo = a(66943),
                ec = a(29504),
                ed = a(61691),
                eu = a(38514),
                e_ = a(34232),
                em = a(18486),
                ep = a(15426),
                ev = a.n(ep),
                ex = a(19994),
                eh = a(27344),
                ey = a.n(eh);
            let eC = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, h.jsxs)('div', {
                        className: ey().root,
                        children: [
                            (0, h.jsx)(ex.W, { className: ey().title, isActive: t }),
                            (0, h.jsxs)('div', {
                                className: ey().coverBlock,
                                children: [
                                    (0, h.jsx)(ex.W, { className: ey().cover, isActive: t }),
                                    (0, h.jsxs)('div', {
                                        className: ey().linkBlock,
                                        children: [
                                            (0, h.jsx)(ex.W, { className: ey().link, isActive: t }),
                                            (0, h.jsx)(ex.W, { className: ey().description, isActive: t }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                eg = (0, y.PA)((e) => {
                    var t;
                    let { onModalClose: a } = e,
                        { formatMessage: i } = (0, H.A)(),
                        {
                            settings: { isMobile: l },
                            track: n,
                            fullscreenPlayer: r,
                        } = (0, T.g)(),
                        s = (0, A.c)(() => {
                            (r.modal.isOpened && r.modal.close(), l && a());
                        }),
                        o = null == (t = n.meta) ? void 0 : t.mainAlbum;
                    if (n.isShimmerVisible) return (0, h.jsx)(eC, { isShimmerActive: n.isLoading });
                    if (!o) return null;
                    let c = ((e, t, a) =>
                            a(
                                e === ed._.AUDIOBOOK || e === ed._.FAIRY_TALE
                                    ? { id: 'entity-names.number-of-chapters' }
                                    : e === ed._.PODCAST
                                      ? { id: 'entity-names.number-of-episodes' }
                                      : { id: 'entity-names.number-of-tracks' },
                                { counter: t },
                            ))(o.type, o.trackCount, i),
                        d = ((e) => (e.title && e.isAvailable ? (0, eu.L)(e.id) : null))(o);
                    return (0, h.jsxs)('div', {
                        className: ev().root,
                        'data-test-id': q.Xk.track.TRACK_PAGE_ALBUM,
                        children: [
                            (0, h.jsx)(ec.DZ, {
                                variant: 'h2',
                                size: 'm',
                                lineClamp: 1,
                                className: ev().title,
                                'data-test-id': q.Xk.track.TRACK_PAGE_ALBUM_TITLE,
                                children: i({ id: 'track-modal.album-heading' }, { type: (0, e_.y)(o.type) }),
                            }),
                            (0, h.jsx)(em.T, {
                                title: null == o ? void 0 : o.title,
                                coverUrl: null == o ? void 0 : o.coverUri,
                                description: c,
                                viewAllActionLink: null == d ? void 0 : d.href,
                                onViewAllAction: s,
                                titleLineClamp: 1,
                                available: o.isAvailable,
                                titleSize: 'xs',
                                withCover: !0,
                                withDescription: !!c,
                            }),
                        ],
                    });
                });
            var eb = a(78275),
                eA = a(68211),
                ef = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (l && (l += ' '), (l += i));
                                            else for (a in t) t[a] && (l && (l += ' '), (l += a));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    2850: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            contentContainer: 'JjlbHZ4FaP9EAcR_1DxF',
                            contentContainer_block: 'iOlzvyUREgDkthkrx7Sf',
                            flexIcon: 'WsKeF73pWotx9W1tWdYY',
                            root: 'cpeagBA1_PblpJn8Xgtv',
                            root_withoutBorder: 'qU2apWBO1yyEK0lZ3lPO',
                            root_radius_xs: 'MmZbSs387gu2qrJ1lDWd',
                            root_radius_s: 'mlcrraysn7mW6xrBXSBF',
                            root_radius_m: 'dgV08FKVLZKFsucuiryn',
                            root_radius_l: 'S97_5dtzhpxo_amtfYRg',
                            root_radius_xl: 'nNBJnDHRlyLTniWosJhk',
                            root_radius_xxxl: 'zIMibMuH7wcqUoW7KH1B',
                            root_radius_round: 'uwk3hfWzB2VT7kE13SQk',
                            root_size: 'IlG7b1K0AD7E7AMx6F5p',
                            root_size_default: 'C_QGmfTz6UFX93vfPt6Z',
                            root_size_xxxs: 'eQt33MLDiQ6DRSuLaYEp',
                            root_size_xxs: 'oR11LfCBVqMbUJiAgknd',
                            root_size_xs: 'j1jXIVckFgZECecFzZMe',
                            root_size_s: 'WtFdWDF44egSVM_YiMUX',
                            root_size_m: 'Y2uqxoU7xa_AZ8FUCVOW',
                            root_size_l: 'SGYcNjvjmMsXeEVGUV2Z',
                            root_icon_left: 'kc5CjvU5hT9KEj0iTt3C',
                            root_icon_right: 'et24Jf7pT_X9Fvc7TznR',
                            root_primary: 'fXlFz1qMkliFUWOkHo8T',
                            root_primary_default: '_eTRQi5ADZCUvUKMZqJU',
                            ripple: 'spMT3NcRD9Yb0ntNaNct',
                            root_primary_outline: 'fCUSh2B0Ye9kEvceE8zc',
                            root_primary_text: 'qlPp6CSQQEMVZPqtqLiQ',
                            root_primary_withHover: 'KZF6_4K1p_Y_GMIAxaAn',
                            root_primary_withHover_default: 'rWukOKAJh5Ga7JuIp62L',
                            root_primary_withHover_outline: 'fdwWCJKgUqml5wNqrRcN',
                            root_primary_withHover_text: 'IgYbZLnYjW0nMahgpkus',
                            root_secondary: '_T4p_w41oaq6L4sztSdw',
                            root_secondary_default: 'iJVAJMgccD4vj4E4o068',
                            root_secondary_outline: 'pnM3iSP9keZOELI2oohr',
                            root_secondary_text: 'UDMYhpDjiAFT3xUx268O',
                            root_secondary_withHover: 'qUbrkhZIOVrvM0roV1QF',
                            root_secondary_withHover_default: 'nHWc2sto1C6Gm0Dpw_l0',
                            root_secondary_withHover_outline: 'i5WuBm5mfG0mflk_1jH_',
                            root_secondary_withHover_text: 'HbaqudSqu7Q3mv3zMPGr',
                            root_plus: 'ixLRsIJ2FvXO2k04n_QY',
                            root_plus_default: 'yRHwHzEGfDgRXGzYJqw2',
                            root_plus_outline: 'e777irPFmyQFFrURLF_U',
                            root_plus_text: 'vRqDhvmt3gt8TFp45_Zw',
                            root_plus_withHover: 'TZif6q3I2RwBEYXwK_iA',
                            root_plus_withHover_default: 'k3DhvmzpnM_Fb9oFdE4q',
                            root_plus_withHover_outline: 'RiDWYwGIxqbrUPR699DM',
                            root_plus_withHover_text: 'hC_mMCzWjkTn2j9xZzGc',
                            root_accent: 'jqD2jMT6n7F0WKyqwMsn',
                            root_accent_default: 'bDp0r9MtoYECZ8ObMoCh',
                            root_accent_outline: 'rXNyGp8NBAw2MUjACZNj',
                            root_accent_text: 'hmV4ERaXWAJc4uPLZL30',
                            root_accent_withHover: 'uKuxXu1N4TP5cWaEK5Ke',
                            root_accent_withHover_default: 't_hequUaUgAMhFuxizLb',
                            root_accent_withHover_outline: 'Oy9sPFTxNTo1_E29U4aF',
                            root_accent_withHover_text: 'LcKRSd3DLoh7k60Oqox8',
                            root_withActiveSpinner: 'nAGvO87rLs15SJgft6Hh',
                            block: 'BbCxxIjBGupN28bq2lSP',
                            icon: 'J9wTKytjOWG73QMoN5WP',
                            icon_position_left: 'elJfazUBui03YWZgHCbW',
                            icon_position_right: 'RBoEbyJKP5rEtLsXM1ji',
                            icon_withButtonSize: 'cE17_kCWJgx8kzQEkeVr',
                            spinnerContainer: 'STbBDGqYjUEcLuNvhu9w',
                        };
                    },
                    1733: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'BnN6sQIg6NahNBun6fkP',
                            fade: 'MM8MKXCw0gMkVvq7C1YS',
                            fade_active: 'MsLY_qiKofQrwKAr98EC',
                            button: 'Dp6n_Y0cfUyPQT1Z6uIm',
                            text: 'bfmUuyonXAK7HKYtDzUK',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var n in ((i = {}), t)) 'key' !== n && (i[n] = t[n]);
                            else i = t;
                            return { $$typeof: a, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    792: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let i = a(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, i.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, a = Array(e), i = 0; i < e; i++) a[i] = arguments[i];
                                    return t.current.callback(...a);
                                },
                                callback: e,
                            });
                            return (
                                (0, i.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    588: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useResize = void 0));
                        let i = a(810),
                            l = a(1848);
                        t.useResize = (e, t) => {
                            (0, i.useEffect)(() => {
                                let a = (0, l.getElementFromRefOrElement)(t);
                                if (null === a) return;
                                let i = null != a ? a : document.documentElement,
                                    n = new ResizeObserver(e);
                                return (n.observe(i), () => n.disconnect());
                            }, [t, e]);
                        };
                    },
                    2111: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useTruncate = void 0));
                        let i = a(810),
                            l = a(588),
                            n = a(792);
                        t.useTruncate = function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'vertical',
                                [a, r] = (0, i.useState)(0),
                                [s, o] = (0, i.useState)(!1);
                            (0, i.useEffect)(() => {
                                var i;
                                let l = null == (i = e.current) ? void 0 : i.offsetHeight;
                                a || !l || ('vertical' === t && r(l));
                            }, [a, t, e]);
                            let c = (0, n.useCallbackRef)(() => {
                                let i = e.current;
                                i && ('horizontal' === t && o(i.scrollWidth > i.clientWidth), 'vertical' === t && o(i.offsetHeight > 0 && a < i.scrollHeight));
                            });
                            return ((0, l.useResize)(c, e), { isTruncated: s });
                        };
                    },
                    6384: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
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
                            }));
                    },
                    2633: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, a) {
                                let i = null != a ? a : e.currentTarget,
                                    l = document.createElement('span'),
                                    n = Math.max(i.clientWidth, i.clientHeight),
                                    r = n / 2,
                                    s = i.getBoundingClientRect(),
                                    o = 0 === e.clientX ? Math.round(s.width / 2) : e.clientX - s.left,
                                    c = 0 === e.clientY ? Math.round(s.height / 2) : e.clientY - s.top;
                                ((l.style.width = ''.concat(n, 'px')),
                                    (l.style.height = ''.concat(n, 'px')),
                                    (l.style.left = 0 === e.clientX ? '0px' : ''.concat(o - r, 'px')),
                                    (l.style.top = ''.concat(c - r, 'px')),
                                    l.classList.add(t));
                                let d = i.getElementsByClassName(t)[0];
                                (d && d.remove(), i.insertBefore(l, i.firstChild));
                            }));
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    1888: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getVibePaletteColors =
                                t.getVibeColorBucketSelection =
                                t.getVibePaletteByBucketName =
                                t.FALLBACK_PALETTE =
                                t.FALLBACK_NAME =
                                t.SECONDARY_GRADIENT_STOPS =
                                t.PRIMARY_GRADIENT_STOPS =
                                t.PRIMARY_DARK_IDLE_STOPS =
                                    void 0));
                        let i = a(2660),
                            l = a(6384);
                        ((t.PRIMARY_DARK_IDLE_STOPS = Array.from({ length: 16 }, () => '#000000')),
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
                            }));
                        let n = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        ((t.getVibePaletteByBucketName = (e) => {
                            let a = (0, l.findColorBucketByName)(e);
                            return a ? n(a) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, i.hexToHsl)(e),
                                    a = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === a ? (0, l.findColorBucketByHue)(t.h) : (0, l.findColorBucketByLightness)(t.l), hsl: t, mode: a };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: a } = (0, t.getVibeColorBucketSelection)(e);
                                return a ? n(a) : t.FALLBACK_PALETTE;
                            }));
                    },
                    6882: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.getVibePaletteColors = t.getElementFromRefOrElement = t.createRipple = void 0));
                        var i = a(2633);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return i.createRipple;
                            },
                        });
                        var l = a(1848);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return l.getElementFromRefOrElement;
                            },
                        });
                        var n = a(1888);
                        Object.defineProperty(t, 'getVibePaletteColors', {
                            enumerable: !0,
                            get: function () {
                                return n.getVibePaletteColors;
                            },
                        });
                    },
                    7291: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0));
                        let l = a(4377),
                            n = a(810),
                            r = a(5881),
                            s = a(6882),
                            o = i(a(2850)),
                            c = (e) => {
                                let {
                                        forwardRef: t,
                                        isBlock: a,
                                        iconPosition: i = 'left',
                                        children: c,
                                        className: d,
                                        color: u = 'secondary',
                                        flexIcon: _,
                                        icon: m,
                                        spinner: p,
                                        role: v,
                                        onClick: x,
                                        radius: h = 'm',
                                        size: y,
                                        type: C = 'button',
                                        variant: g = 'default',
                                        withRipple: b = !0,
                                        withHover: A = !0,
                                        withBorder: f = !1,
                                        disabled: j,
                                        focusableWhenDisabled: T,
                                        'aria-disabled': N,
                                        iconClassName: I,
                                        contentContainerClassName: k,
                                        ...S
                                    } = e,
                                    L = (0, n.useId)(),
                                    E = !n.Children.toArray(c).filter(Boolean).length,
                                    M = 'left' === i,
                                    P = null,
                                    O = (0, n.isValidElement)(p);
                                if (m) {
                                    var w, R;
                                    P = (0, n.cloneElement)(m, {
                                        className: (0, r.clsx)(
                                            o.default.icon,
                                            {
                                                [o.default['icon_position_'.concat(i)]]: i && !E,
                                                [o.default.icon_withButtonSize]: !(null == (w = m.props) ? void 0 : w.size),
                                            },
                                            null == (R = m.props) ? void 0 : R.className,
                                            I,
                                        ),
                                        key: L,
                                    });
                                }
                                let D = (0, n.useMemo)(() => (O ? (0, l.jsx)('div', { className: o.default.spinnerContainer, children: p }) : null), [O, p]),
                                    B = (0, n.useCallback)(
                                        (e) => {
                                            if (j) {
                                                (e.preventDefault(), e.stopPropagation());
                                                return;
                                            }
                                            O || (b && (0, s.createRipple)(e, o.default.ripple), null == x || x(e));
                                        },
                                        [j, O, x, b],
                                    );
                                return (0, l.jsx)('button', {
                                    ref: t,
                                    className: (0, r.clsx)(
                                        o.default.root,
                                        o.default['root_'.concat(u, '_').concat(g)],
                                        o.default['root_radius_'.concat(h)],
                                        o.default.root_size,
                                        {
                                            [o.default['root_'.concat(u, '_withHover_').concat(g)]]: A && !j && !O,
                                            [o.default['root_size_'.concat(y)]]: y,
                                            [o.default.root_withoutBorder]: !f,
                                            [o.default.root_withActiveSpinner]: O,
                                            [o.default.block]: a,
                                            [o.default.flexIcon]: _,
                                            [o.default.iconOnly]: E,
                                            [o.default.root_icon_left]: m && !E && M,
                                            [o.default.root_icon_right]: m && !E && !M,
                                        },
                                        d,
                                    ),
                                    type: C,
                                    role: v,
                                    onClick: B,
                                    ...S,
                                    disabled: j && !T,
                                    'aria-disabled': (j && T) || N,
                                    'data-disabled': j || void 0,
                                    'aria-live': O ? 'polite' : 'off',
                                    'aria-busy': O,
                                    children:
                                        m || O
                                            ? (0, l.jsxs)('span', {
                                                  className: (0, r.clsx)(o.default.contentContainer, { [o.default.contentContainer_block]: a }, k),
                                                  children: [m && M && P, !E && c, m && !M && P, D],
                                              })
                                            : c,
                                });
                            };
                        t.Button = (0, n.forwardRef)((e, t) => (0, l.jsx)(c, { forwardRef: t, ...e }));
                    },
                    7642: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CollapsableText = void 0));
                        let l = a(4377),
                            n = a(5881),
                            r = a(810),
                            s = a(2111),
                            o = a(7291),
                            c = i(a(1733));
                        t.CollapsableText = (e) => {
                            var t;
                            let {
                                    className: a,
                                    children: i,
                                    lineClamp: d,
                                    moreText: u,
                                    lessText: _,
                                    buttonClassName: m,
                                    buttonProps: p,
                                    withFade: v,
                                    initialOpen: x = !1,
                                    open: h,
                                    onOpenChange: y,
                                    ...C
                                } = e,
                                [g, b] = (0, r.useState)(x),
                                A = (0, r.useRef)(null),
                                { isTruncated: f } = (0, s.useTruncate)(A),
                                j = null != h ? h : g,
                                T = null != y ? y : b,
                                N = (0, r.cloneElement)(i, {
                                    ref: A,
                                    lineClamp: (!j && d) || void 0,
                                    className: (0, n.clsx)(null == (t = i.props) ? void 0 : t.className, c.default.text),
                                }),
                                I = (0, r.useMemo)(
                                    () => (v && f ? (0, l.jsx)('div', { className: (0, n.clsx)(c.default.fade, { [c.default.fade_active]: !j }), children: N }) : N),
                                    [f, j, N, v],
                                ),
                                k = (0, r.useCallback)(() => {
                                    T(!j);
                                }, [j, T]),
                                S = j ? _ : u;
                            return (0, l.jsxs)('div', {
                                className: (0, n.clsx)(c.default.root, a),
                                ...C,
                                children: [
                                    I,
                                    f &&
                                        S &&
                                        (0, l.jsx)(o.Button, {
                                            ...p,
                                            variant: 'text',
                                            withRipple: !1,
                                            onClick: k,
                                            className: (0, n.clsx)(c.default.button, m),
                                            color: 'primary',
                                            children: S,
                                        }),
                                ],
                            });
                        };
                    },
                    2660: (e) => {
                        e.exports = eA;
                    },
                    810: (e) => {
                        e.exports = b;
                    },
                },
                ej = {};
            function eT(e) {
                var t = ej[e];
                if (void 0 !== t) return t.exports;
                var a = (ej[e] = { exports: {} });
                return (ef[e].call(a.exports, a, a.exports, eT), a.exports);
            }
            ((eT.d = (e, t) => {
                for (var a in t) eT.o(t, a) && !eT.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (eT.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (eT.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var eN = {};
            (() => {
                (Object.defineProperty(eN, 'X', { value: !0 }), (eN.f = void 0));
                var e = eT(7642);
                Object.defineProperty(eN, 'f', {
                    enumerable: !0,
                    get: function () {
                        return e.CollapsableText;
                    },
                });
            })();
            var eI = eN.f;
            eN.X;
            var ek = a(85614),
                eS = a(94770),
                eL = a.n(eS);
            let eE = (e) => {
                let { lyrics: t, authors: a, source: i, isShimmerVisible: l, isShimmerActive: n } = e,
                    { formatMessage: r } = (0, H.A)();
                return l
                    ? (0, h.jsx)(ek.q, { count: 25, isActive: n })
                    : (0, h.jsxs)(h.Fragment, {
                          children: [
                              t,
                              (0, h.jsxs)('div', {
                                  className: eL().writers,
                                  children: [
                                      a.length > 0 &&
                                          (0, h.jsx)(ec.HL, {
                                              variant: 'div',
                                              size: 'l',
                                              weight: 'medium',
                                              'data-test-id': q.e8.content.TRACK_LYRICS_AUTHORS,
                                              children: r({ id: 'entity-names.authors' }, { authors: a }),
                                          }),
                                      i &&
                                          (0, h.jsx)(ec.HL, {
                                              variant: 'div',
                                              size: 'l',
                                              weight: 'medium',
                                              'data-test-id': q.e8.content.TRACK_LYRICS_SOURCE,
                                              children: r({ id: 'entity-names.source' }, { source: i }),
                                          }),
                                  ],
                              }),
                          ],
                      });
            };
            var eM = a(776),
                eP = a.n(eM),
                eO = a(65724),
                ew = a(71335),
                eR = a.n(ew);
            let eD = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, h.jsxs)('div', {
                        className: eR().root,
                        children: [
                            (0, h.jsx)(ex.W, { className: eR().title, isActive: t }),
                            (0, h.jsx)(ek.q, { className: (0, eO.$)(eR().lyrics, eR().important), count: 4, isActive: t }),
                            (0, h.jsx)(ex.W, { className: eR().button, isActive: t }),
                        ],
                    });
                },
                eB = (0, y.PA)((e) => {
                    var t, a, i, l;
                    let { track: n } = e,
                        { formatMessage: r } = (0, H.A)(),
                        { notify: s } = (0, es.l)(),
                        { track: o, trackLyrics: c } = (0, T.g)(),
                        { state: d, setState: u } = (0, eb.e)(!1),
                        _ = c.currentTrackId !== (null == (t = o.meta) ? void 0 : t.id),
                        // for PulseSync: BEGIN track identity and availability for plain-text lyrics fallback
                        m = o.isResolved && (null == (a = o.meta) ? void 0 : a.isLyricsAvailable),
                        trackId = null == n ? void 0 : n.id,
                        isAvailable = null == n ? void 0 : n.isAvailable,
                        isLyricsAvailable = null == n ? void 0 : n.isLyricsAvailable;
                        // for PulseSync: END track identity and availability for plain-text lyrics fallback
                    ((0, g.useEffect)(() => {
                        var e;
                        // for PulseSync: BEGIN load native plain-text lyrics for resolved track metadata
                        (null == (e = o.meta) ? void 0 : e.id) && m && _ && (c.setTrack(o.meta), c.getLyrics(o.meta.id));
                        // for PulseSync: END load native plain-text lyrics for resolved track metadata
                    }, [_, m, c, null == (i = o.meta) ? void 0 : i.id]),
                        // for PulseSync: BEGIN load fallback plain-text lyrics when native lyrics are unavailable
                        (0, g.useEffect)(() => {
                            const currentTrackId = c.currentTrackId == null ? null : String(c.currentTrackId);
                            const requestedTrackId = trackId == null ? null : String(trackId);
                            const hasLyrics = Boolean(c.lyrics && String(c.lyrics).trim().length > 0);
                            const hasLyricsForRequestedTrack =
                                hasLyrics && (!c.currentTrackId || (requestedTrackId && currentTrackId && requestedTrackId === currentTrackId));
                            if (
                                !trackId ||
                                isAvailable === false ||
                                isLyricsAvailable ||
                                c.isLoading ||
                                hasLyricsForRequestedTrack ||
                                (requestedTrackId && currentTrackId && requestedTrackId === currentTrackId && c.isRejected)
                            )
                                return;
                            c.setTrack(n);
                            c.getLyrics(trackId);
                        }, [trackId, isAvailable, isLyricsAvailable, c.currentTrackId, c.isRejected, c.isLoading, c.lyrics, c, n]),
                        // for PulseSync: END load fallback plain-text lyrics when native lyrics are unavailable
                        c.shouldShowErrorNotification &&
                            (s(
                                (0, h.jsx)(eo.h, {
                                    error: r({
                                        id: 'error-messages.error-during-action',
                                    }),
                                }),
                                {
                                    containerId: er.u.ERROR,
                                },
                            ),
                            c.resetShouldShowError()));
                    let p = (0, A.c)((e) => {
                        (u(e),
                            e &&
                                n &&
                                c.sendViews({
                                    trackId: n.id,
                                    albumId: n.albumId,
                                }));
                    });
                    // for PulseSync: BEGIN show loading state only until plain-text lyrics are available
                    const hasLyrics = Boolean(c.lyrics && String(c.lyrics).trim().length > 0);
                    const shouldShowShimmer = c.isShimmerVisible || o.isShimmerVisible || (c.isLoading && !hasLyrics);
                    return shouldShowShimmer
                        ? (0, h.jsx)(eD, {
                              isShimmerActive: c.isLoading || o.isLoading,
                          })
                        : !hasLyrics
                          ? null
                          : (0, h.jsxs)('div', {
                                className: eP().root,
                                'data-test-id': q.Xk.track.TRACK_PAGE_LYRICS,
                                children: [
                                    (0, h.jsx)(ec.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        lineClamp: 1,
                                        className: eP().title,
                                        'data-test-id': q.e8.content.TRACK_LYRICS_TITLE,
                                        children: r({
                                            id: 'entity-names.text',
                                        }),
                                    }),
                                    (0, h.jsx)(eI, {
                                        moreText: r({
                                            id: 'track-modal.read-more',
                                        }),
                                        buttonClassName: eP().button,
                                        buttonProps: {
                                            'data-test-id': q.e8.content.TRACK_LYRICS_TITLE_READ_MORE_BUTTON,
                                        },
                                        open: d,
                                        onOpenChange: p,
                                        lineClamp: 4,
                                        withFade: !0,
                                        children: (0, h.jsx)(
                                            ec.HL,
                                            {
                                                variant: 'div',
                                                className: eP().lyrics,
                                                size: 'l',
                                                weight: 'medium',
                                                'data-test-id': q.e8.content.TRACK_LYRICS_TEXT,
                                                children: (0, h.jsx)(eE, {
                                                    lyrics: c.lyrics,
                                                    authors: c.writersNames,
                                                    source: null == (l = c.major) ? void 0 : l.prettyName,
                                                    isShimmerVisible: c.isShimmerVisible,
                                                    isShimmerActive: c.isLoading,
                                                }),
                                            },
                                            null == n ? void 0 : n.getKey('lyrics'),
                                        ),
                                    }),
                                ],
                            });
                    // for PulseSync: END show loading state only until plain-text lyrics are available
                });
            var eF = a(18593),
                eU = a(40512),
                ez = a(10829),
                eW = a(84384),
                eV = a(98644),
                eK = a(67984),
                eY = a(93015),
                eH = a(19722),
                eq = a.n(eH);
            let eQ = (0, y.PA)((e) => {
                let { tracks: t, contextId: a, isShimmerVisible: i, isShimmerActive: l, autoflowSeeds: n, shouldResetCarouselScroll: r } = e,
                    { formatMessage: s } = (0, H.A)(),
                    { from: o } = (0, eW.f)({ contextId: a, contextType: eF.K.Various }),
                    c = (0, A.c)((e, a) => ({
                        contextData: { type: eF.K.Various, meta: { id: e.entityId }, from: o, overrideAutoflowSeeds: n },
                        queueParams: { index: a },
                        loadContextMeta: !1,
                        entitiesData: t.map(eU.$),
                    }));
                return (0, h.jsx)(eK.$, {
                    className: eq().root,
                    shimmer: (0, h.jsx)(eY.D, { variant: eV.X.PLAYLIST, isActive: l }),
                    maxColumnsCount: eK.D.TWO,
                    itemsCountPerColumn: 4,
                    blockHeaderTitle: s({ id: 'track-modal.similar-tracks' }),
                    blockHeaderHeadingVariant: 'h2',
                    isShimmerVisible: i,
                    isShimmerActive: l,
                    carouselItemClassName: (0, eO.$)(eq().item, eq().important),
                    blockHeaderClassName: eq().title,
                    carouselClassName: eq().tracksContainer,
                    shouldResetCarouselScroll: r,
                    'data-test-id': q.Xk.track.TRACK_PAGE_SIMILAR_TRACKS,
                    children: t.map((e, t) => (0, h.jsx)(ez.K, { track: e, playContextParams: c(e, t), withDislike: !1, withTrailer: !1 }, e.id)),
                });
            });
            var e$ = a(61097),
                eG = a(13946),
                eZ = a(90224),
                eX = a(88969),
                eJ = a(99409),
                e0 = a(1829),
                e1 = a(42174),
                e2 = a(5407),
                e4 = a(76675),
                e8 = a(9618),
                e3 = a(4795),
                e5 = a(39079),
                e6 = a(49738),
                e9 = a(16704),
                e7 = a(72858),
                te = a.n(e7);
            let tt = (e) => {
                let { className: t, text: a, analyticsNavigatedCallback: i } = e,
                    {
                        settings: { isMobile: l },
                        paywall: n,
                    } = (0, T.g)(),
                    r = (0, A.c)((e) => {
                        (n.openModal(), e.stopPropagation(), null == i || i());
                    });
                return l
                    ? (0, h.jsx)(Q.$, {
                          onClick: r,
                          className: (0, eO.$)(te().root, t),
                          color: 'plus',
                          size: 'l',
                          radius: 'xxxl',
                          children: (0, h.jsx)(ec.HL, { className: te().title, weight: 'bold', variant: 'div', size: 'l', children: a }),
                      })
                    : (0, h.jsx)(Q.$, {
                          onClick: r,
                          className: (0, eO.$)(te().root, t),
                          color: 'plus',
                          size: 'm',
                          radius: 'xxxl',
                          'data-test-id': q.S7.PLUS_PAYWALL_BUTTON,
                          children: (0, h.jsx)(ec.HL, { className: te().title, weight: 'bold', variant: 'div', size: 'm', children: a }),
                      });
            };
            var ta = a(78793),
                ti = a(54577),
                tl = a(90780),
                tn = a(37436),
                tr = a(12816),
                ts = a(65523),
                to = a(25196),
                tc = a.n(to);
            let td = (0, y.PA)((e) => {
                var t, a, i;
                let { track: l } = e,
                    { shouldShowBuySubscriptionModal: n, showBuySubscriptionModal: r } = (0, e8.q)(),
                    { from: s, utmLink: o } = (0, eW.f)({ contextId: l.id, contextType: eF.K.Various }),
                    {
                        user: c,
                        settings: { isMobile: d },
                        track: { shouldSendEventOnPlusButtonShowed: u, setShouldSendEventOnPlusButtonShowed: _, isOpened: m },
                        albumCPA: { isPlusCPAPlayerBarEnabled: p },
                        paywall: { modal: v },
                    } = (0, T.g)(),
                    x = (0, e4.b)(),
                    y = ((e) => {
                        let t = (0, tl.st)(),
                            a = (0, ts.U)(),
                            { hash: i } = (0, tl.gf)();
                        return (0, A.c)(() => {
                            if (!t) return;
                            let l = {
                                    hash: i,
                                    pageId: tn.W[tr._Q.TRACK_SCREEN],
                                    mainObjectType: C.DomainObjectType.Track,
                                    mainObjectId: e.objectId,
                                    entityId: 'buy_subscription_button',
                                    pageStyle: C.PageStyles.Sheet,
                                    pagePlacement: C.PagePlacements.Right,
                                    from: tn.W[tr._Q.TRACK_SCREEN],
                                    to: tn.W[tr._Q.PAYWALL],
                                    tabId: '',
                                    tabPos: 0,
                                },
                                n = (0, ta.F)({ params: l, logger: a, context: 'useSendEventOnTrackModalPlusButtonNavigated' });
                            n && (0, ti.QS)(t.evgenInstance, n);
                        });
                    })({ objectId: l.id }),
                    b = ((e) => {
                        let t = (0, tl.st)(),
                            a = (0, ts.U)(),
                            { hash: i } = (0, tl.gf)();
                        return (0, A.c)(() => {
                            if (!t) return;
                            let l = {
                                    hash: i,
                                    pageId: tn.W[tr._Q.TRACK_SCREEN],
                                    mainObjectType: C.DomainObjectType.Track,
                                    mainObjectId: e.objectId,
                                    entityId: 'buy_subscription_button',
                                    pageStyle: C.PageStyles.Sheet,
                                    pagePlacement: C.PagePlacements.Right,
                                    tabId: '',
                                    tabPos: 0,
                                },
                                n = (0, ta.F)({ params: l, logger: a, context: 'useSendEventOnTrackModalPlusButtonShowed' });
                            n && (0, ti.Pf)(t.evgenInstance, n);
                        });
                    })({ objectId: l.id }),
                    f = (0, e2.P)(),
                    j = !c.hasPlus && l.isTrackMusic && ((l.isAvailable && !l.hasModalAccess) || (null == (t = l.mainAlbum) ? void 0 : t.isAvailableOnlyForPlus)),
                    N = (0, e3.N)(),
                    I = p(null == (a = l.mainAlbum) ? void 0 : a.id, null == (i = l.mainAlbum) ? void 0 : i.isNonMusic),
                    k = l.isAvailable && N && !I,
                    { iconSize: S, controlSize: L } = (0, eJ.q)(d),
                    [E, M] = (0, g.useState)(!1),
                    { isPlaying: P, togglePlay: O } = (0, e5.D)({
                        playContextParams: { contextData: { type: eF.K.Various, meta: { id: l.entityId }, from: s, utmLink: o }, loadContextMeta: !0 },
                        entityId: l.entityId,
                    }),
                    w = (0, Z.w)({ track: l, callback: O }),
                    R = (0, A.c)(() => {
                        if (!f()) {
                            if (n && !I) return void r();
                            if (k) return void v.open();
                            (w(), x(!P));
                        }
                    }),
                    D = (0, e1.K)(l),
                    B = (0, A.c)((e) => {
                        e.stopPropagation();
                    });
                (0, g.useEffect)(() => {
                    u && j && m && (b(), _(!1));
                }, [b, j, u, _, m]);
                let F = (0, g.useMemo)(() => {
                        if (j) return (0, h.jsx)(tt, { text: (0, h.jsx)(eX.A, { id: 'payment.high-quality-offer-button-title' }), analyticsNavigatedCallback: y });
                    }, [j, y]),
                    U = j ? 'secondary' : 'primary';
                return (0, h.jsxs)('div', {
                    className: tc().root,
                    children: [
                        F,
                        (0, h.jsxs)('div', {
                            className: tc().controlsContainer,
                            children: [
                                (0, h.jsx)(e9.D, {
                                    className: (0, eO.$)({ [tc().disabledButtonByDisclaimer]: !l.isAvailable && l.hasModalAccess }),
                                    withRipple: l.isAvailable,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: L,
                                    color: U,
                                    iconSize: S,
                                    isPlaying: P,
                                    onClick: R,
                                    disabled: !l.isAvailable && !l.hasModalAccess,
                                    children: !d && (0, h.jsx)(eX.A, { id: 'player-actions.listen' }),
                                }),
                                (0, h.jsx)(e6.c, {
                                    isLiked: l.isLiked,
                                    onClick: D,
                                    variant: 'default',
                                    size: L,
                                    iconSize: S,
                                    withRipple: !d,
                                    disabled: !l.isAvailable || !c.isAuthorized,
                                }),
                                l.isAvailable &&
                                    (0, h.jsx)(e0._, {
                                        track: l,
                                        open: E,
                                        onOpenChange: M,
                                        size: L,
                                        icon: (0, h.jsx)($.I, { variant: 'more', size: S }),
                                        className: (0, eO.$)(tc().menuButton, { [tc().menuButton_active]: E }),
                                        wrapperClassName: tc().menuWrapper,
                                        onClick: B,
                                        withTrailer: !1,
                                        'data-test-id': q.e8.pageHeader.TRACK_HEADER_CONTEXT_MENU_BUTTON,
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var tu = a(91086),
                t_ = a.n(tu),
                tm = a(43557),
                tp = a.n(tm);
            let tv = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, h.jsxs)('div', {
                        className: tp().root,
                        children: [
                            (0, h.jsx)(ex.W, { className: tp().entityName, isActive: t }),
                            (0, h.jsx)(ex.W, { className: tp().title, isActive: t }),
                            (0, h.jsx)(ek.q, {
                                className: (0, eO.$)(tp().artists, tp().important),
                                shimmerClassName: tp().artist,
                                count: 3,
                                minWidth: 10,
                                maxWidth: 30,
                                isActive: t,
                            }),
                            (0, h.jsxs)('div', {
                                className: tp().controls,
                                children: [
                                    (0, h.jsx)(ex.W, { className: tp().playButton, isActive: t }),
                                    (0, h.jsx)(ex.W, { className: tp().button, isActive: t }),
                                    (0, h.jsx)(ex.W, { className: tp().button, isActive: t }),
                                    (0, h.jsx)(ex.W, { className: tp().button, isActive: t }),
                                ],
                            }),
                        ],
                    });
                },
                tx = (0, y.PA)((e) => {
                    let { track: t, isShimmerVisible: a, isShimmerActive: i, isTrackPage: l } = e,
                        { formatMessage: n } = (0, H.A)(),
                        {
                            settings: { isMobile: r },
                        } = (0, T.g)(),
                        s = null == t ? void 0 : t.explicitDisclaimer,
                        o = (0, g.useMemo)(() => {
                            if (s)
                                return (0, h.jsx)(eZ.N, {
                                    className: (0, eO.$)(t_().explicitMark, t_().important),
                                    getDescriptionTexts: t.getDescriptionTexts,
                                    size: 'xxs',
                                    variant: s,
                                });
                        }, [s, null == t ? void 0 : t.getDescriptionTexts]);
                    return a
                        ? (0, h.jsx)(tv, { isShimmerActive: i })
                        : t
                          ? (0, h.jsx)(e$.k, {
                                entityName: n({ id: 'entity-names.track-type' }, { type: (0, e_.y)(t.type) }),
                                entityNameIcon: o,
                                controls: (0, h.jsx)(td, { track: t }),
                                meta: (0, h.jsx)(eG.i, {
                                    className: (0, eO.$)(t_().text, t_().important),
                                    linkClassName: t_().link,
                                    captionClassName: t_().artistCaption,
                                    artists: t.artists,
                                    variant: 'breakWord',
                                    separator: r ? '' : void 0,
                                }),
                                title: t.title,
                                version: t.version,
                                headingVariant: l ? 'h1' : 'div',
                                titleClassName: (0, eO.$)(t_().title, t_().important),
                                metaClassName: (0, eO.$)(t_().meta, t_().important),
                                contentClassName: (0, eO.$)(t_().content, t_().important),
                                withHeadingClamp: !1,
                                entityNameClassName: t_().entityName,
                            })
                          : null;
                }),
                th = (0, y.PA)(() => {
                    var e, t, a, i, l, n, r, s;
                    let { formatMessage: o } = (0, H.A)(),
                        { notify: c } = (0, es.l)(),
                        {
                            user: d,
                            track: u,
                            albumCPA: { isPlusCPAPlayerBarEnabled: _ },
                        } = (0, T.g)(),
                        m = _(
                            null == (t = u.meta) || null == (e = t.mainAlbum) ? void 0 : e.id,
                            null == (i = u.meta) || null == (a = i.mainAlbum) ? void 0 : a.isNonMusic,
                        ),
                        { shouldShowSimilarTracks: p } = ((e, t, a) => {
                            let i = null != e ? e : [],
                                l = i.length > 0 && (0, G.f)(t) && !a;
                            return { tracks: l ? i.slice(0, 8) : [], shouldShowSimilarTracks: l };
                        })(u.similarTracks, null == (l = u.meta) ? void 0 : l.type, m),
                        v = (0, A.c)(() => {
                            (u.setAnimationState(!0), u.close(), u.reset());
                        }),
                        x = (0, Z.w)({ track: u.meta, disclaimerRejectHandler: v });
                    return (
                        (0, g.useEffect)(() => {
                            var e;
                            u.isOpened && (null == (e = u.meta) ? void 0 : e.isLegalRejected) && u.close();
                        }, [u, u.isOpened, null == (n = u.meta) ? void 0 : n.isLegalRejected]),
                        (0, g.useEffect)(() => {
                            x();
                        }, [x]),
                        u.isRejected && c((0, h.jsx)(eo.h, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: er.u.ERROR }),
                        (0, h.jsxs)('div', {
                            'data-test-id': q.Xk.track.TRACK_PAGE,
                            children: [
                                (0, h.jsxs)('header', {
                                    className: Y().header,
                                    children: [
                                        (0, h.jsx)(Q.$, {
                                            radius: 'round',
                                            color: 'secondary',
                                            size: 'xxs',
                                            icon: (0, h.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                            className: Y().closeButton,
                                            onClick: v,
                                            'aria-label': o({ id: 'interface-actions.close' }),
                                            'data-test-id': q.Xk.track.TRACK_PAGE_CLOSE_BUTTON,
                                        }),
                                        (0, h.jsx)(tx, { track: u.meta, isShimmerVisible: u.isShimmerVisible, isShimmerActive: u.isLoading, isTrackPage: u.isTrackPage }),
                                    ],
                                }),
                                (0, h.jsxs)('div', {
                                    className: Y().content,
                                    'data-test-id': q.Xk.track.TRACK_PAGE_CONTENT,
                                    children: [
                                        (0, h.jsx)(eg, { onModalClose: v }),
                                        // for PulseSync: BEGIN show the track lyrics section when LRCLIB fallback is enabled
                                        u.meta &&
                                            ((null == (r = u.meta) ? void 0 : r.isLyricsAvailable) || window.nativeSettings?.get('modSettings.lrclib.useText') !== !1) &&
                                            (0, h.jsx)(eB, { track: u.meta }, u.meta.id),
                                        // for PulseSync: END show the track lyrics section when LRCLIB fallback is enabled
                                        p &&
                                            u.similarTracks &&
                                            (0, h.jsx)(eQ, {
                                                tracks: u.similarTracks,
                                                contextId: null == (s = u.meta) ? void 0 : s.entityId,
                                                isShimmerVisible: u.isShimmerVisible,
                                                isShimmerActive: u.isLoading,
                                                autoflowSeeds: u.seeds,
                                                shouldResetCarouselScroll: u.shouldReloadMeta,
                                            }),
                                    ],
                                }),
                                u.meta && (0, h.jsx)(en, { user: d, track: u.meta }),
                            ],
                        })
                    );
                }),
                ty = (0, y.PA)(() => {
                    let { contentRef: e } = (0, j.g)(),
                        {
                            album: t,
                            track: a,
                            settings: { isMobile: i },
                            experiments: l,
                        } = (0, T.g)(),
                        n = l.checkExperiment(N.z.WebNextTrackModalCloseOnNavigate, 'on');
                    (a.trackId && a.albumId && a.isOpened && a.getData(),
                        (0, g.useEffect)(
                            () => () => {
                                a.reset();
                            },
                            [a],
                        ),
                        (0, g.useEffect)(() => {
                            a.isOpened && a.setAnimationState(!1);
                        }, [a]),
                        ((e, t, a) => {
                            var i, l;
                            let n = null != (i = null == e ? void 0 : e.title) ? i : '',
                                r = null != (l = null == t ? void 0 : t.title) ? l : '',
                                s = null == t ? void 0 : t.isLegalRejected,
                                o = (0, g.useCallback)(
                                    (i) => {
                                        if (!a || !e || !t || s) return;
                                        let l = { ...(0, I.f)(e), title: n };
                                        return V(
                                            {
                                                ...((e) =>
                                                    e
                                                        ? { id: e.id, artists: e.artists.map(S.N), durationMs: e.durationMs, title: e.title, type: e.type }
                                                        : { id: 0, artists: [], durationMs: 0, title: '', type: k.S.TRACK })(t),
                                                title: r,
                                            },
                                            l,
                                            i,
                                        );
                                    },
                                    [e, n, t, r, s, a],
                                );
                            (0, L.C)(o);
                        })(t.meta, a.meta, a.isOpened));
                    let r = (0, A.c)((e) => {
                        var t;
                        null == (t = a.onOpenChange) || t.call(a, e);
                    });
                    return i || e
                        ? (0, h.jsx)(f.a, {
                              size: 'fitContent',
                              placement: i ? 'default' : 'right',
                              open: a.isOpened,
                              onOpenChange: r,
                              className: Y().root,
                              contentClassName: Y().modalContent,
                              portalNode: i ? null : e,
                              showHeader: !1,
                              withOverlay: n || i,
                              closeOnOutsidePress: n,
                              withAnimation: n || a.withAnimation,
                              isMobile: i,
                              lockScroll: i,
                              children: (0, h.jsx)(th, {}),
                          })
                        : null;
                });
            var tC = a(38053),
                tg = a(26756),
                tb = a(81223),
                tA = a.n(tb);
            let tf = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, H.A)(),
                        { notify: t } = (0, es.l)(),
                        { contentRef: a } = (0, j.g)(),
                        {
                            currentClipInfo: i,
                            settings: { isMobile: l, isWindowsApplication: n },
                            fullscreenVideoPlayer: r,
                        } = (0, T.g)(),
                        { modal: s, clip: o } = i;
                    (!o && i.isClipIdle && i.getClip(), !i.credits && i.isCreditsIdle && i.getCreditsInfo());
                    let c = null == o ? void 0 : o.title,
                        d = null == o ? void 0 : o.explicitDisclaimer,
                        u = (0, g.useMemo)(
                            () =>
                                i.isClipLoading || i.isClipRejected
                                    ? (0, h.jsx)(ek.q, { className: tA().titleShimmer, count: 1 })
                                    : o
                                      ? (0, h.jsxs)('span', {
                                            children: [
                                                c,
                                                d &&
                                                    (0, h.jsx)(eZ.N, {
                                                        getDescriptionTexts: o.getDescriptionTexts,
                                                        className: (0, eO.$)(tA().explicitMark, tA().important),
                                                        size: 'xxs',
                                                        variant: d,
                                                    }),
                                            ],
                                        })
                                      : void 0,
                            [o, c, d, i.isClipLoading, i.isClipRejected],
                        );
                    (0, g.useEffect)(
                        () => () => {
                            (s.close(), i.reset());
                        },
                        [i, s],
                    );
                    let _ = (0, g.useCallback)(() => {
                            (s.close(), i.reset());
                        }, [i, s]),
                        m = (0, g.useCallback)(
                            (e) => {
                                var t;
                                (e || i.reset(), null == (t = s.onOpenChange) || t.call(s, e));
                            },
                            [i, s],
                        );
                    i.isRejected &&
                        (_(),
                        t((0, h.jsx)(eo.h, { error: e({ id: 'error-messages.error-during-action' }) }), {
                            containerId: r.modal.isOpened ? er.u.FULLSCREEN_ERROR : er.u.ERROR,
                        }));
                    let p = (0, g.useMemo)(() => {
                        var e;
                        return i.isCreditsLoading || i.isCreditsRejected
                            ? (0, h.jsx)(ek.q, {})
                            : (null == (e = i.credits) ? void 0 : e.length)
                              ? i.credits.map((e) => {
                                    let t = (0, h.jsx)(tg.D, { children: e.value });
                                    return (0, h.jsx)(tC.O, { infoDescription: t, title: e.title }, e.title);
                                })
                              : null;
                    }, [i.credits, i.isCreditsLoading, i.isCreditsRejected]);
                    return (0, h.jsx)(f.a, {
                        'data-test-id': q.Kq.clip.CLIP_ABOUT_MODAL,
                        placement: l ? 'default' : 'right',
                        open: s.isOpened,
                        onClose: _,
                        contentClassName: tA().modalContent,
                        title: u,
                        headerClassName: tA().header,
                        className: (0, eO.$)(tA().root, { [tA().root_withFullscreen]: r.modal.isOpened, [tA().root_withWindows]: n }),
                        onOpenChange: m,
                        labelClose: e({ id: 'interface-actions.close' }),
                        portalNode: l || r.modal.isOpened ? null : a,
                        children: (0, h.jsx)('div', { className: tA().content, children: p }),
                    });
                }),
                tj = (0, y.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, T.g)();
                    return e ? null : (0, h.jsx)(tf, {});
                });
            var tT = a(64310),
                tN = a(79070);
            let tI = (0, y.PA)(() => {
                let { formatMessage: e } = (0, H.A)(),
                    { currentTrackInfo: t } = (0, T.g)(),
                    { fullTrack: a } = t,
                    i = (0, tN.L)(() => {
                        var t, i, l;
                        if (!(null == a || null == (t = a.mainAlbum) ? void 0 : t.title)) return;
                        let n = (0, h.jsx)(tg.D, {
                            href: null == a || null == (i = a.mainAlbum) ? void 0 : i.url,
                            children: null == a || null == (l = a.mainAlbum) ? void 0 : l.title,
                        });
                        return (0, h.jsx)(tC.O, { title: e({ id: 'entity-names.audiobook' }), infoDescription: n });
                    }),
                    l = (0, tN.L)(() => {
                        if (!(null == a ? void 0 : a.shortDescription)) return;
                        let e = (0, h.jsx)(tg.D, { children: null == a ? void 0 : a.shortDescription });
                        return (0, h.jsx)(tC.O, { infoDescription: e });
                    });
                return (0, h.jsxs)(h.Fragment, { children: [l, i] });
            });
            var tk = a(86696),
                tS = a.n(tk);
            let tL = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, H.A)(),
                        { currentTrackInfo: t } = (0, T.g)(),
                        a = t.fullTrack,
                        i = (0, g.useMemo)(
                            () =>
                                t.fullDescription
                                    ? (0, h.jsx)('span', { className: tS().text, dangerouslySetInnerHTML: { __html: (0, ea.ky)(t.fullDescription) } })
                                    : null == a
                                      ? void 0
                                      : a.shortDescription,
                            [null == a ? void 0 : a.shortDescription, t.fullDescription],
                        ),
                        l = (0, tN.L)(() => {
                            if (!i) return;
                            let e = (0, h.jsx)(tg.D, { children: i });
                            return (0, h.jsx)(tC.O, { infoDescription: e });
                        }),
                        n = (0, tN.L)(() => {
                            var t, i, l;
                            if (!(null == a || null == (t = a.mainAlbum) ? void 0 : t.title)) return;
                            let n = (0, h.jsx)(tg.D, {
                                href: null == a || null == (i = a.mainAlbum) ? void 0 : i.url,
                                children: null == a || null == (l = a.mainAlbum) ? void 0 : l.title,
                            });
                            return (0, h.jsx)(tC.O, { title: e({ id: 'entity-names.podcast' }), infoDescription: n });
                        });
                    return (0, h.jsxs)(h.Fragment, { children: [l, n] });
                }),
                tE = (0, y.PA)(() => {
                    var e, t, a, i, l;
                    let { formatMessage: n } = (0, H.A)(),
                        { notify: r } = (0, es.l)(),
                        { contentRef: s } = (0, j.g)(),
                        {
                            currentTrackInfo: o,
                            settings: { isMobile: c, isWindowsApplication: d, isLinuxApplication: u },
                            fullscreenPlayer: _,
                            experiments: m,
                        } = (0, T.g)(),
                        { modal: p } = o,
                        v = o.isUGC,
                        x = m.checkExperiment(N.z.WebEditorsFeatures, 'on');
                    (v && o.isTrackIdle && o.getTrackMeta(),
                        o.fullTrack || !o.isTrackIdle || v || o.getFullTrack(),
                        !o.credits && o.isCreditsIdle && o.getCreditsInfo(),
                        ((null == (e = o.fullTrack) ? void 0 : e.isTrackPodcast) || (null == (a = o.fullTrack) || null == (t = a.mainAlbum) ? void 0 : t.isPodcast)) &&
                            o.getFullDescription(),
                        (0, g.useEffect)(
                            () => () => {
                                (p.close(), o.reset());
                            },
                            [o, p],
                        ));
                    let y = (0, g.useCallback)(() => {
                            (p.close(), o.reset());
                        }, [o, p]),
                        C = (0, g.useCallback)(
                            (e) => {
                                var t;
                                (e || o.reset(), null == (t = p.onOpenChange) || t.call(p, e));
                            },
                            [o, p],
                        );
                    o.isRejected &&
                        (y(),
                        r((0, h.jsx)(eo.h, { error: n({ id: 'error-messages.error-during-action' }) }), {
                            containerId: _.modal.isOpened ? er.u.FULLSCREEN_ERROR : er.u.ERROR,
                        }));
                    let b = o.fullTrack,
                        A = null == b ? void 0 : b.explicitDisclaimer,
                        I = (0, g.useMemo)(() => {
                            var e;
                            if (b)
                                return (0, h.jsxs)('span', {
                                    children: [
                                        b.title,
                                        b.version && (0, h.jsx)('span', { className: tS().version, children: b.version }),
                                        A &&
                                            (0, h.jsx)(eZ.N, {
                                                className: (0, eO.$)(tS().explicitMark, tS().important, { [tS().explicit]: !b.isTrackNonMusic }),
                                                getDescriptionTexts: null == (e = o.fullTrack) ? void 0 : e.getDescriptionTexts,
                                                size: 'xxs',
                                                variant: A,
                                            }),
                                    ],
                                });
                        }, [b, A, null == (i = o.fullTrack) ? void 0 : i.getDescriptionTexts]),
                        S = (0, g.useMemo)(() => {
                            var e;
                            return (null == b ? void 0 : b.type) === k.S.AUDIOBOOK
                                ? (0, h.jsx)(tI, {})
                                : (null == b ? void 0 : b.isTrackPodcast) || (null == b || null == (e = b.mainAlbum) ? void 0 : e.isPodcast)
                                  ? (0, h.jsx)(tL, {})
                                  : void 0;
                        }, [b]),
                        L = (0, g.useMemo)(() => {
                            var e;
                            return (null == (e = o.credits) ? void 0 : e.length)
                                ? o.credits.map((e) => {
                                      let { title: t, value: a } = e,
                                          i = (0, h.jsx)(tg.D, { children: a });
                                      return (0, h.jsx)(tC.O, { title: t, infoDescription: i }, t);
                                  })
                                : null;
                        }, [o.credits]),
                        E = (0, g.useMemo)(() => {
                            var e;
                            if ((null == (e = o.fullTrack) ? void 0 : e.major) && x) {
                                let e = o.fullTrack.major.name;
                                if (e) {
                                    let t = (0, h.jsx)(tg.D, { children: e });
                                    return (0, h.jsx)(tC.O, { title: 'Major', infoDescription: t }, e);
                                }
                            }
                            return null;
                        }, [null == (l = o.fullTrack) ? void 0 : l.major, x]);
                    return (0, h.jsx)(f.a, {
                        placement: c ? 'default' : 'right',
                        open: p.isOpened,
                        onClose: y,
                        contentClassName: tS().modalContent,
                        title: I,
                        headerClassName: tS().header,
                        className: (0, eO.$)(tS().root, { [tS().root_withFullscreen]: _.modal.isOpened, [tS().root_withCustomControls]: d || u }),
                        overlayClassName: tS().overlay,
                        onOpenChange: C,
                        labelClose: n({ id: 'interface-actions.close' }),
                        portalNode: c || _.modal.isOpened ? null : s,
                        'data-test-id': q.Xk.track.TRACK_ABOUT_MODAL,
                        closeButtonDataTestId: q.Xk.track.TRACK_ABOUT_MODAL_CLOSE_BUTTON,
                        children: (0, h.jsxs)('div', {
                            className: tS().content,
                            children: [
                                (o.isTrackLoading || o.isTrackRejected) && (0, h.jsx)(tT.n, { textClassName: tS().textShimmer }),
                                S,
                                (o.isCreditsLoading || o.isCreditsRejected) && (0, h.jsx)(tT.n, { textClassName: tS().textShimmer }),
                                L,
                                E,
                            ],
                        }),
                    });
                }),
                tM = (0, y.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, T.g)();
                    return e ? null : (0, h.jsx)(tE, {});
                });
            var tP = a(51611),
                tO = a(8655),
                tw = a(69704),
                tR = a(60906),
                tD = a.n(tR);
            let tB = (0, y.PA)(() => {
                let e = (0, g.useRef)(null),
                    t = (0, g.useRef)(null),
                    { formatMessage: a } = (0, H.A)(),
                    { language: i } = (0, tP.h)(),
                    { contentRef: l } = (0, j.g)(),
                    { theme: n } = (0, tw.W)(),
                    r = (0, J.N)().get(X.V4),
                    s = (0, ee._)(r.feedbackForm.host),
                    {
                        trackComplaint: o,
                        settings: { isMobile: c },
                        fullscreenPlayer: d,
                        slam: u,
                    } = (0, T.g)(),
                    { modal: _, trackId: m } = o,
                    p = (0, g.useCallback)(() => {
                        null !== t.current && (window.clearTimeout(t.current), (t.current = null));
                    }, []),
                    v = (0, g.useCallback)(() => {
                        (p(),
                            (t.current = window.setTimeout(() => {
                                (_.isOpened || o.reset(), (t.current = null));
                            }, 300)));
                    }, [p, _, o]),
                    x = (0, g.useCallback)(() => {
                        (_.close(), v());
                    }, [_, v]),
                    y = (0, g.useCallback)(
                        (e) => {
                            (e ? p() : v(), _.onOpenChange(e));
                        },
                        [p, _, v],
                    );
                ((0, g.useEffect)(() => {
                    u.isOfflineModeEnabled && _.isOpened && x();
                }, [x, _.isOpened, u.isOfflineModeEnabled]),
                    (0, g.useEffect)(
                        () => () => {
                            (p(), _.close(), o.reset());
                        },
                        [p, _, o],
                    ),
                    (0, g.useEffect)(() => {
                        if (!_.isOpened) return;
                        let t = new URL(s).origin,
                            a = (a) => {
                                var i, l;
                                ((e) => {
                                    let { data: t, origin: a, source: i, expectedOrigin: l, expectedSource: n } = e;
                                    if (a !== l || null === n || i !== n || 'string' != typeof t) return !1;
                                    let r = (0, ea.UL)(t);
                                    return 'object' == typeof r && null !== r && 'COMPLAINT_RESULT' === r.postMessageType && 'close' === r.action;
                                })({
                                    data: a.data,
                                    origin: a.origin,
                                    source: a.source,
                                    expectedOrigin: t,
                                    expectedSource: null != (l = null == (i = e.current) ? void 0 : i.contentWindow) ? l : null,
                                }) && x();
                            };
                        return (
                            window.addEventListener('message', a),
                            () => {
                                window.removeEventListener('message', a);
                            }
                        );
                    }, [s, x, _.isOpened]));
                let C = (0, g.useMemo)(
                    () =>
                        m
                            ? ((e) => {
                                  let { contentId: t, host: a, lang: i, theme: l } = e,
                                      n = new URL('/complaint', a);
                                  return (n.searchParams.set('contentId', t), n.searchParams.set('theme', l), n.searchParams.set('lang', i), n.toString());
                              })({ contentId: m, host: s, lang: i, theme: n === tO.S.Light ? 'white' : 'black' })
                            : null,
                    [s, i, n, m],
                );
                return (0, h.jsx)(f.a, {
                    className: (0, eO.$)(tD().root, { [tD().root_mobile]: c }),
                    contentClassName: tD().content,
                    open: _.isOpened,
                    size: c ? 'fullscreen' : 'fitContent',
                    placement: 'center',
                    showHeader: !1,
                    isMobile: c,
                    onClose: x,
                    onOpenChange: y,
                    portalNode: c || d.modal.isOpened ? null : l,
                    restoreFocus: !1,
                    transitionDuration: 300,
                    children: C && (0, h.jsx)('iframe', { ref: e, className: tD().iframe, src: C, title: a({ id: 'interface-actions.report-problem' }) }),
                });
            });
            var tF = a(71880),
                tU = a.n(tF);
            let tz = (0, y.PA)(() => {
                var e;
                let { formatMessage: t } = (0, H.A)(),
                    { notify: a } = (0, es.l)(),
                    { contentRef: i } = (0, j.g)(),
                    {
                        trackLyrics: l,
                        settings: { isMobile: n },
                        fullscreenPlayer: r,
                    } = (0, T.g)(),
                    { modal: s, track: o } = l,
                    c = null == o ? void 0 : o.explicitDisclaimer;
                ((0, g.useEffect)(() => {
                    // for PulseSync: BEGIN load modal lyrics when LRCLIB fallback is enabled
                    o && (o.isLyricsAvailable || window.nativeSettings?.get('modSettings.lrclib.useText') !== !1) && l.modal.isOpened && l.getLyrics(o.id);
                    // for PulseSync: END load modal lyrics when LRCLIB fallback is enabled
                }, [o, l, l.modal.isOpened]),
                    (0, g.useEffect)(() => {
                        s.isOpened && o && l.isResolved && l.sendViews({ trackId: o.id, albumId: o.albumId });
                    }, [o, l, l.isResolved, s.isOpened]));
                let d = (0, g.useCallback)(
                    (e) => {
                        var t;
                        null == (t = s.onOpenChange) || t.call(s, e);
                    },
                    [s],
                );
                l.isRejected && l.modal.isOpened && a((0, h.jsx)(eo.h, { error: t({ id: 'error-messages.error-during-action' }) }), { containerId: er.u.ERROR });
                let u = (0, g.useMemo)(() => {
                    if (o)
                        return (0, h.jsxs)('span', {
                            'data-test-id': q.e8.content.TRACK_LYRICS_TITLE,
                            children: [
                                o.title,
                                o.version && (0, h.jsx)('span', { className: tU().version, children: o.version }),
                                c &&
                                    (0, h.jsx)(eZ.N, {
                                        className: (0, eO.$)(tU().explicitMark, tU().important),
                                        getDescriptionTexts: o.getDescriptionTexts,
                                        size: 'xxs',
                                        variant: c,
                                    }),
                            ],
                        });
                }, [o, null == o ? void 0 : o.title, null == o ? void 0 : o.version, c]);
                return (0, h.jsx)(f.a, {
                    size: 'fitContent',
                    placement: n ? 'default' : 'right',
                    open: s.isOpened,
                    onOpenChange: d,
                    onClose: s.close,
                    className: tU().root,
                    contentClassName: tU().modalContent,
                    portalNode: n || r.modal.isOpened ? null : i,
                    title: u,
                    headerClassName: tU().header,
                    overlayClassName: tU().overlay,
                    labelClose: t({ id: 'interface-actions.close' }),
                    restoreFocus: !0,
                    'data-test-id': q.e8.content.TRACK_LYRICS_MODAL,
                    closeButtonDataTestId: q.e8.content.TRACK_LYRICS_CLOSE_BUTTON,
                    lockScroll: n,
                    children: (0, h.jsx)('div', {
                        className: tU().content,
                        'data-test-id': q.e8.content.TRACK_LYRICS_TEXT,
                        children: (0, h.jsx)(eE, {
                            lyrics: l.lyrics,
                            authors: l.writersNames,
                            source: null == (e = l.major) ? void 0 : e.prettyName,
                            isShimmerVisible: l.isShimmerVisible,
                            isShimmerActive: l.isLoading,
                        }),
                    }),
                });
            });
            var tW = a(50408),
                tV = a(90688),
                tK = a(73170),
                tY = a(44450),
                tH = a(26e3),
                tq = a(40210),
                tQ = a(86462),
                t$ = a(51190),
                tG = a.n(t$),
                tZ = a(53643),
                tX = a(26404),
                tJ = a.n(tX);
            let t0 = () => {
                    let e = (0, tZ.j)();
                    return (0, h.jsx)('div', {
                        className: tJ().root,
                        'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_LOGO,
                        children: (0, h.jsx)($.I, { variant: 'yandexPlus'.concat(e), className: (0, eO.$)(tJ().icon, tJ()['icon_'.concat(e.toLocaleLowerCase())]) }),
                    });
                },
                t1 = (0, y.PA)((e) => {
                    let { hasError: t, children: a, ...i } = e,
                        {
                            settings: { isMobile: l },
                        } = (0, T.g)(),
                        { formatMessage: n } = (0, H.A)();
                    return (0, h.jsxs)(f.a, {
                        size: 'fitContent',
                        placement: l ? 'default' : 'center',
                        labelClose: n({ id: 'interface-actions.close' }),
                        className: (0, eO.$)(tG().root, { [tG().root_mobile]: l, [tG().root_error]: t }),
                        headerClassName: tG().header,
                        contentClassName: tG().content,
                        ...i,
                        closeButtonDataTestId: q.e8.crackdownModal.CRACKDOWN_MODAL_CLOSE_BUTTON,
                        children: [!l && (0, h.jsx)(t0, {}), (0, h.jsx)('div', { className: tG().contentWrapper, children: a })],
                    });
                });
            var t2 = a(21416),
                t4 = a(52048),
                t8 = a.n(t4);
            let t3 = (e) => {
                    let { children: t, forwardRef: a, text: i, isMobile: l, showSpinner: n, size: r = 'm', className: s, ...o } = e;
                    return (0, h.jsx)(Q.$, {
                        className: (0, eO.$)(t8().button, { [t8().button_mobile]: l }, s),
                        isBlock: !0,
                        radius: 'xxxl',
                        size: r,
                        ref: a,
                        spinner: n ? (0, h.jsx)(t2.y, {}) : null,
                        ...o,
                        children: null != t ? t : (0, h.jsx)(ec.HL, { className: t8().text, variant: 'div', size: 'm', children: i }),
                    });
                },
                t5 = (0, g.forwardRef)((e, t) => (0, h.jsx)(t3, { forwardRef: t, ...e })),
                t6 = (e) => {
                    let { isMobile: t, isActive: a, className: i } = e;
                    return (0, h.jsx)(ex.W, { className: (0, eO.$)(t8().shimmer, { [t8().shimmer_mobile]: t }, i), isActive: a, radius: 'xxxl' });
                };
            var t9 = a(58390),
                t7 = a(73441),
                ae = a.n(t7);
            let at = (0, y.PA)(() => {
                    let {
                            modals: { crackdownModal: e },
                        } = (0, T.g)(),
                        t = (0, t9.useRouter)(),
                        a = (0, J.N)().get(X.QG),
                        i = (0, A.c)(() => {
                            (e.close(), a.authorizationUrl && t.push(a.authorizationUrl));
                        });
                    return (0, h.jsx)(Q.$, {
                        className: (0, eO.$)(ae().button, ae().important),
                        variant: 'default',
                        color: 'secondary',
                        isBlock: !0,
                        radius: 'xxxl',
                        size: 'xs',
                        onClick: i,
                        'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_ALREADY_IN_PLUS_BUTTON,
                        children: (0, h.jsx)(ec.HL, {
                            className: ae().buttonMainText,
                            variant: 'span',
                            children: (0, h.jsx)(eX.A, { id: 'buy-subscription.already-in-plus', values: { nbsp: '\xa0' } }),
                        }),
                    });
                }),
                aa = 'crackdown-buy-subscription-button',
                ai = (0, y.PA)((e) => {
                    let { withAlreadyInPlusButton: t } = e,
                        {
                            user: a,
                            modals: { crackdownModal: i },
                        } = (0, T.g)(),
                        [l, n] = (0, tW.d)(),
                        [r, s] = (0, g.useState)(i.isOpened),
                        {
                            mainText: o,
                            mainTextA11y: c,
                            additionText: d,
                            isShimmerVisible: u,
                            isShimmerActive: _,
                            openPaymentWidgetModal: m,
                            saveOfferAndAuthorize: p,
                        } = (0, tQ.D)({ storeName: 'music', isEnabled: r, offerElement: { element: l, intersectionPropertyId: aa } }),
                        v = (0, A.c)(() => {
                            if ((i.close(), !a.isAuthorized)) return void p();
                            m();
                        }),
                        x = (0, tN.L)(() =>
                            u
                                ? (0, h.jsx)(t6, { className: (0, eO.$)(ae().button, ae().important), isActive: _ })
                                : (0, h.jsxs)(t5, {
                                      className: (0, eO.$)(ae().button, ae().important),
                                      color: 'plus',
                                      size: 'xs',
                                      ref: n,
                                      'data-intersection-property-id': aa,
                                      onClick: v,
                                      'aria-label': c,
                                      'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_SUBSCRIPTION_BUTTON,
                                      children: [
                                          (0, h.jsx)(ec.HL, { variant: 'div', className: ae().buttonMainText, children: o }),
                                          d && (0, h.jsx)(ec.HL, { variant: 'div', size: 'm', weight: 'normal', children: d }),
                                      ],
                                  }),
                        );
                    return (
                        (0, g.useEffect)(() => {
                            setTimeout(() => {
                                s(!0);
                            }, 2500);
                        }, []),
                        (0, h.jsxs)(t1, {
                            open: i.isOpened,
                            onClose: i.close,
                            'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL,
                            children: [
                                (0, h.jsx)('div', {
                                    className: tG().growContainer,
                                    'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_PICTURE,
                                    children: (0, h.jsx)(tV._V, {
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.672491383c0f014022130e5b/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.6724913d3c0f014022130e5e/orig 2x',
                                    }),
                                }),
                                (0, h.jsxs)('div', {
                                    className: tG().text,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, h.jsx)(ec.DZ, {
                                            variant: 'h1',
                                            size: 'xl',
                                            className: tG().title,
                                            'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_TITLE_TEXT,
                                            children: (0, h.jsx)(eX.A, { id: 'crackdown.title', values: { br: (0, h.jsx)('br', {}), nbsp: '\xa0' } }),
                                        }),
                                        (0, h.jsx)(ec.HL, {
                                            variant: 'span',
                                            size: 'm',
                                            className: tG().description,
                                            'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_DESCRIPTION_TEXT,
                                            children: (0, h.jsx)(eX.A, { id: 'crackdown.description', values: { br: (0, h.jsx)('br', {}), nbsp: '\xa0' } }),
                                        }),
                                    ],
                                }),
                                (0, h.jsxs)(tK.q, {
                                    children: [
                                        (0, h.jsx)(ec.DZ, { variant: 'h1', children: (0, h.jsx)(eX.A, { id: 'crackdown.title', values: { br: ' ', nbsp: '\xa0' } }) }),
                                        (0, h.jsx)(ec.HL, {
                                            variant: 'div',
                                            children: (0, h.jsx)(eX.A, { id: 'crackdown.description', values: { br: ' ', nbsp: '\xa0' } }),
                                        }),
                                    ],
                                }),
                                (0, h.jsxs)('div', { className: tG().buttons, children: [x, t && (0, h.jsx)(at, {})] }),
                            ],
                        })
                    );
                });
            ai.displayName = 'CrackdownModalComponent';
            let al = (e) => (0, h.jsx)(tY.r, { page: tH.l.CRACKDOWN_SCREEN, places: [tq.R.TOP_BUTTON], children: (0, h.jsx)(ai, { ...e }) });
            var an = a(79272),
                ar = a(78940),
                as = a(6900),
                ao = a(49556),
                ac = a.n(ao);
            let ad = (0, y.PA)(() => {
                let { downloadMobileApp: e, user: t, settings: a } = (0, T.g)(),
                    { formatMessage: i } = (0, H.A)(),
                    l = (0, an.q)({ browserInfo: a.browserInfo, login: t.account.data.login }),
                    n = (0, ar.Z)(l());
                return (0, h.jsxs)('div', {
                    className: (0, eO.$)(ac().root, (0, as.J)(tO.S.Dark)),
                    children: [
                        (0, h.jsx)(Q.$, {
                            className: ac().closeButton,
                            radius: 'round',
                            size: 'xxs',
                            icon: (0, h.jsx)($.I, { variant: 'close', size: 'xxs' }),
                            'aria-label': i({ id: 'interface-actions.close' }),
                            onClick: e.modal.close,
                        }),
                        (0, h.jsxs)('div', {
                            className: ac().text,
                            children: [
                                (0, h.jsx)(ec.DZ, {
                                    variant: 'h1',
                                    size: 'xl',
                                    weight: 'bold',
                                    children: (0, h.jsx)(eX.A, { id: 'download-mobile-app.title', values: { nbsp: '\xa0' } }),
                                }),
                                (0, h.jsx)(ec.HL, {
                                    className: ac().subtitle,
                                    variant: 'p',
                                    size: 'l',
                                    weight: 'bold',
                                    children: (0, h.jsx)(eX.A, { id: 'download-mobile-app.subtitle', values: { nbsp: '\xa0' } }),
                                }),
                            ],
                        }),
                        (0, h.jsxs)('div', {
                            className: ac().buttons,
                            children: [
                                (0, h.jsx)(Q.$, {
                                    role: 'link',
                                    className: ac().button,
                                    color: 'primary',
                                    size: 'm',
                                    radius: 'xxxl',
                                    onClick: n,
                                    children: (0, h.jsx)(ec.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        weight: 'medium',
                                        children: (0, h.jsx)(eX.A, { id: 'download-mobile-app.listen-in-app' }),
                                    }),
                                }),
                                (0, h.jsx)(Q.$, {
                                    className: (0, eO.$)(ac().button, ac().stayButton),
                                    variant: 'text',
                                    size: 'm',
                                    color: 'secondary',
                                    radius: 'xxxl',
                                    onClick: e.modal.close,
                                    children: (0, h.jsx)(ec.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        weight: 'medium',
                                        children: (0, h.jsx)(eX.A, { id: 'download-mobile-app.stay' }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var au = a(6930),
                a_ = a.n(au);
            let am = (0, y.PA)(() => {
                let { downloadMobileApp: e } = (0, T.g)();
                return (0, h.jsx)(f.a, {
                    className: a_().root,
                    contentClassName: a_().content,
                    open: e.modal.isOpened,
                    size: 'fullscreen',
                    placement: 'center',
                    showHeader: !1,
                    closeOnOutsidePress: !1,
                    overlayColor: 'full',
                    onOpenChange: e.modal.onOpenChange,
                    onClose: e.modal.close,
                    children: (0, h.jsx)(ad, {}),
                });
            });
            var ap = a(64184);
            let av = () => {
                let {
                    familyInvite: { modal: e, isSuccess: t, reset: a },
                } = (0, T.g)();
                return (0, g.useCallback)(() => {
                    if ((e.close(), t)) return void window.location.reload();
                    a();
                }, [e, t, a]);
            };
            var ax = a(11028),
                ah = a(49333),
                ay = a.n(ah);
            let aC = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, H.A)(),
                        {
                            settings: { isMobile: t },
                        } = (0, T.g)(),
                        a = av();
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsxs)('div', {
                                className: tG().text,
                                children: [
                                    (0, h.jsx)(ec.DZ, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: tG().title,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                                        children: (0, h.jsx)(eX.A, { id: 'family.invitation-error-title' }),
                                    }),
                                    (0, h.jsx)(ec.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        className: tG().description,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION,
                                        children: (0, h.jsx)(eX.A, { id: 'family.invitation-error-description' }),
                                    }),
                                ],
                            }),
                            (0, h.jsx)('div', {
                                className: tG().buttons,
                                children: (0, h.jsx)(t5, {
                                    color: 'primary',
                                    isMobile: t,
                                    text: e({ id: 'interface-actions.confirm' }),
                                    onClick: a,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_INVITATION_ERROR_BUTTON_CONFIRM,
                                }),
                            }),
                        ],
                    });
                }),
                ag = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, H.A)(),
                        {
                            settings: { isMobile: t },
                            paywall: { modal: a },
                        } = (0, T.g)(),
                        i = av(),
                        l = (0, g.useCallback)(() => {
                            (i(), a.open());
                        }, [i, a]);
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsxs)('div', {
                                className: tG().text,
                                children: [
                                    (0, h.jsx)(ec.DZ, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: tG().title,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                                        children: (0, h.jsx)(eX.A, { id: 'family.subscription-error-title' }),
                                    }),
                                    (0, h.jsx)(ec.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        className: tG().description,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION,
                                        children: (0, h.jsx)(eX.A, { id: 'family.subscription-error-description' }),
                                    }),
                                ],
                            }),
                            (0, h.jsxs)('div', {
                                className: tG().buttons,
                                children: [
                                    (0, h.jsx)(t5, {
                                        color: 'primary',
                                        isMobile: t,
                                        text: e({ id: 'family.about1' }),
                                        onClick: l,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_ABOUT,
                                    }),
                                    (0, h.jsx)(t5, {
                                        color: 'secondary',
                                        isMobile: t,
                                        text: (0, h.jsx)(eX.A, { id: 'family.later' }),
                                        onClick: i,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_LATER,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                ab = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, H.A)(),
                        {
                            familyInvite: { retry: t },
                        } = (0, T.g)();
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsxs)('div', {
                                className: tG().text,
                                children: [
                                    (0, h.jsx)(ec.DZ, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: tG().title,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                                        children: (0, h.jsx)(eX.A, { id: 'family.unknown-error-title' }),
                                    }),
                                    (0, h.jsx)(ec.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        className: tG().description,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION,
                                        children: (0, h.jsx)(eX.A, { id: 'family.unknown-error-description' }),
                                    }),
                                ],
                            }),
                            (0, h.jsx)('div', {
                                className: tG().buttons,
                                children: (0, h.jsx)(t5, {
                                    color: 'primary',
                                    text: e({ id: 'family.retry' }),
                                    onClick: t,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_UNKNOWN_ERROR_BUTTON_RETRY,
                                }),
                            }),
                        ],
                    });
                }),
                aA = { [ax.C.INVITATION_IS_INVALID]: (0, h.jsx)(aC, {}), [ax.C.SUBSCRIPTION_IS_NOT_AVAILABLE]: (0, h.jsx)(ag, {}), [ax.C.UNKNOWN]: (0, h.jsx)(ab, {}) },
                af = (0, y.PA)(() => {
                    let {
                            familyInvite: { error: e },
                            settings: { isMobile: t },
                        } = (0, T.g)(),
                        a = t || e === ax.C.SUBSCRIPTION_IS_NOT_AVAILABLE;
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)('div', {
                                className: (0, eO.$)(tG().growContainer, tG().growContainer_withoutPaddings),
                                children: (0, h.jsx)(tV._V, {
                                    className: (0, eO.$)(ay().image, { [ay().image_small]: a }),
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.6724b88e3c0f01402213116b/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.6724b88c3c0f01402213116a/orig 2x',
                                    fit: 'contain',
                                    'aria-hidden': !0,
                                }),
                            }),
                            aA[null != e ? e : ax.C.UNKNOWN],
                        ],
                    });
                });
            var aj = a(91292),
                aT = a(47436),
                aN = a(35765),
                aI = a.n(aN);
            let ak = (e) => {
                    let { avatarSrc: t, name: a, isMobile: i } = e;
                    return (0, h.jsxs)('div', {
                        className: (0, eO.$)(aI().root, { [aI().root_mobile]: i }),
                        children: [
                            (0, h.jsx)(aT.n, {
                                className: (0, eO.$)(aI().icon, aI().important),
                                avatarSrc: t,
                                hasPlus: !0,
                                'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_AVATAR,
                            }),
                            (0, h.jsx)(ec.HL, {
                                className: aI().name,
                                variant: 'div',
                                size: 'm',
                                'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_NAME,
                                children: a,
                            }),
                        ],
                    });
                },
                aS = (e) => {
                    let { isActive: t, isMobile: a } = e;
                    return (0, h.jsxs)('div', {
                        className: (0, eO.$)(aI().root, { [aI().root_mobile]: a }),
                        children: [
                            (0, h.jsx)(ex.W, { className: aI().iconShimmer, isActive: t, radius: 'round' }),
                            (0, h.jsx)(ex.W, { className: aI().nameShimmer, isActive: t, radius: 'xs' }),
                        ],
                    });
                };
            var aL = a(96353),
                aE = a.n(aL);
            let aM = (0, y.PA)(() => {
                let {
                        user: e,
                        location: t,
                        settings: { isMobile: a },
                        familyInvite: {
                            isInfoShimmerVisible: i,
                            isInfoShimmerActive: l,
                            isAcceptanceActive: n,
                            info: { data: r },
                            acceptInvite: s,
                        },
                    } = (0, T.g)(),
                    { name: o = '', avatarUrl: c = '' } = r || {},
                    d = (0, J.N)(),
                    u = (0, t9.useRouter)(),
                    _ = d.get(X.QG),
                    m = av(),
                    p = (0, g.useCallback)(() => {
                        if (!e.isAuthorized) {
                            _.authorizationUrl && u.push(_.authorizationUrl);
                            return;
                        }
                        s();
                    }, [_.authorizationUrl, u, e.isAuthorized, s]),
                    v = (0, g.useMemo)(
                        () => (i ? (0, h.jsx)(aS, { isActive: l, isMobile: a }) : (0, h.jsx)(ak, { avatarSrc: c, name: o, isMobile: a })),
                        [i, l, a, c, o],
                    ),
                    x = (0, g.useMemo)(
                        () =>
                            i
                                ? (0, h.jsx)(t6, { isActive: l, isMobile: a })
                                : (0, h.jsx)(t5, {
                                      color: 'plus',
                                      isMobile: a,
                                      text: (0, h.jsx)(eX.A, { id: 'family.accept' }),
                                      onClick: p,
                                      showSpinner: n,
                                      'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_ACCEPT,
                                  }),
                        [i, l, n, a, p],
                    );
                return (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsx)('div', { className: (0, eO.$)(tG().growContainer, aE().growContainer, aE().important), children: v }),
                        (0, h.jsxs)('div', {
                            className: tG().text,
                            children: [
                                (0, h.jsx)(ec.DZ, {
                                    variant: 'h1',
                                    size: 'xl',
                                    className: tG().title,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TITLE,
                                    children: (0, h.jsx)(eX.A, { id: 'family.info-title', values: { br: '\n' } }),
                                }),
                                (0, h.jsx)(ec.HL, {
                                    variant: 'span',
                                    size: 'm',
                                    className: tG().description,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_DESCRIPTION,
                                    children: (0, h.jsx)(eX.A, { id: 'family.info-description', values: { br: '\n' } }),
                                }),
                                (0, h.jsx)(aj.N, {
                                    target: '_blank',
                                    href: 'https://yandex.'.concat(t.tld, '/legal/yandex_plus_conditions/'),
                                    icon: (0, h.jsx)($.I, { variant: 'arrowRight', size: 'xxxs', className: tG().linkArrow }),
                                    iconPosition: 'right',
                                    className: tG().link,
                                    containerClassName: tG().linkContainer,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TERMS,
                                    children: (0, h.jsx)(ec.HL, { type: 'controls', variant: 'span', size: 'm', children: (0, h.jsx)(eX.A, { id: 'family.terms' }) }),
                                }),
                            ],
                        }),
                        (0, h.jsxs)('div', {
                            className: tG().buttons,
                            children: [
                                x,
                                (0, h.jsx)(t5, {
                                    color: 'secondary',
                                    isMobile: a,
                                    text: (0, h.jsx)(eX.A, { id: 'family.reject' }),
                                    onClick: m,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_REJECT,
                                }),
                            ],
                        }),
                    ],
                });
            });
            var aP = a(1425),
                aO = a.n(aP);
            let aw = (0, y.PA)(() => {
                    let {
                            location: e,
                            settings: { isMobile: t },
                        } = (0, T.g)(),
                        a = av();
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)('div', {
                                className: tG().growContainer,
                                children: (0, h.jsx)(tV._V, {
                                    className: (0, eO.$)(aO().image, { [aO().image_mobile]: t }),
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6724a5445724776f278ec59d/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6724a5445724776f278ec59d/orig 2x',
                                    fit: 'contain',
                                    'aria-hidden': !0,
                                }),
                            }),
                            (0, h.jsxs)('div', {
                                className: tG().text,
                                children: [
                                    (0, h.jsx)(ec.DZ, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: tG().title,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_TITLE,
                                        children: (0, h.jsx)(eX.A, { id: 'family.success-title' }),
                                    }),
                                    (0, h.jsx)(ec.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        className: tG().description,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_DESCRIPTION,
                                        children: (0, h.jsx)(eX.A, { id: 'family.success-description', values: { br: '\n' } }),
                                    }),
                                    (0, h.jsx)(aj.N, {
                                        target: '_blank',
                                        href: 'https://plus.yandex.'.concat(e.tld, '/'),
                                        icon: (0, h.jsx)($.I, { variant: 'arrowRight', size: 'xxxs', className: tG().linkArrow }),
                                        iconPosition: 'right',
                                        className: tG().link,
                                        containerClassName: tG().linkContainer,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_ABOUT,
                                        children: (0, h.jsx)(ec.HL, { type: 'controls', variant: 'span', size: 'm', children: (0, h.jsx)(eX.A, { id: 'family.about' }) }),
                                    }),
                                ],
                            }),
                            (0, h.jsx)('div', {
                                className: tG().buttons,
                                children: (0, h.jsx)(t5, {
                                    color: 'plus',
                                    isMobile: t,
                                    text: (0, h.jsx)(eX.A, { id: 'family.go-to-music' }),
                                    onClick: a,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_BUTTON_FINISH,
                                }),
                            }),
                        ],
                    });
                }),
                aR = { [ap._.INFO]: (0, h.jsx)(aM, {}), [ap._.SUCCESS]: (0, h.jsx)(aw, {}) },
                aD = (0, y.PA)(() => {
                    let {
                            familyInvite: { modal: e, step: t, hasError: a },
                        } = (0, T.g)(),
                        i = av(),
                        l = (0, g.useCallback)(
                            (t) => {
                                (t || i(), e.onOpenChange(t));
                            },
                            [i, e],
                        ),
                        n = (0, g.useMemo)(() => (a ? (0, h.jsx)(af, {}) : aR[t]), [a, t]);
                    return (0, h.jsx)(t1, {
                        open: e.isOpened,
                        hasError: a,
                        onOpenChange: l,
                        onClose: i,
                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL,
                        children: n,
                    });
                });
            var aB = a(30282),
                aF = a(9630),
                aU = a(44236),
                az = a(30688),
                aW = (function (e) {
                    return ((e.RU = 'ru'), (e.BY = 'by'), (e.KZ = 'kz'), (e.UZ = 'uz'), (e.KG = 'kg'), (e.AZ = 'az'), (e.AM = 'am'), (e.GE = 'ge'), (e.TR = 'tr'), e);
                })({}),
                aV = (function (e) {
                    return ((e.RU = 'ru'), (e.BY = 'by'), (e.OTHER = 'other'), e);
                })({});
            let aK = { [aW.RU]: aV.RU, [aW.BY]: aV.BY };
            var aY = a(3005),
                aH = a.n(aY),
                aq = a(72110),
                aQ = a.n(aq),
                a$ = a(50180),
                aG = a.n(a$);
            let aZ = (e) => {
                let { className: t, children: a, ...i } = e;
                return (0, h.jsxs)('section', {
                    className: (0, eO.$)(aG().root, t),
                    ...i,
                    children: [
                        (0, h.jsx)(ec.DZ, {
                            className: aG().title,
                            variant: 'h2',
                            size: 'xxl',
                            children: (0, h.jsx)(eX.A, { id: 'faq.title', values: { nbsp: '\xa0' } }),
                        }),
                        (0, h.jsx)('div', { className: aG().content, children: a }),
                    ],
                });
            };
            var aX = a(74743),
                aJ = a.n(aX);
            let a0 = (e) => {
                let { children: t } = e;
                return (0, h.jsx)(ec.HL, { className: aJ().root, variant: 'span', size: 'l', weight: 'normal', children: t });
            };
            var a1 = a(16967),
                a2 = a(38709),
                a4 = a.n(a2);
            let a8 = (e) => {
                let { className: t, isCollapsed: a } = e;
                return (0, h.jsx)('div', { className: (0, eO.$)(a4().root, { [a4().root_collapsed]: a }, t) });
            };
            var a3 = a(43453),
                a5 = a.n(a3);
            let a6 = {
                    exit: a5().answerContainer_exit,
                    exitActive: a5().answerContainer_exit_active,
                    enter: a5().answerContainer_enter,
                    enterActive: a5().answerContainer_enter_active,
                },
                a9 = (e) => {
                    let { question: t, answer: a, questionDataTestId: i, answerDataTestId: l } = e,
                        { state: n, toggle: r } = (0, eb.e)(!0),
                        s = (0, g.useRef)(null);
                    return (0, h.jsxs)('div', {
                        className: a5().root,
                        children: [
                            (0, h.jsxs)(Q.$, {
                                className: a5().questionContainer,
                                withRipple: !1,
                                withHover: !1,
                                variant: 'text',
                                onClick: r,
                                'aria-expanded': !n,
                                'data-test-id': i,
                                children: [t, (0, h.jsx)(a8, { className: a5().questionCollapse, isCollapsed: n })],
                            }),
                            (0, h.jsx)(a1.A, {
                                nodeRef: s,
                                in: !n,
                                timeout: 300,
                                classNames: a6,
                                unmountOnExit: !0,
                                children: (0, h.jsx)('div', {
                                    className: a5().answerContainer,
                                    ref: s,
                                    'data-test-id': l,
                                    children: (0, h.jsx)('div', { className: a5().answer, children: a }),
                                }),
                            }),
                        ],
                    });
                };
            var a7 = a(90503),
                ie = a.n(a7);
            let it = (e) => {
                    let { children: t } = e;
                    return (0, h.jsx)(ec.HL, { className: ie().root, variant: 'span', size: 'm', children: t });
                },
                ia = (e) => {
                    let { className: t, faqProps: a, variant: i } = e,
                        { location: l } = (0, T.g)(),
                        n = {
                            cancelUntilEndQuestion: (0, h.jsx)(eX.A, { id: 'paywall.faq-question-cancel-until-end-other-countries', values: { nbsp: ' ' } }),
                            cancelUntilEndStep1Link: (0, h.jsx)(eX.A, { id: 'paywall.faq-answer-cancel-until-end-step-1-link-other-countries' }),
                            cancelUntilEndStep2: (0, h.jsx)(eX.A, { id: 'paywall.faq-answer-cancel-until-end-step-2-other-countries', values: { nbsp: ' ' } }),
                            afraidForgetCancel: (0, h.jsx)(eX.A, { id: 'paywall.faq-question-afraid-forget-cancel-other-countries', values: { nbsp: ' ' } }),
                            whereElseSubscribe: (0, h.jsx)(eX.A, { id: 'paywall.faq-question-where-else-subscribe-other-countries', values: { nbsp: ' ' } }),
                        };
                    i === aV.RU &&
                        ((n.cancelUntilEndQuestion = (0, h.jsx)(eX.A, { id: 'paywall.faq-question-cancel-until-end', values: { nbsp: ' ' } })),
                        (n.cancelUntilEndStep1Link = (0, h.jsx)(eX.A, { id: 'paywall.faq-answer-cancel-until-end-step-1-link' })),
                        (n.cancelUntilEndStep2 = (0, h.jsx)(eX.A, { id: 'paywall.faq-answer-cancel-until-end-step-2', values: { nbsp: ' ' } })),
                        (n.afraidForgetCancel = (0, h.jsx)(eX.A, { id: 'paywall.faq-question-afraid-forget-cancel', values: { nbsp: ' ' } })),
                        (n.whereElseSubscribe = (0, h.jsx)(eX.A, { id: 'paywall.faq-question-where-else-subscribe', values: { nbsp: ' ' } })));
                    let r = {
                        nbsp: '\xa0',
                        steps: (0, h.jsxs)('ul', {
                            className: aJ().list,
                            children: [
                                (0, h.jsx)('li', {
                                    className: aJ().listITem,
                                    children: (0, h.jsx)(eX.A, {
                                        id: 'paywall.faq-answer-cancel-until-end-step-1',
                                        values: {
                                            link: (0, h.jsx)(aj.N, {
                                                className: aJ().link,
                                                href: 'http://plus.yandex.'.concat(l.tld, '/my'),
                                                target: '_blank',
                                                children: n.cancelUntilEndStep1Link,
                                            }),
                                        },
                                    }),
                                }),
                                (0, h.jsx)('li', { className: aJ().listITem, children: n.cancelUntilEndStep2 }),
                            ],
                        }),
                    };
                    return (0, h.jsxs)(aZ, {
                        className: t,
                        ...a,
                        'data-test-id': q.e8.paywall.PAYWALL_FAQ_SECTION,
                        children: [
                            (0, h.jsx)(a9, {
                                question: (0, h.jsx)(it, { children: (0, h.jsx)(eX.A, { id: 'paywall.faq-question-without-card-binding' }) }),
                                answer: (0, h.jsx)(a0, { children: (0, h.jsx)(eX.A, { id: 'paywall.faq-answer-without-card-binding', values: { nbsp: '\xa0' } }) }),
                                questionDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_DEMO_PERIOD_QUESTION,
                                answerDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_DEMO_PERIOD_ANSWER,
                            }),
                            (0, h.jsx)(a9, {
                                question: (0, h.jsx)(it, { children: n.afraidForgetCancel }),
                                answer: (0, h.jsx)(a0, { children: (0, h.jsx)(eX.A, { id: 'paywall.faq-answer-afraid-forget-cancel', values: { nbsp: '\xa0' } }) }),
                                questionDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_FORGET_CANCEL_SUB_QUESTION,
                                answerDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_FORGET_CANCEL_SUB_ANSWER,
                            }),
                            (0, h.jsx)(a9, {
                                question: (0, h.jsx)(it, { children: n.cancelUntilEndQuestion }),
                                answer: (0, h.jsx)(a0, {
                                    children:
                                        i === aV.RU
                                            ? (0, h.jsx)(eX.A, { id: 'paywall.faq-answer-cancel-until-end', values: r })
                                            : (0, h.jsx)(eX.A, { id: 'paywall.faq-answer-cancel-until-end-other-countries', values: r }),
                                }),
                                questionDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_CAN_CANCEL_SUB_QUESTION,
                                answerDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_CAN_CANCEL_SUB_ANSWER,
                            }),
                            !1,
                        ],
                    });
                };
            var ii = a(99839),
                il = a(88178),
                ir = a.n(il);
            let is = (0, y.PA)((e) => {
                    let { links: t, ageRestriction: a } = e,
                        { location: i } = (0, T.g)(),
                        { language: l } = (0, tP.h)(),
                        { formatDate: n } = (0, H.A)();
                    return (0, h.jsxs)('footer', {
                        className: ir().root,
                        'data-test-id': q.e8.paywall.PAYWALL_FOOTER,
                        children: [
                            (0, h.jsx)('ul', {
                                className: (0, eO.$)(ir().list, ir().list_primary),
                                children: t.map((e, t) => {
                                    let { href: a, text: i, testId: l } = e;
                                    return (0, h.jsx)(
                                        'li',
                                        {
                                            className: ir().item,
                                            'data-test-id': l,
                                            children: (0, h.jsx)(aj.N, {
                                                className: (0, eO.$)(ir().link, ir().important),
                                                href: a,
                                                children: (0, h.jsx)(ec.HL, { type: 'controls', variant: 'span', size: 'l', weight: 'medium', children: i }),
                                            }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, h.jsxs)('ul', {
                                className: (0, eO.$)(ir().list, ir().list_secondary),
                                children: [
                                    (0, h.jsx)('li', {
                                        className: ir().item,
                                        'data-test-id': q.e8.paywall.PAYWALL_FOOTER_ITEM_YANDEX_LINK,
                                        children: (0, h.jsx)(aj.N, {
                                            className: (0, eO.$)(ir().link, ir().important),
                                            target: '_blank',
                                            href: 'https://ya.'.concat(i.tld),
                                            children: (0, h.jsxs)(ec.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'l',
                                                weight: 'medium',
                                                children: ['\xa9', ' 2018–', n(new Date(), (0, ii.m)()), '\xa0', (0, h.jsx)(eX.A, { id: 'footer.yandex-music' })],
                                            }),
                                        }),
                                    }),
                                    (0, h.jsxs)('li', {
                                        className: ir().item,
                                        'data-test-id': q.e8.paywall.PAYWALL_FOOTER_ITEM_ALL_PROJECTS_LINK,
                                        children: [
                                            (0, h.jsx)(aj.N, {
                                                className: (0, eO.$)(ir().link, ir().important),
                                                target: '_blank',
                                                href: 'https://yandex.'.concat(i.tld, '/all?lang=').concat(l),
                                                children: (0, h.jsx)(ec.HL, {
                                                    type: 'controls',
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    children: (0, h.jsx)(eX.A, { id: 'footer.yandex-project' }),
                                                }),
                                            }),
                                            (0, h.jsx)(ec.HL, {
                                                className: (0, eO.$)(ir().item, ir().ageRestriction),
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'l',
                                                weight: 'medium',
                                                children: a,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                io = (0, y.PA)((e) => {
                    let { variant: t } = e,
                        { location: a } = (0, T.g)(),
                        i =
                            t === aV.RU
                                ? (0, h.jsx)(eX.A, { id: 'paywall-footer.subscription-terms-link' })
                                : (0, h.jsx)(eX.A, { id: 'paywall-footer.subscription-terms-link-other-countries' });
                    return (0, h.jsx)(is, {
                        ageRestriction: '0+',
                        links: [
                            { href: 'https://yandex.'.concat(a.tld, '/legal/yandex_plus_conditions/'), text: i, testId: q.e8.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_SUB },
                            {
                                href: 'https://yandex.'.concat(a.tld, '/legal/yandex_plus_privilege_list'),
                                text: (0, h.jsx)(eX.A, { id: 'paywall-footer.privileges-terms-link' }),
                                testId: q.e8.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_PRIVILEGE,
                            },
                            {
                                href: 'https://yandex.'.concat(a.tld, '/legal/plus_loyalty/'),
                                text: (0, h.jsx)(eX.A, { id: 'paywall-footer.cashback-terms-link' }),
                                testId: q.e8.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_CASHBACK,
                            },
                            {
                                href: 'https://yandex.'.concat(a.tld, '/legal/plus_generalrules/'),
                                text: (0, h.jsx)(eX.A, { id: 'paywall-footer.promotion-terms-link' }),
                                testId: q.e8.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_PROMO,
                            },
                            {
                                href: 'https://yandex.'.concat(a.tld, '/support/plus'),
                                text: (0, h.jsx)(eX.A, { id: 'paywall-footer.support-link' }),
                                testId: q.e8.paywall.PAYWALL_FOOTER_ITEM_SUPPORT,
                            },
                        ],
                    });
                });
            var ic = a(61386),
                id = a.n(ic);
            let iu = (e) => {
                let { variant: t = 'horizontal', className: a, text: i, imageAlign: l = 'center', imageSrc: n, image2xSrc: r, ...s } = e;
                return (0, h.jsxs)('div', {
                    className: (0, eO.$)(id().root, id()['root_'.concat(t)], a),
                    ...(0, ea.OZ)(s),
                    children: [
                        (0, h.jsx)('div', {
                            className: id().textContainer,
                            children: (0, h.jsx)(ec.DZ, { variant: 'h3', size: 'xl', className: id().text, children: i }),
                        }),
                        (0, h.jsx)('div', {
                            className: (0, eO.$)(id().imageContainer, id()['imageContainer_align_'.concat(l)]),
                            children: (0, h.jsx)(tV._V, {
                                className: id().image,
                                src: n,
                                srcSet: r ? ''.concat(r, ' 2x') : void 0,
                                fit: 'horizontal' === t ? 'cover' : 'none',
                                'aria-hidden': !0,
                            }),
                        }),
                    ],
                });
            };
            var i_ = a(5045),
                im = a.n(i_);
            let ip = (e) => {
                let { id: t, className: a, contentClassName: i, heading: l, content: n, ...r } = e;
                return (0, h.jsxs)('section', {
                    className: (0, eO.$)(im().root, a),
                    id: t,
                    ...(0, ea.OZ)(r),
                    children: [
                        (0, h.jsx)('div', { className: im().headingContainer, children: l }),
                        (0, h.jsx)('div', { className: (0, eO.$)(im().contentContainer, i), children: n }),
                    ],
                });
            };
            var iv = a(44057),
                ix = a.n(iv);
            let ih = {
                    [aV.RU]: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.66743ac814d05542b9b518b4/orig',
                    [aV.BY]: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.66b2317aaf6bde7f5d486c61/orig',
                },
                iy = {
                    [aV.RU]: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66743aea14d05542b9b518b6/orig',
                    [aV.BY]: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.66b2317caf6bde7f5d486c62/orig',
                },
                iC = (e) => {
                    let { className: t, variant: a = aV.RU } = e,
                        i = (0, tZ.j)();
                    return (0, h.jsx)(ip, {
                        className: t,
                        contentClassName: ix()['content_'.concat(a)],
                        heading: (0, h.jsxs)(h.Fragment, {
                            children: [
                                (0, h.jsx)($.I, { variant: 'kinopoisk'.concat(i), className: ix()['logo_'.concat(i.toLocaleLowerCase())] }),
                                (0, h.jsx)(tK.q, { children: (0, h.jsx)(ec.DZ, { variant: 'h2', children: (0, h.jsx)(eX.A, { id: 'paywall.kinopoisk-part-title' }) }) }),
                            ],
                        }),
                        content: (0, h.jsxs)(h.Fragment, {
                            children: [
                                (0, h.jsx)(iu, {
                                    className: ix().card1,
                                    variant: 'vertical',
                                    text: (0, h.jsx)(eX.A, { id: 'paywall.kinopoisk-part-benefit-movies', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: ih[a],
                                    image2xSrc: iy[a],
                                    'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_CHOOSE_FILM,
                                }),
                                (0, h.jsx)(iu, {
                                    className: ix().card2,
                                    text: (0, h.jsx)(eX.A, { id: 'paywall.kinopoisk-part-benefit-exclusive', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.66743b78de307e536b5852ba/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.66743b96de307e536b5852bc/orig',
                                    'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_WATCH_EXCLUSIVES,
                                }),
                                a === aV.RU &&
                                    (0, h.jsx)(iu, {
                                        className: ix().card3,
                                        text: (0, h.jsx)(eX.A, { id: 'paywall.kinopoisk-part-benefit-sport', values: { br: '\n', nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.66743e3514d05542b9b518ff/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/34161/img.66743e5514d05542b9b51902/orig',
                                        'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_WATCH_SPORT,
                                    }),
                                (0, h.jsx)(iu, {
                                    className: ix().card4,
                                    variant: 'vertical',
                                    text: (0, h.jsx)(eX.A, { id: 'paywall.kinopoisk-part-benefit-channels', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageAlign: 'right',
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.66743c3c14d05542b9b518f8/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.66743c5514d05542b9b518fa/orig',
                                    'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_MANY_CHANNELS,
                                }),
                            ],
                        }),
                        'data-test-id': q.e8.paywall.PAYWALL_KINOPOISK_SECTION,
                    });
                };
            var ig = a(65453),
                ib = a(47998),
                iA = a.n(ib);
            let ij = 'content-anchor',
                iT = (e) => {
                    let { className: t, shouldShowLabel: a = !0, anchorId: i = ij, children: l } = e;
                    return (0, h.jsxs)(ig.N, {
                        className: (0, eO.$)(iA().root, t),
                        href: '#'.concat(i),
                        role: 'button',
                        children: [
                            (0, h.jsx)('div', { className: iA().content, children: l }),
                            a && (0, h.jsx)(ec.HL, { variant: 'span', children: (0, h.jsx)(eX.A, { id: 'paywall.more-info', values: { nbsp: '\xa0' } }) }),
                            (0, h.jsx)($.I, { variant: 'arrowDown', size: 'xs' }),
                        ],
                    });
                };
            var iN = a(6133),
                iI = a.n(iN);
            let ik = (e) => {
                let { className: t, variant: a = aV.RU } = e,
                    i = (0, tZ.j)(),
                    l = (0, g.useMemo)(
                        () =>
                            a === aV.RU
                                ? (0, h.jsx)(eX.A, { id: 'paywall.music-part-benefit-books', values: { br: '\n', nbsp: '\xa0' } })
                                : (0, h.jsx)(eX.A, { id: 'paywall.music-part-benefit-books-alternative', values: { br: '\n', nbsp: '\xa0' } }),
                        [a],
                    );
                return (0, h.jsx)(ip, {
                    id: ij,
                    className: t,
                    contentClassName: iI().content,
                    heading: (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)($.I, { variant: 'musicLogoCenter'.concat(i), className: iI()['logo_'.concat(i.toLocaleLowerCase())] }),
                            (0, h.jsx)(tK.q, {
                                children: (0, h.jsx)(ec.DZ, { variant: 'h2', children: (0, h.jsx)(eX.A, { id: 'paywall.music-part-title', values: { nbsp: '\xa0' } }) }),
                            }),
                        ],
                    }),
                    content: (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)(iu, {
                                className: iI().card,
                                variant: 'vertical',
                                text: (0, h.jsx)(eX.A, { id: 'paywall.music-part-benefit-recommendations', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.6672d19b5a94b319a48169ce/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/34161/img.6672b094f164645e9c012622/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_FIND_INTERESTING,
                            }),
                            (0, h.jsx)(iu, {
                                className: iI().card,
                                text: (0, h.jsx)(eX.A, { id: 'paywall.music-part-benefit-many-devices', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.6672d53cef7546320ecbe015/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.6672d45cff447523654b51a4/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_SMART_RECOMENDATIONS,
                            }),
                            (0, h.jsx)(iu, {
                                className: iI().card,
                                text: (0, h.jsx)(eX.A, { id: 'paywall.music-part-benefit-without-internet', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.6703f9237733220b25bd3744/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6703f91a37dd1d4ade86c11a/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_LISTEN_WITHOUT_INTERNET,
                            }),
                            (0, h.jsx)(iu, {
                                className: iI().card,
                                text: (0, h.jsx)(eX.A, { id: 'paywall.music-part-benefit-playlists', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.66740bd5ff447523654b56e3/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.66740bb7ff447523654b56b7/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_MAKE_COLLECTIONS,
                            }),
                            (0, h.jsx)(iu, {
                                className: iI().card,
                                variant: 'vertical',
                                text: l,
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/34161/img.6674522214d05542b9b51983/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.6674527a14d05542b9b51985/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_LISTEN_AUDIOBOKS,
                            }),
                        ],
                    }),
                    'data-test-id': q.e8.paywall.PAYWALL_MUSIC_SECTION,
                });
            };
            var iS = a(78826),
                iL = a.n(iS);
            let iE = (e) => {
                let { className: t, variant: a = aV.RU } = e,
                    i = (0, tZ.j)();
                return (0, h.jsx)(ip, {
                    className: t,
                    contentClassName: iL()['content_'.concat(a)],
                    heading: (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)($.I, { variant: 'yandexPlus'.concat(i), className: iL()['logo_'.concat(i.toLocaleLowerCase())] }),
                            (0, h.jsx)(tK.q, {
                                children: (0, h.jsx)(ec.DZ, { variant: 'h2', children: (0, h.jsx)(eX.A, { id: 'paywall.plus-part-title', values: { nbsp: '\xa0' } }) }),
                            }),
                        ],
                    }),
                    content: (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)(iu, {
                                className: iL().card,
                                text: (0, h.jsx)(eX.A, { id: 'paywall.plus-part-benefit-family', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.66756428fda47e2147b8b478/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.66756449fda47e2147b8b47a/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_ADD_CLOSES,
                            }),
                            (0, h.jsx)(iu, {
                                className: iL().card,
                                variant: 'vertical',
                                text: (0, h.jsx)(eX.A, { id: 'paywall.plus-part-benefit-devices', values: { br: '\n' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66f29c21b8a7ae33ed006e72/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/29541/img.66f292cc89f5b04b855a8040/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_ADD_CLOSES,
                            }),
                            a === aV.RU &&
                                (0, h.jsxs)(h.Fragment, {
                                    children: [
                                        (0, h.jsx)(iu, {
                                            className: iL().card,
                                            variant: 'vertical',
                                            text: (0, h.jsx)(eX.A, { id: 'paywall.plus-part-spend-points', values: { br: '\n', nbsp: '\xa0' } }),
                                            imageAlign: 'right',
                                            imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eebcc48f03fb5a1cf861dd/orig',
                                            image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eebcd66fc33b70f1711a33/orig',
                                            'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_SPEND_POINTS,
                                        }),
                                        (0, h.jsx)(iu, {
                                            className: iL().card,
                                            text: (0, h.jsx)(eX.A, { id: 'paywall.plus-part-benefit-options', values: { br: '\n', nbsp: '\xa0' } }),
                                            imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eebd405566813399938420/orig',
                                            image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.68eebd498f03fb5a1cf861df/orig',
                                            'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_BENEFIT_OPTIONS,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    'data-test-id': q.e8.paywall.PAYWALL_PLUS_SECTION,
                });
            };
            var iM = a(53405),
                iP = a(8840),
                iO = a(61304),
                iw = a.n(iO);
            let iR = {
                    exit: iw().stickyContainer_exit,
                    exitActive: iw().stickyContainer_exit_active,
                    enter: iw().stickyContainer_enter,
                    enterActive: iw().stickyContainer_enter_active,
                },
                iD = 'buy-subscription-block-button-container',
                iB = 'buy-subscription-block-first-button',
                iF = 'buy-subscription-block-second-button',
                iU = (0, y.PA)((e) => {
                    var t;
                    let { className: a, shouldShowFixed: i, place: l, hasColumnLayout: n } = e,
                        r = (0, g.useRef)(null),
                        [s, o] = (0, tW.d)(),
                        [c, d] = (0, tW.d)(),
                        { user: u } = (0, T.g)(),
                        _ = (0, tQ.D)({ storeName: 'music', place: l || tq.R.BLOCK_1, offerElement: { element: s, intersectionPropertyId: iB } }),
                        m = (0, tQ.D)({ storeName: 'music', place: tq.R.BLOCK_2, offerElement: { element: c, intersectionPropertyId: iF } }),
                        p = (0, g.useRef)(null),
                        [v, x] = (0, g.useState)(),
                        [y, C] = (0, g.useState)(!1),
                        { isIntersecting: b } = null != (t = (0, iP.BL)([r], { preflightCheck: !1 }, !i)[iD]) ? t : {},
                        A = (0, g.useCallback)(() => {
                            if (!u.isAuthorized) return void _.saveOfferAndAuthorize();
                            _.openPaymentWidgetModal();
                        }, [u.isAuthorized, _]),
                        f = (0, g.useCallback)(() => {
                            if (!u.isAuthorized) return void m.saveOfferAndAuthorize();
                            m.openPaymentWidgetModal();
                        }, [u.isAuthorized, m]);
                    ((0, g.useEffect)(() => {
                        if (!b) {
                            var e;
                            x(null == (e = r.current) ? void 0 : e.closest('[data-buy-subscription-block-portal]'));
                        }
                    }, [b]),
                        (0, g.useEffect)(() => {
                            i &&
                                setTimeout(() => {
                                    C(!0);
                                }, 300);
                        }, [i, C]));
                    let j = void 0 !== m.mainText,
                        N = i && v,
                        I = !!(N && !b && y);
                    return (0, h.jsxs)('div', {
                        className: (0, eO.$)(iw().root, a, { [iw().root_withSecondButton]: j }),
                        children: [
                            (0, h.jsxs)('div', {
                                ref: r,
                                className: (0, eO.$)(iw().buttonContainer, { [iw().buttonContainer_columnLayout]: n }),
                                'data-intersection-property-id': iD,
                                children: [
                                    (0, h.jsxs)(Q.$, {
                                        isBlock: !0,
                                        radius: 'xxxl',
                                        size: 'l',
                                        color: 'plus',
                                        className: iw().button,
                                        ref: o,
                                        onClick: A,
                                        'aria-label': _.mainTextA11y,
                                        'data-intersection-property-id': iB,
                                        'data-test-id': q.e8.paywall.PAYWALL_OFFER_BUTTON,
                                        children: [
                                            (0, h.jsx)(ec.HL, { className: iw().text_main, variant: 'div', size: 'l', children: _.mainText }),
                                            _.additionText && (0, h.jsx)(ec.HL, { className: iw().text_addition, variant: 'div', size: 'm', children: _.additionText }),
                                        ],
                                    }),
                                    j &&
                                        (0, h.jsxs)(Q.$, {
                                            isBlock: !0,
                                            radius: 'xxxl',
                                            size: 'l',
                                            color: 'secondary',
                                            className: iw().button,
                                            ref: d,
                                            onClick: f,
                                            'aria-label': m.mainTextA11y,
                                            'data-intersection-property-id': iF,
                                            'data-test-id': q.e8.paywall.PAYWALL_SECOND_OFFER_BUTTON,
                                            children: [
                                                (0, h.jsx)(ec.HL, { className: iw().text_main, variant: 'div', size: 'l', children: m.mainText }),
                                                m.additionText &&
                                                    (0, h.jsx)(ec.HL, { className: iw().text_addition, variant: 'div', size: 'm', children: m.additionText }),
                                            ],
                                        }),
                                ],
                            }),
                            _.disclaimerText &&
                                (0, h.jsx)(ec.HL, {
                                    className: iw().text_secondary,
                                    variant: 'div',
                                    size: 's',
                                    weight: 'normal',
                                    'aria-label': _.disclaimerTextA11y,
                                    'data-test-id': q.e8.paywall.PAYWALL_OFFER_DISCLAIMER_TEXT,
                                    children: _.disclaimerText,
                                }),
                            N &&
                                (0, iM.createPortal)(
                                    (0, h.jsx)(a1.A, {
                                        in: I,
                                        nodeRef: p,
                                        timeout: 300,
                                        classNames: iR,
                                        unmountOnExit: !0,
                                        'data-test-id': q.e8.paywall.PAYWALL_BUY_SUBSCRIPTION_BLOCK_FLOATING,
                                        children: (0, h.jsx)('div', {
                                            className: iw().stickyContainer,
                                            'aria-hidden': !0,
                                            ref: p,
                                            children: (0, h.jsx)(iU, { place: tq.R.BOTTOM_BUTTON }),
                                        }),
                                    }),
                                    v,
                                ),
                        ],
                    });
                });
            iU.displayName = 'BuySubscriptionBlock';
            var iz = a(60413),
                iW = a.n(iz);
            let iV = (e) => {
                let { className: t } = e;
                return (0, h.jsx)('section', {
                    className: (0, eO.$)(iW().root, t),
                    children: (0, h.jsx)('div', {
                        className: iW().wrapper,
                        children: (0, h.jsxs)('div', {
                            className: iW().content,
                            children: [
                                (0, h.jsx)(ec.DZ, {
                                    variant: 'h1',
                                    size: 'xxl',
                                    className: iW().title,
                                    children: (0, h.jsx)(eX.A, { id: 'paywall.music-on-many-devices', values: { nbsp: '\xa0' } }),
                                }),
                                (0, h.jsx)(ec.HL, {
                                    variant: 'div',
                                    size: 'l',
                                    weight: 'normal',
                                    className: iW().label,
                                    children: (0, h.jsx)(eX.A, { id: 'paywall.recommendations-on-devices', values: { nbsp: '\xa0' } }),
                                }),
                                (0, h.jsx)(iU, { className: iW().buySubscriptionBlock, shouldShowFixed: !0, hasColumnLayout: !0 }),
                            ],
                        }),
                    }),
                });
            };
            var iK = a(43002),
                iY = a.n(iK);
            let iH = () =>
                (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsx)(iV, { className: iY().topSection }),
                        (0, h.jsx)(ik, { className: aH().section, variant: aV.BY }),
                        (0, h.jsx)(iC, { className: aH().section, variant: aV.BY }),
                        (0, h.jsx)(iE, { className: aH().section, variant: aV.BY }),
                        (0, h.jsx)(ia, { className: aH().section_faq }),
                        (0, h.jsx)(io, {}),
                    ],
                });
            var iq = a(6554),
                iQ = a.n(iq);
            let i$ = (e) => {
                let { className: t, text: a, imageSrc: i, image2xSrc: l } = e;
                return (0, h.jsxs)('div', {
                    className: (0, eO.$)(iQ().root, t),
                    children: [
                        (0, h.jsx)(tV._V, { className: iQ().image, src: i, srcSet: l ? ''.concat(l, ' 2x') : void 0, fit: 'cover', 'aria-hidden': !0 }),
                        (0, h.jsx)(ec.HL, { className: iQ().text, variant: 'span', size: 'l', weight: 'medium', children: a }),
                    ],
                });
            };
            var iG = a(9219),
                iZ = a.n(iG);
            let iX = (e) => {
                let { id: t, className: a, contentClassName: i, heading: l, content: n } = e;
                return (0, h.jsxs)('section', {
                    className: (0, eO.$)(iZ().root, a),
                    id: t,
                    children: [
                        (0, h.jsx)('div', { className: iZ().headingContainer, children: l }),
                        (0, h.jsx)('div', { className: (0, eO.$)(iZ().contentContainer, i), children: n }),
                    ],
                });
            };
            var iJ = a(10935),
                i0 = a.n(iJ);
            let i1 = {
                    [aV.RU]: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66743f6a14d05542b9b51906/orig',
                    [aV.BY]: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.66b240550e8bdd7a18b0d48f/orig',
                },
                i2 = {
                    [aV.RU]: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.667440e414d05542b9b5192c/orig',
                    [aV.BY]: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.66b240560e8bdd7a18b0d490/orig',
                },
                i4 = {
                    [aV.RU]: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.66744288699ba338f5126199/orig',
                    [aV.BY]: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.66b240db0e8bdd7a18b0d493/orig',
                },
                i8 = {
                    [aV.RU]: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.667442a8699ba338f512619b/orig',
                    [aV.BY]: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.66b240da0e8bdd7a18b0d492/orig',
                },
                i3 = (e) => {
                    let { className: t, variant: a = aV.RU } = e,
                        i = (0, tZ.j)();
                    return (0, h.jsx)('div', {
                        'data-test-id': q.e8.paywall.MOBILE_PAYWALL_KINOPOISK_SECTION,
                        children: (0, h.jsx)(iX, {
                            className: t,
                            contentClassName: i0()['content_'.concat(a)],
                            heading: (0, h.jsxs)(h.Fragment, {
                                children: [
                                    (0, h.jsx)($.I, { variant: 'kinopoisk'.concat(i), className: i0()['logo_'.concat(i.toLocaleLowerCase())] }),
                                    (0, h.jsx)(tK.q, {
                                        children: (0, h.jsx)(ec.DZ, { variant: 'h2', children: (0, h.jsx)(eX.A, { id: 'paywall.kinopoisk-part-title' }) }),
                                    }),
                                ],
                            }),
                            content: (0, h.jsxs)(h.Fragment, {
                                children: [
                                    (0, h.jsx)(i$, {
                                        className: i0().card1,
                                        text: (0, h.jsx)(eX.A, { id: 'paywall.kinopoisk-part-benefit-movies', values: { br: '\n', nbsp: '\xa0' } }),
                                        imageSrc: i1[a],
                                        image2xSrc: i2[a],
                                    }),
                                    (0, h.jsx)(i$, {
                                        className: i0().card2,
                                        text: (0, h.jsx)(eX.A, { id: 'paywall.kinopoisk-part-benefit-exclusive', values: { br: '\n', nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.667441724ca5c169150d1473/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.667441934ca5c169150d1475/orig',
                                    }),
                                    a === aV.RU &&
                                        (0, h.jsx)(i$, {
                                            className: i0().card3,
                                            text: (0, h.jsx)(eX.A, { id: 'paywall.kinopoisk-part-benefit-sport', values: { br: '\n', nbsp: '\xa0' } }),
                                            imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.667441e54ca5c169150d1477/orig',
                                            image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.667441ff4ca5c169150d1479/orig',
                                        }),
                                    (0, h.jsx)(i$, {
                                        className: (0, eO.$)(i0().card4, i0()['card4_'.concat(a)]),
                                        text: (0, h.jsx)(eX.A, { id: 'paywall.kinopoisk-part-benefit-channels', values: { br: '\n', nbsp: '\xa0' } }),
                                        imageSrc: i4[a],
                                        image2xSrc: i8[a],
                                    }),
                                ],
                            }),
                        }),
                    });
                };
            var i5 = a(37003),
                i6 = a.n(i5);
            let i9 = (e) => {
                let { className: t, variant: a = aV.RU } = e,
                    i = (0, tZ.j)(),
                    l = (0, g.useMemo)(
                        () =>
                            a === aV.RU
                                ? (0, h.jsx)(eX.A, { id: 'paywall.music-part-benefit-books', values: { br: '\n', nbsp: '\xa0' } })
                                : (0, h.jsx)(eX.A, { id: 'paywall.music-part-benefit-books-alternative', values: { br: '\n', nbsp: '\xa0' } }),
                        [a],
                    );
                return (0, h.jsx)('div', {
                    'data-test-id': q.e8.paywall.MOBILE_PAYWALL_MUSIC_SECTION,
                    children: (0, h.jsx)(iX, {
                        id: ij,
                        className: t,
                        contentClassName: i6().content,
                        heading: (0, h.jsxs)(h.Fragment, {
                            children: [
                                (0, h.jsx)($.I, { variant: 'musicLogoCenter'.concat(i), className: i6()['logo_'.concat(i.toLocaleLowerCase())] }),
                                (0, h.jsx)(tK.q, {
                                    children: (0, h.jsx)(ec.DZ, {
                                        variant: 'h2',
                                        children: (0, h.jsx)(eX.A, { id: 'paywall.music-part-title', values: { nbsp: '\xa0' } }),
                                    }),
                                }),
                            ],
                        }),
                        content: (0, h.jsxs)(h.Fragment, {
                            children: [
                                (0, h.jsx)(i$, {
                                    className: i6().card,
                                    text: (0, h.jsx)(eX.A, { id: 'paywall.music-part-benefit-recommendations', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.667415134ca5c169150d135d/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.667415424ca5c169150d135f/orig',
                                }),
                                (0, h.jsx)(i$, {
                                    className: i6().card,
                                    text: (0, h.jsx)(eX.A, { id: 'paywall.music-part-benefit-many-devices', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.6674157e4ca5c169150d1361/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.667415a74ca5c169150d1364/orig',
                                }),
                                (0, h.jsx)(i$, {
                                    className: i6().card,
                                    text: (0, h.jsx)(eX.A, { id: 'paywall.music-part-benefit-playlists', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.667415d64ca5c169150d1366/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.667415f44ca5c169150d1368/orig',
                                }),
                                (0, h.jsx)(i$, {
                                    className: i6().card,
                                    text: (0, h.jsx)(eX.A, { id: 'paywall.music-part-benefit-without-internet-mobile', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.667417c14ca5c169150d1382/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.667417e14ca5c169150d1384/orig',
                                }),
                                (0, h.jsx)(i$, {
                                    className: i6().card,
                                    text: l,
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.667418304ca5c169150d1386/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.6674184e4ca5c169150d1388/orig',
                                }),
                            ],
                        }),
                    }),
                });
            };
            var i7 = a(83690),
                le = a.n(i7);
            let lt = (e) => {
                let { className: t, variant: a = aV.RU } = e,
                    i = (0, tZ.j)();
                return (0, h.jsx)('div', {
                    'data-test-id': q.e8.paywall.MOBILE_PAYWALL_PLUS_SECTION,
                    children: (0, h.jsx)(iX, {
                        className: t,
                        contentClassName: le()['content_'.concat(a)],
                        heading: (0, h.jsxs)(h.Fragment, {
                            children: [
                                (0, h.jsx)($.I, { variant: 'yandexPlus'.concat(i), className: le()['logo_'.concat(i.toLocaleLowerCase())] }),
                                (0, h.jsx)(tK.q, {
                                    children: (0, h.jsx)(ec.DZ, {
                                        variant: 'h2',
                                        children: (0, h.jsx)(eX.A, { id: 'paywall.plus-part-title', values: { nbsp: '\xa0' } }),
                                    }),
                                }),
                            ],
                        }),
                        content: (0, h.jsxs)(h.Fragment, {
                            children: [
                                (0, h.jsx)(i$, {
                                    className: le().card,
                                    text: (0, h.jsx)(eX.A, { id: 'paywall.plus-part-benefit-family', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/29541/img.667566fbcc842022e134a7ac/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.66756714cc842022e134a7ae/orig',
                                }),
                                (0, h.jsx)(i$, {
                                    className: le().card,
                                    text: (0, h.jsx)(eX.A, { id: 'paywall.plus-part-benefit-devices', values: { br: '\n' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/34161/img.67cade4deeed590a0d455116/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.67cade4beeed590a0d455115/orig',
                                }),
                            ],
                        }),
                    }),
                });
            };
            var la = a(83547),
                li = a.n(la);
            let ll = (e) => {
                let { className: t, moreInfoLinkProps: a } = e;
                return (0, h.jsxs)('section', {
                    className: (0, eO.$)(li().root, t),
                    children: [
                        (0, h.jsx)('div', { className: li().image }),
                        (0, h.jsxs)('div', {
                            className: li().content,
                            children: [
                                (0, h.jsx)(ec.DZ, {
                                    className: li().title,
                                    variant: 'h1',
                                    size: 'xl',
                                    weight: 'bold',
                                    children: (0, h.jsx)(eX.A, { id: 'paywall.music-on-many-devices', values: { nbsp: '\xa0' } }),
                                }),
                                (0, h.jsx)(ec.HL, {
                                    variant: 'div',
                                    size: 'l',
                                    children: (0, h.jsx)(eX.A, { id: 'paywall.recommendations-on-devices', values: { nbsp: '\xa0' } }),
                                }),
                                (0, h.jsx)(iU, { className: li().buySubscriptionBlock, shouldShowFixed: !0, hasColumnLayout: !0 }),
                                (0, h.jsx)(iT, { ...a, className: (0, eO.$)(li().moreInfoLink, null == a ? void 0 : a.className) }),
                            ],
                        }),
                    ],
                });
            };
            var ln = a(32021),
                lr = a.n(ln);
            let ls = () =>
                    (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)(ll, { className: lr().topSection }),
                            (0, h.jsx)(i9, { className: aH().section, variant: aV.BY }),
                            (0, h.jsx)(i3, { className: aH().section, variant: aV.BY }),
                            (0, h.jsx)(lt, { className: aH().section, variant: aV.BY }),
                            (0, h.jsx)(ia, { className: aH().section_faq }),
                            (0, h.jsx)(io, {}),
                        ],
                    }),
                lo = (0, y.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, T.g)();
                    return (0, h.jsx)('div', { className: aQ().root, children: e ? (0, h.jsx)(ls, {}) : (0, h.jsx)(iH, {}) });
                });
            var lc = a(96555),
                ld = a.n(lc);
            let lu = () =>
                (0, h.jsxs)('div', {
                    className: ld().root,
                    children: [(0, h.jsx)(iV, { className: ld().topSection }), (0, h.jsx)(ia, { className: aH().section_faq }), (0, h.jsx)(io, {})],
                });
            var l_ = a(16521),
                lm = a.n(l_);
            let lp = () =>
                    (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)(ll, { className: lm().topSection, moreInfoLinkProps: { shouldShowLabel: !1 } }),
                            (0, h.jsx)(ia, { faqProps: { id: ij } }),
                            (0, h.jsx)(io, {}),
                        ],
                    }),
                lv = (0, y.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, T.g)();
                    return e ? (0, h.jsx)(lp, {}) : (0, h.jsx)(lu, {});
                });
            var lx = a(67542),
                lh = a.n(lx),
                ly = a(34303);
            let lC = () => {
                let { experiments: e } = (0, T.g)(),
                    t = (0, t9.useSearchParams)().get(ly.K.UTM_MEDIUM),
                    a = e.checkExperiment(N.z.WebNextPaidPerformancePaywallTopSection, 'music_benefits') && 'paid_performance' === t;
                return e.checkExperiment(N.z.WebNextPaywallTopSection, 'music_benefits') || a;
            };
            var lg = a(46200),
                lb = a.n(lg);
            let lA = (e) => {
                let { className: t, variant: a = aV.RU } = e,
                    i = (0, tZ.j)();
                return (0, h.jsx)(ip, {
                    className: t,
                    contentClassName: lb()['content_'.concat(a)],
                    heading: (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)($.I, { variant: 'yandexBooks'.concat(i), className: lb()['logo_'.concat(i.toLocaleLowerCase())] }),
                            (0, h.jsx)(tK.q, {
                                children: (0, h.jsx)(ec.DZ, { variant: 'h2', children: (0, h.jsx)(eX.A, { id: 'paywall.books-part-title', values: { nbsp: '\xa0' } }) }),
                            }),
                        ],
                    }),
                    content: (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)(iu, {
                                className: lb().card,
                                text: (0, h.jsx)(eX.A, { id: 'paywall.books-part-benefit-app-desktop', values: { nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68c02cb364560d354cb53936/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.68c02ce6cccb5e758b864480/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_READ_IN_APP,
                            }),
                            (0, h.jsx)(iu, {
                                className: lb().card,
                                variant: 'vertical',
                                text: (0, h.jsx)(eX.A, { id: 'paywall.books-part-benefit-follow-desktop', values: { nbsp: '\xa0' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6a89798264a4b59f3a749/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66f6a890ed792c3f4a135a74/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_FIND_NEWS,
                            }),
                            (0, h.jsx)(iu, {
                                className: lb().card,
                                variant: 'vertical',
                                text: (0, h.jsx)(eX.A, { id: 'paywall.books-part-benefit-download-desktop', values: { nbsp: '\xa0' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66f6a8c8caf72c4bc9eaea8c/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.66f6a8bf4e6e980968aa844d/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_DOWNLOAD_BOOKS,
                            }),
                            (0, h.jsx)(iu, {
                                className: lb().card,
                                text: (0, h.jsx)(eX.A, { id: 'paywall.books-part-benefit-speed-desktop', values: { br: '\n' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68c02cbc9daf1b03347faca5/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68c02cdccccb5e758b86447e/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_CHOOSE_PASE,
                            }),
                        ],
                    }),
                    'data-test-id': q.e8.paywall.PAYWALL_BOOKS_SECTION,
                });
            };
            var lf = a(44924),
                lj = a.n(lf);
            let lT = (e) => {
                let { className: t, variant: a = aV.RU } = e;
                return (0, h.jsx)(ip, {
                    className: t,
                    contentClassName: lj()['content_'.concat(a)],
                    heading: (0, h.jsx)(ec.DZ, {
                        variant: 'h2',
                        className: lj().title,
                        children: (0, h.jsx)(eX.A, { id: 'paywall.other-services-part-title', values: { nbsp: '\xa0' } }),
                    }),
                    content: (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)(iu, {
                                className: lj().card,
                                variant: 'vertical',
                                imageAlign: 'right',
                                text: (0, h.jsx)(eX.A, { id: 'paywall.other-services-part-benefit-maps', values: { nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68eec5170c5fe5082085b079/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec52e94053d016bcd7bf3/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_MAPS,
                            }),
                            (0, h.jsx)(iu, {
                                className: lj().card,
                                text: (0, h.jsx)(eX.A, { id: 'paywall.other-services-part-benefit-your-plus', values: { nbsp: '\xa0' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec5408fcfeb05fbb439ec/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec547b510f9053778b2d0/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_YOUR_PLUS,
                            }),
                            (0, h.jsx)(iu, {
                                className: lj().card,
                                text: (0, h.jsx)(eX.A, { id: 'paywall.pay-part-benefit-split-desktop', values: { nbsp: '\xa0' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec5516fc33b70f1711a3a/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68eec558b510f9053778b2d2/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_DIVIDE_PAYMENT,
                            }),
                            (0, h.jsx)(iu, {
                                className: lj().card,
                                variant: 'vertical',
                                imageAlign: 'right',
                                text: (0, h.jsx)(eX.A, { id: 'paywall.other-services-part-save', values: { nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.68eec565d57d6359e4120722/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.68eec56e6fc33b70f1711a3c/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_TAKE_SAVES,
                            }),
                        ],
                    }),
                    'data-test-id': q.e8.paywall.PAYWALL_OTHER_SERVICES_SECTION,
                });
            };
            var lN = a(4370);
            function lI() {
                return (lI = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let lk = function (e) {
                return g.createElement(
                    'svg',
                    lI({ width: 64, height: 64, viewBox: '0 0 64 64', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    g.createElement(
                        'mask',
                        { id: 'mask0_1016_316950', style: { maskType: 'alpha' }, maskUnits: 'userSpaceOnUse', x: -1, y: 0, width: 65, height: 64 },
                        i || (i = g.createElement('circle', { cx: 31.6934, cy: 32, r: 32, fill: '#D9D9D9' })),
                    ),
                    l ||
                        (l = g.createElement(
                            'g',
                            { mask: 'url(#mask0_1016_316950)' },
                            g.createElement('path', { d: 'M17.9864 0V29.0933L0 16V0H17.9864Z', fill: 'url(#paint0_linear_1016_316950)' }),
                            g.createElement('path', { d: 'M58.2771 0L36.0641 16.04L17.9844 29.0933V0H58.2771Z', fill: 'url(#paint1_linear_1016_316950)' }),
                            g.createElement('path', { d: 'M63.9993 0V31.88L36.0664 39.36V16.04L58.2794 0H63.9993Z', fill: 'url(#paint2_linear_1016_316950)' }),
                            g.createElement('path', { d: 'M63.9993 31.8789V60.5189L36.0664 53.0389V39.3589L63.9993 31.8789Z', fill: 'url(#paint3_linear_1016_316950)' }),
                            g.createElement('path', { d: 'M63.9993 60.5191V63.9991H36.0664V53.0391L63.9993 60.5191Z', fill: 'url(#paint4_linear_1016_316950)' }),
                            g.createElement('path', { d: 'M36.0661 16.04V64H0V16L17.9864 29.0933L36.0661 16.04Z', fill: '#FFDAEA' }),
                            g.createElement('path', {
                                d: 'M27.0129 47.8395C24.8663 51.4394 21.5197 53.0261 18.013 53.0261C10.9998 53.0261 5.75991 48.0928 5.75991 40.6796C5.75991 40.6796 5.77324 39.6396 5.79991 39.3063L36.0661 39.3463V16.04L17.9864 29.0931L0 16V63.9992H36.0661V53.0394C32.5728 53.0261 29.3995 51.4394 27.0129 47.8528V47.8395ZM18.013 49.0128C21.5463 49.0128 23.7063 47.1862 23.9996 43.0662H11.1598C11.7198 46.7728 14.5864 49.0128 18.0264 49.0128H18.013ZM30.0262 43.0662H43.026C42.466 46.7728 39.4394 49.0128 35.9994 49.0128C32.5595 49.0128 30.3062 47.1862 30.0128 43.0662H30.0262Z',
                                fill: '#4D0000',
                            }),
                        )),
                    n ||
                        (n = g.createElement(
                            'defs',
                            null,
                            g.createElement(
                                'linearGradient',
                                { id: 'paint0_linear_1016_316950', x1: 8.99319, y1: 29.0933, x2: 8.99319, y2: -2.64766, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FFDAEA' }),
                                g.createElement('stop', { offset: 0.6, stopColor: '#FFB56F' }),
                                g.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                            g.createElement(
                                'linearGradient',
                                { id: 'paint1_linear_1016_316950', x1: 38.1307, y1: 29.0933, x2: 38.1307, y2: 0, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FFDAEA' }),
                                g.createElement('stop', { offset: 0.4, stopColor: '#FFB56F' }),
                                g.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                            g.createElement(
                                'linearGradient',
                                { id: 'paint2_linear_1016_316950', x1: 36.0664, y1: 19.68, x2: 63.9993, y2: 19.68, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FFDAEA' }),
                                g.createElement('stop', { offset: 0.4, stopColor: '#FFB56F' }),
                                g.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                            g.createElement(
                                'linearGradient',
                                { id: 'paint3_linear_1016_316950', x1: 36.0664, y1: 46.1989, x2: 67.0254, y2: 46.1989, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FFDAEA' }),
                                g.createElement('stop', { offset: 0.6, stopColor: '#FFB56F' }),
                                g.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                            g.createElement(
                                'linearGradient',
                                { id: 'paint4_linear_1016_316950', x1: 36.0664, y1: 58.5191, x2: 63.9993, y2: 58.5191, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FFDAEA' }),
                                g.createElement('stop', { offset: 0.4, stopColor: '#FFB56F' }),
                                g.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                        )),
                );
            };
            function lS() {
                return (lS = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let lL = function (e) {
                return g.createElement(
                    'svg',
                    lS({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 64 65', fill: 'none' }, e),
                    g.createElement(
                        'g',
                        { clipPath: 'url(#clip0_4165_10094)' },
                        r || (r = g.createElement('rect', { y: 0.5, width: 64, height: 64, rx: 32, fill: 'white' })),
                        s ||
                            (s = g.createElement('path', {
                                d: 'M18.4483 14.2142C21.818 11.7173 25.8007 10.2079 29.9516 9.83281V16.7015C27.2684 17.0494 24.7059 18.0767 22.5139 19.7009C19.7692 21.7347 17.7508 24.5968 16.7563 27.8649C15.7619 31.133 15.8441 34.6342 16.9909 37.8521C18.1376 41.0699 20.2881 43.8341 23.1252 45.7368C25.9624 47.6395 29.3359 48.58 32.7482 48.4197C36.1605 48.2594 39.4309 47.0066 42.0771 44.8462C44.7233 42.6859 46.6052 39.7322 47.4451 36.421C48.031 34.1114 48.0883 31.7131 47.6293 29.4009L53.3973 24.7639L53.3935 24.7265C54.9505 29.0095 55.1883 33.669 54.0643 38.1001C52.8644 42.8304 50.1761 47.0498 46.3958 50.1361C42.6155 53.2223 37.9434 55.012 33.0687 55.241C28.194 55.4701 23.3747 54.1264 19.3216 51.4083C15.2686 48.6901 12.1964 44.7414 10.5583 40.1444C8.92008 35.5475 8.80263 30.5458 10.2232 25.877C11.6438 21.2082 14.5273 17.1196 18.4483 14.2142Z',
                                fill: '#FCCA00',
                            })),
                        o ||
                            (o = g.createElement('path', {
                                d: 'M49.048 17.4203L49.0722 17.4808L45.2177 23.6027C43.8161 21.5255 41.9377 19.7966 39.7395 18.5728V32.5043C39.7395 36.7786 36.2744 40.2436 32.0001 40.2436C27.7258 40.2436 24.2607 36.7786 24.2607 32.5043C24.2607 28.2299 27.7258 24.7649 32.0001 24.7649C33.602 24.7649 35.0903 25.2516 36.325 26.0852V10.1518C41.3497 11.1183 45.7865 13.7369 49.048 17.4203Z',
                                fill: '#FC3F1D',
                            })),
                        g.createElement(
                            'mask',
                            { id: 'mask0_4165_10094', style: { maskType: 'alpha' }, maskUnits: 'userSpaceOnUse', x: 0, y: 0, width: 64, height: 65 },
                            c || (c = g.createElement('ellipse', { cx: 32, cy: 32.5, rx: 32, ry: 32, fill: 'white' })),
                        ),
                        d || (d = g.createElement('g', { mask: 'url(#mask0_4165_10094)' })),
                        u ||
                            (u = g.createElement(
                                'g',
                                { clipPath: 'url(#clip1_4165_10094)' },
                                g.createElement('rect', { width: 63.9999, height: 63.9999, transform: 'translate(0 0.5)', fill: 'black' }),
                                g.createElement('path', {
                                    d: 'M63.9999 10.0984L30.9887 27.7682L48.1919 10.0984L38.6559 10.0984L26.9439 26.3551V10.0984H19.2L19.2 54.8984H26.9439L26.9439 38.668L38.6559 54.8984H48.1919L31.4355 37.7842L63.9999 54.8984V46.5784L34.2988 34.6629L63.9999 36.6584V28.3384L34.487 30.2571L63.9999 18.4184V10.0984Z',
                                    fill: 'url(#paint0_radial_4165_10094)',
                                }),
                            )),
                    ),
                    _ ||
                        (_ = g.createElement(
                            'defs',
                            null,
                            g.createElement(
                                'radialGradient',
                                {
                                    id: 'paint0_radial_4165_10094',
                                    cx: 0,
                                    cy: 0,
                                    r: 1,
                                    gradientUnits: 'userSpaceOnUse',
                                    gradientTransform: 'translate(19.2 10.0984) rotate(45) scale(63.3567 63.3567)',
                                },
                                g.createElement('stop', { offset: 0.5, stopColor: '#FF5500' }),
                                g.createElement('stop', { offset: 1, stopColor: '#BBFF00' }),
                            ),
                            g.createElement('clipPath', { id: 'clip0_4165_10094' }, g.createElement('rect', { y: 0.5, width: 64, height: 64, rx: 32, fill: 'white' })),
                            g.createElement(
                                'clipPath',
                                { id: 'clip1_4165_10094' },
                                g.createElement('rect', { width: 63.9999, height: 63.9999, fill: 'white', transform: 'translate(0 0.5)' }),
                            ),
                        )),
                );
            };
            function lE() {
                return (lE = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let lM = function (e) {
                return g.createElement(
                    'svg',
                    lE({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 64 65', fill: 'none' }, e),
                    m ||
                        (m = g.createElement('path', {
                            d: 'M32 64.5C49.6731 64.5 64 50.1731 64 32.5C64 14.8269 49.6731 0.5 32 0.5C14.3269 0.5 0 14.8269 0 32.5C0 50.1731 14.3269 64.5 32 64.5Z',
                            fill: 'black',
                        })),
                    p ||
                        (p = g.createElement('path', {
                            d: 'M47.4516 28.882C47.4516 28.882 55.4213 40.0392 55.3875 40.1373C55.238 40.5644 55.0773 40.9858 54.9052 41.4016C54.8659 41.4963 44.9333 32.923 44.9333 32.923C44.9333 32.923 47.6607 51.2055 47.6067 51.2506C47.211 51.5751 46.8074 51.8884 46.3925 52.1882C46.3352 52.2298 40.4251 34.2786 40.4251 34.2786C40.4251 34.2786 32.1609 56.938 32.0912 56.9391C31.963 56.9413 31.8337 56.9425 31.7055 56.9425C31.2738 56.9425 30.8455 56.9312 30.4183 56.9098C30.3542 56.9064 35.3548 32.7697 35.3548 32.7697C35.3548 32.7697 11.8448 47.1679 11.8111 47.1239C11.4738 46.6867 11.1512 46.2382 10.8431 45.7773C10.8105 45.7289 31.3829 28.4233 31.3829 28.4233C31.384 28.4245 7.07582 26.9178 7.08594 26.8671C7.18937 26.3465 7.30854 25.8304 7.44345 25.3221C7.45581 25.2737 30.8084 23.4346 30.8084 23.4346C30.8084 23.4346 13.7594 14.1976 13.7999 14.1559C14.1495 13.7986 14.5104 13.4516 14.8814 13.1146C14.9264 13.0741 33.7022 19.3463 33.7022 19.3463C33.7022 19.3463 27.9247 6.91001 28.0293 6.89423C28.4509 6.83225 28.8747 6.78042 29.3031 6.73985C29.393 6.73196 39.121 18.1969 39.121 18.1969C39.121 18.1969 42.2306 8.93727 42.3228 8.98122C42.7635 9.18857 43.1975 9.40718 43.6236 9.63819C43.7034 9.68101 43.9709 19.7136 43.9709 19.7136C43.9709 19.7136 51.4842 16.2958 51.5022 16.3184C51.7641 16.6553 52.0182 16.999 52.2633 17.3506C52.279 17.3731 46.7737 23.829 46.7737 23.829C46.7737 23.829 56.4016 27.2728 56.4173 27.3629C56.4893 27.7697 56.5523 28.1788 56.604 28.5912C56.6141 28.6757 47.4516 28.882 47.4516 28.882Z',
                            fill: '#FED42B',
                        })),
                );
            };
            function lP() {
                return (lP = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let lO = function (e) {
                return g.createElement(
                    'svg',
                    lP({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 64 65', fill: 'none' }, e),
                    v ||
                        (v = g.createElement(
                            'g',
                            { clipPath: 'url(#clip0_4032_54517)' },
                            g.createElement('rect', { y: 0.5, width: 64, height: 64, rx: 32, fill: 'white' }),
                            g.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M64 32.5C64 50.1731 49.6731 64.5 32 64.5C14.3269 64.5 0 50.1731 0 32.5C0 14.8269 14.3269 0.5 32 0.5C35.4533 0.5 38.7788 1.04699 41.8946 2.05907L34.6013 24.5H13.303L10.7003 32.5H32.0013L25.7613 51.7H34.5613L40.8013 32.5H64ZM62.9919 24.5H43.4013L49.508 5.71001C56.0847 10.0168 60.9791 16.68 62.9919 24.5Z',
                                fill: 'url(#paint0_linear_4032_54517)',
                            }),
                        )),
                    x ||
                        (x = g.createElement(
                            'defs',
                            null,
                            g.createElement(
                                'linearGradient',
                                { id: 'paint0_linear_4032_54517', x1: -253254e-12, y1: 28.2333, x2: 64, y2: 28.2333, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FF5C4D' }),
                                g.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                g.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            g.createElement('clipPath', { id: 'clip0_4032_54517' }, g.createElement('rect', { y: 0.5, width: 64, height: 64, rx: 32, fill: 'white' })),
                        )),
                );
            };
            var lw = a(15230),
                lR = a.n(lw);
            let lD = () =>
                    (0, h.jsxs)('ul', {
                        className: lR().services,
                        children: [
                            (0, h.jsxs)('li', {
                                className: lR().service,
                                children: [
                                    (0, h.jsx)(lM, { className: lR().serviceLogo, 'aria-hidden': !0 }),
                                    (0, h.jsx)(ec.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        className: lR().serviceLabel,
                                        children: (0, h.jsx)(eX.A, { id: 'paywall.plus-benefit-music', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                ],
                            }),
                            (0, h.jsxs)('li', {
                                className: lR().service,
                                children: [
                                    (0, h.jsx)(lL, { className: lR().serviceLogo, 'aria-hidden': !0 }),
                                    (0, h.jsx)(ec.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        className: lR().serviceLabel,
                                        children: (0, h.jsx)(eX.A, { id: 'paywall.plus-benefit-kinopoisk', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                ],
                            }),
                            (0, h.jsxs)('li', {
                                className: lR().service,
                                children: [
                                    (0, h.jsx)(lk, { className: lR().serviceLogo, 'aria-hidden': !0 }),
                                    (0, h.jsx)(ec.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        className: lR().serviceLabel,
                                        children: (0, h.jsx)(eX.A, { id: 'paywall.plus-benefit-books', values: { br: '\n' } }),
                                    }),
                                ],
                            }),
                            (0, h.jsxs)('li', {
                                className: lR().service,
                                children: [
                                    (0, h.jsx)(lO, { className: lR().serviceLogo, 'aria-hidden': !0 }),
                                    (0, h.jsx)(ec.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        className: lR().serviceLabel,
                                        children: (0, h.jsx)(eX.A, { id: 'paywall.plus-benefit-cashback', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                lB = (e) => {
                    let { className: t } = e,
                        {
                            settings: { browserInfo: a },
                            paywall: i,
                        } = (0, T.g)(),
                        l = (0, tZ.j)(),
                        n = (0, t9.usePathname)(),
                        r = !a.isTouch && (n === lN.Z.pay.href || i.freemiumCollectionBarrier);
                    return (0, h.jsxs)('section', {
                        className: (0, eO.$)(lR().root, t),
                        'data-test-id': q.e8.paywall.PAYWALL_TOP_SECTION,
                        children: [
                            (0, h.jsxs)('div', {
                                className: lR().main,
                                children: [
                                    (0, h.jsx)($.I, { variant: 'yandexPlus'.concat(l), className: (0, eO.$)(lR().logo, lR()['logo_'.concat(l.toLowerCase())]) }),
                                    (0, h.jsx)(ec.DZ, {
                                        variant: 'h1',
                                        size: 'xxxl',
                                        weight: 'bold',
                                        className: lR().title,
                                        children: (0, h.jsx)(eX.A, { id: 'paywall.open-plus-benefits', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                    (0, h.jsx)(lD, {}),
                                    (0, h.jsx)(iU, { className: lR().buySubscriptionBlock, shouldShowFixed: !0 }),
                                    r &&
                                        (0, h.jsx)(ig.N, {
                                            className: lR().goHomeLink,
                                            href: '/',
                                            children: (0, h.jsx)(ec.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                children: (0, h.jsx)(eX.A, { id: 'navigation.go-home' }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, h.jsx)(iT, {
                                'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                children: (0, h.jsx)(tV._V, {
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb31b8fcfeb05fbb439da/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb33c5566813399938412/orig',
                                    fit: 'contain',
                                    className: lR().moreInfoChildren,
                                    'aria-hidden': !0,
                                    'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                }),
                            }),
                        ],
                    });
                };
            var lF = a(3146),
                lU = a.n(lF);
            let lz = (e) => {
                let { className: t } = e,
                    {
                        settings: { browserInfo: a },
                        paywall: i,
                    } = (0, T.g)(),
                    l = (0, tZ.j)(),
                    n = (0, t9.usePathname)(),
                    r = !a.isTouch && (n === lN.Z.pay.href || i.freemiumCollectionBarrier);
                return (0, h.jsxs)('section', {
                    className: (0, eO.$)(lU().root, t),
                    'data-test-id': q.e8.paywall.PAYWALL_TOP_SECTION,
                    children: [
                        (0, h.jsxs)('div', {
                            className: lU().main,
                            children: [
                                (0, h.jsx)('div', {
                                    className: lU().logoWrap,
                                    children: (0, h.jsx)($.I, {
                                        variant: 'musicLogoCenter'.concat(l),
                                        className: (0, eO.$)(lU().logo, lU()['logo_'.concat(l.toLowerCase())]),
                                    }),
                                }),
                                (0, h.jsx)('video', {
                                    preload: 'metadata',
                                    loop: !0,
                                    autoPlay: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    disablePictureInPicture: !0,
                                    width: 1e3,
                                    height: 1e3,
                                    src: ''.concat('', '/media/paywall_family_offer/family_offer.mp4'),
                                    poster: ''.concat('', '/media/paywall_family_offer/family_offer.png'),
                                    className: lU().video,
                                }),
                                (0, h.jsxs)('div', {
                                    className: lU().textBlock,
                                    children: [
                                        (0, h.jsx)(ec.DZ, {
                                            variant: 'h1',
                                            size: 'xxxl',
                                            weight: 'bold',
                                            className: lU().title,
                                            children: (0, h.jsx)(eX.A, { id: 'paywall.family-offer-title', values: { br: '\n', nbsp: '\xa0' } }),
                                        }),
                                        (0, h.jsx)(ec.HL, {
                                            variant: 'p',
                                            size: 'm',
                                            weight: 'bold',
                                            className: lU().subtitle,
                                            children: (0, h.jsx)(eX.A, { id: 'paywall.family-offer-text', values: { br: '\n' } }),
                                        }),
                                        (0, h.jsx)(iU, { className: lU().buySubscriptionBlock, shouldShowFixed: !0, hasColumnLayout: !0 }),
                                        r &&
                                            (0, h.jsx)(ig.N, {
                                                className: lU().goHomeLink,
                                                href: '/',
                                                children: (0, h.jsx)(ec.HL, {
                                                    variant: 'span',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    children: (0, h.jsx)(eX.A, { id: 'navigation.go-home' }),
                                                }),
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, h.jsx)(iT, {
                            'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                            children: (0, h.jsx)(tV._V, {
                                src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb31b8fcfeb05fbb439da/orig',
                                srcSet: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb33c5566813399938412/orig',
                                fit: 'contain',
                                className: lU().moreInfoChildren,
                                'aria-hidden': !0,
                                'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                            }),
                        }),
                    ],
                });
            };
            var lW = a(56386),
                lV = a.n(lW);
            let lK = (e) => {
                    let { children: t } = e,
                        {
                            settings: { isMobile: a, browserInfo: i },
                        } = (0, T.g)();
                    return a || i.isTablet
                        ? (0, h.jsx)(ec.HL, { variant: 'span', size: 'm', className: lV().benefitLabelMobile, children: t })
                        : (0, h.jsx)(ec.DZ, { variant: 'h2', size: 'm', className: lV().benefitLabelDesktop, children: t });
                },
                lY = () => {
                    let {
                            settings: { isMobile: e, browserInfo: t },
                        } = (0, T.g)(),
                        { formatMessage: a } = (0, H.A)(),
                        i = a(e || t.isTablet ? { id: 'paywall.music-benefit-all-in-one-mobile' } : { id: 'paywall.music-benefit-all-in-one-desktop' }, {
                            br: '\n',
                            nbsp: '\xa0',
                        });
                    return (0, h.jsxs)('ul', {
                        className: lV().benefits,
                        children: [
                            (0, h.jsxs)('li', {
                                className: lV().benefit,
                                children: [
                                    (0, h.jsx)(tV._V, {
                                        className: lV().benefitLogo,
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.693ad41840fb42546cc35e13/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.693ad43c40fb42546cc35e15/orig',
                                    }),
                                    (0, h.jsx)(lK, { children: (0, h.jsx)(eX.A, { id: 'paywall.music-benefit-audio', values: { nbsp: '\xa0' } }) }),
                                ],
                            }),
                            (0, h.jsxs)('li', {
                                className: (0, eO.$)(lV().benefit, lV().benefit_recommendation),
                                children: [
                                    (0, h.jsx)(tV._V, {
                                        className: lV().benefitLogo,
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.693ad52e40fb42546cc35e1a/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.693ad53793461475f95b4f50/orig',
                                    }),
                                    (0, h.jsx)(lK, { children: (0, h.jsx)(eX.A, { id: 'paywall.music-benefit-recommendation', values: { nbsp: '\xa0' } }) }),
                                ],
                            }),
                            (0, h.jsxs)('li', {
                                className: lV().benefit,
                                children: [
                                    (0, h.jsx)(tV._V, {
                                        className: lV().benefitLogo,
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.693ad56040fb42546cc35e1c/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.693ad56640fb42546cc35e1e/orig',
                                    }),
                                    (0, h.jsx)(lK, { children: (0, h.jsx)(eX.A, { id: 'paywall.music-benefit-without-network', values: { nbsp: '\xa0' } }) }),
                                ],
                            }),
                            (0, h.jsxs)('li', {
                                className: lV().benefit,
                                children: [
                                    (0, h.jsx)(tV._V, {
                                        className: lV().benefitLogo,
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.693ad56e621a600def9091d8/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.693ad57632413276cc433bf8/orig',
                                    }),
                                    (0, h.jsx)(lK, { children: i }),
                                ],
                            }),
                        ],
                    });
                },
                lH = (e) => {
                    let { className: t } = e,
                        {
                            settings: { browserInfo: a },
                            paywall: i,
                        } = (0, T.g)(),
                        l = (0, tZ.j)(),
                        n = (0, t9.usePathname)(),
                        r = !a.isTouch && (n === lN.Z.pay.href || i.freemiumCollectionBarrier);
                    return (0, h.jsxs)('section', {
                        className: (0, eO.$)(lV().root, t),
                        'data-test-id': q.e8.paywall.PAYWALL_TOP_SECTION,
                        children: [
                            (0, h.jsxs)('div', {
                                className: lV().main,
                                children: [
                                    (0, h.jsx)($.I, { variant: 'musicLogoCenter'.concat(l), className: (0, eO.$)(lV().logo, lV()['logo_'.concat(l.toLowerCase())]) }),
                                    (0, h.jsx)(ec.DZ, {
                                        variant: 'h1',
                                        size: 'xxxl',
                                        weight: 'bold',
                                        className: lV().title,
                                        children: (0, h.jsx)(eX.A, { id: 'paywall.music-benefits-title', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                    (0, h.jsx)(lY, {}),
                                    (0, h.jsx)(iU, { className: lV().buySubscriptionBlock, shouldShowFixed: !0 }),
                                    r &&
                                        (0, h.jsx)(ig.N, {
                                            className: lV().goHomeLink,
                                            href: '/',
                                            children: (0, h.jsx)(ec.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                children: (0, h.jsx)(eX.A, { id: 'navigation.go-home' }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, h.jsx)(iT, {
                                'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                children: (0, h.jsx)(tV._V, {
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb31b8fcfeb05fbb439da/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb33c5566813399938412/orig',
                                    fit: 'contain',
                                    className: lV().moreInfoChildren,
                                    'aria-hidden': !0,
                                    'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                }),
                            }),
                        ],
                    });
                },
                lq = { family_offer: (0, h.jsx)(lz, {}), default: (0, h.jsx)(lB, {}) },
                lQ = () => {
                    var e;
                    let t = lC(),
                        { experiments: a } = (0, T.g)(),
                        i = (null == (e = a.getExperiment(N.z.WebNextPaywallTopSection)) ? void 0 : e.group) || 'default';
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            t ? (0, h.jsx)(lH, {}) : lq[i] || lq.default,
                            (0, h.jsx)(ik, { className: aH().section }),
                            (0, h.jsx)(iC, { className: aH().section }),
                            (0, h.jsx)(lA, { className: aH().section }),
                            (0, h.jsx)(iE, { className: aH().section }),
                            (0, h.jsx)(lT, { className: aH().section }),
                            (0, h.jsx)(ia, { className: aH().section_faq, variant: aV.RU }),
                            (0, h.jsx)(io, { variant: aV.RU }),
                        ],
                    });
                };
            var l$ = a(65480),
                lG = a.n(l$);
            let lZ = (e) => {
                    let { className: t, variant: a = aV.RU } = e,
                        i = (0, tZ.j)();
                    return (0, h.jsx)('div', {
                        'data-test-id': q.e8.paywall.MOBILE_PAYWALL_BOOKS_SECTION,
                        children: (0, h.jsx)(iX, {
                            className: t,
                            contentClassName: lG()['content_'.concat(a)],
                            heading: (0, h.jsxs)(h.Fragment, {
                                children: [
                                    (0, h.jsx)($.I, { variant: 'yandexBooks'.concat(i), className: lG()['logo_'.concat(i.toLocaleLowerCase())] }),
                                    (0, h.jsx)(tK.q, {
                                        children: (0, h.jsx)(ec.DZ, {
                                            variant: 'h2',
                                            children: (0, h.jsx)(eX.A, { id: 'paywall.books-part-title', values: { nbsp: '\xa0' } }),
                                        }),
                                    }),
                                ],
                            }),
                            content: (0, h.jsxs)(h.Fragment, {
                                children: [
                                    (0, h.jsx)(i$, {
                                        className: lG().card,
                                        text: (0, h.jsx)(eX.A, { id: 'paywall.books-part-benefit-switch-mobile', values: { nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.68c0128ad8f3372f64a885b4/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.68c012b2fbed8f7a98fb1441/orig',
                                    }),
                                    (0, h.jsx)(i$, {
                                        className: lG().card,
                                        text: (0, h.jsx)(eX.A, { id: 'paywall.books-part-benefit-read-mobile', values: { nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6ac99ed792c3f4a135afd/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.66f6ac924e6e980968aa8463/orig',
                                    }),
                                    (0, h.jsx)(i$, {
                                        className: lG().card,
                                        text: (0, h.jsx)(eX.A, { id: 'paywall.books-part-benefit-download-mobile', values: { nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6aca698264a4b59f3a7be/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.66f6ac9fcaf72c4bc9eaeaab/orig',
                                    }),
                                    (0, h.jsx)(i$, {
                                        className: lG().card,
                                        text: (0, h.jsx)(eX.A, { id: 'paywall.books-part-benefit-speed-mobile', values: { nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.68c01296fbed8f7a98fb143c/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68c012bbd8f3372f64a885b9/orig',
                                    }),
                                ],
                            }),
                        }),
                    });
                },
                lX = { family_offer: (0, h.jsx)(lz, {}), default: (0, h.jsx)(lB, {}) },
                lJ = () => {
                    var e;
                    let t = lC(),
                        { experiments: a } = (0, T.g)(),
                        i = (null == (e = a.getExperiment(N.z.WebNextPaywallTopSection)) ? void 0 : e.group) || 'default';
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            t ? (0, h.jsx)(lH, {}) : lX[i] || lX.default,
                            (0, h.jsx)(i9, { className: aH().section }),
                            (0, h.jsx)(i3, { className: aH().section }),
                            (0, h.jsx)(lZ, { className: aH().section }),
                            (0, h.jsx)(lt, { className: aH().section }),
                            (0, h.jsx)(ia, { className: aH().section_faq, variant: aV.RU }),
                            (0, h.jsx)(io, { variant: aV.RU }),
                        ],
                    });
                },
                l0 = (0, y.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, T.g)();
                    return (0, h.jsx)('div', { className: lh().root, children: e ? (0, h.jsx)(lJ, {}) : (0, h.jsx)(lQ, {}) });
                }),
                l1 = { [aV.RU]: (0, h.jsx)(l0, {}), [aV.BY]: (0, h.jsx)(lo, {}), [aV.OTHER]: (0, h.jsx)(lv, {}) },
                l2 = [tq.R.BLOCK_1, tq.R.BLOCK_2, tq.R.BOTTOM_BUTTON],
                l4 = (0, y.PA)((e) => {
                    let { useOverlayScroll: t = !0 } = e,
                        { user: a } = (0, T.g)(),
                        i = (0, az.j)(),
                        l = (0, tN.L)(() =>
                            (0, h.jsx)('div', {
                                'data-buy-subscription-block-portal': !0,
                                className: aH().root,
                                'data-test-id': q.e8.paywall.PAYWALL,
                                children: l1[((e) => (e && aK[e]) || aV.OTHER)(a.account.data.geoRegionIso)],
                            }),
                        ),
                        n = (0, g.useMemo)(
                            () => (i.isContextDefined ? l : (0, h.jsx)(tY.r, { page: tH.l.MUSIC_PAYWALL_SCREEN, places: l2, children: l })),
                            [i.isContextDefined, l],
                        );
                    return t ? (0, h.jsx)(aU.C, { className: (0, eO.$)(aH().overlayScroll, { [aH().overlayScroll_desktop]: aB.NN }), children: n }) : n;
                });
            var l8 = a(86889),
                l3 = a.n(l8);
            let l5 = (0, y.PA)(() => {
                let { paywall: e } = (0, T.g)(),
                    { formatMessage: t } = (0, H.A)(),
                    a = (0, aF.e)(),
                    i = e.freemiumCollectionBarrier;
                return (
                    (0, g.useEffect)(() => {
                        e.modal.isOpened && aB.NN && (null == a || a.pause());
                    }, [e.modal.isOpened, a]),
                    (0, h.jsxs)(f.a, {
                        open: e.modal.isOpened,
                        size: 'fullscreen',
                        placement: 'center',
                        showHeader: !1,
                        onClose: i ? void 0 : e.closeModal,
                        onOpenChange: e.onOpenChange,
                        closeOnOutsidePress: !1,
                        escapeKey: !i,
                        className: l3().root,
                        contentClassName: l3().content,
                        overlayColor: 'full',
                        'data-test-id': q.e8.paywallModal.PAYWALL_MODAL,
                        children: [
                            !i &&
                                (0, h.jsx)('header', {
                                    className: l3().header,
                                    children: (0, h.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, h.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                        className: l3().closeButton,
                                        onClick: e.closeModal,
                                        'aria-label': t({ id: 'interface-actions.close' }),
                                        'data-test-id': q.e8.paywallModal.PAYWALL_MODAL_CLOSE_BUTTON,
                                    }),
                                }),
                            (0, h.jsx)(l4, {}),
                        ],
                    })
                );
            });
            var l6 = a(32353),
                l9 = a(85838),
                l7 = a(92644),
                ne = a(12670),
                nt = a(59304),
                na = a(7628),
                ni = a(71660),
                nl = a.n(ni);
            let nn = () =>
                (0, h.jsx)(nt.$, {
                    message: (0, h.jsx)(ec.HL, {
                        className: nl().text,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, h.jsx)(eX.A, { id: 'onboarding.authorize-to-listen-full', values: { br: '\n', nbsp: ' ' } }),
                    }),
                    withDefaultCloseButton: !1,
                    closeButton: (0, h.jsx)(na.H, {
                        className: nl().loginButton,
                        variant: 'text',
                        size: 'xxs',
                        withRipple: !1,
                        buttonText: (0, h.jsx)(eX.A, { id: 'authorization.enter-button' }),
                    }),
                });
            var nr = a(39270),
                ns = a.n(nr);
            let no = (0, y.PA)((e) => {
                    let { closeToast: t } = e,
                        {
                            paywall: { modal: a },
                        } = (0, T.g)(),
                        i = (0, g.useCallback)(() => {
                            (a.open(), null == t || t());
                        }, [a, t]);
                    return (0, h.jsx)(nt.$, {
                        message: (0, h.jsx)(ec.HL, {
                            className: ns().text,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, h.jsx)(eX.A, { id: 'onboarding.try-plus-to-listen-full', values: { br: '\n', nbsp: ' ' } }),
                        }),
                        cover: (0, h.jsx)($.I, { className: ns().icon, variant: 'plusColor' }),
                        coverRadius: 'round',
                        coverClassName: (0, eO.$)(ns().cover, ns().important),
                        withDefaultCloseButton: !1,
                        closeButton: (0, h.jsx)(Q.$, {
                            className: ns().tryButton,
                            variant: 'text',
                            color: 'primary',
                            size: 'xxs',
                            onClick: i,
                            withRipple: !1,
                            children: (0, h.jsx)(eX.A, { id: 'payment.try-button' }),
                        }),
                    });
                }),
                nc = () => {
                    let { freePlayerAccess: e } = (0, T.g)(),
                        { notify: t } = (0, es.l)();
                    (0, g.useEffect)(() => {
                        switch (e.shownRestrictionModal) {
                            case ne.h.FullscreenSubscription:
                                t((0, h.jsx)(no, {}), { containerId: er.u.FULLSCREEN_INFO });
                                break;
                            case ne.h.FullscreenUnauthorized:
                                t((0, h.jsx)(nn, {}), { containerId: er.u.FULLSCREEN_INFO });
                                break;
                            default:
                                return;
                        }
                        e.hideRestrictionModal();
                    }, [e, e.shownRestrictionModal, t]);
                };
            var nd = a(53281),
                nu = a.n(nd),
                n_ = a(52456),
                nm = a(5866),
                np = a(16208),
                nv = a(48215),
                nx = a(15232),
                nh = a(85585);
            let ny = (0, g.createContext)({ difference: 0, isSingleTrackSwitch: !1 }),
                nC = () => (0, g.useContext)(ny);
            var ng = a(80380),
                nb = a.n(ng),
                nA = a(47618);
            let nf = (0, y.PA)((e) => {
                let { children: t } = e,
                    {
                        fullscreenPlayer: {
                            playQueue: { itemsKeys: a, isDragAndDropEnabled: i },
                        },
                    } = (0, T.g)();
                return i ? (0, h.jsx)(nA.gB, { items: a, strategy: nA._G, children: t }) : t;
            });
            var nj = a(79546),
                nT = a(26401);
            let nN = (e) => {
                let t = (0, aF.e)(),
                    {
                        fullscreenPlayer: {
                            playQueue: { trackMap: a },
                        },
                    } = (0, T.g)(),
                    i = null == t ? void 0 : t.state.queueState.entityList.value,
                    l = null == i ? void 0 : i[e];
                if (!l) return null;
                let {
                        context: { data: n },
                    } = l,
                    r = a.get(String(l.entity.data.meta.id));
                return r ? { track: r, playContextParams: { contextData: n, queueParams: { index: e } } } : null;
            };
            var nI = a(80336),
                nk = a.n(nI);
            let nS = (0, y.PA)(
                    (0, g.forwardRef)((e, t) => {
                        let { children: a, 'data-index': i, className: l, ...n } = e,
                            { isDragging: r, listeners: s, setNodeRef: o, transform: c, transition: d, attributes: u } = (0, nA.gl)({ id: String(i) }),
                            _ = (0, g.useCallback)(
                                (e) => {
                                    (o(e), 'function' == typeof t && t(e));
                                },
                                [t, o],
                            ),
                            m = { transition: d, '--translate-y': c ? ''.concat(Math.round(c.y), 'px') : void 0 };
                        return (0, h.jsx)('div', {
                            ref: _,
                            'data-index': i,
                            style: m,
                            ...n,
                            className: (0, eO.$)(nk().root, l),
                            children: (0, h.jsx)('div', { ref: t, className: (0, eO.$)(nk().inner, { [nk().dragging]: r }), ...s, ...u, role: 'listitem', children: a }),
                        });
                    }),
                ),
                nL = (e) => {
                    let { index: t, isDragAndDropEnabled: a, blockRef: i, className: l, isRemoveAvailable: n, hideControls: r } = e,
                        s = (0, aF.e)(),
                        o = a && !r,
                        c = (0, g.useMemo)(() => {
                            let e = null == s ? void 0 : s.state.queueState.order.value.indexOf(t);
                            return 'number' == typeof e ? [e] : [];
                        }, [t, null == s ? void 0 : s.state.queueState.order.value]),
                        d = nN(t),
                        u = null == d ? void 0 : d.track,
                        _ = null == d ? void 0 : d.playContextParams,
                        m = (0, nT.i)(null != u ? u : null, nj.N.HIDE, c),
                        p = (0, A.c)(() => {
                            (m(), (null == i ? void 0 : i.current) && i.current.focus());
                        }),
                        v = (0, tN.L)(() =>
                            u && _
                                ? (0, h.jsx)(ez.K, {
                                      track: u,
                                      playContextParams: _,
                                      className: l,
                                      withDNDBlock: o,
                                      handleRemove: n ? p : void 0,
                                      withSecondaryColor: !0,
                                      hideControls: r,
                                  })
                                : null,
                        );
                    return v ? (o ? (0, h.jsx)(nS, { 'data-index': t, children: v }) : v) : null;
                };
            var nE = a(71716),
                nM = a.n(nE),
                nP = a(52073),
                nO = a(55211),
                nw = a(188),
                nR = a(27294),
                nD = a(21284),
                nB = a(93512),
                nF = a(67174),
                nU = a(20584),
                nz = a(6858),
                nW = a(49602),
                nV = a(99344);
            let nK = (e) => !!(e && 'object' == typeof e && ('playlistUuid' in e || 'playlistTitle' in e));
            var nY = (function (e) {
                return ((e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Album = 'album'), (e.Track = 'track'), e);
            })({});
            let nH = () => {
                    let { formatMessage: e } = (0, H.A)(),
                        {
                            experiments: t,
                            sonataState: { entityMeta: a },
                            vibe: i,
                        } = (0, T.g)(),
                        l = (0, aF.e)(),
                        n = null == l ? void 0 : l.state.currentContext.value,
                        r = null == n ? void 0 : n.data.meta,
                        s = null == l ? void 0 : l.state.queueState.currentEntity.value,
                        o = null == a ? void 0 : a.mainArtist,
                        c = (null == n ? void 0 : n.data.type) === eF.K.Artist ? n.data.meta.artist : void 0,
                        d = (null == c ? void 0 : c.name) ? c : o,
                        u = null == a ? void 0 : a.mainAlbum,
                        _ = null == a ? void 0 : a.isPodcast,
                        m = (function () {
                            let e = (0, aF.e)(),
                                t = null == e ? void 0 : e.state.queueState.currentEntity.value;
                            return (0, g.useMemo)(
                                () =>
                                    (function (e) {
                                        if (!e) return { title: void 0, type: void 0, sourceContextType: void 0 };
                                        let t = e.data.sourceContextType;
                                        if ((0, nz.F)(e)) {
                                            let a = e.data.meta.title;
                                            if (a) return { title: a, type: eF.K.Album, sourceContextType: t };
                                        }
                                        if ((0, nV.K)(e)) {
                                            let a = e.data.meta.title;
                                            if (a) return { title: a, type: eF.K.Playlist, sourceContextType: t };
                                        }
                                        if ((0, nW.T)(e)) {
                                            var a;
                                            let i = null == (a = e.data.meta.artist) ? void 0 : a.name;
                                            if (i) return { title: i, type: eF.K.Artist, sourceContextType: t };
                                        }
                                        return { title: void 0, type: void 0, sourceContextType: t };
                                    })(null == t ? void 0 : t.sourceContext),
                                [null == t ? void 0 : t.sourceContext],
                            );
                        })(),
                        p = (0, tN.L)(() => {
                            if (m.type)
                                return (function (e) {
                                    let { sourceType: t, sourceContext: a } = e;
                                    if (a)
                                        switch (t) {
                                            case eF.K.Album: {
                                                if (!(0, nz.F)(a)) return;
                                                let e = a.data.meta.id;
                                                if (!e) return;
                                                let { href: t } = (0, nF.u)('/album/:albumId', { params: { albumId: String(e) } });
                                                return t;
                                            }
                                            case eF.K.Artist: {
                                                if (!(0, nW.T)(a)) return;
                                                let e = a.data.meta.id;
                                                if (!e) return;
                                                let { href: t } = (0, nF.u)('/artist/:artistId', { params: { artistId: String(e) } });
                                                return t;
                                            }
                                            case eF.K.Playlist: {
                                                if (!(0, nV.K)(a)) return;
                                                let e = a.data.meta.playlistUuid;
                                                if (!e) return;
                                                let { href: t } = (0, nF.u)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                                                return t;
                                            }
                                            default:
                                                return;
                                        }
                                })({ sourceType: m.type, sourceContext: null == s ? void 0 : s.sourceContext });
                            switch (null == n ? void 0 : n.data.type) {
                                case eF.K.Vibe:
                                    var e;
                                    return ((e, t) => {
                                        var a, i;
                                        let l = (0, nw.i)(t) ? (null == t ? void 0 : t.data.parentContext) : null,
                                            n = (0, nw.i)(t) ? (null == t ? void 0 : t.data.parentContextId) : null;
                                        if (l || n)
                                            switch (e) {
                                                case nY.Artist: {
                                                    let { href: e } = (0, nF.u)('/artist/:artistId', {
                                                        params: { artistId: (null != (a = null == l ? void 0 : l.data.meta.id) ? a : n) || '' },
                                                    });
                                                    return e;
                                                }
                                                case nY.Playlist: {
                                                    let e = null == l ? void 0 : l.data.meta,
                                                        t = nK(e) ? e.playlistUuid : n;
                                                    if (!t) return;
                                                    let { href: a } = (0, nF.u)('/playlists/:playlistUuid', { params: { playlistUuid: String(t) } });
                                                    return a;
                                                }
                                                case nY.Album: {
                                                    if (!(null == l ? void 0 : l.data.meta.id) && !n) return;
                                                    let { href: e } = (0, nF.u)('/album/:albumId', {
                                                        params: { albumId: (null != (i = null == l ? void 0 : l.data.meta.id) ? i : n) || '' },
                                                    });
                                                    return e;
                                                }
                                                case nY.Track: {
                                                    if (!n) return;
                                                    if (String(n).includes(':')) {
                                                        let [e, t] = String(n).split(':'),
                                                            { href: a } = (0, nF.u)('/album/:albumId/track/:trackId', { params: { albumId: e || '', trackId: t || '' } });
                                                        return a;
                                                    }
                                                    let { href: e } = (0, nF.u)('/track/:trackId', { params: { trackId: n } });
                                                    return e;
                                                }
                                                default:
                                                    return;
                                            }
                                    })(null == i || null == (e = i.meta) ? void 0 : e.stationType, n);
                                case eF.K.Artist: {
                                    if (!(null == d ? void 0 : d.id)) return;
                                    let { href: e } = (0, nF.u)('/artist/:artistId', { params: { artistId: String(d.id) } });
                                    return e;
                                }
                                case eF.K.Playlist: {
                                    if (!nK(r)) return;
                                    let { href: e } = (0, nF.u)('/playlists/:playlistUuid', { params: { playlistUuid: null == r ? void 0 : r.playlistUuid } });
                                    return e;
                                }
                                case eF.K.Album: {
                                    if (!(null == u ? void 0 : u.id)) return;
                                    let { href: e } = (0, nF.u)('/album/:albumId', { params: { albumId: u.id } });
                                    return e;
                                }
                                default:
                                    return;
                            }
                        }),
                        v = (0, tN.L)(() => {
                            if (m.title) return m.title;
                            switch (null == n ? void 0 : n.data.type) {
                                case eF.K.Vibe:
                                    var e, t;
                                    return ((e, t) => (t && e ? t : (0, h.jsx)(eX.A, { id: 'entity-names.my-vibe' })))(
                                        null == i || null == (e = i.meta) ? void 0 : e.stationType,
                                        null == i || null == (t = i.meta) ? void 0 : t.title,
                                    );
                                case eF.K.Artist:
                                    return null == d ? void 0 : d.name;
                                case eF.K.Playlist:
                                    if (!nK(r)) return;
                                    return null == r ? void 0 : r.title;
                                case eF.K.Album:
                                    return null == u ? void 0 : u.title;
                                case eF.K.Various:
                                    return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing' });
                                default:
                                    return (0, h.jsx)(eX.A, { id: 'entity-names.my-vibe' });
                            }
                        }),
                        x = (0, tN.L)(() => {
                            if (m.type) {
                                let e = (function (e) {
                                    let { sourceType: t, sourceContext: a, sourceContextType: i } = e,
                                        l = (function (e) {
                                            switch (e) {
                                                case nU.h.SEARCH:
                                                    return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-from-search' });
                                                case nU.h.DOWNLOADED_TRACKS:
                                                    return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-from-downloads' });
                                                case nU.h.MUSIC_HISTORY:
                                                    return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-from-history' });
                                                case nU.h.MUSIC_HISTORY_SEARCH:
                                                    return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-from-history-search' });
                                                case nU.h.ARTIST_MY_COLLECTION:
                                                    return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-from-artist-collection' });
                                                case nU.h.ARTIST_FAMILIAR_FROM_WAVE:
                                                    return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-from-artist-wave' });
                                                default:
                                                    return;
                                            }
                                        })(i);
                                    if (l) return l;
                                    if (i === nU.h.BASED_ON_ENTITY_BY_DEFAULT || void 0 === i)
                                        switch (t) {
                                            case eF.K.Album:
                                                if ((0, nz.F)(a) && a.data.meta.type === ed._.PODCAST)
                                                    return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-from-podcast' });
                                                return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-from-album' });
                                            case eF.K.Artist:
                                                return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-from-artist-popular-tracks' });
                                            case eF.K.Playlist:
                                                return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-from-playlist' });
                                        }
                                })({ sourceType: m.type, sourceContext: null == s ? void 0 : s.sourceContext, sourceContextType: m.sourceContextType });
                                if (e) return e;
                            }
                            switch (null == n ? void 0 : n.data.type) {
                                case eF.K.Vibe:
                                    var a, l;
                                    if (!t.checkExperiment(N.z.WebNextVibeDescription, 'on') || void 0 === (null == i || null == (a = i.meta) ? void 0 : a.description))
                                        return ((e, t) => {
                                            let a = (0, nw.i)(t) ? (null == t ? void 0 : t.data.parentContext) : null;
                                            switch (e) {
                                                case nY.Artist:
                                                    return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-my-wave-by-artist' });
                                                case nY.Playlist:
                                                    return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-my-wave-by-playlist' });
                                                case nY.Album:
                                                    if ((null == a ? void 0 : a.data.type) === ed._.PODCAST)
                                                        return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-my-wave-by-podcast' });
                                                    return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-my-wave-by-album' });
                                                case nY.Track:
                                                    return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-my-wave-by-track' });
                                                default:
                                                    return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing' });
                                            }
                                        })(null == i || null == (l = i.meta) ? void 0 : l.stationType, n);
                                    if (null == i ? void 0 : i.isMyVibe) return e({ id: 'play-queue.now-playing' });
                                    return e({ id: 'play-queue.now-playing-by-entity' }, { entity: null == i ? void 0 : i.meta.getDescription() });
                                case eF.K.Artist:
                                    return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-from-artist-popular-tracks' });
                                case eF.K.Playlist:
                                    return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-from-playlist' });
                                case eF.K.Album:
                                    if (_) return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-from-podcast' });
                                    return (0, h.jsx)(eX.A, { id: 'play-queue.now-playing-from-album' });
                                default:
                                    return;
                            }
                        }),
                        y = (0, tN.L)(() => ((0, nR.p)(n) ? (0, h.jsx)(eX.A, { id: 'entity-names.my-vibe' }) : v));
                    return {
                        url: p,
                        title: v,
                        subTitle: x,
                        vibeBlockTitle: y,
                        vibeBlockSubTitle: (0, tN.L)(() => {
                            switch (null == n ? void 0 : n.data.type) {
                                case eF.K.Artist:
                                    return (0, h.jsx)(eX.A, { id: 'play-queue.my-wave-by-artist' });
                                case eF.K.Playlist:
                                    return (0, h.jsx)(eX.A, { id: 'play-queue.my-wave-by-playlist' });
                                case eF.K.Album:
                                    return (0, h.jsx)(eX.A, { id: 'play-queue.my-wave-by-album' });
                                default:
                                    return;
                            }
                        }),
                        vibeBlockAgent: (0, tN.L)(() => {
                            var e, t, a;
                            switch (null == n ? void 0 : n.data.type) {
                                case eF.K.Album:
                                    return (0, nB.K)({ animationUri: '', cover: { uri: n.data.meta.coverUri }, entity: { type: nD.h.ALBUM } });
                                case eF.K.Artist:
                                    return (0, nB.K)({
                                        animationUri: '',
                                        cover: { uri: null == (t = n.data.meta.artist) || null == (e = t.cover) ? void 0 : e.uri },
                                        entity: { type: nD.h.ARTIST },
                                    });
                                case eF.K.Playlist:
                                    return (0, nB.K)({
                                        animationUri: '',
                                        cover: { uri: null == (a = n.data.meta.cover) ? void 0 : a.uri },
                                        entity: { type: nD.h.PLAYLIST },
                                    });
                                case eF.K.Various:
                                    return (0, nB.K)({
                                        animationUri: '',
                                        cover: { uri: 'avatars.mds.yandex.net/get-music-misc/2419084/img.686688add03ee35062c02822/%%' },
                                        entity: { type: nD.h.TRACK },
                                    });
                            }
                        }),
                    };
                },
                nq = { src: '/_next/static/media/vibeCover.c55d574d.png' };
            var nQ = a(82787),
                n$ = a.n(nQ);
            let nG = (0, y.PA)(() => {
                    let { experiments: e } = (0, T.g)(),
                        t = (0, aF.e)(),
                        { vibeBlockTitle: a, vibeBlockSubTitle: i, vibeBlockAgent: l } = nH(),
                        n = (0, g.useCallback)(
                            (e) => {
                                ((0, nP.P)(e, n$().ripple), null == t || t.moveForward());
                            },
                            [t],
                        ),
                        r = (0, tN.L)(() =>
                            e.checkExperiment(N.z.WebNextWaveAgentExperiment, 'on') && l
                                ? (0, h.jsx)(nO.n, { agent: l, shouldShowControl: !1 })
                                : (0, h.jsx)(tV._V, {
                                      src: nq.src,
                                      className: n$().vibeCover,
                                      fit: 'cover',
                                      'aria-hidden': !0,
                                      'data-test-id': q.e8.player.PLAY_QUEUE_VIBE_BLOCK_IMAGE,
                                  }),
                        );
                    return (0, h.jsxs)('div', {
                        className: n$().root,
                        onClick: n,
                        'data-test-id': q.e8.player.PLAY_QUEUE_VIBE_BLOCK,
                        children: [
                            r,
                            (0, h.jsxs)('div', {
                                children: [
                                    (0, h.jsx)(ec.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: n$().title,
                                        'data-test-id': q.e8.player.PLAY_QUEUE_VIBE_BLOCK_TITLE,
                                        children: a,
                                    }),
                                    (0, h.jsx)(ec.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: n$().vibeTitle,
                                        'data-test-id': q.e8.player.PLAY_QUEUE_VIBE_BLOCK_VIBE_TITLE,
                                        children: i,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                nZ = (0, y.PA)(() => {
                    var e;
                    let {
                            fullscreenPlayer: {
                                playQueue: { afterTracksIds: t, isVibeBlockShowed: a, isDragAndDropEnabled: i, currentIndex: l },
                            },
                            sonataState: { isVibeContext: n },
                        } = (0, T.g)(),
                        r = (0, aF.e)(),
                        s = null == r ? void 0 : r.state.queueState.order.value,
                        o = null != (e = null == r ? void 0 : r.state.queueState.livePlayableIndex.value) ? e : 0,
                        c = null == r ? void 0 : r.state.queueState.entityList.value,
                        { isMovingForward: d, isMovingBackward: u, difference: _, isSingleTrackSwitch: m } = nC(),
                        p = l - _,
                        v = (0, g.useId)(),
                        x = (0, g.useRef)(null);
                    return a || 0 !== t.length
                        ? (0, h.jsxs)('div', {
                              className: nM().root,
                              'data-test-id': q.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK,
                              children: [
                                  (0, h.jsx)(ec.HL, {
                                      variant: 'div',
                                      size: 'm',
                                      className: (0, eO.$)(nM().title, { [nM().title_withDnD]: i }),
                                      'data-test-id': q.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK_TITLE,
                                      children: (0, h.jsx)(eX.A, { id: 'play-queue.next-in' }),
                                  }),
                                  (0, h.jsx)(nf, {
                                      children: (0, h.jsxs)('div', {
                                          tabIndex: 0,
                                          ref: x,
                                          className: (0, eO.$)(nM().animatedContent, {
                                              [nM().animatedContent_moveToTop]: d,
                                              [nM().animatedContent_moveFromTop]: u && !m,
                                              [nM().animatedContent_moveFromTopSingleTrack]: u && m,
                                          }),
                                          children: [
                                              t.map((e) => {
                                                  let t = ((e) => {
                                                      var t, a;
                                                      let { index: i, order: l, livePlayableIndex: n, isVibeContext: r, entityList: s } = e,
                                                          o = null != (a = null == l ? void 0 : l.indexOf(i)) ? a : -1,
                                                          c = !!(null == s || null == (t = s[i]) ? void 0 : t.sourceContext);
                                                      return r && o > n && !c;
                                                  })({ index: e, order: s, livePlayableIndex: o, isVibeContext: n, entityList: c });
                                                  return (null == s ? void 0 : s[p]) === e
                                                      ? (0, h.jsx)(
                                                            'div',
                                                            {
                                                                className: nM().prevTrack,
                                                                children: (0, h.jsx)(
                                                                    nL,
                                                                    { index: e, isDragAndDropEnabled: i, isRemoveAvailable: !0, hideControls: t },
                                                                    e,
                                                                ),
                                                            },
                                                            v,
                                                        )
                                                      : (0, h.jsx)(nL, { index: e, isDragAndDropEnabled: i, blockRef: x, isRemoveAvailable: !0, hideControls: t }, e);
                                              }),
                                              a && (0, h.jsx)(nG, {}),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : (0, h.jsx)('div', { className: nM().root, 'data-test-id': q.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK });
                });
            var nX = a(40258),
                nJ = a.n(nX);
            let n0 = (0, y.PA)((e) => {
                    let { forwardRef: t, scrollToNowPlayingBlock: a } = e,
                        {
                            fullscreenPlayer: {
                                playQueue: { beforeTracksIds: i, isDragAndDropEnabled: l, currentIndex: n },
                            },
                        } = (0, T.g)(),
                        r = (0, aF.e)(),
                        s = null == r ? void 0 : r.state.queueState.order.value;
                    (0, g.useEffect)(() => {
                        a();
                        let e = new ResizeObserver(() => a());
                        return (
                            'function' != typeof t && (null == t ? void 0 : t.current) && e.observe(t.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [t, a]);
                    let { isMovingForward: o, isMovingBackward: c, difference: d, isSingleTrackSwitch: u } = nC(),
                        _ = n - d,
                        m = (0, g.useId)();
                    return (0, h.jsx)('div', {
                        className: nJ().root,
                        ref: t,
                        children: (0, h.jsx)(nf, {
                            children: (0, h.jsx)('div', {
                                className: (0, eO.$)(nJ().animatedContent, {
                                    [nJ().animatedContent_moveToBottom]: c,
                                    [nJ().animatedContent_moveFromBottom]: o && !u,
                                    [nJ().animatedContent_moveFromBottomSingleTrack]: o && u,
                                }),
                                'data-test-id': q.e8.player.PLAY_QUEUE_BEFORE_PLAYING_BLOCK,
                                children:
                                    null == i
                                        ? void 0
                                        : i.map((e) =>
                                              (null == s ? void 0 : s[_]) === e
                                                  ? (0, h.jsx)(
                                                        'div',
                                                        {
                                                            className: nJ().prevTrack,
                                                            children: (0, h.jsx)(nL, { index: e, isDragAndDropEnabled: l, isRemoveAvailable: !0 }, e),
                                                        },
                                                        m,
                                                    )
                                                  : (0, h.jsx)(nL, { index: e, isDragAndDropEnabled: l, isRemoveAvailable: !0 }, e),
                                          ),
                            }),
                        }),
                    });
                }),
                n1 = (0, g.forwardRef)((e, t) => (0, h.jsx)(n0, { forwardRef: t, ...e }));
            var n2 = a(45144),
                n4 = a(23577),
                n8 = a(408),
                n3 = a(11888),
                n5 = a.n(n3);
            let n6 = (e) => {
                    let { index: t } = e,
                        a = nN(t),
                        i = null == a ? void 0 : a.track,
                        l = null == a ? void 0 : a.playContextParams;
                    return i && l
                        ? (0, h.jsx)('div', {
                              className: n5().root,
                              children: (0, h.jsx)(ez.K, {
                                  track: i,
                                  playContextParams: l,
                                  draggingClassName: n5().dots,
                                  className: n5().noHoverItem,
                                  withDNDBlock: !0,
                                  isDragging: !0,
                                  withSecondaryColor: !0,
                              }),
                          })
                        : null;
                },
                n9 = (0, y.PA)((e) => {
                    let { children: t } = e,
                        {
                            fullscreenPlayer: {
                                playQueue: { isDragAndDropEnabled: a },
                            },
                        } = (0, T.g)(),
                        { activeId: i, handleDragStart: l, handleDragCancel: n, sensors: r } = (0, n8.Y)(),
                        s = (0, g.useCallback)((e) => {
                            let { active: t, over: a } = e;
                            if (!t.id || !(null == a ? void 0 : a.id)) return;
                        }, []),
                        o = (0, g.useMemo)(() => {
                            if (i)
                                return (0, iM.createPortal)(
                                    (0, h.jsx)(n2.Hd, { dropAnimation: { duration: 0 }, children: (0, h.jsx)(n6, { index: Number(i) }) }),
                                    window.document.body,
                                );
                        }, [i]);
                    return a
                        ? (0, h.jsxs)(n2.Mp, {
                              sensors: r,
                              collisionDetection: n2.fp,
                              onDragStart: l,
                              onDragEnd: s,
                              onDragCancel: n,
                              modifiers: [n4.FN],
                              children: [t, o],
                          })
                        : t;
                });
            var n7 = a(41925),
                re = a(62214),
                rt = a.n(re);
            let ra = (0, y.PA)(() => {
                let {
                        fullscreenPlayer: {
                            modal: e,
                            playQueue: { isDragAndDropEnabled: t },
                        },
                        sonataState: { isContextRepeatMode: a, isOneRepeatMode: i, shuffle: l },
                    } = (0, T.g)(),
                    { formatMessage: n } = (0, H.A)(),
                    { url: r, title: s, subTitle: o } = nH(),
                    c = (0, n7.C)({ onClick: e.close }),
                    d = (0, g.useMemo)(() => {
                        let e = (0, h.jsx)(ec.DZ, {
                            variant: 'h2',
                            size: 'm',
                            weight: 'bold',
                            lineClamp: 1,
                            className: (0, eO.$)(rt().heading, { [rt().heading_withOffset]: !o }),
                            'data-test-id': r ? void 0 : q.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE,
                            children: s,
                        });
                        return r
                            ? (0, h.jsx)(aj.N, {
                                  className: rt().title,
                                  containerClassName: rt().linkContainer,
                                  textClassName: rt().linkText,
                                  icon: (0, h.jsx)($.I, { className: rt().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                  iconPosition: 'right',
                                  href: r,
                                  onClick: c,
                                  'data-test-id': q.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE,
                                  children: e,
                              })
                            : e;
                    }, [c, o, s, r]),
                    u = (0, tN.L)(() =>
                        a ? n({ id: 'play-queue.repeat-context' }) : i ? n({ id: 'play-queue.repeat-one' }) : l ? n({ id: 'play-queue.shuffle' }) : null,
                    );
                return (0, h.jsxs)('div', {
                    className: (0, eO.$)(rt().root, { [rt().root_withDnD]: t }),
                    children: [
                        (0, h.jsx)(ec.HL, {
                            variant: 'div',
                            size: 'm',
                            className: rt().subTitle,
                            'data-test-id': q.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_SUBTITLE,
                            children: o,
                        }),
                        d,
                        (0, h.jsx)(ec.HL, {
                            variant: 'div',
                            size: 'm',
                            className: rt().modeTitle,
                            'data-test-id': q.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_MODE_TITLE,
                            children: u,
                        }),
                    ],
                });
            });
            var ri = a(76252),
                rl = a.n(ri);
            let rn = (0, y.PA)(() => {
                    var e, t;
                    let { from: a } = (0, eW.f)(),
                        {
                            fullscreenPlayer: {
                                playQueue: { currentIndex: i, isDragAndDropEnabled: l },
                            },
                            sonataState: { entityMeta: n },
                        } = (0, T.g)(),
                        { isMovingForward: r, isMovingBackward: s } = nC(),
                        o = (0, aF.e)(),
                        c = null == o || null == (t = o.state.currentContext) || null == (e = t.value) ? void 0 : e.data;
                    if (!c || !n) return null;
                    let d = { contextData: { ...c, from: a }, queueParams: { index: i, entityId: n.id } };
                    return (0, h.jsxs)('div', {
                        className: rl().root,
                        'data-test-id': q.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK,
                        children: [
                            (0, h.jsx)(ra, {}),
                            (0, h.jsx)(ez.K, {
                                track: n,
                                playContextParams: d,
                                className: (0, eO.$)(rl().track, rl().important, {
                                    [rl().track_withDnD]: l,
                                    [rl().track_moveFromTop]: s,
                                    [rl().track_moveFromBottom]: r,
                                }),
                                withSecondaryColor: !0,
                            }),
                        ],
                    });
                }),
                rr = () => {
                    let { style: e, contextValue: t } = (() => {
                            var e;
                            let {
                                    fullscreenPlayer: {
                                        playQueue: { updateTracks: t, hiddenTrackIds: a },
                                    },
                                } = (0, T.g)(),
                                i = (0, aF.e)(),
                                [l, n] = (0, g.useState)(),
                                r = (0, g.useRef)(void 0),
                                s = (0, g.useRef)(void 0),
                                o = (0, g.useRef)(void 0),
                                { state: c, handleDebouncedToggle: d } = (0, n_.F)({ delay: 600, throttleTimeout: 600 }),
                                { state: u, handleDebouncedToggle: _ } = (0, n_.F)({ delay: 600, throttleTimeout: 600 }),
                                m = (0, A.c)(() => {
                                    var e;
                                    let a = null == i ? void 0 : i.state.queueState.entityList.value,
                                        l = null == i ? void 0 : i.state.queueState.index.value,
                                        n = null == i ? void 0 : i.state.queueState.order.value,
                                        r = null == i || null == (e = i.state.currentContext.value) ? void 0 : e.data.type;
                                    a && 'number' == typeof l && n && r && t(a, l, n, r);
                                }),
                                p = (0, A.c)(() => {
                                    var e;
                                    let t = null == i ? void 0 : i.state.queueState.index.value,
                                        l = null == i || null == (e = i.state.currentContext.value) ? void 0 : e.data.type,
                                        c = r.current;
                                    if ('number' == typeof t && 'number' == typeof c) {
                                        let e = a.reduce((e, t) => (t < c ? e + 1 : e - 1), 0),
                                            i = t - c;
                                        o.current = i;
                                        let r = l !== s.current,
                                            u = 1 === Math.abs(i) ? i : i + e;
                                        i > 0 || r ? (d(), n(r ? 1 : u)) : i < 0 && (_(), n(u));
                                    }
                                    ((r.current = t), (s.current = l));
                                });
                            ((0, g.useEffect)(() => {
                                let e =
                                    null == i
                                        ? void 0
                                        : i.state.queueState.index.onChange(() => {
                                              (m(), p());
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [p, m, null == i ? void 0 : i.state.queueState.index]),
                                (0, g.useEffect)(() => {
                                    let e = null == i ? void 0 : i.state.queueState.shuffle.onChange(m),
                                        t = null == i ? void 0 : i.state.queueState.entityList.onChange(m),
                                        a = null == i ? void 0 : i.state.queueState.order.onChange(m);
                                    return () => {
                                        (null == e || e(), null == t || t(), null == a || a());
                                    };
                                }, [
                                    m,
                                    null == i ? void 0 : i.state.queueState.entityList,
                                    null == i ? void 0 : i.state.queueState.index,
                                    null == i ? void 0 : i.state.queueState.order,
                                    null == i ? void 0 : i.state.queueState.shuffle,
                                ]));
                            let v = (0, g.useMemo)(() => {
                                    let e = 56 * (l || 1);
                                    return {
                                        '--play-queue-transition-duration-s': ''.concat(0.6, 's'),
                                        '--now-playing-title-height-px': ''.concat(90, 'px'),
                                        '--next-in-title-height-px': ''.concat(52, 'px'),
                                        '--track-height-px': ''.concat(56, 'px'),
                                        '--move-to-top-start-position': ''.concat(e, 'px'),
                                        '--move-from-top-start-position': ''.concat(e - 142, 'px'),
                                        '--move-to-bottom-start-position': ''.concat(e, 'px'),
                                        '--move-from-bottom-start-position': ''.concat(e + 52 + 90, 'px'),
                                        '--move-from-top-now-playing-block-start-position': ''.concat(e - 90, 'px'),
                                        '--move-from-bottom-now-playing-block-start-position': ''.concat(e + 52, 'px'),
                                    };
                                }, [l]),
                                x = 1 === Math.abs(null != l ? l : 0);
                            return {
                                style: v,
                                contextValue: { isMovingForward: c, isMovingBackward: u, difference: null != (e = o.current) ? e : 0, isSingleTrackSwitch: x },
                            };
                        })(),
                        a = (0, g.useRef)(null),
                        i = (0, g.useRef)(null),
                        { state: l, handleDebouncedToggle: n, reset: r } = (0, n_.F)({ delay: 1e4, throttleTimeout: 2e3 }),
                        s = (0, g.useCallback)(function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'instant';
                            if (i.current && a.current) {
                                let t = i.current.clientHeight;
                                a.current.scrollTo({ top: t, behavior: e });
                            }
                        }, []);
                    return (
                        (0, g.useEffect)(() => {
                            l || (s('smooth'), r());
                        }, [l, r, s]),
                        (0, g.useEffect)(() => {
                            let e = a.current;
                            return (
                                null == e || e.addEventListener('scroll', n),
                                () => {
                                    null == e || e.removeEventListener('scroll', n);
                                }
                            );
                        }, [n]),
                        (0, h.jsx)(n9, {
                            children: (0, h.jsx)(ny.Provider, {
                                value: t,
                                children: (0, h.jsx)('div', {
                                    className: nb().root,
                                    style: e,
                                    'data-test-id': q.e8.player.PLAY_QUEUE,
                                    children: (0, h.jsx)('div', {
                                        className: nb().content,
                                        ref: a,
                                        children: (0, h.jsxs)('div', {
                                            className: nb().scrollContent,
                                            children: [(0, h.jsx)(n1, { ref: i, scrollToNowPlayingBlock: s }), (0, h.jsx)(rn, {}), (0, h.jsx)(nZ, {})],
                                        }),
                                    }),
                                }),
                            }),
                        })
                    );
                },
                rs = (0, g.createContext)({});
            var ro = a(5276),
                rc = a.n(ro),
                rd = a(22666),
                ru = a.n(rd);
            let r_ = (0, y.PA)((e) => {
                let { className: t, icon: a } = e,
                    { sonataState: i } = (0, T.g)(),
                    l = (0, g.useCallback)(
                        (e) => {
                            let t = { animationDelay: ''.concat((e + 1) * 0.275, 's'), animationDuration: ''.concat(1.1, 's, ').concat(1.1, 's') };
                            return a
                                ? (0, g.cloneElement)(a, {
                                      className: (0, eO.$)(ru().element, ru().element_withIcon, { [ru().element_paused]: i.isPaused }),
                                      key: e,
                                      style: t,
                                  })
                                : (0, h.jsx)(
                                      'div',
                                      { className: (0, eO.$)(ru().element, ru().element_withDefaultElement, { [ru().element_paused]: i.isPaused }), style: t },
                                      e,
                                  );
                        },
                        [a, i],
                    );
                return (0, h.jsx)('div', { className: (0, eO.$)(ru().root, t), children: Array.from({ length: 4 }, (e, t) => l(t)) });
            });
            var rm = a(61758),
                rp = a(44361),
                rv = a(39947),
                rx = (function (e) {
                    return ((e.INTRO = 'intro'), (e.PREPARE = 'prepare'), (e.PLAYING = 'playing'), (e.OUTRO = 'outro'), e);
                })({}),
                rh = a(7123),
                ry = a(23474),
                rC = a.n(ry);
            let rg = (0, y.PA)(() => {
                var e, t, a;
                let { formatMessage: i } = (0, H.A)(),
                    {
                        fullscreenPlayer: { syncLyrics: l },
                    } = (0, T.g)();
                return (0, h.jsxs)('footer', {
                    className: rC().root,
                    children: [
                        l.hasWriters &&
                            (0, h.jsx)(ec.HL, {
                                className: rC().writers,
                                variant: 'div',
                                size: 'l',
                                weight: 'medium',
                                children: i({ id: 'entity-names.authors' }, { authors: null == (e = l.writers) ? void 0 : e.join(', ') }),
                            }),
                        (null == (t = l.major) ? void 0 : t.prettyName) &&
                            (0, h.jsx)(ec.HL, {
                                className: rC().major,
                                variant: 'div',
                                size: 'l',
                                weight: 'medium',
                                children: i({ id: 'entity-names.source' }, { source: null == (a = l.major) ? void 0 : a.prettyName }),
                            }),
                    ],
                });
            });
            var rb = a(37076),
                rA = a.n(rb);
            let rf = (e) => {
                // for PulseSync: BEGIN render timed word opacity for synchronized lyrics
                let { className: t, text: a, words: i, progressPosition: l, isActive: n } = e;
                if (!n || !Array.isArray(i) || !i.length)
                    return (0, h.jsx)('span', {
                        className: (0, eO.$)(rA().root, t),
                        children: a,
                    });
                return (0, h.jsx)('span', {
                    className: (0, eO.$)(rA().root, t),
                    children: i.map((e, t) => {
                        const a = typeof e.toSec === 'number' && e.toSec > e.fromSec ? e.toSec : e.fromSec;
                        const i = l < e.fromSec ? 0 : a <= e.fromSec || l >= a ? 1 : (l - e.fromSec) / (a - e.fromSec);
                        return (0, h.jsx)(
                            'span',
                            {
                                className: 'PulseSyncWordLyrics_word',
                                style: {
                                    opacity: 0.35 + 0.65 * Math.max(0, Math.min(1, i)),
                                },
                                children: e.text,
                            },
                            ''.concat(e.fromSec, ':').concat(e.toSec, ':').concat(t),
                        );
                    }),
                });
                // for PulseSync: END render timed word opacity for synchronized lyrics
            };
            var rj = a(68164),
                rT = a.n(rj);
            let rN = (0, y.PA)((e) => {
                var t, a;
                let { state: i, progressPosition: l, shouldShowScrolledLyrics: n, setProgressPosition: r } = e,
                    s = (0, aF.e)(),
                    o = (0, rp.Mn)(),
                    {
                        fullscreenPlayer: { syncLyrics: c },
                    } = (0, T.g)(),
                    d = (0, g.useCallback)(
                        (e) => (t) => {
                            n &&
                                (t.stopPropagation(),
                                r(e + 0.01),
                                null == s ||
                                    s.setProgress(e + 0.01).catch(() => {
                                        r(l);
                                    }));
                        },
                        [l, r, n, s],
                    ),
                    u = c.getActiveLineIndex(l);
                // for PulseSync: BEGIN read and subscribe to the word-sync lyrics preference
                const [pulseSyncWordSyncEnabled, setPulseSyncWordSyncEnabled] = (0, g.useState)(
                    () => window.nativeSettings?.get('modSettings.lrclib.useWordSync') !== !1,
                );
                (0, g.useEffect)(
                    () =>
                        window.musicDesktop?.pulsesync.settings.onChange?.((key, value) => {
                            if (key === 'modSettings.lrclib.useWordSync') setPulseSyncWordSyncEnabled(value !== !1);
                        }),
                    [],
                );
                // for PulseSync: END read and subscribe to the word-sync lyrics preference
                return (
                    ((e) => {
                        let t = (0, g.useRef)(0),
                            {
                                fullscreenPlayer: { syncLyrics: a },
                                sonataState: { contextId: i, contextType: l },
                            } = (0, T.g)();
                        (0, g.useEffect)(() => {
                            !a.hasLyricsViewed &&
                                null !== e &&
                                'visible' === document.visibilityState &&
                                (t.current++,
                                t.current >= 2 &&
                                    a.sendViews({
                                        contextId: i,
                                        contextType: l,
                                    }));
                        }, [e, i, l, a]);
                    })(u),
                    (0, g.useEffect)(() => {
                        if (!n) {
                            // for PulseSync: BEGIN update the synchronized lyrics scroll state
                            o.update();
                            // for PulseSync: END update the synchronized lyrics scroll state
                            if (((i === rx.INTRO || i === rx.PREPARE) && o.slideTo(0), i === rx.OUTRO)) {
                                var e;
                                o.slideTo(Number(null == (e = c.lines) ? void 0 : e.length));
                            }
                            null !== u && o.slideTo(u + 1);
                        }
                    }, [u, n, i, o, null == (t = c.lines) ? void 0 : t.length]),
                    null == (a = c.lines)
                        ? void 0
                        : a.map((e, t) => {
                              var a;
                              return (0, h.jsx)(
                                  rp.qr,
                                  {
                                      onClickCapture: d(e.fromSec),
                                      className: (0, eO.$)(rT().line, {
                                          [rT().line_last]: t === Number(null == (a = c.lines) ? void 0 : a.length) - 1 && !n,
                                          [rT().line_active]: t === u && !n,
                                      }),
                                      'data-test-id': q.e8.player.SYNC_LYRICS_LINE,
                                      // for PulseSync: BEGIN pass word timing and active-line state to lyric rendering
                                      children: (0, h.jsx)(rf, {
                                          text: e.text,
                                          words: e.words,
                                          progressPosition: l,
                                          isActive: pulseSyncWordSyncEnabled && t === u && !n,
                                      }),
                                      // for PulseSync: END pass word timing and active-line state to lyric rendering
                                  },
                                  e.key,
                              );
                          })
                );
            });
            rN.displayName = 'SwiperSlide';
            let rI = { forceToAxis: !0 },
                rk = (0, y.PA)(() => {
                    let {
                            fullscreenPlayer: { syncLyrics: e },
                            settings: { isMobile: t },
                        } = (0, T.g)(),
                        { progressPosition: a, setProgressPosition: i } = (() => {
                            var e;
                            let t = (0, aF.e)(),
                                [a, i] = (0, g.useState)(null != (e = null == t ? void 0 : t.state.playerState.progress.value.position) ? e : 0),
                                l = (0, g.useCallback)((e) => {
                                    i(e);
                                }, []);
                            return (
                                (0, g.useEffect)(() => {
                                    let e =
                                        null == t
                                            ? void 0
                                            : t.state.playerState.progress.onChange(() => {
                                                  i(t.state.playerState.progress.value.position);
                                              });
                                    return () => {
                                        null == e || e();
                                    };
                                }, [t]),
                                { progressPosition: a, setProgressPosition: l }
                            );
                        })(),
                        { state: l } = ((e) => {
                            let { position: t } = e,
                                {
                                    fullscreenPlayer: { syncLyrics: a },
                                } = (0, T.g)();
                            return {
                                state: (0, g.useMemo)(() => {
                                    let { startSec: e, endSec: i } = a;
                                    return e && e >= 3 && e - t > 0 && e - t <= 3 ? rx.PREPARE : e && e > t ? rx.INTRO : i && t > i ? rx.OUTRO : rx.PLAYING;
                                }, [t, a]),
                            };
                        })({ position: a }),
                        { scrollerClassName: n, footerClassName: r, counterClassName: s } = (0, g.useContext)(rs),
                        { state: o, handleDebouncedToggle: c, reset: d } = (0, n_.F)({ delay: 3e3, throttleTimeout: 300 }),
                        { state: u, handleDebouncedToggle: _, reset: m } = (0, n_.F)({ delay: 3e3, throttleTimeout: 300 }),
                        p = (0, g.useCallback)(() => {
                            u || c();
                        }, [c, u]),
                        v = (0, g.useCallback)(() => {
                            (o && d(), _());
                        }, [_, d, o]),
                        x = (0, g.useCallback)(
                            (e) => {
                                switch (e.code) {
                                    case rv.Y.KEY_L:
                                    case rv.Y.KEY_J:
                                    case rv.Y.ARROW_LEFT:
                                    case rv.Y.ARROW_RIGHT:
                                        c();
                                }
                            },
                            [c],
                        ),
                        y = (0, g.useMemo)(() => (l === rx.PREPARE ? Math.ceil(Number(e.startSec) - a) : null), [a, l, e.startSec]),
                        C = (0, g.useMemo)(
                            () => (l === rx.PREPARE ? (0, h.jsx)(rf, { className: rT().counterLine, text: y }) : l === rx.INTRO ? (0, h.jsx)(r_, {}) : null),
                            [y, l],
                        );
                    return (
                        ((e) => {
                            let { onSetProgressEventChange: t } = e,
                                a = (0, aF.e)();
                            (0, g.useEffect)(() => {
                                let e =
                                    null == a
                                        ? void 0
                                        : a.state.playerState.event.onChange((e) => {
                                              e === rh.Iu.SET_PROGRESS && t();
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [t, a]);
                        })({ onSetProgressEventChange: m }),
                        (0, g.useEffect)(
                            () => (
                                window.addEventListener('keydown', x),
                                () => {
                                    window.removeEventListener('keydown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, g.useEffect)(
                            () => (
                                window.addEventListener('mousemove', p),
                                () => {
                                    window.removeEventListener('mousemove', p);
                                }
                            ),
                            [p],
                        ),
                        (0, h.jsxs)(rp.RC, {
                            className: (0, eO.$)(
                                rT().root,
                                { [rT()['root_'.concat(l)]]: !u, [rT().root_withVisibleUpperLyrics]: o, [rT().root_withVisibleScrolledLyrics]: u },
                                n,
                            ),
                            modules: [rm.FJ, rm.U1],
                            slidesPerView: 'auto',
                            spaceBetween: 32,
                            direction: 'vertical',
                            mousewheel: rI,
                            freeMode: !0,
                            onScroll: v,
                            onTouchMove: t ? v : void 0,
                            allowTouchMove: t,
                            children: [
                                (0, h.jsx)(rp.qr, { className: (0, eO.$)(rT().counter, s), children: C }),
                                (0, h.jsx)(rN, { setProgressPosition: i, shouldShowScrolledLyrics: u, state: l, progressPosition: a }),
                                (0, h.jsx)(rp.qr, { className: r, children: (0, h.jsx)(rg, {}) }),
                            ],
                        })
                    );
                }),
                rS = (0, y.PA)((e) => {
                    let { className: t, counterClassName: a, footerClassName: i, scrollerClassName: l, contentClassName: n, loaderClassName: r } = e,
                        s = (0, g.useRef)(null),
                        // for PulseSync: BEGIN access the player runtime for next-track lyrics prefetch
                        sonataRuntimeState = (0, aF.e)(),
                        // for PulseSync: END access the player runtime for next-track lyrics prefetch
                        {
                            sonataState: { entityMeta: o },
                            // for PulseSync: BEGIN access the synchronized lyrics model and automatic hiding action
                            fullscreenPlayer: { syncLyrics: c, autoHideSyncLyrics: d },
                            // for PulseSync: END access the synchronized lyrics model and automatic hiding action
                        } = (0, T.g)();
                    // for PulseSync: BEGIN load, prefetch and auto-hide synchronized lyrics per track
                    (0, g.useEffect)(() => {
                        const trackId = null == o ? void 0 : o.id;
                        const nativeAvailable =
                            (null == o ? void 0 : o.isSyncLyricsAvailable) ||
                            (null == o ? void 0 : o.isSyncLyricsAvailableWithOfflineFeature) ||
                            (null == o ? void 0 : o.hasSyncLyrics);
                        let lrclibEnabled = !0;
                        try {
                            lrclibEnabled = window.nativeSettings?.get('modSettings.lrclib.useText') !== !1;
                        } catch (_error) {}
                        if (
                            trackId &&
                            !(null == o ? void 0 : o.isNonMusic) &&
                            c.currentTrackId !== trackId &&
                            (nativeAvailable || lrclibEnabled || o.trackSource === 'UGC')
                        ) {
                            c.getData(trackId);
                        }
                        c.prefetchNextTrack(sonataRuntimeState);
                    }, [
                        null == o ? void 0 : o.id,
                        null == o ? void 0 : o.isSyncLyricsAvailable,
                        null == o ? void 0 : o.isSyncLyricsAvailableWithOfflineFeature,
                        null == o ? void 0 : o.hasSyncLyrics,
                        null == o ? void 0 : o.isNonMusic,
                        null == o ? void 0 : o.trackSource,
                        c.currentTrackId,
                        c,
                        sonataRuntimeState,
                    ]);
                    (0, g.useEffect)(() => {
                        const trackId = null == o ? void 0 : o.id;
                        if (!trackId || String(c.currentTrackId) !== String(trackId) || c.isLoadingForTrack(trackId)) return;
                        if (c.isRejected || c.hasInvalidLyrics) d(trackId);
                    }, [null == o ? void 0 : o.id, c.currentTrackId, c.isLoading, c.isRejected, c.hasInvalidLyrics, c.lines, c, d]);
                    let u = (0, g.useMemo)(() => {
                            const trackId = null == o ? void 0 : o.id;
                            if (trackId && c.hasLyricsForTrack(trackId))
                                return (0, h.jsx)(rk, {
                                    key: String(trackId),
                                });
                            if (trackId && c.isLoadingForTrack(trackId))
                                return (0, h.jsx)(r_, {
                                    className: r,
                                });
                            if (c.isRejected || c.hasInvalidLyrics) return null;
                            return (0, h.jsx)(r_, {
                                className: r,
                            });
                        }, [null == o ? void 0 : o.id, c.currentTrackId, c.lines, c.isLoading, c.isResolved, c.isRejected, c.hasInvalidLyrics, r, c]),
                        _ = (0, g.useMemo)(
                            () => ({
                                counterClassName: a,
                                scrollerClassName: l,
                                footerClassName: i,
                            }),
                            [a, i, l],
                        );
                    // for PulseSync: END load, prefetch and auto-hide synchronized lyrics per track
                    return (0, h.jsx)(rs.Provider, {
                        value: _,
                        children: (0, h.jsx)('div', {
                            ref: s,
                            className: (0, eO.$)(rc().root, t),
                            children: (0, h.jsx)('div', {
                                className: (0, eO.$)(rc().content, n),
                                'data-test-id': q.e8.player.SYNC_LYRICS_CONTENT,
                                children: u,
                            }),
                        }),
                    });
                });
            var rL = a(17743),
                rE = a(64014),
                rM = a(64546),
                rP = a(81883),
                rO = a(66022),
                rw = a.n(rO);
            let rR = (0, y.PA)((e) => {
                    let {
                            className: t,
                            variant: a = 'text',
                            iconSize: i,
                            iconClassName: l,
                            withRipple: n = !1,
                            size: r = 's',
                            forwardRef: s,
                            children: o,
                            color: c,
                            disabled: d = !1,
                        } = e,
                        { formatMessage: u } = (0, H.A)(),
                        {
                            fullscreenPlayer: { isPlayQueueMode: _, hidePlayQueue: m, showPlayQueue: p },
                        } = (0, T.g)(),
                        v = (0, g.useCallback)(() => (_ ? m() : p()), [m, _, p]),
                        { scaleAnimation: x, unscaleAnimation: y, handleAnimationEnd: C, handleClick: b } = (0, rP.C)({ shouldStartFromUnscale: _, onClick: v });
                    return (0, h.jsx)(Q.$, {
                        className: (0, eO.$)(rw().root, { [rw().animation_scaled]: x, [rw().animation_unscaled]: y }, t),
                        color: c,
                        onAnimationEnd: C,
                        withRipple: n,
                        variant: a,
                        size: r,
                        radius: 'xxxl',
                        'aria-label': u({ id: 'play-queue.title' }),
                        'aria-pressed': _,
                        onClick: b,
                        icon: (0, h.jsx)($.I, { size: i, className: (0, eO.$)(rw().icon, l, { [rw().icon_active]: _ }), variant: 'playQueue' }),
                        ref: s,
                        disabled: d,
                        'data-test-id': q.e8.player.FULLSCREEN_PLAYER_QUEUE_BUTTON,
                        children: o,
                    });
                }),
                rD = (0, g.forwardRef)((e, t) => (0, h.jsx)(rR, { forwardRef: t, ...e }));
            var rB = a(6252),
                rF = a.n(rB);
            let rU = (0, y.PA)((e) => {
                    let {
                            className: t,
                            variant: a = 'text',
                            iconSize: i,
                            iconClassName: l,
                            withRipple: n = !1,
                            size: r = 's',
                            forwardRef: s,
                            children: o,
                            color: c,
                            disabled: d = !1,
                        } = e,
                        { formatMessage: u } = (0, H.A)(),
                        {
                            fullscreenPlayer: { isSyncLyricsMode: _, hideSyncLyrics: m, showSyncLyrics: p },
                        } = (0, T.g)(),
                        v = (0, g.useCallback)(() => (_ ? m() : p()), [m, _, p]),
                        { scaleAnimation: x, unscaleAnimation: y, handleAnimationEnd: C, handleClick: b } = (0, rP.C)({ shouldStartFromUnscale: _, onClick: v }),
                        A = ''.concat(u({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(u({ id: 'warning-messages.can-break-accessibility' }));
                    return (0, h.jsx)(Q.$, {
                        className: (0, eO.$)(rF().root, { [rF().animation_scaled]: x, [rF().animation_unscaled]: y }, t),
                        color: c,
                        onAnimationEnd: C,
                        withRipple: n,
                        variant: a,
                        size: r,
                        radius: 'xxxl',
                        'aria-label': A,
                        'aria-pressed': _,
                        onClick: b,
                        icon: (0, h.jsx)($.I, { size: i, className: (0, eO.$)(rF().icon, l, { [rF().icon_active]: _ }), variant: 'syncLyrics' }),
                        ref: s,
                        disabled: d,
                        'data-test-id': q.e8.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON,
                        children: o,
                    });
                }),
                rz = (0, g.forwardRef)((e, t) => (0, h.jsx)(rU, { forwardRef: t, ...e }));
            var rW = a(18888),
                rV = a.n(rW);
            let rK = (0, y.PA)(() => {
                var e;
                let [t, a] = (0, g.useState)(!1),
                    // for PulseSync: BEGIN access synchronized lyrics auto-hide and restore actions
                    {
                        sonataState: i,
                        user: l,
                        fullscreenPlayer: { syncLyrics: syncLyricsModel, autoHideSyncLyrics, restoreSyncLyricsForTrack },
                    } = (0, T.g)(),
                    // for PulseSync: END access synchronized lyrics auto-hide and restore actions
                    { entityMeta: n } = i,
                    { handleDebouncedToggle: r } = (0, n_.F)({
                        delay: 1500,
                        throttleTimeout: 300,
                    }),
                    s = i.canSpeed && ((null == n ? void 0 : n.isNonMusic) || (null == n || null == (e = n.mainAlbum) ? void 0 : e.isNonMusic)),
                    o = (0, e1.K)(n),
                    c = (0, g.useCallback)((e) => {
                        e.stopPropagation();
                    }, []),
                    d = (0, tN.L)(() => {
                        if ((null == n || !n.isRemoved) && (null == n ? void 0 : n.isAvailable))
                            return (0, h.jsx)(e0._, {
                                track: n,
                                open: t,
                                onOpenChange: a,
                                placement: 'left',
                                icon: (0, h.jsx)($.I, {
                                    variant: 'more',
                                    size: 'm',
                                }),
                                className: (0, eO.$)(rV().menuButton, {
                                    [rV().menuButton_active]: t,
                                }),
                                wrapperClassName: rV().menuWrapper,
                                onClick: c,
                                size: 'l',
                                'data-test-id': q.e8.player.FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON,
                            });
                    }),
                    // for PulseSync: BEGIN restore synchronized lyrics when a new track has valid lyrics
                    restoreTrackId = null == n ? void 0 : n.id,
                    restoreSyncLyricsEffect =
                        ((0, g.useEffect)(() => {
                            if (!restoreTrackId || String(syncLyricsModel.currentTrackId) !== String(restoreTrackId) || syncLyricsModel.isLoadingForTrack(restoreTrackId))
                                return;
                            if (syncLyricsModel.isRejected || syncLyricsModel.hasInvalidLyrics) {
                                autoHideSyncLyrics(restoreTrackId);
                                return;
                            }
                            if (syncLyricsModel.hasLyricsForTrack(restoreTrackId)) restoreSyncLyricsForTrack(restoreTrackId);
                        }, [
                            restoreTrackId,
                            syncLyricsModel.currentTrackId,
                            syncLyricsModel.lines,
                            syncLyricsModel.isLoading,
                            syncLyricsModel.isRejected,
                            syncLyricsModel.hasInvalidLyrics,
                            syncLyricsModel.isResolved,
                            syncLyricsModel,
                            autoHideSyncLyrics,
                            restoreSyncLyricsForTrack,
                        ]),
                        null),
                    // for PulseSync: END restore synchronized lyrics when a new track has valid lyrics
                    // for PulseSync: BEGIN refresh synchronized lyrics availability when model state changes
                    u = (0, g.useMemo)(() => {
                        // for PulseSync: BEGIN include cached fallback results in synchronized lyrics availability
                        const trackId = null == n ? void 0 : n.id;
                        const syncLyricsAvailable =
                            (null == n ? void 0 : n.isSyncLyricsAvailable) ||
                            (null == n ? void 0 : n.isSyncLyricsAvailableWithOfflineFeature) ||
                            (null == n ? void 0 : n.hasSyncLyrics) ||
                            (trackId && syncLyricsModel.hasLyricsForTrack(trackId));
                        if (syncLyricsAvailable)
                            return (0, h.jsx)(rz, {
                                className: rV().syncLyricsButton,
                                iconSize: 'm',
                                size: 'l',
                                variant: 'default',
                                color: 'secondary',
                                disabled: !l.isAuthorized,
                            });
                        // for PulseSync: END include cached fallback results in synchronized lyrics availability
                    }, [
                        null == n ? void 0 : n.id,
                        null == n ? void 0 : n.isSyncLyricsAvailable,
                        null == n ? void 0 : n.isSyncLyricsAvailableWithOfflineFeature,
                        null == n ? void 0 : n.hasSyncLyrics,
                        syncLyricsModel.currentTrackId,
                        syncLyricsModel.lines,
                        syncLyricsModel.isResolved,
                        l.isAuthorized,
                    ]);
                    // for PulseSync: END refresh synchronized lyrics availability when model state changes
                return (
                    (0, g.useEffect)(
                        () => (
                            window.addEventListener('mousemove', r),
                            () => {
                                window.removeEventListener('mousemove', r);
                            }
                        ),
                        [r],
                    ),
                    (0, h.jsxs)('div', {
                        className: (0, eO.$)(rV().root, {
                            [rV().root_visible]: t,
                        }),
                        children: [
                            (0, h.jsx)(rD, {
                                className: rV().playQueueButton,
                                iconSize: 'm',
                                size: 'l',
                                variant: 'default',
                                color: 'secondary',
                                disabled: !l.isAuthorized,
                            }),
                            (0, h.jsx)(rL.$, {
                                className: rV().sonataControls,
                                isMobile: !1,
                                entityMeta: n,
                                isFullscreen: !0,
                            }),
                            d,
                            u,
                            (0, h.jsxs)('div', {
                                className: rV().bottomRightButtonsWrapper,
                                children: [
                                    s &&
                                        (0, h.jsx)(rE.i, {
                                            className: rV().speedButton,
                                            size: 'l',
                                            iconSize: 'm',
                                            isIconCentered: !0,
                                        }),
                                    (0, h.jsx)(rM.WithOffline, {
                                        fallback: (0, h.jsx)(e6.c, {
                                            className: rV().likeButton,
                                            isLiked: null == n ? void 0 : n.isLiked,
                                            onClick: o,
                                            iconSize: 'm',
                                            size: 'l',
                                            variant: 'default',
                                            color: 'secondary',
                                            disabled: !l.isAuthorized,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
            var rY = a(7555),
                rH = a(81877),
                rq = a(32468),
                rQ = a.n(rq);
            let r$ = (e) => {
                let { className: t, children: a, coverUri: i } = e;
                return (0, h.jsxs)(rY.t, {
                    radius: 'm',
                    className: (0, eO.$)(rQ().root, t),
                    'data-test-id': q.e8.player.FULLSCREEN_PLAYER_POSTER_CONTENT,
                    children: [(0, h.jsx)(rH.B, { className: rQ().cover, src: i, size: 400, fit: 'cover', withAvatarReplace: !0 }), a],
                });
            };
            var rG = a(18340),
                rZ = a.n(rG);
            let rX = {
                    enter: rZ().additionalContent_enter,
                    enterActive: rZ().additionalContent_enter_active,
                    exit: rZ().additionalContent_exit,
                    exitActive: rZ().additionalContent_exit_active,
                    appear: rZ().additionalContent_enter,
                    appearActive: rZ().additionalContent_enter_active,
                },
                rJ = (e) => {
                    let { isModeActive: t, shouldDisableInsetTransition: a, children: i } = e,
                        l = (0, g.useRef)(null);
                    return (0, h.jsx)(a1.A, {
                        in: t,
                        nodeRef: l,
                        timeout: 800,
                        unmountOnExit: !0,
                        appear: !0,
                        classNames: rX,
                        children: (0, h.jsx)('div', {
                            ref: l,
                            className: (0, eO.$)(rZ().additionalContent, { [rZ().additionalContent_withDisabledInsetTransition]: a }),
                            children: i,
                        }),
                    });
                },
                r0 = (0, y.PA)(() => {
                    var e;
                    let { state: t, handleDebouncedToggle: a } = (0, n_.F)({ delay: 150, throttleTimeout: 100 }),
                        {
                            sonataState: { entityMeta: i },
                            fullscreenPlayer: l,
                        } = (0, T.g)(),
                        { state: n, toggleTrue: r } = (0, eb.e)(!1),
                        s = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (e = i.mainAlbum) ? void 0 : e.isPodcast),
                        o = null == i ? void 0 : i.isTrackAudiobook,
                        c = {
                            [nh.u.PLAY_QUEUE]: { component: (0, h.jsx)(rr, {}), isActive: l.isPlayQueueMode },
                            [nh.u.SYNC_LYRICS]: {
                                component: (0, h.jsx)(rS, {
                                    className: rZ().syncLyrics,
                                    loaderClassName: rZ().syncLyricsLoader,
                                    contentClassName: rZ().syncLyricsContent,
                                    scrollerClassName: rZ().syncLyricsScroller,
                                    counterClassName: rZ().syncLyricsCounter,
                                    footerClassName: rZ().syncLyricsFooter,
                                }),
                                isActive: l.isSyncLyricsMode,
                            },
                        },
                        d = (0, g.useMemo)(
                            () =>
                                i
                                    ? o
                                        ? (0, h.jsx)(np.Z, {
                                              hasLineClamp: !1,
                                              className: (0, eO.$)(rZ().meta, { [rZ().meta_isSplitMode]: l.isSplitMode }),
                                              titleContainerClassName: rZ().title,
                                              track: i,
                                              withSecondaryColor: !0,
                                              captionSize: 'l',
                                              explicitSize: 'xs',
                                              withAuthor: !0,
                                              textClassName: (0, eO.$)(rZ().nonMusicAuthors, rZ().ellipsis),
                                              withContextMenuArtists: !0,
                                          })
                                        : s
                                          ? (0, h.jsx)(nv.w, {
                                                className: (0, eO.$)(rZ().meta, { [rZ().meta_isSplitMode]: l.isSplitMode }),
                                                titleContainerClassName: rZ().title,
                                                track: i,
                                                withSecondaryColor: !0,
                                                withDate: !1,
                                                captionSize: 'l',
                                                explicitSize: 'xs',
                                                withPodcastName: !0,
                                                textClassName: rZ().nonMusicAuthors,
                                            })
                                          : (0, h.jsx)(nx.j, {
                                                hasLineClamp: !1,
                                                className: (0, eO.$)(rZ().meta, { [rZ().meta_isSplitMode]: l.isSplitMode }),
                                                titleContainerClassName: rZ().title,
                                                track: i,
                                                withSecondaryColor: !0,
                                                withAlbumLink: !1,
                                                captionSize: 'l',
                                                explicitSize: 'xs',
                                                withAllArtistsTitle: !0,
                                                artistsClassName: rZ().artists,
                                                textClassName: rZ().ellipsis,
                                                withContextMenuArtists: !0,
                                            })
                                    : null,
                            [i, null == i ? void 0 : i.id, s, o, l.isSplitMode],
                        );
                    return (
                        (0, g.useEffect)(
                            () => (
                                window.addEventListener('resize', a),
                                () => {
                                    window.removeEventListener('resize', a);
                                }
                            ),
                            [a],
                        ),
                        (0, g.useEffect)(() => {
                            l.isSplitMode && r();
                        }, [l.isSplitMode, l.mode, r]),
                        (0, g.useEffect)(
                            () => () => {
                                (l.reset(), l.playQueue.reset());
                            },
                            [l],
                        ),
                        (0, h.jsxs)('div', {
                            className: rZ().root,
                            children: [
                                (0, h.jsxs)('div', {
                                    className: (0, eO.$)(rZ().fullscreenContent, {
                                        [rZ().fullscreenContent_withDisabledInsetTransition]: t,
                                        [rZ().fullscreenContent_enter]: l.isSplitMode,
                                        [rZ().fullscreenContent_leave]: !l.isSplitMode && n,
                                    }),
                                    'data-test-id': q.e8.player.FULLSCREEN_PLAYER_FULLSCREEN_CONTENT,
                                    children: [
                                        (0, h.jsx)(r$, {
                                            className: (0, eO.$)(rZ().poster, rZ().important),
                                            coverUri: null == i ? void 0 : i.coverUri,
                                            children: (0, h.jsx)(rK, {}),
                                        }),
                                        (0, h.jsxs)('div', {
                                            className: rZ().info,
                                            children: [
                                                d,
                                                (0, h.jsx)(nm.v, {
                                                    className: rZ().sliderContainer,
                                                    sliderClassName: rZ().slider,
                                                    disabled: !i,
                                                    isMobile: !1,
                                                    isFullscreen: l.isSplitMode,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object.entries(c).map((e) => {
                                    let [a, { component: i, isActive: l }] = e;
                                    return (0, h.jsx)(rJ, { isModeActive: l, shouldDisableInsetTransition: t, children: i }, a);
                                }),
                            ],
                        })
                    );
                }),
                r1 = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, H.A)(),
                        {
                            currentTrackInfo: { modal: t },
                            modals: { ugcTrackEditModal: a },
                            sonataState: { entityMeta: i },
                            fullscreenPlayer: l,
                            fullscreenVideoPlayer: n,
                            advert: r,
                        } = (0, T.g)(),
                        s = (0, l7.K)(i);
                    (nc(),
                        (0, g.useEffect)(() => {
                            r.isAdvertShown && l.modal.close();
                        }, [r.isAdvertShown, l.modal]));
                    let o = !t.isOpened && !n.modal.isOpened && !a.modal.isOpened;
                    return (0, h.jsxs)(f.a, {
                        className: (0, eO.$)(nu().root, nu().important),
                        open: l.modal.isOpened,
                        onOpenChange: o ? l.modal.onOpenChange : void 0,
                        onClose: l.modal.close,
                        size: 'fullscreen',
                        placement: 'center',
                        showHeader: !1,
                        style: s,
                        contentClassName: nu().modalContent,
                        closeOnOutsidePress: !1,
                        'data-test-id': q.e8.player.FULLSCREEN_PLAYER_MODAL,
                        children: [
                            (0, h.jsx)('header', {
                                className: nu().header,
                                children: (0, h.jsx)(Q.$, {
                                    className: nu().closeButton,
                                    radius: 'round',
                                    color: 'secondary',
                                    size: 'm',
                                    icon: (0, h.jsx)($.I, { variant: 'arrowDown', size: 'xs' }),
                                    onClick: l.modal.close,
                                    'aria-label': e({ id: 'interface-actions.close' }),
                                    'data-test-id': q.e8.player.FULLSCREEN_PLAYER_CLOSE_BUTTON,
                                }),
                            }),
                            (0, h.jsx)(r0, {}),
                            (0, h.jsx)(l9.Notification, {
                                className: nu().notification,
                                enableMultiContainer: !0,
                                containerId: er.u.FULLSCREEN_INFO,
                                position: 'bottom-center',
                            }),
                            (0, h.jsx)(l9.Notification, {
                                className: nu().notification,
                                enableMultiContainer: !0,
                                containerId: er.u.FULLSCREEN_ERROR,
                                position: 'bottom-center',
                            }),
                        ],
                    });
                });
            var r2 = a(63983),
                r4 = a.n(r2),
                r8 = a(27397),
                r3 = a(36361),
                r5 = a(14315),
                r6 = a(68039),
                r9 = a(58292);
            let r7 = (0, y.PA)((e) => {
                var t, a, i, l;
                let { className: n, onSyncLyricsButtonClick: r } = e,
                    {
                        sonataState: s,
                        settings: { isLandscape: o },
                        // for PulseSync: BEGIN access the synchronized lyrics model in fullscreen player controls
                        fullscreenPlayer: { isSyncLyricsMode: c, syncLyrics: syncLyricsModel },
                        // for PulseSync: END access the synchronized lyrics model in fullscreen player controls
                        user: { hasPlus: d },
                    } = (0, T.g)(),
                    { formatMessage: u } = (0, H.A)(),
                    [_, m] = (0, g.useState)(!1),
                    p = (0, r8.A)(),
                    // for PulseSync: BEGIN fullscreen player repeat and shuffle hook bindings
                    x = (0, r3.e)(),
                    v = null === s.entityMeta,
                    // for PulseSync: END fullscreen player repeat and shuffle hook bindings
                    y = (null == (t = s.entityMeta) ? void 0 : t.isNonMusic) || (null == (i = s.entityMeta) || null == (a = i.mainAlbum) ? void 0 : a.isNonMusic),
                    C = s.canSpeed && y,
                    b = (0, A.c)(() => {
                        // for PulseSync: BEGIN initialize repeat and shuffle hooks for the fullscreen player
                        x(s);
                        // for PulseSync: END initialize repeat and shuffle hooks for the fullscreen player
                    }),
                    f = (0, A.c)(() => {
                        p(s);
                    }),
                    // for PulseSync: BEGIN refresh the fullscreen lyrics button when fallback results change
                    j = (0, g.useMemo)(() => {
                        if (y) return;
                        // for PulseSync: BEGIN check fallback lyrics availability for the fullscreen lyrics button
                        const track = s.entityMeta;
                        const trackId = null == track ? void 0 : track.id;
                        const syncLyricsAvailable =
                            (null == track ? void 0 : track.isSyncLyricsAvailable) ||
                            (null == track ? void 0 : track.isSyncLyricsAvailableWithOfflineFeature) ||
                            (null == track ? void 0 : track.hasSyncLyrics) ||
                            (trackId && syncLyricsModel.hasLyricsForTrack(trackId));
                        let t = ''
                            .concat(
                                u({
                                    id: 'interface-actions.open-sync-lyrics',
                                }),
                                ' ',
                            )
                            .concat(
                                u({
                                    id: 'warning-messages.can-break-accessibility',
                                }),
                            );
                        // for PulseSync: END check fallback lyrics availability for the fullscreen lyrics button
                        return (0, h.jsx)(Q.$, {
                            className: (0, eO.$)(r4().syncLyricsButton, {
                                [r4().syncLyricsButton_active]: c,
                            }),
                            radius: 'round',
                            size: 'xxxs',
                            variant: 'text',
                            // for PulseSync: BEGIN enable the synchronized lyrics button for fallback results
                            disabled: !syncLyricsAvailable || o,
                            // for PulseSync: END enable the synchronized lyrics button for fallback results
                            withRipple: !1,
                            withHover: !1,
                            'aria-label': t,
                            icon: (0, h.jsx)($.I, {
                                variant: 'syncLyrics',
                                size: 'xs',
                            }),
                            onClick: r,
                        });
                    }, [
                        u,
                        y,
                        c,
                        r,
                        o,
                        null == (l = s.entityMeta) ? void 0 : l.id,
                        null == l ? void 0 : l.isSyncLyricsAvailable,
                        null == l ? void 0 : l.isSyncLyricsAvailableWithOfflineFeature,
                        null == l ? void 0 : l.hasSyncLyrics,
                        syncLyricsModel.currentTrackId,
                        syncLyricsModel.lines,
                        syncLyricsModel.isResolved,
                    ]);
                    // for PulseSync: END refresh the fullscreen lyrics button when fallback results change
                return (0, h.jsx)('div', {
                    className: (0, eO.$)(r4().footer, n),
                    children: (0, h.jsxs)('div', {
                        className: r4().footerContainer,
                        children: [
                            // for PulseSync: BEGIN fullscreen repeat, speed and settings controls
                            (v || s.canChangeRepeatMode) &&
                                (0, h.jsx)(r5.s, {
                                    onClick: f,
                                    isDisabled: v,
                                    repeatMode: s.repeatMode,
                                    variant: 'text',
                                }),
                            C &&
                                (0, h.jsx)(rE.i, {
                                    size: 'xxxs',
                                    iconSize: 'l',
                                }),
                            (0, h.jsx)(r9.p$, {
                                open: _,
                                onOpenChange: m,
                                icon: (0, h.jsx)($.I, {
                                    variant: 'settings',
                                    size: 'xs',
                                }),
                                size: 'xxxs',
                                disabled: !d,
                            }),
                            // for PulseSync: END fullscreen repeat, speed and settings controls
                            j,
                            // for PulseSync: BEGIN fullscreen shuffle control
                            (v || s.canShuffle) &&
                                (0, h.jsx)(r6.u, {
                                    onClick: b,
                                    isDisabled: v,
                                    shuffle: s.shuffle,
                                    variant: 'text',
                                }),
                            // for PulseSync: END fullscreen shuffle control
                        ],
                    }),
                });
            });
            var se = a(34816),
                st = a.n(se);
            let sa = {
                    enter: st().coverWrapper_enter,
                    enterActive: st().coverWrapper_enter_active,
                    exit: st().coverWrapper_exit,
                    exitActive: st().coverWrapper_exit_active,
                },
                si = (0, y.PA)((e) => {
                    var t;
                    let { className: a } = e,
                        i = (0, g.useRef)(null),
                        [l, n] = (0, g.useState)(!1),
                        { state: r, handleDebouncedToggle: s, reset: o } = (0, n_.F)({ delay: 7e3, throttleTimeout: 0 }),
                        {
                            fullscreenPlayer: { isSplitMode: c, isSyncLyricsMode: d, showSyncLyrics: u, hideSyncLyrics: _, isPlayQueueMode: m, syncLyrics: p },
                            sonataState: { entityMeta: v },
                            settings: { isLandscape: x },
                        } = (0, T.g)(),
                        y = (null == v ? void 0 : v.isTrackPodcast) || (null == v || null == (t = v.mainAlbum) ? void 0 : t.isPodcast),
                        C = null == v ? void 0 : v.isTrackAudiobook,
                        b = (r || !c || x) && !m,
                        A = (0, g.useCallback)(() => {
                            d && !x && (r ? o() : s());
                        }, [d, r, o, s, x]),
                        f = (0, g.useCallback)(() => {
                            d && !x && r && s();
                        }, [s, d, r, x]),
                        j = (0, g.useCallback)(() => {
                            if (null == v ? void 0 : v.isSyncLyricsAvailable) return d ? _() : u();
                        }, [null == v ? void 0 : v.isSyncLyricsAvailable, _, d, u]),
                        N = (0, g.useMemo)(() => {
                            if (v)
                                return C
                                    ? (0, h.jsx)(np.Z, {
                                          textClassName: st().metaText,
                                          track: v,
                                          withSecondaryColor: !0,
                                          captionSize: 'l',
                                          explicitSize: 'xs',
                                          withAuthor: !0,
                                          withContextMenuArtists: !0,
                                      })
                                    : y
                                      ? (0, h.jsx)(nv.w, {
                                            textClassName: st().metaText,
                                            track: v,
                                            withSecondaryColor: !0,
                                            withDate: !1,
                                            captionSize: 'l',
                                            explicitSize: 'xs',
                                            withPodcastName: !0,
                                        })
                                      : (0, h.jsx)(nx.j, {
                                            textClassName: st().metaText,
                                            track: v,
                                            withSecondaryColor: !0,
                                            withAlbumLink: !1,
                                            captionSize: 'l',
                                            explicitSize: 'xs',
                                            withAllArtistsTitle: !0,
                                            withContextMenuArtists: !0,
                                        });
                        }, [v, C, y]);
                    return (
                        (0, g.useEffect)(() => {
                            d && x && p.setInvisible();
                        }, [x, d, p]),
                        (0, g.useLayoutEffect)(() => {
                            d && !x && s();
                        }, [s, d, x]),
                        (0, h.jsxs)('div', {
                            onTouchEnd: f,
                            className: (0, eO.$)(st().root, a),
                            children: [
                                (0, h.jsx)('div', {
                                    className: st().content,
                                    children: (0, h.jsxs)('div', {
                                        className: st().wrapper,
                                        children: [
                                            (0, h.jsxs)('div', {
                                                className: (0, eO.$)(st().infoBlock, { [st().infoBlock_withExpandedSyncLyrics]: !r && d && !x }),
                                                children: [
                                                    (0, h.jsxs)('div', {
                                                        onClick: A,
                                                        className: (0, eO.$)(st().contentContainer, { [st().contentContainer_withSplitMode]: c }),
                                                        children: [
                                                            d &&
                                                                !x &&
                                                                (0, h.jsx)(rS, {
                                                                    className: st().syncLyrics,
                                                                    scrollerClassName: st().syncLyricsScroller,
                                                                    contentClassName: st().syncLyricsContent,
                                                                    loaderClassName: st().syncLyricsLoader,
                                                                    footerClassName: st().syncLyricsFooter,
                                                                    counterClassName: st().syncLyricsCounter,
                                                                }),
                                                            m && (0, h.jsx)(rr, {}),
                                                            (0, h.jsx)(a1.A, {
                                                                in: !c || (x && d),
                                                                nodeRef: i,
                                                                timeout: 200,
                                                                unmountOnExit: !0,
                                                                classNames: sa,
                                                                children: (0, h.jsx)(rY.t, {
                                                                    ref: i,
                                                                    radius: 'm',
                                                                    className: st().coverWrapper,
                                                                    children: (0, h.jsx)(rH.B, {
                                                                        className: st().cover,
                                                                        src: null == v ? void 0 : v.coverUri,
                                                                        size: 400,
                                                                        fit: 'cover',
                                                                        withAvatarReplace: !0,
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    !m &&
                                                        (0, h.jsxs)('div', {
                                                            className: st().trackInfo,
                                                            children: [
                                                                !r &&
                                                                    d &&
                                                                    !x &&
                                                                    (0, h.jsx)(rY.t, {
                                                                        className: st().trackInfoCoverContainer,
                                                                        radius: 'xs',
                                                                        children: (0, h.jsx)(rH.B, {
                                                                            className: st().trackInfoCover,
                                                                            src: null == v ? void 0 : v.coverUri,
                                                                            size: 200,
                                                                            fit: 'cover',
                                                                            withAvatarReplace: !0,
                                                                        }),
                                                                    }),
                                                                (0, h.jsxs)('div', {
                                                                    className: st().metaContainer,
                                                                    children: [
                                                                        N,
                                                                        !(null == v ? void 0 : v.isRemoved) &&
                                                                            (null == v ? void 0 : v.isAvailable) &&
                                                                            (0, h.jsx)(e0._, {
                                                                                className: (0, eO.$)(st().contextMenu, { [st().contextMenu_visible]: l }),
                                                                                track: v,
                                                                                open: l,
                                                                                onOpenChange: n,
                                                                                placement: 'bottom',
                                                                                isFullscreenMobile: !0,
                                                                                size: 'xs',
                                                                                icon: (0, h.jsx)($.I, { variant: 'more', size: 'xxs' }),
                                                                                'data-test-id': q.e8.player.MOBILE_FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON,
                                                                            }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                ],
                                            }),
                                            b && (0, h.jsx)(nm.v, { className: st().timeline, disabled: !v, isMobile: !0, isFullscreen: !0, showThumbVariant: 'always' }),
                                            b && (0, h.jsx)(rL.$, { className: st().buttonsBlock, isMobile: !0, entityMeta: v, isFullscreen: !0 }),
                                        ],
                                    }),
                                }),
                                b && (0, h.jsx)(r7, { onSyncLyricsButtonClick: j }),
                            ],
                        })
                    );
                });
            var sl = a(94398),
                sn = a(11114),
                sr = a.n(sn);
            let ss = (0, y.PA)((e) => {
                    let { children: t, className: a } = e,
                        { url: i, title: l, subTitle: n } = nH(),
                        { fullscreenPlayer: r } = (0, T.g)(),
                        s = (0, A.c)((e) => {
                            (e.stopPropagation(), r.modal.isOpened && r.modal.close());
                        }),
                        o = (0, g.useMemo)(() => {
                            let e = (0, h.jsx)(ec.HL, {
                                variant: 'span',
                                size: 'm',
                                className: sr().title,
                                lineClamp: 1,
                                'data-test-id': q.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE,
                                children: l,
                            });
                            return i ? (0, h.jsx)(aj.N, { href: i, target: '_self', onClick: s, className: sr().link, children: e }) : e;
                        }, [s, l, i]);
                    return (0, h.jsxs)('div', {
                        className: (0, eO.$)(sr().root, a),
                        'data-test-id': q.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK,
                        children: [
                            (0, h.jsxs)('div', {
                                className: sr().textBlock,
                                children: [
                                    (0, h.jsx)(ec.HL, {
                                        variant: 'span',
                                        size: 's',
                                        weight: 'normal',
                                        className: sr().subTitle,
                                        'data-test-id': q.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK_SUBTITLE,
                                        children: n,
                                    }),
                                    o,
                                ],
                            }),
                            t,
                        ],
                    });
                }),
                so = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, H.A)(),
                        {
                            fullscreenPlayer: { modal: t, showPlayQueue: a, isPlayQueueMode: i, hidePlayQueue: l },
                            user: n,
                        } = (0, T.g)(),
                        r = (0, g.useCallback)(() => (i ? l() : a()), [l, i, a]);
                    return (0, h.jsxs)('header', {
                        className: r4().header,
                        children: [
                            (0, h.jsx)(Q.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 's',
                                variant: 'text',
                                icon: (0, h.jsx)($.I, { variant: 'arrowDown', size: 'xs' }),
                                onClick: t.close,
                                'aria-label': e({ id: 'interface-actions.close' }),
                                'data-test-id': q.e8.player.MOBILE_FULLSCREEN_PLAYER_CLOSE_BUTTON,
                            }),
                            (0, h.jsx)(ss, {
                                className: r4().headerCenter,
                                children: (0, h.jsx)(sl.k, {
                                    title: e({ id: 'player-actions.cast' }),
                                    description: e({ id: 'future-feature.message' }),
                                    children: (0, h.jsx)(Q.$, {
                                        className: r4().castButton,
                                        radius: 'round',
                                        size: 's',
                                        variant: 'text',
                                        disabled: !0,
                                        withRipple: !1,
                                        'aria-label': e({ id: 'player-actions.cast' }),
                                        icon: (0, h.jsx)($.I, { variant: 'cast', size: 'xs' }),
                                    }),
                                }),
                            }),
                            (0, h.jsx)(Q.$, {
                                className: (0, eO.$)(r4().playQueueButton, { [r4().playQueueButton_active]: i }),
                                radius: 'round',
                                size: 's',
                                variant: 'text',
                                withRipple: !1,
                                withHover: !1,
                                'aria-label': e({ id: 'play-queue.title' }),
                                onClick: r,
                                icon: (0, h.jsx)($.I, { variant: 'playQueue', size: 'xs' }),
                                disabled: !n.isAuthorized,
                                'data-test-id': q.e8.player.MOBILE_FULLSCREEN_PLAYER_QUEUE_BUTTON,
                            }),
                        ],
                    });
                }),
                sc = (0, y.PA)(() => {
                    let {
                            sonataState: { entityMeta: e },
                            fullscreenPlayer: t,
                            advert: a,
                            settings: { isMobile: i },
                        } = (0, T.g)(),
                        l = (0, l7.K)(e);
                    return (
                        nc(),
                        (0, g.useEffect)(() => {
                            a.isAdvertShown && t.modal.close();
                        }, [a.isAdvertShown, t.modal]),
                        (0, h.jsxs)(f.a, {
                            className: (0, eO.$)(r4().root, r4().important),
                            open: t.modal.isOpened,
                            onOpenChange: t.modal.onOpenChange,
                            size: 'fullscreen',
                            placement: 'center',
                            showHeader: !1,
                            style: l,
                            contentClassName: r4().modalContent,
                            lockScroll: i,
                            'data-test-id': q.e8.player.MOBILE_FULLSCREEN_PLAYER_MODAL,
                            children: [
                                (0, h.jsx)(so, {}),
                                (0, h.jsx)(si, {}),
                                (0, h.jsx)(l9.Notification, {
                                    className: r4().notification,
                                    enableMultiContainer: !0,
                                    containerId: er.u.FULLSCREEN_INFO,
                                    position: 'bottom-center',
                                }),
                                (0, h.jsx)(l9.Notification, {
                                    className: r4().notification,
                                    enableMultiContainer: !0,
                                    containerId: er.u.FULLSCREEN_ERROR,
                                    position: 'bottom-center',
                                }),
                            ],
                        })
                    );
                }),
                sd = (0, y.PA)(() => {
                    let {
                            settings: { isMobileLandscapeHeight: e, layout: t },
                        } = (0, T.g)(),
                        a = t === l6.u.Mobile;
                    return (!a && e) || a ? (0, h.jsx)(sc, {}) : (0, h.jsx)(r1, {});
                });
            var su = a(20585),
                s_ = a(99984),
                sm = a(14518);
            let sp = () => {
                let e = (0, tl.st)(),
                    t = (0, ts.U)(),
                    { hash: a } = (0, tl.gf)(),
                    { pageId: i } = (0, sm.$)();
                return (0, g.useCallback)(
                    (l) => {
                        if (!e || !i) return;
                        let n = { hash: a, pageId: tn.W[i], mainObjectType: C.DomainObjectType.Trailer, mainObjectId: l },
                            r = (0, ta.F)({ params: n, logger: t, context: 'useSendEventOnTrailerClosed' });
                        r && (0, s_.XB)(e.evgenInstance, r);
                    },
                    [e, a, t, i],
                );
            };
            var sv = a(99698),
                sx = a(51318),
                sh = a(17071),
                sy = a(38860),
                sC = a(54020),
                sg = a(64284),
                sb = a(82204),
                sA = a(77948);
            let sf = () => {
                let e = (0, tl.st)(),
                    t = (0, ts.U)(),
                    { hash: a } = (0, tl.gf)(),
                    { pageId: i } = (0, sm.$)();
                return (0, g.useCallback)(
                    (l, n) => {
                        if (!e || !i) return;
                        let r = { hash: a, pageId: tn.W[i], mainObjectType: C.DomainObjectType.Trailer, mainObjectId: l };
                        n && ((r.actionType = C.ActionType.Pause), (r.userInteractionType = C.UserInteractionType.Tap));
                        let s = (0, ta.F)({ params: r, logger: t, context: 'useSendEventOnTrailerStarted' });
                        s &&
                            (n && ((e) => 'object' == typeof e && null !== e && 'actionType' in e && 'mainObjectId' in e)(s)
                                ? (0, s_.bv)(e.evgenInstance, s)
                                : (0, s_.e7)(e.evgenInstance, s));
                    },
                    [e, a, t, i],
                );
            };
            var sj = a(27984);
            let sT = (e) => {
                    let { variant: t, blockId: a, meta: i } = e,
                        l = ((e) => {
                            switch (e) {
                                case sj.H.ALBUM:
                                    return tr._Q.ALBUM;
                                case sj.H.ARTIST:
                                    return tr._Q.ARTIST;
                                case sj.H.PLAYLIST:
                                    return tr._Q.PLAYLIST;
                                case sj.H.TRACK:
                                    return tr._Q.TRACK;
                            }
                        })(t),
                        n = ((e) => {
                            switch (e) {
                                case sj.H.ALBUM:
                                    return eF.K.Album;
                                case sj.H.ARTIST:
                                    return eF.K.Artist;
                                case sj.H.PLAYLIST:
                                    return eF.K.Playlist;
                                case sj.H.TRACK:
                                default:
                                    return eF.K.Various;
                            }
                        })(t),
                        r = (null == i ? void 0 : i.uuid) || (null == i ? void 0 : i.id);
                    return (0, eW.f)({ pageId: l, blockId: a, contextId: r, contextType: n, pageEntityId: r });
                },
                sN = (e) => {
                    let { variant: t, id: a, from: i, uuid: l, utmLink: n } = e;
                    switch (t) {
                        case sj.H.ALBUM:
                            return { type: eF.K.Album, trailer: !0, meta: { id: Number(a) }, from: i, utmLink: n };
                        case sj.H.ARTIST:
                            return { type: eF.K.Artist, trailer: !0, meta: { id: String(a) }, from: i, utmLink: n };
                        case sj.H.PLAYLIST:
                            return { type: eF.K.Playlist, trailer: !0, meta: { id: String(a), uuid: l }, from: i, utmLink: n };
                        case sj.H.TRACK:
                            return { type: eF.K.Various, trailer: !0, meta: { id: String(a) }, from: i, utmLink: n };
                    }
                };
            var sI = a(33884),
                sk = a.n(sI);
            let sS = (0, y.PA)(() => {
                    let { trailer: e } = (0, T.g)(),
                        { variant: t, id: a } = e,
                        i = (0, g.useCallback)(() => {
                            if (t && a)
                                switch (t) {
                                    case sj.H.ALBUM:
                                        e.getAlbumTrailer(Number(a));
                                        break;
                                    case sj.H.ARTIST:
                                        e.getArtistTrailer(a);
                                        break;
                                    case sj.H.PLAYLIST:
                                        e.getPlaylistTrailer(a);
                                        break;
                                    case sj.H.TRACK:
                                        e.getTrackTrailer(a);
                                }
                        }, [a, e, t]);
                    return (0, h.jsxs)('div', {
                        className: sk().root,
                        children: [
                            (0, h.jsxs)('div', {
                                className: sk().textContainer,
                                children: [
                                    (0, h.jsx)(ec.DZ, {
                                        variant: 'h2',
                                        className: sk().title,
                                        size: 'xs',
                                        weight: 'bold',
                                        children: (0, h.jsx)(eX.A, { id: 'error-messages.something-went-wrong' }),
                                    }),
                                    (0, h.jsx)(ec.HL, {
                                        className: sk().description,
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, h.jsx)(eX.A, { id: 'trailer.something-went-wrong-description' }),
                                    }),
                                ],
                            }),
                            (0, h.jsx)(Q.$, {
                                onClick: i,
                                color: 'secondary',
                                size: 'default',
                                radius: 'xxxl',
                                children: (0, h.jsx)(ec.HL, { type: 'controls', variant: 'span', size: 'm', children: (0, h.jsx)(eX.A, { id: 'page-error.reload' }) }),
                            }),
                        ],
                    });
                }),
                sL = () =>
                    (0, h.jsx)('div', {
                        className: sk().root,
                        children: (0, h.jsxs)('div', {
                            className: sk().textContainer,
                            children: [
                                (0, h.jsx)(ec.DZ, {
                                    variant: 'h2',
                                    className: sk().title,
                                    size: 'xs',
                                    weight: 'bold',
                                    children: (0, h.jsx)(eX.A, { id: 'trailer.not-found-title' }),
                                }),
                                (0, h.jsx)(ec.HL, {
                                    className: sk().description,
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: (0, h.jsx)(eX.A, { id: 'trailer.not-found-description' }),
                                }),
                            ],
                        }),
                    }),
                sE = () => {
                    let e = (0, tl.st)(),
                        t = (0, ts.U)(),
                        { hash: a } = (0, tl.gf)(),
                        { pageId: i } = (0, sm.$)();
                    return (0, g.useCallback)(
                        (l, n) => {
                            if (!e || !i) return;
                            let r = {
                                    hash: a,
                                    pageId: tn.W[i],
                                    mainObjectType: C.DomainObjectType.Trailer,
                                    mainObjectId: l,
                                    from: C.AppScreen.TrailerScreen,
                                    to: tn.W[n],
                                },
                                s = (0, ta.F)({ params: r, logger: t, context: 'useSendEventOnTrailerNavigated' });
                            s && (0, s_.Mu)(e.evgenInstance, s);
                        },
                        [e, a, t, i],
                    );
                },
                sM = {
                    [sj.H.ALBUM]: C.DomainObjectType.Album,
                    [sj.H.ARTIST]: C.DomainObjectType.Artist,
                    [sj.H.PLAYLIST]: C.DomainObjectType.Playlist,
                    [sj.H.TRACK]: C.DomainObjectType.Track,
                },
                sP = { [sj.H.ALBUM]: tr._Q.ALBUM, [sj.H.ARTIST]: tr._Q.ARTIST, [sj.H.PLAYLIST]: tr._Q.PLAYLIST };
            var sO = a(35232),
                sw = a.n(sO);
            let sR = (0, y.PA)((e) => {
                var t, a;
                let { variant: i, isShimmerVisible: l, isShimmerActive: n, className: r } = e,
                    {
                        trailer: { state: s, meta: o, modal: c, objectId: d, resetUtmLink: u, tracks: _ },
                        albumCPA: { isPlusCPAPlayerBarEnabled: m },
                        paywall: { modal: p },
                    } = (0, T.g)(),
                    v = (0, e3.N)(),
                    x = (0, aF.e)(),
                    { from: y } = sT({ variant: i, blockId: sg.U.TRAILER }),
                    C = sE(),
                    b = sp(),
                    A = (() => {
                        let e = (0, tl.st)(),
                            t = (0, ts.U)(),
                            { hash: a } = (0, tl.gf)(),
                            { pageId: i } = (0, sm.$)();
                        return (0, g.useCallback)(
                            (l, n) => {
                                if (!e || !i) return;
                                let r = { hash: a, pageId: tn.W[i], mainObjectType: l, mainObjectId: n },
                                    s = (0, ta.F)({ params: r, logger: t, context: 'useSendEventOnTrailerEntityStarted' });
                                s && (0, s_.e7)(e.evgenInstance, s);
                            },
                            [e, a, t, i],
                        );
                    })(),
                    f = (0, ar.Z)(null != (a = null == o ? void 0 : o.url) ? a : ''),
                    j = (0, g.useCallback)(() => {
                        f();
                        let e = sP[i];
                        e && C(d, e);
                    }, [f, d, C, i]),
                    N = ((e) => {
                        let {
                            trailer: { meta: t },
                            artist: a,
                            album: i,
                            playlist: l,
                        } = (0, T.g)();
                        switch (e) {
                            case sj.H.ALBUM:
                                return i.id === Number(null == t ? void 0 : t.id);
                            case sj.H.ARTIST:
                                return a.id === (null == t ? void 0 : t.id);
                            case sj.H.PLAYLIST:
                                return l.uuid === (null == t ? void 0 : t.uuid);
                            case sj.H.TRACK:
                                return !1;
                        }
                    })(i),
                    I = !N && i !== sj.H.TRACK,
                    k = m(
                        (function (e, t, a) {
                            if (e === sj.H.ALBUM && (null == t ? void 0 : t.id)) return Number(t.id);
                            if (e === sj.H.TRACK) {
                                var i;
                                return null == a || null == (i = a[0]) ? void 0 : i.albumId;
                            }
                        })(i, o, _),
                    ),
                    S = (0, g.useCallback)(() => {
                        var e, t, a, l;
                        if (v && !k) return void p.open();
                        let n =
                            null == x || null == (a = x.playbackController.activePlayback.value) || null == (t = a.state) || null == (e = t.currentContext.value)
                                ? void 0
                                : e.utmLink;
                        (null == x || x.stop(su.V.TRAILER), u(), c.close(), b(d), I && j());
                        let r = s.status !== rh.MT.PLAYING || i === sj.H.ALBUM ? { index: 0 } : { entityId: null == (l = s.entityMeta) ? void 0 : l.id },
                            _ = ((e) => {
                                let { variant: t, id: a, from: i, uuid: l, utmLink: n } = e;
                                switch (t) {
                                    case sj.H.ALBUM:
                                        return { type: eF.K.Album, meta: { id: Number(a) }, from: i, utmLink: n };
                                    case sj.H.ARTIST:
                                        return { type: eF.K.Artist, meta: { id: String(a) }, from: i, utmLink: n };
                                    case sj.H.PLAYLIST:
                                        return { type: eF.K.Playlist, meta: { id: String(a), uuid: l }, from: i, utmLink: n };
                                    case sj.H.TRACK:
                                        return { type: eF.K.Various, meta: { id: String(a) }, from: i, utmLink: n };
                                }
                            })({ variant: i, id: null == o ? void 0 : o.id, uuid: null == o ? void 0 : o.uuid, from: y, utmLink: n });
                        null == x ||
                            x.playContext({ contextData: _, queueParams: r }).then(() => {
                                (null == o ? void 0 : o.id) && A(sM[i], o.id);
                            });
                    }, [
                        x,
                        u,
                        c,
                        b,
                        d,
                        I,
                        s.status,
                        null == (t = s.entityMeta) ? void 0 : t.id,
                        i,
                        null == o ? void 0 : o.id,
                        null == o ? void 0 : o.uuid,
                        y,
                        j,
                        A,
                        v,
                        k,
                        p,
                    ]),
                    L = (0, g.useMemo)(
                        () =>
                            (0, h.jsxs)('div', {
                                className: (0, eO.$)(sw().root, r),
                                children: [
                                    (0, h.jsx)(Q.$, {
                                        radius: 'xxxl',
                                        size: 'default',
                                        color: 'secondary',
                                        icon: (0, h.jsx)($.I, { variant: 'play', size: 'xxxs' }),
                                        className: sw().button,
                                        onClick: S,
                                        'data-test-id': q.e8.trailer.TRAILER_LISTEN_FULL_VERSION_BUTTON,
                                        children: (0, h.jsx)(eX.A, { id: 'trailer.listen-full-version' }),
                                    }),
                                    I &&
                                        (0, h.jsx)(Q.$, {
                                            radius: 'xxxl',
                                            size: 'default',
                                            color: 'secondary',
                                            onClick: j,
                                            className: sw().button,
                                            'data-test-id': q.e8.trailer.TRAILER_NAVIGATE_TO_ENTITY_BUTTON,
                                            children: (0, h.jsx)(eX.A, { id: 'trailer.navigate' }),
                                        }),
                                ],
                            }),
                        [r, S, j, I],
                    );
                return l
                    ? ((e) => {
                          let { isActive: t, className: a, isCurrentEntityPage: i } = e;
                          return (0, h.jsxs)('div', {
                              className: (0, eO.$)(sw().root, a),
                              children: [
                                  (0, h.jsx)(ex.W, { isActive: t, radius: 'xxxl', className: sw().playButtonShimmer }),
                                  i && (0, h.jsx)(ex.W, { isActive: t, radius: 'xxxl', className: sw().linkButtonShimmer }),
                              ],
                          });
                      })({ isActive: n, isCurrentEntityPage: N, className: r })
                    : L;
            });
            var sD = a(37821),
                sB = a(20924),
                sF = a(18130),
                sU = a(49343),
                sz = a(19038),
                sW = a(98953),
                sV = a(13068),
                sK = a.n(sV);
            let sY = (0, y.PA)((e) => {
                var t;
                let { variant: a, isShimmerVisible: i, isShimmerActive: l, className: n } = e,
                    {
                        trailer: { meta: r, objectId: s, utmLink: o, personalColor: c, shareable: d, title: u, state: _ },
                        playlist: { shouldShowTrailerOnboarding: m, isRewind2024Playlist: p },
                    } = (0, T.g)(),
                    { from: v } = sT({ variant: a, blockId: sg.U.TRAILER, meta: r }),
                    x = sE(),
                    y = sf(),
                    C = (0, e4.b)(),
                    b = a === sj.H.ARTIST ? 'round' : 's',
                    { notify: f } = (0, es.l)(),
                    j = (0, e2.P)(),
                    N = (0, h.jsx)(eX.A, { id: 'onboarding.rewind-trailer', values: { br: (0, h.jsx)('br', {}) } }),
                    { togglePlay: I, isPlaying: k } = (0, e5.D)({
                        playContextParams: {
                            contextData: sN({ variant: a, id: null == r ? void 0 : r.id, uuid: null == r ? void 0 : r.uuid, from: v, utmLink: o }),
                            loadContextMeta: !0,
                        },
                        sonataState: _,
                        playbackId: su.V.TRAILER,
                    }),
                    S = (0, A.c)(() => {
                        j() || (y(s, k), I(), C(!k));
                    }),
                    L = (0, g.useCallback)(() => {
                        let e = sP[a];
                        e && x(s, e);
                    }, [s, x, a]),
                    E = (0, sB.R)(c || 0),
                    M = (0, sD.m)(c || 0),
                    P = (0, g.useMemo)(() => {
                        let e, t;
                        return (
                            'number' == typeof c ? ((e = E), (t = M)) : (e = { '--trailer-color': null == r ? void 0 : r.averageColor }),
                            (0, h.jsxs)('div', {
                                className: sK().coverContainer,
                                'data-test-id': q.e8.trailer.TRAILER_COVER,
                                children: [
                                    (0, h.jsx)(rY.t, {
                                        radius: b,
                                        className: sK().cover,
                                        style: t,
                                        withShadow: !0,
                                        children: (0, h.jsx)(tV._V, {
                                            'aria-hidden': !0,
                                            src: null == r ? void 0 : r.coverUri,
                                            size: 100,
                                            fit: 'cover',
                                            withAvatarReplace: !0,
                                        }),
                                    }),
                                    (0, h.jsx)('div', {
                                        className: sK().iconContainer,
                                        style: e,
                                        children: (0, h.jsx)($.I, { variant: 'trailer', size: 'xs', className: sK().icon }),
                                    }),
                                ],
                            })
                        );
                    }, [b, null == r ? void 0 : r.coverUri, M, null == r ? void 0 : r.averageColor, c, E]),
                    O = (0, g.useMemo)(() => {
                        let e = null == r ? void 0 : r.url;
                        return e
                            ? (0, h.jsx)(aj.N, {
                                  href: e,
                                  className: sK().link,
                                  onClick: L,
                                  'data-test-id': q.e8.trailer.TRAILER_ENTITY_TITLE,
                                  children: (0, h.jsx)(ec.HL, {
                                      variant: 'span',
                                      type: 'controls',
                                      lineClamp: 1,
                                      className: sK().text,
                                      children: null == r ? void 0 : r.title,
                                  }),
                              })
                            : (0, h.jsx)(ec.HL, {
                                  variant: 'span',
                                  type: 'controls',
                                  lineClamp: 1,
                                  className: sK().text,
                                  'data-test-id': q.e8.trailer.TRAILER_ENTITY_TITLE,
                                  children: null == r ? void 0 : r.title,
                              });
                    }, [L, r]),
                    w = (0, g.useMemo)(
                        () =>
                            (0, h.jsxs)('div', {
                                className: sK().textContainer,
                                children: [
                                    (0, h.jsx)(ec.DZ, {
                                        variant: 'h1',
                                        className: (0, eO.$)(sK().text, sK().title),
                                        lineClamp: 1,
                                        'data-test-id': q.e8.trailer.TRAILER_MODAL_TITLE,
                                        children: u,
                                    }),
                                    O,
                                ],
                            }),
                        [O, u],
                    ),
                    { pattern: R, params: D } = null != (t = null == r ? void 0 : r.getSharingProps(a)) ? t : { pattern: lN.Z.main.href, params: {} },
                    { shareLink: B } = (0, sF.b)(R, { params: D, query: { [ly.K.OPEN_TRAILER]: 'true' } }),
                    F = (0, g.useCallback)(async () => {
                        (await window.navigator.clipboard.writeText(B),
                            f(
                                (0, h.jsx)(sU.D, {
                                    entityTitle: null == r ? void 0 : r.title,
                                    entityVariant: ((e) => {
                                        switch (e) {
                                            case sj.H.ALBUM:
                                                return sW.Y.ALBUM;
                                            case sj.H.ARTIST:
                                                return sW.Y.ARTIST;
                                            case sj.H.PLAYLIST:
                                                return sW.Y.PLAYLIST;
                                            case sj.H.TRACK:
                                                return sW.Y.TRACK;
                                        }
                                    })(a),
                                }),
                                { containerId: er.u.INFO },
                            ));
                    }, [B, f, null == r ? void 0 : r.title, a]);
                return (0, h.jsxs)('div', {
                    className: (0, eO.$)(sK().root, n),
                    'data-test-id': q.e8.trailer.TRAILER_HEADER,
                    children: [
                        i ? (0, h.jsx)('div', { className: sK().coverContainer, children: (0, h.jsx)(ex.W, { isActive: l, radius: b, className: sK().cover }) }) : P,
                        i
                            ? ((e) =>
                                  (0, h.jsxs)('div', {
                                      className: sK().textContainer,
                                      children: [
                                          (0, h.jsx)('div', {
                                              className: sK().shimmerContainer,
                                              children: (0, h.jsx)(ex.W, { isActive: e, radius: 'xl', className: sK().titleShimmer }),
                                          }),
                                          (0, h.jsx)('div', {
                                              className: sK().shimmerContainer,
                                              children: (0, h.jsx)(ex.W, { isActive: e, radius: 'xl', className: sK().descriptionShimmer }),
                                          }),
                                      ],
                                  }))(l)
                            : w,
                        !i &&
                            d &&
                            (0, h.jsx)(Q.$, {
                                className: sK().share,
                                icon: (0, h.jsx)($.I, { variant: 'share', size: 'xxs' }),
                                onClick: F,
                                variant: 'text',
                                withRipple: !1,
                                withHover: !1,
                            }),
                        !i &&
                            (0, h.jsx)(sz.L, {
                                customMessage: p ? N : void 0,
                                shouldForceOpenTooltip: !!m,
                                children: (0, h.jsx)(e9.D, {
                                    className: sK().playButton,
                                    iconSize: 'm',
                                    variant: 'filled',
                                    isPlaying: k,
                                    iconClassName: sK().playButtonIcon,
                                    onClick: S,
                                }),
                            }),
                    ],
                });
            });
            var sH = a(73805),
                sq = a(99479),
                sQ = a(56712),
                s$ = a(33133),
                sG = a.n(s$);
            let sZ = (0, y.PA)((e) => {
                let { track: t, albumArtists: a, position: i, playContextParams: l, withLightning: n, onPlayClick: r, onLikeClick: s, onDislikeClick: o } = e,
                    {
                        trailer: c,
                        settings: { isMobile: d },
                        album: u,
                    } = (0, T.g)(),
                    _ = (0, e5.D)({ playContextParams: l, entityId: t.entityId, sonataState: c.state, playbackId: su.V.TRAILER }),
                    m = (0, g.useCallback)((e) => (0, h.jsx)(sq.G, { track: t, position: i, className: sG().playButtonCell, ...e }), [t, i]);
                return (0, h.jsx)(sQ.C, {
                    track: t,
                    withLightning: n,
                    meta: (0, h.jsx)(nx.j, { withArtistLink: !d, albumArtists: a, track: t, withSavingQueryParams: u.id === t.albumId }),
                    playButtonCellRender: m,
                    onPlayClick: r,
                    controls: (0, h.jsx)(sH.Q, { withLightning: n, track: t, className: sG().controlsBarCell, onLikeClick: s, onDislikeClick: o }),
                    skipFreemiumCloseListeningPaywall: !0,
                    ..._,
                    'data-test-id': q.Kq.track.TRACK_ALBUM,
                });
            });
            var sX = a(39267),
                sJ = a(26243),
                s0 = a.n(sJ);
            let s1 = (0, y.PA)((e) => {
                let { track: t, playContextParams: a, onPlayClick: i, onLikeClick: l, onDislikeClick: n } = e,
                    {
                        trailer: r,
                        settings: { isMobile: s },
                    } = (0, T.g)(),
                    o = (0, e5.D)({ playContextParams: a, entityId: t.entityId, sonataState: r.state, playbackId: su.V.TRAILER }),
                    c = (0, g.useCallback)(
                        (e) =>
                            (0, h.jsx)(sX.q, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: s0().playButtonCell,
                                radius: 'xs',
                                ...e,
                            }),
                        [t],
                    );
                return (0, h.jsx)(sQ.C, {
                    track: t,
                    meta: (0, h.jsx)(nx.j, { withArtistLink: !s, track: t }),
                    playButtonCellRender: c,
                    onPlayClick: i,
                    controls: (0, h.jsx)(sH.Q, { track: t, className: s0().controlsBarCell, onLikeClick: l, onDislikeClick: n }),
                    skipFreemiumCloseListeningPaywall: !0,
                    ...o,
                    'data-test-id': q.Kq.track.TRACK_PLAYLIST,
                });
            });
            var s2 = a(34500),
                s4 = a(46166),
                s8 = a(11146),
                s3 = a.n(s8);
            let s5 = (0, y.PA)((e) => {
                let { variant: t, track: a, playContextParams: i, viewUuid: l } = e,
                    {
                        trailer: { meta: n, objectId: r, shouldSendEventOnTracksShowed: s, setShouldSendEventOnTracksShowed: o },
                    } = (0, T.g)(),
                    c = t === sj.H.ALBUM ? sZ : s1,
                    { isActive: d, progress: u } = ((e, t) => {
                        var a;
                        let i = (0, aF.e)(),
                            {
                                trailer: { state: l },
                            } = (0, T.g)(),
                            [n, r] = (0, g.useState)(0),
                            s = (null == (a = l.entityMeta) ? void 0 : a.id) === e;
                        return (
                            (0, g.useEffect)(() => {
                                let e =
                                    null == i
                                        ? void 0
                                        : i.getState(su.V.TRAILER).playerState.progress.onChange(() => {
                                              let e,
                                                  a = i.getState(su.V.TRAILER).playerState,
                                                  l = a.progress.value;
                                              ((e = t ? t / 1e3 : l.duration), s || r(0), a.status.value === rh.MT.PLAYING && s && r((l.position / e) * 100));
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [t, s, i]),
                            { isActive: s, progress: n }
                        );
                    })(a.id, a.durationMs),
                    _ = ((e, t) => {
                        let a = (0, ts.U)(),
                            i = (0, tl.st)(),
                            { hash: l } = (0, tl.gf)(),
                            { pageId: n } = (0, sm.$)(),
                            { blockType: r, blockId: s, blockPosX: o, blockPosY: c } = (0, s2.N)(),
                            { objectType: d, objectsCount: u, objectId: _, objectPosX: m, objectPosY: p } = (0, s4.J)();
                        return (0, g.useCallback)(() => {
                            if (!i || !n) return;
                            let v = tn.W[n];
                            if (!v) return;
                            let x = {
                                    hash: l,
                                    pageId: v,
                                    mainObjectType: C.DomainObjectType.Trailer,
                                    mainObjectId: e,
                                    entityType: r,
                                    entityId: s,
                                    entityPosX: o,
                                    entityPosY: c,
                                    objectsCount: u,
                                    viewUuid: t,
                                    objectType: d,
                                    objectId: _,
                                    objectPosX: m,
                                    objectPosY: p,
                                },
                                h = (0, ta.F)({ params: x, logger: a, context: 'useSendEventOnSmartPreviewShowed' });
                            h && (0, ti.Pf)(i.evgenInstance, h);
                        }, [i, s, o, c, r, l, a, e, _, m, p, d, u, n, t]);
                    })(r, l),
                    m = ((e) => {
                        let t = (0, ts.U)(),
                            a = (0, tl.st)(),
                            { hash: i } = (0, tl.gf)(),
                            { pageId: l } = (0, sm.$)(),
                            { blockType: n, blockId: r, blockPosX: s, blockPosY: o } = (0, s2.N)(),
                            { objectType: c, objectsCount: d, objectId: u, objectPosX: _, objectPosY: m } = (0, s4.J)();
                        return (0, g.useCallback)(
                            (p) => {
                                if (!a || !l) return;
                                let v = tn.W[l];
                                if (!v) return;
                                let x = {
                                    hash: i,
                                    pageId: v,
                                    mainObjectType: C.DomainObjectType.Trailer,
                                    mainObjectId: e,
                                    entityType: n,
                                    entityId: r,
                                    entityPosX: s,
                                    entityPosY: o,
                                    objectsCount: d,
                                    objectType: c,
                                    objectId: u,
                                    objectPosX: _,
                                    objectPosY: m,
                                };
                                p || ((x.actionType = C.ActionType.Pause), (x.userInteractionType = C.UserInteractionType.Tap));
                                let h = (0, ta.F)({ params: x, logger: t, context: 'useSendEventOnSmartPreviewStarted' });
                                h &&
                                    (!p && ((e) => 'object' == typeof e && null !== e && 'actionType' in e && 'mainObjectId' in e)(h)
                                        ? (0, ti.h_)(a.evgenInstance, h)
                                        : (0, ti.er)(a.evgenInstance, h));
                            },
                            [a, r, s, o, n, i, t, e, u, _, m, c, d, l],
                        );
                    })(r),
                    p = ((e) => {
                        let t = (0, ts.U)(),
                            a = (0, tl.st)(),
                            { hash: i } = (0, tl.gf)(),
                            { pageId: l } = (0, sm.$)(),
                            { blockType: n, blockId: r, blockPosX: s, blockPosY: o } = (0, s2.N)(),
                            { objectType: c, objectsCount: d, objectId: u, objectPosX: _, objectPosY: m } = (0, s4.J)();
                        return (0, g.useCallback)(
                            (p) => {
                                if (!a || !l) return;
                                let v = tn.W[l];
                                if (!v) return;
                                let x = {
                                    hash: i,
                                    pageId: v,
                                    mainObjectType: C.DomainObjectType.Trailer,
                                    mainObjectId: e,
                                    entityType: n,
                                    entityId: r,
                                    entityPosX: s,
                                    entityPosY: o,
                                    objectsCount: d,
                                    objectType: c,
                                    objectId: u,
                                    objectPosX: _,
                                    objectPosY: m,
                                    userInteractionType: C.UserInteractionType.Tap,
                                };
                                p ? (x.actionType = C.ActionType.Like) : (x.actionType = C.ActionType.Unlike);
                                let h = (0, ta.F)({ params: x, logger: t, context: 'useSendEventOnSmartPreviewLike' });
                                h && (0, ti.h_)(a.evgenInstance, h);
                            },
                            [a, r, s, o, n, i, t, e, u, _, m, c, d, l],
                        );
                    })(r),
                    v = ((e) => {
                        let t = (0, ts.U)(),
                            a = (0, tl.st)(),
                            { hash: i } = (0, tl.gf)(),
                            { pageId: l } = (0, sm.$)(),
                            { blockType: n, blockId: r, blockPosX: s, blockPosY: o } = (0, s2.N)(),
                            { objectType: c, objectsCount: d, objectId: u, objectPosX: _, objectPosY: m } = (0, s4.J)();
                        return (0, g.useCallback)(
                            (p) => {
                                if (!a || !l) return;
                                let v = tn.W[l];
                                if (!v) return;
                                let x = {
                                    hash: i,
                                    pageId: v,
                                    mainObjectType: C.DomainObjectType.Trailer,
                                    mainObjectId: e,
                                    entityType: n,
                                    entityId: r,
                                    entityPosX: s,
                                    entityPosY: o,
                                    objectsCount: d,
                                    objectType: c,
                                    objectId: u,
                                    objectPosX: _,
                                    objectPosY: m,
                                    userInteractionType: C.UserInteractionType.Tap,
                                };
                                p ? (x.actionType = C.ActionType.Dislike) : (x.actionType = C.ActionType.Undislike);
                                let h = (0, ta.F)({ params: x, logger: t, context: 'useSendEventOnSmartPreviewDislike' });
                                h && (0, ti.h_)(a.evgenInstance, h);
                            },
                            [a, r, s, o, n, i, t, e, u, _, m, c, d, l],
                        );
                    })(r);
                (0, g.useEffect)(() => {
                    s && (_(), o(!1));
                }, [_, o, s]);
                let x = (0, g.useMemo)(() => ({ '--track-progress': ''.concat(u || 0, '%') }), [u]);
                return (0, h.jsx)('div', {
                    className: (0, eO.$)(s3().root, { [s3().root_active]: d }),
                    style: x,
                    children: (0, h.jsx)(c, {
                        position: a.positionInAlbum,
                        withLightning: !!(null == a ? void 0 : a.isBest),
                        track: a,
                        playContextParams: i,
                        albumArtists: null == n ? void 0 : n.albumArtists,
                        onPlayClick: m,
                        onLikeClick: p,
                        onDislikeClick: v,
                    }),
                });
            });
            var s6 = a(12708),
                s9 = a.n(s6);
            let s7 = (0, y.PA)((e) => {
                let { variant: t } = e,
                    {
                        trailer: a,
                        playlist: { setShouldShowTrailerOnboarding: i },
                    } = (0, T.g)(),
                    {
                        isLoading: l,
                        isRejected: n,
                        tracks: r,
                        meta: s,
                        state: o,
                        shouldAutoStartPlaying: c,
                        setShouldAutoStartPlaying: d,
                        isNotFound: u,
                        modal: _,
                        utmLink: m,
                    } = a,
                    p = (0, aF.e)(),
                    { from: v } = sT({ variant: t, blockId: sg.U.TRAILER, meta: s }),
                    x = (() => {
                        let e = (0, tl.st)(),
                            t = (0, ts.U)(),
                            { hash: a } = (0, tl.gf)(),
                            { pageId: i } = (0, sm.$)();
                        return (0, g.useCallback)(
                            (l) => {
                                if (!e || !i) return;
                                let n = { hash: a, pageId: tn.W[i], mainObjectType: C.DomainObjectType.Trailer, mainObjectId: l },
                                    r = (0, ta.F)({ params: n, logger: t, context: 'useSendEventOnTrailerOpened' });
                                r && (0, s_.w5)(e.evgenInstance, r);
                            },
                            [e, a, t, i],
                        );
                    })(),
                    y = sf(),
                    [b, A] = (0, g.useState)(!1),
                    f = (0, g.useRef)((0, sC.A)()),
                    j = l || n,
                    { isPlaying: N } = (0, e5.D)({
                        playContextParams: {
                            contextData: sN({ variant: t, id: null == s ? void 0 : s.id, uuid: null == s ? void 0 : s.uuid, from: v, utmLink: m }),
                            loadContextMeta: !0,
                        },
                        sonataState: a.state,
                        playbackId: su.V.TRAILER,
                    });
                ((0, g.useEffect)(() => {
                    _.isOpened &&
                        (null == s ? void 0 : s.id) &&
                        c &&
                        (x(a.objectId),
                        null == p ||
                            p
                                .playContext(
                                    {
                                        contextData: sN({ variant: t, id: null == s ? void 0 : s.id, uuid: null == s ? void 0 : s.uuid, from: v, utmLink: m }),
                                        queueParams: { index: 0 },
                                        loadContextMeta: !0,
                                    },
                                    su.V.TRAILER,
                                )
                                .then(() => {
                                    A(!0);
                                }),
                        d(!1));
                }, [v, null == s ? void 0 : s.id, null == s ? void 0 : s.uuid, _.isOpened, x, y, d, c, p, o.status, a.objectId, t, m, N]),
                    (0, g.useEffect)(() => {
                        b && (N ? (y(a.objectId), A(!1)) : i(!0));
                    }, [b, N, y, a.objectId, i]));
                let I = (0, g.useCallback)(
                        (e) => ({
                            contextData: sN({ variant: t, id: null == s ? void 0 : s.id, uuid: null == s ? void 0 : s.uuid, from: v, utmLink: m }),
                            queueParams: { index: e },
                            loadContextMeta: !0,
                        }),
                        [v, null == s ? void 0 : s.id, null == s ? void 0 : s.uuid, t, m],
                    ),
                    k = (0, g.useMemo)(
                        () =>
                            j
                                ? ((e, t) => {
                                      let a = t === sj.H.ALBUM ? eV.X.ALBUM : eV.X.PLAYLIST;
                                      return Array.from({ length: t === sj.H.TRACK ? 1 : 5 }, (t, i) =>
                                          (0, h.jsx)(
                                              'div',
                                              {
                                                  className: s9().trackContainer,
                                                  children: (0, h.jsx)(eY.D, {
                                                      isActive: e,
                                                      className: (0, eO.$)(s9().trackShimmer, { [s9().albumShimmer]: a === eV.X.ALBUM }),
                                                      variant: a,
                                                  }),
                                              },
                                              i,
                                          ),
                                      );
                                  })(l, t)
                                : null == r
                                  ? void 0
                                  : r.map((e, a) =>
                                        (0, h.jsx)(
                                            sb.F,
                                            {
                                                blockType: C.DomainObjectType.SmartPreview,
                                                blockId: e.id,
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                children: (0, h.jsx)(sA.B, {
                                                    objectType: C.DomainObjectType.SmartPreview,
                                                    objectId: e.id,
                                                    objectPosX: 1,
                                                    objectPosY: a + 1,
                                                    objectsCount: r.length,
                                                    children: (0, h.jsx)(s5, { variant: t, track: e, playContextParams: I(a), viewUuid: f.current }),
                                                }),
                                            },
                                            e.id,
                                        ),
                                    ),
                        [I, l, j, r, t],
                    );
                return n
                    ? u
                        ? (0, h.jsx)(sL, {})
                        : (0, h.jsx)(sS, {})
                    : (0, h.jsxs)('div', {
                          className: s9().root,
                          children: [
                              (0, h.jsx)(sY, { isShimmerVisible: j, isShimmerActive: l, variant: t, className: s9().header }),
                              k,
                              (0, h.jsx)(sR, { isShimmerVisible: j, isShimmerActive: l, variant: t, className: s9().footer }),
                          ],
                      });
            });
            var oe = a(25378),
                ot = a.n(oe);
            let oa = (0, y.PA)(() => {
                let {
                        settings: { isMobile: e },
                        trailer: t,
                        sonataState: a,
                        fullscreenPlayer: i,
                    } = (0, T.g)(),
                    l = (0, aF.e)(),
                    { contentRef: n } = (0, j.g)(),
                    { formatMessage: r } = (0, H.A)(),
                    s = sp();
                ((() => {
                    let { trailer: e } = (0, T.g)(),
                        t = (0, aF.e)(),
                        a = (0, sy.z)(),
                        i = (0, e1.K)(e.state.entityMeta),
                        l = (0, sv.m)(e.state.entityMeta);
                    ((0, g.useEffect)(() => {
                        e.modal.isOpened
                            ? (null == a || a.disable(sh.M.MAIN),
                              null == a || a.enable(sh.M.MAIN, sx.l.TOGGLE_MUTE),
                              null == a || a.enable(sh.M.MAIN, sx.l.INCREASE_VOLUME),
                              null == a || a.enable(sh.M.MAIN, sx.l.DECREASE_VOLUME),
                              null == a || a.enable(sh.M.MAIN, sx.l.TOGGLE_FULLSCREEN_PLAYER),
                              null == a || a.enable(sh.M.TRAILER))
                            : (null == a || a.disable(sh.M.TRAILER), null == a || a.enable(sh.M.MAIN));
                    }, [a, e.modal.isOpened]),
                        (0, g.useEffect)(
                            () => (
                                null == a ||
                                    a.addShortcutsListener(sh.M.TRAILER, sx.l.TOGGLE_PLAY, () => {
                                        null == t || t.togglePause(su.V.TRAILER);
                                    }),
                                null == a || a.addShortcutsListener(sh.M.TRAILER, sx.l.LIKE, i),
                                null == a || a.addShortcutsListener(sh.M.TRAILER, sx.l.DISLIKE, l),
                                null == a ||
                                    a.addShortcutsListener(sh.M.TRAILER, sx.l.MOVE_FORWARD, async () => {
                                        var e;
                                        (null == t || null == (e = t.getState(su.V.TRAILER).currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                            (await (null == t ? void 0 : t.moveForward(su.V.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(sh.M.TRAILER, sx.l.MOVE_BACKWARD, async () => {
                                        var e;
                                        (null == t || null == (e = t.getState(su.V.TRAILER).currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                            (await (null == t ? void 0 : t.moveBackward(su.V.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(sh.M.TRAILER, sx.l.SLIDE_FORWARD, async () => {
                                        (null == t ? void 0 : t.getState(su.V.TRAILER).playerState.progress.value.duration) &&
                                            (await (null == t ? void 0 : t.slideForward(1, su.V.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(sh.M.TRAILER, sx.l.SLIDE_BACKWARD, async () => {
                                        (null == t ? void 0 : t.getState(su.V.TRAILER).playerState.progress.value.duration) &&
                                            (await (null == t ? void 0 : t.slideBackward(1, su.V.TRAILER)));
                                    }),
                                () => {
                                    (null == a || a.removeShortcutsListener(sh.M.TRAILER, sx.l.TOGGLE_PLAY),
                                        null == a || a.removeShortcutsListener(sh.M.TRAILER, sx.l.LIKE),
                                        null == a || a.removeShortcutsListener(sh.M.TRAILER, sx.l.DISLIKE),
                                        null == a || a.removeShortcutsListener(sh.M.TRAILER, sx.l.MOVE_FORWARD),
                                        null == a || a.removeShortcutsListener(sh.M.TRAILER, sx.l.MOVE_BACKWARD),
                                        null == a || a.removeShortcutsListener(sh.M.TRAILER, sx.l.SLIDE_FORWARD),
                                        null == a || a.removeShortcutsListener(sh.M.TRAILER, sx.l.SLIDE_BACKWARD));
                                }
                            ),
                            [l, i, a, t],
                        ));
                })(),
                    (0, g.useEffect)(() => {
                        let e =
                                null == l
                                    ? void 0
                                    : l.getState(su.V.TRAILER).queueState.currentEntity.onChange((e) => {
                                          var a;
                                          let i = null == e ? void 0 : e.context.data.type,
                                              l = null == e ? void 0 : e.context.data.meta.id;
                                          (t.state.setEntityMeta(null != (a = null == e ? void 0 : e.entity) ? a : null),
                                              i && t.state.setContextType(i),
                                              l && t.state.setContextId(l));
                                      }),
                            a =
                                null == l
                                    ? void 0
                                    : l.getState(su.V.TRAILER).playerState.status.onChange((e) => {
                                          e && t.state.setStatus(e);
                                      });
                        return () => {
                            (null == e || e(), null == a || a());
                        };
                    }, [l, t.state]));
                let o = (0, g.useCallback)(() => {
                        null == l ||
                            l.stop(su.V.TRAILER).finally(() => {
                                (t.sonataStatusBeforeTrailerStart !== rh.MT.PLAYING || t.isManuallyPaused || null == l || l.resume(),
                                    t.setAnimationState(!0),
                                    t.resetUtmLink(),
                                    t.modal.close(),
                                    s(t.objectId));
                            });
                    }, [s, l, t]),
                    c = (0, g.useCallback)(
                        (e) => {
                            (t.modal.onOpenChange(e), e || o());
                        },
                        [o, t.modal],
                    );
                return (
                    (0, g.useEffect)(() => {
                        t.modal.isOpened && t.isResolved && a.status === rh.MT.PLAYING && o();
                    }, [o, a.status, t, t.modal.isOpened]),
                    (0, g.useEffect)(() => {
                        t.modal.isOpened && t.isResolved && t.setAnimationState(!1);
                    }, [t]),
                    (0, g.useEffect)(() => {
                        i.modal.isOpened && t.modal.isOpened && o();
                    }, [i.modal.isOpened, o, t.modal.isOpened]),
                    (0, h.jsxs)(f.a, {
                        size: 'fitContent',
                        placement: e ? 'default' : 'right',
                        open: t.modal.isOpened,
                        onOpenChange: c,
                        onClose: o,
                        className: ot().root,
                        contentClassName: ot().modalContent,
                        portalNode: e ? null : n,
                        showHeader: !1,
                        withOverlay: e,
                        closeOnOutsidePress: e,
                        'data-test-id': q.e8.trailer.TRAILER_MODAL,
                        withAnimation: t.withAnimation,
                        isMobile: e,
                        lockScroll: e,
                        overlayColor: 'full',
                        enableSwipe: !0,
                        children: [
                            !e &&
                                (0, h.jsx)('div', {
                                    className: ot().header,
                                    children: (0, h.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, h.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                        onClick: o,
                                        'aria-label': r({ id: 'trailer.close' }),
                                        'data-test-id': q.e8.trailer.TRAILER_CLOSE_BUTTON,
                                    }),
                                }),
                            t.variant && (0, h.jsx)(s7, { variant: t.variant }),
                        ],
                    })
                );
            });
            var oi = a(53301),
                ol = a(53073),
                on = a(83418);
            async function or(e) {
                var t;
                let a = await (0, M.W)(e.locale),
                    i = a({ id: 'metadata.main-description' }),
                    l = a({ id: 'metadata.main-title' });
                return {
                    title: l,
                    description: i,
                    openGraph: (0, w.i)({
                        ogTitle: l,
                        ogDescription: i,
                        ogType: 'website',
                        fullUrl: null != (t = e.fullUrl) ? t : '',
                        locale: e.locale,
                        siteName: a({ id: 'metadata.yandex-music' }),
                        customImage: (0, on.v)({ host: e.host }),
                    }),
                    facebook: (0, ol.k)(),
                    twitter: (0, R.H)({ cardType: D.W.SUMMARY_LARGE_IMAGE, title: l, description: i }),
                    alternates: (0, B.S)(lN.Z.main.href, e.tld),
                };
            }
            var os = a(10325),
                oo = a(18610),
                oc = a(29201),
                od = a(35396);
            async function ou(e) {
                var t, a, i, l, n, r, s;
                let o,
                    c,
                    { clipMeta: d, additional: u } = e,
                    _ = await (0, M.W)(u.locale);
                return (
                    d
                        ? ((o = _(
                              { id: 'metadata.clips-title' },
                              { clipTitle: d.title, clipArtists: null == (a = d.artists) || null == (t = a.map((e) => e.name)) ? void 0 : t.join(', ') },
                          )),
                          (c = _(
                              { id: 'metadata.clips-description' },
                              { clipTitle: d.title, clipArtists: null == (l = d.artists) || null == (i = l.map((e) => e.name)) ? void 0 : i.join(', ') },
                          )))
                        : ((o = _({ id: 'metadata.clips-title-default' })), (c = _({ id: 'metadata.clips-description-default' }))),
                    {
                        title: o,
                        description: c,
                        openGraph: (0, w.i)({
                            ogTitle: o,
                            ogDescription: c,
                            ogType: 'website',
                            fullUrl: null != (n = u.fullUrl) ? n : '',
                            locale: u.locale,
                            customImage: (0, on.v)({ host: u.host }),
                            siteName: _({ id: 'metadata.yandex-music' }),
                        }),
                        twitter: (0, R.H)({ cardType: D.W.SUMMARY_LARGE_IMAGE, title: o, description: c }),
                        facebook: (0, ol.k)(),
                        appLinks: (0, E.X)({
                            additional: { ...u, url: null != (r = u.url) ? r : '', fullUrl: null != (s = u.fullUrl) ? s : '', host: u.host },
                            appName: _({ id: 'metadata.yandex-music' }),
                        }),
                    }
                );
            }
            var o_ = a(38769),
                om = a(55482),
                op = a(93671),
                ov = a(86535),
                ox = a(94058),
                oh = a(86200),
                oy = a(777),
                oC = a(8641),
                og = a(28692),
                ob = a(99313),
                oA = a(51976);
            let of = (0, y.PA)((e) => {
                let { className: t } = e,
                    { fullscreenVideoPlayer: a } = (0, T.g)(),
                    i = (0, aF.e)(),
                    { from: l } = (0, eW.f)({ pageId: tr._Q.VIDEO_PLAYER, contextId: a.state.contextId, contextType: eF.K.Various }),
                    n = (0, A.c)(() => {
                        null == i || i.moveForward(su.V.CLIP);
                    }),
                    r = (0, A.c)(() => {
                        null == i || i.moveBackward(su.V.CLIP);
                    }),
                    { isPlaying: s, togglePlay: o } = (0, e5.D)({
                        playContextParams: { contextData: { type: eF.K.Various, meta: { id: ob.H.VARIOUS_CLIP_CONTEXT }, from: l }, loadContextMeta: !0 },
                        sonataState: a.state,
                        playbackId: su.V.CLIP,
                    });
                return (0, h.jsx)(oA.Z, {
                    className: t,
                    isPlaying: s,
                    canMoveBackward: a.state.canMoveBackward,
                    canMoveForward: a.state.canMoveForward,
                    canShuffle: !1,
                    onClickPlayPause: o,
                    onClickNext: n,
                    onClickPrev: r,
                    canChangeRepeatMode: !1,
                    shuffle: !1,
                    repeatMode: og.pM.NONE,
                });
            });
            var oj = a(17610),
                oT = a(17387),
                oN = a(6667),
                oI = a(24548),
                ok = a(10782),
                oS = a.n(ok);
            let oL = (0, y.PA)((e) => {
                let {
                        className: t,
                        clip: a,
                        withExplicitMark: i = !0,
                        withSecondaryColor: l,
                        captionSize: n = 'm',
                        explicitSize: r = 'xxxs',
                        withAllArtistsTitle: s,
                        withCustomTooltip: o = !0,
                        hasLineClamp: c = !0,
                        withArtistLink: d,
                    } = e,
                    u = (0, oN.$)({ withCustomTooltip: o }),
                    _ = (0, g.useCallback)(
                        (e) => {
                            let t = String(a.title);
                            return (0, h.jsx)(oj.m_, {
                                enabled: u,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: oI.V,
                                children: (0, h.jsx)(ec.HL, {
                                    className: (0, eO.$)(oS().text, oS().title),
                                    type: 'entity',
                                    size: n,
                                    weight: 'medium',
                                    variant: 'span',
                                    'data-test-id': e,
                                    children: a.title,
                                }),
                            });
                        },
                        [u, n, a.title],
                    ),
                    m = (0, g.useMemo)(() => _(q.Kq.clip.CLIP_META_TITLE), [_]),
                    p = (0, oT.s)(a.artists);
                return (0, h.jsx)('div', {
                    className: (0, eO.$)(oS().root, { [oS().root_withSecondaryColor]: l }, t),
                    children: (0, h.jsxs)('div', {
                        className: oS().metaContainer,
                        children: [
                            (0, h.jsxs)('div', {
                                className: oS().titleContainer,
                                children: [
                                    (0, h.jsx)(ec.HL, { type: 'entity', size: n, weight: 'medium', variant: 'div', lineClamp: 1, children: m }),
                                    a.explicitDisclaimer &&
                                        i &&
                                        (0, h.jsx)(eZ.N, {
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            size: r,
                                            variant: a.explicitDisclaimer,
                                            className: oS().explicitMark,
                                            trackId: String(a.clipId),
                                        }),
                                ],
                            }),
                            p.length > 0 &&
                                (0, h.jsx)(eG.i, {
                                    linkClassName: oS().link,
                                    captionClassName: oS().artistCaption,
                                    artists: p,
                                    withLink: d,
                                    lineClamp: +!!c,
                                    captionSize: n,
                                    withAllArtistsTitle: s,
                                    withCustomTooltip: u,
                                }),
                        ],
                    }),
                });
            });
            var oE = a(72806),
                oM = a.n(oE);
            let oP = (0, y.PA)((e) => {
                    let { entityMeta: t, onLikeClick: a, onContextMenuOpenChange: i, isContextMenuOpened: l } = e,
                        { user: n, sonataState: r, fullscreenVideoPlayer: s, freeAccess: o } = (0, T.g)(),
                        c = (0, oC.d)(),
                        d = (0, A.c)(async (e) => {
                            await c(r, e);
                        }),
                        u = (0, g.useMemo)(
                            () =>
                                t
                                    ? (0, h.jsx)('div', { className: oM().description, children: (0, h.jsx)(oL, { captionSize: 'l', clip: t, withSecondaryColor: !0 }) })
                                    : null,
                            [t],
                        );
                    return (0, h.jsxs)('section', {
                        className: oM().root,
                        children: [
                            (0, h.jsxs)('div', {
                                className: oM().info,
                                children: [
                                    (0, h.jsx)('div', { className: oM().infoCard, children: u }),
                                    (0, h.jsxs)('div', {
                                        className: oM().infoButtons,
                                        children: [
                                            s.clipActive &&
                                                (0, h.jsx)(oy.z, {
                                                    placement: 'top-start',
                                                    icon: (0, h.jsx)($.I, { variant: 'more', size: 'm' }),
                                                    size: 'l',
                                                    clip: s.clipActive,
                                                    onOpenChange: i,
                                                    open: l,
                                                    'data-test-id': q.Kq.clip.CLIP_CONTEXT_MENU_BUTTON,
                                                }),
                                            t &&
                                                (0, h.jsx)(e6.c, {
                                                    className: oM().likeButton,
                                                    isLiked: t.isLiked,
                                                    iconSize: 'xs',
                                                    onClick: a,
                                                    disabled: !n.isAuthorized,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, h.jsxs)('div', {
                                className: oM().sonata,
                                children: [
                                    (0, h.jsx)(of, {}),
                                    (0, h.jsx)(nm.v, {
                                        sliderClassName: (0, eO.$)(oM().slider, oM().important),
                                        disabled: !t,
                                        isMobile: !1,
                                        isFullscreen: !1,
                                        canMoveForward: s.state.canMoveForward,
                                        customDuration: (null == n ? void 0 : n.isAuthorized) && !o.isFreeDesktopUser ? void 0 : 29,
                                        sonataPlaybackId: su.V.CLIP,
                                    }),
                                ],
                            }),
                            (0, h.jsx)('div', {
                                className: oM().meta,
                                children: (0, h.jsx)(oh.r, {
                                    sonataVolume: r.volume,
                                    onVolumeClick: d,
                                    horizontalSliderClassName: (0, eO.$)(oM().slider, oM().important),
                                }),
                            }),
                        ],
                    });
                }),
                oO = (0, y.PA)((e) => {
                    let { className: t, isSettingsMenuOpened: a, onSettingsMenuOpenChange: i, isContextMenuOpened: l, onContextMenuOpenChange: n } = e,
                        { fullscreenVideoPlayer: r } = (0, T.g)(),
                        s = (0, o_.K)(r.state.entityMeta),
                        {
                            settings: { isMobile: o },
                        } = (0, T.g)();
                    return o
                        ? null
                        : (0, h.jsx)(oP, {
                              className: t,
                              onLikeClick: s,
                              entityMeta: r.state.entityMeta,
                              isSettingsMenuOpened: a,
                              onSettingsMenuOpenChange: i,
                              isContextMenuOpened: l,
                              onContextMenuOpenChange: n,
                          });
                });
            var ow = a(11451),
                oR = a.n(ow);
            let oD = (0, y.PA)(() => {
                    let { fullscreenVideoPlayer: e } = (0, T.g)(),
                        { state: t, toggleTrue: a, toggleFalse: i } = (0, eb.e)(!1),
                        { state: l, toggleTrue: n, toggleFalse: r } = (0, eb.e)(!1),
                        { state: s, toggleTrue: o, toggleFalse: c } = (0, eb.e)(!1),
                        d = (0, g.useRef)(null),
                        [u, _] = (0, g.useState)(!1),
                        [m, p] = (0, g.useState)(!1),
                        v = m || u,
                        x = (0, g.useMemo)(
                            () =>
                                (0, om.A)(() => {
                                    (i(), r());
                                }, 1500),
                            [r, i],
                        ),
                        y = (0, g.useMemo)(
                            () =>
                                (0, om.A)(() => {
                                    r();
                                }, 1500),
                            [r],
                        ),
                        C = (0, A.c)(() => {
                            (y.cancel(), n(), o());
                        }),
                        b = (0, A.c)(() => {
                            (y(), c());
                        }),
                        f = (0, A.c)(() => {
                            u || m || x();
                        }),
                        j = (0, A.c)((e) => {
                            (e.stopPropagation(), x.cancel(), y.cancel(), a(), n(), x());
                        }),
                        N = (0, A.c)((e) => {
                            (e.stopPropagation(), x.cancel(), y.cancel(), a(), x());
                        }),
                        I = (0, A.c)(() => {
                            (t ? x.cancel() : a(), x());
                        });
                    ((0, g.useEffect)(
                        () => (
                            window.addEventListener('mousemove', I),
                            () => {
                                window.removeEventListener('mousemove', I);
                            }
                        ),
                        [I],
                    ),
                        (0, g.useEffect)(() => {
                            t || r();
                        }, [r, t]));
                    let k = e.state.status !== rh.MT.PLAYING,
                        S = (0, g.useMemo)(
                            () =>
                                (0, h.jsx)(op.t, {
                                    className: oR().carousel,
                                    containerClassName: oR().carouselBlock,
                                    clipCardTitleClassName: (0, eO.$)(oR().clipCardTitle, oR().important),
                                    clipCardArtistLinkClassName: (0, eO.$)(oR().clipCardArtist, oR().important),
                                    isShimmerVisible: e.isLoading,
                                    isShimmerActive: !0,
                                    clips: e.clips,
                                    shouldOpenModalOnCardClick: !1,
                                    itemCounter: 5,
                                    ref: d,
                                }),
                            [e.clips, e.isLoading, d],
                        );
                    return (
                        (0, g.useEffect)(() => {
                            (l || s) && (a(), n());
                        }, [s, l, n, a]),
                        (0, h.jsxs)('div', {
                            className: (0, eO.$)(oR().root, { [oR().root_visible]: t || k || s || v, [oR().root_withHoveredCarousel]: l }),
                            onMouseEnter: a,
                            onMouseLeave: f,
                            onFocus: N,
                            children: [
                                (0, h.jsx)(oO, { isSettingsMenuOpened: u, onSettingsMenuOpenChange: _, isContextMenuOpened: m, onContextMenuOpenChange: p }),
                                (0, h.jsx)(sb.F, {
                                    blockId: ov.h.CLIPS_CAROUSEL,
                                    blockType: ov.h.CLIPS_CAROUSEL,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: e.clips.length,
                                    children: (0, h.jsx)('div', {
                                        className: oR().carouselContainer,
                                        onMouseEnter: C,
                                        onMouseLeave: b,
                                        onFocus: j,
                                        children: (0, h.jsx)(ox.F, {
                                            className: oR().carouselWrapper,
                                            carouselElement: S,
                                            ref: d,
                                            isCarouselBetweenArrows: !0,
                                            controlsWrapperClassName: oR().carouselControls,
                                            buttonSize: 'xs',
                                            buttonVariant: 'default',
                                            withSecondaryColor: !0,
                                        }),
                                    }),
                                }),
                            ],
                        })
                    );
                }),
                oB = (0, y.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, T.g)();
                    return e ? null : (0, h.jsx)(oD, {});
                });
            var oF = a(8299),
                oU = a(42205),
                oz = a(16717),
                oW = a(14912),
                oV = a(93346),
                oK = a.n(oV);
            let oY = (0, y.PA)((e) => {
                let { closeModal: t, withAdaptiveAspectRatio: a } = e,
                    i = (0, g.useRef)(null),
                    l = (0, aF.e)(),
                    {
                        sonataState: { isVHCoreRegistered: n },
                        fullscreenVideoPlayer: r,
                        advert: s,
                    } = (0, T.g)(),
                    { from: o } = (0, eW.f)({ pageId: tr._Q.VIDEO_PLAYER, contextId: r.state.contextId, contextType: eF.K.Various }),
                    c = (0, oW.X)(),
                    { state: d, toggleFalse: u } = (0, eb.e)(!0),
                    { togglePlay: _ } = (0, e5.D)({
                        playContextParams: { contextData: { type: eF.K.Various, meta: { id: ob.H.VARIOUS_CLIP_CONTEXT }, from: o }, loadContextMeta: !0 },
                        sonataState: r.state,
                        playbackId: su.V.CLIP,
                    }),
                    m = (0, oF.X)({ clip: r.clips[r.clipActiveIndex], callback: _, disclaimerRejectHandler: t });
                return (
                    (0, g.useEffect)(() => {
                        let e, t, a;
                        if (i.current && l && n) {
                            let n, d;
                            (r.setSonataStatusBeforeClipStart(),
                                l.setVideoCoreContainer({ container: i.current, playbackId: su.V.CLIP }),
                                l
                                    .setContext(
                                        {
                                            contextData: { type: eF.K.Various, meta: { id: ob.H.VARIOUS_CLIP_CONTEXT }, from: o },
                                            entitiesData: r.entitiesData,
                                            queueParams: { index: r.clipActiveIndex },
                                            loadContextMeta: !1,
                                        },
                                        su.V.CLIP,
                                    )
                                    .then(() => {
                                        s.isAdvertShown || m();
                                    }));
                            let u = l.getState(su.V.CLIP);
                            ((e = u.queueState.currentEntity.onChange((e) => {
                                var t;
                                let a = null == e ? void 0 : e.context.data.type,
                                    i = null == e ? void 0 : e.context.data.meta.id,
                                    l = null == e ? void 0 : e.entity.data.meta.id;
                                if (l) {
                                    let e = (0, oU.z)(r.ids, r.ids.indexOf(Number(l)));
                                    (r.setClipIndex(e), c((0, oz.J)(r.ids, e)));
                                }
                                (r.state.setEntityMeta(null != (t = null == e ? void 0 : e.entity) ? t : null),
                                    a && r.state.setContextType(a),
                                    i && r.state.setContextId(i));
                            })),
                                (t = u.playerState.status.onChange((e) => {
                                    e && r.state.setStatus(e);
                                })),
                                (a = u.currentContext.onChange((e) => {
                                    (null == n || n(),
                                        null == d || d(),
                                        (n =
                                            null == e
                                                ? void 0
                                                : e.availableActions.moveBackward.onChange((e) => {
                                                      r.state.setCanMoveBackward(!!e);
                                                  })),
                                        (d =
                                            null == e
                                                ? void 0
                                                : e.availableActions.moveForward.onChange((e) => {
                                                      r.state.setCanMoveForward(!!e);
                                                  })));
                                })));
                        }
                        return () => {
                            (null == l || l.destroyVideoCore(su.V.CLIP),
                                r.isPlayingSonataStatusBeforeClipStart && (null == l || l.resume()),
                                null == e || e(),
                                null == t || t(),
                                null == a || a());
                        };
                    }, [l, n, r, o, c, _, m, s.isAdvertShown]),
                    (0, g.useEffect)(() => {
                        r.state.status === rh.MT.PLAYING && u();
                    }, [r.state.status, u]),
                    (0, h.jsxs)('div', {
                        className: oK().root,
                        children: [
                            (0, h.jsx)('div', { onClick: _, ref: i, className: (0, eO.$)(oK().container, { [oK().container_adaptiveAspectRatio]: a }) }),
                            (0, h.jsx)('div', {
                                className: (0, eO.$)(oK().loadingIndicator, { [oK().loadingIndicator_showed]: d }),
                                children: (0, h.jsx)(t2.y, { size: 'm' }),
                            }),
                        ],
                    })
                );
            });
            var oH = a(73240),
                oq = a.n(oH);
            let oQ = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, H.A)(),
                        {
                            advertBanners: {
                                banners: { topAdvertBanner: t },
                            },
                            fullscreenVideoPlayer: a,
                            modals: { disclaimerModal: i },
                        } = (0, T.g)(),
                        { defaultLayoutRef: l } = (0, j.g)(),
                        n = (0, g.useCallback)(() => {
                            window.history.back();
                        }, []),
                        r = (0, oo.p)(),
                        { notify: s } = (0, es.l)(),
                        o = (0, aF.e)(),
                        c = (0, tZ.j)(),
                        d = (() => {
                            let e = (0, tl.st)(),
                                { hash: t } = (0, tl.gf)(),
                                a = (0, ts.U)();
                            return (0, A.c)((i) => {
                                if (!e) return;
                                let l = { hash: t, pageId: C.AppScreen.VideoScreen, mainObjectType: C.DomainObjectType.Video, mainObjectId: i },
                                    n = (0, ta.F)({ params: l, logger: a, context: 'useSendEventOnClipOpened' });
                                n && (0, s_.w5)(e.evgenInstance, n);
                            });
                        })(),
                        u = (() => {
                            let e = (0, tl.st)(),
                                { hash: t } = (0, tl.gf)(),
                                a = (0, ts.U)();
                            return (0, A.c)((i) => {
                                if (!e) return;
                                let l = { hash: t, pageId: C.AppScreen.VideoScreen, mainObjectType: C.DomainObjectType.Video, mainObjectId: i },
                                    n = (0, ta.F)({ params: l, logger: a, context: 'useSendEventOnClipClosed' });
                                n && (0, s_.XB)(e.evgenInstance, n);
                            });
                        })(),
                        [_] = a.ids,
                        [m, p] = (0, g.useState)(!1),
                        v = a.modal.isOpened,
                        x = (0, g.useCallback)(
                            (e) => {
                                if (m && !v && e.url === lN.Z.main.href) return or(e);
                            },
                            [m, v],
                        );
                    (0, L.C)(x);
                    let y = (0, A.c)(() => {
                            let e = (0, os.q)(ly.K.IDS),
                                t = (0, os.q)(ly.K.ACTIVE_INDEX),
                                { clipIds: i, activeClipIndex: l } = (0, oi.V)(e, t);
                            i.length
                                ? (a.setIds(i), a.setClipIndex(l), a.setAnimationState(!1), null == o || o.setEntityByIndex(a.clipActiveIndex, su.V.CLIP), a.modal.open())
                                : (a.modal.close(), a.reset());
                        }),
                        b = (0, A.c)(() => {
                            if (a.modal.isOpened && !i.isOpened) {
                                if ((a.setAnimationState(!0), _ && u(String(_)), a.isOpenedFromMain)) {
                                    (r(lN.Z.main.href), p(!0), a.modal.close(), a.reset());
                                    return;
                                }
                                n();
                            }
                        });
                    (((e) => {
                        let { fullscreenVideoPlayer: t, advert: a } = (0, T.g)(),
                            i = (0, aF.e)(),
                            l = (0, sy.z)(),
                            n = (0, o_.K)(t.state.entityMeta);
                        (0, g.useEffect)(() => {
                            if (a.isAdvertShown) {
                                null == l || l.disable(sh.M.VIDEO_PLAYER);
                                return;
                            }
                            t.modal.isOpened
                                ? (null == l || l.disable(sh.M.MAIN),
                                  null == l || l.enable(sh.M.MAIN, sx.l.TOGGLE_MUTE),
                                  null == l || l.enable(sh.M.MAIN, sx.l.INCREASE_VOLUME),
                                  null == l || l.enable(sh.M.MAIN, sx.l.DECREASE_VOLUME),
                                  null == l || l.enable(sh.M.VIDEO_PLAYER))
                                : (null == l || l.disable(sh.M.VIDEO_PLAYER), null == l || l.enable(sh.M.MAIN));
                        }, [l, t.modal.isOpened, a.isAdvertShown]);
                        let r = null == i ? void 0 : i.getState(su.V.CLIP);
                        (0, g.useEffect)(
                            () => (
                                null == l || l.addShortcutsListener(sh.M.VIDEO_PLAYER, sx.l.CLOSE, e),
                                null == l ||
                                    l.addShortcutsListener(sh.M.VIDEO_PLAYER, sx.l.TOGGLE_PLAY, () => {
                                        null == i || i.togglePause(su.V.CLIP);
                                    }),
                                null == l || l.addShortcutsListener(sh.M.VIDEO_PLAYER, sx.l.LIKE, n),
                                null == l ||
                                    l.addShortcutsListener(sh.M.VIDEO_PLAYER, sx.l.MOVE_FORWARD, async () => {
                                        var e;
                                        (null == r || null == (e = r.currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                            (await (null == i ? void 0 : i.moveForward(su.V.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(sh.M.VIDEO_PLAYER, sx.l.MOVE_BACKWARD, async () => {
                                        var e;
                                        (null == r || null == (e = r.currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                            (await (null == i ? void 0 : i.moveBackward(su.V.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(sh.M.VIDEO_PLAYER, sx.l.SLIDE_FORWARD, async () => {
                                        (null == r ? void 0 : r.playerState.progress.value.duration) && (await (null == i ? void 0 : i.slideForward(1, su.V.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(sh.M.VIDEO_PLAYER, sx.l.SLIDE_BACKWARD, async () => {
                                        (null == r ? void 0 : r.playerState.progress.value.duration) && (await (null == i ? void 0 : i.slideBackward(1, su.V.CLIP)));
                                    }),
                                () => {
                                    (null == l || l.removeShortcutsListener(sh.M.VIDEO_PLAYER, sx.l.CLOSE),
                                        null == l || l.removeShortcutsListener(sh.M.VIDEO_PLAYER, sx.l.TOGGLE_PLAY),
                                        null == l || l.removeShortcutsListener(sh.M.VIDEO_PLAYER, sx.l.LIKE),
                                        null == l || l.removeShortcutsListener(sh.M.VIDEO_PLAYER, sx.l.MOVE_FORWARD),
                                        null == l || l.removeShortcutsListener(sh.M.VIDEO_PLAYER, sx.l.MOVE_BACKWARD),
                                        null == l || l.removeShortcutsListener(sh.M.VIDEO_PLAYER, sx.l.SLIDE_FORWARD),
                                        null == l || l.removeShortcutsListener(sh.M.VIDEO_PLAYER, sx.l.SLIDE_BACKWARD));
                                }
                            ),
                            [l, t.ids, e, n, i, r, a.isAdvertShown],
                        );
                    })(b),
                        0 === a.ids.length && b(),
                        (0, g.useEffect)(
                            () => () => {
                                (a.reset(), t.setIsShowBanner(!0));
                            },
                            [a, t, t.setIsShowBanner],
                        ),
                        (0, g.useEffect)(() => {
                            a.modal.isOpened ? t.setIsShowBanner(!1) : t.setIsShowBanner(!0);
                        }, [a.modal.isOpened, t, t.setIsShowBanner]));
                    let N = (0, A.c)(() => {
                        (a.setAnimationState(!0), _ && u(String(_)), r(lN.Z.main.href), a.modal.close(), a.reset());
                    });
                    return (
                        (0, g.useEffect)(() => {
                            if (a.isNotFound || a.isSomethingWrong) {
                                b();
                                let t = a.modal.isOpened ? er.u.FULLSCREEN_ERROR : er.u.ERROR;
                                s((0, h.jsx)(eo.h, { error: e({ id: 'error-messages.something-went-wrong' }) }), { containerId: t });
                            }
                        }, [a.isNotFound, a.isSomethingWrong, a.modal.isOpened, b, e, s]),
                        (0, g.useEffect)(() => {
                            a.modal.isOpened && _ && d(String(_));
                        }, [a.modal.isOpened, d, _]),
                        (0, g.useEffect)(
                            () => (
                                window.addEventListener('popstate', y),
                                () => {
                                    window.removeEventListener('popstate', y);
                                }
                            ),
                            [y],
                        ),
                        ((e) => {
                            let t = null == e ? void 0 : e.clips[0],
                                a = null == e ? void 0 : e.modal.isOpened,
                                i = null == e ? void 0 : e.isLoading,
                                l = (0, g.useCallback)(
                                    (e) => {
                                        if (a && t && !i)
                                            return ou({
                                                clipMeta: ((e) => {
                                                    var t;
                                                    if (!e)
                                                        return {
                                                            clipId: 0,
                                                            title: '',
                                                            artists: [],
                                                            thumbnail: '',
                                                            previewUrl: '',
                                                            duration: 0,
                                                            disclaimers: [],
                                                            trackIds: [],
                                                        };
                                                    let a = [];
                                                    return (
                                                        (null == (t = e.disclaimers) ? void 0 : t.every((e) => (0, od.C)(e))) && (a = (0, oc.H)(e.disclaimers)),
                                                        {
                                                            clipId: e.clipId,
                                                            title: e.title,
                                                            thumbnail: e.thumbnail,
                                                            previewUrl: e.previewUrl,
                                                            duration: e.duration,
                                                            disclaimers: a,
                                                            version: e.version,
                                                            artists: e.artists.map((e) => {
                                                                let t = (0, S.N)(e),
                                                                    a = Number(t.id);
                                                                return { ...t, id: isNaN(a) ? 0 : a };
                                                            }),
                                                            trackIds: [],
                                                        }
                                                    );
                                                })(t),
                                                additional: e,
                                            });
                                    },
                                    [t, i, a],
                                );
                            (0, L.C)(l);
                        })(a),
                        (0, g.useEffect)(() => {
                            a.isNeededToLoad && a.modal.isOpened && _ && a.getClips();
                        }, [a, a.isNeededToLoad, a.modal.isOpened, _]),
                        (0, h.jsxs)(f.a, {
                            className: (0, eO.$)(oq().root, oq().important),
                            open: a.modal.isOpened,
                            onOpenChange: a.modal.onOpenChange,
                            onClose: b,
                            portalNode: l,
                            size: 'fullscreen',
                            placement: 'center',
                            showHeader: !1,
                            contentClassName: oq().modalContent,
                            closeOnOutsidePress: !1,
                            escapeKey: !1,
                            transitionDuration: 300 * !!a.withAnimation,
                            'data-test-id': q.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_MODAL,
                            children: [
                                (0, h.jsxs)('header', {
                                    className: oq().header,
                                    children: [
                                        (0, h.jsx)(Q.$, {
                                            className: oq().closeButton,
                                            radius: 'round',
                                            color: 'secondary',
                                            size: 'm',
                                            icon: (0, h.jsx)($.I, { variant: 'arrowDown', size: 'xs' }),
                                            onClick: b,
                                            'aria-label': e({ id: 'interface-actions.close' }),
                                            'data-test-id': q.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_CLOSE_BUTTON,
                                        }),
                                        (0, h.jsx)(aj.N, {
                                            className: oq().logoLink,
                                            href: '/',
                                            onClick: N,
                                            'aria-label': e({ id: 'navigation.page-main' }),
                                            'data-test-id': q.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_LABEL_BUTTON,
                                            children: (0, h.jsx)($.I, { variant: 'musicLogoCenter'.concat(c), className: oq()['logo_'.concat(c.toLocaleLowerCase())] }),
                                        }),
                                    ],
                                }),
                                (0, h.jsx)(oY, { closeModal: b, withAdaptiveAspectRatio: !0 }),
                                (0, h.jsx)(oB, {}),
                                (0, h.jsx)(l9.Notification, {
                                    className: oq().notification,
                                    enableMultiContainer: !0,
                                    containerId: er.u.FULLSCREEN_INFO,
                                    position: 'bottom-center',
                                }),
                                (0, h.jsx)(l9.Notification, {
                                    className: oq().notification,
                                    enableMultiContainer: !0,
                                    containerId: er.u.FULLSCREEN_ERROR,
                                    position: 'bottom-center',
                                }),
                            ],
                        })
                    );
                }),
                o$ = (0, y.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, T.g)();
                    return e ? null : (0, h.jsx)(oQ, {});
                });
            var oG = a(31142),
                oZ = a.n(oG),
                oX = a(84403),
                oJ = a(44502),
                o0 = a.n(oJ);
            let o1 = (e) => {
                let { className: t, artistId: a, artistName: i } = e;
                return (0, h.jsxs)(aj.N, {
                    href: 'https://band.link/scanner?search='.concat(a, '&type=artist_id&service=yandex_music'),
                    className: (0, eO.$)(o0().root, t),
                    'data-test-id': q.e8.content.ARTIST_ABOUT_BANDLINK_SCANNER,
                    children: [
                        (0, h.jsx)($.I, { className: o0().icon, variant: 'bandlink' }),
                        (0, h.jsxs)('div', {
                            className: o0().description,
                            children: [
                                (0, h.jsxs)('div', {
                                    className: o0().descriptionTitle,
                                    children: [
                                        (0, h.jsx)(ec.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'medium',
                                            className: o0().descriptionTitleText,
                                            children: (0, h.jsx)(eX.A, { id: 'artist.artist-in-playlists' }),
                                        }),
                                        (0, h.jsx)($.I, { variant: 'link', size: 'xxs', className: o0().descriptionTitleButton }),
                                    ],
                                }),
                                (0, h.jsx)(ec.HL, { variant: 'div', size: 'l', weight: 'medium', className: o0().descriptionArtist, children: null != i ? i : '' }),
                            ],
                        }),
                    ],
                });
            };
            var o2 = a(96527),
                o4 = a(28830),
                o8 = a(70810),
                o3 = a.n(o8);
            let o5 = (e) => {
                    var t;
                    let { link: a, artistName: i, shouldSendAnalyticsOnNavigate: l } = e,
                        { formatMessage: n } = (0, H.A)(),
                        r = (0, o2.N)(),
                        { ref: s, intersectionPropertyId: o } = (0, o4.n)(),
                        c = (0, A.c)(() => {
                            var e;
                            l && r({ to: C.AppScreen.Link, deepLink: null != (e = a.url) ? e : void 0 });
                        });
                    return (0, h.jsx)('div', {
                        ref: s,
                        'data-intersection-property-id': o,
                        children: (0, h.jsx)(aj.N, {
                            href: a.url,
                            className: o3().link,
                            target: '_blank',
                            'aria-label': n({ id: 'artist.artist-links-label' }, { artistName: i, linkName: a.title }),
                            onClick: c,
                            children: (0, h.jsx)(tV._V, {
                                fit: 'contain',
                                className: o3().icon,
                                size: 100,
                                src: null != (t = a.imgUrl) ? t : void 0,
                                fallbackIconVariant: 'site',
                                fallbackIconSize: 'xs',
                                withAvatarReplace: !0,
                            }),
                        }),
                    });
                },
                o6 = (e) => {
                    let { links: t, artistName: a, shouldSendAnalyticsOnNavigate: i, albumId: l } = e;
                    return (0, h.jsx)('div', {
                        className: o3().root,
                        'data-test-id': q.e8.content.ARTIST_ABOUT_SOCIAL_LINKS,
                        children: t.map((e, n) =>
                            (0, h.jsx)(
                                sA.B,
                                {
                                    objectType: C.DomainObjectType.Link,
                                    objectId: String(e.url),
                                    objectPosX: n + 1,
                                    objectPosY: 1,
                                    objectsCount: t.length,
                                    mainObjectType: C.DomainObjectType.Link,
                                    mainObjectId: l,
                                    children: (0, h.jsx)(o5, { link: e, artistName: a, shouldSendAnalyticsOnNavigate: i }, e.url),
                                },
                                e.url,
                            ),
                        ),
                    });
                };
            var o9 = a(61898),
                o7 = a.n(o9);
            let ce = (e) => {
                let { lastMonthListeners: t, lastMonthListenersDelta: a } = e,
                    i = (0, g.useMemo)(() => {
                        let e = (0, h.jsx)('br', {});
                        if (0 === a) return (0, h.jsx)(eX.A, { id: 'artist.stats-same-listeners-per-month', values: { br: e } });
                        let t = (0, h.jsx)(ec.HL, {
                            variant: 'span',
                            className: (0, eO.$)({ [o7().statsNumber_positive]: a > 0, [o7().statsNumber_negative]: a < 0 }),
                            size: 'l',
                            weight: 'medium',
                            children: Math.abs(a).toLocaleString('ru'),
                        });
                        return a > 0
                            ? (0, h.jsx)(eX.A, { id: 'artist.stats-more-listeners-per-month', values: { number: t, br: e, nbsp: '\xa0' } })
                            : (0, h.jsx)(eX.A, { id: 'artist.stats-less-listeners-per-month', values: { number: t, br: e, nbsp: '\xa0' } });
                    }, [a]);
                return (0, h.jsxs)('div', {
                    'data-test-id': q.e8.content.ARTIST_ABOUT_STATS,
                    children: [
                        (0, h.jsx)(ec.HL, {
                            variant: 'div',
                            className: o7().title,
                            size: 'l',
                            weight: 'medium',
                            'data-test-id': q.e8.content.ARTIST_ABOUT_STATS_TITLE,
                            children: (0, h.jsx)(eX.A, { id: 'artist.stats-listeners-per-month' }),
                        }),
                        (0, h.jsx)(ec.DZ, {
                            size: 'xxl',
                            variant: 'div',
                            className: o7().count,
                            'data-test-id': q.e8.content.ARTIST_ABOUT_STATS_COUNT,
                            children: t.toLocaleString('ru'),
                        }),
                        (0, h.jsx)(ec.HL, {
                            variant: 'div',
                            className: o7().stats,
                            size: 'l',
                            weight: 'medium',
                            'data-test-id': q.e8.content.ARTIST_ABOUT_STATS_DYNAMIC,
                            children: i,
                        }),
                    ],
                });
            };
            var ct = a(63028),
                ca = a.n(ct);
            let ci = (0, y.PA)((e) => {
                let { covers: t } = e,
                    { formatMessage: a } = (0, H.A)(),
                    {
                        modals: { imageSliderModal: i, artistAboutModal: l },
                    } = (0, T.g)(),
                    n = t.slice(0, 1),
                    r = t.length - 2 + 1,
                    s = (0, A.c)((e) => () => {
                        (l.close(), i.openImages({ images: t, initialSlideIndex: e }));
                    });
                return (0, h.jsxs)('div', {
                    className: ca().root,
                    'data-test-id': q.e8.content.ARTIST_ABOUT_IMAGE_SLIDER,
                    children: [
                        n.map((e, t) =>
                            (0, h.jsx)(
                                Q.$,
                                {
                                    className: ca().button,
                                    onClick: s(t),
                                    'aria-label': a({ id: 'slider.view-artist-covers' }),
                                    'data-test-id': q.e8.content.ARTIST_ABOUT_IMAGE_SLIDER_BUTTON,
                                    children: (0, h.jsx)(tV._V, { fit: 'contain', className: ca().image, src: e, size: 400, withAvatarReplace: !0 }),
                                },
                                t,
                            ),
                        ),
                        t[1] &&
                            (0, h.jsxs)(Q.$, {
                                className: ca().button,
                                onClick: s(1),
                                'aria-label': a({ id: 'slider.view-artist-covers' }),
                                'data-test-id': q.e8.content.ARTIST_ABOUT_IMAGE_SLIDER_BUTTON,
                                children: [
                                    (0, h.jsx)(tV._V, { fit: 'contain', className: ca().image, src: t[1], size: 400, withAvatarReplace: !0 }),
                                    (0, h.jsx)('div', {
                                        className: ca().moreCovers,
                                        children: (0, h.jsx)(ec.HL, {
                                            variant: 'span',
                                            className: ca().moreCoversText,
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, h.jsx)(eX.A, { id: 'slider.images-left-count', values: { imagesLeft: r } }),
                                        }),
                                    }),
                                ],
                            }),
                    ],
                });
            });
            var cl = a(69824),
                cn = a.n(cl);
            let cr = (0, y.PA)(() => {
                var e, t, a, i, l, n, r, s;
                let { formatMessage: o } = (0, H.A)(),
                    {
                        modals: { artistAboutModal: c },
                    } = (0, T.g)(),
                    { state: d, setState: u } = (0, eb.e)(!1),
                    _ = ((e) => {
                        let { formatMessage: t } = (0, H.A)();
                        return t(e === oX.o.COMPOSER ? { id: 'entity-names.composer' } : { id: 'entity-names.singer' });
                    })(c.artistType);
                return (0, h.jsxs)('div', {
                    className: cn().root,
                    children: [
                        c.isResolved &&
                            (0, h.jsxs)('header', {
                                className: cn().header,
                                'data-test-id': q.e8.content.ARTIST_ABOUT_HEADER,
                                children: [
                                    (0, h.jsx)(ec.HL, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: cn().subtitle,
                                        'data-test-id': q.e8.content.ARTIST_ABOUT_HEADER_SUBTITLE,
                                        children: _,
                                    }),
                                    (0, h.jsx)(ec.DZ, {
                                        size: 'xxl',
                                        variant: 'div',
                                        className: cn().title,
                                        'data-test-id': q.e8.content.ARTIST_ABOUT_HEADER_TITLE,
                                        children: null == (e = c.artist) ? void 0 : e.name,
                                    }),
                                ],
                            }),
                        c.description &&
                            (0, h.jsx)(eI, {
                                moreText: o({ id: 'track-modal.read-more' }),
                                className: cn().descriptionWrapper,
                                buttonClassName: cn().readMoreButton,
                                buttonProps: { 'data-test-id': q.e8.content.ARTIST_ABOUT_DESCRIPTION_READ_MORE_BUTTON },
                                open: d,
                                onOpenChange: u,
                                lineClamp: 7,
                                withFade: !0,
                                'data-test-id': q.e8.content.ARTIST_ABOUT_DESCRIPTION,
                                children: (0, h.jsx)(
                                    ec.HL,
                                    {
                                        variant: 'div',
                                        className: cn().description,
                                        size: 'l',
                                        weight: 'medium',
                                        'data-test-id': q.e8.content.ARTIST_ABOUT_DESCRIPTION_TEXT,
                                        children: c.description,
                                    },
                                    null == (t = c.artist) ? void 0 : t.getKey('description'),
                                ),
                            }),
                        c.isArtistStatsAvailable &&
                            (0, h.jsx)(ce, { lastMonthListeners: null != (r = c.lastMonthListeners) ? r : 0, lastMonthListenersDelta: c.lastMonthListenersDelta }),
                        c.isResolved &&
                            (0, h.jsx)(o1, {
                                className: cn().bandlinkScanner,
                                artistId: null == (a = c.artist) ? void 0 : a.id,
                                artistName: null == (i = c.artist) ? void 0 : i.name,
                            }),
                        c.links &&
                            (null == (l = c.links) ? void 0 : l.length) > 0 &&
                            (0, h.jsx)(o6, { links: c.links, artistName: null != (s = null == (n = c.artist) ? void 0 : n.name) ? s : '' }),
                        c.covers && c.covers.length > 0 && (0, h.jsx)(ci, { covers: c.covers }),
                    ],
                });
            });
            var cs = a(24352),
                co = a.n(cs);
            let cc = () =>
                    (0, h.jsxs)('div', {
                        className: co().root,
                        children: [(0, h.jsx)(ex.W, { className: co().entityName }), (0, h.jsx)(ex.W, { className: co().title }), (0, h.jsx)(ek.q, { count: 4 })],
                    }),
                cd = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, H.A)(),
                        { notify: t } = (0, es.l)(),
                        { contentRef: a } = (0, j.g)(),
                        {
                            modals: { artistAboutModal: i },
                            settings: { isMobile: l },
                        } = (0, T.g)();
                    (0, g.useEffect)(() => {
                        i.isRejected &&
                            (t((0, h.jsx)(eo.h, { error: e({ id: 'artist-errors.error-during-loading-artist-info' }) }), { containerId: er.u.ERROR }), i.close());
                    }, [i, i.isRejected, e, t]);
                    let n = (0, tN.L)(() => (i.isLoading ? (0, h.jsx)(cc, {}) : (0, h.jsx)(cr, {})));
                    return (0, h.jsxs)(f.a, {
                        placement: l ? 'default' : 'right',
                        size: l ? 'fullscreen' : 'fitContent',
                        open: i.modal.isOpened,
                        onClose: i.close,
                        contentClassName: oZ().modalContent,
                        headerClassName: oZ().header,
                        className: oZ().root,
                        overlayClassName: oZ().overlay,
                        onOpenChange: i.onOpenChange,
                        labelClose: e({ id: 'interface-actions.close' }),
                        portalNode: l ? null : a,
                        showHeader: !1,
                        'data-test-id': q.Xk.artist.ARTIST_ABOUT_MODAL,
                        children: [
                            (0, h.jsx)(Q.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 'xxs',
                                icon: (0, h.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                className: oZ().closeButton,
                                onClick: i.close,
                                'aria-label': e({ id: 'interface-actions.close' }),
                                'data-test-id': q.Xk.artist.ARTIST_ABOUT_MODAL_CLOSE_BUTTON,
                            }),
                            n,
                        ],
                    });
                });
            var cu = a(34712),
                c_ = a(416),
                cm = a(11940),
                cp = a(41907),
                cv = a.n(cp);
            let cx = (0, y.PA)((e) => {
                var t, a, i, l, n, r, s;
                let { modal: o } = e,
                    { formatMessage: c } = (0, H.A)(),
                    { communication: d } = (0, T.g)(),
                    u = null == (t = o.modalItem) ? void 0 : t.content.isModal,
                    _ = null == (a = o.modalItem) ? void 0 : a.content.advDisclaimer,
                    [m, p] = (0, g.useState)(!1),
                    v = (0, g.useMemo)(() => {
                        var e;
                        return null == (e = o.modalItem)
                            ? void 0
                            : e.content.buttons.map((e) => {
                                  var t;
                                  return (0, h.jsx)(
                                      c_.t,
                                      {
                                          screenId: null == (t = o.modalItem) ? void 0 : t.screenId,
                                          anchorId: o.anchorId,
                                          button: e,
                                          buttonSize: 'default',
                                          buttonClassName: cv().button,
                                          textClassName: cv().buttonText,
                                          hide: o.close,
                                          feedbackToken: o.modalItem ? o.modalItem.feedbackToken : null,
                                      },
                                      e.text,
                                  );
                              });
                    }, [o]),
                    x = (0, g.useMemo)(() => {
                        let e = { bg: {}, title: {}, text: {}, disclaimer: {} };
                        if (!o.modalItem) return e;
                        let { bgUrl: t, bgUrlLarge: a, bgColor: i, titleColor: l, textColor: n, disclaimerColor: r } = o.modalItem.content;
                        return (
                            t && (e.bg['--bg-url'] = 'url("'.concat(t, '")')),
                            a && (e.bg['--bg-url-large'] = 'url("'.concat(a, '")')),
                            i && (e.bg.backgroundColor = i),
                            l && (e.title.color = l),
                            n && (e.text.color = n),
                            r && (e.disclaimer['--disclaimer-color'] = r),
                            e
                        );
                    }, [o]),
                    y = (0, g.useCallback)(() => {
                        (o.modalItem &&
                            o.modalItem.content.closeActionId &&
                            d.action(o.modalItem.anchorId, o.modalItem.screenId, o.modalItem.content.closeActionId, o.modalItem.feedbackToken),
                            o.close());
                    }, [o, d]),
                    C = (0, g.useMemo)(() => {
                        var e;
                        if (null == (e = o.modalItem) ? void 0 : e.content.logoUrl)
                            return (0, h.jsx)(tV._V, {
                                className: cv().image,
                                withAvatarReplace: !0,
                                withFallback: !1,
                                src: o.modalItem.content.logoUrl,
                                withAspectRatio: !0,
                                size: 400,
                                fit: 'cover',
                            });
                    }, [o]),
                    b = (0, g.useMemo)(() => {
                        var e;
                        return (
                            (null == (e = o.modalItem) ? void 0 : e.content.disclaimer) &&
                            (0, cm.r)(o.modalItem.content.disclaimer, aj.N, { className: cv().disclaimerLink, style: x.disclaimer, target: '_blank' })
                        );
                    }, [o, x]);
                return (0, h.jsxs)(f.a, {
                    style: x.bg,
                    className: (0, eO.$)(cv().root, u ? cv().root_modal : cv().root_fullscreen),
                    headerClassName: cv().modalHeader,
                    contentClassName: cv().modalContent,
                    header:
                        C &&
                        (0, h.jsx)('div', {
                            className: (0, eO.$)(cv().imageWrapper, cv().imageWrapper_header),
                            'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_HEADER_LOGO,
                            children: C,
                        }),
                    open: o.isOpened,
                    onOpenChange: o.onOpenChange,
                    onClose: y,
                    closeOnOutsidePress: !1,
                    size: u ? 'fitContent' : 'fullscreen',
                    overlayColor: u ? 'full' : 'transparent',
                    placement: 'center',
                    labelClose: c({ id: 'interface-actions.close' }),
                    customCloseButton: (0, h.jsx)(
                        Q.$,
                        {
                            radius: 'round',
                            size: 'xxs',
                            icon: (0, h.jsx)($.I, { className: cv().closeButtonIcon, variant: 'close', size: 'xxs' }),
                            onClick: y,
                            'aria-label': c({ id: 'interface-actions.close' }),
                            className: cv().closeButton,
                            withHover: !1,
                            'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_CLOSE_CROSS_BUTTON,
                        },
                        ''.concat(null == (i = o.modalItem) ? void 0 : i.anchorId, '-').concat(null == (l = o.modalItem) ? void 0 : l.content.closeActionId),
                    ),
                    'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL,
                    children: [
                        (0, h.jsxs)('div', {
                            className: cv().container,
                            children: [
                                (0, h.jsxs)('div', {
                                    className: cv().wrapper,
                                    children: [
                                        C &&
                                            (0, h.jsx)('div', {
                                                className: (0, eO.$)(cv().imageWrapper, cv().imageWrapper_content),
                                                'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_CONTENT_LOGO,
                                                children: C,
                                            }),
                                        (null == (n = o.modalItem) ? void 0 : n.content.title) &&
                                            (0, h.jsx)(ec.DZ, {
                                                className: cv().title,
                                                style: x.title,
                                                size: 'xl',
                                                weight: 'black',
                                                variant: 'h1',
                                                lineClamp: 3,
                                                'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_TITLE_TEXT,
                                                children: o.modalItem.content.title,
                                            }),
                                        (null == (r = o.modalItem) ? void 0 : r.content.text) &&
                                            (0, h.jsx)(ec.DZ, {
                                                className: cv().text,
                                                style: x.text,
                                                size: 'xs',
                                                variant: 'h2',
                                                lineClamp: 4,
                                                'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_CONTENT_TEXT,
                                                children: o.modalItem.content.text,
                                            }),
                                        (0, h.jsx)(tY.r, {
                                            page: tH.l.MUSIC_DEEPLINK_SCREEN,
                                            places: [tq.R.TOP_BUTTON],
                                            children: (0, h.jsx)('div', { className: cv().buttons, children: v }),
                                        }),
                                    ],
                                }),
                                (0, h.jsxs)('div', {
                                    className: cv().disclaimerWrapper,
                                    style: x.disclaimer,
                                    children: [
                                        (0, h.jsx)(ec.HL, {
                                            className: cv().disclaimer,
                                            type: 'text',
                                            variant: 'div',
                                            size: 'xs',
                                            weight: 'normal',
                                            'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_DISCLAIMER,
                                            children: b,
                                        }),
                                        _ &&
                                            (0, h.jsxs)(cu.AM, {
                                                placement: u ? 'top' : 'top-start',
                                                open: m,
                                                onOpenChange: p,
                                                offsetOptions: 8,
                                                transform: !1,
                                                children: [
                                                    (0, h.jsxs)(Q.$, {
                                                        variant: 'text',
                                                        color: 'secondary',
                                                        withHover: !1,
                                                        withRipple: !1,
                                                        className: (0, eO.$)(
                                                            cv().advDisclaimerTrigger,
                                                            u ? cv().advDisclaimerTrigger_modal : cv().advDisclaimerTrigger_fullscreen,
                                                        ),
                                                        'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                        children: [
                                                            (0, h.jsx)(eX.A, { id: 'ads.ad' }),
                                                            (0, h.jsx)($.I, { variant: 'moreOutlined', size: u ? 'xxxs' : 'xxs' }),
                                                        ],
                                                    }),
                                                    (0, h.jsx)(cu.hl, {
                                                        className: cv().advDisclaimerPopover,
                                                        children: (0, h.jsx)(ec.HL, {
                                                            className: cv().advDisclaimerText,
                                                            variant: 'p',
                                                            type: 'text',
                                                            size: 'xs',
                                                            weight: 'medium',
                                                            'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_ADV_DISCLAIMER_TEXT,
                                                            children: _,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        !u && (null == (s = o.modalItem) ? void 0 : s.content.withShadow) && (0, h.jsx)('div', { className: cv().gradientOverlay }),
                    ],
                });
            });
            a(21867);
            var ch = a(41792),
                cy = a.n(ch);
            let cC = (0, y.PA)(() => {
                var e, t, a, i;
                let {
                        settings: { isMobile: l },
                        modals: { imageSliderModal: n },
                    } = (0, T.g)(),
                    { formatMessage: r } = (0, H.A)(),
                    { contentRef: s } = (0, j.g)(),
                    o = (0, sy.z)(),
                    c = (0, g.useRef)(null),
                    [d, u] = (0, g.useState)(!0),
                    [_, m] = (0, g.useState)(!1),
                    [p, v] = (0, g.useState)(0),
                    x = (null != (i = null == (e = n.images) ? void 0 : e.length) ? i : 0) > 1,
                    y = (0, A.c)(() => {
                        var e;
                        null == (e = c.current) || e.swiper.slideNext();
                    }),
                    C = (0, A.c)(() => {
                        var e;
                        null == (e = c.current) || e.swiper.slidePrev();
                    }),
                    b = (0, A.c)((e) => {
                        (u(e.isBeginning), m(e.isEnd), v(e.activeIndex));
                    });
                return (
                    (0, g.useEffect)(() => {
                        setTimeout(() => {
                            var e, t, a;
                            (null == (e = c.current) ? void 0 : e.swiper) &&
                                (u(0 === c.current.swiper.activeIndex),
                                m(c.current.swiper.activeIndex === (null != (a = null == (t = n.images) ? void 0 : t.length) ? a : 0) - 1),
                                v(c.current.swiper.activeIndex));
                        });
                    }, [null == (t = n.images) ? void 0 : t.length, l]),
                    (0, g.useEffect)(() => {
                        n.modal.isOpened
                            ? (null == o || o.disable(sh.M.MAIN, sx.l.CLOSE),
                              null == o || o.disable(sh.M.MAIN, sx.l.SLIDE_BACKWARD),
                              null == o || o.disable(sh.M.MAIN, sx.l.SLIDE_FORWARD),
                              null == o || o.enable(sh.M.IMAGE_SLIDER, sx.l.CLOSE))
                            : (null == o || o.disable(sh.M.IMAGE_SLIDER, sx.l.CLOSE),
                              null == o || o.enable(sh.M.MAIN, sx.l.CLOSE),
                              null == o || o.enable(sh.M.MAIN, sx.l.SLIDE_BACKWARD),
                              null == o || o.enable(sh.M.MAIN, sx.l.SLIDE_FORWARD));
                    }, [o, n.modal.isOpened]),
                    (0, g.useEffect)(
                        () => (
                            null == o ||
                                o.addShortcutsListener(sh.M.IMAGE_SLIDER, sx.l.CLOSE, () => {
                                    n.modal.isOpened && n.close();
                                }),
                            () => {
                                (null == o || o.removeShortcutsListener(sh.M.IMAGE_SLIDER, sx.l.CLOSE),
                                    null == o || o.disable(sh.M.IMAGE_SLIDER, sx.l.CLOSE),
                                    null == o || o.enable(sh.M.MAIN, sx.l.CLOSE),
                                    null == o || o.enable(sh.M.MAIN, sx.l.SLIDE_BACKWARD),
                                    null == o || o.enable(sh.M.MAIN, sx.l.SLIDE_FORWARD),
                                    n.close());
                            }
                        ),
                        [o, n],
                    ),
                    (0, h.jsxs)(f.a, {
                        className: (0, eO.$)(cy().root, { [cy().root_mobile]: l }),
                        contentClassName: cy().modalContent,
                        open: n.modal.isOpened,
                        size: l ? 'fullscreen' : 'fitContent',
                        placement: 'center',
                        showHeader: !1,
                        isMobile: l,
                        onClose: n.close,
                        escapeKey: !1,
                        onOpenChange: n.modal.onOpenChange,
                        portalNode: l ? null : s,
                        withAnimation: !n.modal.isOpened,
                        'data-test-id': q.e8.imageSlider.IMAGE_SLIDER_MODAL,
                        children: [
                            (0, h.jsx)('div', {
                                className: cy().leftArrowWrapper,
                                children:
                                    x &&
                                    (0, h.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, h.jsx)($.I, { variant: 'arrowLeft', size: 'xxs' }),
                                        onClick: C,
                                        disabled: d,
                                        'aria-label': r({ id: 'slider.prev-image' }),
                                        'data-test-id': q.e8.imageSlider.IMAGE_SLIDER_MODAL_PREV_SLIDE_BUTTON,
                                    }),
                            }),
                            (0, h.jsx)('div', {
                                className: cy().rightArrowWrapper,
                                children:
                                    x &&
                                    (0, h.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, h.jsx)($.I, { variant: 'arrowRight', size: 'xxs' }),
                                        onClick: y,
                                        disabled: _,
                                        'aria-label': r({ id: 'slider.next-image' }),
                                        'data-test-id': q.e8.imageSlider.IMAGE_SLIDER_MODAL_NEXT_SLIDE_BUTTON,
                                    }),
                            }),
                            (0, h.jsx)(Q.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 'xxs',
                                icon: (0, h.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                className: cy().closeButton,
                                onClick: n.close,
                                'aria-label': r({ id: 'slider.close-image-modal' }),
                                'data-test-id': q.e8.imageSlider.IMAGE_SLIDER_MODAL_CLOSE_BUTTON,
                            }),
                            (0, h.jsx)('div', {
                                className: cy().content,
                                children: (0, h.jsx)(rp.RC, {
                                    initialSlide: n.initialSlideIndex,
                                    className: cy().slider,
                                    wrapperClass: cy().wrapper,
                                    ref: c,
                                    onActiveIndexChange: b,
                                    a11y: { enabled: !0, containerMessage: r({ id: 'slider.image-slider-modal' }) },
                                    pagination: { dynamicBullets: !0, dynamicMainBullets: 4 },
                                    modules: [rm.dK, rm.s3],
                                    keyboard: !0,
                                    children:
                                        null == (a = n.images)
                                            ? void 0
                                            : a.map((e, t) => {
                                                  var a, i;
                                                  let l = ((e, t) => e >= t - 5 && e <= t + 5)(t, p) ? e : void 0;
                                                  return (0, h.jsxs)(
                                                      rp.qr,
                                                      {
                                                          className: cy().slide,
                                                          'data-test-id': q.e8.imageSlider.IMAGE_SLIDER_MODAL_SLIDE,
                                                          children: [
                                                              (0, h.jsx)(tV._V, {
                                                                  fit: 'contain',
                                                                  className: (0, eO.$)(cy().image, { [cy().image_loading]: !n.isImageLoaded(l) }),
                                                                  src: l,
                                                                  size: n.sizeImage,
                                                                  tabIndex: t === p ? 0 : -1,
                                                                  'aria-roledescription': r({ id: 'slider.slide' }),
                                                                  'aria-label': r(
                                                                      { id: 'slider.image-counter' },
                                                                      { index: t + 1, count: null != (i = null == (a = n.images) ? void 0 : a.length) ? i : 0 },
                                                                  ),
                                                                  onLoadBySrc: n.setImageIsLoaded,
                                                                  withLoadingIndicator: !1,
                                                                  withSrcSet: !1,
                                                                  withAvatarReplace: !0,
                                                                  withAspectRatio: n.withAspectRatio,
                                                              }),
                                                              t === p &&
                                                                  (0, h.jsx)('div', {
                                                                      className: (0, eO.$)(cy().loadingIndicator, {
                                                                          [cy().loadingIndicator_showed]: !n.isImageLoaded(l),
                                                                      }),
                                                                      children: (0, h.jsx)(t2.y, { size: 'm' }),
                                                                  }),
                                                          ],
                                                      },
                                                      t,
                                                  );
                                              }),
                                }),
                            }),
                        ],
                    })
                );
            });
            var cg = a(2345),
                cb = a(47225),
                cA = a.n(cb);
            let cf = (0, y.PA)((e) => {
                let {
                        modalModel: t,
                        children: a,
                        header: i,
                        ariaLabel: l,
                        closeButtonDataTestId: n,
                        className: r,
                        contentClassName: s,
                        headerClassName: o,
                        'data-test-id': c,
                    } = e,
                    {
                        settings: { isMobile: d },
                    } = (0, T.g)(),
                    { contentRef: u } = (0, j.g)(),
                    { formatMessage: _ } = (0, H.A)();
                return (0, h.jsx)(f.a, {
                    'aria-label': l,
                    className: (0, eO.$)(cA().root, r),
                    contentClassName: (0, eO.$)(cA().content, s),
                    header: i,
                    headerClassName: (0, eO.$)(cA().header, o),
                    size: 'fitContent',
                    placement: d ? 'default' : 'right',
                    portalNode: d ? void 0 : u,
                    isMobile: d,
                    enableSwipe: d,
                    withOverlay: !0,
                    overlayColor: 'transparent',
                    labelClose: _({ id: 'interface-actions.close' }),
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    showHeader: !0,
                    closeButtonProps: d && { hidden: !0 },
                    closeButtonDataTestId: n,
                    'data-test-id': c,
                    children: a,
                });
            });
            var cj = a(33012);
            let cT = (0, y.PA)((e) => {
                let { modalModel: t, children: a } = e,
                    { multivibe: i } = (0, T.g)();
                return (0, h.jsx)(cf, {
                    modalModel: t,
                    header: i.isNDAEnabled ? (0, h.jsx)(cj.b, {}) : void 0,
                    closeButtonDataTestId: q.Kq.multivibe.MULTIVIBE_MODAL_CLOSE_BUTTON,
                    'data-test-id': q.Kq.multivibe.MULTIVIBE_MODAL,
                    children: a,
                });
            });
            var cN = a(18684),
                cI = a(46372),
                ck = a(24672),
                cS = a(30664),
                cL = a(6489),
                cE = a.n(cL);
            let cM = (e) => {
                    let { title: t, description: a, withSubtitle: i } = e;
                    return (0, h.jsxs)('div', {
                        className: cE().root,
                        children: [
                            (0, h.jsx)(ec.DZ, {
                                variant: 'h1',
                                size: 'l',
                                weight: 'bold',
                                className: (0, eO.$)(cE().title, { [cE().title_withSubtitle]: i }),
                                dangerouslySetInnerHTML: { __html: (0, ea.ky)(t) },
                                'data-test-id': q.Kq.multivibe.MULTIVIBE_MODAL_TITLE,
                            }),
                            i &&
                                (0, h.jsx)(ec.HL, {
                                    variant: 'div',
                                    type: 'entity',
                                    size: 'l',
                                    weight: 'medium',
                                    className: cE().subtitle,
                                    children: (0, h.jsx)(eX.A, { id: 'multivibe.modal-subtitle' }),
                                }),
                            (0, h.jsx)(ec.HL, {
                                variant: 'div',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                className: cE().description,
                                dangerouslySetInnerHTML: { __html: (0, ea.ky)(a) },
                                'data-test-id': q.Kq.multivibe.MULTIVIBE_MODAL_DESCRIPTION,
                            }),
                        ],
                    });
                },
                cP = (0, y.PA)((e) => {
                    let { roomId: t, onClose: a } = e,
                        { formatMessage: i } = (0, H.A)(),
                        { initCopyVibeRoomInviteLink: l } = (0, cI.r)({ onSuccess: a }),
                        n = (0, cN.m)(),
                        r = (0, A.c)(() => {
                            n({
                                actionType: C.ActionType.Copied,
                                userInteractionType: C.UserInteractionType.Tap,
                                objectType: C.DomainObjectType.Link,
                                objectPosX: 1,
                                objectPosY: 1,
                                objectCount: 0,
                                objectId: '',
                            });
                            let { copy: e } = l();
                            e(t);
                        });
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)(cS.t, { src: 'avatars.mds.yandex.net/get-music-misc/28052/img.6a58b7c30bdb737c087aeab4/%%' }),
                            (0, h.jsx)(cM, { title: i({ id: 'multivibe.only-member-modal-title' }), description: i({ id: 'multivibe.only-member-modal-description' }) }),
                            (0, h.jsx)(Q.$, {
                                color: 'primary',
                                size: 'default',
                                onClick: r,
                                radius: 'xxxl',
                                isBlock: !0,
                                'data-test-id': q.Kq.multivibe.MULTIVIBE_COPY_LINK_BUTTON,
                                children: i({ id: 'interface-actions.copy-link' }),
                            }),
                            (0, h.jsx)(ck.j, {}),
                        ],
                    });
                }),
                cO = (0, y.PA)((e) => {
                    let { roomId: t } = e,
                        { multivibe: a } = (0, T.g)(),
                        { resetDisabledRoomId: i, disabledRoomInfoModal: l } = a,
                        n = (0, cg.l)({ mainObjectType: C.DomainObjectType.NonApplicable });
                    return (
                        (0, g.useEffect)(() => () => i(), [i]),
                        (0, g.useEffect)(() => {
                            if (l.isOpened)
                                return (
                                    n(!0),
                                    () => {
                                        n(!1);
                                    }
                                );
                        }, [n, l.isOpened]),
                        (0, h.jsx)(cT, { modalModel: l, children: (0, h.jsx)(cP, { roomId: t, onClose: l.close }) })
                    );
                });
            var cw = a(59844),
                cR = a(73531);
            let cD = (0, y.PA)((e) => {
                let { onLinkCreateSuccess: t } = e,
                    { formatMessage: a } = (0, H.A)();
                return (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsx)(cS.t, { src: 'avatars.mds.yandex.net/get-music-misc/28052/img.6a58b7c40bdb737c087aeab5/%%' }),
                        (0, h.jsx)(cM, {
                            title: a({ id: 'multivibe.invite-modal-invalid-title' }),
                            description: a({ id: 'multivibe.invite-modal-invalid-description' }),
                        }),
                        (0, h.jsx)(cR.M, { isBlock: !0, title: a({ id: 'multivibe.invite-modal-invalid-button-text' }), onSuccess: t }),
                        (0, h.jsx)(ck.j, {}),
                    ],
                });
            });
            var cB = a(47964);
            let cF = (0, y.PA)((e) => {
                let { seeds: t } = e,
                    { formatMessage: a } = (0, H.A)(),
                    { pageId: i } = (0, sm.$)(),
                    l = (0, e4.b)(),
                    { togglePlay: n, isPlaying: r } = (0, cB.B)({ seeds: t, pageIdForFrom: i, blockIdForFrom: C.EntityTypes.Multiwave }),
                    s = (0, A.c)(() => {
                        (l(!r), n());
                    });
                return (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsx)(cS.t, {}),
                        (0, h.jsx)(cM, { title: a({ id: 'multivibe.enabled-room-modal-title' }), description: a({ id: 'multivibe.enabled-room-modal-description' }) }),
                        (0, h.jsx)(Q.$, {
                            color: 'primary',
                            size: 'default',
                            onClick: s,
                            radius: 'xxxl',
                            isBlock: !0,
                            'data-test-id': q.Kq.multivibe.MULTIVIBE_PLAY_ROOM_BUTTON,
                            children: a({ id: 'multivibe.enabled-room-modal-button-text' }),
                        }),
                        (0, h.jsx)(ck.j, {}),
                    ],
                });
            });
            var cU = a(67879),
                cz = a(27506),
                cW = a(50550),
                cV = a.n(cW);
            let cK = (0, y.PA)((e) => {
                let { room: t, member: a } = e,
                    { formatMessage: i } = (0, H.A)(),
                    { enterVibeRoom: l, isPending: n } = ((e) => {
                        var t, a;
                        let { room: i } = e,
                            { multivibe: l } = (0, T.g)(),
                            { notify: n } = (0, es.l)(),
                            { formatMessage: r } = (0, H.A)(),
                            { pageId: s } = (0, sm.$)(),
                            o = (0, e4.b)(),
                            { resetContext: c, isPlaying: d } = (0, cB.B)({
                                seeds: null != (a = null == (t = i.wave) ? void 0 : t.seeds) ? a : [],
                                pageIdForFrom: s,
                                blockIdForFrom: C.EntityTypes.Multiwave,
                            }),
                            [u, _] = (0, g.useState)(!1),
                            m = (0, g.useRef)(!1);
                        return {
                            enterVibeRoom: (0, A.c)(async () => {
                                if (m.current) return;
                                (_(!0), (m.current = !0));
                                let e = await l.enterRoom({ roomId: i.id }),
                                    t = l.duplicateRoomId;
                                if ((t && e === cz.F.ERROR && l.errorName === cU.z.ROOM_DUPLICATION && (e = await l.enterRoom({ roomId: t })), e === cz.F.ERROR))
                                    n((0, h.jsx)(eo.h, { error: r({ id: 'error-messages.error-during-action' }) }), { containerId: er.u.ERROR });
                                else {
                                    var a, s, u;
                                    let e = l.invitationRoom,
                                        t = null != (u = null == e || null == (a = e.wave) ? void 0 : a.seeds) ? u : [];
                                    (await c(t), o(!d, null == e || null == (s = e.wave) ? void 0 : s.seedsId));
                                }
                                (_(!1), (m.current = !1));
                            }),
                            isPending: u,
                        };
                    })({ room: t }),
                    r = (0, A.c)(() => l()),
                    { name: s, cover: o } = a;
                return (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsx)('div', {
                            className: cV().imageContainer,
                            children: (0, h.jsx)(cS.t, {
                                src: o.uri,
                                className: (0, eO.$)(cV().multivibeCover, cV().guestAvatar),
                                imageClassName: cV().multivibeAvatar,
                                withSrcSet: !1,
                                withAspectRatio: !1,
                                withTopSpace: !1,
                            }),
                        }),
                        (0, h.jsx)(cM, {
                            title: i({ id: 'multivibe.invite-modal-valid-title' }, { name: s }),
                            description: i({ id: 'multivibe.invite-modal-valid-description' }),
                        }),
                        (0, h.jsx)(Q.$, {
                            color: 'primary',
                            size: 'default',
                            onClick: r,
                            disabled: n,
                            spinner: n ? (0, h.jsx)(t2.y, { size: 'xs' }) : void 0,
                            radius: 'xxxl',
                            isBlock: !0,
                            'data-test-id': q.Kq.multivibe.MULTIVIBE_JOIN_ROOM_BUTTON,
                            children: i({ id: 'multivibe.invite-modal-valid-button-text' }),
                        }),
                        (0, h.jsx)(ck.j, {}),
                    ],
                });
            });
            var cY = a(1500);
            let cH = (0, y.PA)((e) => {
                let { onButtonClick: t } = e,
                    { formatMessage: a } = (0, H.A)();
                return (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsx)(cS.t, {}),
                        (0, h.jsx)(cM, { title: a({ id: 'multivibe.invite-modal-draft-title' }), description: a({ id: 'multivibe.invite-modal-draft-description' }) }),
                        (0, h.jsx)(cY.m, { onButtonClick: t }),
                        (0, h.jsx)(ck.j, {}),
                    ],
                });
            });
            var cq = a(8962);
            let cQ = (0, y.PA)((e) => {
                    var t, a;
                    let { children: i } = e,
                        { multivibe: l, vibe: n } = (0, T.g)(),
                        { invitationRoom: r, inviteModal: s, isGetRoomByIdLoading: o } = l,
                        c = (0, cg.l)({ mainObjectType: C.DomainObjectType.NonApplicable });
                    (0, g.useEffect)(() => {
                        if (s.isOpened)
                            return (
                                c(!0),
                                () => {
                                    c(!1);
                                }
                            );
                    }, [c, s.isOpened]);
                    let d = ((e) => {
                        var t, a;
                        let { sonataState: i, vibe: l } = (0, T.g)();
                        return i.isVibeContext && (0, cq._)(null != (a = null == (t = l.meta) ? void 0 : t.seeds) ? a : [], e) && i.isPlaying;
                    })(null != (a = null == r || null == (t = r.wave) ? void 0 : t.seeds) ? a : []);
                    return ((0, g.useEffect)(() => {
                        d && s.close();
                    }, [d, s]),
                    o || n.isApplying || d)
                        ? (0, h.jsx)('div', { className: cV().spinnerWrapper, children: (0, h.jsx)(t2.y, { size: 'xl' }) })
                        : i;
                }),
                c$ = (0, y.PA)(() => {
                    var e, t;
                    let { multivibe: a, user: i } = (0, T.g)(),
                        { inviteModal: l, invitationRoom: n } = a,
                        r = l.close,
                        s = null != (t = null == n || null == (e = n.wave) ? void 0 : e.seedsId) ? t : '',
                        { blockType: o, content: c } = (0, tN.L)(() => {
                            var e, t;
                            if (!n) return { blockType: C.EntityTypes.MultivibeInvalidInvitation, content: (0, h.jsx)(cD, { onLinkCreateSuccess: r }) };
                            let { isDraft: a, isDisabled: l, isEnabled: s, owner: o, members: c } = n,
                                d = o.uid && o.uid === i.puid,
                                u = c[0],
                                _ = o.isActive ? o : u,
                                m = (null == _ ? void 0 : _.uid) && _.uid === i.puid,
                                p = null != (t = null == (e = n.wave) ? void 0 : e.seeds) ? t : [];
                            return s
                                ? { blockType: C.EntityTypes.MultivibeAlreadyExists, content: (0, h.jsx)(cF, { seeds: p }) }
                                : a && d
                                  ? { blockType: C.EntityTypes.MultivibePendingInvitation, content: (0, h.jsx)(cH, { onButtonClick: r }) }
                                  : a && !d && o
                                    ? { blockType: C.EntityTypes.MultivibeAcceptingInvitation, content: (0, h.jsx)(cK, { room: n, member: o }) }
                                    : l && m
                                      ? { blockType: C.EntityTypes.MultivibeAlone, content: (0, h.jsx)(cP, { roomId: n.id, onClose: r }) }
                                      : l && !m && _
                                        ? { blockType: C.EntityTypes.MultivibeAcceptingInvitation, content: (0, h.jsx)(cK, { room: n, member: _ }) }
                                        : { blockType: C.EntityTypes.MultivibeInvalidInvitation, content: (0, h.jsx)(cD, { onLinkCreateSuccess: r }) };
                        });
                    return (0, h.jsx)(cw.n, {
                        pageId: tr._Q.MULTIVIBE_UNIFIED_SCREEN,
                        pageStyle: C.PageStyles.Sheet,
                        pagePlacement: C.PagePlacements.Bottom,
                        pageEntityId: '',
                        children: (0, h.jsx)(cT, {
                            modalModel: l,
                            children: (0, h.jsx)(sb.F, {
                                blockId: '',
                                blockType: o,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, h.jsx)(sA.B, {
                                    objectId: s,
                                    objectsCount: 0,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    objectType: C.DomainObjectType.Wave,
                                    children: (0, h.jsx)(cQ, { children: c }),
                                }),
                            }),
                        }),
                    });
                });
            var cG = a(45958),
                cZ = a.n(cG);
            let cX = (0, y.PA)(() => {
                let { multivibe: e } = (0, T.g)(),
                    { formatMessage: t } = (0, H.A)(),
                    { promoModal: a } = e,
                    i = (0, cg.l)({ mainObjectType: C.DomainObjectType.NonApplicable });
                return (
                    (0, g.useEffect)(() => {
                        if (a.isOpened)
                            return (
                                i(!0),
                                () => {
                                    i(!1);
                                }
                            );
                    }, [a.isOpened, i]),
                    (0, h.jsxs)(cT, {
                        modalModel: a,
                        children: [
                            (0, h.jsx)(cS.t, {
                                src: 'avatars.mds.yandex.net/get-music-misc/28052/img.6a4e4cb644dcec5277bcec98/%%',
                                className: cZ().imageWrapper,
                                size: 400,
                                withTopSpace: !1,
                            }),
                            (0, h.jsx)(cM, {
                                title: t({ id: 'multivibe.promo-modal-title' }),
                                description: t({ id: 'multivibe.promo-modal-description' }),
                                withSubtitle: !0,
                            }),
                            (0, h.jsx)(cR.M, { isBlock: !0, title: t({ id: 'interface-actions.copy-link' }), onSuccess: a.close }),
                            (0, h.jsx)(ck.j, {}),
                        ],
                    })
                );
            });
            var cJ = a(40617),
                c0 = a(21944),
                c1 = a(71594);
            let c2 = (e, t) => (c1.s.test(e) ? e : 0 === e.trim().length ? ''.concat(t, 'px') : ''.concat(Math.max(Number(e), t), 'px'));
            var c4 = a(639),
                c8 = a.n(c4);
            let c3 = (e) => {
                let { closeToast: t } = e;
                return (0, h.jsx)(nt.$, {
                    closeToast: t,
                    cover: (0, h.jsx)($.I, { className: c8().icon, size: 'xs', variant: 'chain' }),
                    message: (0, h.jsx)(ec.HL, {
                        className: c8().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, h.jsx)(eX.A, { id: 'notifications-info.html-code-copied' }),
                    }),
                    coverRadius: 's',
                });
            };
            var c5 = a(19051),
                c6 = a.n(c5);
            let c9 = (0, y.PA)((e) => {
                let { entity: t } = e,
                    { formatMessage: a } = (0, H.A)(),
                    { language: i } = (0, tP.h)(),
                    { notify: l } = (0, es.l)(),
                    { fullscreenPlayer: n } = (0, T.g)();
                (0, g.useEffect)(() => {
                    t.setListenMessage((e) => a({ id: 'share.iframe-listen' }, { html: e }));
                }, [t, a]);
                let r = (0, A.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        t.setWidth(a);
                    }),
                    s = (0, A.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        !c1.s.test(a) && (0 === a.length || Number.isNaN(Number(a)) || Number(a) < c0.JQ) && t.setWidth(String(c0.JQ));
                    }),
                    o = (0, A.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        t.setHeight(a);
                    }),
                    c = (0, A.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        !c1.s.test(a) && (0 === a.length || Number.isNaN(Number(a)) || Number(a) < c0.IR) && t.setHeight(String(c0.IR));
                    }),
                    d = { width: c2(t.width, c0.JQ), height: c2(t.height, c0.IR) },
                    u = t.iframeUri.replace(c0.bL, i),
                    _ = t.iframeCode.replace(c0.bL, i),
                    m = (0, A.c)(async () => {
                        (await window.navigator.clipboard.writeText(_), l((0, h.jsx)(c3, {}), { containerId: n.modal.isOpened ? er.u.FULLSCREEN_INFO : er.u.INFO }));
                    });
                return (0, h.jsxs)('div', {
                    className: c6().root,
                    'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR,
                    children: [
                        (0, h.jsxs)('form', {
                            className: c6().controls,
                            children: [
                                (0, h.jsxs)('div', {
                                    className: c6().settings,
                                    children: [
                                        (0, h.jsx)(cJ.p, {
                                            containerClassName: c6().sizeInputContainer,
                                            size: 'xxxs',
                                            value: t.width,
                                            variant: 'secondary',
                                            pattern: '^\\d+(px|%)?$',
                                            min: c0.JQ,
                                            required: !0,
                                            onChange: r,
                                            onBlur: s,
                                            'aria-label': a({ id: 'share.iframe-editor-width' }),
                                            'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR_WIDTH_INPUT,
                                        }),
                                        (0, h.jsx)($.I, { size: 'xs', variant: 'close' }),
                                        (0, h.jsx)(cJ.p, {
                                            containerClassName: c6().sizeInputContainer,
                                            size: 'xxxs',
                                            value: t.height,
                                            pattern: '^\\d+(px|%)?$',
                                            variant: 'secondary',
                                            min: c0.IR,
                                            required: !0,
                                            onChange: o,
                                            onBlur: c,
                                            'aria-label': a({ id: 'share.iframe-editor-height' }),
                                            'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR_HEIGHT_INPUT,
                                        }),
                                    ],
                                }),
                                (0, h.jsx)(cJ.p, {
                                    inputClassName: c6().iframeCodeInput,
                                    containerClassName: c6().iframeCodeInputContainer,
                                    type: 'text',
                                    size: 'xxxs',
                                    variant: 'secondary',
                                    value: _,
                                    required: !0,
                                    readOnly: !0,
                                    'aria-label': a({ id: 'share.iframe-editor-code' }),
                                    'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR_CODE_INPUT,
                                }),
                                (0, h.jsx)(Q.$, {
                                    color: 'primary',
                                    className: c6().copyButton,
                                    size: 'l',
                                    radius: 'xxxl',
                                    onClick: m,
                                    'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR_COPY_BUTTON,
                                    children: (0, h.jsx)(ec.HL, {
                                        type: 'text',
                                        variant: 'div',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        children: (0, h.jsx)(eX.A, { id: 'share.iframe-copy' }),
                                    }),
                                }),
                            ],
                        }),
                        (0, h.jsx)('div', {
                            className: c6().iframeContainer,
                            style: d,
                            'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR_PREVIEW,
                            children: (0, h.jsx)('iframe', { className: c6().iframe, src: u, title: a({ id: 'share.iframe-editor-preview' }) }),
                        }),
                    ],
                });
            });
            var c7 = a(81472),
                de = a.n(c7);
            let dt = (0, y.PA)(() => {
                let {
                        shareIframe: e,
                        settings: { isMobile: t },
                    } = (0, T.g)(),
                    { formatMessage: a } = (0, H.A)();
                return e.entity
                    ? (0, h.jsx)(f.a, {
                          className: de().root,
                          contentClassName: de().content,
                          open: e.modal.isOpened,
                          onOpenChange: e.modal.onOpenChange,
                          placement: t ? 'default' : 'center',
                          size: 'fitContent',
                          title: a({ id: 'share.iframe-modal-title' }),
                          labelClose: a({ id: 'interface-actions.close' }),
                          onClose: e.closeModal,
                          overlayColor: 'full',
                          'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_MODAL,
                          closeButtonDataTestId: q.Kq.shareIframe.SHARE_IFRAME_MODAL_CLOSE_BUTTON,
                          children: (0, h.jsx)(c9, { entity: e.entity }),
                      })
                    : null;
            });
            var da = a(87587),
                di = a.n(da),
                dl = a(79390),
                dn = a(23192),
                dr = a(1401),
                ds = a(45347),
                dc = a(25555),
                dd = a(81438),
                du = a(48627),
                d_ = a.n(du);
            let dm = (0, y.PA)(() => {
                    let { lumen: e } = (0, T.g)(),
                        { cover: t, fallbackImage: a } = (0, dd.x)(),
                        i = e.isEnabled ? t : a;
                    return (
                        (0, g.useEffect)(() => {
                            e.isEnabled && !e.themes && e.getData();
                        }, [e]),
                        (0, h.jsxs)(h.Fragment, {
                            children: [
                                (0, h.jsx)(tV._V, {
                                    alt: '',
                                    className: (0, eO.$)(d_().image, d_().image_blurred),
                                    src: i,
                                    fit: 'cover',
                                    draggable: !1,
                                    withAvatarReplace: !0,
                                    withFallback: !1,
                                    withLoadingIndicator: !1,
                                }),
                                (0, h.jsx)(tV._V, {
                                    alt: '',
                                    className: d_().image,
                                    src: i,
                                    fit: 'cover',
                                    draggable: !1,
                                    withAvatarReplace: !0,
                                    withFallback: !1,
                                    withLoadingIndicator: !1,
                                }),
                            ],
                        })
                    );
                }),
                dp = (0, y.PA)((e) => {
                    let { vibe: t } = e,
                        { formatMessage: a } = (0, H.A)(),
                        {
                            user: i,
                            freeAccess: l,
                            paywall: n,
                            slam: r,
                            sharedVibe: s,
                            vibe: o,
                            settings: { isMobile: c },
                        } = (0, T.g)(),
                        { notify: d } = (0, es.l)(),
                        { togglePlay: u } = (0, cB.B)({ seeds: t.seeds }),
                        { solidColor: _ } = (0, dd.x)(),
                        m = (0, tN.L)(() => (t.isQ2V ? (0, h.jsx)(dm, {}) : t.agent ? (0, h.jsx)(ds.s, { agent: t.agent, className: di().agentView }) : null)),
                        p = (0, A.c)(async () => {
                            if (i.isAuthorized && !o.isApplying) {
                                if (l.isVibeStartRestricted) return void n.openModal();
                                (await u(), s.vibe === t && s.modal.close());
                            }
                        }),
                        v = (0, dc.I)({
                            action: async () =>
                                !!t.isLikeEnabled &&
                                (!!t.isLiked || (!r.networkStatus.isOffline && !r.isOfflineModeEnabled && (await t.toggleLike()) === dl.f.OK)) &&
                                (s.vibe === t && s.modal.close(), c && d((0, h.jsx)(dr.T, { vibe: t }), { containerId: er.u.INFO }), !0),
                            notification: (0, h.jsx)(dr.T, { vibe: t }),
                        }),
                        x = (0, tN.L)(() => {
                            var e;
                            return t.isQ2V ? { '--glow-color': _ || dn.R } : { '--glow-color': (null == (e = t.agent) ? void 0 : e.cover.color) || void 0 };
                        });
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            m && (0, h.jsx)('div', { className: di().agent, style: x, 'data-test-id': q.Kq.sharedVibe.SHARED_VIBE_MODAL_AGENT, children: m }),
                            (0, h.jsxs)('div', {
                                className: di().text,
                                children: [
                                    (0, h.jsx)(ec.DZ, {
                                        variant: 'h1',
                                        size: 'l',
                                        weight: 'bold',
                                        'data-test-id': q.Kq.sharedVibe.SHARED_VIBE_MODAL_TITLE,
                                        children: t.title,
                                    }),
                                    (0, h.jsx)(ec.HL, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'medium',
                                        'data-test-id': q.Kq.sharedVibe.SHARED_VIBE_MODAL_DESCRIPTION,
                                        children: a({ id: 'shared-vibe.modal-description' }),
                                    }),
                                ],
                            }),
                            (0, h.jsxs)('div', {
                                className: di().actions,
                                children: [
                                    (0, h.jsx)(Q.$, {
                                        color: 'primary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        isBlock: !0,
                                        disabled: !i.isAuthorized || o.isApplying,
                                        onClick: p,
                                        'data-test-id': q.Kq.sharedVibe.SHARED_VIBE_LISTEN_BUTTON,
                                        children: a({ id: 'player-actions.listen' }),
                                    }),
                                    (0, h.jsx)(Q.$, {
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        isBlock: !0,
                                        disabled: !i.isAuthorized || !t.isLikeEnabled,
                                        onClick: v,
                                        'data-test-id': q.Kq.sharedVibe.SHARED_VIBE_ADD_COLLECTION_BUTTON,
                                        children: a({ id: 'interface-actions.add-to-collection' }),
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                dv = (0, y.PA)(() => {
                    let { sharedVibe: e } = (0, T.g)();
                    return e.vibe
                        ? (0, h.jsx)(cf, {
                              className: di().root,
                              contentClassName: di().content,
                              headerClassName: di().header,
                              modalModel: e.modal,
                              ariaLabel: e.vibe.title,
                              closeButtonDataTestId: q.Kq.sharedVibe.SHARED_VIBE_MODAL_CLOSE_BUTTON,
                              'data-test-id': q.Kq.sharedVibe.SHARED_VIBE_MODAL,
                              children: (0, h.jsx)(dp, { vibe: e.vibe }),
                          })
                        : null;
                });
            var dx = a(58660),
                dh = a.n(dx);
            let dy = (e) => {
                    let t = e.value.trim().length;
                    return ('number' == typeof e.minLength && !!(t < e.minLength)) || ('number' == typeof e.maxLength && !!(t > e.maxLength));
                },
                dC = (0, y.PA)((e) => {
                    let { open: t, title: a, content: i, onClose: l, onChange: n } = e,
                        {
                            settings: { isMobile: r },
                        } = (0, T.g)(),
                        { formatMessage: s } = (0, H.A)(),
                        [o, c] = (0, g.useState)(i),
                        [d, u] = (0, g.useState)(!1),
                        _ = (0, g.useCallback)(
                            (e) => (t) => {
                                let a = t.target.value,
                                    i = o.find((t) => t.key === e);
                                (i && (i.value = a), c([...o]), u(!1));
                            },
                            [o],
                        ),
                        m = (0, g.useCallback)(
                            (e) => {
                                e || l();
                            },
                            [l],
                        ),
                        p = (0, g.useCallback)(() => {
                            if (o.some(dy)) return void u(!0);
                            n(o);
                        }, [n, o]),
                        v = (0, g.useMemo)(
                            () =>
                                o.map((e) => {
                                    let t = _(e.key),
                                        a = d && dy(e);
                                    return (0, h.jsxs)(
                                        'div',
                                        {
                                            className: dh().field,
                                            children: [
                                                (0, h.jsx)(ec.HL, { variant: 'div', size: 'm', className: dh().label, children: e.title }),
                                                (0, h.jsx)(cJ.p, {
                                                    value: e.value,
                                                    containerClassName: (0, eO.$)(dh().input, { [dh().input_error]: a }),
                                                    placeholder: e.title,
                                                    onChange: t,
                                                    minLength: e.minLength,
                                                    maxLength: e.maxLength,
                                                    'data-test-id': q.e8.ugc.UGC_EDIT_MODAL_FIELD_INPUT,
                                                }),
                                            ],
                                        },
                                        e.key,
                                    );
                                }),
                            [_, d, o],
                        );
                    return (0, h.jsxs)(f.a, {
                        size: 'fitContent',
                        placement: r ? 'default' : 'center',
                        open: t,
                        onOpenChange: m,
                        className: dh().root,
                        contentClassName: dh().modalContent,
                        showHeader: !1,
                        closeOnOutsidePress: !1,
                        isMobile: r,
                        'data-test-id': q.e8.ugc.UGC_EDIT_MODAL,
                        overlayColor: 'full',
                        children: [
                            (0, h.jsxs)('div', {
                                className: dh().header,
                                children: [
                                    (0, h.jsx)(ec.DZ, { variant: 'h4', size: 'm', weight: 'bold', className: dh().title, children: a }),
                                    (0, h.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, h.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                        onClick: l,
                                        'aria-label': s({ id: 'ugc.close-edit-popup' }),
                                        'data-test-id': q.e8.ugc.UGC_EDIT_MODAL_CLOSE_BUTTON,
                                    }),
                                ],
                            }),
                            (0, h.jsxs)('div', {
                                className: dh().content,
                                children: [
                                    v,
                                    (0, h.jsxs)('div', {
                                        className: dh().buttons,
                                        children: [
                                            (0, h.jsx)(Q.$, {
                                                radius: 'xxxl',
                                                color: 'secondary',
                                                size: r ? 'l' : 'm',
                                                className: dh().button,
                                                onClick: l,
                                                'data-test-id': q.e8.ugc.UGC_EDIT_MODAL_CANCEL_BUTTON,
                                                children: (0, h.jsx)(eX.A, { id: 'interface-actions.cancel' }),
                                            }),
                                            (0, h.jsx)(Q.$, {
                                                radius: 'xxxl',
                                                color: 'primary',
                                                size: r ? 'l' : 'm',
                                                className: dh().button,
                                                onClick: p,
                                                children: (0, h.jsx)(eX.A, { id: 'interface-actions.save' }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var dg = (function (e) {
                return ((e.TITLE = 'title'), (e.ARTIST = 'artist'), e);
            })({});
            let db = (0, y.PA)(() => {
                let {
                        modals: { ugcTrackEditModal: e },
                        fullscreenPlayer: t,
                    } = (0, T.g)(),
                    { notify: a } = (0, es.l)(),
                    { formatMessage: i } = (0, H.A)(),
                    l = (0, g.useMemo)(
                        () => [
                            { key: dg.TITLE, title: i({ id: 'track-modal.track-name' }), value: e.trackTitle, minLength: 1, maxLength: 200 },
                            { key: dg.ARTIST, title: i({ id: 'entity-names.singer' }), value: e.trackArtist, minLength: 0, maxLength: 200 },
                        ],
                        [i, e.trackArtist, e.trackTitle],
                    ),
                    n = (0, A.c)(async (l) => {
                        let { title: n, artist: r } = ((e) => {
                            var t, a;
                            let i = null == (t = e.find((e) => e.key === dg.TITLE)) ? void 0 : t.value,
                                l = null == (a = e.find((e) => e.key === dg.ARTIST)) ? void 0 : a.value;
                            return { title: (i = i ? i.trim() : ''), artist: (l = l ? l.trim() : '') };
                        })(l);
                        (e.track &&
                            (await e.track.changeTrackInfo(n, r)) === cz.F.ERROR &&
                            a((0, h.jsx)(eo.h, { error: i({ id: 'ugc.editing-failed' }) }), { containerId: t.modal.isOpened ? er.u.FULLSCREEN_ERROR : er.u.ERROR }),
                            e.close());
                    });
                return e.modal.isOpened
                    ? (0, h.jsx)(dC, { open: e.modal.isOpened, title: i({ id: 'entity-names.track' }), content: l, onClose: e.close, onChange: n })
                    : null;
            });
            var dA = a(38501);
            let df = null,
                dj = [],
                dT = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === df)
                        return void dj.push((e) => {
                            e.add(...t);
                        });
                    df.add(...t);
                },
                dN = 'google-adwords',
                dI = '10983745785',
                dk = [aW.KZ, aW.UZ, aW.KG, aW.AZ, aW.AM, aW.GE, aW.TR];
            var dS = a(11899),
                dL = a(74591),
                dE = a(46474),
                dM = a(23703);
            let dP = null,
                dO = (0, y.PA)((e) => {
                    let {
                            className: t,
                            target: a,
                            silent: i,
                            serviceSessionId: l,
                            tariffOfferName: n,
                            offersBatchId: r,
                            offersPositionIds: s,
                            onLoad: o,
                            onSuccess: c,
                            onError: d,
                            onClose: u,
                        } = e,
                        _ = (0, g.useRef)(null),
                        { theme: m } = (0, tw.W)(),
                        { pwTools: p } = (0, dM.q)(),
                        v = (() => {
                            let { albumCPA: e } = (0, T.g)(),
                                { getClidFromQuery: t, checkIsValidClid: a } = (0, dE.I)();
                            return (0, g.useCallback)(async () => {
                                let i = t();
                                if (!i || !e.albumId) return;
                                let { parsedClid: l, queryClid: n } = i;
                                if ((l && (await e.getCpa({ albumId: l.albumId })), a(e.cpa, e.albumId))) return n;
                            }, [e, t, a]);
                        })(),
                        x = (0, A.c)((e) => {
                            'purchase_data' === e.type && (null == c || c());
                        }),
                        y = (0, A.c)(() => {
                            null == d || d();
                        }),
                        C = (0, A.c)(() => {
                            null == u || u();
                        }),
                        b = (0, A.c)((e) => {
                            'loaded' === e.data.status && (null == o || o());
                        }),
                        f = (0, g.useCallback)(async () => {
                            if (!p || !_.current) return;
                            let { lang: e, mode: t, platform: o, widgetServiceName: c, authMethod: d } = p.options;
                            if (!dP)
                                try {
                                    dP = await p.loadManager();
                                } catch (e) {
                                    C();
                                    return;
                                }
                            dP.send({
                                type: 'init',
                                options: {
                                    lang: e,
                                    mode: t,
                                    platform: o,
                                    widgetServiceName: c,
                                    authMethod: d,
                                    silent: i,
                                    usePlusHost: !0,
                                    theme: m,
                                    onSuccess: x,
                                    onError: y,
                                    onReport: b,
                                    onClose: C,
                                },
                            });
                            let u = {
                                    target: a,
                                    eventSessionId: l,
                                    tariffOfferName: n,
                                    offersBatchId: r,
                                    offersPositionIds: s,
                                    targetNode: _.current,
                                    isTarifficator: !0,
                                },
                                h = await v();
                            (null !== h && (u.clid = h), dP.send({ type: 'open', options: u }));
                        }, [m, p, a, i, n, l, r, s, x, y, b, C, v]);
                    return (
                        (0, g.useEffect)(
                            () => (
                                f(),
                                () => {
                                    null == dP || dP.send({ type: 'close' });
                                }
                            ),
                            [f],
                        ),
                        (0, h.jsx)('div', { className: t, ref: _ })
                    );
                });
            var dw = a(98876),
                dR = a.n(dw);
            let dD = (0, y.PA)(() => {
                let { paymentWidgetModal: e, advert: t } = (0, T.g)(),
                    a = (0, J.N)().get(X.vg),
                    { state: i, toggleTrue: l } = (0, eb.e)(!1),
                    n = (() => {
                        let { user: e } = (0, T.g)(),
                            { add: t } = (() => {
                                let [e, t] = (0, g.useState)(null !== df);
                                return {
                                    init: (0, g.useCallback)(() => {
                                        var a, i;
                                        void 0 === (null == (a = window) ? void 0 : a.Ya.yanalytics) ||
                                            e ||
                                            ((df = window.Ya.yanalytics),
                                            t(!0),
                                            (i = df),
                                            dj.forEach((e) => {
                                                e(i);
                                            }),
                                            (dj = []));
                                    }, [e]),
                                    add: dT,
                                };
                            })(),
                            [a, i] = (0, g.useState)(!1);
                        return (
                            (0, g.useEffect)(() => {
                                void 0 !== e.account.data.geoRegionIso &&
                                    dk.includes(e.account.data.geoRegionIso) &&
                                    (t({ alias: dN, action: 'init', params: { provider: 'google-adwords', id: 'AW-'.concat(dI) } }), i(!0));
                            }, [e.account.data.geoRegionIso, t]),
                            {
                                track: (0, g.useCallback)(
                                    (e) => {
                                        a && t({ alias: dN, action: 'track', params: { id: dI, ...e } });
                                    },
                                    [a, t],
                                ),
                            }
                        );
                    })();
                (0, g.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                );
                let r = (0, g.useCallback)(() => {
                        (e.setStatus(dL.c.SUCCESS), n.track({ label: dS.em }), a.reachGoal(dS.l8));
                    }, [e, n, a]),
                    s = (0, g.useCallback)(() => {
                        (e.onModalOpenChange(!1), e.reset());
                    }, [e]),
                    o = (0, g.useCallback)(() => {
                        e.setStatus(dL.c.ERROR);
                    }, [e]);
                return (0, h.jsx)(f.a, {
                    open: e.modal.isOpened,
                    size: 'fitContent',
                    placement: 'center',
                    showHeader: !1,
                    withAnimation: !1,
                    className: (0, eO.$)(dR().root, { [dR().root_loaded]: i, [dR().root_level_up]: t.isAdvertShown }),
                    'data-test-id': q.OA.paymentWidget.PAYMENT_WIDGET,
                    contentClassName: dR().content,
                    overlayColor: 'full',
                    onOpenChange: e.onModalOpenChange,
                    children: (0, h.jsx)(dO, {
                        className: dR().widget,
                        target: e.target,
                        silent: e.isSilent,
                        serviceSessionId: e.serviceSessionId,
                        tariffOfferName: e.tariffOfferName,
                        offersBatchId: e.offersBatchId,
                        offersPositionIds: e.offersPositionIds,
                        onLoad: l,
                        onSuccess: r,
                        onError: o,
                        onClose: s,
                    }),
                });
            });
            var dB = a(19998),
                dF = a(4826),
                dU = a.n(dF);
            let dz = (0, y.PA)(() => {
                    let {
                        disclaimerModalState: e,
                        modals: { disclaimerModal: t },
                    } = (0, T.g)();
                    return (0, h.jsx)(f.a, {
                        size: 'fitContent',
                        placement: 'center',
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        showHeader: !1,
                        className: dU().root,
                        contentClassName: dU().content,
                        overlayClassName: dU().overlay,
                        overlayColor: 'full',
                        'data-test-id': q.OA.disclaimer.DISCLAIMER_MODAL,
                        closeOnOutsidePress: e.shouldCloseModalOnOutsidePress,
                        escapeKey: e.shouldCloseModalOnEscape,
                        children: (0, h.jsx)(dB.M, { modalState: e, onClose: t.close }),
                    });
                }),
                dW = (0, y.PA)(() => {
                    var e;
                    let { communication: t, experiments: a, user: i, multivibe: l } = (0, T.g)(),
                        n = (0, dA.d)(),
                        r = a.checkExperiment(N.z.WebNextArtistInfo, 'on'),
                        { isEnabled: s, disabledRoomId: o } = l,
                        c = s && i.hasPlus,
                        d = a.checkExperiment(N.z.WebNextWaveLikesAndShares, 'on') && i.hasPlus;
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            (null == (e = t.list) ? void 0 : e.modal) && (0, h.jsx)(cx, { modal: t.list.modal }),
                            (0, h.jsx)(cw.n, { pageId: tr._Q.PLAYER, children: (0, h.jsx)(sd, {}) }),
                            n && (0, h.jsx)(cw.n, { pageId: tr._Q.VIDEO_PLAYER, children: (0, h.jsx)(o$, {}) }),
                            (0, h.jsx)(dz, {}),
                            (0, h.jsx)(cw.n, { pageId: tr._Q.TRAILER, children: (0, h.jsx)(oa, {}) }),
                            n && (0, h.jsx)(tj, {}),
                            (0, h.jsx)(tM, {}),
                            (0, h.jsx)(tB, {}),
                            r && (0, h.jsx)(cd, {}),
                            !i.hasPlus && (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(l5, {}), (0, h.jsx)(al, {})] }),
                            !i.hasPlus && (0, h.jsx)(aD, {}),
                            (0, h.jsx)(dt, {}),
                            (0, h.jsx)(tz, {}),
                            (0, h.jsx)(ty, {}),
                            (0, h.jsx)(dD, {}),
                            (0, h.jsx)(db, {}),
                            (0, h.jsx)(am, {}),
                            (0, h.jsx)(cC, {}),
                            d && (0, h.jsx)(dv, {}),
                            c &&
                                (0, h.jsxs)(h.Fragment, {
                                    children: [
                                        (0, h.jsx)(cw.n, {
                                            pageId: tr._Q.MULTIVIBE_SENDING_INVITATION_SCREEN,
                                            pageStyle: C.PageStyles.Sheet,
                                            pagePlacement: C.PagePlacements.Bottom,
                                            pageEntityId: '',
                                            children: (0, h.jsx)(sb.F, { blockId: '', blockType: '', blockPosX: 1, blockPosY: 1, children: (0, h.jsx)(cX, {}) }),
                                        }),
                                        (0, h.jsx)(c$, {}),
                                        o &&
                                            (0, h.jsx)(cw.n, {
                                                pageId: tr._Q.MULTIVIBE_UNIFIED_SCREEN,
                                                pageStyle: C.PageStyles.Sheet,
                                                pagePlacement: C.PagePlacements.Bottom,
                                                pageEntityId: '',
                                                children: (0, h.jsx)(sb.F, {
                                                    blockId: '',
                                                    blockType: '',
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    children: (0, h.jsx)(cO, { roomId: o }),
                                                }),
                                            }),
                                    ],
                                }),
                        ],
                    });
                });
        },
        97826: (e, t, a) => {
            'use strict';
            function i(e, t) {
                return e.map((e) => 'https://'.concat(t, '/artist/').concat(e.id));
            }
            a.d(t, { x: () => i });
        },
        98876: (e) => {
            e.exports = {
                root: 'PaymentWidgetModal_root__I6Hrp',
                root_loaded: 'PaymentWidgetModal_root_loaded__Rzltj',
                root_level_up: 'PaymentWidgetModal_root_level_up__pj52G',
                content: 'PaymentWidgetModal_content__ifRry',
                widget: 'PaymentWidgetModal_widget__cu_gr',
            };
        },
        99313: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.VARIOUS_CLIP_CONTEXT = 'various-clip-context'), e);
            })({});
        },
        99344: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => l });
            var i = a(18593);
            function l(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Playlist;
            }
        },
        99479: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => p });
            var i = a(88800),
                l = a(65724),
                n = a(84961),
                r = a(17392),
                s = a(21416),
                o = a(29504),
                c = a(72288),
                d = a(16704),
                u = a(34945),
                _ = a(45873),
                m = a.n(_);
            let p = (0, n.PA)((e) => {
                let { className: t, track: a, position: n, onPlayButtonClick: _, isPlaying: p, isCurrent: v, withDislikeStyles: x = !0, isLoading: h } = e,
                    {
                        settings: { isMobile: y },
                    } = (0, c.g)();
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(t, m().root, {
                        [m().root_disabled]: !a.isAvailable && !a.hasModalAccess,
                        [m().root_playing]: p,
                        [m().root_disliked]: a.isDisliked && x,
                        [m().root_current]: v,
                    }),
                    children: [
                        (a.isAvailable || a.hasModalAccess) &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    !h && (0, i.jsx)(u.P, { stopAnimation: !p, className: m().playingAnimation }),
                                    h && y && (0, i.jsx)(s.y, { size: 'xs', className: m().spinner }),
                                    !y &&
                                        (0, i.jsx)(d.D, {
                                            variant: 'filled',
                                            className: m().playButton,
                                            iconClassName: m().playButtonIcon,
                                            isPlaying: p,
                                            onClick: _,
                                            iconSize: 'xs',
                                        }),
                                ],
                            }),
                        n &&
                            (0, i.jsx)(o.HL, {
                                variant: 'div',
                                className: m().position,
                                weight: 'normal',
                                type: 'entity',
                                size: 'm',
                                'data-test-id': r.Kq.track.TRACK_POSITION,
                                children: n,
                            }),
                    ],
                });
            });
        },
        99839: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
    },
]);
