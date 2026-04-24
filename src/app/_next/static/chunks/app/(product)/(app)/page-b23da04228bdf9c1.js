(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2966],
    {
        1137: (e, n, r) => {
            'use strict';
            r.d(n, { useDownloadedTracks: () => d });
            var i = r(44020),
                o = r(14622),
                s = r(59935),
                t = r(42561);
            let l = [o.DT.IDLE, o.DT.DOWNLOADED],
                d = (e) => {
                    var n;
                    let r = (0, t.jRO)(),
                        d = (0, s.c)((n) => {
                            let { state: r } = n;
                            l.includes(r.loadingState) && e();
                        });
                    (0, i.useEffect)(() => {
                        var n, i;
                        return (
                            null == (n = r.store) || n.tracks.events.on(o.je.STATE_CHANGED, e),
                            null == (i = r.store) || i.tracks.events.on(o.je.ENTITY_CHANGED, d),
                            () => {
                                var n, i;
                                null == (n = r.store) || n.tracks.events.off(o.je.STATE_CHANGED, e), null == (i = r.store) || i.tracks.events.off(o.je.ENTITY_CHANGED, d);
                            }
                        );
                    }, [e, d, null == (n = r.store) ? void 0 : n.tracks.events]);
                };
        },
        21202: (e, n, r) => {
            'use strict';
            r.d(n, { b: () => a, L: () => i.useDownloadedTracks });
            var i = r(1137),
                o = r(51606),
                s = r(36547),
                t = r(66161),
                l = r(42561),
                d = r(54690);
            let a = o.gK
                .compose(o.gK.model('DownloadedTracks', { items: o.gK.maybeNull(o.gK.array(t.vj)), tracks: o.gK.maybeNull(o.gK.frozen()) }), d.XT)
                .views((e) => ({
                    get tracksDurationInMinutes() {
                        var n, r;
                        return (null != (r = null == (n = e.tracks) ? void 0 : n.reduce((e, n) => (n.durationMs ? e + n.durationMs : e), 0)) ? r : 0) / 1e3 / 60;
                    },
                    get entitiesData() {
                        if (!e.tracks) return [];
                        return e.tracks.map((e) => ({ type: s.R.DownloadedMusic, meta: e }));
                    },
                    get isEmpty() {
                        var i;
                        return e.isResolved && (null == (i = e.items) ? void 0 : i.length) === 0;
                    },
                }))
                .actions((e) => ({
                    getData: (0, o.L3)(function* (n, r) {
                        let { modelActionsLogger: i } = (0, o._$)(e);
                        if (e.loadingState !== l.GuX.PENDING)
                            try {
                                e.loadingState = l.GuX.PENDING;
                                let i = yield n.getTracks(r);
                                (e.tracks = i), (e.items = (0, o.wg)(i.map((e) => (0, t.vU)(e)))), e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.RESOLVE);
                            } catch (n) {
                                i.error(n), e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.items = null), (e.tracks = null), (e.loadingState = l.GuX.IDLE);
                    },
                }));
        },
        36118: (e, n, r) => {
            'use strict';
            r.d(n, { SomethingWentWrong: () => u });
            var i = r(62936),
                o = r(79950),
                s = r(19718),
                t = r(44020),
                l = r(47480),
                d = r(26731),
                a = r(5099),
                m = r(85742),
                h = r(20418),
                v = r(42561),
                P = r(85906),
                b = r(52166),
                c = r.n(b);
            let u = (0, s.PA)((e) => {
                let { className: n, withBackwardControl: r = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    b = s({ id: 'error-messages.something-went-wrong' });
                (0, v.CgZ)(b);
                let { sendRefreshEvent: u } = (0, v.cYT)(),
                    _ = (0, t.useCallback)(() => {
                        u(), (window.location.href = v.Zyd.main.href);
                    }, [u]),
                    { contentRef: g } = (0, v.gKY)();
                return (0, i.jsxs)('div', {
                    className: (0, o.$)(c().root, n),
                    children: [
                        r &&
                            (0, i.jsx)(P.Lh, {
                                withBackwardFallback: '/',
                                className: (0, o.$)(c().navigation, { [c().navigation_desktop]: !g }),
                                withForwardControl: !1,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, o.$)(c().content, { [c().content_shrink]: !r }),
                            children: [
                                (0, i.jsx)(m.Icon, { className: c().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(h.Heading, { className: (0, o.$)(c().title, c().important), variant: 'h3', size: 'xs', children: b }),
                                (0, i.jsxs)(h.Caption, {
                                    className: (0, o.$)(c().text, c().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(d.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(a.$, {
                                    onClick: _,
                                    className: c().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(h.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(d.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        36179: (e, n, r) => {
            'use strict';
            r.d(n, { XU: () => h });
            var i,
                o,
                s = r(62986),
                t = r(44020),
                l = r(47480);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(i || (i = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(o || (o = {}));
            var d = function (e) {
                var n = (0, l.A)(),
                    r = e.value,
                    i = e.children,
                    o = (0, s.__rest)(e, ['value', 'children']);
                return i(n.formatNumberToParts(r, o));
            };
            function a(e) {
                var n = function (n) {
                    var r = (0, l.A)(),
                        i = n.value,
                        o = n.children,
                        t = (0, s.__rest)(n, ['value', 'children']),
                        d = 'string' == typeof i ? new Date(i || 0) : i;
                    return o('formatDate' === e ? r.formatDateToParts(d, t) : r.formatTimeToParts(d, t));
                };
                return (n.displayName = o[e]), n;
            }
            function m(e) {
                var n = function (n) {
                    var r = (0, l.A)(),
                        i = n.value,
                        o = n.children,
                        d = (0, s.__rest)(n, ['value', 'children']),
                        a = r[e](i, d);
                    if ('function' == typeof o) return o(a);
                    var m = r.textComponent || t.Fragment;
                    return t.createElement(m, null, a);
                };
                return (n.displayName = i[e]), n;
            }
            (d.displayName = 'FormattedNumberParts'), (d.displayName = 'FormattedNumberParts');
            var h = m('formatDate');
            m('formatTime'), m('formatNumber'), m('formatList'), m('formatDisplayName'), a('formatDate'), a('formatTime');
        },
        43528: (e, n, r) => {
            'use strict';
            r.d(n, { a: () => o });
            var i = r(43696);
            let o = () => {
                let e = null,
                    n = new i.cJ(!1),
                    r = [];
                return {
                    isLoaded: n,
                    init: (i) => {
                        var o, s;
                        if (void 0 !== (null == (o = window.Ya) ? void 0 : o.Metrika2) && !n.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...i })),
                                    (n.value = !0),
                                    (s = e),
                                    r.forEach((e) => {
                                        e(s);
                                    }),
                                    (r.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && i.logger.error(e);
                            }
                    },
                    count: function (n) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [i]: n })
                            : r.push((e) => {
                                  e.params({ [i]: n });
                              });
                    },
                    hit: (n) => {
                        e
                            ? e.hit(n)
                            : r.push((e) => {
                                  e.hit(n);
                              });
                    },
                    reachGoal: (n, i) => {
                        if (!e) return void r.push((e) => e.reachGoal(n, i));
                        e.reachGoal(n, i);
                    },
                };
            };
        },
        45634: (e, n, r) => {
            Promise.resolve().then(r.bind(r, 21153)),
                Promise.resolve().then(r.bind(r, 85742)),
                Promise.resolve().then(r.bind(r, 13030)),
                Promise.resolve().then(r.bind(r, 50576)),
                Promise.resolve().then(r.bind(r, 59260)),
                Promise.resolve().then(r.bind(r, 56721)),
                Promise.resolve().then(r.bind(r, 30388)),
                Promise.resolve().then(r.bind(r, 85023)),
                Promise.resolve().then(r.bind(r, 20418)),
                Promise.resolve().then(r.bind(r, 54802)),
                Promise.resolve().then(r.bind(r, 70036)),
                Promise.resolve().then(r.bind(r, 62967)),
                Promise.resolve().then(r.bind(r, 91738)),
                Promise.resolve().then(r.bind(r, 25467)),
                Promise.resolve().then(r.bind(r, 87740)),
                Promise.resolve().then(r.bind(r, 89457)),
                Promise.resolve().then(r.bind(r, 70892)),
                Promise.resolve().then(r.bind(r, 90031)),
                Promise.resolve().then(r.bind(r, 90339)),
                Promise.resolve().then(r.bind(r, 57297)),
                Promise.resolve().then(r.bind(r, 14848)),
                Promise.resolve().then(r.bind(r, 82447)),
                Promise.resolve().then(r.bind(r, 61387)),
                Promise.resolve().then(r.bind(r, 31011)),
                Promise.resolve().then(r.bind(r, 1624)),
                Promise.resolve().then(r.bind(r, 41338)),
                Promise.resolve().then(r.bind(r, 18460)),
                Promise.resolve().then(r.bind(r, 79078)),
                Promise.resolve().then(r.bind(r, 89774)),
                Promise.resolve().then(r.bind(r, 462)),
                Promise.resolve().then(r.bind(r, 71851)),
                Promise.resolve().then(r.bind(r, 2545)),
                Promise.resolve().then(r.bind(r, 81940)),
                Promise.resolve().then(r.bind(r, 43345)),
                Promise.resolve().then(r.bind(r, 47893)),
                Promise.resolve().then(r.bind(r, 91629)),
                Promise.resolve().then(r.bind(r, 2816)),
                Promise.resolve().then(r.bind(r, 7932)),
                Promise.resolve().then(r.bind(r, 55959)),
                Promise.resolve().then(r.bind(r, 21654)),
                Promise.resolve().then(r.bind(r, 4233)),
                Promise.resolve().then(r.t.bind(r, 11602, 23)),
                Promise.resolve().then(r.bind(r, 60438)),
                Promise.resolve().then(r.bind(r, 52583)),
                Promise.resolve().then(r.bind(r, 55324)),
                Promise.resolve().then(r.bind(r, 30284)),
                Promise.resolve().then(r.bind(r, 39086)),
                Promise.resolve().then(r.t.bind(r, 52615, 23)),
                Promise.resolve().then(r.bind(r, 94481)),
                Promise.resolve().then(r.bind(r, 51099)),
                Promise.resolve().then(r.bind(r, 28865)),
                Promise.resolve().then(r.bind(r, 28311)),
                Promise.resolve().then(r.bind(r, 65185)),
                Promise.resolve().then(r.bind(r, 87395)),
                Promise.resolve().then(r.bind(r, 74351)),
                Promise.resolve().then(r.bind(r, 55880)),
                Promise.resolve().then(r.bind(r, 79845)),
                Promise.resolve().then(r.bind(r, 51945)),
                Promise.resolve().then(r.bind(r, 14144)),
                Promise.resolve().then(r.bind(r, 34753)),
                Promise.resolve().then(r.bind(r, 34211)),
                Promise.resolve().then(r.bind(r, 63065)),
                Promise.resolve().then(r.bind(r, 31441)),
                Promise.resolve().then(r.bind(r, 37577)),
                Promise.resolve().then(r.bind(r, 9451)),
                Promise.resolve().then(r.bind(r, 64987)),
                Promise.resolve().then(r.bind(r, 77188)),
                Promise.resolve().then(r.bind(r, 50509)),
                Promise.resolve().then(r.bind(r, 16945)),
                Promise.resolve().then(r.bind(r, 11503)),
                Promise.resolve().then(r.bind(r, 60131)),
                Promise.resolve().then(r.bind(r, 3873)),
                Promise.resolve().then(r.bind(r, 41936)),
                Promise.resolve().then(r.bind(r, 32322)),
                Promise.resolve().then(r.bind(r, 69410)),
                Promise.resolve().then(r.bind(r, 80210)),
                Promise.resolve().then(r.bind(r, 91638)),
                Promise.resolve().then(r.bind(r, 86482)),
                Promise.resolve().then(r.bind(r, 70505)),
                Promise.resolve().then(r.bind(r, 67226)),
                Promise.resolve().then(r.bind(r, 85253)),
                Promise.resolve().then(r.bind(r, 21895)),
                Promise.resolve().then(r.bind(r, 67939)),
                Promise.resolve().then(r.bind(r, 78533)),
                Promise.resolve().then(r.bind(r, 50823)),
                Promise.resolve().then(r.bind(r, 56159)),
                Promise.resolve().then(r.bind(r, 33801)),
                Promise.resolve().then(r.t.bind(r, 80799, 23)),
                Promise.resolve().then(r.bind(r, 79438)),
                Promise.resolve().then(r.bind(r, 28751)),
                Promise.resolve().then(r.bind(r, 91441)),
                Promise.resolve().then(r.bind(r, 75481)),
                Promise.resolve().then(r.bind(r, 69546)),
                Promise.resolve().then(r.bind(r, 52625)),
                Promise.resolve().then(r.bind(r, 75502)),
                Promise.resolve().then(r.bind(r, 96072)),
                Promise.resolve().then(r.bind(r, 88634)),
                Promise.resolve().then(r.bind(r, 76807)),
                Promise.resolve().then(r.bind(r, 10945)),
                Promise.resolve().then(r.bind(r, 85845)),
                Promise.resolve().then(r.t.bind(r, 14877, 23)),
                Promise.resolve().then(r.bind(r, 31899)),
                Promise.resolve().then(r.bind(r, 15545)),
                Promise.resolve().then(r.bind(r, 51089)),
                Promise.resolve().then(r.bind(r, 29025)),
                Promise.resolve().then(r.bind(r, 21897)),
                Promise.resolve().then(r.bind(r, 18037)),
                Promise.resolve().then(r.bind(r, 88913)),
                Promise.resolve().then(r.t.bind(r, 18843, 23)),
                Promise.resolve().then(r.bind(r, 15589)),
                Promise.resolve().then(r.bind(r, 93469)),
                Promise.resolve().then(r.bind(r, 30948)),
                Promise.resolve().then(r.bind(r, 95565)),
                Promise.resolve().then(r.bind(r, 9066)),
                Promise.resolve().then(r.bind(r, 88587)),
                Promise.resolve().then(r.bind(r, 20433)),
                Promise.resolve().then(r.bind(r, 47286)),
                Promise.resolve().then(r.bind(r, 70977)),
                Promise.resolve().then(r.bind(r, 27917)),
                Promise.resolve().then(r.bind(r, 58480)),
                Promise.resolve().then(r.bind(r, 60415)),
                Promise.resolve().then(r.bind(r, 63019)),
                Promise.resolve().then(r.bind(r, 22228)),
                Promise.resolve().then(r.bind(r, 37284)),
                Promise.resolve().then(r.bind(r, 7124)),
                Promise.resolve().then(r.bind(r, 93883)),
                Promise.resolve().then(r.bind(r, 60472)),
                Promise.resolve().then(r.bind(r, 91092)),
                Promise.resolve().then(r.bind(r, 36550)),
                Promise.resolve().then(r.bind(r, 12435)),
                Promise.resolve().then(r.bind(r, 1170)),
                Promise.resolve().then(r.bind(r, 98636)),
                Promise.resolve().then(r.bind(r, 96780)),
                Promise.resolve().then(r.bind(r, 47665)),
                Promise.resolve().then(r.bind(r, 34722)),
                Promise.resolve().then(r.bind(r, 23339)),
                Promise.resolve().then(r.bind(r, 76411)),
                Promise.resolve().then(r.bind(r, 55475)),
                Promise.resolve().then(r.bind(r, 23740)),
                Promise.resolve().then(r.bind(r, 2947)),
                Promise.resolve().then(r.bind(r, 92647)),
                Promise.resolve().then(r.bind(r, 27511)),
                Promise.resolve().then(r.bind(r, 89080)),
                Promise.resolve().then(r.bind(r, 70900)),
                Promise.resolve().then(r.bind(r, 11182)),
                Promise.resolve().then(r.bind(r, 95368)),
                Promise.resolve().then(r.bind(r, 12331)),
                Promise.resolve().then(r.bind(r, 52589)),
                Promise.resolve().then(r.bind(r, 83132)),
                Promise.resolve().then(r.bind(r, 7670)),
                Promise.resolve().then(r.bind(r, 395)),
                Promise.resolve().then(r.bind(r, 83543)),
                Promise.resolve().then(r.bind(r, 99303)),
                Promise.resolve().then(r.bind(r, 45648)),
                Promise.resolve().then(r.bind(r, 35042)),
                Promise.resolve().then(r.bind(r, 94311)),
                Promise.resolve().then(r.bind(r, 46650)),
                Promise.resolve().then(r.bind(r, 33405)),
                Promise.resolve().then(r.bind(r, 32101)),
                Promise.resolve().then(r.bind(r, 63329)),
                Promise.resolve().then(r.bind(r, 941)),
                Promise.resolve().then(r.bind(r, 58991)),
                Promise.resolve().then(r.bind(r, 42297)),
                Promise.resolve().then(r.bind(r, 7551)),
                Promise.resolve().then(r.bind(r, 75695)),
                Promise.resolve().then(r.bind(r, 42323)),
                Promise.resolve().then(r.bind(r, 91135)),
                Promise.resolve().then(r.bind(r, 14878)),
                Promise.resolve().then(r.bind(r, 26467)),
                Promise.resolve().then(r.bind(r, 41970)),
                Promise.resolve().then(r.bind(r, 16847)),
                Promise.resolve().then(r.bind(r, 78780)),
                Promise.resolve().then(r.bind(r, 16782)),
                Promise.resolve().then(r.bind(r, 77966)),
                Promise.resolve().then(r.bind(r, 31148)),
                Promise.resolve().then(r.bind(r, 76532)),
                Promise.resolve().then(r.bind(r, 38076)),
                Promise.resolve().then(r.bind(r, 94158)),
                Promise.resolve().then(r.bind(r, 14124)),
                Promise.resolve().then(r.bind(r, 86100)),
                Promise.resolve().then(r.bind(r, 59736)),
                Promise.resolve().then(r.bind(r, 20532)),
                Promise.resolve().then(r.bind(r, 80222)),
                Promise.resolve().then(r.bind(r, 93148)),
                Promise.resolve().then(r.bind(r, 43898)),
                Promise.resolve().then(r.bind(r, 23164)),
                Promise.resolve().then(r.bind(r, 71637)),
                Promise.resolve().then(r.bind(r, 87894)),
                Promise.resolve().then(r.bind(r, 72964)),
                Promise.resolve().then(r.bind(r, 2760)),
                Promise.resolve().then(r.bind(r, 31927)),
                Promise.resolve().then(r.bind(r, 97248)),
                Promise.resolve().then(r.bind(r, 57612)),
                Promise.resolve().then(r.bind(r, 5670)),
                Promise.resolve().then(r.bind(r, 70915)),
                Promise.resolve().then(r.bind(r, 8148)),
                Promise.resolve().then(r.bind(r, 32634)),
                Promise.resolve().then(r.bind(r, 508)),
                Promise.resolve().then(r.bind(r, 36363)),
                Promise.resolve().then(r.bind(r, 15958)),
                Promise.resolve().then(r.bind(r, 78685)),
                Promise.resolve().then(r.bind(r, 34476)),
                Promise.resolve().then(r.bind(r, 60917)),
                Promise.resolve().then(r.bind(r, 62520)),
                Promise.resolve().then(r.bind(r, 21389)),
                Promise.resolve().then(r.bind(r, 85546)),
                Promise.resolve().then(r.bind(r, 80185)),
                Promise.resolve().then(r.bind(r, 38285)),
                Promise.resolve().then(r.bind(r, 792)),
                Promise.resolve().then(r.bind(r, 34291)),
                Promise.resolve().then(r.bind(r, 31299)),
                Promise.resolve().then(r.bind(r, 56209)),
                Promise.resolve().then(r.bind(r, 44162)),
                Promise.resolve().then(r.bind(r, 93427)),
                Promise.resolve().then(r.bind(r, 57861)),
                Promise.resolve().then(r.bind(r, 30615)),
                Promise.resolve().then(r.bind(r, 34990)),
                Promise.resolve().then(r.bind(r, 16395)),
                Promise.resolve().then(r.bind(r, 75020)),
                Promise.resolve().then(r.bind(r, 32746)),
                Promise.resolve().then(r.bind(r, 2552)),
                Promise.resolve().then(r.bind(r, 7323)),
                Promise.resolve().then(r.bind(r, 68270)),
                Promise.resolve().then(r.bind(r, 99525)),
                Promise.resolve().then(r.bind(r, 44276)),
                Promise.resolve().then(r.bind(r, 49452)),
                Promise.resolve().then(r.bind(r, 68834)),
                Promise.resolve().then(r.bind(r, 67484)),
                Promise.resolve().then(r.bind(r, 6987)),
                Promise.resolve().then(r.bind(r, 748)),
                Promise.resolve().then(r.bind(r, 94756)),
                Promise.resolve().then(r.bind(r, 5798)),
                Promise.resolve().then(r.bind(r, 44817)),
                Promise.resolve().then(r.bind(r, 6181)),
                Promise.resolve().then(r.bind(r, 40846)),
                Promise.resolve().then(r.bind(r, 43762)),
                Promise.resolve().then(r.bind(r, 12364)),
                Promise.resolve().then(r.bind(r, 13660)),
                Promise.resolve().then(r.bind(r, 31543)),
                Promise.resolve().then(r.bind(r, 38224)),
                Promise.resolve().then(r.bind(r, 63210)),
                Promise.resolve().then(r.bind(r, 44697)),
                Promise.resolve().then(r.bind(r, 64802)),
                Promise.resolve().then(r.bind(r, 1443)),
                Promise.resolve().then(r.bind(r, 95297)),
                Promise.resolve().then(r.bind(r, 4552)),
                Promise.resolve().then(r.bind(r, 92648)),
                Promise.resolve().then(r.bind(r, 73572)),
                Promise.resolve().then(r.bind(r, 29992)),
                Promise.resolve().then(r.bind(r, 66230)),
                Promise.resolve().then(r.bind(r, 18611)),
                Promise.resolve().then(r.bind(r, 36082)),
                Promise.resolve().then(r.bind(r, 42398)),
                Promise.resolve().then(r.bind(r, 21155)),
                Promise.resolve().then(r.bind(r, 44161)),
                Promise.resolve().then(r.bind(r, 38317)),
                Promise.resolve().then(r.bind(r, 22883)),
                Promise.resolve().then(r.bind(r, 59790)),
                Promise.resolve().then(r.bind(r, 47933)),
                Promise.resolve().then(r.bind(r, 88586)),
                Promise.resolve().then(r.bind(r, 34414)),
                Promise.resolve().then(r.bind(r, 41855)),
                Promise.resolve().then(r.bind(r, 10668)),
                Promise.resolve().then(r.bind(r, 51969)),
                Promise.resolve().then(r.bind(r, 93319)),
                Promise.resolve().then(r.bind(r, 6644)),
                Promise.resolve().then(r.bind(r, 73416)),
                Promise.resolve().then(r.bind(r, 6043)),
                Promise.resolve().then(r.bind(r, 98216)),
                Promise.resolve().then(r.bind(r, 68808)),
                Promise.resolve().then(r.bind(r, 94584)),
                Promise.resolve().then(r.bind(r, 77272)),
                Promise.resolve().then(r.bind(r, 20908)),
                Promise.resolve().then(r.bind(r, 26216)),
                Promise.resolve().then(r.bind(r, 62440)),
                Promise.resolve().then(r.bind(r, 99270)),
                Promise.resolve().then(r.bind(r, 55046)),
                Promise.resolve().then(r.bind(r, 32856)),
                Promise.resolve().then(r.bind(r, 2726)),
                Promise.resolve().then(r.bind(r, 75690)),
                Promise.resolve().then(r.bind(r, 39695)),
                Promise.resolve().then(r.bind(r, 84929)),
                Promise.resolve().then(r.bind(r, 24301)),
                Promise.resolve().then(r.bind(r, 21485)),
                Promise.resolve().then(r.bind(r, 25992)),
                Promise.resolve().then(r.bind(r, 51692)),
                Promise.resolve().then(r.bind(r, 79374)),
                Promise.resolve().then(r.bind(r, 13514)),
                Promise.resolve().then(r.bind(r, 99974)),
                Promise.resolve().then(r.bind(r, 42260)),
                Promise.resolve().then(r.bind(r, 72866)),
                Promise.resolve().then(r.bind(r, 81338)),
                Promise.resolve().then(r.bind(r, 82630)),
                Promise.resolve().then(r.bind(r, 49058)),
                Promise.resolve().then(r.bind(r, 39857)),
                Promise.resolve().then(r.bind(r, 48167)),
                Promise.resolve().then(r.bind(r, 40461)),
                Promise.resolve().then(r.bind(r, 59884)),
                Promise.resolve().then(r.bind(r, 73144)),
                Promise.resolve().then(r.bind(r, 66458)),
                Promise.resolve().then(r.bind(r, 77286)),
                Promise.resolve().then(r.bind(r, 53431)),
                Promise.resolve().then(r.bind(r, 22605)),
                Promise.resolve().then(r.bind(r, 94714)),
                Promise.resolve().then(r.bind(r, 90479)),
                Promise.resolve().then(r.bind(r, 64697)),
                Promise.resolve().then(r.bind(r, 5356)),
                Promise.resolve().then(r.bind(r, 6374)),
                Promise.resolve().then(r.bind(r, 39260)),
                Promise.resolve().then(r.bind(r, 68816)),
                Promise.resolve().then(r.bind(r, 20372)),
                Promise.resolve().then(r.bind(r, 85208)),
                Promise.resolve().then(r.bind(r, 95296)),
                Promise.resolve().then(r.bind(r, 78029)),
                Promise.resolve().then(r.bind(r, 6063)),
                Promise.resolve().then(r.bind(r, 14876)),
                Promise.resolve().then(r.bind(r, 86216)),
                Promise.resolve().then(r.bind(r, 18744)),
                Promise.resolve().then(r.bind(r, 32438)),
                Promise.resolve().then(r.bind(r, 18792)),
                Promise.resolve().then(r.bind(r, 84520)),
                Promise.resolve().then(r.bind(r, 85816)),
                Promise.resolve().then(r.bind(r, 71193)),
                Promise.resolve().then(r.bind(r, 37934)),
                Promise.resolve().then(r.bind(r, 92852)),
                Promise.resolve().then(r.bind(r, 34740)),
                Promise.resolve().then(r.bind(r, 83373)),
                Promise.resolve().then(r.bind(r, 9322)),
                Promise.resolve().then(r.bind(r, 1137)),
                Promise.resolve().then(r.bind(r, 25641)),
                Promise.resolve().then(r.bind(r, 96579)),
                Promise.resolve().then(r.bind(r, 17389)),
                Promise.resolve().then(r.bind(r, 41817)),
                Promise.resolve().then(r.bind(r, 87413)),
                Promise.resolve().then(r.bind(r, 40739)),
                Promise.resolve().then(r.t.bind(r, 60738, 23));
        },
        50282: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageEmpty_root__LAXpY',
                icon: 'MyMusicDownloadedTracksPageEmpty_icon__PDhk2',
                title: 'MyMusicDownloadedTracksPageEmpty_title__g2w5R',
                text: 'MyMusicDownloadedTracksPageEmpty_text__8RJFg',
            };
        },
        52166: (e) => {
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
        54802: (e, n, r) => {
            'use strict';
            let i;
            r.d(n, { useMetrika: () => t });
            var o = r(44020),
                s = r(43528);
            let t = () => {
                let e = (i || (i = (0, s.a)()), i),
                    n = (0, o.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, o.useMemo)(() => ({ ...e, isLoaded: n }), [n]);
            };
        },
        55964: (e) => {
            e.exports = { root: 'MyMusicDownloadedTracksInfo_root__yIYHx' };
        },
        57249: (e, n, r) => {
            'use strict';
            e.exports = r.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        65438: (e, n, r) => {
            'use strict';
            r.d(n, { w: () => i.SomethingWentWrong });
            var i = r(36118);
        },
        71935: (e, n, r) => {
            'use strict';
            r.d(n, { FN: () => o, gj: () => i }), r(19569);
            let i = (e) => {
                    let { containerNodeRect: n, draggingNodeRect: r, transform: i } = e;
                    return r && n
                        ? (function (e, n, r) {
                              let i = { ...e };
                              return (
                                  n.top + e.y <= r.top ? (i.y = r.top - n.top) : n.bottom + e.y >= r.top + r.height && (i.y = r.top + r.height - n.bottom),
                                  n.left + e.x <= r.left ? (i.x = r.left - n.left) : n.right + e.x >= r.left + r.width && (i.x = r.left + r.width - n.right),
                                  i
                              );
                          })(i, r, n)
                        : i;
                },
                o = (e) => {
                    let { transform: n } = e;
                    return { ...n, x: 0 };
                };
        },
        75156: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageHeader_root__2vfuc',
                container: 'MyMusicDownloadedTracksPageHeader_container__hQ_wt',
                title: 'MyMusicDownloadedTracksPageHeader_title__Ncn5X',
                stickyTitle: 'MyMusicDownloadedTracksPageHeader_stickyTitle__Efl0U',
                playButton: 'MyMusicDownloadedTracksPageHeader_playButton__seWgC',
                stickyPlayButton: 'MyMusicDownloadedTracksPageHeader_stickyPlayButton__JVicd',
                titleContainer: 'MyMusicDownloadedTracksPageHeader_titleContainer__rLAkS',
                staticHeader: 'MyMusicDownloadedTracksPageHeader_staticHeader__LSVC8',
                important: 'MyMusicDownloadedTracksPageHeader_important__JIubq',
                stickyHeader: 'MyMusicDownloadedTracksPageHeader_stickyHeader__MuQh4',
            };
        },
        84326: (e, n, r) => {
            'use strict';
            r.d(n, { m: () => i });
            let i = (e) => 'object' == typeof e && null !== e && !Array.isArray(e) && 'source' in e && 'adfox' === e.source && 'type' in e && 'payload' in e;
        },
        88856: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPage_root__hZZwz',
                important: 'MyMusicDownloadedTracksPage_important__QP_t0',
                pageContainer: 'MyMusicDownloadedTracksPage_pageContainer__qu3hF',
                footer: 'MyMusicDownloadedTracksPage_footer__KI5OP',
                content: 'MyMusicDownloadedTracksPage_content__Iz1WY',
                trackShimmer: 'MyMusicDownloadedTracksPage_trackShimmer__MZgW3',
            };
        },
        89080: (e, n, r) => {
            'use strict';
            r.d(n, { MyMusicDownloadedTracksPage: () => S });
            var i = r(62936),
                o = r(79950),
                s = r(19718),
                t = r(44020),
                l = r(47480),
                d = r(8669),
                a = r(81959),
                m = r(59935),
                h = r(21202),
                v = r(65438),
                P = r(92229),
                b = r(66161),
                c = r(42561),
                u = r(85906),
                _ = r(88856),
                g = r.n(_),
                p = r(26731),
                x = r(85742),
                y = r(20418),
                f = r(55964),
                k = r.n(f);
            let D = (0, s.PA)(() => {
                var e;
                let {
                        myMusic: { downloadedTracks: n },
                    } = (0, c.Pjs)(),
                    r = (0, i.jsx)(y.Caption, { variant: 'span', size: 's', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                    o = [];
                (null == (e = n.tracks) ? void 0 : e.length) &&
                    o.push(
                        (0, i.jsx)(y.Caption, {
                            variant: 'span',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            children: (0, i.jsx)(p.A, { id: 'entity-names.tracks-count', values: { value: n.tracks.length } }),
                        }),
                    );
                let s = Math.floor(n.tracksDurationInMinutes / 60),
                    l = Math.floor(n.tracksDurationInMinutes % 60);
                return (
                    (s || l) &&
                        (o.push(r),
                        o.push(
                            (0, i.jsx)(y.Caption, {
                                variant: 'span',
                                size: 's',
                                weight: 'medium',
                                children: (0, i.jsx)(p.A, { id: 'time.hours-minutes', values: { hours: s, minutes: l } }),
                            }),
                        )),
                    (0, i.jsx)('div', { className: k().root, children: o.map((e, n) => (0, t.cloneElement)(e, { key: n })) })
                );
            });
            var M = r(75156),
                w = r.n(M);
            let T = (0, s.PA)(() => {
                let { isScrolling: e } = (0, t.useContext)(u.B9),
                    n = (0, c.W6M)(),
                    {
                        myMusic: { downloadedTracks: r },
                        settings: { isMobile: o },
                        slam: s,
                    } = (0, c.Pjs)(),
                    { from: l } = (0, c.fyy)({ pageId: c._Q$.OWN_TRACKS, blockId: c.UfI.TRACK_LIST }),
                    d = (0, c.PT7)(),
                    h = (0, c.brA)(),
                    { isPlaying: v, togglePlay: P } = (0, c.Dx4)({
                        playContextParams: {
                            contextData: { type: a.K.Various, meta: { id: c._Q$.DOWNLOADS_TRACKS }, from: l },
                            entitiesData: r.entitiesData,
                            loadContextMeta: !1,
                        },
                    }),
                    b = (0, m.c)(() => {
                        d() || (P(), h(!v));
                    });
                return (0, i.jsx)('header', {
                    className: w().root,
                    'aria-hidden': e,
                    children: (0, i.jsxs)('div', {
                        className: w().container,
                        children: [
                            !s.isOfflineModeEnabled &&
                                n.canBack &&
                                (0, i.jsx)(u.Lh, { withForwardControl: !1, withBackwardControl: n.canBack, shouldFocusOnMount: !e, buttonSize: 'xxs' }),
                            (0, i.jsxs)('div', {
                                className: w().titleContainer,
                                children: [
                                    (0, i.jsx)(y.Heading, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xs',
                                        lineClamp: 1,
                                        className: w().title,
                                        children: (0, i.jsx)(p.A, { id: 'offline.downloaded-tracks' }),
                                    }),
                                    (0, i.jsx)(D, {}),
                                ],
                            }),
                            !r.isEmpty &&
                                (0, i.jsx)(u.DM, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: v,
                                    onClick: b,
                                    className: w().playButton,
                                    ariaHidden: e,
                                    tabIndex: e ? -1 : 0,
                                    children: !o && (0, i.jsx)(p.A, { id: 'player-actions.listen' }),
                                }),
                        ],
                    }),
                });
            });
            var C = r(50282),
                N = r.n(C);
            let j = (0, s.PA)(() =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(T, {}),
                            (0, i.jsxs)('div', {
                                className: N().root,
                                children: [
                                    (0, i.jsx)(x.Icon, { className: N().icon, size: 'l', variant: 'download' }),
                                    (0, i.jsx)(y.Heading, {
                                        className: N().title,
                                        variant: 'div',
                                        size: 'xs',
                                        children: (0, i.jsx)(p.A, { id: 'offline.downloaded-empty' }),
                                    }),
                                    (0, i.jsx)(y.Caption, {
                                        className: N().text,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, i.jsx)(p.A, { id: 'offline.download-for-offline' }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ),
                A = (0, s.PA)(() => {
                    let { isScrolling: e } = (0, t.useContext)(u.B9),
                        n = (0, c.W6M)(),
                        {
                            myMusic: { downloadedTracks: r },
                            settings: { isMobile: s },
                            slam: l,
                        } = (0, c.Pjs)(),
                        { from: d } = (0, c.fyy)({ pageId: c._Q$.OWN_TRACKS, blockId: c.UfI.TRACK_LIST }),
                        h = (0, c.brA)(),
                        v = (0, c.PT7)(),
                        { isPlaying: P, togglePlay: b } = (0, c.Dx4)({
                            playContextParams: {
                                contextData: { type: a.K.Various, meta: { id: c._Q$.DOWNLOADS_TRACKS }, from: d },
                                entitiesData: r.entitiesData,
                                loadContextMeta: !1,
                            },
                        }),
                        _ = (0, m.c)(() => {
                            v() || (b(), h(!P));
                        });
                    return (0, i.jsx)(u.Y9, {
                        variant: u.Vw.COMPOSITE,
                        'aria-hidden': !e,
                        stickyChild: (0, i.jsxs)('div', {
                            className: w().container,
                            children: [
                                !l.isOfflineModeEnabled &&
                                    n.canBack &&
                                    (0, i.jsx)(u.Lh, { withForwardControl: !1, withBackwardControl: n.canBack, shouldFocusOnMount: !1, buttonSize: 'xxs' }),
                                (0, i.jsx)(y.Heading, {
                                    variant: 'h1',
                                    weight: 'bold',
                                    size: 'xs',
                                    lineClamp: 1,
                                    className: w().stickyTitle,
                                    children: (0, i.jsx)(p.A, { id: 'offline.downloaded-tracks' }),
                                }),
                                !r.isEmpty &&
                                    (0, i.jsx)(u.DM, {
                                        withRipple: !0,
                                        buttonVariant: 'default',
                                        radius: 'xxxl',
                                        size: 's',
                                        color: 'primary',
                                        iconSize: 'xxs',
                                        isPlaying: P,
                                        onClick: _,
                                        className: (0, o.$)(w().playButton, { [w().stickyPlayButton]: !s }),
                                        ariaHidden: !e,
                                        tabIndex: e ? 0 : -1,
                                        children: !s && (0, i.jsx)(p.A, { id: 'player-actions.listen' }),
                                    }),
                            ],
                        }),
                        stickyClassName: (0, o.$)(w().stickyHeader, w().important),
                        staticClassName: (0, o.$)(w().staticHeader, w().important),
                    });
                }),
                S = (0, s.PA)(() => {
                    var e;
                    let n = (0, c.jRO)(),
                        { contentScrollRef: r, setContentScrollRef: s } = (0, c.gKY)(),
                        { formatMessage: _ } = (0, l.A)(),
                        {
                            myMusic: { downloadedTracks: p },
                        } = (0, c.Pjs)(),
                        { from: x } = (0, c.fyy)({ pageId: c._Q$.OWN_TRACKS, blockId: c.UfI.TRACK_LIST }),
                        y = (0, c.wZZ)(),
                        f = (0, m.c)(() => {
                            n.tracksController && p.getData(n.tracksController);
                        });
                    (0, h.L)(f),
                        (0, t.useEffect)(() => {
                            p.isNeededToLoad && f();
                        }, [p.isNeededToLoad, f]),
                        (0, t.useEffect)(
                            () => () => {
                                p.reset();
                            },
                            [p],
                        ),
                        (0, c.Jzs)(p.isResolved);
                    let k = (0, t.useMemo)(
                        () => ({ Header: () => (0, i.jsx)(T, {}), Footer: () => (0, i.jsx)(u.A, { children: (0, i.jsx)(u.wi, { className: g().footer }) }) }),
                        [],
                    );
                    if (p.loadingState === c.GuX.REJECT) return (0, i.jsx)(v.w, {});
                    if (p.isEmpty) return (0, i.jsx)(j, {});
                    let D = (null == (e = p.items) ? void 0 : e.length) || 10;
                    return (0, i.jsx)(c.nVz, {
                        pageId: c._Q$.DOWNLOADS_TRACKS,
                        children: (0, i.jsx)(P.hO, {
                            scrollElement: r,
                            children: (0, i.jsxs)('div', {
                                className: g().pageContainer,
                                children: [
                                    (0, i.jsx)(A, {}),
                                    (0, i.jsx)(u.$$, {
                                        context: { listAriaLabel: _({ id: 'offline.downloaded-track-list' }) },
                                        className: (0, o.$)(g().root, g().important),
                                        listClassName: g().content,
                                        customComponents: k,
                                        totalCount: D,
                                        itemContentCallback: (e) => {
                                            var n;
                                            let r = null == (n = p.items) ? void 0 : n[e];
                                            return r
                                                ? (0, i.jsx)(
                                                      b.Kt,
                                                      {
                                                          track: r,
                                                          playContextParams: y(r.id, {
                                                              contextData: { type: a.K.Various, meta: { id: c._Q$.DOWNLOADS_TRACKS }, from: x },
                                                              entitiesData: p.entitiesData,
                                                              queueParams: { index: e, entityId: r.id },
                                                              loadContextMeta: !1,
                                                          }),
                                                      },
                                                      r.id,
                                                  )
                                                : (0, i.jsx)(u.DS, { isActive: !0, className: g().trackShimmer, variant: c.Xjt.PLAYLIST });
                                        },
                                        debounceDurationInMs: 300,
                                        initialItemCount: D,
                                        handleRef: s,
                                        shouldTriggerRangeChangedOn: [D],
                                        testId: d.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE,
                                    }),
                                ],
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
                85, 260, 3196, 403, 2537, 612, 3789, 5721, 2670, 1970, 226, 8037, 249, 1311, 7764, 6706, 6011, 5201, 2899, 5419, 2530, 5064, 3359, 881, 5980, 2561, 5906,
                4690, 4501, 9154, 914, 3197, 6161, 3912, 3189, 2632, 2991, 1002, 2687, 4622, 3889, 7511, 1009, 4670, 7358,
            ],
            () => e((e.s = 45634)),
        ),
            (_N_E = e.O());
    },
]);
