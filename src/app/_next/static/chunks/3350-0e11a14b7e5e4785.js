(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3350],
    {
        12526: (e, t, a) => {
            var r = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function n(e) {
                if (!a.o(r, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = r[e],
                    n = t[0];
                return a.e(t[1]).then(() => a.t(n, 19));
            }
            (n.keys = () => Object.keys(r)), (n.id = 12526), (e.exports = n);
        },
        14190: (e, t, a) => {
            'use strict';
            a.d(t, { Xn: () => i, cy: () => n, pE: () => r });
            let r = {
                    yandex: {
                        regions: ['RU', 'BY', 'KZ', 'UZ'],
                        regionLangs: {
                            RU: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            BY: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            KZ: { langs: ['kk', 'en', 'ru', 'uz'], defaultLang: 'kk' },
                            UZ: { langs: ['uz', 'en', 'ru', 'kk'], defaultLang: 'uz' },
                        },
                        langs: ['ru', 'en', 'uz', 'kk'],
                        defaultLang: 'ru',
                    },
                    yango: {
                        regions: ['AE', 'BH', 'EG', 'IQ', 'JO', 'KW', 'OM', 'QA', 'SA'],
                        regionLangs: {
                            AE: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            BH: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            EG: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            IQ: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            JO: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            KW: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            OM: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            QA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            SA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                        },
                        langs: ['en', 'ar'],
                        defaultLang: 'en',
                    },
                },
                n = 'yandex',
                i = 'ru-RU';
        },
        22556: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => n });
            let r = (e, t) => {
                    let a = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (a) return a;
                    let r = window.document.createElement('meta');
                    return r.setAttribute(e, t), r;
                },
                n = (e) => {
                    let { title: t, description: a, openGraph: n } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof a)) {
                        let e = r('name', 'description');
                        e.setAttribute('content', a), window.document.head.appendChild(e);
                    }
                    let i = '';
                    if (n) {
                        let e = 'string' == typeof n.title ? n.title : '',
                            t = 'string' == typeof n.description ? n.description : '',
                            a = Array.isArray(n.images) ? n.images[0] : null;
                        i = a && 'object' == typeof a && 'url' in a ? String(a.url) : '';
                        let o = r('property', 'og:title'),
                            l = r('property', 'og:description'),
                            s = r('property', 'og:image');
                        o.setAttribute('content', e),
                            l.setAttribute('content', t),
                            s.setAttribute('content', i),
                            window.document.head.appendChild(o),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(s);
                    }
                };
        },
        23278: (e) => {
            e.exports = {
                root: 'PageHeaderBase_root__xMIBu',
                root_withCover: 'PageHeaderBase_root_withCover__JIKxy',
                root_withCoverAndLogo: 'PageHeaderBase_root_withCoverAndLogo__nsTU2',
                logo: 'PageHeaderBase_logo__pD3fg',
                coverCell: 'PageHeaderBase_coverCell__nBx4c',
                content: 'PageHeaderBase_content___DNyv',
                info: 'PageHeaderBase_info__GRcah',
                entityContainer: 'PageHeaderBase_entityContainer__BDwxT',
                title_withDisclaimerLabel: 'PageHeaderBase_title_withDisclaimerLabel__Apuhc',
                entityName: 'PageHeaderBase_entityName__9Sj_Q',
                disclaimerLabel: 'PageHeaderBase_disclaimerLabel___2wo6',
                meta: 'PageHeaderBase_meta__bMvfR',
                meta_withDisclaimerLabel: 'PageHeaderBase_meta_withDisclaimerLabel__nxckS',
                controls: 'PageHeaderBase_controls__HzGgE',
                buttonContainer: 'PageHeaderBase_buttonContainer__Ad8ha',
                button: 'PageHeaderBase_button__lCrTR',
                bonusText: 'PageHeaderBase_bonusText__I43It',
                giftIcon: 'PageHeaderBase_giftIcon__uDQIG',
                oneClickDisclaimerText: 'PageHeaderBase_oneClickDisclaimerText__TGbFd',
            };
        },
        24535: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => i });
            var r = a(80451),
                n = a(73422);
            function i(e) {
                let { ogTitle: t, ogDescription: a, fullUrl: i, locale: o, ogImage: l, siteName: s, ogType: d, customImage: c } = e,
                    _ = l ? { url: (0, r.createAvatarUrl)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: a,
                    url: i,
                    ...(d && { type: d }),
                    siteName: s,
                    locale: (o || n.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: _ || c,
                };
            }
        },
        26365: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => i });
            var r = a(36477);
            let n = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                i = function (e, t) {
                    for (var a = arguments.length, i = Array(a > 2 ? a - 2 : 0), o = 2; o < a; o++) i[o - 2] = arguments[o];
                    let [l] = i,
                        s = '/' === e ? '' : e,
                        d = (e) => ({ ...(null != l ? l : {}), options: e }),
                        c = {},
                        { href: _ } = (0, r.u)(s, d({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(n)) {
                        let { href: a } = (0, r.u)(s, d({ linkType: 'alternate', host: t, lang: e }));
                        c[e] = a;
                    }
                    return { canonical: _, languages: c };
                };
        },
        31995: (e, t, a) => {
            'use strict';
            function r(e, t) {
                let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (e.length <= t) return e;
                let r = e.substring(0, t),
                    n = a ? r.lastIndexOf(' ') : t,
                    i = ~n ? r.substring(0, n) : r;
                return ''.concat(i, '...');
            }
            a.d(t, { Y: () => r });
        },
        41898: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => b });
            var r = a(32290),
                n = a(63618),
                i = a(96103),
                o = a(55178),
                l = a(60900),
                s = a(21732),
                d = a(91027),
                c = a(6752),
                _ = a(63423),
                u = a(82586),
                g = a(71926),
                f = a(85377);
            let h = (e) => {
                let { children: t, title: a, className: n } = e,
                    { setTitleElement: i, setTitle: l } = (0, o.useContext)(f.B),
                    s = (0, o.useRef)(null);
                return (
                    (0, o.useEffect)(() => {
                        (null == s ? void 0 : s.current) && i(s), a && l(a);
                    }, [s, a, i, l]),
                    (0, o.useEffect)(
                        () => () => {
                            l('');
                        },
                        [l],
                    ),
                    (0, r.jsx)('div', { ref: s, className: n, children: t })
                );
            };
            var p = a(84062),
                m = a(57594),
                x = a(61258),
                y = a(85832),
                v = a(96746),
                L = a.n(v);
            let b = (0, i.PA)((e) => {
                let {
                        title: t = '',
                        'aria-labelledby': a,
                        canChange: i = !1,
                        onChange: f,
                        maxTitleLength: v,
                        version: b = '',
                        onVersionClick: w,
                        className: T,
                        headingVariant: j = 'h2',
                        withHeadingClamp: k = !0,
                        link: H,
                        onTitleLinkClick: C,
                    } = e,
                    {
                        settings: { isMobile: P },
                    } = (0, m.g)(),
                    { formatMessage: N } = (0, l.A)(),
                    [A, E] = (0, o.useState)(!1),
                    R = (0, o.useRef)(null),
                    B = t.length + b.length > 25,
                    D = (0, p.Z)(null != H ? H : ''),
                    M = (0, d.c)((e) => {
                        null == C || C(), D(e);
                    }),
                    O = (0, o.useMemo)(
                        () =>
                            P
                                ? { font: L().font_mobile, iconLink: L().arrowWrapper_mobile }
                                : B
                                  ? { font: L().font_long, iconLink: L().arrowWrapper_long }
                                  : { font: L().font_short, iconLink: L().arrowWrapper_short },
                        [P, B],
                    ),
                    I = !P && i && A,
                    W = (0, o.useCallback)(() => {
                        var e;
                        E(!0), null == (e = R.current) || e.focus();
                    }, []),
                    z = (0, o.useCallback)(
                        (e) => {
                            E(!1), null == f || f(e);
                        },
                        [f],
                    ),
                    S = (0, c.L)(() =>
                        (0, r.jsx)('span', {
                            className: (0, n.$)(L().arrowWrapper, O.iconLink),
                            children: (0, r.jsx)(u.I, { className: L().titleWithLinkIcon, size: 'xs', variant: 'arrowRight' }),
                        }),
                    ),
                    U = (0, c.L)(() =>
                        (0, r.jsxs)(g.DZ, {
                            variant: j,
                            id: a,
                            lineClamp: P && k ? 2 : void 0,
                            className: (0, n.$)(L().heading, { [L().heading_withVersion]: b }),
                            'data-test-id': s.e8.pageHeader.ENTITY_TITLE,
                            children: [
                                (0, r.jsx)(g.HL, { className: (0, n.$)(L().font, O.font, L().title), variant: 'span', children: t }),
                                b &&
                                    (0, r.jsx)(g.HL, {
                                        onClick: w,
                                        className: (0, n.$)(L().font, O.font, L().version, { [L().version_withOtherVersions]: w }),
                                        variant: 'span',
                                        'data-test-id': s.e8.pageHeader.ENTITY_VERSION,
                                        children: ' '.concat(b),
                                    }),
                                H && !P && S,
                            ],
                        }),
                    ),
                    F = (0, c.L)(() =>
                        H
                            ? (0, r.jsxs)(x.N, {
                                  className: L().titleWithLink,
                                  containerClassName: L().linkContainer,
                                  textClassName: L().linkText,
                                  href: H,
                                  onClick: M,
                                  children: [U, P && S],
                              })
                            : U,
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        !I &&
                            (0, r.jsxs)('div', {
                                className: (0, n.$)(L().root, T),
                                children: [
                                    (0, r.jsx)(h, { title: t, className: L().stickyTitle, children: F }),
                                    i &&
                                        (0, r.jsx)('div', {
                                            className: (0, n.$)(L().editButton, { [L().editButton_centered]: !B && !P }),
                                            children: (0, r.jsx)(_.$, {
                                                onClick: W,
                                                'aria-label': N({ id: 'playlist-actions.change-title' }),
                                                icon: (0, r.jsx)(u.I, { size: 'xxs', variant: 'pencil' }),
                                                size: 's',
                                                radius: 'round',
                                                'data-test-id': s.e8.pageHeader.EDIT_TITLE_BUTTON,
                                            }),
                                        }),
                                ],
                            }),
                        I &&
                            (0, r.jsx)('div', {
                                className: L().textFieldContainer,
                                children: (0, r.jsx)(y.A, {
                                    text: t,
                                    className: (0, n.$)(L().font, O.font, L().textField, L().title, { [L().textField_long]: B && !P }),
                                    onChangeFinish: z,
                                    maxTextLength: v,
                                    minTextLength: 1,
                                    placeholder: N({ id: 'playlist-actions.enter-title' }),
                                    shouldFinishOnKeyPress: !0,
                                    withOutline: !0,
                                }),
                            }),
                    ],
                });
            });
        },
        42125: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => c });
            var r = a(3266),
                n = a(55178),
                i = a(14190),
                o = a(73422),
                l = a(84570),
                s = a(64552);
            let d = (0, n.cache)(async (e) => (0, s.M)(e, s.X)),
                c = async (e) => {
                    let t = (e || o.E.getDefaultLocale()).language,
                        a = (0, l.k)(i.pE[i.cy], t),
                        n = await d(a);
                    return (e, t) => {
                        let i = null == n ? void 0 : n[e.id],
                            o = '';
                        return (Array.isArray(i) || 'string' == typeof i) && (o = new r.S(i, a).format(t)), Array.isArray(o) ? o.join('') : o;
                    };
                };
        },
        44242: (e, t, a) => {
            'use strict';
            function r(e) {
                return { ios: { app_name: e.appName, app_store_id: '520797969', url: 'yandexmusic:/'.concat(e.additional.url) }, web: { url: e.additional.fullUrl } };
            }
            a.d(t, { X: () => r });
        },
        46646: (e, t, a) => {
            var r = { './en.json': [61263, 1263], './kk.json': [62837, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function n(e) {
                if (!a.o(r, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = r[e],
                    n = t[0];
                return a.e(t[1]).then(() => a.t(n, 19));
            }
            (n.keys = () => Object.keys(r)), (n.id = 46646), (e.exports = n);
        },
        47216: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            var r = a(94821);
            let n = '@yandexmusic';
            function i(e) {
                return e.cardType === r.W.SUMMARY_LARGE_IMAGE
                    ? { card: r.W.SUMMARY_LARGE_IMAGE, site: n, title: e.title, description: e.description }
                    : { card: r.W.APP, site: n, title: e.title, app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: 'yandexmusic:/'.concat(e.url) } } };
            }
        },
        64552: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => d, X: () => s });
            var r = a(29222),
                n = a(14190);
            let i = async (e) => e.then((e) => e.default),
                o = n.pE[n.cy],
                l = o.langs.reduce((e, t) => (e.set(t, async () => i(a(12526)('./'.concat(t, '.json')))), e), new Map()),
                s = o.langs.reduce((e, t) => (e.set(t, async () => i(a(46646)('./'.concat(t, '.json')))), e), new Map()),
                d = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        a = t.get(e),
                        n = t.get('ru');
                    if (a) return a();
                    if (n) return n();
                    throw new r.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        73395: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => P });
            var r = a(32290),
                n = a(63618),
                i = a(96103),
                o = a(55178),
                l = a.t(o, 2),
                s = a(39407),
                d = a(21732),
                c = a(54862),
                _ = a(82586),
                u = {
                    5881: (e, t, a) => {
                        function r() {
                            for (var e, t, a = 0, r = ''; a < arguments.length; )
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            r,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (r = e(t[a])) && (n && (n += ' '), (n += r));
                                            else for (a in t) t[a] && (n && (n += ' '), (n += a));
                                        return n;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        a.r(t), a.d(t, { clsx: () => r, default: () => n });
                        let n = r;
                    },
                    6132: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => r });
                        let r = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    6951: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => r });
                        let r = {
                            root_controls_xxs: 'tRaaBpDMg9Qu8v6gKjtn',
                            root_entity_xxs: 'M9zvtlcpLUVn6DKdcHhj',
                            root_text_xxs: 'ln0PYYwDmFnfYxCDJsFU',
                            root_controls_xs: 'n5AeWEsJC3_AYXcbK4Lt',
                            root_entity_xs: '__hrMKGmNbw54T54IUyh',
                            root_text_xs: 'SehSa7OyRpC2nzYTVb2Q',
                            root_controls_s: '_oBLf5gprWsKjCw4Ce58',
                            root_entity_s: 'mxSPe5xpZnie9gpIqacd',
                            root_text_s: 'Ai2iRN9elHpk_u5splD6',
                            root_controls_m: 'tk7ahHRDYXJMMB879KUA',
                            root_entity_m: 'Z_WIr2W8JU4MPQek3hgR',
                            root_text_m: 'g3qWNP6xl__7qxNmtrvd',
                            root_controls_l: 'grvxapJE3vGArOKDWf6n',
                            root_entity_l: 'Esj5A1UeSi4xV4tZ839D',
                            root_text_l: 'V3WU123oO65AxsprotU9',
                            root_weight_normal: 'ZYV27jeWd30QDXu4GhaH',
                            root_weight_medium: '_3_Mxw7Si7j2g4kWjlpR',
                            root_weight_bold: 'Vi7Rd0SZWqD17F0872TB',
                        };
                    },
                    2223: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => r });
                        let r = {
                            root_size_xs: 'qJJ288377iHlWN_RXeEE',
                            root_size_s: '_sd8Q9d_Ttn0Ufe4ISWS',
                            root_size_m: 'Ctk8dbecq31Qh7isOJPQ',
                            root_size_l: 'M_Djh6ppIkCO3A2k_BTA',
                            root_size_xl: 'dtxlzGQMPAbM2MEndXWX',
                            root_size_xxl: 'IUb9XLplTAoZqne9rNUL',
                            root_size_xxxl: 'ZYZamUwql_rfFR4RpI2B',
                            root_size_xxxxl: 'ZBZyxow5njdq8z5dnRPY',
                            root_size_xxxxxl: 'WdvQQNwdDNCdRSwRkAtT',
                            root_weight_bold: 'nSU6fV9y80WrZEfafvww',
                            root_weight_black: 'KBeGPPK4DinQzAP41Y_N',
                        };
                    },
                    5882: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => r });
                        let r = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var n = null;
                            if ((void 0 !== r && (n = '' + r), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var i in ((r = {}), t)) 'key' !== i && (r[i] = t[i]);
                            else r = t;
                            return { $$typeof: a, type: e, key: n, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r);
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    2: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0);
                        let n = a(4377),
                            i = a(5881),
                            o = a(2582),
                            l = r(a(6132));
                        t.Label = (e) => {
                            let { children: t, className: a, size: r = 's', ...s } = e;
                            return (0, n.jsx)(o.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: r,
                                lineClamp: 1,
                                className: (0, i.clsx)(l.default.root, a),
                                ...s,
                                children: t,
                            });
                        };
                    },
                    7743: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0);
                        let n = a(4377),
                            i = a(5881),
                            o = a(810),
                            l = a(4721),
                            s = r(a(6951));
                        (t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: a, type: r = 'text', size: o = 's', className: d, children: c, weight: _ = 'medium', ...u } = e;
                            return (0, n.jsx)(l.Typography, {
                                variant: a,
                                ref: t,
                                className: (0, i.clsx)(s.default.root, s.default['root_'.concat(r, '_').concat(o)], s.default['root_weight_'.concat(_)], d),
                                ...u,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, o.forwardRef)((e, a) => (0, n.jsx)(t.CaptionComponent, { forwardRef: a, ...e })));
                    },
                    404: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0);
                        let n = a(4377),
                            i = a(5881),
                            o = a(810),
                            l = a(4721),
                            s = r(a(2223));
                        (t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: a, weight: r = 'bold', size: o = 's', className: d, children: c, ..._ } = e;
                            return (0, n.jsx)(l.Typography, {
                                variant: a,
                                ref: t,
                                className: (0, i.clsx)(s.default.root, s.default['root_size_'.concat(o)], s.default['root_weight_'.concat(r)], d),
                                ..._,
                                children: c,
                            });
                        }),
                            (t.Heading = (0, o.forwardRef)((e, a) => (0, n.jsx)(t.HeadingComponent, { forwardRef: a, ...e })));
                    },
                    4721: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0);
                        let n = a(4377),
                            i = a(5881),
                            o = a(810),
                            l = r(a(5882));
                        function s(e) {
                            let { forwardRef: t, style: a, className: r, children: o, variant: s, lineClamp: d, ...c } = e,
                                _ = d && 'string' == typeof o ? o : void 0;
                            return (0, n.jsx)(s, {
                                style: { ...a, WebkitLineClamp: d },
                                ref: t,
                                title: _,
                                className: (0, i.clsx)(
                                    l.default.root,
                                    { [l.default.root_clamp]: d && d > 0, [l.default.root_clamp_oneline]: d && 1 === d, [l.default.root_clamp_multiline]: d && d > 1 },
                                    r,
                                ),
                                ...c,
                                children: o,
                            });
                        }
                        (t.TypographyComponent = s), (t.Typography = (0, o.forwardRef)((e, t) => (0, n.jsx)(s, { forwardRef: t, ...e })));
                    },
                    2582: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0);
                        var r = a(7743);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return r.Caption;
                            },
                        });
                        var n = a(404);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return n.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = l;
                    },
                },
                g = {};
            function f(e) {
                var t = g[e];
                if (void 0 !== t) return t.exports;
                var a = (g[e] = { exports: {} });
                return u[e].call(a.exports, a, a.exports, f), a.exports;
            }
            (f.d = (e, t) => {
                for (var a in t) f.o(t, a) && !f.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (f.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (f.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var h = {};
            (() => {
                Object.defineProperty(h, '__esModule', { value: !0 }), (h.Label = void 0);
                var e = f(2);
                Object.defineProperty(h, 'Label', {
                    enumerable: !0,
                    get: function () {
                        return e.Label;
                    },
                });
            })();
            var p = h.Label;
            h.__esModule;
            var m = a(71926),
                x = a(71768),
                y = a(27246),
                v = a(24116),
                L = a(98740),
                b = a(15509),
                w = a(94218),
                T = a(23278),
                j = a.n(T),
                k = a(41898);
            let H = 'entity-header-block-controls',
                C = (0, i.PA)((e) => {
                    let {
                            'aria-labelledby': t,
                            entityName: a,
                            title: i,
                            meta: l,
                            controls: u,
                            className: g,
                            forwardRef: f,
                            canChangeTitle: h = !1,
                            maxTitleLength: x,
                            onTitleChange: y,
                            cover: v,
                            version: T,
                            onVersionClick: C,
                            disclaimerLabel: P,
                            entityNameIcon: N,
                            headingVariant: A,
                            titleClassName: E,
                            metaClassName: R,
                            contentClassName: B,
                            withHeadingClamp: D,
                            entityNameClassName: M,
                            logo: O,
                            coverCellClassName: I,
                            infoClassName: W,
                            linkTitle: z,
                            onTitleLinkClick: S,
                            showMobileLoginButton: U,
                            showMobileSubscriptionButton: F,
                        } = e,
                        [V, Y] = (0, c.d)(),
                        {
                            openPaymentWidgetModal: Z,
                            mainText: $,
                            mainTextA11y: K,
                            isShimmerActive: Q,
                            isShimmerVisible: G,
                            oneClickAvailable: J,
                            oneClickDisclaimerText: X,
                            oneClickDisclaimerTextA11y: q,
                        } = (0, L.D)({ storeName: 'music', isEnabled: !!F, offerElement: { element: V, intersectionPropertyId: H } }),
                        ee = (0, o.useMemo)(
                            () =>
                                P
                                    ? (0, r.jsx)('div', {
                                          className: j().entityContainer,
                                          children: (0, r.jsx)(p, {
                                              size: 'm',
                                              className: j().disclaimerLabel,
                                              'data-test-id': d.e8.pageHeader.DISCLAIMER_LABEL,
                                              children: P,
                                          }),
                                      })
                                    : (0, r.jsxs)(m.HL, {
                                          variant: 'div',
                                          type: 'text',
                                          size: 'm',
                                          weight: 'medium',
                                          className: (0, n.$)(j().entityName, M),
                                          'data-test-id': d.e8.pageHeader.ENTITY_NAME,
                                          children: [a, N],
                                      }),
                            [P, a, M, N],
                        );
                    return (0, r.jsxs)('div', {
                        className: (0, n.$)(
                            j().root,
                            { [j().root_withCover]: (0, o.isValidElement)(v), [j().root_withCoverAndLogo]: (0, o.isValidElement)(O) && (0, o.isValidElement)(v) },
                            g,
                        ),
                        ref: f,
                        'data-test-id': d.e8.pageHeader.ENTITY_HEADER,
                        children: [
                            v && (0, r.jsx)('div', { className: (0, n.$)(j().coverCell, I), children: v }),
                            (0, r.jsxs)('div', {
                                className: (0, n.$)(j().content, B),
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: (0, n.$)(j().info, W),
                                        children: [
                                            ee,
                                            (0, r.jsx)(k.R, {
                                                onTitleLinkClick: S,
                                                link: z,
                                                className: (0, n.$)(j().title, E, { [j().title_withDisclaimerLabel]: !!P }),
                                                title: i,
                                                'aria-labelledby': t,
                                                canChange: h,
                                                maxTitleLength: x,
                                                onChange: y,
                                                version: T,
                                                onVersionClick: C,
                                                headingVariant: A,
                                                withHeadingClamp: D,
                                            }),
                                            !!l && (0, r.jsx)('div', { className: (0, n.$)(j().meta, { [j().meta_withDisclaimerLabel]: !!P }, R), children: l }),
                                        ],
                                    }),
                                    (0, r.jsx)('div', { className: j().controls, 'data-test-id': d.e8.pageHeader.BASE_PAGE_HEADER_CONTROLS, children: u }),
                                    U &&
                                        (0, r.jsxs)('div', {
                                            className: j().buttonContainer,
                                            children: [
                                                (0, r.jsx)(w.H, {
                                                    size: 'l',
                                                    variant: 'default',
                                                    buttonText: (0, r.jsx)(s.A, { id: 'authorization.enter-and-listen-button' }),
                                                    className: j().loginButton,
                                                    'data-test-id': d.e8.pageHeader.UNAUTHORIZED_BUTTON,
                                                }),
                                                (0, r.jsxs)(m.HL, {
                                                    variant: 'div',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: j().bonusText,
                                                    children: [
                                                        (0, r.jsx)(_.I, { variant: 'gift', size: 'xxs', className: j().giftIcon }),
                                                        (0, r.jsx)(s.A, { id: 'payment.learn-personal-bonus' }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    F &&
                                        (0, r.jsxs)('div', {
                                            className: j().buttonContainer,
                                            children: [
                                                (0, r.jsx)(b.b, {
                                                    mainText: $,
                                                    ariaLabel: K,
                                                    mainTextFontSize: 'm',
                                                    ref: Y,
                                                    onClick: Z,
                                                    isShimmerActive: Q,
                                                    isShimmerVisible: G,
                                                    color: 'primary',
                                                    className: j().button,
                                                    'data-intersection-property-id': H,
                                                    'data-test-id': d.e8.pageHeader.FREEMIUM_BUTTON,
                                                }),
                                                J &&
                                                    (0, r.jsx)(m.HL, {
                                                        variant: 'div',
                                                        size: 's',
                                                        weight: 'normal',
                                                        'aria-label': q,
                                                        className: j().oneClickDisclaimerText,
                                                        'data-test-id': d.e8.pageHeader.DISCLAIMER_TEXT,
                                                        children: X,
                                                    }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, o.isValidElement)(O) && (0, r.jsx)('div', { className: j().logo, children: O }),
                        ],
                    });
                }),
                P = (0, o.forwardRef)((e, t) =>
                    (0, r.jsx)(x.r, { page: y.l.ENTITY_HEADER, places: [v.R.BOTTOM_BUTTON], children: (0, r.jsx)(C, { forwardRef: t, ...e }) }),
                );
        },
        73422: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => _ });
            var r = a(91945),
                n = a(14190),
                i = a(84570),
                o = a(40363);
            let l = (e) => o.U.parseAcceptLanguage(null != e ? e : void 0);
            var s = a(18870);
            let d = (e) => {
                var t;
                return null != (t = { ru: s.$.RU, en: s.$.EN, uz: s.$.UZ, kk: s.$.KK }[e]) ? t : s.$.RU;
            };
            var c = a(64552);
            class _ {
                static getDefaultLocale() {
                    return new Intl.Locale(n.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = _.getDefaultLocale().region;
                    }
                    return new Intl.Locale(this.language, { region: e });
                }
                getDefaultLanguage() {
                    return d((0, i.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return d((0, i.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, a, r;
                    let n = (0, i.k)(this.config, e);
                    n !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (a = this.storage) || a.set(n), null == (r = this.changeLanguageHandler) || r.onChangeLanguage(n));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => d((0, i.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, i.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, c.M)(e);
                    } catch (t) {
                        t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {});
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: a, changeLanguageHandler: s, logger: d }) {
                    let c;
                    if (
                        ((0, r._)(this, 'language', void 0),
                        (0, r._)(this, 'storage', void 0),
                        (0, r._)(this, 'dictionary', void 0),
                        (0, r._)(this, 'config', void 0),
                        (0, r._)(this, 'logger', void 0),
                        (0, r._)(this, 'changeLanguageHandler', void 0),
                        (0, r._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = a),
                        (this.logger = d),
                        (this.changeLanguageHandler = s),
                        (this.serverDetectedLocale = e),
                        (this.config = n.pE[n.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var _;
                            let e;
                            c = ((e = this.config), new o.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (_ = this.storage) ? void 0 : _.get()) || void 0,
                                acceptLangs: l(navigator.languages.join()),
                            });
                        }
                    } else [c] = l(e) || [];
                    this.language = (0, i.k)(this.config, c);
                }
            }
        },
        84570: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => r });
            let r = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        87863: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => r });
            let r = (e) => ({ controlSize: e ? 'l' : 's', iconSize: e ? 'm' : 'xxs' });
        },
        94821: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => r });
            var r = (function (e) {
                return (e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e;
            })({});
        },
        96746: (e) => {
            e.exports = {
                root: 'PageHeaderTitle_root__ESu2q',
                editButton: 'PageHeaderTitle_editButton__KF4eh',
                editButton_centered: 'PageHeaderTitle_editButton_centered__W9EwU',
                textField: 'PageHeaderTitle_textField__LXJ3X',
                textField_long: 'PageHeaderTitle_textField_long__ReeJz',
                title: 'PageHeaderTitle_title__caKyB',
                version: 'PageHeaderTitle_version__g5BeO',
                version_withOtherVersions: 'PageHeaderTitle_version_withOtherVersions__Amfwk',
                heading: 'PageHeaderTitle_heading__UADXi',
                heading_withVersion: 'PageHeaderTitle_heading_withVersion__jw12r',
                textFieldContainer: 'PageHeaderTitle_textFieldContainer__FSD_B',
                font_long: 'PageHeaderTitle_font_long__q9Leq',
                font_short: 'PageHeaderTitle_font_short__76VRG',
                font_mobile: 'PageHeaderTitle_font_mobile__M1__v',
                stickyTitle: 'PageHeaderTitle_stickyTitle__CL1m4',
                titleWithLinkIcon: 'PageHeaderTitle_titleWithLinkIcon__mBP_B',
                titleWithLink: 'PageHeaderTitle_titleWithLink__pJZN5',
                linkContainer: 'PageHeaderTitle_linkContainer__KUyIF',
                linkText: 'PageHeaderTitle_linkText__rSUmw',
                arrowWrapper: 'PageHeaderTitle_arrowWrapper__cadS3',
                arrowWrapper_long: 'PageHeaderTitle_arrowWrapper_long__xhAjB',
                arrowWrapper_short: 'PageHeaderTitle_arrowWrapper_short__45ema',
                arrowWrapper_mobile: 'PageHeaderTitle_arrowWrapper_mobile__iYnjq',
            };
        },
    },
]);
