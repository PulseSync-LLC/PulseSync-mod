(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2127],
    {
        22127: (e, t, r) => {
            'use strict';
            r.d(t, { ny: () => k, Fv: () => x, YS: () => B });
            var s,
                n = r(60754),
                a = r(95428);
            let i = n.gK.model({
                    uid: n.gK.maybe(n.gK.number),
                    hasPlus: n.gK.maybe(n.gK.boolean),
                    login: n.gK.maybe(n.gK.string),
                    avatarId: n.gK.maybe(n.gK.string),
                    isChild: n.gK.maybe(n.gK.boolean),
                    publicId: n.gK.maybe(n.gK.string),
                    publicName: n.gK.maybe(n.gK.string),
                    userSessionRegionIso: n.gK.maybe(n.gK.string),
                    geoRegionIso: n.gK.maybe(n.gK.string),
                    serviceAvailable: n.gK.maybe(n.gK.boolean),
                    options: n.gK.maybe(n.gK.array(n.gK.string)),
                }),
                l = n.gK.compose(n.gK.model('Account', { data: i }), a.XT);
            !(function (e) {
                (e.ALICE_PRO = 'alice-pro'), (e.KIDS = 'kids'), (e.BOOKMATE = 'bookmate'), (e.LUMEN = 'lumen');
            })(s || (s = {}));
            var o = r(49574),
                c = r(2047);
            let f = (e) => {
                    var t, r;
                    return (0, n.wg)({
                        loadingState: o.GuX.RESOLVE,
                        showWizard: !e.wizardIsPassed,
                        userCollectionHue: e.userCollectionHue,
                        isChildModeEnabled: !!e.childModEnabled,
                        userMusicVisibility: null != (r = null == (t = e.userMusicVisibility) ? void 0 : t.toLowerCase()) ? r : c.L.PUBLIC,
                    });
                },
                u = n.gK.compose(
                    n.gK.model('Settings', {
                        showWizard: n.gK.optional(n.gK.boolean, !0),
                        userCollectionHue: n.gK.maybe(n.gK.number),
                        isChildModeEnabled: n.gK.optional(n.gK.boolean, !1),
                        userMusicVisibility: n.gK.optional(n.gK.string, c.L.PUBLIC),
                    }),
                    a.XT,
                ),
                x = n.gK
                    .model('User', { account: l, settings: u, userCollectionHue: n.gK.maybe(n.gK.number) })
                    .views((e) => ({
                        get isAuthorized() {
                            return !!e.account.data.uid;
                        },
                        get hasPlus() {
                            return !!e.account.data.hasPlus;
                        },
                        get isChild() {
                            return !!e.account.data.isChild;
                        },
                        get puid() {
                            return e.account.data.uid;
                        },
                        get collectionHue() {
                            return e.userCollectionHue || e.settings.userCollectionHue;
                        },
                        get isServiceAvailable() {
                            var t;
                            return null == (t = e.account.data.serviceAvailable) || t;
                        },
                        get isAliceProAvailable() {
                            var r;
                            return null == (r = e.account.data.options) ? void 0 : r.includes(s.ALICE_PRO);
                        },
                        get isLumenAvailable() {
                            var n;
                            return null == (n = e.account.data.options) ? void 0 : n.includes(s.LUMEN);
                        },
                        get advertRole() {
                            if (!this.isAuthorized) return o.Zxe.UNAUTHORIZED;
                            if (this.hasPlus) return o.Zxe.PLUS;
                            return o.Zxe.NON_PLUS;
                        },
                    }))
                    .actions((e) => ({
                        getAbout: (0, n.L3)(function* (t) {
                            let { accountResource: r, modelActionsLogger: s, containerStorage: a } = (0, n._$)(e);
                            if (!e.account.isLoading)
                                try {
                                    e.account.loadingState = o.GuX.PENDING;
                                    let s = t;
                                    s || (s = yield r.about()),
                                        a.set(o.cYZ.YmUid, s.uid),
                                        (e.account.data = ((e) => {
                                            let t = e.options ? e.options.filter((e) => 'string' == typeof e) : void 0;
                                            return (0, n.wg)({
                                                uid: e.uid,
                                                login: e.login,
                                                avatarId: e.avatarId,
                                                hasPlus: e.hasPlus,
                                                publicId: e.publicId,
                                                publicName: e.publicName,
                                                isChild: e.isChild,
                                                userSessionRegionIso: e.userSessionRegionIso,
                                                geoRegionIso: e.geoRegionIso,
                                                serviceAvailable: e.serviceAvailable,
                                                options: t,
                                            });
                                        })(s)),
                                        (e.account.loadingState = o.GuX.RESOLVE);
                                } catch (t) {
                                    s.error(t), (e.account.loadingState = o.GuX.REJECT);
                                }
                        }),
                        getSettings: (0, n.L3)(function* () {
                            let { accountResource: t, modelActionsLogger: r } = (0, n._$)(e);
                            if (e.settings.loadingState !== o.GuX.PENDING)
                                try {
                                    e.settings.loadingState = o.GuX.PENDING;
                                    let r = yield t.settings();
                                    e.settings = f(r);
                                } catch (t) {
                                    r.error(t), (e.settings.showWizard = !1), (e.settings.loadingState = o.GuX.REJECT);
                                }
                        }),
                        setSettings: (0, n.L3)(function* (t) {
                            let { isChildModeEnabled: r, userMusicVisibility: s } = t,
                                { accountResource: a, modelActionsLogger: i } = (0, n._$)(e);
                            try {
                                let t = {};
                                'boolean' == typeof r && ((t.childModEnabled = r), (e.settings.isChildModeEnabled = r)),
                                    s && ((t.userMusicVisibility = s), (e.settings.userMusicVisibility = s));
                                let n = yield a.settings(t);
                                if (((e.settings = f(n)), n.childModEnabled !== r)) return o.FlZ.ERROR;
                                return o.FlZ.OK;
                            } catch (e) {
                                return i.error(e), o.FlZ.ERROR;
                            }
                        }),
                        setUnauthorized: () => {
                            e.account.loadingState = o.GuX.RESOLVE;
                        },
                        setUserCollectionHue: (t) => {
                            e.userCollectionHue = t;
                        },
                    }));
            var d = r(32290),
                _ = r(63618),
                g = r(50162);
            let p = { src: '/_next/static/media/avatar.e9a40453.png' };
            var v = r(64238),
                m = r.n(v);
            let k = (e) => {
                let { className: t, hasPlus: r, avatarSrc: s = p.src, ...n } = e;
                return (0, d.jsx)('div', {
                    className: (0, _.$)(m().root, { [m().root_withPlus]: r }, t),
                    ...n,
                    children: (0, d.jsx)(g.Image, { src: s, fit: 'cover', className: m().avatar }),
                });
            };
            var E = r(19246),
                y = r(96103),
                b = r(55178),
                w = r.t(b, 2),
                R = r(39407),
                O = r(82736),
                j = r(59824),
                H = r(91027),
                h = {
                    5881: (e, t, r) => {
                        function s() {
                            for (var e, t, r = 0, s = ''; r < arguments.length; )
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            s,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (s = e(t[r])) && (n && (n += ' '), (n += s));
                                            else for (r in t) t[r] && (n && (n += ' '), (n += r));
                                        return n;
                                    })(e)) &&
                                    (s && (s += ' '), (s += t));
                            return s;
                        }
                        r.r(t), r.d(t, { clsx: () => s, default: () => n });
                        let n = s;
                    },
                    123: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = {
                            root_size_xxxs: 'Rkdd2vKC_3xa1eUdRdHP',
                            root_size_xxs: 'l3tE1hAMmBj2aoPPwU08',
                            root_size_xs: 'UwnL5AJBMMAp6NwMDdZk',
                            root_size_s: 'DzJFnuf7XgdkFh28JAsM',
                            root_size_m: 'o_v2ds2BaqtzAsRuCVjw',
                            root_size_l: 'YjRa1ZjM_lXFlrfS7jcu',
                            root_size_xl: 'Seq0GowcqQmiA9LdLP_g',
                            root_size_xxl: 'mfy69_BvBIamD0e22rCQ',
                            root_size_xxxl: 'JY1OniQewgW9iHgfllZS',
                        };
                    },
                    8712: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = { root: 'mdbxU6IWInQTsVjwnapn', text: 'Cl_DNqTqaeGRXa9FZpOO', icon: 'WMUZ6rmDKcZuPFMkQwf6' };
                    },
                    6951: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = {
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
                    2223: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = {
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
                    5882: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function s(e, t, s) {
                            var n = null;
                            if ((void 0 !== s && (n = '' + s), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var a in ((s = {}), t)) 'key' !== a && (s[a] = t[a]);
                            else s = t;
                            return { $$typeof: r, type: e, key: n, ref: void 0 !== (t = s.ref) ? t : null, props: s };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = s), (t.jsxs = s);
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    8442: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'addToPlaylist_xxs', xlinkHref: '/icons/sprite.svg#addToPlaylist_xxs' }),
                            ]);
                        });
                    },
                    6644: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'add_l', xlinkHref: '/icons/sprite.svg#add_l' }),
                            ]);
                        });
                    },
                    7319: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'add_xxs', xlinkHref: '/icons/sprite.svg#add_xxs' }),
                            ]);
                        });
                    },
                    9351: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'adult_s', xlinkHref: '/icons/sprite.svg#adult_s' }),
                            ]);
                        });
                    },
                    7171: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'adult_xs', xlinkHref: '/icons/sprite.svg#adult_xs' }),
                            ]);
                        });
                    },
                    2586: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'adult_xxs', xlinkHref: '/icons/sprite.svg#adult_xxs' }),
                            ]);
                        });
                    },
                    4656: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'adult_xxxs', xlinkHref: '/icons/sprite.svg#adult_xxxs' }),
                            ]);
                        });
                    },
                    996: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'album_l', xlinkHref: '/icons/sprite.svg#album_l' }),
                            ]);
                        });
                    },
                    2092: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'album_s', xlinkHref: '/icons/sprite.svg#album_s' }),
                            ]);
                        });
                    },
                    6304: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'album_xl', xlinkHref: '/icons/sprite.svg#album_xl' }),
                            ]);
                        });
                    },
                    9030: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'album_xs', xlinkHref: '/icons/sprite.svg#album_xs' }),
                            ]);
                        });
                    },
                    5822: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'album_xxs', xlinkHref: '/icons/sprite.svg#album_xxs' }),
                            ]);
                        });
                    },
                    9422: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowDown_xs', xlinkHref: '/icons/sprite.svg#arrowDown_xs' }),
                            ]);
                        });
                    },
                    5272: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowDown_xxs', xlinkHref: '/icons/sprite.svg#arrowDown_xxs' }),
                            ]);
                        });
                    },
                    1954: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowDown_xxxs', xlinkHref: '/icons/sprite.svg#arrowDown_xxxs' }),
                            ]);
                        });
                    },
                    1491: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowLeft_xs', xlinkHref: '/icons/sprite.svg#arrowLeft_xs' }),
                            ]);
                        });
                    },
                    4860: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowLeft_xxs', xlinkHref: '/icons/sprite.svg#arrowLeft_xxs' }),
                            ]);
                        });
                    },
                    2337: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowRight_xs', xlinkHref: '/icons/sprite.svg#arrowRight_xs' }),
                            ]);
                        });
                    },
                    8711: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowRight_xxs', xlinkHref: '/icons/sprite.svg#arrowRight_xxs' }),
                            ]);
                        });
                    },
                    8170: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowRight_xxxs', xlinkHref: '/icons/sprite.svg#arrowRight_xxxs' }),
                            ]);
                        });
                    },
                    8109: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'artist_xxs', xlinkHref: '/icons/sprite.svg#artist_xxs' }),
                            ]);
                        });
                    },
                    7341: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'attention_xxl', xlinkHref: '/icons/sprite.svg#attention_xxl' }),
                            ]);
                        });
                    },
                    2435: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'attention_xxxl', xlinkHref: '/icons/sprite.svg#attention_xxxl' }),
                            ]);
                        });
                    },
                    3918: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'bandlink', xlinkHref: '/icons/sprite.svg#bandlink' }),
                            ]);
                        });
                    },
                    4904: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'bucket_xxs', xlinkHref: '/icons/sprite.svg#bucket_xxs' }),
                            ]);
                        });
                    },
                    9202: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'cast_xs', xlinkHref: '/icons/sprite.svg#cast_xs' }),
                            ]);
                        });
                    },
                    130: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chain_xs', xlinkHref: '/icons/sprite.svg#chain_xs' }),
                            ]);
                        });
                    },
                    5971: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chain_xxs', xlinkHref: '/icons/sprite.svg#chain_xxs' }),
                            ]);
                        });
                    },
                    3331: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chartDown_xxs', xlinkHref: '/icons/sprite.svg#chartDown_xxs' }),
                            ]);
                        });
                    },
                    9783: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chartNew_xxs', xlinkHref: '/icons/sprite.svg#chartNew_xxs' }),
                            ]);
                        });
                    },
                    8184: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chartSame_xxs', xlinkHref: '/icons/sprite.svg#chartSame_xxs' }),
                            ]);
                        });
                    },
                    4926: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chartUp_xxs', xlinkHref: '/icons/sprite.svg#chartUp_xxs' }),
                            ]);
                        });
                    },
                    5861: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'check_xs', xlinkHref: '/icons/sprite.svg#check_xs' }),
                            ]);
                        });
                    },
                    9505: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'check_xxl', xlinkHref: '/icons/sprite.svg#check_xxl' }),
                            ]);
                        });
                    },
                    3176: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'check_xxs', xlinkHref: '/icons/sprite.svg#check_xxs' }),
                            ]);
                        });
                    },
                    5565: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'check_xxxs', xlinkHref: '/icons/sprite.svg#check_xxxs' }),
                            ]);
                        });
                    },
                    9040: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'clip_xl', xlinkHref: '/icons/sprite.svg#clip_xl' }),
                            ]);
                        });
                    },
                    4789: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'clip_xxs', xlinkHref: '/icons/sprite.svg#clip_xxs' }),
                            ]);
                        });
                    },
                    4170: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'close_filled_xs', xlinkHref: '/icons/sprite.svg#close_filled_xs' }),
                            ]);
                        });
                    },
                    7923: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'close_xs', xlinkHref: '/icons/sprite.svg#close_xs' }),
                            ]);
                        });
                    },
                    8151: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'close_xxs', xlinkHref: '/icons/sprite.svg#close_xxs' }),
                            ]);
                        });
                    },
                    8127: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'close_xxxs', xlinkHref: '/icons/sprite.svg#close_xxxs' }),
                            ]);
                        });
                    },
                    8690: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'code_xxs', xlinkHref: '/icons/sprite.svg#code_xxs' }),
                            ]);
                        });
                    },
                    3076: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'collections_m', xlinkHref: '/icons/sprite.svg#collections_m' }),
                            ]);
                        });
                    },
                    2495: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'collections_selected_m', xlinkHref: '/icons/sprite.svg#collections_selected_m' }),
                            ]);
                        });
                    },
                    1524: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'crown_xxs', xlinkHref: '/icons/sprite.svg#crown_xxs' }),
                            ]);
                        });
                    },
                    1162: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'dislike_s', xlinkHref: '/icons/sprite.svg#dislike_s' }),
                            ]);
                        });
                    },
                    3654: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'dislike_xs', xlinkHref: '/icons/sprite.svg#dislike_xs' }),
                            ]);
                        });
                    },
                    2361: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'dislike_xxs', xlinkHref: '/icons/sprite.svg#dislike_xxs' }),
                            ]);
                        });
                    },
                    6837: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'disliked_s', xlinkHref: '/icons/sprite.svg#disliked_s' }),
                            ]);
                        });
                    },
                    6507: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'disliked_xs', xlinkHref: '/icons/sprite.svg#disliked_xs' }),
                            ]);
                        });
                    },
                    3972: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'disliked_xxs', xlinkHref: '/icons/sprite.svg#disliked_xxs' }),
                            ]);
                        });
                    },
                    8993: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'donation_xxxs', xlinkHref: '/icons/sprite.svg#donation_xxxs' }),
                            ]);
                        });
                    },
                    7031: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'download_l', xlinkHref: '/icons/sprite.svg#download_l' }),
                            ]);
                        });
                    },
                    9330: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'download_xxs', xlinkHref: '/icons/sprite.svg#download_xxs' }),
                            ]);
                        });
                    },
                    7346: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'downloaded_xxs', xlinkHref: '/icons/sprite.svg#downloaded_xxs' }),
                            ]);
                        });
                    },
                    2604: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'dragDots_xxs', xlinkHref: '/icons/sprite.svg#dragDots_xxs' }),
                            ]);
                        });
                    },
                    6894: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'edit_xxs', xlinkHref: '/icons/sprite.svg#edit_xxs' }),
                            ]);
                        });
                    },
                    2024: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'exclamation_s', xlinkHref: '/icons/sprite.svg#exclamation_s' }),
                            ]);
                        });
                    },
                    3193: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'exclamation_xs', xlinkHref: '/icons/sprite.svg#exclamation_xs' }),
                            ]);
                        });
                    },
                    6391: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'exclamation_xxs', xlinkHref: '/icons/sprite.svg#exclamation_xxs' }),
                            ]);
                        });
                    },
                    2933: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'exclamation_xxxs', xlinkHref: '/icons/sprite.svg#exclamation_xxxs' }),
                            ]);
                        });
                    },
                    776: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'explicit_s', xlinkHref: '/icons/sprite.svg#explicit_s' }),
                            ]);
                        });
                    },
                    30: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'explicit_xs', xlinkHref: '/icons/sprite.svg#explicit_xs' }),
                            ]);
                        });
                    },
                    9369: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'explicit_xxs', xlinkHref: '/icons/sprite.svg#explicit_xxs' }),
                            ]);
                        });
                    },
                    1334: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'explicit_xxxs', xlinkHref: '/icons/sprite.svg#explicit_xxxs' }),
                            ]);
                        });
                    },
                    226: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'eye_crossed_xxs', xlinkHref: '/icons/sprite.svg#eye_crossed_xxs' }),
                            ]);
                        });
                    },
                    7802: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'filter_xs', xlinkHref: '/icons/sprite.svg#filter_xs' }),
                            ]);
                        });
                    },
                    8130: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'filter_xxs', xlinkHref: '/icons/sprite.svg#filter_xxs' }),
                            ]);
                        });
                    },
                    3738: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'fullscreen_xs', xlinkHref: '/icons/sprite.svg#fullscreen_xs' }),
                            ]);
                        });
                    },
                    1922: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'gift_xxs', xlinkHref: '/icons/sprite.svg#gift_xxs' }),
                            ]);
                        });
                    },
                    2161: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'googlePlay', xlinkHref: '/icons/sprite.svg#googlePlay' }),
                            ]);
                        });
                    },
                    9509: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'history_m', xlinkHref: '/icons/sprite.svg#history_m' }),
                            ]);
                        });
                    },
                    8987: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'home_m', xlinkHref: '/icons/sprite.svg#home_m' }),
                            ]);
                        });
                    },
                    190: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'home_selected_m', xlinkHref: '/icons/sprite.svg#home_selected_m' }),
                            ]);
                        });
                    },
                    5304: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'huaweiAppGallery', xlinkHref: '/icons/sprite.svg#huaweiAppGallery' }),
                            ]);
                        });
                    },
                    8196: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'infinity_xs', xlinkHref: '/icons/sprite.svg#infinity_xs' }),
                            ]);
                        });
                    },
                    5270: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'info_xxs', xlinkHref: '/icons/sprite.svg#info_xxs' }),
                            ]);
                        });
                    },
                    843: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'kids_m', xlinkHref: '/icons/sprite.svg#kids_m' }),
                            ]);
                        });
                    },
                    5122: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'kids_selected_m', xlinkHref: '/icons/sprite.svg#kids_selected_m' }),
                            ]);
                        });
                    },
                    2646: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'kinopoiskEn', xlinkHref: '/icons/sprite.svg#kinopoiskEn' }),
                            ]);
                        });
                    },
                    7500: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'kinopoiskRu', xlinkHref: '/icons/sprite.svg#kinopoiskRu' }),
                            ]);
                        });
                    },
                    3560: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'lightning_xxs', xlinkHref: '/icons/sprite.svg#lightning_xxs' }),
                            ]);
                        });
                    },
                    9838: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'likeVariant_xxs', xlinkHref: '/icons/sprite.svg#likeVariant_xxs' }),
                            ]);
                        });
                    },
                    4793: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'like_l', xlinkHref: '/icons/sprite.svg#like_l' }),
                            ]);
                        });
                    },
                    7405: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'like_m', xlinkHref: '/icons/sprite.svg#like_m' }),
                            ]);
                        });
                    },
                    2340: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'like_xs', xlinkHref: '/icons/sprite.svg#like_xs' }),
                            ]);
                        });
                    },
                    7513: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'like_xxs', xlinkHref: '/icons/sprite.svg#like_xxs' }),
                            ]);
                        });
                    },
                    5720: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'likedVariant_s', xlinkHref: '/icons/sprite.svg#likedVariant_s' }),
                            ]);
                        });
                    },
                    7399: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'likedVariant_xxs', xlinkHref: '/icons/sprite.svg#likedVariant_xxs' }),
                            ]);
                        });
                    },
                    820: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'liked_m', xlinkHref: '/icons/sprite.svg#liked_m' }),
                            ]);
                        });
                    },
                    2125: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'liked_xs', xlinkHref: '/icons/sprite.svg#liked_xs' }),
                            ]);
                        });
                    },
                    9104: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'liked_xxs', xlinkHref: '/icons/sprite.svg#liked_xxs' }),
                            ]);
                        });
                    },
                    9056: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'link_rounded_xxs', xlinkHref: '/icons/sprite.svg#link_rounded_xxs' }),
                            ]);
                        });
                    },
                    5849: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'link_xxs', xlinkHref: '/icons/sprite.svg#link_xxs' }),
                            ]);
                        });
                    },
                    1426: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'listen_xxxs', xlinkHref: '/icons/sprite.svg#listen_xxxs' }),
                            ]);
                        });
                    },
                    4014: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'liteVersion_xs', xlinkHref: '/icons/sprite.svg#liteVersion_xs' }),
                            ]);
                        });
                    },
                    5443: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'lock_m', xlinkHref: '/icons/sprite.svg#lock_m' }),
                            ]);
                        });
                    },
                    896: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'lock_xs', xlinkHref: '/icons/sprite.svg#lock_xs' }),
                            ]);
                        });
                    },
                    3613: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'lock_xxs', xlinkHref: '/icons/sprite.svg#lock_xxs' }),
                            ]);
                        });
                    },
                    9372: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'lyrics_xxs', xlinkHref: '/icons/sprite.svg#lyrics_xxs' }),
                            ]);
                        });
                    },
                    6104: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'macos', xlinkHref: '/icons/sprite.svg#macos' }),
                            ]);
                        });
                    },
                    3709: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'macos_xxs', xlinkHref: '/icons/sprite.svg#macos_xxs' }),
                            ]);
                        });
                    },
                    3685: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'menuArrow_xxs', xlinkHref: '/icons/sprite.svg#menuArrow_xxs' }),
                            ]);
                        });
                    },
                    8782: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'more_m', xlinkHref: '/icons/sprite.svg#more_m' }),
                            ]);
                        });
                    },
                    1829: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'more_xs', xlinkHref: '/icons/sprite.svg#more_xs' }),
                            ]);
                        });
                    },
                    3302: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'more_xxs', xlinkHref: '/icons/sprite.svg#more_xxs' }),
                            ]);
                        });
                    },
                    2502: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'musicLogo', xlinkHref: '/icons/sprite.svg#musicLogo' }),
                            ]);
                        });
                    },
                    1754: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'musicLogoCenterEn', xlinkHref: '/icons/sprite.svg#musicLogoCenterEn' }),
                            ]);
                        });
                    },
                    6615: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'musicLogoCenterRu', xlinkHref: '/icons/sprite.svg#musicLogoCenterRu' }),
                            ]);
                        });
                    },
                    7942: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'musicLogoLeftEn', xlinkHref: '/icons/sprite.svg#musicLogoLeftEn' }),
                            ]);
                        });
                    },
                    1498: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'musicLogoLeftRu', xlinkHref: '/icons/sprite.svg#musicLogoLeftRu' }),
                            ]);
                        });
                    },
                    7124: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationCollection_selected_xs', xlinkHref: '/icons/sprite.svg#navigationCollection_selected_xs' }),
                            ]);
                        });
                    },
                    1893: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationCollection_xs', xlinkHref: '/icons/sprite.svg#navigationCollection_xs' }),
                            ]);
                        });
                    },
                    205: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationConcerts_selected_xs', xlinkHref: '/icons/sprite.svg#navigationConcerts_selected_xs' }),
                            ]);
                        });
                    },
                    1563: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationConcerts_xs', xlinkHref: '/icons/sprite.svg#navigationConcerts_xs' }),
                            ]);
                        });
                    },
                    5659: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', {
                                    key: 'navigationForYouAndTrends_selected_xs',
                                    xlinkHref: '/icons/sprite.svg#navigationForYouAndTrends_selected_xs',
                                }),
                            ]);
                        });
                    },
                    1578: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationForYouAndTrends_xs', xlinkHref: '/icons/sprite.svg#navigationForYouAndTrends_xs' }),
                            ]);
                        });
                    },
                    6087: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationKids_selected_xs', xlinkHref: '/icons/sprite.svg#navigationKids_selected_xs' }),
                            ]);
                        });
                    },
                    9348: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationKids_xs', xlinkHref: '/icons/sprite.svg#navigationKids_xs' }),
                            ]);
                        });
                    },
                    8438: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationMyVibeNDA_xs', xlinkHref: '/icons/sprite.svg#navigationMyVibeNDA_xs' }),
                            ]);
                        });
                    },
                    965: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationMyVibe_xs', xlinkHref: '/icons/sprite.svg#navigationMyVibe_xs' }),
                            ]);
                        });
                    },
                    7438: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationNonMusic_selected_xs', xlinkHref: '/icons/sprite.svg#navigationNonMusic_selected_xs' }),
                            ]);
                        });
                    },
                    3877: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationNonMusic_xs', xlinkHref: '/icons/sprite.svg#navigationNonMusic_xs' }),
                            ]);
                        });
                    },
                    9968: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationPlus_xs', xlinkHref: '/icons/sprite.svg#navigationPlus_xs' }),
                            ]);
                        });
                    },
                    3778: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationSearch_xs', xlinkHref: '/icons/sprite.svg#navigationSearch_xs' }),
                            ]);
                        });
                    },
                    1084: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'next_xs', xlinkHref: '/icons/sprite.svg#next_xs' }),
                            ]);
                        });
                    },
                    4483: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'next_xxl', xlinkHref: '/icons/sprite.svg#next_xxl' }),
                            ]);
                        });
                    },
                    811: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'next_xxs', xlinkHref: '/icons/sprite.svg#next_xxs' }),
                            ]);
                        });
                    },
                    7252: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'non_music_m', xlinkHref: '/icons/sprite.svg#non_music_m' }),
                            ]);
                        });
                    },
                    3013: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'non_music_selected_m', xlinkHref: '/icons/sprite.svg#non_music_selected_m' }),
                            ]);
                        });
                    },
                    7869: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'note_l', xlinkHref: '/icons/sprite.svg#note_l' }),
                            ]);
                        });
                    },
                    5919: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'note_m', xlinkHref: '/icons/sprite.svg#note_m' }),
                            ]);
                        });
                    },
                    2774: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'note_s', xlinkHref: '/icons/sprite.svg#note_s' }),
                            ]);
                        });
                    },
                    4298: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'note_xl', xlinkHref: '/icons/sprite.svg#note_xl' }),
                            ]);
                        });
                    },
                    4254: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'note_xs', xlinkHref: '/icons/sprite.svg#note_xs' }),
                            ]);
                        });
                    },
                    8499: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'offline_xxl', xlinkHref: '/icons/sprite.svg#offline_xxl' }),
                            ]);
                        });
                    },
                    4947: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause', xlinkHref: '/icons/sprite.svg#pause' }),
                            ]);
                        });
                    },
                    4997: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pauseVibe_s', xlinkHref: '/icons/sprite.svg#pauseVibe_s' }),
                            ]);
                        });
                    },
                    7076: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_filled_l', xlinkHref: '/icons/sprite.svg#pause_filled_l' }),
                            ]);
                        });
                    },
                    3792: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_filled_m', xlinkHref: '/icons/sprite.svg#pause_filled_m' }),
                            ]);
                        });
                    },
                    5132: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_filled_xl', xlinkHref: '/icons/sprite.svg#pause_filled_xl' }),
                            ]);
                        });
                    },
                    8131: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_filled_xs', xlinkHref: '/icons/sprite.svg#pause_filled_xs' }),
                            ]);
                        });
                    },
                    705: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_filled_xxl', xlinkHref: '/icons/sprite.svg#pause_filled_xxl' }),
                            ]);
                        });
                    },
                    5346: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_m', xlinkHref: '/icons/sprite.svg#pause_m' }),
                            ]);
                        });
                    },
                    792: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_xs', xlinkHref: '/icons/sprite.svg#pause_xs' }),
                            ]);
                        });
                    },
                    6122: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_xxs', xlinkHref: '/icons/sprite.svg#pause_xxs' }),
                            ]);
                        });
                    },
                    5386: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pencil_xxs', xlinkHref: '/icons/sprite.svg#pencil_xxs' }),
                            ]);
                        });
                    },
                    3146: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'picture_s', xlinkHref: '/icons/sprite.svg#picture_s' }),
                            ]);
                        });
                    },
                    8868: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'picture_xl', xlinkHref: '/icons/sprite.svg#picture_xl' }),
                            ]);
                        });
                    },
                    1125: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'picture_xs', xlinkHref: '/icons/sprite.svg#picture_xs' }),
                            ]);
                        });
                    },
                    976: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pin_filled_xs', xlinkHref: '/icons/sprite.svg#pin_filled_xs' }),
                            ]);
                        });
                    },
                    9434: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pin_filled_xxs', xlinkHref: '/icons/sprite.svg#pin_filled_xxs' }),
                            ]);
                        });
                    },
                    9288: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pin_xs', xlinkHref: '/icons/sprite.svg#pin_xs' }),
                            ]);
                        });
                    },
                    3201: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pin_xxs', xlinkHref: '/icons/sprite.svg#pin_xxs' }),
                            ]);
                        });
                    },
                    7471: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play', xlinkHref: '/icons/sprite.svg#play' }),
                            ]);
                        });
                    },
                    8112: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playLast_xxs', xlinkHref: '/icons/sprite.svg#playLast_xxs' }),
                            ]);
                        });
                    },
                    8044: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playNext_xxs', xlinkHref: '/icons/sprite.svg#playNext_xxs' }),
                            ]);
                        });
                    },
                    8303: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playQueue_m', xlinkHref: '/icons/sprite.svg#playQueue_m' }),
                            ]);
                        });
                    },
                    9863: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playQueue_xs', xlinkHref: '/icons/sprite.svg#playQueue_xs' }),
                            ]);
                        });
                    },
                    1249: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playQueue_xxs', xlinkHref: '/icons/sprite.svg#playQueue_xxs' }),
                            ]);
                        });
                    },
                    2084: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playVibe_s', xlinkHref: '/icons/sprite.svg#playVibe_s' }),
                            ]);
                        });
                    },
                    8582: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_filled_l', xlinkHref: '/icons/sprite.svg#play_filled_l' }),
                            ]);
                        });
                    },
                    4777: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_filled_m', xlinkHref: '/icons/sprite.svg#play_filled_m' }),
                            ]);
                        });
                    },
                    8779: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_filled_xl', xlinkHref: '/icons/sprite.svg#play_filled_xl' }),
                            ]);
                        });
                    },
                    1945: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_filled_xs', xlinkHref: '/icons/sprite.svg#play_filled_xs' }),
                            ]);
                        });
                    },
                    7402: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_filled_xxl', xlinkHref: '/icons/sprite.svg#play_filled_xxl' }),
                            ]);
                        });
                    },
                    1351: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_m', xlinkHref: '/icons/sprite.svg#play_m' }),
                            ]);
                        });
                    },
                    1874: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_xs', xlinkHref: '/icons/sprite.svg#play_xs' }),
                            ]);
                        });
                    },
                    2026: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_xxs', xlinkHref: '/icons/sprite.svg#play_xxs' }),
                            ]);
                        });
                    },
                    5378: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_xxxs', xlinkHref: '/icons/sprite.svg#play_xxxs' }),
                            ]);
                        });
                    },
                    3751: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playlist_s', xlinkHref: '/icons/sprite.svg#playlist_s' }),
                            ]);
                        });
                    },
                    8503: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playlist_xl', xlinkHref: '/icons/sprite.svg#playlist_xl' }),
                            ]);
                        });
                    },
                    1580: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playlist_xs', xlinkHref: '/icons/sprite.svg#playlist_xs' }),
                            ]);
                        });
                    },
                    8861: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'plus', xlinkHref: '/icons/sprite.svg#plus' }),
                            ]);
                        });
                    },
                    6809: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'plusBadge', xlinkHref: '/icons/sprite.svg#plusBadge' }),
                            ]);
                        });
                    },
                    5266: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'plusColor', xlinkHref: '/icons/sprite.svg#plusColor' }),
                            ]);
                        });
                    },
                    1179: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'plusOutlined', xlinkHref: '/icons/sprite.svg#plusOutlined' }),
                            ]);
                        });
                    },
                    735: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'plusOutlined_m', xlinkHref: '/icons/sprite.svg#plusOutlined_m' }),
                            ]);
                        });
                    },
                    2754: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'podcasts_xxs', xlinkHref: '/icons/sprite.svg#podcasts_xxs' }),
                            ]);
                        });
                    },
                    4091: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'previous_xs', xlinkHref: '/icons/sprite.svg#previous_xs' }),
                            ]);
                        });
                    },
                    1427: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'previous_xxl', xlinkHref: '/icons/sprite.svg#previous_xxl' }),
                            ]);
                        });
                    },
                    5251: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'previous_xxs', xlinkHref: '/icons/sprite.svg#previous_xxs' }),
                            ]);
                        });
                    },
                    895: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'repeat_one_xs', xlinkHref: '/icons/sprite.svg#repeat_one_xs' }),
                            ]);
                        });
                    },
                    5632: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'repeat_one_xxs', xlinkHref: '/icons/sprite.svg#repeat_one_xxs' }),
                            ]);
                        });
                    },
                    8090: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'repeat_xs', xlinkHref: '/icons/sprite.svg#repeat_xs' }),
                            ]);
                        });
                    },
                    9370: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'repeat_xxs', xlinkHref: '/icons/sprite.svg#repeat_xxs' }),
                            ]);
                        });
                    },
                    1001: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'reset_xxs', xlinkHref: '/icons/sprite.svg#reset_xxs' }),
                            ]);
                        });
                    },
                    6579: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'reset_xxxs', xlinkHref: '/icons/sprite.svg#reset_xxxs' }),
                            ]);
                        });
                    },
                    5910: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'rewindBackwards_xs', xlinkHref: '/icons/sprite.svg#rewindBackwards_xs' }),
                            ]);
                        });
                    },
                    893: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'rewindBackwards_xxs', xlinkHref: '/icons/sprite.svg#rewindBackwards_xxs' }),
                            ]);
                        });
                    },
                    4892: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'rewindForward_xs', xlinkHref: '/icons/sprite.svg#rewindForward_xs' }),
                            ]);
                        });
                    },
                    6331: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'rewindForward_xxs', xlinkHref: '/icons/sprite.svg#rewindForward_xxs' }),
                            ]);
                        });
                    },
                    2176: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'ruble_m', xlinkHref: '/icons/sprite.svg#ruble_m' }),
                            ]);
                        });
                    },
                    9876: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'ruble_xxs', xlinkHref: '/icons/sprite.svg#ruble_xxs' }),
                            ]);
                        });
                    },
                    3935: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'ruble_xxxs', xlinkHref: '/icons/sprite.svg#ruble_xxxs' }),
                            ]);
                        });
                    },
                    7643: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'search_l', xlinkHref: '/icons/sprite.svg#search_l' }),
                            ]);
                        });
                    },
                    8235: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'search_m', xlinkHref: '/icons/sprite.svg#search_m' }),
                            ]);
                        });
                    },
                    8915: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'search_selected_m', xlinkHref: '/icons/sprite.svg#search_selected_m' }),
                            ]);
                        });
                    },
                    3366: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'search_xs', xlinkHref: '/icons/sprite.svg#search_xs' }),
                            ]);
                        });
                    },
                    7934: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'search_xxl', xlinkHref: '/icons/sprite.svg#search_xxl' }),
                            ]);
                        });
                    },
                    5034: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'settings_xs', xlinkHref: '/icons/sprite.svg#settings_xs' }),
                            ]);
                        });
                    },
                    1758: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'settings_xxs', xlinkHref: '/icons/sprite.svg#settings_xxs' }),
                            ]);
                        });
                    },
                    5271: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'share_m', xlinkHref: '/icons/sprite.svg#share_m' }),
                            ]);
                        });
                    },
                    7196: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'share_xxs', xlinkHref: '/icons/sprite.svg#share_xxs' }),
                            ]);
                        });
                    },
                    5792: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'shuffle_xs', xlinkHref: '/icons/sprite.svg#shuffle_xs' }),
                            ]);
                        });
                    },
                    7951: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'shuffle_xxs', xlinkHref: '/icons/sprite.svg#shuffle_xxs' }),
                            ]);
                        });
                    },
                    9545: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'site_xs', xlinkHref: '/icons/sprite.svg#site_xs' }),
                            ]);
                        });
                    },
                    2037: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_25x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_25x_centered_m' }),
                            ]);
                        });
                    },
                    3362: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_25x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_25x_centered_xs' }),
                            ]);
                        });
                    },
                    9846: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_25x_l', xlinkHref: '/icons/sprite.svg#speed_1_25x_l' }),
                            ]);
                        });
                    },
                    5197: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_5x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_5x_centered_m' }),
                            ]);
                        });
                    },
                    1079: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_5x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_5x_centered_xs' }),
                            ]);
                        });
                    },
                    6275: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_5x_l', xlinkHref: '/icons/sprite.svg#speed_1_5x_l' }),
                            ]);
                        });
                    },
                    7026: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_75x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_75x_centered_m' }),
                            ]);
                        });
                    },
                    8994: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_75x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_75x_centered_xs' }),
                            ]);
                        });
                    },
                    3702: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_75x_l', xlinkHref: '/icons/sprite.svg#speed_1_75x_l' }),
                            ]);
                        });
                    },
                    8664: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1x_centered_m' }),
                            ]);
                        });
                    },
                    51: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1x_centered_xs' }),
                            ]);
                        });
                    },
                    8550: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1x_l', xlinkHref: '/icons/sprite.svg#speed_1x_l' }),
                            ]);
                        });
                    },
                    8619: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_2x_centered_m', xlinkHref: '/icons/sprite.svg#speed_2x_centered_m' }),
                            ]);
                        });
                    },
                    5218: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_2x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_2x_centered_xs' }),
                            ]);
                        });
                    },
                    857: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_2x_l', xlinkHref: '/icons/sprite.svg#speed_2x_l' }),
                            ]);
                        });
                    },
                    6130: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'syncLyrics_m', xlinkHref: '/icons/sprite.svg#syncLyrics_m' }),
                            ]);
                        });
                    },
                    3049: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'syncLyrics_xs', xlinkHref: '/icons/sprite.svg#syncLyrics_xs' }),
                            ]);
                        });
                    },
                    126: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'syncLyrics_xxs', xlinkHref: '/icons/sprite.svg#syncLyrics_xxs' }),
                            ]);
                        });
                    },
                    619: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'thumbDown_xs', xlinkHref: '/icons/sprite.svg#thumbDown_xs' }),
                            ]);
                        });
                    },
                    2505: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'thumbUp_xs', xlinkHref: '/icons/sprite.svg#thumbUp_xs' }),
                            ]);
                        });
                    },
                    6210: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'ticket_m', xlinkHref: '/icons/sprite.svg#ticket_m' }),
                            ]);
                        });
                    },
                    5596: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'ticket_selected_m', xlinkHref: '/icons/sprite.svg#ticket_selected_m' }),
                            ]);
                        });
                    },
                    380: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'trailer_xs', xlinkHref: '/icons/sprite.svg#trailer_xs' }),
                            ]);
                        });
                    },
                    3112: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'trailer_xxs', xlinkHref: '/icons/sprite.svg#trailer_xxs' }),
                            ]);
                        });
                    },
                    1045: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'unavailable_xl', xlinkHref: '/icons/sprite.svg#unavailable_xl' }),
                            ]);
                        });
                    },
                    2834: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'unavailable_xs', xlinkHref: '/icons/sprite.svg#unavailable_xs' }),
                            ]);
                        });
                    },
                    8819: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'unpin_xxs', xlinkHref: '/icons/sprite.svg#unpin_xxs' }),
                            ]);
                        });
                    },
                    8772: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'upload_xxs', xlinkHref: '/icons/sprite.svg#upload_xxs' }),
                            ]);
                        });
                    },
                    3522: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'users_xxxs', xlinkHref: '/icons/sprite.svg#users_xxxs' }),
                            ]);
                        });
                    },
                    5695: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'vibe_xxs', xlinkHref: '/icons/sprite.svg#vibe_xxs' }),
                            ]);
                        });
                    },
                    6174: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'volumeOff_xs', xlinkHref: '/icons/sprite.svg#volumeOff_xs' }),
                            ]);
                        });
                    },
                    540: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'volume_xs', xlinkHref: '/icons/sprite.svg#volume_xs' }),
                            ]);
                        });
                    },
                    6206: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'windows', xlinkHref: '/icons/sprite.svg#windows' }),
                            ]);
                        });
                    },
                    7185: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'windows_xs', xlinkHref: '/icons/sprite.svg#windows_xs' }),
                            ]);
                        });
                    },
                    9481: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexBooksEn', xlinkHref: '/icons/sprite.svg#yandexBooksEn' }),
                            ]);
                        });
                    },
                    7364: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexBooksRu', xlinkHref: '/icons/sprite.svg#yandexBooksRu' }),
                            ]);
                        });
                    },
                    8577: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexPayEn', xlinkHref: '/icons/sprite.svg#yandexPayEn' }),
                            ]);
                        });
                    },
                    5760: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexPayRu', xlinkHref: '/icons/sprite.svg#yandexPayRu' }),
                            ]);
                        });
                    },
                    5667: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexPlusEn', xlinkHref: '/icons/sprite.svg#yandexPlusEn' }),
                            ]);
                        });
                    },
                    2639: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexPlusRu', xlinkHref: '/icons/sprite.svg#yandexPlusRu' }),
                            ]);
                        });
                    },
                    5189: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Icon = t.IconComponent = void 0);
                        let n = r(4377),
                            a = r(810),
                            i = r(5881),
                            l = r(5151),
                            o = s(r(123));
                        (t.IconComponent = (e) => {
                            let { 'aria-label': t, className: r, focusable: s = !1, variant: a, size: c, forwardRef: f, ...u } = e,
                                x = c ? ''.concat(a, '_').concat(c) : a,
                                d = l.iconsCollection[x];
                            return d
                                ? (0, n.jsx)(d, {
                                      className: (0, i.clsx)(o.default.root, r, o.default['root_size_'.concat(c)]),
                                      focusable: s,
                                      'aria-label': t,
                                      ...u,
                                      'aria-hidden': !t,
                                      ref: f,
                                  })
                                : null;
                        }),
                            (t.Icon = (0, a.forwardRef)((e, r) => (0, n.jsx)(t.IconComponent, { forwardRef: r, ...e })));
                    },
                    5151: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.iconsCollection = t.iconsCollectionBySize = void 0);
                        let n = s(r(4656)),
                            a = s(r(1954)),
                            i = s(r(8170)),
                            l = s(r(5565)),
                            o = s(r(8127)),
                            c = s(r(8993)),
                            f = s(r(2933)),
                            u = s(r(1334)),
                            x = s(r(1426)),
                            d = s(r(5378)),
                            _ = s(r(6579)),
                            g = s(r(3935)),
                            p = s(r(3522)),
                            v = s(r(7319)),
                            m = s(r(8442)),
                            k = s(r(2586)),
                            E = s(r(5822)),
                            y = s(r(5272)),
                            b = s(r(4860)),
                            w = s(r(8711)),
                            R = s(r(8109)),
                            O = s(r(4904)),
                            j = s(r(5971)),
                            H = s(r(3331)),
                            h = s(r(9783)),
                            C = s(r(8184)),
                            P = s(r(4926)),
                            L = s(r(3176)),
                            N = s(r(4789)),
                            A = s(r(8151)),
                            S = s(r(8690)),
                            M = s(r(1524)),
                            D = s(r(2361)),
                            I = s(r(3972)),
                            U = s(r(9330)),
                            K = s(r(7346)),
                            V = s(r(2604)),
                            z = s(r(6894)),
                            T = s(r(6391)),
                            B = s(r(9369)),
                            F = s(r(226)),
                            W = s(r(8130)),
                            Q = s(r(1922)),
                            Z = s(r(5270)),
                            G = s(r(3560)),
                            Y = s(r(7513)),
                            X = s(r(9838)),
                            J = s(r(9104)),
                            q = s(r(7399)),
                            $ = s(r(5849)),
                            ee = s(r(9056)),
                            et = s(r(3613)),
                            er = s(r(9372)),
                            es = s(r(3709)),
                            en = s(r(3685)),
                            ea = s(r(3302)),
                            ei = s(r(811)),
                            el = s(r(6122)),
                            eo = s(r(5386)),
                            ec = s(r(3201)),
                            ef = s(r(9434)),
                            eu = s(r(2026)),
                            ex = s(r(8112)),
                            ed = s(r(8044)),
                            e_ = s(r(1249)),
                            eg = s(r(2754)),
                            ep = s(r(5251)),
                            ev = s(r(9370)),
                            em = s(r(5632)),
                            ek = s(r(1001)),
                            eE = s(r(893)),
                            ey = s(r(6331)),
                            eb = s(r(9876)),
                            ew = s(r(1758)),
                            eR = s(r(7196)),
                            eO = s(r(7951)),
                            ej = s(r(126)),
                            eH = s(r(3112)),
                            eh = s(r(8819)),
                            eC = s(r(8772)),
                            eP = s(r(5695)),
                            eL = s(r(7171)),
                            eN = s(r(9030)),
                            eA = s(r(9422)),
                            eS = s(r(1491)),
                            eM = s(r(2337)),
                            eD = s(r(9202)),
                            eI = s(r(130)),
                            eU = s(r(5861)),
                            eK = s(r(7923)),
                            eV = s(r(4170)),
                            ez = s(r(3654)),
                            eT = s(r(6507)),
                            eB = s(r(3193)),
                            eF = s(r(30)),
                            eW = s(r(7802)),
                            eQ = s(r(3738)),
                            eZ = s(r(8196)),
                            eG = s(r(2340)),
                            eY = s(r(2125)),
                            eX = s(r(4014)),
                            eJ = s(r(896)),
                            eq = s(r(1829)),
                            e$ = s(r(1893)),
                            e1 = s(r(7124)),
                            e0 = s(r(1563)),
                            e8 = s(r(205)),
                            e2 = s(r(1578)),
                            e5 = s(r(5659)),
                            e7 = s(r(9348)),
                            e3 = s(r(6087)),
                            e9 = s(r(965)),
                            e4 = s(r(8438)),
                            e6 = s(r(3877)),
                            te = s(r(7438)),
                            tt = s(r(9968)),
                            tr = s(r(3778)),
                            ts = s(r(1084)),
                            tn = s(r(4254)),
                            ta = s(r(792)),
                            ti = s(r(8131)),
                            tl = s(r(1125)),
                            to = s(r(9288)),
                            tc = s(r(976)),
                            tf = s(r(1874)),
                            tu = s(r(9863)),
                            tx = s(r(1945)),
                            td = s(r(1580)),
                            t_ = s(r(4091)),
                            tg = s(r(8090)),
                            tp = s(r(895)),
                            tv = s(r(5910)),
                            tm = s(r(4892)),
                            tk = s(r(3366)),
                            tE = s(r(5034)),
                            ty = s(r(5792)),
                            tb = s(r(9545)),
                            tw = s(r(3362)),
                            tR = s(r(1079)),
                            tO = s(r(8994)),
                            tj = s(r(51)),
                            tH = s(r(5218)),
                            th = s(r(3049)),
                            tC = s(r(619)),
                            tP = s(r(2505)),
                            tL = s(r(380)),
                            tN = s(r(2834)),
                            tA = s(r(540)),
                            tS = s(r(6174)),
                            tM = s(r(7185)),
                            tD = s(r(9351)),
                            tI = s(r(2092)),
                            tU = s(r(1162)),
                            tK = s(r(6837)),
                            tV = s(r(2024)),
                            tz = s(r(776)),
                            tT = s(r(5720)),
                            tB = s(r(2774)),
                            tF = s(r(4997)),
                            tW = s(r(3146)),
                            tQ = s(r(2084)),
                            tZ = s(r(3751)),
                            tG = s(r(3076)),
                            tY = s(r(2495)),
                            tX = s(r(9509)),
                            tJ = s(r(8987)),
                            tq = s(r(190)),
                            t$ = s(r(843)),
                            t1 = s(r(5122)),
                            t0 = s(r(7405)),
                            t8 = s(r(820)),
                            t2 = s(r(5443)),
                            t5 = s(r(8782)),
                            t7 = s(r(7252)),
                            t3 = s(r(3013)),
                            t9 = s(r(5919)),
                            t4 = s(r(5346)),
                            t6 = s(r(3792)),
                            re = s(r(1351)),
                            rt = s(r(8303)),
                            rr = s(r(4777)),
                            rs = s(r(735)),
                            rn = s(r(2176)),
                            ra = s(r(8235)),
                            ri = s(r(8915)),
                            rl = s(r(5271)),
                            ro = s(r(2037)),
                            rc = s(r(5197)),
                            rf = s(r(7026)),
                            ru = s(r(8664)),
                            rx = s(r(8619)),
                            rd = s(r(6130)),
                            r_ = s(r(6210)),
                            rg = s(r(5596)),
                            rp = s(r(6644)),
                            rv = s(r(996)),
                            rm = s(r(7031)),
                            rk = s(r(4793)),
                            rE = s(r(7869)),
                            ry = s(r(7076)),
                            rb = s(r(8582)),
                            rw = s(r(7643)),
                            rR = s(r(9846)),
                            rO = s(r(6275)),
                            rj = s(r(3702)),
                            rH = s(r(8550)),
                            rh = s(r(857)),
                            rC = s(r(6304)),
                            rP = s(r(9040)),
                            rL = s(r(4298)),
                            rN = s(r(5132)),
                            rA = s(r(8868)),
                            rS = s(r(8779)),
                            rM = s(r(8503)),
                            rD = s(r(1045)),
                            rI = s(r(7341)),
                            rU = s(r(9505)),
                            rK = s(r(4483)),
                            rV = s(r(8499)),
                            rz = s(r(705)),
                            rT = s(r(7402)),
                            rB = s(r(1427)),
                            rF = s(r(7934)),
                            rW = s(r(2435)),
                            rQ = s(r(3918)),
                            rZ = s(r(2161)),
                            rG = s(r(5304)),
                            rY = s(r(2646)),
                            rX = s(r(7500)),
                            rJ = s(r(6104)),
                            rq = s(r(2502)),
                            r$ = s(r(1754)),
                            r1 = s(r(6615)),
                            r0 = s(r(7942)),
                            r8 = s(r(1498)),
                            r2 = s(r(4947)),
                            r5 = s(r(7471)),
                            r7 = s(r(8861)),
                            r3 = s(r(6809)),
                            r9 = s(r(5266)),
                            r4 = s(r(1179)),
                            r6 = s(r(6206)),
                            se = s(r(9481)),
                            st = s(r(7364)),
                            sr = s(r(8577)),
                            ss = s(r(5760)),
                            sn = s(r(5667)),
                            sa = s(r(2639));
                        (t.iconsCollectionBySize = {
                            xxxs: [
                                'adult',
                                'arrowDown',
                                'arrowRight',
                                'check',
                                'close',
                                'donation',
                                'exclamation',
                                'explicit',
                                'listen',
                                'play',
                                'reset',
                                'ruble',
                                'users',
                            ],
                            xxs: [
                                'add',
                                'addToPlaylist',
                                'adult',
                                'album',
                                'arrowDown',
                                'arrowLeft',
                                'arrowRight',
                                'artist',
                                'bucket',
                                'chain',
                                'chartDown',
                                'chartNew',
                                'chartSame',
                                'chartUp',
                                'check',
                                'clip',
                                'close',
                                'code',
                                'crown',
                                'dislike',
                                'disliked',
                                'download',
                                'downloaded',
                                'dragDots',
                                'edit',
                                'exclamation',
                                'explicit',
                                'eye_crossed',
                                'filter',
                                'gift',
                                'info',
                                'lightning',
                                'like',
                                'likeVariant',
                                'liked',
                                'likedVariant',
                                'link',
                                'link_rounded',
                                'lock',
                                'lyrics',
                                'macos',
                                'menuArrow',
                                'more',
                                'next',
                                'pause',
                                'pencil',
                                'pin',
                                'pin_filled',
                                'play',
                                'playLast',
                                'playNext',
                                'playQueue',
                                'podcasts',
                                'previous',
                                'repeat',
                                'repeat_one',
                                'reset',
                                'rewindBackwards',
                                'rewindForward',
                                'ruble',
                                'settings',
                                'share',
                                'shuffle',
                                'syncLyrics',
                                'trailer',
                                'unpin',
                                'upload',
                                'vibe',
                            ],
                            xs: [
                                'adult',
                                'album',
                                'arrowDown',
                                'arrowLeft',
                                'arrowRight',
                                'cast',
                                'chain',
                                'check',
                                'close',
                                'close_filled',
                                'dislike',
                                'disliked',
                                'exclamation',
                                'explicit',
                                'filter',
                                'fullscreen',
                                'infinity',
                                'like',
                                'liked',
                                'liteVersion',
                                'lock',
                                'more',
                                'navigationCollection',
                                'navigationCollection_selected',
                                'navigationConcerts',
                                'navigationConcerts_selected',
                                'navigationForYouAndTrends',
                                'navigationForYouAndTrends_selected',
                                'navigationKids',
                                'navigationKids_selected',
                                'navigationMyVibe',
                                'navigationMyVibeNDA',
                                'navigationNonMusic',
                                'navigationNonMusic_selected',
                                'navigationPlus',
                                'navigationSearch',
                                'next',
                                'note',
                                'pause',
                                'pause_filled',
                                'picture',
                                'pin',
                                'pin_filled',
                                'play',
                                'playQueue',
                                'play_filled',
                                'playlist',
                                'previous',
                                'repeat',
                                'repeat_one',
                                'rewindBackwards',
                                'rewindForward',
                                'search',
                                'settings',
                                'shuffle',
                                'site',
                                'speed_1_25x_centered',
                                'speed_1_5x_centered',
                                'speed_1_75x_centered',
                                'speed_1x_centered',
                                'speed_2x_centered',
                                'syncLyrics',
                                'thumbDown',
                                'thumbUp',
                                'trailer',
                                'unavailable',
                                'volume',
                                'volumeOff',
                                'windows',
                            ],
                            s: [
                                'adult',
                                'album',
                                'dislike',
                                'disliked',
                                'exclamation',
                                'explicit',
                                'likedVariant',
                                'note',
                                'pauseVibe',
                                'picture',
                                'playVibe',
                                'playlist',
                            ],
                            m: [
                                'collections',
                                'collections_selected',
                                'history',
                                'home',
                                'home_selected',
                                'kids',
                                'kids_selected',
                                'like',
                                'liked',
                                'lock',
                                'more',
                                'non_music',
                                'non_music_selected',
                                'note',
                                'pause',
                                'pause_filled',
                                'play',
                                'playQueue',
                                'play_filled',
                                'plusOutlined',
                                'ruble',
                                'search',
                                'search_selected',
                                'share',
                                'speed_1_25x_centered',
                                'speed_1_5x_centered',
                                'speed_1_75x_centered',
                                'speed_1x_centered',
                                'speed_2x_centered',
                                'syncLyrics',
                                'ticket',
                                'ticket_selected',
                            ],
                            l: [
                                'add',
                                'album',
                                'download',
                                'like',
                                'note',
                                'pause_filled',
                                'play_filled',
                                'search',
                                'speed_1_25x',
                                'speed_1_5x',
                                'speed_1_75x',
                                'speed_1x',
                                'speed_2x',
                            ],
                            xl: ['album', 'clip', 'note', 'pause_filled', 'picture', 'play_filled', 'playlist', 'unavailable'],
                            xxl: ['attention', 'check', 'next', 'offline', 'pause_filled', 'play_filled', 'previous', 'search'],
                            xxxl: ['attention'],
                            '': [
                                'bandlink',
                                'googlePlay',
                                'huaweiAppGallery',
                                'kinopoiskEn',
                                'kinopoiskRu',
                                'macos',
                                'musicLogo',
                                'musicLogoCenterEn',
                                'musicLogoCenterRu',
                                'musicLogoLeftEn',
                                'musicLogoLeftRu',
                                'pause',
                                'play',
                                'plus',
                                'plusBadge',
                                'plusColor',
                                'plusOutlined',
                                'windows',
                                'yandexBooksEn',
                                'yandexBooksRu',
                                'yandexPayEn',
                                'yandexPayRu',
                                'yandexPlusEn',
                                'yandexPlusRu',
                            ],
                        }),
                            (t.iconsCollection = {
                                adult_xxxs: n.default,
                                arrowDown_xxxs: a.default,
                                arrowRight_xxxs: i.default,
                                check_xxxs: l.default,
                                close_xxxs: o.default,
                                donation_xxxs: c.default,
                                exclamation_xxxs: f.default,
                                explicit_xxxs: u.default,
                                listen_xxxs: x.default,
                                play_xxxs: d.default,
                                reset_xxxs: _.default,
                                ruble_xxxs: g.default,
                                users_xxxs: p.default,
                                add_xxs: v.default,
                                addToPlaylist_xxs: m.default,
                                adult_xxs: k.default,
                                album_xxs: E.default,
                                arrowDown_xxs: y.default,
                                arrowLeft_xxs: b.default,
                                arrowRight_xxs: w.default,
                                artist_xxs: R.default,
                                bucket_xxs: O.default,
                                chain_xxs: j.default,
                                chartDown_xxs: H.default,
                                chartNew_xxs: h.default,
                                chartSame_xxs: C.default,
                                chartUp_xxs: P.default,
                                check_xxs: L.default,
                                clip_xxs: N.default,
                                close_xxs: A.default,
                                code_xxs: S.default,
                                crown_xxs: M.default,
                                dislike_xxs: D.default,
                                disliked_xxs: I.default,
                                download_xxs: U.default,
                                downloaded_xxs: K.default,
                                dragDots_xxs: V.default,
                                edit_xxs: z.default,
                                exclamation_xxs: T.default,
                                explicit_xxs: B.default,
                                eye_crossed_xxs: F.default,
                                filter_xxs: W.default,
                                gift_xxs: Q.default,
                                info_xxs: Z.default,
                                lightning_xxs: G.default,
                                like_xxs: Y.default,
                                likeVariant_xxs: X.default,
                                liked_xxs: J.default,
                                likedVariant_xxs: q.default,
                                link_xxs: $.default,
                                link_rounded_xxs: ee.default,
                                lock_xxs: et.default,
                                lyrics_xxs: er.default,
                                macos_xxs: es.default,
                                menuArrow_xxs: en.default,
                                more_xxs: ea.default,
                                next_xxs: ei.default,
                                pause_xxs: el.default,
                                pencil_xxs: eo.default,
                                pin_xxs: ec.default,
                                pin_filled_xxs: ef.default,
                                play_xxs: eu.default,
                                playLast_xxs: ex.default,
                                playNext_xxs: ed.default,
                                playQueue_xxs: e_.default,
                                podcasts_xxs: eg.default,
                                previous_xxs: ep.default,
                                repeat_xxs: ev.default,
                                repeat_one_xxs: em.default,
                                reset_xxs: ek.default,
                                rewindBackwards_xxs: eE.default,
                                rewindForward_xxs: ey.default,
                                ruble_xxs: eb.default,
                                settings_xxs: ew.default,
                                share_xxs: eR.default,
                                shuffle_xxs: eO.default,
                                syncLyrics_xxs: ej.default,
                                trailer_xxs: eH.default,
                                unpin_xxs: eh.default,
                                upload_xxs: eC.default,
                                vibe_xxs: eP.default,
                                adult_xs: eL.default,
                                album_xs: eN.default,
                                arrowDown_xs: eA.default,
                                arrowLeft_xs: eS.default,
                                arrowRight_xs: eM.default,
                                cast_xs: eD.default,
                                chain_xs: eI.default,
                                check_xs: eU.default,
                                close_xs: eK.default,
                                close_filled_xs: eV.default,
                                dislike_xs: ez.default,
                                disliked_xs: eT.default,
                                exclamation_xs: eB.default,
                                explicit_xs: eF.default,
                                filter_xs: eW.default,
                                fullscreen_xs: eQ.default,
                                infinity_xs: eZ.default,
                                like_xs: eG.default,
                                liked_xs: eY.default,
                                liteVersion_xs: eX.default,
                                lock_xs: eJ.default,
                                more_xs: eq.default,
                                navigationCollection_xs: e$.default,
                                navigationCollection_selected_xs: e1.default,
                                navigationConcerts_xs: e0.default,
                                navigationConcerts_selected_xs: e8.default,
                                navigationForYouAndTrends_xs: e2.default,
                                navigationForYouAndTrends_selected_xs: e5.default,
                                navigationKids_xs: e7.default,
                                navigationKids_selected_xs: e3.default,
                                navigationMyVibe_xs: e9.default,
                                navigationMyVibeNDA_xs: e4.default,
                                navigationNonMusic_xs: e6.default,
                                navigationNonMusic_selected_xs: te.default,
                                navigationPlus_xs: tt.default,
                                navigationSearch_xs: tr.default,
                                next_xs: ts.default,
                                note_xs: tn.default,
                                pause_xs: ta.default,
                                pause_filled_xs: ti.default,
                                picture_xs: tl.default,
                                pin_xs: to.default,
                                pin_filled_xs: tc.default,
                                play_xs: tf.default,
                                playQueue_xs: tu.default,
                                play_filled_xs: tx.default,
                                playlist_xs: td.default,
                                previous_xs: t_.default,
                                repeat_xs: tg.default,
                                repeat_one_xs: tp.default,
                                rewindBackwards_xs: tv.default,
                                rewindForward_xs: tm.default,
                                search_xs: tk.default,
                                settings_xs: tE.default,
                                shuffle_xs: ty.default,
                                site_xs: tb.default,
                                speed_1_25x_centered_xs: tw.default,
                                speed_1_5x_centered_xs: tR.default,
                                speed_1_75x_centered_xs: tO.default,
                                speed_1x_centered_xs: tj.default,
                                speed_2x_centered_xs: tH.default,
                                syncLyrics_xs: th.default,
                                thumbDown_xs: tC.default,
                                thumbUp_xs: tP.default,
                                trailer_xs: tL.default,
                                unavailable_xs: tN.default,
                                volume_xs: tA.default,
                                volumeOff_xs: tS.default,
                                windows_xs: tM.default,
                                adult_s: tD.default,
                                album_s: tI.default,
                                dislike_s: tU.default,
                                disliked_s: tK.default,
                                exclamation_s: tV.default,
                                explicit_s: tz.default,
                                likedVariant_s: tT.default,
                                note_s: tB.default,
                                pauseVibe_s: tF.default,
                                picture_s: tW.default,
                                playVibe_s: tQ.default,
                                playlist_s: tZ.default,
                                collections_m: tG.default,
                                collections_selected_m: tY.default,
                                history_m: tX.default,
                                home_m: tJ.default,
                                home_selected_m: tq.default,
                                kids_m: t$.default,
                                kids_selected_m: t1.default,
                                like_m: t0.default,
                                liked_m: t8.default,
                                lock_m: t2.default,
                                more_m: t5.default,
                                non_music_m: t7.default,
                                non_music_selected_m: t3.default,
                                note_m: t9.default,
                                pause_m: t4.default,
                                pause_filled_m: t6.default,
                                play_m: re.default,
                                playQueue_m: rt.default,
                                play_filled_m: rr.default,
                                plusOutlined_m: rs.default,
                                ruble_m: rn.default,
                                search_m: ra.default,
                                search_selected_m: ri.default,
                                share_m: rl.default,
                                speed_1_25x_centered_m: ro.default,
                                speed_1_5x_centered_m: rc.default,
                                speed_1_75x_centered_m: rf.default,
                                speed_1x_centered_m: ru.default,
                                speed_2x_centered_m: rx.default,
                                syncLyrics_m: rd.default,
                                ticket_m: r_.default,
                                ticket_selected_m: rg.default,
                                add_l: rp.default,
                                album_l: rv.default,
                                download_l: rm.default,
                                like_l: rk.default,
                                note_l: rE.default,
                                pause_filled_l: ry.default,
                                play_filled_l: rb.default,
                                search_l: rw.default,
                                speed_1_25x_l: rR.default,
                                speed_1_5x_l: rO.default,
                                speed_1_75x_l: rj.default,
                                speed_1x_l: rH.default,
                                speed_2x_l: rh.default,
                                album_xl: rC.default,
                                clip_xl: rP.default,
                                note_xl: rL.default,
                                pause_filled_xl: rN.default,
                                picture_xl: rA.default,
                                play_filled_xl: rS.default,
                                playlist_xl: rM.default,
                                unavailable_xl: rD.default,
                                attention_xxl: rI.default,
                                check_xxl: rU.default,
                                next_xxl: rK.default,
                                offline_xxl: rV.default,
                                pause_filled_xxl: rz.default,
                                play_filled_xxl: rT.default,
                                previous_xxl: rB.default,
                                search_xxl: rF.default,
                                attention_xxxl: rW.default,
                                bandlink: rQ.default,
                                googlePlay: rZ.default,
                                huaweiAppGallery: rG.default,
                                kinopoiskEn: rY.default,
                                kinopoiskRu: rX.default,
                                macos: rJ.default,
                                musicLogo: rq.default,
                                musicLogoCenterEn: r$.default,
                                musicLogoCenterRu: r1.default,
                                musicLogoLeftEn: r0.default,
                                musicLogoLeftRu: r8.default,
                                pause: r2.default,
                                play: r5.default,
                                plus: r7.default,
                                plusBadge: r3.default,
                                plusColor: r9.default,
                                plusOutlined: r4.default,
                                windows: r6.default,
                                yandexBooksEn: se.default,
                                yandexBooksRu: st.default,
                                yandexPayEn: sr.default,
                                yandexPayRu: ss.default,
                                yandexPlusEn: sn.default,
                                yandexPlusRu: sa.default,
                            });
                    },
                    7066: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Icon = void 0);
                        var s = r(5189);
                        Object.defineProperty(t, 'Icon', {
                            enumerable: !0,
                            get: function () {
                                return s.Icon;
                            },
                        });
                    },
                    1093: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.PlusBadge = void 0);
                        let n = r(4377),
                            a = r(5881),
                            i = r(2660),
                            l = r(2582),
                            o = r(7066),
                            c = s(r(8712));
                        t.PlusBadge = (e) => {
                            let { className: t, children: r, ...s } = e;
                            return (0, n.jsxs)('div', {
                                className: (0, a.clsx)(c.default.root, t),
                                ...(0, i.getDataAttrFromProps)(s),
                                children: [
                                    (0, n.jsx)(o.Icon, { variant: 'plus', className: c.default.icon }),
                                    (0, n.jsx)(l.Caption, { variant: 'div', type: 'controls', weight: 'medium', size: 'm', className: c.default.text, children: r }),
                                ],
                            });
                        };
                    },
                    7743: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0);
                        let n = r(4377),
                            a = r(5881),
                            i = r(810),
                            l = r(4721),
                            o = s(r(6951));
                        (t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: s = 'text', size: i = 's', className: c, children: f, weight: u = 'medium', ...x } = e;
                            return (0, n.jsx)(l.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(o.default.root, o.default['root_'.concat(s, '_').concat(i)], o.default['root_weight_'.concat(u)], c),
                                ...x,
                                children: f,
                            });
                        }),
                            (t.Caption = (0, i.forwardRef)((e, r) => (0, n.jsx)(t.CaptionComponent, { forwardRef: r, ...e })));
                    },
                    404: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0);
                        let n = r(4377),
                            a = r(5881),
                            i = r(810),
                            l = r(4721),
                            o = s(r(2223));
                        (t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: s = 'bold', size: i = 's', className: c, children: f, ...u } = e;
                            return (0, n.jsx)(l.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(o.default.root, o.default['root_size_'.concat(i)], o.default['root_weight_'.concat(s)], c),
                                ...u,
                                children: f,
                            });
                        }),
                            (t.Heading = (0, i.forwardRef)((e, r) => (0, n.jsx)(t.HeadingComponent, { forwardRef: r, ...e })));
                    },
                    4721: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0);
                        let n = r(4377),
                            a = r(5881),
                            i = r(810),
                            l = s(r(5882));
                        function o(e) {
                            let { forwardRef: t, style: r, className: s, children: i, variant: o, lineClamp: c, ...f } = e,
                                u = c && 'string' == typeof i ? i : void 0;
                            return (0, n.jsx)(o, {
                                style: { ...r, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, a.clsx)(
                                    l.default.root,
                                    { [l.default.root_clamp]: c && c > 0, [l.default.root_clamp_oneline]: c && 1 === c, [l.default.root_clamp_multiline]: c && c > 1 },
                                    s,
                                ),
                                ...f,
                                children: i,
                            });
                        }
                        (t.TypographyComponent = o), (t.Typography = (0, i.forwardRef)((e, t) => (0, n.jsx)(o, { forwardRef: t, ...e })));
                    },
                    2582: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0);
                        var s = r(7743);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return s.Caption;
                            },
                        });
                        var n = r(404);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return n.Heading;
                            },
                        });
                    },
                    2660: (e) => {
                        e.exports = O;
                    },
                    810: (e) => {
                        e.exports = w;
                    },
                },
                C = {};
            function P(e) {
                var t = C[e];
                if (void 0 !== t) return t.exports;
                var r = (C[e] = { exports: {} });
                return h[e].call(r.exports, r, r.exports, P), r.exports;
            }
            (P.d = (e, t) => {
                for (var r in t) P.o(t, r) && !P.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (P.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (P.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var L = {};
            (() => {
                Object.defineProperty(L, 'X', { value: !0 }), (L.R = void 0);
                var e = P(1093);
                Object.defineProperty(L, 'R', {
                    enumerable: !0,
                    get: function () {
                        return e.PlusBadge;
                    },
                });
            })();
            var N = L.R;
            L.X;
            var A = r(71926),
                S = r(44574),
                M = (function (e) {
                    return (e.SETTINGS = 'settings'), (e.LOGOUT = 'logout'), (e.ACCOUNT_ACTION = 'account-action'), e;
                })({}),
                D = r(82586),
                I = r(19740),
                U = r(66264),
                K = r.n(U);
            let V = (0, y.PA)(() => {
                let { user: e } = (0, o.Pjs)(),
                    t = (0, o.ZpR)(o.Zyd.settings.href);
                return (0, d.jsx)(I.W1, {
                    placement: 'top',
                    offsetOptions: 10,
                    variant: 'text',
                    withRipple: !1,
                    className: K().button,
                    label: (0, d.jsx)(k, { className: K().button, hasPlus: e.hasPlus }),
                    children: (0, d.jsx)(I.Dr, {
                        icon: (0, d.jsx)(D.Icon, { variant: 'settings', size: 'xxs' }),
                        onClick: t,
                        children: (0, d.jsx)(R.A, { id: 'page.settings' }),
                    }),
                });
            });
            var z = r(52111),
                T = r.n(z);
            let B = (0, y.PA)((e) => {
                var t;
                let { className: r, variant: s = 'desktop', withMeta: n, metaClassName: a, usernameClassName: i, userIdClassName: l } = e,
                    { user: c, location: f, experiments: u, settings: x, slam: g } = (0, o.Pjs)(),
                    { theme: p, setTheme: v } = (0, o.DPo)(),
                    m = (0, o.NFA)(),
                    k = m.get(o.vgk),
                    y = m.get(o.ooW),
                    w = m.get(o.twC),
                    { getThemeFromStorage: h, setThemeToStorage: C } = (0, o.QDo)(y),
                    [P, L] = (0, b.useState)(() => {
                        var e;
                        return null != (e = h()) ? e : o.W3W;
                    }),
                    {
                        oldWebHost: D,
                        passportCredentials: { origin: I },
                    } = w,
                    U = (0, o._lF)(D),
                    K = (0, b.useRef)(null),
                    [z, B] = (0, b.useState)(0),
                    F = (0, o.ZpR)(o.Zyd.settings.href),
                    { language: W, setLanguage: Q, availableLanguages: Z } = (0, o.h6b)(),
                    G = u.checkExperiment(o.zal.WebForceNext, 'oldnew_button'),
                    Y = u.checkExperiment(o.zal.WebForceNext, 'force_oldnew_button'),
                    X = u.checkExperiment(o.zal.WebPreferredDesign, 'new') || u.checkExperiment(o.zal.WebPreferredDesign, 'oldnew') || G || Y,
                    J = (0, O.stringifyJSONSafely)({ entrypoint: 'web_desktop' }),
                    q = (0, b.useMemo)(() => {
                        switch (x.platform) {
                            case o.ODD.WINDOWS:
                                return 'windows_music';
                            case o.ODD.MACOS:
                                return 'mac_music';
                            case o.ODD.LINUX:
                                return 'linux_music';
                            default:
                                return '';
                        }
                    }, [x.platform]),
                    $ = (0, H.c)((e) => {
                        L(e), e === o.W3W ? v((0, o.VDQ)()) : v(e), C(e);
                    }),
                    ee = (0, b.useCallback)(
                        (e) => {
                            Q(e);
                        },
                        [Q],
                    ),
                    et = (0, b.useCallback)(() => {}, [m, !0, Y, G, k, U, null == (t = x.browserInfo) ? void 0 : t.version]),
                    er = (0, b.useCallback)(
                        (e, t, r) => {
                            e === M.SETTINGS && (null == r || r.onClose(), F()), (e === M.LOGOUT || e === M.ACCOUNT_ACTION) && y.remove(o.cYZ.YmUid);
                        },
                        [F, y],
                    ),
                    es = (0, b.useCallback)(() => {
                        var e;
                        B(document.documentElement.clientHeight - ((null == (e = K.current) ? void 0 : e.getBoundingClientRect().top) || 0));
                    }, [B]),
                    en = (0, b.useMemo)(() => ({ '--user-top-distance': ''.concat(z, 'px') }), [z]),
                    ea = (0, b.useMemo)(() => {
                        if (g.networkStatus.isOffline || g.isOfflineModeEnabled) return (0, d.jsx)(V, {});
                        let e = void 0 !== c.puid ? String(c.puid) : '';
                        return (0, d.jsx)(E.User, {
                            className: (0, _.$)(T().userId, l),
                            platform: 'desktop' === s ? 'desktop' : 'touch',
                            userData: { plus: c.hasPlus, avatarId: c.account.data.avatarId },
                            onLocaleChange: ee,
                            project: 'music',
                            queryParams: {
                                uid: e,
                                'music.locales': Z.join(),
                                l10n: W,
                                'music.showSettings': c.isAuthorized ? '1' : '0',
                                'music.chatContext': J,
                                'music.chatUtmSource': q,
                                'music.showBackToOldDesign': '0',
                                target: '_blank',
                                origin: I,
                            },
                            env: 'prod',
                            avatarSize: 'desktop' === s ? 34 : 26,
                            dialogClassName: (0, _.$)(T().dialog, T()['dialog_'.concat(s)]),
                            retpath: f.href,
                            onMenuItemClick: er,
                            rpcHandlers: { setOldDesign: et },
                            tld: f.tld,
                            preload: !0,
                            onOpen: es,
                            theme: P,
                            colorScheme: null != p ? p : void 0,
                            onThemeChange: $,
                        });
                    }, [
                        Z,
                        J,
                        q,
                        es,
                        ee,
                        et,
                        $,
                        !0,
                        W,
                        f.href,
                        f.tld,
                        er,
                        I,
                        g.isOfflineModeEnabled,
                        g.networkStatus.isOffline,
                        p,
                        c.account.data.avatarId,
                        c.hasPlus,
                        c.isAuthorized,
                        c.puid,
                        l,
                        s,
                        X,
                        P,
                    ]);
                return (0, d.jsxs)('div', {
                    className: (0, _.$)(T().root, r),
                    ref: K,
                    style: en,
                    ...(0, j.Am)(j.OA.user.USER_PROFILE),
                    children: [
                        ea,
                        n &&
                            (0, d.jsxs)('div', {
                                className: (0, _.$)(T().meta, a),
                                ...(0, j.Am)(j.OA.user.USER_PROFILE_META),
                                children: [
                                    (0, d.jsx)(A.Caption, {
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        weight: 'medium',
                                        className: (0, _.$)(T().userName, i),
                                        lineClamp: 1,
                                        ...(0, j.Am)(j.OA.user.USER_PROFILE_USERNAME),
                                        children: c.account.data.publicName || c.account.data.login,
                                    }),
                                    c.hasPlus &&
                                        (0, d.jsx)(S.N_, {
                                            href: 'https://plus.yandex.'.concat(f.tld, '/'),
                                            target: '_blank',
                                            className: T().plusLink,
                                            ...(0, j.Am)(j.OA.user.USER_PROFILE_PLUS_LINK),
                                            children: (0, d.jsx)(N, {
                                                ...(0, j.Am)(j.OA.user.USER_PROFILE_PLUS_BADGE),
                                                children: (0, d.jsx)(R.A, { id: 'sidebar.plus-badge' }),
                                            }),
                                        }),
                                ],
                            }),
                    ],
                });
            });
        },
        52111: (e) => {
            e.exports = {
                root: 'UserProfile_root__vFuOj',
                userId: 'UserProfile_userId__Jb6Ix',
                dialog: 'UserProfile_dialog__kQ8sz',
                dialog_desktop: 'UserProfile_dialog_desktop__0p006',
                meta: 'UserProfile_meta___okny',
                plusLink: 'UserProfile_plusLink__NhVsU',
                userName: 'UserProfile_userName__PTRuJ',
            };
        },
        64238: (e) => {
            e.exports = { root: 'UserIcon_root__X0jg9', root_withPlus: 'UserIcon_root_withPlus__pRhgW', avatar: 'UserIcon_avatar__6_6av' };
        },
        66264: (e) => {
            e.exports = { button: 'OfflineUserProfile_button__OJntz' };
        },
    },
]);
