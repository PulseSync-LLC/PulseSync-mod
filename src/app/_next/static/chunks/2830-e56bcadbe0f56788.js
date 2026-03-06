(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2830],
    {
        6379: (e) => {
            e.exports = {
                root: 'ChartBlock_root__GQF6w',
                root_spacer_m: 'ChartBlock_root_spacer_m__yVzU8',
                root_spacer_l: 'ChartBlock_root_spacer_l__wBImk',
                root_spacer_xxl: 'ChartBlock_root_spacer_xxl__cSNqe',
            };
        },
        7754: (e, t, a) => {
            'use strict';
            var l;
            a.d(t, { m: () => l }),
                (function (e) {
                    (e.WAVE = 'WAVE'), (e.ACTION = 'ACTION'), (e.SHARE = 'SHARE'), (e.SIMPLE = 'SIMPLE');
                })(l || (l = {}));
        },
        8066: (e) => {
            e.exports = {
                root: 'ArtistsContent_root__Jpd8M',
                covers: 'ArtistsContent_covers__OeO2T',
                cover: 'ArtistsContent_cover__rzlO2',
                image: 'ArtistsContent_image__okuHk',
            };
        },
        12978: (e) => {
            e.exports = {
                root: 'ThenNowComparison_root__sAUJF',
                row: 'ThenNowComparison_row__1osE7',
                textPrimary: 'ThenNowComparison_textPrimary__mXrAG',
                textSecondary: 'ThenNowComparison_textSecondary__O5HTV',
                cover: 'ThenNowComparison_cover___UkLn',
                itemLabel: 'ThenNowComparison_itemLabel__L_vTN',
                itemMeta: 'ThenNowComparison_itemMeta__TqbEJ',
                header: 'ThenNowComparison_header__tWhL1',
            };
        },
        18259: (e, t, a) => {
            'use strict';
            a.d(t, { SlideCard: () => te });
            var l,
                i,
                r,
                n,
                o,
                s,
                d,
                c,
                u = a(54486),
                g = a(50420),
                m = a(28303),
                _ = a(61910),
                v = a(43350);
            !(function (e) {
                (e.TOP = 'TOP'), (e.CENTER = 'CENTER'), (e.BOTTOM = 'BOTTOM');
            })(l || (l = {}));
            var p = a(83510),
                C = a(8817),
                x = a(62443),
                S = a(14342),
                b = a(83252),
                y = a(15209),
                h = a(58360),
                K = a(89461),
                N = a(92757),
                T = a.n(N);
            let E = (0, m.PA)((e) => {
                    let {
                            className: t,
                            children: a,
                            background: {
                                animationDelay: l,
                                withPersonalColor: i,
                                videoUrl: r,
                                firstFrameVideoUrl: n,
                                lastFrameVideoUrl: o,
                                bgImageUrl: s,
                                withSound: d,
                                videoLoopEnabled: c,
                            },
                            isActive: m,
                            isContentVisible: v,
                            setContentVisible: p,
                            setContentInvisible: C,
                        } = e,
                        {
                            user: x,
                            slides: { isMuted: S },
                        } = (0, b.Pjs)(),
                        { isVisible: N } = (0, b.dtw)(),
                        E = (0, _.useRef)(null),
                        k = (0, b.eGp)(),
                        I = (null == k ? void 0 : k.getState(b.V_r.TRAILER).playerState.status.value) === K.MT.PLAYING && d,
                        w = (0, _.useCallback)(() => setTimeout(p, 1e3 * l), [l, p]);
                    (0, _.useEffect)(() => {
                        !m && v && C();
                    }, [m, v, C]),
                        (0, _.useEffect)(() => {
                            var e, t, a;
                            m && !N
                                ? ((null == (e = E.current) ? void 0 : e.readyState) !== 4 && w(),
                                  null == (t = E.current) ||
                                      t
                                          .play()
                                          .then(() => {
                                              w(), I && (null == k || k.pause(b.V_r.TRAILER));
                                          })
                                          .catch(w))
                                : E.current && ((E.current.currentTime = 0), null == (a = E.current) || a.pause());
                        }, [w, m, N, p, I, k]);
                    let f = (0, _.useMemo)(() => {
                            if (i && x.collectionHue) return { '--user-background-color': (0, b.eWZ)(x.collectionHue, 1, 0.5) };
                        }, [i, x.collectionHue]),
                        A = r && n && !i,
                        R = !r && s;
                    return (0, u.jsxs)('div', {
                        className: (0, g.$)(T().root, t),
                        style: f,
                        children: [
                            R && (0, u.jsx)(h.Image, { src: (0, y.createAvatarUrl)(s, 800, !0), className: T().firstFrame }),
                            A && (0, u.jsx)(h.Image, { src: (0, y.createAvatarUrl)(n, 800, !0), className: T().firstFrame }),
                            r &&
                                (0, u.jsxs)(u.Fragment, {
                                    children: [
                                        o &&
                                            (0, u.jsx)(h.Image, {
                                                'data-screenshot-visible': !0,
                                                src: (0, y.createAvatarUrl)(o, 800, !0),
                                                className: (0, g.$)(T().lastFrame, T().hidden),
                                            }),
                                        (0, u.jsx)('video', {
                                            className: (0, g.$)(T().media, { [T().media_withPersonalColor]: i }),
                                            'data-screenshot-hidden': !0,
                                            ref: E,
                                            src: r,
                                            poster: (0, y.createAvatarUrl)(s, 800, !0),
                                            playsInline: !0,
                                            muted: !d || S,
                                            loop: c,
                                        }),
                                    ],
                                }),
                            !!a && a,
                        ],
                    });
                }),
                k = (0, _.memo)(E);
            var I = a(83645),
                w = a(43426),
                f = a(7754),
                A = a(27510),
                R = a(77881),
                j = a(5956),
                L = a(6971),
                B = a(97800),
                O = a(80585),
                P = a(34340),
                D = a.n(P);
            let G = (e) => {
                var t;
                let { data: a, className: l } = e,
                    i = (0, b.NKK)(),
                    r = (0, C.c)(() => {
                        var e;
                        i({ deepLink: null != (e = a.url) ? e : '', to: v.QT.Link });
                    });
                return (0, u.jsxs)(O.N_, {
                    href: null != (t = a.url) ? t : void 0,
                    onClick: r,
                    className: (0, g.$)(D().root, l),
                    children: [
                        (0, u.jsx)(L.Paper, {
                            radius: 'xs',
                            className: D().cover,
                            children: a.imageUrl && (0, u.jsx)(O.BW, { src: a.imageUrl, withAvatarReplace: !0, fit: 'contain', className: D().image, size: 100 }),
                        }),
                        (0, u.jsx)(B.Caption, { variant: 'span', type: 'controls', size: 'l', weight: 'medium', className: D().text, lineClamp: 1, children: a.title }),
                        (0, u.jsx)(j.Icon, { variant: 'arrowRight', size: 'xs', className: D().icon }),
                    ],
                });
            };
            var X = a(99020),
                H = a.n(X);
            let M = (e) => {
                var t;
                let { data: a, className: l, handleClick: i } = e,
                    r = (0, b.ZpR)(null != (t = a.url) ? t : ''),
                    n = (0, b.NKK)(),
                    o = (0, _.useMemo)(() => ({ '--text-color': a.textColor, '--button-color': a.buttonColor }), [a.buttonColor, a.textColor]),
                    s = (0, C.c)(() => {
                        var e;
                        if (i) return i();
                        n({ deepLink: null != (e = a.url) ? e : '', to: v.QT.Link }), r();
                    });
                return (0, u.jsx)(R.$, {
                    role: 'link',
                    style: o,
                    className: (0, g.$)(H().root, l),
                    size: 'default',
                    radius: 'xxxl',
                    color: 'primary',
                    withHover: !1,
                    withRipple: !1,
                    onClick: s,
                    children: (0, u.jsx)(B.Caption, { variant: 'span', type: 'controls', size: 'l', weight: 'medium', lineClamp: 1, children: a.title }),
                });
            };
            var z = a(91453),
                V = a.n(z);
            let U = I.default.default(
                    () =>
                        Promise.all([a.e(5595), a.e(7466)])
                            .then(a.bind(a, 47466))
                            .then((e) => e.ShareButton),
                    { ssr: !1 },
                ),
                F = (e) => {
                    let { button: t, buttonClassName: a, cardRef: l } = e,
                        i = (0, g.$)(a, V().contractButton);
                    switch (t.type) {
                        case f.m.ACTION:
                            if (t.data.url) return (0, u.jsx)(G, { data: t.data, className: i });
                            return null;
                        case f.m.SIMPLE:
                            if (t.data.url) return (0, u.jsx)(M, { data: t.data, className: i });
                            return null;
                        case f.m.SHARE:
                            return (0, u.jsx)(U, { data: t.data, wrapperClassName: i, cardRef: l });
                    }
                },
                $ = (0, m.PA)((e) => {
                    var t, a;
                    let { slide: l, className: i, cardRef: r, hasLeft: n = !0, hasRight: o = !0, onSaveChoice: s, onEditChoice: d, onSlidePrev: c, onSlideNext: m } = e,
                        { button: v } = l,
                        {
                            slides: { savedChoice: C },
                        } = (0, b.Pjs)(),
                        x = null != (a = null == C ? void 0 : C.isSaved) && a,
                        { formatMessage: S } = (0, w.A)(),
                        y = (0, _.useMemo)(
                            () =>
                                (null == v ? void 0 : v.type) === f.m.SHARE || (null == v ? void 0 : v.type) === f.m.SIMPLE
                                    ? { textColor: v.data.textColor, buttonColor: v.data.buttonColor }
                                    : { textColor: null, buttonColor: null },
                            [v],
                        ),
                        h = (0, _.useMemo)(() => ({ '--text-color': y.textColor, '--button-color': y.buttonColor }), [y]),
                        K = (0, A.L)(() => v && (0, u.jsx)(F, { button: v, buttonClassName: i, cardRef: r })),
                        N = (0, A.L)(() =>
                            l.savedChoiceKey && (n || o)
                                ? (0, u.jsx)(M, { data: { title: S({ id: 'rewind.save-choice' }), url: null, ...y }, handleClick: s, className: i })
                                : K,
                        ),
                        T = null == (t = l.content) ? void 0 : t.type;
                    return T !== p.x.CAROUSEL && T !== p.x.COLLAGE
                        ? K
                        : x
                          ? (0, u.jsxs)('div', {
                                className: V().buttonsContainer,
                                children: [
                                    v && (0, u.jsx)(F, { button: v, buttonClassName: i, cardRef: r }),
                                    (0, u.jsx)(R.$, {
                                        color: 'primary',
                                        className: (0, g.$)(V().iconButton, H().root, V().editButton),
                                        icon: (0, u.jsx)(j.Icon, { variant: 'pencil', size: 'xxs' }),
                                        radius: 'round',
                                        role: 'link',
                                        size: 'default',
                                        withHover: !0,
                                        withRipple: !0,
                                        style: h,
                                        onClick: d,
                                    }),
                                ],
                            })
                          : (0, u.jsxs)('div', {
                                className: V().buttonsContainer,
                                children: [
                                    n &&
                                        (0, u.jsx)(R.$, {
                                            color: 'primary',
                                            className: (0, g.$)(V().iconButton, H().root, V().arrowLeftButton),
                                            icon: (0, u.jsx)(j.Icon, { variant: 'arrowLeft', size: 'xxs' }),
                                            radius: 'round',
                                            role: 'link',
                                            size: 'default',
                                            withHover: !0,
                                            withRipple: !0,
                                            style: h,
                                            onClick: c,
                                        }),
                                    (0, u.jsx)('div', { className: V().mainButtonContainer, children: N }),
                                    o &&
                                        (0, u.jsx)(R.$, {
                                            color: 'primary',
                                            className: (0, g.$)(V().iconButton, H().root, V().arrowRightButton),
                                            icon: (0, u.jsx)(j.Icon, { variant: 'arrowRight', size: 'xxs' }),
                                            radius: 'round',
                                            role: 'link',
                                            size: 'default',
                                            withHover: !0,
                                            withRipple: !0,
                                            style: h,
                                            onClick: m,
                                        }),
                                ],
                            });
                });
            var W = a(70837),
                Y = a(39610);
            let J = { 6: 84, 7: 84, 8: 68, 9: 68, 10: 56, 11: 56, 12: 48, 13: 48 };
            var Z = a(93988),
                q = a.n(Z);
            let Q = (e) => {
                let { caption: t, className: a, lineClamp: l = 2 } = e;
                return (0, u.jsx)(B.Caption, { variant: 'span', type: 'text', size: 'l', weight: 'medium', className: (0, g.$)(q().root, a), lineClamp: l, children: t });
            };
            var ee = a(79074),
                et = a.n(ee);
            let ea = (e) => {
                let { data: t, className: a, valueClassName: l, valueContainerClassName: i, withAutoResize: r, descriptionLineClamp: n, withOpacity: o } = e,
                    s = (0, _.useRef)(null),
                    { formatNumber: d } = (0, w.A)(),
                    c = (0, _.useCallback)((e) => (e >= 1e4 ? d(e) : String(e)), [d]);
                (0, _.useEffect)(() => {
                    if (s.current) {
                        if (!t.value) return;
                        let e = new W.T(s.current, Number(t.value), { startVal: 1, formattingFn: c });
                        e.error || e.start();
                    }
                }, [t.value, c]);
                let m = (0, _.useMemo)(() => {
                    if (r && t.value)
                        return {
                            fontSize: ((e) => {
                                let t = String(e).length;
                                return t > 13
                                    ? 'clamp('.concat(18, 'px, ').concat(11, 'cqi, ').concat(54, 'px)')
                                    : t <= 5
                                      ? 'clamp('.concat(18, 'px, ').concat(26, 'cqi, ').concat(100, 'px)')
                                      : 'clamp('
                                            .concat(18, 'px, ')
                                            .concat(26 - t, 'cqi, ')
                                            .concat(J[t], 'px)');
                            })(t.value),
                        };
                }, [t.value, r]);
                return (0, u.jsxs)(u.Fragment, {
                    children: [
                        (0, u.jsxs)(Y.q, { children: [t.value, ' ', t.valueSuffix, ' ', t.valueDescription] }),
                        (0, u.jsxs)('div', {
                            className: (0, g.$)(et().root, { [et().root_withOpacity]: o }, a),
                            'aria-hidden': !0,
                            children: [
                                (0, u.jsxs)('div', {
                                    className: (0, g.$)(et().valueContainer, i),
                                    children: [
                                        (0, u.jsx)(B.Heading, {
                                            variant: 'div',
                                            size: 'xxxxl',
                                            tabIndex: -1,
                                            ref: s,
                                            'aria-hidden': !0,
                                            className: (0, g.$)(et().value, l),
                                            style: m,
                                        }),
                                        t.valueSuffix &&
                                            (0, u.jsx)(B.Heading, { variant: 'div', size: 'xxxxl', className: et().value, style: m, children: t.valueSuffix }),
                                    ],
                                }),
                                (0, u.jsx)(B.Heading, { variant: 'div', size: 'xl', weight: 'black', className: et().unit, lineClamp: n, children: t.valueDescription }),
                                t.footer && (0, u.jsx)(Q, { caption: t.footer, className: et().footer, lineClamp: 3 }),
                            ],
                        }),
                    ],
                });
            };
            var el = a(8066),
                ei = a.n(el);
            let er = (e) => {
                let { data: t } = e,
                    a = (0, _.useMemo)(
                        () => ({ value: t.value, valueDescription: t.valueDescription, valueSuffix: t.valueSuffix, footer: t.footer }),
                        [t.footer, t.value, t.valueDescription, t.valueSuffix],
                    ),
                    l = (0, _.useMemo)(() => ({ '--covers-offset-translate': ''.concat((t.covers.length - 1) * 7.5, 'px') }), [t.covers]),
                    i = (0, _.useCallback)((e) => ({ '--cover-offset-translate': '-'.concat(15 * e, 'px') }), []);
                return (0, u.jsxs)('div', {
                    className: ei().root,
                    children: [
                        (0, u.jsx)(ea, { data: a, withAutoResize: !0 }),
                        (0, u.jsx)('div', {
                            className: ei().covers,
                            style: l,
                            children: t.covers.map((e, t) => {
                                var a;
                                return (0, u.jsx)(
                                    L.Paper,
                                    {
                                        radius: 'round',
                                        className: ei().cover,
                                        style: i(t),
                                        children: (0, u.jsx)(O.BW, {
                                            src: null != (a = e.uri) ? a : void 0,
                                            withAvatarReplace: !0,
                                            fit: 'contain',
                                            size: 100,
                                            className: ei().image,
                                        }),
                                    },
                                    e.uri,
                                );
                            }),
                        }),
                    ],
                });
            };
            var en = a(31756),
                eo = a(91657),
                es = a(36553),
                ed = a(68280),
                ec = a.n(ed);
            let eu = (0, m.PA)((e) => {
                let {
                        isDisabled: t,
                        initialIndex: a = 0,
                        slidesPerView: l = en.bF,
                        disabledClassName: i,
                        slideActiveClassName: r,
                        slideClassName: n,
                        onSlideChange: o,
                        onCarouselReady: s,
                        children: d,
                    } = e,
                    c = (0, _.useRef)(null);
                (0, _.useEffect)(() => {
                    var e, a;
                    t ? null == (e = c.current) || e.disable() : null == (a = c.current) || a.enable();
                }, [t]);
                let m = (0, _.useCallback)(
                        (e) => {
                            let { activeIndex: a } = e;
                            t || null == o || o(a);
                        },
                        [t, o],
                    ),
                    v = (0, _.useCallback)(
                        (e) => {
                            (c.current = e), null == s || s({ slideNext: () => e.slideNext(), slidePrev: () => e.slidePrev() });
                        },
                        [s],
                    );
                return (0, u.jsx)(es.RC, {
                    a11y: { enabled: !0 },
                    centeredSlides: !0,
                    className: (0, g.$)(ec().root, ec().swiper, { [null != i ? i : '']: t }),
                    initialSlide: a,
                    keyboard: !0,
                    modules: [eo.Jq, eo.s3, eo.Vx, eo.dK],
                    pagination: { dynamicBullets: !0, dynamicMainBullets: 3 },
                    slidesPerView: l,
                    spaceBetween: en.ur,
                    wrapperClass: ec().wrapper,
                    onActiveIndexChange: m,
                    onSwiper: v,
                    children: d.map((e, t) => {
                        var l, i;
                        return (0, u.jsx)(
                            es.qr,
                            {
                                className: (0, g.$)(ec().slide, n, {
                                    [null != r ? r : '']: t === (null != (i = null == (l = c.current) ? void 0 : l.activeIndex) ? i : a),
                                }),
                                children: e,
                            },
                            t,
                        );
                    }),
                });
            });
            var eg = a(82864),
                em = a.n(eg);
            let e_ = (e) => {
                let { className: t, heading: a, lineClamp: l = 2 } = e;
                return (0, u.jsx)(B.Heading, { variant: 'h3', size: 'xxl', weight: 'bold', className: (0, g.$)(em().root, t), lineClamp: l, children: a });
            };
            var ev = a(75146),
                ep = a.n(ev);
            let eC = (0, m.PA)((e) => {
                let { data: t, carouselIndex: a, onSlideChange: l, onCarouselReady: i } = e,
                    {
                        slides: { savedChoice: r },
                    } = (0, b.Pjs)(),
                    { isSaved: n } = null != r ? r : { index: 0, isSaved: !1 },
                    [o, s] = (0, _.useState)(() => {
                        if (void 0 !== a) return t.items[a];
                    }),
                    d = (0, _.useCallback)(
                        (e) => {
                            let a = t.items[e];
                            a && (s(a), null == l || l(e, t.items.length));
                        },
                        [t.items, l],
                    );
                return t.items.length
                    ? (0, u.jsxs)('div', {
                          className: ep().root,
                          children: [
                              o && o.data.description && (0, u.jsx)(Q, { caption: o.data.description, className: ep().description, lineClamp: 3 }),
                              (0, u.jsx)(eu, {
                                  isDisabled: n,
                                  initialIndex: a,
                                  slideClassName: ep().slide,
                                  slideActiveClassName: ep().slideActive,
                                  disabledClassName: ep().disabled,
                                  onCarouselReady: i,
                                  onSlideChange: d,
                                  children: t.items.map((e, t) => {
                                      var a, l;
                                      return (0, u.jsx)(
                                          L.Paper,
                                          {
                                              className: ep().cover,
                                              children:
                                                  e.data.cover.uri &&
                                                  (0, u.jsx)(O.pU, {
                                                      backgroundSrc: null != (a = e.data.coverBackground) ? a : '',
                                                      className: ep().image,
                                                      fit: 'contain',
                                                      maskSrc: null != (l = e.data.coverMask) ? l : '',
                                                      size: en.e0,
                                                      src: e.data.cover.uri,
                                                      withAvatarReplace: !0,
                                                      withSrcSet: !1,
                                                  }),
                                          },
                                          t,
                                      );
                                  }),
                              }),
                              (0, u.jsxs)('div', {
                                  className: ep().meta,
                                  children: [
                                      (null == o ? void 0 : o.data.subtitle) && (0, u.jsx)(Q, { caption: o.data.subtitle, className: ep().subtitle }),
                                      (null == o ? void 0 : o.data.title) && (0, u.jsx)(e_, { className: ep().title, heading: o.data.title, lineClamp: 3 }),
                                  ],
                              }),
                          ],
                      })
                    : null;
            });
            !(function (e) {
                (e.SQUARE = 'SQUARE'), (e.CIRCLE = 'CIRCLE');
            })(i || (i = {}));
            var ex = a(6379),
                eS = a.n(ex),
                eb = a(93064);
            !(function (e) {
                (e.NUMBER = 'NUMBER'), (e.TEXT = 'TEXT');
            })(r || (r = {}));
            var ey = a(85511),
                eh = a.n(ey);
            let eK = (0, m.PA)((e) => {
                    var t;
                    let { data: a, index: l, variant: n, isOrderVisible: o, hasOnlyArtistItems: s } = e,
                        { formatNumber: d } = (0, w.A)(),
                        c = (0, _.useMemo)(
                            () => ({ '--slide-final-translate-offset': n === p.x.CHART && s ? ''.concat(-8 * l, 'px') : 0, animationDelay: ''.concat(0.5 * l, 's') }),
                            [l, s, n],
                        ),
                        m = (0, _.useMemo)(() => {
                            let e = Number(a.subtitle);
                            return a.subtitle && !isNaN(e) ? d(e) : a.subtitle;
                        }, [a.subtitle, d]),
                        v = (0, _.useMemo)(
                            () =>
                                a.titleType === r.NUMBER && 'number' == typeof a.value
                                    ? (0, u.jsx)(ea, {
                                          data: (0, eb.wg)({ value: a.value }),
                                          className: eh().stat,
                                          valueClassName: eh().statValue,
                                          valueContainerClassName: eh().statValueContainer,
                                      })
                                    : a.title
                                      ? n === p.x.CHART_ARTIST
                                          ? (0, u.jsx)(B.Heading, {
                                                variant: 'div',
                                                size: 's',
                                                weight: 'black',
                                                lineClamp: 2,
                                                className: eh().textVariant,
                                                children: a.title,
                                            })
                                          : (0, u.jsx)(B.Caption, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                className: eh().textVariant,
                                                children: a.title,
                                            })
                                      : void 0,
                            [a.title, a.titleType, a.value, n],
                        ),
                        C = (0, _.useMemo)(() => {
                            if (m)
                                return (n === p.x.CHART && s) || n === p.x.CHART_FAVORITES
                                    ? (0, u.jsx)(B.Heading, {
                                          variant: 'div',
                                          size: 's',
                                          weight: 'black',
                                          lineClamp: 2,
                                          className: (0, g.$)(eh().textVariant, eh().subTitle),
                                          children: m,
                                      })
                                    : (0, u.jsx)(B.Caption, {
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'medium',
                                          lineClamp: 2,
                                          className: (0, g.$)(eh().text, { [eh().textVariant]: n === p.x.CHART_ARTIST }),
                                          children: m,
                                      });
                        }, [m, s, n]);
                    return (0, u.jsxs)('li', {
                        className: eh().root,
                        style: c,
                        tabIndex: 0,
                        children: [
                            o && (0, u.jsx)(B.Heading, { variant: 'div', size: 'l', weight: 'black', className: eh().order, children: l + 1 }),
                            (0, u.jsx)(L.Paper, {
                                radius: a.coverType === i.CIRCLE ? 'round' : 'xs',
                                className: eh().cover,
                                children:
                                    (null == (t = a.cover) ? void 0 : t.uri) &&
                                    (0, u.jsx)(O.BW, { src: a.cover.uri, withAvatarReplace: !0, fit: 'contain', className: eh().image, size: 100 }),
                            }),
                            (0, u.jsxs)('div', { className: eh().meta, children: [v, C] }),
                        ],
                    });
                }),
                eN = (e) => {
                    let { items: t, isOrderVisible: a, variant: l } = e,
                        r = (0, _.useMemo)(() => t.every((e) => e.coverType === i.CIRCLE), [t]),
                        n = (0, _.useMemo)(() => {
                            switch (l) {
                                case p.x.CHART_ARTIST:
                                    return 'l';
                                case p.x.CHART_FAVORITES:
                                    return 'xxl';
                                case p.x.CHART:
                                    if (r) return;
                                    return 'm';
                                default:
                                    return null;
                            }
                        }, [r, l]);
                    return (0, u.jsx)('ol', {
                        className: (0, g.$)(eS().root, eS()['root_spacer_'.concat(n)]),
                        tabIndex: -1,
                        children: t.map((e, t) =>
                            (0, u.jsx)(eK, { data: e, index: t, variant: l, hasOnlyArtistItems: r, isOrderVisible: a }, ''.concat(e.title, '-').concat(e.subtitle)),
                        ),
                    });
                };
            var eT = a(82816),
                eE = a.n(eT);
            let ek = (e) => {
                var t;
                let { data: a } = e;
                return (0, u.jsxs)('div', {
                    className: eE().root,
                    children: [
                        (null == (t = a.cover) ? void 0 : t.uri) &&
                            (0, u.jsx)(L.Paper, {
                                radius: 'round',
                                className: eE().cover,
                                children: (0, u.jsx)(O.BW, { src: a.cover.uri, withAvatarReplace: !0, fit: 'contain', className: eE().image, size: 200 }),
                            }),
                        a.title && (0, u.jsx)(B.Heading, { variant: 'div', size: 'xl', weight: 'bold', className: eE().title, lineClamp: 2, children: a.title }),
                        (0, u.jsx)(eN, { items: a.items, isOrderVisible: !1, variant: p.x.CHART_ARTIST }),
                    ],
                });
            };
            var eI = a(29854),
                ew = a.n(eI);
            let ef = (e) => {
                var t;
                let { data: a } = e;
                return (0, u.jsxs)('div', {
                    className: ew().root,
                    children: [
                        a.description && (0, u.jsx)(Q, { caption: null != (t = a.description) ? t : '', className: ew().text, lineClamp: 3 }),
                        (0, u.jsx)(eN, { items: a.items, variant: p.x.CHART, isOrderVisible: a.isOrderVisible }),
                    ],
                });
            };
            var eA = a(94894),
                eR = a.n(eA);
            let ej = (e) => {
                let { data: t } = e,
                    a = 'number' == typeof t.value,
                    l = (0, _.useMemo)(
                        () => ({ value: t.value, valueDescription: t.valueDescription, valueSuffix: t.valueSuffix, footer: t.footer }),
                        [t.footer, t.value, t.valueDescription, t.valueSuffix],
                    );
                return (0, u.jsxs)('div', {
                    className: eR().root,
                    children: [
                        a && (0, u.jsx)(ea, { data: l, withAutoResize: !0 }),
                        t.description &&
                            (0, u.jsx)(B.Caption, {
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                className: eR().description,
                                lineClamp: 3,
                                children: t.description,
                            }),
                        (0, u.jsx)(eN, { items: t.items, isOrderVisible: t.isOrderVisible, variant: p.x.CHART_FAVORITES }),
                    ],
                });
            };
            !(function (e) {
                (e.CHOSEN = 'CHOSEN'), (e.TEXT = 'TEXT');
            })(n || (n = {})),
                (function (e) {
                    (e.CHOSEN_IMAGE = 'CHOSEN_IMAGE'), (e.IMAGE = 'IMAGE');
                })(o || (o = {})),
                (function (e) {
                    (e.TEXT = 'TEXT'), (e.COLLAGE = 'COLLAGE');
                })(s || (s = {}));
            var eL = a(31016),
                eB = a.n(eL);
            let eO = (0, m.PA)((e) => {
                let { data: t, carouselIndex: a = 0, onBackgroundChange: l, onCarouselReady: i, onSlideChange: r } = e,
                    {
                        slides: { savedChoices: s },
                    } = (0, b.Pjs)();
                (0, _.useEffect)(() => {
                    var e, i, r;
                    return null == l ? void 0 : l(null != (r = null == (i = t.items[a]) || null == (e = i.contentBackground) ? void 0 : e.uri) ? r : '');
                }, [t.items, a, l]);
                let d = (0, C.c)((e) => {
                    var a, i, n;
                    null == l || l(null != (n = null == (i = t.items[e]) || null == (a = i.contentBackground) ? void 0 : a.uri) ? n : ''),
                        null == r || r(e, t.items.length);
                });
                return t.items.length
                    ? (0, u.jsx)('div', {
                          className: eB().root,
                          children: (0, u.jsx)(eu, {
                              initialIndex: a,
                              slidesPerView: 1,
                              onCarouselReady: i,
                              onSlideChange: d,
                              children: t.items.map((e, t) => {
                                  let a,
                                      { topBlock: l, bottomBlock: i } = e,
                                      {
                                          background: { uri: r },
                                          items: d,
                                      } = l.data,
                                      c = d.reduce((e, t) => {
                                          let a, l, i;
                                          if (t.type === o.IMAGE) a = t.data.uri;
                                          else if (t.type === o.CHOSEN_IMAGE) {
                                              var r;
                                              let e = s.get(null != (r = t.data.key) ? r : '');
                                              (a = null == e ? void 0 : e.data.uri),
                                                  (l = null == e ? void 0 : e.data.coverMask),
                                                  (i = null == e ? void 0 : e.data.coverBackground);
                                          }
                                          if (!a) return e;
                                          let { x: n, y: d, z: c, width: u, height: g } = t.data.rectangle;
                                          return (
                                              e.push({
                                                  uri: a,
                                                  coverMask: l,
                                                  coverBackground: i,
                                                  rectangle: {
                                                      left: ''.concat(n, '%'),
                                                      top: ''.concat(1.25 * d, '%'),
                                                      zIndex: c,
                                                      width: ''.concat(u, '%'),
                                                      height: ''.concat(1.25 * g, '%'),
                                                  },
                                              }),
                                              e
                                          );
                                      }, []),
                                      g =
                                          ((a = i.data.items),
                                          a.map((e) => {
                                              let t;
                                              if (e.type === n.TEXT) t = e.data.subtitle;
                                              else if (e.type === n.CHOSEN) {
                                                  var a;
                                                  let l = s.get(null != (a = e.data.key) ? a : '');
                                                  t = null == l ? void 0 : l.data.text;
                                              }
                                              return { title: e.data.title, subtitle: t };
                                          }));
                                  return (0, u.jsxs)(
                                      'div',
                                      {
                                          className: eB().slide,
                                          children: [
                                              (0, u.jsxs)('div', {
                                                  className: eB().topBlock,
                                                  children: [
                                                      r && (0, u.jsx)(h.Image, { className: eB().topBlockBackground, src: r, withAvatarReplace: !0 }),
                                                      c.map((e, t) => {
                                                          let { uri: a, coverMask: l, coverBackground: i, rectangle: r } = e;
                                                          return (0, u.jsx)(
                                                              'div',
                                                              {
                                                                  className: eB().topBlockImageWrapper,
                                                                  style: r,
                                                                  children: (0, u.jsx)(O.pU, {
                                                                      backgroundSrc: i,
                                                                      className: eB().topBlockImage,
                                                                      fit: 'contain',
                                                                      maskSrc: l,
                                                                      size: en.e0,
                                                                      src: a,
                                                                      withAvatarReplace: !0,
                                                                      withSrcSet: !1,
                                                                  }),
                                                              },
                                                              t,
                                                          );
                                                      }),
                                                  ],
                                              }),
                                              (0, u.jsx)('div', {
                                                  className: eB().bottomBlock,
                                                  children: g.map((e, t) => {
                                                      let { title: a, subtitle: l } = e;
                                                      return (0, u.jsxs)(
                                                          'div',
                                                          {
                                                              className: eB().bottomBlock_item,
                                                              children: [
                                                                  a && (0, u.jsx)(Q, { caption: a, className: eB().title, lineClamp: 1 }),
                                                                  l && (0, u.jsx)(e_, { heading: l, className: eB().subtitle, lineClamp: 1 === t ? 1 : 2 }),
                                                              ],
                                                          },
                                                          a,
                                                      );
                                                  }),
                                              }),
                                          ],
                                      },
                                      t,
                                  );
                              }),
                          }),
                      })
                    : null;
            });
            var eP = a(45058),
                eD = a.n(eP);
            let eG = (e) => {
                let { data: t } = e;
                return (0, u.jsxs)('div', {
                    className: eD().root,
                    children: [
                        (0, u.jsx)(B.Caption, {
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'medium',
                            className: (0, g.$)(eD().description, eD().text),
                            lineClamp: 3,
                            children: t.description,
                        }),
                        t.artwork && (0, u.jsx)(h.Image, { src: t.artwork, size: 300, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0, className: eD().artwork }),
                        (0, u.jsx)(B.Heading, {
                            variant: 'h2',
                            size: 'xl',
                            weight: 'black',
                            className: (0, g.$)(eD().title, eD().text),
                            lineClamp: 2,
                            children: t.title,
                        }),
                    ],
                });
            };
            (d || (d = {})).REWIND = 'REWIND';
            let eX = { src: '/_next/static/media/trailer_animated.aa3fd227.gif' };
            var eH = a(69282),
                eM = a.n(eH);
            let ez = (0, m.PA)((e) => {
                var t, a, i;
                let { data: r, withPersonalColor: n } = e,
                    { user: o } = (0, b.Pjs)(),
                    s = r.entityType === d.REWIND || !!(null == (t = r.smallRoundCover) ? void 0 : t.uri),
                    c = (0, _.useMemo)(() => {
                        if (!n || !o.collectionHue) {
                            var e;
                            return {
                                '--cover-background-color': r.cover.color,
                                '--small-round-cover-background-color': null == (e = r.smallRoundCover) ? void 0 : e.color,
                            };
                        }
                        return {
                            '--cover-background-color': (0, b.eWZ)(o.collectionHue, 0.8, 0.6),
                            '--small-round-cover-background-color': (0, b.eWZ)(o.collectionHue, 1, 0.35),
                        };
                    }, [r.cover.color, null == (a = r.smallRoundCover) ? void 0 : a.color, o.collectionHue, n]),
                    m = (0, _.useMemo)(() => {
                        var e;
                        return r.entityType === d.REWIND
                            ? (0, u.jsx)(L.Paper, {
                                  radius: 'round',
                                  className: eM().smallRoundCover,
                                  children: (0, u.jsx)(h.Image, {
                                      src: eX.src,
                                      withFallback: !1,
                                      withLoadingIndicator: !1,
                                      fit: 'contain',
                                      className: eM().trailer,
                                      'aria-hidden': !0,
                                  }),
                              })
                            : (null == (e = r.smallRoundCover) ? void 0 : e.uri)
                              ? (0, u.jsx)(L.Paper, {
                                    radius: 'round',
                                    className: (0, g.$)(eM().smallRoundCover, eM().smallRoundCover_withShadow),
                                    children: (0, u.jsx)(O.BW, { src: r.smallRoundCover.uri, withAvatarReplace: !0, fit: 'contain', size: 100, className: eM().image }),
                                })
                              : void 0;
                    }, [r.entityType, null == (i = r.smallRoundCover) ? void 0 : i.uri]),
                    v = r.align === l.BOTTOM;
                return (0, u.jsxs)('div', {
                    className: eM().root,
                    style: c,
                    children: [
                        !v && r.description && (0, u.jsx)(Q, { caption: r.description, className: eM().description, lineClamp: 3 }),
                        (0, u.jsx)(L.Paper, {
                            className: (0, g.$)(eM().cover, { [eM().cover_small]: v }),
                            children:
                                r.cover.uri &&
                                (0, u.jsx)(O.pU, {
                                    backgroundSrc: r.coverBackground,
                                    className: eM().image,
                                    fit: 'contain',
                                    maskSrc: r.coverMask,
                                    size: en.e0,
                                    src: r.cover.uri,
                                    withAvatarReplace: !0,
                                    withSrcSet: !1,
                                }),
                        }),
                        (0, u.jsxs)('div', {
                            className: (0, g.$)(eM().meta, { [eM().meta_withCover]: s }),
                            children: [
                                m,
                                r.subtitle && (0, u.jsx)(Q, { caption: r.subtitle, className: eM().subtitle, lineClamp: 3 }),
                                r.title && (0, u.jsx)(e_, { heading: r.title, lineClamp: 3 }),
                                v && r.description && (0, u.jsx)(Q, { caption: r.description, className: eM().description, lineClamp: 3 }),
                            ],
                        }),
                    ],
                });
            });
            var eV = a(76064),
                eU = a.n(eV);
            let eF = (e) => {
                var t, a;
                let { data: l } = e;
                return (0, u.jsxs)('div', {
                    className: eU().root,
                    children: [
                        (0, u.jsx)(Q, { caption: null != (t = l.header) ? t : '', className: eU().text, lineClamp: 3 }),
                        l.stats.map((e) =>
                            (0, u.jsx)(ea, { data: e, descriptionLineClamp: 2, withAutoResize: !0, withOpacity: !0 }, ''.concat(e.value, '-').concat(e.valueDescription)),
                        ),
                        (0, u.jsx)(Q, { caption: null != (a = l.footer) ? a : '', className: eU().text, lineClamp: 3 }),
                    ],
                });
            };
            !(function (e) {
                (e.SMALL = 'SMALL'), (e.BIG = 'BIG');
            })(c || (c = {}));
            var e$ = a(45186),
                eW = a.n(e$);
            let eY = (e) => {
                var t;
                let { data: a } = e,
                    l = a.titleSize === c.BIG ? 'xxl' : 'xl';
                return (0, u.jsxs)('div', {
                    className: eW().root,
                    children: [
                        (0, u.jsx)(B.Heading, { variant: 'h2', size: l, weight: 'black', className: eW().text, children: a.title }),
                        (0, u.jsx)(Q, { caption: null != (t = a.subtitle) ? t : '', className: eW().text, lineClamp: 3 }),
                    ],
                });
            };
            var eJ = a(69914),
                eZ = a.n(eJ);
            let eq = (e) => {
                let {
                    data: { title: t, subtitle: a, description: l },
                } = e;
                return (0, u.jsxs)('div', {
                    className: eZ().root,
                    children: [
                        (0, u.jsx)(B.Heading, {
                            variant: 'h2',
                            size: 'xxxl',
                            weight: 'black',
                            className: (0, g.$)(eZ().text, eZ().header),
                            dangerouslySetInnerHTML: { __html: (0, y.sanitizeDOM)(t || '') },
                        }),
                        (0, u.jsx)(B.Heading, {
                            variant: 'h3',
                            size: 'xl',
                            weight: 'black',
                            className: eZ().text,
                            dangerouslySetInnerHTML: { __html: (0, y.sanitizeDOM)(a || '') },
                        }),
                        l &&
                            (0, u.jsx)(B.Caption, {
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                className: eZ().text,
                                dangerouslySetInnerHTML: { __html: (0, y.sanitizeDOM)(l) },
                            }),
                    ],
                });
            };
            var eQ = a(67958),
                e0 = a.n(eQ);
            let e1 = (e) => {
                let { data: t } = e,
                    a = t.coverType === i.CIRCLE ? 'round' : 'xs';
                return (0, u.jsxs)('div', {
                    className: e0().root,
                    children: [
                        t.smallCover &&
                            (0, u.jsx)(L.Paper, {
                                radius: a,
                                className: e0().cover,
                                children: (0, u.jsx)(O.BW, { src: t.smallCover, withAvatarReplace: !0, fit: 'contain', size: 100, className: e0().image }),
                            }),
                        t.coverTitle && (0, u.jsx)(B.Heading, { variant: 'span', weight: 'bold', size: 'l', className: e0().text, lineClamp: 3, children: t.coverTitle }),
                        (0, u.jsx)(ea, { data: t, withAutoResize: !0 }),
                    ],
                });
            };
            var e2 = a(12978),
                e8 = a.n(e2);
            let e3 = (e) => {
                    let { label: t, description: a, artistsName: l, trackTitle: i, coverUri: r } = e,
                        n = [l, i].filter(Boolean).join(' • ');
                    return (0, u.jsxs)('div', {
                        children: [
                            (0, u.jsx)(B.Heading, { className: (0, g.$)(e8().textSecondary, e8().itemLabel), variant: 'h3', size: 's', weight: 'black', children: t }),
                            (0, u.jsx)(h.Image, {
                                className: e8().cover,
                                src: r,
                                fit: 'cover',
                                withLoadingIndicator: !1,
                                withFallback: !0,
                                withAvatarReplace: !0,
                                withAspectRatio: !0,
                                'aria-hidden': !0,
                            }),
                            (0, u.jsx)(B.Caption, {
                                className: (0, g.$)(e8().textPrimary, e8().itemMeta),
                                variant: 'div',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                lineClamp: 2,
                                children: n,
                            }),
                            (0, u.jsx)(B.Heading, { className: (0, g.$)(e8().textSecondary, e8().header), variant: 'h3', size: 'xl', weight: 'black', children: a }),
                        ],
                    });
                },
                e5 = (0, m.PA)((e) => {
                    var t, a, l, i, r, n, o, s, d, c, m, _;
                    let { data: v } = e,
                        { title: p, subtitle: C, firstItem: x, secondItem: S } = v;
                    return (0, u.jsxs)('div', {
                        className: e8().root,
                        children: [
                            (0, u.jsxs)('div', {
                                className: e8().row,
                                children: [
                                    (0, u.jsx)(B.Heading, {
                                        className: (0, g.$)(e8().textPrimary, e8().header),
                                        variant: 'h2',
                                        size: 'xxxl',
                                        weight: 'black',
                                        children: p,
                                    }),
                                    (0, u.jsx)(B.Heading, { className: e8().textPrimary, variant: 'h3', size: 's', weight: 'black', children: C }),
                                ],
                            }),
                            x &&
                                (0, u.jsx)('div', {
                                    className: e8().row,
                                    children: (0, u.jsx)(e3, {
                                        label: x.label,
                                        description: x.description,
                                        artistsName: null != (o = null == (t = x.track) ? void 0 : t.artistsName) ? o : null,
                                        trackTitle: null != (s = null == (a = x.track) ? void 0 : a.title) ? s : null,
                                        coverUri: null != (d = null == (l = x.track) ? void 0 : l.coverUri) ? d : void 0,
                                    }),
                                }),
                            S &&
                                (0, u.jsx)('div', {
                                    className: e8().row,
                                    children: (0, u.jsx)(e3, {
                                        label: S.label,
                                        description: S.description,
                                        artistsName: null != (c = null == (i = S.track) ? void 0 : i.artistsName) ? c : null,
                                        trackTitle: null != (m = null == (r = S.track) ? void 0 : r.title) ? m : null,
                                        coverUri: null != (_ = null == (n = S.track) ? void 0 : n.coverUri) ? _ : void 0,
                                    }),
                                }),
                        ],
                    });
                }),
                e6 = (e) => {
                    let { content: t, withPersonalColor: a, ...l } = e;
                    if (null == t ? void 0 : t.data)
                        switch (t.type) {
                            case p.x.TEXT:
                                return (0, u.jsx)(eY, { data: t.data });
                            case p.x.STATS:
                                return (0, u.jsx)(eF, { data: t.data });
                            case p.x.CHART:
                                return (0, u.jsx)(ef, { data: t.data });
                            case p.x.CHART_FAVORITES:
                                return (0, u.jsx)(ej, { data: t.data });
                            case p.x.SINGLE_ENTITY:
                                return (0, u.jsx)(ez, { data: t.data, withPersonalColor: a });
                            case p.x.TEXT_FACT:
                                return (0, u.jsx)(e1, { data: t.data });
                            case p.x.CHART_ARTIST:
                                return (0, u.jsx)(ek, { data: t.data });
                            case p.x.ARTISTS:
                                return (0, u.jsx)(er, { data: t.data });
                            case p.x.TEXT_EXTENDED:
                                return (0, u.jsx)(eq, { data: t.data });
                            case p.x.THEN_NOW_COMPARISON:
                                return (0, u.jsx)(e5, { data: t.data });
                            case p.x.PAY_CARD:
                                return (0, u.jsx)(eG, { data: t.data });
                            case p.x.CAROUSEL:
                                return (0, u.jsx)(eC, { data: t.data, ...l });
                            case p.x.COLLAGE:
                                return (0, u.jsx)(eO, { data: t.data, onBackgroundChange: l.onBackgroundChange, ...l });
                        }
                    return null;
                };
            var e4 = a(82071),
                e7 = a.n(e4);
            let e9 = !0,
                te = (0, m.PA)((e) => {
                    var t;
                    let { slide: a, isActive: i } = e,
                        {
                            slides: { savedChoice: r, saveChoice: n, isMuted: o },
                        } = (0, b.Pjs)(),
                        s = (0, b.mFl)(),
                        { carouselIndex: d = 0, setCarouselIndex: c } = a,
                        m = (0, b.jjz)(),
                        y = (0, _.useRef)(null),
                        [h, K] = (0, _.useState)(void 0),
                        [N, T] = (0, _.useState)(0),
                        [E, I] = (0, _.useState)(a.background),
                        { state: w, toggleTrue: f, toggleFalse: A } = (0, x.e)(!1),
                        R = (0, _.useMemo)(() => {
                            let e = a.content;
                            if ((null == e ? void 0 : e.data) && 'align' in e.data) {
                                var t;
                                switch (null == (t = e.data) ? void 0 : t.align) {
                                    case l.TOP:
                                        return 'top';
                                    case l.CENTER:
                                        break;
                                    case l.BOTTOM:
                                        return 'bottom';
                                }
                            }
                            return 'center';
                        }, [a]);
                    (0, _.useEffect)(() => {
                        var e, t, l, i, r;
                        ((null == (e = a.content) ? void 0 : e.type) === p.x.CAROUSEL || (null == (t = a.content) ? void 0 : t.type) === p.x.COLLAGE) &&
                            T(null != (r = null == (i = a.content.data) || null == (l = i.items) ? void 0 : l.length) ? r : 0);
                    }, [a.content]),
                        (0, _.useEffect)(() => {
                            o || (e9 = !0), o && e9 && (s({ actionType: v.X2.MuteTrailer }), (e9 = !1));
                        }, [o, s]);
                    let j = (0, C.c)((e) => K(e)),
                        L = (0, C.c)(() => (null == h ? void 0 : h.slidePrev())),
                        B = (0, C.c)(() => (null == h ? void 0 : h.slideNext())),
                        O = (0, C.c)(() => {
                            r && a.savedChoiceKey && n(a.savedChoiceKey, { ...r, isSaved: !1 });
                        }),
                        P = (0, C.c)(() => {
                            var e, t, l, i, r;
                            if (!a.savedChoiceKey || (null == (e = a.content) ? void 0 : e.type) !== p.x.CAROUSEL) return;
                            let o = null == (i = a.content.data) || null == (l = i.items) || null == (t = l[d]) ? void 0 : t.data;
                            if (!o) return;
                            s({ actionType: v.X2.SelectSlideItem, objectPosX: d + 1 });
                            let { coverMask: c, coverBackground: u, title: g, cover: m } = o;
                            n(a.savedChoiceKey, { data: { coverMask: c, coverBackground: u, text: g, uri: null != (r = m.uri) ? r : void 0 }, index: d, isSaved: !0 });
                        }),
                        D = (0, C.c)((e, t) => {
                            c(e), T(t);
                        }),
                        G = (0, C.c)((e) => I({ ...E, bgImageUrl: e }));
                    return (0, u.jsx)('div', {
                        className: (0, g.$)(e7().root, { [e7().wideContent]: (null == (t = a.content) ? void 0 : t.type) === p.x.COLLAGE }),
                        ref: y,
                        children: (0, u.jsxs)(k, {
                            isActive: i,
                            isContentVisible: w,
                            setContentVisible: f,
                            setContentInvisible: A,
                            background: E,
                            className: e7().background,
                            children: [
                                a.logo && (0, u.jsx)(S.gu, { alignIcon: 'center', className: e7().logo, 'data-scale': !0, lang: m }),
                                a.content &&
                                    w &&
                                    (0, u.jsx)('div', {
                                        className: (0, g.$)(e7().content, e7()['content_align_'.concat(R)], { [e7().playAnimation]: w }),
                                        children: (0, u.jsx)(e6, {
                                            carouselIndex: d,
                                            content: a.content,
                                            withPersonalColor: a.background.withPersonalColor,
                                            onCarouselReady: j,
                                            onSlideChange: D,
                                            onBackgroundChange: G,
                                        }),
                                    }),
                                (0, u.jsx)('div', {
                                    'data-screenshot-hidden': !0,
                                    className: e7().buttonsContainer,
                                    children: (0, u.jsx)($, {
                                        cardRef: y,
                                        className: e7().button,
                                        slide: a,
                                        onEditChoice: O,
                                        onSaveChoice: P,
                                        onSlidePrev: L,
                                        onSlideNext: B,
                                        hasLeft: d > 0,
                                        hasRight: d < N - 1,
                                    }),
                                }),
                            ],
                        }),
                    });
                });
        },
        29854: (e) => {
            e.exports = { root: 'ChartContent_root__MFONP', text: 'ChartContent_text__cB18f' };
        },
        31016: (e) => {
            e.exports = {
                root: 'CollageContent_root__NLzGo',
                slide: 'CollageContent_slide__5PvMl',
                topBlock: 'CollageContent_topBlock__7ckc_',
                topBlockBackground: 'CollageContent_topBlockBackground__y6HYf',
                topBlockImageWrapper: 'CollageContent_topBlockImageWrapper__Yc87n',
                topBlockImage: 'CollageContent_topBlockImage__tePia',
                subtitle: 'CollageContent_subtitle__M4cCR',
                title: 'CollageContent_title__35r5H',
                bottomBlock: 'CollageContent_bottomBlock__lSJaw',
                bottomBlock_item: 'CollageContent_bottomBlock_item__kSW3C',
            };
        },
        31756: (e, t, a) => {
            'use strict';
            a.d(t, { EK: () => d, GF: () => n, Tu: () => o, VI: () => s, bF: () => c, bg: () => g, e0: () => m, fZ: () => r, g2: () => l, ur: () => u, wO: () => i });
            let l = 'avatars.mds.yandex.net/get-music-misc/28592/img.68eebe12749d24738fe2018e/%%',
                i = 'avatars.mds.yandex.net/get-music-misc/28592/img.68eebdb294053d016bcd7bf0/%%',
                r = 0.5,
                n = 1.5,
                o = 1,
                s = 1920,
                d = 20,
                c = 1.7,
                u = 16,
                g = '.swiper-pagination,[data-screenshot-hidden]',
                m = 600;
        },
        34340: (e) => {
            e.exports = {
                root: 'ActionButton_root__YMLj2',
                cover: 'ActionButton_cover__04uzU',
                image: 'ActionButton_image__Lrf7N',
                text: 'ActionButton_text__wPgyi',
                icon: 'ActionButton_icon__fKoaq',
            };
        },
        45058: (e) => {
            e.exports = {
                root: 'PayCard_root__wjBVD',
                title: 'PayCard_title__t7qpS',
                description: 'PayCard_description__hh2_O',
                text: 'PayCard_text__w251H',
                artwork: 'PayCard_artwork__9oAUA',
            };
        },
        45186: (e) => {
            e.exports = { root: 'TextContent_root__A4Qmc', subtitle: 'TextContent_subtitle__Xe_FH', text: 'TextContent_text__xsfVD' };
        },
        67958: (e) => {
            e.exports = {
                root: 'TextFactContent_root__vmKoy',
                text: 'TextFactContent_text__e_xOX',
                cover: 'TextFactContent_cover__xYsLC',
                image: 'TextFactContent_image__FnWmg',
            };
        },
        68280: (e) => {
            e.exports = {
                root: 'Carousel_root__2FSoC',
                'swiper-pagination-disabled': 'Carousel_swiper-pagination-disabled__vC0R2',
                'swiper-pagination-clickable': 'Carousel_swiper-pagination-clickable__M6UTw',
                'swiper-rtl': 'Carousel_swiper-rtl__3mF21',
                'swiper-horizontal': 'Carousel_swiper-horizontal__zEpGi',
                'swiper-vertical': 'Carousel_swiper-vertical__1ADsJ',
                swiper: 'Carousel_swiper__ivHi0',
                slide: 'Carousel_slide__wgnHc',
                wrapper: 'Carousel_wrapper__ruBr5',
            };
        },
        69282: (e) => {
            e.exports = {
                root: 'SingleEntityContent_root__N2vvp',
                description: 'SingleEntityContent_description__3pg2A',
                cover: 'SingleEntityContent_cover__zeDqH',
                cover_withShadow: 'SingleEntityContent_cover_withShadow__tMIE1',
                cover_small: 'SingleEntityContent_cover_small___jnS4',
                meta: 'SingleEntityContent_meta__XxJqA',
                meta_withCover: 'SingleEntityContent_meta_withCover__Bp0Tx',
                smallRoundCover: 'SingleEntityContent_smallRoundCover__jicWf',
                smallRoundCover_withShadow: 'SingleEntityContent_smallRoundCover_withShadow__cjRgd',
                image: 'SingleEntityContent_image__P6nK2',
                trailer: 'SingleEntityContent_trailer__uYOk0',
                subtitle: 'SingleEntityContent_subtitle__KuJyA',
            };
        },
        69914: (e) => {
            e.exports = { root: 'TextExtendedContent_root__vzsuG', text: 'TextExtendedContent_text__ksTX_', header: 'TextExtendedContent_header__yn1Ej' };
        },
        75146: (e) => {
            e.exports = {
                root: 'CarouselContent_root__fLntt',
                slide: 'CarouselContent_slide__MdGZO',
                slideActive: 'CarouselContent_slideActive__fECY6',
                disabled: 'CarouselContent_disabled__fuxnG',
                description: 'CarouselContent_description__IYsQ8',
                cover: 'CarouselContent_cover__Oc6UR',
                meta: 'CarouselContent_meta__0S_Xt',
                image: 'CarouselContent_image__EKRdr',
                title: 'CarouselContent_title__LHzEy',
                subtitle: 'CarouselContent_subtitle__vZKi2',
            };
        },
        76064: (e) => {
            e.exports = { root: 'StatsContent_root__yJVzS', text: 'StatsContent_text__l2xi_' };
        },
        79074: (e) => {
            e.exports = {
                root: 'StatItem_root__L7Uw0',
                root_withOpacity: 'StatItem_root_withOpacity__pOgaf',
                valueContainer: 'StatItem_valueContainer__HlYQZ',
                value: 'StatItem_value__IkJBB',
                unit: 'StatItem_unit__cO46p',
                footer: 'StatItem_footer__QZ7q6',
            };
        },
        82071: (e) => {
            e.exports = {
                root: 'SlideCard_root__RSnvj',
                background: 'SlideCard_background__dftlE',
                logo: 'SlideCard_logo__ocv3o',
                buttonsContainer: 'SlideCard_buttonsContainer__ynOyN',
                wideContent: 'SlideCard_wideContent__TSSJ9',
                playAnimation: 'SlideCard_playAnimation__rFZZ3',
                fade: 'SlideCard_fade__2HpC6',
                content: 'SlideCard_content__7Y6aU',
                content_align_top: 'SlideCard_content_align_top__fDfyz',
                content_align_center: 'SlideCard_content_align_center__QFnxv',
                content_align_bottom: 'SlideCard_content_align_bottom__nsslT',
                button: 'SlideCard_button__EYX_G',
            };
        },
        82816: (e) => {
            e.exports = {
                root: 'ChartArtistContent_root__OPxPJ',
                cover: 'ChartArtistContent_cover__flhXs',
                image: 'ChartArtistContent_image__D2isT',
                title: 'ChartArtistContent_title__a_d_4',
            };
        },
        82864: (e) => {
            e.exports = { root: 'SlideHeading_root__naZ6V' };
        },
        83510: (e, t, a) => {
            'use strict';
            var l;
            a.d(t, { x: () => l }),
                (function (e) {
                    (e.TEXT = 'TEXT'),
                        (e.TEXT_FACT = 'TEXT_FACT'),
                        (e.STATS = 'STATS'),
                        (e.CHART = 'CHART'),
                        (e.CHART_FAVORITES = 'CHART_FAVORITES'),
                        (e.SINGLE_ENTITY = 'SINGLE_ENTITY'),
                        (e.ARTISTS = 'ARTISTS'),
                        (e.CHART_ARTIST = 'CHART_ARTIST'),
                        (e.TEXT_EXTENDED = 'TEXT_EXTENDED'),
                        (e.THEN_NOW_COMPARISON = 'THEN_NOW_COMPARISON'),
                        (e.PAY_CARD = 'PAY_CARD'),
                        (e.CAROUSEL = 'CAROUSEL'),
                        (e.COLLAGE = 'COLLAGE');
                })(l || (l = {}));
        },
        85511: (e) => {
            e.exports = {
                root: 'ChartItem_root__nAl8B',
                animation: 'ChartItem_animation__P8XVq',
                cover: 'ChartItem_cover__jybex',
                order: 'ChartItem_order__rTmAw',
                image: 'ChartItem_image__enYFm',
                meta: 'ChartItem_meta__apT_y',
                text: 'ChartItem_text__qRsWe',
                textVariant: 'ChartItem_textVariant__0NuuM',
                subTitle: 'ChartItem_subTitle__J2Znt',
                stat: 'ChartItem_stat__ofy5i',
                statValueContainer: 'ChartItem_statValueContainer__pn9Ck',
                statValue: 'ChartItem_statValue__fu5js',
            };
        },
        91453: (e) => {
            e.exports = {
                buttonsContainer: 'SlideButtons_buttonsContainer__82Z3p',
                contractButton: 'SlideButtons_contractButton__46CMy',
                editButton: 'SlideButtons_editButton__r2XNo',
                iconButton: 'SlideButtons_iconButton__oC0it',
                arrowLeftButton: 'SlideButtons_arrowLeftButton__LL3LY',
                arrowRightButton: 'SlideButtons_arrowRightButton__405wl',
                mainButtonContainer: 'SlideButtons_mainButtonContainer__4htPC',
            };
        },
        92757: (e) => {
            e.exports = {
                root: 'Background_root__s7ccu',
                media_withPersonalColor: 'Background_media_withPersonalColor__KuaB0',
                firstFrame: 'Background_firstFrame__c5Gw0',
                lastFrame: 'Background_lastFrame__sfpL7',
                media: 'Background_media__8DaeZ',
                hidden: 'Background_hidden__7fdP5',
            };
        },
        92830: (e, t, a) => {
            'use strict';
            a.d(t, { AR: () => e_.SlideCard, z6: () => l, M1: () => em });
            var l = (function (e) {
                    return (e.USER = 'user'), (e.ARTIST = 'artist'), (e.PODCAST = 'podcast'), (e.SPECIAL = 'special'), (e.KIDS = 'kids'), e;
                })({}),
                i = a(93064),
                r = a(83510),
                n = a(83252),
                o = a(7754),
                s = a(31756);
            let d = (e) => (0, i.wg)({ uri: null == e ? void 0 : e.uri, color: null == e ? void 0 : e.color, videoUrl: null == e ? void 0 : e.videoUrl }),
                c = (e) => {
                    let { coverMask: t, coverBackground: a } = e;
                    return (t && a) || ((t = s.g2), (a = s.wO)), { coverMask: t, coverBackground: a };
                },
                u = (e) => (0, i.wg)({ value: e.value, title: e.title, titleType: e.titleType, subtitle: e.subtitle, cover: e.cover, coverType: e.coverType }),
                g = (e) => (0, i.wg)({ value: e.value, valueDescription: e.valueDescription, valueSuffix: e.valueSuffix, footer: e.footer }),
                m = (e) => {
                    var t, a, l, i, r, n, o;
                    return {
                        label: null != (l = e.label) ? l : null,
                        description: null != (i = e.description) ? i : null,
                        track: {
                            title: null != (r = e.track.title) ? r : null,
                            coverUri: null != (n = null == (t = e.track.cover) ? void 0 : t.uri) ? n : null,
                            artistsName: null != (o = null == (a = e.track.artists) ? void 0 : a.map((e) => e.name).join(', ')) ? o : null,
                        },
                    };
                },
                _ = (e, t) => {
                    var a, l, n, _, v, p, C, x, S, b, y, h, K, N, T;
                    let E, k, I;
                    if (null == (a = e.button) ? void 0 : a.type)
                        switch (e.button.type) {
                            case o.m.ACTION:
                                E = ((e) => {
                                    var t;
                                    return (0, i.wg)({
                                        type: o.m.ACTION,
                                        data: { title: e.data.title, imageUrl: e.data.imageUrl, url: null == (t = e.data.action) ? void 0 : t.weblink },
                                    });
                                })(e.button);
                                break;
                            case o.m.SIMPLE:
                                E = ((e) =>
                                    (0, i.wg)({
                                        type: o.m.SIMPLE,
                                        data: { title: e.data.title, buttonColor: e.data.buttonColor, textColor: e.data.textColor, url: e.data.action.weblink },
                                    }))(e.button);
                                break;
                            case o.m.SHARE:
                                E = ((e) => {
                                    let { data: t } = e;
                                    return (0, i.wg)({ type: o.m.SHARE, data: { title: t.title, buttonColor: t.bgColor, textColor: t.titleColor } });
                                })(e.button);
                        }
                    let w = null != (p = e.background.videoUrl) ? p : '';
                    if (null == (l = e.content) ? void 0 : l.type)
                        switch (null == (C = e.content) ? void 0 : C.type) {
                            case r.x.CHART:
                                k = ((e) =>
                                    (0, i.wg)({
                                        type: e.type,
                                        data: { description: e.data.description, isOrderVisible: !!e.data.isOrderVisible, items: e.data.items.map(u) },
                                    }))(e.content);
                                break;
                            case r.x.CHART_FAVORITES:
                                k = ((e) =>
                                    (0, i.wg)({
                                        type: e.type,
                                        data: {
                                            value: e.data.value,
                                            valueDescription: e.data.valueDescription,
                                            valueSuffix: e.data.valueSuffix,
                                            footer: e.data.footer,
                                            description: e.data.description,
                                            isOrderVisible: !!e.data.isOrderVisible,
                                            items: e.data.items.map(u),
                                        },
                                    }))(e.content);
                                break;
                            case r.x.SINGLE_ENTITY:
                                k = ((e) =>
                                    (0, i.wg)({
                                        type: e.type,
                                        data: {
                                            title: e.data.title,
                                            subtitle: e.data.subtitle,
                                            description: e.data.description,
                                            entityType: e.data.entityType,
                                            cover: d(e.data.cover),
                                            align: e.data.align,
                                            smallRoundCover: e.data.smallRoundCover ? d(e.data.smallRoundCover) : void 0,
                                            ...c(e.data),
                                        },
                                    }))(e.content);
                                break;
                            case r.x.STATS:
                                k = ((e) => {
                                    var t;
                                    return (0, i.wg)({
                                        type: e.type,
                                        data: {
                                            header: e.data.header,
                                            footer: null != (t = e.data.footer) ? t : void 0,
                                            align: e.data.align,
                                            stats: e.data.stats.map(g),
                                        },
                                    });
                                })(e.content);
                                break;
                            case r.x.TEXT:
                                k = ((e) =>
                                    (0, i.wg)({
                                        type: e.type,
                                        data: { title: e.data.title, subtitle: e.data.subtitle, align: e.data.align, titleSize: e.data.titleSize },
                                    }))(e.content);
                                break;
                            case r.x.TEXT_FACT:
                                k = ((e) => {
                                    var t, a, l;
                                    return (0, i.wg)({
                                        type: e.type,
                                        data: {
                                            ...g(e.data),
                                            coverType: null != (t = e.data.coverType) ? t : null,
                                            coverTitle: null != (a = e.data.coverTitle) ? a : null,
                                            smallCover: null != (l = e.data.smallCover) ? l : null,
                                        },
                                    });
                                })(e.content);
                                break;
                            case r.x.CHART_ARTIST:
                                k = ((e) => {
                                    let t = e.data.cover ? d(e.data.cover) : null;
                                    return (0, i.wg)({ type: e.type, data: { title: e.data.title, cover: t, items: e.data.items.map(u) } });
                                })(e.content);
                                break;
                            case r.x.ARTISTS:
                                k = ((e) => {
                                    let t = e.data.covers ? e.data.covers.slice(0, 3).map(d) : [];
                                    return (0, i.wg)({
                                        type: e.type,
                                        data: {
                                            value: e.data.value,
                                            valueDescription: e.data.valueDescription,
                                            valueSuffix: e.data.valueSuffix,
                                            footer: e.data.footer,
                                            covers: t,
                                        },
                                    });
                                })(e.content);
                                break;
                            case r.x.TEXT_EXTENDED:
                                k = ((e) => {
                                    var t, a, l;
                                    return {
                                        type: e.type,
                                        data: {
                                            title: null != (t = e.data.title) ? t : null,
                                            subtitle: null != (a = e.data.subtitle) ? a : null,
                                            description: null != (l = e.data.description) ? l : null,
                                        },
                                    };
                                })(e.content);
                                break;
                            case r.x.THEN_NOW_COMPARISON:
                                k = ((e) => {
                                    var t, a;
                                    return {
                                        type: e.type,
                                        data: {
                                            title: null != (t = e.data.title) ? t : null,
                                            subtitle: null != (a = e.data.subtitle) ? a : null,
                                            firstItem: e.data.firstItem ? m(e.data.firstItem) : null,
                                            secondItem: e.data.secondItem ? m(e.data.secondItem) : null,
                                        },
                                    };
                                })(e.content);
                                break;
                            case r.x.PAY_CARD:
                                k = ((e) => {
                                    var t, a, l;
                                    return {
                                        type: e.type,
                                        data: {
                                            title: null != (t = e.data.title) ? t : null,
                                            description: null != (a = e.data.description) ? a : null,
                                            artwork: null != (l = e.data.artwork) ? l : null,
                                        },
                                    };
                                })(e.content);
                                break;
                            case r.x.CAROUSEL:
                                (k = ((e) => {
                                    let t = e.data.items.map((e) => ({
                                        data: {
                                            title: e.data.title,
                                            subtitle: e.data.subtitle,
                                            description: e.data.description,
                                            cover: d(e.data.cover),
                                            coverPlaceholder: e.data.coverPlaceholder,
                                            ...c(e.data),
                                        },
                                    }));
                                    return (0, i.wg)({ type: e.type, data: { savedChoiceKey: e.data.savedChoiceKey, items: t } });
                                })(e.content)),
                                    (I = null == (S = e.content) || null == (x = S.data) ? void 0 : x.savedChoiceKey);
                                break;
                            case r.x.COLLAGE:
                                (k = ((e) => {
                                    let {
                                            data: { items: t },
                                            type: a,
                                        } = e,
                                        l = t.map((e) => ({
                                            contentBackground: { uri: e.contentBackground.uri },
                                            bottomBlock: {
                                                type: e.bottomBlock.type,
                                                data: {
                                                    items: e.bottomBlock.data.items.map((e) => {
                                                        let { type: t, data: a } = e;
                                                        return { type: t, data: { key: a.key, title: a.title, subtitle: a.subtitle } };
                                                    }),
                                                },
                                            },
                                            topBlock: {
                                                type: e.topBlock.type,
                                                data: {
                                                    background: { uri: e.topBlock.data.background.uri },
                                                    items: e.topBlock.data.items.map((e) => {
                                                        let { type: t, data: a } = e;
                                                        return {
                                                            type: t,
                                                            data: {
                                                                key: a.key,
                                                                uri: a.uri,
                                                                rectangle: {
                                                                    x: a.rectangle.x,
                                                                    y: a.rectangle.y,
                                                                    z: a.rectangle.z,
                                                                    width: a.rectangle.width,
                                                                    height: a.rectangle.height,
                                                                },
                                                            },
                                                        };
                                                    }),
                                                },
                                            },
                                        }));
                                    return (0, i.wg)({ type: a, data: { items: l } });
                                })(e.content)),
                                    (w = '');
                        }
                    let f = null != (b = null == (n = e.trailer) ? void 0 : n.tracks) ? b : [],
                        A = null != (y = null == (_ = e.meta) ? void 0 : _.animationDelay) ? y : s.fZ;
                    return (0, i.wg)({
                        id: e.id,
                        background: {
                            animationDelay: A,
                            bgImageUrl: null != (h = e.background.bgImageUrl) ? h : '',
                            videoUrl: w,
                            withSound: !!e.background.withSound,
                            firstFrameVideoUrl: null != (K = e.background.firstFrameVideoUrl) ? K : '',
                            lastFrameVideoUrl: null != (N = e.background.lastFrameVideoUrl) ? N : '',
                            withPersonalColor: !!e.background.withPersonalColor,
                            videoLoopEnabled: !!e.background.videoLoopEnabled,
                        },
                        slideColor: null == (v = e.meta) ? void 0 : v.color,
                        button: E,
                        content: k,
                        trailerRawTracks: f,
                        logo: null != (T = null == t ? void 0 : t.logo) ? T : null,
                        savedChoiceKey: I,
                    });
                };
            var v = a(5693);
            let p = i.gK.model('SlideButtonActionData', { title: i.gK.maybeNull(i.gK.string), imageUrl: i.gK.maybeNull(i.gK.string), url: i.gK.maybeNull(i.gK.string) }),
                C = i.gK.model('SlideButtonAction', { type: i.gK.literal(o.m.ACTION), data: p }),
                x = i.gK.model('SlideButtonSimpleData', {
                    title: i.gK.maybeNull(i.gK.string),
                    buttonColor: i.gK.maybeNull(i.gK.string),
                    textColor: i.gK.maybeNull(i.gK.string),
                }),
                S = i.gK.model('SlideButtonShare', { type: i.gK.literal(o.m.SHARE), data: x }),
                b = i.gK.model('SlideButtonSimpleData', {
                    title: i.gK.maybeNull(i.gK.string),
                    buttonColor: i.gK.maybeNull(i.gK.string),
                    textColor: i.gK.maybeNull(i.gK.string),
                    url: i.gK.maybeNull(i.gK.string),
                }),
                y = i.gK.model('SlideButtonSimple', { type: i.gK.literal(o.m.SIMPLE), data: b }),
                h = i.gK.model('SlideContentCover', { uri: i.gK.maybeNull(i.gK.string), color: i.gK.maybeNull(i.gK.string), videoUrl: i.gK.maybeNull(i.gK.string) }),
                K = i.gK.model('SlideContentStat', {
                    value: i.gK.maybeNull(i.gK.number),
                    valueDescription: i.gK.maybeNull(i.gK.string),
                    valueSuffix: i.gK.maybeNull(i.gK.string),
                    footer: i.gK.maybeNull(i.gK.string),
                }),
                N = i.gK.compose(i.gK.model('SlideContentArtistsModelData', { covers: i.gK.array(h) }), K),
                T = i.gK.model('SlideContentArtistsModel', { type: i.gK.literal(r.x.ARTISTS), data: i.gK.maybe(N) }),
                E = i.gK.model('SlideContentCarouselItemData', {
                    title: i.gK.maybe(i.gK.string),
                    subtitle: i.gK.maybe(i.gK.string),
                    description: i.gK.maybe(i.gK.string),
                    cover: h,
                    coverMask: i.gK.maybe(i.gK.string),
                    coverBackground: i.gK.maybe(i.gK.string),
                    coverPlaceholder: i.gK.maybe(i.gK.string),
                }),
                k = i.gK.model('SlideContentCarouselItem', { data: E }),
                I = i.gK.model('SlideContentCarouselData', { savedChoiceKey: i.gK.maybe(i.gK.string), items: i.gK.array(k) }),
                w = i.gK.model('SlideContentCarousel', { type: i.gK.literal(r.x.CAROUSEL), data: i.gK.maybe(I) }),
                f = i.gK.model('SlideContentItem', {
                    value: i.gK.maybeNull(i.gK.number),
                    title: i.gK.maybeNull(i.gK.string),
                    titleType: i.gK.maybeNull(i.gK.string),
                    subtitle: i.gK.maybeNull(i.gK.string),
                    cover: i.gK.maybeNull(h),
                    coverType: i.gK.maybeNull(i.gK.string),
                }),
                A = i.gK.model('SlideContentChartArtistData', { title: i.gK.maybeNull(i.gK.string), cover: i.gK.maybeNull(h), items: i.gK.array(f) }),
                R = i.gK.model('SlideContentChartArtist', { type: i.gK.literal(r.x.CHART_ARTIST), data: i.gK.maybe(A) }),
                j = i.gK.compose(
                    i.gK.model('SlideContentChartFavoritesData', { description: i.gK.maybeNull(i.gK.string), isOrderVisible: i.gK.boolean, items: i.gK.array(f) }),
                    K,
                ),
                L = i.gK.model('SlideContentChartFavorites', { type: i.gK.literal(r.x.CHART_FAVORITES), data: i.gK.maybe(j) }),
                B = i.gK.model('SlideContentChartData', { description: i.gK.maybeNull(i.gK.string), isOrderVisible: i.gK.boolean, items: i.gK.array(f) }),
                O = i.gK.model('SlideContentChart', { type: i.gK.literal(r.x.CHART), data: i.gK.maybe(B) }),
                P = i.gK.model('SlideContentCollageRectangle', { x: i.gK.number, y: i.gK.number, z: i.gK.number, width: i.gK.number, height: i.gK.number }),
                D = i.gK.model('SlideContentCollageBottomBlockItemData', {
                    key: i.gK.maybe(i.gK.string),
                    title: i.gK.maybe(i.gK.string),
                    subtitle: i.gK.maybe(i.gK.string),
                }),
                G = i.gK.model('SlideContentCollageBottomBlockItem', { type: i.gK.string, data: D }),
                X = i.gK.model('SlideContentCollageBottomBlockData', { items: i.gK.array(G) }),
                H = i.gK.model('SlideContentCollageTopBlockItemData', { key: i.gK.maybe(i.gK.string), uri: i.gK.maybe(i.gK.string), rectangle: P }),
                M = i.gK.model('SlideContentCollageTopBlockItem', { type: i.gK.string, data: H }),
                z = i.gK.model('SlideContentCollageTopBlockData', {
                    background: i.gK.model('SlideContentCollageTopBlockBackground', { uri: i.gK.maybe(i.gK.string) }),
                    items: i.gK.array(M),
                }),
                V = i.gK.model('SlideContentCollageItem', {
                    contentBackground: i.gK.model('SlideContentCollageContentBackground', { uri: i.gK.maybe(i.gK.string) }),
                    bottomBlock: i.gK.model('SlideContentCollageBottomBlock', { type: i.gK.string, data: X }),
                    topBlock: i.gK.model('SlideContentCollageTopBlock', { type: i.gK.string, data: z }),
                }),
                U = i.gK.model('SlideContentCollageData', { items: i.gK.array(V) }),
                F = i.gK.model('SlideContentCollage', { type: i.gK.literal(r.x.COLLAGE), data: U }),
                $ = i.gK.model('SlideContentPayCardData', {
                    title: i.gK.maybeNull(i.gK.string),
                    description: i.gK.maybeNull(i.gK.string),
                    artwork: i.gK.maybeNull(i.gK.string),
                }),
                W = i.gK.model('SlideContentPayCard', { type: i.gK.literal(r.x.PAY_CARD), data: i.gK.maybe($) }),
                Y = i.gK.model('SlideContentSingleEntityData', {
                    title: i.gK.maybeNull(i.gK.string),
                    subtitle: i.gK.maybeNull(i.gK.string),
                    description: i.gK.maybeNull(i.gK.string),
                    entityType: i.gK.maybeNull(i.gK.string),
                    cover: h,
                    coverMask: i.gK.string,
                    coverBackground: i.gK.string,
                    align: i.gK.maybe(i.gK.string),
                    smallRoundCover: i.gK.maybeNull(h),
                }),
                J = i.gK.model('SlideContentSingleEntity', { type: i.gK.literal(r.x.SINGLE_ENTITY), data: i.gK.maybe(Y) }),
                Z = i.gK.model('SlideContentStatsData', {
                    header: i.gK.maybeNull(i.gK.string),
                    footer: i.gK.maybeNull(i.gK.string),
                    align: i.gK.maybeNull(i.gK.string),
                    stats: i.gK.array(K),
                }),
                q = i.gK.model('SlideContentStats', { type: i.gK.literal(r.x.STATS), data: i.gK.maybe(Z) }),
                Q = i.gK.model('SlideContentTextExtendedData', {
                    title: i.gK.maybeNull(i.gK.string),
                    subtitle: i.gK.maybeNull(i.gK.string),
                    description: i.gK.maybeNull(i.gK.string),
                }),
                ee = i.gK.model('SlideContentTextExtended', { type: i.gK.literal(r.x.TEXT_EXTENDED), data: i.gK.maybe(Q) }),
                et = i.gK.compose(
                    i.gK.model('SlideContentTextFactDataModel', {
                        coverType: i.gK.maybeNull(i.gK.string),
                        coverTitle: i.gK.maybeNull(i.gK.string),
                        smallCover: i.gK.maybeNull(i.gK.string),
                    }),
                    K,
                ),
                ea = i.gK.model('SlideContentTextFact', { type: i.gK.literal(r.x.TEXT_FACT), data: i.gK.maybe(et) }),
                el = i.gK.model('SlideContentTextData', {
                    title: i.gK.maybeNull(i.gK.string),
                    subtitle: i.gK.maybeNull(i.gK.string),
                    align: i.gK.maybeNull(i.gK.string),
                    titleSize: i.gK.maybeNull(i.gK.string),
                }),
                ei = i.gK.model('SlideContentText', { type: i.gK.literal(r.x.TEXT), data: i.gK.maybe(el) }),
                er = i.gK.model('SlideContentThenNowComparisonItemTrack', {
                    title: i.gK.maybeNull(i.gK.string),
                    coverUri: i.gK.maybeNull(i.gK.string),
                    artistsName: i.gK.maybeNull(i.gK.string),
                }),
                en = i.gK.model('SlideContentThenNowComparisonItem', {
                    label: i.gK.maybeNull(i.gK.string),
                    description: i.gK.maybeNull(i.gK.string),
                    track: i.gK.maybeNull(er),
                }),
                eo = i.gK.model('SlideContentThenNowComparisonData', {
                    title: i.gK.maybeNull(i.gK.string),
                    subtitle: i.gK.maybeNull(i.gK.string),
                    firstItem: i.gK.maybeNull(en),
                    secondItem: i.gK.maybeNull(en),
                }),
                es = i.gK.model('SlideContentThenNowComparison', { type: i.gK.literal(r.x.THEN_NOW_COMPARISON), data: i.gK.maybe(eo) }),
                ed = i.gK.model('SlideBackground', {
                    animationDelay: i.gK.number,
                    bgImageUrl: i.gK.string,
                    videoUrl: i.gK.string,
                    withSound: i.gK.boolean,
                    firstFrameVideoUrl: i.gK.string,
                    lastFrameVideoUrl: i.gK.string,
                    withPersonalColor: i.gK.boolean,
                    videoLoopEnabled: i.gK.boolean,
                }),
                ec = i.gK
                    .model('Slide', {
                        id: i.gK.string,
                        background: ed,
                        button: i.gK.maybe(i.gK.union(C, S, y)),
                        slideColor: i.gK.maybeNull(i.gK.string),
                        content: i.gK.maybe(i.gK.union(O, L, J, ei, q, ea, R, T, ee, es, W, w, F)),
                        trailerRawTracks: i.gK.maybeNull(i.gK.frozen()),
                        logo: i.gK.maybeNull(i.gK.string),
                        savedChoiceKey: i.gK.maybe(i.gK.string),
                        carouselIndex: i.gK.maybe(i.gK.number),
                    })
                    .views((e) => ({
                        get hasTrailer() {
                            var t;
                            return !!(null == (t = e.trailerRawTracks) ? void 0 : t.length);
                        },
                        get entitiesData() {
                            if (!e.trailerRawTracks) return [];
                            return e.trailerRawTracks.map((e) => ({ type: v.R.SmartPreview, meta: e }));
                        },
                    }))
                    .actions((e) => ({
                        setCarouselIndex(t) {
                            e.carouselIndex = t;
                        },
                    })),
                eu = i.gK.model('SavedChoiceData', {
                    text: i.gK.maybe(i.gK.string),
                    uri: i.gK.maybe(i.gK.string),
                    coverMask: i.gK.maybe(i.gK.string),
                    coverBackground: i.gK.maybe(i.gK.string),
                }),
                eg = i.gK.model('SavedChoice', { index: i.gK.number, isSaved: i.gK.boolean, data: eu }),
                em = i.gK
                    .model('Slides', {
                        userSlidesLoadingState: i.gK.enumeration(Object.values(n.GuX)),
                        artistSlidesLoadingState: i.gK.enumeration(Object.values(n.GuX)),
                        podcastSlidesLoadingState: i.gK.enumeration(Object.values(n.GuX)),
                        specialSlidesLoadingState: i.gK.enumeration(Object.values(n.GuX)),
                        kidsSlidesLoadingState: i.gK.enumeration(Object.values(n.GuX)),
                        consumer: i.gK.maybe(i.gK.enumeration(Object.values(l))),
                        artistId: i.gK.maybe(i.gK.string),
                        podcastId: i.gK.maybe(i.gK.number),
                        campaignId: i.gK.maybe(i.gK.string),
                        activeSlide: i.gK.optional(i.gK.number, 0),
                        userItems: i.gK.array(ec),
                        artistItems: i.gK.array(ec),
                        podcastItems: i.gK.array(ec),
                        specialItems: i.gK.array(ec),
                        kidsItems: i.gK.array(ec),
                        isMuted: i.gK.boolean,
                        savedChoices: i.gK.map(eg),
                        mainObjectId: i.gK.optional(i.gK.string, ''),
                    })
                    .views((e) => ({
                        get isLoaded() {
                            return (
                                e.userSlidesLoadingState === n.GuX.RESOLVE ||
                                e.artistSlidesLoadingState === n.GuX.RESOLVE ||
                                e.podcastSlidesLoadingState === n.GuX.RESOLVE ||
                                e.specialSlidesLoadingState === n.GuX.RESOLVE ||
                                e.kidsSlidesLoadingState === n.GuX.RESOLVE
                            );
                        },
                        get savedChoice() {
                            var t, a;
                            if (e.consumer !== l.USER) return;
                            return e.savedChoices.get(null != (a = null == (t = e.userItems[e.activeSlide]) ? void 0 : t.savedChoiceKey) ? a : '');
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setIsMuted: (t) => {
                                e.isMuted = t;
                            },
                            toggleMute: () => {
                                e.isMuted = !e.isMuted;
                            },
                            getUserSlides: (0, i.L3)(function* () {
                                let { slidesResource: a, modelActionsLogger: r } = (0, i._$)(e);
                                if (e.userSlidesLoadingState !== n.GuX.PENDING)
                                    try {
                                        e.userSlidesLoadingState = n.GuX.PENDING;
                                        let r = yield a.getUserSlides();
                                        e.userSlidesLoadingState !== n.GuX.IDLE && (e.userSlidesLoadingState = n.GuX.RESOLVE),
                                            r.slides && ((e.consumer = l.USER), (e.mainObjectId = e.consumer), (e.userItems = (0, i.wg)(t.processSlidesResponse(r)))),
                                            (e.userSlidesLoadingState = n.GuX.RESOLVE);
                                    } catch (t) {
                                        r.error(t), e.userSlidesLoadingState !== n.GuX.IDLE && ((e.userSlidesLoadingState = n.GuX.REJECT), (e.userItems = (0, i.wg)([])));
                                    }
                            }),
                            getArtistSlides: (0, i.L3)(function* (a) {
                                let { slidesResource: r, modelActionsLogger: o } = (0, i._$)(e);
                                if (e.artistSlidesLoadingState !== n.GuX.PENDING) {
                                    e.artistId = a.artistId;
                                    try {
                                        e.artistSlidesLoadingState = n.GuX.PENDING;
                                        let o = yield r.getArtistSlides(a);
                                        e.artistSlidesLoadingState !== n.GuX.IDLE && (e.artistSlidesLoadingState = n.GuX.RESOLVE),
                                            o.slides &&
                                                ((e.consumer = l.ARTIST),
                                                (e.mainObjectId = ''.concat(e.consumer, ':').concat(e.artistId)),
                                                (e.artistItems = (0, i.wg)(t.processSlidesResponse(o)))),
                                            (e.artistSlidesLoadingState = n.GuX.RESOLVE);
                                    } catch (t) {
                                        o.error(t),
                                            e.artistSlidesLoadingState !== n.GuX.IDLE && ((e.artistSlidesLoadingState = n.GuX.REJECT), (e.artistItems = (0, i.wg)([])));
                                    }
                                }
                            }),
                            getPodcastSlides: (0, i.L3)(function* (a) {
                                let { slidesResource: r, modelActionsLogger: o } = (0, i._$)(e);
                                if (e.podcastSlidesLoadingState !== n.GuX.PENDING) {
                                    e.podcastId = a.podcastId;
                                    try {
                                        e.podcastSlidesLoadingState = n.GuX.PENDING;
                                        let o = yield r.getPodcastSlides(a);
                                        e.podcastSlidesLoadingState !== n.GuX.IDLE && (e.podcastSlidesLoadingState = n.GuX.RESOLVE),
                                            o.slides &&
                                                ((e.consumer = l.PODCAST),
                                                (e.mainObjectId = ''.concat(e.consumer, ':').concat(e.podcastId)),
                                                (e.podcastItems = (0, i.wg)(t.processSlidesResponse(o)))),
                                            (e.podcastSlidesLoadingState = n.GuX.RESOLVE);
                                    } catch (t) {
                                        o.error(t),
                                            e.podcastSlidesLoadingState !== n.GuX.IDLE &&
                                                ((e.podcastSlidesLoadingState = n.GuX.REJECT), (e.podcastItems = (0, i.wg)([])));
                                    }
                                }
                            }),
                            getSpecialSlides: (0, i.L3)(function* (a) {
                                let { slidesResource: r, modelActionsLogger: o } = (0, i._$)(e);
                                if (e.specialSlidesLoadingState !== n.GuX.PENDING) {
                                    e.campaignId = a.campaignId;
                                    try {
                                        e.specialSlidesLoadingState = n.GuX.PENDING;
                                        let o = yield r.getSpecialSlides(a);
                                        e.specialSlidesLoadingState !== n.GuX.IDLE && (e.specialSlidesLoadingState = n.GuX.RESOLVE),
                                            o.slides &&
                                                ((e.consumer = l.SPECIAL),
                                                (e.mainObjectId = ''.concat(e.consumer, ':').concat(e.campaignId)),
                                                (e.specialItems = (0, i.wg)(t.processSlidesResponse(o)))),
                                            (e.specialSlidesLoadingState = n.GuX.RESOLVE);
                                    } catch (t) {
                                        o.error(t),
                                            e.specialSlidesLoadingState !== n.GuX.IDLE &&
                                                ((e.specialSlidesLoadingState = n.GuX.REJECT), (e.specialItems = (0, i.wg)([])));
                                    }
                                }
                            }),
                            getKidsSlides: (0, i.L3)(function* () {
                                let { slidesResource: a, modelActionsLogger: r } = (0, i._$)(e);
                                if (e.kidsSlidesLoadingState !== n.GuX.PENDING)
                                    try {
                                        e.kidsSlidesLoadingState = n.GuX.PENDING;
                                        let r = yield a.getKidsSlides();
                                        e.kidsSlidesLoadingState !== n.GuX.IDLE && (e.kidsSlidesLoadingState = n.GuX.RESOLVE),
                                            r.slides && ((e.consumer = l.KIDS), (e.mainObjectId = e.consumer), (e.kidsItems = (0, i.wg)(t.processSlidesResponse(r)))),
                                            (e.kidsSlidesLoadingState = n.GuX.RESOLVE);
                                    } catch (t) {
                                        r.error(t), e.kidsSlidesLoadingState !== n.GuX.IDLE && ((e.kidsSlidesLoadingState = n.GuX.REJECT), (e.kidsItems = (0, i.wg)([])));
                                    }
                            }),
                            setActiveSlide(t) {
                                e.activeSlide = t;
                            },
                            resetUser() {
                                (e.userSlidesLoadingState = n.GuX.IDLE), (e.userItems = (0, i.wg)([]));
                            },
                            resetArtist() {
                                (e.artistSlidesLoadingState = n.GuX.IDLE), (e.artistItems = (0, i.wg)([]));
                            },
                            resetPodcast() {
                                (e.podcastSlidesLoadingState = n.GuX.IDLE), (e.podcastItems = (0, i.wg)([]));
                            },
                            resetKids() {
                                (e.kidsSlidesLoadingState = n.GuX.IDLE), (e.kidsItems = (0, i.wg)([]));
                            },
                            resetSpecial() {
                                (e.specialSlidesLoadingState = n.GuX.IDLE), (e.specialItems = (0, i.wg)([]));
                            },
                            saveChoice(t, a) {
                                e.savedChoices.set(t, a);
                            },
                            processSlidesResponse(e) {
                                let a = [];
                                for (let c of e.slides) {
                                    var l, i, n, o, s, d;
                                    let u = _(c, { logo: e.logo });
                                    if ((a.push(u), u.savedChoiceKey && (null == (l = u.content) ? void 0 : l.type) === r.x.CAROUSEL)) {
                                        let e = null == (o = u.content) || null == (n = o.data) || null == (i = n.items[0]) ? void 0 : i.data;
                                        if (!e) continue;
                                        t.saveChoice(u.savedChoiceKey, {
                                            index: 0,
                                            isSaved: !1,
                                            data: {
                                                coverBackground: e.coverBackground,
                                                coverMask: e.coverMask,
                                                text: e.title,
                                                uri: null != (d = null == (s = e.cover) ? void 0 : s.uri) ? d : void 0,
                                            },
                                        });
                                    }
                                }
                                return a;
                            },
                        };
                        return t;
                    });
            var e_ = a(18259);
        },
        93988: (e) => {
            e.exports = { root: 'SlideCaption_root__JumhY' };
        },
        94894: (e) => {
            e.exports = { root: 'ChartFavoriteContent_root__ksE_w', description: 'ChartFavoriteContent_description__CCBKM' };
        },
        99020: (e) => {
            e.exports = { root: 'CommonButton_root__thXs_' };
        },
    },
]);
