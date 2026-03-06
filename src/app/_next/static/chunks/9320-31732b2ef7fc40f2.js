(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9320],
    {
        32448: (e) => {
            e.exports = { root: 'UserIcon_root__X0jg9', root_withPlus: 'UserIcon_root_withPlus__pRhgW', avatar: 'UserIcon_avatar__6_6av' };
        },
        49320: (e, t, r) => {
            'use strict';
            r.d(t, { ny: () => m, Fv: () => u, YS: () => T });
            var s = r(93064),
                n = r(26433);
            let a = s.gK.model({
                    uid: s.gK.maybe(s.gK.number),
                    hasPlus: s.gK.maybe(s.gK.boolean),
                    login: s.gK.maybe(s.gK.string),
                    avatarId: s.gK.maybe(s.gK.string),
                    isChild: s.gK.maybe(s.gK.boolean),
                    publicId: s.gK.maybe(s.gK.string),
                    publicName: s.gK.maybe(s.gK.string),
                    userSessionRegionIso: s.gK.maybe(s.gK.string),
                    geoRegionIso: s.gK.maybe(s.gK.string),
                    serviceAvailable: s.gK.maybe(s.gK.boolean),
                }),
                i = s.gK.compose(s.gK.model('Account', { data: a }), n.XT);
            var l = r(83252),
                o = r(31905);
            let c = (e) => {
                    var t, r;
                    return (0, s.wg)({
                        loadingState: l.GuX.RESOLVE,
                        showWizard: !e.wizardIsPassed,
                        userCollectionHue: e.userCollectionHue,
                        isChildModeEnabled: !!e.childModEnabled,
                        userMusicVisibility: null != (r = null == (t = e.userMusicVisibility) ? void 0 : t.toLowerCase()) ? r : o.L.PUBLIC,
                    });
                },
                f = s.gK.compose(
                    s.gK.model('Settings', {
                        showWizard: s.gK.optional(s.gK.boolean, !0),
                        userCollectionHue: s.gK.maybe(s.gK.number),
                        isChildModeEnabled: s.gK.optional(s.gK.boolean, !1),
                        userMusicVisibility: s.gK.optional(s.gK.string, o.L.PUBLIC),
                    }),
                    n.XT,
                ),
                u = s.gK
                    .model('User', { account: i, settings: f, userCollectionHue: s.gK.maybe(s.gK.number) })
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
                        get advertRole() {
                            if (!this.isAuthorized) return l.Zxe.UNAUTHORIZED;
                            if (this.hasPlus) return l.Zxe.PLUS;
                            return l.Zxe.NON_PLUS;
                        },
                    }))
                    .actions((e) => ({
                        getAbout: (0, s.L3)(function* (t) {
                            let { accountResource: r, modelActionsLogger: n, containerStorage: a } = (0, s._$)(e);
                            if (!e.account.isLoading)
                                try {
                                    let n;
                                    e.account.loadingState = l.GuX.PENDING;
                                    let i = t;
                                    i || (i = yield r.about()),
                                        a.set(l.cYZ.YmUid, i.uid),
                                        (e.account.data =
                                            ((n = i),
                                            (0, s.wg)({
                                                uid: n.uid,
                                                login: n.login,
                                                avatarId: n.avatarId,
                                                hasPlus: n.hasPlus,
                                                publicId: n.publicId,
                                                publicName: n.publicName,
                                                isChild: n.isChild,
                                                userSessionRegionIso: n.userSessionRegionIso,
                                                geoRegionIso: n.geoRegionIso,
                                                serviceAvailable: n.serviceAvailable,
                                            }))),
                                        (e.account.loadingState = l.GuX.RESOLVE);
                                } catch (t) {
                                    n.error(t), (e.account.loadingState = l.GuX.REJECT);
                                }
                        }),
                        getSettings: (0, s.L3)(function* () {
                            let { accountResource: t, modelActionsLogger: r } = (0, s._$)(e);
                            if (e.settings.loadingState !== l.GuX.PENDING)
                                try {
                                    e.settings.loadingState = l.GuX.PENDING;
                                    let r = yield t.settings();
                                    e.settings = c(r);
                                } catch (t) {
                                    r.error(t), (e.settings.showWizard = !1), (e.settings.loadingState = l.GuX.REJECT);
                                }
                        }),
                        setSettings: (0, s.L3)(function* (t) {
                            let { isChildModeEnabled: r, userMusicVisibility: n } = t,
                                { accountResource: a, modelActionsLogger: i } = (0, s._$)(e);
                            try {
                                let t = {};
                                'boolean' == typeof r && ((t.childModEnabled = r), (e.settings.isChildModeEnabled = r)),
                                    n && ((t.userMusicVisibility = n), (e.settings.userMusicVisibility = n));
                                let s = yield a.settings(t);
                                if (((e.settings = c(s)), s.childModEnabled !== r)) return l.FlZ.ERROR;
                                return l.FlZ.OK;
                            } catch (e) {
                                return i.error(e), l.FlZ.ERROR;
                            }
                        }),
                        setUnauthorized: () => {
                            e.account.loadingState = l.GuX.RESOLVE;
                        },
                        setUserCollectionHue: (t) => {
                            e.userCollectionHue = t;
                        },
                    }));
            var x = r(54486),
                d = r(50420),
                _ = r(58360);
            let g = { src: '/_next/static/media/avatar.e9a40453.png' };
            var p = r(32448),
                v = r.n(p);
            let m = (e) => {
                let { className: t, hasPlus: r, avatarSrc: s = g.src, ...n } = e;
                return (0, x.jsx)('div', {
                    className: (0, d.$)(v().root, { [v().root_withPlus]: r }, t),
                    ...n,
                    children: (0, x.jsx)(_.Image, { src: s, fit: 'cover', className: v().avatar }),
                });
            };
            var k = r(62088),
                E = r(28303),
                y = r(61910),
                b = r.t(y, 2),
                w = r(47713),
                R = r(15209),
                O = r(31500),
                j = r(8817),
                H = {
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
                    2964: (e, t, r) => {
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
                    1684: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => s });
                        let s = { root: 'mdbxU6IWInQTsVjwnapn', text: 'Cl_DNqTqaeGRXa9FZpOO', icon: 'WMUZ6rmDKcZuPFMkQwf6' };
                    },
                    3641: (e, t, r) => {
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
                    5153: (e, t, r) => {
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
                    5818: (e, t, r) => {
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
                    2571: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'booksLogo', xlinkHref: '/icons/sprite.svg#booksLogo' }),
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
                    1893: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationCollection_xs', xlinkHref: '/icons/sprite.svg#navigationCollection_xs' }),
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
                    1578: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationForYouAndTrends_xs', xlinkHref: '/icons/sprite.svg#navigationForYouAndTrends_xs' }),
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
                            o = s(r(2964));
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
                            a = s(r(8170)),
                            i = s(r(5565)),
                            l = s(r(8127)),
                            o = s(r(8993)),
                            c = s(r(2933)),
                            f = s(r(1334)),
                            u = s(r(1426)),
                            x = s(r(5378)),
                            d = s(r(6579)),
                            _ = s(r(3935)),
                            g = s(r(3522)),
                            p = s(r(7319)),
                            v = s(r(8442)),
                            m = s(r(2586)),
                            k = s(r(5822)),
                            E = s(r(5272)),
                            y = s(r(4860)),
                            b = s(r(8711)),
                            w = s(r(8109)),
                            R = s(r(4904)),
                            O = s(r(5971)),
                            j = s(r(3331)),
                            H = s(r(9783)),
                            h = s(r(8184)),
                            C = s(r(4926)),
                            P = s(r(3176)),
                            L = s(r(4789)),
                            N = s(r(8151)),
                            S = s(r(8690)),
                            M = s(r(1524)),
                            D = s(r(2361)),
                            A = s(r(3972)),
                            I = s(r(9330)),
                            U = s(r(7346)),
                            K = s(r(2604)),
                            V = s(r(6894)),
                            z = s(r(6391)),
                            T = s(r(9369)),
                            B = s(r(226)),
                            W = s(r(8130)),
                            F = s(r(5270)),
                            Z = s(r(3560)),
                            Q = s(r(7513)),
                            G = s(r(9838)),
                            X = s(r(9104)),
                            Y = s(r(7399)),
                            J = s(r(5849)),
                            q = s(r(9056)),
                            $ = s(r(3613)),
                            ee = s(r(9372)),
                            et = s(r(3709)),
                            er = s(r(3685)),
                            es = s(r(3302)),
                            en = s(r(811)),
                            ea = s(r(6122)),
                            ei = s(r(5386)),
                            el = s(r(3201)),
                            eo = s(r(9434)),
                            ec = s(r(2026)),
                            ef = s(r(8112)),
                            eu = s(r(8044)),
                            ex = s(r(2754)),
                            ed = s(r(5251)),
                            e_ = s(r(9370)),
                            eg = s(r(5632)),
                            ep = s(r(1001)),
                            ev = s(r(893)),
                            em = s(r(6331)),
                            ek = s(r(9876)),
                            eE = s(r(1758)),
                            ey = s(r(7196)),
                            eb = s(r(7951)),
                            ew = s(r(126)),
                            eR = s(r(3112)),
                            eO = s(r(8819)),
                            ej = s(r(8772)),
                            eH = s(r(5695)),
                            eh = s(r(7171)),
                            eC = s(r(9030)),
                            eP = s(r(9422)),
                            eL = s(r(1491)),
                            eN = s(r(2337)),
                            eS = s(r(9202)),
                            eM = s(r(130)),
                            eD = s(r(7923)),
                            eA = s(r(4170)),
                            eI = s(r(3654)),
                            eU = s(r(6507)),
                            eK = s(r(3193)),
                            eV = s(r(30)),
                            ez = s(r(7802)),
                            eT = s(r(3738)),
                            eB = s(r(2340)),
                            eW = s(r(2125)),
                            eF = s(r(4014)),
                            eZ = s(r(896)),
                            eQ = s(r(1829)),
                            eG = s(r(1893)),
                            eX = s(r(1563)),
                            eY = s(r(1578)),
                            eJ = s(r(9348)),
                            eq = s(r(965)),
                            e$ = s(r(8438)),
                            e0 = s(r(3877)),
                            e1 = s(r(9968)),
                            e8 = s(r(3778)),
                            e5 = s(r(1084)),
                            e3 = s(r(4254)),
                            e2 = s(r(792)),
                            e7 = s(r(8131)),
                            e9 = s(r(1125)),
                            e4 = s(r(9288)),
                            e6 = s(r(976)),
                            te = s(r(1874)),
                            tt = s(r(9863)),
                            tr = s(r(1945)),
                            ts = s(r(1580)),
                            tn = s(r(4091)),
                            ta = s(r(8090)),
                            ti = s(r(895)),
                            tl = s(r(5910)),
                            to = s(r(4892)),
                            tc = s(r(3366)),
                            tf = s(r(5034)),
                            tu = s(r(5792)),
                            tx = s(r(9545)),
                            td = s(r(3362)),
                            t_ = s(r(1079)),
                            tg = s(r(8994)),
                            tp = s(r(51)),
                            tv = s(r(5218)),
                            tm = s(r(3049)),
                            tk = s(r(380)),
                            tE = s(r(2834)),
                            ty = s(r(540)),
                            tb = s(r(6174)),
                            tw = s(r(7185)),
                            tR = s(r(9351)),
                            tO = s(r(2092)),
                            tj = s(r(1162)),
                            tH = s(r(6837)),
                            th = s(r(2024)),
                            tC = s(r(776)),
                            tP = s(r(5720)),
                            tL = s(r(2774)),
                            tN = s(r(4997)),
                            tS = s(r(3146)),
                            tM = s(r(2084)),
                            tD = s(r(3751)),
                            tA = s(r(3076)),
                            tI = s(r(2495)),
                            tU = s(r(9509)),
                            tK = s(r(8987)),
                            tV = s(r(190)),
                            tz = s(r(843)),
                            tT = s(r(5122)),
                            tB = s(r(7405)),
                            tW = s(r(820)),
                            tF = s(r(5443)),
                            tZ = s(r(8782)),
                            tQ = s(r(7252)),
                            tG = s(r(3013)),
                            tX = s(r(5919)),
                            tY = s(r(5346)),
                            tJ = s(r(3792)),
                            tq = s(r(1351)),
                            t$ = s(r(8303)),
                            t0 = s(r(4777)),
                            t1 = s(r(735)),
                            t8 = s(r(2176)),
                            t5 = s(r(8235)),
                            t3 = s(r(8915)),
                            t2 = s(r(2037)),
                            t7 = s(r(5197)),
                            t9 = s(r(7026)),
                            t4 = s(r(8664)),
                            t6 = s(r(8619)),
                            re = s(r(6130)),
                            rt = s(r(6210)),
                            rr = s(r(5596)),
                            rs = s(r(6644)),
                            rn = s(r(996)),
                            ra = s(r(7031)),
                            ri = s(r(4793)),
                            rl = s(r(7869)),
                            ro = s(r(7076)),
                            rc = s(r(8582)),
                            rf = s(r(7643)),
                            ru = s(r(9846)),
                            rx = s(r(6275)),
                            rd = s(r(3702)),
                            r_ = s(r(8550)),
                            rg = s(r(857)),
                            rp = s(r(6304)),
                            rv = s(r(9040)),
                            rm = s(r(4298)),
                            rk = s(r(5132)),
                            rE = s(r(8868)),
                            ry = s(r(8779)),
                            rb = s(r(8503)),
                            rw = s(r(1045)),
                            rR = s(r(7341)),
                            rO = s(r(9505)),
                            rj = s(r(4483)),
                            rH = s(r(8499)),
                            rh = s(r(705)),
                            rC = s(r(7402)),
                            rP = s(r(1427)),
                            rL = s(r(7934)),
                            rN = s(r(2435)),
                            rS = s(r(3918)),
                            rM = s(r(2571)),
                            rD = s(r(2161)),
                            rA = s(r(5304)),
                            rI = s(r(2646)),
                            rU = s(r(7500)),
                            rK = s(r(6104)),
                            rV = s(r(2502)),
                            rz = s(r(1754)),
                            rT = s(r(6615)),
                            rB = s(r(7942)),
                            rW = s(r(1498)),
                            rF = s(r(8861)),
                            rZ = s(r(6809)),
                            rQ = s(r(5266)),
                            rG = s(r(1179)),
                            rX = s(r(6206)),
                            rY = s(r(9481)),
                            rJ = s(r(7364)),
                            rq = s(r(8577)),
                            r$ = s(r(5760)),
                            r0 = s(r(5667)),
                            r1 = s(r(2639));
                        (t.iconsCollectionBySize = {
                            xxxs: ['adult', 'arrowRight', 'check', 'close', 'donation', 'exclamation', 'explicit', 'listen', 'play', 'reset', 'ruble', 'users'],
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
                                'close',
                                'close_filled',
                                'dislike',
                                'disliked',
                                'exclamation',
                                'explicit',
                                'filter',
                                'fullscreen',
                                'like',
                                'liked',
                                'liteVersion',
                                'lock',
                                'more',
                                'navigationCollection',
                                'navigationConcerts',
                                'navigationForYouAndTrends',
                                'navigationKids',
                                'navigationMyVibe',
                                'navigationMyVibeNDA',
                                'navigationNonMusic',
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
                                'booksLogo',
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
                                arrowRight_xxxs: a.default,
                                check_xxxs: i.default,
                                close_xxxs: l.default,
                                donation_xxxs: o.default,
                                exclamation_xxxs: c.default,
                                explicit_xxxs: f.default,
                                listen_xxxs: u.default,
                                play_xxxs: x.default,
                                reset_xxxs: d.default,
                                ruble_xxxs: _.default,
                                users_xxxs: g.default,
                                add_xxs: p.default,
                                addToPlaylist_xxs: v.default,
                                adult_xxs: m.default,
                                album_xxs: k.default,
                                arrowDown_xxs: E.default,
                                arrowLeft_xxs: y.default,
                                arrowRight_xxs: b.default,
                                artist_xxs: w.default,
                                bucket_xxs: R.default,
                                chain_xxs: O.default,
                                chartDown_xxs: j.default,
                                chartNew_xxs: H.default,
                                chartSame_xxs: h.default,
                                chartUp_xxs: C.default,
                                check_xxs: P.default,
                                clip_xxs: L.default,
                                close_xxs: N.default,
                                code_xxs: S.default,
                                crown_xxs: M.default,
                                dislike_xxs: D.default,
                                disliked_xxs: A.default,
                                download_xxs: I.default,
                                downloaded_xxs: U.default,
                                dragDots_xxs: K.default,
                                edit_xxs: V.default,
                                exclamation_xxs: z.default,
                                explicit_xxs: T.default,
                                eye_crossed_xxs: B.default,
                                filter_xxs: W.default,
                                info_xxs: F.default,
                                lightning_xxs: Z.default,
                                like_xxs: Q.default,
                                likeVariant_xxs: G.default,
                                liked_xxs: X.default,
                                likedVariant_xxs: Y.default,
                                link_xxs: J.default,
                                link_rounded_xxs: q.default,
                                lock_xxs: $.default,
                                lyrics_xxs: ee.default,
                                macos_xxs: et.default,
                                menuArrow_xxs: er.default,
                                more_xxs: es.default,
                                next_xxs: en.default,
                                pause_xxs: ea.default,
                                pencil_xxs: ei.default,
                                pin_xxs: el.default,
                                pin_filled_xxs: eo.default,
                                play_xxs: ec.default,
                                playLast_xxs: ef.default,
                                playNext_xxs: eu.default,
                                podcasts_xxs: ex.default,
                                previous_xxs: ed.default,
                                repeat_xxs: e_.default,
                                repeat_one_xxs: eg.default,
                                reset_xxs: ep.default,
                                rewindBackwards_xxs: ev.default,
                                rewindForward_xxs: em.default,
                                ruble_xxs: ek.default,
                                settings_xxs: eE.default,
                                share_xxs: ey.default,
                                shuffle_xxs: eb.default,
                                syncLyrics_xxs: ew.default,
                                trailer_xxs: eR.default,
                                unpin_xxs: eO.default,
                                upload_xxs: ej.default,
                                vibe_xxs: eH.default,
                                adult_xs: eh.default,
                                album_xs: eC.default,
                                arrowDown_xs: eP.default,
                                arrowLeft_xs: eL.default,
                                arrowRight_xs: eN.default,
                                cast_xs: eS.default,
                                chain_xs: eM.default,
                                close_xs: eD.default,
                                close_filled_xs: eA.default,
                                dislike_xs: eI.default,
                                disliked_xs: eU.default,
                                exclamation_xs: eK.default,
                                explicit_xs: eV.default,
                                filter_xs: ez.default,
                                fullscreen_xs: eT.default,
                                like_xs: eB.default,
                                liked_xs: eW.default,
                                liteVersion_xs: eF.default,
                                lock_xs: eZ.default,
                                more_xs: eQ.default,
                                navigationCollection_xs: eG.default,
                                navigationConcerts_xs: eX.default,
                                navigationForYouAndTrends_xs: eY.default,
                                navigationKids_xs: eJ.default,
                                navigationMyVibe_xs: eq.default,
                                navigationMyVibeNDA_xs: e$.default,
                                navigationNonMusic_xs: e0.default,
                                navigationPlus_xs: e1.default,
                                navigationSearch_xs: e8.default,
                                next_xs: e5.default,
                                note_xs: e3.default,
                                pause_xs: e2.default,
                                pause_filled_xs: e7.default,
                                picture_xs: e9.default,
                                pin_xs: e4.default,
                                pin_filled_xs: e6.default,
                                play_xs: te.default,
                                playQueue_xs: tt.default,
                                play_filled_xs: tr.default,
                                playlist_xs: ts.default,
                                previous_xs: tn.default,
                                repeat_xs: ta.default,
                                repeat_one_xs: ti.default,
                                rewindBackwards_xs: tl.default,
                                rewindForward_xs: to.default,
                                search_xs: tc.default,
                                settings_xs: tf.default,
                                shuffle_xs: tu.default,
                                site_xs: tx.default,
                                speed_1_25x_centered_xs: td.default,
                                speed_1_5x_centered_xs: t_.default,
                                speed_1_75x_centered_xs: tg.default,
                                speed_1x_centered_xs: tp.default,
                                speed_2x_centered_xs: tv.default,
                                syncLyrics_xs: tm.default,
                                trailer_xs: tk.default,
                                unavailable_xs: tE.default,
                                volume_xs: ty.default,
                                volumeOff_xs: tb.default,
                                windows_xs: tw.default,
                                adult_s: tR.default,
                                album_s: tO.default,
                                dislike_s: tj.default,
                                disliked_s: tH.default,
                                exclamation_s: th.default,
                                explicit_s: tC.default,
                                likedVariant_s: tP.default,
                                note_s: tL.default,
                                pauseVibe_s: tN.default,
                                picture_s: tS.default,
                                playVibe_s: tM.default,
                                playlist_s: tD.default,
                                collections_m: tA.default,
                                collections_selected_m: tI.default,
                                history_m: tU.default,
                                home_m: tK.default,
                                home_selected_m: tV.default,
                                kids_m: tz.default,
                                kids_selected_m: tT.default,
                                like_m: tB.default,
                                liked_m: tW.default,
                                lock_m: tF.default,
                                more_m: tZ.default,
                                non_music_m: tQ.default,
                                non_music_selected_m: tG.default,
                                note_m: tX.default,
                                pause_m: tY.default,
                                pause_filled_m: tJ.default,
                                play_m: tq.default,
                                playQueue_m: t$.default,
                                play_filled_m: t0.default,
                                plusOutlined_m: t1.default,
                                ruble_m: t8.default,
                                search_m: t5.default,
                                search_selected_m: t3.default,
                                speed_1_25x_centered_m: t2.default,
                                speed_1_5x_centered_m: t7.default,
                                speed_1_75x_centered_m: t9.default,
                                speed_1x_centered_m: t4.default,
                                speed_2x_centered_m: t6.default,
                                syncLyrics_m: re.default,
                                ticket_m: rt.default,
                                ticket_selected_m: rr.default,
                                add_l: rs.default,
                                album_l: rn.default,
                                download_l: ra.default,
                                like_l: ri.default,
                                note_l: rl.default,
                                pause_filled_l: ro.default,
                                play_filled_l: rc.default,
                                search_l: rf.default,
                                speed_1_25x_l: ru.default,
                                speed_1_5x_l: rx.default,
                                speed_1_75x_l: rd.default,
                                speed_1x_l: r_.default,
                                speed_2x_l: rg.default,
                                album_xl: rp.default,
                                clip_xl: rv.default,
                                note_xl: rm.default,
                                pause_filled_xl: rk.default,
                                picture_xl: rE.default,
                                play_filled_xl: ry.default,
                                playlist_xl: rb.default,
                                unavailable_xl: rw.default,
                                attention_xxl: rR.default,
                                check_xxl: rO.default,
                                next_xxl: rj.default,
                                offline_xxl: rH.default,
                                pause_filled_xxl: rh.default,
                                play_filled_xxl: rC.default,
                                previous_xxl: rP.default,
                                search_xxl: rL.default,
                                attention_xxxl: rN.default,
                                bandlink: rS.default,
                                booksLogo: rM.default,
                                googlePlay: rD.default,
                                huaweiAppGallery: rA.default,
                                kinopoiskEn: rI.default,
                                kinopoiskRu: rU.default,
                                macos: rK.default,
                                musicLogo: rV.default,
                                musicLogoCenterEn: rz.default,
                                musicLogoCenterRu: rT.default,
                                musicLogoLeftEn: rB.default,
                                musicLogoLeftRu: rW.default,
                                plus: rF.default,
                                plusBadge: rZ.default,
                                plusColor: rQ.default,
                                plusOutlined: rG.default,
                                windows: rX.default,
                                yandexBooksEn: rY.default,
                                yandexBooksRu: rJ.default,
                                yandexPayEn: rq.default,
                                yandexPayRu: r$.default,
                                yandexPlusEn: r0.default,
                                yandexPlusRu: r1.default,
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
                            i = r(2582),
                            l = r(7066),
                            o = s(r(1684));
                        t.PlusBadge = (e) => {
                            let { className: t, children: r } = e;
                            return (0, n.jsxs)('div', {
                                className: (0, a.clsx)(o.default.root, t),
                                children: [
                                    (0, n.jsx)(l.Icon, { variant: 'plus', className: o.default.icon }),
                                    (0, n.jsx)(i.Caption, { variant: 'div', type: 'controls', weight: 'medium', size: 'm', className: o.default.text, children: r }),
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
                            o = s(r(3641));
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
                            o = s(r(5153));
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
                            l = s(r(5818));
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
                    810: (e) => {
                        e.exports = b;
                    },
                },
                h = {};
            function C(e) {
                var t = h[e];
                if (void 0 !== t) return t.exports;
                var r = (h[e] = { exports: {} });
                return H[e].call(r.exports, r, r.exports, C), r.exports;
            }
            (C.d = (e, t) => {
                for (var r in t) C.o(t, r) && !C.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (C.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (C.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var P = {};
            (() => {
                Object.defineProperty(P, 'X', { value: !0 }), (P.R = void 0);
                var e = C(1093);
                Object.defineProperty(P, 'R', {
                    enumerable: !0,
                    get: function () {
                        return e.PlusBadge;
                    },
                });
            })();
            var L = P.R;
            P.X;
            var N = r(97800),
                S = r(80585),
                M = (function (e) {
                    return (e.SETTINGS = 'settings'), (e.LOGOUT = 'logout'), (e.ACCOUNT_ACTION = 'account-action'), e;
                })({}),
                D = r(5956),
                A = r(61958),
                I = r(69850),
                U = r.n(I);
            let K = (0, E.PA)(() => {
                let { user: e } = (0, l.Pjs)(),
                    t = (0, l.ZpR)(l.Zyd.settings.href);
                return (0, x.jsx)(A.W1, {
                    placement: 'top',
                    offsetOptions: 10,
                    variant: 'text',
                    withRipple: !1,
                    className: U().button,
                    label: (0, x.jsx)(m, { className: U().button, hasPlus: e.hasPlus }),
                    children: (0, x.jsx)(A.Dr, {
                        icon: (0, x.jsx)(D.Icon, { variant: 'settings', size: 'xxs' }),
                        onClick: t,
                        children: (0, x.jsx)(w.A, { id: 'page.settings' }),
                    }),
                });
            });
            var V = r(50638),
                z = r.n(V);
            let T = (0, E.PA)((e) => {
                var t;
                let { className: r, variant: s = 'desktop', withMeta: n, metaClassName: a, usernameClassName: i, userIdClassName: o } = e,
                    { user: c, location: f, experiments: u, settings: _, slam: g } = (0, l.Pjs)(),
                    { theme: p, setTheme: v } = (0, l.DPo)(),
                    m = (0, l.NFA)(),
                    E = m.get(l.vgk),
                    b = m.get(l.ooW),
                    H = m.get(l.twC),
                    { getThemeFromStorage: h, setThemeToStorage: C } = (0, l.QDo)(b),
                    [P, D] = (0, y.useState)(() => {
                        var e;
                        return null != (e = h()) ? e : l.W3W;
                    }),
                    {
                        oldWebHost: A,
                        passportCredentials: { origin: I },
                    } = H,
                    U = (0, l._lF)(A),
                    V = (0, y.useRef)(null),
                    [T, B] = (0, y.useState)(0),
                    W = (0, l.ZpR)(l.Zyd.settings.href),
                    { language: F, setLanguage: Z, availableLanguages: Q } = (0, l.h6b)(),
                    G = u.checkExperiment(l.zal.WebForceNext, 'oldnew_button'),
                    X = u.checkExperiment(l.zal.WebForceNext, 'force_oldnew_button'),
                    Y = u.checkExperiment(l.zal.WebPreferredDesign, 'new') || u.checkExperiment(l.zal.WebPreferredDesign, 'oldnew') || G || X,
                    J = (0, R.stringifyJSONSafely)({ entrypoint: 'web_desktop' }),
                    q = (0, y.useMemo)(() => {
                        switch (_.platform) {
                            case l.ODD.WINDOWS:
                                return 'windows_music';
                            case l.ODD.MACOS:
                                return 'mac_music';
                            case l.ODD.LINUX:
                                return 'linux_music';
                            default:
                                return '';
                        }
                    }, [_.platform]),
                    $ = (0, j.c)((e) => {
                        D(e), e === l.W3W ? v((0, l.VDQ)()) : v(e), C(e);
                    }),
                    ee = (0, y.useCallback)(
                        (e) => {
                            Z(e);
                        },
                        [Z],
                    ),
                    et = (0, y.useCallback)(() => {}, [m, !0, X, G, E, U, null == (t = _.browserInfo) ? void 0 : t.version]),
                    er = (0, y.useCallback)(
                        (e, t, r) => {
                            e === M.SETTINGS && (null == r || r.onClose(), W()), (e === M.LOGOUT || e === M.ACCOUNT_ACTION) && b.remove(l.cYZ.YmUid);
                        },
                        [W, b],
                    ),
                    es = (0, y.useCallback)(() => {
                        var e;
                        B(document.documentElement.clientHeight - ((null == (e = V.current) ? void 0 : e.getBoundingClientRect().top) || 0));
                    }, [B]),
                    en = (0, y.useMemo)(() => ({ '--user-top-distance': ''.concat(T, 'px') }), [T]),
                    ea = (0, y.useMemo)(() => {
                        if (g.networkStatus.isOffline || g.isOfflineModeEnabled) return (0, x.jsx)(K, {});
                        let e = void 0 !== c.puid ? String(c.puid) : '';
                        return (0, x.jsx)(k.User, {
                            className: (0, d.$)(z().userId, o),
                            platform: 'desktop' === s ? 'desktop' : 'touch',
                            userData: { plus: c.hasPlus, avatarId: c.account.data.avatarId },
                            onLocaleChange: ee,
                            project: 'music',
                            queryParams: {
                                uid: e,
                                'music.locales': Q.join(),
                                l10n: F,
                                'music.showSettings': c.isAuthorized ? '1' : '0',
                                'music.chatContext': J,
                                'music.chatUtmSource': q,
                                'music.showBackToOldDesign': '0',
                                target: '_blank',
                                origin: I,
                            },
                            env: 'prod',
                            avatarSize: 'desktop' === s ? 34 : 26,
                            dialogClassName: (0, d.$)(z().dialog, z()['dialog_'.concat(s)]),
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
                        Q,
                        J,
                        q,
                        es,
                        ee,
                        et,
                        $,
                        !0,
                        F,
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
                        o,
                        s,
                        Y,
                        P,
                    ]);
                return (0, x.jsxs)('div', {
                    className: (0, d.$)(z().root, r),
                    ref: V,
                    style: en,
                    ...(0, O.Am)(O.OA.user.USER_PROFILE),
                    children: [
                        ea,
                        n &&
                            (0, x.jsxs)('div', {
                                className: (0, d.$)(z().meta, a),
                                children: [
                                    (0, x.jsx)(N.Caption, {
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        weight: 'medium',
                                        className: (0, d.$)(z().userName, i),
                                        lineClamp: 1,
                                        children: c.account.data.publicName || c.account.data.login,
                                    }),
                                    c.hasPlus &&
                                        (0, x.jsx)(S.N_, {
                                            href: 'https://plus.yandex.'.concat(f.tld, '/'),
                                            target: '_blank',
                                            className: z().plusLink,
                                            children: (0, x.jsx)(L, { children: (0, x.jsx)(w.A, { id: 'sidebar.plus-badge' }) }),
                                        }),
                                ],
                            }),
                    ],
                });
            });
        },
        50638: (e) => {
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
        69850: (e) => {
            e.exports = { button: 'OfflineUserProfile_button__OJntz' };
        },
    },
]);
