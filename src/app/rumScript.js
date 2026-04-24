!(function (e) {
    if (((e.Ya = e.Ya || {}), Ya.Rum)) throw new Error('Rum: interface is already defined');
    var t = e.performance,
        n = (t && t.timing && t.timing.navigationStart) || Ya.startPageLoad || +new Date(),
        i = e.requestAnimationFrame,
        s = function () {},
        r = (Ya.Rum = {
            _defTimes: [],
            _defRes: [],
            _countersToExposeAsEvents: ['2325', '2616.85.1928', 'react.inited'],
            enabled: !!t,
            version: '6.1.24',
            vsStart: document.visibilityState,
            vsChanged: !1,
            vsChangeTime: 1 / 0,
            _deltaMarks: {},
            _markListeners: {},
            _onComplete: [],
            _onInit: [],
            _unsubscribers: [],
            _eventLisneters: {},
            _settings: {},
            _vars: {},
            init: function (e, t) {
                (r._settings = e), (r._vars = t);
            },
            getTime:
                t && t.now
                    ? function () {
                          return t.now();
                      }
                    : Date.now
                      ? function () {
                            return Date.now() - n;
                        }
                      : function () {
                            return new Date() - n;
                        },
            time: function (e) {
                r._deltaMarks[e] = [r.getTime()];
            },
            timeEnd: function (e, t) {
                var n = r._deltaMarks[e];
                n && 0 !== n.length && n.push(r.getTime(), t);
            },
            sendTimeMark: function (e, t, n, i) {
                void 0 === t && (t = r.getTime()), r.emit({ metricName: 'defTimes', data: [e, t, i] }), r.mark(e, t);
            },
            sendDelta: function (e, t, n, i) {
                var s,
                    a = r._deltaMarks;
                a[e] || void 0 === t || ((s = i && i.originalEndTime ? i.originalEndTime : r.getTime()), (a[e] = [s - t, s, n]));
            },
            sendResTiming: function (e, t) {
                r.emit({ metricName: 'defRes', data: [e, t] });
            },
            sendRaf: function (e) {
                var t = r.getSetting('forcePaintTimeSending');
                if (i && (t || r.isTimeAfterPageShow(r.getTime()))) {
                    var n = '2616.' + e;
                    i(function () {
                        r.getSetting('sendFirstRaf') && r.sendTimeMark(n + '.205'),
                            i(function () {
                                r.sendTimeMark(n + '.1928');
                            });
                    });
                }
            },
            isVisibilityChanged: function () {
                return r.vsStart && ('visible' !== r.vsStart || r.vsChanged);
            },
            isTimeAfterPageShow: function (e) {
                return 'visible' === r.vsStart || r.vsChangeTime < e;
            },
            mark:
                t && t.mark
                    ? function (e, n) {
                          t.mark(e + (n ? ': ' + n : ''));
                      }
                    : function () {},
            getSetting: function (e) {
                var t = r._settings[e];
                return null === t ? null : t || '';
            },
            on: function (e, t) {
                if ('function' == typeof t)
                    return (
                        (r._markListeners[e] = r._markListeners[e] || []).push(t),
                        function () {
                            if (r._markListeners[e]) {
                                var n = r._markListeners[e].indexOf(t);
                                n > -1 && r._markListeners[e].splice(n, 1);
                            }
                        }
                    );
            },
            noop: s,
            sendTrafficData: s,
            finalizeLayoutShiftScore: s,
            finalizeLargestContentfulPaint: s,
            getLCPAdditionalParams: s,
            getCLSAdditionalParams: s,
            getINPAdditionalParams: s,
            getImageGoodnessAdditionalParams: s,
            _eventListeners: {},
            _eventsBuffer: {},
            subscribe: function (e, t) {
                if (!r.getSetting('noEvents'))
                    return (
                        (this._eventLisneters[e] = this._eventLisneters[e] || new Set()),
                        this._eventLisneters[e].add(t),
                        function () {
                            this.unsubscribe(e, t);
                        }.bind(this)
                    );
            },
            unsubscribe: function (e, t) {
                this._eventLisneters[e].delete(t);
            },
            emit: function (e) {
                if (!r.getSetting('noEvents')) {
                    var t = (r.getSetting('eventsLimits') && r.getSetting('eventsLimits')[e.metricName]) || 20;
                    this._eventLisneters[e.metricName] &&
                        this._eventLisneters[e.metricName].forEach(function (t) {
                            t(e);
                        }),
                        (this._eventsBuffer[e.metricName] = this._eventsBuffer[e.metricName] || []),
                        this._eventsBuffer[e.metricName].push(e),
                        this._eventsBuffer[e.metricName].length > t && (this._eventsBuffer[e.metricName].length = Math.floor(t / 2));
                }
            },
            getBufferedEvents: function (e) {
                var t = this._eventsBuffer,
                    n = {};
                return (
                    Object.keys(t).forEach(function (i) {
                        -1 !== e.indexOf(i) && (n[i] = t[i]);
                    }),
                    n
                );
            },
            clearEvents: function (e) {
                this._eventsBuffer[e] && (this._eventsBuffer[e].length = 0);
            },
        });
    function a() {
        (Ya.Rum.vsChanged = !0), (Ya.Rum.vsChangeTime = r.getTime()), removeEventListener('visibilitychange', a);
    }
    addEventListener('visibilitychange', a), (r._onVisibilityChange = a);
})(window);

!(function () {
    var e,
        t,
        n,
        i = Ya.Rum,
        o = 42,
        r = 4e4,
        g = 15,
        a = [],
        s = i.getSetting('countersInitialDelay') || 0;
    if (s) {
        var l;
        function c() {
            removeEventListener('visibilitychange', u), clearTimeout(l), (s = 0), h();
        }
        function u() {
            document.hidden && c();
        }
        (l = setTimeout(c, s)), addEventListener('visibilitychange', u);
    }
    function h() {
        if (t && a.length) {
            for (var n = 0, i = 0, s = 0; i < a.length && s <= r && n < o; i++) (s += (i ? 2 : 0) + a[i].length) <= r && n++;
            var l = a.splice(0, n);
            f(t, l.join('\r\n')), a.length && (e = setTimeout(h, g));
        } else a.length = 0;
    }
    function f(e, t) {
        if (!(navigator.sendBeacon && n && navigator.sendBeacon(e, t))) {
            var o = Boolean(i.getSetting('sendCookie')),
                r = new XMLHttpRequest();
            r.open('POST', e), (r.withCredentials = o), r.send(t);
        }
    }
    i.send = function (l, c, u, f, d, v, m, S) {
        (t = i.getSetting('clck')),
            (n = i.getSetting('beacon')),
            (o = i.getSetting('maxBatchCounters') || o),
            (r = i.getSetting('maxBatchLength') || r),
            (g = i.getSetting('countersBatchTimeout') || g),
            (function (t, n, i, l, c, u, f) {
                clearTimeout(e);
                var d = [
                    t ? '/reqid=' + t : '',
                    n ? '/' + n.join('/') : '',
                    i ? '/path=' + i : '',
                    l ? '/events=' + l : '',
                    c ? '/slots=' + c.join(';') : '',
                    u ? '/experiments=' + u.join(';') : '',
                    f ? '/vars=' + f : '',
                    '/cts=' + new Date().getTime(),
                    '',
                    '/*',
                ].join('');
                d.length > r
                    ? 'undefined' != typeof console && console.error && console.error('Counter length ' + d.length + ' is more than allowed ' + r, d)
                    : (a.push(d),
                      s ||
                          ((function () {
                              if (a.length >= o) return !0;
                              for (var e = 0, t = 0; t < a.length; t++) if ((e += (t ? 2 : 0) + a[t].length) >= r) return !0;
                              return !1;
                          })()
                              ? h()
                              : (e = setTimeout(h, g))));
            })(i.getSetting('reqid'), m, c, d, i.getSetting('slots'), i.getSetting('experiments'), u);
    };
})();

!(function () {
    if (window.PerformanceLongTaskTiming) {
        var e = function (e, n) {
                return (e = e.concat(n)).length > 300 && (e = e.slice(e.length - 300)), e;
            },
            n = 'undefined' != typeof PerformanceLongAnimationFrameTiming,
            t = n ? ['longtask', 'long-animation-frame'] : ['longtask'];
        function r() {
            var r = (Ya.Rum._tti = {
                events: [],
                loafEvents: n ? [] : void 0,
                eventsAfterTTI: [],
                fired: !1,
                observer: new PerformanceObserver(function (t) {
                    var o = t.getEntriesByType('longtask'),
                        s = t.getEntriesByType('long-animation-frame');
                    (r.events = e(r.events, o)), n && (r.loafEvents = e(r.loafEvents, s)), r.fired && (r.eventsAfterTTI = e(r.eventsAfterTTI, o));
                }),
            });
            r.observer.observe({ entryTypes: t }),
                Ya.Rum._unsubscribers &&
                    Ya.Rum._unsubscribers.push(function () {
                        r.observer.disconnect();
                    });
        }
        r(), Ya.Rum._onInit.push(r);
    }
})();

Ya.Rum.observeDOMNode = window.IntersectionObserver
    ? function (e, i, n) {
          var t = this,
              o = Ya.Rum.getSetting('forcePaintTimeSending');
          !(function r() {
              if (o || !t.isVisibilityChanged()) {
                  var s = 'string' == typeof i ? document.querySelector(i) : i;
                  s
                      ? new IntersectionObserver(function (i, n) {
                            (!o && t.isVisibilityChanged()) || (Ya.Rum.sendTimeMark(e), n.unobserve(s));
                        }, n).observe(s)
                      : setTimeout(r, 100);
              }
          })();
      }
    : function () {};

!(function (e) {
    var t = window.requestAnimationFrame,
        a = console;
    if (!e) throw new Error('Rum: interface is not included');
    if (e.enabled) {
        e.sendAnimationSpeed = function (a, i, r) {
            if (t) {
                var n = [],
                    s = e.getTime(),
                    o = e.getTime();
                !(function d() {
                    t(function () {
                        var t = e.getTime();
                        n.push(t - o),
                            (o = t),
                            t - s < i
                                ? d()
                                : (e.sendDelta(
                                      a + '.avg',
                                      (function (e) {
                                          for (var t = e.length, a = 0, i = 0; i < t; i++) a += e[i];
                                          return a / t;
                                      })(n),
                                      r,
                                  ),
                                  e.sendDelta(
                                      a + '.mdn',
                                      (function (e) {
                                          var t = e.sort(function (e, t) {
                                                  return e - t;
                                              }),
                                              a = e.length >> 1;
                                          return t.length % 2 ? t[a] : (t[a - 1] + t[a]) / 2;
                                      })(n),
                                      r,
                                  ));
                    });
                })();
            }
        };
        var i = {},
            r = {};
        e.spa = {
            makeSpaSubPage: function (t, a, n, s, o) {
                (a = a || { finishDataLoadingMetric: !0, startDataRenderingMetric: !0, finishDataRenderingMetric: !0 }),
                    (n = n || !1),
                    (s = s || !1) && e.completeSession();
                var d = e.makeSubPage((n ? 'block' : 'page') + '.' + t);
                return (
                    o &&
                        Object.keys(o).forEach(function (e) {
                            d[e] = o[e];
                        }),
                    (r[t] = { spaMetricsOptions: a }),
                    (i[t] = d),
                    d
                );
            },
            startStubRendering: function (s, o) {
                o = !1 !== o;
                var d = i[s],
                    g = r[s];
                if (d && g)
                    if (g.stubRenderingStartTime) a.error('startStubRendering have been called repeatedly for subpage ' + s + '.');
                    else {
                        var p = e.getTime();
                        (g.stubRenderingStartTime = p),
                            g.spaMetricsOptions && g.spaMetricsOptions.startStubRenderingMetric && e.sendDelta('stub.render.start', p - Number(d[689.2322]), d),
                            o &&
                                t &&
                                t(function () {
                                    n(s);
                                });
                    }
                else a.error('No subpage ' + s + '.');
            },
            finishStubRendering: n,
            startDataLoading: function (t) {
                var n = i[t],
                    s = r[t];
                if (n && s)
                    if (s.dataLoadingStartTime) a.error('startDataLoading have been called repeatedly for subpage ' + t + '.');
                    else {
                        var o = e.getTime();
                        (s.dataLoadingStartTime = o),
                            s.spaMetricsOptions && s.spaMetricsOptions.startDataLoadingMetric && e.sendDelta('data.load.start', o - Number(n[689.2322]), n);
                    }
                else a.error('No subpage ' + t + '.');
            },
            finishDataLoading: function (t, n) {
                n = n || !1;
                var s = i[t],
                    o = r[t];
                if (s && o)
                    if (o.dataLoadingFinishTime) a.error('finishDataLoading have been called repeatedly for subpage ' + t + '.');
                    else {
                        var d = e.getTime();
                        (o.dataLoadingFinishTime = d),
                            !o.dataLoadingStartTime &&
                                o.spaMetricsOptions &&
                                o.spaMetricsOptions.startDataLoadingMetric &&
                                a.error('No dataLoadingStartTime for subpage ' + t + '.'),
                            o.spaMetricsOptions &&
                                o.spaMetricsOptions.finishDataLoadingMetric &&
                                e.sendDelta('data.load.finish.' + (n ? 'cache' : 'network'), d - (o.dataLoadingStartTime || Number(s[689.2322])), s);
                    }
                else a.error('No subpage ' + t + '.');
            },
            startDataRendering: function (n, o, d, g) {
                (o = o || ''), (d = !1 !== d), (g = 'number' == typeof g ? g : 1e3);
                var p = i[n],
                    u = r[n];
                if (p && u)
                    if (u.dataLoadingFinishTime)
                        if (u.dataRenderingStartTime) a.error('startDataRendering have been called repeatedly for subpage ' + n + '.');
                        else {
                            var c = e.getTime();
                            (u.dataRenderingStartTime = c),
                                u.spaMetricsOptions &&
                                    u.spaMetricsOptions.startDataRenderingMetric &&
                                    e.sendDelta('data.render.start' + (o ? '.' + o : ''), c - u.dataLoadingFinishTime, p),
                                d &&
                                    t &&
                                    t(function () {
                                        s(n, o, g);
                                    });
                        }
                    else a.error('No dataLoadingFinishTime for subpage ' + n + '.');
                else a.error('No subpage ' + n + '.');
            },
            finishDataRendering: s,
            getLastSpaSubPage: function (e) {
                return i[e] || (a.error('No subpage ' + e + '.'), null);
            },
            setLogger: function (e) {
                a = e;
            },
        };
    }
    function n(t) {
        var n = i[t],
            s = r[t];
        if (n && s)
            if (s.stubRenderingFinishTime) a.error('finishStubRendering have been called repeatedly for subpage ' + t + '.');
            else {
                var o = e.getTime();
                (s.stubRenderingFinishTime = o),
                    !s.stubRenderingStartTime &&
                        s.spaMetricsOptions &&
                        s.spaMetricsOptions.startStubRenderingMetric &&
                        a.error('No stubRenderingStartTime for subpage ' + t + '.'),
                    s.spaMetricsOptions &&
                        s.spaMetricsOptions.finishStubRenderingMetric &&
                        e.sendDelta('stub.render.finish', o - (s.stubRenderingStartTime || Number(n[689.2322])), n);
            }
        else a.error('No subpage ' + t + '.');
    }
    function s(t, n, s) {
        (n = n || ''), (s = 'number' == typeof s ? s : 1e3);
        var o = i[t],
            d = r[t];
        if (o && d)
            if (d.dataRenderingStartTime)
                if (d.dataRenderingFinishTime) a.error('finishDataRendering have been called repeatedly for subpage ' + t + '.');
                else {
                    var g = e.getTime();
                    (d.dataRenderingFinishTime = g),
                        d.spaMetricsOptions &&
                            d.spaMetricsOptions.finishDataRenderingMetric &&
                            e.sendDelta('data.render.finish' + (n ? '.' + n : ''), g - d.dataRenderingStartTime, o),
                        d.spaMetricsOptions &&
                            d.spaMetricsOptions.animationSpeedMetric &&
                            e.sendAnimationSpeed &&
                            e.sendAnimationSpeed('data.render' + (n ? '.' + n : '') + '.animation', s, o);
                }
            else a.error('No dataRenderingStartTime for subpage ' + t + '.');
        else a.error('No subpage ' + t + '.');
    }
})(Ya.Rum);

function initRum({ environment, heroElement, page, platform, project, regionId, requestId, rumId, sendClientUa, service, testIds, version }) {
    const slots = testIds?.join("','");
    Ya.Rum.init(
        {
            beacon: !!navigator.sendBeacon,
            clck: 'https://yandex.ru/clck/click',
            ...(slots ? { slots } : {}),
            reqid: requestId,
            sendClientUa: sendClientUa,
        },
        {
            rum_id: rumId,
            '-region': regionId,
            '-project': `'${project}'`,
            ...(platform ? { '-platform': platform } : {}),
            ...(service ? { '-service': service } : {}),
            '-env': environment,
            '-page': page,
            '-version': version,
        },
    );
    !(function () {
        var e = Ya.Rum,
            n = !window.BigInt || !('PerformanceObserver' in window);
        function t(n) {
            e._unsubscribers.push(n);
        }
        function i(e, i, o) {
            if (!n) {
                var a = o || {};
                if (e) {
                    (a.type = e), a.hasOwnProperty('buffered') || (a.buffered = !0);
                    var s = new PerformanceObserver(function (e, n) {
                        return i(e.getEntries(), n);
                    });
                    return (
                        r(function () {
                            try {
                                s.observe(a);
                            } catch (e) {
                                return void console.error(e.message);
                            }
                            t(function () {
                                s.disconnect();
                            });
                        }, 0),
                        s
                    );
                }
                throw new Error('PO without type field is forbidden');
            }
        }
        function r(e, n) {
            var i = setTimeout(e, n);
            return (
                t(function () {
                    clearInterval(i);
                }),
                i
            );
        }
        function o(e, n, i) {
            addEventListener(e, n, i),
                t(function () {
                    removeEventListener(e, n, i);
                });
        }
        function a(e, n, t) {
            o('visibilitychange', function i() {
                if ('hidden' === document.visibilityState) {
                    try {
                        t || (removeEventListener('visibilitychange', i), e.disconnect());
                    } catch (e) {}
                    n();
                }
            }),
                o('beforeunload', n);
        }
        function s(e, n) {
            return 'string' == typeof e ? encodeURIComponent(e) : Math.round(1e3 * (e - (n || 0))) / 1e3;
        }
        function c(e) {
            if (!e) return '';
            var n = (e.tagName || '').toLowerCase(),
                t = e.className && void 0 !== e.className.baseVal ? e.className.baseVal : e.className;
            return n + (t ? (' ' + t).replace(/\s+/g, '.') : '');
        }
        function u(e) {
            function n() {
                removeEventListener('DOMContentLoaded', n), removeEventListener('load', n), e();
            }
            'loading' === document.readyState ? (o('DOMContentLoaded', n), o('load', n)) : e();
        }
        function d(n) {
            e._onComplete.push(n);
        }
        function f() {
            return e._periodicTasks;
        }
        function l() {
            var n = e._vars;
            return Object.keys(n).map(function (e) {
                return e + '=' + encodeURIComponent(n[e]).replace(/\*/g, '%2A');
            });
        }
        var m = {
            connectEnd: 2116,
            connectStart: 2114,
            decodedBodySize: 2886,
            domComplete: 2124,
            domContentLoadedEventEnd: 2131,
            domContentLoadedEventStart: 2123,
            domInteractive: 2770,
            domLoading: 2769,
            domainLookupEnd: 2113,
            domainLookupStart: 2112,
            duration: 2136,
            encodedBodySize: 2887,
            entryType: 2888,
            fetchStart: 2111,
            initiatorType: 2889,
            loadEventEnd: 2126,
            loadEventStart: 2125,
            nextHopProtocol: 2890,
            redirectCount: 1385,
            redirectEnd: 2110,
            redirectStart: 2109,
            requestStart: 2117,
            responseEnd: 2120,
            responseStart: 2119,
            secureConnectionStart: 2115,
            startTime: 2322,
            transferSize: 2323,
            type: 76,
            unloadEventEnd: 2128,
            unloadEventStart: 2127,
            workerStart: 2137,
        };
        function v(n, t) {
            Object.keys(m).forEach(function (e) {
                if (e in t) {
                    var i = t[e];
                    (i || 0 === i) && n.push(m[e] + '=' + s(i));
                }
            }),
                n.push(''.concat(625, '=').concat(e.version));
        }
        var g,
            p,
            h,
            y,
            S,
            T = e.getSetting('savedDeltasLimit') || 0,
            b = document.createElement('link'),
            w = window.performance || {},
            E = 'function' == typeof w.getEntriesByType,
            C = 0;
        function k(n, t, i, r, o) {
            void 0 === t && (t = e.getTime()), (void 0 !== i && !0 !== i) || e.mark(n, t);
            var a = L(n);
            if ((a.push('207=' + s(t)), _(a, r))) {
                O('690.2096.207', a, o && o.force), (g[n] = g[n] || []), g[n].push(t);
                var c = e._markListeners[n];
                c &&
                    c.length &&
                    c.forEach(function (e) {
                        e(t);
                    }),
                    e.emit({ metricName: n, value: t, params: r });
            }
        }
        function L(n) {
            return S.concat([
                e.isVisibilityChanged() ? '-vsChanged=1' : '',
                '1701=' + n,
                e.ajaxStart && '1201.2154=' + s(e.ajaxStart),
                e.ajaxComplete && '1201.2052=' + s(e.ajaxComplete),
            ]);
        }
        function P() {
            (y = l()), e.getSetting('sendClientUa') && y.push('1042=' + encodeURIComponent(navigator.userAgent));
        }
        function M() {
            var e = window.performance && window.performance.timing && window.performance.timing.navigationStart;
            S = y.concat(['143.2129=' + e]);
        }
        function _(e, n) {
            if (n) {
                if (n.isCanceled && n.isCanceled()) return !1;
                var t = e.reduce(function (e, n, t) {
                    return 'string' == typeof n && (e[n.split('=')[0]] = t), e;
                }, {});
                Object.keys(n).forEach(function (i) {
                    if ('function' != typeof n[i]) {
                        var r = t[i],
                            o = i + '=' + n[i];
                        void 0 === r ? e.push(o) : (e[r] = o);
                    }
                });
            }
            return !0;
        }
        function O(n, t, i) {
            var r = encodeURIComponent(window.YaStaticRegion || 'unknown');
            t.push('-cdn=' + r);
            var o = t.filter(Boolean).join(',');
            e.send(null, n, o, void 0, void 0, void 0, void 0, i);
        }
        function I(e, n, t) {
            O(e, z().concat(n), t);
        }
        function N(n, t) {
            var i = h[n];
            i && 0 !== i.length && (i.push(e.getTime(), t), R(n));
        }
        function R(n, t, i, r) {
            var o,
                a,
                c,
                u = h[n];
            if (
                (void 0 !== t ? (o = (a = r && r.originalEndTime ? r.originalEndTime : e.getTime()) - t) : u && ((o = u[0]), (a = u[1]), (c = u[2])),
                void 0 !== o && void 0 !== a)
            ) {
                var d = L(n);
                d.push('207.2154=' + s(o), '207.1428=' + s(a), '2877=' + s(a - o)),
                    _(d, i) &&
                        _(d, c) &&
                        (O('690.2096.2877', d, r && r.force),
                        C < T && ((p[n] = p[n] || []), p[n].push(a - o), C++),
                        e.emit({ metricName: n, value: a - o, params: { start: o, end: a } }),
                        delete h[n]);
            }
        }
        function x(e, n) {
            if (!E) return n(null);
            b.href = e;
            var t = 0,
                i = 100,
                o = b.href;
            r(function e() {
                var a = w.getEntriesByName(o);
                if (a.length) return n(a);
                t++ < 3 ? (r(e, i), (i += i)) : n(null);
            }, 0);
        }
        function A(e, n, t) {
            x(n, function (i) {
                i && j(e, i[i.length - 1], n, t);
            });
        }
        function j(n, t, i, r) {
            var o = L(n);
            e.getSetting('sendUrlInResTiming') && o.push('13=' + encodeURIComponent(i)), v(o, t), _(o, r), O('690.2096.2044', o);
        }
        function z() {
            return y;
        }
        var B = {
                bluetooth: 2064,
                cellular: 2065,
                ethernet: 2066,
                none: 1229,
                wifi: 2067,
                wimax: 2068,
                other: 861,
                unknown: 836,
                0: 836,
                1: 2066,
                2: 2067,
                3: 2070,
                4: 2071,
                5: 2768,
            },
            V = navigator.connection;
        function U(e) {
            if (V) {
                var n = B[V.type];
                e.push(
                    '2437=' + (n || 2771),
                    void 0 !== V.downlinkMax && '2439=' + V.downlinkMax,
                    V.effectiveType && '2870=' + V.effectiveType,
                    void 0 !== V.rtt && 'rtt=' + V.rtt,
                    void 0 !== V.downlink && 'dwl=' + V.downlink,
                    !n && 'rawType=' + V.type,
                );
            }
        }
        var D,
            F,
            W,
            H,
            J,
            Q,
            Y,
            q,
            G = !1,
            $ = 1 / 0,
            K = 1 / 0,
            X = Boolean(
                window.PerformanceObserver &&
                    window.PerformanceObserver.supportedEntryTypes &&
                    -1 !== window.PerformanceObserver.supportedEntryTypes.indexOf('layout-shift'),
            )
                ? 0
                : null;
        function Z() {
            J > F && ((F = J), (W = H), e.emit({ metricName: 'cls-debug', value: F, params: { clsEntries: W, target: ee(W) } }));
        }
        function ee(e) {
            var n;
            if (!e) return null;
            var t = null;
            if (
                (n = e.reduce(function (e, n) {
                    return e && e.value > n.value ? e : n;
                })) &&
                n.sources &&
                n.sources.length
            ) {
                for (var i = 0; i < n.sources.length; i++) {
                    var r = n.sources[i];
                    if (r.node && 1 === r.node.nodeType) {
                        t = r;
                        break;
                    }
                }
                t = t || n.sources[0];
            }
            return t;
        }
        function ne(e) {
            null == F && (F = 0);
            for (var n = 0; n < e.length; n++) {
                var t = e[n];
                t.hadRecentInput ||
                    (J && t.startTime - H[H.length - 1].startTime < $ && t.startTime - H[0].startTime < K
                        ? ((J += t.value), H.push(t))
                        : (Z(), (J = t.value), (H = [t])));
            }
            Z();
        }
        function te() {
            (F = X), (D = void 0), (W = null), (H = null), (J = null), (G = !1);
        }
        function ie(n) {
            if (null != F && !G) {
                var t = Math.round(1e6 * F) / 1e6;
                if (D !== t) {
                    (D = t), e.getSetting('enableContinuousCollection') || (G = !0);
                    var i = ee(W),
                        r = ['s=' + t];
                    r.push('target=' + c(i && i.node));
                    var o = e.getCLSAdditionalParams(i);
                    o && _(r, o), I('690.2096.4004', r, n), e.emit({ metricName: 'cls-debug', value: F, params: { clsEntries: H, target: i, isFinalized: G } });
                }
            }
        }
        function re(n) {
            var t = n[n.length - 1];
            if (
                ((Q = e.correctTime(t.renderTime || t.loadTime)), (Y = t), e.emit({ metricName: 'largest-contentful-paint-debug', value: Q, params: { entry: t } }), !q)
            ) {
                var i = Q;
                e.whenActivated(function () {
                    return k('largest-loading-elem-paint', i);
                }),
                    (q = !0);
            }
        }
        function oe(n) {
            if (null != Q) {
                var t = e.getLCPAdditionalParams(Y);
                k('largest-contentful-paint', Q, !1, t, n && { force: !0 }),
                    e.emit({ metricName: 'largest-contentful-paint-debug', value: Q, params: { additionalParams: t, entry: Y, isFinalized: !0 } }),
                    (Q = null),
                    (Y = null);
            }
        }
        e.getLCPAdditionalParams === e.noop &&
            (e.getLCPAdditionalParams = function (n) {
                var t = {},
                    i = n.element;
                if (i) {
                    (t['-className'] = e.getSelector(i)), (t['-tagName'] = i.tagName.toLowerCase());
                    var r = i.getBoundingClientRect();
                    (t['-width'] = r.width), (t['-height'] = r.height);
                }
                return n.size && (t['-size'] = n.size), t;
            });
        var ae = { 'first-paint': 2793, 'first-contentful-paint': 2794 },
            se = Object.keys(ae).length,
            ce = {},
            ue = window.performance || {},
            de = 'function' == typeof ue.getEntriesByType,
            fe = 0;
        function le() {
            if (de && (e.getSetting('forcePaintTimeSending') || !e.isVisibilityChanged()))
                for (
                    var n = ue.getEntriesByType('paint'),
                        t = function () {
                            var t = n[i],
                                r = ae[t.name];
                            if (r && !ce[t.name]) {
                                (ce[t.name] = !0), fe++;
                                var o = '1926.' + r;
                                e.whenActivated(function () {
                                    return k(o, e.correctTime(t.startTime));
                                });
                            }
                        },
                        i = 0;
                    i < n.length;
                    i++
                )
                    t();
        }
        function me() {
            return e._tti.events || [];
        }
        function ve() {
            return e._tti.loafEvents;
        }
        function ge() {
            return e._tti;
        }
        function pe(n) {
            return n ? (n === e.getPageUrl() ? '<page>' : n.replace(/\?.*$/, '')) : n;
        }
        function he(n, t, i) {
            if (ge()) {
                var r = e.getTime(),
                    o = 'undefined' != typeof PerformanceLongAnimationFrameTiming && e.getSetting('sendLongAnimationFrames');
                ye(function (a) {
                    var c,
                        u = { 2796.2797: Se(me(), t), 689.2322: s(r) };
                    if (o) {
                        var d = (function (e) {
                            var n = ve();
                            if (n)
                                return e
                                    ? n.filter(function (n) {
                                          return n.startTime + n.duration >= e;
                                      })
                                    : n;
                        })(t);
                        d &&
                            ((u['loaf.2797'] = Se(d, void 0, { useName: !1 })),
                            1 === e.getSetting('longAnimationFramesMode') && (u['-additional'] = encodeURIComponent(JSON.stringify({ loaf: ((c = d), c.map(Te)) }))));
                    }
                    i &&
                        Object.keys(i).forEach(function (e) {
                            u[e] = i[e];
                        }),
                        k(n || '2795', a, !0, u, { force: Boolean(o) }),
                        (e._tti.fired = !0);
                }, t);
            }
        }
        function ye(n, t) {
            var i = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).mode,
                o = void 0 === i ? 1 : i;
            ge() &&
                (t || (t = e.getTime()),
                (function i() {
                    var a,
                        s = t,
                        c = e.getTime(),
                        u = 1 === o ? me() : ve() || [],
                        d = u.length;
                    0 !== d && ((a = u[d - 1]), (s = Math.max(s, Math.floor(a.startTime + a.duration)))), c - s >= 3e3 ? n(s) : r(i, 1e3);
                })());
        }
        function Se(e, n) {
            var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).useName,
                i = void 0 === t || t;
            return (
                (n = n || 0),
                (e = e || [])
                    .filter(function (e) {
                        return n - e.startTime <= 50;
                    })
                    .map(function (e) {
                        var n = Math.floor(e.startTime),
                            t = Math.floor(n + e.duration);
                        return i
                            ? (e.name
                                  ? e.name
                                        .split('-')
                                        .map(function (e) {
                                            return e[0];
                                        })
                                        .join('')
                                  : 'u') +
                                  '-' +
                                  n +
                                  '-' +
                                  t
                            : n + '-' + t;
                    })
                    .join('.')
            );
        }
        function Te(e) {
            var n = e.blockingDuration,
                t = e.duration,
                i = e.firstUIEventTimestamp,
                r = e.renderStart,
                o = e.scripts,
                a = e.startTime,
                s = e.styleAndLayoutStart;
            return [Math.round(a), Math.round(t), o.map(we), Math.round(n), Math.round(i), Math.round(r), Math.round(s)];
        }
        function be(e) {
            return { 'user-callback': 1, 'event-listener': 2, 'resolve-promise': 3, 'reject-promise': 4, 'classic-script': 5, 'module-script': 6 }[e] || 0;
        }
        function we(e) {
            var n = e.invoker,
                t = e.sourceURL,
                i = e.sourceFunctionName,
                r = e.sourceCharPosition,
                o = e.startTime,
                a = e.duration,
                s = e.windowAttribution,
                c = e.executionStart,
                u = e.forcedStyleAndLayoutDuration,
                d = e.pauseDuration,
                f = e.invokerType;
            return [pe(n), pe(t), i, r, Math.round(o), Math.round(a), s, Math.round(c), Math.round(u), Math.round(d), be(f)];
        }
        var Ee = document.createElement('a'),
            Ce = 0,
            ke = {};
        function Le(e) {
            var n = e.transferSize;
            if (null != n) {
                Ee.href = e.name;
                var t = Ee.pathname;
                if (0 !== t.indexOf('/clck')) {
                    var i = t.lastIndexOf('.'),
                        r = '';
                    return -1 !== i && t.lastIndexOf('/') < i && t.length - i <= 5 && (r = t.slice(i + 1)), { size: n, domain: Ee.hostname, extension: r };
                }
            }
        }
        function Pe() {
            var n = e.getSetting('maxTrafficCounters') || 250;
            if (Ce >= n) return !1;
            for (var t = Object.keys(ke), i = '', r = 0; r < t.length; r++) {
                var o = t[r],
                    a = ke[o];
                i += encodeURIComponent(o) + '!' + a.count + '!' + a.size + ';';
            }
            return i.length && (Ce++, I('690.2096.361', ['d=' + i, 't=' + s(e.getTime())])), (ke = {}), Ce < n;
        }
        d(Pe);
        var Me = { visible: 1, hidden: 2, prerender: 3 },
            _e = window.performance || {},
            Oe = _e.navigation || {},
            Ie = _e.timing || {},
            Ne = Ie.navigationStart;
        function Re() {
            var n = Ie.domContentLoadedEventStart,
                t = Ie.domContentLoadedEventEnd;
            if (0 !== n || 0 !== t) {
                var i = 0 === Ie.responseStart ? Ne : Ie.responseStart,
                    o = 0 === Ie.domainLookupStart ? Ne : Ie.domainLookupStart,
                    a = [
                        '2129=' + Ne,
                        '1036=' + (o - Ne),
                        '1037=' + (Ie.domainLookupEnd - Ie.domainLookupStart),
                        '1038=' + (Ie.connectEnd - Ie.connectStart),
                        Ie.secureConnectionStart && '1383=' + (Ie.connectEnd - Ie.secureConnectionStart),
                        '1039=' + (Ie.responseStart - Ie.connectEnd),
                        '1040=' + (Ie.responseEnd - i),
                        '1040.906=' + (Ie.responseEnd - o),
                        '1310.2084=' + (Ie.domLoading - i),
                        '1310.2085=' + (Ie.domInteractive - i),
                        '1310.1309=' + (t - n),
                        '1310.1007=' + (n - i),
                        navigator.deviceMemory && '3140=' + navigator.deviceMemory,
                        navigator.hardwareConcurrency && '3141=' + navigator.hardwareConcurrency,
                    ];
                Object.keys(m).forEach(function (e) {
                    e in Ie && Ie[e] && a.push(m[e] + '=' + s(Ie[e], Ne));
                }),
                    e.vsStart ? (a.push('1484=' + (Me[e.vsStart] || 2771)), e.vsChanged && a.push('1484.719=1')) : a.push('1484=' + Me.visible),
                    Oe && (Oe.redirectCount && a.push('1384.1385=' + Oe.redirectCount), (1 !== Oe.type && 2 !== Oe.type) || a.push('770.76=' + Oe.type)),
                    U(a),
                    I('690.1033', a);
            } else r(Re, 50);
        }
        var xe = window.performance || {},
            Ae = 'function' == typeof xe.getEntriesByType;
        if (!e) throw new Error('Rum: interface is not included');
        if (e.enabled) {
            function je() {
                (g = {}), (p = {}), (C = 0), (h = e._deltaMarks), P(), M(), (e.ajaxStart = 0), (e.ajaxComplete = 0), u(Be);
            }
            function ze() {
                var n;
                (e.sendTimeMark = k), (e.sendResTiming = A), (e.sendTiming = j), (e.timeEnd = N);
                var t = (e.getBufferedEvents(['defRes']).defRes || []).map(function (e) {
                    return e.data;
                });
                for (n = 0; n < t.length; n++) A(t[n][0], t[n][1]);
                e.clearEvents('defRes');
                var i = (e.getBufferedEvents(['defTimes']).defTimes || []).map(function (e) {
                    return e.data;
                });
                for (n = 0; n < i.length; n++) k(i[n][0], i[n][1], !1, i[n][2]);
                e.clearEvents('defTimes'),
                    Object.keys(h).forEach(function (e) {
                        R(e);
                    });
            }
            function Be() {
                var n = window.performance && window.performance.timing && window.performance.timing.navigationStart,
                    t = e.getSetting('skipTiming'),
                    a = e.getSetting('techParamsByVisible');
                if (n) {
                    if (a) {
                        var s = function () {
                            'visible' !== e.vsStart
                                ? 'visible' === document.visibilityState && ((e.vsStart = 'visible'), removeEventListener('visibilitychange', s), Re())
                                : removeEventListener('visibilitychange', s);
                        };
                        addEventListener('visibilitychange', s);
                    }
                    r(function () {
                        ze(),
                            ((!t && !a) || (a && 'visible' === e.vsStart)) && Re(),
                            e.getSetting('disableFCP') ||
                                (le(),
                                fe < se &&
                                    i(
                                        'paint',
                                        function (e, n) {
                                            le(), n && fe >= se && n.disconnect();
                                        },
                                        { buffered: !0 },
                                    )),
                            e.getSetting('sendAutoElementTiming') &&
                                (!window.PerformanceObserver ||
                                    (!e.getSetting('forcePaintTimeSending') && e.isVisibilityChanged()) ||
                                    i('element', function (e) {
                                        for (var n = 0; n < e.length; n++) {
                                            var t = e[n];
                                            k('element-timing.' + t.identifier, t.startTime);
                                        }
                                    })),
                            o('pageshow', De),
                            he(),
                            'complete' === document.readyState ? Ve({ skipTimingApi: t }) : o('load', Ve.bind(void 0, { skipTimingApi: t }));
                    }, 0);
                }
            }
            function Ve(n) {
                var r, s;
                e.getSetting('disableOnLoadTasks') ||
                    (removeEventListener('load', Ve),
                    n.skipTimingApi ||
                        (function () {
                            if (Ae) {
                                var n = xe.getEntriesByType('navigation')[0];
                                if (n) {
                                    var t = [];
                                    v(t, n), U(t);
                                    var i = xe.getEntriesByName('yndxNavigationSource')[0];
                                    i && t.push('2091.186=' + i.value);
                                    var r = xe.getEntriesByName('yndxNavigationToken', 'yndxEntry')[0];
                                    if ((r && t.push('2091.3649=' + r.value), e.getSetting('sendConfidence') && n.confidence)) {
                                        var o = { confidence: n.confidence };
                                        t.push('-additional='.concat(encodeURIComponent(JSON.stringify(o))));
                                    }
                                    I('690.2096.2892', t);
                                }
                            }
                        })(),
                    (s = e.getSetting('periodicStatsIntervalMs')) || null === s || (s = 15e3),
                    s &&
                        ((r = setInterval(Fe, s)),
                        t(function () {
                            clearInterval(r);
                        }),
                        (Ue = r)),
                    o('beforeunload', Fe),
                    (function () {
                        if (window.PerformanceObserver) {
                            (ke = {}), (Ce = 0);
                            var e = function (e) {
                                !(function (e) {
                                    if (e && e.length)
                                        for (var n = ke, t = 0; t < e.length; t++) {
                                            var i = Le(e[t]);
                                            if (i) {
                                                var r = i.domain + '-' + i.extension,
                                                    o = (n[r] = n[r] || { count: 0, size: 0 });
                                                o.count++, (o.size += i.size);
                                            }
                                        }
                                })(e);
                            };
                            i('resource', e), i('navigation', e), f().push(Pe);
                        }
                    })(),
                    e.getSetting('disableFID') ||
                        i(
                            'first-input',
                            function (n, t) {
                                var i = n[0];
                                if (i) {
                                    var r = i.processingStart,
                                        o = { duration: i.duration, js: i.processingEnd - r, name: i.name };
                                    i.target && (o.target = c(i.target));
                                    var a = r - i.startTime;
                                    R('first-input', a, o),
                                        e.emit({ metricName: 'first-input-debug', value: a, params: { entry: i, additionalParams: o } }),
                                        t.disconnect();
                                }
                            },
                            { buffered: !0 },
                        ),
                    e.getSetting('disableCLS') ||
                        (window.PerformanceObserver &&
                            (d(ie),
                            d(te),
                            (F = X),
                            (W = null),
                            (H = null),
                            (J = null),
                            ($ = e.getSetting('clsWindowGap') || $),
                            (K = e.getSetting('clsWindowSize') || K),
                            a(
                                i('layout-shift', ne),
                                function () {
                                    return ie(!0);
                                },
                                !0,
                            ))),
                    e.getSetting('disableLCP') ||
                        !window.PerformanceObserver ||
                        (!e.getSetting('forcePaintTimeSending') && e.isVisibilityChanged()) ||
                        (d(function () {
                            e.whenActivated(oe);
                        }),
                        (Q = null),
                        (Y = null),
                        (q = !1),
                        a(
                            i('largest-contentful-paint', re),
                            function () {
                                e.whenActivated(function () {
                                    oe(!0);
                                });
                            },
                            !1,
                        )));
            }
            var Ue;
            function De(e) {
                e.persisted && k('bfcache');
            }
            function Fe() {
                var e = !1;
                f().forEach(function (n) {
                    n() && (e = !0);
                }),
                    e || clearInterval(Ue);
            }
            d(ze),
                (e.destroy = function (n) {
                    var t = e._unsubscribers;
                    n.shouldComplete && e.completeSession(!0), (e._onComplete = []);
                    for (var i = 0; i < t.length; i++) t[i]();
                    removeEventListener('visibilitychange', e._onVisibilityChange),
                        (e._unsubscribers = []),
                        (e._periodicTasks = []),
                        (e._markListeners = {}),
                        (e._deltaMarks = {});
                }),
                (e.restart = function (n, t, i) {
                    e.destroy({ shouldComplete: i }),
                        e.init(n, t),
                        addEventListener('visibilitychange', e._onVisibilityChange),
                        je(),
                        (function () {
                            for (var n = 0; n < e._onInit.length; n++) e._onInit[n]();
                        })();
                }),
                (e.setVars = function (n) {
                    Object.keys(n).forEach(function (t) {
                        e._vars[t] = n[t];
                    }),
                        P(),
                        M();
                }),
                (e.completeSession = function (n) {
                    for (var t = e._onComplete, i = 0; i < t.length; i++) t[i](n);
                }),
                je(),
                (e._periodicTasks = []),
                (e.sendHeroElement = function (e) {
                    k('2876', e);
                }),
                (e.getPageUrl = function () {
                    return window.location.href;
                }),
                (e._subpages = {}),
                (e.makeSubPage = function (n, t) {
                    var i = e._subpages[n];
                    e._subpages[n] = void 0 === i ? (i = 0) : ++i;
                    var r = !1;
                    return {
                        689.2322: s(void 0 !== t ? t : e.getTime()),
                        2924: n,
                        2925: i,
                        isCanceled: function () {
                            return r;
                        },
                        cancel: function () {
                            r = !0;
                        },
                    };
                }),
                (e.getTimeMarks = function () {
                    return g;
                }),
                (e.getDeltas = function () {
                    return p;
                }),
                (e.getVarsList = l),
                (e.getResourceTimings = x),
                (e.pushConnectionTypeTo = U),
                (e.pushTimingTo = v),
                (e.normalize = s),
                (e.sendCounter = O),
                (e.sendDelta = R),
                (e.onReady = u),
                (e.getSelector = c),
                e.getSetting('disableCLS') || (e.finalizeLayoutShiftScore = ie),
                e.getSetting('disableLCP') || (e.finalizeLargestContentfulPaint = oe),
                (e.sendTrafficData = Pe),
                (e._getCommonVars = z),
                (e._addListener = o),
                (e._observe = i),
                (e._timeout = r),
                (e.sendTTI = he),
                (e._getLongtasksStringValue = Se),
                (e.onQuietWindow = ye),
                (e.sendBFCacheTimeMark = De),
                e.correctTime ||
                    (e.correctTime = function (e) {
                        return e;
                    }),
                e.whenActivated ||
                    (e.whenActivated = function (e) {
                        return e();
                    });
        } else
            (e.getSetting = function () {
                return '';
            }),
                (e.getVarsList = function () {
                    return [];
                }),
                (e.getResourceTimings =
                    e.completeSession =
                    e.pushConnectionTypeTo =
                    e.pushTimingTo =
                    e.normalize =
                    e.sendCounter =
                    e.destroy =
                    e.restart =
                    e.setVars =
                    e.completeSession =
                    e.sendDelta =
                    e.sendTimeMark =
                    e.sendResTiming =
                    e.sendTiming =
                    e.sendTTI =
                    e.makeSubPage =
                    e.sendHeroElement =
                    e.onReady =
                    e.onQuietWindow =
                        function () {});
    })();

    Ya.Rum.observeDOMNode('2876', heroElement);
}
