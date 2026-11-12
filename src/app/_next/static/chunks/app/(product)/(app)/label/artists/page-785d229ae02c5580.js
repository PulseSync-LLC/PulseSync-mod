(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1156, 9202],
    {
        1698: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => a });
            var r = i(88800),
                n = i(37770);
            let a = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: a,
                    centered: s,
                    withInfo: l,
                    count: o = 10,
                    shimmerClassName: c,
                    linesCount: u,
                    'aria-label': d,
                    withSubcover: m,
                } = e;
                return Array.from(Array(o).keys()).map((e) =>
                    (0, r.jsx)(
                        n.V,
                        { isActive: t, linesCount: u, className: i, round: a, centered: s, withInfo: l, withSubcover: m, 'aria-label': d, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        4044: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => h });
            var r = i(88800),
                n = i(65724),
                a = i(53548),
                s = i(2058),
                l = i(88969),
                o = i(96817),
                c = i(52300),
                u = i(29504),
                d = i(59304),
                m = i(4044),
                p = i.n(m);
            let h = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, a.useRef)(null),
                    { formatMessage: h } = (0, s.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let f = (0, a.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: p().message,
                            children: [
                                (0, r.jsx)(u.HL, {
                                    className: p().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(o.$, {
                                    ref: m,
                                    className: p().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: p().icon }),
                                }),
                            ],
                        }),
                    [h, t],
                );
                return (0, r.jsx)(d.$, { className: (0, n.$)(p().root, p().important), message: f, closeToast: i });
            };
        },
        14567: (e, t) => {
            (e.exports = function (e, t, r, n) {
                return JSON.stringify(e, i(t, n), r);
            }).getSerialize = i;
            function i(e, t) {
                var i = [],
                    r = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return i[0] === t ? '[Circular ~]' : '[Circular ~.' + r.slice(0, i.indexOf(t)).join('.') + ']';
                        }),
                    function (n, a) {
                        if (i.length > 0) {
                            var s = i.indexOf(this);
                            (~s ? i.splice(s + 1) : i.push(this), ~s ? r.splice(s, 1 / 0, n) : r.push(n), ~i.indexOf(a) && (a = t.call(this, n, a)));
                        } else i.push(a);
                        return null == e ? a : e.call(this, n, a);
                    }
                );
            }
        },
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => M });
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(87999),
                c = i(62414),
                u = i(80643),
                d = i(33979),
                m = i(17392),
                p = i(18593),
                h = i(29993),
                f = i(79070),
                g = i(29832),
                v = i(52300),
                _ = i(7555),
                b = i(29504),
                y = i(91959),
                x = i(64207),
                T = i(77455),
                A = i(5407),
                j = i(57934),
                N = i(84384),
                S = i(4795),
                I = i(78940),
                C = i(55693),
                k = i(39079),
                R = i(72288),
                E = i(81877),
                L = i(49738),
                O = i(91292),
                w = i(56862),
                P = i(16704),
                D = i(56446),
                B = i(36207),
                F = i(43161),
                z = i(93434),
                U = i.n(z);
            let M = (0, a.PA)((e) => {
                let { artist: t, className: i, children: a, contentLinesCount: z, topTitleElement: M, bottomTitleElement: V } = e,
                    W = (0, c.D)(),
                    {
                        trailer: q,
                        user: K,
                        paywall: { modal: G },
                    } = (0, R.g)(),
                    { from: H, utmLink: $ } = (0, N.f)({ contextId: t.id, contextType: p.K.Artist }),
                    { formatMessage: X } = (0, l.A)(),
                    [J, Y] = (0, s.useState)(!1),
                    [Z, Q] = (0, s.useState)(!1),
                    [ee, et] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: er, sendPlaySearchFeedback: en } = (0, C.z)(),
                    ea = (0, u.S)(),
                    es = (0, d.g)(),
                    el = (0, x.K)(t),
                    eo = (0, T.A)(t),
                    { id: ec, name: eu, coverUri: ed, isLiked: em } = t,
                    ep = (0, I.Z)(t.url),
                    [eh, ef] = (0, s.useState)(!1),
                    eg = (0, j.F)(),
                    ev = (0, A.P)(),
                    e_ = (0, h.c)((e) => {
                        if ((e.stopPropagation(), ev())) return void e.preventDefault();
                        (q.openArtistTrailer(t.id), eg(o.DomainObjectType.Artist, t.id));
                    }),
                    eb = (0, s.useMemo)(() => {
                        let e = X({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = em ? X({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, em, X]),
                    { isPlaying: ey, togglePlay: ex } = (0, k.D)({
                        playContextParams: { contextData: { type: p.K.Artist, meta: { id: Number(ec) }, from: H, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    eT = (0, y.S)({ artist: t, callback: ep }),
                    eA = (0, y.S)({ artist: t, callback: ex }),
                    ej = (0, h.c)((e) => {
                        (null == er || er(), ea({ to: o.AppScreen.ArtistScreen }), eT(e));
                    }),
                    eN = (0, S.N)(),
                    eS = (0, h.c)(() => {
                        if (!ev()) {
                            if (eN) return void G.open();
                            (J || ey || (Y(!0), null == en || en()), eA(), ey || es());
                        }
                    }),
                    eI = (0, h.c)(() => {
                        (Z || em || (Q(!0), null == ei || ei()), el());
                    }),
                    eC = (0, h.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    ek = (0, h.c)((e) => {
                        (et(e), ef(e));
                    }),
                    eR = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                F.g,
                                {
                                    artist: t,
                                    onOpenChange: ek,
                                    open: ee,
                                    onClick: eC,
                                    className: (0, n.$)(U().menuButton, U().control),
                                    size: 's',
                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': m.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eC, ek, ee],
                    ),
                    eE = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                B.n,
                                {
                                    children: (0, r.jsx)(D.k, {
                                        className: (0, n.$)(U().trailerButton, U().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: e_,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, e_]),
                    eL = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                w.O,
                                { onClick: eo, isPinned: t.isPinned, className: (0, n.$)(U().pinButton, U().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, eo],
                    ),
                    eO = (0, f.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                g.hg,
                                {
                                    isVisible: ee || eh,
                                    className: U().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        P.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, n.$)(U().playButton, U().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eS,
                                            isPlaying: ey,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        L.c,
                                        {
                                            className: (0, n.$)(U().likeButton, U().control),
                                            isLiked: em,
                                            onClick: eI,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !K.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eR,
                                    pinControl: eL,
                                    trailerControl: eE,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    ew = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(_.t, {
                                className: U().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': m.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: U().coverBlock,
                                    onClick: ej,
                                    children: [
                                        (0, r.jsx)(E.B, {
                                            className: U().image,
                                            src: ed,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eb,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eO,
                                    ],
                                }),
                            }),
                        [ej, ed, eb, t.isAvailable, eO],
                    );
                return (0, r.jsx)(g.MN, {
                    ref: W,
                    className: (0, n.$)(U().root, i),
                    textPosition: 'center',
                    'aria-label': eb,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            M,
                            (0, r.jsx)(b.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, r.jsx)(O.N, {
                                    className: U().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eb,
                                    onClick: ej,
                                    'data-test-id': m.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            V,
                        ],
                    }),
                    srTitle: (0, r.jsx)(O.N, { className: U().srTitleLink, href: t.url, onClick: ej, children: eb }),
                    contentLinesCount: z,
                    view: ew,
                    'data-test-id': m.Kq.artist.ARTIST_ITEM,
                    children: a,
                });
            });
        },
        23877: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { Q: () => n, c: () => r }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(r || (r = {})));
            let n = { [r.ERROR]: 'error', [r.WARNING]: 'warn', [r.INFO]: 'info', [r.DEBUG]: 'debug', [r.TRACE]: 'trace' };
        },
        27794: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => b });
            var r,
                n,
                a = i(88092),
                s = i(68436);
            function l(e, t) {
                var i = t && t.cache ? t.cache : m,
                    r = t && t.serializer ? t.serializer : u;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var i,
                                  r,
                                  n = 1 === e.length ? o : c;
                              return ((i = t.cache.create()), (r = t.serializer), n.bind(this, e, i, r));
                          }
                )(e, { cache: i, serializer: r });
            }
            function o(e, t, i, r) {
                var n = null == r || 'number' == typeof r || 'boolean' == typeof r ? r : i(r),
                    a = t.get(n);
                return (void 0 === a && ((a = e.call(this, r)), t.set(n, a)), a);
            }
            function c(e, t, i) {
                var r = Array.prototype.slice.call(arguments, 3),
                    n = i(r),
                    a = t.get(n);
                return (void 0 === a && ((a = e.apply(this, r)), t.set(n, a)), a);
            }
            var u = function () {
                return JSON.stringify(arguments);
            };
            function d() {
                this.cache = Object.create(null);
            }
            ((d.prototype.get = function (e) {
                return this.cache[e];
            }),
                (d.prototype.set = function (e, t) {
                    this.cache[e] = t;
                }));
            var m = {
                    create: function () {
                        return new d();
                    },
                },
                p = {
                    variadic: function (e, t) {
                        var i, r;
                        return ((i = t.cache.create()), (r = t.serializer), c.bind(this, e, i, r));
                    },
                    monadic: function (e, t) {
                        var i, r;
                        return ((i = t.cache.create()), (r = t.serializer), o.bind(this, e, i, r));
                    },
                };
            !(function (e) {
                ((e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API'));
            })(r || (r = {}));
            var h = (function (e) {
                    function t(t, i, r) {
                        var n = e.call(this, t) || this;
                        return ((n.code = i), (n.originalMessage = r), n);
                    }
                    return (
                        (0, a.__extends)(t, e),
                        (t.prototype.toString = function () {
                            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                        }),
                        t
                    );
                })(Error),
                f = (function (e) {
                    function t(t, i, n, a) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(i, '". Options are "').concat(Object.keys(n).join('", "'), '"'),
                                r.INVALID_VALUE,
                                a,
                            ) || this
                        );
                    }
                    return ((0, a.__extends)(t, e), t);
                })(h),
                g = (function (e) {
                    function t(t, i, n) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(i), r.INVALID_VALUE, n) || this;
                    }
                    return ((0, a.__extends)(t, e), t);
                })(h),
                v = (function (e) {
                    function t(t, i) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(i, '"'), r.MISSING_VALUE, i) || this
                        );
                    }
                    return ((0, a.__extends)(t, e), t);
                })(h);
            function _(e) {
                return {
                    create: function () {
                        return {
                            get: function (t) {
                                return e[t];
                            },
                            set: function (t, i) {
                                e[t] = i;
                            },
                        };
                    },
                };
            }
            !(function (e) {
                ((e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object'));
            })(n || (n = {}));
            var b = (function () {
                function e(t, i, o, c) {
                    var u,
                        d,
                        m = this;
                    if (
                        (void 0 === i && (i = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            var t = m.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var i = t.reduce(function (e, t) {
                                return (e.length && t.type === n.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e);
                            }, []);
                            return i.length <= 1 ? i[0] || '' : i;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, i, a, l, o, c, u) {
                                if (1 === t.length && (0, s.isLiteralElement)(t[0])) return [{ type: n.literal, value: t[0].value }];
                                for (var d = [], m = 0; m < t.length; m++) {
                                    var p = t[m];
                                    if ((0, s.isLiteralElement)(p)) {
                                        d.push({ type: n.literal, value: p.value });
                                        continue;
                                    }
                                    if ((0, s.isPoundElement)(p)) {
                                        'number' == typeof c && d.push({ type: n.literal, value: a.getNumberFormat(i).format(c) });
                                        continue;
                                    }
                                    var _ = p.value;
                                    if (!(o && _ in o)) throw new v(_, u);
                                    var b = o[_];
                                    if ((0, s.isArgumentElement)(p)) {
                                        ((b && 'string' != typeof b && 'number' != typeof b) || (b = 'string' == typeof b || 'number' == typeof b ? String(b) : ''),
                                            d.push({ type: 'string' == typeof b ? n.literal : n.object, value: b }));
                                        continue;
                                    }
                                    if ((0, s.isDateElement)(p)) {
                                        var y = 'string' == typeof p.style ? l.date[p.style] : (0, s.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        d.push({ type: n.literal, value: a.getDateTimeFormat(i, y).format(b) });
                                        continue;
                                    }
                                    if ((0, s.isTimeElement)(p)) {
                                        var y = 'string' == typeof p.style ? l.time[p.style] : (0, s.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : l.time.medium;
                                        d.push({ type: n.literal, value: a.getDateTimeFormat(i, y).format(b) });
                                        continue;
                                    }
                                    if ((0, s.isNumberElement)(p)) {
                                        var y = 'string' == typeof p.style ? l.number[p.style] : (0, s.isNumberSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        (y && y.scale && (b *= y.scale || 1), d.push({ type: n.literal, value: a.getNumberFormat(i, y).format(b) }));
                                        continue;
                                    }
                                    if ((0, s.isTagElement)(p)) {
                                        var x = p.children,
                                            T = p.value,
                                            A = o[T];
                                        if ('function' != typeof A) throw new g(T, 'function', u);
                                        var j = A(
                                            e(x, i, a, l, o, c).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        (Array.isArray(j) || (j = [j]),
                                            d.push.apply(
                                                d,
                                                j.map(function (e) {
                                                    return { type: 'string' == typeof e ? n.literal : n.object, value: e };
                                                }),
                                            ));
                                    }
                                    if ((0, s.isSelectElement)(p)) {
                                        var N = p.options[b] || p.options.other;
                                        if (!N) throw new f(p.value, b, Object.keys(p.options), u);
                                        d.push.apply(d, e(N.value, i, a, l, o));
                                        continue;
                                    }
                                    if ((0, s.isPluralElement)(p)) {
                                        var N = p.options['='.concat(b)];
                                        if (!N) {
                                            if (!Intl.PluralRules)
                                                throw new h(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    r.MISSING_INTL_API,
                                                    u,
                                                );
                                            var S = a.getPluralRules(i, { type: p.pluralType }).select(b - (p.offset || 0));
                                            N = p.options[S] || p.options.other;
                                        }
                                        if (!N) throw new f(p.value, b, Object.keys(p.options), u);
                                        d.push.apply(d, e(N.value, i, a, l, o, b - (p.offset || 0)));
                                        continue;
                                    }
                                }
                                return d.length < 2
                                    ? d
                                    : d.reduce(function (e, t) {
                                          var i = e[e.length - 1];
                                          return (i && i.type === n.literal && t.type === n.literal ? (i.value += t.value) : e.push(t), e);
                                      }, []);
                            })(m.ast, m.locales, m.formatters, m.formats, e, void 0, m.message);
                        }),
                        (this.resolvedOptions = function () {
                            var e;
                            return { locale: (null == (e = m.resolvedLocale) ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(m.locales)[0] };
                        }),
                        (this.getAst = function () {
                            return m.ast;
                        }),
                        (this.locales = i),
                        (this.resolvedLocale = e.resolveLocale(i)),
                        'string' == typeof t)
                    ) {
                        if (((this.message = t), !e.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
                        var b = c || {},
                            y = (b.formatters, (0, a.__rest)(b, ['formatters']));
                        this.ast = e.__parse(t, (0, a.__assign)((0, a.__assign)({}, y), { locale: this.resolvedLocale }));
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
                    ((this.formats =
                        ((u = e.formats),
                        o
                            ? Object.keys(u).reduce(
                                  function (e, t) {
                                      var i, r;
                                      return (
                                          (e[t] =
                                              ((i = u[t]),
                                              (r = o[t])
                                                  ? (0, a.__assign)(
                                                        (0, a.__assign)((0, a.__assign)({}, i || {}), r || {}),
                                                        Object.keys(i).reduce(function (e, t) {
                                                            return ((e[t] = (0, a.__assign)((0, a.__assign)({}, i[t]), r[t] || {})), e);
                                                        }, {}),
                                                    )
                                                  : i)),
                                          e
                                      );
                                  },
                                  (0, a.__assign)({}, u),
                              )
                            : u)),
                        (this.formatters =
                            (c && c.formatters) ||
                            (void 0 === (d = this.formatterCache) && (d = { number: {}, dateTime: {}, pluralRules: {} }),
                            {
                                getNumberFormat: l(
                                    function () {
                                        for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, a.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: _(d.number), strategy: p.variadic },
                                ),
                                getDateTimeFormat: l(
                                    function () {
                                        for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, a.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: _(d.dateTime), strategy: p.variadic },
                                ),
                                getPluralRules: l(
                                    function () {
                                        for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, a.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: _(d.pluralRules), strategy: p.variadic },
                                ),
                            })));
                }
                return (
                    Object.defineProperty(e, 'defaultLocale', {
                        get: function () {
                            return (e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.memoizedDefaultLocale = null),
                    (e.resolveLocale = function (e) {
                        if (void 0 !== Intl.Locale) {
                            var t = Intl.NumberFormat.supportedLocalesOf(e);
                            return new Intl.Locale(t.length > 0 ? t[0] : 'string' == typeof e ? e : e[0]);
                        }
                    }),
                    (e.__parse = s.parse),
                    (e.formats = {
                        number: { integer: { maximumFractionDigits: 0 }, currency: { style: 'currency' }, percent: { style: 'percent' } },
                        date: {
                            short: { month: 'numeric', day: 'numeric', year: '2-digit' },
                            medium: { month: 'short', day: 'numeric', year: 'numeric' },
                            long: { month: 'long', day: 'numeric', year: 'numeric' },
                            full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
                        },
                        time: {
                            short: { hour: 'numeric', minute: 'numeric' },
                            medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
                            long: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                            full: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                        },
                    }),
                    e
                );
            })();
        },
        41349: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 90387));
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Y });
            var r = i(88800),
                n = i(84961),
                a = i(2058),
                s = i(87999),
                l = i(17392),
                o = i(18593),
                c = i(29993),
                u = i(52300),
                d = i(19934),
                m = i(96706),
                p = i(53548),
                h = i(79390),
                f = i(29595),
                g = i(74965),
                v = i(72288),
                _ = i(66943),
                b = i(7555),
                y = i(73170),
                x = i(29504),
                T = i(59304),
                A = i(81877),
                j = i(85074),
                N = i.n(j);
            let S = (e) => {
                let { coverUri: t, title: i, isDisliked: n, closeToast: s } = e,
                    { formatMessage: l } = (0, a.A)(),
                    o = l(n ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(T.$, {
                    closeToast: s,
                    message: (0, r.jsxs)('div', {
                        className: N().message,
                        children: [
                            (0, r.jsx)(y.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, r.jsx)(b.t, {
                                className: N().cover,
                                radius: 'round',
                                children: (0, r.jsx)(A.B, { className: N().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(x.HL, { className: N().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var I = i(64207),
                C = i(77455),
                k = i(48749),
                R = i(22505),
                E = i(5407),
                L = i(64284),
                O = i(98427),
                w = i(57934),
                P = i(84384),
                D = i(9618),
                B = i(95210),
                F = i(47964),
                z = i(46936),
                U = i(97956),
                M = i(98953),
                V = i(32721),
                W = i(18130),
                q = i(56117),
                K = i(93091),
                G = i(27817),
                H = i(74064),
                $ = i(15425),
                X = i(81066),
                J = i(64546);
            let Y = (0, n.PA)((e) => {
                var t, i, n;
                let { artist: b, onOpenChange: y, open: x, ...T } = e,
                    { shouldShowBuySubscriptionModal: A, showBuySubscriptionModal: j } = (0, D.q)(),
                    {
                        settings: { isMobile: N },
                        modals: { artistAboutModal: Y },
                        trailer: Z,
                        user: Q,
                        experiments: ee,
                    } = (0, v.g)(),
                    et = (0, C.A)(b),
                    ei = (0, I.K)(b),
                    er = ((e) => {
                        let { user: t } = (0, v.g)(),
                            { notify: i } = (0, g.l)(),
                            [n, s] = (0, p.useState)(!1),
                            { formatMessage: l } = (0, a.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(_.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: f.u.ERROR });
                            if (n) return;
                            let a = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let o = await e.toggleDislike();
                            (s(!1),
                                o === h.f.OK
                                    ? i((0, r.jsx)(S, { coverUri: a.coverUri, title: a.name, isDisliked: a.isDisliked }), { containerId: f.u.INFO })
                                    : i((0, r.jsx)(_.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: f.u.ERROR }));
                        });
                    })(b),
                    en = (0, w.F)(),
                    ea = ''.concat(L.U.ARTIST, '-').concat(null == b ? void 0 : b.id),
                    { formatMessage: es } = (0, a.A)(),
                    { utmLink: el } = (0, P.f)({ blockId: L.U.ARTIST, contextType: o.K.Artist, contextId: null == b ? void 0 : b.id }),
                    { shareLink: eo, pathname: ec } = (0, W.b)('/artist/:artistId', { params: { artistId: null != (i = null == b ? void 0 : b.id) ? i : '' } }),
                    eu = (0, k.A)({ entityVariant: z.D.ARTIST, urlParams: { id: null == b ? void 0 : b.id } }),
                    { isPlaying: ed, togglePlay: em } = (0, F.B)({
                        seeds: null != (n = null == b ? void 0 : b.seeds) ? n : [],
                        pageIdForFrom: O.b.RADIO,
                        blockIdForFrom: ea,
                        parentContextId: null == b ? void 0 : b.id,
                    }),
                    ep = (0, E.P)(),
                    eh = es((null == b ? void 0 : b.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ef = (0, c.c)(() => {
                        if (A && Q.isAuthorized) return void j();
                        ed || em();
                    }),
                    eg = (0, c.c)(() => {
                        if (!ep()) {
                            if (A) return void j();
                            (null == b ? void 0 : b.id) && (Z.setUtmLink(el), Z.openArtistTrailer(b.id), en(s.DomainObjectType.Artist, b.id));
                        }
                    }),
                    ev = (0, c.c)(() => {
                        Y.open(null == b ? void 0 : b.id);
                    });
                (0, B.N)(x);
                let e_ = { variant: M.Y.ARTIST, id: null == b ? void 0 : b.id, title: null == b ? void 0 : b.name, path: ec },
                    eb = ee.checkExperiment(U.z.WebEditorsFeatures, 'on'),
                    ey = null == b || null == (t = b.trailer) ? void 0 : t.isAvailable,
                    ex = ee.checkExperiment(U.z.WebNextArtistInfo, 'on'),
                    eT = !ee.checkExperiment(U.z.WebNextProductWithoutRecommendation, 'on');
                return (0, r.jsxs)(d.W1, {
                    isMobile: N,
                    offsetOptions: 10,
                    open: x,
                    onOpenChange: y,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...T,
                    children: [
                        eb && (0, r.jsx)(J.WithOffline, { fallback: (0, r.jsx)(R.d, { entityVariant: z.D.ARTIST, adminUrl: eu }) }),
                        !N && (0, r.jsx)(J.WithOffline, { fallback: (0, r.jsx)(G.L, { onClick: et, isPinned: null == b ? void 0 : b.isPinned }) }),
                        (0, r.jsx)(J.WithOffline, {
                            fallback: (0, r.jsx)(K.T, {
                                onClick: ei,
                                isLiked: null == b ? void 0 : b.isLiked,
                                disabled: !Q.isAuthorized || !(null == b ? void 0 : b.isAvailable),
                            }),
                        }),
                        ey && (0, r.jsx)(J.WithOffline, { fallback: (0, r.jsx)($.N, { onClick: eg }) }),
                        eT &&
                            (0, r.jsx)(J.WithOffline, {
                                fallback: (0, r.jsx)(X.C, { onClick: ef, disabled: !(null == b ? void 0 : b.isAvailable), variant: V.I.ARTIST, onOpenMenuChange: y }),
                            }),
                        (0, r.jsx)(H.H, { disabled: !b, shareLink: eo, entityMeta: e_ }),
                        ex &&
                            (0, r.jsx)(J.WithOffline, {
                                fallback: (0, r.jsx)(d.Dr, {
                                    onClick: ev,
                                    icon: (0, r.jsx)(u.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: eh,
                                }),
                            }),
                        (0, r.jsx)(J.WithOffline, {
                            fallback: (0, r.jsx)(q.D, { onClick: er, isDisliked: null == b ? void 0 : b.isDisliked, disabled: !(null == b ? void 0 : b.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        44084: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => a });
            var r = i(23877),
                n = i(74021);
            class a extends n.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= r.c.INFO && this.logToConsole(r.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= r.c.DEBUG && this.logToConsole(r.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= r.c.TRACE && this.logToConsole(r.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= r.c.WARNING && this.logToConsole(r.c.WARNING, e, t), this.sendToErrorBooster(r.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= r.c.ERROR && this.logToConsole(r.c.ERROR, e, t), this.sendToErrorBooster(r.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(r.c.INFO, e, t);
                }
                logToConsole(e, t, i) {
                    if (this.disableLogToConsole) return;
                    let n = r.Q[e];
                    console[n](...this.formatMessage(e, t, i));
                }
                sendToErrorBooster(e, t, i) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: i ? this.obfuscateData({ ...this.additionalData, ...i }) : {} } });
                }
            }
        },
        45700: (e, t) => {
            'use strict';
            var i, r;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createNumberElement =
                    t.createLiteralElement =
                    t.isDateTimeSkeleton =
                    t.isNumberSkeleton =
                    t.isTagElement =
                    t.isPoundElement =
                    t.isPluralElement =
                    t.isSelectElement =
                    t.isTimeElement =
                    t.isDateElement =
                    t.isNumberElement =
                    t.isArgumentElement =
                    t.isLiteralElement =
                    t.SKELETON_TYPE =
                    t.TYPE =
                        void 0),
                (function (e) {
                    ((e[(e.literal = 0)] = 'literal'),
                        (e[(e.argument = 1)] = 'argument'),
                        (e[(e.number = 2)] = 'number'),
                        (e[(e.date = 3)] = 'date'),
                        (e[(e.time = 4)] = 'time'),
                        (e[(e.select = 5)] = 'select'),
                        (e[(e.plural = 6)] = 'plural'),
                        (e[(e.pound = 7)] = 'pound'),
                        (e[(e.tag = 8)] = 'tag'));
                })(i || (t.TYPE = i = {})),
                (function (e) {
                    ((e[(e.number = 0)] = 'number'), (e[(e.dateTime = 1)] = 'dateTime'));
                })(r || (t.SKELETON_TYPE = r = {})),
                (t.isLiteralElement = function (e) {
                    return e.type === i.literal;
                }),
                (t.isArgumentElement = function (e) {
                    return e.type === i.argument;
                }),
                (t.isNumberElement = function (e) {
                    return e.type === i.number;
                }),
                (t.isDateElement = function (e) {
                    return e.type === i.date;
                }),
                (t.isTimeElement = function (e) {
                    return e.type === i.time;
                }),
                (t.isSelectElement = function (e) {
                    return e.type === i.select;
                }),
                (t.isPluralElement = function (e) {
                    return e.type === i.plural;
                }),
                (t.isPoundElement = function (e) {
                    return e.type === i.pound;
                }),
                (t.isTagElement = function (e) {
                    return e.type === i.tag;
                }),
                (t.isNumberSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === r.number);
                }),
                (t.isDateTimeSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === r.dateTime);
                }),
                (t.createLiteralElement = function (e) {
                    return { type: i.literal, value: e };
                }),
                (t.createNumberElement = function (e, t) {
                    return { type: i.number, value: e, style: t };
                }));
        },
        50660: (e) => {
            e.exports = {
                root: 'LabelArtistsPage_root__smTJJ',
                scrollContainer: 'LabelArtistsPage_scrollContainer__alDjs',
                important: 'LabelArtistsPage_important__pOZpi',
                shimmerScrollContainer: 'LabelArtistsPage_shimmerScrollContainer__Znpy2',
                footer: 'LabelArtistsPage_footer__JU2P3',
                item: 'LabelArtistsPage_item__kol2m',
                content: 'LabelArtistsPage_content__4hjcX',
                shimmerTitle: 'LabelArtistsPage_shimmerTitle__hXk1g',
            };
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var r = i(88800),
                n = i(4370),
                a = i(15077),
                s = i(42729);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(s.O, {
                    closeToast: i,
                    entityVariant: a.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: n.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        54320: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => u });
            var r = i(88800),
                n = i(53548),
                a = i(29993),
                s = i(9492),
                l = i(29595),
                o = i(74965),
                c = i(74773);
            let u = (e, t) => {
                let { notify: i, dismiss: u } = (0, o.l)(),
                    d = (0, n.useRef)(void 0),
                    m = (0, a.c)(() => {
                        var i;
                        (u({ notificationId: d.current }), (d.current = 0));
                        let r = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, n.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !d.current && (d.current = i((0, r.jsx)(s.L, { reloadBlocks: m }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [u, m, i, e.rejectedPagesCount]);
            };
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => u });
            var r = i(88800),
                n = i(84961),
                a = i(88969),
                s = i(17392),
                l = i(52300),
                o = i(19934),
                c = i(72288);
            let u = (0, n.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: n, className: u } = e,
                    { user: d } = (0, c.g)();
                return (0, r.jsx)(o.Dr, {
                    onClick: i,
                    className: u,
                    icon: (0, r.jsx)(l.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: n || !d.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, r.jsx)(a.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var r = i(88800),
                n = i(96706),
                a = i(53548),
                s = i(2058),
                l = i(79390),
                o = i(29595),
                c = i(74965),
                u = i(72288),
                d = i(66943),
                m = i(54243);
            let p = (e) => {
                let { user: t } = (0, u.g)(),
                    { notify: i } = (0, c.l)(),
                    [p, h] = (0, a.useState)(!1),
                    { formatMessage: f } = (0, s.A)();
                return (0, a.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: f({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (p) return;
                    let a = { ...(0, n.HO)(e), isLiked: !e.isLiked };
                    h(!0);
                    let s = await e.toggleLike();
                    (h(!1),
                        s === l.f.OK
                            ? i((0, r.jsx)(m.T, { artist: a }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(d.h, { error: f({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, p, f, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var r = i(88800),
                n = i(15077),
                a = i(33719);
            let s = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(a.k, {
                    closeToast: i,
                    entityVariant: n.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        68436: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0));
            var r = i(88092);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                r.__exportStar(i(45700), t),
                (t._Parser = void 0));
        },
        70621: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => o });
            var r = i(53548),
                n = i(63582),
                a = i(245),
                s = i(22681),
                l = i(56374);
            let o = (0, n.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, a.N)(),
                    t = (0, s.w)(),
                    i = (0, r.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, l.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        74021: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => o });
            var r = i(14567),
                n = i(243),
                a = i(62151),
                s = i(33396);
            let l = () => 'SECRET';
            class o {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: i }) {
                    ((this.maxLogLevel = t), (this.secureFields = i), (this.additionalData = e));
                }
                formatMessage(e, t, i = {}, n) {
                    let a,
                        l = String(t instanceof Error && t.stack ? t.stack : t),
                        o = (0, s.A)({ ...this.additionalData, ...i });
                    return (Object.keys(o).length && (a = this.obfuscateData(o)), n) ? `${l} ${r(a)}` : [l, a];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, n.A)(e, t) && (0, a.A)(e, t, l());
                    return e;
                }
            }
        },
        76903: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => d });
            var r = i(88800),
                n = i(53548),
                a = i(53534),
                s = i(63582),
                l = i(245);
            let o = new WeakMap();
            class c {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let i =
                        o.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                i = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                r = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                i();
                                            } finally {
                                                ((t = !1), e.length > 0 && r());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (i(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), r());
                                },
                            };
                        })();
                    (o.set(t, i), (this.queue = i));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var u = i(87999);
            let d = (0, s.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, l.N)(),
                        s = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === u.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [o, d] = (0, n.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: s, scope: s ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        o.client !== i ||
                        o.input.pageId !== t.pageId ||
                        o.input.skeletonId !== t.skeletonId ||
                        o.input.mainObjectType !== t.mainObjectType ||
                        o.input.mainObjectId !== t.mainObjectId
                    ) {
                        let n = new c(i.createScreenSession().screenViewUuid, i),
                            l = { client: i, input: t, isReady: s, scope: s ? i.createScreenScope(t, n) : null, session: n };
                        return (d(l), (0, r.jsx)(a.k, { value: l, children: e }));
                    }
                    if (
                        o.isReady !== s ||
                        o.input.displayReasonId !== t.displayReasonId ||
                        o.input.pageIdForFrom !== t.pageIdForFrom ||
                        o.input.pagePlacement !== t.pagePlacement ||
                        o.input.pageStyle !== t.pageStyle
                    ) {
                        let n = { ...o, input: t, isReady: s, scope: s ? i.createScreenScope(t, o.session) : null };
                        return (d(n), (0, r.jsx)(a.k, { value: n, children: e }));
                    }
                    return (0, r.jsx)(a.k, { value: o, children: e });
                },
            );
        },
        77451: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => a, TF: () => l, hZ: () => s });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, r = arguments.length; i < r; i++)
                            for (var n in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e;
                    }).apply(this, arguments);
            };
            function n(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function a(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], r = 0; r < i.length; r++) {
                        var n = i[r].split('='),
                            a = n.slice(1).join('=');
                        '"' === a[0] && (a = a.slice(1, -1));
                        try {
                            t[decodeURIComponent(n[0])] = a.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function s(e, t, i) {
                var a;
                document.cookie =
                    ((a = r({ path: '/' }, i)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                n('Expires', e.expires ? e.expires.toUTCString() : '') +
                                n('Domain', e.domain) +
                                n('Path', e.path) +
                                n('Secure', e.secure) +
                                n('SameSite', e.sameSite)
                            );
                        })(a));
            }
            function l(e, t) {
                s(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(88800),
                n = i(96706),
                a = i(53548),
                s = i(2058),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                u = i(66943),
                d = i(64247);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [p, h] = (0, a.useState)(!1);
                return (0, a.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (p) return;
                    let a = { ...(0, n.HO)(e), isPinned: !e.isPinned };
                    h(!0);
                    let s = await e.togglePin();
                    (h(!1),
                        s
                            ? i((0, r.jsx)(d.l, { artist: a }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, p, m, i]);
            };
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var r = i(88800),
                n = i(65724),
                a = i(61013),
                s = i(53548);
            let l = (e) => {
                    let { style: t, forwardRef: i, context: n, ...a } = e,
                        s = (null == n ? void 0 : n.listAriaLabel) || void 0,
                        l = (null == n ? void 0 : n.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': s, style: { ...t }, ref: i, ...a });
                },
                o = (0, s.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }));
            var c = i(16434),
                u = i.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: i, withFooter: a, withHeader: s, withForceScroll: l, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, n.$)(u().scroller, { [u().scroller_withFooter]: a, [u().scroller_withHeader]: s, [u().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, s.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
            var p = i(55482),
                h = i(75151);
            let f = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: n,
                            debounceDurationInMs: a = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [m, f] = (0, s.useState)(null),
                        g = (0, s.useMemo)(
                            () =>
                                (0, p.A)((e) => {
                                    if ((null == n || n(e), o.length > 0 && f(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            n = Math.floor(e.startIndex / t);
                                        for (let e = n; e < r; e++) i(e);
                                    }
                                }, a),
                            [a, n, t, i, o],
                        );
                    (0, s.useEffect)(() => {
                        o.length > 0 && m && g(m);
                    }, o);
                    let v = (0, s.useMemo)(() => {
                        if (c)
                            return (0, p.A)((e) => {
                                c(e);
                            }, a);
                    }, [c, a]);
                    return (0, r.jsx)(h.sN, { ref: u, rangeChanged: g, totalCount: l, endReached: v, ...d });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: p,
                            listClassName: h,
                            overscan: g = 700,
                            pageSize: v = 20,
                            totalCount: _,
                            totalRequests: b,
                            debounceDurationInMs: y,
                            initialItemCount: x,
                            minInitialItemCount: T = 20,
                            handleRef: A,
                            alwaysShowScrollbar: j = !1,
                            testId: N,
                            isMobileLayout: S = !1,
                            shouldTriggerRangeChangedOn: I,
                            ...C
                        } = e,
                        [k, R] = (0, s.useState)(!1),
                        E = (0, s.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    R(e);
                                }, 100),
                            [],
                        ),
                        L = (0, s.useMemo)(() => {
                            var e, t;
                            return S
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
                        }, [i, b, S]),
                        O = x ? Math.min(x, T) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, n.$)(u().root, { [u().root_scrolling]: k || j, [u().root_notScrolling]: !k && !j }, t),
                        'data-test-id': N,
                        children: [
                            S && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(f, {
                                overscan: g,
                                components: L,
                                listClassName: h,
                                itemClassName: d,
                                isScrolling: E,
                                itemContent: p,
                                scrollerRef: A,
                                totalCount: _,
                                pageSize: v,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: y,
                                initialItemCount: O,
                                shouldTriggerRangeChangedOn: I,
                                ...C,
                            }),
                            S && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        85074: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        88349: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => r });
            let r = (e) => {
                let t = e?.split(':')[0];
                return (t?.includes('.') && t?.split('.').pop()) || '';
            };
        },
        90387: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => F }));
            var r = i(88800),
                n = i(53548),
                a = i(58390),
                s = i(65724),
                l = i(84961),
                o = i(2058),
                c = i(87999),
                u = i(76903),
                d = i(17392),
                m = i(29993),
                p = i(29504),
                h = i(32596),
                f = i(21256),
                g = i(69630),
                v = i(98427),
                _ = i(46422),
                b = i(44230),
                y = i(37670),
                x = i(34961),
                T = i(53892),
                A = i(72288),
                j = i(54320),
                N = i(86790),
                S = i(60266),
                I = i(93317),
                C = i(37770),
                k = i(79418),
                R = i(64709),
                E = i(50660),
                L = i.n(E);
            let O = (0, l.PA)((e) => {
                let { labelId: t, preloadedLabel: i, preloadedArtists: l } = e,
                    { id: E, name: O, type: w, artistsSubpage: P, reset: D, isNeededToLoad: B, getData: F } = (0, x.s)(T.n.LABEL),
                    {
                        settings: { isMobile: z },
                    } = (0, A.g)(),
                    { formatMessage: U } = (0, o.A)(),
                    { contentScrollRef: M, setContentScrollRef: V } = (0, b.g)(),
                    W = (0, _.W)(),
                    q = U({ id: 'page.label-artists-header' }, { labelName: O }),
                    K = (0, m.c)((e) => {
                        P.getData({ labelId: Number(t), page: e, pageSize: 20 });
                    });
                ((0, j.X)(P.pagesLoader, K),
                    (0, n.useEffect)(
                        () => () => {
                            (D(), P.reset());
                        },
                        [D, P],
                    ),
                    P.isNotFound && (0, a.notFound)(),
                    (0, R.Q)({ id: Number(E), name: null != O ? O : '', type: null != w ? w : '' }, R.T.ARTISTS),
                    (0, y.J)(P.isResolved));
                let G = (0, n.useMemo)(() => ({ Footer: () => (0, r.jsx)(S.A, { children: (0, r.jsx)(N.w, { className: L().footer }) }) }), []),
                    H = U({ id: 'entity-names.label-artists-list' }),
                    $ = [];
                if (
                    (P.isNeededToLoad && $.push(P.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedArtists: l })),
                    B && $.push(F({ labelId: Number(t), preloadedLabel: i, withLabelEntities: !1 })),
                    $.length && (0, n.use)(Promise.allSettled($)),
                    P.isRejected && !P.isNotFound)
                )
                    return (0, r.jsx)(h.SomethingWentWrong, {});
                let X = P.isShimmerVisible ? 20 : P.totalCount;
                return (0, r.jsx)(u.a, {
                    pageId: c.AppScreen.LabelArtists,
                    pageIdForFrom: v.b.LABEL_ARTISTS,
                    children: (0, r.jsx)(g.h, {
                        scrollElement: M,
                        outerTitle: q,
                        children: (0, r.jsxs)('div', {
                            className: L().root,
                            'data-test-id': d.Xk.label.LABEL_ARTISTS_PAGE,
                            children: [
                                (0, r.jsx)(I.Y, {
                                    variant: I.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: W.canBack,
                                    className: L().header,
                                    children: (0, r.jsx)(p.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: q }),
                                }),
                                (0, r.jsx)(k.$, {
                                    className: (0, s.$)(L().scrollContainer, L().important),
                                    listClassName: L().content,
                                    itemClassName: L().item,
                                    customComponents: G,
                                    itemContentCallback: (e) => {
                                        let t = P.items[e],
                                            i = U({ id: 'loading-messages.entity-is-loading' }, { entityName: U({ id: 'entity-names.artist' }) });
                                        return t
                                            ? (0, r.jsx)(f.a, { artist: t, contentLinesCount: 4 }, t.id)
                                            : (0, r.jsx)(C.V, { 'aria-label': i, round: !0, centered: !0, linesCount: 4 });
                                    },
                                    totalCount: X,
                                    initialItemCount: X,
                                    onGetDataByPage: K,
                                    pageSize: 20,
                                    totalRequests: P.requestsCount,
                                    handleRef: V,
                                    context: { listAriaLabel: H },
                                    isMobileLayout: z,
                                    useWindowScroll: z,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var w = i(19994),
                P = i(1698);
            let D = () => {
                let e = (0, _.W)(),
                    { formatMessage: t } = (0, o.A)(),
                    i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.artist' }) });
                return (0, r.jsx)(g.h, {
                    scrollElement: null,
                    children: (0, r.jsxs)('div', {
                        className: L().root,
                        children: [
                            (0, r.jsx)(I.Y, {
                                variant: I.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: (0, r.jsx)(w.W, { className: L().shimmerTitle, radius: 'l' }),
                            }),
                            (0, r.jsx)('div', {
                                className: (0, s.$)(L().scrollContainer, L().important, L().shimmerScrollContainer),
                                children: (0, r.jsx)('div', {
                                    className: L().content,
                                    children: (0, r.jsx)(P.e, {
                                        isActive: !0,
                                        itemClassName: L().item,
                                        'aria-label': i,
                                        round: !0,
                                        centered: !0,
                                        linesCount: 4,
                                        count: 20,
                                    }),
                                }),
                            }),
                        ],
                    }),
                });
            };
            var B = i(21438);
            let F = () => {
                let e = (0, a.useSearchParams)().get('labelId');
                return ((e && (0, B.L)(e)) || (0, a.notFound)(), (0, r.jsx)(n.Suspense, { fallback: (0, r.jsx)(D, {}), children: (0, r.jsx)(O, { labelId: e }) }));
            };
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => n });
            var r = i(58217);
            let n = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: n } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        93434: (e) => {
            e.exports = {
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                root: 'ArtistCard_root__x67BK',
                srTitleLink: 'ArtistCard_srTitleLink__jzfOW',
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
    },
    (e) => {
        (e.O(
            0,
            [
                4700, 7908, 3248, 5038, 1147, 1191, 7072, 8655, 2691, 8917, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 4732,
                9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 3470, 763, 2670, 7358,
            ],
            () => e((e.s = 41349)),
        ),
            (_N_E = e.O()));
    },
]);
