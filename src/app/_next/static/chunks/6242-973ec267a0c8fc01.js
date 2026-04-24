(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6242],
    {
        774: (t) => {
            t.exports = { root: 'Slide_root__x5JEM', root_isActive: 'Slide_root_isActive__CKUSv' };
        },
        2374: (t) => {
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
        4814: (t) => {
            t.exports = { root: 'Slider_root__T7EOX', root_visible: 'Slider_root_visible__b3Kqx', fade: 'Slider_fade__V7FGV', container: 'Slider_container__tZ0VH' };
        },
        29792: (t) => {
            t.exports = { root: 'SlidesNotFoundPage_root__bmv9K', important: 'SlidesNotFoundPage_important__VELWc' };
        },
        36547: (t, e, i) => {
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
        38291: (t) => {
            t.exports = { root: 'SliderControls_root__v_ofj', control: 'SliderControls_control__E3joM', top: 'SliderControls_top__HN5gZ' };
        },
        42239: (t, e, i) => {
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
        42856: (t, e, i) => {
            'use strict';
            var s;
            i.d(e, { b: () => s }),
                (function (t) {
                    (t.Album = 'album'), (t.Artist = 'artist'), (t.Playlist = 'playlist'), (t.Radio = 'fm_radio'), (t.Other = 'other'), (t.Search = 'search');
                })(s || (s = {}));
        },
        49993: (t, e, i) => {
            'use strict';
            i.d(e, { SlidesPage: () => z });
            var s = i(62936),
                a = i(79950),
                n = i(19718),
                o = i(69526),
                r = i(44020),
                l = i(47480),
                d = i(26731),
                u = i(23480),
                c = i(8669),
                h = i(59935),
                p = i(5099),
                m = i(85742),
                g = i(20512),
                S = i(20418),
                f = i(46663),
                _ = i(90163),
                v = i(11576),
                x = i(4497),
                b = i(42561),
                V = i(38291),
                E = i.n(V);
            let I = (t) => {
                let { isFirstSlide: e, isLastSlide: i, style: a } = t,
                    n = (0, v.Mn)(),
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
            var k = i(81959),
                A = i(42856),
                y = i(56721),
                j = i(75135),
                w = i(774),
                N = i.n(w);
            let F = (t) => {
                var e;
                let { slide: i, isVisible: n } = t,
                    { ref: o, intersectionPropertyId: l } = (0, b.nMI)(),
                    d = (0, b.eGp)(),
                    { from: u } = (0, b.fyy)({ pageId: b._Q$.TRAILER_OF_THE_YEAR, blockId: b.UfI.DEFAULT }),
                    c = (0, b.brA)(),
                    { isActive: h } = (0, v.JO)(),
                    p = null == d ? void 0 : d.getState(b.V_r.TRAILER).queueState.entityList.value,
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
                    g = n && i.hasTrailer && (!m || (null == d ? void 0 : d.getState(b.V_r.TRAILER).playerState.status.value) !== f.MT.PLAYING),
                    S = g && (null == d || null == (e = d.getState(b.V_r.TRAILER).currentContext.value) ? void 0 : e.data.meta.id) === i.id;
                return (
                    (0, r.useEffect)(() => {
                        if (S)
                            return void d.restartContext({ playAfterRestart: !0, queueParams: { index: 0 }, entitiesData: i.entitiesData }, b.V_r.TRAILER).then(() => {
                                c(!0);
                            });
                        g &&
                            (null == d ||
                                d
                                    .playContext(
                                        {
                                            contextData: { type: k.K.Various, overrideContextType: A.b.Other, trailer: !0, meta: { id: i.id }, from: u },
                                            queueParams: { index: 0 },
                                            entitiesData: i.entitiesData,
                                            loadContextMeta: !1,
                                        },
                                        b.V_r.TRAILER,
                                    )
                                    .then(() => {
                                        c(!0);
                                    }));
                    }, [u, c, g, S, i.entitiesData, i.id, d]),
                    (0, s.jsx)(y.Paper, {
                        className: (0, a.$)(N().root, { [N().root_isActive]: h }),
                        radius: 'l',
                        tabIndex: 0,
                        'data-intersection-property-id': l,
                        ref: o,
                        children: (0, s.jsx)(j.AR, { slide: i, isActive: h }),
                    })
                );
            };
            var C = i(4814),
                P = i.n(C);
            let L = (0, n.PA)((t) => {
                let { items: e } = t,
                    {
                        settings: { isMobile: i },
                        slides: n,
                    } = (0, b.Pjs)(),
                    { formatMessage: o } = (0, l.A)(),
                    { state: d, toggleTrue: c } = (0, x.e)(!1),
                    h = (0, v.Mn)(),
                    p = (0, b.fBs)(),
                    m = (0, r.useRef)(!1),
                    [g, S] = (0, r.useState)(!0),
                    [f, V] = (0, r.useState)(!1);
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
                        S(t.isBeginning), V(t.isEnd), n.setActiveSlide(t.activeIndex);
                    },
                    [n],
                );
                return (0, s.jsx)('div', {
                    className: (0, a.$)(P().root, { [P().root_visible]: d }),
                    children: (0, s.jsxs)(v.RC, {
                        direction: 'vertical',
                        centeredSlides: !i,
                        slidesPerView: 'auto',
                        spaceBetween: 16,
                        className: P().container,
                        keyboard: { enabled: !0 },
                        modules: [_.s3, _.Jq, _.FJ],
                        onActiveIndexChange: E,
                        a11y: { enabled: !0, containerMessage: o({ id: 'page.results-of-the-year' }) },
                        mousewheel: { thresholdDelta: 30, thresholdTime: 500 },
                        children: [
                            e.map((t, i) => {
                                var a, o;
                                return (0, s.jsx)(
                                    v.qr,
                                    {
                                        children: (0, s.jsx)(b.FoH, {
                                            blockPosX: 1,
                                            blockPosY: i + 1,
                                            blockType: null == (a = t.content) ? void 0 : a.type,
                                            blockId: t.id,
                                            mainObjectId: n.mainObjectId,
                                            mainObjectType: u.ky.Slide,
                                            children: (0, s.jsx)(b.Bki, {
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
                            (0, s.jsx)(I, { isFirstSlide: g, isLastSlide: f }),
                        ],
                    }),
                });
            });
            var T = i(2374),
                R = i.n(T);
            function D(t, e) {
                return (t === b.GuX.RESOLVE || t === b.GuX.REJECT) && 0 === e.length;
            }
            let z = (0, n.PA)((t) => {
                var e;
                let { slidesConsumer: i, artistId: n, podcastId: _, campaignId: v } = t,
                    { formatMessage: x } = (0, l.A)(),
                    { slides: V, experiments: E, sonataState: I, settings: k } = (0, b.Pjs)(),
                    A = (0, b.eGp)(),
                    y = E.checkExperiment(b.zal.WebNextSlidesPage, 'on'),
                    w = !(null == (e = k.browserInfo) ? void 0 : e.isMobile) || !k.browserInfo.isTouch,
                    N = null == A ? void 0 : A.getState(b.V_r.TRAILER),
                    F = (0, h.c)((t) => {
                        null == A || A.setExponentVolume(t, b.V_r.TRAILER);
                    });
                (0, r.useEffect)(() => {
                    F(1), V.setIsMuted(!1);
                }, [F, V, A]);
                let { canBack: C, moveBack: P } = (0, b.JD0)(b.Zyd.main.href),
                    T = (0, b.ZpR)(b.Zyd.main.href);
                (0, r.useEffect)(
                    () => () => {
                        V.resetUser(), V.resetArtist(), V.resetPodcast(), V.resetSpecial(), V.resetKids(), null == A || A.pause(b.V_r.TRAILER);
                    },
                    [V, A],
                ),
                    y || (0, o.notFound)();
                let z = (0, b.zxo)(V.mainObjectId);
                (0, r.useEffect)(() => {
                    I.status === f.MT.PLAYING && (null == A || A.togglePause());
                }, [A, I.status]),
                    (0, r.useEffect)(
                        () => (
                            z(!0),
                            () => {
                                z(!1);
                            }
                        ),
                        [z],
                    );
                let B = (0, r.useMemo)(() => {
                    switch (i) {
                        case j.z6.USER:
                            return V.userItems;
                        case j.z6.ARTIST:
                            return V.artistItems;
                        case j.z6.PODCAST:
                            return V.podcastItems;
                        case j.z6.SPECIAL:
                            return V.specialItems;
                        case j.z6.KIDS:
                            return V.kidsItems;
                    }
                }, [V.artistItems, V.kidsItems, V.podcastItems, V.specialItems, V.userItems, i]);
                (0, r.useEffect)(() => {
                    if (y)
                        switch (i) {
                            case j.z6.USER:
                                D(V.userSlidesLoadingState, B) && (0, o.notFound)();
                                break;
                            case j.z6.ARTIST:
                                D(V.artistSlidesLoadingState, B) && (0, o.notFound)();
                                break;
                            case j.z6.PODCAST:
                                D(V.podcastSlidesLoadingState, B) && (0, o.notFound)();
                                break;
                            case j.z6.SPECIAL:
                                D(V.specialSlidesLoadingState, B) && (0, o.notFound)();
                                break;
                            case j.z6.KIDS:
                                D(V.kidsSlidesLoadingState, B) && (0, o.notFound)();
                        }
                    else (0, o.notFound)();
                }, [
                    E,
                    y,
                    B,
                    B.length,
                    V.artistSlidesLoadingState,
                    V.podcastSlidesLoadingState,
                    V.userSlidesLoadingState,
                    V.specialSlidesLoadingState,
                    i,
                    V.kidsSlidesLoadingState,
                ]),
                    (0, b.NBO)(!0);
                let O = (0, r.useMemo)(() => {
                        var t;
                        let e,
                            i = null == (t = B[V.activeSlide]) ? void 0 : t.slideColor;
                        if (i) {
                            let { r: t, g: s, b: a } = (0, b.E2N)(i);
                            e = 'rgba('.concat(t, ', ').concat(s, ', ').concat(a, ', 0.5)');
                        }
                        return { '--card-color-enabled_variant': i, '--card-color-enabled': e, '--logo-color': i };
                    }, [B, B.length, V.activeSlide]),
                    M = (0, r.useCallback)(() => {
                        V.toggleMute(), (null == N ? void 0 : N.playerState.exponentVolume.value) !== 0 ? F(0) : F(1);
                    }, [F, V, null == N ? void 0 : N.playerState.exponentVolume.value]),
                    G = (0, h.c)(() => {
                        C ? P() : T();
                    }),
                    $ = V.isMuted ? 'volumeOff' : 'volume',
                    q = x(V.isMuted ? { id: 'player-actions.volume-off' } : { id: 'player-actions.volume-on' });
                switch (i) {
                    case j.z6.USER:
                        V.userSlidesLoadingState === b.GuX.IDLE && (0, r.use)(V.getUserSlides());
                        break;
                    case j.z6.ARTIST:
                        n && V.artistSlidesLoadingState === b.GuX.IDLE && (0, r.use)(V.getArtistSlides({ artistId: n }));
                        break;
                    case j.z6.PODCAST:
                        _ && V.podcastSlidesLoadingState === b.GuX.IDLE && (0, r.use)(V.getPodcastSlides({ podcastId: Number(_) }));
                        break;
                    case j.z6.SPECIAL:
                        v && V.specialSlidesLoadingState === b.GuX.IDLE && (0, r.use)(V.getSpecialSlides({ campaignId: v }));
                        break;
                    case j.z6.KIDS:
                        V.kidsSlidesLoadingState === b.GuX.IDLE && (0, r.use)(V.getKidsSlides());
                }
                return (0, s.jsx)(b.jPc, {
                    children: (0, s.jsx)(b.nVz, {
                        pageId: b._Q$.SLIDES_SCREEN,
                        children: (0, s.jsxs)('div', {
                            className: R().root,
                            style: O,
                            ...(0, c.Am)(c.Xk.slides.SLIDES_PAGE),
                            children: [
                                (0, s.jsx)(g.q, { children: (0, s.jsx)(S.Heading, { variant: 'h1', children: (0, s.jsx)(d.A, { id: 'page.results-of-the-year' }) }) }),
                                (0, s.jsxs)('header', {
                                    className: R().header,
                                    children: [
                                        (null == B ? void 0 : B.length) > 0 &&
                                            (0, s.jsxs)('div', {
                                                className: R().slidesResult,
                                                children: [
                                                    (0, s.jsx)(S.Caption, {
                                                        variant: 'span',
                                                        className: R().counterActiveItem,
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        children: Number(V.activeSlide) + 1,
                                                    }),
                                                    (0, s.jsx)(S.Caption, {
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        className: R().counterItem,
                                                        children: '/',
                                                    }),
                                                    (0, s.jsx)(S.Caption, {
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        className: R().counterItem,
                                                        children: null == B ? void 0 : B.length,
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
                                            'aria-label': x({ id: 'navigation.go-back' }),
                                            radius: 'round',
                                            size: 'xs',
                                            icon: (0, s.jsx)(m.Icon, { size: 'xs', variant: 'close' }, 'handleBackIcon'),
                                            onClick: G,
                                            className: (0, a.$)(R().button, R().desktopBackButton),
                                            role: 'link',
                                        }),
                                        (0, s.jsx)(p.$, {
                                            variant: 'text',
                                            'aria-label': x({ id: 'navigation.go-back' }),
                                            radius: 'round',
                                            size: 'xs',
                                            icon: (0, s.jsx)(m.Icon, { size: 'xs', variant: 'arrowLeft' }, 'handleBackIcon'),
                                            onClick: G,
                                            className: (0, a.$)(R().button, R().mobileBackButton),
                                            role: 'link',
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(b.FoH, {
                                    mainObjectType: u.ky.Slide,
                                    mainObjectId: V.mainObjectId,
                                    blockType: u.ky.Slide,
                                    blockId: V.mainObjectId,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: B.length,
                                    children: (0, s.jsx)(L, { items: B }),
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        88933: (t) => {
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
        91455: (t, e, i) => {
            'use strict';
            i.d(e, { NotFound: () => g });
            var s = i(62936),
                a = i(79950),
                n = i(19718),
                o = i(26731),
                r = i(5099),
                l = i(85742),
                d = i(20418),
                u = i(42561),
                c = i(85906),
                h = i(44020),
                p = i(88933),
                m = i.n(p);
            let g = (0, n.PA)((t) => {
                let { className: e, title: i, description: n, iconVariant: p = 'musicLogo', iconClassName: g, iconSize: S } = t,
                    { contentRef: f } = (0, u.gKY)(),
                    _ = (0, u.ZpR)(u.Zyd.main.href);
                (0, u.LZB)();
                let { handleNavigateToMain: v } = (0, u.D5F)(_);
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
                        className: (0, a.$)(m().root, { [m().root_desktop]: !f }, e),
                        children: [
                            (0, s.jsx)(c.Lh, { withBackwardFallback: '/', className: m().navigation, withForwardControl: !1 }),
                            (0, s.jsxs)('div', {
                                className: m().content,
                                children: [
                                    (0, s.jsx)(l.Icon, { className: (0, a.$)(m().icon, g), variant: p, size: S }),
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
                                        onClick: v,
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
    },
]);
