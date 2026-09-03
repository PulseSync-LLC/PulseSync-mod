(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3830],
    {
        2352: (e) => {
            e.exports = { root: 'TextShimmer_root__qqWug', text: 'TextShimmer_text__z8oN9' };
        },
        2411: (e) => {
            e.exports = {
                meta: 'PageHeaderNonMusic_meta__9DQPy',
                infoNote: 'PageHeaderNonMusic_infoNote__7xbV5',
                infoNoteIcon: 'PageHeaderNonMusic_infoNoteIcon__VDK7_',
                infoNoteText: 'PageHeaderNonMusic_infoNoteText__DCQq8',
                plusPaywallButton: 'PageHeaderNonMusic_plusPaywallButton__O7Tx_',
                booksLogo: 'PageHeaderNonMusic_booksLogo__4_TgU',
                controlsBlock: 'PageHeaderNonMusic_controlsBlock__jta99',
            };
        },
        2413: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => p });
            var i = a(32290),
                l = a(96103),
                s = a(55178),
                n = a(21732),
                o = a(90169),
                r = a(57594),
                d = a(8677),
                c = a(68912),
                u = a(83521),
                m = a(92102),
                b = a(8200),
                v = a.n(b);
            let p = (0, l.PA)((e) => {
                let { track: t, albumArtists: a, position: l, playContextParams: b, withLightning: p } = e,
                    x = (0, o.D)({ playContextParams: b, entityId: t.entityId }),
                    {
                        settings: { isMobile: h },
                    } = (0, r.g)(),
                    _ = (0, s.useCallback)((e) => (0, i.jsx)(u.G, { track: t, position: l, className: v().playButtonCell, ...e }), [t, l]);
                return (0, i.jsx)(m.C, {
                    track: t,
                    withLightning: p,
                    meta: (0, i.jsx)(c.j, { withArtistLink: !h, albumArtists: a, track: t, withSavingQueryParams: !0 }),
                    playButtonCellRender: _,
                    controls: (0, i.jsx)(d.Q, { withLightning: p, track: t, className: v().controlsBarCell, utmLink: b.contextData.utmLink }),
                    ...x,
                    'data-test-id': n.Kq.track.TRACK_ALBUM,
                });
            });
        },
        3785: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { M: () => i }),
                (function (e) {
                    (e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon'),
                        (e.SUBSTITUTED_ICON = 'substitutedIcon');
                })(i || (i = {}));
        },
        4332: (e) => {
            e.exports = { root: 'RelatedContent_root__Dl1Nr', carousel: 'RelatedContent_carousel__pmv5c', header: 'RelatedContent_header__527S3' };
        },
        5749: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => u });
            var i = a(16172),
                l = a(52068),
                s = a(91027),
                n = a(79374),
                o = a(84782),
                r = a(2792),
                d = a(37240),
                c = a(62376);
            let u = () => {
                let { hash: e } = (0, l.gf)(),
                    t = (0, c.U)(),
                    a = (0, l.st)(),
                    { pageId: u } = (0, d.$)(),
                    { blockId: m, blockType: b, blockPosX: v, blockPosY: p } = (0, o.N)(),
                    { objectType: x, objectId: h, objectPosX: _, objectPosY: A, objectsCount: g, mainObjectId: j, mainObjectType: f } = (0, r.J)();
                return (0, s.c)((l, s) => {
                    if (!a || !u) return;
                    let o = n.W[u];
                    if (!o) return;
                    let r = {
                        to: l,
                        objectType: x,
                        objectId: h,
                        objectPosX: _,
                        objectPosY: A,
                        hash: e,
                        pageId: o,
                        mainObjectType: f,
                        mainObjectId: j,
                        entityType: b,
                        entityId: m,
                        entityPosX: v,
                        entityPosY: p,
                        objectsCount: g,
                        from: o,
                    };
                    s && (r.deepLink = s);
                    let d = (0, i.Fx)({ params: r, logger: t, context: 'useSendEventOnDonationNavigated' });
                    d && (0, i.QS)(a.evgenInstance, d);
                });
            };
        },
        6135: (e) => {
            e.exports = {
                root: 'CommonAlbumPage_root__E8c_3',
                content: 'CommonAlbumPage_content__vRSnu',
                scrollContent: 'CommonAlbumPage_scrollContent__0XS83',
                header: 'CommonAlbumPage_header__jS_be',
                text: 'CommonAlbumPage_text__kqBSb',
                footerContainer: 'CommonAlbumPage_footerContainer__JvjKN',
                footer: 'CommonAlbumPage_footer__dBXP4',
                averageColorBackground: 'CommonAlbumPage_averageColorBackground__hs1_3',
                virtualScroll: 'CommonAlbumPage_virtualScroll__Sc_gs',
                virtualItem: 'CommonAlbumPage_virtualItem__yhvPB',
                label: 'CommonAlbumPage_label__TErtx',
                labelLinkContainer: 'CommonAlbumPage_labelLinkContainer__fk6OB',
                labelLink: 'CommonAlbumPage_labelLink__v4EnM',
                important: 'CommonAlbumPage_important__GXaZH',
            };
        },
        8200: (e) => {
            e.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        8576: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => m });
            var i = a(32290),
                l = a(63618),
                s = a(21732),
                n = a(63423),
                o = a(82586),
                r = a(86269),
                d = a(11323),
                c = a(78166),
                u = a.n(c);
            let m = (e) => {
                let { coverVariant: t, coverUri: a, isAvailable: c, className: m, withPlusBadge: b, onClick: v, 'aria-label': p, customCover: x, buttonClassName: h } = e;
                return (0, i.jsxs)(r.t, {
                    radius: 'round' === t ? 'round' : 'm',
                    className: (0, l.$)(u().root, m, { [u().root_hoverable]: !!v }),
                    children: [
                        (0, i.jsx)(n.$, {
                            className: (0, l.$)(u().coverButton, h),
                            onClick: v,
                            'aria-label': p,
                            tabIndex: v ? 0 : -1,
                            disabled: !v,
                            'data-test-id': s.S7.ENTITY_COVER_BUTTON,
                            children: x || (0, i.jsx)(d.B, { fit: 'cover', src: a, size: 300, className: u().coverImage, withAvatarReplace: !0, isAvailable: c }),
                        }),
                        b && (0, i.jsx)(o.I, { variant: 'plusBadge', className: u().plusBadge }),
                    ],
                });
            };
        },
        8868: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => c });
            var i = a(55178),
                l = a(16172),
                s = a(52068),
                n = a(91027),
                o = a(62376),
                r = a(79374),
                d = a(37240);
            let c = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    a = (0, s.st)(),
                    c = (0, o.U)(),
                    { hash: u } = (0, s.gf)(),
                    { pageId: m } = (0, d.$)(),
                    b = (0, n.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !a ||
                            !m ||
                            !u ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = r.W[m];
                        if (!t) return;
                        let i = {
                                hash: u,
                                pageId: l.QT.Link,
                                entityType: l.LA.Deeplink,
                                entityId: l.LA.Deeplink,
                                from: l.QT.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            s = (0, l.Fx)({ params: i, logger: c, context: 'useSendDeeplinkNavigationEvent' });
                        s && (0, l.ID)(a.evgenInstance, s);
                    });
                return (
                    (0, i.useEffect)(() => {
                        t && b();
                    }, [t, b]),
                    (0, n.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || b({ deepLink: e });
                    })
                );
            };
        },
        15774: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => i });
            var i = (function (e) {
                return (e.TRACK = 'track'), (e.TEXT = 'text'), e;
            })({});
        },
        17024: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => l });
            let i = /^(0|[1-9]\d*)$/;
            function l(e) {
                return void 0 !== e && !(e.length > 40) && i.test(e);
            }
        },
        17153: (e) => {
            e.exports = { plusPaywallButton: 'PageHeaderAlbum_plusPaywallButton__yJWCh', booksLogo: 'PageHeaderAlbum_booksLogo__f4gjV' };
        },
        17490: (e) => {
            e.exports = {
                root: 'Offline_root__IxjsY',
                container: 'Offline_container__2V5Vo',
                icon: 'Offline_icon__jDmpJ',
                title: 'Offline_title__Y2CtW',
                text: 'Offline_text__Nhult',
                buttons: 'Offline_buttons__ZOFI7',
                button: 'Offline_button__QSA_j',
            };
        },
        20163: (e) => {
            e.exports = { root: 'TextVolume_root__wxSaK' };
        },
        20698: (e, t, a) => {
            'use strict';
            function i(e) {
                return e.map((e) => e.name).join(', ');
            }
            a.d(t, { j: () => i });
        },
        28724: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => C });
            var i = a(32290),
                l = a(63618),
                s = a(96103),
                n = a(55178),
                o = a(39407),
                r = a(21732),
                d = a(91027),
                c = a(63423),
                u = a(71926),
                m = a(70204),
                b = a(34186),
                v = a(83808),
                p = a(20472),
                x = a(84062),
                h = a(85017),
                _ = a(19379),
                A = a(61258),
                g = a(76768),
                j = a.n(g);
            let f = {
                    [h.n.ALBUM]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [h.n.PODCAST]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [h.n.ARTIST]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [h.n.TRACK]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [h.n.AUDIOBOOK]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [h.n.CLIP]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                C = (0, s.PA)((e) => {
                    var t;
                    let { modalState: a, data: s, onClose: g, className: C } = e,
                        y = null != s ? s : null == a ? void 0 : a.modalData,
                        k = (0, v.W)(),
                        N = (0, x.Z)(p.Z.main.href),
                        T = (0, b.N)().get(m.U2),
                        L = (0, d.c)(() => {
                            if (g) return g();
                            k.canBack && k.back(), N();
                        }),
                        P = (null == y || null == (t = y.details) ? void 0 : t.url) && y.details.text,
                        I = (0, d.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = T.get(_.c.ExEx),
                                i = new Date(),
                                l = i.setMinutes(i.getMinutes() + 15),
                                s =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            t ? T.set(_.c.ExEx, [...t, s], { expires: new Date(l) }) : T.set(_.c.ExEx, [s], { expires: new Date(l) }),
                                null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler();
                        }),
                        S = (0, d.c)(() => {
                            (null == a ? void 0 : a.shouldHistoryBack) ? (null == g || g(), k.canBack && k.back(), N()) : null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler();
                        });
                    (0, n.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let O = (0, n.useMemo)(() => {
                            if (y) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, l.$)(j().title, j().text),
                                            'data-test-id': r.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: y.title,
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: j().text,
                                            'data-test-id': r.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: y.description,
                                        }),
                                        P &&
                                            (0, i.jsx)(A.N, {
                                                href: null == (e = y.details) ? void 0 : e.url,
                                                className: j().link,
                                                children: (0, i.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = y.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [y, P]),
                        E = (0, n.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === h.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: j().buttons,
                                          children: [
                                              (0, i.jsx)(c.$, {
                                                  color: 'primary',
                                                  onClick: S,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: j().button,
                                                  'data-test-id': r.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(o.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(c.$, {
                                                  color: 'secondary',
                                                  onClick: I,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: j().button,
                                                  'data-test-id': r.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && f[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: j().buttons,
                                          children: (0, i.jsx)(c.$, {
                                              color: 'primary',
                                              onClick: L,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: j().button,
                                              'data-test-id': r.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(o.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [I, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, L, S],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, l.$)(j().root, C),
                        'data-test-id': r.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: j().container, children: [O, E] }),
                    });
                });
        },
        31035: (e) => {
            e.exports = {
                controlsContainer: 'CommonPageHeader_controlsContainer__4_h22',
                controls: 'CommonPageHeader_controls__c27E_',
                playControl: 'CommonPageHeader_playControl__gYOuR',
                playControl_withLogin: 'CommonPageHeader_playControl_withLogin__FL_L6',
            };
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
        31286: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => s });
            var i = a(55178),
                l = a(91027);
            let s = () => {
                let e = (0, i.useRef)(new Map());
                return (
                    (0, i.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, l.c)((t, a) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, a), a)))
                );
            };
        },
        32496: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => r });
            var i = a(32290),
                l = a(63618),
                s = a(79856),
                n = a(2352),
                o = a.n(n);
            let r = (e) => {
                let { className: t, textClassName: a, isActive: n } = e;
                return (0, i.jsx)('div', { className: (0, l.$)(o().root, t), children: (0, i.jsx)(s.W, { className: (0, l.$)(o().text, a), isActive: n, radius: 's' }) });
            };
        },
        32804: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => b });
            var i = a(32290),
                l = a(91027),
                s = a(72676),
                n = a(9480),
                o = a(60214),
                r = a(45477),
                d = a(75582),
                c = a(44128),
                u = a(57594);
            let m = (e) => {
                var t;
                return null == (t = e.data) ? void 0 : t.entityId;
            };
            function b(e, t, a, b) {
                let v = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m,
                    { notify: p } = (0, d.l)(),
                    { fullscreenPlayer: x } = (0, u.g)(),
                    h = (0, c.e)();
                return (0, l.c)(() => {
                    let l = e.reduce((e, t) => {
                        let a = v(t);
                        return a && e.push({ type: s.z4.Unloaded, meta: { id: a } }), e;
                    }, []);
                    if (!l.length) return;
                    switch (t) {
                        case n.N.LAST:
                            null == h || h.injectLast({ entitiesData: l, sourceContextData: null != a ? a : void 0 });
                            break;
                        case n.N.NEXT:
                            null == h || h.injectNext({ entitiesData: l, sourceContextData: null != a ? a : void 0 });
                    }
                    let d = x.modal.isOpened ? r.u.FULLSCREEN_INFO : r.u.INFO;
                    p((0, i.jsx)(o.l, { entityVariant: b.entityVariant, variant: t, entityTitle: b.entityTitle, coverUri: b.coverUri }), { containerId: d });
                });
            }
        },
        36504: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => s });
            var i = a(96151),
                l = a(87151);
            let s = (e) => {
                var t, a, s, n, o;
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
                              alsoAlbums: (null == (s = e.counts) ? void 0 : s.compilations) || 0,
                              tracks: (null == (n = e.counts) ? void 0 : n.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (o = e.trailer) ? void 0 : o.isAvailable) },
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
        37318: (e) => {
            e.exports = {
                root: 'PageHeaderShimmer_root__kqSwa',
                cover: 'PageHeaderShimmer_cover__ay2cr',
                content: 'PageHeaderShimmer_content__SdBKK',
                info: 'PageHeaderShimmer_info__cZkS2',
                entityName: 'PageHeaderShimmer_entityName__tlWnA',
                title: 'PageHeaderShimmer_title__xKG4e',
                meta: 'PageHeaderShimmer_meta__YWx0m',
                controls: 'PageHeaderShimmer_controls__gPErM',
                desktopPlayButton: 'PageHeaderShimmer_desktopPlayButton__R7EmH',
                button: 'PageHeaderShimmer_button__13qrG',
            };
        },
        37495: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => i });
            let i = (e) => {
                let t = Math.floor(e / 1e3),
                    a = Math.floor(t / 3600),
                    i = Math.floor((t % 3600) / 60),
                    l = t % 60,
                    s = 'PT';
                return a > 0 && (s += ''.concat(a, 'H')), i > 0 && (s += ''.concat(i, 'M')), (l > 0 || 'PT' === s) && (s += ''.concat(l, 'S')), s;
            };
        },
        39231: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => l });
            var i = a(80408);
            let l = (e) => {
                var t, a;
                return null != (a = null == (t = (0, i.j)()) ? void 0 : t.get(e)) ? a : null;
            };
        },
        40783: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => l });
            var i = a(55178);
            let l = (e, t) => ({
                topColorStyle: (0, i.useMemo)(() => {
                    if (void 0 === t) return;
                    let a = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : a, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, i.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        43592: (e, t, a) => {
            'use strict';
            function i(e, t) {
                return e.map((e) => 'https://'.concat(t, '/artist/').concat(e.id));
            }
            a.d(t, { x: () => i });
        },
        44338: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => l });
            var i = a(31995);
            function l(e, t) {
                var a;
                return (0, i.Y)(e, null != (a = null == t ? void 0 : t.maxLength) ? a : 48, !!(null == t ? void 0 : t.truncateByLastSpace));
            }
        },
        44936: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => l });
            var i = a(36504);
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
        48977: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => u });
            var i = a(16172),
                l = a(52068),
                s = a(91027),
                n = a(79374),
                o = a(84782),
                r = a(2792),
                d = a(37240),
                c = a(62376);
            let u = () => {
                let { hash: e } = (0, l.gf)(),
                    t = (0, c.U)(),
                    a = (0, l.st)(),
                    { pageId: u } = (0, d.$)(),
                    { blockId: m, blockType: b, blockPosX: v, blockPosY: p } = (0, o.N)(),
                    { objectType: x, objectId: h, objectPosX: _, objectPosY: A, objectsCount: g, mainObjectId: j, mainObjectType: f } = (0, r.J)();
                return (0, s.c)((l, s) => {
                    if (!a || !u) return;
                    let o = n.W[u];
                    if (!o) return;
                    let r = (0, i.Fx)({
                        params: {
                            objectType: x,
                            objectId: h,
                            objectPosX: _,
                            objectPosY: A,
                            hash: e,
                            pageId: o,
                            mainObjectType: f,
                            mainObjectId: j,
                            entityType: b,
                            entityId: m,
                            entityPosX: v,
                            entityPosY: p,
                            objectsCount: g,
                            viewUuid: s,
                        },
                        logger: t,
                        context: 'useSendEventOnDonationShowedOrHidden',
                    });
                    r && (l ? (0, i.Pf)(a.evgenInstance, r) : (0, i.nv)(a.evgenInstance, r));
                });
            };
        },
        50168: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => u });
            var i = a(32290),
                l = a(63618),
                s = a(96103),
                n = a(55178),
                o = a(79856),
                r = a(57594),
                d = a(37318),
                c = a.n(d);
            let u = (0, s.PA)((e) => {
                let { className: t, coverRadius: a = 'm', isActive: s } = e,
                    {
                        settings: { isMobile: d },
                    } = (0, r.g)(),
                    u = (0, n.useMemo)(
                        () =>
                            d
                                ? (0, i.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                      ],
                                  })
                                : (0, i.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, i.jsx)(o.W, { className: c().desktopPlayButton, isActive: s }),
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                      ],
                                  }),
                        [s, d],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(c().root, t),
                    children: [
                        (0, i.jsx)(o.W, { className: c().cover, radius: a, isActive: s }),
                        (0, i.jsxs)('div', {
                            className: c().content,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: c().info,
                                    children: [
                                        (0, i.jsx)(o.W, { className: c().entityName, radius: 's', isActive: s }),
                                        (0, i.jsx)(o.W, { className: c().title, radius: 'xl', isActive: s }),
                                        (0, i.jsx)(o.W, { className: c().meta, radius: 's', isActive: s }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    ],
                });
            });
        },
        52547: (e) => {
            e.exports = { root: 'Shimmer_root__NvUMY' };
        },
        57594: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => s, g: () => n });
            var i = a(29222),
                l = a(55178);
            let s = (0, l.createContext)(null);
            function n() {
                let e = (0, l.useContext)(s);
                if (null === e) throw new i.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        59830: (e) => {
            e.exports = {
                tabCarousel: 'NonMusicContent_tabCarousel__EBHWC',
                tab: 'NonMusicContent_tab__LIh_U',
                contentAbout: 'NonMusicContent_contentAbout__BMIP5',
                infoBlock: 'NonMusicContent_infoBlock__IyjXA',
                infoTitle: 'NonMusicContent_infoTitle__Wf9EC',
                lastEpisodes: 'NonMusicContent_lastEpisodes__Xa8Xp',
                rewindControl: 'NonMusicContent_rewindControl__7tncY',
                label: 'NonMusicContent_label__9GlIS',
            };
        },
        60101: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => m });
            var i = a(32290),
                l = a(96103),
                s = a(55178),
                n = a(60900),
                o = a(80451),
                r = a(21732),
                d = a(63423),
                c = a(82586);
            let u = (0, l.PA)((e) => {
                    let { onClick: t, className: a, size: l = 's', iconSize: s = 'xxs', forwardRef: u, ...m } = e,
                        { formatMessage: b } = (0, n.A)();
                    return (0, i.jsx)(d.$, {
                        ref: u,
                        size: l,
                        variant: 'default',
                        radius: 'round',
                        color: 'secondary',
                        onClick: t,
                        className: a,
                        'aria-label': b({ id: 'donation.button-text' }),
                        icon: (0, i.jsx)(c.I, { size: s, variant: 'ruble' }),
                        ...(0, o.getDataAttrFromProps)(m),
                        'data-test-id': r.S7.DONATION_BUTTON,
                    });
                }),
                m = (0, s.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
        },
        65024: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => l });
            let i = new Set(Object.values(a(3785).M)),
                l = (e) => 'string' == typeof e && i.has(e);
        },
        65476: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => c });
            var i = a(55178),
                l = a(91027),
                s = a(57594);
            a(79406);
            var n = a(97201),
                o = a(36477),
                r = (a(39231), a(80408)),
                d = (a(31266), a(71670));
            let c = () => {
                let {
                        experiments: e,
                        user: {
                            account: {
                                data: { hasPlus: t },
                            },
                        },
                    } = (0, s.g)(),
                    a = (0, d.X)(),
                    c = (0, i.useCallback)(() => {}, [!1]),
                    u = (0, l.c)((e, t) => {}),
                    m = (0, l.c)(() => {
                        let e = (0, r.j)();
                        if (null === e) return;
                        e.delete(n.K.CLID);
                        let t = new URL(window.location.href);
                        (t.search = e.toString()), a(t.toString());
                    }),
                    b = (0, l.c)((e, t) => {
                        if (!e || !t) return;
                        let a = c();
                        if (!a) return;
                        let { parsedClid: i } = a;
                        return t === i.albumId && e.clid === i.cpa.clid && e.artistId === i.cpa.artistId;
                    }),
                    v = (0, l.c)((e) => {
                        let t = c();
                        return (null == t ? void 0 : t.parsedClid.albumId) === e;
                    }),
                    p = (0, l.c)((e, t) => {
                        let a = c();
                        if (!a || a.parsedClid.albumId !== e) return t;
                        let { href: i } = (0, o.u)(t, { query: { [n.K.CLID]: a.queryClid } });
                        return i;
                    });
                return {
                    isCPAEnabled: !1,
                    getClidFromQuery: c,
                    setClidToQuery: u,
                    deleteClidFromQuery: m,
                    checkIsValidClid: b,
                    getAlbumUrlWithSavedClid: p,
                    checkIsCurrentAlbumPage: v,
                };
            };
        },
        67011: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => aw });
            var i = a(32290),
                l = a(96103),
                s = a(21916),
                n = a(55178),
                o = a(16172),
                r = a(21732),
                d = a(6752),
                c = a(84942),
                u = a(39407),
                m = a(91027),
                b = a(63423),
                v = a(82586),
                p = a(71926),
                x = a(20472),
                h = a(84062),
                _ = a(57594),
                A = a(17490),
                g = a.n(A);
            let j = (0, l.PA)(() => {
                let { slam: e } = (0, _.g)(),
                    t = (0, h.Z)(x.Z.mymusicDownloadsTracks.href),
                    a = (0, h.Z)(x.Z.settings.href),
                    l = (0, m.c)(() => {
                        window.location.href = x.Z.main.href;
                    }),
                    s = (0, n.useMemo)(
                        () =>
                            e.isOfflineModeEnabled ? (0, i.jsx)(u.A, { id: 'offline.offline-mode-enabled' }) : (0, i.jsx)(u.A, { id: 'offline.no-internet-connection' }),
                        [e.isOfflineModeEnabled],
                    ),
                    o = (0, n.useMemo)(
                        () =>
                            e.isOfflineModeEnabled
                                ? (0, i.jsx)(b.$, {
                                      onClick: a,
                                      className: g().button,
                                      color: 'secondary',
                                      size: 'l',
                                      radius: 'xxxl',
                                      children: (0, i.jsx)(p.HL, {
                                          type: 'controls',
                                          variant: 'span',
                                          size: 'm',
                                          children: (0, i.jsx)(u.A, { id: 'offline.disable-offline-mode' }),
                                      }),
                                  })
                                : (0, i.jsx)(b.$, {
                                      onClick: l,
                                      className: g().button,
                                      color: 'secondary',
                                      size: 'l',
                                      radius: 'xxxl',
                                      children: (0, i.jsx)(p.HL, {
                                          type: 'controls',
                                          variant: 'span',
                                          size: 'm',
                                          children: (0, i.jsx)(u.A, { id: 'page-error.restart-app-button' }),
                                      }),
                                  }),
                        [l, a, e.isOfflineModeEnabled],
                    );
                return (0, i.jsx)('div', {
                    className: g().root,
                    children: (0, i.jsxs)('div', {
                        className: g().container,
                        children: [
                            (0, i.jsx)(v.I, { className: g().icon, variant: 'offline', size: 'xxl' }),
                            (0, i.jsx)(p.DZ, { className: g().title, variant: 'div', size: 'xs', children: s }),
                            (0, i.jsx)(p.HL, {
                                className: g().text,
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'normal',
                                children: (0, i.jsx)(u.A, { id: 'offline.listen-downloaded-content' }),
                            }),
                            (0, i.jsxs)('div', {
                                className: g().buttons,
                                children: [
                                    o,
                                    (0, i.jsx)(b.$, {
                                        color: 'primary',
                                        onClick: t,
                                        role: 'link',
                                        size: 'l',
                                        radius: 'xxxl',
                                        className: g().button,
                                        children: (0, i.jsx)(u.A, { id: 'interface-actions.go-to-collection' }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var f = a(97201),
                C = a(40783),
                y = a(7999),
                k = a(34883),
                N = a(48922),
                T = a(8868),
                L = a(84051),
                P = a(71610),
                I = a(22714),
                S = a(94805),
                O = a(56008);
            let E = (e) => {
                let { pageAlbumId: t, children: a } = e,
                    l = (0, n.useMemo)(() => ({ pageAlbumId: t }), [t]);
                return (0, i.jsx)(O.H.Provider, { value: l, children: a });
            };
            var M = a(65476),
                B = a(3785);
            let w = (e) => {
                var t;
                return (null == e ? void 0 : e.available) === !1 && !!(null == (t = e.disclaimers) ? void 0 : t.includes(B.M.MODAL));
            };
            var D = a(83920),
                R = a(3796),
                U = a(28724),
                H = a(74694),
                z = a(36477),
                X = a(44936),
                F = a(22556),
                V = a(44242),
                K = a(42125),
                Y = a(43592),
                W = a(44338),
                $ = a(24535),
                G = a(47216),
                Q = a(94821),
                q = a(26365),
                Z = a(64605),
                J = a(20698);
            function ee(e) {
                let { type: t, genre: a } = e;
                return [Z._.AUDIOBOOK, Z._.FAIRY_TALE].includes(null != t ? t : '') || ['audiobooksinenglish', 'fiction'].includes(null != a ? a : '');
            }
            function et(e) {
                return { minutes: Math.floor((e / 60) % 60), hours: Math.floor(e / 60 / 60) };
            }
            var ea = a(31995);
            function ei(e) {
                let { albumType: t, messageFormatter: a } = e;
                switch (t) {
                    case Z._.SINGLE:
                        return a({ id: 'metadata.single' });
                    case Z._.PODCAST:
                        return a({ id: 'metadata.podcast' });
                    case Z._.AUDIOBOOK:
                        return a({ id: 'metadata.audiobook' });
                    case Z._.FAIRY_TALE:
                        return a({ id: 'metadata.fairy-tale' });
                    default:
                        return a({ id: 'metadata.album' });
                }
            }
            async function el(e, t) {
                var a, i, l, s;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, K.W)(t.locale),
                    o = (0, W.N)(e.title);
                return {
                    title:
                        null != (a = t.disclaimerTitle)
                            ? a
                            : (function (e) {
                                  let { albumMeta: t, messageFormatter: a } = e,
                                      i = (0, J.j)(t.artists);
                                  return ee({ type: t.type, genre: t.genre })
                                      ? i
                                          ? a(
                                                { id: 'metadata.audiobook-title-with-artists' },
                                                { albumTitle: t.title, artistsNames: i, artistsNamesCount: t.artists.length },
                                            )
                                          : a({ id: 'metadata.audiobook-title-without-artists' }, { albumTitle: t.title })
                                      : t.type === Z._.PODCAST
                                        ? a({ id: 'metadata.podcast-title' }, { albumTitle: t.title })
                                        : i
                                          ? a({ id: 'metadata.album-title-with-artists' }, { albumTitle: t.title, artistsNames: i })
                                          : a({ id: 'metadata.album-title-without-artists' }, { albumTitle: t.title });
                              })({ albumMeta: e, messageFormatter: n }),
                    description: (function (e) {
                        let { albumMeta: t, messageFormatter: a } = e,
                            i = (0, J.j)(t.artists);
                        return ee({ type: t.type, genre: t.genre })
                            ? i
                                ? a({ id: 'metadata.audiobook-title-with-artists' }, { albumTitle: t.title, artistsNames: i, artistsNamesCount: t.artists.length })
                                : a({ id: 'metadata.audiobook-title-without-artists' }, { albumTitle: t.title })
                            : t.type === Z._.PODCAST
                              ? a({ id: 'metadata.podcast-title' }, { albumTitle: t.title })
                              : i
                                ? a({ id: 'metadata.album-title-with-artists' }, { albumTitle: t.title, artistsNames: i })
                                : a({ id: 'metadata.album-title-without-artists' }, { albumTitle: t.title });
                    })({ albumMeta: e, messageFormatter: n }),
                    openGraph: (0, $.i)({
                        ogTitle: o,
                        ogDescription: (function (e) {
                            var t, a, i;
                            let { albumMeta: l, messageFormatter: s } = e,
                                n = (0, ea.Y)((0, J.j)(l.artists), 96, !1);
                            if (ee({ type: l.type, genre: l.genre })) {
                                let { hours: e, minutes: a } = et(null != (t = l.durationSec) ? t : 0),
                                    i = s({ id: 'metadata.hours-and-minutes' }, { hours: e, minutes: a });
                                return [n, ei({ albumType: l.type, messageFormatter: s }), i].join(' • ');
                            }
                            return l.type === Z._.PODCAST
                                ? [
                                      (0, ea.Y)(null != (a = l.description) ? a : '', 96, !1),
                                      ei({ albumType: l.type, messageFormatter: s }),
                                      s({ id: 'metadata.subscribers' }, { subscribers: null != (i = l.likesCount) ? i : 0 }),
                                  ].join(' • ')
                                : [n, ei({ albumType: l.type, messageFormatter: s }), l.year].join(' • ');
                        })({ albumMeta: e, messageFormatter: n }),
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        ogImage: e.ogImage,
                        siteName: n({ id: 'metadata.yandex-music' }),
                        ogType: 'music.album',
                    }),
                    twitter: (0, G.H)({ cardType: Q.W.APP, title: o, url: t.url, appName: n({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, V.X)({
                        additional: { ...t, url: null != (l = t.url) ? l : '', fullUrl: null != (s = t.fullUrl) ? s : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    other: { 'music:musician': (0, Y.x)(e.artists, t.host) },
                    alternates: (0, q.S)('/album/:albumId', t.tld, { params: { albumId: e.id } }),
                };
            }
            var es = a(60900),
                en = a(45477),
                eo = a(75582),
                er = a(90357),
                ed = a(31010),
                ec = a(80451),
                eu = a(37495),
                em = a(90048);
            let eb = (0, l.PA)((e) => {
                var t, a, l, s, n, o, r, d, c, u, m, b, v, p;
                let { user: x, album: h } = e;
                return x.isAuthorized
                    ? null
                    : (0, i.jsx)(em.S, {
                          value: {
                              '@type': 'MusicAlbum',
                              name: null != (u = null == (t = h.meta) ? void 0 : t.title) ? u : void 0,
                              description: null != (m = h.description) ? m : void 0,
                              url: null != (b = null == (a = h.meta) ? void 0 : a.url) ? b : void 0,
                              image: (null == (l = h.meta) ? void 0 : l.coverUri) ? (0, ec.createAvatarUrl)(null == (s = h.meta) ? void 0 : s.coverUri, 'orig') : void 0,
                              genre: null != (v = null == (n = h.meta) ? void 0 : n.genre) ? v : void 0,
                              datePublished: null != (p = null == (r = h.meta) || null == (o = r.year) ? void 0 : o.toString()) ? p : void 0,
                              tracks:
                                  null == (d = h.tracks)
                                      ? void 0
                                      : d
                                            .map((e) => e.data)
                                            .filter((e) => !!(null == e ? void 0 : e.url))
                                            .map((e) => {
                                                var t;
                                                return { '@type': 'MusicRecording', name: e.title, duration: (0, eu.F)(null != (t = e.durationMs) ? t : 0), url: e.url };
                                            }),
                              potentialAction: {
                                  '@type': 'ListenAction',
                                  expectsAcceptanceOf: {
                                      '@type': 'Offer',
                                      category: 'free',
                                      target: { '@type': 'EntryPoint', actionPlatform: null == (c = h.meta) ? void 0 : c.url },
                                  },
                              },
                          },
                      });
            });
            var ev = a(6135),
                ep = a.n(ev),
                ex = a(63618),
                eh = a(71483),
                e_ = a(72676),
                eA = a(71079),
                eg = a(50168),
                ej = a(7462),
                ef = a(71735),
                eC = a(37862),
                ey = a(95481),
                ek = a(26042),
                eN = a(72396),
                eT = a(46200),
                eL = a(5537),
                eP = a(57197),
                eI = a(90169),
                eS = a(90326),
                eO = a(97404),
                eE = a.n(eO);
            let eM = (e) => {
                let { className: t, albumType: a } = e,
                    {
                        settings: { isMobile: l },
                        paywall: s,
                    } = (0, _.g)(),
                    { formatMessage: o } = (0, es.A)(),
                    d = (0, n.useCallback)(
                        (e) => {
                            s.openModal(), e.stopPropagation();
                        },
                        [s],
                    ),
                    c = (0, n.useMemo)(() => {
                        switch (a) {
                            case Z._.SINGLE:
                                return o({ id: 'payment.single-offer-button-title' });
                            case Z._.PODCAST:
                                return o({ id: 'payment.podcast-offer-button-title' });
                            case Z._.AUDIOBOOK:
                                return o({ id: 'payment.books-offer-button-title' });
                            case Z._.FAIRY_TALE:
                                return o({ id: 'payment.fairy-tale-offer-button-title' });
                            default:
                                return o({ id: 'payment.album-offer-button-title' });
                        }
                    }, [a, o]);
                return l
                    ? (0, i.jsxs)(b.$, {
                          onClick: d,
                          className: (0, ex.$)(eE().root, t),
                          color: 'plus',
                          size: 'l',
                          radius: 'xxxl',
                          children: [
                              (0, i.jsx)(p.HL, { className: eE().title, weight: 'bold', variant: 'div', size: 'l', children: c }),
                              (0, i.jsx)(p.HL, {
                                  className: eE().subtitle,
                                  weight: 'normal',
                                  variant: 'div',
                                  size: 'xs',
                                  children: (0, i.jsx)(u.A, { id: 'payment.yandex-plus-offer-button' }),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(b.$, {
                          onClick: d,
                          className: (0, ex.$)(eE().root, t),
                          color: 'plus',
                          size: 'l',
                          radius: 'xxxl',
                          'data-test-id': r.S7.PLUS_PAYWALL_BUTTON,
                          children: [
                              (0, i.jsx)(p.HL, { className: eE().title, weight: 'bold', variant: 'div', size: 'm', children: c }),
                              (0, i.jsx)(p.HL, {
                                  className: eE().subtitle,
                                  weight: 'normal',
                                  variant: 'div',
                                  size: 'xs',
                                  children: (0, i.jsx)(u.A, { id: 'payment.yandex-plus-offer-button' }),
                              }),
                          ],
                      });
            };
            var eB = a(87863),
                ew = a(77712),
                eD = a(21105),
                eR = a(63363),
                eU = a(91253),
                eH = a(54391),
                ez = a(67732),
                eX = a(92744),
                eF = a(10180),
                eV = a(29268),
                eK = a(11260),
                eY = a(91092),
                eW = a.n(eY);
            let e$ = (0, l.PA)((e) => {
                var t;
                let { album: a, likeButtonAriaLabel: l, withLikeButton: s = !0, donationButton: c, contextMenuChildren: b } = e,
                    {
                        user: x,
                        settings: { isMobile: h },
                        trailer: A,
                        albumCPA: { isPlusCPAEnabled: g, isPlusCPAPlayerBarEnabled: j },
                    } = (0, _.g)(),
                    { shouldShowBuySubscriptionModal: f, showBuySubscriptionModal: C } = (0, eT.q)(),
                    [y, k] = (0, n.useState)(!1),
                    N = (0, eR.K)(a),
                    T = (0, eU.A)(a),
                    { formatNumber: L } = (0, es.A)(),
                    P = (0, eH.F)(),
                    { utmLink: I } = (0, eN.f)({ contextId: a.id, contextType: eh.K.Album }),
                    S = (0, ef.P)(),
                    { controlSize: O, iconSize: E } = (0, eB.q)(h),
                    { pageAlbumId: M } = (0, ez.T)(),
                    B = g({ pageAlbumId: M, albumId: a.id, isNonMusic: a.isNonMusic }),
                    w = j(a.id, a.isNonMusic),
                    D = !B && !x.isAuthorized,
                    R = (0, m.c)(() => {
                        if (f && !w) return void C();
                        S() || (A.setUtmLink(I), A.openAlbumTrailer(a.id), P(o.ky.Album, String(a.id)));
                    }),
                    U = (0, n.useMemo)(() => {
                        var e;
                        return (null == (e = a.trailer) ? void 0 : e.isAvailable) && !h
                            ? (0, i.jsx)(eK.L, {
                                  children: (0, i.jsx)(eV.k, {
                                      size: 's',
                                      radius: 'xxxl',
                                      iconSize: 'xxs',
                                      className: eW().trailerControl,
                                      disabled: !a.isAvailable,
                                      onClick: R,
                                      children: (0, i.jsx)(u.A, { id: 'entity-names.trailer' }),
                                  }),
                              })
                            : null;
                    }, [null == (t = a.trailer) ? void 0 : t.isAvailable, a.isAvailable, R, h]),
                    H = (0, d.L)(() => {
                        if (!h) return (0, n.isValidElement)(c) ? c : (0, i.jsx)(eF.O, { size: O, iconSize: E, onClick: T, isPinned: a.isPinned });
                    }),
                    z = (0, d.L)(() => {
                        if (a.actualLikesCount && 0 !== a.actualLikesCount && !h)
                            return (0, i.jsx)(p.HL, {
                                variant: 'span',
                                type: 'controls',
                                size: 's',
                                weight: 'medium',
                                children: a.actualLikesCount && L(a.actualLikesCount),
                            });
                    }),
                    X = (0, d.L)(() => {
                        if (s)
                            return (0, i.jsx)(ek.B, {
                                objectType: a.mainObjectType,
                                objectId: String(a.id),
                                objectPosX: 1,
                                objectPosY: 1,
                                objectsCount: 1,
                                mainObjectType: a.mainObjectType,
                                mainObjectId: String(a.id),
                                children: (0, i.jsx)(eX.c, {
                                    className: eW().likeControl,
                                    isLiked: a.isLiked,
                                    onClick: N,
                                    variant: 'default',
                                    size: O,
                                    iconSize: E,
                                    withRipple: !h,
                                    disabled: D,
                                    'aria-label': l,
                                    children: z,
                                }),
                            });
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        U,
                        X,
                        (0, n.isValidElement)(H) && (0, i.jsx)('div', { className: eW().pinOrDonationControl, children: H }),
                        (0, i.jsx)(eD.x, {
                            album: a,
                            open: y,
                            onOpenChange: k,
                            wrapperClassName: eW().menuControl,
                            size: O,
                            icon: (0, i.jsx)(v.I, { size: E, variant: 'more' }),
                            variant: ew.z.PAGE,
                            'data-test-id': r.e8.pageHeader.ALBUM_HEADER_CONTEXT_MENU_BUTTON,
                            children: b,
                        }),
                    ],
                });
            });
            var eG = a(86269),
                eQ = a(41677),
                eq = a(11323);
            let eZ = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = e.filter((e) => !e.isComposer),
                    a = t.filter((e) => !e.various),
                    i = e.filter((e) => e.isComposer && !e.various),
                    l = [];
                return a.length > 0 ? (l = a) : t.length > 0 && (l = t), l.concat(i);
            };
            var eJ = a(98508),
                e0 = a.n(eJ);
            let e1 = (0, l.PA)((e) => {
                var t, a, l, s;
                let { album: o, withArtistLink: d = !0 } = e,
                    {
                        settings: { isMobile: c },
                    } = (0, _.g)(),
                    u = (0, n.useMemo)(() => eZ(o.artists), [o.artists]),
                    m = (null == u ? void 0 : u.length) === 1 && !(null == (t = u[0]) ? void 0 : t.decomposed) && !(null == (a = u[0]) ? void 0 : a.various);
                // for PulseSync WebHost
                let [, pulseSyncSetHeaderInfoRevision] = (0, n.useState)(0);
                (0, n.useEffect)(() => {
                    const onNativeSlotChange = (e) => {
                        'headerInfoItems' === e.detail && pulseSyncSetHeaderInfoRevision((e) => e + 1);
                    };
                    return (
                        document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange),
                        () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange)
                    );
                }, []);
                const pulseSyncAlbumArtistMeta = (0, i.jsxs)(i.Fragment, {
                        children: [
                            m &&
                                (0, i.jsx)(eG.t, {
                                    radius: 'round',
                                    className: e0().artistCover,
                                    children: (0, i.jsx)(eq.B, { src: null == (s = u[0]) ? void 0 : s.coverUri, size: 30, withAvatarReplace: !0 }),
                                }),
                            (0, i.jsx)(eQ.i, {
                                artists: u,
                                lineClamp: c ? 1 : void 0,
                                className: e0().artists,
                                spoilerClassName: e0().artistsSpoiler,
                                visibleArtistsCount: c ? void 0 : 2,
                                linkClassName: e0().artistLink,
                                captionClassName: e0().artistLabel,
                                variant: c ? 'breakAll' : 'breakWord',
                                withLink: d,
                            }),
                        ],
                    }),
                    pulseSyncNativeAlbumMetaItems = [
                        pulseSyncAlbumArtistMeta,
                        o.year &&
                            (0, i.jsx)(p.HL, {
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: (0, ex.$)(e0().year, { [e0().year_dot]: u.length > 0 }),
                                'data-test-id': r.e8.pageHeader.ALBUM_RELEASE_DATE,
                                children: o.year,
                            }),
                    ].filter(Boolean),
                    pulseSyncAlbumMetaItems = window.pulsesyncApi?.injectNativeSlotItems?.(
                        'headerInfoItems',
                        pulseSyncNativeAlbumMetaItems,
                        {
                            eventDetail: null,
                            renderItem: ({ key, payload, position }) => {
                                const text = String(payload?.text ?? '').trim(),
                                    icon = String(payload?.icon ?? '').trim(),
                                    label = String(payload?.label ?? text).trim(),
                                    variant = 'block' === payload?.display ? 'div' : 'span';
                                if (!text && !icon) return null;
                                return (0, i.jsxs)(
                                    p.HL,
                                    {
                                        variant,
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: (0, ex.$)(e0().year, { [e0().year_dot]: position > 0 }),
                                        ...(label ? { 'aria-label': label } : {}),
                                        'data-pulsesync-addon-header-item': 'meta',
                                        children: [icon && (0, i.jsx)(v.I, { variant: icon, size: 'xxxs' }), text],
                                    },
                                    key,
                                );
                            },
                        },
                    ) ?? pulseSyncNativeAlbumMetaItems;
                return (0, i.jsx)(ek.B, {
                    objectType: o.mainObjectType,
                    objectId: String(o.id),
                    objectPosX: 1,
                    objectPosY: 1,
                    objectsCount: null == (l = o.artists) ? void 0 : l.length,
                    children: (0, i.jsxs)('div', {
                        className: e0().meta,
                        children: pulseSyncAlbumMetaItems,
                    }),
                });
            });
            var e2 = a(73395),
                e7 = a(8576),
                e3 = a(31035),
                e4 = a.n(e3),
                e8 = a(17153),
                e6 = a.n(e8);
            let e9 = (0, l.PA)((e) => {
                    let { album: t, donationButton: a, contextMenuChildren: l, className: s, 'aria-labelledby': r, forwardRef: d, onVersionClick: c } = e,
                        { formatMessage: b } = (0, es.A)(),
                        { shouldShowBuySubscriptionModal: p, showBuySubscriptionModal: x } = (0, eT.q)(),
                        h = (0, ey.f)(),
                        { from: A, utmLink: g } = (0, eN.f)({ pageId: N._Q.ALBUM, blockId: eC.U.ALBUM, contextType: eh.K.Album, contextId: t.id }),
                        j = (0, ef.P)(),
                        {
                            user: f,
                            settings: { isMobile: C },
                            sonataState: y,
                            track: { isTrackPage: k },
                            modals: { imageSliderModal: T },
                            albumCPA: { isPlusCPAPlayerBarEnabled: L },
                            paywall: { modal: P },
                        } = (0, _.g)(),
                        { iconSize: I, controlSize: S } = (0, eB.q)(C),
                        O = C && !f.isAuthorized && t.isAvailable,
                        E = C && !f.hasPlus && f.isAuthorized && t.isAvailable,
                        M = O || E,
                        B = (0, eL.N)(),
                        w = !f.hasPlus && t.isAvailableOnlyForPlus,
                        D = !!t.coverUri,
                        R = L(t.id, t.isNonMusic),
                        U = (0, ej.r)(t.type),
                        H = (0, eP.j)();
                    (0, n.useEffect)(() => {
                        h();
                    }, [h]);
                    let z = (0, n.useMemo)(() => {
                            if (t.shouldShowBooksBadge) return (0, i.jsx)(v.I, { variant: 'yandexBooks'.concat(H), className: e6().booksLogo });
                        }, [t.shouldShowBooksBadge, H]),
                        { isPlaying: X, togglePlay: F } = (0, eI.D)({
                            playContextParams: {
                                contextData: { type: eh.K.Album, meta: { id: t.id }, from: A, utmLink: g },
                                loadContextMeta: !0,
                                entitiesData: y.unloadedEntitiesDataFromModels,
                            },
                        }),
                        V = (0, m.c)(() => {
                            t.coverUri && T.openImages({ images: [t.coverUri] });
                        }),
                        K = (0, m.c)(() => {
                            if (!j()) {
                                if (p && !R) return void x();
                                if (B && !R) return void P.open();
                                F();
                            }
                        }),
                        Y = (0, n.useMemo)(
                            () =>
                                w
                                    ? (0, i.jsx)(eM, { className: e6().plusPaywallButton, albumType: t.type })
                                    : C
                                      ? (0, i.jsx)(eS.D, {
                                            className: (0, ex.$)(e4().playControl, { [e4().playControl_withLogin]: M }),
                                            buttonVariant: 'default',
                                            iconSize: M ? I : 'xxl',
                                            size: M ? S : void 0,
                                            isPlaying: X,
                                            onClick: K,
                                            variant: M ? 'default' : 'filled',
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                        })
                                      : (0, i.jsx)(eS.D, {
                                            className: e4().playControl,
                                            withRipple: !0,
                                            buttonVariant: 'default',
                                            radius: 'xxxl',
                                            size: 's',
                                            color: 'primary',
                                            iconSize: 'xxs',
                                            isPlaying: X,
                                            onClick: K,
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                            children: (0, i.jsx)(u.A, { id: 'player-actions.listen' }),
                                        }),
                            [w, C, X, K, t.isAvailable, t.type, M, I, S],
                        ),
                        W = (0, n.useMemo)(
                            () =>
                                (0, i.jsx)('div', {
                                    className: e4().controlsContainer,
                                    children: (0, i.jsxs)('div', {
                                        className: e4().controls,
                                        children: [
                                            (0, i.jsx)(ek.B, {
                                                objectType: o.ky.Album,
                                                objectId: String(t.id),
                                                objectPosX: 1,
                                                objectPosY: 1,
                                                objectsCount: 1,
                                                mainObjectType: o.ky.Album,
                                                mainObjectId: String(t.id),
                                                children: Y,
                                            }),
                                            (0, i.jsx)(e$, { donationButton: a, album: t, withLikeButton: !w, contextMenuChildren: l }),
                                        ],
                                    }),
                                }),
                            [t, a, Y, w, l],
                        );
                    return (0, i.jsx)(e2.k, {
                        ref: d,
                        headingVariant: k ? 'div' : 'h1',
                        className: s,
                        controls: W,
                        meta: (0, i.jsx)(e1, { album: t }),
                        entityName: U,
                        entityNameIcon: z,
                        title: t.title,
                        cover: (0, i.jsx)(e7.I, {
                            coverVariant: 'square',
                            coverUri: t.coverUri,
                            isAvailable: t.isAvailable,
                            withPlusBadge: t.isAvailableOnlyForPlus,
                            onClick: D ? V : void 0,
                            'aria-label': D ? b({ id: 'slider.view-cover' }) : void 0,
                        }),
                        'aria-labelledby': r,
                        version: t.version,
                        onVersionClick: c,
                        showMobileLoginButton: O,
                        showMobileSubscriptionButton: E,
                    });
                }),
                e5 = (0, n.forwardRef)((e, t) => (0, i.jsx)(e9, { forwardRef: t, ...e }));
            var te = a(77435),
                tt = a(90840),
                ta = a(2413),
                ti = a(15774),
                tl = a(95226),
                ts = a(13882),
                tn = a(31286),
                to = a(79406),
                tr = a(58054),
                td = a(32468),
                tc = (function (e) {
                    return (e.ABOUT = 'about'), (e.TRACKS = 'track-list'), e;
                })({});
            let tu = [tc.ABOUT, tc.TRACKS];
            var tm = a(96333),
                tb = a(49399);
            let tv = (e) => {
                let { album: t } = e;
                return (0, n.useCallback)(
                    (e) => {
                        let a = [];
                        for (let i = e.startIndex; i <= e.endIndex; i++) {
                            let e = t.items[i];
                            (null == e ? void 0 : e.type) === tm.S.TRACK && (null == e ? void 0 : e.loadingState) === tb.G.IDLE && a.push(e.id);
                        }
                        a.length && t.getTracks({ trackIds: a });
                    },
                    [t],
                );
            };
            var tp = a(98350),
                tx = a(32496),
                th = a(34223),
                t_ = (function (e) {
                    return (e.TRACK = 'TRACK'), (e.TEXT = 'TEXT'), e;
                })({}),
                tA = a(52547),
                tg = a.n(tA);
            let tj = (e) => {
                let { shimmerVariant: t, trackVariant: a = tp.X.ALBUM } = e;
                switch (t) {
                    case t_.TRACK:
                        return (0, i.jsx)(th.D, { isActive: !0, className: (0, ex.$)({ [tg().root]: a === tp.X.ALBUM }), variant: a });
                    case t_.TEXT:
                        return (0, i.jsx)(tx.n, { className: tg().root });
                }
            };
            var tf = a(20163),
                tC = a.n(tf);
            let ty = (e) => {
                    let { text: t } = e;
                    return (0, i.jsx)('div', { className: tC().root, children: (0, i.jsx)(p.DZ, { variant: 'h2', className: ep().text, children: t }) });
                },
                tk = (e) => {
                    let { element: t, isNonMusic: a, album: l } = e,
                        { formatMessage: s } = (0, es.A)();
                    return (e) => {
                        var n;
                        let o = null == l || null == (n = l.items) ? void 0 : n[e];
                        if (
                            !o ||
                            !l.meta ||
                            l.isRejected ||
                            !((e) => !!e && 'object' == typeof e && (('type' in e && e.type === ti.r.TEXT) || ('id' in e && 'positionInContext' in e)))(o)
                        )
                            return (0, i.jsx)(tj, { shimmerVariant: t_.TRACK, trackVariant: tp.X.ALBUM });
                        if (!o.data && !o.isRejected)
                            switch (o.type) {
                                case ti.r.TEXT:
                                    return (0, i.jsx)(tj, { shimmerVariant: t_.TEXT });
                                case tm.S.TRACK:
                                    return (0, i.jsx)(tj, { shimmerVariant: t_.TRACK, trackVariant: tp.X.ALBUM });
                                default:
                                    if (a) return (0, i.jsx)(tj, { shimmerVariant: t_.TRACK, trackVariant: tp.X.PLAYLIST });
                            }
                        return o.type !== ti.r.TEXT
                            ? t(o, e)
                            : a
                              ? (0, i.jsx)(ty, { text: s({ id: 'entity-names.season-number' }, { number: o.data }) })
                              : (0, i.jsx)(ty, { text: s({ id: 'entity-names.disk-number' }, { number: o.data }) });
                    };
                };
            var tN = a(5749),
                tT = a(48977),
                tL = a(60101),
                tP = a(23352);
            let tI = (0, l.PA)((e) => {
                let { url: t } = e,
                    a = (0, tN.c)(),
                    l = (0, tT.C)(),
                    { ref: s, intersectionPropertyId: n } = (0, tP.n)({ callback: l, withViewUuid: !0 }),
                    r = (0, h.Z)(t),
                    d = (0, m.c)((e) => {
                        a(o.QT.Link, t), r(e);
                    });
                return (0, i.jsx)(tL.v, { onClick: d, ref: s, 'data-intersection-property-id': n });
            });
            var tS = a(80097),
                tO = a(74381),
                tE = a(79897),
                tM = a(91853);
            let tB = (0, l.PA)((e) => {
                    let { donation: t } = e,
                        a = (0, tN.c)(),
                        l = (0, tT.C)(),
                        s = (0, tt.Q)()(t.url),
                        { ref: n, intersectionPropertyId: r } = (0, tP.n)({ callback: l, withViewUuid: !0 }),
                        d = (0, h.Z)(s),
                        c = (0, h.Z)(t.artist.url),
                        u = (0, m.c)((e) => {
                            a(o.QT.ArtistScreen), c(e);
                        }),
                        b = (0, m.c)(() => {
                            a(o.QT.Link, s), d();
                        }),
                        v = (0, tM.S)({ artist: t.artist, callback: u });
                    return (0, i.jsx)(tE.X, {
                        ref: n,
                        'data-intersection-property-id': r,
                        artist: t.artist,
                        goal: t.goal,
                        onNavigateToArtist: v,
                        onNavigateToDonation: b,
                    });
                }),
                tw = (0, l.PA)((e) => {
                    var t, a, l;
                    let { className: s, headerClassName: r, containerClassName: d, headingVariant: c } = e,
                        { formatMessage: u } = (0, es.A)(),
                        { album: m } = (0, _.g)(),
                        b = (0, n.useMemo)(() => {
                            var e, t;
                            return (null == (e = m.donations) ? void 0 : e.isLoading) || !(null == (t = m.donations) ? void 0 : t.items)
                                ? (0, tO.k)(!0)
                                : m.donations.items.map((e, t) => {
                                      var a, l, s;
                                      return (0, i.jsx)(
                                          ek.B,
                                          {
                                              objectType: o.ky.Donation,
                                              objectId: e.artist.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: Number(null == (l = m.donations) || null == (a = l.items) ? void 0 : a.length),
                                              mainObjectId: String(null == (s = m.meta) ? void 0 : s.id),
                                              mainObjectType: o.ky.Album,
                                              children: (0, i.jsx)(tB, { donation: e }, e.artist.id),
                                          },
                                          e.artist.id,
                                      );
                                  });
                        }, [null == (t = m.donations) ? void 0 : t.isLoading, null == (a = m.donations) ? void 0 : a.items, null == (l = m.meta) ? void 0 : l.id]);
                    return (0, i.jsx)(tS.x, {
                        className: s,
                        headerClassName: r,
                        containerClassName: d,
                        title: u({ id: 'donation.support-text' }),
                        headingVariant: c,
                        children: b,
                    });
                });
            var tD = a(19740),
                tR = a(27576),
                tU = a(52068),
                tH = a(79374),
                tz = a(2792),
                tX = a(37240),
                tF = a(62376),
                tV = a(92083),
                tK = a.n(tV),
                tY = a(50162),
                tW = a(84782),
                t$ = a(98252),
                tG = a.n(t$);
            let tQ = (0, l.PA)((e) => {
                    let { donation: t } = e,
                        a = (0, tt.Q)()(t.url),
                        l = (0, h.Z)(a),
                        s = (() => {
                            let { hash: e } = (0, tU.gf)(),
                                t = (0, tF.U)(),
                                a = (0, tU.st)(),
                                { pageId: i } = (0, tX.$)(),
                                { blockId: l, blockType: s, blockPosX: n, blockPosY: r } = (0, tW.N)(),
                                { objectType: d, objectId: c, objectPosX: u, objectPosY: b, objectsCount: v, mainObjectId: p, mainObjectType: x } = (0, tz.J)();
                            return (0, m.c)(() => {
                                if (!a || !i) return;
                                let m = tH.W[i];
                                if (!m) return;
                                let h = {
                                        userInteractionType: o.gi.Tap,
                                        hash: e,
                                        pageId: m,
                                        pageStyle: o.QL.ContextMenu,
                                        pagePlacement: o.c4.Hover,
                                        mainObjectType: x,
                                        mainObjectId: p,
                                        objectType: d,
                                        objectId: c,
                                        objectPosX: u,
                                        objectPosY: b,
                                        entityType: s,
                                        entityId: l,
                                        entityPosX: n,
                                        entityPosY: r,
                                        objectsCount: v,
                                        actionType: o.N6.CLICK,
                                    },
                                    _ = (0, o.Fx)({ params: h, logger: t, context: 'useSendEventOnDonationMenuItemActionPerformed' });
                                _ && (0, o.l6)(a.evgenInstance, _);
                            });
                        })(),
                        n = (0, tT.C)(),
                        { ref: r, intersectionPropertyId: d } = (0, tP.n)({ callback: n, withViewUuid: !0 }),
                        c = (0, m.c)(() => {
                            s(), l();
                        });
                    return (0, i.jsxs)(
                        tD.Dr,
                        {
                            ref: r,
                            'data-intersection-property-id': d,
                            className: tG().root,
                            isBlock: !0,
                            onClick: c,
                            children: [
                                (0, i.jsx)(eG.t, {
                                    radius: 'round',
                                    className: tG().cover,
                                    children: (0, i.jsx)(tY._V, { withAvatarReplace: !0, src: t.artist.coverUri, size: 100, fit: 'contain', className: tG().image }),
                                }),
                                (0, i.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.artist.name }),
                            ],
                        },
                        a,
                    );
                }),
                tq = (0, l.PA)(() => {
                    var e;
                    let {
                            settings: { isMobile: t },
                            album: { donations: a, meta: l },
                        } = (0, _.g)(),
                        { formatMessage: s } = (0, es.A)(),
                        r = (() => {
                            let e = (0, tU.st)(),
                                t = (0, tF.U)(),
                                { hash: a } = (0, tU.gf)(),
                                { pageId: i } = (0, tX.$)(),
                                { mainObjectId: l, mainObjectType: s } = (0, tz.J)();
                            return (0, m.c)((n) => {
                                if (!e || !i || !tH.W[i]) return;
                                let r = { pageStyle: o.QL.ContextMenu, pagePlacement: o.c4.Hover, mainObjectType: s, mainObjectId: l, hash: a, pageId: i };
                                n && (r.viewUuid = String((0, tR.A)()));
                                let d = (0, o.Fx)({ params: r, logger: t, context: 'useSendEventOnDonationMenuOpenedOrClosed' });
                                d && (n ? (0, o.Fn)(null == e ? void 0 : e.evgenInstance, d) : (0, o.Ig)(null == e ? void 0 : e.evgenInstance, d));
                            });
                        })(),
                        [d, c] = (0, n.useState)(!1),
                        u = (0, n.useRef)(!1);
                    return (
                        (0, n.useEffect)(() => {
                            d && (u.current = !0);
                        }, [d]),
                        (0, n.useEffect)(() => {
                            u.current && r(d);
                        }, [d, r]),
                        (0, i.jsx)(tD.W1, {
                            ariaLabel: s({ id: 'donation.button-text' }),
                            size: 's',
                            variant: 'default',
                            radius: 'round',
                            color: 'secondary',
                            icon: (0, i.jsx)(v.I, { size: 'xxs', variant: 'ruble' }),
                            onOpenChange: c,
                            open: d,
                            isMobile: t,
                            placement: 'bottom',
                            offsetOptions: 8,
                            listClassName: tK().popover,
                            children:
                                null == a || null == (e = a.items)
                                    ? void 0
                                    : e.map((e, t) => {
                                          var s;
                                          return (0, i.jsx)(
                                              ek.B,
                                              {
                                                  objectType: o.ky.Donation,
                                                  objectId: e.artist.id,
                                                  objectPosX: 1,
                                                  objectPosY: t + 1,
                                                  objectsCount: Number(null == (s = a.items) ? void 0 : s.length),
                                                  mainObjectId: String(null == l ? void 0 : l.id),
                                                  mainObjectType: o.ky.Album,
                                                  children: (0, i.jsx)(tQ, { donation: e }),
                                              },
                                              e.artist.id,
                                          );
                                      }),
                        })
                    );
                });
            var tZ = a(54862),
                tJ = a(79248);
            let t0 = (0, l.PA)((e) => {
                    let { item: t, itemContentCallback: a, resizeObserver: l, scrollMargin: s } = e,
                        [o, r] = (0, tZ.d)();
                    (0, n.useEffect)(
                        () => (
                            o && l && l.observe(o),
                            () => {
                                o && l && l.unobserve(o);
                            }
                        ),
                        [o, l],
                    );
                    let d = { transform: 'translate3d(0, '.concat(t.start - s, 'px, 0)') };
                    return (0, i.jsx)('div', { 'data-index': t.index, className: ep().virtualItem, ref: r, style: d, children: a(t.index) }, t.key);
                }),
                t1 = (0, l.PA)((e) => {
                    let { count: t, getDataByRange: a, itemContentCallback: l, role: s = 'region', ariaLabel: o } = e,
                        d = (0, ey.f)(),
                        [c, u] = (0, tZ.d)(),
                        { virtualizer: m, resizeObserver: b } = (0, tJ.r)({ count: t, getEstimateSize: () => 56, containerRef: c });
                    (0, n.useEffect)(() => {
                        d();
                    }, [d]),
                        (0, n.useEffect)(() => {
                            !m.isScrolling && m.range && a(m.range);
                        }, [a, m.isScrolling, m.range]);
                    let v = m.getTotalSize(),
                        p = m.getVirtualItems();
                    return (0, i.jsx)('div', {
                        className: ep().virtualScroll,
                        style: { height: ''.concat(v, 'px') },
                        ref: u,
                        role: s,
                        'aria-label': o,
                        'data-test-id': r.S7.TRACK_LIST,
                        children: p.map((e) => (0, i.jsx)(t0, { item: e, itemContentCallback: l, resizeObserver: b, scrollMargin: m.options.scrollMargin }, e.key)),
                    });
                });
            var t2 = a(47745),
                t7 = a(61258);
            let t3 = (e) => {
                    let { url: t, name: a } = e,
                        l = (0, t2.N)(),
                        { ref: s, intersectionPropertyId: n } = (0, tP.n)(),
                        d = (0, m.c)(() => {
                            l({ to: o.QT.LabelScreen, deepLink: t });
                        });
                    return (0, i.jsx)('span', {
                        ref: s,
                        'data-intersection-property-id': n,
                        className: ep().labelLinkContainer,
                        children: (0, i.jsx)(t7.N, {
                            role: 'link',
                            'aria-label': a,
                            href: t,
                            className: (0, ex.$)(ep().labelLink, ep().important),
                            onClick: d,
                            'data-test-id': r.Xk.album.ALBUM_LABEL_LINK,
                            children: (0, i.jsx)(p.HL, { variant: 'span', children: a }),
                        }),
                    });
                },
                t4 = (0, l.PA)((e) => {
                    var t, a, l;
                    let { album: s, size: r, weight: d, className: c } = e,
                        { formatMessage: u } = (0, es.A)(),
                        m = (0, ey.f)();
                    (0, n.useEffect)(() => {
                        m();
                    }, [m]);
                    let b = null == (t = s.labels) ? void 0 : t.length,
                        v = u((null == (a = s.meta) ? void 0 : a.isPodcast) ? { id: 'page.album-publisher-title' } : { id: 'page.album-label-title' }, { count: b });
                    return (0, i.jsxs)('div', {
                        className: (0, ex.$)(ep().label, c),
                        children: [
                            (0, i.jsx)(p.HL, { variant: 'span', size: r, weight: d, children: v }),
                            '\xa0',
                            (0, i.jsx)(p.HL, {
                                variant: 'span',
                                size: r,
                                weight: d,
                                lineClamp: 1,
                                children:
                                    null == (l = s.labels)
                                        ? void 0
                                        : l.map((e, t) => {
                                              var a, l;
                                              let { id: n, name: r } = e;
                                              return (0, i.jsx)(
                                                  ek.B,
                                                  {
                                                      objectType: o.ky.Link,
                                                      objectId: s.labelUrl(n),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: null == (a = s.labels) ? void 0 : a.length,
                                                      mainObjectType: o.ky.Link,
                                                      mainObjectId: String(null == (l = s.meta) ? void 0 : l.id),
                                                      children: (0, i.jsx)(t3, { url: s.labelUrl(n), name: r }),
                                                  },
                                                  n,
                                              );
                                          }),
                            }),
                        ],
                    });
                });
            var t8 = a(79490),
                t6 = a(62386),
                t9 = a(32804),
                t5 = a(9480),
                ae = a(44128),
                at = a(46673),
                aa = a(97647);
            let ai = (0, l.PA)((e) => {
                var t;
                let { albumId: a, albumTitle: l, albumCoverUri: s } = e,
                    {
                        user: o,
                        experiments: d,
                        album: c,
                        sonataState: { entityMeta: b },
                    } = (0, _.g)(),
                    p = (0, ae.e)(),
                    x = d.checkExperiment(to.z.WebNextUseWaveQueue, 'on'),
                    h = null == p ? void 0 : p.state.currentContext.value,
                    A = !!((0, t8.S)(h) || ((0, t6.i)(h) && !x)),
                    g = ((e) =>
                        (0, m.c)((t) =>
                            t.data
                                ? !t.data.isRemoved && t.data.isAvailable
                                    ? t.data.entityId
                                    : void 0
                                : 'number' == typeof e
                                  ? ''.concat(t.id, ':').concat(e)
                                  : void 0,
                        ))(null == (t = c.meta) ? void 0 : t.id),
                    j = (0, n.useMemo)(() => (0, at.t)({ contextType: eh.K.Album, contextId: String(a) }), [a]),
                    f = (0, t9.m)(c.tracks, t5.N.NEXT, j, { entityVariant: aa.c.ALBUM, entityTitle: l, coverUri: s }, g),
                    C = (0, t9.m)(c.tracks, t5.N.LAST, j, { entityVariant: aa.c.ALBUM, entityTitle: l, coverUri: s }, g);
                return b && !A
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(tD.Dr, {
                                  onClick: f,
                                  icon: (0, i.jsx)(v.I, { variant: 'playNext', size: 'xxs' }),
                                  disabled: !o.isAuthorized,
                                  'data-test-id': r.Kq.album.ALBUM_CONTEXT_MENU_PLAY_NEXT_BUTTON,
                                  children: (0, i.jsx)(u.A, { id: 'play-queue.play-next' }),
                              }),
                              (0, i.jsx)(tD.Dr, {
                                  onClick: C,
                                  icon: (0, i.jsx)(v.I, { variant: 'playLast', size: 'xxs' }),
                                  disabled: !o.isAuthorized,
                                  'data-test-id': r.Kq.album.ALBUM_CONTEXT_MENU_PLAY_LAST_BUTTON,
                                  children: (0, i.jsx)(u.A, { id: 'play-queue.play-last' }),
                              }),
                          ],
                      })
                    : null;
            });
            var al = a(72440),
                as = a.n(al);
            let an = (0, l.PA)(() => {
                var e, t, a, l, s, c, u, m;
                let b = (0, n.useRef)(null),
                    v = (0, n.useRef)(0),
                    p = (0, tn.w)(),
                    { notify: x } = (0, eo.l)(),
                    h = (0, tt.Q)(),
                    {
                        album: A,
                        albumCPA: g,
                        experiments: j,
                        sonataState: f,
                        settings: { isMobile: C },
                        track: { isTrackPage: y },
                    } = (0, _.g)(),
                    { from: k, utmLink: T } = (0, eN.f)({ pageId: N._Q.ALBUM, blockId: eC.U.ALBUM, contextType: eh.K.Album, contextId: A.id }),
                    { formatMessage: L } = (0, es.A)(),
                    [P, I] = (0, n.useState)(!1),
                    S = tv({ album: A }),
                    O = y ? 'div' : 'h2',
                    E = A.items.length || 10,
                    { isCPAEnabled: B } = (0, M.I)(),
                    w = !B || (B && !g.cpa),
                    D = j.checkExperiment(to.z.WebNextAlbumDonationButton, 'on') && A.hasDonations,
                    R = D && C,
                    { showBuySubscriptionModal: U } = (0, eT.q)(),
                    H = g.isPlusCPAPlayerBarEnabled(A.id, null == (e = A.meta) ? void 0 : e.isNonMusic) && C;
                (0, n.useEffect)(
                    () => () => {
                        v.current = 0;
                    },
                    [A],
                ),
                    (0, n.useEffect)(() => {
                        H && f.status === e_.MT.ENDED && U();
                    }, [f.status, U, H]),
                    (0, n.useEffect)(() => {
                        var e, t;
                        if ((null == (e = A.otherArtistAlbums) ? void 0 : e.isRejected) || (null == (t = A.latestGenreAlbums) ? void 0 : t.isRejected)) {
                            if (!v || v.current > 0) return;
                            x((0, i.jsx)(er.h, { error: L({ id: 'album-errors.error-during-loading-similar-albums' }) }), { containerId: en.u.ERROR }), v.current++;
                        }
                    }, [null == (t = A.latestGenreAlbums) ? void 0 : t.isRejected, null == (a = A.otherArtistAlbums) ? void 0 : a.isRejected, L, x]),
                    (0, n.useEffect)(() => {
                        A.isResolved && A.hasOtherAlbumVersions && I(!0);
                    }, [A.hasOtherAlbumVersions, A.isResolved]);
                let z = (0, n.useCallback)(() => {
                        let e = b.current;
                        null == e || e.scrollIntoView({ behavior: 'smooth' });
                    }, []),
                    X = (0, d.L)(() => {
                        var e, t, a, l, s;
                        if (!D || !(null == (e = A.donations) ? void 0 : e.items)) return;
                        if (Number(null == (a = A.meta) || null == (t = a.artists) ? void 0 : t.length) > 1)
                            return (0, i.jsx)(tl.F, {
                                blockType: o.LA.Donations,
                                blockId: eC.U.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, i.jsx)(ek.B, {
                                    mainObjectId: String(null == (s = A.meta) ? void 0 : s.id),
                                    mainObjectType: o.ky.Album,
                                    children: (0, i.jsx)(tq, {}),
                                }),
                            });
                        let [n] = A.donations.items;
                        if (n)
                            return (0, i.jsx)(tl.F, {
                                blockType: o.LA.Donations,
                                blockId: eC.U.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, i.jsx)(ek.B, {
                                    objectType: o.ky.Donation,
                                    objectId: n.artist.id,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: 1,
                                    mainObjectId: String(null == (l = A.meta) ? void 0 : l.id),
                                    mainObjectType: o.ky.Album,
                                    children: (0, i.jsx)(tI, { url: h(n.url) }),
                                }),
                            });
                    }),
                    F = (0, n.useMemo)(
                        () =>
                            A.isLoading || !A.meta || A.isRejected
                                ? (0, i.jsx)(eg.c, { className: ep().header, isActive: !0 })
                                : (0, i.jsx)(e5, {
                                      album: A.meta,
                                      donationButton: X,
                                      className: ep().header,
                                      onVersionClick: P ? z : void 0,
                                      contextMenuChildren: (0, i.jsx)(ai, { albumId: A.meta.id, albumTitle: A.meta.title, albumCoverUri: A.meta.coverUri }),
                                  }),
                        [A.isLoading, A.meta, A.isRejected, X, P, z],
                    ),
                    V = tk({
                        element: (e, t) => {
                            var a;
                            if (e.data && e.type !== ti.r.TEXT)
                                return (0, i.jsx)(ek.B, {
                                    objectType: o.ky.Track,
                                    objectId: String(e.data.id),
                                    objectPosX: 1,
                                    objectPosY: t + 1,
                                    objectsCount: E,
                                    children: (0, i.jsx)(ta.F, {
                                        withLightning: e.isBest && !e.data.isRemoved,
                                        track: e.data,
                                        position: e.position,
                                        albumArtists: null == A || null == (a = A.meta) ? void 0 : a.artists,
                                        playContextParams: p(t, {
                                            contextData: { type: eh.K.Album, meta: A.contextMeta, from: k, utmLink: T },
                                            queueParams: { index: e.positionInContext, entityId: e.data.id },
                                            loadContextMeta: !0,
                                            entitiesData: f.unloadedEntitiesDataFromModels,
                                        }),
                                    }),
                                });
                        },
                        album: A,
                    }),
                    K = (0, d.L)(() => {
                        var e, t, a, l, s, n, d, c, u, m, v, p;
                        let x = [],
                            h = 4;
                        return (
                            R &&
                                (null == (e = A.donations) ? void 0 : e.items) &&
                                (x.push(
                                    (0, i.jsx)(
                                        tl.F,
                                        {
                                            blockType: o.LA.Donations,
                                            blockId: eC.U.DONATY,
                                            blockPosX: 1,
                                            blockPosY: h,
                                            children: (0, i.jsx)(tw, {
                                                headingVariant: O,
                                                className: as().carouselContainer,
                                                headerClassName: (0, ex.$)(as().carouselBlock, as().carouselBlockHeader),
                                                containerClassName: as().carouselBlock,
                                            }),
                                        },
                                        o.LA.Donations,
                                    ),
                                ),
                                h++),
                            A.hasSimilarEntities &&
                                (x.push(
                                    (0, i.jsx)(
                                        tl.F,
                                        {
                                            blockType: o.LA.SimilarEntities,
                                            blockId: o.LA.SimilarEntities,
                                            blockPosX: 1,
                                            blockPosY: h,
                                            objectsCount: null == (a = A.similarEntities.data) ? void 0 : a.items.length,
                                            mainObjectId: String(null == (l = A.meta) ? void 0 : l.id),
                                            mainObjectType: o.ky.Album,
                                            children: (0, i.jsx)(eA.Q, {
                                                ...A.similarEntities,
                                                meta: { title: L({ id: 'page.similar-entities-block-title' }) },
                                                headingVariant: O,
                                                className: as().carouselContainer,
                                                headerClassName: (0, ex.$)(as().carouselBlock, as().carouselBlockHeader),
                                                containerClassName: as().carouselBlock,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                setHasSentAnalyticsOnLoaded: A.similarEntities.setHasSentAnalyticsOnLoaded,
                                            }),
                                        },
                                        o.LA.SimilarEntities,
                                    ),
                                ),
                                h++),
                            A.hasOtherAlbumVersions &&
                                (null == (t = A.otherAlbumVersions) ? void 0 : t.length) &&
                                (x.push(
                                    (0, i.jsx)(
                                        tl.F,
                                        {
                                            blockType: o.LA.OtherAlbumVersions,
                                            blockId: o.LA.OtherAlbumVersions,
                                            blockPosX: 1,
                                            blockPosY: h,
                                            objectsCount: null == (s = A.otherAlbumVersions) ? void 0 : s.length,
                                            mainObjectId: String(null == (n = A.meta) ? void 0 : n.id),
                                            mainObjectType: o.ky.Album,
                                            children: (0, i.jsx)(te.p, {
                                                isShimmerVisible: A.isLoading,
                                                isShimmerActive: !0,
                                                className: as().carouselContainer,
                                                headerClassName: (0, ex.$)(as().carouselBlock, as().carouselBlockHeader),
                                                containerClassName: as().carouselBlock,
                                                title: L({ id: 'entity-names.other-album-versions' }),
                                                albums: A.otherAlbumVersions,
                                                headingRef: b,
                                                headingVariant: O,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': r.Xk.album.OTHER_VERSIONS_CAROUSEL,
                                            }),
                                        },
                                        o.LA.OtherAlbumVersions,
                                    ),
                                ),
                                h++),
                            A.hasLatestGenreAlbums &&
                                w &&
                                (x.push(
                                    (0, i.jsx)(
                                        tl.F,
                                        {
                                            blockType: o.LA.GenreAlbums,
                                            blockId: o.LA.GenreAlbums,
                                            blockPosX: 1,
                                            blockPosY: h,
                                            objectsCount: null == (d = A.latestGenreAlbums) ? void 0 : d.items.length,
                                            mainObjectId: String(null == (c = A.meta) ? void 0 : c.id),
                                            mainObjectType: o.ky.Album,
                                            children: (0, i.jsx)(te.p, {
                                                isShimmerVisible: A.isLatestGenreAlbumsLoading,
                                                isShimmerActive: !0,
                                                className: as().carouselContainer,
                                                headerClassName: (0, ex.$)(as().carouselBlock, as().carouselBlockHeader),
                                                containerClassName: as().carouselBlock,
                                                title: L({ id: 'entity-names.new-albums-in-genre' }),
                                                albums: null == (u = A.latestGenreAlbums) ? void 0 : u.items,
                                                headingVariant: O,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': r.Xk.album.GENRE_ALBUMS_CAROUSEL,
                                            }),
                                        },
                                        o.LA.GenreAlbums,
                                    ),
                                ),
                                h++),
                            A.hasOtherArtistAlbums &&
                                (x.push(
                                    (0, i.jsx)(
                                        tl.F,
                                        {
                                            blockType: o.LA.OtherAlbums,
                                            blockId: o.LA.OtherAlbums,
                                            blockPosX: 1,
                                            blockPosY: h,
                                            objectsCount: null == (m = A.otherArtistAlbums) ? void 0 : m.items.length,
                                            mainObjectId: String(null == (v = A.meta) ? void 0 : v.id),
                                            mainObjectType: o.ky.Album,
                                            children: (0, i.jsx)(te.p, {
                                                isShimmerVisible: A.isOtherArtistAlbumsLoading,
                                                isShimmerActive: !0,
                                                className: as().carouselContainer,
                                                headerClassName: (0, ex.$)(as().carouselBlock, as().carouselBlockHeader),
                                                containerClassName: as().carouselBlock,
                                                title: L({ id: 'entity-names.other-albums-of-artist' }),
                                                albums: null == (p = A.otherArtistAlbums) ? void 0 : p.items,
                                                headingVariant: O,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': r.Xk.album.OTHER_ARTIST_ALBUMS_CAROUSEL,
                                            }),
                                        },
                                        o.LA.OtherAlbums,
                                    ),
                                ),
                                h++),
                            x
                        );
                    });
                return (
                    A.id && A.isResolved && A.similarEntities.isNeededToLoad && A.isSimilarEntitiesEnabled && (0, n.use)(A.getSimilarEntities({ albumId: A.id })),
                    (0, i.jsxs)(ts.h, {
                        tabId: '',
                        tabPos: 0,
                        isTabSelectedByDefault: !1,
                        children: [
                            (0, i.jsx)(tl.F, {
                                blockType: o.LA.Header,
                                blockId: o.LA.Header,
                                blockPosX: 1,
                                blockPosY: 1,
                                mainObjectId: String(null == (l = A.meta) ? void 0 : l.id),
                                mainObjectType: o.ky.Album,
                                objectsCount: 1,
                                children: F,
                            }),
                            (0, i.jsx)(tl.F, {
                                blockType: o.LA.Tracks,
                                blockId: o.LA.Tracks,
                                blockPosX: 1,
                                blockPosY: 2,
                                objectsCount: E,
                                mainObjectId: String(null == (s = A.meta) ? void 0 : s.id),
                                mainObjectType: o.ky.Album,
                                children: (0, i.jsx)(t1, {
                                    count: E,
                                    itemContentCallback: V,
                                    getDataByRange: S,
                                    ariaLabel: L({ id: 'entity-names.albums-tracks-list' }, { albumName: (null == (c = A.meta) ? void 0 : c.title) || '' }),
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: ep().footerContainer,
                                children: [
                                    A.hasLabel &&
                                        (0, i.jsx)(tl.F, {
                                            blockType: o.LA.Labels,
                                            blockId: o.LA.Labels,
                                            blockPosX: 1,
                                            blockPosY: 3,
                                            objectsCount: null == (u = A.labels) ? void 0 : u.length,
                                            mainObjectId: String(null == (m = A.meta) ? void 0 : m.id),
                                            mainObjectType: o.ky.Album,
                                            children: (0, i.jsx)(t4, { album: A, size: 's', weight: 'normal', className: as().label }),
                                        }),
                                    (0, i.jsxs)('div', { className: as().carouselBlocks, children: [K, ' '] }),
                                    (0, i.jsx)(td.A, { children: (0, i.jsx)(tr.w, { className: ep().footer }) }),
                                ],
                            }),
                        ],
                    })
                );
            });
            var ao = a(15299),
                ar = a(94631),
                ad = a(19620),
                ac = a(86400),
                au = a.n(ac);
            let am = (0, l.PA)((e) => {
                let { className: t, headingVariant: a = 'h2' } = e,
                    l = (0, ey.f)(),
                    { formatMessage: s } = (0, es.A)(),
                    { album: r, sonataState: d } = (0, _.g)();
                (0, n.useEffect)(() => {
                    l();
                }, [l]);
                let { from: c, utmLink: u } = (0, eN.f)({ pageId: N._Q.PODCAST, blockId: eC.U.PODCAST, contextId: r.id, contextType: eh.K.Album }),
                    m = (0, n.useMemo)(
                        () =>
                            r.lastEpisodes.map((e, t) =>
                                r.isResolved && e.data
                                    ? (0, i.jsx)(
                                          ek.B,
                                          {
                                              objectType: o.ky.PodcastEpisode,
                                              objectId: String(e.data.id),
                                              objectPosX: 1,
                                              objectPosY: t + 1,
                                              objectsCount: r.lastEpisodes.length,
                                              children: (0, i.jsx)(ar.K, {
                                                  track: e.data,
                                                  playContextParams: {
                                                      contextData: { type: eh.K.Album, meta: r.contextMeta, from: c, utmLink: u },
                                                      queueParams: { index: e.positionInContext, entityId: e.data.id },
                                                      loadContextMeta: !0,
                                                      entitiesData: d.unloadedEntitiesDataFromModels,
                                                  },
                                              }),
                                          },
                                          e.data.id,
                                      )
                                    : (0, i.jsx)(th.D, { isActive: !0, className: au().shimmerItem, variant: tp.X.ALBUM }, t),
                            ),
                        [r.lastEpisodes, r.isResolved, r.contextMeta, c, u, d.unloadedEntitiesDataFromModels],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, ex.$)(t, au().root),
                    children: [
                        (0, i.jsx)(ad.T, { headingVariant: a, className: au().blockHeader, title: s({ id: 'entity-names.podcast-last-episodes' }) }),
                        (0, i.jsx)('div', { role: 'list', 'aria-label': s({ id: 'podcast.last-episodes-list' }), tabIndex: 0, children: m }),
                    ],
                });
            });
            var ab = a(24170),
                av = a(98148);
            let ap = {
                'authors-books': r.e8.album.AUTHORS_BOOKS,
                'category-albums': r.e8.album.CATEGORY_ALBUMS,
                'labels-albums': r.e8.album.LABELS_ALBUMS,
                'similar-albums': r.e8.album.SIMILAR_ALBUMS,
            };
            var ax = a(4332),
                ah = a.n(ax);
            let a_ = (0, l.PA)((e) => {
                var t, a;
                let { isShimmerVisible: l, isShimmerActive: s, className: r, headingVariant: d = 'h2' } = e,
                    { album: c } = (0, _.g)(),
                    u = (0, ey.f)();
                return (
                    (0, n.useEffect)(() => {
                        u();
                    }, [u]),
                    (0, i.jsx)('div', {
                        className: (0, ex.$)(r, ah().root),
                        children:
                            null == (a = c.relatedContent) || null == (t = a.items)
                                ? void 0
                                : t.map((e, t) => {
                                      let a = ap[e.type] || '';
                                      return (0, i.jsx)(
                                          av.O,
                                          {
                                              headingVariant: d,
                                              title: e.title,
                                              isShimmerVisible: l,
                                              isShimmerActive: s,
                                              className: (0, ex.$)(ah().root, r),
                                              containerClassName: ah().carousel,
                                              headerClassName: ah().header,
                                              'data-test-id': a,
                                              children: e.albums.map((t, a) =>
                                                  (0, i.jsx)(
                                                      ek.B,
                                                      {
                                                          objectType: o.ky.Podcast,
                                                          objectId: String(t.id),
                                                          objectPosX: a + 1,
                                                          objectPosY: 1,
                                                          objectsCount: e.albums.length,
                                                          children: (0, i.jsx)(ab.a, { album: t, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }),
                                                      },
                                                      t.id,
                                                  ),
                                              ),
                                          },
                                          ''.concat(e.type).concat(t),
                                      );
                                  }),
                    })
                );
            });
            var aA = a(73155),
                ag = a(2969),
                aj = a(96434),
                af = a(30542),
                aC = a(2411),
                ay = a.n(aC);
            let ak = (0, l.PA)((e) => {
                    let { album: t, actionButton: a, contextMenuChildren: l, className: s, 'aria-labelledby': o, forwardRef: d, onVersionClick: c } = e,
                        { formatMessage: b } = (0, es.A)(),
                        { shouldShowBuySubscriptionModal: p, showBuySubscriptionModal: x } = (0, eT.q)(),
                        h = (0, ey.f)(),
                        { from: A, utmLink: g } = (0, eN.f)({ pageId: N._Q.ALBUM, blockId: eC.U.ALBUM, contextType: eh.K.Album, contextId: t.id }),
                        {
                            user: j,
                            settings: { isMobile: f },
                            sonataState: C,
                            modals: { imageSliderModal: y },
                            paywall: { modal: k },
                        } = (0, _.g)(),
                        T = (0, ag.b)(),
                        L = (0, ef.P)(),
                        { iconSize: P, controlSize: I } = (0, eB.q)(f),
                        S = f && !j.isAuthorized && t.isAvailable,
                        O = f && !j.hasPlus && j.isAuthorized && t.isAvailable,
                        E = S || O,
                        M = (0, eL.N)(),
                        B = (0, af.$)(t.isLiked, t.type),
                        w = (0, ej.r)(t.type),
                        D = (0, eP.j)(),
                        R = t.isAvailable || t.isAudiobook,
                        U = !!t.coverUri;
                    (0, n.useEffect)(() => {
                        h();
                    }, [h]);
                    let H = (0, n.useMemo)(() => {
                            if (t.shouldShowBooksBadge) return (0, i.jsx)(v.I, { variant: 'yandexBooks'.concat(D), className: ay().booksLogo });
                        }, [t.shouldShowBooksBadge, D]),
                        z = !j.hasPlus && t.isAvailableOnlyForPlus,
                        X = (0, aj.c)(t.isPodcast ? t : null),
                        { isPlaying: F, togglePlay: V } = (0, eI.D)({
                            playContextParams: {
                                contextData: { type: eh.K.Album, meta: { id: t.id }, from: A, utmLink: g },
                                loadContextMeta: !0,
                                entitiesData: C.unloadedEntitiesDataFromModels,
                            },
                        }),
                        K = (0, m.c)(() => {
                            t.coverUri && y.openImages({ images: [t.coverUri] });
                        }),
                        Y = (0, m.c)(() => {
                            if (!L()) {
                                if (p) return void x();
                                if (M) return void k.open();
                                V(), T(!F);
                            }
                        }),
                        W = (0, n.useMemo)(
                            () =>
                                z
                                    ? (0, i.jsx)(eM, { className: ay().plusPaywallButton, albumType: t.type })
                                    : f
                                      ? (0, i.jsx)(eS.D, {
                                            className: (0, ex.$)(e4().playControl, { [e4().playControl_withLogin]: E }),
                                            buttonVariant: 'default',
                                            iconSize: E ? P : 'xxl',
                                            size: E ? I : void 0,
                                            isPlaying: F,
                                            onClick: Y,
                                            variant: E ? 'default' : 'filled',
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                        })
                                      : (0, i.jsx)(eS.D, {
                                            className: e4().playControl,
                                            withRipple: !0,
                                            buttonVariant: 'default',
                                            radius: 'xxxl',
                                            size: 's',
                                            color: 'primary',
                                            iconSize: 'xxs',
                                            isPlaying: F,
                                            onClick: Y,
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                            children: (0, i.jsx)(u.A, { id: 'player-actions.listen' }),
                                        }),
                            [z, f, F, Y, t.isAvailable, t.type, E, P, I],
                        ),
                        $ = (0, n.useMemo)(
                            () =>
                                (0, i.jsx)('div', {
                                    className: ay().controlsBlock,
                                    children: (0, i.jsxs)('div', {
                                        className: e4().controlsContainer,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: e4().controls,
                                                'data-test-id': r.e8.pageHeader.NON_MUSIC_PAGE_HEADER_CONTROLS,
                                                children: [
                                                    (0, i.jsx)(ek.B, {
                                                        objectType: t.mainObjectType,
                                                        objectId: String(t.id),
                                                        objectPosX: 1,
                                                        objectPosY: 1,
                                                        objectsCount: 1,
                                                        mainObjectType: t.mainObjectType,
                                                        mainObjectId: String(t.id),
                                                        children: W,
                                                    }),
                                                    (0, i.jsx)(e$, { album: t, likeButtonAriaLabel: B, withLikeButton: !z, contextMenuChildren: l }),
                                                ],
                                            }),
                                            a && (0, i.jsx)('div', { className: e4().controls, children: a }),
                                        ],
                                    }),
                                }),
                            [W, t, B, z, a, l],
                        ),
                        G = (0, n.useMemo)(() => (0, i.jsx)('div', { className: ay().meta, children: (0, i.jsx)(e1, { album: t }) }), [t]);
                    return (0, i.jsx)(e2.k, {
                        ref: d,
                        headingVariant: 'h1',
                        className: s,
                        controls: $,
                        meta: G,
                        entityName: w,
                        entityNameIcon: H,
                        title: t.title,
                        cover: (0, i.jsx)(e7.I, {
                            coverVariant: 'square',
                            coverUri: t.coverUri,
                            isAvailable: R,
                            withPlusBadge: t.isAvailableOnlyForPlus,
                            onClick: U ? K : void 0,
                            'aria-label': U ? b({ id: 'slider.view-cover' }) : void 0,
                        }),
                        'aria-labelledby': o,
                        version: t.version,
                        onVersionClick: c,
                        disclaimerLabel: X,
                        showMobileLoginButton: S,
                        showMobileSubscriptionButton: O,
                    });
                }),
                aN = (0, n.forwardRef)((e, t) => (0, i.jsx)(ak, { forwardRef: t, ...e }));
            var aT = a(62134),
                aL = a(31266),
                aP = a(71670),
                aI = a(45180),
                aS = a(8946),
                aO = a(59830),
                aE = a.n(aO);
            let aM = (0, l.PA)(() => {
                    var e, t, a, l, r, c, m, v, x, A, g, j, C, y, k, T, L;
                    let P = (0, n.useRef)(0),
                        I = (0, n.useRef)(null),
                        S = (0, tn.w)(),
                        { album: O, experiments: E, sonataState: M, slides: B } = (0, _.g)(),
                        w = (null == (e = O.meta) ? void 0 : e.isAudiobook) ? N._Q.AUDIOBOOK : N._Q.PODCAST,
                        D = (null == (t = O.meta) ? void 0 : t.isAudiobook) ? eC.U.AUDIOBOOK : eC.U.PODCAST,
                        { from: R, utmLink: U } = (0, eN.f)({ pageId: w, blockId: D, contextType: eh.K.Album, contextId: O.id }),
                        { href: H } = (0, z.u)('/slides/podcast/:podcastId', { params: { podcastId: null != (L = O.id) ? L : '' } }),
                        X = (0, h.Z)(H),
                        F = (0, n.useId)(),
                        { formatMessage: V } = (0, es.A)(),
                        K = (0, s.useSearchParams)(),
                        Y = (0, aP.X)(),
                        W = E.checkExperiment(to.z.WebNextRewind2024, 'on') && (null == (a = O.meta) ? void 0 : a.isPodcast),
                        $ = (0, n.useMemo)(() => {
                            let e = K.get(f.K.ACTIVE_TAB),
                                t = tu.findIndex((t) => t === e);
                            return t >= 0 ? t : 0;
                        }, [K]),
                        G = (0, ao.zb)($),
                        [Q, q] = (0, n.useState)(tu[G.value]),
                        Z = tv({ album: O });
                    (0, n.useEffect)(
                        () => () => {
                            (P.current = 0), B.resetPodcast();
                        },
                        [O, B],
                    );
                    let J = (0, n.useMemo)(() => {
                            var e, t;
                            let a = W && B.podcastSlidesLoadingState === tb.G.RESOLVE && !!(null == (e = B.podcastItems) ? void 0 : e.length),
                                l = { '--action-button-color-background': (0, aA.W)(null == (t = O.meta) ? void 0 : t.averageColor) };
                            return a
                                ? (0, i.jsx)(b.$, {
                                      className: aE().rewindControl,
                                      style: l,
                                      withRipple: !1,
                                      withHover: !1,
                                      radius: 'xxxl',
                                      size: 's',
                                      color: 'primary',
                                      onClick: X,
                                      variant: 'default',
                                      role: 'link',
                                      children: (0, i.jsx)(p.HL, { variant: 'span', lineClamp: 1, children: (0, i.jsx)(u.A, { id: 'rewind.button-title' }) }),
                                  })
                                : null;
                        }, [null == (l = O.meta) ? void 0 : l.averageColor, W, X, null == (r = B.podcastItems) ? void 0 : r.length, B.podcastSlidesLoadingState]),
                        ee = (0, n.useMemo)(() => {
                            var e, t;
                            return (null == (e = O.meta) ? void 0 : e.isFairyTale)
                                ? { about: V({ id: 'non-music.fairytale-tab-about' }), 'track-list': V({ id: 'non-music.audiobook-tab-tracks' }) }
                                : (null == (t = O.meta) ? void 0 : t.isAudiobook)
                                  ? { about: V({ id: 'non-music.audiobook-tab-about' }), 'track-list': V({ id: 'non-music.audiobook-tab-tracks' }) }
                                  : { about: V({ id: 'podcast.tab-about' }), 'track-list': V({ id: 'podcast.tab-tracks' }, { value: O.tracks.length }) };
                        }, [null == (c = O.meta) ? void 0 : c.isAudiobook, null == (m = O.meta) ? void 0 : m.isFairyTale, O.tracks.length, V]),
                        ea = (0, n.useMemo)(
                            () => (e) => {
                                var t;
                                if (!G.onTabChange || e === G.value) return;
                                G.onTabChange(e);
                                let a = null != (t = tu[e]) ? t : tc.ABOUT;
                                q(a);
                                let i = (0, aL.b)(f.K.ACTIVE_TAB, a);
                                i && Y(i);
                            },
                            [G, Y],
                        ),
                        ei = (e, t) =>
                            (0, i.jsxs)('div', {
                                className: aE().infoBlock,
                                children: [
                                    (0, i.jsx)(p.HL, { variant: 'span', type: 'entity', size: 'm', className: aE().infoTitle, children: e }),
                                    (0, i.jsx)(p.HL, { variant: 'span', type: 'entity', size: 'm', children: t }),
                                ],
                            }),
                        el = ((e) => {
                            let { formatMessage: t } = (0, es.A)(),
                                { minutes: a, hours: i } = et(e),
                                l = '';
                            return (
                                i > 0 && (l += t({ id: 'time.hours' }, { hours: i })),
                                a > 0 && ((l += l.length > 0 ? ' ' : ''), (l += t({ id: 'time.minutes-left' }, { minutes: a }))),
                                l
                            );
                        })((null == (v = O.meta) ? void 0 : v.durationSec) || 0),
                        en = (0, n.useMemo)(() => {
                            var e, t, a, l, s, n, o, r, d, c, u, m, b, v, x;
                            let h = Number(null == (e = O.labels) ? void 0 : e.length) > 1 ? V({ id: 'podcast.publishers-title' }) : V({ id: 'podcast.publisher-title' }),
                                _ = null == (t = O.labels) ? void 0 : t.map((e) => e.name).join(', '),
                                A = V({ id: 'podcast.age-limit' }),
                                g =
                                    Number(null == (l = O.meta) || null == (a = l.artists) ? void 0 : a.length) > 1
                                        ? V({ id: 'non-music.audiobook-artists' })
                                        : V({ id: 'non-music.audiobook-artist' }),
                                j = null == (n = O.meta) || null == (s = n.artists) ? void 0 : s.map((e) => e.name).join(', '),
                                f =
                                    (null == (r = O.meta) || null == (o = r.artists) ? void 0 : o.length) ||
                                    (null == (d = O.meta) ? void 0 : d.durationSec) ||
                                    (null == (c = O.labels) ? void 0 : c.length) ||
                                    O.isExplicit,
                                C = j && ei(''.concat(g, ':'), String(j)),
                                y = (null == (u = O.meta) ? void 0 : u.durationSec) && ei(''.concat(V({ id: 'time.duration' }), ':'), el),
                                k = _ && ei(''.concat(h, ':'), String(_)),
                                N = ei(''.concat(A, ':'), '18+'),
                                T = O.hasLabel ? (0, i.jsx)(t4, { album: O, size: 'm', weight: 'medium', className: aE().label }) : k;
                            return (0, i.jsx)(ao.Kp, {
                                name: 0,
                                value: G.value,
                                elementId: F,
                                children: (0, i.jsxs)('div', {
                                    className: aE().contentAbout,
                                    children: [
                                        O.description &&
                                            !!(null == (m = O.description) ? void 0 : m.length) &&
                                            (0, i.jsx)(p.HL, {
                                                variant: 'div',
                                                type: 'entity',
                                                size: 'm',
                                                className: ep().text,
                                                children: (0, i.jsx)('span', { dangerouslySetInnerHTML: { __html: (0, ec.sanitizeDOM)(O.description) } }),
                                            }),
                                        f &&
                                            (0, i.jsxs)('div', {
                                                className: ep().text,
                                                children: [
                                                    !!(null == (v = O.meta) || null == (b = v.artists) ? void 0 : b.length) && C,
                                                    (null == (x = O.meta) ? void 0 : x.durationSec) && y,
                                                    T,
                                                    O.isExplicit && N,
                                                ],
                                            }),
                                    ],
                                }),
                            });
                        }, [O, V, el, G.value, F]),
                        eo = (0, d.L)(() =>
                            O.isLoading || !O.meta || O.isRejected
                                ? (0, i.jsx)(eg.c, { className: ep().header, isActive: !0 })
                                : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(aN, {
                                              album: O.meta,
                                              actionButton: J,
                                              className: ep().header,
                                              contextMenuChildren: (0, i.jsx)(ai, { albumId: O.meta.id, albumTitle: O.meta.title, albumCoverUri: O.meta.coverUri }),
                                          }),
                                          (0, i.jsx)(aS.wI, {
                                              className: aE().tabCarousel,
                                              ...G,
                                              onTabChange: ea,
                                              ref: I,
                                              children: tu.map((e, t) => (0, i.jsx)(aI.o, { className: aE().tab, title: ee[e], value: t }, e)),
                                          }),
                                          en,
                                      ],
                                  }),
                        );
                    (0, n.useEffect)(() => {
                        O.isResolved && (O.loadLastEpisodes(), O.getRelatedContent());
                    }, [O, O.isResolved, O.loadLastEpisodes, O.getRelatedContent]);
                    let er = Q === tc.ABOUT && (null == (x = O.meta) ? void 0 : x.isPodcast) && O.lastEpisodes.length > 0,
                        ed = Q === tc.ABOUT && O.relatedContent && O.relatedContent.items && O.relatedContent.items.length > 0,
                        eu = tk({
                            element: (e, t) => {
                                if (e.data && e.type !== ti.r.TEXT)
                                    return (0, i.jsx)(ek.B, {
                                        objectType: o.ky.Track,
                                        objectId: String(e.data.id),
                                        objectPosX: 1,
                                        objectPosY: t + 1,
                                        objectsCount: O.items.length,
                                        children: (0, i.jsx)(ar.K, {
                                            track: e.data,
                                            viewType: aT.D.ALBUM,
                                            position: e.position,
                                            playContextParams: S(t, {
                                                contextData: { type: eh.K.Album, meta: O.contextMeta, from: R, utmLink: U },
                                                queueParams: { index: e.positionInContext, entityId: e.data.id },
                                                loadContextMeta: !0,
                                                entitiesData: M.unloadedEntitiesDataFromModels,
                                            }),
                                        }),
                                    });
                            },
                            isNonMusic: !0,
                            album: O,
                        }),
                        em = Q === tc.ABOUT ? 0 : O.items.length || 10,
                        eb = (0, d.L)(() => {
                            if (Q === tc.TRACKS) {
                                var e, t, a;
                                return (null == (e = O.meta) ? void 0 : e.isAudiobook)
                                    ? V({ id: 'non-music.audiobook-list' }, { albumName: (null == (a = O.meta) ? void 0 : a.title) || '' })
                                    : V({ id: 'podcast.episodes-list' }, { albumName: (null == (t = O.meta) ? void 0 : t.title) || '' });
                            }
                        }),
                        ev = (0, d.L)(() => {
                            var e;
                            return Q !== tc.TRACKS
                                ? null
                                : (0, i.jsx)(tl.F, {
                                      blockType: o.LA.Episodes,
                                      blockId: o.LA.Episodes,
                                      blockPosX: 1,
                                      blockPosY: 2,
                                      objectsCount: em,
                                      mainObjectId: String(null == (e = O.meta) ? void 0 : e.id),
                                      mainObjectType: o.ky.Album,
                                      children: (0, i.jsx)(t1, { count: em, getDataByRange: Z, itemContentCallback: eu, role: 'tabpanel', ariaLabel: eb }),
                                  });
                        }),
                        ex = W && B.podcastSlidesLoadingState === tb.G.IDLE;
                    return (
                        'number' == typeof O.id && ex && (0, n.use)(B.getPodcastSlides({ podcastId: O.id })),
                        (0, i.jsxs)(ts.h, {
                            tabId: null != Q ? Q : tc.ABOUT,
                            tabPos: G.value + 1,
                            isTabSelectedByDefault: !1,
                            children: [
                                (0, i.jsx)(tl.F, {
                                    blockType: o.LA.Header,
                                    blockId: o.LA.Header,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    mainObjectId: String(null == (A = O.meta) ? void 0 : A.id),
                                    mainObjectType: o.ky.Podcast,
                                    objectsCount: 1,
                                    children: eo,
                                }),
                                ev,
                                (0, i.jsxs)('div', {
                                    className: ep().footerContainer,
                                    children: [
                                        er &&
                                            (0, i.jsx)(tl.F, {
                                                blockType: o.LA.LatestEpisodes,
                                                blockId: o.LA.LatestEpisodes,
                                                blockPosX: 1,
                                                blockPosY: 2,
                                                objectsCount: O.lastEpisodes.length,
                                                mainObjectId: String(null == (g = O.meta) ? void 0 : g.id),
                                                mainObjectType: null == (j = O.meta) ? void 0 : j.mainObjectType,
                                                children: (0, i.jsx)(am, { className: aE().lastEpisodes }),
                                            }),
                                        ed &&
                                            (0, i.jsx)(tl.F, {
                                                blockType: o.LA.Podcasts,
                                                blockId: o.LA.Podcasts,
                                                blockPosX: 1,
                                                blockPosY: 3,
                                                objectsCount: null == (y = O.relatedContent) || null == (C = y.items) ? void 0 : C.length,
                                                mainObjectId: String(null == (k = O.meta) ? void 0 : k.id),
                                                mainObjectType: null == (T = O.meta) ? void 0 : T.mainObjectType,
                                                children: (0, i.jsx)(a_, { isShimmerVisible: O.isRelatedContentLoading, isShimmerActive: !0 }),
                                            }),
                                        (0, i.jsx)(td.A, { children: (0, i.jsx)(tr.w, { className: ep().footer }) }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                aB = (0, l.PA)((e) => {
                    var t, a, l, u, m, b, v, p, x, h, A, g;
                    let { albumId: N, trackId: I, preloadedAlbum: O, preloadedCpa: B, preloadedTrack: V } = e,
                        { contentScrollRef: K, setContentScrollRef: Y } = (0, D.g)(),
                        W = (0, s.useSearchParams)(),
                        $ = ((e) => {
                            let { searchParams: t = {} } = e;
                            return 'bandlink' === t[f.K.UTM_SOURCE] || !!t[f.K.CLID] || !!t[f.K.REF_ID];
                        })({ searchParams: Object.fromEntries(W.entries()) }),
                        { user: G, album: Q, disclaimerModalState: q, track: Z, sonataState: J, albumCPA: ee } = (0, _.g)(),
                        { checkIsValidClid: et, setClidToQuery: ea, deleteClidFromQuery: ei } = (0, M.I)(),
                        ec = (0, S.y)(null == (t = Q.meta) ? void 0 : t.averageColor),
                        { headerStyle: eu } = (0, C.Q)(ec),
                        em = (0, L.l)({ mainObjectType: null != (h = null == (a = Q.meta) ? void 0 : a.mainObjectType) ? h : o.ky.Album }),
                        { deprecationUrl: ev, shouldRedirect: ex } = ((e) => {
                            let { albumId: t, deprecationTargetAlbumId: a, trackId: i, realId: l, searchParams: s } = e,
                                n = Number(t),
                                o = new URLSearchParams(s);
                            o.delete('albumId'), o.delete('trackId');
                            let r = Object.fromEntries(o);
                            if ('number' == typeof a && a !== n) {
                                if (i) {
                                    let { href: e } = (0, z.u)('/album/:albumId/track/:trackId', { params: { albumId: a, trackId: i }, query: r });
                                    return { deprecationUrl: e, shouldRedirect: !0 };
                                }
                                let { href: e } = (0, z.u)('/album/:albumId', { params: { albumId: a }, query: r });
                                return { deprecationUrl: e, shouldRedirect: !0 };
                            }
                            if (i && l && l !== i) {
                                let { href: e } = (0, z.u)('/album/:albumId/track/:trackId', { params: { albumId: t, trackId: l }, query: r });
                                return { deprecationUrl: e, shouldRedirect: !0 };
                            }
                            return { deprecationUrl: '', shouldRedirect: !1 };
                        })({
                            albumId: N,
                            deprecationTargetAlbumId: Q.deprecationTargetAlbumId,
                            trackId: I,
                            realId: (null == (l = Z.meta) ? void 0 : l.id) === I ? (null == (u = Z.meta) ? void 0 : u.realId) : void 0,
                            searchParams: W,
                        }),
                        eh = (0, k.c)({ album: Q.meta, shouldHistoryBack: !0 }),
                        e_ = !!(null == (m = Q.meta) ? void 0 : m.isNonMusic),
                        eA = !!(I && w(V));
                    (0, T.A)(),
                        ((e) => {
                            var t;
                            let { albumId: a, trackId: i, isNonMusic: l } = e,
                                { setDeeplink: s } = null != (t = (0, ed.P)()) ? t : {};
                            (0, n.useEffect)(() => {
                                if (i) {
                                    let e = l ? void 0 : { playTrack: i, openPlayer: !0, lyricsMode: !0 },
                                        { href: t } = (0, z.u)('/album/:albumId/track/:trackId', { params: { albumId: a, trackId: i }, query: e });
                                    null == s || s(t);
                                } else {
                                    let { href: e } = (0, z.u)('/album/:albumId', { params: { albumId: a } });
                                    null == s || s(e);
                                }
                                return () => {
                                    null == s || s(null);
                                };
                            }, [a, l, s, i]);
                        })({ albumId: N, trackId: I, isNonMusic: e_ }),
                        (0, n.useEffect)(() => {
                            var e;
                            (null == (e = Q.meta) ? void 0 : e.isUnsafeLegal) && eh();
                        }, [null == (b = Q.meta) ? void 0 : b.isUnsafeLegal, eh]),
                        (0, n.useLayoutEffect)(
                            () => (
                                I && N && !w(V) && Z.open({ trackId: I, albumId: Number(N) }),
                                () => {
                                    Z.reset();
                                }
                            ),
                            [N, V, I, Z],
                        ),
                        (0, n.useEffect)(() => {
                            var e;
                            eA && (null == (e = Z.meta) ? void 0 : e.resolveAllDisclaimers) && Z.meta.resolveAllDisclaimers();
                        }, [eA, Z.meta]),
                        (0, n.useEffect)(() => {
                            et(ee.cpa, Number(N)) || ei();
                        }, [et, N, ee.cpa, ei]),
                        (0, n.useEffect)(
                            () => (
                                Q.id && Q.id !== Number(N) && (Q.reset(J), ei()),
                                () => {
                                    Q.reset(J), ei();
                                }
                            ),
                            [Q, N, J, ei, ee],
                        ),
                        (0, R.J)(Q.isResolved),
                        ((e, t, a, i, l) => {
                            var s, o, r, d;
                            (0, n.useEffect)(() => {
                                var s, n, o, r;
                                let d = t && a,
                                    c = null == i || null == (s = i.resolvedModalData) ? void 0 : s.title,
                                    u = null == e || null == (o = e.meta) || null == (n = o.resolvedModalData) ? void 0 : n.title;
                                if (a && (l || (null == i ? void 0 : i.isLegalRejected))) {
                                    if (!c) return;
                                    (0, F.j)({ title: c });
                                    return;
                                }
                                if (null == e || null == (r = e.meta) ? void 0 : r.isLegalRejected) {
                                    if (!u) return;
                                    (0, F.j)({ title: u });
                                    return;
                                }
                                if (!(null == e ? void 0 : e.meta) || e.isLoading || d) return;
                                let m = (0, X.f)(e.meta);
                                t ||
                                    el(m, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                        (0, F.j)(e);
                                    });
                            }, [
                                null == e ? void 0 : e.meta,
                                null == e ? void 0 : e.isLoading,
                                null == e || null == (s = e.meta) ? void 0 : s.isLegalRejected,
                                null == e || null == (r = e.meta) || null == (o = r.resolvedModalData) ? void 0 : o.title,
                                l,
                                a,
                                null == i ? void 0 : i.isLegalRejected,
                                null == i || null == (d = i.resolvedModalData) ? void 0 : d.title,
                                t,
                            ]);
                        })(Q, Z.isOpened, I, Z.meta, eA),
                        (0, n.useEffect)(
                            () => (
                                em(!0),
                                () => {
                                    em(!1);
                                }
                            ),
                            [N, em],
                        );
                    let eg = (0, d.L)(() => (e_ ? (0, i.jsx)(aM, {}) : (0, i.jsx)(an, {}))),
                        ej = [];
                    N &&
                        Q.isNeededToLoad &&
                        (ej.push(Q.getData({ albumId: Number(N), resumeStream: !1, preloadedAlbum: O, sonataState: J }), Q.getDonations({ albumId: Number(N) })),
                        ($ || B) && ej.push(ee.getCpa({ albumId: Number(N), preloadedCpa: B }))),
                        ej.length && (0, n.use)(Promise.allSettled(ej)),
                        (0, n.useEffect)(() => {
                            ee.cpa && Q.id && ea(ee.cpa, Q.id);
                        }, [ee.cpa, Q.id, ea]),
                        Q.isNotFound && (0, s.notFound)(),
                        ex && (0, s.redirect)(ev),
                        ((e) => {
                            let { album: t } = e,
                                a = (0, n.useRef)(0),
                                { notify: l } = (0, eo.l)(),
                                { formatMessage: s } = (0, es.A)();
                            (0, n.useMemo)(
                                () => () => {
                                    if (!t.isNotFound && (t.isRejected || (!t.meta && !t.isLoading))) {
                                        var e;
                                        if (!a || a.current > 0) return;
                                        let n = (null == (e = t.meta) ? void 0 : e.isPodcast)
                                            ? s({ id: 'podcast-errors.error-during-loading-podcast' })
                                            : s({ id: 'album-errors.error-during-loading-album' });
                                        l((0, i.jsx)(er.h, { error: n }), { containerId: en.u.ERROR }), a.current++;
                                    }
                                },
                                [t.isLoading, t.isNotFound, t.isRejected, t.meta, s, l],
                            )();
                        })({ album: Q });
                    let ef = eA
                        ? null != (A = null == (v = Z.meta) ? void 0 : v.resolvedModalData)
                            ? A
                            : null
                        : null != (g = null == (p = Q.meta) ? void 0 : p.resolvedModalData)
                          ? g
                          : null;
                    return Q.isCacheNotFound
                        ? (0, i.jsx)(j, {})
                        : (null == (x = Q.meta) ? void 0 : x.isLegalRejected) || eA
                          ? (0, i.jsx)(U.M, { modalState: q, data: ef })
                          : (0, i.jsx)(E, {
                                pageAlbumId: Number(N),
                                children: (0, i.jsx)(P.j, {
                                    children: (0, i.jsxs)(y.h, {
                                        scrollElement: K,
                                        children: [
                                            (0, i.jsx)(H.Y, {}),
                                            (0, i.jsxs)(c.C, {
                                                scrollableContainerRef: Y,
                                                className: ep().root,
                                                containerClassName: ep().content,
                                                scrollContentClassName: ep().scrollContent,
                                                'data-test-id': e_ ? r.Xk.album.NON_MUSIC_ALBUM_PAGE : r.Xk.album.ALBUM_PAGE,
                                                children: [
                                                    (0, i.jsx)('div', { className: ep().averageColorBackground, style: eu }),
                                                    eg,
                                                    (0, i.jsx)(eb, { user: G, album: Q }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            });
                }),
                aw = (0, l.PA)((e) => (0, i.jsx)(I.n, { pageId: N._Q.ALBUM, pageEntityId: e.albumId, children: (0, i.jsx)(aB, { ...e }) }));
        },
        71670: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => l });
            var i = a(55178);
            let l = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        72440: (e) => {
            e.exports = {
                carouselBlocks: 'AlbumContent_carouselBlocks__bOsTV',
                carouselBlock: 'AlbumContent_carouselBlock__QhSlm',
                carouselBlockHeader: 'AlbumContent_carouselBlockHeader__Liibv',
                carouselContainer: 'AlbumContent_carouselContainer__Y1M_e',
                label: 'AlbumContent_label__2jz4j',
            };
        },
        73155: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => l });
            var i = a(80451);
            let l = (e) => {
                if (!e) return null;
                let { h: t, s: a, l } = (0, i.hexToHsl)(e),
                    s = Math.min(70, Math.max(10, l + 10));
                return 'hsl('.concat(t, 'deg, ').concat(a, '%, ').concat(s, '%)');
            };
        },
        74381: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => d });
            var i = a(32290),
                l = a(63618),
                s = a(79856),
                n = a(90011),
                o = a.n(n);
            let r = (e) => {
                    let { isActive: t } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(o().shimmer, o().donation),
                        children: [
                            (0, i.jsx)(s.W, { isActive: t, radius: 'round', className: o().shimmerCover }),
                            (0, i.jsxs)('div', {
                                className: o().shimmerContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: o().shimmerText,
                                        children: [
                                            (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: o().shimmerArtist }),
                                            (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: o().shimmerGoal }),
                                        ],
                                    }),
                                    (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: o().shimmerButton }),
                                ],
                            }),
                        ],
                    });
                },
                d = (e) => Array.from({ length: 10 }, (t, a) => (0, i.jsx)(r, { isActive: e }, a));
        },
        74523: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            let i = (e, t) => {
                let [a, i] = e.split('?'),
                    l = new URLSearchParams(i || '');
                for (let [e, a] of new URLSearchParams(t).entries()) l.set(e, a);
                let s = l.toString();
                return ''.concat(a).concat(s ? '?'.concat(s) : '');
            };
        },
        76768: (e) => {
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
        77435: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => u });
            var i = a(32290),
                l = a(55178),
                s = a(16172),
                n = a(95481),
                o = a(26042),
                r = a(98148),
                d = a(24170);
            let c = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: c,
                            title: u,
                            description: m,
                            albums: b,
                            className: v,
                            containerClassName: p,
                            headerClassName: x,
                            viewAllActionLink: h,
                            headingRef: _,
                            headingVariant: A,
                            shouldSendAnalyticsOnLoaded: g,
                            ...j
                        } = e,
                        f = (0, n.f)();
                    return (
                        (0, l.useEffect)(() => {
                            g && f();
                        }, [f, g]),
                        (0, i.jsx)(r.O, {
                            isShimmerVisible: a,
                            isShimmerActive: c,
                            className: v,
                            headerClassName: x,
                            containerClassName: p,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: h,
                            headingRef: _,
                            headingVariant: A,
                            ...j,
                            children:
                                null == b
                                    ? void 0
                                    : b.map((e, t) =>
                                          (0, i.jsx)(
                                              o.B,
                                              {
                                                  objectType: s.ky.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: b.length,
                                                  children: (0, i.jsx)(d.a, {
                                                      album: e,
                                                      contentLinesCount: 3,
                                                      withAddition: !e.isNonMusic,
                                                      withLikesCount: e.isNonMusic,
                                                  }),
                                              },
                                              e.id,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, l.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
        },
        78166: (e) => {
            e.exports = {
                root_hoverable: 'PageHeaderCover_root_hoverable__WF_BH',
                coverImage: 'PageHeaderCover_coverImage__i0wBv',
                coverImage_hoverable: 'PageHeaderCover_coverImage_hoverable__9XZK7',
                coverButton: 'PageHeaderCover_coverButton__3zeub',
                coverButton_hoverable: 'PageHeaderCover_coverButton_hoverable__hS1Gq',
                plusBadge: 'PageHeaderCover_plusBadge__O09t4',
            };
        },
        79248: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => d });
            var i = a(77307),
                l = a(55178),
                s = a(91027),
                n = a(83920),
                o = a(57594);
            let r = { width: 400, height: 400 },
                d = (e) => {
                    let { count: t, getEstimateSize: a, gap: d, containerRef: c, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, o.g)(),
                        { contentScrollRef: b } = (0, n.g)(),
                        v = (0, l.useRef)(new Map()),
                        p = (0, l.useRef)(void 0),
                        x = {
                            count: t,
                            gap: d,
                            estimateSize: (e) => {
                                let t = v.current.get(String(e));
                                return null != t ? t : a(e);
                            },
                            overscan: u,
                            initialRect: r,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, a) => {
                                if (!t) return 0;
                                let i = t.getBoundingClientRect().top;
                                return e && 1 ? i + window.scrollY : !e && a ? i + a.scrollTop : 0;
                            })(m, c, b),
                        },
                        h = (0, i.XW)(x),
                        _ = (0, i.Te)({ ...x, getScrollElement: () => b, initialOffset: null == b ? void 0 : b.scrollTop }),
                        A = m ? h : _,
                        g = (0, s.c)(() => {
                            A.measure();
                        });
                    return (
                        (0, l.useEffect)(() => {
                            p.current ||
                                (p.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    e.forEach((e) => {
                                        let a = e.target.getAttribute('data-index');
                                        if (e.target && a) {
                                            let i = e.contentRect.height;
                                            i && i !== v.current.get(a) && (v.current.set(a, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && g();
                                }));
                        }, [g]),
                        { virtualizer: A, resizeObserver: p.current }
                    );
                };
        },
        79897: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => _ });
            var i = a(32290),
                l = a(63618),
                s = a(55178),
                n = a(60900),
                o = a(39407),
                r = a(80451),
                d = a(63423),
                c = a(82586),
                u = a(86269),
                m = a(71926),
                b = a(11323),
                v = a(61258),
                p = a(90011),
                x = a.n(p);
            let h = (e) => {
                    let { artist: t, goal: a, onNavigateToArtist: s, onNavigateToDonation: p, forwardRef: h, ..._ } = e,
                        { formatMessage: A } = (0, n.A)();
                    return (0, i.jsxs)('div', {
                        ref: h,
                        className: (0, l.$)(x().root, x().donation),
                        ...(0, r.getDataAttrFromProps)(_),
                        children: [
                            (0, i.jsx)(u.t, {
                                radius: 'round',
                                className: x().cover,
                                children: (0, i.jsx)(v.N, {
                                    href: t.url,
                                    onClick: s,
                                    'aria-label': A({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                                    children: (0, i.jsx)(b.B, {
                                        className: x().image,
                                        src: t.coverUri,
                                        isAvailable: t.isAvailable,
                                        size: 200,
                                        fit: 'cover',
                                        withAvatarReplace: !0,
                                        'aria-hidden': !0,
                                    }),
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: x().container,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: x().text,
                                        children: [
                                            (0, i.jsx)(m.DZ, { variant: 'span', size: 'xs', weight: 'bold', lineClamp: 2, className: x().artist, children: t.name }),
                                            (0, i.jsx)(m.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                className: x().goal,
                                                children: a,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(d.$, {
                                        role: 'link',
                                        size: 's',
                                        color: 'secondary',
                                        onClick: p,
                                        className: x().label,
                                        withRipple: !1,
                                        children: [
                                            (0, i.jsx)(c.I, { variant: 'ruble', size: 'xxxs' }),
                                            (0, i.jsx)(m.HL, {
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                variant: 'span',
                                                children: (0, i.jsx)(o.A, { id: 'donation.support-button' }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, i.jsx)(h, { forwardRef: t, ...e }));
        },
        80097: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => b });
            var i = a(32290),
                l = a(63618),
                s = a(55178),
                n = a(80451),
                o = a(75245),
                r = a(19620),
                d = a(49522),
                c = a(98307),
                u = a.n(c);
            let m = (e) => {
                    let {
                            className: t,
                            forwardRef: a,
                            headerClassName: c,
                            containerClassName: m,
                            headingVariant: b,
                            title: v,
                            viewAllActionLink: p,
                            description: x,
                            children: h,
                            ..._
                        } = e,
                        A = (0, s.useId)(),
                        g = (0, s.useRef)(null);
                    return (0, i.jsxs)('section', {
                        ref: a,
                        className: (0, l.$)(u().root, t),
                        ...(0, n.getDataAttrFromProps)(_),
                        children: [
                            (0, i.jsx)(r.T, {
                                className: c,
                                labeledForId: A,
                                title: v,
                                description: x,
                                viewAllActionLink: p,
                                controls: (0, i.jsx)(d.X, { className: u().controls, carouselRef: g }),
                                headingVariant: b,
                                withDescription: !!x,
                            }),
                            (0, i.jsx)(o.F, { ref: g, itemClassName: (0, l.$)(u().item, u().important), className: m, 'aria-labelledby': A, children: h }),
                        ],
                    });
                },
                b = (0, s.forwardRef)((e, t) => (0, i.jsx)(m, { forwardRef: t, ...e }));
        },
        86400: (e) => {
            e.exports = { root: 'LastEpisodes_root__4JPKj', blockHeader: 'LastEpisodes_blockHeader__se7bd', shimmerItem: 'LastEpisodes_shimmerItem__Iirx5' };
        },
        87151: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => l });
            var i = a(65024);
            let l = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, i.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        90011: (e) => {
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
        90048: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => s });
            var i = a(32290),
                l = a(80451);
            let s = (e) => {
                let { value: t } = e,
                    a = { '@context': 'https://schema.org', ...t };
                return (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: (0, l.stringifyJSONSafely)(a) } });
            };
        },
        90840: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => c });
            var i = a(21916),
                l = a(55178),
                s = a(14257),
                n = a(50),
                o = a(74523),
                r = a(97201);
            let d = { [s.S.Light]: 'yandex_music', [s.S.Dark]: 'yandex_music_dark' },
                c = () => {
                    let e = (0, i.useSearchParams)(),
                        { theme: t } = (0, n.W)();
                    return (0, l.useCallback)(
                        (a) => {
                            if (!t) return a;
                            let i = new URLSearchParams(e);
                            i.set('wl', d[t]);
                            let l = e.get(r.K.UTM_CAMPAIGN);
                            return l && i.set('meta', 'campaignid_'.concat(l)), (0, o.C)(a, i);
                        },
                        [t, e],
                    );
                };
        },
        91092: (e) => {
            e.exports = {
                menuControl: 'PageHeaderAlbumControls_menuControl__wlqyr',
                likeControl: 'PageHeaderAlbumControls_likeControl__eohAO',
                pinOrDonationControl: 'PageHeaderAlbumControls_pinOrDonationControl__3aFUW',
                trailerControl: 'PageHeaderAlbumControls_trailerControl___HcW0',
            };
        },
        92083: (e) => {
            e.exports = { popover: 'AlbumDonationMenu_popover__Fswfa' };
        },
        94805: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => n });
            var i = a(80451),
                l = a(14257),
                s = a(50);
            let n = (e) => {
                let { theme: t } = (0, s.W)();
                if (e) {
                    let { r: a, g: s, b: n } = (0, i.hexToRgb)(e),
                        o = t === l.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(a, ', ').concat(s, ', ').concat(n, ', ').concat(o, ')');
                }
            };
        },
        96151: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { Q: () => i }),
                (function (e) {
                    (e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic');
                })(i || (i = {}));
        },
        96434: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => i });
            let i = (e) => {
                var t;
                if (null == e ? void 0 : e.isForeignAgent) return null == (t = e.resolvedForeignAgentData) ? void 0 : t.title;
            };
        },
        97404: (e) => {
            e.exports = { root: 'PlusPaywallButton_root__ftsxl', title: 'PlusPaywallButton_title__8PpX0', subtitle: 'PlusPaywallButton_subtitle__brC59' };
        },
        98252: (e) => {
            e.exports = { root: 'AlbumDonationMenuItem_root__Ajw_w', cover: 'AlbumDonationMenuItem_cover__Gg8_a', image: 'AlbumDonationMenuItem_image__AI5zU' };
        },
        98307: (e) => {
            e.exports = {
                root: 'DonationCarousel_root__Uejjw',
                controls: 'DonationCarousel_controls__anVvP',
                item: 'DonationCarousel_item__89_B6',
                important: 'DonationCarousel_important__Y52Es',
            };
        },
        98508: (e) => {
            e.exports = {
                meta: 'PageHeaderAlbumMeta_meta__zsMI8',
                artistCover: 'PageHeaderAlbumMeta_artistCover__L3jJ0',
                artistLabel: 'PageHeaderAlbumMeta_artistLabel__2WZSM',
                year: 'PageHeaderAlbumMeta_year__2X3NO',
                artists: 'PageHeaderAlbumMeta_artists__Nfdob',
                artistsSpoiler: 'PageHeaderAlbumMeta_artistsSpoiler__VOkfE',
                artistLink: 'PageHeaderAlbumMeta_artistLink__eTSrZ',
                year_dot: 'PageHeaderAlbumMeta_year_dot__TrSFr',
            };
        },
    },
]);
