(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2632],
    {
        7591: (e) => {
            e.exports = {
                root: 'VibeAgentCard_root__GVtqu',
                cover: 'VibeAgentCard_cover__In0Nz',
                controls: 'VibeAgentCard_controls__yXgoW',
                additionals_hide: 'VibeAgentCard_additionals_hide__GpV7Z',
                control: 'VibeAgentCard_control__toXgO',
                playButton: 'VibeAgentCard_playButton__5YkZS',
                pinButton: 'VibeAgentCard_pinButton___f4vw',
            };
        },
        8429: (e) => {
            e.exports = {
                root: 'VibeCard_root__9TDjP',
                playingAnimation: 'VibeCard_playingAnimation__iRgvh',
                cover: 'VibeCard_cover__LbX93',
                image: 'VibeCard_image__luolD',
                controls: 'VibeCard_controls__CcEVx',
                controls_isPlaying: 'VibeCard_controls_isPlaying__1_Ass',
                important: 'VibeCard_important__WPWqc',
                control: 'VibeCard_control__SM3H4',
                playControl: 'VibeCard_playControl__pZxq5',
                playButton: 'VibeCard_playButton__LWepP',
            };
        },
        14323: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return (e.SMALL = 'small'), (e.LARGE = 'large'), e;
            })({});
        },
        16803: (e) => {
            e.exports = { root: 'NotificationPin_root__DBEub', view: 'NotificationPin_view__daGc_', image: 'NotificationPin_image__o5F7B' };
        },
        20519: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => n });
            var i = a(42561);
            let r = [
                    {
                        [i.Sxu.Dark]: 'avatars.mds.yandex.net/get-music-misc/28592/img.69dcb1ef3dacc851cba63a44/%%',
                        [i.Sxu.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa855b357516550b967b1/%%',
                    },
                    {
                        [i.Sxu.Dark]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69dcb1f03dacc851cba63a45/%%',
                        [i.Sxu.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa856b357516550b967b2/%%',
                    },
                    {
                        [i.Sxu.Dark]: 'avatars.mds.yandex.net/get-music-misc/28592/img.69dcb1ee3dacc851cba63a43/%%',
                        [i.Sxu.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa854b357516550b967b0/%%',
                    },
                ],
                n = (e) => {
                    var t, a;
                    return null !=
                        (a =
                            r[
                                (function (e) {
                                    let t = 0;
                                    for (let a = 0; a < e.length; a++) t = (Math.imul(t, 31) + e.charCodeAt(a)) >>> 0;
                                    return t;
                                })(null != (t = null == e ? void 0 : e.seeds[0]) ? t : '') % r.length
                            ])
                        ? a
                        : r[0];
                };
        },
        21895: (e, t, a) => {
            'use strict';
            a.d(t, { QueryToVibeSimple: () => m });
            var i = a(62936),
                r = a(79950),
                n = a(42561),
                o = a(20519),
                s = a(53914),
                l = a(83405),
                d = a.n(l);
            let c = {
                    [n.Sxu.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_history.lottie',
                    [n.Sxu.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_history.lottie',
                },
                u = {
                    loading: {},
                    idle: { frameRange: { start: 0, end: 0 } },
                    playing: { frameRange: { start: 0 } },
                    paused: { frameRange: { start: 0 }, mode: 'reverse' },
                },
                m = (e) => {
                    let { className: t, ...a } = e,
                        n = (0, o.p)(a.vibe);
                    return (0, i.jsx)(s.D, { className: (0, r.$)(d().root, t), lumenImages: n, animationByTheme: c, animationConfig: u, ...a });
                };
        },
        27757: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'SearchVibeCard_root__9otOP',
                playButton: 'SearchVibeCard_playButton__ZNWNz',
                playButtonIcon: 'SearchVibeCard_playButtonIcon__GJrNv',
            };
        },
        32632: (e, t, a) => {
            'use strict';
            a.d(t, {
                cw: () => F.QueryToVibe,
                Ks: () => h.QueryToVibeSimple,
                H2: () => E.SearchVibeCard,
                yi: () => x.VibeAgentCard,
                hl: () => _.h,
                xy: () => V.VibeButton,
                Eb: () => V.VibeButtonShimmer,
                Zn: () => f.VibeCard,
                Gh: () => D,
                nr: () => w.n,
                er: () => n,
                OH: () => g,
                A7: () => p.useOnPinClick,
                fp: () => C,
                KU: () => r.K,
                lb: () => y,
            });
            var i = a(51606),
                r = a(49698);
            let n = (e) => {
                var t, a, n, o;
                return (0, i.wg)({
                    title: e.title,
                    description: e.header,
                    seeds: e.seeds,
                    animationUrl: e.animationUrl,
                    backgroundImageUrl: e.backgroundImageUrl,
                    imageUrl: e.imageUrl,
                    colors: {
                        average: null != (n = null == (t = e.colors) ? void 0 : t.average) ? n : '',
                        waveText: null != (o = null == (a = e.colors) ? void 0 : a.waveText) ? o : '',
                    },
                    agent: (0, r.K)(e.agent),
                });
            };
            var o = a(42561);
            let s = Array.from({ length: 16 }, () => '#000000'),
                l = {
                    carmine: [
                        '#F5002E',
                        '#CF0027',
                        '#AF0021',
                        '#94001C',
                        '#7C0017',
                        '#690014',
                        '#590011',
                        '#4B000E',
                        '#40000C',
                        '#36000A',
                        '#2D0008',
                        '#250007',
                        '#1D0005',
                        '#140004',
                        '#0B0002',
                        '#000000',
                    ],
                    fuchsia: [
                        '#F5007C',
                        '#CF0069',
                        '#AF0059',
                        '#94004B',
                        '#7C003F',
                        '#690035',
                        '#59002D',
                        '#4B0026',
                        '#400020',
                        '#36001B',
                        '#2D0017',
                        '#250013',
                        '#1D000F',
                        '#14000A',
                        '#0B0006',
                        '#000000',
                    ],
                    coral: [
                        '#F53700',
                        '#CF2F00',
                        '#AF2700',
                        '#942100',
                        '#7C1C00',
                        '#691800',
                        '#591400',
                        '#4B1100',
                        '#400E00',
                        '#360C00',
                        '#2D0A00',
                        '#250800',
                        '#1D0700',
                        '#140400',
                        '#0B0200',
                        '#000000',
                    ],
                    tangerine: [
                        '#F56E00',
                        '#CF5D00',
                        '#AF4F00',
                        '#944200',
                        '#7C3800',
                        '#692F00',
                        '#592800',
                        '#4B2200',
                        '#401D00',
                        '#361800',
                        '#2D1400',
                        '#251100',
                        '#1D0D00',
                        '#140900',
                        '#0B0500',
                        '#000000',
                    ],
                    clover: [
                        '#34C03E',
                        '#2CA334',
                        '#25892C',
                        '#1F7425',
                        '#1A621F',
                        '#16521B',
                        '#134516',
                        '#103B13',
                        '#0D3210',
                        '#0B2A0E',
                        '#0A230B',
                        '#081D09',
                        '#061707',
                        '#041005',
                        '#020903',
                        '#000000',
                    ],
                    emerald: [
                        '#00F5A9',
                        '#00CF8F',
                        '#00AF79',
                        '#009466',
                        '#007C56',
                        '#006948',
                        '#00593D',
                        '#004B34',
                        '#00402C',
                        '#003625',
                        '#002D1F',
                        '#002519',
                        '#001D14',
                        '#00140E',
                        '#000B08',
                        '#000000',
                    ],
                    turquoise: [
                        '#00F5CD',
                        '#00CFAE',
                        '#00AF93',
                        '#00947C',
                        '#007C68',
                        '#006958',
                        '#00594A',
                        '#004B3F',
                        '#004035',
                        '#00362D',
                        '#002D26',
                        '#00251F',
                        '#001D18',
                        '#001411',
                        '#000B09',
                        '#000000',
                    ],
                    aquamarine: [
                        '#00D6F5',
                        '#00B5CF',
                        '#0099AF',
                        '#008194',
                        '#006D7C',
                        '#005C69',
                        '#004D59',
                        '#00424B',
                        '#003840',
                        '#002F36',
                        '#00272D',
                        '#002025',
                        '#00191D',
                        '#001214',
                        '#000A0B',
                        '#000000',
                    ],
                    glacier: [
                        '#5C8E9B',
                        '#4E7883',
                        '#42666F',
                        '#37565D',
                        '#2F484F',
                        '#273D42',
                        '#213338',
                        '#1C2B2F',
                        '#182528',
                        '#141F22',
                        '#111A1C',
                        '#0E1517',
                        '#0B1112',
                        '#080C0D',
                        '#040607',
                        '#000000',
                    ],
                    slate: [
                        '#4F6C9B',
                        '#435B83',
                        '#384D6F',
                        '#30415D',
                        '#28374F',
                        '#222E42',
                        '#1D2738',
                        '#18212F',
                        '#141C28',
                        '#111822',
                        '#0F141C',
                        '#0C1017',
                        '#090D12',
                        '#07090D',
                        '#040507',
                        '#000000',
                    ],
                    sapphire: [
                        '#0C41E8',
                        '#0A37C4',
                        '#092EA6',
                        '#07278C',
                        '#062176',
                        '#051C63',
                        '#041854',
                        '#041447',
                        '#03113C',
                        '#030E33',
                        '#020C2B',
                        '#020A23',
                        '#01081B',
                        '#010513',
                        '#01030A',
                        '#000000',
                    ],
                    indigo: [
                        '#160CE8',
                        '#130AC4',
                        '#1009A6',
                        '#0D078C',
                        '#0B0676',
                        '#090563',
                        '#080454',
                        '#070447',
                        '#06033C',
                        '#050333',
                        '#04022B',
                        '#030223',
                        '#03011B',
                        '#020113',
                        '#01010A',
                        '#000000',
                    ],
                    amethyst: [
                        '#5035C0',
                        '#442DA3',
                        '#392689',
                        '#302074',
                        '#291B62',
                        '#221752',
                        '#1D1345',
                        '#18103B',
                        '#150E32',
                        '#120C2A',
                        '#0F0A23',
                        '#0C081D',
                        '#090617',
                        '#070410',
                        '#040209',
                        '#000000',
                    ],
                    plum: [
                        '#7C35C0',
                        '#692DA3',
                        '#592689',
                        '#4B2074',
                        '#3F1B62',
                        '#351752',
                        '#2D1345',
                        '#26103B',
                        '#200E32',
                        '#1B0C2A',
                        '#170A23',
                        '#13081D',
                        '#0F0617',
                        '#0A0410',
                        '#060209',
                        '#000000',
                    ],
                    orchid: [
                        '#BB1ADB',
                        '#9E16B9',
                        '#86139D',
                        '#711084',
                        '#5F0D6F',
                        '#500B5E',
                        '#44094F',
                        '#390843',
                        '#310739',
                        '#290630',
                        '#220528',
                        '#1C0421',
                        '#16031A',
                        '#100212',
                        '#08010A',
                        '#000000',
                    ],
                    raspberry: [
                        '#DB1A7D',
                        '#B9166A',
                        '#9D1359',
                        '#84104B',
                        '#6F0D40',
                        '#5E0B36',
                        '#4F092D',
                        '#430826',
                        '#390720',
                        '#30061B',
                        '#280517',
                        '#210413',
                        '#1A030F',
                        '#12020A',
                        '#0A0106',
                        '#000000',
                    ],
                },
                d = {
                    carmine: [
                        '#FFCCD6',
                        '#D8ADB5',
                        '#B69299',
                        '#9A7B81',
                        '#82686D',
                        '#6D575C',
                        '#5C4A4D',
                        '#4E3E42',
                        '#423538',
                        '#382D2F',
                        '#2F2527',
                        '#261F20',
                        '#1E1819',
                        '#151112',
                        '#0B090A',
                        '#000000',
                    ],
                    fuchsia: [
                        '#FFCCE6',
                        '#D8ADC3',
                        '#B692A4',
                        '#9A7B8B',
                        '#826875',
                        '#6D5763',
                        '#5C4A53',
                        '#4E3E46',
                        '#42353C',
                        '#382D32',
                        '#2F252A',
                        '#261F23',
                        '#1E181B',
                        '#151113',
                        '#0B090A',
                        '#000000',
                    ],
                    coral: [
                        '#FFD7CC',
                        '#D8B6AD',
                        '#B69A92',
                        '#9A827B',
                        '#826D68',
                        '#6D5C57',
                        '#5C4E4A',
                        '#4E423E',
                        '#423835',
                        '#382F2D',
                        '#2F2825',
                        '#26201F',
                        '#1E1918',
                        '#151211',
                        '#0B0A09',
                        '#000000',
                    ],
                    tangerine: [
                        '#FFE3CC',
                        '#D8C0AD',
                        '#B6A292',
                        '#9A897B',
                        '#827368',
                        '#6D6157',
                        '#5C524A',
                        '#4E463E',
                        '#423B35',
                        '#38322D',
                        '#2F2A25',
                        '#26221F',
                        '#1E1B18',
                        '#151311',
                        '#0B0A09',
                        '#000000',
                    ],
                    clover: [
                        '#D7F4D9',
                        '#B6CFB8',
                        '#9AAE9B',
                        '#829383',
                        '#6D7C6E',
                        '#5C695D',
                        '#4E584F',
                        '#424B42',
                        '#383F38',
                        '#2F3630',
                        '#282D28',
                        '#202521',
                        '#191D1A',
                        '#121412',
                        '#0A0B0A',
                        '#000000',
                    ],
                    emerald: [
                        '#CCFFEF',
                        '#ADD8CA',
                        '#92B6AB',
                        '#7B9A90',
                        '#688279',
                        '#576D66',
                        '#4A5C56',
                        '#3E4E49',
                        '#35423E',
                        '#2D3834',
                        '#252F2C',
                        '#1F2624',
                        '#181E1C',
                        '#111514',
                        '#090B0B',
                        '#000000',
                    ],
                    turquoise: [
                        '#CCFFF7',
                        '#ADD8D1',
                        '#92B6B1',
                        '#7B9A95',
                        '#68827D',
                        '#576D6A',
                        '#4A5C59',
                        '#3E4E4C',
                        '#354240',
                        '#2D3836',
                        '#252F2D',
                        '#1F2625',
                        '#181E1D',
                        '#111515',
                        '#090B0B',
                        '#000000',
                    ],
                    aquamarine: [
                        '#CCF9FF',
                        '#ADD3D8',
                        '#92B2B6',
                        '#7B969A',
                        '#687F82',
                        '#576B6D',
                        '#4A5A5C',
                        '#3E4C4E',
                        '#354142',
                        '#2D3738',
                        '#252E2F',
                        '#1F2626',
                        '#181D1E',
                        '#111515',
                        '#090B0B',
                        '#000000',
                    ],
                    glacier: [
                        '#DFE9EC',
                        '#BDC5C8',
                        '#9FA7A9',
                        '#868C8E',
                        '#717678',
                        '#606465',
                        '#515455',
                        '#444748',
                        '#3A3C3D',
                        '#313334',
                        '#292B2B',
                        '#222324',
                        '#1A1B1C',
                        '#131314',
                        '#0A0A0B',
                        '#000000',
                    ],
                    slate: [
                        '#DDE4EE',
                        '#BBC1CA',
                        '#9EA3AA',
                        '#85898F',
                        '#707479',
                        '#5F6266',
                        '#505256',
                        '#444649',
                        '#393B3E',
                        '#303234',
                        '#292A2C',
                        '#212224',
                        '#1A1B1C',
                        '#121314',
                        '#0A0A0B',
                        '#000000',
                    ],
                    sapphire: [
                        '#CFDAFC',
                        '#AFB9D5',
                        '#949CB4',
                        '#7D8398',
                        '#696F80',
                        '#595D6C',
                        '#4B4F5B',
                        '#3F434D',
                        '#363941',
                        '#2D3037',
                        '#26282E',
                        '#1F2126',
                        '#181A1E',
                        '#111215',
                        '#090A0B',
                        '#000000',
                    ],
                    indigo: [
                        '#D1CFFC',
                        '#B1AFD5',
                        '#9594B4',
                        '#7E7D98',
                        '#6A6980',
                        '#5A596C',
                        '#4C4B5B',
                        '#403F4D',
                        '#363641',
                        '#2E2D37',
                        '#26262E',
                        '#1F1F26',
                        '#19181E',
                        '#111115',
                        '#09090B',
                        '#000000',
                    ],
                    amethyst: [
                        '#DDD7F4',
                        '#BBB6CF',
                        '#9E9AAE',
                        '#858293',
                        '#706D7C',
                        '#5F5C69',
                        '#504E58',
                        '#44424B',
                        '#39383F',
                        '#302F36',
                        '#29282D',
                        '#212025',
                        '#1A191D',
                        '#121214',
                        '#0A0A0B',
                        '#000000',
                    ],
                    plum: [
                        '#E6D7F4',
                        '#C3B6CF',
                        '#A49AAE',
                        '#8B8293',
                        '#756D7C',
                        '#635C69',
                        '#534E58',
                        '#46424B',
                        '#3C383F',
                        '#322F36',
                        '#2A282D',
                        '#232025',
                        '#1B191D',
                        '#131214',
                        '#0A0A0B',
                        '#000000',
                    ],
                    orchid: [
                        '#F3D1FA',
                        '#CEB1D4',
                        '#AE95B3',
                        '#937E97',
                        '#7B6A7F',
                        '#685A6B',
                        '#584C5A',
                        '#4A404D',
                        '#3F3641',
                        '#352E37',
                        '#2D262E',
                        '#251F26',
                        '#1D191D',
                        '#141115',
                        '#0B090B',
                        '#000000',
                    ],
                    raspberry: [
                        '#FAD1E6',
                        '#D4B1C3',
                        '#B395A4',
                        '#977E8B',
                        '#7F6A75',
                        '#6B5A63',
                        '#5A4C53',
                        '#4D4046',
                        '#41363C',
                        '#372E32',
                        '#2E262A',
                        '#261F23',
                        '#1D191B',
                        '#151113',
                        '#0B090A',
                        '#000000',
                    ],
                },
                c = [
                    { name: 'carmine', start: 337, end: 1, primary: '#F5002E', secondary: '#FFCCD6' },
                    { name: 'fuchsia', start: 1, end: 22, primary: '#F5007C', secondary: '#FFCCE6' },
                    { name: 'coral', start: 22, end: 45, primary: '#F53700', secondary: '#FFD7CC' },
                    { name: 'tangerine', start: 45, end: 67, primary: '#F56E00', secondary: '#FFE3CC' },
                    { name: 'clover', start: 67, end: 90, primary: '#34C03E', secondary: '#D7F4D9' },
                    { name: 'emerald', start: 90, end: 157, primary: '#00F5A9', secondary: '#CCFFEF' },
                    { name: 'turquoise', start: 157, end: 180, primary: '#00F5CD', secondary: '#CCFFF7' },
                    { name: 'aquamarine', start: 180, end: 202, primary: '#00D6F5', secondary: '#CCF9FF' },
                    { name: 'glacier', start: 202, end: 213, primary: '#5C8E9B', secondary: '#DFE9EC' },
                    { name: 'slate', start: 213, end: 225, primary: '#4F6C9B', secondary: '#DDE4EE' },
                    { name: 'sapphire', start: 225, end: 240, primary: '#0C41E8', secondary: '#CFDAFC' },
                    { name: 'indigo', start: 240, end: 255, primary: '#160CE8', secondary: '#D1CFFC' },
                    { name: 'amethyst', start: 255, end: 280, primary: '#5035C0', secondary: '#DDD7F4' },
                    { name: 'plum', start: 280, end: 300, primary: '#7C35C0', secondary: '#E6D7F4' },
                    { name: 'orchid', start: 300, end: 320, primary: '#BB1ADB', secondary: '#F3D1FA' },
                    { name: 'raspberry', start: 320, end: 337, primary: '#DB1A7D', secondary: '#FAD1E6' },
                ],
                u = 'slate',
                m = { primary: '#4F6C9B', secondary: '#DDE4EE', primaryStops: l[u], secondaryStops: d[u], primaryDarkIdleStops: s },
                g = (e) => {
                    if (!e) return m;
                    let { h: t } = (0, o.g8k)(e),
                        a = c.find((e) => ((e, t) => (e.start > e.end ? t >= e.start || t < e.end : t >= e.start && t < e.end))(e, t));
                    return a ? { primary: a.primary, secondary: a.secondary, primaryStops: l[a.name], secondaryStops: d[a.name], primaryDarkIdleStops: s } : m;
                },
                C = () => {
                    let {
                        experiments: e,
                        user: { isAliceProAvailable: t },
                    } = (0, o.Pjs)();
                    return !!t && e.checkExperiment(o.zal.WebNextQueryToVibe, 'on');
                };
            var _ = a(14323),
                p = a(67226);
            let y = (e, t) => {
                var a;
                return (0, i.wg)({ title: e.name, seeds: e.seeds, description: e.description, type: null != (a = e.type) ? a : void 0, agent: (0, r.K)(t) });
            };
            var A = a(54690);
            let v = i.gK.model('VibeAgent', { animationUri: i.gK.string, cover: A.$B, entityType: i.gK.maybe(i.gK.string) });
            var B = a(57291),
                b = a(62093);
            let D = i.gK
                .model('Vibe', {
                    title: i.gK.optional(i.gK.string, ''),
                    description: i.gK.maybe(i.gK.string),
                    seeds: i.gK.array(i.gK.string),
                    imageUrl: i.gK.maybe(i.gK.string),
                    animationUrl: i.gK.maybe(i.gK.string),
                    backgroundImageUrl: i.gK.maybe(i.gK.string),
                    backgroundColor: i.gK.maybe(i.gK.string),
                    type: i.gK.maybe(i.gK.string),
                    colors: i.gK.maybe(i.gK.model({ average: i.gK.maybe(i.gK.string), waveText: i.gK.maybe(i.gK.string) })),
                    agent: i.gK.maybe(v),
                })
                .views((e) => {
                    let t = {
                        get stationId() {
                            var a;
                            return null != (a = e.seeds[0]) ? a : '';
                        },
                        get seedsId() {
                            return e.seeds.join(',');
                        },
                        get context() {
                            if (e.seeds) {
                                if (t.stationId !== o.M19) return e.title;
                                else if (e.seeds.length > 1) return e.title;
                            }
                            return null;
                        },
                        get pinId() {
                            return (0, B.f)(e.seeds);
                        },
                        get isPinned() {
                            if (!(0, i._n)(e)) return !1;
                            let { pinsCollection: t } = (0, i.Zn)(e);
                            return t.isPinned(this.pinId);
                        },
                        get stationType() {
                            var r, n;
                            return null != (n = null == (r = t.stationId) ? void 0 : r.split(':')[0]) ? n : '';
                        },
                        get isMix() {
                            return e.type === b.y.MIX;
                        },
                        get shouldShowAgent() {
                            if (!(0, i._n)(e)) return !1;
                            let { experiments: t } = (0, i.Zn)(e);
                            return t.checkExperiment(o.zal.WebNextWaveAgentExperiment, 'on');
                        },
                        get cover() {
                            return (0, i.wg)({ uri: e.imageUrl, color: e.backgroundColor });
                        },
                    };
                    return t;
                })
                .actions((e) => ({
                    getKey: (t) => ''.concat(t, '_').concat(e.seeds[0]),
                    togglePin: (0, i.L3)(function* () {
                        if (!(0, i._n)(e)) return;
                        let { pinsCollection: t, user: a } = (0, i.Zn)(e);
                        if (a.isAuthorized) return yield t.toggleVibePin({ seeds: e.seeds }, e.pinId);
                    }),
                    getDescription() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                        if (!(0, i._n)(e)) return t;
                        let { experiments: a } = (0, i.Zn)(e);
                        return a.checkExperiment(o.zal.WebNextVibeDescription, 'on') && void 0 !== (null == e ? void 0 : e.description) ? e.description : t;
                    },
                }));
            var F = a(85253),
                h = a(21895),
                E = a(67939),
                x = a(78533),
                V = a(50823),
                f = a(56159);
            a(33801);
            var w = a(53285);
        },
        33801: (e, t, a) => {
            'use strict';
            a.d(t, { VibeCardView: () => D });
            var i = a(62936),
                r = a(31124),
                n = a(57249),
                o = a(79950),
                s = a(19718),
                l = a(49351),
                d = a(44020),
                c = a(51046),
                u = a(59935),
                m = a(60188),
                g = a(4497),
                C = a(13030),
                _ = a(30388),
                p = a(42561);
            let y = (e) => Math.max(0, Math.min(100, e)) / 100;
            var A = a(90659),
                v = a.n(A),
                B = a(49124);
            let b = l.default.default(
                () =>
                    Promise.resolve()
                        .then(a.bind(a, 31124))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = B.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, r.setWasmUrl)(new URL(n, e).href);
            }
            let D = (0, s.PA)((e) => {
                let { agent: t, isPlaying: a } = e,
                    [r, n] = (0, d.useState)(null),
                    { state: s, toggleTrue: l } = (0, g.e)(!1),
                    { state: A, toggleTrue: B, toggleFalse: D } = (0, g.e)(!1),
                    { theme: F } = (0, p.DPo)(),
                    h = (0, d.useRef)(null),
                    E = t.entityType === c.h.ARTIST,
                    x = t.cover.color,
                    V = t.cover.uri,
                    f = (0, u.c)(async () => {
                        if (s && x && F) {
                            D();
                            let {
                                    color: e,
                                    glow1: a,
                                    glow2: i,
                                    mask: n,
                                } = ((e) => {
                                    let { averageColor: t, theme: a, custom: i } = e,
                                        { h: r, s: n, l: o } = (0, p.g8k)(t),
                                        s = o,
                                        l = [0, 0, 0];
                                    i
                                        ? (a === p.Sxu.Dark || (s += 79), (l = (0, p.YLU)(r, y(n), y(s))))
                                        : (l = (0, p.YLU)(r, (n > 25 ? Math.min(n + 25, 60) : n) / 100, (s > 20 ? Math.min(s + 15, 60) : s) / 100));
                                    let d = a === p.Sxu.Dark ? [0.07, 0.07, 0.07] : [0.96, 0.96, 0.96];
                                    return {
                                        color: l,
                                        glow1: a === p.Sxu.Dark ? (0, p.YLU)(r, y(n), y(s + 36)) : (0, p.YLU)(r, y(n), y(s - 29)),
                                        glow2: a === p.Sxu.Dark ? (0, p.YLU)(r, y(n), y(s + 79)) : (0, p.YLU)(r, y(n), y(s - 53)),
                                        mask: d,
                                    };
                                })({ averageColor: x, theme: F, custom: !t.entityType }),
                                o = JSON.stringify({
                                    rules: [
                                        { id: 'color', type: 'Color', value: e },
                                        { id: 'glow_1', type: 'Color', value: a },
                                        { id: 'glow_2', type: 'Color', value: i },
                                        { id: 'mask', type: 'Color', value: n },
                                    ],
                                });
                            await (null == r ? void 0 : r.setThemeData(o)), B();
                        }
                    }),
                    w = (0, u.c)(() => {
                        l(), f();
                    });
                (0, d.useEffect)(() => {
                    a ? null == r || r.play() : null == r || r.pause();
                }, [r, a]),
                    (0, d.useEffect)(() => {
                        f();
                    }, [x, f, F, s]),
                    (0, d.useEffect)(() => {
                        if (r)
                            return (
                                r.setUseFrameInterpolation(!1),
                                r.setRenderConfig({ devicePixelRatio: 0.1 }),
                                r.addEventListener('load', w),
                                () => {
                                    r.removeEventListener('load', w);
                                }
                            );
                    }, [r, w]);
                let I = !s || !A,
                    S = (0, m.L)(() => {
                        if (!h.current) return;
                        let e = E ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(h.current.clientWidth * e, 'px') };
                    });
                return (0, i.jsxs)('div', {
                    ref: h,
                    className: (0, o.$)(v().root, { [v().root_loading]: I }),
                    style: S,
                    children: [
                        (0, i.jsxs)('div', {
                            className: (0, o.$)(v().cover, { [v().cover_round]: E, [v().cover_loading]: I }),
                            children: [
                                t.entityType &&
                                    V &&
                                    (0, i.jsx)(C.Image, { src: V, size: 200, fit: 'cover', withAvatarReplace: !0, className: v().image, withLoadingIndicator: !1 }),
                                (0, i.jsx)(b, { src: t.animationUri, loop: !0, dotLottieRefCallback: n, className: v().animation }),
                            ],
                        }),
                        (0, i.jsx)(_.Shimmer, { className: (0, o.$)(v().shimmer, { [v().shimmer_loading]: I }), isActive: !0, radius: E ? 'round' : 's' }),
                    ],
                });
            });
        },
        49698: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => r });
            var i = a(42561);
            let r = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, i.pX4)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        50823: (e, t, a) => {
            'use strict';
            a.d(t, { VibeButton: () => b, VibeButtonShimmer: () => B });
            var i = a(62936),
                r = a(79950),
                n = a(19718),
                o = a(44020),
                s = a(47480),
                l = a(8669),
                d = a(4497),
                c = a(49923),
                u = a(5099),
                m = a(85742),
                g = a(13030),
                C = a(30388),
                _ = a(20418),
                p = a(42561),
                y = a(85906),
                A = a(84593),
                v = a.n(A);
            let B = (e) => {
                    let { isActive: t, className: a } = e;
                    return (0, i.jsx)(C.Shimmer, { isActive: t, className: (0, r.$)(v().root, a) });
                },
                b = (0, n.PA)((e) => {
                    let { className: t, vibe: a } = e,
                        { formatMessage: n } = (0, s.A)(),
                        { pageId: C } = (0, p.$au)(),
                        { blockIdForFrom: A } = (0, p.N8n)(),
                        { ref: B, intersectionPropertyId: b } = (0, p.nMI)(),
                        { toggleTrue: D, toggleFalse: F, state: h } = (0, d.e)(!1),
                        { isFreemium: E } = (0, p.XCI)(),
                        x = a.title.length > 26,
                        { isPlaying: V, togglePlay: f } = (0, p.B0S)({ seeds: a.seeds, pageIdForFrom: C, blockIdForFrom: A }),
                        w = (0, p.brA)(),
                        I = (0, o.useCallback)(
                            (e) => {
                                E ||
                                    ((0, c.P)(e, v().ripple),
                                    D(),
                                    f().finally(() => {
                                        F(), w(!V);
                                    }));
                            },
                            [F, D, f, V, w, E],
                        ),
                        S = (0, o.useMemo)(() => {
                            var e, t;
                            return {
                                '--vibe-button-background': null == (e = a.colors) ? void 0 : e.average,
                                '--vibe-button-text-color': null == (t = a.colors) ? void 0 : t.waveText,
                            };
                        }, [a.colors]),
                        k = V ? 'pause' : 'play',
                        P = V ? l.e8.landing.VIBE_DISCOVERY_ITEM_PAUSE_ICON : l.e8.landing.VIBE_DISCOVERY_ITEM_PLAY_ICON,
                        T = (0, o.useCallback)(
                            () =>
                                (0, i.jsxs)(u.$, {
                                    style: S,
                                    withRipple: !1,
                                    withHover: !1,
                                    variant: 'text',
                                    onClick: I,
                                    className: (0, r.$)(v().root, v().button, { [v().button_loading]: h }, t),
                                    'data-intersection-property-id': b,
                                    ref: B,
                                    ...(0, l.Am)(l.e8.landing.VIBE_DISCOVERY_ITEM),
                                    children: [
                                        (0, i.jsx)(g.Image, {
                                            className: v().image,
                                            withAvatarReplace: !0,
                                            withFallback: !1,
                                            src: a.backgroundImageUrl,
                                            withAspectRatio: !0,
                                            size: 400,
                                            fit: 'cover',
                                        }),
                                        (0, i.jsxs)('span', {
                                            className: v().textContainer,
                                            children: [
                                                (0, i.jsx)(_.Caption, {
                                                    className: v().subtitle,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    weight: 'bold',
                                                    children: a.getDescription(n({ id: 'entity-names.my-vibe' })),
                                                }),
                                                (0, i.jsxs)(_.Caption, {
                                                    className: (0, r.$)(v().title, { [v().title_long]: x }),
                                                    variant: 'span',
                                                    size: 's',
                                                    weight: 'bold',
                                                    lineClamp: 2,
                                                    children: [(0, i.jsx)(m.Icon, { className: v().icon, size: 'xxs', variant: k, ...(0, l.Am)(P) }), a.title],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            [t, n, I, P, k, b, x, h, B, S, a],
                        );
                    return (0, i.jsx)(y.SU, { isEnabled: E, placement: 'top', textVariant: 'vibe', vibeTextVariant: a.stationType, renderChildren: T });
                });
        },
        51046: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { h: () => i }),
                (function (e) {
                    (e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist');
                })(i || (i = {}));
        },
        53285: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => c });
            var i = a(62936),
                r = a(79950),
                n = a(51046),
                o = a(60188),
                s = a(85906),
                l = a(80799),
                d = a.n(l);
            let c = (e) => {
                let {
                        agent: t,
                        isPlaying: a,
                        isCurrent: l,
                        onPlayButtonClick: c,
                        shouldShowControl: u = !0,
                        playButtonIconSize: m,
                        alt: g,
                        className: C,
                        fallbackIconSize: _,
                    } = e,
                    p = (0, o.L)(() => {
                        if (t.entityType) return t.entityType === n.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, i.jsx)(s.q1, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, r.$)(d().root, d()['root_radius_'.concat(p)], { [d().root_withShadow]: !!t.entityType }, C),
                    radius: p,
                    onPlayButtonClick: c,
                    isPlaying: a,
                    isCurrent: l,
                    alt: g,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: m,
                    fallbackIconSize: _,
                });
            };
        },
        53914: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => F });
            var i = a(62936),
                r = a(31124),
                n = a(57249),
                o = a(79950),
                s = a(19718),
                l = a(49351),
                d = a(44020),
                c = a(47480),
                u = a(59935),
                m = a(13030),
                g = a(20418),
                C = a(42561),
                _ = a(85906);
            let p = async (e, t) => {
                let { loop: a = !1, markerId: i, frameRange: r, mode: n = 'forward' } = t,
                    o = null,
                    s = null;
                if (i) {
                    let t = e.markers().find((e) => e.name === i);
                    if (!t) return;
                    (o = t.time), (s = t.time + t.duration);
                } else if (r) {
                    var l;
                    (o = r.start), (s = null != (l = r.end) ? l : e.totalFrames);
                }
                null !== o &&
                    null !== s &&
                    (await Promise.all([e.setLoop(a), e.setMode(n), e.setSegment(o, s), e.setFrame('reverse' === n ? s : o)]), o !== s && (await e.play()));
            };
            var y = a(60393),
                A = a.n(y),
                v = a(49124);
            let B = { align: [0, 0.5], fit: 'contain' },
                b = { autoResize: !0, freezeOnOffscreen: !1 },
                D = l.default.default(
                    () =>
                        Promise.resolve()
                            .then(a.bind(a, 31124))
                            .then((e) => e.DotLottieWorkerReact),
                    { ssr: !1 },
                );
            {
                let e = v.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, r.setWasmUrl)(new URL(n, e).href);
            }
            let F = (0, s.PA)((e) => {
                var t, a, r;
                let { animationByTheme: n, animationConfig: s, className: l, lumenImages: y, vibe: v } = e,
                    { formatMessage: F } = (0, c.A)(),
                    { pageId: h } = (0, C.$au)(),
                    { blockIdForFrom: E } = (0, C.N8n)(),
                    { sendPlaySearchFeedback: x } = (0, C.zEv)(),
                    V = (0, C.brA)(),
                    { theme: f } = (0, C.DPo)(),
                    w = (0, d.useRef)(!1),
                    I = (0, d.useRef)(s[v ? 'idle' : 'loading']),
                    [S, k] = (0, d.useState)(null),
                    [P, T] = (0, d.useState)(!1),
                    {
                        isPlaying: N,
                        togglePlay: j,
                        isCurrent: R,
                    } = (0, C.B0S)({ blockIdForFrom: E, pageIdForFrom: h, seeds: null != (t = null == v ? void 0 : v.seeds) ? t : [] });
                (0, d.useEffect)(() => {
                    if (!S || w.current) return;
                    let e = () => {
                        (w.current = !0), p(S, I.current);
                    };
                    return S.addEventListener('load', e), () => S.removeEventListener('load', e);
                }, [S]),
                    (0, d.useEffect)(() => {
                        let e = ((e, t, a, i) =>
                            a || e === (null == i ? void 0 : i.loading)
                                ? t
                                    ? null == i
                                        ? void 0
                                        : i.playing
                                    : e === i.playing
                                      ? null == i
                                          ? void 0
                                          : i.paused
                                      : e === i.loading
                                        ? null == i
                                            ? void 0
                                            : i.idle
                                        : null
                                : null == i
                                  ? void 0
                                  : i.loading)(I.current, N, !!v, s);
                        e && e !== I.current && ((I.current = e), S && w.current && p(S, e));
                    }, [s, S, R, N, v]);
                let L = (0, u.c)(() => {
                        v && (P || N || (T(!0), null == x || x()), j(), V(!N));
                    }),
                    K = (0, u.c)((e) => {
                        (e.code === C.vLr.SPACE || e.code === C.vLr.ENTER) && (e.preventDefault(), L());
                    }),
                    U = null != (a = null == v ? void 0 : v.title) ? a : F({ id: 'entity-names.query-to-vibe-loading-title' }),
                    z = null != (r = null == v ? void 0 : v.description) ? r : F({ id: 'entity-names.query-to-vibe-loading-description' });
                return (0, i.jsxs)('div', {
                    'aria-label': U,
                    'aria-description': z,
                    className: (0, o.$)(_.$f.root, A().root, { [A().root_loading]: !v }, l),
                    tabIndex: 0,
                    onClick: L,
                    onKeyDown: K,
                    children: [
                        (0, i.jsx)(D, { className: A().comet, layout: B, src: n[null != f ? f : C.Sxu.Dark], renderConfig: b, dotLottieRefCallback: k }),
                        (0, i.jsxs)('div', {
                            className: A().iconContainer,
                            children: [
                                R && (0, i.jsx)(_.PD, { className: A().iconPulse, stopAnimation: !N }),
                                (0, i.jsx)(m.Image, {
                                    className: A().icon,
                                    src: y[null != f ? f : C.Sxu.Dark],
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    withFallback: !1,
                                    withLoadingIndicator: !1,
                                }),
                            ],
                        }),
                        (0, i.jsx)(_.ro, {
                            className: A().meta,
                            title: (0, i.jsx)(g.Caption, {
                                className: (0, o.$)(_.$f.text, _.$f.titleText, A().caption),
                                size: 'm',
                                variant: 'div',
                                type: 'text',
                                children: U,
                            }),
                            description: z,
                            titleLineClamp: 2,
                        }),
                    ],
                });
            });
        },
        56159: (e, t, a) => {
            'use strict';
            a.d(t, { VibeCard: () => _ });
            var i = a(62936),
                r = a(79950),
                n = a(19718),
                o = a(44020),
                s = a(59935),
                l = a(16258),
                d = a(56721),
                c = a(20418),
                u = a(42561),
                m = a(85906),
                g = a(8429),
                C = a.n(g);
            let _ = (0, n.PA)((e) => {
                let { vibe: t, children: a, className: n } = e,
                    { pageId: g } = (0, u.$au)(),
                    [_, p] = (0, o.useState)(!1),
                    { blockIdForFrom: y } = (0, u.N8n)(),
                    {
                        settings: { isMobile: A },
                        user: v,
                    } = (0, u.Pjs)(),
                    { sendPlaySearchFeedback: B } = (0, u.zEv)(),
                    b = (0, u.brA)(),
                    { isFreemium: D } = (0, u.XCI)(),
                    { isPlaying: F, isPaused: h, togglePlay: E } = (0, u.B0S)({ seeds: t.seeds, pageIdForFrom: g, blockIdForFrom: y }),
                    x = (0, u.PT7)(),
                    V = F || h,
                    f = (0, o.useCallback)(() => {
                        A && (_ || F || (p(!0), null == B || B()), E());
                    }, [A, F, _, B, E]),
                    w = (0, s.c)(() => {
                        !x() && (D || (_ || F || (p(!0), null == B || B()), E(), b(!F)));
                    }),
                    I = (0, o.useCallback)(
                        () =>
                            (0, i.jsx)(
                                m.DM,
                                {
                                    isPlaying: F,
                                    onClick: w,
                                    className: (0, r.$)(C().playButton, C().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                t.getKey('PlayButton'),
                            ),
                        [F, w, t],
                    ),
                    S = (0, o.useMemo)(() => {
                        let e = !v.hasPlus && !1;
                        return v.isAuthorized
                            ? (0, i.jsx)(
                                  m.SU,
                                  { isEnabled: e, placement: 'bottom', textVariant: 'vibe', vibeTextVariant: t.stationType, renderChildren: I },
                                  t.getKey('BuyPlusPopover'),
                              )
                            : (0, i.jsx)(m.Zr, { isEnabled: e, placement: 'bottom', textVariant: 'vibe', vibeTextVariant: t.stationType, renderChildren: I });
                    }, [v.hasPlus, v.isAuthorized, t, I]),
                    k = (0, o.useMemo)(
                        () =>
                            (0, i.jsxs)(d.Paper, {
                                className: C().cover,
                                radius: 'round',
                                withShadow: !0,
                                onClick: f,
                                children: [
                                    (0, i.jsx)(m.BW, {
                                        size: 200,
                                        fit: 'cover',
                                        className: C().image,
                                        style: { backgroundColor: t.backgroundColor },
                                        src: t.imageUrl,
                                        alt: t.title,
                                        withAvatarReplace: !0,
                                    }),
                                    V && (0, i.jsx)(m.PD, { stopAnimation: h, className: C().playingAnimation }),
                                    (0, i.jsx)(l.hg, {
                                        className: (0, r.$)(C().controls, { [C().controls_isPlaying]: V }, C().important),
                                        bottomContainerClassName: C().playControl,
                                        radius: 'round',
                                        playControl: S,
                                    }),
                                ],
                            }),
                        [f, t.backgroundColor, t.imageUrl, t.title, V, h, S],
                    );
                return (0, i.jsx)(l.MN, {
                    className: (0, r.$)(C().root, n),
                    textPosition: 'center',
                    title: (0, i.jsx)(
                        c.Caption,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title },
                        t.getKey('Description'),
                    ),
                    description: (0, i.jsx)(
                        c.Caption,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    view: k,
                    children: a,
                });
            });
        },
        60393: (e) => {
            e.exports = {
                iconContainer: 'QueryToVibeBase_iconContainer__AM7_Y',
                comet: 'QueryToVibeBase_comet__TR7wA',
                root: 'QueryToVibeBase_root__YPyW_',
                root_loading: 'QueryToVibeBase_root_loading__ATBRE',
                caption: 'QueryToVibeBase_caption__QUrL9',
                'caption-pulse': 'QueryToVibeBase_caption-pulse__OYj1G',
                iconPulse: 'QueryToVibeBase_iconPulse__113Fc',
                icon: 'QueryToVibeBase_icon__GNNz8',
                meta: 'QueryToVibeBase_meta__hQX1A',
            };
        },
        62093: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { y: () => i }), ((i || (i = {})).MIX = 'MIX');
        },
        67226: (e, t, a) => {
            'use strict';
            a.d(t, { useOnPinClick: () => v });
            var i = a(62936),
                r = a(16264),
                n = a(44020),
                o = a(47480),
                s = a(92496),
                l = a(42561),
                d = a(85906),
                c = a(19718),
                u = a(8669),
                m = a(60188),
                g = a(13030),
                C = a(53285),
                _ = a(16803),
                p = a.n(_);
            let y = (0, c.PA)((e) => {
                let { vibe: t, closeToast: a } = e,
                    { experiments: r } = (0, l.Pjs)(),
                    n = r.checkExperiment(l.zal.WebNextWaveAgentExperiment, 'on'),
                    o = (0, m.L)(() => {
                        var e;
                        return n && t.agent
                            ? (0, i.jsx)(C.n, { agent: t.agent, shouldShowControl: !1, className: p().view })
                            : (0, i.jsx)(g.Image, {
                                  className: p().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  ...(0, u.Am)(u.S7.BASE_NOTIFICATION_PIN_VIBE_COVER),
                              });
                    }),
                    s = n && t.agent ? void 0 : 'round';
                return (0, i.jsx)(d.k4, {
                    closeToast: a,
                    entityVariant: d.cp.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: o,
                    radius: s,
                    className: p().root,
                });
            });
            var A = a(49698);
            let v = (e) => {
                let { user: t, pinsCollection: a } = (0, l.Pjs)(),
                    { notify: c } = (0, l.lkh)(),
                    { formatMessage: u } = (0, o.A)(),
                    [m, g] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized)
                        return void c((0, i.jsx)(d.hT, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.uQT.ERROR });
                    if (m) return;
                    let n = { ...(0, r.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        o = a.get(e.pinId);
                    g(!0);
                    let C = await e.togglePin();
                    g(!1),
                        o &&
                            o.type === s._.WAVE_ITEM &&
                            o.data.backgroundImageUrl &&
                            ((n.backgroundImageUrl = o.data.backgroundImageUrl), (n.colors = o.data.colors), (n.agent = o.data.agent)),
                        C &&
                            'object' == typeof C &&
                            'data' in C &&
                            (C.data.backgroundImageUrl && (n.backgroundImageUrl = C.data.backgroundImageUrl),
                            C.data.colors && (n.colors = { average: C.data.colors.average, waveText: C.data.colors.waveText }),
                            C.data.agent && (n.agent = (0, A.K)(C.data.agent))),
                        C
                            ? c((0, i.jsx)(y, { vibe: n }), { containerId: l.uQT.INFO })
                            : c((0, i.jsx)(d.hT, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: l.uQT.ERROR });
                }, [u, c, m, a, t.isAuthorized, e]);
            };
        },
        67939: (e, t, a) => {
            'use strict';
            a.d(t, { SearchVibeCard: () => A });
            var i = a(62936),
                r = a(79950),
                n = a(19718),
                o = a(44020),
                s = a(8669),
                l = a(59935),
                d = a(49923),
                c = a(20418),
                u = a(42561),
                m = a(85906),
                g = a(14323),
                C = a(33801),
                _ = a(53285),
                p = a(27757),
                y = a.n(p);
            let A = (0, n.PA)((e) => {
                let { className: t, vibe: a, cover: n, coverClassName: p, playButtonIconSize: A, description: v, agentVariant: B } = e,
                    { ref: b, intersectionPropertyId: D } = (0, u.nMI)(),
                    { pageId: F } = (0, u.$au)(),
                    [h, E] = (0, o.useState)(!1),
                    { blockIdForFrom: x } = (0, u.N8n)(),
                    { isFreemium: V } = (0, u.XCI)(),
                    { sendPlaySearchFeedback: f } = (0, u.zEv)(),
                    w = (0, u.brA)(),
                    [I, S] = (0, o.useState)(!1),
                    k = (0, u.PT7)(),
                    { isPlaying: P, togglePlay: T, isCurrent: N } = (0, u.B0S)({ seeds: a.seeds, pageIdForFrom: F, blockIdForFrom: x }),
                    j = (0, l.c)(() => {
                        if (!k()) {
                            if (V) return void S(!0);
                            h || P || (E(!0), null == f || f()), T(), w(!P);
                        }
                    }),
                    R = (0, l.c)(() => {
                        P || j();
                    }),
                    L = (0, l.c)((e) => {
                        2 === e.detail ? R() : (0, d.P)(e, m.$f.ripple);
                    }),
                    K = (0, o.useCallback)(() => {
                        if (a.shouldShowAgent && a.agent && B)
                            switch (B) {
                                case g.h.LARGE:
                                    return (0, i.jsxs)('div', {
                                        className: (0, r.$)(y().root, m.$f.playButtonCell, p),
                                        children: [
                                            (0, i.jsx)(C.VibeCardView, { agent: a.agent, isPlaying: P }),
                                            (0, i.jsx)(m.DM, {
                                                variant: 'filled',
                                                className: y().playButton,
                                                iconClassName: y().playButtonIcon,
                                                isPlaying: P,
                                                onClick: j,
                                                iconSize: 'm',
                                            }),
                                        ],
                                    });
                                case g.h.SMALL:
                                    return (0, i.jsx)(_.n, {
                                        agent: a.agent,
                                        isPlaying: P,
                                        isCurrent: N,
                                        onPlayButtonClick: j,
                                        alt: ''.concat(v, ' ').concat(a.title),
                                        className: (0, r.$)(m.$f.playButtonCell, p),
                                    });
                            }
                        return (0, i.jsx)(m.q1, {
                            isAvailable: !0,
                            coverUri: null == n ? void 0 : n.uri,
                            title: a.title,
                            className: (0, r.$)(m.$f.playButtonCell, p),
                            entityCoverStyle: { backgroundColor: null == n ? void 0 : n.color },
                            radius: 'round',
                            onPlayButtonClick: j,
                            isPlaying: P,
                            isCurrent: N,
                            playButtonIconSize: A,
                            alt: ''.concat(v, ' ').concat(a.title),
                        });
                    }, [B, null == n ? void 0 : n.color, null == n ? void 0 : n.uri, p, v, j, N, P, A, a.agent, a.shouldShowAgent, a.title]);
                return (0, i.jsxs)(m.Cj, {
                    ref: b,
                    'data-intersection-property-id': D,
                    className: (0, r.$)(m.$f.root, t),
                    'aria-label': a.title,
                    onClick: L,
                    ...(0, s.Am)(s.OA.vibe.SEARCH_VIBE_CARD),
                    children: [
                        (0, i.jsx)(m.SU, {
                            isOpened: I,
                            onOpenChange: S,
                            isEnabled: V,
                            placement: 'bottom',
                            textVariant: 'vibe',
                            vibeTextVariant: a.stationType,
                            renderChildren: K,
                        }),
                        (0, i.jsx)(m.ro, {
                            title: (0, i.jsx)(c.Caption, { className: (0, r.$)(m.$f.text, m.$f.titleText), size: 'm', variant: 'div', type: 'text', children: a.title }),
                            description: v,
                        }),
                    ],
                });
            });
        },
        78533: (e, t, a) => {
            'use strict';
            a.d(t, { VibeAgentCard: () => y });
            var i = a(62936),
                r = a(79950),
                n = a(19718),
                o = a(44020),
                s = a(8669),
                l = a(60188),
                d = a(16258),
                c = a(20418),
                u = a(42561),
                m = a(85906),
                g = a(67226),
                C = a(33801),
                _ = a(7591),
                p = a.n(_);
            let y = (0, n.PA)((e) => {
                let { vibe: t, shouldShowPlayButton: a = !0, shouldShowAdditionals: n = !0, additionalsLinesCount: _ = 3, className: y } = e,
                    { pageId: A } = (0, u.$au)(),
                    { blockIdForFrom: v } = (0, u.N8n)(),
                    { ref: B, intersectionPropertyId: b } = (0, u.nMI)(),
                    { isFreemium: D } = (0, u.XCI)(),
                    [F, h] = (0, o.useState)(!1),
                    E = (0, g.useOnPinClick)(t),
                    { isPlaying: x, togglePlay: V } = (0, u.B0S)({ seeds: t.seeds, pageIdForFrom: A, blockIdForFrom: v }),
                    f = (0, u.brA)(),
                    w = (0, o.useCallback)(() => {
                        D || (V(), f(!x));
                    }, [D, V, f, x]),
                    I = (0, o.useCallback)(
                        () =>
                            (0, i.jsx)(
                                m.DM,
                                {
                                    className: (0, r.$)(p().playButton, p().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: w,
                                    isPlaying: x,
                                },
                                t.getKey('PlayButton'),
                            ),
                        [t, w, x],
                    ),
                    S = (0, l.L)(() =>
                        (0, i.jsx)(
                            m.SU,
                            { isEnabled: D, isOpened: F, onOpenChange: h, placement: 'top', textVariant: 'vibe', vibeTextVariant: t.stationType, renderChildren: I },
                            t.getKey('BuyPlusPopover'),
                        ),
                    ),
                    k = (0, l.L)(() =>
                        (0, i.jsx)(m.O0, { onClick: E, isPinned: t.isPinned, className: (0, r.$)(p().pinButton, p().control), withRipple: !1 }, t.getKey('PinButton')),
                    ),
                    P = (0, l.L)(() =>
                        (0, i.jsxs)('div', {
                            className: p().cover,
                            onClick: w,
                            children: [
                                t.agent && (0, i.jsx)(C.VibeCardView, { agent: t.agent, isPlaying: x }),
                                (0, i.jsx)(d.hg, { isVisible: F, className: p().controls, playControl: a ? S : void 0, pinControl: k }),
                            ],
                        }),
                    );
                return (0, i.jsx)(d.MN, {
                    ref: B,
                    className: (0, r.$)(p().root, y),
                    'data-intersection-property-id': b,
                    contentLinesCount: _,
                    view: P,
                    textPosition: 'center',
                    wrapperClassName: (0, r.$)({ [p().additionals_hide]: !n }),
                    title: (0, i.jsx)(c.Caption, { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title }, t.getKey('Title')),
                    description: (0, i.jsx)(
                        c.Caption,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    ...(0, s.Am)(s.OA.vibe.VIBE_AGENT_CARD),
                });
            });
        },
        80799: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        83405: (e) => {
            e.exports = { root: 'QueryToVibeSimple_root__fOVFG' };
        },
        84593: (e) => {
            e.exports = {
                root: 'VibeButton_root___i3R5',
                ripple: 'VibeButton_ripple__cmoBR',
                textContainer: 'VibeButton_textContainer__j9nOW',
                title: 'VibeButton_title__sLC0I',
                title_long: 'VibeButton_title_long__gSVM5',
                subtitle: 'VibeButton_subtitle__MQ_Ca',
                image: 'VibeButton_image__GOwKJ',
                button: 'VibeButton_button__tXFAm',
                button_loading: 'VibeButton_button_loading__LYnUR',
                titleContainer: 'VibeButton_titleContainer__yrRRu',
                'applying-setting': 'VibeButton_applying-setting__Jd_3C',
                icon: 'VibeButton_icon__KIv7n',
            };
        },
        85253: (e, t, a) => {
            'use strict';
            a.d(t, { QueryToVibe: () => d });
            var i = a(62936),
                r = a(42561),
                n = a(20519),
                o = a(53914);
            let s = {
                    [r.Sxu.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_search.lottie',
                    [r.Sxu.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_search.lottie',
                },
                l = {
                    loading: { loop: !0, markerId: 'loading' },
                    idle: { markerId: 'success' },
                    playing: { markerId: 'playing' },
                    paused: { markerId: 'playing', mode: 'reverse' },
                },
                d = (e) => {
                    let t = (0, n.p)();
                    return (0, i.jsx)(o.D, { animationByTheme: s, animationConfig: l, lumenImages: t, ...e });
                };
        },
        90659: (e) => {
            e.exports = {
                root: 'VibeCardView_root__bt_Xt',
                root_loading: 'VibeCardView_root_loading__J8fOe',
                cover: 'VibeCardView_cover__fBDH_',
                cover_round: 'VibeCardView_cover_round__LPs63',
                cover_loading: 'VibeCardView_cover_loading__kpdrp',
                shimmer: 'VibeCardView_shimmer__Rp6yh',
                shimmer_loading: 'VibeCardView_shimmer_loading__74dZm',
                animation: 'VibeCardView_animation__x3VEI',
                image: 'VibeCardView_image__5fXOh',
            };
        },
    },
]);
