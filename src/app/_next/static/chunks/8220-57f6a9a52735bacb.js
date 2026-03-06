(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8220],
    {
        5693: (t, e, i) => {
            'use strict';
            var s;
            i.d(e, { R: () => s }),
                (function (t) {
                    (t.Music = 'music'),
                        (t.DownloadedMusic = 'downloadedMusic'),
                        (t.VibeTrack = 'vibeTrack'),
                        (t.Generative = 'generative'),
                        (t.Unknown = 'unknown'),
                        (t.SmartPreview = 'smartPreview'),
                        (t.Clip = 'clip'),
                        (t.Radio = 'fm_radio');
                })(s || (s = {}));
        },
        12744: (t) => {
            t.exports = { root: 'Slider_root__T7EOX', root_visible: 'Slider_root_visible__b3Kqx', fade: 'Slider_fade__V7FGV', container: 'Slider_container__tZ0VH' };
        },
        16605: (t) => {
            t.exports = { root: 'SliderControls_root__v_ofj', control: 'SliderControls_control__E3joM', top: 'SliderControls_top__HN5gZ' };
        },
        27820: (t) => {
            t.exports = {
                root: 'SlidesPage_root__URM_B',
                header: 'SlidesPage_header__pnBx9',
                slidesResult: 'SlidesPage_slidesResult__neqIE',
                counterActiveItem: 'SlidesPage_counterActiveItem__Y_K9I',
                counterItem: 'SlidesPage_counterItem__3CqZW',
                button: 'SlidesPage_button__s9V8y',
                volumeButton: 'SlidesPage_volumeButton__HfFCM',
                desktopBackButton: 'SlidesPage_desktopBackButton__ae1Uj',
                mobileBackButton: 'SlidesPage_mobileBackButton__MwOgB',
            };
        },
        31144: (t) => {
            t.exports = { root: 'Slide_root__x5JEM', root_isActive: 'Slide_root_isActive__CKUSv' };
        },
        46215: (t) => {
            t.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        46965: (t, e, i) => {
            'use strict';
            i.d(e, { SlidesPage: () => z });
            var s = i(54486),
                a = i(50420),
                n = i(28303),
                o = i(97396),
                r = i(61910),
                l = i(43426),
                d = i(47713),
                u = i(43350),
                c = i(31500),
                h = i(8817),
                p = i(77881),
                m = i(5956),
                g = i(39610),
                f = i(97800),
                S = i(89461),
                v = i(91657),
                _ = i(36553),
                b = i(62443),
                x = i(83252),
                V = i(16605),
                E = i.n(V);
            let I = (t) => {
                let { isFirstSlide: e, isLastSlide: i, style: a } = t,
                    n = (0, _.Mn)(),
                    { formatMessage: o } = (0, l.A)(),
                    d = (0, r.useCallback)(() => {
                        n.slidePrev();
                    }, [n]),
                    u = (0, r.useCallback)(() => {
                        n.slideNext();
                    }, [n]);
                return (0, s.jsxs)('div', {
                    className: E().root,
                    style: a,
                    children: [
                        (0, s.jsx)(p.$, {
                            variant: 'outline',
                            iconClassName: E().top,
                            size: 'm',
                            radius: 'round',
                            onClick: d,
                            disabled: e,
                            icon: (0, s.jsx)(m.Icon, { variant: 'arrowDown', size: 'xxs' }, 'prevIcon'),
                            withRipple: !1,
                            'aria-label': o({ id: 'slider.prev-slide' }),
                            className: E().control,
                        }),
                        (0, s.jsx)(p.$, {
                            variant: 'outline',
                            size: 'm',
                            radius: 'round',
                            onClick: u,
                            disabled: i,
                            icon: (0, s.jsx)(m.Icon, { variant: 'arrowDown', size: 'xxs' }, 'nextIcon'),
                            withRipple: !1,
                            'aria-label': o({ id: 'slider.next-slide' }),
                            className: E().control,
                        }),
                    ],
                });
            };
            var k = i(63585),
                y = i(77710),
                j = i(6971),
                A = i(92830),
                w = i(31144),
                N = i.n(w);
            let F = (t) => {
                var e;
                let { slide: i, isVisible: n } = t,
                    { ref: o, intersectionPropertyId: l } = (0, x.nMI)(),
                    d = (0, x.eGp)(),
                    { from: u } = (0, x.fyy)({ pageId: x._Q$.TRAILER_OF_THE_YEAR, blockId: x.UfI.DEFAULT }),
                    c = (0, x.brA)(),
                    { isActive: h } = (0, _.JO)(),
                    p = null == d ? void 0 : d.getState(x.V_r.TRAILER).queueState.entityList.value,
                    m = (0, r.useMemo)(
                        () =>
                            i.entitiesData &&
                            p &&
                            i.entitiesData.every((t, e) => {
                                var i;
                                return t.meta.id === (null == (i = p[e]) ? void 0 : i.entity.data.meta.id);
                            }),
                        [i.entitiesData, p],
                    ),
                    g = n && i.hasTrailer && (!m || (null == d ? void 0 : d.getState(x.V_r.TRAILER).playerState.status.value) !== S.MT.PLAYING),
                    f = g && (null == d || null == (e = d.getState(x.V_r.TRAILER).currentContext.value) ? void 0 : e.data.meta.id) === i.id;
                return (
                    (0, r.useEffect)(() => {
                        if (f)
                            return void d.restartContext({ playAfterRestart: !0, queueParams: { index: 0 }, entitiesData: i.entitiesData }, x.V_r.TRAILER).then(() => {
                                c(!0);
                            });
                        g &&
                            (null == d ||
                                d
                                    .playContext(
                                        {
                                            contextData: { type: k.K.Various, overrideContextType: y.b.Other, trailer: !0, meta: { id: i.id }, from: u },
                                            queueParams: { index: 0 },
                                            entitiesData: i.entitiesData,
                                            loadContextMeta: !1,
                                        },
                                        x.V_r.TRAILER,
                                    )
                                    .then(() => {
                                        c(!0);
                                    }));
                    }, [u, c, g, f, i.entitiesData, i.id, d]),
                    (0, s.jsx)(j.Paper, {
                        className: (0, a.$)(N().root, { [N().root_isActive]: h }),
                        radius: 'l',
                        tabIndex: 0,
                        'data-intersection-property-id': l,
                        ref: o,
                        children: (0, s.jsx)(A.AR, { slide: i, isActive: h }),
                    })
                );
            };
            var P = i(12744),
                C = i.n(P);
            let T = (0, n.PA)((t) => {
                let { items: e } = t,
                    {
                        settings: { isMobile: i },
                        slides: n,
                    } = (0, x.Pjs)(),
                    { formatMessage: o } = (0, l.A)(),
                    { state: d, toggleTrue: c } = (0, b.e)(!1),
                    h = (0, _.Mn)(),
                    p = (0, x.fBs)(),
                    m = (0, r.useRef)(!1),
                    [g, f] = (0, r.useState)(!0),
                    [S, V] = (0, r.useState)(!1);
                (0, r.useEffect)(
                    () => (
                        c(),
                        () => {
                            null == h || h.slideTo(0), n.setActiveSlide(0);
                        }
                    ),
                    [c, h, n],
                ),
                    (0, r.useEffect)(() => {
                        n.isLoaded && !m.current && (p(), (m.current = !0));
                    }, [n.isLoaded, p]);
                let E = (0, r.useCallback)(
                    (t) => {
                        f(t.isBeginning), V(t.isEnd), n.setActiveSlide(t.activeIndex);
                    },
                    [n],
                );
                return (0, s.jsx)('div', {
                    className: (0, a.$)(C().root, { [C().root_visible]: d }),
                    children: (0, s.jsxs)(_.RC, {
                        direction: 'vertical',
                        centeredSlides: !i,
                        slidesPerView: 'auto',
                        spaceBetween: 16,
                        className: C().container,
                        keyboard: { enabled: !0 },
                        modules: [v.s3, v.Jq, v.FJ],
                        onActiveIndexChange: E,
                        a11y: { enabled: !0, containerMessage: o({ id: 'page.results-of-the-year' }) },
                        mousewheel: { thresholdDelta: 30, thresholdTime: 500 },
                        children: [
                            e.map((t, i) => {
                                var a, o;
                                return (0, s.jsx)(
                                    _.qr,
                                    {
                                        children: (0, s.jsx)(x.FoH, {
                                            blockPosX: 1,
                                            blockPosY: i + 1,
                                            blockType: null == (a = t.content) ? void 0 : a.type,
                                            blockId: t.id,
                                            mainObjectId: n.mainObjectId,
                                            mainObjectType: u.ky.Slide,
                                            children: (0, s.jsx)(x.Bki, {
                                                objectType: u.ky.SlideContent,
                                                objectId: '',
                                                objectPosX: (null != (o = t.carouselIndex) ? o : 0) + 1,
                                                objectPosY: 1,
                                                objectsCount: e.length,
                                                children: (0, s.jsx)(F, { isVisible: n.activeSlide === i, slide: t }),
                                            }),
                                        }),
                                    },
                                    t.id,
                                );
                            }),
                            (0, s.jsx)(I, { isFirstSlide: g, isLastSlide: S }),
                        ],
                    }),
                });
            });
            var L = i(27820),
                R = i.n(L);
            function D(t, e) {
                return (t === x.GuX.RESOLVE || t === x.GuX.REJECT) && 0 === e.length;
            }
            let z = (0, n.PA)((t) => {
                var e;
                let { slidesConsumer: i, artistId: n, podcastId: v, campaignId: _ } = t,
                    { formatMessage: b } = (0, l.A)(),
                    { slides: V, experiments: E, sonataState: I, settings: k } = (0, x.Pjs)(),
                    y = (0, x.eGp)(),
                    j = E.checkExperiment(x.zal.WebNextSlidesPage, 'on'),
                    w = !(null == (e = k.browserInfo) ? void 0 : e.isMobile) || !k.browserInfo.isTouch,
                    N = null == y ? void 0 : y.getState(x.V_r.TRAILER),
                    F = (0, h.c)((t) => {
                        null == y || y.setExponentVolume(t, x.V_r.TRAILER);
                    });
                (0, r.useEffect)(() => {
                    F(1), V.setIsMuted(!1);
                }, [F, V, y]);
                let { canBack: P, moveBack: C } = (0, x.JD0)(x.Zyd.main.href),
                    L = (0, x.ZpR)(x.Zyd.main.href);
                (0, r.useEffect)(
                    () => () => {
                        V.resetUser(), V.resetArtist(), V.resetPodcast(), V.resetSpecial(), V.resetKids(), null == y || y.pause(x.V_r.TRAILER);
                    },
                    [V, y],
                ),
                    j || (0, o.notFound)();
                let z = (0, x.zxo)(V.mainObjectId);
                (0, r.useEffect)(() => {
                    I.status === S.MT.PLAYING && (null == y || y.togglePause());
                }, [y, I.status]),
                    (0, r.useEffect)(
                        () => (
                            z(!0),
                            () => {
                                z(!1);
                            }
                        ),
                        [z],
                    );
                let O = (0, r.useMemo)(() => {
                    switch (i) {
                        case A.z6.USER:
                            return V.userItems;
                        case A.z6.ARTIST:
                            return V.artistItems;
                        case A.z6.PODCAST:
                            return V.podcastItems;
                        case A.z6.SPECIAL:
                            return V.specialItems;
                        case A.z6.KIDS:
                            return V.kidsItems;
                    }
                }, [V.artistItems, V.kidsItems, V.podcastItems, V.specialItems, V.userItems, i]);
                (0, r.useEffect)(() => {
                    if (j)
                        switch (i) {
                            case A.z6.USER:
                                D(V.userSlidesLoadingState, O) && (0, o.notFound)();
                                break;
                            case A.z6.ARTIST:
                                D(V.artistSlidesLoadingState, O) && (0, o.notFound)();
                                break;
                            case A.z6.PODCAST:
                                D(V.podcastSlidesLoadingState, O) && (0, o.notFound)();
                                break;
                            case A.z6.SPECIAL:
                                D(V.specialSlidesLoadingState, O) && (0, o.notFound)();
                                break;
                            case A.z6.KIDS:
                                D(V.kidsSlidesLoadingState, O) && (0, o.notFound)();
                        }
                    else (0, o.notFound)();
                }, [
                    E,
                    j,
                    O,
                    O.length,
                    V.artistSlidesLoadingState,
                    V.podcastSlidesLoadingState,
                    V.userSlidesLoadingState,
                    V.specialSlidesLoadingState,
                    i,
                    V.kidsSlidesLoadingState,
                ]),
                    (0, x.NBO)(!0);
                let B = (0, r.useMemo)(() => {
                        var t;
                        let e,
                            i = null == (t = O[V.activeSlide]) ? void 0 : t.slideColor;
                        if (i) {
                            let { r: t, g: s, b: a } = (0, x.E2N)(i);
                            e = 'rgba('.concat(t, ', ').concat(s, ', ').concat(a, ', 0.5)');
                        }
                        return { '--card-color-enabled_variant': i, '--card-color-enabled': e, '--logo-color': i };
                    }, [O, O.length, V.activeSlide]),
                    M = (0, r.useCallback)(() => {
                        V.toggleMute(), (null == N ? void 0 : N.playerState.exponentVolume.value) !== 0 ? F(0) : F(1);
                    }, [F, V, null == N ? void 0 : N.playerState.exponentVolume.value]),
                    G = (0, h.c)(() => {
                        P ? C() : L();
                    }),
                    $ = V.isMuted ? 'volumeOff' : 'volume',
                    q = b(V.isMuted ? { id: 'player-actions.volume-off' } : { id: 'player-actions.volume-on' });
                switch (i) {
                    case A.z6.USER:
                        V.userSlidesLoadingState === x.GuX.IDLE && (0, r.use)(V.getUserSlides());
                        break;
                    case A.z6.ARTIST:
                        n && V.artistSlidesLoadingState === x.GuX.IDLE && (0, r.use)(V.getArtistSlides({ artistId: n }));
                        break;
                    case A.z6.PODCAST:
                        v && V.podcastSlidesLoadingState === x.GuX.IDLE && (0, r.use)(V.getPodcastSlides({ podcastId: Number(v) }));
                        break;
                    case A.z6.SPECIAL:
                        _ && V.specialSlidesLoadingState === x.GuX.IDLE && (0, r.use)(V.getSpecialSlides({ campaignId: _ }));
                        break;
                    case A.z6.KIDS:
                        V.kidsSlidesLoadingState === x.GuX.IDLE && (0, r.use)(V.getKidsSlides());
                }
                return (0, s.jsx)(x.jPc, {
                    children: (0, s.jsx)(x.nVz, {
                        pageId: x._Q$.SLIDES_SCREEN,
                        children: (0, s.jsxs)('div', {
                            className: R().root,
                            style: B,
                            ...(0, c.Am)(c.Xk.slides.SLIDES_PAGE),
                            children: [
                                (0, s.jsx)(g.q, { children: (0, s.jsx)(f.Heading, { variant: 'h1', children: (0, s.jsx)(d.A, { id: 'page.results-of-the-year' }) }) }),
                                (0, s.jsxs)('header', {
                                    className: R().header,
                                    children: [
                                        (null == O ? void 0 : O.length) > 0 &&
                                            (0, s.jsxs)('div', {
                                                className: R().slidesResult,
                                                children: [
                                                    (0, s.jsx)(f.Caption, {
                                                        variant: 'span',
                                                        className: R().counterActiveItem,
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        children: Number(V.activeSlide) + 1,
                                                    }),
                                                    (0, s.jsx)(f.Caption, {
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        className: R().counterItem,
                                                        children: '/',
                                                    }),
                                                    (0, s.jsx)(f.Caption, {
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        className: R().counterItem,
                                                        children: null == O ? void 0 : O.length,
                                                    }),
                                                ],
                                            }),
                                        w &&
                                            (0, s.jsx)(p.$, {
                                                'aria-label': q,
                                                variant: 'text',
                                                radius: 'round',
                                                size: 'xxxs',
                                                icon: (0, s.jsx)(m.Icon, { size: 'xs', className: R().icon, variant: $ }),
                                                onClick: M,
                                                className: (0, a.$)(R().button, R().volumeButton),
                                                withRipple: !1,
                                            }),
                                        (0, s.jsx)(p.$, {
                                            'aria-label': b({ id: 'navigation.go-back' }),
                                            radius: 'round',
                                            size: 'xs',
                                            icon: (0, s.jsx)(m.Icon, { size: 'xs', variant: 'close' }, 'handleBackIcon'),
                                            onClick: G,
                                            className: (0, a.$)(R().button, R().desktopBackButton),
                                            role: 'link',
                                        }),
                                        (0, s.jsx)(p.$, {
                                            variant: 'text',
                                            'aria-label': b({ id: 'navigation.go-back' }),
                                            radius: 'round',
                                            size: 'xs',
                                            icon: (0, s.jsx)(m.Icon, { size: 'xs', variant: 'arrowLeft' }, 'handleBackIcon'),
                                            onClick: G,
                                            className: (0, a.$)(R().button, R().mobileBackButton),
                                            role: 'link',
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(x.FoH, {
                                    mainObjectType: u.ky.Slide,
                                    mainObjectId: V.mainObjectId,
                                    blockType: u.ky.Slide,
                                    blockId: V.mainObjectId,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: O.length,
                                    children: (0, s.jsx)(T, { items: O }),
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        65034: (t, e, i) => {
            'use strict';
            i.d(e, { NotFound: () => g });
            var s = i(54486),
                a = i(50420),
                n = i(28303),
                o = i(47713),
                r = i(77881),
                l = i(5956),
                d = i(97800),
                u = i(83252),
                c = i(80585),
                h = i(61910),
                p = i(46215),
                m = i.n(p);
            let g = (0, n.PA)((t) => {
                let { className: e, title: i, description: n, iconVariant: p = 'musicLogo', iconClassName: g, iconSize: f } = t,
                    { contentRef: S } = (0, u.gKY)(),
                    v = (0, u.ZpR)(u.Zyd.main.href);
                (0, u.LZB)();
                let { handleNavigateToMain: _ } = (0, u.D5F)(v);
                return (
                    (0, u.NBO)(!0),
                    !(function () {
                        let { location: t } = (0, u.Pjs)();
                        (0, h.useEffect)(
                            () => (
                                t.setNotFound(!0),
                                () => {
                                    t.setNotFound(!1);
                                }
                            ),
                            [t],
                        );
                    })(),
                    (0, s.jsxs)('div', {
                        className: (0, a.$)(m().root, { [m().root_desktop]: !S }, e),
                        children: [
                            (0, s.jsx)(c.Lh, { withBackwardFallback: '/', className: m().navigation, withForwardControl: !1 }),
                            (0, s.jsxs)('div', {
                                className: m().content,
                                children: [
                                    (0, s.jsx)(l.Icon, { className: (0, a.$)(m().icon, g), variant: p, size: f }),
                                    (0, s.jsx)(d.Heading, {
                                        className: (0, a.$)(m().title, m().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: i || (0, s.jsx)(o.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, s.jsx)(d.Caption, {
                                        className: (0, a.$)(m().text, m().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: n || (0, s.jsx)(o.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, s.jsx)(r.$, {
                                        onClick: _,
                                        className: m().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, s.jsx)(o.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        70837: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => a });
            var s = function () {
                    return (s =
                        Object.assign ||
                        function (t) {
                            for (var e, i = 1, s = arguments.length; i < s; i++)
                                for (var a in (e = arguments[i])) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                            return t;
                        }).apply(this, arguments);
                },
                a = (function () {
                    function t(t, e, i) {
                        var a = this;
                        (this.endVal = e),
                            (this.options = i),
                            (this.version = '2.8.1'),
                            (this.defaults = {
                                startVal: 0,
                                decimalPlaces: 0,
                                duration: 2,
                                useEasing: !0,
                                useGrouping: !0,
                                useIndianSeparators: !1,
                                smartEasingThreshold: 999,
                                smartEasingAmount: 333,
                                separator: ',',
                                decimal: '.',
                                prefix: '',
                                suffix: '',
                                enableScrollSpy: !1,
                                scrollSpyDelay: 200,
                                scrollSpyOnce: !1,
                            }),
                            (this.finalEndVal = null),
                            (this.useEasing = !0),
                            (this.countDown = !1),
                            (this.error = ''),
                            (this.startVal = 0),
                            (this.paused = !0),
                            (this.once = !1),
                            (this.count = function (t) {
                                a.startTime || (a.startTime = t);
                                var e = t - a.startTime;
                                (a.remaining = a.duration - e),
                                    a.useEasing
                                        ? a.countDown
                                            ? (a.frameVal = a.startVal - a.easingFn(e, 0, a.startVal - a.endVal, a.duration))
                                            : (a.frameVal = a.easingFn(e, a.startVal, a.endVal - a.startVal, a.duration))
                                        : (a.frameVal = a.startVal + (a.endVal - a.startVal) * (e / a.duration));
                                var i = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
                                (a.frameVal = i ? a.endVal : a.frameVal),
                                    (a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces))),
                                    a.printValue(a.frameVal),
                                    e < a.duration
                                        ? (a.rAF = requestAnimationFrame(a.count))
                                        : null !== a.finalEndVal
                                          ? a.update(a.finalEndVal)
                                          : a.options.onCompleteCallback && a.options.onCompleteCallback();
                            }),
                            (this.formatNumber = function (t) {
                                var e,
                                    i,
                                    s,
                                    n = (Math.abs(t).toFixed(a.options.decimalPlaces) + '').split('.');
                                if (((e = n[0]), (i = n.length > 1 ? a.options.decimal + n[1] : ''), a.options.useGrouping)) {
                                    s = '';
                                    for (var o = 3, r = 0, l = 0, d = e.length; l < d; ++l)
                                        a.options.useIndianSeparators && 4 === l && ((o = 2), (r = 1)),
                                            0 !== l && r % o == 0 && (s = a.options.separator + s),
                                            r++,
                                            (s = e[d - l - 1] + s);
                                    e = s;
                                }
                                return (
                                    a.options.numerals &&
                                        a.options.numerals.length &&
                                        ((e = e.replace(/[0-9]/g, function (t) {
                                            return a.options.numerals[+t];
                                        })),
                                        (i = i.replace(/[0-9]/g, function (t) {
                                            return a.options.numerals[+t];
                                        }))),
                                    (t < 0 ? '-' : '') + a.options.prefix + e + i + a.options.suffix
                                );
                            }),
                            (this.easeOutExpo = function (t, e, i, s) {
                                return (i * (1 - Math.pow(2, (-10 * t) / s)) * 1024) / 1023 + e;
                            }),
                            (this.options = s(s({}, this.defaults), i)),
                            (this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber),
                            (this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo),
                            (this.startVal = this.validateValue(this.options.startVal)),
                            (this.frameVal = this.startVal),
                            (this.endVal = this.validateValue(e)),
                            (this.options.decimalPlaces = Math.max(this.options.decimalPlaces)),
                            this.resetDuration(),
                            (this.options.separator = String(this.options.separator)),
                            (this.useEasing = this.options.useEasing),
                            '' === this.options.separator && (this.options.useGrouping = !1),
                            (this.el = 'string' == typeof t ? document.getElementById(t) : t),
                            this.el ? this.printValue(this.startVal) : (this.error = '[CountUp] target is null or undefined'),
                            'undefined' != typeof window &&
                                this.options.enableScrollSpy &&
                                (this.error
                                    ? console.error(this.error, t)
                                    : ((window.onScrollFns = window.onScrollFns || []),
                                      window.onScrollFns.push(function () {
                                          return a.handleScroll(a);
                                      }),
                                      (window.onscroll = function () {
                                          window.onScrollFns.forEach(function (t) {
                                              return t();
                                          });
                                      }),
                                      this.handleScroll(this)));
                    }
                    return (
                        (t.prototype.handleScroll = function (t) {
                            if (t && window && !t.once) {
                                var e = window.innerHeight + window.scrollY,
                                    i = t.el.getBoundingClientRect(),
                                    s = i.top + window.pageYOffset,
                                    a = i.top + i.height + window.pageYOffset;
                                a < e && a > window.scrollY && t.paused
                                    ? ((t.paused = !1),
                                      setTimeout(function () {
                                          return t.start();
                                      }, t.options.scrollSpyDelay),
                                      t.options.scrollSpyOnce && (t.once = !0))
                                    : (window.scrollY > a || s > e) && !t.paused && t.reset();
                            }
                        }),
                        (t.prototype.determineDirectionAndSmartEasing = function () {
                            var t = this.finalEndVal ? this.finalEndVal : this.endVal;
                            if (((this.countDown = this.startVal > t), Math.abs(t - this.startVal) > this.options.smartEasingThreshold && this.options.useEasing)) {
                                this.finalEndVal = t;
                                var e = this.countDown ? 1 : -1;
                                (this.endVal = t + e * this.options.smartEasingAmount), (this.duration = this.duration / 2);
                            } else (this.endVal = t), (this.finalEndVal = null);
                            null !== this.finalEndVal ? (this.useEasing = !1) : (this.useEasing = this.options.useEasing);
                        }),
                        (t.prototype.start = function (t) {
                            this.error ||
                                (this.options.onStartCallback && this.options.onStartCallback(),
                                t && (this.options.onCompleteCallback = t),
                                this.duration > 0
                                    ? (this.determineDirectionAndSmartEasing(), (this.paused = !1), (this.rAF = requestAnimationFrame(this.count)))
                                    : this.printValue(this.endVal));
                        }),
                        (t.prototype.pauseResume = function () {
                            this.paused
                                ? ((this.startTime = null),
                                  (this.duration = this.remaining),
                                  (this.startVal = this.frameVal),
                                  this.determineDirectionAndSmartEasing(),
                                  (this.rAF = requestAnimationFrame(this.count)))
                                : cancelAnimationFrame(this.rAF),
                                (this.paused = !this.paused);
                        }),
                        (t.prototype.reset = function () {
                            cancelAnimationFrame(this.rAF),
                                (this.paused = !0),
                                this.resetDuration(),
                                (this.startVal = this.validateValue(this.options.startVal)),
                                (this.frameVal = this.startVal),
                                this.printValue(this.startVal);
                        }),
                        (t.prototype.update = function (t) {
                            cancelAnimationFrame(this.rAF),
                                (this.startTime = null),
                                (this.endVal = this.validateValue(t)),
                                this.endVal !== this.frameVal &&
                                    ((this.startVal = this.frameVal),
                                    null == this.finalEndVal && this.resetDuration(),
                                    (this.finalEndVal = null),
                                    this.determineDirectionAndSmartEasing(),
                                    (this.rAF = requestAnimationFrame(this.count)));
                        }),
                        (t.prototype.printValue = function (t) {
                            var e;
                            if (this.el) {
                                var i = this.formattingFn(t);
                                (null == (e = this.options.plugin) ? void 0 : e.render)
                                    ? this.options.plugin.render(this.el, i)
                                    : 'INPUT' === this.el.tagName
                                      ? (this.el.value = i)
                                      : 'text' === this.el.tagName || 'tspan' === this.el.tagName
                                        ? (this.el.textContent = i)
                                        : (this.el.innerHTML = i);
                            }
                        }),
                        (t.prototype.ensureNumber = function (t) {
                            return 'number' == typeof t && !isNaN(t);
                        }),
                        (t.prototype.validateValue = function (t) {
                            var e = Number(t);
                            return this.ensureNumber(e) ? e : ((this.error = '[CountUp] invalid start or end value: '.concat(t)), null);
                        }),
                        (t.prototype.resetDuration = function () {
                            (this.startTime = null), (this.duration = 1e3 * Number(this.options.duration)), (this.remaining = this.duration);
                        }),
                        t
                    );
                })();
        },
        74857: (t, e, i) => {
            Promise.resolve().then(i.t.bind(i, 96598, 23)), Promise.resolve().then(i.bind(i, 46965)), Promise.resolve().then(i.bind(i, 65034));
        },
        77710: (t, e, i) => {
            'use strict';
            var s;
            i.d(e, { b: () => s }),
                (function (t) {
                    (t.Album = 'album'), (t.Artist = 'artist'), (t.Playlist = 'playlist'), (t.Radio = 'fm_radio'), (t.Other = 'other'), (t.Search = 'search');
                })(s || (s = {}));
        },
        91165: (t, e, i) => {
            'use strict';
            function s(t) {
                let { reason: e, children: i } = t;
                return i;
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                }),
                i(39201);
        },
        96598: (t) => {
            t.exports = { root: 'SlidesNotFoundPage_root__bmv9K', important: 'SlidesNotFoundPage_important__VELWc' };
        },
        98944: (t, e, i) => {
            'use strict';
            function s(t) {
                let { moduleIds: e } = t;
                return null;
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                }),
                i(54486),
                i(92803),
                i(14367),
                i(32038);
        },
    },
]);
