'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2650],
    {
        2488: (e, t, a) => {
            a.d(t, { C: () => en });
            var o = a(72038),
                s = a(75643);
            function r(e, t) {
                let a = 0,
                    o = e.length,
                    s = !1;
                if (!t) {
                    if (e.startsWith('data:')) return null;
                    for (; a < e.length && 32 >= e.charCodeAt(a); ) a += 1;
                    for (; o > a + 1 && 32 >= e.charCodeAt(o - 1); ) o -= 1;
                    if (47 === e.charCodeAt(a) && 47 === e.charCodeAt(a + 1)) a += 2;
                    else {
                        let t = e.indexOf(':/', a);
                        if (-1 !== t) {
                            let o = t - a,
                                s = e.charCodeAt(a),
                                r = e.charCodeAt(a + 1),
                                i = e.charCodeAt(a + 2),
                                n = e.charCodeAt(a + 3),
                                l = e.charCodeAt(a + 4);
                            if (5 === o && 104 === s && 116 === r && 116 === i && 112 === n && 115 === l);
                            else if (4 === o && 104 === s && 116 === r && 116 === i && 112 === n);
                            else if (3 === o && 119 === s && 115 === r && 115 === i);
                            else if (2 === o && 119 === s && 115 === r);
                            else
                                for (let o = a; o < t; o += 1) {
                                    let t = 32 | e.charCodeAt(o);
                                    if (!((t >= 97 && t <= 122) || (t >= 48 && t <= 57) || 46 === t || 45 === t || 43 === t)) return null;
                                }
                            for (a = t + 2; 47 === e.charCodeAt(a); ) a += 1;
                        }
                    }
                    let t = -1,
                        r = -1,
                        i = -1;
                    for (let n = a; n < o; n += 1) {
                        let a = e.charCodeAt(n);
                        if (35 === a || 47 === a || 63 === a) {
                            o = n;
                            break;
                        }
                        64 === a ? (t = n) : 93 === a ? (r = n) : 58 === a ? (i = n) : a >= 65 && a <= 90 && (s = !0);
                    }
                    if ((-1 !== t && t > a && t < o && (a = t + 1), 91 === e.charCodeAt(a))) return -1 !== r ? e.slice(a + 1, r).toLowerCase() : null;
                    -1 !== i && i > a && i < o && (o = i);
                }
                for (; o > a + 1 && 46 === e.charCodeAt(o - 1); ) o -= 1;
                let r = 0 !== a || o !== e.length ? e.slice(a, o) : e;
                return s ? r.toLowerCase() : r;
            }
            function i(e) {
                return (e >= 97 && e <= 122) || (e >= 48 && e <= 57) || e > 127;
            }
            function n(e) {
                if (e.length > 255 || 0 === e.length || (!i(e.charCodeAt(0)) && 46 !== e.charCodeAt(0) && 95 !== e.charCodeAt(0))) return !1;
                let t = -1,
                    a = -1,
                    o = e.length;
                for (let s = 0; s < o; s += 1) {
                    let o = e.charCodeAt(s);
                    if (46 === o) {
                        if (s - t > 64 || 46 === a || 45 === a || 95 === a) return !1;
                        t = s;
                    } else if (!(i(o) || 45 === o || 95 === o)) return !1;
                    a = o;
                }
                return o - t - 1 <= 63 && 45 !== a;
            }
            function l({
                allowIcannDomains: e = !0,
                allowPrivateDomains: t = !1,
                detectIp: a = !0,
                extractHostname: o = !0,
                mixedInputs: s = !0,
                validHosts: r = null,
                validateHostname: i = !0,
            }) {
                return { allowIcannDomains: e, allowPrivateDomains: t, detectIp: a, extractHostname: o, mixedInputs: s, validHosts: r, validateHostname: i };
            }
            let u = l({}),
                c = (function () {
                    let e = [1, {}],
                        t = [0, { city: e }];
                    return [0, { ck: [0, { www: e }], jp: [0, { kawasaki: t, kitakyushu: t, kobe: t, nagoya: t, sapporo: t, sendai: t, yokohama: t }] }];
                })(),
                d = (function () {
                    let e = [1, {}],
                        t = [2, {}],
                        a = [1, { com: e, edu: e, gov: e, net: e, org: e }],
                        o = [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e }],
                        s = [0, { '*': t }],
                        r = [2, { s: s }],
                        i = [0, { relay: t }],
                        n = [2, { id: t }],
                        l = [1, { gov: e }],
                        u = [0, { airflow: s, 'lambda-url': t, 'transfer-webapp': t }],
                        c = [0, { airflow: s, 'transfer-webapp': t }],
                        d = [0, { 'transfer-webapp': t, 'transfer-webapp-fips': t }],
                        h = [0, { notebook: t, studio: t }],
                        m = [0, { labeling: t, notebook: t, studio: t }],
                        p = [0, { notebook: t }],
                        g = [0, { labeling: t, notebook: t, 'notebook-fips': t, studio: t }],
                        f = [0, { notebook: t, 'notebook-fips': t, studio: t, 'studio-fips': t }],
                        k = [0, { shop: t }],
                        b = [0, { '*': e }],
                        y = [1, { co: t }],
                        v = [0, { objects: t }],
                        w = [2, { nodes: t }],
                        x = [0, { my: t }],
                        j = [0, { s3: t, 's3-accesspoint': t, 's3-website': t }],
                        S = [0, { s3: t, 's3-accesspoint': t }],
                        E = [0, { direct: t }],
                        z = [0, { 'webview-assets': t }],
                        q = [0, { vfs: t, 'webview-assets': t }],
                        C = [
                            0,
                            {
                                'execute-api': t,
                                'emrappui-prod': t,
                                'emrnotebooks-prod': t,
                                'emrstudio-prod': t,
                                dualstack: j,
                                s3: t,
                                's3-accesspoint': t,
                                's3-object-lambda': t,
                                's3-website': t,
                                'aws-cloud9': z,
                                cloud9: q,
                            },
                        ],
                        O = [
                            0,
                            {
                                'execute-api': t,
                                'emrappui-prod': t,
                                'emrnotebooks-prod': t,
                                'emrstudio-prod': t,
                                dualstack: S,
                                s3: t,
                                's3-accesspoint': t,
                                's3-object-lambda': t,
                                's3-website': t,
                                'aws-cloud9': z,
                                cloud9: q,
                            },
                        ],
                        T = [
                            0,
                            {
                                'execute-api': t,
                                'emrappui-prod': t,
                                'emrnotebooks-prod': t,
                                'emrstudio-prod': t,
                                dualstack: j,
                                s3: t,
                                's3-accesspoint': t,
                                's3-object-lambda': t,
                                's3-website': t,
                                'analytics-gateway': t,
                                'aws-cloud9': z,
                                cloud9: q,
                            },
                        ],
                        P = [
                            0,
                            {
                                'execute-api': t,
                                'emrappui-prod': t,
                                'emrnotebooks-prod': t,
                                'emrstudio-prod': t,
                                dualstack: j,
                                s3: t,
                                's3-accesspoint': t,
                                's3-object-lambda': t,
                                's3-website': t,
                            },
                        ],
                        L = [0, { s3: t, 's3-accesspoint': t, 's3-accesspoint-fips': t, 's3-fips': t, 's3-website': t }],
                        A = [
                            0,
                            {
                                'execute-api': t,
                                'emrappui-prod': t,
                                'emrnotebooks-prod': t,
                                'emrstudio-prod': t,
                                dualstack: L,
                                s3: t,
                                's3-accesspoint': t,
                                's3-accesspoint-fips': t,
                                's3-fips': t,
                                's3-object-lambda': t,
                                's3-website': t,
                                'aws-cloud9': z,
                                cloud9: q,
                            },
                        ],
                        R = [
                            0,
                            {
                                'execute-api': t,
                                'emrappui-prod': t,
                                'emrnotebooks-prod': t,
                                'emrstudio-prod': t,
                                dualstack: L,
                                s3: t,
                                's3-accesspoint': t,
                                's3-accesspoint-fips': t,
                                's3-deprecated': t,
                                's3-fips': t,
                                's3-object-lambda': t,
                                's3-website': t,
                                'analytics-gateway': t,
                                'aws-cloud9': z,
                                cloud9: q,
                            },
                        ],
                        I = [
                            0,
                            {
                                'execute-api': t,
                                'emrappui-prod': t,
                                'emrnotebooks-prod': t,
                                'emrstudio-prod': t,
                                dualstack: [0, { s3: t, 's3-accesspoint': t, 's3-accesspoint-fips': t, 's3-fips': t }],
                                s3: t,
                                's3-accesspoint': t,
                                's3-accesspoint-fips': t,
                                's3-fips': t,
                                's3-object-lambda': t,
                                's3-website': t,
                            },
                        ],
                        D = [0, { auth: t }],
                        N = [0, { auth: t, 'auth-fips': t }],
                        $ = [0, { 'auth-fips': t }],
                        M = [0, { apps: t }],
                        W = [0, { paas: t }],
                        U = [2, { eu: t }],
                        H = [0, { app: t }],
                        _ = [0, { site: t }],
                        G = [1, { com: e, edu: e, net: e, org: e }],
                        F = [0, { j: t }],
                        B = [0, { dyn: t }],
                        J = [2, { web: t }],
                        V = [1, { co: e, com: e, edu: e, gov: e, net: e, org: e }],
                        X = [0, { p: t }],
                        K = [0, { user: t }],
                        Y = [0, { cdn: t }],
                        Q = [2, { raw: s }],
                        Z = [0, { cust: t, reservd: t }],
                        ee = [0, { cust: t }],
                        et = [0, { s3: t }],
                        ea = [1, { biz: e, com: e, edu: e, gov: e, info: e, net: e, org: e }],
                        eo = [0, { ipfs: t }],
                        es = [1, { framer: t }],
                        er = [0, { forgot: t }],
                        ei = [1, { gs: e }],
                        en = [0, { nes: e }],
                        el = [1, { k12: e, cc: e, lib: e }],
                        eu = [1, { cc: e }],
                        ec = [1, { cc: e, lib: e }];
                    return [
                        0,
                        {
                            ac: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, drr: t, feedback: t, forms: t }],
                            ad: e,
                            ae: [1, { ac: e, co: e, gov: e, mil: e, net: e, org: e, sch: e }],
                            aero: [
                                1,
                                {
                                    airline: e,
                                    airport: e,
                                    'accident-investigation': e,
                                    'accident-prevention': e,
                                    aerobatic: e,
                                    aeroclub: e,
                                    aerodrome: e,
                                    agents: e,
                                    'air-surveillance': e,
                                    'air-traffic-control': e,
                                    aircraft: e,
                                    airtraffic: e,
                                    ambulance: e,
                                    association: e,
                                    author: e,
                                    ballooning: e,
                                    broker: e,
                                    caa: e,
                                    cargo: e,
                                    catering: e,
                                    certification: e,
                                    championship: e,
                                    charter: e,
                                    civilaviation: e,
                                    club: e,
                                    conference: e,
                                    consultant: e,
                                    consulting: e,
                                    control: e,
                                    council: e,
                                    crew: e,
                                    design: e,
                                    dgca: e,
                                    educator: e,
                                    emergency: e,
                                    engine: e,
                                    engineer: e,
                                    entertainment: e,
                                    equipment: e,
                                    exchange: e,
                                    express: e,
                                    federation: e,
                                    flight: e,
                                    freight: e,
                                    fuel: e,
                                    gliding: e,
                                    government: e,
                                    groundhandling: e,
                                    group: e,
                                    hanggliding: e,
                                    homebuilt: e,
                                    insurance: e,
                                    journal: e,
                                    journalist: e,
                                    leasing: e,
                                    logistics: e,
                                    magazine: e,
                                    maintenance: e,
                                    marketplace: e,
                                    media: e,
                                    microlight: e,
                                    modelling: e,
                                    navigation: e,
                                    parachuting: e,
                                    paragliding: e,
                                    'passenger-association': e,
                                    pilot: e,
                                    press: e,
                                    production: e,
                                    recreation: e,
                                    repbody: e,
                                    res: e,
                                    research: e,
                                    rotorcraft: e,
                                    safety: e,
                                    scientist: e,
                                    services: e,
                                    show: e,
                                    skydiving: e,
                                    software: e,
                                    student: e,
                                    taxi: e,
                                    trader: e,
                                    trading: e,
                                    trainer: e,
                                    union: e,
                                    workinggroup: e,
                                    works: e,
                                },
                            ],
                            af: a,
                            ag: [1, { co: e, com: e, net: e, nom: e, org: e, obj: t }],
                            ai: [1, { com: e, net: e, off: e, org: e, uwu: t, framer: t }],
                            al: o,
                            am: [1, { co: e, com: e, commune: e, net: e, org: e, radio: t }],
                            ao: [1, { co: e, ed: e, edu: e, gov: e, gv: e, it: e, og: e, org: e, pb: e }],
                            aq: e,
                            ar: [1, { bet: e, com: e, coop: e, edu: e, gob: e, gov: e, int: e, mil: e, musica: e, mutual: e, net: e, org: e, seg: e, senasa: e, tur: e }],
                            arpa: [1, { e164: e, home: e, 'in-addr': e, ip6: e, iris: e, uri: e, urn: e }],
                            as: l,
                            asia: [1, { cloudns: t, daemon: t, dix: t }],
                            at: [
                                1,
                                {
                                    4: t,
                                    ac: [1, { sth: e }],
                                    co: e,
                                    gv: e,
                                    or: e,
                                    funkfeuer: [0, { wien: t }],
                                    futurecms: [0, { '*': t, ex: s, in: s }],
                                    futurehosting: t,
                                    futuremailing: t,
                                    ortsinfo: [0, { ex: s, kunden: s }],
                                    biz: t,
                                    info: t,
                                    '123webseite': t,
                                    priv: t,
                                    my: t,
                                    myspreadshop: t,
                                    '12hp': t,
                                    '2ix': t,
                                    '4lima': t,
                                    'lima-city': t,
                                },
                            ],
                            au: [
                                1,
                                {
                                    asn: e,
                                    com: [1, { cloudlets: [0, { mel: t }], myspreadshop: t }],
                                    edu: [1, { act: e, catholic: e, nsw: e, nt: e, qld: e, sa: e, tas: e, vic: e, wa: e }],
                                    gov: [1, { qld: e, sa: e, tas: e, vic: e, wa: e }],
                                    id: e,
                                    net: e,
                                    org: e,
                                    conf: e,
                                    oz: e,
                                    act: e,
                                    nsw: e,
                                    nt: e,
                                    qld: e,
                                    sa: e,
                                    tas: e,
                                    vic: e,
                                    wa: e,
                                    hrsn: [0, { vps: t }],
                                },
                            ],
                            aw: [1, { com: e }],
                            ax: e,
                            az: [1, { biz: e, co: e, com: e, edu: e, gov: e, info: e, int: e, mil: e, name: e, net: e, org: e, pp: e, pro: e }],
                            ba: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, brendly: k, rs: t }],
                            bb: [1, { biz: e, co: e, com: e, edu: e, gov: e, info: e, net: e, org: e, store: e, tv: e }],
                            bd: [1, { ac: e, ai: e, co: e, com: e, edu: e, gov: e, id: e, info: e, it: e, mil: e, net: e, org: e, sch: e, tv: e }],
                            be: [
                                1,
                                {
                                    ac: e,
                                    cloudns: t,
                                    webhosting: t,
                                    interhostsolutions: [0, { cloud: t }],
                                    kuleuven: [0, { ezproxy: t }],
                                    '123website': t,
                                    myspreadshop: t,
                                    transurl: s,
                                },
                            ],
                            bf: l,
                            bg: [
                                1,
                                {
                                    0: e,
                                    1: e,
                                    2: e,
                                    3: e,
                                    4: e,
                                    5: e,
                                    6: e,
                                    7: e,
                                    8: e,
                                    9: e,
                                    a: e,
                                    b: e,
                                    c: e,
                                    d: e,
                                    e: e,
                                    f: e,
                                    g: e,
                                    h: e,
                                    i: e,
                                    j: e,
                                    k: e,
                                    l: e,
                                    m: e,
                                    n: e,
                                    o: e,
                                    p: e,
                                    q: e,
                                    r: e,
                                    s: e,
                                    t: e,
                                    u: e,
                                    v: e,
                                    w: e,
                                    x: e,
                                    y: e,
                                    z: e,
                                    barsy: t,
                                },
                            ],
                            bh: a,
                            bi: [1, { co: e, com: e, edu: e, or: e, org: e }],
                            biz: [
                                1,
                                {
                                    activetrail: t,
                                    'cloud-ip': t,
                                    cloudns: t,
                                    jozi: t,
                                    dyndns: t,
                                    'for-better': t,
                                    'for-more': t,
                                    'for-some': t,
                                    'for-the': t,
                                    selfip: t,
                                    webhop: t,
                                    orx: t,
                                    mmafan: t,
                                    myftp: t,
                                    'no-ip': t,
                                    dscloud: t,
                                },
                            ],
                            bj: [
                                1,
                                {
                                    africa: e,
                                    agro: e,
                                    architectes: e,
                                    assur: e,
                                    avocats: e,
                                    co: e,
                                    com: e,
                                    eco: e,
                                    econo: e,
                                    edu: e,
                                    info: e,
                                    loisirs: e,
                                    money: e,
                                    net: e,
                                    org: e,
                                    ote: e,
                                    restaurant: e,
                                    resto: e,
                                    tourism: e,
                                    univ: e,
                                },
                            ],
                            bm: a,
                            bn: [1, { com: e, edu: e, gov: e, net: e, org: e, co: t }],
                            bo: [
                                1,
                                {
                                    com: e,
                                    edu: e,
                                    gob: e,
                                    int: e,
                                    mil: e,
                                    net: e,
                                    org: e,
                                    tv: e,
                                    web: e,
                                    academia: e,
                                    agro: e,
                                    arte: e,
                                    blog: e,
                                    bolivia: e,
                                    ciencia: e,
                                    cooperativa: e,
                                    democracia: e,
                                    deporte: e,
                                    ecologia: e,
                                    economia: e,
                                    empresa: e,
                                    indigena: e,
                                    industria: e,
                                    info: e,
                                    medicina: e,
                                    movimiento: e,
                                    musica: e,
                                    natural: e,
                                    nombre: e,
                                    noticias: e,
                                    patria: e,
                                    plurinacional: e,
                                    politica: e,
                                    profesional: e,
                                    pueblo: e,
                                    revista: e,
                                    salud: e,
                                    tecnologia: e,
                                    tksat: e,
                                    transporte: e,
                                    wiki: e,
                                },
                            ],
                            br: [
                                1,
                                {
                                    '9guacu': e,
                                    abc: e,
                                    adm: e,
                                    adv: e,
                                    agr: e,
                                    aju: e,
                                    am: e,
                                    anani: e,
                                    aparecida: e,
                                    api: e,
                                    app: e,
                                    arq: e,
                                    art: e,
                                    ato: e,
                                    b: e,
                                    barueri: e,
                                    belem: e,
                                    bet: e,
                                    bhz: e,
                                    bib: e,
                                    bio: e,
                                    blog: e,
                                    bmd: e,
                                    boavista: e,
                                    bsb: e,
                                    campinagrande: e,
                                    campinas: e,
                                    caxias: e,
                                    cim: e,
                                    cng: e,
                                    cnt: e,
                                    com: [1, { simplesite: t }],
                                    contagem: e,
                                    coop: e,
                                    coz: e,
                                    cri: e,
                                    cuiaba: e,
                                    curitiba: e,
                                    def: e,
                                    des: e,
                                    det: e,
                                    dev: e,
                                    ecn: e,
                                    eco: e,
                                    edu: e,
                                    emp: e,
                                    enf: e,
                                    eng: e,
                                    esp: e,
                                    etc: e,
                                    eti: e,
                                    far: e,
                                    feira: e,
                                    flog: e,
                                    floripa: e,
                                    fm: e,
                                    fnd: e,
                                    fortal: e,
                                    fot: e,
                                    foz: e,
                                    fst: e,
                                    g12: e,
                                    geo: e,
                                    ggf: e,
                                    goiania: e,
                                    gov: [
                                        1,
                                        {
                                            ac: e,
                                            al: e,
                                            am: e,
                                            ap: e,
                                            ba: e,
                                            ce: e,
                                            df: e,
                                            es: e,
                                            go: e,
                                            ma: e,
                                            mg: e,
                                            ms: e,
                                            mt: e,
                                            pa: e,
                                            pb: e,
                                            pe: e,
                                            pi: e,
                                            pr: e,
                                            rj: e,
                                            rn: e,
                                            ro: e,
                                            rr: e,
                                            rs: e,
                                            sc: e,
                                            se: e,
                                            sp: e,
                                            to: e,
                                        },
                                    ],
                                    gru: e,
                                    ia: e,
                                    imb: e,
                                    ind: e,
                                    inf: e,
                                    jab: e,
                                    jampa: e,
                                    jdf: e,
                                    joinville: e,
                                    jor: e,
                                    jus: e,
                                    leg: [
                                        1,
                                        {
                                            ac: t,
                                            al: t,
                                            am: t,
                                            ap: t,
                                            ba: t,
                                            ce: t,
                                            df: t,
                                            es: t,
                                            go: t,
                                            ma: t,
                                            mg: t,
                                            ms: t,
                                            mt: t,
                                            pa: t,
                                            pb: t,
                                            pe: t,
                                            pi: t,
                                            pr: t,
                                            rj: t,
                                            rn: t,
                                            ro: t,
                                            rr: t,
                                            rs: t,
                                            sc: t,
                                            se: t,
                                            sp: t,
                                            to: t,
                                        },
                                    ],
                                    leilao: e,
                                    lel: e,
                                    log: e,
                                    londrina: e,
                                    macapa: e,
                                    maceio: e,
                                    manaus: e,
                                    maringa: e,
                                    mat: e,
                                    med: e,
                                    mil: e,
                                    morena: e,
                                    mp: e,
                                    mus: e,
                                    natal: e,
                                    net: e,
                                    niteroi: e,
                                    nom: b,
                                    not: e,
                                    ntr: e,
                                    odo: e,
                                    ong: e,
                                    org: e,
                                    osasco: e,
                                    palmas: e,
                                    poa: e,
                                    ppg: e,
                                    pro: e,
                                    psc: e,
                                    psi: e,
                                    pvh: e,
                                    qsl: e,
                                    radio: e,
                                    rec: e,
                                    recife: e,
                                    rep: e,
                                    ribeirao: e,
                                    rio: e,
                                    riobranco: e,
                                    riopreto: e,
                                    salvador: e,
                                    sampa: e,
                                    santamaria: e,
                                    santoandre: e,
                                    saobernardo: e,
                                    saogonca: e,
                                    seg: e,
                                    sjc: e,
                                    slg: e,
                                    slz: e,
                                    social: e,
                                    sorocaba: e,
                                    srv: e,
                                    taxi: e,
                                    tc: e,
                                    tec: e,
                                    teo: e,
                                    the: e,
                                    tmp: e,
                                    trd: e,
                                    tur: e,
                                    tv: e,
                                    udi: e,
                                    vet: e,
                                    vix: e,
                                    vlog: e,
                                    wiki: e,
                                    xyz: e,
                                    zlg: e,
                                    tche: t,
                                },
                            ],
                            bs: [1, { com: e, edu: e, gov: e, net: e, org: e, we: t }],
                            bt: a,
                            bv: e,
                            bw: [1, { ac: e, co: e, gov: e, net: e, org: e }],
                            by: [1, { gov: e, mil: e, com: e, of: e, mediatech: t }],
                            bz: [1, { co: e, com: e, edu: e, gov: e, net: e, org: e, za: t, mydns: t, gsj: t }],
                            ca: [
                                1,
                                {
                                    ab: e,
                                    bc: e,
                                    mb: e,
                                    nb: e,
                                    nf: e,
                                    nl: e,
                                    ns: e,
                                    nt: e,
                                    nu: e,
                                    on: e,
                                    pe: e,
                                    qc: e,
                                    sk: e,
                                    yk: e,
                                    gc: e,
                                    barsy: t,
                                    awdev: s,
                                    co: t,
                                    'no-ip': t,
                                    onid: t,
                                    myspreadshop: t,
                                    box: t,
                                },
                            ],
                            cat: e,
                            cc: [
                                1,
                                {
                                    cleverapps: t,
                                    'cloud-ip': t,
                                    cloudns: t,
                                    ftpaccess: t,
                                    'game-server': t,
                                    myphotos: t,
                                    scrapping: t,
                                    twmail: t,
                                    csx: t,
                                    fantasyleague: t,
                                    spawn: [0, { instances: t }],
                                },
                            ],
                            cd: l,
                            cf: e,
                            cg: e,
                            ch: [
                                1,
                                {
                                    square7: t,
                                    cloudns: t,
                                    cloudscale: [0, { cust: t, lpg: v, rma: v }],
                                    objectstorage: [0, { lpg: t, rma: t }],
                                    flow: [0, { ae: [0, { alp1: t }], appengine: t }],
                                    'linkyard-cloud': t,
                                    gotdns: t,
                                    dnsking: t,
                                    '123website': t,
                                    myspreadshop: t,
                                    firenet: [0, { '*': t, svc: s }],
                                    '12hp': t,
                                    '2ix': t,
                                    '4lima': t,
                                    'lima-city': t,
                                },
                            ],
                            ci: [1, { ac: e, 'xn--aroport-bya': e, aéroport: e, asso: e, co: e, com: e, ed: e, edu: e, go: e, gouv: e, int: e, net: e, or: e, org: e }],
                            ck: b,
                            cl: [1, { co: e, gob: e, gov: e, mil: e, cloudns: t }],
                            cm: [1, { co: e, com: e, gov: e, net: e }],
                            cn: [
                                1,
                                {
                                    ac: e,
                                    com: [
                                        1,
                                        {
                                            amazonaws: [
                                                0,
                                                {
                                                    'cn-north-1': [
                                                        0,
                                                        {
                                                            'execute-api': t,
                                                            'emrappui-prod': t,
                                                            'emrnotebooks-prod': t,
                                                            'emrstudio-prod': t,
                                                            rds: s,
                                                            dualstack: j,
                                                            s3: t,
                                                            's3-accesspoint': t,
                                                            's3-deprecated': t,
                                                            's3-object-lambda': t,
                                                            's3-website': t,
                                                        },
                                                    ],
                                                    'cn-northwest-1': [
                                                        0,
                                                        {
                                                            'execute-api': t,
                                                            'emrappui-prod': t,
                                                            'emrnotebooks-prod': t,
                                                            'emrstudio-prod': t,
                                                            rds: s,
                                                            dualstack: S,
                                                            s3: t,
                                                            's3-accesspoint': t,
                                                            's3-object-lambda': t,
                                                            's3-website': t,
                                                        },
                                                    ],
                                                    compute: s,
                                                    airflow: [0, { 'cn-north-1': s, 'cn-northwest-1': s }],
                                                    eb: [0, { 'cn-north-1': t, 'cn-northwest-1': t }],
                                                    elb: s,
                                                },
                                            ],
                                            amazonwebservices: [0, { on: [0, { 'cn-north-1': c, 'cn-northwest-1': c }] }],
                                            sagemaker: [0, { 'cn-north-1': h, 'cn-northwest-1': h }],
                                        },
                                    ],
                                    edu: e,
                                    gov: e,
                                    mil: e,
                                    net: e,
                                    org: e,
                                    'xn--55qx5d': e,
                                    公司: e,
                                    'xn--od0alg': e,
                                    網絡: e,
                                    'xn--io0a7i': e,
                                    网络: e,
                                    ah: e,
                                    bj: e,
                                    cq: e,
                                    fj: e,
                                    gd: e,
                                    gs: e,
                                    gx: e,
                                    gz: e,
                                    ha: e,
                                    hb: e,
                                    he: e,
                                    hi: e,
                                    hk: e,
                                    hl: e,
                                    hn: e,
                                    jl: e,
                                    js: e,
                                    jx: e,
                                    ln: e,
                                    mo: e,
                                    nm: e,
                                    nx: e,
                                    qh: e,
                                    sc: e,
                                    sd: e,
                                    sh: [1, { as: t }],
                                    sn: e,
                                    sx: e,
                                    tj: e,
                                    tw: e,
                                    xj: e,
                                    xz: e,
                                    yn: e,
                                    zj: e,
                                    'canva-apps': t,
                                    canvasite: x,
                                    myqnapcloud: t,
                                    quickconnect: E,
                                },
                            ],
                            co: [
                                1,
                                {
                                    com: e,
                                    edu: e,
                                    gov: e,
                                    mil: e,
                                    net: e,
                                    nom: e,
                                    org: e,
                                    carrd: t,
                                    crd: t,
                                    otap: s,
                                    hidns: t,
                                    leadpages: t,
                                    lpages: t,
                                    mypi: t,
                                    xmit: s,
                                    firewalledreplit: n,
                                    repl: n,
                                    supabase: [2, { realtime: t, storage: t }],
                                    umso: t,
                                },
                            ],
                            com: [
                                1,
                                {
                                    a2hosted: t,
                                    cpserver: t,
                                    adobeaemcloud: [2, { dev: s }],
                                    africa: t,
                                    aivencloud: t,
                                    alibabacloudcs: t,
                                    kasserver: t,
                                    amazonaws: [
                                        0,
                                        {
                                            'af-south-1': C,
                                            'ap-east-1': O,
                                            'ap-northeast-1': T,
                                            'ap-northeast-2': T,
                                            'ap-northeast-3': C,
                                            'ap-south-1': T,
                                            'ap-south-2': P,
                                            'ap-southeast-1': T,
                                            'ap-southeast-2': T,
                                            'ap-southeast-3': P,
                                            'ap-southeast-4': P,
                                            'ap-southeast-5': [
                                                0,
                                                {
                                                    'execute-api': t,
                                                    dualstack: j,
                                                    s3: t,
                                                    's3-accesspoint': t,
                                                    's3-deprecated': t,
                                                    's3-object-lambda': t,
                                                    's3-website': t,
                                                },
                                            ],
                                            'ca-central-1': A,
                                            'ca-west-1': [
                                                0,
                                                {
                                                    'execute-api': t,
                                                    'emrappui-prod': t,
                                                    'emrnotebooks-prod': t,
                                                    'emrstudio-prod': t,
                                                    dualstack: L,
                                                    s3: t,
                                                    's3-accesspoint': t,
                                                    's3-accesspoint-fips': t,
                                                    's3-fips': t,
                                                    's3-object-lambda': t,
                                                    's3-website': t,
                                                },
                                            ],
                                            'eu-central-1': T,
                                            'eu-central-2': P,
                                            'eu-north-1': O,
                                            'eu-south-1': C,
                                            'eu-south-2': P,
                                            'eu-west-1': [
                                                0,
                                                {
                                                    'execute-api': t,
                                                    'emrappui-prod': t,
                                                    'emrnotebooks-prod': t,
                                                    'emrstudio-prod': t,
                                                    dualstack: j,
                                                    s3: t,
                                                    's3-accesspoint': t,
                                                    's3-deprecated': t,
                                                    's3-object-lambda': t,
                                                    's3-website': t,
                                                    'analytics-gateway': t,
                                                    'aws-cloud9': z,
                                                    cloud9: q,
                                                },
                                            ],
                                            'eu-west-2': O,
                                            'eu-west-3': C,
                                            'il-central-1': [
                                                0,
                                                {
                                                    'execute-api': t,
                                                    'emrappui-prod': t,
                                                    'emrnotebooks-prod': t,
                                                    'emrstudio-prod': t,
                                                    dualstack: j,
                                                    s3: t,
                                                    's3-accesspoint': t,
                                                    's3-object-lambda': t,
                                                    's3-website': t,
                                                    'aws-cloud9': z,
                                                    cloud9: [0, { vfs: t }],
                                                },
                                            ],
                                            'me-central-1': P,
                                            'me-south-1': O,
                                            'sa-east-1': C,
                                            'us-east-1': [
                                                2,
                                                {
                                                    'execute-api': t,
                                                    'emrappui-prod': t,
                                                    'emrnotebooks-prod': t,
                                                    'emrstudio-prod': t,
                                                    dualstack: L,
                                                    s3: t,
                                                    's3-accesspoint': t,
                                                    's3-accesspoint-fips': t,
                                                    's3-deprecated': t,
                                                    's3-fips': t,
                                                    's3-object-lambda': t,
                                                    's3-website': t,
                                                    'analytics-gateway': t,
                                                    'aws-cloud9': z,
                                                    cloud9: q,
                                                },
                                            ],
                                            'us-east-2': R,
                                            'us-gov-east-1': I,
                                            'us-gov-west-1': I,
                                            'us-west-1': A,
                                            'us-west-2': R,
                                            compute: s,
                                            'compute-1': s,
                                            airflow: [
                                                0,
                                                {
                                                    'af-south-1': s,
                                                    'ap-east-1': s,
                                                    'ap-northeast-1': s,
                                                    'ap-northeast-2': s,
                                                    'ap-northeast-3': s,
                                                    'ap-south-1': s,
                                                    'ap-south-2': s,
                                                    'ap-southeast-1': s,
                                                    'ap-southeast-2': s,
                                                    'ap-southeast-3': s,
                                                    'ap-southeast-4': s,
                                                    'ap-southeast-5': s,
                                                    'ap-southeast-7': s,
                                                    'ca-central-1': s,
                                                    'ca-west-1': s,
                                                    'eu-central-1': s,
                                                    'eu-central-2': s,
                                                    'eu-north-1': s,
                                                    'eu-south-1': s,
                                                    'eu-south-2': s,
                                                    'eu-west-1': s,
                                                    'eu-west-2': s,
                                                    'eu-west-3': s,
                                                    'il-central-1': s,
                                                    'me-central-1': s,
                                                    'me-south-1': s,
                                                    'sa-east-1': s,
                                                    'us-east-1': s,
                                                    'us-east-2': s,
                                                    'us-west-1': s,
                                                    'us-west-2': s,
                                                },
                                            ],
                                            rds: [
                                                0,
                                                {
                                                    'af-south-1': s,
                                                    'ap-east-1': s,
                                                    'ap-east-2': s,
                                                    'ap-northeast-1': s,
                                                    'ap-northeast-2': s,
                                                    'ap-northeast-3': s,
                                                    'ap-south-1': s,
                                                    'ap-south-2': s,
                                                    'ap-southeast-1': s,
                                                    'ap-southeast-2': s,
                                                    'ap-southeast-3': s,
                                                    'ap-southeast-4': s,
                                                    'ap-southeast-5': s,
                                                    'ap-southeast-6': s,
                                                    'ap-southeast-7': s,
                                                    'ca-central-1': s,
                                                    'ca-west-1': s,
                                                    'eu-central-1': s,
                                                    'eu-central-2': s,
                                                    'eu-west-1': s,
                                                    'eu-west-2': s,
                                                    'eu-west-3': s,
                                                    'il-central-1': s,
                                                    'me-central-1': s,
                                                    'me-south-1': s,
                                                    'mx-central-1': s,
                                                    'sa-east-1': s,
                                                    'us-east-1': s,
                                                    'us-east-2': s,
                                                    'us-gov-east-1': s,
                                                    'us-gov-west-1': s,
                                                    'us-northeast-1': s,
                                                    'us-west-1': s,
                                                    'us-west-2': s,
                                                },
                                            ],
                                            s3: t,
                                            's3-1': t,
                                            's3-ap-east-1': t,
                                            's3-ap-northeast-1': t,
                                            's3-ap-northeast-2': t,
                                            's3-ap-northeast-3': t,
                                            's3-ap-south-1': t,
                                            's3-ap-southeast-1': t,
                                            's3-ap-southeast-2': t,
                                            's3-ca-central-1': t,
                                            's3-eu-central-1': t,
                                            's3-eu-north-1': t,
                                            's3-eu-west-1': t,
                                            's3-eu-west-2': t,
                                            's3-eu-west-3': t,
                                            's3-external-1': t,
                                            's3-fips-us-gov-east-1': t,
                                            's3-fips-us-gov-west-1': t,
                                            's3-global': [0, { accesspoint: [0, { mrap: t }] }],
                                            's3-me-south-1': t,
                                            's3-sa-east-1': t,
                                            's3-us-east-2': t,
                                            's3-us-gov-east-1': t,
                                            's3-us-gov-west-1': t,
                                            's3-us-west-1': t,
                                            's3-us-west-2': t,
                                            's3-website-ap-northeast-1': t,
                                            's3-website-ap-southeast-1': t,
                                            's3-website-ap-southeast-2': t,
                                            's3-website-eu-west-1': t,
                                            's3-website-sa-east-1': t,
                                            's3-website-us-east-1': t,
                                            's3-website-us-gov-west-1': t,
                                            's3-website-us-west-1': t,
                                            's3-website-us-west-2': t,
                                            elb: s,
                                        },
                                    ],
                                    amazoncognito: [
                                        0,
                                        {
                                            'af-south-1': D,
                                            'ap-east-1': D,
                                            'ap-northeast-1': D,
                                            'ap-northeast-2': D,
                                            'ap-northeast-3': D,
                                            'ap-south-1': D,
                                            'ap-south-2': D,
                                            'ap-southeast-1': D,
                                            'ap-southeast-2': D,
                                            'ap-southeast-3': D,
                                            'ap-southeast-4': D,
                                            'ap-southeast-5': D,
                                            'ap-southeast-7': D,
                                            'ca-central-1': D,
                                            'ca-west-1': D,
                                            'eu-central-1': D,
                                            'eu-central-2': D,
                                            'eu-north-1': D,
                                            'eu-south-1': D,
                                            'eu-south-2': D,
                                            'eu-west-1': D,
                                            'eu-west-2': D,
                                            'eu-west-3': D,
                                            'il-central-1': D,
                                            'me-central-1': D,
                                            'me-south-1': D,
                                            'mx-central-1': D,
                                            'sa-east-1': D,
                                            'us-east-1': N,
                                            'us-east-2': N,
                                            'us-gov-east-1': $,
                                            'us-gov-west-1': $,
                                            'us-west-1': N,
                                            'us-west-2': N,
                                        },
                                    ],
                                    amplifyapp: t,
                                    awsapprunner: s,
                                    awsapps: t,
                                    elasticbeanstalk: [
                                        2,
                                        {
                                            'af-south-1': t,
                                            'ap-east-1': t,
                                            'ap-northeast-1': t,
                                            'ap-northeast-2': t,
                                            'ap-northeast-3': t,
                                            'ap-south-1': t,
                                            'ap-southeast-1': t,
                                            'ap-southeast-2': t,
                                            'ap-southeast-3': t,
                                            'ap-southeast-5': t,
                                            'ap-southeast-7': t,
                                            'ca-central-1': t,
                                            'eu-central-1': t,
                                            'eu-north-1': t,
                                            'eu-south-1': t,
                                            'eu-south-2': t,
                                            'eu-west-1': t,
                                            'eu-west-2': t,
                                            'eu-west-3': t,
                                            'il-central-1': t,
                                            'me-central-1': t,
                                            'me-south-1': t,
                                            'sa-east-1': t,
                                            'us-east-1': t,
                                            'us-east-2': t,
                                            'us-gov-east-1': t,
                                            'us-gov-west-1': t,
                                            'us-west-1': t,
                                            'us-west-2': t,
                                        },
                                    ],
                                    awsglobalaccelerator: t,
                                    siiites: t,
                                    appspacehosted: t,
                                    appspaceusercontent: t,
                                    'on-aptible': t,
                                    myasustor: t,
                                    'balena-devices': t,
                                    boutir: t,
                                    bplaced: t,
                                    cafjs: t,
                                    'canva-apps': t,
                                    'canva-hosted-embed': t,
                                    canvacode: t,
                                    'rice-labs': t,
                                    'cdn77-storage': t,
                                    br: t,
                                    cn: t,
                                    de: t,
                                    eu: t,
                                    jpn: t,
                                    mex: t,
                                    ru: t,
                                    sa: t,
                                    uk: t,
                                    us: t,
                                    za: t,
                                    'clever-cloud': [0, { services: s }],
                                    abrdns: t,
                                    dnsabr: t,
                                    'ip-ddns': t,
                                    jdevcloud: t,
                                    wpdevcloud: t,
                                    'cf-ipfs': t,
                                    'cloudflare-ipfs': t,
                                    trycloudflare: t,
                                    co: t,
                                    devinapps: s,
                                    builtwithdark: t,
                                    datadetect: [0, { demo: t, instance: t }],
                                    dattolocal: t,
                                    dattorelay: t,
                                    dattoweb: t,
                                    mydatto: t,
                                    digitaloceanspaces: s,
                                    discordsays: t,
                                    discordsez: t,
                                    drayddns: t,
                                    dreamhosters: t,
                                    durumis: t,
                                    blogdns: t,
                                    cechire: t,
                                    dnsalias: t,
                                    dnsdojo: t,
                                    doesntexist: t,
                                    dontexist: t,
                                    doomdns: t,
                                    'dyn-o-saur': t,
                                    dynalias: t,
                                    'dyndns-at-home': t,
                                    'dyndns-at-work': t,
                                    'dyndns-blog': t,
                                    'dyndns-free': t,
                                    'dyndns-home': t,
                                    'dyndns-ip': t,
                                    'dyndns-mail': t,
                                    'dyndns-office': t,
                                    'dyndns-pics': t,
                                    'dyndns-remote': t,
                                    'dyndns-server': t,
                                    'dyndns-web': t,
                                    'dyndns-wiki': t,
                                    'dyndns-work': t,
                                    'est-a-la-maison': t,
                                    'est-a-la-masion': t,
                                    'est-le-patron': t,
                                    'est-mon-blogueur': t,
                                    'from-ak': t,
                                    'from-al': t,
                                    'from-ar': t,
                                    'from-ca': t,
                                    'from-ct': t,
                                    'from-dc': t,
                                    'from-de': t,
                                    'from-fl': t,
                                    'from-ga': t,
                                    'from-hi': t,
                                    'from-ia': t,
                                    'from-id': t,
                                    'from-il': t,
                                    'from-in': t,
                                    'from-ks': t,
                                    'from-ky': t,
                                    'from-ma': t,
                                    'from-md': t,
                                    'from-mi': t,
                                    'from-mn': t,
                                    'from-mo': t,
                                    'from-ms': t,
                                    'from-mt': t,
                                    'from-nc': t,
                                    'from-nd': t,
                                    'from-ne': t,
                                    'from-nh': t,
                                    'from-nj': t,
                                    'from-nm': t,
                                    'from-nv': t,
                                    'from-oh': t,
                                    'from-ok': t,
                                    'from-or': t,
                                    'from-pa': t,
                                    'from-pr': t,
                                    'from-ri': t,
                                    'from-sc': t,
                                    'from-sd': t,
                                    'from-tn': t,
                                    'from-tx': t,
                                    'from-ut': t,
                                    'from-va': t,
                                    'from-vt': t,
                                    'from-wa': t,
                                    'from-wi': t,
                                    'from-wv': t,
                                    'from-wy': t,
                                    getmyip: t,
                                    gotdns: t,
                                    'hobby-site': t,
                                    homelinux: t,
                                    homeunix: t,
                                    iamallama: t,
                                    'is-a-anarchist': t,
                                    'is-a-blogger': t,
                                    'is-a-bookkeeper': t,
                                    'is-a-bulls-fan': t,
                                    'is-a-caterer': t,
                                    'is-a-chef': t,
                                    'is-a-conservative': t,
                                    'is-a-cpa': t,
                                    'is-a-cubicle-slave': t,
                                    'is-a-democrat': t,
                                    'is-a-designer': t,
                                    'is-a-doctor': t,
                                    'is-a-financialadvisor': t,
                                    'is-a-geek': t,
                                    'is-a-green': t,
                                    'is-a-guru': t,
                                    'is-a-hard-worker': t,
                                    'is-a-hunter': t,
                                    'is-a-landscaper': t,
                                    'is-a-lawyer': t,
                                    'is-a-liberal': t,
                                    'is-a-libertarian': t,
                                    'is-a-llama': t,
                                    'is-a-musician': t,
                                    'is-a-nascarfan': t,
                                    'is-a-nurse': t,
                                    'is-a-painter': t,
                                    'is-a-personaltrainer': t,
                                    'is-a-photographer': t,
                                    'is-a-player': t,
                                    'is-a-republican': t,
                                    'is-a-rockstar': t,
                                    'is-a-socialist': t,
                                    'is-a-student': t,
                                    'is-a-teacher': t,
                                    'is-a-techie': t,
                                    'is-a-therapist': t,
                                    'is-an-accountant': t,
                                    'is-an-actor': t,
                                    'is-an-actress': t,
                                    'is-an-anarchist': t,
                                    'is-an-artist': t,
                                    'is-an-engineer': t,
                                    'is-an-entertainer': t,
                                    'is-certified': t,
                                    'is-gone': t,
                                    'is-into-anime': t,
                                    'is-into-cars': t,
                                    'is-into-cartoons': t,
                                    'is-into-games': t,
                                    'is-leet': t,
                                    'is-not-certified': t,
                                    'is-slick': t,
                                    'is-uberleet': t,
                                    'is-with-theband': t,
                                    'isa-geek': t,
                                    'isa-hockeynut': t,
                                    issmarterthanyou: t,
                                    'likes-pie': t,
                                    likescandy: t,
                                    'neat-url': t,
                                    'saves-the-whales': t,
                                    selfip: t,
                                    'sells-for-less': t,
                                    'sells-for-u': t,
                                    servebbs: t,
                                    'simple-url': t,
                                    'space-to-rent': t,
                                    'teaches-yoga': t,
                                    writesthisblog: t,
                                    ddnsfree: t,
                                    ddnsgeek: t,
                                    giize: t,
                                    gleeze: t,
                                    kozow: t,
                                    loseyourip: t,
                                    ooguy: t,
                                    theworkpc: t,
                                    mytuleap: t,
                                    'tuleap-partners': t,
                                    encoreapi: t,
                                    evennode: [0, { 'eu-1': t, 'eu-2': t, 'eu-3': t, 'eu-4': t, 'us-1': t, 'us-2': t, 'us-3': t, 'us-4': t }],
                                    onfabrica: t,
                                    'fastly-edge': t,
                                    'fastly-terrarium': t,
                                    'fastvps-server': t,
                                    mydobiss: t,
                                    firebaseapp: t,
                                    fldrv: t,
                                    forgeblocks: t,
                                    framercanvas: t,
                                    'freebox-os': t,
                                    freeboxos: t,
                                    freemyip: t,
                                    aliases121: t,
                                    gentapps: t,
                                    gentlentapis: t,
                                    githubusercontent: t,
                                    '0emm': s,
                                    appspot: [2, { r: s }],
                                    blogspot: t,
                                    codespot: t,
                                    googleapis: t,
                                    googlecode: t,
                                    pagespeedmobilizer: t,
                                    withgoogle: t,
                                    withyoutube: t,
                                    grayjayleagues: t,
                                    hatenablog: t,
                                    hatenadiary: t,
                                    herokuapp: t,
                                    gr: t,
                                    smushcdn: t,
                                    wphostedmail: t,
                                    wpmucdn: t,
                                    pixolino: t,
                                    'apps-1and1': t,
                                    'live-website': t,
                                    'webspace-host': t,
                                    dopaas: t,
                                    'hosted-by-previder': W,
                                    hosteur: [0, { 'rag-cloud': t, 'rag-cloud-ch': t }],
                                    'ik-server': [0, { jcloud: t, 'jcloud-ver-jpc': t }],
                                    jelastic: [0, { demo: t }],
                                    massivegrid: W,
                                    wafaicloud: [0, { jed: t, ryd: t }],
                                    'eu1-plenit': t,
                                    'la1-plenit': t,
                                    'us1-plenit': t,
                                    webadorsite: t,
                                    joyent: [0, { cns: s }],
                                    'on-forge': t,
                                    'on-vapor': t,
                                    lpusercontent: t,
                                    linode: [0, { members: t, nodebalancer: s }],
                                    linodeobjects: s,
                                    linodeusercontent: [0, { ip: t }],
                                    localtonet: t,
                                    lovableproject: t,
                                    barsycenter: t,
                                    barsyonline: t,
                                    lutrausercontent: s,
                                    modelscape: t,
                                    mwcloudnonprod: t,
                                    polyspace: t,
                                    mazeplay: t,
                                    miniserver: t,
                                    atmeta: t,
                                    fbsbx: M,
                                    meteorapp: U,
                                    routingthecloud: t,
                                    'same-app': t,
                                    'same-preview': t,
                                    mydbserver: t,
                                    mochausercontent: t,
                                    hostedpi: t,
                                    'mythic-beasts': [
                                        0,
                                        { caracal: t, customer: t, fentiger: t, lynx: t, ocelot: t, oncilla: t, onza: t, sphinx: t, vs: t, x: t, yali: t },
                                    ],
                                    nospamproxy: [0, { cloud: [2, { o365: t }] }],
                                    '4u': t,
                                    nfshost: t,
                                    '3utilities': t,
                                    blogsyte: t,
                                    ciscofreak: t,
                                    damnserver: t,
                                    ddnsking: t,
                                    ditchyourip: t,
                                    dnsiskinky: t,
                                    dynns: t,
                                    geekgalaxy: t,
                                    'health-carereform': t,
                                    homesecuritymac: t,
                                    homesecuritypc: t,
                                    myactivedirectory: t,
                                    mysecuritycamera: t,
                                    myvnc: t,
                                    'net-freaks': t,
                                    onthewifi: t,
                                    point2this: t,
                                    quicksytes: t,
                                    securitytactics: t,
                                    servebeer: t,
                                    servecounterstrike: t,
                                    serveexchange: t,
                                    serveftp: t,
                                    servegame: t,
                                    servehalflife: t,
                                    servehttp: t,
                                    servehumour: t,
                                    serveirc: t,
                                    servemp3: t,
                                    servep2p: t,
                                    servepics: t,
                                    servequake: t,
                                    servesarcasm: t,
                                    stufftoread: t,
                                    unusualperson: t,
                                    workisboring: t,
                                    myiphost: t,
                                    observableusercontent: [0, { static: t }],
                                    simplesite: t,
                                    oaiusercontent: s,
                                    orsites: t,
                                    operaunite: t,
                                    'customer-oci': [0, { '*': t, oci: s, ocp: s, ocs: s }],
                                    oraclecloudapps: s,
                                    oraclegovcloudapps: s,
                                    'authgear-staging': t,
                                    authgearapps: t,
                                    skygearapp: t,
                                    outsystemscloud: t,
                                    ownprovider: t,
                                    pgfog: t,
                                    pagexl: t,
                                    gotpantheon: t,
                                    paywhirl: s,
                                    upsunapp: t,
                                    'postman-echo': t,
                                    prgmr: [0, { xen: t }],
                                    'project-study': [0, { dev: t }],
                                    pythonanywhere: U,
                                    qa2: t,
                                    'alpha-myqnapcloud': t,
                                    'dev-myqnapcloud': t,
                                    mycloudnas: t,
                                    mynascloud: t,
                                    myqnapcloud: t,
                                    qualifioapp: t,
                                    ladesk: t,
                                    qualyhqpartner: s,
                                    qualyhqportal: s,
                                    qbuser: t,
                                    quipelements: s,
                                    rackmaze: t,
                                    'readthedocs-hosted': t,
                                    rhcloud: t,
                                    onrender: t,
                                    render: H,
                                    'subsc-pay': t,
                                    '180r': t,
                                    dojin: t,
                                    sakuratan: t,
                                    sakuraweb: t,
                                    x0: t,
                                    code: [0, { builder: s, 'dev-builder': s, 'stg-builder': s }],
                                    salesforce: [0, { platform: [0, { 'code-builder-stg': [0, { test: [0, { '001': s }] }] }] }],
                                    logoip: t,
                                    scrysec: t,
                                    'firewall-gateway': t,
                                    myshopblocks: t,
                                    myshopify: t,
                                    shopitsite: t,
                                    '1kapp': t,
                                    appchizi: t,
                                    applinzi: t,
                                    sinaapp: t,
                                    vipsinaapp: t,
                                    streamlitapp: t,
                                    'try-snowplow': t,
                                    'playstation-cloud': t,
                                    myspreadshop: t,
                                    'w-corp-staticblitz': t,
                                    'w-credentialless-staticblitz': t,
                                    'w-staticblitz': t,
                                    'stackhero-network': t,
                                    stdlib: [0, { api: t }],
                                    strapiapp: [2, { media: t }],
                                    'streak-link': t,
                                    streaklinks: t,
                                    streakusercontent: t,
                                    'temp-dns': t,
                                    dsmynas: t,
                                    familyds: t,
                                    mytabit: t,
                                    taveusercontent: t,
                                    'tb-hosting': _,
                                    reservd: t,
                                    thingdustdata: t,
                                    'townnews-staging': t,
                                    typeform: [0, { pro: t }],
                                    hk: t,
                                    it: t,
                                    'deus-canvas': t,
                                    vultrobjects: s,
                                    wafflecell: t,
                                    hotelwithflight: t,
                                    'reserve-online': t,
                                    cprapid: t,
                                    pleskns: t,
                                    remotewd: t,
                                    wiardweb: [0, { pages: t }],
                                    wixsite: t,
                                    wixstudio: t,
                                    messwithdns: t,
                                    'woltlab-demo': t,
                                    wpenginepowered: [2, { js: t }],
                                    xnbay: [2, { u2: t, 'u2-local': t }],
                                    yolasite: t,
                                },
                            ],
                            coop: e,
                            cr: [1, { ac: e, co: e, ed: e, fi: e, go: e, or: e, sa: e }],
                            cu: [1, { com: e, edu: e, gob: e, inf: e, nat: e, net: e, org: e }],
                            cv: [1, { com: e, edu: e, id: e, int: e, net: e, nome: e, org: e, publ: e }],
                            cw: G,
                            cx: [1, { gov: e, cloudns: t, ath: t, info: t, assessments: t, calculators: t, funnels: t, paynow: t, quizzes: t, researched: t, tests: t }],
                            cy: [1, { ac: e, biz: e, com: [1, { scaleforce: F }], ekloges: e, gov: e, ltd: e, mil: e, net: e, org: e, press: e, pro: e, tm: e }],
                            cz: [
                                1,
                                {
                                    gov: e,
                                    contentproxy9: [0, { rsc: t }],
                                    realm: t,
                                    e4: t,
                                    co: t,
                                    metacentrum: [0, { cloud: s, custom: t }],
                                    muni: [0, { cloud: [0, { flt: t, usr: t }] }],
                                },
                            ],
                            de: [
                                1,
                                {
                                    bplaced: t,
                                    square7: t,
                                    com: t,
                                    cosidns: B,
                                    dnsupdater: t,
                                    'dynamisches-dns': t,
                                    'internet-dns': t,
                                    'l-o-g-i-n': t,
                                    ddnss: [2, { dyn: t, dyndns: t }],
                                    'dyn-ip24': t,
                                    dyndns1: t,
                                    'home-webserver': [2, { dyn: t }],
                                    'myhome-server': t,
                                    dnshome: t,
                                    fuettertdasnetz: t,
                                    isteingeek: t,
                                    istmein: t,
                                    lebtimnetz: t,
                                    leitungsen: t,
                                    traeumtgerade: t,
                                    frusky: s,
                                    goip: t,
                                    'xn--gnstigbestellen-zvb': t,
                                    günstigbestellen: t,
                                    'xn--gnstigliefern-wob': t,
                                    günstigliefern: t,
                                    'hs-heilbronn': [0, { it: [0, { pages: t, 'pages-research': t }] }],
                                    'dyn-berlin': t,
                                    'in-berlin': t,
                                    'in-brb': t,
                                    'in-butter': t,
                                    'in-dsl': t,
                                    'in-vpn': t,
                                    iservschule: t,
                                    'mein-iserv': t,
                                    schuldock: t,
                                    schulplattform: t,
                                    schulserver: t,
                                    'test-iserv': t,
                                    keymachine: t,
                                    co: t,
                                    'git-repos': t,
                                    'lcube-server': t,
                                    'svn-repos': t,
                                    barsy: t,
                                    webspaceconfig: t,
                                    '123webseite': t,
                                    rub: t,
                                    'ruhr-uni-bochum': [2, { noc: [0, { io: t }] }],
                                    logoip: t,
                                    'firewall-gateway': t,
                                    'my-gateway': t,
                                    'my-router': t,
                                    spdns: t,
                                    my: t,
                                    speedpartner: [0, { customer: t }],
                                    myspreadshop: t,
                                    'taifun-dns': t,
                                    '12hp': t,
                                    '2ix': t,
                                    '4lima': t,
                                    'lima-city': t,
                                    'dd-dns': t,
                                    'dray-dns': t,
                                    draydns: t,
                                    'dyn-vpn': t,
                                    dynvpn: t,
                                    'mein-vigor': t,
                                    'my-vigor': t,
                                    'my-wan': t,
                                    'syno-ds': t,
                                    'synology-diskstation': t,
                                    'synology-ds': t,
                                    'virtual-user': t,
                                    virtualuser: t,
                                    'community-pro': t,
                                    diskussionsbereich: t,
                                    xenonconnect: s,
                                },
                            ],
                            dj: e,
                            dk: [1, { biz: t, co: t, firm: t, reg: t, store: t, '123hjemmeside': t, myspreadshop: t }],
                            dm: V,
                            do: [1, { art: e, com: e, edu: e, gob: e, gov: e, mil: e, net: e, org: e, sld: e, web: e }],
                            dz: [1, { art: e, asso: e, com: e, edu: e, gov: e, net: e, org: e, pol: e, soc: e, tm: e }],
                            ec: [
                                1,
                                {
                                    abg: e,
                                    adm: e,
                                    agron: e,
                                    arqt: e,
                                    art: e,
                                    bar: e,
                                    chef: e,
                                    com: e,
                                    cont: e,
                                    cpa: e,
                                    cue: e,
                                    dent: e,
                                    dgn: e,
                                    disco: e,
                                    doc: e,
                                    edu: e,
                                    eng: e,
                                    esm: e,
                                    fin: e,
                                    fot: e,
                                    gal: e,
                                    gob: e,
                                    gov: e,
                                    gye: e,
                                    ibr: e,
                                    info: e,
                                    k12: e,
                                    lat: e,
                                    loj: e,
                                    med: e,
                                    mil: e,
                                    mktg: e,
                                    mon: e,
                                    net: e,
                                    ntr: e,
                                    odont: e,
                                    org: e,
                                    pro: e,
                                    prof: e,
                                    psic: e,
                                    psiq: e,
                                    pub: e,
                                    rio: e,
                                    rrpp: e,
                                    sal: e,
                                    tech: e,
                                    tul: e,
                                    tur: e,
                                    uio: e,
                                    vet: e,
                                    xxx: e,
                                    base: t,
                                    official: t,
                                },
                            ],
                            edu: [1, { rit: [0, { 'git-pages': t }] }],
                            ee: [1, { aip: e, com: e, edu: e, fie: e, gov: e, lib: e, med: e, org: e, pri: e, riik: e }],
                            eg: [1, { ac: e, com: e, edu: e, eun: e, gov: e, info: e, me: e, mil: e, name: e, net: e, org: e, sci: e, sport: e, tv: e }],
                            er: b,
                            es: [1, { com: e, edu: e, gob: e, nom: e, org: e, '123miweb': t, myspreadshop: t }],
                            et: [1, { biz: e, com: e, edu: e, gov: e, info: e, name: e, net: e, org: e }],
                            eu: [1, { cloudns: t, prvw: t, dogado: [0, { jelastic: t }], barsy: t, spdns: t, nxa: s, directwp: t, transurl: s, diskstation: t }],
                            fi: [
                                1,
                                {
                                    aland: e,
                                    dy: t,
                                    'xn--hkkinen-5wa': t,
                                    häkkinen: t,
                                    iki: t,
                                    cloudplatform: [0, { fi: t }],
                                    datacenter: [0, { demo: t, paas: t }],
                                    kapsi: t,
                                    '123kotisivu': t,
                                    myspreadshop: t,
                                },
                            ],
                            fj: [1, { ac: e, biz: e, com: e, edu: e, gov: e, id: e, info: e, mil: e, name: e, net: e, org: e, pro: e }],
                            fk: b,
                            fm: [1, { com: e, edu: e, net: e, org: e, radio: t, user: s }],
                            fo: e,
                            fr: [
                                1,
                                {
                                    asso: e,
                                    com: e,
                                    gouv: e,
                                    nom: e,
                                    prd: e,
                                    tm: e,
                                    avoues: e,
                                    cci: e,
                                    greta: e,
                                    'huissier-justice': e,
                                    'en-root': t,
                                    'fbx-os': t,
                                    fbxos: t,
                                    'freebox-os': t,
                                    freeboxos: t,
                                    goupile: t,
                                    '123siteweb': t,
                                    'on-web': t,
                                    'chirurgiens-dentistes-en-france': t,
                                    dedibox: t,
                                    aeroport: t,
                                    avocat: t,
                                    chambagri: t,
                                    'chirurgiens-dentistes': t,
                                    'experts-comptables': t,
                                    medecin: t,
                                    notaires: t,
                                    pharmacien: t,
                                    port: t,
                                    veterinaire: t,
                                    myspreadshop: t,
                                    ynh: t,
                                },
                            ],
                            ga: e,
                            gb: e,
                            gd: [1, { edu: e, gov: e }],
                            ge: [1, { com: e, edu: e, gov: e, net: e, org: e, pvt: e, school: e }],
                            gf: e,
                            gg: [1, { co: e, net: e, org: e, ply: [0, { at: s, d6: t }], botdash: t, kaas: t, stackit: t, panel: [2, { daemon: t }] }],
                            gh: [1, { biz: e, com: e, edu: e, gov: e, mil: e, net: e, org: e }],
                            gi: [1, { com: e, edu: e, gov: e, ltd: e, mod: e, org: e }],
                            gl: [1, { co: e, com: e, edu: e, net: e, org: e }],
                            gm: e,
                            gn: [1, { ac: e, com: e, edu: e, gov: e, net: e, org: e }],
                            gov: e,
                            gp: [1, { asso: e, com: e, edu: e, mobi: e, net: e, org: e }],
                            gq: e,
                            gr: [1, { com: e, edu: e, gov: e, net: e, org: e, barsy: t, simplesite: t }],
                            gs: e,
                            gt: [1, { com: e, edu: e, gob: e, ind: e, mil: e, net: e, org: e }],
                            gu: [1, { com: e, edu: e, gov: e, guam: e, info: e, net: e, org: e, web: e }],
                            gw: [1, { nx: t }],
                            gy: V,
                            hk: [
                                1,
                                {
                                    com: e,
                                    edu: e,
                                    gov: e,
                                    idv: e,
                                    net: e,
                                    org: e,
                                    'xn--ciqpn': e,
                                    个人: e,
                                    'xn--gmqw5a': e,
                                    個人: e,
                                    'xn--55qx5d': e,
                                    公司: e,
                                    'xn--mxtq1m': e,
                                    政府: e,
                                    'xn--lcvr32d': e,
                                    敎育: e,
                                    'xn--wcvs22d': e,
                                    教育: e,
                                    'xn--gmq050i': e,
                                    箇人: e,
                                    'xn--uc0atv': e,
                                    組織: e,
                                    'xn--uc0ay4a': e,
                                    組织: e,
                                    'xn--od0alg': e,
                                    網絡: e,
                                    'xn--zf0avx': e,
                                    網络: e,
                                    'xn--mk0axi': e,
                                    组織: e,
                                    'xn--tn0ag': e,
                                    组织: e,
                                    'xn--od0aq3b': e,
                                    网絡: e,
                                    'xn--io0a7i': e,
                                    网络: e,
                                    inc: t,
                                    ltd: t,
                                },
                            ],
                            hm: e,
                            hn: [1, { com: e, edu: e, gob: e, mil: e, net: e, org: e }],
                            hr: [1, { com: e, from: e, iz: e, name: e, brendly: k }],
                            ht: [
                                1,
                                {
                                    adult: e,
                                    art: e,
                                    asso: e,
                                    com: e,
                                    coop: e,
                                    edu: e,
                                    firm: e,
                                    gouv: e,
                                    info: e,
                                    med: e,
                                    net: e,
                                    org: e,
                                    perso: e,
                                    pol: e,
                                    pro: e,
                                    rel: e,
                                    shop: e,
                                    rt: t,
                                },
                            ],
                            hu: [
                                1,
                                {
                                    2e3: e,
                                    agrar: e,
                                    bolt: e,
                                    casino: e,
                                    city: e,
                                    co: e,
                                    erotica: e,
                                    erotika: e,
                                    film: e,
                                    forum: e,
                                    games: e,
                                    hotel: e,
                                    info: e,
                                    ingatlan: e,
                                    jogasz: e,
                                    konyvelo: e,
                                    lakas: e,
                                    media: e,
                                    news: e,
                                    org: e,
                                    priv: e,
                                    reklam: e,
                                    sex: e,
                                    shop: e,
                                    sport: e,
                                    suli: e,
                                    szex: e,
                                    tm: e,
                                    tozsde: e,
                                    utazas: e,
                                    video: e,
                                },
                            ],
                            id: [1, { ac: e, biz: e, co: e, desa: e, go: e, kop: e, mil: e, my: e, net: e, or: e, ponpes: e, sch: e, web: e, e: t, zone: t }],
                            ie: [1, { gov: e, myspreadshop: t }],
                            il: [1, { ac: e, co: [1, { ravpage: t, mytabit: t, tabitorder: t }], gov: e, idf: e, k12: e, muni: e, net: e, org: e }],
                            'xn--4dbrk0ce': [1, { 'xn--4dbgdty6c': e, 'xn--5dbhl8d': e, 'xn--8dbq2a': e, 'xn--hebda8b': e }],
                            ישראל: [1, { אקדמיה: e, ישוב: e, צהל: e, ממשל: e }],
                            im: [1, { ac: e, co: [1, { ltd: e, plc: e }], com: e, net: e, org: e, tt: e, tv: e }],
                            in: [
                                1,
                                {
                                    '5g': e,
                                    '6g': e,
                                    ac: e,
                                    ai: e,
                                    am: e,
                                    bank: e,
                                    bihar: e,
                                    biz: e,
                                    business: e,
                                    ca: e,
                                    cn: e,
                                    co: e,
                                    com: e,
                                    coop: e,
                                    cs: e,
                                    delhi: e,
                                    dr: e,
                                    edu: e,
                                    er: e,
                                    fin: e,
                                    firm: e,
                                    gen: e,
                                    gov: e,
                                    gujarat: e,
                                    ind: e,
                                    info: e,
                                    int: e,
                                    internet: e,
                                    io: e,
                                    me: e,
                                    mil: e,
                                    net: e,
                                    nic: e,
                                    org: e,
                                    pg: e,
                                    post: e,
                                    pro: e,
                                    res: e,
                                    travel: e,
                                    tv: e,
                                    uk: e,
                                    up: e,
                                    us: e,
                                    cloudns: t,
                                    barsy: t,
                                    web: t,
                                    supabase: t,
                                },
                            ],
                            info: [
                                1,
                                {
                                    cloudns: t,
                                    'dynamic-dns': t,
                                    'barrel-of-knowledge': t,
                                    'barrell-of-knowledge': t,
                                    dyndns: t,
                                    'for-our': t,
                                    'groks-the': t,
                                    'groks-this': t,
                                    'here-for-more': t,
                                    knowsitall: t,
                                    selfip: t,
                                    webhop: t,
                                    barsy: t,
                                    mayfirst: t,
                                    mittwald: t,
                                    mittwaldserver: t,
                                    typo3server: t,
                                    dvrcam: t,
                                    ilovecollege: t,
                                    'no-ip': t,
                                    forumz: t,
                                    nsupdate: t,
                                    dnsupdate: t,
                                    'v-info': t,
                                },
                            ],
                            int: [1, { eu: e }],
                            io: [
                                1,
                                {
                                    2038: t,
                                    co: e,
                                    com: e,
                                    edu: e,
                                    gov: e,
                                    mil: e,
                                    net: e,
                                    nom: e,
                                    org: e,
                                    'on-acorn': s,
                                    myaddr: t,
                                    apigee: t,
                                    'b-data': t,
                                    beagleboard: t,
                                    bitbucket: t,
                                    bluebite: t,
                                    boxfuse: t,
                                    brave: r,
                                    browsersafetymark: t,
                                    bubble: Y,
                                    bubbleapps: t,
                                    bigv: [0, { uk0: t }],
                                    cleverapps: t,
                                    cloudbeesusercontent: t,
                                    dappnode: [0, { dyndns: t }],
                                    darklang: t,
                                    definima: t,
                                    dedyn: t,
                                    icp0: Q,
                                    icp1: Q,
                                    qzz: t,
                                    'fh-muenster': t,
                                    shw: t,
                                    forgerock: [0, { id: t }],
                                    gitbook: t,
                                    github: t,
                                    gitlab: t,
                                    lolipop: t,
                                    'hasura-app': t,
                                    hostyhosting: t,
                                    hypernode: t,
                                    moonscale: s,
                                    beebyte: W,
                                    beebyteapp: [0, { sekd1: t }],
                                    jele: t,
                                    webthings: t,
                                    loginline: t,
                                    barsy: t,
                                    azurecontainer: s,
                                    ngrok: [2, { ap: t, au: t, eu: t, in: t, jp: t, sa: t, us: t }],
                                    nodeart: [0, { stage: t }],
                                    pantheonsite: t,
                                    pstmn: [2, { mock: t }],
                                    protonet: t,
                                    qcx: [2, { sys: s }],
                                    qoto: t,
                                    vaporcloud: t,
                                    myrdbx: t,
                                    'rb-hosting': _,
                                    'on-k3s': s,
                                    'on-rio': s,
                                    readthedocs: t,
                                    resindevice: t,
                                    resinstaging: [0, { devices: t }],
                                    hzc: t,
                                    sandcats: t,
                                    scrypted: [0, { client: t }],
                                    'mo-siemens': t,
                                    lair: M,
                                    stolos: s,
                                    musician: t,
                                    utwente: t,
                                    edugit: t,
                                    telebit: t,
                                    thingdust: [0, { dev: Z, disrec: Z, prod: ee, testing: Z }],
                                    tickets: t,
                                    webflow: t,
                                    webflowtest: t,
                                    editorx: t,
                                    wixstudio: t,
                                    basicserver: t,
                                    virtualserver: t,
                                },
                            ],
                            iq: o,
                            ir: [
                                1,
                                {
                                    ac: e,
                                    co: e,
                                    gov: e,
                                    id: e,
                                    net: e,
                                    org: e,
                                    sch: e,
                                    'xn--mgba3a4f16a': e,
                                    ایران: e,
                                    'xn--mgba3a4fra': e,
                                    ايران: e,
                                    arvanedge: t,
                                    vistablog: t,
                                },
                            ],
                            is: e,
                            it: [
                                1,
                                {
                                    edu: e,
                                    gov: e,
                                    abr: e,
                                    abruzzo: e,
                                    'aosta-valley': e,
                                    aostavalley: e,
                                    bas: e,
                                    basilicata: e,
                                    cal: e,
                                    calabria: e,
                                    cam: e,
                                    campania: e,
                                    'emilia-romagna': e,
                                    emiliaromagna: e,
                                    emr: e,
                                    'friuli-v-giulia': e,
                                    'friuli-ve-giulia': e,
                                    'friuli-vegiulia': e,
                                    'friuli-venezia-giulia': e,
                                    'friuli-veneziagiulia': e,
                                    'friuli-vgiulia': e,
                                    'friuliv-giulia': e,
                                    'friulive-giulia': e,
                                    friulivegiulia: e,
                                    'friulivenezia-giulia': e,
                                    friuliveneziagiulia: e,
                                    friulivgiulia: e,
                                    fvg: e,
                                    laz: e,
                                    lazio: e,
                                    lig: e,
                                    liguria: e,
                                    lom: e,
                                    lombardia: e,
                                    lombardy: e,
                                    lucania: e,
                                    mar: e,
                                    marche: e,
                                    mol: e,
                                    molise: e,
                                    piedmont: e,
                                    piemonte: e,
                                    pmn: e,
                                    pug: e,
                                    puglia: e,
                                    sar: e,
                                    sardegna: e,
                                    sardinia: e,
                                    sic: e,
                                    sicilia: e,
                                    sicily: e,
                                    taa: e,
                                    tos: e,
                                    toscana: e,
                                    'trentin-sud-tirol': e,
                                    'xn--trentin-sd-tirol-rzb': e,
                                    'trentin-s\xfcd-tirol': e,
                                    'trentin-sudtirol': e,
                                    'xn--trentin-sdtirol-7vb': e,
                                    'trentin-s\xfcdtirol': e,
                                    'trentin-sued-tirol': e,
                                    'trentin-suedtirol': e,
                                    trentino: e,
                                    'trentino-a-adige': e,
                                    'trentino-aadige': e,
                                    'trentino-alto-adige': e,
                                    'trentino-altoadige': e,
                                    'trentino-s-tirol': e,
                                    'trentino-stirol': e,
                                    'trentino-sud-tirol': e,
                                    'xn--trentino-sd-tirol-c3b': e,
                                    'trentino-s\xfcd-tirol': e,
                                    'trentino-sudtirol': e,
                                    'xn--trentino-sdtirol-szb': e,
                                    'trentino-s\xfcdtirol': e,
                                    'trentino-sued-tirol': e,
                                    'trentino-suedtirol': e,
                                    'trentinoa-adige': e,
                                    trentinoaadige: e,
                                    'trentinoalto-adige': e,
                                    trentinoaltoadige: e,
                                    'trentinos-tirol': e,
                                    trentinostirol: e,
                                    'trentinosud-tirol': e,
                                    'xn--trentinosd-tirol-rzb': e,
                                    'trentinos\xfcd-tirol': e,
                                    trentinosudtirol: e,
                                    'xn--trentinosdtirol-7vb': e,
                                    trentinosüdtirol: e,
                                    'trentinosued-tirol': e,
                                    trentinosuedtirol: e,
                                    'trentinsud-tirol': e,
                                    'xn--trentinsd-tirol-6vb': e,
                                    'trentins\xfcd-tirol': e,
                                    trentinsudtirol: e,
                                    'xn--trentinsdtirol-nsb': e,
                                    trentinsüdtirol: e,
                                    'trentinsued-tirol': e,
                                    trentinsuedtirol: e,
                                    tuscany: e,
                                    umb: e,
                                    umbria: e,
                                    'val-d-aosta': e,
                                    'val-daosta': e,
                                    'vald-aosta': e,
                                    valdaosta: e,
                                    'valle-aosta': e,
                                    'valle-d-aosta': e,
                                    'valle-daosta': e,
                                    valleaosta: e,
                                    'valled-aosta': e,
                                    valledaosta: e,
                                    'vallee-aoste': e,
                                    'xn--valle-aoste-ebb': e,
                                    'vall\xe9e-aoste': e,
                                    'vallee-d-aoste': e,
                                    'xn--valle-d-aoste-ehb': e,
                                    'vall\xe9e-d-aoste': e,
                                    valleeaoste: e,
                                    'xn--valleaoste-e7a': e,
                                    valléeaoste: e,
                                    valleedaoste: e,
                                    'xn--valledaoste-ebb': e,
                                    valléedaoste: e,
                                    vao: e,
                                    vda: e,
                                    ven: e,
                                    veneto: e,
                                    ag: e,
                                    agrigento: e,
                                    al: e,
                                    alessandria: e,
                                    'alto-adige': e,
                                    altoadige: e,
                                    an: e,
                                    ancona: e,
                                    'andria-barletta-trani': e,
                                    'andria-trani-barletta': e,
                                    andriabarlettatrani: e,
                                    andriatranibarletta: e,
                                    ao: e,
                                    aosta: e,
                                    aoste: e,
                                    ap: e,
                                    aq: e,
                                    aquila: e,
                                    ar: e,
                                    arezzo: e,
                                    'ascoli-piceno': e,
                                    ascolipiceno: e,
                                    asti: e,
                                    at: e,
                                    av: e,
                                    avellino: e,
                                    ba: e,
                                    balsan: e,
                                    'balsan-sudtirol': e,
                                    'xn--balsan-sdtirol-nsb': e,
                                    'balsan-s\xfcdtirol': e,
                                    'balsan-suedtirol': e,
                                    bari: e,
                                    'barletta-trani-andria': e,
                                    barlettatraniandria: e,
                                    belluno: e,
                                    benevento: e,
                                    bergamo: e,
                                    bg: e,
                                    bi: e,
                                    biella: e,
                                    bl: e,
                                    bn: e,
                                    bo: e,
                                    bologna: e,
                                    bolzano: e,
                                    'bolzano-altoadige': e,
                                    bozen: e,
                                    'bozen-sudtirol': e,
                                    'xn--bozen-sdtirol-2ob': e,
                                    'bozen-s\xfcdtirol': e,
                                    'bozen-suedtirol': e,
                                    br: e,
                                    brescia: e,
                                    brindisi: e,
                                    bs: e,
                                    bt: e,
                                    bulsan: e,
                                    'bulsan-sudtirol': e,
                                    'xn--bulsan-sdtirol-nsb': e,
                                    'bulsan-s\xfcdtirol': e,
                                    'bulsan-suedtirol': e,
                                    bz: e,
                                    ca: e,
                                    cagliari: e,
                                    caltanissetta: e,
                                    'campidano-medio': e,
                                    campidanomedio: e,
                                    campobasso: e,
                                    'carbonia-iglesias': e,
                                    carboniaiglesias: e,
                                    'carrara-massa': e,
                                    carraramassa: e,
                                    caserta: e,
                                    catania: e,
                                    catanzaro: e,
                                    cb: e,
                                    ce: e,
                                    'cesena-forli': e,
                                    'xn--cesena-forl-mcb': e,
                                    'cesena-forl\xec': e,
                                    cesenaforli: e,
                                    'xn--cesenaforl-i8a': e,
                                    cesenaforlì: e,
                                    ch: e,
                                    chieti: e,
                                    ci: e,
                                    cl: e,
                                    cn: e,
                                    co: e,
                                    como: e,
                                    cosenza: e,
                                    cr: e,
                                    cremona: e,
                                    crotone: e,
                                    cs: e,
                                    ct: e,
                                    cuneo: e,
                                    cz: e,
                                    'dell-ogliastra': e,
                                    dellogliastra: e,
                                    en: e,
                                    enna: e,
                                    fc: e,
                                    fe: e,
                                    fermo: e,
                                    ferrara: e,
                                    fg: e,
                                    fi: e,
                                    firenze: e,
                                    florence: e,
                                    fm: e,
                                    foggia: e,
                                    'forli-cesena': e,
                                    'xn--forl-cesena-fcb': e,
                                    'forl\xec-cesena': e,
                                    forlicesena: e,
                                    'xn--forlcesena-c8a': e,
                                    forlìcesena: e,
                                    fr: e,
                                    frosinone: e,
                                    ge: e,
                                    genoa: e,
                                    genova: e,
                                    go: e,
                                    gorizia: e,
                                    gr: e,
                                    grosseto: e,
                                    'iglesias-carbonia': e,
                                    iglesiascarbonia: e,
                                    im: e,
                                    imperia: e,
                                    is: e,
                                    isernia: e,
                                    kr: e,
                                    'la-spezia': e,
                                    laquila: e,
                                    laspezia: e,
                                    latina: e,
                                    lc: e,
                                    le: e,
                                    lecce: e,
                                    lecco: e,
                                    li: e,
                                    livorno: e,
                                    lo: e,
                                    lodi: e,
                                    lt: e,
                                    lu: e,
                                    lucca: e,
                                    macerata: e,
                                    mantova: e,
                                    'massa-carrara': e,
                                    massacarrara: e,
                                    matera: e,
                                    mb: e,
                                    mc: e,
                                    me: e,
                                    'medio-campidano': e,
                                    mediocampidano: e,
                                    messina: e,
                                    mi: e,
                                    milan: e,
                                    milano: e,
                                    mn: e,
                                    mo: e,
                                    modena: e,
                                    monza: e,
                                    'monza-brianza': e,
                                    'monza-e-della-brianza': e,
                                    monzabrianza: e,
                                    monzaebrianza: e,
                                    monzaedellabrianza: e,
                                    ms: e,
                                    mt: e,
                                    na: e,
                                    naples: e,
                                    napoli: e,
                                    no: e,
                                    novara: e,
                                    nu: e,
                                    nuoro: e,
                                    og: e,
                                    ogliastra: e,
                                    'olbia-tempio': e,
                                    olbiatempio: e,
                                    or: e,
                                    oristano: e,
                                    ot: e,
                                    pa: e,
                                    padova: e,
                                    padua: e,
                                    palermo: e,
                                    parma: e,
                                    pavia: e,
                                    pc: e,
                                    pd: e,
                                    pe: e,
                                    perugia: e,
                                    'pesaro-urbino': e,
                                    pesarourbino: e,
                                    pescara: e,
                                    pg: e,
                                    pi: e,
                                    piacenza: e,
                                    pisa: e,
                                    pistoia: e,
                                    pn: e,
                                    po: e,
                                    pordenone: e,
                                    potenza: e,
                                    pr: e,
                                    prato: e,
                                    pt: e,
                                    pu: e,
                                    pv: e,
                                    pz: e,
                                    ra: e,
                                    ragusa: e,
                                    ravenna: e,
                                    rc: e,
                                    re: e,
                                    'reggio-calabria': e,
                                    'reggio-emilia': e,
                                    reggiocalabria: e,
                                    reggioemilia: e,
                                    rg: e,
                                    ri: e,
                                    rieti: e,
                                    rimini: e,
                                    rm: e,
                                    rn: e,
                                    ro: e,
                                    roma: e,
                                    rome: e,
                                    rovigo: e,
                                    sa: e,
                                    salerno: e,
                                    sassari: e,
                                    savona: e,
                                    si: e,
                                    siena: e,
                                    siracusa: e,
                                    so: e,
                                    sondrio: e,
                                    sp: e,
                                    sr: e,
                                    ss: e,
                                    'xn--sdtirol-n2a': e,
                                    südtirol: e,
                                    suedtirol: e,
                                    sv: e,
                                    ta: e,
                                    taranto: e,
                                    te: e,
                                    'tempio-olbia': e,
                                    tempioolbia: e,
                                    teramo: e,
                                    terni: e,
                                    tn: e,
                                    to: e,
                                    torino: e,
                                    tp: e,
                                    tr: e,
                                    'trani-andria-barletta': e,
                                    'trani-barletta-andria': e,
                                    traniandriabarletta: e,
                                    tranibarlettaandria: e,
                                    trapani: e,
                                    trento: e,
                                    treviso: e,
                                    trieste: e,
                                    ts: e,
                                    turin: e,
                                    tv: e,
                                    ud: e,
                                    udine: e,
                                    'urbino-pesaro': e,
                                    urbinopesaro: e,
                                    va: e,
                                    varese: e,
                                    vb: e,
                                    vc: e,
                                    ve: e,
                                    venezia: e,
                                    venice: e,
                                    verbania: e,
                                    vercelli: e,
                                    verona: e,
                                    vi: e,
                                    'vibo-valentia': e,
                                    vibovalentia: e,
                                    vicenza: e,
                                    viterbo: e,
                                    vr: e,
                                    vs: e,
                                    vt: e,
                                    vv: e,
                                    '12chars': t,
                                    ibxos: t,
                                    iliadboxos: t,
                                    neen: [0, { jc: t }],
                                    '123homepage': t,
                                    '16-b': t,
                                    '32-b': t,
                                    '64-b': t,
                                    myspreadshop: t,
                                    syncloud: t,
                                },
                            ],
                            je: [1, { co: e, net: e, org: e, of: t }],
                            jm: b,
                            jo: [1, { agri: e, ai: e, com: e, edu: e, eng: e, fm: e, gov: e, mil: e, net: e, org: e, per: e, phd: e, sch: e, tv: e }],
                            jobs: e,
                            jp: [
                                1,
                                {
                                    ac: e,
                                    ad: e,
                                    co: e,
                                    ed: e,
                                    go: e,
                                    gr: e,
                                    lg: e,
                                    ne: [1, { aseinet: K, gehirn: t, ivory: t, 'mail-box': t, mints: t, mokuren: t, opal: t, sakura: t, sumomo: t, topaz: t }],
                                    or: e,
                                    aichi: [
                                        1,
                                        {
                                            aisai: e,
                                            ama: e,
                                            anjo: e,
                                            asuke: e,
                                            chiryu: e,
                                            chita: e,
                                            fuso: e,
                                            gamagori: e,
                                            handa: e,
                                            hazu: e,
                                            hekinan: e,
                                            higashiura: e,
                                            ichinomiya: e,
                                            inazawa: e,
                                            inuyama: e,
                                            isshiki: e,
                                            iwakura: e,
                                            kanie: e,
                                            kariya: e,
                                            kasugai: e,
                                            kira: e,
                                            kiyosu: e,
                                            komaki: e,
                                            konan: e,
                                            kota: e,
                                            mihama: e,
                                            miyoshi: e,
                                            nishio: e,
                                            nisshin: e,
                                            obu: e,
                                            oguchi: e,
                                            oharu: e,
                                            okazaki: e,
                                            owariasahi: e,
                                            seto: e,
                                            shikatsu: e,
                                            shinshiro: e,
                                            shitara: e,
                                            tahara: e,
                                            takahama: e,
                                            tobishima: e,
                                            toei: e,
                                            togo: e,
                                            tokai: e,
                                            tokoname: e,
                                            toyoake: e,
                                            toyohashi: e,
                                            toyokawa: e,
                                            toyone: e,
                                            toyota: e,
                                            tsushima: e,
                                            yatomi: e,
                                        },
                                    ],
                                    akita: [
                                        1,
                                        {
                                            akita: e,
                                            daisen: e,
                                            fujisato: e,
                                            gojome: e,
                                            hachirogata: e,
                                            happou: e,
                                            higashinaruse: e,
                                            honjo: e,
                                            honjyo: e,
                                            ikawa: e,
                                            kamikoani: e,
                                            kamioka: e,
                                            katagami: e,
                                            kazuno: e,
                                            kitaakita: e,
                                            kosaka: e,
                                            kyowa: e,
                                            misato: e,
                                            mitane: e,
                                            moriyoshi: e,
                                            nikaho: e,
                                            noshiro: e,
                                            odate: e,
                                            oga: e,
                                            ogata: e,
                                            semboku: e,
                                            yokote: e,
                                            yurihonjo: e,
                                        },
                                    ],
                                    aomori: [
                                        1,
                                        {
                                            aomori: e,
                                            gonohe: e,
                                            hachinohe: e,
                                            hashikami: e,
                                            hiranai: e,
                                            hirosaki: e,
                                            itayanagi: e,
                                            kuroishi: e,
                                            misawa: e,
                                            mutsu: e,
                                            nakadomari: e,
                                            noheji: e,
                                            oirase: e,
                                            owani: e,
                                            rokunohe: e,
                                            sannohe: e,
                                            shichinohe: e,
                                            shingo: e,
                                            takko: e,
                                            towada: e,
                                            tsugaru: e,
                                            tsuruta: e,
                                        },
                                    ],
                                    chiba: [
                                        1,
                                        {
                                            abiko: e,
                                            asahi: e,
                                            chonan: e,
                                            chosei: e,
                                            choshi: e,
                                            chuo: e,
                                            funabashi: e,
                                            futtsu: e,
                                            hanamigawa: e,
                                            ichihara: e,
                                            ichikawa: e,
                                            ichinomiya: e,
                                            inzai: e,
                                            isumi: e,
                                            kamagaya: e,
                                            kamogawa: e,
                                            kashiwa: e,
                                            katori: e,
                                            katsuura: e,
                                            kimitsu: e,
                                            kisarazu: e,
                                            kozaki: e,
                                            kujukuri: e,
                                            kyonan: e,
                                            matsudo: e,
                                            midori: e,
                                            mihama: e,
                                            minamiboso: e,
                                            mobara: e,
                                            mutsuzawa: e,
                                            nagara: e,
                                            nagareyama: e,
                                            narashino: e,
                                            narita: e,
                                            noda: e,
                                            oamishirasato: e,
                                            omigawa: e,
                                            onjuku: e,
                                            otaki: e,
                                            sakae: e,
                                            sakura: e,
                                            shimofusa: e,
                                            shirako: e,
                                            shiroi: e,
                                            shisui: e,
                                            sodegaura: e,
                                            sosa: e,
                                            tako: e,
                                            tateyama: e,
                                            togane: e,
                                            tohnosho: e,
                                            tomisato: e,
                                            urayasu: e,
                                            yachimata: e,
                                            yachiyo: e,
                                            yokaichiba: e,
                                            yokoshibahikari: e,
                                            yotsukaido: e,
                                        },
                                    ],
                                    ehime: [
                                        1,
                                        {
                                            ainan: e,
                                            honai: e,
                                            ikata: e,
                                            imabari: e,
                                            iyo: e,
                                            kamijima: e,
                                            kihoku: e,
                                            kumakogen: e,
                                            masaki: e,
                                            matsuno: e,
                                            matsuyama: e,
                                            namikata: e,
                                            niihama: e,
                                            ozu: e,
                                            saijo: e,
                                            seiyo: e,
                                            shikokuchuo: e,
                                            tobe: e,
                                            toon: e,
                                            uchiko: e,
                                            uwajima: e,
                                            yawatahama: e,
                                        },
                                    ],
                                    fukui: [
                                        1,
                                        {
                                            echizen: e,
                                            eiheiji: e,
                                            fukui: e,
                                            ikeda: e,
                                            katsuyama: e,
                                            mihama: e,
                                            minamiechizen: e,
                                            obama: e,
                                            ohi: e,
                                            ono: e,
                                            sabae: e,
                                            sakai: e,
                                            takahama: e,
                                            tsuruga: e,
                                            wakasa: e,
                                        },
                                    ],
                                    fukuoka: [
                                        1,
                                        {
                                            ashiya: e,
                                            buzen: e,
                                            chikugo: e,
                                            chikuho: e,
                                            chikujo: e,
                                            chikushino: e,
                                            chikuzen: e,
                                            chuo: e,
                                            dazaifu: e,
                                            fukuchi: e,
                                            hakata: e,
                                            higashi: e,
                                            hirokawa: e,
                                            hisayama: e,
                                            iizuka: e,
                                            inatsuki: e,
                                            kaho: e,
                                            kasuga: e,
                                            kasuya: e,
                                            kawara: e,
                                            keisen: e,
                                            koga: e,
                                            kurate: e,
                                            kurogi: e,
                                            kurume: e,
                                            minami: e,
                                            miyako: e,
                                            miyama: e,
                                            miyawaka: e,
                                            mizumaki: e,
                                            munakata: e,
                                            nakagawa: e,
                                            nakama: e,
                                            nishi: e,
                                            nogata: e,
                                            ogori: e,
                                            okagaki: e,
                                            okawa: e,
                                            oki: e,
                                            omuta: e,
                                            onga: e,
                                            onojo: e,
                                            oto: e,
                                            saigawa: e,
                                            sasaguri: e,
                                            shingu: e,
                                            shinyoshitomi: e,
                                            shonai: e,
                                            soeda: e,
                                            sue: e,
                                            tachiarai: e,
                                            tagawa: e,
                                            takata: e,
                                            toho: e,
                                            toyotsu: e,
                                            tsuiki: e,
                                            ukiha: e,
                                            umi: e,
                                            usui: e,
                                            yamada: e,
                                            yame: e,
                                            yanagawa: e,
                                            yukuhashi: e,
                                        },
                                    ],
                                    fukushima: [
                                        1,
                                        {
                                            aizubange: e,
                                            aizumisato: e,
                                            aizuwakamatsu: e,
                                            asakawa: e,
                                            bandai: e,
                                            date: e,
                                            fukushima: e,
                                            furudono: e,
                                            futaba: e,
                                            hanawa: e,
                                            higashi: e,
                                            hirata: e,
                                            hirono: e,
                                            iitate: e,
                                            inawashiro: e,
                                            ishikawa: e,
                                            iwaki: e,
                                            izumizaki: e,
                                            kagamiishi: e,
                                            kaneyama: e,
                                            kawamata: e,
                                            kitakata: e,
                                            kitashiobara: e,
                                            koori: e,
                                            koriyama: e,
                                            kunimi: e,
                                            miharu: e,
                                            mishima: e,
                                            namie: e,
                                            nango: e,
                                            nishiaizu: e,
                                            nishigo: e,
                                            okuma: e,
                                            omotego: e,
                                            ono: e,
                                            otama: e,
                                            samegawa: e,
                                            shimogo: e,
                                            shirakawa: e,
                                            showa: e,
                                            soma: e,
                                            sukagawa: e,
                                            taishin: e,
                                            tamakawa: e,
                                            tanagura: e,
                                            tenei: e,
                                            yabuki: e,
                                            yamato: e,
                                            yamatsuri: e,
                                            yanaizu: e,
                                            yugawa: e,
                                        },
                                    ],
                                    gifu: [
                                        1,
                                        {
                                            anpachi: e,
                                            ena: e,
                                            gifu: e,
                                            ginan: e,
                                            godo: e,
                                            gujo: e,
                                            hashima: e,
                                            hichiso: e,
                                            hida: e,
                                            higashishirakawa: e,
                                            ibigawa: e,
                                            ikeda: e,
                                            kakamigahara: e,
                                            kani: e,
                                            kasahara: e,
                                            kasamatsu: e,
                                            kawaue: e,
                                            kitagata: e,
                                            mino: e,
                                            minokamo: e,
                                            mitake: e,
                                            mizunami: e,
                                            motosu: e,
                                            nakatsugawa: e,
                                            ogaki: e,
                                            sakahogi: e,
                                            seki: e,
                                            sekigahara: e,
                                            shirakawa: e,
                                            tajimi: e,
                                            takayama: e,
                                            tarui: e,
                                            toki: e,
                                            tomika: e,
                                            wanouchi: e,
                                            yamagata: e,
                                            yaotsu: e,
                                            yoro: e,
                                        },
                                    ],
                                    gunma: [
                                        1,
                                        {
                                            annaka: e,
                                            chiyoda: e,
                                            fujioka: e,
                                            higashiagatsuma: e,
                                            isesaki: e,
                                            itakura: e,
                                            kanna: e,
                                            kanra: e,
                                            katashina: e,
                                            kawaba: e,
                                            kiryu: e,
                                            kusatsu: e,
                                            maebashi: e,
                                            meiwa: e,
                                            midori: e,
                                            minakami: e,
                                            naganohara: e,
                                            nakanojo: e,
                                            nanmoku: e,
                                            numata: e,
                                            oizumi: e,
                                            ora: e,
                                            ota: e,
                                            shibukawa: e,
                                            shimonita: e,
                                            shinto: e,
                                            showa: e,
                                            takasaki: e,
                                            takayama: e,
                                            tamamura: e,
                                            tatebayashi: e,
                                            tomioka: e,
                                            tsukiyono: e,
                                            tsumagoi: e,
                                            ueno: e,
                                            yoshioka: e,
                                        },
                                    ],
                                    hiroshima: [
                                        1,
                                        {
                                            asaminami: e,
                                            daiwa: e,
                                            etajima: e,
                                            fuchu: e,
                                            fukuyama: e,
                                            hatsukaichi: e,
                                            higashihiroshima: e,
                                            hongo: e,
                                            jinsekikogen: e,
                                            kaita: e,
                                            kui: e,
                                            kumano: e,
                                            kure: e,
                                            mihara: e,
                                            miyoshi: e,
                                            naka: e,
                                            onomichi: e,
                                            osakikamijima: e,
                                            otake: e,
                                            saka: e,
                                            sera: e,
                                            seranishi: e,
                                            shinichi: e,
                                            shobara: e,
                                            takehara: e,
                                        },
                                    ],
                                    hokkaido: [
                                        1,
                                        {
                                            abashiri: e,
                                            abira: e,
                                            aibetsu: e,
                                            akabira: e,
                                            akkeshi: e,
                                            asahikawa: e,
                                            ashibetsu: e,
                                            ashoro: e,
                                            assabu: e,
                                            atsuma: e,
                                            bibai: e,
                                            biei: e,
                                            bifuka: e,
                                            bihoro: e,
                                            biratori: e,
                                            chippubetsu: e,
                                            chitose: e,
                                            date: e,
                                            ebetsu: e,
                                            embetsu: e,
                                            eniwa: e,
                                            erimo: e,
                                            esan: e,
                                            esashi: e,
                                            fukagawa: e,
                                            fukushima: e,
                                            furano: e,
                                            furubira: e,
                                            haboro: e,
                                            hakodate: e,
                                            hamatonbetsu: e,
                                            hidaka: e,
                                            higashikagura: e,
                                            higashikawa: e,
                                            hiroo: e,
                                            hokuryu: e,
                                            hokuto: e,
                                            honbetsu: e,
                                            horokanai: e,
                                            horonobe: e,
                                            ikeda: e,
                                            imakane: e,
                                            ishikari: e,
                                            iwamizawa: e,
                                            iwanai: e,
                                            kamifurano: e,
                                            kamikawa: e,
                                            kamishihoro: e,
                                            kamisunagawa: e,
                                            kamoenai: e,
                                            kayabe: e,
                                            kembuchi: e,
                                            kikonai: e,
                                            kimobetsu: e,
                                            kitahiroshima: e,
                                            kitami: e,
                                            kiyosato: e,
                                            koshimizu: e,
                                            kunneppu: e,
                                            kuriyama: e,
                                            kuromatsunai: e,
                                            kushiro: e,
                                            kutchan: e,
                                            kyowa: e,
                                            mashike: e,
                                            matsumae: e,
                                            mikasa: e,
                                            minamifurano: e,
                                            mombetsu: e,
                                            moseushi: e,
                                            mukawa: e,
                                            muroran: e,
                                            naie: e,
                                            nakagawa: e,
                                            nakasatsunai: e,
                                            nakatombetsu: e,
                                            nanae: e,
                                            nanporo: e,
                                            nayoro: e,
                                            nemuro: e,
                                            niikappu: e,
                                            niki: e,
                                            nishiokoppe: e,
                                            noboribetsu: e,
                                            numata: e,
                                            obihiro: e,
                                            obira: e,
                                            oketo: e,
                                            okoppe: e,
                                            otaru: e,
                                            otobe: e,
                                            otofuke: e,
                                            otoineppu: e,
                                            oumu: e,
                                            ozora: e,
                                            pippu: e,
                                            rankoshi: e,
                                            rebun: e,
                                            rikubetsu: e,
                                            rishiri: e,
                                            rishirifuji: e,
                                            saroma: e,
                                            sarufutsu: e,
                                            shakotan: e,
                                            shari: e,
                                            shibecha: e,
                                            shibetsu: e,
                                            shikabe: e,
                                            shikaoi: e,
                                            shimamaki: e,
                                            shimizu: e,
                                            shimokawa: e,
                                            shinshinotsu: e,
                                            shintoku: e,
                                            shiranuka: e,
                                            shiraoi: e,
                                            shiriuchi: e,
                                            sobetsu: e,
                                            sunagawa: e,
                                            taiki: e,
                                            takasu: e,
                                            takikawa: e,
                                            takinoue: e,
                                            teshikaga: e,
                                            tobetsu: e,
                                            tohma: e,
                                            tomakomai: e,
                                            tomari: e,
                                            toya: e,
                                            toyako: e,
                                            toyotomi: e,
                                            toyoura: e,
                                            tsubetsu: e,
                                            tsukigata: e,
                                            urakawa: e,
                                            urausu: e,
                                            uryu: e,
                                            utashinai: e,
                                            wakkanai: e,
                                            wassamu: e,
                                            yakumo: e,
                                            yoichi: e,
                                        },
                                    ],
                                    hyogo: [
                                        1,
                                        {
                                            aioi: e,
                                            akashi: e,
                                            ako: e,
                                            amagasaki: e,
                                            aogaki: e,
                                            asago: e,
                                            ashiya: e,
                                            awaji: e,
                                            fukusaki: e,
                                            goshiki: e,
                                            harima: e,
                                            himeji: e,
                                            ichikawa: e,
                                            inagawa: e,
                                            itami: e,
                                            kakogawa: e,
                                            kamigori: e,
                                            kamikawa: e,
                                            kasai: e,
                                            kasuga: e,
                                            kawanishi: e,
                                            miki: e,
                                            minamiawaji: e,
                                            nishinomiya: e,
                                            nishiwaki: e,
                                            ono: e,
                                            sanda: e,
                                            sannan: e,
                                            sasayama: e,
                                            sayo: e,
                                            shingu: e,
                                            shinonsen: e,
                                            shiso: e,
                                            sumoto: e,
                                            taishi: e,
                                            taka: e,
                                            takarazuka: e,
                                            takasago: e,
                                            takino: e,
                                            tamba: e,
                                            tatsuno: e,
                                            toyooka: e,
                                            yabu: e,
                                            yashiro: e,
                                            yoka: e,
                                            yokawa: e,
                                        },
                                    ],
                                    ibaraki: [
                                        1,
                                        {
                                            ami: e,
                                            asahi: e,
                                            bando: e,
                                            chikusei: e,
                                            daigo: e,
                                            fujishiro: e,
                                            hitachi: e,
                                            hitachinaka: e,
                                            hitachiomiya: e,
                                            hitachiota: e,
                                            ibaraki: e,
                                            ina: e,
                                            inashiki: e,
                                            itako: e,
                                            iwama: e,
                                            joso: e,
                                            kamisu: e,
                                            kasama: e,
                                            kashima: e,
                                            kasumigaura: e,
                                            koga: e,
                                            miho: e,
                                            mito: e,
                                            moriya: e,
                                            naka: e,
                                            namegata: e,
                                            oarai: e,
                                            ogawa: e,
                                            omitama: e,
                                            ryugasaki: e,
                                            sakai: e,
                                            sakuragawa: e,
                                            shimodate: e,
                                            shimotsuma: e,
                                            shirosato: e,
                                            sowa: e,
                                            suifu: e,
                                            takahagi: e,
                                            tamatsukuri: e,
                                            tokai: e,
                                            tomobe: e,
                                            tone: e,
                                            toride: e,
                                            tsuchiura: e,
                                            tsukuba: e,
                                            uchihara: e,
                                            ushiku: e,
                                            yachiyo: e,
                                            yamagata: e,
                                            yawara: e,
                                            yuki: e,
                                        },
                                    ],
                                    ishikawa: [
                                        1,
                                        {
                                            anamizu: e,
                                            hakui: e,
                                            hakusan: e,
                                            kaga: e,
                                            kahoku: e,
                                            kanazawa: e,
                                            kawakita: e,
                                            komatsu: e,
                                            nakanoto: e,
                                            nanao: e,
                                            nomi: e,
                                            nonoichi: e,
                                            noto: e,
                                            shika: e,
                                            suzu: e,
                                            tsubata: e,
                                            tsurugi: e,
                                            uchinada: e,
                                            wajima: e,
                                        },
                                    ],
                                    iwate: [
                                        1,
                                        {
                                            fudai: e,
                                            fujisawa: e,
                                            hanamaki: e,
                                            hiraizumi: e,
                                            hirono: e,
                                            ichinohe: e,
                                            ichinoseki: e,
                                            iwaizumi: e,
                                            iwate: e,
                                            joboji: e,
                                            kamaishi: e,
                                            kanegasaki: e,
                                            karumai: e,
                                            kawai: e,
                                            kitakami: e,
                                            kuji: e,
                                            kunohe: e,
                                            kuzumaki: e,
                                            miyako: e,
                                            mizusawa: e,
                                            morioka: e,
                                            ninohe: e,
                                            noda: e,
                                            ofunato: e,
                                            oshu: e,
                                            otsuchi: e,
                                            rikuzentakata: e,
                                            shiwa: e,
                                            shizukuishi: e,
                                            sumita: e,
                                            tanohata: e,
                                            tono: e,
                                            yahaba: e,
                                            yamada: e,
                                        },
                                    ],
                                    kagawa: [
                                        1,
                                        {
                                            ayagawa: e,
                                            higashikagawa: e,
                                            kanonji: e,
                                            kotohira: e,
                                            manno: e,
                                            marugame: e,
                                            mitoyo: e,
                                            naoshima: e,
                                            sanuki: e,
                                            tadotsu: e,
                                            takamatsu: e,
                                            tonosho: e,
                                            uchinomi: e,
                                            utazu: e,
                                            zentsuji: e,
                                        },
                                    ],
                                    kagoshima: [
                                        1,
                                        {
                                            akune: e,
                                            amami: e,
                                            hioki: e,
                                            isa: e,
                                            isen: e,
                                            izumi: e,
                                            kagoshima: e,
                                            kanoya: e,
                                            kawanabe: e,
                                            kinko: e,
                                            kouyama: e,
                                            makurazaki: e,
                                            matsumoto: e,
                                            minamitane: e,
                                            nakatane: e,
                                            nishinoomote: e,
                                            satsumasendai: e,
                                            soo: e,
                                            tarumizu: e,
                                            yusui: e,
                                        },
                                    ],
                                    kanagawa: [
                                        1,
                                        {
                                            aikawa: e,
                                            atsugi: e,
                                            ayase: e,
                                            chigasaki: e,
                                            ebina: e,
                                            fujisawa: e,
                                            hadano: e,
                                            hakone: e,
                                            hiratsuka: e,
                                            isehara: e,
                                            kaisei: e,
                                            kamakura: e,
                                            kiyokawa: e,
                                            matsuda: e,
                                            minamiashigara: e,
                                            miura: e,
                                            nakai: e,
                                            ninomiya: e,
                                            odawara: e,
                                            oi: e,
                                            oiso: e,
                                            sagamihara: e,
                                            samukawa: e,
                                            tsukui: e,
                                            yamakita: e,
                                            yamato: e,
                                            yokosuka: e,
                                            yugawara: e,
                                            zama: e,
                                            zushi: e,
                                        },
                                    ],
                                    kochi: [
                                        1,
                                        {
                                            aki: e,
                                            geisei: e,
                                            hidaka: e,
                                            higashitsuno: e,
                                            ino: e,
                                            kagami: e,
                                            kami: e,
                                            kitagawa: e,
                                            kochi: e,
                                            mihara: e,
                                            motoyama: e,
                                            muroto: e,
                                            nahari: e,
                                            nakamura: e,
                                            nankoku: e,
                                            nishitosa: e,
                                            niyodogawa: e,
                                            ochi: e,
                                            okawa: e,
                                            otoyo: e,
                                            otsuki: e,
                                            sakawa: e,
                                            sukumo: e,
                                            susaki: e,
                                            tosa: e,
                                            tosashimizu: e,
                                            toyo: e,
                                            tsuno: e,
                                            umaji: e,
                                            yasuda: e,
                                            yusuhara: e,
                                        },
                                    ],
                                    kumamoto: [
                                        1,
                                        {
                                            amakusa: e,
                                            arao: e,
                                            aso: e,
                                            choyo: e,
                                            gyokuto: e,
                                            kamiamakusa: e,
                                            kikuchi: e,
                                            kumamoto: e,
                                            mashiki: e,
                                            mifune: e,
                                            minamata: e,
                                            minamioguni: e,
                                            nagasu: e,
                                            nishihara: e,
                                            oguni: e,
                                            ozu: e,
                                            sumoto: e,
                                            takamori: e,
                                            uki: e,
                                            uto: e,
                                            yamaga: e,
                                            yamato: e,
                                            yatsushiro: e,
                                        },
                                    ],
                                    kyoto: [
                                        1,
                                        {
                                            ayabe: e,
                                            fukuchiyama: e,
                                            higashiyama: e,
                                            ide: e,
                                            ine: e,
                                            joyo: e,
                                            kameoka: e,
                                            kamo: e,
                                            kita: e,
                                            kizu: e,
                                            kumiyama: e,
                                            kyotamba: e,
                                            kyotanabe: e,
                                            kyotango: e,
                                            maizuru: e,
                                            minami: e,
                                            minamiyamashiro: e,
                                            miyazu: e,
                                            muko: e,
                                            nagaokakyo: e,
                                            nakagyo: e,
                                            nantan: e,
                                            oyamazaki: e,
                                            sakyo: e,
                                            seika: e,
                                            tanabe: e,
                                            uji: e,
                                            ujitawara: e,
                                            wazuka: e,
                                            yamashina: e,
                                            yawata: e,
                                        },
                                    ],
                                    mie: [
                                        1,
                                        {
                                            asahi: e,
                                            inabe: e,
                                            ise: e,
                                            kameyama: e,
                                            kawagoe: e,
                                            kiho: e,
                                            kisosaki: e,
                                            kiwa: e,
                                            komono: e,
                                            kumano: e,
                                            kuwana: e,
                                            matsusaka: e,
                                            meiwa: e,
                                            mihama: e,
                                            minamiise: e,
                                            misugi: e,
                                            miyama: e,
                                            nabari: e,
                                            shima: e,
                                            suzuka: e,
                                            tado: e,
                                            taiki: e,
                                            taki: e,
                                            tamaki: e,
                                            toba: e,
                                            tsu: e,
                                            udono: e,
                                            ureshino: e,
                                            watarai: e,
                                            yokkaichi: e,
                                        },
                                    ],
                                    miyagi: [
                                        1,
                                        {
                                            furukawa: e,
                                            higashimatsushima: e,
                                            ishinomaki: e,
                                            iwanuma: e,
                                            kakuda: e,
                                            kami: e,
                                            kawasaki: e,
                                            marumori: e,
                                            matsushima: e,
                                            minamisanriku: e,
                                            misato: e,
                                            murata: e,
                                            natori: e,
                                            ogawara: e,
                                            ohira: e,
                                            onagawa: e,
                                            osaki: e,
                                            rifu: e,
                                            semine: e,
                                            shibata: e,
                                            shichikashuku: e,
                                            shikama: e,
                                            shiogama: e,
                                            shiroishi: e,
                                            tagajo: e,
                                            taiwa: e,
                                            tome: e,
                                            tomiya: e,
                                            wakuya: e,
                                            watari: e,
                                            yamamoto: e,
                                            zao: e,
                                        },
                                    ],
                                    miyazaki: [
                                        1,
                                        {
                                            aya: e,
                                            ebino: e,
                                            gokase: e,
                                            hyuga: e,
                                            kadogawa: e,
                                            kawaminami: e,
                                            kijo: e,
                                            kitagawa: e,
                                            kitakata: e,
                                            kitaura: e,
                                            kobayashi: e,
                                            kunitomi: e,
                                            kushima: e,
                                            mimata: e,
                                            miyakonojo: e,
                                            miyazaki: e,
                                            morotsuka: e,
                                            nichinan: e,
                                            nishimera: e,
                                            nobeoka: e,
                                            saito: e,
                                            shiiba: e,
                                            shintomi: e,
                                            takaharu: e,
                                            takanabe: e,
                                            takazaki: e,
                                            tsuno: e,
                                        },
                                    ],
                                    nagano: [
                                        1,
                                        {
                                            achi: e,
                                            agematsu: e,
                                            anan: e,
                                            aoki: e,
                                            asahi: e,
                                            azumino: e,
                                            chikuhoku: e,
                                            chikuma: e,
                                            chino: e,
                                            fujimi: e,
                                            hakuba: e,
                                            hara: e,
                                            hiraya: e,
                                            iida: e,
                                            iijima: e,
                                            iiyama: e,
                                            iizuna: e,
                                            ikeda: e,
                                            ikusaka: e,
                                            ina: e,
                                            karuizawa: e,
                                            kawakami: e,
                                            kiso: e,
                                            kisofukushima: e,
                                            kitaaiki: e,
                                            komagane: e,
                                            komoro: e,
                                            matsukawa: e,
                                            matsumoto: e,
                                            miasa: e,
                                            minamiaiki: e,
                                            minamimaki: e,
                                            minamiminowa: e,
                                            minowa: e,
                                            miyada: e,
                                            miyota: e,
                                            mochizuki: e,
                                            nagano: e,
                                            nagawa: e,
                                            nagiso: e,
                                            nakagawa: e,
                                            nakano: e,
                                            nozawaonsen: e,
                                            obuse: e,
                                            ogawa: e,
                                            okaya: e,
                                            omachi: e,
                                            omi: e,
                                            ookuwa: e,
                                            ooshika: e,
                                            otaki: e,
                                            otari: e,
                                            sakae: e,
                                            sakaki: e,
                                            saku: e,
                                            sakuho: e,
                                            shimosuwa: e,
                                            shinanomachi: e,
                                            shiojiri: e,
                                            suwa: e,
                                            suzaka: e,
                                            takagi: e,
                                            takamori: e,
                                            takayama: e,
                                            tateshina: e,
                                            tatsuno: e,
                                            togakushi: e,
                                            togura: e,
                                            tomi: e,
                                            ueda: e,
                                            wada: e,
                                            yamagata: e,
                                            yamanouchi: e,
                                            yasaka: e,
                                            yasuoka: e,
                                        },
                                    ],
                                    nagasaki: [
                                        1,
                                        {
                                            chijiwa: e,
                                            futsu: e,
                                            goto: e,
                                            hasami: e,
                                            hirado: e,
                                            iki: e,
                                            isahaya: e,
                                            kawatana: e,
                                            kuchinotsu: e,
                                            matsuura: e,
                                            nagasaki: e,
                                            obama: e,
                                            omura: e,
                                            oseto: e,
                                            saikai: e,
                                            sasebo: e,
                                            seihi: e,
                                            shimabara: e,
                                            shinkamigoto: e,
                                            togitsu: e,
                                            tsushima: e,
                                            unzen: e,
                                        },
                                    ],
                                    nara: [
                                        1,
                                        {
                                            ando: e,
                                            gose: e,
                                            heguri: e,
                                            higashiyoshino: e,
                                            ikaruga: e,
                                            ikoma: e,
                                            kamikitayama: e,
                                            kanmaki: e,
                                            kashiba: e,
                                            kashihara: e,
                                            katsuragi: e,
                                            kawai: e,
                                            kawakami: e,
                                            kawanishi: e,
                                            koryo: e,
                                            kurotaki: e,
                                            mitsue: e,
                                            miyake: e,
                                            nara: e,
                                            nosegawa: e,
                                            oji: e,
                                            ouda: e,
                                            oyodo: e,
                                            sakurai: e,
                                            sango: e,
                                            shimoichi: e,
                                            shimokitayama: e,
                                            shinjo: e,
                                            soni: e,
                                            takatori: e,
                                            tawaramoto: e,
                                            tenkawa: e,
                                            tenri: e,
                                            uda: e,
                                            yamatokoriyama: e,
                                            yamatotakada: e,
                                            yamazoe: e,
                                            yoshino: e,
                                        },
                                    ],
                                    niigata: [
                                        1,
                                        {
                                            aga: e,
                                            agano: e,
                                            gosen: e,
                                            itoigawa: e,
                                            izumozaki: e,
                                            joetsu: e,
                                            kamo: e,
                                            kariwa: e,
                                            kashiwazaki: e,
                                            minamiuonuma: e,
                                            mitsuke: e,
                                            muika: e,
                                            murakami: e,
                                            myoko: e,
                                            nagaoka: e,
                                            niigata: e,
                                            ojiya: e,
                                            omi: e,
                                            sado: e,
                                            sanjo: e,
                                            seiro: e,
                                            seirou: e,
                                            sekikawa: e,
                                            shibata: e,
                                            tagami: e,
                                            tainai: e,
                                            tochio: e,
                                            tokamachi: e,
                                            tsubame: e,
                                            tsunan: e,
                                            uonuma: e,
                                            yahiko: e,
                                            yoita: e,
                                            yuzawa: e,
                                        },
                                    ],
                                    oita: [
                                        1,
                                        {
                                            beppu: e,
                                            bungoono: e,
                                            bungotakada: e,
                                            hasama: e,
                                            hiji: e,
                                            himeshima: e,
                                            hita: e,
                                            kamitsue: e,
                                            kokonoe: e,
                                            kuju: e,
                                            kunisaki: e,
                                            kusu: e,
                                            oita: e,
                                            saiki: e,
                                            taketa: e,
                                            tsukumi: e,
                                            usa: e,
                                            usuki: e,
                                            yufu: e,
                                        },
                                    ],
                                    okayama: [
                                        1,
                                        {
                                            akaiwa: e,
                                            asakuchi: e,
                                            bizen: e,
                                            hayashima: e,
                                            ibara: e,
                                            kagamino: e,
                                            kasaoka: e,
                                            kibichuo: e,
                                            kumenan: e,
                                            kurashiki: e,
                                            maniwa: e,
                                            misaki: e,
                                            nagi: e,
                                            niimi: e,
                                            nishiawakura: e,
                                            okayama: e,
                                            satosho: e,
                                            setouchi: e,
                                            shinjo: e,
                                            shoo: e,
                                            soja: e,
                                            takahashi: e,
                                            tamano: e,
                                            tsuyama: e,
                                            wake: e,
                                            yakage: e,
                                        },
                                    ],
                                    okinawa: [
                                        1,
                                        {
                                            aguni: e,
                                            ginowan: e,
                                            ginoza: e,
                                            gushikami: e,
                                            haebaru: e,
                                            higashi: e,
                                            hirara: e,
                                            iheya: e,
                                            ishigaki: e,
                                            ishikawa: e,
                                            itoman: e,
                                            izena: e,
                                            kadena: e,
                                            kin: e,
                                            kitadaito: e,
                                            kitanakagusuku: e,
                                            kumejima: e,
                                            kunigami: e,
                                            minamidaito: e,
                                            motobu: e,
                                            nago: e,
                                            naha: e,
                                            nakagusuku: e,
                                            nakijin: e,
                                            nanjo: e,
                                            nishihara: e,
                                            ogimi: e,
                                            okinawa: e,
                                            onna: e,
                                            shimoji: e,
                                            taketomi: e,
                                            tarama: e,
                                            tokashiki: e,
                                            tomigusuku: e,
                                            tonaki: e,
                                            urasoe: e,
                                            uruma: e,
                                            yaese: e,
                                            yomitan: e,
                                            yonabaru: e,
                                            yonaguni: e,
                                            zamami: e,
                                        },
                                    ],
                                    osaka: [
                                        1,
                                        {
                                            abeno: e,
                                            chihayaakasaka: e,
                                            chuo: e,
                                            daito: e,
                                            fujiidera: e,
                                            habikino: e,
                                            hannan: e,
                                            higashiosaka: e,
                                            higashisumiyoshi: e,
                                            higashiyodogawa: e,
                                            hirakata: e,
                                            ibaraki: e,
                                            ikeda: e,
                                            izumi: e,
                                            izumiotsu: e,
                                            izumisano: e,
                                            kadoma: e,
                                            kaizuka: e,
                                            kanan: e,
                                            kashiwara: e,
                                            katano: e,
                                            kawachinagano: e,
                                            kishiwada: e,
                                            kita: e,
                                            kumatori: e,
                                            matsubara: e,
                                            minato: e,
                                            minoh: e,
                                            misaki: e,
                                            moriguchi: e,
                                            neyagawa: e,
                                            nishi: e,
                                            nose: e,
                                            osakasayama: e,
                                            sakai: e,
                                            sayama: e,
                                            sennan: e,
                                            settsu: e,
                                            shijonawate: e,
                                            shimamoto: e,
                                            suita: e,
                                            tadaoka: e,
                                            taishi: e,
                                            tajiri: e,
                                            takaishi: e,
                                            takatsuki: e,
                                            tondabayashi: e,
                                            toyonaka: e,
                                            toyono: e,
                                            yao: e,
                                        },
                                    ],
                                    saga: [
                                        1,
                                        {
                                            ariake: e,
                                            arita: e,
                                            fukudomi: e,
                                            genkai: e,
                                            hamatama: e,
                                            hizen: e,
                                            imari: e,
                                            kamimine: e,
                                            kanzaki: e,
                                            karatsu: e,
                                            kashima: e,
                                            kitagata: e,
                                            kitahata: e,
                                            kiyama: e,
                                            kouhoku: e,
                                            kyuragi: e,
                                            nishiarita: e,
                                            ogi: e,
                                            omachi: e,
                                            ouchi: e,
                                            saga: e,
                                            shiroishi: e,
                                            taku: e,
                                            tara: e,
                                            tosu: e,
                                            yoshinogari: e,
                                        },
                                    ],
                                    saitama: [
                                        1,
                                        {
                                            arakawa: e,
                                            asaka: e,
                                            chichibu: e,
                                            fujimi: e,
                                            fujimino: e,
                                            fukaya: e,
                                            hanno: e,
                                            hanyu: e,
                                            hasuda: e,
                                            hatogaya: e,
                                            hatoyama: e,
                                            hidaka: e,
                                            higashichichibu: e,
                                            higashimatsuyama: e,
                                            honjo: e,
                                            ina: e,
                                            iruma: e,
                                            iwatsuki: e,
                                            kamiizumi: e,
                                            kamikawa: e,
                                            kamisato: e,
                                            kasukabe: e,
                                            kawagoe: e,
                                            kawaguchi: e,
                                            kawajima: e,
                                            kazo: e,
                                            kitamoto: e,
                                            koshigaya: e,
                                            kounosu: e,
                                            kuki: e,
                                            kumagaya: e,
                                            matsubushi: e,
                                            minano: e,
                                            misato: e,
                                            miyashiro: e,
                                            miyoshi: e,
                                            moroyama: e,
                                            nagatoro: e,
                                            namegawa: e,
                                            niiza: e,
                                            ogano: e,
                                            ogawa: e,
                                            ogose: e,
                                            okegawa: e,
                                            omiya: e,
                                            otaki: e,
                                            ranzan: e,
                                            ryokami: e,
                                            saitama: e,
                                            sakado: e,
                                            satte: e,
                                            sayama: e,
                                            shiki: e,
                                            shiraoka: e,
                                            soka: e,
                                            sugito: e,
                                            toda: e,
                                            tokigawa: e,
                                            tokorozawa: e,
                                            tsurugashima: e,
                                            urawa: e,
                                            warabi: e,
                                            yashio: e,
                                            yokoze: e,
                                            yono: e,
                                            yorii: e,
                                            yoshida: e,
                                            yoshikawa: e,
                                            yoshimi: e,
                                        },
                                    ],
                                    shiga: [
                                        1,
                                        {
                                            aisho: e,
                                            gamo: e,
                                            higashiomi: e,
                                            hikone: e,
                                            koka: e,
                                            konan: e,
                                            kosei: e,
                                            koto: e,
                                            kusatsu: e,
                                            maibara: e,
                                            moriyama: e,
                                            nagahama: e,
                                            nishiazai: e,
                                            notogawa: e,
                                            omihachiman: e,
                                            otsu: e,
                                            ritto: e,
                                            ryuoh: e,
                                            takashima: e,
                                            takatsuki: e,
                                            torahime: e,
                                            toyosato: e,
                                            yasu: e,
                                        },
                                    ],
                                    shimane: [
                                        1,
                                        {
                                            akagi: e,
                                            ama: e,
                                            gotsu: e,
                                            hamada: e,
                                            higashiizumo: e,
                                            hikawa: e,
                                            hikimi: e,
                                            izumo: e,
                                            kakinoki: e,
                                            masuda: e,
                                            matsue: e,
                                            misato: e,
                                            nishinoshima: e,
                                            ohda: e,
                                            okinoshima: e,
                                            okuizumo: e,
                                            shimane: e,
                                            tamayu: e,
                                            tsuwano: e,
                                            unnan: e,
                                            yakumo: e,
                                            yasugi: e,
                                            yatsuka: e,
                                        },
                                    ],
                                    shizuoka: [
                                        1,
                                        {
                                            arai: e,
                                            atami: e,
                                            fuji: e,
                                            fujieda: e,
                                            fujikawa: e,
                                            fujinomiya: e,
                                            fukuroi: e,
                                            gotemba: e,
                                            haibara: e,
                                            hamamatsu: e,
                                            higashiizu: e,
                                            ito: e,
                                            iwata: e,
                                            izu: e,
                                            izunokuni: e,
                                            kakegawa: e,
                                            kannami: e,
                                            kawanehon: e,
                                            kawazu: e,
                                            kikugawa: e,
                                            kosai: e,
                                            makinohara: e,
                                            matsuzaki: e,
                                            minamiizu: e,
                                            mishima: e,
                                            morimachi: e,
                                            nishiizu: e,
                                            numazu: e,
                                            omaezaki: e,
                                            shimada: e,
                                            shimizu: e,
                                            shimoda: e,
                                            shizuoka: e,
                                            susono: e,
                                            yaizu: e,
                                            yoshida: e,
                                        },
                                    ],
                                    tochigi: [
                                        1,
                                        {
                                            ashikaga: e,
                                            bato: e,
                                            haga: e,
                                            ichikai: e,
                                            iwafune: e,
                                            kaminokawa: e,
                                            kanuma: e,
                                            karasuyama: e,
                                            kuroiso: e,
                                            mashiko: e,
                                            mibu: e,
                                            moka: e,
                                            motegi: e,
                                            nasu: e,
                                            nasushiobara: e,
                                            nikko: e,
                                            nishikata: e,
                                            nogi: e,
                                            ohira: e,
                                            ohtawara: e,
                                            oyama: e,
                                            sakura: e,
                                            sano: e,
                                            shimotsuke: e,
                                            shioya: e,
                                            takanezawa: e,
                                            tochigi: e,
                                            tsuga: e,
                                            ujiie: e,
                                            utsunomiya: e,
                                            yaita: e,
                                        },
                                    ],
                                    tokushima: [
                                        1,
                                        {
                                            aizumi: e,
                                            anan: e,
                                            ichiba: e,
                                            itano: e,
                                            kainan: e,
                                            komatsushima: e,
                                            matsushige: e,
                                            mima: e,
                                            minami: e,
                                            miyoshi: e,
                                            mugi: e,
                                            nakagawa: e,
                                            naruto: e,
                                            sanagochi: e,
                                            shishikui: e,
                                            tokushima: e,
                                            wajiki: e,
                                        },
                                    ],
                                    tokyo: [
                                        1,
                                        {
                                            adachi: e,
                                            akiruno: e,
                                            akishima: e,
                                            aogashima: e,
                                            arakawa: e,
                                            bunkyo: e,
                                            chiyoda: e,
                                            chofu: e,
                                            chuo: e,
                                            edogawa: e,
                                            fuchu: e,
                                            fussa: e,
                                            hachijo: e,
                                            hachioji: e,
                                            hamura: e,
                                            higashikurume: e,
                                            higashimurayama: e,
                                            higashiyamato: e,
                                            hino: e,
                                            hinode: e,
                                            hinohara: e,
                                            inagi: e,
                                            itabashi: e,
                                            katsushika: e,
                                            kita: e,
                                            kiyose: e,
                                            kodaira: e,
                                            koganei: e,
                                            kokubunji: e,
                                            komae: e,
                                            koto: e,
                                            kouzushima: e,
                                            kunitachi: e,
                                            machida: e,
                                            meguro: e,
                                            minato: e,
                                            mitaka: e,
                                            mizuho: e,
                                            musashimurayama: e,
                                            musashino: e,
                                            nakano: e,
                                            nerima: e,
                                            ogasawara: e,
                                            okutama: e,
                                            ome: e,
                                            oshima: e,
                                            ota: e,
                                            setagaya: e,
                                            shibuya: e,
                                            shinagawa: e,
                                            shinjuku: e,
                                            suginami: e,
                                            sumida: e,
                                            tachikawa: e,
                                            taito: e,
                                            tama: e,
                                            toshima: e,
                                        },
                                    ],
                                    tottori: [
                                        1,
                                        {
                                            chizu: e,
                                            hino: e,
                                            kawahara: e,
                                            koge: e,
                                            kotoura: e,
                                            misasa: e,
                                            nanbu: e,
                                            nichinan: e,
                                            sakaiminato: e,
                                            tottori: e,
                                            wakasa: e,
                                            yazu: e,
                                            yonago: e,
                                        },
                                    ],
                                    toyama: [
                                        1,
                                        {
                                            asahi: e,
                                            fuchu: e,
                                            fukumitsu: e,
                                            funahashi: e,
                                            himi: e,
                                            imizu: e,
                                            inami: e,
                                            johana: e,
                                            kamiichi: e,
                                            kurobe: e,
                                            nakaniikawa: e,
                                            namerikawa: e,
                                            nanto: e,
                                            nyuzen: e,
                                            oyabe: e,
                                            taira: e,
                                            takaoka: e,
                                            tateyama: e,
                                            toga: e,
                                            tonami: e,
                                            toyama: e,
                                            unazuki: e,
                                            uozu: e,
                                            yamada: e,
                                        },
                                    ],
                                    wakayama: [
                                        1,
                                        {
                                            arida: e,
                                            aridagawa: e,
                                            gobo: e,
                                            hashimoto: e,
                                            hidaka: e,
                                            hirogawa: e,
                                            inami: e,
                                            iwade: e,
                                            kainan: e,
                                            kamitonda: e,
                                            katsuragi: e,
                                            kimino: e,
                                            kinokawa: e,
                                            kitayama: e,
                                            koya: e,
                                            koza: e,
                                            kozagawa: e,
                                            kudoyama: e,
                                            kushimoto: e,
                                            mihama: e,
                                            misato: e,
                                            nachikatsuura: e,
                                            shingu: e,
                                            shirahama: e,
                                            taiji: e,
                                            tanabe: e,
                                            wakayama: e,
                                            yuasa: e,
                                            yura: e,
                                        },
                                    ],
                                    yamagata: [
                                        1,
                                        {
                                            asahi: e,
                                            funagata: e,
                                            higashine: e,
                                            iide: e,
                                            kahoku: e,
                                            kaminoyama: e,
                                            kaneyama: e,
                                            kawanishi: e,
                                            mamurogawa: e,
                                            mikawa: e,
                                            murayama: e,
                                            nagai: e,
                                            nakayama: e,
                                            nanyo: e,
                                            nishikawa: e,
                                            obanazawa: e,
                                            oe: e,
                                            oguni: e,
                                            ohkura: e,
                                            oishida: e,
                                            sagae: e,
                                            sakata: e,
                                            sakegawa: e,
                                            shinjo: e,
                                            shirataka: e,
                                            shonai: e,
                                            takahata: e,
                                            tendo: e,
                                            tozawa: e,
                                            tsuruoka: e,
                                            yamagata: e,
                                            yamanobe: e,
                                            yonezawa: e,
                                            yuza: e,
                                        },
                                    ],
                                    yamaguchi: [
                                        1,
                                        {
                                            abu: e,
                                            hagi: e,
                                            hikari: e,
                                            hofu: e,
                                            iwakuni: e,
                                            kudamatsu: e,
                                            mitou: e,
                                            nagato: e,
                                            oshima: e,
                                            shimonoseki: e,
                                            shunan: e,
                                            tabuse: e,
                                            tokuyama: e,
                                            toyota: e,
                                            ube: e,
                                            yuu: e,
                                        },
                                    ],
                                    yamanashi: [
                                        1,
                                        {
                                            chuo: e,
                                            doshi: e,
                                            fuefuki: e,
                                            fujikawa: e,
                                            fujikawaguchiko: e,
                                            fujiyoshida: e,
                                            hayakawa: e,
                                            hokuto: e,
                                            ichikawamisato: e,
                                            kai: e,
                                            kofu: e,
                                            koshu: e,
                                            kosuge: e,
                                            'minami-alps': e,
                                            minobu: e,
                                            nakamichi: e,
                                            nanbu: e,
                                            narusawa: e,
                                            nirasaki: e,
                                            nishikatsura: e,
                                            oshino: e,
                                            otsuki: e,
                                            showa: e,
                                            tabayama: e,
                                            tsuru: e,
                                            uenohara: e,
                                            yamanakako: e,
                                            yamanashi: e,
                                        },
                                    ],
                                    'xn--ehqz56n': e,
                                    三重: e,
                                    'xn--1lqs03n': e,
                                    京都: e,
                                    'xn--qqqt11m': e,
                                    佐賀: e,
                                    'xn--f6qx53a': e,
                                    兵庫: e,
                                    'xn--djrs72d6uy': e,
                                    北海道: e,
                                    'xn--mkru45i': e,
                                    千葉: e,
                                    'xn--0trq7p7nn': e,
                                    和歌山: e,
                                    'xn--5js045d': e,
                                    埼玉: e,
                                    'xn--kbrq7o': e,
                                    大分: e,
                                    'xn--pssu33l': e,
                                    大阪: e,
                                    'xn--ntsq17g': e,
                                    奈良: e,
                                    'xn--uisz3g': e,
                                    宮城: e,
                                    'xn--6btw5a': e,
                                    宮崎: e,
                                    'xn--1ctwo': e,
                                    富山: e,
                                    'xn--6orx2r': e,
                                    山口: e,
                                    'xn--rht61e': e,
                                    山形: e,
                                    'xn--rht27z': e,
                                    山梨: e,
                                    'xn--nit225k': e,
                                    岐阜: e,
                                    'xn--rht3d': e,
                                    岡山: e,
                                    'xn--djty4k': e,
                                    岩手: e,
                                    'xn--klty5x': e,
                                    島根: e,
                                    'xn--kltx9a': e,
                                    広島: e,
                                    'xn--kltp7d': e,
                                    徳島: e,
                                    'xn--c3s14m': e,
                                    愛媛: e,
                                    'xn--vgu402c': e,
                                    愛知: e,
                                    'xn--efvn9s': e,
                                    新潟: e,
                                    'xn--1lqs71d': e,
                                    東京: e,
                                    'xn--4pvxs': e,
                                    栃木: e,
                                    'xn--uuwu58a': e,
                                    沖縄: e,
                                    'xn--zbx025d': e,
                                    滋賀: e,
                                    'xn--8pvr4u': e,
                                    熊本: e,
                                    'xn--5rtp49c': e,
                                    石川: e,
                                    'xn--ntso0iqx3a': e,
                                    神奈川: e,
                                    'xn--elqq16h': e,
                                    福井: e,
                                    'xn--4it168d': e,
                                    福岡: e,
                                    'xn--klt787d': e,
                                    福島: e,
                                    'xn--rny31h': e,
                                    秋田: e,
                                    'xn--7t0a264c': e,
                                    群馬: e,
                                    'xn--uist22h': e,
                                    茨城: e,
                                    'xn--8ltr62k': e,
                                    長崎: e,
                                    'xn--2m4a15e': e,
                                    長野: e,
                                    'xn--32vp30h': e,
                                    青森: e,
                                    'xn--4it797k': e,
                                    静岡: e,
                                    'xn--5rtq34k': e,
                                    香川: e,
                                    'xn--k7yn95e': e,
                                    高知: e,
                                    'xn--tor131o': e,
                                    鳥取: e,
                                    'xn--d5qv7z876c': e,
                                    鹿児島: e,
                                    kawasaki: b,
                                    kitakyushu: b,
                                    kobe: b,
                                    nagoya: b,
                                    sapporo: b,
                                    sendai: b,
                                    yokohama: b,
                                    buyshop: t,
                                    fashionstore: t,
                                    handcrafted: t,
                                    kawaiishop: t,
                                    supersale: t,
                                    theshop: t,
                                    '0am': t,
                                    '0g0': t,
                                    '0j0': t,
                                    '0t0': t,
                                    mydns: t,
                                    pgw: t,
                                    wjg: t,
                                    usercontent: t,
                                    angry: t,
                                    babyblue: t,
                                    babymilk: t,
                                    backdrop: t,
                                    bambina: t,
                                    bitter: t,
                                    blush: t,
                                    boo: t,
                                    boy: t,
                                    boyfriend: t,
                                    but: t,
                                    candypop: t,
                                    capoo: t,
                                    catfood: t,
                                    cheap: t,
                                    chicappa: t,
                                    chillout: t,
                                    chips: t,
                                    chowder: t,
                                    chu: t,
                                    ciao: t,
                                    cocotte: t,
                                    coolblog: t,
                                    cranky: t,
                                    cutegirl: t,
                                    daa: t,
                                    deca: t,
                                    deci: t,
                                    digick: t,
                                    egoism: t,
                                    fakefur: t,
                                    fem: t,
                                    flier: t,
                                    floppy: t,
                                    fool: t,
                                    frenchkiss: t,
                                    girlfriend: t,
                                    girly: t,
                                    gloomy: t,
                                    gonna: t,
                                    greater: t,
                                    hacca: t,
                                    heavy: t,
                                    her: t,
                                    hiho: t,
                                    hippy: t,
                                    holy: t,
                                    hungry: t,
                                    icurus: t,
                                    itigo: t,
                                    jellybean: t,
                                    kikirara: t,
                                    kill: t,
                                    kilo: t,
                                    kuron: t,
                                    littlestar: t,
                                    lolipopmc: t,
                                    lolitapunk: t,
                                    lomo: t,
                                    lovepop: t,
                                    lovesick: t,
                                    main: t,
                                    mods: t,
                                    mond: t,
                                    mongolian: t,
                                    moo: t,
                                    namaste: t,
                                    nikita: t,
                                    nobushi: t,
                                    noor: t,
                                    oops: t,
                                    parallel: t,
                                    parasite: t,
                                    pecori: t,
                                    peewee: t,
                                    penne: t,
                                    pepper: t,
                                    perma: t,
                                    pigboat: t,
                                    pinoko: t,
                                    punyu: t,
                                    pupu: t,
                                    pussycat: t,
                                    pya: t,
                                    raindrop: t,
                                    readymade: t,
                                    sadist: t,
                                    schoolbus: t,
                                    secret: t,
                                    staba: t,
                                    stripper: t,
                                    sub: t,
                                    sunnyday: t,
                                    thick: t,
                                    tonkotsu: t,
                                    under: t,
                                    upper: t,
                                    velvet: t,
                                    verse: t,
                                    versus: t,
                                    vivian: t,
                                    watson: t,
                                    weblike: t,
                                    whitesnow: t,
                                    zombie: t,
                                    hateblo: t,
                                    hatenablog: t,
                                    hatenadiary: t,
                                    '2-d': t,
                                    bona: t,
                                    crap: t,
                                    daynight: t,
                                    eek: t,
                                    flop: t,
                                    halfmoon: t,
                                    jeez: t,
                                    matrix: t,
                                    mimoza: t,
                                    netgamers: t,
                                    nyanta: t,
                                    o0o0: t,
                                    rdy: t,
                                    rgr: t,
                                    rulez: t,
                                    sakurastorage: [0, { isk01: et, isk02: et }],
                                    saloon: t,
                                    sblo: t,
                                    skr: t,
                                    tank: t,
                                    'uh-oh': t,
                                    undo: t,
                                    webaccel: [0, { rs: t, user: t }],
                                    websozai: t,
                                    xii: t,
                                },
                            ],
                            ke: [1, { ac: e, co: e, go: e, info: e, me: e, mobi: e, ne: e, or: e, sc: e }],
                            kg: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, us: t, xx: t }],
                            kh: b,
                            ki: ea,
                            km: [
                                1,
                                {
                                    ass: e,
                                    com: e,
                                    edu: e,
                                    gov: e,
                                    mil: e,
                                    nom: e,
                                    org: e,
                                    prd: e,
                                    tm: e,
                                    asso: e,
                                    coop: e,
                                    gouv: e,
                                    medecin: e,
                                    notaires: e,
                                    pharmaciens: e,
                                    presse: e,
                                    veterinaire: e,
                                },
                            ],
                            kn: [1, { edu: e, gov: e, net: e, org: e }],
                            kp: [1, { com: e, edu: e, gov: e, org: e, rep: e, tra: e }],
                            kr: [
                                1,
                                {
                                    ac: e,
                                    ai: e,
                                    co: e,
                                    es: e,
                                    go: e,
                                    hs: e,
                                    io: e,
                                    it: e,
                                    kg: e,
                                    me: e,
                                    mil: e,
                                    ms: e,
                                    ne: e,
                                    or: e,
                                    pe: e,
                                    re: e,
                                    sc: e,
                                    busan: e,
                                    chungbuk: e,
                                    chungnam: e,
                                    daegu: e,
                                    daejeon: e,
                                    gangwon: e,
                                    gwangju: e,
                                    gyeongbuk: e,
                                    gyeonggi: e,
                                    gyeongnam: e,
                                    incheon: e,
                                    jeju: e,
                                    jeonbuk: e,
                                    jeonnam: e,
                                    seoul: e,
                                    ulsan: e,
                                    c01: t,
                                    'eliv-cdn': t,
                                    'eliv-dns': t,
                                    mmv: t,
                                    vki: t,
                                },
                            ],
                            kw: [1, { com: e, edu: e, emb: e, gov: e, ind: e, net: e, org: e }],
                            ky: G,
                            kz: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, jcloud: t }],
                            la: [1, { com: e, edu: e, gov: e, info: e, int: e, net: e, org: e, per: e, bnr: t }],
                            lb: a,
                            lc: [1, { co: e, com: e, edu: e, gov: e, net: e, org: e, oy: t }],
                            li: e,
                            lk: [1, { ac: e, assn: e, com: e, edu: e, gov: e, grp: e, hotel: e, int: e, ltd: e, net: e, ngo: e, org: e, sch: e, soc: e, web: e }],
                            lr: a,
                            ls: [1, { ac: e, biz: e, co: e, edu: e, gov: e, info: e, net: e, org: e, sc: e }],
                            lt: l,
                            lu: [1, { '123website': t }],
                            lv: [1, { asn: e, com: e, conf: e, edu: e, gov: e, id: e, mil: e, net: e, org: e }],
                            ly: [1, { com: e, edu: e, gov: e, id: e, med: e, net: e, org: e, plc: e, sch: e }],
                            ma: [1, { ac: e, co: e, gov: e, net: e, org: e, press: e }],
                            mc: [1, { asso: e, tm: e }],
                            md: [1, { ir: t }],
                            me: [
                                1,
                                {
                                    ac: e,
                                    co: e,
                                    edu: e,
                                    gov: e,
                                    its: e,
                                    net: e,
                                    org: e,
                                    priv: e,
                                    c66: t,
                                    craft: t,
                                    edgestack: t,
                                    filegear: t,
                                    'filegear-sg': t,
                                    lohmus: t,
                                    barsy: t,
                                    mcdir: t,
                                    brasilia: t,
                                    ddns: t,
                                    dnsfor: t,
                                    hopto: t,
                                    loginto: t,
                                    noip: t,
                                    webhop: t,
                                    soundcast: t,
                                    tcp4: t,
                                    vp4: t,
                                    diskstation: t,
                                    dscloud: t,
                                    i234: t,
                                    myds: t,
                                    synology: t,
                                    transip: _,
                                    nohost: t,
                                },
                            ],
                            mg: [1, { co: e, com: e, edu: e, gov: e, mil: e, nom: e, org: e, prd: e }],
                            mh: e,
                            mil: e,
                            mk: [1, { com: e, edu: e, gov: e, inf: e, name: e, net: e, org: e }],
                            ml: [1, { ac: e, art: e, asso: e, com: e, edu: e, gouv: e, gov: e, info: e, inst: e, net: e, org: e, pr: e, presse: e }],
                            mm: b,
                            mn: [1, { edu: e, gov: e, org: e, nyc: t }],
                            mo: a,
                            mobi: [1, { barsy: t, dscloud: t }],
                            mp: [1, { ju: t }],
                            mq: e,
                            mr: l,
                            ms: [1, { com: e, edu: e, gov: e, net: e, org: e, minisite: t }],
                            mt: G,
                            mu: [1, { ac: e, co: e, com: e, gov: e, net: e, or: e, org: e }],
                            museum: e,
                            mv: [1, { aero: e, biz: e, com: e, coop: e, edu: e, gov: e, info: e, int: e, mil: e, museum: e, name: e, net: e, org: e, pro: e }],
                            mw: [1, { ac: e, biz: e, co: e, com: e, coop: e, edu: e, gov: e, int: e, net: e, org: e }],
                            mx: [1, { com: e, edu: e, gob: e, net: e, org: e }],
                            my: [1, { biz: e, com: e, edu: e, gov: e, mil: e, name: e, net: e, org: e }],
                            mz: [1, { ac: e, adv: e, co: e, edu: e, gov: e, mil: e, net: e, org: e }],
                            na: [1, { alt: e, co: e, com: e, gov: e, net: e, org: e }],
                            name: [1, { her: er, his: er, ispmanager: t }],
                            nc: [1, { asso: e, nom: e }],
                            ne: e,
                            net: [
                                1,
                                {
                                    adobeaemcloud: t,
                                    'adobeio-static': t,
                                    adobeioruntime: t,
                                    akadns: t,
                                    akamai: t,
                                    'akamai-staging': t,
                                    akamaiedge: t,
                                    'akamaiedge-staging': t,
                                    akamaihd: t,
                                    'akamaihd-staging': t,
                                    akamaiorigin: t,
                                    'akamaiorigin-staging': t,
                                    akamaized: t,
                                    'akamaized-staging': t,
                                    edgekey: t,
                                    'edgekey-staging': t,
                                    edgesuite: t,
                                    'edgesuite-staging': t,
                                    alwaysdata: t,
                                    myamaze: t,
                                    cloudfront: t,
                                    appudo: t,
                                    'atlassian-dev': [0, { prod: Y }],
                                    myfritz: t,
                                    onavstack: t,
                                    shopselect: t,
                                    blackbaudcdn: t,
                                    boomla: t,
                                    bplaced: t,
                                    square7: t,
                                    cdn77: [0, { r: t }],
                                    'cdn77-ssl': t,
                                    gb: t,
                                    hu: t,
                                    jp: t,
                                    se: t,
                                    uk: t,
                                    clickrising: t,
                                    'ddns-ip': t,
                                    'dns-cloud': t,
                                    'dns-dynamic': t,
                                    cloudaccess: t,
                                    cloudflare: [2, { cdn: t }],
                                    cloudflareanycast: Y,
                                    cloudflarecn: Y,
                                    cloudflareglobal: Y,
                                    ctfcloud: t,
                                    'feste-ip': t,
                                    'knx-server': t,
                                    'static-access': t,
                                    cryptonomic: s,
                                    dattolocal: t,
                                    mydatto: t,
                                    debian: t,
                                    definima: t,
                                    deno: t,
                                    icp: s,
                                    de5: t,
                                    'at-band-camp': t,
                                    blogdns: t,
                                    'broke-it': t,
                                    buyshouses: t,
                                    dnsalias: t,
                                    dnsdojo: t,
                                    'does-it': t,
                                    dontexist: t,
                                    dynalias: t,
                                    dynathome: t,
                                    endofinternet: t,
                                    'from-az': t,
                                    'from-co': t,
                                    'from-la': t,
                                    'from-ny': t,
                                    'gets-it': t,
                                    'ham-radio-op': t,
                                    homeftp: t,
                                    homeip: t,
                                    homelinux: t,
                                    homeunix: t,
                                    'in-the-band': t,
                                    'is-a-chef': t,
                                    'is-a-geek': t,
                                    'isa-geek': t,
                                    'kicks-ass': t,
                                    'office-on-the': t,
                                    podzone: t,
                                    'scrapper-site': t,
                                    selfip: t,
                                    'sells-it': t,
                                    servebbs: t,
                                    serveftp: t,
                                    thruhere: t,
                                    webhop: t,
                                    casacam: t,
                                    dynu: t,
                                    dynv6: t,
                                    twmail: t,
                                    ru: t,
                                    channelsdvr: [2, { u: t }],
                                    fastly: [0, { freetls: t, map: t, prod: [0, { a: t, global: t }], ssl: [0, { a: t, b: t, global: t }] }],
                                    fastlylb: [2, { map: t }],
                                    edgeapp: t,
                                    'keyword-on': t,
                                    'live-on': t,
                                    'server-on': t,
                                    'cdn-edges': t,
                                    heteml: t,
                                    cloudfunctions: t,
                                    'grafana-dev': t,
                                    iobb: t,
                                    moonscale: t,
                                    'in-dsl': t,
                                    'in-vpn': t,
                                    oninferno: t,
                                    botdash: t,
                                    'apps-1and1': t,
                                    ipifony: t,
                                    cloudjiffy: [2, { 'fra1-de': t, 'west1-us': t }],
                                    elastx: [0, { 'jls-sto1': t, 'jls-sto2': t, 'jls-sto3': t }],
                                    massivegrid: [0, { paas: [0, { 'fr-1': t, 'lon-1': t, 'lon-2': t, 'ny-1': t, 'ny-2': t, 'sg-1': t }] }],
                                    saveincloud: [0, { jelastic: t, 'nordeste-idc': t }],
                                    scaleforce: F,
                                    kinghost: t,
                                    uni5: t,
                                    krellian: t,
                                    ggff: t,
                                    localto: s,
                                    barsy: t,
                                    luyani: t,
                                    memset: t,
                                    'azure-api': t,
                                    'azure-mobile': t,
                                    azureedge: t,
                                    azurefd: t,
                                    azurestaticapps: [2, { 1: t, 2: t, 3: t, 4: t, 5: t, 6: t, 7: t, centralus: t, eastasia: t, eastus2: t, westeurope: t, westus2: t }],
                                    azurewebsites: t,
                                    cloudapp: t,
                                    trafficmanager: t,
                                    windows: [0, { core: [0, { blob: t }], servicebus: t }],
                                    mynetname: [0, { sn: t }],
                                    routingthecloud: t,
                                    bounceme: t,
                                    ddns: t,
                                    'eating-organic': t,
                                    mydissent: t,
                                    myeffect: t,
                                    mymediapc: t,
                                    mypsx: t,
                                    mysecuritycamera: t,
                                    nhlfan: t,
                                    'no-ip': t,
                                    pgafan: t,
                                    privatizehealthinsurance: t,
                                    redirectme: t,
                                    serveblog: t,
                                    serveminecraft: t,
                                    sytes: t,
                                    dnsup: t,
                                    hicam: t,
                                    'now-dns': t,
                                    ownip: t,
                                    vpndns: t,
                                    cloudycluster: t,
                                    ovh: [0, { hosting: s, webpaas: s }],
                                    rackmaze: t,
                                    myradweb: t,
                                    in: t,
                                    'subsc-pay': t,
                                    squares: t,
                                    schokokeks: t,
                                    'firewall-gateway': t,
                                    seidat: t,
                                    senseering: t,
                                    siteleaf: t,
                                    mafelo: t,
                                    myspreadshop: t,
                                    'vps-host': [2, { jelastic: [0, { atl: t, njs: t, ric: t }] }],
                                    srcf: [0, { soc: t, user: t }],
                                    supabase: t,
                                    dsmynas: t,
                                    familyds: t,
                                    ts: [2, { c: s }],
                                    torproject: [2, { pages: t }],
                                    tunnelmole: t,
                                    vusercontent: t,
                                    'reserve-online': t,
                                    localcert: t,
                                    'community-pro': t,
                                    meinforum: t,
                                    yandexcloud: [2, { storage: t, website: t }],
                                    za: t,
                                    zabc: t,
                                },
                            ],
                            nf: [1, { arts: e, com: e, firm: e, info: e, net: e, other: e, per: e, rec: e, store: e, web: e }],
                            ng: [
                                1,
                                {
                                    com: e,
                                    edu: e,
                                    gov: e,
                                    i: e,
                                    mil: e,
                                    mobi: e,
                                    name: e,
                                    net: e,
                                    org: e,
                                    sch: e,
                                    biz: [2, { co: t, dl: t, go: t, lg: t, on: t }],
                                    col: t,
                                    firm: t,
                                    gen: t,
                                    ltd: t,
                                    ngo: t,
                                    plc: t,
                                },
                            ],
                            ni: [1, { ac: e, biz: e, co: e, com: e, edu: e, gob: e, in: e, info: e, int: e, mil: e, net: e, nom: e, org: e, web: e }],
                            nl: [1, { co: t, 'hosting-cluster': t, gov: t, khplay: t, '123website': t, myspreadshop: t, transurl: s, cistron: t, demon: t }],
                            no: [
                                1,
                                {
                                    fhs: e,
                                    folkebibl: e,
                                    fylkesbibl: e,
                                    idrett: e,
                                    museum: e,
                                    priv: e,
                                    vgs: e,
                                    dep: e,
                                    herad: e,
                                    kommune: e,
                                    mil: e,
                                    stat: e,
                                    aa: ei,
                                    ah: ei,
                                    bu: ei,
                                    fm: ei,
                                    hl: ei,
                                    hm: ei,
                                    'jan-mayen': ei,
                                    mr: ei,
                                    nl: ei,
                                    nt: ei,
                                    of: ei,
                                    ol: ei,
                                    oslo: ei,
                                    rl: ei,
                                    sf: ei,
                                    st: ei,
                                    svalbard: ei,
                                    tm: ei,
                                    tr: ei,
                                    va: ei,
                                    vf: ei,
                                    akrehamn: e,
                                    'xn--krehamn-dxa': e,
                                    åkrehamn: e,
                                    algard: e,
                                    'xn--lgrd-poac': e,
                                    ålgård: e,
                                    arna: e,
                                    bronnoysund: e,
                                    'xn--brnnysund-m8ac': e,
                                    brønnøysund: e,
                                    brumunddal: e,
                                    bryne: e,
                                    drobak: e,
                                    'xn--drbak-wua': e,
                                    drøbak: e,
                                    egersund: e,
                                    fetsund: e,
                                    floro: e,
                                    'xn--flor-jra': e,
                                    florø: e,
                                    fredrikstad: e,
                                    hokksund: e,
                                    honefoss: e,
                                    'xn--hnefoss-q1a': e,
                                    hønefoss: e,
                                    jessheim: e,
                                    jorpeland: e,
                                    'xn--jrpeland-54a': e,
                                    jørpeland: e,
                                    kirkenes: e,
                                    kopervik: e,
                                    krokstadelva: e,
                                    langevag: e,
                                    'xn--langevg-jxa': e,
                                    langevåg: e,
                                    leirvik: e,
                                    mjondalen: e,
                                    'xn--mjndalen-64a': e,
                                    mjøndalen: e,
                                    'mo-i-rana': e,
                                    mosjoen: e,
                                    'xn--mosjen-eya': e,
                                    mosjøen: e,
                                    nesoddtangen: e,
                                    orkanger: e,
                                    osoyro: e,
                                    'xn--osyro-wua': e,
                                    osøyro: e,
                                    raholt: e,
                                    'xn--rholt-mra': e,
                                    råholt: e,
                                    sandnessjoen: e,
                                    'xn--sandnessjen-ogb': e,
                                    sandnessjøen: e,
                                    skedsmokorset: e,
                                    slattum: e,
                                    spjelkavik: e,
                                    stathelle: e,
                                    stavern: e,
                                    stjordalshalsen: e,
                                    'xn--stjrdalshalsen-sqb': e,
                                    stjørdalshalsen: e,
                                    tananger: e,
                                    tranby: e,
                                    vossevangen: e,
                                    aarborte: e,
                                    aejrie: e,
                                    afjord: e,
                                    'xn--fjord-lra': e,
                                    åfjord: e,
                                    agdenes: e,
                                    akershus: en,
                                    aknoluokta: e,
                                    'xn--koluokta-7ya57h': e,
                                    ákŋoluokta: e,
                                    al: e,
                                    'xn--l-1fa': e,
                                    ål: e,
                                    alaheadju: e,
                                    'xn--laheadju-7ya': e,
                                    álaheadju: e,
                                    alesund: e,
                                    'xn--lesund-hua': e,
                                    ålesund: e,
                                    alstahaug: e,
                                    alta: e,
                                    'xn--lt-liac': e,
                                    áltá: e,
                                    alvdal: e,
                                    amli: e,
                                    'xn--mli-tla': e,
                                    åmli: e,
                                    amot: e,
                                    'xn--mot-tla': e,
                                    åmot: e,
                                    andasuolo: e,
                                    andebu: e,
                                    andoy: e,
                                    'xn--andy-ira': e,
                                    andøy: e,
                                    ardal: e,
                                    'xn--rdal-poa': e,
                                    årdal: e,
                                    aremark: e,
                                    arendal: e,
                                    'xn--s-1fa': e,
                                    ås: e,
                                    aseral: e,
                                    'xn--seral-lra': e,
                                    åseral: e,
                                    asker: e,
                                    askim: e,
                                    askoy: e,
                                    'xn--asky-ira': e,
                                    askøy: e,
                                    askvoll: e,
                                    asnes: e,
                                    'xn--snes-poa': e,
                                    åsnes: e,
                                    audnedaln: e,
                                    aukra: e,
                                    aure: e,
                                    aurland: e,
                                    'aurskog-holand': e,
                                    'xn--aurskog-hland-jnb': e,
                                    'aurskog-h\xf8land': e,
                                    austevoll: e,
                                    austrheim: e,
                                    averoy: e,
                                    'xn--avery-yua': e,
                                    averøy: e,
                                    badaddja: e,
                                    'xn--bdddj-mrabd': e,
                                    bådåddjå: e,
                                    'xn--brum-voa': e,
                                    bærum: e,
                                    bahcavuotna: e,
                                    'xn--bhcavuotna-s4a': e,
                                    báhcavuotna: e,
                                    bahccavuotna: e,
                                    'xn--bhccavuotna-k7a': e,
                                    báhccavuotna: e,
                                    baidar: e,
                                    'xn--bidr-5nac': e,
                                    báidár: e,
                                    bajddar: e,
                                    'xn--bjddar-pta': e,
                                    bájddar: e,
                                    balat: e,
                                    'xn--blt-elab': e,
                                    bálát: e,
                                    balestrand: e,
                                    ballangen: e,
                                    balsfjord: e,
                                    bamble: e,
                                    bardu: e,
                                    barum: e,
                                    batsfjord: e,
                                    'xn--btsfjord-9za': e,
                                    båtsfjord: e,
                                    bearalvahki: e,
                                    'xn--bearalvhki-y4a': e,
                                    bearalváhki: e,
                                    beardu: e,
                                    beiarn: e,
                                    berg: e,
                                    bergen: e,
                                    berlevag: e,
                                    'xn--berlevg-jxa': e,
                                    berlevåg: e,
                                    bievat: e,
                                    'xn--bievt-0qa': e,
                                    bievát: e,
                                    bindal: e,
                                    birkenes: e,
                                    bjerkreim: e,
                                    bjugn: e,
                                    bodo: e,
                                    'xn--bod-2na': e,
                                    bodø: e,
                                    bokn: e,
                                    bomlo: e,
                                    'xn--bmlo-gra': e,
                                    bømlo: e,
                                    bremanger: e,
                                    bronnoy: e,
                                    'xn--brnny-wuac': e,
                                    brønnøy: e,
                                    budejju: e,
                                    buskerud: en,
                                    bygland: e,
                                    bykle: e,
                                    cahcesuolo: e,
                                    'xn--hcesuolo-7ya35b': e,
                                    čáhcesuolo: e,
                                    davvenjarga: e,
                                    'xn--davvenjrga-y4a': e,
                                    davvenjárga: e,
                                    davvesiida: e,
                                    deatnu: e,
                                    dielddanuorri: e,
                                    divtasvuodna: e,
                                    divttasvuotna: e,
                                    donna: e,
                                    'xn--dnna-gra': e,
                                    dønna: e,
                                    dovre: e,
                                    drammen: e,
                                    drangedal: e,
                                    dyroy: e,
                                    'xn--dyry-ira': e,
                                    dyrøy: e,
                                    eid: e,
                                    eidfjord: e,
                                    eidsberg: e,
                                    eidskog: e,
                                    eidsvoll: e,
                                    eigersund: e,
                                    elverum: e,
                                    enebakk: e,
                                    engerdal: e,
                                    etne: e,
                                    etnedal: e,
                                    evenassi: e,
                                    'xn--eveni-0qa01ga': e,
                                    evenášši: e,
                                    evenes: e,
                                    'evje-og-hornnes': e,
                                    farsund: e,
                                    fauske: e,
                                    fedje: e,
                                    fet: e,
                                    finnoy: e,
                                    'xn--finny-yua': e,
                                    finnøy: e,
                                    fitjar: e,
                                    fjaler: e,
                                    fjell: e,
                                    fla: e,
                                    'xn--fl-zia': e,
                                    flå: e,
                                    flakstad: e,
                                    flatanger: e,
                                    flekkefjord: e,
                                    flesberg: e,
                                    flora: e,
                                    folldal: e,
                                    forde: e,
                                    'xn--frde-gra': e,
                                    førde: e,
                                    forsand: e,
                                    fosnes: e,
                                    'xn--frna-woa': e,
                                    fræna: e,
                                    frana: e,
                                    frei: e,
                                    frogn: e,
                                    froland: e,
                                    frosta: e,
                                    froya: e,
                                    'xn--frya-hra': e,
                                    frøya: e,
                                    fuoisku: e,
                                    fuossko: e,
                                    fusa: e,
                                    fyresdal: e,
                                    gaivuotna: e,
                                    'xn--givuotna-8ya': e,
                                    gáivuotna: e,
                                    galsa: e,
                                    'xn--gls-elac': e,
                                    gálsá: e,
                                    gamvik: e,
                                    gangaviika: e,
                                    'xn--ggaviika-8ya47h': e,
                                    gáŋgaviika: e,
                                    gaular: e,
                                    gausdal: e,
                                    giehtavuoatna: e,
                                    gildeskal: e,
                                    'xn--gildeskl-g0a': e,
                                    gildeskål: e,
                                    giske: e,
                                    gjemnes: e,
                                    gjerdrum: e,
                                    gjerstad: e,
                                    gjesdal: e,
                                    gjovik: e,
                                    'xn--gjvik-wua': e,
                                    gjøvik: e,
                                    gloppen: e,
                                    gol: e,
                                    gran: e,
                                    grane: e,
                                    granvin: e,
                                    gratangen: e,
                                    grimstad: e,
                                    grong: e,
                                    grue: e,
                                    gulen: e,
                                    guovdageaidnu: e,
                                    ha: e,
                                    'xn--h-2fa': e,
                                    hå: e,
                                    habmer: e,
                                    'xn--hbmer-xqa': e,
                                    hábmer: e,
                                    hadsel: e,
                                    'xn--hgebostad-g3a': e,
                                    hægebostad: e,
                                    hagebostad: e,
                                    halden: e,
                                    halsa: e,
                                    hamar: e,
                                    hamaroy: e,
                                    hammarfeasta: e,
                                    'xn--hmmrfeasta-s4ac': e,
                                    hámmárfeasta: e,
                                    hammerfest: e,
                                    hapmir: e,
                                    'xn--hpmir-xqa': e,
                                    hápmir: e,
                                    haram: e,
                                    hareid: e,
                                    harstad: e,
                                    hasvik: e,
                                    hattfjelldal: e,
                                    haugesund: e,
                                    hedmark: [0, { os: e, valer: e, 'xn--vler-qoa': e, våler: e }],
                                    hemne: e,
                                    hemnes: e,
                                    hemsedal: e,
                                    hitra: e,
                                    hjartdal: e,
                                    hjelmeland: e,
                                    hobol: e,
                                    'xn--hobl-ira': e,
                                    hobøl: e,
                                    hof: e,
                                    hol: e,
                                    hole: e,
                                    holmestrand: e,
                                    holtalen: e,
                                    'xn--holtlen-hxa': e,
                                    holtålen: e,
                                    hordaland: [0, { os: e }],
                                    hornindal: e,
                                    horten: e,
                                    hoyanger: e,
                                    'xn--hyanger-q1a': e,
                                    høyanger: e,
                                    hoylandet: e,
                                    'xn--hylandet-54a': e,
                                    høylandet: e,
                                    hurdal: e,
                                    hurum: e,
                                    hvaler: e,
                                    hyllestad: e,
                                    ibestad: e,
                                    inderoy: e,
                                    'xn--indery-fya': e,
                                    inderøy: e,
                                    iveland: e,
                                    ivgu: e,
                                    jevnaker: e,
                                    jolster: e,
                                    'xn--jlster-bya': e,
                                    jølster: e,
                                    jondal: e,
                                    kafjord: e,
                                    'xn--kfjord-iua': e,
                                    kåfjord: e,
                                    karasjohka: e,
                                    'xn--krjohka-hwab49j': e,
                                    kárášjohka: e,
                                    karasjok: e,
                                    karlsoy: e,
                                    karmoy: e,
                                    'xn--karmy-yua': e,
                                    karmøy: e,
                                    kautokeino: e,
                                    klabu: e,
                                    'xn--klbu-woa': e,
                                    klæbu: e,
                                    klepp: e,
                                    kongsberg: e,
                                    kongsvinger: e,
                                    kraanghke: e,
                                    'xn--kranghke-b0a': e,
                                    kråanghke: e,
                                    kragero: e,
                                    'xn--krager-gya': e,
                                    kragerø: e,
                                    kristiansand: e,
                                    kristiansund: e,
                                    krodsherad: e,
                                    'xn--krdsherad-m8a': e,
                                    krødsherad: e,
                                    'xn--kvfjord-nxa': e,
                                    kvæfjord: e,
                                    'xn--kvnangen-k0a': e,
                                    kvænangen: e,
                                    kvafjord: e,
                                    kvalsund: e,
                                    kvam: e,
                                    kvanangen: e,
                                    kvinesdal: e,
                                    kvinnherad: e,
                                    kviteseid: e,
                                    kvitsoy: e,
                                    'xn--kvitsy-fya': e,
                                    kvitsøy: e,
                                    laakesvuemie: e,
                                    'xn--lrdal-sra': e,
                                    lærdal: e,
                                    lahppi: e,
                                    'xn--lhppi-xqa': e,
                                    láhppi: e,
                                    lardal: e,
                                    larvik: e,
                                    lavagis: e,
                                    lavangen: e,
                                    leangaviika: e,
                                    'xn--leagaviika-52b': e,
                                    leaŋgaviika: e,
                                    lebesby: e,
                                    leikanger: e,
                                    leirfjord: e,
                                    leka: e,
                                    leksvik: e,
                                    lenvik: e,
                                    lerdal: e,
                                    lesja: e,
                                    levanger: e,
                                    lier: e,
                                    lierne: e,
                                    lillehammer: e,
                                    lillesand: e,
                                    lindas: e,
                                    'xn--linds-pra': e,
                                    lindås: e,
                                    lindesnes: e,
                                    loabat: e,
                                    'xn--loabt-0qa': e,
                                    loabát: e,
                                    lodingen: e,
                                    'xn--ldingen-q1a': e,
                                    lødingen: e,
                                    lom: e,
                                    loppa: e,
                                    lorenskog: e,
                                    'xn--lrenskog-54a': e,
                                    lørenskog: e,
                                    loten: e,
                                    'xn--lten-gra': e,
                                    løten: e,
                                    lund: e,
                                    lunner: e,
                                    luroy: e,
                                    'xn--lury-ira': e,
                                    lurøy: e,
                                    luster: e,
                                    lyngdal: e,
                                    lyngen: e,
                                    malatvuopmi: e,
                                    'xn--mlatvuopmi-s4a': e,
                                    málatvuopmi: e,
                                    malselv: e,
                                    'xn--mlselv-iua': e,
                                    målselv: e,
                                    malvik: e,
                                    mandal: e,
                                    marker: e,
                                    marnardal: e,
                                    masfjorden: e,
                                    masoy: e,
                                    'xn--msy-ula0h': e,
                                    måsøy: e,
                                    'matta-varjjat': e,
                                    'xn--mtta-vrjjat-k7af': e,
                                    'm\xe1tta-v\xe1rjjat': e,
                                    meland: e,
                                    meldal: e,
                                    melhus: e,
                                    meloy: e,
                                    'xn--mely-ira': e,
                                    meløy: e,
                                    meraker: e,
                                    'xn--merker-kua': e,
                                    meråker: e,
                                    midsund: e,
                                    'midtre-gauldal': e,
                                    moareke: e,
                                    'xn--moreke-jua': e,
                                    moåreke: e,
                                    modalen: e,
                                    modum: e,
                                    molde: e,
                                    'more-og-romsdal': [0, { heroy: e, sande: e }],
                                    'xn--mre-og-romsdal-qqb': [0, { 'xn--hery-ira': e, sande: e }],
                                    'm\xf8re-og-romsdal': [0, { herøy: e, sande: e }],
                                    moskenes: e,
                                    moss: e,
                                    muosat: e,
                                    'xn--muost-0qa': e,
                                    muosát: e,
                                    naamesjevuemie: e,
                                    'xn--nmesjevuemie-tcba': e,
                                    nååmesjevuemie: e,
                                    'xn--nry-yla5g': e,
                                    nærøy: e,
                                    namdalseid: e,
                                    namsos: e,
                                    namsskogan: e,
                                    nannestad: e,
                                    naroy: e,
                                    narviika: e,
                                    narvik: e,
                                    naustdal: e,
                                    navuotna: e,
                                    'xn--nvuotna-hwa': e,
                                    návuotna: e,
                                    'nedre-eiker': e,
                                    nesna: e,
                                    nesodden: e,
                                    nesseby: e,
                                    nesset: e,
                                    nissedal: e,
                                    nittedal: e,
                                    'nord-aurdal': e,
                                    'nord-fron': e,
                                    'nord-odal': e,
                                    norddal: e,
                                    nordkapp: e,
                                    nordland: [0, { bo: e, 'xn--b-5ga': e, bø: e, heroy: e, 'xn--hery-ira': e, herøy: e }],
                                    'nordre-land': e,
                                    nordreisa: e,
                                    'nore-og-uvdal': e,
                                    notodden: e,
                                    notteroy: e,
                                    'xn--nttery-byae': e,
                                    nøtterøy: e,
                                    odda: e,
                                    oksnes: e,
                                    'xn--ksnes-uua': e,
                                    øksnes: e,
                                    omasvuotna: e,
                                    oppdal: e,
                                    oppegard: e,
                                    'xn--oppegrd-ixa': e,
                                    oppegård: e,
                                    orkdal: e,
                                    orland: e,
                                    'xn--rland-uua': e,
                                    ørland: e,
                                    orskog: e,
                                    'xn--rskog-uua': e,
                                    ørskog: e,
                                    orsta: e,
                                    'xn--rsta-fra': e,
                                    ørsta: e,
                                    osen: e,
                                    osteroy: e,
                                    'xn--ostery-fya': e,
                                    osterøy: e,
                                    ostfold: [0, { valer: e }],
                                    'xn--stfold-9xa': [0, { 'xn--vler-qoa': e }],
                                    østfold: [0, { våler: e }],
                                    'ostre-toten': e,
                                    'xn--stre-toten-zcb': e,
                                    '\xf8stre-toten': e,
                                    overhalla: e,
                                    'ovre-eiker': e,
                                    'xn--vre-eiker-k8a': e,
                                    '\xf8vre-eiker': e,
                                    oyer: e,
                                    'xn--yer-zna': e,
                                    øyer: e,
                                    oygarden: e,
                                    'xn--ygarden-p1a': e,
                                    øygarden: e,
                                    'oystre-slidre': e,
                                    'xn--ystre-slidre-ujb': e,
                                    '\xf8ystre-slidre': e,
                                    porsanger: e,
                                    porsangu: e,
                                    'xn--porsgu-sta26f': e,
                                    porsáŋgu: e,
                                    porsgrunn: e,
                                    rade: e,
                                    'xn--rde-ula': e,
                                    råde: e,
                                    radoy: e,
                                    'xn--rady-ira': e,
                                    radøy: e,
                                    'xn--rlingen-mxa': e,
                                    rælingen: e,
                                    rahkkeravju: e,
                                    'xn--rhkkervju-01af': e,
                                    ráhkkerávju: e,
                                    raisa: e,
                                    'xn--risa-5na': e,
                                    ráisa: e,
                                    rakkestad: e,
                                    ralingen: e,
                                    rana: e,
                                    randaberg: e,
                                    rauma: e,
                                    rendalen: e,
                                    rennebu: e,
                                    rennesoy: e,
                                    'xn--rennesy-v1a': e,
                                    rennesøy: e,
                                    rindal: e,
                                    ringebu: e,
                                    ringerike: e,
                                    ringsaker: e,
                                    risor: e,
                                    'xn--risr-ira': e,
                                    risør: e,
                                    rissa: e,
                                    roan: e,
                                    rodoy: e,
                                    'xn--rdy-0nab': e,
                                    rødøy: e,
                                    rollag: e,
                                    romsa: e,
                                    romskog: e,
                                    'xn--rmskog-bya': e,
                                    rømskog: e,
                                    roros: e,
                                    'xn--rros-gra': e,
                                    røros: e,
                                    rost: e,
                                    'xn--rst-0na': e,
                                    røst: e,
                                    royken: e,
                                    'xn--ryken-vua': e,
                                    røyken: e,
                                    royrvik: e,
                                    'xn--ryrvik-bya': e,
                                    røyrvik: e,
                                    ruovat: e,
                                    rygge: e,
                                    salangen: e,
                                    salat: e,
                                    'xn--slat-5na': e,
                                    sálat: e,
                                    'xn--slt-elab': e,
                                    sálát: e,
                                    saltdal: e,
                                    samnanger: e,
                                    sandefjord: e,
                                    sandnes: e,
                                    sandoy: e,
                                    'xn--sandy-yua': e,
                                    sandøy: e,
                                    sarpsborg: e,
                                    sauda: e,
                                    sauherad: e,
                                    sel: e,
                                    selbu: e,
                                    selje: e,
                                    seljord: e,
                                    siellak: e,
                                    sigdal: e,
                                    siljan: e,
                                    sirdal: e,
                                    skanit: e,
                                    'xn--sknit-yqa': e,
                                    skánit: e,
                                    skanland: e,
                                    'xn--sknland-fxa': e,
                                    skånland: e,
                                    skaun: e,
                                    skedsmo: e,
                                    ski: e,
                                    skien: e,
                                    skierva: e,
                                    'xn--skierv-uta': e,
                                    skiervá: e,
                                    skiptvet: e,
                                    skjak: e,
                                    'xn--skjk-soa': e,
                                    skjåk: e,
                                    skjervoy: e,
                                    'xn--skjervy-v1a': e,
                                    skjervøy: e,
                                    skodje: e,
                                    smola: e,
                                    'xn--smla-hra': e,
                                    smøla: e,
                                    snaase: e,
                                    'xn--snase-nra': e,
                                    snåase: e,
                                    snasa: e,
                                    'xn--snsa-roa': e,
                                    snåsa: e,
                                    snillfjord: e,
                                    snoasa: e,
                                    sogndal: e,
                                    sogne: e,
                                    'xn--sgne-gra': e,
                                    søgne: e,
                                    sokndal: e,
                                    sola: e,
                                    solund: e,
                                    somna: e,
                                    'xn--smna-gra': e,
                                    sømna: e,
                                    'sondre-land': e,
                                    'xn--sndre-land-0cb': e,
                                    's\xf8ndre-land': e,
                                    songdalen: e,
                                    'sor-aurdal': e,
                                    'xn--sr-aurdal-l8a': e,
                                    's\xf8r-aurdal': e,
                                    'sor-fron': e,
                                    'xn--sr-fron-q1a': e,
                                    's\xf8r-fron': e,
                                    'sor-odal': e,
                                    'xn--sr-odal-q1a': e,
                                    's\xf8r-odal': e,
                                    'sor-varanger': e,
                                    'xn--sr-varanger-ggb': e,
                                    's\xf8r-varanger': e,
                                    sorfold: e,
                                    'xn--srfold-bya': e,
                                    sørfold: e,
                                    sorreisa: e,
                                    'xn--srreisa-q1a': e,
                                    sørreisa: e,
                                    sortland: e,
                                    sorum: e,
                                    'xn--srum-gra': e,
                                    sørum: e,
                                    spydeberg: e,
                                    stange: e,
                                    stavanger: e,
                                    steigen: e,
                                    steinkjer: e,
                                    stjordal: e,
                                    'xn--stjrdal-s1a': e,
                                    stjørdal: e,
                                    stokke: e,
                                    'stor-elvdal': e,
                                    stord: e,
                                    stordal: e,
                                    storfjord: e,
                                    strand: e,
                                    stranda: e,
                                    stryn: e,
                                    sula: e,
                                    suldal: e,
                                    sund: e,
                                    sunndal: e,
                                    surnadal: e,
                                    sveio: e,
                                    svelvik: e,
                                    sykkylven: e,
                                    tana: e,
                                    telemark: [0, { bo: e, 'xn--b-5ga': e, bø: e }],
                                    time: e,
                                    tingvoll: e,
                                    tinn: e,
                                    tjeldsund: e,
                                    tjome: e,
                                    'xn--tjme-hra': e,
                                    tjøme: e,
                                    tokke: e,
                                    tolga: e,
                                    tonsberg: e,
                                    'xn--tnsberg-q1a': e,
                                    tønsberg: e,
                                    torsken: e,
                                    'xn--trna-woa': e,
                                    træna: e,
                                    trana: e,
                                    tranoy: e,
                                    'xn--trany-yua': e,
                                    tranøy: e,
                                    troandin: e,
                                    trogstad: e,
                                    'xn--trgstad-r1a': e,
                                    trøgstad: e,
                                    tromsa: e,
                                    tromso: e,
                                    'xn--troms-zua': e,
                                    tromsø: e,
                                    trondheim: e,
                                    trysil: e,
                                    tvedestrand: e,
                                    tydal: e,
                                    tynset: e,
                                    tysfjord: e,
                                    tysnes: e,
                                    'xn--tysvr-vra': e,
                                    tysvær: e,
                                    tysvar: e,
                                    ullensaker: e,
                                    ullensvang: e,
                                    ulvik: e,
                                    unjarga: e,
                                    'xn--unjrga-rta': e,
                                    unjárga: e,
                                    utsira: e,
                                    vaapste: e,
                                    vadso: e,
                                    'xn--vads-jra': e,
                                    vadsø: e,
                                    'xn--vry-yla5g': e,
                                    værøy: e,
                                    vaga: e,
                                    'xn--vg-yiab': e,
                                    vågå: e,
                                    vagan: e,
                                    'xn--vgan-qoa': e,
                                    vågan: e,
                                    vagsoy: e,
                                    'xn--vgsy-qoa0j': e,
                                    vågsøy: e,
                                    vaksdal: e,
                                    valle: e,
                                    vang: e,
                                    vanylven: e,
                                    vardo: e,
                                    'xn--vard-jra': e,
                                    vardø: e,
                                    varggat: e,
                                    'xn--vrggt-xqad': e,
                                    várggát: e,
                                    varoy: e,
                                    vefsn: e,
                                    vega: e,
                                    vegarshei: e,
                                    'xn--vegrshei-c0a': e,
                                    vegårshei: e,
                                    vennesla: e,
                                    verdal: e,
                                    verran: e,
                                    vestby: e,
                                    vestfold: [0, { sande: e }],
                                    vestnes: e,
                                    'vestre-slidre': e,
                                    'vestre-toten': e,
                                    vestvagoy: e,
                                    'xn--vestvgy-ixa6o': e,
                                    vestvågøy: e,
                                    vevelstad: e,
                                    vik: e,
                                    vikna: e,
                                    vindafjord: e,
                                    voagat: e,
                                    volda: e,
                                    voss: e,
                                    co: t,
                                    '123hjemmeside': t,
                                    myspreadshop: t,
                                },
                            ],
                            np: b,
                            nr: ea,
                            nu: [1, { merseine: t, mine: t, shacknet: t, enterprisecloud: t }],
                            nz: [
                                1,
                                {
                                    ac: e,
                                    co: e,
                                    cri: e,
                                    geek: e,
                                    gen: e,
                                    govt: e,
                                    health: e,
                                    iwi: e,
                                    kiwi: e,
                                    maori: e,
                                    'xn--mori-qsa': e,
                                    māori: e,
                                    mil: e,
                                    net: e,
                                    org: e,
                                    parliament: e,
                                    school: e,
                                    cloudns: t,
                                },
                            ],
                            om: [1, { co: e, com: e, edu: e, gov: e, med: e, museum: e, net: e, org: e, pro: e }],
                            onion: e,
                            org: [
                                1,
                                {
                                    altervista: t,
                                    pimienta: t,
                                    poivron: t,
                                    potager: t,
                                    sweetpepper: t,
                                    cdn77: [0, { c: t, rsc: t }],
                                    'cdn77-secure': [0, { origin: [0, { ssl: t }] }],
                                    ae: t,
                                    cloudns: t,
                                    'ip-dynamic': t,
                                    ddnss: t,
                                    dpdns: t,
                                    duckdns: t,
                                    tunk: t,
                                    blogdns: t,
                                    blogsite: t,
                                    boldlygoingnowhere: t,
                                    dnsalias: t,
                                    dnsdojo: t,
                                    doesntexist: t,
                                    dontexist: t,
                                    doomdns: t,
                                    dvrdns: t,
                                    dynalias: t,
                                    dyndns: [2, { go: t, home: t }],
                                    endofinternet: t,
                                    endoftheinternet: t,
                                    'from-me': t,
                                    'game-host': t,
                                    gotdns: t,
                                    'hobby-site': t,
                                    homedns: t,
                                    homeftp: t,
                                    homelinux: t,
                                    homeunix: t,
                                    'is-a-bruinsfan': t,
                                    'is-a-candidate': t,
                                    'is-a-celticsfan': t,
                                    'is-a-chef': t,
                                    'is-a-geek': t,
                                    'is-a-knight': t,
                                    'is-a-linux-user': t,
                                    'is-a-patsfan': t,
                                    'is-a-soxfan': t,
                                    'is-found': t,
                                    'is-lost': t,
                                    'is-saved': t,
                                    'is-very-bad': t,
                                    'is-very-evil': t,
                                    'is-very-good': t,
                                    'is-very-nice': t,
                                    'is-very-sweet': t,
                                    'isa-geek': t,
                                    'kicks-ass': t,
                                    misconfused: t,
                                    podzone: t,
                                    readmyblog: t,
                                    selfip: t,
                                    sellsyourhome: t,
                                    servebbs: t,
                                    serveftp: t,
                                    servegame: t,
                                    'stuff-4-sale': t,
                                    webhop: t,
                                    accesscam: t,
                                    camdvr: t,
                                    freeddns: t,
                                    mywire: t,
                                    webredirect: t,
                                    twmail: t,
                                    eu: [
                                        2,
                                        {
                                            al: t,
                                            asso: t,
                                            at: t,
                                            au: t,
                                            be: t,
                                            bg: t,
                                            ca: t,
                                            cd: t,
                                            ch: t,
                                            cn: t,
                                            cy: t,
                                            cz: t,
                                            de: t,
                                            dk: t,
                                            edu: t,
                                            ee: t,
                                            es: t,
                                            fi: t,
                                            fr: t,
                                            gr: t,
                                            hr: t,
                                            hu: t,
                                            ie: t,
                                            il: t,
                                            in: t,
                                            int: t,
                                            is: t,
                                            it: t,
                                            jp: t,
                                            kr: t,
                                            lt: t,
                                            lu: t,
                                            lv: t,
                                            me: t,
                                            mk: t,
                                            mt: t,
                                            my: t,
                                            net: t,
                                            ng: t,
                                            nl: t,
                                            no: t,
                                            nz: t,
                                            pl: t,
                                            pt: t,
                                            ro: t,
                                            ru: t,
                                            se: t,
                                            si: t,
                                            sk: t,
                                            tr: t,
                                            uk: t,
                                            us: t,
                                        },
                                    ],
                                    fedorainfracloud: t,
                                    fedorapeople: t,
                                    fedoraproject: [0, { cloud: t, os: H, stg: [0, { os: H }] }],
                                    freedesktop: t,
                                    hatenadiary: t,
                                    hepforge: t,
                                    'in-dsl': t,
                                    'in-vpn': t,
                                    js: t,
                                    barsy: t,
                                    mayfirst: t,
                                    routingthecloud: t,
                                    bmoattachments: t,
                                    'cable-modem': t,
                                    collegefan: t,
                                    couchpotatofries: t,
                                    hopto: t,
                                    mlbfan: t,
                                    myftp: t,
                                    mysecuritycamera: t,
                                    nflfan: t,
                                    'no-ip': t,
                                    'read-books': t,
                                    ufcfan: t,
                                    zapto: t,
                                    dynserv: t,
                                    'now-dns': t,
                                    'is-local': t,
                                    httpbin: t,
                                    pubtls: t,
                                    jpn: t,
                                    'my-firewall': t,
                                    myfirewall: t,
                                    spdns: t,
                                    'small-web': t,
                                    dsmynas: t,
                                    familyds: t,
                                    teckids: et,
                                    tuxfamily: t,
                                    diskstation: t,
                                    hk: t,
                                    us: t,
                                    toolforge: t,
                                    wmcloud: [2, { beta: t }],
                                    wmflabs: t,
                                    za: t,
                                },
                            ],
                            pa: [1, { abo: e, ac: e, com: e, edu: e, gob: e, ing: e, med: e, net: e, nom: e, org: e, sld: e }],
                            pe: [1, { com: e, edu: e, gob: e, mil: e, net: e, nom: e, org: e }],
                            pf: [1, { com: e, edu: e, org: e }],
                            pg: b,
                            ph: [1, { com: e, edu: e, gov: e, i: e, mil: e, net: e, ngo: e, org: e, cloudns: t }],
                            pk: [1, { ac: e, biz: e, com: e, edu: e, fam: e, gkp: e, gob: e, gog: e, gok: e, gop: e, gos: e, gov: e, net: e, org: e, web: e }],
                            pl: [
                                1,
                                {
                                    com: e,
                                    net: e,
                                    org: e,
                                    agro: e,
                                    aid: e,
                                    atm: e,
                                    auto: e,
                                    biz: e,
                                    edu: e,
                                    gmina: e,
                                    gsm: e,
                                    info: e,
                                    mail: e,
                                    media: e,
                                    miasta: e,
                                    mil: e,
                                    nieruchomosci: e,
                                    nom: e,
                                    pc: e,
                                    powiat: e,
                                    priv: e,
                                    realestate: e,
                                    rel: e,
                                    sex: e,
                                    shop: e,
                                    sklep: e,
                                    sos: e,
                                    szkola: e,
                                    targi: e,
                                    tm: e,
                                    tourism: e,
                                    travel: e,
                                    turystyka: e,
                                    gov: [
                                        1,
                                        {
                                            ap: e,
                                            griw: e,
                                            ic: e,
                                            is: e,
                                            kmpsp: e,
                                            konsulat: e,
                                            kppsp: e,
                                            kwp: e,
                                            kwpsp: e,
                                            mup: e,
                                            mw: e,
                                            oia: e,
                                            oirm: e,
                                            oke: e,
                                            oow: e,
                                            oschr: e,
                                            oum: e,
                                            pa: e,
                                            pinb: e,
                                            piw: e,
                                            po: e,
                                            pr: e,
                                            psp: e,
                                            psse: e,
                                            pup: e,
                                            rzgw: e,
                                            sa: e,
                                            sdn: e,
                                            sko: e,
                                            so: e,
                                            sr: e,
                                            starostwo: e,
                                            ug: e,
                                            ugim: e,
                                            um: e,
                                            umig: e,
                                            upow: e,
                                            uppo: e,
                                            us: e,
                                            uw: e,
                                            uzs: e,
                                            wif: e,
                                            wiih: e,
                                            winb: e,
                                            wios: e,
                                            witd: e,
                                            wiw: e,
                                            wkz: e,
                                            wsa: e,
                                            wskr: e,
                                            wsse: e,
                                            wuoz: e,
                                            wzmiuw: e,
                                            zp: e,
                                            zpisdn: e,
                                        },
                                    ],
                                    augustow: e,
                                    'babia-gora': e,
                                    bedzin: e,
                                    beskidy: e,
                                    bialowieza: e,
                                    bialystok: e,
                                    bielawa: e,
                                    bieszczady: e,
                                    boleslawiec: e,
                                    bydgoszcz: e,
                                    bytom: e,
                                    cieszyn: e,
                                    czeladz: e,
                                    czest: e,
                                    dlugoleka: e,
                                    elblag: e,
                                    elk: e,
                                    glogow: e,
                                    gniezno: e,
                                    gorlice: e,
                                    grajewo: e,
                                    ilawa: e,
                                    jaworzno: e,
                                    'jelenia-gora': e,
                                    jgora: e,
                                    kalisz: e,
                                    karpacz: e,
                                    kartuzy: e,
                                    kaszuby: e,
                                    katowice: e,
                                    'kazimierz-dolny': e,
                                    kepno: e,
                                    ketrzyn: e,
                                    klodzko: e,
                                    kobierzyce: e,
                                    kolobrzeg: e,
                                    konin: e,
                                    konskowola: e,
                                    kutno: e,
                                    lapy: e,
                                    lebork: e,
                                    legnica: e,
                                    lezajsk: e,
                                    limanowa: e,
                                    lomza: e,
                                    lowicz: e,
                                    lubin: e,
                                    lukow: e,
                                    malbork: e,
                                    malopolska: e,
                                    mazowsze: e,
                                    mazury: e,
                                    mielec: e,
                                    mielno: e,
                                    mragowo: e,
                                    naklo: e,
                                    nowaruda: e,
                                    nysa: e,
                                    olawa: e,
                                    olecko: e,
                                    olkusz: e,
                                    olsztyn: e,
                                    opoczno: e,
                                    opole: e,
                                    ostroda: e,
                                    ostroleka: e,
                                    ostrowiec: e,
                                    ostrowwlkp: e,
                                    pila: e,
                                    pisz: e,
                                    podhale: e,
                                    podlasie: e,
                                    polkowice: e,
                                    pomorskie: e,
                                    pomorze: e,
                                    prochowice: e,
                                    pruszkow: e,
                                    przeworsk: e,
                                    pulawy: e,
                                    radom: e,
                                    'rawa-maz': e,
                                    rybnik: e,
                                    rzeszow: e,
                                    sanok: e,
                                    sejny: e,
                                    skoczow: e,
                                    slask: e,
                                    slupsk: e,
                                    sosnowiec: e,
                                    'stalowa-wola': e,
                                    starachowice: e,
                                    stargard: e,
                                    suwalki: e,
                                    swidnica: e,
                                    swiebodzin: e,
                                    swinoujscie: e,
                                    szczecin: e,
                                    szczytno: e,
                                    tarnobrzeg: e,
                                    tgory: e,
                                    turek: e,
                                    tychy: e,
                                    ustka: e,
                                    walbrzych: e,
                                    warmia: e,
                                    warszawa: e,
                                    waw: e,
                                    wegrow: e,
                                    wielun: e,
                                    wlocl: e,
                                    wloclawek: e,
                                    wodzislaw: e,
                                    wolomin: e,
                                    wroclaw: e,
                                    zachpomor: e,
                                    zagan: e,
                                    zarow: e,
                                    zgora: e,
                                    zgorzelec: e,
                                    art: t,
                                    gliwice: t,
                                    krakow: t,
                                    poznan: t,
                                    wroc: t,
                                    zakopane: t,
                                    beep: t,
                                    'ecommerce-shop': t,
                                    cfolks: t,
                                    dfirma: t,
                                    dkonto: t,
                                    you2: t,
                                    shoparena: t,
                                    homesklep: t,
                                    sdscloud: t,
                                    unicloud: t,
                                    lodz: t,
                                    pabianice: t,
                                    plock: t,
                                    sieradz: t,
                                    skierniewice: t,
                                    zgierz: t,
                                    krasnik: t,
                                    leczna: t,
                                    lubartow: t,
                                    lublin: t,
                                    poniatowa: t,
                                    swidnik: t,
                                    co: t,
                                    torun: t,
                                    simplesite: t,
                                    myspreadshop: t,
                                    gda: t,
                                    gdansk: t,
                                    gdynia: t,
                                    med: t,
                                    sopot: t,
                                    bielsko: t,
                                },
                            ],
                            pm: [1, { own: t, name: t }],
                            pn: [1, { co: e, edu: e, gov: e, net: e, org: e }],
                            post: e,
                            pr: [1, { biz: e, com: e, edu: e, gov: e, info: e, isla: e, name: e, net: e, org: e, pro: e, ac: e, est: e, prof: e }],
                            pro: [
                                1,
                                {
                                    aaa: e,
                                    aca: e,
                                    acct: e,
                                    avocat: e,
                                    bar: e,
                                    cpa: e,
                                    eng: e,
                                    jur: e,
                                    law: e,
                                    med: e,
                                    recht: e,
                                    '12chars': t,
                                    cloudns: t,
                                    barsy: t,
                                    ngrok: t,
                                },
                            ],
                            ps: [1, { com: e, edu: e, gov: e, net: e, org: e, plo: e, sec: e }],
                            pt: [1, { com: e, edu: e, gov: e, int: e, net: e, nome: e, org: e, publ: e, '123paginaweb': t }],
                            pw: [1, { gov: e, cloudns: t, x443: t }],
                            py: [1, { com: e, coop: e, edu: e, gov: e, mil: e, net: e, org: e }],
                            qa: [1, { com: e, edu: e, gov: e, mil: e, name: e, net: e, org: e, sch: e }],
                            re: [1, { asso: e, com: e, netlib: t, can: t }],
                            ro: [1, { arts: e, com: e, firm: e, info: e, nom: e, nt: e, org: e, rec: e, store: e, tm: e, www: e, co: t, shop: t, barsy: t }],
                            rs: [1, { ac: e, co: e, edu: e, gov: e, in: e, org: e, brendly: k, barsy: t, ox: t }],
                            ru: [
                                1,
                                {
                                    ac: t,
                                    edu: t,
                                    gov: t,
                                    int: t,
                                    mil: t,
                                    eurodir: t,
                                    adygeya: t,
                                    bashkiria: t,
                                    bir: t,
                                    cbg: t,
                                    com: t,
                                    dagestan: t,
                                    grozny: t,
                                    kalmykia: t,
                                    kustanai: t,
                                    marine: t,
                                    mordovia: t,
                                    msk: t,
                                    mytis: t,
                                    nalchik: t,
                                    nov: t,
                                    pyatigorsk: t,
                                    spb: t,
                                    vladikavkaz: t,
                                    vladimir: t,
                                    na4u: t,
                                    mircloud: t,
                                    myjino: [2, { hosting: s, landing: s, spectrum: s, vps: s }],
                                    cldmail: [0, { hb: t }],
                                    mcdir: [2, { vps: t }],
                                    mcpre: t,
                                    net: t,
                                    org: t,
                                    pp: t,
                                    lk3: t,
                                    ras: t,
                                },
                            ],
                            rw: [1, { ac: e, co: e, coop: e, gov: e, mil: e, net: e, org: e }],
                            sa: [1, { com: e, edu: e, gov: e, med: e, net: e, org: e, pub: e, sch: e }],
                            sb: a,
                            sc: a,
                            sd: [1, { com: e, edu: e, gov: e, info: e, med: e, net: e, org: e, tv: e }],
                            se: [
                                1,
                                {
                                    a: e,
                                    ac: e,
                                    b: e,
                                    bd: e,
                                    brand: e,
                                    c: e,
                                    d: e,
                                    e: e,
                                    f: e,
                                    fh: e,
                                    fhsk: e,
                                    fhv: e,
                                    g: e,
                                    h: e,
                                    i: e,
                                    k: e,
                                    komforb: e,
                                    kommunalforbund: e,
                                    komvux: e,
                                    l: e,
                                    lanbib: e,
                                    m: e,
                                    n: e,
                                    naturbruksgymn: e,
                                    o: e,
                                    org: e,
                                    p: e,
                                    parti: e,
                                    pp: e,
                                    press: e,
                                    r: e,
                                    s: e,
                                    t: e,
                                    tm: e,
                                    u: e,
                                    w: e,
                                    x: e,
                                    y: e,
                                    z: e,
                                    com: t,
                                    iopsys: t,
                                    '123minsida': t,
                                    itcouldbewor: t,
                                    myspreadshop: t,
                                },
                            ],
                            sg: [1, { com: e, edu: e, gov: e, net: e, org: e, enscaled: t }],
                            sh: [
                                1,
                                {
                                    com: e,
                                    gov: e,
                                    mil: e,
                                    net: e,
                                    org: e,
                                    hashbang: t,
                                    botda: t,
                                    lovable: t,
                                    platform: [0, { ent: t, eu: t, us: t }],
                                    teleport: t,
                                    now: t,
                                },
                            ],
                            si: [1, { f5: t, gitapp: t, gitpage: t }],
                            sj: e,
                            sk: e,
                            sl: a,
                            sm: e,
                            sn: [1, { art: e, com: e, edu: e, gouv: e, org: e, perso: e, univ: e }],
                            so: [1, { com: e, edu: e, gov: e, me: e, net: e, org: e, surveys: t }],
                            sr: e,
                            ss: [1, { biz: e, co: e, com: e, edu: e, gov: e, me: e, net: e, org: e, sch: e }],
                            st: [
                                1,
                                {
                                    co: e,
                                    com: e,
                                    consulado: e,
                                    edu: e,
                                    embaixada: e,
                                    mil: e,
                                    net: e,
                                    org: e,
                                    principe: e,
                                    saotome: e,
                                    store: e,
                                    helioho: t,
                                    kirara: t,
                                    noho: t,
                                },
                            ],
                            su: [
                                1,
                                {
                                    abkhazia: t,
                                    adygeya: t,
                                    aktyubinsk: t,
                                    arkhangelsk: t,
                                    armenia: t,
                                    ashgabad: t,
                                    azerbaijan: t,
                                    balashov: t,
                                    bashkiria: t,
                                    bryansk: t,
                                    bukhara: t,
                                    chimkent: t,
                                    dagestan: t,
                                    'east-kazakhstan': t,
                                    exnet: t,
                                    georgia: t,
                                    grozny: t,
                                    ivanovo: t,
                                    jambyl: t,
                                    kalmykia: t,
                                    kaluga: t,
                                    karacol: t,
                                    karaganda: t,
                                    karelia: t,
                                    khakassia: t,
                                    krasnodar: t,
                                    kurgan: t,
                                    kustanai: t,
                                    lenug: t,
                                    mangyshlak: t,
                                    mordovia: t,
                                    msk: t,
                                    murmansk: t,
                                    nalchik: t,
                                    navoi: t,
                                    'north-kazakhstan': t,
                                    nov: t,
                                    obninsk: t,
                                    penza: t,
                                    pokrovsk: t,
                                    sochi: t,
                                    spb: t,
                                    tashkent: t,
                                    termez: t,
                                    togliatti: t,
                                    troitsk: t,
                                    tselinograd: t,
                                    tula: t,
                                    tuva: t,
                                    vladikavkaz: t,
                                    vladimir: t,
                                    vologda: t,
                                },
                            ],
                            sv: [1, { com: e, edu: e, gob: e, org: e, red: e }],
                            sx: l,
                            sy: o,
                            sz: [1, { ac: e, co: e, org: e }],
                            tc: e,
                            td: e,
                            tel: e,
                            tf: [1, { sch: t }],
                            tg: e,
                            th: [1, { ac: e, co: e, go: e, in: e, mi: e, net: e, or: e, online: t, shop: t }],
                            tj: [1, { ac: e, biz: e, co: e, com: e, edu: e, go: e, gov: e, int: e, mil: e, name: e, net: e, nic: e, org: e, test: e, web: e }],
                            tk: e,
                            tl: l,
                            tm: [1, { co: e, com: e, edu: e, gov: e, mil: e, net: e, nom: e, org: e }],
                            tn: [
                                1,
                                { com: e, ens: e, fin: e, gov: e, ind: e, info: e, intl: e, mincom: e, nat: e, net: e, org: e, perso: e, tourism: e, orangecloud: t },
                            ],
                            to: [1, { 611: t, com: e, edu: e, gov: e, mil: e, net: e, org: e, oya: t, x0: t, quickconnect: E, vpnplus: t }],
                            tr: [
                                1,
                                {
                                    av: e,
                                    bbs: e,
                                    bel: e,
                                    biz: e,
                                    com: e,
                                    dr: e,
                                    edu: e,
                                    gen: e,
                                    gov: e,
                                    info: e,
                                    k12: e,
                                    kep: e,
                                    mil: e,
                                    name: e,
                                    net: e,
                                    org: e,
                                    pol: e,
                                    tel: e,
                                    tsk: e,
                                    tv: e,
                                    web: e,
                                    nc: l,
                                },
                            ],
                            tt: [1, { biz: e, co: e, com: e, edu: e, gov: e, info: e, mil: e, name: e, net: e, org: e, pro: e }],
                            tv: [1, { 'better-than': t, dyndns: t, 'on-the-web': t, 'worse-than': t, from: t, sakura: t }],
                            tw: [1, { club: e, com: [1, { mymailer: t }], ebiz: e, edu: e, game: e, gov: e, idv: e, mil: e, net: e, org: e, url: t, mydns: t }],
                            tz: [1, { ac: e, co: e, go: e, hotel: e, info: e, me: e, mil: e, mobi: e, ne: e, or: e, sc: e, tv: e }],
                            ua: [
                                1,
                                {
                                    com: e,
                                    edu: e,
                                    gov: e,
                                    in: e,
                                    net: e,
                                    org: e,
                                    cherkassy: e,
                                    cherkasy: e,
                                    chernigov: e,
                                    chernihiv: e,
                                    chernivtsi: e,
                                    chernovtsy: e,
                                    ck: e,
                                    cn: e,
                                    cr: e,
                                    crimea: e,
                                    cv: e,
                                    dn: e,
                                    dnepropetrovsk: e,
                                    dnipropetrovsk: e,
                                    donetsk: e,
                                    dp: e,
                                    if: e,
                                    'ivano-frankivsk': e,
                                    kh: e,
                                    kharkiv: e,
                                    kharkov: e,
                                    kherson: e,
                                    khmelnitskiy: e,
                                    khmelnytskyi: e,
                                    kiev: e,
                                    kirovograd: e,
                                    km: e,
                                    kr: e,
                                    kropyvnytskyi: e,
                                    krym: e,
                                    ks: e,
                                    kv: e,
                                    kyiv: e,
                                    lg: e,
                                    lt: e,
                                    lugansk: e,
                                    luhansk: e,
                                    lutsk: e,
                                    lv: e,
                                    lviv: e,
                                    mk: e,
                                    mykolaiv: e,
                                    nikolaev: e,
                                    od: e,
                                    odesa: e,
                                    odessa: e,
                                    pl: e,
                                    poltava: e,
                                    rivne: e,
                                    rovno: e,
                                    rv: e,
                                    sb: e,
                                    sebastopol: e,
                                    sevastopol: e,
                                    sm: e,
                                    sumy: e,
                                    te: e,
                                    ternopil: e,
                                    uz: e,
                                    uzhgorod: e,
                                    uzhhorod: e,
                                    vinnica: e,
                                    vinnytsia: e,
                                    vn: e,
                                    volyn: e,
                                    yalta: e,
                                    zakarpattia: e,
                                    zaporizhzhe: e,
                                    zaporizhzhia: e,
                                    zhitomir: e,
                                    zhytomyr: e,
                                    zp: e,
                                    zt: e,
                                    cc: t,
                                    inf: t,
                                    ltd: t,
                                    cx: t,
                                    biz: t,
                                    co: t,
                                    pp: t,
                                    v: t,
                                },
                            ],
                            ug: [1, { ac: e, co: e, com: e, edu: e, go: e, gov: e, mil: e, ne: e, or: e, org: e, sc: e, us: e }],
                            uk: [
                                1,
                                {
                                    ac: e,
                                    co: [
                                        1,
                                        {
                                            bytemark: [0, { dh: t, vm: t }],
                                            layershift: F,
                                            barsy: t,
                                            barsyonline: t,
                                            retrosnub: ee,
                                            'nh-serv': t,
                                            'no-ip': t,
                                            adimo: t,
                                            myspreadshop: t,
                                        },
                                    ],
                                    gov: [1, { api: t, campaign: t, service: t }],
                                    ltd: e,
                                    me: e,
                                    net: e,
                                    nhs: e,
                                    org: [1, { glug: t, lug: t, lugs: t, affinitylottery: t, raffleentry: t, weeklylottery: t }],
                                    plc: e,
                                    police: e,
                                    sch: b,
                                    conn: t,
                                    copro: t,
                                    hosp: t,
                                    'independent-commission': t,
                                    'independent-inquest': t,
                                    'independent-inquiry': t,
                                    'independent-panel': t,
                                    'independent-review': t,
                                    'public-inquiry': t,
                                    'royal-commission': t,
                                    pymnt: t,
                                    barsy: t,
                                    nimsite: t,
                                    oraclegovcloudapps: s,
                                },
                            ],
                            us: [
                                1,
                                {
                                    dni: e,
                                    isa: e,
                                    nsn: e,
                                    ak: el,
                                    al: el,
                                    ar: el,
                                    as: el,
                                    az: el,
                                    ca: el,
                                    co: el,
                                    ct: el,
                                    dc: el,
                                    de: eu,
                                    fl: el,
                                    ga: el,
                                    gu: el,
                                    hi: ec,
                                    ia: el,
                                    id: el,
                                    il: el,
                                    in: el,
                                    ks: el,
                                    ky: el,
                                    la: el,
                                    ma: [1, { k12: [1, { chtr: e, paroch: e, pvt: e }], cc: e, lib: e }],
                                    md: el,
                                    me: el,
                                    mi: [1, { k12: e, cc: e, lib: e, 'ann-arbor': e, cog: e, dst: e, eaton: e, gen: e, mus: e, tec: e, washtenaw: e }],
                                    mn: el,
                                    mo: el,
                                    ms: [1, { k12: e, cc: e }],
                                    mt: el,
                                    nc: el,
                                    nd: ec,
                                    ne: el,
                                    nh: el,
                                    nj: el,
                                    nm: el,
                                    nv: el,
                                    ny: el,
                                    oh: el,
                                    ok: el,
                                    or: el,
                                    pa: el,
                                    pr: el,
                                    ri: ec,
                                    sc: el,
                                    sd: ec,
                                    tn: el,
                                    tx: el,
                                    ut: el,
                                    va: el,
                                    vi: el,
                                    vt: el,
                                    wa: el,
                                    wi: el,
                                    wv: eu,
                                    wy: el,
                                    cloudns: t,
                                    'is-by': t,
                                    'land-4-sale': t,
                                    'stuff-4-sale': t,
                                    heliohost: t,
                                    enscaled: [0, { phx: t }],
                                    mircloud: t,
                                    ngo: t,
                                    golffan: t,
                                    noip: t,
                                    pointto: t,
                                    freeddns: t,
                                    srv: [2, { gh: t, gl: t }],
                                    platterp: t,
                                    servername: t,
                                },
                            ],
                            uy: [1, { com: e, edu: e, gub: e, mil: e, net: e, org: e }],
                            uz: [1, { co: e, com: e, net: e, org: e }],
                            va: e,
                            vc: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, gv: [2, { d: t }], '0e': s, mydns: t }],
                            ve: [
                                1,
                                {
                                    arts: e,
                                    bib: e,
                                    co: e,
                                    com: e,
                                    e12: e,
                                    edu: e,
                                    emprende: e,
                                    firm: e,
                                    gob: e,
                                    gov: e,
                                    ia: e,
                                    info: e,
                                    int: e,
                                    mil: e,
                                    net: e,
                                    nom: e,
                                    org: e,
                                    rar: e,
                                    rec: e,
                                    store: e,
                                    tec: e,
                                    web: e,
                                },
                            ],
                            vg: [1, { edu: e }],
                            vi: [1, { co: e, com: e, k12: e, net: e, org: e }],
                            vn: [
                                1,
                                {
                                    ac: e,
                                    ai: e,
                                    biz: e,
                                    com: e,
                                    edu: e,
                                    gov: e,
                                    health: e,
                                    id: e,
                                    info: e,
                                    int: e,
                                    io: e,
                                    name: e,
                                    net: e,
                                    org: e,
                                    pro: e,
                                    angiang: e,
                                    bacgiang: e,
                                    backan: e,
                                    baclieu: e,
                                    bacninh: e,
                                    'baria-vungtau': e,
                                    bentre: e,
                                    binhdinh: e,
                                    binhduong: e,
                                    binhphuoc: e,
                                    binhthuan: e,
                                    camau: e,
                                    cantho: e,
                                    caobang: e,
                                    daklak: e,
                                    daknong: e,
                                    danang: e,
                                    dienbien: e,
                                    dongnai: e,
                                    dongthap: e,
                                    gialai: e,
                                    hagiang: e,
                                    haiduong: e,
                                    haiphong: e,
                                    hanam: e,
                                    hanoi: e,
                                    hatinh: e,
                                    haugiang: e,
                                    hoabinh: e,
                                    hungyen: e,
                                    khanhhoa: e,
                                    kiengiang: e,
                                    kontum: e,
                                    laichau: e,
                                    lamdong: e,
                                    langson: e,
                                    laocai: e,
                                    longan: e,
                                    namdinh: e,
                                    nghean: e,
                                    ninhbinh: e,
                                    ninhthuan: e,
                                    phutho: e,
                                    phuyen: e,
                                    quangbinh: e,
                                    quangnam: e,
                                    quangngai: e,
                                    quangninh: e,
                                    quangtri: e,
                                    soctrang: e,
                                    sonla: e,
                                    tayninh: e,
                                    thaibinh: e,
                                    thainguyen: e,
                                    thanhhoa: e,
                                    thanhphohochiminh: e,
                                    thuathienhue: e,
                                    tiengiang: e,
                                    travinh: e,
                                    tuyenquang: e,
                                    vinhlong: e,
                                    vinhphuc: e,
                                    yenbai: e,
                                },
                            ],
                            vu: G,
                            wf: [1, { biz: t, sch: t }],
                            ws: [1, { com: e, edu: e, gov: e, net: e, org: e, advisor: s, cloud66: t, dyndns: t, mypets: t }],
                            yt: [1, { org: t }],
                            'xn--mgbaam7a8h': e,
                            امارات: e,
                            'xn--y9a3aq': e,
                            հայ: e,
                            'xn--54b7fta0cc': e,
                            বাংলা: e,
                            'xn--90ae': e,
                            бг: e,
                            'xn--mgbcpq6gpa1a': e,
                            البحرين: e,
                            'xn--90ais': e,
                            бел: e,
                            'xn--fiqs8s': e,
                            中国: e,
                            'xn--fiqz9s': e,
                            中國: e,
                            'xn--lgbbat1ad8j': e,
                            الجزائر: e,
                            'xn--wgbh1c': e,
                            مصر: e,
                            'xn--e1a4c': e,
                            ею: e,
                            'xn--qxa6a': e,
                            ευ: e,
                            'xn--mgbah1a3hjkrd': e,
                            موريتانيا: e,
                            'xn--node': e,
                            გე: e,
                            'xn--qxam': e,
                            ελ: e,
                            'xn--j6w193g': [1, { 'xn--gmqw5a': e, 'xn--55qx5d': e, 'xn--mxtq1m': e, 'xn--wcvs22d': e, 'xn--uc0atv': e, 'xn--od0alg': e }],
                            香港: [1, { 個人: e, 公司: e, 政府: e, 教育: e, 組織: e, 網絡: e }],
                            'xn--2scrj9c': e,
                            ಭಾರತ: e,
                            'xn--3hcrj9c': e,
                            ଭାରତ: e,
                            'xn--45br5cyl': e,
                            ভাৰত: e,
                            'xn--h2breg3eve': e,
                            भारतम्: e,
                            'xn--h2brj9c8c': e,
                            भारोत: e,
                            'xn--mgbgu82a': e,
                            ڀارت: e,
                            'xn--rvc1e0am3e': e,
                            ഭാരതം: e,
                            'xn--h2brj9c': e,
                            भारत: e,
                            'xn--mgbbh1a': e,
                            بارت: e,
                            'xn--mgbbh1a71e': e,
                            بھارت: e,
                            'xn--fpcrj9c3d': e,
                            భారత్: e,
                            'xn--gecrj9c': e,
                            ભારત: e,
                            'xn--s9brj9c': e,
                            ਭਾਰਤ: e,
                            'xn--45brj9c': e,
                            ভারত: e,
                            'xn--xkc2dl3a5ee0h': e,
                            இந்தியா: e,
                            'xn--mgba3a4f16a': e,
                            ایران: e,
                            'xn--mgba3a4fra': e,
                            ايران: e,
                            'xn--mgbtx2b': e,
                            عراق: e,
                            'xn--mgbayh7gpa': e,
                            الاردن: e,
                            'xn--3e0b707e': e,
                            한국: e,
                            'xn--80ao21a': e,
                            қаз: e,
                            'xn--q7ce6a': e,
                            ລາວ: e,
                            'xn--fzc2c9e2c': e,
                            ලංකා: e,
                            'xn--xkc2al3hye2a': e,
                            இலங்கை: e,
                            'xn--mgbc0a9azcg': e,
                            المغرب: e,
                            'xn--d1alf': e,
                            мкд: e,
                            'xn--l1acc': e,
                            мон: e,
                            'xn--mix891f': e,
                            澳門: e,
                            'xn--mix082f': e,
                            澳门: e,
                            'xn--mgbx4cd0ab': e,
                            مليسيا: e,
                            'xn--mgb9awbf': e,
                            عمان: e,
                            'xn--mgbai9azgqp6j': e,
                            پاکستان: e,
                            'xn--mgbai9a5eva00b': e,
                            پاكستان: e,
                            'xn--ygbi2ammx': e,
                            فلسطين: e,
                            'xn--90a3ac': [1, { 'xn--80au': e, 'xn--90azh': e, 'xn--d1at': e, 'xn--c1avg': e, 'xn--o1ac': e, 'xn--o1ach': e }],
                            срб: [1, { ак: e, обр: e, од: e, орг: e, пр: e, упр: e }],
                            'xn--p1ai': e,
                            рф: e,
                            'xn--wgbl6a': e,
                            قطر: e,
                            'xn--mgberp4a5d4ar': e,
                            السعودية: e,
                            'xn--mgberp4a5d4a87g': e,
                            السعودیة: e,
                            'xn--mgbqly7c0a67fbc': e,
                            السعودیۃ: e,
                            'xn--mgbqly7cvafr': e,
                            السعوديه: e,
                            'xn--mgbpl2fh': e,
                            سودان: e,
                            'xn--yfro4i67o': e,
                            新加坡: e,
                            'xn--clchc0ea0b2g2a9gcd': e,
                            சிங்கப்பூர்: e,
                            'xn--ogbpf8fl': e,
                            سورية: e,
                            'xn--mgbtf8fl': e,
                            سوريا: e,
                            'xn--o3cw4h': [
                                1,
                                { 'xn--o3cyx2a': e, 'xn--12co0c3b4eva': e, 'xn--m3ch0j3a': e, 'xn--h3cuzk1di': e, 'xn--12c1fe0br': e, 'xn--12cfi8ixb8l': e },
                            ],
                            ไทย: [1, { ทหาร: e, ธุรกิจ: e, เน็ต: e, รัฐบาล: e, ศึกษา: e, องค์กร: e }],
                            'xn--pgbs0dh': e,
                            تونس: e,
                            'xn--kpry57d': e,
                            台灣: e,
                            'xn--kprw13d': e,
                            台湾: e,
                            'xn--nnx388a': e,
                            臺灣: e,
                            'xn--j1amh': e,
                            укр: e,
                            'xn--mgb2ddes': e,
                            اليمن: e,
                            xxx: e,
                            ye: o,
                            za: [
                                0,
                                {
                                    ac: e,
                                    agric: e,
                                    alt: e,
                                    co: e,
                                    edu: e,
                                    gov: e,
                                    grondar: e,
                                    law: e,
                                    mil: e,
                                    net: e,
                                    ngo: e,
                                    nic: e,
                                    nis: e,
                                    nom: e,
                                    org: e,
                                    school: e,
                                    tm: e,
                                    web: e,
                                },
                            ],
                            zm: [1, { ac: e, biz: e, co: e, com: e, edu: e, gov: e, info: e, mil: e, net: e, org: e, sch: e }],
                            zw: [1, { ac: e, co: e, gov: e, mil: e, org: e }],
                            aaa: e,
                            aarp: e,
                            abb: e,
                            abbott: e,
                            abbvie: e,
                            abc: e,
                            able: e,
                            abogado: e,
                            abudhabi: e,
                            academy: [1, { official: t }],
                            accenture: e,
                            accountant: e,
                            accountants: e,
                            aco: e,
                            actor: e,
                            ads: e,
                            adult: e,
                            aeg: e,
                            aetna: e,
                            afl: e,
                            africa: e,
                            agakhan: e,
                            agency: e,
                            aig: e,
                            airbus: e,
                            airforce: e,
                            airtel: e,
                            akdn: e,
                            alibaba: e,
                            alipay: e,
                            allfinanz: e,
                            allstate: e,
                            ally: e,
                            alsace: e,
                            alstom: e,
                            amazon: e,
                            americanexpress: e,
                            americanfamily: e,
                            amex: e,
                            amfam: e,
                            amica: e,
                            amsterdam: e,
                            analytics: e,
                            android: e,
                            anquan: e,
                            anz: e,
                            aol: e,
                            apartments: e,
                            app: [
                                1,
                                {
                                    adaptable: t,
                                    aiven: t,
                                    beget: s,
                                    brave: r,
                                    clerk: t,
                                    clerkstage: t,
                                    cloudflare: t,
                                    wnext: t,
                                    csb: [2, { preview: t }],
                                    convex: t,
                                    deta: t,
                                    ondigitalocean: t,
                                    easypanel: t,
                                    encr: [2, { frontend: t }],
                                    evervault: i,
                                    expo: [2, { staging: t }],
                                    edgecompute: t,
                                    'on-fleek': t,
                                    flutterflow: t,
                                    e2b: t,
                                    framer: t,
                                    github: t,
                                    hosted: s,
                                    run: [0, { '*': t, mtls: s }],
                                    web: t,
                                    hackclub: t,
                                    hasura: t,
                                    botdash: t,
                                    leapcell: t,
                                    loginline: t,
                                    lovable: t,
                                    luyani: t,
                                    medusajs: t,
                                    messerli: t,
                                    mocha: t,
                                    netlify: t,
                                    ngrok: t,
                                    'ngrok-free': t,
                                    developer: s,
                                    noop: t,
                                    northflank: s,
                                    upsun: s,
                                    railway: [0, { up: t }],
                                    replit: n,
                                    nyat: t,
                                    snowflake: [0, { '*': t, privatelink: s }],
                                    streamlit: t,
                                    storipress: t,
                                    telebit: t,
                                    typedream: t,
                                    vercel: t,
                                    wal: t,
                                    wasmer: t,
                                    bookonline: t,
                                    windsurf: t,
                                    zeabur: t,
                                    zerops: s,
                                },
                            ],
                            apple: e,
                            aquarelle: e,
                            arab: e,
                            aramco: e,
                            archi: e,
                            army: e,
                            art: e,
                            arte: e,
                            asda: e,
                            associates: e,
                            athleta: e,
                            attorney: e,
                            auction: e,
                            audi: e,
                            audible: e,
                            audio: e,
                            auspost: e,
                            author: e,
                            auto: e,
                            autos: e,
                            aws: [
                                1,
                                {
                                    on: [
                                        0,
                                        {
                                            'af-south-1': u,
                                            'ap-east-1': u,
                                            'ap-northeast-1': u,
                                            'ap-northeast-2': u,
                                            'ap-northeast-3': u,
                                            'ap-south-1': u,
                                            'ap-south-2': c,
                                            'ap-southeast-1': u,
                                            'ap-southeast-2': u,
                                            'ap-southeast-3': u,
                                            'ap-southeast-4': c,
                                            'ap-southeast-5': c,
                                            'ca-central-1': u,
                                            'ca-west-1': c,
                                            'eu-central-1': u,
                                            'eu-central-2': c,
                                            'eu-north-1': u,
                                            'eu-south-1': u,
                                            'eu-south-2': c,
                                            'eu-west-1': u,
                                            'eu-west-2': u,
                                            'eu-west-3': u,
                                            'il-central-1': c,
                                            'me-central-1': c,
                                            'me-south-1': u,
                                            'sa-east-1': u,
                                            'us-east-1': u,
                                            'us-east-2': u,
                                            'us-west-1': u,
                                            'us-west-2': u,
                                            'us-gov-east-1': d,
                                            'us-gov-west-1': d,
                                        },
                                    ],
                                    sagemaker: [
                                        0,
                                        {
                                            'ap-northeast-1': m,
                                            'ap-northeast-2': m,
                                            'ap-south-1': m,
                                            'ap-southeast-1': m,
                                            'ap-southeast-2': m,
                                            'ca-central-1': g,
                                            'eu-central-1': m,
                                            'eu-west-1': m,
                                            'eu-west-2': m,
                                            'us-east-1': g,
                                            'us-east-2': g,
                                            'us-west-2': g,
                                            'af-south-1': h,
                                            'ap-east-1': h,
                                            'ap-northeast-3': h,
                                            'ap-south-2': p,
                                            'ap-southeast-3': h,
                                            'ap-southeast-4': p,
                                            'ca-west-1': [0, { notebook: t, 'notebook-fips': t }],
                                            'eu-central-2': h,
                                            'eu-north-1': h,
                                            'eu-south-1': h,
                                            'eu-south-2': h,
                                            'eu-west-3': h,
                                            'il-central-1': h,
                                            'me-central-1': h,
                                            'me-south-1': h,
                                            'sa-east-1': h,
                                            'us-gov-east-1': f,
                                            'us-gov-west-1': f,
                                            'us-west-1': [0, { notebook: t, 'notebook-fips': t, studio: t }],
                                            experiments: s,
                                        },
                                    ],
                                    repost: [0, { private: s }],
                                },
                            ],
                            axa: e,
                            azure: e,
                            baby: e,
                            baidu: e,
                            banamex: e,
                            band: e,
                            bank: e,
                            bar: e,
                            barcelona: e,
                            barclaycard: e,
                            barclays: e,
                            barefoot: e,
                            bargains: e,
                            baseball: e,
                            basketball: [1, { aus: t, nz: t }],
                            bauhaus: e,
                            bayern: e,
                            bbc: e,
                            bbt: e,
                            bbva: e,
                            bcg: e,
                            bcn: e,
                            beats: e,
                            beauty: e,
                            beer: e,
                            berlin: e,
                            best: e,
                            bestbuy: e,
                            bet: e,
                            bharti: e,
                            bible: e,
                            bid: e,
                            bike: e,
                            bing: e,
                            bingo: e,
                            bio: e,
                            black: e,
                            blackfriday: e,
                            blockbuster: e,
                            blog: e,
                            bloomberg: e,
                            blue: e,
                            bms: e,
                            bmw: e,
                            bnpparibas: e,
                            boats: e,
                            boehringer: e,
                            bofa: e,
                            bom: e,
                            bond: e,
                            boo: e,
                            book: e,
                            booking: e,
                            bosch: e,
                            bostik: e,
                            boston: e,
                            bot: e,
                            boutique: e,
                            box: e,
                            bradesco: e,
                            bridgestone: e,
                            broadway: e,
                            broker: e,
                            brother: e,
                            brussels: e,
                            build: [1, { v0: t, windsurf: t }],
                            builders: [1, { cloudsite: t }],
                            business: y,
                            buy: e,
                            buzz: e,
                            bzh: e,
                            cab: e,
                            cafe: e,
                            cal: e,
                            call: e,
                            calvinklein: e,
                            cam: e,
                            camera: e,
                            camp: [1, { emf: [0, { at: t }] }],
                            canon: e,
                            capetown: e,
                            capital: e,
                            capitalone: e,
                            car: e,
                            caravan: e,
                            cards: e,
                            care: e,
                            career: e,
                            careers: e,
                            cars: e,
                            casa: [1, { nabu: [0, { ui: t }] }],
                            case: e,
                            cash: e,
                            casino: e,
                            catering: e,
                            catholic: e,
                            cba: e,
                            cbn: e,
                            cbre: e,
                            center: e,
                            ceo: e,
                            cern: e,
                            cfa: e,
                            cfd: e,
                            chanel: e,
                            channel: e,
                            charity: e,
                            chase: e,
                            chat: e,
                            cheap: e,
                            chintai: e,
                            christmas: e,
                            chrome: e,
                            church: e,
                            cipriani: e,
                            circle: e,
                            cisco: e,
                            citadel: e,
                            citi: e,
                            citic: e,
                            city: e,
                            claims: e,
                            cleaning: e,
                            click: e,
                            clinic: e,
                            clinique: e,
                            clothing: e,
                            cloud: [
                                1,
                                {
                                    convex: t,
                                    elementor: t,
                                    emergent: t,
                                    encoway: [0, { eu: t }],
                                    statics: s,
                                    ravendb: t,
                                    axarnet: [0, { 'es-1': t }],
                                    diadem: t,
                                    jelastic: [0, { vip: t }],
                                    jele: t,
                                    'jenv-aruba': [0, { aruba: [0, { eur: [0, { it1: t }] }], it1: t }],
                                    keliweb: [2, { cs: t }],
                                    oxa: [2, { tn: t, uk: t }],
                                    primetel: [2, { uk: t }],
                                    reclaim: [0, { ca: t, uk: t, us: t }],
                                    trendhosting: [0, { ch: t, de: t }],
                                    jote: t,
                                    jotelulu: t,
                                    kuleuven: t,
                                    laravel: t,
                                    linkyard: t,
                                    magentosite: s,
                                    matlab: t,
                                    observablehq: t,
                                    perspecta: t,
                                    vapor: t,
                                    'on-rancher': s,
                                    scw: [
                                        0,
                                        {
                                            baremetal: [0, { 'fr-par-1': t, 'fr-par-2': t, 'nl-ams-1': t }],
                                            'fr-par': [
                                                0,
                                                {
                                                    cockpit: t,
                                                    ddl: t,
                                                    dtwh: t,
                                                    fnc: [2, { functions: t }],
                                                    ifr: t,
                                                    k8s: w,
                                                    kafk: t,
                                                    mgdb: t,
                                                    rdb: t,
                                                    s3: t,
                                                    's3-website': t,
                                                    scbl: t,
                                                    whm: t,
                                                },
                                            ],
                                            instances: [0, { priv: t, pub: t }],
                                            k8s: t,
                                            'nl-ams': [
                                                0,
                                                { cockpit: t, ddl: t, dtwh: t, ifr: t, k8s: w, kafk: t, mgdb: t, rdb: t, s3: t, 's3-website': t, scbl: t, whm: t },
                                            ],
                                            'pl-waw': [0, { cockpit: t, ddl: t, dtwh: t, ifr: t, k8s: w, kafk: t, mgdb: t, rdb: t, s3: t, 's3-website': t, scbl: t }],
                                            scalebook: t,
                                            smartlabeling: t,
                                        },
                                    ],
                                    servebolt: t,
                                    onstackit: [0, { runs: t }],
                                    trafficplex: t,
                                    'unison-services': t,
                                    urown: t,
                                    voorloper: t,
                                    zap: t,
                                },
                            ],
                            club: [1, { cloudns: t, jele: t, barsy: t }],
                            clubmed: e,
                            coach: e,
                            codes: [1, { owo: s }],
                            coffee: e,
                            college: e,
                            cologne: e,
                            commbank: e,
                            community: [1, { nog: t, ravendb: t, myforum: t }],
                            company: e,
                            compare: e,
                            computer: e,
                            comsec: e,
                            condos: e,
                            construction: e,
                            consulting: e,
                            contact: e,
                            contractors: e,
                            cooking: e,
                            cool: [1, { elementor: t, de: t }],
                            corsica: e,
                            country: e,
                            coupon: e,
                            coupons: e,
                            courses: e,
                            cpa: e,
                            credit: e,
                            creditcard: e,
                            creditunion: e,
                            cricket: e,
                            crown: e,
                            crs: e,
                            cruise: e,
                            cruises: e,
                            cuisinella: e,
                            cymru: e,
                            cyou: e,
                            dad: e,
                            dance: e,
                            data: e,
                            date: e,
                            dating: e,
                            datsun: e,
                            day: e,
                            dclk: e,
                            dds: e,
                            deal: e,
                            dealer: e,
                            deals: e,
                            degree: e,
                            delivery: e,
                            dell: e,
                            deloitte: e,
                            delta: e,
                            democrat: e,
                            dental: e,
                            dentist: e,
                            desi: e,
                            design: [1, { graphic: t, bss: t }],
                            dev: [
                                1,
                                {
                                    '12chars': t,
                                    myaddr: t,
                                    panel: t,
                                    bearblog: t,
                                    lcl: s,
                                    lclstage: s,
                                    stg: s,
                                    stgstage: s,
                                    pages: t,
                                    r2: t,
                                    workers: t,
                                    deno: t,
                                    'deno-staging': t,
                                    deta: t,
                                    lp: [2, { api: t, objects: t }],
                                    evervault: i,
                                    fly: t,
                                    githubpreview: t,
                                    gateway: s,
                                    botdash: t,
                                    inbrowser: s,
                                    'is-a-good': t,
                                    iserv: t,
                                    leapcell: t,
                                    runcontainers: t,
                                    localcert: [0, { user: s }],
                                    loginline: t,
                                    barsy: t,
                                    mediatech: t,
                                    'mocha-sandbox': t,
                                    modx: t,
                                    ngrok: t,
                                    'ngrok-free': t,
                                    'is-a-fullstack': t,
                                    'is-cool': t,
                                    'is-not-a': t,
                                    localplayer: t,
                                    xmit: t,
                                    'platter-app': t,
                                    replit: [
                                        2,
                                        {
                                            archer: t,
                                            bones: t,
                                            canary: t,
                                            global: t,
                                            hacker: t,
                                            id: t,
                                            janeway: t,
                                            kim: t,
                                            kira: t,
                                            kirk: t,
                                            odo: t,
                                            paris: t,
                                            picard: t,
                                            pike: t,
                                            prerelease: t,
                                            reed: t,
                                            riker: t,
                                            sisko: t,
                                            spock: t,
                                            staging: t,
                                            sulu: t,
                                            tarpit: t,
                                            teams: t,
                                            tucker: t,
                                            wesley: t,
                                            worf: t,
                                        },
                                    ],
                                    crm: [0, { d: s, w: s, wa: s, wb: s, wc: s, wd: s, we: s, wf: s }],
                                    erp: J,
                                    vercel: t,
                                    webhare: s,
                                    hrsn: t,
                                    'is-a': t,
                                },
                            ],
                            dhl: e,
                            diamonds: e,
                            diet: e,
                            digital: [1, { cloudapps: [2, { london: t }] }],
                            direct: [1, { libp2p: t }],
                            directory: e,
                            discount: e,
                            discover: e,
                            dish: e,
                            diy: e,
                            dnp: e,
                            docs: e,
                            doctor: e,
                            dog: e,
                            domains: e,
                            dot: e,
                            download: e,
                            drive: e,
                            dtv: e,
                            dubai: e,
                            dupont: e,
                            durban: e,
                            dvag: e,
                            dvr: e,
                            earth: e,
                            eat: e,
                            eco: e,
                            edeka: e,
                            education: y,
                            email: [1, { crisp: [0, { on: t }], tawk: X, tawkto: X }],
                            emerck: e,
                            energy: e,
                            engineer: e,
                            engineering: e,
                            enterprises: e,
                            epson: e,
                            equipment: e,
                            ericsson: e,
                            erni: e,
                            esq: e,
                            estate: [1, { compute: s }],
                            eurovision: e,
                            eus: [1, { party: K }],
                            events: [1, { koobin: t, co: t }],
                            exchange: e,
                            expert: e,
                            exposed: e,
                            express: e,
                            extraspace: e,
                            fage: e,
                            fail: e,
                            fairwinds: e,
                            faith: e,
                            family: e,
                            fan: e,
                            fans: e,
                            farm: [1, { storj: t }],
                            farmers: e,
                            fashion: e,
                            fast: e,
                            fedex: e,
                            feedback: e,
                            ferrari: e,
                            ferrero: e,
                            fidelity: e,
                            fido: e,
                            film: e,
                            final: e,
                            finance: e,
                            financial: y,
                            fire: e,
                            firestone: e,
                            firmdale: e,
                            fish: e,
                            fishing: e,
                            fit: e,
                            fitness: e,
                            flickr: e,
                            flights: e,
                            flir: e,
                            florist: e,
                            flowers: e,
                            fly: e,
                            foo: e,
                            food: e,
                            football: e,
                            ford: e,
                            forex: e,
                            forsale: e,
                            forum: e,
                            foundation: e,
                            fox: e,
                            free: e,
                            fresenius: e,
                            frl: e,
                            frogans: e,
                            frontier: e,
                            ftr: e,
                            fujitsu: e,
                            fun: e,
                            fund: e,
                            furniture: e,
                            futbol: e,
                            fyi: e,
                            gal: e,
                            gallery: e,
                            gallo: e,
                            gallup: e,
                            game: e,
                            games: [1, { pley: t, sheezy: t }],
                            gap: e,
                            garden: e,
                            gay: [1, { pages: t }],
                            gbiz: e,
                            gdn: [1, { cnpy: t }],
                            gea: e,
                            gent: e,
                            genting: e,
                            george: e,
                            ggee: e,
                            gift: e,
                            gifts: e,
                            gives: e,
                            giving: e,
                            glass: e,
                            gle: e,
                            global: [1, { appwrite: t }],
                            globo: e,
                            gmail: e,
                            gmbh: e,
                            gmo: e,
                            gmx: e,
                            godaddy: e,
                            gold: e,
                            goldpoint: e,
                            golf: e,
                            goo: e,
                            goodyear: e,
                            goog: [1, { cloud: t, translate: t, usercontent: s }],
                            google: e,
                            gop: e,
                            got: e,
                            grainger: e,
                            graphics: e,
                            gratis: e,
                            green: e,
                            gripe: e,
                            grocery: e,
                            group: [1, { discourse: t }],
                            gucci: e,
                            guge: e,
                            guide: e,
                            guitars: e,
                            guru: e,
                            hair: e,
                            hamburg: e,
                            hangout: e,
                            haus: e,
                            hbo: e,
                            hdfc: e,
                            hdfcbank: e,
                            health: [1, { hra: t }],
                            healthcare: e,
                            help: e,
                            helsinki: e,
                            here: e,
                            hermes: e,
                            hiphop: e,
                            hisamitsu: e,
                            hitachi: e,
                            hiv: e,
                            hkt: e,
                            hockey: e,
                            holdings: e,
                            holiday: e,
                            homedepot: e,
                            homegoods: e,
                            homes: e,
                            homesense: e,
                            honda: e,
                            horse: e,
                            hospital: e,
                            host: [
                                1,
                                {
                                    cloudaccess: t,
                                    freesite: t,
                                    easypanel: t,
                                    emergent: t,
                                    fastvps: t,
                                    myfast: t,
                                    tempurl: t,
                                    wpmudev: t,
                                    iserv: t,
                                    jele: t,
                                    mircloud: t,
                                    bolt: t,
                                    wp2: t,
                                    half: t,
                                },
                            ],
                            hosting: [1, { opencraft: t }],
                            hot: e,
                            hotel: e,
                            hotels: e,
                            hotmail: e,
                            house: e,
                            how: e,
                            hsbc: e,
                            hughes: e,
                            hyatt: e,
                            hyundai: e,
                            ibm: e,
                            icbc: e,
                            ice: e,
                            icu: e,
                            ieee: e,
                            ifm: e,
                            ikano: e,
                            imamat: e,
                            imdb: e,
                            immo: e,
                            immobilien: e,
                            inc: e,
                            industries: e,
                            infiniti: e,
                            ing: e,
                            ink: e,
                            institute: e,
                            insurance: e,
                            insure: e,
                            international: e,
                            intuit: e,
                            investments: e,
                            ipiranga: e,
                            irish: e,
                            ismaili: e,
                            ist: e,
                            istanbul: e,
                            itau: e,
                            itv: e,
                            jaguar: e,
                            java: e,
                            jcb: e,
                            jeep: e,
                            jetzt: e,
                            jewelry: e,
                            jio: e,
                            jll: e,
                            jmp: e,
                            jnj: e,
                            joburg: e,
                            jot: e,
                            joy: e,
                            jpmorgan: e,
                            jprs: e,
                            juegos: e,
                            juniper: e,
                            kaufen: e,
                            kddi: e,
                            kerryhotels: e,
                            kerryproperties: e,
                            kfh: e,
                            kia: e,
                            kids: e,
                            kim: e,
                            kindle: e,
                            kitchen: e,
                            kiwi: e,
                            koeln: e,
                            komatsu: e,
                            kosher: e,
                            kpmg: e,
                            kpn: e,
                            krd: [1, { co: t, edu: t }],
                            kred: e,
                            kuokgroup: e,
                            kyoto: e,
                            lacaixa: e,
                            lamborghini: e,
                            lamer: e,
                            land: e,
                            landrover: e,
                            lanxess: e,
                            lasalle: e,
                            lat: e,
                            latino: e,
                            latrobe: e,
                            law: e,
                            lawyer: e,
                            lds: e,
                            lease: e,
                            leclerc: e,
                            lefrak: e,
                            legal: e,
                            lego: e,
                            lexus: e,
                            lgbt: e,
                            lidl: e,
                            life: e,
                            lifeinsurance: e,
                            lifestyle: e,
                            lighting: e,
                            like: e,
                            lilly: e,
                            limited: e,
                            limo: e,
                            lincoln: e,
                            link: [1, { myfritz: t, cyon: t, joinmc: t, dweb: s, inbrowser: s, nftstorage: eo, mypep: t, storacha: eo, w3s: eo }],
                            live: [1, { aem: t, hlx: t, ewp: s }],
                            living: e,
                            llc: e,
                            llp: e,
                            loan: e,
                            loans: e,
                            locker: e,
                            locus: e,
                            lol: [1, { omg: t }],
                            london: e,
                            lotte: e,
                            lotto: e,
                            love: e,
                            lpl: e,
                            lplfinancial: e,
                            ltd: e,
                            ltda: e,
                            lundbeck: e,
                            luxe: e,
                            luxury: e,
                            madrid: e,
                            maif: e,
                            maison: e,
                            makeup: e,
                            man: e,
                            management: e,
                            mango: e,
                            map: e,
                            market: e,
                            marketing: e,
                            markets: e,
                            marriott: e,
                            marshalls: e,
                            mattel: e,
                            mba: e,
                            mckinsey: e,
                            med: e,
                            media: es,
                            meet: e,
                            melbourne: e,
                            meme: e,
                            memorial: e,
                            men: e,
                            menu: [1, { barsy: t, barsyonline: t }],
                            merck: e,
                            merckmsd: e,
                            miami: e,
                            microsoft: e,
                            mini: e,
                            mint: e,
                            mit: e,
                            mitsubishi: e,
                            mlb: e,
                            mls: e,
                            mma: e,
                            mobile: e,
                            moda: e,
                            moe: e,
                            moi: e,
                            mom: e,
                            monash: e,
                            money: e,
                            monster: e,
                            mormon: e,
                            mortgage: e,
                            moscow: e,
                            moto: e,
                            motorcycles: e,
                            mov: e,
                            movie: e,
                            msd: e,
                            mtn: e,
                            mtr: e,
                            music: e,
                            nab: e,
                            nagoya: e,
                            navy: e,
                            nba: e,
                            nec: e,
                            netbank: e,
                            netflix: e,
                            network: [1, { aem: t, alces: s, co: t, arvo: t, azimuth: t, tlon: t }],
                            neustar: e,
                            new: e,
                            news: [1, { noticeable: t }],
                            next: e,
                            nextdirect: e,
                            nexus: e,
                            nfl: e,
                            ngo: e,
                            nhk: e,
                            nico: e,
                            nike: e,
                            nikon: e,
                            ninja: e,
                            nissan: e,
                            nissay: e,
                            nokia: e,
                            norton: e,
                            now: e,
                            nowruz: e,
                            nowtv: e,
                            nra: e,
                            nrw: e,
                            ntt: e,
                            nyc: e,
                            obi: e,
                            observer: e,
                            office: e,
                            okinawa: e,
                            olayan: e,
                            olayangroup: e,
                            ollo: e,
                            omega: e,
                            one: [1, { kin: s, service: t, website: t }],
                            ong: [1, { obl: t }],
                            onl: e,
                            online: [1, { eero: t, 'eero-stage': t, websitebuilder: t, leapcell: t, barsy: t }],
                            ooo: e,
                            open: e,
                            oracle: e,
                            orange: [1, { tech: t }],
                            organic: e,
                            origins: e,
                            osaka: e,
                            otsuka: e,
                            ott: e,
                            ovh: [1, { nerdpol: t }],
                            page: [1, { aem: t, hlx: t, translated: t, codeberg: t, heyflow: t, prvcy: t, rocky: t, statichost: t, pdns: t, plesk: t }],
                            panasonic: e,
                            paris: e,
                            pars: e,
                            partners: e,
                            parts: e,
                            party: e,
                            pay: e,
                            pccw: e,
                            pet: e,
                            pfizer: e,
                            pharmacy: e,
                            phd: e,
                            philips: e,
                            phone: e,
                            photo: e,
                            photography: e,
                            photos: es,
                            physio: e,
                            pics: e,
                            pictet: e,
                            pictures: [1, { 1337: t }],
                            pid: e,
                            pin: e,
                            ping: e,
                            pink: e,
                            pioneer: e,
                            pizza: [1, { ngrok: t }],
                            place: y,
                            play: e,
                            playstation: e,
                            plumbing: e,
                            plus: [1, { playit: [2, { at: s, with: t }] }],
                            pnc: e,
                            pohl: e,
                            poker: e,
                            politie: e,
                            porn: e,
                            praxi: e,
                            press: e,
                            prime: e,
                            prod: e,
                            productions: e,
                            prof: e,
                            progressive: e,
                            promo: e,
                            properties: e,
                            property: e,
                            protection: e,
                            pru: e,
                            prudential: e,
                            pub: [1, { id: s, kin: s, barsy: t }],
                            pwc: e,
                            qpon: e,
                            quebec: e,
                            quest: e,
                            racing: e,
                            radio: e,
                            read: e,
                            realestate: e,
                            realtor: e,
                            realty: e,
                            recipes: e,
                            red: e,
                            redumbrella: e,
                            rehab: e,
                            reise: e,
                            reisen: e,
                            reit: e,
                            reliance: e,
                            ren: e,
                            rent: e,
                            rentals: e,
                            repair: e,
                            report: e,
                            republican: e,
                            rest: e,
                            restaurant: e,
                            review: e,
                            reviews: [1, { aem: t }],
                            rexroth: e,
                            rich: e,
                            richardli: e,
                            ricoh: e,
                            ril: e,
                            rio: e,
                            rip: [1, { clan: t }],
                            rocks: [1, { myddns: t, stackit: t, 'lima-city': t, webspace: t }],
                            rodeo: e,
                            rogers: e,
                            room: e,
                            rsvp: e,
                            rugby: e,
                            ruhr: e,
                            run: [
                                1,
                                {
                                    appwrite: s,
                                    canva: t,
                                    development: t,
                                    ravendb: t,
                                    liara: [2, { iran: t }],
                                    lovable: t,
                                    needle: t,
                                    build: s,
                                    code: s,
                                    database: s,
                                    migration: s,
                                    onporter: t,
                                    repl: t,
                                    stackit: t,
                                    val: J,
                                    vercel: t,
                                    wix: t,
                                },
                            ],
                            rwe: e,
                            ryukyu: e,
                            saarland: e,
                            safe: e,
                            safety: e,
                            sakura: e,
                            sale: e,
                            salon: e,
                            samsclub: e,
                            samsung: e,
                            sandvik: e,
                            sandvikcoromant: e,
                            sanofi: e,
                            sap: e,
                            sarl: e,
                            sas: e,
                            save: e,
                            saxo: e,
                            sbi: e,
                            sbs: e,
                            scb: e,
                            schaeffler: e,
                            schmidt: e,
                            scholarships: e,
                            school: e,
                            schule: e,
                            schwarz: e,
                            science: e,
                            scot: [1, { gov: [2, { service: t }] }],
                            search: e,
                            seat: e,
                            secure: e,
                            security: e,
                            seek: e,
                            select: e,
                            sener: e,
                            services: [1, { loginline: t }],
                            seven: e,
                            sew: e,
                            sex: e,
                            sexy: e,
                            sfr: e,
                            shangrila: e,
                            sharp: e,
                            shell: e,
                            shia: e,
                            shiksha: e,
                            shoes: e,
                            shop: [1, { base: t, hoplix: t, barsy: t, barsyonline: t, shopware: t }],
                            shopping: e,
                            shouji: e,
                            show: e,
                            silk: e,
                            sina: e,
                            singles: e,
                            site: [
                                1,
                                {
                                    square: t,
                                    canva: x,
                                    cloudera: s,
                                    convex: t,
                                    cyon: t,
                                    caffeine: t,
                                    fastvps: t,
                                    figma: t,
                                    'figma-gov': t,
                                    preview: t,
                                    heyflow: t,
                                    jele: t,
                                    jouwweb: t,
                                    loginline: t,
                                    barsy: t,
                                    co: t,
                                    notion: t,
                                    omniwe: t,
                                    opensocial: t,
                                    madethis: t,
                                    support: t,
                                    platformsh: s,
                                    tst: s,
                                    byen: t,
                                    srht: t,
                                    novecore: t,
                                    cpanel: t,
                                    wpsquared: t,
                                    sourcecraft: t,
                                },
                            ],
                            ski: e,
                            skin: e,
                            sky: e,
                            skype: e,
                            sling: e,
                            smart: e,
                            smile: e,
                            sncf: e,
                            soccer: e,
                            social: e,
                            softbank: e,
                            software: e,
                            sohu: e,
                            solar: e,
                            solutions: e,
                            song: e,
                            sony: e,
                            soy: e,
                            spa: e,
                            space: [1, { myfast: t, heiyu: t, hf: [2, { static: t }], 'app-ionos': t, project: t, uber: t, xs4all: t }],
                            sport: e,
                            spot: e,
                            srl: e,
                            stada: e,
                            staples: e,
                            star: e,
                            statebank: e,
                            statefarm: e,
                            stc: e,
                            stcgroup: e,
                            stockholm: e,
                            storage: e,
                            store: [1, { barsy: t, sellfy: t, shopware: t, storebase: t }],
                            stream: e,
                            studio: e,
                            study: e,
                            style: e,
                            sucks: e,
                            supplies: e,
                            supply: e,
                            support: [1, { barsy: t }],
                            surf: e,
                            surgery: e,
                            suzuki: e,
                            swatch: e,
                            swiss: e,
                            sydney: e,
                            systems: [1, { knightpoint: t }],
                            tab: e,
                            taipei: e,
                            talk: e,
                            taobao: e,
                            target: e,
                            tatamotors: e,
                            tatar: e,
                            tattoo: e,
                            tax: e,
                            taxi: e,
                            tci: e,
                            tdk: e,
                            team: [1, { discourse: t, jelastic: t }],
                            tech: [1, { cleverapps: t }],
                            technology: y,
                            temasek: e,
                            tennis: e,
                            teva: e,
                            thd: e,
                            theater: e,
                            theatre: e,
                            tiaa: e,
                            tickets: e,
                            tienda: e,
                            tips: e,
                            tires: e,
                            tirol: e,
                            tjmaxx: e,
                            tjx: e,
                            tkmaxx: e,
                            tmall: e,
                            today: [1, { prequalifyme: t }],
                            tokyo: e,
                            tools: [1, { addr: B, myaddr: t }],
                            top: [1, { ntdll: t, wadl: s }],
                            toray: e,
                            toshiba: e,
                            total: e,
                            tours: e,
                            town: e,
                            toyota: e,
                            toys: e,
                            trade: e,
                            trading: e,
                            training: e,
                            travel: e,
                            travelers: e,
                            travelersinsurance: e,
                            trust: e,
                            trv: e,
                            tube: e,
                            tui: e,
                            tunes: e,
                            tushu: e,
                            tvs: e,
                            ubank: e,
                            ubs: e,
                            unicom: e,
                            university: e,
                            uno: e,
                            uol: e,
                            ups: e,
                            vacations: e,
                            vana: e,
                            vanguard: e,
                            vegas: e,
                            ventures: e,
                            verisign: e,
                            versicherung: e,
                            vet: e,
                            viajes: e,
                            video: e,
                            vig: e,
                            viking: e,
                            villas: e,
                            vin: e,
                            vip: [1, { hidns: t }],
                            virgin: e,
                            visa: e,
                            vision: e,
                            viva: e,
                            vivo: e,
                            vlaanderen: e,
                            vodka: e,
                            volvo: e,
                            vote: e,
                            voting: e,
                            voto: e,
                            voyage: e,
                            wales: e,
                            walmart: e,
                            walter: e,
                            wang: e,
                            wanggou: e,
                            watch: e,
                            watches: e,
                            weather: e,
                            weatherchannel: e,
                            webcam: e,
                            weber: e,
                            website: es,
                            wed: e,
                            wedding: e,
                            weibo: e,
                            weir: e,
                            whoswho: e,
                            wien: e,
                            wiki: es,
                            williamhill: e,
                            win: e,
                            windows: e,
                            wine: e,
                            winners: e,
                            wme: e,
                            wolterskluwer: e,
                            woodside: e,
                            work: e,
                            works: e,
                            world: e,
                            wow: e,
                            wtc: e,
                            wtf: e,
                            xbox: e,
                            xerox: e,
                            xihuan: e,
                            xin: e,
                            'xn--11b4c3d': e,
                            कॉम: e,
                            'xn--1ck2e1b': e,
                            セール: e,
                            'xn--1qqw23a': e,
                            佛山: e,
                            'xn--30rr7y': e,
                            慈善: e,
                            'xn--3bst00m': e,
                            集团: e,
                            'xn--3ds443g': e,
                            在线: e,
                            'xn--3pxu8k': e,
                            点看: e,
                            'xn--42c2d9a': e,
                            คอม: e,
                            'xn--45q11c': e,
                            八卦: e,
                            'xn--4gbrim': e,
                            موقع: e,
                            'xn--55qw42g': e,
                            公益: e,
                            'xn--55qx5d': e,
                            公司: e,
                            'xn--5su34j936bgsg': e,
                            香格里拉: e,
                            'xn--5tzm5g': e,
                            网站: e,
                            'xn--6frz82g': e,
                            移动: e,
                            'xn--6qq986b3xl': e,
                            我爱你: e,
                            'xn--80adxhks': e,
                            москва: e,
                            'xn--80aqecdr1a': e,
                            католик: e,
                            'xn--80asehdb': e,
                            онлайн: e,
                            'xn--80aswg': e,
                            сайт: e,
                            'xn--8y0a063a': e,
                            联通: e,
                            'xn--9dbq2a': e,
                            קום: e,
                            'xn--9et52u': e,
                            时尚: e,
                            'xn--9krt00a': e,
                            微博: e,
                            'xn--b4w605ferd': e,
                            淡马锡: e,
                            'xn--bck1b9a5dre4c': e,
                            ファッション: e,
                            'xn--c1avg': e,
                            орг: e,
                            'xn--c2br7g': e,
                            नेट: e,
                            'xn--cck2b3b': e,
                            ストア: e,
                            'xn--cckwcxetd': e,
                            アマゾン: e,
                            'xn--cg4bki': e,
                            삼성: e,
                            'xn--czr694b': e,
                            商标: e,
                            'xn--czrs0t': e,
                            商店: e,
                            'xn--czru2d': e,
                            商城: e,
                            'xn--d1acj3b': e,
                            дети: e,
                            'xn--eckvdtc9d': e,
                            ポイント: e,
                            'xn--efvy88h': e,
                            新闻: e,
                            'xn--fct429k': e,
                            家電: e,
                            'xn--fhbei': e,
                            كوم: e,
                            'xn--fiq228c5hs': e,
                            中文网: e,
                            'xn--fiq64b': e,
                            中信: e,
                            'xn--fjq720a': e,
                            娱乐: e,
                            'xn--flw351e': e,
                            谷歌: e,
                            'xn--fzys8d69uvgm': e,
                            電訊盈科: e,
                            'xn--g2xx48c': e,
                            购物: e,
                            'xn--gckr3f0f': e,
                            クラウド: e,
                            'xn--gk3at1e': e,
                            通販: e,
                            'xn--hxt814e': e,
                            网店: e,
                            'xn--i1b6b1a6a2e': e,
                            संगठन: e,
                            'xn--imr513n': e,
                            餐厅: e,
                            'xn--io0a7i': e,
                            网络: e,
                            'xn--j1aef': e,
                            ком: e,
                            'xn--jlq480n2rg': e,
                            亚马逊: e,
                            'xn--jvr189m': e,
                            食品: e,
                            'xn--kcrx77d1x4a': e,
                            飞利浦: e,
                            'xn--kput3i': e,
                            手机: e,
                            'xn--mgba3a3ejt': e,
                            ارامكو: e,
                            'xn--mgba7c0bbn0a': e,
                            العليان: e,
                            'xn--mgbab2bd': e,
                            بازار: e,
                            'xn--mgbca7dzdo': e,
                            ابوظبي: e,
                            'xn--mgbi4ecexp': e,
                            كاثوليك: e,
                            'xn--mgbt3dhd': e,
                            همراه: e,
                            'xn--mk1bu44c': e,
                            닷컴: e,
                            'xn--mxtq1m': e,
                            政府: e,
                            'xn--ngbc5azd': e,
                            شبكة: e,
                            'xn--ngbe9e0a': e,
                            بيتك: e,
                            'xn--ngbrx': e,
                            عرب: e,
                            'xn--nqv7f': e,
                            机构: e,
                            'xn--nqv7fs00ema': e,
                            组织机构: e,
                            'xn--nyqy26a': e,
                            健康: e,
                            'xn--otu796d': e,
                            招聘: e,
                            'xn--p1acf': [
                                1,
                                {
                                    'xn--90amc': t,
                                    'xn--j1aef': t,
                                    'xn--j1ael8b': t,
                                    'xn--h1ahn': t,
                                    'xn--j1adp': t,
                                    'xn--c1avg': t,
                                    'xn--80aaa0cvac': t,
                                    'xn--h1aliz': t,
                                    'xn--90a1af': t,
                                    'xn--41a': t,
                                },
                            ],
                            рус: [1, { биз: t, ком: t, крым: t, мир: t, мск: t, орг: t, самара: t, сочи: t, спб: t, я: t }],
                            'xn--pssy2u': e,
                            大拿: e,
                            'xn--q9jyb4c': e,
                            みんな: e,
                            'xn--qcka1pmc': e,
                            グーグル: e,
                            'xn--rhqv96g': e,
                            世界: e,
                            'xn--rovu88b': e,
                            書籍: e,
                            'xn--ses554g': e,
                            网址: e,
                            'xn--t60b56a': e,
                            닷넷: e,
                            'xn--tckwe': e,
                            コム: e,
                            'xn--tiq49xqyj': e,
                            天主教: e,
                            'xn--unup4y': e,
                            游戏: e,
                            'xn--vermgensberater-ctb': e,
                            vermögensberater: e,
                            'xn--vermgensberatung-pwb': e,
                            vermögensberatung: e,
                            'xn--vhquv': e,
                            企业: e,
                            'xn--vuq861b': e,
                            信息: e,
                            'xn--w4r85el8fhu5dnra': e,
                            嘉里大酒店: e,
                            'xn--w4rs40l': e,
                            嘉里: e,
                            'xn--xhq521b': e,
                            广东: e,
                            'xn--zfr164b': e,
                            政务: e,
                            xyz: [1, { caffeine: t, botdash: t, telebit: s }],
                            yachts: e,
                            yahoo: e,
                            yamaxun: e,
                            yandex: e,
                            yodobashi: e,
                            yoga: e,
                            yokohama: e,
                            you: e,
                            youtube: e,
                            yun: e,
                            zappos: e,
                            zara: e,
                            zero: e,
                            zip: e,
                            zone: [1, { triton: s, stackit: t, lima: t }],
                            zuerich: e,
                        },
                    ];
                })();
            function h(e, t, a, o) {
                let s = null,
                    r = t;
                for (; void 0 !== r && ((r[0] & o) != 0 && (s = { index: a + 1, isIcann: 1 === r[0], isPrivate: 2 === r[0] }), -1 !== a); ) {
                    let t = r[1];
                    (r = Object.prototype.hasOwnProperty.call(t, e[a]) ? t[e[a]] : t['*']), (a -= 1);
                }
                return s;
            }
            function m(e, t, a) {
                var o;
                if (
                    (function (e, t, a) {
                        if (!t.allowPrivateDomains && e.length > 3) {
                            let t = e.length - 1,
                                o = e.charCodeAt(t),
                                s = e.charCodeAt(t - 1),
                                r = e.charCodeAt(t - 2),
                                i = e.charCodeAt(t - 3);
                            if (109 === o && 111 === s && 99 === r && 46 === i) return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = 'com'), !0;
                            if (103 === o && 114 === s && 111 === r && 46 === i) return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = 'org'), !0;
                            if (117 === o && 100 === s && 101 === r && 46 === i) return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = 'edu'), !0;
                            else if (118 === o && 111 === s && 103 === r && 46 === i) return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = 'gov'), !0;
                            else if (116 === o && 101 === s && 110 === r && 46 === i) return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = 'net'), !0;
                            else if (101 === o && 100 === s && 46 === r) return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = 'de'), !0;
                        }
                        return !1;
                    })(e, t, a)
                )
                    return;
                let s = e.split('.'),
                    r = (2 * !!t.allowPrivateDomains) | !!t.allowIcannDomains,
                    i = h(s, c, s.length - 1, r);
                if (null !== i) {
                    (a.isIcann = i.isIcann), (a.isPrivate = i.isPrivate), (a.publicSuffix = s.slice(i.index + 1).join('.'));
                    return;
                }
                let n = h(s, d, s.length - 1, r);
                if (null !== n) {
                    (a.isIcann = n.isIcann), (a.isPrivate = n.isPrivate), (a.publicSuffix = s.slice(n.index).join('.'));
                    return;
                }
                (a.isIcann = !1), (a.isPrivate = !1), (a.publicSuffix = null != (o = s[s.length - 1]) ? o : null);
            }
            let p = { domain: null, domainWithoutSuffix: null, hostname: null, isIcann: null, isIp: null, isPrivate: null, publicSuffix: null, subdomain: null };
            function g(e, t) {
                return !!(t === e || (0 === e.indexOf(t) && ('/' === t[t.length - 1] || (e.startsWith(t) && '/' === e[t.length])))) || !1;
            }
            var f = ['local', 'example', 'invalid', 'localhost', 'test'],
                k = ['localhost', 'invalid'],
                b = { allowSpecialUseDomain: !1, ignoreError: !1 };
            function y(e, t = {}) {
                t = { ...b, ...t };
                let a = e.split('.'),
                    o = a[a.length - 1],
                    s = !!t.allowSpecialUseDomain,
                    i = !!t.ignoreError;
                if (s && void 0 !== o && f.includes(o)) {
                    if (a.length > 1) {
                        let e = a[a.length - 2];
                        return `${e}.${o}`;
                    } else if (k.includes(o)) return o;
                }
                if (!i && void 0 !== o && f.includes(o))
                    throw Error(
                        `Cookie has domain set to the public suffix "${o}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain: true, rejectPublicSuffixes: false}.`,
                    );
                let c = (function (e, t = {}) {
                    return (
                        (p.domain = null),
                        (p.domainWithoutSuffix = null),
                        (p.hostname = null),
                        (p.isIcann = null),
                        (p.isIp = null),
                        (p.isPrivate = null),
                        (p.publicSuffix = null),
                        (p.subdomain = null),
                        (function (e, t, a, o, s) {
                            var i, c, d, h, m;
                            let p = void 0 === o ? u : l(o);
                            if ('string' != typeof e) return s;
                            if (
                                (p.extractHostname ? (p.mixedInputs ? (s.hostname = r(e, n(e))) : (s.hostname = r(e, !1))) : (s.hostname = e),
                                p.detectIp && null !== s.hostname) &&
                                ((s.isIp =
                                    (function (e) {
                                        if (e.length < 3) return !1;
                                        let t = +!!e.startsWith('['),
                                            a = e.length;
                                        if ((']' === e[a - 1] && (a -= 1), a - t > 39)) return !1;
                                        let o = !1;
                                        for (; t < a; t += 1) {
                                            let a = e.charCodeAt(t);
                                            if (58 === a) o = !0;
                                            else if (!((a >= 48 && a <= 57) || (a >= 97 && a <= 102) || (a >= 65 && a <= 90))) return !1;
                                        }
                                        return o;
                                    })((i = s.hostname)) ||
                                    (function (e) {
                                        if (e.length < 7 || e.length > 15) return !1;
                                        let t = 0;
                                        for (let a = 0; a < e.length; a += 1) {
                                            let o = e.charCodeAt(a);
                                            if (46 === o) t += 1;
                                            else if (o < 48 || o > 57) return !1;
                                        }
                                        return 3 === t && 46 !== e.charCodeAt(0) && 46 !== e.charCodeAt(e.length - 1);
                                    })(i)),
                                s.isIp)
                            )
                                return s;
                            return p.validateHostname && p.extractHostname && null !== s.hostname && !n(s.hostname)
                                ? ((s.hostname = null), s)
                                : null === s.hostname ||
                                    (a(s.hostname, p, s), null === s.publicSuffix) ||
                                    ((s.domain = (function (e, t, a) {
                                        if (null !== a.validHosts) {
                                            for (let e of a.validHosts) if (t.endsWith(e) && (t.length === e.length || '.' === t[t.length - e.length - 1])) return e;
                                        }
                                        let o = 0;
                                        if (t.startsWith('.')) for (; o < t.length && '.' === t[o]; ) o += 1;
                                        if (e.length === t.length - o) return null;
                                        let s = t.length - e.length - 2,
                                            r = t.lastIndexOf('.', s);
                                        return -1 === r ? t : t.slice(r + 1);
                                    })(s.publicSuffix, s.hostname, p)),
                                    3 === t || null === s.domain) ||
                                    ((c = s.hostname), (s.subdomain = (d = s.domain).length === c.length ? '' : c.slice(0, -d.length - 1)), 4 === t)
                                  ? s
                                  : ((h = s.domain), (m = s.publicSuffix), (s.domainWithoutSuffix = h.slice(0, -m.length - 1)), s);
                        })(e, 3, m, t, p).domain
                    );
                })(e, { allowIcannDomains: !0, allowPrivateDomains: !0 });
                if (c) return c;
            }
            var v = class {
                    constructor() {
                        this.synchronous = !1;
                    }
                    findCookie(e, t, a, o) {
                        throw Error('findCookie is not implemented');
                    }
                    findCookies(e, t, a = !1, o) {
                        throw Error('findCookies is not implemented');
                    }
                    putCookie(e, t) {
                        throw Error('putCookie is not implemented');
                    }
                    updateCookie(e, t, a) {
                        throw Error('updateCookie is not implemented');
                    }
                    removeCookie(e, t, a, o) {
                        throw Error('removeCookie is not implemented');
                    }
                    removeCookies(e, t, a) {
                        throw Error('removeCookies is not implemented');
                    }
                    removeAllCookies(e) {
                        throw Error('removeAllCookies is not implemented');
                    }
                    getAllCookies(e) {
                        throw Error('getAllCookies is not implemented (therefore jar cannot be serialized)');
                    }
                },
                w = (e) => Object.prototype.toString.call(e),
                x = (e, t = new WeakSet()) =>
                    'object' != typeof e || null === e
                        ? String(e)
                        : 'function' == typeof e.toString
                          ? Array.isArray(e)
                              ? ((e, t) => ('function' != typeof e.join ? w(e) : (t.add(e), e.map((e) => (null == e || t.has(e) ? '' : x(e, t))).join())))(e, t)
                              : String(e)
                          : w(e),
                j = (e) => x(e);
            function S(e) {
                let t,
                    a,
                    o,
                    s = new Promise((e, t) => {
                        (a = e), (o = t);
                    });
                return {
                    promise: s,
                    callback: (t =
                        'function' == typeof e
                            ? (t, a) => {
                                  try {
                                      t ? e(t) : e(null, a);
                                  } catch (e) {
                                      o(e instanceof Error ? e : Error());
                                  }
                              }
                            : (e, t) => {
                                  try {
                                      e ? o(e) : a(t);
                                  } catch (e) {
                                      o(e instanceof Error ? e : Error());
                                  }
                              }),
                    resolve: (e) => (t(null, e), s),
                    reject: (e) => (t(e), s),
                };
            }
            var E = class extends v {
                constructor() {
                    super(), (this.synchronous = !0), (this.idx = Object.create(null));
                }
                findCookie(e, t, a, o) {
                    let s = S(o);
                    if (null == e || null == t || null == a) return s.resolve(void 0);
                    let r = this.idx[e]?.[t]?.[a];
                    return s.resolve(r);
                }
                findCookies(e, t, a = !1, o) {
                    let s;
                    'function' == typeof a && ((o = a), (a = !0));
                    let r = [],
                        i = S(o);
                    if (!e) return i.resolve([]);
                    s = t
                        ? function (e) {
                              for (let a in e)
                                  if (g(t, a)) {
                                      let t = e[a];
                                      for (let e in t) {
                                          let a = t[e];
                                          a && r.push(a);
                                      }
                                  }
                          }
                        : function (e) {
                              for (let t in e) {
                                  let a = e[t];
                                  for (let e in a) {
                                      let t = a[e];
                                      t && r.push(t);
                                  }
                              }
                          };
                    let n = (function (e, t) {
                            let a = y(e, { allowSpecialUseDomain: t });
                            if (!a) return;
                            if (a == e) return [e];
                            '.' == e.slice(-1) && (e = e.slice(0, -1));
                            let o = e
                                    .slice(0, -(a.length + 1))
                                    .split('.')
                                    .reverse(),
                                s = a,
                                r = [s];
                            for (; o.length; ) {
                                let e = o.shift();
                                (s = `${e}.${s}`), r.push(s);
                            }
                            return r;
                        })(e, a) || [e],
                        l = this.idx;
                    return (
                        n.forEach((e) => {
                            let t = l[e];
                            t && s(t);
                        }),
                        i.resolve(r)
                    );
                }
                putCookie(e, t) {
                    let a = S(t),
                        { domain: o, path: s, key: r } = e;
                    if (null == o || null == s || null == r) return a.resolve(void 0);
                    let i = this.idx[o] ?? Object.create(null);
                    this.idx[o] = i;
                    let n = i[s] ?? Object.create(null);
                    return (i[s] = n), (n[r] = e), a.resolve(void 0);
                }
                updateCookie(e, t, a) {
                    if (!a) return this.putCookie(t);
                    this.putCookie(t, a);
                }
                removeCookie(e, t, a, o) {
                    let s = S(o);
                    return delete this.idx[e]?.[t]?.[a], s.resolve(void 0);
                }
                removeCookies(e, t, a) {
                    let o = S(a),
                        s = this.idx[e];
                    return s && (t ? delete s[t] : delete this.idx[e]), o.resolve(void 0);
                }
                removeAllCookies(e) {
                    let t = S(e);
                    return (this.idx = Object.create(null)), t.resolve(void 0);
                }
                getAllCookies(e) {
                    let t = S(e),
                        a = [],
                        o = this.idx;
                    return (
                        Object.keys(o).forEach((e) => {
                            let t = o[e] ?? {};
                            Object.keys(t).forEach((e) => {
                                let o = t[e] ?? {};
                                Object.keys(o).forEach((e) => {
                                    let t = o[e];
                                    null != t && a.push(t);
                                });
                            });
                        }),
                        a.sort((e, t) => (e.creationIndex || 0) - (t.creationIndex || 0)),
                        t.resolve(a)
                    );
                }
            };
            function z(e) {
                return C(e) && '' !== e;
            }
            function q(e) {
                return '' === e || (e instanceof String && '' === e.toString());
            }
            function C(e) {
                return 'string' == typeof e || e instanceof String;
            }
            function O(e) {
                return '[object Object]' === w(e);
            }
            function T(e, t, a) {
                if (e) return;
                let o = 'function' == typeof t ? t : void 0,
                    s = 'function' == typeof t ? a : t;
                O(s) || (s = '[object Object]');
                let r = new P(j(s));
                if (o) o(r);
                else throw r;
            }
            var P = class extends Error {},
                L = { SILENT: 'silent', STRICT: 'strict', DISABLED: 'unsafe-disabled' };
            Object.freeze(L);
            var A = `
\\[?(?:
(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|
(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|
(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|
(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|
(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:))
)(?:%[0-9a-zA-Z]{1,})?\\]?
`
                    .replace(/\s*\/\/.*$/gm, '')
                    .replace(/\n/g, '')
                    .trim(),
                R = RegExp(`^${A}$`),
                I = RegExp('^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$');
            function D(e) {
                return new URL(`http://${e}`).hostname;
            }
            function N(e) {
                if (null == e) return;
                let t = e.trim().replace(/^\./, '');
                return R.test(t)
                    ? (t.startsWith('[') || (t = '[' + t), t.endsWith(']') || (t += ']'), D(t).slice(1, -1))
                    : /[^\u0001-\u007f]/.test(t)
                      ? D(t)
                      : t.toLowerCase();
            }
            var $ = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/,
                M = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
            function W(e, t, a, o) {
                let s = 0;
                for (; s < e.length; ) {
                    let t = e.charCodeAt(s);
                    if (t <= 47 || t >= 58) break;
                    s++;
                }
                if (!(s < t) && !(s > a) && (o || s == e.length)) return parseInt(e.slice(0, s), 10);
            }
            function U(e) {
                let t, a, o, s, r, i;
                if (!e) return;
                let n = e.split($);
                for (let e = 0; e < n.length; e++) {
                    let l = (n[e] ?? '').trim();
                    if (l.length) {
                        if (void 0 === o) {
                            let e = (function (e) {
                                let t = e.split(':'),
                                    a = [0, 0, 0];
                                if (3 === t.length) {
                                    for (let e = 0; e < 3; e++) {
                                        let o = 2 == e,
                                            s = t[e];
                                        if (void 0 === s) return;
                                        let r = W(s, 1, 2, o);
                                        if (void 0 === r) return;
                                        a[e] = r;
                                    }
                                    return a;
                                }
                            })(l);
                            if (e) {
                                (t = e[0]), (a = e[1]), (o = e[2]);
                                continue;
                            }
                        }
                        if (void 0 === s) {
                            let e = W(l, 1, 2, !0);
                            if (void 0 !== e) {
                                s = e;
                                continue;
                            }
                        }
                        if (void 0 === r) {
                            let e = (function (e) {
                                switch ((e = String(e).slice(0, 3).toLowerCase())) {
                                    case 'jan':
                                        return M.jan;
                                    case 'feb':
                                        return M.feb;
                                    case 'mar':
                                        return M.mar;
                                    case 'apr':
                                        return M.apr;
                                    case 'may':
                                        return M.may;
                                    case 'jun':
                                        return M.jun;
                                    case 'jul':
                                        return M.jul;
                                    case 'aug':
                                        return M.aug;
                                    case 'sep':
                                        return M.sep;
                                    case 'oct':
                                        return M.oct;
                                    case 'nov':
                                        return M.nov;
                                    case 'dec':
                                        return M.dec;
                                    default:
                                        return;
                                }
                            })(l);
                            if (void 0 !== e) {
                                r = e;
                                continue;
                            }
                        }
                        if (void 0 === i) {
                            let e = W(l, 2, 4, !0);
                            void 0 !== e && ((i = e) >= 70 && i <= 99 ? (i += 1900) : i >= 0 && i <= 69 && (i += 2e3));
                        }
                    }
                }
                if (
                    void 0 !== s &&
                    void 0 !== r &&
                    void 0 !== i &&
                    void 0 !== t &&
                    void 0 !== a &&
                    void 0 !== o &&
                    !(s < 1) &&
                    !(s > 31) &&
                    !(i < 1601) &&
                    !(t > 23) &&
                    !(a > 59) &&
                    !(o > 59)
                )
                    return new Date(Date.UTC(i, r, s, t, a, o));
            }
            var H = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/,
                _ = /[\x20-\x3A\x3C-\x7E]+/,
                G = /[\x00-\x1F]/,
                F = ['\n', '\r', '\0'];
            function B(e) {
                let t;
                if (!e || q(e)) return;
                if ('string' == typeof e)
                    try {
                        t = JSON.parse(e);
                    } catch {
                        return;
                    }
                else t = e;
                let a = new X();
                return (
                    X.serializableProperties.forEach((e) => {
                        if (t && 'object' == typeof t && e in t) {
                            let o = t[e];
                            if (void 0 !== o && (!(e in J) || o !== J[e]))
                                switch (e) {
                                    case 'key':
                                    case 'value':
                                    case 'sameSite':
                                        'string' == typeof o && (a[e] = o);
                                        break;
                                    case 'expires':
                                    case 'creation':
                                    case 'lastAccessed':
                                        'number' == typeof o || 'string' == typeof o || o instanceof Date
                                            ? (a[e] = 'Infinity' == t[e] ? 'Infinity' : new Date(o))
                                            : null === o && (a[e] = null);
                                        break;
                                    case 'maxAge':
                                        ('number' == typeof o || 'Infinity' === o || '-Infinity' === o) && (a[e] = o);
                                        break;
                                    case 'domain':
                                    case 'path':
                                        ('string' == typeof o || null === o) && (a[e] = o);
                                        break;
                                    case 'secure':
                                    case 'httpOnly':
                                        'boolean' == typeof o && (a[e] = o);
                                        break;
                                    case 'extensions':
                                        Array.isArray(o) && o.every((e) => 'string' == typeof e) && (a[e] = o);
                                        break;
                                    case 'hostOnly':
                                    case 'pathIsDefault':
                                        ('boolean' == typeof o || null === o) && (a[e] = o);
                                }
                        }
                    }),
                    a
                );
            }
            var J = {
                    key: '',
                    value: '',
                    expires: 'Infinity',
                    maxAge: null,
                    domain: null,
                    path: null,
                    secure: !1,
                    httpOnly: !1,
                    extensions: null,
                    hostOnly: null,
                    pathIsDefault: null,
                    creation: null,
                    lastAccessed: null,
                    sameSite: void 0,
                },
                V = class e {
                    constructor(t = {}) {
                        (this.key = t.key ?? J.key),
                            (this.value = t.value ?? J.value),
                            (this.expires = t.expires ?? J.expires),
                            (this.maxAge = t.maxAge ?? J.maxAge),
                            (this.domain = t.domain ?? J.domain),
                            (this.path = t.path ?? J.path),
                            (this.secure = t.secure ?? J.secure),
                            (this.httpOnly = t.httpOnly ?? J.httpOnly),
                            (this.extensions = t.extensions ?? J.extensions),
                            (this.creation = t.creation ?? J.creation),
                            (this.hostOnly = t.hostOnly ?? J.hostOnly),
                            (this.pathIsDefault = t.pathIsDefault ?? J.pathIsDefault),
                            (this.lastAccessed = t.lastAccessed ?? J.lastAccessed),
                            (this.sameSite = t.sameSite ?? J.sameSite),
                            (this.creation = t.creation ?? new Date()),
                            Object.defineProperty(this, 'creationIndex', { configurable: !1, enumerable: !1, writable: !0, value: ++e.cookiesCreated }),
                            (this.creationIndex = e.cookiesCreated);
                    }
                    [Symbol.for('nodejs.util.inspect.custom')]() {
                        let e = Date.now(),
                            t = null != this.hostOnly ? this.hostOnly.toString() : '?',
                            a = this.creation && 'Infinity' !== this.creation ? `${String(e - this.creation.getTime())}ms` : '?',
                            o = this.lastAccessed && 'Infinity' !== this.lastAccessed ? `${String(e - this.lastAccessed.getTime())}ms` : '?';
                        return `Cookie="${this.toString()}; hostOnly=${t}; aAge=${o}; cAge=${a}"`;
                    }
                    toJSON() {
                        let t = {};
                        for (let a of e.serializableProperties) {
                            let e = this[a];
                            if (e !== J[a])
                                switch (a) {
                                    case 'key':
                                    case 'value':
                                    case 'sameSite':
                                        'string' == typeof e && (t[a] = e);
                                        break;
                                    case 'expires':
                                    case 'creation':
                                    case 'lastAccessed':
                                        'number' == typeof e || 'string' == typeof e || e instanceof Date
                                            ? (t[a] = 'Infinity' == e ? 'Infinity' : new Date(e).toISOString())
                                            : null === e && (t[a] = null);
                                        break;
                                    case 'maxAge':
                                        ('number' == typeof e || 'Infinity' === e || '-Infinity' === e) && (t[a] = e);
                                        break;
                                    case 'domain':
                                    case 'path':
                                        ('string' == typeof e || null === e) && (t[a] = e);
                                        break;
                                    case 'secure':
                                    case 'httpOnly':
                                        'boolean' == typeof e && (t[a] = e);
                                        break;
                                    case 'extensions':
                                        Array.isArray(e) && (t[a] = e);
                                        break;
                                    case 'hostOnly':
                                    case 'pathIsDefault':
                                        ('boolean' == typeof e || null === e) && (t[a] = e);
                                }
                        }
                        return t;
                    }
                    clone() {
                        return B(this.toJSON());
                    }
                    validate() {
                        if (
                            !this.value ||
                            !H.test(this.value) ||
                            ('Infinity' != this.expires && !(this.expires instanceof Date) && !U(this.expires)) ||
                            (null != this.maxAge && 'Infinity' !== this.maxAge && ('-Infinity' === this.maxAge || this.maxAge <= 0)) ||
                            (null != this.path && !_.test(this.path))
                        )
                            return !1;
                        let e = this.cdomain();
                        return !(e && (e.match(/\.$/) || null == y(e))) && !0;
                    }
                    setExpires(e) {
                        e instanceof Date ? (this.expires = e) : (this.expires = U(e) || 'Infinity');
                    }
                    setMaxAge(e) {
                        e === 1 / 0 ? (this.maxAge = 'Infinity') : e === -1 / 0 ? (this.maxAge = '-Infinity') : (this.maxAge = e);
                    }
                    cookieString() {
                        let e = this.value || '';
                        return this.key ? `${this.key}=${e}` : e;
                    }
                    toString() {
                        let t = this.cookieString();
                        return (
                            'Infinity' != this.expires && this.expires instanceof Date && (t += `; Expires=${this.expires.toUTCString()}`),
                            null != this.maxAge && this.maxAge != 1 / 0 && (t += `; Max-Age=${String(this.maxAge)}`),
                            this.domain && !this.hostOnly && (t += `; Domain=${this.domain}`),
                            this.path && (t += `; Path=${this.path}`),
                            this.secure && (t += '; Secure'),
                            this.httpOnly && (t += '; HttpOnly'),
                            this.sameSite &&
                                'none' !== this.sameSite &&
                                (this.sameSite.toLowerCase() === e.sameSiteCanonical.lax.toLowerCase()
                                    ? (t += `; SameSite=${e.sameSiteCanonical.lax}`)
                                    : this.sameSite.toLowerCase() === e.sameSiteCanonical.strict.toLowerCase()
                                      ? (t += `; SameSite=${e.sameSiteCanonical.strict}`)
                                      : (t += `; SameSite=${this.sameSite}`)),
                            this.extensions &&
                                this.extensions.forEach((e) => {
                                    t += `; ${e}`;
                                }),
                            t
                        );
                    }
                    TTL(e = Date.now()) {
                        if (null != this.maxAge && 'number' == typeof this.maxAge) return this.maxAge <= 0 ? 0 : 1e3 * this.maxAge;
                        let t = this.expires;
                        return 'Infinity' === t ? 1 / 0 : (t?.getTime() ?? e) - (e || Date.now());
                    }
                    expiryTime(e) {
                        if (null != this.maxAge) {
                            let t = e || this.lastAccessed || new Date(),
                                a = 'number' == typeof this.maxAge ? this.maxAge : -1 / 0;
                            return 'Infinity' === t ? 1 / 0 : t.getTime() + (a <= 0 ? -1 / 0 : 1e3 * a);
                        }
                        return 'Infinity' == this.expires ? 1 / 0 : this.expires ? this.expires.getTime() : void 0;
                    }
                    expiryDate(e) {
                        let t = this.expiryTime(e);
                        return t == 1 / 0 ? new Date(2147483647e3) : t == -1 / 0 ? new Date(0) : void 0 == t ? void 0 : new Date(t);
                    }
                    isPersistent() {
                        return null != this.maxAge || 'Infinity' != this.expires;
                    }
                    canonicalizedDomain() {
                        return N(this.domain);
                    }
                    cdomain() {
                        return N(this.domain);
                    }
                    static parse(e, t) {
                        return (function (e, t) {
                            if (q(e) || !C(e)) return;
                            let a = (e = e.trim()).indexOf(';'),
                                o = (function (e, t) {
                                    let a,
                                        o,
                                        s = (e = (function (e) {
                                            if (q(e)) return e;
                                            for (let t = 0; t < F.length; t++) {
                                                let a = F[t],
                                                    o = a ? e.indexOf(a) : -1;
                                                -1 !== o && (e = e.slice(0, o));
                                            }
                                            return e;
                                        })(e)).indexOf('=');
                                    if (t) 0 === s && (s = (e = e.substring(1)).indexOf('='));
                                    else if (s <= 0) return;
                                    if ((s <= 0 ? ((a = ''), (o = e.trim())) : ((a = e.slice(0, s).trim()), (o = e.slice(s + 1).trim())), G.test(a) || G.test(o))) return;
                                    let r = new X();
                                    return (r.key = a), (r.value = o), r;
                                })(-1 === a ? e : e.slice(0, a), t?.loose ?? !1);
                            if (!o) return;
                            if (-1 === a) return o;
                            let s = e.slice(a + 1).trim();
                            if (0 === s.length) return o;
                            let r = s.split(';');
                            for (; r.length; ) {
                                let e,
                                    t,
                                    a = (r.shift() ?? '').trim();
                                if (0 === a.length) continue;
                                let s = a.indexOf('=');
                                switch (
                                    (-1 === s ? ((e = a), (t = null)) : ((e = a.slice(0, s)), (t = a.slice(s + 1))), (e = e.trim().toLowerCase()), t && (t = t.trim()), e)
                                ) {
                                    case 'expires':
                                        if (t) {
                                            let e = U(t);
                                            e && (o.expires = e);
                                        }
                                        break;
                                    case 'max-age':
                                        if (t && /^-?[0-9]+$/.test(t)) {
                                            let e = parseInt(t, 10);
                                            o.setMaxAge(e);
                                        }
                                        break;
                                    case 'domain':
                                        if (t) {
                                            let e = t.trim().replace(/^\./, '');
                                            e && (o.domain = e.toLowerCase());
                                        }
                                        break;
                                    case 'path':
                                        o.path = t && '/' === t[0] ? t : null;
                                        break;
                                    case 'secure':
                                        o.secure = !0;
                                        break;
                                    case 'httponly':
                                        o.httpOnly = !0;
                                        break;
                                    case 'samesite':
                                        switch (t ? t.toLowerCase() : '') {
                                            case 'strict':
                                                o.sameSite = 'strict';
                                                break;
                                            case 'lax':
                                                o.sameSite = 'lax';
                                                break;
                                            case 'none':
                                                o.sameSite = 'none';
                                                break;
                                            default:
                                                o.sameSite = void 0;
                                        }
                                        break;
                                    default:
                                        (o.extensions = o.extensions || []), o.extensions.push(a);
                                }
                            }
                            return o;
                        })(e, t);
                    }
                    static fromJSON(e) {
                        return B(e);
                    }
                };
            (V.cookiesCreated = 0),
                (V.sameSiteLevel = { strict: 3, lax: 2, none: 1 }),
                (V.sameSiteCanonical = { strict: 'Strict', lax: 'Lax' }),
                (V.serializableProperties = [
                    'key',
                    'value',
                    'expires',
                    'maxAge',
                    'domain',
                    'path',
                    'secure',
                    'httpOnly',
                    'extensions',
                    'hostOnly',
                    'pathIsDefault',
                    'creation',
                    'lastAccessed',
                    'sameSite',
                ]);
            var X = V;
            function K(e, t) {
                let a,
                    o = e.path ? e.path.length : 0;
                return 0 != (a = (t.path ? t.path.length : 0) - o)
                    ? a
                    : 0 !=
                        (a =
                            (e.creation && e.creation instanceof Date ? e.creation.getTime() : 2147483647e3) -
                            (t.creation && t.creation instanceof Date ? t.creation.getTime() : 2147483647e3))
                      ? a
                      : (a = (e.creationIndex || 0) - (t.creationIndex || 0));
            }
            var Y =
                /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/;
            function Q(e, t, a) {
                let o, s;
                if (null == e || null == t || (!1 !== a ? ((o = N(e)), (s = N(t))) : ((o = e), (s = t)), null == o || null == s)) return;
                if (o == s) return !0;
                let r = o.lastIndexOf(s);
                return !(r <= 0) && o.length === s.length + r && '.' === o.substring(r - 1, r) && !Y.test(o);
            }
            var Z = { loose: !1, sameSiteContext: void 0, ignoreError: !1, http: !0 },
                ee = { http: !0, expire: !0, allPaths: !1, sameSiteContext: void 0, sort: void 0 },
                et = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
            function ea(e) {
                if (
                    e &&
                    'object' == typeof e &&
                    'hostname' in e &&
                    'string' == typeof e.hostname &&
                    'pathname' in e &&
                    'string' == typeof e.pathname &&
                    'protocol' in e &&
                    'string' == typeof e.protocol
                )
                    return { hostname: e.hostname, pathname: e.pathname, protocol: e.protocol };
                if ('string' == typeof e)
                    try {
                        return new URL(decodeURI(e));
                    } catch {
                        return new URL(e);
                    }
                throw new P('`url` argument is not a string or URL.');
            }
            function eo(e) {
                let t = String(e).toLowerCase();
                return 'none' === t || 'lax' === t || 'strict' === t ? t : void 0;
            }
            function es(e) {
                let t = e.toLowerCase();
                switch (t) {
                    case L.STRICT:
                    case L.SILENT:
                    case L.DISABLED:
                        return t;
                    default:
                        return L.SILENT;
                }
            }
            var er = class e {
                constructor(e, t) {
                    'boolean' == typeof t && (t = { rejectPublicSuffixes: t }),
                        (this.rejectPublicSuffixes = t?.rejectPublicSuffixes ?? !0),
                        (this.enableLooseMode = t?.looseMode ?? !1),
                        (this.allowSpecialUseDomain = t?.allowSpecialUseDomain ?? !0),
                        (this.allowSecureOnLocal = t?.allowSecureOnLocal ?? !0),
                        (this.prefixSecurity = es(t?.prefixSecurity ?? 'silent')),
                        (this.store = e ?? new E());
                }
                callSync(e) {
                    let t;
                    if (!this.store.synchronous) throw Error('CookieJar store is not synchronous; use async API instead.');
                    let a = null;
                    try {
                        e.call(this, (e, o) => {
                            (a = e), (t = o);
                        });
                    } catch (e) {
                        a = e;
                    }
                    if (a) throw a;
                    return t;
                }
                setCookie(e, t, a, o) {
                    let s;
                    'function' == typeof a && ((o = a), (a = void 0));
                    let r = S(o),
                        i = r.callback;
                    try {
                        if (('string' == typeof t && T(z(t), o, j(a)), (s = ea(t)), 'function' == typeof t)) return r.reject(Error('No URL was specified'));
                        if (('function' == typeof a && (a = Z), T('function' == typeof i, i), !z(e) && !O(e) && e instanceof String && 0 == e.length))
                            return r.resolve(void 0);
                    } catch (e) {
                        return r.reject(e);
                    }
                    let n = N(s.hostname) ?? null,
                        l = a?.loose || this.enableLooseMode,
                        u = null;
                    if (a?.sameSiteContext && !(u = eo(a.sameSiteContext))) return r.reject(Error(et));
                    if ('string' == typeof e || e instanceof String) {
                        let t = X.parse(e.toString(), { loose: l });
                        if (!t) {
                            let e = Error('Cookie failed to parse');
                            return a?.ignoreError ? r.resolve(void 0) : r.reject(e);
                        }
                        e = t;
                    } else if (!(e instanceof X)) {
                        let e = Error('First argument to setCookie must be a Cookie object or string');
                        return a?.ignoreError ? r.resolve(void 0) : r.reject(e);
                    }
                    let c = a?.now || new Date();
                    if (this.rejectPublicSuffixes && e.domain)
                        try {
                            let t = e.cdomain(),
                                o = 'string' == typeof t ? y(t, { allowSpecialUseDomain: this.allowSpecialUseDomain, ignoreError: a?.ignoreError }) : null;
                            if (null == o && !R.test(e.domain)) {
                                let e = Error('Cookie has domain set to a public suffix');
                                return a?.ignoreError ? r.resolve(void 0) : r.reject(e);
                            }
                        } catch (e) {
                            return a?.ignoreError ? r.resolve(void 0) : r.reject(e);
                        }
                    if (e.domain) {
                        if (!Q(n ?? void 0, e.cdomain() ?? void 0, !1)) {
                            let t = Error(`Cookie not in this host's domain. Cookie:${e.cdomain() ?? 'null'} Request:${n ?? 'null'}`);
                            return a?.ignoreError ? r.resolve(void 0) : r.reject(t);
                        }
                        null == e.hostOnly && (e.hostOnly = !1);
                    } else (e.hostOnly = !0), (e.domain = n);
                    if (
                        ((e.path && '/' === e.path[0]) ||
                            ((e.path = (function (e) {
                                if (!e || '/' !== e.slice(0, 1)) return '/';
                                if ('/' === e) return e;
                                let t = e.lastIndexOf('/');
                                return 0 === t ? '/' : e.slice(0, t);
                            })(s.pathname)),
                            (e.pathIsDefault = !0)),
                        a?.http === !1 && e.httpOnly)
                    ) {
                        let e = Error("Cookie is HttpOnly and this isn't an HTTP API");
                        return a.ignoreError ? r.resolve(void 0) : r.reject(e);
                    }
                    if ('none' !== e.sameSite && void 0 !== e.sameSite && u && 'none' === u) {
                        let e = Error('Cookie is SameSite but this is a cross-origin request');
                        return a?.ignoreError ? r.resolve(void 0) : r.reject(e);
                    }
                    let d = this.prefixSecurity === L.SILENT;
                    if (this.prefixSecurity !== L.DISABLED) {
                        var h, m;
                        let t,
                            o = !1;
                        if (
                            (!('string' == typeof (h = e).key && h.key.startsWith('__Secure-')) || h.secure
                                ? !('string' == typeof (m = e).key && m.key.startsWith('__Host-')) ||
                                  (m.secure && m.hostOnly && null != m.path && '/' === m.path) ||
                                  ((o = !0), (t = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'"))
                                : ((o = !0), (t = 'Cookie has __Secure prefix but Secure attribute is not set')),
                            o)
                        )
                            return a?.ignoreError || d ? r.resolve(void 0) : r.reject(Error(t));
                    }
                    let p = this.store;
                    return (
                        p.updateCookie ||
                            (p.updateCookie = async function (e, t, a) {
                                return this.putCookie(t).then(
                                    () => a?.(null),
                                    (e) => a?.(e),
                                );
                            }),
                        p.findCookie(e.domain, e.path, e.key, function (t, o) {
                            if (t) return void i(t);
                            let s = function (t) {
                                t ? i(t) : 'string' == typeof e ? i(null, void 0) : i(null, e);
                            };
                            if (o) {
                                if (a && 'http' in a && !1 === a.http && o.httpOnly) {
                                    (t = Error("old Cookie is HttpOnly and this isn't an HTTP API")), a.ignoreError ? i(null, void 0) : i(t);
                                    return;
                                }
                                e instanceof X && ((e.creation = o.creation), (e.creationIndex = o.creationIndex), (e.lastAccessed = c), p.updateCookie(o, e, s));
                            } else e instanceof X && ((e.creation = e.lastAccessed = c), p.putCookie(e, s));
                        }),
                        r.promise
                    );
                }
                setCookieSync(e, t, a) {
                    let o = a ? this.setCookie.bind(this, e, t, a) : this.setCookie.bind(this, e, t);
                    return this.callSync(o);
                }
                getCookies(e, t, a) {
                    let o;
                    'function' == typeof t ? ((a = t), (t = ee)) : void 0 === t && (t = ee);
                    let s = S(a),
                        r = s.callback;
                    try {
                        'string' == typeof e && T(z(e), r, e), (o = ea(e)), T(O(t), r, j(t)), T('function' == typeof r, r);
                    } catch (e) {
                        return s.reject(e);
                    }
                    let i = N(o.hostname),
                        n = o.pathname || '/',
                        l = (function (e, t = !0) {
                            let a;
                            if ('string' == typeof e)
                                try {
                                    a = new URL(e);
                                } catch {
                                    return !1;
                                }
                            else a = e;
                            let o = a.protocol.replace(':', '').toLowerCase(),
                                s = ((r = a.hostname).length >= 2 && r.startsWith('[') && r.endsWith(']') ? r.substring(1, r.length - 1) : r).replace(/\.+$/, '');
                            if ('https' === o || 'wss' === o) return !0;
                            if (!t) return !1;
                            if (I.test(s)) {
                                var r;
                                let e = s.split('.');
                                return 4 === e.length && void 0 !== e[0] && 127 === parseInt(e[0], 10);
                            }
                            if (R.test(s)) return '::1' === s;
                            let i = s.toLowerCase();
                            return 'localhost' === i || i.endsWith('.localhost');
                        })(e, this.allowSecureOnLocal),
                        u = 0;
                    if (t.sameSiteContext) {
                        let e = eo(t.sameSiteContext);
                        if (null == e || !(u = X.sameSiteLevel[e])) return s.reject(Error(et));
                    }
                    let c = t.http ?? !0,
                        d = Date.now(),
                        h = t.expire ?? !0,
                        m = t.allPaths ?? !1,
                        p = this.store;
                    function f(e) {
                        if (e.hostOnly) {
                            if (e.domain != i) return !1;
                        } else if (!Q(i ?? void 0, e.domain ?? void 0, !1)) return !1;
                        if ((!m && 'string' == typeof e.path && !g(n, e.path)) || (e.secure && !l) || (e.httpOnly && !c)) return !1;
                        if (u && ('lax' === e.sameSite ? X.sameSiteLevel.lax : 'strict' === e.sameSite ? X.sameSiteLevel.strict : X.sameSiteLevel.none) > u) return !1;
                        let t = e.expiryTime();
                        return !h || void 0 == t || !(t <= d) || (p.removeCookie(e.domain, e.path, e.key, () => {}), !1);
                    }
                    return (
                        p.findCookies(i, m ? null : n, this.allowSpecialUseDomain, (e, a) => {
                            if (e) return void r(e);
                            if (null == a) return void r(null, []);
                            (a = a.filter(f)), 'sort' in t && !1 !== t.sort && (a = a.sort(K));
                            let o = new Date();
                            for (let e of a) e.lastAccessed = o;
                            r(null, a);
                        }),
                        s.promise
                    );
                }
                getCookiesSync(e, t) {
                    return this.callSync(this.getCookies.bind(this, e, t)) ?? [];
                }
                getCookieString(e, t, a) {
                    'function' == typeof t && ((a = t), (t = void 0));
                    let o = S(a);
                    return (
                        this.getCookies(e, t, function (e, t) {
                            e
                                ? o.callback(e)
                                : o.callback(
                                      null,
                                      t
                                          ?.sort(K)
                                          .map((e) => e.cookieString())
                                          .join('; '),
                                  );
                        }),
                        o.promise
                    );
                }
                getCookieStringSync(e, t) {
                    return this.callSync(t ? this.getCookieString.bind(this, e, t) : this.getCookieString.bind(this, e)) ?? '';
                }
                getSetCookieStrings(e, t, a) {
                    'function' == typeof t && ((a = t), (t = void 0));
                    let o = S(a);
                    return (
                        this.getCookies(e, t, function (e, t) {
                            e
                                ? o.callback(e)
                                : o.callback(
                                      null,
                                      t?.map((e) => e.toString()),
                                  );
                        }),
                        o.promise
                    );
                }
                getSetCookieStringsSync(e, t = {}) {
                    return this.callSync(this.getSetCookieStrings.bind(this, e, t)) ?? [];
                }
                serialize(e) {
                    let t = S(e),
                        a = this.store.constructor.name;
                    O(a) && (a = null);
                    let o = {
                        version: 'tough-cookie@6.0.0',
                        storeType: a,
                        rejectPublicSuffixes: this.rejectPublicSuffixes,
                        enableLooseMode: this.enableLooseMode,
                        allowSpecialUseDomain: this.allowSpecialUseDomain,
                        prefixSecurity: es(this.prefixSecurity),
                        cookies: [],
                    };
                    return 'function' != typeof this.store.getAllCookies
                        ? t.reject(Error('store does not support getAllCookies and cannot be serialized'))
                        : (this.store.getAllCookies((e, a) =>
                              e
                                  ? void t.callback(e)
                                  : null == a
                                    ? void t.callback(null, o)
                                    : void ((o.cookies = a.map((e) => {
                                          let t = e.toJSON();
                                          return delete t.creationIndex, t;
                                      })),
                                      t.callback(null, o)),
                          ),
                          t.promise);
                }
                serializeSync() {
                    return this.callSync((e) => {
                        this.serialize(e);
                    });
                }
                toJSON() {
                    return this.serializeSync();
                }
                _importCookies(e, t) {
                    let a;
                    if ((e && 'object' == typeof e && 'cookies' in e && Array.isArray(e.cookies) && (a = e.cookies), !a))
                        return void t(Error('serialized jar has no cookies array'), void 0);
                    a = a.slice();
                    let o = (e) => {
                        if (e) return void t(e, void 0);
                        if (Array.isArray(a)) {
                            let s;
                            if (!a.length) return void t(e, this);
                            try {
                                s = X.fromJSON(a.shift());
                            } catch (e) {
                                t(e instanceof Error ? e : Error(), void 0);
                                return;
                            }
                            if (void 0 === s) return void o(null);
                            this.store.putCookie(s, o);
                        }
                    };
                    o(null);
                }
                _importCookiesSync(e) {
                    this.callSync(this._importCookies.bind(this, e));
                }
                clone(t, a) {
                    'function' == typeof t && ((a = t), (t = void 0));
                    let o = S(a),
                        s = o.callback;
                    return this.serialize((a, r) => (a ? o.reject(a) : e.deserialize(r ?? '', t, s))), o.promise;
                }
                _cloneSync(e) {
                    let t = e && 'function' != typeof e ? this.clone.bind(this, e) : this.clone.bind(this);
                    return this.callSync((e) => {
                        t(e);
                    });
                }
                cloneSync(e) {
                    if (!e) return this._cloneSync();
                    if (!e.synchronous) throw Error('CookieJar clone destination store is not synchronous; use async API instead.');
                    return this._cloneSync(e);
                }
                removeAllCookies(e) {
                    let t = S(e),
                        a = t.callback,
                        o = this.store;
                    return (
                        'function' == typeof o.removeAllCookies && o.removeAllCookies !== v.prototype.removeAllCookies
                            ? o.removeAllCookies(a)
                            : o.getAllCookies((e, t) => {
                                  if (e) return void a(e);
                                  if ((t || (t = []), 0 === t.length)) return void a(null, void 0);
                                  let s = 0,
                                      r = [],
                                      i = function (e) {
                                          if ((e && r.push(e), ++s === t.length)) return void (r[0] ? a(r[0]) : a(null, void 0));
                                      };
                                  t.forEach((e) => {
                                      o.removeCookie(e.domain, e.path, e.key, i);
                                  });
                              }),
                        t.promise
                    );
                }
                removeAllCookiesSync() {
                    this.callSync((e) => {
                        this.removeAllCookies(e);
                    });
                }
                static deserialize(t, a, o) {
                    let s;
                    'function' == typeof a && ((o = a), (a = void 0));
                    let r = S(o);
                    if ('string' == typeof t)
                        try {
                            s = JSON.parse(t);
                        } catch (e) {
                            return r.reject(e instanceof Error ? e : Error());
                        }
                    else s = t;
                    let i = (e) => (s && 'object' == typeof s && e in s ? s[e] : void 0),
                        n = (e) => {
                            let t = i(e);
                            return 'boolean' == typeof t ? t : void 0;
                        },
                        l = new e(a, {
                            rejectPublicSuffixes: n('rejectPublicSuffixes'),
                            looseMode: n('enableLooseMode'),
                            allowSpecialUseDomain: n('allowSpecialUseDomain'),
                            prefixSecurity: es(
                                ((e) => {
                                    let t = i(e);
                                    return 'string' == typeof t ? t : void 0;
                                })('prefixSecurity') ?? 'silent',
                            ),
                        });
                    return (
                        l._importCookies(s, (e) => {
                            if (e) return void r.callback(e);
                            r.callback(null, l);
                        }),
                        r.promise
                    );
                }
                static deserializeSync(t, a) {
                    let o = 'string' == typeof t ? JSON.parse(t) : t,
                        s = (e) => (o && 'object' == typeof o && e in o ? o[e] : void 0),
                        r = (e) => {
                            let t = s(e);
                            return 'boolean' == typeof t ? t : void 0;
                        },
                        i = new e(a, {
                            rejectPublicSuffixes: r('rejectPublicSuffixes'),
                            looseMode: r('enableLooseMode'),
                            allowSpecialUseDomain: r('allowSpecialUseDomain'),
                            prefixSecurity: es(
                                ((e) => {
                                    let t = s(e);
                                    return 'string' == typeof t ? t : void 0;
                                })('prefixSecurity') ?? 'silent',
                            ),
                        });
                    if (!i.store.synchronous) throw Error('CookieJar store is not synchronous; use async API instead.');
                    return i._importCookiesSync(o), i;
                }
                static fromJSON(t, a) {
                    return e.deserializeSync(t, a);
                }
            };
            class ei {
                #e = '__msw-cookie-store__';
                #t;
                #a;
                constructor() {
                    (0, o.S)() ||
                        (0, s.V1)(
                            'undefined' != typeof localStorage,
                            'Failed to create a CookieStore: `localStorage` is not available in this environment. This is likely an issue with your environment, which has been detected as browser (or browser-like) environment and must implement global browser APIs correctly.',
                        ),
                        (this.#a = new E()),
                        (this.#a.idx = this.getCookieStoreIndex()),
                        (this.#t = new er(this.#a));
                }
                getCookies(e) {
                    return this.#t.getCookiesSync(e);
                }
                async setCookie(e, t) {
                    await this.#t.setCookie(e, t), this.persist();
                }
                getCookieStoreIndex() {
                    if ('undefined' == typeof localStorage || 'function' != typeof localStorage.getItem) return {};
                    let e = localStorage.getItem(this.#e);
                    if (null == e) return {};
                    let t = (function (e) {
                        try {
                            return JSON.parse(e);
                        } catch {
                            return;
                        }
                    })(e);
                    if (null == t) return {};
                    let a = {};
                    for (let e of t) {
                        let t = X.fromJSON(e);
                        null != t && null != t.domain && null != t.path && ((a[t.domain] ||= {}), (a[t.domain][t.path] ||= {}), (a[t.domain][t.path][t.key] = t));
                    }
                    return a;
                }
                persist() {
                    if ('undefined' == typeof localStorage || 'function' != typeof localStorage.setItem) return;
                    let e = [],
                        { idx: t } = this.#a;
                    for (let a in t) for (let o in t[a]) for (let s in t[a][o]) e.push(t[a][o][s].toJSON());
                    localStorage.setItem(this.#e, JSON.stringify(e));
                }
            }
            let en = new ei();
        },
        4672: (e, t, a) => {
            a.d(t, { Z: () => o });
            var o = class extends Promise {
                #o;
                resolve;
                reject;
                constructor(e = null) {
                    let t = (function () {
                        let e = (t, a) => {
                            (e.state = 'pending'),
                                (e.resolve = (a) =>
                                    'pending' !== e.state
                                        ? void 0
                                        : ((e.result = a), t(a instanceof Promise ? a : Promise.resolve(a).then((t) => ((e.state = 'fulfilled'), t))))),
                                (e.reject = (t) => {
                                    if ('pending' === e.state)
                                        return (
                                            queueMicrotask(() => {
                                                e.state = 'rejected';
                                            }),
                                            a((e.rejectionReason = t))
                                        );
                                });
                        };
                        return e;
                    })();
                    super((a, o) => {
                        t(a, o), e?.(t.resolve, t.reject);
                    }),
                        (this.#o = t),
                        (this.resolve = this.#o.resolve),
                        (this.reject = this.#o.reject);
                }
                get state() {
                    return this.#o.state;
                }
                get rejectionReason() {
                    return this.#o.rejectionReason;
                }
                then(e, t) {
                    return this.#s(super.then(e, t));
                }
                catch(e) {
                    return this.#s(super.catch(e));
                }
                finally(e) {
                    return this.#s(super.finally(e));
                }
                #s(e) {
                    return Object.defineProperties(e, { resolve: { configurable: !0, value: this.resolve }, reject: { configurable: !0, value: this.reject } });
                }
            };
        },
        11285: (e, t, a) => {
            a.d(t, { X: () => s });
            var o = a(75643);
            function s(e, t) {
                let a = new Request(e instanceof Request ? e.clone() : e, t);
                (0, o.V1)(
                    !a.bodyUsed,
                    'Failed to create a bypassed request to "%s %s": given request instance already has its body read. Make sure to clone the intercepted request if you wish to read its body before bypassing it.',
                    a.method,
                    a.url,
                );
                let s = a.clone();
                return s.headers.append('accept', 'msw/passthrough'), s;
            }
        },
        36005: (e, t, a) => {
            a.d(t, { l: () => o });
            function o(e) {
                let t = new Date(),
                    a = `${t.getHours().toString().padStart(2, '0')}:${t.getMinutes().toString().padStart(2, '0')}:${t.getSeconds().toString().padStart(2, '0')}`;
                return e?.milliseconds ? `${a}.${t.getMilliseconds().toString().padStart(3, '0')}` : a;
            }
        },
        51403: (e, t, a) => {
            a.d(t, { L: () => O });
            var o = a(71249),
                s = ((e) => ((e.Success = '#69AB32'), (e.Warning = '#F0BB4B'), (e.Danger = '#E95F5D'), e))(s || {}),
                r = a(36005);
            async function i(e) {
                let t = e.clone(),
                    a = await t.text();
                return { url: new URL(e.url), method: e.method, headers: Object.fromEntries(e.headers.entries()), body: a };
            }
            let { message: n } = a(77810).A;
            async function l(e) {
                let t = e.clone(),
                    a = await t.text(),
                    o = t.status || 200,
                    s = t.statusText || n[o] || 'OK';
                return { status: o, statusText: s, headers: Object.fromEntries(t.headers.entries()), body: a };
            }
            var u = a(67443),
                c = a(54182),
                d = Object.create,
                h = Object.defineProperty,
                m = Object.getOwnPropertyDescriptor,
                p = Object.getOwnPropertyNames,
                g = Object.getPrototypeOf,
                f = Object.prototype.hasOwnProperty,
                k = ((e, t, a) =>
                    ((e, t, a, o) => {
                        if ((t && 'object' == typeof t) || 'function' == typeof t)
                            for (let a of p(t)) f.call(e, a) || void 0 === a || h(e, a, { get: () => t[a], enumerable: !(o = m(t, a)) || o.enumerable });
                        return e;
                    })(h((a = null != e ? d(g(e)) : {}), 'default', { value: e, enumerable: !0 }), e))(
                    ((e, t) =>
                        function () {
                            return t || (0, e[p(e)[0]])((t = { exports: {} }).exports, t), t.exports;
                        })({
                        'node_modules/.pnpm/cookie@1.0.2/node_modules/cookie/dist/index.js'(e) {
                            Object.defineProperty(e, '__esModule', { value: !0 }),
                                (e.parse = function (e, t) {
                                    let a = new i(),
                                        o = e.length;
                                    if (o < 2) return a;
                                    let s = t?.decode || u,
                                        r = 0;
                                    do {
                                        let t = e.indexOf('=', r);
                                        if (-1 === t) break;
                                        let i = e.indexOf(';', r),
                                            u = -1 === i ? o : i;
                                        if (t > u) {
                                            r = e.lastIndexOf(';', t - 1) + 1;
                                            continue;
                                        }
                                        let c = n(e, r, t),
                                            d = l(e, t, c),
                                            h = e.slice(c, d);
                                        if (void 0 === a[h]) {
                                            let o = n(e, t + 1, u),
                                                r = l(e, u, o),
                                                i = s(e.slice(o, r));
                                            a[h] = i;
                                        }
                                        r = u + 1;
                                    } while (r < o);
                                    return a;
                                }),
                                (e.serialize = function (e, i, n) {
                                    let l = n?.encode || encodeURIComponent;
                                    if (!t.test(e)) throw TypeError(`argument name is invalid: ${e}`);
                                    let u = l(i);
                                    if (!a.test(u)) throw TypeError(`argument val is invalid: ${i}`);
                                    let c = e + '=' + u;
                                    if (!n) return c;
                                    if (void 0 !== n.maxAge) {
                                        if (!Number.isInteger(n.maxAge)) throw TypeError(`option maxAge is invalid: ${n.maxAge}`);
                                        c += '; Max-Age=' + n.maxAge;
                                    }
                                    if (n.domain) {
                                        if (!o.test(n.domain)) throw TypeError(`option domain is invalid: ${n.domain}`);
                                        c += '; Domain=' + n.domain;
                                    }
                                    if (n.path) {
                                        if (!s.test(n.path)) throw TypeError(`option path is invalid: ${n.path}`);
                                        c += '; Path=' + n.path;
                                    }
                                    if (n.expires) {
                                        var d;
                                        if (((d = n.expires), '[object Date]' !== r.call(d) || !Number.isFinite(n.expires.valueOf())))
                                            throw TypeError(`option expires is invalid: ${n.expires}`);
                                        c += '; Expires=' + n.expires.toUTCString();
                                    }
                                    if ((n.httpOnly && (c += '; HttpOnly'), n.secure && (c += '; Secure'), n.partitioned && (c += '; Partitioned'), n.priority))
                                        switch ('string' == typeof n.priority ? n.priority.toLowerCase() : void 0) {
                                            case 'low':
                                                c += '; Priority=Low';
                                                break;
                                            case 'medium':
                                                c += '; Priority=Medium';
                                                break;
                                            case 'high':
                                                c += '; Priority=High';
                                                break;
                                            default:
                                                throw TypeError(`option priority is invalid: ${n.priority}`);
                                        }
                                    if (n.sameSite)
                                        switch ('string' == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite) {
                                            case !0:
                                            case 'strict':
                                                c += '; SameSite=Strict';
                                                break;
                                            case 'lax':
                                                c += '; SameSite=Lax';
                                                break;
                                            case 'none':
                                                c += '; SameSite=None';
                                                break;
                                            default:
                                                throw TypeError(`option sameSite is invalid: ${n.sameSite}`);
                                        }
                                    return c;
                                });
                            var t = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                                a = /^[\u0021-\u003A\u003C-\u007E]*$/,
                                o = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                                s = /^[\u0020-\u003A\u003D-\u007E]*$/,
                                r = Object.prototype.toString,
                                i = (() => {
                                    let e = function () {};
                                    return (e.prototype = Object.create(null)), e;
                                })();
                            function n(e, t, a) {
                                do {
                                    let a = e.charCodeAt(t);
                                    if (32 !== a && 9 !== a) return t;
                                } while (++t < a);
                                return a;
                            }
                            function l(e, t, a) {
                                for (; t > a; ) {
                                    let a = e.charCodeAt(--t);
                                    if (32 !== a && 9 !== a) return t + 1;
                                }
                                return a;
                            }
                            function u(e) {
                                if (-1 === e.indexOf('%')) return e;
                                try {
                                    return decodeURIComponent(e);
                                } catch (t) {
                                    return e;
                                }
                            }
                        },
                    })(),
                    0,
                ),
                b = k.default || k,
                y = b.parse,
                v = b.serialize,
                w = a(2488);
            function x(e) {
                let t = y(e),
                    a = {};
                for (let e in t) void 0 !== t[e] && (a[e] = t[e]);
                return a;
            }
            function j() {
                return x(document.cookie);
            }
            var S = a(93679),
                E = a(75562),
                z = ((e) => (
                    (e.HEAD = 'HEAD'), (e.GET = 'GET'), (e.POST = 'POST'), (e.PUT = 'PUT'), (e.PATCH = 'PATCH'), (e.OPTIONS = 'OPTIONS'), (e.DELETE = 'DELETE'), e
                ))(z || {});
            class q extends E.w {
                constructor(e, t, a, o) {
                    let s = 'function' == typeof t ? '[custom predicate]' : t;
                    super({ info: { header: `${e}${s ? ` ${s}` : ''}`, path: t, method: e }, resolver: a, options: o }), this.checkRedundantQueryParameters();
                }
                checkRedundantQueryParameters() {
                    let { method: e, path: t } = this.info;
                    !t ||
                        t instanceof RegExp ||
                        'function' == typeof t ||
                        ((0, S.T)(t) !== t &&
                            o.J.warn(
                                `Found a redundant usage of query parameters in the request handler URL for "${e} ${t}". Please match against a path instead and access query parameters using "new URL(request.url).searchParams" instead. Learn more: https://mswjs.io/docs/http/intercepting-requests#querysearch-parameters`,
                            ));
                }
                async parse(e) {
                    let t = new URL(e.request.url),
                        a = (function (e) {
                            let t = e.headers.get('cookie'),
                                a = t ? x(t) : {},
                                o = (function (e) {
                                    if ('undefined' == typeof document || 'undefined' == typeof location) return {};
                                    switch (e.credentials) {
                                        case 'same-origin': {
                                            let t = new URL(e.url);
                                            return location.origin === t.origin ? j() : {};
                                        }
                                        case 'include':
                                            return j();
                                        default:
                                            return {};
                                    }
                                })(e);
                            for (let t in o) e.headers.append('cookie', v(t, o[t]));
                            let s = w.C.getCookies(e.url),
                                r = Object.fromEntries(s.map((e) => [e.key, e.value]));
                            for (let t of s) e.headers.append('cookie', t.toString());
                            return { ...o, ...r, ...a };
                        })(e.request);
                    if ('function' == typeof this.info.path) {
                        let t = await this.info.path({ request: e.request, cookies: a });
                        return { match: 'boolean' == typeof t ? { matches: t, params: {} } : t, cookies: a };
                    }
                    return { match: this.info.path ? (0, u.Os)(t, this.info.path, e.resolutionContext?.baseUrl) : { matches: !1, params: {} }, cookies: a };
                }
                async predicate(e) {
                    let t = this.matchMethod(e.request.method),
                        a = e.parsedResult.match.matches;
                    return t && a;
                }
                matchMethod(e) {
                    var t;
                    return this.info.method instanceof RegExp ? this.info.method.test(e) : ((t = this.info.method), t.toLowerCase() === e.toLowerCase());
                }
                extendResolverArgs(e) {
                    return { params: e.parsedResult.match?.params || {}, cookies: e.parsedResult.cookies };
                }
                async log(e) {
                    var t;
                    let a = (0, c.e)(e.request.url),
                        s = await i(e.request),
                        n = await l(e.response),
                        u = (t = n.status) < 300 ? '#69AB32' : t < 400 ? '#F0BB4B' : '#E95F5D';
                    console.groupCollapsed(o.J.formatMessage(`${(0, r.l)()} ${e.request.method} ${a} (%c${n.status} ${n.statusText}%c)`), `color:${u}`, 'color:inherit'),
                        console.log('Request', s),
                        console.log('Handler:', this),
                        console.log('Response', n),
                        console.groupEnd();
                }
            }
            function C(e) {
                return (t, a, o = {}) => new q(e, t, a, o);
            }
            let O = { all: C(/.+/), head: C(z.HEAD), get: C(z.GET), post: C(z.POST), put: C(z.PUT), delete: C(z.DELETE), patch: C(z.PATCH), options: C(z.OPTIONS) };
        },
        51832: (e, t, a) => {
            a.d(t, { c: () => i });
            var o = a(80436),
                s = a(67519);
            let r = Symbol('bodyType');
            class i extends o.Aj {
                [r] = null;
                constructor(e, t) {
                    let a = (0, s.Tl)(t);
                    super(e, a), (0, s.fX)(this, a);
                }
                static error() {
                    return super.error();
                }
                static text(e, t) {
                    let a = (0, s.Tl)(t);
                    return (
                        a.headers.has('Content-Type') || a.headers.set('Content-Type', 'text/plain'),
                        a.headers.has('Content-Length') || a.headers.set('Content-Length', e ? new Blob([e]).size.toString() : '0'),
                        new i(e, a)
                    );
                }
                static json(e, t) {
                    let a = (0, s.Tl)(t);
                    a.headers.has('Content-Type') || a.headers.set('Content-Type', 'application/json');
                    let o = JSON.stringify(e);
                    return a.headers.has('Content-Length') || a.headers.set('Content-Length', o ? new Blob([o]).size.toString() : '0'), new i(o, a);
                }
                static xml(e, t) {
                    let a = (0, s.Tl)(t);
                    return a.headers.has('Content-Type') || a.headers.set('Content-Type', 'text/xml'), new i(e, a);
                }
                static html(e, t) {
                    let a = (0, s.Tl)(t);
                    return a.headers.has('Content-Type') || a.headers.set('Content-Type', 'text/html'), new i(e, a);
                }
                static arrayBuffer(e, t) {
                    let a = (0, s.Tl)(t);
                    return (
                        a.headers.has('Content-Type') || a.headers.set('Content-Type', 'application/octet-stream'),
                        e && !a.headers.has('Content-Length') && a.headers.set('Content-Length', e.byteLength.toString()),
                        new i(e, a)
                    );
                }
                static formData(e, t) {
                    return new i(e, (0, s.Tl)(t));
                }
            }
        },
        54182: (e, t, a) => {
            a.d(t, { e: () => o });
            function o(e) {
                let t = e instanceof URL ? e : new URL(e);
                return 'undefined' != typeof location && t.origin === location.origin ? t.pathname : t.origin + t.pathname;
            }
        },
        67443: (e, t, a) => {
            function o(e) {
                return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
            }
            function s(e) {
                return e && e.sensitive ? '' : 'i';
            }
            a.d(t, { Os: () => n });
            var r = a(80436),
                i = a(93679);
            function n(e, t, a) {
                var n, l, u, c, d, h, m;
                let p = (function (e, t) {
                        if (e instanceof RegExp) return e;
                        let a = (function (e, t) {
                            if (/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) || e.startsWith('*')) return e;
                            let a = t || ('undefined' != typeof location && location.href);
                            return a ? decodeURI(new URL(encodeURI(e), a).href) : e;
                        })(e, t);
                        return (0, i.T)(a);
                    })(t, a),
                    g =
                        'string' == typeof p
                            ? p
                                  .replace(/([:a-zA-Z_-]*)(\*{1,2})+/g, (e, t, a) => {
                                      let o = '(.*)';
                                      return t ? (t.startsWith(':') ? `${t}${a}` : `${t}${o}`) : o;
                                  })
                                  .replace(/([^/])(:)(?=\d+)/, '$1\\$2')
                                  .replace(/^([^/]+)(:)(?=\/\/)/, '$1\\$2')
                            : p,
                    f = (0, r.bf)(e),
                    k = ((u = (function e(t, a, r) {
                        if (t instanceof RegExp) {
                            var i;
                            if (!a) return t;
                            for (var n = /\((?:\?<(.*?)>)?(?!\?)/g, l = 0, u = n.exec(t.source); u; )
                                a.push({ name: u[1] || l++, prefix: '', suffix: '', modifier: '', pattern: '' }), (u = n.exec(t.source));
                            return t;
                        }
                        return Array.isArray(t)
                            ? ((i = t.map(function (t) {
                                  return e(t, a, r).source;
                              })),
                              new RegExp('(?:'.concat(i.join('|'), ')'), s(r)))
                            : (function (e, t, a) {
                                  void 0 === a && (a = {});
                                  for (
                                      var r = a.strict,
                                          i = void 0 !== r && r,
                                          n = a.start,
                                          l = a.end,
                                          u = a.encode,
                                          c =
                                              void 0 === u
                                                  ? function (e) {
                                                        return e;
                                                    }
                                                  : u,
                                          d = a.delimiter,
                                          h = a.endsWith,
                                          m = '['.concat(o(void 0 === h ? '' : h), ']|$'),
                                          p = '['.concat(o(void 0 === d ? '/#?' : d), ']'),
                                          g = void 0 === n || n ? '^' : '',
                                          f = 0;
                                      f < e.length;
                                      f++
                                  ) {
                                      var k = e[f];
                                      if ('string' == typeof k) g += o(c(k));
                                      else {
                                          var b = o(c(k.prefix)),
                                              y = o(c(k.suffix));
                                          if (k.pattern)
                                              if ((t && t.push(k), b || y))
                                                  if ('+' === k.modifier || '*' === k.modifier) {
                                                      var v = '*' === k.modifier ? '?' : '';
                                                      g += '(?:'
                                                          .concat(b, '((?:')
                                                          .concat(k.pattern, ')(?:')
                                                          .concat(y)
                                                          .concat(b, '(?:')
                                                          .concat(k.pattern, '))*)')
                                                          .concat(y, ')')
                                                          .concat(v);
                                                  } else g += '(?:'.concat(b, '(').concat(k.pattern, ')').concat(y, ')').concat(k.modifier);
                                              else {
                                                  if ('+' === k.modifier || '*' === k.modifier)
                                                      throw TypeError('Can not repeat "'.concat(k.name, '" without a prefix and suffix'));
                                                  g += '('.concat(k.pattern, ')').concat(k.modifier);
                                              }
                                          else g += '(?:'.concat(b).concat(y, ')').concat(k.modifier);
                                      }
                                  }
                                  if (void 0 === l || l) i || (g += ''.concat(p, '?')), (g += a.endsWith ? '(?='.concat(m, ')') : '$');
                                  else {
                                      var w = e[e.length - 1],
                                          x = 'string' == typeof w ? p.indexOf(w[w.length - 1]) > -1 : void 0 === w;
                                      i || (g += '(?:'.concat(p, '(?=').concat(m, '))?')), x || (g += '(?='.concat(p, '|').concat(m, ')'));
                                  }
                                  return new RegExp(g, s(a));
                              })(
                                  (function (e, t) {
                                      void 0 === t && (t = {});
                                      for (
                                          var a = (function (e) {
                                                  for (var t = [], a = 0; a < e.length; ) {
                                                      var o = e[a];
                                                      if ('*' === o || '+' === o || '?' === o) {
                                                          t.push({ type: 'MODIFIER', index: a, value: e[a++] });
                                                          continue;
                                                      }
                                                      if ('\\' === o) {
                                                          t.push({ type: 'ESCAPED_CHAR', index: a++, value: e[a++] });
                                                          continue;
                                                      }
                                                      if ('{' === o) {
                                                          t.push({ type: 'OPEN', index: a, value: e[a++] });
                                                          continue;
                                                      }
                                                      if ('}' === o) {
                                                          t.push({ type: 'CLOSE', index: a, value: e[a++] });
                                                          continue;
                                                      }
                                                      if (':' === o) {
                                                          for (var s = '', r = a + 1; r < e.length; ) {
                                                              var i = e.charCodeAt(r);
                                                              if ((i >= 48 && i <= 57) || (i >= 65 && i <= 90) || (i >= 97 && i <= 122) || 95 === i) {
                                                                  s += e[r++];
                                                                  continue;
                                                              }
                                                              break;
                                                          }
                                                          if (!s) throw TypeError('Missing parameter name at '.concat(a));
                                                          t.push({ type: 'NAME', index: a, value: s }), (a = r);
                                                          continue;
                                                      }
                                                      if ('(' === o) {
                                                          var n = 1,
                                                              l = '',
                                                              r = a + 1;
                                                          if ('?' === e[r]) throw TypeError('Pattern cannot start with "?" at '.concat(r));
                                                          for (; r < e.length; ) {
                                                              if ('\\' === e[r]) {
                                                                  l += e[r++] + e[r++];
                                                                  continue;
                                                              }
                                                              if (')' === e[r]) {
                                                                  if (0 == --n) {
                                                                      r++;
                                                                      break;
                                                                  }
                                                              } else if ('(' === e[r] && (n++, '?' !== e[r + 1]))
                                                                  throw TypeError('Capturing groups are not allowed at '.concat(r));
                                                              l += e[r++];
                                                          }
                                                          if (n) throw TypeError('Unbalanced pattern at '.concat(a));
                                                          if (!l) throw TypeError('Missing pattern at '.concat(a));
                                                          t.push({ type: 'PATTERN', index: a, value: l }), (a = r);
                                                          continue;
                                                      }
                                                      t.push({ type: 'CHAR', index: a, value: e[a++] });
                                                  }
                                                  return t.push({ type: 'END', index: a, value: '' }), t;
                                              })(e),
                                              s = t.prefixes,
                                              r = void 0 === s ? './' : s,
                                              i = t.delimiter,
                                              n = void 0 === i ? '/#?' : i,
                                              l = [],
                                              u = 0,
                                              c = 0,
                                              d = '',
                                              h = function (e) {
                                                  if (c < a.length && a[c].type === e) return a[c++].value;
                                              },
                                              m = function (e) {
                                                  var t = h(e);
                                                  if (void 0 !== t) return t;
                                                  var o = a[c],
                                                      s = o.type,
                                                      r = o.index;
                                                  throw TypeError('Unexpected '.concat(s, ' at ').concat(r, ', expected ').concat(e));
                                              },
                                              p = function () {
                                                  for (var e, t = ''; (e = h('CHAR') || h('ESCAPED_CHAR')); ) t += e;
                                                  return t;
                                              },
                                              g = function (e) {
                                                  for (var t = 0; t < n.length; t++) {
                                                      var a = n[t];
                                                      if (e.indexOf(a) > -1) return !0;
                                                  }
                                                  return !1;
                                              },
                                              f = function (e) {
                                                  var t = l[l.length - 1],
                                                      a = e || (t && 'string' == typeof t ? t : '');
                                                  if (t && !a) throw TypeError('Must have text between two parameters, missing text after "'.concat(t.name, '"'));
                                                  return !a || g(a) ? '[^'.concat(o(n), ']+?') : '(?:(?!'.concat(o(a), ')[^').concat(o(n), '])+?');
                                              };
                                          c < a.length;

                                      ) {
                                          var k = h('CHAR'),
                                              b = h('NAME'),
                                              y = h('PATTERN');
                                          if (b || y) {
                                              var v = k || '';
                                              -1 === r.indexOf(v) && ((d += v), (v = '')),
                                                  d && (l.push(d), (d = '')),
                                                  l.push({ name: b || u++, prefix: v, suffix: '', pattern: y || f(v), modifier: h('MODIFIER') || '' });
                                              continue;
                                          }
                                          var w = k || h('ESCAPED_CHAR');
                                          if (w) {
                                              d += w;
                                              continue;
                                          }
                                          if ((d && (l.push(d), (d = '')), h('OPEN'))) {
                                              var v = p(),
                                                  x = h('NAME') || '',
                                                  j = h('PATTERN') || '',
                                                  S = p();
                                              m('CLOSE'),
                                                  l.push({ name: x || (j ? u++ : ''), pattern: x && !j ? f(v) : j, prefix: v, suffix: S, modifier: h('MODIFIER') || '' });
                                              continue;
                                          }
                                          m('END');
                                      }
                                      return l;
                                  })(t, r),
                                  a,
                                  r,
                              );
                    })(g, (l = []), (n = { decode: decodeURIComponent }))),
                    (c = l),
                    void 0 === (d = n) && (d = {}),
                    (m =
                        void 0 === (h = d.decode)
                            ? function (e) {
                                  return e;
                              }
                            : h),
                    function (e) {
                        var t = u.exec(e);
                        if (!t) return !1;
                        for (var a = t[0], o = t.index, s = Object.create(null), r = 1; r < t.length; r++)
                            !(function (e) {
                                if (void 0 !== t[e]) {
                                    var a = c[e - 1];
                                    '*' === a.modifier || '+' === a.modifier
                                        ? (s[a.name] = t[e].split(a.prefix + a.suffix).map(function (e) {
                                              return m(e, a);
                                          }))
                                        : (s[a.name] = m(t[e], a));
                                }
                            })(r);
                        return { path: a, index: o, params: s };
                    })(f),
                    b = (k && k.params) || {};
                return { matches: !1 !== k, params: b };
            }
        },
        67519: (e, t, a) => {
            a.d(t, { fX: () => q, sz: () => E, Tl: () => z });
            var o,
                s,
                r,
                i = a(77810),
                n = Object.create,
                l = Object.defineProperty,
                u = Object.getOwnPropertyDescriptor,
                c = Object.getOwnPropertyNames,
                d = Object.getPrototypeOf,
                h = Object.prototype.hasOwnProperty,
                m = ((e, t, a) => (
                    (a = null != e ? n(d(e)) : {}),
                    ((e, t, a, o) => {
                        if ((t && 'object' == typeof t) || 'function' == typeof t)
                            for (let a of c(t)) h.call(e, a) || void 0 === a || l(e, a, { get: () => t[a], enumerable: !(o = u(t, a)) || o.enumerable });
                        return e;
                    })(e && e.__esModule ? a : l(a, 'default', { value: e, enumerable: !0 }), e)
                ))(
                    ((e, t) =>
                        function () {
                            return t || (0, e[c(e)[0]])((t = { exports: {} }).exports, t), t.exports;
                        })({
                        'node_modules/set-cookie-parser/lib/set-cookie.js'(e, t) {
                            var a = { decodeValues: !0, map: !1, silent: !1 };
                            function o(e) {
                                return 'string' == typeof e && !!e.trim();
                            }
                            function s(e, t) {
                                var s,
                                    r,
                                    i,
                                    n,
                                    l = e.split(';').filter(o),
                                    u =
                                        ((s = l.shift()),
                                        (r = ''),
                                        (i = ''),
                                        (n = s.split('=')).length > 1 ? ((r = n.shift()), (i = n.join('='))) : (i = s),
                                        { name: r, value: i }),
                                    c = u.name,
                                    d = u.value;
                                t = t ? Object.assign({}, a, t) : a;
                                try {
                                    d = t.decodeValues ? decodeURIComponent(d) : d;
                                } catch (e) {
                                    console.error(
                                        "set-cookie-parser encountered an error while decoding a cookie with value '" +
                                            d +
                                            "'. Set options.decodeValues to false to disable this feature.",
                                        e,
                                    );
                                }
                                var h = { name: c, value: d };
                                return (
                                    l.forEach(function (e) {
                                        var t = e.split('='),
                                            a = t.shift().trimLeft().toLowerCase(),
                                            o = t.join('=');
                                        'expires' === a
                                            ? (h.expires = new Date(o))
                                            : 'max-age' === a
                                              ? (h.maxAge = parseInt(o, 10))
                                              : 'secure' === a
                                                ? (h.secure = !0)
                                                : 'httponly' === a
                                                  ? (h.httpOnly = !0)
                                                  : 'samesite' === a
                                                    ? (h.sameSite = o)
                                                    : (h[a] = o);
                                    }),
                                    h
                                );
                            }
                            function r(e, t) {
                                if (((t = t ? Object.assign({}, a, t) : a), !e))
                                    if (!t.map) return [];
                                    else return {};
                                if (e.headers)
                                    if ('function' == typeof e.headers.getSetCookie) e = e.headers.getSetCookie();
                                    else if (e.headers['set-cookie']) e = e.headers['set-cookie'];
                                    else {
                                        var r =
                                            e.headers[
                                                Object.keys(e.headers).find(function (e) {
                                                    return 'set-cookie' === e.toLowerCase();
                                                })
                                            ];
                                        r ||
                                            !e.headers.cookie ||
                                            t.silent ||
                                            console.warn(
                                                'Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.',
                                            ),
                                            (e = r);
                                    }
                                return (Array.isArray(e) || (e = [e]), (t = t ? Object.assign({}, a, t) : a).map)
                                    ? e.filter(o).reduce(function (e, a) {
                                          var o = s(a, t);
                                          return (e[o.name] = o), e;
                                      }, {})
                                    : e.filter(o).map(function (e) {
                                          return s(e, t);
                                      });
                            }
                            (t.exports = r),
                                (t.exports.parse = r),
                                (t.exports.parseString = s),
                                (t.exports.splitCookiesString = function (e) {
                                    if (Array.isArray(e)) return e;
                                    if ('string' != typeof e) return [];
                                    var t,
                                        a,
                                        o,
                                        s,
                                        r,
                                        i = [],
                                        n = 0;
                                    function l() {
                                        for (; n < e.length && /\s/.test(e.charAt(n)); ) n += 1;
                                        return n < e.length;
                                    }
                                    for (; n < e.length; ) {
                                        for (t = n, r = !1; l(); )
                                            if (',' === (a = e.charAt(n))) {
                                                for (o = n, n += 1, l(), s = n; n < e.length && '=' !== (a = e.charAt(n)) && ';' !== a && ',' !== a; ) n += 1;
                                                n < e.length && '=' === e.charAt(n) ? ((r = !0), (n = s), i.push(e.substring(t, o)), (t = n)) : (n = o + 1);
                                            } else n += 1;
                                        (!r || n >= e.length) && i.push(e.substring(t, e.length));
                                    }
                                    return i;
                                });
                        },
                    })(),
                ),
                p = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
            function g(e) {
                if (p.test(e) || '' === e.trim()) throw TypeError('Invalid character in header field name');
                return e.trim().toLowerCase();
            }
            var f = ['\n', '\r', '	', ' '],
                k = RegExp(`(^[${f.join('')}]|$[${f.join('')}])`, 'g');
            function b(e) {
                return e.replace(k, '');
            }
            function y(e) {
                if ('string' != typeof e || 0 === e.length) return !1;
                for (let t = 0; t < e.length; t++) {
                    let a = e.charCodeAt(t);
                    if (a > 127 || [127, 32, '(', ')', '<', '>', '@', ',', ';', ':', '\\', '"', '/', '[', ']', '?', '=', '{', '}'].includes(a)) return !1;
                }
                return !0;
            }
            function v(e) {
                if ('string' != typeof e || e.trim() !== e) return !1;
                for (let t = 0; t < e.length; t++) {
                    let a = e.charCodeAt(t);
                    if (0 === a || 10 === a || 13 === a) return !1;
                }
                return !0;
            }
            var w = Symbol('normalizedHeaders'),
                x = Symbol('rawHeaderNames'),
                j = class e {
                    constructor(t) {
                        (this[o] = {}),
                            (this[s] = new Map()),
                            (this[r] = 'Headers'),
                            ['Headers', 'HeadersPolyfill'].includes(t?.constructor.name) ||
                            t instanceof e ||
                            (void 0 !== globalThis.Headers && t instanceof globalThis.Headers)
                                ? t.forEach((e, t) => {
                                      this.append(t, e);
                                  }, this)
                                : Array.isArray(t)
                                  ? t.forEach(([e, t]) => {
                                        this.append(e, Array.isArray(t) ? t.join(', ') : t);
                                    })
                                  : t &&
                                    Object.getOwnPropertyNames(t).forEach((e) => {
                                        let a = t[e];
                                        this.append(e, Array.isArray(a) ? a.join(', ') : a);
                                    });
                    }
                    [((o = w), (s = x), (r = Symbol.toStringTag), Symbol.iterator)]() {
                        return this.entries();
                    }
                    *keys() {
                        for (let [e] of this.entries()) yield e;
                    }
                    *values() {
                        for (let [, e] of this.entries()) yield e;
                    }
                    *entries() {
                        for (let e of Object.keys(this[w]).sort((e, t) => e.localeCompare(t)))
                            if ('set-cookie' === e) for (let t of this.getSetCookie()) yield [e, t];
                            else yield [e, this.get(e)];
                    }
                    has(e) {
                        if (!y(e)) throw TypeError(`Invalid header name "${e}"`);
                        return this[w].hasOwnProperty(g(e));
                    }
                    get(e) {
                        if (!y(e)) throw TypeError(`Invalid header name "${e}"`);
                        return this[w][g(e)] ?? null;
                    }
                    set(e, t) {
                        if (!y(e) || !v(t)) return;
                        let a = g(e),
                            o = b(t);
                        (this[w][a] = b(o)), this[x].set(a, e);
                    }
                    append(e, t) {
                        if (!y(e) || !v(t)) return;
                        let a = g(e),
                            o = b(t),
                            s = this.has(a) ? `${this.get(a)}, ${o}` : o;
                        this.set(e, s);
                    }
                    delete(e) {
                        if (!y(e) || !this.has(e)) return;
                        let t = g(e);
                        delete this[w][t], this[x].delete(t);
                    }
                    forEach(e, t) {
                        for (let [a, o] of this.entries()) e.call(t, o, a, this);
                    }
                    getSetCookie() {
                        let e = this.get('set-cookie');
                        return null === e ? [] : '' === e ? [''] : (0, m.splitCookiesString)(e);
                    }
                };
            let { message: S } = i.A,
                E = Symbol('kSetCookie');
            function z(e = {}) {
                let t = e?.status || 200,
                    a = e?.statusText || S[t] || '',
                    o = new Headers(e?.headers);
                return { ...e, headers: o, status: t, statusText: a };
            }
            function q(e, t) {
                t.type && Object.defineProperty(e, 'type', { value: t.type, enumerable: !0, writable: !1 });
                let a = t.headers.get('set-cookie');
                if (a && (Object.defineProperty(e, E, { value: a, enumerable: !1, writable: !1 }), 'undefined' != typeof document))
                    for (let e of j.prototype.getSetCookie.call(t.headers)) document.cookie = e;
                return e;
            }
        },
        71249: (e, t, a) => {
            a.d(t, { G: () => i, J: () => r });
            var o = a(75643);
            function s(e, ...t) {
                let a = (0, o.GP)(e, ...t);
                return `[MSW] ${a}`;
            }
            let r = {
                formatMessage: s,
                warn: function (e, ...t) {
                    console.warn(s(e, ...t));
                },
                error: function (e, ...t) {
                    console.error(s(e, ...t));
                },
            };
            class i extends Error {
                constructor(e) {
                    super(e), (this.name = 'InternalError');
                }
            }
        },
        72038: (e, t, a) => {
            a.d(t, { S: () => s });
            var o = a(49124);
            function s() {
                if ('undefined' != typeof navigator && 'ReactNative' === navigator.product) return !0;
                if (void 0 !== o) {
                    let e = o.type;
                    return 'renderer' !== e && 'worker' !== e && !!(o.versions && o.versions.node);
                }
                return !1;
            }
        },
        75562: (e, t, a) => {
            a.d(t, { w: () => r });
            let o = /[/\\]msw[/\\]src[/\\](.+)/,
                s = /(node_modules)?[/\\]lib[/\\](core|browser|node|native|iife)[/\\]|^[^/\\]*$/;
            class r {
                static cache = new WeakMap();
                __kind;
                info;
                isUsed;
                resolver;
                resolverIterator;
                resolverIteratorResult;
                options;
                constructor(e) {
                    (this.resolver = e.resolver), (this.options = e.options);
                    let t = (function (e) {
                        let t = e.stack;
                        if (!t) return;
                        let a = t
                            .split('\n')
                            .slice(1)
                            .find((e) => !(o.test(e) || s.test(e)));
                        if (a) return a.replace(/\s*at [^()]*\(([^)]+)\)/, '$1').replace(/^@/, '');
                    })(Error());
                    (this.info = { ...e.info, callFrame: t }), (this.isUsed = !1), (this.__kind = 'RequestHandler');
                }
                async parse(e) {
                    return {};
                }
                async test(e) {
                    let t = await this.parse({ request: e.request, resolutionContext: e.resolutionContext });
                    return this.predicate({ request: e.request, parsedResult: t, resolutionContext: e.resolutionContext });
                }
                extendResolverArgs(e) {
                    return {};
                }
                cloneRequestOrGetFromCache(e) {
                    let t = r.cache.get(e);
                    if (void 0 !== t) return t;
                    let a = e.clone();
                    return r.cache.set(e, a), a;
                }
                async run(e) {
                    if (this.isUsed && this.options?.once) return null;
                    let t = this.cloneRequestOrGetFromCache(e.request),
                        a = await this.parse({ request: e.request, resolutionContext: e.resolutionContext });
                    if (!(await this.predicate({ request: e.request, parsedResult: a, resolutionContext: e.resolutionContext })) || (this.isUsed && this.options?.once))
                        return null;
                    this.isUsed = !0;
                    let o = this.wrapResolver(this.resolver)({
                            ...this.extendResolverArgs({ request: e.request, parsedResult: a }),
                            requestId: e.requestId,
                            request: e.request,
                        }).catch((e) => {
                            if (e instanceof Response) return e;
                            throw e;
                        }),
                        s = await o;
                    return this.createExecutionResult({ request: t, requestId: e.requestId, response: s, parsedResult: a });
                }
                wrapResolver(e) {
                    return async (t) => {
                        if (!this.resolverIterator) {
                            let a = await e(t);
                            if (!(a && (Reflect.has(a, Symbol.iterator) || Reflect.has(a, Symbol.asyncIterator)))) return a;
                            this.resolverIterator = Symbol.iterator in a ? a[Symbol.iterator]() : a[Symbol.asyncIterator]();
                        }
                        this.isUsed = !1;
                        let { done: a, value: o } = await this.resolverIterator.next(),
                            s = await o;
                        return (s && (this.resolverIteratorResult = s.clone()), a) ? ((this.isUsed = !0), this.resolverIteratorResult?.clone()) : s;
                    };
                }
                createExecutionResult(e) {
                    return { handler: this, request: e.request, requestId: e.requestId, response: e.response, parsedResult: e.parsedResult };
                }
            }
        },
        75643: (e, t, a) => {
            a.d(t, { GP: () => s, V1: () => i });
            var o = /(%?)(%([sdijo]))/g;
            function s(e, ...t) {
                if (0 === t.length) return e;
                let a = 0,
                    r = e.replace(o, (e, o, s, r) => {
                        let i = (function (e, t) {
                            switch (t) {
                                case 's':
                                    return e;
                                case 'd':
                                case 'i':
                                    return Number(e);
                                case 'j':
                                    return JSON.stringify(e);
                                case 'o': {
                                    if ('string' == typeof e) return e;
                                    let t = JSON.stringify(e);
                                    if ('{}' === t || '[]' === t || /^\[object .+?\]$/.test(t)) return e;
                                    return t;
                                }
                            }
                        })(t[a], r);
                        return o ? e : (a++, i);
                    });
                return a < t.length && (r += ` ${t.slice(a).join(' ')}`), (r = r.replace(/%{2,2}/g, '%'));
            }
            var r = class extends Error {
                    constructor(e, ...t) {
                        super(e),
                            (this.message = e),
                            (this.name = 'Invariant Violation'),
                            (this.message = s(e, ...t)),
                            (function (e) {
                                if (!e.stack) return;
                                let t = e.stack.split('\n');
                                t.splice(1, 2), (e.stack = t.join('\n'));
                            })(this);
                    }
                },
                i = (e, t, ...a) => {
                    if (!e) throw new r(t, ...a);
                };
            i.as = (e, t, a, ...o) => {
                if (!t) {
                    let t,
                        r = 0 === o.length ? a : s(a, ...o);
                    try {
                        t = Reflect.construct(e, [r]);
                    } catch (a) {
                        t = e(r);
                    }
                    throw t;
                }
            };
        },
        77810: (e, t, a) => {
            a.d(t, { A: () => m });
            var o = Object.create,
                s = Object.defineProperty,
                r = Object.getOwnPropertyDescriptor,
                i = Object.getOwnPropertyNames,
                n = Object.getPrototypeOf,
                l = Object.prototype.hasOwnProperty,
                u = (e, t) =>
                    function () {
                        return t || (0, e[i(e)[0]])((t = { exports: {} }).exports, t), t.exports;
                    },
                c = u({
                    'node_modules/.pnpm/statuses@2.0.2/node_modules/statuses/codes.json'(e, t) {
                        t.exports = {
                            100: 'Continue',
                            101: 'Switching Protocols',
                            102: 'Processing',
                            103: 'Early Hints',
                            200: 'OK',
                            201: 'Created',
                            202: 'Accepted',
                            203: 'Non-Authoritative Information',
                            204: 'No Content',
                            205: 'Reset Content',
                            206: 'Partial Content',
                            207: 'Multi-Status',
                            208: 'Already Reported',
                            226: 'IM Used',
                            300: 'Multiple Choices',
                            301: 'Moved Permanently',
                            302: 'Found',
                            303: 'See Other',
                            304: 'Not Modified',
                            305: 'Use Proxy',
                            307: 'Temporary Redirect',
                            308: 'Permanent Redirect',
                            400: 'Bad Request',
                            401: 'Unauthorized',
                            402: 'Payment Required',
                            403: 'Forbidden',
                            404: 'Not Found',
                            405: 'Method Not Allowed',
                            406: 'Not Acceptable',
                            407: 'Proxy Authentication Required',
                            408: 'Request Timeout',
                            409: 'Conflict',
                            410: 'Gone',
                            411: 'Length Required',
                            412: 'Precondition Failed',
                            413: 'Payload Too Large',
                            414: 'URI Too Long',
                            415: 'Unsupported Media Type',
                            416: 'Range Not Satisfiable',
                            417: 'Expectation Failed',
                            418: "I'm a Teapot",
                            421: 'Misdirected Request',
                            422: 'Unprocessable Entity',
                            423: 'Locked',
                            424: 'Failed Dependency',
                            425: 'Too Early',
                            426: 'Upgrade Required',
                            428: 'Precondition Required',
                            429: 'Too Many Requests',
                            431: 'Request Header Fields Too Large',
                            451: 'Unavailable For Legal Reasons',
                            500: 'Internal Server Error',
                            501: 'Not Implemented',
                            502: 'Bad Gateway',
                            503: 'Service Unavailable',
                            504: 'Gateway Timeout',
                            505: 'HTTP Version Not Supported',
                            506: 'Variant Also Negotiates',
                            507: 'Insufficient Storage',
                            508: 'Loop Detected',
                            509: 'Bandwidth Limit Exceeded',
                            510: 'Not Extended',
                            511: 'Network Authentication Required',
                        };
                    },
                }),
                d = ((e, t, a) =>
                    ((e, t, a, o) => {
                        if ((t && 'object' == typeof t) || 'function' == typeof t)
                            for (let a of i(t)) l.call(e, a) || void 0 === a || s(e, a, { get: () => t[a], enumerable: !(o = r(t, a)) || o.enumerable });
                        return e;
                    })(s((a = null != e ? o(n(e)) : {}), 'default', { value: e, enumerable: !0 }), e))(
                    u({
                        'node_modules/.pnpm/statuses@2.0.2/node_modules/statuses/index.js'(e, t) {
                            var a,
                                o,
                                s = c();
                            function r(e) {
                                if (!Object.prototype.hasOwnProperty.call(i.message, e)) throw Error('invalid status code: ' + e);
                                return i.message[e];
                            }
                            function i(e) {
                                if ('number' == typeof e) return r(e);
                                if ('string' != typeof e) throw TypeError('code must be a number or string');
                                var t = parseInt(e, 10);
                                if (!isNaN(t)) return r(t);
                                var a = e.toLowerCase();
                                if (!Object.prototype.hasOwnProperty.call(i.code, a)) throw Error('invalid status message: "' + e + '"');
                                return i.code[a];
                            }
                            (t.exports = i),
                                (i.message = s),
                                (o = {}),
                                Object.keys((a = s)).forEach(function (e) {
                                    var t = a[e],
                                        s = Number(e);
                                    o[t.toLowerCase()] = s;
                                }),
                                (i.code = o),
                                (i.codes = Object.keys(s).map(function (e) {
                                    return Number(e);
                                })),
                                (i.redirect = { 300: !0, 301: !0, 302: !0, 303: !0, 305: !0, 307: !0, 308: !0 }),
                                (i.empty = { 204: !0, 205: !0, 304: !0 }),
                                (i.retry = { 502: !0, 503: !0, 504: !0 });
                        },
                    })(),
                    0,
                ),
                h = d.default || d;
            h.message;
            var m = h;
        },
        78573: (e, t, a) => {
            a.d(t, { c$: () => C, VK: () => E, S7: () => S, r_: () => O });
            var o = a(72038),
                s = a(75643),
                r = a(49124),
                i = Object.defineProperty,
                n = {};
            function l(e) {
                return `\x1b[33m${e}\x1b[0m`;
            }
            function u(e) {
                return `\x1b[34m${e}\x1b[0m`;
            }
            function c(e) {
                return `\x1b[90m${e}\x1b[0m`;
            }
            function d(e) {
                return `\x1b[31m${e}\x1b[0m`;
            }
            function h(e) {
                return `\x1b[32m${e}\x1b[0m`;
            }
            ((e, t) => {
                for (var a in t) i(e, a, { get: t[a], enumerable: !0 });
            })(n, { blue: () => u, gray: () => c, green: () => h, red: () => d, yellow: () => l });
            var m = (0, o.S)(),
                p = class {
                    constructor(e) {
                        (this.name = e), (this.prefix = `[${this.name}]`);
                        let t = v('DEBUG'),
                            a = v('LOG_LEVEL');
                        '1' === t || 'true' === t || (void 0 !== t && this.name.startsWith(t))
                            ? ((this.debug = w(a, 'debug') ? f : this.debug),
                              (this.info = w(a, 'info') ? f : this.info),
                              (this.success = w(a, 'success') ? f : this.success),
                              (this.warning = w(a, 'warning') ? f : this.warning),
                              (this.error = w(a, 'error') ? f : this.error))
                            : ((this.info = f), (this.success = f), (this.warning = f), (this.error = f), (this.only = f));
                    }
                    prefix;
                    extend(e) {
                        return new p(`${this.name}:${e}`);
                    }
                    debug(e, ...t) {
                        this.logEntry({ level: 'debug', message: c(e), positionals: t, prefix: this.prefix, colors: { prefix: 'gray' } });
                    }
                    info(e, ...t) {
                        this.logEntry({ level: 'info', message: e, positionals: t, prefix: this.prefix, colors: { prefix: 'blue' } });
                        let a = new g();
                        return (e, ...t) => {
                            a.measure(),
                                this.logEntry({
                                    level: 'info',
                                    message: `${e} ${c(`${a.deltaTime}ms`)}`,
                                    positionals: t,
                                    prefix: this.prefix,
                                    colors: { prefix: 'blue' },
                                });
                        };
                    }
                    success(e, ...t) {
                        this.logEntry({ level: 'info', message: e, positionals: t, prefix: `\u2714 ${this.prefix}`, colors: { timestamp: 'green', prefix: 'green' } });
                    }
                    warning(e, ...t) {
                        this.logEntry({
                            level: 'warning',
                            message: e,
                            positionals: t,
                            prefix: `\u26A0 ${this.prefix}`,
                            colors: { timestamp: 'yellow', prefix: 'yellow' },
                        });
                    }
                    error(e, ...t) {
                        this.logEntry({ level: 'error', message: e, positionals: t, prefix: `\u2716 ${this.prefix}`, colors: { timestamp: 'red', prefix: 'red' } });
                    }
                    only(e) {
                        e();
                    }
                    createEntry(e, t) {
                        return { timestamp: new Date(), level: e, message: t };
                    }
                    logEntry(e) {
                        let { level: t, message: a, prefix: o, colors: s, positionals: r = [] } = e,
                            i = this.createEntry(t, a),
                            l = s?.timestamp || 'gray',
                            u = s?.prefix || 'gray',
                            c = { timestamp: n[l], prefix: n[u] };
                        this.getWriter(t)(
                            [c.timestamp(this.formatTimestamp(i.timestamp))]
                                .concat(null != o ? c.prefix(o) : [])
                                .concat(x(a))
                                .join(' '),
                            ...r.map(x),
                        );
                    }
                    formatTimestamp(e) {
                        return `${e.toLocaleTimeString('en-GB')}:${e.getMilliseconds()}`;
                    }
                    getWriter(e) {
                        switch (e) {
                            case 'debug':
                            case 'success':
                            case 'info':
                                return k;
                            case 'warning':
                                return b;
                            case 'error':
                                return y;
                        }
                    }
                },
                g = class {
                    startTime;
                    endTime;
                    deltaTime;
                    constructor() {
                        this.startTime = performance.now();
                    }
                    measure() {
                        this.endTime = performance.now();
                        let e = this.endTime - this.startTime;
                        this.deltaTime = e.toFixed(2);
                    }
                },
                f = () => void 0;
            function k(e, ...t) {
                if (m) return void r.stdout.write((0, s.GP)(e, ...t) + '\n');
                console.log(e, ...t);
            }
            function b(e, ...t) {
                if (m) return void r.stderr.write((0, s.GP)(e, ...t) + '\n');
                console.warn(e, ...t);
            }
            function y(e, ...t) {
                if (m) return void r.stderr.write((0, s.GP)(e, ...t) + '\n');
                console.error(e, ...t);
            }
            function v(e) {
                return m ? r.env[e] : globalThis[e]?.toString();
            }
            function w(e, t) {
                return void 0 !== e && e !== t;
            }
            function x(e) {
                return void 0 === e ? 'undefined' : null === e ? 'null' : 'string' == typeof e ? e : 'object' == typeof e ? JSON.stringify(e) : e.toString();
            }
            var j = a(56157),
                S = (e, t, a) => {
                    if (!t.has(e)) throw TypeError('Cannot read from private field');
                    return a ? a.call(e) : t.get(e);
                },
                E = (e, t, a) => {
                    if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
                    t instanceof WeakSet ? t.add(e) : t.set(e, a);
                };
            function z(e) {
                return globalThis[e] || void 0;
            }
            var q = ((e) => ((e.INACTIVE = 'INACTIVE'), (e.APPLYING = 'APPLYING'), (e.APPLIED = 'APPLIED'), (e.DISPOSING = 'DISPOSING'), (e.DISPOSED = 'DISPOSED'), e))(
                    q || {},
                ),
                C = class {
                    constructor(e) {
                        (this.symbol = e),
                            (this.readyState = 'INACTIVE'),
                            (this.emitter = new j.v()),
                            (this.subscriptions = []),
                            (this.logger = new p(e.description)),
                            this.emitter.setMaxListeners(0),
                            this.logger.info('constructing the interceptor...');
                    }
                    checkEnvironment() {
                        return !0;
                    }
                    apply() {
                        let e = this.logger.extend('apply');
                        if ((e.info('applying the interceptor...'), 'APPLIED' === this.readyState)) return void e.info('intercepted already applied!');
                        if (!this.checkEnvironment()) return void e.info('the interceptor cannot be applied in this environment!');
                        this.readyState = 'APPLYING';
                        let t = this.getInstance();
                        if (t) {
                            e.info('found a running instance, reusing...'),
                                (this.on = (a, o) => (
                                    e.info('proxying the "%s" listener', a),
                                    t.emitter.addListener(a, o),
                                    this.subscriptions.push(() => {
                                        t.emitter.removeListener(a, o), e.info('removed proxied "%s" listener!', a);
                                    }),
                                    this
                                )),
                                (this.readyState = 'APPLIED');
                            return;
                        }
                        e.info('no running instance found, setting up a new instance...'), this.setup(), this.setInstance(), (this.readyState = 'APPLIED');
                    }
                    setup() {}
                    on(e, t) {
                        let a = this.logger.extend('on');
                        return (
                            'DISPOSING' === this.readyState || 'DISPOSED' === this.readyState
                                ? a.info('cannot listen to events, already disposed!')
                                : (a.info('adding "%s" event listener:', e, t), this.emitter.on(e, t)),
                            this
                        );
                    }
                    once(e, t) {
                        return this.emitter.once(e, t), this;
                    }
                    off(e, t) {
                        return this.emitter.off(e, t), this;
                    }
                    removeAllListeners(e) {
                        return this.emitter.removeAllListeners(e), this;
                    }
                    dispose() {
                        let e = this.logger.extend('dispose');
                        if ('DISPOSED' === this.readyState) return void e.info('cannot dispose, already disposed!');
                        if ((e.info('disposing the interceptor...'), (this.readyState = 'DISPOSING'), !this.getInstance()))
                            return void e.info('no interceptors running, skipping dispose...');
                        if ((this.clearInstance(), e.info('global symbol deleted:', z(this.symbol)), this.subscriptions.length > 0)) {
                            for (let t of (e.info('disposing of %d subscriptions...', this.subscriptions.length), this.subscriptions)) t();
                            (this.subscriptions = []), e.info('disposed of all subscriptions!', this.subscriptions.length);
                        }
                        this.emitter.removeAllListeners(), e.info('destroyed the listener!'), (this.readyState = 'DISPOSED');
                    }
                    getInstance() {
                        var e;
                        let t = z(this.symbol);
                        return this.logger.info('retrieved global instance:', null == (e = null == t ? void 0 : t.constructor) ? void 0 : e.name), t;
                    }
                    setInstance() {
                        var e;
                        (e = this.symbol), (globalThis[e] = this), this.logger.info('set global instance!', this.symbol.description);
                    }
                    clearInstance() {
                        var e;
                        (e = this.symbol), delete globalThis[e], this.logger.info('cleared global instance!', this.symbol.description);
                    }
                };
            function O() {
                return Math.random().toString(16).slice(2);
            }
        },
        80436: (e, t, a) => {
            a.d(t, { Aj: () => h, bf: () => p }), new TextEncoder();
            var o,
                s,
                r = a(78573),
                i = a(4672),
                n = a(75643);
            Symbol('isPatchedModule');
            var l = class extends Error {
                    constructor(e) {
                        super(e), (this.name = 'InterceptorError'), Object.setPrototypeOf(this, l.prototype);
                    }
                },
                u = class {
                    constructor(e, t) {
                        (this.request = e), (this.source = t), (0, r.VK)(this, o), (this.readyState = u.PENDING), (this.handled = new i.Z());
                    }
                    async passthrough() {
                        n.V1.as(
                            l,
                            this.readyState === u.PENDING,
                            'Failed to passthrough the "%s %s" request: the request has already been handled',
                            this.request.method,
                            this.request.url,
                        ),
                            (this.readyState = u.PASSTHROUGH),
                            await this.source.passthrough(),
                            (0, r.S7)(this, o, s).resolve();
                    }
                    respondWith(e) {
                        n.V1.as(
                            l,
                            this.readyState === u.PENDING,
                            'Failed to respond to the "%s %s" request with "%d %s": the request has already been handled (%d)',
                            this.request.method,
                            this.request.url,
                            e.status,
                            e.statusText || 'OK',
                            this.readyState,
                        ),
                            (this.readyState = u.RESPONSE),
                            (0, r.S7)(this, o, s).resolve(),
                            this.source.respondWith(e);
                    }
                    errorWith(e) {
                        n.V1.as(
                            l,
                            this.readyState === u.PENDING,
                            'Failed to error the "%s %s" request with "%s": the request has already been handled (%d)',
                            this.request.method,
                            this.request.url,
                            null == e ? void 0 : e.toString(),
                            this.readyState,
                        ),
                            (this.readyState = u.ERROR),
                            this.source.errorWith(e),
                            (0, r.S7)(this, o, s).resolve();
                    }
                };
            function c(e, t) {
                let a = Object.getOwnPropertySymbols(t).find((t) => t.description === e);
                if (a) return Reflect.get(t, a);
            }
            (o = new WeakSet()),
                (s = function () {
                    return this.handled;
                }),
                (u.PENDING = 0),
                (u.PASSTHROUGH = 1),
                (u.RESPONSE = 2),
                (u.ERROR = 3);
            var d = class extends Response {
                    static isConfigurableStatusCode(e) {
                        return e >= 200 && e <= 599;
                    }
                    static isRedirectResponse(e) {
                        return d.STATUS_CODES_WITH_REDIRECT.includes(e);
                    }
                    static isResponseWithBody(e) {
                        return !d.STATUS_CODES_WITHOUT_BODY.includes(e);
                    }
                    static setUrl(e, t) {
                        if (
                            !e ||
                            'about:' === e ||
                            !(function (e) {
                                try {
                                    return new URL(e), !0;
                                } catch (e) {
                                    return !1;
                                }
                            })(e)
                        )
                            return;
                        let a = c('state', t);
                        a ? a.urlList.push(new URL(e)) : Object.defineProperty(t, 'url', { value: e, enumerable: !0, configurable: !0, writable: !1 });
                    }
                    static parseRawHeaders(e) {
                        let t = new Headers();
                        for (let a = 0; a < e.length; a += 2) t.append(e[a], e[a + 1]);
                        return t;
                    }
                    constructor(e, t = {}) {
                        var a;
                        let o = null != (a = t.status) ? a : 200,
                            s = d.isConfigurableStatusCode(o) ? o : 200;
                        if ((super(d.isResponseWithBody(o) ? e : null, { status: s, statusText: t.statusText, headers: t.headers }), o !== s)) {
                            let e = c('state', this);
                            e ? (e.status = o) : Object.defineProperty(this, 'status', { value: o, enumerable: !0, configurable: !0, writable: !1 });
                        }
                        d.setUrl(t.url, this);
                    }
                },
                h = d;
            (h.STATUS_CODES_WITHOUT_BODY = [101, 103, 204, 205, 304]), (h.STATUS_CODES_WITH_REDIRECT = [301, 302, 303, 307, 308]), Symbol('kRawRequest');
            var m = class extends r.c$ {
                constructor(e) {
                    (m.symbol = Symbol(e.name)), super(m.symbol), (this.interceptors = e.interceptors);
                }
                setup() {
                    let e = this.logger.extend('setup');
                    for (let t of (e.info('applying all %d interceptors...', this.interceptors.length), this.interceptors))
                        e.info('applying "%s" interceptor...', t.constructor.name),
                            t.apply(),
                            e.info('adding interceptor dispose subscription'),
                            this.subscriptions.push(() => t.dispose());
                }
                on(e, t) {
                    for (let a of this.interceptors) a.on(e, t);
                    return this;
                }
                once(e, t) {
                    for (let a of this.interceptors) a.once(e, t);
                    return this;
                }
                off(e, t) {
                    for (let a of this.interceptors) a.off(e, t);
                    return this;
                }
                removeAllListeners(e) {
                    for (let t of this.interceptors) t.removeAllListeners(e);
                    return this;
                }
            };
            function p(e, t = !0) {
                return [t && e.origin, e.pathname].filter(Boolean).join('');
            }
        },
        81931: (e, t, a) => {
            a.d(t, { k: () => tx });
            var o,
                s,
                r = a(71249),
                i = a(75562);
            async function n(e) {
                try {
                    return [
                        null,
                        await e().catch((e) => {
                            throw e;
                        }),
                    ];
                } catch (e) {
                    return [e, null];
                }
            }
            let l = async ({ request: e, requestId: t, handlers: a, resolutionContext: o }) => {
                let s = null,
                    r = null;
                for (let i of a) if ((null !== (r = await i.run({ request: e, requestId: t, resolutionContext: o })) && (s = i), r?.response)) break;
                return s ? { handler: s, parsedResult: r?.parsedResult, response: r?.response } : null;
            };
            var u = a(54182);
            async function c(e, t = 'warn') {
                let a = new URL(e.url),
                    o = (0, u.e)(a) + a.search,
                    s = 'HEAD' === e.method || 'GET' === e.method ? null : await e.clone().text(),
                    i = `

  \u2022 ${e.method} ${o}

${
    s
        ? `  \u2022 Request body: ${s}

`
        : ''
}`,
                    n = `intercepted a request without a matching request handler:${i}If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests`;
                function l(e) {
                    switch (e) {
                        case 'error':
                            throw (
                                (r.J.error('Error: %s', n),
                                new r.G(r.J.formatMessage('Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.')))
                            );
                        case 'warn':
                            r.J.warn('Warning: %s', n);
                            break;
                        case 'bypass':
                            break;
                        default:
                            throw new r.G(
                                r.J.formatMessage(
                                    'Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',
                                    e,
                                ),
                            );
                    }
                }
                if ('function' == typeof t) return void t(e, { warning: l.bind(null, 'warn'), error: l.bind(null, 'error') });
                !(function (e) {
                    let t = new URL(e.url);
                    return (
                        !!('file:' === t.protocol || /(fonts\.googleapis\.com)/.test(t.hostname) || /node_modules/.test(t.pathname) || t.pathname.includes('@vite')) ||
                        /\.(s?css|less|m?jsx?|m?tsx?|html|ttf|otf|woff|woff2|eot|gif|jpe?g|png|avif|webp|svg|mp4|webm|ogg|mov|mp3|wav|ogg|flac|aac|pdf|txt|csv|json|xml|md|zip|tar|gz|rar|7z)$/i.test(
                            t.pathname,
                        )
                    );
                })(e) && l(t);
            }
            var d = a(2488),
                h = a(67519);
            async function m(e, t) {
                let a = Reflect.get(t, h.sz);
                a && (await d.C.setCookie(a, e.url));
            }
            async function p(e, t, a, o, s, r) {
                if ((s.emit('request:start', { request: e, requestId: t }), e.headers.get('accept')?.includes('msw/passthrough'))) {
                    s.emit('request:end', { request: e, requestId: t }), r?.onPassthroughResponse?.(e);
                    return;
                }
                let [i, u] = await n(() => l({ request: e, requestId: t, handlers: a, resolutionContext: r?.resolutionContext }));
                if (i) throw (s.emit('unhandledException', { error: i, request: e, requestId: t }), i);
                if (!u) {
                    await c(e, o.onUnhandledRequest),
                        s.emit('request:unhandled', { request: e, requestId: t }),
                        s.emit('request:end', { request: e, requestId: t }),
                        r?.onPassthroughResponse?.(e);
                    return;
                }
                let { response: d } = u;
                if (!d || (302 === d.status && 'passthrough' === d.headers.get('x-msw-intention'))) {
                    s.emit('request:end', { request: e, requestId: t }), r?.onPassthroughResponse?.(e);
                    return;
                }
                return (
                    await m(e, d),
                    s.emit('request:match', { request: e, requestId: t }),
                    r?.onMockedResponse?.(d, u),
                    s.emit('request:end', { request: e, requestId: t }),
                    d
                );
            }
            function g(e) {
                return (t) => null != t && 'object' == typeof t && '__kind' in t && t.__kind === e;
            }
            var f = a(75643),
                k = a(56157);
            class b {
                subscriptions = [];
                dispose() {
                    let e;
                    for (; (e = this.subscriptions.shift()); ) e();
                }
            }
            class y {
                constructor(e) {
                    (this.initialHandlers = e), (this.handlers = [...e]);
                }
                handlers;
                prepend(e) {
                    this.handlers.unshift(...e);
                }
                reset(e) {
                    this.handlers = e.length > 0 ? [...e] : [...this.initialHandlers];
                }
                currentHandlers() {
                    return this.handlers;
                }
            }
            class v extends b {
                handlersController;
                emitter;
                publicEmitter;
                events;
                constructor(...e) {
                    super(),
                        (0, f.V1)(
                            this.validateHandlers(e),
                            r.J.formatMessage('Failed to apply given request handlers: invalid input. Did you forget to spread the request handlers Array?'),
                        ),
                        (this.handlersController = new y(e)),
                        (this.emitter = new k.v()),
                        (this.publicEmitter = new k.v()),
                        (function (e, t) {
                            let a = e.emit;
                            if (a._isPiped) return;
                            let o = function (e, ...o) {
                                return t.emit(e, ...o), a.call(this, e, ...o);
                            };
                            (o._isPiped = !0), (e.emit = o);
                        })(this.emitter, this.publicEmitter),
                        (this.events = this.createLifeCycleEvents()),
                        this.subscriptions.push(() => {
                            this.emitter.removeAllListeners(), this.publicEmitter.removeAllListeners();
                        });
                }
                validateHandlers(e) {
                    return e.every((e) => !Array.isArray(e));
                }
                use(...e) {
                    (0, f.V1)(
                        this.validateHandlers(e),
                        r.J.formatMessage(
                            'Failed to call "use()" with the given request handlers: invalid input. Did you forget to spread the array of request handlers?',
                        ),
                    ),
                        this.handlersController.prepend(e);
                }
                restoreHandlers() {
                    this.handlersController.currentHandlers().forEach((e) => {
                        'isUsed' in e && (e.isUsed = !1);
                    });
                }
                resetHandlers(...e) {
                    this.handlersController.reset(e);
                }
                listHandlers() {
                    let e = [...this.handlersController.currentHandlers()];
                    return Object.freeze(e), e;
                }
                createLifeCycleEvents() {
                    return {
                        on: (...e) => this.publicEmitter.on(...e),
                        removeListener: (...e) => this.publicEmitter.removeListener(...e),
                        removeAllListeners: (...e) => this.publicEmitter.removeAllListeners(...e),
                    };
                }
            }
            function w(e) {
                return null != e && 'object' == typeof e && !Array.isArray(e);
            }
            async function x(e, t, ...a) {
                let o = e.listeners(t);
                if (0 !== o.length) for (let t of o) await t.apply(e, a);
            }
            var j = a(78573),
                S = a(4672);
            function E(e, t) {
                return Object.defineProperties(t, { target: { value: e, enumerable: !0, writable: !0 }, currentTarget: { value: e, enumerable: !0, writable: !0 } }), t;
            }
            var z = Symbol('kCancelable'),
                q = Symbol('kDefaultPrevented'),
                C = class extends MessageEvent {
                    constructor(e, t) {
                        super(e, t), (this[z] = !!t.cancelable), (this[q] = !1);
                    }
                    get cancelable() {
                        return this[z];
                    }
                    set cancelable(e) {
                        this[z] = e;
                    }
                    get defaultPrevented() {
                        return this[q];
                    }
                    set defaultPrevented(e) {
                        this[q] = e;
                    }
                    preventDefault() {
                        this.cancelable && !this[q] && (this[q] = !0);
                    }
                },
                O = class extends Event {
                    constructor(e, t = {}) {
                        super(e, t),
                            (this.code = void 0 === t.code ? 0 : t.code),
                            (this.reason = void 0 === t.reason ? '' : t.reason),
                            (this.wasClean = void 0 !== t.wasClean && t.wasClean);
                    }
                },
                T = class extends O {
                    constructor(e, t = {}) {
                        super(e, t), (this[z] = !!t.cancelable), (this[q] = !1);
                    }
                    get cancelable() {
                        return this[z];
                    }
                    set cancelable(e) {
                        this[z] = e;
                    }
                    get defaultPrevented() {
                        return this[q];
                    }
                    set defaultPrevented(e) {
                        this[q] = e;
                    }
                    preventDefault() {
                        this.cancelable && !this[q] && (this[q] = !0);
                    }
                },
                P = Symbol('kEmitter'),
                L = Symbol('kBoundListener'),
                A = class {
                    constructor(e, t) {
                        (this.socket = e),
                            (this.transport = t),
                            (this.id = (0, j.r_)()),
                            (this.url = new URL(e.url)),
                            (this[P] = new EventTarget()),
                            this.transport.addEventListener('outgoing', (e) => {
                                let t = E(this.socket, new C('message', { data: e.data, origin: e.origin, cancelable: !0 }));
                                this[P].dispatchEvent(t), t.defaultPrevented && e.preventDefault();
                            }),
                            this.transport.addEventListener('close', (e) => {
                                this[P].dispatchEvent(E(this.socket, new O('close', e)));
                            });
                    }
                    addEventListener(e, t, a) {
                        if (!Reflect.has(t, L)) {
                            let e = t.bind(this.socket);
                            Object.defineProperty(t, L, { value: e, enumerable: !1, configurable: !1 });
                        }
                        this[P].addEventListener(e, Reflect.get(t, L), a);
                    }
                    removeEventListener(e, t, a) {
                        this[P].removeEventListener(e, Reflect.get(t, L), a);
                    }
                    send(e) {
                        this.transport.send(e);
                    }
                    close(e, t) {
                        this.transport.close(e, t);
                    }
                },
                R = 'InvalidAccessError: close code out of user configurable range',
                I = Symbol('kPassthroughPromise'),
                D = Symbol('kOnSend'),
                N = Symbol('kClose'),
                $ = class extends EventTarget {
                    constructor(e, t) {
                        super(),
                            (this.CONNECTING = 0),
                            (this.OPEN = 1),
                            (this.CLOSING = 2),
                            (this.CLOSED = 3),
                            (this._onopen = null),
                            (this._onmessage = null),
                            (this._onerror = null),
                            (this._onclose = null),
                            (this.url = e.toString()),
                            (this.protocol = ''),
                            (this.extensions = ''),
                            (this.binaryType = 'blob'),
                            (this.readyState = this.CONNECTING),
                            (this.bufferedAmount = 0),
                            (this[I] = new S.Z()),
                            queueMicrotask(async () => {
                                (await this[I]) ||
                                    ((this.protocol = 'string' == typeof t ? t : Array.isArray(t) && t.length > 0 ? t[0] : ''),
                                    this.readyState === this.CONNECTING && ((this.readyState = this.OPEN), this.dispatchEvent(E(this, new Event('open')))));
                            });
                    }
                    set onopen(e) {
                        this.removeEventListener('open', this._onopen), (this._onopen = e), null !== e && this.addEventListener('open', e);
                    }
                    get onopen() {
                        return this._onopen;
                    }
                    set onmessage(e) {
                        this.removeEventListener('message', this._onmessage), (this._onmessage = e), null !== e && this.addEventListener('message', e);
                    }
                    get onmessage() {
                        return this._onmessage;
                    }
                    set onerror(e) {
                        this.removeEventListener('error', this._onerror), (this._onerror = e), null !== e && this.addEventListener('error', e);
                    }
                    get onerror() {
                        return this._onerror;
                    }
                    set onclose(e) {
                        this.removeEventListener('close', this._onclose), (this._onclose = e), null !== e && this.addEventListener('close', e);
                    }
                    get onclose() {
                        return this._onclose;
                    }
                    send(e) {
                        var t;
                        if (this.readyState === this.CONNECTING) throw (this.close(), new DOMException('InvalidStateError'));
                        this.readyState !== this.CLOSING &&
                            this.readyState !== this.CLOSED &&
                            ((this.bufferedAmount += 'string' == typeof (t = e) ? t.length : t instanceof Blob ? t.size : t.byteLength),
                            queueMicrotask(() => {
                                var t;
                                (this.bufferedAmount = 0), null == (t = this[D]) || t.call(this, e);
                            }));
                    }
                    close(e = 1e3, t) {
                        (0, f.V1)(e, R), (0, f.V1)(1e3 === e || (e >= 3e3 && e <= 4999), R), this[N](e, t);
                    }
                    [N](e = 1e3, t, a = !0) {
                        this.readyState !== this.CLOSING &&
                            this.readyState !== this.CLOSED &&
                            ((this.readyState = this.CLOSING),
                            queueMicrotask(() => {
                                (this.readyState = this.CLOSED),
                                    this.dispatchEvent(E(this, new O('close', { code: e, reason: t, wasClean: a }))),
                                    (this._onopen = null),
                                    (this._onmessage = null),
                                    (this._onerror = null),
                                    (this._onclose = null);
                            }));
                    }
                    addEventListener(e, t, a) {
                        return super.addEventListener(e, t, a);
                    }
                    removeEventListener(e, t, a) {
                        return super.removeEventListener(e, t, a);
                    }
                };
            ($.CONNECTING = 0), ($.OPEN = 1), ($.CLOSING = 2), ($.CLOSED = 3);
            var M = Symbol('kEmitter'),
                W = Symbol('kBoundListener'),
                U = Symbol('kSend'),
                H = class {
                    constructor(e, t, a) {
                        (this.client = e),
                            (this.transport = t),
                            (this.createConnection = a),
                            (this[M] = new EventTarget()),
                            (this.mockCloseController = new AbortController()),
                            (this.realCloseController = new AbortController()),
                            this.transport.addEventListener('outgoing', (e) => {
                                void 0 !== this.realWebSocket &&
                                    queueMicrotask(() => {
                                        e.defaultPrevented || this[U](e.data);
                                    });
                            }),
                            this.transport.addEventListener('incoming', this.handleIncomingMessage.bind(this));
                    }
                    get socket() {
                        return (
                            (0, f.V1)(
                                this.realWebSocket,
                                'Cannot access "socket" on the original WebSocket server object: the connection is not open. Did you forget to call `server.connect()`?',
                            ),
                            this.realWebSocket
                        );
                    }
                    connect() {
                        (0, f.V1)(
                            !this.realWebSocket || this.realWebSocket.readyState !== WebSocket.OPEN,
                            'Failed to call "connect()" on the original WebSocket instance: the connection already open',
                        );
                        let e = this.createConnection();
                        (e.binaryType = this.client.binaryType),
                            e.addEventListener(
                                'open',
                                (e) => {
                                    this[M].dispatchEvent(E(this.realWebSocket, new Event('open', e)));
                                },
                                { once: !0 },
                            ),
                            e.addEventListener('message', (e) => {
                                this.transport.dispatchEvent(E(this.realWebSocket, new MessageEvent('incoming', { data: e.data, origin: e.origin })));
                            }),
                            this.client.addEventListener(
                                'close',
                                (e) => {
                                    this.handleMockClose(e);
                                },
                                { signal: this.mockCloseController.signal },
                            ),
                            e.addEventListener(
                                'close',
                                (e) => {
                                    this.handleRealClose(e);
                                },
                                { signal: this.realCloseController.signal },
                            ),
                            e.addEventListener('error', () => {
                                let t = E(e, new Event('error', { cancelable: !0 }));
                                this[M].dispatchEvent(t), t.defaultPrevented || this.client.dispatchEvent(E(this.client, new Event('error')));
                            }),
                            (this.realWebSocket = e);
                    }
                    addEventListener(e, t, a) {
                        if (!Reflect.has(t, W)) {
                            let e = t.bind(this.client);
                            Object.defineProperty(t, W, { value: e, enumerable: !1 });
                        }
                        this[M].addEventListener(e, Reflect.get(t, W), a);
                    }
                    removeEventListener(e, t, a) {
                        this[M].removeEventListener(e, Reflect.get(t, W), a);
                    }
                    send(e) {
                        this[U](e);
                    }
                    [U](e) {
                        let { realWebSocket: t } = this;
                        if (
                            ((0, f.V1)(
                                t,
                                'Failed to call "server.send()" for "%s": the connection is not open. Did you forget to call "server.connect()"?',
                                this.client.url,
                            ),
                            t.readyState !== WebSocket.CLOSING && t.readyState !== WebSocket.CLOSED)
                        ) {
                            if (t.readyState === WebSocket.CONNECTING)
                                return void t.addEventListener(
                                    'open',
                                    () => {
                                        t.send(e);
                                    },
                                    { once: !0 },
                                );
                            t.send(e);
                        }
                    }
                    close() {
                        let { realWebSocket: e } = this;
                        (0, f.V1)(
                            e,
                            'Failed to close server connection for "%s": the connection is not open. Did you forget to call "server.connect()"?',
                            this.client.url,
                        ),
                            this.realCloseController.abort(),
                            e.readyState !== WebSocket.CLOSING &&
                                e.readyState !== WebSocket.CLOSED &&
                                (e.close(),
                                queueMicrotask(() => {
                                    this[M].dispatchEvent(E(this.realWebSocket, new T('close', { code: 1e3, cancelable: !0 })));
                                }));
                    }
                    handleIncomingMessage(e) {
                        let t = E(e.target, new C('message', { data: e.data, origin: e.origin, cancelable: !0 }));
                        this[M].dispatchEvent(t),
                            t.defaultPrevented || this.client.dispatchEvent(E(this.client, new MessageEvent('message', { data: e.data, origin: e.origin })));
                    }
                    handleMockClose(e) {
                        this.realWebSocket && this.realWebSocket.close();
                    }
                    handleRealClose(e) {
                        this.mockCloseController.abort();
                        let t = E(this.realWebSocket, new T('close', { code: e.code, reason: e.reason, wasClean: e.wasClean, cancelable: !0 }));
                        this[M].dispatchEvent(t), t.defaultPrevented || this.client[N](e.code, e.reason);
                    }
                },
                _ = class extends EventTarget {
                    constructor(e) {
                        super(),
                            (this.socket = e),
                            this.socket.addEventListener('close', (e) => {
                                this.dispatchEvent(E(this.socket, new O('close', e)));
                            }),
                            (this.socket[D] = (e) => {
                                this.dispatchEvent(E(this.socket, new C('outgoing', { data: e, origin: this.socket.url, cancelable: !0 })));
                            });
                    }
                    addEventListener(e, t, a) {
                        return super.addEventListener(e, t, a);
                    }
                    dispatchEvent(e) {
                        return super.dispatchEvent(e);
                    }
                    send(e) {
                        queueMicrotask(() => {
                            if (this.socket.readyState === this.socket.CLOSING || this.socket.readyState === this.socket.CLOSED) return;
                            let t = () => {
                                this.socket.dispatchEvent(E(this.socket, new MessageEvent('message', { data: e, origin: this.socket.url })));
                            };
                            this.socket.readyState === this.socket.CONNECTING
                                ? this.socket.addEventListener(
                                      'open',
                                      () => {
                                          t();
                                      },
                                      { once: !0 },
                                  )
                                : t();
                        });
                    }
                    close(e, t) {
                        this.socket[N](e, t);
                    }
                },
                G = class extends j.c$ {
                    constructor() {
                        super(G.symbol);
                    }
                    checkEnvironment() {
                        var e = 'WebSocket';
                        let t = Object.getOwnPropertyDescriptor(globalThis, e);
                        return (
                            void 0 !== t &&
                            ('function' != typeof t.get || void 0 !== t.get()) &&
                            (void 0 !== t.get || null != t.value) &&
                            (void 0 !== t.set ||
                                !!t.configurable ||
                                (console.error(
                                    `[MSW] Failed to apply interceptor: the global \`${e}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`,
                                ),
                                !1))
                        );
                    }
                    setup() {
                        let e = Object.getOwnPropertyDescriptor(globalThis, 'WebSocket');
                        Object.defineProperty(globalThis, 'WebSocket', {
                            value: new Proxy(globalThis.WebSocket, {
                                construct: (e, t, a) => {
                                    let [o, s] = t,
                                        r = () => Reflect.construct(e, t, a),
                                        i = new $(o, s),
                                        n = new _(i);
                                    return (
                                        queueMicrotask(async () => {
                                            try {
                                                let e = new H(i, n, r),
                                                    t = this.emitter.listenerCount('connection') > 0;
                                                await x(this.emitter, 'connection', { client: new A(i, n), server: e, info: { protocols: s } }),
                                                    t
                                                        ? i[I].resolve(!1)
                                                        : (i[I].resolve(!0),
                                                          e.connect(),
                                                          e.addEventListener('open', () => {
                                                              i.dispatchEvent(E(i, new Event('open'))), e.realWebSocket && (i.protocol = e.realWebSocket.protocol);
                                                          }));
                                            } catch (e) {
                                                e instanceof Error &&
                                                    (i.dispatchEvent(new Event('error')),
                                                    i.readyState !== WebSocket.CLOSING && i.readyState !== WebSocket.CLOSED && i[N](1011, e.message, !1),
                                                    console.error(e));
                                            }
                                        }),
                                        i
                                    );
                                },
                            }),
                            configurable: !0,
                        }),
                            this.subscriptions.push(() => {
                                Object.defineProperty(globalThis, 'WebSocket', e);
                            });
                    }
                };
            G.symbol = Symbol('websocket');
            let F = new G();
            var B = a(36005);
            function J(e) {
                return e instanceof Blob ? e.size : w(e) && 'byteLength' in e ? e.byteLength : new Blob([e]).size;
            }
            function V(e) {
                return e.length <= 24 ? e : `${e.slice(0, 24)}\u2026`;
            }
            async function X(e) {
                if (e instanceof Blob) {
                    let t = await e.text();
                    return `Blob(${V(t)})`;
                }
                if (w(e)) {
                    let t = new TextDecoder().decode(e);
                    return `ArrayBuffer(${V(t)})`;
                }
                return V(e);
            }
            let K = { system: '#3b82f6', outgoing: '#22c55e', incoming: '#ef4444', mocked: '#ff6a33' };
            async function Y(e) {
                let t = J(e.data),
                    a = await X(e.data),
                    o = e.defaultPrevented ? '⇡' : '⬆';
                console.groupCollapsed(
                    r.J.formatMessage(`${(0, B.l)({ milliseconds: !0 })} %c${o}%c ${a} %c${t}%c`),
                    `color:${K.outgoing}`,
                    'color:inherit',
                    'color:gray;font-weight:normal',
                    'color:inherit;font-weight:inherit',
                ),
                    console.log(e),
                    console.groupEnd();
            }
            async function Q(e) {
                let t = J(e.data),
                    a = await X(e.data);
                console.groupCollapsed(
                    r.J.formatMessage(`${(0, B.l)({ milliseconds: !0 })} %c\u2B06%c ${a} %c${t}%c`),
                    `color:${K.mocked}`,
                    'color:inherit',
                    'color:gray;font-weight:normal',
                    'color:inherit;font-weight:inherit',
                ),
                    console.log(e),
                    console.groupEnd();
            }
            async function Z(e) {
                let t = J(e.data),
                    a = await X(e.data);
                console.groupCollapsed(
                    r.J.formatMessage(`${(0, B.l)({ milliseconds: !0 })} %c\u2B07%c ${a} %c${t}%c`),
                    `color:${K.mocked}`,
                    'color:inherit',
                    'color:gray;font-weight:normal',
                    'color:inherit;font-weight:inherit',
                ),
                    console.log(e),
                    console.groupEnd();
            }
            async function ee(e) {
                let t = J(e.data),
                    a = await X(e.data),
                    o = e.defaultPrevented ? '⇣' : '⬇';
                console.groupCollapsed(
                    r.J.formatMessage(`${(0, B.l)({ milliseconds: !0 })} %c${o}%c ${a} %c${t}%c`),
                    `color:${K.incoming}`,
                    'color:inherit',
                    'color:gray;font-weight:normal',
                    'color:inherit;font-weight:inherit',
                ),
                    console.log(e),
                    console.groupEnd();
            }
            var et = a(49124),
                ea = /(%?)(%([sdijo]))/g;
            function eo(e, ...t) {
                if (0 === t.length) return e;
                let a = 0,
                    o = e.replace(ea, (e, o, s, r) => {
                        let i = (function (e, t) {
                            switch (t) {
                                case 's':
                                    return e;
                                case 'd':
                                case 'i':
                                    return Number(e);
                                case 'j':
                                    return JSON.stringify(e);
                                case 'o': {
                                    if ('string' == typeof e) return e;
                                    let t = JSON.stringify(e);
                                    if ('{}' === t || '[]' === t || /^\[object .+?\]$/.test(t)) return e;
                                    return t;
                                }
                            }
                        })(t[a], r);
                        return o ? e : (a++, i);
                    });
                return a < t.length && (o += ` ${t.slice(a).join(' ')}`), (o = o.replace(/%{2,2}/g, '%'));
            }
            var es = class extends Error {
                    constructor(e, ...t) {
                        super(e),
                            (this.message = e),
                            (this.name = 'Invariant Violation'),
                            (this.message = eo(e, ...t)),
                            (function (e) {
                                if (!e.stack) return;
                                let t = e.stack.split('\n');
                                t.splice(1, 2), (e.stack = t.join('\n'));
                            })(this);
                    }
                },
                er = (e, t, ...a) => {
                    if (!e) throw new es(t, ...a);
                };
            function ei() {
                if ('undefined' != typeof navigator && 'ReactNative' === navigator.product) return !0;
                if (void 0 !== et) {
                    let e = et.type;
                    return 'renderer' !== e && 'worker' !== e && !!(et.versions && et.versions.node);
                }
                return !1;
            }
            er.as = (e, t, a, ...o) => {
                if (!t) {
                    let t,
                        s = 0 === o.length ? a : eo(a, ...o);
                    try {
                        t = Reflect.construct(e, [s]);
                    } catch (a) {
                        t = e(s);
                    }
                    throw t;
                }
            };
            var en = class extends Promise {
                    #o;
                    resolve;
                    reject;
                    constructor(e = null) {
                        let t = (function () {
                            let e = (t, a) => {
                                (e.state = 'pending'),
                                    (e.resolve = (a) =>
                                        'pending' !== e.state
                                            ? void 0
                                            : ((e.result = a), t(a instanceof Promise ? a : Promise.resolve(a).then((t) => ((e.state = 'fulfilled'), t))))),
                                    (e.reject = (t) => {
                                        if ('pending' === e.state)
                                            return (
                                                queueMicrotask(() => {
                                                    e.state = 'rejected';
                                                }),
                                                a((e.rejectionReason = t))
                                            );
                                    });
                            };
                            return e;
                        })();
                        super((a, o) => {
                            t(a, o), e?.(t.resolve, t.reject);
                        }),
                            (this.#o = t),
                            (this.resolve = this.#o.resolve),
                            (this.reject = this.#o.reject);
                    }
                    get state() {
                        return this.#o.state;
                    }
                    get rejectionReason() {
                        return this.#o.rejectionReason;
                    }
                    then(e, t) {
                        return this.#s(super.then(e, t));
                    }
                    catch(e) {
                        return this.#s(super.catch(e));
                    }
                    finally(e) {
                        return this.#s(super.finally(e));
                    }
                    #s(e) {
                        return Object.defineProperties(e, { resolve: { configurable: !0, value: this.resolve }, reject: { configurable: !0, value: this.reject } });
                    }
                },
                el = {
                    serviceWorker: { url: '/mockServiceWorker.js', options: null },
                    quiet: !1,
                    waitUntilReady: !0,
                    onUnhandledRequest: 'warn',
                    findWorker: (e, t) => e === t,
                };
            async function eu(e) {
                try {
                    return [
                        null,
                        await e().catch((e) => {
                            throw e;
                        }),
                    ];
                } catch (e) {
                    return [e, null];
                }
            }
            function ec(e, t, a) {
                return [e.active, e.installing, e.waiting].filter((e) => null != e).find((e) => a(e.scriptURL, t)) || null;
            }
            var ed = async (e, t = {}, a) => {
                let o = new URL(e, location.href).href,
                    s = await navigator.serviceWorker.getRegistrations().then((e) => e.filter((e) => ec(e, o, a)));
                !navigator.serviceWorker.controller && s.length > 0 && location.reload();
                let [i] = s;
                if (i) return i.update(), [ec(i, o, a), i];
                let [n, l] = await eu(async () => {
                    let s = await navigator.serviceWorker.register(e, t);
                    return [ec(s, o, a), s];
                });
                if (n) {
                    if (n.message.includes('(404)')) {
                        let e = new URL(t?.scope || '/', location.href);
                        throw Error(
                            r.J
                                .formatMessage(`Failed to register a Service Worker for scope ('${e.href}') with script ('${o}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`),
                        );
                    }
                    throw Error(r.J.formatMessage('Failed to register the Service Worker:\n\n%s', n.message));
                }
                return l;
            };
            function eh(e = {}) {
                if (e.quiet) return;
                let t = e.message || 'Mocking enabled.';
                console.groupCollapsed(`%c${r.J.formatMessage(t)}`, 'color:orangered;font-weight:bold;'),
                    console.log('%cDocumentation: %chttps://mswjs.io/docs', 'font-weight:bold', 'font-weight:normal'),
                    console.log('Found an issue? https://github.com/mswjs/msw/issues'),
                    e.workerUrl && console.log('Worker script URL:', e.workerUrl),
                    e.workerScope && console.log('Worker scope:', e.workerScope),
                    e.client && console.log('Client ID: %s (%s)', e.client.id, e.client.frameType),
                    console.groupEnd();
            }
            function em(e) {
                return new Request(e.url, {
                    ...e,
                    body: (function (e) {
                        if (!['HEAD', 'GET'].includes(e.method)) return e.body;
                    })(e),
                });
            }
            function ep() {
                return 'undefined' != typeof navigator && 'serviceWorker' in navigator && 'undefined' != typeof location && 'file:' !== location.protocol;
            }
            var eg = (function () {
                    try {
                        let e = new ReadableStream({ start: (e) => e.close() });
                        return new MessageChannel().port1.postMessage(e, [e]), !0;
                    } catch {
                        return !1;
                    }
                })(),
                ef = new TextEncoder(),
                ek = Object.defineProperty,
                eb = {};
            function ey(e) {
                return `\x1b[33m${e}\x1b[0m`;
            }
            function ev(e) {
                return `\x1b[34m${e}\x1b[0m`;
            }
            function ew(e) {
                return `\x1b[90m${e}\x1b[0m`;
            }
            function ex(e) {
                return `\x1b[31m${e}\x1b[0m`;
            }
            function ej(e) {
                return `\x1b[32m${e}\x1b[0m`;
            }
            ((e, t) => {
                for (var a in t) ek(e, a, { get: t[a], enumerable: !0 });
            })(eb, { blue: () => ev, gray: () => ew, green: () => ej, red: () => ex, yellow: () => ey });
            var eS = ei(),
                eE = class {
                    constructor(e) {
                        (this.name = e), (this.prefix = `[${this.name}]`);
                        let t = eP('DEBUG'),
                            a = eP('LOG_LEVEL');
                        '1' === t || 'true' === t || (void 0 !== t && this.name.startsWith(t))
                            ? ((this.debug = eL(a, 'debug') ? eq : this.debug),
                              (this.info = eL(a, 'info') ? eq : this.info),
                              (this.success = eL(a, 'success') ? eq : this.success),
                              (this.warning = eL(a, 'warning') ? eq : this.warning),
                              (this.error = eL(a, 'error') ? eq : this.error))
                            : ((this.info = eq), (this.success = eq), (this.warning = eq), (this.error = eq), (this.only = eq));
                    }
                    prefix;
                    extend(e) {
                        return new eE(`${this.name}:${e}`);
                    }
                    debug(e, ...t) {
                        this.logEntry({ level: 'debug', message: ew(e), positionals: t, prefix: this.prefix, colors: { prefix: 'gray' } });
                    }
                    info(e, ...t) {
                        this.logEntry({ level: 'info', message: e, positionals: t, prefix: this.prefix, colors: { prefix: 'blue' } });
                        let a = new ez();
                        return (e, ...t) => {
                            a.measure(),
                                this.logEntry({
                                    level: 'info',
                                    message: `${e} ${ew(`${a.deltaTime}ms`)}`,
                                    positionals: t,
                                    prefix: this.prefix,
                                    colors: { prefix: 'blue' },
                                });
                        };
                    }
                    success(e, ...t) {
                        this.logEntry({ level: 'info', message: e, positionals: t, prefix: `\u2714 ${this.prefix}`, colors: { timestamp: 'green', prefix: 'green' } });
                    }
                    warning(e, ...t) {
                        this.logEntry({
                            level: 'warning',
                            message: e,
                            positionals: t,
                            prefix: `\u26A0 ${this.prefix}`,
                            colors: { timestamp: 'yellow', prefix: 'yellow' },
                        });
                    }
                    error(e, ...t) {
                        this.logEntry({ level: 'error', message: e, positionals: t, prefix: `\u2716 ${this.prefix}`, colors: { timestamp: 'red', prefix: 'red' } });
                    }
                    only(e) {
                        e();
                    }
                    createEntry(e, t) {
                        return { timestamp: new Date(), level: e, message: t };
                    }
                    logEntry(e) {
                        let { level: t, message: a, prefix: o, colors: s, positionals: r = [] } = e,
                            i = this.createEntry(t, a),
                            n = s?.timestamp || 'gray',
                            l = s?.prefix || 'gray',
                            u = { timestamp: eb[n], prefix: eb[l] };
                        this.getWriter(t)(
                            [u.timestamp(this.formatTimestamp(i.timestamp))]
                                .concat(null != o ? u.prefix(o) : [])
                                .concat(eA(a))
                                .join(' '),
                            ...r.map(eA),
                        );
                    }
                    formatTimestamp(e) {
                        return `${e.toLocaleTimeString('en-GB')}:${e.getMilliseconds()}`;
                    }
                    getWriter(e) {
                        switch (e) {
                            case 'debug':
                            case 'success':
                            case 'info':
                                return eC;
                            case 'warning':
                                return eO;
                            case 'error':
                                return eT;
                        }
                    }
                },
                ez = class {
                    startTime;
                    endTime;
                    deltaTime;
                    constructor() {
                        this.startTime = performance.now();
                    }
                    measure() {
                        this.endTime = performance.now();
                        let e = this.endTime - this.startTime;
                        this.deltaTime = e.toFixed(2);
                    }
                },
                eq = () => void 0;
            function eC(e, ...t) {
                if (eS) return void et.stdout.write(eo(e, ...t) + '\n');
                console.log(e, ...t);
            }
            function eO(e, ...t) {
                if (eS) return void et.stderr.write(eo(e, ...t) + '\n');
                console.warn(e, ...t);
            }
            function eT(e, ...t) {
                if (eS) return void et.stderr.write(eo(e, ...t) + '\n');
                console.error(e, ...t);
            }
            function eP(e) {
                return eS ? et.env[e] : globalThis[e]?.toString();
            }
            function eL(e, t) {
                return void 0 !== e && e !== t;
            }
            function eA(e) {
                return void 0 === e ? 'undefined' : null === e ? 'null' : 'string' == typeof e ? e : 'object' == typeof e ? JSON.stringify(e) : e.toString();
            }
            var eR = class extends Error {
                    constructor(e, t, a) {
                        super(`Possible EventEmitter memory leak detected. ${a} ${t.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`),
                            (this.emitter = e),
                            (this.type = t),
                            (this.count = a),
                            (this.name = 'MaxListenersExceededWarning');
                    }
                },
                eI = class {
                    static listenerCount(e, t) {
                        return e.listenerCount(t);
                    }
                    constructor() {
                        (this.events = new Map()), (this.maxListeners = eI.defaultMaxListeners), (this.hasWarnedAboutPotentialMemoryLeak = !1);
                    }
                    _emitInternalEvent(e, t, a) {
                        this.emit(e, t, a);
                    }
                    _getListeners(e) {
                        return Array.prototype.concat.apply([], this.events.get(e)) || [];
                    }
                    _removeListener(e, t) {
                        let a = e.indexOf(t);
                        return a > -1 && e.splice(a, 1), [];
                    }
                    _wrapOnceListener(e, t) {
                        let a = (...o) => (this.removeListener(e, a), t.apply(this, o));
                        return Object.defineProperty(a, 'name', { value: t.name }), a;
                    }
                    setMaxListeners(e) {
                        return (this.maxListeners = e), this;
                    }
                    getMaxListeners() {
                        return this.maxListeners;
                    }
                    eventNames() {
                        return Array.from(this.events.keys());
                    }
                    emit(e, ...t) {
                        let a = this._getListeners(e);
                        return (
                            a.forEach((e) => {
                                e.apply(this, t);
                            }),
                            a.length > 0
                        );
                    }
                    addListener(e, t) {
                        this._emitInternalEvent('newListener', e, t);
                        let a = this._getListeners(e).concat(t);
                        return (
                            this.events.set(e, a),
                            this.maxListeners > 0 &&
                                this.listenerCount(e) > this.maxListeners &&
                                !this.hasWarnedAboutPotentialMemoryLeak &&
                                ((this.hasWarnedAboutPotentialMemoryLeak = !0), console.warn(new eR(this, e, this.listenerCount(e)))),
                            this
                        );
                    }
                    on(e, t) {
                        return this.addListener(e, t);
                    }
                    once(e, t) {
                        return this.addListener(e, this._wrapOnceListener(e, t));
                    }
                    prependListener(e, t) {
                        let a = this._getListeners(e);
                        if (a.length > 0) {
                            let o = [t].concat(a);
                            this.events.set(e, o);
                        } else this.events.set(e, a.concat(t));
                        return this;
                    }
                    prependOnceListener(e, t) {
                        return this.prependListener(e, this._wrapOnceListener(e, t));
                    }
                    removeListener(e, t) {
                        let a = this._getListeners(e);
                        return a.length > 0 && (this._removeListener(a, t), this.events.set(e, a), this._emitInternalEvent('removeListener', e, t)), this;
                    }
                    off(e, t) {
                        return this.removeListener(e, t);
                    }
                    removeAllListeners(e) {
                        return e ? this.events.delete(e) : this.events.clear(), this;
                    }
                    listeners(e) {
                        return Array.from(this._getListeners(e));
                    }
                    listenerCount(e) {
                        return this._getListeners(e).length;
                    }
                    rawListeners(e) {
                        return this.listeners(e);
                    }
                };
            eI.defaultMaxListeners = 10;
            var eD = (e, t, a) => {
                if (!t.has(e)) throw TypeError('Cannot read from private field');
                return a ? a.call(e) : t.get(e);
            };
            function eN(e) {
                return globalThis[e] || void 0;
            }
            var e$ = class {
                constructor(e) {
                    (this.symbol = e),
                        (this.readyState = 'INACTIVE'),
                        (this.emitter = new eI()),
                        (this.subscriptions = []),
                        (this.logger = new eE(e.description)),
                        this.emitter.setMaxListeners(0),
                        this.logger.info('constructing the interceptor...');
                }
                checkEnvironment() {
                    return !0;
                }
                apply() {
                    let e = this.logger.extend('apply');
                    if ((e.info('applying the interceptor...'), 'APPLIED' === this.readyState)) return void e.info('intercepted already applied!');
                    if (!this.checkEnvironment()) return void e.info('the interceptor cannot be applied in this environment!');
                    this.readyState = 'APPLYING';
                    let t = this.getInstance();
                    if (t) {
                        e.info('found a running instance, reusing...'),
                            (this.on = (a, o) => (
                                e.info('proxying the "%s" listener', a),
                                t.emitter.addListener(a, o),
                                this.subscriptions.push(() => {
                                    t.emitter.removeListener(a, o), e.info('removed proxied "%s" listener!', a);
                                }),
                                this
                            )),
                            (this.readyState = 'APPLIED');
                        return;
                    }
                    e.info('no running instance found, setting up a new instance...'), this.setup(), this.setInstance(), (this.readyState = 'APPLIED');
                }
                setup() {}
                on(e, t) {
                    let a = this.logger.extend('on');
                    return (
                        'DISPOSING' === this.readyState || 'DISPOSED' === this.readyState
                            ? a.info('cannot listen to events, already disposed!')
                            : (a.info('adding "%s" event listener:', e, t), this.emitter.on(e, t)),
                        this
                    );
                }
                once(e, t) {
                    return this.emitter.once(e, t), this;
                }
                off(e, t) {
                    return this.emitter.off(e, t), this;
                }
                removeAllListeners(e) {
                    return this.emitter.removeAllListeners(e), this;
                }
                dispose() {
                    let e = this.logger.extend('dispose');
                    if ('DISPOSED' === this.readyState) return void e.info('cannot dispose, already disposed!');
                    if ((e.info('disposing the interceptor...'), (this.readyState = 'DISPOSING'), !this.getInstance()))
                        return void e.info('no interceptors running, skipping dispose...');
                    if ((this.clearInstance(), e.info('global symbol deleted:', eN(this.symbol)), this.subscriptions.length > 0)) {
                        for (let t of (e.info('disposing of %d subscriptions...', this.subscriptions.length), this.subscriptions)) t();
                        (this.subscriptions = []), e.info('disposed of all subscriptions!', this.subscriptions.length);
                    }
                    this.emitter.removeAllListeners(), e.info('destroyed the listener!'), (this.readyState = 'DISPOSED');
                }
                getInstance() {
                    var e;
                    let t = eN(this.symbol);
                    return this.logger.info('retrieved global instance:', null == (e = null == t ? void 0 : t.constructor) ? void 0 : e.name), t;
                }
                setInstance() {
                    var e;
                    (e = this.symbol), (globalThis[e] = this), this.logger.info('set global instance!', this.symbol.description);
                }
                clearInstance() {
                    var e;
                    (e = this.symbol), delete globalThis[e], this.logger.info('cleared global instance!', this.symbol.description);
                }
            };
            function eM() {
                return Math.random().toString(16).slice(2);
            }
            var eW = Symbol('isPatchedModule'),
                eU = class extends Error {
                    constructor(e) {
                        super(e), (this.name = 'InterceptorError'), Object.setPrototypeOf(this, eU.prototype);
                    }
                },
                eH = class {
                    constructor(e, t) {
                        (this.request = e),
                            (this.source = t),
                            ((e, t, a) => {
                                if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
                                t instanceof WeakSet ? t.add(e) : t.set(e, void 0);
                            })(this, o),
                            (this.readyState = eH.PENDING),
                            (this.handled = new en());
                    }
                    async passthrough() {
                        er.as(
                            eU,
                            this.readyState === eH.PENDING,
                            'Failed to passthrough the "%s %s" request: the request has already been handled',
                            this.request.method,
                            this.request.url,
                        ),
                            (this.readyState = eH.PASSTHROUGH),
                            await this.source.passthrough(),
                            eD(this, o, s).resolve();
                    }
                    respondWith(e) {
                        er.as(
                            eU,
                            this.readyState === eH.PENDING,
                            'Failed to respond to the "%s %s" request with "%d %s": the request has already been handled (%d)',
                            this.request.method,
                            this.request.url,
                            e.status,
                            e.statusText || 'OK',
                            this.readyState,
                        ),
                            (this.readyState = eH.RESPONSE),
                            eD(this, o, s).resolve(),
                            this.source.respondWith(e);
                    }
                    errorWith(e) {
                        er.as(
                            eU,
                            this.readyState === eH.PENDING,
                            'Failed to error the "%s %s" request with "%s": the request has already been handled (%d)',
                            this.request.method,
                            this.request.url,
                            null == e ? void 0 : e.toString(),
                            this.readyState,
                        ),
                            (this.readyState = eH.ERROR),
                            this.source.errorWith(e),
                            eD(this, o, s).resolve();
                    }
                };
            function e_(e) {
                try {
                    return new URL(e), !0;
                } catch (e) {
                    return !1;
                }
            }
            function eG(e, t) {
                let a = Object.getOwnPropertySymbols(t).find((t) => t.description === e);
                if (a) return Reflect.get(t, a);
            }
            (o = new WeakSet()),
                (s = function () {
                    return this.handled;
                }),
                (eH.PENDING = 0),
                (eH.PASSTHROUGH = 1),
                (eH.RESPONSE = 2),
                (eH.ERROR = 3);
            var eF = class extends Response {
                static isConfigurableStatusCode(e) {
                    return e >= 200 && e <= 599;
                }
                static isRedirectResponse(e) {
                    return eF.STATUS_CODES_WITH_REDIRECT.includes(e);
                }
                static isResponseWithBody(e) {
                    return !eF.STATUS_CODES_WITHOUT_BODY.includes(e);
                }
                static setUrl(e, t) {
                    if (!e || 'about:' === e || !e_(e)) return;
                    let a = eG('state', t);
                    a ? a.urlList.push(new URL(e)) : Object.defineProperty(t, 'url', { value: e, enumerable: !0, configurable: !0, writable: !1 });
                }
                static parseRawHeaders(e) {
                    let t = new Headers();
                    for (let a = 0; a < e.length; a += 2) t.append(e[a], e[a + 1]);
                    return t;
                }
                constructor(e, t = {}) {
                    var a;
                    let o = null != (a = t.status) ? a : 200,
                        s = eF.isConfigurableStatusCode(o) ? o : 200;
                    if ((super(eF.isResponseWithBody(o) ? e : null, { status: s, statusText: t.statusText, headers: t.headers }), o !== s)) {
                        let e = eG('state', this);
                        e ? (e.status = o) : Object.defineProperty(this, 'status', { value: o, enumerable: !0, configurable: !0, writable: !1 });
                    }
                    eF.setUrl(t.url, this);
                }
            };
            (eF.STATUS_CODES_WITHOUT_BODY = [101, 103, 204, 205, 304]), (eF.STATUS_CODES_WITH_REDIRECT = [301, 302, 303, 307, 308]);
            var eB = Symbol('kRawRequest');
            function eJ(e, t) {
                Reflect.set(e, eB, t);
            }
            var eV = class extends e$ {
                    constructor(e) {
                        (eV.symbol = Symbol(e.name)), super(eV.symbol), (this.interceptors = e.interceptors);
                    }
                    setup() {
                        let e = this.logger.extend('setup');
                        for (let t of (e.info('applying all %d interceptors...', this.interceptors.length), this.interceptors))
                            e.info('applying "%s" interceptor...', t.constructor.name),
                                t.apply(),
                                e.info('adding interceptor dispose subscription'),
                                this.subscriptions.push(() => t.dispose());
                    }
                    on(e, t) {
                        for (let a of this.interceptors) a.on(e, t);
                        return this;
                    }
                    once(e, t) {
                        for (let a of this.interceptors) a.once(e, t);
                        return this;
                    }
                    off(e, t) {
                        for (let a of this.interceptors) a.off(e, t);
                        return this;
                    }
                    removeAllListeners(e) {
                        for (let t of this.interceptors) t.removeAllListeners(e);
                        return this;
                    }
                },
                eX = Symbol('kDefaultPrevented'),
                eK = Symbol('kPropagationStopped'),
                eY = Symbol('kImmediatePropagationStopped'),
                eQ = class extends MessageEvent {
                    #r;
                    [eX];
                    [eK];
                    [eY];
                    constructor(...e) {
                        super(e[0], e[1]), (this[eX] = !1);
                    }
                    get defaultPrevented() {
                        return this[eX];
                    }
                    preventDefault() {
                        super.preventDefault(), (this[eX] = !0);
                    }
                    stopImmediatePropagation() {
                        super.stopImmediatePropagation(), (this[eY] = !0);
                    }
                },
                eZ = Symbol('kListenerOptions'),
                e1 = class {
                    #i;
                    constructor() {
                        this.#i = {};
                    }
                    on(e, t, a) {
                        return this.#n(e, t, a);
                    }
                    once(e, t, a) {
                        return this.on(e, t, { ...(a || {}), once: !0 });
                    }
                    earlyOn(e, t, a) {
                        return this.#n(e, t, a, 'prepend');
                    }
                    earlyOnce(e, t, a) {
                        return this.earlyOn(e, t, { ...(a || {}), once: !0 });
                    }
                    emit(e) {
                        if (0 === this.listenerCount(e.type)) return !1;
                        let t = this.#l(e);
                        for (let a of this.#i[e.type]) {
                            if (null != t.event[eK] && t.event[eK] !== this) return !1;
                            if (t.event[eY]) break;
                            this.#u(t.event, a);
                        }
                        return t.revoke(), !0;
                    }
                    async emitAsPromise(e) {
                        if (0 === this.listenerCount(e.type)) return [];
                        let t = [],
                            a = this.#l(e);
                        for (let o of this.#i[e.type]) {
                            if (null != a.event[eK] && a.event[eK] !== this) return [];
                            if (a.event[eY]) break;
                            t.push(await Promise.resolve(this.#u(a.event, o)));
                        }
                        return a.revoke(), Promise.allSettled(t).then((e) => e.map((e) => ('fulfilled' === e.status ? e.value : e.reason)));
                    }
                    *emitAsGenerator(e) {
                        if (0 === this.listenerCount(e.type)) return;
                        let t = this.#l(e);
                        for (let a of this.#i[e.type]) {
                            if (null != t.event[eK] && t.event[eK] !== this) return;
                            if (t.event[eY]) break;
                            yield this.#u(t.event, a);
                        }
                        t.revoke();
                    }
                    removeListener(e, t) {
                        if (0 === this.listenerCount(e)) return;
                        let a = [];
                        for (let o of this.#i[e]) o !== t && a.push(o);
                        this.#i[e] = a;
                    }
                    removeAllListeners(e) {
                        if (null == e) {
                            this.#i = {};
                            return;
                        }
                        this.#i[e] = [];
                    }
                    listeners(e) {
                        return null == e ? Object.values(this.#i).flat() : this.#i[e] || [];
                    }
                    listenerCount(e) {
                        return this.listeners(e).length;
                    }
                    #n(e, t, a, o = 'append') {
                        return (
                            (this.#i[e] ??= []),
                            'prepend' === o ? this.#i[e].unshift(t) : this.#i[e].push(t),
                            a &&
                                (Object.defineProperty(t, eZ, { value: a, enumerable: !1, writable: !1 }),
                                a.signal &&
                                    a.signal.addEventListener(
                                        'abort',
                                        () => {
                                            this.removeListener(e, t);
                                        },
                                        { once: !0 },
                                    )),
                            this
                        );
                    }
                    #l(e) {
                        let { stopPropagation: t } = e;
                        return (
                            (e.stopPropagation = new Proxy(e.stopPropagation, { apply: (t, a, o) => ((e[eK] = this), Reflect.apply(t, a, o)) })),
                            {
                                event: e,
                                revoke() {
                                    e.stopPropagation = t;
                                },
                            }
                        );
                    }
                    #u(e, t) {
                        let a = t.call(this, e);
                        return t[eZ]?.once && this.removeListener(e.type, t), a;
                    }
                },
                e0 = ep(),
                e2 = class extends eQ {
                    #c;
                    constructor(e) {
                        super(e.data.type, { data: e.data.payload }), (this.#c = e);
                    }
                    get ports() {
                        return this.#c.ports;
                    }
                    postMessage(e, ...t) {
                        this.#c.ports[0].postMessage({ type: e, data: t[0] }, { transfer: t[1] });
                    }
                },
                e3 = class extends e1 {
                    constructor(e) {
                        if ((super(), (this.options = e), !e0)) return;
                        navigator.serviceWorker.addEventListener('message', async (e) => {
                            let t = await this.options.worker;
                            (null == e.source || e.source === t) && e.data && w(e.data) && 'type' in e.data && this.emit(new e2(e));
                        });
                    }
                    postMessage(e) {
                        er(
                            e0,
                            'Failed to post message on a WorkerChannel: the Service Worker API is unavailable in this context. This is likely an issue with MSW. Please report it on GitHub: https://github.com/mswjs/msw/issues',
                        ),
                            this.options.worker.then((t) => {
                                t.postMessage(e);
                            });
                    }
                };
            async function e4(e, t, ...a) {
                let o = e.listeners(t);
                if (0 !== o.length) for (let t of o) await t.apply(e, a);
            }
            function e5(e) {
                let t = Object.getOwnPropertyDescriptor(globalThis, e);
                return (
                    void 0 !== t &&
                    ('function' != typeof t.get || void 0 !== t.get()) &&
                    (void 0 !== t.get || null != t.value) &&
                    (void 0 !== t.set ||
                        !!t.configurable ||
                        (console.error(
                            `[MSW] Failed to apply interceptor: the global \`${e}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`,
                        ),
                        !1))
                );
            }
            var e9 = async (e) => {
                try {
                    let t = await e().catch((e) => {
                        throw e;
                    });
                    return { error: null, data: t };
                } catch (e) {
                    return { error: e, data: null };
                }
            };
            function e7(e, t = !1) {
                return t ? Object.prototype.toString.call(e).startsWith('[object ') : '[object Object]' === Object.prototype.toString.call(e);
            }
            function e6(e, t) {
                try {
                    return e[t], !0;
                } catch (e) {
                    return !1;
                }
            }
            function e8(e) {
                return null != e && e instanceof Response && e6(e, 'type') && 'error' === e.type;
            }
            async function te(e) {
                let t = async (t) =>
                        t instanceof Error
                            ? (await e.controller.errorWith(t), !0)
                            : e8(t)
                              ? (await e.controller.respondWith(t), !0)
                              : e7(t, !0) && e6(t, 'status') && e6(t, 'statusText') && e6(t, 'bodyUsed')
                                ? (await e.controller.respondWith(t), !0)
                                : !!e7(t) && (await e.controller.errorWith(t), !0),
                    a = async (a) => {
                        if (a instanceof eU) throw s.error;
                        return null != a && a instanceof Error && 'code' in a && 'errno' in a
                            ? (await e.controller.errorWith(a), !0)
                            : a instanceof Response && (await t(a));
                    },
                    o = new en();
                if (e.request.signal) {
                    if (e.request.signal.aborted) return void (await e.controller.errorWith(e.request.signal.reason));
                    e.request.signal.addEventListener(
                        'abort',
                        () => {
                            o.reject(e.request.signal.reason);
                        },
                        { once: !0 },
                    );
                }
                let s = await e9(async () => {
                    let t = e4(e.emitter, 'request', { requestId: e.requestId, request: e.request, controller: e.controller });
                    await Promise.race([o, t, e.controller.handled]);
                });
                if ('rejected' === o.state) return void (await e.controller.errorWith(o.rejectionReason));
                if (s.error) {
                    var r;
                    if (await a(s.error)) return;
                    if (e.emitter.listenerCount('unhandledException') > 0) {
                        let a = new eH(e.request, {
                            passthrough() {},
                            async respondWith(e) {
                                await t(e);
                            },
                            async errorWith(t) {
                                await e.controller.errorWith(t);
                            },
                        });
                        if (
                            (await e4(e.emitter, 'unhandledException', { error: s.error, request: e.request, requestId: e.requestId, controller: a }),
                            a.readyState !== eH.PENDING)
                        )
                            return;
                    }
                    await e.controller.respondWith(
                        new Response(JSON.stringify((r = s.error) instanceof Error ? { name: r.name, message: r.message, stack: r.stack } : r), {
                            status: 500,
                            statusText: 'Unhandled Exception',
                            headers: { 'Content-Type': 'application/json' },
                        }),
                    );
                    return;
                }
                return e.controller.readyState === eH.PENDING ? await e.controller.passthrough() : e.controller.handled;
            }
            function tt(e) {
                return Object.assign(TypeError('Failed to fetch'), { cause: e });
            }
            var ta = ['content-encoding', 'content-language', 'content-location', 'content-type', 'content-length'],
                to = Symbol('kRedirectCount');
            async function ts(e, t) {
                let a;
                if (303 !== t.status && null != e.body) return Promise.reject(tt());
                let o = new URL(e.url);
                try {
                    a = new URL(t.headers.get('location'), e.url);
                } catch (e) {
                    return Promise.reject(tt(e));
                }
                if ('http:' !== a.protocol && 'https:' !== a.protocol) return Promise.reject(tt('URL scheme must be a HTTP(S) scheme'));
                if (Reflect.get(e, to) > 20) return Promise.reject(tt('redirect count exceeded'));
                if ((Object.defineProperty(e, to, { value: (Reflect.get(e, to) || 0) + 1 }), 'cors' === e.mode && (a.username || a.password) && !tr(o, a)))
                    return Promise.reject(tt('cross origin not allowed for request mode "cors"'));
                let s = {};
                (([301, 302].includes(t.status) && 'POST' === e.method) || (303 === t.status && !['HEAD', 'GET'].includes(e.method))) &&
                    ((s.method = 'GET'),
                    (s.body = null),
                    ta.forEach((t) => {
                        e.headers.delete(t);
                    })),
                    tr(o, a) || (e.headers.delete('authorization'), e.headers.delete('proxy-authorization'), e.headers.delete('cookie'), e.headers.delete('host')),
                    (s.headers = e.headers);
                let r = await fetch(new Request(a, s));
                return Object.defineProperty(r, 'redirected', { value: !0, configurable: !0 }), r;
            }
            function tr(e, t) {
                return (e.origin === t.origin && 'null' === e.origin) || (e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port);
            }
            var ti = class extends TransformStream {
                    constructor() {
                        console.warn('[Interceptors]: Brotli decompression of response streams is not supported in the browser'),
                            super({
                                transform(e, t) {
                                    t.enqueue(e);
                                },
                            });
                    }
                },
                tn = class extends TransformStream {
                    constructor(e, ...t) {
                        super({}, ...t);
                        let a = [super.readable, ...e].reduce((e, t) => e.pipeThrough(t));
                        Object.defineProperty(this, 'readable', { get: () => a });
                    }
                },
                tl = class extends e$ {
                    constructor() {
                        super(tl.symbol);
                    }
                    checkEnvironment() {
                        return e5('fetch');
                    }
                    async setup() {
                        let e = globalThis.fetch;
                        er(!e[eW], 'Failed to patch the "fetch" module: already patched.'),
                            (globalThis.fetch = async (t, a) => {
                                let o = eM(),
                                    s = new Request('string' != typeof t || 'undefined' == typeof location || e_(t) ? t : new URL(t, location.href), a);
                                t instanceof Request && eJ(s, t);
                                let r = new en(),
                                    i = new eH(s, {
                                        passthrough: async () => {
                                            this.logger.info('request has not been handled, passthrough...');
                                            let t = s.clone(),
                                                { error: a, data: i } = await e9(() => e(s));
                                            if (a) return r.reject(a);
                                            if ((this.logger.info('original fetch performed', i), this.emitter.listenerCount('response') > 0)) {
                                                this.logger.info('emitting the "response" event...');
                                                let e = i.clone();
                                                await e4(this.emitter, 'response', { response: e, isMockedResponse: !1, request: t, requestId: o });
                                            }
                                            r.resolve(i);
                                        },
                                        respondWith: async (e) => {
                                            if (e8(e)) {
                                                this.logger.info('request has errored!', { response: e }), r.reject(tt(e));
                                                return;
                                            }
                                            this.logger.info('received mocked response!', { rawResponse: e });
                                            let t = (function (e) {
                                                    if (null === e.body) return null;
                                                    let t = (function (e) {
                                                        if ('' === e) return null;
                                                        let t = e
                                                            .toLowerCase()
                                                            .split(',')
                                                            .map((e) => e.trim());
                                                        return 0 === t.length
                                                            ? null
                                                            : new tn(
                                                                  t.reduceRight(
                                                                      (e, t) =>
                                                                          'gzip' === t || 'x-gzip' === t
                                                                              ? e.concat(new DecompressionStream('gzip'))
                                                                              : 'deflate' === t
                                                                                ? e.concat(new DecompressionStream('deflate'))
                                                                                : 'br' === t
                                                                                  ? e.concat(new ti())
                                                                                  : ((e.length = 0), e),
                                                                      [],
                                                                  ),
                                                              );
                                                    })(e.headers.get('content-encoding') || '');
                                                    return t ? (e.body.pipeTo(t.writable), t.readable) : null;
                                                })(e),
                                                a = null === t ? e : new eF(t, e);
                                            if ((eF.setUrl(s.url, a), eF.isRedirectResponse(a.status))) {
                                                if ('error' === s.redirect) return void r.reject(tt('unexpected redirect'));
                                                if ('follow' === s.redirect)
                                                    return void ts(s, a).then(
                                                        (e) => {
                                                            r.resolve(e);
                                                        },
                                                        (e) => {
                                                            r.reject(e);
                                                        },
                                                    );
                                            }
                                            this.emitter.listenerCount('response') > 0 &&
                                                (this.logger.info('emitting the "response" event...'),
                                                await e4(this.emitter, 'response', { response: a.clone(), isMockedResponse: !0, request: s, requestId: o })),
                                                r.resolve(a);
                                        },
                                        errorWith: (e) => {
                                            this.logger.info('request has been aborted!', { reason: e }), r.reject(e);
                                        },
                                    });
                                return (
                                    this.logger.info('[%s] %s', s.method, s.url),
                                    this.logger.info('awaiting for the mocked response...'),
                                    this.logger.info('emitting the "request" event for %s listener(s)...', this.emitter.listenerCount('request')),
                                    await te({ request: s, requestId: o, emitter: this.emitter, controller: i }),
                                    r
                                );
                            }),
                            Object.defineProperty(globalThis.fetch, eW, { enumerable: !0, configurable: !0, value: !0 }),
                            this.subscriptions.push(() => {
                                Object.defineProperty(globalThis.fetch, eW, { value: void 0 }),
                                    (globalThis.fetch = e),
                                    this.logger.info('restored native "globalThis.fetch"!', globalThis.fetch.name);
                            });
                    }
                };
            tl.symbol = Symbol('fetch');
            var tu = class {
                    constructor(e, t) {
                        (this.NONE = 0),
                            (this.CAPTURING_PHASE = 1),
                            (this.AT_TARGET = 2),
                            (this.BUBBLING_PHASE = 3),
                            (this.type = ''),
                            (this.srcElement = null),
                            (this.currentTarget = null),
                            (this.eventPhase = 0),
                            (this.isTrusted = !0),
                            (this.composed = !1),
                            (this.cancelable = !0),
                            (this.defaultPrevented = !1),
                            (this.bubbles = !0),
                            (this.lengthComputable = !0),
                            (this.loaded = 0),
                            (this.total = 0),
                            (this.cancelBubble = !1),
                            (this.returnValue = !0),
                            (this.type = e),
                            (this.target = (null == t ? void 0 : t.target) || null),
                            (this.currentTarget = (null == t ? void 0 : t.currentTarget) || null),
                            (this.timeStamp = Date.now());
                    }
                    composedPath() {
                        return [];
                    }
                    initEvent(e, t, a) {
                        (this.type = e), (this.bubbles = !!t), (this.cancelable = !!a);
                    }
                    preventDefault() {
                        this.defaultPrevented = !0;
                    }
                    stopPropagation() {}
                    stopImmediatePropagation() {}
                },
                tc = class extends tu {
                    constructor(e, t) {
                        super(e),
                            (this.lengthComputable = (null == t ? void 0 : t.lengthComputable) || !1),
                            (this.composed = (null == t ? void 0 : t.composed) || !1),
                            (this.loaded = (null == t ? void 0 : t.loaded) || 0),
                            (this.total = (null == t ? void 0 : t.total) || 0);
                    }
                },
                td = 'undefined' != typeof ProgressEvent;
            function th(e, t) {
                return new Proxy(
                    e,
                    (function (e) {
                        let { constructorCall: t, methodCall: a, getProperty: o, setProperty: s } = e,
                            r = {};
                        return (
                            void 0 !== t &&
                                (r.construct = function (e, a, o) {
                                    let s = Reflect.construct.bind(null, e, a, o);
                                    return t.call(o, a, s);
                                }),
                            (r.set = function (e, t, a) {
                                let o = () => {
                                    let o =
                                            (function e(t, a) {
                                                if (!(a in t)) return null;
                                                if (Object.prototype.hasOwnProperty.call(t, a)) return t;
                                                let o = Reflect.getPrototypeOf(t);
                                                return o ? e(o, a) : null;
                                            })(e, t) || e,
                                        s = Reflect.getOwnPropertyDescriptor(o, t);
                                    return void 0 !== (null == s ? void 0 : s.set)
                                        ? (s.set.apply(e, [a]), !0)
                                        : Reflect.defineProperty(o, t, { writable: !0, enumerable: !0, configurable: !0, value: a });
                                };
                                return void 0 !== s ? s.call(e, [t, a], o) : o();
                            }),
                            (r.get = function (e, t, s) {
                                let r = () => e[t],
                                    i = void 0 !== o ? o.call(e, [t, s], r) : r();
                                return 'function' == typeof i
                                    ? (...o) => {
                                          let s = i.bind(e, ...o);
                                          return void 0 !== a ? a.call(e, [t, o], s) : s();
                                      }
                                    : i;
                            }),
                            r
                        );
                    })(t),
                );
            }
            async function tm(e) {
                let t = e.headers.get('content-length');
                return null != t && '' !== t ? Number(t) : (await e.arrayBuffer()).byteLength;
            }
            var tp = Symbol('kIsRequestHandled'),
                tg = ei(),
                tf = Symbol('kFetchRequest'),
                tk = class {
                    constructor(e, t) {
                        (this.initialRequest = e),
                            (this.logger = t),
                            (this.method = 'GET'),
                            (this.url = null),
                            (this[tp] = !1),
                            (this.events = new Map()),
                            (this.uploadEvents = new Map()),
                            (this.requestId = eM()),
                            (this.requestHeaders = new Headers()),
                            (this.responseBuffer = new Uint8Array()),
                            (this.request = th(e, {
                                setProperty: ([e, t], a) => {
                                    if ('ontimeout' !== e) return a();
                                    {
                                        let o = e.slice(2);
                                        return this.request.addEventListener(o, t), a();
                                    }
                                },
                                methodCall: ([e, t], a) => {
                                    switch (e) {
                                        case 'open': {
                                            let [e, o] = t;
                                            return (
                                                void 0 === o ? ((this.method = 'GET'), (this.url = tb(e))) : ((this.method = e), (this.url = tb(o))),
                                                (this.logger = this.logger.extend(`${this.method} ${this.url.href}`)),
                                                this.logger.info('open', this.method, this.url.href),
                                                a()
                                            );
                                        }
                                        case 'addEventListener': {
                                            let [e, o] = t;
                                            return this.registerEvent(e, o), this.logger.info('addEventListener', e, o), a();
                                        }
                                        case 'setRequestHeader': {
                                            let [e, o] = t;
                                            return this.requestHeaders.set(e, o), this.logger.info('setRequestHeader', e, o), a();
                                        }
                                        case 'send': {
                                            let [e] = t;
                                            this.request.addEventListener('load', () => {
                                                if (void 0 !== this.onResponse) {
                                                    let e = (function (e, t) {
                                                        let a = eF.isResponseWithBody(e.status) ? t : null;
                                                        return new eF(a, {
                                                            url: e.responseURL,
                                                            status: e.status,
                                                            statusText: e.statusText,
                                                            headers: (function (e) {
                                                                let t = new Headers();
                                                                for (let a of e.split(/[\r\n]+/)) {
                                                                    if ('' === a.trim()) continue;
                                                                    let [e, ...o] = a.split(': '),
                                                                        s = o.join(': ');
                                                                    t.append(e, s);
                                                                }
                                                                return t;
                                                            })(e.getAllResponseHeaders()),
                                                        });
                                                    })(this.request, this.request.response);
                                                    this.onResponse.call(this, { response: e, isMockedResponse: this[tp], request: s, requestId: this.requestId });
                                                }
                                            });
                                            let o = 'string' == typeof e ? ef.encode(e) : e,
                                                s = this.toFetchApiRequest(o);
                                            (this[tf] = s.clone()),
                                                queueMicrotask(() => {
                                                    var e;
                                                    (
                                                        (null == (e = this.onRequest) ? void 0 : e.call(this, { request: s, requestId: this.requestId })) ||
                                                        Promise.resolve()
                                                    ).finally(() => {
                                                        if (!this[tp])
                                                            return (
                                                                this.logger.info(
                                                                    'request callback settled but request has not been handled (readystate %d), performing as-is...',
                                                                    this.request.readyState,
                                                                ),
                                                                tg && this.request.setRequestHeader('x-interceptors-internal-request-id', this.requestId),
                                                                a()
                                                            );
                                                    });
                                                });
                                            break;
                                        }
                                        default:
                                            return a();
                                    }
                                },
                            })),
                            ty(
                                this.request,
                                'upload',
                                th(this.request.upload, {
                                    setProperty: ([e, t], a) => {
                                        switch (e) {
                                            case 'onloadstart':
                                            case 'onprogress':
                                            case 'onaboart':
                                            case 'onerror':
                                            case 'onload':
                                            case 'ontimeout':
                                            case 'onloadend': {
                                                let a = e.slice(2);
                                                this.registerUploadEvent(a, t);
                                            }
                                        }
                                        return a();
                                    },
                                    methodCall: ([e, t], a) => {
                                        if ('addEventListener' === e) {
                                            let [e, o] = t;
                                            return this.registerUploadEvent(e, o), this.logger.info('upload.addEventListener', e, o), a();
                                        }
                                    },
                                }),
                            );
                    }
                    registerEvent(e, t) {
                        let a = (this.events.get(e) || []).concat(t);
                        this.events.set(e, a), this.logger.info('registered event "%s"', e, t);
                    }
                    registerUploadEvent(e, t) {
                        let a = (this.uploadEvents.get(e) || []).concat(t);
                        this.uploadEvents.set(e, a), this.logger.info('registered upload event "%s"', e, t);
                    }
                    async respondWith(e) {
                        if (((this[tp] = !0), this[tf])) {
                            let e = await tm(this[tf]);
                            this.trigger('loadstart', this.request.upload, { loaded: 0, total: e }),
                                this.trigger('progress', this.request.upload, { loaded: e, total: e }),
                                this.trigger('load', this.request.upload, { loaded: e, total: e }),
                                this.trigger('loadend', this.request.upload, { loaded: e, total: e });
                        }
                        this.logger.info('responding with a mocked response: %d %s', e.status, e.statusText),
                            ty(this.request, 'status', e.status),
                            ty(this.request, 'statusText', e.statusText),
                            ty(this.request, 'responseURL', this.url.href),
                            (this.request.getResponseHeader = new Proxy(this.request.getResponseHeader, {
                                apply: (t, a, o) => {
                                    if ((this.logger.info('getResponseHeader', o[0]), this.request.readyState < this.request.HEADERS_RECEIVED))
                                        return this.logger.info('headers not received yet, returning null'), null;
                                    let s = e.headers.get(o[0]);
                                    return this.logger.info('resolved response header "%s" to', o[0], s), s;
                                },
                            })),
                            (this.request.getAllResponseHeaders = new Proxy(this.request.getAllResponseHeaders, {
                                apply: () => {
                                    if ((this.logger.info('getAllResponseHeaders'), this.request.readyState < this.request.HEADERS_RECEIVED))
                                        return this.logger.info('headers not received yet, returning empty string'), '';
                                    let t = Array.from(e.headers.entries())
                                        .map(([e, t]) => `${e}: ${t}`)
                                        .join('\r\n');
                                    return this.logger.info('resolved all response headers to', t), t;
                                },
                            })),
                            Object.defineProperties(this.request, {
                                response: { enumerable: !0, configurable: !1, get: () => this.response },
                                responseText: { enumerable: !0, configurable: !1, get: () => this.responseText },
                                responseXML: { enumerable: !0, configurable: !1, get: () => this.responseXML },
                            });
                        let t = await tm(e.clone());
                        this.logger.info('calculated response body length', t),
                            this.trigger('loadstart', this.request, { loaded: 0, total: t }),
                            this.setReadyState(this.request.HEADERS_RECEIVED),
                            this.setReadyState(this.request.LOADING);
                        let a = () => {
                            this.logger.info('finalizing the mocked response...'),
                                this.setReadyState(this.request.DONE),
                                this.trigger('load', this.request, { loaded: this.responseBuffer.byteLength, total: t }),
                                this.trigger('loadend', this.request, { loaded: this.responseBuffer.byteLength, total: t });
                        };
                        if (e.body) {
                            this.logger.info('mocked response has body, streaming...');
                            let o = e.body.getReader(),
                                s = async () => {
                                    let { value: e, done: r } = await o.read();
                                    if (r) {
                                        this.logger.info('response body stream done!'), a();
                                        return;
                                    }
                                    e &&
                                        (this.logger.info('read response body chunk:', e),
                                        (this.responseBuffer = (function (e, t) {
                                            let a = new Uint8Array(e.byteLength + t.byteLength);
                                            return a.set(e, 0), a.set(t, e.byteLength), a;
                                        })(this.responseBuffer, e)),
                                        this.trigger('progress', this.request, { loaded: this.responseBuffer.byteLength, total: t })),
                                        s();
                                };
                            s();
                        } else a();
                    }
                    responseBufferToText() {
                        var e;
                        return (e = this.responseBuffer), new TextDecoder(void 0).decode(e);
                    }
                    get response() {
                        if ((this.logger.info('getResponse (responseType: %s)', this.request.responseType), this.request.readyState !== this.request.DONE)) return null;
                        switch (this.request.responseType) {
                            case 'json': {
                                let e = (function (e) {
                                    try {
                                        return JSON.parse(e);
                                    } catch (e) {
                                        return null;
                                    }
                                })(this.responseBufferToText());
                                return this.logger.info('resolved response JSON', e), e;
                            }
                            case 'arraybuffer': {
                                var e;
                                let t = (e = this.responseBuffer).buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                                return this.logger.info('resolved response ArrayBuffer', t), t;
                            }
                            case 'blob': {
                                let e = this.request.getResponseHeader('Content-Type') || 'text/plain',
                                    t = new Blob([this.responseBufferToText()], { type: e });
                                return this.logger.info('resolved response Blob (mime type: %s)', t, e), t;
                            }
                            default: {
                                let e = this.responseBufferToText();
                                return this.logger.info('resolving "%s" response type as text', this.request.responseType, e), e;
                            }
                        }
                    }
                    get responseText() {
                        if (
                            (er('' === this.request.responseType || 'text' === this.request.responseType, 'InvalidStateError: The object is in invalid state.'),
                            this.request.readyState !== this.request.LOADING && this.request.readyState !== this.request.DONE)
                        )
                            return '';
                        let e = this.responseBufferToText();
                        return this.logger.info('getResponseText: "%s"', e), e;
                    }
                    get responseXML() {
                        if (
                            (er('' === this.request.responseType || 'document' === this.request.responseType, 'InvalidStateError: The object is in invalid state.'),
                            this.request.readyState !== this.request.DONE)
                        )
                            return null;
                        let e = this.request.getResponseHeader('Content-Type') || '';
                        return 'undefined' == typeof DOMParser
                            ? (console.warn(
                                  'Cannot retrieve XMLHttpRequest response body as XML: DOMParser is not defined. You are likely using an environment that is not browser or does not polyfill browser globals correctly.',
                              ),
                              null)
                            : ['application/xhtml+xml', 'application/xml', 'image/svg+xml', 'text/html', 'text/xml'].some((t) => e.startsWith(t))
                              ? new DOMParser().parseFromString(this.responseBufferToText(), e)
                              : null;
                    }
                    errorWith(e) {
                        (this[tp] = !0),
                            this.logger.info('responding with an error'),
                            this.setReadyState(this.request.DONE),
                            this.trigger('error', this.request),
                            this.trigger('loadend', this.request);
                    }
                    setReadyState(e) {
                        if ((this.logger.info('setReadyState: %d -> %d', this.request.readyState, e), this.request.readyState === e))
                            return void this.logger.info('ready state identical, skipping transition...');
                        ty(this.request, 'readyState', e),
                            this.logger.info('set readyState to: %d', e),
                            e !== this.request.UNSENT && (this.logger.info('triggering "readystatechange" event...'), this.trigger('readystatechange', this.request));
                    }
                    trigger(e, t, a) {
                        let o = t[`on${e}`],
                            s = (function (e, t, a) {
                                let o = td ? ProgressEvent : tc;
                                return ['error', 'progress', 'loadstart', 'loadend', 'load', 'timeout', 'abort'].includes(t)
                                    ? new o(t, { lengthComputable: !0, loaded: (null == a ? void 0 : a.loaded) || 0, total: (null == a ? void 0 : a.total) || 0 })
                                    : new tu(t, { target: e, currentTarget: e });
                            })(t, e, a);
                        for (let [r, i] of (this.logger.info('trigger "%s"', e, a || ''),
                        'function' == typeof o && (this.logger.info('found a direct "%s" callback, calling...', e), o.call(t, s)),
                        t instanceof XMLHttpRequestUpload ? this.uploadEvents : this.events))
                            r === e && (this.logger.info('found %d listener(s) for "%s" event, calling...', i.length, e), i.forEach((e) => e.call(t, s)));
                    }
                    toFetchApiRequest(e) {
                        this.logger.info('converting request to a Fetch API Request...');
                        let t = e instanceof Document ? e.documentElement.innerText : e,
                            a = new Request(this.url.href, {
                                method: this.method,
                                headers: this.requestHeaders,
                                credentials: this.request.withCredentials ? 'include' : 'same-origin',
                                body: ['GET', 'HEAD'].includes(this.method.toUpperCase()) ? null : t,
                            }),
                            o = th(a.headers, {
                                methodCall: ([e, t], o) => {
                                    switch (e) {
                                        case 'append':
                                        case 'set': {
                                            let [e, a] = t;
                                            this.request.setRequestHeader(e, a);
                                            break;
                                        }
                                        case 'delete': {
                                            let [e] = t;
                                            console.warn(
                                                `XMLHttpRequest: Cannot remove a "${e}" header from the Fetch API representation of the "${a.method} ${a.url}" request. XMLHttpRequest headers cannot be removed.`,
                                            );
                                        }
                                    }
                                    return o();
                                },
                            });
                        return ty(a, 'headers', o), eJ(a, this.request), this.logger.info('converted request to a Fetch API Request!', a), a;
                    }
                };
            function tb(e) {
                return 'undefined' == typeof location ? new URL(e) : new URL(e.toString(), location.href);
            }
            function ty(e, t, a) {
                Reflect.defineProperty(e, t, { writable: !0, enumerable: !0, value: a });
            }
            var tv = class extends e$ {
                constructor() {
                    super(tv.interceptorSymbol);
                }
                checkEnvironment() {
                    return e5('XMLHttpRequest');
                }
                setup() {
                    let e = this.logger.extend('setup');
                    e.info('patching "XMLHttpRequest" module...');
                    let t = globalThis.XMLHttpRequest;
                    er(!t[eW], 'Failed to patch the "XMLHttpRequest" module: already patched.'),
                        (globalThis.XMLHttpRequest = (function ({ emitter: e, logger: t }) {
                            return new Proxy(globalThis.XMLHttpRequest, {
                                construct(a, o, s) {
                                    t.info('constructed new XMLHttpRequest');
                                    let r = Reflect.construct(a, o, s),
                                        i = Object.getOwnPropertyDescriptors(a.prototype);
                                    for (let e in i) Reflect.defineProperty(r, e, i[e]);
                                    let n = new tk(r, t);
                                    return (
                                        (n.onRequest = async function ({ request: t, requestId: a }) {
                                            let o = new eH(t, {
                                                passthrough: () => {
                                                    this.logger.info('no mocked response received, performing request as-is...');
                                                },
                                                respondWith: async (e) => {
                                                    if (e8(e)) return void this.errorWith(TypeError('Network error'));
                                                    await this.respondWith(e);
                                                },
                                                errorWith: (e) => {
                                                    this.logger.info('request errored!', { error: e }), e instanceof Error && this.errorWith(e);
                                                },
                                            });
                                            this.logger.info('awaiting mocked response...'),
                                                this.logger.info('emitting the "request" event for %s listener(s)...', e.listenerCount('request')),
                                                await te({ request: t, requestId: a, controller: o, emitter: e });
                                        }),
                                        (n.onResponse = async function ({ response: t, isMockedResponse: a, request: o, requestId: s }) {
                                            this.logger.info('emitting the "response" event for %s listener(s)...', e.listenerCount('response')),
                                                e.emit('response', { response: t, isMockedResponse: a, request: o, requestId: s });
                                        }),
                                        n.request
                                    );
                                },
                            });
                        })({ emitter: this.emitter, logger: this.logger })),
                        e.info('native "XMLHttpRequest" module patched!', globalThis.XMLHttpRequest.name),
                        Object.defineProperty(globalThis.XMLHttpRequest, eW, { enumerable: !0, configurable: !0, value: !0 }),
                        this.subscriptions.push(() => {
                            Object.defineProperty(globalThis.XMLHttpRequest, eW, { value: void 0 }),
                                (globalThis.XMLHttpRequest = t),
                                e.info('native "XMLHttpRequest" module restored!', globalThis.XMLHttpRequest.name);
                        });
                }
            };
            tv.interceptorSymbol = Symbol('xhr');
            var tw = class extends v {
                context;
                constructor(...e) {
                    super(...e),
                        er(
                            !ei(),
                            r.J.formatMessage(
                                'Failed to execute `setupWorker` in a non-browser environment. Consider using `setupServer` for Node.js environment instead.',
                            ),
                        ),
                        (this.context = this.createWorkerContext());
                }
                createWorkerContext() {
                    let e = new en();
                    return {
                        isMockingEnabled: !1,
                        startOptions: null,
                        workerPromise: e,
                        registration: void 0,
                        getRequestHandlers: () => this.handlersController.currentHandlers(),
                        emitter: this.emitter,
                        workerChannel: new e3({ worker: e }),
                    };
                }
                async start(e = {}) {
                    var t;
                    let a;
                    if (
                        ('waitUntilReady' in e &&
                            r.J.warn(
                                'The "waitUntilReady" option has been deprecated. Please remove it from this "worker.start()" call. Follow the recommended Browser integration (https://mswjs.io/docs/integrations/browser) to eliminate any race conditions between the Service Worker registration and any requests made by your application on initial render.',
                            ),
                        this.context.isMockingEnabled)
                    )
                        return (
                            r.J.warn(
                                'Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.',
                            ),
                            this.context.registration
                        );
                    if (
                        ((this.context.workerStoppedAt = void 0),
                        (this.context.startOptions = (function e(t, a) {
                            return Object.entries(a).reduce(
                                (t, [a, o]) => {
                                    let s = t[a];
                                    return Array.isArray(s) && Array.isArray(o) ? (t[a] = s.concat(o)) : w(s) && w(o) ? (t[a] = e(s, o)) : (t[a] = o), t;
                                },
                                Object.assign({}, t),
                            );
                        })(el, e)),
                        (t = {
                            getUnhandledRequestStrategy: () => this.context.startOptions.onUnhandledRequest,
                            getHandlers: () => this.handlersController.currentHandlers(),
                            onMockedConnection: (e) => {
                                this.context.startOptions.quiet ||
                                    (function (e) {
                                        let { client: t, server: a } = e;
                                        (function (e) {
                                            let t = (0, u.e)(e.url);
                                            console.groupCollapsed(r.J.formatMessage(`${(0, B.l)()} %c\u25B6%c ${t}`), `color:${K.system}`, 'color:inherit'),
                                                console.log('Client:', e.socket),
                                                console.groupEnd();
                                        })(t),
                                            t.addEventListener('message', (e) => {
                                                Y(e);
                                            }),
                                            t.addEventListener('close', (e) => {
                                                var t = e;
                                                let a = t.target,
                                                    o = (0, u.e)(a.url);
                                                console.groupCollapsed(
                                                    r.J.formatMessage(`${(0, B.l)({ milliseconds: !0 })} %c\u25A0%c ${o}`),
                                                    `color:${K.system}`,
                                                    'color:inherit',
                                                ),
                                                    console.log(t),
                                                    console.groupEnd();
                                            }),
                                            t.socket.addEventListener('error', (e) => {
                                                var t = e;
                                                let a = t.target,
                                                    o = (0, u.e)(a.url);
                                                console.groupCollapsed(
                                                    r.J.formatMessage(`${(0, B.l)({ milliseconds: !0 })} %c\xd7%c ${o}`),
                                                    `color:${K.system}`,
                                                    'color:inherit',
                                                ),
                                                    console.log(t),
                                                    console.groupEnd();
                                            }),
                                            (t.send = new Proxy(t.send, {
                                                apply(e, a, o) {
                                                    let [s] = o,
                                                        r = new MessageEvent('message', { data: s });
                                                    return (
                                                        Object.defineProperties(r, {
                                                            currentTarget: { enumerable: !0, writable: !1, value: t.socket },
                                                            target: { enumerable: !0, writable: !1, value: t.socket },
                                                        }),
                                                        queueMicrotask(() => {
                                                            Z(r);
                                                        }),
                                                        Reflect.apply(e, a, o)
                                                    );
                                                },
                                            })),
                                            a.addEventListener(
                                                'open',
                                                () => {
                                                    a.addEventListener('message', (e) => {
                                                        ee(e);
                                                    });
                                                },
                                                { once: !0 },
                                            ),
                                            (a.send = new Proxy(a.send, {
                                                apply(e, t, o) {
                                                    let [s] = o,
                                                        r = new MessageEvent('message', { data: s });
                                                    return (
                                                        Object.defineProperties(r, {
                                                            currentTarget: { enumerable: !0, writable: !1, value: a.socket },
                                                            target: { enumerable: !0, writable: !1, value: a.socket },
                                                        }),
                                                        Q(r),
                                                        Reflect.apply(e, t, o)
                                                    );
                                                },
                                            }));
                                    })(e);
                            },
                            onPassthroughConnection() {},
                        }),
                        F.on('connection', async (e) => {
                            let a = t.getHandlers().filter(g('EventHandler'));
                            if (a.length > 0) {
                                t?.onMockedConnection(e), await Promise.all(a.map((t) => t.run(e)));
                                return;
                            }
                            let o = new Request(e.client.url, { headers: { upgrade: 'websocket', connection: 'upgrade' } });
                            await c(o, t.getUnhandledRequestStrategy()).catch((t) => {
                                let a = new Event('error');
                                Object.defineProperty(a, 'cause', { enumerable: !0, configurable: !1, value: t }), e.client.socket.dispatchEvent(a);
                            }),
                                t?.onPassthroughConnection(e),
                                e.server.connect();
                        }),
                        F.apply(),
                        this.subscriptions.push(() => {
                            F.dispose();
                        }),
                        !ep())
                    ) {
                        let e = (function (e, t) {
                            let a = new eV({ name: 'fallback', interceptors: [new tl(), new tv()] });
                            return (
                                a.on('request', async ({ request: a, requestId: o, controller: s }) => {
                                    let r = a.clone(),
                                        i = await p(a, o, e.getRequestHandlers().filter(g('RequestHandler')), t, e.emitter, {
                                            resolutionContext: { quiet: t.quiet },
                                            onMockedResponse(a, { handler: o, parsedResult: s }) {
                                                t.quiet ||
                                                    e.emitter.once('response:mocked', ({ response: e }) => {
                                                        o.log({ request: r, response: e, parsedResult: s });
                                                    });
                                            },
                                        });
                                    i && s.respondWith(i);
                                }),
                                a.on('response', ({ response: t, isMockedResponse: a, request: o, requestId: s }) => {
                                    e.emitter.emit(a ? 'response:mocked' : 'response:bypass', { response: t, request: o, requestId: s });
                                }),
                                a.apply(),
                                a
                            );
                        })(this.context, this.context.startOptions);
                        this.subscriptions.push(() => {
                            e.dispose();
                        }),
                            (this.context.isMockingEnabled = !0),
                            eh({ message: 'Mocking enabled (fallback mode).', quiet: this.context.startOptions.quiet });
                        return;
                    }
                    let o =
                            ((a = this.context),
                            function (e, t) {
                                return (async () => {
                                    var o;
                                    a.workerChannel.removeAllListeners(),
                                        a.workerChannel.on('REQUEST', async (t) => {
                                            if (!a.isMockingEnabled && a.workerStoppedAt && t.data.interceptedAt > a.workerStoppedAt)
                                                return void t.postMessage('PASSTHROUGH');
                                            let o = t.data.id,
                                                s = em(t.data),
                                                n = s.clone(),
                                                l = s.clone();
                                            i.w.cache.set(s, l);
                                            try {
                                                await p(s, o, a.getRequestHandlers().filter(g('RequestHandler')), e, a.emitter, {
                                                    resolutionContext: { quiet: e.quiet },
                                                    onPassthroughResponse() {
                                                        t.postMessage('PASSTHROUGH');
                                                    },
                                                    async onMockedResponse(o, { handler: s, parsedResult: r }) {
                                                        let i = o.clone(),
                                                            l = o.clone(),
                                                            u = { status: o.status, statusText: o.statusText, headers: Object.fromEntries(o.headers.entries()) };
                                                        if (eg) {
                                                            let e = o.body;
                                                            t.postMessage('MOCK_RESPONSE', { ...u, body: e }, e ? [e] : void 0);
                                                        } else {
                                                            let e = null === o.body ? null : await i.arrayBuffer();
                                                            t.postMessage('MOCK_RESPONSE', { ...u, body: e });
                                                        }
                                                        e.quiet ||
                                                            a.emitter.once('response:mocked', () => {
                                                                s.log({ request: n, response: l, parsedResult: r });
                                                            });
                                                    },
                                                });
                                            } catch (e) {
                                                e instanceof Error &&
                                                    (r.J.error(
                                                        `Uncaught exception in the request handler for "%s %s":

%s

This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/http/mocking-responses/error-responses`,
                                                        s.method,
                                                        s.url,
                                                        e.stack ?? e,
                                                    ),
                                                    t.postMessage('MOCK_RESPONSE', {
                                                        status: 500,
                                                        statusText: 'Request Handler Error',
                                                        headers: { 'Content-Type': 'application/json' },
                                                        body: JSON.stringify({ name: e.name, message: e.message, stack: e.stack }),
                                                    }));
                                            }
                                        }),
                                        a.workerChannel.on('RESPONSE', (e) => {
                                            let t = e.data,
                                                o = em(t.request);
                                            if (t.response.type?.includes('opaque')) return;
                                            let s =
                                                0 === t.response.status
                                                    ? Response.error()
                                                    : new eF(eF.isResponseWithBody(t.response.status) ? t.response.body : null, { ...t.response, url: o.url });
                                            a.emitter.emit(t.isMockedResponse ? 'response:mocked' : 'response:bypass', {
                                                requestId: t.request.id,
                                                request: o,
                                                response: s,
                                            });
                                        });
                                    let [s, n] = await ed(e.serviceWorker.url, e.serviceWorker.options, e.findWorker);
                                    if (!s)
                                        throw Error(
                                            t?.findWorker
                                                ? r.J.formatMessage(
                                                      `Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`,
                                                      e.serviceWorker.url,
                                                  )
                                                : r.J.formatMessage(
                                                      `Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`,
                                                      e.serviceWorker.url,
                                                      location.host,
                                                  ),
                                        );
                                    return (
                                        a.workerPromise.resolve(s),
                                        (a.registration = n),
                                        window.addEventListener('beforeunload', () => {
                                            'redundant' !== s.state && a.workerChannel.postMessage('CLIENT_CLOSED'),
                                                window.clearInterval(a.keepAliveInterval),
                                                window.postMessage({ type: 'msw/worker:stop' });
                                        }),
                                        await (function (e) {
                                            let t = new en();
                                            return (
                                                e.workerChannel.postMessage('INTEGRITY_CHECK_REQUEST'),
                                                e.workerChannel.once('INTEGRITY_CHECK_RESPONSE', (e) => {
                                                    let { checksum: a, packageVersion: o } = e.data;
                                                    '4db4a41e972cec1b64cc569c66952d82' !== a &&
                                                        r.J
                                                            .warn(`The currently registered Service Worker has been generated by a different version of MSW (${o}) and may not be fully compatible with the installed version.

It's recommended you update your worker script by running this command:

  \u2022 npx msw init <PUBLIC_DIR>

You can also automate this process and make the worker script update automatically upon the library installations. Read more: https://mswjs.io/docs/cli/init.`),
                                                        t.resolve();
                                                }),
                                                t
                                            );
                                        })(a).catch((e) => {
                                            r.J.error(
                                                'Error while checking the worker script integrity. Please report this on GitHub (https://github.com/mswjs/msw/issues) and include the original error below.',
                                            ),
                                                console.error(e);
                                        }),
                                        (a.keepAliveInterval = window.setInterval(() => a.workerChannel.postMessage('KEEPALIVE_REQUEST'), 5e3)),
                                        (o = a.startOptions),
                                        o?.quiet ||
                                            location.href.startsWith(n.scope) ||
                                            r.J
                                                .warn(`Cannot intercept requests on this page because it's outside of the worker's scope ("${n.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`),
                                        n
                                    );
                                })().then(async (t) => {
                                    let o = t.installing || t.waiting;
                                    if (o) {
                                        let e = new en();
                                        o.addEventListener('statechange', () => {
                                            'activated' === o.state && e.resolve();
                                        }),
                                            await e;
                                    }
                                    return (
                                        await (function (e, t) {
                                            let a = new en();
                                            return (
                                                e.workerChannel.postMessage('MOCK_ACTIVATE'),
                                                e.workerChannel.once('MOCKING_ENABLED', async (o) => {
                                                    e.isMockingEnabled = !0;
                                                    let s = await e.workerPromise;
                                                    eh({ quiet: t.quiet, workerScope: e.registration?.scope, workerUrl: s.scriptURL, client: o.data.client }),
                                                        a.resolve(!0);
                                                }),
                                                a
                                            );
                                        })(a, e).catch((e) => {
                                            throw (
                                                (r.J.error(
                                                    'Failed to enable mocking. Please report this on GitHub (https://github.com/mswjs/msw/issues) and include the original error below.',
                                                ),
                                                e)
                                            );
                                        }),
                                        t
                                    );
                                });
                            }),
                        s = await o(this.context.startOptions, e);
                    return (this.context.isMockingEnabled = !0), s;
                }
                stop() {
                    if ((super.dispose(), !this.context.isMockingEnabled))
                        return void r.J.warn(
                            'Found a redundant "worker.stop()" call. Notice that stopping the worker after it has already been stopped has no effect. Consider removing this "worker.stop()" call.',
                        );
                    (this.context.isMockingEnabled = !1),
                        (this.context.workerStoppedAt = Date.now()),
                        this.context.emitter.removeAllListeners(),
                        ep() && (this.context.workerChannel.removeAllListeners('RESPONSE'), window.clearInterval(this.context.keepAliveInterval)),
                        window.postMessage({ type: 'msw/worker:stop' }),
                        (function (e = {}) {
                            e.quiet || console.log(`%c${r.J.formatMessage('Mocking disabled.')}`, 'color:orangered;font-weight:bold;');
                        })({ quiet: this.context.startOptions?.quiet });
                }
            };
            function tx(...e) {
                return new tw(...e);
            }
        },
        93679: (e, t, a) => {
            a.d(t, { T: () => s });
            let o = /[?|#].*$/g;
            function s(e) {
                return e.endsWith('?') ? e : e.replace(o, '');
            }
        },
    },
]);
