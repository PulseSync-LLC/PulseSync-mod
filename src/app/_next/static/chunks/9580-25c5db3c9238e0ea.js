(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9580],
    {
        3125: (e) => {
            e.exports = { popover: 'AlbumDonationMenu_popover__Fswfa' };
        },
        3685: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => l });
            var i = a(53548);
            let l = (e, t) => ({
                topColorStyle: (0, i.useMemo)(() => {
                    if (void 0 === t) return;
                    let a = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : a, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, i.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        5925: (e) => {
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
        6668: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => s });
            var i = a(53548),
                l = a(29993);
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
        7628: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => b });
            var i = a(88800),
                l = a(88969),
                s = a(58390),
                n = a(17392),
                r = a(29993),
                o = a(96817),
                d = a(29504),
                c = a(99890),
                u = a(4086),
                m = a(41928);
            let b = (e) => {
                let { size: t = 'm', variant: a = 'default', color: b = 'primary', withRipple: p = !0, buttonText: v, isBlock: h, key: x, className: _ } = e,
                    j = (0, s.useRouter)(),
                    g = (0, m.N)().get(u.QG),
                    y = (0, r.c)(() => {
                        g.authorizationUrl && ((0, c.uV)({ stage: 'attempt-start', trigger: 'user' }), j.push(g.authorizationUrl));
                    });
                return (0, i.jsx)(
                    o.$,
                    {
                        onClick: y,
                        className: _,
                        isBlock: h,
                        color: b,
                        variant: a,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: v || (0, i.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
                );
            };
        },
        10270: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => d });
            var i = a(56949),
                l = a(53548),
                s = a(29993),
                n = a(44230),
                r = a(72288);
            let o = { width: 400, height: 400 },
                d = (e) => {
                    let { count: t, getEstimateSize: a, gap: d, containerRef: c, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, r.g)(),
                        { contentScrollRef: b } = (0, n.g)(),
                        p = (0, l.useRef)(new Map()),
                        v = (0, l.useRef)(void 0),
                        h = {
                            count: t,
                            gap: d,
                            estimateSize: (e) => {
                                let t = p.current.get(String(e));
                                return null != t ? t : a(e);
                            },
                            overscan: u,
                            initialRect: o,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, a) => {
                                if (!t) return 0;
                                let i = t.getBoundingClientRect().top;
                                return e && 1 ? i + window.scrollY : !e && a ? i + a.scrollTop : 0;
                            })(m, c, b),
                        },
                        x = (0, i.XW)(h),
                        _ = (0, i.Te)({ ...h, getScrollElement: () => b, initialOffset: null == b ? void 0 : b.scrollTop }),
                        j = m ? x : _,
                        g = (0, s.c)(() => {
                            j.measure();
                        });
                    return (
                        (0, l.useEffect)(() => {
                            v.current ||
                                (v.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let a = e.target.getAttribute('data-index');
                                        if (e.target && a) {
                                            let i = e.contentRect.height;
                                            i && i !== p.current.get(a) && (p.current.set(a, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && g());
                                }));
                        }, [g]),
                        { virtualizer: j, resizeObserver: v.current }
                    );
                };
        },
        10325: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => l });
            var i = a(43522);
            let l = (e) => {
                var t, a;
                return null != (a = null == (t = (0, i.j)()) ? void 0 : t.get(e)) ? a : null;
            };
        },
        12533: (e, t, a) => {
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
        13012: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => l });
            var i = a(19049);
            function l(e, t) {
                var a;
                return (0, i.Y)(e, null != (a = null == t ? void 0 : t.maxLength) ? a : 48, !!(null == t ? void 0 : t.truncateByLastSpace));
            }
        },
        14347: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => v });
            var i = a(88800),
                l = a(84961),
                s = a(53548),
                n = a(17392),
                r = a(39079),
                o = a(98644),
                d = a(73805),
                c = a(15232),
                u = a(99479),
                m = a(56712),
                b = a(33133),
                p = a.n(b);
            let v = (0, l.PA)((e) => {
                let { track: t, albumArtists: a, position: l, playContextParams: b, withLightning: v } = e,
                    h = (0, r.D)({ playContextParams: b, entityId: t.entityId }),
                    x = (0, s.useCallback)((e) => (0, i.jsx)(u.G, { track: t, position: l, className: p().playButtonCell, ...e }), [t, l]);
                return (0, i.jsx)(m.C, {
                    track: t,
                    withLightning: v,
                    meta: (0, i.jsx)(c.j, { variant: o.X.ALBUM, albumArtists: a, track: t, withSavingQueryParams: !0 }),
                    playButtonCellRender: x,
                    controls: (0, i.jsx)(d.Q, { withLightning: v, track: t, className: p().controlsBarCell, utmLink: b.contextData.utmLink }),
                    ...h,
                    'data-test-id': n.Kq.track.TRACK_ALBUM,
                });
            });
        },
        14533: (e) => {
            e.exports = {
                controlsContainer: 'CommonPageHeader_controlsContainer__4_h22',
                controls: 'CommonPageHeader_controls__c27E_',
                playControl: 'CommonPageHeader_playControl__gYOuR',
                playControl_withLogin: 'CommonPageHeader_playControl_withLogin__FL_L6',
            };
        },
        14912: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => l });
            var i = a(53548);
            let l = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        16472: (e) => {
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
                s = a(84961),
                n = a(53548),
                r = a(88969),
                o = a(17392),
                d = a(29993),
                c = a(96817),
                u = a(29504),
                m = a(4086),
                b = a(41928),
                p = a(46422),
                v = a(4370),
                h = a(78940),
                x = a(85587),
                _ = a(15253),
                j = a(91292),
                g = a(28806),
                y = a.n(g);
            let A = {
                    [x.n.ALBUM]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [x.n.PODCAST]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [x.n.ARTIST]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [x.n.TRACK]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [x.n.AUDIOBOOK]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [x.n.CLIP]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                f = (0, s.PA)((e) => {
                    var t;
                    let { modalState: a, data: s, onClose: g, className: f } = e,
                        C = null != s ? s : null == a ? void 0 : a.modalData,
                        k = (0, p.W)(),
                        T = (0, h.Z)(v.Z.main.href),
                        N = (0, b.N)().get(m.U2),
                        P = (0, d.c)(() => {
                            if (g) return g();
                            (k.canBack && k.back(), T());
                        }),
                        I = (null == C || null == (t = C.details) ? void 0 : t.url) && C.details.text,
                        O = (0, d.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = N.get(_.c.ExEx),
                                i = new Date(),
                                l = i.setMinutes(i.getMinutes() + 15),
                                s =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? N.set(_.c.ExEx, [...t, s], { expires: new Date(l) }) : N.set(_.c.ExEx, [s], { expires: new Date(l) }),
                                null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        L = (0, d.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == g || g(), k.canBack && k.back(), T()) : null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, n.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let S = (0, n.useMemo)(() => {
                            if (C) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, l.$)(y().title, y().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: C.title,
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: y().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: C.description,
                                        }),
                                        I &&
                                            (0, i.jsx)(j.N, {
                                                href: null == (e = C.details) ? void 0 : e.url,
                                                className: y().link,
                                                children: (0, i.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = C.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [C, I]),
                        E = (0, n.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === x.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: y().buttons,
                                          children: [
                                              (0, i.jsx)(c.$, {
                                                  color: 'primary',
                                                  onClick: L,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: y().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(r.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(c.$, {
                                                  color: 'secondary',
                                                  onClick: O,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: y().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && A[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: y().buttons,
                                          children: (0, i.jsx)(c.$, {
                                              color: 'primary',
                                              onClick: P,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: y().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(r.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [O, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, P, L],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, l.$)(y().root, f),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: y().container, children: [S, E] }),
                    });
                });
        },
        20012: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => i });
            var i = (function (e) {
                return ((e.TRACK = 'track'), (e.TEXT = 'text'), e);
            })({});
        },
        21438: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => l });
            let i = /^(0|[1-9]\d*)$/;
            function l(e) {
                return void 0 !== e && !(e.length > 40) && i.test(e);
            }
        },
        22126: (e) => {
            e.exports = {
                menuControl: 'PageHeaderAlbumControls_menuControl__wlqyr',
                likeControl: 'PageHeaderAlbumControls_likeControl__eohAO',
                pinOrDonationControl: 'PageHeaderAlbumControls_pinOrDonationControl__3aFUW',
                trailerControl: 'PageHeaderAlbumControls_trailerControl___HcW0',
            };
        },
        23717: (e) => {
            e.exports = {
                root: 'DonationCarousel_root__Uejjw',
                controls: 'DonationCarousel_controls__anVvP',
                item: 'DonationCarousel_item__89_B6',
                important: 'DonationCarousel_important__Y52Es',
            };
        },
        24586: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => s });
            var i = a(88800),
                l = a(35412);
            let s = (e) => {
                let { value: t } = e,
                    a = { '@context': 'https://schema.org', ...t };
                return (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: (0, l.Gr)(a) } });
            };
        },
        27054: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => m });
            var i = a(53548),
                l = a(78793),
                s = a(92716),
                n = a(99984),
                r = a(90780),
                o = a(29993),
                d = a(65523),
                c = a(37436),
                u = a(14518);
            let m = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    a = (0, r.st)(),
                    m = (0, d.U)(),
                    { hash: b } = (0, r.gf)(),
                    { pageId: p } = (0, u.$)(),
                    v = (0, o.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !a ||
                            !p ||
                            !b ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = c.W[p];
                        if (!t) return;
                        let i = {
                                hash: b,
                                pageId: s.AppScreen.Link,
                                entityType: s.EntityTypes.Deeplink,
                                entityId: s.EntityTypes.Deeplink,
                                from: s.AppScreen.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            r = (0, l.F)({ params: i, logger: m, context: 'useSendDeeplinkNavigationEvent' });
                        r && (0, n.ID)(a.evgenInstance, r);
                    });
                return (
                    (0, i.useEffect)(() => {
                        t && v();
                    }, [t, v]),
                    (0, o.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || v({ deepLink: e });
                    })
                );
            };
        },
        27076: (e) => {
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
        27169: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { Q: () => i }),
                (function (e) {
                    ((e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic'));
                })(i || (i = {})));
        },
        27395: (e, t, a) => {
            'use strict';
            a.d(t, { Rk: () => r, VN: () => s, nd: () => n, vY: () => l });
            var i = a(70025);
            let l = 10,
                s = 1,
                n = [i.O.ABOUT, i.O.TRACKS],
                r = 5;
        },
        27533: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => i });
            let i = (e) => {
                let t = Math.floor(e / 1e3),
                    a = Math.floor(t / 3600),
                    i = Math.floor((t % 3600) / 60),
                    l = t % 60,
                    s = 'PT';
                return (a > 0 && (s += ''.concat(a, 'H')), i > 0 && (s += ''.concat(i, 'M')), (l > 0 || 'PT' === s) && (s += ''.concat(l, 'S')), s);
            };
        },
        27651: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => m });
            var i = a(78793),
                l = a(54577),
                s = a(90780),
                n = a(29993),
                r = a(37436),
                o = a(34500),
                d = a(46166),
                c = a(14518),
                u = a(65523);
            let m = () => {
                let { hash: e } = (0, s.gf)(),
                    t = (0, u.U)(),
                    a = (0, s.st)(),
                    { pageId: m } = (0, c.$)(),
                    { blockId: b, blockType: p, blockPosX: v, blockPosY: h } = (0, o.N)(),
                    { objectType: x, objectId: _, objectPosX: j, objectPosY: g, objectsCount: y, mainObjectId: A, mainObjectType: f } = (0, d.J)();
                return (0, n.c)((s, n) => {
                    if (!a || !m) return;
                    let o = r.W[m];
                    if (!o) return;
                    let d = {
                        to: s,
                        objectType: x,
                        objectId: _,
                        objectPosX: j,
                        objectPosY: g,
                        hash: e,
                        pageId: o,
                        mainObjectType: f,
                        mainObjectId: A,
                        entityType: p,
                        entityId: b,
                        entityPosX: v,
                        entityPosY: h,
                        objectsCount: y,
                        from: o,
                    };
                    n && (d.deepLink = n);
                    let c = (0, i.F)({ params: d, logger: t, context: 'useSendEventOnDonationNavigated' });
                    c && (0, l.QS)(a.evgenInstance, c);
                });
            };
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
        31532: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => i });
            let i = (e) => {
                var t;
                if (null == e ? void 0 : e.isForeignAgent) return null == (t = e.resolvedForeignAgentData) ? void 0 : t.title;
            };
        },
        31946: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => l });
            var i = a(67174);
            let l = (e) => (0, i.u)('/label/:labelId', { params: { labelId: e } });
        },
        33133: (e) => {
            e.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        35396: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { C: () => s }),
                (function (e) {
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon'));
                })(i || (i = {})));
            let l = new Set(Object.values(i)),
                s = (e) => 'string' == typeof e && l.has(e);
        },
        36232: (e) => {
            e.exports = {
                root_hoverable: 'PageHeaderCover_root_hoverable__WF_BH',
                coverImage: 'PageHeaderCover_coverImage__i0wBv',
                coverImage_hoverable: 'PageHeaderCover_coverImage_hoverable__9XZK7',
                coverButton: 'PageHeaderCover_coverButton__3zeub',
                coverButton_hoverable: 'PageHeaderCover_coverButton_hoverable__hS1Gq',
                plusBadge: 'PageHeaderCover_plusBadge__O09t4',
            };
        },
        38628: (e) => {
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
        41578: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => c });
            var i = a(53548),
                l = a(58390),
                s = a(8655),
                n = a(69704),
                r = a(12533),
                o = a(34303);
            let d = { [s.S.Light]: 'yandex_music', [s.S.Dark]: 'yandex_music_dark' },
                c = () => {
                    let e = (0, l.useSearchParams)(),
                        { theme: t } = (0, n.W)();
                    return (0, i.useCallback)(
                        (a) => {
                            if (!t) return a;
                            let i = new URLSearchParams(e);
                            i.set('wl', d[t]);
                            let l = e.get(o.K.UTM_CAMPAIGN);
                            return (l && i.set('meta', 'campaignid_'.concat(l)), (0, r.C)(a, i));
                        },
                        [t, e],
                    );
                };
        },
        44440: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => i });
            let i = (e, t) => {
                let a = new URL(window.location.href),
                    i = a.searchParams;
                return (i.set(e, t), (a.search = i.toString()), a.toString());
            };
        },
        46474: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => c });
            var i = a(53548),
                l = a(29993),
                s = a(72288);
            a(97956);
            var n = a(34303),
                r = a(67174),
                o = (a(10325), a(43522)),
                d = (a(44440), a(14912));
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
                        let e = (0, o.j)();
                        if (null === e) return;
                        e.delete(n.K.CLID);
                        let t = new URL(window.location.href);
                        ((t.search = e.toString()), a(t.toString()));
                    }),
                    b = (0, l.c)((e, t) => {
                        if (!e || !t) return;
                        let a = c();
                        if (!a) return;
                        let { parsedClid: i } = a;
                        return t === i.albumId && e.clid === i.cpa.clid && e.artistId === i.cpa.artistId;
                    }),
                    p = (0, l.c)((e) => {
                        let t = c();
                        return (null == t ? void 0 : t.parsedClid.albumId) === e;
                    }),
                    v = (0, l.c)((e, t) => {
                        let a = c();
                        if (!a || a.parsedClid.albumId !== e) return t;
                        let { href: i } = (0, r.u)(t, { query: { [n.K.CLID]: a.queryClid } });
                        return i;
                    });
                return {
                    isCPAEnabled: !1,
                    getClidFromQuery: c,
                    setClidToQuery: u,
                    deleteClidFromQuery: m,
                    checkIsValidClid: b,
                    getAlbumUrlWithSavedClid: v,
                    checkIsCurrentAlbumPage: p,
                };
            };
        },
        50327: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => n });
            var i = a(35412),
                l = a(8655),
                s = a(69704);
            let n = (e) => {
                let { theme: t } = (0, s.W)();
                if (e) {
                    let { r: a, g: s, b: n } = (0, i.E2)(e),
                        r = t === l.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(a, ', ').concat(s, ', ').concat(n, ', ').concat(r, ')');
                }
            };
        },
        52589: (e) => {
            e.exports = {
                meta: 'PageHeaderNonMusic_meta__9DQPy',
                infoNote: 'PageHeaderNonMusic_infoNote__7xbV5',
                infoNoteIcon: 'PageHeaderNonMusic_infoNoteIcon__VDK7_',
                infoNoteText: 'PageHeaderNonMusic_infoNoteText__DCQq8',
                plusPaywallButton: 'PageHeaderNonMusic_plusPaywallButton__O7Tx_',
                controls_withPaywallButton: 'PageHeaderNonMusic_controls_withPaywallButton__Csp5U',
                booksLogo: 'PageHeaderNonMusic_booksLogo__4_TgU',
                controlsBlock: 'PageHeaderNonMusic_controlsBlock__jta99',
                controlsBlock_withPaywallButton: 'PageHeaderNonMusic_controlsBlock_withPaywallButton__vngBY',
            };
        },
        52632: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => d });
            var i = a(88800),
                l = a(65724),
                s = a(19994),
                n = a(90285),
                r = a.n(n);
            let o = (e) => {
                    let { isActive: t } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(r().shimmer, r().donation),
                        children: [
                            (0, i.jsx)(s.W, { isActive: t, radius: 'round', className: r().shimmerCover }),
                            (0, i.jsxs)('div', {
                                className: r().shimmerContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: r().shimmerText,
                                        children: [
                                            (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: r().shimmerArtist }),
                                            (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: r().shimmerGoal }),
                                        ],
                                    }),
                                    (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: r().shimmerButton }),
                                ],
                            }),
                        ],
                    });
                },
                d = (e) => Array.from({ length: 10 }, (t, a) => (0, i.jsx)(o, { isActive: e }, a));
        },
        58933: (e) => {
            e.exports = { root: 'Shimmer_root__NvUMY' };
        },
        59918: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => s });
            var i = a(27169),
                l = a(29201);
            let s = (e) => {
                var t, a, s, n, r;
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
                          trailer: { available: !!(null == (r = e.trailer) ? void 0 : r.isAvailable) },
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
        60902: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => m });
            var i = a(88800),
                l = a(65724),
                s = a(17392),
                n = a(96817),
                r = a(52300),
                o = a(7555),
                d = a(81877),
                c = a(36232),
                u = a.n(c);
            let m = (e) => {
                let { coverVariant: t, coverUri: a, isAvailable: c, className: m, withPlusBadge: b, onClick: p, 'aria-label': v, customCover: h, buttonClassName: x } = e;
                return (0, i.jsxs)(o.t, {
                    radius: 'round' === t ? 'round' : 'm',
                    className: (0, l.$)(u().root, m, { [u().root_hoverable]: !!p }),
                    children: [
                        (0, i.jsx)(n.$, {
                            className: (0, l.$)(u().coverButton, x),
                            onClick: p,
                            'aria-label': v,
                            tabIndex: p ? 0 : -1,
                            disabled: !p,
                            'data-test-id': s.S7.ENTITY_COVER_BUTTON,
                            children: h || (0, i.jsx)(d.B, { fit: 'cover', src: a, size: 300, className: u().coverImage, withAvatarReplace: !0, isAvailable: c }),
                        }),
                        b && (0, i.jsx)(r.I, { variant: 'plusBadge', className: u().plusBadge }),
                    ],
                });
            };
        },
        61499: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { K: () => i }),
                (function (e) {
                    ((e.EXPLICIT = 'explicit'), (e.CLEAN = 'clean'));
                })(i || (i = {})));
        },
        65523: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => r });
            var i = a(4086),
                l = a(41928),
                s = a(44084);
            let n = new WeakMap(),
                r = () =>
                    ((e) => {
                        if (e instanceof s.r) return e;
                        let t = n.get(e);
                        if (t) return t;
                        let a = {
                            log: (t, a) => e.info(t, a),
                            trace: (t, a) => e.trace(t, a),
                            debug: (t, a) => e.debug(t, a),
                            info: (t, a) => e.info(t, a),
                            warn: (t, a) => e.warn(t, a),
                            error: (t, a) => e.error(t, a),
                            fatal: (t, a) => e.fatal(t, a),
                            child: (t) => e.child(t),
                        };
                        return (n.set(e, a), a);
                    })((0, l.N)().get(i.Zf));
        },
        69750: (e) => {
            e.exports = {
                carouselBlocks: 'AlbumContent_carouselBlocks__bOsTV',
                carouselBlock: 'AlbumContent_carouselBlock__QhSlm',
                carouselBlockHeader: 'AlbumContent_carouselBlockHeader__Liibv',
                carouselContainer: 'AlbumContent_carouselContainer__Y1M_e',
                label: 'AlbumContent_label__2jz4j',
            };
        },
        70025: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => i });
            let i = { ABOUT: 'about', TRACKS: 'track-list' };
        },
        71227: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => m });
            var i = a(88800),
                l = a(84961),
                s = a(53548),
                n = a(2058),
                r = a(35412),
                o = a(17392),
                d = a(96817),
                c = a(52300);
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
                        ...(0, r.OZ)(m),
                        'data-test-id': o.S7.DONATION_BUTTON,
                    });
                }),
                m = (0, s.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
        },
        72074: (e) => {
            e.exports = { root: 'AlbumDonationMenuItem_root__Ajw_w', cover: 'AlbumDonationMenuItem_cover__Gg8_a', image: 'AlbumDonationMenuItem_image__AI5zU' };
        },
        72086: (e) => {
            e.exports = { root: 'LastEpisodes_root__4JPKj', blockHeader: 'LastEpisodes_blockHeader__se7bd', shimmerItem: 'LastEpisodes_shimmerItem__Iirx5' };
        },
        72503: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => _ });
            var i = a(88800),
                l = a(65724),
                s = a(53548),
                n = a(2058),
                r = a(88969),
                o = a(35412),
                d = a(96817),
                c = a(52300),
                u = a(7555),
                m = a(29504),
                b = a(81877),
                p = a(91292),
                v = a(90285),
                h = a.n(v);
            let x = (e) => {
                    let { artist: t, goal: a, onNavigateToArtist: s, onNavigateToDonation: v, forwardRef: x, ..._ } = e,
                        { formatMessage: j } = (0, n.A)();
                    return (0, i.jsxs)('div', {
                        ref: x,
                        className: (0, l.$)(h().root, h().donation),
                        ...(0, o.OZ)(_),
                        children: [
                            (0, i.jsx)(u.t, {
                                radius: 'round',
                                className: h().cover,
                                children: (0, i.jsx)(p.N, {
                                    href: t.url,
                                    onClick: s,
                                    'aria-label': j({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                                    children: (0, i.jsx)(b.B, {
                                        className: h().image,
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
                                className: h().container,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: h().text,
                                        children: [
                                            (0, i.jsx)(m.DZ, { variant: 'span', size: 'xs', weight: 'bold', lineClamp: 2, className: h().artist, children: t.name }),
                                            (0, i.jsx)(m.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                className: h().goal,
                                                children: a,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(d.$, {
                                        role: 'link',
                                        size: 's',
                                        color: 'secondary',
                                        onClick: v,
                                        className: h().label,
                                        withRipple: !1,
                                        children: [
                                            (0, i.jsx)(c.I, { variant: 'ruble', size: 'xxxs' }),
                                            (0, i.jsx)(m.HL, {
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                variant: 'span',
                                                children: (0, i.jsx)(r.A, { id: 'donation.support-button' }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, i.jsx)(x, { forwardRef: t, ...e }));
        },
        72858: (e) => {
            e.exports = { root: 'PlusPaywallButton_root__ftsxl', title: 'PlusPaywallButton_title__8PpX0', subtitle: 'PlusPaywallButton_subtitle__brC59' };
        },
        73853: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => l });
            var i = a(35412);
            let l = (e) => {
                if (!e) return null;
                let { h: t, s: a, l } = (0, i.g8)(e),
                    s = Math.min(70, Math.max(10, l + 10));
                return 'hsl('.concat(t, 'deg, ').concat(a, '%, ').concat(s, '%)');
            };
        },
        74929: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => u });
            var i = a(88800),
                l = a(53548),
                s = a(92716),
                n = a(28163),
                r = a(77948),
                o = a(47934),
                d = a(10079);
            let c = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: c,
                            title: u,
                            description: m,
                            albums: b,
                            className: p,
                            containerClassName: v,
                            headerClassName: h,
                            viewAllActionLink: x,
                            headingRef: _,
                            headingVariant: j,
                            shouldSendAnalyticsOnLoaded: g,
                            ...y
                        } = e,
                        A = (0, n.f)();
                    return (
                        (0, l.useEffect)(() => {
                            g && A();
                        }, [A, g]),
                        (0, i.jsx)(o.O, {
                            isShimmerVisible: a,
                            isShimmerActive: c,
                            className: p,
                            headerClassName: h,
                            containerClassName: v,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: x,
                            headingRef: _,
                            headingVariant: j,
                            ...y,
                            children:
                                null == b
                                    ? void 0
                                    : b.map((e, t) =>
                                          (0, i.jsx)(
                                              r.B,
                                              {
                                                  objectType: s.DomainObjectType.Album,
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
        77560: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => s });
            var i = a(61691),
                l = a(31946);
            let s = (e) => {
                let { labels: t, type: a } = e;
                return {
                    items: null == t ? void 0 : t.map((e) => ({ ...e, link: (0, l.r)(e.id) })),
                    count: null == t ? void 0 : t.length,
                    hasLabels: !!(null == t ? void 0 : t.length),
                    isPublisher: a === i._.PODCAST,
                    names: null == t ? void 0 : t.map((e) => e.name).join(', '),
                };
            };
        },
        77783: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => b });
            var i = a(88800),
                l = a(65724),
                s = a(53548),
                n = a(35412),
                r = a(53323),
                o = a(18486),
                d = a(31764),
                c = a(23717),
                u = a.n(c);
            let m = (e) => {
                    let {
                            className: t,
                            forwardRef: a,
                            headerClassName: c,
                            containerClassName: m,
                            headingVariant: b,
                            title: p,
                            viewAllActionLink: v,
                            description: h,
                            children: x,
                            ..._
                        } = e,
                        j = (0, s.useId)(),
                        g = (0, s.useRef)(null);
                    return (0, i.jsxs)('section', {
                        ref: a,
                        className: (0, l.$)(u().root, t),
                        ...(0, n.OZ)(_),
                        children: [
                            (0, i.jsx)(o.T, {
                                className: c,
                                labeledForId: j,
                                title: p,
                                description: h,
                                viewAllActionLink: v,
                                controls: (0, i.jsx)(d.X, { className: u().controls, carouselRef: g }),
                                headingVariant: b,
                                withDescription: !!h,
                            }),
                            (0, i.jsx)(r.F, { ref: g, itemClassName: (0, l.$)(u().item, u().important), className: m, 'aria-labelledby': j, children: x }),
                        ],
                    });
                },
                b = (0, s.forwardRef)((e, t) => (0, i.jsx)(m, { forwardRef: t, ...e }));
        },
        81828: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => l });
            var i = a(61499);
            let l = (e) => e === i.K.EXPLICIT;
        },
        83357: (e) => {
            e.exports = { root: 'TextVolume_root__wxSaK' };
        },
        85178: (e) => {
            e.exports = { root: 'RelatedContent_root__Dl1Nr', carousel: 'RelatedContent_carousel__pmv5c', header: 'RelatedContent_header__527S3' };
        },
        86854: (e) => {
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
        88894: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => u });
            var i = a(88800),
                l = a(65724),
                s = a(84961),
                n = a(53548),
                r = a(19994),
                o = a(72288),
                d = a(16472),
                c = a.n(d);
            let u = (0, s.PA)((e) => {
                let { className: t, coverRadius: a = 'm', isActive: s } = e,
                    {
                        settings: { isMobile: d },
                    } = (0, o.g)(),
                    u = (0, n.useMemo)(
                        () =>
                            d
                                ? (0, i.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, i.jsx)(r.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(r.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(r.W, { className: c().button, radius: 'round', isActive: s }),
                                      ],
                                  })
                                : (0, i.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, i.jsx)(r.W, { className: c().desktopPlayButton, isActive: s }),
                                          (0, i.jsx)(r.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(r.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(r.W, { className: c().button, radius: 'round', isActive: s }),
                                      ],
                                  }),
                        [s, d],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(c().root, t),
                    children: [
                        (0, i.jsx)(r.W, { className: c().cover, radius: a, isActive: s }),
                        (0, i.jsxs)('div', {
                            className: c().content,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: c().info,
                                    children: [
                                        (0, i.jsx)(r.W, { className: c().entityName, radius: 's', isActive: s }),
                                        (0, i.jsx)(r.W, { className: c().title, radius: 'xl', isActive: s }),
                                        (0, i.jsx)(r.W, { className: c().meta, radius: 's', isActive: s }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    ],
                });
            });
        },
        90285: (e) => {
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
        91147: (e) => {
            e.exports = { plusPaywallButton: 'PageHeaderAlbum_plusPaywallButton__yJWCh', booksLogo: 'PageHeaderAlbum_booksLogo__f4gjV' };
        },
        97826: (e, t, a) => {
            'use strict';
            function i(e, t) {
                return e.map((e) => 'https://'.concat(t, '/artist/').concat(e.id));
            }
            a.d(t, { x: () => i });
        },
        98158: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => b });
            var i = a(88800),
                l = a(29993),
                s = a(7123),
                n = a(79546),
                r = a(87528),
                o = a(29595),
                d = a(74965),
                c = a(9630),
                u = a(72288);
            let m = (e) => {
                var t;
                return null == (t = e.data) ? void 0 : t.entityId;
            };
            function b(e, t, a, b) {
                let p = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m,
                    { notify: v } = (0, d.l)(),
                    { fullscreenPlayer: h } = (0, u.g)(),
                    x = (0, c.e)();
                return (0, l.c)(() => {
                    let l = e.reduce((e, t) => {
                        let a = p(t);
                        return (a && e.push({ type: s.z4.Unloaded, meta: { id: a } }), e);
                    }, []);
                    if (!l.length) return;
                    switch (t) {
                        case n.N.LAST:
                            null == x || x.injectLast({ entitiesData: l, sourceContextData: null != a ? a : void 0 });
                            break;
                        case n.N.NEXT:
                            null == x || x.injectNext({ entitiesData: l, sourceContextData: null != a ? a : void 0 });
                    }
                    let d = h.modal.isOpened ? o.u.FULLSCREEN_INFO : o.u.INFO;
                    v((0, i.jsx)(r.l, { entityVariant: b.entityVariant, variant: t, entityTitle: b.entityTitle, coverUri: b.coverUri }), { containerId: d });
                });
            }
        },
        98390: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => a$ });
            var i = a(88800),
                l = a(84961),
                s = a(53548),
                n = a(58390),
                r = a(92716),
                o = a(17392),
                d = a(79070),
                c = a(44236),
                u = a(88969),
                m = a(29993),
                b = a(96817),
                p = a(52300),
                v = a(29504),
                h = a(4370),
                x = a(78940),
                _ = a(72288),
                j = a(27076),
                g = a.n(j);
            let y = (0, l.PA)(() => {
                let { slam: e } = (0, _.g)(),
                    t = (0, x.Z)(h.Z.mymusicDownloadsTracks.href),
                    a = (0, x.Z)(h.Z.settings.href),
                    l = (0, m.c)(() => {
                        window.location.href = h.Z.main.href;
                    }),
                    n = (0, s.useMemo)(
                        () =>
                            e.isOfflineModeEnabled ? (0, i.jsx)(u.A, { id: 'offline.offline-mode-enabled' }) : (0, i.jsx)(u.A, { id: 'offline.no-internet-connection' }),
                        [e.isOfflineModeEnabled],
                    ),
                    r = (0, s.useMemo)(
                        () =>
                            e.isOfflineModeEnabled
                                ? (0, i.jsx)(b.$, {
                                      onClick: a,
                                      className: g().button,
                                      color: 'secondary',
                                      size: 'l',
                                      radius: 'xxxl',
                                      children: (0, i.jsx)(v.HL, {
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
                                      children: (0, i.jsx)(v.HL, {
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
                            (0, i.jsx)(p.I, { className: g().icon, variant: 'offline', size: 'xxl' }),
                            (0, i.jsx)(v.DZ, { className: g().title, variant: 'div', size: 'xs', children: n }),
                            (0, i.jsx)(v.HL, {
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
                                    r,
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
            var A = a(34303),
                f = a(3685),
                C = a(69630),
                k = a(67174),
                T = a(60757),
                N = a(12816),
                P = a(27054),
                I = a(2345),
                O = a(4476),
                L = a(59844),
                S = a(50327),
                E = a(52150);
            let B = (e) => {
                let { pageAlbumId: t, children: a } = e,
                    l = (0, s.useMemo)(() => ({ pageAlbumId: t }), [t]);
                return (0, i.jsx)(E.H.Provider, { value: l, children: a });
            };
            var w = a(46474),
                M = a(44230),
                D = a(37670),
                R = a(19998),
                U = a(93317),
                H = a(19922),
                z = a(30144),
                X = a(324),
                F = a(46511),
                V = a(97826),
                K = a(13012),
                Y = a(57297),
                W = a(2218),
                $ = a(77863),
                G = a(45383),
                q = a(61691),
                Z = a(47580);
            function Q(e) {
                let { type: t, genre: a } = e;
                return [q._.AUDIOBOOK, q._.FAIRY_TALE].includes(null != t ? t : '') || ['audiobooksinenglish', 'fiction'].includes(null != a ? a : '');
            }
            function J(e) {
                return { minutes: Math.floor((e / 60) % 60), hours: Math.floor(e / 60 / 60) };
            }
            var ee = a(19049);
            function et(e) {
                let { albumType: t, messageFormatter: a } = e;
                switch (t) {
                    case q._.SINGLE:
                        return a({ id: 'metadata.single' });
                    case q._.PODCAST:
                        return a({ id: 'metadata.podcast' });
                    case q._.AUDIOBOOK:
                        return a({ id: 'metadata.audiobook' });
                    case q._.FAIRY_TALE:
                        return a({ id: 'metadata.fairy-tale' });
                    default:
                        return a({ id: 'metadata.album' });
                }
            }
            async function ea(e, t) {
                var a, i, l, s;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, F.W)(t.locale),
                    r = (0, K.N)(e.title);
                return {
                    title:
                        null != (a = t.disclaimerTitle)
                            ? a
                            : (function (e) {
                                  let { albumMeta: t, messageFormatter: a } = e,
                                      i = (0, Z.j)(t.artists);
                                  return Q({ type: t.type, genre: t.genre })
                                      ? i
                                          ? a(
                                                { id: 'metadata.audiobook-title-with-artists' },
                                                { albumTitle: t.title, artistsNames: i, artistsNamesCount: t.artists.length },
                                            )
                                          : a({ id: 'metadata.audiobook-title-without-artists' }, { albumTitle: t.title })
                                      : t.type === q._.PODCAST
                                        ? a({ id: 'metadata.podcast-title' }, { albumTitle: t.title })
                                        : i
                                          ? a({ id: 'metadata.album-title-with-artists' }, { albumTitle: t.title, artistsNames: i })
                                          : a({ id: 'metadata.album-title-without-artists' }, { albumTitle: t.title });
                              })({ albumMeta: e, messageFormatter: n }),
                    description: (function (e) {
                        let { albumMeta: t, messageFormatter: a } = e,
                            i = (0, Z.j)(t.artists);
                        return Q({ type: t.type, genre: t.genre })
                            ? i
                                ? a({ id: 'metadata.audiobook-title-with-artists' }, { albumTitle: t.title, artistsNames: i, artistsNamesCount: t.artists.length })
                                : a({ id: 'metadata.audiobook-title-without-artists' }, { albumTitle: t.title })
                            : t.type === q._.PODCAST
                              ? a({ id: 'metadata.podcast-title' }, { albumTitle: t.title })
                              : i
                                ? a({ id: 'metadata.album-title-with-artists' }, { albumTitle: t.title, artistsNames: i })
                                : a({ id: 'metadata.album-title-without-artists' }, { albumTitle: t.title });
                    })({ albumMeta: e, messageFormatter: n }),
                    openGraph: (0, Y.i)({
                        ogTitle: r,
                        ogDescription: (function (e) {
                            var t, a, i;
                            let { albumMeta: l, messageFormatter: s } = e,
                                n = (0, ee.Y)((0, Z.j)(l.artists), 96, !1);
                            if (Q({ type: l.type, genre: l.genre })) {
                                let { hours: e, minutes: a } = J(null != (t = l.durationSec) ? t : 0),
                                    i = s({ id: 'metadata.hours-and-minutes' }, { hours: e, minutes: a });
                                return [n, et({ albumType: l.type, messageFormatter: s }), i].join(' • ');
                            }
                            return l.type === q._.PODCAST
                                ? [
                                      (0, ee.Y)(null != (a = l.description) ? a : '', 96, !1),
                                      et({ albumType: l.type, messageFormatter: s }),
                                      s({ id: 'metadata.subscribers' }, { subscribers: null != (i = l.likesCount) ? i : 0 }),
                                  ].join(' • ')
                                : [n, et({ albumType: l.type, messageFormatter: s }), l.year].join(' • ');
                        })({ albumMeta: e, messageFormatter: n }),
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        ogImage: e.ogImage,
                        siteName: n({ id: 'metadata.yandex-music' }),
                        ogType: 'music.album',
                    }),
                    twitter: (0, W.H)({ cardType: $.W.APP, title: r, url: t.url, appName: n({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, X.X)({
                        additional: { ...t, url: null != (l = t.url) ? l : '', fullUrl: null != (s = t.fullUrl) ? s : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    other: { 'music:musician': (0, V.x)(e.artists, t.host) },
                    alternates: (0, G.S)('/album/:albumId', t.tld, { params: { albumId: e.id } }),
                };
            }
            var ei = a(2058),
                el = a(29595),
                es = a(74965),
                en = a(66943),
                er = a(94144),
                eo = a(35412),
                ed = a(27533),
                ec = a(24586);
            let eu = (0, l.PA)((e) => {
                var t, a, l, s, n, r, o, d, c, u, m, b, p, v;
                let { user: h, album: x } = e;
                return h.isAuthorized
                    ? null
                    : (0, i.jsx)(ec.S, {
                          value: {
                              '@type': 'MusicAlbum',
                              name: null != (u = null == (t = x.meta) ? void 0 : t.title) ? u : void 0,
                              description: null != (m = x.description) ? m : void 0,
                              url: null != (b = null == (a = x.meta) ? void 0 : a.url) ? b : void 0,
                              image: (null == (l = x.meta) ? void 0 : l.coverUri) ? (0, eo.lU)(null == (s = x.meta) ? void 0 : s.coverUri, 'orig') : void 0,
                              genre: null != (p = null == (n = x.meta) ? void 0 : n.genre) ? p : void 0,
                              datePublished: null != (v = null == (o = x.meta) || null == (r = o.year) ? void 0 : r.toString()) ? v : void 0,
                              tracks:
                                  null == (d = x.tracks)
                                      ? void 0
                                      : d
                                            .map((e) => e.data)
                                            .filter((e) => !!(null == e ? void 0 : e.url))
                                            .map((e) => {
                                                var t;
                                                return { '@type': 'MusicRecording', name: e.title, duration: (0, ed.F)(null != (t = e.durationMs) ? t : 0), url: e.url };
                                            }),
                              potentialAction: {
                                  '@type': 'ListenAction',
                                  expectsAcceptanceOf: {
                                      '@type': 'Offer',
                                      category: 'free',
                                      target: { '@type': 'EntryPoint', actionPlatform: null == (c = x.meta) ? void 0 : c.url },
                                  },
                              },
                          },
                      });
            });
            var em = a(5925),
                eb = a.n(em),
                ep = a(65724),
                ev = a(18593),
                eh = a(7123),
                ex = a(50493),
                e_ = a(88894),
                ej = a(29008),
                eg = a(5407),
                ey = a(64284),
                eA = a(28163),
                ef = a(77948),
                eC = a(84384),
                ek = a(9618),
                eT = a(4795),
                eN = a(53643),
                eP = a(39079),
                eI = a(16704),
                eO = a(72858),
                eL = a.n(eO);
            let eS = (e) => {
                let { className: t, albumType: a } = e,
                    {
                        settings: { isMobile: l },
                        paywall: n,
                    } = (0, _.g)(),
                    { formatMessage: r } = (0, ei.A)(),
                    d = (0, s.useCallback)(
                        (e) => {
                            (n.openModal(), e.stopPropagation());
                        },
                        [n],
                    ),
                    c = (0, s.useMemo)(() => {
                        switch (a) {
                            case q._.SINGLE:
                                return r({ id: 'payment.single-offer-button-title' });
                            case q._.PODCAST:
                                return r({ id: 'payment.podcast-offer-button-title' });
                            case q._.AUDIOBOOK:
                                return r({ id: 'payment.books-offer-button-title' });
                            case q._.FAIRY_TALE:
                                return r({ id: 'payment.fairy-tale-offer-button-title' });
                            default:
                                return r({ id: 'payment.album-offer-button-title' });
                        }
                    }, [a, r]);
                return l
                    ? (0, i.jsxs)(b.$, {
                          onClick: d,
                          className: (0, ep.$)(eL().root, t),
                          color: 'plus',
                          size: 'l',
                          radius: 'xxxl',
                          children: [
                              (0, i.jsx)(v.HL, { className: eL().title, weight: 'bold', variant: 'div', size: 'l', children: c }),
                              (0, i.jsx)(v.HL, {
                                  className: eL().subtitle,
                                  weight: 'normal',
                                  variant: 'div',
                                  size: 'xs',
                                  children: (0, i.jsx)(u.A, { id: 'payment.yandex-plus-offer-button' }),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(b.$, {
                          onClick: d,
                          className: (0, ep.$)(eL().root, t),
                          color: 'plus',
                          size: 'l',
                          radius: 'xxxl',
                          'data-test-id': o.S7.PLUS_PAYWALL_BUTTON,
                          children: [
                              (0, i.jsx)(v.HL, { className: eL().title, weight: 'bold', variant: 'div', size: 'm', children: c }),
                              (0, i.jsx)(v.HL, {
                                  className: eL().subtitle,
                                  weight: 'normal',
                                  variant: 'div',
                                  size: 'xs',
                                  children: (0, i.jsx)(u.A, { id: 'payment.yandex-plus-offer-button' }),
                              }),
                          ],
                      });
            };
            var eE = a(99409),
                eB = a(41918),
                ew = a(95756),
                eM = a(92966),
                eD = a(56651),
                eR = a(25557),
                eU = a(87762),
                eH = a(49738),
                ez = a(56862),
                eX = a(56446),
                eF = a(19038),
                eV = a(22126),
                eK = a.n(eV);
            let eY = (0, l.PA)((e) => {
                var t;
                let { album: a, likeButtonAriaLabel: l, withLikeButton: n = !0, donationButton: c, contextMenuChildren: b } = e,
                    {
                        user: h,
                        settings: { isMobile: x },
                        trailer: j,
                        albumCPA: { isPlusCPAEnabled: g, isPlusCPAPlayerBarEnabled: y },
                    } = (0, _.g)(),
                    { shouldShowBuySubscriptionModal: A, showBuySubscriptionModal: f } = (0, ek.q)(),
                    [C, k] = (0, s.useState)(!1),
                    T = (0, eM.K)(a),
                    N = (0, eD.A)(a),
                    { formatNumber: P } = (0, ei.A)(),
                    I = (0, eR.F)(),
                    { utmLink: O } = (0, eC.f)({ contextId: a.id, contextType: ev.K.Album }),
                    L = (0, eg.P)(),
                    { controlSize: S, iconSize: E } = (0, eE.q)(x),
                    { pageAlbumId: B } = (0, eU.T)(),
                    w = g({ pageAlbumId: B, albumId: a.id, isNonMusic: a.isNonMusic }),
                    M = y(a.id, a.isNonMusic),
                    D = !w && !h.isAuthorized,
                    R = (0, m.c)(() => {
                        if (A && !M) return void f();
                        L() || (j.setUtmLink(O), j.openAlbumTrailer(a.id), I(r.DomainObjectType.Album, String(a.id)));
                    }),
                    U = (0, s.useMemo)(() => {
                        var e;
                        return (null == (e = a.trailer) ? void 0 : e.isAvailable) && !x
                            ? (0, i.jsx)(eF.L, {
                                  children: (0, i.jsx)(eX.k, {
                                      size: 's',
                                      radius: 'xxxl',
                                      iconSize: 'xxs',
                                      className: eK().trailerControl,
                                      disabled: !a.isAvailable,
                                      onClick: R,
                                      children: (0, i.jsx)(u.A, { id: 'entity-names.trailer' }),
                                  }),
                              })
                            : null;
                    }, [null == (t = a.trailer) ? void 0 : t.isAvailable, a.isAvailable, R, x]),
                    H = (0, d.L)(() => {
                        if (!x) return (0, s.isValidElement)(c) ? c : (0, i.jsx)(ez.O, { size: S, iconSize: E, onClick: N, isPinned: a.isPinned });
                    }),
                    z = (0, d.L)(() => {
                        if (a.actualLikesCount && 0 !== a.actualLikesCount && !x)
                            return (0, i.jsx)(v.HL, {
                                variant: 'span',
                                type: 'controls',
                                size: 's',
                                weight: 'medium',
                                children: a.actualLikesCount && P(a.actualLikesCount),
                            });
                    }),
                    X = (0, d.L)(() => {
                        if (n)
                            return (0, i.jsx)(ef.B, {
                                objectType: a.mainObjectType,
                                objectId: String(a.id),
                                objectPosX: 1,
                                objectPosY: 1,
                                objectsCount: 1,
                                mainObjectType: a.mainObjectType,
                                mainObjectId: String(a.id),
                                children: (0, i.jsx)(eH.c, {
                                    className: eK().likeControl,
                                    isLiked: a.isLiked,
                                    onClick: T,
                                    variant: 'default',
                                    size: S,
                                    iconSize: E,
                                    withRipple: !x,
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
                        (0, s.isValidElement)(H) && (0, i.jsx)('div', { className: eK().pinOrDonationControl, children: H }),
                        (0, i.jsx)(ew.x, {
                            album: a,
                            open: C,
                            onOpenChange: k,
                            wrapperClassName: eK().menuControl,
                            size: S,
                            icon: (0, i.jsx)(p.I, { size: E, variant: 'more' }),
                            variant: eB.z.PAGE,
                            'data-test-id': o.e8.pageHeader.ALBUM_HEADER_CONTEXT_MENU_BUTTON,
                            children: b,
                        }),
                    ],
                });
            });
            var eW = a(7555),
                e$ = a(13946),
                eG = a(81877);
            let eq = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = e.filter((e) => !e.isComposer),
                    a = t.filter((e) => !e.various),
                    i = e.filter((e) => e.isComposer && !e.various),
                    l = [];
                return (a.length > 0 ? (l = a) : t.length > 0 && (l = t), l.concat(i));
            };
            var eZ = a(86854),
                eQ = a.n(eZ);
            let eJ = (0, l.PA)((e) => {
                var t, a, l, n;
                let { album: r, withArtistLink: d = !0 } = e,
                    {
                        settings: { isMobile: c },
                    } = (0, _.g)(),
                    u = (0, s.useMemo)(() => eq(r.artists), [r.artists]),
                    m = (null == u ? void 0 : u.length) === 1 && !(null == (t = u[0]) ? void 0 : t.decomposed) && !(null == (a = u[0]) ? void 0 : a.various);
                return (0, i.jsx)(ef.B, {
                    objectType: r.mainObjectType,
                    objectId: String(r.id),
                    objectPosX: 1,
                    objectPosY: 1,
                    objectsCount: null == (l = r.artists) ? void 0 : l.length,
                    children: (0, i.jsxs)('div', {
                        className: eQ().meta,
                        children: [
                            m &&
                                (0, i.jsx)(eW.t, {
                                    radius: 'round',
                                    className: eQ().artistCover,
                                    children: (0, i.jsx)(eG.B, { src: null == (n = u[0]) ? void 0 : n.coverUri, size: 30, withAvatarReplace: !0 }),
                                }),
                            (0, i.jsx)(e$.i, {
                                artists: u,
                                lineClamp: c ? 1 : void 0,
                                className: eQ().artists,
                                spoilerClassName: eQ().artistsSpoiler,
                                visibleArtistsCount: c ? void 0 : 2,
                                linkClassName: eQ().artistLink,
                                captionClassName: eQ().artistLabel,
                                variant: c ? 'breakAll' : 'breakWord',
                                withLink: d,
                            }),
                            r.year &&
                                (0, i.jsx)(v.HL, {
                                    variant: 'div',
                                    type: 'text',
                                    size: 'm',
                                    weight: 'medium',
                                    className: (0, ep.$)(eQ().year, { [eQ().year_dot]: u.length > 0 }),
                                    'data-test-id': o.e8.pageHeader.ALBUM_RELEASE_DATE,
                                    children: r.year,
                                }),
                        ],
                    }),
                });
            });
            var e0 = a(61097),
                e1 = a(60902),
                e8 = a(14533),
                e9 = a.n(e8),
                e2 = a(91147),
                e5 = a.n(e2);
            let e4 = (0, l.PA)((e) => {
                    let { album: t, donationButton: a, contextMenuChildren: l, className: n, 'aria-labelledby': o, forwardRef: d, onVersionClick: c } = e,
                        { formatMessage: b } = (0, ei.A)(),
                        { shouldShowBuySubscriptionModal: v, showBuySubscriptionModal: h } = (0, ek.q)(),
                        x = (0, eA.f)(),
                        { from: j, utmLink: g } = (0, eC.f)({ pageId: N._Q.ALBUM, blockId: ey.U.ALBUM, contextType: ev.K.Album, contextId: t.id }),
                        y = (0, eg.P)(),
                        {
                            user: A,
                            settings: { isMobile: f },
                            sonataState: C,
                            track: { isTrackPage: k },
                            modals: { imageSliderModal: T },
                            albumCPA: { isPlusCPAPlayerBarEnabled: P },
                            paywall: { modal: I },
                        } = (0, _.g)(),
                        { iconSize: O, controlSize: L } = (0, eE.q)(f),
                        S = f && !A.isAuthorized && t.isAvailable,
                        E = f && !A.hasPlus && A.isAuthorized && t.isAvailable,
                        B = S || E,
                        w = (0, eT.N)(),
                        M = !A.hasPlus && t.isAvailableOnlyForPlus,
                        D = !!t.coverUri,
                        R = P(t.id, t.isNonMusic),
                        U = (0, ej.r)(t.type),
                        H = (0, eN.j)();
                    (0, s.useEffect)(() => {
                        x();
                    }, [x]);
                    let z = (0, s.useMemo)(() => {
                            if (t.shouldShowBooksBadge) return (0, i.jsx)(p.I, { variant: 'yandexBooks'.concat(H), className: e5().booksLogo });
                        }, [t.shouldShowBooksBadge, H]),
                        { isPlaying: X, togglePlay: F } = (0, eP.D)({
                            playContextParams: {
                                contextData: { type: ev.K.Album, meta: { id: t.id }, from: j, utmLink: g },
                                loadContextMeta: !0,
                                entitiesData: C.unloadedEntitiesDataFromModels,
                            },
                        }),
                        V = (0, m.c)(() => {
                            t.coverUri && T.openImages({ images: [t.coverUri] });
                        }),
                        K = (0, m.c)(() => {
                            if (!y()) {
                                if (v && !R) return void h();
                                if (w && !R) return void I.open();
                                F();
                            }
                        }),
                        Y = (0, s.useMemo)(
                            () =>
                                M
                                    ? (0, i.jsx)(eS, { className: e5().plusPaywallButton, albumType: t.type })
                                    : f
                                      ? (0, i.jsx)(eI.D, {
                                            className: (0, ep.$)(e9().playControl, { [e9().playControl_withLogin]: B }),
                                            buttonVariant: 'default',
                                            iconSize: B ? O : 'xxl',
                                            size: B ? L : void 0,
                                            isPlaying: X,
                                            onClick: K,
                                            variant: B ? 'default' : 'filled',
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                        })
                                      : (0, i.jsx)(eI.D, {
                                            className: e9().playControl,
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
                            [M, f, X, K, t.isAvailable, t.type, B, O, L],
                        ),
                        W = (0, s.useMemo)(
                            () =>
                                (0, i.jsx)('div', {
                                    className: e9().controlsContainer,
                                    children: (0, i.jsxs)('div', {
                                        className: e9().controls,
                                        children: [
                                            (0, i.jsx)(ef.B, {
                                                objectType: r.DomainObjectType.Album,
                                                objectId: String(t.id),
                                                objectPosX: 1,
                                                objectPosY: 1,
                                                objectsCount: 1,
                                                mainObjectType: r.DomainObjectType.Album,
                                                mainObjectId: String(t.id),
                                                children: Y,
                                            }),
                                            (0, i.jsx)(eY, { donationButton: a, album: t, withLikeButton: !M, contextMenuChildren: l }),
                                        ],
                                    }),
                                }),
                            [t, a, Y, M, l],
                        );
                    return (0, i.jsx)(e0.k, {
                        ref: d,
                        headingVariant: k ? 'div' : 'h1',
                        className: n,
                        controls: W,
                        meta: (0, i.jsx)(eJ, { album: t }),
                        entityName: U,
                        entityNameIcon: z,
                        title: t.title,
                        cover: (0, i.jsx)(e1.I, {
                            coverVariant: 'square',
                            coverUri: t.coverUri,
                            isAvailable: t.isAvailable,
                            withPlusBadge: t.isAvailableOnlyForPlus,
                            onClick: D ? V : void 0,
                            'aria-label': D ? b({ id: 'slider.view-cover' }) : void 0,
                        }),
                        'aria-labelledby': o,
                        version: t.version,
                        onVersionClick: c,
                        showMobileLoginButton: S,
                        showMobileSubscriptionButton: E,
                    });
                }),
                e7 = (0, s.forwardRef)((e, t) => (0, i.jsx)(e4, { forwardRef: t, ...e }));
            var e3 = a(74929),
                e6 = a(41578),
                te = a(14347),
                tt = a(20012),
                ta = a(82204),
                ti = a(99564),
                tl = a(6668),
                ts = a(97956),
                tn = a(86790),
                tr = a(60266),
                to = a(54667),
                td = a(74773);
            let tc = (e) => {
                let { album: t } = e;
                return (0, s.useCallback)(
                    (e) => {
                        let a = [];
                        for (let i = e.startIndex; i <= e.endIndex; i++) {
                            let e = t.items[i];
                            (null == e ? void 0 : e.type) === to.S.TRACK && (null == e ? void 0 : e.loadingState) === td.G.IDLE && a.push(e.id);
                        }
                        a.length && t.getTracks({ trackIds: a });
                    },
                    [t],
                );
            };
            var tu = a(98644),
                tm = a(64310),
                tb = a(93015),
                tp = (function (e) {
                    return ((e.TRACK = 'TRACK'), (e.TEXT = 'TEXT'), e);
                })({}),
                tv = a(58933),
                th = a.n(tv);
            let tx = (e) => {
                let { shimmerVariant: t, trackVariant: a = tu.X.ALBUM } = e;
                switch (t) {
                    case tp.TRACK:
                        return (0, i.jsx)(tb.D, { isActive: !0, className: (0, ep.$)({ [th().root]: a === tu.X.ALBUM }), variant: a });
                    case tp.TEXT:
                        return (0, i.jsx)(tm.n, { className: th().root });
                }
            };
            var t_ = a(83357),
                tj = a.n(t_);
            let tg = (e) => {
                    let { text: t } = e;
                    return (0, i.jsx)('div', { className: tj().root, children: (0, i.jsx)(v.DZ, { variant: 'h2', className: eb().text, children: t }) });
                },
                ty = (e) => !!e && 'object' == typeof e && (('type' in e && e.type === tt.r.TEXT) || ('id' in e && 'positionInContext' in e)),
                tA = (e) => {
                    let { element: t, isNonMusic: a, album: l } = e,
                        { formatMessage: s } = (0, ei.A)();
                    return (e) => {
                        var n;
                        let r = null == l || null == (n = l.items) ? void 0 : n[e],
                            o = ((e, t, a) => {
                                let { hasAlbum: i, isAlbumRejected: l, isNonMusic: s } = e;
                                return a && i && !l
                                    ? a.type === tt.r.TEXT
                                        ? a.data || a.loadingState === td.G.REJECT
                                            ? s
                                                ? { kind: 'season', number: a.data, text: t({ id: 'entity-names.season-number' }, { number: a.data }) }
                                                : { kind: 'disk', number: a.data, text: t({ id: 'entity-names.disk-number' }, { number: a.data }) }
                                            : null
                                        : a.data
                                          ? { kind: 'track', track: a.data, withLightning: a.isBest && !a.data.isRemoved }
                                          : null
                                    : null;
                            })({ hasAlbum: !!l.meta, isAlbumRejected: l.isRejected, isNonMusic: !!a }, s, ty(r) ? r : void 0);
                        if (r && (null == o ? void 0 : o.kind) === 'track') return t(r, e, o.withLightning);
                        if ((null == o ? void 0 : o.kind) === 'season' || (null == o ? void 0 : o.kind) === 'disk') return (0, i.jsx)(tg, { text: o.text });
                        if (!r || !l.meta || l.isRejected || !ty(r)) return (0, i.jsx)(tx, { shimmerVariant: tp.TRACK, trackVariant: tu.X.ALBUM });
                        if (!r.data && !r.isRejected)
                            switch (r.type) {
                                case tt.r.TEXT:
                                    return (0, i.jsx)(tx, { shimmerVariant: tp.TEXT });
                                case to.S.TRACK:
                                    return (0, i.jsx)(tx, { shimmerVariant: tp.TRACK, trackVariant: tu.X.ALBUM });
                                default:
                                    if (a) return (0, i.jsx)(tx, { shimmerVariant: tp.TRACK, trackVariant: tu.X.PLAYLIST });
                            }
                    };
                };
            var tf = a(27651),
                tC = a(99415),
                tk = a(71227),
                tT = a(28830);
            let tN = (0, l.PA)((e) => {
                let { url: t } = e,
                    a = (0, tf.c)(),
                    l = (0, tC.C)(),
                    { ref: s, intersectionPropertyId: n } = (0, tT.n)({ callback: l, withViewUuid: !0 }),
                    o = (0, x.Z)(t),
                    d = (0, m.c)((e) => {
                        (a(r.AppScreen.Link, t), o(e));
                    });
                return (0, i.jsx)(tk.v, { onClick: d, ref: s, 'data-intersection-property-id': n });
            });
            var tP = a(77783),
                tI = a(52632),
                tO = a(72503),
                tL = a(91959);
            let tS = (0, l.PA)((e) => {
                    let { donation: t } = e,
                        a = (0, tf.c)(),
                        l = (0, tC.C)(),
                        s = (0, e6.Q)()(t.url),
                        { ref: n, intersectionPropertyId: o } = (0, tT.n)({ callback: l, withViewUuid: !0 }),
                        d = (0, x.Z)(s),
                        c = (0, x.Z)(t.artist.url),
                        u = (0, m.c)((e) => {
                            (a(r.AppScreen.ArtistScreen), c(e));
                        }),
                        b = (0, m.c)(() => {
                            (a(r.AppScreen.Link, s), d());
                        }),
                        p = (0, tL.S)({ artist: t.artist, callback: u });
                    return (0, i.jsx)(tO.X, {
                        ref: n,
                        'data-intersection-property-id': o,
                        artist: t.artist,
                        goal: t.goal,
                        onNavigateToArtist: p,
                        onNavigateToDonation: b,
                    });
                }),
                tE = (0, l.PA)((e) => {
                    var t, a, l;
                    let { className: n, headerClassName: o, containerClassName: d, headingVariant: c } = e,
                        { formatMessage: u } = (0, ei.A)(),
                        { album: m } = (0, _.g)(),
                        b = (0, s.useMemo)(() => {
                            var e, t;
                            return (null == (e = m.donations) ? void 0 : e.isLoading) || !(null == (t = m.donations) ? void 0 : t.items)
                                ? (0, tI.k)(!0)
                                : m.donations.items.map((e, t) => {
                                      var a, l, s;
                                      return (0, i.jsx)(
                                          ef.B,
                                          {
                                              objectType: r.DomainObjectType.Donation,
                                              objectId: e.artist.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: Number(null == (l = m.donations) || null == (a = l.items) ? void 0 : a.length),
                                              mainObjectId: String(null == (s = m.meta) ? void 0 : s.id),
                                              mainObjectType: r.DomainObjectType.Album,
                                              children: (0, i.jsx)(tS, { donation: e }, e.artist.id),
                                          },
                                          e.artist.id,
                                      );
                                  });
                        }, [null == (t = m.donations) ? void 0 : t.isLoading, null == (a = m.donations) ? void 0 : a.items, null == (l = m.meta) ? void 0 : l.id]);
                    return (0, i.jsx)(tP.x, {
                        className: n,
                        headerClassName: o,
                        containerClassName: d,
                        title: u({ id: 'donation.support-text' }),
                        headingVariant: c,
                        children: b,
                    });
                });
            var tB = a(19934),
                tw = a(54020),
                tM = a(78793),
                tD = a(99984),
                tR = a(90780),
                tU = a(37436),
                tH = a(46166),
                tz = a(14518),
                tX = a(65523),
                tF = a(3125),
                tV = a.n(tF),
                tK = a(90688),
                tY = a(54577),
                tW = a(34500),
                t$ = a(72074),
                tG = a.n(t$);
            let tq = (0, l.PA)((e) => {
                    let { donation: t } = e,
                        a = (0, e6.Q)()(t.url),
                        l = (0, x.Z)(a),
                        s = (() => {
                            let { hash: e } = (0, tR.gf)(),
                                t = (0, tX.U)(),
                                a = (0, tR.st)(),
                                { pageId: i } = (0, tz.$)(),
                                { blockId: l, blockType: s, blockPosX: n, blockPosY: o } = (0, tW.N)(),
                                { objectType: d, objectId: c, objectPosX: u, objectPosY: b, objectsCount: p, mainObjectId: v, mainObjectType: h } = (0, tH.J)();
                            return (0, m.c)(() => {
                                if (!a || !i) return;
                                let m = tU.W[i];
                                if (!m) return;
                                let x = {
                                        userInteractionType: r.UserInteractionType.Tap,
                                        hash: e,
                                        pageId: m,
                                        pageStyle: r.PageStyles.ContextMenu,
                                        pagePlacement: r.PagePlacements.Hover,
                                        mainObjectType: h,
                                        mainObjectId: v,
                                        objectType: d,
                                        objectId: c,
                                        objectPosX: u,
                                        objectPosY: b,
                                        entityType: s,
                                        entityId: l,
                                        entityPosX: n,
                                        entityPosY: o,
                                        objectsCount: p,
                                        actionType: r.UserInteractionType.Tap,
                                    },
                                    _ = (0, tM.F)({ params: x, logger: t, context: 'useSendEventOnDonationMenuItemActionPerformed' });
                                _ && (0, tY.l6)(a.evgenInstance, _);
                            });
                        })(),
                        n = (0, tC.C)(),
                        { ref: o, intersectionPropertyId: d } = (0, tT.n)({ callback: n, withViewUuid: !0 }),
                        c = (0, m.c)(() => {
                            (s(), l());
                        });
                    return (0, i.jsxs)(
                        tB.Dr,
                        {
                            ref: o,
                            'data-intersection-property-id': d,
                            className: tG().root,
                            isBlock: !0,
                            onClick: c,
                            children: [
                                (0, i.jsx)(eW.t, {
                                    radius: 'round',
                                    className: tG().cover,
                                    children: (0, i.jsx)(tK._V, { withAvatarReplace: !0, src: t.artist.coverUri, size: 100, fit: 'contain', className: tG().image }),
                                }),
                                (0, i.jsx)(v.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.artist.name }),
                            ],
                        },
                        a,
                    );
                }),
                tZ = (0, l.PA)(() => {
                    var e;
                    let {
                            settings: { isMobile: t },
                            album: { donations: a, meta: l },
                        } = (0, _.g)(),
                        { formatMessage: n } = (0, ei.A)(),
                        o = (() => {
                            let e = (0, tR.st)(),
                                t = (0, tX.U)(),
                                { hash: a } = (0, tR.gf)(),
                                { pageId: i } = (0, tz.$)(),
                                { mainObjectId: l, mainObjectType: s } = (0, tH.J)();
                            return (0, m.c)((n) => {
                                if (!e || !i || !tU.W[i]) return;
                                let o = {
                                    pageStyle: r.PageStyles.ContextMenu,
                                    pagePlacement: r.PagePlacements.Hover,
                                    mainObjectType: s,
                                    mainObjectId: l,
                                    hash: a,
                                    pageId: i,
                                };
                                n && (o.viewUuid = String((0, tw.A)()));
                                let d = (0, tM.F)({ params: o, logger: t, context: 'useSendEventOnDonationMenuOpenedOrClosed' });
                                d && (n ? (0, tD.Fn)(null == e ? void 0 : e.evgenInstance, d) : (0, tD.Ig)(null == e ? void 0 : e.evgenInstance, d));
                            });
                        })(),
                        [d, c] = (0, s.useState)(!1),
                        u = (0, s.useRef)(!1);
                    return (
                        (0, s.useEffect)(() => {
                            d && (u.current = !0);
                        }, [d]),
                        (0, s.useEffect)(() => {
                            u.current && o(d);
                        }, [d, o]),
                        (0, i.jsx)(tB.W1, {
                            ariaLabel: n({ id: 'donation.button-text' }),
                            size: 's',
                            variant: 'default',
                            radius: 'round',
                            color: 'secondary',
                            icon: (0, i.jsx)(p.I, { size: 'xxs', variant: 'ruble' }),
                            onOpenChange: c,
                            open: d,
                            isMobile: t,
                            placement: 'bottom',
                            offsetOptions: 8,
                            listClassName: tV().popover,
                            children:
                                null == a || null == (e = a.items)
                                    ? void 0
                                    : e.map((e, t) => {
                                          var s;
                                          return (0, i.jsx)(
                                              ef.B,
                                              {
                                                  objectType: r.DomainObjectType.Donation,
                                                  objectId: e.artist.id,
                                                  objectPosX: 1,
                                                  objectPosY: t + 1,
                                                  objectsCount: Number(null == (s = a.items) ? void 0 : s.length),
                                                  mainObjectId: String(null == l ? void 0 : l.id),
                                                  mainObjectType: r.DomainObjectType.Album,
                                                  children: (0, i.jsx)(tq, { donation: e }),
                                              },
                                              e.artist.id,
                                          );
                                      }),
                        })
                    );
                });
            var tQ = a(50408),
                tJ = a(10270);
            let t0 = (0, l.PA)((e) => {
                    let { item: t, itemContentCallback: a, resizeObserver: l, scrollMargin: n } = e,
                        [r, o] = (0, tQ.d)();
                    (0, s.useEffect)(
                        () => (
                            r && l && l.observe(r),
                            () => {
                                r && l && l.unobserve(r);
                            }
                        ),
                        [r, l],
                    );
                    let d = { transform: 'translate3d(0, '.concat(t.start - n, 'px, 0)') };
                    return (0, i.jsx)('div', { 'data-index': t.index, className: eb().virtualItem, ref: o, style: d, children: a(t.index) }, t.key);
                }),
                t1 = (0, l.PA)((e) => {
                    let { count: t, getDataByRange: a, itemContentCallback: l, role: n = 'region', ariaLabel: r } = e,
                        d = (0, eA.f)(),
                        [c, u] = (0, tQ.d)(),
                        { virtualizer: m, resizeObserver: b } = (0, tJ.r)({ count: t, getEstimateSize: () => 56, containerRef: c });
                    ((0, s.useEffect)(() => {
                        d();
                    }, [d]),
                        (0, s.useEffect)(() => {
                            !m.isScrolling && m.range && a(m.range);
                        }, [a, m.isScrolling, m.range]));
                    let p = m.getTotalSize(),
                        v = m.getVirtualItems();
                    return (0, i.jsx)('div', {
                        className: eb().virtualScroll,
                        style: { height: ''.concat(p, 'px') },
                        ref: u,
                        role: n,
                        'aria-label': r,
                        'data-test-id': o.S7.TRACK_LIST,
                        children: v.map((e) => (0, i.jsx)(t0, { item: e, itemContentCallback: l, resizeObserver: b, scrollMargin: m.options.scrollMargin }, e.key)),
                    });
                }),
                t8 = (e, t) => ({
                    title: e.isPublisher ? t({ id: 'page.album-publisher-title' }, { count: e.count }) : t({ id: 'page.album-label-title' }, { count: e.count }),
                    items: e.items,
                    count: e.count,
                });
            var t9 = a(77560),
                t2 = a(96527),
                t5 = a(91292);
            let t4 = (e) => {
                    let { url: t, name: a } = e,
                        l = (0, t2.N)(),
                        { ref: s, intersectionPropertyId: n } = (0, tT.n)(),
                        d = (0, m.c)(() => {
                            l({ to: r.AppScreen.LabelScreen, deepLink: t });
                        });
                    return (0, i.jsx)('span', {
                        ref: s,
                        'data-intersection-property-id': n,
                        className: eb().labelLinkContainer,
                        children: (0, i.jsx)(t5.N, {
                            role: 'link',
                            'aria-label': a,
                            href: t,
                            className: (0, ep.$)(eb().labelLink, eb().important),
                            onClick: d,
                            'data-test-id': o.Xk.album.ALBUM_LABEL_LINK,
                            children: (0, i.jsx)(v.HL, { variant: 'span', children: a }),
                        }),
                    });
                },
                t7 = (0, l.PA)((e) => {
                    var t;
                    let { album: a, size: l, weight: n, className: o } = e,
                        { formatMessage: d } = (0, ei.A)(),
                        c = (0, eA.f)();
                    (0, s.useEffect)(() => {
                        c();
                    }, [c]);
                    let { items: u, count: m, title: b } = t8((0, t9.p)({ labels: a.labels, type: null == (t = a.meta) ? void 0 : t.type }), d);
                    return (0, i.jsxs)('div', {
                        className: (0, ep.$)(eb().label, o),
                        children: [
                            (0, i.jsx)(v.HL, { variant: 'span', size: l, weight: n, children: b }),
                            '\xa0',
                            (0, i.jsx)(v.HL, {
                                variant: 'span',
                                size: l,
                                weight: n,
                                lineClamp: 1,
                                children:
                                    null == u
                                        ? void 0
                                        : u.map((e, t) => {
                                              var l;
                                              let { id: s, name: n, link: o } = e;
                                              return (0, i.jsx)(
                                                  ef.B,
                                                  {
                                                      objectType: r.DomainObjectType.Link,
                                                      objectId: o.href,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: m,
                                                      mainObjectType: r.DomainObjectType.Link,
                                                      mainObjectId: String(null == (l = a.meta) ? void 0 : l.id),
                                                      children: (0, i.jsx)(t4, { url: o.href, name: n }),
                                                  },
                                                  s,
                                              );
                                          }),
                            }),
                        ],
                    });
                });
            var t3 = a(40700),
                t6 = a(98158),
                ae = a(79546),
                at = a(9630),
                aa = a(93039),
                ai = a(15077);
            let al = (0, l.PA)((e) => {
                var t;
                let { albumId: a, albumTitle: l, albumCoverUri: n } = e,
                    {
                        user: r,
                        album: d,
                        sonataState: { entityMeta: c },
                    } = (0, _.g)(),
                    b = (0, at.e)(),
                    v = (0, t3.S)(null == b ? void 0 : b.state.currentContext.value),
                    h = ((e) =>
                        (0, m.c)((t) =>
                            t.data
                                ? !t.data.isRemoved && t.data.isAvailable
                                    ? t.data.entityId
                                    : void 0
                                : 'number' == typeof e
                                  ? ''.concat(t.id, ':').concat(e)
                                  : void 0,
                        ))(null == (t = d.meta) ? void 0 : t.id),
                    x = (0, s.useMemo)(() => (0, aa.t)({ contextType: ev.K.Album, contextId: String(a) }), [a]),
                    j = (0, t6.m)(d.tracks, ae.N.NEXT, x, { entityVariant: ai.c.ALBUM, entityTitle: l, coverUri: n }, h),
                    g = (0, t6.m)(d.tracks, ae.N.LAST, x, { entityVariant: ai.c.ALBUM, entityTitle: l, coverUri: n }, h);
                return c && !v
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(tB.Dr, {
                                  onClick: j,
                                  icon: (0, i.jsx)(p.I, { variant: 'playNext', size: 'xxs' }),
                                  disabled: !r.isAuthorized,
                                  'data-test-id': o.Kq.album.ALBUM_CONTEXT_MENU_PLAY_NEXT_BUTTON,
                                  children: (0, i.jsx)(u.A, { id: 'play-queue.play-next' }),
                              }),
                              (0, i.jsx)(tB.Dr, {
                                  onClick: g,
                                  icon: (0, i.jsx)(p.I, { variant: 'playLast', size: 'xxs' }),
                                  disabled: !r.isAuthorized,
                                  'data-test-id': o.Kq.album.ALBUM_CONTEXT_MENU_PLAY_LAST_BUTTON,
                                  children: (0, i.jsx)(u.A, { id: 'play-queue.play-last' }),
                              }),
                          ],
                      })
                    : null;
            });
            var as = a(69750),
                an = a.n(as);
            let ar = (0, l.PA)(() => {
                var e, t, a, l, n, c, u, m;
                let b = (0, s.useRef)(null),
                    p = (0, s.useRef)(0),
                    v = (0, tl.w)(),
                    { notify: h } = (0, es.l)(),
                    x = (0, e6.Q)(),
                    {
                        album: j,
                        albumCPA: g,
                        experiments: y,
                        sonataState: A,
                        settings: { isMobile: f },
                        track: { isTrackPage: C },
                    } = (0, _.g)(),
                    { from: k, utmLink: T } = (0, eC.f)({ pageId: N._Q.ALBUM, blockId: ey.U.ALBUM, contextType: ev.K.Album, contextId: j.id }),
                    { formatMessage: P } = (0, ei.A)(),
                    [I, O] = (0, s.useState)(!1),
                    L = tc({ album: j }),
                    S = C ? 'div' : 'h2',
                    E = j.items.length || 10,
                    { isCPAEnabled: B } = (0, w.I)(),
                    M = !B || (B && !g.cpa),
                    D = y.checkExperiment(ts.z.WebNextAlbumDonationButton, 'on') && j.hasDonations,
                    R = D && f,
                    { showBuySubscriptionModal: U } = (0, ek.q)(),
                    H = g.isPlusCPAPlayerBarEnabled(j.id, null == (e = j.meta) ? void 0 : e.isNonMusic) && f;
                ((0, s.useEffect)(
                    () => () => {
                        p.current = 0;
                    },
                    [j],
                ),
                    (0, s.useEffect)(() => {
                        H && A.status === eh.MT.ENDED && U();
                    }, [A.status, U, H]),
                    (0, s.useEffect)(() => {
                        var e, t;
                        if ((null == (e = j.otherArtistAlbums) ? void 0 : e.isRejected) || (null == (t = j.latestGenreAlbums) ? void 0 : t.isRejected)) {
                            if (!p || p.current > 0) return;
                            (h((0, i.jsx)(en.h, { error: P({ id: 'album-errors.error-during-loading-similar-albums' }) }), { containerId: el.u.ERROR }), p.current++);
                        }
                    }, [null == (t = j.latestGenreAlbums) ? void 0 : t.isRejected, null == (a = j.otherArtistAlbums) ? void 0 : a.isRejected, P, h]),
                    (0, s.useEffect)(() => {
                        j.isResolved && j.hasOtherAlbumVersions && O(!0);
                    }, [j.hasOtherAlbumVersions, j.isResolved]));
                let z = (0, s.useCallback)(() => {
                        let e = b.current;
                        null == e || e.scrollIntoView({ behavior: 'smooth' });
                    }, []),
                    X = (0, d.L)(() => {
                        var e, t, a, l, s;
                        if (!D || !(null == (e = j.donations) ? void 0 : e.items)) return;
                        if (Number(null == (a = j.meta) || null == (t = a.artists) ? void 0 : t.length) > 1)
                            return (0, i.jsx)(ta.F, {
                                blockType: r.EntityTypes.Donations,
                                blockId: ey.U.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, i.jsx)(ef.B, {
                                    mainObjectId: String(null == (s = j.meta) ? void 0 : s.id),
                                    mainObjectType: r.DomainObjectType.Album,
                                    children: (0, i.jsx)(tZ, {}),
                                }),
                            });
                        let [n] = j.donations.items;
                        if (n)
                            return (0, i.jsx)(ta.F, {
                                blockType: r.EntityTypes.Donations,
                                blockId: ey.U.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, i.jsx)(ef.B, {
                                    objectType: r.DomainObjectType.Donation,
                                    objectId: n.artist.id,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: 1,
                                    mainObjectId: String(null == (l = j.meta) ? void 0 : l.id),
                                    mainObjectType: r.DomainObjectType.Album,
                                    children: (0, i.jsx)(tN, { url: x(n.url) }),
                                }),
                            });
                    }),
                    F = (0, s.useMemo)(
                        () =>
                            j.isLoading || !j.meta || j.isRejected
                                ? (0, i.jsx)(e_.c, { className: eb().header, isActive: !0 })
                                : (0, i.jsx)(e7, {
                                      album: j.meta,
                                      donationButton: X,
                                      className: eb().header,
                                      onVersionClick: I ? z : void 0,
                                      contextMenuChildren: (0, i.jsx)(al, { albumId: j.meta.id, albumTitle: j.meta.title, albumCoverUri: j.meta.coverUri }),
                                  }),
                        [j.isLoading, j.meta, j.isRejected, X, I, z],
                    ),
                    V = tA({
                        element: (e, t, a) => {
                            var l;
                            if (e.data && e.type !== tt.r.TEXT)
                                return (0, i.jsx)(ef.B, {
                                    objectType: r.DomainObjectType.Track,
                                    objectId: String(e.data.id),
                                    objectPosX: 1,
                                    objectPosY: t + 1,
                                    objectsCount: E,
                                    children: (0, i.jsx)(te.F, {
                                        withLightning: a,
                                        track: e.data,
                                        position: e.position,
                                        albumArtists: null == j || null == (l = j.meta) ? void 0 : l.artists,
                                        playContextParams: v(t, {
                                            contextData: { type: ev.K.Album, meta: j.contextMeta, from: k, utmLink: T },
                                            queueParams: { index: e.positionInContext, entityId: e.data.id },
                                            loadContextMeta: !0,
                                            entitiesData: A.unloadedEntitiesDataFromModels,
                                        }),
                                    }),
                                });
                        },
                        album: j,
                    }),
                    K = (0, d.L)(() => {
                        var e, t, a, l, s, n, d, c, u, m, p, v;
                        let h = [],
                            x = 4;
                        return (
                            R &&
                                (null == (e = j.donations) ? void 0 : e.items) &&
                                (h.push(
                                    (0, i.jsx)(
                                        ta.F,
                                        {
                                            blockType: r.EntityTypes.Donations,
                                            blockId: ey.U.DONATY,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            children: (0, i.jsx)(tE, {
                                                headingVariant: S,
                                                className: an().carouselContainer,
                                                headerClassName: (0, ep.$)(an().carouselBlock, an().carouselBlockHeader),
                                                containerClassName: an().carouselBlock,
                                            }),
                                        },
                                        r.EntityTypes.Donations,
                                    ),
                                ),
                                x++),
                            j.hasSimilarEntities &&
                                (h.push(
                                    (0, i.jsx)(
                                        ta.F,
                                        {
                                            blockType: r.EntityTypes.SimilarEntities,
                                            blockId: r.EntityTypes.SimilarEntities,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            objectsCount: null == (a = j.similarEntities.data) ? void 0 : a.items.length,
                                            mainObjectId: String(null == (l = j.meta) ? void 0 : l.id),
                                            mainObjectType: r.DomainObjectType.Album,
                                            children: (0, i.jsx)(ex.Q, {
                                                ...j.similarEntities,
                                                meta: { title: P({ id: 'page.similar-entities-block-title' }) },
                                                headingVariant: S,
                                                className: an().carouselContainer,
                                                headerClassName: (0, ep.$)(an().carouselBlock, an().carouselBlockHeader),
                                                containerClassName: an().carouselBlock,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                setHasSentAnalyticsOnLoaded: j.similarEntities.setHasSentAnalyticsOnLoaded,
                                            }),
                                        },
                                        r.EntityTypes.SimilarEntities,
                                    ),
                                ),
                                x++),
                            j.hasOtherAlbumVersions &&
                                (null == (t = j.otherAlbumVersions) ? void 0 : t.length) &&
                                (h.push(
                                    (0, i.jsx)(
                                        ta.F,
                                        {
                                            blockType: r.EntityTypes.OtherAlbumVersions,
                                            blockId: r.EntityTypes.OtherAlbumVersions,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            objectsCount: null == (s = j.otherAlbumVersions) ? void 0 : s.length,
                                            mainObjectId: String(null == (n = j.meta) ? void 0 : n.id),
                                            mainObjectType: r.DomainObjectType.Album,
                                            children: (0, i.jsx)(e3.p, {
                                                isShimmerVisible: j.isLoading,
                                                isShimmerActive: !0,
                                                className: an().carouselContainer,
                                                headerClassName: (0, ep.$)(an().carouselBlock, an().carouselBlockHeader),
                                                containerClassName: an().carouselBlock,
                                                title: P({ id: 'entity-names.other-album-versions' }),
                                                albums: j.otherAlbumVersions,
                                                headingRef: b,
                                                headingVariant: S,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': o.Xk.album.OTHER_VERSIONS_CAROUSEL,
                                            }),
                                        },
                                        r.EntityTypes.OtherAlbumVersions,
                                    ),
                                ),
                                x++),
                            j.hasLatestGenreAlbums &&
                                M &&
                                (h.push(
                                    (0, i.jsx)(
                                        ta.F,
                                        {
                                            blockType: r.EntityTypes.GenreAlbums,
                                            blockId: r.EntityTypes.GenreAlbums,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            objectsCount: null == (d = j.latestGenreAlbums) ? void 0 : d.items.length,
                                            mainObjectId: String(null == (c = j.meta) ? void 0 : c.id),
                                            mainObjectType: r.DomainObjectType.Album,
                                            children: (0, i.jsx)(e3.p, {
                                                isShimmerVisible: j.isLatestGenreAlbumsLoading,
                                                isShimmerActive: !0,
                                                className: an().carouselContainer,
                                                headerClassName: (0, ep.$)(an().carouselBlock, an().carouselBlockHeader),
                                                containerClassName: an().carouselBlock,
                                                title: P({ id: 'entity-names.new-albums-in-genre' }),
                                                albums: null == (u = j.latestGenreAlbums) ? void 0 : u.items,
                                                headingVariant: S,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': o.Xk.album.GENRE_ALBUMS_CAROUSEL,
                                            }),
                                        },
                                        r.EntityTypes.GenreAlbums,
                                    ),
                                ),
                                x++),
                            j.hasOtherArtistAlbums &&
                                (h.push(
                                    (0, i.jsx)(
                                        ta.F,
                                        {
                                            blockType: r.EntityTypes.OtherAlbums,
                                            blockId: r.EntityTypes.OtherAlbums,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            objectsCount: null == (m = j.otherArtistAlbums) ? void 0 : m.items.length,
                                            mainObjectId: String(null == (p = j.meta) ? void 0 : p.id),
                                            mainObjectType: r.DomainObjectType.Album,
                                            children: (0, i.jsx)(e3.p, {
                                                isShimmerVisible: j.isOtherArtistAlbumsLoading,
                                                isShimmerActive: !0,
                                                className: an().carouselContainer,
                                                headerClassName: (0, ep.$)(an().carouselBlock, an().carouselBlockHeader),
                                                containerClassName: an().carouselBlock,
                                                title: P({ id: 'entity-names.other-albums-of-artist' }),
                                                albums: null == (v = j.otherArtistAlbums) ? void 0 : v.items,
                                                headingVariant: S,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': o.Xk.album.OTHER_ARTIST_ALBUMS_CAROUSEL,
                                            }),
                                        },
                                        r.EntityTypes.OtherAlbums,
                                    ),
                                ),
                                x++),
                            h
                        );
                    });
                return (
                    j.id && j.isResolved && j.similarEntities.isNeededToLoad && j.isSimilarEntitiesEnabled && (0, s.use)(j.getSimilarEntities({ albumId: j.id })),
                    (0, i.jsxs)(ti.h, {
                        tabId: '',
                        tabPos: 0,
                        isTabSelectedByDefault: !1,
                        children: [
                            (0, i.jsx)(ta.F, {
                                blockType: r.EntityTypes.Header,
                                blockId: r.EntityTypes.Header,
                                blockPosX: 1,
                                blockPosY: 1,
                                mainObjectId: String(null == (l = j.meta) ? void 0 : l.id),
                                mainObjectType: r.DomainObjectType.Album,
                                objectsCount: 1,
                                children: F,
                            }),
                            (0, i.jsx)(ta.F, {
                                blockType: r.EntityTypes.Tracks,
                                blockId: r.EntityTypes.Tracks,
                                blockPosX: 1,
                                blockPosY: 2,
                                objectsCount: E,
                                mainObjectId: String(null == (n = j.meta) ? void 0 : n.id),
                                mainObjectType: r.DomainObjectType.Album,
                                children: (0, i.jsx)(t1, {
                                    count: E,
                                    itemContentCallback: V,
                                    getDataByRange: L,
                                    ariaLabel: P({ id: 'entity-names.albums-tracks-list' }, { albumName: (null == (c = j.meta) ? void 0 : c.title) || '' }),
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: eb().footerContainer,
                                children: [
                                    j.hasLabel &&
                                        (0, i.jsx)(ta.F, {
                                            blockType: r.EntityTypes.Labels,
                                            blockId: r.EntityTypes.Labels,
                                            blockPosX: 1,
                                            blockPosY: 3,
                                            objectsCount: null == (u = j.labels) ? void 0 : u.length,
                                            mainObjectId: String(null == (m = j.meta) ? void 0 : m.id),
                                            mainObjectType: r.DomainObjectType.Album,
                                            children: (0, i.jsx)(t7, { album: j, size: 's', weight: 'normal', className: an().label }),
                                        }),
                                    (0, i.jsxs)('div', { className: an().carouselBlocks, children: [K, ' '] }),
                                    (0, i.jsx)(tr.A, { children: (0, i.jsx)(tn.w, { className: eb().footer }) }),
                                ],
                            }),
                        ],
                    })
                );
            });
            var ao = a(98225),
                ad = a(27395),
                ac = a(62837),
                au = a(81828),
                am = a(70025);
            let ab = (e) => {
                var t;
                let a = null != (t = ad.nd.find((t) => t === e)) ? t : am.O.ABOUT;
                return { tab: a, index: ad.nd.indexOf(a) };
            };
            var ap = a(73853),
                av = a(44440),
                ah = a(14912),
                ax = a(38628),
                a_ = a.n(ax);
            let aj = (e) => {
                    let { title: t, description: a } = e;
                    return (0, i.jsxs)('div', {
                        className: a_().infoBlock,
                        children: [
                            (0, i.jsx)(v.HL, { variant: 'span', type: 'entity', size: 'm', className: a_().infoTitle, children: t }),
                            (0, i.jsx)(v.HL, { variant: 'span', type: 'entity', size: 'm', children: a }),
                        ],
                    });
                },
                ag = (e) => {
                    let { album: t, content: a } = e;
                    if (!a) return null;
                    switch (a.kind) {
                        case 'labels':
                            return (0, i.jsx)(t7, { album: t, size: 'm', weight: 'medium', className: a_().label });
                        case 'text':
                            return (0, i.jsx)(aj, { title: a.title, description: a.names });
                    }
                },
                ay = (e) => {
                    let { album: t, about: a, tabValue: l, tabElementId: s } = e,
                        { index: n } = ab(am.O.ABOUT);
                    return (0, i.jsx)(ao.Kp, {
                        name: n,
                        value: l,
                        elementId: s,
                        children: (0, i.jsxs)('div', {
                            className: a_().contentAbout,
                            children: [
                                null !== a.description &&
                                    (0, i.jsx)(v.HL, {
                                        variant: 'div',
                                        type: 'entity',
                                        size: 'm',
                                        className: eb().text,
                                        children: (0, i.jsx)('span', { dangerouslySetInnerHTML: { __html: a.description } }),
                                    }),
                                a.hasInfo &&
                                    (0, i.jsxs)('div', {
                                        className: eb().text,
                                        children: [
                                            a.readers && (0, i.jsx)(aj, { title: a.readersTitle, description: a.readers }),
                                            a.withDuration && (0, i.jsx)(aj, { title: a.durationTitle, description: a.durationText }),
                                            (0, i.jsx)(ag, { album: t, content: a.publisher }),
                                            a.isExplicit && (0, i.jsx)(aj, { title: a.ageLimitTitle, description: a.ageLimit }),
                                        ],
                                    }),
                            ],
                        }),
                    });
                };
            var aA = a(76843),
                af = a(18486),
                aC = a(72086),
                ak = a.n(aC);
            let aT = (0, l.PA)((e) => {
                let { className: t, headingVariant: a = 'h2', title: l, ariaLabel: n } = e,
                    o = (0, eA.f)(),
                    { album: d, sonataState: c } = (0, _.g)();
                (0, s.useEffect)(() => {
                    o();
                }, [o]);
                let { from: u, utmLink: m } = (0, eC.f)({ pageId: N._Q.PODCAST, blockId: ey.U.PODCAST, contextId: d.id, contextType: ev.K.Album }),
                    b = (0, s.useMemo)(
                        () =>
                            d.lastEpisodes.map((e, t) => {
                                let a = ((e, t) => (t && e.data ? e.data : null))(e, d.isResolved);
                                return a
                                    ? (0, i.jsx)(
                                          ef.B,
                                          {
                                              objectType: r.DomainObjectType.PodcastEpisode,
                                              objectId: String(a.id),
                                              objectPosX: 1,
                                              objectPosY: t + 1,
                                              objectsCount: d.lastEpisodes.length,
                                              children: (0, i.jsx)(aA.K, {
                                                  track: a,
                                                  playContextParams: {
                                                      contextData: { type: ev.K.Album, meta: d.contextMeta, from: u, utmLink: m },
                                                      queueParams: { index: e.positionInContext, entityId: a.id },
                                                      loadContextMeta: !0,
                                                      entitiesData: c.unloadedEntitiesDataFromModels,
                                                  },
                                              }),
                                          },
                                          a.id,
                                      )
                                    : (0, i.jsx)(tb.D, { isActive: !0, className: ak().shimmerItem, variant: tu.X.ALBUM }, t);
                            }),
                        [d.lastEpisodes, d.isResolved, d.contextMeta, u, m, c.unloadedEntitiesDataFromModels],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, ep.$)(t, ak().root),
                    children: [
                        (0, i.jsx)(af.T, { headingVariant: a, className: ak().blockHeader, title: l }),
                        (0, i.jsx)('div', { role: 'list', 'aria-label': n, tabIndex: 0, children: b }),
                    ],
                });
            });
            var aN = a(10079),
                aP = a(47934),
                aI = a(85178),
                aO = a.n(aI);
            let aL = {
                    'authors-books': o.e8.album.AUTHORS_BOOKS,
                    'category-albums': o.e8.album.CATEGORY_ALBUMS,
                    'labels-albums': o.e8.album.LABELS_ALBUMS,
                    'similar-albums': o.e8.album.SIMILAR_ALBUMS,
                },
                aS = (0, l.PA)((e) => {
                    var t, a;
                    let { isShimmerVisible: l, isShimmerActive: n, className: o, headingVariant: d = 'h2' } = e,
                        { album: c } = (0, _.g)(),
                        u = (0, eA.f)();
                    return (
                        (0, s.useEffect)(() => {
                            u();
                        }, [u]),
                        (0, i.jsx)('div', {
                            className: (0, ep.$)(o, aO().root),
                            children:
                                null == (a = c.relatedContent) || null == (t = a.items)
                                    ? void 0
                                    : t.map((e, t) => {
                                          let a = aL[e.type] || '';
                                          return (0, i.jsx)(
                                              aP.O,
                                              {
                                                  headingVariant: d,
                                                  title: e.title,
                                                  isShimmerVisible: l,
                                                  isShimmerActive: n,
                                                  className: (0, ep.$)(aO().root, o),
                                                  containerClassName: aO().carousel,
                                                  headerClassName: aO().header,
                                                  'data-test-id': a,
                                                  children: e.albums.map((t, a) =>
                                                      (0, i.jsx)(
                                                          ef.B,
                                                          {
                                                              objectType: r.DomainObjectType.Podcast,
                                                              objectId: String(t.id),
                                                              objectPosX: a + 1,
                                                              objectPosY: 1,
                                                              objectsCount: e.albums.length,
                                                              children: (0, i.jsx)(aN.a, { album: t, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }),
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
                }),
                aE = (0, l.PA)((e) => {
                    var t, a, l, s, n, o;
                    let { content: d } = e,
                        { album: c } = (0, _.g)(),
                        u = d.isAbout && c.relatedContent && c.relatedContent.items && c.relatedContent.items.length > 0;
                    return (0, i.jsxs)('div', {
                        className: eb().footerContainer,
                        children: [
                            d.withLastEpisodes &&
                                (0, i.jsx)(ta.F, {
                                    blockType: r.EntityTypes.LatestEpisodes,
                                    blockId: r.EntityTypes.LatestEpisodes,
                                    blockPosX: 1,
                                    blockPosY: 2,
                                    objectsCount: c.lastEpisodes.length,
                                    mainObjectId: String(null == (t = c.meta) ? void 0 : t.id),
                                    mainObjectType: null == (a = c.meta) ? void 0 : a.mainObjectType,
                                    children: (0, i.jsx)(aT, { className: a_().lastEpisodes, title: d.lastEpisodesTitle, ariaLabel: d.lastEpisodesListLabel }),
                                }),
                            u &&
                                (0, i.jsx)(ta.F, {
                                    blockType: r.EntityTypes.Podcasts,
                                    blockId: r.EntityTypes.Podcasts,
                                    blockPosX: 1,
                                    blockPosY: 3,
                                    objectsCount: null == (s = c.relatedContent) || null == (l = s.items) ? void 0 : l.length,
                                    mainObjectId: String(null == (n = c.meta) ? void 0 : n.id),
                                    mainObjectType: null == (o = c.meta) ? void 0 : o.mainObjectType,
                                    children: (0, i.jsx)(aS, { isShimmerVisible: c.isRelatedContentLoading, isShimmerActive: !0 }),
                                }),
                            (0, i.jsx)(tr.A, { children: (0, i.jsx)(tn.w, { className: eb().footer }) }),
                        ],
                    });
                });
            var aB = a(76675),
                aw = a(31532),
                aM = a(108),
                aD = a(52589),
                aR = a.n(aD);
            let aU = (0, l.PA)((e) => {
                    let { album: t, actionButton: a, contextMenuChildren: l, className: n, 'aria-labelledby': r, forwardRef: d, onVersionClick: c } = e,
                        { formatMessage: b } = (0, ei.A)(),
                        { shouldShowBuySubscriptionModal: v, showBuySubscriptionModal: h } = (0, ek.q)(),
                        x = (0, eA.f)(),
                        { from: j, utmLink: g } = (0, eC.f)({ pageId: N._Q.ALBUM, blockId: ey.U.ALBUM, contextType: ev.K.Album, contextId: t.id }),
                        {
                            user: y,
                            settings: { isMobile: A },
                            sonataState: f,
                            modals: { imageSliderModal: C },
                            paywall: { modal: k },
                        } = (0, _.g)(),
                        T = (0, aB.b)(),
                        P = (0, eg.P)(),
                        { iconSize: I, controlSize: O } = (0, eE.q)(A),
                        L = A && !y.isAuthorized && t.isAvailable,
                        S = A && !y.hasPlus && y.isAuthorized && t.isAvailable,
                        E = L || S,
                        B = (0, eT.N)(),
                        w = (0, aM.$)(t.isLiked, t.type),
                        M = (0, ej.r)(t.type),
                        D = (0, eN.j)(),
                        R = t.isAvailable || t.isAudiobook,
                        U = !!t.coverUri;
                    (0, s.useEffect)(() => {
                        x();
                    }, [x]);
                    let H = (0, s.useMemo)(() => {
                            if (t.shouldShowBooksBadge) return (0, i.jsx)(p.I, { variant: 'yandexBooks'.concat(D), className: aR().booksLogo });
                        }, [t.shouldShowBooksBadge, D]),
                        z = !y.hasPlus && t.isAvailableOnlyForPlus,
                        X = (0, aw.c)(t.isPodcast ? t : null),
                        { isPlaying: F, togglePlay: V } = (0, eP.D)({
                            playContextParams: {
                                contextData: { type: ev.K.Album, meta: { id: t.id }, from: j, utmLink: g },
                                loadContextMeta: !0,
                                entitiesData: f.unloadedEntitiesDataFromModels,
                            },
                        }),
                        K = (0, m.c)(() => {
                            t.coverUri && C.openImages({ images: [t.coverUri] });
                        }),
                        Y = (0, m.c)(() => {
                            if (!P()) {
                                if (v) return void h();
                                if (B) return void k.open();
                                (V(), T(!F));
                            }
                        }),
                        W = (0, s.useMemo)(
                            () =>
                                z
                                    ? (0, i.jsx)(eS, { className: aR().plusPaywallButton, albumType: t.type })
                                    : A
                                      ? (0, i.jsx)(eI.D, {
                                            className: (0, ep.$)(e9().playControl, { [e9().playControl_withLogin]: E }),
                                            buttonVariant: 'default',
                                            iconSize: E ? I : 'xxl',
                                            size: E ? O : void 0,
                                            isPlaying: F,
                                            onClick: Y,
                                            variant: E ? 'default' : 'filled',
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                        })
                                      : (0, i.jsx)(eI.D, {
                                            className: e9().playControl,
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
                            [z, A, F, Y, t.isAvailable, t.type, E, I, O],
                        ),
                        $ = (0, s.useMemo)(
                            () =>
                                (0, i.jsx)('div', {
                                    className: (0, ep.$)(aR().controlsBlock, { [aR().controlsBlock_withPaywallButton]: z }),
                                    children: (0, i.jsxs)('div', {
                                        className: e9().controlsContainer,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: (0, ep.$)(e9().controls, { [aR().controls_withPaywallButton]: z }),
                                                'data-test-id': o.e8.pageHeader.NON_MUSIC_PAGE_HEADER_CONTROLS,
                                                children: [
                                                    (0, i.jsx)(ef.B, {
                                                        objectType: t.mainObjectType,
                                                        objectId: String(t.id),
                                                        objectPosX: 1,
                                                        objectPosY: 1,
                                                        objectsCount: 1,
                                                        mainObjectType: t.mainObjectType,
                                                        mainObjectId: String(t.id),
                                                        children: W,
                                                    }),
                                                    (0, i.jsx)(eY, { album: t, likeButtonAriaLabel: w, withLikeButton: !z, contextMenuChildren: l }),
                                                ],
                                            }),
                                            a && (0, i.jsx)('div', { className: e9().controls, children: a }),
                                        ],
                                    }),
                                }),
                            [W, t, w, z, a, l],
                        ),
                        G = (0, s.useMemo)(() => (0, i.jsx)('div', { className: aR().meta, children: (0, i.jsx)(eJ, { album: t }) }), [t]);
                    return (0, i.jsx)(e0.k, {
                        ref: d,
                        headingVariant: 'h1',
                        className: n,
                        controls: $,
                        meta: G,
                        entityName: M,
                        entityNameIcon: H,
                        title: t.title,
                        cover: (0, i.jsx)(e1.I, {
                            coverVariant: 'square',
                            coverUri: t.coverUri,
                            isAvailable: R,
                            withPlusBadge: t.isAvailableOnlyForPlus,
                            onClick: U ? K : void 0,
                            'aria-label': U ? b({ id: 'slider.view-cover' }) : void 0,
                        }),
                        'aria-labelledby': r,
                        version: t.version,
                        onVersionClick: c,
                        disclaimerLabel: X,
                        showMobileLoginButton: L,
                        showMobileSubscriptionButton: S,
                    });
                }),
                aH = (0, s.forwardRef)((e, t) => (0, i.jsx)(aU, { forwardRef: t, ...e }));
            var az = a(87366),
                aX = a(76099);
            let aF = (0, l.PA)((e) => {
                let { tabsState: t, tabsTexts: a, onTabChange: l, actionButton: n, children: r } = e,
                    { album: o } = (0, _.g)(),
                    d = (0, s.useRef)(null);
                return o.isLoading || !o.meta || o.isRejected
                    ? (0, i.jsx)(e_.c, { className: eb().header, isActive: !0 })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(aH, {
                                  album: o.meta,
                                  actionButton: n,
                                  className: eb().header,
                                  contextMenuChildren: (0, i.jsx)(al, { albumId: o.meta.id, albumTitle: o.meta.title, albumCoverUri: o.meta.coverUri }),
                              }),
                              (0, i.jsx)(aX.wI, {
                                  className: a_().tabCarousel,
                                  ...t,
                                  onTabChange: l,
                                  ref: d,
                                  children: ad.nd.map((e, t) => (0, i.jsx)(az.o, { className: a_().tab, title: a[e], value: t }, e)),
                              }),
                              r,
                          ],
                      });
            });
            var aV = a(65912);
            let aK = (0, l.PA)((e) => {
                    var t, a;
                    let { content: l, from: s, utmLink: n, getStorePlayContextParams: o } = e,
                        { album: d, sonataState: c } = (0, _.g)(),
                        { formatMessage: u } = (0, ei.A)(),
                        m = tc({ album: d }),
                        b = tA({
                            element: (e, t) => {
                                if (e.data && e.type !== tt.r.TEXT)
                                    return (0, i.jsx)(ef.B, {
                                        objectType: r.DomainObjectType.Track,
                                        objectId: String(e.data.id),
                                        objectPosX: 1,
                                        objectPosY: t + 1,
                                        objectsCount: d.items.length,
                                        children: (0, i.jsx)(aA.K, {
                                            track: e.data,
                                            viewType: aV.D.ALBUM,
                                            position: e.position,
                                            playContextParams: o(t, {
                                                contextData: { type: ev.K.Album, meta: d.contextMeta, from: s, utmLink: n },
                                                queueParams: { index: e.positionInContext, entityId: e.data.id },
                                                loadContextMeta: !0,
                                                entitiesData: c.unloadedEntitiesDataFromModels,
                                            }),
                                        }),
                                    });
                            },
                            isNonMusic: !0,
                            album: d,
                        }),
                        p = l.isAbout ? 0 : d.items.length || 10,
                        v = ((e) => {
                            let { content: t, title: a, formatMessage: i } = e;
                            if (t.withTrackList)
                                return i('audiobook' === t.listType ? { id: 'non-music.audiobook-list' } : { id: 'podcast.episodes-list' }, { albumName: a || '' });
                        })({ content: l, title: null == (t = d.meta) ? void 0 : t.title, formatMessage: u });
                    return l.withTrackList
                        ? (0, i.jsx)(ta.F, {
                              blockType: r.EntityTypes.Episodes,
                              blockId: r.EntityTypes.Episodes,
                              blockPosX: 1,
                              blockPosY: 2,
                              objectsCount: p,
                              mainObjectId: String(null == (a = d.meta) ? void 0 : a.id),
                              mainObjectType: r.DomainObjectType.Album,
                              children: (0, i.jsx)(t1, { count: p, getDataByRange: m, itemContentCallback: b, role: 'tabpanel', ariaLabel: v }),
                          })
                        : null;
                }),
                aY = (0, l.PA)(() => {
                    var e, t, a, l, o, d, c, m, p, h, j;
                    let g = (0, s.useRef)(0),
                        y = (0, tl.w)(),
                        { album: f, experiments: C, slides: T } = (0, _.g)(),
                        P = (null == (e = f.meta) ? void 0 : e.isAudiobook) ? N._Q.AUDIOBOOK : N._Q.PODCAST,
                        I = (null == (t = f.meta) ? void 0 : t.isAudiobook) ? ey.U.AUDIOBOOK : ey.U.PODCAST,
                        { from: O, utmLink: L } = (0, eC.f)({ pageId: P, blockId: I, contextType: ev.K.Album, contextId: f.id }),
                        { href: S } = (0, k.u)('/slides/podcast/:podcastId', { params: { podcastId: null != (j = f.id) ? j : '' } }),
                        E = (0, x.Z)(S),
                        B = (0, s.useId)(),
                        { formatMessage: w } = (0, ei.A)(),
                        M = (0, n.useSearchParams)(),
                        D = (0, ah.X)(),
                        R = C.checkExperiment(ts.z.WebNextRewind2024, 'on') && (null == (a = f.meta) ? void 0 : a.isPodcast),
                        U = (0, s.useMemo)(() => {
                            let { index: e } = ab(M.get(A.K.ACTIVE_TAB));
                            return e;
                        }, [M]),
                        H = (0, ao.zb)(U),
                        [z, X] = (0, s.useState)(ad.nd[H.value]);
                    (0, s.useEffect)(
                        () => () => {
                            ((g.current = 0), T.resetPodcast());
                        },
                        [f, T],
                    );
                    let F = (0, s.useMemo)(() => {
                            var e, t;
                            let a = R && T.podcastSlidesLoadingState === td.G.RESOLVE && !!(null == (e = T.podcastItems) ? void 0 : e.length),
                                l = { '--action-button-color-background': (0, ap.W)(null == (t = f.meta) ? void 0 : t.averageColor) };
                            return a
                                ? (0, i.jsx)(b.$, {
                                      className: a_().rewindControl,
                                      style: l,
                                      withRipple: !1,
                                      withHover: !1,
                                      radius: 'xxxl',
                                      size: 's',
                                      color: 'primary',
                                      onClick: E,
                                      variant: 'default',
                                      role: 'link',
                                      children: (0, i.jsx)(v.HL, { variant: 'span', lineClamp: 1, children: (0, i.jsx)(u.A, { id: 'rewind.button-title' }) }),
                                  })
                                : null;
                        }, [null == (l = f.meta) ? void 0 : l.averageColor, R, E, null == (o = T.podcastItems) ? void 0 : o.length, T.podcastSlidesLoadingState]),
                        V = (0, s.useMemo)(() => {
                            var e, t;
                            return ((e) => {
                                let { isFairyTale: t, isAudiobook: a, tracksCount: i, formatMessage: l } = e;
                                return t
                                    ? { about: l({ id: 'non-music.fairytale-tab-about' }), 'track-list': l({ id: 'non-music.audiobook-tab-tracks' }) }
                                    : a
                                      ? { about: l({ id: 'non-music.audiobook-tab-about' }), 'track-list': l({ id: 'non-music.audiobook-tab-tracks' }) }
                                      : { about: l({ id: 'podcast.tab-about' }), 'track-list': l({ id: 'podcast.tab-tracks' }, { value: i }) };
                            })({
                                isFairyTale: null == (e = f.meta) ? void 0 : e.isFairyTale,
                                isAudiobook: null == (t = f.meta) ? void 0 : t.isAudiobook,
                                tracksCount: f.tracks.length,
                                formatMessage: w,
                            });
                        }, [null == (d = f.meta) ? void 0 : d.isAudiobook, null == (c = f.meta) ? void 0 : c.isFairyTale, f.tracks.length, w]),
                        K = (0, s.useMemo)(
                            () => (e) => {
                                var t;
                                if (!H.onTabChange || e === H.value) return;
                                H.onTabChange(e);
                                let a = null != (t = ad.nd[e]) ? t : am.O.ABOUT;
                                X(a);
                                let i = (0, av.b)(A.K.ACTIVE_TAB, a);
                                i && D(i);
                            },
                            [H, D],
                        ),
                        Y = ((e) => {
                            let { formatMessage: t } = (0, ei.A)();
                            return ((e, t) => {
                                let { minutes: a, hours: i } = J(e),
                                    l = '';
                                return (
                                    i > 0 && (l += t({ id: 'time.hours' }, { hours: i })),
                                    a > 0 && ((l += l.length > 0 ? ' ' : ''), (l += t({ id: 'time.minutes-left' }, { minutes: a }))),
                                    l
                                );
                            })(e, t);
                        })((null == (m = f.meta) ? void 0 : m.durationSec) || 0),
                        W = (0, s.useMemo)(() => {
                            let e = ((e, t) => {
                                var a, i, l;
                                let { album: s, description: n, labels: r, contentWarning: o, durationText: d } = e,
                                    c = (0, t9.p)({ labels: r, type: null == s ? void 0 : s.type }),
                                    u = (0, au.A)(o),
                                    m = !!(null == s ? void 0 : s.durationSec),
                                    b = ''.concat(t(Number(c.count) > 1 ? { id: 'podcast.publishers-title' } : { id: 'podcast.publisher-title' }), ':');
                                return {
                                    description: n ? (0, eo.ky)(n) : null,
                                    hasInfo: !!((null == s || null == (a = s.artists) ? void 0 : a.length) || m || (null == r ? void 0 : r.length) || u),
                                    readers: null == s || null == (i = s.artists) ? void 0 : i.map((e) => e.name).join(', '),
                                    withDuration: m,
                                    isExplicit: u,
                                    readersTitle: ''.concat(
                                        t(
                                            Number(null == s || null == (l = s.artists) ? void 0 : l.length) > 1
                                                ? { id: 'non-music.audiobook-artists' }
                                                : { id: 'non-music.audiobook-artist' },
                                        ),
                                        ':',
                                    ),
                                    durationTitle: ''.concat(t({ id: 'time.duration' }), ':'),
                                    ageLimitTitle: ''.concat(t({ id: 'podcast.age-limit' }), ':'),
                                    ageLimit: ac.JU.AGE_18,
                                    durationText: d,
                                    publisher: ((e, t) => {
                                        let { labels: a, title: i } = e;
                                        return a.hasLabels ? { kind: 'labels', labels: t8(a, t) } : a.names ? { kind: 'text', title: i, names: a.names } : null;
                                    })({ labels: c, title: b }, t),
                                };
                            })({ album: f.meta, description: f.description, labels: f.labels, contentWarning: f.contentWarning, durationText: Y }, w);
                            return (0, i.jsx)(ay, { album: f, about: e, tabValue: H.value, tabElementId: B });
                        }, [f, w, Y, H.value, B]);
                    (0, s.useEffect)(() => {
                        f.isResolved && (f.loadLastEpisodes(), f.getRelatedContent());
                    }, [f, f.isResolved, f.loadLastEpisodes, f.getRelatedContent]);
                    let $ = ((e, t) => {
                            let { type: a, activeTab: i, lastEpisodesCount: l } = e,
                                s = i === am.O.ABOUT,
                                n = i === am.O.TRACKS,
                                r = a === q._.AUDIOBOOK ? 'audiobook' : 'podcast';
                            return {
                                isAbout: s,
                                withTrackList: n,
                                withLastEpisodes: s && a === q._.PODCAST && l > 0,
                                listType: n ? r : null,
                                lastEpisodesTitle: t({ id: 'entity-names.podcast-last-episodes' }),
                                lastEpisodesListLabel: t({ id: 'podcast.last-episodes-list' }),
                            };
                        })({ type: null == (p = f.meta) ? void 0 : p.type, activeTab: z, lastEpisodesCount: f.lastEpisodes.length }, w),
                        G = R && T.podcastSlidesLoadingState === td.G.IDLE;
                    return (
                        'number' == typeof f.id && G && (0, s.use)(T.getPodcastSlides({ podcastId: f.id })),
                        (0, i.jsxs)(ti.h, {
                            tabId: null != z ? z : am.O.ABOUT,
                            tabPos: H.value + 1,
                            isTabSelectedByDefault: !1,
                            children: [
                                (0, i.jsx)(ta.F, {
                                    blockType: r.EntityTypes.Header,
                                    blockId: r.EntityTypes.Header,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    mainObjectId: String(null == (h = f.meta) ? void 0 : h.id),
                                    mainObjectType: r.DomainObjectType.Podcast,
                                    objectsCount: 1,
                                    children: (0, i.jsx)(aF, { tabsState: H, tabsTexts: V, onTabChange: K, actionButton: F, children: W }),
                                }),
                                (0, i.jsx)(aK, { content: $, from: O, utmLink: L, getStorePlayContextParams: y }),
                                (0, i.jsx)(aE, { content: $ }),
                            ],
                        })
                    );
                }),
                aW = (0, l.PA)((e) => {
                    var t, a, l, u, m, b, p, v, h, x, j, g;
                    let { albumId: N, trackId: L, preloadedAlbum: E, preloadedCpa: X, isTrackLegalRejected: F } = e,
                        { contentScrollRef: V, setContentScrollRef: K } = (0, M.g)(),
                        Y = (0, n.useSearchParams)(),
                        W = ((e) => {
                            let { searchParams: t = {} } = e;
                            return 'bandlink' === t[A.K.UTM_SOURCE] || !!t[A.K.CLID] || !!t[A.K.REF_ID];
                        })({ searchParams: Object.fromEntries(Y.entries()) }),
                        { user: $, album: G, disclaimerModalState: q, track: Z, sonataState: Q, albumCPA: J } = (0, _.g)(),
                        { checkIsValidClid: ee, setClidToQuery: et, deleteClidFromQuery: eo } = (0, w.I)(),
                        ed = (0, S.y)(null == (t = G.meta) ? void 0 : t.averageColor),
                        { headerStyle: ec } = (0, f.Q)(ed),
                        em = (0, I.l)({ mainObjectType: null != (x = null == (a = G.meta) ? void 0 : a.mainObjectType) ? x : r.DomainObjectType.Album }),
                        { deprecationUrl: ep, shouldRedirect: ev } = ((e) => {
                            let { albumId: t, deprecationTargetAlbumId: a, trackId: i, realId: l, searchParams: s } = e,
                                n = Number(t),
                                r = new URLSearchParams(s);
                            (r.delete('albumId'), r.delete('trackId'));
                            let o = Object.fromEntries(r);
                            if ('number' == typeof a && a !== n) {
                                if (i) {
                                    let { href: e } = (0, k.u)('/album/:albumId/track/:trackId', { params: { albumId: a, trackId: i }, query: o });
                                    return { deprecationUrl: e, shouldRedirect: !0 };
                                }
                                let { href: e } = (0, k.u)('/album/:albumId', { params: { albumId: a }, query: o });
                                return { deprecationUrl: e, shouldRedirect: !0 };
                            }
                            if (i && l && l !== i) {
                                let { href: e } = (0, k.u)('/album/:albumId/track/:trackId', { params: { albumId: t, trackId: l }, query: o });
                                return { deprecationUrl: e, shouldRedirect: !0 };
                            }
                            return { deprecationUrl: '', shouldRedirect: !1 };
                        })({
                            albumId: N,
                            deprecationTargetAlbumId: G.deprecationTargetAlbumId,
                            trackId: L,
                            realId: (null == (l = Z.meta) ? void 0 : l.id) === L ? (null == (u = Z.meta) ? void 0 : u.realId) : void 0,
                            searchParams: Y,
                        }),
                        eh = (0, T.c)({ album: G.meta, shouldHistoryBack: !0 }),
                        ex = !!(null == (m = G.meta) ? void 0 : m.isNonMusic),
                        e_ = !!(L && F);
                    ((0, P.A)(),
                        ((e) => {
                            var t;
                            let { albumId: a, trackId: i, isNonMusic: l } = e,
                                { setDeeplink: n } = null != (t = (0, er.P)()) ? t : {};
                            (0, s.useEffect)(() => {
                                if (i) {
                                    let e = l ? void 0 : { playTrack: i, openPlayer: !0, lyricsMode: !0 },
                                        { href: t } = (0, k.u)('/album/:albumId/track/:trackId', { params: { albumId: a, trackId: i }, query: e });
                                    null == n || n(t);
                                } else {
                                    let { href: e } = (0, k.u)('/album/:albumId', { params: { albumId: a } });
                                    null == n || n(e);
                                }
                                return () => {
                                    null == n || n(null);
                                };
                            }, [a, l, n, i]);
                        })({ albumId: N, trackId: L, isNonMusic: ex }),
                        (0, s.useEffect)(() => {
                            var e;
                            (null == (e = G.meta) ? void 0 : e.isUnsafeLegal) && eh();
                        }, [null == (b = G.meta) ? void 0 : b.isUnsafeLegal, eh]),
                        (0, s.useLayoutEffect)(
                            () => (
                                L && N && !e_ && Z.open({ trackId: L, albumId: Number(N) }),
                                () => {
                                    Z.reset();
                                }
                            ),
                            [N, e_, L, Z],
                        ),
                        (0, s.useEffect)(() => {
                            var e;
                            e_ && (null == (e = Z.meta) ? void 0 : e.resolveAllDisclaimers) && Z.meta.resolveAllDisclaimers();
                        }, [e_, Z.meta]),
                        (0, s.useEffect)(() => {
                            ee(J.cpa, Number(N)) || eo();
                        }, [ee, N, J.cpa, eo]),
                        (0, s.useEffect)(
                            () => (
                                G.id && G.id !== Number(N) && (G.reset(Q), eo()),
                                () => {
                                    (G.reset(Q), eo());
                                }
                            ),
                            [G, N, Q, eo, J],
                        ),
                        (0, D.J)(G.isResolved),
                        ((e, t, a, i, l) => {
                            var n, r;
                            let { fullscreenVideoPlayer: o } = (0, _.g)(),
                                d = null == e ? void 0 : e.meta,
                                c = null == e ? void 0 : e.isLoading,
                                u = null == e ? void 0 : e.isRejected,
                                m = null == d ? void 0 : d.isLegalRejected,
                                b = null == i ? void 0 : i.isLegalRejected,
                                p = null == i || null == (n = i.resolvedModalData) ? void 0 : n.title,
                                v = null == d || null == (r = d.resolvedModalData) ? void 0 : r.title,
                                h = (0, s.useCallback)(
                                    (e) => {
                                        if (a && (l || b)) {
                                            if (!p) return;
                                            return { title: p };
                                        }
                                        if (m) {
                                            if (!v) return;
                                            return { title: v };
                                        }
                                        return t ? void 0 : u ? {} : d && !c ? ea((0, H.f)(d), e) : void 0;
                                    },
                                    [d, c, u, m, v, l, a, b, p, t],
                                );
                            (0, z.C)(o.modal.isOpened ? null : h);
                        })(G, Z.isOpened, L, Z.meta, e_),
                        (0, s.useEffect)(
                            () => (
                                em(!0),
                                () => {
                                    em(!1);
                                }
                            ),
                            [N, em],
                        ));
                    let ej = (0, d.L)(() => (ex ? (0, i.jsx)(aY, {}) : (0, i.jsx)(ar, {}))),
                        eg = [];
                    (N &&
                        G.isNeededToLoad &&
                        (eg.push(G.getData({ albumId: Number(N), resumeStream: !1, preloadedAlbum: E, sonataState: Q }), G.getDonations({ albumId: Number(N) })),
                        (W || X) && eg.push(J.getCpa({ albumId: Number(N), preloadedCpa: X }))),
                        eg.length && (0, s.use)(Promise.allSettled(eg)),
                        (0, s.useEffect)(() => {
                            J.cpa && G.id && et(J.cpa, G.id);
                        }, [J.cpa, G.id, et]),
                        G.isNotFound && (0, n.notFound)(),
                        ev && (0, n.redirect)(ep),
                        ((e) => {
                            let { album: t } = e,
                                a = (0, s.useRef)(0),
                                { notify: l } = (0, es.l)(),
                                { formatMessage: n } = (0, ei.A)();
                            (0, s.useMemo)(
                                () => () => {
                                    if (!t.isNotFound && (t.isRejected || (!t.meta && !t.isLoading))) {
                                        var e;
                                        if (!a || a.current > 0) return;
                                        let s = (null == (e = t.meta) ? void 0 : e.isPodcast)
                                            ? n({ id: 'podcast-errors.error-during-loading-podcast' })
                                            : n({ id: 'album-errors.error-during-loading-album' });
                                        (l((0, i.jsx)(en.h, { error: s }), { containerId: el.u.ERROR }), a.current++);
                                    }
                                },
                                [t.isLoading, t.isNotFound, t.isRejected, t.meta, n, l],
                            )();
                        })({ album: G }));
                    let ey = e_
                        ? null != (j = null == (p = Z.meta) ? void 0 : p.resolvedModalData)
                            ? j
                            : null
                        : null != (g = null == (v = G.meta) ? void 0 : v.resolvedModalData)
                          ? g
                          : null;
                    if (G.isCacheNotFound) return (0, i.jsx)(y, {});
                    if ((null == (h = G.meta) ? void 0 : h.isLegalRejected) || e_) return (0, i.jsx)(R.M, { modalState: q, data: ey });
                    let eA = ex ? o.Xk.album.NON_MUSIC_ALBUM_PAGE : o.Xk.album.ALBUM_PAGE;
                    return (0, i.jsx)(B, {
                        pageAlbumId: Number(N),
                        children: (0, i.jsx)(O.j, {
                            children: (0, i.jsxs)(C.h, {
                                scrollElement: V,
                                children: [
                                    (0, i.jsx)(U.Y, {}),
                                    (0, i.jsxs)(c.C, {
                                        scrollableContainerRef: K,
                                        className: eb().root,
                                        containerClassName: eb().content,
                                        scrollContentClassName: eb().scrollContent,
                                        'data-test-id': eA,
                                        children: [(0, i.jsx)('div', { className: eb().averageColorBackground, style: ec }), ej, (0, i.jsx)(eu, { user: $, album: G })],
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                a$ = (0, l.PA)((e) => (0, i.jsx)(L.n, { pageId: N._Q.ALBUM, pageEntityId: e.albumId, children: (0, i.jsx)(aW, { ...e }) }));
        },
        99415: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => m });
            var i = a(78793),
                l = a(54577),
                s = a(90780),
                n = a(29993),
                r = a(37436),
                o = a(34500),
                d = a(46166),
                c = a(14518),
                u = a(65523);
            let m = () => {
                let { hash: e } = (0, s.gf)(),
                    t = (0, u.U)(),
                    a = (0, s.st)(),
                    { pageId: m } = (0, c.$)(),
                    { blockId: b, blockType: p, blockPosX: v, blockPosY: h } = (0, o.N)(),
                    { objectType: x, objectId: _, objectPosX: j, objectPosY: g, objectsCount: y, mainObjectId: A, mainObjectType: f } = (0, d.J)();
                return (0, n.c)((s, n) => {
                    if (!a || !m) return;
                    let o = r.W[m];
                    if (!o) return;
                    let d = (0, i.F)({
                        params: {
                            objectType: x,
                            objectId: _,
                            objectPosX: j,
                            objectPosY: g,
                            hash: e,
                            pageId: o,
                            mainObjectType: f,
                            mainObjectId: A,
                            entityType: p,
                            entityId: b,
                            entityPosX: v,
                            entityPosY: h,
                            objectsCount: y,
                            viewUuid: n,
                        },
                        logger: t,
                        context: 'useSendEventOnDonationShowedOrHidden',
                    });
                    d && (s ? (0, l.Pf)(a.evgenInstance, d) : (0, l.nv)(a.evgenInstance, d));
                });
            };
        },
    },
]);
