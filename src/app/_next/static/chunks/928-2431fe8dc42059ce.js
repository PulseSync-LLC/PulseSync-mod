(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [928],
    {
        246: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => y, q: () => i });
            var i = (function (e) {
                    return (e.VERTICAL = 'vertical'), (e.HORIZONTAL = 'horizontal'), e;
                })({}),
                n = a(54486),
                r = a(50420),
                l = a(28303),
                o = a(61910),
                s = a(43426),
                c = a(31500),
                d = a(8817),
                u = a(27510),
                m = a(62443),
                _ = a(77881),
                p = a(5956),
                v = a(28584),
                h = a(83252),
                g = a(30980),
                x = a.n(g);
            let y = (0, l.PA)((e) => {
                let {
                        className: t,
                        horizontalSliderClassName: a,
                        verticalSliderClassName: l,
                        variant: g = i.HORIZONTAL,
                        playbackId: y,
                        onVolumeClick: b,
                        onVolumeSet: A,
                        sonataVolume: C,
                    } = e,
                    { formatMessage: N } = (0, s.A)(),
                    f = (0, h.NFA)(),
                    I = (0, h.eGp)(),
                    { advert: S } = (0, h.Pjs)(),
                    T = (0, h.rs2)(),
                    { state: P, toggleTrue: k, toggleFalse: E } = (0, m.e)(!1),
                    j = f.get(h.ooW),
                    L = Math.round((null != C ? C : 1) * 100) / 100,
                    w = (0, d.c)((e) => {
                        var t, a;
                        null == T || null == (a = T.audioAdvertPlayback) || null == (t = a.setExponentVolume) || t.call(a, e);
                    }),
                    M = (0, d.c)((e) => {
                        null == I || I.setExponentVolume(e, y);
                    });
                (0, o.useEffect)(() => {
                    S.isAdvertShown && w(L);
                }, [S.isAdvertShown, L, null == T ? void 0 : T.audioAdvertPlayback, w]),
                    (0, o.useEffect)(() => {
                        let e = () => {
                                E(), document.activeElement instanceof HTMLElement && document.activeElement.blur();
                            },
                            t = () => {
                                document.hidden && e();
                            };
                        return (
                            document.addEventListener('visibilitychange', t),
                            window.addEventListener('blur', e),
                            () => {
                                document.removeEventListener('visibilitychange', t), window.removeEventListener('blur', e);
                            }
                        );
                    }, [E]),
                    (0, o.useEffect)(() => {
                        S.isAdvertShown || M(L);
                    }, [S.isAdvertShown, L, I, y, M]);
                let B = (0, d.c)((e) => {
                        M(e), j.set(h.cYZ.YmPlayerVolume, e, { expires: 365 }), S.isAdvertShown && (w(e), A(e));
                    }),
                    O = (0, d.c)(async () => {
                        await b(L);
                    }),
                    R = 0 === L ? 'volumeOff' : 'volume',
                    D = 0 === L ? N({ id: 'player-actions.volume-on' }) : N({ id: 'player-actions.volume-off' }),
                    K = (0, d.c)((e) => {
                        B(Math.max(0, Math.min(1, Math.round(100 * (L + (e.deltaY > 0 ? -1 : 1) * 0.01)) / 100)));
                    }),
                    U = (0, u.L)(() => {
                        if (g === i.HORIZONTAL)
                            return (0, n.jsx)(v.A, {
                                onWheel: K,
                                className: a,
                                thumbSize: 's',
                                trackSize: 's',
                                value: L,
                                maxValue: 1,
                                step: 0.01,
                                onChange: B,
                                'aria-label': N({ id: 'player-actions.volume-control' }),
                                ...(0, c.Am)(c.Kq.changeVolume.CHANGE_VOLUME_SLIDER),
                            });
                    }),
                    F = (0, u.L)(() => {
                        if (g === i.VERTICAL)
                            return (0, n.jsx)('div', {
                                onWheel: K,
                                className: (0, r.$)(x().sliderContainer, { [x().sliderContainer_focusVisible]: P }),
                                children: (0, n.jsx)('div', {
                                    className: x().wrapperSlider,
                                    children: (0, n.jsx)(v.A, {
                                        onMouseLeave: E,
                                        className: (0, r.$)(x().slider, x().important, l),
                                        thumbSize: 's',
                                        onFocus: k,
                                        onBlur: E,
                                        trackSize: 's',
                                        value: L,
                                        maxValue: 1,
                                        step: 0.01,
                                        onChange: B,
                                        'aria-label': N({ id: 'player-actions.volume-control' }),
                                        ...(0, c.Am)(c.Kq.changeVolume.CHANGE_VOLUME_SLIDER),
                                    }),
                                }),
                            });
                    });
                return (0, n.jsxs)('div', {
                    className: (0, r.$)(x().root, t),
                    children: [
                        F,
                        (0, n.jsx)(_.$, {
                            onWheel: K,
                            radius: 'round',
                            size: 'xxxs',
                            variant: 'text',
                            withRipple: !1,
                            onClick: O,
                            'aria-label': D,
                            icon: (0, n.jsx)(p.Icon, { size: 'xs', className: x().icon, variant: R }),
                            className: x().button,
                            ...(0, c.Am)(c.Kq.changeVolume.CHANGE_VOLUME_BUTTON),
                        }),
                        U,
                    ],
                });
            });
        },
        882: (e) => {
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
        1172: (e) => {
            e.exports = {
                root: 'TrackModalLyrics_root__JABJp',
                title: 'TrackModalLyrics_title__zjWl_',
                button: 'TrackModalLyrics_button__YqxIm',
                lyrics: 'TrackModalLyrics_lyrics__naoEF',
            };
        },
        1762: (e, t, a) => {
            'use strict';
            a.d(t, { N1: () => y, i_: () => r, h9: () => i });
            let i = (e) =>
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
                );
            var n = a(93064);
            let r = n.gK.model('BrandedPlayerModal', {
                imageUri: n.gK.maybeNull(n.gK.string),
                content: n.gK.string,
                primaryHref: n.gK.string,
                shouldShowSecondaryButton: n.gK.boolean,
                secondaryText: n.gK.maybeNull(n.gK.string),
            });
            var l = a(54486),
                o = a(28303),
                s = a(43426),
                c = a(47713),
                d = a(8817),
                u = a(77881),
                m = a(5956),
                _ = a(58360),
                p = a(32692),
                v = a(97800),
                h = a(83252),
                g = a(87078),
                x = a.n(g);
            let y = (0, o.PA)((e) => {
                var t;
                let { modal: a } = e,
                    {
                        paywall: i,
                        advertBanners: {
                            banners: { brandedPlayerBanner: n },
                        },
                    } = (0, h.Pjs)(),
                    { contentRootRef: r } = (0, h.gKY)(),
                    { formatMessage: o } = (0, s.A)(),
                    g = (0, h.ZpR)(a.primaryHref),
                    y = (0, d.c)((e) => {
                        var t, a;
                        null == (t = (a = n.modal).onOpenChange) || t.call(a, e);
                    }),
                    b = { '--modal-bottom-offset': ''.concat(null == (t = n.payload) ? void 0 : t.thumb.height, 'px') };
                return (0, l.jsxs)(p.a, {
                    size: 'fitContent',
                    placement: 'default',
                    open: n.modal.isOpened,
                    onOpenChange: y,
                    className: x().root,
                    contentClassName: x().modalContent,
                    portalNode: r,
                    showHeader: !1,
                    closeOnOutsidePress: !1,
                    lockScroll: !1,
                    withOverlay: !1,
                    enableSwipe: !0,
                    style: b,
                    onClose: n.modal.close,
                    shouldCloseOnNavigate: !0,
                    children: [
                        (0, l.jsxs)('header', {
                            children: [
                                a.imageUri && (0, l.jsx)(_.Image, { src: a.imageUri, className: x().image }),
                                (0, l.jsx)(u.$, {
                                    className: x().closeButton,
                                    color: 'primary',
                                    variant: 'text',
                                    radius: 'round',
                                    size: 'xxs',
                                    onClick: n.modal.close,
                                    icon: (0, l.jsx)(m.Icon, { variant: 'close', size: 'xs' }),
                                    'aria-label': o({ id: 'interface-actions.close' }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(v.Caption, { variant: 'span', className: x().content, lineClamp: 2, children: a.content }),
                        (0, l.jsxs)('div', {
                            className: x().actions,
                            children: [
                                (0, l.jsx)(u.$, {
                                    size: 's',
                                    color: 'primary',
                                    variant: 'default',
                                    radius: 'xxxl',
                                    onClick: g,
                                    className: x().button,
                                    children: (0, l.jsx)(v.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        lineClamp: 1,
                                        children: (0, l.jsx)(c.A, { id: 'branded-player.to-website' }),
                                    }),
                                }),
                                a.shouldShowSecondaryButton &&
                                    (0, l.jsx)(u.$, {
                                        size: 's',
                                        color: 'secondary',
                                        variant: 'default',
                                        radius: 'xxxl',
                                        onClick: i.openModal,
                                        className: x().button,
                                        children: (0, l.jsx)(v.Caption, {
                                            variant: 'span',
                                            size: 'm',
                                            lineClamp: 1,
                                            children: a.secondaryText || (0, l.jsx)(c.A, { id: 'branded-player.hide' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
        },
        2782: (e) => {
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
        4073: (e) => {
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
        5128: (e) => {
            e.exports = { root: 'SyncLyrics_root__6KZg4', content: 'SyncLyrics_content__lbkWP' };
        },
        6437: (e) => {
            e.exports = {
                root: 'NavbarDesktopPlusBar_root__QgKqJ',
                logos: 'NavbarDesktopPlusBar_logos__kKKEl',
                addition: 'NavbarDesktopPlusBar_addition__vluXf',
                title: 'NavbarDesktopPlusBar_title__mMdem',
                buttons: 'NavbarDesktopPlusBar_buttons__40_1A',
            };
        },
        7186: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => Y, D: () => N });
            var i = a(93064),
                n = a(15209),
                r = a(26433),
                l = a(56258),
                o = a(83252);
            let s = { width: '614', height: '556' },
                c = { width: '100%', height: '240' },
                d = (e) => ({ width: e ? c.width : s.width, height: e ? c.height : s.height }),
                u = { width: '614', height: '244' },
                m = { width: '100%', height: '240' },
                _ = '{lang}',
                p = RegExp('(px|%)$'),
                v = (e) => e.replace('px', ''),
                h = (e) => (p.test(e) ? e : ''.concat(e).concat('px')),
                g = (e) => {
                    let { width: t, height: a, iframeUri: i, listenMessage: n } = e,
                        r = v(t),
                        l = v(a),
                        o = h(t),
                        s = h(a);
                    return '<iframe frameborder="0" allow="clipboard-write" style="border:none;width:'
                        .concat(o, ';height:')
                        .concat(s, ';" width="')
                        .concat(r, '" height="')
                        .concat(l, '" src="')
                        .concat(i, '">')
                        .concat(n, '</iframe>');
                },
                x = i.gK.model({ width: i.gK.string, height: i.gK.string }),
                y = x
                    .props({
                        id: i.gK.number,
                        type: i.gK.literal(o.Yxq.ALBUM),
                        title: i.gK.string,
                        path: i.gK.string,
                        artistName: i.gK.maybeNull(i.gK.string),
                        artistId: i.gK.maybeNull(i.gK.string),
                        listenMessage: i.gK.maybeNull(i.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                let { location: t } = (0, i.Zn)(e);
                                return (0, o.yK3)({ tld: t.tld, id: e.id });
                            },
                            get entityUri() {
                                let { location: t } = (0, i.Zn)(e),
                                    { config: a } = (0, i._$)(e);
                                return ''.concat((0, n.getTldHost)(a.iframe.entityBaseUrl, t.tld, o.BEZ)).concat(e.path);
                            },
                            get artistUri() {
                                if (null === e.artistId) return null;
                                let { location: t } = (0, i.Zn)(e),
                                    { config: a } = (0, i._$)(e);
                                return ''.concat((0, n.getTldHost)(a.iframe.entityBaseUrl, t.tld, o.BEZ), '/artist/').concat(e.artistId);
                            },
                            get iframeCode() {
                                var a;
                                return g({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (a = e.listenMessage) ? a : '' });
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setWidth(t) {
                            e.width = t;
                        },
                        setHeight(t) {
                            e.height = t;
                        },
                        setListenMessage(t) {
                            var a, i, n, r;
                            e.listenMessage = t(
                                ((a = e.entityUri),
                                (i = e.title),
                                (n = e.artistUri),
                                null === (r = e.artistName)
                                    ? '<a href="'.concat(a, '">').concat(i, '</a>')
                                    : null === n
                                      ? '<a href="'.concat(a, '">').concat(i, '</a> — ').concat(r)
                                      : '<a href="'.concat(a, '">').concat(i, '</a> — <a href="').concat(n, '">').concat(r, '</a>')),
                            );
                        },
                    })),
                b = x
                    .props({
                        id: i.gK.string,
                        type: i.gK.literal(o.Yxq.PLAYLIST),
                        title: i.gK.maybeNull(i.gK.string),
                        path: i.gK.string,
                        ownerLogin: i.gK.maybeNull(i.gK.string),
                        ownerName: i.gK.maybeNull(i.gK.string),
                        listenMessage: i.gK.maybeNull(i.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                var a;
                                let { location: t } = (0, i.Zn)(e);
                                return (0, o.J6z)({ tld: t.tld, ownerLogin: null != (a = e.ownerLogin) ? a : '', id: e.id });
                            },
                            get entityUri() {
                                let { location: t } = (0, i.Zn)(e),
                                    { config: a } = (0, i._$)(e);
                                return ''.concat((0, n.getTldHost)(a.iframe.entityBaseUrl, t.tld, o.BEZ)).concat(e.path);
                            },
                            get iframeCode() {
                                var r;
                                return g({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (r = e.listenMessage) ? r : '' });
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setWidth(t) {
                            e.width = t;
                        },
                        setHeight(t) {
                            e.height = t;
                        },
                        setListenMessage(t) {
                            let a, n, r, l;
                            if (null === e.title || null === e.ownerName || null === e.ownerLogin) {
                                e.listenMessage = t('');
                                return;
                            }
                            let { location: s } = (0, i.Zn)(e);
                            e.listenMessage = t(
                                ((a = e.entityUri),
                                (n = e.title),
                                (r = e.ownerName),
                                (l = (0, o.QoD)(s.tld, e.ownerLogin)),
                                '<a href="'.concat(a, '">').concat(n, '</a> — <a href="').concat(l, '">').concat(r, '</a>')),
                            );
                        },
                    })),
                A = x
                    .props({
                        id: i.gK.string,
                        albumId: i.gK.maybeNull(i.gK.number),
                        type: i.gK.literal(o.Yxq.TRACK),
                        title: i.gK.string,
                        path: i.gK.string,
                        artistName: i.gK.maybeNull(i.gK.string),
                        artistId: i.gK.maybeNull(i.gK.string),
                        listenMessage: i.gK.maybeNull(i.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                var a;
                                let { location: t } = (0, i.Zn)(e);
                                return (0, o.iq5)({ tld: t.tld, id: e.id, albumId: null != (a = e.albumId) ? a : void 0 });
                            },
                            get entityUri() {
                                let { location: t } = (0, i.Zn)(e),
                                    { config: a } = (0, i._$)(e);
                                return ''.concat((0, n.getTldHost)(a.iframe.entityBaseUrl, t.tld, o.BEZ)).concat(e.path);
                            },
                            get artistUri() {
                                if (null === e.artistId) return null;
                                let { location: t } = (0, i.Zn)(e),
                                    { config: a } = (0, i._$)(e);
                                return ''.concat((0, n.getTldHost)(a.iframe.entityBaseUrl, t.tld, o.BEZ), '/artist/').concat(e.artistId);
                            },
                            get iframeCode() {
                                var r;
                                return g({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (r = e.listenMessage) ? r : '' });
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setWidth(t) {
                            e.width = t;
                        },
                        setHeight(t) {
                            e.height = t;
                        },
                        setListenMessage(t) {
                            var a, i, n, r;
                            e.listenMessage = t(
                                ((a = e.entityUri),
                                (i = e.title),
                                (n = e.artistUri),
                                null === (r = e.artistName)
                                    ? '<a href="'.concat(a, '">').concat(i, '</a>')
                                    : null === n
                                      ? '<a href="'.concat(a, '">').concat(i, '</a> — ').concat(r)
                                      : '<a href="'.concat(a, '">').concat(i, '</a> — <a href="').concat(n, '">').concat(r, '</a>')),
                            );
                        },
                    })),
                C = i.gK.union(A, y, b),
                N = i.gK.model({ entity: i.gK.maybeNull(C), modal: r.qt }).actions((e) => ({
                    openModal(t) {
                        let { settings: a } = (0, i.Zn)(e);
                        (e.entity = ((e, t) => {
                            if (e.variant === o.Yxq.TRACK)
                                return ((e) => {
                                    let t,
                                        { variant: a, id: n, title: r, path: l, trackArtistName: o, trackArtistId: s, trackAlbumId: c, isMobile: d } = e;
                                    return (0, i.wg)({
                                        id: n,
                                        type: a,
                                        albumId: c,
                                        title: r,
                                        path: l,
                                        artistName: null != o ? o : null,
                                        artistId: null != s ? s : null,
                                        ...{ width: (t = d) ? m.width : u.width, height: t ? m.height : u.height },
                                    });
                                })({ ...e, isMobile: t });
                            if (e.variant === o.Yxq.ALBUM) {
                                let a = e.id;
                                if (void 0 === a) throw new l.t('Missing album ID');
                                return ((e) => {
                                    let { variant: t, id: a, title: n, path: r, albumArtistName: l, albumArtistId: o, isMobile: s } = e;
                                    return (0, i.wg)({ id: a, type: t, title: n, path: r, artistName: null != l ? l : null, artistId: null != o ? o : null, ...d(s) });
                                })({ ...e, id: a, isMobile: t });
                            }
                            if (e.variant === o.Yxq.PLAYLIST)
                                return ((e) => {
                                    let { variant: t, id: a, title: n, path: r, playlistOwnerName: l, playlistOwnerLogin: o, isMobile: s } = e;
                                    return (0, i.wg)({
                                        id: String(a),
                                        type: t,
                                        title: null != n ? n : null,
                                        path: null != r ? r : null,
                                        ownerName: l,
                                        ownerLogin: o,
                                        ...d(s),
                                    });
                                })({ ...e, isMobile: t });
                            throw new l.t('Unknown variant');
                        })({ ...t, title: (0, n.sanitizeDOM)(t.title || '', { whiteList: {} }) }, a.isMobile)),
                            e.modal.open();
                    },
                    closeModal() {
                        e.modal.close(), (e.entity = null);
                    },
                }));
            var f = a(54486),
                I = a(28303),
                S = a(43426),
                T = a(31500),
                P = a(32692),
                k = a(61910),
                E = a(47713),
                j = a(8817),
                L = a(77881),
                w = a(5956),
                M = a(19009),
                B = a(97800);
            let O = (e, t) => (p.test(e) ? e : 0 === e.trim().length ? ''.concat(t, 'px') : ''.concat(Math.max(Number(e), t), 'px'));
            var R = a(80585),
                D = a(61931),
                K = a.n(D);
            let U = (e) => {
                let { closeToast: t } = e;
                return (0, f.jsx)(R.$W, {
                    closeToast: t,
                    cover: (0, f.jsx)(w.Icon, { className: K().icon, size: 'xs', variant: 'chain' }),
                    message: (0, f.jsx)(B.Caption, {
                        className: K().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, f.jsx)(E.A, { id: 'notifications-info.html-code-copied' }),
                    }),
                    coverRadius: 's',
                });
            };
            var F = a(33175),
                z = a.n(F);
            let V = (0, I.PA)((e) => {
                let { entity: t } = e,
                    { formatMessage: a } = (0, S.A)(),
                    { language: i } = (0, o.h6b)(),
                    { notify: n } = (0, o.lkh)();
                (0, k.useEffect)(() => {
                    t.setListenMessage((e) => a({ id: 'share.iframe-listen' }, { html: e }));
                }, [t, a]);
                let r = (0, j.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        t.setWidth(a);
                    }),
                    l = (0, j.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        !p.test(a) && (0 === a.length || Number.isNaN(Number(a)) || 220 > Number(a)) && t.setWidth(String(220));
                    }),
                    s = (0, j.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        t.setHeight(a);
                    }),
                    c = (0, j.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        !p.test(a) && (0 === a.length || Number.isNaN(Number(a)) || 88 > Number(a)) && t.setHeight(String(88));
                    }),
                    d = { width: O(t.width, 220), height: O(t.height, 88) },
                    u = t.iframeUri.replace(_, i),
                    m = t.iframeCode.replace(_, i),
                    v = (0, j.c)(async () => {
                        await window.navigator.clipboard.writeText(m), n((0, f.jsx)(U, {}), { containerId: o.uQT.INFO });
                    });
                return (0, f.jsxs)('div', {
                    className: z().root,
                    ...(0, T.Am)(T.Kq.shareIframe.SHARE_IFRAME_EDITOR),
                    children: [
                        (0, f.jsxs)('form', {
                            className: z().controls,
                            children: [
                                (0, f.jsxs)('div', {
                                    className: z().settings,
                                    children: [
                                        (0, f.jsx)(M.p, {
                                            containerClassName: z().sizeInputContainer,
                                            size: 'xxxs',
                                            value: t.width,
                                            variant: 'secondary',
                                            pattern: '^\\d+(px|%)?$',
                                            min: 220,
                                            required: !0,
                                            onChange: r,
                                            onBlur: l,
                                            'aria-label': a({ id: 'share.iframe-editor-width' }),
                                            ...(0, T.Am)(T.Kq.shareIframe.SHARE_IFRAME_EDITOR_WIDTH_INPUT),
                                        }),
                                        (0, f.jsx)(w.Icon, { size: 'xs', variant: 'close' }),
                                        (0, f.jsx)(M.p, {
                                            containerClassName: z().sizeInputContainer,
                                            size: 'xxxs',
                                            value: t.height,
                                            pattern: '^\\d+(px|%)?$',
                                            variant: 'secondary',
                                            min: 88,
                                            required: !0,
                                            onChange: s,
                                            onBlur: c,
                                            'aria-label': a({ id: 'share.iframe-editor-height' }),
                                            ...(0, T.Am)(T.Kq.shareIframe.SHARE_IFRAME_EDITOR_HEIGHT_INPUT),
                                        }),
                                    ],
                                }),
                                (0, f.jsx)(M.p, {
                                    inputClassName: z().iframeCodeInput,
                                    containerClassName: z().iframeCodeInputContainer,
                                    type: 'text',
                                    size: 'xxxs',
                                    variant: 'secondary',
                                    value: m,
                                    required: !0,
                                    readOnly: !0,
                                    'aria-label': a({ id: 'share.iframe-editor-code' }),
                                    ...(0, T.Am)(T.Kq.shareIframe.SHARE_IFRAME_EDITOR_CODE_INPUT),
                                }),
                                (0, f.jsx)(L.$, {
                                    color: 'primary',
                                    className: z().copyButton,
                                    size: 'l',
                                    radius: 'xxxl',
                                    onClick: v,
                                    ...(0, T.Am)(T.Kq.shareIframe.SHARE_IFRAME_EDITOR_COPY_BUTTON),
                                    children: (0, f.jsx)(B.Caption, {
                                        type: 'text',
                                        variant: 'div',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        children: (0, f.jsx)(E.A, { id: 'share.iframe-copy' }),
                                    }),
                                }),
                            ],
                        }),
                        (0, f.jsx)('div', {
                            className: z().iframeContainer,
                            style: d,
                            ...(0, T.Am)(T.Kq.shareIframe.SHARE_IFRAME_EDITOR_PREVIEW),
                            children: (0, f.jsx)('iframe', { className: z().iframe, src: u, title: a({ id: 'share.iframe-editor-preview' }) }),
                        }),
                    ],
                });
            });
            var W = a(11180),
                G = a.n(W);
            let Y = (0, I.PA)(() => {
                let {
                        shareIframe: e,
                        settings: { isMobile: t },
                    } = (0, o.Pjs)(),
                    { formatMessage: a } = (0, S.A)();
                return e.entity
                    ? (0, f.jsx)(P.a, {
                          className: G().root,
                          contentClassName: G().content,
                          open: e.modal.isOpened,
                          onOpenChange: e.modal.onOpenChange,
                          placement: t ? 'default' : 'center',
                          size: 'fitContent',
                          title: a({ id: 'share.iframe-modal-title' }),
                          labelClose: a({ id: 'interface-actions.close' }),
                          onClose: e.closeModal,
                          overlayColor: 'full',
                          containerProps: (0, T.Am)(T.Kq.shareIframe.SHARE_IFRAME_MODAL),
                          children: (0, f.jsx)(V, { entity: e.entity }),
                      })
                    : null;
            });
        },
        7495: (e) => {
            e.exports = { root: 'Timecode_root__TLT75', root_start: 'Timecode_root_start__pHG5N', root_end: 'Timecode_root_end__LLQsh' };
        },
        7917: (e) => {
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
        11180: (e) => {
            e.exports = { root: 'ShareIframeModal_root__t_NbK', content: 'ShareIframeModal_content__jcq_o' };
        },
        11284: (e) => {
            e.exports = {
                contextMenu: 'PinItem_contextMenu__VwiFp',
                contextMenu_visible: 'PinItem_contextMenu_visible__Zgwkh',
                root: 'PinItem_root__WSoCn',
                image: 'PinItem_image__Ow56U',
                cover: 'PinItem_cover__9TcjE',
                tooltip: 'PinItem_tooltip__BGwBw',
            };
        },
        13403: (e, t, a) => {
            'use strict';
            a.d(t, { A2: () => ee, bg: () => h });
            var i = a(83252);
            async function n(e) {
                var t, a, n, r, l, o, s;
                let c,
                    d,
                    { clipMeta: u, additional: m } = e,
                    _ = await (0, i.WGy)(m.locale);
                return (
                    u
                        ? ((c = _(
                              { id: 'metadata.clips-title' },
                              { clipTitle: u.title, clipArtists: null == (a = u.artists) || null == (t = a.map((e) => e.name)) ? void 0 : t.join(', ') },
                          )),
                          (d = _(
                              { id: 'metadata.clips-description' },
                              { clipTitle: u.title, clipArtists: null == (r = u.artists) || null == (n = r.map((e) => e.name)) ? void 0 : n.join(', ') },
                          )))
                        : ((c = _({ id: 'metadata.clips-title-default' })), (d = _({ id: 'metadata.clips-description-default' }))),
                    {
                        title: c,
                        description: d,
                        openGraph: (0, i.i$E)({
                            ogTitle: c,
                            ogDescription: d,
                            ogType: 'website',
                            fullUrl: null != (l = m.fullUrl) ? l : '',
                            locale: m.locale,
                            customImage: (0, i.vWM)({ tld: m.tld }),
                            siteName: _({ id: 'metadata.yandex-music' }),
                        }),
                        twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: c, description: d }),
                        facebook: (0, i.kRl)(),
                        appLinks: (0, i.X5i)({
                            additional: { ...m, url: null != (o = m.url) ? o : '', fullUrl: null != (s = m.fullUrl) ? s : '', host: m.host },
                            appName: _({ id: 'metadata.yandex-music' }),
                        }),
                    }
                );
            }
            var r = a(61910),
                l = a(65779),
                o = a(93064),
                s = a(14287),
                c = a(5693),
                d = a(89461),
                u = a(54830),
                m = a(26433),
                _ = a(63585),
                p = a(97719);
            let v = o.gK
                    .model('VideoPlayerState', {
                        contextType: o.gK.maybeNull(o.gK.enumeration(Object.values(_.K))),
                        contextId: o.gK.maybeNull(o.gK.string),
                        entityMeta: o.gK.maybeNull(p.Op),
                        status: o.gK.enumeration(Object.values(d.MT)),
                        canMoveForward: o.gK.boolean,
                        canMoveBackward: o.gK.boolean,
                    })
                    .actions((e) => ({
                        setContextId: (t) => {
                            e.contextId = String(t);
                        },
                        setContextType: (t) => {
                            e.contextType = t;
                        },
                        setEntityMeta: (t) => {
                            (null == t ? void 0 : t.data.meta) && (e.entityMeta = (0, p.EX)(t));
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
                    })),
                h = o.gK
                    .compose(
                        o.gK.model('FullscreenVideoPlayer', {
                            modal: m.qt,
                            ids: o.gK.array(o.gK.number),
                            activeIndex: o.gK.maybeNull(o.gK.number),
                            clips: o.gK.array(l.kv),
                            errorStatusCode: o.gK.maybeNull(o.gK.number),
                            state: v,
                            sonataStatusBeforeClipStart: o.gK.enumeration(Object.values(d.MT)),
                            isOpenedFromMain: o.gK.maybeNull(o.gK.boolean),
                            withAnimation: o.gK.boolean,
                        }),
                        m.XT,
                        m.pl,
                    )
                    .views((e) => {
                        let t = {
                            get clipActiveIndex() {
                                return e.activeIndex || 0;
                            },
                            get clipActive() {
                                return e.clips[t.clipActiveIndex];
                            },
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === i.GuX.PENDING;
                            },
                            get isNotFound() {
                                let t = e.isResolved && 0 === e.clips.length;
                                return e.errorStatusCode === s.X1.NOT_FOUND || t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                            get entitiesData() {
                                return e.ids.map((e) => ({ type: c.R.Clip, meta: { id: e }, loadEntityMeta: !0 }));
                            },
                            get isPlayingSonataStatusBeforeClipStart() {
                                return e.sonataStatusBeforeClipStart === d.MT.PLAYING;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setIds(t) {
                            e.ids = (0, o.wg)(t);
                        },
                        setClipIndex() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            e.activeIndex = t;
                        },
                        setOpenedFromMain() {
                            (e.isOpenedFromMain = !0), (e.withAnimation = !1);
                        },
                        setAnimationState(t) {
                            e.withAnimation = t;
                        },
                        setSonataStatusBeforeClipStart() {
                            let { sonataState: t } = (0, o.Zn)(e);
                            e.sonataStatusBeforeClipStart = t.status;
                        },
                        getClips: (0, o.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, o._$)(e);
                            if (e.loadingState !== i.GuX.PENDING)
                                try {
                                    e.loadingState = i.GuX.PENDING;
                                    let a = yield t.getClip({ clipIds: e.ids });
                                    (e.ids = (0, o.wg)(a.map((e) => e.clipId))),
                                        (e.clips = (0, o.wg)(a.map(l.i$))),
                                        (e.activeIndex = (0, u.z4)(e.ids, e.activeIndex)),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), t instanceof s.GX && (e.errorStatusCode = t.statusCode), e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = i.GuX.IDLE),
                                (e.activeIndex = null),
                                (e.errorStatusCode = null),
                                (e.isOpenedFromMain = null),
                                (e.withAnimation = !0),
                                (e.sonataStatusBeforeClipStart = d.MT.IDLE),
                                e.destroyItems([e.ids, e.clips]);
                        },
                    }));
            var g = a(54486),
                x = a(28303),
                y = a(50420),
                b = a(43426),
                A = a(31500),
                C = a(8817),
                N = a(77881),
                f = a(5956),
                I = a(32692),
                S = a(62662),
                T = a(80585),
                P = a(12186),
                k = a(62443),
                E = a(25818),
                j = a(246),
                L = a(93666),
                w = a(97800),
                M = a(21365),
                B = a(63695),
                O = a(39298),
                R = a.n(O);
            let D = (0, x.PA)((e) => {
                let {
                        className: t,
                        clip: a,
                        withExplicitMark: n = !0,
                        withSecondaryColor: l,
                        captionSize: o = 'm',
                        explicitSize: s = 'xxxs',
                        withAllArtistsTitle: c,
                        withCustomTooltip: d = !0,
                        hasLineClamp: u = !0,
                        withArtistLink: m = !0,
                    } = e,
                    _ = (0, M.$N)({ withCustomTooltip: d }),
                    p = (0, r.useCallback)(
                        (e) => {
                            let t = String(a.title);
                            return (0, g.jsx)(L.m_, {
                                enabled: _,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: i.VP$,
                                children: (0, g.jsx)(w.Caption, {
                                    className: (0, y.$)(R().text, R().title),
                                    type: 'entity',
                                    size: o,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: a.title,
                                }),
                            });
                        },
                        [_, o, a.title],
                    ),
                    v = (0, r.useMemo)(() => p((0, A.Am)(A.Kq.clip.CLIP_META_TITLE)), [p]),
                    h = (0, M.su)(a.artists);
                return (0, g.jsx)('div', {
                    className: (0, y.$)(R().root, { [R().root_withSecondaryColor]: l }, t),
                    children: (0, g.jsxs)('div', {
                        className: R().metaContainer,
                        children: [
                            (0, g.jsxs)('div', {
                                className: R().titleContainer,
                                children: [
                                    (0, g.jsx)(w.Caption, { type: 'entity', size: o, weight: 'medium', variant: 'div', lineClamp: 1, children: v }),
                                    a.explicitDisclaimer &&
                                        n &&
                                        (0, g.jsx)(T.Nq, {
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            size: s,
                                            variant: a.explicitDisclaimer,
                                            className: R().explicitMark,
                                            trackId: String(a.clipId),
                                        }),
                                ],
                            }),
                            h.length > 0 &&
                                (0, g.jsx)(B.iQ, {
                                    linkClassName: R().link,
                                    captionClassName: R().artistCaption,
                                    artists: h,
                                    withLink: m,
                                    lineClamp: +!!u,
                                    captionSize: o,
                                    withAllArtistsTitle: c,
                                    withCustomTooltip: _,
                                }),
                        ],
                    }),
                });
            });
            var K = a(53226),
                U = a.n(K);
            let F = (0, x.PA)((e) => {
                    let { entityMeta: t, onLikeClick: a, onContextMenuOpenChange: n, isContextMenuOpened: o } = e,
                        { user: s, sonataState: c, fullscreenVideoPlayer: d } = (0, i.Pjs)(),
                        { isPassToProduct: u } = (0, i.XCI)(),
                        m = (0, p.d0)(),
                        _ = (0, C.c)(async (e) => {
                            await m(c, e);
                        }),
                        v = (0, C.c)((e) => {
                            c.setVolume(e);
                        }),
                        h = (0, r.useMemo)(
                            () =>
                                t
                                    ? (0, g.jsx)('div', { className: U().description, children: (0, g.jsx)(D, { captionSize: 'l', clip: t, withSecondaryColor: !0 }) })
                                    : null,
                            [t],
                        );
                    return (0, g.jsxs)('section', {
                        className: U().root,
                        children: [
                            (0, g.jsxs)('div', {
                                className: U().info,
                                children: [
                                    (0, g.jsx)('div', { className: U().infoCard, children: h }),
                                    (0, g.jsxs)('div', {
                                        className: U().infoButtons,
                                        children: [
                                            d.clipActive &&
                                                (0, g.jsx)(l.zb, {
                                                    placement: 'top-start',
                                                    icon: (0, g.jsx)(f.Icon, { variant: 'more', size: 'm' }),
                                                    size: 'l',
                                                    clip: d.clipActive,
                                                    onOpenChange: n,
                                                    open: o,
                                                    ...(0, A.Am)(A.Kq.clip.CLIP_CONTEXT_MENU_BUTTON),
                                                }),
                                            t &&
                                                (0, g.jsx)(T.cy, {
                                                    className: U().likeButton,
                                                    isLiked: t.isLiked,
                                                    iconSize: 'xs',
                                                    onClick: a,
                                                    disabled: !s.isAuthorized,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, g.jsxs)('div', {
                                className: U().sonata,
                                children: [
                                    (0, g.jsx)(p.qF, {}),
                                    (0, g.jsx)(E.v, {
                                        sliderClassName: (0, y.$)(U().slider, U().important),
                                        disabled: !t,
                                        isMobile: !1,
                                        isFullscreen: !1,
                                        canMoveForward: d.state.canMoveForward,
                                        customDuration: (null == s ? void 0 : s.isAuthorized) && !u ? void 0 : 29,
                                        sonataPlaybackId: i.V_r.CLIP,
                                    }),
                                ],
                            }),
                            (0, g.jsx)('div', {
                                className: U().meta,
                                children: (0, g.jsx)(j.r, {
                                    sonataVolume: c.volume,
                                    onVolumeSet: v,
                                    onVolumeClick: _,
                                    horizontalSliderClassName: (0, y.$)(U().slider, U().important),
                                }),
                            }),
                        ],
                    });
                }),
                z = (0, x.PA)((e) => {
                    let { className: t, isSettingsMenuOpened: a, onSettingsMenuOpenChange: n, isContextMenuOpened: r, onContextMenuOpenChange: l } = e,
                        { fullscreenVideoPlayer: o } = (0, i.Pjs)(),
                        s = (0, u.KX)(o.state.entityMeta),
                        {
                            settings: { isMobile: c },
                        } = (0, i.Pjs)();
                    return c
                        ? null
                        : (0, g.jsx)(F, {
                              className: t,
                              onLikeClick: s,
                              entityMeta: o.state.entityMeta,
                              isSettingsMenuOpened: a,
                              onSettingsMenuOpenChange: n,
                              isContextMenuOpened: r,
                              onContextMenuOpenChange: l,
                          });
                });
            var V = a(35311),
                W = a.n(V);
            let G = (0, x.PA)(() => {
                    let { fullscreenVideoPlayer: e } = (0, i.Pjs)(),
                        { state: t, toggleTrue: a, toggleFalse: n } = (0, k.e)(!1),
                        { state: o, toggleTrue: s, toggleFalse: c } = (0, k.e)(!1),
                        { state: u, toggleTrue: m, toggleFalse: _ } = (0, k.e)(!1),
                        p = (0, r.useRef)(null),
                        [v, h] = (0, r.useState)(!1),
                        [x, b] = (0, r.useState)(!1),
                        A = x || v,
                        N = (0, r.useMemo)(
                            () =>
                                (0, P.A)(() => {
                                    n(), c();
                                }, 1500),
                            [c, n],
                        ),
                        f = (0, r.useMemo)(
                            () =>
                                (0, P.A)(() => {
                                    c();
                                }, 1500),
                            [c],
                        ),
                        I = (0, C.c)(() => {
                            f.cancel(), s(), m();
                        }),
                        S = (0, C.c)(() => {
                            f(), _();
                        }),
                        E = (0, C.c)(() => {
                            v || x || N();
                        }),
                        j = (0, C.c)((e) => {
                            e.stopPropagation(), N.cancel(), f.cancel(), a(), s(), N();
                        }),
                        L = (0, C.c)((e) => {
                            e.stopPropagation(), N.cancel(), f.cancel(), a(), N();
                        }),
                        w = (0, C.c)(() => {
                            t ? N.cancel() : a(), N();
                        });
                    (0, r.useEffect)(
                        () => (
                            window.addEventListener('mousemove', w),
                            () => {
                                window.removeEventListener('mousemove', w);
                            }
                        ),
                        [w],
                    ),
                        (0, r.useEffect)(() => {
                            t || c();
                        }, [c, t]);
                    let M = e.state.status !== d.MT.PLAYING,
                        B = (0, r.useMemo)(
                            () =>
                                (0, g.jsx)(l.tD, {
                                    className: W().carousel,
                                    containerClassName: W().carouselBlock,
                                    clipCardTitleClassName: (0, y.$)(W().clipCardTitle, W().important),
                                    clipCardArtistLinkClassName: (0, y.$)(W().clipCardArtist, W().important),
                                    isShimmerVisible: e.isLoading,
                                    isShimmerActive: !0,
                                    clips: e.clips,
                                    shouldOpenModalOnCardClick: !1,
                                    itemCounter: 5,
                                    ref: p,
                                }),
                            [e.clips, e.isLoading, p],
                        );
                    return (
                        (0, r.useEffect)(() => {
                            (o || u) && (a(), s());
                        }, [u, o, s, a]),
                        (0, g.jsxs)('div', {
                            className: (0, y.$)(W().root, { [W().root_visible]: t || M || u || A, [W().root_withHoveredCarousel]: o }),
                            onMouseEnter: a,
                            onMouseLeave: E,
                            onFocus: L,
                            children: [
                                (0, g.jsx)(z, { isSettingsMenuOpened: v, onSettingsMenuOpenChange: h, isContextMenuOpened: x, onContextMenuOpenChange: b }),
                                (0, g.jsx)(i.FoH, {
                                    blockId: i.hf$.CLIPS_CAROUSEL,
                                    blockType: i.hf$.CLIPS_CAROUSEL,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: e.clips.length,
                                    children: (0, g.jsx)('div', {
                                        className: W().carouselContainer,
                                        onMouseEnter: I,
                                        onMouseLeave: S,
                                        onFocus: j,
                                        children: (0, g.jsx)(T.FY, {
                                            className: W().carouselWrapper,
                                            carouselElement: B,
                                            ref: p,
                                            isCarouselBetweenArrows: !0,
                                            controlsWrapperClassName: W().carouselControls,
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
                Y = (0, x.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, i.Pjs)();
                    return e ? null : (0, g.jsx)(G, {});
                });
            var Q = a(3728),
                $ = a(93622),
                q = a.n($);
            let H = (0, x.PA)((e) => {
                let { closeModal: t } = e,
                    a = (0, r.useRef)(null),
                    n = (0, i.eGp)(),
                    {
                        sonataState: { isVHCoreRegistered: o },
                        fullscreenVideoPlayer: s,
                        advert: c,
                    } = (0, i.Pjs)(),
                    { from: m } = (0, i.fyy)({ pageId: i._Q$.VIDEO_PLAYER, contextId: s.state.contextId, contextType: _.K.Various }),
                    p = (0, i.XJ9)(),
                    { state: v, toggleFalse: h } = (0, k.e)(!0),
                    { togglePlay: x } = (0, i.Dx4)({
                        playContextParams: { contextData: { type: _.K.Various, meta: { id: i.H7u.VARIOUS_CLIP_CONTEXT }, from: m }, loadContextMeta: !0 },
                        sonataState: s.state,
                        playbackId: i.V_r.CLIP,
                    }),
                    b = (0, l.XP)({ clip: s.clips[s.clipActiveIndex], callback: x, disclaimerRejectHandler: t });
                return (
                    (0, r.useEffect)(() => {
                        let e, t, r;
                        if (a.current && n && o) {
                            let l, o;
                            s.setSonataStatusBeforeClipStart(),
                                n.setVideoCoreContainer({ container: a.current, playbackId: i.V_r.CLIP }),
                                n
                                    .setContext(
                                        {
                                            contextData: { type: _.K.Various, meta: { id: i.H7u.VARIOUS_CLIP_CONTEXT }, from: m },
                                            entitiesData: s.entitiesData,
                                            queueParams: { index: s.clipActiveIndex },
                                            loadContextMeta: !1,
                                        },
                                        i.V_r.CLIP,
                                    )
                                    .then(() => {
                                        c.isAdvertShown || b();
                                    });
                            let d = n.getState(i.V_r.CLIP);
                            (e = d.queueState.currentEntity.onChange((e) => {
                                var t;
                                let a = null == e ? void 0 : e.context.data.type,
                                    i = null == e ? void 0 : e.context.data.meta.id,
                                    n = null == e ? void 0 : e.entity.data.meta.id;
                                if (n) {
                                    let e = (0, u.z4)(s.ids, s.ids.indexOf(Number(n)));
                                    s.setClipIndex(e), p((0, u.JL)(s.ids, e));
                                }
                                s.state.setEntityMeta(null != (t = null == e ? void 0 : e.entity) ? t : null),
                                    a && s.state.setContextType(a),
                                    i && s.state.setContextId(i);
                            })),
                                (t = d.playerState.status.onChange((e) => {
                                    e && s.state.setStatus(e);
                                })),
                                (r = d.currentContext.onChange((e) => {
                                    null == l || l(),
                                        null == o || o(),
                                        (l =
                                            null == e
                                                ? void 0
                                                : e.availableActions.moveBackward.onChange((e) => {
                                                      s.state.setCanMoveBackward(!!e);
                                                  })),
                                        (o =
                                            null == e
                                                ? void 0
                                                : e.availableActions.moveForward.onChange((e) => {
                                                      s.state.setCanMoveForward(!!e);
                                                  }));
                                }));
                        }
                        return () => {
                            null == n || n.destroyVideoCore(i.V_r.CLIP),
                                s.isPlayingSonataStatusBeforeClipStart && (null == n || n.resume()),
                                null == e || e(),
                                null == t || t(),
                                null == r || r();
                        };
                    }, [n, o, s, m, p, x, b, c.isAdvertShown]),
                    (0, r.useEffect)(() => {
                        s.state.status === d.MT.PLAYING && h();
                    }, [s.state.status, h]),
                    (0, g.jsxs)('div', {
                        className: q().root,
                        children: [
                            (0, g.jsx)('div', { onClick: x, ref: a, className: q().container }),
                            (0, g.jsx)('div', {
                                className: (0, y.$)(q().loadingIndicator, { [q().loadingIndicator_showed]: v }),
                                children: (0, g.jsx)(Q.y, { size: 'm' }),
                            }),
                        ],
                    })
                );
            });
            var X = a(90812),
                Z = a.n(X);
            let J = (0, x.PA)(() => {
                    let { formatMessage: e } = (0, b.A)(),
                        {
                            advertBanners: {
                                banners: { topAdvertBanner: t },
                            },
                            fullscreenVideoPlayer: a,
                            modals: { disclaimerModal: o },
                        } = (0, i.Pjs)(),
                        { defaultLayoutRef: s } = (0, i.gKY)(),
                        c = (0, i.v8p)(),
                        d = (0, i.pqZ)(),
                        { notify: m } = (0, i.lkh)(),
                        _ = (0, i.eGp)(),
                        p = (0, i.jjz)(),
                        v = (0, u.QV)(),
                        h = (0, u.Hx)(),
                        [x] = a.ids,
                        P = (0, C.c)(() => {
                            let e = (0, i.qne)(i.K3F.IDS),
                                t = (0, i.qne)(i.K3F.ACTIVE_INDEX),
                                { clipIds: n, activeClipIndex: r } = (0, l.V1)(e, t);
                            n.length
                                ? (a.setIds(n),
                                  a.setClipIndex(r),
                                  a.setAnimationState(!1),
                                  null == _ || _.setEntityByIndex(a.clipActiveIndex, i.V_r.CLIP),
                                  a.modal.open())
                                : (a.modal.close(), a.reset());
                        }),
                        k = (0, C.c)(() => {
                            if (a.modal.isOpened && !o.isOpened) {
                                if ((a.setAnimationState(!0), x && h(String(x)), a.isOpenedFromMain)) {
                                    d(i.Zyd.main.href),
                                        (0, i.Zgt)({ fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                            (0, i.jxB)(e);
                                        }),
                                        a.modal.close(),
                                        a.reset();
                                    return;
                                }
                                c();
                            }
                        });
                    ((e) => {
                        let { fullscreenVideoPlayer: t, advert: a } = (0, i.Pjs)(),
                            n = (0, i.eGp)(),
                            l = (0, i.zwV)(),
                            o = (0, u.KX)(t.state.entityMeta);
                        (0, r.useEffect)(() => {
                            if (a.isAdvertShown) {
                                null == l || l.disable(i.Mo.VIDEO_PLAYER);
                                return;
                            }
                            t.modal.isOpened
                                ? (null == l || l.disable(i.Mo.MAIN),
                                  null == l || l.enable(i.Mo.MAIN, i.lbr.TOGGLE_MUTE),
                                  null == l || l.enable(i.Mo.MAIN, i.lbr.INCREASE_VOLUME),
                                  null == l || l.enable(i.Mo.MAIN, i.lbr.DECREASE_VOLUME),
                                  null == l || l.enable(i.Mo.VIDEO_PLAYER))
                                : (null == l || l.disable(i.Mo.VIDEO_PLAYER), null == l || l.enable(i.Mo.MAIN));
                        }, [l, t.modal.isOpened, a.isAdvertShown]);
                        let s = null == n ? void 0 : n.getState(i.V_r.CLIP);
                        (0, r.useEffect)(
                            () => (
                                null == l || l.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.CLOSE, e),
                                null == l ||
                                    l.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.TOGGLE_PLAY, () => {
                                        null == n || n.togglePause(i.V_r.CLIP);
                                    }),
                                null == l || l.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.LIKE, o),
                                null == l ||
                                    l.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.MOVE_FORWARD, async () => {
                                        var e;
                                        (null == s || null == (e = s.currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                            (await (null == n ? void 0 : n.moveForward(i.V_r.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.MOVE_BACKWARD, async () => {
                                        var e;
                                        (null == s || null == (e = s.currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                            (await (null == n ? void 0 : n.moveBackward(i.V_r.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.SLIDE_FORWARD, async () => {
                                        (null == s ? void 0 : s.playerState.progress.value.duration) && (await (null == n ? void 0 : n.slideForward(1, i.V_r.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.SLIDE_BACKWARD, async () => {
                                        (null == s ? void 0 : s.playerState.progress.value.duration) && (await (null == n ? void 0 : n.slideBackward(1, i.V_r.CLIP)));
                                    }),
                                () => {
                                    null == l || l.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.CLOSE),
                                        null == l || l.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.TOGGLE_PLAY),
                                        null == l || l.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.LIKE),
                                        null == l || l.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.MOVE_FORWARD),
                                        null == l || l.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.MOVE_BACKWARD),
                                        null == l || l.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.SLIDE_FORWARD),
                                        null == l || l.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.SLIDE_BACKWARD);
                                }
                            ),
                            [l, t.ids, e, o, n, s, a.isAdvertShown],
                        );
                    })(k),
                        0 === a.ids.length && k(),
                        (0, r.useEffect)(
                            () => () => {
                                a.reset(), t.setIsShowBanner(!0);
                            },
                            [a, t, t.setIsShowBanner],
                        ),
                        (0, r.useEffect)(() => {
                            a.modal.isOpened ? t.setIsShowBanner(!1) : t.setIsShowBanner(!0);
                        }, [a.modal.isOpened, t, t.setIsShowBanner]);
                    let E = (0, C.c)(() => {
                        a.setAnimationState(!0), x && h(String(x)), d(i.Zyd.main.href), a.modal.close(), a.reset();
                    });
                    return (
                        (0, r.useEffect)(() => {
                            if (a.isNotFound || a.isSomethingWrong) {
                                k();
                                let t = a.modal.isOpened ? i.uQT.FULLSCREEN_ERROR : i.uQT.ERROR;
                                m((0, g.jsx)(T.hT, { error: e({ id: 'error-messages.something-went-wrong' }) }), { containerId: t });
                            }
                        }, [a.isNotFound, a.isSomethingWrong, a.modal.isOpened, k, e, m]),
                        (0, r.useEffect)(() => {
                            a.modal.isOpened && x && v(String(x));
                        }, [a.modal.isOpened, v, x]),
                        (0, r.useEffect)(
                            () => (
                                window.addEventListener('popstate', P),
                                () => {
                                    window.removeEventListener('popstate', P);
                                }
                            ),
                            [P],
                        ),
                        ((e) => {
                            (0, r.useEffect)(() => {
                                (null == e ? void 0 : e.clips) &&
                                    0 !== e.clips.length &&
                                    !e.isLoading &&
                                    n({ clipMeta: (0, l.wS)(e.clips[0]), additional: { fullUrl: null, locale: null, url: null, tld: '', host: '' } }).then((e) => {
                                        (0, i.jxB)(e);
                                    });
                            }, [null == e ? void 0 : e.clips, null == e ? void 0 : e.isLoading]);
                        })(a),
                        (0, r.useEffect)(() => {
                            a.isNeededToLoad && a.modal.isOpened && x && a.getClips();
                        }, [a, a.isNeededToLoad, a.modal.isOpened, x]),
                        (0, g.jsxs)(I.a, {
                            className: (0, y.$)(Z().root, Z().important),
                            open: a.modal.isOpened,
                            onOpenChange: a.modal.onOpenChange,
                            onClose: k,
                            portalNode: s,
                            size: 'fullscreen',
                            placement: 'center',
                            showHeader: !1,
                            contentClassName: Z().modalContent,
                            closeOnOutsidePress: !1,
                            escapeKey: !1,
                            transitionDuration: 300 * !!a.withAnimation,
                            ...(0, A.Am)(A.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_MODAL),
                            children: [
                                (0, g.jsxs)('header', {
                                    className: Z().header,
                                    children: [
                                        (0, g.jsx)(N.$, {
                                            className: Z().closeButton,
                                            radius: 'round',
                                            color: 'secondary',
                                            size: 'm',
                                            icon: (0, g.jsx)(f.Icon, { variant: 'arrowDown', size: 'xs' }),
                                            onClick: k,
                                            'aria-label': e({ id: 'interface-actions.close' }),
                                            ...(0, A.Am)(A.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_CLOSE_BUTTON),
                                        }),
                                        (0, g.jsx)(T.N_, {
                                            className: Z().logoLink,
                                            href: '/',
                                            onClick: E,
                                            'aria-label': e({ id: 'navigation.page-main' }),
                                            ...(0, A.Am)(A.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_LABEL_BUTTON),
                                            children: (0, g.jsx)(f.Icon, { variant: 'musicLogoCenter'.concat(p), className: Z()['logo_'.concat(p.toLocaleLowerCase())] }),
                                        }),
                                    ],
                                }),
                                (0, g.jsx)(H, { closeModal: k }),
                                (0, g.jsx)(Y, {}),
                                (0, g.jsx)(S.Notification, {
                                    className: Z().notification,
                                    enableMultiContainer: !0,
                                    containerId: i.uQT.FULLSCREEN_INFO,
                                    position: 'bottom-center',
                                }),
                                (0, g.jsx)(S.Notification, {
                                    className: Z().notification,
                                    enableMultiContainer: !0,
                                    containerId: i.uQT.FULLSCREEN_ERROR,
                                    position: 'bottom-center',
                                }),
                            ],
                        })
                    );
                }),
                ee = (0, x.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, i.Pjs)();
                    return e ? null : (0, g.jsx)(J, {});
                });
        },
        13528: (e) => {
            e.exports = { root: 'PlayQueue_root__ponhw', content: 'PlayQueue_content__zIUvd', scrollContent: 'PlayQueue_scrollContent__2dI0v' };
        },
        14140: (e) => {
            e.exports = { root: 'TicketImage_root__vTgWd' };
        },
        14308: (e, t, a) => {
            'use strict';
            a.d(t, { Fp: () => tG, _1: () => B, Yp: () => y });
            var i,
                n,
                r,
                l,
                o,
                s,
                c,
                d,
                u,
                m,
                _ = a(1365),
                p = a(61910),
                v = a.t(p, 2),
                h = a(69306),
                g = a(83252);
            let x = (e) => window.innerWidth < (e ? 1920 : 1024),
                y = () => {
                    let { sideBannerRef: e } = (0, g.gKY)(),
                        {
                            advertBanners: {
                                banners: { sideAdvertBanner: t },
                            },
                        } = (0, g.Pjs)(),
                        a = (0, h.y)(),
                        i = e ? !!(t.isVisible && e.clientWidth) : a,
                        [n, r] = (0, p.useState)(x(i)),
                        l = (0, p.useMemo)(
                            () =>
                                (0, _.A)(
                                    () => {
                                        r(x(i));
                                    },
                                    100,
                                    { trailing: !1 },
                                ),
                            [r, i],
                        );
                    return (
                        (0, p.useEffect)(
                            () => (
                                window.addEventListener('resize', l),
                                l(),
                                () => {
                                    window.removeEventListener('resize', l);
                                }
                            ),
                            [l],
                        ),
                        n
                    );
                };
            var b = a(93064),
                A = a(60049),
                C = a(46423),
                N = a(63695),
                f = a(52733),
                I = a(76866);
            let S = b.gK.model('PinAlbumItemModel', { type: b.gK.literal(A._.ALBUM_ITEM), data: C.GI }),
                T = b.gK.model('PinArtistItemModel', { type: b.gK.literal(A._.ARTIST_ITEM), data: N.PK }),
                P = b.gK.model('PinPlaylistItemModel', { type: b.gK.literal(A._.PLAYLIST_ITEM), data: f.$o }),
                k = b.gK.model('PinVibeItemModel', { type: b.gK.literal(A._.WAVE_ITEM), data: I.Gh }),
                E = b.gK.union(S, T, P, k),
                j = (e) => 'object' == typeof e && e && 'type' in e;
            var L = a(80156),
                w = a(83909);
            let M = (e) => {
                    switch (e.type) {
                        case A._.WAVE_ITEM:
                            return (0, b.wg)({ type: A._.WAVE_ITEM, data: (0, I.er)(e.data) });
                        case A._.PLAYLIST_ITEM:
                            return (0, b.wg)({ type: A._.PLAYLIST_ITEM, data: (0, w.bk)({ playlist: e.data }) });
                        case A._.ARTIST_ITEM:
                            return (0, b.wg)({ type: A._.ARTIST_ITEM, data: (0, N.as)({ artist: e.data }) });
                        case A._.ALBUM_ITEM:
                            return (0, b.wg)({ type: A._.ALBUM_ITEM, data: (0, L.sK)({ album: e.data }) });
                    }
                },
                B = b.gK
                    .model('Pins', { loadingState: b.gK.enumeration(Object.values(g.GuX)), items: b.gK.maybeNull(b.gK.array(E)), index: b.gK.map(b.gK.boolean) })
                    .views((e) => ({
                        isPinned: (t) => !!e.index.get(t),
                        get(t) {
                            var a;
                            return null == (a = e.items) ? void 0 : a.find((e) => e.data.pinId === t);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            deletePin(t) {
                                var a;
                                (e.items = (0, b.wg)(null == (a = e.items) ? void 0 : a.filter((e) => e.data.pinId !== t))), e.index.delete(t);
                            },
                            addPin(t) {
                                var a, i, n, r;
                                if ((null == (a = e.items) ? void 0 : a.length) === 30) {
                                    let t = null == (r = e.items) ? void 0 : r.pop();
                                    void 0 !== t && e.index.delete(t.data.pinId);
                                }
                                null == (i = e.items) || i.unshift(M(t));
                                let l = null == (n = e.items) ? void 0 : n.at(0);
                                l && e.index.set(l.data.pinId, !0);
                            },
                            getData: (0, b.L3)(function* () {
                                let { pinsResource: t, modelActionsLogger: a } = (0, b._$)(e);
                                if (e.loadingState !== g.GuX.PENDING)
                                    try {
                                        var i;
                                        e.loadingState = g.GuX.PENDING;
                                        let a = yield t.getPins();
                                        (e.items = (0, b.wg)(a.pins.map(M))),
                                            null == (i = e.items) ||
                                                i.forEach((t) => {
                                                    e.index.set(t.data.pinId, !0);
                                                }),
                                            (e.loadingState = g.GuX.RESOLVE);
                                    } catch (t) {
                                        (e.loadingState = g.GuX.REJECT), a.error(t);
                                    }
                            }),
                            toggleAlbumPin: (0, b.L3)(function* (a, i) {
                                let { pinResource: n, modelActionsLogger: r } = (0, b._$)(e);
                                if (e.loadingState !== g.GuX.PENDING)
                                    try {
                                        let r;
                                        if (e.isPinned(i)) return (r = yield n.unpinAlbum(a)), t.deletePin(i), r;
                                        return (r = yield n.pinAlbum(a)), j(r) && t.addPin(r), r;
                                    } catch (e) {
                                        r.error(e);
                                        return;
                                    }
                            }),
                            toggleArtistPin: (0, b.L3)(function* (a, i) {
                                let { pinResource: n, modelActionsLogger: r } = (0, b._$)(e);
                                if (e.loadingState !== g.GuX.PENDING)
                                    try {
                                        let r;
                                        if (e.isPinned(i)) return (r = yield n.unpinArtist(a)), t.deletePin(i), r;
                                        return (r = yield n.pinArtist(a)), j(r) && t.addPin(r), r;
                                    } catch (e) {
                                        r.error(e);
                                        return;
                                    }
                            }),
                            togglePlaylistPin: (0, b.L3)(function* (a, i) {
                                let { pinResource: n, modelActionsLogger: r } = (0, b._$)(e);
                                if (e.loadingState !== g.GuX.PENDING)
                                    try {
                                        let r;
                                        if (e.isPinned(i)) return (r = yield n.unpinPlaylist(a)), t.deletePin(i), r;
                                        return (r = yield n.pinPlaylist(a)), j(r) && t.addPin(r), r;
                                    } catch (e) {
                                        r.error(e);
                                        return;
                                    }
                            }),
                            toggleVibePin: (0, b.L3)(function* (a, i) {
                                let { pinResource: n, modelActionsLogger: r } = (0, b._$)(e);
                                if (e.loadingState !== g.GuX.PENDING)
                                    try {
                                        let r;
                                        if (e.isPinned(i)) return (r = yield n.unpinWave(a)), t.deletePin(i), r;
                                        return (r = yield n.pinWave(a)), j(r) && t.addPin(r), r;
                                    } catch (e) {
                                        r.error(e);
                                        return;
                                    }
                            }),
                        };
                        return t;
                    });
            var O = a(54486),
                R = a(50420),
                D = a(28303),
                K = a(31500),
                U = a(8817),
                F = a(43350),
                z = a(62395),
                V = a(68529),
                W = a.n(V),
                G = a(43426),
                Y = a(47713),
                Q = a(67648),
                $ = a(77881),
                q = a(5956),
                H = a(14342),
                X = a(32692),
                Z = {
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
                    2408: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = {
                            root: 'NGdj0oZ2Bt8qdZhP2Tzt',
                            root_collapsed: 'rece5errcONnjJeX0YW8',
                            root_direction_vertical: 'QilmoKKJwk6f0BdkYgrA',
                            root_direction_horizontal: 'AO4rWY4RLVh48fwQw5Qs',
                        };
                    },
                    1308: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = { root: 'yuyI2hMAT7qyL1N14MAQ', root_direction_vertical: 'xfFtKQpgAYvC2jI1tBtS', root_direction_horizontal: 'OGlYJO0lZgpSOhfU2Iru' };
                    },
                    2056: (e, t, a) => {
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
                    5408: (e, t, a) => {
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
                    8796: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, a) {
                                let i = null != a ? a : e.currentTarget,
                                    n = document.createElement('span'),
                                    r = Math.max(i.clientWidth, i.clientHeight),
                                    l = r / 2,
                                    o = i.getBoundingClientRect(),
                                    s = 0 === e.clientX ? Math.round(o.width / 2) : e.clientX - o.left,
                                    c = 0 === e.clientY ? Math.round(o.height / 2) : e.clientY - o.top;
                                (n.style.width = ''.concat(r, 'px')),
                                    (n.style.height = ''.concat(r, 'px')),
                                    (n.style.left = 0 === e.clientX ? '0px' : ''.concat(s - l, 'px')),
                                    (n.style.top = ''.concat(c - l, 'px')),
                                    n.classList.add(t);
                                let d = i.getElementsByClassName(t)[0];
                                d && d.remove(), i.insertBefore(n, i.firstChild);
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
                    8216: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.getElementFromRefOrElement = t.createRipple = void 0);
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
                            l = a(7786),
                            o = i(a(2408));
                        t.Navigation = function (e) {
                            let { className: t, children: a, collapsed: i = !1, direction: s = 'vertical', ...c } = e;
                            return (0, n.jsx)(l.NavigationProvider, {
                                collapsed: i,
                                direction: s,
                                children: (0, n.jsx)('nav', {
                                    className: (0, r.clsx)(o.default.root, o.default['root_direction_'.concat(s)], { [o.default.root_collapsed]: i }, t),
                                    'aria-label': c['aria-label'],
                                    ...c,
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
                                let { collapsed: a, direction: r, children: l } = e,
                                    o = (0, n.useMemo)(() => ({ collapsed: a, direction: r }), [a, r]);
                                return (0, i.jsx)(t.NavigationContext.Provider, { value: o, children: l });
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
                            l = a(5881),
                            o = a(7786),
                            s = i(a(1308));
                        t.NavigationGroup = function (e) {
                            let { className: t, children: a, ...i } = e,
                                c = (0, r.createRef)(),
                                { direction: d } = (0, r.useContext)(o.NavigationContext);
                            return (0, n.jsx)('ol', { ref: c, className: (0, l.clsx)(s.default.root, s.default['root_direction_'.concat(d)], t), ...i, children: a });
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
                            l = a(5881),
                            o = a(7786),
                            s = a(8216),
                            c = i(a(2056)),
                            d = i(a(5408));
                        function u(e) {
                            let {
                                    className: t = '',
                                    forwardRef: a,
                                    children: i,
                                    selected: u = !1,
                                    shownAnimation: m,
                                    withRipple: _ = !1,
                                    variant: p = 'default',
                                    isNewVisualVersion: v,
                                    ...h
                                } = e,
                                { collapsed: g, direction: x } = (0, r.useContext)(o.NavigationContext),
                                y = v ? d.default : c.default,
                                b = (0, r.useCallback)(
                                    (e) => {
                                        _ && (0, s.createRipple)(e, y.ripple);
                                    },
                                    [y.ripple, _],
                                ),
                                [A, C] = r.Children.toArray(i.props.children),
                                N = (0, r.useMemo)(
                                    () =>
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)('div', { className: y.iconContainer, children: A }),
                                                (0, n.jsx)('div', {
                                                    className: (0, l.clsx)(y.textContainer, y['textContainer_direction_'.concat(x)], { [y.textContainer_selected]: u }),
                                                    children: C,
                                                }),
                                            ],
                                        }),
                                    [y, A, x, u, C],
                                ),
                                f = (0, r.cloneElement)(i, {
                                    className: (0, l.clsx)(
                                        y.item,
                                        y['item_direction_'.concat(x)],
                                        { [y.item_selected]: u, [y['item_collapsed_'.concat(x)]]: g },
                                        i.props.className,
                                    ),
                                    children: N,
                                });
                            return (0, n.jsx)('li', {
                                ref: a,
                                className: (0, l.clsx)(
                                    y.root,
                                    y['root_direction_'.concat(x)],
                                    y['root_variant_'.concat(p)],
                                    { [y.root_animate]: m, [y.root_collapsed]: g },
                                    t,
                                ),
                                'aria-current': !!u && 'page',
                                onClick: b,
                                ...h,
                                children: f,
                            });
                        }
                        (t.NavigationItemComponent = u), (t.NavigationItem = (0, r.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e })));
                    },
                    810: (e) => {
                        e.exports = v;
                    },
                },
                J = {};
            function ee(e) {
                var t = J[e];
                if (void 0 !== t) return t.exports;
                var a = (J[e] = { exports: {} });
                return Z[e].call(a.exports, a, a.exports, ee), a.exports;
            }
            (ee.d = (e, t) => {
                for (var a in t) ee.o(t, a) && !ee.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (ee.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (ee.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var et = {};
            (() => {
                Object.defineProperty(et, 'X$', { value: !0 }), (et.Dx = et.KB = et.W_ = void 0);
                var e = ee(19);
                Object.defineProperty(et, 'W_', {
                    enumerable: !0,
                    get: function () {
                        return e.Navigation;
                    },
                });
                var t = ee(8106);
                Object.defineProperty(et, 'KB', {
                    enumerable: !0,
                    get: function () {
                        return t.NavigationGroup;
                    },
                });
                var a = ee(3506);
                Object.defineProperty(et, 'Dx', {
                    enumerable: !0,
                    get: function () {
                        return a.NavigationItem;
                    },
                });
            })();
            var ea = et.W_,
                ei = et.KB,
                en = et.Dx;
            et.X$;
            var er = a(93666),
                el = a(97800),
                eo = a(51376),
                es = a(80585);
            let ec = () => {
                    let e = (0, z.st)(),
                        { hash: t } = (0, z.gf)(),
                        a = (0, g.UlF)(),
                        { location: i } = (0, g.Pjs)();
                    return (0, p.useCallback)(
                        (n, r) => {
                            if (!e || !t) return;
                            let l = (0, F.Fx)({
                                params: ((e) => {
                                    let { isNotFound: t, entityType: a, to: i, hash: n } = e;
                                    return t
                                        ? {
                                              entityType: F.LA.Error,
                                              entityId: F.LA.Error,
                                              hash: n,
                                              pageId: F.QT.PageNotFoundScreen,
                                              pageStyle: F.QL.Fullscreen,
                                              pagePlacement: F.c4.Fullscreen,
                                              mainObjectType: F.ky.NonApplicable,
                                              mainObjectId: F.ky.NonApplicable,
                                              from: F.QT.PageNotFoundScreen,
                                              to: i,
                                          }
                                        : {
                                              entityType: a,
                                              entityId: a,
                                              hash: n,
                                              pageId: F.QT.Sidebar,
                                              pageStyle: F.QL.Bar,
                                              pagePlacement: F.c4.Left,
                                              from: F.QT.Sidebar,
                                              to: i,
                                          };
                                })({ isNotFound: i.isNotFound, entityType: n, to: r, hash: t }),
                                logger: a,
                                context: 'useSendEventOnNavbarNavigated',
                            });
                            l && (0, F.ID)(e.evgenInstance, l);
                        },
                        [e, t, a, i.isNotFound],
                    );
                },
                ed = {
                    [g.RnV.SEARCH]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_SEARCH,
                    [g.RnV.HOME]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_HOME,
                    [g.RnV.FOR_YOU_AND_TRENDS]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_FOR_YOU_AND_TRENDS,
                    [g.RnV.CONCERTS]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_CONCERTS,
                    [g.RnV.NON_MUSIC]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_NON_MUSIC,
                    [g.RnV.KIDS]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_KIDS,
                    [g.RnV.COLLECTION]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_COLLECTION,
                    [g.RnV.PLUS]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_PLUS,
                },
                eu = (e) => {
                    let { padding: t, placement: a } = e;
                    return { shiftOptions: { padding: t }, offsetOptions: t, flipOptions: { fallbackAxisSideDirection: 'start', padding: t }, placement: a };
                },
                em = eu({ placement: 'right', padding: 8 });
            var e_ = a(74631),
                ep = a.n(e_);
            let ev = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                eh = (0, D.PA)((e) => {
                    let { config: t, children: a } = e,
                        { formatMessage: i } = (0, G.A)(),
                        {
                            settings: { isMobile: n },
                        } = (0, g.Pjs)(),
                        { compositePlayerBarRef: r } = (0, g.gKY)(),
                        { setIsOnboardingOpened: l } = (0, g.wD7)(),
                        [o, s] = (0, Q.d)(),
                        c = (0, g.zzi)({ id: t.id, ref: o }),
                        [d, u] = (0, p.useState)(c && t.isEnabled),
                        m = (0, U.c)((e) => {
                            null == e || e.stopPropagation(), u(!1), l(!1);
                        }),
                        _ = (0, U.c)((e) => {
                            e || m();
                        });
                    return (0, O.jsxs)(er.m_, {
                        placement: n ? 'top' : 'right',
                        arrowProps: ev,
                        offsetOptions: n ? 15 : -10,
                        isHoverEnabled: !1,
                        open: d,
                        onOpenChange: _,
                        enableAriaDescribedby: !0,
                        referenceRef: s,
                        children: [
                            a,
                            (0, O.jsxs)(er.ZI, {
                                className: ep().tooltip,
                                rootNode: n ? r : void 0,
                                children: [
                                    (0, O.jsx)($.$, {
                                        icon: (0, O.jsx)(q.Icon, { variant: 'close', size: 'xxs' }),
                                        onClick: m,
                                        variant: 'text',
                                        withRipple: !1,
                                        className: ep().button,
                                        'aria-label': i({ id: 'interface-actions.close' }),
                                    }),
                                    (0, O.jsx)(el.Caption, { className: ep().text, variant: 'span', children: t.text }),
                                ],
                            }),
                        ],
                    });
                }),
                eg = (e) => {
                    let { config: t, children: a } = e;
                    return t ? (0, O.jsx)(eh, { config: t, children: a }) : a;
                };
            var ex = a(53497),
                ey = a(63664),
                eb = a(58360),
                eA = a(6971);
            let eC = () => {
                let e = (0, z.st)(),
                    { hash: t } = (0, z.gf)(),
                    a = (0, g.UlF)(),
                    {
                        settings: { isMobile: i },
                    } = (0, g.Pjs)();
                return (0, p.useCallback)(
                    (n, r) => {
                        if (!e) return;
                        let l = (0, F.Fx)({
                            params: { hash: t, pageId: F.QT.Sidebar, sidebarSize: n || i ? F.JQ.Small : F.JQ.Medium, from: F.QT.Sidebar, to: r },
                            logger: a,
                            context: 'useSendEventOnSidebarNavigated',
                        });
                        l && (0, F.qi)(e.evgenInstance, l);
                    },
                    [e, t, i, a],
                );
            };
            var eN = a(73633),
                ef = a(40139),
                eI = a.n(ef);
            let eS = (e) => {
                    let { children: t, entityUrl: a, ariaLabel: i, ...n } = e;
                    return a ? (0, O.jsx)(es.N_, { href: a, 'aria-label': i, className: eI().link, ...n, children: t }) : t;
                },
                eT = (e) => {
                    let {
                            className: t,
                            cover: a,
                            title: i,
                            subtitle: n,
                            contextMenu: r,
                            isCollapsed: l,
                            withCollapseAnimation: o,
                            entityUrl: s,
                            onDoubleClick: c,
                            onClick: d,
                            forwardRef: u,
                            ariaLabel: m,
                        } = e,
                        _ = (0, p.useCallback)(
                            (e) => {
                                2 === e.detail
                                    ? null == c || c()
                                    : (e.target instanceof HTMLElement && 'IMG' !== e.target.tagName && (0, eN.P)(e, eI().ripple), null == d || d(e));
                            },
                            [d, c],
                        );
                    return (0, O.jsxs)(es.Cj, {
                        ref: u,
                        className: (0, R.$)(eI().root, { [eI().root_withoutLink]: !s }, t),
                        role: 'listitem',
                        ...(0, K.Am)(K.e8.navbar.PIN_ITEM),
                        children: [
                            (0, O.jsxs)(eS, {
                                entityUrl: s,
                                ariaLabel: m,
                                onClick: _,
                                children: [
                                    (0, O.jsx)('div', { className: eI().cover, ...(0, K.Am)(K.e8.navbar.PIN_COVER), children: a }),
                                    (0, O.jsx)('div', {
                                        className: eI().meta,
                                        children: (0, O.jsxs)('div', {
                                            className: (0, R.$)(eI().info, {
                                                [eI().info_collapsed]: l,
                                                [eI().info_animated]: o,
                                                [eI().info_withContextMenu]: (0, p.isValidElement)(r),
                                            }),
                                            children: [
                                                (0, O.jsx)(el.Caption, {
                                                    'aria-hidden': !0,
                                                    className: eI().title,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    lineClamp: 1,
                                                    ...(0, K.Am)(K.e8.navbar.PIN_TITLE),
                                                    children: i,
                                                }),
                                                (0, O.jsx)(el.Caption, {
                                                    'aria-hidden': !0,
                                                    className: eI().subtitle,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    lineClamp: 1,
                                                    ...(0, K.Am)(K.e8.navbar.PIN_SUBTITLE),
                                                    children: n,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, p.isValidElement)(r) &&
                                (0, O.jsx)('div', {
                                    className: (0, R.$)(eI().contextMenu, { [eI().contextMenu_hidden]: l }),
                                    ...(0, K.Am)(K.e8.navbar.PIN_CONTEXT_MENU_BUTTON),
                                    children: r,
                                }),
                        ],
                    });
                },
                eP = (0, p.forwardRef)((e, t) => (0, O.jsx)(eT, { forwardRef: t, ...e })),
                ek = (0, p.createContext)(null);
            var eE = a(11284),
                ej = a.n(eE),
                eL = a(61958);
            let ew = () => {
                    let e = (0, z.st)(),
                        { hash: t } = (0, z.gf)(),
                        a = (0, g.UlF)(),
                        {
                            settings: { isMobile: i },
                        } = (0, g.Pjs)();
                    return (0, p.useCallback)(
                        (n) => {
                            let { actionType: r, isCollapsed: l, mainObjectType: o, mainObjectId: s } = n;
                            if (!e) return;
                            let c = { hash: t, actionType: r, user_interaction_type: F.gi.Tap, pageId: F.QT.Sidebar, sidebarSize: l || i ? F.JQ.Small : F.JQ.Medium };
                            o && (c.mainObjectType = o), s && (c.mainObjectId = s);
                            let d = (0, F.Fx)({ params: c, logger: a, context: 'useSendEventOnSidebarActionPerformed' });
                            d && (0, F.dL)(e.evgenInstance, d);
                        },
                        [e, t, i, a],
                    );
                },
                eM = (e) => {
                    let { onPinClick: t, isPinned: a } = e,
                        { formatMessage: i } = (0, G.A)(),
                        { isCollapsed: n } = (0, p.useContext)(ek) || {},
                        [r, l] = (0, p.useState)(!1),
                        o = ew(),
                        s = (0, p.useCallback)((e) => {
                            e.preventDefault(), e.stopPropagation();
                        }, []),
                        c = (0, p.useCallback)(() => {
                            t(), o({ actionType: F.X2.Unpin, isCollapsed: null != n && n });
                        }, [n, t, o]);
                    return (
                        (0, g.NBO)(r),
                        (0, O.jsx)(eL.W1, {
                            className: (0, R.$)(ej().contextMenu, { [ej().contextMenu_visible]: r }),
                            onClick: s,
                            icon: (0, O.jsx)(q.Icon, { size: 'xxs', variant: 'more' }),
                            tabIndex: n ? -1 : 0,
                            'aria-hidden': n,
                            variant: 'text',
                            offsetOptions: 3,
                            open: r,
                            onOpenChange: l,
                            ariaLabel: i({ id: 'interface-actions.context-menu' }),
                            containerProps: (0, K.Am)(K.e8.navbar.PIN_CONTEXT_MENU),
                            children: (0, O.jsx)(es.L1, { onClick: c, isPinned: a }),
                        })
                    );
                },
                eB = (0, D.PA)((e) => {
                    var t;
                    let { className: a, album: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: l } = (0, G.A)(),
                        { isCollapsed: o, withCollapseAnimation: s } = null != (t = (0, p.useContext)(ek)) ? t : {},
                        c = (0, C.A7)(i),
                        d = (0, C.r_)(i.type, C.cr.PIN),
                        u = eC(),
                        m = (0, C.Rl)(i.type),
                        _ = (0, g.ZpR)(i.url),
                        v = (0, C.$1)({ albumId: i.id, albumUrl: i.url, callback: _ }),
                        h = (0, C.cp)({ album: i, callback: v }),
                        x = (0, U.c)((e) => {
                            u(null != o && o, m), h(e);
                        }),
                        y = (0, p.useMemo)(
                            () =>
                                (0, O.jsx)(eA.Paper, {
                                    className: ej().cover,
                                    radius: 'xs',
                                    children: (0, O.jsxs)(er.m_, {
                                        ...r,
                                        enabled: o,
                                        children: [
                                            (0, O.jsx)(eb.Image, {
                                                className: ej().image,
                                                'aria-hidden': !0,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, O.jsx)(er.ZI, {
                                                className: ej().tooltip,
                                                children: (0, O.jsx)(el.Caption, {
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
                    return (0, O.jsx)(eP, {
                        ref: n,
                        ariaLabel: l({ id: 'entity-names.album-name' }, { albumName: i.title }),
                        className: (0, R.$)(ej().root, a),
                        title: i.title,
                        entityUrl: i.url,
                        subtitle: d,
                        cover: y,
                        isCollapsed: !!o,
                        withCollapseAnimation: !!s,
                        contextMenu: (0, O.jsx)(eM, { onPinClick: c, isPinned: i.isPinned }),
                        onClick: x,
                    });
                }),
                eO = (0, p.forwardRef)((e, t) => (0, O.jsx)(eB, { forwardRef: t, ...e })),
                eR = (0, D.PA)((e) => {
                    var t;
                    let { className: a, artist: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: l } = (0, G.A)(),
                        { isCollapsed: o, withCollapseAnimation: s } = null != (t = (0, p.useContext)(ek)) ? t : {},
                        c = (0, N.A7)(i),
                        d = eC(),
                        u = (0, g.ZpR)(i.url),
                        m = (0, N.SA)({ artist: i, callback: u }),
                        _ = (0, U.c)((e) => {
                            d(null != o && o, F.QT.ArtistScreen), m(e);
                        }),
                        v = (0, p.useMemo)(
                            () =>
                                (0, O.jsx)(eA.Paper, {
                                    className: ej().cover,
                                    radius: 'round',
                                    children: (0, O.jsxs)(er.m_, {
                                        ...r,
                                        enabled: o,
                                        children: [
                                            (0, O.jsx)(eb.Image, {
                                                className: ej().image,
                                                'aria-hidden': !0,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, O.jsx)(er.ZI, {
                                                className: ej().tooltip,
                                                children: (0, O.jsx)(el.Caption, {
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
                    return (0, O.jsx)(eP, {
                        ref: n,
                        ariaLabel: l({ id: 'entity-names.artist-name' }, { artistName: i.name }),
                        className: (0, R.$)(ej().root, a),
                        title: i.name,
                        entityUrl: i.url,
                        subtitle: (0, O.jsx)(Y.A, { id: 'entity-names.artist' }),
                        cover: v,
                        isCollapsed: !!o,
                        withCollapseAnimation: !!s,
                        contextMenu: (0, O.jsx)(eM, { onPinClick: c, isPinned: i.isPinned }),
                        onClick: _,
                    });
                }),
                eD = (0, p.forwardRef)((e, t) => (0, O.jsx)(eR, { forwardRef: t, ...e })),
                eK = (e) => {
                    var t;
                    let { className: a, playlist: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: l } = (0, G.A)(),
                        { isCollapsed: o, withCollapseAnimation: s } = null != (t = (0, p.useContext)(ek)) ? t : {},
                        c = (0, f.A7)(i),
                        d = eC(),
                        u = (0, U.c)(() => {
                            d(null != o && o, F.QT.PlaylistScreen);
                        }),
                        m = (0, p.useMemo)(
                            () =>
                                (0, O.jsx)(eA.Paper, {
                                    className: ej().cover,
                                    radius: 'xs',
                                    children: (0, O.jsxs)(er.m_, {
                                        ...r,
                                        enabled: o,
                                        children: [
                                            (0, O.jsx)(eb.Image, {
                                                'aria-hidden': !0,
                                                className: ej().image,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, O.jsx)(er.ZI, {
                                                className: ej().tooltip,
                                                children: (0, O.jsx)(el.Caption, {
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
                    return (0, O.jsx)(eP, {
                        ref: n,
                        ariaLabel: l({ id: 'entity-names.playlist-name' }, { playlistName: i.title }),
                        className: (0, R.$)(ej().root, a),
                        title: i.title,
                        entityUrl: i.url,
                        subtitle: (0, O.jsx)(Y.A, { id: 'entity-names.playlist' }),
                        cover: m,
                        isCollapsed: !!o,
                        withCollapseAnimation: !!s,
                        contextMenu: (0, O.jsx)(eM, { onPinClick: c, isPinned: i.isPinned }),
                        onClick: u,
                    });
                },
                eU = (0, p.forwardRef)((e, t) => (0, O.jsx)(eK, { forwardRef: t, ...e }));
            var eF = a(27510),
                ez = a(62443);
            let eV = (0, D.PA)((e) => {
                    var t;
                    let { className: a, vibe: i, forwardRef: n, tooltipOptions: r } = e,
                        l = (0, p.useId)(),
                        { formatMessage: o } = (0, G.A)(),
                        { isCollapsed: s, withCollapseAnimation: c } = null != (t = (0, p.useContext)(ek)) ? t : {},
                        [d, u] = (0, p.useState)(!1),
                        m = (0, I.A7)(i),
                        { isFreemium: _ } = (0, g.XCI)(),
                        { state: v, setState: h } = (0, ez.e)(!1),
                        x = (() => {
                            let e = (0, z.st)(),
                                { hash: t } = (0, z.gf)(),
                                a = (0, g.UlF)(),
                                {
                                    settings: { isMobile: i },
                                } = (0, g.Pjs)();
                            return (0, p.useCallback)(
                                (n) => {
                                    let { isCollapsed: r, mainObjectId: l } = n;
                                    if (!e) return;
                                    let o = (0, F.Fx)({
                                        params: {
                                            hash: t,
                                            pageId: F.QT.Sidebar,
                                            sidebarSize: r || i ? F.JQ.Small : F.JQ.Medium,
                                            mainObjectType: F.ky.Wave,
                                            mainObjectId: l,
                                        },
                                        logger: a,
                                        context: 'useSendEventOnSidebarStarted',
                                    });
                                    o && (0, F.cV)(e.evgenInstance, o);
                                },
                                [e, t, i, a],
                            );
                        })(),
                        y = ew(),
                        b = (0, g.brA)(),
                        A = (0, g.PT7)(),
                        { isPlaying: C, togglePlay: N, isCurrent: f } = (0, g.B0S)({ seeds: i.seeds, pageIdForFrom: g._Q$.SIDEBAR, blockIdForFrom: g.UfI.RADIO }),
                        S = (0, U.c)(async () => {
                            var e, t;
                            return _
                                ? void h(!0)
                                : (C
                                      ? y({
                                            actionType: F.X2.Pause,
                                            isCollapsed: null != s && s,
                                            mainObjectType: F.ky.Wave,
                                            mainObjectId: null != (e = i.seeds[0]) ? e : '',
                                        })
                                      : x({ isCollapsed: null != s && s, mainObjectId: null != (t = i.seeds[0]) ? t : '' }),
                                  N());
                        }),
                        T = (0, U.c)(() => {
                            A() ||
                                (u(!0),
                                S().finally(() => {
                                    u(!1);
                                }),
                                b(!C));
                        }),
                        P = (0, p.useMemo)(
                            () =>
                                (0, O.jsx)(el.Caption, {
                                    id: l,
                                    variant: 'span',
                                    'aria-label': o({ id: 'entity-names.vibe-name' }, { vibeName: i.title }),
                                    type: 'controls',
                                    size: 's',
                                    lineClamp: 1,
                                    children: i.title,
                                }),
                            [o, l, i.title],
                        ),
                        k = (0, eF.L)(() => {
                            var e;
                            return i.shouldShowAgent && i.agent
                                ? (0, O.jsx)(I.nr, { agent: i.agent, isCurrent: f, isPlaying: C, onPlayButtonClick: T })
                                : (0, O.jsx)(es.q1, {
                                      isCurrent: f,
                                      isPlaying: C,
                                      isAvailable: !0,
                                      isPlayButtonLoading: d,
                                      onPlayButtonClick: T,
                                      title: i.title,
                                      entityCoverStyle: { backgroundColor: null == (e = i.colors) ? void 0 : e.average },
                                      ariaDescribedBy: l,
                                      coverUri: i.backgroundImageUrl,
                                      radius: 'round',
                                      withLoadingIndicator: !1,
                                  });
                        }),
                        E = (0, eF.L)(() =>
                            (0, O.jsxs)(er.m_, {
                                ...r,
                                enabled: s,
                                children: [
                                    k,
                                    (0, O.jsx)(er.ZI, {
                                        className: ej().tooltip,
                                        children: (0, O.jsx)(el.Caption, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: i.title }),
                                    }),
                                ],
                            }),
                        ),
                        j = (0, p.useCallback)(
                            () =>
                                (0, O.jsx)(eP, {
                                    ref: n,
                                    onDoubleClick: S,
                                    className: (0, R.$)(ej().root, a),
                                    isCollapsed: !!s,
                                    contextMenu: (0, O.jsx)(eM, { onPinClick: m, isPinned: i.isPinned }),
                                    withCollapseAnimation: !!c,
                                    title: P,
                                    subtitle: i.getDescription(o({ id: 'entity-names.my-vibe' })),
                                    cover: E,
                                }),
                            [n, S, a, s, m, i, c, P, o, E],
                        );
                    return (0, O.jsx)(es.SU, {
                        isEnabled: _,
                        isOpened: v,
                        onOpenChange: h,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: i.stationType,
                        renderChildren: j,
                    });
                }),
                eW = (0, p.forwardRef)((e, t) => (0, O.jsx)(eV, { forwardRef: t, ...e }));
            var eG = a(42701),
                eY = a.n(eG);
            let eQ = eu({ placement: 'right', padding: 20 }),
                e$ = { enter: eY().pin_enter, enterActive: eY().pin_enter_active, exit: eY().pin_exit, exitActive: eY().pin_exit_active },
                eq = (0, D.PA)((e) => {
                    var t, a;
                    let { className: i, withCollapseAnimation: n, isCollapsed: r, style: l } = e,
                        { formatMessage: o } = (0, G.A)(),
                        { pinsCollection: s } = (0, g.Pjs)(),
                        c = null == (t = s.items) ? void 0 : t.map(() => (0, p.createRef)()),
                        d = (0, p.useMemo)(() => ({ withCollapseAnimation: n, isCollapsed: r }), [r, n]),
                        u = s.items && s.items.length > 0,
                        m = s.items && s.items.length >= 3;
                    return (0, O.jsx)(ek.Provider, {
                        value: d,
                        children: (0, O.jsx)('div', {
                            className: (0, R.$)(eY().root, { [eY().root_withScroll]: m, [eY().root_hasPins]: u }, i),
                            style: l,
                            ...(0, K.Am)(K.e8.navbar.PIN_LIST),
                            children: (0, O.jsx)('div', {
                                role: 'list',
                                'aria-label': o({ id: 'navigation.pins-list' }),
                                className: eY().content,
                                children: (0, O.jsx)(ex.A, {
                                    component: null,
                                    children:
                                        null == (a = s.items)
                                            ? void 0
                                            : a.map((e, t) => {
                                                  switch (e.type) {
                                                      case A._.ALBUM_ITEM:
                                                          return (0, O.jsx)(
                                                              ey.A,
                                                              {
                                                                  classNames: e$,
                                                                  nodeRef: null == c ? void 0 : c[t],
                                                                  timeout: 270,
                                                                  children: (0, O.jsx)(eO, {
                                                                      className: eY().pin,
                                                                      tooltipOptions: eQ,
                                                                      ref: null == c ? void 0 : c[t],
                                                                      album: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case A._.ARTIST_ITEM:
                                                          return (0, O.jsx)(
                                                              ey.A,
                                                              {
                                                                  classNames: e$,
                                                                  nodeRef: null == c ? void 0 : c[t],
                                                                  timeout: 270,
                                                                  children: (0, O.jsx)(eD, {
                                                                      className: eY().pin,
                                                                      tooltipOptions: eQ,
                                                                      ref: null == c ? void 0 : c[t],
                                                                      artist: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case A._.PLAYLIST_ITEM:
                                                          return (0, O.jsx)(
                                                              ey.A,
                                                              {
                                                                  classNames: e$,
                                                                  nodeRef: null == c ? void 0 : c[t],
                                                                  timeout: 270,
                                                                  children: (0, O.jsx)(eU, {
                                                                      className: eY().pin,
                                                                      tooltipOptions: eQ,
                                                                      ref: null == c ? void 0 : c[t],
                                                                      playlist: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case A._.WAVE_ITEM:
                                                          return (0, O.jsx)(
                                                              ey.A,
                                                              {
                                                                  classNames: e$,
                                                                  nodeRef: null == c ? void 0 : c[t],
                                                                  timeout: 270,
                                                                  children: (0, O.jsx)(eW, {
                                                                      className: eY().pin,
                                                                      tooltipOptions: eQ,
                                                                      ref: null == c ? void 0 : c[t],
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
                eH = { src: '/_next/static/media/ticket_dark.4e1b9044.png' },
                eX = { src: '/_next/static/media/ticket_dark_selected.2b929060.png' },
                eZ = { src: '/_next/static/media/ticket_light.6b4bb4f7.png' },
                eJ = { src: '/_next/static/media/ticket_light_selected.648fa420.png' };
            var e0 = a(14140),
                e1 = a.n(e0);
            let e2 = (e) => {
                    let { isSelected: t, forwardRef: a } = e,
                        { theme: i } = (0, g.DPo)(),
                        n = (0, eF.L)(() => {
                            switch (i) {
                                case g.Sxu.Dark:
                                    if (t) return eX.src;
                                    return eH.src;
                                case g.Sxu.Light:
                                    if (t) return eJ.src;
                                    return eZ.src;
                            }
                        });
                    return (0, O.jsx)(eb.Image, { ref: a, className: e1().root, fit: 'contain', withLoadingIndicator: !1, src: n });
                },
                e8 = (0, p.forwardRef)((e, t) => (0, O.jsx)(e2, { forwardRef: t, ...e }));
            var e3 = a(32578),
                e4 = a.n(e3),
                e5 = (function (e) {
                    return (e.WINDOWS = 'WINDOWS'), (e.MACOS = 'MACOS'), (e.UNKNOWN = 'UNKNOWN'), e;
                })({}),
                e6 = a(60927),
                e7 = a.n(e6);
            let e9 = { exit: e7().bar_exit, exitActive: e7().bar_exit_active, enter: e7().bar_enter, enterActive: e7().bar_enter_active },
                te = { exit: e7().button_exit, exitActive: e7().button_exit_active, enter: e7().button_enter, enterActive: e7().button_enter_active },
                tt = (e) => {
                    let { className: t, children: a, button: i, isCollapsed: n, barClassName: r } = e,
                        l = (0, p.useRef)(null),
                        o = (0, p.useRef)(null);
                    return (0, O.jsxs)('div', {
                        className: (0, R.$)(e7().root, t),
                        children: [
                            (0, O.jsx)(ey.A, {
                                nodeRef: o,
                                in: n,
                                timeout: 150,
                                classNames: te,
                                unmountOnExit: !0,
                                children: (0, O.jsx)('div', { className: (0, R.$)(e7().button), ref: o, children: i }),
                            }),
                            (0, O.jsx)(ey.A, {
                                nodeRef: l,
                                in: !n,
                                timeout: 150,
                                classNames: e9,
                                unmountOnExit: !0,
                                children: (0, O.jsx)('div', { className: (0, R.$)(e7().bar, r), ref: l, children: a }),
                            }),
                        ],
                    });
                },
                ta = (e) => {
                    switch (e) {
                        case e5.MACOS:
                            return 'macos';
                        case e5.WINDOWS:
                            return 'windows';
                        default:
                            return 'musicLogo';
                    }
                },
                ti = (e) => {
                    let { formatMessage: t } = (0, G.A)();
                    switch (e) {
                        case e5.MACOS:
                            return t({ id: 'sidebar.download-macos' });
                        case e5.WINDOWS:
                            return t({ id: 'sidebar.download-windows' });
                        default:
                            return t({ id: 'sidebar.download-app' });
                    }
                };
            var tn = a(60640),
                tr = a.n(tn);
            let tl = (e) => {
                    let { variant: t, forwardRef: a, onDownloadClick: i, onCloseClick: n } = e,
                        { formatMessage: r } = (0, G.A)(),
                        l = ti(t),
                        o = (0, p.useMemo)(() => {
                            let e = { span: (e) => (0, O.jsx)('span', { className: tr().textBright, children: e }) };
                            switch (t) {
                                case e5.MACOS:
                                    return r({ id: 'sidebar.download-macos-formatted' }, e);
                                case e5.WINDOWS:
                                    return r({ id: 'sidebar.download-windows-formatted' }, e);
                                default:
                                    return r({ id: 'sidebar.download-app-formatted' }, e);
                            }
                        }, [r, t]);
                    return (0, O.jsx)('section', {
                        ref: a,
                        'aria-label': l,
                        children: (0, O.jsxs)(eA.Paper, {
                            radius: 'm',
                            className: tr().root,
                            children: [
                                (0, O.jsx)($.$, {
                                    color: 'secondary',
                                    radius: 'round',
                                    variant: 'text',
                                    size: 'xxxs',
                                    className: tr().closeButton,
                                    icon: (0, O.jsx)(q.Icon, { variant: 'close', size: 'xxs', className: tr().closeButtonIcon }),
                                    withRipple: !1,
                                    onClick: n,
                                    'aria-label': r({ id: 'interface-actions.close' }),
                                }),
                                (0, O.jsx)(el.Caption, { variant: 'div', className: tr().text, size: 'm', children: o }),
                                (0, O.jsx)($.$, {
                                    color: 'secondary',
                                    radius: 'xxxl',
                                    size: 'xs',
                                    variant: 'default',
                                    role: 'link',
                                    withRipple: !0,
                                    flexIcon: !0,
                                    'aria-label': l,
                                    onClick: i,
                                    icon: (0, O.jsx)(q.Icon, { variant: ta(t), size: 'xxs', className: tr().downloadButtonIcon }),
                                    ...(0, K.Am)(K.e8.navbar.DOWNLOAD_APP_BUTTON_ENLARGED),
                                    children: (0, O.jsx)(el.Caption, {
                                        variant: 'span',
                                        className: tr().downloadButtonText,
                                        size: 'm',
                                        children: (0, O.jsx)(Y.A, { id: 'offline.download' }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                to = (0, p.forwardRef)((e, t) => (0, O.jsx)(tl, { forwardRef: t, ...e }));
            var ts = a(23258),
                tc = a.n(ts);
            let td = (e) => {
                    let { variant: t, onDownloadClick: a } = e,
                        i = ti(t),
                        n = (0, p.useMemo)(() => ta(t), [t]);
                    return (0, O.jsxs)(eA.Paper, {
                        radius: 'm',
                        className: tc().root,
                        children: [
                            (0, O.jsx)(q.Icon, { variant: n, className: tc().icon }),
                            (0, O.jsxs)(er.m_, {
                                placement: 'left',
                                offsetOptions: 4,
                                children: [
                                    (0, O.jsx)($.$, {
                                        className: tc().button,
                                        color: 'secondary',
                                        radius: 'round',
                                        size: 'xs',
                                        variant: 'default',
                                        role: 'link',
                                        withRipple: !0,
                                        flexIcon: !0,
                                        onClick: a,
                                        icon: (0, O.jsx)(q.Icon, { variant: 'download', size: 'xxs', className: tc().buttonIcon }),
                                        'aria-label': i,
                                        ...(0, K.Am)(K.e8.navbar.DOWNLOAD_APP_BUTTON_MINIMIZED),
                                    }),
                                    (0, O.jsx)(er.ZI, {
                                        children: (0, O.jsx)(el.Caption, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: i }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                tu = (0, D.PA)((e) => {
                    var t;
                    let { isCollapsed: a } = e,
                        { settings: i } = (0, g.Pjs)(),
                        n = (0, g.NFA)(),
                        r = n.get(g.ooW),
                        l = n.get(g.twC),
                        [o, s] = (0, p.useState)(!1),
                        c = (() => {
                            let e = (0, z.st)(),
                                { hash: t } = (0, z.gf)(),
                                a = (0, g.UlF)();
                            return (0, p.useCallback)(() => {
                                if (!e || !t) return;
                                let i = (0, F.Fx)({
                                    params: {
                                        entityType: F.LA.Error,
                                        entityId: F.LA.Error,
                                        hash: t,
                                        pageId: F.QT.PageNotFoundScreen,
                                        pageStyle: F.QL.Fullscreen,
                                        pagePlacement: F.c4.Fullscreen,
                                        mainObjectType: F.ky.NonApplicable,
                                        mainObjectId: F.ky.NonApplicable,
                                        from: F.QT.PageNotFoundScreen,
                                        to: F.QT.AppDownloadScreen,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnDownloadScreenNavigated',
                                });
                                i && (0, F.ID)(e.evgenInstance, i);
                            }, [e, t, a]);
                        })(),
                        d = (0, p.useMemo)(() => {
                            var e;
                            switch (null == (e = i.browserInfo) ? void 0 : e.OSFamily) {
                                case 'MacOS':
                                    return e5.MACOS;
                                case 'Windows':
                                    return e5.WINDOWS;
                                default:
                                    return e5.UNKNOWN;
                            }
                        }, [null == (t = i.browserInfo) ? void 0 : t.OSFamily]),
                        u = (0, g._lF)(l.downloadDesktop.url),
                        m = (0, p.useCallback)(() => {
                            c(), window.open(u, '_blank', 'noreferrer noopener');
                        }, [c, u]),
                        _ = (0, p.useCallback)(() => {
                            r.set(g.cYZ.NavbarDownloadBarIsHidden, !0, { expires: 30 }), s(!0);
                        }, [r]);
                    return o
                        ? null
                        : (0, O.jsx)(tt, {
                              isCollapsed: a,
                              button: (0, O.jsx)(td, { variant: d, onDownloadClick: m }),
                              children: (0, O.jsx)(to, { variant: d, onDownloadClick: m, onCloseClick: _ }),
                          });
                });
            var tm = a(69610);
            function t_() {
                return (t_ = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let tp = function (e) {
                return p.createElement(
                    'svg',
                    t_({ viewBox: '0 0 58 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    p.createElement(
                        'g',
                        { clipPath: 'url(#clip0_2521_25547)' },
                        p.createElement(
                            'g',
                            { clipPath: 'url(#clip1_2521_25547)' },
                            i || (i = p.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' })),
                            n ||
                                (n = p.createElement('path', {
                                    d: 'M40.4184 5.14279C41.6821 4.20644 43.1756 3.6404 44.7322 3.49976V6.07553C43.726 6.20598 42.765 6.59121 41.943 7.20031C40.9138 7.96298 40.1569 9.03624 39.7839 10.2618C39.411 11.4873 39.4419 12.8003 39.8719 14.007C40.3019 15.2137 41.1084 16.2502 42.1723 16.9637C43.2362 17.6773 44.5013 18.03 45.7809 17.9698C47.0605 17.9097 48.2869 17.4399 49.2792 16.6298C50.2716 15.8197 50.9773 14.712 51.2922 13.4703C51.5119 12.6042 51.5334 11.7049 51.3613 10.8378L53.5243 9.09892L53.5229 9.0849C54.1067 10.691 54.1959 12.4383 53.7744 14.1C53.3245 15.8738 52.3163 17.4561 50.8987 18.6135C49.4811 19.7708 47.7291 20.4419 45.9011 20.5278C44.0731 20.6137 42.2658 20.1099 40.7459 19.0906C39.2261 18.0713 38.074 16.5905 37.4597 14.8666C36.8453 13.1428 36.8013 11.2671 37.334 9.51633C37.8668 7.76555 38.948 6.23231 40.4184 5.14279Z',
                                    fill: '#FCCA00',
                                })),
                            r ||
                                (r = p.createElement('path', {
                                    d: 'M51.8934 6.34507L51.9025 6.36777L50.457 8.66347C49.9314 7.88453 49.227 7.23618 48.4027 6.77726V12.0016C48.4027 13.6044 47.1033 14.9038 45.5004 14.9038C43.8975 14.9038 42.5981 13.6044 42.5981 12.0016C42.5981 10.3987 43.8975 9.09931 45.5004 9.09931C46.1011 9.09931 46.6592 9.28181 47.1223 9.59441V3.61938C49.0065 3.98181 50.6703 4.96381 51.8934 6.34507Z',
                                    fill: '#FC3F1D',
                                })),
                            p.createElement(
                                'mask',
                                { id: 'mask0_2521_25547', style: { maskType: 'alpha' }, maskUnits: 'userSpaceOnUse', x: 33, y: 0, width: 25, height: 24 },
                                l || (l = p.createElement('circle', { cx: 45.5005, cy: 12, r: 12, fill: 'white' })),
                            ),
                            o || (o = p.createElement('g', { mask: 'url(#mask0_2521_25547)' })),
                            s ||
                                (s = p.createElement(
                                    'g',
                                    { clipPath: 'url(#clip2_2521_25547)' },
                                    p.createElement('rect', { width: 24, height: 24, transform: 'translate(33.5005)', fill: 'black' }),
                                    p.createElement('path', {
                                        d: 'M57.5002 3.59937L45.121 10.2255L51.5722 3.59937L47.9962 3.59937L43.6042 9.6956V3.59937L40.7002 3.59937V20.3994H43.6042V14.313L47.9962 20.3994H51.5722L45.2885 13.9815L57.5002 20.3994V17.2794L46.3623 12.811L57.5002 13.5594V10.4394L46.4328 11.1589L57.5002 6.71936V3.59937Z',
                                        fill: 'url(#paint0_radial_2521_25547)',
                                    }),
                                )),
                        ),
                    ),
                    c ||
                        (c = p.createElement(
                            'g',
                            { clipPath: 'url(#clip3_2521_25547)' },
                            p.createElement('rect', { x: 17.0005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            p.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M41.0005 12C41.0005 18.6274 35.6279 24 29.0005 24C22.3731 24 17.0005 18.6274 17.0005 12C17.0005 5.37258 22.3731 0 29.0005 0C30.2956 0 31.5427 0.205154 32.7112 0.584736L29.9763 9H21.9892L21.0132 12H29.0013L26.6613 19.2H29.9613L32.3013 12L41.0005 12ZM40.6224 9H33.2763L35.5662 1.95391C38.0324 3.56896 39.8677 6.06758 40.6224 9Z',
                                fill: 'url(#paint1_linear_2521_25547)',
                            }),
                        )),
                    d ||
                        (d = p.createElement('path', {
                            d: 'M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z',
                            fill: 'black',
                        })),
                    u ||
                        (u = p.createElement('path', {
                            d: 'M18.2943 10.6431C18.2943 10.6431 21.283 14.8271 21.2703 14.8639C21.2143 15.024 21.154 15.1821 21.0895 15.338C21.0747 15.3735 17.35 12.1585 17.35 12.1585C17.35 12.1585 18.3728 19.0145 18.3525 19.0314C18.2041 19.1531 18.0528 19.2706 17.8972 19.383C17.8757 19.3986 15.6594 12.6669 15.6594 12.6669C15.6594 12.6669 12.5603 21.1641 12.5342 21.1646C12.4861 21.1654 12.4376 21.1658 12.3896 21.1658C12.2277 21.1658 12.0671 21.1616 11.9069 21.1536C11.8828 21.1523 13.7581 12.101 13.7581 12.101C13.7581 12.101 4.94181 17.5004 4.92916 17.4839C4.80269 17.3199 4.68169 17.1517 4.56617 16.9789C4.55395 16.9607 12.2686 10.4711 12.2686 10.4711C12.269 10.4716 3.15343 9.90658 3.15723 9.88756C3.19601 9.69233 3.2407 9.49879 3.29129 9.30821C3.29593 9.29003 12.0532 8.60038 12.0532 8.60038C12.0532 8.60038 5.65977 5.13649 5.67495 5.12085C5.80606 4.98689 5.94139 4.85674 6.08052 4.73039C6.09738 4.71517 13.1383 7.06726 13.1383 7.06726C13.1383 7.06726 10.9718 2.40366 11.011 2.39774C11.1691 2.3745 11.328 2.35506 11.4886 2.33985C11.5224 2.33689 15.1704 6.63623 15.1704 6.63623C15.1704 6.63623 16.3365 3.16388 16.3711 3.18036C16.5363 3.25811 16.6991 3.34009 16.8588 3.42672C16.8888 3.44278 16.9891 7.20502 16.9891 7.20502C16.9891 7.20502 19.8066 5.92333 19.8133 5.93178C19.9116 6.05814 20.0068 6.18702 20.0987 6.31887C20.1046 6.32732 18.0401 8.74829 18.0401 8.74829C18.0401 8.74829 21.6506 10.0397 21.6565 10.0735C21.6835 10.2261 21.7071 10.3794 21.7265 10.5341C21.7303 10.5658 18.2943 10.6431 18.2943 10.6431Z',
                            fill: '#FED42B',
                        })),
                    m ||
                        (m = p.createElement(
                            'defs',
                            null,
                            p.createElement(
                                'radialGradient',
                                {
                                    id: 'paint0_radial_2521_25547',
                                    cx: 0,
                                    cy: 0,
                                    r: 1,
                                    gradientUnits: 'userSpaceOnUse',
                                    gradientTransform: 'translate(40.7002 3.59937) rotate(45) scale(23.7588)',
                                },
                                p.createElement('stop', { offset: 0.5, stopColor: '#FF5500' }),
                                p.createElement('stop', { offset: 1, stopColor: '#BBFF00' }),
                            ),
                            p.createElement(
                                'linearGradient',
                                { id: 'paint1_linear_2521_25547', x1: 17.0005, y1: 10.4, x2: 41.0005, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                p.createElement('stop', { stopColor: '#FF5C4D' }),
                                p.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                p.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            p.createElement(
                                'clipPath',
                                { id: 'clip0_2521_25547' },
                                p.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                            p.createElement(
                                'clipPath',
                                { id: 'clip1_2521_25547' },
                                p.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                            p.createElement(
                                'clipPath',
                                { id: 'clip2_2521_25547' },
                                p.createElement('rect', { width: 24, height: 24, fill: 'white', transform: 'translate(33.5005)' }),
                            ),
                            p.createElement(
                                'clipPath',
                                { id: 'clip3_2521_25547' },
                                p.createElement('rect', { x: 17.0005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                        )),
                );
            };
            var tv = a(6437),
                th = a.n(tv);
            let tg = (e) => {
                    let { className: t, forwardRef: a, shouldFetchOffers: i } = e,
                        {
                            paywall: { modal: n },
                        } = (0, g.Pjs)(),
                        { formatMessage: r } = (0, G.A)();
                    return (0, O.jsxs)('section', {
                        className: (0, R.$)(th().root, t),
                        ref: a,
                        'aria-label': r({ id: 'plusbar.subscription-activation' }),
                        ...(0, K.Am)(K.e8.plusBar.PLUS_BAR),
                        children: [
                            (0, O.jsx)(tp, { className: th().logos, 'aria-hidden': 'true' }),
                            (0, O.jsx)(el.Caption, {
                                className: th().title,
                                variant: 'div',
                                size: 'm',
                                weight: 'medium',
                                ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_TITLE),
                                children: (0, O.jsx)(Y.A, { id: 'plusbar.title', values: { br: '\n', nbsp: '\xa0' } }),
                            }),
                            (0, O.jsx)(el.Caption, {
                                className: th().addition,
                                variant: 'div',
                                size: 'xs',
                                weight: 'normal',
                                ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_ADDITION),
                                children: (0, O.jsx)(Y.A, { id: 'plusbar.text', values: { br: '\n', nbsp: '\xa0' } }),
                            }),
                            (0, O.jsxs)('div', {
                                className: th().buttons,
                                children: [
                                    (0, O.jsx)(tm.FB, { shouldFetchOffers: i, ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_OFFER_BUTTON) }),
                                    (0, O.jsx)($.$, {
                                        className: th().button,
                                        isBlock: !0,
                                        radius: 'xxxl',
                                        size: 'm',
                                        variant: 'text',
                                        color: 'primary',
                                        withRipple: !1,
                                        onClick: n.open,
                                        ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_PAYWALL_BUTTON),
                                        children: (0, O.jsx)(Y.A, { id: 'interface-actions.more-details' }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                tx = (0, p.forwardRef)((e, t) =>
                    (0, O.jsx)(g.rtM, { page: g.l7W.SIDEBAR, places: [g.RBW.SIDEBAR_BANNER], children: (0, O.jsx)(tg, { forwardRef: t, ...e }) }),
                );
            var ty = a(25615),
                tb = a.n(ty);
            let tA = (0, D.PA)((e) => {
                let { isCollapsed: t, shouldFetchOffers: a } = e,
                    { formatMessage: i } = (0, G.A)(),
                    {
                        paywall: { modal: n },
                    } = (0, g.Pjs)();
                return (0, O.jsx)(tt, {
                    className: tb().root,
                    isCollapsed: t,
                    button: (0, O.jsxs)(er.m_, {
                        ...em,
                        enabled: t,
                        children: [
                            (0, O.jsx)($.$, {
                                variant: 'text',
                                withRipple: !1,
                                size: 'xxs',
                                icon: (0, O.jsx)(q.Icon, { className: tb().icon, variant: 'plusOutlined' }),
                                className: (0, R.$)(tb().button, tb().important),
                                'aria-label': i({ id: 'plusbar.subscription-activation' }),
                                onClick: n.open,
                                ...(0, K.Am)(K.e8.navbar.PAYWALL_BUTTON_MINIMIZED),
                            }),
                            (0, O.jsx)(er.ZI, {
                                children: (0, O.jsx)(el.Caption, {
                                    variant: 'span',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    children: (0, O.jsx)(Y.A, { id: 'plusbar.subscription-activation' }),
                                }),
                            }),
                        ],
                    }),
                    children: (0, O.jsx)(tx, { shouldFetchOffers: a }),
                });
            });
            tA.displayName = 'NavbarDesktopAnimatedPlusBar';
            var tC = a(92304),
                tN = a(63873),
                tf = a.n(tN);
            let tI = (e) => {
                let { className: t, optionOffer: a } = e,
                    { formatMessage: i } = (0, G.A)(),
                    { subscriptionName: n, offerText: r, mainText: l, openPaymentWidgetModal: o } = a;
                return (0, O.jsxs)('section', {
                    className: (0, R.$)(tf().root, t),
                    'aria-label': i({ id: 'plusbar.subscription-activation' }),
                    ...(0, K.Am)(K.e8.plusBar.PLUS_BAR),
                    children: [
                        (0, O.jsx)(eb.Image, {
                            src: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.693eab4a84d7e41b1102de79/orig',
                            alt: 'Option Icon',
                            className: tf().optionIcon,
                        }),
                        (0, O.jsx)(el.Caption, {
                            className: tf().title,
                            variant: 'div',
                            size: 'm',
                            weight: 'medium',
                            ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_TITLE),
                            children: n,
                        }),
                        (0, O.jsx)(el.Caption, {
                            className: tf().addition,
                            variant: 'div',
                            size: 'xs',
                            weight: 'normal',
                            ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_ADDITION),
                            children: r,
                        }),
                        (0, O.jsx)('div', {
                            className: tf().buttons,
                            children: (0, O.jsx)($.$, {
                                className: tf().button,
                                isBlock: !0,
                                radius: 'xxxl',
                                size: 'm',
                                variant: 'default',
                                color: 'secondary',
                                withRipple: !1,
                                onClick: o,
                                ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_PAYMENT_WIDGET_BUTTON),
                                children: l,
                            }),
                        }),
                    ],
                });
            };
            var tS = a(68393),
                tT = a.n(tS);
            let tP = (0, D.PA)((e) => {
                let { optionOffer: t, isCollapsed: a, setForceUpdateElement: i } = e,
                    [n, r] = (0, p.useState)(!1),
                    l = (0, U.c)(() => {
                        r(!0);
                    }),
                    o = (0, U.c)(() => {
                        r(!1);
                    });
                return (0, O.jsx)(tt, {
                    className: tT().root,
                    isCollapsed: a,
                    button: (0, O.jsxs)(tC.AM, {
                        open: n,
                        onOpenChange: r,
                        placement: 'top',
                        offsetOptions: { mainAxis: -50, crossAxis: 0 },
                        children: [
                            (0, O.jsx)($.$, {
                                type: 'button',
                                onMouseEnter: l,
                                onMouseLeave: o,
                                className: tT().button,
                                ref: i,
                                'data-intersection-property-id': 'PLUSBAR_OPTIONS_BUTTON_INTERSECTION_PROPERTY_ID',
                                children: (0, O.jsx)(eb.Image, {
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.693eab4a84d7e41b1102de79/orig',
                                    alt: 'Option Icon',
                                    className: tT().optionIcon,
                                }),
                            }),
                            (0, O.jsx)(tC.hl, {
                                className: tT().popoverContent,
                                onMouseEnter: l,
                                onMouseLeave: o,
                                children: (0, O.jsx)(tI, { className: tT().popoverContent, optionOffer: t }),
                            }),
                        ],
                    }),
                    children: (0, O.jsx)(tI, { optionOffer: t }),
                });
            });
            tP.displayName = 'NavbarDesktopAnimatedPlusOptionsBar';
            var tk = a(22674),
                tE = a(79945),
                tj = a.n(tE);
            let tL = (e) => {
                let { isCollapsed: t, isActive: a } = e;
                return (0, O.jsx)(tt, {
                    className: tj().root,
                    isCollapsed: t,
                    button: (0, O.jsx)(tk.Shimmer, { className: tj().buttonShimmer, isActive: a, radius: 'round' }),
                    children: (0, O.jsx)(tk.Shimmer, { className: tj().barShimmer, isActive: a, radius: 'xxxl' }),
                });
            };
            tL.displayName = 'NavbarDesktopAnimatedShimmerBar';
            var tw = a(49320),
                tM = a(31865),
                tB = a.n(tM);
            let tO = () => {
                let {
                        experiments: e,
                        paywall: { modal: t },
                    } = (0, g.Pjs)(),
                    { formatMessage: a } = (0, G.A)(),
                    i = e.checkExperiment(g.zal.WebNextUnauthorizedSubscriptionButton, 'on'),
                    n = i ? a({ id: 'plusbar.title' }, { br: '\n', nbsp: '\xa0' }) : a({ id: 'authorization.enter-title' }),
                    r = i ? a({ id: 'plusbar.text' }, { br: '\n', nbsp: '\xa0' }) : a({ id: 'authorization.enter-subtitle' }),
                    l = (0, p.useMemo)(
                        () =>
                            i
                                ? (0, O.jsxs)('div', {
                                      className: tB().buttons,
                                      children: [
                                          (0, O.jsx)(tm.FB, {}),
                                          (0, O.jsx)($.$, {
                                              className: tB().button,
                                              isBlock: !0,
                                              radius: 'xxxl',
                                              size: 'm',
                                              variant: 'default',
                                              color: 'secondary',
                                              withRipple: !1,
                                              onClick: t.open,
                                              children: (0, O.jsx)(Y.A, { id: 'interface-actions.more-details' }),
                                          }),
                                          (0, O.jsx)(es.Hi, {
                                              size: 's',
                                              variant: 'text',
                                              withRipple: !1,
                                              buttonText: (0, O.jsx)(Y.A, { id: 'authorization.has-subscription' }),
                                              isBlock: !0,
                                          }),
                                      ],
                                  })
                                : (0, O.jsx)(es.Hi, { size: 's', isBlock: !0 }),
                        [t.open, i],
                    );
                return (0, O.jsxs)('div', {
                    className: tB().root,
                    children: [
                        (0, O.jsx)(p.Suspense, { children: (0, O.jsx)(tw.YS, { className: tB().userProfile, userIdClassName: tB().userId, variant: 'desktop' }) }),
                        (0, O.jsx)(el.Caption, { className: tB().title, size: 'm', variant: 'div', weight: 'bold', children: n }),
                        (0, O.jsx)(el.Caption, { className: tB().subtitle, size: 'xs', variant: 'div', weight: 'medium', children: r }),
                        l,
                    ],
                });
            };
            var tR = a(7917),
                tD = a.n(tR);
            let tK = (0, D.PA)((e) => {
                    let { isCollapsed: t, withUserProfileAnimation: a } = e,
                        { user: i, experiments: n } = (0, g.Pjs)();
                    if (!i.isAuthorized) {
                        let e = n.checkExperiment(g.zal.WebNextUnauthorizedSubscriptionButton, 'on'),
                            a = !t && e,
                            i = e || t;
                        return (0, O.jsx)(tt, {
                            barClassName: tD().unauthorizedBar,
                            isCollapsed: i,
                            button: (0, O.jsxs)(er.m_, {
                                ...em,
                                enabled: t,
                                children: [
                                    (0, O.jsxs)('div', {
                                        className: tD().userProfileContainer,
                                        children: [
                                            (0, O.jsx)(tw.YS, { className: tD().userProfile }),
                                            a &&
                                                (0, O.jsx)(el.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    children: (0, O.jsx)(Y.A, { id: 'authorization.enter-button' }),
                                                }),
                                        ],
                                    }),
                                    (0, O.jsx)(er.ZI, {
                                        children: (0, O.jsx)(el.Caption, {
                                            variant: 'span',
                                            type: 'text',
                                            size: 's',
                                            weight: 'medium',
                                            children: (0, O.jsx)(Y.A, { id: 'authorization.enter-tooltip' }),
                                        }),
                                    }),
                                ],
                            }),
                            children: (0, O.jsx)(tO, {}),
                        });
                    }
                    return (0, O.jsx)('div', {
                        className: tD().userProfileContainer,
                        children: (0, O.jsx)(tw.YS, {
                            className: tD().userProfile,
                            userIdClassName: tD().userId,
                            metaClassName: (0, R.$)(tD().userMeta, { [tD().userMeta_withAnimation]: a, [tD().userMeta_collapsed]: t }),
                            withMeta: !0,
                        }),
                    });
                }),
                tU = (0, D.PA)((e) => {
                    var t, a;
                    let { className: i, forwardRef: n, isCollapsed: r, shownAnimation: l, handleClick: o } = e,
                        s = y(),
                        c = (0, g.EE7)(),
                        { formatMessage: d } = (0, G.A)(),
                        u = (0, g.jjz)(),
                        {
                            user: m,
                            experiments: _,
                            settings: v,
                            modals: { bestRecommedationModal: h },
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: x },
                            },
                        } = (0, g.Pjs)(),
                        [b, A] = (0, Q.d)(),
                        C = _.checkExperiment(g.zal.WebNextPlusOptionsSidebar, 'on') && m.hasPlus,
                        N = (0, g.DpZ)({
                            storeName: 'music',
                            communicationId: 'mu-promo-kids-7d-web',
                            isEnabled: C,
                            offerElement: { element: b, intersectionPropertyId: 'PLUSBAR_OPTIONS_BUTTON_INTERSECTION_PROPERTY_ID' },
                        }),
                        f = (0, g.Yej)(),
                        I = (0, g.NFA)().get(g.ooW),
                        S = ec(),
                        T = ((e) => {
                            let t = (0, g.NFA)().get(g.ooW),
                                a = y(),
                                [i, n] = (0, p.useState)(!1);
                            return (
                                (0, p.useEffect)(() => {
                                    !0 !== t.get(g.cYZ.NavbarCollapsed) && (((e || a) && !1 !== t.get(g.cYZ.NavbarCollapsed)) || n(!0));
                                }, [e, a, t]),
                                i
                            );
                        })(r),
                        P = ((e, t, a) => (e.checkExperiment(g.zal.WebNextUnauthorizedSubscriptionButton, 'on') ? !a : t && !a))(_, m.isAuthorized, m.hasPlus),
                        k = C && N.isShimmerVisible,
                        E = C && !N.isShimmerVisible && N.subscriptionName,
                        j = (0, eo.Qj)(),
                        L = x.isVisible && j.isEnabled ? (null == (t = j.data) ? void 0 : t.style) : void 0,
                        w = _.checkExperiment(g.zal.WebNextPromoVeryBestRecommendations, 'on'),
                        M = _.checkExperiment(g.zal.WebNextNavbarExplicit, 'on'),
                        B = !r && M,
                        D = (null == (a = v.browserInfo) || a.isTouch, I.get(g.cYZ.NavbarDownloadBarIsHidden)),
                        F = _.checkExperiment(g.zal.WebNextNewWaveTab, 'on'),
                        z = (0, p.useMemo)(() => {
                            if (m.collectionHue && !F) return { '--logo-color': (0, g.eWZ)(m.collectionHue) };
                        }, [F, m.collectionHue]),
                        V = (0, p.useMemo)(() => (r ? d({ id: 'sidebar.uncollapse' }) : d({ id: 'sidebar.collapse' })), [r, d]),
                        W = (0, p.useCallback)(
                            (e, t) =>
                                e.id === g.RnV.CONCERTS && _.checkExperiment(g.zal.WebNextConcertsTicketIcon, 'on')
                                    ? (0, O.jsx)(e8, { isSelected: t })
                                    : F
                                      ? (0, O.jsx)(q.Icon, { variant: e.iconNewVersion, size: 'xs' })
                                      : (0, O.jsx)(q.Icon, { variant: t ? e.iconSelected : e.icon, size: 'm' }),
                            [_, F],
                        ),
                        Z = (0, U.c)(() => {
                            B && h.open();
                        }),
                        J = (0, p.useMemo)(
                            () => ({
                                [g.RnV.SEARCH]: d({ id: 'navigation.search' }),
                                [g.RnV.HOME]: F ? d({ id: 'navigation.page-my-vibe' }) : d({ id: 'navigation.page-main' }),
                                [g.RnV.FOR_YOU_AND_TRENDS]: d({ id: 'navigation.page-for-you-and-trends' }),
                                [g.RnV.COLLECTION]: d({ id: 'navigation.page-collection' }),
                                [g.RnV.NON_MUSIC]: d({ id: 'entity-names.podcasts-and-books' }),
                                [g.RnV.KIDS]: d({ id: 'kids.for-kids' }),
                                [g.RnV.CONCERTS]: d({ id: 'entity-names.concerts' }),
                                [g.RnV.PLUS]: d({ id: 'navigation.page-plus' }),
                            }),
                            [d, F],
                        ),
                        ee = (0, U.c)((e, t) => () => {
                            S(e, t);
                        }),
                        et = (0, p.useMemo)(
                            () =>
                                (0, O.jsx)(
                                    ei,
                                    {
                                        className: (0, R.$)({ [e4().navigationGroup]: F }),
                                        children: f.map((e) => {
                                            let t = c(e.availablePaths);
                                            return (0, O.jsx)(
                                                eg,
                                                {
                                                    config: e.onboardingConfig,
                                                    children: (0, O.jsx)(en, {
                                                        'data-intersection-property-id': g.NZ,
                                                        selected: t,
                                                        shownAnimation: l,
                                                        variant: 'main',
                                                        isNewVisualVersion: F,
                                                        withRipple: F && e.isEnabled,
                                                        children: (0, O.jsxs)(es.N_, {
                                                            href: e.isEnabled ? e.path : void 0,
                                                            role: 'link',
                                                            'aria-disabled': !e.isEnabled,
                                                            tabIndex: e.isEnabled ? 0 : -1,
                                                            className: (0, R.$)({ [e4().disabledNavigationItem]: !e.isEnabled }),
                                                            onClick: ee(e.analyticsParams.entityType, e.analyticsParams.to),
                                                            ...(0, K.Am)(ed[e.id]),
                                                            children: [
                                                                (0, O.jsxs)(er.m_, {
                                                                    ...em,
                                                                    enabled: r,
                                                                    children: [
                                                                        W(e, t),
                                                                        (0, O.jsx)(er.ZI, {
                                                                            children: (0, O.jsx)(el.Caption, {
                                                                                variant: 'span',
                                                                                type: 'text',
                                                                                size: 's',
                                                                                weight: 'medium',
                                                                                children: J[e.id],
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, O.jsx)(el.Caption, {
                                                                    variant: 'span',
                                                                    type: 'controls',
                                                                    size: 'm',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    className: (0, R.$)({ [e4().title_animate]: l, [e4().title_collapsed]: r }),
                                                                    children: J[e.id],
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
                            [c, r, _, _.loadingState, l, J, f, ee, W],
                        ),
                        eu = (0, p.useMemo)(
                            () =>
                                s
                                    ? null
                                    : (0, p.createElement)(er.m_, {
                                          ...em,
                                          key: 'collapseTooltip',
                                          enabled: r,
                                          isFocusEnabled: !1,
                                          children: [
                                              (0, O.jsx)($.$, {
                                                  className: e4().collapseButton,
                                                  'aria-label': V,
                                                  radius: 'round',
                                                  color: 'secondary',
                                                  size: 'xs',
                                                  icon: (0, O.jsx)(q.Icon, { variant: r ? 'arrowRight' : 'arrowLeft', size: 'xxs' }),
                                                  onClick: o,
                                              }),
                                              (0, O.jsx)(er.ZI, { className: (0, R.$)({ [e4().collapseButtonTooltip_hidden]: !r }), children: V }),
                                          ],
                                      }),
                            [r, V, o, s],
                        );
                    return (0, O.jsxs)('div', {
                        className: (0, R.$)(e4().root, i),
                        style: L,
                        ref: n,
                        children: [
                            (0, O.jsxs)('div', {
                                className: e4().logoWrapper,
                                children: [
                                    (0, O.jsx)(es.N_, {
                                        href: '/',
                                        className: e4().logoLink,
                                        'aria-label': d({ id: 'navigation.page-main' }),
                                        children: (0, O.jsx)(H.gu, { style: z, className: e4().logo, collapsed: r, shownAnimation: l, lang: u }),
                                    }),
                                    eu,
                                ],
                            }),
                            w &&
                                (0, O.jsx)(el.Caption, {
                                    style: z,
                                    variant: 'div',
                                    type: 'text',
                                    size: 'xs',
                                    weight: 'medium',
                                    className: (0, R.$)(e4().subTitle, { [e4().title_animate]: l, [e4().title_collapsed]: r, [e4().subTitle_withCursorPointer]: B }),
                                    onClick: Z,
                                    children: (0, O.jsx)(Y.A, { id: 'navigation.best-recommendations' }),
                                }),
                            (0, O.jsx)('div', {
                                className: e4().scrollableContainer,
                                children: (0, O.jsxs)('div', {
                                    className: e4().scrollableContent,
                                    children: [
                                        (0, O.jsx)(ea, {
                                            className: (0, R.$)(e4().navigation, { [e4().navigation_new]: F, [e4().navigation_gapFill]: !1 }),
                                            collapsed: r,
                                            'aria-label': d({ id: 'navigation.main-menu' }),
                                            children: et,
                                        }),
                                        (0, O.jsx)(es.aQ, {
                                            fallback: (0, O.jsx)(eq, { style: L, isCollapsed: r, withCollapseAnimation: !!l, className: e4().pinsList }),
                                        }),
                                        P && (0, O.jsx)(tA, { shouldFetchOffers: T, isCollapsed: r }),
                                        !D && !1,
                                        k && (0, O.jsx)(tL, { isCollapsed: r, isActive: N.isShimmerActive }),
                                        E && (0, O.jsx)(tP, { optionOffer: N, isCollapsed: r, setForceUpdateElement: A }),
                                    ],
                                }),
                            }),
                            (0, O.jsx)(tK, { withUserProfileAnimation: l, isCollapsed: r }),
                            M &&
                                (0, O.jsxs)(X.a, {
                                    className: e4().bestRecommendationsModal,
                                    headerClassName: e4().bestRecommendationsModalHeader,
                                    contentClassName: e4().bestRecommendationsModalContent,
                                    open: h.isOpened,
                                    onOpenChange: h.onOpenChange,
                                    onClose: h.close,
                                    size: 'fitContent',
                                    placement: 'center',
                                    overlayColor: 'full',
                                    labelClose: d({ id: 'interface-actions.close' }),
                                    children: [
                                        (0, O.jsx)(q.Icon, { variant: 'musicLogo', className: e4().bestRecommendationsModalLogo }),
                                        (0, O.jsx)(el.Caption, {
                                            className: e4().bestRecommendationsModalText,
                                            variant: 'div',
                                            size: 'm',
                                            weight: 'normal',
                                            dangerouslySetInnerHTML: { __html: d({ id: 'about-app.explicit-content' }) },
                                        }),
                                    ],
                                }),
                        ],
                    });
                }),
                tF = (0, p.forwardRef)((e, t) =>
                    (0, O.jsx)(g.rtM, { page: g.l7W.SIDEBAR, places: [g.RBW.SIDEBAR_BANNER], children: (0, O.jsx)(tU, { forwardRef: t, ...e }) }),
                );
            var tz = a(59408),
                tV = a.n(tz);
            let tW = (0, D.PA)((e) => {
                    let { className: t } = e,
                        { experiments: a } = (0, g.Pjs)(),
                        i = (0, g.EE7)(),
                        { formatMessage: n } = (0, G.A)(),
                        r = (0, g.Yej)(),
                        l = n({ id: 'navigation.main-menu' }),
                        o = ec(),
                        s = a.checkExperiment(g.zal.WebNextNewWaveTab, 'on'),
                        c = (0, p.useMemo)(
                            () => ({
                                [g.RnV.SEARCH]: n({ id: 'navigation.search' }),
                                [g.RnV.HOME]: s ? n({ id: 'navigation.page-my-vibe' }) : n({ id: 'navigation.page-main' }),
                                [g.RnV.FOR_YOU_AND_TRENDS]: n({ id: 'navigation.page-for-you-and-trends' }),
                                [g.RnV.COLLECTION]: n({ id: 'navigation.page-collection' }),
                                [g.RnV.NON_MUSIC]: n({ id: 'entity-names.podcasts-and-books' }),
                                [g.RnV.KIDS]: n({ id: 'kids.for-kids' }),
                                [g.RnV.CONCERTS]: n({ id: 'entity-names.concerts' }),
                            }),
                            [n, s],
                        ),
                        d = (0, p.useCallback)(
                            (e, t) =>
                                e.id === g.RnV.CONCERTS && a.checkExperiment(g.zal.WebNextConcertsTicketIcon, 'on')
                                    ? (0, O.jsx)(e8, { isSelected: t || s })
                                    : s
                                      ? (0, O.jsx)(q.Icon, { variant: e.iconNewVersion, size: 'xs' })
                                      : (0, O.jsx)(q.Icon, { variant: t ? e.iconSelected : e.icon, size: 'm' }),
                            [a, s],
                        ),
                        u = (0, U.c)((e, t) => () => {
                            o(e, t);
                        });
                    return (0, O.jsx)('div', {
                        className: (0, R.$)(tV().root, t),
                        children: (0, O.jsx)(ea, {
                            collapsed: !0,
                            direction: 'horizontal',
                            'aria-label': l,
                            children: (0, O.jsx)(ei, {
                                children: (0, O.jsxs)(O.Fragment, {
                                    children: [
                                        r.map((e) => {
                                            let t = i(e.availablePaths);
                                            return (0, O.jsx)(
                                                eg,
                                                {
                                                    config: e.onboardingConfig,
                                                    children: (0, O.jsx)(en, {
                                                        'data-intersection-property-id': g.NZ,
                                                        selected: t,
                                                        isNewVisualVersion: s,
                                                        children: (0, O.jsxs)(es.N_, {
                                                            href: e.isEnabled ? e.path : void 0,
                                                            role: 'link',
                                                            'aria-disabled': !e.isEnabled,
                                                            tabIndex: e.isEnabled ? 0 : -1,
                                                            className: (0, R.$)({ [tV().disabledNavigationItem]: !e.isEnabled }),
                                                            onClick: u(e.analyticsParams.entityType, e.analyticsParams.to),
                                                            ...(0, K.Am)(ed[e.id]),
                                                            children: [
                                                                d(e, t),
                                                                (0, O.jsx)(el.Caption, {
                                                                    variant: 'span',
                                                                    type: 'controls',
                                                                    size: 'm',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    children: c[e.id],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                                        !s && (0, O.jsx)(en, { children: (0, O.jsx)(tw.YS, { className: tV().user, variant: 'mobile' }) }),
                                    ],
                                }),
                            }),
                        }),
                    });
                }),
                tG = (0, D.PA)((e) => {
                    var t;
                    let { className: a, externalIsCollapsed: i, externalSetIsCollapsed: n } = e,
                        r = (0, g.NFA)().get(g.ooW),
                        l = y(),
                        {
                            settings: { isMobile: o },
                        } = (0, g.Pjs)(),
                        [s, c] = (0, p.useState)(null != (t = r.get(g.cYZ.NavbarCollapsed)) ? t : l),
                        [d, u] = (0, p.useState)(!1),
                        m = (() => {
                            let e = (0, z.st)(),
                                { hash: t } = (0, z.gf)(),
                                a = (0, g.UlF)(),
                                {
                                    settings: { isMobile: i },
                                } = (0, g.Pjs)();
                            return (0, p.useCallback)(
                                (n) => {
                                    if (!e) return;
                                    let r = (0, F.Fx)({
                                        params: {
                                            hash: t,
                                            pageId: F.QT.Sidebar,
                                            sidebarSize: n || i ? F.JQ.Small : F.JQ.Medium,
                                            sidebarPosition: i ? F.Vw.Bottom : F.Vw.Left,
                                        },
                                        logger: a,
                                        context: 'useSendEventOnSidebarOpened',
                                    });
                                    r && (0, F.U0)(e.evgenInstance, r);
                                },
                                [e, t, i, a],
                            );
                        })(),
                        _ = null != i ? i : s,
                        v = null != n ? n : c,
                        h = (0, p.useMemo)(() => (o ? tW : tF), [o]),
                        x = (0, U.c)((e) => {
                            e.stopPropagation(), e.preventDefault();
                            let t = !_;
                            r.set(g.cYZ.NavbarCollapsed, t, { expires: 180 }), v(t), u(!0);
                        });
                    return (
                        (0, p.useEffect)(() => {
                            m(_ || l);
                        }, [l, _, m]),
                        (0, O.jsx)('aside', {
                            className: (0, R.$)(W().root, { [W().root_collapsed]: _ || l }, a),
                            ...(0, K.Am)(K.e8.navbar.NAVBAR),
                            children: (0, O.jsx)(h, { handleClick: x, isCollapsed: _ || l, shownAnimation: d }),
                        })
                    );
                });
        },
        16213: (e, t, a) => {
            'use strict';
            a.d(t, { tL: () => C, __: () => s, cZ: () => l });
            var i,
                n,
                r = a(93064);
            let l = (e) => {
                let { text: t, textColor: a, color: i, action: n } = e;
                return (0, r.wg)({
                    text: t || null,
                    textColor: a || null,
                    color: i || null,
                    action:
                        n &&
                        ((e) => {
                            let { id: t, type: a, value: i, communicationId: n } = e;
                            return (0, r.wg)({ id: t || null, type: a || null, value: i || null, communicationId: n || null });
                        })(n),
                });
            };
            !(function (e) {
                (e.CLOSE = 'close'), (e.LINK = 'link'), (e.PAYWALL = 'paywall');
            })(i || (i = {}));
            let o = r.gK.model('CommunicationButtonAction', {
                id: r.gK.maybeNull(r.gK.string),
                type: r.gK.maybeNull(r.gK.enumeration(Object.values(i))),
                value: r.gK.maybeNull(r.gK.string),
                communicationId: r.gK.maybeNull(r.gK.string),
            });
            !(function (e) {
                (e.PRIMARY = 'primary'), (e.SECONDARY = 'secondary'), (e.PLUS = 'plus');
            })(n || (n = {}));
            let s = r.gK.model('CommunicationButton', {
                text: r.gK.maybeNull(r.gK.string),
                color: r.gK.maybeNull(r.gK.enumeration(Object.values(n))),
                action: r.gK.maybeNull(o),
                textColor: r.gK.maybeNull(r.gK.string),
            });
            var c = a(54486),
                d = a(50420),
                u = a(28303),
                m = a(61910),
                _ = a(31500),
                p = a(8817),
                v = a(67648),
                h = a(27510),
                g = a(77881),
                x = a(97800),
                y = a(83252),
                b = a(82502),
                A = a.n(b);
            let C = (0, u.PA)((e) => {
                var t, a, n, r;
                let { anchorId: l, screenId: o, button: s, buttonSize: u, buttonClassName: b, textClassName: C, feedbackToken: N, hide: f } = e,
                    { communication: I } = (0, y.Pjs)(),
                    [S] = (0, v.d)(),
                    { openPaymentWidgetModal: T } = (0, y.DpZ)({
                        storeName: 'music',
                        communicationId: null != (r = null == (t = s.action) ? void 0 : t.communicationId) ? r : '',
                        offerElement: { element: S, intersectionPropertyId: 'barbellow' },
                        isEnabled: !!(null == (a = s.action) ? void 0 : a.communicationId),
                    }),
                    P = ((null == (n = s.action) ? void 0 : n.type) === i.LINK && s.action.value) || '',
                    k = (0, y.ZpR)(P),
                    E = (0, p.c)((e) => {
                        if (s.action)
                            switch ((l && o && s.action.id && I.action(l, o, s.action.id, N), s.action.type)) {
                                case i.PAYWALL:
                                    T(), null == f || f();
                                    return;
                                case i.LINK:
                                    s.action.value && (k(e), null == f || f());
                                    return;
                                case i.CLOSE:
                                    null == f || f();
                                    return;
                            }
                    }),
                    j = (0, m.useMemo)(() => {
                        if (s.textColor) return { color: s.textColor };
                    }, [s.textColor]),
                    L = (0, h.L)(() => {
                        var e;
                        switch (null == (e = s.action) ? void 0 : e.type) {
                            case i.LINK:
                                return _.OA.communicationButton.COMMUNICATION_BUTTON_LINK;
                            case i.CLOSE:
                                return _.OA.communicationButton.COMMUNICATION_BUTTON_CLOSE;
                            default:
                                return _.OA.communicationButton.COMMUNICATION_BUTTON_PAYWALL;
                        }
                    });
                return (0, c.jsx)(g.$, {
                    className: (0, d.$)(A().root, A()['root_'.concat(s.color)], b),
                    role: P ? 'link' : 'button',
                    color: s.color ? s.color : void 0,
                    radius: 'xxxl',
                    onClick: E,
                    size: u,
                    ...(0, _.Am)(L),
                    children: (0, c.jsx)(x.Caption, { className: (0, d.$)(A().text, C), variant: 'div', type: 'text', size: 'm', style: j, children: s.text }),
                });
            });
        },
        16825: (e) => {
            e.exports = { buttonWithPlayerBar: 'WithBuySubscriptionModal_buttonWithPlayerBar__p7or7' };
        },
        18180: (e) => {
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
        18726: (e) => {
            e.exports = {
                root: 'PlayingNow_root__0lQa8',
                textBlock: 'PlayingNow_textBlock___CfRh',
                title: 'PlayingNow_title__82csz',
                subTitle: 'PlayingNow_subTitle__JNJfh',
                link: 'PlayingNow_link__4gLK9',
            };
        },
        19020: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => g, v: () => s });
            var i = a(93064),
                n = a(59672),
                r = a(1762),
                l = a(83252),
                o = a(26433);
            let s = i.gK
                .compose(i.gK.model('BrandedPlayerBanner', { payload: i.gK.maybeNull(i.gK.model({ thumb: n.KB, modal: i.gK.maybeNull(r.i_) })), modal: o.qt }), o.JE)
                .views((e) => ({
                    get isVisible() {
                        let { experiments: t, settings: a, user: n } = (0, i.Zn)(e);
                        if (e.noAds || e.hasError || t.checkExperiment(l.zal.WebNextDisableAds, 'on') || !t.checkExperiment(l.zal.WebNextPlayerBranding, 'on')) return !1;
                        return !n.hasPlus && !a.isMobile;
                    },
                }))
                .actions((e) => ({
                    setPayload: (t) => {
                        let { settings: a } = (0, i.Zn)(e);
                        a.setCustomPlayerThumb(l.TZj.BRANDED), (e.payload = (0, i.wg)(t));
                    },
                }));
            var c = a(54486),
                d = a(28303),
                u = a(61910),
                m = a(8817),
                _ = a(80585);
            let p = { pp: 'g', ps: 'clni', p2: 'joqc', puid1: '', puid2: '', puid3: '' };
            var v = a(16560),
                h = (function (e) {
                    return (e.PLAYER = 'branded_player'), e;
                })({});
            let g = (0, d.PA)(() => {
                let {
                        advertBanners: {
                            banners: { brandedPlayerBanner: e },
                        },
                    } = (0, l.Pjs)(),
                    t = (0, m.c)(() => {
                        e.setType(l.h8o.BRANDING);
                    }),
                    a = (0, m.c)((t) => {
                        ((e) =>
                            (0, v.m)(e) &&
                            e.type === h.PLAYER &&
                            'object' == typeof e.payload &&
                            null !== e.payload &&
                            !Array.isArray(e.payload) &&
                            'thumb' in e.payload &&
                            (0, n.ls)(e.payload.thumb) &&
                            'modal' in e.payload &&
                            (0, r.h9)(e.payload.modal))(t.data) && e.setPayload(t.data.payload);
                    });
                return ((0, u.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, u.useEffect)(
                    () => (
                        window.addEventListener('message', a),
                        () => {
                            window.removeEventListener('message', a);
                        }
                    ),
                    [a],
                ),
                e.isVisible)
                    ? (0, c.jsx)(_.NX, {
                          ownerId: l.PVv,
                          containerId: 'adfox_175861261312993498',
                          params: p,
                          onLoad: t,
                          onError: e.toggleHasErrorTrue,
                          onNoAds: e.toggleNoAdsTrue,
                      })
                    : null;
            });
        },
        20125: (e) => {
            e.exports = {
                root: 'BuySubscriptionModal_root__5LvlX',
                content: 'BuySubscriptionModal_content__v06Ju',
                heading: 'BuySubscriptionModal_heading__07nBE',
                buttons: 'BuySubscriptionModal_buttons__wSCRP',
                button: 'BuySubscriptionModal_button__8m6Dx',
                buttonMainText: 'BuySubscriptionModal_buttonMainText__pyjEc',
                buttonAdditionText: 'BuySubscriptionModal_buttonAdditionText__rdKJn',
                header: 'BuySubscriptionModal_header__ho5hr',
            };
        },
        21514: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => f, J: () => l });
            var i = a(63930),
                n = a(93064),
                r = a(26433);
            let l = n.gK
                .model('ImageSliderModal', {
                    modal: r.qt,
                    images: n.gK.maybeNull(n.gK.array(n.gK.string)),
                    initialSlideIndex: n.gK.optional(n.gK.number, 0),
                    loadedImages: n.gK.maybeNull(n.gK.array(n.gK.string)),
                    sizeImage: n.gK.optional(n.gK.number, 1e3),
                    withAspectRatio: n.gK.optional(n.gK.boolean, !0),
                })
                .views((e) => ({ isImageLoaded: (t) => !!t && !!e.loadedImages && e.loadedImages.includes(t) }))
                .actions((e) => ({
                    openImages(t) {
                        let { images: a, initialSlideIndex: r, sizeImage: l, withAspectRatio: o } = t;
                        (e.images = (0, n.wg)((0, i.HO)(a))),
                            (e.sizeImage = null != l ? l : 1e3),
                            (e.withAspectRatio = null == o || o),
                            r && (e.initialSlideIndex = r),
                            e.modal.open();
                    },
                    setImageIsLoaded(t) {
                        var a, i;
                        e.loadedImages || (e.loadedImages = (0, n.wg)([])),
                            !t || (null == (a = e.loadedImages) ? void 0 : a.includes(t)) || null == (i = e.loadedImages) || i.push(t);
                    },
                    close() {
                        (e.images = null), (e.initialSlideIndex = 0), (e.loadedImages = null), e.modal.close();
                    },
                }));
            var o = a(54486),
                s = a(50420),
                c = a(28303),
                d = a(61910),
                u = a(43426),
                m = a(91657),
                _ = a(36553),
                p = a(31500),
                v = a(8817),
                h = a(77881),
                g = a(5956),
                x = a(58360),
                y = a(32692),
                b = a(3728),
                A = a(83252),
                C = a(88684),
                N = a.n(C);
            let f = (0, c.PA)(() => {
                var e, t, a, i;
                let {
                        settings: { isMobile: n },
                        modals: { imageSliderModal: r },
                    } = (0, A.Pjs)(),
                    { formatMessage: l } = (0, u.A)(),
                    { contentRef: c } = (0, A.gKY)(),
                    C = (0, A.zwV)(),
                    f = (0, d.useRef)(null),
                    [I, S] = (0, d.useState)(!0),
                    [T, P] = (0, d.useState)(!1),
                    [k, E] = (0, d.useState)(0),
                    j = (null != (i = null == (e = r.images) ? void 0 : e.length) ? i : 0) > 1,
                    L = (0, v.c)(() => {
                        var e;
                        null == (e = f.current) || e.swiper.slideNext();
                    }),
                    w = (0, v.c)(() => {
                        var e;
                        null == (e = f.current) || e.swiper.slidePrev();
                    }),
                    M = (0, v.c)((e) => {
                        S(e.isBeginning), P(e.isEnd), E(e.activeIndex);
                    });
                return (
                    (0, d.useEffect)(() => {
                        setTimeout(() => {
                            var e, t, a;
                            (null == (e = f.current) ? void 0 : e.swiper) &&
                                (S(0 === f.current.swiper.activeIndex),
                                P(f.current.swiper.activeIndex === (null != (a = null == (t = r.images) ? void 0 : t.length) ? a : 0) - 1),
                                E(f.current.swiper.activeIndex));
                        });
                    }, [null == (t = r.images) ? void 0 : t.length, n]),
                    (0, d.useEffect)(() => {
                        r.modal.isOpened
                            ? (null == C || C.disable(A.Mo.MAIN, A.lbr.CLOSE),
                              null == C || C.disable(A.Mo.MAIN, A.lbr.SLIDE_BACKWARD),
                              null == C || C.disable(A.Mo.MAIN, A.lbr.SLIDE_FORWARD),
                              null == C || C.enable(A.Mo.IMAGE_SLIDER, A.lbr.CLOSE))
                            : (null == C || C.disable(A.Mo.IMAGE_SLIDER, A.lbr.CLOSE),
                              null == C || C.enable(A.Mo.MAIN, A.lbr.CLOSE),
                              null == C || C.enable(A.Mo.MAIN, A.lbr.SLIDE_BACKWARD),
                              null == C || C.enable(A.Mo.MAIN, A.lbr.SLIDE_FORWARD));
                    }, [C, r.modal.isOpened]),
                    (0, d.useEffect)(
                        () => (
                            null == C ||
                                C.addShortcutsListener(A.Mo.IMAGE_SLIDER, A.lbr.CLOSE, () => {
                                    r.modal.isOpened && r.close();
                                }),
                            () => {
                                null == C || C.removeShortcutsListener(A.Mo.IMAGE_SLIDER, A.lbr.CLOSE),
                                    null == C || C.disable(A.Mo.IMAGE_SLIDER, A.lbr.CLOSE),
                                    null == C || C.enable(A.Mo.MAIN, A.lbr.CLOSE),
                                    null == C || C.enable(A.Mo.MAIN, A.lbr.SLIDE_BACKWARD),
                                    null == C || C.enable(A.Mo.MAIN, A.lbr.SLIDE_FORWARD),
                                    r.close();
                            }
                        ),
                        [C, r],
                    ),
                    (0, o.jsxs)(y.a, {
                        className: (0, s.$)(N().root, { [N().root_mobile]: n }),
                        contentClassName: N().modalContent,
                        open: r.modal.isOpened,
                        size: n ? 'fullscreen' : 'fitContent',
                        placement: 'center',
                        showHeader: !1,
                        isMobile: n,
                        onClose: r.close,
                        escapeKey: !1,
                        onOpenChange: r.modal.onOpenChange,
                        portalNode: n ? null : c,
                        withAnimation: !r.modal.isOpened,
                        ...(0, p.Am)(p.e8.imageSlider.IMAGE_SLIDER_MODAL),
                        children: [
                            (0, o.jsx)('div', {
                                className: N().leftArrowWrapper,
                                children:
                                    j &&
                                    (0, o.jsx)(h.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, o.jsx)(g.Icon, { variant: 'arrowLeft', size: 'xxs' }),
                                        onClick: w,
                                        disabled: I,
                                        'aria-label': l({ id: 'slider.prev-image' }),
                                        ...(0, p.Am)(p.e8.imageSlider.IMAGE_SLIDER_MODAL_PREV_SLIDE_BUTTON),
                                    }),
                            }),
                            (0, o.jsx)('div', {
                                className: N().rightArrowWrapper,
                                children:
                                    j &&
                                    (0, o.jsx)(h.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, o.jsx)(g.Icon, { variant: 'arrowRight', size: 'xxs' }),
                                        onClick: L,
                                        disabled: T,
                                        'aria-label': l({ id: 'slider.next-image' }),
                                        ...(0, p.Am)(p.e8.imageSlider.IMAGE_SLIDER_MODAL_NEXT_SLIDE_BUTTON),
                                    }),
                            }),
                            (0, o.jsx)(h.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 'xxs',
                                icon: (0, o.jsx)(g.Icon, { variant: 'close', size: 'xxs' }),
                                className: N().closeButton,
                                onClick: r.close,
                                'aria-label': l({ id: 'slider.close-image-modal' }),
                                ...(0, p.Am)(p.e8.imageSlider.IMAGE_SLIDER_MODAL_CLOSE_BUTTON),
                            }),
                            (0, o.jsx)('div', {
                                className: N().content,
                                children: (0, o.jsx)(_.RC, {
                                    initialSlide: r.initialSlideIndex,
                                    className: N().slider,
                                    wrapperClass: N().wrapper,
                                    ref: f,
                                    onActiveIndexChange: M,
                                    a11y: { enabled: !0, containerMessage: l({ id: 'slider.image-slider-modal' }) },
                                    pagination: { dynamicBullets: !0, dynamicMainBullets: 4 },
                                    modules: [m.dK, m.s3],
                                    keyboard: !0,
                                    children:
                                        null == (a = r.images)
                                            ? void 0
                                            : a.map((e, t) => {
                                                  var a, i;
                                                  let n = ((e, t) => e >= t - 5 && e <= t + 5)(t, k) ? e : void 0;
                                                  return (0, o.jsxs)(
                                                      _.qr,
                                                      {
                                                          className: N().slide,
                                                          ...(0, p.Am)(p.e8.imageSlider.IMAGE_SLIDER_MODAL_SLIDE),
                                                          children: [
                                                              (0, o.jsx)(x.Image, {
                                                                  fit: 'contain',
                                                                  className: (0, s.$)(N().image, { [N().image_loading]: !r.isImageLoaded(n) }),
                                                                  src: n,
                                                                  size: r.sizeImage,
                                                                  tabIndex: t === k ? 0 : -1,
                                                                  'aria-roledescription': l({ id: 'slider.slide' }),
                                                                  'aria-label': l(
                                                                      { id: 'slider.image-counter' },
                                                                      { index: t + 1, count: null != (i = null == (a = r.images) ? void 0 : a.length) ? i : 0 },
                                                                  ),
                                                                  onLoadBySrc: r.setImageIsLoaded,
                                                                  withLoadingIndicator: !1,
                                                                  withSrcSet: !1,
                                                                  withAvatarReplace: !0,
                                                                  withAspectRatio: r.withAspectRatio,
                                                              }),
                                                              t === k &&
                                                                  (0, o.jsx)('div', {
                                                                      className: (0, s.$)(N().loadingIndicator, { [N().loadingIndicator_showed]: !r.isImageLoaded(n) }),
                                                                      children: (0, o.jsx)(b.y, { size: 'm' }),
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
        },
        21891: (e) => {
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
        23258: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedDownloadBarMinimized_root__nEPqZ',
                icon: 'NavbarDesktopAnimatedDownloadBarMinimized_icon__Y2hec',
                button: 'NavbarDesktopAnimatedDownloadBarMinimized_button__hesBw',
            };
        },
        23605: (e) => {
            e.exports = { growContainer: 'FamilyInviteStepInfo_growContainer__y0xmo', important: 'FamilyInviteStepInfo_important__YvkpI' };
        },
        25358: (e) => {
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
        25615: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedPlusBar_root___wH9W',
                button: 'NavbarDesktopAnimatedPlusBar_button__IX7L4',
                important: 'NavbarDesktopAnimatedPlusBar_important__7R916',
                icon: 'NavbarDesktopAnimatedPlusBar_icon__9lTgJ',
            };
        },
        25818: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => y, J: () => E });
            var i = a(54486),
                n = a(50420),
                r = a(61910),
                l = a(43426),
                o = a(31500),
                s = a(8817),
                c = a(27510),
                d = a(28584),
                u = a(83252),
                m = a(37262),
                _ = a.n(m),
                p = a(97800),
                v = a(7495),
                h = a.n(v);
            let g = (e) => {
                    let { value: t, variant: a, className: r, forwardRef: l, ...s } = e,
                        c = 'start' === a ? o.Kq.changeTimecode.TIMECODE_TIME_START : o.Kq.changeTimecode.TIMECODE_TIME_END;
                    return (0, i.jsx)(p.Caption, {
                        ref: l,
                        tabIndex: 0,
                        className: (0, n.$)(h().root, h()['root_'.concat(a)], r),
                        variant: 'span',
                        size: 's',
                        type: 'entity',
                        weight: 'medium',
                        ...(0, o.Am)(c),
                        ...s,
                        children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: t }),
                    });
                },
                x = (0, r.forwardRef)((e, t) => (0, i.jsx)(g, { forwardRef: t, ...e })),
                y = (e) => {
                    var t, a, m, p;
                    let {
                            className: v,
                            sliderClassName: h,
                            disabled: g,
                            isFullscreen: y,
                            isMobile: b,
                            showThumbVariant: A,
                            withTimecode: C = !0,
                            sonataPlaybackId: N,
                            customDuration: f,
                            canMoveForward: I,
                        } = e,
                        S = (0, u.eGp)(),
                        T = (y || !b) && C,
                        P = (0, r.useRef)(!1),
                        { sonataState: k } = (0, u.Pjs)(),
                        [E, j] = (0, r.useState)(null != (m = k.position) ? m : 0),
                        [L, w] = (0, r.useState)(null != (p = k.duration) ? p : 0),
                        [M, B] = (0, r.useState)(0),
                        { formatMessage: O } = (0, l.A)(),
                        { advert: R } = (0, u.Pjs)(),
                        D = (0, u.rs2)(),
                        K = E && L ? (100 * Math.min(E, L)) / L : 0,
                        U = null == S ? void 0 : S.getState(N),
                        F = (0, u.PMf)(E),
                        z = (0, u.E4p)(Math.round(E), Math.round(L)),
                        V = (0, u.PMf)(L),
                        W = f && E > f,
                        G = (0, s.c)((e, t) => {
                            R.isAdvertShown || ((P.current = !t), t ? null == S || S.setProgress(e, N) : j(e));
                        });
                    (0, r.useEffect)(() => {
                        W && (I ? null == S || S.moveForward(N) : (null == S || S.moveBackward(N), null == S || S.pause(N)));
                    }, [I, W, S, N]);
                    let Y = (0, r.useCallback)(
                        (e) => {
                            e &&
                                (e.duration === 1 / 0
                                    ? (w(0), j(0), B(0))
                                    : (w(f && !R.isAdvertShown ? f : e.duration), j((t) => (P.current ? t : e.position)), B(e.loaded)));
                        },
                        [f, R.isAdvertShown],
                    );
                    (0, r.useEffect)(() => {
                        var e, t;
                        let a = null == D || null == (e = D.audioAdvertPlayback) ? void 0 : e.state.playerState.progress.onChange(Y),
                            i = null == U || null == (t = U.playerState) ? void 0 : t.progress.onChange(Y);
                        return () => {
                            null == i || i(), null == a || a();
                        };
                    }, [
                        null == D || null == (t = D.audioAdvertPlayback) ? void 0 : t.state.playerState.progress,
                        Y,
                        null == U || null == (a = U.playerState) ? void 0 : a.progress,
                    ]);
                    let Q = (0, c.L)(() => {
                        if (0 !== L) return f && f <= L ? Math.round(f) : Math.round(L);
                    });
                    return (0, i.jsxs)('div', {
                        className: (0, n.$)(_().root, { [_().root_fullscreen]: y, [_().root_mobile]: b, [_().root_withTimecode]: C }, v),
                        style: { '--track-progress': ''.concat(K, '%') },
                        ...(0, o.Am)(o.Kq.changeTimecode.TIMECODE_WRAPPER),
                        children: [
                            T && (0, i.jsx)(x, { role: 'text', 'aria-label': F, value: z, variant: 'start', className: _().timecode }),
                            (0, i.jsx)(d.A, {
                                'aria-valuetext': F,
                                className: (0, n.$)(_().slider, { [_()['slider_thumbSize_'.concat(b ? 'xs' : 'm')]]: !0 }, h),
                                disabled: g,
                                thumbSize: b ? 'xs' : 's',
                                trackSize: b ? 'xs' : 's',
                                value: Math.round(E),
                                mode: 'deferred',
                                secondaryValue: Math.round(M),
                                maxValue: Q,
                                onChange: G,
                                'aria-label': O({ id: 'player-actions.timecode-control' }),
                                showThumbVariant: A,
                                ...(0, o.Am)(o.Kq.changeTimecode.TIMECODE_SLIDER),
                            }),
                            T &&
                                (0, i.jsx)(x, {
                                    role: 'text',
                                    'aria-label': V,
                                    value: (0, u.E4p)(Math.round(L), Math.round(L)),
                                    variant: 'end',
                                    className: _().timecode,
                                }),
                        ],
                    });
                };
            var b = a(28303),
                A = a(62443),
                C = a(89461),
                N = a(59672),
                f = a(1762),
                I = a(38234),
                S = a.n(I),
                T = a(85465),
                P = a.n(T);
            let k = (e) => {
                    let { progress: t, position: a, duration: l, timecodeClassName: o, currentTimecodeClassName: s, progressElementWidth: d, shouldHoldTimecode: m } = e,
                        _ = (0, u.PMf)(a),
                        p = (0, u.PMf)(l),
                        v = (0, r.useRef)(null),
                        [h, g] = (0, r.useState)(0),
                        y = (0, u.E4p)(Math.round(l), Math.round(l));
                    (0, r.useEffect)(() => {
                        v.current && g(Math.round(v.current.getBoundingClientRect().width));
                    }, [y.length, d]);
                    let b = Math.round((t / 100) * d),
                        A = 0 !== d ? d - h : 0,
                        C = Math.min(Math.max(b - h / 2, 0), A),
                        N = (0, c.L)(() => {
                            if (!m) return { '--timecode-position': ''.concat(C, 'px') };
                        });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(x, {
                                role: 'text',
                                'aria-label': p,
                                value: y,
                                variant: 'end',
                                className: (0, n.$)(P().timecode, o, P().timecode_end, { [P().timecode_end_hidden]: !(b < A - h / 2) }),
                            }),
                            (0, i.jsx)(x, {
                                role: 'text',
                                'aria-label': _,
                                style: N,
                                ref: v,
                                value: (0, u.E4p)(Math.round(a), Math.round(l)),
                                variant: 'start',
                                className: (0, n.$)(P().timecode, P().timecode_current, o, s, {
                                    [P().timecode_current_animation]: h > 0,
                                    [P().timecode_current_hidden]: m && !(b > 2 * h),
                                }),
                            }),
                        ],
                    });
                },
                E = (0, b.PA)((e) => {
                    var t, a;
                    let { sliderClassName: m, disabled: _, isMobile: p, progressbarClassName: v, showThumbVariant: h, withTimecode: g = !0 } = e,
                        x = (0, u.eGp)(),
                        y = (0, r.useRef)(!1),
                        {
                            advert: b,
                            sonataState: I,
                            settings: T,
                            advertBanners: {
                                banners: { brandedPlayerBanner: P },
                            },
                        } = (0, u.Pjs)(),
                        { formatMessage: E } = (0, l.A)(),
                        j = (0, u.rs2)(),
                        [L, w] = (0, r.useState)(I.position),
                        [M, B] = (0, r.useState)(I.duration),
                        O = (0, u.PMf)(Math.round(null != L ? L : 0)),
                        R = L && M ? (100 * Math.min(L, M)) / M : 0,
                        D = (0, r.useRef)(null),
                        [K, U] = (0, r.useState)(0),
                        F = K > 0,
                        { state: z, toggleTrue: V, toggleFalse: W } = (0, A.e)(!1),
                        { state: G, toggleTrue: Y, toggleFalse: Q } = (0, A.e)(!1),
                        $ = (0, c.L)(() => {
                            var e, t;
                            return P.isVisible && (null == (e = P.payload) ? void 0 : e.thumb)
                                ? { thumb: P.payload.thumb, onThumbAction: P.modal.open }
                                : T.selectedThumbId && T.selectedThumbId !== u.TZj.DEFAULT
                                  ? { thumb: null == (t = (0, N.rI)(E).get(T.selectedThumbId)) ? void 0 : t.thumb }
                                  : void 0;
                        });
                    (0, r.useEffect)(() => {
                        (null == x ? void 0 : x.state.playerState.status.value) === C.MT.PLAYING && Q();
                    }, [Q, null == x ? void 0 : x.state.playerState.status.value]),
                        (0, r.useEffect)(() => {
                            let e = null == x ? void 0 : x.state.queueState.currentEntity.onChange(Y);
                            return (
                                Q(),
                                () => {
                                    null == e || e();
                                }
                            );
                        }, [Y, Q, null == x ? void 0 : x.state.queueState.currentEntity]);
                    let q = (0, s.c)((e, t) => {
                            b.isAdvertShown || ((y.current = !t), t ? null == x || x.setProgress(e) : w(e));
                        }),
                        H = (0, s.c)((e, t) => {
                            null !== e && null !== t && (e === 1 / 0 ? (B(0), w(0)) : (B(e), y.current || w(t)));
                        });
                    (0, r.useEffect)(() => {
                        H(I.duration, I.position);
                    }, [I.duration, I.position, H]),
                        (0, r.useEffect)(() => {
                            var e;
                            let t =
                                null == j || null == (e = j.audioAdvertPlayback)
                                    ? void 0
                                    : e.state.playerState.progress.onChange((e) => {
                                          e && b.isAdvertShown && H(e.duration, e.position);
                                      });
                            return () => {
                                null == t || t();
                            };
                        }, [null == j || null == (t = j.audioAdvertPlayback) ? void 0 : t.state.playerState.progress, H, b.isAdvertShown]);
                    let X = (R / 100) * K - 6;
                    (0, r.useEffect)(() => {
                        let e = new ResizeObserver(() => {
                            var e, t;
                            U(Math.round(null != (t = null == (e = D.current) ? void 0 : e.clientWidth) ? t : 0));
                        });
                        return (
                            D.current && e.observe(D.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, []);
                    let Z = {
                        '--size-thumb': ''.concat(12, 'px'),
                        '--track-progress': ''.concat(R, '%'),
                        '--thumb-position': ''.concat(X, 'px'),
                        ...(G && { '--transition-disabled': 'none' }),
                    };
                    return (0, i.jsxs)('div', {
                        className: (0, n.$)(S().root, { [S().root_focusVisible]: z, [S().root_isPlayingTrack]: !b.isAdvertShown }),
                        style: Z,
                        ...(0, o.Am)(o.Kq.changeTimecode.TIMECODE_WRAPPER),
                        children: [
                            !p &&
                                g &&
                                F &&
                                (0, i.jsx)(k, {
                                    currentTimecodeClassName: $ ? void 0 : (0, n.$)(S().timecodeGroupCurrent, S().important),
                                    timecodeClassName: S().timecodeGroup,
                                    progress: R,
                                    position: null != L ? L : 0,
                                    duration: null != M ? M : 0,
                                    progressElementWidth: K,
                                    shouldHoldTimecode: !!$,
                                }),
                            (0, i.jsx)('div', { ref: D, className: (0, n.$)(S().progressbar, v) }),
                            F && !$ && (0, i.jsx)('div', { className: S().thumb }),
                            $ &&
                                (0, i.jsx)(N.Th, {
                                    className: S().brandedThumb,
                                    thumbData: null == $ ? void 0 : $.thumb,
                                    onThumbAction: null == $ ? void 0 : $.onThumbAction,
                                }),
                            (null == (a = P.payload) ? void 0 : a.modal) && (0, i.jsx)(f.N1, { modal: P.payload.modal }),
                            (0, i.jsx)(d.A, {
                                'aria-valuetext': O,
                                onClick: W,
                                onBlur: W,
                                onFocus: V,
                                className: (0, n.$)(S().slider, S().important, m),
                                disabled: _ || b.isAdvertShown,
                                'aria-label': E({ id: 'player-actions.timecode-control' }),
                                showThumbVariant: h,
                                onChange: q,
                                maxValue: M ? Math.round(M) : 0,
                                mode: 'deferred',
                                value: Math.round(null != L ? L : 0),
                                trackSize: 's',
                                thumbSize: 's',
                                ...(0, o.Am)(o.Kq.changeTimecode.TIMECODE_SLIDER),
                            }),
                            (0, i.jsx)('div', { className: S().backgroundProgressbar }),
                        ],
                    });
                });
        },
        25886: (e) => {
            e.exports = { root: 'SyncLyricsFooter_root__STCKQ', major: 'SyncLyricsFooter_major__QMZmT', writers: 'SyncLyricsFooter_writers__c7zhj' };
        },
        27176: (e) => {
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
        27319: (e) => {
            e.exports = {
                root: 'PlayQueueVibeBlock_root__cVjcM',
                ripple: 'PlayQueueVibeBlock_ripple__Ig_pb',
                vibeCover: 'PlayQueueVibeBlock_vibeCover__THxKz',
                title: 'PlayQueueVibeBlock_title__G3kir',
                vibeTitle: 'PlayQueueVibeBlock_vibeTitle__C5fWp',
            };
        },
        30980: (e) => {
            e.exports = {
                icon: 'ChangeVolume_icon__5Zv2a',
                button: 'ChangeVolume_button__4HLEr',
                sliderContainer: 'ChangeVolume_sliderContainer__pvOZa',
                sliderContainer_focusVisible: 'ChangeVolume_sliderContainer_focusVisible__1JxI9',
                wrapperSlider: 'ChangeVolume_wrapperSlider__9S1Vi',
                root: 'ChangeVolume_root__HDxtA',
                slider: 'ChangeVolume_slider__fCKGZ',
                important: 'ChangeVolume_important__ZIYpu',
            };
        },
        31182: (e) => {
            e.exports = { root: 'TrailerModal_root__T4ZJ8', modalContent: 'TrailerModal_modalContent__ZSNFe', header: 'TrailerModal_header__0h1zj' };
        },
        31865: (e) => {
            e.exports = {
                root: 'NavbarDesktopUnauthorizedBar_root__uQZ9L',
                title: 'NavbarDesktopUnauthorizedBar_title__vf0W7',
                subtitle: 'NavbarDesktopUnauthorizedBar_subtitle__anNNQ',
                userProfile: 'NavbarDesktopUnauthorizedBar_userProfile__hAABb',
                userId: 'NavbarDesktopUnauthorizedBar_userId__m0jC6',
                buttons: 'NavbarDesktopUnauthorizedBar_buttons__94Y3N',
            };
        },
        32578: (e) => {
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
        33175: (e) => {
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
        33320: (e) => {
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
        34528: (e) => {
            e.exports = {
                root: 'Trailer_root__c8eG3',
                header: 'Trailer_header__FBFMi',
                trackShimmer: 'Trailer_trackShimmer__qmCN3',
                albumShimmer: 'Trailer_albumShimmer__8RxuC',
                footer: 'Trailer_footer__POMTS',
            };
        },
        34942: (e, t, a) => {
            'use strict';
            a.d(t, { mt: () => b, bo: () => l, cF: () => r });
            var i = a(93064),
                n = a(26433),
                r = (function (e) {
                    return (e.IDLE = 'idle'), (e.SUCCESS = 'success'), (e.ERROR = 'error'), e;
                })({});
            let l = i.gK
                .model({
                    modal: n.qt,
                    target: i.gK.string,
                    isSilent: i.gK.boolean,
                    tariffOfferName: i.gK.string,
                    offersBatchId: i.gK.string,
                    offersPositionIds: i.gK.string,
                    serviceSessionId: i.gK.string,
                    status: i.gK.enumeration(Object.values(r)),
                })
                .views((e) => ({
                    get isSuccess() {
                        return e.status === r.SUCCESS;
                    },
                    get isError() {
                        return e.status === r.ERROR;
                    },
                }))
                .actions((e) => ({
                    setTarget(t) {
                        e.target = t;
                    },
                    setIsSilent(t) {
                        e.isSilent = t;
                    },
                    setTariffOfferName(t) {
                        e.tariffOfferName = t;
                    },
                    setOffersBatchId(t) {
                        e.offersBatchId = t;
                    },
                    setOffersPositionIds(t) {
                        e.offersPositionIds = t;
                    },
                    setServiceSessionId(t) {
                        e.serviceSessionId = t;
                    },
                    setStatus(t) {
                        e.status = t;
                    },
                    reset() {
                        (e.target = ''), (e.tariffOfferName = ''), (e.offersBatchId = ''), (e.offersPositionIds = ''), (e.serviceSessionId = ''), (e.status = r.IDLE);
                    },
                    onModalOpenChange(t) {
                        e.modal.onOpenChange(t), e.status === r.SUCCESS && window.location.reload();
                    },
                }));
            var o = a(54486),
                s = a(50420),
                c = a(28303),
                d = a(61910),
                u = a(31500),
                m = a(62443),
                _ = a(32692),
                p = a(83252),
                v = a(8817);
            let h = null,
                g = (0, c.PA)((e) => {
                    let {
                            className: t,
                            target: a,
                            silent: i,
                            serviceSessionId: n,
                            tariffOfferName: r,
                            offersBatchId: l,
                            offersPositionIds: s,
                            onLoad: c,
                            onSuccess: u,
                            onError: m,
                            onClose: _,
                        } = e,
                        g = (0, d.useRef)(null),
                        { theme: x } = (0, p.DPo)(),
                        { pwTools: y } = (0, p.q4i)(),
                        b = (0, p.bBU)(),
                        A = (0, v.c)((e) => {
                            'purchase_data' === e.type && (null == u || u());
                        }),
                        C = (0, v.c)(() => {
                            null == m || m();
                        }),
                        N = (0, v.c)(() => {
                            null == _ || _();
                        }),
                        f = (0, v.c)((e) => {
                            'loaded' === e.data.status && (null == c || c());
                        }),
                        I = (0, d.useCallback)(async () => {
                            if (!y || !g.current) return;
                            let { lang: e, mode: t, platform: o, widgetServiceName: c, authMethod: d } = y.options;
                            if (!h)
                                try {
                                    h = await y.loadManager();
                                } catch (e) {
                                    N();
                                    return;
                                }
                            h.send({
                                type: 'init',
                                options: {
                                    lang: e,
                                    mode: t,
                                    platform: o,
                                    widgetServiceName: c,
                                    authMethod: d,
                                    silent: i,
                                    usePlusHost: !0,
                                    theme: x,
                                    onSuccess: A,
                                    onError: C,
                                    onReport: f,
                                    onClose: N,
                                },
                            });
                            let u = {
                                    target: a,
                                    eventSessionId: n,
                                    tariffOfferName: r,
                                    offersBatchId: l,
                                    offersPositionIds: s,
                                    targetNode: g.current,
                                    isTarifficator: !0,
                                },
                                m = await b();
                            null !== m && (u.clid = m), h.send({ type: 'open', options: u });
                        }, [x, y, a, i, r, n, l, s, A, C, f, N, b]);
                    return (
                        (0, d.useEffect)(
                            () => (
                                I(),
                                () => {
                                    null == h || h.send({ type: 'close' });
                                }
                            ),
                            [I],
                        ),
                        (0, o.jsx)('div', { className: t, ref: g })
                    );
                });
            var x = a(41584),
                y = a.n(x);
            let b = (0, c.PA)(() => {
                let { paymentWidgetModal: e, advert: t } = (0, p.Pjs)(),
                    { state: a, toggleTrue: i } = (0, m.e)(!1),
                    n = (0, p.vUB)();
                (0, d.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                );
                let l = (0, d.useCallback)(() => {
                        e.setStatus(r.SUCCESS), n.track({ label: 'WCvtCKnr84oYEPnRuvUo' });
                    }, [e, n]),
                    c = (0, d.useCallback)(() => {
                        e.modal.close(), e.isSuccess && window.location.reload(), e.reset();
                    }, [e]),
                    v = (0, d.useCallback)(() => {
                        e.setStatus(r.ERROR);
                    }, [e]);
                return (0, o.jsx)(_.a, {
                    open: e.modal.isOpened,
                    size: 'fitContent',
                    placement: 'center',
                    showHeader: !1,
                    withAnimation: !1,
                    className: (0, s.$)(y().root, { [y().root_loaded]: a, [y().root_level_up]: t.isAdvertShown }),
                    ...(0, u.Am)(u.OA.paymentWidget.PAYMENT_WIDGET),
                    contentClassName: y().content,
                    overlayColor: 'full',
                    onOpenChange: e.onModalOpenChange,
                    children: (0, o.jsx)(g, {
                        className: y().widget,
                        target: e.target,
                        silent: e.isSilent,
                        serviceSessionId: e.serviceSessionId,
                        tariffOfferName: e.tariffOfferName,
                        offersBatchId: e.offersBatchId,
                        offersPositionIds: e.offersPositionIds,
                        onLoad: i,
                        onSuccess: l,
                        onError: v,
                        onClose: c,
                    }),
                });
            });
        },
        35311: (e) => {
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
        36017: (e) => {
            e.exports = { root: 'PlusNavbarButton_root__kdY04', plusButtonShimmer: 'PlusNavbarButton_plusButtonShimmer__6t1go' };
        },
        37262: (e) => {
            e.exports = {
                timecode: 'ChangeTimecode_timecode__UScFt',
                root: 'ChangeTimecode_root__QxEw_',
                root_withTimecode: 'ChangeTimecode_root_withTimecode__eJhYI',
                root_mobile: 'ChangeTimecode_root_mobile__SzOdx',
                root_fullscreen: 'ChangeTimecode_root_fullscreen__FA6r0',
                slider: 'ChangeTimecode_slider__P4qmT',
            };
        },
        38117: (e) => {
            e.exports = {
                root: 'FullscreenPlayerDesktop_root___8vo1',
                important: 'FullscreenPlayerDesktop_important__dGfiL',
                header: 'FullscreenPlayerDesktop_header__OBhzq',
                modalContent: 'FullscreenPlayerDesktop_modalContent__Zs_LC',
                notification: 'FullscreenPlayerDesktop_notification__luD_J',
                closeButton: 'FullscreenPlayerDesktop_closeButton__MQ64s',
            };
        },
        38234: (e) => {
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
        39122: (e) => {
            e.exports = {
                icon: 'PlayQueueButton_icon__7fc0G',
                icon_active: 'PlayQueueButton_icon_active__4A8H2',
                animation_scaled: 'PlayQueueButton_animation_scaled__w_Wir',
                scale: 'PlayQueueButton_scale__dXShR',
                animation_unscaled: 'PlayQueueButton_animation_unscaled__Lt_j9',
                unscale: 'PlayQueueButton_unscale__BlmKQ',
            };
        },
        39298: (e) => {
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
        40139: (e) => {
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
        41584: (e) => {
            e.exports = {
                root: 'PaymentWidgetModal_root__I6Hrp',
                root_loaded: 'PaymentWidgetModal_root_loaded__Rzltj',
                root_level_up: 'PaymentWidgetModal_root_level_up__pj52G',
                content: 'PaymentWidgetModal_content__ifRry',
                widget: 'PaymentWidgetModal_widget__cu_gr',
            };
        },
        41730: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => n });
            var i = a(63585);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Artist;
            }
        },
        42653: (e) => {
            e.exports = {
                root: 'QualitySettingsModal_root__f3gE2',
                modalContent: 'QualitySettingsModal_modalContent__R_JNT',
                overlay: 'QualitySettingsModal_overlay__8pjOO',
                button: 'QualitySettingsModal_button__BCHBi',
            };
        },
        42701: (e) => {
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
        44123: (e) => {
            e.exports = {
                root: 'PlayerBarDesktopWithBackgroundProgressBar_root__bpmwN',
                important: 'PlayerBarDesktopWithBackgroundProgressBar_important__HzXrK',
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
                meta: 'PlayerBarDesktopWithBackgroundProgressBar_meta__FhKTC',
                sonataControls: 'PlayerBarDesktopWithBackgroundProgressBar_sonataControls__rSmXQ',
                settingsButton: 'PlayerBarDesktopWithBackgroundProgressBar_settingsButton__HnCgK',
                trackContextMenuIcon: 'PlayerBarDesktopWithBackgroundProgressBar_trackContextMenuIcon__xBJxI',
                triggerModal: 'PlayerBarDesktopWithBackgroundProgressBar_triggerModal__EVv5d',
            };
        },
        44342: (e) => {
            e.exports = { root: 'TrailerTrack_root__0UIP4', root_active: 'TrailerTrack_root_active__F_8Iw' };
        },
        45944: (e) => {
            e.exports = {
                root: 'QualitySettings_root__bsEFH',
                root_withEqualizer: 'QualitySettings_root_withEqualizer__KF0Ng',
                root_withNewQuality: 'QualitySettings_root_withNewQuality__wP_x5',
                header: 'QualitySettings_header__azQ0H',
                list: 'QualitySettings_list__ggzI6',
                equalizer: 'QualitySettings_equalizer__bt11k',
                headerWithCloseButton: 'QualitySettings_headerWithCloseButton__VHskw',
                itemWrapper: 'QualitySettings_itemWrapper__3KKwt',
                item: 'QualitySettings_item__2SGU_',
                item_option: 'QualitySettings_item_option__KuE4e',
                item_type: 'QualitySettings_item_type___96WF',
                expandedItem: 'QualitySettings_expandedItem__kCxQb',
                itemSubTitle: 'QualitySettings_itemSubTitle__rNJL_',
                menuContent: 'QualitySettings_menuContent__SzqoC',
                button_active: 'QualitySettings_button_active__Nivv_',
            };
        },
        47840: (e) => {
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
        48167: (e) => {
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
            };
        },
        48910: (e) => {
            e.exports = { root: 'DownloadMobileAppModal_root__nD7fo', content: 'DownloadMobileAppModal_content__4ZW2F' };
        },
        49230: (e) => {
            e.exports = { root: 'TrackModalAlbum_root__ux7J4', title: 'TrackModalAlbum_title__CtM2_' };
        },
        50328: (e) => {
            e.exports = {
                icon: 'SyncLyricsButton_icon__m0Gdk',
                icon_active: 'SyncLyricsButton_icon_active__6WcWG',
                animation_scaled: 'SyncLyricsButton_animation_scaled__vwsc_',
                scale: 'SyncLyricsButton_scale__FGAYV',
                animation_unscaled: 'SyncLyricsButton_animation_unscaled__eM1Wb',
                unscale: 'SyncLyricsButton_unscale__ceLQu',
            };
        },
        51935: (e) => {
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
        53226: (e) => {
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
        54278: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => C, A: () => l });
            var i = a(93064),
                n = a(83252),
                r = a(26433);
            let l = i.gK
                .model({ modal: r.qt })
                .views((e) => ({
                    shouldShow() {
                        var t;
                        let { user: a, settings: r } = (0, i.Zn)(e),
                            { sessionStorage: l } = (0, i._$)(e);
                        if (!a.hasPlus || !(null == (t = r.browserInfo) ? void 0 : t.isMobile)) return !1;
                        let o = l.get(n.cYZ.DownloadMobileApp);
                        return null == o || !o.shown;
                    },
                }))
                .actions((e) => ({
                    openModal() {
                        var t;
                        let { localStorage: a, sessionStorage: r } = (0, i._$)(e);
                        if (!(null == (t = a.get(n.cYZ.DownloadMobileApp)) ? void 0 : t.shown)) {
                            e.modal.open(), a.set(n.cYZ.DownloadMobileApp, { shown: !0 }), r.set(n.cYZ.DownloadMobileApp, { shown: !0 });
                            return;
                        }
                        setTimeout(() => {
                            e.modal.open();
                        }, 5e3),
                            r.set(n.cYZ.DownloadMobileApp, { shown: !0 });
                    },
                }));
            var o = a(54486),
                s = a(28303),
                c = a(32692),
                d = a(50420),
                u = a(43426),
                m = a(47713),
                _ = a(77881),
                p = a(5956),
                v = a(65749),
                h = a(97800),
                g = a(66e3),
                x = a.n(g);
            let y = (0, s.PA)(() => {
                let { downloadMobileApp: e, user: t, settings: a } = (0, n.Pjs)(),
                    { formatMessage: i } = (0, u.A)(),
                    r = (0, n.qQp)({ browserInfo: a.browserInfo, login: t.account.data.login });
                return (0, o.jsxs)('div', {
                    className: (0, d.$)(x().root, (0, n.JH_)(n.Sxu.Dark)),
                    children: [
                        (0, o.jsx)(_.$, {
                            className: x().closeButton,
                            radius: 'round',
                            size: 'xxs',
                            icon: (0, o.jsx)(p.Icon, { variant: 'close', size: 'xxs' }),
                            'aria-label': i({ id: 'interface-actions.close' }),
                            onClick: e.modal.close,
                        }),
                        (0, o.jsxs)('div', {
                            className: x().text,
                            children: [
                                (0, o.jsx)(h.Heading, {
                                    variant: 'h1',
                                    size: 'xl',
                                    weight: 'bold',
                                    children: (0, o.jsx)(m.A, { id: 'download-mobile-app.title', values: { nbsp: '\xa0' } }),
                                }),
                                (0, o.jsx)(h.Caption, {
                                    className: x().subtitle,
                                    variant: 'p',
                                    size: 'l',
                                    weight: 'bold',
                                    children: (0, o.jsx)(m.A, { id: 'download-mobile-app.subtitle', values: { nbsp: '\xa0' } }),
                                }),
                            ],
                        }),
                        (0, o.jsxs)('div', {
                            className: x().buttons,
                            children: [
                                (0, o.jsx)(v.N, {
                                    className: x().listenInAppLink,
                                    href: r(),
                                    children: (0, o.jsx)(_.$, {
                                        className: x().button,
                                        color: 'primary',
                                        size: 'm',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(h.Caption, {
                                            variant: 'span',
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, o.jsx)(m.A, { id: 'download-mobile-app.listen-in-app' }),
                                        }),
                                    }),
                                }),
                                (0, o.jsx)(_.$, {
                                    className: (0, d.$)(x().button, x().stayButton),
                                    variant: 'text',
                                    size: 'm',
                                    color: 'secondary',
                                    radius: 'xxxl',
                                    onClick: e.modal.close,
                                    children: (0, o.jsx)(h.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        weight: 'medium',
                                        children: (0, o.jsx)(m.A, { id: 'download-mobile-app.stay' }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var b = a(48910),
                A = a.n(b);
            let C = (0, s.PA)(() => {
                let { downloadMobileApp: e } = (0, n.Pjs)();
                return (0, o.jsx)(c.a, {
                    className: A().root,
                    contentClassName: A().content,
                    open: e.modal.isOpened,
                    size: 'fullscreen',
                    placement: 'center',
                    showHeader: !1,
                    closeOnOutsidePress: !1,
                    overlayColor: 'full',
                    onOpenChange: e.modal.onOpenChange,
                    onClose: e.modal.close,
                    children: (0, o.jsx)(y, {}),
                });
            });
        },
        56985: (e) => {
            e.exports = { image: 'FamilyInviteErrorView_image__OyVA_', image_small: 'FamilyInviteErrorView_image_small__uczsu' };
        },
        57477: (e) => {
            e.exports = { image: 'FamilyInviteStepSuccess_image__kDBnc', image_mobile: 'FamilyInviteStepSuccess_image_mobile__PyiXK' };
        },
        59408: (e) => {
            e.exports = { root: 'NavbarMobile_root__NhKBQ', user: 'NavbarMobile_user__vTEb2', disabledNavigationItem: 'NavbarMobile_disabledNavigationItem__PA3EE' };
        },
        60640: (e) => {
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
        60927: (e) => {
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
        61528: (e) => {
            e.exports = {
                root: 'TrackModalControls_root__alpd3',
                controlsContainer: 'TrackModalControls_controlsContainer__UeQb4',
                menuWrapper: 'TrackModalControls_menuWrapper__tDLID',
                menuButton: 'TrackModalControls_menuButton__V6L4c',
                disabledButtonByDisclaimer: 'TrackModalControls_disabledButtonByDisclaimer__qfCvg',
            };
        },
        61931: (e) => {
            e.exports = { icon: 'NotificationHtmlCodeCopied_icon__qJMbi', message: 'NotificationHtmlCodeCopied_message__ivRvX' };
        },
        62937: (e) => {
            e.exports = {
                root: 'PlayerBarDesktop_root__d2Hwi',
                info: 'PlayerBarDesktop_info__56v53',
                infoCard: 'PlayerBarDesktop_infoCard__tnLS6',
                coverContainer: 'PlayerBarDesktop_coverContainer__2Z5nQ',
                cover: 'PlayerBarDesktop_cover__IYLwR',
                description: 'PlayerBarDesktop_description__eQ_tA',
                artists: 'PlayerBarDesktop_artists__N5vpf',
                artistLink: 'PlayerBarDesktop_artistLink__Btgdq',
                infoButtons: 'PlayerBarDesktop_infoButtons__iSpa_',
                sonata: 'PlayerBarDesktop_sonata__sJHY_',
                meta: 'PlayerBarDesktop_meta__6sm58',
                settingsButton: 'PlayerBarDesktop_settingsButton__jLkVn',
            };
        },
        63006: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => n });
            var i = a(63585);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Various;
            }
        },
        63873: (e) => {
            e.exports = {
                root: 'NavbarDesktopPlusOptionsBar_root__2WZsH',
                addition: 'NavbarDesktopPlusOptionsBar_addition__DJOlV',
                title: 'NavbarDesktopPlusOptionsBar_title__wGODi',
                buttons: 'NavbarDesktopPlusOptionsBar_buttons__lzCHr',
                optionIcon: 'NavbarDesktopPlusOptionsBar_optionIcon__O1ccD',
            };
        },
        64052: (e) => {
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
            };
        },
        64336: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(63585);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Playlist;
            }
        },
        65857: (e) => {
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
        66e3: (e) => {
            e.exports = {
                root: 'DownloadMobileApp_root__RU7VS',
                closeButton: 'DownloadMobileApp_closeButton__t38Rw',
                text: 'DownloadMobileApp_text__bCbs3',
                subtitle: 'DownloadMobileApp_subtitle__vPtiS',
                buttons: 'DownloadMobileApp_buttons__mL4w1',
                listenInAppLink: 'DownloadMobileApp_listenInAppLink__flOyk',
                button: 'DownloadMobileApp_button__r0E7Z',
                stayButton: 'DownloadMobileApp_stayButton__k3Ot8',
            };
        },
        66498: (e, t, a) => {
            'use strict';
            a.d(t, { x8: () => Y, J4: () => _, _n: () => i, hj: () => o });
            var i = (function (e) {
                    return (e.INFO = 'INFO'), (e.SUCCESS = 'SUCCESS'), e;
                })({}),
                n = a(61910),
                r = a(83252);
            let l = { INVITE_ID: 'invite_id', UTM_MEDIUM: 'utm_medium' },
                o = () => {
                    let { user: e } = (0, r.Pjs)(),
                        t = (0, r.XJ9)(),
                        { inviteIdSearchParam: a, hasNecessarySearchParams: i } = (0, n.useMemo)(() => {
                            let e = (0, r.qne)(l.INVITE_ID),
                                t = !!(e && 'copy_link' === (0, r.qne)(l.UTM_MEDIUM));
                            return { inviteIdSearchParam: e, hasNecessarySearchParams: t };
                        }, []),
                        o = (0, n.useCallback)(() => {
                            let e = (0, r.jrm)();
                            if (null === e) return;
                            e.delete(l.INVITE_ID), e.delete(l.UTM_MEDIUM);
                            let a = new URL(window.location.href);
                            (a.search = e.toString()), t(a.toString());
                        }, [t]);
                    return { inviteId: a, shouldShowFamilyInvite: !!(!e.hasPlus && i), clear: o };
                };
            var s = a(93064),
                c = a(14287),
                d = a(26433),
                u = (function (e) {
                    return (
                        (e.SUBSCRIPTION_IS_NOT_AVAILABLE = 'SUBSCRIPTION_IS_NOT_AVAILABLE'),
                        (e.INVITATION_IS_INVALID = 'INVITATION_IS_INVALID'),
                        (e.UNKNOWN = 'UNKNOWN'),
                        e
                    );
                })({});
            let m = s.gK.model('FamilyInviteInfoModel', { name: s.gK.string, avatarUrl: s.gK.string }),
                _ = s.gK
                    .model('FamilyInviteModel', {
                        info: s.gK.model({ loadingState: s.gK.enumeration(Object.values(r.GuX)), data: s.gK.maybeNull(m) }),
                        acceptanceLoadingState: s.gK.enumeration(Object.values(r.GuX)),
                        isSuccess: s.gK.maybe(s.gK.boolean),
                        modal: d.qt,
                        step: s.gK.enumeration('Step', Object.values(i)),
                        inviteId: s.gK.maybeNull(s.gK.string),
                        error: s.gK.maybeNull(s.gK.enumeration(Object.values(u))),
                    })
                    .views((e) => ({
                        get hasError() {
                            return !!e.error;
                        },
                        get isInfoShimmerVisible() {
                            return e.info.loadingState === r.GuX.IDLE || e.info.loadingState === r.GuX.PENDING;
                        },
                        get isInfoShimmerActive() {
                            return e.info.loadingState === r.GuX.PENDING;
                        },
                        get isAcceptanceActive() {
                            return e.acceptanceLoadingState === r.GuX.PENDING;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            start(a) {
                                t.setInviteId(a), e.modal.open(), t.getInviteInfo();
                            },
                            retry: (0, s.L3)(function* () {
                                t.setError(null), t.toggleStepInfo(), e.info.loadingState !== r.GuX.RESOLVE && (yield t.getInviteInfo());
                            }),
                            getInviteInfo: (0, s.L3)(function* () {
                                let { familyResource: a, modelActionsLogger: i } = (0, s._$)(e);
                                if (e.inviteId && e.info.loadingState !== r.GuX.PENDING)
                                    try {
                                        e.info.loadingState = r.GuX.PENDING;
                                        let i = { inviteId: e.inviteId },
                                            n = yield a.getInviteInfo(i);
                                        if (!n.hasPlus) {
                                            t.setError(u.SUBSCRIPTION_IS_NOT_AVAILABLE), (e.info.loadingState = r.GuX.RESOLVE);
                                            return;
                                        }
                                        (e.info.data = ((e) => {
                                            let { name: t, avatarUrl: a } = e;
                                            return (0, s.wg)({ name: t, avatarUrl: a });
                                        })(n)),
                                            (e.info.loadingState = r.GuX.RESOLVE);
                                    } catch (a) {
                                        if (((e.info.loadingState = r.GuX.REJECT), i.error(a), a instanceof c.GX && a.statusCode === c.X1.BAD_REQUEST))
                                            return void t.setError(u.INVITATION_IS_INVALID);
                                        t.setError(u.UNKNOWN);
                                    }
                            }),
                            acceptInvite: (0, s.L3)(function* () {
                                let { familyResource: a, modelActionsLogger: i } = (0, s._$)(e);
                                if (e.inviteId && e.acceptanceLoadingState !== r.GuX.PENDING)
                                    try {
                                        e.acceptanceLoadingState = r.GuX.PENDING;
                                        let i = { inviteId: e.inviteId };
                                        yield a.acceptInvite(i), (e.acceptanceLoadingState = r.GuX.RESOLVE), t.toggleStateSuccessTrue();
                                    } catch (a) {
                                        if (((e.acceptanceLoadingState = r.GuX.REJECT), i.error(a), a instanceof c.GX && a.statusCode === c.X1.BAD_REQUEST))
                                            return void t.setError(u.INVITATION_IS_INVALID);
                                        t.setError(u.UNKNOWN);
                                    }
                            }),
                            toggleStepInfo() {
                                e.step = i.INFO;
                            },
                            toggleStepSuccess() {
                                e.step = i.SUCCESS;
                            },
                            setError(t) {
                                e.error = t;
                            },
                            setInviteId(t) {
                                e.inviteId = t;
                            },
                            toggleStateSuccessTrue() {
                                t.toggleStepSuccess(), (e.isSuccess = !0);
                            },
                            reset() {
                                (e.acceptanceLoadingState = r.GuX.IDLE),
                                    (e.error = null),
                                    (e.info.loadingState = r.GuX.IDLE),
                                    (e.info.data = null),
                                    (e.inviteId = null),
                                    (e.step = i.INFO),
                                    (e.isSuccess = !1);
                            },
                        };
                        return t;
                    });
            var p = a(54486),
                v = a(28303),
                h = a(31500),
                g = a(80585);
            let x = () => {
                let {
                    familyInvite: { modal: e, isSuccess: t, reset: a },
                } = (0, r.Pjs)();
                return (0, n.useCallback)(() => {
                    if ((e.close(), t)) return void window.location.reload();
                    a();
                }, [e, t, a]);
            };
            var y = a(50420),
                b = a(58360),
                A = a(56985),
                C = a.n(A),
                N = a(43426),
                f = a(47713),
                I = a(97800);
            let S = (0, v.PA)(() => {
                    let { formatMessage: e } = (0, N.A)(),
                        {
                            settings: { isMobile: t },
                        } = (0, r.Pjs)(),
                        a = x();
                    return (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsxs)('div', {
                                className: g.SE.text,
                                children: [
                                    (0, p.jsx)(I.Heading, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: g.SE.title,
                                        ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE),
                                        children: (0, p.jsx)(f.A, { id: 'family.invitation-error-title' }),
                                    }),
                                    (0, p.jsx)(I.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        className: g.SE.description,
                                        ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION),
                                        children: (0, p.jsx)(f.A, { id: 'family.invitation-error-description' }),
                                    }),
                                ],
                            }),
                            (0, p.jsx)('div', {
                                className: g.SE.buttons,
                                children: (0, p.jsx)(g.mv, {
                                    color: 'primary',
                                    isMobile: t,
                                    text: e({ id: 'interface-actions.confirm' }),
                                    onClick: a,
                                    ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_INVITATION_ERROR_BUTTON_CONFIRM),
                                }),
                            }),
                        ],
                    });
                }),
                T = (0, v.PA)(() => {
                    let { formatMessage: e } = (0, N.A)(),
                        {
                            settings: { isMobile: t },
                            paywall: { modal: a },
                        } = (0, r.Pjs)(),
                        i = x(),
                        l = (0, n.useCallback)(() => {
                            i(), a.open();
                        }, [i, a]);
                    return (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsxs)('div', {
                                className: g.SE.text,
                                children: [
                                    (0, p.jsx)(I.Heading, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: g.SE.title,
                                        ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE),
                                        children: (0, p.jsx)(f.A, { id: 'family.subscription-error-title' }),
                                    }),
                                    (0, p.jsx)(I.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        className: g.SE.description,
                                        ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION),
                                        children: (0, p.jsx)(f.A, { id: 'family.subscription-error-description' }),
                                    }),
                                ],
                            }),
                            (0, p.jsxs)('div', {
                                className: g.SE.buttons,
                                children: [
                                    (0, p.jsx)(g.mv, {
                                        color: 'primary',
                                        isMobile: t,
                                        text: e({ id: 'family.about1' }),
                                        onClick: l,
                                        ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_ABOUT),
                                    }),
                                    (0, p.jsx)(g.mv, {
                                        color: 'secondary',
                                        isMobile: t,
                                        text: (0, p.jsx)(f.A, { id: 'family.later' }),
                                        onClick: i,
                                        ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_LATER),
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                P = (0, v.PA)(() => {
                    let { formatMessage: e } = (0, N.A)(),
                        {
                            familyInvite: { retry: t },
                        } = (0, r.Pjs)();
                    return (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsxs)('div', {
                                className: g.SE.text,
                                children: [
                                    (0, p.jsx)(I.Heading, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: g.SE.title,
                                        ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE),
                                        children: (0, p.jsx)(f.A, { id: 'family.unknown-error-title' }),
                                    }),
                                    (0, p.jsx)(I.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        className: g.SE.description,
                                        ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION),
                                        children: (0, p.jsx)(f.A, { id: 'family.unknown-error-description' }),
                                    }),
                                ],
                            }),
                            (0, p.jsx)('div', {
                                className: g.SE.buttons,
                                children: (0, p.jsx)(g.mv, {
                                    color: 'primary',
                                    text: e({ id: 'family.retry' }),
                                    onClick: t,
                                    ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_UNKNOWN_ERROR_BUTTON_RETRY),
                                }),
                            }),
                        ],
                    });
                }),
                k = { [u.INVITATION_IS_INVALID]: (0, p.jsx)(S, {}), [u.SUBSCRIPTION_IS_NOT_AVAILABLE]: (0, p.jsx)(T, {}), [u.UNKNOWN]: (0, p.jsx)(P, {}) },
                E = (0, v.PA)(() => {
                    let {
                            familyInvite: { error: e },
                            settings: { isMobile: t },
                        } = (0, r.Pjs)(),
                        a = t || e === u.SUBSCRIPTION_IS_NOT_AVAILABLE;
                    return (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)('div', {
                                className: (0, y.$)(g.SE.growContainer, g.SE.growContainer_withoutPaddings),
                                children: (0, p.jsx)(b.Image, {
                                    className: (0, y.$)(C().image, { [C().image_small]: a }),
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.6724b88e3c0f01402213116b/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.6724b88c3c0f01402213116a/orig 2x',
                                    fit: 'contain',
                                    'aria-hidden': !0,
                                }),
                            }),
                            k[null != e ? e : u.UNKNOWN],
                        ],
                    });
                });
            var j = a(97396),
                L = a(5956),
                w = a(49320),
                M = a(4073),
                B = a.n(M);
            let O = (e) => {
                let { avatarSrc: t, name: a, isMobile: i } = e;
                return (0, p.jsxs)('div', {
                    className: (0, y.$)(B().root, { [B().root_mobile]: i }),
                    children: [
                        (0, p.jsx)(w.ny, {
                            className: (0, y.$)(B().icon, B().important),
                            avatarSrc: t,
                            hasPlus: !0,
                            ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_AVATAR),
                        }),
                        (0, p.jsx)(I.Caption, {
                            className: B().name,
                            variant: 'div',
                            size: 'm',
                            ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_NAME),
                            children: a,
                        }),
                    ],
                });
            };
            var R = a(22674);
            let D = (e) => {
                let { isActive: t, isMobile: a } = e;
                return (0, p.jsxs)('div', {
                    className: (0, y.$)(B().root, { [B().root_mobile]: a }),
                    children: [
                        (0, p.jsx)(R.Shimmer, { className: B().iconShimmer, isActive: t, radius: 'round' }),
                        (0, p.jsx)(R.Shimmer, { className: B().nameShimmer, isActive: t, radius: 'xs' }),
                    ],
                });
            };
            var K = a(23605),
                U = a.n(K);
            let F = (0, v.PA)(() => {
                let {
                        user: e,
                        location: t,
                        settings: { isMobile: a },
                        familyInvite: {
                            isInfoShimmerVisible: i,
                            isInfoShimmerActive: l,
                            isAcceptanceActive: o,
                            info: { data: s },
                            acceptInvite: c,
                        },
                    } = (0, r.Pjs)(),
                    { name: d = '', avatarUrl: u = '' } = s || {},
                    m = (0, r.NFA)(),
                    _ = (0, j.useRouter)(),
                    v = m.get(r.QGx),
                    b = x(),
                    A = (0, n.useCallback)(() => {
                        if (!e.isAuthorized) {
                            v.authorizationUrl && _.push(v.authorizationUrl);
                            return;
                        }
                        c();
                    }, [v.authorizationUrl, _, e.isAuthorized, c]),
                    C = (0, n.useMemo)(() => (i ? (0, p.jsx)(D, { isActive: l, isMobile: a }) : (0, p.jsx)(O, { avatarSrc: u, name: d, isMobile: a })), [i, l, a, u, d]),
                    N = (0, n.useMemo)(
                        () =>
                            i
                                ? (0, p.jsx)(g.bb, { isActive: l, isMobile: a })
                                : (0, p.jsx)(g.mv, {
                                      color: 'plus',
                                      isMobile: a,
                                      text: (0, p.jsx)(f.A, { id: 'family.accept' }),
                                      onClick: A,
                                      showSpinner: o,
                                      ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_ACCEPT),
                                  }),
                        [i, l, o, a, A],
                    );
                return (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)('div', { className: (0, y.$)(g.SE.growContainer, U().growContainer, U().important), children: C }),
                        (0, p.jsxs)('div', {
                            className: g.SE.text,
                            children: [
                                (0, p.jsx)(I.Heading, {
                                    variant: 'h1',
                                    size: 'xl',
                                    className: g.SE.title,
                                    ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TITLE),
                                    children: (0, p.jsx)(f.A, { id: 'family.info-title', values: { br: '\n' } }),
                                }),
                                (0, p.jsx)(I.Caption, {
                                    variant: 'span',
                                    size: 'm',
                                    className: g.SE.description,
                                    ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_DESCRIPTION),
                                    children: (0, p.jsx)(f.A, { id: 'family.info-description', values: { br: '\n' } }),
                                }),
                                (0, p.jsx)(g.N_, {
                                    target: '_blank',
                                    href: 'https://yandex.'.concat(t.tld, '/legal/yandex_plus_conditions/'),
                                    icon: (0, p.jsx)(L.Icon, { variant: 'arrowRight', size: 'xxxs', className: g.SE.linkArrow }),
                                    iconPosition: 'right',
                                    className: g.SE.link,
                                    containerClassName: g.SE.linkContainer,
                                    ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TERMS),
                                    children: (0, p.jsx)(I.Caption, { type: 'controls', variant: 'span', size: 'm', children: (0, p.jsx)(f.A, { id: 'family.terms' }) }),
                                }),
                            ],
                        }),
                        (0, p.jsxs)('div', {
                            className: g.SE.buttons,
                            children: [
                                N,
                                (0, p.jsx)(g.mv, {
                                    color: 'secondary',
                                    isMobile: a,
                                    text: (0, p.jsx)(f.A, { id: 'family.reject' }),
                                    onClick: b,
                                    ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_REJECT),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var z = a(57477),
                V = a.n(z);
            let W = (0, v.PA)(() => {
                    let {
                            location: e,
                            settings: { isMobile: t },
                        } = (0, r.Pjs)(),
                        a = x();
                    return (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)('div', {
                                className: g.SE.growContainer,
                                children: (0, p.jsx)(b.Image, {
                                    className: (0, y.$)(V().image, { [V().image_mobile]: t }),
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6724a5445724776f278ec59d/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6724a5445724776f278ec59d/orig 2x',
                                    fit: 'contain',
                                    'aria-hidden': !0,
                                }),
                            }),
                            (0, p.jsxs)('div', {
                                className: g.SE.text,
                                children: [
                                    (0, p.jsx)(I.Heading, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: g.SE.title,
                                        ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_TITLE),
                                        children: (0, p.jsx)(f.A, { id: 'family.success-title' }),
                                    }),
                                    (0, p.jsx)(I.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        className: g.SE.description,
                                        ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_DESCRIPTION),
                                        children: (0, p.jsx)(f.A, { id: 'family.success-description', values: { br: '\n' } }),
                                    }),
                                    (0, p.jsx)(g.N_, {
                                        target: '_blank',
                                        href: 'https://plus.yandex.'.concat(e.tld, '/'),
                                        icon: (0, p.jsx)(L.Icon, { variant: 'arrowRight', size: 'xxxs', className: g.SE.linkArrow }),
                                        iconPosition: 'right',
                                        className: g.SE.link,
                                        containerClassName: g.SE.linkContainer,
                                        ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_ABOUT),
                                        children: (0, p.jsx)(I.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, p.jsx)(f.A, { id: 'family.about' }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, p.jsx)('div', {
                                className: g.SE.buttons,
                                children: (0, p.jsx)(g.mv, {
                                    color: 'plus',
                                    isMobile: t,
                                    text: (0, p.jsx)(f.A, { id: 'family.go-to-music' }),
                                    onClick: a,
                                    ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_BUTTON_FINISH),
                                }),
                            }),
                        ],
                    });
                }),
                G = { [i.INFO]: (0, p.jsx)(F, {}), [i.SUCCESS]: (0, p.jsx)(W, {}) },
                Y = (0, v.PA)(() => {
                    let {
                            familyInvite: { modal: e, step: t, hasError: a },
                        } = (0, r.Pjs)(),
                        i = x(),
                        l = (0, n.useCallback)(
                            (t) => {
                                t || i(), e.onOpenChange(t);
                            },
                            [i, e],
                        ),
                        o = (0, n.useMemo)(() => (a ? (0, p.jsx)(E, {}) : G[t]), [a, t]);
                    return (0, p.jsx)(g.cu, {
                        open: e.isOpened,
                        hasError: a,
                        onOpenChange: l,
                        onClose: i,
                        ...(0, h.Am)(h.e8.familyInvite.FAMILY_INVITE_MODAL),
                        children: o,
                    });
                });
        },
        66570: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => n });
            var i = a(63585);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Album;
            }
        },
        67250: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { v: () => i }),
                (function (e) {
                    (e.ON_START_BAR_BELOW = 'music-web-on-start-bar-bellow'), (e.ON_START_FULLSCREEN = 'music-web-on-start-fullscreen');
                })(i || (i = {}));
        },
        67418: (e) => {
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
        68023: (e) => {
            e.exports = {
                root: 'BuySubscriptionButton_root__BdquR',
                root_hidden: 'BuySubscriptionButton_root_hidden__oMe3p',
                info: 'BuySubscriptionButton_info__qBinu',
                subtitle: 'BuySubscriptionButton_subtitle__Ni4VS',
                title: 'BuySubscriptionButton_title__RG_OU',
                buttonText: 'BuySubscriptionButton_buttonText__cmJMC',
                titleContainer: 'BuySubscriptionButton_titleContainer__h7Lmt',
                titleShimmer: 'BuySubscriptionButton_titleShimmer___hnah',
                titleShimmerContainer: 'BuySubscriptionButton_titleShimmerContainer__Wv82r',
                icon: 'BuySubscriptionButton_icon__0oNi_',
            };
        },
        68326: (e) => {
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
        68393: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedPlusOptionsBar_root__dOEU7',
                button: 'NavbarDesktopAnimatedPlusOptionsBar_button__NRXbJ',
                important: 'NavbarDesktopAnimatedPlusOptionsBar_important__mltBe',
                icon: 'NavbarDesktopAnimatedPlusOptionsBar_icon__EKWgb',
                optionIcon: 'NavbarDesktopAnimatedPlusOptionsBar_optionIcon__gPbRm',
                popoverContent: 'NavbarDesktopAnimatedPlusOptionsBar_popoverContent__wSXo7',
            };
        },
        68529: (e) => {
            e.exports = { root: 'Navbar_root__chF4R', root_collapsed: 'Navbar_root_collapsed__pozJX' };
        },
        69306: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => x, y: () => n });
            var i = a(83252);
            let n = () => {
                let { isFreemium: e } = (0, i.XCI)(),
                    {
                        user: t,
                        advertBanners: {
                            banners: { sideAdvertBanner: a },
                        },
                    } = (0, i.Pjs)();
                return !!a.isVisible && (!t.isAuthorized || e);
            };
            var r = a(54486),
                l = a(50420),
                o = a(28303),
                s = a(61910),
                c = a(43426),
                d = a(47713),
                u = a(77881),
                m = a(97800),
                _ = a(80585);
            let p = { p1: 'bwvvu', p2: 'foom', puid1: '', puid2: '' };
            var v = a(99092),
                h = a.n(v);
            let g = (0, o.PA)((e) => {
                    let { className: t, forwardRef: a } = e,
                        {
                            advertBanners: {
                                banners: { sideAdvertBanner: n },
                            },
                            experiments: o,
                            paywall: { modal: s },
                        } = (0, i.Pjs)(),
                        { formatMessage: v } = (0, c.A)(),
                        g = n.type !== i.h8o.EMPTY && o.checkExperiment(i.zal.WebNextCloseAdsSideBanner, 'on');
                    return (0, r.jsxs)('section', {
                        className: (0, l.$)(h().root, t, { [h().root_hidden]: !n.isVisible }),
                        'aria-label': v({ id: 'advert.banner' }),
                        role: 'banner',
                        ref: a,
                        children: [
                            (0, r.jsx)('div', {
                                className: h().contentWrapper,
                                children: (0, r.jsx)(_.NX, {
                                    className: h().content,
                                    ownerId: i.PVv,
                                    containerId: 'adfox_173831489302952769',
                                    params: p,
                                    onLoad: n.setType,
                                    onError: n.toggleHasErrorTrue,
                                    onNoAds: n.toggleNoAdsTrue,
                                }),
                            }),
                            g &&
                                (0, r.jsx)(u.$, {
                                    className: h().disableAdsButton,
                                    onClick: s.open,
                                    size: 'default',
                                    radius: 'xxxl',
                                    children: (0, r.jsx)(m.Caption, {
                                        className: h().adsCloseText,
                                        variant: 'span',
                                        size: 'm',
                                        children: (0, r.jsx)(d.A, { id: 'ads.disable-ads' }),
                                    }),
                                }),
                        ],
                    });
                }),
                x = (0, s.forwardRef)((e, t) => (0, r.jsx)(g, { forwardRef: t, ...e }));
        },
        69610: (e, t, a) => {
            'use strict';
            a.d(t, { BZ: () => S, FB: () => j });
            var i = a(54486),
                n = a(50420),
                r = a(28303),
                l = a(43426),
                o = a(47713),
                s = a(8817),
                c = a(67648),
                d = a(77881),
                u = a(58360),
                m = a(22674),
                _ = a(97800),
                p = a(83252);
            let v = { src: '/_next/static/media/logos.fdba38dc.png' };
            var h = a(70539),
                g = a.n(h);
            let x = 'BUY_SUBSCRIPTION_BANNER_BUTTON_INTERSECTION_PROPERTY_ID';
            (0, r.PA)((e) => {
                let { className: t } = e,
                    {
                        user: a,
                        paywall: { modal: r },
                    } = (0, p.Pjs)(),
                    [h, y] = (0, c.d)(),
                    { formatMessage: b } = (0, l.A)(),
                    {
                        mainText: A,
                        isShimmerVisible: C,
                        isShimmerActive: N,
                        openPaymentWidgetModal: f,
                        saveOfferAndAuthorize: I,
                    } = (0, p.DpZ)({ storeName: 'music', offerElement: { element: h, intersectionPropertyId: x }, place: p.RBW.BANNER_BUTTON }),
                    S = (0, s.c)(() => {
                        if (!a.isAuthorized) return void I();
                        f();
                    });
                return (0, i.jsxs)('section', {
                    className: (0, n.$)(g().root, t),
                    'aria-label': b({ id: 'plusbar.subscription-activation' }),
                    'data-intersection-property-id': 'BUY_SUBSCRIPTION_BANNER_INTERSECTION_PROPERTY_ID',
                    children: [
                        (0, i.jsx)(u.Image, { fit: 'contain', src: v.src, className: g().logos }),
                        (0, i.jsx)(_.Heading, {
                            variant: 'div',
                            size: 'm',
                            weight: 'bold',
                            className: g().title,
                            children: (0, i.jsx)(o.A, { id: 'buy-subscription.get-more-discoveries', values: { nbsp: '\xa0' } }),
                        }),
                        C && (0, i.jsx)(m.Shimmer, { className: g().plusButtonShimmer, isActive: N, radius: 'xxxl' }),
                        !C &&
                            (0, i.jsx)(d.$, {
                                className: g().plusButton,
                                isBlock: !0,
                                radius: 'xxxl',
                                size: 'm',
                                color: 'plus',
                                onClick: S,
                                ref: y,
                                'data-intersection-property-id': x,
                                children: (0, i.jsx)(_.Caption, { variant: 'div', size: 's', lineClamp: 2, children: A }),
                            }),
                        (0, i.jsx)(d.$, {
                            className: g().button,
                            isBlock: !0,
                            radius: 'xxxl',
                            size: 'm',
                            variant: 'text',
                            color: 'primary',
                            withRipple: !1,
                            onClick: r.open,
                            children: (0, i.jsx)(o.A, { id: 'interface-actions.more-details' }),
                        }),
                    ],
                });
            });
            var y = a(97396),
                b = a(31500),
                A = a(32692),
                C = a(80585),
                N = a(20125),
                f = a.n(N);
            let I = 'buy-subscription-modal',
                S = (0, r.PA)((e) => {
                    let { modal: t } = e,
                        a = (0, y.useRouter)(),
                        n = (0, p.NFA)().get(p.QGx),
                        [r, l] = (0, c.d)(),
                        {
                            openPaymentWidgetModal: u,
                            isShimmerActive: m,
                            isShimmerVisible: v,
                            mainText: h,
                            mainTextA11y: g,
                            additionText: x,
                            saveOfferAndAuthorize: N,
                        } = (0, p.DpZ)({ storeName: 'music', offerElement: { element: r, intersectionPropertyId: I } }),
                        { user: S } = (0, p.Pjs)(),
                        T = (0, s.c)(() => {
                            if ((t.close(), !S.isAuthorized)) return void N();
                            u();
                        }),
                        P = (0, s.c)(() => {
                            t.close(), n.authorizationUrl && a.push(n.authorizationUrl);
                        });
                    return (0, i.jsxs)(A.a, {
                        className: f().root,
                        headerClassName: f().header,
                        contentClassName: f().content,
                        size: 'fitContent',
                        placement: 'default',
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        lockScroll: !0,
                        closeButtonProps: (0, b.Am)(b.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_CLOSE_BUTTON),
                        ...(0, b.Am)(b.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET),
                        children: [
                            (0, i.jsx)(_.Caption, {
                                className: f().heading,
                                variant: 'div',
                                weight: 'bold',
                                ...(0, b.Am)(b.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_TITLE),
                                children: (0, i.jsx)(o.A, { id: 'buy-subscription.listen-without-restrictions', values: { nbsp: ' ' } }),
                            }),
                            (0, i.jsxs)('div', {
                                className: f().buttons,
                                children: [
                                    (0, i.jsx)(C.b4, {
                                        ref: l,
                                        'data-intersection-property-id': I,
                                        mainText: h,
                                        ariaLabel: g,
                                        additionText: x,
                                        isShimmerActive: m,
                                        isShimmerVisible: v,
                                        onClick: T,
                                        className: f().button,
                                        mainTextClassName: f().buttonMainText,
                                        additionTextClassName: f().buttonAdditionText,
                                        ...(0, b.Am)(b.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_SUBSCRIPTION_BUTTON),
                                    }),
                                    (0, i.jsx)(d.$, {
                                        onClick: P,
                                        className: f().button,
                                        isBlock: !0,
                                        color: 'secondary',
                                        variant: 'default',
                                        size: 'l',
                                        radius: 'xxxl',
                                        ...(0, b.Am)(b.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ALREADY_IN_PLUS_BUTTON),
                                        children: (0, i.jsx)(_.Caption, {
                                            className: f().buttonMainText,
                                            variant: 'span',
                                            weight: 'bold',
                                            children: (0, i.jsx)(o.A, { id: 'buy-subscription.already-in-plus', values: { nbsp: '\xa0' } }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            S.displayName = 'BuySubscriptionModal';
            var T = a(27510),
                P = a(36017),
                k = a.n(P);
            let E = 'PLUSBAR_BUTTON_INTERSECTION_PROPERTY_ID',
                j = (0, r.PA)((e) => {
                    let { shouldFetchOffers: t, ...a } = e,
                        { user: n, experiments: r } = (0, p.Pjs)(),
                        [o, u] = (0, c.d)(),
                        { formatMessage: v } = (0, l.A)(),
                        {
                            mainText: h,
                            isShimmerVisible: g,
                            isShimmerActive: x,
                            openPaymentWidgetModal: y,
                            saveOfferAndAuthorize: b,
                        } = (0, p.DpZ)({ storeName: 'music', isEnabled: t, offerElement: { element: o, intersectionPropertyId: E } }),
                        A = (0, T.L)(() => (!h && r.checkExperiment(p.zal.WebNextUnauthorizedSubscriptionButton, 'on') ? v({ id: 'authorization.start-button' }) : h)),
                        C = (0, s.c)(() => {
                            if (!n.isAuthorized) return void b();
                            y();
                        });
                    return g
                        ? (0, i.jsx)(m.Shimmer, { className: k().plusButtonShimmer, isActive: x, radius: 'xxxl' })
                        : (0, i.jsx)(d.$, {
                              className: k().root,
                              isBlock: !0,
                              radius: 'xxxl',
                              size: 'm',
                              color: 'plus',
                              onClick: C,
                              ref: u,
                              'data-intersection-property-id': E,
                              ...a,
                              children: (0, i.jsx)(_.Caption, { variant: 'div', size: 's', lineClamp: 2, children: A }),
                          });
                });
            j.displayName = 'PlusNavbarButton';
            var L = a(61910),
                w = a(5956),
                M = a(68023),
                B = a.n(M);
            let O = 'buy-subscription-button',
                R = (0, r.PA)((e) => {
                    let { className: t } = e,
                        a = (0, L.useRef)(null),
                        { showBuySubscriptionModal: r } = (0, p.qBP)(),
                        {
                            mainText: l,
                            mainTextA11y: s,
                            isShimmerVisible: c,
                            isShimmerActive: u,
                        } = (0, p.DpZ)({ storeName: 'music', isEnabled: !1, offerElement: { element: a.current, intersectionPropertyId: O } }),
                        m = (0, T.L)(() =>
                            c
                                ? (0, i.jsx)(C.nN, { className: B().titleShimmerContainer, isActive: u, textClassName: B().titleShimmer })
                                : (0, i.jsx)(_.Caption, { className: B().title, variant: 'span', size: 'm', weight: 'bold', 'aria-label': s, children: l }),
                        );
                    return (0, i.jsxs)('div', {
                        ref: a,
                        className: (0, n.$)(B().root, t),
                        'data-intersection-property-id': O,
                        children: [
                            (0, i.jsxs)('div', {
                                className: B().info,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: B().titleContainer,
                                        children: [(0, i.jsx)(w.Icon, { className: B().icon, 'aria-hidden': !0, variant: 'plusColor' }), m],
                                    }),
                                    (0, i.jsx)(_.Caption, {
                                        className: B().subtitle,
                                        variant: 'span',
                                        size: 'xs',
                                        weight: 'normal',
                                        children: (0, i.jsx)(o.A, { id: 'buy-subscription.music-and-films-and-other' }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(d.$, {
                                color: 'plus',
                                variant: 'default',
                                size: 'm',
                                radius: 'xxxl',
                                onClick: r,
                                children: (0, i.jsx)(_.Caption, {
                                    className: B().buttonText,
                                    variant: 'span',
                                    size: 'm',
                                    weight: 'normal',
                                    children: (0, i.jsx)(o.A, { id: 'buy-subscription.activate' }),
                                }),
                            }),
                        ],
                    });
                });
            var D = a(16825),
                K = a.n(D);
            (0, r.PA)((e) => {
                var t;
                let { children: a } = e,
                    {
                        paymentWidgetModal: r,
                        modals: { buySubscriptionModal: l },
                        album: o,
                        albumCPA: { isPlusCPAPlayerBarEnabled: s },
                        settings: { isMobile: c, browserInfo: d },
                    } = (0, p.Pjs)(),
                    { shouldShowBuySubscriptionModal: u, showBuySubscriptionModal: m, hideBuySubscriptionModal: _ } = (0, p.qBP)(),
                    v = s(o.id, null == (t = o.meta) ? void 0 : t.isNonMusic),
                    h = null == d ? void 0 : d.isTouch,
                    g = c || (h && !v);
                return ((0, L.useEffect)(() => {
                    if (u && !v) {
                        if (r.modal.isOpened) return void _();
                        m();
                    }
                }, [_, r.modal.isOpened, u, m, v]),
                u && g)
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              a,
                              (0, i.jsxs)(p.rtM, {
                                  page: p.l7W.MOBILE_POPUP,
                                  places: [p.RBW.TOP_BUTTON],
                                  shouldFetchOffers: u,
                                  children: [(0, i.jsx)(R, { className: (0, n.$)({ [K().buttonWithPlayerBar]: v }) }), (0, i.jsx)(S, { modal: l })],
                              }),
                          ],
                      })
                    : a;
            });
        },
        70103: (e) => {
            e.exports = {
                root: 'TrackModal_root__QrFg6',
                header: 'TrackModal_header__hjfRd',
                closeButton: 'TrackModal_closeButton__VLm_R',
                modalContent: 'TrackModal_modalContent__AzQPF',
                content: 'TrackModal_content__9qH7W',
                container: 'TrackModal_container__JaG86',
            };
        },
        70392: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => i });
            let i = (e) => {
                let [t, a] = e.split(':');
                return { uid: String(t), kind: Number(a) };
            };
        },
        70539: (e) => {
            e.exports = {
                root: 'BuySubscriptionBanner_root__y2M_5',
                logos: 'BuySubscriptionBanner_logos__LHOzM',
                title: 'BuySubscriptionBanner_title___sWo0',
                plusButton: 'BuySubscriptionBanner_plusButton__UwULz',
                plusButtonShimmer: 'BuySubscriptionBanner_plusButtonShimmer__nS7im',
            };
        },
        71176: (e) => {
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
        71372: (e) => {
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
        71416: (e) => {
            e.exports = { root: 'FullscreenPlayerDesktopPoster_root__d__YD', cover: 'FullscreenPlayerDesktopPoster_cover__CDmhM' };
        },
        74504: (e) => {
            e.exports = {
                root: 'TrailerError_root__GwuKR',
                textContainer: 'TrailerError_textContainer__lF7RZ',
                title: 'TrailerError_title__Q52Pa',
                description: 'TrailerError_description__60UJ6',
            };
        },
        74631: (e) => {
            e.exports = { tooltip: 'NavigationOnboarding_tooltip___xZni', text: 'NavigationOnboarding_text__YW93F', button: 'NavigationOnboarding_button__Vc_Ka' };
        },
        77760: (e) => {
            e.exports = { root: 'PlayerBar_root__cXUnU', adPopup: 'PlayerBar_adPopup__BrBC6' };
        },
        77846: (e) => {
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
        78028: (e) => {
            e.exports = {
                root: 'PlayQueueDnDTrackWrapper_root__CithE',
                inner: 'PlayQueueDnDTrackWrapper_inner__xq3xM',
                dragging: 'PlayQueueDnDTrackWrapper_dragging__Tk9uP',
                dragOverlay: 'PlayQueueDnDTrackWrapper_dragOverlay__ulF2W',
            };
        },
        78444: (e) => {
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
        79945: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedShimmerBar_root__o3xBB',
                barShimmer: 'NavbarDesktopAnimatedShimmerBar_barShimmer__ejAhM',
                buttonShimmer: 'NavbarDesktopAnimatedShimmerBar_buttonShimmer___3Vz2',
            };
        },
        79952: (e, t, a) => {
            'use strict';
            a.d(t, { hq: () => el, qQ: () => c });
            var i = a(83252);
            async function n(e, t, a) {
                var n, r, l, o, s, c;
                if (!e || !t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let d = await (0, i.WGy)(a.locale),
                    u = (0, i.NsT)(null != (n = e.title) ? n : '');
                return a.isNotFound
                    ? { robots: { index: !1 } }
                    : {
                          title: (function (e) {
                              var t;
                              let { trackMeta: a, messageFormatter: n } = e,
                                  r = (0, i.j4K)(null != (t = a.artists) ? t : []);
                              return n({ id: 'metadata.track-title' }, { trackTitle: a.title, artistsNames: r });
                          })({ trackMeta: e, messageFormatter: d }),
                          description: (function (e) {
                              var t, a;
                              let { trackMeta: n, albumMeta: r, messageFormatter: l } = e,
                                  o = (0, i.j4K)(null != (a = n.artists) ? a : []),
                                  s = Math.round((n.durationMs || 0) / i.k7R);
                              return l(
                                  { id: 'metadata.track-description' },
                                  {
                                      type: (null == (t = n.type) ? void 0 : t.replace('-', '_')) || null,
                                      artistsNames: o || null,
                                      trackTitle: n.title,
                                      albumTitle: (null == r ? void 0 : r.title) || null,
                                      duration: (0, i.E4p)(s),
                                      year: (null == r ? void 0 : r.year) || null,
                                  },
                              );
                          })({ trackMeta: e, albumMeta: t, messageFormatter: d }),
                          openGraph: (0, i.i$E)({
                              ogTitle: u,
                              ogDescription: (function (e) {
                                  var t, a;
                                  let { trackMeta: n, albumMeta: r, messageFormatter: l } = e,
                                      o = (0, i.YFq)((0, i.j4K)(null != (a = n.artists) ? a : []), 96, !1);
                                  return l(
                                      { id: 'metadata.track-og-description' },
                                      {
                                          type: (null == (t = n.type) ? void 0 : t.replace('-', '_')) || null,
                                          artistsNames: o || null,
                                          year: (null == r ? void 0 : r.year) || null,
                                      },
                                  );
                              })({ trackMeta: e, albumMeta: t, messageFormatter: d }),
                              fullUrl: null != (r = a.fullUrl) ? r : '',
                              locale: a.locale,
                              ogImage: null != (l = e.ogImage) ? l : '',
                              siteName: d({ id: 'metadata.yandex-music' }),
                          }),
                          twitter: (0, i.HRN)({ cardType: i.WfF.APP, title: u, url: a.url, appName: d({ id: 'metadata.yandex-music' }) }),
                          appLinks: (0, i.X5i)({
                              additional: { ...a, url: null != (o = a.url) ? o : '', fullUrl: null != (s = a.fullUrl) ? s : '', host: a.host },
                              appName: d({ id: 'metadata.yandex-music' }),
                          }),
                          other: { 'music:musician': (0, i.xdV)(null != (c = null == e ? void 0 : e.artists) ? c : [], a.host) },
                          alternates: (0, i.SEs)('/album/:albumId/track/:trackId', a.tld, { params: { albumId: t.id, trackId: e.id } }),
                      };
            }
            var r = a(93064),
                l = a(14032),
                o = a(21365),
                s = a(26433);
            let c = r.gK
                .compose(
                    r.gK.model({
                        meta: r.gK.maybeNull(o.vj),
                        similarTracks: r.gK.maybeNull(r.gK.array(o.vj)),
                        prevEntityId: r.gK.maybeNull(r.gK.union(r.gK.string, r.gK.number)),
                        trackId: r.gK.maybeNull(r.gK.union(r.gK.string, r.gK.number)),
                        albumId: r.gK.maybeNull(r.gK.number),
                        isTrackPage: r.gK.optional(r.gK.boolean, !1),
                        withAnimation: r.gK.boolean,
                        shouldSendEventOnPlusButtonShowed: r.gK.boolean,
                    }),
                    s.qt,
                    s.XT,
                )
                .views((e) => ({
                    get shouldReloadMeta() {
                        var t;
                        let a = e.trackId && e.albumId && (0, l.V)(e.trackId, e.albumId);
                        return a === (null == (t = e.meta) ? void 0 : t.entityId) || a === e.prevEntityId;
                    },
                    get isShimmerVisible() {
                        return e.isLoading || e.isRejected;
                    },
                    get seeds() {
                        var a;
                        return ['track:'.concat(null == (a = e.meta) ? void 0 : a.id)];
                    },
                }))
                .actions((e) => {
                    let t = {
                        setShouldSendEventOnPlusButtonShowed(t) {
                            e.shouldSendEventOnPlusButtonShowed = t;
                        },
                        setTrackInfo(t) {
                            var a;
                            (0, r._n)(e) &&
                                ((e.meta = (0, o.vU)(t.track)),
                                (e.similarTracks = (0, r.wg)(null == (a = t.similarTracks) ? void 0 : a.map((e) => (0, o.vU)(e)))),
                                (e.loadingState = i.GuX.RESOLVE));
                        },
                        setIsTrackPage(t) {
                            e.isTrackPage = !!t;
                        },
                        setAnimationState(t) {
                            e.withAnimation = t;
                        },
                        getData: (0, r.L3)(function* () {
                            let { tracksResource: a, modelActionsLogger: n } = (0, r._$)(e);
                            if (!e.trackId || e.loadingState === i.GuX.PENDING || e.shouldReloadMeta) return null;
                            try {
                                var l;
                                (e.loadingState = i.GuX.PENDING), (e.meta = null);
                                let n = yield a.getFullInfoTrack({ trackId: e.trackId, albumId: e.albumId });
                                if (!n) return (e.loadingState = i.GuX.REJECT), null;
                                (e.meta = (0, o.vU)(n.track)),
                                    (e.similarTracks = (0, r.wg)(n.similarTracks.map((e) => (0, o.vU)(e)))),
                                    (e.prevEntityId = n.track.id),
                                    t.setShouldSendEventOnPlusButtonShowed(!0),
                                    (null == (l = e.meta) ? void 0 : l.resolveAllDisclaimers) && (yield e.meta.resolveAllDisclaimers()),
                                    (e.loadingState = i.GuX.RESOLVE);
                            } catch (t) {
                                n.error(t), (e.loadingState = i.GuX.REJECT);
                            }
                            return null;
                        }),
                        open(t) {
                            let { trackId: a, albumId: i } = t;
                            a && i && ((e.trackId = a), (e.albumId = i), (e.isOpened = !0));
                        },
                        reset() {
                            (e.loadingState = i.GuX.IDLE), (e.shouldSendEventOnPlusButtonShowed = !0);
                        },
                    };
                    return t;
                })
                .named('TrackPage');
            var d = a(54486),
                u = a(28303),
                m = a(61910),
                _ = a(32692),
                p = a(80156),
                v = a(70103),
                h = a.n(v),
                g = a(43426),
                x = a(31500),
                y = a(8817),
                b = a(77881),
                A = a(5956),
                C = a(80585),
                N = a(97800),
                f = a(49230),
                I = a.n(f),
                S = a(22674),
                T = a(18180),
                P = a.n(T);
            let k = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, d.jsxs)('div', {
                        className: P().root,
                        children: [
                            (0, d.jsx)(S.Shimmer, { className: P().title, isActive: t }),
                            (0, d.jsxs)('div', {
                                className: P().coverBlock,
                                children: [
                                    (0, d.jsx)(S.Shimmer, { className: P().cover, isActive: t }),
                                    (0, d.jsxs)('div', {
                                        className: P().linkBlock,
                                        children: [
                                            (0, d.jsx)(S.Shimmer, { className: P().link, isActive: t }),
                                            (0, d.jsx)(S.Shimmer, { className: P().description, isActive: t }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                E = (0, u.PA)((e) => {
                    var t;
                    let { onModalClose: a } = e,
                        { formatMessage: n } = (0, g.A)(),
                        {
                            settings: { isMobile: r },
                            track: l,
                            fullscreenPlayer: o,
                        } = (0, i.Pjs)(),
                        s = (0, y.c)(() => {
                            o.modal.isOpened && o.modal.close(), r && a();
                        }),
                        c = null == (t = l.meta) ? void 0 : t.mainAlbum,
                        u = (0, m.useMemo)(() => {
                            if (!c) return;
                            let e = c.trackCount;
                            return c.isAudiobook || c.isFairyTale
                                ? n({ id: 'entity-names.number-of-chapters' }, { counter: e })
                                : c.isPodcast
                                  ? n({ id: 'entity-names.number-of-episodes' }, { counter: e })
                                  : n({ id: 'entity-names.number-of-tracks' }, { counter: e });
                        }, [c, n]);
                    return l.isShimmerVisible
                        ? (0, d.jsx)(k, { isShimmerActive: l.isLoading })
                        : c
                          ? (0, d.jsxs)('div', {
                                className: I().root,
                                ...(0, x.Am)(x.Xk.track.TRACK_PAGE_ALBUM),
                                children: [
                                    (0, d.jsx)(N.Heading, {
                                        variant: 'h2',
                                        size: 'm',
                                        lineClamp: 1,
                                        className: I().title,
                                        ...(0, x.Am)(x.Xk.track.TRACK_PAGE_ALBUM_TITLE),
                                        children: n({ id: 'track-modal.album-heading' }, { type: (0, i.yDn)(c.type) }),
                                    }),
                                    (0, d.jsx)(C.Tw, {
                                        title: null == c ? void 0 : c.title,
                                        coverUrl: null == c ? void 0 : c.coverUri,
                                        description: u,
                                        viewAllActionLink: null == c ? void 0 : c.url,
                                        onViewAllAction: s,
                                        titleLineClamp: 1,
                                        available: c.isAvailable,
                                        titleSize: 'xs',
                                        withDescription: !!u,
                                    }),
                                ],
                            })
                          : null;
                });
            var j = a(62443),
                L = a(39694),
                w = a(1172),
                M = a.n(w),
                B = a(50420),
                O = a(87923),
                R = a.n(O);
            let D = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, d.jsxs)('div', {
                        className: R().root,
                        children: [
                            (0, d.jsx)(S.Shimmer, { className: R().title, isActive: t }),
                            (0, d.jsx)(C.q$, { className: (0, B.$)(R().lyrics, R().important), count: 4, isActive: t }),
                            (0, d.jsx)(S.Shimmer, { className: R().button, isActive: t }),
                        ],
                    });
                },
                K = (0, u.PA)((e) => {
                    var t, a, n, r;
                    let { track: l } = e,
                        { formatMessage: s } = (0, g.A)(),
                        { notify: c } = (0, i.lkh)(),
                        { track: u, trackLyrics: _ } = (0, i.Pjs)(),
                        { state: p, setState: v } = (0, j.e)(!1),
                        h = _.currentTrackId !== (null == (t = u.meta) ? void 0 : t.id),
                        b = u.isResolved && (null == (a = u.meta) ? void 0 : a.isLyricsAvailable);
                    (0, m.useEffect)(() => {
                        var e;
                        (null == (e = u.meta) ? void 0 : e.id) && b && h && _.getLyrics(u.meta.id);
                    }, [h, b, _, null == (n = u.meta) ? void 0 : n.id]),
                        (0, m.useEffect)(() => {
                            let e = null == l ? void 0 : l.id,
                                t = null == l ? void 0 : l.isAvailable,
                                a = null == l ? void 0 : l.isLyricsAvailable,
                                i = _.currentTrackId ? String(_.currentTrackId) : null,
                                n = e ? String(e) : null,
                                r = !!(_.lyrics && String(_.lyrics).trim().length > 0),
                                o = r && (!_.currentTrackId || (n && i && n === i));
                            if (!e || !1 === t || a || _.isLoading || o) return;
                            _.setTrack(l), _.getLyrics(e);
                        }, [
                            null == l ? void 0 : l.id,
                            null == l ? void 0 : l.isAvailable,
                            null == l ? void 0 : l.isLyricsAvailable,
                            _.currentTrackId,
                            _.isLoading,
                            _.lyrics,
                            _,
                        ]),
                        _.shouldShowErrorNotification &&
                            (c((0, d.jsx)(C.hT, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: i.uQT.ERROR }), _.resetShouldShowError());
                    let A = (0, y.c)((e) => {
                        v(e), e && l && _.sendViews({ trackId: l.id, albumId: l.albumId });
                    });
                    let T = !!(_.lyrics && String(_.lyrics).trim().length > 0),
                        I = _.isShimmerVisible || u.isShimmerVisible || (_.isLoading && !T);
                    return I
                        ? (0, d.jsx)(D, { isShimmerActive: _.isLoading || u.isLoading })
                        : !T
                          ? null
                          : (0, d.jsxs)('div', {
                                className: M().root,
                                ...(0, x.Am)(x.Xk.track.TRACK_PAGE_LYRICS),
                                children: [
                                    (0, d.jsx)(N.Heading, {
                                        variant: 'h2',
                                        size: 'm',
                                        lineClamp: 1,
                                        className: M().title,
                                        ...(0, x.Am)(x.e8.content.TRACK_LYRICS_TITLE),
                                        children: s({ id: 'entity-names.text' }),
                                    }),
                                    (0, d.jsx)(L.K, {
                                        moreText: s({ id: 'track-modal.read-more' }),
                                        buttonClassName: M().button,
                                        open: p,
                                        onOpenChange: A,
                                        lineClamp: 4,
                                        withFade: !0,
                                        children: (0, d.jsx)(N.Caption, {
                                            variant: 'div',
                                            className: M().lyrics,
                                            size: 'l',
                                            weight: 'medium',
                                            ...(0, x.Am)(x.e8.content.TRACK_LYRICS_TEXT),
                                            children: (0, d.jsx)(o.xe, {
                                                lyrics: _.lyrics,
                                                authors: _.writersNames,
                                                source: null == (r = _.major) ? void 0 : r.prettyName,
                                                isShimmerVisible: _.isShimmerVisible,
                                                isShimmerActive: _.isLoading,
                                            }),
                                        }),
                                    }),
                                ],
                            });
                });
            var U = a(63585),
                F = a(91126),
                z = a.n(F);
            let V = (0, u.PA)((e) => {
                let { tracks: t, contextId: a, isShimmerVisible: n, isShimmerActive: r, autoflowSeeds: l, shouldResetCarouselScroll: s } = e,
                    { formatMessage: c } = (0, g.A)(),
                    { from: u } = (0, i.fyy)({ contextId: a, contextType: U.K.Various }),
                    m = (0, y.c)((e, a) => ({
                        contextData: { type: U.K.Various, meta: { id: e.entityId }, from: u, overrideAutoflowSeeds: l },
                        queueParams: { index: a },
                        loadContextMeta: !1,
                        entitiesData: t.map(o.$b),
                    }));
                return (0, d.jsx)(C.$2, {
                    className: z().root,
                    shimmer: (0, d.jsx)(C.DS, { variant: i.Xjt.PLAYLIST, isActive: r }),
                    maxColumnsCount: C.DI.TWO,
                    itemsCountPerColumn: 4,
                    blockHeaderTitle: c({ id: 'track-modal.similar-tracks' }),
                    blockHeaderHeadingVariant: 'h2',
                    isShimmerVisible: n,
                    isShimmerActive: r,
                    carouselItemClassName: (0, B.$)(z().item, z().important),
                    blockHeaderClassName: z().title,
                    carouselClassName: z().tracksContainer,
                    shouldResetCarouselScroll: s,
                    ...(0, x.Am)(x.Xk.track.TRACK_PAGE_SIMILAR_TRACKS),
                    children: t.map((e, t) => (0, d.jsx)(o.Kt, { track: e, playContextParams: m(e, t), withDislike: !1, withTrailer: !1 }, e.id)),
                });
            });
            var W = a(17656),
                G = a(63695),
                Y = a(47713),
                Q = a(54460),
                $ = a(43350),
                q = a(62395),
                H = a(61528),
                X = a.n(H);
            let Z = (0, u.PA)((e) => {
                var t, a, n;
                let { track: r } = e,
                    { shouldShowBuySubscriptionModal: l, showBuySubscriptionModal: s } = (0, i.qBP)(),
                    { from: c, utmLink: u } = (0, i.fyy)({ contextId: r.id, contextType: U.K.Various }),
                    {
                        user: _,
                        settings: { isMobile: p },
                        track: { shouldSendEventOnPlusButtonShowed: v, setShouldSendEventOnPlusButtonShowed: h, isOpened: g },
                        albumCPA: { isPlusCPAPlayerBarEnabled: b },
                    } = (0, i.Pjs)(),
                    N = (0, i.brA)(),
                    f = ((e) => {
                        let t = (0, q.st)(),
                            a = (0, i.UlF)(),
                            { hash: n } = (0, q.gf)();
                        return (0, y.c)(() => {
                            if (!t) return;
                            let r = {
                                    hash: n,
                                    pageId: i.Wft[i._Q$.TRACK_SCREEN],
                                    mainObjectType: $.ky.Track,
                                    mainObjectId: e.objectId,
                                    entityId: 'buy_subscription_button',
                                    pageStyle: $.QL.Sheet,
                                    pagePlacement: $.c4.Right,
                                    from: i.Wft[i._Q$.TRACK_SCREEN],
                                    to: i.Wft[i._Q$.PAYWALL],
                                    tabId: '',
                                    tabPos: 0,
                                },
                                l = (0, $.Fx)({ params: r, logger: a, context: 'useSendEventOnTrackModalPlusButtonNavigated' });
                            l && (0, $.QS)(t.evgenInstance, l);
                        });
                    })({ objectId: r.id }),
                    I = ((e) => {
                        let t = (0, q.st)(),
                            a = (0, i.UlF)(),
                            { hash: n } = (0, q.gf)();
                        return (0, y.c)(() => {
                            if (!t) return;
                            let r = {
                                    hash: n,
                                    pageId: i.Wft[i._Q$.TRACK_SCREEN],
                                    mainObjectType: $.ky.Track,
                                    mainObjectId: e.objectId,
                                    entityId: 'buy_subscription_button',
                                    pageStyle: $.QL.Sheet,
                                    pagePlacement: $.c4.Right,
                                    tabId: '',
                                    tabPos: 0,
                                },
                                l = (0, $.Fx)({ params: r, logger: a, context: 'useSendEventOnTrackModalPlusButtonShowed' });
                            l && (0, $.Pf)(t.evgenInstance, l);
                        });
                    })({ objectId: r.id }),
                    S = (0, i.PT7)(),
                    T = !_.hasPlus && r.isTrackMusic && ((r.isAvailable && !r.hasModalAccess) || (null == (t = r.mainAlbum) ? void 0 : t.isAvailableOnlyForPlus)),
                    P = b(null == (a = r.mainAlbum) ? void 0 : a.id, null == (n = r.mainAlbum) ? void 0 : n.isNonMusic),
                    { iconSize: k, controlSize: E } = (0, W.q)(p),
                    [j, L] = (0, m.useState)(!1),
                    { isPlaying: w, togglePlay: M } = (0, i.Dx4)({
                        playContextParams: { contextData: { type: U.K.Various, meta: { id: r.entityId }, from: c, utmLink: u }, loadContextMeta: !0 },
                        entityId: r.entityId,
                    }),
                    O = (0, o.wf)({ track: r, callback: M }),
                    R = (0, y.c)(() => {
                        if (!S()) {
                            if (l && !P) return void s();
                            O(), N(!w);
                        }
                    }),
                    D = (0, Q.KX)(r),
                    K = (0, y.c)((e) => {
                        e.stopPropagation();
                    });
                (0, m.useEffect)(() => {
                    v && T && g && (I(), h(!1));
                }, [I, T, v, h, g]);
                let F = (0, m.useMemo)(() => {
                        if (T) return (0, d.jsx)(C.hS, { text: (0, d.jsx)(Y.A, { id: 'payment.high-quality-offer-button-title' }), analyticsNavigatedCallback: f });
                    }, [T, f]),
                    z = T ? 'secondary' : 'primary';
                return (0, d.jsxs)('div', {
                    className: X().root,
                    children: [
                        F,
                        (0, d.jsxs)('div', {
                            className: X().controlsContainer,
                            children: [
                                (0, d.jsx)(C.DM, {
                                    className: (0, B.$)({ [X().disabledButtonByDisclaimer]: !r.isAvailable && r.hasModalAccess }),
                                    withRipple: r.isAvailable,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: E,
                                    color: z,
                                    iconSize: k,
                                    isPlaying: w,
                                    onClick: R,
                                    disabled: !r.isAvailable && !r.hasModalAccess,
                                    children: !p && (0, d.jsx)(Y.A, { id: 'player-actions.listen' }),
                                }),
                                (0, d.jsx)(C.cy, {
                                    isLiked: r.isLiked,
                                    onClick: D,
                                    variant: 'default',
                                    size: E,
                                    iconSize: k,
                                    withRipple: !p,
                                    disabled: !r.isAvailable || !_.isAuthorized,
                                }),
                                r.isAvailable &&
                                    (0, d.jsx)(o._Y, {
                                        track: r,
                                        open: j,
                                        onOpenChange: L,
                                        size: E,
                                        icon: (0, d.jsx)(A.Icon, { variant: 'more', size: k }),
                                        className: (0, B.$)(X().menuButton, { [X().menuButton_active]: j }),
                                        wrapperClassName: X().menuWrapper,
                                        onClick: K,
                                        withTrailer: !1,
                                        ...(0, x.Am)(x.e8.pageHeader.TRACK_HEADER_CONTEXT_MENU_BUTTON),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var J = a(67418),
                ee = a.n(J),
                et = a(65857),
                ea = a.n(et);
            let ei = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, d.jsxs)('div', {
                        className: ea().root,
                        children: [
                            (0, d.jsx)(S.Shimmer, { className: ea().entityName, isActive: t }),
                            (0, d.jsx)(S.Shimmer, { className: ea().title, isActive: t }),
                            (0, d.jsx)(C.q$, {
                                className: (0, B.$)(ea().artists, ea().important),
                                shimmerClassName: ea().artist,
                                count: 3,
                                minWidth: 10,
                                maxWidth: 30,
                                isActive: t,
                            }),
                            (0, d.jsxs)('div', {
                                className: ea().controls,
                                children: [
                                    (0, d.jsx)(S.Shimmer, { className: ea().playButton, isActive: t }),
                                    (0, d.jsx)(S.Shimmer, { className: ea().button, isActive: t }),
                                    (0, d.jsx)(S.Shimmer, { className: ea().button, isActive: t }),
                                    (0, d.jsx)(S.Shimmer, { className: ea().button, isActive: t }),
                                ],
                            }),
                        ],
                    });
                },
                en = (0, u.PA)((e) => {
                    let { track: t, isShimmerVisible: a, isShimmerActive: n, isTrackPage: r } = e,
                        { formatMessage: l } = (0, g.A)(),
                        {
                            settings: { isMobile: o },
                        } = (0, i.Pjs)(),
                        s = null == t ? void 0 : t.explicitDisclaimer,
                        c = (0, m.useMemo)(() => {
                            if (s)
                                return (0, d.jsx)(C.Nq, {
                                    className: (0, B.$)(ee().explicitMark, ee().important),
                                    getDescriptionTexts: t.getDescriptionTexts,
                                    size: 'xxs',
                                    variant: s,
                                });
                        }, [s, null == t ? void 0 : t.getDescriptionTexts]);
                    return a
                        ? (0, d.jsx)(ei, { isShimmerActive: n })
                        : t
                          ? (0, d.jsx)(W.kE, {
                                entityName: l({ id: 'entity-names.track-type' }, { type: (0, i.yDn)(t.type) }),
                                entityNameIcon: c,
                                controls: (0, d.jsx)(Z, { track: t }),
                                meta: (0, d.jsx)(G.iQ, {
                                    className: (0, B.$)(ee().text, ee().important),
                                    linkClassName: ee().link,
                                    captionClassName: ee().artistCaption,
                                    artists: t.artists,
                                    variant: 'breakWord',
                                    separator: o ? '' : void 0,
                                }),
                                title: t.title,
                                version: t.version,
                                headingVariant: r ? 'h1' : 'div',
                                titleClassName: (0, B.$)(ee().title, ee().important),
                                metaClassName: (0, B.$)(ee().meta, ee().important),
                                contentClassName: (0, B.$)(ee().content, ee().important),
                                withHeadingClamp: !1,
                                entityNameClassName: ee().entityName,
                            })
                          : null;
                }),
                er = (0, u.PA)(() => {
                    var e, t, a, n, r, l, s;
                    let { formatMessage: c } = (0, g.A)(),
                        { notify: u } = (0, i.lkh)(),
                        {
                            track: _,
                            albumCPA: { isPlusCPAPlayerBarEnabled: p },
                        } = (0, i.Pjs)(),
                        v = p(
                            null == (t = _.meta) || null == (e = t.mainAlbum) ? void 0 : e.id,
                            null == (n = _.meta) || null == (a = n.mainAlbum) ? void 0 : a.isNonMusic,
                        ),
                        N = _.similarTracks && _.similarTracks.length > 0 && (null == (r = _.meta) ? void 0 : r.isTrackMusic) && !v,
                        f = (0, y.c)(() => {
                            _.setAnimationState(!0), _.close(), _.reset();
                        }),
                        I = (0, o.wf)({ track: _.meta, disclaimerRejectHandler: f });
                    return (
                        (0, m.useEffect)(() => {
                            I();
                        }, [I]),
                        _.isRejected && u((0, d.jsx)(C.hT, { error: c({ id: 'error-messages.error-during-action' }) }), { containerId: i.uQT.ERROR }),
                        (0, d.jsxs)('div', {
                            ...(0, x.Am)(x.Xk.track.TRACK_PAGE),
                            children: [
                                (0, d.jsxs)('header', {
                                    className: h().header,
                                    children: [
                                        (0, d.jsx)(b.$, {
                                            radius: 'round',
                                            color: 'secondary',
                                            size: 'xxs',
                                            icon: (0, d.jsx)(A.Icon, { variant: 'close', size: 'xxs' }),
                                            className: h().closeButton,
                                            onClick: f,
                                            'aria-label': c({ id: 'interface-actions.close' }),
                                            ...(0, x.Am)(x.Xk.track.TRACK_PAGE_CLOSE_BUTTON),
                                        }),
                                        (0, d.jsx)(en, { track: _.meta, isShimmerVisible: _.isShimmerVisible, isShimmerActive: _.isLoading, isTrackPage: _.isTrackPage }),
                                    ],
                                }),
                                (0, d.jsxs)('div', {
                                    className: h().content,
                                    ...(0, x.Am)(x.Xk.track.TRACK_PAGE_CONTENT),
                                    children: [
                                        (0, d.jsx)(E, { onModalClose: f }),
                                        ((null == (l = _.meta) ? void 0 : l.isLyricsAvailable) || (null == (l = _.meta) ? void 0 : l.isAvailable)) &&
                                            (0, d.jsx)(K, { track: _.meta }, _.meta.id),
                                        N &&
                                            _.similarTracks &&
                                            (0, d.jsx)(V, {
                                                tracks: _.similarTracks,
                                                contextId: null == (s = _.meta) ? void 0 : s.entityId,
                                                isShimmerVisible: _.isShimmerVisible,
                                                isShimmerActive: _.isLoading,
                                                autoflowSeeds: _.seeds,
                                                shouldResetCarouselScroll: _.shouldReloadMeta,
                                            }),
                                    ],
                                }),
                                _.meta && (0, d.jsx)(o.v4, { track: _.meta }),
                            ],
                        })
                    );
                }),
                el = (0, u.PA)(() => {
                    let { contentRef: e } = (0, i.gKY)(),
                        {
                            album: t,
                            track: a,
                            settings: { isMobile: r },
                        } = (0, i.Pjs)();
                    a.trackId && a.albumId && a.isOpened && a.getData(),
                        (0, m.useEffect)(
                            () => () => {
                                a.reset();
                            },
                            [a],
                        ),
                        (0, m.useEffect)(() => {
                            a.isOpened && a.setAnimationState(!1);
                        }, [a]),
                        ((e, t) => {
                            (0, m.useEffect)(() => {
                                if (!e || !t) return;
                                let a = (0, p.fO)(e);
                                n((0, o.zc)(t), a, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, i.jxB)(e);
                                });
                            }, [e, null == e ? void 0 : e.title, t, null == t ? void 0 : t.title]);
                        })(t.meta, a.meta);
                    let l = (0, m.useCallback)(
                        (e) => {
                            var t;
                            null == (t = a.onOpenChange) || t.call(a, e);
                        },
                        [a],
                    );
                    return (0, d.jsx)(_.a, {
                        size: 'fitContent',
                        placement: r ? 'default' : 'right',
                        open: a.isOpened,
                        onOpenChange: l,
                        className: h().root,
                        contentClassName: h().modalContent,
                        portalNode: r ? null : e,
                        showHeader: !1,
                        withOverlay: r,
                        closeOnOutsidePress: !1,
                        withAnimation: a.withAnimation,
                        isMobile: r,
                        lockScroll: r,
                        children: (0, d.jsx)(er, {}),
                    });
                });
            (0, u.PA)((e) => {
                let { albumId: t, trackId: a, preloadedTrack: n, preloadedSimilarTracks: r } = e,
                    { track: l } = (0, i.Pjs)();
                return n && l.setTrackInfo({ track: n, similarTracks: r }), l.setIsTrackPage(!0), l.open({ trackId: a, albumId: Number(t) }), null;
            });
        },
        81904: (e) => {
            e.exports = {
                message: 'NotificationChangeQuality_message__coCvn',
                changeButton: 'NotificationChangeQuality_changeButton__Hzc3y',
                icon: 'NotificationChangeQuality_icon__bOfQO',
            };
        },
        82391: (e, t, a) => {
            'use strict';
            a.d(t, { kn: () => b, vR: () => tH, uZ: () => M, LN: () => am, Hq: () => ag, OK: () => B, BG: () => ab, so: () => i });
            var i = (function (e) {
                    return (e.VIDEO = 'video-ad-player'), (e.SLOT = 'video-ad-container'), e;
                })({}),
                n = a(83252);
            let r = (e) => {
                let t = (0, n.eGp)(),
                    {
                        fullscreenPlayer: {
                            playQueue: { trackMap: a },
                        },
                    } = (0, n.Pjs)(),
                    i = null == t ? void 0 : t.state.queueState.entityList.value,
                    r = null == i ? void 0 : i[e];
                if (!r) return null;
                let {
                        context: { data: l },
                    } = r,
                    o = a.get(String(r.entity.data.meta.id));
                return o ? { track: o, playContextParams: { contextData: l, queueParams: { index: e } } } : null;
            };
            var l = a(93064);
            let o = l.gK.model('AdContainer', {
                adTitle: l.gK.maybe(l.gK.string),
                iconSrc: l.gK.maybe(l.gK.string),
                clickThroughUrl: l.gK.maybe(l.gK.string),
                src: l.gK.maybe(l.gK.string),
                clientLegalInfo: l.gK.maybe(l.gK.string),
                advertiserInfoUrl: l.gK.maybe(l.gK.string),
            });
            var s = a(54486),
                c = a(50420),
                d = a(28303),
                u = a(61910),
                m = a(47713),
                _ = a(77881),
                p = a(58360),
                v = a(97800),
                h = a(80585),
                g = a(99835),
                x = a.n(g);
            let y = (0, d.PA)((e) => {
                    let { className: t, data: a, mediaContent: i, linkClassName: r } = e,
                        {
                            settings: { isMobile: l },
                        } = (0, n.Pjs)(),
                        o = (0, n.rs2)(),
                        d = (0, u.useMemo)(
                            () =>
                                (null == o ? void 0 : o.state.clickThrough)
                                    ? (0, s.jsx)(_.$, {
                                          className: (0, c.$)(x().button, r),
                                          variant: 'default',
                                          radius: 'xxxl',
                                          onClick: o.state.clickThrough,
                                          children: (0, s.jsx)(m.A, { id: 'ads.learn-more' }),
                                      })
                                    : (null == a ? void 0 : a.clickThroughUrl)
                                      ? (0, s.jsx)(h.N_, {
                                            target: '_blank',
                                            href: a.clickThroughUrl,
                                            className: (0, c.$)(x().button, x().linkButton, r),
                                            children: (0, s.jsx)(m.A, { id: 'ads.learn-more' }),
                                        })
                                      : (0, s.jsx)(_.$, {
                                            className: (0, c.$)(x().button, r),
                                            variant: 'default',
                                            radius: 'xxxl',
                                            disabled: !0,
                                            children: (0, s.jsx)(m.A, { id: 'ads.learn-more' }),
                                        }),
                            [null == a ? void 0 : a.clickThroughUrl, null == o ? void 0 : o.state.clickThrough, r],
                        );
                    return (0, s.jsxs)('div', {
                        className: (0, c.$)(x().root, t),
                        children: [
                            i,
                            (0, s.jsxs)('div', {
                                className: x().container,
                                children: [
                                    (0, s.jsxs)('div', {
                                        className: x().info,
                                        children: [
                                            (0, s.jsx)(p.Image, {
                                                className: x().favicon,
                                                withAspectRatio: !0,
                                                'aria-hidden': !0,
                                                fit: 'cover',
                                                src: (null == a ? void 0 : a.iconSrc) || '',
                                                alt: '',
                                                fallbackIconVariant: 'picture',
                                            }),
                                            (0, s.jsxs)('div', {
                                                className: x().text,
                                                children: [
                                                    (0, s.jsx)(v.Caption, {
                                                        variant: 'div',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        className: x().title,
                                                        lineClamp: l ? 5 : void 0,
                                                        children: null == a ? void 0 : a.adTitle,
                                                    }),
                                                    (0, s.jsx)(v.Caption, {
                                                        variant: 'div',
                                                        type: 'text',
                                                        size: 'm',
                                                        weight: 'medium',
                                                        className: x().subtitle,
                                                        children: (0, s.jsx)(m.A, { id: 'ads.ad' }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)('div', { className: x().buttonContainer, children: d }),
                                ],
                            }),
                        ],
                    });
                }),
                b = l.gK
                    .model('Advert', {
                        data: l.gK.maybeNull(o),
                        isAdvertShown: l.gK.maybe(l.gK.boolean),
                        isAdvertPlaying: l.gK.maybe(l.gK.boolean),
                        isAdvertPlaybackCreated: l.gK.boolean,
                        type: l.gK.maybeNull(l.gK.enumeration(Object.values(n.I1A))),
                    })
                    .views((e) => ({
                        get isAudioAdvert() {
                            return e.type === n.I1A.AUDIO;
                        },
                        get isVideoAdvert() {
                            return e.type === n.I1A.VIDEO;
                        },
                    }))
                    .actions((e) => ({
                        setData: (t) => {
                            e.data = (0, l.wg)({
                                adTitle: null == t ? void 0 : t.adTitle,
                                iconSrc: null == t ? void 0 : t.iconSrc,
                                clickThroughUrl: null == t ? void 0 : t.clickThroughUrl,
                                clientLegalInfo: null == t ? void 0 : t.clientLegalInfo,
                                advertiserInfoUrl: null == t ? void 0 : t.advertiserInfoUrl,
                            });
                        },
                        setType(t) {
                            e.type = t;
                        },
                        setAdvertShown: (t) => {
                            e.isAdvertShown = t;
                        },
                        setAdvertPlaying: (t) => {
                            e.isAdvertPlaying = t;
                        },
                        setIsAdvertPlaybackCreated(t) {
                            e.isAdvertPlaybackCreated = t;
                        },
                        reset: () => {
                            (e.data = null), (e.isAdvertPlaying = !0), (e.isAdvertShown = !1), (e.type = null);
                        },
                    }));
            var A = a(26433),
                C = (function (e) {
                    return (e.SYNC_LYRICS = 'syncLyrics'), (e.PLAY_QUEUE = 'playQueue'), e;
                })({}),
                N = a(63585),
                f = a(89461),
                I = a(97719);
            let S = l.gK
                .compose(
                    l.gK.model('PlayQueue', {
                        isVisible: l.gK.optional(l.gK.boolean, !1),
                        beforeTracksIds: l.gK.maybeNull(l.gK.array(l.gK.number)),
                        afterTracksIds: l.gK.optional(l.gK.frozen(), []),
                        hiddenTrackIds: l.gK.array(l.gK.number),
                        currentIndex: l.gK.optional(l.gK.number, 0),
                        trackMap: l.gK.optional(l.gK.map(I.x5), {}),
                    }),
                    A.pl,
                )
                .views((e) => ({
                    get isVibeBlockShowed() {
                        let {
                            sonataState: { isVibeContext: t },
                        } = (0, l.Zn)(e);
                        return !t && 0 === e.afterTracksIds.length;
                    },
                    get itemsKeys() {
                        var t, a;
                        return null != (a = null == (t = e.beforeTracksIds) ? void 0 : t.concat(e.afterTracksIds).map(String)) ? a : [];
                    },
                    get isDragAndDropEnabled() {
                        let {
                            experiments: t,
                            sonataState: { isVibeContext: a },
                        } = (0, l.Zn)(e);
                        return t.checkExperiment(n.zal.WebNextPlayQueueDnD, 'on') && !a;
                    },
                }))
                .actions((e) => {
                    let t = (t, a) => {
                            let i = t[a];
                            if (!i || (0, f.Re)(i)) return null;
                            let { entity: n } = i,
                                r = (0, I.pE)(n);
                            return !r || r.isHiddenFromSonataQueue ? null : (e.trackMap.has(r.id) || e.trackMap.set(r.id, (0, l.wg)(r)), a);
                        },
                        a = {
                            setVisible() {
                                e.isVisible = !0;
                            },
                            setInvisible() {
                                e.isVisible = !1;
                            },
                            updateTracks(e, t, i, n) {
                                a.setCurrentTrackId(e, t), a.setBeforeTracksIds(e, i), a.setAfterTracksIds(e, i, n), a.setHiddenTrackIds(e);
                            },
                            setCurrentTrackId(a, i) {
                                (e.currentIndex = i), t(a, i);
                            },
                            setBeforeTracksIds(a, i) {
                                let n = Math.max(0, e.currentIndex - 125) - 1,
                                    r = [];
                                for (let l = e.currentIndex - 1; l > n; l--) {
                                    let e = i[l];
                                    if ('number' != typeof e) break;
                                    let n = t(a, e);
                                    null !== n && r.unshift(n);
                                }
                                e.beforeTracksIds = (0, l.wg)(r);
                            },
                            setAfterTracksIds(a, i, n) {
                                let r = n === N.K.Vibe ? 1 : 125,
                                    l = [];
                                for (let n = e.currentIndex + 1; n < i.length && l.length < r; n++) {
                                    let e = i[n];
                                    if ('number' != typeof e) break;
                                    let r = t(a, e);
                                    null !== r && l.push(r);
                                }
                                e.afterTracksIds = l;
                            },
                            setHiddenTrackIds(t) {
                                let a = [];
                                for (let e = 0; e < t.length; e++) {
                                    let i = t[e];
                                    i && i.entity.hidden && a.push(e);
                                }
                                e.hiddenTrackIds = (0, l.wg)(a);
                            },
                            reset() {
                                e.destroyItems([e.beforeTracksIds, e.hiddenTrackIds]), (e.afterTracksIds = []), e.trackMap.clear();
                            },
                        };
                    return a;
                });
            var T = a(9348),
                P = a(68907),
                k = a(21365),
                E = a(54460);
            let j = (e) => {
                    if (!e) return;
                    let t = e.split(':'),
                        a = parseInt(t[0] || '0', 10),
                        i = parseFloat(t[1] || '0');
                    return a > 0 ? parseFloat((60 * a + i).toFixed(2)) : i;
                },
                parseLrc = (e) => {
                    try {
                        return (
                            ((e) => {
                                if ('string' != typeof e) throw TypeError('expect first argument to be a string');
                                let t = e.split('\n'),
                                    a = /\[(\d*:\d*\.?\d*)\]/,
                                    i = new RegExp(a.source + /(.+)/.source),
                                    n = [],
                                    r = [],
                                    l = { scripts: [] };
                                for (let e = 0; e < t.length; e++) {
                                    let a = t[e];
                                    if (a && !1 === i.test(a)) n.push(a);
                                    else break;
                                }
                                n.reduce((e, t) => {
                                    let a = t.trim().slice(1, -1).split(': '),
                                        i = a[0],
                                        n = a[1];
                                    return void 0 !== i && (e[i] = n), e;
                                }, l),
                                    t.splice(0, n.length);
                                let s = 0;
                                let c = l.offset;
                                if (!c) {
                                    let t = /\[offset\s*:\s*([+-]?\d+(?:\.\d+)?)\]/i.exec(e);
                                    t && (c = t[1]);
                                }
                                if (c) {
                                    let e = parseFloat(c);
                                    Number.isNaN(e) || (s = e / 1e3);
                                }
                                let o = new RegExp(''.concat(i.source, '|').concat(a.source));
                                t = t.filter((e) => e && o.test(e));
                                for (let e = 0, n = t.length; e < n; e++) {
                                    let l = t[e],
                                        o = e + 1 < n ? t[e + 1] : null;
                                    if (l) {
                                        let e = i.exec(l),
                                            t = o ? a.exec(o) : null;
                                        if (e) {
                                            let [, a, i] = e,
                                                n = null == t ? void 0 : t[1];
                                            if (a) {
                                                let e = j(a),
                                                    t = j(n);
                                                'number' == typeof e && (e += s);
                                                'number' == typeof t && (t += s);
                                                r.push({ start: e, text: i || '', end: t });
                                            }
                                        }
                                    }
                                }
                                return (l.scripts = r), l;
                            })(e).scripts || []
                        ).map((e) => {
                            let { start: t, end: a, text: i } = e;
                            return (0, l.wg)({ text: i.trim(), fromSec: t, toSec: a });
                        });
                    } catch (e) {
                        return [];
                    }
                },
                normalizeSyncedTiming = (e, t) => {
                    if (!Array.isArray(e) || !e.length || !t || t <= 0) return e;
                    let a = e.at(-1),
                        i = null == a ? void 0 : a.toSec,
                        n = 'number' == typeof i ? i : null == a ? void 0 : a.fromSec;
                    if ('number' != typeof n) return e;
                    if (n <= t + 1) return e;
                    let r = t - n;
                    return e.map((e) => {
                        let t = 'number' == typeof e.fromSec ? Math.max(0, e.fromSec + r) : e.fromSec,
                            a = 'number' == typeof e.toSec ? Math.max(0, e.toSec + r) : e.toSec;
                        return (0, l.wg)({ text: e.text, fromSec: t, toSec: a });
                    });
                },
                lrclibQueue = (() => {
                    let e = Promise.resolve(),
                        t = 0,
                        a = 350,
                        i = 0;
                    let n = (n) => {
                        let r = i;
                        let l = e.then(async () => {
                            if (r !== i) return;
                            let e = Date.now(),
                                l = a - (e - t);
                            l > 0 && (await new Promise((e) => setTimeout(e, l)));
                            if (r !== i) return;
                            return (t = Date.now()), n();
                        });
                        return (e = l.catch(() => {})), l;
                    };
                    return (
                        (n.reset = () => {
                            (i += 1), (t = 0), (e = Promise.resolve());
                        }),
                        n
                    );
                })(),
                lrclibSyncPrefetchByTrackId = new Map(),
                lrclibSyncPrefetchNoResultByTrackId = new Map(),
                lrclibSyncPrefetchInFlight = new Map(),
                LRCLIB_SYNC_PREFETCH_NO_RESULT_TTL_MS = 18e5,
                getNextQueueTrackMeta = (e) => {
                    try {
                        if (!(null == e ? void 0 : e.state)) return logSyncPrefetch('next-miss', { reason: 'sonata-state' }), null;
                        let t = null == e ? void 0 : e.state.queueState.index.value,
                            a = null == e ? void 0 : e.state.queueState.order.value,
                            i = null == e ? void 0 : e.state.queueState.entityList.value;
                        if (!Array.isArray(i)) return logSyncPrefetch('next-miss', { reason: 'entityList' }), null;
                        let n = null;
                        if (Array.isArray(a) && 'number' == typeof t) {
                            n = a[t + 1];
                            logSyncPrefetch('next-from-order', { queueIndex: t, nextIndex: n });
                        }
                        if ('number' != typeof n) return logSyncPrefetch('next-miss', { reason: 'nextIndex' }), null;
                        let r = i[n];
                        if (!(r && !(0, f.Re)(r) && r.entity)) return logSyncPrefetch('next-miss', { reason: 'entityAtIndex', nextIndex: n }), null;
                        let l = (0, I.pE)(r.entity);
                        return logSyncPrefetch('next-hit', { nextIndex: n, trackId: null == l ? void 0 : l.id }), l;
                    } catch (e) {
                        logSyncPrefetch('next-error', { error: null == e ? void 0 : e.message });
                        return null;
                    }
                },
                lrclibSyncSearchToken = 0,
                lrclibSyncControllers = [],
                LRCLIB_SYNC_SEARCH_CACHE_MAX_SIZE = 500,
                LRCLIB_SYNC_SEARCH_CACHE_TTL_MS = 36e5,
                LRCLIB_SYNC_SEARCH_NO_RESULT_TTL_MS = 18e5,
                lrclibSyncSearchResultCache = new Map(),
                lrclibSyncSearchNoResultCache = new Map(),
                lrclibSyncSearchInFlightByKey = new Map(),
                normalizeLrclibSyncCachePart = (e) =>
                    'string' == typeof e
                        ? e
                              .trim()
                              .toLowerCase()
                              .replace(/[\s\W_]+/g, '')
                        : '',
                makeLrclibSyncCacheKey = (e) => {
                    let t = normalizeLrclibSyncCachePart(null == e ? void 0 : e.trackName),
                        a = normalizeLrclibSyncCachePart(null == e ? void 0 : e.artistName),
                        i = null == e ? void 0 : e.duration;
                    return ''
                        .concat(t, '|')
                        .concat(a, '|')
                        .concat('number' == typeof i && i > 0 ? i : '');
                },
                readLrclibSyncCache = (e, t) => {
                    let a = e.get(t);
                    if (!a) return null;
                    if (a.expiresAt <= Date.now()) return e.delete(t), null;
                    return e.delete(t), e.set(t, a), a.value;
                },
                writeLrclibSyncCache = (e, t, a, i, n) => {
                    let r = { value: a, expiresAt: Date.now() + i };
                    e.delete(t), e.set(t, r);
                    for (; e.size > n; ) {
                        let t = e.keys().next();
                        if (t.done) break;
                        e.delete(t.value);
                    }
                },
                getSyncTrackLookup = (e) => {
                    if (!e) return null;
                    let t = null == e ? void 0 : e.title,
                        a = null == e ? void 0 : e.name,
                        i = null == e ? void 0 : e.artists,
                        n = (null == i ? void 0 : i.length) ? i.map((e) => e.name).filter(Boolean) : [],
                        r = n.length > 0 ? n[0] : null,
                        l = null == e ? void 0 : e.durationMs,
                        o = l ? Math.round(l / 1e3) : null,
                        s = null == e ? void 0 : e.duration,
                        c = t || a,
                        d = null == e ? void 0 : e.version,
                        u = null == e ? void 0 : e.trackSource,
                        m = null == e ? void 0 : e.ugcArtistName;
                    return (
                        r || (r = m || null),
                        c && d && 'UGC' !== u && 'string' == typeof d && !/^https?:\/\//.test(d) && (c = ''.concat(c, ' ').concat(d)),
                        c ? { trackName: c, artistName: r, duration: o || s } : null
                    );
                },
                lrclibSyncPrefetchRetryTimer = null,
                lrclibSyncPrefetchSeq = 0,
                lrclibSyncSonataStateRef = null,
                logSyncPrefetch = (e, t) => {
                    try {
                        console.debug('[LRCLib] sync prefetch '.concat(e), t);
                    } catch (e) {}
                },
                fetchLrclibLyrics = async (e) => {
                    let { trackName: trackName, artistName: artistName, duration: durationSec } = e || {};
                    if (!trackName) return null;
                    let cacheKey = makeLrclibSyncCacheKey({ trackName, artistName, duration: durationSec }),
                        cachedResult = readLrclibSyncCache(lrclibSyncSearchResultCache, cacheKey);
                    if (cachedResult) return cachedResult;
                    if (readLrclibSyncCache(lrclibSyncSearchNoResultCache, cacheKey)) return null;
                    let inFlightSearch = lrclibSyncSearchInFlightByKey.get(cacheKey);
                    if (inFlightSearch) return inFlightSearch;
                    let searchPromise = (async () => {
                        let searchToken = ++lrclibSyncSearchToken;
                        let checkToken = () => !1;

                        try {
                            let useText = 'undefined' != typeof window && window.nativeSettings ? window.nativeSettings.get('modSettings.lrclib.useText') : null;
                            if (useText === !1) return null;
                        } catch (e) {}

                        try {
                            console.debug('[LRCLib] sync search', { trackName: trackName, artistName: artistName, duration: durationSec });
                        } catch (e) {}

                        let allowTitleOnlyFallback = !0;
                        try {
                            let setting =
                                'undefined' != typeof window && window.nativeSettings ? window.nativeSettings.get('modSettings.lrclib.useTitleOnlyFallback') : null;
                            if ('boolean' == typeof setting) allowTitleOnlyFallback = setting;
                        } catch (e) {}

                        let retryIfAborted = async (attempt, ...args) => {
                            if (attempt && attempt.aborted && checkToken() === !1) {
                                let retry = await fetchResults(...args);
                                return retry || attempt;
                            }
                            return attempt;
                        };

                        let fetchResults = async (trackQuery, artistQuery) => {
                                let requestUrl = 'https://lrclib.net/api/search?track_name='.concat(encodeURIComponent(trackQuery));
                                if (artistQuery) requestUrl = requestUrl.concat('&artist_name=', encodeURIComponent(artistQuery));
                                return lrclibQueue(async () => {
                                    let controller = new AbortController(),
                                        timeoutId = setTimeout(() => controller.abort(), 1e4);
                                    try {
                                        lrclibSyncControllers.push(controller);
                                    } catch (e) {}
                                    try {
                                        let response = await fetch(requestUrl, { signal: controller.signal });
                                        if (!response.ok) return { items: null, aborted: !1 };
                                        let payload = await response.json();
                                        console.debug(
                                            '[LRCLib] fetch response',
                                            Array.isArray(payload)
                                                ? payload.map((e) => {
                                                      let t = e?.syncedLyrics ? parseLrc(e.syncedLyrics) : [];
                                                      return t.find((e) => 'number' == typeof e.fromSec)?.fromSec ?? null;
                                                  })
                                                : [],
                                        );
                                        console.debug('[LRCLib] sync response', { count: Array.isArray(payload) ? payload.length : 0 });
                                        return { items: Array.isArray(payload) && payload.length ? payload : null, aborted: !1 };
                                    } catch (error) {
                                        let aborted = error?.name === 'AbortError';
                                        aborted ? console.debug('[LRCLib] sync request aborted') : console.debug('[LRCLib] sync request failed', error);
                                        return { items: null, aborted };
                                    } finally {
                                        try {
                                            lrclibSyncControllers = lrclibSyncControllers.filter((e) => e !== controller);
                                        } catch (e) {}
                                        clearTimeout(timeoutId);
                                    }
                                });
                            },
                            normalizeTitle = (e) => ('string' != typeof e ? '' : e.toLowerCase().replace(/[\s\W_]+/g, '')),
                            splitTrackTitle = (e) => {
                                if ('string' != typeof e) return null;
                                let separators = [' - ', ' — ', ' – '];
                                for (let sep of separators) {
                                    if (e.includes(sep)) {
                                        let parts = e.split(sep),
                                            left = parts[0]?.trim() || '',
                                            right = parts.slice(1).join(sep).trim();
                                        if (left && right) return { left, right };
                                    }
                                }
                                return null;
                            },
                            getTitleVariants = (e) => {
                                let t = [];
                                if ('string' == typeof e) {
                                    let a = e.trim();
                                    if (a) {
                                        t.push(a);
                                        let split = splitTrackTitle(a);
                                        if (split) {
                                            split.left && t.push(split.left);
                                            split.right && t.push(split.right);
                                        }
                                    }
                                }
                                return t;
                            };
                        let normalizedTitles = allowTitleOnlyFallback ? getTitleVariants(trackName).map(normalizeTitle).filter(Boolean) : [];

                        let baseTrackName = trackName,
                            baseArtistName = artistName;

                        try {
                            let artistAttempt = baseTrackName && baseArtistName ? await fetchResults(baseTrackName, baseArtistName) : null;
                            if (checkToken()) return null;
                            artistAttempt = await retryIfAborted(artistAttempt, baseTrackName, baseArtistName);
                            if (checkToken()) return null;

                            let resultsWithArtist = artistAttempt && artistAttempt.items ? artistAttempt.items : null;
                            let usedLooseQuery = !1;
                            let fallbackAttempt = resultsWithArtist || !baseTrackName || !allowTitleOnlyFallback ? null : await fetchResults(baseTrackName);
                            if (checkToken()) return null;
                            fallbackAttempt = await retryIfAborted(fallbackAttempt, baseTrackName);
                            if (checkToken()) return null;

                            let results = resultsWithArtist || (fallbackAttempt && fallbackAttempt.items ? fallbackAttempt.items : null);
                            if (checkToken()) return null;
                            if (!resultsWithArtist && fallbackAttempt && fallbackAttempt.items) usedLooseQuery = !0;

                            if (!results && trackName) {
                                let splitInfo = splitTrackTitle(trackName);
                                if (splitInfo) {
                                    if (!results && splitInfo.right && splitInfo.left) {
                                        let splitAttempt = await fetchResults(splitInfo.right, splitInfo.left);
                                        if (checkToken()) return null;
                                        splitAttempt = await retryIfAborted(splitAttempt, splitInfo.right, splitInfo.left);
                                        if (checkToken()) return null;
                                        results = splitAttempt && splitAttempt.items ? splitAttempt.items : null;
                                    }

                                    if (!results && splitInfo.right && allowTitleOnlyFallback) {
                                        let splitFallback = await fetchResults(splitInfo.right);
                                        if (checkToken()) return null;
                                        splitFallback = await retryIfAborted(splitFallback, splitInfo.right);
                                        if (checkToken()) return null;
                                        results = splitFallback && splitFallback.items ? splitFallback.items : null;
                                    }

                                    if (!results && splitInfo.left && splitInfo.right) {
                                        let reverseAttempt = await fetchResults(splitInfo.left, splitInfo.right);
                                        if (checkToken()) return null;
                                        reverseAttempt = await retryIfAborted(reverseAttempt, splitInfo.left, splitInfo.right);
                                        if (checkToken()) return null;
                                        results = reverseAttempt && reverseAttempt.items ? reverseAttempt.items : null;
                                    }

                                    if (!results && splitInfo.left && allowTitleOnlyFallback) {
                                        let reverseFallback = await fetchResults(splitInfo.left);
                                        if (checkToken()) return null;
                                        reverseFallback = await retryIfAborted(reverseFallback, splitInfo.left);
                                        if (checkToken()) return null;
                                        results = reverseFallback && reverseFallback.items ? reverseFallback.items : null;
                                        if (results) usedLooseQuery = !0;
                                    }
                                }
                            }
                            if (!results)
                                return (
                                    writeLrclibSyncCache(
                                        lrclibSyncSearchNoResultCache,
                                        cacheKey,
                                        !0,
                                        LRCLIB_SYNC_SEARCH_NO_RESULT_TTL_MS,
                                        LRCLIB_SYNC_SEARCH_CACHE_MAX_SIZE,
                                    ),
                                    null
                                );

                            if (usedLooseQuery && normalizedTitles.length > 0) {
                                results = results.filter((e) => normalizedTitles.includes(normalizeTitle(e.trackName || e.track_name || e.title || e.name)));
                            }

                            if (usedLooseQuery && baseArtistName) {
                                let normalizeArtist = (e) => ('string' != typeof e ? '' : e.toLowerCase().replace(/[\s\W_]+/g, ''));
                                let expectedArtist = normalizeArtist(baseArtistName);
                                let artistMatches = results.filter((e) => {
                                    let artistStr =
                                        e.artistName || e.artist_name || e.artist || (Array.isArray(e.artists) ? e.artists.map((e) => e?.name || '').join(' ') : '');
                                    let normalizedArtist = normalizeArtist(artistStr);
                                    return (
                                        normalizedArtist &&
                                        (normalizedArtist === expectedArtist || normalizedArtist.includes(expectedArtist) || expectedArtist.includes(normalizedArtist))
                                    );
                                });
                                if (artistMatches.length > 0) results = artistMatches;
                            }

                            results = results.filter((e) => !e.instrumental);
                            if (!results.length)
                                return (
                                    writeLrclibSyncCache(
                                        lrclibSyncSearchNoResultCache,
                                        cacheKey,
                                        !0,
                                        LRCLIB_SYNC_SEARCH_NO_RESULT_TTL_MS,
                                        LRCLIB_SYNC_SEARCH_CACHE_MAX_SIZE,
                                    ),
                                    null
                                );

                            console.debug('[LRCLib] sync filtered', { count: results.length, usedArtist: !usedLooseQuery });

                            let scoreSynced = (e) => {
                                if (!e || !e.syncedLyrics) return null;
                                let lines = parseLrc(e.syncedLyrics);
                                if (!lines.length) return null;
                                let textLines = lines.filter((e) => e && e.text && e.text.trim().length > 0);
                                let activeLines = textLines.length ? textLines : lines;
                                let startSec = activeLines[0] && activeLines[0].fromSec ? activeLines[0].fromSec : null;
                                let endInfo = activeLines.length > 0 ? activeLines[activeLines.length - 1] : null;
                                let endSec = endInfo && endInfo.toSec ? endInfo.toSec : endInfo && endInfo.fromSec ? endInfo.fromSec : null;
                                if ('number' != typeof startSec || 'number' != typeof endSec) return null;

                                let score = 0;
                                if (durationSec && durationSec > 0) {
                                    let lyricsRange = Math.max(0, endSec - startSec);
                                    let coverage = Math.min(1, lyricsRange / durationSec);
                                    let endPenalty = Math.abs(durationSec - endSec);
                                    let startPenalty = startSec < 0 ? Math.min(30, Math.abs(startSec)) : startSec > 20 ? Math.min(10, (startSec - 20) / 2) : 0;
                                    let overflowPenalty = endSec > durationSec ? Math.min(30, endSec - durationSec) : 0;
                                    score += 120 * coverage - endPenalty - startPenalty - overflowPenalty;
                                    if (coverage < 0.6) score -= 20 * (0.6 - coverage);
                                }
                                if (startSec >= 0) {
                                    let startBonus = Math.max(0, 20 - 4 * startSec);
                                    if (startSec > 2) startBonus -= Math.min(10, 2 * (startSec - 2));
                                    score += startBonus;
                                }
                                if (activeLines.length > 1) {
                                    let intervals = activeLines
                                        .slice(1)
                                        .map((e, i) => e.fromSec - activeLines[i].fromSec)
                                        .filter((i) => i >= 0);
                                    if (intervals.length) {
                                        let avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
                                        if (avgInterval > 8) score -= Math.min(20, avgInterval);
                                    }
                                }
                                return score + Math.min(30, activeLines.length / 2);
                            };

                            let pickBestSynced = (items) => {
                                let scored = items
                                    .map((e) => ({ item: e, score: scoreSynced(e) }))
                                    .filter((e) => e.score != null)
                                    .sort((a, b) => b.score - a.score);
                                return scored[0] && scored[0].item ? scored[0].item : null;
                            };

                            if (durationSec && durationSec > 0) {
                                let withDuration = results.filter((e) => 'number' == typeof e.duration);
                                if (withDuration.length > 0) {
                                    let closeMatches = withDuration.filter((e) => Math.abs(e.duration - durationSec) <= 10);
                                    if (!closeMatches.length)
                                        return (
                                            writeLrclibSyncCache(
                                                lrclibSyncSearchNoResultCache,
                                                cacheKey,
                                                !0,
                                                LRCLIB_SYNC_SEARCH_NO_RESULT_TTL_MS,
                                                LRCLIB_SYNC_SEARCH_CACHE_MAX_SIZE,
                                            ),
                                            null
                                        );
                                    results = closeMatches;
                                }
                            }

                            let selected = pickBestSynced(results) || results[0];

                            if (durationSec && durationSec > 0) {
                                let exactMatches = results.filter((e) => e.duration == durationSec);
                                if (exactMatches.length > 0) {
                                    selected = pickBestSynced(exactMatches) || exactMatches[0];
                                }
                            }

                            if (!selected || !selected.syncedLyrics) {
                                let syncedOptions = results.filter((e) => e && e.syncedLyrics);
                                if (syncedOptions.length > 0) {
                                    let finalBest = syncedOptions[0];
                                    if (durationSec && durationSec > 0) {
                                        let byDuration = syncedOptions
                                            .map((e) => ({ item: e, delta: Math.abs(e.duration - durationSec) }))
                                            .sort((a, b) => a.delta - b.delta);
                                        finalBest = byDuration[0] && byDuration[0].item ? byDuration[0].item : finalBest;
                                    }
                                    selected = finalBest;
                                }
                            }

                            if (!selected || !selected.syncedLyrics)
                                return (
                                    writeLrclibSyncCache(
                                        lrclibSyncSearchNoResultCache,
                                        cacheKey,
                                        !0,
                                        LRCLIB_SYNC_SEARCH_NO_RESULT_TTL_MS,
                                        LRCLIB_SYNC_SEARCH_CACHE_MAX_SIZE,
                                    ),
                                    null
                                );
                            lrclibSyncSearchNoResultCache.delete(cacheKey),
                                writeLrclibSyncCache(lrclibSyncSearchResultCache, cacheKey, selected, LRCLIB_SYNC_SEARCH_CACHE_TTL_MS, LRCLIB_SYNC_SEARCH_CACHE_MAX_SIZE);
                            console.debug('[LRCLib] sync selected', {
                                id: selected?.id,
                                duration: selected?.duration,
                                hasSynced: !!selected?.syncedLyrics,
                            });
                            return selected;
                        } catch (e) {
                            console.debug('[LRCLib] sync search failed', e);
                            return null;
                        }
                    })();
                    lrclibSyncSearchInFlightByKey.set(cacheKey, searchPromise);
                    searchPromise.finally(() => {
                        lrclibSyncSearchInFlightByKey.get(cacheKey) === searchPromise && lrclibSyncSearchInFlightByKey.delete(cacheKey);
                    });
                    return searchPromise;
                },
                L = l.gK.model('SyncLyricsLine', { text: l.gK.string, fromSec: l.gK.number, toSec: l.gK.maybe(l.gK.number) }).views((e) => ({
                    get key() {
                        return ''.concat(e.fromSec, ':').concat(e.toSec);
                    },
                })),
                w = l.gK
                    .compose(
                        l.gK.model('SyncLyrics', {
                            isVisible: l.gK.optional(l.gK.boolean, !1),
                            lines: l.gK.maybeNull(l.gK.array(L)),
                            major: l.gK.maybeNull(E.t$),
                            writers: l.gK.maybeNull(l.gK.array(l.gK.string)),
                            lyricId: l.gK.maybeNull(l.gK.number),
                            externalLyricId: l.gK.maybeNull(l.gK.string),
                            currentTrackId: l.gK.maybeNull(l.gK.union(l.gK.string, l.gK.number)),
                            hasLyricsViewed: l.gK.optional(l.gK.boolean, !1),
                        }),
                        A.XT,
                    )
                    .volatile(() => ({ requestToken: 0 }))
                    .views((e) => ({
                        get startSec() {
                            var t;
                            let a = null == (t = e.lines) ? void 0 : t.at(0);
                            return null == a ? void 0 : a.fromSec;
                        },
                        get endSec() {
                            var a;
                            let t = null == (a = e.lines) ? void 0 : a.at(-1);
                            return null == t ? void 0 : t.toSec;
                        },
                        get hasWriters() {
                            var i;
                            return !!(e.writers && (null == (i = e.writers) ? void 0 : i.length) > 0);
                        },
                        get hasInvalidLyrics() {
                            var n;
                            return !!(e.isResolved && (null == (n = e.lines) ? void 0 : n.length) === 0);
                        },
                        hasLyricsForTrack(t) {
                            let a = null == t ? null : String(t),
                                i = null == e.currentTrackId ? null : String(e.currentTrackId);
                            return !!(a && i && a === i && e.isResolved && Array.isArray(e.lines) && e.lines.length > 0);
                        },
                        isLoadingForTrack(t) {
                            let a = null == t ? null : String(t),
                                i = null == e.currentTrackId ? null : String(e.currentTrackId);
                            return !!(a && i && a === i && e.isLoading);
                        },
                    }))
                    .actions((e) => {
                        let isStale = (t, a) => t !== e.requestToken || String(e.currentTrackId) !== String(a),
                            t = {
                                setVisible() {
                                    e.isVisible = !0;
                                },
                                setInvisible() {
                                    e.isVisible = !1;
                                },
                                getActiveLineIndex: (t) => {
                                    if ((e.startSec && t < e.startSec) || (e.endSec && t > e.endSec)) return null;
                                    let a = (e.lines || []).findIndex((e) => (void 0 === e.toSec ? t >= e.fromSec : !!(t >= e.fromSec) && !!(e.toSec >= t)));
                                    return a >= 0 ? a : null;
                                },
                                prefetchTrack: (0, l.L3)(function* (trackMeta, a = 0) {
                                    let i = ++lrclibSyncPrefetchSeq,
                                        n = trackMeta || getNextQueueTrackMeta(lrclibSyncSonataStateRef);
                                    if ((logSyncPrefetch('start', { prefetchId: i, retry: a, explicitTrackId: null == trackMeta ? void 0 : trackMeta.id }), !n)) {
                                        if (a >= 6) return void logSyncPrefetch('stop-no-next', { prefetchId: i, retry: a });
                                        return (
                                            lrclibSyncPrefetchRetryTimer && clearTimeout(lrclibSyncPrefetchRetryTimer),
                                            logSyncPrefetch('retry-scheduled', { prefetchId: i, retry: a + 1 }),
                                            void (lrclibSyncPrefetchRetryTimer = setTimeout(
                                                () => {
                                                    lrclibSyncPrefetchRetryTimer = null;
                                                    try {
                                                        t.prefetchTrack(getNextQueueTrackMeta(lrclibSyncSonataStateRef), a + 1);
                                                    } catch (e) {}
                                                },
                                                250 * (a + 1),
                                            ))
                                        );
                                    }
                                    let r = null == n ? void 0 : n.id,
                                        o = null == r ? null : String(r);
                                    if (!o) return void logSyncPrefetch('skip', { prefetchId: i, reason: 'track-id' });
                                    let s =
                                        !!(null != n && !0 === n.hasSyncLyrics) ||
                                        !!(null != n && !0 === n.isSyncLyricsAvailable) ||
                                        !!(null != n && !0 === n.isSyncLyricsAvailableWithOfflineFeature);
                                    if (s) return void logSyncPrefetch('skip', { prefetchId: i, reason: 'native-sync-available', trackId: o });
                                    if (lrclibSyncPrefetchByTrackId.has(o)) return void logSyncPrefetch('skip', { prefetchId: i, reason: 'cached', trackId: o });
                                    let c = lrclibSyncPrefetchNoResultByTrackId.get(o);
                                    if ('number' == typeof c) {
                                        let e = Date.now() - c;
                                        if (e < LRCLIB_SYNC_PREFETCH_NO_RESULT_TTL_MS)
                                            return void logSyncPrefetch('skip', { prefetchId: i, reason: 'no-result-cached', trackId: o, ageMs: e });
                                        lrclibSyncPrefetchNoResultByTrackId.delete(o);
                                    }
                                    if (lrclibSyncPrefetchInFlight.has(o)) return void logSyncPrefetch('skip', { prefetchId: i, reason: 'inflight', trackId: o });
                                    if (String(o) === String(e.currentTrackId))
                                        return void logSyncPrefetch('skip', { prefetchId: i, reason: 'current-track', trackId: o });
                                    let d = getSyncTrackLookup(n);
                                    if (!(null == d ? void 0 : d.trackName)) return void logSyncPrefetch('skip', { prefetchId: i, reason: 'lookup-missing', trackId: o });
                                    logSyncPrefetch('fetch-start', { prefetchId: i, trackId: o, trackName: d.trackName, artistName: d.artistName, duration: d.duration });
                                    let u = fetchLrclibLyrics(d)
                                        .then((e) => {
                                            let t = !!(e && e.syncedLyrics);
                                            return (
                                                t
                                                    ? (lrclibSyncPrefetchByTrackId.set(o, e), lrclibSyncPrefetchNoResultByTrackId.delete(o))
                                                    : lrclibSyncPrefetchNoResultByTrackId.set(o, Date.now()),
                                                logSyncPrefetch('fetch-done', { prefetchId: i, trackId: o, hasResult: !!e, hasSynced: t }),
                                                e
                                            );
                                        })
                                        .catch((e) => (logSyncPrefetch('fetch-error', { prefetchId: i, trackId: o, error: null == e ? void 0 : e.message }), null))
                                        .finally(() => {
                                            lrclibSyncPrefetchInFlight.delete(o);
                                        });
                                    lrclibSyncPrefetchInFlight.set(o, u), yield u;
                                }),
                                getData: (0, l.L3)(function* (a) {
                                    let { tracksResource: i, modelActionsLogger: r } = (0, l._$)(e);
                                    if (!a) return;
                                    if (e.isLoading && String(e.currentTrackId) === String(a)) return;
                                    let o = ++e.requestToken;
                                    try {
                                        (e.loadingState = n.GuX.PENDING), (e.currentTrackId = a), (e.hasLyricsViewed = !1), (e.lines = null);
                                        let { sonataState: s } = (0, l.Zn)(e),
                                            c = null == s ? void 0 : s.entityMeta;
                                        if (null == c ? void 0 : c.hasSyncLyrics) {
                                            let { downloadUrl: s, major: d, externalLyricId: u, lyricId: m, writers: _ } = yield i.getLyrics((0, k.h3)(a, P.o.LRC));
                                            if (isStale(o, a)) return;
                                            if (!s) throw new Error('Sync lyrics are not available');
                                            let p = yield t.downloadSyncLyrics(s, o, a);
                                            if (isStale(o, a)) return;
                                            if (!(null == p ? void 0 : p.length)) throw new Error('Sync lyrics are not available');
                                            return (
                                                (e.major = (0, E.LT)(d)),
                                                (e.externalLyricId = u),
                                                (e.lyricId = m),
                                                (e.writers = (0, l.wg)(null != _ ? _ : [])),
                                                (e.lines = (0, l.wg)(p)),
                                                logSyncPrefetch('trigger-from-getData', { reason: 'resolved-native', trackId: a }),
                                                void (e.loadingState = n.GuX.RESOLVE)
                                            );
                                        }
                                        throw new Error('Sync lyrics are not available');
                                    } catch (err) {
                                        let { sonataState: s } = (0, l.Zn)(e),
                                            c = null == s ? void 0 : s.entityMeta,
                                            d = getSyncTrackLookup(c),
                                            u = null == a ? null : String(a),
                                            m = u && lrclibSyncPrefetchByTrackId.has(u) ? lrclibSyncPrefetchByTrackId.get(u) : null;
                                        if (!m) {
                                            let e = u ? lrclibSyncPrefetchNoResultByTrackId.get(u) : null;
                                            if ('number' == typeof e) {
                                                if (Date.now() - e < LRCLIB_SYNC_PREFETCH_NO_RESULT_TTL_MS) {
                                                    logSyncPrefetch('fallback-skip', { reason: 'no-result-cached', trackId: u });
                                                } else lrclibSyncPrefetchNoResultByTrackId.delete(u);
                                            }
                                            if (
                                                !m &&
                                                (null == d ? void 0 : d.trackName) &&
                                                !('number' == typeof e && Date.now() - e < LRCLIB_SYNC_PREFETCH_NO_RESULT_TTL_MS)
                                            )
                                                m = yield fetchLrclibLyrics(d);
                                        }
                                        if (isStale(o, a)) return;
                                        if (!m)
                                            return void ((e.loadingState = n.GuX.REJECT),
                                            u && lrclibSyncPrefetchNoResultByTrackId.set(u, Date.now()),
                                            logSyncPrefetch('trigger-from-getData', { reason: 'reject-no-fallback', trackId: a }),
                                            r.error(err));
                                        u &&
                                            (null != m && m.syncedLyrics
                                                ? (lrclibSyncPrefetchByTrackId.set(u, m), lrclibSyncPrefetchNoResultByTrackId.delete(u))
                                                : lrclibSyncPrefetchNoResultByTrackId.set(u, Date.now()));
                                        if (null != m && m.syncedLyrics) {
                                            let i = normalizeSyncedTiming(parseLrc(m.syncedLyrics), null == d ? void 0 : d.duration);
                                            if (i.length > 0)
                                                return (
                                                    (e.major = (0, E.LT)({ id: 1337, name: 'LRCLIB', prettyName: 'LRCLIB' })),
                                                    (e.externalLyricId = null == m.id ? null : String(m.id)),
                                                    (e.lyricId = null),
                                                    (e.writers = (0, l.wg)((null == c ? void 0 : c.artists) ? c.artists.map((e) => e.name).filter(Boolean) : [])),
                                                    (e.hasLyricsViewed = !0),
                                                    (e.lines = (0, l.wg)(i)),
                                                    logSyncPrefetch('trigger-from-getData', { reason: 'resolved-lrclib', trackId: a }),
                                                    void (e.loadingState = n.GuX.RESOLVE)
                                                );
                                        }
                                        (e.loadingState = n.GuX.REJECT),
                                            u && lrclibSyncPrefetchNoResultByTrackId.set(u, Date.now()),
                                            logSyncPrefetch('trigger-from-getData', { reason: 'reject-without-lines', trackId: a }),
                                            r.error(err);
                                    }
                                }),
                                downloadSyncLyrics: (0, l.L3)(function* (t, a, i) {
                                    let { prefixlessResource: n } = (0, l._$)(e),
                                        r = yield n.getLyricsText(t);
                                    if (void 0 !== i && String(e.currentTrackId) !== String(i)) return null;
                                    if ('number' == typeof a && a !== e.requestToken) return null;
                                    return parseLrc(r);
                                }),
                                sendViews: (0, l.L3)(function* (t) {
                                    let { contextId: a, contextType: i } = t,
                                        { lyricViewsResource: r, modelActionsLogger: o } = (0, l._$)(e);
                                    if (e.loadingState === n.GuX.RESOLVE)
                                        try {
                                            if (!e.major || !e.lyricId || !e.externalLyricId || !e.currentTrackId) return;
                                            yield r.sendViews({
                                                lyricViews: [
                                                    {
                                                        id: (0, T.A)(),
                                                        trackId: e.currentTrackId,
                                                        majorId: e.major.id,
                                                        lyricId: e.lyricId,
                                                        externalLyricId: e.externalLyricId,
                                                        lyricFormat: P.o.LRC,
                                                        albumId: i === N.K.Album && a ? a : void 0,
                                                        playlistId: i === N.K.Playlist && a ? a : void 0,
                                                    },
                                                ],
                                            }),
                                                (e.hasLyricsViewed = !0);
                                        } catch (e) {
                                            o.error(e);
                                        }
                                }),
                            };
                        return t;
                    }),
                M = l.gK
                    .model('FullscreenPlayer', {
                        mode: l.gK.maybeNull(l.gK.enumeration(Object.values(C))),
                        shouldRestoreSyncLyrics: l.gK.optional(l.gK.boolean, !1),
                        lastAutoHiddenSyncTrackId: l.gK.maybeNull(l.gK.union(l.gK.string, l.gK.number)),
                        syncLyrics: w,
                        playQueue: S,
                        modal: A.qt,
                    })
                    .views((e) => ({
                        get isSplitMode() {
                            return this.isPlayQueueMode || this.isSyncLyricsMode;
                        },
                        get isSyncLyricsMode() {
                            var t;
                            let { sonataState: a } = (0, l.Zn)(e),
                                i = null == a || null == (t = a.entityMeta) ? void 0 : t.id,
                                n = i ? String(i) : null,
                                r = null == a || null == (t = a.entityMeta) ? void 0 : t.hasLyrics,
                                o = null == a || null == (t = a.entityMeta) ? void 0 : t.hasSyncLyrics,
                                s = null == a || null == (t = a.entityMeta) ? void 0 : t.isSyncLyricsAvailableWithOfflineFeature,
                                c = !!(n && e.syncLyrics.hasLyricsForTrack(n));
                            return e.mode === C.SYNC_LYRICS && (!!(null == a || null == (t = a.entityMeta) ? void 0 : t.isSyncLyricsAvailable) || !!s || !!o || !!r || c);
                        },
                        get isPlayQueueMode() {
                            return e.mode === C.PLAY_QUEUE;
                        },
                    }))
                    .actions((e) => ({
                        setMode(t) {
                            e.mode = t;
                        },
                        showFullscreenPlayerModal() {
                            e.syncLyrics.setInvisible(), e.modal.open();
                        },
                        showSyncLyrics() {
                            var t;
                            (e.mode = C.SYNC_LYRICS), (e.shouldRestoreSyncLyrics = !0), (e.lastAutoHiddenSyncTrackId = null), e.syncLyrics.setVisible();
                            let { sonataState: a } = (0, l.Zn)(e),
                                i = null == a || null == (t = a.entityMeta) ? void 0 : t.id;
                            i && !e.syncLyrics.hasLyricsForTrack(i) && !e.syncLyrics.isLoadingForTrack(i) && e.syncLyrics.getData(i), e.modal.isOpened || e.modal.open();
                        },
                        hideSyncLyrics() {
                            (e.mode = null), (e.shouldRestoreSyncLyrics = !1), (e.lastAutoHiddenSyncTrackId = null), e.syncLyrics.setInvisible();
                        },
                        autoHideSyncLyrics(t) {
                            let a = null != t ? t : e.syncLyrics.currentTrackId;
                            (e.mode = null), (e.shouldRestoreSyncLyrics = !0), (e.lastAutoHiddenSyncTrackId = null == a ? null : a), e.syncLyrics.setInvisible();
                        },
                        maybeRestoreSyncLyrics(t) {
                            var a;
                            if (!e.shouldRestoreSyncLyrics || !t) return;
                            if (null != e.lastAutoHiddenSyncTrackId && String(e.lastAutoHiddenSyncTrackId) === String(t)) return;
                            let { sonataState: i } = (0, l.Zn)(e),
                                n = null == i || null == (a = i.entityMeta) ? void 0 : a.id,
                                r = n ? String(n) : null,
                                o = String(t),
                                s = r && r === o ? (null == i ? void 0 : i.entityMeta) : null,
                                c =
                                    !!(null == s ? void 0 : s.hasSyncLyrics) ||
                                    !!(null == s ? void 0 : s.isSyncLyricsAvailable) ||
                                    !!(null == s ? void 0 : s.isSyncLyricsAvailableWithOfflineFeature) ||
                                    !!(null == s ? void 0 : s.hasLyrics),
                                d = e.syncLyrics.hasLyricsForTrack(t);
                            if (!c && !d) {
                                !e.syncLyrics.isLoadingForTrack(t) && e.syncLyrics.getData(t);
                                return;
                            }
                            (e.mode = C.SYNC_LYRICS), e.syncLyrics.setVisible(), !d && !e.syncLyrics.isLoadingForTrack(t) && e.syncLyrics.getData(t);
                        },
                        showPlayQueue() {
                            (e.mode = C.PLAY_QUEUE), e.playQueue.setVisible(), e.modal.isOpened || e.modal.open();
                        },
                        hidePlayQueue() {
                            (e.mode = null), e.playQueue.setInvisible();
                        },
                        isModeActive: (t) => e.mode === t,
                        reset() {
                            (e.mode = null), (e.shouldRestoreSyncLyrics = !1), (e.lastAutoHiddenSyncTrackId = null);
                        },
                    })),
                B = l.gK.model('QualitySettings', { modal: A.qt });
            var O = a(43426),
                R = a(31500),
                D = a(5956),
                K = a(32692),
                U = a(62662);
            let F = (e) => ({ '--player-average-color-background': (0, k.ye)(null == e ? void 0 : e.averageColor) });
            var z = a(38117),
                V = a.n(z),
                W = a(95424),
                G = a(62443),
                Y = a(25818),
                Q = a(8817);
            let $ = (0, u.createContext)({ difference: 0, isSingleTrackSwitch: !1 }),
                q = () => (0, u.useContext)($);
            var H = a(13528),
                X = a.n(H),
                Z = a(37706);
            let J = (0, d.PA)((e) => {
                let { children: t } = e,
                    {
                        fullscreenPlayer: {
                            playQueue: { itemsKeys: a, isDragAndDropEnabled: i },
                        },
                    } = (0, n.Pjs)();
                return i ? (0, s.jsx)(Z.gB, { items: a, strategy: Z._G, children: t }) : t;
            });
            var ee = a(27510),
                et = a(78028),
                ea = a.n(et);
            let ei = (0, d.PA)(
                    (0, u.forwardRef)((e, t) => {
                        let { children: a, 'data-index': i, className: n, ...r } = e,
                            { isDragging: l, listeners: o, setNodeRef: d, transform: m, transition: _, attributes: p } = (0, Z.gl)({ id: String(i) }),
                            v = (0, u.useCallback)(
                                (e) => {
                                    d(e), 'function' == typeof t && t(e);
                                },
                                [t, d],
                            ),
                            h = { transition: _, '--translate-y': m ? ''.concat(Math.round(m.y), 'px') : void 0 };
                        return (0, s.jsx)('div', {
                            ref: v,
                            'data-index': i,
                            style: h,
                            ...r,
                            className: (0, c.$)(ea().root, n),
                            children: (0, s.jsx)('div', { ref: t, className: (0, c.$)(ea().inner, { [ea().dragging]: l }), ...o, ...p, role: 'listitem', children: a }),
                        });
                    }),
                ),
                en = (e) => {
                    let { index: t, isDragAndDropEnabled: a, blockRef: i, className: l, isRemoveAvailable: o } = e,
                        c = (0, n.eGp)(),
                        d = (0, u.useMemo)(() => {
                            let e = null == c ? void 0 : c.state.queueState.order.value.indexOf(t);
                            return 'number' == typeof e ? [e] : [];
                        }, [t, null == c ? void 0 : c.state.queueState.order.value]),
                        m = r(t),
                        _ = null == m ? void 0 : m.track,
                        p = null == m ? void 0 : m.playContextParams,
                        v = (0, E.iQ)(null != _ ? _ : null, E.NM.HIDE, d),
                        h = (0, Q.c)(() => {
                            v(), (null == i ? void 0 : i.current) && i.current.focus();
                        }),
                        g = (0, ee.L)(() =>
                            _ && p
                                ? (0, s.jsx)(k.Kt, {
                                      track: _,
                                      playContextParams: p,
                                      className: l,
                                      withDNDBlock: a,
                                      handleRemove: o ? h : void 0,
                                      withSecondaryColor: !0,
                                  })
                                : null,
                        );
                    return g ? (a ? (0, s.jsx)(ei, { 'data-index': t, children: g }) : g) : null;
                };
            var er = a(89488),
                el = a.n(er),
                eo = a(73633),
                es = a(76866),
                ec = a(70140),
                ed = a(63006),
                eu = a(15099),
                em = a(14148),
                e_ = a(29064),
                ep = a(66570),
                ev = a(41730),
                eh = a(64336);
            let eg = (e) => !!(e && 'object' == typeof e && ('playlistUuid' in e || 'playlistTitle' in e));
            var ex = (function (e) {
                return (e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Album = 'album'), (e.Track = 'track'), e;
            })({});
            let ey = () => {
                    let { formatMessage: e } = (0, O.A)(),
                        {
                            experiments: t,
                            sonataState: { entityMeta: a },
                            vibe: i,
                        } = (0, n.Pjs)(),
                        r = (0, n.eGp)(),
                        l = null == r ? void 0 : r.state.currentContext.value,
                        o = null == l ? void 0 : l.data.meta,
                        c = null == r ? void 0 : r.state.queueState.currentEntity.value,
                        d = null == a ? void 0 : a.mainArtist,
                        _ = null == a ? void 0 : a.mainAlbum,
                        p = null == a ? void 0 : a.isPodcast,
                        v = t.checkExperiment(n.zal.WebNextUseWaveQueue, 'on'),
                        h = (function (e) {
                            let { isWaveQueueEnabled: t } = e,
                                a = (0, n.eGp)(),
                                i = null == a ? void 0 : a.state.queueState.currentEntity.value;
                            return (0, u.useMemo)(
                                () =>
                                    t
                                        ? (function (e) {
                                              if (!e) return { title: void 0, type: void 0, sourceContextType: void 0 };
                                              let t = e.data.sourceContextType;
                                              if ((0, ep.F)(e)) {
                                                  let a = e.data.meta.title;
                                                  if (a) return { title: a, type: N.K.Album, sourceContextType: t };
                                              }
                                              if ((0, eh.K)(e)) {
                                                  let a = e.data.meta.title;
                                                  if (a) return { title: a, type: N.K.Playlist, sourceContextType: t };
                                              }
                                              if ((0, ev.T)(e)) {
                                                  var a;
                                                  let i = null == (a = e.data.meta.artist) ? void 0 : a.name;
                                                  if (i) return { title: i, type: N.K.Artist, sourceContextType: t };
                                              }
                                              return { title: void 0, type: void 0, sourceContextType: t };
                                          })(null == i ? void 0 : i.sourceContext)
                                        : { title: void 0, type: void 0, sourceContextType: void 0 },
                                [null == i ? void 0 : i.sourceContext, t],
                            );
                        })({ isWaveQueueEnabled: v }),
                        g = (0, ee.L)(() => {
                            if (v && h.type)
                                return (function (e) {
                                    let { sourceType: t, sourceContext: a } = e;
                                    if (a)
                                        switch (t) {
                                            case N.K.Album: {
                                                if (!(0, ep.F)(a)) return;
                                                let e = a.data.meta.id;
                                                if (!e) return;
                                                let { href: t } = (0, n.uvd)('/album/:albumId', { params: { albumId: String(e) } });
                                                return t;
                                            }
                                            case N.K.Artist: {
                                                if (!(0, ev.T)(a)) return;
                                                let e = a.data.meta.id;
                                                if (!e) return;
                                                let { href: t } = (0, n.uvd)('/artist/:artistId', { params: { artistId: String(e) } });
                                                return t;
                                            }
                                            case N.K.Playlist: {
                                                if (!(0, eh.K)(a)) return;
                                                let e = a.data.meta.playlistUuid;
                                                if (!e) return;
                                                let { href: t } = (0, n.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                                                return t;
                                            }
                                            default:
                                                return;
                                        }
                                })({ sourceType: h.type, sourceContext: null == c ? void 0 : c.sourceContext });
                            switch (null == l ? void 0 : l.data.type) {
                                case N.K.Vibe:
                                    var e;
                                    return ((e, t) => {
                                        var a, i;
                                        let r = (0, ec.i)(t) ? (null == t ? void 0 : t.data.parentContext) : null,
                                            l = (0, ec.i)(t) ? (null == t ? void 0 : t.data.parentContextId) : null;
                                        if (r || l)
                                            switch (e) {
                                                case ex.Artist: {
                                                    let { href: e } = (0, n.uvd)('/artist/:artistId', {
                                                        params: { artistId: (null != (a = null == r ? void 0 : r.data.meta.id) ? a : l) || '' },
                                                    });
                                                    return e;
                                                }
                                                case ex.Playlist: {
                                                    let e = null == r ? void 0 : r.data.meta,
                                                        t = eg(e) ? e.playlistUuid : l;
                                                    if (!t) return;
                                                    let { href: a } = (0, n.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: String(t) } });
                                                    return a;
                                                }
                                                case ex.Album: {
                                                    if (!(null == r ? void 0 : r.data.meta.id) && !l) return;
                                                    let { href: e } = (0, n.uvd)('/album/:albumId', {
                                                        params: { albumId: (null != (i = null == r ? void 0 : r.data.meta.id) ? i : l) || '' },
                                                    });
                                                    return e;
                                                }
                                                case ex.Track: {
                                                    if (!l) return;
                                                    if (String(l).includes(':')) {
                                                        let [e, t] = String(l).split(':'),
                                                            { href: a } = (0, n.uvd)('/album/:albumId/track/:trackId', {
                                                                params: { albumId: e || '', trackId: t || '' },
                                                            });
                                                        return a;
                                                    }
                                                    let { href: e } = (0, n.uvd)('/track/:trackId', { params: { trackId: l } });
                                                    return e;
                                                }
                                                default:
                                                    return;
                                            }
                                    })(null == i || null == (e = i.meta) ? void 0 : e.stationType, l);
                                case N.K.Artist: {
                                    if (!(null == d ? void 0 : d.id)) return;
                                    let { href: e } = (0, n.uvd)('/artist/:artistId', { params: { artistId: d.id } });
                                    return e;
                                }
                                case N.K.Playlist: {
                                    if (!eg(o)) return;
                                    let { href: e } = (0, n.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: null == o ? void 0 : o.playlistUuid } });
                                    return e;
                                }
                                case N.K.Album: {
                                    if (!(null == _ ? void 0 : _.id)) return;
                                    let { href: e } = (0, n.uvd)('/album/:albumId', { params: { albumId: _.id } });
                                    return e;
                                }
                                default:
                                    return;
                            }
                        }),
                        x = (0, ee.L)(() => {
                            var e, t, a;
                            if (v && h.title) return h.title;
                            switch (null == l ? void 0 : l.data.type) {
                                case N.K.Vibe:
                                    return ((e, t) => (t && e ? t : (0, s.jsx)(m.A, { id: 'entity-names.my-vibe' })))(
                                        null == i || null == (e = i.meta) ? void 0 : e.stationType,
                                        null == i || null == (t = i.meta) ? void 0 : t.title,
                                    );
                                case N.K.Artist:
                                    return (null == (a = l.data.meta.artist) ? void 0 : a.name) || (null == d ? void 0 : d.name);
                                case N.K.Playlist:
                                    if (!eg(o)) return;
                                    return null == o ? void 0 : o.title;
                                case N.K.Album:
                                    return null == _ ? void 0 : _.title;
                                case N.K.Various:
                                    return (0, s.jsx)(m.A, { id: 'play-queue.now-playing' });
                                default:
                                    return (0, s.jsx)(m.A, { id: 'entity-names.my-vibe' });
                            }
                        }),
                        y = (0, ee.L)(() => {
                            if (v && h.type) {
                                let e = (function (e) {
                                    let { sourceType: t, sourceContext: a, sourceContextType: i } = e,
                                        n = (function (e) {
                                            switch (e) {
                                                case e_.h.SEARCH:
                                                    return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-from-search' });
                                                case e_.h.DOWNLOADED_TRACKS:
                                                    return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-from-downloads' });
                                                case e_.h.MUSIC_HISTORY:
                                                    return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-from-history' });
                                                case e_.h.MUSIC_HISTORY_SEARCH:
                                                    return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-from-history-search' });
                                                case e_.h.ARTIST_MY_COLLECTION:
                                                    return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-from-artist-collection' });
                                                case e_.h.ARTIST_FAMILIAR_FROM_WAVE:
                                                    return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-from-artist-wave' });
                                                default:
                                                    return;
                                            }
                                        })(i);
                                    if (n) return n;
                                    if (i === e_.h.BASED_ON_ENTITY_BY_DEFAULT || void 0 === i)
                                        switch (t) {
                                            case N.K.Album:
                                                if ((0, ep.F)(a) && a.data.meta.type === eu._.PODCAST)
                                                    return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-from-podcast' });
                                                return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-from-album' });
                                            case N.K.Artist:
                                                return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-from-artist-popular-tracks' });
                                            case N.K.Playlist:
                                                return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-from-playlist' });
                                        }
                                })({ sourceType: h.type, sourceContext: null == c ? void 0 : c.sourceContext, sourceContextType: h.sourceContextType });
                                if (e) return e;
                            }
                            switch (null == l ? void 0 : l.data.type) {
                                case N.K.Vibe:
                                    var a, r;
                                    if (!t.checkExperiment(n.zal.WebNextVibeDescription, 'on') || void 0 === (null == i || null == (a = i.meta) ? void 0 : a.description))
                                        return ((e, t) => {
                                            let a = (0, ec.i)(t) ? (null == t ? void 0 : t.data.parentContext) : null;
                                            switch (e) {
                                                case ex.Artist:
                                                    return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-my-wave-by-artist' });
                                                case ex.Playlist:
                                                    return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-my-wave-by-playlist' });
                                                case ex.Album:
                                                    if ((null == a ? void 0 : a.data.type) === eu._.PODCAST)
                                                        return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-my-wave-by-podcast' });
                                                    return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-my-wave-by-album' });
                                                case ex.Track:
                                                    return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-my-wave-by-track' });
                                                default:
                                                    return (0, s.jsx)(m.A, { id: 'play-queue.now-playing' });
                                            }
                                        })(null == i || null == (r = i.meta) ? void 0 : r.stationType, l);
                                    if (null == i ? void 0 : i.isMyVibe) return e({ id: 'play-queue.now-playing' });
                                    return e({ id: 'play-queue.now-playing-by-entity' }, { entity: null == i ? void 0 : i.meta.getDescription() });
                                case N.K.Artist:
                                    return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-from-artist-popular-tracks' });
                                case N.K.Playlist:
                                    return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-from-playlist' });
                                case N.K.Album:
                                    if (p) return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-from-podcast' });
                                    return (0, s.jsx)(m.A, { id: 'play-queue.now-playing-from-album' });
                                default:
                                    return;
                            }
                        }),
                        b = (0, ee.L)(() => ((0, ed.p)(l) ? (0, s.jsx)(m.A, { id: 'entity-names.my-vibe' }) : x));
                    return {
                        url: g,
                        title: x,
                        subTitle: y,
                        vibeBlockTitle: b,
                        vibeBlockSubTitle: (0, ee.L)(() => {
                            switch (null == l ? void 0 : l.data.type) {
                                case N.K.Artist:
                                    return (0, s.jsx)(m.A, { id: 'play-queue.my-wave-by-artist' });
                                case N.K.Playlist:
                                    return (0, s.jsx)(m.A, { id: 'play-queue.my-wave-by-playlist' });
                                case N.K.Album:
                                    return (0, s.jsx)(m.A, { id: 'play-queue.my-wave-by-album' });
                                default:
                                    return;
                            }
                        }),
                        vibeBlockAgent: (0, ee.L)(() => {
                            var e, t, a;
                            switch (null == l ? void 0 : l.data.type) {
                                case N.K.Album:
                                    return (0, es.KU)({ animationUri: '', cover: { uri: l.data.meta.coverUri }, entity: { type: em.h.ALBUM } });
                                case N.K.Artist:
                                    return (0, es.KU)({
                                        animationUri: '',
                                        cover: { uri: null == (t = l.data.meta.artist) || null == (e = t.cover) ? void 0 : e.uri },
                                        entity: { type: em.h.ARTIST },
                                    });
                                case N.K.Playlist:
                                    return (0, es.KU)({
                                        animationUri: '',
                                        cover: { uri: null == (a = l.data.meta.cover) ? void 0 : a.uri },
                                        entity: { type: em.h.PLAYLIST },
                                    });
                                case N.K.Various:
                                    return (0, es.KU)({
                                        animationUri: '',
                                        cover: { uri: 'avatars.mds.yandex.net/get-music-misc/2419084/img.686688add03ee35062c02822/%%' },
                                        entity: { type: em.h.TRACK },
                                    });
                            }
                        }),
                    };
                },
                eb = { src: '/_next/static/media/vibeCover.c55d574d.png' };
            var eA = a(27319),
                eC = a.n(eA);
            let eN = (0, d.PA)(() => {
                    let { experiments: e } = (0, n.Pjs)(),
                        t = (0, n.eGp)(),
                        { vibeBlockTitle: a, vibeBlockSubTitle: i, vibeBlockAgent: r } = ey(),
                        l = (0, u.useCallback)(
                            (e) => {
                                (0, eo.P)(e, eC().ripple), null == t || t.moveForward();
                            },
                            [t],
                        ),
                        o = (0, ee.L)(() =>
                            e.checkExperiment(n.zal.WebNextWaveAgentExperiment, 'on') && r
                                ? (0, s.jsx)(es.nr, { agent: r, shouldShowControl: !1 })
                                : (0, s.jsx)(p.Image, {
                                      src: eb.src,
                                      className: eC().vibeCover,
                                      fit: 'cover',
                                      'aria-hidden': !0,
                                      ...(0, R.Am)(R.e8.player.PLAY_QUEUE_VIBE_BLOCK_IMAGE),
                                  }),
                        );
                    return (0, s.jsxs)('div', {
                        className: eC().root,
                        onClick: l,
                        ...(0, R.Am)(R.e8.player.PLAY_QUEUE_VIBE_BLOCK),
                        children: [
                            o,
                            (0, s.jsxs)('div', {
                                children: [
                                    (0, s.jsx)(v.Caption, {
                                        variant: 'div',
                                        size: 'm',
                                        className: eC().title,
                                        ...(0, R.Am)(R.e8.player.PLAY_QUEUE_VIBE_BLOCK_TITLE),
                                        children: a,
                                    }),
                                    (0, s.jsx)(v.Caption, {
                                        variant: 'div',
                                        size: 'm',
                                        className: eC().vibeTitle,
                                        ...(0, R.Am)(R.e8.player.PLAY_QUEUE_VIBE_BLOCK_VIBE_TITLE),
                                        children: i,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                ef = (0, d.PA)(() => {
                    let {
                            fullscreenPlayer: {
                                playQueue: { afterTracksIds: e, isVibeBlockShowed: t, isDragAndDropEnabled: a, currentIndex: i },
                            },
                            sonataState: { isContextRepeatMode: r, isVibeContext: l },
                            experiments: o,
                        } = (0, n.Pjs)(),
                        d = (0, n.eGp)(),
                        _ = null == d ? void 0 : d.state.queueState.order.value,
                        p = o.checkExperiment(n.zal.WebNextUseWaveQueue, 'on'),
                        h = !l || p,
                        { isMovingForward: g, isMovingBackward: x, difference: y, isSingleTrackSwitch: b } = q(),
                        A = i - y,
                        C = (0, u.useId)(),
                        N = (0, u.useRef)(null);
                    return r && 0 === e.length
                        ? (0, s.jsx)('div', { className: el().root, ...(0, R.Am)(R.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK) })
                        : (0, s.jsxs)('div', {
                              className: el().root,
                              ...(0, R.Am)(R.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK),
                              children: [
                                  (0, s.jsx)(v.Caption, {
                                      variant: 'div',
                                      size: 'm',
                                      className: (0, c.$)(el().title, { [el().title_withDnD]: a }),
                                      ...(0, R.Am)(R.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK_TITLE),
                                      children: (0, s.jsx)(m.A, { id: 'play-queue.next-in' }),
                                  }),
                                  (0, s.jsx)(J, {
                                      children: (0, s.jsxs)('div', {
                                          tabIndex: 0,
                                          ref: N,
                                          className: (0, c.$)(el().animatedContent, {
                                              [el().animatedContent_moveToTop]: g,
                                              [el().animatedContent_moveFromTop]: x && !b,
                                              [el().animatedContent_moveFromTopSingleTrack]: x && b,
                                          }),
                                          children: [
                                              e.map((e) =>
                                                  (null == _ ? void 0 : _[A]) === e
                                                      ? (0, s.jsx)(
                                                            'div',
                                                            {
                                                                className: el().prevTrack,
                                                                children: (0, s.jsx)(en, { index: e, isDragAndDropEnabled: a, isRemoveAvailable: h }, e),
                                                            },
                                                            C,
                                                        )
                                                      : (0, s.jsx)(en, { index: e, isDragAndDropEnabled: a, blockRef: N, isRemoveAvailable: h }, e),
                                              ),
                                              t && (0, s.jsx)(eN, {}),
                                          ],
                                      }),
                                  }),
                              ],
                          });
                });
            var eI = a(25358),
                eS = a.n(eI);
            let eT = (0, d.PA)((e) => {
                    let { forwardRef: t, scrollToNowPlayingBlock: a } = e,
                        {
                            fullscreenPlayer: {
                                playQueue: { beforeTracksIds: i, isDragAndDropEnabled: r, currentIndex: l },
                            },
                            sonataState: { isVibeContext: o },
                            experiments: d,
                        } = (0, n.Pjs)(),
                        m = (0, n.eGp)(),
                        _ = null == m ? void 0 : m.state.queueState.order.value,
                        p = d.checkExperiment(n.zal.WebNextUseWaveQueue, 'on'),
                        v = !o || p;
                    (0, u.useEffect)(() => {
                        a();
                        let e = new ResizeObserver(() => a());
                        return (
                            'function' != typeof t && (null == t ? void 0 : t.current) && e.observe(t.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [t, a]);
                    let { isMovingForward: h, isMovingBackward: g, difference: x, isSingleTrackSwitch: y } = q(),
                        b = l - x,
                        A = (0, u.useId)();
                    return (0, s.jsx)('div', {
                        className: eS().root,
                        ref: t,
                        children: (0, s.jsx)(J, {
                            children: (0, s.jsx)('div', {
                                className: (0, c.$)(eS().animatedContent, {
                                    [eS().animatedContent_moveToBottom]: g,
                                    [eS().animatedContent_moveFromBottom]: h && !y,
                                    [eS().animatedContent_moveFromBottomSingleTrack]: h && y,
                                }),
                                ...(0, R.Am)(R.e8.player.PLAY_QUEUE_BEFORE_PLAYING_BLOCK),
                                children:
                                    null == i
                                        ? void 0
                                        : i.map((e) =>
                                              (null == _ ? void 0 : _[b]) === e
                                                  ? (0, s.jsx)(
                                                        'div',
                                                        {
                                                            className: eS().prevTrack,
                                                            children: (0, s.jsx)(en, { index: e, isDragAndDropEnabled: r, isRemoveAvailable: v }, e),
                                                        },
                                                        A,
                                                    )
                                                  : (0, s.jsx)(en, { index: e, isDragAndDropEnabled: r, isRemoveAvailable: v }, e),
                                          ),
                            }),
                        }),
                    });
                }),
                eP = (0, u.forwardRef)((e, t) => (0, s.jsx)(eT, { forwardRef: t, ...e }));
            var ek = a(95296),
                eE = a(19713),
                ej = a(92803),
                eL = a(91724),
                ew = a.n(eL);
            let eM = (e) => {
                    let { index: t } = e,
                        a = r(t),
                        i = null == a ? void 0 : a.track,
                        n = null == a ? void 0 : a.playContextParams;
                    return i && n
                        ? (0, s.jsx)('div', {
                              className: ew().root,
                              children: (0, s.jsx)(k.Kt, {
                                  track: i,
                                  playContextParams: n,
                                  draggingClassName: ew().dots,
                                  className: ew().noHoverItem,
                                  withDNDBlock: !0,
                                  isDragging: !0,
                                  withSecondaryColor: !0,
                              }),
                          })
                        : null;
                },
                eB = (0, d.PA)((e) => {
                    let { children: t } = e,
                        {
                            fullscreenPlayer: {
                                playQueue: { isDragAndDropEnabled: a },
                            },
                        } = (0, n.Pjs)(),
                        { activeId: i, handleDragStart: r, handleDragCancel: l, sensors: o } = (0, n.YcA)(),
                        c = (0, u.useCallback)((e) => {
                            let { active: t, over: a } = e;
                            if (!t.id || !(null == a ? void 0 : a.id)) return;
                        }, []),
                        d = (0, u.useMemo)(() => {
                            if (i)
                                return (0, ej.createPortal)(
                                    (0, s.jsx)(ek.Hd, { dropAnimation: { duration: 0 }, children: (0, s.jsx)(eM, { index: Number(i) }) }),
                                    window.document.body,
                                );
                        }, [i]);
                    return a
                        ? (0, s.jsxs)(ek.Mp, {
                              sensors: o,
                              collisionDetection: ek.fp,
                              onDragStart: r,
                              onDragEnd: c,
                              onDragCancel: l,
                              modifiers: [eE.FN],
                              children: [t, d],
                          })
                        : t;
                });
            var eO = a(882),
                eR = a.n(eO);
            let eD = (0, d.PA)(() => {
                let {
                        fullscreenPlayer: {
                            modal: e,
                            playQueue: { isDragAndDropEnabled: t },
                        },
                        sonataState: { isContextRepeatMode: a, isOneRepeatMode: i, shuffle: r },
                    } = (0, n.Pjs)(),
                    { formatMessage: l } = (0, O.A)(),
                    { url: o, title: d, subTitle: m } = ey(),
                    _ = (0, n.Cz$)({ onClick: e.close }),
                    p = (0, u.useMemo)(() => {
                        let e = o ? {} : (0, R.Am)(R.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE),
                            t = (0, s.jsx)(v.Heading, {
                                variant: 'h2',
                                size: 'm',
                                weight: 'bold',
                                lineClamp: 1,
                                className: (0, c.$)(eR().heading, { [eR().heading_withOffset]: !m }),
                                ...e,
                                children: d,
                            });
                        return o
                            ? (0, s.jsx)(h.N_, {
                                  className: eR().title,
                                  containerClassName: eR().linkContainer,
                                  textClassName: eR().linkText,
                                  icon: (0, s.jsx)(D.Icon, { className: eR().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                  iconPosition: 'right',
                                  href: o,
                                  onClick: _,
                                  ...(0, R.Am)(R.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE),
                                  children: t,
                              })
                            : t;
                    }, [_, m, d, o]),
                    g = (0, ee.L)(() =>
                        a ? l({ id: 'play-queue.repeat-context' }) : i ? l({ id: 'play-queue.repeat-one' }) : r ? l({ id: 'play-queue.shuffle' }) : null,
                    );
                return (0, s.jsxs)('div', {
                    className: (0, c.$)(eR().root, { [eR().root_withDnD]: t }),
                    children: [
                        (0, s.jsx)(v.Caption, {
                            variant: 'div',
                            size: 'm',
                            className: eR().subTitle,
                            ...(0, R.Am)(R.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_SUBTITLE),
                            children: m,
                        }),
                        p,
                        (0, s.jsx)(v.Caption, {
                            variant: 'div',
                            size: 'm',
                            className: eR().modeTitle,
                            ...(0, R.Am)(R.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_MODE_TITLE),
                            children: g,
                        }),
                    ],
                });
            });
            var eK = a(71176),
                eU = a.n(eK);
            let eF = (0, d.PA)(() => {
                    var e, t;
                    let { from: a } = (0, n.fyy)(),
                        {
                            fullscreenPlayer: {
                                playQueue: { currentIndex: i, isDragAndDropEnabled: r },
                            },
                            sonataState: { entityMeta: l },
                        } = (0, n.Pjs)(),
                        { isMovingForward: o, isMovingBackward: d } = q(),
                        u = (0, n.eGp)(),
                        m = null == u || null == (t = u.state.currentContext) || null == (e = t.value) ? void 0 : e.data;
                    if (!m || !l) return null;
                    let _ = { contextData: { ...m, from: a }, queueParams: { index: i, entityId: l.id } };
                    return (0, s.jsxs)('div', {
                        className: eU().root,
                        ...(0, R.Am)(R.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK),
                        children: [
                            (0, s.jsx)(eD, {}),
                            (0, s.jsx)(k.Kt, {
                                track: l,
                                playContextParams: _,
                                className: (0, c.$)(eU().track, eU().important, { [eU().track_withDnD]: r, [eU().track_moveFromTop]: d, [eU().track_moveFromBottom]: o }),
                                withSecondaryColor: !0,
                            }),
                        ],
                    });
                }),
                ez = () => {
                    let { style: e, contextValue: t } = (() => {
                            var e;
                            let {
                                    fullscreenPlayer: {
                                        playQueue: { updateTracks: t, hiddenTrackIds: a },
                                    },
                                } = (0, n.Pjs)(),
                                i = (0, n.eGp)(),
                                [r, l] = (0, u.useState)(),
                                o = (0, u.useRef)(void 0),
                                s = (0, u.useRef)(void 0),
                                c = (0, u.useRef)(void 0),
                                { state: d, handleDebouncedToggle: m } = (0, W.F)({ delay: 600, throttleTimeout: 600 }),
                                { state: _, handleDebouncedToggle: p } = (0, W.F)({ delay: 600, throttleTimeout: 600 }),
                                v = (0, Q.c)(() => {
                                    var e;
                                    let a = null == i ? void 0 : i.state.queueState.entityList.value,
                                        n = null == i ? void 0 : i.state.queueState.index.value,
                                        r = null == i ? void 0 : i.state.queueState.order.value,
                                        l = null == i || null == (e = i.state.currentContext.value) ? void 0 : e.data.type;
                                    a && 'number' == typeof n && r && l && t(a, n, r, l);
                                }),
                                h = (0, Q.c)(() => {
                                    var e;
                                    let t = null == i ? void 0 : i.state.queueState.index.value,
                                        n = null == i || null == (e = i.state.currentContext.value) ? void 0 : e.data.type,
                                        r = o.current;
                                    if ('number' == typeof t && 'number' == typeof r) {
                                        let e = a.reduce((e, t) => (t < r ? e + 1 : e - 1), 0),
                                            i = t - r;
                                        c.current = i;
                                        let o = n !== s.current,
                                            d = 1 === Math.abs(i) ? i : i + e;
                                        i > 0 || o ? (m(), l(o ? 1 : d)) : i < 0 && (p(), l(d));
                                    }
                                    (o.current = t), (s.current = n);
                                });
                            (0, u.useEffect)(() => {
                                let e =
                                    null == i
                                        ? void 0
                                        : i.state.queueState.index.onChange(() => {
                                              v(), h();
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [h, v, null == i ? void 0 : i.state.queueState.index]),
                                (0, u.useEffect)(() => {
                                    let e = null == i ? void 0 : i.state.queueState.shuffle.onChange(v),
                                        t = null == i ? void 0 : i.state.queueState.entityList.onChange(v),
                                        a = null == i ? void 0 : i.state.queueState.order.onChange(v);
                                    return () => {
                                        null == e || e(), null == t || t(), null == a || a();
                                    };
                                }, [
                                    v,
                                    null == i ? void 0 : i.state.queueState.entityList,
                                    null == i ? void 0 : i.state.queueState.index,
                                    null == i ? void 0 : i.state.queueState.order,
                                    null == i ? void 0 : i.state.queueState.shuffle,
                                ]);
                            let g = (0, u.useMemo)(() => {
                                    let e = 56 * (r || 1);
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
                                }, [r]),
                                x = 1 === Math.abs(null != r ? r : 0);
                            return {
                                style: g,
                                contextValue: { isMovingForward: d, isMovingBackward: _, difference: null != (e = c.current) ? e : 0, isSingleTrackSwitch: x },
                            };
                        })(),
                        a = (0, u.useRef)(null),
                        i = (0, u.useRef)(null),
                        { state: r, handleDebouncedToggle: l, reset: o } = (0, W.F)({ delay: 1e4, throttleTimeout: 2e3 }),
                        c = (0, u.useCallback)(function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'instant';
                            if (i.current && a.current) {
                                let t = i.current.clientHeight;
                                a.current.scrollTo({ top: t, behavior: e });
                            }
                        }, []);
                    return (
                        (0, u.useEffect)(() => {
                            r || (c('smooth'), o());
                        }, [r, o, c]),
                        (0, u.useEffect)(() => {
                            let e = a.current;
                            return (
                                null == e || e.addEventListener('scroll', l),
                                () => {
                                    null == e || e.removeEventListener('scroll', l);
                                }
                            );
                        }, [l]),
                        (0, s.jsx)(eB, {
                            children: (0, s.jsx)($.Provider, {
                                value: t,
                                children: (0, s.jsx)('div', {
                                    className: X().root,
                                    style: e,
                                    ...(0, R.Am)(R.e8.player.PLAY_QUEUE),
                                    children: (0, s.jsx)('div', {
                                        className: X().content,
                                        ref: a,
                                        children: (0, s.jsxs)('div', {
                                            className: X().scrollContent,
                                            children: [(0, s.jsx)(eP, { ref: i, scrollToNowPlayingBlock: c }), (0, s.jsx)(eF, {}), (0, s.jsx)(ef, {})],
                                        }),
                                    }),
                                }),
                            }),
                        })
                    );
                },
                eV = (0, u.createContext)({});
            var eW = a(5128),
                eG = a.n(eW),
                eY = a(68326),
                eQ = a.n(eY);
            let e$ = (0, d.PA)((e) => {
                let { className: t, icon: a } = e,
                    { sonataState: i } = (0, n.Pjs)(),
                    r = (0, u.useCallback)(
                        (e) => {
                            let t = { animationDelay: ''.concat((e + 1) * 0.275, 's'), animationDuration: ''.concat(1.1, 's, ').concat(1.1, 's') };
                            return a
                                ? (0, u.cloneElement)(a, {
                                      className: (0, c.$)(eQ().element, eQ().element_withIcon, { [eQ().element_paused]: i.isPaused }),
                                      key: e,
                                      style: t,
                                  })
                                : (0, s.jsx)(
                                      'div',
                                      { className: (0, c.$)(eQ().element, eQ().element_withDefaultElement, { [eQ().element_paused]: i.isPaused }), style: t },
                                      e,
                                  );
                        },
                        [a, i],
                    );
                return (0, s.jsx)('div', { className: (0, c.$)(eQ().root, t), children: Array.from({ length: 4 }, (e, t) => r(t)) });
            });
            var eq = a(91657),
                eH = a(36553),
                eX = (function (e) {
                    return (e.INTRO = 'intro'), (e.PREPARE = 'prepare'), (e.PLAYING = 'playing'), (e.OUTRO = 'outro'), e;
                })({}),
                eZ = a(25886),
                eJ = a.n(eZ);
            let e0 = (0, d.PA)(() => {
                var e, t, a;
                let { formatMessage: i } = (0, O.A)(),
                    {
                        fullscreenPlayer: { syncLyrics: r },
                    } = (0, n.Pjs)();
                return (0, s.jsxs)('footer', {
                    className: eJ().root,
                    children: [
                        r.hasWriters &&
                            (0, s.jsx)(v.Caption, {
                                className: eJ().writers,
                                variant: 'div',
                                size: 'l',
                                weight: 'medium',
                                children: i({ id: 'entity-names.authors' }, { authors: null == (e = r.writers) ? void 0 : e.join(', ') }),
                            }),
                        (null == (t = r.major) ? void 0 : t.prettyName) &&
                            (0, s.jsx)(v.Caption, {
                                className: eJ().major,
                                variant: 'div',
                                size: 'l',
                                weight: 'medium',
                                children: i({ id: 'entity-names.source' }, { source: null == (a = r.major) ? void 0 : a.prettyName }),
                            }),
                    ],
                });
            });
            var e1 = a(95744),
                e2 = a.n(e1);
            let e8 = (e) => {
                let { className: t, text: a } = e;
                return (0, s.jsx)('span', { className: (0, c.$)(e2().root, t), children: a });
            };
            var e3 = a(47840),
                e4 = a.n(e3);
            let e5 = (0, d.PA)((e) => {
                var t, a;
                let { state: i, progressPosition: r, shouldShowScrolledLyrics: l, setProgressPosition: o } = e,
                    d = (0, n.eGp)(),
                    m = (0, eH.Mn)(),
                    {
                        fullscreenPlayer: { syncLyrics: _ },
                    } = (0, n.Pjs)(),
                    p = (0, u.useCallback)(
                        (e) => (t) => {
                            l &&
                                (t.stopPropagation(),
                                o(e + 0.01),
                                null == d ||
                                    d.setProgress(e + 0.01).catch(() => {
                                        o(r);
                                    }));
                        },
                        [r, o, l, d],
                    ),
                    v = _.getActiveLineIndex(r);
                return (
                    ((e) => {
                        let t = (0, u.useRef)(0),
                            {
                                fullscreenPlayer: { syncLyrics: a },
                                sonataState: { contextId: i, contextType: r },
                            } = (0, n.Pjs)();
                        (0, u.useEffect)(() => {
                            !a.hasLyricsViewed &&
                                null !== e &&
                                'visible' === document.visibilityState &&
                                (t.current++, t.current >= 2 && a.sendViews({ contextId: i, contextType: r }));
                        }, [e, i, r, a]);
                    })(v),
                    (0, u.useEffect)(() => {
                        if (!l) {
                            if (((i === eX.INTRO || i === eX.PREPARE) && m.slideTo(0), i === eX.OUTRO)) {
                                var e;
                                m.slideTo(Number(null == (e = _.lines) ? void 0 : e.length));
                            }
                            null !== v && m.slideTo(v + 1);
                        }
                    }, [v, l, i, m, null == (t = _.lines) ? void 0 : t.length]),
                    null == (a = _.lines)
                        ? void 0
                        : a.map((e, t) => {
                              var a;
                              return (0, s.jsx)(
                                  eH.qr,
                                  {
                                      onClickCapture: p(e.fromSec),
                                      className: (0, c.$)(e4().line, {
                                          [e4().line_last]: t === Number(null == (a = _.lines) ? void 0 : a.length) - 1 && !l,
                                          [e4().line_active]: t === v && !l,
                                      }),
                                      ...(0, R.Am)(R.e8.player.SYNC_LYRICS_LINE),
                                      children: (0, s.jsx)(e8, { text: e.text }),
                                  },
                                  e.key,
                              );
                          })
                );
            });
            e5.displayName = 'SwiperSlide';
            let e6 = { forceToAxis: !0 },
                e7 = (0, d.PA)(() => {
                    let {
                            fullscreenPlayer: { syncLyrics: e },
                            settings: { isMobile: t },
                        } = (0, n.Pjs)(),
                        { progressPosition: a, setProgressPosition: i } = (() => {
                            var e;
                            let t = (0, n.eGp)(),
                                [a, i] = (0, u.useState)(null != (e = null == t ? void 0 : t.state.playerState.progress.value.position) ? e : 0),
                                r = (0, u.useCallback)((e) => {
                                    i(e);
                                }, []);
                            return (
                                (0, u.useEffect)(() => {
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
                                { progressPosition: a, setProgressPosition: r }
                            );
                        })(),
                        { state: r } = ((e) => {
                            let { position: t } = e,
                                {
                                    fullscreenPlayer: { syncLyrics: a },
                                } = (0, n.Pjs)();
                            return {
                                state: (0, u.useMemo)(() => {
                                    let { startSec: e, endSec: i } = a;
                                    return e && e >= 3 && e - t > 0 && e - t <= 3 ? eX.PREPARE : e && e > t ? eX.INTRO : i && t > i ? eX.OUTRO : eX.PLAYING;
                                }, [t, a]),
                            };
                        })({ position: a }),
                        { scrollerClassName: l, footerClassName: o, counterClassName: d } = (0, u.useContext)(eV),
                        { state: m, handleDebouncedToggle: _, reset: p } = (0, W.F)({ delay: 3e3, throttleTimeout: 300 }),
                        { state: v, handleDebouncedToggle: h, reset: g } = (0, W.F)({ delay: 3e3, throttleTimeout: 300 }),
                        x = (0, u.useCallback)(() => {
                            v || _();
                        }, [_, v]),
                        y = (0, u.useCallback)(() => {
                            m && p(), h();
                        }, [h, p, m]),
                        b = (0, u.useCallback)(
                            (e) => {
                                switch (e.code) {
                                    case n.Y_O.KEY_L:
                                    case n.Y_O.KEY_J:
                                    case n.Y_O.ARROW_LEFT:
                                    case n.Y_O.ARROW_RIGHT:
                                        _();
                                }
                            },
                            [_],
                        ),
                        A = (0, u.useMemo)(() => (r === eX.PREPARE ? Math.ceil(Number(e.startSec) - a) : null), [a, r, e.startSec]),
                        C = (0, u.useMemo)(
                            () => (r === eX.PREPARE ? (0, s.jsx)(e8, { className: e4().counterLine, text: A }) : r === eX.INTRO ? (0, s.jsx)(e$, {}) : null),
                            [A, r],
                        );
                    return (
                        ((e) => {
                            let { onSetProgressEventChange: t } = e,
                                a = (0, n.eGp)();
                            (0, u.useEffect)(() => {
                                let e =
                                    null == a
                                        ? void 0
                                        : a.state.playerState.event.onChange((e) => {
                                              e === f.Iu.SET_PROGRESS && t();
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [t, a]);
                        })({ onSetProgressEventChange: g }),
                        (0, u.useEffect)(
                            () => (
                                window.addEventListener('keydown', b),
                                () => {
                                    window.removeEventListener('keydown', b);
                                }
                            ),
                            [b],
                        ),
                        (0, u.useEffect)(
                            () => (
                                window.addEventListener('mousemove', x),
                                () => {
                                    window.removeEventListener('mousemove', x);
                                }
                            ),
                            [x],
                        ),
                        (0, s.jsxs)(eH.RC, {
                            className: (0, c.$)(
                                e4().root,
                                { [e4()['root_'.concat(r)]]: !v, [e4().root_withVisibleUpperLyrics]: m, [e4().root_withVisibleScrolledLyrics]: v },
                                l,
                            ),
                            modules: [eq.FJ, eq.U1],
                            slidesPerView: 'auto',
                            spaceBetween: 32,
                            direction: 'vertical',
                            mousewheel: e6,
                            freeMode: !0,
                            onScroll: y,
                            onTouchMove: t ? y : void 0,
                            allowTouchMove: t,
                            children: [
                                (0, s.jsx)(eH.qr, { className: (0, c.$)(e4().counter, d), children: C }),
                                (0, s.jsx)(e5, { setProgressPosition: i, shouldShowScrolledLyrics: v, state: r, progressPosition: a }),
                                (0, s.jsx)(eH.qr, { className: o, children: (0, s.jsx)(e0, {}) }),
                            ],
                        })
                    );
                }),
                e9 = (0, d.PA)((e) => {
                    let { className: t, counterClassName: a, footerClassName: i, scrollerClassName: r, contentClassName: l, loaderClassName: o } = e,
                        d = (0, u.useRef)(null),
                        sonataRuntimeState = (0, n.eGp)(),
                        {
                            sonataState: { entityMeta: m },
                            fullscreenPlayer: { syncLyrics: _, autoHideSyncLyrics: p },
                            trackLyrics: v,
                        } = (0, n.Pjs)();
                    (0, u.useEffect)(() => {
                        let e = null == m ? void 0 : m.id,
                            t = null != m && !0 === m.hasSyncLyrics,
                            a = null != m && !1 === m.hasSyncLyrics,
                            i = null == m ? void 0 : m.trackSource,
                            n = e && _.currentTrackId !== e && (t || a || !!(null == m ? void 0 : m.hasLyrics) || 'UGC' === i),
                            r = getNextQueueTrackMeta(sonataRuntimeState);
                        lrclibSyncSonataStateRef = sonataRuntimeState;
                        n && _.getData(e), _.prefetchTrack(r);
                    }, [
                        null == m ? void 0 : m.hasSyncLyrics,
                        null == m ? void 0 : m.hasLyrics,
                        null == m ? void 0 : m.trackSource,
                        null == m ? void 0 : m.id,
                        _.currentTrackId,
                        sonataRuntimeState,
                        _,
                    ]);
                    (0, u.useEffect)(() => {
                        let e = null == m ? void 0 : m.id,
                            t = null == e ? null : String(e),
                            a = null == _.currentTrackId ? null : String(_.currentTrackId);
                        if (!t || !a || t !== a) return;
                        if (_.isLoadingForTrack(t)) return;
                        (_.isRejected || _.hasInvalidLyrics) && p(e);
                    }, [null == m ? void 0 : m.id, _.currentTrackId, _.isLoading, _.isRejected, _.hasInvalidLyrics, _.lines, _, p]);
                    let h = (0, u.useMemo)(() => {
                            let e = null == m ? void 0 : m.id,
                                t = e ? String(e) : null,
                                a =
                                    !!(null == m ? void 0 : m.isSyncLyricsAvailable) ||
                                    !!(null == m ? void 0 : m.isSyncLyricsAvailableWithOfflineFeature) ||
                                    !!(null == m ? void 0 : m.hasSyncLyrics) ||
                                    !!(null == m ? void 0 : m.hasLyrics) ||
                                    (!!t && _.hasLyricsForTrack(t));
                            if (_.isResolved) return (0, s.jsx)(e7, { key: null == _.currentTrackId ? 'sync-lyrics-no-track' : String(_.currentTrackId) });
                            if (!a && t && _.isLoadingForTrack(t)) return null;
                            if (_.isRejected || _.hasInvalidLyrics) return null;
                            return (0, s.jsx)(e$, { className: o });
                        }, [
                            null == m ? void 0 : m.id,
                            null == m ? void 0 : m.isSyncLyricsAvailable,
                            null == m ? void 0 : m.isSyncLyricsAvailableWithOfflineFeature,
                            null == m ? void 0 : m.hasSyncLyrics,
                            null == m ? void 0 : m.hasLyrics,
                            _.isLoading,
                            _.currentTrackId,
                            _.lines,
                            _.isResolved,
                            _.isRejected,
                            _.hasInvalidLyrics,
                            o,
                        ]),
                        g = (0, u.useMemo)(() => ({ counterClassName: a, scrollerClassName: r, footerClassName: i }), [a, i, r]);
                    return (0, s.jsx)(eV.Provider, {
                        value: g,
                        children: (0, s.jsx)('div', {
                            ref: d,
                            className: (0, c.$)(eG().root, t),
                            children: (0, s.jsx)('div', { className: (0, c.$)(eG().content, l), ...(0, R.Am)(R.e8.player.SYNC_LYRICS_CONTENT), children: h }),
                        }),
                    });
                });
            var te = a(45427),
                tt = a(39122),
                ta = a.n(tt);
            let ti = (0, d.PA)((e) => {
                    let {
                            className: t,
                            variant: a = 'text',
                            iconSize: i,
                            iconClassName: r,
                            withRipple: l = !1,
                            size: o = 's',
                            forwardRef: d,
                            children: m,
                            color: p,
                            disabled: v = !1,
                        } = e,
                        { formatMessage: h } = (0, O.A)(),
                        {
                            fullscreenPlayer: { isPlayQueueMode: g, hidePlayQueue: x, showPlayQueue: y },
                        } = (0, n.Pjs)(),
                        b = (0, u.useCallback)(() => (g ? x() : y()), [x, g, y]),
                        { scaleAnimation: A, unscaleAnimation: C, handleAnimationEnd: N, handleClick: f } = (0, te.C)({ shouldStartFromUnscale: g, onClick: b });
                    return (0, s.jsx)(_.$, {
                        className: (0, c.$)(ta().root, { [ta().animation_scaled]: A, [ta().animation_unscaled]: C }, t),
                        color: p,
                        onAnimationEnd: N,
                        withRipple: l,
                        variant: a,
                        size: o,
                        radius: 'xxxl',
                        'aria-label': h({ id: 'play-queue.title' }),
                        'aria-pressed': g,
                        onClick: f,
                        icon: (0, s.jsx)(D.Icon, { size: i, className: (0, c.$)(ta().icon, r, { [ta().icon_active]: g }), variant: 'playQueue' }),
                        ref: d,
                        disabled: v,
                        ...(0, R.Am)(R.e8.player.FULLSCREEN_PLAYER_QUEUE_BUTTON),
                        children: m,
                    });
                }),
                tn = (0, u.forwardRef)((e, t) => (0, s.jsx)(ti, { forwardRef: t, ...e }));
            var tr = a(50328),
                tl = a.n(tr);
            let to = (0, d.PA)((e) => {
                    let {
                            className: t,
                            variant: a = 'text',
                            iconSize: i,
                            iconClassName: r,
                            withRipple: l = !1,
                            size: o = 's',
                            forwardRef: d,
                            children: m,
                            color: p,
                            disabled: v = !1,
                        } = e,
                        { formatMessage: h } = (0, O.A)(),
                        {
                            fullscreenPlayer: { isSyncLyricsMode: g, hideSyncLyrics: x, showSyncLyrics: y },
                        } = (0, n.Pjs)(),
                        b = (0, u.useCallback)(() => (g ? x() : y()), [x, g, y]),
                        { scaleAnimation: A, unscaleAnimation: C, handleAnimationEnd: N, handleClick: f } = (0, te.C)({ shouldStartFromUnscale: g, onClick: b }),
                        I = ''.concat(h({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(h({ id: 'warning-messages.can-break-accessibility' }));
                    return (0, s.jsx)(_.$, {
                        className: (0, c.$)(tl().root, { [tl().animation_scaled]: A, [tl().animation_unscaled]: C }, t),
                        color: p,
                        onAnimationEnd: N,
                        withRipple: l,
                        variant: a,
                        size: o,
                        radius: 'xxxl',
                        'aria-label': I,
                        'aria-pressed': g,
                        onClick: f,
                        icon: (0, s.jsx)(D.Icon, { size: i, className: (0, c.$)(tl().icon, r, { [tl().icon_active]: g }), variant: 'syncLyrics' }),
                        ref: d,
                        disabled: v,
                        ...(0, R.Am)(R.e8.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON),
                        children: m,
                    });
                }),
                ts = (0, u.forwardRef)((e, t) => (0, s.jsx)(to, { forwardRef: t, ...e }));
            var tc = a(71372),
                td = a.n(tc);
            let tu = (0, d.PA)(() => {
                var e;
                let [t, a] = (0, u.useState)(!1),
                    { sonataState: i, user: r } = (0, n.Pjs)(),
                    { entityMeta: l } = i,
                    { handleDebouncedToggle: o } = (0, W.F)({ delay: 1500, throttleTimeout: 300 }),
                    d = i.canSpeed && ((null == l ? void 0 : l.isNonMusic) || (null == l || null == (e = l.mainAlbum) ? void 0 : e.isNonMusic)),
                    m = (0, E.KX)(l),
                    _ = (0, u.useCallback)((e) => {
                        e.stopPropagation();
                    }, []),
                    p = (0, ee.L)(() => {
                        if ((null == l || !l.isRemoved) && (null == l ? void 0 : l.isAvailable))
                            return (0, s.jsx)(k._Y, {
                                dismissSettings: { bubbles: { escapeKey: !1 } },
                                track: l,
                                open: t,
                                onOpenChange: a,
                                placement: 'left',
                                icon: (0, s.jsx)(D.Icon, { variant: 'more', size: 'm' }),
                                className: (0, c.$)(td().menuButton, { [td().menuButton_active]: t }),
                                wrapperClassName: td().menuWrapper,
                                onClick: _,
                                size: 'l',
                                ...(0, R.Am)(R.e8.player.FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON),
                            });
                    }),
                    v = (0, u.useMemo)(() => {
                        if (null == l ? void 0 : l.isSyncLyricsAvailable)
                            return (0, s.jsx)(ts, {
                                className: td().syncLyricsButton,
                                iconSize: 'm',
                                size: 'l',
                                variant: 'default',
                                color: 'secondary',
                                disabled: !r.isAuthorized,
                            });
                    }, [null == l ? void 0 : l.isSyncLyricsAvailable, r.isAuthorized]);
                return (
                    (0, u.useEffect)(
                        () => (
                            window.addEventListener('mousemove', o),
                            () => {
                                window.removeEventListener('mousemove', o);
                            }
                        ),
                        [o],
                    ),
                    (0, s.jsxs)('div', {
                        className: (0, c.$)(td().root, { [td().root_visible]: t }),
                        children: [
                            (0, s.jsx)(tn, {
                                className: td().playQueueButton,
                                iconSize: 'm',
                                size: 'l',
                                variant: 'default',
                                color: 'secondary',
                                disabled: !r.isAuthorized,
                            }),
                            (0, s.jsx)(I.$u, { className: td().sonataControls, isMobile: !1, entityMeta: l, isFullscreen: !0 }),
                            p,
                            v,
                            (0, s.jsxs)('div', {
                                className: td().bottomRightButtonsWrapper,
                                children: [
                                    d && (0, s.jsx)(h.ig, { className: td().speedButton, size: 'l', iconSize: 'm', isIconCentered: !0 }),
                                    (0, s.jsx)(h.aQ, {
                                        fallback: (0, s.jsx)(h.cy, {
                                            className: td().likeButton,
                                            isLiked: null == l ? void 0 : l.isLiked,
                                            onClick: m,
                                            iconSize: 'm',
                                            size: 'l',
                                            variant: 'default',
                                            color: 'secondary',
                                            disabled: !r.isAuthorized,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
            var tm = a(6971),
                t_ = a(71416),
                tp = a.n(t_);
            let tv = (e) => {
                let { className: t, children: a, coverUri: i } = e;
                return (0, s.jsxs)(tm.Paper, {
                    radius: 'm',
                    className: (0, c.$)(tp().root, t),
                    ...(0, R.Am)(R.e8.player.FULLSCREEN_PLAYER_POSTER_CONTENT),
                    children: [(0, s.jsx)(h.BW, { className: tp().cover, src: i, size: 400, fit: 'cover', withAvatarReplace: !0 }), a],
                });
            };
            var th = a(86024),
                tg = a.n(th),
                tx = a(63664);
            let ty = {
                    enter: tg().additionalContent_enter,
                    enterActive: tg().additionalContent_enter_active,
                    exit: tg().additionalContent_exit,
                    exitActive: tg().additionalContent_exit_active,
                    appear: tg().additionalContent_enter,
                    appearActive: tg().additionalContent_enter_active,
                },
                tb = (e) => {
                    let { isModeActive: t, shouldDisableInsetTransition: a, children: i } = e,
                        n = (0, u.useRef)(null);
                    return (0, s.jsx)(tx.A, {
                        in: t,
                        nodeRef: n,
                        timeout: 800,
                        unmountOnExit: !0,
                        appear: !0,
                        classNames: ty,
                        children: (0, s.jsx)('div', {
                            ref: n,
                            className: (0, c.$)(tg().additionalContent, { [tg().additionalContent_withDisabledInsetTransition]: a }),
                            children: i,
                        }),
                    });
                },
                tA = (0, d.PA)(() => {
                    var e;
                    let { state: t, handleDebouncedToggle: a } = (0, W.F)({ delay: 150, throttleTimeout: 100 }),
                        {
                            sonataState: { entityMeta: i },
                            fullscreenPlayer: r,
                        } = (0, n.Pjs)(),
                        { state: l, toggleTrue: o } = (0, G.e)(!1),
                        d = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (e = i.mainAlbum) ? void 0 : e.isPodcast),
                        m = null == i ? void 0 : i.isTrackAudiobook,
                        _ = {
                            [C.PLAY_QUEUE]: { component: (0, s.jsx)(ez, {}), isActive: r.isPlayQueueMode },
                            [C.SYNC_LYRICS]: {
                                component: (0, s.jsx)(e9, {
                                    className: tg().syncLyrics,
                                    loaderClassName: tg().syncLyricsLoader,
                                    contentClassName: tg().syncLyricsContent,
                                    scrollerClassName: tg().syncLyricsScroller,
                                    counterClassName: tg().syncLyricsCounter,
                                    footerClassName: tg().syncLyricsFooter,
                                }),
                                isActive: r.isSyncLyricsMode,
                            },
                        },
                        p = (0, u.useMemo)(
                            () =>
                                i
                                    ? m
                                        ? (0, s.jsx)(k.ZS, {
                                              hasLineClamp: !1,
                                              className: (0, c.$)(tg().meta, { [tg().meta_isSplitMode]: r.isSplitMode }),
                                              titleContainerClassName: tg().title,
                                              track: i,
                                              withSecondaryColor: !0,
                                              captionSize: 'l',
                                              explicitSize: 'xs',
                                              withAuthor: !0,
                                              textClassName: (0, c.$)(tg().nonMusicAuthors, tg().ellipsis),
                                              withContextMenuArtists: !0,
                                          })
                                        : d
                                          ? (0, s.jsx)(k.wo, {
                                                className: (0, c.$)(tg().meta, { [tg().meta_isSplitMode]: r.isSplitMode }),
                                                titleContainerClassName: tg().title,
                                                track: i,
                                                withSecondaryColor: !0,
                                                withDate: !1,
                                                captionSize: 'l',
                                                explicitSize: 'xs',
                                                withPodcastName: !0,
                                                textClassName: tg().nonMusicAuthors,
                                            })
                                          : (0, s.jsx)(k.j7, {
                                                hasLineClamp: !1,
                                                className: (0, c.$)(tg().meta, { [tg().meta_isSplitMode]: r.isSplitMode }),
                                                titleContainerClassName: tg().title,
                                                track: i,
                                                withSecondaryColor: !0,
                                                withAlbumLink: !1,
                                                captionSize: 'l',
                                                explicitSize: 'xs',
                                                withAllArtistsTitle: !0,
                                                artistsClassName: tg().artists,
                                                textClassName: tg().ellipsis,
                                                withContextMenuArtists: !0,
                                            })
                                    : null,
                            [i, null == i ? void 0 : i.id, d, m, r.isSplitMode],
                        );
                    return (
                        (0, u.useEffect)(
                            () => (
                                window.addEventListener('resize', a),
                                () => {
                                    window.removeEventListener('resize', a);
                                }
                            ),
                            [a],
                        ),
                        (0, u.useEffect)(() => {
                            r.isSplitMode && o();
                        }, [r.isSplitMode, r.mode, o]),
                        (0, u.useEffect)(
                            () => () => {
                                r.reset(), r.playQueue.reset();
                            },
                            [r],
                        ),
                        (0, s.jsxs)('div', {
                            className: tg().root,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: (0, c.$)(tg().fullscreenContent, {
                                        [tg().fullscreenContent_withDisabledInsetTransition]: t,
                                        [tg().fullscreenContent_enter]: r.isSplitMode,
                                        [tg().fullscreenContent_leave]: !r.isSplitMode && l,
                                    }),
                                    ...(0, R.Am)(R.e8.player.FULLSCREEN_PLAYER_FULLSCREEN_CONTENT),
                                    children: [
                                        (0, s.jsx)(tv, {
                                            className: (0, c.$)(tg().poster, tg().important),
                                            coverUri: null == i ? void 0 : i.coverUri,
                                            children: (0, s.jsx)(tu, {}),
                                        }),
                                        (0, s.jsxs)('div', {
                                            className: tg().info,
                                            children: [
                                                p,
                                                (0, s.jsx)(Y.v, {
                                                    className: tg().sliderContainer,
                                                    sliderClassName: tg().slider,
                                                    disabled: !i,
                                                    isMobile: !1,
                                                    isFullscreen: r.isSplitMode,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object.entries(_).map((e) => {
                                    let [a, { component: i, isActive: n }] = e;
                                    return (0, s.jsx)(tb, { isModeActive: n, shouldDisableInsetTransition: t, children: i }, a);
                                }),
                            ],
                        })
                    );
                }),
                tC = (0, d.PA)(() => {
                    let { formatMessage: e } = (0, O.A)(),
                        {
                            currentTrackInfo: { modal: t },
                            sonataState: { entityMeta: a },
                            fullscreenPlayer: i,
                            fullscreenVideoPlayer: r,
                            advert: l,
                        } = (0, n.Pjs)(),
                        o = F(a);
                    (0, u.useEffect)(() => {
                        l.isAdvertShown && i.modal.close();
                    }, [l.isAdvertShown, i.modal]);
                    let d = !t.isOpened && !r.modal.isOpened;
                    return (0, s.jsxs)(K.a, {
                        className: (0, c.$)(V().root, V().important),
                        open: i.modal.isOpened,
                        onOpenChange: d ? i.modal.onOpenChange : void 0,
                        onClose: i.modal.close,
                        size: 'fullscreen',
                        placement: 'center',
                        showHeader: !1,
                        style: o,
                        contentClassName: V().modalContent,
                        closeOnOutsidePress: !1,
                        ...(0, R.Am)(R.e8.player.FULLSCREEN_PLAYER_MODAL),
                        children: [
                            (0, s.jsx)('header', {
                                className: V().header,
                                children: (0, s.jsx)(_.$, {
                                    className: V().closeButton,
                                    radius: 'round',
                                    color: 'secondary',
                                    size: 'm',
                                    icon: (0, s.jsx)(D.Icon, { variant: 'arrowDown', size: 'xs' }),
                                    onClick: i.modal.close,
                                    'aria-label': e({ id: 'interface-actions.close' }),
                                    ...(0, R.Am)(R.e8.player.FULLSCREEN_PLAYER_CLOSE_BUTTON),
                                }),
                            }),
                            (0, s.jsx)(tA, {}),
                            (0, s.jsx)(U.Notification, {
                                className: V().notification,
                                enableMultiContainer: !0,
                                containerId: n.uQT.FULLSCREEN_INFO,
                                position: 'bottom-center',
                            }),
                            (0, s.jsx)(U.Notification, {
                                className: V().notification,
                                enableMultiContainer: !0,
                                containerId: n.uQT.FULLSCREEN_ERROR,
                                position: 'bottom-center',
                            }),
                        ],
                    });
                });
            var tN = a(21891),
                tf = a.n(tN),
                tI = a(30630),
                tS = a(61958),
                tT = a(39610),
                tP = a(40320),
                tk = a(43350),
                tE = a(62395);
            let tj = () => {
                let e = (0, tE.st)(),
                    t = (0, n.UlF)(),
                    { hash: a } = (0, tE.gf)(),
                    { pageId: i } = (0, n.$au)();
                return (0, u.useCallback)(
                    (r, l) => {
                        if (!e || !i || !n.Wft[i] || !a) return;
                        let o = { hash: a, pageId: n.Wft[i], propertyKey: 'sound_quality', propertyValueNew: r, propertyValueOld: l },
                            s = (0, tk.Fx)({ params: o, logger: t, context: 'useSendEventOnQualitySettingsChanged' });
                        s && (0, tk.Bl)(e.evgenInstance, s);
                    },
                    [e, a, t, i],
                );
            };
            var tL = a(81904),
                tw = a.n(tL);
            let tM = (e) => {
                let { closeToast: t, onOpenQualitySettingsMenu: a, message: i, ariaLabel: n, isMobile: r } = e,
                    { formatMessage: l } = (0, O.A)(),
                    o = (0, u.useCallback)(() => {
                        a(), null == t || t();
                    }, [t, a]),
                    c = (0, u.useMemo)(
                        () =>
                            (0, s.jsxs)('div', {
                                className: tw().message,
                                children: [
                                    (0, s.jsx)(tT.q, { children: (0, s.jsx)('p', { role: 'alert', 'aria-label': n }) }),
                                    (0, s.jsx)(v.Caption, {
                                        variant: 'div',
                                        size: 'm',
                                        'aria-hidden': !0,
                                        ...(0, R.Am)(R.e8.player.NOTIFICATION_CHANGE_QUALITY_TEXT),
                                        children: i,
                                    }),
                                    !r &&
                                        (0, s.jsx)(_.$, {
                                            className: tw().changeButton,
                                            onClick: o,
                                            variant: 'text',
                                            withRipple: !1,
                                            'aria-label': l({ id: 'interface-actions.change' }),
                                            children: (0, s.jsx)(v.Caption, { variant: 'div', size: 'm', children: (0, s.jsx)(m.A, { id: 'interface-actions.change' }) }),
                                        }),
                                ],
                            }),
                        [n, l, o, i, r],
                    );
                return (0, s.jsx)(h.$W, {
                    closeToast: t,
                    cover: (0, s.jsx)(D.Icon, { className: tw().icon, size: 'xs', variant: 'settings' }),
                    message: c,
                    coverRadius: 's',
                });
            };
            var tB = a(45944),
                tO = a.n(tB);
            let tR = [
                    {
                        type: tI.e.HIGH_QUALITY,
                        text: (0, s.jsx)(m.A, { id: 'player-actions.audio-quality-maximum' }),
                        qualityMessageId: 'player-actions.audio-quality-maximum',
                    },
                    {
                        type: tI.e.BALANCED,
                        text: (0, s.jsx)(m.A, { id: 'player-actions.audio-quality-optimal' }),
                        qualityMessageId: 'player-actions.audio-quality-optimal',
                    },
                    {
                        type: tI.e.EFFICIENT,
                        text: (0, s.jsx)(m.A, { id: 'player-actions.audio-quality-economical' }),
                        qualityMessageId: 'player-actions.audio-quality-economical',
                    },
                ],
                tD = {
                    [tI.e.HIGH_QUALITY]: (0, s.jsx)(m.A, { id: 'player-actions.audio-quality-maximum-description' }),
                    [tI.e.BALANCED]: (0, s.jsx)(m.A, { id: 'player-actions.audio-quality-optimal-description' }),
                    [tI.e.EFFICIENT]: (0, s.jsx)(m.A, { id: 'player-actions.audio-quality-economical-description' }),
                },
                tK = (0, d.PA)((e) => {
                    let { onOpenChange: t, open: a, placement: i, size: r, referenceClassName: l, icon: o, referenceLabel: d, disabled: p } = e;
                    (0, n.NBO)(a);
                    let v = (0, u.useId)(),
                        { formatMessage: g } = (0, O.A)(),
                        { notify: x } = (0, n.lkh)(),
                        y = (0, n.NFA)().get(n.ooW),
                        {
                            sonataState: b,
                            user: A,
                            settings: { isMobile: C },
                            quality: N,
                        } = (0, n.Pjs)(),
                        f = (0, tP.Sq)(),
                        I = (0, n.gQL)(),
                        S = tj(),
                        { state: T, setState: P } = (0, G.e)(!1),
                        k = (0, u.useCallback)(() => {
                            null == t || t(!0);
                        }, [t]),
                        E = (0, u.useCallback)(
                            (e) => {
                                S(e, b.quality), b.setQuality(e), null == I || I.setQuality(e), y.set(n.cYZ.YmPlayerQuality, e, { expires: 365 });
                            },
                            [I, b, y, S],
                        ),
                        j = (0, u.useCallback)(
                            (e) => {
                                let t = g({ id: e }).toLowerCase();
                                return {
                                    message: (0, s.jsx)(m.A, { id: 'notifications-info.quality-changed', values: { quality: t } }),
                                    ariaLabel: g({ id: 'notifications-info.quality-changed' }, { quality: t }),
                                };
                            },
                            [g],
                        ),
                        L = (0, u.useCallback)(
                            (e, t) => () => {
                                if (b.quality === e) return;
                                E(e);
                                let { message: a, ariaLabel: i } = j(t);
                                x((0, s.jsx)(tM, { onOpenQualitySettingsMenu: k, message: a, ariaLabel: i, isMobile: C }), { containerId: n.uQT.INFO });
                            },
                            [j, k, x, b.quality, E, C],
                        ),
                        w = (0, u.useCallback)(
                            (e) => {
                                let { selectedItemIcon: t, type: a, qualityMessageId: i, ariaSelected: n, text: r } = e;
                                return (e) => {
                                    let { isPopoverEnabled: l, popoverText: o } = e;
                                    return (0, s.jsx)(tS.Dr, {
                                        isBlock: !0,
                                        disabled: l,
                                        className: (0, c.$)(tO().item, tO().expandedItem),
                                        iconPosition: 'right',
                                        icon: t,
                                        onClick: L(a, i),
                                        role: 'option',
                                        'aria-selected': n,
                                        children: (0, s.jsxs)('span', {
                                            className: tO().itemWrapper,
                                            children: [
                                                (0, s.jsxs)('span', { className: tO().item_option, children: [r, ' ', (0, s.jsx)(tT.q, { children: o })] }),
                                                (0, s.jsx)('span', { className: (0, c.$)(tO().item_option, tO().itemSubTitle), children: tD[a] }),
                                            ],
                                        }),
                                    });
                                };
                            },
                            [L],
                        ),
                        M = !A.hasPlus,
                        B = (0, u.useMemo)(
                            () =>
                                tR.map((e) => {
                                    let { type: t, text: a, qualityMessageId: i } = e,
                                        n = t === b.quality ? (0, s.jsx)(D.Icon, { variant: 'check', size: 'xxs' }) : null,
                                        r = t === b.quality;
                                    return (0, s.jsx)(
                                        h.SU,
                                        {
                                            isNested: !0,
                                            isEnabled: M && !C,
                                            placement: 'left',
                                            textVariant: 'highQuality',
                                            renderChildren: w({ selectedItemIcon: n, type: t, qualityMessageId: i, ariaSelected: r, text: a }),
                                        },
                                        t,
                                    );
                                }),
                            [b.quality, M, C, w],
                        ),
                        K = (0, u.useMemo)(
                            () => ({
                                listClassName: (0, c.$)(tO().root, tO().root_withNewQuality, { [tO().root_withEqualizer]: f.isAvailable }),
                                menuClassName: (0, c.$)({ [tO().menuContent]: !C }),
                            }),
                            [f.isAvailable, C],
                        ),
                        U = (0, u.useMemo)(() => {
                            if (f.isAvailable && !C)
                                return (0, s.jsx)(tP.rk, { isExpanded: f.isEnabled, isDisabled: !1, className: tO().equalizer, title: g({ id: 'equalizer.title' }) }, v);
                        }, [f.isEnabled, v, g, f.isAvailable, C]),
                        F = (0, u.useCallback)(
                            (e) => {
                                let { isPopoverEnabled: n } = e;
                                if (!C)
                                    return (0, s.jsx)(_.$, {
                                        className: (0, c.$)({ [tO().button_active]: N.modal.isOpened }),
                                        radius: 'round',
                                        color: 'secondary',
                                        size: r,
                                        icon: o,
                                        variant: 'text',
                                        onClick: N.modal.open,
                                        'aria-label': g({ id: 'player-actions.audio-quality' }),
                                        withRipple: !1,
                                        ...(0, R.Am)(R.e8.player.SOUND_QUALITY_BUTTON),
                                    });
                                let u = n ? P : t;
                                return (0, s.jsx)(tS.W1, {
                                    wrapperClassName: l,
                                    size: r,
                                    icon: o,
                                    placement: i,
                                    open: a,
                                    onOpenChange: u,
                                    ariaLabel: g({ id: 'player-actions.audio-quality' }),
                                    footer: U,
                                    label: d,
                                    variant: 'text',
                                    ...K,
                                    containerProps: (0, R.Am)(R.e8.player.QUALITY_SETTINGS_CONTEXT_MENU),
                                    isMobile: C,
                                    lockScroll: !C,
                                    disabled: p,
                                    ...(0, R.Am)(R.e8.player.SOUND_QUALITY_BUTTON),
                                    children: B,
                                });
                            },
                            [C, P, t, l, r, o, i, a, g, U, d, K, B, N.modal.open, N.modal.isOpened, p],
                        );
                    return (0, s.jsx)(h.Zr, {
                        isEnabled: !A.isAuthorized,
                        isOpened: T,
                        onOpenChange: P,
                        placement: 'top',
                        textVariant: 'changeQuality',
                        renderChildren: F,
                    });
                }),
                tU = (0, d.PA)((e) => {
                    var t, a, i, r;
                    let { className: l, onSyncLyricsButtonClick: o } = e,
                        {
                            sonataState: d,
                            settings: { isLandscape: m },
                            fullscreenPlayer: { isSyncLyricsMode: p },
                            user: { hasPlus: v },
                        } = (0, n.Pjs)(),
                        { formatMessage: g } = (0, O.A)(),
                        [x, y] = (0, u.useState)(!1),
                        b = (0, I.AA)(),
                        A = (0, I.e9)(),
                        C = null === d.entityMeta,
                        N = (null == (t = d.entityMeta) ? void 0 : t.isNonMusic) || (null == (i = d.entityMeta) || null == (a = i.mainAlbum) ? void 0 : a.isNonMusic),
                        f = d.canSpeed && N,
                        S = (0, Q.c)(() => {
                            A(d);
                        }),
                        T = (0, Q.c)(() => {
                            b(d);
                        }),
                        P = (0, u.useMemo)(() => {
                            var e;
                            if (N) return;
                            let t = ''.concat(g({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(g({ id: 'warning-messages.can-break-accessibility' }));
                            return (0, s.jsx)(_.$, {
                                className: (0, c.$)(tf().syncLyricsButton, { [tf().syncLyricsButton_active]: p }),
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled:
                                    !(
                                        !!(null == (e = d.entityMeta) ? void 0 : e.isSyncLyricsAvailable) ||
                                        !!(null == d.entityMeta ? void 0 : d.entityMeta.isSyncLyricsAvailableWithOfflineFeature) ||
                                        !!(null == d.entityMeta ? void 0 : d.entityMeta.hasSyncLyrics) ||
                                        !!(null == d.entityMeta ? void 0 : d.entityMeta.hasLyrics) ||
                                        ((null == d.entityMeta ? void 0 : d.entityMeta.id) &&
                                            r.syncLyrics.hasLyricsForTrack(null == d.entityMeta ? void 0 : d.entityMeta.id))
                                    ) || m,
                                withRipple: !1,
                                withHover: !1,
                                'aria-label': t,
                                icon: (0, s.jsx)(D.Icon, { variant: 'syncLyrics', size: 'xs' }),
                                onClick: o,
                            });
                        }, [
                            g,
                            N,
                            p,
                            o,
                            m,
                            r.syncLyrics,
                            null == (r = d.entityMeta) ? void 0 : r.isSyncLyricsAvailable,
                            null == d.entityMeta ? void 0 : d.entityMeta.isSyncLyricsAvailableWithOfflineFeature,
                            null == d.entityMeta ? void 0 : d.entityMeta.hasSyncLyrics,
                            null == d.entityMeta ? void 0 : d.entityMeta.hasLyrics,
                            null == d.entityMeta ? void 0 : d.entityMeta.id,
                        ]);
                    return (0, s.jsx)('div', {
                        className: (0, c.$)(tf().footer, l),
                        children: (0, s.jsxs)('div', {
                            className: tf().footerContainer,
                            children: [
                                (C || d.canChangeRepeatMode) && (0, s.jsx)(I.s_, { onClick: T, isDisabled: C, repeatMode: d.repeatMode, variant: 'text' }),
                                f && (0, s.jsx)(h.ig, { size: 'xxxs', iconSize: 'l' }),
                                (0, s.jsx)(tK, { open: x, onOpenChange: y, icon: (0, s.jsx)(D.Icon, { variant: 'settings', size: 'xs' }), size: 'xxxs', disabled: !v }),
                                P,
                                (C || d.canShuffle) && (0, s.jsx)(I.uP, { onClick: S, isDisabled: C, shuffle: d.shuffle, variant: 'text' }),
                            ],
                        }),
                    });
                });
            var tF = a(78444),
                tz = a.n(tF);
            let tV = {
                    enter: tz().coverWrapper_enter,
                    enterActive: tz().coverWrapper_enter_active,
                    exit: tz().coverWrapper_exit,
                    exitActive: tz().coverWrapper_exit_active,
                },
                tW = (0, d.PA)((e) => {
                    var t;
                    let { className: a } = e,
                        i = (0, u.useRef)(null),
                        [r, l] = (0, u.useState)(!1),
                        { state: o, handleDebouncedToggle: d, reset: m } = (0, W.F)({ delay: 7e3, throttleTimeout: 0 }),
                        {
                            fullscreenPlayer: { isSplitMode: _, isSyncLyricsMode: p, showSyncLyrics: v, hideSyncLyrics: g, isPlayQueueMode: x, syncLyrics: y },
                            sonataState: { entityMeta: b },
                            settings: { isLandscape: A },
                        } = (0, n.Pjs)(),
                        C = (null == b ? void 0 : b.isTrackPodcast) || (null == b || null == (t = b.mainAlbum) ? void 0 : t.isPodcast),
                        N = null == b ? void 0 : b.isTrackAudiobook,
                        f = (o || !_ || A) && !x,
                        S = (0, u.useCallback)(() => {
                            p && !A && (o ? m() : d());
                        }, [p, o, m, d, A]),
                        T = (0, u.useCallback)(() => {
                            p && !A && o && d();
                        }, [d, p, o, A]),
                        P = (0, u.useCallback)(() => {
                            if (
                                (null == b ? void 0 : b.isSyncLyricsAvailable) ||
                                (null == b ? void 0 : b.isSyncLyricsAvailableWithOfflineFeature) ||
                                (null == b ? void 0 : b.hasSyncLyrics) ||
                                (null == b ? void 0 : b.hasLyrics) ||
                                ((null == b ? void 0 : b.id) && y.hasLyricsForTrack(null == b ? void 0 : b.id))
                            )
                                return p ? g() : v();
                        }, [
                            null == b ? void 0 : b.isSyncLyricsAvailable,
                            null == b ? void 0 : b.isSyncLyricsAvailableWithOfflineFeature,
                            null == b ? void 0 : b.hasSyncLyrics,
                            null == b ? void 0 : b.hasLyrics,
                            null == b ? void 0 : b.id,
                            y,
                            g,
                            p,
                            v,
                        ]),
                        E = (0, u.useMemo)(() => {
                            if (b)
                                return N
                                    ? (0, s.jsx)(k.ZS, {
                                          textClassName: tz().metaText,
                                          track: b,
                                          withSecondaryColor: !0,
                                          captionSize: 'l',
                                          explicitSize: 'xs',
                                          withAuthor: !0,
                                          withContextMenuArtists: !0,
                                      })
                                    : C
                                      ? (0, s.jsx)(k.wo, {
                                            textClassName: tz().metaText,
                                            track: b,
                                            withSecondaryColor: !0,
                                            withDate: !1,
                                            captionSize: 'l',
                                            explicitSize: 'xs',
                                            withPodcastName: !0,
                                        })
                                      : (0, s.jsx)(k.j7, {
                                            textClassName: tz().metaText,
                                            track: b,
                                            withSecondaryColor: !0,
                                            withAlbumLink: !1,
                                            captionSize: 'l',
                                            explicitSize: 'xs',
                                            withAllArtistsTitle: !0,
                                            withContextMenuArtists: !0,
                                        });
                        }, [b, N, C]);
                    return (
                        (0, u.useEffect)(() => {
                            p && A && y.setInvisible();
                        }, [A, p, y]),
                        (0, u.useLayoutEffect)(() => {
                            p && !A && d();
                        }, [d, p, A]),
                        (0, s.jsxs)('div', {
                            onTouchEnd: T,
                            className: (0, c.$)(tz().root, a),
                            children: [
                                (0, s.jsx)('div', {
                                    className: tz().content,
                                    children: (0, s.jsxs)('div', {
                                        className: tz().wrapper,
                                        children: [
                                            (0, s.jsxs)('div', {
                                                className: (0, c.$)(tz().infoBlock, { [tz().infoBlock_withExpandedSyncLyrics]: !o && p && !A }),
                                                children: [
                                                    (0, s.jsxs)('div', {
                                                        onClick: S,
                                                        className: (0, c.$)(tz().contentContainer, { [tz().contentContainer_withSplitMode]: _ }),
                                                        children: [
                                                            p &&
                                                                !A &&
                                                                (0, s.jsx)(e9, {
                                                                    className: tz().syncLyrics,
                                                                    scrollerClassName: tz().syncLyricsScroller,
                                                                    contentClassName: tz().syncLyricsContent,
                                                                    loaderClassName: tz().syncLyricsLoader,
                                                                    footerClassName: tz().syncLyricsFooter,
                                                                    counterClassName: tz().syncLyricsCounter,
                                                                }),
                                                            x && (0, s.jsx)(ez, {}),
                                                            (0, s.jsx)(tx.A, {
                                                                in: !_ || (A && p),
                                                                nodeRef: i,
                                                                timeout: 200,
                                                                unmountOnExit: !0,
                                                                classNames: tV,
                                                                children: (0, s.jsx)(tm.Paper, {
                                                                    ref: i,
                                                                    radius: 'm',
                                                                    className: tz().coverWrapper,
                                                                    children: (0, s.jsx)(h.BW, {
                                                                        className: tz().cover,
                                                                        src: null == b ? void 0 : b.coverUri,
                                                                        size: 400,
                                                                        fit: 'cover',
                                                                        withAvatarReplace: !0,
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    !x &&
                                                        (0, s.jsxs)('div', {
                                                            className: tz().trackInfo,
                                                            children: [
                                                                !o &&
                                                                    p &&
                                                                    !A &&
                                                                    (0, s.jsx)(tm.Paper, {
                                                                        className: tz().trackInfoCoverContainer,
                                                                        radius: 'xs',
                                                                        children: (0, s.jsx)(h.BW, {
                                                                            className: tz().trackInfoCover,
                                                                            src: null == b ? void 0 : b.coverUri,
                                                                            size: 200,
                                                                            fit: 'cover',
                                                                            withAvatarReplace: !0,
                                                                        }),
                                                                    }),
                                                                (0, s.jsxs)('div', {
                                                                    className: tz().metaContainer,
                                                                    children: [
                                                                        E,
                                                                        !(null == b ? void 0 : b.isRemoved) &&
                                                                            (null == b ? void 0 : b.isAvailable) &&
                                                                            (0, s.jsx)(k._Y, {
                                                                                className: (0, c.$)(tz().contextMenu, { [tz().contextMenu_visible]: r }),
                                                                                track: b,
                                                                                open: r,
                                                                                onOpenChange: l,
                                                                                placement: 'bottom',
                                                                                isFullscreenMobile: !0,
                                                                                size: 'xs',
                                                                                icon: (0, s.jsx)(D.Icon, { variant: 'more', size: 'xxs' }),
                                                                                ...(0, R.Am)(R.e8.player.MOBILE_FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON),
                                                                            }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                ],
                                            }),
                                            f && (0, s.jsx)(Y.v, { className: tz().timeline, disabled: !b, isMobile: !0, isFullscreen: !0, showThumbVariant: 'always' }),
                                            f && (0, s.jsx)(I.$u, { className: tz().buttonsBlock, isMobile: !0, entityMeta: b, isFullscreen: !0 }),
                                        ],
                                    }),
                                }),
                                f && (0, s.jsx)(tU, { onSyncLyricsButtonClick: P }),
                            ],
                        })
                    );
                });
            var tG = a(18726),
                tY = a.n(tG);
            let tQ = (0, d.PA)((e) => {
                    let { children: t, className: a } = e,
                        { url: i, title: r, subTitle: l } = ey(),
                        { fullscreenPlayer: o } = (0, n.Pjs)(),
                        d = (0, Q.c)((e) => {
                            e.stopPropagation(), o.modal.isOpened && o.modal.close();
                        }),
                        m = (0, u.useMemo)(() => {
                            let e = (0, s.jsx)(v.Caption, {
                                variant: 'span',
                                size: 'm',
                                className: tY().title,
                                lineClamp: 1,
                                ...(0, R.Am)(R.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE),
                                children: r,
                            });
                            return i ? (0, s.jsx)(h.N_, { href: i, target: '_self', onClick: d, className: tY().link, children: e }) : e;
                        }, [d, r, i]);
                    return (0, s.jsxs)('div', {
                        className: (0, c.$)(tY().root, a),
                        ...(0, R.Am)(R.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK),
                        children: [
                            (0, s.jsxs)('div', {
                                className: tY().textBlock,
                                children: [
                                    (0, s.jsx)(v.Caption, {
                                        variant: 'span',
                                        size: 's',
                                        weight: 'normal',
                                        className: tY().subTitle,
                                        ...(0, R.Am)(R.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK_SUBTITLE),
                                        children: l,
                                    }),
                                    m,
                                ],
                            }),
                            t,
                        ],
                    });
                }),
                t$ = (0, d.PA)(() => {
                    let { formatMessage: e } = (0, O.A)(),
                        {
                            fullscreenPlayer: { modal: t, showPlayQueue: a, isPlayQueueMode: i, hidePlayQueue: r },
                            user: l,
                        } = (0, n.Pjs)(),
                        o = (0, u.useCallback)(() => (i ? r() : a()), [r, i, a]);
                    return (0, s.jsxs)('header', {
                        className: tf().header,
                        children: [
                            (0, s.jsx)(_.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 's',
                                variant: 'text',
                                icon: (0, s.jsx)(D.Icon, { variant: 'arrowDown', size: 'xs' }),
                                onClick: t.close,
                                'aria-label': e({ id: 'interface-actions.close' }),
                                ...(0, R.Am)(R.e8.player.MOBILE_FULLSCREEN_PLAYER_CLOSE_BUTTON),
                            }),
                            (0, s.jsx)(tQ, {
                                className: tf().headerCenter,
                                children: (0, s.jsx)(h.hj, {
                                    title: e({ id: 'player-actions.cast' }),
                                    description: e({ id: 'future-feature.message' }),
                                    children: (0, s.jsx)(_.$, {
                                        className: tf().castButton,
                                        radius: 'round',
                                        size: 's',
                                        variant: 'text',
                                        disabled: !0,
                                        withRipple: !1,
                                        'aria-label': e({ id: 'player-actions.cast' }),
                                        icon: (0, s.jsx)(D.Icon, { variant: 'cast', size: 'xs' }),
                                    }),
                                }),
                            }),
                            (0, s.jsx)(_.$, {
                                className: (0, c.$)(tf().playQueueButton, { [tf().playQueueButton_active]: i }),
                                radius: 'round',
                                size: 's',
                                variant: 'text',
                                withRipple: !1,
                                withHover: !1,
                                'aria-label': e({ id: 'play-queue.title' }),
                                onClick: o,
                                icon: (0, s.jsx)(D.Icon, { variant: 'playQueue', size: 'xs' }),
                                disabled: !l.isAuthorized,
                                ...(0, R.Am)(R.e8.player.MOBILE_FULLSCREEN_PLAYER_QUEUE_BUTTON),
                            }),
                        ],
                    });
                }),
                tq = (0, d.PA)(() => {
                    let {
                            sonataState: { entityMeta: e },
                            fullscreenPlayer: t,
                            advert: a,
                            settings: { isMobile: i },
                        } = (0, n.Pjs)(),
                        r = F(e);
                    return (
                        (0, u.useEffect)(() => {
                            a.isAdvertShown && t.modal.close();
                        }, [a.isAdvertShown, t.modal]),
                        (0, s.jsxs)(K.a, {
                            className: (0, c.$)(tf().root, tf().important),
                            open: t.modal.isOpened,
                            onOpenChange: t.modal.onOpenChange,
                            size: 'fullscreen',
                            placement: 'center',
                            showHeader: !1,
                            style: r,
                            contentClassName: tf().modalContent,
                            lockScroll: i,
                            ...(0, R.Am)(R.e8.player.MOBILE_FULLSCREEN_PLAYER_MODAL),
                            children: [
                                (0, s.jsx)(t$, {}),
                                (0, s.jsx)(tW, {}),
                                (0, s.jsx)(U.Notification, {
                                    className: tf().notification,
                                    enableMultiContainer: !0,
                                    containerId: n.uQT.FULLSCREEN_INFO,
                                    position: 'bottom-center',
                                }),
                                (0, s.jsx)(U.Notification, {
                                    className: tf().notification,
                                    enableMultiContainer: !0,
                                    containerId: n.uQT.FULLSCREEN_ERROR,
                                    position: 'bottom-center',
                                }),
                            ],
                        })
                    );
                }),
                tH = (0, d.PA)(() => {
                    let {
                            settings: { isMobileLandscapeHeight: e, layout: t },
                        } = (0, n.Pjs)(),
                        a = t === n.u40.Mobile;
                    return (!a && e) || a ? (0, s.jsx)(tq, {}) : (0, s.jsx)(tC, {});
                });
            var tX = a(19020),
                tZ = a(34960),
                tJ = a(27176),
                t0 = a.n(tJ);
            let t1 = (0, d.PA)((e) => {
                    let { advertData: t } = e,
                        {
                            settings: { isMobile: a },
                        } = (0, n.Pjs)(),
                        { formatMessage: i } = (0, O.A)(),
                        r = !!t.advertiserInfoUrl || !!t.clientLegalInfo,
                        l = (0, u.useCallback)(() => {
                            window.open(t.advertiserInfoUrl, '_blank', 'noreferrer noopener');
                        }, [t.advertiserInfoUrl]);
                    return r
                        ? (0, s.jsxs)(tS.W1, {
                              className: t0().contextMenuButton,
                              size: 'xxs',
                              icon: (0, s.jsx)(D.Icon, { size: 'xxs', variant: 'more', className: t0().contextMenuIcon }),
                              isMobile: a,
                              ariaLabel: i({ id: 'interface-actions.context-menu' }),
                              children: [
                                  t.clientLegalInfo &&
                                      (0, s.jsx)(v.Caption, { variant: 'div', size: 's', className: t0().contextMenuHeader, children: t.clientLegalInfo }),
                                  t.advertiserInfoUrl &&
                                      (0, s.jsx)(tS.Dr, {
                                          onClick: l,
                                          icon: (0, s.jsx)(D.Icon, { variant: 'info', size: 'xxs' }),
                                          children: (0, s.jsx)(m.A, { id: 'ads.about-advertiser' }),
                                      }),
                              ],
                          })
                        : null;
                }),
                t2 = (0, d.PA)((e) => {
                    var t, a, i;
                    let { className: r } = e,
                        { advert: l } = (0, n.Pjs)();
                    return l.data && l.isAudioAdvert
                        ? (0, s.jsx)('div', {
                              className: r,
                              children: (0, s.jsx)(y, {
                                  data: l.data,
                                  mediaContent: (0, s.jsxs)('div', {
                                      className: t0().imageContainer,
                                      children: [
                                          (0, s.jsx)(p.Image, {
                                              className: (0, c.$)(t0().image, { [t0().image_fallback]: !(null == (t = l.data) ? void 0 : t.iconSrc) }),
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              src: null == (a = l.data) ? void 0 : a.iconSrc,
                                              fallbackIconVariant: 'picture',
                                              alt: '',
                                          }),
                                          (0, s.jsx)(p.Image, {
                                              className: t0().backgroundImage,
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              src: null == (i = l.data) ? void 0 : i.iconSrc,
                                              fallbackIconVariant: 'picture',
                                              alt: '',
                                          }),
                                          (0, s.jsx)(t1, { advertData: l.data }),
                                      ],
                                  }),
                                  linkClassName: t0().linkButton,
                              }),
                          })
                        : null;
                });
            var t8 = a(42653),
                t3 = a.n(t8);
            let t4 = (0, d.PA)(() => {
                let {
                        settings: { isMobile: e },
                        sonataState: t,
                        user: a,
                        quality: i,
                    } = (0, n.Pjs)(),
                    r = (0, tP.Sq)(),
                    { contentRootRef: l } = (0, n.gKY)(),
                    { formatMessage: o } = (0, O.A)(),
                    d = (0, n.NFA)(),
                    { notify: p } = (0, n.lkh)(),
                    g = (0, u.useId)(),
                    x = (0, n.gQL)(),
                    y = d.get(n.ooW),
                    b = tj(),
                    A = (0, u.useCallback)(
                        (e) => {
                            b(e, t.quality), t.setQuality(e), null == x || x.setQuality(e), y.set(n.cYZ.YmPlayerQuality, e, { expires: 365 });
                        },
                        [x, t, y, b],
                    ),
                    C = (0, u.useCallback)(
                        (e) => {
                            let t = o({ id: e }).toLowerCase();
                            return {
                                message: (0, s.jsx)(m.A, { id: 'notifications-info.quality-changed', values: { quality: t } }),
                                ariaLabel: o({ id: 'notifications-info.quality-changed' }, { quality: t }),
                            };
                        },
                        [o],
                    ),
                    N = (0, u.useCallback)(
                        (e, a) => () => {
                            if (t.quality === e) return;
                            i.modal.close(), A(e);
                            let { message: r, ariaLabel: l } = C(a);
                            p((0, s.jsx)(tM, { onOpenQualitySettingsMenu: i.modal.open, message: r, ariaLabel: l }), { containerId: n.uQT.INFO });
                        },
                        [C, p, t.quality, A, i.modal],
                    ),
                    f = (0, Q.c)((e) => {
                        switch (e) {
                            case tI.e.HIGH_QUALITY:
                                return R.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_HIGH_QUALITY;
                            case tI.e.BALANCED:
                                return R.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_BALANCED;
                            default:
                                return R.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_EFFICIENT;
                        }
                    }),
                    I = (0, u.useCallback)(
                        (e) => {
                            let { selectedItemIcon: t, type: a, qualityMessageId: i, ariaSelected: n, text: r } = e;
                            return (e) => {
                                let { isPopoverEnabled: l, popoverText: o } = e;
                                return (0, s.jsx)(
                                    _.$,
                                    {
                                        isBlock: !0,
                                        disabled: l,
                                        className: (0, c.$)(tO().item, t3().button, tO().expandedItem),
                                        iconPosition: 'right',
                                        icon: t,
                                        onClick: N(a, i),
                                        role: 'option',
                                        'aria-selected': n,
                                        variant: 'text',
                                        ...(0, R.Am)(f(a)),
                                        children: (0, s.jsxs)('span', {
                                            className: tO().itemWrapper,
                                            children: [
                                                (0, s.jsxs)('span', { className: tO().item_option, children: [r, ' ', (0, s.jsx)(tT.q, { children: o })] }),
                                                (0, s.jsx)('span', { className: (0, c.$)(tO().item_option, tO().itemSubTitle), children: tD[a] }),
                                            ],
                                        }),
                                    },
                                    a,
                                );
                            };
                        },
                        [N, f],
                    );
                (0, u.useEffect)(
                    () => () => {
                        i.modal.close();
                    },
                    [i.modal],
                );
                let S = !a.hasPlus,
                    T = (0, u.useMemo)(
                        () =>
                            tR.map((a) => {
                                let { type: i, text: n, qualityMessageId: r } = a,
                                    l = i === t.quality ? (0, s.jsx)(D.Icon, { variant: 'check', size: 'xxs' }) : null,
                                    o = i === t.quality;
                                return (0, s.jsx)(
                                    h.SU,
                                    {
                                        isNested: !0,
                                        isEnabled: S && !e,
                                        placement: 'left',
                                        textVariant: 'highQuality',
                                        renderChildren: I({ selectedItemIcon: l, type: i, qualityMessageId: r, ariaSelected: o, text: n }),
                                    },
                                    i,
                                );
                            }),
                        [t.quality, S, e, I],
                    ),
                    P = (0, u.useMemo)(() => {
                        if (r.isAvailable && !e)
                            return (0, s.jsx)(
                                tP.rk,
                                {
                                    isExpanded: r.isEnabled,
                                    isDisabled: !1,
                                    className: (0, c.$)(tO().equalizer, tO().equalizer_withNewQuality),
                                    title: o({ id: 'equalizer.title' }),
                                },
                                g,
                            );
                    }, [g, o, e, r.isEnabled, r.isAvailable]);
                return (0, s.jsxs)(K.a, {
                    size: 'fitContent',
                    placement: e ? 'default' : 'right',
                    open: i.modal.isOpened,
                    onOpenChange: i.modal.onOpenChange,
                    onClose: i.modal.close,
                    className: t3().root,
                    contentClassName: t3().modalContent,
                    portalNode: e ? null : l,
                    showHeader: !1,
                    overlayClassName: t3().overlay,
                    containerProps: (0, R.Am)(R.e8.player.QUALITY_SETTINGS_CONTEXT_MENU),
                    children: [
                        !e &&
                            (0, s.jsxs)(v.Heading, {
                                className: (0, c.$)(tO().header, tO().headerWithCloseButton),
                                variant: 'h4',
                                size: 'xs',
                                weight: 'bold',
                                children: [
                                    (0, s.jsx)(m.A, { id: 'player-actions.audio-quality' }),
                                    (0, s.jsx)(_.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, s.jsx)(D.Icon, { variant: 'close', size: 'xxs' }),
                                        onClick: i.modal.close,
                                        'aria-label': o({ id: 'interface-actions.close-quality-settings' }),
                                    }),
                                ],
                            }),
                        T,
                        P,
                    ],
                });
            });
            var t5 = a(77760),
                t6 = a.n(t5),
                t7 = a(93666),
                t9 = a(246);
            let ae = 'player-region';
            var at = a(85188),
                aa = a.n(at);
            let ai = (e) => {
                    let { className: t, ariaLabel: a, onClick: i, forwardRef: n } = e;
                    return (0, s.jsx)('div', {
                        ref: n,
                        className: (0, c.$)(aa().root, t),
                        children: (0, s.jsx)(_.$, {
                            className: aa().button,
                            radius: 'round',
                            size: 's',
                            color: 'secondary',
                            withRipple: !1,
                            'aria-label': a,
                            icon: (0, s.jsx)(D.Icon, { variant: 'fullscreen', size: 'xs' }),
                            onClick: i,
                            ...(0, R.Am)(R.e8.player.FULLSCREEN_PLAYER_BUTTON),
                        }),
                    });
                },
                an = (0, u.forwardRef)((e, t) => (0, s.jsx)(ai, { forwardRef: t, ...e }));
            var electronBridgeModule = a(68317),
                ar = a(44123),
                al = a.n(ar);
            const qualityMap = {
                lq: 'LQ',
                nq: 'NQ',
                hq: 'HQ',
                lossless: 'HQ+',
            };
            const codecMap = {
                mp3: 'MP3',
                'he-aac': 'HE-AAC',
                aac: 'AAC',
                flac: 'FLAC',
                'aac-mp4': 'AAC',
                'he-aac-mp4': 'HE-AAC',
                'flac-mp4': 'FLAC',
            };
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
            };
            let ao = (0, d.PA)((e) => {
                var t;
                let [, forcePlayerBarRerender] = (0, u.useReducer)((x) => x + 1, 0);
                window.forcePlayerBarRerender = forcePlayerBarRerender;
                let { className: a, entityMeta: i, isLiked: r, isDisliked: l, onLikeClick: o, onDislikeClick: d } = e,
                    {
                        user: p,
                        sonataState: g,
                        fullscreenPlayer: x,
                        settings: { isMobileLandscapeHeight: y },
                        advert: b,
                        track: A,
                    } = (0, n.Pjs)(),
                    theState = (0, n.eGp)(),
                    sonataRuntimeState = theState,
                    [C, N] = (0, u.useState)(!1),
                    [f, S] = (0, u.useState)(!1),
                    [downloadProgress, setDownloadProgress] = (0, u.useState)(0),
                    [downloadInfo, setDownloadInfo] = (0, u.useState)(theState?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data),
                    [realBitrate, setRealBitrate] = (0, u.useState)(null),
                    [isRemoteDeviceConnected, setIsRemoteDeviceConnected] = (0, u.useState)(false),
                    [remoteDevice, setRemoteDevice] = (0, u.useState)(null),
                    { formatMessage: T } = (0, O.A)(),
                    P = !g.isGenerativeContext,
                    E = g.canSpeed && (null == i ? void 0 : i.isNonMusic),
                    j = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (t = i.mainAlbum) ? void 0 : t.isPodcast),
                    L = null == i ? void 0 : i.isTrackAudiobook,
                    w = (0, I.d0)(),
                    M = F(i),
                    B = (0, Q.c)(() => {
                        A.open({ trackId: null == i ? void 0 : i.id, albumId: null == i ? void 0 : i.albumId });
                    }),
                    K = (0, Q.c)((e) => {
                        e.stopPropagation();
                    }),
                    U = (0, Q.c)(async (e) => {
                        await w(g, e);
                    }),
                    z = (0, Q.c)((e) => {
                        g.setVolume(e);
                    }),
                    onDownloadClick = (0, u.useCallback)(() => {
                        i?.id && electronBridgeModule.sendDownloadCurrentTrack(i.id);
                    }, [i]),
                    updateRealBitrate = (0, u.useCallback)(() => {
                        const instance = window?.Ya?.YaspAudioElement?.instances?.find((instance) => instance.yaspSrc);
                        if (!instance) {
                            setTimeout(updateRealBitrate, 1000);
                            return console.debug('YaspAudioElement not found, retrying...');
                        }
                        setTimeout(() => {
                            instance.yaspRequestDebugInfo().then((info) => {
                                const tracks = info.sources.find((src) => src.attached)?.abr?.abrDecisionsLog?.tracks;
                                if (!tracks) return;
                                let bitrate = Math.round((Object.values(tracks)?.[0]?.bitrate ?? 0) / 1000);
                                setRealBitrate(bitrate);
                                console.debug('Bitrate Updated:', bitrate);
                            });
                        }, 100);
                    }, [i]),
                    V = (0, Q.c)((e) => {
                        let t = e.target,
                            a = t instanceof Element && ['DIV', 'SECTION', 'SPAN'].includes(t.tagName);
                        i && P && a && !b.isAdvertShown && x.showFullscreenPlayerModal();
                    }),
                    W = (0, Q.c)((e) => {
                        if (!g.isGenerativeContext && i) {
                            if (((0, eo.P)(e, al().ripple), 2 === e.detail)) {
                                A.close(), V(e);
                                return;
                            }
                            1 === e.detail && (null == i ? void 0 : i.hasTrackLink) && !x.modal.isOpened && B();
                        }
                    }),
                    syncLyricsPrefetchHook =
                        ((0, u.useEffect)(() => {
                            let e = null == i ? void 0 : i.id,
                                t = null != i && !1 === i.hasSyncLyrics,
                                a = null == i ? void 0 : i.trackSource,
                                n = e && x.syncLyrics.currentTrackId !== e && (t || 'UGC' === a),
                                r = getNextQueueTrackMeta(sonataRuntimeState);
                            lrclibSyncSonataStateRef = sonataRuntimeState;
                            n && x.syncLyrics.getData(e), x.syncLyrics.prefetchTrack(r);
                        }, [null == i ? void 0 : i.id, null == i ? void 0 : i.hasSyncLyrics, null == i ? void 0 : i.trackSource, x.syncLyrics, sonataRuntimeState]),
                        null),
                    ee = (0, u.useMemo)(() => {
                        let e = null == i ? void 0 : i.id,
                            t = e ? String(e) : null;
                        return (
                            !!(null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature) ||
                            !!(null == i ? void 0 : i.hasLyrics) ||
                            (!!t && x.syncLyrics.hasLyricsForTrack(t))
                        );
                    }, [
                        null == i ? void 0 : i.id,
                        null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature,
                        null == i ? void 0 : i.hasLyrics,
                        x.syncLyrics.currentTrackId,
                        x.syncLyrics.lines,
                        x.syncLyrics.isResolved,
                    ]),
                    G = (0, u.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e,
                                a = ''.concat(T({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(T({ id: 'warning-messages.can-break-accessibility' })),
                                n = t ? void 0 : x.showSyncLyrics;
                            return (0, s.jsx)(_.$, {
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled: !ee || y,
                                'aria-hidden': !ee,
                                withRipple: !1,
                                'aria-label': a,
                                icon: (0, s.jsx)(D.Icon, { variant: 'syncLyrics', size: 'xs' }),
                                onClick: n,
                                ...(0, R.Am)(R.e8.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON),
                            });
                        },
                        [T, x.showSyncLyrics, ee, y],
                    ),
                    $ = (0, u.useMemo)(
                        () =>
                            (null == i ? void 0 : i.isNonMusic) || b.isAdvertShown
                                ? null
                                : p.isAuthorized && !p.hasPlus
                                  ? (0, s.jsx)(h.SU, { placement: 'top', textVariant: 'sync-lyrics', renderChildren: G })
                                  : (0, s.jsx)(h.Zr, { isEnabled: !p.isAuthorized, placement: 'top', textVariant: 'sync-lyrics', renderChildren: G }),
                        [null == i ? void 0 : i.isNonMusic, b.isAdvertShown, p.isAuthorized, G, p.hasPlus],
                    ),
                    q = (0, u.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e,
                                a = t ? void 0 : x.showPlayQueue;
                            return (0, s.jsx)(_.$, {
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled: !i,
                                withRipple: !1,
                                'aria-label': T({ id: 'play-queue.title' }),
                                icon: (0, s.jsx)(D.Icon, { variant: 'playQueue', size: 'xs' }),
                                onClick: a,
                                ...(0, R.Am)(R.e8.player.PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON),
                            });
                        },
                        [i, x.showPlayQueue, T],
                    ),
                    H = (0, u.useMemo)(
                        () => (b.isAdvertShown ? null : (0, s.jsx)(h.Zr, { isEnabled: !p.isAuthorized, placement: 'top', textVariant: 'openQueue', renderChildren: q })),
                        [b.isAdvertShown, p.isAuthorized, q],
                    ),
                    X = (0, u.useMemo)(() => {
                        if (i && !g.isGenerativeContext && !b.isAdvertShown)
                            return (0, s.jsx)('div', {
                                onDoubleClick: K,
                                children: (0, s.jsx)(k._Y, {
                                    track: i,
                                    placement: 'top',
                                    className: al().trackContextMenuIcon,
                                    open: C,
                                    onOpenChange: N,
                                    icon: (0, s.jsx)(D.Icon, { size: 'xxs', variant: 'more' }),
                                    size: 'xs',
                                    ...(0, R.Am)(R.e8.player.PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON),
                                }),
                            });
                    }, [b.isAdvertShown, i, K, C, g.isGenerativeContext]),
                    Z = (0, u.useMemo)(
                        () =>
                            i
                                ? L
                                    ? (0, s.jsx)(k.ZS, {
                                          afterTitle: X,
                                          explicitSize: 'xxxs',
                                          track: i,
                                          withAuthor: !0,
                                          withSecondaryColor: !0,
                                          withContextMenuArtists: !0,
                                      })
                                    : j
                                      ? (0, s.jsx)(k.wo, { afterTitle: X, explicitSize: 'xxxs', track: i, withDate: !1, withSecondaryColor: !0, withPodcastName: !0 })
                                      : (0, s.jsx)(k.j7, {
                                            afterTitle: X,
                                            track: i,
                                            withSecondaryColor: !0,
                                            withAlbumLink: !1,
                                            withTrackLink: !g.isGenerativeContext,
                                            withContextMenuArtists: !0,
                                        })
                                : null,
                        [X, i, L, j, g.isGenerativeContext],
                    );
                updateRealBitrate();
                (0, u.useEffect)(() => {
                    let e = (e, t, a) => {
                        'trackDownloadCurrent' === t && setDownloadProgress(a);
                    };
                    return (
                        window.desktopEvents?.on?.(n.EE.PROGRESS_BAR_CHANGE, e),
                        () => {
                            window.desktopEvents?.off?.(n.EE.PROGRESS_BAR_CHANGE, e);
                        }
                    );
                }, []);
                (0, u.useEffect)(() => {
                    let e;
                    const t = () => {
                            let e = theState?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data,
                                t = JSON.stringify(e),
                                a = JSON.stringify(downloadInfo);
                            if (t !== a)
                                if (void 0 === e) {
                                    let t = 5;
                                    e = setInterval(() => {
                                        const a = theState?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data;
                                        (t <= 0 || void 0 !== a) && (setDownloadInfo(a), clearInterval(e));
                                        t -= 1;
                                    }, 200);
                                } else setDownloadInfo(e);
                        },
                        a = theState?.state?.queueState?.currentEntity.onChange(t),
                        i = theState?.state?.playerState?.status?.onChange(t),
                        r = theState?.state?.playerState?.event?.onChange(t);
                    return (
                        t(),
                        () => {
                            e && clearInterval(e), 'function' == typeof a && a(), 'function' == typeof i && i(), 'function' == typeof r && r();
                        }
                    );
                }, [theState, downloadInfo]);
                (0, u.useEffect)(() => {
                    let e = (device_info) => {
                            setIsRemoteDeviceConnected(true), setRemoteDevice(device_info), (window.isRemoteDeviceConnected = true), (window.remoteDevice = device_info);
                        },
                        t = () => {
                            setIsRemoteDeviceConnected(false), setRemoteDevice(null), (window.isRemoteDeviceConnected = false), (window.remoteDevice = null);
                        };
                    return (
                        window.onRemoteDeviceConnected.push(e),
                        window.onRemoteDeviceDisconnected.push(t),
                        () => {
                            (window.onRemoteDeviceConnected = window.onRemoteDeviceConnected.filter((listener) => listener !== e)),
                                (window.onRemoteDeviceDisconnected = window.onRemoteDeviceDisconnected.filter((listener) => listener !== t));
                        }
                    );
                }, []);
                return (0, s.jsx)('section', {
                    style: b.isAdvertShown ? void 0 : M,
                    className: (0, c.$)(al().root, al().important, a),
                    ...(0, R.Am)(R.e8.player.PLAYERBAR_DESKTOP),
                    'aria-labelledby': ae,
                    children: (0, s.jsxs)('div', {
                        className: al().playerBar,
                        children: [
                            !g.isGenerativeContext &&
                                (0, s.jsx)(Y.J, { sliderClassName: al().slider, progressbarClassName: al().progressBar, disabled: !i, isMobile: !1 }),
                            (0, s.jsxs)('div', {
                                className: (0, c.$)(al().player, { [al().player_disabled]: !i }),
                                children: [
                                    (0, s.jsx)('div', { onClick: W, className: al().triggerModal }),
                                    (0, s.jsx)(tT.q, {
                                        children: (0, s.jsx)(v.Heading, { variant: 'h3', id: ae, children: (0, s.jsx)(m.A, { id: 'a11y-regions.player' }) }),
                                    }),
                                    (0, s.jsx)('div', {
                                        className: al().info,
                                        children: (0, s.jsx)('div', {
                                            className: al().infoCard,
                                            children:
                                                i &&
                                                !b.isAdvertShown &&
                                                (0, s.jsxs)(s.Fragment, {
                                                    children: [
                                                        (0, s.jsxs)(tm.Paper, {
                                                            radius: 's',
                                                            className: al().coverContainer,
                                                            ...(0, R.Am)(R.e8.player.PLAYERBAR_DESKTOP_COVER_CONTAINER),
                                                            children: [
                                                                (0, s.jsx)(h.BW, {
                                                                    className: al().cover,
                                                                    src: i.coverUri,
                                                                    size: 100,
                                                                    fit: 'cover',
                                                                    withAvatarReplace: !0,
                                                                }),
                                                                P &&
                                                                    (0, s.jsxs)(t7.m_, {
                                                                        placement: 'top',
                                                                        offsetOptions: 4,
                                                                        children: [
                                                                            (0, s.jsx)(an, {
                                                                                ariaLabel: T({ id: 'player-actions.fullscreen-button' }),
                                                                                onClick: x.showFullscreenPlayerModal,
                                                                            }),
                                                                            (0, s.jsx)(t7.ZI, { children: (0, s.jsx)(m.A, { id: 'player-actions.fullscreen' }) }),
                                                                        ],
                                                                    }),
                                                            ],
                                                        }),
                                                        (0, s.jsx)('div', { className: al().description, children: Z }),
                                                    ],
                                                }),
                                        }),
                                    }),
                                    (0, s.jsxs)('div', {
                                        className: al().sonata,
                                        children: [
                                            window.CHANGE_DISLIKE_BUTTON_POS()
                                                ? (0, s.jsx)(h.aQ, {
                                                      fallback: (0, s.jsx)(h._I, { disabled: !i || b.isAdvertShown, isDisliked: l, onClick: d, iconSize: 'xs' }),
                                                  })
                                                : (0, s.jsx)(h.aQ, {
                                                      fallback: (0, s.jsx)(h.cy, { disabled: !i || b.isAdvertShown, isLiked: r, onClick: o, iconSize: 'xs' }),
                                                  }),
                                            (0, s.jsx)(I.$u, {
                                                className: (0, c.$)(al().sonataControls, al().important),
                                                withRepeat: !0,
                                                withShuffle: !0,
                                                isMobile: !1,
                                                entityMeta: i,
                                            }),
                                            window.CHANGE_DISLIKE_BUTTON_POS()
                                                ? (0, s.jsx)(h.aQ, {
                                                      fallback: (0, s.jsx)(h.cy, { disabled: !i || b.isAdvertShown, isLiked: r, onClick: o, iconSize: 'xs' }),
                                                  })
                                                : (0, s.jsx)(h.aQ, {
                                                      fallback: (0, s.jsx)(h._I, { disabled: !i || b.isAdvertShown, isDisliked: l, onClick: d, iconSize: 'xs' }),
                                                  }),
                                            isRemoteDeviceConnected &&
                                                (0, s.jsx)('div', {
                                                    style: {
                                                        position: 'absolute',
                                                        bottom: 0,
                                                        color: 'var(--ym-controls-color-primary-default-enabled)',
                                                        fontSize: 'small',
                                                    },
                                                    children: (0, s.jsxs)('span', {
                                                        children: [
                                                            'Управление с ',
                                                            null != deviceTypeMap?.[null == remoteDevice ? void 0 : remoteDevice.info?.type]
                                                                ? deviceTypeMap?.[null == remoteDevice ? void 0 : remoteDevice.info?.type]
                                                                : '',
                                                            ': ',
                                                            null == remoteDevice ? void 0 : remoteDevice.info?.title,
                                                        ],
                                                    }),
                                                }),
                                        ],
                                    }),
                                    (0, s.jsxs)('div', {
                                        className: al().meta,
                                        children: [
                                            !g.isGenerativeContext &&
                                                !b.isAdvertShown &&
                                                (0, s.jsxs)(s.Fragment, {
                                                    children: [
                                                        E && (0, s.jsx)(h.ig, { iconSize: 'l' }),
                                                        $,
                                                        H,
                                                        (0, s.jsx)(h.hj, {
                                                            title: 'Скачать трек в файл',
                                                            description: i?.id ? 'Скачать трек в читаемый файл на вашем ПК' : 'Не удалось получить данные о треке',
                                                            children: (0, s.jsxs)('button', {
                                                                disabled: !i?.id,
                                                                className: `cpeagBA1_PblpJn8Xgtv UDMYhpDjiAFT3xUx268O ${
                                                                    !i?.id ? '' : 'HbaqudSqu7Q3mv3zMPGr'
                                                                } qU2apWBO1yyEK0lZ3lPO`,
                                                                style: {
                                                                    display: 'flex',
                                                                    'flex-direction': 'column',
                                                                    gap: '2px',
                                                                    'align-self': 'center',
                                                                    'padding-top': '5px',
                                                                    'padding-inline': '2px',
                                                                },
                                                                children: [
                                                                    (0, s.jsxs)('span', {
                                                                        className: 'JjlbHZ4FaP9EAcR_1DxF',
                                                                        children: (0, s.jsx)(D.Icon, {
                                                                            variant: 'download',
                                                                            size: 'xxs',
                                                                            style: {
                                                                                width: '24px',
                                                                                height: '24px',
                                                                            },
                                                                        }),
                                                                    }),
                                                                    (0, s.jsxs)('div', {
                                                                        style: {
                                                                            'background-color': 'var(--ym-controls-color-secondary-text-enabled)',
                                                                            width: `${downloadProgress === -100 ? 0 : downloadProgress}%`,
                                                                            transition:
                                                                                downloadProgress >= 0 && downloadProgress < 100
                                                                                    ? 'width 0.3s'
                                                                                    : 'width 0.3s, opacity 0.3s linear 0.5s',
                                                                            opacity: downloadProgress >= 0 && downloadProgress < 100 ? '1' : '0',
                                                                            height: '2px',
                                                                            'border-radius': '10px',
                                                                        },
                                                                    }),
                                                                ],
                                                                onClick: onDownloadClick,
                                                            }),
                                                        }),
                                                        (0, s.jsx)(h.hj, {
                                                            title: 'Качество трека',
                                                            description: downloadInfo?.quality
                                                                ? `${qualityMap[null == downloadInfo ? void 0 : downloadInfo.quality]}: ${codecMap[null == downloadInfo ? void 0 : downloadInfo.codec]}` +
                                                                  ((null == downloadInfo ? void 0 : downloadInfo.bitrate)
                                                                      ? `-${null == downloadInfo ? void 0 : downloadInfo.bitrate}`
                                                                      : '') +
                                                                  ('mp3' !== (null == downloadInfo ? void 0 : downloadInfo.codec) && realBitrate
                                                                      ? ` ${realBitrate} kbps`
                                                                      : '')
                                                                : 'Не удалось получить качество трека',
                                                            children: (0, s.jsx)('div', {
                                                                className: 'cpeagBA1_PblpJn8Xgtv HbaqudSqu7Q3mv3zMPGr',
                                                                children: (0, s.jsx)(tK, {
                                                                    placement: 'bottom',
                                                                    open: f,
                                                                    onOpenChange: S,
                                                                    icon: (
                                                                        window?.SHOW_CODEC_INSTEAD_OF_QUALITY_MARK()
                                                                            ? codecMap[null == downloadInfo ? void 0 : downloadInfo.codec]
                                                                            : qualityMap[null == downloadInfo ? void 0 : downloadInfo.quality]
                                                                    )
                                                                        ? (0, s.jsx)('span', {
                                                                              className: al().settingsButton,
                                                                              style: { width: 'auto', height: 'auto', alignContent: 'center' },
                                                                              children:
                                                                                  (window?.SHOW_CODEC_INSTEAD_OF_QUALITY_MARK()
                                                                                      ? codecMap[null == downloadInfo ? void 0 : downloadInfo.codec]
                                                                                      : qualityMap[null == downloadInfo ? void 0 : downloadInfo.quality]) ?? 'NONE',
                                                                          })
                                                                        : (0, s.jsx)(D.Icon, { variant: 'settings', size: 'xs' }),
                                                                    referenceLabel: 'Качество трека',
                                                                    size: 'xxxs',
                                                                    referenceClassName: al().settingsButton,
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            (0, s.jsx)(t9.r, { variant: t9.q.VERTICAL, sonataVolume: g.volume, onVolumeSet: z, onVolumeClick: U }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var as = a(22674),
                ac = a(51935),
                ad = a.n(ac);
            let au = (0, d.PA)((e) => {
                    var t;
                    let { className: a, entityMeta: i, isLiked: r, onLikeClick: l } = e,
                        { user: o, sonataState: d, fullscreenPlayer: _, advert: p } = (0, n.Pjs)(),
                        g = o.isAuthorized && i && !p.isAdvertShown,
                        x = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (t = i.mainAlbum) ? void 0 : t.isPodcast),
                        y = null == i ? void 0 : i.isTrackAudiobook,
                        b = F(i),
                        A = (0, u.useCallback)(
                            (e) => {
                                if (p.isAdvertShown) return;
                                let t = e.target,
                                    a = t instanceof Element && ['DIV', 'SECTION', 'IMG', 'SPAN'].includes(t.tagName);
                                i && a && !d.isGenerativeContext && _.showFullscreenPlayerModal();
                            },
                            [i, _, d.isGenerativeContext, p.isAdvertShown],
                        ),
                        C = (0, u.useMemo)(
                            () =>
                                p.isAdvertShown
                                    ? null
                                    : i
                                      ? y
                                          ? (0, s.jsx)(k.ZS, { explicitSize: 'xxxs', track: i, withAuthor: !0, withSecondaryColor: !0, withArtistLink: !1 })
                                          : x
                                            ? (0, s.jsx)(k.wo, {
                                                  explicitSize: 'xxxs',
                                                  track: i,
                                                  withDate: !1,
                                                  withSecondaryColor: !0,
                                                  withPodcastName: !0,
                                                  withAlbumTitleLink: !1,
                                              })
                                            : (0, s.jsx)(k.j7, { withArtistLink: !1, track: i, withSecondaryColor: !0, withAlbumLink: !1 })
                                      : (0, s.jsxs)('div', {
                                            className: ad().shimmerMeta,
                                            children: [
                                                (0, s.jsx)(as.Shimmer, { className: ad().shimmerMetaTitle }),
                                                (0, s.jsx)(as.Shimmer, { className: ad().shimmerMetaDescription }),
                                            ],
                                        }),
                            [p.isAdvertShown, i, y, x],
                        ),
                        N = (0, ee.L)(() =>
                            p.isAdvertShown
                                ? (0, s.jsx)('div', { className: ad().infoCard })
                                : i
                                  ? (0, s.jsxs)('div', {
                                        className: ad().infoCard,
                                        children: [
                                            (0, s.jsx)(tm.Paper, {
                                                radius: 's',
                                                className: ad().coverContainer,
                                                children: (0, s.jsx)(h.BW, { className: ad().cover, src: i.coverUri, size: 50, fit: 'cover', withAvatarReplace: !0 }),
                                            }),
                                            (0, s.jsx)('div', { className: ad().description, children: C }),
                                        ],
                                    })
                                  : (0, s.jsxs)('div', {
                                        className: ad().infoCard,
                                        children: [
                                            (0, s.jsx)(tm.Paper, {
                                                radius: 's',
                                                className: ad().coverContainer,
                                                children: (0, s.jsx)(as.Shimmer, { className: ad().shimmerCover }),
                                            }),
                                            (0, s.jsx)('div', { className: ad().description, children: C }),
                                        ],
                                    }),
                        );
                    return (0, s.jsxs)('section', {
                        style: p.isAdvertShown ? void 0 : b,
                        className: (0, c.$)(ad().root, a),
                        onClick: A,
                        ...(0, R.Am)(R.e8.player.MOBILE_PLAYERBAR),
                        children: [
                            (0, s.jsx)(tT.q, { children: (0, s.jsx)(v.Heading, { variant: 'h3', id: ae, children: (0, s.jsx)(m.A, { id: 'a11y-regions.player' }) }) }),
                            !d.isGenerativeContext &&
                                (0, s.jsx)(Y.v, {
                                    className: ad().backgroundProgress,
                                    sliderClassName: ad().sliderChangeTimeCode,
                                    isMobile: !0,
                                    isFullscreen: !1,
                                    disabled: !i,
                                }),
                            (0, s.jsxs)('div', {
                                className: ad().info,
                                children: [
                                    N,
                                    (0, s.jsxs)('div', {
                                        className: ad().infoButtons,
                                        children: [
                                            i &&
                                                g &&
                                                !p.isAdvertShown &&
                                                (0, s.jsx)(h.aQ, { fallback: (0, s.jsx)(h.cy, { isLiked: r, iconSize: 'xs', onClick: l, disabled: !o.isAuthorized }) }),
                                            (0, s.jsx)(I.$u, { isMobile: !0, entityMeta: i }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                am = (0, d.PA)((e) => {
                    let { className: t } = e,
                        {
                            settings: { isMobile: a },
                            sonataState: i,
                            fullscreenPlayer: r,
                        } = (0, n.Pjs)(),
                        {
                            isLiked: l,
                            handleLike: o,
                            isDisliked: d,
                            handleDislike: m,
                        } = (() => {
                            var e, t;
                            let { sonataState: a } = (0, n.Pjs)(),
                                i = (0, E.KX)(a.entityMeta),
                                r = (0, E.mW)(a.entityMeta),
                                { isGenerativeLiked: l, isGenerativeDisliked: o, onGenerativeLikeClick: s, onGenerativeDislikeClick: c } = (0, tZ.nD)();
                            return a.isGenerativeContext
                                ? { isLiked: l, isDisliked: o, handleLike: s, handleDislike: c }
                                : {
                                      isLiked: null == (e = a.entityMeta) ? void 0 : e.isLiked,
                                      isDisliked: null == (t = a.entityMeta) ? void 0 : t.isDisliked,
                                      handleLike: i,
                                      handleDislike: r,
                                  };
                        })(),
                        _ = (0, n.zwV)(),
                        p = (0, Q.c)(() => {
                            if (i.entityMeta) {
                                if (r.modal.isOpened) return void r.modal.close();
                                r.modal.open();
                            }
                        });
                    return (
                        (0, u.useEffect)(() => {
                            if (!i.isGenerativeContext)
                                return (
                                    null == _ || _.addShortcutsListener(n.Mo.MAIN, n.lbr.TOGGLE_FULLSCREEN_PLAYER, p),
                                    null == _ || _.addShortcutsListener(n.Mo.MAIN, n.lbr.LIKE, o),
                                    null == _ || _.addShortcutsListener(n.Mo.MAIN, n.lbr.DISLIKE, m),
                                    () => {
                                        null == _ || _.removeShortcutsListener(n.Mo.MAIN, n.lbr.TOGGLE_FULLSCREEN_PLAYER),
                                            null == _ || _.removeShortcutsListener(n.Mo.MAIN, n.lbr.LIKE),
                                            null == _ || _.removeShortcutsListener(n.Mo.MAIN, n.lbr.DISLIKE);
                                    }
                                );
                        }, [m, o, _, i.isGenerativeContext, i.entityMeta, p]),
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(a ? au : ao, {
                                    className: (0, c.$)(t, t6().root),
                                    entityMeta: i.entityMeta,
                                    isLiked: l,
                                    isDisliked: d,
                                    onDislikeClick: m,
                                    onLikeClick: o,
                                }),
                                (0, s.jsx)(t2, { className: t6().adPopup }),
                                (0, s.jsx)(tX.M, {}),
                                (0, s.jsx)(t4, {}),
                            ],
                        })
                    );
                });
            var a_ = a(62937),
                ap = a.n(a_);
            let av = (0, d.PA)((e) => {
                    let { entityMeta: t, onLikeClick: a, className: i } = e,
                        {
                            promolanding: { state: r },
                        } = (0, n.Pjs)(),
                        l = F(t),
                        o = (0, I.d0)(),
                        d = (0, Q.c)(async (e) => {
                            await o(r, e, n.V_r.PROMO_LANDING);
                        }),
                        u = (0, Q.c)((e) => {
                            r.setVolume(e);
                        }),
                        _ = (0, ee.L)(() =>
                            t ? (0, s.jsx)(k.j7, { track: t, withSecondaryColor: !0, withAlbumLink: !1, withTrackLink: !1, withArtistLink: !1 }) : null,
                        );
                    return (0, s.jsxs)('section', {
                        style: l,
                        className: (0, c.$)(ap().root, i),
                        'aria-labelledby': ae,
                        ...(0, R.Am)(R.e8.player.PROMOLANDING_PLAYERBAR_DESKTOP),
                        children: [
                            (0, s.jsx)(tT.q, { children: (0, s.jsx)(v.Heading, { variant: 'h3', id: ae, children: (0, s.jsx)(m.A, { id: 'a11y-regions.player' }) }) }),
                            t &&
                                (0, s.jsxs)('div', {
                                    className: ap().info,
                                    children: [
                                        (0, s.jsxs)('div', {
                                            className: ap().infoCard,
                                            children: [
                                                (0, s.jsx)(tm.Paper, {
                                                    radius: 's',
                                                    className: ap().coverContainer,
                                                    children: (0, s.jsx)(h.BW, {
                                                        className: ap().cover,
                                                        src: t.coverUri,
                                                        size: 100,
                                                        fit: 'cover',
                                                        withAvatarReplace: !0,
                                                    }),
                                                }),
                                                (0, s.jsx)('div', { className: ap().description, children: _ }),
                                            ],
                                        }),
                                        (0, s.jsx)('div', {
                                            className: ap().infoButtons,
                                            children: (0, s.jsx)(h.cy, { className: ap().likeButton, isLiked: t.isLiked, onClick: a, iconSize: 'xs' }),
                                        }),
                                    ],
                                }),
                            (0, s.jsxs)('div', {
                                className: ap().sonata,
                                children: [
                                    (0, s.jsx)(I.jh, { isMobile: !1, entityMeta: t }),
                                    (0, s.jsx)(Y.v, { disabled: !t, isMobile: !1, isFullscreen: !1, sonataPlaybackId: n.V_r.PROMO_LANDING }),
                                ],
                            }),
                            (0, s.jsx)('div', {
                                className: ap().meta,
                                children: (0, s.jsx)(t9.r, { sonataVolume: r.volume, onVolumeSet: u, onVolumeClick: d, playbackId: n.V_r.PROMO_LANDING }),
                            }),
                        ],
                    });
                }),
                ah = (0, d.PA)((e) => {
                    let { onLikeClick: t, entityMeta: a, className: i } = e,
                        r = F(a),
                        l = (0, ee.L)(() =>
                            a ? (0, s.jsx)(k.j7, { track: a, withSecondaryColor: !0, withAlbumLink: !1, withTrackLink: !1, withArtistLink: !1 }) : null,
                        );
                    return (0, s.jsxs)('section', {
                        style: r,
                        className: (0, c.$)(ad().root, i),
                        children: [
                            (0, s.jsx)(tT.q, { children: (0, s.jsx)(v.Heading, { variant: 'h3', id: ae, children: (0, s.jsx)(m.A, { id: 'a11y-regions.player' }) }) }),
                            (0, s.jsx)(Y.v, {
                                className: ad().progressBar,
                                sliderClassName: ad().progressBar,
                                isMobile: !0,
                                isFullscreen: !1,
                                disabled: !a,
                                sonataPlaybackId: n.V_r.PROMO_LANDING,
                            }),
                            (0, s.jsxs)('div', {
                                className: ad().info,
                                children: [
                                    a &&
                                        (0, s.jsxs)('div', {
                                            className: ad().infoCard,
                                            children: [
                                                (0, s.jsx)(tm.Paper, {
                                                    radius: 's',
                                                    className: ad().coverContainer,
                                                    children: (0, s.jsx)(h.BW, { className: ad().cover, src: a.coverUri, size: 50, fit: 'cover', withAvatarReplace: !0 }),
                                                }),
                                                (0, s.jsx)('div', { className: ad().description, children: l }),
                                            ],
                                        }),
                                    (0, s.jsxs)('div', {
                                        className: ad().infoButtons,
                                        children: [
                                            a && (0, s.jsx)(h.cy, { isLiked: a.isLiked, iconSize: 'xs', onClick: t }),
                                            (0, s.jsx)(I.jh, { isMobile: !0, entityMeta: a }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                ag = (0, d.PA)((e) => {
                    let { className: t } = e,
                        {
                            settings: { isMobile: a },
                            promolanding: { state: i },
                        } = (0, n.Pjs)(),
                        r = (0, n.zwV)(),
                        l = (0, E.c5)(i.entityMeta);
                    (0, u.useEffect)(
                        () => (
                            null == r || r.addShortcutsListener(n.Mo.PROMO_LANDING, n.lbr.LIKE, l),
                            () => {
                                null == r || r.removeShortcutsListener(n.Mo.PROMO_LANDING, n.lbr.LIKE);
                            }
                        ),
                        [l, r],
                    );
                    let o = (0, ee.L)(() => (a ? ah : av));
                    return (0, s.jsx)(o, { onLikeClick: l, entityMeta: i.entityMeta, className: (0, c.$)(t6().root, t) });
                });
            var ax = a(96020),
                ay = a.n(ax);
            let ab = (0, d.PA)((e) => {
                let { className: t } = e,
                    {
                        advert: a,
                        user: r,
                        paywall: { modal: l },
                    } = (0, n.Pjs)(),
                    { notify: o, dismiss: d } = (0, n.lkh)(),
                    { formatMessage: p } = (0, O.A)(),
                    g = (0, n.zwV)(),
                    x = (0, n.rs2)(),
                    [b, A] = (0, u.useState)(!1),
                    C = (0, u.useRef)(null),
                    N = (0, u.useCallback)(
                        (e) => {
                            e.stopPropagation(), e.preventDefault(), l.open(), A(!0), null == x || x.pauseVideoAdvert(), d();
                        },
                        [x, d, l],
                    );
                (0, u.useEffect)(() => {
                    b && !l.isOpened && (A(!1), null == x || x.resumeVideoAdvert());
                }, [x, b, l.isOpened]);
                let f = (0, u.useCallback)(() => {
                    o(
                        (0, s.jsx)(h.$W, {
                            className: ay().notify,
                            message: (0, s.jsx)(v.Caption, {
                                className: ay().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                children: (0, s.jsx)(m.A, { id: 'ads.notification' }),
                            }),
                            cover: (0, s.jsx)(D.Icon, { className: ay().icon, variant: 'plusColor' }),
                            coverRadius: 'round',
                            withDefaultCloseButton: !1,
                            coverClassName: (0, c.$)(ay().cover, ay().important),
                            closeButton: (0, s.jsx)(_.$, {
                                className: ay().notifyClose,
                                variant: 'text',
                                color: 'primary',
                                size: 'xxs',
                                onClick: N,
                                withRipple: !1,
                                ref: C,
                                'data-intersection-property-id': 'video-ad-button',
                                children: (0, s.jsx)(m.A, { id: 'ads.disable-ads' }),
                            }),
                        }),
                        { containerId: n.uQT.AD_INFO },
                    );
                }, [N, o]);
                if (
                    ((0, u.useEffect)(() => {
                        if (!r.hasPlus)
                            return (
                                null == g ||
                                    g.addShortcutsListener(n.Mo.MAIN, n.lbr.CLOSE, () => {
                                        a.isAdvertShown && a.isVideoAdvert && f();
                                    }),
                                () => {
                                    null == g || g.removeShortcutsListener(n.Mo.MAIN, n.lbr.CLOSE);
                                }
                            );
                    }, [f, g, a.isAdvertShown, a.isVideoAdvert, r.hasPlus]),
                    r.hasPlus)
                )
                    return;
                let I = a.isAdvertShown && a.isVideoAdvert;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(K.a, {
                            className: (0, c.$)(ay().root, { [ay().root_hidden]: !I }, t),
                            contentClassName: ay().content,
                            placement: 'center',
                            showHeader: !1,
                            closeOnOutsidePress: !1,
                            escapeKey: !1,
                            withOverlay: I,
                            open: !0,
                            lockScroll: I,
                            overlayColor: 'full',
                            disableGuards: !I,
                            disableFocusTrap: !I,
                            ...(0, R.Am)(R.e8.ad.VIDEO_AD),
                            children: (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)(_.$, {
                                        className: ay().close,
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, s.jsx)(D.Icon, { variant: 'close', size: 'xxs' }),
                                        onClick: f,
                                        'aria-label': p({ id: 'interface-actions.close-ad' }),
                                        withRipple: !1,
                                    }),
                                    (0, s.jsx)(y, {
                                        data: a.data,
                                        mediaContent: (0, s.jsx)('div', {
                                            className: ay().videoBlock,
                                            id: i.SLOT,
                                            children: (0, s.jsx)('video', { id: i.VIDEO, className: ay().video }),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, s.jsx)(U.Notification, { enableMultiContainer: !0, containerId: n.uQT.AD_INFO, position: 'bottom-center' }),
                    ],
                });
            });
            ab.displayName = 'VideoAd';
        },
        82502: (e) => {
            e.exports = {
                root_primary: 'CommunicationButton_root_primary__rrmax',
                root_plus: 'CommunicationButton_root_plus__d48MV',
                root_secondary: 'CommunicationButton_root_secondary__YQujH',
                text: 'CommunicationButton_text__kObnq',
            };
        },
        83564: (e) => {
            e.exports = {
                root: 'TrailerFooter_root__LKXby',
                playButtonShimmer: 'TrailerFooter_playButtonShimmer__5QwPi',
                linkButtonShimmer: 'TrailerFooter_linkButtonShimmer__ZV1s1',
            };
        },
        85188: (e) => {
            e.exports = { root: 'FullscreenPlayerDesktopButton_root__qGgoC', button: 'FullscreenPlayerDesktopButton_button__7NEl6' };
        },
        85465: (e) => {
            e.exports = {
                timecode: 'TimecodeGroup_timecode__IJXpy',
                timecode_current: 'TimecodeGroup_timecode_current__wv9pb',
                timecode_current_animation: 'TimecodeGroup_timecode_current_animation__kZUW_',
                timecode_current_hidden: 'TimecodeGroup_timecode_current_hidden__D88_K',
                timecode_end: 'TimecodeGroup_timecode_end__kzP5g',
                timecode_end_hidden: 'TimecodeGroup_timecode_end_hidden__BxQ5h',
            };
        },
        86024: (e) => {
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
        87078: (e) => {
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
        87923: (e) => {
            e.exports = {
                root: 'TrackModalLyricsShimmer_root__t88sX',
                title: 'TrackModalLyricsShimmer_title__lIyk4',
                lyrics: 'TrackModalLyricsShimmer_lyrics__BSM_Q',
                important: 'TrackModalLyricsShimmer_important__U1BbD',
                button: 'TrackModalLyricsShimmer_button__uAG_w',
            };
        },
        88294: (e, t, a) => {
            'use strict';
            a.d(t, { Bx: () => C, t5: () => d, S3: () => o });
            var i = a(93064),
                n = a(67250),
                r = a(16213);
            let l = (e) => {
                    let { bgUrl: t, bgColor: a, title: n, text: l, titleColor: o, textColor: s, imageUrl: c, buttons: d } = e;
                    return (0, i.wg)({
                        bgUrl: t || null,
                        bgColor: a || null,
                        title: n || null,
                        text: l || null,
                        titleColor: o || null,
                        textColor: s || null,
                        imageUrl: c || null,
                        buttons: d.filter((e) => e.text).map(r.cZ),
                    });
                },
                o = (e) => {
                    let t = 'data' in e ? l(e.data) : l(e.div),
                        a = 'feedbackToken' in e ? e.feedbackToken : null,
                        r = 'anchorId' in e ? e.anchorId : n.v.ON_START_BAR_BELOW;
                    return (0, i.wg)({ anchorId: r, screenId: e.screenId, content: t, feedbackToken: a });
                },
                s = i.gK.model('BarBelowContent', {
                    bgUrl: i.gK.maybeNull(i.gK.string),
                    bgColor: i.gK.maybeNull(i.gK.string),
                    imageUrl: i.gK.maybeNull(i.gK.string),
                    title: i.gK.maybeNull(i.gK.string),
                    titleColor: i.gK.maybeNull(i.gK.string),
                    text: i.gK.maybeNull(i.gK.string),
                    textColor: i.gK.maybeNull(i.gK.string),
                    buttons: i.gK.array(r.__),
                }),
                c = i.gK.model('BarBelow', {
                    anchorId: i.gK.enumeration(Object.values(n.v)),
                    screenId: i.gK.string,
                    content: s,
                    feedbackToken: i.gK.maybeNull(i.gK.string),
                }),
                d = i.gK
                    .model('BarBelowMain', {
                        anchorId: i.gK.maybe(i.gK.string),
                        isVisible: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenShown: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenHidden: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenStarted: i.gK.maybe(i.gK.boolean),
                        list: i.gK.array(c),
                    })
                    .views((e) => ({
                        get barBelowItem() {
                            return e.list.find((t) => t.anchorId === e.anchorId);
                        },
                        get showWithAnimation() {
                            return !e.hasAnimationAlreadyBeenShown && e.isVisible;
                        },
                        get hideWithAnimation() {
                            return e.hasAnimationAlreadyBeenShown && !e.hasAnimationAlreadyBeenHidden && !e.isVisible;
                        },
                    }))
                    .actions((e) => ({
                        setAnchorId(t) {
                            e.anchorId = t;
                        },
                        show() {
                            e.isVisible = !0;
                        },
                        hide() {
                            e.isVisible = !1;
                        },
                        setAnimationAlreadyBeenShown() {
                            e.hasAnimationAlreadyBeenShown = !0;
                        },
                        setAnimationAlreadyBeenHidden() {
                            e.hasAnimationAlreadyBeenHidden = !0;
                        },
                        setAnimationAlreadyBeenStarted() {
                            e.hasAnimationAlreadyBeenStarted = !0;
                        },
                    }));
            var u = a(54486),
                m = a(50420),
                _ = a(28303),
                p = a(61910),
                v = a(43426),
                h = a(31500),
                g = a(58360),
                x = a(97800),
                y = a(83252),
                b = a(64052),
                A = a.n(b);
            let C = (0, _.PA)((e) => {
                var t, a, i, n;
                let { className: l, barBelow: o } = e,
                    { formatMessage: s } = (0, v.A)(),
                    c = (0, p.useMemo)(() => {
                        let e = { title: {}, text: {}, bg: {} };
                        if (!o.barBelowItem) return e;
                        let { titleColor: t, textColor: a, bgColor: i, bgUrl: n } = o.barBelowItem.content;
                        return (
                            t && (e.title.color = t),
                            a && (e.text.color = a),
                            i && (e.bg.backgroundColor = i),
                            n && (e.bg.backgroundImage = 'url("'.concat(o.barBelowItem.content.bgUrl, '")')),
                            e
                        );
                    }, [o]),
                    d = (0, p.useMemo)(() => {
                        var e;
                        return null == (e = o.barBelowItem)
                            ? void 0
                            : e.content.buttons.map((e) => {
                                  var t, a;
                                  return (0, u.jsx)(
                                      r.tL,
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
                    _ = (0, p.useCallback)(
                        (e) => {
                            e.animationName.includes('show') ? o.setAnimationAlreadyBeenShown() : e.animationName.includes('hide') && o.setAnimationAlreadyBeenHidden();
                        },
                        [o],
                    ),
                    b = (0, p.useCallback)(
                        (e) => {
                            e.animationName.includes('show') && o.setAnimationAlreadyBeenStarted();
                        },
                        [o],
                    );
                return (0, u.jsx)(y.rtM, {
                    page: y.l7W.MUSIC_DEEPLINK_SCREEN,
                    places: [y.RBW.TOP_BUTTON],
                    children: (0, u.jsxs)('section', {
                        className: (0, m.$)(
                            A().root,
                            { [A().root_hidden]: !o.isVisible && !o.hideWithAnimation, [A().root_show]: o.showWithAnimation, [A().root_hide]: o.hideWithAnimation },
                            l,
                        ),
                        style: c.bg,
                        onAnimationStart: b,
                        onAnimationEnd: _,
                        'aria-label': s({ id: 'bar-below.section-name' }),
                        ...(0, h.Am)(h.Kq.barBelow.BAR_BELOW),
                        children: [
                            (null == (t = o.barBelowItem) ? void 0 : t.content.imageUrl) &&
                                (0, u.jsx)(g.Image, {
                                    className: A().image,
                                    'aria-hidden': !0,
                                    src: null == (a = o.barBelowItem) ? void 0 : a.content.imageUrl,
                                    fit: 'contain',
                                    withAvatarReplace: !0,
                                    withAspectRatio: !0,
                                    ...(0, h.Am)(h.Kq.barBelow.BAR_BELOW_IMAGE),
                                }),
                            (0, u.jsxs)('div', {
                                className: A().content,
                                children: [
                                    (null == (i = o.barBelowItem) ? void 0 : i.content.title) &&
                                        (0, u.jsx)(x.Heading, {
                                            className: A().title,
                                            variant: 'h3',
                                            style: c.title,
                                            lineClamp: 2,
                                            ...(0, h.Am)(h.Kq.barBelow.BAR_BELOW_TITLE_TEXT),
                                            children: o.barBelowItem.content.title,
                                        }),
                                    (null == (n = o.barBelowItem) ? void 0 : n.content.text) &&
                                        (0, u.jsx)(x.Heading, {
                                            className: A().text,
                                            variant: 'h4',
                                            size: 'xs',
                                            style: c.text,
                                            lineClamp: 2,
                                            ...(0, h.Am)(h.Kq.barBelow.BAR_BELOW_SECONDARY_TEXT),
                                            children: o.barBelowItem.content.text,
                                        }),
                                ],
                            }),
                            (0, u.jsx)('div', { className: A().buttons, children: d }),
                        ],
                    }),
                });
            });
        },
        88684: (e) => {
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
                'swiper-pagination-disabled': 'ImageSliderModal_swiper-pagination-disabled__l_U2N',
                'swiper-pagination-clickable': 'ImageSliderModal_swiper-pagination-clickable__URGM_',
                'swiper-rtl': 'ImageSliderModal_swiper-rtl__6n6TQ',
                'swiper-horizontal': 'ImageSliderModal_swiper-horizontal__qVsPY',
                'swiper-vertical': 'ImageSliderModal_swiper-vertical__fVuXc',
                wrapper: 'ImageSliderModal_wrapper__s31SU',
                slide: 'ImageSliderModal_slide__4VnYF',
                loadingIndicator: 'ImageSliderModal_loadingIndicator__3yfbk',
                loadingIndicator_showed: 'ImageSliderModal_loadingIndicator_showed__Ec0yW',
            };
        },
        89488: (e) => {
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
        90812: (e) => {
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
        91126: (e) => {
            e.exports = {
                root: 'TrackModalSimilarTracks_root__EAOmg',
                title: 'TrackModalSimilarTracks_title__0WPaJ',
                item: 'TrackModalSimilarTracks_item__BGQWd',
                important: 'TrackModalSimilarTracks_important__mGqEv',
                tracksContainer: 'TrackModalSimilarTracks_tracksContainer__E55ep',
            };
        },
        91724: (e) => {
            e.exports = {
                root: 'PlayQueueDnDDraggableTrack_root__ysTVY',
                dots: 'PlayQueueDnDDraggableTrack_dots__enjOX',
                noHoverItem: 'PlayQueueDnDDraggableTrack_noHoverItem__uHRh1',
            };
        },
        91803: (e, t, a) => {
            'use strict';
            a.d(t, { ov: () => P, k8: () => m, fZ: () => s });
            var i = a(93064),
                n = a(67250),
                r = a(15209),
                l = a(16213);
            let o = (e) => {
                    let {
                        isModal: t,
                        withShadow: a,
                        closeActionId: n,
                        bgUrl: o,
                        bgUrlLarge: s,
                        bgColor: c,
                        logoUrl: d,
                        title: u,
                        text: m,
                        titleColor: _,
                        textColor: p,
                        buttons: v,
                        disclaimer: h,
                        disclaimerColor: g,
                    } = e;
                    return (0, i.wg)({
                        isModal: (0, r.toBoolean)(t),
                        withShadow: (0, r.toBoolean)(a),
                        closeActionId: n || null,
                        bgUrl: o || null,
                        bgUrlLarge: s || null,
                        bgColor: c || null,
                        logoUrl: d || null,
                        title: u || null,
                        text: m || null,
                        titleColor: _ || null,
                        textColor: p || null,
                        buttons: v.filter((e) => e.text).map(l.cZ),
                        disclaimer: h || null,
                        disclaimerColor: g || null,
                    });
                },
                s = (e) => {
                    let t = 'data' in e ? o(e.data) : o(e.div),
                        a = 'feedbackToken' in e ? e.feedbackToken : null,
                        r = 'anchorId' in e ? e.anchorId : n.v.ON_START_FULLSCREEN;
                    return (0, i.wg)({ anchorId: r, screenId: e.screenId, content: t, feedbackToken: a });
                };
            var c = a(26433);
            let d = i.gK.model('CommunicationModalContentModel', {
                    isModal: i.gK.boolean,
                    withShadow: i.gK.boolean,
                    closeActionId: i.gK.maybeNull(i.gK.string),
                    bgUrl: i.gK.maybeNull(i.gK.string),
                    bgUrlLarge: i.gK.maybeNull(i.gK.string),
                    bgColor: i.gK.maybeNull(i.gK.string),
                    logoUrl: i.gK.maybeNull(i.gK.string),
                    title: i.gK.maybeNull(i.gK.string),
                    titleColor: i.gK.maybeNull(i.gK.string),
                    text: i.gK.maybeNull(i.gK.string),
                    textColor: i.gK.maybeNull(i.gK.string),
                    buttons: i.gK.array(l.__),
                    disclaimer: i.gK.maybeNull(i.gK.string),
                    disclaimerColor: i.gK.maybeNull(i.gK.string),
                }),
                u = i.gK.model('CommunicationModal', {
                    anchorId: i.gK.enumeration(Object.values(n.v)),
                    screenId: i.gK.string,
                    content: d,
                    feedbackToken: i.gK.maybeNull(i.gK.string),
                }),
                m = c.qt
                    .props({ anchorId: i.gK.maybe(i.gK.enumeration(Object.values(n.v))), list: i.gK.array(u) })
                    .views((e) => ({
                        get modalItem() {
                            return e.list.find((t) => t.anchorId === e.anchorId);
                        },
                    }))
                    .actions((e) => ({
                        setAnchorId(t) {
                            e.anchorId = t;
                        },
                    }));
            var _ = a(54486),
                p = a(50420),
                v = a(28303),
                h = a(61910),
                g = a(43426),
                x = a(31500),
                y = a(77881),
                b = a(5956),
                A = a(58360),
                C = a(32692),
                N = a(97800),
                f = a(83252),
                I = a(80585),
                S = a(48167),
                T = a.n(S);
            let P = (0, v.PA)((e) => {
                var t, a, i, n, r, o;
                let { modal: s } = e,
                    { formatMessage: c } = (0, g.A)(),
                    { communication: d } = (0, f.Pjs)(),
                    u = null == (t = s.modalItem) ? void 0 : t.content.isModal,
                    m = (0, h.useMemo)(() => {
                        var e;
                        return null == (e = s.modalItem)
                            ? void 0
                            : e.content.buttons.map((e) => {
                                  var t;
                                  return (0, _.jsx)(
                                      l.tL,
                                      {
                                          screenId: null == (t = s.modalItem) ? void 0 : t.screenId,
                                          anchorId: s.anchorId,
                                          button: e,
                                          buttonSize: 'default',
                                          buttonClassName: T().button,
                                          textClassName: T().buttonText,
                                          hide: s.close,
                                          feedbackToken: s.modalItem ? s.modalItem.feedbackToken : null,
                                      },
                                      e.text,
                                  );
                              });
                    }, [s]),
                    v = (0, h.useMemo)(() => {
                        let e = { bg: {}, title: {}, text: {}, disclaimer: {} };
                        if (!s.modalItem) return e;
                        let { bgUrl: t, bgUrlLarge: a, bgColor: i, titleColor: n, textColor: r, disclaimerColor: l } = s.modalItem.content;
                        return (
                            t && (e.bg['--bg-url'] = 'url("'.concat(t, '")')),
                            a && (e.bg['--bg-url-large'] = 'url("'.concat(a, '")')),
                            i && (e.bg.backgroundColor = i),
                            n && (e.title.color = n),
                            r && (e.text.color = r),
                            l && (e.disclaimer.color = l),
                            e
                        );
                    }, [s]),
                    S = (0, h.useCallback)(() => {
                        s.modalItem &&
                            s.modalItem.content.closeActionId &&
                            d.action(s.modalItem.anchorId, s.modalItem.screenId, s.modalItem.content.closeActionId, s.modalItem.feedbackToken),
                            s.close();
                    }, [s, d]),
                    P = (0, h.useMemo)(() => {
                        var e;
                        if (null == (e = s.modalItem) ? void 0 : e.content.logoUrl)
                            return (0, _.jsx)(A.Image, {
                                className: T().image,
                                withAvatarReplace: !0,
                                withFallback: !1,
                                src: s.modalItem.content.logoUrl,
                                withAspectRatio: !0,
                                size: 400,
                                fit: 'cover',
                            });
                    }, [s]),
                    k = (0, h.useMemo)(() => {
                        var e;
                        return (
                            (null == (e = s.modalItem) ? void 0 : e.content.disclaimer) &&
                            (0, f.rVI)(s.modalItem.content.disclaimer, I.N_, { className: T().disclaimerLink, style: v.disclaimer, target: '_blank' })
                        );
                    }, [s, v]);
                return (0, _.jsxs)(C.a, {
                    style: v.bg,
                    className: (0, p.$)(T().root, u ? T().root_modal : T().root_fullscreen),
                    headerClassName: T().modalHeader,
                    contentClassName: T().modalContent,
                    header:
                        P &&
                        (0, _.jsx)('div', {
                            className: (0, p.$)(T().imageWrapper, T().imageWrapper_header),
                            ...(0, x.Am)(x.Kq.communicationModal.COMMUNICATION_MODAL_HEADER_LOGO),
                            children: P,
                        }),
                    open: s.isOpened,
                    onOpenChange: s.onOpenChange,
                    onClose: S,
                    closeOnOutsidePress: !1,
                    size: u ? 'fitContent' : 'fullscreen',
                    placement: 'center',
                    labelClose: c({ id: 'interface-actions.close' }),
                    customCloseButton: (0, _.jsx)(
                        y.$,
                        {
                            radius: 'round',
                            size: 'xxs',
                            icon: (0, _.jsx)(b.Icon, { className: T().closeButtonIcon, variant: 'close', size: 'xxs' }),
                            onClick: S,
                            'aria-label': c({ id: 'interface-actions.close' }),
                            className: T().closeButton,
                            withHover: !1,
                            ...(0, x.Am)(x.Kq.communicationModal.COMMUNICATION_MODAL_CLOSE_CROSS_BUTTON),
                        },
                        ''.concat(null == (a = s.modalItem) ? void 0 : a.anchorId, '-').concat(null == (i = s.modalItem) ? void 0 : i.content.closeActionId),
                    ),
                    ...(0, x.Am)(x.Kq.communicationModal.COMMUNICATION_MODAL),
                    children: [
                        (0, _.jsxs)('div', {
                            className: T().container,
                            children: [
                                (0, _.jsxs)('div', {
                                    className: T().wrapper,
                                    children: [
                                        P &&
                                            (0, _.jsx)('div', {
                                                className: (0, p.$)(T().imageWrapper, T().imageWrapper_content),
                                                ...(0, x.Am)(x.Kq.communicationModal.COMMUNICATION_MODAL_CONTENT_LOGO),
                                                children: P,
                                            }),
                                        (null == (n = s.modalItem) ? void 0 : n.content.title) &&
                                            (0, _.jsx)(N.Heading, {
                                                className: T().title,
                                                style: v.title,
                                                size: 'xl',
                                                weight: 'black',
                                                variant: 'h1',
                                                lineClamp: 3,
                                                ...(0, x.Am)(x.Kq.communicationModal.COMMUNICATION_MODAL_TITLE_TEXT),
                                                children: s.modalItem.content.title,
                                            }),
                                        (null == (r = s.modalItem) ? void 0 : r.content.text) &&
                                            (0, _.jsx)(N.Heading, {
                                                className: T().text,
                                                style: v.text,
                                                size: 'xs',
                                                variant: 'h2',
                                                lineClamp: 4,
                                                ...(0, x.Am)(x.Kq.communicationModal.COMMUNICATION_MODAL_CONTENT_TEXT),
                                                children: s.modalItem.content.text,
                                            }),
                                        (0, _.jsx)(f.rtM, {
                                            page: f.l7W.MUSIC_DEEPLINK_SCREEN,
                                            places: [f.RBW.TOP_BUTTON],
                                            children: (0, _.jsx)('div', { className: T().buttons, children: m }),
                                        }),
                                    ],
                                }),
                                (0, _.jsx)('div', {
                                    className: T().disclaimerWrapper,
                                    children: (0, _.jsx)(N.Caption, {
                                        className: T().disclaimer,
                                        style: v.disclaimer,
                                        type: 'text',
                                        variant: 'div',
                                        size: 'xs',
                                        weight: 'medium',
                                        ...(0, x.Am)(x.Kq.communicationModal.COMMUNICATION_MODAL_DISCLAIMER),
                                        children: k,
                                    }),
                                }),
                            ],
                        }),
                        !u && (null == (o = s.modalItem) ? void 0 : o.content.withShadow) && (0, _.jsx)('div', { className: T().gradientOverlay }),
                    ],
                });
            });
        },
        93622: (e) => {
            e.exports = {
                container: 'VideoPlayerContainer_container__pZe41',
                loadingIndicator: 'VideoPlayerContainer_loadingIndicator__qDxPV',
                root: 'VideoPlayerContainer_root__GHDoi',
                loadingIndicator_showed: 'VideoPlayerContainer_loadingIndicator_showed__KQCNf',
            };
        },
        95373: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => eu, v: () => b });
            var i = a(63930),
                n = a(93064),
                r = a(14287),
                l = a(70392),
                o = a(89461),
                s = a(83252),
                c = a(26433),
                d = a(63695),
                u = a(54460),
                m = a(21365);
            let _ = (e, t) => {
                let a = (0, m.vU)(e, t);
                if (null == t ? void 0 : t.albumId) {
                    var i, r;
                    let e = a.albums.find((e) => String(e.id) === String(t.albumId));
                    return {
                        ...a,
                        isBest: null == e || null == (i = e.bestAlbumTracks) ? void 0 : i.includes(Number(a.id)),
                        positionInAlbum: null == e || null == (r = e.trackPosition) ? void 0 : r.index,
                    };
                }
                return (0, n.wg)({ ...a });
            };
            var p = (function (e) {
                return (e.ALBUM = 'album'), (e.ARTIST = 'artist'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), e;
            })({});
            let v = n.gK
                .model('TrailerMeta', {
                    id: n.gK.string,
                    url: n.gK.string,
                    title: n.gK.maybe(n.gK.string),
                    uuid: n.gK.maybe(n.gK.string),
                    coverUri: n.gK.maybe(n.gK.string),
                    averageColor: n.gK.maybe(n.gK.string),
                    albumArtists: n.gK.maybe(n.gK.array(d.PK)),
                    albumType: n.gK.maybe(n.gK.string),
                })
                .views((e) => ({
                    getSharingProps(t) {
                        switch (t) {
                            case p.ALBUM:
                                return { pattern: '/album/:albumId', params: { albumId: e.id } };
                            case p.ARTIST:
                                return { pattern: '/artist/:artistId', params: { artistId: e.id } };
                            case p.PLAYLIST:
                                return { pattern: '/playlists/:playlistUuid', params: { playlistUuid: e.uuid } };
                            case p.TRACK:
                                return { pattern: '/track/:trackId', params: { trackId: e.id } };
                            default:
                                return { pattern: s.Zyd.main.href, params: {} };
                        }
                    },
                }));
            var h = a(63585),
                g = a(97719);
            let x = n.gK
                    .model('TrailerState', {
                        contextType: n.gK.maybeNull(n.gK.enumeration(Object.values(h.K))),
                        contextId: n.gK.maybeNull(n.gK.string),
                        entityMeta: n.gK.maybeNull(g.x5),
                        status: n.gK.enumeration(Object.values(o.MT)),
                    })
                    .actions((e) => ({
                        setContextId: (t) => {
                            e.contextId = String(t);
                        },
                        setContextType: (t) => {
                            e.contextType = t;
                        },
                        setEntityMeta: (t) => {
                            t && t.data.meta && (e.entityMeta = (0, g.pE)(t));
                        },
                        setStatus: (t) => {
                            e.status = t;
                        },
                    })),
                y = m.vj.props({ isBest: n.gK.maybe(n.gK.boolean), positionInAlbum: n.gK.maybe(n.gK.number) }).named('TrailerTrack'),
                b = n.gK
                    .compose(
                        n.gK.model('Trailer', {
                            id: n.gK.maybeNull(n.gK.string),
                            errorStatusCode: n.gK.maybeNull(n.gK.number),
                            modal: c.qt,
                            variant: n.gK.maybeNull(n.gK.enumeration(Object.values(p))),
                            tracks: n.gK.maybeNull(n.gK.array(y)),
                            meta: n.gK.maybeNull(v),
                            state: x,
                            withAnimation: n.gK.boolean,
                            shouldAutoStartPlaying: n.gK.boolean,
                            shouldSendEventOnTracksShowed: n.gK.boolean,
                            sonataStatusBeforeTrailerStart: n.gK.enumeration(Object.values(o.MT)),
                            isManuallyPaused: n.gK.boolean,
                            utmLinkModel: n.gK.maybe(s._eP),
                            title: n.gK.maybeNull(n.gK.string),
                            shareable: n.gK.maybeNull(n.gK.boolean),
                            personalColor: n.gK.maybeNull(n.gK.number),
                        }),
                        c.XT,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === s.GuX.PENDING;
                        },
                        get isNotFound() {
                            var t;
                            let a = e.loadingState === s.GuX.RESOLVE && (null == (t = e.tracks) ? void 0 : t.length) === 0,
                                i = e.errorStatusCode === r.X1.NOT_FOUND;
                            return a || i;
                        },
                        get objectId() {
                            return ''.concat(e.variant, ':').concat(e.id);
                        },
                        get utmLink() {
                            return e.utmLinkModel && (0, i.HO)(e.utmLinkModel);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setUtmLink(t) {
                                t && (e.utmLinkModel = (0, n.wg)(t));
                            },
                            resetUtmLink() {
                                e.utmLinkModel = void 0;
                            },
                            setAnimationState(t) {
                                e.withAnimation = t;
                            },
                            setShouldAutoStartPlaying(t) {
                                e.shouldAutoStartPlaying = t;
                            },
                            setShouldSendEventOnTracksShowed(t) {
                                e.shouldSendEventOnTracksShowed = t;
                            },
                            setIsManuallyPaused(t) {
                                e.isManuallyPaused = t;
                            },
                            isTrailerActive: (t, a) => !!e.modal.isOpened && e.variant === t && e.id === a,
                            openArtistTrailer(a) {
                                let { sonataState: i } = (0, n.Zn)(e);
                                t.isTrailerActive(p.ARTIST, a) ||
                                    (t.reset(), (e.variant = p.ARTIST), (e.id = a), (e.sonataStatusBeforeTrailerStart = i.status), e.modal.open(), t.getArtistTrailer(a));
                            },
                            openAlbumTrailer(a) {
                                let { sonataState: i } = (0, n.Zn)(e);
                                t.isTrailerActive(p.ALBUM, String(a)) ||
                                    (t.reset(),
                                    (e.variant = p.ALBUM),
                                    (e.id = String(a)),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getAlbumTrailer(a));
                            },
                            openPlaylistTrailer(a) {
                                let { sonataState: i } = (0, n.Zn)(e);
                                t.isTrailerActive(p.PLAYLIST, a) ||
                                    (t.reset(),
                                    (e.variant = p.PLAYLIST),
                                    (e.id = a),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getPlaylistTrailer(a));
                            },
                            openTrackTrailer(a) {
                                let { sonataState: i } = (0, n.Zn)(e);
                                t.isTrailerActive(p.TRACK, a) ||
                                    (t.reset(), (e.variant = p.TRACK), (e.id = a), (e.sonataStatusBeforeTrailerStart = i.status), e.modal.open(), t.getTrackTrailer(a));
                            },
                            getArtistTrailer: (0, n.L3)(function* (a) {
                                let { artistsResource: i } = (0, n._$)(e);
                                if (e.loadingState !== s.GuX.PENDING)
                                    try {
                                        e.loadingState = s.GuX.PENDING;
                                        let { artist: t, trailer: r } = yield i.getTrailer({ artistId: a });
                                        r.tracks && (e.tracks = (0, n.wg)(r.tracks.map((e) => _(e, { isSmartPreview: !0 })))),
                                            r.title && (e.title = r.title),
                                            t &&
                                                (e.meta = ((e) => {
                                                    var t, a;
                                                    let { href: i } = (0, s.uvd)('/artist/:artistId', { params: { artistId: e.id } });
                                                    return (0, n.wg)({
                                                        id: String(e.id),
                                                        url: i,
                                                        title: e.name,
                                                        coverUri: null == (t = e.cover) ? void 0 : t.uri,
                                                        averageColor: null == (a = e.cover) ? void 0 : a.color,
                                                    });
                                                })(t)),
                                            (e.loadingState = s.GuX.RESOLVE);
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getAlbumTrailer: (0, n.L3)(function* (a) {
                                let { albumResource: i } = (0, n._$)(e);
                                if (e.loadingState !== s.GuX.PENDING)
                                    try {
                                        e.loadingState = s.GuX.PENDING;
                                        let { album: t, artists: r, trailer: l } = yield i.getTrailer({ albumId: a });
                                        l.tracks && (e.tracks = (0, n.wg)(l.tracks.map((e) => _(e, { isSmartPreview: !0, albumId: t.id })))),
                                            l.title && (e.title = l.title),
                                            t &&
                                                (e.meta = ((e, t) => {
                                                    var a, i;
                                                    let r = null == t ? void 0 : t.map((e) => (0, d.as)({ artist: e })),
                                                        { href: l } = (0, s.uvd)('/album/:albumId', { params: { albumId: e.id } });
                                                    return (0, n.wg)({
                                                        id: String(e.id),
                                                        url: l,
                                                        title: e.title,
                                                        coverUri: null == (a = e.cover) ? void 0 : a.uri,
                                                        averageColor: null == (i = e.cover) ? void 0 : i.color,
                                                        albumArtists: r,
                                                        albumType: e.albumType,
                                                    });
                                                })(t, r)),
                                            (e.loadingState = s.GuX.RESOLVE);
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getPlaylistTrailer: (0, n.L3)(function* (a) {
                                let { usersResource: i } = (0, n._$)(e);
                                if (e.loadingState !== s.GuX.PENDING)
                                    try {
                                        e.loadingState = s.GuX.PENDING;
                                        let { uid: t, kind: r } = (0, l.I)(a);
                                        if (!t || !r) {
                                            e.loadingState = s.GuX.REJECT;
                                            return;
                                        }
                                        let {
                                            playlist: o,
                                            trailer: c,
                                            shareable: d,
                                            personalColor: u,
                                        } = yield i.getPlaylistTrailer({ userId: t, playlistKind: Number(r) });
                                        c.tracks && (e.tracks = (0, n.wg)(c.tracks.map((e) => _(e, { isSmartPreview: !0 })))),
                                            c.title && (e.title = c.title),
                                            d && (e.shareable = d),
                                            u && (e.personalColor = u),
                                            o &&
                                                (e.meta = ((e) => {
                                                    var t, a;
                                                    let { href: i } = (0, s.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                                                    return (0, n.wg)({
                                                        id: ''.concat(e.uid, ':').concat(e.kind),
                                                        url: i,
                                                        uuid: e.playlistUuid,
                                                        title: e.title,
                                                        coverUri: null == (t = e.cover) ? void 0 : t.uri,
                                                        averageColor: null == (a = e.cover) ? void 0 : a.color,
                                                    });
                                                })(o)),
                                            (e.loadingState = s.GuX.RESOLVE);
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getTrackTrailer: (0, n.L3)(function* (a) {
                                let { tracksResource: i } = (0, n._$)(e);
                                if (e.loadingState !== s.GuX.PENDING)
                                    try {
                                        e.loadingState = s.GuX.PENDING;
                                        let { track: t, title: c } = yield i.getTrailer({ trackId: a });
                                        if ((c && (e.title = c), t)) {
                                            var r, l, o;
                                            (e.tracks = (0, n.wg)([_(t, { isSmartPreview: !0 })])),
                                                (e.meta = (0, n.wg)({
                                                    id: String(t.id),
                                                    url: (0, u.$O)(t.id, null == (l = t.albums) || null == (r = l[0]) ? void 0 : r.id),
                                                    title: t.title,
                                                    coverUri: t.coverUri,
                                                    averageColor: null == (o = t.derivedColors) ? void 0 : o.average,
                                                }));
                                        }
                                        e.loadingState = s.GuX.RESOLVE;
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            handleError(t) {
                                let { modelActionsLogger: a } = (0, n._$)(e);
                                a.error(t),
                                    t instanceof r.GX && (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) && (e.errorStatusCode = r.X1.NOT_FOUND),
                                    e.loadingState !== s.GuX.IDLE && (e.loadingState = s.GuX.REJECT);
                            },
                            reset() {
                                (e.loadingState = s.GuX.IDLE),
                                    (e.errorStatusCode = null),
                                    (e.variant = null),
                                    (e.id = null),
                                    (e.tracks = null),
                                    (e.meta = null),
                                    (e.withAnimation = !0),
                                    (e.shouldAutoStartPlaying = !0),
                                    (e.shouldSendEventOnTracksShowed = !0),
                                    (e.sonataStatusBeforeTrailerStart = o.MT.IDLE),
                                    (e.isManuallyPaused = !0),
                                    (e.title = null),
                                    (e.shareable = null),
                                    (e.personalColor = null);
                            },
                        };
                        return t;
                    });
            var A = a(54486),
                C = a(28303),
                N = a(61910),
                f = a(43426),
                I = a(31500),
                S = a(77881),
                T = a(5956),
                P = a(32692),
                k = a(43350),
                E = a(62395);
            let j = () => {
                let e = (0, E.st)(),
                    t = (0, s.UlF)(),
                    { hash: a } = (0, E.gf)(),
                    { pageId: i } = (0, s.$au)();
                return (0, N.useCallback)(
                    (n) => {
                        if (!e || !i) return;
                        let r = { hash: a, pageId: s.Wft[i], mainObjectType: k.ky.Trailer, mainObjectId: n },
                            l = (0, k.Fx)({ params: r, logger: t, context: 'useSendEventOnTrailerClosed' });
                        l && (0, k.XB)(e.evgenInstance, l);
                    },
                    [e, a, t, i],
                );
            };
            var L = a(50420),
                w = a(9348),
                M = a(80585);
            let B = () => {
                    let e = (0, E.st)(),
                        t = (0, s.UlF)(),
                        { hash: a } = (0, E.gf)(),
                        { pageId: i } = (0, s.$au)();
                    return (0, N.useCallback)(
                        (n, r) => {
                            if (!e || !i) return;
                            let l = { hash: a, pageId: s.Wft[i], mainObjectType: k.ky.Trailer, mainObjectId: n };
                            r && ((l.actionType = k.X2.Pause), (l.userInteractionType = k.gi.Tap));
                            let o = (0, k.Fx)({ params: l, logger: t, context: 'useSendEventOnTrailerStarted' });
                            o &&
                                (r && ((e) => 'object' == typeof e && null !== e && 'actionType' in e && 'mainObjectId' in e)(o)
                                    ? (0, k.bv)(e.evgenInstance, o)
                                    : (0, k.e7)(e.evgenInstance, o));
                        },
                        [e, a, t, i],
                    );
                },
                O = (e) => {
                    let { variant: t, blockId: a, meta: i } = e,
                        n = ((e) => {
                            switch (e) {
                                case p.ALBUM:
                                    return s._Q$.ALBUM;
                                case p.ARTIST:
                                    return s._Q$.ARTIST;
                                case p.PLAYLIST:
                                    return s._Q$.PLAYLIST;
                                case p.TRACK:
                                    return s._Q$.TRACK;
                            }
                        })(t),
                        r = ((e) => {
                            switch (e) {
                                case p.ALBUM:
                                    return h.K.Album;
                                case p.ARTIST:
                                    return h.K.Artist;
                                case p.PLAYLIST:
                                    return h.K.Playlist;
                                case p.TRACK:
                                default:
                                    return h.K.Various;
                            }
                        })(t),
                        l = (null == i ? void 0 : i.uuid) || (null == i ? void 0 : i.id);
                    return (0, s.fyy)({ pageId: n, blockId: a, contextId: l, contextType: r, pageEntityId: l });
                },
                R = (e) => {
                    let { variant: t, id: a, from: i, uuid: n, utmLink: r } = e;
                    switch (t) {
                        case p.ALBUM:
                            return { type: h.K.Album, trailer: !0, meta: { id: Number(a) }, from: i, utmLink: r };
                        case p.ARTIST:
                            return { type: h.K.Artist, trailer: !0, meta: { id: String(a) }, from: i, utmLink: r };
                        case p.PLAYLIST:
                            return { type: h.K.Playlist, trailer: !0, meta: { id: String(a), uuid: n }, from: i, utmLink: r };
                        case p.TRACK:
                            return { type: h.K.Various, trailer: !0, meta: { id: String(a) }, from: i, utmLink: r };
                    }
                };
            var D = a(47713),
                K = a(97800),
                U = a(74504),
                F = a.n(U);
            let z = (0, C.PA)(() => {
                    let { trailer: e } = (0, s.Pjs)(),
                        { variant: t, id: a } = e,
                        i = (0, N.useCallback)(() => {
                            if (t && a)
                                switch (t) {
                                    case p.ALBUM:
                                        e.getAlbumTrailer(Number(a));
                                        break;
                                    case p.ARTIST:
                                        e.getArtistTrailer(a);
                                        break;
                                    case p.PLAYLIST:
                                        e.getPlaylistTrailer(a);
                                        break;
                                    case p.TRACK:
                                        e.getTrackTrailer(a);
                                }
                        }, [a, e, t]);
                    return (0, A.jsxs)('div', {
                        className: F().root,
                        children: [
                            (0, A.jsxs)('div', {
                                className: F().textContainer,
                                children: [
                                    (0, A.jsx)(K.Heading, {
                                        variant: 'h2',
                                        className: F().title,
                                        size: 'xs',
                                        weight: 'bold',
                                        children: (0, A.jsx)(D.A, { id: 'error-messages.something-went-wrong' }),
                                    }),
                                    (0, A.jsx)(K.Caption, {
                                        className: F().description,
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, A.jsx)(D.A, { id: 'trailer.something-went-wrong-description' }),
                                    }),
                                ],
                            }),
                            (0, A.jsx)(S.$, {
                                onClick: i,
                                color: 'secondary',
                                size: 'default',
                                radius: 'xxxl',
                                children: (0, A.jsx)(K.Caption, { type: 'controls', variant: 'span', size: 'm', children: (0, A.jsx)(D.A, { id: 'page-error.reload' }) }),
                            }),
                        ],
                    });
                }),
                V = () =>
                    (0, A.jsx)('div', {
                        className: F().root,
                        children: (0, A.jsxs)('div', {
                            className: F().textContainer,
                            children: [
                                (0, A.jsx)(K.Heading, {
                                    variant: 'h2',
                                    className: F().title,
                                    size: 'xs',
                                    weight: 'bold',
                                    children: (0, A.jsx)(D.A, { id: 'trailer.not-found-title' }),
                                }),
                                (0, A.jsx)(K.Caption, {
                                    className: F().description,
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: (0, A.jsx)(D.A, { id: 'trailer.not-found-description' }),
                                }),
                            ],
                        }),
                    });
            var W = a(22674);
            let G = () => {
                    let e = (0, E.st)(),
                        t = (0, s.UlF)(),
                        { hash: a } = (0, E.gf)(),
                        { pageId: i } = (0, s.$au)();
                    return (0, N.useCallback)(
                        (n, r) => {
                            if (!e || !i) return;
                            let l = { hash: a, pageId: s.Wft[i], mainObjectType: k.ky.Trailer, mainObjectId: n, from: k.QT.TrailerScreen, to: s.Wft[r] },
                                o = (0, k.Fx)({ params: l, logger: t, context: 'useSendEventOnTrailerNavigated' });
                            o && (0, k.Mu)(e.evgenInstance, o);
                        },
                        [e, a, t, i],
                    );
                },
                Y = { [p.ALBUM]: k.ky.Album, [p.ARTIST]: k.ky.Artist, [p.PLAYLIST]: k.ky.Playlist, [p.TRACK]: k.ky.Track },
                Q = { [p.ALBUM]: s._Q$.ALBUM, [p.ARTIST]: s._Q$.ARTIST, [p.PLAYLIST]: s._Q$.PLAYLIST };
            var $ = a(83564),
                q = a.n($);
            let H = (0, C.PA)((e) => {
                var t, a;
                let { variant: i, isShimmerVisible: n, isShimmerActive: r, className: l } = e,
                    {
                        trailer: { state: c, meta: d, modal: u, objectId: m, resetUtmLink: _ },
                    } = (0, s.Pjs)(),
                    v = (0, s.eGp)(),
                    { from: g } = O({ variant: i, blockId: s.UfI.TRAILER }),
                    x = G(),
                    y = j(),
                    b = (() => {
                        let e = (0, E.st)(),
                            t = (0, s.UlF)(),
                            { hash: a } = (0, E.gf)(),
                            { pageId: i } = (0, s.$au)();
                        return (0, N.useCallback)(
                            (n, r) => {
                                if (!e || !i) return;
                                let l = { hash: a, pageId: s.Wft[i], mainObjectType: n, mainObjectId: r },
                                    o = (0, k.Fx)({ params: l, logger: t, context: 'useSendEventOnTrailerEntityStarted' });
                                o && (0, k.e7)(e.evgenInstance, o);
                            },
                            [e, a, t, i],
                        );
                    })(),
                    C = (0, s.ZpR)(null != (a = null == d ? void 0 : d.url) ? a : ''),
                    f = (0, N.useCallback)(() => {
                        C();
                        let e = Q[i];
                        e && x(m, e);
                    }, [C, m, x, i]),
                    P = ((e) => {
                        let {
                            trailer: { meta: t },
                            artist: a,
                            album: i,
                            playlist: n,
                        } = (0, s.Pjs)();
                        switch (e) {
                            case p.ALBUM:
                                return i.id === Number(null == t ? void 0 : t.id);
                            case p.ARTIST:
                                return a.id === (null == t ? void 0 : t.id);
                            case p.PLAYLIST:
                                return n.uuid === (null == t ? void 0 : t.uuid);
                            case p.TRACK:
                                return !1;
                        }
                    })(i),
                    w = !P && i !== p.TRACK,
                    M = (0, N.useCallback)(() => {
                        var e, t, a, n;
                        let r =
                            null == v || null == (a = v.playbackController.activePlayback.value) || null == (t = a.state) || null == (e = t.currentContext.value)
                                ? void 0
                                : e.utmLink;
                        null == v || v.stop(s.V_r.TRAILER), _(), u.close(), y(m), w && f();
                        let l = c.status !== o.MT.PLAYING || i === p.ALBUM ? { index: 0 } : { entityId: null == (n = c.entityMeta) ? void 0 : n.id },
                            x = ((e) => {
                                let { variant: t, id: a, from: i, uuid: n, utmLink: r } = e;
                                switch (t) {
                                    case p.ALBUM:
                                        return { type: h.K.Album, meta: { id: Number(a) }, from: i, utmLink: r };
                                    case p.ARTIST:
                                        return { type: h.K.Artist, meta: { id: String(a) }, from: i, utmLink: r };
                                    case p.PLAYLIST:
                                        return { type: h.K.Playlist, meta: { id: String(a), uuid: n }, from: i, utmLink: r };
                                    case p.TRACK:
                                        return { type: h.K.Various, meta: { id: String(a) }, from: i, utmLink: r };
                                }
                            })({ variant: i, id: null == d ? void 0 : d.id, uuid: null == d ? void 0 : d.uuid, from: g, utmLink: r });
                        null == v ||
                            v.playContext({ contextData: x, queueParams: l }).then(() => {
                                (null == d ? void 0 : d.id) && b(Y[i], d.id);
                            });
                    }, [v, _, u, y, m, w, c.status, null == (t = c.entityMeta) ? void 0 : t.id, i, null == d ? void 0 : d.id, null == d ? void 0 : d.uuid, g, f, b]),
                    B = (0, N.useMemo)(
                        () =>
                            (0, A.jsxs)('div', {
                                className: (0, L.$)(q().root, l),
                                children: [
                                    (0, A.jsx)(S.$, {
                                        radius: 'xxxl',
                                        size: 'default',
                                        color: 'secondary',
                                        icon: (0, A.jsx)(T.Icon, { variant: 'play', size: 'xxxs' }),
                                        className: q().button,
                                        onClick: M,
                                        ...(0, I.Am)(I.e8.trailer.TRAILER_LISTEN_FULL_VERSION_BUTTON),
                                        children: (0, A.jsx)(D.A, { id: 'trailer.listen-full-version' }),
                                    }),
                                    w &&
                                        (0, A.jsx)(S.$, {
                                            radius: 'xxxl',
                                            size: 'default',
                                            color: 'secondary',
                                            onClick: f,
                                            className: q().button,
                                            ...(0, I.Am)(I.e8.trailer.TRAILER_NAVIGATE_TO_ENTITY_BUTTON),
                                            children: (0, A.jsx)(D.A, { id: 'trailer.navigate' }),
                                        }),
                                ],
                            }),
                        [l, M, f, w],
                    );
                return n
                    ? ((e) => {
                          let { isActive: t, className: a, isCurrentEntityPage: i } = e;
                          return (0, A.jsxs)('div', {
                              className: (0, L.$)(q().root, a),
                              children: [
                                  (0, A.jsx)(W.Shimmer, { isActive: t, radius: 'xxxl', className: q().playButtonShimmer }),
                                  i && (0, A.jsx)(W.Shimmer, { isActive: t, radius: 'xxxl', className: q().linkButtonShimmer }),
                              ],
                          });
                      })({ isActive: r, isCurrentEntityPage: P, className: l })
                    : B;
            });
            var X = a(8817),
                Z = a(58360),
                J = a(6971),
                ee = a(33320),
                et = a.n(ee);
            let ea = (0, C.PA)((e) => {
                var t;
                let { variant: a, isShimmerVisible: i, isShimmerActive: n, className: r } = e,
                    {
                        trailer: { meta: l, objectId: o, utmLink: c, personalColor: d, shareable: u, title: m, state: _ },
                        playlist: { shouldShowTrailerOnboarding: v, isRewind2024Playlist: h },
                    } = (0, s.Pjs)(),
                    { from: g } = O({ variant: a, blockId: s.UfI.TRAILER, meta: l }),
                    x = G(),
                    y = B(),
                    b = (0, s.brA)(),
                    C = a === p.ARTIST ? 'round' : 's',
                    { notify: f } = (0, s.lkh)(),
                    P = (0, s.PT7)(),
                    k = (0, A.jsx)(D.A, { id: 'onboarding.rewind-trailer', values: { br: (0, A.jsx)('br', {}) } }),
                    { togglePlay: E, isPlaying: j } = (0, s.Dx4)({
                        playContextParams: {
                            contextData: R({ variant: a, id: null == l ? void 0 : l.id, uuid: null == l ? void 0 : l.uuid, from: g, utmLink: c }),
                            loadContextMeta: !0,
                        },
                        sonataState: _,
                        playbackId: s.V_r.TRAILER,
                    }),
                    w = (0, X.c)(() => {
                        P() || (y(o, j), E(), b(!j));
                    }),
                    U = (0, N.useCallback)(() => {
                        let e = Q[a];
                        e && x(o, e);
                    }, [o, x, a]),
                    F = (0, s.R4Z)(d || 0),
                    z = (0, s.mBl)(d || 0),
                    V = (0, N.useMemo)(() => {
                        let e, t;
                        return (
                            'number' == typeof d ? ((e = F), (t = z)) : (e = { '--trailer-color': null == l ? void 0 : l.averageColor }),
                            (0, A.jsxs)('div', {
                                className: et().coverContainer,
                                ...(0, I.Am)(I.e8.trailer.TRAILER_COVER),
                                children: [
                                    (0, A.jsx)(J.Paper, {
                                        radius: C,
                                        className: et().cover,
                                        style: t,
                                        withShadow: !0,
                                        children: (0, A.jsx)(Z.Image, {
                                            'aria-hidden': !0,
                                            src: null == l ? void 0 : l.coverUri,
                                            size: 100,
                                            fit: 'cover',
                                            withAvatarReplace: !0,
                                        }),
                                    }),
                                    (0, A.jsx)('div', {
                                        className: et().iconContainer,
                                        style: e,
                                        children: (0, A.jsx)(T.Icon, { variant: 'trailer', size: 'xs', className: et().icon }),
                                    }),
                                ],
                            })
                        );
                    }, [C, null == l ? void 0 : l.coverUri, z, null == l ? void 0 : l.averageColor, d, F]),
                    Y = (0, N.useMemo)(() => {
                        let e = null == l ? void 0 : l.url;
                        return e
                            ? (0, A.jsx)(M.N_, {
                                  href: e,
                                  className: et().link,
                                  onClick: U,
                                  ...(0, I.Am)(I.e8.trailer.TRAILER_ENTITY_TITLE),
                                  children: (0, A.jsx)(K.Caption, {
                                      variant: 'span',
                                      type: 'controls',
                                      lineClamp: 1,
                                      className: et().text,
                                      children: null == l ? void 0 : l.title,
                                  }),
                              })
                            : (0, A.jsx)(K.Caption, {
                                  variant: 'span',
                                  type: 'controls',
                                  lineClamp: 1,
                                  className: et().text,
                                  ...(0, I.Am)(I.e8.trailer.TRAILER_ENTITY_TITLE),
                                  children: null == l ? void 0 : l.title,
                              });
                    }, [U, l]),
                    $ = (0, N.useMemo)(
                        () =>
                            (0, A.jsxs)('div', {
                                className: et().textContainer,
                                children: [
                                    (0, A.jsx)(K.Heading, {
                                        variant: 'h1',
                                        className: (0, L.$)(et().text, et().title),
                                        lineClamp: 1,
                                        ...(0, I.Am)(I.e8.trailer.TRAILER_MODAL_TITLE),
                                        children: m,
                                    }),
                                    Y,
                                ],
                            }),
                        [Y, m],
                    ),
                    { pattern: q, params: H } = null != (t = null == l ? void 0 : l.getSharingProps(a)) ? t : { pattern: s.Zyd.main.href, params: {} },
                    { shareLink: ee } = (0, s.bNS)(q, { params: H, query: { [s.K3F.OPEN_TRAILER]: 'true' } }),
                    ea = (0, N.useCallback)(async () => {
                        await window.navigator.clipboard.writeText(ee),
                            f(
                                (0, A.jsx)(M.Do, {
                                    entityTitle: null == l ? void 0 : l.title,
                                    entityVariant: ((e) => {
                                        switch (e) {
                                            case p.ALBUM:
                                                return s.Yxq.ALBUM;
                                            case p.ARTIST:
                                                return s.Yxq.ARTIST;
                                            case p.PLAYLIST:
                                                return s.Yxq.PLAYLIST;
                                            case p.TRACK:
                                                return s.Yxq.TRACK;
                                        }
                                    })(a),
                                }),
                                { containerId: s.uQT.INFO },
                            );
                    }, [ee, f, null == l ? void 0 : l.title, a]);
                return (0, A.jsxs)('div', {
                    className: (0, L.$)(et().root, r),
                    ...(0, I.Am)(I.e8.trailer.TRAILER_HEADER),
                    children: [
                        i ? (0, A.jsx)('div', { className: et().coverContainer, children: (0, A.jsx)(W.Shimmer, { isActive: n, radius: C, className: et().cover }) }) : V,
                        i
                            ? ((e) =>
                                  (0, A.jsxs)('div', {
                                      className: et().textContainer,
                                      children: [
                                          (0, A.jsx)('div', {
                                              className: et().shimmerContainer,
                                              children: (0, A.jsx)(W.Shimmer, { isActive: e, radius: 'xl', className: et().titleShimmer }),
                                          }),
                                          (0, A.jsx)('div', {
                                              className: et().shimmerContainer,
                                              children: (0, A.jsx)(W.Shimmer, { isActive: e, radius: 'xl', className: et().descriptionShimmer }),
                                          }),
                                      ],
                                  }))(n)
                            : $,
                        !i &&
                            u &&
                            (0, A.jsx)(S.$, {
                                className: et().share,
                                icon: (0, A.jsx)(T.Icon, { variant: 'share', size: 'xxs' }),
                                onClick: ea,
                                variant: 'text',
                                withRipple: !1,
                                withHover: !1,
                            }),
                        !i &&
                            (0, A.jsx)(M.cv, {
                                customMessage: h ? k : void 0,
                                shouldForceOpenTooltip: !!v,
                                children: (0, A.jsx)(M.DM, {
                                    className: et().playButton,
                                    iconSize: 'm',
                                    variant: 'filled',
                                    isPlaying: j,
                                    iconClassName: et().playButtonIcon,
                                    onClick: w,
                                }),
                            }),
                    ],
                });
            });
            var ei = a(44342),
                en = a.n(ei);
            let er = (0, C.PA)((e) => {
                let { variant: t, track: a, playContextParams: i, viewUuid: n } = e,
                    {
                        trailer: { meta: r, objectId: l, shouldSendEventOnTracksShowed: c, setShouldSendEventOnTracksShowed: d },
                    } = (0, s.Pjs)(),
                    u = t === p.ALBUM ? m.g2 : m.nP,
                    { isActive: _, progress: v } = ((e, t) => {
                        var a;
                        let i = (0, s.eGp)(),
                            {
                                trailer: { state: n },
                            } = (0, s.Pjs)(),
                            [r, l] = (0, N.useState)(0),
                            c = (null == (a = n.entityMeta) ? void 0 : a.id) === e;
                        return (
                            (0, N.useEffect)(() => {
                                let e =
                                    null == i
                                        ? void 0
                                        : i.getState(s.V_r.TRAILER).playerState.progress.onChange(() => {
                                              let e,
                                                  a = i.getState(s.V_r.TRAILER).playerState,
                                                  n = a.progress.value;
                                              (e = t ? t / 1e3 : n.duration), c || l(0), a.status.value === o.MT.PLAYING && c && l((n.position / e) * 100);
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [t, c, i]),
                            { isActive: c, progress: r }
                        );
                    })(a.id, a.durationMs),
                    h = ((e, t) => {
                        let a = (0, s.UlF)(),
                            i = (0, E.st)(),
                            { hash: n } = (0, E.gf)(),
                            { pageId: r } = (0, s.$au)(),
                            { blockType: l, blockId: o, blockPosX: c, blockPosY: d } = (0, s.N8n)(),
                            { objectType: u, objectsCount: m, objectId: _, objectPosX: p, objectPosY: v } = (0, s.Jfv)();
                        return (0, N.useCallback)(() => {
                            if (!i || !r) return;
                            let h = s.Wft[r];
                            if (!h) return;
                            let g = {
                                    hash: n,
                                    pageId: h,
                                    mainObjectType: k.ky.Trailer,
                                    mainObjectId: e,
                                    entityType: l,
                                    entityId: o,
                                    entityPosX: c,
                                    entityPosY: d,
                                    objectsCount: m,
                                    viewUuid: t,
                                    objectType: u,
                                    objectId: _,
                                    objectPosX: p,
                                    objectPosY: v,
                                },
                                x = (0, k.Fx)({ params: g, logger: a, context: 'useSendEventOnSmartPreviewShowed' });
                            x && (0, k.Pf)(i.evgenInstance, x);
                        }, [i, o, c, d, l, n, a, e, _, p, v, u, m, r, t]);
                    })(l, n),
                    g = ((e) => {
                        let t = (0, s.UlF)(),
                            a = (0, E.st)(),
                            { hash: i } = (0, E.gf)(),
                            { pageId: n } = (0, s.$au)(),
                            { blockType: r, blockId: l, blockPosX: o, blockPosY: c } = (0, s.N8n)(),
                            { objectType: d, objectsCount: u, objectId: m, objectPosX: _, objectPosY: p } = (0, s.Jfv)();
                        return (0, N.useCallback)(
                            (v) => {
                                if (!a || !n) return;
                                let h = s.Wft[n];
                                if (!h) return;
                                let g = {
                                    hash: i,
                                    pageId: h,
                                    mainObjectType: k.ky.Trailer,
                                    mainObjectId: e,
                                    entityType: r,
                                    entityId: l,
                                    entityPosX: o,
                                    entityPosY: c,
                                    objectsCount: u,
                                    objectType: d,
                                    objectId: m,
                                    objectPosX: _,
                                    objectPosY: p,
                                };
                                v || ((g.actionType = k.X2.Pause), (g.userInteractionType = k.gi.Tap));
                                let x = (0, k.Fx)({ params: g, logger: t, context: 'useSendEventOnSmartPreviewStarted' });
                                x &&
                                    (!v && ((e) => 'object' == typeof e && null !== e && 'actionType' in e && 'mainObjectId' in e)(x)
                                        ? (0, k.h_)(a.evgenInstance, x)
                                        : (0, k.er)(a.evgenInstance, x));
                            },
                            [a, l, o, c, r, i, t, e, m, _, p, d, u, n],
                        );
                    })(l),
                    x = ((e) => {
                        let t = (0, s.UlF)(),
                            a = (0, E.st)(),
                            { hash: i } = (0, E.gf)(),
                            { pageId: n } = (0, s.$au)(),
                            { blockType: r, blockId: l, blockPosX: o, blockPosY: c } = (0, s.N8n)(),
                            { objectType: d, objectsCount: u, objectId: m, objectPosX: _, objectPosY: p } = (0, s.Jfv)();
                        return (0, N.useCallback)(
                            (v) => {
                                if (!a || !n) return;
                                let h = s.Wft[n];
                                if (!h) return;
                                let g = {
                                    hash: i,
                                    pageId: h,
                                    mainObjectType: k.ky.Trailer,
                                    mainObjectId: e,
                                    entityType: r,
                                    entityId: l,
                                    entityPosX: o,
                                    entityPosY: c,
                                    objectsCount: u,
                                    objectType: d,
                                    objectId: m,
                                    objectPosX: _,
                                    objectPosY: p,
                                    userInteractionType: k.gi.Tap,
                                };
                                v ? (g.actionType = k.X2.Like) : (g.actionType = k.X2.Unlike);
                                let x = (0, k.Fx)({ params: g, logger: t, context: 'useSendEventOnSmartPreviewLike' });
                                x && (0, k.h_)(a.evgenInstance, x);
                            },
                            [a, l, o, c, r, i, t, e, m, _, p, d, u, n],
                        );
                    })(l),
                    y = ((e) => {
                        let t = (0, s.UlF)(),
                            a = (0, E.st)(),
                            { hash: i } = (0, E.gf)(),
                            { pageId: n } = (0, s.$au)(),
                            { blockType: r, blockId: l, blockPosX: o, blockPosY: c } = (0, s.N8n)(),
                            { objectType: d, objectsCount: u, objectId: m, objectPosX: _, objectPosY: p } = (0, s.Jfv)();
                        return (0, N.useCallback)(
                            (v) => {
                                if (!a || !n) return;
                                let h = s.Wft[n];
                                if (!h) return;
                                let g = {
                                    hash: i,
                                    pageId: h,
                                    mainObjectType: k.ky.Trailer,
                                    mainObjectId: e,
                                    entityType: r,
                                    entityId: l,
                                    entityPosX: o,
                                    entityPosY: c,
                                    objectsCount: u,
                                    objectType: d,
                                    objectId: m,
                                    objectPosX: _,
                                    objectPosY: p,
                                    userInteractionType: k.gi.Tap,
                                };
                                v ? (g.actionType = k.X2.Dislike) : (g.actionType = k.X2.Undislike);
                                let x = (0, k.Fx)({ params: g, logger: t, context: 'useSendEventOnSmartPreviewDislike' });
                                x && (0, k.h_)(a.evgenInstance, x);
                            },
                            [a, l, o, c, r, i, t, e, m, _, p, d, u, n],
                        );
                    })(l);
                (0, N.useEffect)(() => {
                    c && (h(), d(!1));
                }, [h, d, c]);
                let b = (0, N.useMemo)(() => ({ '--track-progress': ''.concat(v || 0, '%') }), [v]);
                return (0, A.jsx)('div', {
                    className: (0, L.$)(en().root, { [en().root_active]: _ }),
                    style: b,
                    children: (0, A.jsx)(u, {
                        position: a.positionInAlbum,
                        withLightning: !!(null == a ? void 0 : a.isBest),
                        track: a,
                        playContextParams: i,
                        albumArtists: null == r ? void 0 : r.albumArtists,
                        onPlayClick: g,
                        onLikeClick: x,
                        onDislikeClick: y,
                    }),
                });
            });
            var el = a(34528),
                eo = a.n(el);
            let es = (0, C.PA)((e) => {
                let { variant: t } = e,
                    {
                        trailer: a,
                        playlist: { setShouldShowTrailerOnboarding: i },
                    } = (0, s.Pjs)(),
                    {
                        isLoading: n,
                        isRejected: r,
                        tracks: l,
                        meta: o,
                        state: c,
                        shouldAutoStartPlaying: d,
                        setShouldAutoStartPlaying: u,
                        isNotFound: m,
                        modal: _,
                        utmLink: v,
                    } = a,
                    h = (0, s.eGp)(),
                    { from: g } = O({ variant: t, blockId: s.UfI.TRAILER, meta: o }),
                    x = (() => {
                        let e = (0, E.st)(),
                            t = (0, s.UlF)(),
                            { hash: a } = (0, E.gf)(),
                            { pageId: i } = (0, s.$au)();
                        return (0, N.useCallback)(
                            (n) => {
                                if (!e || !i) return;
                                let r = { hash: a, pageId: s.Wft[i], mainObjectType: k.ky.Trailer, mainObjectId: n },
                                    l = (0, k.Fx)({ params: r, logger: t, context: 'useSendEventOnTrailerOpened' });
                                l && (0, k.w5)(e.evgenInstance, l);
                            },
                            [e, a, t, i],
                        );
                    })(),
                    y = B(),
                    [b, C] = (0, N.useState)(!1),
                    f = (0, N.useRef)((0, w.A)()),
                    I = n || r,
                    { isPlaying: S } = (0, s.Dx4)({
                        playContextParams: {
                            contextData: R({ variant: t, id: null == o ? void 0 : o.id, uuid: null == o ? void 0 : o.uuid, from: g, utmLink: v }),
                            loadContextMeta: !0,
                        },
                        sonataState: a.state,
                        playbackId: s.V_r.TRAILER,
                    });
                (0, N.useEffect)(() => {
                    _.isOpened &&
                        (null == o ? void 0 : o.id) &&
                        d &&
                        (x(a.objectId),
                        null == h ||
                            h
                                .playContext(
                                    {
                                        contextData: R({ variant: t, id: null == o ? void 0 : o.id, uuid: null == o ? void 0 : o.uuid, from: g, utmLink: v }),
                                        queueParams: { index: 0 },
                                        loadContextMeta: !0,
                                    },
                                    s.V_r.TRAILER,
                                )
                                .then(() => {
                                    C(!0);
                                }),
                        u(!1));
                }, [g, null == o ? void 0 : o.id, null == o ? void 0 : o.uuid, _.isOpened, x, y, u, d, h, c.status, a.objectId, t, v, S]),
                    (0, N.useEffect)(() => {
                        b && (S ? (y(a.objectId), C(!1)) : i(!0));
                    }, [b, S, y, a.objectId, i]);
                let T = (0, N.useCallback)(
                        (e) => ({
                            contextData: R({ variant: t, id: null == o ? void 0 : o.id, uuid: null == o ? void 0 : o.uuid, from: g, utmLink: v }),
                            queueParams: { index: e },
                            loadContextMeta: !0,
                        }),
                        [g, null == o ? void 0 : o.id, null == o ? void 0 : o.uuid, t, v],
                    ),
                    P = (0, N.useMemo)(
                        () =>
                            I
                                ? ((e, t) => {
                                      let a = t === p.ALBUM ? s.Xjt.ALBUM : s.Xjt.PLAYLIST;
                                      return Array.from({ length: t === p.TRACK ? 1 : 5 }, (t, i) =>
                                          (0, A.jsx)(
                                              'div',
                                              {
                                                  className: eo().trackContainer,
                                                  children: (0, A.jsx)(M.DS, {
                                                      isActive: e,
                                                      className: (0, L.$)(eo().trackShimmer, { [eo().albumShimmer]: a === s.Xjt.ALBUM }),
                                                      variant: a,
                                                  }),
                                              },
                                              i,
                                          ),
                                      );
                                  })(n, t)
                                : null == l
                                  ? void 0
                                  : l.map((e, a) =>
                                        (0, A.jsx)(
                                            s.FoH,
                                            {
                                                blockType: k.ky.SmartPreview,
                                                blockId: e.id,
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                children: (0, A.jsx)(s.Bki, {
                                                    objectType: k.ky.SmartPreview,
                                                    objectId: e.id,
                                                    objectPosX: 1,
                                                    objectPosY: a + 1,
                                                    objectsCount: l.length,
                                                    children: (0, A.jsx)(er, { variant: t, track: e, playContextParams: T(a), viewUuid: f.current }),
                                                }),
                                            },
                                            e.id,
                                        ),
                                    ),
                        [T, n, I, l, t],
                    );
                return r
                    ? m
                        ? (0, A.jsx)(V, {})
                        : (0, A.jsx)(z, {})
                    : (0, A.jsxs)('div', {
                          className: eo().root,
                          children: [
                              (0, A.jsx)(ea, { isShimmerVisible: I, isShimmerActive: n, variant: t, className: eo().header }),
                              P,
                              (0, A.jsx)(H, { isShimmerVisible: I, isShimmerActive: n, variant: t, className: eo().footer }),
                          ],
                      });
            });
            var ec = a(31182),
                ed = a.n(ec);
            let eu = (0, C.PA)(() => {
                let {
                        settings: { isMobile: e },
                        trailer: t,
                        sonataState: a,
                        fullscreenPlayer: i,
                    } = (0, s.Pjs)(),
                    n = (0, s.eGp)(),
                    { contentRef: r } = (0, s.gKY)(),
                    { formatMessage: l } = (0, f.A)(),
                    c = j();
                (() => {
                    let { trailer: e } = (0, s.Pjs)(),
                        t = (0, s.eGp)(),
                        a = (0, s.zwV)(),
                        i = (0, u.KX)(e.state.entityMeta),
                        n = (0, u.mW)(e.state.entityMeta);
                    (0, N.useEffect)(() => {
                        e.modal.isOpened
                            ? (null == a || a.disable(s.Mo.MAIN),
                              null == a || a.enable(s.Mo.MAIN, s.lbr.TOGGLE_MUTE),
                              null == a || a.enable(s.Mo.MAIN, s.lbr.INCREASE_VOLUME),
                              null == a || a.enable(s.Mo.MAIN, s.lbr.DECREASE_VOLUME),
                              null == a || a.enable(s.Mo.MAIN, s.lbr.TOGGLE_FULLSCREEN_PLAYER),
                              null == a || a.enable(s.Mo.TRAILER))
                            : (null == a || a.disable(s.Mo.TRAILER), null == a || a.enable(s.Mo.MAIN));
                    }, [a, e.modal.isOpened]),
                        (0, N.useEffect)(
                            () => (
                                null == a ||
                                    a.addShortcutsListener(s.Mo.TRAILER, s.lbr.TOGGLE_PLAY, () => {
                                        null == t || t.togglePause(s.V_r.TRAILER);
                                    }),
                                null == a || a.addShortcutsListener(s.Mo.TRAILER, s.lbr.LIKE, i),
                                null == a || a.addShortcutsListener(s.Mo.TRAILER, s.lbr.DISLIKE, n),
                                null == a ||
                                    a.addShortcutsListener(s.Mo.TRAILER, s.lbr.MOVE_FORWARD, async () => {
                                        var e;
                                        (null == t || null == (e = t.getState(s.V_r.TRAILER).currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                            (await (null == t ? void 0 : t.moveForward(s.V_r.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(s.Mo.TRAILER, s.lbr.MOVE_BACKWARD, async () => {
                                        var e;
                                        (null == t || null == (e = t.getState(s.V_r.TRAILER).currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                            (await (null == t ? void 0 : t.moveBackward(s.V_r.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(s.Mo.TRAILER, s.lbr.SLIDE_FORWARD, async () => {
                                        (null == t ? void 0 : t.getState(s.V_r.TRAILER).playerState.progress.value.duration) &&
                                            (await (null == t ? void 0 : t.slideForward(1, s.V_r.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(s.Mo.TRAILER, s.lbr.SLIDE_BACKWARD, async () => {
                                        (null == t ? void 0 : t.getState(s.V_r.TRAILER).playerState.progress.value.duration) &&
                                            (await (null == t ? void 0 : t.slideBackward(1, s.V_r.TRAILER)));
                                    }),
                                () => {
                                    null == a || a.removeShortcutsListener(s.Mo.TRAILER, s.lbr.TOGGLE_PLAY),
                                        null == a || a.removeShortcutsListener(s.Mo.TRAILER, s.lbr.LIKE),
                                        null == a || a.removeShortcutsListener(s.Mo.TRAILER, s.lbr.DISLIKE),
                                        null == a || a.removeShortcutsListener(s.Mo.TRAILER, s.lbr.MOVE_FORWARD),
                                        null == a || a.removeShortcutsListener(s.Mo.TRAILER, s.lbr.MOVE_BACKWARD),
                                        null == a || a.removeShortcutsListener(s.Mo.TRAILER, s.lbr.SLIDE_FORWARD),
                                        null == a || a.removeShortcutsListener(s.Mo.TRAILER, s.lbr.SLIDE_BACKWARD);
                                }
                            ),
                            [n, i, a, t],
                        );
                })(),
                    (0, N.useEffect)(() => {
                        let e =
                                null == n
                                    ? void 0
                                    : n.getState(s.V_r.TRAILER).queueState.currentEntity.onChange((e) => {
                                          var a;
                                          let i = null == e ? void 0 : e.context.data.type,
                                              n = null == e ? void 0 : e.context.data.meta.id;
                                          t.state.setEntityMeta(null != (a = null == e ? void 0 : e.entity) ? a : null),
                                              i && t.state.setContextType(i),
                                              n && t.state.setContextId(n);
                                      }),
                            a =
                                null == n
                                    ? void 0
                                    : n.getState(s.V_r.TRAILER).playerState.status.onChange((e) => {
                                          e && t.state.setStatus(e);
                                      });
                        return () => {
                            null == e || e(), null == a || a();
                        };
                    }, [n, t.state]);
                let d = (0, N.useCallback)(() => {
                        null == n ||
                            n.stop(s.V_r.TRAILER).finally(() => {
                                t.sonataStatusBeforeTrailerStart !== o.MT.PLAYING || t.isManuallyPaused || null == n || n.resume(),
                                    t.setAnimationState(!0),
                                    t.resetUtmLink(),
                                    t.modal.close(),
                                    c(t.objectId);
                            });
                    }, [c, n, t]),
                    m = (0, N.useCallback)(
                        (e) => {
                            t.modal.onOpenChange(e), e || d();
                        },
                        [d, t.modal],
                    );
                return (
                    (0, N.useEffect)(() => {
                        t.modal.isOpened && t.isResolved && a.status === o.MT.PLAYING && d();
                    }, [d, a.status, t, t.modal.isOpened]),
                    (0, N.useEffect)(() => {
                        t.modal.isOpened && t.isResolved && t.setAnimationState(!1);
                    }, [t]),
                    (0, N.useEffect)(() => {
                        i.modal.isOpened && t.modal.isOpened && d();
                    }, [i.modal.isOpened, d, t.modal.isOpened]),
                    (0, A.jsxs)(P.a, {
                        size: 'fitContent',
                        placement: e ? 'default' : 'right',
                        open: t.modal.isOpened,
                        onOpenChange: m,
                        onClose: d,
                        className: ed().root,
                        contentClassName: ed().modalContent,
                        portalNode: e ? null : r,
                        showHeader: !1,
                        withOverlay: e,
                        closeOnOutsidePress: e,
                        containerProps: (0, I.Am)(I.e8.trailer.TRAILER_MODAL),
                        withAnimation: t.withAnimation,
                        isMobile: e,
                        lockScroll: e,
                        overlayColor: 'full',
                        enableSwipe: !0,
                        children: [
                            !e &&
                                (0, A.jsx)('div', {
                                    className: ed().header,
                                    children: (0, A.jsx)(S.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, A.jsx)(T.Icon, { variant: 'close', size: 'xxs' }),
                                        onClick: d,
                                        'aria-label': l({ id: 'trailer.close' }),
                                        ...(0, I.Am)(I.e8.trailer.TRAILER_CLOSE_BUTTON),
                                    }),
                                }),
                            t.variant && (0, A.jsx)(es, { variant: t.variant }),
                        ],
                    })
                );
            });
        },
        95744: (e) => {
            e.exports = { root: 'SyncLyricsLine_root__r62BN' };
        },
        96020: (e) => {
            e.exports = {
                root: 'VideoAd_root__e7gla',
                root_hidden: 'VideoAd_root_hidden__78CPl',
                videoBlock: 'VideoAd_videoBlock__bqNRq',
                video: 'VideoAd_video__j1f_y',
                content: 'VideoAd_content__QroDp',
                close: 'VideoAd_close__sMGlV',
                notifyClose: 'VideoAd_notifyClose__w82mE',
                cover: 'VideoAd_cover__kQwxh',
                important: 'VideoAd_important__VZkA_',
                icon: 'VideoAd_icon__o_Hzn',
                text: 'VideoAd_text__rjKqZ',
            };
        },
        98845: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => w, H: () => c });
            var i = a(93064),
                n = a(63695),
                r = a(83252),
                l = a(26433),
                o = a(63930);
            let s = i.gK.model('WizardGenre', { id: i.gK.string, title: i.gK.string }),
                c = i.gK
                    .model('Wizard', {
                        loadingState: i.gK.enumeration(Object.values(r.GuX)),
                        modal: l.qt,
                        genres: i.gK.array(s),
                        artistsByGenres: i.gK.maybe(i.gK.frozen()),
                        savedLikedArtists: i.gK.array(i.gK.string),
                        likedArtists: i.gK.array(i.gK.string),
                        unlikedArtists: i.gK.array(i.gK.string),
                        filter: i.gK.maybe(i.gK.string),
                    })
                    .views((e) => ({
                        get genreItem() {
                            var t;
                            return null == (t = e.artistsByGenres) ? void 0 : t.get(e.filter);
                        },
                        get artistsByGenre() {
                            var a;
                            return (null == (a = this.genreItem) ? void 0 : a.artists) || [];
                        },
                        get selectedArtistsCounter() {
                            return e.likedArtists.length + e.savedLikedArtists.length - e.unlikedArtists.length;
                        },
                        isArtistLiked: (t) => !e.unlikedArtists.includes(t) && (e.likedArtists.includes(t) || e.savedLikedArtists.includes(t)),
                    }))
                    .actions((e) => ({
                        likeArtist: (t) => {
                            let { likedArtists: a, unlikedArtists: n, savedLikedArtists: r } = e,
                                l = ((e) => {
                                    let { id: t, likedArtists: a, unlikedArtists: i, savedLikedArtists: n } = e,
                                        r = {};
                                    if (a.includes(t)) return (r.likedArtists = a.filter((e) => e !== t)), r;
                                    let l = n.includes(t),
                                        o = i.includes(t);
                                    return ((r.unlikedArtists = i.filter((e) => e !== t)), l && !o) ? r.unlikedArtists.push(t) : (r.likedArtists = [...a, t]), r;
                                })({ id: t, likedArtists: a, unlikedArtists: n, savedLikedArtists: r });
                            l.likedArtists && (e.likedArtists = (0, i.wg)(l.likedArtists)), l.unlikedArtists && (e.unlikedArtists = (0, i.wg)(l.unlikedArtists));
                        },
                        setFilter: (t) => {
                            e.filter = t;
                        },
                        getGenres: (0, i.L3)(function* () {
                            let { feedResource: t, modelActionsLogger: a } = (0, i._$)(e);
                            if (e.loadingState !== r.GuX.PENDING && e.loadingState !== r.GuX.RESOLVE)
                                try {
                                    var n;
                                    e.loadingState = r.GuX.PENDING;
                                    let { genres: a } = yield t.getWizardGenres();
                                    if (((e.genres = (0, i.wg)(a.map((e) => ({ id: e.id, title: e.title })))), !a.length))
                                        throw Error("The wizard's genre array is empty");
                                    (e.filter = null == (n = a[0]) ? void 0 : n.id),
                                        (e.artistsByGenres = (0, i.wg)(
                                            ((e) => {
                                                let t = new Map();
                                                return (
                                                    e.map((e) => {
                                                        t.set(e.id, { loadingState: r.GuX.IDLE, artists: [], showedArtists: [] });
                                                    }),
                                                    o.sH.map(t)
                                                );
                                            })(a),
                                        )),
                                        e.loadingState !== r.GuX.IDLE && (e.loadingState = r.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), e.loadingState !== r.GuX.IDLE && (e.loadingState = r.GuX.REJECT);
                                }
                        }),
                        getArtists: (0, i.L3)(function* (t) {
                            let { feedResource: a, modelActionsLogger: l } = (0, i._$)(e);
                            if (e.loadingState !== r.GuX.RESOLVE || !e.filter) return;
                            let o = e.artistsByGenres.get(e.filter);
                            if (o.loadingState !== r.GuX.PENDING)
                                try {
                                    o.loadingState = r.GuX.PENDING;
                                    let { artists: l = [], likedArtists: s = [] } = yield a.getWizardArtistsByGenre({
                                            genre: e.filter,
                                            showedArtists: o.showedArtists,
                                            likedArtists: e.likedArtists,
                                            unlikedArtists: e.unlikedArtists,
                                            countOfNewArtists: t,
                                        }),
                                        c = l.map((e) => (0, n.as)({ artist: e })),
                                        d = l.map((e) => e.id);
                                    e.artistsByGenres.set(e.filter, {
                                        artists: [...o.artists, ...c],
                                        showedArtists: [...o.showedArtists, ...d],
                                        loadingState: r.GuX.RESOLVE,
                                    }),
                                        (e.savedLikedArtists = (0, i.wg)(s.map((e) => String(e)))),
                                        (e.likedArtists = (0, i.wg)([])),
                                        (e.unlikedArtists = (0, i.wg)([]));
                                } catch (e) {
                                    l.error(e), (o.loadingState = r.GuX.REJECT);
                                }
                        }),
                        finish: (0, i.L3)(function* () {
                            let { feedResource: t, modelActionsLogger: a } = (0, i._$)(e);
                            if (!e.filter) return r.FlZ.ERROR;
                            try {
                                return yield t.finishWizard({ genre: e.filter, likedArtists: e.likedArtists, unlikedArtists: e.unlikedArtists }), r.FlZ.OK;
                            } catch (e) {
                                return a.error(e), r.FlZ.ERROR;
                            }
                        }),
                    }));
            var d = a(54486),
                u = a(50420),
                m = a(28303),
                _ = a(61910),
                p = a(43426),
                v = a(47713),
                h = a(31500),
                g = a(67648),
                x = a(77881),
                y = a(32692),
                b = a(51321),
                A = a(97800),
                C = a(80585),
                N = a(71712),
                f = a(5956),
                I = a(6971);
            let S = { src: '/_next/static/media/artist.c49b2bfa.png' };
            var T = a(77846),
                P = a.n(T);
            let k = (0, m.PA)((e) => {
                let { className: t, artist: a } = e,
                    { ref: i, intersectionPropertyId: n } = (0, r.nMI)(),
                    {
                        wizard: { likeArtist: l, isArtistLiked: o },
                    } = (0, r.Pjs)(),
                    { id: s, name: c, coverUri: m } = a,
                    p = (0, _.useCallback)(() => {
                        l(s);
                    }, [l, s]),
                    v = o(s),
                    g = (0, _.useMemo)(
                        () =>
                            (0, d.jsx)(I.Paper, {
                                className: P().cover,
                                radius: 'round',
                                ...(0, h.Am)(h.e8.wizard.ARTIST_CARD),
                                children: (0, d.jsxs)(x.$, {
                                    radius: 'round',
                                    className: P().coverBlock,
                                    variant: 'default',
                                    onClick: p,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': v,
                                    'aria-label': c,
                                    ...(0, h.Am)(h.e8.wizard.ARTIST_CARD_BUTTON),
                                    children: [
                                        (0, d.jsx)(C.BW, { className: P().image, src: m || S.src, fit: 'cover', alt: c, withAvatarReplace: !!m, 'aria-hidden': !0 }),
                                        (0, d.jsx)('div', {
                                            className: (0, u.$)(P().like),
                                            children: (0, d.jsx)(f.Icon, { variant: 'likedVariant', size: 's', className: P().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [v, m, c, p],
                    );
                return (0, d.jsx)(N.MN, {
                    ref: i,
                    className: (0, u.$)(P().root, { [P().root_selected]: v }, t),
                    textPosition: 'center',
                    title: (0, d.jsx)(A.Caption, {
                        'aria-hidden': !0,
                        className: P().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        ...(0, h.Am)(h.e8.wizard.ARTIST_CARD_NAME),
                        children: c,
                    }),
                    'data-intersection-property-id': n,
                    view: g,
                    ...(0, h.Am)(h.Kq.artist.ARTIST_ITEM),
                });
            });
            var E = a(2782),
                j = a.n(E);
            let L = { [r.u40.Desktop]: { start: 40, end: 40 }, [r.u40.Mobile]: { start: 40, end: 40 } },
                w = (0, m.PA)(() => {
                    let { formatMessage: e } = (0, p.A)(),
                        {
                            wizard: t,
                            settings: { isMobile: a, isWindowsApplication: i, isLinuxApplication: n },
                            user: l,
                        } = (0, r.Pjs)(),
                        { notify: o } = (0, r.lkh)(),
                        s = (0, r.zwV)(),
                        [c, m] = (0, g.d)(),
                        N = (0, r.RpR)(),
                        f = (0, b.useTabsState)(0),
                        I = (0, _.useMemo)(
                            () => (e) => {
                                var a;
                                if (!f.onTabChange || e === f.value) return;
                                f.onTabChange(e);
                                let i = null == (a = t.genres[e]) ? void 0 : a.id;
                                t.setFilter(i), null == c || c.scrollTo({ top: 0 });
                            },
                            [t, f, c],
                        ),
                        S = (0, _.useMemo)(() => {
                            switch (t.selectedArtistsCounter) {
                                case 0:
                                    return e({ id: 'wizard.button-tune' });
                                case 1:
                                    return e({ id: 'wizard.button-little-more' });
                                case 2:
                                    return e({ id: 'wizard.button-one-more' });
                                default:
                                    return e({ id: 'wizard.button-done' });
                            }
                        }, [t.selectedArtistsCounter, e]),
                        T = (0, _.useMemo)(
                            () =>
                                (0, d.jsx)(C.wI, {
                                    className: j().tabCarousel,
                                    ...f,
                                    onTabChange: I,
                                    isShimmerVisible: t.loadingState === r.GuX.PENDING,
                                    shimmer: (0, d.jsx)(C.zr, { isActive: !0, className: j().tabCarousel, shimmerClassName: j().tabShimmer, count: a ? 2 : 3 }),
                                    children: t.genres.map((e, t) =>
                                        (0, d.jsx)(
                                            C.oz,
                                            {
                                                className: (0, u.$)(j().filter, { [j().filter_selected]: t === f.value }),
                                                titleClassName: j().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [t.genres, f, I, t.loadingState, a],
                        ),
                        P = (0, _.useCallback)(() => {
                            t.getArtists(60);
                        }, [t]);
                    (0, _.useEffect)(() => {
                        t.filter && P();
                    }, [t.filter, P]);
                    let E = (0, _.useCallback)(async () => {
                        await t.getGenres(), P();
                    }, [t, P]);
                    (0, _.useEffect)(() => {
                        t.modal.isOpened && E();
                    }, [t, t.modal.isOpened, E]),
                        (0, _.useEffect)(() => {
                            t.loadingState === r.GuX.REJECT &&
                                (t.modal.close(), o((0, d.jsx)(C.hT, { error: e({ id: 'error-messages.error-load-wizard' }) }), { containerId: r.uQT.ERROR }));
                        }, [t, t.getGenres, t.loadingState, e, o]);
                    let w = (0, _.useMemo)(
                            () =>
                                (0, d.jsx)(A.Heading, {
                                    className: j().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    ...(0, h.Am)(h.e8.wizard.WIZARD_MODAL_TITLE),
                                    children: (0, d.jsx)(v.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        M = (0, _.useCallback)(async () => {
                            t.selectedArtistsCounter < 3 ? t.getArtists() : (await t.finish()) === r.FlZ.OK && (await l.getSettings(), N()), t.modal.close();
                        }, [N, l, t]);
                    return (
                        (0, _.useEffect)(
                            () => (
                                null == s ||
                                    s.addShortcutsListener(r.Mo.MAIN, r.lbr.CLOSE, () => {
                                        t.modal.isOpened && M();
                                    }),
                                () => {
                                    null == s || s.removeShortcutsListener(r.Mo.MAIN, r.lbr.CLOSE);
                                }
                            ),
                            [M, t.modal.isOpened, s],
                        ),
                        (0, d.jsxs)(y.a, {
                            className: (0, u.$)(j().root, { [j().root_withCustomControls]: i || n }),
                            headerClassName: j().modalHeader,
                            contentClassName: j().modalContent,
                            open: t.modal.isOpened,
                            onOpenChange: t.modal.onOpenChange,
                            onClose: M,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: e({ id: 'interface-actions.close' }),
                            closeButtonProps: (0, h.Am)(h.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON),
                            ...(0, h.Am)(h.e8.wizard.WIZARD_MODAL),
                            header: a && w,
                            escapeKey: !1,
                            children: [
                                (0, d.jsxs)('div', {
                                    className: j().wrapper,
                                    children: [
                                        !a && w,
                                        (0, d.jsx)(A.Caption, {
                                            className: j().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            ...(0, h.Am)(h.e8.wizard.WIZARD_MODAL_TEXT),
                                            children: (0, d.jsx)(v.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, d.jsx)(x.$, {
                                            className: j().button,
                                            size: a ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: M,
                                            disabled: t.selectedArtistsCounter < 3,
                                            ...(0, h.Am)(h.e8.wizard.WIZARD_MODAL_BUTTON),
                                            children: (0, d.jsx)(A.Caption, { variant: 'div', size: 'm', weight: 'medium', children: S }),
                                        }),
                                    ],
                                }),
                                (0, d.jsxs)('div', {
                                    className: j().mainContainer,
                                    children: [
                                        (0, d.jsx)(C.FY, { className: j().carousel, carouselElement: T, scrollPadding: L }),
                                        (0, d.jsx)(C.$$, {
                                            withFooter: !1,
                                            className: (0, u.$)(j().scrollContainer, j().important),
                                            itemContentCallback: (a) => {
                                                let i = t.artistsByGenre[a];
                                                if (!i) {
                                                    let t = e({ id: 'loading-messages.entity-is-loading' }, { entityName: e({ id: 'entity-names.artist' }) });
                                                    return (0, d.jsx)(C.Vt, { 'aria-label': t, round: !0, centered: !0 });
                                                }
                                                return (0, d.jsx)(k, { artist: i }, i.id);
                                            },
                                            data: t.artistsByGenre,
                                            endReached: P,
                                            listClassName: j().content,
                                            itemClassName: j().item,
                                            pageSize: 60,
                                            handleRef: m,
                                            ...(0, h.Am)(h.e8.wizard.WIZARD_MODAL_ARTISTS_GRID),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        99092: (e) => {
            e.exports = {
                root: 'SideAdvertBanner_root__hT1jJ',
                root_hidden: 'SideAdvertBanner_root_hidden__Yg__R',
                contentWrapper: 'SideAdvertBanner_contentWrapper__5255E',
                content: 'SideAdvertBanner_content__nDGWG',
                disableAdsButton: 'SideAdvertBanner_disableAdsButton__is8g1',
            };
        },
        99835: (e) => {
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
    },
]);
