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
            var a = i(25839),
                n = i(82298),
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
                let { className: t, variant: i = 'text', onClick: n, iconClassName: r, iconSize: l, size: d = 's', ariaLabel: m } = e,
                    { formatMessage: _ } = (0, o.A)(),
                    p = null != m ? m : _({ id: 'play-queue.delete-from-queue' }),
                    h = (0, s.useCallback)(
                        (e) => {
                            (null == n || n(), e.stopPropagation());
                        },
                        [n],
                    );
                return (0, a.jsx)(x.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: d,
                    radius: 'round',
                    'aria-label': p,
                    onClick: h,
                    icon: (0, a.jsx)(u.I, { size: l, className: r, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var v = i(79367),
                g = i(34159),
                C = i(85743),
                A = i(27954),
                N = i(64720),
                T = i(71996),
                b = i(6304),
                k = i(65165),
                y = i(38097),
                f = i(91907),
                E = i(3407),
                j = i(34826),
                S = i.n(j),
                I = i(82684),
                O = i(85957),
                L = i.n(O);
            let R = (0, r.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, o.A)();
                    return t.isDownloaded
                        ? (0, a.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, a.jsx)(I.A, { value: t.downloadingProgress, size: 16, className: L().downloadingProgress, progressBarClassName: L().progress })
                          : null;
                }),
                w = (0, r.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: r,
                            withLightning: x,
                            ignoreDislikedStyles: j,
                            onLikeClick: I,
                            utmLink: O,
                            withSecondaryColor: L,
                            handleRemove: w,
                            withTrailer: P = !0,
                            likeIconSize: M = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: F,
                        } = e,
                        { user: U, trailer: W } = (0, A.g)(),
                        { formatMessage: B } = (0, o.A)(),
                        { sendLikeSearchFeedback: z } = (0, C.z)(),
                        [H, Y] = (0, s.useState)(!1),
                        [$, K] = (0, s.useState)(!1),
                        G = (0, v.P)(),
                        V = (0, p.K)(r),
                        {
                            duration: X,
                            lightning: q,
                            ugc: Z,
                        } = ((e, t, i) => {
                            var a;
                            let { withLightning: n, isUGC: r } = t,
                                s = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / y.k7);
                                              return (0, f.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== s ? { text: s, ariaLabel: (0, k.j)(Math.round((null != (a = e.durationMs) ? a : 0) / 1e3), i) } : null,
                                lightning: n ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: r ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(r, { withLightning: x, isUGC: r.isUGC }, B),
                        J = (0, g.F)(),
                        Q = U.hasPlus,
                        ee = !r.isRemoved && r.isAvailable && !F,
                        et = (0, d.c)(async () => {
                            (H || r.isLiked || (Y(!0), null == z || z()), await V(), null == I || I(r.isLiked));
                        }),
                        ei = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        ea = (0, d.c)((e) => {
                            if ((e.stopPropagation(), G())) return void e.preventDefault();
                            (W.openTrackTrailer(r.id), J(l.DomainObjectType.Track, r.id));
                        }),
                        en = (0, s.useMemo)(() => {
                            if (ee)
                                return (0, a.jsx)('div', {
                                    onClick: ei,
                                    children: (0, a.jsx)(E._, {
                                        track: r,
                                        open: $,
                                        onOpenChange: K,
                                        placement: 'bottom',
                                        icon: (0, a.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: O,
                                        className: (0, n.$)(S().contextMenu, { [S().contextMenu_visible]: $ }),
                                        handleRemove: w,
                                        withTrailer: P,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, w, $, ee, P, r, O]);
                    return (0, a.jsxs)('div', {
                        className: (0, n.$)(S().root, S().controls, i, {
                            [S().controls_dislikedControls]: r.isDisliked,
                            [S().controls_dislikedColors]: r.isDisliked && !j,
                            [S().controls_disabled]: !r.isAvailable,
                            [S().root_withSecondaryColor]: L,
                        }),
                        children: [
                            q && (0, a.jsx)(u.I, { 'aria-label': q.label, size: 'xxs', className: S().lightning, variant: 'lightning' }),
                            Z &&
                                (0, a.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, a.jsx)(u.I, {
                                            'aria-label': Z.label,
                                            size: 'xxs',
                                            className: S().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, a.jsx)(m.ZI, { children: Z.label }),
                                    ],
                                }),
                            Q && (0, a.jsx)('div', { className: (0, n.$)(S().item, S().downloadIcon), children: (0, a.jsx)(R, { track: r }) }),
                            w && !F && (0, a.jsx)(h, { size: 'xs', iconSize: 'xxs', className: (0, n.$)(S().item, S().removeButton), onClick: w, ariaLabel: D }),
                            ee &&
                                (0, a.jsx)(b.WithOffline, {
                                    fallback: (0, a.jsx)(N.c, {
                                        size: 'xs',
                                        iconSize: M,
                                        className: (0, n.$)(S().item, S().likeIcon),
                                        isLiked: r.isLiked,
                                        onClick: et,
                                        disabled: !U.isAuthorized,
                                    }),
                                }),
                            (null == (t = r.trailer) ? void 0 : t.isAvailable) &&
                                r.isAvailable &&
                                (0, a.jsx)(b.WithOffline, {
                                    fallback: (0, a.jsx)(T.k, {
                                        className: (0, n.$)(S().item, S().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ea,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, n.$)(S().item, S().contextMenuWrapper),
                                children: [
                                    null !== X &&
                                        (0, a.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, n.$)(S().duration, { [S().duration_hidden]: $ && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': X.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: X.text }),
                                        }),
                                    en,
                                ],
                            }),
                        ],
                    });
                });
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
            var a = i(25839),
                n = i(74631),
                r = i(82064);
            let s = (e) => {
                let { pageId: t, pageEntityId: i, displayReasonId: s, pageStyle: o, pagePlacement: l, children: c } = e,
                    d = (0, n.useMemo)(() => ({ pageId: t, pageEntityId: i, displayReasonId: s, pageStyle: o, pagePlacement: l }), [t, i, s, o, l]);
                return (0, a.jsx)(r.r.Provider, { value: d, children: c });
            };
        },
        10959: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => n });
            var a = i(44806);
            let n = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: n, userRegion: r } = e;
                return 'ru' === r && t(a.z.WebNextFooterDisclaimer, 'on') ? i() : n();
            };
        },
        19410: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => a });
            let a = { delay: { open: 1e3, close: 0 } };
        },
        21468: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => r });
            var a = i(74631),
                n = i(56480);
            function r() {
                return (0, a.useContext)(n.H);
            }
        },
        22413: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => r, TF: () => o, hZ: () => s });
            var a = function () {
                return (a =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, a = arguments.length; i < a; i++)
                            for (var n in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e;
                    }).apply(this, arguments);
            };
            function n(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function r(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], a = 0; a < i.length; a++) {
                        var n = i[a].split('='),
                            r = n.slice(1).join('=');
                        '"' === r[0] && (r = r.slice(1, -1));
                        try {
                            t[decodeURIComponent(n[0])] = r.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function s(e, t, i) {
                var r;
                document.cookie =
                    ((r = a({ path: '/' }, i)),
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
                                n('Expires', e.expires ? e.expires.toUTCString() : '') +
                                n('Domain', e.domain) +
                                n('Path', e.path) +
                                n('Secure', e.secure) +
                                n('SameSite', e.sameSite)
                            );
                        })(r));
            }
            function o(e, t) {
                s(e, '', a(a({}, t), { expires: -1 }));
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
            var a = i(25839);
            i(93588);
            var n = i(400),
                r = i.n(n);
            let s = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: r().empty });
            };
        },
        26115: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => r });
            var a = i(40207),
                n = i(12929);
            let r = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: r } = e;
                return (0, a.l)({ entity: t, entityType: n.n.TRACK, callback: i, onReject: r, preventDefaultWhenSafe: !1 });
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
            var a = i(74631);
            i(93588);
            var n = i(84059);
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
            var a = i(25839),
                n = i(82298),
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
                let { className: t, getDescriptionTexts: i, trackId: r, containerClassName: _, variant: x, iconVariant: iconOverride, size: h = 'xxxs', ...v } = e,
                    { formatMessage: g } = (0, o.A)(),
                    {
                        settings: { isMobile: C },
                    } = (0, u.g)(),
                    [A, N] = (0, s.useState)(null);
                (0, s.useEffect)(() => {
                    i && i().then(N);
                }, [i, r]);
                let {
                    iconVariant: T,
                    descriptionText: b,
                    isTooltipEnabled: k,
                    ariaLabel: y,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: a, isMobile: n } = e,
                        r = (null == a ? void 0 : a.join('\n')) || '';
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
                        isTooltipEnabled: !!(null == a ? void 0 : a.length) && !n,
                        ariaLabel: r.length > 0 ? r : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: x, descriptionTexts: A, isMobile: C }, g);
                return (0, a.jsx)(m.k, {
                    description: b,
                    placement: 'bottom-start',
                    enabled: k,
                    children: (0, a.jsx)('span', {
                        className: _,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        x === d.JU.SUBSTITUTED ? (0, a.jsxs)('svg', {
                            className: (0, n.$)(p().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': y,
                            style: { width: 'var(--ym-icon-size-'.concat(h, ')'), height: 'var(--ym-icon-size-'.concat(h, ')') },
                            ...v,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, a.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, a.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, a.jsx)(c.I, {
                            className: (0, n.$)(p().explicitMark, t),
                            'aria-label': y,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : T,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? h : h,
                            style: iconOverride ? { width: `var(--ym-icon-size-${h})`, height: `var(--ym-icon-size-${h})` } : undefined,
                            ...v,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
                    }),
                });
            });
        },
        34546: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            let a = (e) => e.map((e) => e.name).join(', ');
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
            var a = i(25839),
                n = i(88204),
                r = i(61493),
                s = i(66738),
                o = i(10820),
                l = i(77174),
                c = i(27954);
            let d = (0, n.PA)((e) => {
                let { isLiked: t, onClick: i, className: n, iconClassName: d, albumType: u, disabled: m } = e,
                    { user: _ } = (0, c.g)(),
                    p = t ? 'liked' : 'like',
                    x = (0, l.$)(t, u);
                return (0, a.jsx)(o.Dr, {
                    className: n,
                    onClick: i,
                    icon: (0, a.jsx)(s.I, { className: d, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !_.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: x,
                });
            });
        },
        39528: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => n });
            var a = i(25895);
            let n = (e) => (0, a.u)('/artist/:artistId', { params: { artistId: e } });
        },
        43354: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n, P: () => r });
            var a = i(74631);
            let n = (0, a.createContext)(null),
                r = () => (0, a.useContext)(n);
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
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        56348: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => z });
            var a = i(25839),
                n = i(82298),
                r = i(88204),
                s = i(74631),
                o = i(49656),
                l = i(3392),
                c = i(19410),
                d = i(71035),
                u = i(27954),
                m = i(39528);
            let _ = (e, t) => {
                let { withLink: i, separator: a } = t,
                    n = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: a, link: n };
            };
            var p = i(94484),
                x = i.n(p),
                h = i(61493),
                v = i(4254),
                g = i(97522),
                C = i(39004),
                A = i(44031),
                N = i(29481),
                T = i(85686),
                b = i(85743),
                k = i(40207);
            let y = (0, r.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: n, captionSize: r = 'm', allArtistsTitle: s, withCustomTooltip: o, hoverSettings: c } = e,
                        {
                            name: m,
                            link: _,
                            title: p,
                            ariaLabel: x,
                            tooltipText: y,
                            isTooltipEnabled: f,
                            handleNavigate: E,
                        } = ((e) => {
                            var t, i;
                            let { item: a, allArtistsTitle: n, withCustomTooltip: r } = e,
                                { formatMessage: s } = (0, C.A)(),
                                o = ((e, t) => {
                                    let { item: i, allArtistsTitle: a, withCustomTooltip: n } = e,
                                        r = a || i.name;
                                    return {
                                        ...i,
                                        title: n ? void 0 : r,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: r,
                                        isTooltipEnabled: !a && n,
                                    };
                                })({ item: a, allArtistsTitle: n, withCustomTooltip: r }, s),
                                {
                                    track: l,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                m = (0, T.Z)(null != (i = null == (t = o.link) ? void 0 : t.href) ? i : o.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, b.z)(),
                                p = (0, N.N)(),
                                x = (0, d.c)((e) => {
                                    (c && l.isOpened && l.close(), m(e));
                                }),
                                h = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: a, fullscreenPlayer: n, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: s } = a;
                                    return (0, k.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), s.isOpened && (a.reset(), s.close()), n.modal.isOpened && n.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: o.artist, callback: x }),
                                v = (0, d.c)((e) => {
                                    (p({ to: A.AppScreen.ArtistScreen }), null == _ || _(), h(e));
                                });
                            return { ...o, handleNavigate: v };
                        })({ item: t, allArtistsTitle: s, withCustomTooltip: o });
                    return _
                        ? (0, a.jsx)(g.N, {
                              ..._,
                              'aria-label': x,
                              className: i,
                              onClick: E,
                              title: p,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, a.jsx)(l.m_, {
                                  enabled: f,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: y,
                                  hoverSettings: c,
                                  children: (0, a.jsx)(v.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: n, children: m }),
                              }),
                          })
                        : (0, a.jsx)(l.m_, {
                              enabled: f,
                              offsetOptions: 4,
                              placement: 'top',
                              text: y,
                              hoverSettings: c,
                              children: (0, a.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: n,
                                  title: p,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                f = (e) => {
                    let { group: t, linkClassName: i, captionClassName: n, captionSize: r, allArtistsTitle: o, withCustomTooltip: l, hoverSettings: c } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, a.jsx)(y, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: n,
                                captionSize: r,
                                allArtistsTitle: o,
                                withCustomTooltip: l,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, a.jsxs)(
                                    s.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, a.jsx)(y, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: n,
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
                j = i(9079);
            let S = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: r } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        ' ',
                        (0, a.jsx)(j.N, {
                            role: 'button',
                            href: '',
                            className: (0, n.$)(x().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, a.jsx)(E.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var I = i(28631),
                O = i(33049),
                L = i(61912),
                R = i(36286),
                w = i.n(R);
            let P = (0, r.PA)((e) => {
                    let { label: t, artists: i, forwardRef: n } = e;
                    return (0, a.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, O.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, a.jsx)('div', { ref: n, children: t }),
                            (0, a.jsx)(l.ZI, { className: w().tooltipContent, children: i.map((e) => (0, a.jsx)(L.V, { artist: e, className: w().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, s.forwardRef)((e, t) => (0, a.jsx)(P, { forwardRef: t, ...e }));
            var D = i(10820),
                F = i(93510),
                U = i.n(F);
            let W = (0, r.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: r } = (0, C.A)();
                    return (0, a.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, n.$)(U().root, U().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, a.jsx)(L.V, { artist: e }, e.id)),
                    });
                }),
                B = (0, r.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: n } = e,
                        [r, l] = (0, s.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let e = n.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, o.L)(() =>
                            (0, I.A)(() => {
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
                        return (r || c) && (!c || 1 !== t.length) ? (c ? (0, a.jsx)(W, { artists: t, label: i }) : (0, a.jsx)(M, { artists: t, label: i })) : i;
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
                            ...C
                        } = e,
                        A = ((e) => {
                            var t, i, a;
                            let { separator: n, visibleArtistsCount: r, withLink: o, withComposer: l, artistIdWithoutLink: c, withContextMenu: m } = e,
                                p = null != (t = e.artists) ? t : [],
                                x = null == (i = e.withAllArtistsTitle) || i,
                                h = null == (a = e.withCustomTooltip) || a,
                                v = (0, s.useRef)(null),
                                [g, C] = (0, s.useState)(!1),
                                {
                                    settings: { isMobile: A },
                                } = (0, u.g)(),
                                N = ((!A || 1 === p.length) && m) || !m,
                                T = ((e, t) => {
                                    var i, a, n;
                                    let r = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        s = null == (a = null == t ? void 0 : t.withLink) || a,
                                        o = null != (n = null == t ? void 0 : t.separator) ? n : ', ',
                                        l = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(o),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: a } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => a || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: r, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: a, separator: n, isFirst: r } = t;
                                                return {
                                                    primary: _(e, { withLink: a, separator: r ? void 0 : n }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = n ? e.separator : '';
                                                        return _(e, { withLink: a, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: s && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: o, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: l,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: n, visibleArtistsCount: g ? void 0 : r, withComposer: l, withLink: !!N && o, artistIdWithoutLink: c }),
                                b = x ? T.allArtistsTitle : '',
                                k = (0, d.c)((e) => {
                                    (C(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: T.groups,
                                hiddenArtistsCount: T.hiddenArtistsCount,
                                allArtistsTitle: b,
                                withCustomTooltip: h,
                                withContextMenu: m,
                                labelRef: v,
                                handleOnSpoilerClick: k,
                                isTooltipEnabled: !!b && h && !m && !A,
                                title: !b || h || m ? void 0 : b,
                            };
                        })(C),
                        N = (0, o.L)(() =>
                            A.hiddenArtistsCount <= 0
                                ? null
                                : (0, s.isValidElement)(g)
                                  ? g
                                  : (0, a.jsx)(S, { spoilerClassName: r, spoilerArtistsCount: A.hiddenArtistsCount, handleOnSpoilerClick: A.handleOnSpoilerClick }),
                        ),
                        T = (0, a.jsx)(l.m_, {
                            referenceRef: A.labelRef,
                            enabled: A.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: A.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, a.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, n.$)(x().root, x()['root_variant_'.concat(v)], { [x().root_clamp]: i && i > 0, [x().ellipsis]: !i }, t),
                                title: A.title,
                                children: [
                                    A.groups.map((e) =>
                                        (0, a.jsx)(
                                            f,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: p,
                                                captionSize: h,
                                                allArtistsTitle: A.allArtistsTitle,
                                                withCustomTooltip: A.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    N,
                                ],
                            }),
                        });
                    return A.withContextMenu ? (0, a.jsx)(B, { labelRef: A.labelRef, artists: A.artists, label: T }) : T;
                });
        },
        56480: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            let a = (0, i(74631).createContext)({ pageAlbumId: void 0 });
        },
        56629: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { _: () => a }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(a || (a = {})));
        },
        59981: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { T: () => a }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(a || (a = {})));
        },
        60924: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var a = i(25839),
                n = i(61493),
                r = i(3392),
                s = i(4254),
                o = i(74672),
                l = i.n(o);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: o, placement: d = 'top', children: u } = e;
                    return (0, a.jsxs)(r.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, a.jsx)(r.ZI, {
                                className: l().root,
                                'data-test-id': n.S7.TOOLTIP_WITH_TITLE,
                                children: (0, a.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, a.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, a.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
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
            var a = i(27954),
                n = i(44806);
            let r = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: r },
                    experiments: s,
                } = (0, a.g)();
                return (
                    !(null == r ? void 0 : r.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = s.getExperiment(n.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => C });
            var a = i(25839),
                n = i(82298),
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
            let C = (0, r.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: r } = (0, h.g)(),
                    v = (0, x.Z)(t.url),
                    A = (0, p.N)(),
                    N = (0, s.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, a.jsx)(C, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    T = (0, c.c)((e) => {
                        (r.modal.isOpened && r.modal.close(), A({ to: o.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(u.Dr, {
                            className: (0, n.$)(g().root, i),
                            onClick: T,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, a.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, a.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, a.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        N,
                    ],
                });
            });
        },
        62661: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => l });
            var a = i(25839),
                n = i(82298),
                r = i(66738),
                s = i(28257),
                o = i.n(s);
            let l = (e) => {
                let { isDragging: t, className: i } = e;
                return (0, a.jsx)(r.I, { variant: 'dragDots', size: 'xxs', className: (0, n.$)(o().root, { [o().root_active]: t }, i), 'aria-hidden': !0 });
            };
        },
        64715: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => O });
            var a = i(25839),
                n = i(82298),
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
                C = i(53712),
                A = i(27954),
                N = i(44806),
                T = i(15270),
                b = i(23818),
                k = i(85686);
            let y = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var f = i(27990),
                E = i.n(f);
            let j = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { slam: r } = (0, A.g)(),
                    { contentRef: s } = (0, g.g)(),
                    o = (0, k.Z)(C.Z.mymusicDownloadsTracks.href);
                return (0, a.jsxs)('div', {
                    className: (0, n.$)(E().root, t),
                    children: [
                        i &&
                            (0, a.jsx)(T.L, { withBackwardFallback: '/', className: (0, n.$)(E().navigation, { [E().navigation_desktop]: !s }), withForwardControl: !1 }),
                        (0, a.jsxs)('div', {
                            className: (0, n.$)(E().content, { [E().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(b._V, { className: E().image, src: y.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, a.jsxs)('div', {
                                    className: E().message,
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            className: E().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            className: E().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                r.hasDownloadedTracks &&
                                    (0, a.jsx)(c.$, {
                                        className: E().button,
                                        onClick: o,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(u.HL, {
                                            className: E().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var S = i(68854),
                I = i.n(S);
            let O = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: r } = (0, o.A)(),
                    b = (0, s.useContext)(A.P),
                    k = null == b ? void 0 : b.experiments.checkExperiment(N.z.WebNextUnstableMusicScreen, 'on'),
                    y = r(k ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, x.st)(),
                        { hash: i } = (0, x.gf)(),
                        { pageId: a } = (0, v.$)(),
                        n = (0, h.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !i || !a) return;
                        let r = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: a,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: n,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, p.z5)(t.evgenInstance, r);
                    }, [t, e, i, a, n]);
                })(y);
                let { sendRefreshEvent: f } = (function () {
                        let e = (0, x.st)(),
                            { hash: t } = (0, x.gf)(),
                            { pageId: i } = (0, v.$)(),
                            a = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let n = (0, m.F)({
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
                                    logger: a,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                n && (0, p.bv)(e.evgenInstance, n);
                            }, [e, t, i, a]),
                        };
                    })(),
                    E = (0, s.useCallback)(() => {
                        (f(), (window.location.href = C.Z.main.href));
                    }, [f]),
                    { contentRef: S } = (0, g.g)();
                return k
                    ? (0, a.jsx)(j, { className: t, withBackwardControl: i })
                    : (0, a.jsxs)('div', {
                          className: (0, n.$)(I().root, t),
                          children: [
                              i &&
                                  (0, a.jsx)(T.L, {
                                      withBackwardFallback: '/',
                                      className: (0, n.$)(I().navigation, { [I().navigation_desktop]: !S }),
                                      withForwardControl: !1,
                                  }),
                              (0, a.jsxs)('div', {
                                  className: (0, n.$)(I().content, { [I().content_shrink]: !i }),
                                  children: [
                                      (0, a.jsx)(d.I, { className: I().icon, variant: 'attention', size: 'xxl' }),
                                      (0, a.jsx)(u.DZ, { className: (0, n.$)(I().title, I().important), variant: 'h3', size: 'xs', children: y }),
                                      (0, a.jsxs)(u.HL, {
                                          className: (0, n.$)(I().text, I().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, a.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, a.jsx)(c.$, {
                                          onClick: E,
                                          className: I().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, a.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, a.jsx)(l.A, { id: 'page-error.restart-app-button' })],
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
            i.d(t, { C: () => b });
            var a = i(25839),
                n = i(82298),
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
                C = i(34546),
                A = i(26115),
                N = i(51027),
                T = i.n(N);
            let b = (0, r.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: r,
                        meta: N,
                        beforeBlock: b,
                        controls: k,
                        playButtonCellRender: y,
                        withLightning: f,
                        isPlaying: E,
                        isCurrent: j,
                        togglePlay: S,
                        restartPlay: I,
                        onPlayClick: O,
                        playButtonIconSize: L,
                        skipFreemiumCloseListeningPaywall: R = !1,
                        ...w
                    } = e,
                    { shouldShowBuySubscriptionModal: P, showBuySubscriptionModal: M } = (0, m.q)(),
                    {
                        track: D,
                        fullscreenPlayer: F,
                        settings: { isMobile: U },
                        album: W,
                        albumCPA: { isPlusCPAPlayerBarEnabled: B },
                        paywall: { modal: z },
                    } = (0, h.g)(),
                    { ref: H, intersectionPropertyId: Y } = (0, u.n)(),
                    $ = (0, d.b)(),
                    K = (0, c.P)(),
                    G = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: a } = (0, g.A)();
                        return ((e, t, i) => {
                            var a;
                            let { withLightning: n } = t,
                                r = (0, C.j)(null != (a = e.artists) ? a : []);
                            return e.isAvailable
                                ? [r, e.title, e.version, n && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(r, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: i }, a);
                    })({ withLightning: f, track: r }),
                    V = ((e) => {
                        let { sonataState: t } = (0, h.g)(),
                            i = t.status === x.MT.LOADING_MEDIA_SOURCE || t.status === x.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let a = t.entityMeta.entityId;
                            return i && a === e;
                        }
                        return i;
                    })(r.entityId),
                    X = B(W.id, null == (t = W.meta) ? void 0 : t.isNonMusic),
                    q = r.isAvailable && P && !X,
                    Z = (0, _.N)(),
                    J = r.isAvailable && Z && !X && !R,
                    Q = (0, A.w)({ track: r, callback: S }),
                    ee = (0, o.c)(() => {
                        D.open({ trackId: r.id, albumId: r.albumId });
                    }),
                    et = (0, A.w)({ track: r, callback: ee }),
                    { sendPlaySearchFeedback: ei } = (0, p.z)(),
                    [ea, en] = (0, s.useState)(!1),
                    er = (0, o.c)(() => {
                        if (!K()) {
                            if (q) return void M();
                            if (J) return void z.open();
                            (ea || E || (en(!0), null == ei || ei()), Q(), $(!E), null == O || O(!E));
                        }
                    }),
                    es = (0, o.c)(() => {
                        if (E) return void I();
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
                            : ((0, l.P)(e, T().ripple), U)
                              ? void er()
                              : 2 === e.detail
                                ? void es()
                                : void (1 === e.detail && r.hasTrackLink && !F.modal.isOpened && (et(), J && z.open()));
                    }),
                    el = null == y ? void 0 : y({ onPlayButtonClick: er, isPlaying: E, isCurrent: j, isLoading: V, playButtonIconSize: L });
                return (0, a.jsxs)(v.C, {
                    ref: H,
                    'aria-label': G,
                    // for PulseSync WebHost: BEGIN publish the track ID on the native track DOM element for addons
                    'data-pulsesync-track-id': r.id,
                    // for PulseSync WebHost: END publish the track ID on the native track DOM element for addons
                    'data-intersection-property-id': Y,
                    onClick: eo,
                    className: (0, n.$)(T().root, { [T().root_disabled]: !r.isAvailable, [T().root_current]: j && U }, i),
                    ...w,
                    children: [b, el, N, k],
                });
            });
        },
        71705: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => x });
            var a = i(25839),
                n = i(39004),
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
                    { formatMessage: h } = (0, n.A)(),
                    { notify: v } = (0, l.l)(),
                    g = (() => {
                        let { notify: e } = (0, l.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [i, s] = (0, m.useState)(!1),
                            { formatMessage: x } = (0, n.A)();
                        return (0, r.c)(async (n) => {
                            let { album: r, withLink: l = !0, withNotification: c = !0 } = n;
                            if (i) return;
                            let m = { ...(0, u.HO)(r), url: r.url, isLiked: !r.isLiked };
                            s(!0);
                            let h = await r.toggleLike();
                            if ((s(!1), !c)) return;
                            let v = t.modal.isOpened;
                            h === _.f.OK
                                ? e((0, a.jsx)(p.T, { withLink: l, album: m }), { containerId: v ? o.u.FULLSCREEN_INFO : o.u.INFO })
                                : e((0, a.jsx)(d.h, { error: x({ id: 'error-messages.error-during-action' }) }), { containerId: v ? o.u.FULLSCREEN_ERROR : o.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: C } = (0, s.T)();
                return (0, r.c)(async () => {
                    if (e)
                        return x({ pageAlbumId: C, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? g({ album: e })
                              : void v((0, a.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                });
            };
        },
        71996: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var a = i(25839),
                n = i(74631),
                r = i(39004),
                s = i(61493),
                o = i(4071),
                l = i(66738),
                c = i(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: n,
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
                        { formatMessage: C } = (0, r.A)(),
                        A = C({ id: 'trailer.button-aria-label' });
                    return (0, a.jsx)(o.$, {
                        className: x,
                        color: 'secondary',
                        radius: d,
                        size: n,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': A,
                        onClick: _,
                        ref: h,
                        icon: (0, a.jsx)(l.I, { variant: 'trailer', size: u, className: p }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, n.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        73182: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => r });
            var a = i(56829),
                n = i(35015);
            let r = (e) => {
                switch (e) {
                    case a._.PODCAST:
                        return n.c.PODCAST;
                    case a._.AUDIOBOOK:
                        return n.c.AUDIOBOOK;
                    case a._.FAIRY_TALE:
                        return n.c.FAIRY_TALE;
                    default:
                        return n.c.ALBUM;
                }
            };
        },
        73544: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => a });
            let a = (e) => ({ uri: e.uri, color: e.color });
        },
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        77174: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => r });
            var a = i(39004),
                n = i(56829);
            let r = (e, t) => {
                let { formatMessage: i } = (0, a.A)();
                if (e)
                    switch (t) {
                        case n._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case n._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case n._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case n._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        77737: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => y });
            var a = i(25839),
                n = i(82298),
                r = i(88204),
                s = i(74631),
                o = i(39004),
                l = i(84059),
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
                C = i(97522),
                A = i(40846),
                N = i(61755),
                T = i(87221),
                b = i(12752),
                k = i.n(b);
            let y = (0, r.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: r,
                        albumArtists: b,
                        withExplicitMark: y,
                        withSecondaryColor: f,
                        captionSize: E = 'm',
                        explicitSize: j = 'xxxs',
                        withAllArtistsTitle: S,
                        textClassName: I,
                        artistsClassName: O,
                        ignoreDislikedStyles: L,
                        withCustomTooltip: R = !0,
                        hasLineClamp: w = !0,
                        withSavingQueryParams: P,
                        beforeTitle: M,
                        withArtistLink: D,
                        variant: F,
                        withTrackLink: U,
                        afterTitle: W,
                        withContextMenuArtists: B,
                    } = e,
                    { formatMessage: z } = (0, o.A)(),
                    { sendNavigateSearchFeedback: H } = (0, p.z)(),
                    {
                        settings: { isMobile: Y },
                        slam: $,
                    } = (0, x.g)(),
                    K = (0, N.$)({ withCustomTooltip: R }),
                    G = (0, l.useSearchParams)(),
                    V = (0, A.B)(r, {
                        isMobile: Y,
                        isOfflineModeEnabled: $.isOfflineModeEnabled,
                        albumArtists: b,
                        withTrackLink: U,
                        withArtistLink: D,
                        variant: F,
                        withExplicitMark: y,
                        query: P ? Object.fromEntries(G) : void 0,
                    }),
                    {
                        displayTitle: X,
                        ariaLabel: q,
                        tooltipText: Z,
                        titleAttribute: J,
                        versionTitleAttribute: Q,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, a) => {
                        var n, r;
                        let { canEnableCustomTooltip: s, isMobile: o } = i,
                            l = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, a),
                            c = t.shouldShowRemovedTitle ? l : ''.concat(l, ' ').concat(null != (n = t.version) ? n : ''),
                            d = a({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: l,
                            ariaLabel: ''.concat(d, ' ').concat(null != (r = e.version) ? r : ''),
                            tooltipText: c,
                            isTooltipEnabled: s && !o,
                            titleAttribute: !s && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: s ? void 0 : t.version,
                        };
                    })(r, V, { canEnableCustomTooltip: K, isMobile: Y }, z),
                    et = (0, T.O)({ track: r, onNavigate: H, withSavingQueryParams: P, entityType: v.n.TRACK }),
                    ei = (0, s.useCallback)(
                        (e) =>
                            (0, a.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Z,
                                hoverSettings: h.V,
                                children: (0, a.jsx)(m.HL, {
                                    className: (0, n.$)(k().text, k().title),
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
                    ea = (0, d.L)(() =>
                        V.shouldShowRemovedTitle
                            ? (0, a.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Z,
                                  hoverSettings: h.V,
                                  children: (0, a.jsx)(m.HL, {
                                      className: (0, n.$)(k().text, k().title),
                                      type: 'entity',
                                      size: E,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: J,
                                      children: X,
                                  }),
                              })
                            : V.link
                              ? (0, a.jsx)(C.N, {
                                    onClick: et,
                                    className: k().albumLink,
                                    href: V.link.href,
                                    'aria-label': q,
                                    title: J,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    en = (0, s.useMemo)(() => +!!w, [w]);
                return (0, a.jsx)('div', {
                    className: (0, n.$)(k().root, { [k().root_disabled]: !r.isAvailable, [k().root_disliked]: r.isDisliked && !L, [k().root_withSecondaryColor]: f }, t),
                    children: (0, a.jsxs)('div', {
                        className: k().metaContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                className: (0, n.$)(k().titleContainer, { [k().titleContainer_withVersion]: r.version }, i),
                                children: [
                                    (0, a.jsxs)(m.HL, {
                                        className: (0, n.$)(k().text, I),
                                        type: 'entity',
                                        size: E,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            M,
                                            ea,
                                            V.version &&
                                                (0, a.jsxs)(m.HL, {
                                                    className: (0, n.$)(k().text, k().version),
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
                                        (0, a.jsx)(g.N, {
                                            containerClassName: k().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: j,
                                            variant: V.explicitMark,
                                            className: k().explicitMark,
                                            trackId: r.id,
                                        }),
                                    W,
                                ],
                            }),
                            V.artists.length > 0 &&
                                (0, a.jsx)(_.i, {
                                    className: (0, n.$)(k().text, { [k().artists]: w }, O, I),
                                    withAllArtistsTitle: S,
                                    linkClassName: (0, n.$)(k().text, k().link),
                                    captionClassName: (0, n.$)(k().text, k().artistCaption),
                                    artists: V.artists,
                                    withLink: V.withArtistLink,
                                    lineClamp: en,
                                    captionSize: E,
                                    withContextMenu: B,
                                }),
                        ],
                    }),
                });
            });
        },
        78541: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 30871)),
                Promise.resolve().then(i.bind(i, 25464)),
                Promise.resolve().then(i.bind(i, 29340)),
                Promise.resolve().then(i.bind(i, 96634)));
        },
        81024: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => n });
            var a = i(25895);
            let n = (e) => (0, a.u)('/album/:albumId', { params: { albumId: e } });
        },
        82967: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => g });
            var a = i(25839),
                n = i(82298),
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
                        isDragging: C,
                        draggingClassName: A,
                        ignoreDislikedStyles: N,
                        withSecondaryColor: T,
                        handleRemove: b,
                        withDislike: k,
                        withTrailer: y = !0,
                        beforeTitle: f,
                        removeButtonAriaLabel: E,
                        hideControls: j,
                    } = e,
                    S = (0, c.D)({ playContextParams: r, entityId: i.entityId }),
                    {
                        settings: { isMobile: I },
                    } = (0, d.g)(),
                    O = (0, l.X)(i.trackSource, { isMobile: I }),
                    L = (0, s.useCallback)(
                        (e) =>
                            (0, a.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: N,
                                radius: 'xs',
                                ...e,
                            }),
                        [N, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, a.jsx)(x.C, {
                    className: (0, n.$)(h, { [v().trackWithDots]: g, [v().important]: g }),
                    track: i,
                    beforeBlock: g ? (0, a.jsx)(m.O, { className: (0, n.$)(v().dots, A), isDragging: C }) : void 0,
                    meta: (0, a.jsx)(p.j, { withArtistLink: O, beforeTitle: f, track: i, ignoreDislikedStyles: N, withSecondaryColor: T }),
                    playButtonCellRender: L,
                    controls: (0, a.jsx)(_.Q, {
                        track: i,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: N,
                        utmLink: null == (t = r.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: T,
                        handleRemove: b,
                        withDislike: k,
                        withTrailer: y,
                        removeButtonAriaLabel: E,
                        hideControls: j,
                    }),
                    ...S,
                    'data-test-id': o.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        85957: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        89514: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
        90780: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var a = i(25839),
                n = i(74631),
                r = i(61493),
                s = i(4254),
                o = i(44408),
                l = i.n(o);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [o, c] = (0, n.useState)(null);
                if (
                    ((0, n.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, a.jsx)(
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
            var a = i(25839),
                n = i(88204),
                r = i(3163),
                s = i(73182);
            let o = (0, n.PA)((e) => {
                let { album: t, closeToast: i, withLink: n } = e,
                    o = (0, s.b)(t.type);
                return (0, a.jsx)(r.O, {
                    closeToast: i,
                    entityVariant: o,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: n,
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
            (i.r(t), i.d(t, { NotFound: () => f }));
            var a = i(25839),
                n = i(82298),
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
                C = i(53712),
                A = i(85686),
                N = i(56120),
                T = i(15270),
                b = i(27954),
                k = i(24053),
                y = i.n(k);
            let f = (0, r.PA)((e) => {
                let { className: t, title: i, description: r, iconVariant: k = 'musicLogo', iconClassName: f, iconSize: E } = e,
                    { contentRef: j, setContentScrollRef: S } = (0, g.g)(),
                    I = (0, A.Z)(C.Z.main.href);
                !(function () {
                    let e = (0, x.st)(),
                        { hash: t } = (0, x.gf)(),
                        i = (0, h.U)(),
                        a = (0, u.useRef)(void 0);
                    (0, u.useEffect)(() => {
                        if (!e || !t) return;
                        a.current = (0, v.A)();
                        let n = (0, m.F)({
                            params: {
                                hash: t,
                                pageId: _.AppScreen.PageNotFoundScreen,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                                viewUuid: a.current,
                            },
                            logger: i,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            n && (0, p.w5)(e.evgenInstance, n),
                            () => {
                                let n = (0, m.F)({
                                    params: {
                                        hash: t,
                                        pageId: _.AppScreen.PageNotFoundScreen,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                        viewUuid: a.current,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                n && (0, p.XB)(e.evgenInstance, n);
                            }
                        );
                    }, [e, t, i]);
                })();
                let { handleNavigateToMain: O } = (function (e) {
                    let t = (0, x.st)(),
                        { hash: i } = (0, x.gf)(),
                        a = (0, h.U)();
                    return {
                        handleNavigateToMain: (0, u.useCallback)(() => {
                            if (!t || !i) return;
                            let n = (0, m.F)({
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
                                logger: a,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            (n && (0, p.Mu)(t.evgenInstance, n), e());
                        }, [t, i, a, e]),
                    };
                })(I);
                return (
                    (0, N.N)(!0),
                    !(function () {
                        let { location: e } = (0, b.g)();
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
                    (0, a.jsxs)(c.N, {
                        className: (0, n.$)(y().root, { [y().root_desktop]: !j }, t),
                        containerClassName: y().container,
                        ref: S,
                        children: [
                            (0, a.jsx)(T.L, { withBackwardFallback: '/', className: y().navigation, withForwardControl: !1 }),
                            (0, a.jsxs)('div', {
                                className: y().content,
                                children: [
                                    (0, a.jsx)(l.I, { className: (0, n.$)(y().icon, f), variant: k, size: E }),
                                    (0, a.jsx)(d.DZ, {
                                        className: (0, n.$)(y().title, y().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: i || (0, a.jsx)(s.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, a.jsx)(d.HL, {
                                        className: (0, n.$)(y().text, y().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: r || (0, a.jsx)(s.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, a.jsx)(o.$, {
                                        onClick: O,
                                        className: y().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(d.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, a.jsx)(s.A, { id: 'navigation.page-main' }),
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
            var a;
            (i.d(t, { p: () => a }),
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
                })(a || (a = {})));
        },
        97805: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => x });
            var a = i(25839),
                n = i(3718),
                r = i(82298),
                s = i(74631),
                o = i(39004),
                l = i(23976),
                c = i(47399),
                d = i.n(c);
            let u = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: n } = (0, o.A)(),
                    c = (0, s.useMemo)(() => n({ id: 'loading-messages.entity-is-loading' }, { entityName: n({ id: 'entity-names.track' }) }), [n]);
                return (0, a.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, r.$)(d().root, i),
                    children: [
                        (0, a.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, a.jsx)('div', { className: d().coverContainer, children: (0, a.jsx)(l.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, a.jsx)('div', { className: d().textContainer, children: (0, a.jsx)(l.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, a.jsx)(l.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var m = i(64813),
                _ = i.n(m);
            let p = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: n } = (0, o.A)(),
                        c = (0, s.useMemo)(() => n({ id: 'loading-messages.entity-is-loading' }, { entityName: n({ id: 'entity-names.track' }) }), [n]);
                    return (0, a.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, r.$)(_().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, a.jsx)(l.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, a.jsx)('div', { className: _().textContainer, children: (0, a.jsx)(l.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, a.jsx)(l.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                x = (e) => {
                    let { isActive: t, variant: i, className: r } = e;
                    switch (i) {
                        case n.X.PLAYLIST:
                            return (0, a.jsx)(p, { isActive: t, className: r });
                        case n.X.ALBUM:
                            return (0, a.jsx)(u, { isActive: t, className: r });
                    }
                };
        },
        98436: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { _: () => a }),
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
                })(a || (a = {})));
        },
        99401: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => y });
            var a = i(25839),
                n = i(82298),
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
                    let { formatMessage: t, language: i, tld: a, year: n } = e;
                    return {
                        year: n,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, a, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, a, i) },
                    };
                };
            var m = i(10959),
                _ = i(89514);
            let p = (e) => e(new Date(), (0, _.m)());
            var x = i(96433),
                h = i(27954),
                v = i(400),
                g = i.n(v),
                C = i(61493),
                A = i(4254),
                N = i(97522);
            let T = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, n.$)(g().copyrights, t),
                        'data-test-id': C.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(A.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: g().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, a.jsx)(N.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, n.$)(g().copyrightLink, g().yandexMusicLink),
                                        'data-test-id': C.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(A.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(N.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: g().copyrightLink,
                                'data-test-id': C.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                b = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, a.jsxs)('div', {
                        className: g().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: g().list,
                                'data-test-id': C.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: n } = e;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: g().item,
                                            children: (0, a.jsx)(N.N, { target: '_blank', href: n, className: g().link, 'data-test-id': C.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, a.jsx)(A.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: g().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': C.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('footer', {
                        className: (0, n.$)(g().root, g().important, t),
                        'data-test-id': C.S7.FOOTER,
                        children: [(0, a.jsx)(b, { links: i.links, disclaimer: i.disclaimer }), (0, a.jsx)(T, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, h.g)(),
                    { formatDate: n, formatMessage: r } = (0, s.A)(),
                    { language: o } = (0, x.h)(),
                    l = u({ formatMessage: r, language: o, tld: i.tld, year: p(n) });
                return (0, a.jsx)(T, { className: t, data: l });
            });
            let y = (0, r.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: r, location: _, user: v } = (0, h.g)(),
                    { formatDate: C, formatMessage: A } = (0, s.A)(),
                    { isEnabled: N } = null != (t = (0, l.P)()) ? t : {},
                    { language: T } = (0, x.h)(),
                    b = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: a, language: n, tld: r, userRegion: s, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: a, language: n, userRegion: r } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, a, n) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, a, n) },
                                    l = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, a, n) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, a, n) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, a, n) },
                                    _ = [s, l, u];
                                return (i && 'ru' === r && _.push(o), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: a, language: n, tld: r, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: i, language: n, tld: r, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: A,
                        isWebApplication: o.$3,
                        tld: _.tld,
                        language: T,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: p(C),
                    });
                return (0, a.jsx)(k, { className: (0, n.$)({ [g().root_withOffsetForDeeplink]: N }, i), data: b });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                8803, 3349, 6749, 6392, 6287, 3472, 2121, 9122, 3112, 5275, 6706, 4771, 1311, 546, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1251, 1817, 6215, 3257, 2917,
                8421, 2038, 4163, 3246, 7848, 3482, 6680, 2247, 4345, 8836, 820, 4434, 48, 862, 1808, 9333, 9616, 4041, 4475, 5056, 7358,
            ],
            () => e((e.s = 78541)),
        ),
            (_N_E = e.O()));
    },
]);
