'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4738],
    {
        24738: (e, r, t) => {
            function n(e, r, t, n) {
                for (let o = 0, s = e.length; o < s; o++) {
                    let s = e[o];
                    (r && s.setTracerProvider(r), t && s.setMeterProvider(t), n && s.setLoggerProvider && s.setLoggerProvider(n), s.getConfig().enabled || s.enable());
                }
                return () =>
                    (function (e) {
                        for (let r of e) r.disable();
                    })(e);
            }
            t.d(r, { enableInstrumentations: () => n });
        },
    },
]);
