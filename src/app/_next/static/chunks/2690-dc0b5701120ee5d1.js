(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2690],
    {
        324: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => n });
            var r = a(28166);
            function n(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(r.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        2218: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => o });
            var r = a(28166),
                n = a(77863);
            let i = '@yandexmusic';
            function o(e) {
                return e.cardType === n.W.SUMMARY_LARGE_IMAGE
                    ? { card: n.W.SUMMARY_LARGE_IMAGE, site: i, title: e.title, description: e.description }
                    : {
                          card: n.W.APP,
                          site: i,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(r.Lz, '/').concat(e.url) } },
                      };
            }
        },
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
            ((n.keys = () => Object.keys(r)), (n.id = 12526), (e.exports = n));
        },
        19049: (e, t, a) => {
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
        21424: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => r });
            let r = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        30144: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => f });
            var r = a(53548),
                n = a(58390),
                i = a(51611),
                o = a(65523);
            let l = {
                other: {
                    'apple-mobile-web-app-capable': 'yes',
                    'apple-mobile-web-app-status-bar-style': 'black',
                    'apple-mobile-web-app-title': 'Яндекс Музыка',
                    robots: 'noyaca',
                },
            };
            var s = a(46511);
            async function d() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fullUrl: null, locale: null, url: null, tld: 'net', host: 'music.yandex.ru' },
                    t = await (0, s.W)(e.locale);
                return {
                    ...l,
                    title: t({ id: 'metadata.yandex-music-default-title' }),
                    description: t({ id: 'metadata.yandex-music-default-description' }),
                    alternates: { canonical: e.canonical },
                };
            }
            var c = a(88349),
                u = a(91241);
            let _ = (e, t) => {
                    let a = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (a) return a;
                    let r = window.document.createElement('meta');
                    return (r.setAttribute(e, t), r);
                },
                g = (e) => {
                    let { title: t, description: a, openGraph: r } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof a)) {
                        let e = _('name', 'description');
                        (e.setAttribute('content', a), window.document.head.appendChild(e));
                    }
                    let n = '';
                    if (r) {
                        let e = 'string' == typeof r.title ? r.title : '',
                            t = 'string' == typeof r.description ? r.description : '',
                            a = Array.isArray(r.images) ? r.images[0] : null;
                        n = a && 'object' == typeof a && 'url' in a ? String(a.url) : '';
                        let i = _('property', 'og:title'),
                            o = _('property', 'og:description'),
                            l = _('property', 'og:image');
                        (i.setAttribute('content', e),
                            o.setAttribute('content', t),
                            l.setAttribute('content', n),
                            window.document.head.appendChild(i),
                            window.document.head.appendChild(o),
                            window.document.head.appendChild(l));
                    }
                },
                f = (e) => {
                    let { language: t } = (0, i.h)(),
                        a = (0, o.U)(),
                        l = (0, n.usePathname)(),
                        s = (0, n.useSearchParams)().toString();
                    (0, r.useEffect)(() => {
                        if (!e) return;
                        let r = !0,
                            n = ((e, t) => ({ fullUrl: e.href, locale: new Intl.Locale(t), url: e.pathname, tld: (0, c.f)(e.host) || u.l, host: e.host }))(
                                window.location,
                                t,
                            ),
                            i = window.location.pathname + window.location.search,
                            o = () => r && i === window.location.pathname + window.location.search;
                        return (
                            (async () => {
                                try {
                                    let t = await e(n);
                                    if (!o() || !t) return;
                                    let a = 'string' == typeof t.title && t.title.trim() ? t.title : (await d(n)).title;
                                    o() && g({ ...t, title: a });
                                } catch (e) {
                                    if (!o()) return;
                                    a.error('[ClientMetadata] Failed to update metadata', { error: e });
                                    try {
                                        let e = await d(n);
                                        o() && g(e);
                                    } catch (e) {
                                        o() && a.error('[ClientMetadata] Failed to load fallback metadata', { error: e });
                                    }
                                }
                            })(),
                            () => {
                                r = !1;
                            }
                        );
                    }, [e, t, a, l, s]);
                };
        },
        33169: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => b });
            // for PulseSync WebHost: BEGIN imports for native addon header title items
            var pulseSyncHeaderReact = a(53548),
                pulseSyncHeaderJsx = a(88800),
                pulseSyncHeaderText = a(29504),
                pulseSyncHeaderIcon = a(52300);

            // for PulseSync WebHost: END imports for native addon header title items
            var r = a(88800),
                n = a(65724),
                i = a(84961),
                o = a(53548),
                l = a(2058),
                s = a(17392),
                d = a(29993),
                c = a(79070),
                u = a(96817),
                _ = a(52300),
                g = a(29504),
                f = a(63807);
            let p = (e) => {
                let { children: t, title: a, className: n } = e,
                    { setTitleElement: i, setTitle: l } = (0, o.useContext)(f.B),
                    s = (0, o.useRef)(null);
                return (
                    (0, o.useEffect)(() => {
                        ((null == s ? void 0 : s.current) && i(s), a && l(a));
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
            var h = a(78940),
                m = a(72288),
                x = a(91292),
                y = a(59378),
                v = a(48100),
                w = a.n(v);
            let b = (0, i.PA)((e) => {
                // for PulseSync WebHost: BEGIN refresh header titles when native addon slots change
                let [, pulseSyncSetHeaderSlotRevision] = (0, pulseSyncHeaderReact.useState)(0);
                (0, pulseSyncHeaderReact.useEffect)(() => {
                    const onNativeSlotChange = (e) => {
                        if (e.detail === 'headerTitleItems') pulseSyncSetHeaderSlotRevision((e) => e + 1);
                    };
                    document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                }, []);

                // for PulseSync WebHost: END refresh header titles when native addon slots change
                let {
                        title: t = '',
                        'aria-labelledby': a,
                        canChange: i = !1,
                        onChange: f,
                        maxTitleLength: v,
                        version: b = '',
                        onVersionClick: L,
                        className: T,
                        headingVariant: k = 'h2',
                        withHeadingClamp: j = !0,
                        link: C,
                        onTitleLinkClick: H,
                    } = e,
                    {
                        settings: { isMobile: P },
                    } = (0, m.g)(),
                    { formatMessage: N } = (0, l.A)(),
                    [A, E] = (0, o.useState)(!1),
                    M = (0, o.useRef)(null),
                    R = t.length + b.length > 25,
                    B = (0, h.Z)(null != C ? C : ''),
                    D = (0, d.c)((e) => {
                        (null == H || H(), B(e));
                    }),
                    O = (0, o.useMemo)(
                        () =>
                            P
                                ? { font: w().font_mobile, iconLink: w().arrowWrapper_mobile }
                                : R
                                  ? { font: w().font_long, iconLink: w().arrowWrapper_long }
                                  : { font: w().font_short, iconLink: w().arrowWrapper_short },
                        [P, R],
                    ),
                    I = !P && i && A,
                    W = (0, o.useCallback)(() => {
                        var e;
                        (E(!0), null == (e = M.current) || e.focus());
                    }, []),
                    z = (0, o.useCallback)(
                        (e) => {
                            (E(!1), null == f || f(e));
                        },
                        [f],
                    ),
                    S = (0, c.L)(() =>
                        (0, r.jsx)('span', {
                            className: (0, n.$)(w().arrowWrapper, O.iconLink),
                            children: (0, r.jsx)(_.I, { className: w().titleWithLinkIcon, size: 'xs', variant: 'arrowRight' }),
                        }),
                    ),
                    U = (0, c.L)(() =>
                        (0, r.jsxs)(g.DZ, {
                            variant: k,
                            id: a,
                            lineClamp: P && j ? 2 : void 0,
                            className: (0, n.$)(w().heading, { [w().heading_withVersion]: b }),
                            'data-test-id': s.e8.pageHeader.ENTITY_TITLE,
                            children: [
                                (0, r.jsx)(g.HL, { className: (0, n.$)(w().font, O.font, w().title), variant: 'span', children: t }),
                                b &&
                                    (0, r.jsx)(g.HL, {
                                        onClick: L,
                                        className: (0, n.$)(w().font, O.font, w().version, { [w().version_withOtherVersions]: L }),
                                        variant: 'span',
                                        'data-test-id': s.e8.pageHeader.ENTITY_VERSION,
                                        children: ' '.concat(b),
                                    }),
                                C && !P && S,
                            ],
                        }),
                    ),
                    F = (0, c.L)(() =>
                        C
                            ? (0, r.jsxs)(x.N, {
                                  className: w().titleWithLink,
                                  containerClassName: w().linkContainer,
                                  textClassName: w().linkText,
                                  href: C,
                                  onClick: D,
                                  children: [U, P && S],
                              })
                            : U,
                    );
                // for PulseSync WebHost: BEGIN render native addon items beside header titles
                const pulseSyncInjectHeaderTitleItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('headerTitleItems', items, {
                        eventDetail: null,
                        renderItem: ({ key, payload, positionIndex }) => {
                            const text = String(payload?.text ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim(),
                                label = String(payload?.label ?? text).trim();
                            if (!text && !icon) return null;
                            return (0, pulseSyncHeaderJsx.jsxs)(
                                pulseSyncHeaderText.HL,
                                {
                                    variant: 'span',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    ...(label
                                        ? {
                                              'aria-label': label,
                                          }
                                        : {}),
                                    'data-pulsesync-addon-header-item': 'title',
                                    children: [
                                        icon &&
                                            (0, pulseSyncHeaderJsx.jsx)(pulseSyncHeaderIcon.I, {
                                                variant: icon,
                                                size: 'xxs',
                                            }),
                                        text,
                                    ],
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END render native addon items beside header titles
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        !I &&
                            (0, r.jsxs)('div', {
                                className: (0, n.$)(w().root, T),
                                // for PulseSync WebHost: BEGIN inject native addon items into the header title
                                children: pulseSyncInjectHeaderTitleItems([
                                    (0, r.jsx)(p, { title: t, className: w().stickyTitle, children: F }),
                                    i &&
                                        (0, r.jsx)('div', {
                                            className: (0, n.$)(w().editButton, { [w().editButton_centered]: !R && !P }),
                                            children: (0, r.jsx)(u.$, {
                                                onClick: W,
                                                'aria-label': N({ id: 'playlist-actions.change-title' }),
                                                icon: (0, r.jsx)(_.I, { size: 'xxs', variant: 'pencil' }),
                                                size: 's',
                                                radius: 'round',
                                                'data-test-id': s.e8.pageHeader.EDIT_TITLE_BUTTON,
                                            }),
                                        }),
                                ]),
                                // for PulseSync WebHost: END inject native addon items into the header title
                            }),
                        I &&
                            (0, r.jsx)('div', {
                                className: w().textFieldContainer,
                                children: (0, r.jsx)(y.A, {
                                    text: t,
                                    className: (0, n.$)(w().font, O.font, w().textField, w().title, { [w().textField_long]: R && !P }),
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
        45383: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => i });
            var r = a(67174);
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
                        { href: u } = (0, r.u)(s, d({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(n)) {
                        let { href: a } = (0, r.u)(s, d({ linkType: 'alternate', host: t, lang: e }));
                        c[e] = a;
                    }
                    return { canonical: u, languages: c };
                };
        },
        46511: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => c });
            var r = a(27794),
                n = a(53548),
                i = a(72542),
                o = a(83602),
                l = a(21424),
                s = a(95330);
            let d = (0, n.cache)(async (e) => (0, s.M)(e, s.X)),
                c = async (e) => {
                    let t = (e || o.E.getDefaultLocale()).language,
                        a = (0, l.k)(i.pE[i.cy], t),
                        n = await d(a);
                    return (e, t) => {
                        let i = null == n ? void 0 : n[e.id],
                            o = '';
                        return ((Array.isArray(i) || 'string' == typeof i) && (o = new r.S(i, a).format(t)), Array.isArray(o) ? o.join('') : o);
                    };
                };
        },
        46646: (e, t, a) => {
            var r = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
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
            ((n.keys = () => Object.keys(r)), (n.id = 46646), (e.exports = n));
        },
        48100: (e) => {
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
        57297: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => i });
            var r = a(35412),
                n = a(83602);
            function i(e) {
                let { ogTitle: t, ogDescription: a, fullUrl: i, locale: o, ogImage: l, siteName: s, ogType: d, customImage: c } = e,
                    u = l ? { url: (0, r.lU)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: a,
                    url: i,
                    ...(d && { type: d }),
                    siteName: s,
                    locale: (o || n.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || c,
                };
            }
        },
        61097: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => P });
            // for PulseSync WebHost: BEGIN imports for native addon header action buttons and tooltips
            var pulseSyncHeaderReact = a(53548),
                pulseSyncHeaderJsx = a(88800),
                pulseSyncHeaderText = a(29504),
                pulseSyncHeaderIcon = a(52300),
                pulseSyncHeaderButton = a(96817),
                pulseSyncHeaderTooltip = a(94398);

            // for PulseSync WebHost: END imports for native addon header action buttons and tooltips
            var r = a(88800),
                n = a(65724),
                i = a(84961),
                o = a(53548),
                l = a.t(o, 2),
                s = a(88969),
                d = a(17392),
                c = a(50408),
                u = a(52300),
                _ = {
                    5881: (e, t, a) => {
                        function r() {
                            for (var e, t, a = 0, r = ''; a < arguments.length;)
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
                        (a.r(t), a.d(t, { clsx: () => r, default: () => n }));
                        let n = r;
                    },
                    4353: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => r }));
                        let r = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    1246: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => r }));
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
                    2445: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => r }));
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
                    61: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => r }));
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
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    2018: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let n = a(4377),
                            i = a(5881),
                            o = a(8903),
                            l = r(a(4353));
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
                    3412: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let n = a(4377),
                            i = a(5881),
                            o = a(810),
                            l = a(5987),
                            s = r(a(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: a, type: r = 'text', size: o = 's', className: d, children: c, weight: u = 'medium', ..._ } = e;
                            return (0, n.jsx)(l.Typography, {
                                variant: a,
                                ref: t,
                                className: (0, i.clsx)(s.default.root, s.default['root_'.concat(r, '_').concat(o)], s.default['root_weight_'.concat(u)], d),
                                ..._,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, o.forwardRef)((e, a) => (0, n.jsx)(t.CaptionComponent, { forwardRef: a, ...e }))));
                    },
                    1641: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let n = a(4377),
                            i = a(5881),
                            o = a(810),
                            l = a(5987),
                            s = r(a(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: a, weight: r = 'bold', size: o = 's', className: d, children: c, ...u } = e;
                            return (0, n.jsx)(l.Typography, {
                                variant: a,
                                ref: t,
                                className: (0, i.clsx)(s.default.root, s.default['root_size_'.concat(o)], s.default['root_weight_'.concat(r)], d),
                                ...u,
                                children: c,
                            });
                        }),
                            (t.Heading = (0, o.forwardRef)((e, a) => (0, n.jsx)(t.HeadingComponent, { forwardRef: a, ...e }))));
                    },
                    5987: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let n = a(4377),
                            i = a(5881),
                            o = a(810),
                            l = r(a(61));
                        function s(e) {
                            let { forwardRef: t, style: a, className: r, children: o, variant: s, lineClamp: d, ...c } = e,
                                u = d && 'string' == typeof o ? o : void 0;
                            return (0, n.jsx)(s, {
                                style: { ...a, WebkitLineClamp: d },
                                ref: t,
                                title: u,
                                className: (0, i.clsx)(
                                    l.default.root,
                                    { [l.default.root_clamp]: d && d > 0, [l.default.root_clamp_oneline]: d && 1 === d, [l.default.root_clamp_multiline]: d && d > 1 },
                                    r,
                                ),
                                ...c,
                                children: o,
                            });
                        }
                        ((t.TypographyComponent = s), (t.Typography = (0, o.forwardRef)((e, t) => (0, n.jsx)(s, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var r = a(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return r.Caption;
                            },
                        });
                        var n = a(1641);
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
                return (_[e].call(a.exports, a, a.exports, f), a.exports);
            }
            ((f.d = (e, t) => {
                for (var a in t) f.o(t, a) && !f.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (f.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (f.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var p = {};
            (() => {
                (Object.defineProperty(p, '__esModule', { value: !0 }), (p.Label = void 0));
                var e = f(2018);
                Object.defineProperty(p, 'Label', {
                    enumerable: !0,
                    get: function () {
                        return e.Label;
                    },
                });
            })();
            var h = p.Label;
            p.__esModule;
            var m = a(29504),
                x = a(44450),
                y = a(26e3),
                v = a(40210),
                w = a(86462),
                b = a(91051),
                L = a(7628),
                T = a(85904),
                k = a.n(T),
                j = a(33169);
            let C = 'entity-header-block-controls',
                H = (0, i.PA)((e) => {
                    // for PulseSync WebHost: BEGIN refresh header action buttons when native addon slots change
                    let [, pulseSyncSetHeaderSlotRevision] = (0, pulseSyncHeaderReact.useState)(0);
                    (0, pulseSyncHeaderReact.useEffect)(() => {
                        const onNativeSlotChange = (e) => {
                            if (e.detail === 'headerActions') pulseSyncSetHeaderSlotRevision((e) => e + 1);
                        };
                        document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                        return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    }, []);

                    // for PulseSync WebHost: END refresh header action buttons when native addon slots change
                    let {
                            'aria-labelledby': t,
                            entityName: a,
                            title: i,
                            meta: l,
                            controls: _,
                            className: g,
                            forwardRef: f,
                            canChangeTitle: p = !1,
                            maxTitleLength: x,
                            onTitleChange: y,
                            cover: v,
                            version: T,
                            onVersionClick: H,
                            disclaimerLabel: P,
                            entityNameIcon: N,
                            headingVariant: A,
                            titleClassName: E,
                            metaClassName: M,
                            contentClassName: R,
                            withHeadingClamp: B,
                            entityNameClassName: D,
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
                        } = (0, w.D)({ storeName: 'music', isEnabled: !!F, offerElement: { element: V, intersectionPropertyId: C } }),
                        ee = (0, o.useMemo)(
                            () =>
                                P
                                    ? (0, r.jsx)('div', {
                                          className: k().entityContainer,
                                          children: (0, r.jsx)(h, {
                                              size: 'm',
                                              className: k().disclaimerLabel,
                                              'data-test-id': d.e8.pageHeader.DISCLAIMER_LABEL,
                                              children: P,
                                          }),
                                      })
                                    : (0, r.jsxs)(m.HL, {
                                          variant: 'div',
                                          type: 'text',
                                          size: 'm',
                                          weight: 'medium',
                                          className: (0, n.$)(k().entityName, D),
                                          'data-test-id': d.e8.pageHeader.ENTITY_NAME,
                                          children: [a, N],
                                      }),
                            [P, a, D, N],
                        );
                    // for PulseSync WebHost: BEGIN render native addon header action buttons
                    const pulseSyncInjectHeaderActionsItems = (items) =>
                        window.pulsesyncApi?.injectNativeSlotItems?.('headerActions', items, {
                            eventDetail: null,
                            renderItem: ({ key, payload, activate }) => {
                                const label = String(payload?.label ?? '').trim(),
                                    description = String(payload?.description ?? '').trim(),
                                    icon = String(payload?.icon ?? '').trim();
                                if (!label || !icon) return null;
                                return (0, pulseSyncHeaderJsx.jsx)(
                                    pulseSyncHeaderTooltip.k,
                                    {
                                        title: label,
                                        ...(description
                                            ? {
                                                  description,
                                              }
                                            : {}),
                                        children: (0, pulseSyncHeaderJsx.jsx)(pulseSyncHeaderButton.$, {
                                            radius: 'round',
                                            size: 'xs',
                                            variant: 'text',
                                            withRipple: !1,
                                            'aria-label': label,
                                            icon: (0, pulseSyncHeaderJsx.jsx)(pulseSyncHeaderIcon.I, {
                                                variant: icon,
                                                size: 'xxs',
                                            }),
                                            onClick: activate,
                                            'data-pulsesync-addon-header-action': '',
                                        }),
                                    },
                                    key,
                                );
                            },
                        }) ?? items;
                    // for PulseSync WebHost: END render native addon header action buttons
                    return (0, r.jsxs)('div', {
                        className: (0, n.$)(
                            k().root,
                            { [k().root_withCover]: (0, o.isValidElement)(v), [k().root_withCoverAndLogo]: (0, o.isValidElement)(O) && (0, o.isValidElement)(v) },
                            g,
                        ),
                        ref: f,
                        'data-test-id': d.e8.pageHeader.ENTITY_HEADER,
                        children: [
                            v && (0, r.jsx)('div', { className: (0, n.$)(k().coverCell, I), children: v }),
                            (0, r.jsxs)('div', {
                                className: (0, n.$)(k().content, R),
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: (0, n.$)(k().info, W),
                                        children: [
                                            ee,
                                            (0, r.jsx)(j.R, {
                                                onTitleLinkClick: S,
                                                link: z,
                                                className: (0, n.$)(k().title, E, { [k().title_withDisclaimerLabel]: !!P }),
                                                title: i,
                                                'aria-labelledby': t,
                                                canChange: p,
                                                maxTitleLength: x,
                                                onChange: y,
                                                version: T,
                                                onVersionClick: H,
                                                headingVariant: A,
                                                withHeadingClamp: B,
                                            }),
                                            !!l && (0, r.jsx)('div', { className: (0, n.$)(k().meta, { [k().meta_withDisclaimerLabel]: !!P }, M), children: l }),
                                        ],
                                    }),
                                    // for PulseSync WebHost: BEGIN inject native addon items into the header action group
                                    (0, r.jsx)('div', {
                                        className: k().controls,
                                        'data-test-id': d.e8.pageHeader.BASE_PAGE_HEADER_CONTROLS,
                                        children: pulseSyncInjectHeaderActionsItems(Array.isArray(_) ? _ : [_]),
                                    }),
                                    // for PulseSync WebHost: END inject native addon items into the header action group
                                    U &&
                                        (0, r.jsxs)('div', {
                                            className: k().buttonContainer,
                                            children: [
                                                (0, r.jsx)(L.H, {
                                                    size: 'l',
                                                    variant: 'default',
                                                    buttonText: (0, r.jsx)(s.A, { id: 'authorization.enter-and-listen-button' }),
                                                    className: k().loginButton,
                                                    'data-test-id': d.e8.pageHeader.UNAUTHORIZED_BUTTON,
                                                }),
                                                (0, r.jsxs)(m.HL, {
                                                    variant: 'div',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: k().bonusText,
                                                    children: [
                                                        (0, r.jsx)(u.I, { variant: 'gift', size: 'xxs', className: k().giftIcon }),
                                                        (0, r.jsx)(s.A, { id: 'payment.learn-personal-bonus' }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    F &&
                                        (0, r.jsxs)('div', {
                                            className: k().buttonContainer,
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
                                                    className: k().button,
                                                    'data-intersection-property-id': C,
                                                    'data-test-id': d.e8.pageHeader.FREEMIUM_BUTTON,
                                                }),
                                                J &&
                                                    (0, r.jsx)(m.HL, {
                                                        variant: 'div',
                                                        size: 's',
                                                        weight: 'normal',
                                                        'aria-label': q,
                                                        className: k().oneClickDisclaimerText,
                                                        'data-test-id': d.e8.pageHeader.DISCLAIMER_TEXT,
                                                        children: X,
                                                    }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, o.isValidElement)(O) && (0, r.jsx)('div', { className: k().logo, children: O }),
                        ],
                    });
                }),
                P = (0, o.forwardRef)((e, t) =>
                    (0, r.jsx)(x.r, { page: y.l.ENTITY_HEADER, places: [v.R.BOTTOM_BUTTON], children: (0, r.jsx)(H, { forwardRef: t, ...e }) }),
                );
        },
        72542: (e, t, a) => {
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
        77863: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => r });
            var r = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        83602: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => u });
            var r = a(9519),
                n = a(72542),
                i = a(21424),
                o = a(4653);
            let l = (e) => o.U.parseAcceptLanguage(null != e ? e : void 0);
            var s = a(1220);
            let d = (e) => {
                var t;
                return null != (t = { ru: s.$.RU, en: s.$.EN, uz: s.$.UZ, kk: s.$.KK }[e]) ? t : s.$.RU;
            };
            var c = a(95330);
            class u {
                static getDefaultLocale() {
                    return new Intl.Locale(n.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = u.getDefaultLocale().region;
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
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
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
                            var u;
                            let e;
                            c = ((e = this.config), new o.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (u = this.storage) ? void 0 : u.get()) || void 0,
                                acceptLangs: l(navigator.languages.join()),
                            });
                        }
                    } else [c] = l(e) || [];
                    this.language = (0, i.k)(this.config, c);
                }
            }
        },
        85904: (e) => {
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
        91241: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => r });
            let r = 'ru';
        },
        95330: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => d, X: () => s });
            var r = a(39499),
                n = a(72542);
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
        99409: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => r });
            let r = (e) => ({ controlSize: e ? 'l' : 's', iconSize: e ? 'm' : 'xxs' });
        },
    },
]);
