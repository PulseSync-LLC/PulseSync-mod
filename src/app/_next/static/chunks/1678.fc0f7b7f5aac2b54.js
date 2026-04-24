'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1678],
    {
        31678: (e, t, a) => {
            a.d(t, { w: () => s });
            var o = a(33878),
                n = a(49124);
            let s = (e, t) =>
                (0, o.toBoolean)(!1) && !1 === (0, o.toBoolean)(n.env.LOCAL_PROD_BUILD)
                    ? 'http://music-backend-music-api-gateway.envoy.localhost:9080'
                    : 'string' == typeof t && t.length > 0
                      ? t
                      : e;
        },
    },
]);
