(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1287],
    {
        400: (e) => {
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
        2096: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => w });
            var n = i(25839),
                a = i(82298),
                r = i(88204),
                s = i(74631),
                o = i(39004),
                l = i(44031),
                c = i(61493),
                d = i(71035),
                u = i(66738),
                m = i(3392),
                _ = i(4254),
                p = i(17545),
                x = i(4071);
            let h = (e) => {
                let { className: t, variant: i = 'text', onClick: a, iconClassName: r, iconSize: l, size: d = 's', ariaLabel: m } = e,
                    { formatMessage: _ } = (0, o.A)(),
                    p = null != m ? m : _({ id: 'play-queue.delete-from-queue' }),
                    h = (0, s.useCallback)(
                        (e) => {
                            (null == a || a(), e.stopPropagation());
                        },
                        [a],
                    );
                return (0, n.jsx)(x.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: d,
                    radius: 'round',
                    'aria-label': p,
                    onClick: h,
                    icon: (0, n.jsx)(u.I, { size: l, className: r, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var v = i(79367),
                g = i(34159),
                b = i(85743),
                C = i(27954),
                A = i(64720),
                k = i(71996),
                T = i(6304),
                N = i(65165),
                f = i(38097),
                y = i(91907),
                E = i(3407),
                I = i(34826),
                j = i.n(I),
                S = i(82684),
                O = i(85957),
                R = i.n(O);
            let L = (0, r.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, o.A)();
                    return t.isDownloaded
                        ? (0, n.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, n.jsx)(S.A, { value: t.downloadingProgress, size: 16, className: R().downloadingProgress, progressBarClassName: R().progress })
                          : null;
                }),
                w = (0, r.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: r,
                            withLightning: x,
                            ignoreDislikedStyles: I,
                            onLikeClick: S,
                            utmLink: O,
                            withSecondaryColor: R,
                            handleRemove: w,
                            withTrailer: P = !0,
                            likeIconSize: M = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: F,
                        } = e,
                        { user: U, trailer: B } = (0, C.g)(),
                        { formatMessage: W } = (0, o.A)(),
                        { sendLikeSearchFeedback: z } = (0, b.z)(),
                        [H, Y] = (0, s.useState)(!1),
                        [$, K] = (0, s.useState)(!1),
                        G = (0, v.P)(),
                        V = (0, p.K)(r),
                        {
                            duration: X,
                            lightning: q,
                            ugc: Z,
                        } = ((e, t, i) => {
                            var n;
                            let { withLightning: a, isUGC: r } = t,
                                s = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / f.k7);
                                              return (0, y.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== s ? { text: s, ariaLabel: (0, N.j)(Math.round((null != (n = e.durationMs) ? n : 0) / 1e3), i) } : null,
                                lightning: a ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: r ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(r, { withLightning: x, isUGC: r.isUGC }, W),
                        J = (0, g.F)(),
                        Q = U.hasPlus,
                        ee = !r.isRemoved && r.isAvailable && !F,
                        et = (0, d.c)(async () => {
                            (H || r.isLiked || (Y(!0), null == z || z()), await V(), null == S || S(r.isLiked));
                        }),
                        ei = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        en = (0, d.c)((e) => {
                            if ((e.stopPropagation(), G())) return void e.preventDefault();
                            (B.openTrackTrailer(r.id), J(l.DomainObjectType.Track, r.id));
                        }),
                        ea = (0, s.useMemo)(() => {
                            if (ee)
                                return (0, n.jsx)('div', {
                                    onClick: ei,
                                    children: (0, n.jsx)(E._, {
                                        track: r,
                                        open: $,
                                        onOpenChange: K,
                                        placement: 'bottom',
                                        icon: (0, n.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: O,
                                        className: (0, a.$)(j().contextMenu, { [j().contextMenu_visible]: $ }),
                                        handleRemove: w,
                                        withTrailer: P,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, w, $, ee, P, r, O]);
                    return (0, n.jsxs)('div', {
                        className: (0, a.$)(j().root, j().controls, i, {
                            [j().controls_dislikedControls]: r.isDisliked,
                            [j().controls_dislikedColors]: r.isDisliked && !I,
                            [j().controls_disabled]: !r.isAvailable,
                            [j().root_withSecondaryColor]: R,
                        }),
                        children: [
                            q && (0, n.jsx)(u.I, { 'aria-label': q.label, size: 'xxs', className: j().lightning, variant: 'lightning' }),
                            Z &&
                                (0, n.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, n.jsx)(u.I, {
                                            'aria-label': Z.label,
                                            size: 'xxs',
                                            className: j().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, n.jsx)(m.ZI, { children: Z.label }),
                                    ],
                                }),
                            Q && (0, n.jsx)('div', { className: (0, a.$)(j().item, j().downloadIcon), children: (0, n.jsx)(L, { track: r }) }),
                            w && !F && (0, n.jsx)(h, { size: 'xs', iconSize: 'xxs', className: (0, a.$)(j().item, j().removeButton), onClick: w, ariaLabel: D }),
                            ee &&
                                (0, n.jsx)(T.WithOffline, {
                                    fallback: (0, n.jsx)(A.c, {
                                        size: 'xs',
                                        iconSize: M,
                                        className: (0, a.$)(j().item, j().likeIcon),
                                        isLiked: r.isLiked,
                                        onClick: et,
                                        disabled: !U.isAuthorized,
                                    }),
                                }),
                            (null == (t = r.trailer) ? void 0 : t.isAvailable) &&
                                r.isAvailable &&
                                (0, n.jsx)(T.WithOffline, {
                                    fallback: (0, n.jsx)(k.k, {
                                        className: (0, a.$)(j().item, j().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: en,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, n.jsxs)('div', {
                                className: (0, a.$)(j().item, j().contextMenuWrapper),
                                children: [
                                    null !== X &&
                                        (0, n.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, a.$)(j().duration, { [j().duration_hidden]: $ && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': X.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, n.jsx)('span', { 'aria-hidden': 'true', children: X.text }),
                                        }),
                                    ea,
                                ],
                            }),
                        ],
                    });
                });
        },
        3669: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => g });
            var n = i(74631),
                a = i(67379),
                r = i(20934),
                s = i(59450),
                o = i(49656),
                l = i(84e3),
                c = i(58069),
                d = i(20258),
                u = i(26742),
                m = i(25195),
                _ = i(37314),
                p = i(25488),
                x = i(97952),
                h = i(10764),
                v = i(72594);
            let g = () => {
                let e = (0, l.U)(),
                    t = (0, s.st)(),
                    { hash: i } = (0, s.gf)(),
                    { pageId: g, displayReasonId: b } = (0, x.$)(),
                    { tabId: C, tabPos: A, isTabSelectedByDefault: k } = (0, v.R)(),
                    { offsetBlockPosY: T } = (0, m.u)(),
                    { blockType: N, blockId: f, blockPosX: y, blockPosY: E, mainObjectId: I, mainObjectType: j, displayReasonId: S } = (0, u.N)(),
                    { filterKey: O, filterValue: R, filterPos: L } = (0, _.G)(),
                    { objectType: w, objectsCount: P, objectId: M, objectPosX: D, objectPosY: F } = (0, p.J)(),
                    { skeleton: U } = (0, h.b)(),
                    B = null != S ? S : b,
                    W = (0, o.L)(() => (void 0 !== T && void 0 !== E ? T + E : E));
                return (0, n.useCallback)(
                    (n, s) => {
                        if (!t || !g || !d.xK.includes(g) || !d.fD.includes(g)) return;
                        let o = c.F[g];
                        if (!o) return;
                        let l = {
                            hash: i,
                            pageId: o,
                            entityType: N,
                            entityId: f,
                            entityPosX: y,
                            entityPosY: W,
                            objectsCount: P,
                            viewUuid: s,
                            objectType: w,
                            objectId: M,
                            objectPosX: D,
                            objectPosY: F,
                        };
                        (void 0 !== O && ((l.filterKey = O), (l.filterValue = R), (l.filterPos = L)),
                            d.qG.includes(g) && ((l.tabId = C), (l.tabPos = A), (l.isTabSelectedByDefault = k)),
                            U && (l.skeletonId = U),
                            'string' == typeof I && 'string' == typeof j && ((l.mainObjectType = j), (l.mainObjectId = I)),
                            B && (l.displayReasonId = B));
                        let u = (0, a.F)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (n ? (0, r.Pf)(t.evgenInstance, u) : (0, r.nv)(t.evgenInstance, u));
                    },
                    [t, B, f, y, W, N, O, L, R, i, k, e, I, j, M, D, F, w, P, g, U, C, A],
                );
            };
        },
        7929: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        10322: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => s });
            var n = i(25839),
                a = i(74631),
                r = i(82064);
            let s = (e) => {
                let { pageId: t, pageEntityId: i, displayReasonId: s, pageStyle: o, pagePlacement: l, children: c } = e,
                    d = (0, a.useMemo)(() => ({ pageId: t, pageEntityId: i, displayReasonId: s, pageStyle: o, pagePlacement: l }), [t, i, s, o, l]);
                return (0, n.jsx)(r.r.Provider, { value: d, children: c });
            };
        },
        10959: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var n = i(44806);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: a, userRegion: r } = e;
                return 'ru' === r && t(n.z.WebNextFooterDisclaimer, 'on') ? i() : a();
            };
        },
        13232: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => n });
            let n = (0, i(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        19410: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => n });
            let n = { delay: { open: 1e3, close: 0 } };
        },
        21468: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => r });
            var n = i(74631),
                a = i(56480);
            function r() {
                return (0, n.useContext)(a.H);
            }
        },
        22413: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => r, TF: () => o, hZ: () => s });
            var n = function () {
                return (n =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, n = arguments.length; i < n; i++)
                            for (var a in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e;
                    }).apply(this, arguments);
            };
            function a(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function r(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], n = 0; n < i.length; n++) {
                        var a = i[n].split('='),
                            r = a.slice(1).join('=');
                        '"' === r[0] && (r = r.slice(1, -1));
                        try {
                            t[decodeURIComponent(a[0])] = r.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function s(e, t, i) {
                var r;
                document.cookie =
                    ((r = n({ path: '/' }, i)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                a('Expires', e.expires ? e.expires.toUTCString() : '') +
                                a('Domain', e.domain) +
                                a('Path', e.path) +
                                a('Secure', e.secure) +
                                a('SameSite', e.sameSite)
                            );
                        })(r));
            }
            function o(e, t) {
                s(e, '', n(n({}, t), { expires: -1 }));
            }
        },
        24053: (e) => {
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
        26076: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => s });
            var n = i(25839);
            i(93588);
            var a = i(400),
                r = i.n(a);
            let s = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: r().empty });
            };
        },
        26115: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => r });
            var n = i(40207),
                a = i(12929);
            let r = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: r } = e;
                return (0, n.l)({ entity: t, entityType: a.n.TRACK, callback: i, onReject: r, preventDefaultWhenSafe: !1 });
            };
        },
        27990: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        28257: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        30716: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => r });
            var n = i(84059),
                a = i(74631);
            i(93588);
            let r = (e) => {
                let t = (0, n.usePathname)(),
                    [i, r] = (0, a.useState)(!1);
                ((0, a.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), r(!0));
                    }, [e, i, t]));
            };
        },
        32652: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => x });
            var n = i(25839),
                a = i(82298),
                r = i(88204),
                s = i(74631),
                o = i(39004),
                l = i(61493),
                c = i(66738),
                d = i(74245),
                u = i(27954),
                m = i(60924),
                _ = i(92870),
                p = i.n(_);
            let x = (0, r.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: r, containerClassName: _, variant: x, size: h = 'xxxs', ...v } = e,
                    { formatMessage: g } = (0, o.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, u.g)(),
                    [C, A] = (0, s.useState)(null);
                (0, s.useEffect)(() => {
                    i && i().then(A);
                }, [i, r]);
                let {
                    iconVariant: k,
                    descriptionText: T,
                    isTooltipEnabled: N,
                    ariaLabel: f,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: n, isMobile: a } = e,
                        r = (null == n ? void 0 : n.join('\n')) || '';
                    return {
                        iconVariant: ((e) => {
                            switch (e) {
                                case d.JU.E:
                                    return 'explicit';
                                case d.JU.AGE_12:
                                case d.JU.AGE_16:
                                case d.JU.AGE_18:
                                    return 'adult';
                                case d.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(i),
                        descriptionText: r,
                        isTooltipEnabled: !!(null == n ? void 0 : n.length) && !a,
                        ariaLabel: r.length > 0 ? r : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: x, descriptionTexts: C, isMobile: b }, g);
                return (0, n.jsx)(m.k, {
                    description: T,
                    placement: 'bottom-start',
                    enabled: N,
                    children: (0, n.jsx)('span', {
                        className: _,
                        children: (0, n.jsx)(c.I, {
                            className: (0, a.$)(p().explicitMark, t),
                            'aria-label': f,
                            variant: k,
                            size: h,
                            ...v,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        34546: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => n });
            let n = (e) => e.map((e) => e.name).join(', ');
        },
        34826: (e) => {
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
        36286: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        38726: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => d });
            var n = i(25839),
                a = i(88204),
                r = i(61493),
                s = i(66738),
                o = i(10820),
                l = i(77174),
                c = i(27954);
            let d = (0, a.PA)((e) => {
                let { isLiked: t, onClick: i, className: a, iconClassName: d, albumType: u, disabled: m } = e,
                    { user: _ } = (0, c.g)(),
                    p = t ? 'liked' : 'like',
                    x = (0, l.$)(t, u);
                return (0, n.jsx)(o.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, n.jsx)(s.I, { className: d, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !_.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: x,
                });
            });
        },
        39528: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => a });
            var n = i(25895);
            let a = (e) => (0, n.u)('/artist/:artistId', { params: { artistId: e } });
        },
        40311: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 30871)),
                Promise.resolve().then(i.bind(i, 25464)),
                Promise.resolve().then(i.bind(i, 29340)),
                Promise.resolve().then(i.bind(i, 96634)));
        },
        43354: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a, P: () => r });
            var n = i(74631);
            let a = (0, n.createContext)(null),
                r = () => (0, n.useContext)(a);
        },
        44408: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        47399: (e) => {
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
        51027: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        52512: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => s });
            var n = i(74631),
                a = i(3669),
                r = i(13232);
            let s = function () {
                let { callback: e, singleEvent: t, withViewUuid: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    s = (0, n.useRef)(null),
                    o = (0, a.D)(),
                    l = (0, n.useId)(),
                    c = (0, n.useContext)(r.B),
                    d = (0, n.useCallback)(
                        (n, a) => {
                            (e ? e(n, i ? a : void 0) : o(n, a), t && c.unobserveElement(l));
                        },
                        [e, c, l, o, t, i],
                    );
                return (
                    (0, n.useEffect)(
                        () => (
                            c.observeElement({ elementRef: s, elementId: l, callback: d }),
                            () => {
                                c.unobserveElement(l);
                            }
                        ),
                        [e, c, d, l, o],
                    ),
                    { ref: s, intersectionPropertyId: l }
                );
            };
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        56348: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => z });
            var n = i(25839),
                a = i(82298),
                r = i(88204),
                s = i(74631),
                o = i(49656),
                l = i(3392),
                c = i(19410),
                d = i(71035),
                u = i(27954),
                m = i(39528);
            let _ = (e, t) => {
                let { withLink: i, separator: n } = t,
                    a = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: n, link: a };
            };
            var p = i(94484),
                x = i.n(p),
                h = i(61493),
                v = i(4254),
                g = i(97522),
                b = i(39004),
                C = i(44031),
                A = i(29481),
                k = i(85686),
                T = i(85743),
                N = i(40207);
            let f = (0, r.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: a, captionSize: r = 'm', allArtistsTitle: s, withCustomTooltip: o, hoverSettings: c } = e,
                        {
                            name: m,
                            link: _,
                            title: p,
                            ariaLabel: x,
                            tooltipText: f,
                            isTooltipEnabled: y,
                            handleNavigate: E,
                        } = ((e) => {
                            var t, i;
                            let { item: n, allArtistsTitle: a, withCustomTooltip: r } = e,
                                { formatMessage: s } = (0, b.A)(),
                                o = ((e, t) => {
                                    let { item: i, allArtistsTitle: n, withCustomTooltip: a } = e,
                                        r = n || i.name;
                                    return {
                                        ...i,
                                        title: a ? void 0 : r,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: r,
                                        isTooltipEnabled: !n && a,
                                    };
                                })({ item: n, allArtistsTitle: a, withCustomTooltip: r }, s),
                                {
                                    track: l,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                m = (0, k.Z)(null != (i = null == (t = o.link) ? void 0 : t.href) ? i : o.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, T.z)(),
                                p = (0, A.N)(),
                                x = (0, d.c)((e) => {
                                    (c && l.isOpened && l.close(), m(e));
                                }),
                                h = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: n, fullscreenPlayer: a, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: s } = n;
                                    return (0, N.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), s.isOpened && (n.reset(), s.close()), a.modal.isOpened && a.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: o.artist, callback: x }),
                                v = (0, d.c)((e) => {
                                    (p({ to: C.AppScreen.ArtistScreen }), null == _ || _(), h(e));
                                });
                            return { ...o, handleNavigate: v };
                        })({ item: t, allArtistsTitle: s, withCustomTooltip: o });
                    return _
                        ? (0, n.jsx)(g.N, {
                              ..._,
                              'aria-label': x,
                              className: i,
                              onClick: E,
                              title: p,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, n.jsx)(l.m_, {
                                  enabled: y,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: f,
                                  hoverSettings: c,
                                  children: (0, n.jsx)(v.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: a, children: m }),
                              }),
                          })
                        : (0, n.jsx)(l.m_, {
                              enabled: y,
                              offsetOptions: 4,
                              placement: 'top',
                              text: f,
                              hoverSettings: c,
                              children: (0, n.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: a,
                                  title: p,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                y = (e) => {
                    let { group: t, linkClassName: i, captionClassName: a, captionSize: r, allArtistsTitle: o, withCustomTooltip: l, hoverSettings: c } = e;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, n.jsx)(f, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: r,
                                allArtistsTitle: o,
                                withCustomTooltip: l,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, n.jsxs)(
                                    s.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, n.jsx)(f, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: r,
                                                allArtistsTitle: o,
                                                withCustomTooltip: l,
                                                hoverSettings: c,
                                            }),
                                        ],
                                    },
                                    e.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var E = i(8487),
                I = i(9079);
            let j = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: r } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        ' ',
                        (0, n.jsx)(I.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(x().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, n.jsx)(E.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var S = i(28631),
                O = i(33049),
                R = i(61912),
                L = i(36286),
                w = i.n(L);
            let P = (0, r.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, n.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, O.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, n.jsx)('div', { ref: a, children: t }),
                            (0, n.jsx)(l.ZI, { className: w().tooltipContent, children: i.map((e) => (0, n.jsx)(R.V, { artist: e, className: w().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, s.forwardRef)((e, t) => (0, n.jsx)(P, { forwardRef: t, ...e }));
            var D = i(10820),
                F = i(93510),
                U = i.n(F);
            let B = (0, r.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: r } = (0, b.A)();
                    return (0, n.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, a.$)(U().root, U().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, n.jsx)(R.V, { artist: e }, e.id)),
                    });
                }),
                W = (0, r.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [r, l] = (0, s.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let e = a.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, o.L)(() =>
                            (0, S.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, s.useEffect)(
                            () => (
                                window.addEventListener('resize', _),
                                m(),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [_, m],
                        ),
                        (0, s.useEffect)(() => {
                            m();
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (r || c) && (!c || 1 !== t.length) ? (c ? (0, n.jsx)(B, { artists: t, label: i }) : (0, n.jsx)(M, { artists: t, label: i })) : i;
                }),
                z = (0, r.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: r,
                            linkClassName: m,
                            captionClassName: p,
                            captionSize: h,
                            variant: v = 'breakAll',
                            spoilerComponent: g,
                            ...b
                        } = e,
                        C = ((e) => {
                            var t, i, n;
                            let { separator: a, visibleArtistsCount: r, withLink: o, withComposer: l, artistIdWithoutLink: c, withContextMenu: m } = e,
                                p = null != (t = e.artists) ? t : [],
                                x = null == (i = e.withAllArtistsTitle) || i,
                                h = null == (n = e.withCustomTooltip) || n,
                                v = (0, s.useRef)(null),
                                [g, b] = (0, s.useState)(!1),
                                {
                                    settings: { isMobile: C },
                                } = (0, u.g)(),
                                A = ((!C || 1 === p.length) && m) || !m,
                                k = ((e, t) => {
                                    var i, n, a;
                                    let r = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        s = null == (n = null == t ? void 0 : t.withLink) || n,
                                        o = null != (a = null == t ? void 0 : t.separator) ? a : ', ',
                                        l = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(o),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: n } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => n || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: r, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: n, separator: a, isFirst: r } = t;
                                                return {
                                                    primary: _(e, { withLink: n, separator: r ? void 0 : a }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = a ? e.separator : '';
                                                        return _(e, { withLink: n, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: s && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: o, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: l,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: a, visibleArtistsCount: g ? void 0 : r, withComposer: l, withLink: !!A && o, artistIdWithoutLink: c }),
                                T = x ? k.allArtistsTitle : '',
                                N = (0, d.c)((e) => {
                                    (b(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: k.groups,
                                hiddenArtistsCount: k.hiddenArtistsCount,
                                allArtistsTitle: T,
                                withCustomTooltip: h,
                                withContextMenu: m,
                                labelRef: v,
                                handleOnSpoilerClick: N,
                                isTooltipEnabled: !!T && h && !m && !C,
                                title: !T || h || m ? void 0 : T,
                            };
                        })(b),
                        A = (0, o.L)(() =>
                            C.hiddenArtistsCount <= 0
                                ? null
                                : (0, s.isValidElement)(g)
                                  ? g
                                  : (0, n.jsx)(j, { spoilerClassName: r, spoilerArtistsCount: C.hiddenArtistsCount, handleOnSpoilerClick: C.handleOnSpoilerClick }),
                        ),
                        k = (0, n.jsx)(l.m_, {
                            referenceRef: C.labelRef,
                            enabled: C.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: C.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, n.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(x().root, x()['root_variant_'.concat(v)], { [x().root_clamp]: i && i > 0, [x().ellipsis]: !i }, t),
                                title: C.title,
                                children: [
                                    C.groups.map((e) =>
                                        (0, n.jsx)(
                                            y,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: p,
                                                captionSize: h,
                                                allArtistsTitle: C.allArtistsTitle,
                                                withCustomTooltip: C.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return C.withContextMenu ? (0, n.jsx)(W, { labelRef: C.labelRef, artists: C.artists, label: k }) : k;
                });
        },
        56480: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n });
            let n = (0, i(74631).createContext)({ pageAlbumId: void 0 });
        },
        56629: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { _: () => n }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(n || (n = {})));
        },
        59981: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { T: () => n }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(n || (n = {})));
        },
        60924: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var n = i(25839),
                a = i(61493),
                r = i(3392),
                s = i(4254),
                o = i(74672),
                l = i.n(o);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: o, placement: d = 'top', children: u } = e;
                    return (0, n.jsxs)(r.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, n.jsx)(r.ZI, {
                                className: l().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, n.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, n.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, n.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61561: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => r });
            var n = i(27954),
                a = i(44806);
            let r = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: r },
                    experiments: s,
                } = (0, n.g)();
                return (
                    !(null == r ? void 0 : r.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = s.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => b });
            var n = i(25839),
                a = i(82298),
                r = i(88204),
                s = i(74631),
                o = i(44031),
                l = i(61493),
                c = i(71035),
                d = i(23818),
                u = i(10820),
                m = i(86869),
                _ = i(4254),
                p = i(29481),
                x = i(85686),
                h = i(27954),
                v = i(53454),
                g = i.n(v);
            let b = (0, r.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: r } = (0, h.g)(),
                    v = (0, x.Z)(t.url),
                    C = (0, p.N)(),
                    A = (0, s.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, n.jsx)(b, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    k = (0, c.c)((e) => {
                        (r.modal.isOpened && r.modal.close(), C({ to: o.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)(u.Dr, {
                            className: (0, a.$)(g().root, i),
                            onClick: k,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, n.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, n.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, n.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        62661: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => l });
            var n = i(25839),
                a = i(82298),
                r = i(66738),
                s = i(28257),
                o = i.n(s);
            let l = (e) => {
                let { isDragging: t, className: i } = e;
                return (0, n.jsx)(r.I, { variant: 'dragDots', size: 'xxs', className: (0, a.$)(o().root, { [o().root_active]: t }, i), 'aria-hidden': !0 });
            };
        },
        64715: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => O });
            var n = i(25839),
                a = i(82298),
                r = i(88204),
                s = i(74631),
                o = i(39004),
                l = i(8487);
            i(93588);
            var c = i(4071),
                d = i(66738),
                u = i(4254),
                m = i(67379),
                _ = i(44031),
                p = i(87277),
                x = i(59450),
                h = i(84e3),
                v = i(97952),
                g = i(89192),
                b = i(53712),
                C = i(27954),
                A = i(44806),
                k = i(15270),
                T = i(23818),
                N = i(85686);
            let f = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var y = i(27990),
                E = i.n(y);
            let I = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { slam: r } = (0, C.g)(),
                    { contentRef: s } = (0, g.g)(),
                    o = (0, N.Z)(b.Z.mymusicDownloadsTracks.href);
                return (0, n.jsxs)('div', {
                    className: (0, a.$)(E().root, t),
                    children: [
                        i &&
                            (0, n.jsx)(k.L, { withBackwardFallback: '/', className: (0, a.$)(E().navigation, { [E().navigation_desktop]: !s }), withForwardControl: !1 }),
                        (0, n.jsxs)('div', {
                            className: (0, a.$)(E().content, { [E().content_shrink]: !i }),
                            children: [
                                (0, n.jsx)(T._V, { className: E().image, src: f.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, n.jsxs)('div', {
                                    className: E().message,
                                    children: [
                                        (0, n.jsx)(u.DZ, {
                                            className: E().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, n.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, n.jsx)(u.HL, {
                                            className: E().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                r.hasDownloadedTracks &&
                                    (0, n.jsx)(c.$, {
                                        className: E().button,
                                        onClick: o,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(u.HL, {
                                            className: E().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, n.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var j = i(68854),
                S = i.n(j);
            let O = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: r } = (0, o.A)(),
                    T = (0, s.useContext)(C.P),
                    N = null == T ? void 0 : T.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    f = r(N ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, x.st)(),
                        { hash: i } = (0, x.gf)(),
                        { pageId: n } = (0, v.$)(),
                        a = (0, h.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !i || !n) return;
                        let r = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: n,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, p.z5)(t.evgenInstance, r);
                    }, [t, e, i, n, a]);
                })(f);
                let { sendRefreshEvent: y } = (function () {
                        let e = (0, x.st)(),
                            { hash: t } = (0, x.gf)(),
                            { pageId: i } = (0, v.$)(),
                            n = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let a = (0, m.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, p.bv)(e.evgenInstance, a);
                            }, [e, t, i, n]),
                        };
                    })(),
                    E = (0, s.useCallback)(() => {
                        (y(), (window.location.href = b.Z.main.href));
                    }, [y]),
                    { contentRef: j } = (0, g.g)();
                return N
                    ? (0, n.jsx)(I, { className: t, withBackwardControl: i })
                    : (0, n.jsxs)('div', {
                          className: (0, a.$)(S().root, t),
                          children: [
                              i &&
                                  (0, n.jsx)(k.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(S().navigation, { [S().navigation_desktop]: !j }),
                                      withForwardControl: !1,
                                  }),
                              (0, n.jsxs)('div', {
                                  className: (0, a.$)(S().content, { [S().content_shrink]: !i }),
                                  children: [
                                      (0, n.jsx)(d.I, { className: S().icon, variant: 'attention', size: 'xxl' }),
                                      (0, n.jsx)(u.DZ, { className: (0, a.$)(S().title, S().important), variant: 'h3', size: 'xs', children: f }),
                                      (0, n.jsxs)(u.HL, {
                                          className: (0, a.$)(S().text, S().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, n.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, n.jsx)(c.$, {
                                          onClick: E,
                                          className: S().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, n.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, n.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        64813: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        68854: (e) => {
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
        69730: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => T });
            var n = i(25839),
                a = i(82298),
                r = i(88204),
                s = i(74631),
                o = i(71035),
                l = i(11823),
                c = i(79367),
                d = i(47009),
                u = i(52512),
                m = i(29872),
                _ = i(61561),
                p = i(85743),
                x = i(16886),
                h = i(27954),
                v = i(18284),
                g = i(39004),
                b = i(34546),
                C = i(26115),
                A = i(51027),
                k = i.n(A);
            let T = (0, r.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: r,
                        meta: A,
                        beforeBlock: T,
                        controls: N,
                        playButtonCellRender: f,
                        withLightning: y,
                        isPlaying: E,
                        isCurrent: I,
                        togglePlay: j,
                        restartPlay: S,
                        onPlayClick: O,
                        playButtonIconSize: R,
                        skipFreemiumCloseListeningPaywall: L = !1,
                        ...w
                    } = e,
                    { shouldShowBuySubscriptionModal: P, showBuySubscriptionModal: M } = (0, m.q)(),
                    {
                        track: D,
                        fullscreenPlayer: F,
                        settings: { isMobile: U },
                        album: B,
                        albumCPA: { isPlusCPAPlayerBarEnabled: W },
                        paywall: { modal: z },
                    } = (0, h.g)(),
                    { ref: H, intersectionPropertyId: Y } = (0, u.n)(),
                    $ = (0, d.b)(),
                    K = (0, c.P)(),
                    G = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: n } = (0, g.A)();
                        return ((e, t, i) => {
                            var n;
                            let { withLightning: a } = t,
                                r = (0, b.j)(null != (n = e.artists) ? n : []);
                            return e.isAvailable
                                ? [r, e.title, e.version, a && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(r, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: i }, n);
                    })({ withLightning: y, track: r }),
                    V = ((e) => {
                        let { sonataState: t } = (0, h.g)(),
                            i = t.status === x.MT.LOADING_MEDIA_SOURCE || t.status === x.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let n = t.entityMeta.entityId;
                            return i && n === e;
                        }
                        return i;
                    })(r.entityId),
                    X = W(B.id, null == (t = B.meta) ? void 0 : t.isNonMusic),
                    q = r.isAvailable && P && !X,
                    Z = (0, _.N)(),
                    J = r.isAvailable && Z && !X && !L,
                    Q = (0, C.w)({ track: r, callback: j }),
                    ee = (0, o.c)(() => {
                        D.open({ trackId: r.id, albumId: r.albumId });
                    }),
                    et = (0, C.w)({ track: r, callback: ee }),
                    { sendPlaySearchFeedback: ei } = (0, p.z)(),
                    [en, ea] = (0, s.useState)(!1),
                    er = (0, o.c)(() => {
                        if (!K()) {
                            if (q) return void M();
                            if (J) return void z.open();
                            (en || E || (ea(!0), null == ei || ei()), Q(), $(!E), null == O || O(!E));
                        }
                    }),
                    es = (0, o.c)(() => {
                        if (E) return void S();
                        er();
                    }),
                    eo = (0, o.c)((e) => {
                        if (!r.isAvailable && !r.hasModalAccess) {
                            (P && r.isAvailableOnlyForPlus && M(), Z && r.isAvailableOnlyForPlus && z.open());
                            return;
                        }
                        if (q) return void M();
                        let t = !U && (2 === e.detail || (1 === e.detail && r.hasTrackLink && !F.modal.isOpened));
                        return J && !t
                            ? void z.open()
                            : ((0, l.P)(e, k().ripple), U)
                              ? void er()
                              : 2 === e.detail
                                ? void es()
                                : void (1 === e.detail && r.hasTrackLink && !F.modal.isOpened && (et(), J && z.open()));
                    }),
                    el = null == f ? void 0 : f({ onPlayButtonClick: er, isPlaying: E, isCurrent: I, isLoading: V, playButtonIconSize: R });
                return (0, n.jsxs)(v.C, {
                    ref: H,
                    'aria-label': G,
                    'data-intersection-property-id': Y,
                    onClick: eo,
                    className: (0, a.$)(k().root, { [k().root_disabled]: !r.isAvailable, [k().root_current]: I && U }, i),
                    ...w,
                    children: [T, el, A, N],
                });
            });
        },
        71705: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => x });
            var n = i(25839),
                a = i(39004),
                r = i(71035),
                s = i(21468),
                o = i(91149),
                l = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(33660),
                m = i(74631),
                _ = i(31860),
                p = i(93297);
            let x = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: x },
                    } = (0, c.g)(),
                    { formatMessage: h } = (0, a.A)(),
                    { notify: v } = (0, l.l)(),
                    g = (() => {
                        let { notify: e } = (0, l.l)(),
                            [t, i] = (0, m.useState)(!1),
                            { formatMessage: s } = (0, a.A)();
                        return (0, r.c)(async (a) => {
                            let { album: r, withLink: l = !0, withNotification: c = !0 } = a;
                            if (t) return;
                            let m = { ...(0, u.HO)(r), url: r.url, isLiked: !r.isLiked };
                            i(!0);
                            let x = await r.toggleLike();
                            (i(!1),
                                c &&
                                    (x === _.f.OK
                                        ? e((0, n.jsx)(p.T, { withLink: l, album: m }), { containerId: o.u.INFO })
                                        : e((0, n.jsx)(d.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR })));
                        });
                    })(),
                    { pageAlbumId: b } = (0, s.T)();
                return (0, r.c)(async () => {
                    if (e)
                        return x({ pageAlbumId: b, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? g({ album: e })
                              : void v((0, n.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                });
            };
        },
        71996: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var n = i(25839),
                a = i(74631),
                r = i(39004),
                s = i(61493),
                o = i(4071),
                l = i(66738),
                c = i(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: p,
                            className: x,
                            forwardRef: h,
                            style: v,
                            children: g,
                        } = e,
                        { formatMessage: b } = (0, r.A)(),
                        C = b({ id: 'trailer.button-aria-label' });
                    return (0, n.jsx)(o.$, {
                        className: x,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: _,
                        ref: h,
                        icon: (0, n.jsx)(l.I, { variant: 'trailer', size: u, className: p }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, n.jsx)(d, { forwardRef: t, ...e }));
        },
        73182: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => r });
            var n = i(56829),
                a = i(35015);
            let r = (e) => {
                switch (e) {
                    case n._.PODCAST:
                        return a.c.PODCAST;
                    case n._.AUDIOBOOK:
                        return a.c.AUDIOBOOK;
                    case n._.FAIRY_TALE:
                        return a.c.FAIRY_TALE;
                    default:
                        return a.c.ALBUM;
                }
            };
        },
        73544: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => n });
            let n = (e) => ({ uri: e.uri, color: e.color });
        },
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        77174: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => r });
            var n = i(39004),
                a = i(56829);
            let r = (e, t) => {
                let { formatMessage: i } = (0, n.A)();
                if (e)
                    switch (t) {
                        case a._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case a._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case a._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case a._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        77737: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => f });
            var n = i(25839),
                a = i(82298),
                r = i(88204),
                s = i(84059),
                o = i(74631),
                l = i(39004),
                c = i(61493),
                d = i(49656),
                u = i(3392),
                m = i(4254),
                _ = i(56348),
                p = i(85743),
                x = i(27954),
                h = i(19410),
                v = i(12929),
                g = i(32652),
                b = i(97522),
                C = i(40846),
                A = i(61755),
                k = i(87221),
                T = i(12752),
                N = i.n(T);
            let f = (0, r.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: r,
                        albumArtists: T,
                        withExplicitMark: f,
                        withSecondaryColor: y,
                        captionSize: E = 'm',
                        explicitSize: I = 'xxxs',
                        withAllArtistsTitle: j,
                        textClassName: S,
                        artistsClassName: O,
                        ignoreDislikedStyles: R,
                        withCustomTooltip: L = !0,
                        hasLineClamp: w = !0,
                        withSavingQueryParams: P,
                        beforeTitle: M,
                        withArtistLink: D,
                        variant: F,
                        withTrackLink: U,
                        afterTitle: B,
                        withContextMenuArtists: W,
                    } = e,
                    { formatMessage: z } = (0, l.A)(),
                    { sendNavigateSearchFeedback: H } = (0, p.z)(),
                    {
                        settings: { isMobile: Y },
                        slam: $,
                    } = (0, x.g)(),
                    K = (0, A.$)({ withCustomTooltip: L }),
                    G = (0, s.useSearchParams)(),
                    V = (0, C.B)(r, {
                        isMobile: Y,
                        isOfflineModeEnabled: $.isOfflineModeEnabled,
                        albumArtists: T,
                        withTrackLink: U,
                        withArtistLink: D,
                        variant: F,
                        withExplicitMark: f,
                        query: P ? Object.fromEntries(G) : void 0,
                    }),
                    {
                        displayTitle: X,
                        ariaLabel: q,
                        tooltipText: Z,
                        titleAttribute: J,
                        versionTitleAttribute: Q,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, n) => {
                        var a, r;
                        let { canEnableCustomTooltip: s, isMobile: o } = i,
                            l = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, n),
                            c = t.shouldShowRemovedTitle ? l : ''.concat(l, ' ').concat(null != (a = t.version) ? a : ''),
                            d = n({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: l,
                            ariaLabel: ''.concat(d, ' ').concat(null != (r = e.version) ? r : ''),
                            tooltipText: c,
                            isTooltipEnabled: s && !o,
                            titleAttribute: !s && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: s ? void 0 : t.version,
                        };
                    })(r, V, { canEnableCustomTooltip: K, isMobile: Y }, z),
                    et = (0, k.O)({ track: r, onNavigate: H, withSavingQueryParams: P, entityType: v.n.TRACK }),
                    ei = (0, o.useCallback)(
                        (e) =>
                            (0, n.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Z,
                                hoverSettings: h.V,
                                children: (0, n.jsx)(m.HL, {
                                    className: (0, a.$)(N().text, N().title),
                                    type: 'entity',
                                    size: E,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: X,
                                }),
                            }),
                        [E, X, Z, ee],
                    ),
                    en = (0, d.L)(() =>
                        V.shouldShowRemovedTitle
                            ? (0, n.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Z,
                                  hoverSettings: h.V,
                                  children: (0, n.jsx)(m.HL, {
                                      className: (0, a.$)(N().text, N().title),
                                      type: 'entity',
                                      size: E,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: J,
                                      children: X,
                                  }),
                              })
                            : V.link
                              ? (0, n.jsx)(b.N, {
                                    onClick: et,
                                    className: N().albumLink,
                                    href: V.link.href,
                                    'aria-label': q,
                                    title: J,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    ea = (0, o.useMemo)(() => +!!w, [w]);
                return (0, n.jsx)('div', {
                    className: (0, a.$)(N().root, { [N().root_disabled]: !r.isAvailable, [N().root_disliked]: r.isDisliked && !R, [N().root_withSecondaryColor]: y }, t),
                    children: (0, n.jsxs)('div', {
                        className: N().metaContainer,
                        children: [
                            (0, n.jsxs)('div', {
                                className: (0, a.$)(N().titleContainer, { [N().titleContainer_withVersion]: r.version }, i),
                                children: [
                                    (0, n.jsxs)(m.HL, {
                                        className: (0, a.$)(N().text, S),
                                        type: 'entity',
                                        size: E,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            M,
                                            en,
                                            V.version &&
                                                (0, n.jsxs)(m.HL, {
                                                    className: (0, a.$)(N().text, N().version),
                                                    type: 'entity',
                                                    size: E,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Q,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', V.version],
                                                }),
                                        ],
                                    }),
                                    V.explicitMark &&
                                        (0, n.jsx)(g.N, {
                                            containerClassName: N().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: I,
                                            variant: V.explicitMark,
                                            className: N().explicitMark,
                                            trackId: r.id,
                                        }),
                                    B,
                                ],
                            }),
                            V.artists.length > 0 &&
                                (0, n.jsx)(_.i, {
                                    className: (0, a.$)(N().text, { [N().artists]: w }, O, S),
                                    withAllArtistsTitle: j,
                                    linkClassName: (0, a.$)(N().text, N().link),
                                    captionClassName: (0, a.$)(N().text, N().artistCaption),
                                    artists: V.artists,
                                    withLink: V.withArtistLink,
                                    lineClamp: ea,
                                    captionSize: E,
                                    withContextMenu: W,
                                }),
                        ],
                    }),
                });
            });
        },
        81024: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => a });
            var n = i(25895);
            let a = (e) => (0, n.u)('/album/:albumId', { params: { albumId: e } });
        },
        82967: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => g });
            var n = i(25839),
                a = i(82298),
                r = i(88204),
                s = i(74631),
                o = i(61493),
                l = i(54880),
                c = i(50209),
                d = i(27954),
                u = i(6349),
                m = i(62661),
                _ = i(2096),
                p = i(77737),
                x = i(69730),
                h = i(7929),
                v = i.n(h);
            let g = (0, r.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: r,
                        className: h,
                        withDNDBlock: g,
                        isDragging: b,
                        draggingClassName: C,
                        ignoreDislikedStyles: A,
                        withSecondaryColor: k,
                        handleRemove: T,
                        withDislike: N,
                        withTrailer: f = !0,
                        beforeTitle: y,
                        removeButtonAriaLabel: E,
                        hideControls: I,
                    } = e,
                    j = (0, c.D)({ playContextParams: r, entityId: i.entityId }),
                    {
                        settings: { isMobile: S },
                    } = (0, d.g)(),
                    O = (0, l.X)(i.trackSource, { isMobile: S }),
                    R = (0, s.useCallback)(
                        (e) =>
                            (0, n.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: A,
                                radius: 'xs',
                                ...e,
                            }),
                        [A, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, n.jsx)(x.C, {
                    className: (0, a.$)(h, { [v().trackWithDots]: g, [v().important]: g }),
                    track: i,
                    beforeBlock: g ? (0, n.jsx)(m.O, { className: (0, a.$)(v().dots, C), isDragging: b }) : void 0,
                    meta: (0, n.jsx)(p.j, { withArtistLink: O, beforeTitle: y, track: i, ignoreDislikedStyles: A, withSecondaryColor: k }),
                    playButtonCellRender: R,
                    controls: (0, n.jsx)(_.Q, {
                        track: i,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: A,
                        utmLink: null == (t = r.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: k,
                        handleRemove: T,
                        withDislike: N,
                        withTrailer: f,
                        removeButtonAriaLabel: E,
                        hideControls: I,
                    }),
                    ...j,
                    'data-test-id': o.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        85957: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        89514: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
        90780: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var n = i(25839),
                a = i(74631),
                r = i(61493),
                s = i(4254),
                o = i(44408),
                l = i.n(o);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [o, c] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, n.jsx)(
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
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        92870: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        93297: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => o });
            var n = i(25839),
                a = i(88204),
                r = i(3163),
                s = i(73182);
            let o = (0, a.PA)((e) => {
                let { album: t, closeToast: i, withLink: a } = e,
                    o = (0, s.b)(t.type);
                return (0, n.jsx)(r.O, {
                    closeToast: i,
                    entityVariant: o,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: a,
                });
            });
        },
        93510: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        94484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        96634: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { NotFound: () => y }));
            var n = i(25839),
                a = i(82298),
                r = i(88204),
                s = i(8487);
            i(93588);
            var o = i(4071),
                l = i(66738),
                c = i(13833),
                d = i(4254),
                u = i(74631),
                m = i(67379),
                _ = i(44031),
                p = i(87277),
                x = i(59450),
                h = i(84e3),
                v = i(59342),
                g = i(89192),
                b = i(53712),
                C = i(85686),
                A = i(56120),
                k = i(15270),
                T = i(27954),
                N = i(24053),
                f = i.n(N);
            let y = (0, r.PA)((e) => {
                let { className: t, title: i, description: r, iconVariant: N = 'musicLogo', iconClassName: y, iconSize: E } = e,
                    { contentRef: I, setContentScrollRef: j } = (0, g.g)(),
                    S = (0, C.Z)(b.Z.main.href);
                !(function () {
                    let e = (0, x.st)(),
                        { hash: t } = (0, x.gf)(),
                        i = (0, h.U)(),
                        n = (0, u.useRef)(void 0);
                    (0, u.useEffect)(() => {
                        if (!e || !t) return;
                        n.current = (0, v.A)();
                        let a = (0, m.F)({
                            params: {
                                hash: t,
                                pageId: _.AppScreen.PageNotFoundScreen,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                                viewUuid: n.current,
                            },
                            logger: i,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            a && (0, p.w5)(e.evgenInstance, a),
                            () => {
                                let a = (0, m.F)({
                                    params: {
                                        hash: t,
                                        pageId: _.AppScreen.PageNotFoundScreen,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                        viewUuid: n.current,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                a && (0, p.XB)(e.evgenInstance, a);
                            }
                        );
                    }, [e, t, i]);
                })();
                let { handleNavigateToMain: O } = (function (e) {
                    let t = (0, x.st)(),
                        { hash: i } = (0, x.gf)(),
                        n = (0, h.U)();
                    return {
                        handleNavigateToMain: (0, u.useCallback)(() => {
                            if (!t || !i) return;
                            let a = (0, m.F)({
                                params: {
                                    hash: i,
                                    pageId: _.AppScreen.PageNotFoundScreen,
                                    pageStyle: _.PageStyles.Fullscreen,
                                    pagePlacement: _.PagePlacements.Fullscreen,
                                    mainObjectType: _.DomainObjectType.NonApplicable,
                                    mainObjectId: _.DomainObjectType.NonApplicable,
                                    from: _.AppScreen.PageNotFoundScreen,
                                    to: _.AppScreen.MainScreen,
                                    entityType: _.EntityTypes.Error,
                                    entityId: _.EntityTypes.Error,
                                },
                                logger: n,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            (a && (0, p.Mu)(t.evgenInstance, a), e());
                        }, [t, i, n, e]),
                    };
                })(S);
                return (
                    (0, A.N)(!0),
                    !(function () {
                        let { location: e } = (0, T.g)();
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
                    (0, n.jsxs)(c.N, {
                        className: (0, a.$)(f().root, { [f().root_desktop]: !I }, t),
                        containerClassName: f().container,
                        ref: j,
                        children: [
                            (0, n.jsx)(k.L, { withBackwardFallback: '/', className: f().navigation, withForwardControl: !1 }),
                            (0, n.jsxs)('div', {
                                className: f().content,
                                children: [
                                    (0, n.jsx)(l.I, { className: (0, a.$)(f().icon, y), variant: N, size: E }),
                                    (0, n.jsx)(d.DZ, {
                                        className: (0, a.$)(f().title, f().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: i || (0, n.jsx)(s.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, n.jsx)(d.HL, {
                                        className: (0, a.$)(f().text, f().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: r || (0, n.jsx)(s.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, n.jsx)(o.$, {
                                        onClick: O,
                                        className: f().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(d.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, n.jsx)(s.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        97762: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { p: () => n }),
                (function (e) {
                    ((e.WEB_MAIN = 'web_main'),
                        (e.MAIN = 'main'),
                        (e.WEB_COLLECTION = 'web_collection'),
                        (e.NON_MUSIC = 'non_music'),
                        (e.KIDS = 'kids'),
                        (e.MAIN_NOLOGIN = 'main_nologin'),
                        (e.SEARCH = 'Search'),
                        (e.ARTIST = 'artist_web'),
                        (e.CONCERTS = 'concerts'),
                        (e.CONCERT_PAGE = 'concert_page'));
                })(n || (n = {})));
        },
        97805: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => x });
            var n = i(25839),
                a = i(3718),
                r = i(82298),
                s = i(74631),
                o = i(39004),
                l = i(23976),
                c = i(47399),
                d = i.n(c);
            let u = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: a } = (0, o.A)(),
                    c = (0, s.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                return (0, n.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, r.$)(d().root, i),
                    children: [
                        (0, n.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, n.jsx)('div', { className: d().coverContainer, children: (0, n.jsx)(l.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, n.jsx)('div', { className: d().textContainer, children: (0, n.jsx)(l.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, n.jsx)(l.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var m = i(64813),
                _ = i.n(m);
            let p = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: a } = (0, o.A)(),
                        c = (0, s.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                    return (0, n.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, r.$)(_().root, i),
                        children: [
                            (0, n.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, n.jsx)(l.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, n.jsx)('div', { className: _().textContainer, children: (0, n.jsx)(l.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, n.jsx)(l.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                x = (e) => {
                    let { isActive: t, variant: i, className: r } = e;
                    switch (i) {
                        case a.X.PLAYLIST:
                            return (0, n.jsx)(p, { isActive: t, className: r });
                        case a.X.ALBUM:
                            return (0, n.jsx)(u, { isActive: t, className: r });
                    }
                };
        },
        98436: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { _: () => n }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
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
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(n || (n = {})));
        },
        99401: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => f });
            var n = i(25839),
                a = i(82298),
                r = i(88204),
                s = i(39004),
                o = i(93588),
                l = i(43354),
                c = (function (e) {
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
            let d = (e, t, i) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: i, tld: n, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, n, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, n, i) },
                    };
                };
            var m = i(10959),
                _ = i(89514);
            let p = (e) => e(new Date(), (0, _.m)());
            var x = i(96433),
                h = i(27954),
                v = i(400),
                g = i.n(v),
                b = i(61493),
                C = i(4254),
                A = i(97522);
            let k = (e) => {
                    let { className: t, data: i } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, a.$)(g().copyrights, t),
                        'data-test-id': b.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: g().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, n.jsx)(A.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, a.$)(g().copyrightLink, g().yandexMusicLink),
                                        'data-test-id': b.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(A.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: g().copyrightLink,
                                'data-test-id': b.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, n.jsxs)('div', {
                        className: g().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: g().list,
                                'data-test-id': b.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: a } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: g().item,
                                            children: (0, n.jsx)(A.N, { target: '_blank', href: a, className: g().link, 'data-test-id': b.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: g().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': b.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, a.$)(g().root, g().important, t),
                        'data-test-id': b.S7.FOOTER,
                        children: [(0, n.jsx)(T, { links: i.links, disclaimer: i.disclaimer }), (0, n.jsx)(k, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, h.g)(),
                    { formatDate: a, formatMessage: r } = (0, s.A)(),
                    { language: o } = (0, x.h)(),
                    l = u({ formatMessage: r, language: o, tld: i.tld, year: p(a) });
                return (0, n.jsx)(k, { className: t, data: l });
            });
            let f = (0, r.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: r, location: _, user: v } = (0, h.g)(),
                    { formatDate: b, formatMessage: C } = (0, s.A)(),
                    { isEnabled: A } = null != (t = (0, l.P)()) ? t : {},
                    { language: k } = (0, x.h)(),
                    T = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: n, language: a, tld: r, userRegion: s, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: n, language: a, userRegion: r } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, n, a) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, n, a) },
                                    l = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, n, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, n, a) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, n, a) },
                                    _ = [s, l, u];
                                return (i && 'ru' === r && _.push(o), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: n, language: a, tld: r, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: i, language: a, tld: r, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: C,
                        isWebApplication: o.$3,
                        tld: _.tld,
                        language: k,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: p(b),
                    });
                return (0, n.jsx)(N, { className: (0, a.$)({ [g().root_withOffsetForDeeplink]: A }, i), data: T });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7055, 3349, 5128, 740, 7339, 6287, 3472, 2121, 2767, 3112, 5275, 6706, 4771, 1311, 546, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 1817, 6215,
                3257, 2917, 8421, 2038, 4163, 3246, 7848, 3482, 6680, 2247, 7856, 8836, 820, 4434, 8649, 862, 1808, 9333, 9616, 4041, 4475, 5056, 7358,
            ],
            () => e((e.s = 40311)),
        ),
            (_N_E = e.O()));
    },
]);
