(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3211],
    {
        985: (e, t, a) => {
            'use strict';
            a.d(t, { kv: () => i, Fn: () => o.OverviewBlock, tm: () => n.t });
            var n = a(97774),
                s = a(93064);
            let i = s.gK.model('BaseOverview', {
                title: s.gK.maybe(s.gK.string),
                message: s.gK.maybe(s.gK.string),
                isExpandable: s.gK.optional(s.gK.boolean, !0),
                visibleLinesCount: s.gK.optional(s.gK.number, 3),
            });
            var o = a(9283);
        },
        3809: (e) => {
            e.exports = {
                root: 'DonationCard_root__81nc5',
                donation: 'DonationCard_donation__SlArJ',
                cover: 'DonationCard_cover__Mqb3g',
                image: 'DonationCard_image__xABTn',
                container: 'DonationCard_container__1xkqs',
                text: 'DonationCard_text__mdeXx',
                artist: 'DonationCard_artist__xq4Jw',
                goal: 'DonationCard_goal__6BdcG',
                label: 'DonationCard_label__T_hDw',
                shimmer: 'DonationCard_shimmer__cMO7r',
                shimmerContainer: 'DonationCard_shimmerContainer__9ZH20',
                shimmerText: 'DonationCard_shimmerText__TrtjR',
                shimmerCover: 'DonationCard_shimmerCover__U6Rwp',
                shimmerArtist: 'DonationCard_shimmerArtist__jRQCV',
                shimmerGoal: 'DonationCard_shimmerGoal__UGSTd',
                shimmerButton: 'DonationCard_shimmerButton__LYfOm',
            };
        },
        4991: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => r });
            var n = a(61910),
                s = a(43350),
                i = a(62395),
                o = a(83252);
            let r = (e) => {
                let { artistId: t, viewUuid: a } = e,
                    r = (0, i.st)(),
                    { hash: l } = (0, i.gf)(),
                    { pageId: c } = (0, o.$au)(),
                    { objectsCount: d, objectType: u, objectId: m, objectPosX: p, objectPosY: _, objectPos: v } = (0, o.Jfv)(),
                    h = (0, o.NKK)(),
                    C = (0, o.UlF)(),
                    x = (0, n.useCallback)(
                        (e) => {
                            let a = (0, s.Fx)({
                                params: { hash: l, artistId: t, objectsCount: d, objectType: u, objectId: m, objectPosX: p, objectPosY: _, to: e },
                                logger: C,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            r && a && (0, s.U6)(r.evgenInstance, a);
                        },
                        [r, t, l, C, m, p, _, u, d],
                    ),
                    g = (0, n.useCallback)(
                        (e) => {
                            let n = (0, s.Fx)({
                                params: { hash: l, artistId: t, viewUuid: a, objectId: m, objectPos: v, to: e },
                                logger: C,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            r && n && a && (0, s.mh)(r.evgenInstance, n);
                        },
                        [r, t, l, C, m, v, a],
                    );
                return (0, n.useCallback)(
                    (e) => {
                        if (r && c && o.xKB.includes(c))
                            switch (c) {
                                case o._Q$.ARTIST:
                                    x(e);
                                    break;
                                case o._Q$.ARTIST_CONCERTS:
                                    g(e);
                                    break;
                                case o._Q$.SEARCH:
                                    h({ to: s.QT.ConcertPurchaseScreen });
                            }
                    },
                    [r, c, h, g, x],
                );
            };
        },
        5631: (e, t, a) => {
            'use strict';
            a.d(t, { DonationCarousel: () => m });
            var n = a(54486),
                s = a(50420),
                i = a(61910),
                o = a(15209),
                r = a(81203),
                l = a(80585),
                c = a(91097),
                d = a.n(c);
            let u = (e) => {
                    let {
                            className: t,
                            forwardRef: a,
                            headerClassName: c,
                            containerClassName: u,
                            headingVariant: m,
                            title: p,
                            viewAllActionLink: _,
                            description: v,
                            children: h,
                            ...C
                        } = e,
                        x = (0, i.useId)(),
                        g = (0, i.useRef)(null);
                    return (0, n.jsxs)('section', {
                        ref: a,
                        className: (0, s.$)(d().root, t),
                        ...(0, o.getDataAttrFromProps)(C),
                        children: [
                            (0, n.jsx)(l.Tw, {
                                className: c,
                                labeledForId: x,
                                title: p,
                                description: v,
                                viewAllActionLink: _,
                                controls: (0, n.jsx)(l.X9, { className: d().controls, carouselRef: g }),
                                headingVariant: m,
                                withDescription: !!v,
                            }),
                            (0, n.jsx)(r.Carousel, { ref: g, itemClassName: (0, s.$)(d().item, d().important), className: u, 'aria-labelledby': x, children: h }),
                        ],
                    });
                },
                m = (0, i.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e }));
        },
        7981: (e, t, a) => {
            'use strict';
            a.d(t, {
                vK: () => _.DonationButton,
                Xx: () => v.DonationCard,
                x0: () => h.DonationCarousel,
                kZ: () => A,
                eG: () => p,
                GT: () => r,
                Q$: () => m,
                cg: () => n.useSendEventOnDonationNavigated,
                CC: () => s.useSendEventOnDonationShowedOrHidden,
            });
            var n = a(18139),
                s = a(31135),
                i = a(93064),
                o = a(63695);
            let r = (e) => {
                let { url: t, artist: a, goal: n } = e;
                return (0, i.wg)({ url: t, goal: n, artist: (0, o.as)({ artist: a }) });
            };
            var l = a(97396),
                c = a(61910),
                d = a(83252);
            let u = { [d.Sxu.Light]: 'yandex_music', [d.Sxu.Dark]: 'yandex_music_dark' },
                m = () => {
                    let e = (0, l.useSearchParams)(),
                        { theme: t } = (0, d.DPo)();
                    return (0, c.useCallback)(
                        (a) => {
                            if (!t) return a;
                            let n = new URLSearchParams(e);
                            n.set('wl', u[t]);
                            let s = e.get(d.K3F.UTM_CAMPAIGN);
                            return s && n.set('meta', 'campaignid_'.concat(s)), (0, d.Cvn)(a, n);
                        },
                        [t, e],
                    );
                },
                p = i.gK.model('Donation', { url: i.gK.string, artist: o.PK, goal: i.gK.maybe(i.gK.string) });
            var _ = a(74627),
                v = a(30623),
                h = a(5631),
                C = a(54486),
                x = a(50420),
                g = a(22674),
                f = a(3809),
                N = a.n(f);
            let b = (e) => {
                    let { isActive: t } = e;
                    return (0, C.jsxs)('div', {
                        className: (0, x.$)(N().shimmer, N().donation),
                        children: [
                            (0, C.jsx)(g.Shimmer, { isActive: t, radius: 'round', className: N().shimmerCover }),
                            (0, C.jsxs)('div', {
                                className: N().shimmerContainer,
                                children: [
                                    (0, C.jsxs)('div', {
                                        className: N().shimmerText,
                                        children: [
                                            (0, C.jsx)(g.Shimmer, { isActive: t, radius: 'xxxl', className: N().shimmerArtist }),
                                            (0, C.jsx)(g.Shimmer, { isActive: t, radius: 'xxxl', className: N().shimmerGoal }),
                                        ],
                                    }),
                                    (0, C.jsx)(g.Shimmer, { isActive: t, radius: 'xxxl', className: N().shimmerButton }),
                                ],
                            }),
                        ],
                    });
                },
                A = (e) => Array.from({ length: 10 }, (t, a) => (0, C.jsx)(b, { isActive: e }, a));
        },
        9283: (e, t, a) => {
            'use strict';
            a.d(t, { OverviewBlock: () => A });
            var n = a(54486),
                s = a(50420),
                i = a(28303),
                o = a(61910),
                r = a.t(o, 2),
                l = a(31500),
                c = a(94377),
                d = {
                    4601: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0);
                        let n = a(810);
                        t.useToggle = (e) => {
                            let [t, a] = (0, n.useState)(e);
                            (0, n.useEffect)(() => {
                                a(e);
                            }, [e]);
                            let s = (0, n.useCallback)(() => {
                                    a((e) => !e);
                                }, []),
                                i = (0, n.useCallback)(() => {
                                    a(!0);
                                }, []),
                                o = (0, n.useCallback)(() => {
                                    a(!1);
                                }, []);
                            return { state: t, toggle: s, setState: a, toggleTrue: i, toggleFalse: o };
                        };
                    },
                    352: (e) => {
                        e.exports = c;
                    },
                    810: (e) => {
                        e.exports = r;
                    },
                },
                u = {};
            function m(e) {
                var t = u[e];
                if (void 0 !== t) return t.exports;
                var a = (u[e] = { exports: {} });
                return d[e](a, a.exports, m), a.exports;
            }
            var p = {};
            (() => {
                Object.defineProperty(p, '__esModule', { value: !0 }), (p.useTruncate = void 0);
                let e = m(352),
                    t = m(810),
                    a = m(4601);
                p.useTruncate = (n) => {
                    let [s, i] = (0, t.useState)(0),
                        { state: o, toggleTrue: r, toggleFalse: l } = (0, a.useToggle)(!1),
                        c = (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(() => {
                                    let { offsetHeight: e, scrollHeight: t } = (null == n ? void 0 : n.current) || {};
                                    e && t && s < t ? r() : l();
                                }, 100),
                            [s, n, l, r],
                        );
                    return (
                        (0, t.useEffect)(() => {
                            var e, t;
                            !s && (null == (e = n.current) ? void 0 : e.offsetHeight) && i(null == (t = n.current) ? void 0 : t.offsetHeight);
                        }, [s, n]),
                        (0, t.useEffect)(
                            () => (
                                c(),
                                window.addEventListener('resize', c),
                                () => {
                                    window.removeEventListener('resize', c);
                                }
                            ),
                            [c],
                        ),
                        { isTruncated: o }
                    );
                };
            })(),
                p.__esModule;
            var _ = p.useTruncate,
                v = a(77881),
                h = a(97800),
                C = a(83252),
                x = a(46210),
                g = a.n(x),
                f = a(43426),
                N = a(32692);
            let b = (0, i.PA)((e) => {
                    let { message: t, title: a, className: i, credits: o, messageClassName: r } = e,
                        {
                            modals: { overviewModal: c },
                            settings: { isMobile: d },
                        } = (0, C.Pjs)(),
                        { formatMessage: u } = (0, f.A)(),
                        { contentRef: m } = (0, C.gKY)();
                    return (0, n.jsxs)(N.a, {
                        title: a,
                        titleProps: (0, l.Am)(l.Kq.overview.OVERVIEW_MODAL_TITLE),
                        className: (0, s.$)(g().modal, i),
                        contentClassName: g().modalContent,
                        overlayClassName: g().modalOverlay,
                        headerClassName: (0, s.$)(g().modalHeader, { [g().modalHeader_withTitle]: a }),
                        size: 'fitContent',
                        placement: d ? 'default' : 'right',
                        open: c.isOpened,
                        onOpenChange: c.onOpenChange,
                        onClose: c.close,
                        portalNode: d ? null : m,
                        isMobile: d,
                        labelClose: u({ id: 'interface-actions.close' }),
                        containerProps: (0, l.Am)(l.Kq.overview.OVERVIEW_MODAL),
                        closeButtonProps: (0, l.Am)(l.Kq.overview.OVERVIEW_MODAL_CLOSE_BUTTON),
                        children: [
                            (0, n.jsx)(h.Caption, {
                                ...(0, l.Am)(l.Kq.overview.OVERVIEW_MODAL_MESSAGE),
                                className: (0, s.$)(g().message, r),
                                size: 'l',
                                variant: 'div',
                                children: t,
                            }),
                            o,
                        ],
                    });
                }),
                A = (0, i.PA)((e) => {
                    let {
                            meta: t,
                            buttonClassName: a,
                            modalClassName: i,
                            creditsModal: r,
                            messageClassName: c,
                            messageModalClassName: d,
                            textButton: u,
                            withShowButton: m,
                        } = e,
                        p = (0, o.useRef)(null),
                        {
                            modals: { overviewModal: x },
                        } = (0, C.Pjs)(),
                        { isTruncated: f } = _(p),
                        N = (f && t.isExpandable) || m;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(h.Caption, {
                                ref: p,
                                className: (0, s.$)(g().message, c),
                                size: 'm',
                                variant: 'div',
                                lineClamp: t.visibleLinesCount,
                                ...(0, l.Am)(l.Kq.overview.OVERVIEW_MESSAGE),
                                children: t.message,
                            }),
                            N &&
                                t.message &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(v.$, {
                                            className: (0, s.$)(g().button, a),
                                            onClick: x.open,
                                            radius: 'xs',
                                            variant: 'text',
                                            color: 'secondary',
                                            withRipple: !1,
                                            ...(0, l.Am)(l.Kq.overview.OVERVIEW_FURTHER_BUTTON),
                                            children: (0, n.jsx)(h.Caption, { size: 'm', variant: 'span', children: u }),
                                        }),
                                        (0, n.jsx)(b, { message: t.message, title: t.title, className: i, credits: r, messageClassName: d }),
                                    ],
                                }),
                        ],
                    });
                });
        },
        10351: (e, t, a) => {
            'use strict';
            a.d(t, { AfishaWidget: () => _ });
            var n = a(54486),
                s = a(61910),
                i = a(43426),
                o = a(31500),
                r = a(77881),
                l = a(32692),
                c = a(39610),
                d = a(83252),
                u = a(74391),
                m = a(78683),
                p = a.n(m);
            let _ = (e) => {
                let { dataSessionId: t, isOpened: a, onOpen: m, onClose: _ } = e,
                    v = (0, d.NFA)().get(d.twC),
                    { formatMessage: h } = (0, i.A)(),
                    C = (0, u.v)(),
                    x = (0, s.useCallback)(
                        (e) => {
                            e.origin === v.afisha.host && 'close' === e.data.type && _();
                        },
                        [_, v.afisha.host],
                    );
                (0, s.useEffect)(
                    () => (
                        window.addEventListener('message', x),
                        () => {
                            window.removeEventListener('message', x);
                        }
                    ),
                    [x],
                );
                let g = (0, s.useCallback)(
                        (e) => {
                            e ? m() : _();
                        },
                        [_, m],
                    ),
                    f = C(''.concat(v.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(v.afisha.clientId));
                return (0, n.jsxs)(l.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: a,
                    onOpenChange: g,
                    onClose: _,
                    showHeader: !1,
                    className: p().widget,
                    contentClassName: p().content,
                    overlayColor: 'full',
                    containerProps: (0, o.Am)(o.OA.concert.AFISHA_MODAL),
                    children: [
                        (0, n.jsx)(c.q, { children: (0, n.jsx)(r.$, { 'aria-label': h({ id: 'interface-actions.close' }), onClick: _ }) }),
                        (0, n.jsx)('iframe', {
                            src: f,
                            className: p().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
        },
        15647: (e) => {
            e.exports = { icon: 'NotificationRepeat_icon__WCf4_', message: 'NotificationRepeat_message__jCngy', icon_unset: 'NotificationRepeat_icon_unset__z2fmU' };
        },
        16045: (e, t, a) => {
            'use strict';
            a.d(t, { RepeatButton: () => p });
            var n = a(54486),
                s = a(50420),
                i = a(43426),
                o = a(31500),
                r = a(3269),
                l = a(8817),
                c = a(77881),
                d = a(5956),
                u = a(74890),
                m = a.n(u);
            let p = (e) => {
                let {
                        isDisabled: t,
                        repeatMode: a,
                        className: u,
                        iconClassName: p,
                        size: _ = 'xxxs',
                        iconSize: v = 'xs',
                        color: h,
                        variant: C = 'default',
                        onClick: x,
                    } = e,
                    { formatMessage: g } = (0, i.A)(),
                    f = t || a !== r.pM.ONE ? 'repeat' : 'repeat_one',
                    N = ((e, t, a) =>
                        t(
                            e === r.pM.NONE || a
                                ? { id: 'player-actions.repeat' }
                                : e === r.pM.ONE
                                  ? { id: 'player-actions.repeat-one' }
                                  : { id: 'player-actions.repeat-context' },
                        ))(a, g, t),
                    b = (0, l.c)((e) => {
                        null == x || x(), e.stopPropagation();
                    });
                return (0, n.jsx)(c.$, {
                    className: u,
                    radius: 'round',
                    size: _,
                    variant: C,
                    color: h,
                    disabled: t,
                    withRipple: !1,
                    'aria-hidden': t,
                    'aria-label': N,
                    'aria-pressed': !t && a !== r.pM.NONE,
                    onClick: b,
                    icon: (0, n.jsx)(d.Icon, {
                        size: v,
                        variant: f,
                        className: (0, s.$)(m().repeatIcon, m()['repeatIcon_'.concat(a)], { [m().repeatIcon_disabled]: t }, p),
                    }),
                    ...(0, o.Am)(
                        ((e, t) =>
                            e === r.pM.NONE || t
                                ? o.Kq.sonata.REPEAT_BUTTON_NO_REPEAT
                                : e === r.pM.ONE
                                  ? o.Kq.sonata.REPEAT_BUTTON_REPEAT_ONE
                                  : o.Kq.sonata.REPEAT_BUTTON_REPEAT_CONTEXT)(a, t),
                    ),
                });
            };
        },
        18139: (e, t, a) => {
            'use strict';
            a.d(t, { useSendEventOnDonationNavigated: () => r });
            var n = a(43350),
                s = a(62395),
                i = a(8817),
                o = a(83252);
            let r = () => {
                let { hash: e } = (0, s.gf)(),
                    t = (0, o.UlF)(),
                    a = (0, s.st)(),
                    { pageId: r } = (0, o.$au)(),
                    { blockId: l, blockType: c, blockPosX: d, blockPosY: u } = (0, o.N8n)(),
                    { objectType: m, objectId: p, objectPosX: _, objectPosY: v, objectsCount: h, mainObjectId: C, mainObjectType: x } = (0, o.Jfv)();
                return (0, i.c)((s, i) => {
                    if (!a || !r) return;
                    let g = o.Wft[r];
                    if (!g) return;
                    let f = {
                        to: s,
                        objectType: m,
                        objectId: p,
                        objectPosX: _,
                        objectPosY: v,
                        hash: e,
                        pageId: g,
                        mainObjectType: x,
                        mainObjectId: C,
                        entityType: c,
                        entityId: l,
                        entityPosX: d,
                        entityPosY: u,
                        objectsCount: h,
                        from: g,
                    };
                    i && (f.deepLink = i);
                    let N = (0, n.Fx)({ params: f, logger: t, context: 'useSendEventOnDonationNavigated' });
                    N && (0, n.QS)(a.evgenInstance, N);
                });
            };
        },
        20065: (e) => {
            e.exports = {
                root: 'ConcertCardWithImage_root__NHF59',
                cover: 'ConcertCardWithImage_cover__3V2fk',
                meta: 'ConcertCardWithImage_meta__mhsYf',
                info: 'ConcertCardWithImage_info__9VjYG',
                location: 'ConcertCardWithImage_location__2mcwY',
                rating: 'ConcertCardWithImage_rating__dL4_q',
                separator: 'ConcertCardWithImage_separator__WhzW4',
                cashbackTitle: 'ConcertCardWithImage_cashbackTitle__lfr7z',
                cashback: 'ConcertCardWithImage_cashback__sNa2M',
                title: 'ConcertCardWithImage_title__nPyZ6',
                shimmerCover: 'ConcertCardWithImage_shimmerCover___X6xn',
                shimmerTitle: 'ConcertCardWithImage_shimmerTitle__YgaQa',
                button: 'ConcertCardWithImage_button__osv22',
                shimmerButton: 'ConcertCardWithImage_shimmerButton__JZEFY',
            };
        },
        20765: (e) => {
            e.exports = {
                root: 'SonataFullscreenControlsDesktop_root__ZCIGk',
                sonataButtons: 'SonataFullscreenControlsDesktop_sonataButtons__9y89g',
                sonataButton: 'SonataFullscreenControlsDesktop_sonataButton__69FFc',
                sonataPlayButton: 'SonataFullscreenControlsDesktop_sonataPlayButton__QXEEp',
                playPauseButtonIcon: 'SonataFullscreenControlsDesktop_playPauseButtonIcon__IkUNX',
                playPauseButtonIcon_withYellowPlayButton: 'SonataFullscreenControlsDesktop_playPauseButtonIcon_withYellowPlayButton__osz8_',
                buttonContainer: 'SonataFullscreenControlsDesktop_buttonContainer__SpXWc',
            };
        },
        21050: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => s });
            var n = a(89461);
            let s = [n.MT.PLAYING, n.MT.LOADING_MEDIA_SOURCE, n.MT.BUFFERING];
        },
        23897: (e, t, a) => {
            'use strict';
            a.d(t, { useToggleMute: () => o });
            var n = a(61910),
                s = a(8817),
                i = a(83252);
            let o = () => {
                let e = (0, i.NFA)().get(i.ooW),
                    t = (0, i.eGp)(),
                    { advert: a } = (0, i.Pjs)(),
                    o = (0, i.rs2)(),
                    r = (0, s.c)(async (n) => {
                        let { sonataState: s, volume: r, playbackId: l } = n;
                        await (null == t ? void 0 : t.setExponentVolume(r, l)),
                            e.set(i.cYZ.YmPlayerVolume, r, { expires: 365 }),
                            a.isAdvertShown && (null == o || o.audioAdvertPlayback.setExponentVolume(r), s.setVolume(r));
                    });
                return (0, n.useCallback)(
                    async (t, a, n) => {
                        if (0 !== a) e.set(i.cYZ.YmPlayerPrevVolume, a, { expires: 365 }), await r({ sonataState: t, volume: 0, playbackId: n });
                        else {
                            var s;
                            let a = null != (s = e.get(i.cYZ.YmPlayerPrevVolume)) ? s : 1;
                            e.remove(i.cYZ.YmPlayerPrevVolume), await r({ sonataState: t, volume: a, playbackId: n });
                        }
                    },
                    [e, r],
                );
            };
        },
        25045: (e, t, a) => {
            'use strict';
            a.d(t, { ConcertsBlock: () => _ });
            var n = a(54486),
                s = a(50420),
                i = a(44282),
                o = a(61910),
                r = a(43350),
                l = a(81203),
                c = a(80585),
                d = a(4991),
                u = a(63693),
                m = a.n(u);
            let p = (e) => {
                    let {
                            artistId: t,
                            forwardRef: a,
                            isLoading: u,
                            title: p,
                            viewAllActionLink: _,
                            children: v,
                            className: h,
                            containerClassName: C,
                            headerClassName: x,
                            itemClassName: g,
                            headingVariant: f,
                            ...N
                        } = e,
                        b = (0, o.useId)(),
                        A = (0, o.useRef)(null),
                        y = (0, d.m)({ artistId: t }),
                        k = (0, o.useCallback)(() => {
                            y(r.H2.ArtistConcertsScreen);
                        }, [y]),
                        w = (0, o.useMemo)(
                            () =>
                                (0, i.A)(v, 2)
                                    .slice(0, 4)
                                    .map((e, t) => (0, n.jsx)('div', { className: m().concertsColumn, children: e }, t)),
                            [v],
                        );
                    return (0, n.jsxs)('section', {
                        ref: a,
                        className: (0, s.$)(m().root, h),
                        ...N,
                        children: [
                            (0, n.jsx)(c.Tw, {
                                className: x,
                                labeledForId: b,
                                title: p,
                                viewAllActionLink: _,
                                onViewAllAction: k,
                                controls: (0, n.jsx)(c.X9, { className: m().controls, carouselRef: A }),
                                headingVariant: f,
                                shouldSendAnalyticsOnLoaded: !0,
                            }),
                            (0, n.jsx)(l.Carousel, {
                                itemClassName: (0, s.$)(m().item, { [m().item_singleColumn]: 2 >= o.Children.count(v) }, g),
                                className: (0, s.$)(C, { [m().preventScroll]: u }),
                                ref: A,
                                'aria-labelledby': b,
                                children: u ? Array.from({ length: 2 }, (e, t) => (0, n.jsx)('div', { className: m().concertsColumn, children: (0, c.Tb)(2) }, t)) : w,
                            }),
                        ],
                    });
                },
                _ = (0, o.forwardRef)((e, t) => (0, n.jsx)(p, { forwardRef: t, ...e }));
        },
        27654: (e, t, a) => {
            'use strict';
            a.d(t, { SearchBestResultsMeta: () => c });
            var n = a(54486),
                s = a(28303),
                i = a(61910),
                o = a(97800),
                r = a(48516),
                l = a.n(r);
            let c = (0, s.PA)((e) => {
                let { id: t, concert: a } = e,
                    s = [],
                    r = (0, n.jsx)(o.Caption, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                return (
                    (null == a ? void 0 : a.city) && s.push((0, n.jsx)(o.Caption, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: a.city })),
                    (null == a ? void 0 : a.contentRating) &&
                        s.push(r, (0, n.jsx)(o.Caption, { variant: 'span', size: 'm', weight: 'medium', children: a.contentRating })),
                    (0, n.jsxs)('div', {
                        className: l().root,
                        id: t,
                        children: [
                            (0, n.jsx)(o.Caption, {
                                variant: 'div',
                                size: 'm',
                                weight: 'medium',
                                className: l().city,
                                lineClamp: 1,
                                children: null == a ? void 0 : a.title,
                            }),
                            (0, n.jsx)('div', { className: l().info, children: s.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                        ],
                    })
                );
            });
        },
        29476: (e, t, a) => {
            'use strict';
            a.d(t, { useOnShuffleClick: () => r });
            var n = a(54486),
                s = a(8817),
                i = a(83252),
                o = a(62915);
            let r = () => {
                let { notify: e } = (0, i.lkh)(),
                    { fullscreenPlayer: t } = (0, i.Pjs)(),
                    a = (0, i.eGp)();
                return (0, s.c)((s, r) => {
                    null !== s.entityMeta &&
                        s.canShuffle &&
                        (null == a || a.toggleShuffle(r),
                        e((0, n.jsx)(o.NotificationShuffle, { shuffle: !!(null == a ? void 0 : a.getState(r).queueState.shuffle.value) }), {
                            containerId: t.modal.isOpened ? i.uQT.FULLSCREEN_INFO : i.uQT.INFO,
                        }));
                });
            };
        },
        30623: (e, t, a) => {
            'use strict';
            a.d(t, { DonationCard: () => C });
            var n = a(54486),
                s = a(50420),
                i = a(61910),
                o = a(43426),
                r = a(47713),
                l = a(15209),
                c = a(77881),
                d = a(5956),
                u = a(6971),
                m = a(97800),
                p = a(80585),
                _ = a(3809),
                v = a.n(_);
            let h = (e) => {
                    let { artist: t, goal: a, onNavigateToArtist: i, onNavigateToDonation: _, forwardRef: h, ...C } = e,
                        { formatMessage: x } = (0, o.A)();
                    return (0, n.jsxs)('div', {
                        ref: h,
                        className: (0, s.$)(v().root, v().donation),
                        ...(0, l.getDataAttrFromProps)(C),
                        children: [
                            (0, n.jsx)(u.Paper, {
                                radius: 'round',
                                className: v().cover,
                                children: (0, n.jsx)(p.N_, {
                                    href: t.url,
                                    onClick: i,
                                    'aria-label': x({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                                    children: (0, n.jsx)(p.BW, {
                                        className: v().image,
                                        src: t.coverUri,
                                        isAvailable: t.isAvailable,
                                        size: 200,
                                        fit: 'cover',
                                        withAvatarReplace: !0,
                                        'aria-hidden': !0,
                                    }),
                                }),
                            }),
                            (0, n.jsxs)('div', {
                                className: v().container,
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: v().text,
                                        children: [
                                            (0, n.jsx)(m.Heading, { variant: 'span', size: 'xs', weight: 'bold', lineClamp: 2, className: v().artist, children: t.name }),
                                            (0, n.jsx)(m.Caption, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                className: v().goal,
                                                children: a,
                                            }),
                                        ],
                                    }),
                                    (0, n.jsxs)(c.$, {
                                        role: 'link',
                                        size: 's',
                                        color: 'secondary',
                                        onClick: _,
                                        className: v().label,
                                        withRipple: !1,
                                        children: [
                                            (0, n.jsx)(d.Icon, { variant: 'ruble', size: 'xxxs' }),
                                            (0, n.jsx)(m.Caption, {
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                variant: 'span',
                                                children: (0, n.jsx)(r.A, { id: 'donation.support-button' }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                C = (0, i.forwardRef)((e, t) => (0, n.jsx)(h, { forwardRef: t, ...e }));
        },
        31135: (e, t, a) => {
            'use strict';
            a.d(t, { useSendEventOnDonationShowedOrHidden: () => r });
            var n = a(43350),
                s = a(62395),
                i = a(8817),
                o = a(83252);
            let r = () => {
                let { hash: e } = (0, s.gf)(),
                    t = (0, o.UlF)(),
                    a = (0, s.st)(),
                    { pageId: r } = (0, o.$au)(),
                    { blockId: l, blockType: c, blockPosX: d, blockPosY: u } = (0, o.N8n)(),
                    { objectType: m, objectId: p, objectPosX: _, objectPosY: v, objectsCount: h, mainObjectId: C, mainObjectType: x } = (0, o.Jfv)();
                return (0, i.c)((s, i) => {
                    if (!a || !r) return;
                    let g = o.Wft[r];
                    if (!g) return;
                    let f = (0, n.Fx)({
                        params: {
                            objectType: m,
                            objectId: p,
                            objectPosX: _,
                            objectPosY: v,
                            hash: e,
                            pageId: g,
                            mainObjectType: x,
                            mainObjectId: C,
                            entityType: c,
                            entityId: l,
                            entityPosX: d,
                            entityPosY: u,
                            objectsCount: h,
                            viewUuid: i,
                        },
                        logger: t,
                        context: 'useSendEventOnDonationShowedOrHidden',
                    });
                    f && (s ? (0, n.Pf)(a.evgenInstance, f) : (0, n.nv)(a.evgenInstance, f));
                });
            };
        },
        31820: (e, t, a) => {
            'use strict';
            a.d(t, { useGetPriceText: () => i });
            var n = a(43426),
                s = a(8817);
            let i = () => {
                let { formatMessage: e, formatNumber: t } = (0, n.A)();
                return (0, s.c)((a) => {
                    var n, s;
                    return (null == (n = a.price) ? void 0 : n.value)
                        ? e(
                              { id: 'payment.min-price' },
                              { value: t(a.price.value, { style: 'currency', currency: null == (s = a.price) ? void 0 : s.currency, maximumFractionDigits: 0 }) },
                          )
                        : e({ id: 'payment.buy' });
                });
            };
        },
        32949: (e, t, a) => {
            'use strict';
            a.d(t, { ArtistMeta: () => m });
            var n = a(54486),
                s = a(28303),
                i = a(61910),
                o = a(43426),
                r = a(97800),
                l = a(83252),
                c = a(67340),
                d = a(48516),
                u = a.n(d);
            let m = (0, s.PA)((e) => {
                let { id: t, concert: a } = e,
                    { formatDate: s } = (0, o.A)(),
                    d = [],
                    m = (0, n.jsx)(r.Caption, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                return (
                    (null == a ? void 0 : a.place) && d.push((0, n.jsx)(r.Caption, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: a.place })),
                    (null == a ? void 0 : a.datetime) &&
                        d.push(m, (0, n.jsx)(r.Caption, { variant: 'span', size: 'm', weight: 'medium', className: u().time, children: s(a.datetime, (0, l.fS8)()) })),
                    (null == a ? void 0 : a.contentRating) &&
                        d.push(m, (0, n.jsx)(r.Caption, { variant: 'span', size: 'm', weight: 'medium', children: a.contentRating })),
                    (0, n.jsxs)('div', {
                        className: u().root,
                        id: t,
                        children: [
                            (0, n.jsx)(r.Caption, {
                                variant: 'div',
                                size: 'm',
                                weight: 'medium',
                                className: u().city,
                                lineClamp: 1,
                                children: null == a ? void 0 : a.city,
                            }),
                            (0, n.jsx)('div', { className: u().info, children: d.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            (null == a ? void 0 : a.isCashbackExperimentEnabled) &&
                                (null == a ? void 0 : a.cashbackTitle) &&
                                (0, n.jsx)(c.m, { className: u().cashback, title: a.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        33506: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => h });
            var n = a(54486),
                s = a(28303),
                i = a(61910),
                o = a(8817),
                r = a(27510),
                l = a(83252),
                c = a(80585),
                d = a(63585),
                u = a(89461),
                m = a(83675),
                p = a(91129),
                _ = a.n(p);
            let v = { mainAxis: 44 },
                h = (0, s.PA)((e) => {
                    let {
                            disabled: t,
                            isPlaying: a,
                            repeatMode: s,
                            canMoveForward: p,
                            canMoveBackward: h,
                            canShuffle: C,
                            shuffle: x,
                            onClickNext: g,
                            onClickPrev: f,
                            onClickPlayPause: N,
                            canChangeRepeatMode: b,
                            className: A,
                            withShuffle: y,
                            withRepeat: k,
                            onRepeatClick: w,
                            onShuffleClick: I,
                        } = e,
                        {
                            advert: S,
                            modals: { popoverOverPlayer: O },
                            paymentWidgetModal: E,
                            user: j,
                        } = (0, l.Pjs)(),
                        { isFreemium: R, hasFreeUserAccess: M } = (0, l.XCI)();
                    (() => {
                        let {
                                sonataState: e,
                                modals: { popoverOverPlayer: t },
                                user: a,
                            } = (0, l.Pjs)(),
                            { isPassToProduct: n } = (0, l.XCI)(),
                            s = (0, l.eGp)(),
                            o = e.contextType === d.K.Generative;
                        (0, i.useEffect)(() => {
                            if ((a.isAuthorized && !n) || o) return;
                            let e =
                                null == s
                                    ? void 0
                                    : s.state.playerState.event.onChange((e) => {
                                          e === u.Iu.PLAYING && t.open();
                                      });
                            return () => {
                                null == e || e();
                            };
                        }, [s, t, o, n, a.isAuthorized]);
                    })();
                    let T = (0, i.useCallback)(
                            () =>
                                (0, n.jsx)(c.DM, {
                                    className: _().sonataButton,
                                    iconSize: 'l',
                                    variant: 'filled',
                                    isPlaying: a,
                                    iconClassName: _().playButtonIcon,
                                    onClick: N,
                                }),
                            [a, N],
                        ),
                        P = (0, o.c)((e) => {
                            e || O.close();
                        }),
                        B = (0, r.L)(() => {
                            let e = R && j.isAuthorized ? 'vibe' : 'fullTracks';
                            return j.isAuthorized
                                ? E.modal.isOpened
                                    ? T()
                                    : (0, n.jsx)(c.SU, {
                                          isEnabled: M,
                                          isOpened: O.isOpened,
                                          placement: 'top',
                                          onOpenChange: P,
                                          offsetOptions: v,
                                          textVariant: e,
                                          renderChildren: T,
                                      })
                                : (0, n.jsx)(c.Zr, {
                                      isEnabled: !0,
                                      isOpened: O.isOpened,
                                      placement: 'top',
                                      onOpenChange: P,
                                      offsetOptions: v,
                                      textVariant: e,
                                      renderChildren: T,
                                  });
                        });
                    return (0, n.jsx)(m.a, {
                        isDisabledRepeat: !b || t,
                        isDisabledShuffle: !C || t,
                        withShuffle: ((t || C) && !(null == S ? void 0 : S.isAdvertShown)) || !!y,
                        shuffle: x,
                        canMoveBackward: h,
                        canMoveForward: p,
                        onClickNext: g,
                        onClickPrev: f,
                        withRepeat: ((t || b) && !(null == S ? void 0 : S.isAdvertShown)) || !!k,
                        repeatMode: s,
                        className: A,
                        playButton: B,
                        onRepeatClick: w,
                        onShuffleClick: I,
                    });
                });
        },
        36245: (e) => {
            e.exports = {
                root: 'ConcertImage_root__gZpOa',
                root_withMask: 'ConcertImage_root_withMask__1ayfK',
                image: 'ConcertImage_image__xtZCZ',
                day: 'ConcertImage_day__c90Ih',
                month: 'ConcertImage_month__Ic5k5',
                date: 'ConcertImage_date__aH1IR',
                weekday: 'ConcertImage_weekday__kXeo3',
                important: 'ConcertImage_important__0o7jF',
            };
        },
        38246: (e, t, a) => {
            'use strict';
            a.d(t, { useOnModifyPlayQueueBatch: () => c });
            var n = a(54486),
                s = a(8817),
                i = a(89461),
                o = a(54460),
                r = a(83252);
            let l = (e) => {
                var t;
                return null == (t = e.data) ? void 0 : t.entityId;
            };
            function c(e, t, a, c) {
                let d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : l,
                    { notify: u } = (0, r.lkh)(),
                    { fullscreenPlayer: m } = (0, r.Pjs)(),
                    p = (0, r.eGp)();
                return (0, s.c)(() => {
                    let s = e.reduce((e, t) => {
                        let a = d(t);
                        return a && e.push({ type: i.z4.Unloaded, meta: { id: a } }), e;
                    }, []);
                    if (!s.length) return;
                    switch (t) {
                        case o.NM.LAST:
                            null == p || p.injectLast({ entitiesData: s, sourceContextData: null != a ? a : void 0 });
                            break;
                        case o.NM.NEXT:
                            null == p || p.injectNext({ entitiesData: s, sourceContextData: null != a ? a : void 0 });
                    }
                    let l = m.modal.isOpened ? r.uQT.FULLSCREEN_INFO : r.uQT.INFO;
                    u((0, n.jsx)(o.l3, { entityVariant: c.entityVariant, variant: t, entityTitle: c.entityTitle, coverUri: c.coverUri }), { containerId: l });
                });
            }
        },
        40632: (e) => {
            e.exports = { root: 'SonataControls_root__w8uqu' };
        },
        41625: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        46210: (e) => {
            e.exports = {
                message: 'OverviewBlock_message__f41Rq',
                modal: 'OverviewBlock_modal__Jxiv2',
                modalHeader: 'OverviewBlock_modalHeader__nerV2',
                modalHeader_withTitle: 'OverviewBlock_modalHeader_withTitle__gjKhp',
                modalContent: 'OverviewBlock_modalContent__fw4fH',
                button: 'OverviewBlock_button__k7t4c',
                modalOverlay: 'OverviewBlock_modalOverlay__1dp_D',
            };
        },
        46521: (e) => {
            e.exports = {
                root: 'SonataFullscreenControlsMobile_root__H6MQ7',
                sonataButtons: 'SonataFullscreenControlsMobile_sonataButtons__hLf19',
                sonataButton: 'SonataFullscreenControlsMobile_sonataButton__UGQ_U',
                playPauseButtonIcon: 'SonataFullscreenControlsMobile_playPauseButtonIcon__e5ygU',
                buttonContainer: 'SonataFullscreenControlsMobile_buttonContainer__5ITqM',
            };
        },
        46695: (e, t, a) => {
            'use strict';
            a.d(t, { SonataVideoControls: () => p });
            var n = a(54486),
                s = a(50420),
                i = a(28303),
                o = a(63585),
                r = a(3269),
                l = a(8817),
                c = a(83252),
                d = a(33506),
                u = a(72309),
                m = a.n(u);
            let p = (0, i.PA)((e) => {
                let { className: t } = e,
                    { fullscreenVideoPlayer: a, experiments: i } = (0, c.Pjs)(),
                    u = i.checkExperiment(c.zal.WebNextPlayerBarYellowButton, 'on'),
                    p = (0, c.eGp)(),
                    { from: _ } = (0, c.fyy)({ pageId: c._Q$.VIDEO_PLAYER, contextId: a.state.contextId, contextType: o.K.Various }),
                    v = (0, l.c)(() => {
                        null == p || p.moveForward(c.V_r.CLIP);
                    }),
                    h = (0, l.c)(() => {
                        null == p || p.moveBackward(c.V_r.CLIP);
                    }),
                    { isPlaying: C, togglePlay: x } = (0, c.Dx4)({
                        playContextParams: { contextData: { type: o.K.Various, meta: { id: c.H7u.VARIOUS_CLIP_CONTEXT }, from: _ }, loadContextMeta: !0 },
                        sonataState: a.state,
                        playbackId: c.V_r.CLIP,
                    });
                return (0, n.jsx)(d.Z, {
                    className: (0, s.$)(t, { [m().root]: u }),
                    isPlaying: C,
                    canMoveBackward: a.state.canMoveBackward,
                    canMoveForward: a.state.canMoveForward,
                    canShuffle: !1,
                    onClickPlayPause: x,
                    onClickNext: v,
                    onClickPrev: h,
                    canChangeRepeatMode: !1,
                    shuffle: !1,
                    repeatMode: r.pM.NONE,
                });
            });
        },
        48516: (e) => {
            e.exports = {
                root: 'ConcertMeta_root__CkKU3',
                city: 'ConcertMeta_city__ngDq2',
                info: 'ConcertMeta_info__czKlU',
                time: 'ConcertMeta_time__gX09u',
                cashback: 'ConcertMeta_cashback__fkZfk',
            };
        },
        56689: (e, t, a) => {
            'use strict';
            a.d(t, { ConcertDate: () => u });
            var n = a(54486),
                s = a(50420),
                i = a(43426),
                o = a(31500),
                r = a(97800),
                l = a(83252),
                c = a(41625),
                d = a.n(c);
            let u = (e) => {
                let { datetime: t, className: a, monthClassName: c, dayClassName: u, weekdayClassName: m, withWeekday: p = !0, ..._ } = e,
                    { formatDate: v } = (0, i.A)(),
                    h = (0, l.mkF)(t);
                return (0, n.jsxs)('div', {
                    className: (0, s.$)(d().root, a),
                    'aria-label': v(t, (0, l.sDH)()),
                    ..._,
                    ...(0, o.Am)(o.OA.concert.CONCERT_DATE),
                    children: [
                        (0, n.jsx)(r.Caption, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, s.$)(d().month, c),
                            ...(0, o.Am)(o.OA.concert.CONCERT_DATE_MONTH),
                            children: h,
                        }),
                        (0, n.jsx)(r.Caption, {
                            variant: 'div',
                            className: (0, s.$)(d().day, u),
                            ...(0, o.Am)(o.OA.concert.CONCERT_DATE_DAY),
                            children: v(t, (0, l.Uw7)()),
                        }),
                        p &&
                            (0, n.jsx)(r.Caption, {
                                variant: 'div',
                                size: 'xs',
                                weight: 'bold',
                                className: (0, s.$)(d().weekday, m),
                                ...(0, o.Am)(o.OA.concert.CONCERT_DATE_WEEKDAY),
                                children: v(t, { weekday: 'short' }),
                            }),
                    ],
                });
            };
        },
        61484: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        61569: (e, t, a) => {
            'use strict';
            a.d(t, { PromoLandingSonataControls: () => g });
            var n = a(54486),
                s = a(28303),
                i = a(61910),
                o = a(8817),
                r = a(27510),
                l = a(83252),
                c = a(21050),
                d = a(84096),
                u = a(29476),
                m = a(73401),
                p = a(50420),
                _ = a(80585),
                v = a(83675),
                h = a(91129),
                C = a.n(h);
            let x = (0, s.PA)((e) => {
                    let {
                            className: t,
                            disabled: a,
                            isPlaying: s,
                            canChangeRepeatMode: i,
                            canMoveBackward: o,
                            canMoveForward: r,
                            canShuffle: c,
                            shuffle: d,
                            onClickNext: u,
                            onClickPlayPause: m,
                            onClickPrev: h,
                            repeatMode: x,
                            onRepeatClick: g,
                            onShuffleClick: f,
                        } = e,
                        { experiments: N } = (0, l.Pjs)(),
                        b = N.checkExperiment(l.zal.WebNextPlayerBarYellowButton, 'on');
                    return (0, n.jsx)(v.a, {
                        onShuffleClick: f,
                        onRepeatClick: g,
                        isDisabledRepeat: !i || a,
                        isDisabledShuffle: !c || a,
                        withShuffle: a || c,
                        shuffle: d,
                        canMoveBackward: o,
                        canMoveForward: r,
                        onClickNext: u,
                        onClickPrev: h,
                        withRepeat: a || i,
                        repeatMode: x,
                        className: t,
                        playButton: (0, n.jsx)(_.DM, {
                            className: C().sonataButton,
                            iconSize: 'l',
                            variant: 'filled',
                            isPlaying: s,
                            iconClassName: (0, p.$)(C().playButtonIcon, { [C().playButtonIcon_withYellowPlayButton]: b }),
                            onClick: m,
                        }),
                    });
                }),
                g = (0, s.PA)((e) => {
                    let { className: t, isMobile: a, entityMeta: s } = e,
                        {
                            promolanding: { state: p },
                        } = (0, l.Pjs)(),
                        _ = (0, l.eGp)(),
                        v = (0, l.brA)(),
                        h = (0, d.useOnRepeatClick)(),
                        C = (0, u.useOnShuffleClick)(),
                        g = (0, l.zwV)(),
                        f = c.w.includes(p.status),
                        N = (0, o.c)(() => {
                            s && (null == _ || _.togglePause(l.V_r.PROMO_LANDING), v(!f));
                        }),
                        b = (0, o.c)(() => {
                            null == _ || _.moveForward(l.V_r.PROMO_LANDING);
                        }),
                        A = (0, o.c)(() => {
                            null == _ || _.moveBackward(l.V_r.PROMO_LANDING);
                        }),
                        y = (0, o.c)(() => {
                            h(p, l.V_r.PROMO_LANDING);
                        }),
                        k = (0, o.c)(() => {
                            C(p, l.V_r.PROMO_LANDING);
                        });
                    (0, i.useEffect)(
                        () => (
                            null == g || g.addShortcutsListener(l.Mo.PROMO_LANDING, l.lbr.TOGGLE_PLAY, N),
                            null == g || g.addShortcutsListener(l.Mo.PROMO_LANDING, l.lbr.TOGGLE_REPEAT, y),
                            null == g || g.addShortcutsListener(l.Mo.PROMO_LANDING, l.lbr.TOGGLE_SHUFFLE, k),
                            () => {
                                null == g || g.removeShortcutsListener(l.Mo.PROMO_LANDING, l.lbr.TOGGLE_PLAY),
                                    null == g || g.removeShortcutsListener(l.Mo.PROMO_LANDING, l.lbr.TOGGLE_SHUFFLE),
                                    null == g || g.removeShortcutsListener(l.Mo.PROMO_LANDING, l.lbr.TOGGLE_REPEAT);
                            }
                        ),
                        [N, y, k, g],
                    );
                    let w = (0, r.L)(() => (a ? m.K : x));
                    return (0, n.jsx)(w, {
                        onRepeatClick: y,
                        onShuffleClick: k,
                        className: t,
                        disabled: !s,
                        isPlaying: !!f,
                        canMoveBackward: p.canMoveBackward,
                        canMoveForward: p.canMoveForward,
                        canShuffle: p.canShuffle,
                        shuffle: p.shuffle,
                        onClickPlayPause: N,
                        onClickNext: b,
                        onClickPrev: A,
                        canChangeRepeatMode: p.canChangeRepeatMode,
                        repeatMode: p.repeatMode,
                    });
                });
        },
        62915: (e, t, a) => {
            'use strict';
            a.d(t, { NotificationShuffle: () => p });
            var n = a(54486),
                s = a(50420),
                i = a(61910),
                o = a(43426),
                r = a(5956),
                l = a(39610),
                c = a(97800),
                d = a(80585),
                u = a(87537),
                m = a.n(u);
            let p = (e) => {
                let { shuffle: t, closeToast: a } = e,
                    { formatMessage: u } = (0, o.A)(),
                    p = (0, i.useMemo)(() => (t ? u({ id: 'notifications-info.shuffle-enabled' }) : u({ id: 'notifications-info.shuffle-disabled' })), [u, t]),
                    _ = (0, i.useMemo)(
                        () =>
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(l.q, { children: (0, n.jsx)('p', { role: 'alert', children: p }) }),
                                    (0, n.jsx)(c.Caption, { className: m().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: p }),
                                ],
                            }),
                        [p],
                    );
                return (0, n.jsx)(d.$W, {
                    cover: (0, n.jsx)(r.Icon, { className: (0, s.$)(m().icon, { [m().icon_unset]: !t }), size: 'xs', variant: 'shuffle' }),
                    message: _,
                    closeToast: a,
                    coverRadius: 's',
                });
            };
        },
        63693: (e) => {
            e.exports = {
                root: 'ConcertsBlock_root__d_1G3',
                controls: 'ConcertsBlock_controls__oULxu',
                item: 'ConcertsBlock_item__jMAX9',
                item_singleColumn: 'ConcertsBlock_item_singleColumn__p8ilp',
                preventScroll: 'ConcertsBlock_preventScroll__YeeZH',
                concertsColumn: 'ConcertsBlock_concertsColumn__2M2t_',
            };
        },
        64543: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => s });
            var n = a(83252);
            let s = (e) => {
                let { h: t, s: a, l: s } = (0, n.g8k)(e);
                return 'hsl('
                    .concat(t, ', ')
                    .concat(a, '%, ')
                    .concat(s <= 55 ? s + 20 : s - 20, '%)');
            };
        },
        67340: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => d });
            var n = a(54486),
                s = a(50420),
                i = a(31500),
                o = a(5956),
                r = a(97800),
                l = a(61484),
                c = a.n(l);
            let d = (e) => {
                let { title: t, className: a, titleClassName: l } = e;
                return (0, n.jsxs)('div', {
                    className: (0, s.$)(c().root, a),
                    children: [
                        (0, n.jsx)(o.Icon, { 'aria-hidden': !0, className: c().icon, variant: 'plus' }),
                        (0, n.jsx)(r.Caption, {
                            variant: 'span',
                            type: 'text',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            className: (0, s.$)(c().title, l),
                            ...(0, i.Am)(i.OA.concert.CONCERT_CARD_CASHBACK),
                            children: t,
                        }),
                    ],
                });
            };
        },
        67937: (e) => {
            e.exports = {
                root: 'ConcertCard_root__fcR9B',
                root_withConcertsRedesign: 'ConcertCard_root_withConcertsRedesign__0g8bs',
                ripple: 'ConcertCard_ripple__PW4xI',
                date: 'ConcertCard_date__ECoa3',
                dateWithMask: 'ConcertCard_dateWithMask__si35m',
                important: 'ConcertCard_important__dQYxN',
                dateColor: 'ConcertCard_dateColor__muPRD',
                button: 'ConcertCard_button__GQxNL',
            };
        },
        72113: (e) => {
            e.exports = {
                shuffleIcon_off: 'ShuffleButton_shuffleIcon_off___oqrr',
                shuffleIcon_on: 'ShuffleButton_shuffleIcon_on__qFJqV',
                shuffleIcon_disabled: 'ShuffleButton_shuffleIcon_disabled__fQsOo',
            };
        },
        72309: (e) => {
            e.exports = { root: 'SonataVideoControls_root__mHglL' };
        },
        73219: (e, t, a) => {
            'use strict';
            a.d(t, { ConcertImage: () => h });
            var n = a(54486),
                s = a(50420),
                i = a(28303),
                o = a(31500),
                r = a(27510),
                l = a(58360),
                c = a(83252),
                d = a(15209);
            let u = (e) => (0, d.httpsReplacer)(e.replace('%%', '960x690_noncrop'));
            var m = a(64543),
                p = a(56689),
                _ = a(36245),
                v = a.n(_);
            let h = (0, i.PA)((e) => {
                let { uri: t, withMask: a, datetime: i, coverColor: d } = e,
                    { experiments: _ } = (0, c.Pjs)(),
                    h = _.checkExperiment(c.zal.NewConcertsTicketRedesign, 'on') && a,
                    C = (0, r.L)(() => {
                        if (d) return { '--concert-image-date-background': (0, m.J)(d) };
                    });
                return (0, n.jsxs)('div', {
                    className: (0, s.$)(v().root, { [v().root_withMask]: h }),
                    style: C,
                    children: [
                        (0, n.jsx)(l.Image, {
                            className: v().image,
                            fit: 'cover',
                            src: t,
                            withAvatarReplace: !0,
                            createUrlReplacer: u,
                            'aria-hidden': !0,
                            ...(0, o.Am)(o.OA.concert.CONCERT_CARD_IMAGE),
                        }),
                        i &&
                            (0, n.jsx)(p.ConcertDate, {
                                dayClassName: v().day,
                                weekdayClassName: (0, s.$)(v().weekday, v().important),
                                monthClassName: v().month,
                                className: v().date,
                                datetime: i,
                            }),
                    ],
                });
            });
        },
        73401: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => i });
            var n = a(54486),
                s = a(80585);
            let i = (e) => {
                let { disabled: t, isPlaying: a, onClickPlayPause: i, className: o } = e;
                return (0, n.jsx)(s.DM, { className: o, size: 's', iconSize: 'xs', disabled: t, isPlaying: a, onClick: i });
            };
        },
        74391: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => o });
            var n = a(97396),
                s = a(61910),
                i = a(83252);
            let o = () => {
                let e = (0, n.useSearchParams)();
                return (0, s.useCallback)(
                    (t) => {
                        let a = e.get(i.K3F.UTM_CAMPAIGN);
                        if (!a) return t;
                        let n = new URLSearchParams();
                        return n.set(i.K3F.UTM_SOURCE, 'campaignid_'.concat(a)), (0, i.Cvn)(t, n);
                    },
                    [e],
                );
            };
        },
        74627: (e, t, a) => {
            'use strict';
            a.d(t, { DonationButton: () => m });
            var n = a(54486),
                s = a(28303),
                i = a(61910),
                o = a(43426),
                r = a(15209),
                l = a(31500),
                c = a(77881),
                d = a(5956);
            let u = (0, s.PA)((e) => {
                    let { onClick: t, className: a, size: s = 's', iconSize: i = 'xxs', forwardRef: u, ...m } = e,
                        { formatMessage: p } = (0, o.A)();
                    return (0, n.jsx)(c.$, {
                        ref: u,
                        size: s,
                        variant: 'default',
                        radius: 'round',
                        color: 'secondary',
                        onClick: t,
                        className: a,
                        'aria-label': p({ id: 'donation.button-text' }),
                        icon: (0, n.jsx)(d.Icon, { size: i, variant: 'ruble' }),
                        ...(0, r.getDataAttrFromProps)(m),
                        ...(0, l.Am)(l.S7.DONATION_BUTTON),
                    });
                }),
                m = (0, i.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e }));
        },
        74890: (e) => {
            e.exports = {
                repeatIcon_none: 'RepeatButton_repeatIcon_none__2nb1J',
                repeatIcon_context: 'RepeatButton_repeatIcon_context__QwVY9',
                repeatIcon_one: 'RepeatButton_repeatIcon_one___mSkU',
                repeatIcon_disabled: 'RepeatButton_repeatIcon_disabled__LwHV_',
            };
        },
        77091: (e, t, a) => {
            'use strict';
            a.d(t, { SonataControls: () => j });
            var n = a(54486),
                s = a(50420),
                i = a(28303),
                o = a(61910),
                r = a(8817),
                l = a(83252),
                c = a(21050),
                d = a(84096),
                u = a(29476),
                m = a(73401),
                p = a(40632),
                _ = a.n(p),
                v = a(33506),
                h = a(43426),
                C = a(31500),
                x = a(77881),
                g = a(5956),
                f = a(80585),
                N = a(16045),
                b = a(93011),
                A = a(20765),
                y = a.n(A);
            let k = (0, i.PA)((e) => {
                let {
                        disabled: t,
                        isPlaying: a,
                        repeatMode: i,
                        canMoveForward: o,
                        canMoveBackward: r,
                        canRewind: c,
                        canShuffle: d,
                        onClickNext: u,
                        onClickPrev: m,
                        onRewindBackwardsClick: p,
                        onRewindForwardClick: _,
                        onClickPlayPause: v,
                        canChangeRepeatMode: A,
                        shuffle: k,
                        className: w,
                        onRepeatClick: I,
                        onShuffleClick: S,
                    } = e,
                    { formatMessage: O } = (0, h.A)(),
                    { experiments: E } = (0, l.Pjs)(),
                    j = E.checkExperiment(l.zal.WebNextPlayerBarYellowButton, 'on');
                return (0, n.jsxs)('div', {
                    className: (0, s.$)(y().root, w),
                    children: [
                        (0, n.jsxs)('div', {
                            className: y().buttonContainer,
                            children: [
                                (t || d) &&
                                    (0, n.jsx)(b.ShuffleButton, {
                                        className: y().sonataButton,
                                        size: 's',
                                        iconSize: 'xxs',
                                        color: 'secondary',
                                        isDisabled: t,
                                        shuffle: k,
                                        onClick: S,
                                        ...(0, C.Am)(C.Kq.sonata.SHUFFLE_BUTTON),
                                    }),
                                !t &&
                                    c &&
                                    (0, n.jsx)(x.$, {
                                        className: (0, s.$)(y().sonataButton, y().rewind),
                                        color: 'secondary',
                                        size: 'm',
                                        radius: 'round',
                                        withRipple: !1,
                                        'aria-label': O({ id: 'player-actions.rewind-backwards' }),
                                        icon: (0, n.jsx)(g.Icon, { variant: 'rewindBackwards', size: 'xxs' }),
                                        onClick: p,
                                        ...(0, C.Am)(C.Kq.sonata.REWIND_BACKWARDS_BUTTON),
                                    }),
                            ],
                        }),
                        (0, n.jsxs)('div', {
                            className: y().sonataButtons,
                            children: [
                                (0, n.jsx)(x.$, {
                                    className: y().sonataButton,
                                    color: 'secondary',
                                    size: 'm',
                                    radius: 'round',
                                    disabled: !r,
                                    withRipple: !1,
                                    'aria-label': O({ id: 'player-actions.previous-track' }),
                                    icon: (0, n.jsx)(g.Icon, { variant: 'previous', size: 'xxs' }),
                                    onClick: m,
                                    ...(0, C.Am)(C.Kq.sonata.PREVIOUS_TRACK_BUTTON),
                                }),
                                (0, n.jsx)(f.DM, {
                                    className: (0, s.$)(y().sonataButton, y().sonataPlayButton),
                                    iconSize: 'm',
                                    size: 'l',
                                    radius: 'round',
                                    color: 'secondary',
                                    buttonVariant: 'default',
                                    isPlaying: a,
                                    iconClassName: (0, s.$)(y().playPauseButtonIcon, { [y().playPauseButtonIcon_withYellowPlayButton]: j }),
                                    onClick: v,
                                }),
                                (0, n.jsx)(x.$, {
                                    className: y().sonataButton,
                                    radius: 'round',
                                    size: 'm',
                                    color: 'secondary',
                                    disabled: !o,
                                    withRipple: !1,
                                    'aria-label': O({ id: 'player-actions.next-track' }),
                                    icon: (0, n.jsx)(g.Icon, { variant: 'next', size: 'xxs' }),
                                    onClick: u,
                                    ...(0, C.Am)(C.Kq.sonata.NEXT_TRACK_BUTTON),
                                }),
                            ],
                        }),
                        (0, n.jsxs)('div', {
                            className: y().buttonContainer,
                            children: [
                                !t &&
                                    c &&
                                    (0, n.jsx)(x.$, {
                                        className: (0, s.$)(y().sonataButton, y().rewind),
                                        color: 'secondary',
                                        size: 'm',
                                        radius: 'round',
                                        withRipple: !1,
                                        'aria-label': O({ id: 'player-actions.rewind-forward' }),
                                        icon: (0, n.jsx)(g.Icon, { variant: 'rewindForward', size: 'xxs' }),
                                        onClick: _,
                                        ...(0, C.Am)(C.Kq.sonata.REWIND_FORWARD_BUTTON),
                                    }),
                                (t || A) &&
                                    (0, n.jsx)(N.RepeatButton, {
                                        className: y().sonataButton,
                                        size: 's',
                                        color: 'secondary',
                                        isDisabled: t,
                                        iconSize: 'xxs',
                                        repeatMode: i,
                                        onClick: I,
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var w = a(63585),
                I = a(54460),
                S = a(46521),
                O = a.n(S);
            let E = (0, i.PA)((e) => {
                    let {
                            isPlaying: t,
                            canMoveForward: a,
                            canMoveBackward: i,
                            canRewind: r,
                            onClickNext: c,
                            onClickPrev: d,
                            onRewindBackwardsClick: u,
                            onRewindForwardClick: m,
                            onClickPlayPause: p,
                            className: _,
                        } = e,
                        { formatMessage: v } = (0, h.A)(),
                        { user: N, sonataState: b } = (0, l.Pjs)(),
                        A = (0, l.zwV)(),
                        y = b.entityMeta,
                        k = b.contextType === w.K.Generative,
                        S = N.isAuthorized && !k,
                        E = (0, I.KX)(b.entityMeta),
                        j = (0, I.mW)(b.entityMeta);
                    (0, o.useEffect)(() => {
                        if (!b.isGenerativeContext)
                            return (
                                null == A || A.addShortcutsListener(l.Mo.MAIN, l.lbr.LIKE, E),
                                null == A || A.addShortcutsListener(l.Mo.MAIN, l.lbr.DISLIKE, j),
                                () => {
                                    null == A || A.removeShortcutsListener(l.Mo.MAIN, l.lbr.LIKE), null == A || A.removeShortcutsListener(l.Mo.MAIN, l.lbr.DISLIKE);
                                }
                            );
                    }, [j, E, A, b.isGenerativeContext]);
                    let R = (0, o.useMemo)(
                            () =>
                                r
                                    ? (0, n.jsx)(x.$, {
                                          className: O().sonataButton,
                                          variant: 'text',
                                          color: 'secondary',
                                          size: 'm',
                                          radius: 'round',
                                          withRipple: !1,
                                          'aria-label': v({ id: 'player-actions.rewind-backwards' }),
                                          icon: (0, n.jsx)(g.Icon, { variant: 'rewindBackwards', size: 'xs' }),
                                          onClick: u,
                                          ...(0, C.Am)(C.Kq.sonata.MOBILE_REWIND_BACKWARDS_BUTTON),
                                      })
                                    : (0, n.jsx)(x.$, {
                                          className: O().sonataButton,
                                          variant: 'text',
                                          color: 'secondary',
                                          size: 'm',
                                          radius: 'round',
                                          disabled: !i,
                                          withRipple: !1,
                                          'aria-label': v({ id: 'player-actions.previous-track' }),
                                          icon: (0, n.jsx)(g.Icon, { variant: 'previous', size: 'xs' }),
                                          onClick: d,
                                          ...(0, C.Am)(C.Kq.sonata.MOBILE_PREVIOUS_TRACK_BUTTON),
                                      }),
                            [r, i, v, d, u],
                        ),
                        M = (0, o.useMemo)(
                            () =>
                                r
                                    ? (0, n.jsx)(x.$, {
                                          className: O().sonataButton,
                                          variant: 'text',
                                          radius: 'round',
                                          size: 'm',
                                          color: 'secondary',
                                          disabled: !a,
                                          withRipple: !1,
                                          'aria-label': v({ id: 'player-actions.rewind-forward' }),
                                          icon: (0, n.jsx)(g.Icon, { variant: 'rewindForward', size: 'xs' }),
                                          onClick: m,
                                          ...(0, C.Am)(C.Kq.sonata.MOBILE_REWIND_FORWARD_BUTTON),
                                      })
                                    : (0, n.jsx)(x.$, {
                                          className: O().sonataButton,
                                          variant: 'text',
                                          radius: 'round',
                                          size: 'm',
                                          color: 'secondary',
                                          disabled: !a,
                                          withRipple: !1,
                                          'aria-label': v({ id: 'player-actions.next-track' }),
                                          icon: (0, n.jsx)(g.Icon, { variant: 'next', size: 'xs' }),
                                          onClick: c,
                                          ...(0, C.Am)(C.Kq.sonata.MOBILE_NEXT_TRACK_BUTTON),
                                      }),
                            [r, a, v, c, m],
                        );
                    return (0, n.jsxs)('div', {
                        className: (0, s.$)(O().root, _),
                        children: [
                            (0, n.jsx)('div', {
                                className: O().buttonContainer,
                                children: y && S && (0, n.jsx)(f.aQ, { fallback: (0, n.jsx)(f._I, { isDisliked: y.isDisliked, iconSize: 'xs', onClick: j }) }),
                            }),
                            (0, n.jsxs)('div', {
                                className: O().sonataButtons,
                                children: [
                                    R,
                                    (0, n.jsx)(f.DM, {
                                        className: O().sonataButton,
                                        iconSize: 'xxl',
                                        variant: 'filled',
                                        color: 'secondary',
                                        isPlaying: t,
                                        iconClassName: O().playPauseButtonIcon,
                                        onClick: p,
                                    }),
                                    M,
                                ],
                            }),
                            (0, n.jsx)('div', {
                                className: O().buttonContainer,
                                children:
                                    y &&
                                    S &&
                                    (0, n.jsx)(f.aQ, { fallback: (0, n.jsx)(f.cy, { isLiked: y.isLiked, iconSize: 'xs', onClick: E, disabled: !N.isAuthorized }) }),
                            }),
                        ],
                    });
                }),
                j = (0, i.PA)((e) => {
                    var t, a;
                    let { isMobile: i, entityMeta: p, isFullscreen: h, className: C, withShuffle: x, withRepeat: g } = e,
                        {
                            sonataState: f,
                            vibe: N,
                            advert: b,
                            modals: { popoverOverPlayer: A },
                            experiments: y,
                        } = (0, l.Pjs)(),
                        w = y.checkExperiment(l.zal.WebNextPlayerBarYellowButton, 'on'),
                        I = (0, l.zwV)(),
                        S = (0, l.eGp)(),
                        { rewindBackwards: O, rewindForward: j } = (() => {
                            let {
                                    sonataState: { entityMeta: e },
                                } = (0, l.Pjs)(),
                                t = (0, l.eGp)();
                            return {
                                rewindBackwards: (0, o.useCallback)(() => {
                                    if (!t || !e || !e.durationMs) return;
                                    let a = t.state.playerState.progress.value.position - 15;
                                    t.setProgress(a < 0 ? 0 : a);
                                }, [e, t]),
                                rewindForward: (0, o.useCallback)(() => {
                                    if (!t || !e || !e.durationMs) return;
                                    let a = e.durationMs / 1e3,
                                        n = t.state.playerState.progress.value.position + 30;
                                    t.setProgress(n < a ? n : a);
                                }, [e, t]),
                            };
                        })(),
                        R = (0, l.rs2)(),
                        M = (0, l.brA)(),
                        T = (null == p ? void 0 : p.isNonMusic) && !b.isAdvertShown,
                        P = (0, l.PT7)(),
                        { togglePlay: B } = (0, l.B0S)({
                            seeds: null != (a = null == (t = N.meta) ? void 0 : t.seeds) ? a : [],
                            pageIdForFrom: l._Q$.HOME,
                            blockIdForFrom: l.hf$.RUP_MAIN_RADIO,
                            onPlayInterrupted: A.open,
                        }),
                        K = (0, o.useMemo)(() => (b.isAdvertShown ? b.isAdvertPlaying : c.w.includes(f.status)), [f.status, b.isAdvertShown, b.isAdvertPlaying]),
                        D = (0, r.c)(() => {
                            if (b.isAdvertShown) {
                                var e;
                                null == R || null == (e = R.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            p ? null == S || S.togglePause() : B();
                        }),
                        F = (0, r.c)(() => {
                            (h && P()) || (D(), M(!K));
                        }),
                        L = (0, r.c)(() => {
                            null == S || S.moveForward();
                        }),
                        z = (0, r.c)(() => {
                            null == S || S.moveBackward();
                        }),
                        U = (0, u.useOnShuffleClick)(),
                        G = (0, d.useOnRepeatClick)(),
                        $ = (0, r.c)(() => {
                            G(f);
                        }),
                        V = (0, r.c)(() => {
                            U(f);
                        });
                    (0, o.useEffect)(() => {
                        if (!h && (null == I || I.addShortcutsListener(l.Mo.MAIN, l.lbr.TOGGLE_PLAY, D), !b.isAdvertShown))
                            return (
                                null == I || I.addShortcutsListener(l.Mo.MAIN, l.lbr.TOGGLE_REPEAT, $),
                                null == I || I.addShortcutsListener(l.Mo.MAIN, l.lbr.TOGGLE_SHUFFLE, V),
                                () => {
                                    null == I || I.removeShortcutsListener(l.Mo.MAIN, l.lbr.TOGGLE_PLAY),
                                        b.isAdvertShown ||
                                            (null == I || I.removeShortcutsListener(l.Mo.MAIN, l.lbr.TOGGLE_SHUFFLE),
                                            null == I || I.removeShortcutsListener(l.Mo.MAIN, l.lbr.TOGGLE_REPEAT));
                                }
                            );
                    }, [h, D, $, V, I, b.isAdvertShown]);
                    let W = (0, o.useMemo)(() => (h ? (i ? E : k) : i ? m.K : v.Z), [i, h]);
                    return (0, n.jsx)(W, {
                        className: (0, s.$)(C, { [_().root]: w }),
                        disabled: null === f.entityMeta || (b.isAdvertShown && !i),
                        isPlaying: K || !1,
                        canMoveBackward: f.canMoveBackward && !b.isAdvertShown,
                        canMoveForward: f.canMoveForward && !b.isAdvertShown,
                        withShuffle: x,
                        withRepeat: g,
                        canShuffle: f.canShuffle,
                        shuffle: f.shuffle,
                        onClickPlayPause: F,
                        onClickNext: L,
                        onClickPrev: z,
                        canRewind: T,
                        onRewindBackwardsClick: O,
                        onRewindForwardClick: j,
                        canChangeRepeatMode: f.canChangeRepeatMode,
                        repeatMode: f.repeatMode,
                        onRepeatClick: $,
                        onShuffleClick: V,
                    });
                });
        },
        77217: (e, t, a) => {
            'use strict';
            a.d(t, {
                hW: () => v.AfishaWidget,
                ZH: () => x.ArtistMeta,
                mi: () => h.m,
                VN: () => C.ConcertCard,
                Qb: () => b.ConcertCardWithImage,
                LY: () => I,
                dE: () => S.ConcertDate,
                Wt: () => O.ConcertImage,
                aR: () => _,
                BD: () => E.ConcertsBlock,
                MU: () => g.RedesignedConcertMeta,
                ub: () => f.SearchBestResultsMeta,
                wP: () => N.SearchMeta,
                HN: () => l,
                oP: () => c,
                ho: () => r,
                Yi: () => d.useGetPriceText,
            });
            var n = a(93064);
            let s = /[+-]\d{2}:?\d{2}/,
                i = (e) => (null == e ? void 0 : e.replace(s, '')),
                o = (e) => {
                    if (e) return { value: e.value, currency: e.currency };
                },
                r = (e, t) => {
                    var a, s, r;
                    let { uri: l, color: c } = e.cover || {};
                    return (0, n.wg)({
                        id: e.id,
                        title: e.concertTitle,
                        city: e.city,
                        place: e.place,
                        datetime: e.datetime && i(e.datetime),
                        contentRating: e.contentRating,
                        dataSessionId: e.dataSessionId,
                        cover: { uri: l, color: c },
                        rank: e.rank,
                        cashbackTitle: null == (a = e.cashback) ? void 0 : a.title,
                        price: o(t),
                        eventKind: null == (r = e.eventInfo) || null == (s = r.type) ? void 0 : s.kind,
                    });
                },
                l = (e) => r(e.data.concert, e.data.minPrice),
                c = (e) => {
                    var t, a, s, r;
                    return (0, n.wg)({
                        id: e.id,
                        dataSessionId: null != (r = e['data-session-id']) ? r : '',
                        datetime: e.datetime && i(e.datetime),
                        city: e.city,
                        place: e.place,
                        contentRating: e.contentRating,
                        price: o(e.minPrice),
                        cashbackTitle: null == (t = e.cashback) ? void 0 : t.title,
                        title: e.concertTitle,
                        eventKind: null == (s = e.eventInfo) || null == (a = s.type) ? void 0 : a.kind,
                    });
                };
            a(64543), a(74391);
            var d = a(31820),
                u = a(83252),
                m = a(26433);
            let p = n.gK.model('Price', { value: n.gK.number, currency: n.gK.string }),
                _ = n.gK
                    .model('Concert', {
                        id: n.gK.string,
                        dataSessionId: n.gK.maybe(n.gK.string),
                        datetime: n.gK.maybe(n.gK.string),
                        city: n.gK.maybe(n.gK.string),
                        place: n.gK.maybe(n.gK.string),
                        contentRating: n.gK.maybe(n.gK.string),
                        price: n.gK.maybe(p),
                        cashbackTitle: n.gK.maybe(n.gK.string),
                        title: n.gK.maybe(n.gK.string),
                        cover: n.gK.maybe(m.$B),
                        rank: n.gK.maybe(n.gK.number),
                        eventKind: n.gK.maybe(n.gK.string),
                    })
                    .views((e) => ({
                        get isCashbackExperimentEnabled() {
                            let { experiments: t } = (0, n.Zn)(e);
                            return t.checkExperiment(u.zal.WebNextConcertsCashback, 'on');
                        },
                    }))
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
            var v = a(10351),
                h = a(67340),
                C = a(87184),
                x = a(32949),
                g = a(86778),
                f = a(27654),
                N = a(83952),
                b = a(81217),
                A = a(54486),
                y = a(22674),
                k = a(20065),
                w = a.n(k);
            let I = (e) => {
                let { isActive: t, withPriceButton: a } = e;
                return (0, A.jsxs)('div', {
                    className: w().root,
                    children: [
                        (0, A.jsx)(y.Shimmer, { radius: 'm', className: w().shimmerCover, isActive: t }),
                        (0, A.jsx)('div', { className: w().meta, children: (0, A.jsx)(y.Shimmer, { isActive: t, radius: 'xxxl', className: w().shimmerTitle }) }),
                        a && (0, A.jsx)(y.Shimmer, { isActive: t, radius: 'xxxl', className: w().shimmerButton }),
                    ],
                });
            };
            var S = a(56689),
                O = a(73219),
                E = a(25045);
        },
        78683: (e) => {
            e.exports = { root: 'AfishaWidget_root__Fu9a6', content: 'AfishaWidget_content__YFmbs', widget: 'AfishaWidget_widget__ZdvqS' };
        },
        81217: (e, t, a) => {
            'use strict';
            a.d(t, { ConcertCardWithImage: () => A });
            var n = a(54486),
                s = a(28303),
                i = a(47713),
                o = a(43350),
                r = a(31500),
                l = a(8817),
                c = a(27510),
                d = a(62443),
                u = a(77881),
                m = a(39610),
                p = a(97800),
                _ = a(83252),
                v = a(31820),
                h = a(10351),
                C = a(67340),
                x = a(73219),
                g = a(20065),
                f = a.n(g),
                N = (function (e) {
                    return (e.SPACE = 'Space'), (e.ENTER = 'Enter'), e;
                })(N || {});
            let b = ' • ',
                A = (0, s.PA)((e) => {
                    var t, a, s;
                    let { concert: g, withMask: N = !0, withPriceButton: A } = e,
                        { state: y, toggleTrue: k, toggleFalse: w } = (0, d.e)(!1),
                        { ref: I, intersectionPropertyId: S } = (0, _.nMI)(),
                        { experiments: O } = (0, _.Pjs)(),
                        E = O.checkExperiment(_.zal.WebNextConcertPage, 'on'),
                        j = (0, _.NKK)(),
                        R = (0, v.useGetPriceText)(),
                        { href: M } = (0, _.uvd)('/concert/:concertId', { params: { concertId: g.id } }),
                        T = (0, _.ZpR)(M),
                        P = R(g),
                        B = (0, l.c)((e) => {
                            j({ to: o.QT.ConcertPurchaseScreen }), k(), null == e || e.stopPropagation();
                        }),
                        K = (0, l.c)((e) => {
                            if (!E) return void B(e);
                            T(e);
                        }),
                        D = (0, l.c)((e) => {
                            ('Space' === e.code || 'Enter' === e.code) && (e.preventDefault(), K());
                        }),
                        F = (0, l.c)((e) => {
                            E && (B(e), e.preventDefault());
                        }),
                        L = (0, l.c)((e) => {
                            let t = [];
                            return g.city && t.push(g.city), g.place && t.push(g.place), t.join(e);
                        }),
                        z = (0, c.L)(() => {
                            if (g.isCashbackExperimentEnabled && g.cashbackTitle)
                                return (0, n.jsx)(C.m, { className: f().cashback, titleClassName: f().cashbackTitle, title: g.cashbackTitle });
                        });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsxs)('div', {
                                className: f().root,
                                role: 'button',
                                tabIndex: 0,
                                onClick: K,
                                onKeyDown: D,
                                ref: I,
                                'data-intersection-property-id': S,
                                ...(0, r.Am)(r.OA.concert.CONCERT_CARD),
                                children: [
                                    (0, n.jsx)(m.q, { children: (0, n.jsx)(p.Caption, { variant: 'div', children: (0, n.jsx)(i.A, { id: 'entity-names.concert' }) }) }),
                                    (0, n.jsx)('div', {
                                        className: f().cover,
                                        children: (0, n.jsx)(x.ConcertImage, {
                                            datetime: g.datetime,
                                            coverColor: null == (t = g.cover) ? void 0 : t.color,
                                            uri: null == (a = g.cover) ? void 0 : a.uri,
                                            withMask: N,
                                        }),
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: f().meta,
                                        children: [
                                            (0, n.jsx)(p.Caption, {
                                                variant: 'span',
                                                type: 'controls',
                                                size: 'l',
                                                weight: 'medium',
                                                lineClamp: 1,
                                                className: f().title,
                                                ...(0, r.Am)(r.OA.concert.CONCERT_CARD_TITLE),
                                                children: g.title,
                                            }),
                                            (0, n.jsxs)(p.Caption, {
                                                variant: 'span',
                                                type: 'controls',
                                                weight: 'medium',
                                                className: f().info,
                                                children: [
                                                    (0, n.jsx)(p.Caption, {
                                                        variant: 'span',
                                                        type: 'controls',
                                                        weight: 'medium',
                                                        lineClamp: 1,
                                                        className: f().location,
                                                        'aria-label': L(' '),
                                                        ...(0, r.Am)(r.OA.concert.CONCERT_CARD_LOCATION),
                                                        children: L(b),
                                                    }),
                                                    (0, n.jsx)(p.Caption, {
                                                        'aria-hidden': !0,
                                                        className: f().separator,
                                                        variant: 'span',
                                                        type: 'controls',
                                                        weight: 'medium',
                                                        children: b,
                                                    }),
                                                    (0, n.jsx)(p.Caption, {
                                                        variant: 'span',
                                                        type: 'controls',
                                                        weight: 'medium',
                                                        className: f().rating,
                                                        ...(0, r.Am)(r.OA.concert.CONCERT_CARD_CONTENT_RATING),
                                                        children: g.contentRating,
                                                    }),
                                                ],
                                            }),
                                            z,
                                        ],
                                    }),
                                    (null == (s = g.price) ? void 0 : s.value) && (0, n.jsx)(m.q, { children: (0, n.jsx)(p.Caption, { variant: 'div', children: P }) }),
                                    A &&
                                        (0, n.jsx)(u.$, {
                                            'aria-hidden': !0,
                                            tabIndex: -1,
                                            radius: 'xxxl',
                                            className: f().button,
                                            size: 'default',
                                            variant: 'default',
                                            color: 'primary',
                                            onClick: F,
                                            ...(0, r.Am)(r.OA.concert.CONCERT_CARD_BUTTON),
                                            children: P,
                                        }),
                                ],
                            }),
                            (0, n.jsx)(h.AfishaWidget, { dataSessionId: g.dataSessionId, isOpened: y, onOpen: k, onClose: w }),
                        ],
                    });
                });
        },
        83675: (e, t, a) => {
            'use strict';
            a.d(t, { a: () => v });
            var n = a(54486),
                s = a(50420),
                i = a(28303),
                o = a(43426),
                r = a(31500),
                l = a(8817),
                c = a(77881),
                d = a(5956),
                u = a(16045),
                m = a(93011),
                p = a(91129),
                _ = a.n(p);
            let v = (0, i.PA)((e) => {
                let {
                        className: t,
                        withShuffle: a,
                        shuffle: i,
                        canMoveBackward: p,
                        canMoveForward: v,
                        onClickNext: h,
                        onClickPrev: C,
                        withRepeat: x,
                        repeatMode: g,
                        playButton: f,
                        isDisabledShuffle: N,
                        isDisabledRepeat: b,
                        onRepeatClick: A,
                        onShuffleClick: y,
                    } = e,
                    { formatMessage: k } = (0, o.A)(),
                    w = (0, l.c)(() => {
                        h();
                    }),
                    I = (0, l.c)(() => {
                        C();
                    });
                return (0, n.jsxs)('div', {
                    className: (0, s.$)(_().root, t),
                    children: [
                        a &&
                            (0, n.jsx)('div', {
                                className: _().buttonContainer,
                                children: (0, n.jsx)(m.ShuffleButton, {
                                    className: _().sonataButton,
                                    size: 'xxxs',
                                    variant: 'text',
                                    iconSize: 'xs',
                                    isDisabled: N,
                                    shuffle: i,
                                    onClick: y,
                                    ...(0, r.Am)(r.Kq.sonata.SHUFFLE_BUTTON),
                                }),
                            }),
                        (0, n.jsxs)('div', {
                            className: _().sonataButtons,
                            children: [
                                (0, n.jsx)(c.$, {
                                    className: _().sonataButton,
                                    variant: 'text',
                                    size: 'm',
                                    radius: 'round',
                                    'aria-hidden': !p,
                                    disabled: !p,
                                    withRipple: !1,
                                    'aria-label': k({ id: 'player-actions.previous-track' }),
                                    icon: (0, n.jsx)(d.Icon, { variant: 'previous', size: 'xxs' }),
                                    onClick: I,
                                    ...(0, r.Am)(r.Kq.sonata.PREVIOUS_TRACK_BUTTON),
                                }),
                                f,
                                (0, n.jsx)(c.$, {
                                    className: _().sonataButton,
                                    radius: 'round',
                                    size: 'm',
                                    variant: 'text',
                                    disabled: !v,
                                    'aria-hidden': !v,
                                    withRipple: !1,
                                    'aria-label': k({ id: 'player-actions.next-track' }),
                                    icon: (0, n.jsx)(d.Icon, { variant: 'next', size: 'xxs' }),
                                    onClick: w,
                                    ...(0, r.Am)(r.Kq.sonata.NEXT_TRACK_BUTTON),
                                }),
                            ],
                        }),
                        x &&
                            (0, n.jsx)('div', {
                                className: _().buttonContainer,
                                children: (0, n.jsx)(u.RepeatButton, {
                                    className: _().sonataButton,
                                    size: 'xxxs',
                                    variant: 'text',
                                    isDisabled: b,
                                    iconSize: 'xs',
                                    repeatMode: g,
                                    onClick: A,
                                }),
                            }),
                    ],
                });
            });
        },
        83952: (e, t, a) => {
            'use strict';
            a.d(t, { SearchMeta: () => l });
            var n = a(54486),
                s = a(28303),
                i = a(97800),
                o = a(48516),
                r = a.n(o);
            let l = (0, s.PA)((e) => {
                let { id: t, concert: a } = e;
                return (0, n.jsxs)('div', {
                    className: r().root,
                    id: t,
                    children: [
                        (0, n.jsx)(i.Caption, { variant: 'div', size: 'm', weight: 'medium', className: r().city, lineClamp: 1, children: null == a ? void 0 : a.title }),
                        (0, n.jsx)(i.Caption, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: null == a ? void 0 : a.city }),
                        (0, n.jsx)(i.Caption, { variant: 'span', size: 'm', weight: 'medium', children: null == a ? void 0 : a.contentRating }),
                    ],
                });
            });
        },
        84096: (e, t, a) => {
            'use strict';
            a.d(t, { useOnRepeatClick: () => l });
            var n = a(54486),
                s = a(3269),
                i = a(8817),
                o = a(83252),
                r = a(94953);
            let l = () => {
                let { notify: e } = (0, o.lkh)(),
                    { fullscreenPlayer: t } = (0, o.Pjs)(),
                    a = (0, o.eGp)();
                return (0, i.c)((i, l) => {
                    if (null === i.entityMeta || !i.canChangeRepeatMode) return;
                    let c = ((e, t) => (t ? (e === s.pM.NONE ? s.pM.ONE : s.pM.NONE) : e === s.pM.NONE ? s.pM.CONTEXT : e === s.pM.CONTEXT ? s.pM.ONE : s.pM.NONE))(
                        i.repeatMode,
                        i.isVibeContext,
                    );
                    null == a || a.setRepeatMode(c, l),
                        e((0, n.jsx)(r.NotificationRepeat, { repeatMode: c }), { containerId: t.modal.isOpened ? o.uQT.FULLSCREEN_INFO : o.uQT.INFO });
                });
            };
        },
        86778: (e, t, a) => {
            'use strict';
            a.d(t, { RedesignedConcertMeta: () => u });
            var n = a(54486),
                s = a(28303),
                i = a(61910),
                o = a(47713),
                r = a(97800),
                l = a(67340),
                c = a(48516),
                d = a.n(c);
            let u = (0, s.PA)((e) => {
                let { id: t, concert: a } = e,
                    s = [],
                    c = (0, n.jsx)(r.Caption, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                return (
                    (null == a ? void 0 : a.eventKind)
                        ? s.push(
                              (0, n.jsx)(r.Caption, {
                                  variant: 'span',
                                  size: 'm',
                                  weight: 'medium',
                                  children: (0, n.jsx)(o.A, { id: 'concerts.event-kind', values: { kind: a.eventKind } }),
                              }),
                          )
                        : (null == a ? void 0 : a.place) &&
                          s.push((0, n.jsx)(r.Caption, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: a.place })),
                    (null == a ? void 0 : a.contentRating) &&
                        s.push(c, (0, n.jsx)(r.Caption, { variant: 'span', size: 'm', weight: 'medium', children: a.contentRating })),
                    (0, n.jsxs)('div', {
                        className: d().root,
                        id: t,
                        children: [
                            (0, n.jsx)(r.Caption, {
                                variant: 'div',
                                size: 'm',
                                weight: 'medium',
                                className: d().city,
                                lineClamp: 1,
                                children: null == a ? void 0 : a.title,
                            }),
                            (0, n.jsx)('div', { className: d().info, children: s.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            (null == a ? void 0 : a.city) && (0, n.jsx)(r.Caption, { variant: 'div', size: 'm', weight: 'medium', lineClamp: 1, children: a.city }),
                            (null == a ? void 0 : a.isCashbackExperimentEnabled) &&
                                (null == a ? void 0 : a.cashbackTitle) &&
                                (0, n.jsx)(l.m, { className: d().cashback, title: a.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        87184: (e, t, a) => {
            'use strict';
            a.d(t, { ConcertCard: () => b });
            var n = a(54486),
                s = a(50420),
                i = a(28303),
                o = a(61910),
                r = a(43350),
                l = a(31500),
                c = a(8817),
                d = a(62443),
                u = a(73633),
                m = a(77881),
                p = a(6971),
                _ = a(83252),
                v = a(4991),
                h = a(62395),
                C = a(31820),
                x = a(10351),
                g = a(56689),
                f = a(67937),
                N = a.n(f);
            let b = (0, i.PA)((e) => {
                let {
                        artistId: t,
                        concert: a,
                        meta: i,
                        viewUuid: f,
                        radius: b = 'l',
                        className: A,
                        shouldSendAnalyticsOnHide: y,
                        forceAfishaWidget: k,
                        shouldShowMask: w,
                    } = e,
                    { state: I, toggleTrue: S, toggleFalse: O } = (0, d.e)(!1),
                    { experiments: E } = (0, _.Pjs)(),
                    j = E.checkExperiment(_.zal.WebNextConcertsIdentityFullRedesign, 'on'),
                    R = !k && E.checkExperiment(_.zal.WebNextConcertPage, 'on'),
                    { href: M } = (0, _.uvd)('/concert/:concertId', { params: { concertId: a.id } }),
                    T = (0, _.ZpR)(M),
                    P = ((e) => {
                        let { artistId: t, viewUuid: a } = e,
                            n = (0, h.st)(),
                            { hash: s } = (0, h.gf)(),
                            { pageId: i } = (0, _.$au)(),
                            { objectsCount: l, objectType: c, objectId: d, objectPosX: u, objectPosY: m, objectPos: p } = (0, _.Jfv)(),
                            v = (0, _.UlF)(),
                            C = (0, o.useCallback)(() => {
                                let e = (0, r.Fx)({
                                    params: { hash: s, artistId: t, objectsCount: l, objectType: c, objectId: d, objectPosX: u, objectPosY: m },
                                    logger: v,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                n && e && (0, r.HB)(n.evgenInstance, e);
                            }, [n, t, s, v, d, u, m, c, l]),
                            x = (0, o.useCallback)(() => {
                                let e = (0, r.Fx)({
                                    params: { hash: s, artistId: t, viewUuid: a, objectId: d, objectPos: p },
                                    logger: v,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                n && e && a && (0, r.Z4)(n.evgenInstance, e);
                            }, [n, t, s, v, d, p, a]);
                        return (0, o.useCallback)(() => {
                            if (n && i && _.xKB.includes(i))
                                switch (i) {
                                    case _._Q$.ARTIST:
                                    case _._Q$.CONCERT:
                                        C();
                                        break;
                                    case _._Q$.ARTIST_CONCERTS:
                                        x();
                                }
                        }, [n, i, x, C]);
                    })({ artistId: t, viewUuid: f }),
                    B = (0, v.m)({ artistId: t, viewUuid: f }),
                    { ref: K, intersectionPropertyId: D } = (0, _.nMI)({ callback: null !== t ? P : void 0, singleEvent: !y }),
                    F = (0, o.useId)(),
                    L = (0, o.useId)(),
                    z = (0, C.useGetPriceText)()(a),
                    U = (0, c.c)((e) => {
                        (0, u.P)(e, N().ripple), R && T(e);
                    }),
                    G = (0, c.c)((e) => {
                        S(), B(r.H2.ConcertPurchaseScreen), e.stopPropagation(), e.preventDefault();
                    });
                return (0, n.jsxs)(p.Paper, {
                    radius: b,
                    className: (0, s.$)(N().root, A, { [N().root_withConcertsRedesign]: j }),
                    ref: K,
                    'data-intersection-property-id': D,
                    onClick: U,
                    children: [
                        a.datetime &&
                            (0, n.jsx)(g.ConcertDate, {
                                datetime: a.datetime,
                                id: F,
                                className: (0, s.$)(N().date, { [N().dateWithMask]: w, [N().important]: w }),
                                dayClassName: N().dateColor,
                                monthClassName: N().dateColor,
                            }),
                        (0, o.cloneElement)(i, { id: L, concert: a }),
                        a.dataSessionId &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(m.$, {
                                        color: 'primary',
                                        radius: 'xxxl',
                                        className: N().button,
                                        'aria-describedby': ''.concat(F, ' ').concat(L),
                                        'aria-label': z,
                                        onClick: G,
                                        ...(0, l.Am)(l.OA.concert.CONCERT_CARD_BUTTON),
                                        children: z,
                                    }),
                                    (0, n.jsx)(x.AfishaWidget, { dataSessionId: a.dataSessionId, isOpened: I, onOpen: S, onClose: O }),
                                ],
                            }),
                    ],
                });
            });
        },
        87537: (e) => {
            e.exports = { icon: 'NotificationShuffle_icon__U_ape', message: 'NotificationShuffle_message__BNxJm', icon_unset: 'NotificationShuffle_icon_unset__y1jg_' };
        },
        91097: (e) => {
            e.exports = {
                root: 'DonationCarousel_root__Uejjw',
                controls: 'DonationCarousel_controls__anVvP',
                item: 'DonationCarousel_item__89_B6',
                important: 'DonationCarousel_important__Y52Es',
            };
        },
        91129: (e) => {
            e.exports = {
                root: 'BaseSonataControlsDesktop_root__E6wjA',
                sonataButtons: 'BaseSonataControlsDesktop_sonataButtons__7vLtw',
                sonataButton: 'BaseSonataControlsDesktop_sonataButton__GbwFt',
                playButtonIcon: 'BaseSonataControlsDesktop_playButtonIcon__TlFqv',
                buttonContainer: 'BaseSonataControlsDesktop_buttonContainer__EB404',
            };
        },
        93011: (e, t, a) => {
            'use strict';
            a.d(t, { ShuffleButton: () => m });
            var n = a(54486),
                s = a(50420),
                i = a(43426),
                o = a(31500),
                r = a(8817),
                l = a(77881),
                c = a(5956),
                d = a(72113),
                u = a.n(d);
            let m = (e) => {
                let { isDisabled: t, shuffle: a, className: d, size: m = 'xxxs', variant: p = 'default', iconSize: _ = 'xs', color: v, onClick: h } = e,
                    { formatMessage: C } = (0, i.A)(),
                    x = (0, r.c)((e) => {
                        null == h || h(), e.stopPropagation();
                    });
                return (0, n.jsx)(l.$, {
                    className: d,
                    radius: 'round',
                    size: m,
                    variant: p,
                    color: v,
                    withRipple: !1,
                    disabled: t,
                    'aria-label': C({ id: 'player-actions.shuffle' }),
                    'aria-pressed': !t && a,
                    'aria-hidden': t,
                    icon: (0, n.jsx)(c.Icon, {
                        variant: 'shuffle',
                        size: _,
                        className: (0, s.$)(u().shuffleIcon, { [u().shuffleIcon_disabled]: t, [u().shuffleIcon_on]: !t && a, [u().shuffleIcon_off]: !t && !a }),
                    }),
                    onClick: x,
                    ...(0, o.Am)(!a || t ? o.Kq.sonata.SHUFFLE_BUTTON : o.Kq.sonata.SHUFFLE_BUTTON_ON),
                });
            };
        },
        94953: (e, t, a) => {
            'use strict';
            a.d(t, { NotificationRepeat: () => p });
            var n = a(54486),
                s = a(50420),
                i = a(43426),
                o = a(3269),
                r = a(5956),
                l = a(39610),
                c = a(97800),
                d = a(80585),
                u = a(15647),
                m = a.n(u);
            let p = (e) => {
                let t,
                    { repeatMode: a, closeToast: u } = e,
                    { formatMessage: p } = (0, i.A)(),
                    _ = a === o.pM.ONE ? 'repeat_one' : 'repeat';
                switch (a) {
                    case o.pM.CONTEXT:
                        t = p({ id: 'notifications-info.change-repeat-context' });
                        break;
                    case o.pM.ONE:
                        t = p({ id: 'notifications-info.change-repeat-track' });
                        break;
                    case o.pM.NONE:
                    default:
                        t = p({ id: 'notifications-info.change-repeat-none' });
                }
                return (0, n.jsx)(d.$W, {
                    cover: (0, n.jsx)(r.Icon, { className: (0, s.$)(m().icon, { [m().icon_unset]: a === o.pM.NONE }), size: 'xs', variant: _ }),
                    message: (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(l.q, { children: (0, n.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, n.jsx)(c.Caption, { className: m().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: u,
                    coverRadius: 's',
                });
            };
        },
        97719: (e, t, a) => {
            'use strict';
            a.d(t, {
                QQ: () => I,
                Op: () => S,
                x5: () => w,
                jh: () => E.PromoLandingSonataControls,
                s_: () => j.RepeatButton,
                uP: () => R.ShuffleButton,
                $u: () => M.SonataControls,
                bG: () => O,
                qF: () => T.SonataVideoControls,
                EX: () => r,
                li: () => c,
                pE: () => m,
                m4: () => p.useOnModifyPlayQueueBatch,
                AA: () => _.useOnRepeatClick,
                e9: () => v.useOnShuffleClick,
                d0: () => h.useToggleMute,
            });
            var n = a(93064),
                s = a(5693),
                i = a(63695),
                o = a(83252);
            let r = (e) => {
                if (e.data.type !== s.R.Clip) return null;
                {
                    var t;
                    let a = e.data.meta;
                    if (!a.clipId) return null;
                    let s = null == (t = a.artists) ? void 0 : t.map((e) => (0, i.as)({ artist: e })),
                        { available: r, disclaimers: l } = (0, o.fyr)(a);
                    return (0, n.wg)({
                        clipId: a.clipId,
                        title: a.title,
                        thumbnail: a.thumbnail,
                        duration: a.duration,
                        previewUrl: a.previewUrl,
                        isAvailable: r,
                        disclaimers: l,
                        artists: s,
                        isHiddenFromSonataQueue: e.hidden,
                    });
                }
            };
            var l = a(89461);
            let c = (e, t) => ({ type: l.z4.Unloaded, meta: { id: e, albumId: t } });
            var d = a(46423),
                u = a(54460);
            let m = (e) => {
                var t, a, r;
                switch (e.data.type) {
                    case s.R.Generative: {
                        let a = e.data.meta,
                            s = (0, o.QBb)(null == a ? void 0 : a.derivedColors);
                        return (0, n.wg)({
                            id: String(a.id),
                            coverUri: a.imageUrl,
                            title: null != (t = a.title) ? t : '',
                            isAvailable: !0,
                            isRemoved: !1,
                            averageColor: s,
                        });
                    }
                    case s.R.Clip:
                    case l.z4.Unloaded:
                    case s.R.Radio:
                        return null;
                    default: {
                        let t = e.data.meta,
                            s = null == (a = t.artists) ? void 0 : a.map(i.dM),
                            o = null == (r = t.albums) ? void 0 : r.map(d.e7);
                        return (0, n.wg)({ ...(0, u.gK)(t), artists: s, albums: o, isHiddenFromSonataQueue: e.hidden });
                    }
                }
            };
            var p = a(38246),
                _ = a(84096),
                v = a(29476),
                h = a(23897),
                C = a(98388),
                x = a(63930),
                g = a(63585),
                f = a(30630),
                N = a(3269);
            let b = n.gK.model('UnloadedEntityMeta', { id: n.gK.union(n.gK.number, n.gK.string), albumId: n.gK.maybe(n.gK.union(n.gK.number, n.gK.string)) }),
                A = n.gK.model('UnloadedEntityData', { meta: b, type: n.gK.literal(l.z4.Unloaded) });
            var y = a(8075),
                k = a(42140);
            let w = u.OQ.props({ artists: n.gK.array(i.PK), albums: n.gK.array(d.GI), chart: n.gK.maybe(k.Iz), isHiddenFromSonataQueue: n.gK.maybe(n.gK.boolean) })
                    .views((e) => ({
                        get idWithContext() {
                            return e.albumId ? ''.concat(e.id, ':').concat(e.albumId) : e.id;
                        },
                        get artistsNames() {
                            var t;
                            return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                        },
                        get mainArtist() {
                            var a, n;
                            return null != (n = null == (a = e.artists) ? void 0 : a[0]) ? n : null;
                        },
                        get mainAlbum() {
                            var s, i;
                            return null != (i = null == (s = e.albums) ? void 0 : s[0]) ? i : null;
                        },
                        get index() {
                            var o, r, l;
                            return null != (l = null == (r = e.albums[0]) || null == (o = r.trackPosition) ? void 0 : o.index) ? l : null;
                        },
                        get isPodcast() {
                            var c;
                            return e.isTrackPodcast || (null == (c = this.mainAlbum) ? void 0 : c.isPodcast);
                        },
                        get isAudiobook() {
                            return e.type === y.S.AUDIOBOOK;
                        },
                        get isFairyTale() {
                            return e.type === y.S.FAIRY_TALE;
                        },
                        get isNonMusic() {
                            return this.isPodcast || this.isAudiobook || this.isFairyTale;
                        },
                        get isAvailableOnlyForPlus() {
                            var d;
                            return !!(null == (d = this.mainAlbum) ? void 0 : d.isAvailableOnlyForPlus);
                        },
                    }))
                    .actions((e) => ({
                        changeTrackInfo: (0, n.L3)(function* (t, a) {
                            let { ugcResource: s, modelActionsLogger: r } = (0, n._$)(e);
                            if (e.artists.map((e) => e.name).join(', ') === a && t === e.title) return o.FlZ.OK;
                            try {
                                var l;
                                yield s.changeTrack({ trackId: e.id, title: t, artist: a }), (e.title = t);
                                let r = (null == (l = e.artists[0]) ? void 0 : l.id) || '0';
                                if (((e.artists = (0, n.wg)([])), a)) {
                                    let t = i.PK.create({ id: r, name: a, isAvailable: !0 });
                                    e.artists = (0, n.wg)([t]);
                                }
                                return o.FlZ.OK;
                            } catch (e) {
                                return r.error(e), o.FlZ.ERROR;
                            }
                        }),
                    })),
                I = n.gK
                    .model('BaseSonataState', {
                        contextType: n.gK.maybeNull(n.gK.enumeration(Object.values(g.K))),
                        contextId: n.gK.maybeNull(n.gK.string),
                        entityMeta: n.gK.maybeNull(w),
                        status: n.gK.enumeration(Object.values(l.MT)),
                        canMoveForward: n.gK.boolean,
                        canMoveBackward: n.gK.boolean,
                        canSpeed: n.gK.boolean,
                        repeatMode: n.gK.enumeration(Object.values(N.pM)),
                        canChangeRepeatMode: n.gK.boolean,
                        volume: n.gK.maybe(n.gK.number),
                        speed: n.gK.maybe(n.gK.number),
                        position: n.gK.maybeNull(n.gK.number),
                        duration: n.gK.maybeNull(n.gK.number),
                        canShuffle: n.gK.boolean,
                        shuffle: n.gK.boolean,
                        quality: n.gK.enumeration(Object.values(f.e)),
                        unloadedEntitiesData: n.gK.maybe(n.gK.array(A)),
                    })
                    .volatile(() => ({ volatileUnloadedEntitiesData: void 0 }))
                    .views((e) => ({
                        get unloadedEntitiesDataFromModels() {
                            var t;
                            return null != (t = e.volatileUnloadedEntitiesData) ? t : (0, x.HO)(e.unloadedEntitiesData);
                        },
                        get isVibeContext() {
                            return e.contextType === g.K.Vibe;
                        },
                        get isGenerativeContext() {
                            return e.contextType === g.K.Generative;
                        },
                        get isPaused() {
                            return e.status === l.MT.PAUSED;
                        },
                        get isPlaying() {
                            return e.status === l.MT.PLAYING;
                        },
                        get isContextRepeatMode() {
                            return e.repeatMode === N.pM.CONTEXT;
                        },
                        get isOneRepeatMode() {
                            return e.repeatMode === N.pM.ONE;
                        },
                    }))
                    .actions((e) => ({
                        setContextId: (t) => {
                            e.contextId = String(t);
                        },
                        setContextType: (t) => {
                            e.contextType = t;
                        },
                        setEntityMeta: (t) => {
                            t && t.data.meta && (e.entityMeta = m(t));
                        },
                        setUnloadedEntitiesData: (t) => {
                            t && ((e.volatileUnloadedEntitiesData = (0, C.A)(t)), (e.unloadedEntitiesData = (0, n.wg)(t)));
                        },
                        resetUnloadedEntitiesData: () => {
                            (e.volatileUnloadedEntitiesData = void 0), (e.unloadedEntitiesData = void 0);
                        },
                        setStatus: (t) => {
                            e.status = t;
                        },
                        setCanMoveForward: (t) => {
                            e.canMoveForward = t;
                        },
                        setCanMoveBackward: (t) => {
                            e.canMoveBackward = t;
                        },
                        setVolume: (t) => {
                            e.volume = t;
                        },
                        setCanSpeed: (t) => {
                            e.canSpeed = t;
                        },
                        setSpeed: (t) => {
                            e.speed = t;
                        },
                        setRepeatMode: (t) => {
                            e.repeatMode = t;
                        },
                        setCanChangeRepeatMode: (t) => {
                            e.canChangeRepeatMode = t;
                        },
                        setCanShuffle: (t) => {
                            e.canShuffle = t;
                        },
                        setShuffle: (t) => {
                            e.shuffle = t;
                        },
                        setQuality: (t) => {
                            e.quality = t;
                        },
                        setPosition: (t) => {
                            e.position = t;
                        },
                        setDuration: (t) => {
                            e.duration = t;
                        },
                    })),
                S = a(54830)
                    .z8.props({ artists: n.gK.array(i.PK), isHiddenFromSonataQueue: n.gK.maybe(n.gK.boolean) })
                    .views((e) => ({
                        get idWithContext() {
                            return String(e.clipId);
                        },
                    })),
                O = I.props({
                    playlistFilter: n.gK.maybe(n.gK.string),
                    areCoresRegistered: n.gK.boolean,
                    isVHCoreRegistered: n.gK.boolean,
                    shouldApplyYnisonState: n.gK.optional(n.gK.boolean, !0),
                    isCrossFadeEnabled: n.gK.boolean,
                })
                    .actions((e) => ({
                        setIsVHCoreRegistered(t) {
                            e.isVHCoreRegistered = t;
                        },
                        setPlaylistFilter: (t) => {
                            e.playlistFilter = t;
                        },
                        setCoresAsRegistered: (t) => {
                            e.areCoresRegistered = t;
                        },
                        setShouldApplyYnisonState: (t) => {
                            e.shouldApplyYnisonState = t;
                        },
                        setCrossFadeMode: (t) => {
                            let { containerStorage: a } = (0, n._$)(e);
                            a.set(o.cYZ.CrossFadeMode, t, { expires: 365 }), (e.isCrossFadeEnabled = t);
                        },
                    }))
                    .named('SonataState');
            a(94953), a(62915);
            var E = a(61569),
                j = a(16045),
                R = a(93011),
                M = a(77091),
                T = a(46695);
        },
        97774: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => s });
            var n = a(93064);
            let s = (e) => (0, n.wg)(e);
        },
    },
]);
