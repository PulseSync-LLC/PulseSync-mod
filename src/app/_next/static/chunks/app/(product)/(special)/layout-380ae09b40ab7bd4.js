(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3433],
    {
        13538: (e, s, d) => {
            Promise.resolve().then(d.bind(d, 83233));
        },
        35977: (e) => {
            e.exports = { body: 'layout_body__c8t_k' };
        },
        83233: (e, s, d) => {
            'use strict';
            d.r(s), d.d(s, { default: () => u });
            var o = d(61910),
                t = d(35977),
                n = d.n(t);
            let u = (e) => {
                let { children: s } = e;
                return (
                    (0, o.useEffect)(
                        () => (
                            window.document.body.classList.add(n().body),
                            () => {
                                window.document.body.classList.remove(n().body);
                            }
                        ),
                        [],
                    ),
                    s
                );
            };
        },
    },
    (e) => {
        e.O(0, [4968, 5843, 3290, 7358], () => e((e.s = 13538))), (_N_E = e.O());
    },
]);
