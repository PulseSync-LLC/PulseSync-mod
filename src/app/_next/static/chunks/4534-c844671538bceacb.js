(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4368, 4534, 6242],
    {
        774: (e) => {
            e.exports = { root: 'Slide_root__x5JEM', root_isActive: 'Slide_root_isActive__CKUSv' };
        },
        2374: (e) => {
            e.exports = {
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
        4814: (e) => {
            e.exports = { root: 'Slider_root__T7EOX', root_visible: 'Slider_root_visible__b3Kqx', fade: 'Slider_fade__V7FGV', container: 'Slider_container__tZ0VH' };
        },
        29792: (e) => {
            e.exports = { root: 'SlidesNotFoundPage_root__bmv9K', important: 'SlidesNotFoundPage_important__VELWc' };
        },
        36547: (e, t, i) => {
            'use strict';
            var s;
            i.d(t, { R: () => s }),
                (function (e) {
                    (e.Music = 'music'),
                        (e.DownloadedMusic = 'downloadedMusic'),
                        (e.VibeTrack = 'vibeTrack'),
                        (e.Generative = 'generative'),
                        (e.Unknown = 'unknown'),
                        (e.SmartPreview = 'smartPreview'),
                        (e.Clip = 'clip'),
                        (e.Radio = 'fm_radio');
                })(s || (s = {}));
        },
        38291: (e) => {
            e.exports = { root: 'SliderControls_root__v_ofj', control: 'SliderControls_control__E3joM', top: 'SliderControls_top__HN5gZ' };
        },
        42239: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var s = function () {
                    return (s =
                        Object.assign ||
                        function (e) {
                            for (var t, i = 1, s = arguments.length; i < s; i++)
                                for (var n in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            return e;
                        }).apply(this, arguments);
                },
                n = (function () {
                    function e(e, t, i) {
                        var n = this;
                        (this.endVal = t),
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
                            (this.count = function (e) {
                                n.startTime || (n.startTime = e);
                                var t = e - n.startTime;
                                (n.remaining = n.duration - t),
                                    n.useEasing
                                        ? n.countDown
                                            ? (n.frameVal = n.startVal - n.easingFn(t, 0, n.startVal - n.endVal, n.duration))
                                            : (n.frameVal = n.easingFn(t, n.startVal, n.endVal - n.startVal, n.duration))
                                        : (n.frameVal = n.startVal + (n.endVal - n.startVal) * (t / n.duration));
                                var i = n.countDown ? n.frameVal < n.endVal : n.frameVal > n.endVal;
                                (n.frameVal = i ? n.endVal : n.frameVal),
                                    (n.frameVal = Number(n.frameVal.toFixed(n.options.decimalPlaces))),
                                    n.printValue(n.frameVal),
                                    t < n.duration
                                        ? (n.rAF = requestAnimationFrame(n.count))
                                        : null !== n.finalEndVal
                                          ? n.update(n.finalEndVal)
                                          : n.options.onCompleteCallback && n.options.onCompleteCallback();
                            }),
                            (this.formatNumber = function (e) {
                                var t,
                                    i,
                                    s,
                                    o = (Math.abs(e).toFixed(n.options.decimalPlaces) + '').split('.');
                                if (((t = o[0]), (i = o.length > 1 ? n.options.decimal + o[1] : ''), n.options.useGrouping)) {
                                    s = '';
                                    for (var r = 3, a = 0, l = 0, d = t.length; l < d; ++l)
                                        n.options.useIndianSeparators && 4 === l && ((r = 2), (a = 1)),
                                            0 !== l && a % r == 0 && (s = n.options.separator + s),
                                            a++,
                                            (s = t[d - l - 1] + s);
                                    t = s;
                                }
                                return (
                                    n.options.numerals &&
                                        n.options.numerals.length &&
                                        ((t = t.replace(/[0-9]/g, function (e) {
                                            return n.options.numerals[+e];
                                        })),
                                        (i = i.replace(/[0-9]/g, function (e) {
                                            return n.options.numerals[+e];
                                        }))),
                                    (e < 0 ? '-' : '') + n.options.prefix + t + i + n.options.suffix
                                );
                            }),
                            (this.easeOutExpo = function (e, t, i, s) {
                                return (i * (1 - Math.pow(2, (-10 * e) / s)) * 1024) / 1023 + t;
                            }),
                            (this.options = s(s({}, this.defaults), i)),
                            (this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber),
                            (this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo),
                            (this.startVal = this.validateValue(this.options.startVal)),
                            (this.frameVal = this.startVal),
                            (this.endVal = this.validateValue(t)),
                            (this.options.decimalPlaces = Math.max(this.options.decimalPlaces)),
                            this.resetDuration(),
                            (this.options.separator = String(this.options.separator)),
                            (this.useEasing = this.options.useEasing),
                            '' === this.options.separator && (this.options.useGrouping = !1),
                            (this.el = 'string' == typeof e ? document.getElementById(e) : e),
                            this.el ? this.printValue(this.startVal) : (this.error = '[CountUp] target is null or undefined'),
                            'undefined' != typeof window &&
                                this.options.enableScrollSpy &&
                                (this.error
                                    ? console.error(this.error, e)
                                    : ((window.onScrollFns = window.onScrollFns || []),
                                      window.onScrollFns.push(function () {
                                          return n.handleScroll(n);
                                      }),
                                      (window.onscroll = function () {
                                          window.onScrollFns.forEach(function (e) {
                                              return e();
                                          });
                                      }),
                                      this.handleScroll(this)));
                    }
                    return (
                        (e.prototype.handleScroll = function (e) {
                            if (e && window && !e.once) {
                                var t = window.innerHeight + window.scrollY,
                                    i = e.el.getBoundingClientRect(),
                                    s = i.top + window.pageYOffset,
                                    n = i.top + i.height + window.pageYOffset;
                                n < t && n > window.scrollY && e.paused
                                    ? ((e.paused = !1),
                                      setTimeout(function () {
                                          return e.start();
                                      }, e.options.scrollSpyDelay),
                                      e.options.scrollSpyOnce && (e.once = !0))
                                    : (window.scrollY > n || s > t) && !e.paused && e.reset();
                            }
                        }),
                        (e.prototype.determineDirectionAndSmartEasing = function () {
                            var e = this.finalEndVal ? this.finalEndVal : this.endVal;
                            if (((this.countDown = this.startVal > e), Math.abs(e - this.startVal) > this.options.smartEasingThreshold && this.options.useEasing)) {
                                this.finalEndVal = e;
                                var t = this.countDown ? 1 : -1;
                                (this.endVal = e + t * this.options.smartEasingAmount), (this.duration = this.duration / 2);
                            } else (this.endVal = e), (this.finalEndVal = null);
                            null !== this.finalEndVal ? (this.useEasing = !1) : (this.useEasing = this.options.useEasing);
                        }),
                        (e.prototype.start = function (e) {
                            this.error ||
                                (this.options.onStartCallback && this.options.onStartCallback(),
                                e && (this.options.onCompleteCallback = e),
                                this.duration > 0
                                    ? (this.determineDirectionAndSmartEasing(), (this.paused = !1), (this.rAF = requestAnimationFrame(this.count)))
                                    : this.printValue(this.endVal));
                        }),
                        (e.prototype.pauseResume = function () {
                            this.paused
                                ? ((this.startTime = null),
                                  (this.duration = this.remaining),
                                  (this.startVal = this.frameVal),
                                  this.determineDirectionAndSmartEasing(),
                                  (this.rAF = requestAnimationFrame(this.count)))
                                : cancelAnimationFrame(this.rAF),
                                (this.paused = !this.paused);
                        }),
                        (e.prototype.reset = function () {
                            cancelAnimationFrame(this.rAF),
                                (this.paused = !0),
                                this.resetDuration(),
                                (this.startVal = this.validateValue(this.options.startVal)),
                                (this.frameVal = this.startVal),
                                this.printValue(this.startVal);
                        }),
                        (e.prototype.update = function (e) {
                            cancelAnimationFrame(this.rAF),
                                (this.startTime = null),
                                (this.endVal = this.validateValue(e)),
                                this.endVal !== this.frameVal &&
                                    ((this.startVal = this.frameVal),
                                    null == this.finalEndVal && this.resetDuration(),
                                    (this.finalEndVal = null),
                                    this.determineDirectionAndSmartEasing(),
                                    (this.rAF = requestAnimationFrame(this.count)));
                        }),
                        (e.prototype.printValue = function (e) {
                            var t;
                            if (this.el) {
                                var i = this.formattingFn(e);
                                (null == (t = this.options.plugin) ? void 0 : t.render)
                                    ? this.options.plugin.render(this.el, i)
                                    : 'INPUT' === this.el.tagName
                                      ? (this.el.value = i)
                                      : 'text' === this.el.tagName || 'tspan' === this.el.tagName
                                        ? (this.el.textContent = i)
                                        : (this.el.innerHTML = i);
                            }
                        }),
                        (e.prototype.ensureNumber = function (e) {
                            return 'number' == typeof e && !isNaN(e);
                        }),
                        (e.prototype.validateValue = function (e) {
                            var t = Number(e);
                            return this.ensureNumber(t) ? t : ((this.error = '[CountUp] invalid start or end value: '.concat(e)), null);
                        }),
                        (e.prototype.resetDuration = function () {
                            (this.startTime = null), (this.duration = 1e3 * Number(this.options.duration)), (this.remaining = this.duration);
                        }),
                        e
                    );
                })();
        },
        42856: (e, t, i) => {
            'use strict';
            var s;
            i.d(t, { b: () => s }),
                (function (e) {
                    (e.Album = 'album'), (e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Radio = 'fm_radio'), (e.Other = 'other'), (e.Search = 'search');
                })(s || (s = {}));
        },
        43528: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => n });
            var s = i(43696);
            let n = () => {
                let e = null,
                    t = new s.cJ(!1),
                    i = [];
                return {
                    isLoaded: t,
                    init: (s) => {
                        var n, o;
                        if (void 0 !== (null == (n = window.Ya) ? void 0 : n.Metrika2) && !t.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...s })),
                                    (t.value = !0),
                                    (o = e),
                                    i.forEach((e) => {
                                        e(o);
                                    }),
                                    (i.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && s.logger.error(e);
                            }
                    },
                    count: function (t) {
                        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [s]: t })
                            : i.push((e) => {
                                  e.params({ [s]: t });
                              });
                    },
                    hit: (t) => {
                        e
                            ? e.hit(t)
                            : i.push((e) => {
                                  e.hit(t);
                              });
                    },
                    reachGoal: (t, s) => {
                        if (!e) return void i.push((e) => e.reachGoal(t, s));
                        e.reachGoal(t, s);
                    },
                };
            };
        },
        48320: (e, t, i) => {
            'use strict';
            var s;
            i.d(t, { L: () => s }),
                (function (e) {
                    (e.PUBLIC = 'public'), (e.PRIVATE = 'private');
                })(s || (s = {}));
        },
        49993: (e, t, i) => {
            'use strict';
            i.d(t, { SlidesPage: () => z });
            var s = i(62936),
                n = i(79950),
                o = i(19718),
                r = i(69526),
                a = i(44020),
                l = i(47480),
                d = i(26731),
                u = i(23480),
                c = i(8669),
                h = i(59935),
                m = i(5099),
                v = i(85742),
                p = i(20512),
                b = i(20418),
                P = i(46663),
                _ = i(90163),
                g = i(11576),
                S = i(4497),
                f = i(42561),
                x = i(38291),
                V = i.n(x);
            let E = (e) => {
                let { isFirstSlide: t, isLastSlide: i, style: n } = e,
                    o = (0, g.Mn)(),
                    { formatMessage: r } = (0, l.A)(),
                    d = (0, a.useCallback)(() => {
                        o.slidePrev();
                    }, [o]),
                    u = (0, a.useCallback)(() => {
                        o.slideNext();
                    }, [o]);
                return (0, s.jsxs)('div', {
                    className: V().root,
                    style: n,
                    children: [
                        (0, s.jsx)(m.$, {
                            variant: 'outline',
                            iconClassName: V().top,
                            size: 'm',
                            radius: 'round',
                            onClick: d,
                            disabled: t,
                            icon: (0, s.jsx)(v.Icon, { variant: 'arrowDown', size: 'xxs' }, 'prevIcon'),
                            withRipple: !1,
                            'aria-label': r({ id: 'slider.prev-slide' }),
                            className: V().control,
                        }),
                        (0, s.jsx)(m.$, {
                            variant: 'outline',
                            size: 'm',
                            radius: 'round',
                            onClick: u,
                            disabled: i,
                            icon: (0, s.jsx)(v.Icon, { variant: 'arrowDown', size: 'xxs' }, 'nextIcon'),
                            withRipple: !1,
                            'aria-label': r({ id: 'slider.next-slide' }),
                            className: V().control,
                        }),
                    ],
                });
            };
            var I = i(81959),
                k = i(42856),
                y = i(56721),
                w = i(75135),
                j = i(774),
                A = i.n(j);
            let N = (e) => {
                var t;
                let { slide: i, isVisible: o } = e,
                    { ref: r, intersectionPropertyId: l } = (0, f.nMI)(),
                    d = (0, f.eGp)(),
                    { from: u } = (0, f.fyy)({ pageId: f._Q$.TRAILER_OF_THE_YEAR, blockId: f.UfI.DEFAULT }),
                    c = (0, f.brA)(),
                    { isActive: h } = (0, g.JO)(),
                    m = null == d ? void 0 : d.getState(f.V_r.TRAILER).queueState.entityList.value,
                    v = (0, a.useMemo)(
                        () =>
                            i.entitiesData &&
                            m &&
                            i.entitiesData.every((e, t) => {
                                var i;
                                return e.meta.id === (null == (i = m[t]) ? void 0 : i.entity.data.meta.id);
                            }),
                        [i.entitiesData, m],
                    ),
                    p = o && i.hasTrailer && (!v || (null == d ? void 0 : d.getState(f.V_r.TRAILER).playerState.status.value) !== P.MT.PLAYING),
                    b = p && (null == d || null == (t = d.getState(f.V_r.TRAILER).currentContext.value) ? void 0 : t.data.meta.id) === i.id;
                return (
                    (0, a.useEffect)(() => {
                        if (b)
                            return void d.restartContext({ playAfterRestart: !0, queueParams: { index: 0 }, entitiesData: i.entitiesData }, f.V_r.TRAILER).then(() => {
                                c(!0);
                            });
                        p &&
                            (null == d ||
                                d
                                    .playContext(
                                        {
                                            contextData: { type: I.K.Various, overrideContextType: k.b.Other, trailer: !0, meta: { id: i.id }, from: u },
                                            queueParams: { index: 0 },
                                            entitiesData: i.entitiesData,
                                            loadContextMeta: !1,
                                        },
                                        f.V_r.TRAILER,
                                    )
                                    .then(() => {
                                        c(!0);
                                    }));
                    }, [u, c, p, b, i.entitiesData, i.id, d]),
                    (0, s.jsx)(y.Paper, {
                        className: (0, n.$)(A().root, { [A().root_isActive]: h }),
                        radius: 'l',
                        tabIndex: 0,
                        'data-intersection-property-id': l,
                        ref: r,
                        children: (0, s.jsx)(w.AR, { slide: i, isActive: h }),
                    })
                );
            };
            var F = i(4814),
                C = i.n(F);
            let T = (0, o.PA)((e) => {
                let { items: t } = e,
                    {
                        settings: { isMobile: i },
                        slides: o,
                    } = (0, f.Pjs)(),
                    { formatMessage: r } = (0, l.A)(),
                    { state: d, toggleTrue: c } = (0, S.e)(!1),
                    h = (0, g.Mn)(),
                    m = (0, f.fBs)(),
                    v = (0, a.useRef)(!1),
                    [p, b] = (0, a.useState)(!0),
                    [P, x] = (0, a.useState)(!1);
                (0, a.useEffect)(
                    () => (
                        c(),
                        () => {
                            null == h || h.slideTo(0), o.setActiveSlide(0);
                        }
                    ),
                    [c, h, o],
                ),
                    (0, a.useEffect)(() => {
                        o.isLoaded && !v.current && (m(), (v.current = !0));
                    }, [o.isLoaded, m]);
                let V = (0, a.useCallback)(
                    (e) => {
                        b(e.isBeginning), x(e.isEnd), o.setActiveSlide(e.activeIndex);
                    },
                    [o],
                );
                return (0, s.jsx)('div', {
                    className: (0, n.$)(C().root, { [C().root_visible]: d }),
                    children: (0, s.jsxs)(g.RC, {
                        direction: 'vertical',
                        centeredSlides: !i,
                        slidesPerView: 'auto',
                        spaceBetween: 16,
                        className: C().container,
                        keyboard: { enabled: !0 },
                        modules: [_.s3, _.Jq, _.FJ],
                        onActiveIndexChange: V,
                        a11y: { enabled: !0, containerMessage: r({ id: 'page.results-of-the-year' }) },
                        mousewheel: { thresholdDelta: 30, thresholdTime: 500 },
                        children: [
                            t.map((e, i) => {
                                var n, r;
                                return (0, s.jsx)(
                                    g.qr,
                                    {
                                        children: (0, s.jsx)(f.FoH, {
                                            blockPosX: 1,
                                            blockPosY: i + 1,
                                            blockType: null == (n = e.content) ? void 0 : n.type,
                                            blockId: e.id,
                                            mainObjectId: o.mainObjectId,
                                            mainObjectType: u.ky.Slide,
                                            children: (0, s.jsx)(f.Bki, {
                                                objectType: u.ky.SlideContent,
                                                objectId: '',
                                                objectPosX: (null != (r = e.carouselIndex) ? r : 0) + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(N, { isVisible: o.activeSlide === i, slide: e }),
                                            }),
                                        }),
                                    },
                                    e.id,
                                );
                            }),
                            (0, s.jsx)(E, { isFirstSlide: p, isLastSlide: P }),
                        ],
                    }),
                });
            });
            var L = i(2374),
                R = i.n(L);
            function D(e, t) {
                return (e === f.GuX.RESOLVE || e === f.GuX.REJECT) && 0 === t.length;
            }
            let z = (0, o.PA)((e) => {
                var t;
                let { slidesConsumer: i, artistId: o, podcastId: _, campaignId: g } = e,
                    { formatMessage: S } = (0, l.A)(),
                    { slides: x, experiments: V, sonataState: E, settings: I } = (0, f.Pjs)(),
                    k = (0, f.eGp)(),
                    y = V.checkExperiment(f.zal.WebNextSlidesPage, 'on'),
                    j = !(null == (t = I.browserInfo) ? void 0 : t.isMobile) || !I.browserInfo.isTouch,
                    A = null == k ? void 0 : k.getState(f.V_r.TRAILER),
                    N = (0, h.c)((e) => {
                        null == k || k.setExponentVolume(e, f.V_r.TRAILER);
                    });
                (0, a.useEffect)(() => {
                    N(1), x.setIsMuted(!1);
                }, [N, x, k]);
                let { canBack: F, moveBack: C } = (0, f.JD0)(f.Zyd.main.href),
                    L = (0, f.ZpR)(f.Zyd.main.href);
                (0, a.useEffect)(
                    () => () => {
                        x.resetUser(), x.resetArtist(), x.resetPodcast(), x.resetSpecial(), x.resetKids(), null == k || k.pause(f.V_r.TRAILER);
                    },
                    [x, k],
                ),
                    y || (0, r.notFound)();
                let z = (0, f.zxo)(x.mainObjectId);
                (0, a.useEffect)(() => {
                    E.status === P.MT.PLAYING && (null == k || k.togglePause());
                }, [k, E.status]),
                    (0, a.useEffect)(
                        () => (
                            z(!0),
                            () => {
                                z(!1);
                            }
                        ),
                        [z],
                    );
                let M = (0, a.useMemo)(() => {
                    switch (i) {
                        case w.z6.USER:
                            return x.userItems;
                        case w.z6.ARTIST:
                            return x.artistItems;
                        case w.z6.PODCAST:
                            return x.podcastItems;
                        case w.z6.SPECIAL:
                            return x.specialItems;
                        case w.z6.KIDS:
                            return x.kidsItems;
                    }
                }, [x.artistItems, x.kidsItems, x.podcastItems, x.specialItems, x.userItems, i]);
                (0, a.useEffect)(() => {
                    if (y)
                        switch (i) {
                            case w.z6.USER:
                                D(x.userSlidesLoadingState, M) && (0, r.notFound)();
                                break;
                            case w.z6.ARTIST:
                                D(x.artistSlidesLoadingState, M) && (0, r.notFound)();
                                break;
                            case w.z6.PODCAST:
                                D(x.podcastSlidesLoadingState, M) && (0, r.notFound)();
                                break;
                            case w.z6.SPECIAL:
                                D(x.specialSlidesLoadingState, M) && (0, r.notFound)();
                                break;
                            case w.z6.KIDS:
                                D(x.kidsSlidesLoadingState, M) && (0, r.notFound)();
                        }
                    else (0, r.notFound)();
                }, [
                    V,
                    y,
                    M,
                    M.length,
                    x.artistSlidesLoadingState,
                    x.podcastSlidesLoadingState,
                    x.userSlidesLoadingState,
                    x.specialSlidesLoadingState,
                    i,
                    x.kidsSlidesLoadingState,
                ]),
                    (0, f.NBO)(!0);
                let O = (0, a.useMemo)(() => {
                        var e;
                        let t,
                            i = null == (e = M[x.activeSlide]) ? void 0 : e.slideColor;
                        if (i) {
                            let { r: e, g: s, b: n } = (0, f.E2N)(i);
                            t = 'rgba('.concat(e, ', ').concat(s, ', ').concat(n, ', 0.5)');
                        }
                        return { '--card-color-enabled_variant': i, '--card-color-enabled': t, '--logo-color': i };
                    }, [M, M.length, x.activeSlide]),
                    B = (0, a.useCallback)(() => {
                        x.toggleMute(), (null == A ? void 0 : A.playerState.exponentVolume.value) !== 0 ? N(0) : N(1);
                    }, [N, x, null == A ? void 0 : A.playerState.exponentVolume.value]),
                    G = (0, h.c)(() => {
                        F ? C() : L();
                    }),
                    $ = x.isMuted ? 'volumeOff' : 'volume',
                    Y = S(x.isMuted ? { id: 'player-actions.volume-off' } : { id: 'player-actions.volume-on' });
                switch (i) {
                    case w.z6.USER:
                        x.userSlidesLoadingState === f.GuX.IDLE && (0, a.use)(x.getUserSlides());
                        break;
                    case w.z6.ARTIST:
                        o && x.artistSlidesLoadingState === f.GuX.IDLE && (0, a.use)(x.getArtistSlides({ artistId: o }));
                        break;
                    case w.z6.PODCAST:
                        _ && x.podcastSlidesLoadingState === f.GuX.IDLE && (0, a.use)(x.getPodcastSlides({ podcastId: Number(_) }));
                        break;
                    case w.z6.SPECIAL:
                        g && x.specialSlidesLoadingState === f.GuX.IDLE && (0, a.use)(x.getSpecialSlides({ campaignId: g }));
                        break;
                    case w.z6.KIDS:
                        x.kidsSlidesLoadingState === f.GuX.IDLE && (0, a.use)(x.getKidsSlides());
                }
                return (0, s.jsx)(f.jPc, {
                    children: (0, s.jsx)(f.nVz, {
                        pageId: f._Q$.SLIDES_SCREEN,
                        children: (0, s.jsxs)('div', {
                            className: R().root,
                            style: O,
                            ...(0, c.Am)(c.Xk.slides.SLIDES_PAGE),
                            children: [
                                (0, s.jsx)(p.q, { children: (0, s.jsx)(b.Heading, { variant: 'h1', children: (0, s.jsx)(d.A, { id: 'page.results-of-the-year' }) }) }),
                                (0, s.jsxs)('header', {
                                    className: R().header,
                                    children: [
                                        (null == M ? void 0 : M.length) > 0 &&
                                            (0, s.jsxs)('div', {
                                                className: R().slidesResult,
                                                children: [
                                                    (0, s.jsx)(b.Caption, {
                                                        variant: 'span',
                                                        className: R().counterActiveItem,
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        children: Number(x.activeSlide) + 1,
                                                    }),
                                                    (0, s.jsx)(b.Caption, {
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        className: R().counterItem,
                                                        children: '/',
                                                    }),
                                                    (0, s.jsx)(b.Caption, {
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        className: R().counterItem,
                                                        children: null == M ? void 0 : M.length,
                                                    }),
                                                ],
                                            }),
                                        j &&
                                            (0, s.jsx)(m.$, {
                                                'aria-label': Y,
                                                variant: 'text',
                                                radius: 'round',
                                                size: 'xxxs',
                                                icon: (0, s.jsx)(v.Icon, { size: 'xs', className: R().icon, variant: $ }),
                                                onClick: B,
                                                className: (0, n.$)(R().button, R().volumeButton),
                                                withRipple: !1,
                                            }),
                                        (0, s.jsx)(m.$, {
                                            'aria-label': S({ id: 'navigation.go-back' }),
                                            radius: 'round',
                                            size: 'xs',
                                            icon: (0, s.jsx)(v.Icon, { size: 'xs', variant: 'close' }, 'handleBackIcon'),
                                            onClick: G,
                                            className: (0, n.$)(R().button, R().desktopBackButton),
                                            role: 'link',
                                        }),
                                        (0, s.jsx)(m.$, {
                                            variant: 'text',
                                            'aria-label': S({ id: 'navigation.go-back' }),
                                            radius: 'round',
                                            size: 'xs',
                                            icon: (0, s.jsx)(v.Icon, { size: 'xs', variant: 'arrowLeft' }, 'handleBackIcon'),
                                            onClick: G,
                                            className: (0, n.$)(R().button, R().mobileBackButton),
                                            role: 'link',
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(f.FoH, {
                                    mainObjectType: u.ky.Slide,
                                    mainObjectId: x.mainObjectId,
                                    blockType: u.ky.Slide,
                                    blockId: x.mainObjectId,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: M.length,
                                    children: (0, s.jsx)(T, { items: M }),
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        54368: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { default: () => h });
            var s = i(62936),
                n = i(79950),
                o = i(44020),
                r = i(4497),
                a = i(32980),
                l = i(42561),
                d = i(81176),
                u = i.n(d),
                c = i(49124);
            let h = (e) => {
                let { children: t } = e,
                    { state: i, toggleTrue: d } = (0, r.e)(!1),
                    { state: h, toggleTrue: m } = (0, r.e)(!1),
                    { getThemeFromStorage: v } = (0, l.QDo)(new a.si()),
                    p = (0, o.useMemo)(() => {
                        var e;
                        return null != (e = v()) ? e : (0, l.VDQ)();
                    }, [v]),
                    b = (0, o.useCallback)(
                        (e) => {
                            let t = c.env.ASSET_PREFIX || '';
                            return ''.concat(t, '/media/splash_screen/splash_screen_').concat(p, '.').concat(e);
                        },
                        [p],
                    ),
                    P = (0, o.useMemo)(() => ({ isVisible: !i }), [i]);
                return (0, s.jsxs)(l.nlO.Provider, {
                    value: P,
                    children: [
                        !i &&
                            (0, s.jsx)('div', {
                                className: (0, n.$)(u().root, u()['root_'.concat(p)], { [u().root_hidden]: h }),
                                onAnimationEnd: d,
                                children: (0, s.jsxs)('video', {
                                    className: u().video,
                                    autoPlay: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    onEnded: m,
                                    onError: d,
                                    children: [(0, s.jsx)('source', { src: b('webm'), type: 'video/webm' }), (0, s.jsx)('source', { src: b('mp4'), type: 'video/mp4' })],
                                }),
                            }),
                        t,
                    ],
                });
            };
        },
        54802: (e, t, i) => {
            'use strict';
            let s;
            i.d(t, { useMetrika: () => r });
            var n = i(44020),
                o = i(43528);
            let r = () => {
                let e = (s || (s = (0, o.a)()), s),
                    t = (0, n.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, n.useMemo)(() => ({ ...e, isLoaded: t }), [t]);
            };
        },
        69641: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 24571)),
                Promise.resolve().then(i.bind(i, 46950)),
                Promise.resolve().then(i.bind(i, 50576)),
                Promise.resolve().then(i.bind(i, 59260)),
                Promise.resolve().then(i.bind(i, 54802)),
                Promise.resolve().then(i.bind(i, 49283)),
                Promise.resolve().then(i.bind(i, 34705)),
                Promise.resolve().then(i.bind(i, 6814)),
                Promise.resolve().then(i.bind(i, 19448)),
                Promise.resolve().then(i.bind(i, 19404)),
                Promise.resolve().then(i.bind(i, 77778)),
                Promise.resolve().then(i.bind(i, 54368)),
                Promise.resolve().then(i.bind(i, 80593)),
                Promise.resolve().then(i.t.bind(i, 29792, 23)),
                Promise.resolve().then(i.bind(i, 49993)),
                Promise.resolve().then(i.bind(i, 70900)),
                Promise.resolve().then(i.bind(i, 11182)),
                Promise.resolve().then(i.bind(i, 95368)),
                Promise.resolve().then(i.bind(i, 12331)),
                Promise.resolve().then(i.bind(i, 52589)),
                Promise.resolve().then(i.bind(i, 83132)),
                Promise.resolve().then(i.bind(i, 7670)),
                Promise.resolve().then(i.bind(i, 395)),
                Promise.resolve().then(i.bind(i, 83543)),
                Promise.resolve().then(i.bind(i, 99303)),
                Promise.resolve().then(i.bind(i, 45648)),
                Promise.resolve().then(i.bind(i, 35042)),
                Promise.resolve().then(i.bind(i, 94311)),
                Promise.resolve().then(i.bind(i, 46650)),
                Promise.resolve().then(i.bind(i, 33405)),
                Promise.resolve().then(i.bind(i, 32101)),
                Promise.resolve().then(i.bind(i, 63329)),
                Promise.resolve().then(i.bind(i, 941)),
                Promise.resolve().then(i.bind(i, 58991)),
                Promise.resolve().then(i.bind(i, 42297)),
                Promise.resolve().then(i.bind(i, 7551)),
                Promise.resolve().then(i.bind(i, 75695)),
                Promise.resolve().then(i.bind(i, 42323)),
                Promise.resolve().then(i.bind(i, 91135)),
                Promise.resolve().then(i.bind(i, 14878)),
                Promise.resolve().then(i.bind(i, 26467)),
                Promise.resolve().then(i.bind(i, 41970)),
                Promise.resolve().then(i.bind(i, 16847)),
                Promise.resolve().then(i.bind(i, 78780)),
                Promise.resolve().then(i.bind(i, 16782)),
                Promise.resolve().then(i.bind(i, 77966)),
                Promise.resolve().then(i.bind(i, 31148)),
                Promise.resolve().then(i.bind(i, 76532)),
                Promise.resolve().then(i.bind(i, 38076)),
                Promise.resolve().then(i.bind(i, 94158)),
                Promise.resolve().then(i.bind(i, 14124)),
                Promise.resolve().then(i.bind(i, 86100)),
                Promise.resolve().then(i.bind(i, 59736)),
                Promise.resolve().then(i.bind(i, 20532)),
                Promise.resolve().then(i.bind(i, 80222)),
                Promise.resolve().then(i.bind(i, 93148)),
                Promise.resolve().then(i.bind(i, 43898)),
                Promise.resolve().then(i.bind(i, 23164)),
                Promise.resolve().then(i.bind(i, 71637)),
                Promise.resolve().then(i.bind(i, 87894)),
                Promise.resolve().then(i.bind(i, 72964)),
                Promise.resolve().then(i.bind(i, 2760)),
                Promise.resolve().then(i.bind(i, 31927)),
                Promise.resolve().then(i.bind(i, 97248)),
                Promise.resolve().then(i.bind(i, 57612)),
                Promise.resolve().then(i.bind(i, 5670)),
                Promise.resolve().then(i.bind(i, 70915)),
                Promise.resolve().then(i.bind(i, 8148)),
                Promise.resolve().then(i.bind(i, 32634)),
                Promise.resolve().then(i.bind(i, 508)),
                Promise.resolve().then(i.bind(i, 36363)),
                Promise.resolve().then(i.bind(i, 15958)),
                Promise.resolve().then(i.bind(i, 78685)),
                Promise.resolve().then(i.bind(i, 34476)),
                Promise.resolve().then(i.bind(i, 60917)),
                Promise.resolve().then(i.bind(i, 62520)),
                Promise.resolve().then(i.bind(i, 21389)),
                Promise.resolve().then(i.bind(i, 85546)),
                Promise.resolve().then(i.bind(i, 80185)),
                Promise.resolve().then(i.bind(i, 38285)),
                Promise.resolve().then(i.bind(i, 792)),
                Promise.resolve().then(i.bind(i, 34291)),
                Promise.resolve().then(i.bind(i, 31299)),
                Promise.resolve().then(i.bind(i, 56209)),
                Promise.resolve().then(i.bind(i, 44162)),
                Promise.resolve().then(i.bind(i, 93427)),
                Promise.resolve().then(i.bind(i, 57861)),
                Promise.resolve().then(i.bind(i, 30615)),
                Promise.resolve().then(i.bind(i, 34990)),
                Promise.resolve().then(i.bind(i, 16395)),
                Promise.resolve().then(i.bind(i, 75020)),
                Promise.resolve().then(i.bind(i, 32746)),
                Promise.resolve().then(i.bind(i, 2552)),
                Promise.resolve().then(i.bind(i, 7323)),
                Promise.resolve().then(i.bind(i, 68270)),
                Promise.resolve().then(i.bind(i, 99525)),
                Promise.resolve().then(i.bind(i, 44276)),
                Promise.resolve().then(i.bind(i, 49452)),
                Promise.resolve().then(i.bind(i, 68834)),
                Promise.resolve().then(i.bind(i, 67484)),
                Promise.resolve().then(i.bind(i, 6987)),
                Promise.resolve().then(i.bind(i, 748)),
                Promise.resolve().then(i.bind(i, 94756)),
                Promise.resolve().then(i.bind(i, 5798)),
                Promise.resolve().then(i.bind(i, 44817)),
                Promise.resolve().then(i.bind(i, 6181)),
                Promise.resolve().then(i.bind(i, 40846)),
                Promise.resolve().then(i.bind(i, 43762)),
                Promise.resolve().then(i.bind(i, 91455));
        },
        81176: (e) => {
            e.exports = {
                root: 'SplashScreen_root__3jzFk',
                root_dark: 'SplashScreen_root_dark__0OcZj',
                root_light: 'SplashScreen_root_light__XAJTf',
                root_hidden: 'SplashScreen_root_hidden__BO7tp',
                'fade-out': 'SplashScreen_fade-out__uNMY4',
                video: 'SplashScreen_video__wFSy5',
            };
        },
        88933: (e) => {
            e.exports = {
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
        91455: (e, t, i) => {
            'use strict';
            i.d(t, { NotFound: () => p });
            var s = i(62936),
                n = i(79950),
                o = i(19718),
                r = i(26731),
                a = i(5099),
                l = i(85742),
                d = i(20418),
                u = i(42561),
                c = i(85906),
                h = i(44020),
                m = i(88933),
                v = i.n(m);
            let p = (0, o.PA)((e) => {
                let { className: t, title: i, description: o, iconVariant: m = 'musicLogo', iconClassName: p, iconSize: b } = e,
                    { contentRef: P } = (0, u.gKY)(),
                    _ = (0, u.ZpR)(u.Zyd.main.href);
                (0, u.LZB)();
                let { handleNavigateToMain: g } = (0, u.D5F)(_);
                return (
                    (0, u.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, u.Pjs)();
                        (0, h.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, s.jsxs)('div', {
                        className: (0, n.$)(v().root, { [v().root_desktop]: !P }, t),
                        children: [
                            (0, s.jsx)(c.Lh, { withBackwardFallback: '/', className: v().navigation, withForwardControl: !1 }),
                            (0, s.jsxs)('div', {
                                className: v().content,
                                children: [
                                    (0, s.jsx)(l.Icon, { className: (0, n.$)(v().icon, p), variant: m, size: b }),
                                    (0, s.jsx)(d.Heading, {
                                        className: (0, n.$)(v().title, v().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: i || (0, s.jsx)(r.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, s.jsx)(d.Caption, {
                                        className: (0, n.$)(v().text, v().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: o || (0, s.jsx)(r.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, s.jsx)(a.$, {
                                        onClick: g,
                                        className: v().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, s.jsx)(r.A, { id: 'navigation.page-main' }),
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
