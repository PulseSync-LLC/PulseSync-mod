(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3189],
    {
        2465: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => r });
            var n = a(44020),
                s = a(23480),
                i = a(11584),
                o = a(42561);
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
        4233: (e, t, a) => {
            'use strict';
            a.d(t, { AfishaWidget: () => _ });
            var n = a(62936),
                s = a(44020),
                i = a(47480),
                o = a(8669),
                r = a(5099),
                l = a(4714),
                c = a(20512),
                d = a(42561),
                u = a(45149),
                m = a(34561),
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
        4567: (e) => {
            e.exports = { icon: 'NotificationShuffle_icon__U_ape', message: 'NotificationShuffle_message__BNxJm', icon_unset: 'NotificationShuffle_icon_unset__y1jg_' };
        },
        6540: (e, t, a) => {
            'use strict';
            a.d(t, {
                vK: () => _.DonationButton,
                Xx: () => v.DonationCard,
                x0: () => h.DonationCarousel,
                kZ: () => y,
                eG: () => p,
                GT: () => r,
                Q$: () => m,
                cg: () => n.useSendEventOnDonationNavigated,
                CC: () => s.useSendEventOnDonationShowedOrHidden,
            });
            var n = a(21897),
                s = a(18037),
                i = a(51606),
                o = a(81628);
            let r = (e) => {
                let { url: t, artist: a, goal: n } = e;
                return (0, i.wg)({ url: t, goal: n, artist: (0, o.as)({ artist: a }) });
            };
            var l = a(69526),
                c = a(44020),
                d = a(42561);
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
            var _ = a(88913),
                v = a(15589),
                h = a(93469),
                C = a(62936),
                x = a(79950),
                g = a(30388),
                f = a(18843),
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
                y = (e) => Array.from({ length: 10 }, (t, a) => (0, C.jsx)(b, { isActive: e }, a));
        },
        10983: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => i });
            var n = a(62936),
                s = a(85906);
            let i = (e) => {
                let { disabled: t, isPlaying: a, onClickPlayPause: i, className: o } = e;
                return (0, n.jsx)(s.DM, { className: o, size: 's', iconSize: 'xs', disabled: t, isPlaying: a, onClick: i });
            };
        },
        11032: (e) => {
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
        11602: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        13919: (e) => {
            e.exports = {
                shuffleIcon_off: 'ShuffleButton_shuffleIcon_off___oqrr',
                shuffleIcon_on: 'ShuffleButton_shuffleIcon_on__qFJqV',
                shuffleIcon_disabled: 'ShuffleButton_shuffleIcon_disabled__fQsOo',
            };
        },
        14413: (e, t, a) => {
            'use strict';
            a.d(t, { NotificationShuffle: () => p });
            var n = a(62936),
                s = a(79950),
                i = a(44020),
                o = a(47480),
                r = a(85742),
                l = a(20512),
                c = a(20418),
                d = a(85906),
                u = a(4567),
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
        14989: (e) => {
            e.exports = { root: 'CashbackPercentBadge_root__rP2Rj', icon: 'CashbackPercentBadge_icon__dq7pE', text: 'CashbackPercentBadge_text__Uol3I' };
        },
        15589: (e, t, a) => {
            'use strict';
            a.d(t, { DonationCard: () => C });
            var n = a(62936),
                s = a(79950),
                i = a(44020),
                o = a(47480),
                r = a(26731),
                l = a(33878),
                c = a(5099),
                d = a(85742),
                u = a(56721),
                m = a(20418),
                p = a(85906),
                _ = a(18843),
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
        16453: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => h });
            var n = a(62936),
                s = a(19718),
                i = a(44020),
                o = a(59935),
                r = a(60188),
                l = a(42561),
                c = a(85906),
                d = a(81959),
                u = a(46663),
                m = a(94301),
                p = a(85031),
                _ = a.n(p);
            let v = { mainAxis: 44 },
                h = (0, s.PA)((e) => {
                    var t, a, s;
                    let {
                            disabled: p,
                            isPlaying: h,
                            repeatMode: C,
                            canMoveForward: x,
                            canMoveBackward: g,
                            canShuffle: f,
                            shuffle: N,
                            onClickNext: b,
                            onClickPrev: y,
                            onClickPlayPause: k,
                            canChangeRepeatMode: E,
                            className: A,
                            withShuffle: w,
                            withRepeat: I,
                            onRepeatClick: T,
                            onShuffleClick: O,
                        } = e,
                        {
                            advert: S,
                            modals: { popoverOverPlayer: j },
                            paymentWidgetModal: R,
                            user: P,
                            experiments: M,
                            settings: B,
                        } = (0, l.Pjs)(),
                        { isFreemium: K, hasFreeUserAccess: D } = (0, l.XCI)(),
                        F =
                            !(null == (t = B.browserInfo) ? void 0 : t.isTouch) &&
                            P.isAuthorized &&
                            !P.hasPlus &&
                            (null == (s = M.getExperiment(l.zal.WebNextDesktopWebFreemium)) || null == (a = s.value) ? void 0 : a.limitListening) === 'on';
                    (() => {
                        var e, t, a;
                        let {
                                sonataState: n,
                                modals: { popoverOverPlayer: s },
                                user: o,
                                experiments: r,
                                settings: c,
                            } = (0, l.Pjs)(),
                            { isPassToProduct: m } = (0, l.XCI)(),
                            p = (0, l.eGp)(),
                            _ = n.contextType === d.K.Generative,
                            v =
                                !(null == (e = c.browserInfo) ? void 0 : e.isTouch) &&
                                o.isAuthorized &&
                                !o.hasPlus &&
                                (null == (a = r.getExperiment(l.zal.WebNextDesktopWebFreemium)) || null == (t = a.value) ? void 0 : t.limitListening) === 'on';
                        (0, i.useEffect)(() => {
                            if ((o.isAuthorized && !m && !v) || _) return;
                            let e =
                                null == p
                                    ? void 0
                                    : p.state.playerState.event.onChange((e) => {
                                          e === u.Iu.PLAYING && s.open();
                                      });
                            return () => {
                                null == e || e();
                            };
                        }, [p, s, _, m, v, o.isAuthorized]);
                    })();
                    let L = (0, i.useCallback)(
                            () =>
                                (0, n.jsx)(c.DM, {
                                    className: _().sonataButton,
                                    iconSize: 'l',
                                    variant: 'filled',
                                    isPlaying: h,
                                    iconClassName: _().playButtonIcon,
                                    onClick: k,
                                }),
                            [h, k],
                        ),
                        z = (0, o.c)((e) => {
                            e || j.close();
                        }),
                        U = (0, r.L)(() => {
                            let e = K && P.isAuthorized && !F ? 'vibe' : 'fullTracks';
                            return P.isAuthorized
                                ? R.modal.isOpened
                                    ? L()
                                    : (0, n.jsx)(c.SU, {
                                          isEnabled: D,
                                          isOpened: j.isOpened,
                                          placement: 'top',
                                          onOpenChange: z,
                                          offsetOptions: v,
                                          textVariant: e,
                                          renderChildren: L,
                                      })
                                : (0, n.jsx)(c.Zr, {
                                      isEnabled: !0,
                                      isOpened: j.isOpened,
                                      placement: 'top',
                                      onOpenChange: z,
                                      offsetOptions: v,
                                      textVariant: e,
                                      renderChildren: L,
                                  });
                        });
                    return (0, n.jsx)(m.a, {
                        isDisabledRepeat: !E || p,
                        isDisabledShuffle: !f || p,
                        withShuffle: ((p || f) && !(null == S ? void 0 : S.isAdvertShown)) || !!w,
                        shuffle: N,
                        canMoveBackward: g,
                        canMoveForward: x,
                        onClickNext: b,
                        onClickPrev: y,
                        withRepeat: ((p || E) && !(null == S ? void 0 : S.isAdvertShown)) || !!I,
                        repeatMode: C,
                        className: A,
                        playButton: U,
                        onRepeatClick: T,
                        onShuffleClick: O,
                    });
                });
        },
        16616: (e, t, a) => {
            'use strict';
            a.d(t, {
                hW: () => x.AfishaWidget,
                ZH: () => N.ArtistMeta,
                mi: () => g.m,
                VN: () => f.ConcertCard,
                Qb: () => E.ConcertCardWithImage,
                LY: () => O,
                dE: () => S.ConcertDate,
                Wt: () => j.ConcertImage,
                Ot: () => p,
                aR: () => C,
                BD: () => R.ConcertsBlock,
                MU: () => b.RedesignedConcertMeta,
                ub: () => y.SearchBestResultsMeta,
                wP: () => k.SearchMeta,
                HN: () => c,
                En: () => d,
                oP: () => u,
                ho: () => l,
                Yi: () => m.useGetPriceText,
            });
            var n,
                s = a(51606);
            !(function (e) {
                (e.CONCERT = 'concert'), (e.FESTIVAL = 'festival'), (e.TRIBUTE = 'tribute'), (e.MUSICAL = 'musical'), (e.UNSPECIFIED = 'unspecified');
            })(n || (n = {}));
            let i = /[+-]\d{2}:?\d{2}/,
                o = (e) => (null == e ? void 0 : e.replace(i, '')),
                r = (e) => {
                    if (e) return { value: e.value, currency: e.currency };
                },
                l = (e, t) => {
                    var a, i, l, c;
                    let { uri: d, color: u } = e.cover || {};
                    return (0, s.wg)({
                        id: e.id,
                        title: e.concertTitle,
                        city: e.city,
                        place: e.place,
                        datetime: e.datetime && o(e.datetime),
                        contentRating: e.contentRating,
                        dataSessionId: e.dataSessionId,
                        cover: { uri: d, color: u },
                        rank: e.rank,
                        cashbackTitle: null == (a = e.cashback) ? void 0 : a.title,
                        cashbackValuePercent: null == (i = e.cashback) ? void 0 : i.valuePercent,
                        price: r(t),
                        eventKind: null != (c = null == (l = e.eventInfo) ? void 0 : l.type) ? c : n.UNSPECIFIED,
                    });
                },
                c = (e) => l(e.data.concert, e.data.minPrice),
                d = (e) => (0, s.wg)({ id: e.id, name: e.name }),
                u = (e) => {
                    var t, a, i, l, c;
                    return (0, s.wg)({
                        id: e.id,
                        dataSessionId: null != (l = e['data-session-id']) ? l : '',
                        datetime: e.datetime && o(e.datetime),
                        city: e.city,
                        place: e.place,
                        contentRating: e.contentRating,
                        price: r(e.minPrice),
                        cashbackTitle: null == (t = e.cashback) ? void 0 : t.title,
                        cashbackValuePercent: null == (a = e.cashback) ? void 0 : a.valuePercent,
                        title: e.concertTitle,
                        eventKind: null != (c = null == (i = e.eventInfo) ? void 0 : i.type) ? c : n.UNSPECIFIED,
                    });
                };
            a(88113), a(45149);
            var m = a(21654);
            let p = s.gK.model('ConcertLocation', { id: s.gK.number, name: s.gK.string });
            var _ = a(42561),
                v = a(54690);
            let h = s.gK.model('Price', { value: s.gK.number, currency: s.gK.string }),
                C = s.gK
                    .model('Concert', {
                        id: s.gK.string,
                        dataSessionId: s.gK.maybe(s.gK.string),
                        datetime: s.gK.maybe(s.gK.string),
                        city: s.gK.maybe(s.gK.string),
                        place: s.gK.maybe(s.gK.string),
                        contentRating: s.gK.maybe(s.gK.string),
                        price: s.gK.maybe(h),
                        cashbackTitle: s.gK.maybe(s.gK.string),
                        cashbackValuePercent: s.gK.maybe(s.gK.number),
                        title: s.gK.maybe(s.gK.string),
                        cover: s.gK.maybe(v.$B),
                        rank: s.gK.maybe(s.gK.number),
                        eventKind: s.gK.maybe(s.gK.string),
                    })
                    .views((e) => ({
                        get isCashbackExperimentEnabled() {
                            let { experiments: t } = (0, s.Zn)(e);
                            return t.checkExperiment(_.zal.WebNextConcertsCashback, 'on');
                        },
                        get isIdentityExperimentEnabled() {
                            let { experiments: t } = (0, s.Zn)(e);
                            return t.checkExperiment(_.zal.WebNextConcertsIdentityEventType, 'on');
                        },
                    }))
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
            var x = a(4233),
                g = a(22838),
                f = a(60438),
                N = a(52583),
                b = a(55324),
                y = a(30284),
                k = a(39086),
                E = a(94481),
                A = a(62936),
                w = a(30388),
                I = a(52615),
                T = a.n(I);
            let O = (e) => {
                let { isActive: t, withPriceButton: a } = e;
                return (0, A.jsxs)('div', {
                    className: T().root,
                    children: [
                        (0, A.jsx)(w.Shimmer, { radius: 'm', className: T().shimmerCover, isActive: t }),
                        (0, A.jsx)('div', { className: T().meta, children: (0, A.jsx)(w.Shimmer, { isActive: t, radius: 'xxxl', className: T().shimmerTitle }) }),
                        a && (0, A.jsx)(w.Shimmer, { isActive: t, radius: 'xxxl', className: T().shimmerButton }),
                    ],
                });
            };
            var S = a(51099),
                j = a(28865),
                R = a(28311);
        },
        18037: (e, t, a) => {
            'use strict';
            a.d(t, { useSendEventOnDonationShowedOrHidden: () => r });
            var n = a(23480),
                s = a(11584),
                i = a(59935),
                o = a(42561);
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
        18395: (e) => {
            e.exports = { root: 'SonataVideoControls_root__mHglL' };
        },
        18843: (e) => {
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
        21654: (e, t, a) => {
            'use strict';
            a.d(t, { useGetPriceText: () => i });
            var n = a(47480),
                s = a(59935);
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
        21897: (e, t, a) => {
            'use strict';
            a.d(t, { useSendEventOnDonationNavigated: () => r });
            var n = a(23480),
                s = a(11584),
                i = a(59935),
                o = a(42561);
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
        22838: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => d });
            var n = a(62936),
                s = a(79950),
                i = a(8669),
                o = a(85742),
                r = a(20418),
                l = a(11602),
                c = a.n(l);
            let d = (e) => {
                let { title: t, className: a, titleClassName: l, valuePercent: d } = e;
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
                            children: d ? ''.concat(d, '%') : t,
                        }),
                    ],
                });
            };
        },
        25025: (e, t, a) => {
            'use strict';
            a.d(t, { SonataControls: () => O });
            var n = a(62936),
                s = a(79950),
                i = a(19718),
                o = a(44020),
                r = a(59935),
                l = a(42561),
                c = a(87030),
                d = a(91118),
                u = a(10983),
                m = a(61970),
                p = a.n(m),
                _ = a(16453),
                v = a(47480),
                h = a(8669),
                C = a(5099),
                x = a(85742),
                g = a(85906),
                f = a(45060),
                N = a(32961),
                b = a(81339),
                y = a.n(b);
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
                        onClickPlayPause: b,
                        canChangeRepeatMode: k,
                        shuffle: E,
                        className: A,
                        onRepeatClick: w,
                        onShuffleClick: I,
                    } = e,
                    { formatMessage: T } = (0, v.A)(),
                    { experiments: O } = (0, l.Pjs)(),
                    S = O.checkExperiment(l.zal.WebNextPlayerBarYellowButton, 'on');
                return (0, n.jsxs)('div', {
                    className: (0, s.$)(y().root, A),
                    children: [
                        (0, n.jsxs)('div', {
                            className: y().buttonContainer,
                            children: [
                                (t || d) &&
                                    (0, n.jsx)(N.ShuffleButton, {
                                        className: y().sonataButton,
                                        size: 's',
                                        iconSize: 'xxs',
                                        color: 'secondary',
                                        isDisabled: t,
                                        shuffle: E,
                                        onClick: I,
                                        ...(0, h.Am)(h.Kq.sonata.SHUFFLE_BUTTON),
                                    }),
                                !t &&
                                    c &&
                                    (0, n.jsx)(C.$, {
                                        className: (0, s.$)(y().sonataButton, y().rewind),
                                        color: 'secondary',
                                        size: 'm',
                                        radius: 'round',
                                        withRipple: !1,
                                        'aria-label': T({ id: 'player-actions.rewind-backwards' }),
                                        icon: (0, n.jsx)(x.Icon, { variant: 'rewindBackwards', size: 'xxs' }),
                                        onClick: p,
                                        ...(0, h.Am)(h.Kq.sonata.REWIND_BACKWARDS_BUTTON),
                                    }),
                            ],
                        }),
                        (0, n.jsxs)('div', {
                            className: y().sonataButtons,
                            children: [
                                (0, n.jsx)(C.$, {
                                    className: y().sonataButton,
                                    color: 'secondary',
                                    size: 'm',
                                    radius: 'round',
                                    disabled: !r,
                                    withRipple: !1,
                                    'aria-label': T({ id: 'player-actions.previous-track' }),
                                    icon: (0, n.jsx)(x.Icon, { variant: 'previous', size: 'xxs' }),
                                    onClick: m,
                                    ...(0, h.Am)(h.Kq.sonata.PREVIOUS_TRACK_BUTTON),
                                }),
                                (0, n.jsx)(g.DM, {
                                    className: (0, s.$)(y().sonataButton, y().sonataPlayButton),
                                    iconSize: 'm',
                                    size: 'l',
                                    radius: 'round',
                                    color: 'secondary',
                                    buttonVariant: 'default',
                                    isPlaying: a,
                                    iconClassName: (0, s.$)(y().playPauseButtonIcon, { [y().playPauseButtonIcon_withYellowPlayButton]: S }),
                                    onClick: b,
                                }),
                                (0, n.jsx)(C.$, {
                                    className: y().sonataButton,
                                    radius: 'round',
                                    size: 'm',
                                    color: 'secondary',
                                    disabled: !o,
                                    withRipple: !1,
                                    'aria-label': T({ id: 'player-actions.next-track' }),
                                    icon: (0, n.jsx)(x.Icon, { variant: 'next', size: 'xxs' }),
                                    onClick: u,
                                    ...(0, h.Am)(h.Kq.sonata.NEXT_TRACK_BUTTON),
                                }),
                            ],
                        }),
                        (0, n.jsxs)('div', {
                            className: y().buttonContainer,
                            children: [
                                !t &&
                                    c &&
                                    (0, n.jsx)(C.$, {
                                        className: (0, s.$)(y().sonataButton, y().rewind),
                                        color: 'secondary',
                                        size: 'm',
                                        radius: 'round',
                                        withRipple: !1,
                                        'aria-label': T({ id: 'player-actions.rewind-forward' }),
                                        icon: (0, n.jsx)(x.Icon, { variant: 'rewindForward', size: 'xxs' }),
                                        onClick: _,
                                        ...(0, h.Am)(h.Kq.sonata.REWIND_FORWARD_BUTTON),
                                    }),
                                (t || k) &&
                                    (0, n.jsx)(f.RepeatButton, {
                                        className: y().sonataButton,
                                        size: 's',
                                        color: 'secondary',
                                        isDisabled: t,
                                        iconSize: 'xxs',
                                        repeatMode: i,
                                        onClick: w,
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var E = a(81959),
                A = a(43026),
                w = a(26743),
                I = a.n(w);
            let T = (0, i.PA)((e) => {
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
                        { formatMessage: f } = (0, v.A)(),
                        { user: N, sonataState: b } = (0, l.Pjs)(),
                        y = (0, l.zwV)(),
                        k = b.entityMeta,
                        w = b.contextType === E.K.Generative,
                        T = N.isAuthorized && !w,
                        O = (0, A.KX)(b.entityMeta),
                        S = (0, A.mW)(b.entityMeta);
                    (0, o.useEffect)(() => {
                        if (!b.isGenerativeContext)
                            return (
                                null == y || y.addShortcutsListener(l.Mo.MAIN, l.lbr.LIKE, O),
                                null == y || y.addShortcutsListener(l.Mo.MAIN, l.lbr.DISLIKE, S),
                                () => {
                                    null == y || y.removeShortcutsListener(l.Mo.MAIN, l.lbr.LIKE), null == y || y.removeShortcutsListener(l.Mo.MAIN, l.lbr.DISLIKE);
                                }
                            );
                    }, [S, O, y, b.isGenerativeContext]);
                    let j = (0, o.useMemo)(
                            () =>
                                r
                                    ? (0, n.jsx)(C.$, {
                                          className: I().sonataButton,
                                          variant: 'text',
                                          color: 'secondary',
                                          size: 'm',
                                          radius: 'round',
                                          withRipple: !1,
                                          'aria-label': f({ id: 'player-actions.rewind-backwards' }),
                                          icon: (0, n.jsx)(x.Icon, { variant: 'rewindBackwards', size: 'xs' }),
                                          onClick: u,
                                          ...(0, h.Am)(h.Kq.sonata.MOBILE_REWIND_BACKWARDS_BUTTON),
                                      })
                                    : (0, n.jsx)(C.$, {
                                          className: I().sonataButton,
                                          variant: 'text',
                                          color: 'secondary',
                                          size: 'm',
                                          radius: 'round',
                                          disabled: !i,
                                          withRipple: !1,
                                          'aria-label': f({ id: 'player-actions.previous-track' }),
                                          icon: (0, n.jsx)(x.Icon, { variant: 'previous', size: 'xs' }),
                                          onClick: d,
                                          ...(0, h.Am)(h.Kq.sonata.MOBILE_PREVIOUS_TRACK_BUTTON),
                                      }),
                            [r, i, f, d, u],
                        ),
                        R = (0, o.useMemo)(
                            () =>
                                r
                                    ? (0, n.jsx)(C.$, {
                                          className: I().sonataButton,
                                          variant: 'text',
                                          radius: 'round',
                                          size: 'm',
                                          color: 'secondary',
                                          disabled: !a,
                                          withRipple: !1,
                                          'aria-label': f({ id: 'player-actions.rewind-forward' }),
                                          icon: (0, n.jsx)(x.Icon, { variant: 'rewindForward', size: 'xs' }),
                                          onClick: m,
                                          ...(0, h.Am)(h.Kq.sonata.MOBILE_REWIND_FORWARD_BUTTON),
                                      })
                                    : (0, n.jsx)(C.$, {
                                          className: I().sonataButton,
                                          variant: 'text',
                                          radius: 'round',
                                          size: 'm',
                                          color: 'secondary',
                                          disabled: !a,
                                          withRipple: !1,
                                          'aria-label': f({ id: 'player-actions.next-track' }),
                                          icon: (0, n.jsx)(x.Icon, { variant: 'next', size: 'xs' }),
                                          onClick: c,
                                          ...(0, h.Am)(h.Kq.sonata.MOBILE_NEXT_TRACK_BUTTON),
                                      }),
                            [r, a, f, c, m],
                        );
                    return (0, n.jsxs)('div', {
                        className: (0, s.$)(I().root, _),
                        children: [
                            (0, n.jsx)('div', {
                                className: I().buttonContainer,
                                children: k && T && (0, n.jsx)(g.aQ, { fallback: (0, n.jsx)(g._I, { isDisliked: k.isDisliked, iconSize: 'xs', onClick: S }) }),
                            }),
                            (0, n.jsxs)('div', {
                                className: I().sonataButtons,
                                children: [
                                    j,
                                    (0, n.jsx)(g.DM, {
                                        className: I().sonataButton,
                                        iconSize: 'xxl',
                                        variant: 'filled',
                                        color: 'secondary',
                                        isPlaying: t,
                                        iconClassName: I().playPauseButtonIcon,
                                        onClick: p,
                                    }),
                                    R,
                                ],
                            }),
                            (0, n.jsx)('div', {
                                className: I().buttonContainer,
                                children:
                                    k &&
                                    T &&
                                    (0, n.jsx)(g.aQ, { fallback: (0, n.jsx)(g.cy, { isLiked: k.isLiked, iconSize: 'xs', onClick: O, disabled: !N.isAuthorized }) }),
                            }),
                        ],
                    });
                }),
                O = (0, i.PA)((e) => {
                    var t, a;
                    let { isMobile: i, entityMeta: m, isFullscreen: v, className: h, withShuffle: C, withRepeat: x } = e,
                        {
                            sonataState: g,
                            vibe: f,
                            advert: N,
                            modals: { popoverOverPlayer: b },
                            experiments: y,
                        } = (0, l.Pjs)(),
                        E = y.checkExperiment(l.zal.WebNextPlayerBarYellowButton, 'on'),
                        A = (0, l.zwV)(),
                        w = (0, l.eGp)(),
                        { rewindBackwards: I, rewindForward: O } = (() => {
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
                        S = (0, l.rs2)(),
                        j = (0, l.brA)(),
                        R = (null == m ? void 0 : m.isNonMusic) && !N.isAdvertShown,
                        P = (0, l.PT7)(),
                        { togglePlay: M } = (0, l.B0S)({
                            seeds: null != (a = null == (t = f.meta) ? void 0 : t.seeds) ? a : [],
                            pageIdForFrom: l._Q$.HOME,
                            blockIdForFrom: l.hf$.RUP_MAIN_RADIO,
                            onPlayInterrupted: b.open,
                        }),
                        B = (0, o.useMemo)(() => (N.isAdvertShown ? N.isAdvertPlaying : g.isPlaying), [N.isAdvertShown, N.isAdvertPlaying, g.isPlaying]),
                        K = (0, r.c)(() => {
                            if (N.isAdvertShown) {
                                var e;
                                null == S || null == (e = S.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            m ? null == w || w.togglePause() : M();
                        }),
                        D = (0, r.c)(() => {
                            (v && P()) || (K(), j(!B));
                        }),
                        F = (0, r.c)(() => {
                            null == w || w.moveForward();
                        }),
                        L = (0, r.c)(() => {
                            null == w || w.moveBackward();
                        }),
                        z = (0, d.useOnShuffleClick)(),
                        U = (0, c.useOnRepeatClick)(),
                        G = (0, r.c)(() => {
                            U(g);
                        }),
                        $ = (0, r.c)(() => {
                            z(g);
                        });
                    (0, o.useEffect)(() => {
                        if (!v && (null == A || A.addShortcutsListener(l.Mo.MAIN, l.lbr.TOGGLE_PLAY, K), !N.isAdvertShown))
                            return (
                                null == A || A.addShortcutsListener(l.Mo.MAIN, l.lbr.TOGGLE_REPEAT, G),
                                null == A || A.addShortcutsListener(l.Mo.MAIN, l.lbr.TOGGLE_SHUFFLE, $),
                                () => {
                                    null == A || A.removeShortcutsListener(l.Mo.MAIN, l.lbr.TOGGLE_PLAY),
                                        N.isAdvertShown ||
                                            (null == A || A.removeShortcutsListener(l.Mo.MAIN, l.lbr.TOGGLE_SHUFFLE),
                                            null == A || A.removeShortcutsListener(l.Mo.MAIN, l.lbr.TOGGLE_REPEAT));
                                }
                            );
                    }, [v, K, G, $, A, N.isAdvertShown]);
                    let V = (0, o.useMemo)(() => (v ? (i ? T : k) : i ? u.K : _.Z), [i, v]);
                    return (0, n.jsx)(V, {
                        className: (0, s.$)(h, { [p().root]: E }),
                        disabled: null === g.entityMeta || (N.isAdvertShown && !i),
                        isPlaying: B || !1,
                        canMoveBackward: g.canMoveBackward && !N.isAdvertShown,
                        canMoveForward: g.canMoveForward && !N.isAdvertShown,
                        withShuffle: C,
                        withRepeat: x,
                        canShuffle: g.canShuffle,
                        shuffle: g.shuffle,
                        onClickPlayPause: D,
                        onClickNext: F,
                        onClickPrev: L,
                        canRewind: R,
                        onRewindBackwardsClick: I,
                        onRewindForwardClick: O,
                        canChangeRepeatMode: g.canChangeRepeatMode,
                        repeatMode: g.repeatMode,
                        onRepeatClick: G,
                        onShuffleClick: $,
                    });
                });
        },
        25139: (e, t, a) => {
            'use strict';
            a.d(t, { useToggleMute: () => o });
            var n = a(44020),
                s = a(59935),
                i = a(42561);
            let o = () => {
                let e = (0, i.NFA)().get(i.ooW),
                    t = (0, i.eGp)(),
                    { advert: a } = (0, i.Pjs)(),
                    o = (0, i.rs2)(),
                    r = (0, s.c)(async (e) => {
                        let { volume: n, playbackId: s } = e;
                        await (null == t ? void 0 : t.setExponentVolume(n, s)), a.isAdvertShown && (null == o || o.audioAdvertPlayback.setExponentVolume(n));
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
        26743: (e) => {
            e.exports = {
                root: 'SonataFullscreenControlsMobile_root__H6MQ7',
                sonataButtons: 'SonataFullscreenControlsMobile_sonataButtons__hLf19',
                sonataButton: 'SonataFullscreenControlsMobile_sonataButton__UGQ_U',
                playPauseButtonIcon: 'SonataFullscreenControlsMobile_playPauseButtonIcon__e5ygU',
                buttonContainer: 'SonataFullscreenControlsMobile_buttonContainer__5ITqM',
            };
        },
        27371: (e, t, a) => {
            'use strict';
            a.d(t, { NotificationRepeat: () => p });
            var n = a(62936),
                s = a(79950),
                i = a(47480),
                o = a(92720),
                r = a(85742),
                l = a(20512),
                c = a(20418),
                d = a(85906),
                u = a(46973),
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
        28311: (e, t, a) => {
            'use strict';
            a.d(t, { ConcertsBlock: () => _ });
            var n = a(62936),
                s = a(79950),
                i = a(49696),
                o = a(44020),
                r = a(23480),
                l = a(21153),
                c = a(85906),
                d = a(2465),
                u = a(46723),
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
                        y = (0, o.useRef)(null),
                        k = (0, d.m)({ artistId: t }),
                        E = (0, o.useCallback)(() => {
                            k(r.H2.ArtistConcertsScreen);
                        }, [k]),
                        A = (0, o.useMemo)(
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
                                onViewAllAction: E,
                                controls: (0, n.jsx)(c.X9, { className: m().controls, carouselRef: y }),
                                headingVariant: f,
                                shouldSendAnalyticsOnLoaded: !0,
                            }),
                            (0, n.jsx)(l.Carousel, {
                                itemClassName: (0, s.$)(m().item, { [m().item_singleColumn]: 2 >= o.Children.count(v) }, g),
                                className: (0, s.$)(C, { [m().preventScroll]: u }),
                                ref: y,
                                'aria-labelledby': b,
                                children: u ? Array.from({ length: 2 }, (e, t) => (0, n.jsx)('div', { className: m().concertsColumn, children: (0, c.Tb)(2) }, t)) : A,
                            }),
                        ],
                    });
                },
                _ = (0, o.forwardRef)((e, t) => (0, n.jsx)(p, { forwardRef: t, ...e }));
        },
        28865: (e, t, a) => {
            'use strict';
            a.d(t, { ConcertImage: () => A });
            var n,
                s,
                i = a(62936),
                o = a(79950),
                r = a(19718),
                l = a(44020),
                c = a(8669),
                d = a(60188),
                u = a(13030),
                m = a(42561),
                p = a(33878);
            let _ = (e) => (0, p.httpsReplacer)(e.replace('%%', '960x690_noncrop'));
            var v = a(88113),
                h = a(26731),
                C = a(20418);
            function x() {
                return (x = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let g = function (e) {
                return l.createElement(
                    'svg',
                    x({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none' }, e),
                    n ||
                        (n = l.createElement(
                            'defs',
                            null,
                            l.createElement(
                                'linearGradient',
                                { id: 'plusColorGradient', x1: 0, x2: 24, y1: 10.4, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                l.createElement('stop', { stopColor: '#FF5C4D' }),
                                l.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                l.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            l.createElement('clipPath', { id: 'plusColorClip' }, l.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 })),
                        )),
                    s ||
                        (s = l.createElement(
                            'g',
                            { clipPath: 'url(#plusColorClip)' },
                            l.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 }),
                            l.createElement('path', {
                                fill: 'url(#plusColorGradient)',
                                fillRule: 'evenodd',
                                d: 'M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0c1.295 0 2.542.205 3.71.585L12.977 9H4.989l-.976 3H12l-2.34 7.2h3.3L15.3 12H24Zm-.378-3h-7.346l2.29-7.046A12.019 12.019 0 0 1 23.622 9Z',
                                clipRule: 'evenodd',
                            }),
                        )),
                );
            };
            var f = a(14989),
                N = a.n(f);
            let b = (e) => {
                let { percent: t, className: a } = e;
                return (0, i.jsxs)('div', {
                    className: (0, o.$)(N().root, a),
                    children: [
                        (0, i.jsx)(g, { 'aria-hidden': !0, className: N().icon }),
                        (0, i.jsx)(C.Caption, {
                            variant: 'span',
                            type: 'text',
                            size: 'xs',
                            weight: 'medium',
                            className: N().text,
                            children: (0, i.jsx)(h.A, { id: 'entity-names.percent', values: { value: t } }),
                        }),
                    ],
                });
            };
            var y = a(51099),
                k = a(77339),
                E = a.n(k);
            let A = (0, r.PA)((e) => {
                let { uri: t, withMask: a, datetime: n, coverColor: s, cashbackPercent: r } = e,
                    { experiments: p } = (0, m.Pjs)(),
                    [h, C] = (0, l.useState)(!1),
                    x = p.checkExperiment(m.zal.NewConcertsTicketRedesign, 'on') && a,
                    g = p.checkExperiment(m.zal.WebNextConcertsIdentityEventType, 'on'),
                    f = (0, l.useCallback)(() => {
                        C(!0);
                    }, []),
                    N = (0, d.L)(() => {
                        if (s) return { '--concert-image-date-background': (0, v.J)(s) };
                    }),
                    k = (0, d.L)(() =>
                        n
                            ? (0, i.jsxs)('div', {
                                  className: (0, o.$)(E().date, { [E().date_withEventType]: g }),
                                  children: [
                                      (0, i.jsx)(u.Image, {
                                          className: E().dateBackground,
                                          fit: 'cover',
                                          src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69aab8c335547735b2df1c54/%%',
                                          'aria-hidden': !0,
                                          withAvatarReplace: !0,
                                          withLoadingIndicator: !1,
                                          onLoad: f,
                                      }),
                                      h &&
                                          (0, i.jsx)(y.ConcertDate, {
                                              className: E().root_withEventType,
                                              dayClassName: E().day_withEventType,
                                              weekdayClassName: E().weekday_withEventType,
                                              monthClassName: E().month_withEventType,
                                              datetime: n,
                                          }),
                                  ],
                              })
                            : null,
                    ),
                    A = (0, d.L)(() =>
                        n
                            ? (0, i.jsx)(y.ConcertDate, {
                                  dayClassName: E().day,
                                  weekdayClassName: (0, o.$)(E().weekday, E().important),
                                  monthClassName: E().month,
                                  className: E().date,
                                  datetime: n,
                              })
                            : null,
                    );
                return (0, i.jsxs)('div', {
                    className: (0, o.$)(E().root, { [E().root_withMask]: x }),
                    style: N,
                    children: [
                        (0, i.jsx)(u.Image, {
                            className: E().image,
                            fit: 'cover',
                            src: t,
                            withAvatarReplace: !0,
                            createUrlReplacer: _,
                            'aria-hidden': !0,
                            ...(0, c.Am)(c.OA.concert.CONCERT_CARD_IMAGE),
                        }),
                        n && (g ? k : A),
                        g && r && (0, i.jsx)(b, { className: E().cashback, percent: r }),
                    ],
                });
            });
        },
        29265: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => s });
            var n = a(92720);
            let s = (e, t, a) =>
                t(
                    e === n.pM.NONE || a
                        ? { id: 'player-actions.repeat' }
                        : e === n.pM.ONE
                          ? { id: 'player-actions.repeat-one' }
                          : { id: 'player-actions.repeat-context' },
                );
        },
        30284: (e, t, a) => {
            'use strict';
            a.d(t, { SearchBestResultsMeta: () => c });
            var n = a(62936),
                s = a(19718),
                i = a(44020),
                o = a(20418),
                r = a(44746),
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
        30948: (e, t, a) => {
            'use strict';
            a.d(t, { OverviewBlock: () => y });
            var n = a(62936),
                s = a(79950),
                i = a(19718),
                o = a(44020),
                r = a.t(o, 2),
                l = a(8669),
                c = a(49327),
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
                v = a(5099),
                h = a(20418),
                C = a(42561),
                x = a(11032),
                g = a.n(x),
                f = a(47480),
                N = a(4714);
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
                y = (0, i.PA)((e) => {
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
        32961: (e, t, a) => {
            'use strict';
            a.d(t, { ShuffleButton: () => m });
            var n = a(62936),
                s = a(79950),
                i = a(47480),
                o = a(8669),
                r = a(59935),
                l = a(5099),
                c = a(85742),
                d = a(13919),
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
        34561: (e) => {
            e.exports = { root: 'AfishaWidget_root__Fu9a6', content: 'AfishaWidget_content__YFmbs', widget: 'AfishaWidget_widget__ZdvqS' };
        },
        34719: (e) => {
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
        35736: (e, t, a) => {
            'use strict';
            a.d(t, { useOnModifyPlayQueueBatch: () => c });
            var n = a(62936),
                s = a(59935),
                i = a(46663),
                o = a(43026),
                r = a(42561);
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
        39086: (e, t, a) => {
            'use strict';
            a.d(t, { SearchMeta: () => l });
            var n = a(62936),
                s = a(19718),
                i = a(20418),
                o = a(44746),
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
        41094: (e, t, a) => {
            'use strict';
            a.d(t, {
                QQ: () => T,
                Op: () => O,
                x5: () => I,
                jh: () => j.PromoLandingSonataControls,
                s_: () => R.RepeatButton,
                uP: () => P.ShuffleButton,
                $u: () => M.SonataControls,
                bG: () => S,
                qF: () => B.SonataVideoControls,
                EX: () => r,
                li: () => c,
                zM: () => d.z,
                pE: () => p,
                m4: () => _.useOnModifyPlayQueueBatch,
                AA: () => v.useOnRepeatClick,
                e9: () => h.useOnShuffleClick,
                d0: () => C.useToggleMute,
            });
            var n = a(51606),
                s = a(36547),
                i = a(81628),
                o = a(42561);
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
            var l = a(46663);
            let c = (e, t) => ({ type: l.z4.Unloaded, meta: { id: e, albumId: t } });
            var d = a(29265),
                u = a(25270),
                m = a(43026);
            let p = (e) => {
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
                            s = null == (a = t.substituted?.artists ?? t.artists) ? void 0 : a.map(i.dM),
                            o = null == (r = t.albums) ? void 0 : r.map(u.e7);
                        return (0, n.wg)({ ...(0, m.gK)(t), artists: s, albums: o, isHiddenFromSonataQueue: e.hidden });
                    }
                }
            };
            var _ = a(35736),
                v = a(87030),
                h = a(91118),
                C = a(25139),
                x = a(88274),
                g = a(16264),
                f = a(81959),
                N = a(45460),
                b = a(92720);
            let y = [l.MT.PLAYING, l.MT.LOADING_MEDIA_SOURCE, l.MT.BUFFERING],
                k = n.gK.model('UnloadedEntityMeta', { id: n.gK.union(n.gK.number, n.gK.string), albumId: n.gK.maybe(n.gK.union(n.gK.number, n.gK.string)) }),
                E = n.gK.model('UnloadedEntityData', { meta: k, type: n.gK.literal(l.z4.Unloaded) });
            var A = a(20073),
                w = a(24150);
            let I = m.OQ.props({ artists: n.gK.array(i.PK), albums: n.gK.array(u.GI), chart: n.gK.maybe(w.Iz), isHiddenFromSonataQueue: n.gK.maybe(n.gK.boolean) })
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
                            return e.type === A.S.AUDIOBOOK;
                        },
                        get isFairyTale() {
                            return e.type === A.S.FAIRY_TALE;
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
                T = n.gK
                    .model('BaseSonataState', {
                        contextType: n.gK.maybeNull(n.gK.enumeration(Object.values(f.K))),
                        contextId: n.gK.maybeNull(n.gK.string),
                        entityMeta: n.gK.maybeNull(I),
                        status: n.gK.enumeration(Object.values(l.MT)),
                        canMoveForward: n.gK.boolean,
                        canMoveBackward: n.gK.boolean,
                        canSpeed: n.gK.boolean,
                        repeatMode: n.gK.enumeration(Object.values(b.pM)),
                        canChangeRepeatMode: n.gK.boolean,
                        volume: n.gK.maybe(n.gK.number),
                        speed: n.gK.maybe(n.gK.number),
                        position: n.gK.maybeNull(n.gK.number),
                        duration: n.gK.maybeNull(n.gK.number),
                        canShuffle: n.gK.boolean,
                        shuffle: n.gK.boolean,
                        quality: n.gK.enumeration(Object.values(N.e)),
                        unloadedEntitiesData: n.gK.maybe(n.gK.array(E)),
                    })
                    .volatile(() => ({ volatileUnloadedEntitiesData: void 0 }))
                    .views((e) => ({
                        get unloadedEntitiesDataFromModels() {
                            var t;
                            return null != (t = e.volatileUnloadedEntitiesData) ? t : (0, g.HO)(e.unloadedEntitiesData);
                        },
                        get isVibeContext() {
                            return e.contextType === f.K.Vibe;
                        },
                        get isGenerativeContext() {
                            return e.contextType === f.K.Generative;
                        },
                        get isPaused() {
                            return e.status === l.MT.PAUSED;
                        },
                        get isPlaying() {
                            return y.includes(e.status);
                        },
                        get isContextRepeatMode() {
                            return e.repeatMode === b.pM.CONTEXT;
                        },
                        get isOneRepeatMode() {
                            return e.repeatMode === b.pM.ONE;
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
                            t && t.data.meta && (e.entityMeta = p(t));
                        },
                        setUnloadedEntitiesData: (t) => {
                            t && ((e.volatileUnloadedEntitiesData = (0, x.A)(t)), (e.unloadedEntitiesData = (0, n.wg)(t)));
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
                O = a(25099)
                    .z8.props({ artists: n.gK.array(i.PK), isHiddenFromSonataQueue: n.gK.maybe(n.gK.boolean) })
                    .views((e) => ({
                        get idWithContext() {
                            return String(e.clipId);
                        },
                    })),
                S = T.props({
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
            a(27371), a(14413);
            var j = a(63150),
                R = a(45060),
                P = a(32961),
                M = a(25025),
                B = a(98065);
        },
        44746: (e) => {
            e.exports = {
                root: 'ConcertMeta_root__CkKU3',
                city: 'ConcertMeta_city__ngDq2',
                info: 'ConcertMeta_info__czKlU',
                time: 'ConcertMeta_time__gX09u',
                cashback: 'ConcertMeta_cashback__fkZfk',
                meta: 'ConcertMeta_meta__GteL_',
                title: 'ConcertMeta_title__cqonb',
                location: 'ConcertMeta_location__HuUgv',
                rating: 'ConcertMeta_rating__P4Ana',
                separator: 'ConcertMeta_separator__BcJsF',
            };
        },
        45060: (e, t, a) => {
            'use strict';
            a.d(t, { RepeatButton: () => _ });
            var n = a(62936),
                s = a(79950),
                i = a(47480),
                o = a(8669),
                r = a(92720),
                l = a(59935),
                c = a(5099),
                d = a(85742),
                u = a(29265),
                m = a(81531),
                p = a.n(m);
            let _ = (e) => {
                let {
                        isDisabled: t,
                        repeatMode: a,
                        className: m,
                        iconClassName: _,
                        size: v = 'xxxs',
                        iconSize: h = 'xs',
                        color: C,
                        variant: x = 'default',
                        onClick: g,
                    } = e,
                    { formatMessage: f } = (0, i.A)(),
                    N = t || a !== r.pM.ONE ? 'repeat' : 'repeat_one',
                    b = (0, u.z)(a, f, t),
                    y = (0, l.c)((e) => {
                        null == g || g(), e.stopPropagation();
                    });
                return (0, n.jsx)(c.$, {
                    className: m,
                    radius: 'round',
                    size: v,
                    variant: x,
                    color: C,
                    disabled: t,
                    withRipple: !1,
                    'aria-hidden': t,
                    'aria-label': b,
                    'aria-pressed': !t && a !== r.pM.NONE,
                    onClick: y,
                    icon: (0, n.jsx)(d.Icon, {
                        size: h,
                        variant: N,
                        className: (0, s.$)(p().repeatIcon, p()['repeatIcon_'.concat(a)], { [p().repeatIcon_disabled]: t }, _),
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
        45149: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => o });
            var n = a(69526),
                s = a(44020),
                i = a(42561);
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
        46723: (e) => {
            e.exports = {
                root: 'ConcertsBlock_root__d_1G3',
                controls: 'ConcertsBlock_controls__oULxu',
                item: 'ConcertsBlock_item__jMAX9',
                item_singleColumn: 'ConcertsBlock_item_singleColumn__p8ilp',
                preventScroll: 'ConcertsBlock_preventScroll__YeeZH',
                concertsColumn: 'ConcertsBlock_concertsColumn__2M2t_',
            };
        },
        46973: (e) => {
            e.exports = { icon: 'NotificationRepeat_icon__WCf4_', message: 'NotificationRepeat_message__jCngy', icon_unset: 'NotificationRepeat_icon_unset__z2fmU' };
        },
        51099: (e, t, a) => {
            'use strict';
            a.d(t, { ConcertDate: () => u });
            var n = a(62936),
                s = a(79950),
                i = a(47480),
                o = a(8669),
                r = a(20418),
                l = a(42561),
                c = a(84903),
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
        52583: (e, t, a) => {
            'use strict';
            a.d(t, { ArtistMeta: () => m });
            var n = a(62936),
                s = a(19718),
                i = a(44020),
                o = a(47480),
                r = a(20418),
                l = a(42561),
                c = a(22838),
                d = a(44746),
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
                            (null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                a.cashbackValuePercent &&
                                (0, n.jsx)(c.m, { className: u().cashback, valuePercent: a.cashbackValuePercent }),
                            !(null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                (null == a ? void 0 : a.isCashbackExperimentEnabled) &&
                                a.cashbackTitle &&
                                (0, n.jsx)(c.m, { className: u().cashback, title: a.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        52615: (e) => {
            e.exports = {
                root: 'ConcertCardWithImage_root__NHF59',
                cover: 'ConcertCardWithImage_cover__3V2fk',
                cashbackTitle: 'ConcertCardWithImage_cashbackTitle__lfr7z',
                cashback: 'ConcertCardWithImage_cashback__sNa2M',
                shimmerCover: 'ConcertCardWithImage_shimmerCover___X6xn',
                shimmerTitle: 'ConcertCardWithImage_shimmerTitle__YgaQa',
                button: 'ConcertCardWithImage_button__osv22',
                shimmerButton: 'ConcertCardWithImage_shimmerButton__JZEFY',
            };
        },
        55324: (e, t, a) => {
            'use strict';
            a.d(t, { RedesignedConcertMeta: () => p });
            var n = a(62936),
                s = a(19718),
                i = a(44020),
                o = a(26731),
                r = a(8669),
                l = a(60188),
                c = a(20418),
                d = a(22838),
                u = a(44746),
                m = a.n(u);
            let p = (0, s.PA)((e) => {
                let { id: t, concert: a, withCashback: s = !0, withInlineMeta: u = !1, titleSize: p = 'm' } = e,
                    _ = [],
                    v = (0, n.jsx)(c.Caption, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                (null == a ? void 0 : a.eventKind) &&
                    _.push(
                        (0, n.jsx)(c.Caption, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            ...(0, r.Am)(r.OA.concert.CONCERT_CARD_EVENT_KIND),
                            children: (0, n.jsx)(o.A, { id: 'concerts.event-kind', values: { kind: a.eventKind } }),
                        }),
                    ),
                    (null == a ? void 0 : a.contentRating) &&
                        _.push(
                            v,
                            (0, n.jsx)(c.Caption, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                ...(0, r.Am)(r.OA.concert.CONCERT_CARD_CONTENT_RATING),
                                children: a.contentRating,
                            }),
                        );
                let h = (0, l.L)(() =>
                    (null == a ? void 0 : a.city)
                        ? (0, n.jsx)(c.Caption, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              ...(0, r.Am)(r.OA.concert.CONCERT_CARD_LOCATION),
                              children: a.city,
                          })
                        : null,
                );
                return (
                    u && h && _.push(v, h),
                    (0, n.jsxs)('div', {
                        className: m().root,
                        id: t,
                        children: [
                            (0, n.jsx)(c.Caption, {
                                variant: 'div',
                                size: p,
                                weight: 'medium',
                                className: m().city,
                                lineClamp: 1,
                                ...(0, r.Am)(r.OA.concert.CONCERT_CARD_TITLE),
                                children: null == a ? void 0 : a.title,
                            }),
                            (0, n.jsx)('div', { className: m().info, children: _.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            !u && h,
                            s &&
                                (null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                a.cashbackValuePercent &&
                                (0, n.jsx)(d.m, { className: m().cashback, valuePercent: a.cashbackValuePercent }),
                            s &&
                                !(null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                (null == a ? void 0 : a.isCashbackExperimentEnabled) &&
                                a.cashbackTitle &&
                                (0, n.jsx)(d.m, { className: m().cashback, title: a.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        60438: (e, t, a) => {
            'use strict';
            a.d(t, { ConcertCard: () => b });
            var n = a(62936),
                s = a(79950),
                i = a(19718),
                o = a(44020),
                r = a(23480),
                l = a(8669),
                c = a(59935),
                d = a(4497),
                u = a(49923),
                m = a(5099),
                p = a(56721),
                _ = a(42561),
                v = a(2465),
                h = a(11584),
                C = a(21654),
                x = a(4233),
                g = a(51099),
                f = a(34719),
                N = a.n(f);
            let b = (0, i.PA)((e) => {
                let {
                        artistId: t,
                        concert: a,
                        meta: i,
                        viewUuid: f,
                        radius: b = 'l',
                        className: y,
                        shouldSendAnalyticsOnHide: k,
                        forceAfishaWidget: E,
                        shouldShowMask: A,
                    } = e,
                    { state: w, toggleTrue: I, toggleFalse: T } = (0, d.e)(!1),
                    { experiments: O } = (0, _.Pjs)(),
                    S = !E && O.checkExperiment(_.zal.WebNextConcertPage, 'on'),
                    { href: j } = (0, _.uvd)('/concert/:concertId', { params: { concertId: a.id } }),
                    R = (0, _.ZpR)(j),
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
                    M = (0, v.m)({ artistId: t, viewUuid: f }),
                    { ref: B, intersectionPropertyId: K } = (0, _.nMI)({ callback: null !== t ? P : void 0, singleEvent: !k }),
                    D = (0, o.useId)(),
                    F = (0, o.useId)(),
                    L = (0, C.useGetPriceText)()(a),
                    z = (0, c.c)((e) => {
                        (0, u.P)(e, N().ripple), S && (R(e), M(r.H2.ConcertScreen));
                    }),
                    U = (0, c.c)((e) => {
                        I(), M(r.H2.ConcertPurchaseScreen), e.stopPropagation(), e.preventDefault();
                    });
                return (0, n.jsxs)(p.Paper, {
                    radius: b,
                    className: (0, s.$)(N().root, y, { [N().root_withConcertsRedesign]: a.isIdentityExperimentEnabled }),
                    ref: B,
                    'data-intersection-property-id': K,
                    onClick: z,
                    children: [
                        a.datetime &&
                            (0, n.jsx)(g.ConcertDate, {
                                datetime: a.datetime,
                                id: D,
                                className: (0, s.$)(N().date, { [N().dateWithMask]: A, [N().important]: A }),
                                dayClassName: N().dateColor,
                                monthClassName: N().dateColor,
                            }),
                        (0, o.cloneElement)(i, { id: F, concert: a }),
                        a.dataSessionId &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(m.$, {
                                        color: 'primary',
                                        radius: 'xxxl',
                                        className: N().button,
                                        'aria-describedby': ''.concat(D, ' ').concat(F),
                                        'aria-label': L,
                                        onClick: U,
                                        ...(0, l.Am)(l.OA.concert.CONCERT_CARD_BUTTON),
                                        children: L,
                                    }),
                                    (0, n.jsx)(x.AfishaWidget, { dataSessionId: a.dataSessionId, isOpened: w, onOpen: I, onClose: T }),
                                ],
                            }),
                    ],
                });
            });
        },
        61970: (e) => {
            e.exports = { root: 'SonataControls_root__w8uqu' };
        },
        63150: (e, t, a) => {
            'use strict';
            a.d(t, { PromoLandingSonataControls: () => x });
            var n = a(62936),
                s = a(19718),
                i = a(44020),
                o = a(59935),
                r = a(60188),
                l = a(42561),
                c = a(87030),
                d = a(91118),
                u = a(10983),
                m = a(79950),
                p = a(85906),
                _ = a(94301),
                v = a(85031),
                h = a.n(v);
            let C = (0, s.PA)((e) => {
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
                            onClickPlayPause: v,
                            onClickPrev: C,
                            repeatMode: x,
                            onRepeatClick: g,
                            onShuffleClick: f,
                        } = e,
                        { experiments: N } = (0, l.Pjs)(),
                        b = N.checkExperiment(l.zal.WebNextPlayerBarYellowButton, 'on');
                    return (0, n.jsx)(_.a, {
                        onShuffleClick: f,
                        onRepeatClick: g,
                        isDisabledRepeat: !i || a,
                        isDisabledShuffle: !c || a,
                        withShuffle: a || c,
                        shuffle: d,
                        canMoveBackward: o,
                        canMoveForward: r,
                        onClickNext: u,
                        onClickPrev: C,
                        withRepeat: a || i,
                        repeatMode: x,
                        className: t,
                        playButton: (0, n.jsx)(p.DM, {
                            className: h().sonataButton,
                            iconSize: 'l',
                            variant: 'filled',
                            isPlaying: s,
                            iconClassName: (0, m.$)(h().playButtonIcon, { [h().playButtonIcon_withYellowPlayButton]: b }),
                            onClick: v,
                        }),
                    });
                }),
                x = (0, s.PA)((e) => {
                    let { className: t, isMobile: a, entityMeta: s } = e,
                        {
                            promolanding: { state: m },
                        } = (0, l.Pjs)(),
                        p = (0, l.eGp)(),
                        _ = (0, l.brA)(),
                        v = (0, c.useOnRepeatClick)(),
                        h = (0, d.useOnShuffleClick)(),
                        x = (0, l.zwV)(),
                        g = (0, o.c)(() => {
                            s && (null == p || p.togglePause(l.V_r.PROMO_LANDING), _(!m.isPlaying));
                        }),
                        f = (0, o.c)(() => {
                            null == p || p.moveForward(l.V_r.PROMO_LANDING);
                        }),
                        N = (0, o.c)(() => {
                            null == p || p.moveBackward(l.V_r.PROMO_LANDING);
                        }),
                        b = (0, o.c)(() => {
                            v(m, l.V_r.PROMO_LANDING);
                        }),
                        y = (0, o.c)(() => {
                            h(m, l.V_r.PROMO_LANDING);
                        });
                    (0, i.useEffect)(
                        () => (
                            null == x || x.addShortcutsListener(l.Mo.PROMO_LANDING, l.lbr.TOGGLE_PLAY, g),
                            null == x || x.addShortcutsListener(l.Mo.PROMO_LANDING, l.lbr.TOGGLE_REPEAT, b),
                            null == x || x.addShortcutsListener(l.Mo.PROMO_LANDING, l.lbr.TOGGLE_SHUFFLE, y),
                            () => {
                                null == x || x.removeShortcutsListener(l.Mo.PROMO_LANDING, l.lbr.TOGGLE_PLAY),
                                    null == x || x.removeShortcutsListener(l.Mo.PROMO_LANDING, l.lbr.TOGGLE_SHUFFLE),
                                    null == x || x.removeShortcutsListener(l.Mo.PROMO_LANDING, l.lbr.TOGGLE_REPEAT);
                            }
                        ),
                        [g, b, y, x],
                    );
                    let k = (0, r.L)(() => (a ? u.K : C));
                    return (0, n.jsx)(k, {
                        onRepeatClick: b,
                        onShuffleClick: y,
                        className: t,
                        disabled: !s,
                        isPlaying: m.isPlaying,
                        canMoveBackward: m.canMoveBackward,
                        canMoveForward: m.canMoveForward,
                        canShuffle: m.canShuffle,
                        shuffle: m.shuffle,
                        onClickPlayPause: g,
                        onClickNext: f,
                        onClickPrev: N,
                        canChangeRepeatMode: m.canChangeRepeatMode,
                        repeatMode: m.repeatMode,
                    });
                });
        },
        71e3: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => s });
            var n = a(51606);
            let s = (e) => (0, n.wg)(e);
        },
        72786: (e, t, a) => {
            'use strict';
            a.d(t, { kv: () => i, Fn: () => o.OverviewBlock, tm: () => n.t });
            var n = a(71e3),
                s = a(51606);
            let i = s.gK.model('BaseOverview', {
                title: s.gK.maybe(s.gK.string),
                message: s.gK.maybe(s.gK.string),
                isExpandable: s.gK.optional(s.gK.boolean, !0),
                visibleLinesCount: s.gK.optional(s.gK.number, 3),
            });
            var o = a(30948);
        },
        77339: (e) => {
            e.exports = {
                root: 'ConcertImage_root__gZpOa',
                root_withMask: 'ConcertImage_root_withMask__1ayfK',
                image: 'ConcertImage_image__xtZCZ',
                day: 'ConcertImage_day__c90Ih',
                month: 'ConcertImage_month__Ic5k5',
                date: 'ConcertImage_date__aH1IR',
                date_withEventType: 'ConcertImage_date_withEventType__QRb1o',
                day_withEventType: 'ConcertImage_day_withEventType__GI5B9',
                month_withEventType: 'ConcertImage_month_withEventType__Thry7',
                weekday_withEventType: 'ConcertImage_weekday_withEventType__v4vMZ',
                dateBackground: 'ConcertImage_dateBackground__GAONC',
                weekday: 'ConcertImage_weekday__kXeo3',
                important: 'ConcertImage_important__0o7jF',
                cashback: 'ConcertImage_cashback__TQ_tu',
            };
        },
        81339: (e) => {
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
        81531: (e) => {
            e.exports = {
                repeatIcon_none: 'RepeatButton_repeatIcon_none__2nb1J',
                repeatIcon_context: 'RepeatButton_repeatIcon_context__QwVY9',
                repeatIcon_one: 'RepeatButton_repeatIcon_one___mSkU',
                repeatIcon_disabled: 'RepeatButton_repeatIcon_disabled__LwHV_',
            };
        },
        84903: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        85031: (e) => {
            e.exports = {
                root: 'BaseSonataControlsDesktop_root__E6wjA',
                sonataButtons: 'BaseSonataControlsDesktop_sonataButtons__7vLtw',
                sonataButton: 'BaseSonataControlsDesktop_sonataButton__GbwFt',
                playButtonIcon: 'BaseSonataControlsDesktop_playButtonIcon__TlFqv',
                buttonContainer: 'BaseSonataControlsDesktop_buttonContainer__EB404',
            };
        },
        87030: (e, t, a) => {
            'use strict';
            a.d(t, { useOnRepeatClick: () => l });
            var n = a(62936),
                s = a(92720),
                i = a(59935),
                o = a(42561),
                r = a(27371);
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
        88113: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => s });
            var n = a(42561);
            let s = (e) => {
                let { h: t, s: a, l: s } = (0, n.g8k)(e);
                return 'hsl('
                    .concat(t, ', ')
                    .concat(a, '%, ')
                    .concat(s <= 55 ? s + 20 : s - 20, '%)');
            };
        },
        88913: (e, t, a) => {
            'use strict';
            a.d(t, { DonationButton: () => m });
            var n = a(62936),
                s = a(19718),
                i = a(44020),
                o = a(47480),
                r = a(33878),
                l = a(8669),
                c = a(5099),
                d = a(85742);
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
        91118: (e, t, a) => {
            'use strict';
            a.d(t, { useOnShuffleClick: () => r });
            var n = a(62936),
                s = a(59935),
                i = a(42561),
                o = a(14413);
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
        93469: (e, t, a) => {
            'use strict';
            a.d(t, { DonationCarousel: () => m });
            var n = a(62936),
                s = a(79950),
                i = a(44020),
                o = a(33878),
                r = a(21153),
                l = a(85906),
                c = a(97379),
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
        94301: (e, t, a) => {
            'use strict';
            a.d(t, { a: () => v });
            var n = a(62936),
                s = a(79950),
                i = a(19718),
                o = a(47480),
                r = a(8669),
                l = a(59935),
                c = a(5099),
                d = a(85742),
                u = a(45060),
                m = a(32961),
                p = a(85031),
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
                        onRepeatClick: y,
                        onShuffleClick: k,
                    } = e,
                    { formatMessage: E } = (0, o.A)(),
                    A = (0, l.c)(() => {
                        h();
                    }),
                    w = (0, l.c)(() => {
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
                                    onClick: k,
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
                                    'aria-label': E({ id: 'player-actions.previous-track' }),
                                    icon: (0, n.jsx)(d.Icon, { variant: 'previous', size: 'xxs' }),
                                    onClick: w,
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
                                    'aria-label': E({ id: 'player-actions.next-track' }),
                                    icon: (0, n.jsx)(d.Icon, { variant: 'next', size: 'xxs' }),
                                    onClick: A,
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
                                    onClick: y,
                                }),
                            }),
                    ],
                });
            });
        },
        94481: (e, t, a) => {
            'use strict';
            a.d(t, { ConcertCardWithImage: () => w });
            var n = a(62936),
                s = a(19718),
                i = a(26731),
                o = a(23480),
                r = a(8669),
                l = a(59935),
                c = a(60188),
                d = a(4497),
                u = a(5099),
                m = a(20512),
                p = a(20418),
                _ = a(42561),
                v = a(21654),
                h = a(4233),
                C = a(22838);
            let x = ' • ',
                g = (e, t) => {
                    let a = [];
                    return e.city && a.push(e.city), e.place && a.push(e.place), a.join(t);
                };
            var f = a(44746),
                N = a.n(f);
            let b = (0, s.PA)((e) => {
                let { concert: t, cashback: a } = e;
                return (0, n.jsxs)('div', {
                    className: N().meta,
                    children: [
                        (0, n.jsx)(p.Caption, {
                            variant: 'span',
                            type: 'controls',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 1,
                            className: N().title,
                            ...(0, r.Am)(r.OA.concert.CONCERT_CARD_TITLE),
                            children: t.title,
                        }),
                        (0, n.jsxs)(p.Caption, {
                            variant: 'span',
                            type: 'controls',
                            weight: 'medium',
                            className: N().info,
                            children: [
                                (0, n.jsx)(p.Caption, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    lineClamp: 1,
                                    className: N().location,
                                    'aria-label': g(t, ' '),
                                    ...(0, r.Am)(r.OA.concert.CONCERT_CARD_LOCATION),
                                    children: g(t, x),
                                }),
                                (0, n.jsx)(p.Caption, { 'aria-hidden': !0, className: N().separator, variant: 'span', type: 'controls', weight: 'medium', children: x }),
                                (0, n.jsx)(p.Caption, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    className: N().rating,
                                    ...(0, r.Am)(r.OA.concert.CONCERT_CARD_CONTENT_RATING),
                                    children: t.contentRating,
                                }),
                            ],
                        }),
                        a,
                    ],
                });
            });
            var y = a(55324),
                k = a(28865),
                E = a(52615),
                A = a.n(E);
            let w = (0, s.PA)((e) => {
                var t, a, s;
                let { concert: x, withMask: g = !0, withPriceButton: f, withInlineMeta: N = !1 } = e,
                    { state: E, toggleTrue: w, toggleFalse: I } = (0, d.e)(!1),
                    { ref: T, intersectionPropertyId: O } = (0, _.nMI)(),
                    { experiments: S } = (0, _.Pjs)(),
                    j = S.checkExperiment(_.zal.WebNextConcertPage, 'on'),
                    R = (0, _.NKK)(),
                    P = (0, v.useGetPriceText)(),
                    { href: M } = (0, _.uvd)('/concert/:concertId', { params: { concertId: x.id } }),
                    B = (0, _.ZpR)(M),
                    K = P(x),
                    D = (0, l.c)((e) => {
                        R({ to: o.QT.ConcertPurchaseScreen }), w(), null == e || e.stopPropagation();
                    }),
                    F = (0, l.c)((e) => {
                        if (!j) return void D(e);
                        R({ to: o.QT.ConcertScreen }), B(e);
                    }),
                    L = (0, l.c)((e) => {
                        (e.code === _.vLr.SPACE || e.code === _.vLr.ENTER) && (e.preventDefault(), F());
                    }),
                    z = (0, l.c)((e) => {
                        j && (D(e), e.preventDefault());
                    }),
                    U = (0, c.L)(() => {
                        let e = x.isIdentityExperimentEnabled && x.cashbackValuePercent,
                            t = !x.isIdentityExperimentEnabled && x.isCashbackExperimentEnabled && x.cashbackTitle;
                        if (e || t)
                            return (0, n.jsx)(C.m, {
                                className: A().cashback,
                                titleClassName: A().cashbackTitle,
                                title: x.cashbackTitle,
                                valuePercent: x.cashbackValuePercent,
                            });
                    }),
                    G = (0, n.jsx)(y.RedesignedConcertMeta, { concert: x, withCashback: !1, withInlineMeta: N, titleSize: 'l' }),
                    $ = (0, n.jsx)(b, { concert: x, cashback: U });
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)('div', {
                            className: A().root,
                            role: 'button',
                            tabIndex: 0,
                            onClick: F,
                            onKeyDown: L,
                            ref: T,
                            'data-intersection-property-id': O,
                            ...(0, r.Am)(r.OA.concert.CONCERT_CARD),
                            children: [
                                (0, n.jsx)(m.q, { children: (0, n.jsx)(p.Caption, { variant: 'div', children: (0, n.jsx)(i.A, { id: 'entity-names.concert' }) }) }),
                                (0, n.jsx)('div', {
                                    className: A().cover,
                                    children: (0, n.jsx)(k.ConcertImage, {
                                        datetime: x.datetime,
                                        coverColor: null == (t = x.cover) ? void 0 : t.color,
                                        uri: null == (a = x.cover) ? void 0 : a.uri,
                                        withMask: g,
                                        cashbackPercent: x.isIdentityExperimentEnabled ? x.cashbackValuePercent : void 0,
                                    }),
                                }),
                                x.isIdentityExperimentEnabled ? G : $,
                                (null == (s = x.price) ? void 0 : s.value) && (0, n.jsx)(m.q, { children: (0, n.jsx)(p.Caption, { variant: 'div', children: K }) }),
                                f &&
                                    (0, n.jsx)(u.$, {
                                        'aria-hidden': !0,
                                        tabIndex: -1,
                                        radius: 'xxxl',
                                        className: A().button,
                                        size: 'default',
                                        variant: 'default',
                                        color: 'primary',
                                        onClick: z,
                                        ...(0, r.Am)(r.OA.concert.CONCERT_CARD_BUTTON),
                                        children: K,
                                    }),
                            ],
                        }),
                        (0, n.jsx)(h.AfishaWidget, { dataSessionId: x.dataSessionId, isOpened: E, onOpen: w, onClose: I }),
                    ],
                });
            });
        },
        97379: (e) => {
            e.exports = {
                root: 'DonationCarousel_root__Uejjw',
                controls: 'DonationCarousel_controls__anVvP',
                item: 'DonationCarousel_item__89_B6',
                important: 'DonationCarousel_important__Y52Es',
            };
        },
        98065: (e, t, a) => {
            'use strict';
            a.d(t, { SonataVideoControls: () => p });
            var n = a(62936),
                s = a(79950),
                i = a(19718),
                o = a(81959),
                r = a(92720),
                l = a(59935),
                c = a(42561),
                d = a(16453),
                u = a(18395),
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
    },
]);
