(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2232, 6252],
    {
        356: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        3377: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => v });
            var r = i(32290),
                a = i(96103),
                s = i(21916),
                n = i(63618),
                l = i(39407),
                o = i(71926),
                c = i(94218),
                d = i(55556),
                u = i.n(d);
            let m = (0, a.PA)(() =>
                (0, r.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, r.jsx)(o.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(o.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var _ = i(20472),
                h = i(57594);
            let v = (0, a.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: a } = (0, h.g)();
                return a.isAuthorized ? t : (i && (0, s.redirect)(_.Z.main.href), (0, r.jsx)(m, {}));
            });
        },
        4820: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var r = i(32290),
                a = i(55178),
                s = i(21732),
                n = i(71926),
                l = i(91624),
                o = i.n(l);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [l, c] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    l)
                )
                    return l.map((e, t) =>
                        (0, r.jsx)(
                            n.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': s.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        5942: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var r = i(32290),
                a = i(92708),
                s = i(55178),
                n = i(60900),
                l = i(63380),
                o = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                m = i(20472),
                _ = i(97647),
                h = i(97755);
            let v = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, r.jsx)(h.O, {
                        closeToast: i,
                        entityVariant: _.c.ARTIST,
                        entityUrl: t.url,
                        collectionUrl: m.Z.collectionArtists.href,
                        coverUri: t.coverUri,
                        entityTitle: t.name,
                        isLiked: t.isLiked,
                    });
                },
                p = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [m, _] = (0, s.useState)(!1),
                        { formatMessage: h } = (0, n.A)();
                    return (0, s.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (m) return;
                        let s = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                        _(!0);
                        let n = await e.toggleLike();
                        _(!1),
                            n === l.f.OK
                                ? i((0, r.jsx)(v, { artist: s }), { containerId: o.u.INFO })
                                : i((0, r.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [e, t.isAuthorized, m, h, i]);
                };
        },
        7474: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => F });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                l = i(60900),
                o = i(16172),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                m = i(6752),
                _ = i(14934),
                h = i(82586),
                v = i(86269),
                p = i(71926),
                x = i(91853),
                g = i(5942),
                f = i(70390),
                C = i(71735),
                A = i(47745),
                b = i(2969),
                k = i(54391),
                T = i(23352),
                S = i(72396),
                y = i(5537),
                I = i(84062),
                N = i(28999),
                j = i(90169),
                E = i(57594),
                O = i(11323),
                L = i(92744),
                P = i(61258),
                R = i(10180),
                D = i(90326),
                w = i(29268),
                B = i(34925),
                z = i(80528),
                M = i(42048),
                W = i.n(M);
            let F = (0, s.PA)((e) => {
                let { artist: t, className: i, children: s, contentLinesCount: M, topTitleElement: F, bottomTitleElement: H } = e,
                    { ref: K, intersectionPropertyId: U } = (0, T.n)(),
                    {
                        trailer: $,
                        user: V,
                        paywall: { modal: G },
                    } = (0, E.g)(),
                    { from: X, utmLink: q } = (0, S.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: Z } = (0, l.A)(),
                    [Y, Q] = (0, n.useState)(!1),
                    [J, ee] = (0, n.useState)(!1),
                    [et, ei] = (0, n.useState)(!1),
                    { sendLikeSearchFeedback: er, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: es } = (0, N.z)(),
                    en = (0, A.N)(),
                    el = (0, b.b)(),
                    eo = (0, g.K)(t),
                    ec = (0, f.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: e_ } = t,
                    eh = (0, I.Z)(t.url),
                    [ev, ep] = (0, n.useState)(!1),
                    ex = (0, k.F)(),
                    eg = (0, C.P)(),
                    ef = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eg())) return void e.preventDefault();
                        $.openArtistTrailer(t.id), ex(o.ky.Artist, t.id);
                    }),
                    eC = (0, n.useMemo)(() => {
                        let e = Z({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = e_ ? Z({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, e_, Z]),
                    { isPlaying: eA, togglePlay: eb } = (0, j.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: X, utmLink: q }, loadContextMeta: !0 },
                    }),
                    ek = (0, x.S)({ artist: t, callback: eh }),
                    eT = (0, x.S)({ artist: t, callback: eb }),
                    eS = (0, u.c)((e) => {
                        null == ea || ea(), en({ to: o.QT.ArtistScreen }), ek(e);
                    }),
                    ey = (0, y.N)(),
                    eI = (0, u.c)(() => {
                        if (!eg()) {
                            if (ey) return void G.open();
                            Y || eA || (Q(!0), null == es || es()), eT(), el(!eA);
                        }
                    }),
                    eN = (0, u.c)(() => {
                        J || e_ || (ee(!0), null == er || er()), eo();
                    }),
                    ej = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    eE = (0, u.c)((e) => {
                        ei(e), ep(e);
                    }),
                    eO = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(
                                z.g,
                                {
                                    artist: t,
                                    onOpenChange: eE,
                                    open: et,
                                    onClick: ej,
                                    className: (0, a.$)(W().menuButton, W().control),
                                    size: 's',
                                    icon: (0, r.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, ej, eE, et],
                    ),
                    eL = (0, n.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                B.n,
                                {
                                    children: (0, r.jsx)(w.k, {
                                        className: (0, a.$)(W().trailerButton, W().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ef,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ef]),
                    eP = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(
                                R.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, a.$)(W().pinButton, W().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eR = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                _.hg,
                                {
                                    isVisible: et || ev,
                                    className: W().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        D.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(W().playButton, W().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eI,
                                            isPlaying: eA,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        L.c,
                                        {
                                            className: (0, a.$)(W().likeButton, W().control),
                                            isLiked: e_,
                                            onClick: eN,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !V.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eO,
                                    pinControl: eP,
                                    trailerControl: eL,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eD = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(v.t, {
                                className: W().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: W().coverBlock,
                                    onClick: eS,
                                    children: [
                                        (0, r.jsx)(O.B, {
                                            className: W().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eC,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eR,
                                    ],
                                }),
                            }),
                        [eS, em, eC, t.isAvailable, eR],
                    );
                return (0, r.jsx)(_.MN, {
                    ref: K,
                    className: (0, a.$)(W().root, i),
                    textPosition: 'center',
                    'aria-label': eC,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            F,
                            (0, r.jsx)(p.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                children: (0, r.jsx)(P.N, {
                                    className: W().titleLink,
                                    href: t.url,
                                    'aria-label': eC,
                                    onClick: eS,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            H,
                        ],
                    }),
                    srTitle: (0, r.jsx)(P.N, { href: t.url, onClick: eS, children: eC }),
                    'data-intersection-property-id': U,
                    contentLinesCount: M,
                    view: eD,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: s,
                });
            });
        },
        9388: (e) => {
            e.exports = {
                root: 'CollectionDislikesPageContent_root__3AoS5',
                scrollContainer: 'CollectionDislikesPageContent_scrollContainer__px7Vr',
                important: 'CollectionDislikesPageContent_important__Oz6io',
                content: 'CollectionDislikesPageContent_content__fScA9',
                content_withGrid: 'CollectionDislikesPageContent_content_withGrid__wcx80',
                content_tracks: 'CollectionDislikesPageContent_content_tracks__Hyiz_',
                footer: 'CollectionDislikesPageContent_footer__E6nZG',
                item: 'CollectionDislikesPageContent_item__aty4k',
                tabPanel: 'CollectionDislikesPageContent_tabPanel__5L5T_',
                shimmerItem: 'CollectionDislikesPageContent_shimmerItem__FMFR5',
            };
        },
        13798: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => p });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                l = i(60900),
                o = i(26252),
                c = i(21732),
                d = i(6752),
                u = i(82586),
                m = i(57594),
                _ = i(60244),
                h = i(90006),
                v = i.n(h);
            let p = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: s, containerClassName: h, variant: p, size: x = 'xxxs', ...g } = e,
                    { formatMessage: f } = (0, l.A)(),
                    {
                        settings: { isMobile: C },
                    } = (0, m.g)(),
                    [A, b] = (0, n.useState)(null),
                    k = (0, d.L)(() => {
                        switch (p) {
                            case o.JU.E:
                                return 'explicit';
                            case o.JU.AGE_12:
                            case o.JU.AGE_16:
                            case o.JU.AGE_18:
                                return 'adult';
                            case o.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    T = (0, n.useMemo)(() => f({ id: 'extra-explicit.explicit-mark' }), [f]);
                (0, n.useEffect)(() => {
                    i && i().then(b);
                }, [i, s]);
                let S = (null == A ? void 0 : A.join('\n')) || '',
                    y = !!(null == A ? void 0 : A.length) && !C,
                    I = S.length > 0 ? S : T;
                return (0, r.jsx)(_.k, {
                    description: S,
                    placement: 'bottom-start',
                    enabled: y,
                    children: (0, r.jsx)('span', {
                        className: h,
                        children:
                            p === o.JU.SUBSTITUTED
                                ? (0, r.jsxs)('svg', {
                                      className: (0, a.$)(v().explicitMark, t),
                                      viewBox: '0 0 16 16',
                                      role: 'img',
                                      'aria-label': I,
                                      style: { width: 'var(--ym-icon-size-'.concat(x, ')'), height: 'var(--ym-icon-size-'.concat(x, ')') },
                                      ...g,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                      children: [
                                          (0, r.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                          (0, r.jsx)('text', {
                                              x: '8',
                                              y: '9',
                                              fill: 'currentColor',
                                              fontSize: '7',
                                              fontWeight: '700',
                                              textAnchor: 'middle',
                                              dominantBaseline: 'middle',
                                              children: 'S',
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)(u.I, {
                                      className: (0, a.$)(v().explicitMark, t),
                                      'aria-label': I,
                                      variant: k,
                                      size: x,
                                      ...g,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                  }),
                    }),
                });
            });
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        26252: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => m, Yw: () => r, JU: () => a, DQ: () => v, Ve: () => p });
            var r,
                a,
                s = i(98411),
                n = (function () {
                    function e(e) {
                        (this.observableValue = (0, s.vP)(e)), (this.prevValueByListener = new Map());
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var i = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var r = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (a) {
                                    if (a !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && r) {
                                            r = !1;
                                            return;
                                        }
                                        i.prevValueByListener.set(e, a), e(a);
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    (this.observableValue = (0, s.EW)(e)), (this.prevValueByListener = new Map());
                }
                Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var i = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var r = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (a) {
                                if (a !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && r) {
                                        r = !1;
                                        return;
                                    }
                                    i.prevValueByListener.set(e, a), e(a);
                                }
                            })
                        );
                    });
            })();
            class l extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: r = {}, ...a } = t,
                        s = e || 'Internal error';
                    super(s, a), (this.message = s), (this.code = i), (this.data = r), (this.stack = Error(s).stack), Object.setPrototypeOf(this, l.prototype);
                }
            }
            class o extends l {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, o.prototype);
                }
            }
            class c extends l {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, c.prototype);
                }
            }
            !(function (e) {
                (e.MODAL = 'modal'),
                    (e.FOREIGN_AGENT = 'foreignAgent'),
                    (e.INFORMATIONAL = 'informational'),
                    (e.AGE_18 = 'age18'),
                    (e.EXPLICIT = 'explicit'),
                    (e.DESCRIPTION_TEXT = 'descriptionText'),
                    (e.AGE_12_ICON = 'age12Icon'),
                    (e.AGE_16_ICON = 'age16Icon'),
                    (e.AGE_18_ICON = 'age18Icon'),
                    (e.EXPLICIT_ICON = 'explicitIcon'),
                    (e.EXCLAMATION_ICON = 'exclamationIcon'),
                    (e.SUBSTITUTED_ICON = 'substitutedIcon');
            })(r || (r = {}));
            let d = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, r] = i.split(':');
                        e && r && t.push({ type: e, id: r });
                    }
                    return t;
                },
                u = (e, t) => d(e).filter((e) => e.type === t);
            class m {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    (this.dataSource = e.dataSource),
                        (this.itemsObservable = new n(null)),
                        (this.isLoadingObservable = new n(!1)),
                        (this.errorObservable = new n(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable);
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    (this.isLoadingObservable.value = !0), (this.errorObservable.value = null);
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new o(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    (this.loadingPromise = e), await e;
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new c(e, !0);
                }
                async resolveByType(e, t) {
                    let i = u(e, t);
                    return (await Promise.all(i.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = d(e),
                        i = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        r = {};
                    for (let e of i)
                        if (e) {
                            let t = r[e.disclaimerType] ?? [];
                            t.push(e.disclaimerItem), (r[e.disclaimerType] = t);
                        }
                    return r;
                }
                destroy() {
                    (this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null);
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (e) {
                (e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), (e.EXCLAMATION = '!'), (e.SUBSTITUTED = 'substituted');
            })(a || (a = {}));
            let _ = new Map([
                    [r.EXPLICIT_ICON, a.E],
                    [r.AGE_18_ICON, a.AGE_18],
                    [r.AGE_16_ICON, a.AGE_16],
                    [r.AGE_12_ICON, a.AGE_12],
                    [r.EXCLAMATION_ICON, a.EXCLAMATION],
                    [r.SUBSTITUTED_ICON, a.SUBSTITUTED],
                ]),
                h = [r.EXPLICIT_ICON, r.AGE_18_ICON, r.AGE_16_ICON, r.AGE_12_ICON, r.SUBSTITUTED_ICON, r.EXCLAMATION_ICON],
                v = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = u(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, h);
                    if (null === t) return null;
                    let i = _.get(t.type);
                    return void 0 !== i ? i : null;
                },
                p = (e, t) => u(e, t).length > 0;
        },
        28076: (e) => {
            e.exports = {
                root: 'CollectionDislikesPageEmpty_root__F9g35',
                icon: 'CollectionDislikesPageEmpty_icon__hbz5L',
                title: 'CollectionDislikesPageEmpty_title__AqUTM',
            };
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(32290),
                a = i(55178),
                s = i(60900),
                n = i(21732),
                l = i(63423),
                o = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: h,
                            className: v,
                            forwardRef: p,
                            style: x,
                            children: g,
                        } = e,
                        { formatMessage: f } = (0, s.A)(),
                        C = f({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(l.$, {
                        className: v,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: _,
                        ref: p,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: h }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        30310: (e) => {
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
        30542: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => s });
            var r = i(60900),
                a = i(64605);
            let s = (e, t) => {
                let { formatMessage: i } = (0, r.A)();
                if (e)
                    switch (t) {
                        case a._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case a._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case a._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case a._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        31286: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s });
            var r = i(55178),
                a = i(91027);
            let s = () => {
                let e = (0, r.useRef)(new Map());
                return (
                    (0, r.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, a.c)((t, i) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, i), i)))
                );
            };
        },
        34925: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(32290),
                a = i(60900),
                s = i(70280);
            let n = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, a.A)();
                return (0, r.jsx)(s.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        39684: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        41566: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => d });
            var r = i(32290),
                a = i(96103),
                s = i(21732),
                n = i(82586),
                l = i(19740),
                o = i(30542),
                c = i(57594);
            let d = (0, a.PA)((e) => {
                let { isLiked: t, onClick: i, className: a, albumType: d, disabled: u } = e,
                    { user: m } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    h = (0, o.$)(t, d);
                return (0, r.jsx)(l.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, r.jsx)(n.I, { variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !m.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        41677: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => W });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                l = i(70280),
                o = i(57594),
                c = i(53514),
                d = i(40484),
                u = i.n(d),
                m = i(60900),
                _ = i(16172),
                h = i(21732),
                v = i(91027),
                p = i(71926),
                x = i(47745),
                g = i(84062),
                f = i(28999),
                C = i(61258),
                A = i(19383);
            let b = (0, s.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: a,
                            captionClassName: s,
                            captionSize: n = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: b } = (0, m.A)(),
                        {
                            track: k,
                            settings: { isMobile: T },
                        } = (0, o.g)(),
                        S = (0, g.Z)(t.url),
                        { sendNavigateSearchFeedback: y } = (0, f.z)(),
                        I = (0, x.N)(),
                        N = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: r, fullscreenPlayer: a, fullscreenVideoPlayer: s } = (0, o.g)(),
                                { modal: n } = r;
                            return (0, A.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), n.isOpened && (r.reset(), n.close()), a.modal.isOpened && a.modal.close();
                                },
                                onAfterHandled: () => {
                                    s.modal.isOpened && (s.modal.close(), s.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, v.c)((e) => {
                                T && k.isOpened && k.close(), S(e);
                            }),
                        }),
                        j = (0, v.c)((e) => {
                            I({ to: _.QT.ArtistScreen }), null == y || y(), N(e);
                        });
                    return i && !t.various
                        ? (0, r.jsx)(C.N, {
                              'aria-label': b({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: a,
                              href: t.url,
                              onClick: j,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(l.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, r.jsx)(p.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: s, children: t.name }),
                              }),
                          })
                        : (0, r.jsx)(l.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, r.jsx)(p.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: s,
                                  title: d ? void 0 : c || t.name,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                k = (e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: a,
                            captionClassName: s,
                            captionSize: l,
                            allArtistsTitle: o,
                            withCustomTooltip: c,
                            hoverSettings: d,
                            shouldUseSeparator: u = !0,
                        } = e,
                        m = (0, n.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, r.jsx)(
                                                  b,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: a,
                                                      captionClassName: s,
                                                      captionSize: l,
                                                      allArtistsTitle: o,
                                                      withCustomTooltip: c,
                                                      hoverSettings: d,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, i, a, s, l, o, c, d]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(b, {
                                artist: t,
                                withLink: i,
                                linkClassName: a,
                                captionClassName: s,
                                captionSize: l,
                                allArtistsTitle: o,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            m,
                        ],
                    });
                };
            var T = i(39407),
                S = i(63887);
            let y = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: s } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(S.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(u().spoiler, i),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(T.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var I = i(8055),
                N = i(6752),
                j = i(78035),
                E = i(78176),
                O = i(83598),
                L = i.n(O);
            let P = (0, s.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, r.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, j.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: a, children: t }),
                            (0, r.jsx)(l.ZI, { className: L().tooltipContent, children: i.map((e) => (0, r.jsx)(E.V, { artist: e, className: L().artistItem }, e.id)) }),
                        ],
                    });
                }),
                R = (0, n.forwardRef)((e, t) => (0, r.jsx)(P, { forwardRef: t, ...e }));
            var D = i(19740),
                w = i(52598),
                B = i.n(w);
            let z = (0, s.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: s } = (0, m.A)();
                    return (0, r.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, a.$)(B().root, B().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(E.V, { artist: e }, e.id)),
                    });
                }),
                M = (0, s.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [s, l] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, o.g)(),
                        d = (0, v.c)(() => {
                            let e = a.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, N.L)(() =>
                            (0, I.A)(() => {
                                d();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                d(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, d],
                        ),
                        (0, n.useEffect)(() => {
                            d();
                        }, [t, d]),
                        0 !== t.length)
                    )
                        return (s || c) && (!c || 1 !== t.length) ? (c ? (0, r.jsx)(z, { artists: t, label: i }) : (0, r.jsx)(R, { artists: t, label: i })) : i;
                }),
                W = (0, s.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: s = ', ',
                            lineClamp: d,
                            visibleArtistsCount: m,
                            withLink: _ = !0,
                            spoilerClassName: h,
                            linkClassName: v,
                            captionClassName: p,
                            captionSize: x,
                            variant: g = 'breakAll',
                            withAllArtistsTitle: f = !0,
                            withComposer: C = !0,
                            spoilerComponent: A,
                            withCustomTooltip: b = !0,
                            artistIdWithoutLink: T,
                            withContextMenu: S,
                        } = e,
                        I = (0, n.useRef)(null),
                        [N, j] = (0, n.useState)(!1),
                        E = f
                            ? i
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let i = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...i]) : [t.name, ...i];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(s)
                            : '',
                        {
                            settings: { isMobile: O },
                        } = (0, o.g)(),
                        L = 1 === i.length,
                        P = (0, n.useCallback)((e) => {
                            j(!0), e.preventDefault();
                        }, []),
                        R = (0, n.useMemo)(() => {
                            let e = i;
                            return (
                                m && !N && (e = i.slice(0, m)),
                                e.reduce((e, t) => {
                                    if (!C && t.isComposer) return e.length ? e : [];
                                    let i = (0, r.jsx)(
                                        k,
                                        {
                                            artist: t,
                                            linkClassName: v,
                                            captionClassName: p,
                                            withLink: _ && t.id !== T && (((!O || L) && S) || !S),
                                            captionSize: x,
                                            allArtistsTitle: E,
                                            withCustomTooltip: b,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!s,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([s, i]) : [i];
                                }, [])
                            );
                        }, [i, m, N, C, O, L, S, v, p, _, T, x, E, b, s]),
                        D = (0, n.useMemo)(() => {
                            if (!N && m && m < i.length) {
                                let e = i.length - m;
                                return (0, n.isValidElement)(A) ? A : (0, r.jsx)(y, { spoilerClassName: h, spoilerArtistsCount: e, handleOnSpoilerClick: P });
                            }
                        }, [i.length, P, N, h, A, m]),
                        w = (0, n.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        B = (0, r.jsx)(l.m_, {
                            referenceRef: I,
                            enabled: !!(f && E) && b && !S && !O,
                            offsetOptions: 4,
                            placement: 'top',
                            text: E,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: w,
                                className: (0, a.$)(u().root, u()['root_variant_'.concat(g)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: f && E && !b && !S ? E : void 0,
                                children: [R, D],
                            }),
                        });
                    return S ? (0, r.jsx)(M, { labelRef: I, artists: i, label: B }) : B;
                });
        },
        42048: (e) => {
            e.exports = {
                root: 'ArtistCard_root__x67BK',
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                coverBlock: 'ArtistCard_coverBlock__dBL4x',
                image: 'ArtistCard_image__pONJx',
                titleLink: 'ArtistCard_titleLink__G8Puz',
                playButton: 'ArtistCard_playButton__XZoTr',
                likeButton: 'ArtistCard_likeButton__LU9TL',
                menuButton: 'ArtistCard_menuButton__EynXG',
                pinButton: 'ArtistCard_pinButton__G_VOi',
                trailerButton: 'ArtistCard_trailerButton__a2NHm',
                control: 'ArtistCard_control___qv5j',
            };
        },
        44432: (e) => {
            e.exports = { root: 'CollectionDislikesPage_root__Qnohu' };
        },
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => p });
            var r = i(32290),
                a = i(63618),
                s = i(8055),
                n = i(55178);
            let l = (e) => {
                    let { style: t, forwardRef: i, context: a, ...s } = e,
                        n = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        l = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...t }, ref: i, ...s });
                },
                o = (0, n.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }));
            var c = i(39684),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: s, withHeader: n, withForceScroll: l, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, n.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var _ = i(62060),
                h = i(31417);
            let v = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: s = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            ...d
                        } = e,
                        [u, m] = (0, n.useState)(null),
                        v = (0, n.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && m(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) i(e);
                                    }
                                }, s),
                            [s, a, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && u && v(u);
                    }, o);
                    let p = (0, n.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, r.jsx)(h.sN, { rangeChanged: v, totalCount: l, endReached: p, ...d });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: h,
                            overscan: p = 700,
                            pageSize: x = 20,
                            totalCount: g,
                            totalRequests: f,
                            debounceDurationInMs: C,
                            initialItemCount: A,
                            minInitialItemCount: b = 20,
                            handleRef: k,
                            alwaysShowScrollbar: T = !1,
                            testId: S,
                            isMobileLayout: y = !1,
                            shouldTriggerRangeChangedOn: I,
                            ...N
                        } = e,
                        [j, E] = (0, n.useState)(!1),
                        O = (0, n.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    E(e);
                                }, 100),
                            [],
                        ),
                        L = (0, n.useMemo)(() => {
                            var e, t;
                            return y
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, f, y]),
                        P = A ? Math.min(A, b) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: j || T, [d().root_notScrolling]: !j && !T }, t),
                        'data-test-id': S,
                        children: [
                            y && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(v, {
                                overscan: p,
                                components: L,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: O,
                                itemContent: _,
                                scrollerRef: k,
                                totalCount: g,
                                pageSize: x,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: P,
                                shouldTriggerRangeChangedOn: I,
                                ...N,
                            }),
                            y && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        55556: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        56008: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            let r = (0, i(55178).createContext)({ pageAlbumId: void 0 });
        },
        57594: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => s, g: () => n });
            var r = i(29222),
                a = i(55178);
            let s = (0, a.createContext)(null);
            function n() {
                let e = (0, a.useContext)(s);
                if (null === e) throw new r.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        60244: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var r = i(32290),
                a = i(21732),
                s = i(70280),
                n = i(71926),
                l = i(48736),
                o = i.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: l, placement: d = 'top', children: u } = e;
                    return (0, r.jsxs)(s.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, r.jsx)(s.ZI, {
                                className: o().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, r.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        63363: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => g });
            var r = i(32290),
                a = i(60900),
                s = i(91027),
                n = i(67732),
                l = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(92708),
                m = i(55178),
                _ = i(63380),
                h = i(96103),
                v = i(97755),
                p = i(79238);
            let x = (0, h.PA)((e) => {
                    let { album: t, closeToast: i, withLink: a } = e,
                        s = (0, p.b)(t);
                    return (0, r.jsx)(v.O, {
                        closeToast: i,
                        entityVariant: s,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: a,
                    });
                }),
                g = (e) => {
                    let {
                            user: t,
                            paywall: i,
                            albumCPA: { isPlusCPAEnabled: h },
                        } = (0, c.g)(),
                        { formatMessage: v } = (0, a.A)(),
                        { notify: p } = (0, o.l)(),
                        g = (() => {
                            let { notify: e } = (0, o.l)(),
                                [t, i] = (0, m.useState)(!1),
                                { formatMessage: n } = (0, a.A)();
                            return (0, s.c)(async (a) => {
                                let { album: s, withLink: o = !0, withNotification: c = !0 } = a;
                                if (t) return;
                                let m = { ...(0, u.HO)(s), url: s.url, isLiked: !s.isLiked };
                                i(!0);
                                let h = await s.toggleLike();
                                i(!1),
                                    c &&
                                        (h === _.f.OK
                                            ? e((0, r.jsx)(x, { withLink: o, album: m }), { containerId: l.u.INFO })
                                            : e((0, r.jsx)(d.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                            });
                        })(),
                        { pageAlbumId: f } = (0, n.T)();
                    return (0, s.c)(async () => {
                        if (e)
                            return h({ pageAlbumId: f, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void i.openModal()
                                : t.isAuthorized
                                  ? g({ album: e })
                                  : void p((0, r.jsx)(d.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    });
                };
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => A });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                l = i(60900),
                o = i(39407),
                c = i(63423),
                d = i(82586),
                u = i(71926),
                m = i(16172),
                _ = i(52068),
                h = i(62376),
                v = i(37240),
                p = i(83920),
                x = i(20472),
                g = i(12894),
                f = i(30310),
                C = i.n(f);
            let A = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    f = s({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, _.st)(),
                        { hash: i } = (0, _.gf)(),
                        { pageId: r } = (0, v.$)(),
                        a = (0, h.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let s = (0, m.Fx)({
                            params: {
                                entityType: m.LA.Error,
                                entityId: m.LA.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: r,
                                pageStyle: m.QL.Fullscreen,
                                pagePlacement: m.c4.Fullscreen,
                                mainObjectType: m.ky.NonApplicable,
                                mainObjectId: m.ky.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, m.z5)(t.evgenInstance, s);
                    }, [t, e, i, r, a]);
                })(f);
                let { sendRefreshEvent: A } = (function () {
                        let e = (0, _.st)(),
                            { hash: t } = (0, _.gf)(),
                            { pageId: i } = (0, v.$)(),
                            r = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let a = (0, m.Fx)({
                                    params: {
                                        actionType: m.X2.Refresh,
                                        userInteractionType: m.gi.Tap,
                                        entityType: m.LA.Error,
                                        entityId: m.LA.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: m.QL.Fullscreen,
                                        pagePlacement: m.c4.Fullscreen,
                                        mainObjectType: m.ky.NonApplicable,
                                        mainObjectId: m.ky.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, m.bv)(e.evgenInstance, a);
                            }, [e, t, i, r]),
                        };
                    })(),
                    b = (0, n.useCallback)(() => {
                        A(), (window.location.href = x.Z.main.href);
                    }, [A]),
                    { contentRef: k } = (0, p.g)();
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(C().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(g.L, { withBackwardFallback: '/', className: (0, a.$)(C().navigation, { [C().navigation_desktop]: !k }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(C().content, { [C().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(d.I, { className: C().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.DZ, { className: (0, a.$)(C().title, C().important), variant: 'h3', size: 'xs', children: f }),
                                (0, r.jsxs)(u.HL, {
                                    className: (0, a.$)(C().text, C().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: b,
                                    className: C().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        67732: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var r = i(55178),
                a = i(56008);
            function s() {
                return (0, r.useContext)(a.H);
            }
        },
        68125: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 3377)), Promise.resolve().then(i.bind(i, 96977));
        },
        68912: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => S });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(21916),
                l = i(55178),
                o = i(60900),
                c = i(39407),
                d = i(21732),
                u = i(70280),
                m = i(71926),
                _ = i(41677),
                h = i(28999),
                v = i(57594),
                p = i(53514),
                x = i(85017),
                g = i(13798),
                f = i(61258),
                C = i(25649),
                A = i(24760),
                b = i(84141),
                k = i(5856),
                T = i.n(k);
            let S = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: s,
                        albumArtists: k,
                        withExplicitMark: S = !0,
                        withSecondaryColor: y,
                        captionSize: I = 'm',
                        explicitSize: N = 'xxxs',
                        withAllArtistsTitle: j,
                        textClassName: E,
                        artistsClassName: O,
                        ignoreDislikedStyles: L,
                        withCustomTooltip: P = !0,
                        hasLineClamp: R = !0,
                        withSavingQueryParams: D,
                        beforeTitle: w,
                        withArtistLink: B = !0,
                        withTrackLink: z = !0,
                        afterTitle: M,
                        withContextMenuArtists: W,
                    } = e,
                    { formatMessage: F } = (0, o.A)(),
                    { sendNavigateSearchFeedback: H } = (0, h.z)(),
                    {
                        settings: { isMobile: K },
                    } = (0, v.g)(),
                    U = (0, A.$)({ withCustomTooltip: P }),
                    $ = (0, n.useSearchParams)(),
                    V = s.getUrl(D ? Object.fromEntries($) : void 0),
                    G = (0, l.useMemo)(() => {
                        var e;
                        let t = F({ id: 'entity-names.track-name' }, { trackName: s.title });
                        return ''.concat(t, ' ').concat(null != (e = s.version) ? e : '');
                    }, [F, s.title, s.version]),
                    X = (0, b.O)({ track: s, onNavigate: H, withSavingQueryParams: D, entityType: x.n.TRACK }),
                    q = (0, l.useCallback)(
                        (e) => {
                            let t = ''.concat(s.title, ' ').concat(!s.isRemoved && s.version ? s.version : '');
                            return (0, r.jsx)(u.m_, {
                                enabled: U && !K,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: p.V,
                                children: (0, r.jsx)(m.HL, {
                                    className: (0, a.$)(T().text, T().title),
                                    type: 'entity',
                                    size: I,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: s.title,
                                }),
                            });
                        },
                        [K, U, I, s.isRemoved, s.title, s.version],
                    ),
                    Z = (0, l.useMemo)(() => {
                        let e = ''.concat(s.title, ' ').concat(!s.isRemoved && s.version ? s.version : '');
                        return s.isRemoved
                            ? (0, r.jsx)(u.m_, {
                                  enabled: U && !K,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: F({ id: 'track-title.error-not-found' }),
                                  hoverSettings: p.V,
                                  children: (0, r.jsx)(m.HL, {
                                      className: (0, a.$)(T().text, T().title),
                                      type: 'entity',
                                      size: I,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: U ? void 0 : F({ id: 'track-title.error-not-found' }),
                                      children: (0, r.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : s.hasTrackLink && z
                              ? (0, r.jsx)(f.N, {
                                    onClick: X,
                                    className: T().albumLink,
                                    href: V,
                                    'aria-label': G,
                                    title: U ? void 0 : e,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: q(),
                                })
                              : q({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [K, s.title, s.isRemoved, s.version, s.hasTrackLink, q, U, F, I, G, X, V, z]),
                    Y = (0, C.s)(s.artists, k),
                    Q = (0, l.useMemo)(() => +!!R, [R]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(T().root, { [T().root_disabled]: !s.isAvailable, [T().root_disliked]: s.isDisliked && !L, [T().root_withSecondaryColor]: y }, t),
                    children: (0, r.jsxs)('div', {
                        className: T().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(T().titleContainer, { [T().titleContainer_withVersion]: s.version }, i),
                                children: [
                                    (0, r.jsxs)(m.HL, {
                                        className: (0, a.$)(T().text, E),
                                        type: 'entity',
                                        size: I,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            w,
                                            Z,
                                            !s.isRemoved &&
                                                s.version &&
                                                (0, r.jsxs)(m.HL, {
                                                    className: (0, a.$)(T().text, T().version),
                                                    type: 'entity',
                                                    size: I,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: U ? void 0 : s.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', s.version],
                                                }),
                                        ],
                                    }),
                                    s.explicitDisclaimer &&
                                        S &&
                                        (0, r.jsx)(g.N, {
                                            containerClassName: T().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: N,
                                            variant: s.explicitDisclaimer,
                                            className: T().explicitMark,
                                            trackId: s.id,
                                        }),
                                    M,
                                ],
                            }),
                            Y.length > 0 &&
                                (0, r.jsx)(_.i, {
                                    className: (0, a.$)(T().text, { [T().artists]: R }, O, E),
                                    withAllArtistsTitle: j,
                                    linkClassName: (0, a.$)(T().text, T().link),
                                    captionClassName: (0, a.$)(T().text, T().artistCaption),
                                    artists: Y,
                                    withLink: s.isNonUserGenerated && B,
                                    lineClamp: Q,
                                    captionSize: I,
                                    withContextMenu: W,
                                }),
                        ],
                    }),
                });
            });
        },
        69951: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => x });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                l = i(21732),
                o = i(90169),
                c = i(57594),
                d = i(40229),
                u = i(43565),
                m = i(8677),
                _ = i(68912),
                h = i(92102),
                v = i(85673),
                p = i.n(v);
            let x = (0, s.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: s,
                        className: v,
                        withDNDBlock: x,
                        isDragging: g,
                        draggingClassName: f,
                        ignoreDislikedStyles: C,
                        withSecondaryColor: A,
                        handleRemove: b,
                        withDislike: k,
                        withTrailer: T = !0,
                        beforeTitle: S,
                        removeButtonAriaLabel: y,
                        hideControls: I,
                    } = e,
                    N = (0, o.D)({ playContextParams: s, entityId: i.entityId }),
                    {
                        settings: { isMobile: j },
                    } = (0, c.g)(),
                    E = (0, n.useCallback)(
                        (e) =>
                            (0, r.jsx)(d.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: p().playButtonCell,
                                ignoreDislikedStyles: C,
                                radius: 'xs',
                                ...e,
                            }),
                        [C, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, r.jsx)(h.C, {
                    className: (0, a.$)(v, { [p().trackWithDots]: x, [p().important]: x }),
                    track: i,
                    beforeBlock: x ? (0, r.jsx)(u.O, { className: (0, a.$)(p().dots, f), isDragging: g }) : void 0,
                    meta: (0, r.jsx)(_.j, { withArtistLink: !j, beforeTitle: S, track: i, ignoreDislikedStyles: C, withSecondaryColor: A }),
                    playButtonCellRender: E,
                    controls: (0, r.jsx)(m.Q, {
                        track: i,
                        className: p().controlsBarCell,
                        ignoreDislikedStyles: C,
                        utmLink: null == (t = s.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: A,
                        handleRemove: b,
                        withDislike: k,
                        withTrailer: T,
                        removeButtonAriaLabel: y,
                        hideControls: I,
                    }),
                    ...N,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        70390: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => h });
            var r = i(32290),
                a = i(92708),
                s = i(55178),
                n = i(60900),
                l = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                m = i(8097);
            let _ = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, r.jsx)(m.k, {
                        closeToast: i,
                        entityVariant: u.c.ARTIST,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        entityTitle: t.name,
                        isPinned: t.isPinned,
                        radius: 'round',
                    });
                },
                h = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: u } = (0, n.A)(),
                        [m, h] = (0, s.useState)(!1);
                    return (0, s.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                        if (m) return;
                        let s = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                        h(!0);
                        let n = await e.togglePin();
                        h(!1),
                            n
                                ? i((0, r.jsx)(_, { artist: s }), { containerId: l.u.INFO })
                                : i((0, r.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                    }, [e, t.isAuthorized, m, u, i]);
                };
        },
        71670: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => a });
            var r = i(55178);
            let a = () =>
                (0, r.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        78176: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => f });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                l = i(16172),
                o = i(21732),
                c = i(91027),
                d = i(50162),
                u = i(19740),
                m = i(86269),
                _ = i(71926),
                h = i(47745),
                v = i(84062),
                p = i(57594),
                x = i(16510),
                g = i.n(x);
            let f = (0, s.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: s } = (0, p.g)(),
                    x = (0, v.Z)(t.url),
                    C = (0, h.N)(),
                    A = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(f, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    b = (0, c.c)((e) => {
                        s.modal.isOpened && s.modal.close(), C({ to: l.QT.ArtistScreen }), x(e);
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, a.$)(g().root, i),
                            onClick: b,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, r.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, r.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        79238: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => s });
            var r = i(64605),
                a = i(97647);
            let s = (e) => {
                switch (e.type) {
                    case r._.PODCAST:
                        return a.c.PODCAST;
                    case r._.AUDIOBOOK:
                        return a.c.AUDIOBOOK;
                    case r._.FAIRY_TALE:
                        return a.c.FAIRY_TALE;
                    default:
                        return a.c.ALBUM;
                }
            };
        },
        80528: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Y });
            var r = i(32290),
                a = i(96103),
                s = i(60900),
                n = i(16172),
                l = i(21732),
                o = i(71483),
                c = i(91027),
                d = i(82586),
                u = i(19740),
                m = i(92708),
                _ = i(55178),
                h = i(63380),
                v = i(45477),
                p = i(75582),
                x = i(57594),
                g = i(90357),
                f = i(86269),
                C = i(74196),
                A = i(71926),
                b = i(58534),
                k = i(11323),
                T = i(356),
                S = i.n(T);
            let y = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: n } = e,
                    { formatMessage: l } = (0, s.A)(),
                    o = l(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(b.$, {
                    closeToast: n,
                    message: (0, r.jsxs)('div', {
                        className: S().message,
                        children: [
                            (0, r.jsx)(C.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, r.jsx)(f.t, {
                                className: S().cover,
                                radius: 'round',
                                children: (0, r.jsx)(k.B, { className: S().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(A.HL, { className: S().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var I = i(5942),
                N = i(70390),
                j = i(9017),
                E = i(65477),
                O = i(71735),
                L = i(37862),
                P = i(48922),
                R = i(54391),
                D = i(72396),
                w = i(46200),
                B = i(27120),
                z = i(43564),
                M = i(95134),
                W = i(79406),
                F = i(51675),
                H = i(48027),
                K = i(89384),
                U = i(38223),
                $ = i(58237),
                V = i(56367),
                G = i(4914),
                X = i(83755),
                q = i(25160),
                Z = i(4008);
            let Y = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: f, onOpenChange: C, open: A, ...b } = e,
                    { shouldShowBuySubscriptionModal: k, showBuySubscriptionModal: T } = (0, w.q)(),
                    {
                        settings: { isMobile: S },
                        modals: { artistAboutModal: Y },
                        trailer: Q,
                        user: J,
                        experiments: ee,
                    } = (0, x.g)(),
                    et = (0, N.A)(f),
                    ei = (0, I.K)(f),
                    er = ((e) => {
                        let { user: t } = (0, x.g)(),
                            { notify: i } = (0, p.l)(),
                            [a, n] = (0, _.useState)(!1),
                            { formatMessage: l } = (0, s.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(g.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: v.u.ERROR });
                            if (a) return;
                            let s = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            n(!0);
                            let o = await e.toggleDislike();
                            n(!1),
                                o === h.f.OK
                                    ? i((0, r.jsx)(y, { coverUri: s.coverUri, title: s.name, isDisliked: s.isDisliked }), { containerId: v.u.INFO })
                                    : i((0, r.jsx)(g.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: v.u.ERROR });
                        });
                    })(f),
                    ea = (0, R.F)(),
                    es = ''.concat(L.U.ARTIST, '-').concat(null == f ? void 0 : f.id),
                    { formatMessage: en } = (0, s.A)(),
                    { utmLink: el } = (0, D.f)({ blockId: L.U.ARTIST, contextType: o.K.Artist, contextId: null == f ? void 0 : f.id }),
                    { shareLink: eo, pathname: ec } = (0, K.b)('/artist/:artistId', { params: { artistId: null != (i = null == f ? void 0 : f.id) ? i : '' } }),
                    ed = (0, j.A)({ entityVariant: M.D.ARTIST, urlParams: { id: null == f ? void 0 : f.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, z.B)({
                        seeds: null != (a = null == f ? void 0 : f.seeds) ? a : [],
                        pageIdForFrom: P._Q.RADIO,
                        blockIdForFrom: es,
                        parentContextId: null == f ? void 0 : f.id,
                    }),
                    e_ = (0, O.P)(),
                    eh = en((null == f ? void 0 : f.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ev = (0, c.c)(() => {
                        if (k && J.isAuthorized) return void T();
                        eu || em();
                    }),
                    ep = (0, c.c)(() => {
                        if (!e_()) {
                            if (k) return void T();
                            (null == f ? void 0 : f.id) && (Q.setUtmLink(el), Q.openArtistTrailer(f.id), ea(n.ky.Artist, f.id));
                        }
                    }),
                    ex = (0, c.c)(() => {
                        Y.open(null == f ? void 0 : f.id);
                    });
                (0, B.N)(A);
                let eg = { variant: F.Y.ARTIST, id: null == f ? void 0 : f.id, title: null == f ? void 0 : f.name, path: ec },
                    ef = ee.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    eC = null == f || null == (t = f.trailer) ? void 0 : t.isAvailable,
                    eA = ee.checkExperiment(W.z.WebNextArtistInfo, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: S,
                    offsetOptions: 10,
                    open: A,
                    onOpenChange: C,
                    ariaLabel: en({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU },
                    ...b,
                    children: [
                        ef && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(E.d, { entityVariant: M.D.ARTIST, adminUrl: ed }) }),
                        !S && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(V.L, { onClick: et, isPinned: null == f ? void 0 : f.isPinned }) }),
                        (0, r.jsx)(Z.WithOffline, {
                            fallback: (0, r.jsx)($.T, {
                                onClick: ei,
                                isLiked: null == f ? void 0 : f.isLiked,
                                disabled: !J.isAuthorized || !(null == f ? void 0 : f.isAvailable),
                            }),
                        }),
                        eC && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(X.N, { onClick: ep }) }),
                        (0, r.jsx)(Z.WithOffline, {
                            fallback: (0, r.jsx)(q.C, { onClick: ev, disabled: !(null == f ? void 0 : f.isAvailable), variant: H.I.ARTIST, onOpenMenuChange: C }),
                        }),
                        (0, r.jsx)(G.H, { disabled: !f, shareLink: eo, entityMeta: eg }),
                        eA &&
                            (0, r.jsx)(Z.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: ex,
                                    icon: (0, r.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: eh,
                                }),
                            }),
                        (0, r.jsx)(Z.WithOffline, {
                            fallback: (0, r.jsx)(U.D, { onClick: er, isDisliked: null == f ? void 0 : f.isDisliked, disabled: !(null == f ? void 0 : f.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        80556: (e) => {
            e.exports = {
                root: 'EntityCardShimmer_root__Sh7ah',
                subcover: 'EntityCardShimmer_subcover__ESt3R',
                cover: 'EntityCardShimmer_cover__BXtjT',
                cover_round: 'EntityCardShimmer_cover_round__Ci3zW',
                cover_withSubcover: 'EntityCardShimmer_cover_withSubcover__v9l5y',
                infoContainer: 'EntityCardShimmer_infoContainer__22kYk',
                infoContainer_centered: 'EntityCardShimmer_infoContainer_centered__cxlPO',
                title: 'EntityCardShimmer_title__GQ2jX',
                title_withSubcover: 'EntityCardShimmer_title_withSubcover__lBHBC',
                content_linesCount_1: 'EntityCardShimmer_content_linesCount_1__JHlue',
                content_linesCount_2: 'EntityCardShimmer_content_linesCount_2__CMvO5',
                content_linesCount_3: 'EntityCardShimmer_content_linesCount_3__mPzav',
                content_linesCount_4: 'EntityCardShimmer_content_linesCount_4__8KtHO',
            };
        },
        81242: (e) => {
            e.exports = {
                root: 'CollectionDislikesPageHeader_root__lZ6LT',
                container: 'CollectionDislikesPageHeader_container__ACUbW',
                title: 'CollectionDislikesPageHeader_title__6h9Km',
                tabs: 'CollectionDislikesPageHeader_tabs__gt5AJ',
                tab: 'CollectionDislikesPageHeader_tab__bxN5I',
                tabsShimmer: 'CollectionDislikesPageHeader_tabsShimmer__akKoq',
                tabShimmer: 'CollectionDislikesPageHeader_tabShimmer__0QLuH',
                staticHeader: 'CollectionDislikesPageHeader_staticHeader__75rsF',
                important: 'CollectionDislikesPageHeader_important__5ZM6D',
                stickyHeader: 'CollectionDislikesPageHeader_stickyHeader__cAkxR',
            };
        },
        81354: (e, t, i) => {
            'use strict';
            i.d(t, { XU: () => u });
            var r,
                a,
                s = i(30782),
                n = i(55178),
                l = i(60900);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(r || (r = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(a || (a = {}));
            var o = function (e) {
                var t = (0, l.A)(),
                    i = e.value,
                    r = e.children,
                    a = (0, s.__rest)(e, ['value', 'children']);
                return r(t.formatNumberToParts(i, a));
            };
            function c(e) {
                var t = function (t) {
                    var i = (0, l.A)(),
                        r = t.value,
                        a = t.children,
                        n = (0, s.__rest)(t, ['value', 'children']),
                        o = 'string' == typeof r ? new Date(r || 0) : r;
                    return a('formatDate' === e ? i.formatDateToParts(o, n) : i.formatTimeToParts(o, n));
                };
                return (t.displayName = a[e]), t;
            }
            function d(e) {
                var t = function (t) {
                    var i = (0, l.A)(),
                        r = t.value,
                        a = t.children,
                        o = (0, s.__rest)(t, ['value', 'children']),
                        c = i[e](r, o);
                    if ('function' == typeof a) return a(c);
                    var d = i.textComponent || n.Fragment;
                    return n.createElement(d, null, c);
                };
                return (t.displayName = r[e]), t;
            }
            (o.displayName = 'FormattedNumberParts'), (o.displayName = 'FormattedNumberParts');
            var u = d('formatDate');
            d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), c('formatDate'), c('formatTime');
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        85673: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        89020: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => o });
            var r = i(32290),
                a = i(63618),
                s = i(79856),
                n = i(80556),
                l = i.n(n);
            let o = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: n,
                    round: o,
                    'aria-label': c,
                    centered: d,
                    withInfo: u = !0,
                    linesCount: m = 3,
                    withSubcover: _,
                    radius: h = 'l',
                } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(l().root, i),
                    children: [
                        _ && (0, r.jsx)(s.W, { isActive: t, className: l().subcover, radius: 'l' }),
                        (0, r.jsx)(s.W, { isActive: t, className: (0, a.$)(l().cover, n, { [l().cover_round]: o, [l().cover_withSubcover]: _ }), radius: h }),
                        u &&
                            (0, r.jsx)('div', {
                                className: (0, a.$)(l().infoContainer, l()['content_linesCount_'.concat(m)], { [l().infoContainer_centered]: d }),
                                children: (0, r.jsx)(s.W, { isActive: t, className: (0, a.$)(l().title, { [l().title_withSubcover]: _ }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        91624: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        91853: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var r = i(19383);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        92013: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { T: () => r }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(r || (r = {}));
        },
        94218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var r = i(32290),
                a = i(21916),
                s = i(39407),
                n = i(21732),
                l = i(91027),
                o = i(63423),
                c = i(71926),
                d = i(70204),
                u = i(34186);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', withRipple: m = !0, buttonText: _, isBlock: h, key: v, className: p } = e,
                    x = (0, a.useRouter)(),
                    g = (0, u.N)().get(d.QG),
                    f = (0, l.c)(() => {
                        g.authorizationUrl && x.push(g.authorizationUrl);
                    });
                return (0, r.jsx)(
                    o.$,
                    {
                        onClick: f,
                        className: p,
                        isBlock: h,
                        color: 'primary',
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: _ || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        96977: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionDislikesPage: () => el });
            var r = i(32290),
                a = i(96103),
                s = i(21916),
                n = i(55178),
                l = i(21732),
                o = i(15299),
                c = i(7999),
                d = i(48922),
                u = i(22714),
                m = i(83920),
                _ = i(3796),
                h = i(57594),
                v = i(97201),
                p = (function (e) {
                    return (e.TRACKS = 'tracks'), (e.ARTISTS = 'artists'), e;
                })({}),
                x = (function (e) {
                    return (e[(e.TRACKS = 0)] = 'TRACKS'), (e[(e.ARTISTS = 1)] = 'ARTISTS'), e;
                })({}),
                g = i(44432),
                f = i.n(g),
                C = i(63618),
                A = i(60900),
                b = i(64170),
                k = i(7474),
                T = i(58054),
                S = i(32468),
                y = i(89020),
                I = i(45257),
                N = i(39407),
                j = i(71926),
                E = i(83808),
                O = i(85377),
                L = i(12894),
                P = i(81242),
                R = i.n(P),
                D = i(45180),
                w = i(8946),
                B = i(20472),
                z = i(36477),
                M = i(71670),
                W = i(79856);
            let F = () =>
                    (0, r.jsxs)('div', {
                        className: R().tabsShimmer,
                        children: [(0, r.jsx)(W.W, { className: R().tabShimmer }), (0, r.jsx)(W.W, { className: R().tabShimmer })],
                    }),
                H = (0, a.PA)((e) => {
                    var t, i, a, s, l, o, c, d, u, m;
                    let { tabsState: _, tabElementId: v, isStickyHeader: g = !1 } = e,
                        {
                            collection: { dislikes: f },
                        } = (0, h.g)(),
                        { formatMessage: C } = (0, A.A)(),
                        { isScrolling: b } = (0, n.useContext)(O.B),
                        k = ((e) => {
                            let t = (0, M.X)();
                            return (0, n.useCallback)(
                                (i) => {
                                    var r;
                                    switch ((null == (r = e.onTabChange) || r.call(e, i), i)) {
                                        case x.TRACKS: {
                                            let { href: e } = (0, z.u)(B.Z.collectionDislikes.href, { query: { tab: p.TRACKS } });
                                            t(e);
                                            break;
                                        }
                                        case x.ARTISTS: {
                                            let { href: e } = (0, z.u)(B.Z.collectionDislikes.href, { query: { tab: p.ARTISTS } });
                                            t(e);
                                        }
                                    }
                                },
                                [t, e],
                            );
                        })(_),
                        T = b ? -1 : 0;
                    g && (T = b ? 0 : -1);
                    let S = (0, n.useMemo)(() => {
                            var e, t;
                            return (null == (t = f.tracks) || null == (e = t.items) ? void 0 : e.length)
                                ? ''.concat(C({ id: 'entity-names.tracks' }), ' • ').concat(f.tracks.items.length)
                                : C({ id: 'entity-names.tracks' });
                        }, [null == (i = f.tracks) || null == (t = i.items) ? void 0 : t.length, C]),
                        y = (0, n.useMemo)(() => {
                            var e, t;
                            return (null == (t = f.artists) || null == (e = t.items) ? void 0 : e.length)
                                ? ''.concat(C({ id: 'entity-names.artists' }), ' • ').concat(f.artists.items.length)
                                : C({ id: 'entity-names.artists' });
                        }, [null == (s = f.artists) || null == (a = s.items) ? void 0 : a.length, C]);
                    return (0, r.jsxs)(w.wI, {
                        isShimmerVisible: f.isLoading,
                        shimmer: (0, r.jsx)(F, {}),
                        className: R().tabs,
                        elementId: v,
                        ..._,
                        onTabChange: k,
                        children: [
                            (0, r.jsx)(D.o, {
                                className: R().tab,
                                value: x.TRACKS,
                                title: S,
                                'aria-label': C(
                                    { id: 'entity-names.tracks-count' },
                                    { value: null != (u = null == (o = f.tracks) || null == (l = o.items) ? void 0 : l.length) ? u : 0 },
                                ),
                                'aria-hidden': b,
                                tabIndex: T,
                            }),
                            (0, r.jsx)(D.o, {
                                className: R().tab,
                                value: x.ARTISTS,
                                title: y,
                                'aria-label': C(
                                    { id: 'entity-names.artists-count' },
                                    { value: null != (m = null == (d = f.artists) || null == (c = d.items) ? void 0 : c.length) ? m : 0 },
                                ),
                                'aria-hidden': b,
                                tabIndex: T,
                            }),
                        ],
                    });
                }),
                K = (0, a.PA)((e) => {
                    let { tabsState: t, tabElementId: i } = e,
                        a = (0, E.W)(),
                        { isScrolling: s } = (0, n.useContext)(O.B);
                    return (0, r.jsxs)('header', {
                        className: R().root,
                        'aria-hidden': s,
                        'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_STATIC_HEADER,
                        children: [
                            (0, r.jsxs)('div', {
                                className: R().container,
                                children: [
                                    a.canBack && (0, r.jsx)(L.L, { withForwardControl: !1, withBackwardControl: a.canBack, shouldFocusOnMount: !s }),
                                    (0, r.jsx)(j.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: R().title,
                                        'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_STATIC_HEADER_TITLE,
                                        children: (0, r.jsx)(N.A, { id: 'collection.my-dislikes' }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(H, { tabsState: t, tabElementId: i }),
                        ],
                    });
                });
            var U = i(9388),
                $ = i.n(U);
            let V = (0, a.PA)((e) => {
                var t, i, a;
                let { forwardRef: s, tabsState: l, tabElementId: c } = e,
                    {
                        collection: { dislikes: d },
                        settings: { isMobile: u },
                    } = (0, h.g)(),
                    { formatMessage: m } = (0, A.A)(),
                    _ = d.artists.isLoading ? 10 : null != (a = null == (i = d.artists) || null == (t = i.items) ? void 0 : t.length) ? a : 0,
                    v = (0, n.useMemo)(
                        () => ({
                            Header: () => (0, r.jsx)(K, { tabsState: l, tabElementId: c }),
                            Footer: () => (0, r.jsx)(S.A, { children: (0, r.jsx)(T.w, { className: $().footer }) }),
                        }),
                        [c, l],
                    );
                return d.artists.isRejected
                    ? (0, r.jsx)(b.SomethingWentWrong, {})
                    : (0, r.jsx)('div', {
                          className: $().root,
                          children: (0, r.jsx)(o.Kp, {
                              value: l.value,
                              name: x.ARTISTS,
                              elementId: c,
                              className: $().tabPanel,
                              children: (0, r.jsx)(I.$, {
                                  className: (0, C.$)($().scrollContainer, $().important),
                                  listClassName: (0, C.$)($().content, $().content_withGrid),
                                  customComponents: v,
                                  initialItemCount: _,
                                  totalCount: _,
                                  itemContentCallback: (e) => {
                                      var t, i;
                                      let a = null == (i = d.artists) || null == (t = i.items) ? void 0 : t[e];
                                      if (!a) {
                                          let e = m({ id: 'loading-messages.entity-is-loading' }, { entityName: m({ id: 'entity-names.artist' }) });
                                          return (0, r.jsx)(y.V, { 'aria-label': e, round: !0, centered: !0 });
                                      }
                                      return (0, r.jsx)(k.a, { artist: a, contentLinesCount: 3, className: $().item }, a.id);
                                  },
                                  handleRef: s,
                                  context: { listAriaLabel: m({ id: 'entity-names.artists' }) },
                                  isMobileLayout: u,
                                  useWindowScroll: u,
                              }),
                          }),
                      });
            });
            var G = i(71483),
                X = i(94631),
                q = i(69951),
                Z = i(72396),
                Y = i(31286),
                Q = i(98350),
                J = i(34223);
            let ee = (0, a.PA)((e) => {
                var t, i, a;
                let { forwardRef: s, tabsState: l, tabElementId: c } = e,
                    { from: d } = (0, Z.f)(),
                    {
                        collection: { dislikes: u },
                        settings: { isMobile: m },
                    } = (0, h.g)(),
                    { formatMessage: _ } = (0, A.A)(),
                    v = (0, Y.w)(),
                    p = u.tracks.isLoading ? 10 : null != (a = null == (i = u.tracks) || null == (t = i.items) ? void 0 : t.length) ? a : 0,
                    g = (0, n.useCallback)(
                        (e) => {
                            var t;
                            null == (t = u.tracks) || t.getTracksByRange(e.startIndex, e.endIndex);
                        },
                        [u.tracks],
                    ),
                    f = (0, n.useMemo)(
                        () => ({
                            Header: () => (0, r.jsx)(K, { tabsState: l, tabElementId: c }),
                            Footer: () => (0, r.jsx)(S.A, { children: (0, r.jsx)(T.w, { className: $().footer }) }),
                        }),
                        [c, l],
                    );
                return u.tracks.isRejected
                    ? (0, r.jsx)(b.SomethingWentWrong, {})
                    : (0, r.jsx)('div', {
                          className: $().root,
                          children: (0, r.jsx)(o.Kp, {
                              value: l.value,
                              name: x.TRACKS,
                              elementId: c,
                              className: $().tabPanel,
                              children: (0, r.jsx)(I.$, {
                                  className: (0, C.$)($().scrollContainer, $().important),
                                  listClassName: (0, C.$)($().content, $().content_tracks),
                                  customComponents: f,
                                  totalCount: p,
                                  itemContentCallback: (e) => {
                                      var t, i, a;
                                      let s = null == (a = u.tracks) || null == (i = a.items) || null == (t = i[e]) ? void 0 : t.data;
                                      if (!s) return (0, r.jsx)(J.D, { isActive: !0, className: $().shimmerItem, variant: Q.X.PLAYLIST });
                                      let n = v(e, {
                                          contextData: { type: G.K.Various, meta: { id: 'disliked-tracks' }, from: d, playDisliked: !0 },
                                          entitiesData: u.tracks.sonataEntitiesData,
                                          queueParams: { index: e },
                                          loadContextMeta: !1,
                                      });
                                      return s.isTrackNonMusic
                                          ? (0, r.jsx)(X.K, { track: s, playContextParams: n, ignoreDislikedStyles: !0, withPodcastName: !0 })
                                          : (0, r.jsx)(q.K, { track: s, playContextParams: n, ignoreDislikedStyles: !0 });
                                  },
                                  onGetDataByRange: g,
                                  debounceDurationInMs: 300,
                                  handleRef: s,
                                  context: { listAriaLabel: _({ id: 'entity-names.tracks' }) },
                                  isMobileLayout: m,
                                  useWindowScroll: m,
                              }),
                          }),
                      });
            });
            var et = i(82586),
                ei = i(28076),
                er = i.n(ei);
            let ea = (0, a.PA)((e) => {
                let { tabsState: t, tabElementId: i } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(K, { tabsState: t, tabElementId: i }),
                        (0, r.jsxs)(o.Kp, {
                            value: t.value,
                            name: t.value,
                            elementId: i,
                            className: er().root,
                            'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_EMPTY_ROOT,
                            children: [
                                (0, r.jsx)(et.I, {
                                    className: er().icon,
                                    size: 'l',
                                    variant: 'album',
                                    'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_EMPTY_ICON,
                                }),
                                (0, r.jsx)(j.DZ, {
                                    className: er().title,
                                    variant: 'h3',
                                    size: 'xs',
                                    'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_EMPTY_HEAD,
                                    children: (0, r.jsx)(N.A, { id: 'entity-names.list-is-empty' }),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var es = i(74694);
            let en = (0, a.PA)((e) => {
                    let { tabsState: t, tabElementId: i } = e,
                        { isScrolling: a } = (0, n.useContext)(O.B),
                        s = (0, E.W)();
                    return (0, r.jsx)(es.Y, {
                        variant: es.V.COMPOSITE,
                        staticClassName: (0, C.$)(R().staticHeader, R().important),
                        'aria-hidden': !a,
                        stickyClassName: (0, C.$)(R().stickyHeader, R().important),
                        containerProps: { 'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_STICKY_HEADER },
                        stickyChild: (0, r.jsxs)('div', {
                            className: R().container,
                            children: [
                                s.canBack && (0, r.jsx)(L.L, { withForwardControl: !1, withBackwardControl: s.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, r.jsx)(H, { tabsState: t, tabElementId: i, isStickyHeader: !0 }),
                            ],
                        }),
                    });
                }),
                el = (0, a.PA)(() => {
                    let e = (0, s.useSearchParams)(),
                        {
                            user: t,
                            collection: { dislikes: i },
                            library: a,
                        } = (0, h.g)(),
                        { contentScrollRef: g, setContentScrollRef: C } = (0, m.g)(),
                        A = (0, n.useId)(),
                        b = (0, n.useMemo)(() => {
                            switch (e.get(v.K.TAB)) {
                                case p.TRACKS:
                                    break;
                                case p.ARTISTS:
                                    return x.ARTISTS;
                            }
                            return x.TRACKS;
                        }, [e]),
                        k = (0, o.zb)(b);
                    t.account.data.uid || (0, s.notFound)(),
                        (0, _.J)(i.isResolved),
                        (0, n.useEffect)(
                            () => () => {
                                i.reset();
                            },
                            [i],
                        );
                    let T = (0, n.useMemo)(() => {
                        switch (k.value) {
                            case x.TRACKS:
                                if (i.tracks.isEmpty) return (0, r.jsx)(ea, { tabsState: k, tabElementId: A });
                                return (0, r.jsx)(ee, { forwardRef: C, tabsState: k, tabElementId: A });
                            case x.ARTISTS:
                                if (i.artists.isEmpty) return (0, r.jsx)(ea, { tabsState: k, tabElementId: A });
                                return (0, r.jsx)(V, { forwardRef: C, tabsState: k, tabElementId: A });
                        }
                    }, [i.artists.isEmpty, i.tracks.isEmpty, C, A, k]);
                    if (i.isNeededToLoad) {
                        let e = [i.tracks.getData(), i.artists.getData(), a.getData()];
                        (0, n.use)(Promise.allSettled(e));
                    }
                    return (0, r.jsx)(u.n, {
                        pageId: d._Q.OWN_DISLIKES,
                        children: (0, r.jsx)(c.h, {
                            scrollElement: g,
                            headerThreshold: 148,
                            children: (0, r.jsxs)('div', {
                                className: f().root,
                                'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE,
                                children: [(0, r.jsx)(en, { tabsState: k, tabElementId: A }), T],
                            }),
                        }),
                    });
                });
        },
    },
    (e) => {
        e.O(
            0,
            [
                5718, 7034, 7231, 6347, 9763, 3183, 6639, 7258, 3379, 3647, 3667, 7972, 8868, 4795, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6477,
                7275, 2586, 8347, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 6341, 3759, 4797, 4220, 9562, 7358,
            ],
            () => e((e.s = 68125)),
        ),
            (_N_E = e.O());
    },
]);
