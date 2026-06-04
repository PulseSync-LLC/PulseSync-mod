(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5599],
    {
        7050: (e, r, n) => {
            'use strict';
            n.d(r, { m: () => o });
            let o = (e) => 'object' == typeof e && null !== e && !Array.isArray(e) && 'source' in e && 'adfox' === e.source && 'type' in e && 'payload' in e;
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
        32381: (e, r, n) => {
            'use strict';
            n.d(r, { w: () => o.SomethingWentWrong });
            var o = n(60194);
        },
        43740: (e, r, n) => {
            'use strict';
            n.d(r, { a: () => i });
            var o = n(46862);
            let i = () => {
                let e = null,
                    r = new o.cJ(!1),
                    n = [];
                return {
                    isLoaded: r,
                    init: (o) => {
                        var i, s;
                        if (void 0 !== (null == (i = window.Ya) ? void 0 : i.Metrika2) && !r.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...o })),
                                    (r.value = !0),
                                    (s = e),
                                    n.forEach((e) => {
                                        e(s);
                                    }),
                                    (n.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && o.logger.error(e);
                            }
                    },
                    count: function (r) {
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [o]: r })
                            : n.push((e) => {
                                  e.params({ [o]: r });
                              });
                    },
                    hit: (r) => {
                        e
                            ? e.hit(r)
                            : n.push((e) => {
                                  e.hit(r);
                              });
                    },
                    reachGoal: (r, o) => {
                        if (!e) return void n.push((e) => e.reachGoal(r, o));
                        e.reachGoal(r, o);
                    },
                };
            };
        },
        57249: (e, r, n) => {
            'use strict';
            e.exports = n.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        60194: (e, r, n) => {
            'use strict';
            n.d(r, { SomethingWentWrong: () => u });
            var o = n(32290),
                i = n(63618),
                s = n(96103),
                t = n(55178),
                l = n(60900),
                m = n(39407),
                d = n(63423),
                h = n(82586),
                v = n(71926),
                b = n(49574),
                P = n(44574),
                a = n(30310),
                c = n.n(a);
            let u = (0, s.PA)((e) => {
                let { className: r, withBackwardControl: n = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    a = s({ id: 'error-messages.something-went-wrong' });
                (0, b.CgZ)(a);
                let { sendRefreshEvent: u } = (0, b.cYT)(),
                    f = (0, t.useCallback)(() => {
                        u(), (window.location.href = b.Zyd.main.href);
                    }, [u]),
                    { contentRef: g } = (0, b.gKY)();
                return (0, o.jsxs)('div', {
                    className: (0, i.$)(c().root, r),
                    children: [
                        n &&
                            (0, o.jsx)(P.Lh, {
                                withBackwardFallback: '/',
                                className: (0, i.$)(c().navigation, { [c().navigation_desktop]: !g }),
                                withForwardControl: !1,
                            }),
                        (0, o.jsxs)('div', {
                            className: (0, i.$)(c().content, { [c().content_shrink]: !n }),
                            children: [
                                (0, o.jsx)(h.Icon, { className: c().icon, variant: 'attention', size: 'xxl' }),
                                (0, o.jsx)(v.Heading, { className: (0, i.$)(c().title, c().important), variant: 'h3', size: 'xs', children: a }),
                                (0, o.jsxs)(v.Caption, {
                                    className: (0, i.$)(c().text, c().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, o.jsx)(m.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, o.jsx)(d.$, {
                                    onClick: f,
                                    className: c().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, o.jsxs)(v.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, o.jsx)(m.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        74436: (e, r, n) => {
            Promise.resolve().then(n.bind(n, 75245)),
                Promise.resolve().then(n.bind(n, 82586)),
                Promise.resolve().then(n.bind(n, 50162)),
                Promise.resolve().then(n.bind(n, 7276)),
                Promise.resolve().then(n.bind(n, 29680)),
                Promise.resolve().then(n.bind(n, 86269)),
                Promise.resolve().then(n.bind(n, 79856)),
                Promise.resolve().then(n.bind(n, 15299)),
                Promise.resolve().then(n.bind(n, 71926)),
                Promise.resolve().then(n.bind(n, 76822)),
                Promise.resolve().then(n.bind(n, 520)),
                Promise.resolve().then(n.bind(n, 34883)),
                Promise.resolve().then(n.bind(n, 7462)),
                Promise.resolve().then(n.bind(n, 18583)),
                Promise.resolve().then(n.bind(n, 16472)),
                Promise.resolve().then(n.bind(n, 83861)),
                Promise.resolve().then(n.bind(n, 91253)),
                Promise.resolve().then(n.bind(n, 63371)),
                Promise.resolve().then(n.bind(n, 15807)),
                Promise.resolve().then(n.bind(n, 91853)),
                Promise.resolve().then(n.bind(n, 96036)),
                Promise.resolve().then(n.bind(n, 86955)),
                Promise.resolve().then(n.bind(n, 11067)),
                Promise.resolve().then(n.bind(n, 5942)),
                Promise.resolve().then(n.bind(n, 70390)),
                Promise.resolve().then(n.bind(n, 43742)),
                Promise.resolve().then(n.bind(n, 78176)),
                Promise.resolve().then(n.bind(n, 45754)),
                Promise.resolve().then(n.bind(n, 22370)),
                Promise.resolve().then(n.bind(n, 10466)),
                Promise.resolve().then(n.bind(n, 41677)),
                Promise.resolve().then(n.bind(n, 73749)),
                Promise.resolve().then(n.bind(n, 78795)),
                Promise.resolve().then(n.bind(n, 56797)),
                Promise.resolve().then(n.bind(n, 96849)),
                Promise.resolve().then(n.bind(n, 26089)),
                Promise.resolve().then(n.bind(n, 46789)),
                Promise.resolve().then(n.bind(n, 99872)),
                Promise.resolve().then(n.bind(n, 84427)),
                Promise.resolve().then(n.bind(n, 19522)),
                Promise.resolve().then(n.bind(n, 42181)),
                Promise.resolve().then(n.t.bind(n, 64146, 23)),
                Promise.resolve().then(n.bind(n, 79589)),
                Promise.resolve().then(n.bind(n, 13819)),
                Promise.resolve().then(n.bind(n, 61744)),
                Promise.resolve().then(n.bind(n, 17280)),
                Promise.resolve().then(n.bind(n, 47610)),
                Promise.resolve().then(n.t.bind(n, 96871, 23)),
                Promise.resolve().then(n.bind(n, 53109)),
                Promise.resolve().then(n.bind(n, 61303)),
                Promise.resolve().then(n.bind(n, 96502)),
                Promise.resolve().then(n.bind(n, 69523)),
                Promise.resolve().then(n.bind(n, 17084)),
                Promise.resolve().then(n.bind(n, 60807)),
                Promise.resolve().then(n.bind(n, 88467)),
                Promise.resolve().then(n.bind(n, 8588)),
                Promise.resolve().then(n.bind(n, 73169)),
                Promise.resolve().then(n.bind(n, 83917)),
                Promise.resolve().then(n.bind(n, 73141)),
                Promise.resolve().then(n.bind(n, 73192)),
                Promise.resolve().then(n.bind(n, 11674)),
                Promise.resolve().then(n.bind(n, 10511)),
                Promise.resolve().then(n.bind(n, 44277)),
                Promise.resolve().then(n.bind(n, 47989)),
                Promise.resolve().then(n.bind(n, 54869)),
                Promise.resolve().then(n.bind(n, 39055)),
                Promise.resolve().then(n.bind(n, 12779)),
                Promise.resolve().then(n.bind(n, 96919)),
                Promise.resolve().then(n.bind(n, 8032)),
                Promise.resolve().then(n.bind(n, 85697)),
                Promise.resolve().then(n.bind(n, 52981)),
                Promise.resolve().then(n.bind(n, 2355)),
                Promise.resolve().then(n.bind(n, 10431)),
                Promise.resolve().then(n.bind(n, 83557)),
                Promise.resolve().then(n.bind(n, 66436)),
                Promise.resolve().then(n.bind(n, 54203)),
                Promise.resolve().then(n.bind(n, 58294)),
                Promise.resolve().then(n.bind(n, 23030)),
                Promise.resolve().then(n.bind(n, 74804)),
                Promise.resolve().then(n.bind(n, 60214)),
                Promise.resolve().then(n.bind(n, 66349)),
                Promise.resolve().then(n.bind(n, 64089)),
                Promise.resolve().then(n.bind(n, 10057)),
                Promise.resolve().then(n.bind(n, 2755)),
                Promise.resolve().then(n.bind(n, 20183)),
                Promise.resolve().then(n.bind(n, 85305)),
                Promise.resolve().then(n.bind(n, 58875)),
                Promise.resolve().then(n.bind(n, 17123)),
                Promise.resolve().then(n.bind(n, 48472)),
                Promise.resolve().then(n.t.bind(n, 75487, 23)),
                Promise.resolve().then(n.bind(n, 10583)),
                Promise.resolve().then(n.bind(n, 77435)),
                Promise.resolve().then(n.bind(n, 89549)),
                Promise.resolve().then(n.bind(n, 88446)),
                Promise.resolve().then(n.bind(n, 40126)),
                Promise.resolve().then(n.bind(n, 48104)),
                Promise.resolve().then(n.bind(n, 7474)),
                Promise.resolve().then(n.bind(n, 21564)),
                Promise.resolve().then(n.bind(n, 76238)),
                Promise.resolve().then(n.bind(n, 42383)),
                Promise.resolve().then(n.bind(n, 73325)),
                Promise.resolve().then(n.bind(n, 12113)),
                Promise.resolve().then(n.t.bind(n, 20541, 23)),
                Promise.resolve().then(n.bind(n, 57223)),
                Promise.resolve().then(n.bind(n, 19429)),
                Promise.resolve().then(n.bind(n, 29869)),
                Promise.resolve().then(n.bind(n, 69675)),
                Promise.resolve().then(n.bind(n, 5749)),
                Promise.resolve().then(n.bind(n, 48977)),
                Promise.resolve().then(n.bind(n, 60101)),
                Promise.resolve().then(n.t.bind(n, 90011, 23)),
                Promise.resolve().then(n.bind(n, 79897)),
                Promise.resolve().then(n.bind(n, 80097)),
                Promise.resolve().then(n.bind(n, 29001)),
                Promise.resolve().then(n.bind(n, 38009)),
                Promise.resolve().then(n.bind(n, 50476)),
                Promise.resolve().then(n.bind(n, 83460)),
                Promise.resolve().then(n.bind(n, 64538)),
                Promise.resolve().then(n.bind(n, 27594)),
                Promise.resolve().then(n.bind(n, 84141)),
                Promise.resolve().then(n.bind(n, 18729)),
                Promise.resolve().then(n.bind(n, 5420)),
                Promise.resolve().then(n.bind(n, 54171)),
                Promise.resolve().then(n.bind(n, 6647)),
                Promise.resolve().then(n.bind(n, 1456)),
                Promise.resolve().then(n.bind(n, 27616)),
                Promise.resolve().then(n.bind(n, 68912)),
                Promise.resolve().then(n.bind(n, 20477)),
                Promise.resolve().then(n.bind(n, 13486)),
                Promise.resolve().then(n.bind(n, 72732)),
                Promise.resolve().then(n.bind(n, 4664)),
                Promise.resolve().then(n.bind(n, 22762)),
                Promise.resolve().then(n.bind(n, 61113)),
                Promise.resolve().then(n.bind(n, 12326)),
                Promise.resolve().then(n.bind(n, 16710)),
                Promise.resolve().then(n.bind(n, 36916)),
                Promise.resolve().then(n.bind(n, 2413)),
                Promise.resolve().then(n.bind(n, 7902)),
                Promise.resolve().then(n.bind(n, 14631)),
                Promise.resolve().then(n.bind(n, 94631)),
                Promise.resolve().then(n.bind(n, 69951)),
                Promise.resolve().then(n.bind(n, 49464)),
                Promise.resolve().then(n.bind(n, 79727)),
                Promise.resolve().then(n.bind(n, 87155)),
                Promise.resolve().then(n.bind(n, 2994)),
                Promise.resolve().then(n.bind(n, 71768)),
                Promise.resolve().then(n.bind(n, 65650)),
                Promise.resolve().then(n.bind(n, 59564)),
                Promise.resolve().then(n.bind(n, 9471)),
                Promise.resolve().then(n.bind(n, 78305)),
                Promise.resolve().then(n.bind(n, 70632)),
                Promise.resolve().then(n.bind(n, 35058)),
                Promise.resolve().then(n.bind(n, 85743)),
                Promise.resolve().then(n.bind(n, 90923)),
                Promise.resolve().then(n.bind(n, 17595)),
                Promise.resolve().then(n.bind(n, 41540)),
                Promise.resolve().then(n.bind(n, 48462)),
                Promise.resolve().then(n.bind(n, 8868)),
                Promise.resolve().then(n.bind(n, 12350)),
                Promise.resolve().then(n.bind(n, 95481)),
                Promise.resolve().then(n.bind(n, 47745)),
                Promise.resolve().then(n.bind(n, 12989)),
                Promise.resolve().then(n.bind(n, 2969)),
                Promise.resolve().then(n.bind(n, 84051)),
                Promise.resolve().then(n.bind(n, 27789)),
                Promise.resolve().then(n.bind(n, 70435)),
                Promise.resolve().then(n.bind(n, 19875)),
                Promise.resolve().then(n.bind(n, 54391)),
                Promise.resolve().then(n.bind(n, 63529)),
                Promise.resolve().then(n.bind(n, 73818)),
                Promise.resolve().then(n.bind(n, 20599)),
                Promise.resolve().then(n.bind(n, 84782)),
                Promise.resolve().then(n.bind(n, 30915)),
                Promise.resolve().then(n.bind(n, 70608)),
                Promise.resolve().then(n.bind(n, 18746)),
                Promise.resolve().then(n.bind(n, 71610)),
                Promise.resolve().then(n.bind(n, 23352)),
                Promise.resolve().then(n.bind(n, 10936)),
                Promise.resolve().then(n.bind(n, 2792)),
                Promise.resolve().then(n.bind(n, 22714)),
                Promise.resolve().then(n.bind(n, 37240)),
                Promise.resolve().then(n.bind(n, 3064)),
                Promise.resolve().then(n.bind(n, 51012)),
                Promise.resolve().then(n.bind(n, 9848)),
                Promise.resolve().then(n.bind(n, 47498)),
                Promise.resolve().then(n.bind(n, 8152)),
                Promise.resolve().then(n.bind(n, 43474)),
                Promise.resolve().then(n.bind(n, 46200)),
                Promise.resolve().then(n.bind(n, 5537)),
                Promise.resolve().then(n.bind(n, 34186)),
                Promise.resolve().then(n.bind(n, 56008)),
                Promise.resolve().then(n.bind(n, 67732)),
                Promise.resolve().then(n.bind(n, 30787)),
                Promise.resolve().then(n.bind(n, 65476)),
                Promise.resolve().then(n.bind(n, 83416)),
                Promise.resolve().then(n.bind(n, 31010)),
                Promise.resolve().then(n.bind(n, 19383)),
                Promise.resolve().then(n.bind(n, 3313)),
                Promise.resolve().then(n.bind(n, 81619)),
                Promise.resolve().then(n.bind(n, 83808)),
                Promise.resolve().then(n.bind(n, 22191)),
                Promise.resolve().then(n.bind(n, 14858)),
                Promise.resolve().then(n.bind(n, 61945)),
                Promise.resolve().then(n.bind(n, 83920)),
                Promise.resolve().then(n.bind(n, 49545)),
                Promise.resolve().then(n.bind(n, 3796)),
                Promise.resolve().then(n.bind(n, 40953)),
                Promise.resolve().then(n.bind(n, 30542)),
                Promise.resolve().then(n.bind(n, 59121)),
                Promise.resolve().then(n.bind(n, 71773)),
                Promise.resolve().then(n.bind(n, 34284)),
                Promise.resolve().then(n.bind(n, 46151)),
                Promise.resolve().then(n.bind(n, 32087)),
                Promise.resolve().then(n.bind(n, 5701)),
                Promise.resolve().then(n.bind(n, 10659)),
                Promise.resolve().then(n.bind(n, 68135)),
                Promise.resolve().then(n.bind(n, 75265)),
                Promise.resolve().then(n.bind(n, 36321)),
                Promise.resolve().then(n.bind(n, 29098)),
                Promise.resolve().then(n.bind(n, 92191)),
                Promise.resolve().then(n.bind(n, 27120)),
                Promise.resolve().then(n.bind(n, 53022)),
                Promise.resolve().then(n.bind(n, 22748)),
                Promise.resolve().then(n.bind(n, 84199)),
                Promise.resolve().then(n.bind(n, 81218)),
                Promise.resolve().then(n.bind(n, 90169)),
                Promise.resolve().then(n.bind(n, 6429)),
                Promise.resolve().then(n.bind(n, 44128)),
                Promise.resolve().then(n.bind(n, 31286)),
                Promise.resolve().then(n.bind(n, 92496)),
                Promise.resolve().then(n.bind(n, 21183)),
                Promise.resolve().then(n.bind(n, 59888)),
                Promise.resolve().then(n.bind(n, 95112)),
                Promise.resolve().then(n.bind(n, 57594)),
                Promise.resolve().then(n.bind(n, 26069)),
                Promise.resolve().then(n.bind(n, 4433)),
                Promise.resolve().then(n.bind(n, 50)),
                Promise.resolve().then(n.bind(n, 11262)),
                Promise.resolve().then(n.bind(n, 80792)),
                Promise.resolve().then(n.bind(n, 88424)),
                Promise.resolve().then(n.bind(n, 13528)),
                Promise.resolve().then(n.bind(n, 49932)),
                Promise.resolve().then(n.bind(n, 58534)),
                Promise.resolve().then(n.bind(n, 90357)),
                Promise.resolve().then(n.bind(n, 97755)),
                Promise.resolve().then(n.bind(n, 8097)),
                Promise.resolve().then(n.bind(n, 27373)),
                Promise.resolve().then(n.bind(n, 19620)),
                Promise.resolve().then(n.bind(n, 32156)),
                Promise.resolve().then(n.bind(n, 61376)),
                Promise.resolve().then(n.bind(n, 98148)),
                Promise.resolve().then(n.bind(n, 49522)),
                Promise.resolve().then(n.bind(n, 28563)),
                Promise.resolve().then(n.bind(n, 49518)),
                Promise.resolve().then(n.bind(n, 49346)),
                Promise.resolve().then(n.bind(n, 38223)),
                Promise.resolve().then(n.bind(n, 58237)),
                Promise.resolve().then(n.bind(n, 22369)),
                Promise.resolve().then(n.bind(n, 56367)),
                Promise.resolve().then(n.bind(n, 4914)),
                Promise.resolve().then(n.bind(n, 59833)),
                Promise.resolve().then(n.bind(n, 41566)),
                Promise.resolve().then(n.bind(n, 23042)),
                Promise.resolve().then(n.bind(n, 83755)),
                Promise.resolve().then(n.bind(n, 25160)),
                Promise.resolve().then(n.bind(n, 43679)),
                Promise.resolve().then(n.bind(n, 21027)),
                Promise.resolve().then(n.bind(n, 99752)),
                Promise.resolve().then(n.bind(n, 41972)),
                Promise.resolve().then(n.bind(n, 37711)),
                Promise.resolve().then(n.bind(n, 4820)),
                Promise.resolve().then(n.bind(n, 36011)),
                Promise.resolve().then(n.bind(n, 14388)),
                Promise.resolve().then(n.bind(n, 28724)),
                Promise.resolve().then(n.bind(n, 56664)),
                Promise.resolve().then(n.bind(n, 41812)),
                Promise.resolve().then(n.bind(n, 38420)),
                Promise.resolve().then(n.bind(n, 54290)),
                Promise.resolve().then(n.bind(n, 78570)),
                Promise.resolve().then(n.bind(n, 26452)),
                Promise.resolve().then(n.bind(n, 38936)),
                Promise.resolve().then(n.bind(n, 13798)),
                Promise.resolve().then(n.bind(n, 58054)),
                Promise.resolve().then(n.bind(n, 15509)),
                Promise.resolve().then(n.bind(n, 74694)),
                Promise.resolve().then(n.bind(n, 85377)),
                Promise.resolve().then(n.bind(n, 1444)),
                Promise.resolve().then(n.bind(n, 92744)),
                Promise.resolve().then(n.bind(n, 61258)),
                Promise.resolve().then(n.bind(n, 5592)),
                Promise.resolve().then(n.bind(n, 9634)),
                Promise.resolve().then(n.bind(n, 17584)),
                Promise.resolve().then(n.bind(n, 12894)),
                Promise.resolve().then(n.bind(n, 2694)),
                Promise.resolve().then(n.bind(n, 71730)),
                Promise.resolve().then(n.bind(n, 22734)),
                Promise.resolve().then(n.bind(n, 56037)),
                Promise.resolve().then(n.bind(n, 30584)),
                Promise.resolve().then(n.bind(n, 76385)),
                Promise.resolve().then(n.bind(n, 56059)),
                Promise.resolve().then(n.bind(n, 10180)),
                Promise.resolve().then(n.bind(n, 90326)),
                Promise.resolve().then(n.bind(n, 40229)),
                Promise.resolve().then(n.bind(n, 80195)),
                Promise.resolve().then(n.bind(n, 8264)),
                Promise.resolve().then(n.bind(n, 3630)),
                Promise.resolve().then(n.bind(n, 89363)),
                Promise.resolve().then(n.bind(n, 96677)),
                Promise.resolve().then(n.bind(n, 95432)),
                Promise.resolve().then(n.bind(n, 32562)),
                Promise.resolve().then(n.bind(n, 56568)),
                Promise.resolve().then(n.bind(n, 79884)),
                Promise.resolve().then(n.bind(n, 90048)),
                Promise.resolve().then(n.bind(n, 31236)),
                Promise.resolve().then(n.bind(n, 37340)),
                Promise.resolve().then(n.bind(n, 58345)),
                Promise.resolve().then(n.bind(n, 65755)),
                Promise.resolve().then(n.bind(n, 32152)),
                Promise.resolve().then(n.bind(n, 61748)),
                Promise.resolve().then(n.bind(n, 86844)),
                Promise.resolve().then(n.bind(n, 17106)),
                Promise.resolve().then(n.bind(n, 60244)),
                Promise.resolve().then(n.bind(n, 29268)),
                Promise.resolve().then(n.bind(n, 11260)),
                Promise.resolve().then(n.bind(n, 34925)),
                Promise.resolve().then(n.bind(n, 94218)),
                Promise.resolve().then(n.bind(n, 45257)),
                Promise.resolve().then(n.bind(n, 4008)),
                Promise.resolve().then(n.bind(n, 88523)),
                Promise.resolve().then(n.bind(n, 44390)),
                Promise.resolve().then(n.bind(n, 29926)),
                Promise.resolve().then(n.bind(n, 71079)),
                Promise.resolve().then(n.bind(n, 68009)),
                Promise.resolve().then(n.bind(n, 82219)),
                Promise.resolve().then(n.bind(n, 71913)),
                Promise.resolve().then(n.bind(n, 40609)),
                Promise.resolve().then(n.t.bind(n, 31906, 23));
        },
        76822: (e, r, n) => {
            'use strict';
            let o;
            n.d(r, { useMetrika: () => t });
            var i = n(55178),
                s = n(43740);
            let t = () => {
                let e = (o || (o = (0, s.a)()), o),
                    r = (0, i.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, i.useMemo)(() => ({ ...e, isLoaded: r }), [r]);
            };
        },
        79259: (e, r, n) => {
            'use strict';
            n.d(r, { FN: () => i, gj: () => o }), n(81829);
            let o = (e) => {
                    let { containerNodeRect: r, draggingNodeRect: n, transform: o } = e;
                    return n && r
                        ? (function (e, r, n) {
                              let o = { ...e };
                              return (
                                  r.top + e.y <= n.top ? (o.y = n.top - r.top) : r.bottom + e.y >= n.top + n.height && (o.y = n.top + n.height - r.bottom),
                                  r.left + e.x <= n.left ? (o.x = n.left - r.left) : r.right + e.x >= n.left + n.width && (o.x = n.left + n.width - r.right),
                                  o
                              );
                          })(o, n, r)
                        : o;
                },
                i = (e) => {
                    let { transform: r } = e;
                    return { ...r, x: 0 };
                };
        },
        81354: (e, r, n) => {
            'use strict';
            n.d(r, { XU: () => v });
            var o,
                i,
                s = n(30782),
                t = n(55178),
                l = n(60900);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(o || (o = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(i || (i = {}));
            var m = function (e) {
                var r = (0, l.A)(),
                    n = e.value,
                    o = e.children,
                    i = (0, s.__rest)(e, ['value', 'children']);
                return o(r.formatNumberToParts(n, i));
            };
            function d(e) {
                var r = function (r) {
                    var n = (0, l.A)(),
                        o = r.value,
                        i = r.children,
                        t = (0, s.__rest)(r, ['value', 'children']),
                        m = 'string' == typeof o ? new Date(o || 0) : o;
                    return i('formatDate' === e ? n.formatDateToParts(m, t) : n.formatTimeToParts(m, t));
                };
                return (r.displayName = i[e]), r;
            }
            function h(e) {
                var r = function (r) {
                    var n = (0, l.A)(),
                        o = r.value,
                        i = r.children,
                        m = (0, s.__rest)(r, ['value', 'children']),
                        d = n[e](o, m);
                    if ('function' == typeof i) return i(d);
                    var h = n.textComponent || t.Fragment;
                    return t.createElement(h, null, d);
                };
                return (r.displayName = o[e]), r;
            }
            (m.displayName = 'FormattedNumberParts'), (m.displayName = 'FormattedNumberParts');
            var v = h('formatDate');
            h('formatTime'), h('formatNumber'), h('formatList'), h('formatDisplayName'), d('formatDate'), d('formatTime');
        },
    },
]);
