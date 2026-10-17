(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2850],
    {
        220: (e) => {
            e.exports = {
                root: 'WordsCard_root__6r3u2',
                root_disabled: 'WordsCard_root_disabled__Kgxb_',
                badge: 'WordsCard_badge__Y5HRe',
                badge_centered: 'WordsCard_badge_centered__7GMKP',
                badge_centeredSparkles: 'WordsCard_badge_centeredSparkles__sebgi',
                badge_loading: 'WordsCard_badge_loading__pDoTb',
                pulse: 'WordsCard_pulse__sKXAl',
                content: 'WordsCard_content__AUDsR',
                content_hidden: 'WordsCard_content_hidden__WhUsT',
                text: 'WordsCard_text__ZquMQ',
                appear: 'WordsCard_appear__AISMP',
                lumenAvatar: 'WordsCard_lumenAvatar__ifelA',
                action: 'WordsCard_action__v4Jp1',
                popoverContent: 'WordsCard_popoverContent__NHYuc',
            };
        },
        761: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => n });
            var a = i(98436);
            let n = (e) => ''.concat(a._.ARTIST_ITEM).concat(e);
        },
        1439: (e) => {
            e.exports = { root: 'SpeedMenuItem_root__7j8VN', icon: 'SpeedMenuItem_icon__EyXPA' };
        },
        6968: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => p });
            var a = i(25839),
                n = i(82298),
                r = i(28631),
                s = i(74631);
            let o = (e) => {
                    let { style: t, forwardRef: i, context: n, ...r } = e,
                        s = (null == n ? void 0 : n.listAriaLabel) || void 0,
                        o = (null == n ? void 0 : n.listRole) || 'region';
                    return (0, a.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': s, style: { ...t }, ref: i, ...r });
                },
                l = (0, s.forwardRef)((e, t) => (0, a.jsx)(o, { forwardRef: t, ...e }));
            var d = i(45300),
                c = i.n(d);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: r, withHeader: s, withForceScroll: o, ...l } = e;
                    return (0, a.jsx)('div', {
                        className: (0, n.$)(c().scroller, { [c().scroller_withFooter]: r, [c().scroller_withHeader]: s, [c().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: i,
                        ...l,
                        tabIndex: -1,
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
            var m = i(10508),
                b = i(63257);
            let v = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: n,
                            debounceDurationInMs: r = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...u
                        } = e,
                        [_, v] = (0, s.useState)(null),
                        p = (0, s.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == n || n(e), l.length > 0 && v(e), t && i)) {
                                        let a = Math.floor(e.endIndex / t) + 1,
                                            n = Math.floor(e.startIndex / t);
                                        for (let e = n; e < a; e++) i(e);
                                    }
                                }, r),
                            [r, n, t, i, l],
                        );
                    (0, s.useEffect)(() => {
                        l.length > 0 && _ && p(_);
                    }, l);
                    let h = (0, s.useMemo)(() => {
                        if (d)
                            return (0, m.A)((e) => {
                                d(e);
                            }, r);
                    }, [d, r]);
                    return (0, a.jsx)(b.sN, { ref: c, rangeChanged: p, totalCount: o, endReached: h, ...u });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: d,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: b,
                            overscan: p = 700,
                            pageSize: h = 20,
                            totalCount: g,
                            totalRequests: x,
                            debounceDurationInMs: f,
                            initialItemCount: A,
                            minInitialItemCount: y = 20,
                            handleRef: C,
                            alwaysShowScrollbar: j = !1,
                            testId: N,
                            isMobileLayout: P = !1,
                            shouldTriggerRangeChangedOn: T,
                            ...k
                        } = e,
                        [S, w] = (0, s.useState)(!1),
                        I = (0, s.useMemo)(
                            () =>
                                (0, r.A)((e) => {
                                    w(e);
                                }, 100),
                            [],
                        ),
                        E = (0, s.useMemo)(() => {
                            var e, t;
                            return P
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : l,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : l,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, x, P]),
                        O = A ? Math.min(A, y) : void 0;
                    return (0, a.jsxs)('div', {
                        className: (0, n.$)(c().root, { [c().root_scrolling]: S || j, [c().root_notScrolling]: !S && !j }, t),
                        'data-test-id': N,
                        children: [
                            P && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, a.jsx)(v, {
                                overscan: p,
                                components: E,
                                listClassName: b,
                                itemClassName: u,
                                isScrolling: I,
                                itemContent: m,
                                scrollerRef: C,
                                totalCount: g,
                                pageSize: h,
                                onPageHandler: o,
                                onRangeHandler: d,
                                debounceDurationInMs: f,
                                initialItemCount: O,
                                shouldTriggerRangeChangedOn: T,
                                ...k,
                            }),
                            P && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        7904: (e) => {
            e.exports = {
                root: 'WordsCardFullscreen_root__CiG4W',
                modalContent: 'WordsCardFullscreen_modalContent__1SYUO',
                closeButtonWrapper: 'WordsCardFullscreen_closeButtonWrapper__iH_IT',
                layout: 'WordsCardFullscreen_layout__KJMiD',
                contentArea: 'WordsCardFullscreen_contentArea__CKea4',
                contentArea_withMessageScroll: 'WordsCardFullscreen_contentArea_withMessageScroll__td5cI',
                content: 'WordsCardFullscreen_content__JA2fN',
                messageScroll: 'WordsCardFullscreen_messageScroll__uUYjh',
                message: 'WordsCardFullscreen_message__UmEx9',
                messageScroll_scrollable: 'WordsCardFullscreen_messageScroll_scrollable__CfU_t',
                primaryAction: 'WordsCardFullscreen_primaryAction__HxPI9',
                actions: 'WordsCardFullscreen_actions__cT5Cp',
                sourceItem: 'WordsCardFullscreen_sourceItem__WL48h',
                sourceItem_withoutIcon: 'WordsCardFullscreen_sourceItem_withoutIcon__os6rv',
                sourceIcon: 'WordsCardFullscreen_sourceIcon__IDX9f',
                actionText: 'WordsCardFullscreen_actionText__09dJk',
                feedback: 'WordsCardFullscreen_feedback__E7bsR',
                feedbackButton: 'WordsCardFullscreen_feedbackButton__HwM10',
                feedbackButton_active: 'WordsCardFullscreen_feedbackButton_active__fE5dO',
                feedbackDivider: 'WordsCardFullscreen_feedbackDivider__xBnSf',
                disclaimer: 'WordsCardFullscreen_disclaimer__NTfeR',
            };
        },
        8807: (e) => {
            e.exports = {
                root: 'VibeContextButton_root__v5s9n',
                staticContext: 'VibeContextButton_staticContext__0CMKs',
                triggerContainer: 'VibeContextButton_triggerContainer__WpSRT',
                triggerContainer_hidden: 'VibeContextButton_triggerContainer_hidden___Ul2b',
                trigger: 'VibeContextButton_trigger___2s5g',
                label: 'VibeContextButton_label__4XZl3',
                arrow: 'VibeContextButton_arrow__p7g4L',
                arrow_open: 'VibeContextButton_arrow_open__hatJQ',
                resetButton: 'VibeContextButton_resetButton___AVuW',
                menu: 'VibeContextButton_menu__LBKK7',
                menuItem: 'VibeContextButton_menuItem__ZdYMs',
                menu_touch: 'VibeContextButton_menu_touch__Z_sBE',
                menuItemIcon: 'VibeContextButton_menuItemIcon__6KW3o',
            };
        },
        9106: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            let a = (e) => {
                var t, i, a, n, r, s;
                let o = null == (t = e.available) || t,
                    l = null != (i = e.disclaimers) ? i : [];
                return (
                    e.contentRestrictions &&
                        ((o = null == (r = null == (a = e.contentRestrictions) ? void 0 : a.available) || r),
                        (l = null != (s = null == (n = e.contentRestrictions) ? void 0 : n.disclaimers) ? s : [])),
                    { available: o, disclaimers: l }
                );
            };
        },
        9505: (e) => {
            e.exports = {
                root: 'VibePlayerControls_root__qr97B',
                skipButton: 'VibePlayerControls_skipButton__z57B_',
                playButtonIcon: 'VibePlayerControls_playButtonIcon__OXCWN',
                playButton: 'VibePlayerControls_playButton__vnoer',
                // for PulseSync: BEGIN yellow wave play button CSS class binding
                playButton_withYellowPlayButton: 'VibePlayerControls_withYellowPlayButton__vnoer',
                // for PulseSync: END yellow wave play button CSS class binding
                playButton_playing: 'VibePlayerControls_playButton_playing__qPeBv',
            };
        },
        9522: (e) => {
            e.exports = {
                root: 'VibePlayerBar_root__G3MOe',
                progress: 'VibePlayerBar_progress__Cri6E',
                progress_visible: 'VibePlayerBar_progress_visible__EfP1V',
                button: 'VibePlayerBar_button__GLhJ_',
                important: 'VibePlayerBar_important__XGV7k',
                ripple: 'VibePlayerBar_ripple__8YHn7',
                likeButton_mobilePaused: 'VibePlayerBar_likeButton_mobilePaused__ufI2D',
                changeVolume: 'VibePlayerBar_changeVolume__x7FHC',
                verticalSlider: 'VibePlayerBar_verticalSlider__JPDlB',
            };
        },
        12228: (e) => {
            e.exports = { root: 'ArtistsMenu_root__j5U2g', menuList: 'ArtistsMenu_menuList__4v6Uo', menuItem: 'ArtistsMenu_menuItem__lievm' };
        },
        17679: (e) => {
            e.exports = {
                root: 'AlbumCover_root__hkDPz',
                coverContainer: 'AlbumCover_coverContainer__NOd_o',
                link: 'AlbumCover_link__5qqFN',
                cover: 'AlbumCover_cover__bif8b',
                'fade-in': 'AlbumCover_fade-in__5kJy7',
                cover_generative: 'AlbumCover_cover_generative__5siVB',
                cover_hiddenOnCompactPause: 'AlbumCover_cover_hiddenOnCompactPause__2BQxY',
                button: 'AlbumCover_button__mX59n',
                ripple: 'AlbumCover_ripple__q41JO',
                playButtonContainer: 'AlbumCover_playButtonContainer__rC_Wa',
                playButtonIcon: 'AlbumCover_playButtonIcon__2b7_R',
                playButton: 'AlbumCover_playButton__N2FOS',
                playButton_playing: 'AlbumCover_playButton_playing__W9Uib',
            };
        },
        21300: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => n });
            var a = i(56829);
            let n = (e) => e === a._.PODCAST || e === a._.AUDIOBOOK || e === a._.FAIRY_TALE;
        },
        21993: (e) => {
            e.exports = {
                root: 'PromoButton_root__kDDyz',
                caption: 'PromoButton_caption__p6nwX',
                imageContainer: 'PromoButton_imageContainer__XIwZc',
                image: 'PromoButton_image__S8uoV',
            };
        },
        22097: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => r, q: () => n });
            let a = new Set(),
                n = (e) => (
                    a.add(e),
                    () => {
                        a.delete(e);
                    }
                ),
                r = () => {
                    a.forEach((e) => {
                        e();
                    });
                };
        },
        22435: (e) => {
            e.exports = { root: 'VibeArtistCover_root__LSPPQ', cover: 'VibeArtistCover_cover__AEtTV' };
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
        24004: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => r });
            var a = i(74631);
            i(93588);
            var n = i(22097);
            let r = (e) => {
                (0, a.useEffect)(() => (0, n.q)(e), [e]);
            };
        },
        24833: (e) => {
            e.exports = {
                root: 'VibePlayerbarMeta_root___dH5G',
                timecodeOverlay: 'VibePlayerbarMeta_timecodeOverlay__JhnCy',
                trackName: 'VibePlayerbarMeta_trackName__eyhTE',
                'fade-in': 'VibePlayerbarMeta_fade-in__rycjr',
                center: 'VibePlayerbarMeta_center__6kbMi',
                center_active: 'VibePlayerbarMeta_center_active__a1rFN',
                center_withTimecode: 'VibePlayerbarMeta_center_withTimecode__hoQVg',
                center_withExplicitMark: 'VibePlayerbarMeta_center_withExplicitMark__emag_',
                center_withExplicitMark_playing: 'VibePlayerbarMeta_center_withExplicitMark_playing__SCPvO',
                explicitMarkContainer: 'VibePlayerbarMeta_explicitMarkContainer__d0pfO',
                center_withoutExplicitMark: 'VibePlayerbarMeta_center_withoutExplicitMark__OrzGP',
                center_withoutExplicitMark_playing: 'VibePlayerbarMeta_center_withoutExplicitMark_playing__KnEhn',
                scrollingTrackName: 'VibePlayerbarMeta_scrollingTrackName__gl_Cl',
                trackNameText: 'VibePlayerbarMeta_trackNameText__9IgY2',
                artists: 'VibePlayerbarMeta_artists__2laQI',
                generativeTitle: 'VibePlayerbarMeta_generativeTitle__ksCD6',
                slider: 'VibePlayerbarMeta_slider__pyonb',
                slider_active: 'VibePlayerbarMeta_slider_active__H1uGz',
                explicitMark: 'VibePlayerbarMeta_explicitMark__G8dYl',
                generativeIcon: 'VibePlayerbarMeta_generativeIcon__Taac7',
            };
        },
        29733: (e) => {
            e.exports = {
                root: 'WordsBigCardPanelText_root__TU85D',
                root_withTopFade: 'WordsBigCardPanelText_root_withTopFade__2ngjw',
                root_withBottomFade: 'WordsBigCardPanelText_root_withBottomFade__OFuZ7',
            };
        },
        30295: (e) => {
            e.exports = { root: 'VibeDynamicArtists_root__Wbigy' };
        },
        31985: (e) => {
            e.exports = {
                root: 'VibePage_root__dGvPX',
                root_reshuffle: 'VibePage_root_reshuffle__gz97v',
                root_withoutPlus: 'VibePage_root_withoutPlus__xZ8r4',
                artistCover: 'VibePage_artistCover__RQee1',
                textContainer_withCover: 'VibePage_textContainer_withCover__U2z1l',
                freemiumBlock: 'VibePage_freemiumBlock__uhLoT',
                bigCardPanel: 'VibePage_bigCardPanel__RwmQ5',
                meta: 'VibePage_meta__kWwRE',
                context: 'VibePage_context__CoYut',
                meta_noPlus: 'VibePage_meta_noPlus__YtQX1',
                bigCardPanelBackground: 'VibePage_bigCardPanelBackground__fr_gE',
                bigCardPanelBackground_visible: 'VibePage_bigCardPanelBackground_visible__QbEy5',
                entityMeta: 'VibePage_entityMeta__dhDch',
                entityMetaBody: 'VibePage_entityMetaBody__EITDL',
                'meta-fade-in': 'VibePage_meta-fade-in__H0xeT',
                entityMetaBody_mobile: 'VibePage_entityMetaBody_mobile__xT3M1',
                entityMetaBody_hidden: 'VibePage_entityMetaBody_hidden__4_ZfY',
                vibeAnimation: 'VibePage_vibeAnimation__qQ6ci',
                bigCardPanel_opened: 'VibePage_bigCardPanel_opened__zs_Tl',
                textContainer: 'VibePage_textContainer__odK0M',
                context_mobile: 'VibePage_context_mobile__w0tfB',
                context_hidden: 'VibePage_context_hidden__8NtHL',
                text: 'VibePage_text__sPFhf',
                important: 'VibePage_important__qFvbL',
                button: 'VibePage_button__ZWQxy',
                player_hidden: 'VibePage_player_hidden__pPWGJ',
                player: 'VibePage_player__i4MeM',
                playerBlock: 'VibePage_playerBlock__b6ZRu',
                playerBlock_withFreemium: 'VibePage_playerBlock_withFreemium__8Avmc',
                playerBlock_shifted: 'VibePage_playerBlock_shifted__afwnY',
                albumCover: 'VibePage_albumCover__dHtVi',
                albumCover_hidden: 'VibePage_albumCover_hidden__qcSqu',
                words: 'VibePage_words__39Mii',
                words_mobile: 'VibePage_words_mobile__fxtu0',
                words_hidden: 'VibePage_words_hidden__4_uEt',
                wheel: 'VibePage_wheel__E_p8_',
                wheel_hidden: 'VibePage_wheel_hidden__Yd8xW',
                textContainer_playing: 'VibePage_textContainer_playing__xJphv',
            };
        },
        35955: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => a });
            let a = (e, t) => {
                let i = Number(t);
                return !Number.isNaN(i) && i > 0 && i < e.length ? i : 0;
            };
        },
        38271: (e) => {
            e.exports = {
                root: 'VibePageFreemiumBlock_root__HCPuh',
                button: 'VibePageFreemiumBlock_button__ULD2Z',
                description: 'VibePageFreemiumBlock_description__AaZUt',
            };
        },
        39145: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => s });
            var a = i(58025),
                n = i(87655),
                r = i(76521);
            class s {
                async openDatabase() {
                    return this.openIdb({ onBlocked: () => this.onBlockedHandler(), onTerminated: () => this.onTerminatedHandler() }).then((e) => {
                        this.idb = Promise.resolve(e);
                    });
                }
                isAvailable() {
                    return this.idbIsAvailable;
                }
                async deleteDatabase() {
                    let { dbName: e } = this.config;
                    return window.indexedDB
                        .databases()
                        .then((t) => (t.find((t) => e === t.name) ? new r.h(e).deleteDB({ onBlocked: n.A }) : Promise.resolve()))
                        .catch(n.A);
                }
                async executeTransaction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.idbIsAvailable && this.idb
                        ? this.idb.then((i) => (i ? e(i) : Promise.resolve(null == t ? void 0 : t.defaultValue)))
                        : Promise.resolve(null == t ? void 0 : t.defaultValue);
                }
                onBlockedHandler() {
                    this.closeConnection(this.idb).then(() => {
                        this.idb = this.openIdb({
                            onBlocked: () => {
                                this.closeConnection(this.idb);
                            },
                            onTerminated: () => this.onTerminatedHandler(),
                        });
                    });
                }
                onTerminatedHandler() {
                    ((this.idbIsAvailable = !1),
                        (this.idb = this.openIdb({
                            onBlocked: () => this.onBlockedHandler(),
                            onTerminated: () => {
                                this.idbIsAvailable = !1;
                            },
                        })));
                }
                async openIdb(e) {
                    let { dbName: t, dbVersion: i, onUpgrade: a } = this.config;
                    try {
                        let n = await new r.h(t).openDB(i, {
                            onBlocked: (t, i, a) => {
                                var n;
                                null == e || null == (n = e.onBlocked) || n.call(e, t, i, a);
                            },
                            onTerminated: () => {
                                var t;
                                null == e || null == (t = e.onTerminated) || t.call(e);
                            },
                            onUpgrade: (e) => {
                                a(e);
                            },
                        });
                        return ((this.idbIsAvailable = !0), n);
                    } catch (e) {
                        this.idbIsAvailable = !1;
                    }
                }
                async closeConnection(e) {
                    return ((this.idbIsAvailable = !1), (this.idb = void 0), e)
                        ? e
                              .then((e) => {
                                  e && e.close();
                              })
                              .catch(n.A)
                        : Promise.resolve();
                }
                constructor(e) {
                    ((0, a._)(this, 'config', void 0),
                        (0, a._)(this, 'idb', void 0),
                        (0, a._)(this, 'idbIsAvailable', void 0),
                        (this.config = e),
                        (this.idbIsAvailable = !1));
                }
            }
        },
        40056: (e) => {
            e.exports = {
                collection: 'MultivibeContextMenu_collection__nO8Y5',
                description: 'MultivibeContextMenu_description__LGIHH',
                divider: 'MultivibeContextMenu_divider__NtH8V',
                loader: 'MultivibeContextMenu_loader__wfHPN',
                renameInput: 'MultivibeContextMenu_renameInput__yPN5R',
            };
        },
        40433: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => s });
            var a = i(71035),
                n = i(27954),
                r = i(44806);
            let s = () => {
                let { experiments: e, user: t, wizard: i, sonataState: s } = (0, n.g)(),
                    o = i.isAvailable && e.checkExperiment(r.z.WebNextNewWaveWizard, 'on'),
                    l = o && t.hasPlus && t.settings.showWizard && !s.entityMeta,
                    d = (0, a.c)(() => !!l && (i.introModal.open(), !0)),
                    c = (0, a.c)(() => {
                        o && i.introModal.open();
                    });
                return { isEnabled: o, shouldOpenIntroFromPlay: l, openIntroModalFromPlay: d, openWizard: c };
            };
        },
        41851: (e, t, i) => {
            'use strict';
            i.d(t, { MainPage: () => n2 });
            var a,
                n,
                r,
                s,
                o,
                l,
                d = i(25839),
                c = i(82298),
                u = i(88204),
                _ = i(84059),
                m = i(74631),
                b = i.t(m, 2),
                v = i(39004),
                p = i(8487),
                h = i(93588),
                g = i(61493),
                x = i(97762),
                f = i(71035),
                A = i(68934),
                y = i(49656),
                C = i(4071),
                j = i(23818),
                N = i(13833),
                P = i(3392),
                T = i(4254),
                k = i(32113),
                S = i(64715),
                w = i(91886),
                I = i(13624);
            let E = (0, m.lazy)(async () =>
                    Promise.all([i.e(577), i.e(6232)])
                        .then(i.bind(i, 56232))
                        .then((e) => ({ default: e.VibeFallbackAnimation })),
                ),
                O = (0, m.lazy)(async () =>
                    Promise.all([i.e(577), i.e(8234), i.e(6095), i.e(5531), i.e(2730)])
                        .then(i.bind(i, 62730))
                        .then((e) => ({ default: e.VibeAnimation })),
                ),
                B = I.default.default(
                    () =>
                        Promise.all([i.e(577), i.e(1616)])
                            .then(i.bind(i, 81616))
                            .then((e) => ({ default: e.VibeWidgetFallbackAnimation })),
                    { ssr: !1 },
                ),
                M = I.default.default(
                    () =>
                        Promise.all([i.e(577), i.e(8234), i.e(6095), i.e(3751)])
                            .then(i.bind(i, 53751))
                            .then((e) => ({ default: e.VibeWidgetAnimation })),
                    { ssr: !1 },
                );
            var R = i(26742),
                L = i(97952),
                W = i(97828),
                D = i(36484),
                V = i(62562),
                F = i(87201),
                U = i(27954),
                z = i(44806),
                H = i(36159),
                K = i(14797),
                G = i(16978),
                Y = i(66738),
                q = i(29282),
                X = i(21784),
                $ = i(70919),
                Z = i.n($);
            let Q = !0,
                J = (0, u.PA)((e) => {
                    let { isPlaying: t, onClick: i, ariaDisabled: a, className: n } = e,
                        { vibe: r } = (0, U.g)(),
                        { formatMessage: s } = (0, v.A)(),
                        o = (0, X.W)(),
                        l = (0, q.D)(),
                        u = t ? 'pauseVibe' : 'playVibe',
                        _ = t ? g.e8.vibe.MY_VIBE_PAUSE_BUTTON : g.e8.vibe.MY_VIBE_PLAY_BUTTON,
                        b = (0, m.useMemo)(() => (t ? s({ id: 'vibe-actions.aria-label-pause' }) : s({ id: 'vibe-actions.aria-label-play' })), [s, t]),
                        h = (0, m.useCallback)(
                            (e) => {
                                (r.isApplying || null == i || i(), e.stopPropagation(), e.preventDefault());
                            },
                            [i, r.isApplying],
                        );
                    return (
                        (0, m.useEffect)(() => {
                            if ('production' === l && 1 === o.length && Q) {
                                var e, t;
                                let i = Math.round(performance.now());
                                (null == (t = window.Ya) || null == (e = t.Rum) || e.sendTimeMark('my-vibe-button-loading-time', i), (Q = !1));
                            }
                        }, []),
                        (0, d.jsx)(C.$, {
                            className: (0, c.$)(Z().root, { [Z().root_isVibeLoading]: r.isApplying }, n),
                            withRipple: !1,
                            withHover: !1,
                            onClick: h,
                            variant: 'text',
                            'aria-disabled': r.isApplying || a,
                            'aria-label': b,
                            icon: (0, d.jsx)(Y.I, { size: 's', className: Z().icon, variant: u }),
                            'data-test-id': _,
                            children: (0, d.jsx)(p.A, { id: 'entity-names.my-vibe' }),
                        })
                    );
                });
            J.displayName = 'PlayButton';
            var ee = i(96703),
                et = i.n(ee),
                ei = {
                    4490: (e, t, i) => {
                        (i.r(t), i.d(t, { DOWN: () => o, LEFT: () => n, RIGHT: () => r, UP: () => s, useSwipeable: () => m }));
                        var a = i(810);
                        let n = 'Left',
                            r = 'Right',
                            s = 'Up',
                            o = 'Down',
                            l = {
                                delta: 10,
                                preventScrollOnSwipe: !1,
                                rotationAngle: 0,
                                trackMouse: !1,
                                trackTouch: !0,
                                swipeDuration: 1 / 0,
                                touchEventOptions: { passive: !0 },
                            },
                            d = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
                            c = 'mousemove',
                            u = 'mouseup';
                        function _(e, t) {
                            if (0 === t) return e;
                            let i = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(i) + e[1] * Math.sin(i), e[1] * Math.cos(i) - e[0] * Math.sin(i)];
                        }
                        function m(e) {
                            var t, i, m;
                            let b,
                                { trackMouse: v } = e,
                                p = a.useRef(Object.assign({}, d)),
                                h = a.useRef(Object.assign({}, l)),
                                g = a.useRef(Object.assign({}, h.current));
                            for (b in ((g.current = Object.assign({}, h.current)), (h.current = Object.assign(Object.assign({}, l), e)), l))
                                void 0 === h.current[b] && (h.current[b] = l[b]);
                            let [x, f] = a.useMemo(
                                () =>
                                    (function (e, t) {
                                        let i = (t) => {
                                                let i = 'touches' in t;
                                                (i && t.touches.length > 1) ||
                                                    e((e, n) => {
                                                        n.trackMouse && !i && (document.addEventListener(c, a), document.addEventListener(u, b));
                                                        let { clientX: r, clientY: s } = i ? t.touches[0] : t,
                                                            o = _([r, s], n.rotationAngle);
                                                        return (
                                                            n.onTouchStartOrOnMouseDown && n.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), d), { initial: o.slice(), xy: o, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            a = (t) => {
                                                e((e, i) => {
                                                    var a, d, c, u;
                                                    let m = 'touches' in t;
                                                    if (m && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > i.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: b, clientY: v } = m ? t.touches[0] : t,
                                                        [p, h] = _([b, v], i.rotationAngle),
                                                        g = p - e.xy[0],
                                                        x = h - e.xy[1],
                                                        f = Math.abs(g),
                                                        A = Math.abs(x),
                                                        y = (t.timeStamp || 0) - e.start,
                                                        C = Math.sqrt(f * f + A * A) / (y || 1),
                                                        j = [g / (y || 1), x / (y || 1)],
                                                        N = ((a = f), (d = A), (c = g), (u = x), a > d ? (c > 0 ? r : n) : u > 0 ? o : s),
                                                        P = 'number' == typeof i.delta ? i.delta : i.delta[N.toLowerCase()] || l.delta;
                                                    if (f < P && A < P && !e.swiping) return e;
                                                    let T = {
                                                        absX: f,
                                                        absY: A,
                                                        deltaX: g,
                                                        deltaY: x,
                                                        dir: N,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: C,
                                                        vxvy: j,
                                                    };
                                                    (T.first && i.onSwipeStart && i.onSwipeStart(T), i.onSwiping && i.onSwiping(T));
                                                    let k = !1;
                                                    return (
                                                        (i.onSwiping || i.onSwiped || i['onSwiped'.concat(N)]) && (k = !0),
                                                        k && i.preventScrollOnSwipe && i.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: T, swiping: !0 })
                                                    );
                                                });
                                            },
                                            m = (t) => {
                                                e((e, i) => {
                                                    let a;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < i.swipeDuration) {
                                                            ((a = Object.assign(Object.assign({}, e.eventData), { event: t })), i.onSwiped && i.onSwiped(a));
                                                            let n = i['onSwiped'.concat(a.dir)];
                                                            n && n(a);
                                                        }
                                                    } else i.onTap && i.onTap({ event: t });
                                                    return (
                                                        i.onTouchEndOrOnMouseUp && i.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), d), { eventData: a })
                                                    );
                                                });
                                            },
                                            b = (e) => {
                                                (document.removeEventListener(c, a), document.removeEventListener(u, b), m(e));
                                            },
                                            v = (e, t) => {
                                                let n = () => {};
                                                if (e && e.addEventListener) {
                                                    let r = Object.assign(Object.assign({}, l.touchEventOptions), t.touchEventOptions),
                                                        s = [
                                                            ['touchstart', i, r],
                                                            ['touchmove', a, Object.assign(Object.assign({}, r), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', m, r],
                                                        ];
                                                    (s.forEach((t) => {
                                                        let [i, a, n] = t;
                                                        return e.addEventListener(i, a, n);
                                                    }),
                                                        (n = () =>
                                                            s.forEach((t) => {
                                                                let [i, a] = t;
                                                                return e.removeEventListener(i, a);
                                                            })));
                                                }
                                                return n;
                                            },
                                            p = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, i) => {
                                                            if (e.el === t) return e;
                                                            let a = {};
                                                            return (
                                                                e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), (a.cleanUpTouch = void 0)),
                                                                i.trackTouch && t && (a.cleanUpTouch = v(t, i)),
                                                                Object.assign(Object.assign(Object.assign({}, e), { el: t }), a)
                                                            );
                                                        });
                                                },
                                            };
                                        return (t.trackMouse && (p.onMouseDown = i), [p, v]);
                                    })((e) => (p.current = e(p.current, h.current)), { trackMouse: v }),
                                [v],
                            );
                            return (
                                (t = p.current),
                                (i = h.current),
                                (m = g.current),
                                (p.current =
                                    i.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? i.preventScrollOnSwipe !== m.preventScrollOnSwipe || i.touchEventOptions.passive !== m.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: f(t.el, i) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: f(t.el, i) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                x
                            );
                        }
                    },
                    792: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let a = i(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, a.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, i = Array(e), a = 0; a < e; a++) i[a] = arguments[a];
                                    return t.current.callback(...i);
                                },
                                callback: e,
                            });
                            return (
                                (0, a.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    2458: (e, t, i) => {
                        var a;
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0));
                        let n = i(4490),
                            r = i(792);
                        !(function (e) {
                            ((e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left'));
                        })(a || (t.SwipeablePlacement = a = {}));
                        let s = (e) => {
                                let { ref: t, deltaY: i, deltaX: n, placement: r } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            r === a.TOP || r === a.BOTTOM ? 'translateY('.concat(i || 0, 'px)') : 'translateX('.concat(n || 0, 'px)')));
                                });
                            },
                            o = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: i = {}, onClose: l, disableSwipe: d, placement: c, threshold: u } = e,
                                _ = (0, r.useCallbackRef)(() => {
                                    l && (o(t), l());
                                }),
                                m = (0, r.useCallbackRef)((e) => {
                                    d ||
                                        ((e) => {
                                            let { ref: t, deltaY: i, deltaX: n, placement: r } = e;
                                            switch (r) {
                                                case a.TOP:
                                                    i <= 0 && s({ ref: t, deltaY: i, deltaX: n, placement: r });
                                                    break;
                                                case a.RIGHT:
                                                    n >= 0 && s({ ref: t, deltaY: i, deltaX: n, placement: r });
                                                    break;
                                                case a.LEFT:
                                                    n <= 0 && s({ ref: t, deltaY: i, deltaX: n, placement: r });
                                                    break;
                                                default:
                                                    i >= 0 && s({ ref: t, deltaY: i, deltaX: n, placement: r });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: c });
                                }),
                                b = (0, r.useCallbackRef)((e) => {
                                    !d &&
                                        (((e) => {
                                            let { ref: t, deltaY: i, deltaX: n, placement: r, threshold: s = 25 } = e;
                                            if (!t.current) return !1;
                                            let o = (s / 100) * (r === a.TOP || r === a.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (r) {
                                                case a.TOP:
                                                    return i < 0 && Math.abs(i) >= o;
                                                case a.RIGHT:
                                                    return n > 0 && n >= o;
                                                case a.LEFT:
                                                    return n < 0 && Math.abs(n) >= o;
                                                default:
                                                    return i > 0 && i >= o;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: c, threshold: u })
                                            ? l && (o(t), l())
                                            : o(t));
                                });
                            return { handlers: (0, n.useSwipeable)({ onSwiped: b, onSwiping: m, trackMouse: !0, trackTouch: !0, ...i }), onCloseCallback: _ };
                        };
                    },
                    810: (e) => {
                        e.exports = b;
                    },
                },
                ea = {};
            function en(e) {
                var t = ea[e];
                if (void 0 !== t) return t.exports;
                var i = (ea[e] = { exports: {} });
                return (ei[e](i, i.exports, en), i.exports);
            }
            ((en.d = (e, t) => {
                for (var i in t) en.o(t, i) && !en.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (en.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (en.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var er = {};
            ((() => {
                (Object.defineProperty(er, '__esModule', { value: !0 }), (er.usePopoverSwipeable = void 0));
                let e = en(810),
                    t = en(2458);
                er.usePopoverSwipeable = (i) => {
                    let { ref: a, swipeableProps: n = {}, onClose: r, disableSwipe: s, placement: o, threshold: l } = i,
                        d = (0, e.useMemo)(() => {
                            switch (o) {
                                case 'top':
                                case 'top-end':
                                case 'top-start':
                                    return t.SwipeablePlacement.TOP;
                                case 'right':
                                case 'right-end':
                                case 'right-start':
                                    return t.SwipeablePlacement.RIGHT;
                                case 'left':
                                case 'left-end':
                                case 'left-start':
                                    return t.SwipeablePlacement.LEFT;
                                default:
                                    return t.SwipeablePlacement.BOTTOM;
                            }
                        }, [o]);
                    return (0, t.useComponentSwipeable)({ ref: a, swipeableProps: n, onClose: r, disableSwipe: s, placement: d, threshold: l });
                };
            })(),
                er.__esModule);
            var es = er.usePopoverSwipeable,
                eo = i(14693),
                el = i(11823),
                ed = i(35262),
                ec = i(89192),
                eu = i(51514);
            let e_ = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    [t, i] = (0, m.useState)(e),
                    { contentRef: a } = (0, ec.g)();
                return (
                    (0, m.useEffect)(() => {
                        let e = new ResizeObserver((e) => {
                            let [a] = e || [];
                            a && a.contentRect.height !== t && i(a.contentRect.height);
                        });
                        return (
                            a && e.observe(a),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [t, a]),
                    { contentHeight: t }
                );
            };
            var em = i(22892),
                eb = i(63115),
                ev = i.n(eb);
            let ep = (0, u.PA)(() => {
                var e, t, i, a;
                let { formatMessage: n } = (0, v.A)(),
                    {
                        vibe: r,
                        settings: { isMobile: s },
                        vibeSettings: o,
                    } = (0, U.g)(),
                    { pageId: l } = (0, L.$)(),
                    { blockIdForFrom: c } = (0, R.N)(),
                    u = (0, m.useRef)(null),
                    _ = (0, m.useRef)(null),
                    b = (0, m.useRef)(null),
                    { resetContext: h } = (0, F.B)({ seeds: null != (a = null == (e = r.meta) ? void 0 : e.seeds) ? a : [], pageIdForFrom: l, blockIdForFrom: c }),
                    { contentRef: x } = (0, ec.g)(),
                    { contentHeight: A } = e_(0),
                    { state: y, setState: j, toggleFalse: N } = (0, eo.e)(!1);
                (0, m.useEffect)(
                    () => () => {
                        o.reset();
                    },
                    [o],
                );
                let k = (0, m.useMemo)(
                        () => (s ? { height: '88vh', transitionProperty: 'opacity' } : x ? { insetInlineEnd: 7, insetBlockStart: x.offsetTop + 7, height: A - 16 } : {}),
                        [A, x, s],
                    ),
                    S = !!(r.isApplying || r.isMyVibe),
                    w = (0, f.c)((e) => {
                        if (!r.isApplying) {
                            var t;
                            (u.current && (0, el.P)(e, ev().ripple, u.current), h(), null == (t = _.current) || t.focus());
                        }
                    }),
                    I = (0, m.useMemo)(() => {
                        var e, t;
                        if (
                            ((e) =>
                                !!e &&
                                e.some((e) => {
                                    let [t] = (null == e ? void 0 : e.split(':')) || [];
                                    return e === eu.M1 || (t && eu.UM.includes(t));
                                }))(null == (e = r.meta) ? void 0 : e.seeds)
                        )
                            return (null == (t = r.meta) ? void 0 : t.context)
                                ? (0, d.jsx)(C.$, {
                                      className: ev().toggleSettingsButton,
                                      size: 'm',
                                      radius: 'round',
                                      icon: (0, d.jsx)(Y.I, { variant: 'filter', size: 'xs' }),
                                      'aria-label': n({ id: 'vibe-actions.aria-label-settings' }),
                                      'data-test-id': g.Kq.vibeSettings.VIBE_SETTINGS_BUTTON,
                                  })
                                : (0, d.jsx)(C.$, {
                                      className: ev().toggleSettingsButton,
                                      size: 'default',
                                      radius: 'xxxl',
                                      icon: (0, d.jsx)(Y.I, { variant: 'filter', size: 'xxs' }),
                                      'aria-label': n({ id: 'vibe-actions.aria-label-settings' }),
                                      'data-test-id': g.Kq.vibeSettings.VIBE_SETTINGS_BUTTON,
                                      children: (0, d.jsx)(T.HL, {
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          weight: 'medium',
                                          children: (0, d.jsx)(p.A, { id: 'interface-actions.configure-my-vibe' }),
                                      }),
                                  });
                    }, [n, null == (t = r.meta) ? void 0 : t.context, null == (i = r.meta) ? void 0 : i.seeds]),
                    { handlers: E } = es({ ref: b, onClose: N, placement: 'bottom', disableSwipe: !s, swipeableProps: { preventScrollOnSwipe: !0 } });
                return (0, d.jsxs)(ed.AM, {
                    placement: s ? 'bottom' : 'right',
                    isMobile: s,
                    strategy: 'fixed',
                    transform: !1,
                    portalNode: x,
                    positionElement: x,
                    disableFloatingStyles: !s,
                    open: y,
                    onOpenChange: j,
                    style: k,
                    overlayClassName: ev().overlay,
                    popoverContentRef: b,
                    children: [
                        I,
                        (0, d.jsx)(ed.hl, {
                            className: ev().popover,
                            ref: b,
                            'data-test-id': g.Kq.vibeSettings.VIBE_SETTINGS_BLOCK,
                            children: (0, d.jsxs)('div', {
                                className: ev().root,
                                children: [
                                    s && (0, d.jsx)('div', { ref: E.ref, onMouseDown: E.onMouseDown, className: ev().swipeableArea }),
                                    (0, d.jsxs)('div', {
                                        className: ev().header,
                                        children: [
                                            (0, d.jsx)(T.DZ, {
                                                variant: 'h3',
                                                size: 's',
                                                weight: 'bold',
                                                'data-test-id': g.Kq.vibeSettings.VIBE_SETTINGS_TITLE,
                                                children: (0, d.jsx)(p.A, { id: 'interface-actions.my-vibe-settings' }),
                                            }),
                                            (0, d.jsxs)('div', {
                                                className: ev().actions,
                                                children: [
                                                    (0, d.jsx)(P.m_, {
                                                        offsetOptions: 4,
                                                        placement: 'left',
                                                        text: n({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                        children: (0, d.jsx)(C.$, {
                                                            variant: 'outline',
                                                            radius: 'round',
                                                            size: 'xxxs',
                                                            icon: (0, d.jsx)(Y.I, { variant: 'reset', size: 'xxxs' }),
                                                            onClick: w,
                                                            disabled: !!r.isMyVibe,
                                                            'aria-hidden': !!r.isMyVibe,
                                                            'aria-disabled': S,
                                                            'aria-label': n({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                            ref: u,
                                                            'data-test-id': g.Kq.vibeSettings.VIBE_SETTINGS_RESET_BUTTON,
                                                        }),
                                                    }),
                                                    (0, d.jsx)(C.$, {
                                                        radius: 'round',
                                                        color: 'secondary',
                                                        size: 'xxs',
                                                        icon: (0, d.jsx)(Y.I, { variant: 'close', size: 'xxs' }),
                                                        onClick: N,
                                                        'aria-label': n({ id: 'interface-actions.close-my-vibe-settings' }),
                                                        ref: _,
                                                        'data-test-id': g.Kq.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, d.jsx)(em.C, {}),
                                ],
                            }),
                        }),
                    ],
                });
            });
            var eh = i(75159),
                eg = i(41580),
                ex = i(50985),
                ef = i.n(ex);
            let eA = (0, u.PA)((e) => {
                    var t;
                    let { context: i, onResetClick: a, className: n } = e,
                        {
                            vibe: r,
                            settings: { isMobile: s },
                            experiments: o,
                        } = (0, U.g)(),
                        { formatMessage: l } = (0, v.A)(),
                        u = (0, eh.A)(r.meta),
                        _ = i && !s,
                        m = (0, y.L)(() => {
                            var e;
                            return o.checkExperiment(z.z.WebNextVibeDescription, 'on') && (null == (e = r.meta) ? void 0 : e.isMix)
                                ? l({ id: 'vibe-actions.vibe-context' }, { type: r.meta.type, name: i })
                                : i;
                        });
                    return (0, d.jsxs)('div', {
                        className: (0, c.$)(ef().root, n),
                        children: [
                            _ &&
                                (0, d.jsx)(eg.O, {
                                    size: 'm',
                                    iconSize: 'xs',
                                    withScaleAnimation: !1,
                                    isPinned: null == (t = r.meta) ? void 0 : t.isPinned,
                                    onClick: u,
                                    className: ef().pinButton,
                                }),
                            (0, d.jsx)(ep, {}),
                            i &&
                                (0, d.jsxs)('div', {
                                    className: (0, c.$)(ef().context),
                                    'data-test-id': g.e8.vibe.VIBE_CONTEXT,
                                    children: [
                                        (0, d.jsx)(T.HL, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', lineClamp: 1, children: m }),
                                        (0, d.jsx)(C.$, {
                                            className: ef().resetButton,
                                            variant: 'text',
                                            radius: 'round',
                                            withRipple: !1,
                                            icon: (0, d.jsx)(Y.I, { variant: 'close', size: 'xxs' }),
                                            onClick: a,
                                            'aria-label': ''.concat(l({ id: 'vibe-actions.reset-settings' }), ' ').concat(m),
                                            'data-test-id': g.e8.vibe.RESET_VIBE_CONTEXT_BUTTON,
                                        }),
                                    ],
                                }),
                        ],
                    });
                }),
                ey = 'vibe-block',
                eC = 'vibe-block-controls',
                ej = (0, u.PA)((e) => {
                    var t, i, a, n;
                    let { className: r } = e,
                        s = (0, _.useRouter)(),
                        { vibe: o, experiments: l, user: u, freeAccess: b } = (0, U.g)(),
                        v = (0, m.useRef)(null),
                        [h, x] = (0, A.d)(),
                        { pageId: f } = (0, L.$)(),
                        { blockIdForFrom: y } = (0, R.N)(),
                        {
                            openPaymentWidgetModal: C,
                            isShimmerActive: j,
                            isShimmerVisible: N,
                            mainText: P,
                            mainTextA11y: k,
                            additionText: S,
                        } = (0, W.D)({ storeName: 'music', isEnabled: b.isVibeStartRestricted, offerElement: { element: h, intersectionPropertyId: eC } }),
                        { isIntersecting: I } = null != (a = (0, w.BL)([v], { preflightCheck: !1 }, !v.current)[ey]) ? a : {},
                        B = (0, V.N)().get(D.QG),
                        {
                            isVibeContext: M,
                            isPlaying: Y,
                            togglePlay: q,
                            resetContext: X,
                            // for PulseSync: BEGIN access native wave playback by seed
                            playSeeds: pulseSyncPlaySeeds,
                            // for PulseSync: END access native wave playback by seed
                        } = (0, F.B)({ seeds: null != (n = null == (t = o.meta) ? void 0 : t.seeds) ? n : [], pageIdForFrom: f, blockIdForFrom: y }),
                        $ = l.checkExperiment(z.z.WebNextDisableVibeSettings, 'on') || b.isVibeStartRestricted || !u.isAuthorized,
                        Z = (0, m.useCallback)(() => {
                            M ? X() : o.vibeResetLoadingState !== H.G.PENDING && o.vibeReset();
                        }, [M, o, X]),
                        Q = (0, m.useCallback)(() => {
                            if (!u.isAuthorized) {
                                if (!B.authorizationUrl) return;
                                s.push(B.authorizationUrl);
                                return;
                            }
                            b.isVibeStartRestricted && C();
                        }, [u.isAuthorized, B.authorizationUrl, s, b.isVibeStartRestricted, C]),
                        ee = (0, m.useCallback)(
                            (e) => {
                                (e.stopPropagation(), e.preventDefault(), Q());
                            },
                            [Q],
                        ),
                        ei = (0, m.useCallback)(() => {
                            if (b.isVibeStartRestricted || !u.isAuthorized) return void Q();
                            q();
                        }, [b.isVibeStartRestricted, u.isAuthorized, q, Q]),
                        ea = (0, m.useMemo)(
                            () =>
                                l.checkExperiment(z.z.WebNextShaderFallbackEnabled, 'on')
                                    ? (0, d.jsx)(E, { className: et().vibeAnimation })
                                    : (0, d.jsx)(O, { isIntersecting: I, className: et().vibeAnimation }),
                            [l, I],
                        ),
                        en = (0, m.useMemo)(() => (0, d.jsx)(G.H, { size: 'l', className: et().button }), []);
                    return (
                        // for PulseSync WebHost: BEGIN expose native wave playback by seed to the addon API
                        (0, m.useEffect)(() => {
                            if (!window.pulsesyncApi) return;
                            let e = function () {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = Array.isArray(null == e ? void 0 : e.seeds) ? e.seeds : 'string' == typeof (null == e ? void 0 : e.seed) ? [e.seed] : [],
                                    i = t.filter((e) => 'string' == typeof e && e.length > 0);
                                if (i.length > 0) {
                                    if (b.isVibeStartRestricted || !u.isAuthorized) return void Q();
                                    pulseSyncPlaySeeds(i);
                                    return;
                                }
                                ei();
                            };
                            return (
                                (window.pulsesyncApi.playVibeNative = e),
                                () => {
                                    window.pulsesyncApi && window.pulsesyncApi.playVibeNative === e && delete window.pulsesyncApi.playVibeNative;
                                }
                            );
                        }, [b.isVibeStartRestricted, u.isAuthorized, ei, Q, pulseSyncPlaySeeds]),
                        // for PulseSync WebHost: END expose native wave playback by seed to the addon API
                        (0, m.useEffect)(
                            () => () => {
                                o.reset();
                            },
                            [o],
                        ),
                        u.isAuthorized && o.isNeededToLoad && (0, m.use)(o.getLastVibe()),
                        (0, d.jsxs)('div', {
                            className: (0, c.$)(et().root, { [et().root_freemium]: b.isVibeStartRestricted || !u.isAuthorized }, r),
                            ref: v,
                            'data-intersection-property-id': ey,
                            'data-test-id': g.e8.vibe.VIBE_BLOCK,
                            children: [
                                ea,
                                (0, d.jsxs)('div', {
                                    className: et().controls,
                                    onClick: ee,
                                    ref: x,
                                    'data-intersection-property-id': eC,
                                    children: [
                                        (0, d.jsx)(J, {
                                            className: et().playButton,
                                            isPlaying: Y,
                                            ariaDisabled: b.isVibeStartRestricted || !u.isAuthorized,
                                            onClick: ei,
                                        }),
                                        !$ && (0, d.jsx)(eA, { className: et().settingsButton, context: null == (i = o.meta) ? void 0 : i.context, onResetClick: Z }),
                                        (b.isVibeStartRestricted || !u.isAuthorized) &&
                                            (0, d.jsx)(T.HL, {
                                                className: et().subscriptionText,
                                                variant: 'div',
                                                size: 'l',
                                                'data-test-id': g.e8.vibe.MY_VIBE_SUBSCRIPTION_TEXT,
                                                children: (0, d.jsx)(p.A, { id: 'vibe-freemium.available-in-plus', values: { br: (0, d.jsx)('br', {}) } }),
                                            }),
                                        !u.isAuthorized && en,
                                        u.isAuthorized &&
                                            b.isVibeStartRestricted &&
                                            (0, d.jsx)(K.b, {
                                                isShimmerActive: j,
                                                isShimmerVisible: N,
                                                onClick: C,
                                                mainText: P,
                                                ariaLabel: k,
                                                additionText: S,
                                                className: et().button,
                                                'data-test-id': g.e8.vibe.MY_VIBE_SUBSCRIPTION_BUTTON,
                                            }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
            ej.displayName = 'VibeBlock';
            var eN = i(89257),
                eP = i(84111),
                eT = i(24004),
                ek = i(1407),
                eS = i(67560),
                ew = i(18483),
                eI = i(73393),
                eE = i(38656),
                eO = i(68406),
                eB = i(5180),
                eM = i(40110),
                eR = i(42853),
                eL = i(20258),
                eW = i(57138),
                eD = i(95858),
                eV = i(10322),
                eF = i(30716),
                eU = i(90208),
                ez = i(85686),
                eH = i(49337),
                eK = i(96618),
                eG = i(6969),
                eY = i(25895),
                eq = i(38832),
                eX = i(99401),
                e$ = i(26076),
                eZ = i(97028),
                eQ = i.n(eZ),
                eJ = i(9079),
                e0 = i(21993),
                e1 = i.n(e0);
            let e2 = (e) => {
                let { href: t, imageSrc: i, children: a, className: n } = e,
                    r = (0, ez.Z)(t);
                return (0, d.jsxs)(eJ.N, {
                    onClick: r,
                    className: (0, c.$)(e1().root, n),
                    children: [
                        (0, d.jsx)(T.HL, { className: e1().caption, lineClamp: 3, size: 'm', variant: 'span', weight: 'bold', children: a }),
                        (0, d.jsx)('div', {
                            className: e1().imageContainer,
                            children: (0, d.jsx)(j._V, { className: e1().image, fit: 'cover', src: i, withAvatarReplace: !0 }),
                        }),
                    ],
                });
            };
            var e8 = i(44031),
                e5 = i(28010),
                e6 = i(28447),
                e9 = i(7010),
                e4 = i(27663),
                e3 = i(31927),
                e7 = i(79367),
                te = i(94041),
                tt = i(42966),
                ti = i(47009),
                ta = i(65343),
                tn = i(89209),
                tr = i(20790),
                ts = i(30296),
                to = i(2204),
                tl = i(64720),
                td = i(49438),
                tc = i(4509),
                tu = i(84219),
                t_ = i(73614),
                tm = i(29481),
                tb = i(40433),
                tv = i(5668),
                tp = i(97522),
                th = i(18197),
                tg = i(17679),
                tx = i.n(tg);
            let tf = 'https://avatars.mds.yandex.net/get-music-misc/29541/img.698c9ec84f02b819695579e7/orig',
                tA = (0, u.PA)((e) => {
                    var t, i;
                    let { album: a, className: n } = e,
                        {
                            vibe: r,
                            sonataState: s,
                            advert: o,
                            freePlayerAccess: l,
                            fullscreenPlayer: u,
                            user: _,
                            settings: { isMobile: b },
                            freeAccess: p,
                        } = (0, U.g)(),
                        { openIntroModalFromPlay: h } = (0, tb.e)(),
                        { formatMessage: x } = (0, v.A)(),
                        A = (0, ts.e)(),
                        N = (0, tr.z)(),
                        P = (0, e7.P)(),
                        T = (0, ti.b)(),
                        k = (0, te.r)(),
                        S = (0, tt.m)(),
                        w = (0, tm.N)(),
                        { pageId: I } = (0, L.$)(),
                        { togglePlay: E } = (0, F.B)({
                            seeds: null != (i = null == (t = r.meta) ? void 0 : t.seeds) ? i : [],
                            pageIdForFrom: I,
                            blockIdForFrom: ''.concat(e8.EntityTypes.MyWave, '-').concat(eM.U.RADIO),
                            onPlayInterrupted: () => l.showRestrictionModal(e3.W.Interrupted),
                        }),
                        O = (0, t_.r)(null == a ? void 0 : a.type),
                        B = (null == a ? void 0 : a.title) ? ''.concat(O, ' ').concat(a.title) : O,
                        M = s.entityMeta,
                        R = (0, f.c)((e) => {
                            (e.stopPropagation(), (0, el.P)(e, tx().ripple), null == A || A.moveForward(), S({ actionType: e8.ActionType.Skip }));
                        }),
                        W = (0, f.c)((e) => {
                            (e.stopPropagation(), (0, el.P)(e, tx().ripple), null == A || A.moveBackward(), S({ actionType: e8.ActionType.Backskip }));
                        }),
                        D = (0, f.c)(() => {
                            if (o.isAdvertShown) {
                                var e;
                                null == k || null == (e = k.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            if (!h())
                                if (M) (null == A || A.togglePause(), S({ actionType: s.isPlaying ? e8.ActionType.Pause : e8.ActionType.Play }));
                                else {
                                    if (p.isVibeStartRestricted) return;
                                    (E(), T(!s.isPlaying));
                                }
                        }),
                        V = (0, f.c)(() => {
                            P() || D();
                        }),
                        z = !M && !_.hasPlus && p.isFreePlaybackDisabled,
                        H = (0, m.useCallback)(
                            () =>
                                (0, d.jsx)(td.D, {
                                    className: (0, c.$)(tx().playButton, { [tx().playButton_playing]: s.isPlaying }),
                                    isPlaying: s.isPlaying,
                                    iconClassName: tx().playButtonIcon,
                                    color: 'secondary',
                                    onClick: V,
                                }),
                            [V, s.isPlaying],
                        ),
                        K = (0, m.useMemo)(
                            () =>
                                z
                                    ? _.isAuthorized
                                        ? (0, d.jsx)(tv.S, { isEnabled: p.isVibeStartRestricted, placement: 'top', textVariant: 'vibe', renderChildren: H })
                                        : (0, d.jsx)(th.Z, { isEnabled: z, placement: 'top', textVariant: 'vibe', renderChildren: H })
                                    : H(),
                            [z, H, _.isAuthorized, p.isVibeStartRestricted],
                        ),
                        G = (0, f.c)(() => {
                            s.isGenerativeContext || (u.showFullscreenPlayerModal(), w({ to: e8.AppScreen.PlayerScreen }));
                        }),
                        q = (0, y.L)(() => {
                            if (M) return s.isGenerativeContext ? M.coverUri || tf : (null == a ? void 0 : a.coverUri) || tf;
                        }),
                        X = (0, f.c)(() => {
                            w({ to: e8.AppScreen.AlbumScreen });
                        }),
                        $ = (0, y.L)(() => {
                            var e, t, i, n;
                            return q
                                ? !b && (null == a ? void 0 : a.url)
                                    ? (0, d.jsx)(tp.N, {
                                          className: tx().link,
                                          href: a.url,
                                          'aria-label': B,
                                          onClick: X,
                                          children: (0, d.jsx)(
                                              j._V,
                                              {
                                                  src: q,
                                                  className: (0, c.$)(tx().cover, {
                                                      [tx().cover_hiddenOnCompactPause]: !s.isPlaying,
                                                      [tx().cover_generative]: s.isGenerativeContext,
                                                  }),
                                                  fit: 'cover',
                                                  size: 400,
                                                  withAvatarReplace: !0,
                                                  alt: B,
                                                  'aria-hidden': !0,
                                              },
                                              null != (n = null == (e = s.entityMeta) ? void 0 : e.idWithContext) ? n : 'default',
                                          ),
                                      })
                                    : (0, d.jsx)(
                                          j._V,
                                          {
                                              src: q,
                                              className: (0, c.$)(tx().cover, {
                                                  [tx().cover_hiddenOnCompactPause]: !s.isPlaying,
                                                  [tx().cover_generative]: s.isGenerativeContext,
                                              }),
                                              onClick: G,
                                              fit: 'cover',
                                              size: 400,
                                              withAvatarReplace: !0,
                                              alt: B,
                                              'aria-hidden': !0,
                                          },
                                          null != (i = null == (t = s.entityMeta) ? void 0 : t.idWithContext) ? i : 'default',
                                      )
                                : null;
                        });
                    return (
                        (0, m.useEffect)(
                            () => (
                                null == N || N.addShortcutsListener(tn.M.MAIN, ta.l.TOGGLE_PLAY, D),
                                () => {
                                    null == N || N.removeShortcutsListener(tn.M.MAIN, ta.l.TOGGLE_PLAY);
                                }
                            ),
                            [D, N],
                        ),
                        (0, d.jsxs)('div', {
                            className: (0, c.$)(tx().root, n),
                            'aria-label': s.isGenerativeContext ? void 0 : B,
                            children: [
                                !s.isGenerativeContext &&
                                    b &&
                                    (0, d.jsx)(C.$, {
                                        className: (0, c.$)(tx().button, tx().button_backward),
                                        variant: 'text',
                                        radius: 'round',
                                        disabled: !s.canMoveBackward,
                                        focusableWhenDisabled: !0,
                                        withRipple: !1,
                                        'aria-label': x({ id: 'player-actions.previous-track' }),
                                        icon: (0, d.jsx)(Y.I, { variant: 'previous', size: 'xs' }),
                                        onClick: W,
                                        'data-test-id': g.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                    }),
                                (0, d.jsxs)('div', {
                                    className: tx().coverContainer,
                                    'data-test-id': g.e8.player.VIBE_ALBUM_COVER,
                                    children: [$, b && !s.isPlaying && (0, d.jsx)('div', { className: tx().playButtonContainer, children: K })],
                                }),
                                !s.isGenerativeContext &&
                                    b &&
                                    (0, d.jsx)(C.$, {
                                        className: (0, c.$)(tx().button, tx().button_forward),
                                        variant: 'text',
                                        radius: 'round',
                                        disabled: !s.canMoveForward,
                                        focusableWhenDisabled: !0,
                                        withRipple: !1,
                                        'aria-label': x({ id: 'player-actions.next-track' }),
                                        icon: (0, d.jsx)(Y.I, { variant: 'next', size: 'xs' }),
                                        onClick: R,
                                        'data-test-id': g.Kq.sonata.NEXT_TRACK_BUTTON,
                                    }),
                            ],
                        })
                    );
                });
            var ty = i(39498),
                tC = i(10820),
                tj = i(33717),
                tN = i(76327),
                tP = i(60025),
                tT = i(94921),
                tk = i(91937),
                tS = i(29872),
                tw = i(55491),
                tI = i(44851),
                tE = i(14240),
                tO = i(51465);
            let tB = (0, u.PA)((e) => {
                let { className: t, trackId: i, albumId: a } = e,
                    { track: n } = (0, U.g)(),
                    r = (0, f.c)(() => {
                        n.open({ trackId: i, albumId: a });
                    });
                return (0, d.jsx)(tC.Dr, {
                    className: t,
                    onClick: r,
                    icon: (0, d.jsx)(Y.I, { variant: 'note', size: 'xxs' }),
                    'data-test-id': g.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_TRACK,
                    children: (0, d.jsx)(p.A, { id: 'interface-actions.navigate-to-track' }),
                });
            });
            var tM = i(74682),
                tR = i(2144),
                tL = i(73519),
                tW = i(1439),
                tD = i.n(tW);
            let tV = (0, u.PA)((e) => {
                var t, i, a;
                let { className: n } = e,
                    r = (0, ts.e)(),
                    { formatMessage: s } = (0, v.A)(),
                    o = null != (t = null == r ? void 0 : r.state.playerState.speed.value) ? t : 1,
                    l = null != (i = tL.f_[o]) ? i : 0,
                    [u, _] = (0, m.useState)(l),
                    b = null != (a = tL.pp[u]) ? a : 1,
                    h = (0, f.c)(() => {
                        var e;
                        let t = (u + 1) % tL.pp.length;
                        (_(t), null == r || r.setSpeed(Number(null != (e = tL.pp[t]) ? e : 1)));
                    });
                return (
                    (0, m.useEffect)(() => {
                        let e =
                            null == r
                                ? void 0
                                : r.state.playerState.speed.onChange(() => {
                                      var e;
                                      let t = r.state.playerState.speed.value;
                                      _(null != (e = tL.f_[t]) ? e : 0);
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [r]),
                    (0, d.jsxs)(tC.Dr, {
                        className: (0, c.$)(tD().root, n),
                        onClick: h,
                        'aria-label': s({ id: 'interface-actions.speed' }, { speed: b }),
                        isSubMenu: !0,
                        'data-test-id': g.S7.CONTEXT_MENU_SPEED_BUTTON,
                        children: [
                            (0, d.jsx)(p.A, { id: 'player-actions.video-speed' }),
                            (0, d.jsx)(Y.I, { variant: (0, tL.CU)(b, !1), size: 'l', className: tD().icon }),
                        ],
                    })
                );
            });
            var tF = i(9522),
                tU = i.n(tF);
            let tz = (0, u.PA)((e) => {
                let { onCloseMenu: t } = e,
                    { user: i, sonataState: a, fullscreenPlayer: n } = (0, U.g)(),
                    { formatMessage: r } = (0, v.A)(),
                    s = (0, tm.N)(),
                    o = null !== a.entityMeta,
                    l = !i.isAuthorized,
                    c = (0, f.c)(() => {
                        (n.showPlayQueue(), s({ to: e8.AppScreen.PlayerScreen }), t());
                    }),
                    u = (0, m.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e;
                            return (0, d.jsx)(tC.Dr, {
                                'aria-label': r({ id: 'interface-actions.open-play-queue' }),
                                onClick: c,
                                disabled: !o || t,
                                icon: (0, d.jsx)(Y.I, { variant: 'playQueue', size: 'xxs' }),
                                'data-test-id': g.e8.player.VIBE_CONTEXT_MENU_PLAY_QUEUE_ITEM,
                                children: (0, d.jsx)(p.A, { id: 'interface-actions.open-play-queue' }),
                            });
                        },
                        [r, o, c],
                    );
                return (0, d.jsx)(th.Z, { isNested: !0, isEnabled: l, placement: 'right', textVariant: 'openQueue', renderChildren: u });
            });
            var tH = i(43377),
                tK = i.n(tH);
            let tG = (0, u.PA)((e) => {
                var t, i, a, n, r, s, o;
                let { buttonClassName: l } = e,
                    { sonataState: u, advert: _, fullscreenPlayer: m, quality: b, vibe: h, user: x, experiments: A } = (0, U.g)(),
                    { formatMessage: j } = (0, v.A)(),
                    N = (0, tP.e)(),
                    P = (0, tN.A)(),
                    T = (0, eh.A)(h.meta),
                    { state: k, setState: S, toggleFalse: w } = (0, eo.e)(!1),
                    I = (0, tm.N)(),
                    E = (0, tt.m)(),
                    O = u.entityMeta,
                    B = (0, f.c)((e) => {
                        S(e);
                    }),
                    M = (0, f.c)(() => {
                        (b.modal.open(), w());
                    }),
                    R = (0, f.c)(() => {
                        (m.showSyncLyrics(), I({ to: e8.AppScreen.PlayerScreen }), w());
                    }),
                    L = (0, f.c)(() => {
                        (N(u), E({ actionType: e8.ActionType.ChangeShuffle }));
                    }),
                    W = (0, f.c)(() => {
                        (P(u), E({ actionType: e8.ActionType.ChangeRepeatSettings }));
                    }),
                    D = (0, f.c)(() => {
                        (T(), w());
                    }),
                    V = (0, f.c)((e) => {
                        ((0, el.P)(e, tU().ripple), M());
                    }),
                    H = (0, e7.P)(),
                    { shouldShowBuySubscriptionModal: K, showBuySubscriptionModal: G } = (0, tS.q)(),
                    { isPlaying: q, togglePlay: X } = (0, F.B)({
                        seeds: null != (r = null == O ? void 0 : O.seeds) ? r : [],
                        pageIdForFrom: eL._Q.RADIO,
                        blockIdForFrom: ''.concat(eM.U.TRACK, '-').concat(null == O ? void 0 : O.id),
                        parentContextId: (null == O || null == (t = O.mainAlbum) ? void 0 : t.id)
                            ? ''.concat(null == O ? void 0 : O.mainAlbum.id, ':').concat(null == O ? void 0 : O.id)
                            : null == O
                              ? void 0
                              : O.entityId,
                    }),
                    $ = (0, f.c)(() => {
                        if (K && x.isAuthorized) return void G();
                        !H() && (q || X());
                    }),
                    Z = u.repeatMode === ty.pM.ONE ? 'repeat_one' : 'repeat',
                    Q = u.repeatMode !== ty.pM.NONE,
                    J = u.shuffle,
                    ee = m.isSyncLyricsMode,
                    et = !!(null == (i = h.meta) ? void 0 : i.isPinned),
                    ei = !!(h.isMyVibe || h.isShuffleVibe),
                    ea = A.checkExperiment(z.z.WebNextProductWithoutRecommendation, 'on'),
                    en = !ea && !!h.meta && u.isVibeContext && !ei,
                    er = u.canSpeed && ((null == O ? void 0 : O.isNonMusic) || (null == O || null == (a = O.mainAlbum) ? void 0 : a.isNonMusic)),
                    es = !ea && (null == O ? void 0 : O.isNonUserGenerated) && !(null == (n = O.mainAlbum) ? void 0 : n.isNonMusic),
                    ed = (null == O ? void 0 : O.albumId) ? '/album/:albumId/track/:trackId' : '/track/:trackId',
                    { shareLink: ec, pathname: eu } = (0, tE.b)(ed, {
                        params: { albumId: null != (s = null == O ? void 0 : O.albumId) ? s : '', trackId: null != (o = null == O ? void 0 : O.id) ? o : '' },
                    }),
                    e_ = (0, y.L)(() => {
                        var e, t;
                        if (O)
                            return {
                                variant: tw.Y.TRACK,
                                id: O.id,
                                title: O.title,
                                path: eu,
                                trackArtistName: null == (e = O.mainArtist) ? void 0 : e.name,
                                trackArtistId: null == (t = O.mainArtist) ? void 0 : t.id,
                                trackAlbumId: O.albumId,
                            };
                    }),
                    // for PulseSync: BEGIN track download filename and desktop download action
                    pulseSyncTrackDownloadName = (0, y.L)(() => {
                        let e = (O?.artists || [])
                            .map((e) => e.name)
                            .filter(Boolean)
                            .join(', ');
                        return [e, O?.title].filter(Boolean).join(' — ');
                    }),
                    pulseSyncDownloadTrackToFile = (0, f.c)(() => {
                        (O?.id && window.desktopEvents?.send?.('DOWNLOAD_TRACK', O.id, pulseSyncTrackDownloadName), w());
                    }),
                    // for PulseSync: END track download filename and desktop download action
                    em = ''.concat(j({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(j({ id: 'warning-messages.can-break-accessibility' })),
                    eb = (0, y.L)(() => {
                        let e = [];
                        return (er && e.push((0, d.jsx)(tV, {}, 'speed')), e.length > 0 && e.push((0, d.jsx)('div', { className: tK().divider }, 'speed-divider')), e);
                    }),
                    ev = (0, y.L)(() => {
                        let e = [];
                        return (
                            en &&
                                e.push(
                                    (0, d.jsx)(
                                        tC.Dr,
                                        {
                                            onClick: D,
                                            icon: (0, d.jsx)(Y.I, { variant: et ? 'pin_filled' : 'pin', size: 'xxs' }),
                                            'data-test-id': g.e8.player.VIBE_CONTEXT_MENU_PIN_ITEM,
                                            children: et
                                                ? (0, d.jsx)(p.A, { id: 'interface-actions.unpin-my-vibe' })
                                                : (0, d.jsx)(p.A, { id: 'interface-actions.pin-my-vibe' }),
                                        },
                                        'pin',
                                    ),
                                ),
                            es && e.push((0, d.jsx)(tR.C, { variant: tI.I.TRACK, onClick: $, disabled: !x.isAuthorized, onOpenMenuChange: B }, 'vibe')),
                            e.length > 0 && e.push((0, d.jsx)('div', { className: tK().divider }, 'top-divider')),
                            e
                        );
                    }),
                    ep = (0, y.L)(() => {
                        let e = [];
                        if (O) {
                            var t, i, a, n, r;
                            // for PulseSync: BEGIN download-to-file action in the wave track menu
                            (e.push(
                                (0, d.jsx)(
                                    tC.Dr,
                                    {
                                        onClick: pulseSyncDownloadTrackToFile,
                                        disabled: !O.id,
                                        icon: (0, d.jsx)(Y.I, { variant: 'download', size: 'xxs' }),
                                        children: 'Скачать в файл',
                                    },
                                    'download-to-file',
                                ),
                            ),
                                e.push((0, d.jsx)(tk.$, { track: O }, 'add-to-playlist')),
                                e_ && O.isNonUserGenerated && e.push((0, d.jsx)(tM.H, { shareLink: ec, entityMeta: e_ }, 'share')),
                                O.isNonUserGenerated &&
                                    O.isTrackMusic &&
                                    (null == (t = O.mainAlbum) ? void 0 : t.id) &&
                                    e.push((0, d.jsx)(tB, { trackId: O.id, albumId: O.mainAlbum.id }, 'navigate-to-track')),
                                O.isNonUserGenerated &&
                                    (O.albums.length || O.mainAlbum) &&
                                    (null == (i = O.mainAlbum) ? void 0 : i.url) &&
                                    e.push((0, d.jsx)(tO.f, { albumUrl: O.mainAlbum.url, albumType: O.mainAlbum.type, trackType: O.type }, 'navigate-to-album')),
                                O.isNonUserGenerated &&
                                    (null == (a = O.artists) ? void 0 : a.length) &&
                                    ((null == (n = O.mainAlbum) ? void 0 : n.isAudiobook) ||
                                        (null == (r = O.mainAlbum) ? void 0 : r.isAlbum) ||
                                        O.isTrackAudiobook ||
                                        O.isTrackMusic) &&
                                    e.push((0, d.jsx)(tT.o, { artists: O.artists }, 'navigate-to-artist')));
                            // for PulseSync: END download-to-file action in the wave track menu
                        }
                        return (e.length > 0 && e.unshift((0, d.jsx)('div', { className: tK().divider }, 'bottom-divider')), e);
                    });
                return u.isGenerativeContext
                    ? (0, d.jsx)(C.$, {
                          className: l,
                          radius: 'round',
                          size: 'xxxs',
                          variant: 'text',
                          withRipple: !1,
                          onClick: V,
                          'aria-label': j({ id: 'player-actions.audio-quality' }),
                          icon: (0, d.jsx)(Y.I, { variant: 'settings', size: 'xs' }),
                      })
                    : (0, d.jsxs)(tC.W1, {
                          placement: 'top',
                          offsetOptions: 10,
                          open: k,
                          onOpenChange: B,
                          variant: 'text',
                          icon: (0, d.jsx)(Y.I, { variant: 'more', size: 'xs' }),
                          radius: 'xxxl',
                          className: l,
                          ariaLabel: j({ id: 'interface-actions.context-menu' }),
                          containerDataTestId: g.e8.player.VIBE_CONTEXT_MENU,
                          'data-test-id': g.e8.player.VIBE_CONTEXT_MENU_BUTTON,
                          children: [
                              ev,
                              eb,
                              u.canShuffle &&
                                  (0, d.jsx)(tC.Dr, {
                                      'aria-label': j({ id: 'player-actions.shuffle' }),
                                      onClick: L,
                                      icon: (0, d.jsx)(Y.I, { variant: 'shuffle', size: 'xxs' }),
                                      className: (0, c.$)({ [tK().item_active]: J }),
                                      isSubMenu: !0,
                                      'data-test-id': g.e8.player.VIBE_CONTEXT_MENU_SHUFFLE_ITEM,
                                      children: (0, d.jsx)(p.A, { id: 'player-actions.mix' }),
                                  }),
                              u.canChangeRepeatMode &&
                                  (0, d.jsx)(tC.Dr, {
                                      'aria-label': (0, tj.z)(u.repeatMode, j),
                                      onClick: W,
                                      icon: (0, d.jsx)(Y.I, { variant: Z, size: 'xxs' }),
                                      className: (0, c.$)({ [tK().item_active]: Q }),
                                      isSubMenu: !0,
                                      'data-test-id': g.e8.player.VIBE_CONTEXT_MENU_REPEAT_ITEM,
                                      children: (0, d.jsx)(p.A, { id: 'player-actions.repeat-action' }),
                                  }),
                              !u.isGenerativeContext &&
                                  !_.isAdvertShown &&
                                  // for PulseSync: BEGIN include fallback results in wave synchronized lyrics availability
                                  ((null == O ? void 0 : O.isSyncLyricsAvailable) ||
                                      (null == O ? void 0 : O.isSyncLyricsAvailableWithOfflineFeature) ||
                                      (null == O ? void 0 : O.hasSyncLyrics) ||
                                      ((null == O ? void 0 : O.id) && m.syncLyrics.hasLyricsForTrack(O.id))) &&
                                  // for PulseSync: END include fallback results in wave synchronized lyrics availability
                                  (0, d.jsx)(tC.Dr, {
                                      'aria-label': em,
                                      onClick: R,
                                      icon: (0, d.jsx)(Y.I, { variant: 'syncLyrics', size: 'xxs' }),
                                      className: (0, c.$)({ [tK().item_active]: ee }),
                                      'data-test-id': g.e8.player.VIBE_CONTEXT_MENU_SYNC_LYRICS_ITEM,
                                      children: (0, d.jsx)(p.A, { id: 'interface-actions.open-lyrics' }),
                                  }),
                              !u.isGenerativeContext && !_.isAdvertShown && (0, d.jsx)(tz, { onCloseMenu: w }),
                              (0, d.jsx)(tC.Dr, {
                                  onClick: M,
                                  icon: (0, d.jsx)(Y.I, { variant: 'settings', size: 'xxs' }),
                                  'data-test-id': g.e8.player.VIBE_CONTEXT_MENU_AUDIO_QUALITY_ITEM,
                                  children: (0, d.jsx)(p.A, { id: 'player-actions.audio-quality' }),
                              }),
                              ep,
                          ],
                      });
            });
            var tY = i(10508),
                tq = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (n && (n += ' '), (n += a));
                                            else for (i in t) t[i] && (n && (n += ' '), (n += i));
                                        return n;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => n }));
                        let n = a;
                    },
                    973: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: 'MoGQRtOtKDQCJc5HZNLw',
                            marquee: 'eYOrGFuz5P6VSNQ_IgdM',
                            content: 'eY9nVaCYr1nX7vFMBaaD',
                            content_static: 'NuV8xfAyyQwIpvv3W2Gy',
                            measure: 'CapcUKn78Iu2s1O6joam',
                        };
                    },
                    1269: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 });
                        var a = i(810),
                            n = (function (e) {
                                return e && 'object' == typeof e && 'default' in e ? e : { default: e };
                            })(a);
                        (!(function (e) {
                            if (!e) return;
                            let t = document.createElement('style');
                            (t.setAttribute('type', 'text/css'), (t.innerHTML = e), document.head.appendChild(t));
                        })(
                            '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}',
                        ),
                            (t.default = a.forwardRef(function (e, t) {
                                let {
                                        style: i = {},
                                        className: r = '',
                                        autoFill: s = !1,
                                        play: o = !0,
                                        pauseOnHover: l = !1,
                                        pauseOnClick: d = !1,
                                        direction: c = 'left',
                                        speed: u = 50,
                                        delay: _ = 0,
                                        loop: m = 0,
                                        gradient: b = !1,
                                        gradientColor: v = 'white',
                                        gradientWidth: p = 200,
                                        onFinish: h,
                                        onCycleComplete: g,
                                        onMount: x,
                                        children: f,
                                    } = e,
                                    [A, y] = a.useState(0),
                                    [C, j] = a.useState(0),
                                    [N, P] = a.useState(1),
                                    [T, k] = a.useState(!1),
                                    S = a.useRef(null),
                                    w = t || S,
                                    I = a.useRef(null),
                                    E = a.useCallback(() => {
                                        if (I.current && w.current) {
                                            let e = w.current.getBoundingClientRect(),
                                                t = I.current.getBoundingClientRect(),
                                                i = e.width,
                                                a = t.width;
                                            (('up' === c || 'down' === c) && ((i = e.height), (a = t.height)),
                                                s && i && a ? P(a < i ? Math.ceil(i / a) : 1) : P(1),
                                                y(i),
                                                j(a));
                                        }
                                    }, [s, w, c]);
                                (a.useEffect(() => {
                                    if (T && (E(), I.current && w.current)) {
                                        let e = new ResizeObserver(() => E());
                                        return (
                                            e.observe(w.current),
                                            e.observe(I.current),
                                            () => {
                                                e && e.disconnect();
                                            }
                                        );
                                    }
                                }, [E, w, T]),
                                    a.useEffect(() => {
                                        E();
                                    }, [E, f]),
                                    a.useEffect(() => {
                                        k(!0);
                                    }, []),
                                    a.useEffect(() => {
                                        'function' == typeof x && x();
                                    }, []));
                                let O = a.useMemo(() => (s ? (C * N) / u : C < A ? A / u : C / u), [s, A, C, N, u]),
                                    B = a.useMemo(
                                        () =>
                                            Object.assign(Object.assign({}, i), {
                                                '--pause-on-hover': !o || l ? 'paused' : 'running',
                                                '--pause-on-click': !o || (l && !d) || d ? 'paused' : 'running',
                                                '--width': 'up' === c || 'down' === c ? '100vh' : '100%',
                                                '--transform': 'up' === c ? 'rotate(-90deg)' : 'down' === c ? 'rotate(90deg)' : 'none',
                                            }),
                                        [i, o, l, d, c],
                                    ),
                                    M = a.useMemo(() => ({ '--gradient-color': v, '--gradient-width': 'number' == typeof p ? ''.concat(p, 'px') : p }), [v, p]),
                                    R = a.useMemo(
                                        () => ({
                                            '--play': o ? 'running' : 'paused',
                                            '--direction': 'left' === c ? 'normal' : 'reverse',
                                            '--duration': ''.concat(O, 's'),
                                            '--delay': ''.concat(_, 's'),
                                            '--iteration-count': m ? ''.concat(m) : 'infinite',
                                            '--min-width': s ? 'auto' : '100%',
                                        }),
                                        [o, c, O, _, m, s],
                                    ),
                                    L = a.useMemo(() => ({ '--transform': 'up' === c ? 'rotate(90deg)' : 'down' === c ? 'rotate(-90deg)' : 'none' }), [c]),
                                    W = a.useCallback(
                                        (e) =>
                                            [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                                                n.default.createElement(
                                                    a.Fragment,
                                                    { key: t },
                                                    a.Children.map(f, (e) => n.default.createElement('div', { style: L, className: 'rfm-child' }, e)),
                                                ),
                                            ),
                                        [L, f],
                                    );
                                return T
                                    ? n.default.createElement(
                                          'div',
                                          { ref: w, style: B, className: 'rfm-marquee-container ' + r },
                                          b && n.default.createElement('div', { style: M, className: 'rfm-overlay' }),
                                          n.default.createElement(
                                              'div',
                                              { className: 'rfm-marquee', style: R, onAnimationIteration: g, onAnimationEnd: h },
                                              n.default.createElement(
                                                  'div',
                                                  { className: 'rfm-initial-child-container', ref: I },
                                                  a.Children.map(f, (e) => n.default.createElement('div', { style: L, className: 'rfm-child' }, e)),
                                              ),
                                              W(N - 1),
                                          ),
                                          n.default.createElement('div', { className: 'rfm-marquee', style: R }, W(N)),
                                      )
                                    : null;
                            })));
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var n = null;
                            if ((void 0 !== a && (n = '' + a), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var r in ((a = {}), t)) 'key' !== r && (a[r] = t[r]);
                            else a = t;
                            return { $$typeof: i, type: e, key: n, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7497: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useReturnValue = void 0), (t.useReturnValue = (e) => e()));
                    },
                    7956: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.OverflowMarquee = void 0));
                        let n = i(4377),
                            r = i(5881),
                            s = i(810),
                            o = a(i(1269)),
                            l = i(7497),
                            d = a(i(973));
                        t.OverflowMarquee = (e) => {
                            let {
                                    children: t,
                                    className: i,
                                    contentClassName: a,
                                    scrollingClassName: c,
                                    speed: u = 50,
                                    delay: _ = 0,
                                    pauseOnHover: m = !0,
                                    pauseOnClick: b = !1,
                                    loop: v = 0,
                                    direction: p = 'left',
                                    autoFill: h = !1,
                                    gradient: g = !1,
                                    gradientColor: x,
                                    gradientWidth: f,
                                    gap: A = 12,
                                    ...y
                                } = e,
                                C = (0, s.useRef)(null),
                                j = (0, s.useRef)(null),
                                [N, P] = (0, s.useState)(!1),
                                [T, k] = (0, s.useState)(!1);
                            ((0, s.useEffect)(() => {
                                let e = window.matchMedia('(prefers-reduced-motion: reduce)'),
                                    t = () => {
                                        k(e.matches);
                                    };
                                return (
                                    t(),
                                    e.addEventListener('change', t),
                                    () => {
                                        e.removeEventListener('change', t);
                                    }
                                );
                            }, []),
                                (0, s.useEffect)(() => {
                                    let e = C.current,
                                        t = j.current;
                                    if (null === e || null === t) return;
                                    let i = () => {
                                        let i = e.clientWidth,
                                            a = t.scrollWidth;
                                        if (0 === i || 0 === a) return void P(!1);
                                        P(a > i);
                                    };
                                    if ((i(), 'undefined' == typeof ResizeObserver)) return;
                                    let a = new ResizeObserver(i);
                                    return (
                                        a.observe(e),
                                        a.observe(t),
                                        () => {
                                            a.disconnect();
                                        }
                                    );
                                }, []));
                            let S = N && !T,
                                w = S && void 0 !== A ? { marginInlineEnd: ''.concat(A, 'px') } : void 0,
                                I = (0, l.useReturnValue)(() =>
                                    S
                                        ? (0, n.jsx)(o.default, {
                                              className: d.default.marquee,
                                              play: S,
                                              speed: u,
                                              delay: _ / 1e3,
                                              loop: v,
                                              direction: p,
                                              autoFill: h,
                                              pauseOnHover: m,
                                              pauseOnClick: b,
                                              gradient: g,
                                              gradientColor: x,
                                              gradientWidth: f,
                                              children: (0, n.jsx)('div', { className: (0, r.clsx)(d.default.content, a), style: w, children: t }),
                                          })
                                        : (0, n.jsx)('div', { className: (0, r.clsx)(d.default.content, d.default.content_static, a), style: w, children: t }),
                                );
                            return (0, n.jsxs)('div', {
                                ref: C,
                                className: (0, r.clsx)(d.default.root, i, S && c),
                                ...y,
                                children: [
                                    (0, n.jsx)('div', { ref: j, className: (0, r.clsx)(d.default.measure, d.default.content, a), 'aria-hidden': !0, children: t }),
                                    I,
                                ],
                            });
                        };
                    },
                    810: (e) => {
                        e.exports = b;
                    },
                },
                tX = {};
            function t$(e) {
                var t = tX[e];
                if (void 0 !== t) return t.exports;
                var i = (tX[e] = { exports: {} });
                return (tq[e].call(i.exports, i, i.exports, t$), i.exports);
            }
            ((t$.d = (e, t) => {
                for (var i in t) t$.o(t, i) && !t$.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (t$.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (t$.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var tZ = {};
            (() => {
                (Object.defineProperty(tZ, 'X', { value: !0 }), (tZ.W = void 0));
                var e = t$(7956);
                Object.defineProperty(tZ, 'W', {
                    enumerable: !0,
                    get: function () {
                        return e.OverflowMarquee;
                    },
                });
            })();
            var tQ = tZ.W;
            tZ.X;
            var tJ = i(9794),
                t0 = i(70758),
                t1 = i(91907),
                t2 = i(68215),
                t8 = i(32652),
                t5 = i(24833),
                t6 = i.n(t5);
            let t9 = (0, u.PA)(() => {
                var e, t, i, a, n;
                let {
                        experiments: r,
                        sonataState: s,
                        advert: o,
                        settings: { isMobile: l },
                    } = (0, U.g)(),
                    { formatMessage: u } = (0, v.A)(),
                    _ = (0, ts.e)(),
                    b = s.entityMeta,
                    p = !s.isPlaying && s.isVibeContext,
                    h = null != (i = s.position) ? i : 0,
                    x = null != (a = s.duration) ? a : 0,
                    [A, C] = (0, m.useState)(null),
                    j = (0, m.useRef)(!1),
                    { state: N, toggleTrue: P, toggleFalse: T } = (0, eo.e)(!1),
                    k = !!x && !s.isGenerativeContext && N,
                    S = j.current && null != A ? A : h,
                    w = x > 0 ? (Math.min(S, x) / x) * 100 : 0,
                    I = (0, t1.E)(Math.round(S), Math.round(x)),
                    E = (0, t1.E)(Math.round(x), Math.round(x)),
                    O = (0, t2.P)(S),
                    B = (0, t2.P)(x),
                    M = {
                        '--track-progress': ''.concat(w, '%'),
                        '--progress-transition-duration': ((e) => {
                            if ('default' !== e && void 0 !== e) return 'on1' === e ? '150ms' : '0ms';
                        })(null == (e = r.getExperiment(z.z.WebNextMainPlayerAnimation)) ? void 0 : e.group),
                        '--progress-transition': j.current ? 'none' : void 0,
                    },
                    R = (0, m.useMemo)(
                        () =>
                            (0, tY.A)(() => {
                                T();
                            }, 1e3),
                        [T],
                    ),
                    L = (0, f.c)((e, t) => {
                        o.isAdvertShown || ((j.current = !t), l && (P(), R.cancel(), R()), t ? null == _ || _.setProgress(e) : C(e));
                    }),
                    W = (0, y.L)(() => {
                        if (s.isGenerativeContext)
                            return (null == b ? void 0 : b.title)
                                ? (0, d.jsxs)(d.Fragment, {
                                      children: [
                                          (0, d.jsx)('span', {
                                              className: t6().generativeIcon,
                                              children: (0, d.jsx)(Y.I, { size: 'xs', variant: 'infinity', 'data-test-id': g.e8.player.VIBE_PLAYERBAR_NEUROMUSIC_ICON }),
                                          }),
                                          (0, d.jsx)('span', { className: t6().generativeTitle, children: b.title }),
                                      ],
                                  })
                                : (0, d.jsx)(Y.I, { size: 'xs', variant: 'infinity', 'data-test-id': g.e8.player.VIBE_PLAYERBAR_NEUROMUSIC_ICON });
                        let e = [],
                            t = [];
                        return (
                            b && (e.push((0, t0.X)(b.artists)), e.push('—')),
                            (null == b ? void 0 : b.title) && t.push(b.title),
                            !(null == b ? void 0 : b.isRemoved) && (null == b ? void 0 : b.version) && t.push('('.concat(b.version, ')')),
                            (0, d.jsxs)(d.Fragment, {
                                children: [e.length > 0 && p && (0, d.jsx)('span', { className: t6().artists, children: e.join(' ') }), t.join(' ')],
                            })
                        );
                    });
                return (0, d.jsx)('div', {
                    className: t6().root,
                    style: M,
                    children: (0, d.jsxs)('div', {
                        className: (0, c.$)(t6().center, {
                            [t6().center_withExplicitMark]: null == b ? void 0 : b.explicitDisclaimer,
                            [t6().center_withExplicitMark_playing]: s.isPlaying,
                            [t6().center_withoutExplicitMark]: !(null == b ? void 0 : b.explicitDisclaimer),
                            [t6().center_withoutExplicitMark_playing]: s.isPlaying,
                            [t6().center_withTimecode]: k,
                            [t6().center_active]: !s.isGenerativeContext,
                        }),
                        onMouseEnter: P,
                        onMouseLeave: T,
                        'data-test-id': g.e8.player.VIBE_PLAYERBAR_TIMECODE_SLIDER,
                        children: [
                            (0, d.jsx)(
                                tQ,
                                {
                                    className: t6().trackName,
                                    scrollingClassName: t6().scrollingTrackName,
                                    contentClassName: t6().trackNameText,
                                    pauseOnHover: !1,
                                    speed: 35,
                                    gap: 32,
                                    'data-test-id': g.e8.player.VIBE_PLAYERBAR_TRACK_NAME,
                                    children: W,
                                },
                                ''.concat(null != (n = null == (t = s.entityMeta) ? void 0 : t.idWithContext) ? n : 'default', '-').concat(p),
                            ),
                            (null == b ? void 0 : b.explicitDisclaimer) &&
                                (0, d.jsx)(t8.N, {
                                    containerClassName: t6().explicitMarkContainer,
                                    getDescriptionTexts: b.getDescriptionTexts,
                                    size: 'xxxs',
                                    variant: b.explicitDisclaimer,
                                    className: t6().explicitMark,
                                    trackId: b.id,
                                }),
                            !s.isGenerativeContext &&
                                (0, d.jsx)('span', {
                                    className: t6().timecodeOverlay,
                                    'aria-hidden': !0,
                                    'data-test-id': g.e8.player.VIBE_PLAYERBAR_TIMECODE,
                                    children: ''.concat(I, ' / ').concat(E),
                                }),
                            !s.isGenerativeContext &&
                                (0, d.jsx)(tJ.A, {
                                    className: (0, c.$)(t6().slider, { [t6().slider_active]: !s.isGenerativeContext }),
                                    'aria-label': u({ id: 'player-actions.timecode-control' }),
                                    'aria-valuetext': ''.concat(O, ' / ').concat(B),
                                    disabled: !b || o.isAdvertShown,
                                    onChange: L,
                                    onFocus: P,
                                    onBlur: T,
                                    maxValue: Math.round(x),
                                    mode: 'deferred',
                                    value: Math.round(S),
                                    showThumbVariant: 'never',
                                    trackSize: 's',
                                    thumbSize: 's',
                                }),
                        ],
                    }),
                });
            });
            var t4 = i(56530),
                t3 = i(94860),
                t7 = i(9505),
                ie = i.n(t7);
            // for PulseSync: BEGIN Yandex Station device picker and live wave-setting subscription
            const pulseSyncNormalizeStationText = (e) =>
                    String(e ?? '')
                        .trim()
                        .toLowerCase()
                        .replace(/\s+/g, ' '),
                pulseSyncStationNamesMatch = (e, t) => {
                    const a = pulseSyncNormalizeStationText(e),
                        i = pulseSyncNormalizeStationText(t);
                    return !!a && !!i && (a.includes(i) || i.includes(a));
                },
                pulseSyncFindLocalStation = (e, t, a) => {
                    const i = pulseSyncNormalizeStationText(e?.configuration?.glagolDeviceId);
                    if (i) {
                        const e = t.find((e) => !a.has(e) && pulseSyncNormalizeStationText(e?.deviceId) === i);
                        if (e) return e;
                    }
                    const n = pulseSyncNormalizeStationText(e?.configuration?.platform);
                    return n
                        ? (t.find(
                              (t) => !a.has(t) && pulseSyncNormalizeStationText(t?.platform) === n && pulseSyncStationNamesMatch(e?.name, t?.name ?? t?.instanceName),
                          ) ?? null)
                        : null;
                },
                pulseSyncBuildCastDeviceRows = (e = [], t = []) => {
                    const a = new Set();
                    return e.map((e) => {
                        const i = pulseSyncFindLocalStation(e, t, a);
                        return (
                            i && a.add(i),
                            {
                                accountSpeaker: e,
                                localSpeaker: i ?? void 0,
                                canUseLocal: !!i,
                            }
                        );
                    });
                },
                pulseSyncGetCastDevicePlatform = (e) =>
                    pulseSyncNormalizeStationText(
                        e?.accountSpeaker?.configuration?.platform ??
                            e?.accountSpeaker?.configuration?.quasarInfo?.platform ??
                            e?.localSpeaker?.platform ??
                            e?.localSpeaker?.txt?.platform,
                    ),
                pulseSyncGetCastDeviceIconKind = (e) => {
                    if (e?.isThisDevice) return 'computer';
                    const t = pulseSyncGetCastDevicePlatform(e);
                    const a = {
                        yandexstation: 'station',
                        yandexstation_2: 'station',
                        yandexmidi: 'station2',
                        yandexmini: 'mini',
                        yandexmini_2: 'mini',
                        yandexmicro: 'mini',
                        yandexmodule: 'module',
                        yandexmodule_2: 'module',
                        yandex_tv: 'tv',
                        saturn: 'chiron',
                        cucumber: 'cucumber',
                        bergamot: 'mini',
                        plum: 'mini',
                        orion: 'station',
                        monet: 'tv',
                        magritte: 'tv',
                        goya: 'tv',
                    };
                    if (a[t]) return a[t];
                    if (/computer|desktop|windows|win32|darwin|mac|linux|electron/.test(t)) return 'computer';
                    if (/chiron/.test(t)) return 'chiron';
                    if (/cucumber/.test(t)) return 'cucumber';
                    if (/mini/.test(t)) return 'mini';
                    if (/station[_-]?2|station2|yandexstation[_-]?2|yandex_station[_-]?2/.test(t)) return 'station2';
                    return 'station';
                },
                pulseSyncCastDeviceIconPath = {
                    computer:
                        'm14.6,5c1.1024,0 2.01,-0.0016 2.7373,0.0772 0.7461,0.0808 1.4215,0.2556 2.0147,0.6865 0.3394,0.2466 0.6381,0.5453 0.8847,0.8848 0.431,0.5931 0.6057,1.2686 0.6866,2.0146 0.0787,0.7273 0.0771,1.6349 0.0771,2.7373v0.1992c0,1.1024 0.0016,2.01 -0.0771,2.7373 -0.0809,0.7461 -0.2556,1.4215 -0.6866,2.0147 -0.1727,0.2377 -0.3718,0.4545 -0.5918,0.6484h3.3555v2h-22v-2h3.3555c-0.2199,-0.1939 -0.419,-0.4107 -0.5918,-0.6484 -0.4309,-0.5932 -0.6057,-1.2686 -0.6865,-2.0147 -0.0787,-0.7273 -0.0772,-1.6349 -0.0772,-2.7373v-0.1992c0,-1.1024 -0.0016,-2.01 0.0772,-2.7373 0.0808,-0.7461 0.2556,-1.4215 0.6865,-2.0146 0.2466,-0.3394 0.5453,-0.6381 0.8848,-0.8848 0.5932,-0.4309 1.2686,-0.6057 2.0146,-0.6865 0.7273,-0.0787 1.6349,-0.0772 2.7373,-0.0772h5.1992zM9.4008,7c-1.1472,0 -1.9278,0.001 -2.5225,0.0654 -0.5758,0.0624 -0.8583,0.1744 -1.0537,0.3164 -0.1697,0.1233 -0.3191,0.2727 -0.4424,0.4424 -0.142,0.1954 -0.254,0.4779 -0.3164,1.0537 -0.0644,0.5946 -0.0654,1.3754 -0.0654,2.5225v0.1992c0,1.1471 0.001,1.9278 0.0654,2.5225 0.0624,0.5758 0.1744,0.8583 0.3164,1.0537 0.1233,0.1697 0.2727,0.3191 0.4424,0.4424 0.1954,0.1419 0.4779,0.254 1.0537,0.3164 0.5947,0.0644 1.3753,0.0654 2.5225,0.0654h5.1992c1.1472,0 1.9278,-0.001 2.5225,-0.0654 0.5758,-0.0624 0.8583,-0.1745 1.0537,-0.3164 0.1697,-0.1234 0.3191,-0.2727 0.4424,-0.4424 0.1419,-0.1954 0.254,-0.4779 0.3164,-1.0537 0.0644,-0.5947 0.0654,-1.3754 0.0654,-2.5225v-0.1992c0,-1.1471 -0.001,-1.9278 -0.0654,-2.5225 -0.0624,-0.5758 -0.1745,-0.8583 -0.3164,-1.0537 -0.1233,-0.1697 -0.2727,-0.3191 -0.4424,-0.4424 -0.1954,-0.142 -0.4779,-0.254 -1.0537,-0.3164 -0.5947,-0.0644 -1.3753,-0.0654 -2.5225,-0.0654h-5.1992z',
                    module: 'M15.16 3.75L1 11.3l7.84 4.25L23 8l-7.84-4.25zM1 12.95v3.3l7.84 4.25L23 12.95v-3.3L8.84 17.2l-2.6-1.41V17L3.44 15.5v-1.22L1 12.95z',
                    tv: 'M19.6 6.4v7.2H4.4V6.4h15.2zM2 4h2.4h15.2H22v2.4v7.2V16h-2.4H4.4H2v-2.4v-7.2V4zm5 16.2h10v-2.4H7v2.4z',
                    hub: 'M12 5.13l6.6 4.4v9.07h-4.35v-6.1h-4.5v6.1H5.4V9.53l6.6-4.4zM9.75 21H5.4H3v-2.4V8.25l9-6l9 6V18.6V21h-2.4h-4.35h-4.5z',
                    station:
                        'm16.454,3.4996c0,1.23 -1.9942,2.2271 -4.4542,2.2271 -2.46,0 -4.4542,-0.9971 -4.4542,-2.2271s1.9942,-2.2271 4.4542,-2.2271c2.46,0 4.4542,0.9971 4.4542,2.2271zM18.7659,18.3616c0.2514,-0.4236 0.2331,-1.0072 0.2331,-2.236v-10.066c0,-0.1388 -0.0361,-0.2752 -0.1048,-0.3958s-0.1675,-0.2213 -0.2868,-0.2921c-0.1194,-0.0708 -0.2551,-0.1094 -0.3939,-0.112 -0.1387,-0.0025 -0.2758,0.0311 -0.3976,0.0975l-0.0704,0.0384c-3.0073,1.6403 -4.3768,2.4605 -5.7462,2.4605 -1.3695,0 -2.739,-0.8202 -5.7463,-2.4605l-0.0704,-0.0384c-0.1218,-0.0665 -0.2589,-0.1001 -0.3976,-0.0975 -0.1388,0.0025 -0.2745,0.0411 -0.3938,0.112 -0.1193,0.0708 -0.2182,0.1715 -0.2869,0.2921 -0.0687,0.1206 -0.1048,0.257 -0.1048,0.3958v10.066c0,1.229 -0.0183,1.8126 0.2331,2.2361 0.2514,0.4235 0.7725,0.6869 1.8514,1.2754 2.5725,1.4032 3.7439,2.1048 4.9153,2.1047 1.1712,0 2.3425,-0.7015 4.9142,-2.1043 1.0795,-0.5888 1.6008,-0.8523 1.8523,-1.2759z',
                    station2:
                        'm8.4897,3.8078c-0.4164,0.1864 -0.7401,0.3313 -0.9898,0.4862 -0.5817,0.3609 -0.0566,0.6464 0.2313,0.7626 3.6409,1.4686 5.111,2.0123 6.4594,1.7962 0.7603,-0.1218 1.4819,-0.4853 2.5322,-1.0608 0.6573,-0.3602 0.9884,-0.5985 0.1269,-1.0421 -0.312,-0.1607 -0.7566,-0.3262 -1.3895,-0.5574 -4.3376,-1.5844 -4.807,-1.3701 -6.4444,-0.6224 -0.1744,0.0796 -0.3623,0.1644 -0.5261,0.2377h-0zM16.7201,20.8098c1.8489,-0.8276 2.2799,-1.0205 2.2799,-3.2928v-10.022c0,-0.1382 -0.0473,-0.274 -0.1373,-0.3941s-0.2195,-0.2203 -0.3759,-0.2908c-0.1564,-0.0705 -0.3343,-0.1089 -0.5161,-0.1115 -0.1819,-0.0025 -0.3614,0.031 -0.5211,0.0971l-0.0923,0.0382c-1.502,0.842 -2.3794,1.3667 -3.3171,1.5181 -1.4591,0.2356 -3.0642,-0.433 -7.3956,-2.2173l-0.0923,-0.0382c-0.1597,-0.0662 -0.3392,-0.0996 -0.5211,-0.0971 -0.1819,0.0025 -0.3597,0.0409 -0.5161,0.1115 -0.1564,0.0705 -0.2859,0.1708 -0.3759,0.2909 -0.09,0.1201 -0.1373,0.2559 -0.1373,0.3941v10.022c0,0.1362 -0.0005,0.2648 -0.001,0.3863 -0.0085,2.0629 -0.0087,2.1084 2.7328,3.1098 5.5921,2.0427 6.1973,1.7663 8.3082,0.8024 0.0732,-0.0334 0.1483,-0.0677 0.2254,-0.1027 0.1597,-0.0725 0.3105,-0.14 0.4529,-0.2038z',
                    chiron: 'm8.4,3h-0.0557c-1.0775,-0 -1.9665,-0 -2.6817,0.0774 -0.7461,0.0808 -1.4206,0.2555 -2.0138,0.6865 -0.3396,0.2467 -0.6382,0.5454 -0.8849,0.8849 -0.431,0.5932 -0.6057,1.2677 -0.6865,2.0138 -0.0775,0.7151 -0.0775,1.6041 -0.0774,2.6817v1.3114c-0,1.0775 -0,1.9665 0.0774,2.6817 0.0808,0.7461 0.2555,1.4206 0.6865,2.0137 0.2467,0.3396 0.5454,0.6383 0.8849,0.885 0.4135,0.3004 0.8665,0.4763 1.3557,0.5826 0.0183,1.4667 0.1098,2.3134 0.5684,2.9447 0.185,0.2546 0.409,0.4786 0.6637,0.6637 0.7886,0.5729 1.9135,0.5729 4.1634,0.5729h3.2c2.2498,0 3.3748,0 4.1634,-0.5729 0.2546,-0.1851 0.4786,-0.4091 0.6637,-0.6637 0.4586,-0.6313 0.5501,-1.478 0.5683,-2.9447 0.4893,-0.1063 0.9423,-0.2822 1.3557,-0.5826 0.3396,-0.2467 0.6383,-0.5454 0.885,-0.885 0.4309,-0.5931 0.6056,-1.2676 0.6865,-2.0137 0.0774,-0.7152 0.0774,-1.6042 0.0774,-2.6817v-1.3114c0,-1.0775 0,-1.9665 -0.0774,-2.6817 -0.0809,-0.7461 -0.2556,-1.4206 -0.6865,-2.0138 -0.2467,-0.3396 -0.5454,-0.6382 -0.885,-0.8849 -0.5931,-0.431 -1.2676,-0.6057 -2.0137,-0.6865 -0.7152,-0.0775 -1.6042,-0.0775 -2.6817,-0.0774h-7.2557zM15.665,15c1.1118,-0.0001 1.8736,-0.0026 2.4569,-0.0658 0.576,-0.0624 0.8583,-0.1742 1.0537,-0.3162 0.1698,-0.1233 0.3191,-0.2726 0.4424,-0.4424 0.142,-0.1954 0.2538,-0.4777 0.3162,-1.0537 0.0644,-0.5946 0.0658,-1.3747 0.0658,-2.5219v-1.2c0,-1.1472 -0.0014,-1.9273 -0.0658,-2.5219 -0.0624,-0.576 -0.1742,-0.8582 -0.3162,-1.0536 -0.1233,-0.1698 -0.2726,-0.3191 -0.4424,-0.4425 -0.1954,-0.142 -0.4777,-0.2538 -1.0537,-0.3162 -0.5946,-0.0644 -1.3747,-0.0658 -2.5219,-0.0658h-7.2c-1.1472,0 -1.9273,0.0014 -2.5219,0.0658 -0.576,0.0624 -0.8582,0.1742 -1.0536,0.3162 -0.1698,0.1234 -0.3191,0.2727 -0.4425,0.4425 -0.142,0.1954 -0.2538,0.4777 -0.3162,1.0536 -0.0644,0.5947 -0.0658,1.3747 -0.0658,2.5219v1.2c0,1.1472 0.0014,1.9273 0.0658,2.5219 0.0624,0.576 0.1742,0.8583 0.3162,1.0537 0.1234,0.1698 0.2727,0.3191 0.4425,0.4424 0.1954,0.142 0.4777,0.2538 1.0536,0.3162 0.5834,0.0632 1.3452,0.0657 2.457,0.0658h7.33z',
                    cucumber:
                        'm8.2522,6.6265 l2.4062,1.2031c0.8445,0.4223 1.8387,0.4223 2.6832,0l2.4062,-1.2031c0.5159,-0.258 0.5159,-0.9942 0,-1.2522l-2.4062,-1.2031c-0.8445,-0.4223 -1.8387,-0.4223 -2.6832,0l-2.4062,1.2031c-0.5159,0.258 -0.5159,0.9942 0,1.2522zM12,10.2496c-1.4143,0 -3.3087,-0.7801 -5.6832,-2.3403 -0.1386,-0.0911 -0.3009,-0.1396 -0.4668,-0.1396 -0.4694,0 -0.85,0.3806 -0.85,0.85v6.6321c0,0.8018 0.3845,1.5549 1.0339,2.025 2.5073,1.8153 4.4961,2.7229 5.9661,2.7229s3.4587,-0.9076 5.9661,-2.7229c0.6494,-0.4701 1.0339,-1.2232 1.0339,-2.025v-6.632c0,-0.1659 -0.0485,-0.3282 -0.1396,-0.4668 -0.2578,-0.3923 -0.7849,-0.5014 -1.1772,-0.2436 -2.3745,1.5602 -4.2689,2.3403 -5.6832,2.3403z',
                    mini: 'm17.939,8.0749c0,1.64 -2.659,2.9695 -5.939,2.9695 -3.2799,0 -5.9389,-1.3295 -5.9389,-2.9695s2.6589,-2.9695 5.9389,-2.9695c3.28,0 5.939,1.3295 5.939,2.9695zM19.8807,11.0635c0.0781,0.1264 0.1194,0.272 0.1194,0.4206v4.3451c0,2.2093 -3.5817,4 -7.9999,4 -4.4183,0 -8.0001,-1.7908 -8.0001,-4v-4.3451c-0.0002,-0.1486 0.0411,-0.2944 0.1191,-0.4208 0.0781,-0.1265 0.1898,-0.2287 0.3227,-0.2952s0.2817,-0.0946 0.4298,-0.0813c0.148,0.0134 0.2894,0.0678 0.4082,0.1571 2.005,1.2692 4.3492,1.8975 6.7203,1.8011 2.371,0.0964 4.7151,-0.5319 6.7201,-1.8011 0.1189,-0.0891 0.2602,-0.1433 0.4081,-0.1566 0.148,-0.0133 0.2967,0.0148 0.4296,0.0813 0.1329,0.0664 0.2446,0.1686 0.3227,0.2949z',
                },
                pulseSyncRenderCastDeviceIcon = (e, t = '') =>
                    (0, d.jsx)('span', {
                        className: 'PulseSync_castPopoverItemIcon'.concat(t ? ' '.concat(t) : ''),
                        'aria-hidden': !0,
                        children: (0, d.jsx)('svg', {
                            width: '32',
                            height: '32',
                            viewBox: '0 0 24 24',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: (0, d.jsx)('path', {
                                d: pulseSyncCastDeviceIconPath[pulseSyncGetCastDeviceIconKind(e)] ?? pulseSyncCastDeviceIconPath.station,
                                fill: 'currentColor',
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                            }),
                        }),
                    }),
                pulseSyncGetActiveCastDeviceRow = (e, t) => (t ? e.find((e) => !e.isThisDevice && e.accountSpeaker?.id === t) : null),
                pulseSyncCastConnectDelay = (e) => new Promise((t) => setTimeout(t, e)),
                pulseSyncSelectYandexStationSpeaker = async (e) => {
                    let t = null;
                    for (let a = 0; a <= 3; a += 1) {
                        try {
                            if (
                                ((t = window.pulseSyncYandexStationCast?.activate
                                    ? await window.pulseSyncYandexStationCast.activate(e)
                                    : await window.desktopEvents?.invoke?.('YANDEX_STATION_SELECT_SPEAKER', e)),
                                t?.ok)
                            )
                                return t;
                        } catch (e) {
                            t = {
                                ok: !1,
                                error: e,
                            };
                        }
                        a < 3 && (await pulseSyncCastConnectDelay(600));
                    }
                    return (
                        t ?? {
                            ok: !1,
                        }
                    );
                },
                pulseSyncIsYandexStationCastEnabled = () => {
                    try {
                        return window.__pulseSyncYandexStationCastEnabled ?? window.ENABLE_YANDEX_STATION_CAST?.() ?? !0;
                    } catch (e) {
                        return !0;
                    }
                },
                pulseSyncApplyYandexStationState = (e, t) => {
                    const a = Array.isArray(e?.accountSpeakers) ? e.accountSpeakers : [],
                        i = Array.isArray(e?.localSpeakers) ? e.localSpeakers : [];
                    t.setActiveSpeakerId(e?.activeSpeaker?.accountSpeaker?.id ?? window.pulseSyncYandexStationCast?.activeSpeakerId ?? null);
                    t.setDeviceRows([
                        {
                            isThisDevice: !0,
                        },
                        ...pulseSyncBuildCastDeviceRows(a, i),
                    ]);
                    t.setDevicesLoaded(Boolean(e?.firstFlowCompleted));
                    t.setDevicesLoading(Boolean(e?.refreshing));
                },
                pulseSyncGetCastPopoverShift = (e) => {
                    const t = e?.getBoundingClientRect?.();
                    if (!t) return 0;
                    const a = 320,
                        i = 12,
                        n = window.innerWidth || document.documentElement?.clientWidth || a,
                        r = t.left + t.width / 2,
                        l = r - a / 2,
                        s = r + a / 2;
                    if (l < i) return i - l;
                    if (s > n - i) return n - i - s;
                    return 0;
                },
                pulseSyncWaveCastControl = (0, u.PA)((e) => {
                    let { buttonClassName: castButtonClassName, disabled: castDisabled } = e,
                        { formatMessage: castFormatMessage } = (0, v.A)(),
                        [castPopoverOpen, setCastPopoverOpen] = (0, m.useState)(!1),
                        [castPopoverMounted, setCastPopoverMounted] = (0, m.useState)(!1),
                        [castPopoverShift, setCastPopoverShift] = (0, m.useState)(0),
                        [castDeviceRows, setCastDeviceRows] = (0, m.useState)([]),
                        [castActiveSpeakerId, setCastActiveSpeakerId] = (0, m.useState)(window.pulseSyncYandexStationCast?.activeSpeakerId ?? null),
                        [castConnectingSpeakerId, setCastConnectingSpeakerId] = (0, m.useState)(null),
                        [castConnectionErrorSpeakerId, setCastConnectionErrorSpeakerId] = (0, m.useState)(null),
                        [castDevicesLoading, setCastDevicesLoading] = (0, m.useState)(!1),
                        [castDevicesLoaded, setCastDevicesLoaded] = (0, m.useState)(!1),
                        [castHoveredDeviceKey, setCastHoveredDeviceKey] = (0, m.useState)(null),
                        [castEnabled, setCastEnabled] = (0, m.useState)(pulseSyncIsYandexStationCastEnabled()),
                        castRootRef = (0, m.useRef)(null),
                        castCloseTimerRef = (0, m.useRef)(null),
                        loadCastDevices = (0, m.useCallback)(async () => {
                            if (!castEnabled) {
                                setCastDeviceRows([]);
                                setCastDevicesLoaded(!1);
                                setCastDevicesLoading(!1);
                                return;
                            }
                            try {
                                setCastDevicesLoading(!0);
                                const castState = await (window.desktopEvents?.invoke?.('YANDEX_STATION_STATE') ?? Promise.resolve(null));
                                pulseSyncApplyYandexStationState(castState, {
                                    setActiveSpeakerId: setCastActiveSpeakerId,
                                    setDeviceRows: setCastDeviceRows,
                                    setDevicesLoaded: setCastDevicesLoaded,
                                    setDevicesLoading: setCastDevicesLoading,
                                });
                            } catch (castError) {
                                console.warn('Failed to load Yandex Station cast devices', castError);
                                setCastDeviceRows([]);
                                setCastDevicesLoaded(!1);
                                setCastDevicesLoading(!1);
                            }
                        }, [castEnabled]),
                        closeCastPopover = (0, m.useCallback)(() => {
                            setCastPopoverOpen(!1);
                            clearTimeout(castCloseTimerRef.current);
                            castCloseTimerRef.current = setTimeout(() => {
                                setCastPopoverMounted(!1);
                                setCastHoveredDeviceKey(null);
                            }, 160);
                        }, []),
                        recalcCastPopoverShift = (0, m.useCallback)(() => {
                            setCastPopoverShift(pulseSyncGetCastPopoverShift(castRootRef.current));
                        }, []),
                        openCastPopover = (0, m.useCallback)(() => {
                            clearTimeout(castCloseTimerRef.current);
                            setCastPopoverMounted(!0);
                            requestAnimationFrame(() => {
                                recalcCastPopoverShift();
                                setCastPopoverOpen(!0);
                            });
                        }, [recalcCastPopoverShift]),
                        toggleCastPopover = (0, m.useCallback)(() => {
                            castPopoverOpen ? closeCastPopover() : openCastPopover();
                        }, [castPopoverOpen, closeCastPopover, openCastPopover]);
                    (0, m.useEffect)(() => {
                        void loadCastDevices();
                    }, [loadCastDevices]);
                    (0, m.useEffect)(() => {
                        const castStateHandler = (event, castState) => {
                            pulseSyncApplyYandexStationState(castState, {
                                setActiveSpeakerId: setCastActiveSpeakerId,
                                setDeviceRows: setCastDeviceRows,
                                setDevicesLoaded: setCastDevicesLoaded,
                                setDevicesLoading: setCastDevicesLoading,
                            });
                        };
                        const unsubscribeCastState = window.desktopEvents?.on?.('YANDEX_STATION_STATE', castStateHandler);
                        return () => {
                            'function' == typeof unsubscribeCastState && unsubscribeCastState();
                        };
                    }, []);
                    (0, m.useEffect)(() => {
                        const castChangeHandler = (event) => {
                            setCastActiveSpeakerId(event.detail?.activeSpeakerId ?? null);
                        };
                        window.addEventListener('pulse-sync-yandex-station-cast-change', castChangeHandler);
                        return () => {
                            window.removeEventListener('pulse-sync-yandex-station-cast-change', castChangeHandler);
                        };
                    }, []);
                    (0, m.useEffect)(() => {
                        const castSettingHandler = (event) => {
                            const nextCastEnabled = event.detail?.enabled ?? pulseSyncIsYandexStationCastEnabled();
                            setCastEnabled(nextCastEnabled);
                            nextCastEnabled
                                ? (setCastDevicesLoaded(!1), void loadCastDevices())
                                : (closeCastPopover(), setCastDeviceRows([]), setCastActiveSpeakerId(null), setCastDevicesLoaded(!1), setCastDevicesLoading(!1));
                        };
                        window.addEventListener('pulse-sync-yandex-station-cast-setting-change', castSettingHandler);
                        return () => {
                            window.removeEventListener('pulse-sync-yandex-station-cast-setting-change', castSettingHandler);
                        };
                    }, [closeCastPopover, loadCastDevices]);
                    (0, m.useEffect)(() => () => clearTimeout(castCloseTimerRef.current), []);
                    (0, m.useEffect)(() => {
                        if (!castPopoverMounted) return;
                        const outsidePointerHandler = (event) => {
                            castRootRef.current?.contains?.(event.target) || closeCastPopover();
                        };
                        document.addEventListener('pointerdown', outsidePointerHandler, !0);
                        return () => {
                            document.removeEventListener('pointerdown', outsidePointerHandler, !0);
                        };
                    }, [castPopoverMounted, closeCastPopover]);
                    (0, m.useEffect)(() => {
                        if (!castPopoverMounted) return;
                        const resizeCastHandler = () => recalcCastPopoverShift();
                        recalcCastPopoverShift();
                        window.addEventListener('resize', resizeCastHandler);
                        return () => {
                            window.removeEventListener('resize', resizeCastHandler);
                        };
                    }, [castPopoverMounted, recalcCastPopoverShift]);
                    return castDisabled || !castEnabled
                        ? null
                        : (0, d.jsxs)('div', {
                              ref: castRootRef,
                              style: {
                                  position: 'relative',
                                  display: 'flex',
                                  alignItems: 'center',
                              },
                              children: [
                                  (0, d.jsx)(C.$, {
                                      className: castButtonClassName,
                                      radius: 'round',
                                      size: 'xxxs',
                                      variant: 'text',
                                      withRipple: !1,
                                      'aria-label': castFormatMessage({
                                          id: 'player-actions.cast',
                                      }),
                                      icon: castActiveSpeakerId
                                          ? pulseSyncRenderCastDeviceIcon(
                                                pulseSyncGetActiveCastDeviceRow(castDeviceRows, castActiveSpeakerId),
                                                'PulseSync_castPlayerButtonIcon',
                                            )
                                          : (0, d.jsx)(Y.I, {
                                                variant: 'cast',
                                                size: 'xs',
                                            }),
                                      onClick: toggleCastPopover,
                                      style: castActiveSpeakerId
                                          ? {
                                                color: 'var(--ym-controls-color-primary-text-hovered)',
                                            }
                                          : void 0,
                                  }),
                                  castPopoverMounted &&
                                      (0, d.jsx)('div', {
                                          className: 'PulseSync_castPopover',
                                          style: {
                                              opacity: castPopoverOpen ? 1 : 0,
                                              transform: 'translateX('.concat(castPopoverShift, 'px) ').concat(castPopoverOpen ? 'translateY(0)' : 'translateY(10px)'),
                                              pointerEvents: castPopoverOpen ? 'auto' : 'none',
                                          },
                                          children: !castDevicesLoaded
                                              ? (0, d.jsx)('div', {
                                                    className: 'PulseSync_castPopoverStatus PulseSync_castPopoverStatus_shimmer',
                                                    children: 'Поиск устройств...',
                                                })
                                              : (0, d.jsxs)('div', {
                                                    className: 'PulseSync_castPopoverContent',
                                                    children: [
                                                        (0, d.jsx)(
                                                            'div',
                                                            {
                                                                className: 'PulseSync_castPopoverStatus PulseSync_castPopoverStatus_refreshing'.concat(
                                                                    castDevicesLoading ? ' PulseSync_castPopoverStatus_visible' : '',
                                                                ),
                                                                children: 'Обновляем список устройств...',
                                                            },
                                                            'cast-refreshing',
                                                        ),
                                                        castDeviceRows.length
                                                            ? castDeviceRows.map((castRow) => {
                                                                  const isUnavailable = !castRow.isThisDevice && !castRow.canUseLocal,
                                                                      castRoomName = castRow.isThisDevice
                                                                          ? void 0
                                                                          : (castRow.accountSpeaker?.roomName ?? castRow.accountSpeaker?.householdName),
                                                                      castSpeakerId = castRow.accountSpeaker?.id,
                                                                      isConnecting =
                                                                          !castRow.isThisDevice &&
                                                                          castConnectingSpeakerId === castSpeakerId &&
                                                                          castActiveSpeakerId !== castSpeakerId,
                                                                      hasConnectionError =
                                                                          !castRow.isThisDevice &&
                                                                          castConnectionErrorSpeakerId === castSpeakerId &&
                                                                          castActiveSpeakerId !== castSpeakerId,
                                                                      isDisabled = isUnavailable || !!castConnectingSpeakerId,
                                                                      isConnected =
                                                                          (castRow.isThisDevice && !castActiveSpeakerId) ||
                                                                          (!castRow.isThisDevice && castActiveSpeakerId === castSpeakerId),
                                                                      castStatusText = castRow.isThisDevice
                                                                          ? castActiveSpeakerId
                                                                              ? 'Отключить колонку'
                                                                              : 'Сейчас выбрано'
                                                                          : isConnecting
                                                                            ? 'Подключение...'
                                                                            : hasConnectionError
                                                                              ? 'Ошибка подключения'
                                                                              : castActiveSpeakerId === castSpeakerId
                                                                                ? 'Подключено'
                                                                                : castRow.canUseLocal
                                                                                  ? 'В сети'
                                                                                  : 'Вне локальной сети',
                                                                      castRowKey = castRow.isThisDevice
                                                                          ? 'pulse-sync-this-device'
                                                                          : (castRow.accountSpeaker?.id ??
                                                                            castRow.accountSpeaker?.name ??
                                                                            castRow.localSpeaker?.deviceId);
                                                                  return (0, d.jsxs)(
                                                                      'button',
                                                                      {
                                                                          type: 'button',
                                                                          className: 'PulseSync_castPopoverItem'.concat(
                                                                              isConnected || (!isDisabled && castHoveredDeviceKey === castRowKey)
                                                                                  ? ' PulseSync_castPopoverItem_active'
                                                                                  : '',
                                                                          ),
                                                                          disabled: isDisabled,
                                                                          onClick: isDisabled
                                                                              ? void 0
                                                                              : async () => {
                                                                                    if (castRow.isThisDevice) {
                                                                                        window.pulseSyncYandexStationCast?.clear
                                                                                            ? await window.pulseSyncYandexStationCast.clear()
                                                                                            : await window.desktopEvents?.invoke?.('YANDEX_STATION_CLEAR_SPEAKER');
                                                                                        setCastActiveSpeakerId(null);
                                                                                        setCastConnectingSpeakerId(null);
                                                                                        setCastConnectionErrorSpeakerId(null);
                                                                                        closeCastPopover();
                                                                                        return;
                                                                                    }
                                                                                    const targetSpeakerId = castRow.accountSpeaker?.id;
                                                                                    if (!targetSpeakerId) return;
                                                                                    setCastConnectingSpeakerId(targetSpeakerId);
                                                                                    setCastConnectionErrorSpeakerId(null);
                                                                                    try {
                                                                                        const selectResult = await pulseSyncSelectYandexStationSpeaker(targetSpeakerId);
                                                                                        selectResult?.ok
                                                                                            ? (setCastActiveSpeakerId(targetSpeakerId),
                                                                                              setCastConnectionErrorSpeakerId(null),
                                                                                              closeCastPopover())
                                                                                            : (setCastConnectionErrorSpeakerId(targetSpeakerId),
                                                                                              console.warn('Failed to select Yandex Station cast device', selectResult));
                                                                                    } catch (selectError) {
                                                                                        setCastConnectionErrorSpeakerId(targetSpeakerId);
                                                                                        console.warn('Failed to select Yandex Station cast device', selectError);
                                                                                    } finally {
                                                                                        setCastConnectingSpeakerId(null);
                                                                                    }
                                                                                },
                                                                          onMouseEnter: isDisabled ? void 0 : () => setCastHoveredDeviceKey(castRowKey),
                                                                          onMouseLeave: isDisabled ? void 0 : () => setCastHoveredDeviceKey(null),
                                                                          children: [
                                                                              pulseSyncRenderCastDeviceIcon(castRow),
                                                                              (0, d.jsx)('div', {
                                                                                  style: {
                                                                                      display: 'flex',
                                                                                      alignItems: 'flex-start',
                                                                                      flexDirection: 'column',
                                                                                      minWidth: 0,
                                                                                      flex: '1 1 auto',
                                                                                  },
                                                                                  children: [
                                                                                      (0, d.jsx)('span', {
                                                                                          style: {
                                                                                              display: 'flex',
                                                                                              gap: '5px',
                                                                                              alignItems: 'baseline',
                                                                                              minWidth: 0,
                                                                                              maxWidth: '100%',
                                                                                          },
                                                                                          children: [
                                                                                              (0, d.jsx)('span', {
                                                                                                  className: 'PulseSync_castPopoverItemTitle',
                                                                                                  children: castRow.isThisDevice
                                                                                                      ? 'Это устройство'
                                                                                                      : (castRow.accountSpeaker?.name ??
                                                                                                        castRow.accountSpeaker?.id ??
                                                                                                        'Yandex Station'),
                                                                                              }),
                                                                                              castRoomName &&
                                                                                                  (0, d.jsx)('span', {
                                                                                                      className:
                                                                                                          'PulseSync_castPopoverItemMeta PulseSync_castPopoverItemRoom',
                                                                                                      children: (0, d.jsx)('span', {
                                                                                                          className: 'PulseSync_castPopoverItemRoomText',
                                                                                                          children: castRoomName,
                                                                                                      }),
                                                                                                  }),
                                                                                          ],
                                                                                      }),
                                                                                      (0, d.jsx)('span', {
                                                                                          className: 'PulseSync_castPopoverItemMeta'
                                                                                              .concat(isConnecting ? ' PulseSync_castPopoverItemMeta_shimmer' : '')
                                                                                              .concat(hasConnectionError ? ' PulseSync_castPopoverItemMeta_error' : ''),
                                                                                          children: castStatusText,
                                                                                      }),
                                                                                  ],
                                                                              }),
                                                                              isConnected &&
                                                                                  (0, d.jsx)('span', {
                                                                                      children: '✓',
                                                                                  }),
                                                                          ],
                                                                      },
                                                                      castRowKey,
                                                                  );
                                                              })
                                                            : (0, d.jsx)('div', {
                                                                  className: 'PulseSync_castPopoverStatus',
                                                                  children: 'Устройства не найдены',
                                                              }),
                                                    ],
                                                }),
                                      }),
                              ],
                          });
                });
            const pulseSyncWaveButton = C;
            function usePulseSyncWaveSetting(key, defaultValue) {
                const [value, setValue] = (0, m.useState)(() => {
                    try {
                        return (
                            (key === 'modSettings.vibeAnimationEnhancement.improvedWaveLayout' ? window.IMPROVED_WAVE_LAYOUT?.() : undefined) ??
                            window.nativeSettings?.get?.(key) ??
                            defaultValue
                        );
                    } catch {
                        return defaultValue;
                    }
                });
                (0, m.useEffect)(() => {
                    const unsubscribe = window.desktopEvents?.on?.('NATIVE_STORE_UPDATE', (event, settingKey, settingValue) => {
                        if (settingKey === key) setValue(defaultValue ? settingValue !== false : !!settingValue);
                    });
                    return () => {
                        if (typeof unsubscribe === 'function') unsubscribe();
                    };
                }, [key, defaultValue]);
                return value;
            }
            // for PulseSync: END Yandex Station device picker and live wave-setting subscription
            let it = (0, u.PA)(() => {
                    var e, t;
                    // for PulseSync: BEGIN access experiments for the yellow wave play button preference
                    let { vibe: i, sonataState: a, advert: n, freePlayerAccess: r, freeAccess: s, experiments: pulseSyncExperiments } = (0, U.g)(),
                    // for PulseSync: END access experiments for the yellow wave play button preference
                        { openIntroModalFromPlay: o } = (0, tb.e)(),
                        { formatMessage: l } = (0, v.A)(),
                        u = (0, ts.e)(),
                        _ = (0, e7.P)(),
                        b = (0, ti.b)(),
                        p = (0, te.r)(),
                        h = (0, tt.m)(),
                        // for PulseSync: BEGIN repeat and shuffle hooks plus the improved wave-layout preference
                        { pageId: x } = (0, L.$)(),
                        shuffleSetter = (0, tP.e)(),
                        repeatSetter = (0, tN.A)(),
                        pulseSyncImprovedWaveLayoutEnabled = usePulseSyncWaveSetting('modSettings.vibeAnimationEnhancement.improvedWaveLayout', true);
                        // for PulseSync: END repeat and shuffle hooks plus the improved wave-layout preference
                    (0, t4.e)();
                    let { togglePlay: A } = (0, F.B)({
                            seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [],
                            pageIdForFrom: x,
                            blockIdForFrom: ''.concat(e8.EntityTypes.MyWave, '-').concat(eM.U.RADIO),
                            onPlayInterrupted: () => r.showRestrictionModal(e3.W.Interrupted),
                        }),
                        j = a.entityMeta,
                        // for PulseSync: BEGIN wave shuffle and repeat actions with player telemetry
                        pulseSyncShuffleClick = (0, f.c)((event) => {
                            event.stopPropagation();
                            shuffleSetter(a);
                            h({ actionType: e8.ActionType.ChangeShuffle });
                        }),
                        pulseSyncRepeatClick = (0, f.c)((event) => {
                            event.stopPropagation();
                            repeatSetter(a);
                            h({ actionType: e8.ActionType.ChangeRepeatSettings });
                        }),
                        // for PulseSync: END wave shuffle and repeat actions with player telemetry
                        N = (0, f.c)((e) => {
                            (e.stopPropagation(), null == u || u.moveForward(), h({ actionType: e8.ActionType.Skip }));
                        }),
                        P = (0, f.c)((e) => {
                            (e.stopPropagation(), null == u || u.moveBackward(), h({ actionType: e8.ActionType.Backskip }));
                        }),
                        T = (0, f.c)(() => {
                            if (n.isAdvertShown) {
                                var e;
                                null == p || null == (e = p.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            if (!o())
                                if (j) (null == u || u.togglePause(), h({ actionType: a.isPlaying ? e8.ActionType.Pause : e8.ActionType.Play }));
                                else {
                                    if (s.isVibeStartRestricted) return void r.showRestrictionModal(e3.W.Interrupted);
                                    (A(), b(!a.isPlaying));
                                }
                        }),
                        k = (0, f.c)(() => {
                            _() || T();
                        }),
                        S = (0, f.c)((e) => {
                            e || r.hideRestrictionModal();
                        }),
                        // for PulseSync: BEGIN read the yellow wave play button experiment override
                        pulseSyncYellowButtonEnabled = pulseSyncExperiments.checkExperiment(z.z.WebNextPlayerBarYellowButton, 'on'),
                        // for PulseSync: END read the yellow wave play button experiment override
                        w = (0, m.useCallback)(
                            () =>
                                (0, d.jsx)(td.D, {
                                    // for PulseSync: BEGIN apply the yellow wave play button class
                                    className: (0, c.$)(ie().playButton, {
                                        [ie().playButton_playing]: a.isPlaying,
                                        [ie().playButton_withYellowPlayButton]: pulseSyncYellowButtonEnabled,
                                    }),
                                    // for PulseSync: END apply the yellow wave play button class
                                    isPlaying: a.isPlaying,
                                    iconClassName: ie().playButtonIcon,
                                    color: 'secondary',
                                    onClick: k,
                                }),
                            // for PulseSync: BEGIN refresh the wave play button when its color preference changes
                            [k, a.isPlaying, pulseSyncYellowButtonEnabled],
                            // for PulseSync: END refresh the wave play button when its color preference changes
                        ),
                        I = (0, y.L)(() => {
                            let e = j ? 'fullTracks' : 'vibe';
                            return r.shownRestrictionModal === t3.h.PlayerAuthorization
                                ? (0, d.jsx)(th.Z, { isOpened: !0, placement: 'top', textVariant: e, transform: !1, onOpenChange: S, renderChildren: w })
                                : r.shownRestrictionModal === t3.h.PlayerSubscription
                                  ? (0, d.jsx)(tv.S, { isOpened: !0, placement: 'top', textVariant: e, transform: !1, onOpenChange: S, renderChildren: w })
                                  : w();
                        });
                    return (0, d.jsxs)('div', {
                        className: ie().root,
                        children: [
                            // for PulseSync: BEGIN shuffle button in the improved wave layout
                            pulseSyncImprovedWaveLayoutEnabled &&
                                !a.isGenerativeContext &&
                                (a.canShuffle || a.canChangeRepeatMode) &&
                                (0, d.jsx)(C.$, {
                                    className: ie().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !a.canShuffle,
                                    'aria-hidden': !a.canShuffle,
                                    withRipple: false,
                                    'aria-label': l({ id: 'player-actions.shuffle' }),
                                    icon: (0, d.jsx)(Y.I, { variant: 'shuffle', size: 'xs' }),
                                    onClick: pulseSyncShuffleClick,
                                    style: a.shuffle ? { color: 'var(--ym-controls-color-primary-text-hovered)' } : undefined,
                                }),
                            // for PulseSync: END shuffle button in the improved wave layout
                            !a.isGenerativeContext &&
                                (0, d.jsx)(C.$, {
                                    className: ie().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !a.canMoveBackward,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': l({ id: 'player-actions.previous-track' }),
                                    icon: (0, d.jsx)(Y.I, { variant: 'previous', size: 'xs' }),
                                    onClick: P,
                                    'data-test-id': g.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                }),
                            I,
                            !a.isGenerativeContext &&
                                (0, d.jsx)(C.$, {
                                    className: ie().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !a.canMoveForward,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': l({ id: 'player-actions.next-track' }),
                                    icon: (0, d.jsx)(Y.I, { variant: 'next', size: 'xs' }),
                                    onClick: N,
                                    'data-test-id': g.Kq.sonata.NEXT_TRACK_BUTTON,
                                }),
                            // for PulseSync: BEGIN repeat button in the improved wave layout
                            pulseSyncImprovedWaveLayoutEnabled &&
                                !a.isGenerativeContext &&
                                (a.canShuffle || a.canChangeRepeatMode) &&
                                (0, d.jsx)(C.$, {
                                    className: ie().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !a.canChangeRepeatMode,
                                    'aria-hidden': !a.canChangeRepeatMode,
                                    withRipple: false,
                                    'aria-label': (0, tj.z)(a.repeatMode, l),
                                    icon: (0, d.jsx)(Y.I, { variant: a.repeatMode === ty.pM.ONE ? 'repeat_one' : 'repeat', size: 'xs' }),
                                    onClick: pulseSyncRepeatClick,
                                    style: a.repeatMode !== ty.pM.NONE ? { color: 'var(--ym-controls-color-primary-text-hovered)' } : undefined,
                                }),
                            // for PulseSync: END repeat button in the improved wave layout
                        ],
                    });
                }),
                ii = (0, u.PA)((e) => {
                    var t, i;
                    const [, refreshCastControl] = (0, m.useReducer)((revision) => revision + 1, 0);
                    (0, m.useEffect)(() => {
                        window.addEventListener('pulse-sync-yandex-station-cast-setting-change', refreshCastControl);
                        return () => window.removeEventListener('pulse-sync-yandex-station-cast-setting-change', refreshCastControl);
                    }, [refreshCastControl]);
                    let { albumCoverClassName: a, className: n } = e,
                        {
                            vibe: r,
                            sonataState: s,
                            advert: o,
                            fullscreenPlayer: l,
                            settings: { isMobile: u },
                            freePlayerAccess: _,
                        } = (0, U.g)(),
                        { formatMessage: b } = (0, v.A)(),
                        p = (0, tr.z)(),
                        h = (0, e4.d)(),
                        { isLiked: x, handleLike: A, isDisliked: C, handleDislike: j } = (0, tc.f)(),
                        N = (0, ts.e)(),
                        // for PulseSync: BEGIN read the improved wave-layout preference
                        pulseSyncImprovedWaveLayoutEnabled = usePulseSyncWaveSetting('modSettings.vibeAnimationEnhancement.improvedWaveLayout', true),
                        // for PulseSync: END read the improved wave-layout preference
                        P = (0, e7.P)(),
                        T = (0, ti.b)(),
                        k = (0, te.r)(),
                        S = (0, tt.m)(),
                        { pageId: w } = (0, L.$)(),
                        { togglePlay: I } = (0, F.B)({
                            seeds: null != (i = null == (t = r.meta) ? void 0 : t.seeds) ? i : [],
                            pageIdForFrom: w,
                            blockIdForFrom: ''.concat(e8.EntityTypes.MyWave, '-').concat(eM.U.RADIO),
                            onPlayInterrupted: () => _.showRestrictionModal(e3.W.Interrupted),
                        }),
                        E = s.entityMeta,
                        O = null == E ? void 0 : E.mainAlbum,
                        B = !s.isPlaying && !E,
                        M = (0, f.c)(() => {
                            if (s.entityMeta) {
                                if (l.modal.isOpened) return void l.modal.close();
                                l.modal.open();
                            }
                        });
                    // for PulseSync: BEGIN open and restore fallback synchronized lyrics from wave controls
                    const screenNavigation = (0, tm.N)(),
                        pulseSyncWaveSyncLyricsAvailable =
                            !!(null == E ? void 0 : E.isSyncLyricsAvailable) ||
                            !!(null == E ? void 0 : E.isSyncLyricsAvailableWithOfflineFeature) ||
                            !!(null == E ? void 0 : E.hasSyncLyrics) ||
                            (!!(null == E ? void 0 : E.id) &&
                                'function' == typeof (null == l.syncLyrics ? void 0 : l.syncLyrics.hasLyricsForTrack) &&
                                l.syncLyrics.hasLyricsForTrack(E.id)),
                        pulseSyncOpenWaveSyncLyrics = (0, f.c)(() => {
                            (l.showSyncLyrics(),
                                screenNavigation({
                                    to: e8.AppScreen.PlayerScreen,
                                }));
                        }),
                        pulseSyncWaveSyncLyricsLabel = ''
                            .concat(
                                b({
                                    id: 'interface-actions.open-sync-lyrics',
                                }),
                                ' ',
                            )
                            .concat(
                                b({
                                    id: 'warning-messages.can-break-accessibility',
                                }),
                            );
                    (0, m.useEffect)(() => {
                        const trackId = null == E ? void 0 : E.id;
                        const nativeAvailable =
                            (null == E ? void 0 : E.isSyncLyricsAvailable) ||
                            (null == E ? void 0 : E.isSyncLyricsAvailableWithOfflineFeature) ||
                            (null == E ? void 0 : E.hasSyncLyrics);
                        let lrclibEnabled = !0;
                        try {
                            lrclibEnabled = window.nativeSettings?.get('modSettings.lrclib.useText') !== !1;
                        } catch (_error) {}
                        if (
                            trackId &&
                            !(null == E ? void 0 : E.isNonMusic) &&
                            l.syncLyrics.currentTrackId !== trackId &&
                            (nativeAvailable || lrclibEnabled || E.trackSource === 'UGC')
                        ) {
                            l.syncLyrics.getData(trackId);
                        }
                        l.syncLyrics.prefetchNextTrack(N);
                    }, [
                        null == E ? void 0 : E.id,
                        null == E ? void 0 : E.isSyncLyricsAvailable,
                        null == E ? void 0 : E.isSyncLyricsAvailableWithOfflineFeature,
                        null == E ? void 0 : E.hasSyncLyrics,
                        null == E ? void 0 : E.isNonMusic,
                        null == E ? void 0 : E.trackSource,
                        l.syncLyrics.currentTrackId,
                        l.syncLyrics,
                        N,
                    ]);
                    (0, m.useEffect)(() => {
                        const trackId = null == E ? void 0 : E.id;
                        if (!trackId || String(l.syncLyrics.currentTrackId) !== String(trackId) || l.syncLyrics.isLoadingForTrack(trackId)) return;
                        if (l.syncLyrics.isRejected || l.syncLyrics.hasInvalidLyrics) {
                            l.autoHideSyncLyrics(trackId);
                            return;
                        }
                        if (trackId && l.syncLyrics.hasLyricsForTrack(trackId)) l.restoreSyncLyricsForTrack(trackId);
                    }, [
                        null == E ? void 0 : E.id,
                        l.syncLyrics.currentTrackId,
                        l.syncLyrics.lines,
                        l.syncLyrics.isLoading,
                        l.syncLyrics.isRejected,
                        l.syncLyrics.hasInvalidLyrics,
                        l.syncLyrics.isResolved,
                        l.syncLyrics,
                        l.autoHideSyncLyrics,
                        l.restoreSyncLyricsForTrack,
                    ]);
                    // for PulseSync: END open and restore fallback synchronized lyrics from wave controls
                    (0, m.useEffect)(() => {
                        if (!s.isGenerativeContext)
                            return (
                                null == p || p.addShortcutsListener(tn.M.MAIN, ta.l.TOGGLE_FULLSCREEN_PLAYER, M),
                                null == p || p.addShortcutsListener(tn.M.MAIN, ta.l.LIKE, A),
                                null == p || p.addShortcutsListener(tn.M.MAIN, ta.l.DISLIKE, j),
                                () => {
                                    (null == p || p.removeShortcutsListener(tn.M.MAIN, ta.l.TOGGLE_FULLSCREEN_PLAYER),
                                        null == p || p.removeShortcutsListener(tn.M.MAIN, ta.l.LIKE),
                                        null == p || p.removeShortcutsListener(tn.M.MAIN, ta.l.DISLIKE));
                                }
                            );
                    }, [j, A, p, s.isGenerativeContext, s.entityMeta, M]);
                    let R = (0, f.c)(async (e, t) => {
                            (t && (0, el.P)(t, tU().ripple), await h(s, e));
                        }),
                        W = (0, f.c)((e) => {
                            ((0, el.P)(e, tU().ripple), j());
                        }),
                        D = (0, f.c)((e) => {
                            (e && !u && (0, el.P)(e, tU().ripple), A());
                        }),
                        V = (0, f.c)(() => {
                            if (o.isAdvertShown) {
                                var e;
                                null == k || null == (e = k.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            E ? (null == N || N.togglePause(), S({ actionType: s.isPlaying ? e8.ActionType.Pause : e8.ActionType.Play })) : (I(), T(!s.isPlaying));
                        }),
                        z = (0, f.c)((e) => {
                            ((0, el.P)(e, tU().ripple), P() || V());
                        }),
                        H = (0, y.L)(() =>
                            u
                                ? null
                                : (0, d.jsx)(e9.r, {
                                      className: tU().changeVolume,
                                      buttonClassName: tU().button,
                                      verticalSliderClassName: tU().verticalSlider,
                                      variant: e6.q.VERTICAL,
                                      sonataVolume: s.volume,
                                      onVolumeClick: R,
                                  }),
                        ),
                        K = (0, y.L)(() =>
                            u && s.isPlaying
                                ? (0, d.jsx)(td.D, { className: tU().button, isPlaying: s.isPlaying, color: 'secondary', onClick: z })
                                : u && !s.isPlaying
                                  ? null
                                  : (0, d.jsx)(to._, { className: tU().button, disabled: !E || o.isAdvertShown, isDisliked: C, onClick: W, iconSize: 'xs' }),
                        );
                    return (0, d.jsxs)('section', {
                        role: 'region',
                        'aria-label': b({ id: 'a11y-regions.player' }),
                        className: (0, c.$)(tU().root, n),
                        'data-test-id': g.e8.player.VIBE_PLAYERBAR,
                        children: [
                            (0, d.jsx)(tA, { album: O, className: a }),
                            (0, d.jsxs)('div', {
                                className: (0, c.$)(tU().progress, { [tU().progress_visible]: !B }),
                                children: [
                                    // for PulseSync: BEGIN left control group and fullscreen button beside centered wave progress
                                    (0, d.jsxs)('div', {
                                        className: 'PulseSync_waveSideControls PulseSync_waveSideControls_left',
                                        children: [
                                            pulseSyncImprovedWaveLayoutEnabled &&
                                                (0, d.jsx)(pulseSyncWaveButton.$, {
                                                    className: tU().button,
                                                    radius: 'round',
                                                    size: 'xxxs',
                                                    variant: 'text',
                                                    disabled: !E || s.isGenerativeContext || o.isAdvertShown,
                                                    withRipple: false,
                                                    'aria-label': b({
                                                        id: 'player-actions.fullscreen-button',
                                                    }),
                                                    icon: (0, d.jsx)(Y.I, {
                                                        variant: 'fullscreen',
                                                        size: 'xs',
                                                    }),
                                                    onClick: M,
                                                }),
                                            H,
                                            K,
                                        ],
                                    }),
                                    // for PulseSync: END left control group and fullscreen button beside centered wave progress
                                    (0, d.jsx)(t9, {}),
                                    // for PulseSync: BEGIN right control group beside centered wave progress
                                    (0, d.jsxs)('div', {
                                        className: 'PulseSync_waveSideControls PulseSync_waveSideControls_right',
                                        children: [
                                            (0, d.jsx)(tl.c, {
                                                className: (0, c.$)(tU().button, {
                                                    [tU().likeButton_mobilePaused]: u && !s.isPlaying,
                                                }),
                                                disabled: !E || o.isAdvertShown,
                                                isLiked: x,
                                                onClick: D,
                                                iconSize: 'xs',
                                            }),
                                            // for PulseSync: BEGIN Yandex Station cast and synchronized lyrics buttons in wave controls
                                            (0, d.jsx)(pulseSyncWaveCastControl, {
                                                buttonClassName: tU().button,
                                                disabled: o.isAdvertShown,
                                            }),
                                            pulseSyncImprovedWaveLayoutEnabled &&
                                                !pulseSyncIsYandexStationCastEnabled() &&
                                                !(null == E ? void 0 : E.isNonMusic) &&
                                                !o.isAdvertShown &&
                                                (0, d.jsx)(pulseSyncWaveButton.$, {
                                                    className: tU().button,
                                                    radius: 'round',
                                                    size: 'xxxs',
                                                    variant: 'text',
                                                    disabled: !pulseSyncWaveSyncLyricsAvailable || s.isGenerativeContext,
                                                    'aria-hidden': !pulseSyncWaveSyncLyricsAvailable,
                                                    withRipple: !1,
                                                    'aria-label': pulseSyncWaveSyncLyricsLabel,
                                                    icon: (0, d.jsx)(Y.I, {
                                                        variant: 'syncLyrics',
                                                        size: 'xs',
                                                    }),
                                                    onClick: pulseSyncOpenWaveSyncLyrics,
                                                }),
                                            // for PulseSync: END Yandex Station cast and synchronized lyrics buttons in wave controls
                                            !u &&
                                                // for PulseSync: BEGIN place the wave context menu in the right control group
                                                (0, d.jsx)(tG, {
                                                    buttonClassName: (0, c.$)(tU().button, tU().important),
                                                    'data-test-id': g.e8.player.VIBE_CONTEXT_MENU_BUTTON,
                                                }),
                                                // for PulseSync: END place the wave context menu in the right control group
                                        ],
                                    }),
                                    // for PulseSync: END right control group beside centered wave progress
                                    (0, d.jsx)(tu.e, {}),
                                ],
                            }),
                            !u && (0, d.jsx)(it, {}),
                        ],
                    });
                }),
                ia = { minFontSize: 24, maxFontSize: 64, maxLines: 2, lineHeight: 0.9 },
                ir = { minFontSize: 48, maxFontSize: 104, maxLines: 4, lineHeight: 0.9 },
                is = { minFontSize: 48, maxFontSize: 104, maxLines: void 0, lineHeight: 1.1 },
                io = {
                    minFontSize: 14,
                    maxFontSize: 20,
                    lineHeight: 1,
                    styleVariants: [
                        { fontSize: 20, lineHeight: 1 },
                        { fontSize: 16, lineHeight: 1 },
                        { fontSize: 14, lineHeight: 16 / 14 },
                    ],
                };
            var il = i(22435),
                id = i.n(il);
            let ic = (0, u.PA)((e) => {
                var t;
                let { artist: i, withLink: a, onClick: n, featCoverUri: r } = e,
                    { formatMessage: s } = (0, v.A)(),
                    o = (0, tm.N)(),
                    l = null != r ? r : null == (t = i.cutoutCover) ? void 0 : t.uri,
                    c = s({ id: 'entity-names.artist-name' }, { artistName: i.name }),
                    u = (0, f.c)(() => {
                        o({ to: e8.AppScreen.ArtistScreen });
                    }),
                    _ = (0, d.jsx)(j._V, {
                        className: id().cover,
                        fit: 'contain',
                        src: l,
                        size: 'orig',
                        withAvatarReplace: !0,
                        alt: c,
                        'aria-hidden': !0,
                        withLoadingIndicator: !1,
                    });
                return a
                    ? (0, d.jsx)(tp.N, { className: id().root, href: i.url, onClick: u, 'aria-hidden': !0, 'data-test-id': g.e8.vibe.VIBE_ARTIST_COVER, children: _ })
                    : (0, d.jsx)('div', { className: id().root, onClick: n, 'aria-hidden': !0, 'data-test-id': g.e8.vibe.VIBE_ARTIST_COVER, children: _ });
            });
            var iu = i(52970),
                i_ = i(4550),
                im = i(78453),
                ib = i(95213),
                iv = i(46616),
                ip = i(91149),
                ih = i(92942),
                ig = i(53712),
                ix = i(57549),
                iA = i(72720),
                iy = i(40056),
                iC = i.n(iy);
            let ij = (0, u.PA)((e) => {
                var t;
                let { wave: i, context: a, className: n, renderContextButton: r } = e,
                    {
                        collection: { vibeRooms: s },
                        settings: { isMobile: o },
                        user: l,
                    } = (0, U.g)(),
                    { formatMessage: c } = (0, v.A)(),
                    { notify: u } = (0, ih.l)(),
                    _ = (0, ez.Z)(ig.Z.collectionVibeRooms.href),
                    { state: m, toggleTrue: b, toggleFalse: h } = (0, eo.e)(!1),
                    x = s.items.find((e) => {
                        var t;
                        return (null == e || null == (t = e.wave) ? void 0 : t.pinId) === i.pinId;
                    }),
                    A = s.loadingState === H.G.PENDING,
                    { editVibeRoom: C, isPending: j } = (0, im.h)(x),
                    N = (0, f.c)(() => {
                        x && s.deleteRoomFromItems(x.id);
                    }),
                    { handlePinClick: P, handleExitClick: k, isExitPending: S } = (0, ib.O)({ room: x, onRoomSuccessExit: N }),
                    w = (0, f.c)(async (e) => {
                        e &&
                            l.isAuthorized &&
                            !j &&
                            !S &&
                            (await s.getData(),
                            s.isRejected && u((0, d.jsx)(ix.h, { error: c({ id: 'error-messages.error-during-action' }) }), { containerId: ip.u.ERROR }));
                    }),
                    I = (0, f.c)(async (e) => {
                        j || (await C(e), h());
                    }),
                    E = (0, y.L)(() =>
                        m && x && !o
                            ? (0, d.jsx)(iA.A, {
                                  text: x.name,
                                  className: iC().renameInput,
                                  onChangeFinish: I,
                                  readOnly: j,
                                  maxTextLength: 200,
                                  minTextLength: 1,
                                  placeholder: c({ id: 'vibe-actions.enter-title' }),
                                  'aria-label': c({ id: 'interface-actions.rename' }),
                                  shouldFinishOnKeyPress: !0,
                                  'data-test-id': g.OA.vibe.VIBE_ROOM_RENAME_INPUT,
                              })
                            : null,
                    ),
                    O = (0, y.L)(() =>
                        A
                            ? (0, d.jsx)('div', { className: iC().loader, children: (0, d.jsx)(i_.y, { size: 'xs' }) })
                            : x
                              ? (0, d.jsx)(iv.J, { room: x, className: n, onRenameClick: b, onPinClick: P, onExitClick: k, isExitPending: S, isRenamePending: j })
                              : null,
                    ),
                    B = (0, d.jsxs)(d.Fragment, {
                        children: [
                            O,
                            x && !A && (0, d.jsx)(iu.c, { className: iC().divider }),
                            (0, d.jsx)(tC.Dr, {
                                className: n,
                                icon: (0, d.jsx)(Y.I, { variant: 'twoUsers', size: 'xxs' }),
                                onClick: _,
                                'data-test-id': g.Kq.multivibe.MULTIVIBE_GO_TO_COLLECTION_BUTTON,
                                children: (0, d.jsxs)('span', {
                                    className: iC().collection,
                                    children: [
                                        (0, d.jsx)(p.A, { id: 'interface-actions.show-all' }),
                                        (0, d.jsx)(T.HL, {
                                            variant: 'span',
                                            type: 'controls',
                                            size: 'xs',
                                            className: iC().description,
                                            children: (0, d.jsx)(p.A, { id: 'page.vibe-rooms' }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                return r({ context: null != (t = null == x ? void 0 : x.name) ? t : a, contextControl: E, onOpenChange: w, children: B });
            });
            var iN = i(57954),
                iP = i(22939),
                iT = i(18660),
                ik = i(9106),
                iS = i(55949),
                iw = i(91335),
                iI = i.n(iw),
                iE = i(8807),
                iO = i.n(iE);
            let iB = (0, u.PA)((e) => {
                let { context: t, isResetAvailable: i, isHidden: a, onReset: n, children: r, contextControl: s, onOpenChange: o, className: l } = e,
                    {
                        settings: { isMobile: u },
                        experiments: _,
                    } = (0, U.g)(),
                    { formatMessage: b } = (0, v.A)(),
                    p = (0, tr.z)(),
                    [h, x] = (0, m.useState)(!1),
                    [j, N] = (0, A.d)(),
                    P = h && !a && !s && !!r,
                    k = P || !!s,
                    S = _.checkExperiment(z.z.WebNextNewWaveTabFeedbackForm, 'on');
                ((0, iS.mf)(s ? null : j, io),
                    (0, m.useEffect)(() => {
                        a && x(!1);
                    }, [a]),
                    (0, m.useEffect)(() => {
                        if (k) return (null == p || p.disable(), () => (null == p ? void 0 : p.enable()));
                    }, [k, p]));
                let w = (0, f.c)(() => {
                        (x(!1), n());
                    }),
                    I = (0, f.c)((e) => {
                        (x(e), null == o || o(e));
                    }),
                    E = (0, y.L)(() =>
                        r
                            ? (0, d.jsx)(tC.W1, {
                                  label: (0, d.jsxs)('span', {
                                      className: iO().label,
                                      children: [
                                          (0, d.jsx)(T.HL, { variant: 'span', className: iI().context, lineClamp: 2, children: t }),
                                          (0, d.jsx)(Y.I, {
                                              variant: 'arrowDown',
                                              size: 'xxs',
                                              className: (0, c.$)(iO().arrow, { [iO().arrow_open]: P }),
                                              'aria-hidden': !0,
                                          }),
                                      ],
                                  }),
                                  className: iO().trigger,
                                  wrapperClassName: (0, c.$)(iO().triggerContainer, { [iO().triggerContainer_hidden]: !!s }),
                                  menuClassName: (0, c.$)(iO().menu, { [iO().menu_touch]: u }),
                                  radius: 'xxxl',
                                  icon: null,
                                  open: P,
                                  onOpenChange: I,
                                  isMobile: !1,
                                  returnFocus: !s,
                                  offsetOptions: 4,
                                  ariaLabel: ''.concat(t, ': ').concat(b({ id: 'interface-actions.context-menu' })),
                                  tabIndex: a ? -1 : void 0,
                                  containerDataTestId: g.e8.vibe.VIBE_PAGE_CONTEXT_MENU,
                                  'data-test-id': g.e8.vibe.VIBE_PAGE_CONTEXT_MENU_BUTTON,
                                  children: !s && r,
                              })
                            : (0, d.jsx)('div', {
                                  className: iO().staticContext,
                                  children: (0, d.jsx)(T.HL, {
                                      variant: 'span',
                                      className: iI().context,
                                      lineClamp: 2,
                                      'data-test-id': g.e8.vibe.RESET_VIBE_CONTEXT_STATIC_TEXT,
                                      children: t,
                                  }),
                              }),
                    );
                return t
                    ? (0, d.jsxs)('div', {
                          ref: N,
                          className: (0, c.$)(iI().root, iO().root, l, { [iI().root_visible]: !a, [iI().root_withFeedbackForm]: S }),
                          'aria-hidden': !!a,
                          inert: !!a,
                          children: [
                              s && (0, d.jsx)('div', { className: (0, c.$)(iO().staticContext, iI().context), children: s }),
                              E,
                              i &&
                                  (0, d.jsx)(C.$, {
                                      className: (0, c.$)(iI().button, iO().resetButton),
                                      radius: 'round',
                                      onClick: w,
                                      'aria-label': b({ id: 'interface-actions.reset-context' }, { context: t }),
                                      tabIndex: a ? -1 : void 0,
                                      'data-test-id': g.e8.vibe.RESET_VIBE_CONTEXT_BUTTON,
                                      children: (0, d.jsx)(Y.I, {
                                          variant: 'close',
                                          size: 'xs',
                                          'aria-hidden': !0,
                                          'data-test-id': g.e8.vibe.RESET_VIBE_CONTEXT_BUTTON_ICON,
                                      }),
                                  }),
                          ],
                      })
                    : null;
            });
            var iM = i(31860);
            let iR = (e) => {
                let { action: t, notification: i } = e,
                    {
                        user: a,
                        settings: { isMobile: n },
                    } = (0, U.g)(),
                    { formatMessage: r } = (0, v.A)(),
                    { notify: s } = (0, ih.l)(),
                    o = (0, m.useRef)(!1);
                return (0, f.c)(async () => {
                    if (!a.isAuthorized) return void s((0, d.jsx)(ix.h, { error: r({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: ip.u.ERROR });
                    if (!o.current) {
                        o.current = !0;
                        try {
                            (await t())
                                ? n || s(i, { containerId: ip.u.INFO })
                                : s((0, d.jsx)(ix.h, { error: r({ id: 'error-messages.error-during-action' }) }), { containerId: ip.u.ERROR });
                        } finally {
                            o.current = !1;
                        }
                    }
                });
            };
            var iL = i(21468),
                iW = i(16386),
                iD = i(67303),
                iV = i(38726),
                iF = i(60641),
                iU = i(21300),
                iz = i(93297),
                iH = i(92657);
            let iK = (0, u.PA)((e) => {
                let { album: t, className: i, iconClassName: a, artistName: n, artistId: r } = e,
                    {
                        user: s,
                        library: o,
                        pinsCollection: l,
                        paywall: c,
                        settings: { isMobile: u },
                        albumCPA: { isPlusCPAEnabled: _ },
                    } = (0, U.g)(),
                    { pageAlbumId: m } = (0, iL.T)(),
                    b = (0, iU.a)(t.type),
                    { shareLink: v, pathname: p } = (0, tE.b)('/album/:albumId', { params: { albumId: t.id } }),
                    h = _({ pageAlbumId: m, albumId: t.id, isNonMusic: b }),
                    g = o.isAlbumLiked(t.id),
                    x = iR({
                        action: async () => (await o.toggleAlbumLike({ entityId: t.id, userId: s.account.data.uid })) === iM.f.OK,
                        notification: (0, d.jsx)(iz.T, { album: { ...t, url: p, isLiked: !g } }),
                    }),
                    A = (0, f.c)(() => (h ? void c.openModal() : x())),
                    C = (0, iF.i)(t.id),
                    j = l.isPinned(C),
                    N = iR({
                        action: async () => !!(await l.toggleAlbumPin({ id: t.id }, C)),
                        notification: (0, d.jsx)(iH.l, { album: { ...t, url: p, isPinned: !j } }),
                    }),
                    P = (0, y.L)(() =>
                        b
                            ? (0, d.jsx)(iV.U, { className: i, iconClassName: a, onClick: A, isLiked: g, albumType: t.type })
                            : (0, d.jsx)(iW.T, { className: i, iconClassName: a, onClick: A, isLiked: g, disabled: !h && !s.isAuthorized }),
                    );
                return (0, d.jsxs)(d.Fragment, {
                    children: [
                        !u && (0, d.jsx)(iD.L, { className: i, iconClassName: a, onClick: N, isPinned: j }),
                        P,
                        (0, d.jsx)(tM.H, {
                            withNotification: !u,
                            withSubmenu: !u,
                            className: i,
                            iconClassName: a,
                            shareLink: v,
                            entityMeta: { variant: tw.Y.ALBUM, albumArtistName: n, albumArtistId: r, id: t.id, title: t.title, path: p },
                        }),
                    ],
                });
            });
            var iG = i(6304),
                iY = i(761),
                iq = i(63149),
                iX = i(80477);
            let i$ = (0, u.PA)((e) => {
                let { artist: t, className: i, iconClassName: a } = e,
                    {
                        user: n,
                        library: r,
                        pinsCollection: s,
                        settings: { isMobile: o },
                    } = (0, U.g)(),
                    { shareLink: l, pathname: c } = (0, tE.b)('/artist/:artistId', { params: { artistId: t.id } }),
                    u = r.isArtistLiked(t.id),
                    _ = iR({
                        action: async () => (await r.toggleArtistLike({ entityId: t.id, userId: n.account.data.uid })) === iM.f.OK,
                        notification: (0, d.jsx)(iq.T, { artist: { ...t, url: c, isLiked: !u } }),
                    }),
                    m = (0, iY.E)(t.id),
                    b = s.isPinned(m),
                    v = iR({
                        action: async () => !!(await s.toggleArtistPin({ id: t.id }, m)),
                        notification: (0, d.jsx)(iX.l, { artist: { ...t, url: c, isPinned: !b } }),
                    });
                return (0, d.jsxs)(d.Fragment, {
                    children: [
                        !o && (0, d.jsx)(iG.WithOffline, { fallback: (0, d.jsx)(iD.L, { className: i, iconClassName: a, onClick: v, isPinned: b }) }),
                        (0, d.jsx)(iG.WithOffline, {
                            fallback: (0, d.jsx)(iW.T, { className: i, iconClassName: a, onClick: _, isLiked: u, disabled: !n.isAuthorized || !t.isAvailable }),
                        }),
                        (0, d.jsx)(tM.H, {
                            withNotification: !o,
                            className: i,
                            iconClassName: a,
                            shareLink: l,
                            entityMeta: { variant: tw.Y.ARTIST, id: t.id, title: t.name, path: c },
                            withSubmenu: !1,
                        }),
                    ],
                });
            });
            var iZ = i(11871),
                iQ = i(65596),
                iJ = i(43357),
                i0 = i(82401),
                i1 = i(42190),
                i2 = i(27892);
            let i8 = (0, u.PA)((e) => {
                var t;
                let { playlist: i, className: a, iconClassName: n, ownerName: r, ownerLogin: s } = e,
                    {
                        user: o,
                        library: l,
                        pinsCollection: c,
                        settings: { isMobile: u },
                    } = (0, U.g)(),
                    _ = i.uuid ? '/playlists/:playlistUuid' : '/users/:userId/playlists/:kind',
                    m = { playlistUuid: null != (t = i.uuid) ? t : '', userId: i.uid, kind: i.kind },
                    { shareLink: b, pathname: v } = (0, tE.b)(_, { params: m }),
                    { href: p } = (0, eY.u)(_, { params: m }),
                    h = i.kind === i0.j.LIKE,
                    g = o.isAuthorized && i.uid === o.account.data.uid,
                    x = (i.visibility === iZ.L.PUBLIC || h) && i.isAvailable,
                    f = l.isPlaylistLiked((0, iQ.m)(i)),
                    A = iR({
                        action: async () =>
                            (await l.togglePlaylistLike({ entityId: (0, iQ.m)(i), userId: o.account.data.uid, ownerId: i.uid, kindId: i.kind })) === iM.f.OK,
                        notification: (0, d.jsx)(i1.T, { playlist: { ...i, url: p, isLiked: !f } }),
                    }),
                    y = (0, iJ.f)(i),
                    C = c.isPinned(y),
                    j = iR({
                        action: async () => !!(await c.togglePlaylistPin({ uid: i.uid, kind: i.kind }, y)),
                        notification: (0, d.jsx)(i2.l, { playlist: { ...i, url: p, isPinned: !C } }),
                    });
                return (0, d.jsxs)(d.Fragment, {
                    children: [
                        !u && (0, d.jsx)(iD.L, { className: a, iconClassName: n, onClick: j, isPinned: C }),
                        !g && !h && (0, d.jsx)(iW.T, { className: a, iconClassName: n, onClick: A, isLiked: f, disabled: !o.isAuthorized }),
                        (0, d.jsx)(tM.H, {
                            withNotification: !u,
                            withSubmenu: !u,
                            className: a,
                            iconClassName: n,
                            shareLink: b,
                            disabled: !x,
                            entityMeta: { variant: tw.Y.PLAYLIST, playlistOwnerName: r, playlistOwnerLogin: s, id: i.kind, title: i.title, path: v },
                        }),
                    ],
                });
            });
            var i5 = i(73096);
            let i6 = (0, u.PA)((e) => {
                    var t;
                    let { track: i, className: a, iconClassName: n, artistName: r, artistId: s } = e,
                        {
                            user: o,
                            library: l,
                            settings: { isMobile: c },
                        } = (0, U.g)(),
                        u = i.albumId ? '/album/:albumId/track/:trackId' : '/track/:trackId',
                        { shareLink: _, pathname: m } = (0, tE.b)(u, { params: { albumId: null != (t = i.albumId) ? t : '', trackId: i.id } }),
                        b = l.isTrackLiked(i.id),
                        v = iR({
                            action: async () => (await l.toggleTrackLike({ entityId: i.id, userId: o.account.data.uid, albumId: i.albumId })) === iM.f.OK,
                            notification: (0, d.jsx)(i5.T, { track: { ...i, isLiked: !b } }),
                        });
                    return (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)(iG.WithOffline, {
                                fallback: (0, d.jsx)(iW.T, { className: a, iconClassName: n, onClick: v, isLiked: b, disabled: !o.isAuthorized }),
                            }),
                            i.isNonUserGenerated &&
                                (0, d.jsx)(tM.H, {
                                    withNotification: !c,
                                    withSubmenu: !c,
                                    className: a,
                                    iconClassName: n,
                                    shareLink: _,
                                    entityMeta: { variant: tw.Y.TRACK, trackArtistName: r, trackArtistId: s, id: i.id, title: i.title, path: m, trackAlbumId: i.albumId },
                                }),
                        ],
                    });
                }),
                i9 = (e) => {
                    let { target: t } = e;
                    switch (t.type) {
                        case iP.K.Album:
                            return (0, d.jsx)(iK, {
                                className: iO().menuItem,
                                iconClassName: iO().menuItemIcon,
                                album: t.data,
                                artistName: t.data.artistName,
                                artistId: t.data.artistId,
                            });
                        case iP.K.Artist:
                            return (0, d.jsx)(i$, { className: iO().menuItem, iconClassName: iO().menuItemIcon, artist: t.data });
                        case iP.K.Playlist:
                            return (0, d.jsx)(i8, {
                                className: iO().menuItem,
                                iconClassName: iO().menuItemIcon,
                                playlist: t.data,
                                ownerName: t.data.ownerName,
                                ownerLogin: t.data.ownerLogin,
                            });
                        case iP.K.Various:
                            return (0, d.jsx)(i6, {
                                className: iO().menuItem,
                                iconClassName: iO().menuItemIcon,
                                track: t.data,
                                artistName: t.data.artistName,
                                artistId: t.data.artistId,
                            });
                    }
                },
                i4 = (0, u.PA)((e) => {
                    var t, i, a, n;
                    let { onClick: r, ...s } = e,
                        o = (0, ts.e)(),
                        l = (0, U.g)(),
                        { formatMessage: c } = (0, v.A)(),
                        {
                            vibe: u,
                            sonataState: { contextType: _, contextId: b, entityMeta: p, isVibeContext: h },
                        } = l,
                        g = ((e, t) => {
                            var i, a, n, r, s, o, l, d, c, u, _, m, b, v, p, h, g, x, f, A, y, C;
                            switch (null != t ? t : null == e ? void 0 : e.sourceContextType) {
                                case iN.h.SEARCH:
                                case iN.h.MUSIC_HISTORY:
                                case iN.h.MUSIC_HISTORY_SEARCH:
                                case iN.h.DOWNLOADED_TRACKS:
                                case iN.h.USER_TRACKS:
                                case iN.h.ARTIST_FAMILIAR_FROM_WAVE:
                                case iN.h.ARTIST_MY_COLLECTION:
                                    return;
                            }
                            switch (null == e ? void 0 : e.type) {
                                case iP.K.Album: {
                                    let { meta: t } = e;
                                    return {
                                        type: e.type,
                                        data: {
                                            id: Number(t.id),
                                            title: null != (r = t.title) ? r : '',
                                            type: t.type,
                                            coverUri: t.coverUri,
                                            artistName: null == (a = t.artists) || null == (i = a[0]) ? void 0 : i.name,
                                            artistId: (null == (n = t.artists) ? void 0 : n[0]) ? String(t.artists[0].id) : void 0,
                                        },
                                    };
                                }
                                case iP.K.Artist: {
                                    let { meta: t } = e;
                                    return {
                                        type: e.type,
                                        data: {
                                            id: String(t.id),
                                            name: null == (s = t.artist) ? void 0 : s.name,
                                            coverUri: null == (l = t.artist) || null == (o = l.cover) ? void 0 : o.uri,
                                            isAvailable: !t.artist || (0, ik.f)(t.artist).available,
                                        },
                                    };
                                }
                                case iP.K.Various: {
                                    let { meta: t } = e;
                                    return {
                                        type: e.type,
                                        data: {
                                            id: String(t.id),
                                            albumId: null == (c = t.albums) || null == (d = c[0]) ? void 0 : d.id,
                                            title: null != (b = t.title) ? b : '',
                                            type: t.type,
                                            coverUri: t.coverUri,
                                            isNonUserGenerated: t.trackSource !== iT.J.UGC && t.trackSource !== iT.J.OWN_REPLACED_TO_UGC,
                                            artistName: null == (_ = t.artists) || null == (u = _[0]) ? void 0 : u.name,
                                            artistId: (null == (m = t.artists) ? void 0 : m[0]) ? String(t.artists[0].id) : void 0,
                                        },
                                    };
                                }
                                case iP.K.Playlist: {
                                    let { meta: t } = e,
                                        [i, a] = String(t.id).split(':'),
                                        n = null != (f = t.uid) ? f : Number(i),
                                        r = null != (A = t.kind) ? A : Number(a);
                                    if (!Number.isFinite(n) || !Number.isFinite(r)) return;
                                    return {
                                        type: e.type,
                                        data: {
                                            uid: n,
                                            kind: r,
                                            uuid: null != (y = t.playlistUuid) ? y : t.uuid,
                                            title: t.title,
                                            coverUri: (null == (v = t.cover) ? void 0 : v.uri) || (null == (h = t.cover) || null == (p = h.itemsUri) ? void 0 : p[0]),
                                            visibility: t.visibility,
                                            isAvailable: null == (C = t.available) || C,
                                            ownerName: null == (g = t.owner) ? void 0 : g.name,
                                            ownerLogin: null == (x = t.owner) ? void 0 : x.login,
                                        },
                                    };
                                }
                                default:
                                    return;
                            }
                        })(
                            _ ? (null == o || null == (t = o.state.currentContext.value) ? void 0 : t.data) : void 0,
                            p
                                ? null == o || null == (a = o.state.queueState.currentEntity.value) || null == (i = a.sourceContext)
                                    ? void 0
                                    : i.data.sourceContextType
                                : void 0,
                        ),
                        x = u.isShuffleVibe && h ? c({ id: 'entity-names.my-vibe' }) : s.context,
                        f = (0, m.useCallback)((e) => (0, d.jsx)(iB, { ...s, ...e, onReset: r }), [r, s]);
                    return h && (null == (n = u.meta) ? void 0 : n.stationType) === eu.q7
                        ? (0, d.jsx)(ij, { wave: u.meta, context: s.context, className: iO().menuItem, renderContextButton: f }, ''.concat(_, ':').concat(b))
                        : (0, m.createElement)(iB, { ...s, context: x, key: ''.concat(_, ':').concat(b), onReset: r }, g && (0, d.jsx)(i9, { target: g }));
                }),
                i3 = (e) => {
                    var t;
                    return null != (t = e.fallbackMaxLines) ? t : e.maxLines;
                };
            var i7 = i(30295),
                ae = i.n(i7);
            let at = (e) => {
                    let { textOptions: t, children: i } = e,
                        { setContainerRef: a, lineClamp: n } = ((e) => {
                            let [t, i] = (0, A.d)(),
                                [a, n] = (0, m.useState)(() => i3(e));
                            return (
                                (0, m.useEffect)(() => {
                                    n(i3(e));
                                }, [e.fallbackMaxLines, e.maxLines]),
                                (0, iS.mf)(t, e, n),
                                { setContainerRef: i, lineClamp: a }
                            );
                        })(t);
                    return (0, d.jsx)('div', {
                        ref: a,
                        className: ae().root,
                        'data-test-id': g.e8.vibe.VIBE_DYNAMIC_ARTISTS,
                        children: (0, m.cloneElement)(i, { lineClamp: n }),
                    });
                },
                ai = {
                    src: '/_next/static/media/q2v-glow-w120.1677f964.png',
                    height: 256,
                    width: 400,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEX/e//qkv/7XPX4vv/0UO/nYPj6UO7sP+beSvr6Ren/VvL8k/nrff8yHG/VAAAADHRSTlMBZCkReHVo/v3OUx1DIc6HAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHklEQVR4nGNggANmRlYWNiYGBgZGHg52Ti5kESgAAAflAFodTC0aAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 5,
                },
                aa = {
                    src: '/_next/static/media/q2v-glow-w160.81b6098e.png',
                    height: 256,
                    width: 480,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEVMaXH/cf30Quf+Tu7ZTvDNZPvhlP/vdPdHyLt4AAAACHRSTlMADLtextdqZIlEHsoAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BgYGBgZGRkYGBgY2VhYmJmRGJApQAD1gA1KQvxbwAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 4,
                },
                an = {
                    src: '/_next/static/media/q2v-glow-w200.3dd3deeb.png',
                    height: 256,
                    width: 560,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEX/eftMaXH4P+X/T+3UUvTHZ/vflP/lS+7LLK/gAAAACHRSTlMIALNXwM9gvU78oPkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BkZGRkYGBgZGBjZWFnYmJmQDBgUgAFNABFuS+NPAAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 4,
                },
                ar = {
                    src: '/_next/static/media/q2v-glow-w240.520a1100.png',
                    height: 256,
                    width: 640,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEX6UfH/Vf/haPn0P+bZjf/6RefTVPX///7NfP79Qub/X/R17Zh8AAAAC3RSTlMtAyrZGzfsB8+eGFOiud8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BkYWJiYGVgZGDnYGNjZubkYoCJAAAEdABTyJLycgAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                as = {
                    src: '/_next/static/media/q2v-glow-w280.b6e7b279.png',
                    height: 256,
                    width: 720,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEX/Su7kZfryVfLyP+bUUvXZf/v/ZvXjqv/9POLfof/Fb/xpkARsAAAAC3RSTlMvJCrT4R4MBLkx67AUSkUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BnZWRkYmBgY+DkYmFhZuZgYICJAAAE3wBW+41RHAAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                ao = {
                    src: '/_next/static/media/q2v-glow-w320.6a3648a7.png',
                    height: 256,
                    width: 800,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEXAVtzfRsj2TcbFTtj+W8itbuvtQMWsa+uxWOTYQ83r0pUkAAAACnRSTlM6OjG2DjOtobi1kYtftgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB1JREFUeJxjYGVgYGBkZGJhYOdgZuZkY2NigIkAAAPUAEdB7RkuAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                al = {
                    src: '/_next/static/media/q2v-glow-w360.fc3c68a3.png',
                    height: 256,
                    width: 880,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEXkQ8uxYOfFUtv/UsWsg/ZbnY/NAAAABXRSTlNxcHMfH3sDujAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAZSURBVHicBcEBAQAAAIIgs/5vDlgiUBYVegD3ABpDksaVAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 2,
                },
                ad = {
                    src: '/_next/static/media/q2v-glow-w400.265dfc0a.png',
                    height: 256,
                    width: 960,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEXjQ8u+VOCtZ+v3UsOsf/DSwDGDAAAABXRSTlNsbWoiImB3+hEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAATSURBVHicY2BhYmRkYGBgZoAxAADtABejooRHAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 2,
                },
                ac = (e, t) => ({ '--q2v-glow-image': 'url('.concat(e.src, ')'), '--q2v-glow-aspect-ratio': t }),
                au = (0, u.PA)((e) => {
                    var t;
                    let { context: i, isResetAvailable: a, isHidden: n, onClick: r, className: s } = e,
                        { vibe: o, sonataState: l, experiments: u } = (0, U.g)(),
                        { formatMessage: _ } = (0, v.A)(),
                        [b, p] = (0, A.d)(),
                        [h, x] = (0, A.d)(),
                        [j, N] = (0, m.useState)(null);
                    (0, iS.mf)(b, io);
                    let P = (0, ti.b)(),
                        k = _({ id: 'interface-actions.reset-context' }, { context: i }),
                        S = (0, f.c)(() => {
                            (r(), P(!0));
                        }),
                        w = o.isShuffleVibe && l.isVibeContext,
                        I = u.checkExperiment(z.z.WebNextNewWaveTabFeedbackForm, 'on'),
                        E = !!(null == (t = o.meta) ? void 0 : t.isQ2V) && l.isVibeContext,
                        O = (0, y.L)(() => (w ? _({ id: 'entity-names.my-vibe' }) : i));
                    (0, m.useLayoutEffect)(() => {
                        if (!E || !a || null === h) return void N(null);
                        let e = () => {
                            let { width: e } = h.getBoundingClientRect();
                            e > 0 && N(e);
                        };
                        e();
                        let t = new ResizeObserver(e);
                        return (
                            t.observe(h),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [h, i, E, a, O]);
                    let B = (0, y.L)(() => {
                            if (j)
                                return ((e) =>
                                    e < 120
                                        ? ac(ai, '200 / 128')
                                        : e < 160
                                          ? ac(aa, '240 / 128')
                                          : e < 200
                                            ? ac(an, '280 / 128')
                                            : e < 240
                                              ? ac(ar, '320 / 128')
                                              : e < 280
                                                ? ac(as, '360 / 128')
                                                : e < 320
                                                  ? ac(ao, '400 / 128')
                                                  : e < 360
                                                    ? ac(al, '440 / 128')
                                                    : ac(ad, '480 / 128'))(j);
                        }),
                        M = (0, y.L)(() =>
                            i
                                ? a
                                    ? (0, d.jsxs)(C.$, {
                                          ref: x,
                                          className: (0, c.$)(iI().button, { [iI().button_q2v]: E }),
                                          radius: 'xxxl',
                                          withHover: !0,
                                          withRipple: !E,
                                          onClick: S,
                                          'aria-label': k,
                                          'data-test-id': g.e8.vibe.RESET_VIBE_CONTEXT_BUTTON,
                                          children: [
                                              (0, d.jsx)(T.HL, {
                                                  variant: 'span',
                                                  className: (0, c.$)(iI().context, { [iI().context_q2v]: E }),
                                                  lineClamp: 2,
                                                  children: O,
                                              }),
                                              (0, d.jsx)(Y.I, {
                                                  variant: 'close_filled',
                                                  size: 'xs',
                                                  className: iI().icon,
                                                  'data-test-id': g.e8.vibe.RESET_VIBE_CONTEXT_BUTTON_ICON,
                                              }),
                                          ],
                                      })
                                    : (0, d.jsx)('div', {
                                          className: iI().container,
                                          children: (0, d.jsx)(T.HL, {
                                              variant: 'span',
                                              className: iI().context,
                                              lineClamp: 2,
                                              'data-test-id': g.e8.vibe.RESET_VIBE_CONTEXT_STATIC_TEXT,
                                              children: O,
                                          }),
                                      })
                                : null,
                        );
                    return (0, d.jsx)('div', {
                        className: (0, c.$)(iI().root, s, { [iI().root_visible]: !n, [iI().root_q2v]: E && null !== j, [iI().root_withFeedbackForm]: I }),
                        style: B,
                        ref: p,
                        'aria-hidden': !!n,
                        inert: !!n,
                        children: M,
                    });
                }),
                a_ = I.default.default(() =>
                    Promise.all([i.e(3606), i.e(6002), i.e(5637), i.e(3328)])
                        .then(i.bind(i, 59680))
                        .then((e) => ({ default: e.Wheel })),
                );
            var am = i(35622),
                ab = i(12714),
                av = i(95798),
                ap = i.n(av);
            let ah = (0, u.PA)(() => {
                let {
                        wizard: e,
                        settings: { isMobile: t },
                    } = (0, U.g)(),
                    { formatMessage: i } = (0, v.A)(),
                    a = (0, f.c)(() => {
                        (e.introModal.close(), e.modal.open());
                    });
                return (0, d.jsxs)(am.a, {
                    className: (0, c.$)((0, ab.J)(eH.S.Dark), ap().root, { [ap().root_mobile]: t }),
                    headerClassName: ap().header,
                    contentClassName: ap().content,
                    size: 'fitContent',
                    placement: t ? 'default' : 'center',
                    enableSwipe: t,
                    overlayColor: 'full',
                    restoreFocus: !1,
                    labelClose: i({ id: 'interface-actions.close' }),
                    open: e.introModal.isOpened,
                    onOpenChange: e.introModal.onOpenChange,
                    onClose: e.introModal.close,
                    children: [
                        (0, d.jsx)(j._V, {
                            src: 'avatars.mds.yandex.net/get-music-misc/70850/img.6a15a60535ffcf283a9da9e0/%%',
                            srcSet: ''.concat('avatars.mds.yandex.net/get-music-misc/70683/img.6a15a60f5d36c3160a7fb52a/%%', ' 2x'),
                            className: ap().image,
                            size: 375,
                            withAvatarReplace: !0,
                            withAspectRatio: !0,
                            fit: 'contain',
                            alt: '',
                            'aria-hidden': !0,
                        }),
                        (0, d.jsxs)('div', {
                            className: ap().text,
                            children: [
                                (0, d.jsx)(T.DZ, { variant: 'h2', size: 'xl', className: ap().title, children: i({ id: 'wizard.title' }) }),
                                (0, d.jsx)(T.HL, { variant: 'span', size: 'm', className: ap().description, children: i({ id: 'wizard.description' }) }),
                            ],
                        }),
                        (0, d.jsx)(C.$, { className: ap().button, color: 'primary', size: 'm', radius: 'xxxl', onClick: a, children: i({ id: 'wizard.buttonText' }) }),
                    ],
                });
            });
            var ag = i(33049),
                ax = i(17226),
                af = i(95314),
                aA = (function (e) {
                    return ((e.SleepingAlice = 'sleeping_alice'), (e.SleepTech = 'sleep_tech'), e);
                })({}),
                ay = i(16886);
            let aC = (e) => {
                    let { queueState: t, direction: i, batchSize: a } = e,
                        { trackIds: n, currentIndex: r } = t,
                        s = [],
                        o = 0,
                        l = 0;
                    'forward' === i ? ((o = r + 1), (l = Math.min(n.length - 1, o + a - 1))) : (o = Math.max(0, (l = r - 1) - a + 1));
                    for (let e = o; e <= l; e++) {
                        let t = n[e];
                        t && s.push(t);
                    }
                    return s;
                },
                aj = (e) => {
                    let { queueState: t, backwardSize: i, forwardSize: a } = e,
                        n = Math.max(0, t.currentIndex - i),
                        r = Math.min(t.trackIds.length - 1, t.currentIndex + a),
                        s = [];
                    for (let e = n; e <= r; e++) {
                        let i = t.trackIds[e];
                        i && s.push(i);
                    }
                    return s;
                },
                aN = (e) => {
                    let { queueState: t, direction: i, isRequested: a } = e,
                        n = 'forward' === i ? 1 : -1,
                        r = 0;
                    for (let e = t.currentIndex + n; e >= 0 && e < t.trackIds.length; e += n) {
                        let i = t.trackIds[e];
                        if (i && a(i)) r++;
                        else break;
                    }
                    return r <= 3;
                };
            var aP = i(58025),
                aT = i(87655),
                ak = i(39145);
            let aS = 'viewedCards',
                aw = 'viewedBigCards';
            class aI extends ak.F {
                async addViewedIds(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([aS], 'readwrite').objectStore(aS);
                        return Promise.all(e.map((e) => i.put({ uid: this.uid, cardId: e }))).then(() => i.index('uid').count(this.uid));
                    })
                        .then((e) => ('number' == typeof e && e > 30 ? this.evictViewedCardsOverLimit() : Promise.resolve()))
                        .catch(aT.A);
                }
                async addViewedBigCards(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([aw], 'readwrite').objectStore(aw);
                        return Promise.all(e.flatMap((e) => e.bigCardIds.map((t) => ({ uid: this.uid, cardId: e.cardId, bigCardId: t }))).map((e) => i.put(e))).then(() =>
                            i.index('uid').count(this.uid),
                        );
                    })
                        .then((e) => ('number' == typeof e && e > 30 ? this.evictViewedBigCardsOverLimit() : Promise.resolve()))
                        .catch(aT.A);
                }
                async getViewedIds() {
                    return this.executeTransaction((e) => e.getAllFromIndex(aS, 'uid', this.uid).then((e) => e.map((e) => e.cardId)), { defaultValue: [] }).catch(
                        () => [],
                    );
                }
                async getViewedBigCards() {
                    return this.executeTransaction(
                        (e) =>
                            e.getAllFromIndex(aw, 'uid', this.uid).then((e) => {
                                let t = new Map();
                                return (
                                    e.forEach((e) => {
                                        var i;
                                        let a = null != (i = t.get(e.cardId)) ? i : [];
                                        (a.push(e.bigCardId), t.set(e.cardId, a));
                                    }),
                                    Array.from(t.entries()).map((e) => {
                                        let [t, i] = e;
                                        return { cardId: t, bigCardIds: i };
                                    })
                                );
                            }),
                        { defaultValue: [] },
                    ).catch(() => []);
                }
                async clearSentIds(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([aS], 'readwrite').objectStore(aS);
                        return Promise.all(e.map((e) => i.delete([this.uid, e]))).then(aT.A);
                    }).catch(aT.A);
                }
                async clearSentBigCards(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([aw], 'readwrite').objectStore(aw);
                        return Promise.all(e.flatMap((e) => e.bigCardIds.map((t) => [this.uid, e.cardId, t])).map((e) => i.delete(e))).then(aT.A);
                    }).catch(aT.A);
                }
                async evictViewedCardsOverLimit() {
                    return this.executeTransaction((e) => {
                        let t = e.transaction([aS], 'readwrite').objectStore(aS).index('uid');
                        return t.count(this.uid).then((e) => {
                            if (e <= 30) return Promise.resolve();
                            let i = e - 30,
                                a = 0,
                                n = (e) =>
                                    !e || a >= i
                                        ? Promise.resolve()
                                        : (a++,
                                          e
                                              .delete()
                                              .then(() => e.continue())
                                              .then(n));
                            return t.openCursor(this.uid).then(n);
                        });
                    }).catch(aT.A);
                }
                async evictViewedBigCardsOverLimit() {
                    return this.executeTransaction((e) => {
                        let t = e.transaction([aw], 'readwrite').objectStore(aw).index('uid');
                        return t.count(this.uid).then((e) => {
                            if (e <= 30) return Promise.resolve();
                            let i = e - 30,
                                a = 0,
                                n = (e) =>
                                    !e || a >= i
                                        ? Promise.resolve()
                                        : (a++,
                                          e
                                              .delete()
                                              .then(() => e.continue())
                                              .then(n));
                            return t.openCursor(this.uid).then(n);
                        });
                    }).catch(aT.A);
                }
                constructor(e) {
                    (super({
                        dbName: 'music_words',
                        dbVersion: 2,
                        onUpgrade: (e) => {
                            (e.objectStoreNames.contains(aS) || e.createObjectStore(aS, { keyPath: ['uid', 'cardId'] }).createIndex('uid', 'uid', { unique: !1 }),
                                e.objectStoreNames.contains(aw) ||
                                    e.createObjectStore(aw, { keyPath: ['uid', 'cardId', 'bigCardId'] }).createIndex('uid', 'uid', { unique: !1 }));
                        },
                    }),
                        (0, aP._)(this, 'uid', void 0),
                        (this.uid = e));
                }
            }
            var aE = i(3669),
                aO = i(19156),
                aB = i(55538);
            let aM = (e) => {
                let { card: t, onClose: i } = e,
                    { notify: a } = (0, ih.l)(),
                    [n, r] = (0, m.useState)(null),
                    { formatMessage: s } = (0, v.A)(),
                    o = (0, f.c)((e) => {
                        (r(e), setTimeout(() => r(null), 3e3));
                    }),
                    l = (0, f.c)(async (e, n) => {
                        if (t && !t.isFeedbackPending)
                            try {
                                (await t.sendFeedback(e), i(), n && o(n));
                            } catch (e) {
                                a((0, d.jsx)(ix.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: ip.u.ERROR });
                            }
                    });
                return {
                    handleLike: (0, f.c)(async () => {
                        (null == t ? void 0 : t.isLiked) ? await l(aB.a.NEUTRAL) : await l(aB.a.LIKE, s({ id: 'words.like-feedback' }));
                    }),
                    handleDislike: (0, f.c)(async () => {
                        await l(aB.a.DISLIKE, s({ id: 'words.dislike-feedback' }));
                    }),
                    feedbackMessage: n,
                };
            };
            var aR = i(55204),
                aL = i.n(aR);
            function aW() {
                return (aW = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var a in i) ({}).hasOwnProperty.call(i, a) && (e[a] = i[a]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let aD = function (e) {
                return m.createElement(
                    'svg',
                    aW({ viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    a ||
                        (a = m.createElement('path', {
                            d: 'M10.0002 0.3125C7.25741 0.3125 4.69896 2.90254 2.43499 6.67723C0.171015 10.4519 -0.760012 14.016 0.707594 16.2922C2.17517 18.5683 5.69374 19.6874 9.99984 19.6875L10.0002 19.6875C14.3063 19.6874 17.8248 18.5683 19.2924 16.2922C20.76 14.016 19.829 10.4519 17.565 6.67723C15.3011 2.90269 12.7429 0.3125 10.0002 0.3125Z',
                            fill: 'currentColor',
                        })),
                );
            };
            function aV() {
                return (aV = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var a in i) ({}).hasOwnProperty.call(i, a) && (e[a] = i[a]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let aF = function (e) {
                return m.createElement(
                    'svg',
                    aV({ width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    n ||
                        (n = m.createElement('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M9.42032 25.4019C9.14037 21.0934 5.66809 17.6882 1.42578 17.6882V16.5741C5.8511 16.5741 9.43853 12.8687 9.43853 8.29785H10.5171C10.5171 12.8687 14.1045 16.5741 18.5299 16.5741V17.6882C14.2876 17.6882 10.8153 21.0934 10.5353 25.4019H9.42032Z',
                            fill: 'currentColor',
                        })),
                    r ||
                        (r = m.createElement('path', {
                            d: 'M19.8267 3.83H21.4167L23.9567 11H22.7067L22.0467 9.12H19.0267L18.3667 11H17.2967L19.8267 3.83ZM21.6767 8.08L20.5367 4.85L19.3967 8.08H21.6767ZM27.0991 3.83V11H25.8891V3.83H27.0991Z',
                            fill: 'currentColor',
                        })),
                );
            };
            function aU() {
                return (aU = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var a in i) ({}).hasOwnProperty.call(i, a) && (e[a] = i[a]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let az = function (e) {
                return m.createElement(
                    'svg',
                    aU({ viewBox: '0 0 12 12', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    s || (s = m.createElement('path', { d: 'M6 0C6 3.31 3.31 6 0 6C3.31 6 6 8.69 6 12C6 8.69 8.69 6 12 6C8.69 6 6 3.31 6 0Z', fill: 'currentColor' })),
                );
            };
            function aH() {
                return (aH = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var a in i) ({}).hasOwnProperty.call(i, a) && (e[a] = i[a]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let aK = function (e) {
                    return m.createElement(
                        'svg',
                        aH({ width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                        o ||
                            (o = m.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M9.42032 25.4029C9.14037 21.0944 5.66809 17.6891 1.42578 17.6891V16.5751C5.8511 16.5751 9.43853 12.8697 9.43853 8.29883H10.5171C10.5171 12.8697 14.1045 16.5751 18.5299 16.5751V17.6891C14.2876 17.6891 10.8153 21.0944 10.5353 25.4029H9.42032Z',
                                fill: 'currentColor',
                            })),
                        l ||
                            (l = m.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M22.4961 12.0999C22.3406 9.70631 20.4115 7.81449 18.0547 7.81449V7.19557C20.5132 7.19557 22.5062 5.13701 22.5062 2.59766H23.1054C23.1054 5.13701 25.0984 7.19557 27.5569 7.19557V7.81449C25.2001 7.81449 23.2711 9.70631 23.1155 12.0999H22.4961Z',
                                fill: 'currentColor',
                            })),
                    );
                },
                aG = (0, u.PA)((e) => {
                    let { className: t, dimmed: i, isFact: a } = e,
                        { experiments: n } = (0, U.g)(),
                        r = n.checkExperiment(z.z.WebNextWaveScreenWordsInWave, 'on_with_onyx'),
                        s = n.checkExperiment(z.z.WebNextWaveScreenWordsInWave, 'on'),
                        o = r && i,
                        l = (0, y.L)(() =>
                            r
                                ? (0, d.jsx)(aD, { className: (0, c.$)(aL().icon, aL().icon_okniks) })
                                : s
                                  ? a && !i
                                      ? (0, d.jsx)(aF, { className: (0, c.$)(aL().icon, aL().icon_sparkles) })
                                      : (0, d.jsx)(aK, { className: (0, c.$)(aL().icon, aL().icon_sparkles) })
                                  : void 0,
                        );
                    return (0, d.jsxs)('div', {
                        className: (0, c.$)(aL().root, { [aL().root_dimmed]: i }, t),
                        'aria-hidden': !0,
                        'data-test-id': g.Kq.words.WORDS_AI_BADGE,
                        children: [
                            (0, d.jsx)(j._V, {
                                src: 'avatars.mds.yandex.net/get-music-misc/2413828/img.69c13075ab25d7410604f669/%%',
                                size: 200,
                                withAvatarReplace: !0,
                                withLoadingIndicator: !1,
                                className: aL().glow,
                            }),
                            l,
                            o &&
                                (0, d.jsxs)('div', {
                                    className: aL().sparkles,
                                    children: [
                                        (0, d.jsx)(az, { className: aL().sparkle }),
                                        (0, d.jsx)(az, { className: aL().sparkle }),
                                        (0, d.jsx)(az, { className: aL().sparkle }),
                                        (0, d.jsx)(az, { className: aL().sparkle }),
                                    ],
                                }),
                        ],
                    });
                });
            var aY = i(76864),
                aq = i.n(aY);
            let aX = (e) => {
                let { children: t } = e;
                return (0, d.jsx)('div', {
                    className: aq().root,
                    children: (0, d.jsx)(T.HL, { variant: 'span', type: 'text', size: 'l', weight: 'medium', className: aq().text, children: t }),
                });
            };
            var a$ = i(7904),
                aZ = i.n(a$),
                aQ = i(83243);
            let aJ = (e) => {
                    let { url: t, title: i, prevTitle: a, className: n, analyticObjectId: r } = e,
                        s = (0, aE.D)(),
                        o = (0, tm.N)();
                    (0, m.useEffect)(() => {
                        a.current !== i && ((a.current = i), s(!0, ''));
                    }, [a, s, i]);
                    let l = (0, f.c)((e) => {
                        (e.stopPropagation(), o({ to: e8.AppScreen.Link, deepLink: t, objectId: r }));
                    });
                    return (0, d.jsx)(tp.N, {
                        href: t,
                        className: n,
                        onClick: l,
                        onKeyDown: l,
                        'data-test-id': g.Kq.words.WORDS_CARD_ACTION,
                        children: (0, d.jsx)(T.HL, { variant: 'span', type: 'text', size: 'l', weight: 'medium', children: i }),
                    });
                },
                a0 = (e) => {
                    let { actionType: t, onClick: i, children: a, ...n } = e,
                        r = (0, tt.m)(),
                        s = (0, f.c)((e) => {
                            (r({ actionType: t }), null == i || i(e));
                        });
                    return (0, d.jsx)(C.$, { onClick: s, ...n, children: a });
                },
                a1 = (e) => {
                    let { url: t, className: i, children: a } = e,
                        n = (0, tm.N)(),
                        r = (0, f.c)(() => {
                            n({ to: e8.AppScreen.Link, deepLink: t });
                        });
                    return (0, d.jsx)(tp.N, { href: t, className: i, onClick: r, 'data-test-id': g.Kq.words.WORDS_CARD_LINK, children: a });
                };
            var a2 = i(69969),
                a8 = i.n(a2);
            let a5 = (e) => {
                let { className: t } = e;
                return (0, d.jsx)('div', {
                    className: (0, c.$)(a8().root, t),
                    'data-test-id': g.Kq.words.WORDS_CARD_POPOVER_DISCLAIMER,
                    children: (0, d.jsx)(T.HL, {
                        variant: 'div',
                        type: 'text',
                        size: 's',
                        weight: 'medium',
                        className: a8().description,
                        'data-test-id': g.Kq.words.WORDS_CARD_POPOVER_DISCLAIMER_AI_TEXT,
                        children: (0, d.jsx)(p.A, { id: 'words.ai-description' }),
                    }),
                });
            };
            var a6 = i(36648),
                a9 = i(63619),
                a4 = i.n(a9);
            let a3 = (e) => {
                    let { isActive: t } = e;
                    return (0, d.jsxs)('div', {
                        className: a4().root,
                        'aria-busy': t,
                        'aria-live': t ? 'polite' : 'off',
                        children: [
                            (0, d.jsxs)('div', {
                                className: a4().topGroup,
                                children: [
                                    (0, d.jsx)(a6.n, { isActive: t, className: a4().line, textClassName: a4().topLinePrimary }),
                                    (0, d.jsx)(a6.n, { isActive: t, className: a4().line, textClassName: a4().topLineSecondary }),
                                ],
                            }),
                            (0, d.jsx)(a6.n, { isActive: t, className: a4().main, textClassName: a4().mainLine }),
                            (0, d.jsx)(a6.n, { isActive: t, className: a4().bottom, textClassName: a4().bottomLine }),
                        ],
                    });
                },
                a7 = (e) => {
                    let { text: t, forwardRef: i } = e,
                        a = (0, aE.D)();
                    return (
                        (0, m.useEffect)(() => {
                            a(!0, '');
                        }, []),
                        (0, d.jsx)(T.HL, { ref: i, variant: 'div', className: aZ().message, 'data-test-id': g.Kq.words.WORDS_CARD_FULLSCREEN_MESSAGE, children: t })
                    );
                },
                ne = (0, m.forwardRef)((e, t) => (0, d.jsx)(a7, { forwardRef: t, ...e })),
                nt = (0, u.PA)((e) => {
                    var t, i;
                    let { card: a, feedbackMessage: n, onLike: r, onDislike: s, onClose: o, onScreenClosed: l } = e,
                        { words: u } = (0, U.g)(),
                        { formatMessage: _ } = (0, v.A)(),
                        b = (0, m.useRef)(null),
                        h = null != n ? n : null == (t = u.activeBigCard) ? void 0 : t.text,
                        x = null != (i = u.activeBigCardId) ? i : '',
                        A = (0, m.useRef)(null),
                        N = (0, m.useRef)(null),
                        [P, k] = (0, m.useState)(!1),
                        { pageEntityId: S } = (0, L.$)(),
                        w = (0, aQ.l)({ mainObjectType: e8.DomainObjectType.Fact }),
                        I = (0, y.L)(() => {
                            var e, t, i;
                            return (null == (t = u.activeBigCard) || null == (e = t.actions) ? void 0 : e.length)
                                ? u.activeBigCard.actions
                                : null != (i = null == a ? void 0 : a.actions)
                                  ? i
                                  : [];
                        });
                    (0, m.useEffect)(
                        () => (
                            u.bigCardFullscreen.isOpened && S && w(!0),
                            () => {
                                (w(!1), l());
                            }
                        ),
                        [l, S, w, u.bigCardFullscreen.isOpened],
                    );
                    let E = (0, f.c)(() => {
                            o();
                        }),
                        O = (0, f.c)((e) => {
                            e.stopPropagation();
                        }),
                        B = (0, f.c)(() => {
                            let e = A.current;
                            if (!e) return void k(!1);
                            k(e.scrollHeight > e.clientHeight);
                        }),
                        M = (0, f.c)((e) => {
                            var t;
                            if (((A.current = e), null == (t = N.current) || t.disconnect(), (N.current = null), !e)) return void k(!1);
                            B();
                            let i = new ResizeObserver(B);
                            (i.observe(e), (N.current = i));
                        }),
                        R = (0, y.L)(() =>
                            u.isShimmerVisible
                                ? (0, d.jsx)('div', { className: aZ().content, onClick: O, children: (0, d.jsx)(a3, { isActive: u.isShimmerActive }) })
                                : (0, d.jsxs)('div', {
                                      className: aZ().content,
                                      onClick: O,
                                      children: [
                                          (0, d.jsx)('div', {
                                              className: (0, c.$)(aZ().messageScroll, { [aZ().messageScroll_scrollable]: P }),
                                              children: (0, d.jsx)(af.B, {
                                                  objectType: e8.DomainObjectType.BigFact,
                                                  objectId: x,
                                                  objectPosX: 1,
                                                  objectPosY: 1,
                                                  objectsCount: 1,
                                                  children: (0, d.jsx)(ne, { ref: M, text: h }),
                                              }),
                                          }),
                                          (0, d.jsxs)('div', {
                                              className: aZ().actions,
                                              children: [
                                                  (null == a ? void 0 : a.action) &&
                                                      a.action.url &&
                                                      (0, d.jsx)(af.B, {
                                                          objectType: e8.DomainObjectType.BigFact,
                                                          objectId: x,
                                                          objectPosX: 1,
                                                          objectPosY: 1,
                                                          objectsCount: 1,
                                                          children: (0, d.jsx)(aJ, {
                                                              url: a.action.url,
                                                              title: a.action.title,
                                                              prevTitle: b,
                                                              className: aZ().primaryAction,
                                                              analyticObjectId: x,
                                                          }),
                                                      }),
                                                  I.length > 0 &&
                                                      I.map((e, t) =>
                                                          (0, d.jsx)(
                                                              af.B,
                                                              {
                                                                  objectType: e8.DomainObjectType.Link,
                                                                  objectId: x,
                                                                  objectPosX: t + 1,
                                                                  objectPosY: 1,
                                                                  objectsCount: I.length,
                                                                  children: (0, d.jsxs)(a1, {
                                                                      url: e.url,
                                                                      className: (0, c.$)(aZ().sourceItem, { [aZ().sourceItem_withoutIcon]: !e.faviconUrl }),
                                                                      children: [
                                                                          e.faviconUrl &&
                                                                              (0, d.jsx)(j._V, {
                                                                                  src: e.faviconUrl,
                                                                                  fit: 'cover',
                                                                                  'aria-hidden': !0,
                                                                                  className: aZ().sourceIcon,
                                                                                  'data-test-id': g.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                              }),
                                                                          (0, d.jsx)(T.HL, {
                                                                              variant: 'span',
                                                                              type: 'text',
                                                                              size: 'l',
                                                                              weight: 'medium',
                                                                              lineClamp: 1,
                                                                              className: aZ().actionText,
                                                                              'data-test-id': g.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                              children: e.title,
                                                                          }),
                                                                      ],
                                                                  }),
                                                              },
                                                              e.url,
                                                          ),
                                                      ),
                                              ],
                                          }),
                                          a &&
                                              (0, d.jsx)(af.B, {
                                                  objectType: e8.DomainObjectType.BigFact,
                                                  objectId: x,
                                                  objectsCount: 2,
                                                  objectPosX: 1,
                                                  objectPosY: 1,
                                                  children: (0, d.jsxs)('div', {
                                                      className: aZ().feedback,
                                                      children: [
                                                          (0, d.jsxs)(a0, {
                                                              actionType: a.isLiked ? e8.ActionType.Unlike : e8.ActionType.Like,
                                                              variant: 'text',
                                                              withRipple: !1,
                                                              className: (0, c.$)(aZ().feedbackButton, { [aZ().feedbackButton_active]: a.isLiked }),
                                                              onClick: r,
                                                              'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                                              children: [
                                                                  (0, d.jsx)(Y.I, {
                                                                      variant: 'thumbUp',
                                                                      size: 'xxs',
                                                                      'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON,
                                                                  }),
                                                                  (0, d.jsx)(T.HL, {
                                                                      variant: 'span',
                                                                      type: 'text',
                                                                      size: 'l',
                                                                      weight: 'medium',
                                                                      'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_TEXT,
                                                                      children: (0, d.jsx)(p.A, { id: 'words.like' }),
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, d.jsx)('div', { className: aZ().feedbackDivider }),
                                                          (0, d.jsxs)(a0, {
                                                              actionType: e8.ActionType.Dislike,
                                                              variant: 'text',
                                                              withRipple: !1,
                                                              className: (0, c.$)(aZ().feedbackButton, { [aZ().feedbackButton_active]: a.isDisliked }),
                                                              onClick: s,
                                                              'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                                              children: [
                                                                  (0, d.jsx)(Y.I, {
                                                                      variant: 'thumbDown',
                                                                      size: 'xxs',
                                                                      'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                                  }),
                                                                  (0, d.jsx)(T.HL, {
                                                                      variant: 'span',
                                                                      type: 'text',
                                                                      size: 'l',
                                                                      weight: 'medium',
                                                                      'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_TEXT,
                                                                      children: (0, d.jsx)(p.A, { id: 'words.dislike' }),
                                                                  }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                      ],
                                  }),
                        );
                    return (
                        (0, m.useEffect)(() => {
                            B();
                        }, [h, B]),
                        (0, d.jsxs)(d.Fragment, {
                            children: [
                                (0, d.jsx)('div', {
                                    className: aZ().closeButtonWrapper,
                                    children: (0, d.jsx)(C.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'm',
                                        icon: (0, d.jsx)(Y.I, { variant: 'close', size: 'xs' }),
                                        onClick: o,
                                        'aria-label': _({ id: 'interface-actions.close' }),
                                        'data-test-id': g.Kq.words.WORDS_CARD_FULLSCREEN_CLOSE_BUTTON,
                                    }),
                                }),
                                (0, d.jsxs)('div', {
                                    className: aZ().layout,
                                    children: [
                                        (0, d.jsx)('div', {
                                            className: (0, c.$)(aZ().contentArea, { [aZ().contentArea_withMessageScroll]: P }),
                                            onClick: E,
                                            children: R,
                                        }),
                                        (null == a ? void 0 : a.isFact) && (0, d.jsx)(a5, { className: aZ().disclaimer }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                ni = (0, u.PA)((e) => {
                    let { card: t, feedbackMessage: i, onLike: a, onDislike: n, onClose: r, onScreenClosed: s } = e,
                        {
                            words: o,
                            settings: { isMobile: l },
                        } = (0, U.g)(),
                        c = (0, f.c)((e) => {
                            (o.bigCardFullscreen.onOpenChange(e), e || r());
                        });
                    return (0, d.jsx)(am.a, {
                        className: aZ().root,
                        open: o.bigCardFullscreen.isOpened,
                        onOpenChange: c,
                        onClose: r,
                        size: 'fullscreen',
                        placement: 'center',
                        showHeader: !1,
                        isMobile: l,
                        contentClassName: aZ().modalContent,
                        'data-test-id': g.Kq.words.WORDS_CARD_FULLSCREEN_MODAL,
                        children: (0, d.jsx)(eW.F, {
                            blockId: e8.EntityTypes.WordsInWave,
                            blockType: e8.EntityTypes.WordsInWave,
                            blockPosX: 1,
                            blockPosY: 1,
                            mainObjectType: e8.DomainObjectType.Fact,
                            mainObjectId: null == t ? void 0 : t.id,
                            children: (0, d.jsx)(nt, { card: t, feedbackMessage: i, onLike: a, onDislike: n, onClose: r, onScreenClosed: s }),
                        }),
                    });
                });
            var na = i(43841),
                nn = i.n(na);
            let nr = (0, u.PA)((e) => {
                let { card: t, onLike: i, onDislike: a } = e,
                    n = (0, aQ.l)({ mainObjectType: e8.DomainObjectType.Fact });
                return (
                    (0, m.useEffect)(
                        () => (
                            n(!0),
                            () => {
                                n(!1);
                            }
                        ),
                        [n],
                    ),
                    (0, d.jsxs)('div', {
                        className: nn().root,
                        'data-test-id': g.Kq.words.WORDS_CARD_POPOVER_DESKTOP,
                        children: [
                            t.actions &&
                                t.actions.length > 0 &&
                                (0, d.jsxs)(d.Fragment, {
                                    children: [
                                        t.actions.map((e, i) => {
                                            var a, n;
                                            return (0, d.jsx)(
                                                eW.F,
                                                {
                                                    blockId: e8.EntityTypes.WordsInWave,
                                                    blockType: e8.EntityTypes.WordsInWave,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    mainObjectType: e8.DomainObjectType.Fact,
                                                    mainObjectId: t.id,
                                                    children: (0, d.jsx)(af.B, {
                                                        objectType: e8.DomainObjectType.Link,
                                                        objectId: e.url,
                                                        objectPosX: i + 1,
                                                        objectPosY: 1,
                                                        objectsCount: null != (n = null == (a = t.actions) ? void 0 : a.length) ? n : 0,
                                                        children: (0, d.jsxs)(a1, {
                                                            url: e.url,
                                                            className: (0, c.$)(nn().item, nn().actionItem, nn().sourceItem, {
                                                                [nn().sourceItem_withoutIcon]: !e.faviconUrl,
                                                            }),
                                                            children: [
                                                                e.faviconUrl &&
                                                                    (0, d.jsx)(j._V, {
                                                                        src: e.faviconUrl,
                                                                        fit: 'cover',
                                                                        'aria-hidden': !0,
                                                                        className: nn().sourceIcon,
                                                                        'data-test-id': g.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                    }),
                                                                (0, d.jsx)(T.HL, {
                                                                    variant: 'span',
                                                                    type: 'text',
                                                                    size: 'l',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    'data-test-id': g.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                    children: e.title,
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.url,
                                            );
                                        }),
                                        (0, d.jsx)('div', { className: nn().divider }),
                                    ],
                                }),
                            (0, d.jsxs)(eW.F, {
                                blockId: e8.EntityTypes.WordsInWave,
                                blockType: e8.EntityTypes.WordsInWave,
                                blockPosX: 1,
                                blockPosY: 2,
                                mainObjectType: e8.DomainObjectType.Fact,
                                mainObjectId: t.id,
                                children: [
                                    (0, d.jsx)(af.B, {
                                        objectType: e8.DomainObjectType.Fact,
                                        objectId: t.id,
                                        objectsCount: 2,
                                        objectPosX: 1,
                                        objectPosY: 1,
                                        children: (0, d.jsxs)(a0, {
                                            actionType: t.isLiked ? e8.ActionType.Unlike : e8.ActionType.Like,
                                            variant: 'text',
                                            withHover: !1,
                                            className: (0, c.$)(nn().item, nn().actionItem, { [nn().actionItem_active]: t.isLiked }),
                                            onClick: i,
                                            'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                            children: [
                                                (0, d.jsx)(Y.I, { variant: 'thumbUp', size: 'xs', 'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON }),
                                                (0, d.jsx)(T.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_TEXT,
                                                    children: (0, d.jsx)(p.A, { id: 'words.like' }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, d.jsx)(af.B, {
                                        objectType: e8.DomainObjectType.Fact,
                                        objectId: t.id,
                                        objectsCount: 2,
                                        objectPosX: 1,
                                        objectPosY: 2,
                                        children: (0, d.jsxs)(a0, {
                                            actionType: e8.ActionType.Dislike,
                                            variant: 'text',
                                            withHover: !1,
                                            className: (0, c.$)(nn().item, nn().actionItem, { [nn().actionItem_active]: t.isDisliked }),
                                            onClick: a,
                                            'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                            children: [
                                                (0, d.jsx)(Y.I, {
                                                    variant: 'thumbDown',
                                                    size: 'xs',
                                                    'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                }),
                                                (0, d.jsx)(T.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_TEXT,
                                                    children: (0, d.jsx)(p.A, { id: 'words.dislike' }),
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            t.isFact && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)('div', { className: nn().divider }), (0, d.jsx)(a5, {})] }),
                        ],
                    })
                );
            });
            var ns = i(48615),
                no = i.n(ns);
            let nl = (0, u.PA)((e) => {
                let { card: t, onLike: i, onDislike: a } = e,
                    { formatMessage: n } = (0, v.A)(),
                    r = (0, aQ.l)({ mainObjectType: e8.DomainObjectType.Fact }),
                    s = n({ id: 'words.like' }),
                    o = n({ id: 'words.dislike' });
                return (
                    (0, m.useEffect)(
                        () => (
                            r(!0),
                            () => {
                                r(!1);
                            }
                        ),
                        [r],
                    ),
                    (0, d.jsxs)('div', {
                        className: no().root,
                        'data-test-id': g.Kq.words.WORDS_CARD_POPOVER_MOBILE,
                        children: [
                            (0, d.jsxs)('div', {
                                className: no().container,
                                children: [
                                    (0, d.jsx)(T.DZ, { variant: 'div', size: 'xs', weight: 'bold', lineClamp: 5, className: no().text, children: t.text }),
                                    t.action &&
                                        t.action.url &&
                                        (0, d.jsx)(eW.F, {
                                            blockId: e8.EntityTypes.WordsInWave,
                                            blockType: e8.EntityTypes.WordsInWave,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            mainObjectType: e8.DomainObjectType.Fact,
                                            mainObjectId: t.id,
                                            children: (0, d.jsx)(af.B, {
                                                objectType: e8.DomainObjectType.Link,
                                                objectId: t.action.url,
                                                objectPosX: 1,
                                                objectPosY: 1,
                                                objectsCount: 1,
                                                children: (0, d.jsx)(a1, {
                                                    url: t.action.url,
                                                    className: no().action,
                                                    children: (0, d.jsx)(T.HL, {
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        lineClamp: 2,
                                                        children: t.action.title,
                                                    }),
                                                }),
                                            }),
                                        }),
                                    t.actions &&
                                        t.actions.length > 0 &&
                                        (0, d.jsx)('div', {
                                            className: no().sources,
                                            children: t.actions.map((e, i) => {
                                                var a, n;
                                                return (0, d.jsx)(
                                                    eW.F,
                                                    {
                                                        blockId: e8.EntityTypes.WordsInWave,
                                                        blockType: e8.EntityTypes.WordsInWave,
                                                        blockPosX: 1,
                                                        blockPosY: 2,
                                                        mainObjectType: e8.DomainObjectType.Fact,
                                                        mainObjectId: t.id,
                                                        children: (0, d.jsx)(af.B, {
                                                            objectType: e8.DomainObjectType.Link,
                                                            objectId: e.url,
                                                            objectPosX: i + 1,
                                                            objectPosY: 1,
                                                            objectsCount: null != (n = null == (a = t.actions) ? void 0 : a.length) ? n : 0,
                                                            children: (0, d.jsxs)(a1, {
                                                                url: e.url,
                                                                className: (0, c.$)(no().sourceItem, { [no().sourceItem_withoutIcon]: !e.faviconUrl }),
                                                                children: [
                                                                    e.faviconUrl &&
                                                                        (0, d.jsx)(j._V, {
                                                                            src: e.faviconUrl,
                                                                            fit: 'cover',
                                                                            'aria-hidden': !0,
                                                                            className: no().sourceIcon,
                                                                            'data-test-id': g.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                        }),
                                                                    (0, d.jsx)(T.HL, {
                                                                        variant: 'span',
                                                                        type: 'text',
                                                                        size: 'm',
                                                                        weight: 'medium',
                                                                        lineClamp: 1,
                                                                        'data-test-id': g.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                        children: e.title,
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    },
                                                    e.url,
                                                );
                                            }),
                                        }),
                                ],
                            }),
                            (0, d.jsxs)('div', {
                                children: [
                                    (0, d.jsxs)('div', {
                                        className: no().feedbackSection,
                                        children: [
                                            (0, d.jsx)(T.HL, {
                                                variant: 'div',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                className: no().feedbackQuestion,
                                                children: (0, d.jsx)(p.A, { id: 'words.show-more' }),
                                            }),
                                            (0, d.jsx)('div', {
                                                className: no().feedbackButtons,
                                                children: (0, d.jsxs)(eW.F, {
                                                    blockId: e8.EntityTypes.WordsInWave,
                                                    blockType: e8.EntityTypes.WordsInWave,
                                                    blockPosX: 1,
                                                    blockPosY: 3,
                                                    mainObjectType: e8.DomainObjectType.Fact,
                                                    mainObjectId: t.id,
                                                    children: [
                                                        (0, d.jsx)(af.B, {
                                                            objectType: e8.DomainObjectType.Fact,
                                                            objectId: t.id,
                                                            objectsCount: 2,
                                                            objectPosX: 1,
                                                            objectPosY: 1,
                                                            children: (0, d.jsx)(a0, {
                                                                actionType: t.isLiked ? e8.ActionType.Unlike : e8.ActionType.Like,
                                                                variant: 'text',
                                                                color: 'secondary',
                                                                size: 'l',
                                                                radius: 'round',
                                                                withRipple: !1,
                                                                className: (0, c.$)(no().feedbackButton, { [no().feedbackButton_active]: t.isLiked }),
                                                                'aria-label': s,
                                                                onClick: i,
                                                                'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                                                children: (0, d.jsx)(Y.I, {
                                                                    variant: 'thumbUp',
                                                                    size: 'xs',
                                                                    'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON,
                                                                }),
                                                            }),
                                                        }),
                                                        (0, d.jsx)(af.B, {
                                                            objectType: e8.DomainObjectType.Fact,
                                                            objectId: t.id,
                                                            objectsCount: 2,
                                                            objectPosX: 1,
                                                            objectPosY: 2,
                                                            children: (0, d.jsx)(a0, {
                                                                actionType: e8.ActionType.Dislike,
                                                                variant: 'text',
                                                                size: 'l',
                                                                radius: 'round',
                                                                withRipple: !1,
                                                                className: (0, c.$)(no().feedbackButton, { [no().feedbackButton_active]: t.isDisliked }),
                                                                'aria-label': o,
                                                                onClick: a,
                                                                'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                                                children: (0, d.jsx)(Y.I, {
                                                                    variant: 'thumbDown',
                                                                    size: 'xs',
                                                                    'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                    t.isFact && (0, d.jsx)(a5, {}),
                                ],
                            }),
                        ],
                    })
                );
            });
            var nd = i(220),
                nc = i.n(nd);
            let nu = (e) => {
                    let { text: t, prevText: i, faceCover: a, className: n } = e,
                        r = (0, aE.D)();
                    return (
                        (0, m.useEffect)(() => {
                            i.current !== t && ((i.current = t), r(!0, ''));
                        }, [i, r, t]),
                        (0, d.jsxs)(T.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 3,
                            className: n,
                            'data-test-id': g.Kq.words.WORDS_CARD_TEXT,
                            children: [
                                a &&
                                    (0, d.jsx)(j._V, {
                                        src: a,
                                        size: 'orig',
                                        fit: 'contain',
                                        withAvatarReplace: !0,
                                        withFallback: !1,
                                        withLoadingIndicator: !1,
                                        className: nc().lumenAvatar,
                                        'aria-hidden': !0,
                                    }),
                                t,
                            ],
                        })
                    );
                },
                n_ = (0, u.PA)((e) => {
                    var t, i, a, n, r;
                    let { card: s, trackId: o, isLoading: l, className: u } = e,
                        {
                            words: _,
                            settings: { isMobile: b },
                        } = (0, U.g)(),
                        { faceCover: p } = (0, aO.x)(),
                        h = (0, tm.N)(),
                        x = (0, aE.D)(),
                        A = (() => {
                            var e;
                            let { words: t } = (0, U.g)(),
                                i = (0, tm.N)(),
                                [a, n] = (0, m.useState)(),
                                [r, s] = (0, m.useState)(),
                                o = null == (e = t.activeBigCard) ? void 0 : e.id,
                                l = (0, f.c)(() => {
                                    t.bigCardFullscreen.close();
                                }),
                                d = (0, f.c)(() => {
                                    t.bigCardFullscreen.isOpened || (n(void 0), s(void 0));
                                }),
                                c = (0, f.c)((e, a) => {
                                    var r;
                                    let o = Array.from(null != (r = e.bigCardIds) ? r : [])[0];
                                    o && (s(o), n(e), i({ to: e8.AppScreen.FactScreen }), t.bigCardFullscreen.open(), t.loadBigCard(o, a, e.id));
                                });
                            ((0, m.useEffect)(() => {
                                t.bigCardFullscreen.isOpened && t.bigCardLoadingState.isRejected && l();
                            }, [l, t.bigCardLoadingState.isRejected, t.bigCardFullscreen.isOpened]),
                                (0, m.useEffect)(() => {
                                    t.bigCardFullscreen.isOpened && t.bigCardLoadingState.isResolved && a && r && o === r && t.markBigCardViewed(a.id, r);
                                }, [o, r, a, t, t.bigCardLoadingState.isResolved, t.bigCardFullscreen.isOpened]));
                            let u = aM({ card: a, onClose: l });
                            return { openedCard: a, open: c, close: l, onScreenClosed: d, feedback: u };
                        })(),
                        C = (0, m.useRef)(null),
                        j = (0, m.useRef)(null),
                        [N, P] = (0, m.useState)(!1),
                        [k, S] = (0, m.useState)(void 0),
                        w = (0, m.useRef)(null),
                        I = ((e) => {
                            let { formatMessage: t } = (0, v.A)(),
                                i = (0, m.useMemo)(
                                    () => [
                                        t({ id: 'words.loading-phrase-collecting-interesting' }),
                                        t({ id: 'words.loading-phrase-tuning' }),
                                        t({ id: 'words.loading-phrase-catching' }),
                                        t({ id: 'words.loading-phrase-reading' }),
                                        t({ id: 'words.loading-phrase-studying' }),
                                    ],
                                    [t],
                                ),
                                a = (0, m.useRef)(0),
                                [n, r] = (0, m.useState)(() => {
                                    var t;
                                    if (!e) return null;
                                    let n = Math.floor(Math.random() * i.length);
                                    return ((a.current = n), null != (t = i[n]) ? t : null);
                                }),
                                s = (0, m.useRef)(e),
                                o = (0, m.useRef)(null),
                                l = (0, m.useRef)(e);
                            if (((s.current = e), e && !l.current)) {
                                var d;
                                let e = Math.floor(Math.random() * i.length);
                                ((a.current = e), r(null != (d = i[e]) ? d : null));
                            }
                            return (
                                (l.current = e),
                                (0, m.useEffect)(() => {
                                    if (null !== n && !o.current)
                                        return (
                                            (o.current = setTimeout(() => {
                                                if (((o.current = null), s.current)) {
                                                    var e;
                                                    ((a.current = (a.current + 1) % i.length), r(null != (e = i[a.current]) ? e : i[0]));
                                                    return;
                                                }
                                                r(null);
                                            }, 2500)),
                                            () => {
                                                o.current && (clearTimeout(o.current), (o.current = null));
                                            }
                                        );
                                }, [i, n]),
                                n
                            );
                        })(!!l),
                        E = null !== I,
                        O = !!((null == s ? void 0 : s.isBigCardFullscreenEnabled) || (null == (t = A.openedCard) ? void 0 : t.isBigCardFullscreenEnabled)),
                        B =
                            (null == s ? void 0 : s.withBigCardPanel) ||
                            (null == s ? void 0 : s.isBigCardFullscreenEnabled) ||
                            (null == s ? void 0 : s.withDirectLinkNavigation),
                        {
                            handleLike: M,
                            handleDislike: R,
                            feedbackMessage: L,
                        } = aM({
                            card: s,
                            onClose: (0, f.c)(() => {
                                P(!1);
                            }),
                        }),
                        { feedbackMessage: W } = A.feedback,
                        D = !!(L || W),
                        V = !(s && (!(null == s ? void 0 : s.isDisliked) || D)) && !E,
                        F = !s || (null == s ? void 0 : s.isDisliked) || D || E,
                        z = !l && !E && (!s || s.isDisliked),
                        H = _.isBigCardPanelEnabled ? z : !(null == s ? void 0 : s.withBigCardPanel),
                        K = (null == s ? void 0 : s.isLumenFaceAvatarEnabled) && !!p,
                        G = E ? 'loading' : 'content-'.concat(null == s ? void 0 : s.id),
                        Y = (null == s ? void 0 : s.isPersonal) ? e8.DomainObjectType.PersonalFact : e8.DomainObjectType.Fact;
                    (0, m.useEffect)(() => {
                        _.isBigCardPanelEnabled || s || l || x(!0, '');
                    }, [s, _.isBigCardPanelEnabled, l, x]);
                    let q = (0, f.c)((e) => {
                            (!e || !F) &&
                                ((e && null != s && s.withDirectLinkNavigation) ||
                                    (e && b && w.current && S(window.innerHeight - w.current.getBoundingClientRect().top + 12),
                                    e && h({ to: e8.AppScreen.FactScreen }),
                                    P(e)));
                        }),
                        X = (0, ez.Z)(null != (a = null == s || null == (i = s.action) ? void 0 : i.url) ? a : ''),
                        $ = (0, f.c)(() => {
                            var e;
                            (null == s || null == (e = s.action) ? void 0 : e.url) && (h({ to: e8.AppScreen.Link, deepLink: s.action.url }), X());
                        }),
                        Z = (0, f.c)(() => {
                            if (!F && s) {
                                if (s.isInformer && !s.withBigCardPanel) return void $();
                                !_.bigCardPanel.card &&
                                    !_.bigCardFullscreen.isOpened &&
                                    (s.withBigCardPanel
                                        ? (_.bigCardPanel.open(o), _.bigCardPanel.isOpened && _.bigCardPanel.trackId === o && h({ to: e8.AppScreen.LumenFactScreen }))
                                        : (null == s ? void 0 : s.isBigCardFullscreenEnabled) && A.open(s, o));
                            }
                        }),
                        Q = (0, f.c)((e) => {
                            e.target === e.currentTarget && (e.code === ax.v.SPACE || e.code === ax.v.ENTER) && (e.preventDefault(), Z());
                        }),
                        J = (0, y.L)(() => {
                            var e, t, i, a;
                            return E
                                ? (0, d.jsx)(aX, { children: I })
                                : D
                                  ? (0, d.jsx)(T.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'medium',
                                        lineClamp: 3,
                                        className: nc().text,
                                        'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_MESSAGE,
                                        children: L || W,
                                    })
                                  : null != s && s.isDisliked
                                    ? void 0
                                    : (0, d.jsxs)(d.Fragment, {
                                          children: [
                                              (null == s ? void 0 : s.text) &&
                                                  (0, d.jsx)(
                                                      af.B,
                                                      {
                                                          objectType: null != (e = s.domainObjectType) ? e : Y,
                                                          objectId: null != (t = null == s ? void 0 : s.analyticObjectId) ? t : '',
                                                          objectPosX: 1,
                                                          objectPosY: 1,
                                                          objectsCount: (null == s ? void 0 : s.action) ? 2 : 1,
                                                          children: (0, d.jsx)(nu, { text: s.text, prevText: C, faceCover: K ? p : void 0, className: nc().text }, G),
                                                      },
                                                      null == s ? void 0 : s.id,
                                                  ),
                                              (null == s ? void 0 : s.action) &&
                                                  s.action.url &&
                                                  (0, d.jsx)(
                                                      af.B,
                                                      {
                                                          objectType: null != (i = null == s ? void 0 : s.domainObjectType) ? i : e8.DomainObjectType.Link,
                                                          objectId: s.action.url,
                                                          objectPosX: 1,
                                                          objectPosY: 2,
                                                          objectsCount: (null == s ? void 0 : s.action) ? 2 : 1,
                                                          children: (0, d.jsx)(
                                                              aJ,
                                                              {
                                                                  url: s.action.url,
                                                                  title: s.action.title,
                                                                  prevTitle: j,
                                                                  className: nc().action,
                                                                  analyticObjectId: null != (a = null == s ? void 0 : s.analyticObjectId) ? a : '',
                                                              },
                                                              ''.concat(G, '-action'),
                                                          ),
                                                      },
                                                      s.action.url,
                                                  ),
                                          ],
                                      });
                        }),
                        ee = (0, y.L)(() => {
                            if (b && k) return { '--words-popover-height': ''.concat(k, 'px') };
                        }),
                        et = b ? nl : nr,
                        ei = (0, d.jsxs)('div', {
                            className: (0, c.$)(nc().root, { [nc().root_disabled]: F }, u),
                            role: 'button',
                            tabIndex: 0,
                            onClick: B ? Z : void 0,
                            onKeyDown: B ? Q : void 0,
                            'data-test-id': g.Kq.words.WORDS_CARD,
                            children: [
                                H &&
                                    (0, d.jsx)(aG, {
                                        className: (0, c.$)(nc().badge, {
                                            [nc().badge_centered]: V,
                                            [nc().badge_centeredSparkles]: V && _.withSparkles,
                                            [nc().badge_loading]: E,
                                        }),
                                        dimmed: V,
                                        isFact: (null == s ? void 0 : s.isFact) && !F,
                                    }),
                                (0, d.jsx)('div', { className: (0, c.$)(nc().content, { [nc().content_hidden]: V }), ref: w, children: J }),
                            ],
                        });
                    return O
                        ? (0, d.jsxs)(d.Fragment, {
                              children: [
                                  ei,
                                  (0, d.jsx)(eV.n, {
                                      pageId: eL._Q.FACT_SCREEN,
                                      pageEntityId: null != (r = null == (n = A.openedCard) ? void 0 : n.id) ? r : '',
                                      pageStyle: e8.PageStyles.Fullscreen,
                                      pagePlacement: e8.PagePlacements.Fullscreen,
                                      children: (0, d.jsx)(ni, {
                                          card: A.openedCard,
                                          feedbackMessage: W,
                                          onLike: A.feedback.handleLike,
                                          onDislike: A.feedback.handleDislike,
                                          onClose: A.close,
                                          onScreenClosed: A.onScreenClosed,
                                      }),
                                  }),
                              ],
                          })
                        : (null == s ? void 0 : s.withBigCardPanel)
                          ? ei
                          : (0, d.jsxs)(ed.AM, {
                                isMobile: b,
                                placement: b ? 'bottom' : 'top',
                                open: N,
                                onOpenChange: q,
                                positionElement: b ? void 0 : w.current,
                                offsetOptions: b ? void 0 : 12,
                                style: ee,
                                children: [
                                    ei,
                                    (0, d.jsx)(ed.hl, {
                                        className: nc().popoverContent,
                                        children: (0, d.jsx)(eV.n, {
                                            pageId: eL._Q.FACT_SCREEN,
                                            pageEntityId: null == s ? void 0 : s.id,
                                            pageStyle: b ? e8.PageStyles.Sheet : e8.PageStyles.Popup,
                                            pagePlacement: b ? e8.PagePlacements.Bottom : e8.PagePlacements.Floating,
                                            children: s && (0, d.jsx)(et, { card: s, onLike: M, onDislike: R }),
                                        }),
                                    }),
                                ],
                            });
                }),
                nm = (0, u.PA)((e) => {
                    var t, i, a, n;
                    let { className: r, trackId: s } = e,
                        { words: o } = (0, U.g)(),
                        l = (() => {
                            let e = (0, V.N)();
                            return (0, m.useMemo)(() => {
                                let t = e.get(D.WA),
                                    i = null == t ? void 0 : t.getPassportUid();
                                if (!i) return;
                                let a = new aI(String(i));
                                return (a.openDatabase(), a);
                            }, [e]);
                        })();
                    (() => {
                        let e = (0, ts.e)(),
                            { words: t, sonataState: i } = (0, U.g)();
                        (0, m.useEffect)(() => {
                            if (!e) return;
                            let a = e.state.queueState,
                                n = () => {
                                    let e = a.entityList.value,
                                        t = a.order.value,
                                        i = a.index.value;
                                    return e && null != i
                                        ? ((e, t, i) => ({
                                              trackIds: Array.from({ length: t.length > 0 ? t.length : e.length }, (i, a) => {
                                                  var n, r, s, o, l;
                                                  let d =
                                                      null == (o = e[t.length > 0 && null != (l = t[a]) ? l : a]) ||
                                                      null == (s = o.entity) ||
                                                      null == (r = s.data) ||
                                                      null == (n = r.meta)
                                                          ? void 0
                                                          : n.id;
                                                  return void 0 !== d ? String(d) : void 0;
                                              }),
                                              currentIndex: i,
                                          }))(e, t || [], i)
                                        : null;
                                },
                                r = a.currentEntity.onChange((e) => {
                                    ((e) => {
                                        if (i.isGenerativeContext) return;
                                        let a = n();
                                        if (!a) return;
                                        let r = aj({ queueState: a, backwardSize: 3, forwardSize: 17 });
                                        t.evict(new Set(r));
                                        let s =
                                                e === ay.So.MOVE_FORWARD ||
                                                e === ay.So.DISLIKE_MOVE_FORWARD ||
                                                e === ay.So.AUTO_MOVE_FORWARD ||
                                                e === ay.So.ERROR_MOVE_FORWARD,
                                            o = e === ay.So.MOVE_BACKWARD,
                                            l = [];
                                        (s && aN({ queueState: a, direction: 'forward', isRequested: t.isTrackRequested })
                                            ? (l = aC({ queueState: a, direction: 'forward', batchSize: 17 }))
                                            : o && aN({ queueState: a, direction: 'backward', isRequested: t.isTrackRequested })
                                              ? (l = aC({ queueState: a, direction: 'backward', batchSize: 3 }))
                                              : s || o || (l = r),
                                            l.length > 0 && t.loadCards(l));
                                    })(null == e ? void 0 : e.lastChangeMethod);
                                }),
                                s = a.entityList.onChange(() => {
                                    (() => {
                                        if (i.isGenerativeContext) return;
                                        let e = n();
                                        if (!e) return;
                                        let a = aj({ queueState: e, backwardSize: 3, forwardSize: 17 });
                                        a.length > 0 && t.loadCards(a);
                                    })();
                                });
                            return () => {
                                (null == r || r(), null == s || s());
                            };
                        }, [e, i, t]);
                    })();
                    let c = o.getCardForTrack(s);
                    if (
                        ((0, m.useEffect)(() => {
                            o.setWordsViewedStore(l);
                        }, [o, l]),
                        (0, m.useEffect)(() => {
                            c && o.markCardViewed(c.id);
                        }, [c, o]),
                        !s)
                    )
                        return null;
                    let u = String(s),
                        _ = !c && o.isLoading(u),
                        b = o.isTrackResolvedWithoutCard(u) ? aA.SleepingAlice : aA.SleepTech,
                        v = !o.isBigCardPanelEnabled,
                        p = v && !c && !_,
                        h = v ? e8.DomainObjectType.SleepingAlice : void 0,
                        g = (null == c ? void 0 : c.isPersonal) ? e8.DomainObjectType.PersonalFact : void 0,
                        x = null != (t = null != g ? g : h) ? t : e8.DomainObjectType.Fact,
                        f = null != (i = null == c ? void 0 : c.domainObjectType) ? i : x,
                        A = null != (n = null != (a = null == c ? void 0 : c.analyticObjectId) ? a : h) ? n : '';
                    return (0, d.jsx)(eW.F, {
                        blockId: e8.EntityTypes.WordsInWave,
                        blockType: e8.EntityTypes.WordsInWave,
                        blockPosX: 1,
                        blockPosY: 2,
                        mainObjectType: e8.DomainObjectType.Track,
                        mainObjectId: null != s ? s : void 0,
                        displayReasonId: p ? b : void 0,
                        children: (0, d.jsx)(af.B, {
                            objectType: f,
                            objectId: A,
                            objectPosX: 1,
                            objectPosY: (null == c ? void 0 : c.action) && c.action.url ? 2 : 1,
                            objectsCount: (null == c ? void 0 : c.action) ? 2 : 1,
                            children: (0, d.jsx)(n_, { card: c, trackId: u, isLoading: _, className: r }),
                        }),
                    });
                });
            var nb = i(45705),
                nv = i(85184),
                np = i(83372),
                nh = i.n(np),
                ng = i(69084),
                nx = i(28410),
                nf = i(51484),
                nA = i.n(nf);
            let ny = (0, u.PA)((e) => {
                let { className: t } = e,
                    {
                        words: { bigCardPanel: i },
                    } = (0, U.g)(),
                    { formatMessage: a } = (0, v.A)(),
                    { handleLike: n, handleDislike: r } = (() => {
                        let {
                                words: { bigCardPanel: e },
                            } = (0, U.g)(),
                            { notify: t } = (0, ih.l)(),
                            { formatMessage: i } = (0, v.A)(),
                            a = (0, f.c)(async (a) => {
                                let n = e.card;
                                if (!(!n || !e.isOpened || e.isFeedbackMessageVisible || n.isFeedbackPending))
                                    try {
                                        (a !== aB.a.NEUTRAL && e.showFeedbackMessage(a), await n.sendFeedback(a, !0));
                                    } catch (a) {
                                        if (!(0, nx._n)(e) || !e.isOpened || e.card !== n) return;
                                        (e.hideFeedbackMessage(),
                                            t((0, d.jsx)(ix.h, { error: i({ id: 'error-messages.error-during-action' }) }), { containerId: ip.u.ERROR }));
                                    }
                            });
                        return {
                            handleLike: (0, f.c)(() => {
                                var t;
                                return a((null == (t = e.card) ? void 0 : t.isLiked) ? aB.a.NEUTRAL : aB.a.LIKE);
                            }),
                            handleDislike: (0, f.c)(() => a(aB.a.DISLIKE)),
                        };
                    })(),
                    { card: s, isFeedbackDisabled: o } = i;
                return (0, d.jsxs)('div', {
                    className: (0, c.$)(nA().root, t),
                    children: [
                        (0, d.jsx)(a0, {
                            actionType: (null == s ? void 0 : s.isLiked) ? e8.ActionType.Unlike : e8.ActionType.Like,
                            variant: 'text',
                            size: 'm',
                            withRipple: !1,
                            disabled: o,
                            'aria-label': a({ id: 'words.like' }),
                            'aria-pressed': null == s ? void 0 : s.isLiked,
                            className: (0, c.$)(nA().button, { [nA().button_active]: null == s ? void 0 : s.isLiked }),
                            onClick: n,
                            'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                            children: (0, d.jsx)(Y.I, { variant: 'thumbUp', size: 'xxs' }),
                        }),
                        (0, d.jsx)('div', { className: nA().divider, 'aria-hidden': !0 }),
                        (0, d.jsx)(a0, {
                            actionType: e8.ActionType.Dislike,
                            variant: 'text',
                            size: 'm',
                            withRipple: !1,
                            disabled: o,
                            'aria-label': a({ id: 'words.dislike' }),
                            'aria-pressed': null == s ? void 0 : s.isDisliked,
                            className: (0, c.$)(nA().button, { [nA().button_active]: null == s ? void 0 : s.isDisliked }),
                            onClick: r,
                            'data-test-id': g.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                            children: (0, d.jsx)(Y.I, { variant: 'thumbDown', size: 'xxs' }),
                        }),
                    ],
                });
            });
            var nC = i(23976),
                nj = i(77866),
                nN = i.n(nj);
            let nP = (0, u.PA)((e) => {
                let { className: t } = e,
                    { lumen: i } = (0, U.g)(),
                    { fullCover: a } = (0, aO.x)(),
                    n = i.isNeededToLoad || i.isLoading,
                    r = (0, y.L)(() =>
                        n
                            ? (0, d.jsx)(nC.W, { className: nN().image, radius: 'l', isActive: !0 })
                            : (0, d.jsx)(j._V, { src: a, fit: 'contain', size: 'orig', withAvatarReplace: !0, withLoadingIndicator: !0, className: nN().image }),
                    );
                return (0, d.jsx)('div', { className: (0, c.$)(nN().root, t), 'aria-hidden': !0, children: r });
            });
            var nT = i(61772),
                nk = i.n(nT);
            let nS = (0, u.PA)((e) => {
                let { className: t, objectPosY: i } = e,
                    { words: a } = (0, U.g)(),
                    { sourceItems: n, bigCard: r } = a.bigCardPanel;
                return (0, d.jsx)(d.Fragment, {
                    children: n.map((e, a) => {
                        var s;
                        return (0, d.jsx)(
                            af.B,
                            {
                                objectType: e8.DomainObjectType.Link,
                                objectId: null != (s = null == r ? void 0 : r.id) ? s : '',
                                objectPosX: a + 1,
                                objectPosY: i,
                                objectsCount: n.length,
                                children: (0, d.jsxs)(a1, {
                                    url: e.url,
                                    className: (0, c.$)(nk().root, t),
                                    children: [
                                        e.faviconUrl && (0, d.jsx)(j._V, { src: e.faviconUrl, fit: 'cover', className: nk().icon, 'aria-hidden': !0 }),
                                        (0, d.jsx)(T.HL, {
                                            variant: 'span',
                                            type: 'text',
                                            size: 'm',
                                            weight: 'medium',
                                            lineClamp: 1,
                                            className: nk().title,
                                            children: e.title,
                                        }),
                                    ],
                                }),
                            },
                            e.url,
                        );
                    }),
                });
            });
            var nw = i(29733),
                nI = i.n(nw);
            let nE = (e) => {
                let { text: t, isContentVisible: i } = e,
                    {
                        textRef: a,
                        withTopFade: n,
                        withBottomFade: r,
                        updateScrollEdges: s,
                    } = ((e) => {
                        let { text: t, isContentVisible: i } = e,
                            a = (0, m.useRef)(null),
                            [n, r] = (0, m.useState)(!1),
                            [s, o] = (0, m.useState)(!1),
                            l = (0, f.c)(() => {
                                let e = a.current;
                                if (!e) return;
                                let { scrollTop: t, scrollHeight: i, clientHeight: n } = e,
                                    s = n > 0 && i > n + 1;
                                (r(s && t > 1), o(s && t + n < i - 1));
                            });
                        return (
                            (0, m.useLayoutEffect)(() => {
                                l();
                            }, [i, t, l]),
                            (0, m.useEffect)(() => {
                                let e = a.current;
                                if (!e) return;
                                let t = new ResizeObserver(l);
                                return (
                                    t.observe(e),
                                    document.fonts.addEventListener('loadingdone', l),
                                    () => {
                                        (t.disconnect(), document.fonts.removeEventListener('loadingdone', l));
                                    }
                                );
                            }, [l]),
                            { textRef: a, withTopFade: n, withBottomFade: s, updateScrollEdges: l }
                        );
                    })({ text: t, isContentVisible: i }),
                    o = (0, m.useRef)(!1),
                    l = (0, aE.D)();
                return (
                    (0, m.useEffect)(() => {
                        i && !o.current && (l(!0, ''), (o.current = !0));
                    }, [i, l]),
                    (0, d.jsx)(T.HL, {
                        ref: a,
                        variant: 'div',
                        size: 'l',
                        weight: 'bold',
                        className: (0, c.$)(nI().root, { [nI().root_withTopFade]: n, [nI().root_withBottomFade]: r }),
                        tabIndex: 0,
                        onScroll: s,
                        children: t,
                    })
                );
            };
            var nO = i(99772),
                nB = i.n(nO);
            let nM = (e) => {
                let { className: t, isActive: i, motionClassName: a } = e;
                return (0, d.jsx)('div', {
                    className: t,
                    'aria-hidden': !0,
                    children: (0, d.jsxs)('div', {
                        className: (0, c.$)(nB().root, a),
                        children: [
                            (0, d.jsx)(nC.W, { className: nB().item, radius: 'l', isActive: i }),
                            (0, d.jsx)(nC.W, { className: nB().item, radius: 'l', isActive: i }),
                            (0, d.jsx)(nC.W, { className: nB().item, radius: 'l', isActive: i }),
                            (0, d.jsx)(nC.W, { className: nB().item, radius: 'l', isActive: i }),
                        ],
                    }),
                });
            };
            var nR = i(91882),
                nL = i.n(nR);
            let nW = (0, u.PA)(() => {
                    var e, t, i, a, n, r, s;
                    let {
                            words: o,
                            settings: { isMobile: l },
                        } = (0, U.g)(),
                        { formatMessage: u } = (0, v.A)(),
                        _ = (() => {
                            let {
                                    words: { bigCardPanel: e },
                                } = (0, U.g)(),
                                { card: t, isOpened: i, submittedFeedback: a, isFeedbackMessageVisible: n } = e;
                            return (
                                (0, m.useEffect)(() => {
                                    if (!i || !n) return;
                                    let r = setTimeout(() => {
                                        e.isOpened && e.isFeedbackMessageVisible && e.card === t && (a === aB.a.DISLIKE ? e.close() : e.hideFeedbackMessage());
                                    }, 3e3);
                                    return () => clearTimeout(r);
                                }, [e, t, n, i, a]),
                                (0, y.L)(() => (a === aB.a.DISLIKE ? (0, d.jsx)(p.A, { id: 'words.dislike-feedback' }) : (0, d.jsx)(p.A, { id: 'words.like-feedback' })))
                            );
                        })(),
                        b = (0, m.useRef)(null),
                        { card: h, bigCard: g, objectType: x, mainObjectType: f, isContentReady: A, isFeedbackMessageVisible: j, isOpened: N, text: P } = o.bigCardPanel,
                        [k, S] = (0, m.useState)(() => A),
                        w = !k && (o.isShimmerVisible || A),
                        I = k && A && void 0 !== h,
                        E = k && !j,
                        O = I && N && void 0 !== g && o.bigCardLoadingState.isResolved,
                        {
                            contentAreaRef: B,
                            lumenRef: M,
                            cardContentRef: R,
                            isFeedbackLayout: L,
                        } = ((e) => {
                            let { isFeedbackMessageVisible: t, isPanelOpened: i } = e,
                                a = (0, m.useRef)(null),
                                n = (0, m.useRef)(null),
                                r = (0, m.useRef)(null),
                                s = (0, m.useRef)(null),
                                o = (0, m.useRef)(null),
                                [l, d] = (0, m.useState)(t),
                                c = (0, nv.U)('(prefers-reduced-motion: reduce)');
                            return (
                                (0, m.useLayoutEffect)(() => {
                                    var e, u;
                                    let _ = a.current,
                                        m = n.current;
                                    if (!_ || !m) return;
                                    if (l !== t) {
                                        let e = r.current;
                                        if (!e || !i) return;
                                        o.current = m.getBoundingClientRect().top;
                                        let a = m.offsetHeight;
                                        if (t) {
                                            let t = e.offsetTop,
                                                i = e.offsetHeight;
                                            (_.style.setProperty('--card-content-top', ''.concat(t, 'px')),
                                                _.style.setProperty('--card-content-height', ''.concat(i, 'px')));
                                        }
                                        (_.style.setProperty('--lumen-height', ''.concat(a, 'px')), d(t));
                                        return;
                                    }
                                    let b = o.current;
                                    if (((o.current = null), c)) {
                                        null == (u = s.current) || u.cancel();
                                        return;
                                    }
                                    if (null === b) return;
                                    null == (e = s.current) || e.cancel();
                                    let v = _.getBoundingClientRect().height / _.offsetHeight,
                                        p = (b - m.getBoundingClientRect().top) / v;
                                    if (!Number.isFinite(p) || !p) return;
                                    let h = Number.parseFloat(getComputedStyle(_).getPropertyValue('--words-big-card-panel-motion-duration'));
                                    s.current = m.animate([{ transform: 'translateY('.concat(p, 'px)') }, { transform: 'translateY(0)' }], {
                                        duration: h,
                                        easing: 'ease-out',
                                    });
                                }, [l, t, i, c]),
                                (0, m.useEffect)(
                                    () => () => {
                                        var e;
                                        return null == (e = s.current) ? void 0 : e.cancel();
                                    },
                                    [],
                                ),
                                { contentAreaRef: a, lumenRef: n, cardContentRef: r, isFeedbackLayout: l }
                            );
                        })({ isFeedbackMessageVisible: j, isPanelOpened: N }),
                        W = (0, aQ.l)({ mainObjectType: f });
                    return (
                        (0, m.useEffect)(() => {
                            if (N) return (W(!0), () => W(!1));
                        }, [N, W]),
                        (0, m.useEffect)(() => {
                            N && A && S(!0);
                        }, [A, N]),
                        (0, m.useEffect)(() => {
                            O && o.markBigCardViewed(h.id, g.id);
                        }, [g, h, O, o]),
                        (0, d.jsxs)('div', {
                            className: nL().root,
                            'data-words-panel-dismiss': !0,
                            children: [
                                (0, d.jsx)(ng.q, { children: (0, d.jsx)('div', { role: 'status', 'aria-atomic': 'true', children: j && _ }) }),
                                (0, d.jsxs)('div', {
                                    ref: B,
                                    className: (0, c.$)(nL().contentArea, { [nL().contentArea_mobile]: l, [nL().contentArea_feedback]: L }),
                                    'data-words-panel-dismiss': !0,
                                    children: [
                                        (0, d.jsx)('div', {
                                            ref: M,
                                            className: (0, c.$)(nL().lumen, { [nL().lumen_mobile]: l }),
                                            'aria-hidden': !0,
                                            children: (0, d.jsx)(nP, { className: nL().contentMotion }),
                                        }),
                                        (0, d.jsxs)('div', {
                                            className: (0, c.$)(nL().contentStack, { [nL().contentStack_mobile]: l }),
                                            'aria-busy': w,
                                            'data-words-panel-dismiss': !0,
                                            children: [
                                                (0, d.jsx)(nM, {
                                                    className: (0, c.$)(nL().contentLayer, nL().shimmer, { [nL().contentLayer_visible]: w }),
                                                    motionClassName: nL().contentMotion,
                                                    isActive: w,
                                                }),
                                                (0, d.jsxs)('div', {
                                                    ref: R,
                                                    className: (0, c.$)(nL().contentLayer, nL().content, nL().cardContent, { [nL().contentLayer_visible]: k }),
                                                    'aria-hidden': !E,
                                                    inert: !E,
                                                    'data-words-panel-dismiss': !0,
                                                    children: [
                                                        (0, d.jsxs)('div', {
                                                            className: (0, c.$)(nL().textContainer, nL().contentMotion, { [nL().textContainer_hidden]: !E }),
                                                            'data-words-panel-dismiss': !0,
                                                            children: [
                                                                I &&
                                                                    P &&
                                                                    (0, d.jsx)(af.B, {
                                                                        objectType: x,
                                                                        objectId: null != (i = null != (t = null == g ? void 0 : g.id) ? t : h.analyticObjectId) ? i : '',
                                                                        objectPosX: 1,
                                                                        objectPosY: 1,
                                                                        objectsCount: 1,
                                                                        children: (0, d.jsx)(
                                                                            nE,
                                                                            { text: P, isContentVisible: N && E },
                                                                            null != (a = null == g ? void 0 : g.id) ? a : h.id,
                                                                        ),
                                                                    }),
                                                                I &&
                                                                    (null == (e = h.action) ? void 0 : e.url) &&
                                                                    (0, d.jsx)(af.B, {
                                                                        objectType: null != (n = h.domainObjectType) ? n : e8.DomainObjectType.Link,
                                                                        objectId: h.action.url,
                                                                        objectPosX: 1,
                                                                        objectPosY: 2,
                                                                        objectsCount: 1,
                                                                        children: (0, d.jsx)(aJ, {
                                                                            url: h.action.url,
                                                                            title: h.action.title,
                                                                            prevTitle: b,
                                                                            className: nL().action,
                                                                            analyticObjectId: null != (r = h.analyticObjectId) ? r : '',
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                        (0, d.jsx)('div', {
                                                            className: (0, c.$)(nL().feedbackButtons, nL().contentLayer, { [nL().contentLayer_visible]: E }),
                                                            'data-words-panel-dismiss': !0,
                                                            children:
                                                                I &&
                                                                (0, d.jsx)(af.B, {
                                                                    objectType: g ? x : f,
                                                                    objectId: null != (s = null == g ? void 0 : g.id) ? s : h.id,
                                                                    objectPosX: 1,
                                                                    objectPosY: 3,
                                                                    objectsCount: 1,
                                                                    children: (0, d.jsx)(ny, { className: nL().contentMotion }),
                                                                }),
                                                        }),
                                                    ],
                                                }),
                                                (0, d.jsx)('div', {
                                                    className: (0, c.$)(nL().contentLayer, nL().content, nL().feedback, { [nL().contentLayer_visible]: j }),
                                                    'aria-hidden': !0,
                                                    'data-words-panel-dismiss': !0,
                                                    children: (0, d.jsx)(T.DZ, {
                                                        variant: 'div',
                                                        size: 'm',
                                                        weight: 'bold',
                                                        className: (0, c.$)(nL().feedbackMessage, nL().contentMotion),
                                                        children: _,
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, d.jsx)('div', {
                                            className: (0, c.$)(nL().contentLayer, nL().sources, { [nL().contentLayer_visible]: k, [nL().sources_hidden]: !E }),
                                            'aria-hidden': !E,
                                            inert: !E,
                                            'data-words-panel-dismiss': !0,
                                            children: I && (0, d.jsx)(nS, { objectPosY: 4 }),
                                        }),
                                    ],
                                }),
                                (0, d.jsx)(C.$, {
                                    radius: 'round',
                                    color: 'secondary',
                                    variant: l ? 'text' : 'default',
                                    size: 'm',
                                    icon: (0, d.jsx)(Y.I, { variant: 'arrowDown', size: 'xs', className: (0, c.$)(nL().closeIcon, { [nL().closeIcon_mobile]: l }) }),
                                    onClick: o.bigCardPanel.close,
                                    disabled: !N,
                                    'aria-label': u({ id: 'interface-actions.close' }),
                                    className: (0, c.$)(nL().closeButton, nL().controlsMotion, { [nL().closeButton_mobile]: l }),
                                }),
                                (null == h ? void 0 : h.isFact) &&
                                    (0, d.jsx)(T.HL, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 's',
                                        weight: 'medium',
                                        role: 'note',
                                        tabIndex: 0,
                                        className: (0, c.$)(nL().disclaimer, nL().controlsMotion, { [nL().disclaimer_mobile]: l }),
                                        children: (0, d.jsx)(p.A, { id: 'words.lumen-description' }),
                                    }),
                            ],
                        })
                    );
                }),
                nD = { appear: 500, enter: 500, exit: 300 },
                nV = {
                    appear: nh().enter,
                    appearActive: nh().enter_active,
                    enter: nh().enter,
                    enterActive: nh().enter_active,
                    exit: nh().exit,
                    exitActive: nh().exit_active,
                },
                nF = (0, u.PA)((e) => {
                    let { onRestoreFocus: t } = e,
                        {
                            words: { bigCardPanel: i },
                            settings: { isMobile: a },
                        } = (0, U.g)(),
                        { formatMessage: n } = (0, v.A)(),
                        {
                            ref: r,
                            focusPanel: s,
                            restoreFocus: o,
                            handleFocusCapture: l,
                        } = ((e) => {
                            let { onRestoreFocus: t } = e,
                                {
                                    words: { bigCardPanel: i },
                                } = (0, U.g)(),
                                a = (0, m.useRef)(null),
                                n = (0, m.useRef)(null),
                                { isOpened: r, isFeedbackMessageVisible: s, isFeedbackDisabled: o } = i,
                                l = (0, f.c)(() => {
                                    var e;
                                    null == (e = a.current) || e.focus({ preventScroll: !0 });
                                }),
                                d = (0, f.c)((e) => {
                                    n.current = e.target;
                                }),
                                c = (0, f.c)(() => {
                                    var e;
                                    (document.activeElement === document.body || (null == (e = a.current) ? void 0 : e.contains(document.activeElement))) && t();
                                });
                            return (
                                (0, m.useEffect)(() => {
                                    let e = n.current;
                                    r &&
                                        (s || o) &&
                                        (null == e ? void 0 : e.closest('[inert], :disabled')) &&
                                        (document.activeElement === document.body || document.activeElement === e) &&
                                        l();
                                }, [l, o, s, r]),
                                { ref: a, focusPanel: l, restoreFocus: c, handleFocusCapture: d }
                            );
                        })({ onRestoreFocus: t }),
                        u = (0, nv.U)('(prefers-reduced-motion: reduce)'),
                        _ = (0, f.c)(() => {
                            !i.isOpened && i.trackId && (o(), i.reset());
                        });
                    return (
                        (0, m.useEffect)(() => () => i.reset(), [i]),
                        (0, d.jsx)(nb.A, {
                            in: i.isOpened,
                            nodeRef: r,
                            timeout: u ? 0 : nD,
                            mountOnEnter: !0,
                            unmountOnExit: !0,
                            appear: !0,
                            classNames: nV,
                            onEnter: s,
                            onExited: _,
                            children: (0, d.jsx)('div', {
                                ref: r,
                                className: (0, c.$)(nh().root, { [nh().root_mobile]: a }),
                                role: 'region',
                                'aria-label': n({ id: 'a11y-regions.words' }),
                                tabIndex: -1,
                                inert: !i.isOpened,
                                onFocusCapture: l,
                                'data-words-panel-dismiss': !0,
                                children: (0, d.jsx)(eV.n, {
                                    pageId: eL._Q.LUMEN_FACT_SCREEN,
                                    pageEntityId: i.cardId,
                                    pageStyle: a ? e8.PageStyles.Fullscreen : e8.PageStyles.Sheet,
                                    pagePlacement: a ? e8.PagePlacements.Fullscreen : e8.PagePlacements.Right,
                                    children: (0, d.jsx)(eW.F, {
                                        blockId: e8.EntityTypes.WordsInWave,
                                        blockType: e8.EntityTypes.WordsInWave,
                                        blockPosX: 1,
                                        blockPosY: 1,
                                        mainObjectType: i.mainObjectType,
                                        mainObjectId: i.cardId,
                                        children: (0, d.jsx)(nW, {}),
                                    }),
                                }),
                            }),
                        })
                    );
                });
            var nU = i(82017),
                nz = i(61912),
                nH = i(12228),
                nK = i.n(nH);
            let nG = (0, u.PA)((e) => {
                let { artists: t, open: i, positionElement: a, onOpenChange: n } = e,
                    { formatMessage: r } = (0, v.A)(),
                    {
                        settings: { isMobile: s },
                    } = (0, U.g)();
                return (0, d.jsxs)(ed.AM, {
                    isMobile: s,
                    placement: s ? 'bottom' : 'top',
                    open: i,
                    onOpenChange: n,
                    positionElement: s ? void 0 : a,
                    transform: s,
                    customRoleProps: { role: 'menu' },
                    children: [
                        null,
                        (0, d.jsx)(ed.hl, {
                            className: nK().root,
                            'aria-label': r({ id: 'interface-actions.context-menu-artists' }),
                            'data-test-id': g.OA.artists.ARTISTS_MENU,
                            children: (0, d.jsx)('div', {
                                className: nK().menuList,
                                children: t.map((e) => (0, d.jsx)(nz.V, { artist: e, className: nK().menuItem }, e.id)),
                            }),
                        }),
                    ],
                });
            });
            var nY = i(31985),
                nq = i.n(nY),
                nX = i(56348);
            let n$ = (0, u.PA)((e) => {
                let {
                        lineClamp: t,
                        isVibePaused: i,
                        isNonMusic: a,
                        isGenerative: n,
                        withLink: r,
                        hasMultipleArtists: s,
                        mainAlbum: o,
                        entityTitle: l,
                        artists: u,
                        artistsRef: _,
                        isArtistsMenuOpen: m,
                        onArtistsMenuClick: b,
                    } = e,
                    { formatMessage: p } = (0, v.A)();
                if (i)
                    return (0, d.jsx)(T.HL, {
                        variant: 'span',
                        className: (0, c.$)(nq().text, nq().important),
                        lineClamp: 1,
                        'data-test-id': g.Xk.vibe.VIBE_DYNAMIC_TITLE_VIBE,
                        children: p({ id: 'entity-names.my-vibe' }),
                    });
                if (a && o)
                    return (0, d.jsx)(tp.N, {
                        href: o.url,
                        className: (0, c.$)(nq().text, nq().important),
                        'data-test-id': g.Xk.vibe.VIBE_DYNAMIC_TITLE_NON_MUSIC_ENTITY_TITLE,
                        children: (0, d.jsx)(T.HL, { variant: 'span', className: (0, c.$)(nq().text, nq().important), lineClamp: t, children: o.title }),
                    });
                if (n && l)
                    return (0, d.jsx)(T.HL, {
                        variant: 'span',
                        className: (0, c.$)(nq().text, nq().important),
                        lineClamp: t,
                        'data-test-id': g.Xk.vibe.VIBE_DYNAMIC_TITLE_GENERATIVE,
                        children: l,
                    });
                if (u) {
                    let e = (0, d.jsx)(nX.i, {
                        artists: u,
                        captionClassName: (0, c.$)(nq().text, nq().important),
                        linkClassName: (0, c.$)(nq().text, nq().important),
                        className: (0, c.$)(nq().text, nq().important),
                        lineClamp: t,
                        withLink: r,
                        withCustomTooltip: !1,
                        variant: 'breakWord',
                    });
                    return s
                        ? (0, d.jsx)(C.$, {
                              className: nq().button,
                              variant: 'text',
                              'aria-label': p({ id: 'interface-actions.context-menu-artists' }),
                              'aria-haspopup': 'menu',
                              'aria-expanded': m,
                              withRipple: !1,
                              onClick: b,
                              ref: _,
                              'data-test-id': g.Xk.vibe.VIBE_DYNAMIC_TITLE_MULTIPLE_ARTISTS_BUTTON,
                              children: e,
                          })
                        : e;
                }
                return null;
            });
            var nZ = i(38271),
                nQ = i.n(nZ);
            let nJ = 'vibe-freemium-block',
                n0 = (0, u.PA)((e) => {
                    let { className: t } = e,
                        { user: i } = (0, U.g)(),
                        [a, n] = (0, A.d)(),
                        {
                            openPaymentWidgetModal: r,
                            isShimmerActive: s,
                            isShimmerVisible: o,
                            mainText: l,
                            mainTextA11y: u,
                            additionText: _,
                        } = (0, W.D)({ storeName: 'music', isEnabled: i.isAuthorized && !i.hasPlus, offerElement: { element: a, intersectionPropertyId: nJ } }),
                        m = (0, y.L)(() =>
                            i.isAuthorized
                                ? (0, d.jsx)(K.b, {
                                      ref: n,
                                      'data-intersection-property-id': nJ,
                                      mainText: l,
                                      ariaLabel: u,
                                      additionText: _,
                                      isShimmerActive: s,
                                      isShimmerVisible: o,
                                      onClick: r,
                                      className: nQ().button,
                                      mainTextClassName: nQ().buttonMainText,
                                      additionTextClassName: nQ().buttonAdditionText,
                                      'data-test-id': g.Xk.vibe.VIBE_FREEMIUM_BUTTON,
                                  })
                                : (0, d.jsx)(G.H, {
                                      size: 'l',
                                      variant: 'default',
                                      buttonText: (0, d.jsx)(T.HL, {
                                          variant: 'span',
                                          size: 'l',
                                          children: (0, d.jsx)(p.A, { id: 'authorization.enter-and-listen-button' }),
                                      }),
                                      className: nQ().button,
                                  }),
                        );
                    return (0, d.jsxs)('div', {
                        className: (0, c.$)(nQ().root, t),
                        'data-test-id': g.Xk.vibe.VIBE_FREEMIUM_BLOCK,
                        children: [
                            m,
                            (0, d.jsx)(T.HL, {
                                variant: 'span',
                                size: 'l',
                                className: nQ().description,
                                'data-test-id': g.Xk.vibe.VIBE_FREEMIUM_BLOCK_DESCRIPTION,
                                children: (0, d.jsx)(p.A, { id: 'buy-subscription.new-vibe-description', values: { nbsp: ' ' } }),
                            }),
                        ],
                    });
                }),
                n1 = (0, u.PA)(() => {
                    var e, t, i, a, n, r, s, o, l, u, _, b, p, x, A, C, j;
                    let { formatMessage: N } = (0, v.A)(),
                        P = (() => {
                            let {
                                    words: { bigCardPanel: e },
                                } = (0, U.g)(),
                                t = (0, m.useRef)(null),
                                i = (0, m.useRef)(!1),
                                a = (0, m.useRef)(null),
                                { isOpened: n } = e,
                                r = (0, f.c)((t) => {
                                    t || ((i.current = !0), e.close());
                                }),
                                { context: s, refs: o } = (0, ag.useFloating)({ open: n, onOpenChange: r }),
                                l = (0, ag.useDismiss)(s, { escapeKey: !1, outsidePressEvent: 'click' }),
                                { getFloatingProps: d } = (0, ag.useInteractions)([l]),
                                c = (0, f.c)((e) => {
                                    a.current = e.target;
                                }),
                                u = (0, f.c)((t) => {
                                    var i;
                                    let n = a.current;
                                    ((a.current = null),
                                        e.isOpened &&
                                            !t.defaultPrevented &&
                                            0 !== t.detail &&
                                            t.target === n &&
                                            t.target instanceof HTMLElement &&
                                            t.currentTarget.contains(t.target) &&
                                            t.target.hasAttribute('data-words-panel-dismiss') &&
                                            (null == (i = window.getSelection()) ? void 0 : i.isCollapsed) !== !1 &&
                                            e.close());
                                }),
                                _ = (0, f.c)((t) => {
                                    t.code === ax.v.ESCAPE &&
                                        !t.defaultPrevented &&
                                        e.isOpened &&
                                        t.currentTarget.contains(document.activeElement) &&
                                        (t.preventDefault(), t.stopPropagation(), e.close());
                                }),
                                b = (0, f.c)((i) => {
                                    e.isOpened || (t.current = i.target);
                                }),
                                v = (0, f.c)(() => {
                                    var e;
                                    if (i.current) return;
                                    let a = t.current;
                                    (null == a ||
                                        !a.isConnected ||
                                        a.closest('[inert], [aria-hidden="true"]') ||
                                        (a.focus({ preventScroll: !0 }), document.activeElement !== a)) &&
                                        (null == (e = o.floating.current) || e.focus({ preventScroll: !0 }));
                                });
                            return (
                                (0, m.useEffect)(() => {
                                    n && (i.current = !1);
                                }, [n]),
                                {
                                    regionRef: o.setFloating,
                                    regionProps: d({ onKeyDown: _, onPointerDownCapture: c, onClick: u }),
                                    handleFocusCapture: b,
                                    restoreFocus: v,
                                }
                            );
                        })(),
                        {
                            sonataState: T,
                            experiments: k,
                            words: S,
                            lumen: w,
                            settings: { isMobile: I },
                            user: E,
                            paywall: { modal: O },
                            vibe: R,
                        } = (0, U.g)(),
                        // for PulseSync: BEGIN read wave animation ordering and artist-cover visibility preferences
                        swapVibeAnimationAndWheel = usePulseSyncWaveSetting('modSettings.vibeAnimationEnhancement.swapVibeAnimationAndWheel', false),
                        hideArtistCoverOnNewWave = usePulseSyncWaveSetting('modSettings.vibeAnimationEnhancement.hideArtistCoverOnNewWave', false),
                        // for PulseSync: END read wave animation ordering and artist-cover visibility preferences
                        { pageId: W, pageEntityId: H } = (0, L.$)(),
                        K = (0, aQ.l)({ mainObjectType: e8.DomainObjectType.Track }),
                        { resetContext: G } = (0, F.B)({ seeds: [eu.M1], pageIdForFrom: W, blockIdForFrom: ''.concat(e8.EntityTypes.MyWave, '-').concat(eM.U.RADIO) }),
                        { isEnabled: Y } = (0, tb.e)(),
                        q = k.checkExperiment(z.z.WebNextWaveLikesAndShares, 'on') ? i4 : au,
                        X = (() => {
                            var e, t, i, a, n, r;
                            let { sonataState: s } = (0, U.g)(),
                                o = (0, ts.e)(),
                                { formatMessage: l } = (0, v.A)(),
                                d = null == o ? void 0 : o.state.currentContext.value,
                                c = null == o ? void 0 : o.state.queueState.currentEntity.value,
                                u = null == c ? void 0 : c.sourceContext;
                            if (!(null == d ? void 0 : d.data.type)) return;
                            let _ = (function (e, t) {
                                switch (t) {
                                    case iN.h.SEARCH:
                                        return e({ id: 'entity-names.search' });
                                    case iN.h.MUSIC_HISTORY:
                                    case iN.h.MUSIC_HISTORY_SEARCH:
                                        return e({ id: 'entity-names.music-history' });
                                    case iN.h.DOWNLOADED_TRACKS:
                                    case iN.h.USER_TRACKS:
                                        return e({ id: 'entity-names.collection' });
                                    case iN.h.ARTIST_FAMILIAR_FROM_WAVE:
                                        return e({ id: 'page.familiar-vibe' });
                                    case iN.h.ARTIST_MY_COLLECTION:
                                        return e({ id: 'page.familiar-collection' });
                                    default:
                                        return;
                                }
                            })(l, null == u ? void 0 : u.data.sourceContextType);
                            if (_) return _;
                            switch (d.data.type) {
                                case iP.K.Album:
                                    if (null == (e = s.entityMeta) ? void 0 : e.isPodcast) return l({ id: 'entity-names.podcast' });
                                    if (null == (t = s.entityMeta) ? void 0 : t.isAudiobook) return l({ id: 'entity-names.book' });
                                    if (null == (i = s.entityMeta) ? void 0 : i.isFairyTale) return l({ id: 'entity-names.fairytale' });
                                    return d.data.meta.title;
                                case iP.K.Playlist:
                                    return d.data.meta.title;
                                case iP.K.Vibe: {
                                    let e = null == (a = d.data.meta.session) ? void 0 : a.wave;
                                    if ((null == e ? void 0 : e.seeds.length) === 1 && (null == e ? void 0 : e.seeds[0]) === eu.M1)
                                        return l({ id: 'entity-names.my-vibe' });
                                    return l({ id: 'vibe-actions.vibe-context' }, { type: null == e ? void 0 : e.type, name: null == e ? void 0 : e.name });
                                }
                                case iP.K.Artist:
                                    return l({ id: 'entity-names.artist-popular-tracks' });
                                case iP.K.Various:
                                    return null == (r = s.entityMeta) || null == (n = r.mainAlbum) ? void 0 : n.title;
                                case iP.K.Generative:
                                    return l({ id: 'entity-names.generative' });
                                default:
                                    return;
                            }
                        })(),
                        $ = (() => {
                            let e = (0, ts.e)(),
                                t = null == e ? void 0 : e.state.currentContext.value;
                            if ((null == t ? void 0 : t.data.type) === iP.K.Vibe) {
                                var i, a;
                                let e = null == (i = t.data.meta.session) ? void 0 : i.wave;
                                if (
                                    ((null == e ? void 0 : e.seeds.length) === 1 && (null == e ? void 0 : e.seeds[0]) === eu.M1) ||
                                    ((null == e ? void 0 : e.seeds.length) === 1 && (null == e || null == (a = e.seeds[0]) ? void 0 : a.includes(eu.yx)))
                                )
                                    return !1;
                            }
                            return !0;
                        })(),
                        Z = !T.isPlaying && (T.isVibeContext || !T.entityMeta),
                        Q = !T.isPlaying && !$,
                        J = null == (e = T.entityMeta) ? void 0 : e.mainArtist,
                        ee = null == (t = T.entityMeta) ? void 0 : t.mainAlbum,
                        et = null == (i = T.entityMeta) ? void 0 : i.artists,
                        ei = !!(null == (a = T.entityMeta) ? void 0 : a.isNonUserGenerated),
                        ea = !!(null == (n = T.entityMeta) ? void 0 : n.isNonMusic),
                        en = T.isGenerativeContext,
                        er = k.checkExperiment(z.z.WebNextNewWaveTabFeatCover, 'on')
                            ? null == (s = T.entityMeta) || null == (r = s.cutoutCover)
                                ? void 0
                                : r.uri
                            : void 0,
                        es = ((e) => {
                            let { artistCutoutCoverUri: t, hasMainArtist: i, releaseCutoutCoverUri: a } = e;
                            return i && (null != a ? a : t) ? (void 0 === a ? 'cutout_artist' : 'cutout_release') : 'text';
                        })({ artistCutoutCoverUri: null == J || null == (o = J.cutoutCover) ? void 0 : o.uri, hasMainArtist: !!J, releaseCutoutCoverUri: er }),
                        // for PulseSync: BEGIN hide the wave artist cover when requested
                        eo = !hideArtistCoverOnNewWave && !!(null != er ? er : null == J || null == (l = J.cutoutCover) ? void 0 : l.uri) && !Z,
                        // for PulseSync: END hide the wave artist cover when requested
                        el = eo && J,
                        ed = (0, nU.A)(null != et ? et : []) > 1,
                        ec = ei && !ed,
                        e_ = (0, m.useRef)(null),
                        {
                            isArtistsMenuOpen: em,
                            artistsMenuPosition: eb,
                            handleArtistsMenuClick: ev,
                            handleArtistsMenuOpenChange: ep,
                        } = ((e) => {
                            let { ref: t } = e,
                                [i, a] = (0, m.useState)(!1),
                                [n, r] = (0, m.useState)(null);
                            return {
                                isArtistsMenuOpen: i,
                                artistsMenuPosition: n,
                                handleArtistsMenuClick: (0, f.c)((e) => {
                                    if (e.detail > 0) {
                                        let { clientX: t, clientY: i } = e;
                                        r({ getBoundingClientRect: () => new DOMRect(t, i, 0, 0) });
                                    } else r(t.current);
                                    a(!0);
                                }),
                                handleArtistsMenuOpenChange: (0, f.c)((e) => {
                                    (a(e), e || r(null));
                                }),
                            };
                        })({ ref: e_ });
                    ((e) => {
                        let { albumId: t, displayType: i, trackId: a } = e,
                            n = (0, V.N)(),
                            r = n.get(D.Zf),
                            s = n.get(D.UB),
                            o = (0, m.useRef)(void 0);
                        (0, m.useEffect)(() => {
                            if (!a) {
                                o.current = void 0;
                                return;
                            }
                            let e = ''.concat(a, ':').concat(i);
                            s &&
                                o.current !== e &&
                                ((o.current = e),
                                s
                                    .send(
                                        { name: 'TECH_EVENT_CUTOUT_PHOTO_SHOWN', data: { ...(void 0 === t ? {} : { albumId: String(t) }), displayType: i, trackId: a } },
                                        { topLevelParameter: 'tech-metrics' },
                                    )
                                    .catch((e) => {
                                        r.error(e instanceof Error ? e : String(e));
                                    }));
                        }, [t, i, r, a, s]);
                    })({ albumId: null == (u = T.entityMeta) ? void 0 : u.albumId, displayType: es, trackId: null == (_ = T.entityMeta) ? void 0 : _.id });
                    let eh = !E.hasPlus || !E.isAuthorized,
                        eg = (0, y.L)(() => (Z ? is : eo ? ia : ir)),
                        ex = (0, y.L)(() => (eh ? { ...eg, maxFontSize: Math.min(eg.maxFontSize, 72), fallbackMaxLines: 2 } : eg)),
                        ef =
                            E.hasPlus &&
                            (k.checkExperiment(z.z.WebNextWaveScreenWordsInWave, 'on') || k.checkExperiment(z.z.WebNextWaveScreenWordsInWave, 'on_with_onyx')),
                        eA = S.isBigCardPanelEnabled && w.isNeededToLoad,
                        ey = R.isShuffleVibe && T.isVibeContext,
                        eC = S.bigCardPanel.isOpened,
                        ej = eC && I,
                        eN = (0, e5.OH)(ey || null == (b = T.entityMeta) ? void 0 : b.averageColor),
                        { solidColor: eP } = (0, aO.x)(),
                        eT = { '--track-color': eN.primary, '--lumen-color': null != eP ? eP : 'transparent' };
                    ((0, m.useEffect)(() => {
                        eA && w.getData();
                    }, [w, eA]),
                        (0, m.useEffect)(() => {
                            ed || ep(!1);
                        }, [ep, ed]),
                        (0, m.useEffect)(() => {
                            H && K(!0);
                        }, [K, H]),
                        (0, m.useEffect)(
                            () => () => {
                                K(!1);
                            },
                            [K],
                        ));
                    let ek = (0, y.L)(() =>
                            k.checkExperiment(z.z.WebNextShaderFallbackEnabled, 'on')
                                ? (0, d.jsx)(B, { className: nq().vibeAnimation })
                                : (0, d.jsx)(M, { className: nq().vibeAnimation, averageColor: eN.primary }),
                        ),
                        eS = (0, f.c)(() => {
                            (E.hasPlus || h.$3, G());
                        }),
                        ew = (0, y.L)(() => {
                            let e = T.entityMeta,
                                t = (0, d.jsx)('div', {
                                    className: (0, c.$)(nq().textContainer, { [nq().textContainer_withCover]: eo && e, [nq().textContainer_playing]: !Z }),
                                    children: (0, d.jsx)(at, {
                                        textOptions: ex,
                                        children: (0, d.jsx)(n$, {
                                            isVibePaused: Z,
                                            isNonMusic: ea,
                                            isGenerative: en,
                                            withLink: ec,
                                            hasMultipleArtists: ed,
                                            mainAlbum: ee,
                                            entityTitle: null == e ? void 0 : e.title,
                                            artists: et,
                                            artistsRef: e_,
                                            isArtistsMenuOpen: em,
                                            onArtistsMenuClick: ev,
                                        }),
                                    }),
                                });
                            return e
                                ? (0, d.jsx)(eW.F, {
                                      blockId: e8.EntityTypes.MyWave,
                                      blockType: e8.EntityTypes.MyWave,
                                      blockPosX: 1,
                                      blockPosY: 1,
                                      objectsCount: 1,
                                      mainObjectType: e8.DomainObjectType.Track,
                                      mainObjectId: e.id,
                                      children: (0, d.jsxs)(af.B, {
                                          objectType: e8.DomainObjectType.Artist,
                                          objectId: e.id,
                                          objectPosX: 1,
                                          objectPosY: 1,
                                          objectsCount: 1,
                                          children: [
                                              t,
                                              el &&
                                                  (0, d.jsx)('div', {
                                                      className: nq().artistCover,
                                                      children: (0, d.jsx)(ic, { artist: J, withLink: ec, onClick: ev, featCoverUri: er }),
                                                  }),
                                              et && ed && (0, d.jsx)(nG, { artists: et, open: em, onOpenChange: ep, positionElement: eb }),
                                          ],
                                      }),
                                  })
                                : t;
                        });
                    return (0, d.jsxs)(eE.r, {
                        page: eO.l.HOME_SCREEN,
                        places: [eB.R.MY_WAVE],
                        children: [
                            Y && (0, d.jsx)(ah, {}),
                            (0, d.jsxs)('div', {
                                className: (0, c.$)(nq().root, nq().bigCardPanel, {
                                    [nq().root_reshuffle]: ey,
                                    [nq().root_withoutPlus]: !E.hasPlus,
                                    [nq().bigCardPanel_opened]: eC,
                                }),
                                onFocusCapture: P.handleFocusCapture,
                                // for PulseSync: BEGIN reverse the wave animation and wheel order when requested
                                style: { flexDirection: swapVibeAnimationAndWheel ? 'row-reverse' : 'row' },
                                // for PulseSync: END reverse the wave animation and wheel order when requested
                                children: [
                                    (0, d.jsx)(a_, { inert: ej, className: (0, c.$)(nq().wheel, { [nq().wheel_hidden]: ej }) }),
                                    (0, d.jsxs)('div', {
                                        ...P.regionProps,
                                        ref: P.regionRef,
                                        className: (0, c.$)(nq().meta, { [nq().meta_noPlus]: !E.hasPlus }),
                                        tabIndex: -1,
                                        role: 'region',
                                        'aria-label': N({ id: 'entity-names.my-vibe' }),
                                        'data-test-id': g.Xk.vibe.VIBE_META,
                                        'data-words-panel-dismiss': !0,
                                        children: [
                                            (0, d.jsx)('div', {
                                                className: (0, c.$)(nq().bigCardPanelBackground, { [nq().bigCardPanelBackground_visible]: eC }),
                                                style: eT,
                                                'aria-hidden': !0,
                                            }),
                                            (0, d.jsx)(eW.F, {
                                                blockId: e8.EntityTypes.Toolbar,
                                                blockType: e8.EntityTypes.Toolbar,
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                objectsCount: 1,
                                                children: (0, d.jsx)(af.B, {
                                                    objectType: e8.DomainObjectType.Wave,
                                                    objectId: eu.M1,
                                                    objectPosX: 1,
                                                    objectPosY: 1,
                                                    objectsCount: 1,
                                                    children: (0, d.jsx)(q, {
                                                        className: (0, c.$)(nq().context, { [nq().context_hidden]: eC, [nq().context_mobile]: I }),
                                                        context: X,
                                                        isResetAvailable: $,
                                                        isHidden: Q || eC,
                                                        onClick: eS,
                                                    }),
                                                }),
                                            }),
                                            (0, d.jsxs)('div', {
                                                className: nq().entityMeta,
                                                'aria-hidden': eC,
                                                inert: eC,
                                                children: [
                                                    ek,
                                                    (0, d.jsx)(
                                                        'div',
                                                        {
                                                            className: (0, c.$)(nq().entityMetaBody, {
                                                                [nq().entityMetaBody_hidden]: eC,
                                                                [nq().entityMetaBody_mobile]: I,
                                                            }),
                                                            children: ew,
                                                        },
                                                        ''.concat(null != (j = null == (p = T.entityMeta) ? void 0 : p.idWithContext) ? j : 'default', '-').concat(Z),
                                                    ),
                                                ],
                                            }),
                                            (0, d.jsxs)('div', {
                                                className: (0, c.$)(nq().playerBlock, {
                                                    [nq().playerBlock_withFreemium]: !E.hasPlus,
                                                    [nq().playerBlock_shifted]: eC && !I,
                                                }),
                                                inert: ej,
                                                'data-words-panel-dismiss': !0,
                                                children: [
                                                    (0, d.jsx)(eW.F, {
                                                        blockId: e8.EntityTypes.MyWave,
                                                        blockType: e8.EntityTypes.MyWave,
                                                        blockPosX: 1,
                                                        blockPosY: 1,
                                                        objectsCount: 1,
                                                        mainObjectType: e8.DomainObjectType.Track,
                                                        mainObjectId: null == (x = T.entityMeta) ? void 0 : x.id,
                                                        children: (0, d.jsx)(af.B, {
                                                            objectType: e8.DomainObjectType.Track,
                                                            objectId: null == (A = T.entityMeta) ? void 0 : A.id,
                                                            objectPosX: 1,
                                                            objectPosY: 1,
                                                            objectsCount: 1,
                                                            children: (0, d.jsx)(ii, {
                                                                className: (0, c.$)(nq().player, { [nq().player_hidden]: ej }),
                                                                albumCoverClassName: (0, c.$)(nq().albumCover, { [nq().albumCover_hidden]: eC }),
                                                            }),
                                                        }),
                                                    }),
                                                    ef &&
                                                        (0, d.jsx)('div', {
                                                            className: (0, c.$)(nq().words, { [nq().words_hidden]: eC, [nq().words_mobile]: I }),
                                                            'aria-hidden': eC,
                                                            inert: eC,
                                                            children: (0, d.jsx)(nm, { trackId: null == (C = T.entityMeta) ? void 0 : C.id }),
                                                        }),
                                                    !E.hasPlus && (0, d.jsx)(n0, { className: nq().freemiumBlock }),
                                                ],
                                            }),
                                            (0, d.jsx)(nF, { onRestoreFocus: P.restoreFocus }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                n2 = (0, u.PA)((e) => {
                    var t, i;
                    let { withVideoModal: a } = e,
                        {
                            main: n,
                            user: r,
                            words: s,
                            experiments: o,
                            releaseNotes: l,
                            // for PulseSync: BEGIN access track quality in the wave header
                            quality: pulseSyncQuality,
                            // for PulseSync: END access track quality in the wave header
                            fullscreenVideoPlayer: u,
                            sonataState: { entityMeta: b },
                            settings: { isMobile: w },
                        } = (0, U.g)(),
                        { formatMessage: I } = (0, v.A)(),
                        E = (0, eU.B)(),
                        { contentScrollRef: O, setContentScrollRef: B } = (0, ec.g)(),
                        [M, R] = (0, A.d)(),
                        L = (0, ew.d)(),
                        W = (0, eS.C)(),
                        { theme: D } = (0, eK.W)(),
                        // for PulseSync: BEGIN enable the new wave page variant without server experiment gating
                        V = true,
                        // for PulseSync: END enable the new wave page variant without server experiment gating
                        F = (0, ez.Z)(null != (i = null == (t = n.specialHeader) ? void 0 : t.url) ? i : ''),
                        H = o.checkExperiment(z.z.WebNextNewWaveTabFeedbackForm, 'on'),
                        { href: K } = (0, eY.u)('/slides/special/:campaignId', { params: { campaignId: 'summer_2026' } });
                    // for PulseSync: BEGIN wave badges for remote playback, WASAPI output and track quality
                    let pulseSyncShowAudioQualityOnNewWaveSettingKey = 'modSettings.vibeAnimationEnhancement.showAudioQualityOnNewWave',
                        [isRemoteDeviceConnected, setIsRemoteDeviceConnected] = (0, m.useState)(window.isRemoteDeviceConnected ?? !1),
                        [remoteDevice, setRemoteDevice] = (0, m.useState)(window.remoteDevice ?? null),
                        [pulseSyncTrackQualityInfo, setPulseSyncTrackQualityInfo] = (0, m.useState)(window?.PulseSyncTrackQuality?.getLastInfo?.() ?? null),
                        [pulseSyncWasapiExclusiveOutputState, setPulseSyncWasapiExclusiveOutputState] = (0, m.useState)(null),
                        [pulseSyncShowAudioQualityOnNewWave, setPulseSyncShowAudioQualityOnNewWave] = (0, m.useState)(
                            () => window.nativeSettings?.get?.(pulseSyncShowAudioQualityOnNewWaveSettingKey) !== !1,
                        );
                    (0, m.useEffect)(() => {
                        const updatePulseSyncTrackQualityInfo = (format) => {
                            setPulseSyncTrackQualityInfo(window?.PulseSyncTrackQuality?.updateFromFormat?.(format) ?? null);
                        };
                        const lastInfo = window?.PulseSyncTrackQuality?.getLastInfo?.();
                        if (lastInfo) {
                            setPulseSyncTrackQualityInfo(lastInfo);
                        }
                        window?.nativeAudioOutput
                            ?.getYaspAudioFormat?.()
                            ?.then?.((format) => {
                                updatePulseSyncTrackQualityInfo(format);
                            })
                            ?.catch?.(() => {});
                        const unsubscribe = window.desktopEvents?.on?.('NATIVE_AUDIO_OUTPUT_YASP_AUDIO_FORMAT_CHANGED', (event, format) => {
                            updatePulseSyncTrackQualityInfo(format);
                        });
                        return () => {
                            if (typeof unsubscribe === 'function') unsubscribe();
                        };
                    }, []);
                    (0, m.useEffect)(() => {
                        const updatePulseSyncWasapiExclusiveOutputState = (state) => {
                            setPulseSyncWasapiExclusiveOutputState(state ?? null);
                        };
                        window?.nativeAudioOutput
                            ?.getWasapiExclusiveStatus?.()
                            ?.then?.((status) => {
                                updatePulseSyncWasapiExclusiveOutputState(status?.outputState ?? null);
                            })
                            ?.catch?.(() => {});
                        const unsubscribe = window.desktopEvents?.on?.('NATIVE_AUDIO_OUTPUT_WASAPI_EXCLUSIVE_OUTPUT_STATE_CHANGED', (event, state) => {
                            updatePulseSyncWasapiExclusiveOutputState(state);
                        });
                        return () => {
                            if (typeof unsubscribe === 'function') unsubscribe();
                        };
                    }, []);
                    (0, m.useEffect)(() => {
                        const updatePulseSyncShowAudioQualityOnNewWave = (event, key, value) => {
                            if (key === pulseSyncShowAudioQualityOnNewWaveSettingKey) {
                                setPulseSyncShowAudioQualityOnNewWave(value !== !1);
                            }
                        };
                        const unsubscribe = window.desktopEvents?.on?.('NATIVE_STORE_UPDATE', updatePulseSyncShowAudioQualityOnNewWave);
                        return () => {
                            if (typeof unsubscribe === 'function') unsubscribe();
                        };
                    }, []);
                    (0, m.useEffect)(() => {
                        let e = (device_info) => {
                                (setIsRemoteDeviceConnected(!0),
                                    setRemoteDevice(device_info),
                                    (window.isRemoteDeviceConnected = !0),
                                    (window.remoteDevice = device_info));
                            },
                            t = () => {
                                (setIsRemoteDeviceConnected(!1), setRemoteDevice(null), (window.isRemoteDeviceConnected = !1), (window.remoteDevice = null));
                            };
                        return (
                            (window.onRemoteDeviceConnected || (window.onRemoteDeviceConnected = [])).push(e),
                            (window.onRemoteDeviceDisconnected || (window.onRemoteDeviceDisconnected = [])).push(t),
                            () => {
                                ((window.onRemoteDeviceConnected = window.onRemoteDeviceConnected.filter((t) => t !== e)),
                                    (window.onRemoteDeviceDisconnected = window.onRemoteDeviceDisconnected.filter((e) => e !== t)));
                            }
                        );
                    }, []);
                    const deviceTypeMap = {
                            UNSPECIFIED: 'Неизвестного устройства',
                            WEB: 'Сайта',
                            ANDROID: 'Android приложения',
                            IOS: 'IOS приложения',
                            SMART_SPEAKER: 'Умной колонки',
                            WEB_TV: 'ТВ',
                            ANDROID_TV: 'Android ТВ',
                            APPLE_TV: 'Apple ТВ',
                            ANDROID_WEAR: 'Android часов',
                            WEB_DESKTOP: 'ПК приложения',
                        },
                        pulseSyncWasapiIsActive =
                            (null == pulseSyncWasapiExclusiveOutputState ? void 0 : pulseSyncWasapiExclusiveOutputState.active) === !0 ||
                            (null == pulseSyncWasapiExclusiveOutputState || null == pulseSyncWasapiExclusiveOutputState.session
                                ? void 0
                                : pulseSyncWasapiExclusiveOutputState.session.state) === 'running',
                        pulseSyncYnisonBubble = (0, m.useMemo)(() => {
                            if (!isRemoteDeviceConnected) return null;
                            const remoteControlText = `Управление с ${deviceTypeMap?.[remoteDevice?.info?.type] ?? ''}: ${remoteDevice?.info?.title ?? ''}`;
                            return (0, d.jsx)(C.$, {
                                color: 'secondary',
                                radius: 'xl',
                                'aria-label': remoteControlText,
                                className: eQ().beta,
                                style: {
                                    marginInlineEnd: 'var(--ym-spacer-size-xs)',
                                    color: 'white',
                                },
                                withHover: !1,
                                children: (0, d.jsx)(T.HL, {
                                    variant: 'div',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    children: remoteControlText,
                                }),
                            });
                        }, [isRemoteDeviceConnected, remoteDevice?.info?.type, remoteDevice?.info?.title, deviceTypeMap]),
                        pulseSyncAudioQualityBubble = (0, m.useMemo)(() => {
                            return (null == pulseSyncTrackQualityInfo ? void 0 : pulseSyncTrackQualityInfo.label) &&
                                (pulseSyncShowAudioQualityOnNewWave || pulseSyncWasapiIsActive)
                                ? (0, d.jsx)(C.$, {
                                      color: 'secondary',
                                      radius: 'xl',
                                      type: 'button',
                                      'aria-label': 'Качество трека: '.concat(pulseSyncTrackQualityInfo.label),
                                      'aria-haspopup': 'dialog',
                                      title: I({
                                          id: 'player-actions.audio-quality',
                                      }),
                                      onClick: pulseSyncQuality.modal.open,
                                      className: eQ().beta,
                                      style: {
                                          marginInlineEnd: 'var(--ym-spacer-size-xs)',
                                          color: 'white',
                                          cursor: 'pointer',
                                      },
                                      withHover: !1,
                                      children: (0, d.jsx)(T.HL, {
                                          variant: 'div',
                                          type: 'text',
                                          size: 's',
                                          weight: 'medium',
                                          children: pulseSyncTrackQualityInfo.label,
                                      }),
                                  })
                                : null;
                        }, [pulseSyncTrackQualityInfo, pulseSyncShowAudioQualityOnNewWave, pulseSyncWasapiIsActive, pulseSyncQuality.modal.open, I]),
                        pulseSyncWasapiStateBubble = (0, m.useMemo)(
                            () =>
                                pulseSyncWasapiIsActive
                                    ? (0, d.jsx)(C.$, {
                                          color: 'secondary',
                                          radius: 'xl',
                                          'aria-label': 'WASAPI Exclusive активен',
                                          className: eQ().beta,
                                          style: {
                                              marginInlineEnd: 'var(--ym-spacer-size-xs)',
                                              color: 'white',
                                          },
                                          withHover: !1,
                                          children: (0, d.jsx)(T.HL, {
                                              variant: 'div',
                                              type: 'text',
                                              size: 's',
                                              weight: 'medium',
                                              children: 'WASAPI Exclusive',
                                          }),
                                      })
                                    : null,
                            [pulseSyncWasapiIsActive],
                        ),
                        pulseSyncWasapiDeviceBubble = (0, m.useMemo)(() => {
                            let e =
                                (null == pulseSyncWasapiExclusiveOutputState ||
                                null == pulseSyncWasapiExclusiveOutputState.session ||
                                null == pulseSyncWasapiExclusiveOutputState.session.rendererState
                                    ? void 0
                                    : pulseSyncWasapiExclusiveOutputState.session.rendererState.deviceName) ??
                                (null == pulseSyncWasapiExclusiveOutputState ||
                                null == pulseSyncWasapiExclusiveOutputState.session ||
                                null == pulseSyncWasapiExclusiveOutputState.session.lastRendererServiceState
                                    ? void 0
                                    : pulseSyncWasapiExclusiveOutputState.session.lastRendererServiceState.deviceName) ??
                                null;
                            return pulseSyncWasapiIsActive && e
                                ? (0, d.jsx)(C.$, {
                                      color: 'secondary',
                                      radius: 'xl',
                                      'aria-label': 'Устройство WASAPI Exclusive: '.concat(e),
                                      title: e,
                                      className: eQ().beta,
                                      style: {
                                          marginInlineEnd: 'var(--ym-spacer-size-xs)',
                                          color: 'white',
                                          maxWidth: '15rem',
                                          overflow: 'hidden',
                                      },
                                      withHover: !1,
                                      children: (0, d.jsx)(T.HL, {
                                          variant: 'div',
                                          type: 'text',
                                          size: 's',
                                          weight: 'medium',
                                          style: {
                                              maxWidth: '100%',
                                              overflow: 'hidden',
                                              textOverflow: 'ellipsis',
                                              whiteSpace: 'nowrap',
                                          },
                                          children: e,
                                      }),
                                  })
                                : null;
                        }, [pulseSyncWasapiExclusiveOutputState, pulseSyncWasapiIsActive]);
                    // for PulseSync: END wave badges for remote playback, WASAPI output and track quality
                    ((0, m.useEffect)(() => {
                        var e, t;
                        if (!a || !L) return;
                        let i = (0, eq.j)(),
                            n = null != (e = null == i ? void 0 : i.get(eG.K.IDS)) ? e : null,
                            r = null != (t = null == i ? void 0 : i.get(eG.K.ACTIVE_INDEX)) ? t : null,
                            { clipIds: s, activeClipIndex: o } = (0, eP.V)(n, r);
                        (W(s, o), u.setOpenedFromMain());
                    }, [a, L, u, W]),
                        (0, m.useEffect)(
                            () => () => {
                                (n.reset(), V || n.landing.reset());
                            },
                            [n, n.landing, V],
                        ),
                        (0, eF.J)(n.landing.isResolved));
                    let G = o.checkExperiment(z.z.WebNextDisableVibe, 'on'),
                        Y = (0, f.c)(() => {
                            l.isReady && l.modal.open();
                        }),
                        q = (0, m.useMemo)(() => (G ? { 'margin-block-start': '1vh' } : {}), [G]),
                        X = (0, m.useMemo)(() => {
                            if (o.checkExperiment(z.z.WebNextBetaLabel, 'off')) return null;
                            {
                                let e = o.checkExperiment(z.z.WebNextBetaLabel, 'version'),
                                    t = I({ id: 'desktop.app-version' }, { version: E }),
                                    i = e ? E : 'Beta';
                                return (0, d.jsxs)(P.m_, {
                                    placement: 'left',
                                    offsetOptions: 4,
                                    children: [
                                        (0, d.jsx)(C.$, {
                                            color: 'secondary',
                                            radius: 'xl',
                                            'aria-label': e ? t : 'Beta '.concat(t),
                                            className: (0, c.$)(eQ().beta, { [eQ().beta_withReleaseNotes]: l.isReady }),
                                            onClick: Y,
                                            'data-test-id': g.Xk.main.RELEASE_NOTES_BUTTON,
                                            children: (0, d.jsx)(T.HL, { variant: 'div', type: 'text', size: 's', weight: 'medium', children: i }),
                                        }),
                                        (0, d.jsx)(P.ZI, { children: E }),
                                    ],
                                });
                            }
                        }, [o, I, Y, l.isReady, E]),
                        $ = (0, m.useMemo)(
                            () =>
                                H
                                    ? (0, d.jsx)(e2, {
                                          href: K,
                                          imageSrc: 'avatars.mds.yandex.net/get-music-misc/70850/img.6a7d54bea0c2131932ceea77/orig',
                                          children: (0, d.jsx)(p.A, { id: 'page.summer_2026_title' }),
                                      })
                                    : null,
                            [H, K],
                        ),
                        Z = (0, c.$)(eQ().betaSlot, { [eQ().betaSlot_newVibe]: V }),
                        Q = (0, m.useMemo)(() => {
                            if (!n.specialHeader) return {};
                            let e = D === eH.S.Light ? n.specialHeader.lightTheme : n.specialHeader.darkTheme;
                            return { '--special-button-background': e.backgroundColor, '--special-button-color': e.textColor };
                        }, [n.specialHeader, D]),
                        J = (0, y.L)(() => {
                            let e = o.checkExperiment(z.z.WebNextRewind2024, 'on');
                            return n.specialHeader
                                ? (0, d.jsxs)('div', {
                                      className: eQ().specialHeaderContainer,
                                      children: [
                                          e &&
                                              (0, d.jsx)(j._V, {
                                                  src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69203c15cffc41172f18a125/orig',
                                                  withAvatarReplace: !0,
                                                  className: eQ().specialHeaderImage,
                                                  fit: 'contain',
                                              }),
                                          (0, d.jsx)(C.$, {
                                              color: 'secondary',
                                              size: 'default',
                                              radius: 'xxxl',
                                              role: 'link',
                                              className: eQ().specialHeader,
                                              withHover: !1,
                                              style: Q,
                                              onClick: F,
                                              children: n.specialHeader.title,
                                          }),
                                      ],
                                  })
                                : null;
                        }),
                        ee = (0, y.L)(() =>
                            V
                                ? null
                                : o.checkExperiment(z.z.WebNextFooterDisclaimer, 'on')
                                  ? (0, d.jsx)(eX.w, { className: eQ().footer })
                                  : (0, d.jsx)(e$.A, { children: (0, d.jsx)(eX.w, { className: eQ().footer }) }),
                        ),
                        et = (0, f.c)(() => {
                            if (!n.landing.isLoaded) return;
                            let e = r.isAuthorized ? x.p.MAIN : x.p.MAIN_NOLOGIN;
                            return n.landing.getSkeleton({ id: e, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 });
                        }),
                        ei = (0, f.c)(() => {
                            if (n.landing.isLoaded) return n.landing.getSkeleton({ id: x.p.WEB_MAIN, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 });
                        });
                    if (((0, eT.y)(ei), n.landing.isNeededToLoad && !V)) {
                        let e = r.isAuthorized ? x.p.MAIN : x.p.MAIN_NOLOGIN,
                            t = [n.landing.getSkeleton({ id: e, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 }), n.getSpecialHeader()];
                        (0, m.use)(Promise.allSettled(t));
                    }
                    a && !L && (0, _.notFound)();
                    let ea = (0, y.L)(() =>
                        V
                            ? (0, d.jsx)(eV.n, {
                                  pageId: eL._Q.WAVE_LANDING_SCREEN,
                                  pageEntityId: null == b ? void 0 : b.id,
                                  children: (0, d.jsx)(eD.j, {
                                      children: (0, d.jsxs)('div', {
                                          className: eQ().vibeWidgetContainer,
                                          'data-test-id': g.Xk.main.MAIN_PAGE,
                                          children: [
                                              (0, d.jsxs)('div', {
                                                  className: (0, c.$)(eQ().actionsBar, {
                                                      [eQ().actionsBar_desktop]: h.NN,
                                                      [eQ().actionsBar_hidden]: s.bigCardPanel.isOpened,
                                                  }),
                                                  'aria-hidden': s.bigCardPanel.isOpened,
                                                  children: [w && (0, d.jsx)(eI.F, { withMeta: !1, variant: 'mobile', className: eQ().userProfile }), $],
                                              }),
                                              (0, d.jsx)(n1, {}),
                                              // for PulseSync: BEGIN render remote playback, WASAPI and track quality wave badges
                                              (0, d.jsxs)('div', {
                                                  className: Z,
                                                  children: [
                                                      pulseSyncYnisonBubble,
                                                      pulseSyncWasapiStateBubble,
                                                      pulseSyncWasapiDeviceBubble,
                                                      pulseSyncAudioQualityBubble,
                                                      X,
                                                  ],
                                              }),
                                              // for PulseSync: END render remote playback, WASAPI and track quality wave badges
                                          ],
                                      }),
                                  }),
                              })
                            : (0, d.jsx)(eV.n, {
                                  pageId: eL._Q.HOME,
                                  children: (0, d.jsx)(ek.h, {
                                      scrollElement: O,
                                      headerElement: M,
                                      children: (0, d.jsxs)(N.N, {
                                          className: eQ().root,
                                          containerClassName: eQ().content,
                                          ref: B,
                                          'data-test-id': g.Xk.main.MAIN_PAGE,
                                          children: [
                                              J,
                                              // for PulseSync: BEGIN render WASAPI and track quality wave badges
                                              (0, d.jsxs)('div', {
                                                  className: Z,
                                                  children: [pulseSyncWasapiStateBubble, pulseSyncWasapiDeviceBubble, pulseSyncAudioQualityBubble, X],
                                              }),
                                              // for PulseSync: END render WASAPI and track quality wave badges
                                              !G &&
                                                  (0, d.jsx)(eW.F, {
                                                      blockIdForFrom: eR.h.RUP_MAIN_RADIO,
                                                      blockId: eM.U.RUP,
                                                      blockType: eM.U.RUP,
                                                      blockPosX: 0,
                                                      blockPosY: 0,
                                                      objectsCount: 0,
                                                      children: (0, d.jsx)(ej, { className: eQ().vibe }),
                                                  }),
                                              (0, d.jsx)(k.E, {
                                                  landing: n.landing,
                                                  headerConcealerComponent: (0, d.jsx)('div', { ref: R }),
                                                  errorComponent: (0, d.jsx)(S.SomethingWentWrong, { className: eQ().error, withBackwardControl: !1 }),
                                                  containerClassName: eQ().landing,
                                                  containerStyle: q,
                                                  tabWithHeadingTitle: !0,
                                                  tabWithCovers: !0,
                                                  tabWithSubtitle: !0,
                                              }),
                                              ee,
                                          ],
                                      }),
                                  }),
                              }),
                    );
                    return (0, d.jsxs)(eE.r, { page: eO.l.HOME_SCREEN, places: [eB.R.MY_WAVE], children: [ea, (0, d.jsx)(eN.p, { onFinishSuccess: et })] });
                });
        },
        43357: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => n });
            var a = i(98436);
            let n = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(a._.PLAYLIST_ITEM).concat(t, '_').concat(i);
            };
        },
        43377: (e) => {
            e.exports = { divider: 'VibeContextMenu_divider__45urL', item_active: 'VibeContextMenu_item_active__DnFoW' };
        },
        43841: (e) => {
            e.exports = {
                root: 'WordsCardPopoverDesktop_root__vm3hv',
                item: 'WordsCardPopoverDesktop_item__eZPj9',
                actionItem: 'WordsCardPopoverDesktop_actionItem__l25qD',
                actionItem_active: 'WordsCardPopoverDesktop_actionItem_active__BORi3',
                divider: 'WordsCardPopoverDesktop_divider__Vy2GN',
                sourceItem: 'WordsCardPopoverDesktop_sourceItem__fUPoo',
                sourceItem_withoutIcon: 'WordsCardPopoverDesktop_sourceItem_withoutIcon__earG1',
                sourceIcon: 'WordsCardPopoverDesktop_sourceIcon__QSr8h',
            };
        },
        45300: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        48615: (e) => {
            e.exports = {
                root: 'WordsCardPopoverMobile_root__iHBbJ',
                container: 'WordsCardPopoverMobile_container___Eq_i',
                text: 'WordsCardPopoverMobile_text__j52Bl',
                sources: 'WordsCardPopoverMobile_sources__fKNrx',
                sourceItem: 'WordsCardPopoverMobile_sourceItem__XBH1a',
                sourceItem_withoutIcon: 'WordsCardPopoverMobile_sourceItem_withoutIcon__QM7Ht',
                action: 'WordsCardPopoverMobile_action__c_FPQ',
                sourceIcon: 'WordsCardPopoverMobile_sourceIcon__aWdrm',
                feedbackSection: 'WordsCardPopoverMobile_feedbackSection__25RsC',
                feedbackQuestion: 'WordsCardPopoverMobile_feedbackQuestion__NKSto',
                feedbackButtons: 'WordsCardPopoverMobile_feedbackButtons__Cd9Yf',
                feedbackButton: 'WordsCardPopoverMobile_feedbackButton__tejta',
                feedbackButton_active: 'WordsCardPopoverMobile_feedbackButton_active__XJl7S',
            };
        },
        50985: (e) => {
            e.exports = {
                root: 'VibeContext_root__dbiNv',
                context: 'VibeContext_context__Z_82k',
                pinButton: 'VibeContext_pinButton__b6SNF',
                resetButton: 'VibeContext_resetButton__9KK4S',
            };
        },
        51484: (e) => {
            e.exports = {
                root: 'WordsBigCardPanelFeedbackButtons_root__cwi4d',
                button: 'WordsBigCardPanelFeedbackButtons_button___NrVf',
                button_active: 'WordsBigCardPanelFeedbackButtons_button_active__F5x_N',
                divider: 'WordsBigCardPanelFeedbackButtons_divider__qFjeT',
            };
        },
        55204: (e) => {
            e.exports = {
                root: 'AiBadge_root__EfKG1',
                root_dimmed: 'AiBadge_root_dimmed__XLGvP',
                glow: 'AiBadge_glow__R6cQa',
                icon: 'AiBadge_icon__dhZpE',
                icon_okniks: 'AiBadge_icon_okniks__HM5CC',
                icon_sparkles: 'AiBadge_icon_sparkles__cS_kL',
                sparkles: 'AiBadge_sparkles__Yua7j',
                sparkle: 'AiBadge_sparkle__5EMmQ',
                'sparkle-carousel': 'AiBadge_sparkle-carousel__fMVfW',
            };
        },
        55538: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { a: () => a }),
                (function (e) {
                    ((e.LIKE = 'like'), (e.DISLIKE = 'dislike'), (e.NEUTRAL = 'neutral'));
                })(a || (a = {})));
        },
        55949: (e, t, i) => {
            'use strict';
            i.d(t, { mf: () => l });
            var a,
                n = i(74631),
                r = {
                    810: (e) => {
                        e.exports = a || (a = i.t(n, 2));
                    },
                },
                s = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useDynamicText = o.findOptimalFontSize = void 0));
                let e = (function e(t) {
                        var i = s[t];
                        if (void 0 !== i) return i.exports;
                        var a = (s[t] = { exports: {} });
                        return (r[t](a, a.exports, e), a.exports);
                    })(810),
                    t = (e) => {
                        ((e.style.wordBreak = 'keep-all'),
                            (e.style.overflowWrap = 'normal'),
                            (e.style.maxHeight = 'none'),
                            (e.style.height = 'auto'),
                            (e.style.overflow = 'visible'),
                            Array.from(e.children).forEach((e) => {
                                e instanceof HTMLElement && t(e);
                            }));
                    },
                    i = (e, t, i, a, n, r) => {
                        (e.style.setProperty('--dynamic-font-size', ''.concat(a, 'px')), e.style.setProperty('--dynamic-line-height', String(n)));
                        let s = 'number' == typeof r ? e.scrollHeight <= Math.min(r * a * n, i) + 1 : e.scrollHeight <= i + 1,
                            o = e.scrollWidth <= t + 1;
                        return s && o;
                    },
                    a = (e) => {
                        let { container: a, containerWidth: n, containerHeight: r, minFontSize: s, maxFontSize: o, lineHeight: l, maxLines: d, styleVariants: c } = e,
                            u = ((e, i, a) => {
                                let n = e.cloneNode(!0);
                                return (
                                    (n.style.cssText =
                                        '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                            i,
                                            'px !important;\n    ',
                                        )),
                                    t(n),
                                    n.style.setProperty('--dynamic-line-height', String(a)),
                                    document.body.appendChild(n),
                                    n
                                );
                            })(a, n, l);
                        try {
                            if (null == c ? void 0 : c.length) {
                                var _;
                                let e = [...c].sort((e, t) => t.fontSize - e.fontSize),
                                    t = null != (_ = e[e.length - 1]) ? _ : { fontSize: s, lineHeight: l };
                                for (let t of e) if (i(u, n, r, t.fontSize, t.lineHeight, d)) return { ...t, fits: !0 };
                                return { ...t, fits: !1 };
                            }
                            let e = s,
                                t = o,
                                a = null;
                            for (; e <= t;) {
                                let s = Math.floor((e + t) / 2);
                                i(u, n, r, s, l, d) ? ((a = s), (e = s + 1)) : (t = s - 1);
                            }
                            if (null === a) return { fontSize: s, lineHeight: l, fits: !1 };
                            return { fontSize: Math.max(s, a - 1), lineHeight: l, fits: !0 };
                        } finally {
                            u.remove();
                        }
                    };
                ((o.findOptimalFontSize = (e) => a(e).fontSize),
                    (o.useDynamicText = (t, i, n) => {
                        let { minFontSize: r, maxFontSize: s, lineHeight: o, maxLines: l, fallbackMaxLines: d, styleVariants: c } = i;
                        (0, e.useLayoutEffect)(() => {
                            if (null === t) return;
                            t.style.setProperty('--dynamic-line-height', String(o));
                            let e = () => {
                                    let e = t.clientWidth,
                                        i = t.clientHeight,
                                        u = t.childNodes.length > 0;
                                    if (0 === e || 0 === i || !u) return;
                                    let {
                                        maxLines: _,
                                        fontSize: m,
                                        lineHeight: b,
                                    } = ((e) => {
                                        let { fallbackMaxLines: t, maxLines: i } = e,
                                            n = a({ ...e, maxLines: i });
                                        if (void 0 === t || n.fits) return { maxLines: i, fontSize: n.fontSize, lineHeight: n.lineHeight };
                                        let r = a({ ...e, maxLines: t });
                                        return { maxLines: t, fontSize: r.fontSize, lineHeight: r.lineHeight };
                                    })({
                                        container: t,
                                        containerWidth: e,
                                        containerHeight: i,
                                        minFontSize: r,
                                        maxFontSize: s,
                                        lineHeight: o,
                                        maxLines: l,
                                        fallbackMaxLines: d,
                                        styleVariants: c,
                                    });
                                    (null == n || n(_),
                                        t.style.setProperty('--dynamic-font-size', ''.concat(m, 'px')),
                                        t.style.setProperty('--dynamic-line-height', String(b)));
                                },
                                i = new ResizeObserver(e),
                                u = new MutationObserver(e);
                            return (
                                i.observe(t),
                                u.observe(t, { childList: !0, characterData: !0, subtree: !0 }),
                                document.fonts.ready.then(e),
                                e(),
                                () => {
                                    (i.disconnect(), u.disconnect());
                                }
                            );
                        }, [t, n, d, o, s, l, r, c]);
                    }));
            })(),
                o.__esModule,
                o.findOptimalFontSize);
            var l = o.useDynamicText;
        },
        57024: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => r, UC: () => s, dM: () => o, uV: () => l });
            var a = i(93690),
                n = i(58848);
            let r = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                s = (e) => (e.uid ? 'authorized' : 'no-uid'),
                o = (e) => {
                    if (!(e instanceof a.m5) || !(0, n.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, n.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                l = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        58848: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => a });
            let a = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        60641: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => n });
            var a = i(98436);
            let n = (e) => ''.concat(a._.ALBUM_ITEM).concat(e);
        },
        61772: (e) => {
            e.exports = {
                root: 'WordsBigCardPanelSourceButtons_root__RmVWO',
                icon: 'WordsBigCardPanelSourceButtons_icon__kUrTX',
                title: 'WordsBigCardPanelSourceButtons_title__OAZar',
            };
        },
        63115: (e) => {
            e.exports = {
                root: 'VibeSettings_root__ufZlV',
                popover: 'VibeSettings_popover__VKqUc',
                overlay: 'VibeSettings_overlay__pusb4',
                toggleSettingsButton: 'VibeSettings_toggleSettingsButton__j6fIU',
                header: 'VibeSettings_header__OAWe2',
                actions: 'VibeSettings_actions__ckbMt',
                swipeableArea: 'VibeSettings_swipeableArea__Xx0nx',
                ripple: 'VibeSettings_ripple__kmFX6',
            };
        },
        63619: (e) => {
            e.exports = {
                root: 'WordsCardFullscreenShimmer_root__QYKVQ',
                topGroup: 'WordsCardFullscreenShimmer_topGroup__wA7gB',
                line: 'WordsCardFullscreenShimmer_line__5pJmz',
                topLinePrimary: 'WordsCardFullscreenShimmer_topLinePrimary__EZtz5',
                topLineSecondary: 'WordsCardFullscreenShimmer_topLineSecondary___ov_Y',
                main: 'WordsCardFullscreenShimmer_main__QGRY4',
                mainLine: 'WordsCardFullscreenShimmer_mainLine__alNOP',
                bottom: 'WordsCardFullscreenShimmer_bottom__1YoRA',
                bottomLine: 'WordsCardFullscreenShimmer_bottomLine__jTQt4',
            };
        },
        65596: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            let a = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(t, ':').concat(i);
            };
        },
        69969: (e) => {
            e.exports = { root: 'WordsCardPopoverDisclaimer_root__yyXMs', description: 'WordsCardPopoverDisclaimer_description__0RhrR' };
        },
        70758: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => a });
            let a = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ', ';
                return e
                    .map((e) =>
                        e.decomposed
                            ? e.name +
                              e.decomposed
                                  .map((e) => {
                                      var t;
                                      return ''.concat(null != (t = e.separator) ? t : '').concat(e.name);
                                  })
                                  .join('')
                            : e.name,
                    )
                    .join(t);
            };
        },
        70919: (e) => {
            e.exports = {
                root: 'PlayButton_root__nYKdN',
                root_isLoading: 'PlayButton_root_isLoading__925Sa',
                'applying-setting': 'PlayButton_applying-setting__3nbT9',
                icon: 'PlayButton_icon__t_THQ',
            };
        },
        76521: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => b });
            var a = i(39819);
            class n {
                get delete() {
                    var e;
                    return null == (e = this.cursor.delete) ? void 0 : e.bind(this.cursor);
                }
                get update() {
                    var e;
                    return null == (e = this.cursor.update) ? void 0 : e.bind(this.cursor);
                }
                [Symbol.asyncIterator]() {
                    return this.cursor[Symbol.asyncIterator]();
                }
                constructor(e) {
                    (Object.defineProperty(this, 'cursor', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'key', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'direction', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'request', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'primaryKey', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'advance', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'continue', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'continuePrimaryKey', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.direction = e.direction),
                        (this.request = e.request),
                        (this.primaryKey = e.primaryKey),
                        (this.key = e.key),
                        (this.advance = e.advance.bind(e)),
                        (this.continue = e.continue.bind(e)),
                        (this.continuePrimaryKey = e.continuePrimaryKey.bind(e)));
                }
            }
            class r extends n {
                [Symbol.asyncIterator]() {
                    return this.cursor[Symbol.asyncIterator]();
                }
                constructor(e) {
                    (super(e),
                        Object.defineProperty(this, 'cursor', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.value = e.value));
                }
            }
            var s = function (e, t, i, a) {
                return new (i || (i = Promise))(function (n, r) {
                    function s(e) {
                        try {
                            l(a.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function o(e) {
                        try {
                            l(a.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? n(e.value)
                            : ((t = e.value) instanceof i
                                  ? t
                                  : new i(function (e) {
                                        e(t);
                                    })
                              ).then(s, o);
                    }
                    l((a = a.apply(e, t || [])).next());
                });
            };
            class o {
                get(e) {
                    return s(this, void 0, void 0, function* () {
                        return this.index.get(e);
                    });
                }
                getAll(e, t) {
                    return s(this, void 0, void 0, function* () {
                        return this.index.getAll(e, t);
                    });
                }
                getAllKeys(e, t) {
                    return s(this, void 0, void 0, function* () {
                        return this.index.getAllKeys(e, t);
                    });
                }
                getKey(e) {
                    return s(this, void 0, void 0, function* () {
                        return this.index.getKey(e);
                    });
                }
                count(e) {
                    return s(this, void 0, void 0, function* () {
                        return this.index.count(e);
                    });
                }
                openCursor(e, t) {
                    return s(this, void 0, void 0, function* () {
                        let i = yield this.index.openCursor(e, t);
                        return i && new r(i);
                    });
                }
                openKeyCursor(e, t) {
                    return s(this, void 0, void 0, function* () {
                        let i = yield this.index.openKeyCursor(e, t);
                        return i && new n(i);
                    });
                }
                [Symbol.asyncIterator]() {
                    return this.index[Symbol.asyncIterator]();
                }
                iterate(e, t) {
                    return this.index.iterate(e, t);
                }
                constructor(e) {
                    (Object.defineProperty(this, 'index', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'keyPath', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'multiEntry', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'unique', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.keyPath = e.keyPath),
                        (this.multiEntry = e.multiEntry),
                        (this.name = e.name),
                        (this.unique = e.unique));
                }
            }
            var l = function (e, t, i, a) {
                return new (i || (i = Promise))(function (n, r) {
                    function s(e) {
                        try {
                            l(a.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function o(e) {
                        try {
                            l(a.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? n(e.value)
                            : ((t = e.value) instanceof i
                                  ? t
                                  : new i(function (e) {
                                        e(t);
                                    })
                              ).then(s, o);
                    }
                    l((a = a.apply(e, t || [])).next());
                });
            };
            class d {
                get indexNames() {
                    return this.objectStore.indexNames;
                }
                get put() {
                    var e;
                    return null == (e = this.objectStore.put) ? void 0 : e.bind(this.objectStore);
                }
                get add() {
                    var e;
                    return null == (e = this.objectStore.add) ? void 0 : e.bind(this.objectStore);
                }
                get clear() {
                    var e;
                    return null == (e = this.objectStore.clear) ? void 0 : e.bind(this.objectStore);
                }
                get delete() {
                    var e;
                    return null == (e = this.objectStore.delete) ? void 0 : e.bind(this.objectStore);
                }
                createIndex(e, t, i) {
                    return this.objectStore.createIndex ? new o(this.objectStore.createIndex(e, t, i)) : null;
                }
                deleteIndex(e) {
                    return this.objectStore.deleteIndex(e);
                }
                count(e) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.count(e);
                    });
                }
                get(e) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.get(e);
                    });
                }
                getAll(e, t) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.getAll(e, t);
                    });
                }
                getAllKeys(e, t) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.getAllKeys(e, t);
                    });
                }
                getKey(e) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.getKey(e);
                    });
                }
                index(e) {
                    return new o(this.objectStore.index(e));
                }
                openKeyCursor(e, t) {
                    return l(this, void 0, void 0, function* () {
                        let i = yield this.objectStore.openKeyCursor(e, t);
                        return i && new n(i);
                    });
                }
                openCursor(e, t) {
                    return l(this, void 0, void 0, function* () {
                        let i = yield this.objectStore.openCursor(e, t);
                        return i && new r(i);
                    });
                }
                iterate(e, t) {
                    return this.objectStore.iterate(e, t);
                }
                [Symbol.asyncIterator]() {
                    return this.objectStore[Symbol.asyncIterator]();
                }
                constructor(e) {
                    (Object.defineProperty(this, 'objectStore', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'autoIncrement', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'keyPath', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.autoIncrement = e.autoIncrement),
                        (this.keyPath = e.keyPath),
                        (this.name = e.name));
                }
            }
            class c {
                get error() {
                    return this.transaction.error;
                }
                get done() {
                    return this.transaction.done;
                }
                abort() {
                    return this.transaction.abort();
                }
                commit() {
                    return this.transaction.commit();
                }
                objectStore(e) {
                    return new d(this.transaction.objectStore(e));
                }
                addEventListener(e, t, i) {
                    return this.transaction.addEventListener(e, t, i);
                }
                removeEventListener(e, t, i) {
                    return this.transaction.removeEventListener(e, t, i);
                }
                set onabort(e) {
                    this.transaction.onabort = e;
                }
                set onerror(e) {
                    this.transaction.onerror = e;
                }
                set oncomplete(e) {
                    this.transaction.oncomplete = e;
                }
                dispatchEvent(e) {
                    return this.transaction.dispatchEvent(e);
                }
                constructor(e) {
                    (Object.defineProperty(this, 'transaction', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'durability', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'mode', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'objectStoreNames', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.durability = e.durability),
                        (this.mode = e.mode),
                        (this.objectStoreNames = e.objectStoreNames));
                }
            }
            var u = function (e, t, i, a) {
                return new (i || (i = Promise))(function (n, r) {
                    function s(e) {
                        try {
                            l(a.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function o(e) {
                        try {
                            l(a.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? n(e.value)
                            : ((t = e.value) instanceof i
                                  ? t
                                  : new i(function (e) {
                                        e(t);
                                    })
                              ).then(s, o);
                    }
                    l((a = a.apply(e, t || [])).next());
                });
            };
            class _ {
                get objectStoreNames() {
                    return this.database.objectStoreNames;
                }
                transaction(e, t, i) {
                    return new c(this.database.transaction(e, t, i));
                }
                createObjectStore(e, t) {
                    return new d(this.database.createObjectStore(e, t));
                }
                deleteObjectStore(e) {
                    return this.database.deleteObjectStore(e);
                }
                get(e, t) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.get(e, t);
                    });
                }
                getAll(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getAll(e, t, i);
                    });
                }
                add(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.add(e, t, i);
                    });
                }
                put(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.put(e, t, i);
                    });
                }
                delete(e, t) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.delete(e, t);
                    });
                }
                clear(e) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.clear(e);
                    });
                }
                count(e, t) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.count(e, t);
                    });
                }
                getKey(e, t) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getKey(e, t);
                    });
                }
                getAllKeys(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getAllKeys(e, t, i);
                    });
                }
                countFromIndex(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.countFromIndex(e, t, i);
                    });
                }
                getFromIndex(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getFromIndex(e, t, i);
                    });
                }
                getAllFromIndex(e, t, i, a) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getAllFromIndex(e, t, i, a);
                    });
                }
                getAllKeysFromIndex(e, t, i, a) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getAllKeysFromIndex(e, t, i, a);
                    });
                }
                getKeyFromIndex(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getKeyFromIndex(e, t, i);
                    });
                }
                addEventListener(e, t, i) {
                    this.database.addEventListener(e, t, i);
                }
                removeEventListener(e, t, i) {
                    this.database.removeEventListener(e, t, i);
                }
                set onabort(e) {
                    this.database.onabort = e;
                }
                set onclose(e) {
                    this.database.onclose = e;
                }
                set onerror(e) {
                    this.database.onerror = e;
                }
                set onversionchange(e) {
                    this.database.onversionchange = e;
                }
                close() {
                    return this.database.close();
                }
                dispatchEvent(e) {
                    return this.database.dispatchEvent(e);
                }
                constructor(e) {
                    (Object.defineProperty(this, 'database', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'version', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.version = e.version),
                        (this.name = e.name));
                }
            }
            var m = function (e, t, i, a) {
                return new (i || (i = Promise))(function (n, r) {
                    function s(e) {
                        try {
                            l(a.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function o(e) {
                        try {
                            l(a.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? n(e.value)
                            : ((t = e.value) instanceof i
                                  ? t
                                  : new i(function (e) {
                                        e(t);
                                    })
                              ).then(s, o);
                    }
                    l((a = a.apply(e, t || [])).next());
                });
            };
            class b {
                openDB(e) {
                    let { onBlocked: t, onBlocking: i, onTerminated: n, onUpgrade: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return m(this, void 0, void 0, function* () {
                        let s = yield (0, a.P2)(this.name, e, {
                            blocked: t,
                            blocking: i,
                            terminated: n,
                            upgrade: (e, t, i, a, n) => {
                                let s = new _(e);
                                null == r || r(s, t, i, new c(a), n);
                            },
                        });
                        return new _(s);
                    });
                }
                deleteDB(e) {
                    let { onBlocked: t } = e;
                    return m(this, void 0, void 0, function* () {
                        yield (0, a.MR)(this.name, { blocked: t });
                    });
                }
                constructor(e) {
                    Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: e });
                }
            }
        },
        76864: (e) => {
            e.exports = { root: 'LoadingPhrase_root__0ML0A', 'gradient-sweep': 'LoadingPhrase_gradient-sweep__SncsP', text: 'LoadingPhrase_text__Ne1FD' };
        },
        77866: (e) => {
            e.exports = { root: 'WordsBigCardPanelLumen_root__xuEFd', image: 'WordsBigCardPanelLumen_image__j1sDJ' };
        },
        83372: (e) => {
            e.exports = {
                root: 'WordsBigCardPanel_root__sOTFq',
                root_mobile: 'WordsBigCardPanel_root_mobile__G4xsF',
                enter: 'WordsBigCardPanel_enter__etXny',
                enter_active: 'WordsBigCardPanel_enter_active__03VXN',
                exit: 'WordsBigCardPanel_exit__UGMAh',
                exit_active: 'WordsBigCardPanel_exit_active__3eAPR',
            };
        },
        84111: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => n });
            var a = i(35955);
            let n = (e, t) => {
                if (!e) return { clipIds: [], activeClipIndex: 0 };
                let i = e
                        .split(',')
                        .map(Number)
                        .filter((e) => e >= 0),
                    n = (0, a.z)(i, t);
                return { clipIds: i, activeClipIndex: n };
            };
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
        89257: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => U });
            var a = i(25839),
                n = i(82298),
                r = i(88204),
                s = i(74631),
                o = i(39004),
                l = i(8487),
                d = i(61493),
                c = i(68934),
                u = i(4071),
                _ = i(35622),
                m = i(5867),
                b = i(4254),
                v = i(51859),
                p = i(91149),
                h = i(92942),
                g = i(65343),
                x = i(89209),
                f = i(20790),
                A = i(27954),
                y = i(31488),
                C = i(36159),
                j = i(57549),
                N = i(69041),
                P = i(19412),
                T = i(79396),
                k = i(9931),
                S = i(6968),
                w = i(51246),
                I = i(66738),
                E = i(86869),
                O = i(52512),
                B = i(6323),
                M = i(27819),
                R = i(86432),
                L = i.n(R);
            let W = (0, r.PA)((e) => {
                let { className: t, artist: i } = e,
                    { ref: r, intersectionPropertyId: o } = (0, O.n)(),
                    {
                        wizard: { likeArtist: l, isArtistLiked: c },
                    } = (0, A.g)(),
                    { id: _, name: m, coverUri: v } = i,
                    p = (0, s.useCallback)(() => {
                        l(_);
                    }, [l, _]),
                    h = c(_),
                    g = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(E.t, {
                                className: L().cover,
                                radius: 'round',
                                'data-test-id': d.e8.wizard.ARTIST_CARD,
                                children: (0, a.jsxs)(u.$, {
                                    radius: 'round',
                                    className: L().coverBlock,
                                    variant: 'default',
                                    onClick: p,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': h,
                                    'aria-label': m,
                                    'data-test-id': d.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, a.jsx)(B.B, { className: L().image, src: v || M.A.src, fit: 'cover', alt: m, withAvatarReplace: !!v, 'aria-hidden': !0 }),
                                        (0, a.jsx)('div', {
                                            className: (0, n.$)(L().like),
                                            children: (0, a.jsx)(I.I, { variant: 'likedVariant', size: 's', className: L().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [h, v, m, p],
                    );
                return (0, a.jsx)(w.MN, {
                    ref: r,
                    className: (0, n.$)(L().root, { [L().root_selected]: h }, t),
                    textPosition: 'center',
                    title: (0, a.jsx)(b.HL, {
                        'aria-hidden': !0,
                        className: L().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': d.e8.wizard.ARTIST_CARD_NAME,
                        children: m,
                    }),
                    'data-intersection-property-id': o,
                    view: g,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                });
            });
            var D = i(22984),
                V = i.n(D);
            let F = { [v.u.Desktop]: { start: 40, end: 40 }, [v.u.Mobile]: { start: 40, end: 40 } },
                U = (0, r.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: i } = (0, o.A)(),
                        {
                            wizard: r,
                            settings: { isMobile: v, isWindowsApplication: w, isLinuxApplication: I },
                            user: E,
                        } = (0, A.g)(),
                        { notify: O } = (0, h.l)(),
                        B = (0, f.z)(),
                        [M, R] = (0, c.d)(),
                        L = (0, m.zb)(0),
                        D = (0, s.useMemo)(
                            () => (e) => {
                                var t;
                                if (!L.onTabChange || e === L.value) return;
                                L.onTabChange(e);
                                let i = null == (t = r.genres[e]) ? void 0 : t.id;
                                (r.setFilter(i), null == M || M.scrollTo({ top: 0 }));
                            },
                            [r, L, M],
                        ),
                        U = (0, s.useMemo)(() => {
                            switch (r.selectedArtistsQuantity) {
                                case 0:
                                    return i({ id: 'wizard.button-tune' });
                                case 1:
                                    return i({ id: 'wizard.button-little-more' });
                                case 2:
                                    return i({ id: 'wizard.button-one-more' });
                                default:
                                    return i({ id: 'wizard.button-done' });
                            }
                        }, [r.selectedArtistsQuantity, i]),
                        z = (0, s.useMemo)(
                            () =>
                                (0, a.jsx)(k.wI, {
                                    className: V().tabCarousel,
                                    ...L,
                                    onTabChange: D,
                                    isShimmerVisible: r.loadingState === C.G.PENDING,
                                    shimmer: (0, a.jsx)(k.zr, { isActive: !0, className: V().tabCarousel, shimmerClassName: V().tabShimmer, count: v ? 2 : 3 }),
                                    children: r.genres.map((e, t) =>
                                        (0, a.jsx)(
                                            T.o,
                                            {
                                                className: (0, n.$)(V().filter, { [V().filter_selected]: t === L.value }),
                                                titleClassName: V().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [r.genres, L, D, r.loadingState, v],
                        ),
                        H = (0, s.useCallback)(() => {
                            r.loadArtists(60);
                        }, [r]);
                    (0, s.useEffect)(() => {
                        r.filter && H();
                    }, [r.filter, H]);
                    let K = (0, s.useCallback)(async () => {
                        (await r.loadGenres(), H());
                    }, [r, H]);
                    ((0, s.useEffect)(() => {
                        r.modal.isOpened && K();
                    }, [r, r.modal.isOpened, K]),
                        (0, s.useEffect)(() => {
                            r.loadingState === C.G.REJECT &&
                                (r.modal.close(), O((0, a.jsx)(j.h, { error: i({ id: 'error-messages.error-load-wizard' }) }), { containerId: p.u.ERROR }));
                        }, [r, r.loadGenres, r.loadingState, i, O]));
                    let G = (0, s.useMemo)(
                            () =>
                                (0, a.jsx)(b.DZ, {
                                    className: V().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': d.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, a.jsx)(l.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        Y = (0, s.useCallback)(async () => {
                            (r.canFinish ? (await r.finish()) === y.F.OK && (await E.getSettings(), await (null == t ? void 0 : t())) : r.loadArtists(), r.modal.close());
                        }, [t, E, r]);
                    return (
                        (0, s.useEffect)(
                            () => (
                                null == B ||
                                    B.addShortcutsListener(x.M.MAIN, g.l.CLOSE, () => {
                                        r.modal.isOpened && Y();
                                    }),
                                () => {
                                    null == B || B.removeShortcutsListener(x.M.MAIN, g.l.CLOSE);
                                }
                            ),
                            [Y, r.modal.isOpened, B],
                        ),
                        (0, a.jsxs)(_.a, {
                            className: (0, n.$)(V().root, { [V().root_withCustomControls]: w || I }),
                            headerClassName: V().modalHeader,
                            contentClassName: V().modalContent,
                            open: r.modal.isOpened,
                            onOpenChange: r.modal.onOpenChange,
                            onClose: Y,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: i({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: d.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': d.e8.wizard.WIZARD_MODAL,
                            header: v && G,
                            escapeKey: !1,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: V().wrapper,
                                    children: [
                                        !v && G,
                                        (0, a.jsx)(b.HL, {
                                            className: V().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, a.jsx)(l.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, a.jsx)(u.$, {
                                            className: V().button,
                                            size: v ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: Y,
                                            disabled: !r.canFinish,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, a.jsx)(b.HL, { variant: 'div', size: 'm', weight: 'medium', children: U }),
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)('div', {
                                    className: V().mainContainer,
                                    children: [
                                        (0, a.jsx)(N.F, { className: V().carousel, carouselElement: z, scrollPadding: F }),
                                        (0, a.jsx)(S.$, {
                                            withFooter: !1,
                                            className: (0, n.$)(V().scrollContainer, V().important),
                                            itemContentCallback: (e) => {
                                                let t = r.artistsByGenre[e];
                                                if (!t) {
                                                    let e = i({ id: 'loading-messages.entity-is-loading' }, { entityName: i({ id: 'entity-names.artist' }) });
                                                    return (0, a.jsx)(P.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, a.jsx)(W, { artist: t }, t.id);
                                            },
                                            data: r.artistsByGenre,
                                            endReached: H,
                                            listClassName: V().content,
                                            itemClassName: V().item,
                                            pageSize: 60,
                                            handleRef: R,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        90208: (e, t, i) => {
            'use strict';
            function a() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.version;
            }
            i.d(t, { B: () => a });
        },
        91335: (e) => {
            e.exports = {
                root: 'VibeResetButton_root__ju8pE',
                root_visible: 'VibeResetButton_root_visible__OHA1w',
                'fade-in': 'VibeResetButton_fade-in__4Dgxq',
                root_q2v: 'VibeResetButton_root_q2v__K9GdD',
                root_withFeedbackForm: 'VibeResetButton_root_withFeedbackForm__s6ltp',
                container: 'VibeResetButton_container__JO2j1',
                icon: 'VibeResetButton_icon__2FkgG',
                button: 'VibeResetButton_button__i8Cvy',
                button_q2v: 'VibeResetButton_button_q2v__NX6iG',
                context: 'VibeResetButton_context__hsTlv',
                context_q2v: 'VibeResetButton_context_q2v__OVhK6',
            };
        },
        91882: (e) => {
            e.exports = {
                root: 'WordsBigCardPanelContent_root__X1SOG',
                lumen: 'WordsBigCardPanelContent_lumen__BjuEA',
                lumen_mobile: 'WordsBigCardPanelContent_lumen_mobile__AUxXt',
                contentStack: 'WordsBigCardPanelContent_contentStack__ntqdP',
                contentStack_mobile: 'WordsBigCardPanelContent_contentStack_mobile__UYLbo',
                contentLayer: 'WordsBigCardPanelContent_contentLayer__cdB9J',
                contentLayer_visible: 'WordsBigCardPanelContent_contentLayer_visible__yppQy',
                content: 'WordsBigCardPanelContent_content__GIIoE',
                textContainer: 'WordsBigCardPanelContent_textContainer__R5onX',
                textContainer_hidden: 'WordsBigCardPanelContent_textContainer_hidden__Bz79u',
                contentMotion: 'WordsBigCardPanelContent_contentMotion__ltpFF',
                action: 'WordsBigCardPanelContent_action__qwVs5',
                feedbackButtons: 'WordsBigCardPanelContent_feedbackButtons__kzT5Y',
                feedback: 'WordsBigCardPanelContent_feedback__bAIGa',
                feedbackMessage: 'WordsBigCardPanelContent_feedbackMessage__s2APT',
                controlsMotion: 'WordsBigCardPanelContent_controlsMotion__t1B1D',
                closeIcon: 'WordsBigCardPanelContent_closeIcon__u7C2z',
                closeIcon_mobile: 'WordsBigCardPanelContent_closeIcon_mobile__DcdRR',
                closeButton: 'WordsBigCardPanelContent_closeButton__qgbyc',
                closeButton_mobile: 'WordsBigCardPanelContent_closeButton_mobile__kI2FS',
                sources: 'WordsBigCardPanelContent_sources__rrt5c',
                sources_hidden: 'WordsBigCardPanelContent_sources_hidden__cFbrG',
                contentArea: 'WordsBigCardPanelContent_contentArea__nzOu_',
                contentArea_mobile: 'WordsBigCardPanelContent_contentArea_mobile__hFChP',
                contentArea_feedback: 'WordsBigCardPanelContent_contentArea_feedback__QBVpK',
                cardContent: 'WordsBigCardPanelContent_cardContent__1R3U_',
                shimmer: 'WordsBigCardPanelContent_shimmer__jPakx',
                disclaimer: 'WordsBigCardPanelContent_disclaimer__bWpjy',
                disclaimer_mobile: 'WordsBigCardPanelContent_disclaimer_mobile__zIUTh',
            };
        },
        95798: (e) => {
            e.exports = {
                root: 'WizardIntroModal_root__P1uIH',
                root_mobile: 'WizardIntroModal_root_mobile__Ax8HO',
                header: 'WizardIntroModal_header__qtpcO',
                content: 'WizardIntroModal_content__0A1Ox',
                image: 'WizardIntroModal_image__SOJa7',
                text: 'WizardIntroModal_text___yvOo',
                title: 'WizardIntroModal_title__NWQaj',
                description: 'WizardIntroModal_description__rDfHs',
                button: 'WizardIntroModal_button__b9jJT',
            };
        },
        96703: (e) => {
            e.exports = {
                vibeAnimation: 'VibeBlock_vibeAnimation__XVEE6',
                controls: 'VibeBlock_controls__BpDFL',
                root: 'VibeBlock_root__z7LtR',
                root_freemium: 'VibeBlock_root_freemium__4i2rV',
                playButton: 'VibeBlock_playButton__6xU55',
                settingsButton: 'VibeBlock_settingsButton__GeMtO',
                subscriptionText: 'VibeBlock_subscriptionText__ODUZN',
                button: 'VibeBlock_button__fWXM_',
            };
        },
        97028: (e) => {
            e.exports = {
                content: 'MainPage_content__kskSM',
                root: 'MainPage_root__STXqc',
                container: 'MainPage_container__CB86l',
                vibe: 'MainPage_vibe__XEBbh',
                landing: 'MainPage_landing___FGNm',
                actionsBar: 'MainPage_actionsBar__agoxp',
                actionsBar_desktop: 'MainPage_actionsBar_desktop__zctj6',
                actionsBar_hidden: 'MainPage_actionsBar_hidden__6ik4S',
                userProfile: 'MainPage_userProfile__8JzS3',
                vibeWidgetContainer: 'MainPage_vibeWidgetContainer__i5T4X',
                beta: 'MainPage_beta__y32vb',
                beta_withReleaseNotes: 'MainPage_beta_withReleaseNotes__WOjUk',
                betaSlot: 'MainPage_betaSlot__JwbmM',
                betaSlot_newVibe: 'MainPage_betaSlot_newVibe__DGtXm',
                specialHeaderContainer: 'MainPage_specialHeaderContainer__L3C6E',
                specialHeader: 'MainPage_specialHeader__aqdvj',
                specialHeaderImage: 'MainPage_specialHeaderImage__4GlXq',
                footer: 'MainPage_footer__2rGy2',
                error: 'MainPage_error__u_UCm',
            };
        },
        99772: (e) => {
            e.exports = { root: 'WordsBigCardPanelTextShimmer_root__2ZH7z', item: 'WordsBigCardPanelTextShimmer_item__rrFNo' };
        },
    },
]);
